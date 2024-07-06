从 EliteMobs 7.3.0 版本开始，玩家可以通过多种独特的方式与精英物品进行交互。此页面旨在帮助玩家和管理员了解系统的工作原理，并随后向管理员解释系统的平衡性。


***

# 解绑物品

如果您有物品解绑卷轴，您可以使用解绑师 NPC 将 1 个卷轴与 1 个物品组合起来以解绑它。

***注意：在撰写本文时，玩家无法在没有被给予或将其添加到特定 Boss 的情况下获得卷轴。卷轴将从本月发布的末影龙战斗中掉落。***

卷轴只能使用一次。解绑后，物品可以出售或赠送给其他玩家，或者在声望后使用。

***

# 报废物品

精英物品可以在报废员 NPC 处报废。报废物品时，根据物品的等级，您将获得以下碎片：

- 等级 0-50：微型碎片。
- 等级 50-100：小型碎片。
- 等级 100-150：中型碎片。
- 等级 150-200：大型碎片。

碎片是物品系统其余部分的基础。

***

# 修理精英物品

精英物品可以在修理工 NPC 处使用碎片进行修理。物品的损坏程度决定了修复它所需的碎片数量和大小。

***

# 附魔精英物品

在我们继续描述如何附魔物品之前，建议您熟悉附魔所需的物品并了解其功能。

**精英物品**
</br>精英物品包括 EliteMobs 商店中可用的任何战利品、精英怪物掉落的战利品，或完成任务获得的奖励等。

**附魔书**
</br>附魔书通常由精英怪物掉落或作为竞技场或任务奖励授予玩家。它们包含玩家可以转移到他们想要的物品上的附魔。

**幸运票**
</br>幸运票通常从精英怪物获得或作为竞技场或任务奖励获得，使玩家在附魔物品时能够将其成功几率加倍。

玩家可以通过访问 [冒险家公会]($language$/elitemobs/adventurers_guild_world.md) 中的附魔师 NPC 或使用 `/em` 菜单来访问附魔菜单。

拥有精英物品和附魔书后，玩家可以尝试将存储在书中的附魔添加到他们的物品中。每次尝试都会花费玩家一些精英硬币。如果他们有幸运票，他们也可以使用它来加倍他们的几率。

要开始附魔，玩家需要将一个精英物品、一本附魔书和一张幸运票（如果他们有的话）放在附魔窗口中，然后尝试附魔他们的物品。之后，他们会遇到以下结果之一：

- **成功：** 附魔成功添加到物品中。
- **失败：** 尝试失败，导致失去附魔书和精英硬币。
- **严重失败：** 更严重的失败，导致失去附魔书、精英硬币和精英物品本身。
- **挑战：** 进行 Boss 战，失败时有 10% 的几率发生严重失败。如果玩家获胜，则物品会被附魔。

<details>

<summary><b>视觉示例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy 解释某些系统的视频。</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 制作您自己的附魔书

以下是一个简短的指南，解释了如何制作您自己的附魔书。

<div align="center">

***

### isEnabled

设置物品是否启用。

| 键        | 值            | 默认值 |
|------------|:--------------:|--------|
| `isEnabled` | [布尔值](#布尔值) | `true` |

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

设置物品的名称。支持 [颜色代码](#颜色代码)。

| 键     | 值              | 默认值 |
|---------|:-----------------|--------|
| `name` | [字符串](#字符串) | 无      |

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

设置物品的传说。支持 [颜色代码](#颜色代码)。

| 键     | 值                     | 默认值 |
|---------|:------------------------:|--------|
| `lore` | [字符串列表](#字符串列表)      | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- '&2使用此自定义书籍在'
- '&2附魔师处附魔物品！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

设置物品应该是什么 Minecraft 材料。

| 键       | 值                 | 默认值   |
|-----------|:--------------------:|----------|
| `material` | [材料](#材料)       | `BOOK` |

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

设置物品应该持有的附魔。

| 键          | 值                                                                                                       | 默认值 |
|--------------|:--------------------------------------------------------------------------------------------------------------:|--------|
| `enchantments` | [Minecraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 附魔]($language$/elitemobs/custom_enchantments_list.md) | 无      |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
enchantments:
- 地震,1
- 幸运,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

设置您可以从哪里获得该物品。如果您希望您的书被随机精英掉落并在商店中出售，则可以将其设置为 `custom`。

否则，您可以将其设置为 `unique`，使其仅从配置的战利品表中掉落。

| 键        | 值                                                      | 默认值 |
|------------|:--------------------------------------------------------:|--------|
| `itemType` | [值]($language$/elitemobs/creating_items.md&section=itemtype) | 无      |

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

| 键        | 值              | 默认值 |
|------------|:-----------------|--------|
| `soulbound` | [布尔值](#布尔值) | `true` |

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
name: '&5极佳采矿附魔书'
lore:
- '&2用于在附魔师处附魔物品！'
enchantments:
- 修补,1
- 钻探,1
itemType: 独特
soulbound: false
```

如您所见，制作您的附魔书并不复杂。大多数设置都是您在创建 [物品]($language$/elitemobs/creating_items.md) 时会使用的常规设置。

当然，除了这里我们的主要重点是 `附魔` 部分。我们的示例书有一本 Minecraft 附魔 `修补` 和一个 EliteMobs 附魔 `钻探`。

这将使我们的示例书成为您想要在镐上使用的极佳书籍。

</div>

</details>

</div>





