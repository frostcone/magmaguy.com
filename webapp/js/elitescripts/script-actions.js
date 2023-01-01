const actions = ["ACTION_BAR_MESSAGE", "BOSS_BAR_MESSAGE", "DAMAGE", "MAKE_INVULNERABLE", "MODIFY_DAMAGE", "MESSAGE", "PLACE_BLOCK", "PLAY_ANIMATION", "PLAY_SOUND", "POTION_EFFECT", "PUSH", "RUN_COMMAND_AS_CONSOLE", "RUN_COMMAND_AS_PLAYER", "RUN_SCRIPT", "SET_MOB_AI", "SET_MOB_AWARE", "SET_ON_FIRE", "SET_TIME", "SPAWN_FIREWORKS", "STRIKE_LIGHTNING", "SPAWN_FALLING_BLOCK", "SPAWN_PARTICLE", "SUMMON_REINFORCEMENT", "TAG", "TELEPORT", "TITLE_MESSAGE", "UNTAG", "VISUAL_FREEZE"]
const weather = ["CLEAR", "PRECIPITATION", "THUNDER"]
const fireworksEffects = ["WHITE", "SILVER", "GRAY", "BLACK", "RED", "MAROON", "YELLOW", "OLIVE", "LIME", "GREEN", "AQUA", "TEAL", "BLUE", "NAVY", "FUCHSIA", "PURPLE", "ORANGE"]

function generateAction(button) {
    genericScriptButtonSetter(button, function () {
        generateAction(button)
    })

    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]
    container.classList.add("actions-container")
    setAsConfigMapList(container)
    button.closest(".script-section").append(container)

    generateActionCard(container, button)

    let newActionContainer = document.createElement("div")
    newActionContainer.classList.add("row", "script-actions-add-new-action-button")

    let newActionButton = createInvisibleButton()
    newActionButton.innerText = "Add action"
    newActionButton.prepend(getPlusIcon())
    newActionContainer.append(newActionButton)

    newActionButton.onclick = function () {
        generateActionCard(container)
        container.append(newActionContainer)
    }
    container.append(newActionContainer)

}

function generateActionCard(actionsContainer) {
    let metaContainer = document.createElement("div")
    metaContainer.classList.add("script-action-actions-container")
    actionsContainer.append(metaContainer)
    setAsConfigMapListEntry(metaContainer)

    let headerContainer = document.createElement("div")
    headerContainer.classList.add("row", "script-action-title-container")
    metaContainer.append(headerContainer)

    let actionTitle = document.createElement("div")
    headerContainer.append(actionTitle)
    actionTitle.classList.add("script-action-title")

    let trashButton = createInvisibleButton(function () {
        actionTrashBehavior(this)
    })
    trashButton.append(getTrashIcon())
    trashButton.classList.add("script-actions-action-trash-button")
    headerContainer.append(trashButton)

    let duplicateButton = createInvisibleButton(function () {
        actionDuplicateBehavior(this, actionsContainer)
    })
    duplicateButton.append(getDuplicateIcon())
    duplicateButton.classList.add("script-action-clone-button")
    headerContainer.append(duplicateButton)

    let valueContainer = document.createElement("div")
    valueContainer.classList.add("script-value-section-action")

    let select = createListField(valueContainer, "action", "Action", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#actions", actions)
    select.onchange = function () {
        redrawActionFields(this, valueContainer)
    }

    metaContainer.append(valueContainer)

    redrawActionFields(select, valueContainer)

    return metaContainer
}

function actionTrashBehavior(button) {
    removeAnimation(button.closest(".script-action-actions-container"))
}

function actionDuplicateBehavior(button, actionsContainer) {
alert("Duplicate feature coming soon!")
}


function redrawActionFields(select, container) {
    let selectDiv = select.closest(".row")
    selectDiv.closest(".script-action-actions-container").getElementsByClassName("script-action-title")[0].innerText = select.value.replaceAll("_", " ").toLowerCase()
    container.innerHTML = ""
    container.append(selectDiv)
    let hasTarget = true;
    switch (select.value) {
        case "ACTION_BAR_MESSAGE":
            actionBarMessageAction(container)
            break
        case "BOSS_BAR_MESSAGE":
            bossBarMessageAction(container)
            break
        case "DAMAGE":
            damageAction(container)
            break
        case "MAKE_INVULNERABLE":
            makeInvulnerableAction(container)
            break
        case "MODIFY_DAMAGE":
            modifyDamageAction(container)
            hasTarget = false;
            break
        case "MESSAGE":
            messageAction(container)
            break
        case "PLACE_BLOCK":
            placeBlockAction(container)
            break
        case "PLAY_ANIMATION":
            playAnimationAction(container)
            break
        case "PLAY_SOUND":
            playSoundAction(container)
            break
        case "POTION_EFFECT":
            potionEffectAction(container)
            break
        case "PUSH":
            pushAction(container)
            break
        case "RUN_COMMAND_AS_CONSOLE":
            runCommandAsConsoleAction(container)
            break
        case "RUN_COMMAND_AS_PLAYER":
            runCommandAsPlayerAction(container)
            break
        case "RUN_SCRIPT":
            //No fields!
            break
        case "SET_MOB_AI":
            setMobAIAction(container)
            break
        case "SET_MOB_AWARE":
            setMobAwareAction(container)
            break
        case "SET_ON_FIRE":
            setOnFireAction(container)
            break
        case "SET_TIME":
            setTimeAction(container)
            break
        case "SET_WEATHER":
            setWeatherAction(container)
            break
        case "SPAWN_FIREWORKS":
            spawnFireworksAction(container)
            break
        case "STRIKE_LIGHTNING":
            //No fields!
            break
        case "SPAWN_FALLING_BLOCK":
            spawnFallingBlockAction(container)
            break
        case "SPAWN_PARTICLE":
            spawnParticleAction(container)
            break
        case "SUMMON_REINFORCEMENT":
            summonReinforcementAction(container)
            break
        case "TAG":
            tagAction(container)
            break
        case "TELEPORT":
            teleportAction(container)
            break
        case "TITLE_MESSAGE":
            titleMessageAction(container)
            break
        case "UNTAG":
            untagAction(container)
            break
        case "VISUAL_FREEZE":
            visualFreezeAction(container)
            break
    }
    commonActionElements(container, hasTarget)
}

function commonActionElements(container, hasTarget) {
    if (hasTarget)
        generateTarget(container, null)
    createIntegerField(container, "wait", "Wait", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#shared-attributes", false)
    createIntegerField(container, "repeatEvery", "Repeat every", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#shared-attributes", false)
    createIntegerField(container, "times", "Times", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#shared-attributes", false)
    createTextFields(container, "scripts", "Scripts", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#shared-attributes", false)
    createBooleanField(container, "onlyRunOneScript", "Only run one script", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#actions", false)
    generateInactiveScriptSectionContainer("Conditions", function () {
        generateConditions(this)
    }, container, "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Conditions")
}

function actionBarMessageAction(container) {
    createTextField(container, "sValue", "Message (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#action_bar_message", true)
}

function bossBarMessageAction(container) {
    createTextField(container, "sValue", "Message (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#boss_bar_message", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#boss_bar_message", false)
}

function damageAction(container) {
    createIntegerField(container, "multiplier", "Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#damage", true)
}

function makeInvulnerableAction(container) {
    createBooleanField(container, "invulnerable", "Invulnerable", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#make_invulnerable", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#make_invulnerable", false)
}

function modifyDamageAction(container) {
    createIntegerField(container, "multiplier", "Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#damage", true)
}


function messageAction(container) {
    createTextField(container, "sValue", "Message (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#message", true)
}

function placeBlockAction(container) {
    createListField(container, "material", "Material", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#place_block", materialAPINames, true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#place_block", false)
}

function playAnimationAction(container) {
    createTextField(container, "sValue", "Animation (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#play_animation", true)
}

function playSoundAction(container) {
    createTextField(container, "sValue", "Sound (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#play_animation", true)
}

function potionEffectAction(container) {
    createListField(container, "potionEffectType", "Potion effect type", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#potion_effect", potionEffectsAPINames, true)
    createIntegerField(container, "amplifier", "Amplifier", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#potion_effect", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#potion_effect", true)
}

function pushAction(container) {
    createVectorField(container, "vValue", "Vector (vValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#potion_effect", true)
}

function runCommandAsConsoleAction(container) {
    createTextField(container, "sValue", "Command (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#run_command_as_console", true)
}

function runCommandAsPlayerAction(container) {
    createTextField(container, "sValue", "Command (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#run_command_as_console", true)
}

function setMobAIAction(container) {
    createBooleanField(container, "bValue", "Boss has AI (bValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_ai", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_ai", true)
}

function setMobAwareAction(container) {
    createBooleanField(container, "bValue", "Boss is aware (bValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_ai", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_ai", false)
}

function setOnFireAction(container) {
    createBooleanField(container, "bValue", "Set on fire (bValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_aware", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_mob_aware", false)
}

function setTimeAction(container) {
    createIntegerField(container, "time", "Time (world time in ticks)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_time", true)
}

function setWeatherAction(container) {
    createListField(container, "weather", "Weather", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_weather", weather, true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#set_weather", true)
}

function spawnFireworksAction(container) {
    createVectorField(container, "vValue", "Velocity of the fireworks (vValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_fireworks", true)
    createBooleanField(container, "flicker", "Fireworks flicker", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_fireworks", false)
    createBooleanField(container, "withTrail", "Fireworks trail", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_fireworks", false)
    createIntegerField(container, "power", "Fireworks power", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_fireworks", false)
    createMultiSelectListField(container, "fireworkEffects", "Firework effects", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_fireworks", fireworksEffects, true)
}

function spawnFallingBlockAction(container) {
    createListField(container, "material", "Material", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_falling_block", materialAPINames, true)
    createTextFields(container, "landingScripts", "Landing scripts", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_falling_block", false)
}

function spawnParticleAction(container) {
    let megaContainer = document.createElement("div")
    container.append(megaContainer)

    //Initialize the map that contains all particle elements
    let innerParticleContainer = document.createElement("div")
    innerParticleContainer.classList.add("particle-container")
    container.append(innerParticleContainer)
    setAsConfigMap(innerParticleContainer, "particles")
    setAsConfigMapList(innerParticleContainer)

    let particleHeader = document.createElement("div")
    particleHeader.classList.add("row", "particle-container-header")
    innerParticleContainer.append(particleHeader)

    let headerTitle = document.createElement("div")
    particleHeader.append(headerTitle)
    headerTitle.innerText = "Particle"

    let headerButton = createInvisibleButton(function () {
        removeAnimation(innerParticleContainer)
    })
    headerButton.append(getTrashIcon())

    particleHeader.append(headerButton)


    //This one is very custom
    generateScriptParticleContainer(innerParticleContainer)

    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("row")
    megaContainer.append(buttonContainer)

    let addButton = createInvisibleButton(function () {
        generateScriptParticleContainer(megaContainer)
        megaContainer.append(buttonContainer)
    })
    addButton.innerText = "New particle"
    addButton.prepend(getPlusIcon())

    buttonContainer.append(addButton)
}

function generateScriptParticleContainer(innerParticleContainer) {
    let particleContainerValues = document.createElement("div")
    setAsConfigMapListEntry(particleContainerValues)
    innerParticleContainer.append(particleContainerValues)
    particleContainerValues.classList.add("particle-container-values")

    createListField(particleContainerValues, "particle", "Particle", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", particleAPINames, true)
    createIntegerField(particleContainerValues, "x", "X", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "y", "Y", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "z", "Z", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "amount", "Amount", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "speed", "Speed", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "red", "Red", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "green", "Green", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "blue", "Blue", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "toRed", "To red", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "toGreen", "To green", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
    createIntegerField(particleContainerValues, "toBlue", "To blue", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#spawn_particle", false)
}

function summonReinforcementAction(container) {
    createTextField(container, "sValue", "Reinforcement filename (sValue)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#summon_reinforcement", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#summon_reinforcement", false)
}

function tagAction(container) {
    createTextFields(container, "tags", "Tags", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#tag", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#tag", false)
}

function teleportAction(container) {
    generateTarget(container, "Final target (destination)")
}

function titleMessageAction(container) {
    createTextField(container, "title", "Title message", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#title_message", false)
    createTextField(container, "subtitle", "Subtitle message", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#title_message", false)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#title_message", false)
    createIntegerField(container, "fadeIn", "Fade in time (ticks)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#title_message", false)
    createIntegerField(container, "fadeOut", "Fade out time (ticks)", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#title_message", false)
}

function untagAction(container) {
    createTextFields(container, "tags", "Tags", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#untag", true)
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#untag", false)
}

function visualFreezeAction(container) {
    createIntegerField(container, "duration", "Duration", "https://github.com/MagmaGuy/EliteMobs/wiki/Elite-Script-Actions#visual_freeze", true)
}