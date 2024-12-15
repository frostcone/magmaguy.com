# 什么是宝藏文件？

宝藏文件决定了 BetterStructures 箱子的战利品表。它们通常分配给[生成器]($language$/betterstructures/creating_generators.md&section=treasurefilename)，但也可以在[单个构建配置]($language$/betterstructures/creating_structures.md&section=treasurefile)级别设置。

这些战利品表非常强大，但也需要了解一些基本的统计概念才能理解。

<details>
<summary>
在此处阅读有关这些概念的信息，本页的其余部分假设您理解它们！
</summary>

***加权概率***

BetterStructures 和 EliteMobs 经常使用加权概率的概念。这是为了解决一个简单的问题：如何从可能无限的项目列表中设置选择一个项目的机会？

加权概率通过为每个项目赋予权重来解决此问题。如果您有 100 个项目，并且每个项目的权重为 1，那么它们被选中的机会均等 - 1%。如果您添加一个项目，使总数达到 101 个项目，并且给最后一个项目一个权重为 1 的机会，则所有项目仍然具有相同的机会 - ~0.99% - 被选中。如果您给最后一个项目一个权重为 2，则它被选中的机会增加 - 新的总权重为 102，最后一个元素的权重为 2 和 100/102 = ~0.98%，因此 0.98%+0.98% = 1.96% 被选中的机会。如果您给最后一个项目一个权重为 100，则新的权重为 200，并且由于该权重的一半是您的新项目，则您的新项目有 50% 的机会被选中。

如您所见，当您可能有数百个要从中随机化的项目列表时，这非常适合使用。

***高斯分布***

高斯分布是一种钟形数学函数。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

您可能想知道这与战利品系统有何关系。BetterStructures 在设置箱子中的战利品时必须决定的一件事是这些箱子中会出现多少战利品。数量应该始终在某个特定数字附近，但理想情况下不应过于可预测，以至于打开箱子可能会变得不那么令人兴奋。

为了实现这种半随机效果，高斯分布用于随机化选择的物品*数量*。一旦选择了这个数量，*加权概率*就会从稀有度表中随机选择一个元素，并考虑权重。

那么高斯分布如何工作？

幸运的是，您不必担心其背后的数学原理如何工作，而是可以专注于修改它的两个设置：均值和标准差。

*均值*

简而言之，`mean` 设置高斯曲线的中间值，这意味着它设置箱子中最可能出现的物品数量。本质上，如果您希望您的箱子通常有 5 个物品，请将均值设置为 5。

*标准差*

假设箱子中的平均物品数量为 5。`标准差`有助于决定这个数字在一个箱子到另一个箱子之间可以变化多少。

小 `标准差`（例如，1）：这意味着大多数箱子中的物品都非常接近平均值，如 4、5 或 6 个物品。这是一个更可预测的体验。例如，如果一个箱子的标准差为 1，您可以预期几乎所有箱子都有 4 到 6 个物品。

中 `标准差`（例如，2）：这里有更多的变化。箱子可能有 3 到 7 个物品。虽然 5 个物品仍然很常见，但找到更多或更少物品的箱子并不罕见。因此，当标准差为 2 时，您可能会偶尔找到一个只有 3 个物品的箱子，或者如果您幸运的话，还会找到一个有 7 个物品的箱子。

大 `标准差`（例如，3 或更多）：现在事情变得非常令人惊讶！箱子可能只有 2 个物品，也可能多达 8 个或更多。这意味着您可能会发现一个只有几个物品的箱子，但也有可能发现一个装满好东西的箱子。例如，当标准差为 3 时，一个箱子可能有 2 到 8 个物品，这使得每次打开箱子都成为令人兴奋的赌注。

***默认均值为 4，默认标准差为 3。***

</details>

***

# 特殊格式

宝藏文件具有如下所示的特殊格式：

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*注意：这是该文件的精简版本，实际文件有 2599 行长，因为它涵盖了更多的战利品和所有可能的附魔。*

# isEnabled

| 键           |       值        | 默认值 |
|-------------|:-------------:|-----|
| `isEnabled` | [布尔值](#boolean) | `true` |

***

# 均值

| 键    |      值       | 默认值 |
|------|:-------------:|------|
| `mean` | [双精度浮点数](#double) | `4`    |

设置 `mean`。在此处阅读有关它的详细信息[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# 标准差

| 键                 |      值       | 默认值 |
|--------------------|:-------------:|-----|
| `standardDeviation` | [双精度浮点数](#double) | `3`    |

设置 `standardDeviation`。在此处阅读有关它的详细信息[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# 物品

这里变得棘手了，因为许多选项可以由管理员设置。让我们放大早期的配置文件示例。

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

在这里，您可以看到在 `items` 配置键下，我们有一个带有 `common` 和 `rare` 的映射。这些是`稀有度`！
***

## 稀有度

稀有度没有固定的名称。您可以根据需要添加或删除它们，并自定义它们，只要您使用相同的格式即可。

请注意，使这些稀有度表或多或少稀有的是战利品表的 `weight`！

默认情况下：
- `common` 的默认 `weight` 为 60
- `rare` 的默认 `weight` 为 30
- `epic` 的默认 `weight` 为 10

使普通物品掉落的可能性是史诗物品的 6 倍。您可以在[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)阅读有关 `weight` 的更多信息！

除了权重之外，每个稀有度表都有其自己的 `items` 列表。

***

### 稀有度物品

稀有度物品是[映射列表](https://magmaguy.com/wiki.html#lang=zh-cn&article=global+configuration_file_guide.md&section=map-list)，其中列出了稀有度表的所有物品。

这些物品具有以下设置：

| 键                               |           值            | 默认值 |
|------------------------------------|:---------------------------:|-----|
| `amount`                           | min-max [整数](#integer) | 变量  |
| `material`                         |    [材质](#Material)    | 变量  |
| `procedurallyGenerateEnchantments` |     [布尔值](#boolean)     | 变量  |
| `weight`                           |      [双精度浮点数](#double)    | 变量  |

***

#### amount

***

设置掉落的数量。这表示为一个范围，如下所示 `amount: MIN-MAX`。例如，要掉落 1 到 5 个物品之间：`amount: 1-5`。

#### material

使用[Spigot API 名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)设置可能掉落的物品的材质。

***

##### 特例 - 序列化

当使用 lootify 命令时，lootify 将提供一个 `serialized` 设置，而不是材质。这是由插件自动生成的，不应手动生成。它采用的是人类不可读的格式。

***

#### weight

设置加权机会的权重。有关更多信息，请参见[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

#### procedurallyGenerateItems

设置是否应根据配置设置（如果 `procedurallyGeneratedItemSettings`）程序化生成物品。请注意，根据设置，这可能会导致生成没有附魔的物品。

# procedurallyGeneratedItemSettings

让我们再次看一下我们的配置文件示例：

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

如您所见，此文件列出了材质类型，然后是附魔，然后是最小和最大等级以及机会。

请注意，您不能在这些设置中添加来自其他插件的自定义材质，并且您可能无法添加来自其他插件的自定义附魔，除非其作者明确表示他们已使其系统兼容。

至于附魔设置：

| 键       |       值        | 默认值 |
|-----------|:-------------:|-----|
| `minLevel` | [整数](#integer)  | 变量  |
| `maxLevel` | [整数](#integer)  | 变量  |
| `chance`  |  [机会](#chance)  | 变量  |

***

## minLevel

设置最小附魔等级。

***

## maxLevel

设置最大附魔等级。

***

## chance

设置附魔发生的几率。这不使用加权概率，而只是一个普通的掷骰子。
