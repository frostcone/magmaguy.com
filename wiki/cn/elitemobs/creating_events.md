[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

这个指南适用于EliteMobs 7.3.4及之后的版本

# 什么是自定义事件？

这里的自定义事件指的是在游戏中随机发生的事件，可以基于玩家的行为或定时触发。这个插件预置了一些自定义事件，如Balrog事件，Kraken事件，和宝藏地精事件等等。

这个系统被称为**自定义** 事件，因为事件不仅可以被定制，还可以从零开始创建。接下来将介绍如何创建和定制自己的事件。

# 通用配置设置

<div align="center">

以下设置可以/应该用于行为和定时事件。

***

### isEnabled

设置事件是否启用。

| 键       |       值        | 默认值 |
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

### eventType

设置事件的类型。

| 键       |       值         | 默认值 |
|-----------|:----------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | 无 |

*注意 `BREAK_BLOCK`，`FISH` 和 `TILL_SOIL` 是 [动作事件](#action-events)，`TIMED` 是 [定时事件](#timed-events)*

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

设置将被生成的boss列表。**必需！**

| 键       |       值         | 默认值 |
|-----------|:----------------:|:-------:|
| `bossFilenames` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

设置 [公告优先级]($language$/elitemobs/creating_bosses.md&section=announcementpriority)。

| 键       |       值         | 默认值 |
|-----------|:----------------:|:-------:|
| `announcementPriority` | [整数](#integer) |  无   |

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

设置事件开始时发送的消息。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `startMessage` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
startMessage: 一个事件已开始！
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

设置事件结束时发送的消息。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `endMessage` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
endMessage: 一个事件已结束！
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

设置事件开始时运行的命令。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

设置事件结束时运行的命令。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
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
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## 动作事件

<div align="center">

当特定的动作发生时，如破坏一个块或钓鱼，有可能触发的事件。

### chance

设置当动作发生时，事件发生的几率。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `chance` | 值在 `0.0` 和 `1.0` 之间 |  `0`   |

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

如果动作设置为 `BREAK_BLOCK`，设置需要检查的物料列表。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | [物料列表](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  无   |

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

设置了一个0.1％的几率在破坏煤矿石块时触发事件，假设事件类型是`BREAK_BLOCK`。

</details>

</div>

## 定时事件

<div align="center">

定时事件是在可配置的时间间隔内发生的事件。一旦定时事件的冷却结束，就会根据事件的权重从定时事件列表中随机选取一个事件。

### spawnType

设置事件使用的[自定义产生]($language$/elitemobs/creating_spawns.md)，定义boss可以产生的地方。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `spawnType` | [文件名](#filename) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

设置此事件可以再次被选中之前的时间，单位为分钟。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [整数](#integer) |  `0`   |

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

设置下一个事件被选中之前的时间，单位为分钟。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [整数](#integer) |  `0`   |

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

设置事件的权重，影响它被其他事件选中的几率。**推荐值：100**。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `weight` | [双精度浮点数](#double) |  `0`   |

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

设置事件的最大持续时间，单位为分钟。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [整数](#integer) |  `0`   |

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

设置事件是否以boss的死亡结束。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [布尔值](#boolean) | `true`  |

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

设置事件将在何时结束的游戏内时间。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [布尔值](#boolean) | `true`  |

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

设置开始事件之前的在线玩家的最小数量。

| 键       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [整数](#integer) |   `1`   |

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

*注意事件会排队，这意味着它们只会在满足`customSpawn`中定义的条件时开始。*

<details> 

<summary align="center"><b>事件配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
  - "cool_boss.yml"
  - "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
  - say The event started!
eventEndCommands:
  - say The event ended!
customSpawn: "myCoolSpawn.yml"
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