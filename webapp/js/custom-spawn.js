function createCustomSpawnsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Spawn", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns")
    generateTemplateOption("General", function () {
        createGeneralCustomSpawnsContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomSpawnsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createIntegerField(innerCard, "lowestYLevel", "Lowest Y level", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createIntegerField(innerCard, "highestYLevel", "Highest Y level", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createListField(innerCard, "validWorlds", "Valid worlds", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createMultiSelectListField(innerCard, "validWorldEnvironments", "Valid World Environments", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", environmentAPINames, false)
    createMultiSelectListField(innerCard, "validBiomes", "Valid Biomes", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", biomeAPINames, false)
    createIntegerField(innerCard, "earliestTime", "Earliest Time", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createIntegerField(innerCard, "latestTime", "Latest Time", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createListField(innerCard, "moonPhase", "Moon Phase", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", moonPhaseAPINames, false)
    createBooleanField(innerCard, "bypassWorldGuard", "Bypass WorldGuard","https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createBooleanField(innerCard, "canSpawnInLight", "Can Spawn In Light","https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createBooleanField(innerCard, "isSurfaceSpawn","Is Surface Spawn", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
    createBooleanField(innerCard, "isUndergroundSpawn", "Is Underground Spawn", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Spawns#values", false)
}