[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义物品

## 什么是自定义物品？

自定义物品是由 EliteMobs 通过配置文件定义的物品。您可以自定义有关这些物品的多个方面，例如物品的等级、附魔、名称、背景故事、纹理等等！

## Webapp

您可以在[此处](https://magmaguy.com/webapp/webapp.html)轻松快速地创建自定义战利品！

## 开始之前

### 自定义物品放在哪里？

自定义物品文件放在配置文件夹 `~/plugins/EliteMobs/customitems` 中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/customitems/myitems`。建议这样做以保持井然有序。

文件以 `.yml` 文件格式存储，[Notepad++](https://notepad-plus-plus.org/) 是用于配置工作的推荐文件编辑软件。一个文件定义一个首领，尽管可以多次生成同一个首领，甚至可以为同一个首领文件设置多个生成位置。

可以使用 [webapp](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义首领等。

<div align="center">

### 最小可能的配置

**请注意，自定义物品的最小可能配置文件为：**

```yml
```

请注意，这只是一个空文件。这将默认为使用名为“默认名称”的木剑。**此页面中的所有内容都是可选的！**

### 示例物品

让我们看一下物品文件示例。

<details>
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4测试物品'
lore:
- 这是一个很酷的物品
- 它有很酷的背景故事
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

## 自定义物品设置

以下是您可以为自定义物品配置的所有内容列表：

<div align="center">

***

### isEnabled

设置是否启用物品。不影响已生成的物品。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

设置物品材质。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `material` | [从此列表选择！](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>

***

### level

设置物品等级。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `level` | [整数](#integer) | `0` |

请注意，如果您将物品的 [`scalability`](#scalability) 设置为 `scalable`，则此设置不相关。如果将其设置为 `limited`，则这将是该物品的最高可能等级。

此外，材质具有最低等级。铁材质的等级为 6，钻石材质的等级为 7。您不能强制物品的等级低于材质的等级。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>

***

### name

设置物品的显示名称。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `material` | 带有[颜色代码](#color-codes)的[字符串](#string) | "默认名称" |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "&2酷炫物品"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

设置物品的背景故事。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `lore` | 带有[颜色代码](#color-codes)的[列表](#list) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- "&2这是有史以来最酷的剑"
- "&2！"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

设置物品上的附魔。

| 键 |                                                                                                       值                                                                                                       | 默认值 |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | 具有 [Minecraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 自定义附魔]($language$/elitemobs/custom_enchantments_list.md) 的[列表](#list) | 无 |

请注意，这些条目遵循 `enchantmentName:enchantmentLevel` 格式。请查看以下示例！

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
enchantments:
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

另请注意，如果等级开始超出原版 Minecraft 限制，则像锋利这样的附魔默认会变成精英锋利。

***

### potionEffects

设置物品将具有的药水效果。这些可以应用于玩家或受到玩家伤害的实体。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `potionEffects` | 具有 [Minecraft 药水效果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) 的[列表](#list) | 无 |

此外，药水效果使用特定的格式，允许管理员选择谁受到影响以及何时受到影响：

| 设置 | 描述 | 值 | 默认值 |
|-|:-:|:-:|-|
| 药水效果等级 | 设置药水效果的等级。**药水效果从 0 级开始**！ | [整数](#integer) | 无 |
| 受影响的实体 | 设置谁受到药水效果的影响。 | `self`（玩家）/ `target`（受到打击的实体） | 无 |
| 应用方法 | 设置何时应用药水效果。 | `onHit` / `continuous`（不断重新应用） | 无 |

药水效果的格式为 `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`。请查看以下示例！

EliteMobs 还具有作为护符的自定义物品。这些物品不做任何其他事情，只是在持有或装备在插槽中时向玩家提供药水效果。

警告：使用 INSTANT_DAMAGE 药水效果会在受到攻击时治愈不死生物，因为这是原版 Minecraft 中的默认机制。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
potionEffects:
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

通过这组药水效果，将发生以下情况：

在被击中时，中毒药水效果（1 级）将应用于被玩家击中的实体。此外，玩家将受到 2 级立即治疗药水效果的影响。

玩家将持续获得夜视能力。这意味着只要玩家穿着或持有该物品，他们就会拥有夜视能力。

</details>

***

### scalability

设置物品的等级如何随着掉落它的首领的等级而增长。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `scalability` | `fixed`、`limited` 或 `scalable`。请查看下方！ | scalable |

请查看此列表以了解不同选项的作用！

| 设置 | 描述 |
|-|:-:|
| `fixed` | 物品等级将始终是在配置文件中设置的等级。 |
| `limited` | 最大物品等级将受到配置文件中设置的等级或首领等级的限制，以较低者为准。 |
| `scalable` | 物品的等级将完全基于掉落它的首领的等级。 |

请注意，具有 dropWeight 的物品将始终具有 `fixed` 的 scalability。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

设置可以从中获取物品的位置。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `itemType` | `custom` 或 `unique`。请查看下方！ | `custom` |

有两种物品类型：

| 设置 | 描述 |
|-|:-:|
| `custom` | 该物品将能够从任何能够掉落战利品的 EliteMobs 生物中掉落，并且将在自定义商店中。`
| `unique` | 该物品不会被任何首领掉落，也不会在自定义商店中。获得它的唯一方法是通过配置自定义首领通过其 `uniqueLootTable` 掉落它！ |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

设置物品将适合的战利品表。

| 键 |                  值                  | 默认值 |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` 或 [双精度浮点数](#double) 值。 | `dynamic` |

EliteMobs 有 5 个不同的自定义物品战利品表，不包括直接配置的战利品表，例如自定义首领上的 `uniqueLootList`。

这些如下：

| 战利品表 | 描述 | 默认权重 |
|-|:-:|:-:|
| 程序化生成的物品 | 基于服务器配置文件随机生成的物品 | `90.0` |
| 加权物品 | 具有 `dynamic` 以外权重的物品 | `1.0` |
| 固定物品 | 具有固定 scalability 的物品 | `10.0` |
| 受限物品 | 具有受限 scalability 的物品 | `3.0` |
| 可缩放物品 | 可缩放的物品 | `6.0` |

当首领死亡时，会根据 ItemSettings.yml 配置文件从这些表中选择一个物品。权重的默认值在上面的 `默认权重` 中列出。权重越高，物品掉落的可能性就越大。

`加权物品` 的 `默认权重` 很小，这意味着它们不会经常掉落。具有不是 `dynamic` 的 `dropWeight` 的物品旨在稀有，并且仅用于默认情况下掉落的护符首领 - 不是直接用于战斗，而是用于用药水效果强化玩家的物品。

您在此处设置的 `dropWeight` 设置了特定 `加权物品` 从 `加权物品` 列表中掉落的几率。它不会增加掉落 `加权物品` 的几率。

**如果您感到困惑并且只想制作武器和盔甲，请跳过此设置，因为它会正确默认为 `dynamic`。**

`加权物品` 通常具有 1.0 的权重。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>

***

### customModelID

设置物品的纹理。需要使用资源包中的有效纹理！

| 键 | 值 | 默认值 |
|-|:-:|-|
| `customModelID` | [整数](#integer) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

这将使用玩家正在使用的资源包中钻石剑的自定义纹理 1。建议您设置服务器以在登录时向玩家提供资源包，如果您想正确使用此功能。

</details>

***

### customModelV2

从 Minecraft 版本 1.21.4 (EM 9.1.13) 开始，这是配置自定义物品模型 ID 的新必需设置。
设置物品的纹理。需要使用资源包中的有效纹理！

| 键 | 值 | 默认值 |
|-|:-:|-|
| `customModelV2` | [字符串](#string) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customModelV2: elitemobs:equipment/magmaguys_toothpick
```

此设置将特定纹理分配给物品。它的工作原理如下：

- `elitemobs:` 是资源包 `assets` 文件夹中的主目录。
- `equipment` 是 `assets/elitemobs/models` 内的子目录。
- `magmaguys_toothpick` 是位于资源包 `assets/elitemobs/models/equipment` 中的模型文件。

此示例中模型文件的完整路径将为：
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

这将使用玩家正在使用的 EliteMobs 资源包中的自定义纹理 `magmaguys_toothpick`。建议您设置服务器以在登录时向玩家提供资源包，如果您想正确使用此功能。

</details>

***

### permission

设置获取物品所需的权限。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `permission` | [字符串](#string) | 无 |

您将需要一个权限管理插件来授予玩家权限。如果您没有禁用灵魂绑定附魔，则此功能才能正常工作。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

通过此设置，只有具有 `elitemobs.cool.permission` 权限的玩家才能获得此物品。

</details>

***

### soulbound

设置物品是否应在掉落时进行灵魂绑定。

| 键        |       值        | 默认值 |
|-----------|:---------------:|---------|
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
