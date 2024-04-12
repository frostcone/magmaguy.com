[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Configuration settings

<div align="center">

### isEnabled

Sets if an NPC is enabled.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Sets the display name of an NPC. Supports [Color Codes](#color_codes).

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
name: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### role

Sets the role of the NPC, under the name. Only visual. Supports [Color Codes](#color_codes).

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `role` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
role: "&c<Red Fellow>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Sets the profession of the NPC, which sets its skin when **not** using a disguise.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

Sets the list of greeting the NPC says when a player approaches.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `greetings` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
greetings:
- Hi there!
- Good day. 
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Sets the dialog the NPC will say while a player is nearby (In case of the `DIALOG` interactionType, this would be the dialog).

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `dialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dialog:
- I like apples!
- Sure is hot.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Sets the farewell message of the NPC.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `farewell` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
farewell: 
- Until next time!
- Bye!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Sets if the NPC can talk.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Sets the radius at which an NPC can detect a player approaching.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Sets the type of interaction the NPC will do.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Special [1]    |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

When a Teleporter NPC has no previous location it can teleport a player to, it will display this message. Accepts [Color Codes](#color_codes)

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cCouldn''t send you back to your previous location - no previous location found!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Sets the amount of time, in minutes, before an NPC vanishes permanently.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `timeout` | [Integer](#integer) |  `0` (never)   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

Sets the quests the NPC gives.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `questFileName` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

Sets the LibsDisguises disguise the NPC has.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `disguise` | [LibsDisguises format]($language$/elitemobs/libsdisguises.md) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Sets the data for a custom LibsDisguises disguise.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [LibsDisguises format]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Sets the ModelEngine custom model the NPC will use.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `customModel` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

Sets the filename of the arena the NPC will open a menu for (requires the `ARENA_MASTER` interactionType).

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `arena` | [Filename](#filename) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

Sets the command the NPC will run (requires `COMMAND` interactionType).

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `command` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
command: say Look at me running a command, how cool!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Sets the spawn location of the NPCs. You should set this through the `/em spawnnpc <npcfilename.yml>` command.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `spawnLocation` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Sets the spawn locations of the NPCs. You should set this through the `/em spawnnpc <npcfilename.yml>` command.

| Key              |           Values            | Default |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
spawnLocations: 
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

Sets if the NPC should be instanced (for use in instanced dungeons).

| Key              |           Values            | Default |
|------------------|:---------------------------:|:-------:|
| `instanced` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>NPC Config Example</b></summary>

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

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Special [1]
The following is the list of valid NPC interaction types:

| Type                          |                                Description                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Open the adventurer's guild menu                      |
| `CHAT`                        |                Right-clicking cycles through the `dialog`                 |
| `CUSTOM_SHOP`                 |                        Opens the custom shop menu                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Opens the procedurally generated shop                   |
| `BAR`                         |                            Opens the bar menu                             |
| `ARENA`                       |                           Opens the arena menu                            |
| `QUEST_GIVER`                 |               Opens the procedurally generated quests menu                |
| `CUSTOM_QUEST_GIVER`          |     Opens the quest menu for a specific quest set in `questFileName`      |
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