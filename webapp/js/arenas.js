function createArenaTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Arena", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas")
    generateTemplateOption("General", function () {
        createGeneralArenaContents(templateContainer)
    }, templateContainer)
}

function createGeneralArenaContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "arenaName", "Arena Name", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createLocationField(innerCard, "corner1", "Corner 1", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createLocationField(innerCard, "corner2", "Corner 2", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createLocationField(innerCard, "startLocation", "Start Location", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createLocationField(innerCard, "exitLocation", "Exit Location", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createIntegerField(innerCard, "waveCount", "Wave Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createIntegerField(innerCard, "delayBetweenWaves", "Delay Between Waves", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createTextFields(innerCard, "spawnPoints", "Spawn Points", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createTextFields(innerCard, "bossList", "Boss List", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", true)
    createTextFields(innerCard, "rawArenaRewards", "Arena Rewards", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
    createIntegerField(innerCard, "maximumPlayerCount", "Maximum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
    createTextFields(innerCard, "arenaMessages", "Arena Messages", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
    createBooleanField(innerCard, "cylindricalArena","Make arena cylindrical", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
    createTextField(innerCard, "permission", "Permission Required", "https://github.com/MagmaGuy/EliteMobs/wiki/Arenas#creating-arenas", false)
}