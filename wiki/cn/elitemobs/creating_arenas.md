[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建竞技场

<div align="center">

### isEnabled

启用或禁用竞技场。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [布尔值](#boolean) | `true`    |

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

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
|`arenaName`| [字符串](#string) | 无默认值    |

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

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
|`corner1`| [位置](#serialized_location) | 无默认值    |

<details> 

<summary><b>示例</b></summary>

<div align="left">


```yml
corner1: my_arena_world,10,50,-10,0,0
```


<div align="center">

在这个图像中，`corner1` 表示为 *绿色羊毛*，`corner2` 表示为 *红色羊毛*。此配置将它们之间的区域指定为竞技场，用 *黄色羊毛* 表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

设置竞技场的第二个角，必须与 `corner1` 在对角线上。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `corner2` | [位置](#serialized_location) | 无默认值    |

<details> 

<summary><b>示例</b></summary>

<div align="left">


```yml
corner2: my_arena_world,-10,50,10,0,0
```


<div align="center">

在这个图像中，`corner1` 表示为 *绿色羊毛*，`corner2` 表示为 *红色羊毛*。此配置将它们之间的区域指定为竞技场，用 *黄色羊毛* 表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

设置竞技场的开始位置。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `startLocation` | [位置](#serialized_location) | 无默认值    |

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

设置竞技场的退出位置。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [位置](#serialized_location) | 无默认值    |

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

设置竞技场的波数。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `waveCount` | [整数](#integer) | 无默认值    |

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

设置两波之间的延迟（以秒为单位）。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [整数](#integer) | `0`    |

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

为竞技场的boss设置出生位置。

| 键       |      可选值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [字符串列表](#string_list) [1] | 无默认值    |

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

设置在竞技场波次中出现的boss列表。EliteMobs竞技场确实支持在竞技场中生成神话怪物。

| 键       |      值       | 默认 |
|-----------|:-----------------:|:-------:|
| `bossList` | [字符串列表](#string_list) [2] |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

在这个示例中，wave 1会在北方的生成点和南方的生成点各生成一个boss。然后，在波次2中，一个等级为10的神话级boss将在中心点生成。

请注意，你也可以为EliteMobs的boss强制设置一个等级，但建议你在他们的配置文件中设置他们的等级。

</div>

</details>

***

### rawArenaReward

设置波次结束时的奖励。

| 键       |      值值     | 默认值 |
|----------|:--------------:|:-------:|
| `rawArenaReward` | [通用 EliteMobs 掉落表]($language$/elitemobs/loot_tables.md) |  无 |

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

设置竞技场开始前必须具备的最小玩家数量。

| 键       |      值值       | 默认值 |
|----------|:----------------:|:-------:|
| `minimumPlayerCount` | [整数](#integer) |   `1`   |

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

设置一个竞技场可以具备的最大玩家数量。

| 键       |      值值       | 默认值 |
|----------|:----------------:|:-------:|
| `maximumPlayerCount` | [整数](#integer) |  `100`  |

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

设置波次之间的消息。

| 键       |     值值      | 默认值 |
|----------|:--------------:|:-------:|
| `arenaMessages` | 特殊 [3] |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

设置竞技场是否使用圆筒形状（默认为立方体）。

| 键       |      值值       | 默认值 |
|----------|:----------------:|:-------:|
| `cylindricalArena` | [布尔值](#boolean) |  `false`   |

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

| 键       |      值值      | 默认值 |
|----------|:---------------:|:-------:|
| `permission` | [字符串](#integer) |  无   |

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
出生点：使用以下格式：`name=pointName:location=world_name,x,y,z`。

## 特殊 [2]
Boss 列表：使用以下格式：`wave=x:spawnPoint=Y:boss=bossfilename.yml`。

## 特殊 [3]
竞技场消息：使用以下格式：`wave=X:message=your message here`。

<details> 

<summary align="center"><b>竞技场配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: 例子竞技场
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
  - wave=1:message=&d[Arena NPC] &f哇, 这是第一波!
  - wave=2:message=&d[Arena NPC] &f就这样来到第二波了!
  - wave=3:message=&d[Arena NPC] &f接下来是第三波!
  - wave=4:message=&d[Arena NPC] &f已经到第四波了!
  - wave=5:message=&d[Arena NPC] &f这将是最后一波.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>示例解读</b></summary>

<div align="left">

让我们从顶端开始解读这个示例，解释这个竞技场配置做了什么。

首先，通过 `isEnabled` 开启了竞技场，我们可以看到使用 `arenaName` 设置了竞技场的名称。这个名称将会在你与能让玩家进入竞技场的竞技场 NPC（我们将在下文介绍如何制作竞技场 NPC）进行交互时展示。corner1 和 corner2 定义了竞技场的大小。这两个角应在你计划用于竞技场的区域的对面。

`startLocation` 是玩家进入竞技场后将出生的地点，在示例中将会是在 my_arena_world 世界的竞技场中心。`exitLocation` 是玩家竞技场挑战结束后将被传送到的地点。在这个例子中应是在 my_minecraft_world 世界的示例中列举的坐标。

`waveCount` 简单地设置了竞技场将持续的波次。在这个例子中竞技场将持续 5个波次。如果他们的玩家成功存活所有 5 个波次，那他们就成功存活了竞技场。`delayBetweenWaves` 将在下一波开始前设置等待的秒数。在我们的例子中，玩家将有 5 秒的时间准备下一波。

`spawnPoints` 设置了我们可以让我们的怪物出生的位置。我们可以尽可能创建多个并随意命名它们。在示例中，我们决定创建 5 个出生点并命名为 north, south, center, east 和 west。

`bossList`是我们定义哪个boss应在什么波数以及在什么位置出现的地方。例如，第1轮将会有3个boss从我们命名为北部、中部和南部的出生地点出现。这三个都设定为使用同一个boss文件，但我们本可以对每个boss使用不同的文件。

`rawArenaReward`设定的是玩家成功存活/通过一波之后的奖励。如我们在例子中看到的，通过第1波将会奖励玩家5个精英硬币。如果他们能够存活过其他波然后通过第5波，他们会得到25个精英硬币以及获得5级MagmaGuy's牙签的50%几率。

`minimumPlayerCount`设定了竞技场开始前所需要的最少玩家数量。在我们的例子中，这个数值被设定为1，所以只需要一名玩家，竞技场就能开始。`maximumPlayerCount`设定了可以参加竞技场的最大玩家数量。在我们的例子中，这个数值被设定为3，也就是说，如果超过3名玩家试图参加竞技场，那么竞技场将不会开始，除非玩家数量减少到3名或以下。

`arenaMessages`让你可以添加一些在指定波数开始时会在聊天栏中显示的色彩文本。在我们的例子中，我们决定在每一波开始时都显示一段短消息。我们还决定在每一条消息开始时都包含NPC的名字，造成这些文本是由播报员（竞技场主持人）所发出的对话的错觉。

`cylindricalArena`这个设置让我们可以切换我们已经设定的`corner1`和`corner2`应该是圆柱形区域而非方堡形区域。在我们的例子中，我们设定此为`false` ，意味着这个示例竞技场是方堡形状。

`permission`允许我们设定玩家需要拥有的权限才能加入/开始竞技场。在我们的例子中，玩家需要`arena.mypermission`权限才能使用竞技场。

</div>

</details>

## 创造竞技场NPC

<div align="center">

### isEnabled

设置NPC是否启用。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `isEnabled` | [逻辑值](#boolean) | `true`  |

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

设置NPC的显示名称。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `name` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

设置NPC名字下方的角色显示。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `role` | [字符串](#string) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

设定NPC的MineCraft职业。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `profession` | [职业](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*如果使用了`diguise`，该设置将会被覆盖*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

设定NPC的出生位置。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [位置](#serialized_location) |  无   |

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

设定NPC的问候语。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `greetings` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

设定玩家与NPC互动时的对话。

| 键       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `dialog` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

设定NPC的告别语。

| 键       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `farewell` | [字符串列表](#string_list) |  无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*如果字符串太长，您可以使用 \n 将字符串分为多行*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

设定NPC的告别语。

| 键       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `canTalk` | [逻辑值](#boolean) | `true`  |

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

设定NPC开始说话的半径。

| 键       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `activationRadius` | [实数](#double) |  `3.0`  |

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

设定NPC将进行的互动类型。

| 键       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `interactionType` | Special [4] |  `ARENA_MASTER`  |

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

设置自定义NPC伪装。

| 键       |           值           | 默认值 |
| ----------- |:---------------------------:|:-------:|
| `disguise` | [伪装](%language%/elitemobs/libsdisguises.md) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

设置将被传送到哪个竞技场的玩家。

| 键       |           值            | 默认值 |
| ----------- |:---------------------------:|:-------:|
| `arena` | [文件名](#filename) | 无 |

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

设置玩家和NPC互动后应被传送到的地方。通常用此设定将玩家传送到竞技场的专用大厅区域，他们可以在那里开始竞技场挑战，或等待其他玩家完成竞技场挑战。

| 键       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `teleportLocation` | [位置](#location) | 无 |

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

<summary align="center"><b>Arena Config 示例</b></summary>

<div align="left">

```yml
isEnabled: true
name: Example NPC
role: <Arena Master>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Welcome to the Arena!
dialog:
  - Ready to enter the Arena?
farewell:
  - Bye!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
此示例展示了一个基本的竞技场NPC，它会在my_minecraft_world中以僵尸的伪装出现。玩家可以和这个NPC互动来挑战Example Arena。

</div>

</details>

## Special [4]
以下是有效NPC互动类型的列表：

| 类型 | 描述 |
| --- | :-: |
| `GUILD_GREETER` | 打开冒险家公会菜单 |
| `CHAT` | 右键点击循环`dialog` |
| `CUSTOM_SHOP` | 打开自定义商店菜单 |
| `PROCEDURALLY_GENERATED_SHOP` | 打开程序生成的商店 |
| `BAR` | 打开酒吧菜单 |
| `ARENA` | 打开竞技场菜单 |
| `QUEST_GIVER` | 打开程序生成的任务菜单 |
| `CUSTOM_QUEST_GIVER` | 打开设定在`questFilenames`中的特定任务的任务菜单 |
| `NONE` | 无交互 |
| `SELL` | 打开出售菜单 |
| `TELEPORT_BACK` | 将玩家传送回他们在非elitemobs世界最后的位置 |
| `SCRAPPER` | 打开废品菜单 |
| `SMELTER` | 打开熔炼菜单 |
| `REPAIRMAN` | 打开维修菜单 |
| `ENHANCER` | 打开物品强化菜单 |
| `REFINER` | 打开炼制菜单 |
| `UNBINDER` | 打开解绑菜单 |
| `ARENA_MASTER` | 打开设定在`arenaFilename`中的竞技场的菜单 |
| `COMMAND` | 在`command`中设定命令 |