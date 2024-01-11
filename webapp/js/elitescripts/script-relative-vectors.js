function generateRelativeVector(container, vectorName) {
    let metaContainer = document.createElement("div")
    metaContainer.classList.add("script-target-container")
    container.append(metaContainer)

    let targetText = document.createElement("div")
    metaContainer.append(targetText)
    targetText.innerText = "Relative Vector"
    if (vectorName !== undefined && vectorName !== null) targetText.innerText = vectorName
    targetText.classList.add("script-target-name", "col-sm-3")

    let targetContents = document.createElement("div")
    metaContainer.append(targetContents)
    targetContents.classList.add("script-target-contents")
    setAsConfigMap(targetContents, targetText.innerText)

    let select = createListField(targetContents, "targetType", "Relative Vector", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Relative-Vectors", targetTypes, true)
    select.onchange = function () {
        redrawRelativeVectors(this)
    }
    redrawRelativeVectors(select)
}

function redrawRelativeVectors(select) {
    let container = select.closest(".script-target-contents")
    let selectDiv = select.closest(".row")
    container.innerHTML = ""
    container.append(selectDiv)
    commonRelativeVectorElements(container)
}

function commonRelativeVectorElements(container) {
    generateTarget(container, "SourceTarget")
    generateTarget(container, "DestinationTarget")
    createBooleanField(container, "normalize", "Normalize", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Relative-Vectors#properties", false)
    createIntegerField(container, "multiplier", "Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Relative-Vectors#properties", false)
    createVectorField(container, "offset", "Offset", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Relative-Vectors#properties", false)
}
