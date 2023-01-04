function createCustomQuestTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Quest", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests")
    generateTemplateOption("General", function () {
        createGeneralCustomQuestContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomQuestContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextFields(innerCard, "customObjectives", "Custom Objectives", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", true)
    createTextFields(innerCard, "customRewards", "Custom Rewards", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "questAcceptPermissions", "Quest Accept Permissions", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextField(innerCard, "questLockoutPermission","Quest Lockout Permission", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createIntegerField(innerCard, "questLockoutMinutes", "Quest Lockout (minutes)", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextField(innerCard, "questName", "Quest Name", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "questLore", "Quest Lore", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "temporaryPermissions", "Temporary Permissions", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "questAcceptDialog", "Quest Accept Dialog", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "questCompleteDialog", "Quest Complete Dialog", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextFields(innerCard, "questCompleteCommands", "Quest Complete Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createTextField(innerCard, "turnInNPC", "Turn In NPC", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createBooleanField(innerCard, "trackable", "Trackable", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
    createIntegerField(innerCard, "questLevel", "Quest Level", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Quests#creating-custom-quests", false)
}
