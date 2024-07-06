[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建竞技场

<div align="center">

### isEnabled

设置竞技场是否启用。

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

### arenaName

设置竞技场的名称。

| 键         | 值              | 默认值 |
|-------------|:-----------------|--------|
| `arenaName` | [字符串](#字符串) | 无     |

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

| 键        | 值                     | 默认值 |
|------------|:------------------------:|--------|
| `corner1` | [位置](#序列化位置)      | 无     |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
corner1: 我的竞技场世界,10,50,-10,0,0
```

<div align="center">

在此图像中，`corner1` 由*绿色羊毛*表示，`corner2` 由*红色羊毛*表示。此配置将它们之间的区域指定为竞技场，由*黄色羊毛*表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

设置竞技场的第二个角，必须与 `corner1` 对角线相对。

| 键         | 值                     | 默认值 |
|-------------|:------------------------:|--------|
| `corner2` | [位置](#序列化位置)      | 无     |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
corner2: 我的竞技场世界,-10,50,10,0,0
```

<div align="center">

在此图像中，`corner1` 由*绿色羊毛*表示，`corner2` 由*红色羊毛*表示。此配置将它们之间的区域指定为竞技场，由*黄色羊毛*表示。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

设置竞技场的起始位置。

| 键              | 值                     | 默认值 |
|-----------------|:------------------------:|--------|
| `startLocation` | [位置](#序列化位置)      | 无     |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
startLocation: 我的竞技场世界,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

设置竞技场的退出位置。

| 键             | 值                     | 默认值 |
|----------------|:------------------------:|--------|
| `exitLocation` | [位置](#序列化位置)      | 无     |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
exitLocation: 我的世界,1,50,1,0,0
```

</div>

</details>

***

### waveCount

设置竞技场拥有的波次数。

| 键          | 值                | 默认值 |
|--------------|:------------------:|--------|
| `waveCount` | [整数](#整数)          | 无     |

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

设置波次之间的延迟时间（以秒为单位）。

| 键                 | 值                | 默认值 |
|---------------------|:------------------:|--------|
| `delayBetweenWaves` | [整数](#整数)          | `0`    |

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

| 键           | 值                           | 默认值 |
|---------------|:------------------------------:|--------|
| `spawnPoints` | [字符串列表](#字符串列表) [1] | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=我的竞技场世界,219.5,71,273.5
- name=south:location=我的竞技场世界,219.5,71,316.5
- name=west:location=我的竞技场世界,197.5,71,295.5
- name=east:location=我的竞技场世界,240.5,71,295.5
- name=center:location=我的竞技场世界,219.5,71,295.5
```

</div>

</details>

***

### bossList

设置在竞技场波次中出现的 Boss 列表。EliteMobs 竞技场确实支持 Mythic Mobs 在竞技场中生成。

| 键         | 值                           | 默认值 |
|-------------|:------------------------------:|--------|
| `bossList` | [字符串列表](#字符串列表) [2] | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=我的 Boss_wave_1.yml
- wave=1:spawnPoint=south:boss=我的 Boss_wave_1.yml
- wave=2:spawnPoint=center:boss=我的 MythicMobs_Boss:mythicmob=true:level=10
```

在这个例子中，第 1 波将在北部生成点生成一个 Boss，在南部生成点生成一个 Boss。然后，在第 2 波，一个 10 级的 Mythic Boss 将在中心点生成。

请注意，您也可以强制设置 EliteMobs Boss 的等级，但建议您在它们的配置文件中设置它们的等级。

</div>

</details>

***

### rawArenaReward

设置在波次结束时给予的奖励。

| 键            | 值                                                      | 默认值 |
|----------------|:--------------------------------------------------------:|--------|
| `rawArenaReward` | [通用 EliteMobs 战利品表]($language$/elitemobs/loot_tables.md) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=附魔书_伤害_所有.yml:wave=5:chance=0.25
- filename=精英碎片_微小.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=召唤商人卷轴.yml:wave=5
- filename=MagmaGuy 的牙签.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

设置竞技场开始前必须拥有的最小玩家数量。

| 键                    | 值                | 默认值 |
|------------------------|:------------------:|--------|
| `minimumPlayerCount` | [整数](#整数)          | `1`    |

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

设置竞技场可以容纳的最大玩家数量。

| 键                    | 值                | 默认值 |
|------------------------|:------------------:|--------|
| `maximumPlayerCount` | [整数](#整数)          | `100`   |

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

设置在波次之间运行的消息。

| 键             | 值                 | 默认值 |
|----------------|:--------------------:|--------|
| `arenaMessages` | 特殊 [3]             | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[竞技场播报员] &f第一波开始了！"
- wave=2:message="&a[竞技场播报员] &f哇，已经是第二波了。"
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

设置竞技场是否使用圆柱形（默认值为长方体）。

| 键                | 值              | 默认值  |
|--------------------|:-----------------|---------|
| `cylindricalArena` | [布尔值](#布尔值) | `false` |

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

| 键          | 值              | 默认值 |
|--------------|:-----------------|--------|
| `permission` | [字符串](#整数) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: 我的权限.竞技场
```

</div>

</details>

***

</div>


## 特殊 [1] 
生成点：使用以下格式：`name=点名称:location=世界名称,x,y,z`。

## 特殊 [2] 
Boss 列表：使用以下格式：`wave=x:spawnPoint=Y:boss=Boss 文件名.yml`。

## 特殊 [3] 
竞技场消息：使用以下格式：`wave=X:message=您的消息`。

<details> 

<summary align="center"><b>竞技场配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: 示例竞技场
corner1: 我的竞技场世界,0,0,0,0,0
corner2: 我的竞技场世界,50,50,50,0,0
startLocation: 我的竞技场世界,25,0,25,0,0
exitLocation: 我的 Minecraft 世界,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=我的竞技场世界,40.5,0,0
  - name=south:location=我的竞技场世界,10.5,0,0
  - name=west:location=我的竞技场世界,0,0,40.5
  - name=east:location=我的竞技场世界,0,0,10.5
  - name=center:location=我的竞技场世界,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=示例竞技场_波次_1_怪物.yml
  - wave=1:spawnPoint=center:boss=示例竞技场_波次_1_怪物.yml
  - wave=1:spawnPoint=south:boss=示例竞技场_波次_1_怪物.yml
  - wave=2:spawnPoint=center:boss=示例竞技场_波次_2_怪物.yml
  - wave=3:spawnPoint=east:boss=示例竞技场_波次_3_怪物.yml
  - wave=3:spawnPoint=west:boss=示例竞技场_波次_3_怪物.yml
  - wave=4:spawnPoint=center:boss=示例竞技场_波次_4_怪物.yml
  - wave=4:spawnPoint=center:boss=示例竞技场_波次_4_怪物.yml
  - wave=5:spawnPoint=center:boss=示例竞技场_波次_5_怪物.yml
  - wave=5:spawnPoint=south:boss=示例竞技场_波次_5_怪物.yml
  - wave=5:spawnPoint=west:boss=示例竞技场_波次_5_怪物.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=MagmaGuy 的牙签.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[竞技场 NPC] &f哇！第一波！
  - wave=2:message=&d[竞技场 NPC] &f太棒了，已经是第二波了！
  - wave=3:message=&d[竞技场 NPC] &f第三波开始了！
  - wave=4:message=&d[竞技场 NPC] &f已经是第四波了！
  - wave=5:message=&d[竞技场 NPC] &f好吧，最后一波了。
cylindricalArena: false
permission: 竞技场.我的权限
```
</div>

</details>

<details> 

<summary align="center"><b>示例细分</b></summary>

<div align="left">

让我们从头开始回顾这个示例，并解释此竞技场配置的作用。

首先，竞技场使用 `isEnabled` 启用，我们可以看到它使用 `arenaName` 设置被称为“示例竞技场”。当您与允许玩家加入竞技场的竞技场 NPC（我们将在后面讨论如何创建竞技场 NPC）交互时，将会显示该名称。`corner1` 和 `corner2` 定义了竞技场的范围。这些角应该位于您计划用于竞技场的区域中彼此相对的两侧。

`startLocation` 是玩家加入竞技场时生成的位置，在本例中，它位于“我的竞技场世界”世界中竞技场的中心。`exitLocation` 是玩家在竞技场失败或完成竞技场后将被传送到的地方。在这种情况下，它将是“我的 Minecraft 世界”世界以及示例中的坐标。

`waveCount` 只是设置竞技场将持续的波次数。在本例中，将有 5 波。如果玩家设法在所有 5 波中生存下来，则他们就成功通关了竞技场。`delayBetweenWaves` 将设置下一波开始之前的秒数。在我们的示例中，玩家将在下一波开始之前有 5 秒钟的时间进行准备。

`spawnPoints` 设置我们可以生成怪物的位置。我们可以根据需要创建任意数量的生成点，并根据需要命名它们。在本例中，我们决定创建 5 个生成点，并将它们命名为 north、south、center、east 和 west。

`bossList` 是我们定义哪个 Boss 应该在哪一波以及在哪个位置生成的地方。在本例中，第 1 波将在我们命名为 north、center 和 south 的生成位置生成 3 个 Boss。这三个都设置为使用相同的 Boss 文件，但我们可以为每个 Boss 使用不同的 Boss 文件。

`rawArenaReward` 设置玩家在成功生存/击败一波后将获得的奖励。正如我们在示例中看到的，击败第 1 波将奖励玩家 5 个精英硬币。如果他们设法在剩下的波次中生存下来并击败了第 5 波，他们将获得 25 个精英硬币和 50% 的几率获得 5 级 MagmaGuy 的牙签。

`minimumPlayerCount` 设置竞技场开始前所需的最小玩家数量。在我们的示例中，此设置设置为 1，因此竞技场开始只需要一名玩家。`maximumPlayerCount` 设置可以参与竞技场的最大玩家数量。在我们的示例中，此设置设置为 3，这意味着如果超过 3 名玩家尝试参与竞技场，则竞技场将不会开始，直到玩家人数减少到 3 人或更少。

`arenaMessages` 允许您添加一些将在定义的波次开始时在聊天中显示的提示文本。在我们的示例中，我们决定在每波开始时显示一条短消息。我们还决定在每条消息的开头都包含 NPC 的名字，给人一种这些文字是由播报员（竞技场大师）说出的对话的错觉。

`cylindricalArena` 此设置让我们可以切换使用 `corner1` 和 `corner2` 定义的区域是圆柱形还是长方体。在我们的示例中，我们将其设置为 `false`，这意味着示例竞技场是长方体。

`permission` 允许我们设置玩家加入/开始竞技场所需的权限。在我们的示例中，玩家需要拥有 `arena.mypermission` 权限才能使用竞技场。

</div>

</details>

## 创建竞技场 NPC

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

设置 NPC 的显示名称。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `name` | [字符串](#字符串) | 无      |

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

设置 NPC 名称下方显示的角色。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `role` | [字符串](#字符串) | 无      |

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

| 键          | 值                                                                        | 默认值 |
|--------------|:-----------------------------------------------------------------------------:|--------|
| `profession` | [职业](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*如果使用了 `disguise`，则将被覆盖。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

设置 NPC 的生成位置。

| 键              | 值                     | 默认值 |
|-----------------|:------------------------:|--------|
| `spawnLocation` | [位置](#序列化位置)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnLocation: 我的世界,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

设置 NPC 的问候语。

| 键          | 值                           | 默认值 |
|--------------|:------------------------------:|--------|
| `greetings` | [字符串列表](#字符串列表) | 无      |

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

设置玩家与 NPC 交互时的对话。

| 键      | 值                           | 默认值 |
|----------|:------------------------------:|--------|
| `dialog` | [字符串列表](#字符串列表) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dialog:
- 准备好迎接挑战了吗？
- 面临竞技场？
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

设置 NPC 的告别语。

| 键         | 值                           | 默认值 |
|-------------|:------------------------------:|--------|
| `farewell` | [字符串列表](#字符串列表) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
farewell:
- 再见。
- 带着你的盾牌回来，或者倒在上面！
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*如果字符串太长，您可以使用 \n 将字符串分成多行。*

<div align="left">

```yml
farewell:
- 再见。
- 带着你的\n盾牌回来，或者倒在上面！
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

设置 NPC 的告别语。

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

设置 NPC 开始说话的半径。

| 键                | 值              | 默认值 |
|--------------------|:-----------------|--------|
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

| 键                | 值              | 默认值        |
|--------------------|:-----------------|----------------|
| `interactionType` | 特殊 [4]        | `ARENA_MASTER` |

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

| 键         | 值                                 | 默认值 |
|-------------|:-------------------------------------:|--------|
| `disguise` | [伪装]($language$/elitemobs/libsdisguises.md) | 无      |

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

设置玩家将被传送到哪个竞技场。

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

### teleportLocation

设置玩家在与 NPC 交互后应该被传送到哪里。此设置通常用于将玩家传送到竞技场的专用大厅类型区域，他们可以在那里开始竞技场挑战或等待其他玩家完成竞技场。

| 键                  | 值                 | 默认值 |
|----------------------|:--------------------:|--------|
| `teleportLocation` | [位置](#位置)       | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: 我的竞技场世界,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>竞技场 NPC 配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
name: 示例 NPC
role: <竞技场大师>
profession: ARMORER
spawnLocation: 我的 Minecraft 世界,233,44,245,0,0
greetings:
  - 欢迎来到竞技场！
dialog:
  - 准备好进入竞技场了吗？
farewell:
  - 再见！
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: 示例竞技场.yml
```
此示例显示了一个将在“我的 Minecraft 世界”中生成的带有僵尸伪装的基本竞技场 NPC。玩家可以与这位 NPC 交互以挑战示例竞技场。

</div>

</details>

## 特殊 [4] 
以下是有效的 NPC 交互类型列表：

| 类型              | 描述                                                         |
|-------------------|--------------------------------------------------------------|
| `GUILD_GREETER` | 打开冒险家公会菜单                                              |
| `CHAT`           | 右键单击循环浏览 `dialog`                                       |
| `CUSTOM_SHOP`     | 打开自定义商店菜单                                               |
| `PROCEDURALLY_GENERATED_SHOP` | 打开程序生成的商店                                           |
| `BAR`            | 打开酒吧菜单                                                   |
| `ARENA`          | 打开竞技场菜单                                                  |
| `QUEST_GIVER`    | 打开程序生成的任务菜单                                          |
| `CUSTOM_QUEST_GIVER` | 打开 `questFilenames` 中设置的特定任务集的任务菜单            |
| `NONE`           | 无交互                                                        |
| `SELL`           | 打开出售菜单                                                   |
| `TELEPORT_BACK`  | 将玩家传送回他们上次所在的非 EliteMobs 世界位置               |
| `SCRAPPER`       | 打开碎片菜单                                                   |
| `SMELTER`        | 打开熔炼菜单                                                   |
| `REPAIRMAN`      | 打开修理菜单                                                   |
| `ENHANCER`       | 打开物品强化菜单                                               |
| `REFINER`        | 打开精炼菜单                                                   |
| `UNBINDER`       | 打开解绑菜单                                                   |
| `ARENA_MASTER`   | 打开 `arenaFilename` 中设置的竞技场的竞技场菜单                 |
| `COMMAND`        | 运行 `command` 中设置的命令                                     |


