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
instancedDungeonTitle: Start $difficulty difficulty dungeon!
instancedDungeonDescription:
- '&fCreate a new instance of the dungeon'
- $dungeonName &ffor youreself and maybe
- '&fsome friends!'
treasureChestNoDropMessage: '&8[EliteMobs] &cYou didn''t get anything! Better luck
  next time!'
allowSpectatorsInInstancedContent: true
noPendingCommands: '&cYou don''t currently have any pending commands!'
trackMessage: Track the $name
chestLowRankMessage: '&7[EM] &cYour guild rank needs to be at least $rank &cin order
  to open this chest!'
chestCooldownMessage: '&7[EM] &cYou''ve already opened this chest recently! Wait $time!'
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &fmenu not working for you? Try &2/elitemobs
  alt &fto see an alternative version of the menu! &cDon''t want to see this message
  again? &4/em dismiss'
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &fmenu style changed! Check it out!'
alwaysShowEliteMobNameTags: false
superMobStackAmount: 50
preventEliteCreeperDamageToPassiveMobs: true
useTitlesForMissingPermissionMessages: true
preventEliteMobConversionOfNamedMobs: true
enableHighCompatibilityMode: false
nightmareWorldSpawnBonus: 0.5
emLeadsToStatusMenu: true
otherCommandsLeadToEMStatusMenu: true
setupDoneV3: true
preventVanillaReinforcementsForEliteEntities: true
defaultSpawnLocation: world,0.0,99.0,0.0,0.0,0.0
doExplosionRegen: true
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
onlyUseBedrockMenus: false
characterLimitForBookMenuPages: 185
useGlassToFillMenuEmptySpace: false
menuUnicodeFormatting: false
language: english
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contains config settings relevant to both the Adventurer's Guild Hub (the world), and settings relevant to the Adventurer's Guild rankup system.

<details>

<summary><b>Expand Table</b></summary>

```yml
Add max health when unlocking higher guild ranks: true
Add critical chance when unlocking higher guild ranks: true
Add dodge chance when unlocking higher guild ranks: true
guildHubIsEnabledv2: true
Adventurer's Guild world name v3: em_adventurers_guild
Guild world coordinates: 208.5,88,236.5,-80,0
userCommandsTeleportToAdventurersGuild: true
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
limitLootBasedOnGuildTier: true
lootLimiterMessage: '&7[EM] &cYou must unlock the next guild rank through /ag to loot
  better items!'
onRankUpCommand: []
onPrestigeUpCommand: []
dodgePrestige3Bonus: 3.0
dodgePrestige6Bonus: 6.0
dodgePrestige9Bonus: 10.0
critPrestige2Bonus: 3.0
critPrestige5Bonus: 6.0
critPrestige8Bonus: 10.0
healthPrestige1Bonus: 2.0
healthPrestige4Bonus: 2.5
healthPrestige7Bonus: 3.0
healthPrestige10Bonus: 4.0
baseKillsForRankUp: 100
additionalKillsForRankUpPerTier: 50
prestigeUnlockMessageTitle: $player
prestigeUnlockMessageSubtitle: '&2has unlocked $tier&2!'
peacefulModeEliteChanceDecrease: 0.2
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
AntiExploit message: '&c[EM AntiExploit] &7Nearby elite won''t drop special loot.'
Enable darkroom antiexploit 1: true
Enable darkroom antiexploit 2: true
Enable darkroom antiexploit 3: true
Enable large darkroom antiexploit 1: true
Enable large darkroom antiexploit 2: true
Enable large darkroom antiexploit 3: true
Enable enderman height antiexploit: true
Enable mount antiexploit: true
Enable tower antiexploit: true
preventItemPickupByMobs: true
Enable ambient damage antiexploit: true
Enable honey block antiexploit: true
antiExploitThreshold: 10
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contains the config settings for the Combat Tag system. This system is still very far from being complete, but it attempts to manage player behavior once they enter combat.

<details>

<summary><b>Expand Table</b></summary>

```yml
Teleport time left: '&7[EM] Teleporting in &a$time &7seconds...'
Teleport cancelled: '&7[EM] &cTeleport interrupted!'
Enable combat tag: true
Combat tag message: '&c[EliteMobs] Combat tag activated!'
Enable adventurers guild teleport timer: true
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contains the configuration settings for DiscordSRV. If you want to see how to configure this feature, [click here!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expand Table</b></summary>

```yml
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS
```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contains the configuration settings for the EliteMobs economy.

<details>

<summary><b>Expand Table</b></summary>

```yml
Economy pay message v2: '&2You have paid &2$amount_sent $currency_name &2to $receiver&2,
  who got $amount_received after taxes!'
Economy currency left message: You now have &2$amount_left $currency_name
Economy money from payment message: You have received &2$amount_received $currency_name
  &ffrom $sender
Economy payment insufficient currency: '&cYou don''t have enough $currency_name to
  do that!'
Wallet command message: You have &2$balance $currency_name
Tax confirmation message: '&cSending a payment will cost $percentage% in taxes. &aDo
  &9$command &ato proceed!'
Shop buy message: '&aYou have bought $item_name &afor $item_value $currency_name!'
Shop current balance message: '&aYou have $currency_amount $currency_name.'
Shop insufficient funds message: '&cYou don''t have enough $currency_name!'
Shop item cost message: That item costs &c$item_value $currency_name.
Shop sell message: '&aYou have sold $item_name &afor $currency_amount $currency_name!'
Shop sale player items warning: '&cYou can''t sell items that are not currently soulbound
  to you! This includes items from other prestige tiers!'
Shop sale instructions: '&cYou can only sell EliteMobs loot here! (Armor / weapons
  dropped from elites showing a value on their lore)'
shopBatchSellItem: '&aYou have sold your items &afor $currency_amount $currency_name!'
enableEconomy: true
itemResaleValue: 5.0
currencyName: Elite Coins
useVault - not recommended: false
enableCurrencyShower: true
currencyShowerTierMultiplier: 1.0
chatCurrencyShowerMessage: '&7[EM] You''ve picked up &a$amount $currency_name!'
actionbarCurrencyShowerMessage: '&7[EM] You''ve picked up &a$amount $currency_name!'
lootShowerMaterial:
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
adventurersGuildNotificationMessages: '&7[EM] Extra spending money? Try &a/em !'
materialWorth:
  DIAMOND_AXE: 17.0
  DIAMOND_BOOTS: 17.0
  DIAMOND_CHESTPLATE: 17.0
  DIAMOND_LEGGINGS: 17.0
  DIAMOND_HELMET: 17.0
  DIAMOND_PICKAXE: 17.0
  DIAMOND_SHOVEL: 17.0
  DIAMOND_SWORD: 17.0
  DIAMOND_HOE: 17.0
  IRON_AXE: 16.0
  IRON_BOOTS: 16.0
  IRON_LEGGINGS: 16.0
  IRON_CHESTPLATE: 16.0
  IRON_HELMET: 16.0
  IRON_PICKAXE: 16.0
  IRON_SHOVEL: 16.0
  IRON_HOE: 16.0
  IRON_SWORD: 16.0
  SHIELD: 16.0
  BOW: 16.0
  CHAINMAIL_BOOTS: 15.0
  CHAINMAIL_LEGGINGS: 15.0
  CHAINMAIL_CHESTPLATE: 15.0
  CHAINMAIL_HELMET: 15.0
  STONE_SWORD: 15.0
  STONE_AXE: 15.0
  STONE_PICKAXE: 15.0
  STONE_SHOVEL: 15.0
  STONE_HOE: 15.0
  GOLDEN_AXE: 13.0
  GOLDEN_BOOTS: 13.0
  GOLDEN_LEGGINGS: 13.0
  GOLDEN_CHESTPLATE: 13.0
  GOLDEN_HELMET: 13.0
  GOLDEN_SWORD: 13.0
  GOLDEN_SHOVEL: 13.0
  GOLDEN_PICKAXE: 13.0
  GOLDEN_HOE: 13.0
  GOLDEN_APPLE: 17.0
  ENCHANTED_GOLDEN_APPLE: 17.0
  LEATHER_BOOTS: 13.0
  LEATHER_LEGGINGS: 13.0
  LEATHER_CHESTPLATE: 13.0
  LEATHER_HELMET: 13.0
  WOODEN_SWORD: 13.0
  WOODEN_AXE: 13.0
  WOODEN_HOE: 13.0
  WOODEN_PICKAXE: 13.0
  TRIDENT: 17.0
  ELYTRA: 17.0
  TURTLE_HELMET: 13.0
  NETHERITE_AXE: 18.0
  NETHERITE_PICKAXE: 18.0
  NETHERITE_SHOVEL: 18.0
  NETHERITE_HOE: 18.0
  NETHERITE_SWORD: 18.0
  NETHERITE_HELMET: 18.0
  NETHERITE_CHESTPLATE: 18.0
  NETHERITE_LEGGINGS: 18.0
  NETHERITE_BOOTS: 18.0
defaultMaterialWorth: 1.0
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
Only broadcast event message in event worlds: false
actionEventMinimumCooldownMinutes: 240
actionEventsEnabled: true
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contains the global settings for Elite items.

<details>

<summary><b>Expand Table</b></summary>

```yml
levelRangeTooDifferent: '&8EM] &4Your gear is level $playerLevel and the boss is level
  $bossLevel, level difference is too high to get coins!'
levelIncreaseDropRateV2: 0.0
maximumItemLevel: 200
doEliteMobsLoot: true
doMMORPGColorsForItems: true
preventCustomItemPlacement: true
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
shopSourceItemLores: '&7Purchased from a store'
mobSourceItemLores: '&7Looted from $mob'
loreWorths: '&7Worth $worth $currencyName'
loreResaleValues: '&7Sells for $resale $currencyName'
flatDropRateV3: 0.2
regionalBossNonUniqueDropRate: 0.05
regionalBossesDropVanillaLoot: false
proceduralItemDropWeight: 90.0
weighedItemDropWeight: 1.0
fixedItemDropWeight: 10.0
limitedItemDropWeight: 3.0
scalableItemDropWeight: 6.0
defaultLootMultiplier: 0.0
levelCapForDefaultLootMultiplier: 200
defaultExperienceMultiplier: 1.0
useEliteEnchantments: true
eliteEnchantmentLoreStrings: Elite
useHoesAsWeapons: false
enableRareItemParticleEffects: true
potionEffectOnHitTargetLore: '&4⚔☠'
potionEffectOnHitSelfLore: '&9⚔🛡'
potionEffectContinuousLore: '&6⟲'
eliteEnchantmentLoreColor: '&9◇'
vanillaEnchantmentLoreColor: '&7◇'
customEnchantmentColor: '&3◇'
potionEffectLoreColor: '&5◇'
noSoulbindLore: '&7Not Soulbound!'
preventEliteItemEnchantment: true
preventEliteItemDisenchantment: true
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Can''t disenchant Elite Items!'
preventEliteItemDiamondToNetheriteUpgrade: true
eliteItemsDurabilityLossOnlyOnDeath: true
eliteItemsDurabilityLossMultiplier: 1.0
scrapSucceededMessageV2: '&8[EliteMobs] &2Scrapping succeeded $amount times!'
scrapFailedMessageV2: '&8[EliteMobs] &cScrapping failed $amount times!'
putLootDirectlyIntoPlayerInventory: false
lootLevelDifferenceLockout: 10
preventEliteItemsFromBreaking: true
lowDurabilityItemDropMessage: '&8[EliteMobs] &cDropped armor due to low durability!
  &8Repair it at the NPC with scrap to use it!'
lowWeaponItemDropMessage: '&8[EliteMobs] &cDropped weapon due to low durability! &8Repair
  it at the NPC with scrap to use it!'
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
simlootMessageSuccess: '&8[EliteMobs] &2Rolled for loot and got $itemName &2!'
simlootMessageFailure: '&8[EliteMobs] &cRolled for loot and got nothing!'
directDropCustomLootMessage: '&8[EliteMobs] &2Obtained $itemName &2!'
directDropMinecraftLootMessage: '&8[EliteMobs] &aObtained $itemName &a!'
directDropCoinMessage: '&8[EliteMobs] &aObtained &2$amount $currencyName &a!'
hideItemAttributes: true
weaponEntry: '&7Elite DPS: &2$EDPS'
armorEntry: '&7Elite Armor: &2$EDEF'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contains all config options related to the custom combat system and most config options generally related to how Elite Mobs work.

<details>

<summary><b>Expand Table</b></summary>

```yml
damageToEliteMobMultiplierV2: 1.0
damageToPlayerMultiplierV2: 1.0
normalizedRegionalBossBaselineDamageV2: 3.0
normalizedRegionalBossBaselineHealthV3: 4.0
doNaturalEliteMobSpawning: true
doSpawnersSpawnEliteMobs: false
eliteMobsSpawnPercentage: 0.05
superMobStackRange: 15
naturalEliteMobsLevelCap: 250
doElitesWearArmor: true
doElitesWearHelmets: true
doNaturalEliteMobVisualEffects: true
doSpawnerEliteMobVisualEffects: false
doPowerBuildupVisualEffects: true
doCustomEliteMobsDeathMessages: true
doDisplayMobHealthOnHit: true
doDisplayMobDamageOnHit: true
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
distanceBetweenIncrements: 100.0
levelIncreaseAtIncrements: 1.0
hideEliteMobPowersUntilAggro: true
damageToEliteMobMultiplier: 1.0
damageToPlayerMultiplier: 1.0
showCustomBossLocation: true
bossLocationMessage: '&7[EM] &2[Click to track!]'
commandsOnEliteMobDeath: []
bossKillParticipationMessage: '&eYour damage: &2$playerDamage'
regenerateCustomBossHealthOnCombatEnd: true
defaultOtherWorldBossLocationMessage: '$name: In different world!'
weakTextColor: '&9'
resistTextColor: '&c'
weakText: '&9&lWeak!'
resistText: '&c&lResist!'
doWeakEffect: true
doResistEffect: true
normalizeRegionalBosses: true
fullHealMessage: '&2FULL HEAL!'
strengthAndWeaknessDamageMultipliers: 2.0
resistanceDamageMultiplier: 1.0
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
zoneBasedWorlds: []
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>