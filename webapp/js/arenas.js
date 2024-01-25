function createArenaTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Arena", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md")
    generateTemplateOption("General", function () {
        createGeneralArenaContents(templateContainer)
    }, templateContainer)
}

function createGeneralArenaContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "arenaName", "Arena Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createLocationField(innerCard, "corner1", "Corner 1", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createLocationField(innerCard, "corner2", "Corner 2", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createLocationField(innerCard, "startLocation", "Start Location", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createLocationField(innerCard, "exitLocation", "Exit Location", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createIntegerField(innerCard, "waveCount", "Wave Count", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createIntegerField(innerCard, "delayBetweenWaves", "Delay Between Waves", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createTextFields(innerCard, "spawnPoints", "Spawn Points", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createTextFields(innerCard, "bossList", "Boss List", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", true)
    createTextFields(innerCard, "rawArenaRewards", "Arena Rewards", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
    createIntegerField(innerCard, "maximumPlayerCount", "Maximum Player Count", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
    createTextFields(innerCard, "arenaMessages", "Arena Messages", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
    createBooleanField(innerCard, "cylindricalArena","Make arena cylindrical", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
    createTextField(innerCard, "permission", "Permission Required", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_arenas.md&section=creating-arenas%creating-arenas", false)
}