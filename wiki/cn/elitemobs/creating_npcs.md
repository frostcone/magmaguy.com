```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 配置设置

<div align="center">

### isEnabled

设置NPC是否启用。

| 键          |       值         | 默认值 |
|-------------|:----------------:|:------:|
| `isEnabled` | [布尔值](#boolean) | `true` |

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

| 键     |       值        | 默认值 |
|--------|:---------------:|:------:|
| `name` | [字符串](#string) |  无    |

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

### scale

设置NPC的比例（大小）。

| 键      |        值         | 默认值 |
|---------|:-----------------:|:------:|
| `scale` | [乘数](#multiplier) | `1.0`  |

缩放时，`1.0` 表示默认大小。要使实体变大，请增加该值（例如，`1.2`）。要使实体变小，请减小该值（例如，`0.8`）。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### role

设置NPC名称下方的角色。仅为视觉效果。支持[颜色代码](#color_codes)。

| 键     |       值        | 默认值 |
|--------|:---------------:|:------:|
| `role` | [字符串](#string) |  无    |

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

设置NPC的职业，这会在**不**使用伪装时设置其皮肤。

| 键           |                        值                         | 默认值   |
|--------------|:-------------------------------------------------:|:--------:|
| `profession` | [职业](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | `NITWIT` |

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

设置玩家接近时NPC会说的问候语列表。

| 键          |        值         | 默认值 |
|-------------|:-----------------:|:------:|
| `greetings` | [字符串列表](#string_list) |  无    |

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

设置玩家在附近时NPC会说的对话（如果 interactionType 为 `DIALOG`，这就是对话内容）。

| 键       |        值         | 默认值 |
|----------|:-----------------:|:------:|
| `dialog` | [字符串列表](#string_list) |  无    |

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

设置NPC的告别消息。

| 键         |        值         | 默认值 |
|------------|:-----------------:|:------:|
| `farewell` | [字符串列表](#string_list) |  无    |

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

| 键        |       值         | 默认值 |
|-----------|:----------------:|:------:|
| `canTalk` | [布尔值](#boolean) | `true` |

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

设置NPC检测玩家接近的半径。

| 键               |         值          | 默认值 |
|------------------|:-------------------:|:------:|
| `activationRadius` | [双精度浮点数](#double) | `3.0`  |

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

设置NPC将进行的交互类型。

| 键                |      值       | 默认值 |
|-------------------|:-------------:|:------:|
| `interactionType` | 特殊 [1]    |  无    |

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

当传送NPC没有可以传送玩家回去的先前位置时，它将显示此消息。接受[颜色代码](#color_codes)

| 键                        |       值        | 默认值 |
|---------------------------|:---------------:|:------:|
| `noPreviousLocationMessage` | [字符串](#string) |  无    |

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

设置NPC永久消失前的时间量，单位为分钟。

| 键      |      值       |   默认值    |
|---------|:-------------:|:-----------:|
| `timeout` | [整数](#integer) | `0` （永不） |

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

设置NPC给予的任务。

| 键            |        值         | 默认值 |
|---------------|:-----------------:|:------:|
| `questFileName` | [字符串列表](#string_list) |  无    |

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

设置NPC拥有的LibsDisguises伪装。

| 键         |                值                 | 默认值 |
|------------|:---------------------------------:|:------:|
| `disguise` | [LibsDisguises 格式]($language$/elitemobs/libsdisguises.md) |  无    |

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

| 键                 |                                值                                 | 默认值 |
|--------------------|:-----------------------------------------------------------------:|:------:|
| `customDisguiseData` | [LibsDisguises 格式]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  无    |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWJiZWQ4NDM1ZjhiZjI3OGFmZTI2ZTY0ZmQ5MjZiOGIzNzczMmQ4OGUzMzQ4OTdkYmQ1MjdkNTZmZjkxOTkwZSIKICAgIH0KICB9Cgp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg3op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

设置NPC将使用的ModelEngine自定义模型。

| 键           |       值        | 默认值 |
|--------------|:---------------:|:------:|
| `customModel` | [字符串](#string) |  无    |

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

设置NPC将为其打开菜单的竞技场文件名（需要 interactionType 为 `ARENA_MASTER`）。

| 键      |        值         | 默认值 |
|---------|:-----------------:|:------:|
| `arena` | [文件名](#filename) |  无    |

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

设置NPC将运行的命令（需要 interactionType 为 `COMMAND`）。

| 键        |       值        | 默认值 |
|-----------|:---------------:|:------:|
| `command` | [字符串](#string) |  无    |

<details>

<summary><b>示例</b></summary>

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

设置NPC的生成位置。您应该通过 `/em spawnnpc <npcfilename.yml>` 命令来设置此项。

| 键            |       值        | 默认值 |
|---------------|:---------------:|:------:|
| `spawnLocation` | [字符串](#string) |  无    |

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

设置NPC的生成位置列表。您应该通过 `/em spawnnpc <npcfilename.yml>` 命令来设置此项。

| 键             |        值         | 默认值 |
|----------------|:-----------------:|:------:|
| `spawnLocations` | [字符串列表](#string_list) |  无    |

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

设置NPC是否应该被实例化（用于实例化地下城）。

| 键          |       值         | 默认值  |
|-------------|:----------------:|:-------:|
| `instanced` | [布尔值](#boolean) | `false` |

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
- my_quest.yml #npc interactionType 必须设置为 CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #在设置自定义 libsdisguise 时使用
customModel: MODEL_ONE
arena: my_arena.yml #npc interactionType 必须设置为 ARENA_MASTER
command: /say Hello World! #npc interactionType 必须设置为 COMMAND
spawnLocation: my_world,584,55,127,90,10 #请记住，NPC使用俯仰角和偏航角来设置它们看向的方向。运行 /em spawnnpc <npcfilename.yml> 命令时也会自动设置此项，因此请确保在运行命令时摆好您希望NPC面向的姿势。
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## 特殊 [1]
以下是有效的NPC交互类型列表：

| 类型                          |                                描述                                |
|-------------------------------|:-----------------------------------------------------------------:|
| `GUILD_GREETER`               |                     打开冒险者公会菜单                      |
| `CHAT`                        |                右键点击循环显示 `dialog` 内容                 |
| `CUSTOM_SHOP`                 |                        打开自定义商店菜单                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   打开程序生成的商店                   |
| `BAR`                         |                            打开酒吧菜单                             |
| `ARENA`                       |                           打开竞技场菜单                            |
| `QUEST_GIVER`                 |               打开程序生成的任务菜单                |
| `CUSTOM_QUEST_GIVER`          |     打开在 `questFileName` 中设置的特定任务的菜单      |
| `NONE`                        |                              无交互                              |
| `SELL`                        |                            打开出售菜单                            |
| `TELEPORT_BACK`               | 将玩家传送回他们上次所在的非elitemobs世界位置 |
| `SCRAPPER`                    |                           打开分解菜单                            |
| `REPAIRMAN`                   |                           打开修理菜单                           |
| `ENCHANTER`                   |                          打开附魔菜单                           |
| `REFINER`                     |                          打开精炼菜单                           |
| `UNBINDER`                    |                           打开解绑菜单                           |
| `ARENA_MASTER`                |         打开在 `arenaFilename` 中设置的竞技场的菜单         |
| `COMMAND`                     |                     运行在 `command` 中设置的命令                     |

有关 SCRAPPER 和类似交互类型功能的更多信息，请点击[此处]($language$/elitemobs/item_upgrade_system.md)。
```