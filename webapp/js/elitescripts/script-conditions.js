function generateConditions(button) {
    genericScriptButtonSetter(button, function () {
        generateConditions(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    setGenericConfigEntry(container)
    generateTarget(container, null)
    createBooleanField(container, "locationIsAir", "Location is air", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#location-based-conditions", false)
    createBooleanField(container, "isOnFloor", "Is on floor", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#isonfloor", false)
    createBooleanField(container, "isAlive", "Is alive", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#isalive", false)
    createTextFields(container, "hasTags", "Has tags", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#hastags", false)
    createTextFields(container, "doesNotHaveTags", "Does not have tags", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#hastags", false)
    createIntegerField(container, "randomChance", "Random chance", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions#randomchance", false)
}