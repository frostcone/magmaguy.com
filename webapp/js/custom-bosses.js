const validEntityTypeAPINames = ["ZOMBIE", "BEE", "BLAZE", "CAVE_SPIDER", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDER_DRAGON", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GOAT", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "IRON_GOLEM", "KILLER_BUNNY", "LLAMA", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "POLAR_BEAR", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER_SKELETON", "WOLF", "ZOGLIN", "ZOMBIFIED_PIGLIN"]

function createCustomBossesTemplateCard(cardContents) {
    let templateContainer = generateTemplatesCard(cardContents, "Custom Boss", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md")
    generateTemplateOption("General", function () {
        createGeneralCustomBossesContents(templateContainer)
    }, templateContainer)
}

function createGeneralCustomBossesContents(templateContainer) {
    let innerCard = createGlobalTemplate(templateContainer)
    let hybridTrailsContainer = []
    particleAPINames.forEach(entry => hybridTrailsContainer.push(entry))
    materialAPINames.forEach(entry => hybridTrailsContainer.push(entry))
    createListField(innerCard, "entityType", "Entity type", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=entitytype%entitytype", validEntityTypeAPINames, true)
    createTextField(innerCard, "name", "Name", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=name%name", false)
    createIntegerField(innerCard, "level", "Level", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=level%level", false)
    createIntegerField(innerCard, "healthMultiplier", "Health Multiplier", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=healthmultiplier%healthmultiplier", false)
    createIntegerField(innerCard, "damageMultiplier", "Damage Multiplier", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=damagemultiplier%damagemultiplier", false)
    createBooleanField(innerCard, "isBaby", "Is Baby", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=isbaby%isbaby", false)
    createListField(innerCard, "helmet", "Helmet", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createListField(innerCard, "chestplate", "Chestplate", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createListField(innerCard, "leggings", "Leggings", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createListField(innerCard, "boots", "Boots", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createListField(innerCard, "mainHand", "Main Hand", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createListField(innerCard, "offHand", "Off Hand", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=helmet-chestplate-leggings-boots-mainhand-offhand%helmet-chestplate-leggings-boots-mainhand-offhand", materialAPINames, false)
    createTextFields(innerCard, "powers", "Powers", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=powers%powers", false)
    createTextField(innerCard, "spawnMessage", "Spawn Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=spawnmessage%spawnmessage", false)
    createTextFields(innerCard, "deathMessages", "Death Messages", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=deathmessages%deathmessages", false)
    createIntegerField(innerCard, "timeout", "Timeout", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=timeout%timeout", false)
    createBooleanField(innerCard, "isPersistent", "Is Persistent", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=ispersistent%ispersistent", false)
    //todo: complex field conversion
    createTextFields(innerCard, "damageModifiers", "Damage Modifiers", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=damagemodifiers%damagemodifiers", false)
    createBooleanField(innerCard, "normalizedCombat", "Use Normalized Combat", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=normalizedcombat%normalizedcombat", false)
    createTextField(innerCard, "escapeMessage", "Escape Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=escapemessage%escapemessage", false)
    createTextField(innerCard, "locationMessage", "Location Message", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=locationmessage%locationmessage", false)
    //todo: complex field conversion
    createTextFields(innerCard, "uniqueLootList", "Unique Loot List", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=uniquelootlist%uniquelootlist", false)
    createBooleanField(innerCard, "dropsEliteMobsLoot", "Drops EliteMobs Loot", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=dropselitemobsloot%dropselitemobsloot", false)
    createBooleanField(innerCard, "dropsVanillaLoot", "Drops Vanilla Loot", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=dropsvanillaloot%dropsvanillaloot", false)
    createBooleanField(innerCard, "dropsRandomLoot", "Drops Random Loot", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=dropsrandomloot%dropsrandomloot", false)
    createListField(innerCard, "trails", "Trails", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=trails%trails", hybridTrailsContainer, false)
    createTextFields(innerCard, "onDamageMessages", "On Damage Messages", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=ondamagemessages%ondamagemessages", false)
    createTextFields(innerCard, "onDamagedMessages", "On Damaged Messages", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=ondamagedmessages%ondamagedmessages", false)
    createTextField(innerCard, "mountedEntity", "Mounted Entity", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=mountedentity%mountedentity", false)
    createIntegerField(innerCard, "announcementPriority", "Announcement Priority", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=announcementpriority%announcementpriority", false)
    createIntegerField(innerCard, "followDistance", "Follow Distance", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=followdistance%followdistance", false)
    createTextFields(innerCard, "onDeathCommands", "On Death Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=ondeathcommands%ondeathcommands", false)
    createTextFields(innerCard, "onSpawnCommands", "On Spawn Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=onspawncommands%onspawncommands", false)
    createTextFields(innerCard, "onCombatEnterCommands", "On Combat Enter Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=oncombatentercommands%oncombatentercommands", false)
    createTextFields(innerCard, "onCombatLeaveCommands", "On Combat Leave Commands", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=oncombatleavecommands%oncombatleavecommands", false)
    //todo: complex field conversion?
    createTextField(innerCard, "disguise", "Disguise", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=disguise%disguise", false)
    createTextField(innerCard, "customDisguiseData", "Custom Disguise Data", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=disguise%disguise", false)
    createTextField(innerCard, "customModel", "Custom Model", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=custommodel%custommodel", false)
    createBooleanField(innerCard, "frozen", "Frozen", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=frozen%frozen", false)
    createBooleanField(innerCard, "cullReinforcements", "Cull Reinforcements", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=cullreinforcements%cullreinforcements", false)
    //todo: complex field conversion
    createTextFields(innerCard, "phases", "Boss phases", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_boss_phases.md", false)
    createLocationField(innerCard, "phaseSpawnLocation", "Phase Spawn Location", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=boss-phases%boss-phases", false)
    createBooleanField(innerCard, "isRegionalBoss", "Is Regional Boss", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=regional-bosses%regional-bosses", false)
    //todo: should be a list of spawn locations
    createTextFields(innerCard, "spawnLocations", "Spawn Locations", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=regional-bosses%regional-bosses", false)
    createIntegerField(innerCard, "spawnCooldown", "Spawn Cooldown", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=regional-bosses%regional-bosses", false)
    createIntegerField(innerCard, "leashRadius", "Leash Radius", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=regional-bosses%regional-bosses", false)
    createBooleanField(innerCard, "instanced", "Instanced", "https://magmaguy.com/wiki.html#lang=en&article=elitemobs+creating_bosses.md&section=instanced-bosses%instanced-bosses", false)
}