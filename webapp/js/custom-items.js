const scalabilityAPINames = ["scalable", "fixed", "limited"]
const itemTypeAPINames = ["custom", "unique"]
const potionEffectTargets = ["self", "target"]
const potionEffectApplicationType = ["onHit", "continuous"]

function createCustomItemsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Item", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items")
    generateTemplateOption("General", function () {
        createGeneralCustomItemsContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomItemsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createListField(innerCard, "material", "Material", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#material", materialAPINames, true)
    createIntegerField(innerCard, "level", "Level", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#level", false)
    createTextFields(innerCard, "lore", "Lore", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#lore", false)
    createComplexTextList(innerCard, "enchantments", "Enchantments", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#enchantments", createSingleFieldForEnchantments)
    createComplexTextList(innerCard, "potionEffects", "Potion Effects", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#potioneffects", createSingleFieldForPotionEffects)
    createListField(innerCard, "scalability", "Scalability", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#scalability", scalabilityAPINames, false)
    createListField(innerCard, "itemType", "Item Type", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#itemtype", itemTypeAPINames, false)
    createTextField(innerCard, "dropWeight", "Drop Weight", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#dropweight", "dynamic", false)
    createIntegerField(innerCard, "customModelID", "Custom Model ID", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#custommodelid", false)
    createTextField(innerCard, "permission", "Permission", "https://github.com/MagmaGuy/EliteMobs/wiki/Custom-Items#permission", false)
}

function createComplexTextList(container, configKey, keyText, keyLink, newButtonFunction) {
    let entryDiv = createGenericEntry(container, keyText, keyLink)
    setAsConfigList(entryDiv, configKey)

    let allFieldsContainer = document.createElement("div")
    allFieldsContainer.classList.add("col-sm-8")
    entryDiv.append(allFieldsContainer)

    let addButton = createInvisibleButton(function () {
        addComplexListElement(newButtonFunction, allFieldsContainer, this)
        }
    )

    addButton.append(getPlusIcon())
    allFieldsContainer.append(addButton)
    //addComplexListElement(newButtonFunction, allFieldsContainer, addButton)
    container.append(entryDiv)
}

function addComplexListElement(newButtonFunction, allFieldsContainer, button) {
    let newElement = newButtonFunction(allFieldsContainer, button).closest(".row")
    let removeButton = createInvisibleButton(function () {
        removeAnimation(newElement)
    })
    removeButton.append(getTrashIcon())
    removeButton.classList.add("col-sm-1")
    newElement.append(removeButton)
}

function createSingleFieldForEnchantments(allFieldsContainer, addButton) {
    let entryDiv = document.createElement("div")
    entryDiv.classList.add("row")
    allFieldsContainer.append(entryDiv)
    allFieldsContainer.append(addButton)
    setGenericConfigEntry(entryDiv)
    setAsSplitByCommas(entryDiv)

    let enchantmentNameLabel = generateComplexLabel("Enchantment:")
    let enchantmentNameField = generateComplexInput("DAMAGE_ALL", "col-sm-6", enchantmentAPINames)
    let enchantmentLevelLabel = generateComplexLabel("Level:")
    let enchantmentLevelField = generateComplexInput("1", "col-sm-2")

    entryDiv.append(enchantmentNameLabel, enchantmentNameField, enchantmentLevelLabel, enchantmentLevelField)

    return entryDiv
}

function createSingleFieldForPotionEffects(allFieldsContainer, addButton) {
    let entryDiv = document.createElement("div")
    entryDiv.classList.add("row")
    allFieldsContainer.append(entryDiv)
    allFieldsContainer.append(addButton)
    setGenericConfigEntry(entryDiv)
    setAsSplitByCommas(entryDiv)

    let effectTypeLabel = generateComplexLabel("Potion type:")
    let effectTypeInput = generateComplexInput("DAMAGE_ALL", "col-sm-2", potionEffectsAPINames)
    let affectedEntityLabel = generateComplexLabel("Affected entity:")
    let affectedEntityField = generateComplexInput("SELF", "col-sm-1", potionEffectTargets)
    let applicationMethodLabel = generateComplexLabel("Application method:")
    let applicationMethodInput = generateComplexInput("ON_HIT", "col-sm-2", potionEffectApplicationType)

    entryDiv.append(effectTypeLabel, effectTypeInput, affectedEntityLabel, affectedEntityField, applicationMethodLabel, applicationMethodInput)

    return entryDiv
}