const validEntityTypeAPINames = ["ZOMBIE", "BEE", "BLAZE", "CAVE_SPIDER", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDER_DRAGON", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GOAT", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "IRON_GOLEM", "KILLER_BUNNY", "LLAMA", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "POLAR_BEAR", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER_SKELETON", "WOLF", "ZOGLIN", "ZOMBIFIED_PIGLIN"]

function createCustomBossesTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Boss", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses")
    generateTemplateOption("General", function () {
        createGeneralCustomBossesContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomBossesContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    let hybridTrailsContainer = []
    particleAPINames.forEach(entry => hybridTrailsContainer.push(entry))
    materialAPINames.forEach(entry => hybridTrailsContainer.push(entry))
    createListField(innerCard, "entityType", "Entity type", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#entitytype", validEntityTypeAPINames, true)
    createTextField(innerCard, "name", "Name", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#name", false)
    createIntegerField(innerCard, "level", "Level", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#level", false)
    createIntegerField(innerCard, "healthMultiplier", "Health Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#healthmultiplier", false)
    createIntegerField(innerCard, "damageMultiplier", "Damage Multiplier", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#damagemultiplier", false)
    createBooleanField(innerCard, "isBaby", "Is Baby", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#isbaby", false)
    createListField(innerCard, "helmet", "Helmet", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createListField(innerCard, "chestplate", "Chestplate", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createListField(innerCard, "leggings", "Leggings", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createListField(innerCard, "boots", "Boots", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createListField(innerCard, "mainHand", "Main Hand", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createListField(innerCard, "offHand", "Off Hand", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#helmetchestplateleggingsbootsmainhandoffhand", materialAPINames, false)
    createTextFields(innerCard, "powers", "Powers", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#powers", false)
    createTextField(innerCard, "spawnMessage", "Spawn Message", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#spawnmessage", false)
    createTextFields(innerCard, "deathMessages", "Death Messages", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#deathmessages", false)
    createIntegerField(innerCard, "timeout", "Timeout", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#timeout", false)
    createBooleanField(innerCard, "isPersistent", "Is Persistent", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#ispersistent", false)
    //todo: complex field conversion
    createTextFields(innerCard, "damageModifiers", "Damage Modifiers", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#damagemodifiers", false)
    createBooleanField(innerCard, "normalizedCombat", "Use Normalized Combat", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#normalizedcombat", false)
    createTextField(innerCard, "escapeMessage", "Escape Message", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#escapemessage", false)
    createTextField(innerCard, "locationMessage", "Location Message", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#locationmessage", false)
    //todo: complex field conversion
    createTextFields(innerCard, "uniqueLootList", "Unique Loot List", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#uniquelootlist", false)
    createBooleanField(innerCard, "dropsEliteMobsLoot", "Drops EliteMobs Loot", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#dropselitemobsloot", false)
    createBooleanField(innerCard, "dropsVanillaLoot", "Drops Vanilla Loot", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#dropsvanillaloot", false)
    createBooleanField(innerCard, "dropsRandomLoot", "Drops Random Loot", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#dropsrandomloot", false)
    createListField(innerCard, "trails", "Trails", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#trails", hybridTrailsContainer, false)
    createTextFields(innerCard, "onDamageMessages", "On Damage Messages", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#ondamagemessages", false)
    createTextFields(innerCard, "onDamagedMessages", "On Damaged Messages", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#ondamagedmessages", false)
    createTextField(innerCard, "mountedEntity", "Mounted Entity", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#mountedentity", false)
    createIntegerField(innerCard, "announcementPriority", "Announcement Priority", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#announcementpriority", false)
    createIntegerField(innerCard, "followDistance", "Follow Distance", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#announcementpriority", false)
    createTextFields(innerCard, "onDeathCommands", "On Death Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#ondeathcommands", false)
    createTextFields(innerCard, "onSpawnCommands", "On Spawn Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#onspawncommands", false)
    createTextFields(innerCard, "onCombatEnterCommands", "On Combat Enter Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#oncombatentercommands", false)
    createTextFields(innerCard, "onCombatLeaveCommands", "On Combat Leave Commands", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#oncombatleavecommands", false)
    //todo: complex field conversion?
    createTextField(innerCard, "disguise", "Disguise", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#disguise", false)
    createTextField(innerCard, "customDisguiseData", "Custom Disguise Data", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#disguise", false)
    createTextField(innerCard, "customModel", "Custom Model", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#custommodel", false)
    createBooleanField(innerCard, "frozen", "Frozen", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#frozen", false)
    createBooleanField(innerCard, "cullReinforcements", "Cull Reinforcements", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#cullreinforcements", false)
    //todo: complex field conversion
    createTextFields(innerCard, "phases", "Boss phases", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#boss-phases", false)
    createLocationField(innerCard, "phaseSpawnLocation", "Phase Spawn Location", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#boss-phases", false)
    createBooleanField(innerCard, "isRegionalBoss", "Is Regional Boss", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#regional-bosses", false)
    //todo: should be a list of spawn locations
    createTextFields(innerCard, "spawnLocation", "Spawn Locations", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#regional-bosses", false)
    createIntegerField(innerCard, "spawnCooldown", "Spawn Cooldown", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#regional-bosses", false)
    createIntegerField(innerCard, "leashRadius", "Leash Radius", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#regional-bosses", false)
    createBooleanField(innerCard, "instanced", "Instanced", "https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Creating-Custom-Bosses#instanced-bosses", false)
}