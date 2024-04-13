# 什么是宝藏文件？

宝藏文件决定了BetterStructures宝箱的战利品表格。它们通常分配给
[生成器]($language$/betterstructures/creating_generators.md&section=treasurefilename) ，但它们也可以在
[单独构建配置]($language$/betterstructures/creating_structures.md&section=treasurefile) 的级别设置。

这些战利品表非常强大，但也需要了解一些基本的统计概念才能理解。

<details>
<summary>
在这里阅读这些概念，其余的页面假设你了解它们！
</summary>

***加权概率***

BetterStructures和EliteMobs经常使用加权概率的概念。这是为了解决一个简单的问题：如何从可能無限的东西中选出一个？

加权概率通过给每一项加权来解决上述问题。如果你有100项东西，每一项都有一分，那么它们都有相等的机会 - 1% - 被选中。如果你又加了一项，使总数变为101项，你给最后一项加一分，所有的项目仍然有相同的机会 - 约0.99% - 被选中。如果你给最后一项加权2，它被挑选的机会将增加 - 现在总的权重是102，最后一个元素的权重是2，100/102 = 约0.98% ，所以0.98%+0.98% = 1.96% 的机会被选中。如果你给最后一项权重100，新的总重宇是200， 这样你新加的项目就有50%的机会被选中。

正如你所看到的，当你可能有数百种物品需要从中随机选择时，此种方式很好用。

***高斯分布***

高斯分布是一种钟型的数学函数。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

你可能好奇这与战利品系统有何关联。BetterStructures在设置胸罐中的战利品时， 需要决定的一件事就是在那些胸罐中出现多少战利品。这个数目应该在一个特定的数字周围保持一致，但理想情况下不应太可预测，否则打开宝箱可能就变得不那么令人兴奋。

为了实现这种半随机效果，使用高斯分布来随机化*挑选*的产品数量。一旦选定了这个数量，*加权概率*就会从稀缺表中随机挑选一个元素，并考虑到权重。

那么高斯分布是如何工作的呢？

幸运的是,你不需要担心其背后的数学运算原理，你只需要关注两个可以修改的设置：均值和标准差。

*均值*

简单地说， `mean`设置了高斯曲线的中点，这意味着它设置了最可能出现在宝箱中的商品数量。本质上，如果你希望你的宝箱通常有5个商品， 就将你的均值设为5.

*标准差*

设想宝箱里商品的平均数目是5。 `standard deviation`决定了这个数字从一个宝箱到另一个宝箱的变化量。

小`标准差` (例如, 1): 这意味着大部分宝箱里的物品数量会离平均值非常近，比如4、5或6。这是一个更可预测的体验。例如，如果宝箱有一个标准差为1，那么你可以期待所有的宝箱都有4到6个物品。

中等`标准差` (例如, 2): 在这里,有更多的变化。宝箱可能有3到7个商品。虽然5个商品仍然很常见，但找到稍微多一点或少一点的宝箱并不罕见。因此, 如果标准差是2，你可能偶尔会发现只有3个商品的箱子，而如果你运气好，你可能会发现一个有7个商品的箱子。

大`标准差` (例如, 3或更多) : 现在事情变得真的正常！宝箱可以有2个商品或者8个或者更多。这意味着你发现一个只装有两三个商品的箱子的几率，同时你可能发现一个装满好东西的箱子。例如，如果标准差为3，箱子可能会有2到8个物品，使每个箱子的开启都变得值一试。

***默认的平均数为4，默认的标准差为3.***

</details>

***

# 特定格式

宝藏文件有一个特定的格式，看起来像这样：

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

*注：这是一个非常精简的文件版本，实际的文件包含了2599行，因为它包括了更多的掠夺和所有可能的附魔。*

# 启动

| 键 |       值        | 默认 |
|-|:-------------------:|-|
| `启动` | [Bollean](#boolean) | `真` |

***

# 均值

| 键    |      值       | 默认 |
|--------|:-----------------:|---------|
| `mean` | [浮点数](#double) | `4`     |

设置 `mean`。在 [这里](#什么是宝藏文件) 查看详情。

***

# 标准差

| 键                 |      值       | 默认 |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [浮点数](#double) | `3`     |

设置 `standardDeviation`。在 [这里](#什么是宝藏文件) 查看详情。

***

# 物品

这里可能会有一些困难，因为许多选项都可以由管理员来设置。让我们看看前面的配置文件示例。

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

你会看到在 `items` 配置键下我们有 'common' and 'rare' 的地图。这些是 'rarities'!
***

## 稀有度

稀有度没有固定名称。你可以添加或者删除它们，并根据需要进行修改，只要你使用相同的格式就行。

注意，这些稀有的战利品表格更多或者更少的原因是战利品表格的 `weight` ！

默认情况下:
- `common` 默认的 `weight` 是60
- `rare` 默认的 `weight` 是30
- `epic` 默认的 `weight` 是10

这使得相对于史诗级的物品，普通物品有六倍的机会出现。你可以在[这里](#什么是宝藏文件)阅读更多关于 `weights的信息` 。

除了weight，每个稀有度表都有自己的 `items` 列表。

***

### 稀有度物品

稀有度物品是一个[地图列表]($language$/global/configuration_file_guide.md&section=map_list) ，列出了稀有度表里所有的物品。

这些物品有以下设定：

| 键                                   |           值            | 默认  |
|-------------------------------------|:-----------------------:|----------|
| `amount`                           | 最小-最大[整数](#integer) | 可变的 |
| `material`                         |     [抵押物](#Material)     | 可变的 |
| `procedurallyGenerateEnchantments` |     [布尔值](#boolean)     | 可变的 |
| `weight`                           |    [浮点数](#double)       | 可变的 |

***

#### 数量

***

设置需要投放的数量。这是以如下方式表达范围：`amount:MIN-MAX` 。举个例子，投放1至5
物品： `amount: 1-5`。

#### 刷怪箱

使用[Spigot API 名字](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置
可能掉下的物品鸭蛋。

***

##### 特殊情况 - 序列化

在使用 lootify命令时，与其使用刷怪箱lootify将提供一个 `serialized`的设置。这是由插件自动产生的，不能手动产生。这是一种不符合人类阅读习惯的格式。

***

#### 权重

设置权重的几率。关于这个主题的更多信息在[这里](#什么是战利品文件)。

***

#### procedurallyGenerateItems

设置物品是否应该基于 `procedurallyGeneratedItemSettings`的配置设定进行程序化生成。注意如果基于设定，这可能会导致一个物品不论怎样都没有附魔。

# procedurallyGeneratedItemSettings

让我们再来看看我们的配置文件示例：

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

如你所见,这文件罗列了材质类型,之后是附魔类型,再之后是最小最大等级和机会。

注意你不能在这些设定中添加其他插件的自定义材质，可能也无法添加其他插件的自定义的附魔，除非他们的作者明确的说明他们已经使他们的系统成为分享兼容。

至于附魔设定：

| 键          |       值        | 默认  |
|--------------|:---------------:|----------|
| `minLevel` | [整数](#integer) | 可变的 |
| `maxLevel` | [整数](#integer) | 可变的 |
| `chance`   |  [Chance](#chance)  | 可变的 |

***

## minLevel

设置最小附魔等级。

***

## maxLevel

设置最大附魔等级。

***

## change

设置附魔的机会。这并不使用特别的几率，只是一个普通的骰子游戏而已。