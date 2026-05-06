# STO Admiralty System Optimizer (Browser)

A browser-based port of the Sto-ASO desktop application for Star Trek Online. Optimize your admiral's fleet by finding the best ship combinations for mission assignments.

## Features

- **Ship optimization** — Brute-force solver finds the best ship combinations for any mission assignment
- **Multi-profile support** — Create and switch between multiple admiral profiles
- **Assignment browser** — Browse all 222 mission assignments with stats and requirements
- **Event modifiers** — Apply event bonuses (ENG/TAC/SCI/Crit) to assignments
- **Maintenance system** — Track ships in maintenance with live countdown timers
- **Ship browser** — Filter ships by faction, role, tier, and rarity
- **Ship abilities** — Full special ability parsing (critical rating multipliers, maintenance reduction, event ignore, etc.)
- **Dark/Light theme** — Toggle between dark and light modes
- **Persistent data** — Profiles saved to localStorage, ship icons to IndexedDB
- **Import/Export** — Export and import active ships as text files
- **Works offline** — All data bundled, no server required

## Getting Started

### Running Locally

1. Clone or download this repository
2. Open `browser-app/index.html` in a modern web browser
3. The app works directly from `file://` — no server needed

### Requirements

- Any modern browser (Chrome, Firefox, Edge, Safari)
- JavaScript enabled

## Usage

### Creating an Admiral

Click **Create Admiral** in the header, enter a name, and select an assignment.

### Assigning Ships

1. Select an assignment from the dropdown
2. Click **Assign** on a solution to automatically add the best ships to your fleet
3. Or manually add ships using the **Add** button in the ship browser

### Managing Ships

- **Active ships** — Ships currently assigned to your fleet, included in solver results
- **Maintenance** — Double-click a ship to move it to maintenance; it will be excluded from solver results until ready
- **One-Time** — Ships used only once, tracked separately
- **Ready time** — Hover over a maintenance ship to see when it will be ready

### Importing Ships

Use the **Import Active Ships** button to load ships from a `.txt` file. Each line should contain a ship name (e.g., `Aves Dyson Science Destroyer` or `Aves Dyson Science Destroyer [12345]`).

### Importing Assignments

Use the **Import Assignments** button to load a `.csv` file of mission assignments.

## Data

All game data is embedded in the application:

- **Ships** — ~726 ships with ENG/TAC/SCI stats, factions, tiers, rarities, and special abilities
- **Assignments** — 222 mission assignments with rarity and stat requirements
- **Events** — 40 event modifiers that affect mission stats
- **Traits** — 132 ship traits with descriptions

## Architecture

| Java Source | Browser Equivalent |
|-------------|-------------------|
| `ShipImpl.java` | `models.js` (Ship) |
| `Assignment.java` | `models.js` (Assignment) |
| `AdmAssignment.java` | `models.js` (AdmAssignment) |
| `Solver.java` | `solver.js` |
| `SpecialAbility*` | `abilities.js` |
| `ruleparser/*` | `ruleparsers.js` |
| `rewards/*` | `rewards.js` |
| `Admiral.java` | `models.js` (Admiral) |
| `Datastore.java` | `persistence.js` |
| `ShipDatabaseParser.java` | `data.js` |
| `AssignmentsParser.java` | `data.js` |
| `EventsParser.java` | `data.js` |
| `TraitsParser.java` | `data.js` |
| `AdmiraltyConsole.java` | `ui.js` |

## File Structure

```
browser-app/
├── index.html          # Main HTML page
├── css/
│   └── styles.css      # App styles (dark/light themes)
├── js/
│   ├── main.js         # Entry point
│   ├── enums.js        # Enums (Tier, Rarity, Faction, etc.)
│   ├── swing.js        # Color constants, string converters
│   ├── models.js       # Data models (Ship, Admiral, etc.)
│   ├── rewards.js      # Reward implementations
│   ├── abilities.js    # Special ability implementations
│   ├── ruleparsers.js  # Regex-based ability parsers
│   ├── csv.js          # Excel-style CSV parser
│   ├── data.js         # Database singleton (ships, events, assignments, traits)
│   ├── solver.js       # Core optimization algorithm
│   ├── persistence.js  # localStorage + IndexedDB
│   ├── ui.js           # Main UI controller
│   └── embedded-data.js # Embedded CSV data (~148KB)
└── data/
    └── default.csv     # Default assignment data
```

## Scoring

The solver uses a scoring system to evaluate ship combinations:

```
score = (scoreEng + scoreTac + scoreSci + scoreCritRate) / (eng + tac + sci)
```

Each stat score is calculated based on how well the ships meet the assignment requirements. Deficits are penalized (x10 multiplier), and crit rate shortfalls use a x1 multiplier. The solver picks the combination with the **lowest** score (best fit).

## License

Based on the original [Sto-ASO](https://github.com/intrinsical/sto-aso) and it's [fork](https://github.com/laurinius/sto-aso) Java application.
