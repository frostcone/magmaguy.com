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
# Sets the character limit per line for book menu pages.
# Lower this amount if text is getting cut off in book menus such as for quests
characterLimitForBookMenuPagesV2: 170
# Sets the message that appears when a player tries to track a boss that is no longer valid
bossAlreadyGoneMessage: '&c[EliteMobs] Sorry, this boss is already gone!'
# Sets the message that appears when a player opens a treasure chest but gets nothing
treasureChestNoDropMessage: '&8[EliteMobs] &cYou didn''t get anything! Better luck
  next time!'
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
# Sets the default spawn location of the server for EliteMobs. /em spawn will lead to this location.
defaultSpawnLocation: world,0.0,99.0,0.0,0.0,0.0
# Sets if EliteMobs will regenerate blocks blown up by elites.
doExplosionRegen: true
# Sets if the explosion regen will also regenerate the contents of containers such as chests.
# Turning it to false will make elite explosions not blow up containers.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Sets whether the /em menu will only use the inventory-based menu style which is compatible with bedrock.
# As a reminder, players can otherwise do the command /em alt to switch between /em menu styles
onlyUseBedrockMenus: false
# Sets if empty menu space will be filled with glass panes.
# Not recommended if you are using the EliteMobs resource pack.
useGlassToFillMenuEmptySpace: false
# Sets if unicode will be used to format the EliteMobs resource pack.
# Do not set this manually, it is set automatically upon installation of the resource pack.
# Only set it manually if you had to merge the EliteMobs resource pack, and expect that the spacing might not work if you do that.
menuUnicodeFormatting: false
# Sets the language file used by EliteMobs
# Do NOT change this manually! It is meant to be installed with the command '/em language <languagefile>'
language: english
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contains config settings relevant to both the Adventurer's Guild Hub (the world), and settings relevant to the Adventurer's Guild rankup system.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Disables users' ability to switch to peaceful mode for EliteMobs. Peaceful mode lowers level and spawn rates of mobs around that player specifically
disableCommonerRank: false
# Sets if EliteMobs will add max health when unlocking guild ranks as a prestige reward
Add max health when unlocking higher guild ranks: true
# Sets if EliteMobs will add a critical strike chance when unlocking guild ranks as a prestige reward
Add critical chance when unlocking higher guild ranks: true
# Sets if EliteMobs will add dodge chance when unlocking guild ranks as a prestige reward
Add dodge chance when unlocking higher guild ranks: true
# Sets if the adventurer's guild hub is enabled. Don't set this manually! It is meant to be installed through the '/em setup' command
guildHubIsEnabledv2: true
# Sets the adventurer's guild world name. Do NOT change this to the name of your main world.
# Only change this if you have created your own custom dedicated guild hub world that is meant for nothing else than to be a guild hub.
# Most normal interaction are disabled in the guild hub world!
Adventurer's Guild world name v3: em_adventurers_guild
# Sets the spawn coordinates for the adventurer's guild world.
Guild world coordinates: 208.5,88,236.5,-80,0
# Sets if user commands get rerouted to the adventurer's guild hub. This is highly recommended for gameplay immersion and tutorial purposes.
userCommandsTeleportToAdventurersGuild: true
# Sets the in-game display name of the adventurer's guild
adventurersGuildMenuName: '&6&lAdventurer''s Hub'
Prestige 0 rank 0: '&8Commoner - disables elites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
Prestige 0 rank 1: '&fRookie'
Prestige 0 rank 1 short placeholder: '&6&l✧&eⅠ'
Prestige 0 rank 2: '&fNovice'
Prestige 0 rank 2 short placeholder: '&6&l✧&eⅠⅠ'
Prestige 0 rank 3: '&fApprentice'
Prestige 0 rank 3 short placeholder: '&6&l✧&eⅠⅠⅠ'
Prestige 0 rank 4: '&2Adventurer'
Prestige 0 rank 4 short placeholder: '&6&l✧&eⅠⅤ'
Prestige 0 rank 5: '&2Journeyman'
Prestige 0 rank 5 short placeholder: '&6&l✧&eⅤ'
Prestige 0 rank 6: '&2Adept'
Prestige 0 rank 6 short placeholder: '&6&l✧&eⅤⅠ'
Prestige 0 rank 7: '&1Veteran'
Prestige 0 rank 7 short placeholder: '&6&l✧&eⅤⅠⅠ'
Prestige 0 rank 8: '&1Elite'
Prestige 0 rank 8 short placeholder: '&6&l✧&eⅤⅠⅠⅠ'
Prestige 0 rank 9: '&lMaster'
Prestige 0 rank 9 short placeholder: '&6&l✧&eⅠⅩ'
Prestige 0 rank 10: '&5Hero'
Prestige 0 rank 10 short placeholder: '&6&l✧&eⅩ'
Prestige 1 rank 0: '&ePrestige 1 &8Commoner'
Prestige 1 rank 0 short placeholder: '&e⚜Ⅰ&6&l✧&e0'
Prestige 1 rank 1: '&ePrestige 1 &fRookie'
Prestige 1 rank 1 short placeholder: '&e⚜Ⅰ&6&l✧&eⅠ'
Prestige 1 rank 2: '&ePrestige 1 &fNovice'
Prestige 1 rank 2 short placeholder: '&e⚜Ⅰ&6&l✧&eⅠⅠ'
Prestige 1 rank 3: '&ePrestige 1 &fApprentice'
Prestige 1 rank 3 short placeholder: '&e⚜Ⅰ&6&l✧&eⅠⅠⅠ'
Prestige 1 rank 4: '&ePrestige 1 &2Adventurer'
Prestige 1 rank 4 short placeholder: '&e⚜Ⅰ&6&l✧&eⅠⅤ'
Prestige 1 rank 5: '&ePrestige 1 &2Journeyman'
Prestige 1 rank 5 short placeholder: '&e⚜Ⅰ&6&l✧&eⅤ'
Prestige 1 rank 6: '&ePrestige 1 &2Adept'
Prestige 1 rank 6 short placeholder: '&e⚜Ⅰ&6&l✧&eⅤⅠ'
Prestige 1 rank 7: '&ePrestige 1 &1Veteran'
Prestige 1 rank 7 short placeholder: '&e⚜Ⅰ&6&l✧&eⅤⅠⅠ'
Prestige 1 rank 8: '&ePrestige 1 &1Elite'
Prestige 1 rank 8 short placeholder: '&e⚜Ⅰ&6&l✧&eⅤⅠⅠⅠ'
Prestige 1 rank 9: '&ePrestige 1 &5Master'
Prestige 1 rank 9 short placeholder: '&e⚜Ⅰ&6&l✧&eⅠⅩ'
Prestige 1 rank 10 short placeholder: '&e⚜Ⅰ&6&l✧&eⅩ'
Prestige 1 rank 10: '&ePrestige 1 &5Hero'
Prestige 1 rank 11: '&ePrestige 1 &5Legend'
Prestige 1 rank 11 short placeholder: '&e⚜Ⅰ&6&l✧&eⅩⅠ'
Prestige 2 rank 0: '&2Prestige 2 &8Commoner'
Prestige 2 rank 0 short placeholder: '&2⚜ⅠⅠ&6&l✧&e0'
Prestige 2 rank 1: '&2Prestige 2 &fRookie'
Prestige 2 rank 1 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅠ'
Prestige 2 rank 2: '&2Prestige 2 &fNovice'
Prestige 2 rank 2 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅠⅠ'
Prestige 2 rank 3: '&2Prestige 2 &fApprentice'
Prestige 2 rank 3 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅠⅠⅠ'
Prestige 2 rank 4: '&2Prestige 2 &2Adventurer'
Prestige 2 rank 4 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅠⅤ'
Prestige 2 rank 5: '&2Prestige 2 &2Journeyman'
Prestige 2 rank 5 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅤ'
Prestige 2 rank 6: '&2Prestige 2 &2Adept'
Prestige 2 rank 6 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅤⅠ'
Prestige 2 rank 7: '&2Prestige 2 &1Veteran'
Prestige 2 rank 7 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅤⅠⅠ'
Prestige 2 rank 8: '&2Prestige 2 &1Elite'
Prestige 2 rank 8 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅤⅠⅠⅠ'
Prestige 2 rank 9: '&2Prestige 2 &5Master'
Prestige 2 rank 9 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅠⅩ'
Prestige 2 rank 10 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅩ'
Prestige 2 rank 10: '&2Prestige 2 &5Hero'
Prestige 2 rank 11: '&2Prestige 2 &5Legend'
Prestige 2 rank 11 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅩⅠ'
Prestige 2 rank 12: '&2Prestige 2 &5Myth'
Prestige 2 rank 12 short placeholder: '&2⚜ⅠⅠ&6&l✧&eⅩⅠⅠ'
Prestige 3 rank 0: '&aPrestige 3 &8Commoner'
Prestige 3 rank 0 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&e0'
Prestige 3 rank 1: '&aPrestige 3 &fRookie'
Prestige 3 rank 1 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅠ'
Prestige 3 rank 2: '&aPrestige 3 &fNovice'
Prestige 3 rank 2 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅠⅠ'
Prestige 3 rank 3: '&aPrestige 3 &fApprentice'
Prestige 3 rank 3 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅠⅠⅠ'
Prestige 3 rank 4: '&aPrestige 3 &2Adventurer'
Prestige 3 rank 4 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅠⅤ'
Prestige 3 rank 5: '&aPrestige 3 &2Journeyman'
Prestige 3 rank 5 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅤ'
Prestige 3 rank 6: '&aPrestige 3 &2Adept'
Prestige 3 rank 6 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅤⅠ'
Prestige 3 rank 7: '&aPrestige 3 &1Veteran'
Prestige 3 rank 7 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅤⅠⅠ'
Prestige 3 rank 8: '&aPrestige 3 &1Elite'
Prestige 3 rank 8 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅤⅠⅠⅠ'
Prestige 3 rank 9: '&aPrestige 3 &5Master'
Prestige 3 rank 9 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅠⅩ'
Prestige 3 rank 10 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅩ'
Prestige 3 rank 10: '&aPrestige 3 &5Hero'
Prestige 3 rank 11: '&aPrestige 3 &5Legend'
Prestige 3 rank 11 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅩⅠ'
Prestige 3 rank 12: '&aPrestige 3 &5Myth'
Prestige 3 rank 12 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅩⅠⅠ'
Prestige 3 rank 13: '&aPrestige 3 &5Immortal'
Prestige 3 rank 13 short placeholder: '&a⚜ⅠⅠⅠ&6&l✧&eⅩⅠⅠⅠ'
Prestige 4 rank 0: '&3Prestige 4 &8Commoner'
Prestige 4 rank 0 short placeholder: '&3⚜ⅠⅤ&6&l✧&e0'
Prestige 4 rank 1: '&3Prestige 4 &fRookie'
Prestige 4 rank 1 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅠ'
Prestige 4 rank 2: '&3Prestige 4 &fNovice'
Prestige 4 rank 2 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅠⅠ'
Prestige 4 rank 3: '&3Prestige 4 &fApprentice'
Prestige 4 rank 3 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅠⅠⅠ'
Prestige 4 rank 4: '&3Prestige 4 &2Adventurer'
Prestige 4 rank 4 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅠⅤ'
Prestige 4 rank 5: '&3Prestige 4 &2Journeyman'
Prestige 4 rank 5 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅤ'
Prestige 4 rank 6: '&3Prestige 4 &2Adept'
Prestige 4 rank 6 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅤⅠ'
Prestige 4 rank 7: '&3Prestige 4 &1Veteran'
Prestige 4 rank 7 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅤⅠⅠ'
Prestige 4 rank 8: '&3Prestige 4 &1Elite'
Prestige 4 rank 8 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅤⅠⅠⅠ'
Prestige 4 rank 9: '&3Prestige 4 &5Master'
Prestige 4 rank 9 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅠⅩ'
Prestige 4 rank 10 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅩ'
Prestige 4 rank 10: '&3Prestige 4 &5Hero'
Prestige 4 rank 11: '&3Prestige 4 &5Legend'
Prestige 4 rank 11 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅩⅠ'
Prestige 4 rank 12: '&3Prestige 4 &5Myth'
Prestige 4 rank 12 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅩⅠⅠ'
Prestige 4 rank 13: '&3Prestige 4 &5Immortal'
Prestige 4 rank 13 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅩⅠⅠⅠ'
Prestige 4 rank 14: '&3Prestige 4 &5Chosen'
Prestige 4 rank 14 short placeholder: '&3⚜ⅠⅤ&6&l✧&eⅩⅠⅤ'
Prestige 5 rank 0: '&bPrestige 5 &8Commoner'
Prestige 5 rank 0 short placeholder: '&b⚜Ⅴ&6&l✧&e0'
Prestige 5 rank 1: '&bPrestige 5 &fRookie'
Prestige 5 rank 1 short placeholder: '&b⚜Ⅴ&6&l✧&eⅠ'
Prestige 5 rank 2: '&bPrestige 5 &fNovice'
Prestige 5 rank 2 short placeholder: '&b⚜Ⅴ&6&l✧&eⅠⅠ'
Prestige 5 rank 3: '&bPrestige 5 &fApprentice'
Prestige 5 rank 3 short placeholder: '&b⚜Ⅴ&6&l✧&eⅠⅠⅠ'
Prestige 5 rank 4: '&bPrestige 5 &2Adventurer'
Prestige 5 rank 4 short placeholder: '&b⚜Ⅴ&6&l✧&eⅠⅤ'
Prestige 5 rank 5: '&bPrestige 5 &2Journeyman'
Prestige 5 rank 5 short placeholder: '&b⚜Ⅴ&6&l✧&eⅤ'
Prestige 5 rank 6: '&bPrestige 5 &2Adept'
Prestige 5 rank 6 short placeholder: '&b⚜Ⅴ&6&l✧&eⅤⅠ'
Prestige 5 rank 7: '&bPrestige 5 &1Veteran'
Prestige 5 rank 7 short placeholder: '&b⚜Ⅴ&6&l✧&eⅤⅠⅠ'
Prestige 5 rank 8: '&bPrestige 5 &1Elite'
Prestige 5 rank 8 short placeholder: '&b⚜Ⅴ&6&l✧&eⅤⅠⅠⅠ'
Prestige 5 rank 9: '&bPrestige 5 &5Master'
Prestige 5 rank 9 short placeholder: '&b⚜Ⅴ&6&l✧&eⅠⅩ'
Prestige 5 rank 10 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩ'
Prestige 5 rank 10: '&bPrestige 5 &5Hero'
Prestige 5 rank 11: '&bPrestige 5 &5Legend'
Prestige 5 rank 11 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩⅠ'
Prestige 5 rank 12: '&bPrestige 5 &5Myth'
Prestige 5 rank 12 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩⅠⅠ'
Prestige 5 rank 13: '&bPrestige 5 &5Immortal'
Prestige 5 rank 13 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩⅠⅠⅠ'
Prestige 5 rank 14: '&bPrestige 5 &5Chosen'
Prestige 5 rank 14 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩⅠⅤ'
Prestige 5 rank 15: '&bPrestige 5 &5Ascendant'
Prestige 5 rank 15 short placeholder: '&b⚜Ⅴ&6&l✧&eⅩⅤ'
Prestige 6 rank 0: '&4Prestige 6 &8Commoner'
Prestige 6 rank 0 short placeholder: '&4⚜ⅤⅠ&6&l✧&e0'
Prestige 6 rank 1: '&4Prestige 6 &fRookie'
Prestige 6 rank 1 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅠ'
Prestige 6 rank 2: '&4Prestige 6 &fNovice'
Prestige 6 rank 2 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅠⅠ'
Prestige 6 rank 3: '&4Prestige 6 &fApprentice'
Prestige 6 rank 3 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅠⅠⅠ'
Prestige 6 rank 4: '&4Prestige 6 &2Adventurer'
Prestige 6 rank 4 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅠⅤ'
Prestige 6 rank 5: '&4Prestige 6 &2Journeyman'
Prestige 6 rank 5 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅤ'
Prestige 6 rank 6: '&4Prestige 6 &2Adept'
Prestige 6 rank 6 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅤⅠ'
Prestige 6 rank 7: '&4Prestige 6 &1Veteran'
Prestige 6 rank 7 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅤⅠⅠ'
Prestige 6 rank 8: '&4Prestige 6 &1Elite'
Prestige 6 rank 8 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅤⅠⅠⅠ'
Prestige 6 rank 9: '&4Prestige 6 &5Master'
Prestige 6 rank 9 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅠⅩ'
Prestige 6 rank 10 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩ'
Prestige 6 rank 10: '&4Prestige 6 &5Hero'
Prestige 6 rank 11: '&4Prestige 6 &5Legend'
Prestige 6 rank 11 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅠ'
Prestige 6 rank 12: '&4Prestige 6 &5Myth'
Prestige 6 rank 12 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅠⅠ'
Prestige 6 rank 13: '&4Prestige 6 &5Immortal'
Prestige 6 rank 13 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅠⅠⅠ'
Prestige 6 rank 14: '&4Prestige 6 &5Chosen'
Prestige 6 rank 14 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅠⅤ'
Prestige 6 rank 15: '&4Prestige 6 &5Ascendant'
Prestige 6 rank 15 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅤ'
Prestige 6 rank 16: '&4Prestige 6 &5Titan'
Prestige 6 rank 16 short placeholder: '&4⚜ⅤⅠ&6&l✧&eⅩⅤⅠ'
Prestige 7 rank 0: '&cPrestige 7 &8Commoner'
Prestige 7 rank 0 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&e0'
Prestige 7 rank 1: '&cPrestige 7 &fRookie'
Prestige 7 rank 1 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅠ'
Prestige 7 rank 2: '&cPrestige 7 &fNovice'
Prestige 7 rank 2 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅠⅠ'
Prestige 7 rank 3: '&cPrestige 7 &fApprentice'
Prestige 7 rank 3 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅠⅠⅠ'
Prestige 7 rank 4: '&cPrestige 7 &2Adventurer'
Prestige 7 rank 4 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅠⅤ'
Prestige 7 rank 5: '&cPrestige 7 &2Journeyman'
Prestige 7 rank 5 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅤ'
Prestige 7 rank 6: '&cPrestige 7 &2Adept'
Prestige 7 rank 6 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅤⅠ'
Prestige 7 rank 7: '&cPrestige 7 &1Veteran'
Prestige 7 rank 7 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅤⅠⅠ'
Prestige 7 rank 8: '&cPrestige 7 &1Elite'
Prestige 7 rank 8 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅤⅠⅠⅠ'
Prestige 7 rank 9: '&cPrestige 7 &5Master'
Prestige 7 rank 9 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅠⅩ'
Prestige 7 rank 10 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩ'
Prestige 7 rank 10: '&cPrestige 7 &5Hero'
Prestige 7 rank 11: '&cPrestige 7 &5Legend'
Prestige 7 rank 11 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅠ'
Prestige 7 rank 12: '&cPrestige 7 &5Myth'
Prestige 7 rank 12 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅠⅠ'
Prestige 7 rank 13: '&cPrestige 7 &5Immortal'
Prestige 7 rank 13 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅠⅠⅠ'
Prestige 7 rank 14: '&cPrestige 7 &5Chosen'
Prestige 7 rank 14 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅠⅤ'
Prestige 7 rank 15: '&cPrestige 7 &5Ascendant'
Prestige 7 rank 15 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅤ'
Prestige 7 rank 16: '&cPrestige 7 &5Titan'
Prestige 7 rank 16 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅤⅠ'
Prestige 7 rank 17: '&cPrestige 7 &5Demigod'
Prestige 7 rank 17 short placeholder: '&c⚜ⅤⅠⅠ&6&l✧&eⅩⅤⅠⅠ'
Prestige 8 rank 0: '&9Prestige 8 &8Commoner'
Prestige 8 rank 0 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&e0'
Prestige 8 rank 1: '&9Prestige 8 &fRookie'
Prestige 8 rank 1 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅠ'
Prestige 8 rank 2: '&9Prestige 8 &fNovice'
Prestige 8 rank 2 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅠⅠ'
Prestige 8 rank 3: '&9Prestige 8 &fApprentice'
Prestige 8 rank 3 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅠⅠⅠ'
Prestige 8 rank 4: '&9Prestige 8 &2Adventurer'
Prestige 8 rank 4 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅠⅤ'
Prestige 8 rank 5: '&9Prestige 8 &2Journeyman'
Prestige 8 rank 5 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅤ'
Prestige 8 rank 6: '&9Prestige 8 &2Adept'
Prestige 8 rank 6 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅤⅠ'
Prestige 8 rank 7: '&9Prestige 8 &1Veteran'
Prestige 8 rank 7 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅤⅠⅠ'
Prestige 8 rank 8: '&9Prestige 8 &1Elite'
Prestige 8 rank 8 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅤⅠⅠⅠ'
Prestige 8 rank 9: '&9Prestige 8 &5Master'
Prestige 8 rank 9 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅠⅩ'
Prestige 8 rank 10 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩ'
Prestige 8 rank 10: '&9Prestige 8 &5Hero'
Prestige 8 rank 11: '&9Prestige 8 &5Legend'
Prestige 8 rank 11 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅠ'
Prestige 8 rank 12: '&9Prestige 8 &5Myth'
Prestige 8 rank 12 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅠⅠ'
Prestige 8 rank 13: '&9Prestige 8 &5Immortal'
Prestige 8 rank 13 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅠⅠⅠ'
Prestige 8 rank 14: '&9Prestige 8 &5Chosen'
Prestige 8 rank 14 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅠⅤ'
Prestige 8 rank 15: '&9Prestige 8 &5Ascendant'
Prestige 8 rank 15 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅤ'
Prestige 8 rank 16: '&9Prestige 8 &5Titan'
Prestige 8 rank 16 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅤⅠ'
Prestige 8 rank 17: '&9Prestige 8 &5Demigod'
Prestige 8 rank 17 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅤⅠⅠ'
Prestige 8 rank 18: '&9Prestige 8 &5Deity'
Prestige 8 rank 18 short placeholder: '&9⚜ⅤⅠⅠⅠ&6&l✧&eⅩⅤⅠⅠⅠ'
Prestige 9 rank 0: '&dPrestige 9 &8Commoner'
Prestige 9 rank 0 short placeholder: '&d⚜ⅠⅩ&6&l✧&e0'
Prestige 9 rank 1: '&dPrestige 9 &fRookie'
Prestige 9 rank 1 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅠ'
Prestige 9 rank 2: '&dPrestige 9 &fNovice'
Prestige 9 rank 2 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅠⅠ'
Prestige 9 rank 3: '&dPrestige 9 &fApprentice'
Prestige 9 rank 3 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅠⅠⅠ'
Prestige 9 rank 4: '&dPrestige 9 &2Adventurer'
Prestige 9 rank 4 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅠⅤ'
Prestige 9 rank 5: '&dPrestige 9 &2Journeyman'
Prestige 9 rank 5 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅤ'
Prestige 9 rank 6: '&dPrestige 9 &2Adept'
Prestige 9 rank 6 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅤⅠ'
Prestige 9 rank 7: '&dPrestige 9 &1Veteran'
Prestige 9 rank 7 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅤⅠⅠ'
Prestige 9 rank 8: '&dPrestige 9 &1Elite'
Prestige 9 rank 8 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅤⅠⅠⅠ'
Prestige 9 rank 9: '&dPrestige 9 &5Master'
Prestige 9 rank 9 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅠⅩ'
Prestige 9 rank 10 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩ'
Prestige 9 rank 10: '&dPrestige 9 &5Hero'
Prestige 9 rank 11: '&dPrestige 9 &5Legend'
Prestige 9 rank 11 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅠ'
Prestige 9 rank 12: '&dPrestige 9 &5Myth'
Prestige 9 rank 12 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅠⅠ'
Prestige 9 rank 13: '&dPrestige 9 &5Immortal'
Prestige 9 rank 13 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅠⅠⅠ'
Prestige 9 rank 14: '&dPrestige 9 &5Chosen'
Prestige 9 rank 14 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅠⅤ'
Prestige 9 rank 15: '&dPrestige 9 &5Ascendant'
Prestige 9 rank 15 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅤ'
Prestige 9 rank 16: '&dPrestige 9 &5Titan'
Prestige 9 rank 16 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅤⅠ'
Prestige 9 rank 17: '&dPrestige 9 &5Demigod'
Prestige 9 rank 17 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅤⅠⅠ'
Prestige 9 rank 18: '&dPrestige 9 &5Deity'
Prestige 9 rank 18 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅤⅠⅠⅠ'
Prestige 9 rank 19: '&dPrestige 9 &5Godhunter'
Prestige 9 rank 19 short placeholder: '&d⚜ⅠⅩ&6&l✧&eⅩⅠⅩ'
Prestige 10 rank 0: '&5Prestige 10 &8Commoner'
Prestige 10 rank 0 short placeholder: '&5⚜Ⅹ&6&l✧&e0'
Prestige 10 rank 1: '&5Prestige 10 &fRookie'
Prestige 10 rank 1 short placeholder: '&5⚜Ⅹ&6&l✧&eⅠ'
Prestige 10 rank 2: '&5Prestige 10 &fNovice'
Prestige 10 rank 2 short placeholder: '&5⚜Ⅹ&6&l✧&eⅠⅠ'
Prestige 10 rank 3: '&5Prestige 10 &fApprentice'
Prestige 10 rank 3 short placeholder: '&5⚜Ⅹ&6&l✧&eⅠⅠⅠ'
Prestige 10 rank 4: '&5Prestige 10 &2Adventurer'
Prestige 10 rank 4 short placeholder: '&5⚜Ⅹ&6&l✧&eⅠⅤ'
Prestige 10 rank 5: '&5Prestige 10 &2Journeyman'
Prestige 10 rank 5 short placeholder: '&5⚜Ⅹ&6&l✧&eⅤ'
Prestige 10 rank 6: '&5Prestige 10 &2Adept'
Prestige 10 rank 6 short placeholder: '&5⚜Ⅹ&6&l✧&eⅤⅠ'
Prestige 10 rank 7: '&5Prestige 10 &1Veteran'
Prestige 10 rank 7 short placeholder: '&5⚜Ⅹ&6&l✧&eⅤⅠⅠ'
Prestige 10 rank 8: '&5Prestige 10 &1Elite'
Prestige 10 rank 8 short placeholder: '&5⚜Ⅹ&6&l✧&eⅤⅠⅠⅠ'
Prestige 10 rank 9: '&5Prestige 10 &5Master'
Prestige 10 rank 9 short placeholder: '&5⚜Ⅹ&6&l✧&eⅠⅩ'
Prestige 10 rank 10 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩ'
Prestige 10 rank 10: '&5Prestige 10 &5Hero'
Prestige 10 rank 11: '&5Prestige 10 &5Legend'
Prestige 10 rank 11 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅠ'
Prestige 10 rank 12: '&5Prestige 10 &5Myth'
Prestige 10 rank 12 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅠⅠ'
Prestige 10 rank 13: '&5Prestige 10 &5Immortal'
Prestige 10 rank 13 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅠⅠⅠ'
Prestige 10 rank 14: '&5Prestige 10 &5Chosen'
Prestige 10 rank 14 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅠⅤ'
Prestige 10 rank 15: '&5Prestige 10 &5Ascendant'
Prestige 10 rank 15 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅤ'
Prestige 10 rank 16: '&5Prestige 10 &5Titan'
Prestige 10 rank 16 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅤⅠ'
Prestige 10 rank 17: '&5Prestige 10 &5Demigod'
Prestige 10 rank 17 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅤⅠⅠ'
Prestige 10 rank 18: '&5Prestige 10 &5Deity'
Prestige 10 rank 18 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅤⅠⅠⅠ'
Prestige 10 rank 19: '&5Prestige 10 &5Godhunter'
Prestige 10 rank 19 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅠⅩ'
Prestige 10 rank 20: '&5Prestige 10 &5Godslayer'
Prestige 10 rank 20 short placeholder: '&5⚜Ⅹ&6&l✧&eⅩⅩ'
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
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` allows admins to customize different aspects of the AntiExploit system. The AntiExploit system exists to prevent players from using things such as mob grinders to easily farm for coins and loot, and pushes them to do real fights and minidungeons instead of afk clicking their way to the top of the plugin.

This is a critical system to keep on if you don't want people to just afk grind the entire plugin and want to actually have them interact with minidungeons.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if the no path antiexploit is enabled
nPathExploit: true
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
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contains the config settings for the Combat Tag system. This system is still very far from being complete, but it attempts to manage player behavior once they enter combat.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the action message set while waiting for the teleport timer.
Teleport time left: '&7[EM] Teleporting in &a$time &7seconds...'
# Sets the message sent when players move while waiting for teleportation.
Teleport cancelled: '&7[EM] &cTeleport interrupted!'
# Sets if the combat tag is enabled.
# When enabled, flying players that engage in combat are set to stop flying.
Enable combat tag: true
# Sets the message sent when the combat tag is activated.
Combat tag message: '&c[EliteMobs] Combat tag activated!'
# Sets if the /ag command will have a timer before teleportation
Enable adventurers guild teleport timer: true
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contains the configuration settings for DiscordSRV. If you want to see how to configure this feature, [click here!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expand Table</b></summary>

```yml
# Documentation can be found here: https://github.com/MagmaGuy/EliteMobs/wiki/DiscordSRV---Discord-broadcasts
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contains the configuration settings for the EliteMobs economy.

<details>

<summary><b>Expand Table</b></summary>

```yml
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
# Send the message players get after looting currency. Useful for tutorial purposes.
adventurersGuildNotificationMessages: '&7[EM] Extra spending money? Try &a/em !'
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
  # Sets the default material worth for items not defined in this config.
  defaultMaterialWorth: 1.0
# Sets the tax rate for transactions between players.
# Strongly recommended for balance reasons, as high level players can gain up to 6x more currency and try to use other players to bypass prestige currency resets.
playerToPlayerPaymentTaxes: 0.2
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
# Sets the minimum cooldown, in minutes, between action events
actionEventMinimumCooldownMinutes: 240
# Sets if action events will happen.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Sets if timed events will happen.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: false
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contains the global settings for Elite items.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the message sent when a played kills a boss but the gear level is too different from the boss level to get coins
levelRangeTooDifferent: '&8EM] &4Your gear is level $playerLevel and the boss is level
  $bossLevel, level difference is too high to get coins!'
# Sets how much the chance of an elite item dropping increases based on the level of the boss.
# The level of the boss is multiplied by this value and added to the base chance.
# It is no longer recommended to have this above 0.0!
levelIncreaseDropRateV2: 0.0
# Sets the level of the maximum loot that will be dropped by EliteMobs. Strongly recommended to leave it at 200.
maximumItemLevel: 200
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
# Sets the message that will be sent to players if the durability left on an item is too low to be used in combat.
lowDurabilityItemDropMessage: '&8[EliteMobs] &cDropped armor due to low durability!
  &8Repair it at the NPC with scrap to use it!'
# Sets the characters prefixed to vanilla enchantments in item lore.
lowWeaponItemDropMessage: '&8[EliteMobs] &cDropped weapon due to low durability! &8Repair
  it at the NPC with scrap to use it!'
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
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contains all config options related to the custom combat system and most config options generally related to how Elite Mobs work.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the multiplier for the damage dealt to all bosses spawned by EliteMobs, except those using the normalized damage system (regional dungeon bosses). Higher values increase the damage dealt, making bosses easier to kill.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Sets the multiplier for the damage dealt to players by elites. Higher values increase the amount of damage dealt by bosses, except those using the normalized damage system (regional dungeon bosses), making bosses hit harder.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Sets the baseline damage for custom bosses using the normalized damage (usually regional bosses).
normalizedRegionalBossBaselineDamageV2: 3.0
# Sets the baseline health for custom bosses using the normalized health (usually regional bosses).
normalizedRegionalBossBaselineHealthV3: 4.0
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
# Sets the multiplier for the damage dealt to bosses using the normalized damage system (regional dungeon bosses). Higher values increase the damage dealt, making bosses easier to kill.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Sets the multiplier for the damage dealt to players by bosses using the normalized damage system (regional dungeon bosses). Higher values increase the amount of damage dealt by bosses, making bosses hit harder.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
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
# Sets if procedurally generated loot should be dropped
dropProcedurallyGeneratedItems: true
# Sets the chance percentage of procedural loot drops having enchantments
customEnchantmentsChance: 0.5
# Sets the display names of different materials
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
# Sets which name formats should be used for procedural loot
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
# Sets available nouns for the placeholder $noun
nouns:
- MagmaGuy
- Dawn
- Sunset
- Heaven
- Hell
- Angel
- Archangel
- Cherub
- Seraph
- Demon
- Fiend
- Bat
- Chicken
- Cow
- Mooshroom
- Pig
- Rabbit
- Sheep
- Squid
- Villager
- Cave Spider
- Enderman
- Polar Bear
- Spider
- Zombie Pigman
- Blaze
- Creeper
- Elder Guardian
- Endermite
- Evoker
- Ghast
- Guardian
- Husk
- Magma Cube
- Shulker
- Silverfish
- Skeleton
- Slime
- Stray
- Vex
- Vindicator
- Witch
- Wither Skeleton
- Zombie
- Donkey
- Horse
- Llama
- Mule
- Ocelot
- Wolf
- Iron Golem
- Snow Golem
- Ender Dragon
- Wither
- Illusioner
- Parrot
- Giant
- Killer Bunny
- Steve
- Wolfbane
- Chaos
- Aeon
- Dragon
- Sphynx
- Minotaur
- Hades
- Oath
- Oathbreaker
- Deserter
- Betrayer
- Jade
- Light
- Darkness
- Oblivion
- Shadow
- Void
- Xeno
- Zealot
- Zenith
- Dusk
- Twilight
- Mob
- Elite  Mob
- Urist
- Dwarf
- Elf
- Ork
- Goblin
- Gnome
- Goliath
- Drow
- Human
- Halfling
- Half-Orc
- Beholder
- Mind Flayer
- Owlbear
- Bulette
- Rust Monster
- Hill Giant
- Stone Giant
- Frost Giant
- Fire Giant
- Cloud Giant
- Storm Giant
- Kobold
- Lich
- Ork
- Umber Hulk
- Fighter
- Wizard
- Paladin
- Cleric
- Ranger
- Archer
- Mage
- Tiefling
- Werewolf
- Vampire
- Centaur
- Catfolk
- Half-Giant
- Ogre
- Troll
- Rogue
- Barbarian
- Bard
- Druid
- Monk
- Sorcerer
- Warlock
- Demon Hunter
- Death Knight
- Priest
- Shaman
- Warrior
- Basilisk
- Chimera
- Imp
- Dryad
- Gargoyle
- Djinni
- Efreeti
- Ghost
- Hobgoblin
- Hydra
- Kraken
- Lamia
- Medusa
- Mimic
- Mummy
- Pegasus
- Roc
- Satyr
- Tarrasque
- Abomination
- Ghoul
- Treant
- Unicorn
- Wraith
- Acolyte
- Gladiator
- Knight
- Gryphon
- Raider
- Scout
- Spy
- Thg
- Noble
- Guard
- Veteran
- Wyvern
- Abyssal
- Infernal
- Elemental
- Tauren
- Pandaren
- Sasquatch
- Forsaken
- Yeti
- Banshee
- Arachnid
- Undead
- Night Elf
- Blood Elf
- Draenei
- Worgen
- Warlord
- Witch
- Magi
- Sage
- Thief
- Assassin
- Templar
- Beastmaster
- Berserker
- Inventor
- Luchador
- Pirate
- Vanguard
- Voidblade
- Wisp
- Peasant
- Footman
- Swordsman
- Thrall
- Felhound
- Huntress
- Hunter
- Aarakorcra
- Aboleth
- Deva
- Planetar
- Solar
- Ankheg
- Azer
- Behir
- Death Tyrant
- Blight
- Bugbear
- Hugbear
- Bullywug
- Cambion
- Chuul
- Lich King
- Cockatrice
- Couatl
- Cyclops
- Titan
- Darkmantle
- Ancient One
- Demilich
- Balor
- Barlgura
- Chasme
- Dretch
- Glabrezu
- Goristro
- Hezrou
- Manes
- Marilith
- Nalfeshnee
- Quasit
- Vrock
- Yochlol
- Pit Fiend
- Lemure
- Dracolich
- Doppleganger
- Chromatic Dragon
- Drider
- Air Elemental
- Earth Elemental
- Fire Elemental
- Water Elemental
- Rohirrim
- Gondorian
- Empyrean
- Faerie Dragon
- Ettin
- Flumph
- Fomorian
- Dao
- Gnoll
- Parshendi
- Listener
- Spren
- Stormfather
- Rosharian
- Brightlord
- Highprince
- King
- Emperor
- Shardbearer
- Surgebinder
- Bondsmith
- Golem
- Gorgon
- Hag
- Harpy
- Hippogriff
- Homunculus
- State Alchemist
- Undying Soldier
- Jackalwere
- Nothic
- Oni
- Rakshasa
- Revenant
- Cultist
# Sets available adjectives for the placeholder $adjective
adjectives:
- Adorable
- Beautiful
- Clean
- Elegant
- Fancy
- Glamorous
- Handsome
- Long
- Magnificent
- Plain
- Quaint
- Sparkling
- Ugliest
- Red
- Orange
- Yellow
- Green
- Blue
- Purple
- Gray
- Black
- White
- Dead
- Odd
- Powerful
- Rich
- Vast
- Zealous
- Deafening
- Faint
- Melodic
- Quiet
- Thundering
- Whispering
- Hissing
- Ancient
- Fast
- Old
- Rapid
- Slow
- Rotten
- Creepy
- Crooked
- Empty
- Heavy
- Abhorrent
- Abnormal
- Absurd
- Acceptable
- Accidental
- Adamant
- Adventurous
- Agonizing
- Alert
- Annoyed
- Annoying
- Anxious
- Aromatic
- Aggressive
- Aloof
- Amazing
- Ambiguous
- Ambitious
- Amused
- Angry
- Arrogant
- Ashamed
- Aspiring
- Astonishing
- Auspicious
- Average
- Awesome
- Awful
- Bad
- Barbarous
- Bashful
- Beffiting
- Belligerent
- Beneficial
- Berserk
- Best
- Bewildered
- Big
- Bitter
- Bizarre
- Bloody
- Boiling
- Boundless
- Brash
- Brave
- Brawny
- Breakable
- Brief
- Bright
- Broken
- Busy
- Calculating
- Callous
- Calm
- Capricious
- Careful
- Careless
- Caring
- Cautious
- Ceaseless
- Certain
- Charming
- Cheap
- Chief
- Chilly
- Chivalrous
- Chunky
- Clear
- Clever
- Cloistered
- Clumsy
- Cloudy
- Classy
- Colossal
- Combative
- Common
- Confused
- Condemned
- Cool
- Courageous
- Cowardly
- Crazy
- Craven
- Cruel
- Cuddly
- Curious
- Cute
- Damaged
- Damaging
- Dangerous
- Dark
- Dashing
- Decisive
- Deep
- Defeated
- Defective
- Defiant
- Delicate
- Delicious
- Delightful
- Demonic
- Delirious
- Deranged
- Descriptive
- Devilish
- Difficult
- Diligent
- Direful
- Dirty
- Disastrous
- Disgusted
- Disgusting
- Disillusioned
- Distinct
- Disturbed
- Draconian
- Dramatic
- Dreary
- Dysfunctional
- Eager
- Elderly
- Electric
- Elite
- Enchanted
- Enchanting
- Energetic
- Enormous
- Entertaining
- Enthusiastic
- Envious
- Erratic
- Ethereal
- Evasive
- Excellent
- Excited
- Exciting
- Exotic
- Exuberant
- Fabulous
- Faded
- Fair
- Faithful
- 'False'
- Familiar
- Famous
- Fanatical
- Fantastic
- Fascinated
- Fat
- Fearful
- Fearless
- Feeble
- Festive
- Fierce
- Filthy
- Fine
- Finicky
- First
- Fixed
- Flashy
- Flawless
- Flimsy
- Flippant
- Flowery
- Fluffy
- Fluttering
- Foamy
- Foolish
- Forgetful
- Fortunate
- Frail
- Fragile
- Frantic
- Free
- Freezing
- Fresh
- Friendly
- Frightening
- Fumbling
- Funny
- Furry
- Furtive
- Fuzzy
- Giant
- Gifted
- Gigantic
- Glistening
- Glorious
- Godly
- Good
- Goofy
- Gorgeous
- Graceful
- Grandiose
- Grateful
- Greasy
- Great
- Greedy
- Grieving
- Groovy
- Grotesque
- Grubby
- Gruesome
- Grumpy
- Guarded
- Guiltless
- Gullible
- Gutsy
- Guttural
- Hallowed
- Hanging
- Hapless
- Happy
- Harmonious
- Hateful
- Healthy
- Heartbreaking
- Heavenly
- Hellish
- Helpful
- Helpless
- Hesitant
- Hideous
- Hilarious
- Hollow
- Homeless
- Honorable
- Horrible
- Hospitable
- Huge
- Hulking
- Humorous
- Hungry
- Hurt
- Hushed
- Hypnotic
- Hysterical
- Icky
- Icy
- Ignorant
- Ill
- Illegal
- Illustrious
- Imaginary
- Immense
- Imminent
- Impartial
- Imperfect
- Impolite
- Important
- Incandescent
- Incompetent
- Industrious
- Incredible
- Inexpensive
- Infamous
- Innocent
- Inquisitive
- Insidious
- Instinctive
- Intelligent
- Interesting
- Invincible
- Irate
- Itchy
- Jaded
- Jagged
- Jealous
- Jolly
- Joyous
- Jumpy
- Juvenile
- Keen
- Kind
- Kindhearted
- Knowing
- Knowledgeable
- Known
- Labored
- Lame
- Large
- Last
- Late
- Laughable
- Lazy
- Lean
- Lethal
- Light
- Little
- Living
- Lonely
- Loud
- Lovely
- Lucky
- Magenta
- Magical
- Majestic
- Malicious
- Marked
- Massive
- Marvelous
- Mean
- Medical
- Melted
- Messy
- Mighty
- Military
- Mindless
- Minor
- Misty
- Mixed
- Modern
- Motionless
- Mysterious
- Naive
- Narrow
- Natural
- Neat
- Necessary
- Needless
- Needy
- Nervous
- New
- Nice
- Normal
- Nostalgic
- Numberless
- Obsolete
- Obtainable
- Oceanic
- Old-fashioned
- Omniscient
- Optimal
- Ordinary
- Organic
- Outstanding
- Oval
- Overrated
- Painful
- Parallel
- Pathetic
- Peaceful
- Penitent
- Perfect
- Periodic
- Petite
- Physical
- Pink
- Plastic
- Pleasant
- Pointless
- Polite
- Poor
- Precious
- Premium
- Present
- Pretty
- Private
- Productive
- Protective
- Public
- Puzzling
- Questionable
- Quick
- Quickest
- Rare
- Ready
- Real
- Rebel
- Regular
- Remarkable
- Responsible
- Romantic
- Round
- Royal
- Sad
- Safe
- Salty
- Satisfying
- Scared
- Scary
- Scientific
- Scrawny
- Screeching
- Second
- Second-hand
- Secret
- Selfish
- Sequacious
- Serious
- Shallow
- Sharp
- Shiny
- Shocking
- Short
- Shy
- Sick
- Silent
- Silky
- Silly
- Simple
- Skinny
- Slim
- Slimy
- Slippery
- Small
- Smart
- Smiling
- Smooth
- Sneaky
- Soft
- Solid
- Special
- Spectacular
- Spicy
- Spiky
- Splendid
- Spooky
- Spotless
- Square
- Staking
- Standing
- Steady
- Sticky
- Strange
- Striped
- Strong
- Successful
- Super
- Supreme
- Sweet
- Talented
- Tall
- Tasty
- Temporary
- Tense
- Terrible
- Terrific
- Tested
- Thankful
- Thick
- Thin
- Thirsty
- Thoughtful
- Tiny
- Tired
- Tricky
- Troubled
- 'True'
- Ugly
- Ultra
- Unadvised
- Unarmed
- Uncovered
- Unhealthy
- Unique
- Unknown
- Unnatural
- Unused
- Unusual
- Used
- Useful
- Useless
- Valuable
- Violent
- Waiting
- Wandering
- Warm
- Weak
- Wealthy
- Whole
- Wise
- Wonderful
- Wooden
- Worried
- Worthless
- Wrong
- Menacing
- Trusting
- Unassuming
- Threatening
# Sets available verbs for the placeholder $verb
verbs:
- Slashing
- Cutting
- Stabbing
- Scratching
- Killing
- Slaying
- Butchering
- Destroying
- Tickling
- Hugging
- Murdering
- Slapping
- Hissing
- Traveling
- Teleporting
- Blinking
- Destroying
- Wrecking
- Flashing
- Materializing
- Spawning
- Questioning
- Inquiring
- Pleading
- Demanding
- Interrogating
- Querying
- Assaulting
- Striking
- Ambushing
- Assailing
- Rushing
- Storming
- Bombarding
- Barraging
- Smiting
- Charging
- Clobbering
- Battling
- Battering
- Hammering
- Beating
- Combating
- Overwhelming
- Raiding
- Tackling
- Shooting
- Venturing
- Cracking
- Rupturing
- Smashing
- Shattering
- Fracturing
- Splintering
- Pulverizing
- Tearing
- Rending
- Snapping
- Bursting
- Exploding
- Damaging
- Fragmenting
- Splitting
- Fortifying
- Nudging
- Tapping
- Jostling
- Thumping
- Butting
- Clattering
- Striking
- Whacking
- Slamming
- Summoning
- Screaming
- Bellowing
- Roaring
- Shifting
- Transforming
- Modifying
- Twisting
- Mutating
- Distorting
- Blurring
- Adjusting
- Warping
- Altering
- Adapting
- Evolving
- Varying
- Hunting
- Trailing
- Following
- Stalking
- Shadowing
- Hounding
- Casing
- Mounting
- Ascending
- Rising
- Heaving
- Springing
- Cresting
- Gathering
- Corralling
- Hoarding
- Reaping
- Harvesting
- Saving
- Sheltering
- Cloaking
- Shrouding
- Enclosing
- Concealing
- Hiding
- Disguising
- Masking
- Burying
- Smothering
- Clouding
- Shielding
- Shading
- Sealing
- Enveloping
- Veiling
- Obscuring
- Traversing
- Fording
- Gliding
- Howling
- Whimpering
- Screaming
- Shrieking
- Squealing
- Roaring
- Wailing
- Bawling
- Screeching
- Cleaving
- Chopping
- Chipping
- Severing
- Slicing
- Snipping
- Splitting
- Axing
- Slashing
- Rending
- Tearing
- Thinning
- Cropping
- Carving
- Dissecting
- Hacking
- Piercing
- Sawing
- Shaving
- Shearing
- Mining
- Delving
- Excavating
- Burrowing
- Drilling
- Hollowing
- Gouging
- Tunneling
- Invading
- Boarding
- Wandering
- Infiltrating
- Intruding
- Evading
- Fleeing
- Running
- Dodging
- Crashing
- Battling
- Tussling
- Wrestling
- Scuffling
- Dueling
- Brawling
- Jousting
- Sparring
- Clashing
- Warring
- Grappling
- Scrapping
- Attacking
- Feuding
- Skirmishing
- Discovering
- Detecting
- Catching
- Solving
- Revealing
- Unearthing
- Leaping
- Bouncing
- Springing
- Vaulting
- Hopping
- Surging
- Punting
- Booting
- Dropkicking
- Sensing
- Perceiving
- Detecting
- Fading
- Bleeding
- Shrinking
- Weakening
- Abating
- Diminishing
- Forging
- Releasing
- Gathering
- Collecting
- Culling
- Crushing
- Propelling
- Jogging
- Sprinting
- Questing
- Scouting
- Exploring
- Digging
- Trembling
- Rattling
- Parting
- Hacking
- Rupturing
- Carving
- Dividing
- Halving
- Breaking
- Sundering
- Separating
- Rending
- Ripping
- Grazing
- Imprisoning
- Snaring
- Cornering
- Entangling
- Pinning
- Catching
- Restraining
- Binding
- Hooking
- Snagging
- Snatching
- Caging
- Capturing
- Haunting
- Creeping
- Sneaking
- Spying
- Avenging
- Storming
verb-ers (noun):
- World Breaker
- World Shatterer
- Avenger
- Ashbringer
- Windseeker
- Defiler
- Thunderfury
- Slicer
- Slasher
- Cutter
- Stabber
- Scratcher
- Killer
- Slayer
- Destroyer
- Hugger
- Murderer
- Slapper
- Traveller
- Teleporter
- Blinker
- Wrecker
- Materializer
- Spawner
- Demander
- Assaulter
- Striker
- Ambusher
- Rusher
- Stormer
- Bombarder
- Barrager
- Smiter
- Charger
- Battler
- Hammerer
- Beater
- Combater
- Overwhelmer
- Raider
- Tackler
- Shooter
- Venturer
- Cracker
- Smasher
- Shatterer
- Fracturer
- Splinterer
- Pulverizer
- Tearer
- Renderer
- Snapper
- Burster
- Exploder
- Damager
- Fragmenter
- Splitter
- Fortifier
- Nudger
- Tapper
- Thumper
- Butter
- Clatterer
- Striker
- Whacker
- Slammer
- Summoner
- Screamer
- Shifter
- Transformer
- Modifyer
- Twister
- Blurrer
- Warper
- Alterer
- Adapter
- Evolver
- HunterEnchantment
- Trailer
- Follower
- Stalker
- Shadower
- Hounder
- Caser
- Mounter
- Ascender
- Riser
- Springer
- Hoarder
- Reaper
- Harvester
- Saver
- Shelterer
- Cloaker
- Shrouder
- Encloser
- Hider
- Masker
- Buryer
- Clouder
- Shader
- Sealer
- Enveloper
- Veiler
- Traverser
- Forder
- Glider
- Howler
- Whimperer
- Screamer
- Squealer
- Bawler
- Screecher
- Chopper
- Chipper
- Snipper
- Splitter
- Axer
- Slasher
- Renderer
- Tearer
- Thinner
- Cropper
- Carver
- Hacker
- Piercer
- Sawer
- Shaver
- Shearer
- Miner
- Excavater
- Burrower
- Driller
- Tunneler
- Invader
- Boarder
- Wanderer
- Intruder
- Evader
- Runner
- Dodger
- Crasher
- Battler
- Wrestler
- Scuffler
- Dueler
- Brawler
- Clasher
- Grappler
- Scrapper
- Attacker
- Feuder
- Catcher
- Solver
- Revealer
- Leaper
- Bouncer
- Vaulter
- Hopper
- Surger
- Punter
- Dropkicker
- Perceiver
- Fader
- Bleeder
- Weakener
- Forger
- Releaser
- Gatherer
- Crusher
- Propeller
- Jogger
- Sprinter
- Scouter
- Explorer
- Digger
- Trembler
- Parter
- Hacker
- Carver
- Divider
- Halver
- Breaker
- Renderer
- Ripper
- Grazer
- Imprisoner
- Cornerer
- Pinner
- Catcher
- Restrainer
- Binder
- Snagger
- Snatcher
- Cager
- Capturer
- Haunter
- Creeper
- Sneaker
- Binder
- Jailer
- Seducer
- Dancer
- Blasphemer
- Eater
- Snorer
- Thruster
- Slapper
# Sets materials that can be used for procedural loot
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

## translation.yml

`translation.yml` contains a collection of values which can be modified to customize and translate the plugin. These are self-explanatory.

<details>

<summary><b>Expand Table</b></summary>

```yml
Economy pay message v2: '&2You have paid &2$amount_sent $currency_name &2to $receiver&2,
  who got $amount_received after taxes!'
Economy currency left message: You now have &2$amount_left $currency_name
Economy money from payment message: You have received &2$amount_received $currency_name
  &ffrom $sender
Economy payment insuficient currency: '&cYou don''t have enough $currency_name to
  do that!'
Wallet command message: You have &2$balance $currency_name
Tax confirmation message: '&cSending a payment will cost $percentage% in taxes. &aDo
  &9$command &ato proceed!'
shopBatchSellItem: '&aYou have sold your items &afor $currency_amount $currency_name!'
Shop buy message: '&aYou have bought $item_name &afor $item_value $currency_name!'
Shop current balance message: '&aYou have $currency_amount $currency_name.'
Shop insufficient funds message: '&cYou don''t have enough $currency_name!'
Shop item cost message: That item costs &c$item_value $currency_name.
Shop sell message: '&aYou have sold $item_name &afor $currency_amount $currency_name!'
Shop sale player items warning: '&cYou can''t sell items that are not currently soulbound
  to you! This includes items from other prestige tiers!'
Shop sale instructions: '&cYou can only sell EliteMobs loot here! (Armor / weapons
  dropped from elites showing a value on their lore)'
Teleport time left: '&7[EM] Teleporting in &a$time &7seconds...'
Teleport cancelled: '&7[EM] &cTeleport interrupted!'
noPendingCommands: '&cYou don''t currently have any pending commands!'
trackMessage: Track the $name
chestLowRankMessage: '&7[EM] &cYour guild rank needs to be at least $rank &cin order
  to open this chest!'
chestCooldownMessage: '&7[EM] &cYou''ve already opened this chest recently! Wait $time!'
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cInsufficient currency! You
  need $amount to use this com.magmaguy.elitemobs.wormhole!'
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fmenu not working for you? Try &2/elitemobs
  alt &fto see an alternative version of the menu! &cDon''t want to see this message
  again? &4/em dismiss'
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fmenu style changed! Check it out!'

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