自 EliteMobs 7.3.0 版本开始，玩家可以通过多种独特的方式与精英物品进行互动。本页面旨在帮助玩家和管理员了解这些系统的工作方式，并在后面的部分向管理员解释系统的平衡性。

***

# 解绑物品

如果你有一个物品解绑卷轴，你可以使用解绑 NPC 将1个卷轴和1个物品组合，以解除其绑定。

***注意：在写这篇文章的时候，玩家无法获得卷轴，除非它被特定的Boss赠予或添加。本月将发布的末影龙战斗中会掉落这种卷轴。***

卷轴只能使用一次。一旦解绑，物品可以卖给其他玩家，或者在声望之后使用。

***

# 拆解物品

精英物品可以在Scrapper NPC 处进行拆解。拆解物品会根据物品的等级获得以下碎片：

- 等级 0-50：Tiny Scrap。
- 等级 50-100：Small Scrap。
- 等级 100-150：Medium Scrap。
- 等级 150-200：Huge Scrap。

碎片是物品系统其他部分的基础。

***

# 修复精英物品

精英物品可以在修理NPC处使用碎片进行修理。你的物品受到的损坏程度决定了修复它所需的碎片的数量和尺寸。

***

# 强化精英物品

在我们描述如何强化物品之前，建议你先熟悉强化所需的物品，并了解它们的功能。

**精英物品**
</br>精英物品包括在精英 Mobs 商店中可获得的、由精英 Mobs 掉落的，或作为完成任务而获得的战利品，以及其他来源。

**附魔书**
</br>附魔书通常由精英 Mobs 掉落或赠送给玩家作为场边或任务的奖励。它们包含了玩家可以转移到他们想要的物品上的附魔。

**幸运票**
</br>幸运票通常可以从精英 Mobs 获得，或作为竞技场或任务的奖励，使玩家在强化物品时成功的机会加倍。

玩家可以通过访问 [Adventurer's Guild]($language$/elitemobs/adventurers_guild_world.md) 中的附魔师 NPC 或使用 `/em` 菜单来进入附魔菜单。

拥有精英物品和附魔书的玩家可以尝试将书中的附魔添加到他们的物品上。每次尝试都将花费玩家一些精英硬币。如果他们有的话，他们还可以使用幸运票将成功的机会加倍。

要开始附魔，玩家将需要在附魔窗口放置一个精英物品，一个附魔书和一个幸运票（如果他们有的话）然后尝试附魔他们的物品。之后，他们会得到下列其中一个结果：

- **成功：** 附魔成功添加到物品中。
- **失败：** 尝试不成功，导致附魔书和精英硬币的损失。
- **严重失败：** 更严重的失败，导致附魔书、精英硬币和精英物品本身的损失。
- **挑战：** 参与一场 Boss 战，如果失败则有 10% 的机会严重失败。如果玩家赢了，那么物品会被附魔。

<details>

<summary><b>视觉示例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy's 视频解释一些系统。</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 制作你自己的附魔书

这里有一个简短的指南，解释了你如何制作自己的附魔书。

<div align="center">

***

### isEnabled

设置物品是否启用。

| 键         |   值      | 默认 |
|-------------|:--------:|:----:|
| `isEnabled` | [布尔](#boolean) | `true`  |

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

给物品设置名字。支持 [颜色代码](#color_codes)。

| 键         |    值    | 默认 |
|-------------|:-------:|:---:|
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

给物品设置说明文字。支持 [颜色代码](#color_codes)。

| 键         |      值       | 默认 |
|-------------|:------------:|:---:|
| `lore` | [字符串列表](#string_list) |  无  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- '&2用这个自定义的书去'
- '&2在附魔师处对物品附魔！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

设置物品应当是哪种 MineCraft 材料。

| 键         |     值     | 默认 |
|-------------|:---------:|:---:|
| `material` | [材料](#material) | `BOOK`  |

<details> 

<summary><b>实例</b></summary>

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

设置物品应该持有哪些附魔。

| 键         |    值    | 默认 |
|-------------|:-------:|:---:|
| `enchantments` | [MineCraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或者 [EliteMobs 附魔]($language$/elitemobs/custom_enchantments_list.md) |  无  |

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

设置你可以从哪里获取物品。如果你想要你的书被随机精英掉落并在商店销售，你可以将这个设置为 `custom`。

否则你可以设置为 `unique` ，那么它只会从配置好的战利品表中掉落。

| 键         |    值    | 默认 |
|-------------|:-------:|:---:|
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

设置物品是否可以与其他玩家进行交易。

| 键          |    值    | 默认 |
|--------------|:-------:|:---:|
| `soulbound` | [布尔](#boolean) | `true`  |

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
name: '&5极好的采矿附魔书'
lore:
- '&2在附魔师处用来附魔物品!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

如你所见，制作你的附魔书并不复杂。大部分设置是你在创建 [物品]($language$/elitemobs/creating_items.md) 时会用到的常规设置。

除了这里我们的主要关注点应该是 `enchantments` 部分。我们的示例书拥有一个 MineCraft 附魔 `MENDING` 和一个 EliteMobs 附魔 `DRILLING`。

这会使我们的示例书成为你会想要在镐上使用的优秀附魔书。

</div>

</details>

</div>
