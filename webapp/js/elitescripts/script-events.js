const scriptEvents = ["EliteMobEnterCombatEvent", "EliteMobDamagedByEliteMobEvent", "EliteMobDamagedByPlayerEvent", "EliteMobDamagedEvent", "EliteMobDeathEvent", "EliteMobExitCombatEvent", "EliteMobHealEvent", "EliteMobSpawnEvent", "EliteMobTargetPlayerEvent", "PlayerDamagedByEliteMobEvent", "ElitePhaseSwitchEvent"]

function generateEvents(button) {
    genericScriptButtonSetter(button, function () {
        generateEvents(button)
    })

    let container = button.closest(".script-section").getElementsByClassName("script-value-section")[0]

    createKeylessEventsMultiselect(container)
    setGenericConfigEntry(container)
    let addButton = createInvisibleButton(function () {
        createKeylessEventsMultiselect(container)
        container.append(addButton)
    })
    addButton.append(getPlusIcon())
    container.append(addButton)
}

function createKeylessEventsMultiselect(container) {
    let singleSelectEntry = document.createElement("div")
    container.append(singleSelectEntry)
    singleSelectEntry.classList.add("row")
    setAsConfigList(container)
    setGenericConfigEntry(singleSelectEntry)

    let select = document.createElement("select")
    singleSelectEntry.append(select)
    select.classList.add("form-control", "col-sm-11")
    select.dataset.configKey = "keyless"

    let deleteButton = createInvisibleButton(function () {
        removeAnimation(singleSelectEntry)
    })

    let options = scriptEvents

    for (let i = 0; i < options.length; i++) {
        let optionElement = document.createElement("option")
        optionElement.innerText = options[i]
        optionElement.value = options[i]
        select.append(optionElement)
    }

    deleteButton.append(getTrashIcon())
    deleteButton.classList.add("col-sm-1")
    singleSelectEntry.append(deleteButton)
}