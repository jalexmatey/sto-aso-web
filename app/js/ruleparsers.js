function parseSpecialAbility(text) {
    text = (text || '').trim();
    if (!text || text === '-') {
        return createNoOp(createRewardNothing());
    }

    if (text.toLowerCase().indexOf('and') !== -1) {
        var parts = text.split(/\s+and\s+/);
        if (parts.length === 2) {
            var ability1 = parseRuleType(parts[0].trim());
            if (ability1 && ability1.constructor.name !== 'NoOp') {
                var ability2 = parseRuleType(parts[1].trim());
                if (ability2 && ability2.constructor.name !== 'NoOp') {
                    var andAbility = createAnd(ability1, ability2);
                    andAbility.setDescription(text);
                    return andAbility;
                }
            }
        }
    }

    var ability = parseRuleType(text);
    if (ability) ability.setDescription(text);
    return ability;
}

function parseRuleType(text) {
    var parsers = [
        createRPIgnoreEvents(),
        createRPIgnoreAllEventModifiers(),
        createRPCriticalRating(),
        createRPMaintenance(),
        createRPWhenAlone(),
        createRPPerShip()
    ];
    for (var i = 0; i < parsers.length; i++) {
        var ability = parsers[i].parse(text);
        if (ability) return ability;
    }
    return createNoOp(createRewardNothing());
}

function createRuleParser(regex, examples) {
    var pattern = new RegExp(regex, 'i');
    return {
        pattern: pattern,
        examples: examples || [],
        parse: function(text) {
            var matcher = pattern.exec(text);
            if (matcher) return this.match(matcher, text);
            return null;
        },
        getRole: function(text) {
            if (!text) return Role.None;
            text = text.toLowerCase();
            if (text.indexOf('eng') !== -1) return Role.Eng;
            if (text.indexOf('tac') !== -1) return Role.Tac;
            if (text.indexOf('sci') !== -1) return Role.Sci;
            return Role.None;
        }
    };
}

function createRPIgnoreEvents() {
    var rule = createRuleParser('Ignores?\\s*\\+\\/\\-\\s*(ENG|TAC|SCI)\\s+from\\s+Events?', [
        'Ignore +/- ENG from Events', 'Ignore +/- SCI from Events', 'Ignore +/- TAC from Events'
    ]);
    rule.match = function(matcher, text) {
        var param = matcher[1].toUpperCase();
        if (param === 'ENG') return createAlwaysApply(createRewardIgnoreEventStat(true, false, false));
        if (param === 'TAC') return createAlwaysApply(createRewardIgnoreEventStat(false, true, false));
        if (param === 'SCI') return createAlwaysApply(createRewardIgnoreEventStat(false, false, true));
        return null;
    };
    return rule;
}

function createRPIgnoreAllEventModifiers() {
    var rule = createRuleParser('Ignores?\\s+ALL\\s+Event\\s+Modifiers(?:\\s+\\(Not\\s+Small\\s+Craft\\))?', [
        'Ignores ALL Event Modifiers', 'Ignores ALL Event Modifiers (Not Small Craft)'
    ]);
    rule.match = function(matcher, text) {
        var notSmallCraft = matcher[1] !== undefined;
        if (!notSmallCraft) {
            return createAlwaysApply(createRewardIgnoreEventStat(true, true, true));
        }
        return createAlwaysApply(createRewardIgnoreEventStat(true, true, true));
    };
    return rule;
}

function createRPCriticalRating() {
    var rule = createRuleParser('x?(\\d+(?:\\.\\d+)?)x?\\s+(?:Critical\\s+Rating|Bonus)\\s+from\\s+(All\\s+Stats|Events?|ENG|TAC|SCI)(?:\\s+(?:or|and)\\s+(ENG|TAC|SCI))?(\\s+\\(Not\\s+Small\\s+Craft\\))?', [
        '1.25x Critical Rating from All Stats', '1.5x Critical Rating from ENG and SCI',
        '2.5x Critical Rating from ENG', '5x Critical Rating from ALL Stats'
    ]);
    rule.match = function(matcher, text) {
        var value = 1;
        var engValue = 1, tacValue = 1, sciValue = 1, baseValue = 1;
        if (matcher[1]) value = parseFloat(matcher[1]);
        if (matcher[2]) {
            var type1 = matcher[2].toLowerCase();
            if (type1 === 'eng') engValue = value;
            else if (type1 === 'tac') tacValue = value;
            else if (type1 === 'sci') sciValue = value;
            else if (type1 === 'all stats') { engValue = value; tacValue = value; sciValue = value; }
            else if (type1.indexOf('event') !== -1) baseValue = value;
        }
        if (matcher[3]) {
            var type2 = matcher[3].toLowerCase();
            if (type2 === 'eng') engValue = value;
            else if (type2 === 'tac') tacValue = value;
            else if (type2 === 'sci') sciValue = value;
        }
        return createProcCritRate(createRewardMultiplyCritRate(engValue, tacValue, sciValue, baseValue));
    };
    return rule;
}

function createRPMaintenance() {
    var rule = createRuleParser('\\-(\\d+)\\%\\s*Maintenance\\s+per\\s+(?:(Ship|Any\\s+Ship|EngShip|TacShip|SciShip)(?:\\s+(?:or|and)\\s+(EngShip|TacShip|SciShip))?)?(\\s+\\(Not\\s+Small\\s+Craft\\))?', [
        '-10% Maintenance per EngShip', '-25% Maintenance per ANY Ship (Not Small Craft)',
        '-5% Maintenance per Any Ship', '-10% Maintenance per SciShip or TacShip'
    ]);
    rule.match = function(matcher, text) {
        var value = 0;
        if (matcher[1]) value = parseFloat(matcher[1]) / 100.0;
        var type1 = matcher[2];
        var type2 = matcher[3];
        var notSmallCraft = matcher[4] !== undefined;
        if (type1 && (type1.toLowerCase() === 'ship' || type1.toLowerCase() === 'any ship')) {
            return createPerAnyShip(createRewardMaintenanceReduction(value), notSmallCraft);
        }
        var role1 = rule.getRole(type1);
        if (!type2) {
            return createPerShipCategory(createRewardMaintenanceReduction(value), [role1]);
        }
        var role2 = rule.getRole(type2);
        return createPerShipCategory(createRewardMaintenanceReduction(value), [role1, role2]);
    };
    return rule;
}

function createRPWhenAlone() {
    var rule = createRuleParser('\\+(\\d+)\\s+(All(?:\\s+Stats)?|ENG|TAC|SCI)(?:\\s+and\\s+(ENG|TAC|SCI))?\\s+when\\s+Alone', [
        '+10 ENG and TAC when Alone', '+15 All Stats when Alone', '+35 ENG when Alone'
    ]);
    rule.match = function(matcher, text) {
        var value = 0, engValue = 0, tacValue = 0, sciValue = 0;
        if (matcher[1]) value = parseInt(matcher[1]);
        var type1 = (matcher[2] || '').toLowerCase();
        if (type1.indexOf('all') !== -1) { engValue = value; tacValue = value; sciValue = value; }
        else if (type1 === 'eng') engValue = value;
        else if (type1 === 'tac') tacValue = value;
        else if (type1 === 'sci') sciValue = value;
        if (matcher[3]) {
            var type2 = matcher[3].toLowerCase();
            if (type2 === 'eng') engValue = value;
            else if (type2 === 'tac') tacValue = value;
            else if (type2 === 'sci') sciValue = value;
        }
        return createWhenAlone(createRewardStat(engValue, tacValue, sciValue));
    };
    return rule;
}

function createRPPerShip() {
    var rule = createRuleParser('\\+(\\d+)\\s+(All\\s+Stats|ALL|ENG|TAC|SCI)(?:\\s+and\\s+(ENG|TAC|SCI))?\\s+(?:per|from)\\s+(Any\\s+Ship|AnyShip|EngShip|TacShip|SciShip)(?:\\s+(?:or|and)\\s+(EngShip|TacShip|SciShip))?(\\s+\\(Not\\s+Small\\s+Craft\\))?', [
        '+10 ENG per EngShip', '+20 SCI per Any Ship', '+5 ENG and SCI from Any Ship',
        '+8 ENG and TAC per SciShip', '+15 ENG and TAC per Any Ship'
    ]);
    rule.match = function(matcher, text) {
        var value = 0, engValue = 0, tacValue = 0, sciValue = 0;
        if (matcher[1]) value = parseInt(matcher[1]);
        var stat1 = (matcher[2] || '').toLowerCase();
        if (stat1.indexOf('all') !== -1) { engValue = value; tacValue = value; sciValue = value; }
        else if (stat1 === 'eng') engValue = value;
        else if (stat1 === 'tac') tacValue = value;
        else if (stat1 === 'sci') sciValue = value;
        if (matcher[3]) {
            var stat2 = matcher[3].toLowerCase();
            if (stat2 === 'eng') engValue = value;
            else if (stat2 === 'tac') tacValue = value;
            else if (stat2 === 'sci') sciValue = value;
        }
        var notSmallCraft = matcher[5] !== undefined;
        var type1 = (matcher[4] || '').toLowerCase();
        if (type1 === 'any ship' || type1 === 'anyship') {
            return createPerAnyShip(createRewardStat(engValue, tacValue, sciValue), notSmallCraft);
        }
        var role1 = rule.getRole(type1);
        if (!type1) {
            return createPerShipCategory(createRewardStat(engValue, tacValue, sciValue), [role1]);
        }
        var role2 = rule.getRole(matcher[5] || '');
        if (!matcher[5] || matcher[5].indexOf('Not Small Craft') !== -1) {
            return createPerShipCategory(createRewardStat(engValue, tacValue, sciValue), [role1]);
        }
        return createPerShipCategory(createRewardStat(engValue, tacValue, sciValue), [role1, role2]);
    };
    return rule;
}
