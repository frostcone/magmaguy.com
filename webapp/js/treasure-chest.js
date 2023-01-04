const chestMaterialAPINames = ["CHEST", "BARREL","TRAPPED_CHEST", "ENDER_CHEST", "SHULKER_BOX", "WHITE_SHULKER_BOX", "ORANGE_SHULKER_BOX", "MAGENTA_SHULKER_BOX", "LIGHT_BLUE_SHULKER_BOX", "YELLOW_SHULKER_BOX", "LIME_SHULKER_BOX", "PINK_SHULKER_BOX", "GRAY_SHULKER_BOX", "LIGHT_GRAY_SHULKER_BOX", "CYAN_SHULKER_BOX", "PURPLE_SHULKER_BOX", "BLUE_SHULKER_BOX", "BROWN_SHULKER_BOX", "GREEN_SHULKER_BOX", "RED_SHULKER_BOX", "BLACK_SHULKER_BOX"]
const facingDirectionAPINames = ["NORTH", "SOUTH", "EAST", "WEST"]

function createTreasureChestTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Treasure Chest", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests")
    generateTemplateOption("General", function () {
        createGeneralTreasureChestContents(templateContainer)
    }, templateContainer)
}

function createGeneralTreasureChestContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createListField(innerCard, "chestType", "Chest Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", chestMaterialAPINames, true)
    createListField(innerCard, "facing", "Facing direction", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", facingDirectionAPINames, true)
    createListField(innerCard, "dropStyle", "Drop Style", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", ["SINGLE", "MULTIPLE"], true)
    createTextFields(innerCard, "lootList", "Loot List", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", false)
    createIntegerField(innerCard, "mimicChance", "Mimic Chance", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", false)
    createTextFields(innerCard, "mimicCustomBossesList","Mimic Custom Bosses", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", false)
    createIntegerField(innerCard, "restockTimer", "Restock Time (minutes)", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", true)
    createTextFields(innerCard, "effects", "Particle Effects", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", false)
    createTextFields(innerCard, "locations", "Locations", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests", false)
}