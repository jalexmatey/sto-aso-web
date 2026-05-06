function solve(a1, a2, a3, ships, solutionCount) {
    var assignments = [];
    if (a1) assignments.push(a1);
    if (a2) assignments.push(a2);
    if (a3) assignments.push(a3);

    if (assignments.length === 0) return null;

    var numAssignments = assignments.length;
    var allAssignmentSolutions = [];

    for (var ai = 0; ai < numAssignments; ai++) {
        var assignment = assignments[ai];
        var solutions = computeAssignmentSolutions(assignment, ships);
        allAssignmentSolutions.push(solutions);
    }

    var solutions = [];

    function iterate(idx, currentSolutions) {
        if (idx >= numAssignments) {
            if (!isValid(currentSolutions)) return;
            var composite = createCompositeSolution.apply(null, currentSolutions);
            composite.setShips(ships);
            solutions.push(composite);
            return;
        }

        var assignmentSolutions = allAssignmentSolutions[idx];
        for (var i = 0; i < assignmentSolutions.length; i++) {
            currentSolutions[idx] = assignmentSolutions[i];
            iterate(idx + 1, currentSolutions);
        }
    }

    var placeholders = new Array(numAssignments);
    iterate(0, placeholders);

    solutions.sort(function(a, b) { return a.getScore() - b.getScore(); });

    var unique = [];
    var seen = {};
    for (var i = 0; i < solutions.length && unique.length < solutionCount; i++) {
        var key = getShipsKey(solutions[i]);
        if (!seen[key]) {
            seen[key] = true;
            unique.push(solutions[i]);
        }
    }

    return unique.length > 0 ? unique : null;
}

function computeAssignmentSolutions(assignment, ships) {
    var MAX_SHIPS = 20;
    if (ships.length > MAX_SHIPS) {
        ships = ships.slice(0, MAX_SHIPS);
    }
    var solutions = [];
    var numShips = ships.length;

    for (var slot3 = -1; slot3 < numShips; slot3++) {
        for (var slot2 = -1; slot2 < numShips; slot2++) {
            if (slot2 <= slot3 && slot3 !== -1) continue;
            for (var slot1 = -1; slot1 < numShips; slot1++) {
                if (slot1 <= slot2) continue;

                var solution = createAssignmentSolution(assignment.getDuration(), assignment.eventCritRate || 0);
                solution.shipIndexes = [slot1, slot2, slot3];

                var ship1 = slot1 >= 0 ? ships[slot1] : null;
                var ship2 = slot2 >= 0 ? ships[slot2] : null;
                var ship3 = slot3 >= 0 ? ships[slot3] : null;

                if (ship1) addShipToSolution(solution, ship1, ship2, ship3, assignment);
                if (ship2) addShipToSolution(solution, ship2, ship1, ship3, assignment);
                if (ship3) addShipToSolution(solution, ship3, ship1, ship2, assignment);

                solution.addMaintenanceReduction(assignment.eventMaintenanceReduction || 0);

                var assignmentEng = solution.ignoreEventEng ? assignment.requiredEng : assignment.eng();
                var assignmentTac = solution.ignoreEventTac ? assignment.requiredTac : assignment.tac();
                var assignmentSci = solution.ignoreEventSci ? assignment.requiredSci : assignment.sci();
                var assignmentCritRate = assignment.getTargetCritRate();

                var eng = solution.eng - assignmentEng;
                var tac = solution.tac - assignmentTac;
                var sci = solution.sci - assignmentSci;
                var critRate = solution.computeCritRate(
                    eng > 0 ? eng : 0,
                    tac > 0 ? tac : 0,
                    sci > 0 ? sci : 0
                ) - assignmentCritRate;

                var absEng = Math.abs(eng);
                var absTac = Math.abs(tac);
                var absSci = Math.abs(sci);

                var scoreEng = absEng * (eng > 0 ? 0 : 10);
                var scoreTac = absTac * (tac > 0 ? 0 : 10);
                var scoreSci = absSci * (sci > 0 ? 0 : 10);
                var scoreCritRate = Math.abs(critRate);

                var denominator = assignmentEng + assignmentTac + assignmentSci;
                var score = denominator > 0 ? (scoreEng + scoreTac + scoreSci + scoreCritRate) / denominator : 0;

                solution.setScore(score);
                solution.engForDisplay = solution.eng;
                solution.tacForDisplay = solution.tac;
                solution.sciForDisplay = solution.sci;
                solution.critRateForDisplay = solution.critRate;
                solution.effectiveReqEng = assignmentEng;
                solution.effectiveReqTac = assignmentTac;
                solution.effectiveReqSci = assignmentSci;
                solution.effectiveReqCrit = assignmentCritRate;

                solutions.push(solution);
            }
        }
    }

    solutions.sort(function(a, b) { return a.getScore() - b.getScore(); });
    return solutions;
}

function addShipToSolution(solution, ship, otherShip1, otherShip2, assignment) {
    solution.addEng(ship.eng);
    solution.addTac(ship.tac);
    solution.addSci(ship.sci);

    if (ship.ability) {
        var bonusBefore = {
            ignoreEventEng: solution.ignoreEventEng,
            ignoreEventTac: solution.ignoreEventTac,
            ignoreEventSci: solution.ignoreEventSci,
            eventCritMultiplier: solution.eventCritMultiplier,
            engCritMultiplier: solution.engCritMultiplier,
            tacCritMultiplier: solution.tacCritMultiplier,
            sciCritMultiplier: solution.sciCritMultiplier
        };

        ship.ability.procShip(solution, ship, otherShip1);
        ship.ability.procShip(solution, ship, otherShip2);
        ship.ability.procAssignment(solution, assignment);
        ship.ability.procCriticals(solution, assignment);

        var bonusAfter = {
            ignoreEventEng: solution.ignoreEventEng,
            ignoreEventTac: solution.ignoreEventTac,
            ignoreEventSci: solution.ignoreEventSci,
            eventCritMultiplier: solution.eventCritMultiplier,
            engCritMultiplier: solution.engCritMultiplier,
            tacCritMultiplier: solution.tacCritMultiplier,
            sciCritMultiplier: solution.sciCritMultiplier
        };

        if (!solution.shipBonuses) solution.shipBonuses = [];
        solution.shipBonuses.push({
            shipName: ship.name,
            abilityDesc: ship.ability.desc || '',
            bonusBefore: bonusBefore,
            bonusAfter: bonusAfter
        });
    }
}

function isValid(solutions) {
    var usedShips = {};
    for (var i = 0; i < solutions.length; i++) {
        var sol = solutions[i];
        if (!sol || !sol.shipIndexes) continue;
        for (var j = 0; j < sol.shipIndexes.length; j++) {
            var idx = sol.shipIndexes[j];
            if (idx < 0) continue;
            if (usedShips[idx]) return false;
            usedShips[idx] = true;
        }
    }
    return true;
}

function getShipsKey(composite) {
    var solutions = composite.getSolutions();
    var key = '';
    for (var i = 0; i < solutions.length; i++) {
        for (var j = 0; j < solutions[i].shipIndexes.length; j++) {
            key += solutions[i].shipIndexes[j] + ',';
        }
    }
    return key;
}

var Solver = {
    solve: solve
};
