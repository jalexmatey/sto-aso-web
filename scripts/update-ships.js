#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const CARGO_API = 'https://stowiki.net/w/api.php';
const PAGE_SIZE = 500;
const DELAY_MS = 600;

const FACTION_MAP = {
    fed: 'Federation',
    kdf: 'Klingon',
    rom: 'Romulan',
    dom: 'JemHadar',
    cross: 'Universal'
};

const RARITY_MAP = {
    common: 'Common',
    uncommon: 'Uncommon',
    rare: 'Rare',
    veryrare: 'VeryRare',
    ultrarare: 'UltraRare',
    epic: 'Epic'
};

const TYPE_MAP = {
    eng: 'Eng',
    tac: 'Tac',
    sci: 'Sci',
    smallcraft: 'Smc'
};

function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'STO-ASO-Ship-Updater/1.0' } }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error('Failed to parse JSON: ' + data.substring(0, 200)));
                }
            });
            res.on('error', reject);
        }).on('error', reject);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllShips() {
    const ships = [];
    let offset = 0;
    let hasMore = true;

    console.log('Fetching admiralty ships from STO Wiki Cargo API...');

    while (hasMore) {
        const url = `${CARGO_API}?action=cargoquery` +
            `&tables=Admiralty` +
            `&fields=name,faction,tier,rarity,type,eng,tac,sci,bonus` +
            `&limit=${PAGE_SIZE}&offset=${offset}&format=json`;

        const result = await fetchJSON(url);
        const rows = result.cargoquery || [];

        for (const row of rows) {
            const t = row.title;
            if (!t.name || !t.faction) continue;
            ships.push(t);
        }

        console.log(`  Fetched ${ships.length} ships so far...`);

        if (rows.length < PAGE_SIZE) {
            hasMore = false;
        } else {
            offset += PAGE_SIZE;
            await sleep(DELAY_MS);
        }
    }

    console.log(`Total ships fetched from wiki: ${ships.length}`);
    return ships;
}

async function fetchFleetFlags() {
    const fleetNames = new Set();
    let offset = 0;
    let hasMore = true;

    console.log('Fetching fleet ship flags...');

    while (hasMore) {
        const url = `${CARGO_API}?action=cargoquery` +
            `&tables=Ships` +
            `&fields=name,fc` +
            `&where=fc="1"` +
            `&limit=${PAGE_SIZE}&offset=${offset}&format=json`;

        const result = await fetchJSON(url);
        const rows = result.cargoquery || [];

        for (const row of rows) {
            const name = row.title.name;
            if (name) fleetNames.add(name.replace(/&#039;/g, "'").replace(/&amp;/g, '&'));
        }

        if (rows.length < PAGE_SIZE) {
            hasMore = false;
        } else {
            offset += PAGE_SIZE;
            await sleep(DELAY_MS);
        }
    }

    console.log(`Found ${fleetNames.size} fleet ships`);
    return fleetNames;
}

function normalizeForMatch(name) {
    return name
        .toLowerCase()
        .replace(/[''\u2019]/g, "'")
        .replace(/class\s+/g, ' ')
        .replace(/\s*\([^)]*\)\s*/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function parseExistingCSV(csvText) {
    const lines = csvText.split(/\r?\n/);
    const ships = {};
    const header = lines[0];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = line.split(',');
        if (values.length < 11) continue;

        const name = values[2];
        const id = values[10];
        if (name && id) {
            ships[name.toLowerCase()] = { name, id, line: values };
        }
    }

    return { header, ships };
}

function generateUUID() {
    return crypto.randomUUID();
}

function escapeCSV(value) {
    const str = String(value);
    if (str.includes(',') || str.includes('"') || str.includes('\n')) {
        return '"' + str.replace(/"/g, '""') + '"';
    }
    return str;
}

function buildCSV(wikiShips, fleetFlags, existingMap) {
    const rows = [];
    const usedIds = new Set();

    for (const ship of wikiShips) {
        const faction = FACTION_MAP[ship.faction];
        if (!faction) continue;

        if (ship.name.includes('Admiralty System')) continue;

        const isSmallcraft = ship.type === 'smallcraft';
        const tier = isSmallcraft ? 0 : (parseInt(ship.tier) || 0);
        const rarity = RARITY_MAP[ship.rarity] || 'Common';
        const role = TYPE_MAP[ship.type] || 'Eng';
        const eng = parseInt(ship.eng) || 0;
        const tac = parseInt(ship.tac) || 0;
        const sci = parseInt(ship.sci) || 0;
        const bonus = (ship.bonus || '').replace(/\u2019/g, "'");

        let name = ship.name.replace(/\u2019/g, "'");

        const isFleet = fleetFlags.has(ship.name) ||
            fleetFlags.has(name) ||
            name.startsWith('Fleet ');

        const trait = '';

        let id = null;
        const existingNames = Object.keys(existingMap);
        const lowerName = name.toLowerCase();

        if (existingMap[lowerName]) {
            id = existingMap[lowerName].id;
        } else {
            const normalized = normalizeForMatch(name);
            for (const en of existingNames) {
                if (normalizeForMatch(en) === normalized) {
                    id = existingMap[en].id;
                    break;
                }
            }
        }

        if (!id) {
            id = generateUUID();
        }

        if (usedIds.has(id)) {
            id = generateUUID();
        }
        usedIds.add(id);

        const row = [
            faction,
            tier,
            name,
            rarity,
            role,
            eng,
            tac,
            sci,
            bonus,
            trait,
            id
        ];

        rows.push(row.map(escapeCSV).join(','));
    }

    return rows;
}

function sortShips(rows) {
    const factionOrder = { Federation: 0, Klingon: 1, Romulan: 2, JemHadar: 3, Universal: 4 };

    return rows.sort((a, b) => {
        const aParts = a.split(',');
        const bParts = b.split(',');

        const aFaction = factionOrder[aParts[0]] ?? 5;
        const bFaction = factionOrder[bParts[0]] ?? 5;
        if (aFaction !== bFaction) return aFaction - bFaction;

        const aTier = parseInt(aParts[1]) || 0;
        const bTier = parseInt(bParts[1]) || 0;
        if (aTier !== bTier) return aTier - bTier;

        const rarityOrder = { Common: 0, Uncommon: 1, Rare: 2, 'Very Rare': 3, 'Ultra Rare': 4, Epic: 5 };
        const aRarity = rarityOrder[aParts[3]] ?? 5;
        const bRarity = rarityOrder[bParts[3]] ?? 5;
        if (aRarity !== bRarity) return aRarity - bRarity;

        const aName = aParts[2] || '';
        const bName = bParts[2] || '';
        return aName.localeCompare(bName);
    });
}

async function main() {
    const rootDir = path.join(__dirname, '..');
    const csvPath = path.join(rootDir, 'app', 'data', 'ships.csv');
    const embeddedPath = path.join(rootDir, 'app', 'js', 'embedded-data.js');

    // Read existing CSV for UUID preservation
    let existingCSV = '';
    let existingMap = {};
    try {
        existingCSV = fs.readFileSync(csvPath, 'utf8');
        const parsed = parseExistingCSV(existingCSV);
        existingMap = parsed.ships;
        console.log(`Loaded ${Object.keys(existingMap).length} existing ships from CSV`);
    } catch (e) {
        console.log('No existing CSV found, starting fresh');
    }

    // Fetch from wiki
    const wikiShips = await fetchAllShips();
    const fleetFlags = await fetchFleetFlags();

    // Build CSV rows
    const csvRows = buildCSV(wikiShips, fleetFlags, existingMap);
    const sortedRows = sortShips(csvRows);

    const header = 'Faction,Tier,Name,Rarity,Type,Eng,Tac,Sci,Bonus,Trait,Id';
    const csvContent = header + '\n' + sortedRows.join('\n') + '\n';

    // Write CSV
    fs.writeFileSync(csvPath, csvContent, 'utf8');
    console.log(`\nWrote ${sortedRows.length} ships to ${csvPath}`);

    // Write embedded-data.js (ships section only)
    const embeddedContent = `var SHIPS_CSV = \`${csvContent}\`;\n`;
    const eventsAssignmentsTraits = fs.readFileSync(embeddedPath, 'utf8');
    const eventsStart = eventsAssignmentsTraits.indexOf('\nvar EVENTS_CSV');
    if (eventsStart !== -1) {
        const rest = eventsAssignmentsTraits.substring(eventsStart + 1);
        fs.writeFileSync(embeddedPath, embeddedContent + '\n' + rest, 'utf8');
    } else {
        fs.writeFileSync(embeddedPath, embeddedContent, 'utf8');
    }
    console.log(`Updated ${embeddedPath}`);

    // Summary
    const factions = {};
    for (const row of sortedRows) {
        const f = row.split(',')[0];
        factions[f] = (factions[f] || 0) + 1;
    }
    console.log('\nShip count by faction:');
    for (const [f, c] of Object.entries(factions).sort()) {
        console.log(`  ${f}: ${c}`);
    }
    console.log(`  Total: ${sortedRows.length}`);
}

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
