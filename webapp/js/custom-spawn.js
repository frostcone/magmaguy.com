function createCustomSpawnsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Spawn", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md")
    generateTemplateOption("General", function () {
        createGeneralCustomSpawnsContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomSpawnsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createIntegerField(innerCard, "lowestYLevel", "Lowest Y level", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createIntegerField(innerCard, "highestYLevel", "Highest Y level", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createListField(innerCard, "validWorlds", "Valid worlds", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createMultiSelectListField(innerCard, "validWorldEnvironments", "Valid World Environments", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", environmentAPINames, false)
    createMultiSelectListField(innerCard, "validBiomes", "Valid Biomes", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", biomeAPINames, false)
    createIntegerField(innerCard, "earliestTime", "Earliest Time", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createIntegerField(innerCard, "latestTime", "Latest Time", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createListField(innerCard, "moonPhase", "Moon Phase", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", moonPhaseAPINames, false)
    createBooleanField(innerCard, "bypassWorldGuard", "Bypass WorldGuard","https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createBooleanField(innerCard, "canSpawnInLight", "Can Spawn In Light","https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createBooleanField(innerCard, "isSurfaceSpawn","Is Surface Spawn", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
    createBooleanField(innerCard, "isUndergroundSpawn", "Is Underground Spawn", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_spawns.md&section=values%values", false)
}