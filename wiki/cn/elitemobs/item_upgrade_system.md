截至 EliteMobs 7.3.0 版本，玩家可以通过多种独特的方式与精英物品进行互动。本页面旨在帮助玩家和管理员了解这些系统的工作原理，并在稍后向管理员解释系统的平衡性。

***

# 解绑物品

如果你拥有解绑卷轴，你可以使用解绑 NPC 将 1 个卷轴与 1 件物品组合以解绑该物品。

***注意：在撰写本文时，玩家无法在没有被给予或添加到特定 Boss 的情况下获得卷轴。该卷轴将从本月发布的末影龙战斗中掉落。***

该卷轴只能使用一次。一旦解绑，物品就可以出售或给予其他玩家，或在转生后使用。

***

# 报废物品

精英物品可以在报废 NPC 处报废。当报废物品时，根据物品的等级，你将获得以下报废品：

- 等级 0-50：微小报废品。
- 等级 50-100：小型报废品。
- 等级 100-150：中型报废品。
- 等级 150-200：巨型报废品。

报废品是其余物品系统的基础。

***

# 修复精英物品

精英物品可以使用报废品在修理工 NPC 处修复。物品的损坏程度决定了修复它所需的报废品的数量和大小。

***

# 为精英物品附魔

在开始描述如何为物品附魔之前，建议先熟悉附魔所需的物品并了解其功能。

**精英物品**
</br>精英物品包括在 EliteMobs 商店中可获得的任何战利品、由精英怪物掉落的战利品，或作为完成任务的奖励而获得的物品等。

**附魔书**
</br>附魔书通常由精英怪物掉落或作为竞技场或任务中的奖励赠予玩家。它们包含玩家可以转移到其所需物品上的附魔。

**幸运券**
</br>幸运券通常从精英怪物获得或作为竞技场或任务的奖励，使玩家在附魔物品时成功几率加倍。

玩家可以通过访问[冒险者公会]($language$/elitemobs/adventurers_guild_world.md)中的附魔师 NPC 或使用 `/em` 菜单来访问附魔菜单。

使用精英物品和附魔书，玩家可以尝试将书中存储的附魔添加到他们的物品上。每次尝试都会花费玩家一些精英币。如果玩家有幸运券，他们也可以使用幸运券使成功几率加倍。

要开始附魔，玩家可以将一件精英物品、一本附魔书和一张幸运券（如果有）放入附魔窗口，然后尝试附魔他们的物品。之后，他们将遇到以下结果之一：

- **成功：** 附魔已成功添加到物品中。
- **失败：** 尝试失败，导致损失附魔书和精英币。
- **严重失败：** 更严重的失败，导致损失附魔书、精英币以及精英物品本身。
- **挑战：** 进行 Boss 战斗，失败后有 10% 的几率发生严重失败。如果玩家获胜，则物品会被附魔。

<details>

<summary><b>视觉示例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  你的浏览器不支持 video 标签。
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy 的视频解释了一些系统。</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 制作你自己的附魔书

这是一个简短的指南，解释了如何制作你自己的附魔书。

<div align="center">

***

### isEnabled

设置是否启用该物品。

| 键           |        值        |  默认值   |
|-------------|:---------------:|:------:|
| `isEnabled` | [布尔值](#boolean) | `true` |

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

设置物品的名称。支持[颜色代码](#color_codes)。

| 键      |       值        | 默认值 |
|--------|:--------------:|:---:|
| `name` | [字符串](#string) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: '&a精英自定义附魔书'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

设置物品的描述。支持[颜色代码](#color_codes)。

| 键      |           值           | 默认值 |
|--------|:---------------------:|:---:|
| `lore` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- '&2使用此自定义书来'
- '&2在附魔师处附魔物品！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

设置物品应该使用的 MineCraft 材料。

| 键          |        值        |  默认值   |
|------------|:---------------:|:------:|
| `material` | [材料](#material) | `BOOK` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

设置物品应具有的附魔。

| 键              |                                                                                  值                                                                                   | 默认值 |
|----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:---:|
| `enchantments` | [MineCraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 附魔]($language$/elitemobs/custom_enchantments_list.md) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

设置可以从中获取物品的位置。如果你希望你的书由随机精英掉落并在商店出售，你可以将其设置为 `custom`。

否则，你可以将其设置为 `unique`，使其仅从配置的掉落表中掉落。

| 键          |                              值                               | 默认值 |
|------------|:------------------------------------------------------------:|:---:|
| `itemType` | [值]($language$/elitemobs/creating_items.md&section=itemtype) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

设置它们是否可以与其他玩家交易。

| 键           |        值        |  默认值   |
|-------------|:---------------:|:------:|
| `soulbound` | [布尔值](#boolean) | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## 附魔书示例

<div align="center">

<details> 

<summary><b>附魔书配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5卓越的挖矿附魔书'
lore:
- '&2用于在附魔师处附魔物品！'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

正如你所看到的，制作你自己的附魔书并不复杂。大多数设置是你创建[物品]($language$/elitemobs/creating_items.md)时会使用的常规设置。

当然，除了这里我们的主要重点是 `enchantments` 部分。我们的示例书有一个 MineCraft 附魔 `MENDING` 和一个 EliteMobs
附魔 `DRILLING`。

这将使我们的示例书成为你想要在镐上使用的优秀书籍。

</div>

</details>

</div>
