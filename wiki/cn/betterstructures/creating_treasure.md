# 什么是宝藏文件？

宝藏文件决定了 BetterStructures 箱子的战利品表。它们通常分配给 [生成器]($language$/betterstructures/creating_generators.md&section=treasurefilename)，但也可以在 [单个建筑配置]($language$/betterstructures/creating_structures.md&section=treasurefile) 的级别设置。

这些战利品表非常强大，但也需要了解一些基本的统计概念才能理解。

<details>
<summary>
在此处阅读有关这些概念的信息，本页面的其余部分假定您理解它们！
</summary>

***加权概率***

BetterStructures 和 EliteMobs 经常使用加权概率的概念。这是为了解决一个简单的问题：如何设置从一个可能无限的物品列表中选择一个物品的几率？

加权概率通过给每个物品一个权重来解决这个问题。如果您有 100 个物品，每个物品的权重为 1，那么它们都有相同的几率（1%）被选中。如果您再添加一个物品，使总数达到 101 个物品，并且给最后一个物品的权重为 1，那么所有物品仍然具有相同的几率（约 0.99%）被选中。如果您给最后一个物品的权重为 2，则它被选中的几率会增加 - 新的总权重为 102，最后一个元素的权重为 2，100/102 = 约 0.98%，因此 0.98% + 0.98% = 1.96% 的几率被选中。如果您给最后一个物品的权重为 100，则新的总权重为 200，并且由于新物品占总权重的一半，因此新物品有 50% 的几率被选中。

如您所见，当您可能有数百个要从中随机选择的物品列表时，这非常有用。

***高斯分布***

高斯分布是一个钟形的数学函数。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

您可能想知道这与战利品系统有什么关系。BetterStructures 在设置箱子中的战利品时必须决定的一件事是，这些箱子中会出现多少战利品。数量应该始终保持在特定数字附近，但理想情况下不要过于可预测，以免打开箱子变得不那么令人兴奋。

为了实现这种半随机效果，使用高斯分布来随机化要选择的物品*数量*。一旦选择了这个数量，*加权概率*就会从稀有度表中随机选择一个元素，并考虑权重。

那么高斯分布是如何工作的呢？

幸运的是，您不必担心它背后的数学原理，而可以专注于修改它的两个设置：均值和标准差。

*均值*

简而言之，“均值”设置了高斯曲线的中间值，这意味着它设置了箱子中最有可能出现的物品数量。本质上，如果您希望您的箱子通常有 5 个物品，请将均值设置为 5。

*标准差*

假设箱子中的平均物品数量为 5。“标准差”有助于决定这个数字在一个箱子和另一个箱子之间可以变化多少。

小“标准差”（例如，1）：这意味着大多数箱子中的物品数量将非常接近平均值，例如 4、5 或 6 个物品。这是一种更可预测的体验。例如，如果一个箱子的标准差为 1，则您可以预期几乎所有箱子中的物品数量都在 4 到 6 个之间。

中等“标准差”（例如，2）：这里，会有更多变化。箱子中可能有 3 到 7 个物品。虽然 5 个物品仍然很常见，但找到多一点或少一点物品的箱子并不罕见。因此，如果标准差为 2，您偶尔可能会发现一个只有 3 个物品的箱子，或者如果您幸运的话，可能会发现一个有 7 个物品的箱子。

大“标准差”（例如，3 或更大）：现在事情变得非常令人惊讶！箱子中最少可以有 2 个物品，最多可以有 8 个或更多物品。这意味着您可能会找到一个只有几个物品的箱子，但也可能会找到一个装满好东西的箱子。例如，如果标准差为 3，则箱子中的物品数量可能在 2 到 8 个之间，这使得每次打开箱子都是一次激动人心的赌博。

***默认均值为 4，默认标准差为 3。***

</details>

***

# 特殊格式

宝藏文件具有一种特殊的格式，如下所示：

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

*注意：这是一个非常精简的文件版本，实际文件有 2599 行，因为它涵盖了更多的战利品和所有可能的附魔。*

# isEnabled

| 键        | 值              | 默认值 |
|------------|:-----------------|--------|
| `isEnabled` | [布尔值](#布尔值) | `true` |

***

# mean

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `mean` | [双精度浮点数](#双精度浮点数) | `4`     |

设置“均值”。在 [此处](#什么是宝藏文件) 阅读有关该内容的详细信息。

***

# standardDeviation

| 键                 | 值              | 默认值 |
|---------------------|:-----------------|--------|
| `standardDeviation` | [双精度浮点数](#双精度浮点数) | `3`     |

设置“标准差”。在 [此处](#什么是宝藏文件) 阅读有关该内容的详细信息。

***

# items

这里有点棘手，因为许多选项都可以由管理员设置。让我们放大之前配置文件示例中的这一部分。

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

在这里，您可以看到在 `items` 配置键下，我们有一个包含 `common` 和 `rare` 的映射。这些是“稀有度”！
***

## 稀有度

稀有度没有固定的名称。您可以添加或删除它们，并根据需要自定义它们，只要您使用相同的格式即可。

请注意，使这些稀有度表或多或少稀有的原因是战利品表的 `weight`！

默认情况下：
- `common` 的默认 `weight` 为 60
- `rare` 的默认 `weight` 为 30
- `epic` 的默认 `weight` 为 10

这使得普通物品掉落的几率是史诗物品的 6 倍。您可以在 [此处](#什么是宝藏文件) 阅读有关 `weight` 的更多信息！

除了权重之外，每个稀有度表都有自己的“物品”列表。

***

### 稀有度物品

稀有度物品是一个 [映射列表]($language$/global/configuration_file_guide.md&section=map_list)，其中列出了稀有度表中的所有物品。

这些物品具有以下设置：

| 键                                | 值                     | 默认值  |
|------------------------------------|:------------------------:|----------|
| `amount`                           | 最小值-最大值 [整数](#整数) | 变量     |
| `material`                         | [材料](#材料)          | 变量     |
| `procedurallyGenerateEnchantments` | [布尔值](#布尔值)        | 变量     |
| `weight`                           | [双精度浮点数](#双精度浮点数)  | 变量     |

***

#### amount

***

设置要掉落的数量。这表示为一个范围，如下所示：`amount: 最小值-最大值`。例如，要掉落 1 到 5 个物品：`amount: 1-5`。

#### material

使用 [Spigot API 名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置可能掉落的物品的材料。

***

##### 特殊情况 - 序列化

当使用 lootify 命令时，lootify 将提供一个 `serialized` 设置，而不是材料。这是由插件自动生成的，不应手动生成。它是一种不可读的格式。

***

#### weight

设置加权几率的权重。[此处](#什么是宝藏文件) 有关该内容的更多信息。

***

#### procedurallyGenerateItems

如果设置了 `procedurallyGeneratedItemSettings`，则设置是否应根据配置设置程序生成项目。请注意，根据设置，这可能会导致生成没有附魔的项目。


# procedurallyGeneratedItemSettings

让我们再看一下我们的配置文件示例：

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

如您所见，此文件列出了材料类型，然后是附魔，然后是最小和最大等级以及几率。

请注意，您不能在这些设置中添加来自其他插件的自定义材料，并且您可能无法添加来自其他插件的自定义附魔，除非它们的作者明确表示他们已使他们的系统兼容。

至于附魔设置：

| 键        | 值              | 默认值  |
|------------|:-----------------|----------|
| `minLevel` | [整数](#整数) | 变量     |
| `maxLevel` | [整数](#整数) | 变量     |
| `chance`   | [几率](#几率)   | 变量     |

***

## minLevel

设置最低附魔等级。

***

## maxLevel

设置最高附魔等级。

***

## chance

设置附魔发生的几率。这不是使用加权概率，而只是一个普通的骰子滚动。

