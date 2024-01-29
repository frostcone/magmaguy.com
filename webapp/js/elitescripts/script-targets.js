const targetTypes = ["SELF", "SELF_SPAWN", "NEARBY_PLAYERS", "WORLD_PLAYERS", "ALL_PLAYERS", "DIRECT_TARGET", "LOCATION", "LOCATIONS", "ZONE_FULL", "ZONE_BORDER", "ACTION_TARGET", "LANDING_LOCATION", "INHERIT_SCRIPT_TARGET", "INHERIT_SCRIPT_ZONE_FULL", "INHERIT_SCRIPT_ZONE_BORDER"]

function generateTarget(container, targetName) {
    let metaContainer = document.createElement("div")
    metaContainer.classList.add("script-target-container")
    container.append(metaContainer)

    let targetText = document.createElement("div")
    metaContainer.append(targetText)
    targetText.innerText = "Target"
    if (targetName !== undefined && targetName !== null) targetText.innerText = targetName
    targetText.classList.add("script-target-name", "col-sm-3")

    let targetContents = document.createElement("div")
    metaContainer.append(targetContents)
    targetContents.classList.add("script-target-contents")
    setAsConfigMap(targetContents, targetText.innerText)

    let select = createListField(targetContents, "targetType", "Target type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md", targetTypes, true)
    select.onchange = function () {
        redrawTarget(this)
    }
    redrawTarget(select)
}

function redrawTarget(select) {
    let container = select.closest(".script-target-contents")
    let selectDiv = select.closest(".row")
    container.innerHTML = ""
    container.append(selectDiv)
    switch (select.value) {
        case "NEARBY_PLAYERS":
            generateNearbyPlayers(container)
            break
        case "LOCATION":
            generateLocation(container)
            break
        case "LOCATIONS":
            //todo: should be a list of spawn locations
            generateLocations(container)
            break
    }
    commonTargetElements(container)
}

function commonTargetElements(container) {
    createVectorField(container, "offset", "Offset", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=shared-attributes%shared-attributes", false)
    createBooleanField(container, "track", "Track", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=zone-track%zone-track", false)
    createIntegerField(container, "coverage", "Coverage", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=coverage%coverage", false)
}

function generateNearbyPlayers(container) {
    createIntegerField(container, "range", "Range", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=range%range", true)
}

function generateLocation(container) {
    createLocationField(container, "location", "Location", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=location%location", true)
}

function generateLocations(container) {
    createTextFields(container, "locations", "Locations", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_targets.md&section=locations%locations", true)
}