# 什么是宝藏文件？

宝藏文件决定了 BetterStructures
箱子的战利品表。它们通常被分配给[生成器]($language$/betterstructures/creating_generators.md&section=treasurefilename)
，但也可以在[单个构建配置]($language$/betterstructures/creating_structures.md&section=treasurefile)级别进行设置。

这些战利品表功能强大，但也需要了解一些基本的统计概念才能理解。

<details>
<summary>
在这里阅读这些概念，本页的其余部分假设您理解它们！
</summary>

***加权概率***

BetterStructures 和 EliteMobs 经常使用加权概率的概念。这是为了解决一个简单的问题：如何设置从一个可能包含无限多项的列表中选择一个物品的几率？

加权概率通过给每个物品一个权重来解决这个问题。如果您有 100 个物品，并且每个物品的权重为 1，那么它们都有相同的机会被选中 -
1%。如果您再添加一个物品，使总数达到 101 个物品，并且给最后一个物品一个 1 的机会，那么所有物品仍然有相同的机会被选中 - ~
0.99%。如果您给最后一个物品的权重为 2，那么它被选中的机会就会增加 - 新的总权重为 102，最后一个元素权重为 2，100/102 = ~
0.98%，所以 0.98% + 0.98% = 1.96% 的机会被选中。如果您给最后一个物品的权重为 100，那么新的权重为 200，由于一半的权重是您的新物品，所以您的新物品有
50% 的机会被选中。

如您所见，当您可能需要从数百件事中随机选择时，这种方法非常有用。

***高斯分布***

高斯分布是一个钟形数学函数。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

您可能想知道这与战利品系统有什么关系。BetterStructures
在设置箱子中的战利品时，需要决定箱子中出现多少战利品。数量应该始终在一个特定的数字附近，但理想情况下，不应该过于可预测，以至于打开箱子会变得不那么令人兴奋。

为了实现这种半随机的效果，高斯分布用于随机化选择 *多少* 物品。一旦选择了这个数量，*加权概率* 会随机地从稀有度表中选择一个元素，并考虑权重。

那么高斯分布是如何工作的呢？

幸运的是，您不必担心它背后的数学原理是如何工作的，而是可以将注意力集中在修改它的两个设置上：平均值和标准差。

*平均值*

简单来说，`mean` 设置高斯曲线的中间值，这意味着它设置了箱子中最有可能出现的物品数量。本质上，如果您希望您的箱子通常有 5
个物品，请将您的平均值设置为 5。

*标准差*

假设箱子中的平均物品数量为 5。`standard deviation` 有助于决定这个数字在不同的箱子之间可以变化多少。

小 `标准差` （例如，1）：这意味着大多数箱子中的物品数量非常接近平均值，例如 4、5 或 6 个物品。这是一个更可预测的体验。例如，如果一个箱子的标准差为
1，那么您可以预期几乎所有箱子都有 4 到 6 个物品。

中 `标准差` （例如，2）：这里有更多的变化。箱子可能有 3 到 7 个物品。虽然 5 个物品仍然很常见，但发现有更多或更少物品的箱子也并不罕见。因此，如果标准差为
2，您可能会偶尔找到一个只有 3 个物品的箱子，或者如果您幸运的话，可能会找到一个有 7 个物品的箱子。

大 `标准差` （例如，3 或更多）：现在事情变得非常令人惊讶！箱子可能只有 2 个物品，也可能多达 8
个或更多。这意味着您可能会找到一个只有几个物品的箱子，但也有机会找到一个装满好东西的箱子。例如，如果标准差为 3，一个箱子可能有
2 到 8 个物品，使得打开每个箱子都成为令人兴奋的赌博。

***默认平均值为 4，默认标准差为 3。***

</details>

***

# 特殊格式

宝藏文件具有如下特殊格式：

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

*注意：这是该文件的非常精简的版本，实际文件有 2599 行，因为它涵盖了更多的战利品和所有可能的附魔。*

# isEnabled

| 键           |          值          |    默认值 |
|-------------|:-------------------:|-------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| 键      |         值         | 默认值 |
|--------|:-----------------:|----:|
| `mean` | [Double](#double) | `4` |

设置 `mean`
。在此处阅读有关详细信息[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# standardDeviation

| 键                   |         值         | 默认值 |
|---------------------|:-----------------:|----:|
| `standardDeviation` | [Double](#double) | `3` |

设置 `standardDeviation`
。在此处阅读有关详细信息[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# items

这里会变得有点棘手，因为许多选项可以由管理员设置。让我们仔细看看前面示例中的配置文件。

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

在这里，您可以看到在 `items` 配置键下，我们有一个包含 `common` 和 `rare` 的映射。这些是 `稀有度`！
***

## 稀有度

稀有度没有固定的名称。您可以添加或删除它们，并根据需要自定义它们，只要您使用相同的格式即可。

请注意，使这些稀有度表或多或少稀有的是战利品表的 `weight`！

默认情况下：
- `common` 的默认 `weight` 为 60
- `rare` 的默认 `weight` 为 30
- `epic` 的默认 `weight` 为 10

使普通物品的掉落几率比史诗物品高 6
倍。您可以在[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)
了解有关 `weight` 的更多信息！

除了权重之外，每个稀有度表都有自己的 `items` 列表。

***

### 稀有度物品

稀有度物品是一个[映射列表](https://magmaguy.com/wiki.html#lang=zh-cn&article=global+configuration_file_guide.md&section=map-list)
，其中列出了稀有度表拥有的所有物品。

这些物品具有以下设置：

| 键                                  |              值              | 默认值 |
|------------------------------------|:---------------------------:|----:|
| `amount`                           | min-max [Integer](#integer) |  变量 |
| `material`                         |    [Material](#Material)    |  变量 |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     |  变量 |
| `weight`                           |      [Double](#double)      |  变量 |

***

#### amount

***

设置掉落的数量。这表示为一个范围，如下所示 `amount: MIN-MAX`。例如，要掉落 1 到 5 个物品：`amount: 1-5`。

#### material

使用物品的 [Spigot API 名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置可能掉落的物品的材质。

***

##### 特殊情况 - 序列化

当使用 lootify 命令时，lootify 将提供一个 `serialized` 设置，而不是材质。这是由插件自动生成的，不应手动生成。它是以一种人类不可读的格式呈现的。

***

#### weight

设置加权概率的权重。有关更多信息，请参见[此处](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

#### procedurallyGenerateItems

设置是否应根据 `procedurallyGeneratedItemSettings` 中的配置设置，以程序方式生成物品。请注意，根据设置，这可能会导致即使不附魔也生成物品。

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

如您所见，此文件列出了材质类型，然后是附魔，然后是最小和最大等级以及几率。

请注意，您无法在这些设置中添加来自其他插件的自定义材质，并且您可能无法添加来自其他插件的自定义附魔，除非它们的作者明确表示他们已使他们的系统兼容。

至于附魔设置：

| 键          |          值          | 默认值 |
|------------|:-------------------:|----:|
| `minLevel` | [Integer](#integer) |  变量 |
| `maxLevel` | [Integer](#integer) |  变量 |
| `chance`   |  [Chance](#chance)  |  变量 |

***

## minLevel

设置最小附魔等级。

***

## maxLevel

设置最大附魔等级。

***

## chance

设置附魔发生的几率。这不是使用加权概率，而只是普通的掷骰子。
