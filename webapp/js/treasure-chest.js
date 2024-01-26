const chestMaterialAPINames = ["CHEST", "BARREL","TRAPPED_CHEST", "ENDER_CHEST", "SHULKER_BOX", "WHITE_SHULKER_BOX", "ORANGE_SHULKER_BOX", "MAGENTA_SHULKER_BOX", "LIGHT_BLUE_SHULKER_BOX", "YELLOW_SHULKER_BOX", "LIME_SHULKER_BOX", "PINK_SHULKER_BOX", "GRAY_SHULKER_BOX", "LIGHT_GRAY_SHULKER_BOX", "CYAN_SHULKER_BOX", "PURPLE_SHULKER_BOX", "BLUE_SHULKER_BOX", "BROWN_SHULKER_BOX", "GREEN_SHULKER_BOX", "RED_SHULKER_BOX", "BLACK_SHULKER_BOX"]
const facingDirectionAPINames = ["NORTH", "SOUTH", "EAST", "WEST"]

function createTreasureChestTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Treasure Chest", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md")
    generateTemplateOption("General", function () {
        createGeneralTreasureChestContents(templateContainer)
    }, templateContainer)
}

function createGeneralTreasureChestContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createListField(innerCard, "chestType", "Chest Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", chestMaterialAPINames, true)
    createListField(innerCard, "facing", "Facing direction", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", facingDirectionAPINames, true)
    createListField(innerCard, "dropStyle", "Drop Style", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", ["SINGLE", "MULTIPLE"], true)
    createTextFields(innerCard, "lootList", "Loot List", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", false)
    createIntegerField(innerCard, "mimicChance", "Mimic Chance", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", false)
    createTextFields(innerCard, "mimicCustomBossesList","Mimic Custom Bosses", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", false)
    createIntegerField(innerCard, "restockTimer", "Restock Time (minutes)", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", true)
    createTextFields(innerCard, "effects", "Particle Effects", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", false)
    createTextFields(innerCard, "locations", "Locations", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_treasure_chests.md", false)
}