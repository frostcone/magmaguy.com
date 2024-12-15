translate to french:
# EliteMobs Config Defaults

**EliteMobs comes with the recommended defaults installed by default. If you change things at random, odds are you'll only make the experience worse overall.**

_**EliteMobs is provided to all users with the recommended default settings. If you change things at random and then request support, there is a very strong chance that you will be told to reset your configuration files. Modifications to the plugin should be borne of playtesting and not of just guesswork.**_

## Getting started

EliteMobs currently offers a vast array of configuration options due to high demand for customization. To keep this wiki page concise, only the default configurations will be displayed. 

If you wish to learn more about a specific setting, you can refer to the config file and review the comments.

---

## config.yml

`config.yml` contains mostly random settings that couldn't comfortably fit elsewhere at the time of creating them. It is the config file most likely to see changes between versions.

<div align="left">

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the language file used by EliteMobs
# Do NOT change this manually! It is meant to be installed with the command '/em language <languagefile>'
language: english
# Sets whether elites and bosses spawned by elitemobs will always show their nametags.
# Not recommended!
alwaysShowEliteMobNameTags: false
# Sets the amount of passive mobs that have to be in close proximity before they can be merged.
# Don't set this to 0!
superMobStackAmount: 50
# Makes elites not damage passive mobs with explosions.
preventEliteCreeperDamageToPassiveMobs: true
# Sets whether EliteMobs will use titles to warn players about missing permissions
useTitlesForMissingPermissionMessages: true
# Sets whether EliteMobs will prevent converting named mobs to elites.
# Especially important for compatibility with other plugins.
preventEliteMobConversionOfNamedMobs: true
# Sets if EliteMobs will convert mobs with custom spawn reasons.
# Running certain boss plugins will automatically set this to true, no matter what the value in the config is.
enableHighCompatibilityMode: false
# Sets the elite spawn bonus for the nightmare gamemode
nightmareWorldSpawnBonus: 0.5
# Sets if the centralized /em command opens the main status page of the plugin.
# Highly recommended!
emLeadsToStatusMenu: true
# Sets if running specific commands like /em wallet will lead to the /em menu where that information is centralized.
otherCommandsLeadToEMStatusMenu: true
# Sets if the setup is complete.
# Do not set this value manually, it is meant to be modified through in-game commands.
setupDoneV3: true
# Sets if elites will prevent spawning vanilla reinforcements, such as for the Zombie reinforcement feature.
preventVanillaReinforcementsForEliteEntities: true
# Sets the default spawn location of the server for EliteMobs. /em spawntp will lead to this location.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Sets if EliteMobs will regenerate blocks blown up by elites.
doExplosionRegen: true
# Sets if the explosion regen will also regenerate the contents of containers such as chests.
# Turning it to false will make elite explosions not blow up containers.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Sets whether the /em menu will only use the inventory-based menu style which is compatible with bedrock.
# As a reminder, players can otherwise do the command /em alt to switch between /em menu styles
onlyUseBedrockMenus: false
# Sets the character limit per line for book menu pages.
# Lower this amount if text is getting cut off in book menus such as for quests
characterLimitForBookMenuPagesV2: 170
# Sets if empty menu space will be filled with glass panes.
# Not recommended if you are using the EliteMobs resource pack.
useGlassToFillMenuEmptySpace: false
# Sets if unicode will be used to format the EliteMobs resource pack.
# Do not set this manually, it is set automatically upon installation of the resource pack.
# Only set it manually if you had to merge the EliteMobs resource pack, and expect that the spacing might not work if you do that.
menuUnicodeFormatting: false
# Sets the message sent to players if they run '/em confirm' with no pending commands.
noPendingCommands: '&cYou don''t currently have any pending commands!'
# Sets the tracking message for bosses that send tracking messages.
trackMessage: Track the $name
# Sets the message sent to players that open treasure chests with level requirements above their guild rank.
chestLowRankMessage: '&7[EM] &cYour guild rank needs to be at least $rank &cin order
  to open this chest!'
# Sets the message sent to players that try to reopen a treasure chest they have already opened.
chestCooldownMessage: '&7[EM] &cYou''ve already opened this chest recently! Wait $time!'
# Sets the message that appears recommending the /em alt command for players having issues with the /em command
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fmenu not working for you? Try &2/elitemobs
  alt &fto see an alternative version of the menu! &cDon''t want to see this message
  again? &4/em dismiss'
# Sets the message that appears when players run the /em alt command.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fmenu style changed! Check it out!'
# Sets the message that appears when a player opens a treasure chest but gets nothing
treasureChestNoDropMessage: '&8[EliteMobs] &cYou didn''t get anything! Better luck
  next time!'
# Sets the message that appears when a player tries to track a boss that is no longer valid
bossAlreadyGoneMessage: '&c[EliteMobs] Sorry, this boss is already gone!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contains config settings relevant to both the Adventurer's Guild Hub (the world), and settings relevant to the Adventurer's Guild rankup system.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if EliteMobs will add max health when unlocking guild ranks as a prestige reward
Add max health when unlocking higher guild ranks: true
# Sets if EliteMobs will add a critical strike chance when unlocking guild ranks as a prestige reward
Add critical chance when unlocking higher guild ranks: true
# Sets if EliteMobs will add dodge chance when unlocking guild ranks as a prestige reward
Add dodge chance when unlocking higher guild ranks: true
# Sets if user commands get rerouted to the adventurer's guild hub. This is highly recommended for gameplay immersion and tutorial purposes.
userCommandsTeleportToAdventurersGuild: true
# Sets the in-game display name of the adventurer's guild
adventurersGuildMenuName: '&6&lAdventurer''s Hub'
Prestige 0 rank 0: '&8Commoner - disables elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Sets if player loot is limited by their guild level.
#  This is an incredibly important part of EliteMobs and extremely highly recommended.
limitLootBasedOnGuildTier: true
# Sets the message sent to players if their loot gets nerfed due to their low guild level.
lootLimiterMessage: '&7[EM] &cYou must unlock the next guild rank through /ag to loot
  better items!'
# Sets the commands that run on guild rank up. Placeholders are:
# $prestigerank - outputs the prestige rank
# $activerank - outputs the currently active rank
# $player - outputs the player name
onRankUpCommand: []
# Sets the commands that run on prestige rank up.
# $prestigerank - outputs the prestige rank
# $activerank - outputs the currently active rank
# $player - outputs the player name
onPrestigeUpCommand: []
# Sets the prestige level for the first dodge bonus.
dodgePrestige3Bonus: 3.0
# Sets the prestige level for the second dodge bonus.
dodgePrestige6Bonus: 6.0
# Sets the prestige level for the third dodge bonus.
dodgePrestige9Bonus: 10.0
# Sets the prestige level for the first critical hit bonus.
critPrestige2Bonus: 3.0
# Sets the prestige level for the second critical hit bonus.
critPrestige5Bonus: 6.0
# Sets the prestige level for the third critical hit bonus.
critPrestige8Bonus: 10.0
# Sets the prestige level for the first max health bonus.
healthPrestige1Bonus: 2.0
# Sets the prestige level for the second max health bonus.
healthPrestige4Bonus: 2.5
# Sets the prestige level for the third max health bonus.
healthPrestige7Bonus: 3.0
# Sets the prestige level for the third max health bonus.
healthPrestige10Bonus: 4.0
# Sets the estimated base amount of bosses that must be killed to be able to afford a rank up.
baseKillsForRankUp: 100
# Sets the estimated additional amount of bosses that must be killed to be able to rank up, per level.
# The formula is this amount x the level the player is currently at.
additionalKillsForRankUpPerTier: 50
# Sets title sent to players when someone unlocks a prestige rank.
# $player is a placeholder that gets replaced with the player's display name.
prestigeUnlockMessageTitle: $player
# Sets subtitle sent to players when someone unlocks a prestige rank.
# $tier is a placeholder that gets replaced with the player's prestige level.
prestigeUnlockMessageSubtitle: '&2has unlocked $tier&2!'
# Sets the multiplier that will be applied to the spawn chance when players are using the peaceful (commoner) rank.
peacefulModeEliteChanceDecrease: 0.2
# Sets the list of worlds to which guild rank bonuses will not be applied
worldsWithoutAGBonuses: []
# Disables users' ability to switch to peaceful mode for EliteMobs. Peaceful mode lowers level and spawn rates of mobs around that player specifically
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` allows admins to customize different aspects of the AntiExploit system. The AntiExploit system exists to prevent players from using things such as mob grinders to easily farm for coins and loot, and pushes them to do real fights and minidungeons instead of afk clicking their way to the top of the plugin.

This is a critical system to keep on if you don't want people to just afk grind the entire plugin and want to actually have them interact with minidungeons.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the message that shows up when the antiexploit is triggered.
AntiExploit message: '&c[EM AntiExploit] &7Nearby elite won''t drop special loot.'
# Sets if the darkroom antiexploit 1 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 1: true
# Sets if the darkroom antiexploit 2 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 2: true
# Sets if the darkroom antiexploit 3 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 3: true
# Sets if the large darkroom antiexploit 1 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable large darkroom antiexploit 1: true
# Sets if the enderman height antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable enderman height antiexploit: true
# Sets if the mount antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable mount antiexploit: true
# Sets if elite mobs can pick items up
preventItemPickupByMobs: true
# Sets if the ambient damage antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable ambient damage antiexploit: true
# Sets if the honey block antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable honey block antiexploit: true
# Sets the threshold for antiexploit activation. Higher values make it more tolerant. Modifying this is not recommended.
antiExploitThreshold: 10
# Sets if the no path antiexploit is enabled
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contains the config settings for the Combat Tag system. This system is still very far from being complete, but it attempts to manage player behavior once they enter combat.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if the combat tag is enabled.
# When enabled, flying players that engage in combat are set to stop flying.
Enable combat tag: true
# Sets the message sent when the combat tag is activated.
Combat tag message: '&c[EliteMobs] Combat tag activated!'
# Sets if the /ag command will have a timer before teleportation
Enable adventurers guild teleport timer: true
# Sets the action message set while waiting for the teleport timer.
Teleport time left: '&7[EM] Teleporting in &a$time &7seconds...'
# Sets the message sent when players move while waiting for teleportation.
Teleport cancelled: '&7[EM] &cTeleport interrupted!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contains the configuration settings for DiscordSRV. If you want to see how to configure this feature, [click here!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expand Table</b></summary>

```yml
# Documentation can be found here: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contains the configuration settings for the EliteMobs economy.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if the EliteMobs economy is enabled. This means elite coins, the ability to buy and sell gear and the ability to upgrade guild ranks
# If disabled, players will not be able to progress in the plugin!
enableEconomy: true
# Sets the resale item of items, as a % of the original price. 5 is 5%
itemResaleValue: 5.0
# Sets the in-game name of the currency used.
currencyName: Elite Coins
# Sets the plugin to use Vault. THIS IS NOT RECOMMENDED! Read why here: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Sets if elites will drop coins based on their level.
enableCurrencyShower: true
# Sets the multiplier for the currency dropped by elites.
currencyShowerTierMultiplier: 1.0
# Sets the message sent when players pick up elite currency.
chatCurrencyShowerMessage: '&7[EM] You''ve picked up &a$amount $currency_name!'
# Sets the action bar message sent when players pick up elite currency.
actionbarCurrencyShowerMessage: '&7[EM] You''ve picked up &a$amount $currency_name!'
# Send the message players get after looting currency. Useful for tutorial purposes.
adventurersGuildNotificationMessages: '&7[EM] Extra spending money? Try &a/ag !'
# Sets the tax rate for transactions between players.
# Strongly recommended for balance reasons, as high level players can gain up to 6x more currency and try to use other players to bypass prestige currency resets.
playerToPlayerPaymentTaxes: 0.2
# Message sent when sending elite currency to other players.
Economy pay message v2: '&2You have paid &2$amount_sent $currency_name &2to $receiver&2,
  who got $amount_received after taxes!'
# Message sent after players send currency.
Economy currency left message: You now have &2$amount_left $currency_name
# Message received when receiving currency.
Economy money from payment message: You have received &2$amount_received $currency_name
  &ffrom $sender
# Message sent when players try to send an amount of coins they do not have.
Economy payment insufficient currency: '&cYou don''t have enough $currency_name to
  do that!'
# /em balance message
Wallet command message: You have &2$balance $currency_name
# Confirmation message sent when players try to send currency to another player.
Tax confirmation message: '&cSending a payment will cost $percentage% in taxes. &aDo
  &9$command &ato proceed!'
# Message sent when a player buys from a shop.
Shop buy message: '&aYou have bought $item_name &afor $item_value $currency_name!'
# Message sent when a player interacts with a shop.
Shop current balance message: '&aYou have $currency_amount $currency_name.'
# Message sent when players don't have enough currency to purchase an item
Shop insufficient funds message: '&cYou don''t have enough $currency_name!'
# Second part of message sent when players try to purchase an item they can not afford.
Shop item cost message: That item costs &c$item_value $currency_name.
# Message sent upon selling an item to a shop.
Shop sell message: '&aYou have sold $item_name &afor $currency_amount $currency_name!'
# Message sent upon trying to sell an item that does not belong to that player.
Shop sale player items warning: '&cYou can''t sell items that are not currently soulbound
  to you! This includes items from other prestige tiers!'
# Message sent upon trying to sell a non-EliteMobs item
Shop sale instructions: '&cYou can only sell EliteMobs loot here! (Armor / weapons
  dropped from elites showing a value on their lore)'
# Message sent upon selling a batch of elite items.
shopBatchSellItem: '&aYou have sold your items &afor $currency_amount $currency_name!'
lootShowerMaterial:
  # Sets the material type of 1 dropped elite coin.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Sets the custom model ID for 1 dropped elite coin. Used by the resource pack.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_AXE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_BOOTS: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_CHESTPLATE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_LEGGINGS: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_HELMET: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_PICKAXE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_SHOVEL: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_SWORD: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  DIAMOND_HOE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_AXE: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_BOOTS: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_LEGGINGS: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_CHESTPLATE: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_HELMET: 16.0
```

</details>

---

## events.yml

`events.yml` contient les options de configuration globales pour la création d'événements.

_**Remarque :** ce ne sont que les paramètres globaux de base._

Vous pouvez modifier davantage des événements spécifiques dans le dossier `events`.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les événements ne seront diffusés que dans le monde dans lequel les événements se produisent.
Only broadcast event message in event worlds: false
# Définit le temps de pause minimum, en minutes, entre les événements temporisés
actionEventMinimumCooldownMinutes: 240
# Définit si les événements d'action se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Définit si les événements temporisés se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contient tous les paramètres de configuration globaux pour les objets d'élite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
noItemDurabilityMessage: '&8[EliteMobs] $item &4est cassé ! Il ne fonctionnera pas tant qu'il n'est pas réparé !'
# Définit si un butin EliteMobs sera laissé tomber.
# Comprend les pièces d'élite, les objets personnalisés, les objets générés de façon procédurale - tout !
# Non recommandé ! Rend la progression du MMORPG impossible.
doEliteMobsLoot: true
# Définit si le butin généré de façon procédurale aura des couleurs différentes en fonction de la qualité de l'objet.
doMMORPGColorsForItems: true
# Définit si le placement d'objets personnalisés, comme les bannières ou les blocs, est empêché.
# Ceci est recommandé : les objets personnalisés se cassent lorsqu'ils sont placés et ne peuvent pas être récupérés !
preventCustomItemPlacement: true
# Définit le format de l'histoire de tous les objets EliteMobs !
# Les marqueurs de position suivants sont valides :
# $itemLevel - affiche le niveau de l'objet
# $prestigeLevel - affiche le niveau de prestige
# $weaponOrArmorStats - affiche les statistiques de DPS d'élite ou d'armure d'élite, en fonction de l'objet
# $soulbindInfo - affiche à qui, le cas échéant, l'objet est lié à l'âme
# $itemSource - affiche d'où provient l'objet, comme un mob ou une boutique
# $ifLore - fait apparaître une ligne uniquement si l'objet a une histoire personnalisée. S'applique uniquement aux objets personnalisés
# $customLore - affiche l'ensemble de l'histoire personnalisée. S'applique uniquement aux objets personnalisés
# $ifEnchantments - fait apparaître une ligne uniquement si l'objet possède des enchantements
# $enchantments - affiche les enchantements sur l'objet
# $eliteEnchantments - affiche les enchantements d'élite sur l'objet
# $ifCustomEnchantments - affiche les enchantements personnalisés sur l'objet
# $customEnchantments - affiche les enchantements personnalisés sur l'objet
# $ifPotionEffects - affiche uniquement la ligne si l'objet a des effets de potion
# $potionEffects - affiche les effets de potion sur l'objet
# $loreResaleValue - affiche la valeur de l'objet. Pourrait afficher le prix d'achat ou de vente en fonction de l'endroit où il est visualisé
# Important : plusieurs des marqueurs de position peuvent être davantage personnalisés par les paramètres de configuration ci-dessous
itemLoreStructureV2:
- §7§m§l---------§7<§lInfo. équipement§7>§m§l---------
- '§7Niveau de l'objet : §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lHistoire§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantements§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEnchants persos.§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffets§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Définit la tradition de la source de la boutique pour les achats en magasin
shopSourceItemLores: '&7Acheté dans une boutique'
# Définit la tradition de la source de l'objet pour les objets pillés sur les boss
mobSourceItemLores: '&7Pillé sur $mob'
# Définit la tradition de valeur de l'objet
loreWorths: '&7Vaut $worth $currencyName'
# Définit la tradition de la valeur de revente de l'objet
loreResaleValues: '&7Se vend pour $resale $currencyName'
# Définit la possibilité de base que tout objet d'élite tombe des mobs d'élite
flatDropRateV3: 0.2
# Définit la possibilité de base que tout objet d'élite tombe des boss régionaux
regionalBossNonUniqueDropRate: 0.05
# Définit si les boss régionaux peuvent laisser tomber du butin vanilla
regionalBossesDropVanillaLoot: false
# Définit la quantité dont la possibilité qu'un objet d'élite tombe augmente en fonction du niveau du mob.
# Le niveau du mob est multiplié par cette valeur et est ajouté à la possibilité de base.
# Il n'est plus recommandé d'avoir une valeur supérieure à 0,0 !
levelIncreaseDropRateV2: 0.0
# Définit la possibilité pondérée qu'un objet généré de façon procédurale tombe.
# Ce système utilise des probabilités pondérées ! Cherchez cela sur Google si vous ne savez pas ce que c'est.
proceduralItemDropWeight: 90.0
# Définit la possibilité relative qu'un objet pondéré tombe.
# Les objets pondérés sont des objets personnalisés qui n'ont pas de poids dynamique, comme les amulettes.
weighedItemDropWeight: 1.0
# Définit la possibilité relative qu'un objet fixe tombe. Ce sont des objets personnalisés qui ne s'adaptent pas.
fixedItemDropWeight: 10.0
# Définit la possibilité relative qu'un objet limité tombe. Ce sont des objets personnalisés qui s'adaptent jusqu'à un niveau spécifique
limitedItemDropWeight: 3.0
# Définit la possibilité relative qu'un objet évolutif tombe. Ce sont des objets personnalisés qui peuvent s'adapter à n'importe quel niveau et sont les plus courants dans le plugin.
scalableItemDropWeight: 6.0
# Définit le multiplicateur pour le butin vanilla du mob, en fonction du niveau du mob.
defaultLootMultiplier: 0.0
# Définit le niveau maximum pour le multiplicateur de butin par défaut.
levelCapForDefaultLootMultiplier: 200
# Définit le multiplicateur d'expérience de Minecraft vanilla que laisse tomber le boss, en fonction du niveau du boss.
defaultExperienceMultiplier: 1.0
# Définit le niveau maximum pour le butin qui sera laissé tomber par EliteMobs. Il est fortement recommandé de le laisser à 200.
maximumItemLevel: 200
# Définit si les enchantements d'élite seront utilisés.
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite obtiennent des niveaux d'enchantement qui superent les limites de vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté de 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Ceci est fait pour que le JcJ et le combat vanilla ne soient pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans l'histoire de l'objet.
eliteEnchantmentLoreStrings: Élite
# Définit si EliteMobs considérera les houes comme des armes valides pour les calculs de dégâts.
useHoesAsWeapons: false
# Définit si EliteMobs fera apparaître des particules spéciales sur les objets qui tombent de haute qualité.
enableRareItemParticleEffects: true
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion s'applique en cas de frappe à l'entité qui reçoit le coup.
potionEffectOnHitTargetLore: '&4⚔☠'
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion s'applique en cas de frappe au joueur qui frappe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion continuera de se réappliquer tant que le joueur le manie.
potionEffectContinuousLore: '&6⟲'
# Définit les caractères précédés d'enchantements d'élite dans l'histoire des objets.
eliteEnchantmentLoreColor: '&9◇'
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
vanillaEnchantmentLoreColor: '&7◇'
# Définit les caractères précédés d'enchantements personnalisés dans l'histoire des objets.
customEnchantmentColor: '&3◇'
# Définit les caractères précédés d'effets de potion dans l'histoire des objets.
potionEffectLoreColor: '&5◇'
# Définit le texte qui apparaîtra sur l'objet si l'objet n'est pas lié à l'âme.
noSoulbindLore: '&7Non lié à l'âme !'
# Définit si un objet d'élite peut être enchanté par des moyens vanilla. Ce n'est pas recommandé car EliteMobs possède son propre système d'enchantements personnalisés avec son propre équilibre !
preventEliteItemEnchantment: true
# Définit si les objets d'élite peuvent être désenchantés par des moyens vanilla.
preventEliteItemDisenchantment: true
# Définit le message qui apparaît pour les joueurs lorsqu'ils tentent de désenchanter un objet et que cela n'est pas autorisé.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Impossible de désenchanter des objets d'élite !'
# Définit si les objets d'élite pourront être améliorés du diamant au netherite par des moyens vanilla. Non recommandé !
preventEliteItemDiamondToNetheriteUpgrade: true
# Définit si les objets d'élite ne perdront de la durabilité qu'en cas de mort.
# Il s'agit d'un système important pour EliteMobs, et il est fortement recommandé car les combats de haut niveau sont presque impossibles sans lui !
eliteItemsDurabilityLossOnlyOnDeath: true
# Définit le multiplicateur de perte de durabilité pour les objets d'élite s'il est configuré pour perdre de la durabilité en cas de mort.
# Les valeurs entre 0,0 et 1,0 diminuent la perte de durabilité et les valeurs supérieures à 1,0 l'augmentent.
# Exemple : 0,5 inflige 50 % de la perte de durabilité, 2,0 inflige 200 % de la perte de durabilité.
eliteItemsDurabilityLossMultiplier: 1.0
# Définit le message qui apparaît lorsque la mise au rebut d'objets réussit.
scrapSucceededMessageV2: '&8[EliteMobs] &2Mise au rebut réussie $amount fois !'
# Définit le message qui apparaît lorsque la mise au rebut d'objets échoue.
scrapFailedMessageV2: '&8[EliteMobs] &cLa mise au rebut a échoué $amount fois !'
# Définit si le butin d'élite doit être placé directement dans les inventaires des joueurs.
putLootDirectlyIntoPlayerInventory: false
# Définit la différence de niveau maximale que les joueurs peuvent avoir avant qu'ils ne puissent plus piller des objets qui sont d'un niveau trop bas.
# Ceci est calculé en fonction du niveau moyen du butin que porte le joueur.
# Par exemple, si la valeur est définie sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas cultiver des boss de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêLorsque vous utilisez l'héritage de cible, il est important d'examiner attentivement le _script parent_ pour vous assurer que les données correctes sont transmises.

#### INHERIT_SCRIPT_TARGET

Lorsque vous utilisez `INHERIT_SCRIPT_TARGET`, les cibles du _script parent_ seront transmises au script hérité. Cela a quelques mises en garde :

- Lors de la transmission de **cibles d'entité**, il est possible d'exécuter des actions qui nécessitent des emplacements (tels que la génération de particules), car l'emplacement des entités sera utilisé. Il est bien sûr également possible d'utiliser des actions qui nécessitent des entités.

- Lors de la transmission d'**emplacements cibles**, il est uniquement possible d'utiliser des emplacements. **La seule façon d'obtenir une entité à partir d'emplacements est de créer une zone à cet emplacement et de rechercher des entités.** Ainsi, bien qu'il ne soit pas impossible de transmettre un emplacement, puis d'obtenir des entités, cela nécessitera un peu de travail supplémentaire.

#### Héritage des zones

Lorsque vous utilisez `INHERIT_SCRIPT_ZONE_FULL` ou `INHERIT_SCRIPT_ZONE_BORDER`, il est impératif que le _script parent_ définisse une zone, sinon le _script hérité_ ne pourra pas s'exécuter correctement.

De plus, les zones peuvent éventuellement être [suivies]($language$/elitemobs/elitescript_targets.md&section=zone-track). Cela sera également transmis avec la zone.

- Une zone **non suivie** créera toujours une zone à l'endroit défini par le _script hérité_. Cela signifie que les paramètres de zone seront utilisés par les actions dans les _scripts hérités_ pour créer de toutes nouvelles zones chaque fois qu'une action s'exécute, et que l'emplacement de ces zones sera défini par l'action.

- Une zone **suivie** peut transmettre le même emplacement de zone exact à tous les _scripts hérités_ si le _script parent_ est configuré pour cibler `ZONE_FULL` ou `ZONE_BORDER`. Cela signifie que chaque script agira sur les mêmes emplacements.
