[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

本指南适用于 EliteMobs 7.3.4 及更高版本

# 什么是自定义事件？

此处自定义事件是指在游戏中随机发生的事件，无论是基于玩家操作还是具有定时触发器。该插件预装了许多自定义事件，例如炎魔事件、海怪事件和寻宝哥布林事件等等。

此系统被称为**自定义**事件，因为事件不仅可以自定义，还可以从头开始创建。接下来是有关如何创建和自定义您自己的事件的指南。

# 常用配置设置

<div align="center">

以下设置可以/应该用于动作事件和定时事件。

***

### isEnabled

设置事件是否启用。

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

### eventType

设置事件类型。

| 键        | 值                      | 默认值 |
|------------|:-------------------------:|--------|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | 无      |

*请注意，`BREAK_BLOCK`、`FISH` 和 `TILL_SOIL` 是 [动作事件](#动作事件)，而 `TIMED` 是 [定时事件](#定时事件)*

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

设置将要生成的 Boss 列表。**必填！**

| 键            | 值                     | 默认值 |
|----------------|:------------------------:|--------|
| `bossFilenames` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- 我的事件_Boss.yml
```

</div>

</details>

***

### announcementPriority

设置 [公告优先级]($language$/elitemobs/creating_bosses.md&section=announcementpriority)。

| 键                    | 值                | 默认值 |
|------------------------|:------------------:|--------|
| `announcementPriority` | [整数](#整数)          | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

设置在事件开始时发送的消息。

| 键            | 值              | 默认值 |
|----------------|:-----------------|--------|
| `startMessage` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
startMessage: 事件已开始！
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

设置在事件结束时发送的消息。

| 键          | 值              | 默认值 |
|--------------|:-----------------|--------|
| `endMessage` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
endMessage: 事件已结束！
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

设置在事件开始时运行的命令。

| 键                 | 值                     | 默认值 |
|---------------------|:------------------------:|--------|
| `eventStartCommands` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventStartCommands:
- say 事件现在开始！！
- "$chance=0.5$ say 多漂亮的生成！"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

设置在事件结束时运行的命令。

| 键               | 值                     | 默认值 |
|------------------|:------------------------:|--------|
| `eventEndCommands` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventEndCommands:
- say 事件结束了，真可惜。
- "$chance=0.5$ say 太慢了，伙计！"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>事件配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "酷_Boss.yml"
- "其他_酷_Boss.yml"
announcementPriority: 3
startMessage: "酷事件正在开始！"
endMessage: "酷事件正在结束！"
eventStartCommands:
- say 事件已开始！
eventEndCommands:
- say 事件已结束！
```

</div>

</details>


</div>

## 动作事件

<div align="center">

在发生特定操作（例如破坏方块或钓鱼）时有可能运行的事件。

### chance

设置操作发生时事件发生的几率。

| 键      | 值                                   | 默认值 |
|----------|:-------------------------------------:|--------|
| `chance` | `0.0` 到 `1.0` 之间的值                | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

设置如果操作设置为 `BREAK_BLOCK` 时要检查的材料列表。

| 键                 | 值                                                                             | 默认值 |
|---------------------|:----------------------------------------------------------------------------------:|--------|
| `breakableMaterials` | [材料](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 列表 | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>配置示例</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

假设事件类型为 `BREAK_BLOCK`，则设置在破坏煤矿石时运行事件的几率为 0.1%。

</details>

</div>

## 定时事件

<div align="center">

定时事件是在可配置的时间间隔内发生的事件。一旦定时事件的冷却时间结束，就会根据事件的权重从定时事件列表中随机选择一个定时事件。

### spawnType

设置事件使用的 [自定义生成]($language$/elitemobs/creating_spawns.md)，该生成定义了 Boss 可以生成的位置。

| 键         | 值                  | 默认值 |
|-------------|:----------------------:|--------|
| `spawnType` | [文件名](#文件名)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnType: 地狱_生成.yml
```

</div>

</details>

***

### localCooldown

设置此事件可以再次被选择之前的时间（以分钟为单位）。

| 键            | 值                | 默认值 |
|----------------|:------------------:|--------|
| `localCooldown` | [整数](#整数)          | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

设置选择下一个事件之前的时间（以分钟为单位）。

| 键             | 值                | 默认值 |
|----------------|:------------------:|--------|
| `globalCooldown` | [整数](#整数)          | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

设置事件的权重，影响它相对于其他事件被选择的几率。**建议：100**。

| 键      | 值                | 默认值 |
|----------|:------------------:|--------|
| `weight` | [双精度浮点数](#双精度浮点数) | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

设置事件的最大持续时间（以分钟为单位）。

| 键             | 值                | 默认值 |
|----------------|:------------------:|--------|
| `eventDuration` | [整数](#整数)          | `0`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

设置事件是否在 Boss 死亡时结束。

| 键                    | 值              | 默认值 |
|------------------------|:-----------------|--------|
| `eventEndsWithBossDeath` | [布尔值](#布尔值) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

设置事件结束的游戏内时间。

| 键            | 值              | 默认值 |
|----------------|:-----------------|--------|
| `eventEndTime` | [布尔值](#布尔值) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

设置事件开始之前的最小在线玩家数量。

| 键                    | 值                | 默认值 |
|------------------------|:------------------:|--------|
| `minimumPlayerCount` | [整数](#整数)          | `1`    |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*请注意，事件会排队，这意味着它们只有在满足 `customSpawn` 中定义的条件后才会开始。*

<details> 

<summary align="center"><b>事件配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "酷_Boss.yml"
- "其他_酷_Boss.yml"
announcementPriority: 3
startMessage: "酷事件正在开始！"
endMessage: "酷事件正在结束！"
eventStartCommands:
- say 事件已开始！
eventEndCommands:
- say 事件已结束！
customSpawn: "我的酷生成.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>





