function parseCSV(text) {
    var lines = text.split(/\r?\n/);
    if (lines.length === 0) return [];
    var headers = parseCSVLine(lines[0]);
    var expectedCols = headers.length;

    var mergedLines = [];
    var currentLine = '';
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        if (!currentLine) {
            currentLine = line;
        } else {
            var testValues = parseCSVLine(currentLine + line);
            if (testValues.length < expectedCols) {
                currentLine += line;
            } else {
                mergedLines.push(currentLine);
                currentLine = line;
            }
        }
    }
    if (currentLine) mergedLines.push(currentLine);

    var records = [];
    for (var i = 0; i < mergedLines.length; i++) {
        var line = mergedLines[i].trim();
        if (!line) continue;
        var values = parseCSVLine(line);
        if (values.length === expectedCols) {
            var record = {};
            for (var j = 0; j < expectedCols; j++) {
                record[headers[j].trim()] = values[j] ? values[j].trim() : '';
            }
            records.push(record);
        }
    }
    return records;
}

function parseCSVLine(line) {
    var result = [];
    var current = '';
    var inQuotes = false;
    for (var i = 0; i < line.length; i++) {
        var ch = line[i];
        if (inQuotes) {
            if (ch === '"') {
                if (i + 1 < line.length && line[i + 1] === '"') {
                    current += '"';
                    i++;
                } else {
                    inQuotes = false;
                }
            } else {
                current += ch;
            }
        } else {
            if (ch === '"') {
                inQuotes = true;
            } else if (ch === ',') {
                result.push(current);
                current = '';
            } else {
                current += ch;
            }
        }
    }
    result.push(current);
    return result;
}

function parseShips(csvText) {
    var records = parseCSV(csvText);
    var ships = {};
    for (var i = 0; i < records.length; i++) {
        try {
            var rec = records[i];
            var faction = ShipFaction[rec.Faction] || ShipFaction.None;
            var tierVal = parseInt(rec.Tier) || 0;
            var tier = Tier.None;
            for (var key in Tier) {
                if (Tier[key].value === tierVal) { tier = Tier[key]; break; }
            }
            var rarity = Rarity[rec.Rarity] || Rarity.None;
            var role = Role[rec.Type] || Role.None;
            var name = rec.Name ? rec.Name.replace(/\u2019/g, "'") : rec.Ship;
            var id = rec.Id || name;
            var eng = parseInt(rec.Eng) || 0;
            var tac = parseInt(rec.Tac) || 0;
            var sci = parseInt(rec.Sci) || 0;
            var ability = parseSpecialAbility(rec.Bonus);
            var trait = rec.Trait || '';
            var ship = createShip(faction, tier, rarity, role, id.toLowerCase(), name, eng, tac, sci, ability, trait);
            ships[id.toLowerCase()] = ship;
        } catch (e) {
            console.warn('Error parsing ship record:', e);
        }
    }
    return ships;
}

function parseEvents(csvText) {
    var records = parseCSV(csvText);
    var events = {};
    for (var i = 0; i < records.length; i++) {
        try {
            var rec = records[i];
            var name = rec.Event || rec.event || rec.Name || '';
            var eng = parseInt(rec.Eng) || parseInt(rec.eng) || 0;
            var tac = parseInt(rec.Tac) || parseInt(rec.tac) || 0;
            var sci = parseInt(rec.Sci) || parseInt(rec.sci) || 0;
            var critRate = parseInt(rec.Crit) || parseInt(rec.crit) || 0;
            var reward = EventReward[rec.Reward] || EventReward.None;
            var event = createEvent(name, eng, tac, sci, critRate, reward);
            events[name.toLowerCase()] = event;
        } catch (e) {
            console.warn('Error parsing event record:', e);
        }
    }
    return events;
}

function parseAssignments(csvText) {
    var records = parseCSV(csvText);
    var assignments = {};
    for (var i = 0; i < records.length; i++) {
        try {
            var rec = records[i];
            var name = rec.Assignment || rec.assignment || rec.Name || '';
            var rarity = Rarity[rec.Rarity] || Rarity.Common;
            var eng = parseInt(rec.Eng) || parseInt(rec.eng) || 0;
            var tac = parseInt(rec.Tac) || parseInt(rec.tac) || 0;
            var sci = parseInt(rec.Sci) || parseInt(rec.sci) || 0;
            var hours = parseInt(rec.Hours) || parseInt(rec.hours) || 0;
            var minutes = parseInt(rec.Minutes) || parseInt(rec.minutes) || 0;
            var assignment = createAdmAssignment(name, rarity, eng, tac, sci, hours, minutes);
            assignments[name.toLowerCase()] = assignment;
        } catch (e) {
            console.warn('Error parsing assignment record:', e);
        }
    }
    return assignments;
}

function parseTraits(csvText) {
    var records = parseCSV(csvText);
    var traits = {};
    for (var i = 0; i < records.length; i++) {
        try {
            var rec = records[i];
            var trait = rec.Trait || rec.trait || '';
            var attributes = rec.Attributes || rec.attributes || '';
            var description = rec.Description || rec.description || '';
            var title = trait;
            if (attributes) title += ' (' + attributes + ')';
            var htmlDesc = '';
            if (description) {
                htmlDesc = '<html><h1>' + title + '</h1><p>' +
                    description.replace(/\$/g, '<br>') + '</p></html>';
            }
            traits[trait.toLowerCase()] = htmlDesc;
        } catch (e) {
            console.warn('Error parsing trait record:', e);
        }
    }
    return traits;
}
