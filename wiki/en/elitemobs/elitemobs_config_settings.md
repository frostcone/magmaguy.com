# EliteMobs Settings

**EliteMobs comes with the recommended defaults installed by default. If you change things at random, odds are you'll only make the experience worse overall.**

_**EliteMobs is provided to all users with the recommended default settings. If you change things at random and then request support, there is a very strong chance that you will be told to reset your configuration files. Modifications to the plugin should be borne of playtesting and not of just guesswork.**_

- [Getting started]($language$/elitemobs/elitemobs_config_settings.md&section=getting-started%getting-started)
    - [`Boolean`](#boolean)
    - [`String`](#string)
    - [`Serialized Location`]($language$/global/configuration_file_guide.md&section=serialized-location%serialized-location)
    - [`Multiplier`]($language$/global/configuration_file_guide.md&section=multiplier%multiplier)
    - [`Integer`](#integer)
    - [`Double`](#double)
    - [`String List`](#string_list)
- [config.yml]($language$/elitemobs/elitemobs_config_settings.md&section=config.yml%config.yml)
- [AdventurersGuild.yml]($language$/elitemobs/elitemobs_config_settings.md&section=adventurersguild.yml%adventurersguild.yml)
- [AntiExploit.yml]($language$/elitemobs/elitemobs_config_settings.md&section=antiexploit.yml%antiexploit.yml)
- [CombatTag.yml]($language$/elitemobs/elitemobs_config_settings.md&section=combattag.yml%combattag.yml)
- [DiscordSRV.yml]($language$/elitemobs/elitemobs_config_settings.md&section=discordsrv.yml%discordsrv.yml)
- [EconomySettings.yml]($language$/elitemobs/elitemobs_config_settings.md&section=economysettings.yml%economysettings.yml)
- [events.yml]($language$/elitemobs/elitemobs_config_settings.md&section=events.yml%events.yml)
- [ItemSettings.yml]($language$/elitemobs/elitemobs_config_settings.md&section=itemsettings.yml%itemsettings.yml)
- [MobCombatSettings.yml]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml%mobcombatsettings.yml)
- [ProceduralItemGenerationSettings.yml]($language$/elitemobs/elitemobs_config_settings.md&section=proceduralitemgenerationsettings.yml%proceduralitemgenerationsettings.yml)
- [translation.yml]($language$/elitemobs/elitemobs_config_settings.md&section=translation.yml%translation.yml)
- [ValidWorlds.yml]($language$/elitemobs/elitemobs_config_settings.md&section=validworlds.yml%validworlds.yml)

---

## Getting started

EliteMobs currently has a very large amount of configuration options as a result of the high demand for customizability. To make this wiki page as short as possible, I will explain the default values configuration files can have here so I don't have to reexplain it on every entry.

### `Boolean`

`Boolean` values are `true` or `false`. This is what they look like:

```yaml
value1: true
value2: false
```

`Boolean`s only ever accept either `true` or `false` values. They are usually used to turn specific features on or off.

### `String`

`String` values are usually just normal text. It is highly recommended that you create `String` values between quotes, following this format:

```yaml
value: "String"
```

While this is not always mandatory, it is mandatory for any string that contains color codes, especially if the first character starts with a color code. _**Color codes follow the in-game color code format**_ meaning that `"&aTest`" would result in green text. The availability of colored text varies depending on the configuration setting. Check [this page](#color_codes) for color codes.

Why? Configuration strings can accept special characters such as \`&\`. If these special characters occupy the first character, such as in \`value: "&aString"\`, if the \`String\` is not between quotes the value will be wiped and the config option will be reset to its defaults. This is a limitation of the configuration system that Spigot uses.

### `Serialized Location`

`Serialized Location` is a specific type of String which looks like this:

```yaml
location: world,1.0,2.0,3.0,4.0,5.0
```

These are used to store and configure locations. It follows this format: `worldName,X,Y,Z,PITCH,YAW`. Pitch and yaw just determine the direction that the player is looking at, and is implemented the same way Minecraft locations are.

### `Multiplier`

`Multiplier` values multiply plugin values by that number. These values should _**never**_ be between quotes. Here's an example:

```yaml
damageMultiplier: 1.0
```

In this case, the damage multiplier would be multiplied by 1, meaning that there is no change from the default value. If the `Multiplier` was `2.0`, the value would be multiplied by `2.0`. If it was `0.5`, it would be multiplied by `0.5`. For those not good with fractions, multiplying by `0.5` is the same as dividing by 2. `Multiplier` values should always be larger than 0 (`0.0001` is valid) and don't tend to have a higher ceiling.

### `Integer`

`Integer` values are just whole numbers. Example:

```yaml
value: 10
```

The main thing about `Integer` values they must be whole numbers. This means that `10.1` is not valid.

### `Double`

`Double`s are irrational numbers. Example:

```yaml
value: 10.01
```

`Double`s can also happen to be whole numbers like integers, like `10.0` or even represented as `10`.

### `String List`

`String List`s are lists of `String` values. These tend to be the hardest values to configure, as they require a very specific config format:

```yaml
valuesList:
- "value,1"
- "value,2"
- "value,3"
```

Like with `String`s, it is recommended to keep the values between quotes. Each `String List` has its own format, so you'll have to find the specific format the one you're editing requires; however, globally, that is what the overall format should look like.

---

## config.yml

`config.yml` contains mostly random settings that couldn't comfortably fit elsewhere at the time of creating them. It is the config file most likely to see changes between versions.

```yaml
defaultSpawnLocation: SERIALIZED LOCATION
```

Sets the default spawn location that is used by the Spawn teleport in the `/em` menu, specifically in the Teleports page.

```yaml
Use permissions: BOOLEAN
```

Sets whether the server will use permissions or the permissionless mode. This setting should be set from in-game via the `/em setup` menu.

```yaml
setupDone: BOOLEAN
```

Sets whether the 1-time setup is completed, which will determine whether or not OPs will be notified about it being completed or not upon logging in.

```yaml
otherCommandsLeadToEMStatusMenu: BOOLEAN
```

Sets whether running player commands that have been replaced by the `/em` interface will open the `/em` interface. Highly recommended to set this to `true`.

```yaml
emLeadsToStatusMenu: BOOLEAN
```

Sets whether the `/em` interface is enabled or not. Highly recommended to set this to `true`.

```yaml
alwaysShowEliteMobNameTags: BOOLEAN
```

Sets whether Elite name tags will always be shown or will only be shown after an Elite enters combat for the first time.

```yaml
superMobStackAmount: INTEGER
```

Sets how many passive mobs must be in close proximity of each other for them to stack and become a Super Mob.

```yaml
preventEliteCreeperDamageToPassiveMobs: BOOLEAN
```

Sets whether Elite Creeper blasts can damage farmable passive mobs or not.

```yaml
useTitlesForMissingPermissionMessages: BOOLEAN
```

Sets whether EliteMobs will display titles or text for showing a lack of permissions when attempting to run a command a player does not have the permissions for.

```yaml
preventEliteMobConversionOfNamedMobs: BOOLEAN
```

Sets whether EliteMobs will prevent the conversion of named mobs to Elite Mobs. Setting this to false may be important if you have other plugins that modify mobs, as it is an easy way to make EliteMobs compatible with those plugins.

```yaml
enableHighCompatibilityMode: BOOLEAN
```

Sets whether EliteMobs will convert mobs that spawn due to the CUSTOM spawn reason. Mobs may spawn with a CUSTOM spawn reason when another plugin spawns an entity, or when an entity is spawned through a command. If you are experiencing issues where EliteMobs is converting mobs from other plugins that it shouldn't, turn this on. If you are using commands or some plugin to create custom spawning logic (like in arenas), leave this set to false.

```yaml
nightmareWorldSpawnBonus: MULTIPLIER
```

Sets the multiplier for the spawn bonus in nightmare worlds. Nightmare worlds are set in ValidWorlds.yml, and the feature consists in higher Elite spawn rates, shorter days and the inability to sleep at night.

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contains config settings relevant to both the Adventurer's Guild Hub (the world), as well as settings relevant to the Adventurer's Guild rankup system.

```yaml
Add max health when unlocking higher guild ranks: BOOLEAN
```

Sets whether the Prestige system health boost will be applied when ranking up in the Adventurer's Guild. Note: Requires at least Prestige 1 to start taking effect.

```yaml
Add critical chance when unlocking higher guild ranks: BOOLEAN
```

Sets whether the Prestige system critical strike chance bonus will be applied when ranking up in the Adventurer's Guild. Note: Requires at least Prestige 2 to start taking effect.

```yaml
Add dodge chance when unlocking higher guild ranks: BOOLEAN
```

Sets whether the Prestige system dodge chance bonus will be applied when ranking up in the Adventurer's Guild. Note: Requires at least Prestige 3 to start taking effect.

```yaml
Adventurer's Guild world name: STRING
```

Name of the world which contains the Adventurer's Guild. Note: This will soon be replaced with a proper `Serialized Location` value.

```yaml
Guild world coordinates: X,Y,Z,PITCH,YAW
```

Spawn location in the Adventurer's GUild world. Note: This will soon be replaced with a proper `Serialized Location` value.

```yaml
Teleport players to the adventurers guild using /ag: BOOLEAN
```

Sets whether players will be teleported to the Adventurer's Guild Hub when running the /ag command. Note: This has no effect if the Adventurer's Guild world isn't installed.

```yaml
adventurersGuildMenuName: STRING
```

Sets the name of the Adventurer's Guild Hub to be used in player displays. Note: Accepts color codes.

```yaml
Prestige X rank Y: STRING
```

Sets the name of the rank for players to read in various in-game locations. Note: Accepts color codes. Note: You can't add more than what already exists!

```yaml
Prestige X rank Y short placeholder: STRING
```

Sets the placeholder for the shortened version of the rank name. Note: This is the recommended placeholder for displaying ranks in chat or leaderboards.

```yaml
limitLootBasedOnGuildTier: BOOLEAN
```

Sets whether the loot that players can obtain is limited by their guild rank. The formula is 10 tiers of loot by guild rank, meaning that rank 1 is limited to tiers 0-10, rank 2 is limited to tiers 0-20, tier 3 0-30, 4 0-40... \*\*\*Note: This is key feature of EliteMobs for progression, and setting it to `false`will cause a lot of issues with gear progression in your server. Make sure you think it through before changing it from `true`. _**This feature won't work as intended if you turn Soulbind off!**_

Why? Players are able to powerlevel (level up incredibly quickly) by simply sticking around with other high tier players and killing super high tier mobs with their help, then bypassing potentially hundreds of ranks worth of gear, and immediately completing all of the plugin's gear progression in quite possibly a single kill.

```yaml
lootLimiterMessage: STRING
```

Sets the message that will display in the action bar when a player kills a mob that would've looted better items if the player wasn't limited by the `limitLootBasedOnGuildTier` feature.

```yaml
alwaysUseNpcsWhenAvailable: true
```

Sets whether players will be forced to use NPCs for things like shops. If set to `true`, running a command like `/em shop` will instead teleport the player to the Adventurer's Guild Hub world where they will be able to interact with NPCs for trading in gear (Note: there is a summon scroll for a merchant for players that wish to take the shop to them, but it is a cheap 1-time use item). Note: This is highly recommended for immersion and for letting players explore the Hub world for other features they might've missed, such as Quests.

```yaml
onRankUpCommand: STRING LIST
```

Sets a list of commands to run when a player unlocks a new rank of the Adventurer's Guild. Here's an example format:

```yaml
onRankUpCommand:
- "broadcast Congratulations to $player for unlocking the prestige $prestigeRank tier $activeRank rank!"
- "broadcast Very cool!"
```

This runs 2 broadcasts. Note: This accepts the following placeholders: `$player` for the player's name, `$prestigeRank` for the number of the current prestige tier and `$activeRank` for the number of the rank they just unlocked.

```yaml
onPrestigeUpCommand: STRING LIST
```

Sets a list of commands to run when a player unlocks a prestige rank. This works in exactly the same way as `onRankUpCommand`, so check the option above.

```yaml
dodgePrestige3Bonus: MULTIPLIER
dodgePrestige6Bonus: MULTIPLIER
dodgePrestige9Bonus: MULTIPLIER
critPrestige2Bonus: MULTIPLIER
critPrestige5Bonus: MULTIPLIER
critPrestige8Bonus: MULTIPLIER
healthPrestige1Bonus: MULTIPLIER
healthPrestige4Bonus: MULTIPLIER
healthPrestige7Bonus: MULTIPLIER
healthPrestige10Bonus: MULTIPLIER
```

Sets the various multipliers that will be used by the Prestige system when players rank up. Note: You can set how high the multipliers can go, but not when they activate in the Prestige system.

```yaml
baseKillsForRankUp: INTEGER
```

Sets the base amount of mobs, on average, that a player must kill in order to afford to rank up in the Adventurer's Guild.

Details This assumes that players are legitimately killing Elites at the highest unlocked tier and also doesn't take things such as the value of items looted into account. It is just a rough estimation, and if players insist in killing lower level mobs it will take significantly longer, as it should.

```yaml
additionalKillsForRankUpPerTier: INTEGER
```

Sets the amount of mobs, on average, that is added to the base amount to unlock an Adventurer's Guild rank. Example: assuming a base of `100` adding `50` per tier, at tier 7 a player would have to kill `100 + 50 * 7 = 450` elites in order to rank up. Note: These are just high estimations, the real amount can be significantly lower as this doesn't take loot resale into account, only coins from the coin shower.

---

## AntiExploit.yml

`AntiExploit.yml` allows admins to customize different aspects of the AntiExploit system. The AntiExploit system exists to prevent players from using things such as mob grinders to easily farm for coins and loot, and pushes them to do real fights and minidungeons instead of afk clicking their way to the top of the plugin.

This is a critical system to keep on if you don't want people to just afk grind the entire plugin and want to actually have them interact with minidungeons.

```yaml
AntiExploit message: STRING
```

Sets the message that shows up on nearby player Action Bars when a mob has exceeded the threshold of the AntiExploit system and will no longer drop EliteMobs loot.

```yaml
Enable darkroom antiexploit 1: BOOLEAN
Enable darkroom antiexploit 2: BOOLEAN
Enable darkroom antiexploit 3: BOOLEAN
Enable large darkroom antiexploit 1: BOOLEAN
Enable large darkroom antiexploit 2: BOOLEAN
Enable large darkroom antiexploit 3: BOOLEAN
Enable large darkroom antiexploit 4: BOOLEAN
Enable enderman height antiexploit: BOOLEAN
Enable mount antiexploit: BOOLEAN
Enable tower antiexploit: BOOLEAN
Enable density antiexploit: BOOLEAN
Enable ambient damage antiexploit: BOOLEAN
Enable honey block antiexploit: BOOLEAN
```

Sets whether a certain type of antiexploit is on. You can tell which AntiExploit feature triggered if you are OP on a server and are nearby when the antiexploit is triggered, as it will give a different message with a code saying which AntiExploit feature was triggered. No documentation is provided for what exactly each antiexploit feature does to prevent having people read documentation and then create exploits that they know will work based on what the documentation says.

```yaml
preventItemPickupByMobs: BOOLEAN
```

Sets whether Elites can pick up dropped items. Elites will never drop items they picked up, so this will result in permanent item loss the moment items get picked up.

```yaml
antiExploitThreshold: INTEGER
```

Sets the threshold after which EliteMobs will stop dropping items for the AntiExploit.

What does this actually do? The AntiExploit works on a point-based system, where each different exploit results in a different score being applied. Additionally, certain interactions result in scores getting lowered. If the score goes over the number set by \`antiExploitThreshold\`, the Elite will no longer drop Elite loot, regardless of what happens after that point. This system is tweaked around the assumption that the total score to beat is 10, and it is highly recommended that that value does not change, or at least doesn't change much from 10. Thoroughly playtest any modifications to this value.

---

## CombatTag.yml

`CombatTag.yml` contains the config settings for the Combat Tag system. This system is still very far from being complete, but it attempts to manage player behavior once they enter combat.

```yaml
Enable combat tag: BOOLEAN
```

Sets whether the combat tag system is enabled.

```yaml
Combat tag message: STRING
```

Sets the message that is sent to a player's Action Bar if they trigger the Combat Tag. Note. Accepts color codes.

```yaml
Enable adventurers guild teleport timer: BOOLEAN
```

Sets whether teleportation to the Adventurer's Guild will take a certain amount of time or if it will be instant. Note: This now also sets the time for all teleports in the Teleports page of the `/em` menu. Additionally, if players move during the teleport, it will be cancelled. If enabled, it will take 3 seconds before a teleportation is completed.

Why? This feature is used to avoid having people instantly teleport out of danger during combat.

---

## DiscordSRV.yml

`DiscordSRV.yml` contains the configuration settings for DiscordSRV. If you want to see how to configure this feature, [click here!]($language$/elitemobs/discordsrv.md)

---

## EconomySettings.yml

`EconomySettings.yml` contains the configuration settings for the EliteMobs economy.

```yaml
enableEconomy: BOOLEAN
```

Sets whether the economy will be used. _**Note: at this point disabling this would cause so many issues that there is no support for users who choose to disable this.**_ Just don't disable it. It breaks the entire progression system.

```yaml
itemResaleValue: DOUBLE
```

Sets the % of the original value items will resell for. As an example, a value of `5` would mean that all items resell for 5% of their original worth.

```yaml
currencyName: STRING
```

Sets the name of the currency that players see wherever the currency shows up.

```yaml
useVault - not recommended: BOOLEAN
```

Sets whether EliteMobs will use Vault to link its currency to the server's Vault currency. This is not recommended, [read here as to why.]($language$/elitemobs/vault.md)

```yaml
enableCurrencyShower: BOOLEAN
```

Sets whether Elites / Custom Bosses will drop a bunch of Elite Coins when they die. _**Note: This will be deactivated by default if you turn the Soulbind feature is off.**_

```yaml
currencyShowerTierMultiplier: MULTIPLIER
```

Sets the multiplier for the coins dropped in the currency shower.

```yaml
chatCurrencyShowerMessage: STRING
```

Sets the message that shows up on chat once players are done picking coins up. Note: can use color codes.

```yaml
actionbarCurrencyShowerMessage: String
```

Sets the message that shows up on action bar as players pick coins up. Note: can use color codes.

```yaml
adventurersGuildNotificationMessages: STRING
```

Sets the message that shows up on action bar after players are done picking up coins. Note: can use color codes. This is used to teach players how to spend currency.

```yaml
lootShowerMaterial:
  '1': STRING
  '5': STRING
  '10': STRING
  '20': STRING
  '50': STRING
  '100': STRING
  '500': STRING
  '1000': STRING
```

Sets the material to be used for the different coin values. [These MUST use values as they are written in this list or it will NOT work.](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) Note: you can't add values that don't already exist.

```yaml
materialWorth: STRING LIST
```

Sets the base worth of different material types. This will directly affect items sold by and to elite shops. NOTE: You can add your own values here, assuming you use the [correct API names.](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) Additionally, the `defaultMaterialWorth` sets the default worth of materials, which will be used for materials that are not explicitly listed in this `String List`.

## events.yml

`events.yml` contains the configuration options for events. _**Note: these are just the very basic global settings.**_ You can further modify specific events in the `events` folder.

```yaml
Enable events: BOOLEAN
```

Sets whether all events are enabled.

```yaml
Minimum amount of online players for event to trigger: INTEGER
```

Sets the minimum amount of online players for events to have a chance to trigger.

```yaml
Maximum amount of online players after which the event frequency won't increase: INTEGER
```

Sets the amount after which event frequency won't increase.

Why? More players online = more events. This is because a lot of events, like the Treasure Goblin, can realistically only be done by a few players. This means that the more players are online, the fewer players get to do events. To compensate for this issue, if there are more players online, the server will have more events so everyone has a chance to participate.

```yaml
Minimum event frequency (minutes): INTEGER
```

Sets the minimum delay between events, in minutes. Note: every event has a trigger. This is the delay between events getting queued and not triggered. There might be a further delay between the moment an event gets queued and the moment when an event is actually triggered. As an example, the Dead Moon event requires night time, a new moon phase (AKA dark moon) and for a zombie to spawn somewhere valid. This is the most complex set of requirements, but it explains why there can be a delay between when an event should've fired and when it actually does fire pretty well.

```yaml
Maximum event frequency (minutes): INTEGER
```

Sets the maximum delay between events, in minutes.

```yaml
Only broadcast event message in event world: BOOLEAN
```

Sets whether the message about the event triggered will only be broadcasted to the world where it was triggered.

---

## ItemSettings.yml

`ItemSettings.yml` contains the global settings for Elite items.

```yaml
doEliteMobsLoot: BOOLEAN
```

Sets whether EliteMobs will drop Elite loot. _**NOTE: Disabling this would break or disable so many systems that it is not officially supported.**_

```yaml
doMMORPGColorsForItems: BOOLEAN
```

Sets whether Elite items will be colored following an adapted World of Warcraft item quality system. The quality system goes like this: light blue (above max config enchant level) > gold > purple > blue > green > white > gray .

```yaml
preventCustomItemPlacement: BOOLEAN
```

Sets whether players are unable to place Elite items. This is recommended for things like charms that are actually anvil items, as players can missclick and accidentally place them down. Placing charms down will break them.

```yaml
itemLoreStructures:
- §7§m§l---------§7<§lEquip Info§7>§m§l---------
- '§7Item level: §f$itemLevel §7Prestige §6$prestigeLevel'
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
```

Sets the structure of the lore of Elite items. This affects both custom and procedurally generated items. It takes the following placeholders:

- `$itemLevel` shows the item level
- `$prestigeLevel` shows the prestige level (based on the prestige level of the player that looted the item)
- `$soulbindInfo` posts a line containing the Soulbind info
- `$itemSource` posts a line about the item source, i.e. if it came from a specific mob or from a shop
- `$ifEnchantments` - conditional config line - everything on this line will only appear if the item has enchantments
- `$enchantments`\- posts all lines with info about enchantments
- `$eliteEnchantments` - posts all lines with info about Elite enchantments
- `$ifCustomEnchantments` - conditional config line - everything on this line will only appear if the item has custom Elite enchantments
- `$customEnchantments` - posts all lines with info about custom Elite enchantments
- `$ifPotionEffects` - conditional config line - everything on this line will only appear if the item has potion effects
- `$potionEffect` - posts all lines with info about potion effects
- `$loreResaleValue` - posts a line with info about the worth of this item. This line is situational - when buying it shows the buying price, when selling it shows the selling price.

```yaml
shopSourceItemLores: STRING
```

Sets the message for the item source when it is purchased from a store.

```yaml
mobSourceItemLores: STRING
```

Sets the message for the item source when it was looted from a mob.

```yaml
loreWorths: STRING
```

Sets the message for the item price when a player is looking to buy it.

```yaml
loreResaleValues: STRING
```

Sets the message for the item price when a player has it in their posession.

```yaml
flatDropRate: DOUBLE
```

Sets the flat drop rate for items. This is a % where the `1` is 100%. Every other modifier to the drop chance is added to this base chance.

```yaml
tierIncreaseDropRate: DOUBLE
```

Sets the bonus to a chance to drop an item based on an Elite Mob tier. By default, with a value of `0.05`, this is 5% more per Elite Mob level. This means that at level 10 it'd be 50% chance to drop an item, on top of the base `0.25` or 25%, meaning a total of 75% chance to drop.

```yaml
proceduralItemDropWeight: DOUBLE
weighedItemDropWeight: DOUBLE
fixedItemDropWeight: DOUBLE
limitedItemDropWeight: DOUBLE
scalableItemDropWeight: DOUBLE
```

This is a complicated feature which uses the concept of weighed probability in order to decide which type of item will be dropped by an Elite assuming that they are going to drop an Elite item. `Weighed items`, `fixed items`, `limited items`and `scalable items` are all different types of Custom Items which can be read about [here]($language$/elitemobs/creating_items.md%scalability). `Procedural items` are the items that EliteMobs randomizes.

It would take too long to explain how weighed probability works, so I will keep it very simple: the higher the number, the higher the chance that that item will drop. Be careful about setting any custom items high, as this means that unless you have hundreds or thousands of custom items you will probably be seeing the same custom item getting dropped constantly.

```yaml
defaultLootMultiplier: MULTIPLIER
```

Sets the multiplier for default loot, based on the tier of the Elite mob. NOTE: be careful if you want to use this setting, as levels can go as high as 250+. If you set it to `1.0`, this would mean that at level 250 an Elite Mob of any kind would drop 250x the default loot of that entity type. This can cause quite a bit of lag very quickly.

```yaml
levelCapForDefaultLootMultiplier: INTEGER
```

Sets the level cap after which the `defaultLootMultiplier` will no longer be multiplied. This is used as a safeguard for servers that spawn level `100,000,000` Elites and then try to drop 500,000,000 items at the same time.

```yaml
defaultExperienceMultiplier: MULTIPLIER
```

Sets the multiplier for vanilla Minecraft experience dropped by Elite Mobs based on their level. This is based on the amount dropped by a default Minecraft mob.

```yaml
maximumLootTiers: INTEGER
```

Sets the maximum tier of loot dropped by Elite Mobs. Note: certain loot systems, such as Custom Items with a fixed drop system can go over this limit.

```yaml
useEliteEnchantments: BOOLEAN
```

Sets whether the Elite enchantments system will be used. This is a key feature of EliteMobs. By default, if enchantments go beyond vanilla Minecraft defaults, they turn into Elite enchantments. Elite enchantments only modify damage dealt to Elite Mobs and Bosses. This is done to prevent harming the PvP scene, as well not destroying the Vanilla difficulty with sharpness 200 swords. Using Elite enchantments, you are able to still have a challenging vanilla experience without losing the EliteMobs progression. _**Note: disabling this can cause a lot of issues, and it is not supported.**_

```yaml
useHoesAsWeapons: BOOLEAN
```

Sets whether EliteMobs will consider Minecraft hoes as weapons for the combat system.

```yaml
enableRareItemParticleEffects: BOOLEAN
```

Sets whether EliteMobs will do special particle effects when an item of a high quality/rarity is dropped.

```yaml
potionEffectOnHitTargetLore: STRING
potionEffectOnHitSelfLore: STRING
potionEffectContinuousLore: STRING
eliteEnchantmentLoreColor: STRING
vanillaEnchantmentLoreColor: STRING
customEnchantmentColor: STRING
potionEffectLoreColor: STRING
```

Sets the messages and colors in the item lore of Elite items for the following features:

- `potionEffectOnHitTargetLore` potion effects that occur on hit and apply to the target
- `potionEffectOnHitSelfLore` potion effects that occur on hit and apply to the wielder
- `potionEffectContinuousLore` potion effects that occur continuously and apply to the wielder
- `eliteEnchantmentLoreColor` color and prefix of the lore of Elite enchantments
- `vanillaEnchantmentLoreColor` color and prefix of the lore of vanilla enchantments
- `customEnchantmentColor` color and prefix of the lore of custom enchantments
- `potionEffectLoreColor` color and prefix of the lore of potion effects

```yaml
noSoulbindLore: STRING
```

Sets the item lore of Elite items that are not Soulbound.

```yaml
preventEliteItemEnchantment: BOOLEAN
```

Prevents Elite items from getting used in anvils and other locations where they might be modified by vanilla Minecraft mechanics.

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contains all config options related to the custom combat system and most config options generally related to how Elite Mobs work.

```yaml
defaultOtherWorldBossLocationMessage: STRING
```

Sets the message that players will see if they attempt to track a boss and it is in a different world

```yaml
regenerateCustomBossHealthOnCombatEnd: �BOOLEAN
```

Sets whether Custom bosses regenerate health when they leave combat. This is an important feature that I seriously recommend you leave on to avoid issues such as zerging - having players do dozens of suicide runs to kill a boss because it is worth trying to punch it to death for hours for the loot it drops.

```yaml
doNaturalEliteMobSpawning: BOOLEAN
```

Sets whether procedurally generated Elites will spawn.

```yaml
doSpawnersSpawnEliteMobs: BOOLEAN
```

Sets whether spawners will be able to spawn procedurally generated Elites. Note: Requires procedurally generated Elites to be on. Spawner-spawned Elites will not drop Elite loot.

```yaml
eliteMobsSpawnPercentage: DOUBLE
```

Sets the percentage of naturally spawned mobs which will be converted into Elite mobs. `1.0` is 100%, `0.5` is 50%, `0.0` is 0%.

```yaml
mobTierLevelIncrease: INTEGER
```

Sets the amount of levels between tiers. This is a complicated feature and I just recommend you leave it on 1, there is no reason to go higher.

```yaml
superMobStackRange: INTEGER
```

Sets the range, in blocks, at which Super Mobs will stack.

```yaml
naturalEliteMobsLevelCap: INTEGER
```

Sets the maximum level of naturally spawned Elite Mobs.

```yaml
eliteCreeperExplosionsMultiplier: MULTIPLIER
```

Sets the multiplier for Elite Creeper explosions.

```yaml
doElitesWearArmor: BOOLEAN
```

Sets whether naturally spawned Elites can wear armor.

```yaml
doElitesWearHelmets: BOOLEAN
```

Sets whether naturally spawned Elites wear helmets.

```yaml
doNaturalEliteMobVisualEffects: BOOLEAN
```

Sets whether naturally spawned Elites do particle effects. This is recommended as the visual effects indicate which powers they have, which is important to learn for combat.

```yaml
doSpawnerEliteMobVisualEffects: BOOLEAN
```

Sets whether Elites spawned from spawners do visual effects, if they are enabled.

```yaml
doPowerBuildupVisualEffects: BOOLEAN
```

Sets whether Elites do particle effects that warn players that a power is about to be triggered. _**You really shouldn't disable this option!**_

```yaml
doCustomEliteMobsDeathMessages: BOLEAN
```

Sets whether players killed by Elites will display custom death messages on chat.

```yaml
doDisplayMobHealthOnHit: BOOLEAN
```

Sets whether health displays will show up when damaging an Elite Mob.

```yaml
doDisplayMobDamageOnHit: BOOLEAN
```

Sets whether damage displays will show up when damaging an Elite Mob.

```yaml
doEliteMobHealthDisplayOnly: BOOLEAN
doEliteMobDamageDisplayOnly: BOOLEAN
```

Currently deprecated.

```yaml
doIncreaseEliteMobLevelBasedOnSpawnDistance: BOOLEAN
```

Sets if there will be a distance-based bonus to Elite levels. This does not set fixed levels based on distance from spawn, that's the region leveling mode in ValidWorlds.yml. This sets a bonus on top of the level that the boss would have based on the gear that the player is wearing. This option isn't really recommended.

```yaml
distanceBetweenIncrements: DOUBLE
```

Sets the distance, in blocks, between level increments if the `doIncreaseEliteMobLevelBasedOnSpawnDistance` option is enabled.

```yaml
levelIncreaseAtIncrements: DOUBLE
```

Sets how many levels will increment at the set `distanceBetweenIncrements`.

```yaml
hideEliteMobPowersUntilAggro: BOOLEAN
```

Sets whether Elites will display their powers before entering combat. The recommended option is false for general optimization purposes.

```yaml
damageToEliteMobMultiplier: MULTIPLIER
```

Sets the multiplier for the damage dealt to Elite Mobs by players.

```yaml
damageToPlayerMultiplier: MULTIPLIER
```

Sets the multiplier for the damage dealt to player by Elite Mobs.

```yaml
showCustomBossLocation: BOOLEAN
```

Sets whether Custom Bosses can show their location and be tracked if those Custom Bosses have been configured to do so.

```yaml
bossLocationMessage: STRING
```

Sets the message that shows up on chat when a trackable Custom Boss spawns. When clicked, players will be able to track the Custom Boss' location in real time.

```yaml
commandsOnEliteMobDeath: STRING LIST
```

Sets the list of commands to run once an Elite Mob dies. Example:

```yaml
commandsOnEliteMobDeath:
- "broadcast $players have killed level $level $name in world $locationWorldName!"
- "broadcast The boss was killed at coordinates $locationx $locationY $locationZ !"
```

_**Note:**_ the $players placeholder will not only be replaced with the name of a player, but it will also make the command run as many times as there are players in the kill list. This means that if there were 3 players killing the boss, the first broadcast would run 3 times.

```yaml
bossKillParticipationMessage: STRING
```

Sets the message that is sent to a player when they kill a Custom Boss configured to send this message. Tells the player how much damage they dealt throughout the battle. Uses the placeholder `$playerDamage` which is replaced with the damage dealt to the Elite.

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contains all the configuration options for configuring procedurally generated items.

```yaml
dropProcedurallyGeneratedItems: BOOLEAN
```

Sets whether procedurally generated items will be dropped. It is highly recommended to leave this on, as most items dropped will be procedurally generated.

```yaml
customEnchantmentsChance: DOUBLE
```

Sets the chance that a procedurally generated item will contain a custom enchantment, if applicable, where `1.0` is 100%, `0.5` is 50% and `0.0` is 0%.

```yaml
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns: STRING LIST
adjectives: STRING LIST
verbs: STRING LIST
verb-ers (noun): STRING LIST
validMaterials: STRING LIST
materialNames: STRING LIST
```

Sets the formatting for the names of procedurally generated items. The placeholders `$verb`, `$verb-er`, `$adjective` and `$noun` are randomized from the `String Lists` that correspond to them. `$itemType` is obtained from the `materialNames` list. `validMaterials` sets the list of materials that procedurally generated items can be.

---

## translation.yml

`translation.yml` contains a collection of values which can be modified to customize and translate the plugin. These are self-explanatory.

---

## ValidWorlds.yml

`ValidWorlds.yml` contains the list of worlds that EliteMobs has detected, as well as options to customize EliteMobs features on them.

```yaml
Valid worlds: STRING LIST
```

Sets whether Elites will spawn in these worlds.

```yaml
Zone-based elitemob spawning worlds: STRING LIST
```

Sets whether these worlds will use the [Region Leveling mode]($language$/elitemobs/region_leveling_mode.md).

```yaml
Nightmare mode worlds: STRING LIST
```

Sets whether these worlds will use the [Nightmare Mode]($language$/elitemobs/nightmare_mode.md).