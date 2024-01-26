const scalabilityAPINames = ["scalable", "fixed", "limited"]
const itemTypeAPINames = ["custom", "unique"]
const potionEffectTargets = ["self", "target"]
const potionEffectApplicationType = ["onHit", "continuous"]
const amplifierLevels = ["0","1","2","3","4","5","6","7","8","9","10"]

function createCustomItemsTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Item", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md")
    generateTemplateOption("General", function () {
        createGeneralCustomItemsContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomItemsContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    createTextField(innerCard, "name", "Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=name%name", false)
    createListField(innerCard, "material", "Material", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=material%material", materialAPINames, true)
    createIntegerField(innerCard, "level", "Level", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=level%level", false)
    createTextFields(innerCard, "lore", "Lore", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=lore%lore", false)
    createComplexTextList(innerCard, "enchantments", "Enchantments", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=enchantments%enchantments", createSingleFieldForEnchantments)
    createComplexTextList(innerCard, "potionEffects", "Potion Effects", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=potioneffects%potioneffects", createSingleFieldForPotionEffects)
    createListField(innerCard, "scalability", "Scalability", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=scalability%scalability", scalabilityAPINames, false)
    createListField(innerCard, "itemType", "Item Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=itemtype%itemtype", itemTypeAPINames, false)
    createTextField(innerCard, "dropWeight", "Drop Weight", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=dropweight%dropweight", "dynamic", false)
    createIntegerField(innerCard, "customModelID", "Custom Model ID", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=custommodelid%custommodelid", false)
    createTextField(innerCard, "permission", "Permission", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_items.md&section=permission%permission", false)
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
    let effectAmplifierLabel = generateComplexLabel("Level:")
    let effectAmplifierInput = generateComplexInput("0", "col-sm-2", amplifierLevels)
    let affectedEntityLabel = generateComplexLabel("Affected entity:")
    let affectedEntityField = generateComplexInput("SELF", "col-sm-1", potionEffectTargets)
    let applicationMethodLabel = generateComplexLabel("Application method:")
    let applicationMethodInput = generateComplexInput("ON_HIT", "col-sm-2", potionEffectApplicationType)

    entryDiv.append(effectTypeLabel, effectTypeInput,effectAmplifierLabel,effectAmplifierInput, affectedEntityLabel, affectedEntityField, applicationMethodLabel, applicationMethodInput)

    return entryDiv
}