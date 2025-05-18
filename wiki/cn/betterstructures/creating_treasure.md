好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

```markdown
# 什么是宝藏文件？

宝藏文件决定了 BetterStructures 箱子的战利品表。它们通常被分配给[生成器]($language$/betterstructures/creating_generators.md&section=treasurefilename)，但也可以在[单个构建配置]($language$/betterstructures/creating_structures.md&section=treasurefile)级别设置。

这些战利品表功能强大，但也需要了解一些基本的统计概念才能理解。

<details>
<summary>
在此阅读这些概念，本页其余部分假设您已理解它们！
</summary>

***加权概率***

BetterStructures 和 EliteMobs 经常使用加权概率的概念。这是为了解决一个简单的问题：如何设置从一个可能包含无限物品的列表中选取某个物品的几率？

加权概率通过给每个物品一个权重来解决这个问题。如果您有 100 个物品，每个物品的权重为 1，那么它们被选中的几率都相等 - 1%。如果您再添加一个物品，总数达到 101 个，并且给最后一个物品的权重为 1，所有物品被选中的几率仍然相同 - 约 0.99%。如果您给最后一个物品的权重为 2，它被选中的几率会增加 - 新的总权重为 102，最后一个元素的权重为 2，100/102 ≈ 0.98%，所以 0.98%+0.98% = 1.96% 的几率被选中。如果您给最后一个物品的权重为 100，新权重为 200，由于新物品占了一半的权重，新物品有 50% 的几率被选中。

如您所见，当您可能有数百个物品需要随机选取时，这种方法非常有用。

***高斯分布***

高斯分布是一个钟形数学函数。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

您可能想知道这与战利品系统有什么关系。BetterStructures 在设置箱子战利品时需要决定的一个问题是，这些箱子中会出现多少战利品。数量应该稳定在一个特定数字附近，但理想情况下又不至于太可预测，以免开箱变得不那么令人兴奋。

为了实现这种半随机效果，高斯分布被用来随机化选取*多少*物品。一旦确定了这个数量，*加权概率*会随机从稀有度表中选取一个元素，并考虑权重。

那么高斯分布是如何工作的呢？

幸运的是，您不必担心其背后的数学原理，只需关注修改它的两个设置：均值和标准差。

*均值*

简单来说，`mean` 设置了高斯曲线的中心，这意味着它设置了箱子中最可能出现的物品数量。本质上，如果您希望箱子通常有 5 个物品，将您的均值设置为 5。

*标准差*

想象一下，箱子中物品的平均数量是 5。`standard deviation`（标准差）有助于决定这个数量在不同箱子之间可以变化多少。

小`标准差`（例如 1）：这意味着大多数箱子中的物品数量会非常接近平均值，例如 4、5 或 6 个物品。这是一种更可预测的体验。例如，如果一个箱子的标准差为 1，您可以预期几乎所有箱子都会有 4 到 6 个物品。

中等`标准差`（例如 2）：这里有更多的变化。箱子可能有 3 到 7 个物品。虽然 5 个物品仍然常见，但找到物品数量稍多或稍少的箱子也不罕见。因此，标准差为 2 时，您偶尔可能会找到只有 3 个物品的箱子，或者如果您幸运的话，找到一个有 7 个物品的箱子。

大`标准差`（例如 3 或更多）：现在事情变得非常令人惊喜！箱子可能只有 2 个物品，也可能多达 8 个或更多。这意味着您可能会找到一个只有几个物品的箱子，但也有机会找到一个装满好东西的箱子。例如，标准差为 3 时，一个箱子可以有 2 到 8 个物品，使得每次开箱都像一场令人兴奋的赌博。

***默认均值为 4，默认标准差为 3。***

</details>

***

# 特殊格式

宝藏文件有一种特殊格式，看起来像这样：

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

*注意：这只是文件的一个非常精简的版本，实际文件长达 2599 行，因为它涵盖了更多的战利品和所有可能的附魔。*

# isEnabled

| 键          |       值        | 默认值 |
|-------------|:---------------:|-------:|
| `isEnabled` | [布尔值](#boolean) | `true` |

***

# mean

| 键     |      值       | 默认值 |
|--------|:-------------:|-------:|
| `mean` | [双精度浮点数](#double) | `4`    |

设置 `mean`（均值）。在此阅读有关详细信息：[这里](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# standardDeviation

| 键                  |      值       | 默认值 |
|---------------------|:-------------:|-------:|
| `standardDeviation` | [双精度浮点数](#double) | `3`    |

设置 `standardDeviation`（标准差）。在此阅读有关详细信息：[这里](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

# items

这里变得有点复杂，因为许多选项可以由管理员设置。让我们仔细看看前面的配置文件示例。

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

在这里，您可以看到在 `items` 配置键下，我们有一个包含 `common` 和 `rare` 的映射。这些就是`稀有度`！
***

## rarities

稀有度没有固定的名称。您可以添加或删除它们，并根据需要自定义它们，只要您使用相同的格式即可。

请注意，使这些稀有度表更稀有或不那么稀有的关键在于战利品表的 `weight`（权重）！

默认情况下：
- `common` 的默认 `weight` 为 60
- `rare` 的默认 `weight` 为 30
- `epic` 的默认 `weight` 为 10

这使得普通物品掉落的可能性是史诗物品的 6 倍。您可以在[这里](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)阅读更多关于 `weight` 的信息！

除了权重之外，每个稀有度表都有自己的 `items` 列表。

***

### rarity items

稀有度物品是一个[映射列表](https://magmaguy.com/wiki.html#lang=zh-cn&article=global+configuration_file_guide.md&section=map-list)，列出了该稀有度表拥有的所有物品。

这些物品具有以下设置：

| 键                                 |           值            | 默认值 |
|------------------------------------|:-----------------------:|-------:|
| `amount`                           | 最小-最大 [整数](#integer) | 变量   |
| `material`                         |    [物品材质](#Material)    | 变量   |
| `procedurallyGenerateEnchantments` |     [布尔值](#boolean)     | 变量   |
| `weight`                           |      [双精度浮点数](#double)      | 变量   |

***

#### amount

***

设置掉落的数量。这表示为一个范围，格式如下：`amount: 最小-最大`。例如，要掉落 1 到 5 个物品：`amount: 1-5`。

#### material

使用物品的 [Spigot API 名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置可能掉落的物品材质。

***

##### 特殊情况 - serialized

使用 lootify 命令时，lootify 会提供一个 `serialized` 设置，而不是物品材质。这是由插件自动生成的，不应手动生成。它的格式是不可读的。

***

#### weight

设置加权几率的权重。更多信息请参见[这里](https://magmaguy.com/wiki.html#lang=zh-cn&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)。

***

#### procedurallyGenerateItems

设置物品是否应根据 `procedurallyGeneratedItemSettings` 中的配置设置进行程序生成。请注意，根据设置，这可能会导致物品生成时没有附魔。


# procedurallyGeneratedItemSettings

让我们再看看我们的配置文件示例：

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

如您所见，此文件列出了物品类型，后跟附魔，然后是最小和最大等级以及几率。

请注意，您不能在此设置中添加来自其他插件的自定义物品材质，并且您可能无法添加来自其他插件的自定义附魔，除非其作者明确表示他们的系统兼容。

至于附魔设置：

| 键         |       值        | 默认值 |
|------------|:---------------:|-------:|
| `minLevel` | [整数](#integer) | 变量   |
| `maxLevel` | [整数](#integer) | 变量   |
| `chance`   |  [几率](#chance)  | 变量   |

***

## minLevel

设置最小附魔等级。

***

## maxLevel

设置最大附魔等级。

***

## chance

设置附魔发生的几率。这不是使用加权概率，只是一个普通的随机掷骰。
```