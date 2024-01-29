const shapes = ["SPHERE", "DOME", "CYLINDER", "CUBOID", "STATIC_RAY", "ROTATING_RAY", "TRANSLATING_RAY"]
const zoneFilter = ["", "PLAYER", "ELITE", "LIVING"]

function generateZone(button) {
    genericScriptButtonSetter(button, function () {
        generateZone(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    let select = createListField(container, "shape","Shape", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=shape%shape", shapes)
    select.onchange = function () {
        redrawZoneFields(this)
    }
    redrawZoneFields(select)
}

function redrawZoneFields(select) {
    let container = select.closest(".script-value-section")
    let selectDiv = select.closest(".row")
    container.innerHTML = ""
    container.append(selectDiv)
    switch (select.value) {
        case "SPHERE":
            sphereZone(container)
            break
        case "DOME":
            domeZone(container)
            break
        case "CYLINDER":
            cylinderZone(container)
            break
        case "CUBOID":
            cuboidZone(container)
            break
        case "STATIC_RAY":
            staticRayZone(container)
            break
        case "ROTATING_RAY":
            rotatingRayZone(container)
            break
        case "TRANSLATING_RAY":
            translatingRayZone(container)
    }
    commonZoneElements(container)
}

function commonZoneElements(container) {
    //createTextField(container, "Target", null, true)
    generateTarget(container, null)
    createListField(container, "filter","Filter", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=filter%filter", zoneFilter, false)
}

function sphereZone(container) {
    createIntegerField(container, "radius","Radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=sphere%sphere", true)
    createIntegerField(container, "borderRadius","Border radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=sphere%sphere", false)
}

function domeZone(container) {
    createIntegerField(container, "radius","Radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=dome%dome", true)
    createIntegerField(container, "borderRadius","Border radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=dome%dome", false)
}

function cylinderZone(container) {
    createIntegerField(container, "radius","Radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cylinder%cylinder", true)
    createIntegerField(container, "borderRadius","Border radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cylinder%cylinder", false)
    createIntegerField(container, "height","Height", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cylinder%cylinder", true)
}


function cuboidZone(container) {
    createIntegerField(container, "x","X", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", true)
    createIntegerField(container, "y","Y", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", true)
    createIntegerField(container, "z","Z", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", true)
    createIntegerField(container, "xBorder","X border", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", false)
    createIntegerField(container, "yBorder","Y border", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", false)
    createIntegerField(container, "zBorder","Z border", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=cuboid%cuboid", false)

}

function staticRayZone(container) {
    generateTarget(container, "Target2")
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=static_ray%static_ray", false)
}

function rotatingRayZone(container) {
    generateTarget(container, "Target2")
    createIntegerField(container, "animationDuration","Animation duration", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", true)
    createIntegerField(container, "pitchPrerotation","Pitch prerotation", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", false)
    createIntegerField(container, "yawPrerotation","Yaw prerotation", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", false)
    createIntegerField(container, "pitchRotation","Pitch rotation", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", false)
    createIntegerField(container, "yawRotation","Yaw rotation", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", false)
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=rotating_ray%rotating_ray", false)
}

function translatingRayZone(container) {
    generateTarget(container, "FinalTarget")
    generateTarget(container, "Target2")
    generateTarget(container, "FinalTarget2")
    createIntegerField(container, "animationDuration","Animation duration", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=translating_ray%translating_ray", true)
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_zones.md&section=translating_ray%translating_ray", false)
}