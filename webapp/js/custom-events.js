const eventTypes = ["BREAK_BLOCK", "FISH", "TILL_SOIL", "TIMED"]

function createCustomEventsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Event", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md")
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
    createListField(innerCard, "eventType", "Event Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)

    createIntegerField(innerCard, "chance", "Chance", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=action-events%action-events", false)
    createListField(innerCard, "breakableMaterials", "Breakable Materials", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=action-events%action-events", false)

    createTextField(innerCard, "customSpawn", "Custom Spawn", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "localCooldown", "Local Cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "globalCooldown", "Global Cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "weight", "Weight", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "eventDuration", "Event Duration", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createBooleanField(innerCard, "eventEndsWithBossDeath", "Event Ends With Boss Death", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "eventEndTime", "Event End Time", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
}

function createActionCustomEventContents(templateContainer){
    let innerCard = createGlobalTemplate(templateContainer)
    createIntegerField(innerCard, "chance", "Chance", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=action-events%action-events", true)
    createListField(innerCard, "breakableMaterials", "Breakable Materials", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=action-events%action-events", false)

    createListField(innerCard, "eventType", "Event Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
}

function createTimedCustomEventContents(templateContainer){
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "customSpawn", "Custom Spawn", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", true)
    createIntegerField(innerCard, "localCooldown", "Local Cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "globalCooldown", "Global Cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "weight", "Weight", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "eventDuration", "Event Duration", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createBooleanField(innerCard, "eventEndsWithBossDeath", "Event Ends With Boss Death", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "eventEndTime", "Event End Time", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)
    createIntegerField(innerCard, "minimumPlayerCount", "Minimum Player Count", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=timed-events%timed-events", false)


    createListField(innerCard, "eventType", "Event Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", eventTypes, true)
    createTextFields(innerCard, "bossFilenames", "Boss Filenames", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createIntegerField(innerCard, "announcementPriority", "Annoucement Priority", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", true)
    createTextField(innerCard, "startMessage", "Start Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "endMessage", "End Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextFields(innerCard, "eventStartCommands", "Event Start Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
    createTextField(innerCard, "eventEndCommands", "Event End Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_events.md&section=common-configuration-settings%common-configuration-settings", false)
}