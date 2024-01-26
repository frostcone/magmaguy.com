function generateConditions(button) {
    genericScriptButtonSetter(button, function () {
        generateConditions(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    setGenericConfigEntry(container)
    generateTarget(container, null)
    createListField(container, "conditionType", "Condition Type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=condition-type%condition-type", ["BLOCKING", "FILTERING"], false)
    createBooleanField(container, "locationIsAir", "Location is air", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=location-based-conditions%location-based-conditions", false)
    createBooleanField(container, "isOnFloor", "Is on floor", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=isonfloor%isonfloor", false)
    createBooleanField(container, "isAlive", "Is alive", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=isalive%isalive", false)
    createTextFields(container, "hasTags", "Has tags", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=hastags%hastags", false)
    createTextFields(container, "doesNotHaveTags", "Does not have tags", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=doesnothavetags%doesnothavetags", false)
    createIntegerField(container, "randomChance", "Random chance", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_conditions.md&section=randomchance%randomchance", false)
}