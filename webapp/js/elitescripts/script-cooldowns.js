function generateCooldown(button) {
    genericScriptButtonSetter(button, function () {
        generateCooldown(button)
    })
    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    createIntegerField(container, "local","Local cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_cooldowns.md&section=local%local", false)
    createIntegerField(container, "global","Global cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+elitescript_cooldowns.md&section=local%local", false)
}