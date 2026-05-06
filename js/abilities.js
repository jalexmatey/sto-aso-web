function createSpecialAbility(reward) {
    var ability = {
        reward: reward,
        desc: 'Unknown'
    };
    ability.setDescription = function(d) { ability.desc = d; };
    return ability;
}

function createNoOp(reward) {
    var base = createSpecialAbility(reward);
    base.procShip = function(solution, source, target) {};
    base.procAssignment = function(solution, assignment) {};
    base.procCriticals = function(solution, assignment) {};
    base.toParamString = function() { return toFunctionString('NoOp', ''); };
    return base;
}

function createAlwaysApply(reward) {
    var base = createSpecialAbility(reward);
    base.procShip = function(solution, source, target) {};
    base.procAssignment = function(solution, assignment) {
        this.reward.apply(assignment, solution);
    };
    base.procCriticals = function(solution, assignment) {};
    base.toParamString = function() { return toFunctionString('AlwaysApply', ''); };
    return base;
}

function createProcCritRate(reward) {
    var base = createSpecialAbility(reward);
    base.procShip = function(solution, source, target) {};
    base.procAssignment = function(solution, assignment) {};
    base.procCriticals = function(solution, assignment) {
        this.reward.apply(assignment, solution);
    };
    base.toParamString = function() { return toFunctionString('ProcCritRate', ''); };
    return base;
}

function createPerAnyShip(reward, notSmallCraft) {
    var base = createSpecialAbility(reward);
    base.notSmallCraft = notSmallCraft || false;
    base.procShip = function(solution, source, target) {
        if (!target) return;
        if (source.role === Role.Smc) {
            if (this.notSmallCraft && target.role === Role.Smc) return;
            this.reward.apply(null, solution);
        } else {
            if (target.role === Role.Smc) return;
            this.reward.apply(null, solution);
        }
    };
    base.procAssignment = function(solution, assignment) {};
    base.procCriticals = function(solution, assignment) {};
    base.toParamString = function() { return toFunctionString('PerAnyShip', 'notSmallCraft:' + this.notSmallCraft); };
    return base;
}

function createPerShipCategory(reward, categories) {
    var base = createSpecialAbility(reward);
    base.categories = categories || [];
    base.procShip = function(solution, source, target) {
        if (!target) return;
        for (var i = 0; i < base.categories.length; i++) {
            if (target.role === base.categories[i]) {
                base.reward.apply(null, solution);
                break;
            }
        }
    };
    base.procAssignment = function(solution, assignment) {};
    base.procCriticals = function(solution, assignment) {};
    base.toParamString = function() { return toFunctionString('PerShipCategory', JSON.stringify(base.categories)); };
    return base;
}

function createWhenAlone(reward) {
    var base = createSpecialAbility(reward);
    base.procShip = function(solution, source, target) {};
    base.procAssignment = function(solution, assignment) {
        var counter = 0;
        for (var i = 0; i < solution.shipIndexes.length; i++) {
            if (solution.shipIndexes[i] >= 0) counter++;
        }
        if (counter === 1) {
            base.reward.apply(assignment, solution);
        }
    };
    base.procCriticals = function(solution, assignment) {};
    base.toParamString = function() { return toFunctionString('WhenAlone', ''); };
    return base;
}

function createAnd(ability1, ability2) {
    var base = createSpecialAbility(null);
    base.ability1 = ability1;
    base.ability2 = ability2;
    base.procShip = function(solution, source, target) {
        ability1.procShip(solution, source, target);
        ability2.procShip(solution, source, target);
    };
    base.procAssignment = function(solution, assignment) {
        ability1.procAssignment(solution, assignment);
        ability2.procAssignment(solution, assignment);
    };
    base.procCriticals = function(solution, assignment) {
        ability1.procCriticals(solution, assignment);
        ability2.procCriticals(solution, assignment);
    };
    base.toParamString = function() { return toFunctionString('And', ability1.toString() + ',' + ability2.toString()); };
    return base;
}
