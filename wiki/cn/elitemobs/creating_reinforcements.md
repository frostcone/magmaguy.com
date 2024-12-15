[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义增援

如果您有兴趣在战斗期间召唤精英来增援首领，本指南将详细介绍。

## 创建自定义首领的步骤：

1. 创建将召唤自定义首领的主要自定义首领
2. 为增援创建自定义首领。请记住，自定义首领可能比原版生物更强大，但也可能更弱。
3. 将正确的增援行添加到配置文件中

## 创建增援行

假设您有一个采用以下格式的自定义首领：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界结合者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

并且您想向其添加增援。以下是这样一个增援的样子：

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

要使其有效，请将其添加到能力列表中：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界结合者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

现在，增援已添加到首领实体。但是，如您所见，您可以在此处自定义几个选项。让我们来介绍一下它们。

## 所有自定义增援选项

*提示：您还可以使用 EliteScript 来召唤增援，有关更多信息，请参见[此处]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement)。*

<div align="center">

### summonType

这是一个必填字段。它设置应何时生成增援。

| 键    |   值    | 默认值 |
|--------|:-----------:|:--------:|
| `summonType` | 特殊 [1] | `ON_HIT` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### 特殊 [1]

| 键 | 描述                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
| `ONCE`   | 仅在首领首次被击中时生成一次增援。（可以依靠一定几率发生） |
| `ON_HIT`  |  在首领每次被击中时生成增援（可以依靠一定几率发生）             |
| `ON_COMBAT_ENTER`    |  在首领进入战斗时生成增援 (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  特殊：这专门用于在首领进入战斗时放置下末影水晶以进行龙战 (1)                                                                                                 |
| `GLOBAL`    |  为与首领位于同一世界中的每个玩家生成增援。无论玩家离首领有多远，增援都会在玩家附近生成。这需要将 `customSpawn` 字段设置为才能工作！                                                                                                 |

_(1) 首领在被玩家击中或检测到范围内的玩家时进入战斗。_

***

### filename

这是一个必填字段，因为它设置应生成哪个增援。将此字段设置为强制性的唯一例外是使用 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 设置，因为末影水晶不是精英。

| 键    |        值         | 默认值 |
|--------|:---------------------:|:-------:|
| `filename` | [文件名](#filename) |  无   |

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

`summonType: SUMMON_TYPE` 和 `filename: filename.yml` 本身就足以创建自定义增援。以下示例演示了这一点。

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界结合者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*但是，如果您需要更复杂的内容，请继续阅读以下内容，了解您可以使用这些选项执行的其他操作。*

</div>

</details>

</div>

<div align="center">

***

### chance

这是一个可选的配置字段，用于补充 `summonType` `ONCE` 和 `ON_HIT` 选项。它表示当首领被击中时生成自定义增援的机会。

| 键    |        值         | 默认值 |
|--------|:---------------------:|:-------:|
| `chance` | [双精度浮点数](#double) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
chance: 0.5
```
*表示有 50% 的机会生成自定义增援。*

</div>

</details>

***

### location

`location: x,y,z` 是一个可选的配置字段，允许管理员将增援的位置偏移多个方块。以下是您需要了解的有关此选项的关键概念：

**偏移位置是相对的。** 这意味着 `location: 0,10,0` 将在一个恰好高于首领 10 个方块的位置生成首领，而不是在世界坐标 0,10,0 上生成。

**相对位置对于区域首领是不同的。** 区域首领将始终使用其生成点作为相对位置的起点，这意味着如果您知道首领的生成点在哪里并计算方块，您可以让增援首领在特定位置生成。世界结合者的巢穴依靠此功能在极其特定的方块位置生成挑战塔首领，而不管龙首领在哪里。

**如果您弄乱了测量距离，首领将在方块内部生成。**

| 键    |      值       | 默认值 |
|--------|:-----------------:|:-------:|
| `location` | [字符串](#string) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*对于非区域自定义首领，无论它可能在哪里，都将在恰好高于首领 10 个方块的位置生成增援。*

*对于区域自定义首领，无论首领在哪里，都将在区域首领生成点上方恰好 10 个方块的位置生成增援。*

</div>

</details>

_**重要提示：这是专门用于 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的必填字段！**_

***

### lightningRod

是一种特殊设置，仅适用于 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`。这使末影水晶能够在延迟时在其周围的地面上施加闪电。

它不能与其他自定义增援一起使用，因为这些增援应该依靠能力来发挥这些类型的能力。

| 键    |       值        | 默认值 |
|--------|:---------------:|:------:|
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

是一个可选的配置字段，它使自定义增援继承首领的威胁等级。

当您希望生成的增援以造成最大伤害的人为目标时，这尤其有用。

| 键    |       值        | 默认值 |
|--------|:---------------:|:------:|
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

是一个可选的配置字段，它设置生成的增援数量。

| 键    |       值        | 默认值 |
|--------|:---------------:|:------:|
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

是一个可选的配置字段，用于设置自定义增援是否应在附近生成，而不是在首领之上或特定的相对位置生成。

此方法应正确考虑地形变化，并且不会在墙壁内生成首领，尽管在某些设置中，如果战斗区域太小，可能会导致它们在墙壁后面生成。半径约为 30 个方块。

| 键    |       值        | 默认值 |
|--------|:---------------:|:------:|
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

是一个可选的配置字段，用于设置自定义增援是否应继承其增援的自定义首领的等级。

| 键    |       值        | 默认值 |
|--------|:---------------:|:------:|
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

是一个仅用于全局增援的配置字段。它使用自定义生成设置来设置增援可以在哪里生成。

这可以用于使增援能够在地面上、有光的地方、特定生物群系中生成等等。有关更多详细信息，请查看有关[自定义生成]($language$/elitemobs/creating_spawns.md)的 wiki 页面

| 键    |        值         | 默认值 |
|--------|:---------------------:|:-------:|
| `customSpawn` | [文件名](#filename) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## 将大型增援组合在一起

让我们使用大多数先前字段创建一个示例增援：

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

这将执行以下操作：

- 创建自定义增援
- 自定义增援将在自定义首领进入战斗时生成 (`summonType: ON_COMBAT_ENTER`)
- 召唤的自定义增援将来自 `test_boss.yml` (`filename: test_boss.yml`)
- 自定义增援将在自定义首领当前位置的 30 个方块范围内生成 (`spawnNearby: true`)
- 自定义增援将继承其增援的自定义首领的仇恨，这意味着它将攻击造成最多伤害的玩家 (`inheritAggro: true`)
- 无论 `test_boss.yml` 中的设置如何，自定义增援的等级都将与其增援的自定义首领的等级相同 (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

这将执行以下操作：

- 创建自定义增援
- 自定义增援将是一个末影水晶，在战斗开始时被放置下来 (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- 末影水晶将在延迟时猛击周围的地面 (`lightningRod: true`)

现在将其应用于自定义首领：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界结合者
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

您已完成！以下是一些其他提示：

- 这些字段可以按任意顺序设置，但建议始终将 `summonable` 放在第一位！
- 这是对旧增援系统的重大改进，该系统不再列出。不建议在此阶段依赖它，因为它将来可能会停止工作。
