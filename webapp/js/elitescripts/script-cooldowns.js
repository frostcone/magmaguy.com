function generateCooldown(button) {
    genericScriptButtonSetter(button, function () {
        generateCooldown(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    createIntegerField(container, "local","Local cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Cooldowns#local", false)
    createIntegerField(container, "global","Global cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Cooldowns#global", false)
}