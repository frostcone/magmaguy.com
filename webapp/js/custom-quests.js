function createCustomQuestTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Quest", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md")
    generateTemplateOption("General", function () {
        createGeneralCustomQuestContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomQuestContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextFields(innerCard, "customObjectives", "Custom Objectives", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", true)
    createTextFields(innerCard, "customRewards", "Custom Rewards", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "questAcceptPermissions", "Quest Accept Permissions", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextField(innerCard, "questLockoutPermission","Quest Lockout Permission", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createIntegerField(innerCard, "questLockoutMinutes", "Quest Lockout (minutes)", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextField(innerCard, "questName", "Quest Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "questLore", "Quest Lore", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "temporaryPermissions", "Temporary Permissions", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "questAcceptDialog", "Quest Accept Dialog", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "questCompleteDialog", "Quest Complete Dialog", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextFields(innerCard, "questCompleteCommands", "Quest Complete Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createTextField(innerCard, "turnInNPC", "Turn In NPC", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createBooleanField(innerCard, "trackable", "Trackable", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
    createIntegerField(innerCard, "questLevel", "Quest Level", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_quests.md&section=creating-custom-quests%creating-custom-quests", false)
}
