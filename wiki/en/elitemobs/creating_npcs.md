[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

| Key | Description |Values | Default |
|-|:-:|:-:|:-:|
| `isEnabled` | Sets if an NPC is enabled | `true` / `false` | `true` |
| `name` | Sets the display name of an NPC | STRING | none |
| `role` | Sets the role of the NPC, under the name. Only visual. | STRING | none |
| `profession` | Sets the profession of the NPC, which sets its skin when not using a disguise | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | `NITWIT`|
| `greetings` | Sets the list of greeting the NPC says when a player approaches | STRING LIST | none |
| `dialog` | Sets the dialog says while a player is nearby [1] | STRING LIST | none |
| `farewell`| Sets the farewell message of the NPC | STRING LIST | none |
| `canTalk` | Sets if the NPC can talk | `true` / `false` | true |
| `activationRadius` | Sets the radius at which an NPC can detect a player approaching | DOUBLE | `3` |
| `interactionType` | Sets the type of interaction the NPC will do | Special [2] | `NONE` |
| `timeout` | Sets the amount of time, in minutes, before an NPC vanishes permanently | INTEGER | `0` (never) |
| `questFileName` | Sets the quests the NPC gives | STRING LIST | none |
| `disguise` | Sets the LibsDisguises disguise the NPC has | [LibsDisguises format](https://github.com/MagmaGuy/EliteMobs/wiki/LibsDisguises-&-Disguising-Custom-Bosses) | none |
| `customDisguiseData` | Sets the data for a custom LibsDisguises diguise | [LibsDisguises format](https://github.com/MagmaGuy/EliteMobs/wiki/LibsDisguises-&-Disguising-Custom-Bosses#2-generating-the-disguise-data) | none |
| `customModel` | Sets the ModelEngine custom model the NPC will use | STRING | none |
| `arena` | Sets the filename of the arena the NPC will open a menu for (requires the `ARENA_MASTER` interaction) | STRING | none |
| `command` | Sets the command the NPC will run (requires `COMMAND` interaction) | STRING | none |
| `spawnLocation` | Sets the spawn locations of the NPCs. You should set this through the `/em spawnnpc <npcfilename.yml>` command! | STRING LIST | none |

[1] In case of the DIALOG interaction, this is the dialog.

[2] The following is the list of valid NPC interaction types:

| Type | Description |
|-|:-:|
| `GUILD_GREETER` | Open the adventurer's guild menu |
| `CHAT` | Right-clicking cycles through the `dialog` |
| `CUSTOM_SHOP` | Opens the custom shop menu |
| `PROCEDURALLY_GENERATED_SHOP` | Opens the procedurally generated shop |
| `BAR` | Opens the bar menu |
| `ARENA` | Opens the arena menu |
| `QUEST_GIVER` | Opens the procedurally generated quests menu |
| `CUSTOM_QUEST_GIVER` | Opens the quest menu for a specific quest set in `questFilenames` |
| `NONE` | No interactions |
| `SELL` | Opens the sell menu |
| `TELEPORT_BACK` | Teleports players back to the last non-elitemobs world location they were |
| `SCRAPPER` | Opens the scrap menu |
| `SMELTER` | Opens the smelt menu |
| `REPAIRMAN` | Opens the repair menu |
| `ENHANCER` | Opens the item enhancements menu |
| `REFINER` | Opens the refiner menu |
| `UNBINDER` | Opens the unbind menu |
| `ARENA_MASTER` | Opens the arena menu for the arena set in `arenaFilename`|
| `COMMAND` | Runs the command set in `command` |
