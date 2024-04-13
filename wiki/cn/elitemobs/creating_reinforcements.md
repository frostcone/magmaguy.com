# 创建自定义增援

如果你有兴趣在战斗中召唤精英单位来增强boss，这个指南将详细覆盖这部分内容。

## 创建自定义boss的步骤：

1. 创建你的主要自定义boss，它会召唤你的自定义boss
2. 创建一个用于增援的自定义boss。请记住，自定义boss可以比原版怪物更强，但也可以更弱。
3. 在配置文件中添加正确的增援行

## 创建增援行

假设你有一个自定义boss，格式如下：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

你想给它添加增援。以下是一个增援可能看起来的样子：

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

为了使其有效，将其添加到powers列表中：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

增援现已添加到boss实体。然而，如你所见，这里有几个你可以定制的选项。让我们来讨论一下它们。

## 所有自定义增援选项

*提示：你也可以使用EliteScript来召唤增援，更多信息点击[这里]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement)。*

<div align="center">

### summonType

这是一个必填字段。它设置增援应该何时生成。

| 键    |   值    | 默认  |
|--------|:-----------:|:--------:|
| `summonType` | 专用 [1] | `ON_HIT` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### 特别 [1]

| 键 | 描述                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | 第一次击中boss时，增援会生成一次（依赖于一定的几率） |
| `ON_HIT`  | 每次boss被击中时，增援都会生成（依赖于一定的几率）|
| `ON_COMBAT_ENTER`    | 当boss进入战斗时生成增援（1）                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  特别：这是专门为boss进入战斗时放置末影水晶的巨龙战斗设计的（1）                                                                                                 |
| `GLOBAL`    |  对于与boss在同一个世界的所有玩家都会生成增援。增援会在玩家附近生成，无论他们离boss有多远。这需要设置`customSpawn`字段来工作！                                                                                                 |

_(1)当boss被玩家击中，或者检测到一定范围内的玩家时，便会进入战斗。_

***

### filename

这是一个必填字段，因为它设置应该生成哪一个增援。使用`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`设置时，这个字段是唯一的例外，因为末影水晶不是精英。

| 键    |        值         | 默认 |
|--------|:---------------------:|:-------:|
| `filename` | [Filename](#filename) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**最小可行性**

`summonType: SUMMON_TYPE` 和 `filename: filename.yml` 自身足以创建一个自定义增援。以下示例将说明这一点。

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*然而，如果你想要或者需要更复杂的配置，继续阅读下面的内容，看看你还能用这些选项做什么。*

</div>

</details>

</div>

<div align="center">

***

### chance

这是一个为`summonType`的`ONCE`和`ON_HIT`选项提供的可选配置字段。它表示当boss被击中时自定义增援生成的概率。

| 键    |        值         | 默认 |
|--------|:---------------------:|:-------:|
| `chance` | [双精度浮点数](#double) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chance: 0.5
```
*表示有50%的概率生成一个自定义增援。*

</div>

</details>

***

### location

`location: x,y,z` 是一个可选的配置字段，允许管理员偏移增援的位置，其数值为块的数目。你需要了解这个选项的一些关键概念：

**偏移位置是相对的。** 这意味着`location: 0,10,0` 会在boss的上方精确地生成一个boss，而不是在世界坐标0,10,0。

**对于区域boss，相对位置不同。** 区域boss总是将它们的生成点作为相对位置的起点，这意味着如果你知道boss的生成点，并且可以计算方块数，你可以在特定位置生成增援boss。Binder of Worlds的巢穴便依赖此规则，在极其特定的方块位置生成挑战塔boss，无论龙boss在何处。

**如果你计算距离出错，boss会生成在方块里面。**

| 键    |      值       | 默认 |
|--------|:-----------------:|:-------:|
| `location` | [字符串](#string) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*对于非区域的自定义boss，增援会在boss的上方精确的生成10个方块的位置，无论它在任何地方。*

*对于区域boss，增援会在boss的生成点的上方精确地生成10个方块的位置，无论boss在什么地方。*

</div>

</details>

_**重要提示：对于`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`，这是一个必填字段！**_

***

### lightningRod

这是一个仅对`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`有用的特殊设置。这使得末影水晶具有在延迟之后对地面进行惩击的能力。

它不能和其他自定义增援一起使用，因为那些应该依赖于这些类型的能力的力量。

| 键    |       值        | 默认 |
|--------|:-------------------:|:-------:|
| `lightningRod` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

这是一个可选的配置字段，使得自定义增援能够继承boss的威胁级别。

这个功能在你希望生成的增援能够攻击造成最多伤害的玩家时尤其有用。

| 键    |       值        | 默认 |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

这是一个可选的配置字段，用于设置生成的增援的数量。

| 键    |       值        | 默认 |
|--------|:-------------------:|:-------:|
| `amount` | [整数](#integer) |   `1`   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

这是一个可选的配置字段，它设置自定义增援是否应该在附近生成，而不是在boss的顶部或者特定的相对位置。

这个方法应该正确地考虑地形的变化，不在墙内生成boss，尽管在一些设置中，如果战斗区域太小，可能会导致boss生成在墙后面。其半径约为30个方块。

| 键    |       值        | 默认 |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

这是一个可选的配置字段，它设置自定义增援是否应该继承其正在增援的自定义boss的等级。

| 键    |       值        | 默认 |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

这是一个仅用于全球增援的配置字段。它使用自定义生成设置来设置增援将被生成的地方。

通过使用它，可以使得增援能够在地表、光照处、特定的生物群系等地方生成。更多详情请查看[自定义生成]($language$/elitemobs/creating_spawns.md)的wiki页面。

| 键    |        值         | 默认 |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Filename](#filename) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## 组装一个大增援

让我们创建一个使用大多数前述字段的示例增援：

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

这做了以下几件事：

- 创建一个自定义增援
- 自定义增援会在自定义boss进入战斗时生成 (`summonType: ON_COMBAT_ENTER`)
- 召唤的自定义增援会是`test_boss.yml`里的一个 (`filename: test_boss.yml`)
- 自定义增援会在自定义boss当前位置的30个方块内生成 (`spawnNearby: true`)
- 自定义增援会继承其正在增援的自定义boss的威胁级别，也就是说它会攻击造成最大伤害的玩家(`inheritAggro: true`)
- 尽管设置在`test_boss.yml`中，自定义增援会和正在增援的自定义boss的等级一样 (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

这做了以下几件事：

- 创建一个自定义增援
- 自定义增援会在战斗开始时生成一个放置的末影水晶 (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- 末影水晶会在延时后对周围的地面进行惩击 (`lightningRod: true`)

现在将它应用到自定义boss：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

你已经完成了！这里还有一些其他的提示：

- 字段可以按任何顺序设置，尽管建议总是首先设置`summonable`！
- 这在老的增援系统上是一个大的改进，老的系统已经不再列出。现在不建议依赖它，因为它可能会在未来停止工作。