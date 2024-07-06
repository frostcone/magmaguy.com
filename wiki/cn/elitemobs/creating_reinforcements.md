# 创建自定义增援

如果您有兴趣在战斗期间召唤精英来增援 Boss，本指南将详细介绍这一点。

## 创建自定义 Boss 的步骤：

1. 创建您的主要自定义 Boss，它将召唤您的自定义 Boss
2. 为增援创建自定义 Boss。请记住，自定义 Boss 可以比普通怪物更强，但它们也可以更弱。
3. 将正确的增援行添加到配置文件中

## 创建增援行

假设您有一个具有以下格式的自定义 Boss：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

并且您想向其中添加增援。以下是这种增援的样子：

```yaml
- summonType:ON_COMBAT_ENTER
  filename: 世界束缚者_阶段_1_跑酷_增援.yml
```

要使其生效，请将其添加到力量列表中：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: 世界束缚者_阶段_1_跑酷_增援.yml
```

增援现在已添加到 Boss 实体。但是，正如您所看到的，这里有几个选项可以自定义。让我们介绍一下它们。

## 所有自定义增援选项

*提示：您还可以使用 EliteScript 来召唤增援，更多信息请参阅 [此处]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement)。*

<div align="center">

### summonType

这是一个必填字段。它设置了何时应该生成增援。

| 键         | 值           | 默认值    |
|-------------|:------------:|-----------|
| `summonType` | 特殊 [1]      | `ON_HIT` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### 特殊 [1]

| 键   | 描述                                                                                                                      |
|------|-----------------------------------------------------------------------------------------------------------------------------------|
| `ONCE`    | 在 Boss 第一次被击中时生成一次增援。（可以依赖 % 几率发生）                                                                        |
| `ON_HIT`   | 每次 Boss 被击中时生成增援（可以依赖 % 几率发生）                                                                               |
| `ON_COMBAT_ENTER`     | 当 Boss 进入战斗时生成增援 (1)                                                                                                        |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`     | 特殊：这专门用于在 Boss 进入战斗 (1) 时为龙战斗放置末影水晶                                                                                                |
| `GLOBAL`     | 为与 Boss 处于同一世界中的每个玩家生成增援。无论玩家距离 Boss 多远，增援都会在玩家附近生成。这需要设置 `customSpawn` 字段才能工作！                                                                                            |

_(1) Boss 在被玩家击中或检测到玩家在范围内时进入战斗。_

***

### filename

这是一个必填字段，因为它设置了应该生成哪个增援。此字段为必填项的唯一例外是使用 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 设置时，因为末影水晶不是精英。

| 键        | 值                  | 默认值 |
|------------|:----------------------:|--------|
| `filename` | [文件名](#文件名)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
filename: 测试_Boss.yml
```

</div>

</details>

</div>

***

**最低可行性**

`summonType: SUMMON_TYPE` 和 `filename: filename.yml` 本身就足以创建自定义增援。以下示例演示了这一点。

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
  filename: 世界束缚者_阶段_1_跑酷_增援.yml
```

*但是，如果您想要或需要更复杂的东西，请继续阅读下面的内容，以了解您可以使用这些选项进行哪些其他操作。*

</div>

</details>

</div>

<div align="center">

***

### chance

这是一个可选的配置文件字段，用于补充 `summonType` `ONCE` 和 `ON_HIT` 选项。它表示 Boss 受到攻击时自定义增援生成的几率。

| 键      | 值                | 默认值 |
|----------|:------------------:|--------|
| `chance` | [双精度浮点数](#双精度浮点数) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chance: 0.5
```
*表示有 50% 的几率生成自定义增援。*

</div>

</details>

***

### location

`location: x,y,z` 是一个可选的配置文件字段，允许管理员将增援的位置偏移一定数量的方块。以下是您需要了解的有关此选项的关键概念：

**偏移位置是相对的。**这意味着 `location: 0,10,0` 将在 Boss 正上方 10 个方块处生成一个 Boss，而不是在世界坐标 0,10,0 处。


**对于区域 Boss，相对位置是不同的。**区域 Boss 将始终使用其生成点作为相对位置的原点，这意味着如果您知道 Boss 的生成点在哪里并计算了方块数，则可以让增援 Boss 生成在特定位置。世界束缚者巢穴依赖于此功能，以在极其特定的方块位置生成挑战塔 Boss，而不管龙 Boss 在哪里。


**如果您在测量距离时出错，Boss 会生成在方块内。**

| 键       | 值              | 默认值 |
|-----------|:-----------------|--------|
| `location` | [字符串](#字符串) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*对于非区域自定义 Boss，将在 Boss 正上方 10 个方块处生成增援，无论 Boss 在哪里。*

*对于区域自定义 Boss，将在区域 Boss 生成点正上方 10 个方块处生成增援，无论 Boss 在哪里。*

</div>

</details>

_**重要说明：这对于 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 特别是必填字段！**_

***

### lightningRod

是一个特殊设置，仅对 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 有用。这使得末影水晶能够延迟地攻击其周围的地面。

它不能与其他自定义增援一起使用，因为那些增援应该依赖于力量来实现此类能力。

| 键            | 值              | 默认值  |
|----------------|:-----------------|---------|
| `lightningRod` | [布尔值](#布尔值) | `false` |

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

是一个可选的配置文件字段，它使自定义增援继承 Boss 的威胁等级。

当您希望生成的增援目标是造成最大伤害的玩家时，这尤其有用。

| 键             | 值              | 默认值  |
|----------------|:-----------------|---------|
| `inheritAggro` | [布尔值](#布尔值) | `false` |

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

是一个可选的配置文件字段，用于设置生成的增援数量。

| 键       | 值                | 默认值 |
|-----------|:------------------:|--------|
| `amount` | [整数](#整数)          | `1`    |

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

是一个可选的配置文件字段，用于设置自定义增援应该在 Boss 附近生成，而不是在 Boss 上方或特定相对位置生成。

此方法应该正确地考虑地形变化，并且不会在墙壁内生成 Boss，尽管在某些设置中，如果战斗区域太小，可能会导致它们生成在墙壁后面。半径约为 30 个方块。

| 键           | 值              | 默认值  |
|---------------|:-----------------|---------|
| `spawnNearby` | [布尔值](#布尔值) | `false` |

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

是一个可选的配置文件字段，用于设置自定义增援是否应该继承它所增援的自定义 Boss 的等级。

| 键             | 值              | 默认值  |
|----------------|:-----------------|---------|
| `inheritLevel` | [布尔值](#布尔值) | `false` |

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

是一个配置文件字段，仅用于全局增援。它使用自定义生成设置来设置增援能够生成的位置。

这可以用于使增援能够在地面上、有光的地方、特定的生物群系中等等生成。查看 [自定义生成]($language$/elitemobs/creating_spawns.md) 上的维基页面以获取更多详细信息

| 键           | 值                  | 默认值 |
|---------------|:----------------------:|--------|
| `customSpawn` | [文件名](#文件名)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customSpawn: 普通_地面_生成.yml
```

</div>

</details>

</div>

## 将大型增援组合在一起

让我们使用之前的大部分字段创建一个示例增援：

```yaml
- summonType: ON_COMBAT_ENTER
  filename: 测试_Boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

这将执行以下操作：

- 创建一个自定义增援
- 当自定义 Boss 进入战斗时，自定义增援将生成 (`summonType: ON_COMBAT_ENTER`)
- 召唤的自定义增援将来自 `测试_Boss.yml` (`filename: 测试_Boss.yml`)
- 自定义增援将在自定义 Boss 当前位置的 30 个方块内生成 (`spawnNearby: true`)
- 自定义增援将继承它所增援的自定义 Boss 的仇恨，这意味着它将攻击造成最大伤害的玩家 (`inheritAggro: true`)
- 无论 `测试_Boss.yml` 中的设置如何，自定义增援都将与其所增援的自定义 Boss 具有相同的等级 (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

这将执行以下操作：

- 创建一个自定义增援
- 自定义增援将是一个末影水晶，它会在战斗开始时放置 (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- 末影水晶将延迟地攻击其周围的地面 (`lightningRod: true`)

现在将其应用于自定义 Boss：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界束缚者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: 测试_Boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

您完成了！以下是一些其他提示：

- 字段可以按任何顺序设置，但建议始终将 `summonable` 放在第一位！
- 这是对旧增援系统的重大改进，该系统不再列出。不建议在此阶段依赖它，因为它将来可能会停止工作。



