[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建竞技场

<div align="center">

### isEnabled

设置竞技场是否启用。

| 键           |       值        |   默认   |
|-------------|:--------------:|:------:|
| `isEnabled` | [布尔](#boolean) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName

设置竞技场的名称。

| 键           |       值        | 默认 |
|-------------|:--------------:|:--:|
| `arenaName` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arenaName: 基岩竞技场
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

设置竞技场的第一个角。

| 键         |             值              | 默认 |
|-----------|:--------------------------:|:--:|
| `corner1` | [位置](#serialized_location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

在此图像中，`corner1` 由 *绿色羊毛* 表示，`corner2` 由 *红色羊毛* 表示。此配置将它们之间的区域指定为竞技场，由 *黄色羊毛*
表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

设置竞技场的第二个角，必须与 `corner1` 对角。

| 键         |             值              | 默认 |
|-----------|:--------------------------:|:--:|
| `corner2` | [位置](#serialized_location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

在此图像中，`corner1` 由 *绿色羊毛* 表示，`corner2` 由 *红色羊毛* 表示。此配置将它们之间的区域指定为竞技场，由 *黄色羊毛*
表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

设置竞技场的起始位置。

| 键               |             值              | 默认 |
|-----------------|:--------------------------:|:--:|
| `startLocation` | [位置](#serialized_location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

设置竞技场的出口位置。

| 键              |             值              | 默认 |
|----------------|:--------------------------:|:--:|
| `exitLocation` | [位置](#serialized_location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

设置竞技场拥有的波数。

| 键           |       值        | 默认 |
|-------------|:--------------:|:--:|
| `waveCount` | [整数](#integer) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

设置波数之间的延迟（以秒为单位）。

| 键                   |       值        | 默认  |
|---------------------|:--------------:|:---:|
| `delayBetweenWaves` | [整数](#integer) | `0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

设置竞技场 Boss 的生成位置。

| 键             |             值             | 默认 |
|---------------|:-------------------------:|:--:|
| `spawnPoints` | [字符串列表](#string_list) [1] | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

设置在竞技场波数期间出现的 Boss 列表。EliteMobs 竞技场支持在竞技场中生成 Mythic Mobs。

| 键          |             值             | 默认 |
|------------|:-------------------------:|:--:|
| `bossList` | [字符串列表](#string_list) [2] | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

在此示例中，第 1 波将在北生成点生成一个 Boss，在南生成点生成一个 Boss。然后，在第 2 波，一个神话 Boss 将在中心点以 10 级生成。

请注意，您也可以强制 EliteMobs Boss 的等级，但建议您在其配置文件中设置其等级。

</div>

</details>

***

### rawArenaReward

设置在波数结束时给予的奖励。

| 键                |                            值                             | 默认 |
|------------------|:--------------------------------------------------------:|:--:|
| `rawArenaReward` | [通用 EliteMobs 战利品表]($language$/elitemobs/loot_tables.md) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

设置竞技场开始前必须拥有的最少玩家数量。

| 键                    |       值        | 默认  |
|----------------------|:--------------:|:---:|
| `minimumPlayerCount` | [整数](#integer) | `1` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

设置竞技场可以拥有的最大玩家数量。

| 键                    |       值        |  默认   |
|----------------------|:--------------:|:-----:|
| `maximumPlayerCount` | [整数](#integer) | `100` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

设置在波数之间运行的消息。

| 键               |   值    | 默认 |
|-----------------|:------:|:--:|
| `arenaMessages` | 特殊 [3] | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[竞技场播音员] &f第一波的时间到了！"
- wave=2:message="&a[竞技场播音员] &f哇，已经是第二波了。"
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

设置竞技场是否使用圆柱形（默认为长方体）。

| 键                  |       值        |   默认    |
|--------------------|:--------------:|:-------:|
| `cylindricalArena` | [布尔](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

设置使用竞技场所需的权限。

| 键            |        值        | 默认 |
|--------------|:---------------:|:--:|
| `permission` | [字符串](#integer) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>

## 特殊 [1]

生成点：使用以下格式：`name=pointName:location=world_name,x,y,z`。

## 特殊 [2]

Boss 列表：使用以下格式：`wave=x:spawnPoint=Y:boss=bossfilename.yml`。

## 特殊 [3]

竞技场消息：使用以下格式：`wave=X:message=your message here`。

<details> 

<summary align="center"><b>竞技场配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: 示例竞技场
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[竞技场 NPC] &f哇！第 1 波！
  - wave=2:message=&d[竞技场 NPC] &f太棒了，已经是第 2 波了！
  - wave=3:message=&d[竞技场 NPC] &f第 3 波现在开始了！
  - wave=4:message=&d[竞技场 NPC] &f已经是第 4 波了！
  - wave=5:message=&d[竞技场 NPC] &f好吧，这一波之后就结束了。
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>示例分解</b></summary>

<div align="left">

让我们从头开始查看此示例，并解释此竞技场配置的作用。

首先，使用 `isEnabled` 启用竞技场，并且我们可以看到它使用 `arenaName` 设置称为“示例竞技场”。当您与竞技场 NPC
互动时（我们将在下文中讨论如何创建竞技场 NPC）将显示该名称，这将允许玩家加入竞技场。corner1 和 corner2
定义了竞技场的大小。这些角应位于您计划用于竞技场的区域的相对两侧。

`startLocation` 是玩家在加入竞技场时将生成的地点，在示例中，这将是在 my_arena_world 世界的竞技场中心。`exitLocation`
是玩家在失败或完成竞技场后将被传送到的地点。在这种情况下，它将是 my_minecraft_world 世界和示例中的坐标。

`waveCount` 只是设置竞技场将持续的波数。在这种情况下，这将是 5 波。如果玩家设法在所有 5
波中幸存下来，他们就设法在竞技场中幸存下来。`delayBetweenWaves` 将设置下一波开始之前的秒数。在我们的示例中，玩家将有 5
秒钟的时间来准备下一波开始。

`spawnPoints` 设置我们可以在其中生成怪物的位置。我们可以创建任意多个并根据需要命名它们。在示例中，我们决定创建 5
个生成点，并将它们命名为北、南、中心、东和西。

`bossList` 是我们定义哪个 Boss 应在哪个波数和哪个位置生成的位置。在示例中，第 1 波将在我们命名为北、中心和南的生成位置生成
3 个 Boss。所有三个都设置为使用相同的 Boss 文件，但我们可以为每个 Boss 文件使用不同的 Boss 文件。

`rawArenaReward` 设置在玩家设法在波数中幸存/击败一个波数后将发放的奖励。正如我们在示例中看到的那样，击败第 1 波将奖励玩家
5 个精英硬币。如果他们设法在剩余的波数中幸存下来，然后击败第 5 波，他们将获得 25 个精英硬币的奖励，并有 50% 的几率获得 5 级的
MagmaGuy 的牙签。

`minimumPlayerCount` 设置竞技场开始前所需的最少玩家数量。在我们的示例中，此设置设置为
1，因此只需要一个玩家即可开始竞技场。`maximumPlayerCount` 设置可以参加竞技场的最大玩家数量。在我们的示例中，此设置设置为
3，这意味着如果超过 3 名玩家尝试参加竞技场，则竞技场将不会开始，直到有 3 名或更少的玩家为止。

`arenaMessages` 允许您添加一些风味文本，这些文本将在定义的波数开始时显示在聊天中。在我们的示例中，我们决定在每个波数开始时显示一条简短的消息。我们还决定在每条消息的开头包含
NPC 名称，从而产生文本是播音员（竞技场大师）的口语对话的错觉。

`cylindricalArena` 此设置将允许我们切换我们使用 `corner1` 和 `corner2`
设置的已定义区域是否应为圆柱形而不是长方体。在我们的示例中，我们将其设置为 `false`，这意味着示例竞技场是长方体。

`permission` 允许我们设置玩家需要具有的才能加入/开始竞技场的权限。在我们的示例中，玩家将需要 `arena.mypermission`
权限才能使用竞技场。

</div>

</details>

## 创建竞技场 NPC

<div align="center">

### isEnabled

设置是否启用 NPC。

| 键           |       值        |   默认   |
|-------------|:--------------:|:------:|
| `isEnabled` | [布尔](#boolean) | `true` |

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

设置 NPC 的显示名称。

| 键      |       值        | 默认 |
|--------|:--------------:|:--:|
| `name` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&a格拉迪乌斯"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

设置 NPC 名称下的角色显示。

| 键      |       值        | 默认 |
|--------|:--------------:|:--:|
| `role` | [字符串](#string) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
role: "&c<竞技场大师>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

设置 NPC 的 MineCraft 职业。

| 键            |                                             值                                             | 默认 |
|--------------|:-----------------------------------------------------------------------------------------:|:--:|
| `profession` | [职业](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
profession: 盔甲商
```

<div align="center">


*如果使用 `伪装`，则将被覆盖。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

设置 NPC 的生成位置。

| 键               |             值              | 默认 |
|-----------------|:--------------------------:|:--:|
| `spawnLocation` | [位置](#serialized_location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

设置 NPC 的问候对话。

| 键           |           值           | 默认 |
|-------------|:---------------------:|:--:|
| `greetings` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
greetings:
- 欢迎来到竞技场！
- 竞技场欢迎您！
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

设置玩家与 NPC 互动时的对话。

| 键        |           值           | 默认 |
|----------|:---------------------:|:--:|
| `dialog` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dialog:
- 准备好接受挑战了吗？
- 面对竞技场？
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

设置 NPC 的再见对话。

| 键          |           值           | 默认 |
|------------|:---------------------:|:--:|
| `farewell` | [字符串列表](#string_list) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
farewell:
- 再见。
- 带着你的盾牌回来，或带着它回来！
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*如果字符串太长，可以使用 \n 将字符串分成多行。*

<div align="left">

```yml
farewell:
- 再见。
- 带着你的\n盾牌回来，或带着它回来！
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

设置 NPC 的再见对话。

| 键         |       值        |   默认   |
|-----------|:--------------:|:------:|
| `canTalk` | [布尔](#boolean) | `true` |

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

设置 NPC 应开始说话时的半径。

| 键                  |       值        |  默认   |
|--------------------|:--------------:|:-----:|
| `activationRadius` | [双精度](#double) | `3.0` |

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

设置 NPC 将执行的互动类型。

| 键                 |   值    |       默认       |
|-------------------|:------:|:--------------:|
| `interactionType` | 特殊 [4] | `ARENA_MASTER` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

设置自定义 NPC 伪装。

| 键          |                      值                      | 默认 |
|------------|:-------------------------------------------:|:--:|
| `disguise` | [伪装]($language$/elitemobs/libsdisguises.md) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
disguise: 僵尸
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

设置玩家将被传送到的竞技场。

| 键       |        值         | 默认 |
|---------|:----------------:|:--:|
| `arena` | [文件名](#filename) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### teleportLocation

设置与 NPC 互动后玩家应被传送到哪里。此设置通常用于将玩家传送到竞技场的专用大厅类型区域，他们可以在其中开始竞技场挑战或等待其他玩家完成竞技场。

| 键                  |        值        | 默认 |
|--------------------|:---------------:|:--:|
| `teleportLocation` | [位置](#location) | 无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: my_arena_world,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>竞技场配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
name: 示例 NPC
role: <竞技场大师>
profession: 盔甲商
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - 欢迎来到竞技场！
dialog:
```

</div>
</details>
- 准备好进入竞技场了吗？
farewell:
  - 再见！
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: 僵尸
arena: example_arena.yml
```
此示例显示了一个基本的竞技场 NPC，它将在 my_minecraft_world 中以僵尸伪装生成。玩家可以与此 NPC 互动来挑战“示例竞技场”。

</div>

</details>

## 特殊 [4]

以下是有效的 NPC 互动类型列表：

| 类型                            |                 描述                 |
|-------------------------------|:----------------------------------:|
| `GUILD_GREETER`               |             打开冒险者公会菜单              |
| `CHAT`                        |         右键单击循环显示 `dialog`          |
| `CUSTOM_SHOP`                 |             打开自定义商店菜单              |
| `PROCEDURALLY_GENERATED_SHOP` |             打开程序生成的商店              |
| `BAR`                         |               打开酒吧菜单               |
| `ARENA`                       |              打开竞技场菜单               |
| `QUEST_GIVER`                 |            打开程序生成的任务菜单             |
| `CUSTOM_QUEST_GIVER`          | 为 `questFilenames` 中设置的特定任务集打开任务菜单 |
| `NONE`                        |                无互动                 |
| `SELL`                        |               打开出售菜单               |
| `TELEPORT_BACK`               |  将玩家传送回他们所在的最后一个非 elitemobs 世界位置   |
| `SCRAPPER`                    |               打开报废菜单               |
| `SMELTER`                     |               打开熔炼菜单               |
| `REPAIRMAN`                   |               打开修理菜单               |
| `ENHANCER`                    |              打开物品增强菜单              |
| `REFINER`                     |               打开精炼菜单               |
| `UNBINDER`                    |              打开取消绑定菜单              |
| `ARENA_MASTER`                |  为 `arenaFilename` 中设置的竞技场打开竞技场菜单  |
| `COMMAND`                     |        运行 `command` 中设置的命令         |
