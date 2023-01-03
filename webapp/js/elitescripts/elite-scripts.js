//Utility
const powerTypes = ["UNIQUE", "OFFENSIVE", "DEFENSIVE", "MISCELLANEOUS", "MAJOR_ZOMBIE", "MAJOR_SKELETON", "MAJOR_BLAZE", "MAJOR_ENDERMAN", "MAJOR_GHAST"]

function createEliteScriptsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Power", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Scripts")
    generateTemplateOption("General", function () {
        createGeneralScriptsContents(templateContainer)
    }, templateContainer)
}

function createGeneralScriptsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createListField(innerCard, "powerType", "Power Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Scripts#powertype", powerTypes)
    generateScriptsSection(innerCard)
}

//Page elements
function generateScriptsSection(innerCard) {
    let scriptsContainer = document.createElement("div")
    scriptsContainer.classList.add("scripts-container")

    let scriptsContainerHeader = document.createElement("h3")
    scriptsContainerHeader.innerText = "Elite Scripts:"
    scriptsContainerHeader.classList.add("text-center")
    scriptsContainer.append(scriptsContainerHeader)

    let newScriptContainer = document.createElement("div")
    newScriptContainer.classList.add("row", "new-script-container")
    newScriptContainer.style.textAlign = "center"

    let newScriptText = document.createElement("div")
    newScriptText.innerText = "Script name: "
    newScriptText.style.marginRight = "10px"
    newScriptContainer.append(newScriptText)

    let newScriptInput = document.createElement("input")
    newScriptInput.type = "text"
    newScriptInput.classList.add("form-control", "col-sm-3", "new-script-text-input")
    newScriptInput.style.display = "inline-block"
    newScriptInput.placeholder = "A script name is required!"
    newScriptContainer.append(newScriptInput)

    let newScriptButton = createInvisibleButton(function () {
        if (newScriptInput.value === "") {
            alert("You need a valid script name!")
            return
        }
        let currentContents = innerCard.getElementsByClassName("script-name")
        for (let i = 0; i < currentContents.length; i++)
            if (newScriptInput.value === currentContents[i].innerText) {
                alert("Can't create two scripts with the same name!")
                return
            }
        generateNewScript(innerCard)
    });
    newScriptButton.append(getPlusIcon())
    newScriptButton.classList.add("text-center")
    newScriptButton.style.display = "inline-block"
    newScriptContainer.append(newScriptButton)

    scriptsContainer.append(newScriptContainer)

    innerCard.append(scriptsContainer)
}

function generateNewScript(innerCard) {
    let scriptMetaContainer = document.createElement("div")
    scriptMetaContainer.classList.add("script-meta-container")
    setAsConfigMap(scriptMetaContainer, "eliteScript")
    innerCard.append(scriptMetaContainer)

    let scriptHeader = document.createElement("div")
    scriptMetaContainer.append(scriptHeader)
    scriptHeader.classList.add("elite-script-header")

    let scriptNameContainer = document.createElement("div")
    scriptHeader.append(scriptNameContainer)
    scriptNameContainer.innerText = innerCard.getElementsByClassName("new-script-container")[0].getElementsByTagName("input")[0].value
    scriptNameContainer.classList.add("script-name")

    let scriptRemoveButton = createInvisibleButton(function () {
        removeScriptButton(this)
    })
    scriptRemoveButton.append(getTrashIcon())
    scriptRemoveButton.style.marginLeft = "10px"
    scriptHeader.append(scriptRemoveButton)
    scriptRemoveButton.classList.add("elite-script-remove-button")

    let scriptDuplicateButton = createInvisibleButton(function () {
        duplicateScriptButton(this)
    })
    scriptDuplicateButton.append(getDuplicateIcon())
    scriptDuplicateButton.classList.add("elite-script-duplicate-button")
    scriptHeader.append(scriptDuplicateButton)

    let scriptContainer = document.createElement("div")
    scriptContainer.classList.add("script-container")
    setAsConfigMap(scriptContainer, scriptNameContainer.innerText)
    scriptMetaContainer.append(scriptContainer)

    generateInactiveScriptSectionContainer("Events", function () {
        generateEvents(this)
    }, scriptContainer, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Events", false).classList.add("elite-script-events-button")
    generateInactiveScriptSectionContainer("Zone", function () {
        generateZone(this)
    }, scriptContainer, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Zones", false).classList.add("elite-script-zone-button")
    generateInactiveScriptSectionContainer("Conditions", function () {
        generateConditions(this)
    }, scriptContainer, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions", false).classList.add("elite-script-conditions-button")
    generateInactiveScriptSectionContainer("Actions", function () {
        generateAction(this)
    }, scriptContainer, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions",true).classList.add("elite-script-action-button")
    generateInactiveScriptSectionContainer("Cooldowns", function () {
        generateCooldown(this)
    }, scriptContainer, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Cooldowns",false).classList.add("elite-script-cooldown-button")
    innerCard.append(innerCard.getElementsByClassName("new-script-container")[0])
    innerCard.getElementsByClassName("new-script-container")[0].getElementsByTagName("input")[0].value = ""
}

function removeScriptButton(button) {
    removeAnimation(button.closest(".script-meta-container"))
}

function duplicateScriptButton(button) {
    alert("Duplicate feature coming soon!")
}

function generateInactiveScriptSectionContainer(text, triggerFunction, innerCard, wikiPage, mandatory) {
    let scriptSection = document.createElement("div")
    scriptSection.style.textAlign = "left"
    scriptSection.classList.add("script-section")

    let header = document.createElement("div")
    header.classList.add("row", "script-section-header")
    scriptSection.append(header)

    let addButton = document.createElement("button")
    addButton.onclick = triggerFunction
    addButton.classList.add("invisible-button")
    addButton.append(getPlusIcon())
    header.append(addButton)

    let textSection = document.createElement("div")
    textSection.innerText = text
    header.append(textSection)
    innerCard.append(scriptSection)

    let linkSection = document.createElement("a")
    linkSection.href = wikiPage
    linkSection.target = "_blank"
    linkSection.append(getZoomIcon())
    header.append(linkSection)

    let valueSection = document.createElement("div")
    valueSection.classList.add("script-value-section")
    setAsConfigMap(valueSection, text)
    scriptSection.append(valueSection)

    if (mandatory)
        scriptSection.classList.add("script-section-mandatory")

    return addButton
}

function genericScriptButtonSetter(button, generateScript) {
    button.innerHTML = ""
    button.append(getTrashIcon())
    button.onclick = function () {
        genericScriptButtonClearer(button, function () {
            generateScript(button)
        })
    }
    button.closest(".script-section").setAttribute("enabled", "true")
}

function genericScriptButtonClearer(button, generateScript) {
    button.closest(".script-section").getElementsByTagName("button")[0].onclick = function () {
        generateScript(this)
    }
    button.closest(".script-section").setAttribute("enabled", "false")
    button.innerHTML = ""
    button.append(getPlusIcon())
    button.closest(".script-section").getElementsByClassName("script-value-section")[0].innerHTML = ""
}