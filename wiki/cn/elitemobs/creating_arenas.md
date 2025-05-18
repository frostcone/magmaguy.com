好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建竞技场

<div align="center">

### isEnabled

设置竞技场是否启用。

| 键        |      值        | 默认值 |
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

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
|`arenaName`| [字符串](#string) | 无    |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

设置竞技场的第一个角落。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
|`corner1`| [序列化位置](#serialized_location) | 无    |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

在此图片中，`corner1` 由 *绿色羊毛* 表示，`corner2` 由 *红色羊毛* 表示。此配置将它们之间的区域指定为竞技场，由 *黄色羊毛* 表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

设置竞技场的第二个角落，必须与 `corner1` 对角相对。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `corner2` | [序列化位置](#serialized_location) | 无    |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

在此图片中，`corner1` 由 *绿色羊毛* 表示，`corner2` 由 *红色羊毛* 表示。此配置将它们之间的区域指定为竞技场，由 *黄色羊毛* 表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

设置竞技场的起始位置。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `startLocation` | [序列化位置](#serialized_location) | 无    |

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

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [序列化位置](#serialized_location) | 无    |

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

设置竞技场的波次数量。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `waveCount` | [整数](#integer) | 无    |

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

设置波次之间的延迟（秒）。

| 键        |      值        | 默认值 |
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

设置竞技场首领的生成位置。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [字符串列表](#string_list) [1] |  无   |

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

设置在竞技场波次中出现的首领列表。EliteMobs 竞技场支持在竞技场中生成 Mythic Mobs。

| 键        |      值        | 默认值 |
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

在此示例中，波次 1 将在北部生成点和南部生成点各生成一个首领。然后，在波次 2，一个 Mythic 首领将在中心点生成，等级为 10。

请注意，您也可以强制设置 EliteMobs 首领的等级，但建议您在其配置文件中设置等级。

</div>

</details>

***

### rawArenaReward

设置在波次结束时给予的奖励。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [通用 EliteMobs 战利品表]($language$/elitemobs/loot_tables.md) |  无   |

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

设置竞技场开始前所需的最少玩家数量。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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

设置竞技场可容纳的最多玩家数量。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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

设置在波次之间显示的消息。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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

设置竞技场是否使用圆柱形（默认为长方体）。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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
生成点：使用以下格式：`name=点名称:location=世界名称,x,y,z`。

## 特殊 [2]
首领列表：使用以下格式：`wave=x:spawnPoint=Y:boss=首领文件名.yml`。

## 特殊 [3]
竞技场消息：使用以下格式：`wave=X:message=您的消息在此`。

<details>

<summary align="center"><b>竞技场配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
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
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details>

<summary align="center"><b>示例解析</b></summary>

<div align="left">

让我们从头开始回顾这个示例，并解释这个竞技场配置的作用。

首先，竞技场通过 `isEnabled` 启用，并且我们可以看到它使用 `arenaName` 设置命名为 Example Arena。当您与竞技场 NPC 互动时（我们将在后面讨论如何创建竞技场 NPC），名称将显示出来，允许玩家加入竞技场。corner1 和 corner2 定义了竞技场的大小。这些角落应该位于您计划用作竞技场的区域的对角。

`startLocation` 是玩家加入竞技场时将生成的位置，在示例中，它将在世界 my_arena_world 的竞技场中心。`exitLocation` 是玩家失败或完成竞技场后将被传送到的位置。在此示例中，它将是世界 my_minecraft_world 和示例中的坐标。

`waveCount` 简单地设置了竞技场将持续的波次数量。在此示例中，这将是 5 个波次。如果玩家设法在所有 5 个波次中幸存下来，他们就成功地通过了竞技场。`delayBetweenWaves` 将设置下一波开始前的秒数。在我们的示例中，玩家将有 5 秒时间准备下一波。

`spawnPoints` 设置了我们可以生成怪物的位置。我们可以创建任意数量的生成点并随意命名。在示例中，我们决定创建 5 个生成点，并将其命名为 north、south、center、east 和 west。

`bossList` 是我们定义哪个首领应该在哪个波次和哪个位置生成的地方。在示例中，波次 1 将有 3 个首领从我们命名的 north、center 和 south 生成位置生成。这三个都设置为使用相同的首领文件，但我们可以为每个首领使用不同的首领文件。

`rawArenaReward` 设置了玩家设法在波次中幸存/击败后将获得的奖励。正如我们在示例中看到的，击败波次 1 将奖励玩家 5 个精英币。如果他们设法在剩余的波次中幸存下来并击败波次 5，他们将获得 25 个精英币，并有 50% 的几率获得一个 5 级的 MagmaGuy's Toothpick。

`minimumPlayerCount` 设置了竞技场开始前所需的最少玩家数量。在我们的示例中，此设置设置为 1，因此只需要一个玩家即可开始竞技场。`maximumPlayerCount` 设置了可以参与竞技场的最多玩家数量。在我们的示例中，此设置设置为 3，这意味着如果超过 3 名玩家尝试参与竞技场，则竞技场将不会开始，直到玩家数量为 3 或更少。

`arenaMessages` 允许您添加一些将在定义的波次开始时在聊天中显示的趣味文本。在我们的示例中，我们决定在每个波次开始时显示一条简短消息。我们还决定在每条消息的开头包含 NPC 名称，营造出文本是播报员（竞技场大师）口语对话的错觉。

`cylindricalArena` 此设置将允许我们切换我们使用 `corner1` 和 `corner2` 定义的区域是圆柱形还是长方体。在我们的示例中，我们将其设置为 `false`，这意味着示例竞技场是长方体。

`permission` 允许我们设置玩家需要拥有的权限才能加入/开始竞技场。在我们的示例中，玩家需要 `arena.mypermission` 权限才能使用竞技场。

</div>

</details>

## 创建竞技场 NPC

<div align="center">

### isEnabled

设置 NPC 是否启用。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
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

设置 NPC 的显示名称。

| 键        |      值        | 默认值 |
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

设置 NPC 名称下方的角色显示。

| 键        |      值        | 默认值 |
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

设置 NPC 的 MineCraft 职业。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `profession` | [职业](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*如果使用了 `disguise`，此设置将被覆盖。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

设置 NPC 的生成位置。

| 键        |      值        | 默认值 |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [序列化位置](#serialized_location) |  无   |

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

| 键        |      值        | 默认值 |
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

设置玩家与 NPC 互动时的对话。

| 键        |      值        | 默认值 |
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

设置 NPC 的告别对话。

| 键        |           值            | 默认值 |
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

*如果字符串太长，可以使用 \n 将其分成多行。*

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

设置 NPC 是否能说话。

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
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

设置 NPC 开始说话的半径。

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
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

设置 NPC 将进行的互动类型。

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `interactionType` | 特殊 [4] |  `ARENA_MASTER`  |

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

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `disguise` | [伪装]($language$/elitemobs/libsdisguises.md) |  无   |

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

设置玩家将被传送到的竞技场。

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `arena` | [文件名](#filename) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```
Please specify the language you would like me to translate the text into.