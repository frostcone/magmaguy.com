function tagRequired(container) {
    container.classList.add("required")
}

function allMandatoryFieldsValid() {
    let elements = document.querySelectorAll(".required")
    for (let i = 0; i < elements.length; i++)
        if (elements[i].value === undefined || elements[i].value === "") {
            elements[i].focus()
            return false
        }
    return true
}

function setAsConfigList(container, key) {
    container.classList.add("config-list")
    container.dataset.configKey = key
}

function isConfigList(container) {
    return container.classList.contains("config-list")
}

function setAsConfigMap(container, mapKey) {
    container.classList.add("config-map")
    container.dataset.configMap = mapKey
}

function setAsConfigMapList(container) {
    container.classList.add("config-map-list")
}

function isConfigMapList(container) {
    return container.classList.contains("config-map-list")
}

function setAsConfigMapListEntry(container) {
    container.classList.add("config-map-list-entry")
}

//Used by entries that have individual inputs per configuration section but which ultimately get put into a single line, like locations
function setAsComplexEntry(container) {
    container.classList.add("config-complex-entry")
}

function setAsSplitByCommas(container) {
    container.classList.add("config-split-commas")
    setAsComplexEntry(container)
}

function isSplitByCommas(container) {
    return container.classList.contains("config-split-commas")
}

function setAsSplitByColons(container) {
    container.classList.add("config-split-colons")
    setAsComplexEntry(container)
}

function isSplitByColons(container) {
    return container.classList.contains("config-split-colons")
}

function setGenericConfigEntry(container) {
    container.classList.add("config-entry")
}

//Form to yml file generation
function generate() {
    if (!allMandatoryFieldsValid()) {
        alert("Some mandatory fields are not filled in!")
        return
    }

    let cards = document.getElementsByClassName("container")
    for (let i = 0; i < cards.length; i++) {
        generateYMLTextFromCard(cards[i])
    }
}

let generationIsValid = true

function generateYMLTextFromCard(card) {
    let composedEntry = []
    nodeCrawler(card, 0, composedEntry, false)
    download(composedEntry)
}

function nodeCrawler(container, indentationLevel, parsedConfigText, firstElementInMapList) {
    if (container.classList.contains("config-map")) {
        if (container.getElementsByClassName("config-entry").length < 1) return;
        //Write the map name
        parsedConfigText.push(whitespaceGenerator(indentationLevel) + container.dataset.configMap + ":")

        //Map lists are a type of map that will start their own scanner
        if (isConfigMapList(container)) {
            generateMapListEntry(container, indentationLevel, parsedConfigText)
            //Map lists run their own node crawler because they require specific formatting
            return;
        }

        //Normal maps just start their own normal crawler
        for (let i = 0; i < container.childNodes.length; i++) {
            if (container.dataset.configMap === "Events")
                //Events are actually a list, it's a unique thing
                nodeCrawler(container.childNodes[i], indentationLevel, parsedConfigText, false)
            else
                nodeCrawler(container.childNodes[i], indentationLevel + 2, parsedConfigText, false)

        }

        return
    }
    if (container.getElementsByClassName("config-entry").length === 0) {

        if (!container.classList.contains("config-entry"))
            //Dead end
            return
        else {
            let currentEntry
            if (isSplitByCommas(container)) {
                currentEntry = getComplexEntry(container, ",", false, firstElementInMapList.value)
            } else if (isSplitByColons(container)) {
                currentEntry = getComplexEntry(container, ":", false, firstElementInMapList.value)
            } else {
                currentEntry = generateSingleEntry(container, false, firstElementInMapList.value)
            }

            if (currentEntry === undefined) return

            //tweak for map lists, which do not have the same whitespace for the first element
            if (firstElementInMapList.value) indentationLevel -= 2

            //do processing here
            parsedConfigText.push(whitespaceGenerator(indentationLevel) + currentEntry)
            firstElementInMapList.value = false
        }
    } else if (isConfigList(container)) {
        //Check if it's empty
        let currentEntry = generateListEntry(container, true)
        if (currentEntry.length < 2 && currentEntry[0] === undefined)
            return;


        //Basically lists have sets with entries in them, and everything is a part of that list
        let listHeader = container.dataset.configKey
        parsedConfigText.push(whitespaceGenerator(indentationLevel) + listHeader + ":")

        for (let i = 0; i < currentEntry.length; i++)
            parsedConfigText.push(whitespaceGenerator(indentationLevel) + currentEntry[i])
        //Lists are a dead end
        return
    }

    if (container.childNodes.length !== 0)
        for (let i = 0; i < container.childNodes.length; i++)
            nodeCrawler(container.childNodes[i], indentationLevel, parsedConfigText, firstElementInMapList)
}

function whitespaceGenerator(amount) {
    let whitespace = ""
    for (let i = 0; i < amount; i++) {
        whitespace += " "
    }
    return whitespace
}

//This assumes everything in the singleEntryContainer is meant to be stitched in one line
function getComplexEntry(singleEntryContainer, separator, listElement, firstMapListElement) {
    let elements = singleEntryContainer.getElementsByClassName("form-control")
    let finalResult = "";
    let startedFilling = false;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].value === "") {
            //pitch and yaw can almost always be assumed to be 0
            if (singleEntryContainer.classList.contains("config-location-string") && (i === 4 || i === 5)) {
                elements[i].value = 0
            } else if (startedFilling) {
                alert("You have an incomplete configuration entry!")
                elements[i].focus()
                return
            }
        }
        startedFilling = true
        finalResult += elements[i].value
        if (i + 1 < elements.length)
            finalResult += separator
    }
    if (listElement)
        return "- " + finalResult
    else if (firstMapListElement)
        return "- " + getConfigKey(singleEntryContainer) + ": " + finalResult
    else
        return getConfigKey(singleEntryContainer) + ": " + finalResult
}

function generateSingleEntry(container, listElement, firstMapListElement) {
    if (container.getElementsByTagName("input")[0] !== undefined) {
        let input = container.getElementsByTagName("input")[0]
        if (input.value === "") return
        let value = input.value
        if (input.dataset.inputType === "text") value = "\"" + value.replaceAll("\"", "\\\"") + "\""
        if (listElement)
            return "- " + value
        else if (firstMapListElement)
            return "- " + getConfigKey(input) + ": " + value
        else
            return getConfigKey(input) + ": " + value
    } else {
        if (container.getElementsByTagName("select")[0] === undefined) {
            alert("something's wrong I can feel it")
            return ""
        }
        let select = container.getElementsByTagName("select")[0]
        if (select.value === "") return
        if (getConfigKey(select) !== "keyless")
            if (listElement)
                return "- " + select.value
            else if (firstMapListElement)
                return "- " + getConfigKey(select) + ": " + select.value
            else
                return getConfigKey(select) + ": " + select.value
        else
            return "- " + select.value
    }
}

function getConfigKey(container) {
    return container.dataset.configKey
}

function generateListEntry(container) {
    let entries = container.getElementsByClassName("config-complex-entry")
    let parsedEntries = []
    if (entries.length === 0) {
        //empty
        entries = container.getElementsByClassName("config-entry")
        if (entries.length === 0)
            return

        //simple entries
        for (let i = 0; i < entries.length; i++) {
            let singleEntry = generateSingleEntry(entries[i], true, false)
            if (singleEntry !== "")
                parsedEntries.push(singleEntry)
        }
    } else {
        //complex entries
        for (let i = 0; i < entries.length; i++) {
            let singleEntry = getComplexEntry(entries[i], ",", true)
            if (singleEntry !== "")
                parsedEntries.push(singleEntry)
        }
    }
    return parsedEntries
}

function generateMapListEntry(container, indentationLevel, parsedConfigText) {
    let entries = container.getElementsByClassName("config-map-list-entry")

    for (let i = 0; i < entries.length; i++) {
        if (entries[i].closest(".config-map-list") !== container) continue
        let assertion = {value: true}
        nodeCrawler(entries[i], indentationLevel + 2, parsedConfigText, assertion)
    }
}