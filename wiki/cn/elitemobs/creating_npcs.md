[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 配置设置

<div align="center">

### isEnabled

设置NPC是否启用。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [布尔值](#boolean) | `true`  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

设置NPC的显示名称。支持[颜色代码](#color_codes)。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `name` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC的角色，显示在名称下方。仅用于视觉。支持[颜色代码](#color_codes)。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `role` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC的职业，当**不**使用伪装时，会设置其皮肤。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details> 

<summary><b>示例</b></summary>

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

设置玩家靠近时NPC说的问候语列表。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `greetings` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC将说的对话，当玩家在附近时(如果`DIALOG` interactionType，这就是对话)。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `dialog` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC的告别信息。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `farewell` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC是否可以说话。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `canTalk` | [布尔值](#boolean) | `true`  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

设置NPC可以检测到玩家靠近的半径。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [双精度浮点数](#double) |  `3.0`  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

设置NPC将进行的互动类型。

| 键       |      取值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `interactionType` |    特殊 [1]    |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

当Teleporter NPC没有以前的位置可以将玩家传送到时，它将显示这个信息。接受[颜色代码](#color_codes)

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC消失之前的时间量，以分钟为单位。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `timeout` | [整数](#integer) |  `0` (永不)   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

设置NPC给出的任务。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `questFileName` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC的LibsDisguises伪装。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `disguise` | [LibsDisguises格式]($language$/elitemobs/libsdisguises.md) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置自定义LibsDisguises伪装的数据。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [LibsDisguises格式]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  无   |

<details> 

<summary><b>示例</b></summary>

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

设置NPC将使用的ModelEngine自定义模型。

| 键       |       取值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `customModel` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

设置NPC将为之打开菜单的竞技场的文件名（需要`ARENA_MASTER` interactionType）。

| 键       |        取值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `arena` | [文件名](#filename) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***
### command

设置NPC将运行的命令（需要 `COMMAND` interactionType）。

| 关键字       |        值         | 默认值 |
|-----------|:----------------:|:-------:|
| `command` | [String](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
command: say 看我运行一个命令，多酷啊！
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

设置NPC的生成位置。你应该通过 `/em spawnnpc <npcfilename.yml>` 命令设置这个。

| 关键字       |        值         | 默认值 |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [String](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

设置NPC的多个生成位置。你应该通过 `/em spawnnpc <npcfilename.yml>` 命令设置这个。

| 关键字              |           值            | 默认值 |
|------------------|:-------------------------:|:-------:|
| `spawnLocations` | [String List](#string_list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocations: 
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

设置NPC是否应实例化（用于实例化的地下城）。

| 关键字        |           值            | 默认值 |
|-----------------|:------------------------:|:-------:|
| `instanced` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>NPC配置示例</b></summary>

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
spawnLocation: my_world,584,55,127,90,10 #NPC使用pitch和yaw来设置他们的视线朝向。当运行/em spawnnpc <npcfilename.yml>命令时，这也将自动设置，所以在运行命令时确保你的姿势是你想让NPC面向的位置。
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## 特殊 [1]
以下是有效的NPC互动类型列表：

| 类型                          |                                描述                                |
|-------------------------------|:-----------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     打开冒险者公会菜单                      |
| `CHAT`                        |                右键点击可以循环`dialog`对话                 |
| `CUSTOM_SHOP`                 |                        打开自定义商店菜单                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   打开程序生成的商店菜单                   |
| `BAR`                         |                            打开酒吧菜单                             |
| `ARENA`                       |                           打开竞技场菜单                            |
| `QUEST_GIVER`                 |               打开程序生成的任务菜单                |
| `CUSTOM_QUEST_GIVER`          |     打开在`questFileName`设置的特定任务菜单      |
| `NONE`                        |                              无互动                              |
| `SELL`                        |                            打开销售菜单                            |
| `TELEPORT_BACK`               | 将玩家传送回到上一次非elitemobs世界的位置 |
| `SCRAPPER`                    |                           打开刮痕菜单                            |
| `REPAIRMAN`                   |                           打开修理菜单                           |
| `ENCHANTER`                   |                          打开附魔菜单                           |
| `REFINER`                     |                          打开炼化菜单                           |
| `UNBINDER`                    |                           打开解绑菜单                           |
| `ARENA_MASTER`                |         打开在`arenaFilename`设置的竞技场菜单         |
| `COMMAND`                     |                     运行在`command`设置的命令                     |

*关于SCRAPPER及类似互动类型的更多信息，请点击[这里]($language$/elitemobs/item_upgrade_system.md)。*