const shapes = ["SPHERE", "DOME", "CYLINDER", "CUBOID", "STATIC_RAY", "ROTATING_RAY", "TRANSLATING_RAY"]
const zoneFilter = ["", "PLAYER", "ELITE", "LIVING"]

function generateZone(button) {
    genericScriptButtonSetter(button, function () {
        generateZone(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    let select = createListField(container, "shape","Shape", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#shape", shapes)
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
    createListField(container, "filter","Filter", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#filter", zoneFilter, false)
}

function sphereZone(container) {
    createIntegerField(container, "radius","Radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#sphere", true)
    createIntegerField(container, "borderRadius","Border radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#sphere", false)
}

function domeZone(container) {
    createIntegerField(container, "radius","Radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#dome", true)
    createIntegerField(container, "borderRadius","Border radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#dome", false)
}

function cylinderZone(container) {
    createIntegerField(container, "radius","Radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cylinder", true)
    createIntegerField(container, "borderRadius","Border radius", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cylinder", false)
    createIntegerField(container, "height","Height", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cylinder", true)
}


function cuboidZone(container) {
    createIntegerField(container, "x","X", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", true)
    createIntegerField(container, "y","Y", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", true)
    createIntegerField(container, "z","Z", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", true)
    createIntegerField(container, "xBorder","X border", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", false)
    createIntegerField(container, "yBorder","Y border", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", false)
    createIntegerField(container, "zBorder","Z border", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#cuboid", false)

}

function staticRayZone(container) {
    generateTarget(container, "Target2")
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#static_ray", false)
}

function rotatingRayZone(container) {
    generateTarget(container, "Target2")
    createIntegerField(container, "animationDuration","Animation duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", true)
    createIntegerField(container, "pitchPrerotation","Pitch prerotation", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", false)
    createIntegerField(container, "yawPrerotation","Yaw prerotation", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", false)
    createIntegerField(container, "pitchRotation","Pitch rotation", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", false)
    createIntegerField(container, "yawRotation","Yaw rotation", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", false)
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#rotating_ray", false)
}

function translatingRayZone(container) {
    generateTarget(container, "FinalTarget1")
    generateTarget(container, "Target2")
    generateTarget(container, "FinalTarget2")
    createIntegerField(container, "animationDuration","Animation duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#translating_ray", true)
    createBooleanField(container, "ignoresSolidBlocks","Ignores solid blocks", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones#translating_ray", false)
}