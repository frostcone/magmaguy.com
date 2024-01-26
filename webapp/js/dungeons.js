const dungeonLocationTypeAPINames = ["WORLD", "SCHEMATIC", "INSTANCED"]
const contentTypeAPINames = ["OPEN_DUNGEON", "INSTANCED_DUNGEON", "HUB", "SCHEMATIC_DUNGEON"]
const dungeonSizeCategoryAPINames = ["LAIR", "SANCTUM", "MINIDUNGEON", "DUNGEON", "RAID", "ADVENTURE", "ARENA", "OTHER"]

function createDungeonTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Dungeon", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md")
    generateTemplateOption("World-based Dungeon", function () {
        createWorldDungeonContents(templateContainer)
    }, templateContainer)
    generateTemplateOption("Instanced Dungeon", function () {
        createInstancedDungeonContents(templateContainer)
    }, templateContainer)
    generateTemplateOption("Schematic Dungeon", function () {
        createSchematicDungeonContents(templateContainer)
    }, templateContainer)
}

function createGlobalDungeonContents(innerCard) {
    createBooleanField(innerCard, "isEnabled", "Is Enabled", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createTextField(innerCard, "name", "Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createListField(innerCard, "dungeonLocationtype", "Dungeon Location Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", dungeonLocationTypeAPINames, true)
    createListField(innerCard, "contentType", "Content Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", contentTypeAPINames, true)
    createTextField(innerCard, "customInfo", "Custom Info", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createTextField(innerCard, "downloadLink", "Download Link", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createListField(innerCard, "dungeonSizeCategory", "Dungeon Size Category", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", dungeonSizeCategoryAPINames, true)
    createBooleanField(innerCard, "protect", "Protect", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createLocationField(innerCard, "anchorPoint", "Anchor Point", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createIntegerField(innerCard, "dungeonVersion", "Dungeon Version", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createTextField(innerCard, "playerInfo", "Player Info", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createTextField(innerCard, "regionEnterMessage", "Region Enter Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createTextField(innerCard, "regionLeaveMessage", "Region Leave Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createBooleanField(innerCard, "hasCustomModels", "Has Custom Models", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createTextField(innerCard, "dungeonConfigFolderName", "Dungeon Config Folder Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
}


function createWorldDungeonContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createGlobalDungeonContents(innerCard)
    createTextField(innerCard, "worldName", "World Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    createTextField(innerCard, "wormholeWorldName", "Wormhole World Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", false)
    createListField(innerCard, "environment", "World Environment", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", environmentAPINames, true)
    createLocationField(innerCard, "teleportLocation", "Teleport Location", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+dungeon_packager.md&section=global-values%global-values", true)
    return innerCard;
}

function createInstancedDungeonContents(templateContainer) {
    let innerCard = createWorldDungeonContents(templateContainer)
    createLocationField(innerCard, "startLocation", "Start Location", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", true)
    createTextField(innerCard, "permission", "Permission", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", false)
    createIntegerField(innerCard, "minPlayerCount", "Minimum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", false)
    createIntegerField(innerCard, "maxPlayerCount", "Maximum Player Count", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", false)
    //todo needs to be a complex field
    createTextFields(innerCard, "dungeonObjectives", "Dungeon Objectives", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", true)
    //todo needs to be a maplist
    //difficulties go here
    let difficultiesContainer = document.createElement("div", "value-maplist-container")
    setAsConfigMapList(difficultiesContainer)
    setAsConfigMap(difficultiesContainer, "difficulties")
    innerCard.append(difficultiesContainer)
    let difficultiesHeader = document.createElement("div")
    difficultiesContainer.append(difficultiesHeader)
    difficultiesHeader.classList.add("col-sm-3", "value-maplist-header")
    difficultiesHeader.innerText = "Difficulties"
    let difficultiesValues = document.createElement("div")
    difficultiesContainer.append(difficultiesValues)
    let plusButton = createInvisibleButton(function () {
        addInstancedDungeonDifficulty(difficultiesContainer, this)
    })
    plusButton.append(getPlusIcon())
    difficultiesValues.append(plusButton)
}

function addInstancedDungeonDifficulty(container, button) {
    let configurationMapEntry = document.createElement("div")
    setAsConfigMapListEntry(configurationMapEntry)
    container.append(configurationMapEntry)
    container.append(button)

    let entryHeader = document.createElement("div")
    configurationMapEntry.append(entryHeader)
    entryHeader.classList.add("value-maplist-entry-header")

    let trashButton = createInvisibleButton(function () {
        removeAnimation(configurationMapEntry)
    })
    trashButton.append(getTrashIcon())
    entryHeader.append(trashButton)

    let valuesContainer = document.createElement("div")
    valuesContainer.classList.add("value-maplist-entry")
    configurationMapEntry.append(valuesContainer)

    createTextField(valuesContainer, "name", "Name", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", true)
    createTextField(valuesContainer, "id", "ID", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", true)
    createIntegerField(valuesContainer, "levelSync", "Level Sync", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#instanced-dungeons", false)
}

function createSchematicDungeonContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createGlobalDungeonContents(innerCard)
    createTextFields(innerCard, "relativeBossLocations", "Relative Boss Locations", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", true)
    createTextFields(innerCard, "relativeTreasureChestLocations", "Relative Treasure Chest Locations", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", false)
    createTextField(innerCard, "schematicName", "Schematic Name", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", true)
    createListField(innerCard, "defaultSchematicRotation", "Default Schematic Rotation", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", ["SOUTH", "NORTH", "EAST", "WEST"], true)
    createVectorField(innerCard, "corner1", "Corner 1", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", true)
    createVectorField(innerCard, "corner2", "Corner 2", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", true)
    createVectorField(innerCard, "teleportLocationOffset", "Teleport Location Offset", "https://github.com/MagmaGuy/EliteMobs/wiki/Dungeon-packager#schematic-based-minidungeons", false)
}