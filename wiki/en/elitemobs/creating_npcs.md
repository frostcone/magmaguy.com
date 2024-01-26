[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)


| Key |                                                   Description                                                   |                                              Values                                               | Default |
|-|:---------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------:|:-:|
| `isEnabled` |                                            Sets if an NPC is enabled                                            |                                         `true` / `false`                                          | `true` |
| `name` |                     Sets the display name of an NPC. Supports [Color Codes](#color_codes).                      |                                         [String](#string)                                         | none |
| `role` |                             Sets the role of the NPC, under the name. Only visual. Supports [Color Codes](#color_codes)                             |                                         [String](#string)                                         | none |
| `profession` |                  Sets the profession of the NPC, which sets its skin when not using a disguise                  | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | `NITWIT`|
| `greetings` |                         Sets the list of greeting the NPC says when a player approaches                         |                                    [String List](#string_list)                                    | none |
| `dialog` |                                Sets the dialog says while a player is nearby [1]                                |                                    [String List](#string_list)                                    | none |
| `farewell`|                                      Sets the farewell message of the NPC                                       |                                    [String List](#string_list)                                    | none |
| `canTalk` |                                            Sets if the NPC can talk                                             |                                         `true` / `false`                                          | true |
| `activationRadius` |                         Sets the radius at which an NPC can detect a player approaching                         |                                         [Double](#double)                                         | `3` |
| `interactionType` |                                  Sets the type of interaction the NPC will do                                   |                                            Special [2]                                            | `NONE` |
| `timeout` |                     Sets the amount of time, in minutes, before an NPC vanishes permanently                     |                                        [Integer](#integer)                                        | `0` (never) |
| `questFileName` |                                          Sets the quests the NPC gives                                          |                                    [String List](#string_list)                                    | none |
| `disguise` |                                   Sets the LibsDisguises disguise the NPC has                                   |                   [LibsDisguises format]($language$/elitemobs/libsdisguises.md)                   | none |
| `customDisguiseData` |                                Sets the data for a custom LibsDisguises diguise                                 |   [LibsDisguises format]($language$elitemobs/libsdisguises.md%2.-generating-the-disguise-data)    | none |
| `customModel` |                               Sets the ModelEngine custom model the NPC will use                                |                                         [String](#string)                                         | none |
| `arena` |      Sets the filename of the arena the NPC will open a menu for (requires the `ARENA_MASTER` interaction)      |                                         [String](#string)                                         | none |
| `command` |                       Sets the command the NPC will run (requires `COMMAND` interaction)                        |                                         [String](#string)                                         | none |
| `spawnLocation` | Sets the spawn locations of the NPCs. You should set this through the `/em spawnnpc <npcfilename.yml>` command! |                                    [String List](#string_list)                                    | none |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cRed Rubin"
role: "&a<Generic NPC>"
profession: NITWIT
greetings:
  - Hiya!
  - Hello!
dialog:
  - Great conversation!
  - Pleasure talking with you!
farewell:
  - Goodbye!
  - Laters!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName: 
- my_quest.yml #npc interactionType must be set to CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #used when a custom libsdisguise is being set
customModel: MODEL_ONE
arena: my_arena.yml #npc interactionType must be set to ARENA_MASTER
command: /say Hello World! #npc interactionType must be set to COMMAND
spawnLocation: my_world,584,55,127,90,10 #remember that NPCs use pitch and yaw to set where they are looking at. this is also automatically set when running the /em spawnnpc <npcfilename.yml> command, so make sure you pose where you want the NPC to be facing when running the command.
```

<div align="center">

![create_boss_mounted.jpg](..%2F..%2F..%2Fimg%2Fwiki%2Fcreate_npc_npc.jpg)

</div>

</div>

</details>

[1] In case of the DIALOG interaction, this is the dialog.

[2] The following is the list of valid NPC interaction types:

| Type                          |                                Description                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Open the adventurer's guild menu                      |
| `CHAT`                        |                Right-clicking cycles through the `dialog`                 |
| `CUSTOM_SHOP`                 |                        Opens the custom shop menu                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Opens the procedurally generated shop                   |
| `BAR`                         |                            Opens the bar menu                             |
| `ARENA`                       |                           Opens the arena menu                            |
| `QUEST_GIVER`                 |               Opens the procedurally generated quests menu                |
| `CUSTOM_QUEST_GIVER`          |     Opens the quest menu for a specific quest set in `questFilenames`     |
| `NONE`                        |                              No interactions                              |
| `SELL`                        |                            Opens the sell menu                            |
| `TELEPORT_BACK`               | Teleports players back to the last non-elitemobs world location they were |
| `SCRAPPER`                    |                           Opens the scrap menu                            |
| `REPAIRMAN`                   |                           Opens the repair menu                           |
| `ENCHANTER`                   |                          Opens the enchant menu                           |
| `REFINER`                     |                          Opens the refiner menu                           |
| `UNBINDER`                    |                           Opens the unbind menu                           |
| `ARENA_MASTER`                |         Opens the arena menu for the arena set in `arenaFilename`         |
| `COMMAND`                     |                     Runs the command set in `command`                     |

*For more information on what the SCRAPPER and similar interaction types do click [here]($language$/elitemobs/item_upgrade_system.md).*