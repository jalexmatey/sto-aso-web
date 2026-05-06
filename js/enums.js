const ShipFaction = {
    None: 'None',
    Federation: 'Federation',
    Klingon: 'Klingon',
    Romulan: 'Romulan',
    JemHadar: 'JemHadar',
    Universal: 'Universal'
};
Object.freeze(ShipFaction);

const Tier = {
    None: { value: 0, maintenanceMinutes: 0, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    SmallCraft: { value: 5, maintenanceMinutes: 5, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier1: { value: 1, maintenanceMinutes: 30, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier2: { value: 2, maintenanceMinutes: 120, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier3: { value: 3, maintenanceMinutes: 270, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier4: { value: 4, maintenanceMinutes: 480, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier5: { value: 5, maintenanceMinutes: 750, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } },
    Tier6: { value: 6, maintenanceMinutes: 1080, getMaintenanceTimeMinutes: function() { return this.maintenanceMinutes; } }
};
Object.freeze(Tier);

const Rarity = {
    None: 'None',
    Common: 'Common',
    Uncommon: 'Uncommon',
    Rare: 'Rare',
    VeryRare: 'VeryRare',
    UltraRare: 'UltraRare',
    Epic: 'Epic'
};
Object.freeze(Rarity);

const Role = {
    None: 'None',
    Eng: 'Eng',
    Tac: 'Tac',
    Sci: 'Sci',
    Smc: 'Smc'
};
Object.freeze(Role);

const EventReward = {
    None: 'None',
    EcS: 'EcS',
    EcM: 'EcM',
    EcL: 'EcL',
    DilithiumS: 'DilithiumS',
    DilithiumM: 'DilithiumM',
    DilithiumL: 'DilithiumL',
    ResearchC: 'ResearchC',
    ResearchU: 'ResearchU',
    ResearchR: 'ResearchR',
    ResearchVR: 'ResearchVR',
    ResearchE: 'ResearchE',
    Maintenance50: 'Maintenance50',
    Maintenance100: 'Maintenance100'
};
Object.freeze(EventReward);

const ShipPriority = {
    Active: { value: 'Active', configValue: 'true' },
    OneTime: { value: 'OneTime', configValue: 'false' },
    OnlyActive: { value: 'OnlyActive', configValue: 'onlyActive' }
};
Object.freeze(ShipPriority);

const PlayerFaction = {
    AllFactions: 'AllFactions',
    Federation: 'Federation',
    Klingon: 'Klingon',
    RomulanFed: 'RomulanFed',
    RomulanKDF: 'RomulanKDF',
    JemHadarFed: "Jem'Hadar (Fed)",
    JemHadarKDF: "Jem'Hadar (KDF)"
};
Object.freeze(PlayerFaction);
