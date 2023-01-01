const eventTypes = ["BREAK_BLOCK", "FISH", "TILL_SOIL", "TIMED"]

function createCustomEventsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Event", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events")
    generateTemplateOption("General", function () {
        createGeneralCustomEventsContents(templateContainer)
    }, templateContainer)

    generateTemplateOption("Action Event", function (){
        createActionCustomEventContents(templateContainer)
    }, templateContainer)

    generateTemplateOption("Timed Event", function (){
        createTimedCustomEventContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomEventsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createListField(innerCard, "eventType", "Event Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)

    createIntegerField(innerCard, "chance", "Chance", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events", false)
    createListField(innerCard, "breakableMaterials", "Breakable Materials", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events", false)

    createTextField(innerCard, "customSpawn", "Custom Spawn", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "localCooldown", "Local Cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "globalCooldown", "Global Cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "weight", "Weight", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "eventDuration", "Event Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createBooleanField(innerCard, "eventEndsWithBossDeath", "Event Ends With Boss Death", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "eventEndTime", "Event End Time", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
}

function createActionCustomEventContents(templateContainer){
    let innerCard = createGlobalTemplate(templateContainer)
    createIntegerField(innerCard, "chance", "Chance", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events", true)
    createListField(innerCard, "breakableMaterials", "Breakable Materials", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events", false)

    createListField(innerCard, "eventType", "Event Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
}

function createTimedCustomEventContents(templateContainer){
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "customSpawn", "Custom Spawn", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", true)
    createIntegerField(innerCard, "localCooldown", "Local Cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "globalCooldown", "Global Cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "weight", "Weight", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "eventDuration", "Event Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createBooleanField(innerCard, "eventEndsWithBossDeath", "Event Ends With Boss Death", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "eventEndTime", "Event End Time", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events", false)


    createListField(innerCard, "eventType", "Event Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#common-configuration-settings", false)
}