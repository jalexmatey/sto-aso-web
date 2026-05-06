var Database = {
    ships: {},
    events: {},
    assignments: {},
    traits: {},
    loaded: false,

    init: function() {
        this.ships = parseShips(SHIPS_CSV);
        this.events = parseEvents(EVENTS_CSV);
        this.assignments = parseAssignments(ASSIGNMENTS_CSV);
        this.traits = parseTraits(TRAITS_CSV);
        this.loaded = true;
        console.log('Database loaded: ' + Object.keys(this.ships).length + ' ships, ' +
            Object.keys(this.events).length + ' events, ' +
            Object.keys(this.assignments).length + ' assignments, ' +
            Object.keys(this.traits).length + ' traits');
    },

    getShip: function(id) {
        return this.ships[id] || null;
    },

    getShipByName: function(name) {
        for (var key in this.ships) {
            var ship = this.ships[key];
            if (ship.name.toLowerCase() === name.toLowerCase()) {
                return ship;
            }
        }
        return null;
    },

    getAllShips: function() {
        return this.ships;
    },

    getEvents: function() {
        return this.events;
    },

    getEvent: function(name) {
        return this.events[name] || null;
    },

    getAssignments: function() {
        return this.assignments;
    },

    getAssignment: function(name) {
        return this.assignments[name] || null;
    },

    getTraits: function() {
        return this.traits;
    },

    getTrait: function(name) {
        return this.traits[name] || null;
    },

    getFilteredShips: function(filters) {
        var result = [];
        for (var key in this.ships) {
            var ship = this.ships[key];
            if (filters.faction && ship.faction !== filters.faction && ship.faction !== ShipFaction.Universal) continue;
            if (filters.role && ship.role !== filters.role) continue;
            if (filters.tier && ship.tier.value !== filters.tier) continue;
            if (filters.rarity && ship.rarity !== filters.rarity) continue;
            if (filters.search) {
                var search = filters.search.toLowerCase();
                if (ship.name.toLowerCase().indexOf(search) === -1 &&
                    ship.faction.toLowerCase().indexOf(search) === -1) continue;
            }
            result.push(ship);
        }
        result.sort(function(a, b) { return a.compareTo(b); });
        return result;
    }
};
