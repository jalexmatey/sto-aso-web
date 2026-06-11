function createRewardStat(eng, tac, sci) {
    return {
        rewardEng: eng || 0,
        rewardTac: tac || 0,
        rewardSci: sci || 0,
        apply: function(assignment, solution) {
            solution.addEng(this.rewardEng);
            solution.addTac(this.rewardTac);
            solution.addSci(this.rewardSci);
        }
    };
}

function createRewardMultiplyCritRate(multiplyEng, multiplyTac, multiplySci, multiplyBaseCritRate) {
    return {
        multiplyEng: multiplyEng || 1,
        multiplyTac: multiplyTac || 1,
        multiplySci: multiplySci || 1,
        multiplyBaseCritRate: multiplyBaseCritRate || 1,
        apply: function(assignment, solution) {
            solution.addEventCritMultiplier(this.multiplyBaseCritRate - 1);
            solution.addEngCritMultiplier(this.multiplyEng - 1);
            solution.addTacCritMultiplier(this.multiplyTac - 1);
            solution.addSciCritMultiplier(this.multiplySci - 1);
        }
    };
}

function createRewardMaintenanceReduction(value) {
    return {
        rewardMaintenanceReduction: value || 0,
        apply: function(assignment, solution) {
            solution.addMaintenanceReduction(this.rewardMaintenanceReduction);
        }
    };
}

function createRewardIgnoreEventStat(ignoreEng, ignoreTac, ignoreSci, notSmallCraft) {
    return {
        ignoreEng: ignoreEng || false,
        ignoreTac: ignoreTac || false,
        ignoreSci: ignoreSci || false,
        apply: function(assignment, solution) {
            solution.setIgnoreEventEng(this.ignoreEng);
            solution.setIgnoreEventTac(this.ignoreTac);
            solution.setIgnoreEventSci(this.ignoreSci);
        }
    };
}

function createRewardNothing() {
    return {
        apply: function(assignment, solution) {}
    };
}
