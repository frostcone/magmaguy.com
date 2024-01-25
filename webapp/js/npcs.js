const interactionTypeAPIName = ["GUILD_GREETER", "CHAT", "CUSTOM_SHOP", "PROCEDURALLY_GENERATED_SHOP", "BAR", "ARENA", "QUEST_GIVER", "CUSTOM_QUEST_GIVER", "NONE", "SELL", "TELEPORT_BACK", "SCRAPPER", "SMELTER", "REPAIRMAN", "ENHANCER", "REFINER", "UNBINDER", "ARENA_MASTER", "COMMAND"]

function createNPCTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "NPC", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md")
    generateTemplateOption("General", function () {
        createGeneralNPCContents(templateContainer)
    }, templateContainer)
}

function createGeneralNPCContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "name", "Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", true)
    createTextField(innerCard, "role", "Role", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createListField(innerCard, "profession", "Profession", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", professionAPINames, false)
    createTextFields(innerCard, "greetings", "Greetings", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextFields(innerCard, "dialog", "Dialog", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextFields(innerCard, "farewell", "Farewell", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createBooleanField(innerCard, "canTalk", "Can Talk", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createIntegerField(innerCard, "activationRadius", "Activation Radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createListField(innerCard, "interactionType", "Interaction Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", interactionTypeAPIName, true)
    createIntegerField(innerCard, "timeout", "Timeout (minutes)", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextFields(innerCard, "questFileName", "Quest Filename", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextField(innerCard, "disguise", "Disguise", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextField(innerCard, "customDisguiseData", "Custom Disguise Data", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextField(innerCard, "customModel", "Custom Model", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextField(innerCard, "arena", "Arena", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
    createTextField(innerCard, "command", "Command", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_npcs.md", false)
}