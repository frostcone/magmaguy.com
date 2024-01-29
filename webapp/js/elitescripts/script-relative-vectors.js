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

    let select = createListField(targetContents, "targetType", "Relative Vector", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_relative_vectors.md", targetTypes, true)
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
    createBooleanField(container, "normalize", "Normalize", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_relative_vectors.md&section=properties%properties", false)
    createIntegerField(container, "multiplier", "Multiplier", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_relative_vectors.md&section=properties%properties", false)
    createVectorField(container, "offset", "Offset", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_relative_vectors.md&section=properties%properties", false)
}
