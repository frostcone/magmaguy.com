const interactionTypeAPIName = ["GUILD_GREETER", "CHAT", "CUSTOM_SHOP", "PROCEDURALLY_GENERATED_SHOP", "BAR", "ARENA", "QUEST_GIVER", "CUSTOM_QUEST_GIVER", "NONE", "SELL", "TELEPORT_BACK", "SCRAPPER", "SMELTER", "REPAIRMAN", "ENHANCER", "REFINER", "UNBINDER", "ARENA_MASTER", "COMMAND"]

function createNPCTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Treasure Chest", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Treasure-Chests")
    generateTemplateOption("General", function () {
        createGeneralNPCContents(templateContainer)
    }, templateContainer)
}

function createGeneralNPCContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "name", "Name", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", true)
    createTextField(innerCard, "role", "Role", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createListField(innerCard, "profession", "Profession", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", professionAPINames, false)
    createTextFields(innerCard, "greetings", "Greetings", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextFields(innerCard, "dialog", "Dialog", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextFields(innerCard, "farewell", "Farewell", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createBooleanField(innerCard, "canTalk", "Can Talk", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createIntegerField(innerCard, "activationRadius", "Activation Radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createListField(innerCard, "interactionType", "Interaction Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", interactionTypeAPIName, true)
    createIntegerField(innerCard, "timeout", "Timeout (minutes)", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextFields(innerCard, "questFileName", "Quest Filename", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextField(innerCard, "disguise", "Disguise", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextField(innerCard, "customDisguiseData", "Custom Disguise Data", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextField(innerCard, "customModel", "Custom Model", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextField(innerCard, "arena", "Arena", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
    createTextField(innerCard, "command", "Command", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-NPCs", false)
}