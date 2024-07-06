[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 配置设置

<div align="center">

### isEnabled

设置 NPC 是否启用。

| 键        | 值              | 默认值 |
|------------|:-----------------|--------|
| `isEnabled` | [布尔值](#布尔值) | `true` |

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

设置 NPC 的显示名称。支持 [颜色代码](#颜色代码)。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `name` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&a恩恩 皮西"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### role

设置 NPC 的角色，位于名称下方。仅用于视觉效果。支持 [颜色代码](#颜色代码)。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `role` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
role: "&c<红色家伙>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

设置 NPC 的职业，这将设置其在**不**使用伪装时的皮肤。

| 键          | 值                                                                        | 默认值    |
|--------------|:-----------------------------------------------------------------------------:|-----------|
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

设置 NPC 在玩家靠近时所说的问候语列表。

| 键          | 值                     | 默认值 |
|--------------|:------------------------:|--------|
| `greetings` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
greetings:
- 你好！
- 日安。
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

设置 NPC 在玩家附近时会说的对话（在 `DIALOG` interactionType 的情况下，这将是对话）。

| 键      | 值                     | 默认值 |
|----------|:------------------------:|--------|
| `dialog` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dialog:
- 我喜欢苹果！
- 今天真热。
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

设置 NPC 的告别消息。

| 键         | 值                     | 默认值 |
|-------------|:------------------------:|--------|
| `farewell` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
farewell: 
- 下次再见！
- 再见！
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

设置 NPC 是否可以说话。

| 键        | 值              | 默认值 |
|------------|:-----------------|--------|
| `canTalk` | [布尔值](#布尔值) | `true` |

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

设置 NPC 可以检测到玩家靠近的半径。

| 键                | 值                | 默认值  |
|--------------------|:------------------:|---------|
| `activationRadius` | [双精度浮点数](#双精度浮点数) | `3.0` |

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

设置 NPC 将执行的交互类型。

| 键                | 值             | 默认值 |
|--------------------|:----------------:|--------|
| `interactionType` | 特殊 [1]         | 无      |

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

当传送员 NPC 没有可以将玩家传送到的先前位置时，它将显示此消息。接受 [颜色代码](#颜色代码)

| 键                      | 值              | 默认值 |
|--------------------------|:-----------------|--------|
| `noPreviousLocationMessage` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &c无法将您送回先前的位置 - 未找到先前的位置！'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

设置 NPC 永久消失之前的时间（以分钟为单位）。

| 键        | 值                | 默认值              |
|------------|:------------------:|----------------------|
| `timeout` | [整数](#整数)          | `0`（永不消失） |

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

设置 NPC 给予的任务。

| 键             | 值                     | 默认值 |
|----------------|:------------------------:|--------|
| `questFileName` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
questFileName:
- 我的任务_一.yml
- 我的任务_二.yml
```

</div>

</details>

***

### disguise

设置 NPC 拥有的 LibsDisguises 伪装。

| 键         | 值                                 | 默认值 |
|-------------|:-------------------------------------:|--------|
| `disguise` | [LibsDisguises 格式]($language$/elitemobs/libsdisguises.md) | 无      |

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

设置自定义 LibsDisguises 伪装的数据。

| 键                 | 值                                                                                         | 默认值 |
|---------------------|:----------------------------------------------------------------------------------------------:|--------|
| `customDisguiseData` | [LibsDisguises 格式]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
disguise: custom:我的酷伪装名称
customDisguiseData: player 我的酷伪装名称 setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

设置 NPC 将使用的 ModelEngine 自定义模型。

| 键           | 值              | 默认值 |
|---------------|:-----------------|--------|
| `customModel` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customModel: 我的模型_一
```

</div>

</details>

***

### arena

设置 NPC 将为其打开菜单的竞技场的文件名（需要 `ARENA_MASTER` interactionType）。

| 键      | 值                  | 默认值 |
|----------|:----------------------:|--------|
| `arena` | [文件名](#文件名)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arena: 我的竞技场.yml
```

</div>

</details>

***

### command

设置 NPC 将运行的命令（需要 `COMMAND` interactionType）。

| 键        | 值              | 默认值 |
|------------|:-----------------|--------|
| `command` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
command: say 看我运行命令，真酷！
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

设置 NPC 的生成位置。您应该通过 `/em spawnnpc <npcfilename.yml>` 命令设置此项。

| 键              | 值              | 默认值 |
|-----------------|:-----------------|--------|
| `spawnLocation` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocation: 我的世界,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

设置 NPC 的生成位置。您应该通过 `/em spawnnpc <npcfilename.yml>` 命令设置此项。

| 键              | 值                     | 默认值 |
|-----------------|:------------------------:|--------|
| `spawnLocations` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocations: 
- 我的世界,10,50,10,0,0
- 我的世界,-10,50,-10,0,0
```

</div>

</details>

### instanced

设置 NPC 是否应该实例化（用于实例化地下城）。

| 键           | 值              | 默认值  |
|---------------|:-----------------|---------|
| `instanced` | [布尔值](#布尔值) | `false` |

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

<summary align="center"><b>NPC 配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&c红宝石"
role: "&a<普通 NPC>"
profession: NITWIT
greetings:
- 嗨！
- 你好！
dialog:
- 很棒的对话！
- 很高兴与你交谈！
farewell:
- 再见！
- 回头见！
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName: 
- 我的任务.yml #npc interactionType 必须设置为 CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #在设置自定义 libsdisguise 时使用
customModel: 模型_一
arena: 我的竞技场.yml #npc interactionType 必须设置为 ARENA_MASTER
command: /say 你好，世界！ #npc interactionType 必须设置为 COMMAND
spawnLocation: 我的世界,584,55,127,90,10 #请记住，NPC 使用俯仰角和偏航角来设置他们的朝向。这也会在运行 /em spawnnpc <npcfilename.yml> 命令时自动设置，因此请确保在运行命令时摆好您希望 NPC 面向的位置。
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## 特殊 [1]
以下是有效的 NPC 交互类型列表：

| 类型                          | 描述                                                                                             |
|-------------------------------|:--------------------------------------------------------------------------------------------------:|
| `GUILD_GREETER`               | 打开冒险家公会菜单                                                                                  |
| `CHAT`                        | 右键单击循环浏览 `dialog`                                                                         |
| `CUSTOM_SHOP`                 | 打开自定义商店菜单                                                                                   |
| `PROCEDURALLY_GENERATED_SHOP` | 打开程序生成的商店                                                                               |
| `BAR`                         | 打开酒吧菜单                                                                                       |
| `ARENA`                       | 打开竞技场菜单                                                                                      |
| `QUEST_GIVER`                 | 打开程序生成的任务菜单                                                                              |
| `CUSTOM_QUEST_GIVER`          | 打开 `questFileName` 中设置的特定任务集的任务菜单                                                   |
| `NONE`                        | 无交互                                                                                            |
| `SELL`                        | 打开出售菜单                                                                                       |
| `TELEPORT_BACK`               | 将玩家传送回他们上次所在的非 EliteMobs 世界位置                                                   |
| `SCRAPPER`                    | 打开碎片菜单                                                                                       |
| `REPAIRMAN`                   | 打开修理菜单                                                                                       |
| `ENCHANTER`                   | 打开附魔菜单                                                                                       |
| `REFINER`                     | 打开精炼菜单                                                                                       |
| `UNBINDER`                    | 打开解绑菜单                                                                                       |
| `ARENA_MASTER`                | 打开 `arenaFilename` 中设置的竞技场的竞技场菜单                                                    |
| `COMMAND`                     | 运行 `command` 中设置的命令                                                                       |

*有关 SCRAPPER 和类似交互类型的作用的更多信息，请点击 [此处]($language$/elitemobs/item_upgrade_system.md)。*



