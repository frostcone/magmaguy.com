好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

---

自 EliteMobs 7.3.0 版本起，玩家可以通过多种独特的方式与精英物品互动。本页面旨在帮助玩家和管理员了解这些系统的工作原理，并稍后为管理员解释系统的平衡性。

***

# 解绑物品

如果你有一张物品解绑卷轴，你可以使用解绑 NPC 将 1 张卷轴与 1 件物品结合来解绑它。

***注意：截至本文撰写时，玩家除了被给予或添加到特定 Boss 掉落列表外，没有其他方式获得此卷轴。本月将发布的末影龙战斗将掉落此卷轴。***

卷轴只能使用一次。解绑后，物品可以出售或赠送给其他玩家，或在转生后使用。

***

# 拆解物品

精英物品可以在拆解 NPC 处拆解。拆解物品时，根据物品的等级，你将获得以下废料：

- 等级 0-50：微小废料 (Tiny Scrap)。
- 等级 50-100：小型废料 (Small Scrap)。
- 等级 100-150：中型废料 (Medium Scrap)。
- 等级 150-200：巨型废料 (Huge Scrap)。

废料是其他物品系统的基础。

***

# 修理精英物品

精英物品可以在修理工 NPC 处使用废料修理。物品损坏的程度决定了修理所需的废料数量和大小。

***

# 附魔精英物品

在继续描述如何附魔物品之前，建议先熟悉附魔所需的物品并了解它们的功能。

**精英物品**
</br>精英物品包括 EliteMobs 商店中可用的任何战利品、精英怪物掉落的物品，或完成任务获得的奖励等来源。

**附魔书**
</br>附魔书通常由精英怪物掉落，或作为竞技场或任务的奖励授予玩家。它们包含玩家可以转移到所需物品上的附魔。

**幸运券**
</br>幸运券通常从精英怪物处获得，或作为竞技场或任务的奖励获得，它们使玩家在附魔物品时有机会将成功率翻倍。

玩家可以通过访问 [冒险者协会]($language$/elitemobs/adventurers_guild_world.md) 中的附魔师 NPC 或使用 `/em` 菜单来访问附魔菜单。

拥有精英物品和附魔书后，玩家可以尝试将书中的附魔添加到他们的物品上。每次尝试都会花费玩家一些精英币。如果他们有幸运券，他们也可以使用它来将成功率翻倍。

要开始附魔，玩家将一件精英物品、一本附魔书和一张幸运券（如果他们有）放入附魔窗口，然后尝试附魔他们的物品。之后，他们将遇到以下结果之一：

- **成功：** 附魔成功添加到物品上。
- **失败：** 尝试失败，导致附魔书和精英币丢失。
- **严重失败：** 更严重的失败，导致附魔书、精英币和精英物品本身丢失。
- **挑战：** 进行一场 Boss 战，如果失败有 10% 的几率发生严重失败。如果玩家获胜，物品将被附魔。

<details>

<summary><b>视觉示例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy 解释部分系统的视频。</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 制作你自己的附魔书

这是一个简短的指南，解释了如何制作你自己的附魔书。

<div align="center">

***

### isEnabled

设置物品是否启用。

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

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

设置物品的名称。支持 [颜色代码](#color_codes)。

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

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

设置物品的描述。支持 [颜色代码](#color_codes)。

| Key         |           Values            | Default |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

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

设置物品应使用的 MineCraft 材料。

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

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

设置物品应包含哪些附魔。

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `enchantments` | [MineCraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |  none   |

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

设置你可以从哪里获得该物品。如果你希望你的书由随机精英掉落并在商店出售，你可以将其设置为 `custom`。

否则，你可以将其设置为 `unique`，使其仅从配置的战利品表中掉落。

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `itemType` | [Values]($language$/elitemobs/creating_items.md&section=itemtype) |  none   |

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

设置物品是否可以与其他玩家交易。

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `soulbound` | [Boolean](#boolean) | `true`  |

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
name: '&5优秀的挖掘附魔书'
lore:
- '&2用于在附魔师处附魔物品！'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

正如你所见，制作你的附魔书并不复杂。大多数设置都是你在创建 [物品]($language$/elitemobs/creating_items.md) 时会使用的常规设置。

当然，这里我们的主要关注点是 `enchantments` 部分。我们的示例书包含一个 MineCraft 附魔 `MENDING` 和一个 EliteMobs 附魔 `DRILLING`。

这将使我们的示例书成为一本非常适合用于镐子的优秀附魔书。

</div>

</details>

</div>