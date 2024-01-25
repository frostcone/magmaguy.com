function createWormholeTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Wormhole", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md")
    generateTemplateOption("General", function () {
        createGeneralWormholeContents(templateContainer)
    }, templateContainer)
}

function createGeneralWormholeContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "location1", "Location 1", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", true)
    createTextField(innerCard, "location2", "Location 2", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", true)
    createTextField(innerCard, "location1Text", "Location 1 Text", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createTextField(innerCard, "location2Text", "Location 2 Text", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createTextField(innerCard, "permission", "Permission", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createIntegerField(innerCard, "coinCost", "Coin Cost", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createListField(innerCard, "style", "Style", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", ["NONE", "CRYSTAL", "ICOSAHEDRON", "CUBE"], true)
    createTextField(innerCard, "particleColor", "Particle Color", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createBooleanField(innerCard, "blindPlayer", "Blind Player", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
    createIntegerField(innerCard, "sizeMultiplier", "Size Multiplier", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_wormholes.md&section=creating-a-wormhole%creating-a-wormhole", false)
}