# 创建自定义援军

如果您有兴趣在战斗中召唤精英来增援首领，本指南将详细介绍如何操作。

## 创建自定义首领的步骤：

1. 创建你的主自定义首领，它将召唤你的自定义援军首领
2. 为援军创建一个自定义首领。请记住，自定义首领可能比原版怪物更强大，但也可能更弱。
3. 将正确的援军行添加到配置文件中

## 创建援军行

假设你有一个格式如下的自定义首领：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

你想给它添加援军。以下是一个援军的示例：

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

为了使其生效，将其添加到 powers 列表中：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

援军现在已添加到首领实体。但是，如您所见，这里有几个选项可以自定义。让我们来介绍一下。

## 所有自定义援军选项

*提示：您还可以使用 EliteScript
来召唤援军，更多信息请[点击此处]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement)。*

<div align="center">

### summonType

这是一个必填字段。它设置援军应该何时生成。

| 键            |   值    |   默认值    |
|--------------|:------:|:--------:|
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

| 键                               | 描述                                                                    |
|---------------------------------|-----------------------------------------------------------------------|
| `ONCE`                          | 援军仅生成一次，在首领第一次被击中时。（可以依赖于发生的 % 几率）                                    |
| `ON_HIT`                        | 每次首领被击中时都会生成援军（可以依赖于发生的 % 几率）                                         |
| `ON_COMBAT_ENTER`               | 当首领进入战斗时生成援军 (1)                                                      |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | 特殊：专门用于在首领进入战斗时放置末影水晶用于龙战 (1)                                         |
| `GLOBAL`                        | 为与首领在同一世界中的每个玩家生成援军。援军将生成在玩家附近，无论他们离首领有多远。这需要设置 `customSpawn` 字段才能工作！ |

_(1) 首领在被玩家击中或检测到范围内的玩家时进入战斗。_

***

### filename

这是一个必填字段，因为它设置了应该生成哪个援军。
使得该字段强制的唯一例外是当使用 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 设置时，因为末影水晶不是精英。

| 键          |        值         | 默认值 |
|------------|:----------------:|:---:|
| `filename` | [文件名](#filename) |  无  |

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

**最低可行性**

`summonType: SUMMON_TYPE` 和 `filename: filename.yml` 本身足以创建一个自定义援军。以下示例演示了这一点。

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*但是，如果您想要或需要更复杂的功能，请继续阅读以下内容，了解您还可以使用这些选项执行哪些操作。*

</div>

</details>

</div>

<div align="center">

***

### chance

这是一个可选的配置字段，用于补充 `summonType` `ONCE` 和 `ON_HIT` 选项。它表示首领被击中时自定义援军生成的几率。

| 键        |       值        | 默认值 |
|----------|:--------------:|:---:|
| `chance` | [双精度](#double) |  无  |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
chance: 0.5
```

*表示有 50% 的几率生成自定义援军。*

</div>

</details>

***

### location

`location: x,y,z` 是一个可选的配置字段，它允许管理员通过一些方块来偏移援军的位置。以下是您需要了解的有关此选项的关键概念：

**偏移位置是相对的。** 这意味着 `location: 0,10,0` 将在首领上方 10 个方块的位置生成首领，而不是在世界坐标 0,10,0 处生成。

**相对位置对于区域首领来说是不同的。**
区域首领将始终使用其生成点作为相对位置的原点，这意味着如果您知道首领的生成点并计算方块，您可以让援军首领在特定的位置生成。世界束缚者的巢穴依靠这一点，无论龙首领在哪里，都能在极其特定的方块位置生成挑战塔首领。

**如果您测量距离时出错，首领将在方块内部生成。**

| 键          |       值        | 默认值 |
|------------|:--------------:|:---:|
| `location` | [字符串](#string) |  无  |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
location: 0,10,0
```

*对于非区域自定义首领，无论首领在哪里，都会在首领上方 10 个方块的位置生成援军。*

*对于区域自定义首领，无论首领在哪里，都会在区域首领的生成点上方 10 个方块的位置生成援军。*

</div>

</details>

_**重要提示：这是 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的必填字段！**_

***

### lightningRod

是一个特殊设置，仅对 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 有用。这使末影水晶能够在延迟后击打周围的地面。

它不能与其他自定义援军一起使用，因为那些援军应该依赖于这些类型能力的 power。

| 键              |        值        |   默认值   |
|----------------|:---------------:|:-------:|
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

是一个可选的配置字段，使自定义援军继承首领的威胁等级。

当您想要使生成的援军瞄准造成最大伤害的人时，这尤其有用。

| 键              |        值        |   默认值   |
|----------------|:---------------:|:-------:|
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

是一个可选的配置字段，用于设置生成的援军数量。

| 键        |       值        | 默认值 |
|----------|:--------------:|:---:|
| `amount` | [整数](#integer) | `1` |

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

是一个可选的配置字段，用于设置自定义援军是应在附近生成，而不是在首领上方或特定的相对位置生成。

此方法应正确考虑地形变化，并且不会在墙壁内生成首领，尽管在某些设置中，如果战斗区域太小，可能会导致它们在墙壁后面生成。具有约
30 个方块的半径。

| 键             |        值        |   默认值   |
|---------------|:---------------:|:-------:|
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

是一个可选的配置字段，用于设置自定义援军是否应继承其增援的自定义首领的等级。

| 键              |        值        |   默认值   |
|----------------|:---------------:|:-------:|
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

是一个配置字段，仅用于全局援军。它使用自定义生成设置来设置援军能够生成的位置。

这可以用于使援军能够在地面上、有光照的地方、特定的生物群系中生成等等。有关更多详细信息，请查看 [自定义生成]($language$/elitemobs/creating_spawns.md)
上的 wiki 页面

| 键             |        值         | 默认值 |
|---------------|:----------------:|:---:|
| `customSpawn` | [文件名](#filename) |  无  |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## 组合一个大型援军

让我们使用大多数之前的字段创建一个示例援军：

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

这会执行以下操作：

- 创建一个自定义援军
- 自定义援军将在自定义首领进入战斗时生成（`summonType: ON_COMBAT_ENTER`）
- 召唤的自定义援军将来自 `test_boss.yml`（`filename: test_boss.yml`）
- 自定义援军将在自定义首领当前位置的 30 个方块内生成（`spawnNearby: true`）
- 自定义援军将继承其增援的自定义首领的仇恨，这意味着它将攻击造成最大伤害的玩家（`inheritAggro: true`）
- 无论 `test_boss.yml` 中的设置如何，自定义援军都将具有与其增援的自定义首领相同的等级（`inheritLevel: true`）

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

这会执行以下操作：

- 创建一个自定义援军
- 自定义援军将是在战斗开始时被放置的末影水晶（`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`）
- 末影水晶将延迟地击打周围的地面（`lightningRod: true`）

现在将其应用于自定义首领：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
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

完成！以下是一些提示：

- 这些字段可以按任何顺序设置，但建议始终将 `summonable` 放在第一位！
- 这是对旧援军系统的重大改进，该系统不再列出。不建议在此阶段依赖它，因为它将来可能无法工作。
