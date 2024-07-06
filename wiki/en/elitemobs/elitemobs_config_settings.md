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
  # Sets the worth of this material for the elitemobs currency system.
  IRON_PICKAXE: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_SHOVEL: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_HOE: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  IRON_SWORD: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  SHIELD: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  BOW: 16.0
  # Sets the worth of this material for the elitemobs currency system.
  CHAINMAIL_BOOTS: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  CHAINMAIL_LEGGINGS: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  CHAINMAIL_CHESTPLATE: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  CHAINMAIL_HELMET: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  STONE_SWORD: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  STONE_AXE: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  STONE_PICKAXE: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  STONE_SHOVEL: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  STONE_HOE: 15.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_AXE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_BOOTS: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_LEGGINGS: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_CHESTPLATE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_HELMET: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_SWORD: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_SHOVEL: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_PICKAXE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_HOE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  GOLDEN_APPLE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  LEATHER_BOOTS: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  LEATHER_LEGGINGS: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  LEATHER_CHESTPLATE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  LEATHER_HELMET: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  WOODEN_SWORD: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  WOODEN_AXE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  WOODEN_HOE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  WOODEN_PICKAXE: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  TRIDENT: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  ELYTRA: 17.0
  # Sets the worth of this material for the elitemobs currency system.
  TURTLE_HELMET: 13.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_AXE: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_PICKAXE: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_SHOVEL: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_HOE: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_SWORD: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_HELMET: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_CHESTPLATE: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_LEGGINGS: 18.0
  # Sets the worth of this material for the elitemobs currency system.
  NETHERITE_BOOTS: 18.0
  # Sets the default material worth for items not specifically defined.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contains the configuration options for events. 

_**Note: these are just the very basic global settings.**_ 

You can further modify specific events in the `events` folder.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if events will only broadcasted in the world the events happens in.
Only broadcast event message in event worlds: false
# Sets the minimum cooldown, in minutes, between timed events
actionEventMinimumCooldownMinutes: 240
# Sets if action events will happen.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Sets if timed events will happen.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contains the global settings for Elite items.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the characters prefixed to vanilla enchantments in item lore.
noItemDurabilityMessage: '&8[EliteMobs] $item &4is broken! It won''t work until repaired!'
# Sets if any EliteMobs loot will drop.
# Includes Elite Coins, Custom Items, Procedurally Generate Items - everything!
# Not recommended, makes mmorpg progression impossible.
doEliteMobsLoot: true
# Sets if procedurally generated loot will have different colors based on the quality of the item.
doMMORPGColorsForItems: true
# Sets if the placement of custom items, like banners or blocks, is prevented.
# This is recommended - custom items break when they are placed and can not be recovered!
preventCustomItemPlacement: true
# Sets the format for the lore of custom all EliteMobs items!
# The following are valid placeholders:
# $itemLevel - shows the item level
# $prestigeLevel - shows the prestige level
# $weaponOrArmorStats - shows the elite DPS or elite armor stats, depending on the item
# $soulbindInfo - shows who, if anyone, the item is soulbound to
# $itemSource - shows where the item came from, like a mob or a shop
# $ifLore - makes a line only appear if the item has custom lore. Only applies for custom items
# $customLore - shows the entirety of the custom lore. Only applies for custom items
# $ifEnchantments - makes a line only appear if the item has any enchantments
# $enchantments - shows the enchantments on the item
# $eliteEnchantments - shows the elite enchantments on the item
# $ifCustomEnchantments - shows the custom enchantments on the item
# $customEnchantments - shows the custom enchantments on the item
# $ifPotionEffects - only shows the line if the item has potion effects
# $potionEffects - shows the potion effects on the item
# $loreResaleValue - shows the value of the item. Might show the purchase or sell price depending on where it is viewed
# Important: Several of the placeholders can be further customized by the configuration settings further below
itemLoreStructureV2:
- §7§m§l---------§7<§lEquip Info§7>§m§l---------
- '§7Item level: §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lLore§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantments§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lCustom Enchants§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffects§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Sets the shop source lore for store purchased
shopSourceItemLores: '&7Purchased from a store'
# Sets the shop source lore for items looted from bosses
mobSourceItemLores: '&7Looted from $mob'
# Sets the item worth lore
loreWorths: '&7Worth $worth $currencyName'
# Sets the item resale value lore
loreResaleValues: '&7Sells for $resale $currencyName'
# Sets the base chance for any elite item to drop from elite mobs
flatDropRateV3: 0.2
# Sets the base chance for any elite item to drop from regional bosses
regionalBossNonUniqueDropRate: 0.05
# Sets if the regional bosses can drop vanilla loot
regionalBossesDropVanillaLoot: false
# Sets how much the chance of an elite item dropping increases based on the level of the boss.
# The level of the boss is multiplied by this value and added to the base chance.
# It is no longer recommended to have this above 0.0!
levelIncreaseDropRateV2: 0.0
# Sets the weighed chance of a procedurally generated item dropping.
# This system uses weighted probabilities! Look that up on google if you don't know what that is.
proceduralItemDropWeight: 90.0
# Sets the relative chance of a weighed item dropping.
# Weighed items are custom items that don't have a dynamic weight, like charms.
weighedItemDropWeight: 1.0
# Sets the relative chance of a fixed item dropping. These are custom items that do not scale.
fixedItemDropWeight: 10.0
# Sets the relative chance of a limited item dropping. These are custom items that scale up to a specific level
limitedItemDropWeight: 3.0
# Sets the relative chance of a scalable item dropping. These are custom items that can scale to any level, and are the most common in the plugin.
scalableItemDropWeight: 6.0
# Sets the multiplier for the vanilla loot of the mob, based on the level of the mob.
defaultLootMultiplier: 0.0
# Sets the maximum level for the default loot multiplier.
levelCapForDefaultLootMultiplier: 200
# Sets the vanilla Minecraft experience dropped multiplier for the boss, based on the level of the boss.
defaultExperienceMultiplier: 1.0
# Sets the level of the maximum loot that will be dropped by EliteMobs. Strongly recommended to leave it at 200.
maximumItemLevel: 200
# Sets if elite enchantments will be used. 
# Elite enchantments replace vanilla enchantments when elite items get enchantment levels that go beyond vanilla limits.
# Example: if an elite sword is supposed to have sharpness 10, since the Minecraft limit is level 5, it will have sharpness 5 and elite sharpness 5.
# Elite sharpness only affects mobs spawned by EliteMobs. This is done so PVP and vanilla combat don't become unbalanced.
useEliteEnchantments: true
# Sets the display name that will be used for the elite enchantments on item lore.
eliteEnchantmentLoreStrings: Elite
# Sets if EliteMobs will see hoes as valid weapons for the damage calculations.
useHoesAsWeapons: false
# Sets if EliteMobs will spawn special particles over dropped items of high quality.
enableRareItemParticleEffects: true
# Sets the symbols that will be used in item lore to show that a potion effect applies on hit to the entity that gets hit.
potionEffectOnHitTargetLore: '&4⚔☠'
# Sets the symbols that will be used in item lore to show that a potion effect applies on hit to the player doing the hitting.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Sets the symbols that will be used in item lore to show that a potion effect will keep reapplying for as long as the player wields it.
potionEffectContinuousLore: '&6⟲'
# Sets the characters prefixed to elite enchantments in item lore.
eliteEnchantmentLoreColor: '&9◇'
# Sets the characters prefixed to vanilla enchantments in item lore.
vanillaEnchantmentLoreColor: '&7◇'
# Sets the characters prefixed to custom enchantments in item lore.
customEnchantmentColor: '&3◇'
# Sets the characters prefixed to potion effects in item lore.
potionEffectLoreColor: '&5◇'
# Sets the text that will appear on the item if the item is not soulbound.
noSoulbindLore: '&7Not Soulbound!'
# Sets if elite item can be enchanted by vanilla means. This is not recommended as EliteMobs has its own custom enchantments system  with its own balance!
preventEliteItemEnchantment: true
# Sets if elite items can be disenchanted by vanilla means.
preventEliteItemDisenchantment: true
# Sets the message that appears for players when they attempt to disenchant an item and that is not allowed.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Can''t disenchant Elite Items!'
# Sets whether elite items can be upgraded from diamond to netherite by vanilla means. Not recommended!
preventEliteItemDiamondToNetheriteUpgrade: true
# Sets whether elite items will only lose durability on death.
# This is an important system for EliteMobs, and it is strongly recommended as high level fights are nearly impossible without it!
eliteItemsDurabilityLossOnlyOnDeath: true
# Sets the durability loss multiplier for elite items if it is set to lose durability on death.
# Values between 0.0 and 1.0 lower the durability loss and values above 1.0 increase it.
# Example: 0.5 deals 50% of the durability loss, 2.0 deals 200% of the durability loss.
eliteItemsDurabilityLossMultiplier: 1.0
# Sets the message that appears when item scrapping is successful.
scrapSucceededMessageV2: '&8[EliteMobs] &2Scrapping succeeded $amount times!'
# Sets message that appears when item scrapping fails.
scrapFailedMessageV2: '&8[EliteMobs] &cScrapping failed $amount times!'
# Sets if elite loot should be placed directly into players' inventories.
putLootDirectlyIntoPlayerInventory: false
# Sets maximum level difference players can have before they can no longer loot items that are too low level.
# This is calculated based on the average level of the loot the player is wearing.
# As an example, if it is set to 10 and a player has level 50 gear, they will not be able to farm level 39 bosses.
lootLevelDifferenceLockout: 10
# Sets if EliteMobs will prevent Elite Items from breaking when using the durability loss on death system.
# Players will not be able to use items with no durability left anyway, this is simply to prevent the accidental loss of high level but low durability items.
preventEliteItemsFromBreaking: true
# Sets the minimum level, +7, of bosses that can procedurally generated drop diamond gear in EliteMobs.
# There is no procedurally generated netherite gear in EliteMobs, only custom loot.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Sets the message show in chat when successfully rolling for loot through the /em simloot <level> <times> command.
simlootMessageSuccess: '&8[EliteMobs] &2Rolled for loot and got $itemName &2!'
# Sets the message show in chat when failing to roll for loot through the /em simloot <level> <times> command.
simlootMessageFailure: '&8[EliteMobs] &cRolled for loot and got nothing!'
# Sets the message that players get when elite loot is deposited directly into their inventories.
directDropCustomLootMessage: '&8[EliteMobs] &2Obtained $itemName &2!'
# Sets the message that players get when vanilla loot is deposited directly into their inventories.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObtained $itemName &a!'
# Sets the message that players get when elite coins are deposited directly into their inventories.
directDropCoinMessage: '&8[EliteMobs] &aObtained &2$amount $currencyName &a!'
# Sets if EliteMobs will hide vanilla Minecraft attributes.
hideItemAttributes: true
# Sets the weapon-specific lore entry on an elite item. The $EDPS placeholder gets replaced with the elite DPS (damage per second) of the weapon.
weaponEntry: '&7Elite DPS: &2$EDPS'
# Sets the armor-specific lore entry on an elite item. The $EDEF placeholder gets replaced with the elite DEF (defense) of the weapon.
armorEntry: '&7Elite Armor: &2$EDEF'
# Sets the message sent when a played kills a boss but the gear level is too different from the boss level to get coins
levelRangeTooDifferent: '&8EM] &4Your gear is level $playerLevel and the boss is level
  $bossLevel, level difference is too high to get coins!'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contains all config options related to the custom combat system and most config options generally related to how Elite Mobs work.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if naturally spawned elites will spawn. Note: event mobs like the zombie king are not naturally spawned elites! You will have to disable events if you want to disable event bosses.
doNaturalEliteMobSpawning: true
# Sets if spawns spawned from mob spawners can be converted to elites. Not recommended!
doSpawnersSpawnEliteMobs: false
# Sets the percentage of naturally spawned mobs that get converted to elite mobs.
eliteMobsSpawnPercentage: 0.05
# Sets the super mob range to scan for super mob stacking
superMobStackRange: 15
# Sets the maximum level elites can spawn at.
# Note: elite mob level is based on what armor and weapons players are wearing, and armor only scales up to level 200.
naturalEliteMobsLevelCap: 250
# Sets if elites will wear armor based on their level. This is for visual purposes only and does not affect combat.
doElitesWearArmor: true
# Sets if elites will wear helmets based on their level. This will prevent them from easily burning away during the daytime.
doElitesWearHelmets: true
# Sets if elites will have visual trails around them warning players about what players they have.
doNaturalEliteMobVisualEffects: true
# Sets if elites spawned from spawners will do visual effects.
doSpawnerEliteMobVisualEffects: false
# Sets if some powers will do the warning phase of the power. This is very important as warning phases usually mean the power can be dodged, and the visual lets players know where to dodge to.
doPowerBuildupVisualEffects: true
# Sets if custom death messages will be used when players die from elites.
doCustomEliteMobsDeathMessages: true
# Sets if EliteMobs will show health indicators for elites.
doDisplayMobHealthOnHit: true
# Sets if EliteMobs will show damage indicators for damage done to elites.
doDisplayMobDamageOnHit: true
# Sets if the level of elites will increased based on the distance from spawn.
# This is a value added on top of their normal level, meaning that if a player is wearing level 100 gear near spawn and the boss has +1 level due from the distanced from spawn, the boss will spawn at level 101.
# This option is generally not recommended, especially if you have a random tp system on your server.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Sets the distance between level increments for distance-based level increases.
distanceBetweenIncrements: 100.0
# Sets how many levels increase at each distance increment for distance-based level increases.
levelIncreaseAtIncrements: 1.0
# Sets if the powers of elites will be hidden until they enter combat. This is recommended for performance reasons.
hideEliteMobPowersUntilAggro: true
# Sets the multiplier for the damage dealt to all bosses spawned by EliteMobs, except those using the normalized damage system (regional dungeon bosses). Higher values increase the damage dealt, making bosses easier to kill.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Sets the multiplier for the damage dealt to players by elites. Higher values increase the amount of damage dealt by bosses, except those using the normalized damage system (regional dungeon bosses), making bosses hit harder.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Sets if special bosses can be tracked.
showCustomBossLocation: true
# Sets the message sent to players to track a boss location.
bossLocationMessage: '&7[EM] &2[Click to track!]'
# Sets the commands that run when an elite dies. Valid placeholders are:
# $level for the level of the boss
# $name for the name of the boss
# $players will make the command run for each player that participated in the kill. As an example, if Bob and Steve killed a boss, 'broadcast $players killed the boss!' will run 'bob killed the boss' and 'steve killed the boss!'
commandsOnEliteMobDeath: []
# Sets teh message sent to players that participate in big boss kills.
bossKillParticipationMessage: '&eYour damage: &2$playerDamage'
# Sets if bosses regenerate health when they go out of combat. Strongly recommended.
regenerateCustomBossHealthOnCombatEnd: true
# Sets the message sent to players that are trying to track bosses currently in a different world.
defaultOtherWorldBossLocationMessage: '$name: In different world!'
# Sets the prefix added to damage indicators when players hit a boss with something that boss is weak against.
weakTextColor: '&9'
# Sets the prefix added to damage indicators when players hit a boss with something that boss is strong against.
resistTextColor: '&c'
# Sets the message that appears when players hit the boss with something that boss is weak against.
weakText: '&9&lWeak!'
# Sets the message that appears when players hit the boss with something that boss is strong against.
resistText: '&c&lResist!'
# Sets if visuals will be used to show that a boss is weak against an attack.
doWeakEffect: true
# Sets if visuals will be used to show that a boss is strong against an attack.
doResistEffect: true
# Sets the multiplier for the damage dealt to bosses using the normalized damage system (regional dungeon bosses). Higher values increase the damage dealt, making bosses easier to kill.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Sets the multiplier for the damage dealt to players by bosses using the normalized damage system (regional dungeon bosses). Higher values increase the amount of damage dealt by bosses, making bosses hit harder.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Sets the baseline damage for custom bosses using the normalized damage (usually regional bosses).
normalizedRegionalBossBaselineDamageV2: 3.0
# Sets the baseline health for custom bosses using the normalized health (usually regional bosses).
normalizedRegionalBossBaselineHealthV3: 4.0
# Sets if regional bosses will used the normalized combat system.
# This is very strongly recommended, and premade content will not be balanced properly if modified.
normalizeRegionalBosses: true
# Sets the message that appears when a boss heals from going out of combat.
fullHealMessage: '&2FULL HEAL!'
# Sets the multipliers applied to attacks bosses are strong and weak against.
strengthAndWeaknessDamageMultipliers: 2.0
# Sets the multiplier applied to damage reduction from the resistance potion effect for players.
resistanceDamageMultiplier: 1.0
# Sets the multiplier applied to damage reduction when a player is holding up a shield for melee attacks (powers excluded).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contains all the configuration options for configuring procedurally generated items.

<details>

<summary><b>Expand Table</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: Sword
  bowName: Bow
  pickaxe: Pickaxe
  spade: Spade
  hoe: Hoe
  axe: Axe
  helmet: Helmet
  chestplate: Chestplate
  leggings: Leggings
  boots: Boots
  shears: Shears
  fishingRod: Fishing Rod
  shield: Shield
  trident: Trident
  crossbow: Crossbow
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Dawn
...
adjectives:
- Adorable
- Beautiful
...
verbs:
- Slashing
- Cutting
...
verb-ers (noun):
- World Breaker
- World Shatterer
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>

---

## ValidWorlds.yml

`ValidWorlds.yml` contains the list of worlds that EliteMobs has detected, as well as options to customize EliteMobs features on them.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the list of zone-based worlds.
# THE ZONE-BASED GAME MODE IS OUTDATED AND WILL SOON BE REMOVED!
zoneBasedWorlds: []
# Sets the list of nightmare mode worlds.
# Nightmare mode worlds are a game mode where days are shorter and players can not sleep.
# Nightmare worlds also have higher amounts of elite spawns.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contains the default messages and settings for Arenas that you can modify.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Message that appears when not enough players are present to start an arena.
notEnoughPlayersMessage: '&8[EliteMobs] &cYou need at least $amount to start the match!'
# Title that appears when an arena is starting.
startingMessage: '&2Starting!'
# Subtitle that appears when an arena is starting.
startingSubtitle: '&2in $count...'
# Message that appears when an arena is full.
arenaFullMessage: '&4[EliteMobs] &cArena is full! You can spectate instead while you
  wait for it to finish!'
# Message that appears when a player attempts to join an active arena.
arenasOngoingMessage: '&4[EliteMobs] &cCan''t join the arena now - a match is currently
  happening! You can spectate instead while you wait for it to finish!'
# Message that appears to remind players how to start an arena after joining as a player.
instanceStartHintMessage: '&2[EliteMobs] &aYou can start the instance by doing &2/em
  start'
# Message that appears to remind players how to leave an arena.
instanceQuitHintMessage: '&4[EliteMobs] &cYou can leave the instance by doing &4/em
  quit'
# Message that appears when players join an arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &aYou can start the arena by doing &2/em start\
  \ &aif there are at least &2$count &aplayers in it! \nYou can leave the arena by\
  \ doing &c/em quit"
# Message that appears to remind players how to leave an arena after joining as a spectator.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aYou can leave the arena at any time using
  &2/em quit'
# Title message that appears when a wave is starting.
waveTitle: '&aWave &2$wave'
# Subtitle message that appears when a wave is starting.
waveSubtitle: ''
# Title that appears when an arena is completed.
victoryTitle: '&2Victory!'
# Subtitle that appears when an arena is completed.
victorySubtitle: '&aCompleted &2$wave &awaves!'
# Title that appears when players fail an arena.
defeatTitle: '&4Defeat!'
# Subitle that appears when players fail an arena.
defeatSubtitle: '&cReached wave &4$wave&c!'
# Message broadcasted when players beat an arena.
victoryBroadcast: Arena $arenaName was conquered by $players!
# Title that appears when a player joins an arena.
joinPlayerTitle: '&aStart with &2/em start &a!'
# Subtitle that appears when a player joins an arena.
joinPlayerSubtitle: '&cLeave with &4/em quit &c!'
# Title that appears when a spectator joins an arena.
joinSpectatorTitle: '&aNow spectating!'
# Subtitle that appears when a spectator joins an arena.
joinSpectatorSubtitle: '&cLeave with &4/em quit &c!'
# Sets the message sent to players if they do not have permission to enter an arena.
noArenaPermissionMessage: '[EliteMobs] You don''t have the permission to enter this
  arena!'
```

</details>

---

## Database.yml

`Database.yml` Includes settings for how you want EM to handle databases.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets whether MySQL will be used. By default EliteMobs uses SQLite. If you wish to use MySQL you will need a valid MySQL configuration.
useMySQL: false
# The host of your MySQL database
mysqlHost: localhost
# The port of your MySQL database
mysqlPort: '3306'
# The name of the database
mysqlDatabaseName: elitemobs
# The username for MySQl
mysqlUsername: your_username_mysql_here
# The password for your MysSQL database
mysqlPassword: your_mysql_password_here
# Whether to use SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Includes settings that let you adjust messages that appear in dungeons and other settings like damage multipliers for applied effects.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the damage multiplier for poison damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
poisonDamageMultiplier: 0.5
# Sets the damage multiplier for fire damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
fireDamageMultiplier: 0.5
# Sets the damage multiplier for wither damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
witherDamageMultiplier: 0.5
# Sets if PvP will be allowed in dungeons
friendlyFireInDungeons: false
# Sets the text that appears over resurrection banners in dungeons
dungeonRezInstructions: '&aPunch to rez!'
# Sets the text that shows how many lives players have left in a dungeon! Placeholders:
# $amount - the amount of lives left
dungeonLivesLeftText: '&c$amount lives left!'
# Sets the text for joining a dungeon as a player! Placeholders:
# $dungeonName - the name of the dungeon
joinDungeonAsPlayerText: '&fJoin $dungeonName as a player!'
# Sets the text for joining a dungeon as a spectator! Placeholders:
# $dungeonName - the name of the dungeon
joinDungeonAsSpectatorText: '&fJoin $dungeonName as a spectator!'
# Sets the title that will show up in the item description of instanced dungeon menus
# $difficulty is the placeholder for the difficulty name in the configuration file of the dungeon
instancedDungeonTitle: Start $difficulty difficulty dungeon!
# Sets the description that will show up in the item description of instanced dungeon menus
# $dungeonName is the placeholder for the dungeon name in the configuration file of the dungeon
instancedDungeonDescription:
- '&fCreate a new instance of the dungeon'
- $dungeonName &ffor yourself and maybe
- '&fsome friends!'
# Sets is spectating instanced content will be available.
allowSpectatorsInInstancedContent: true
# Sets the message that appears when an instanced dungeon is completed
instancedDungeonCompleteMessage: '[EliteMobs] Dungeon completed! It will self-destruct
  in 2 minutes!'
# Sets the message that appears when an instanced dungeon closing
instancedDungeonClosingInstanceMessage: '[EliteMobs] Closing instance!'
```

</details>

---

## Quests.yml

`Quests.yml` Includes settings for quests and what messages are displayed.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if quests have to be returned to quest givers to complete the quest.
requireQuestTurnIn: true
# Sets the message sent when a quest is accepted.
questJoinMessage: '&aYou have accepted the quest $questName &a!'
# Sets the message sent when a quest is abandoned.
questLeaveMessage: '&cYou have abandoned the quest $questName &c!'
# Sets message sent when a quest is completed.
questCompleteMessage: '&2You completed the quest $questName &2!'
# Sets the message sent when a player tried to abandon a quest when none are active.
leaveWhenNoActiveQuestsExist: '&cYou don''t currently have an active quest!'
# Sets the confirmation message sent when players try to leave a quest.
questLeaveConfirmationMessage: '&cAre you sure you want to abandon your current quest?
  Do &a/em confirm &c to confirm your choice!'
# Sets if some of the messages related to quests will use titles instead of chat messages.
useQuestAcceptTitles: true
# Sets the title sent when a players starts a quest.
questStartTitle: '&aQuest Accepted!'
# Sets the subtitle sent when a players starts a quest.
questStartSubtitle: $questName
# Sets if titles will be sent when players complete a quest.
useQuestCompleteTitles: true
# Sets the title sent when a player completes a quest.
questCompleteTitle: '&2Quest Completed!'
# Sets the subtitle sent when a player completes a quest.
questCompleteSubtitle: $questName
# Sets if titles are sent when players leave quests..
useQuestLeaveTitles: true
# Sets the title sent when a player leaves a quest.
questLeaveTitle: '&cQuest Abandoned!'
# Sets the subtitle sent when a player leaves a quest.
questLeaveSubtitle: $questName
# Sets if messages are sent on chat reporting quest objective progression.
doQuestChatProgression: true
# Sets the color codes for completed objectives.
ongoingQuestColorCode: '&2'
# Sets the formatting for progression messages of kill quests.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Kill $name:$color$current&0/$color$target'
# Sets the formatting for progression messages of fetch quests.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Get $name:$color$current&0/$color$target'
# Sets the formatting for progression messages of dialog quests.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Talk to $name:$color$current&0/$color$target'
# Sets the maximum amount of accepted quests a player can have.
maximumActiveQuests: 10
# Sets the message sent to players when trying to accept an amount of quests that exceed the active quest cap.
questCapMessage: '&8[EliteMobs] &cYou have reached the maximum amount of active quests
  (10)! &4Abandon or complete at least one active quest if you want to get more quests!'
# Sets if scoreboards messages will be used for quests.
useQuestScoreboards: true
# Sets the formatting for scoreboard progression messages of kill quests.
killQuestScoreboardProgressionMessage: '&c➤Kill $name:$color$current&0/$color$target'
# Sets the formatting for scoreboard progression message of fetch quests.
fetchQuestScoreboardProgressionMessage: '&c➤Get $name:$color$current&0/$color$target'
# Sets the formatting for scoreboard progression messages of dialog quests.
dialogQuestScoreboardProgressionMessage: '&c➤Talk to $name:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# Sets the message sent to players to activate quest tracking.
chatTrackMessage: '&8[EliteMobs]&2 Click here to track your quest!'
# Sets the hover message of the quest tracking message.
chatTrackHover: '&2Click to track!'
# Sets the command sent when clicking on the tracking message. You really should not modify this.
chatTrackCommand: /elitemobs quest track $questID
# Sets the message sent to players when activating quest tracking.
chatTrackingMessage: '&8[EliteMobs]&9 You are now tracking a quest!'
# Sets the hover message of the quest tracking enabled message.
chatTrackingHover: '&2Click to untrack/track! /em -> Quests to track a different quest!'
# Sets the command sent when click on the quest tracking activation message. You really should not modify this.
chatTrackingCommand: /elitemobs quest track $questID
# Sets if quests are automatically tracked when accepted.
autoTrackQuestsOnAccept: true
# Sets the message that appears when the destination of the quest could not be found.
noQuestDestinationFound: '[EM] No quest destination found!'
# Sets the message that appears when the quest target is in a different world.
questDestinationInOtherWorld: '[EM] Go to world $world!'
# Sets the message sent to players when trying to accept a quest they have already completed.
questAlreadyCompletedMessage: '&8[EliteMobs] &cYou already completed this quest!'
# Sets the message sent to players when trying to accept a quest they do not have the permission for.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cThis NPC has some quest(s) you
  can''t accept yet!'
# Sets the message sent to players trying to get a quest for which they do not have the correct guild rank activated.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cYou can''t take these quests with your
  current guild rank! Increase your guild rank to accept these quests.'
# Sets the formatting for the quest turn-in message.
questTurnInObjective: '&a2Talk to $npcName'
# Sets the maximum amount of characters inventory-based menus for quests will have before breaking the line.
horizontalCharacterLimitBedrockMenu: 30
# Sets the maximum amount of characters per item entry in inventory-based menus for quests before creating another item to continue the entry.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Includes settings related to the EliteMobs resource pack.

<details>

<summary><b>Expand Table</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] The use of the resource pack is highly recommended!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Includes settings that define which sounds should be played when certain EliteMobs interactions are performed. The sound files are stored in the resource pack.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the sound that will play when a treasure chest opens
treasureChestOpenSound: elitemobs:treasure_chest.open
# Sets the sound that will play when a player ranks up at the guild
guildRankUpSound: elitemobs:guild.rankup
# Sets the sound that will play when a player prestiges at the guild
guildPrestigeSound: elitemobs:guild.prestige
# Sets the sound that will play when a player progresses a quest
questProgressionSound: elitemobs:quest.progression
# Sets the sound that will play when a player completes a quest
questCompleteSound: elitemobs:quest.completion
# Sets the sound that will play when a player abandons a quest
questAbandonSound: elitemobs:quest.abandon
# Sets the sound that will play when a player accepts a quest
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Includes settings for the EliteMobs wormhole teleports.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the message that appears when a teleport is used for a dungeon that is not installed.
dungeonNotInstalledMessage: '&8[EliteMobs] &cDungeon $dungeonID &cis not installed!
  This teleport will not work.'
# Sets the message that appears when a wormhole is used for a dungeon that is not installed.
defaultPortalMissingMessage: '&8[EliteMobs] &cThis portal doesn''t seem to lead anywhere!'
# Sets if the reduced particles mode for wormholes is used. This is especially recommended if you are allowing bedrock clients in.
reducedParticlesMode: true
# Sets if wormholes don't use particles at all. Not recommended, but might be necessary for really bad bedrock clients.
noParticlesMode: false
# Sets the message that is sent when a player tries to use a wormhole but does not have enough currency to use it.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cInsufficient currency! You
  need $amount to use this wormhole!'
```

</details>
