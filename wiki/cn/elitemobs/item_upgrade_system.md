[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 精英物品升级系统

从 EliteMobs 7.3.0 开始，玩家可以通过多种独特方式与精英物品互动。此页面旨在帮助玩家和管理员了解系统的工作原理，并在稍后向管理员解释系统的平衡性。

***

# 解绑物品

如果您有物品解绑卷轴，则可以使用解绑 NPC 将 1 个卷轴与 1 个物品组合以解绑它。

***注意：在撰写本文时，玩家无法在不被赠予或将其添加到特定首领的情况下获得卷轴。该卷轴将从本月发布的末影龙战中掉落。***

该卷轴只能使用一次。一旦解绑，物品就可以出售或赠送给其他玩家，或者在获得声望后使用。

***

# 报废物品

精英物品可以在报废 NPC 处报废。报废物品时，根据物品的等级，您将获得以下废料：

- 等级 0-50：微小的废料。
- 等级 50-100：小废料。
- 等级 100-150：中等废料。
- 等级 150-200：巨型废料。

废料是物品系统其余部分的基础。

***

# 修理精英物品

可以使用废料在修理 NPC 处修理精英物品。物品的损坏程度决定了修复它所需的废料的数量和大小。

***

# 附魔精英物品

在继续描述如何附魔物品之前，建议您熟悉附魔所需的物品并了解它们的功能。

**精英物品**
</br> 精英物品包含 EliteMobs 商店中提供的任何战利品、精英生物掉落的战利品，或作为完成任务奖励获得的战利品等。

**附魔书**
</br>附魔书通常由精英生物掉落，或作为奖励在竞技场或任务中授予玩家。它们包含玩家可以将转移到所需物品的附魔。

**幸运券**
</br>幸运券通常从精英生物获得或作为竞技场或任务奖励，使玩家在附魔物品时成功的机会增加一倍。

玩家可以通过访问 [冒险者公会]($language$/elitemobs/adventurers_guild_world.md) 中的附魔师 NPC 或使用 `/em` 菜单来访问附魔菜单。

有了精英物品和附魔书，玩家可以尝试将书中存储的附魔添加到他们的物品中。每次尝试都会花费玩家一些精英币。如果他们有幸运券，他们也可以通过使用幸运券将成功的机会加倍。

要开始附魔，玩家会将一件精英物品、一本附魔书和一张幸运券（如果有）放置在附魔窗口中，然后尝试附魔他们的物品。之后，他们将遇到以下结果之一：

- **成功：**附魔已成功添加到物品中。
- **失败：**尝试不成功，导致附魔书和精英币丢失。
- **严重失败：**更为严重的失败，导致附魔书、精英币和精英物品本身丢失。
- **挑战：**与首领战斗，如果输掉战斗，则有 10% 的几率严重失败。如果玩家获胜，则该物品会被附魔。

<details>

<summary><b>可视示例</b></summary>

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

## 制作自己的附魔书

这是一个简短指南，解释了如何制作自己的附魔书。

<div align="center">

***

### isEnabled

设置是否启用物品。

| 键        |      值        | 默认值 |
|-----------|:---------------:|:------:|
| `isEnabled` | [布尔值](#boolean) | `true`  |

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

| 键        |      值        | 默认值 |
|-----------|:---------------:|:------:|
| `name` | [字符串](#string) |  无   |

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

设置物品的背景故事。支持[颜色代码](#color_codes)。

| 键        |           值            | 默认值 |
|-----------|:---------------------------:|:------:|
| `lore` | [字符串列表](#string_list) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- '&2使用这本自定义书来'
- '&2在附魔师处附魔物品！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

设置该物品应使用哪个 Minecraft 材质。

| 键        |      值        | 默认值 |
|-----------|:---------------:|:------:|
| `material` | [材质](#material) | `BOOK`  |

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

设置该物品应具有的附魔。

| 键        |    值    | 默认值 |
|-----------|:------------:|:-------:|
| `enchantments` | [Minecraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 附魔]($language$/elitemobs/custom_enchantments_list.md) |  无   |

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

设置可以从中获取物品的位置。如果您希望您的书被随机精英掉落并在商店中出售，则可以将其设置为 `custom`。

或者，您可以将其设置为 `unique`，使其仅从配置的战利品表中掉落。

| 键        |    值    | 默认值 |
|-----------|:------------:|:-------:|
| `itemType` | [值]($language$/elitemobs/creating_items.md&section=itemtype) |  无   |

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

| 键        |    值    | 默认值 |
|-----------|:------------:|:-------:|
| `soulbound` | [布尔值](#boolean) | `true`  |

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
name: '&5优秀的采矿附魔书'
lore:
- '&2用于在附魔师处附魔物品！'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

如您所见，制作附魔书并不那么复杂。大多数设置都是您在创建[物品]($language$/elitemobs/creating_items.md)时将使用的常规设置。

当然，除了这里我们的主要重点是 `enchantments` 部分。我们的示例书具有一个 Minecraft 附魔 `MENDING` 和一个 EliteMobs 附魔 `DRILLING`。

这将使我们的示例书成为您想要在镐上使用的绝佳书籍。

</div>

</details>

</div>
