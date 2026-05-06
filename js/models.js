function createShip(faction, tier, rarity, role, id, name, eng, tac, sci, ability, trait) {
    var ship = {
        faction: faction,
        tier: tier,
        rarity: rarity,
        role: role,
        id: id,
        name: name,
        eng: eng,
        tac: tac,
        sci: sci,
        ability: ability,
        trait: trait,
        owned: false,
        usageCount: -1,
        oneTimeShip: null
    };

    ship.getIconName = function() {
        return this.name.replace(/[ \-]/g, '_').replace(/[\.()\[\]']/g, '') + '.png';
    };

    ship.getDisplayName = function() {
        return this.name;
    };

    ship.getOneTimeShip = function() {
        if (!this.oneTimeShip) {
            this.oneTimeShip = createOneTimeShip(this);
        }
        return this.oneTimeShip;
    };

    ship.hasTrait = function() {
        return this.trait.length > 0;
    };

    ship.compareTo = function(other) {
        var c = this.tier.value - other.tier.value;
        if (c !== 0) return c;
        c = this.rarity.localeCompare(other.rarity);
        if (c !== 0) return c;
        c = this.role.localeCompare(other.role);
        if (c !== 0) return c;
        c = this.name.localeCompare(other.name);
        if (c !== 0) return c;
        return this.id.localeCompare(other.id);
    };

    ship.setOwned = function(v) { ship.owned = v; };
    ship.setUsageCount = function(v) { ship.usageCount = v; };
    ship.incrementUsageCount = function(c) { ship.usageCount += c; };

    return ship;
}

function createOneTimeShip(baseShip) {
    var ship = createShip(baseShip.faction, baseShip.tier, baseShip.rarity, baseShip.role,
        baseShip.id, baseShip.name, baseShip.eng, baseShip.tac, baseShip.sci,
        baseShip.ability, baseShip.trait);
    ship.getDisplayName = function() { return baseShip.name + ' (One-Time)'; };
    return ship;
}

function createAssignment(eng, tac, sci, eventEng, eventTac, eventSci, eventCritRate, eventMaintenanceReduction, targetCritChance, duration) {
    var assignment = {
        name: '',
        rarity: Rarity.Common,
        requiredEng: eng || 0,
        requiredTac: tac || 0,
        requiredSci: sci || 0,
        eventEng: eventEng || 0,
        eventTac: eventTac || 0,
        eventSci: eventSci || 0,
        eventCritRate: eventCritRate || 0,
        eventMaintenanceReduction: eventMaintenanceReduction || 0,
        targetCritChance: targetCritChance || 0,
        duration: duration || 0
    };

       assignment.eng = function() { return assignment.requiredEng + assignment.eventEng; };
        assignment.tac = function() { return assignment.requiredTac + assignment.eventTac; };
        assignment.sci = function() { return assignment.requiredSci + assignment.eventSci; };
        assignment.getDuration = function() { return assignment.duration; };

    assignment.getTargetCritRate = function() {
        var total = assignment.requiredEng + assignment.eventEng +
                    assignment.requiredTac + assignment.eventTac +
                    assignment.requiredSci + assignment.eventSci;
        var chance = (assignment.targetCritChance / 100);
        var critRateMultiplier = (2 * chance) / (1 - chance);
        return Math.floor(total * critRateMultiplier);
    };

    assignment.clear = function() {
        assignment.name = '';
        assignment.rarity = Rarity.Common;
        assignment.requiredEng = 0;
        assignment.requiredTac = 0;
        assignment.requiredSci = 0;
        assignment.eventEng = 0;
        assignment.eventTac = 0;
        assignment.eventSci = 0;
        assignment.eventCritRate = 0;
        assignment.eventMaintenanceReduction = 0;
        assignment.targetCritChance = 0;
        assignment.duration = 0;
    };

    return assignment;
}

function createAdmAssignment(name, rarity, eng, tac, sci, hours, minutes) {
    var adm = {
        name: name,
        rarity: rarity,
        eng: eng,
        tac: tac,
        sci: sci,
        hours: hours,
        minutes: minutes
    };

    adm.getDuration = function() { return adm.hours * 60 + adm.minutes; };
    return adm;
}

function createEvent(name, eng, tac, sci, critRate, reward) {
    var event = {
        name: name,
        eng: eng || 0,
        tac: tac || 0,
        sci: sci || 0,
        critRate: critRate || 0,
        reward: reward || EventReward.None
    };

    event.getMaintenanceReduction = function() { return getEventMaintenanceReduction(event.reward); };
    return event;
}

function createAssignmentSolution(duration, eventCritRate) {
    var solution = {
        shipIndexes: [],
        ships: [],
        eng: 0,
        tac: 0,
        sci: 0,
        ignoreEventEng: false,
        ignoreEventTac: false,
        ignoreEventSci: false,
        eventCritRate: eventCritRate || 0,
        eventCritMultiplier: 1,
        engCritMultiplier: 1,
        tacCritMultiplier: 1,
        sciCritMultiplier: 1,
        critRate: 0,
        critChance: 0,
        maintenanceReduction: 0,
        score: 0,
        duration: duration || 0
    };

    solution.addEng = function(v) { solution.eng += v; return solution.eng; };
    solution.addTac = function(v) { solution.tac += v; return solution.tac; };
    solution.addSci = function(v) { solution.sci += v; return solution.sci; };

    solution.computeCritRate = function(e, t, s) {
        solution.critRate = Math.round(solution.eventCritRate * solution.eventCritMultiplier +
            e * solution.engCritMultiplier + t * solution.tacCritMultiplier + s * solution.sciCritMultiplier);
        return solution.critRate;
    };

    solution.addEventCritMultiplier = function(v) { solution.eventCritMultiplier += v; return solution.eventCritMultiplier; };
    solution.addEngCritMultiplier = function(v) { solution.engCritMultiplier += v; return solution.engCritMultiplier; };
    solution.addTacCritMultiplier = function(v) { solution.tacCritMultiplier += v; return solution.tacCritMultiplier; };
    solution.addSciCritMultiplier = function(v) { solution.sciCritMultiplier += v; return solution.sciCritMultiplier; };

    solution.setIgnoreEventEng = function(v) { solution.ignoreEventEng = v; };
    solution.setIgnoreEventTac = function(v) { solution.ignoreEventTac = v; };
    solution.setIgnoreEventSci = function(v) { solution.ignoreEventSci = v; };

    solution.addMaintenanceReduction = function(v) { solution.maintenanceReduction += v; };

    solution.setShips = function(ships) {
        for (var i = 0; i < solution.shipIndexes.length; i++) {
            solution.ships[i] = solution.shipIndexes[i] >= 0 ? ships[solution.shipIndexes[i]] : null;
        }
    };

    solution.getScore = function() { return solution.score; };
    solution.setScore = function(v) { solution.score = v; };

    return solution;
}

function createCompositeSolution() {
    var solutions = [];
    var score = 0;
    for (var i = 0; i < arguments.length; i++) {
        solutions.push(arguments[i]);
        score += arguments[i].getScore();
    }

    var composite = {
        solutions: solutions,
        score: score
    };

    composite.setShips = function(ships) {
        for (var i = 0; i < solutions.length; i++) {
            solutions[i].setShips(ships);
        }
    };

    composite.getScore = function() { return score; };
    composite.getSolutions = function() { return solutions; };
    composite.getSolution = function(idx) { return idx >= 0 && idx < solutions.length ? solutions[idx] : null; };
    composite.size = function() { return solutions.length; };

    return composite;
}

function createMaintenance(id, readyTime) {
    return { id: id, readyTime: readyTime || null };
}

function convertToAssignment(admAssignment) {
    if (typeof admAssignment.eng === 'function') {
        return admAssignment;
    }
    var a = createAssignment(
        admAssignment.eng || 0,
        admAssignment.tac || 0,
        admAssignment.sci || 0,
        0, 0, 0, 0, 0, 0,
        admAssignment.getDuration ? admAssignment.getDuration() : 0
    );
    a.name = admAssignment.name;
    a.rarity = admAssignment.rarity;
    return a;
}

function createAdmiral(name, faction) {
    var admiral = {
        name: name || 'New Admiral',
        faction: faction || PlayerFaction.Federation,
        active: [],
        maintenance: [],
        oneTime: [],
        usage: {},
        numAssignments: 1,
        shipPriority: ShipPriority.Active,
        assignments: [],
        currentSolutionIndex: 0,
        lastSolutions: []
    };

       admiral.initAssignments = function() {
            admiral.assignments = [];
            var a = createAssignment();
            a.name = '~~ Select Assignment ~~';
            admiral.assignments.push(a);
        };

    admiral.getActiveShips = function() {
        var ships = [];
        for (var i = 0; i < admiral.active.length; i++) {
            var ship = Database.getShip(admiral.active[i].toLowerCase());
            if (ship) ships.push(ship);
        }
        ships.sort(function(a, b) { return a.compareTo(b); });
        return ships;
    };

    admiral.getMaintenanceShips = function() {
        var ships = [];
        for (var i = 0; i < admiral.maintenance.length; i++) {
            var ship = Database.getShip(admiral.maintenance[i].id.toLowerCase());
            if (ship) ships.push(ship);
        }
        ships.sort(function(a, b) { return a.compareTo(b); });
        return ships;
    };

    admiral.getOneTimeShips = function() {
        var ships = [];
        for (var i = 0; i < admiral.oneTime.length; i++) {
            var ship = Database.getShip(admiral.oneTime[i].toLowerCase());
            if (ship) ships.push(ship.getOneTimeShip());
        }
        ships.sort(function(a, b) { return a.compareTo(b); });
        return ships;
    };

    admiral.getDeployableShips = function() {
        var deployable = [];
        var allShips = [];
        if (admiral.shipPriority === ShipPriority.OnlyActive) {
            allShips = admiral.getActiveShips();
        } else if (admiral.shipPriority === ShipPriority.Active) {
            allShips = admiral.getActiveShips().concat(admiral.getOneTimeShips());
        } else {
            allShips = admiral.getOneTimeShips().concat(admiral.getActiveShips());
        }
        for (var i = 0; i < allShips.length; i++) {
            var ship = allShips[i];
            if (!admiral.isMaintenance(ship.id)) {
                deployable.push(ship);
            }
        }
        return deployable;
    };

    admiral.isActive = function(shipId) {
        return admiral.active.indexOf(shipId.toLowerCase()) !== -1;
    };

    admiral.isMaintenance = function(shipId) {
        for (var i = 0; i < admiral.maintenance.length; i++) {
            if (admiral.maintenance[i].id.toLowerCase() === shipId.toLowerCase()) return true;
        }
        return false;
    };

    admiral.addActive = function(shipId) {
        if (admiral.active.indexOf(shipId) === -1) {
            admiral.active.push(shipId);
            return true;
        }
        return false;
    };

    admiral.removeActive = function(shipId) {
        var idx = admiral.active.indexOf(shipId);
        if (idx !== -1) admiral.active.splice(idx, 1);
    };

    admiral.addMaintenance = function(shipId, readyTime) {
        for (var i = 0; i < admiral.maintenance.length; i++) {
            if (admiral.maintenance[i].id.toLowerCase() === shipId.toLowerCase()) {
                admiral.maintenance[i].readyTime = readyTime;
                return;
            }
        }
        admiral.maintenance.push(createMaintenance(shipId, readyTime));
    };

    admiral.removeMaintenance = function(shipId) {
        for (var i = 0; i < admiral.maintenance.length; i++) {
            if (admiral.maintenance[i].id === shipId) {
                admiral.maintenance.splice(i, 1);
                return;
            }
        }
    };

    admiral.addOneTime = function(shipId) {
        if (admiral.oneTime.indexOf(shipId) === -1) {
            admiral.oneTime.push(shipId);
            return true;
        }
        return false;
    };

    admiral.removeOneTime = function(shipId) {
        var idx = admiral.oneTime.indexOf(shipId);
        if (idx !== -1) admiral.oneTime.splice(idx, 1);
    };

    admiral.useShip = function(shipId) {
        var count = admiral.usage[shipId] || 0;
        admiral.usage[shipId] = count + 1;
    };

    admiral.assignShips = function(shipIds) {
        var assignedActive = [];
        var assignedOneTime = [];
        for (var i = 0; i < shipIds.length; i++) {
            var shipId = shipIds[i];
            var activeIdx = admiral.active.indexOf(shipId);
            if (activeIdx !== -1) {
                admiral.active.splice(activeIdx, 1);
                assignedActive.push(shipId);
                admiral.useShip(shipId);
            }
            var oneTimeIdx = admiral.oneTime.indexOf(shipId);
            if (oneTimeIdx !== -1) {
                admiral.oneTime.splice(oneTimeIdx, 1);
                assignedOneTime.push(shipId);
                admiral.useShip(shipId);
            }
        }
        return { active: assignedActive, oneTime: assignedOneTime };
    };

    admiral.validateShips = function() {
        var allShips = Database.getAllShips();
        for (var i = admiral.active.length - 1; i >= 0; i--) {
            if (!allShips[admiral.active[i].toLowerCase()]) admiral.active.splice(i, 1);
        }
        for (var i = admiral.maintenance.length - 1; i >= 0; i--) {
            if (!allShips[admiral.maintenance[i].id.toLowerCase()]) admiral.maintenance.splice(i, 1);
        }
        for (var i = admiral.oneTime.length - 1; i >= 0; i--) {
            if (!allShips[admiral.oneTime[i].toLowerCase()]) admiral.oneTime.splice(i, 1);
        }
        for (var key in admiral.usage) {
            if (!allShips[key.toLowerCase()]) delete admiral.usage[key];
        }
    };

    admiral.solveAssignments = function(ships) {
        var a1 = admiral.assignments[0];
        var s1 = a1 ? convertToAssignment(a1) : null;
        admiral.lastSolutions = Solver.solve(s1, null, null, ships, 10);
        admiral.currentSolutionIndex = 0;
        return admiral.lastSolutions;
    };

    admiral.serialize = function() {
        return {
            name: admiral.name,
            faction: admiral.faction,
            active: admiral.active,
            maintenance: admiral.maintenance,
            oneTime: admiral.oneTime,
            usage: admiral.usage,
            numAssignments: 1,
            shipPriority: admiral.shipPriority.configValue,
            assignments: admiral.assignments.slice(0, 1).map(function(a) {
                return {
                    name: a.name,
                    rarity: a.rarity,
                    requiredEng: a.requiredEng,
                    requiredTac: a.requiredTac,
                    requiredSci: a.requiredSci,
                    eventEng: a.eventEng,
                    eventTac: a.eventTac,
                    eventSci: a.eventSci,
                    eventCritRate: a.eventCritRate,
                    eventMaintenanceReduction: a.eventMaintenanceReduction,
                    eventSelected: a.eventSelected || '',
                    targetCritChance: a.targetCritChance,
                    duration: a.duration
                };
            })
        };
    };

    admiral.deserialize = function(data) {
        admiral.name = data.name;
        admiral.faction = data.faction;
        admiral.active = data.active || [];
        admiral.maintenance = data.maintenance || [];
        admiral.oneTime = data.oneTime || [];
        admiral.usage = data.usage || {};
         admiral.numAssignments = 1;
        admiral.shipPriority = ShipPriority[data.shipPriority] || ShipPriority.Active;
        admiral.initAssignments();
        if (data.assignments && data.assignments.length > 0) {
            var da = data.assignments[0];
            admiral.assignments[0] = createAssignment(
                da.requiredEng, da.requiredTac, da.requiredSci,
                da.eventEng, da.eventTac, da.eventSci,
                da.eventCritRate, da.eventMaintenanceReduction,
                da.targetCritChance, da.duration);
            admiral.assignments[0].name = da.name || '';
            admiral.assignments[0].rarity = da.rarity || Rarity.Common;
            admiral.assignments[0].eventSelected = da.eventSelected || '';
        }
    };

    admiral.initAssignments();
    return admiral;
}

function createAdmirals() {
    var admData = {
        admirals: [createAdmiral()],
        getFederationAdmirals: function() {
            return this.admirals.filter(function(a) {
                return [PlayerFaction.AllFactions, PlayerFaction.Federation,
                    PlayerFaction.RomulanFed, PlayerFaction.JemHadarFed].indexOf(a.faction) !== -1;
            });
        },
        getKlingonAdmirals: function() {
            return this.admirals.filter(function(a) {
                return [PlayerFaction.AllFactions, PlayerFaction.Klingon,
                    PlayerFaction.RomulanKDF, PlayerFaction.JemHadarKDF].indexOf(a.faction) !== -1;
            });
        },
        getRomulanAdmirals: function() {
            return this.admirals.filter(function(a) {
                return [PlayerFaction.AllFactions, PlayerFaction.RomulanFed,
                    PlayerFaction.RomulanKDF].indexOf(a.faction) !== -1;
            });
        },
        getJemHadarAdmirals: function() {
            return this.admirals.filter(function(a) {
                return [PlayerFaction.AllFactions, PlayerFaction.JemHadarFed,
                    PlayerFaction.JemHadarKDF].indexOf(a.faction) !== -1;
            });
        },
        addAdmiral: function(admiral) {
            if (this.admirals.indexOf(admiral) === -1) {
                this.admirals.push(admiral);
            }
        },
        removeAdmiral: function(admiral) {
            var idx = this.admirals.indexOf(admiral);
            if (idx !== -1) this.admirals.splice(idx, 1);
        },
        findByName: function(name) {
            for (var i = 0; i < this.admirals.length; i++) {
                if (this.admirals[i].name.toLowerCase() === name.toLowerCase()) return this.admirals[i];
            }
            return null;
        },
        serialize: function() {
            return this.admirals.map(function(a) { return a.serialize(); });
        },
        deserialize: function(data) {
            this.admirals = [];
            for (var i = 0; i < data.length; i++) {
                var adm = createAdmiral();
                adm.deserialize(data[i]);
                this.admirals.push(adm);
            }
            if (this.admirals.length === 0) {
                this.admirals.push(createAdmiral());
            }
        }
    };
    return admData;
}
