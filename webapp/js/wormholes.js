function createWormholeTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Wormhole", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole")
    generateTemplateOption("General", function () {
        createGeneralWormholeContents(templateContainer)
    }, templateContainer)
}

function createGeneralWormholeContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "location1", "Location 1", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", true)
    createTextField(innerCard, "location2", "Location 2", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", true)
    createTextField(innerCard, "location1Text", "Location 1 Text", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createTextField(innerCard, "location2Text", "Location 2 Text", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createTextField(innerCard, "permission", "Permission", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createIntegerField(innerCard, "coinCost", "Coin Cost", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createListField(innerCard, "style", "Style", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", ["NONE", "CRYSTAL", "ISOCAHEDRON", "CUBE"], true)
    createTextField(innerCard, "particleColor", "Particle Color", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createBooleanField(innerCard, "blindPlayer", "Blind Player", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
    createIntegerField(innerCard, "sizeMultiplier", "Size Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Wormholes#creating-a-wormhole", false)
}