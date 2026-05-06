function getRarityColor(rarity) {
    switch (rarity) {
        case Rarity.Uncommon: return 'rgb(0,204,0)';
        case Rarity.Rare: return 'rgb(0,153,255)';
        case Rarity.VeryRare: return 'rgb(162,69,185)';
        case Rarity.UltraRare: return 'rgb(109,101,188)';
        case Rarity.Epic: return 'rgb(255,165,0)';
        default: return 'rgb(255,255,255)';
    }
}

function getTierString(tier) {
    switch (tier) {
        case Tier.SmallCraft: return 'Small Craft';
        case Tier.Tier1: return 'Tier 1';
        case Tier.Tier2: return 'Tier 2';
        case Tier.Tier3: return 'Tier 3';
        case Tier.Tier4: return 'Tier 4';
        case Tier.Tier5: return 'Tier 5';
        case Tier.Tier6: return 'Tier 6';
        default: return 'Unknown Tier';
    }
}

function getMaintenanceTimeString(tier) {
    switch (tier) {
        case Tier.SmallCraft: return '5m';
        case Tier.Tier1: return '30m';
        case Tier.Tier2: return '2h';
        case Tier.Tier3: return '4h 30m';
        case Tier.Tier4: return '8h';
        case Tier.Tier5: return '12h 30m';
        case Tier.Tier6: return '18h';
        default: return '--';
    }
}

function getFactionString(faction) {
    switch (faction) {
        case ShipFaction.Federation: return 'Federation';
        case ShipFaction.Klingon: return 'Klingon';
        case ShipFaction.Romulan: return 'Romulan';
        case ShipFaction.JemHadar: return "Jem'Hadar";
        case ShipFaction.Universal: return 'Universal';
        default: return 'Faction';
    }
}

function getPlayerFactionString(faction) {
    switch (faction) {
        case PlayerFaction.AllFactions: return 'All Factions';
        case PlayerFaction.Federation: return 'Federation';
        case PlayerFaction.Klingon: return 'Klingon';
        case PlayerFaction.RomulanFed: return 'Romulan (Fed)';
        case PlayerFaction.RomulanKDF: return 'Romulan (KDF)';
        case PlayerFaction.JemHadarFed: return "Jem'Hadar (Fed)";
        case PlayerFaction.JemHadarKDF: return "Jem'Hadar (KDF)";
        default: return 'Unknown';
    }
}

function getShipPriorityString(priority) {
    switch (priority) {
        case ShipPriority.OneTime: return 'One-Time Ships';
        case ShipPriority.OnlyActive: return 'Only Active';
        case ShipPriority.Active:
        default: return 'Active Ships';
    }
}

function getRoleString(role) {
    switch (role) {
        case Role.Eng: return 'Engineering Ship';
        case Role.Sci: return 'Science Ship';
        case Role.Tac: return 'Tactical Ship';
        case Role.Smc: return 'Small Craft';
        default: return 'None';
    }
}

function getRarityString(rarity) {
    switch (rarity) {
        case Rarity.Common: return 'Common';
        case Rarity.Uncommon: return 'Uncommon';
        case Rarity.Rare: return 'Rare';
        case Rarity.VeryRare: return 'Very Rare';
        case Rarity.UltraRare: return 'Ultra Rare';
        case Rarity.Epic: return 'Epic';
        default: return 'Rarity';
    }
}

function getEventRewardString(reward) {
    switch (reward) {
        case EventReward.EcS: return 'Small Energy Credit Package';
        case EventReward.EcM: return 'Medium Energy Credit Package';
        case EventReward.EcL: return 'Large Energy Credit Package';
        case EventReward.DilithiumS: return 'Small Dilithium Ore Package';
        case EventReward.DilithiumM: return 'Medium Dilithium Ore Package';
        case EventReward.DilithiumL: return 'Large Dilithium Ore Package';
        case EventReward.ResearchC: return 'Common R&D Materials Crate';
        case EventReward.ResearchU: return 'Uncommon R&D Materials Crate';
        case EventReward.ResearchR: return 'Rare R&D Materials Crate';
        case EventReward.ResearchVR: return 'Very Rare R&D Materials Crate';
        case EventReward.ResearchE: return 'Epic R&D Materials Crate';
        default: return 'None';
    }
}

function getEventMaintenanceReduction(reward) {
    switch (reward) {
        case EventReward.Maintenance50: return 0.5;
        case EventReward.Maintenance100: return 1.0;
        default: return 0.0;
    }
}

function toFunctionString(funcName, params) {
    if (!params || params === '') return funcName + '()';
    return funcName + '(' + params + ')';
}

function formatDuration(minutes) {
    if (minutes < 60) return minutes + 'm';
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return h + 'h' + (m > 0 ? ' ' + m + 'm' : '');
}

function formatTimeRemaining(timestamp) {
    var diff = timestamp - Date.now();
    if (diff <= 0) return 'Ready';
    var mins = Math.floor(diff / 60000);
    if (mins < 60) return mins + 'm remaining';
    var h = Math.floor(mins / 60);
    var m = mins % 60;
    return h + 'h ' + m + 'm remaining';
}
