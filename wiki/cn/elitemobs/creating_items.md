[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义物品

## 什么是自定义物品？

自定义物品是通过配置文件由 EliteMobs 定义的物品。您可以自定义这些物品的多个方面，例如物品的等级、附魔、名称、lore、纹理等等！

## Webapp

您可以在[这里](https://magmaguy.com/webapp/webapp.html)轻松快速地创建自定义战利品！

## 开始之前

### 自定义物品放在哪里？

自定义物品文件位于配置文件夹 `~/plugins/EliteMobs/customitems` 中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/customitems/myitems`。建议这样做以保持组织性。

文件以 `.yml` 文件格式存储，[Notepad++](https://notepad-plus-plus.org/) 是配置工作的推荐文件编辑软件。一个文件定义一个
Boss，尽管可以多次生成同一个 Boss，甚至可以为同一个 Boss 文件设置多个生成位置。

可以使用 [webapp](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义 Boss 等。

<div align="center">

### 最小的可能配置

**请注意，自定义物品的最小可能配置文件是：**

```yml
```

注意这只是一个空文件。这将默认为使用名为“默认名称”的木剑。**本页中的所有内容都是可选的！**

### 示例物品

让我们看看一个物品文件的示例。

<details> 
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4测试物品'
lore:
- 这是一个很酷的物品
- 它有很酷的 lore
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

以下是可以为自定义物品配置的所有内容的列表：

<div align="center">

***

### isEnabled

设置是否启用该物品。不影响已生成的物品。

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

| 键          |                                       值                                       | 默认值            |
|------------|:-----------------------------------------------------------------------------:|----------------|
| `material` | [从此列表中选择！](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

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

请注意，如果您将物品的 [`scalability`](#scalability) 设置为 `scalable`，则此设置不相关。如果您将其设置为 `limited`
，这将是物品的最高可能等级。

此外，材质有最低等级。铁材质为 6 级，钻石材质为 7 级。您不能强制物品低于材质的等级。

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
name: "&2酷物品"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

设置物品的 lore。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `lore` | 带有[颜色代码](#color-codes)的[列表](#list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lore:
- "&2这是最酷的剑"
- "&2有史以来！"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

设置物品上的附魔。

| 键              |                                                                                          值                                                                                          | 默认值 |
|----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----|
| `enchantments` | 带有[Minecraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)或[EliteMobs 自定义附魔]($language$/elitemobs/custom_enchantments_list.md)的[列表](#list) | 无   |

请注意，这些条目遵循格式 `enchantmentName:enchantmentLevel`。请查看下面的示例！

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

另请注意，如果等级开始超过原版 Minecraft 限制，像锋利这样的附魔默认会变成精英锋利。

***

### potionEffects

设置物品将具有的药水效果。这些可以应用于玩家或被玩家伤害的实体。

| 键               |                                                        值                                                         | 默认值 |
|-----------------|:----------------------------------------------------------------------------------------------------------------:|-----|
| `potionEffects` | 带有[Minecraft 药水效果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)的[列表](#list) | 无   |

此外，药水效果使用一种特定的格式，允许管理员选择谁会受到影响以及何时受到影响：

| 设置     |             描述             |                值                | 默认值 |
|--------|:--------------------------:|:-------------------------------:|-----|
| 药水效果等级 | 设置药水效果的等级。**药水效果从 0 级开始！** |         [整数](#integer)          | 无   |
| 受影响的实体 |       设置谁会受到药水效果的影响。       | `self` (玩家) / `target` (被击中的实体) | 无   |
| 应用方法   |        设置何时应用药水效果。         | `onHit` / `continuous` (持续重新应用) | 无   |

药水效果的格式为 `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`。请查看下面的示例！

EliteMobs 还具有用作护符的自定义物品。这些物品除了在持有或装备在槽位中时为玩家提供药水效果外，不做其他任何事情。

警告：使用 INSTANT_DAMAGE 药水效果会在撞击时治愈不死生物，因为这是原版 Minecraft 中的默认机制。

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

有了这组药水效果，将发生以下事情：

在击中时，中毒药水效果（1 级）将应用于被玩家击中的实体。此外，玩家将受到 2 级瞬间治疗药水效果的影响。

持续地，玩家将获得夜视效果。这意味着只要玩家佩戴或持有该物品，他们就会拥有夜视效果。

</details>

***

### scalability

设置物品的等级如何随着掉落它的 Boss 的等级增长。

| 键             |                   值                   | 默认值      |
|---------------|:-------------------------------------:|----------|
| `scalability` | `fixed`、`limited` 或 `scalable`。请查看下面！ | scalable |

请查看此列表以了解不同选项的作用！

| 设置         |                   描述                    |
|------------|:---------------------------------------:|
| `fixed`    |           物品等级始终为配置文件中设置的等级。            |
| `limited`  | 最大物品等级将受配置文件中设置的等级或 Boss 的等级的限制，以较低者为准。 |
| `scalable` |        物品的等级将完全基于掉落它的 Boss 的等级。         |

请注意，具有 dropWeight 的物品始终具有 `fixed` 可扩展性。

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

设置您可以从哪里获得物品。

| 键          |             值              | 默认值      |
|------------|:--------------------------:|----------|
| `itemType` | `custom` 或 `unique`。请查看下面！ | `custom` |

有两种物品类型：

| 设置       |                                      描述                                       |
|----------|:-----------------------------------------------------------------------------:|
| `custom` |                 该物品将能够从任何能够掉落战利品的 EliteMobs 怪物中掉落，并且将在自定义商店中。                 |
| `unique` | 该物品不会被任何 Boss 掉落，也不会在自定义商店中。获得它的唯一方法是通过配置自定义 Boss 以通过其 `uniqueLootTable` 掉落它！ |

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

| 键            |                值                 | 默认值       |
|--------------|:--------------------------------:|-----------|
| `dropWeight` | `dynamic` 或 [Double](#double) 值。 | `dynamic` |

EliteMobs 有 5 个不同的自定义物品战利品表，不包括直接配置的战利品表，例如自定义 Boss 上的 `uniqueLootList`。

这些如下：

| 战利品表    |         描述          |  默认权重  |
|---------|:-------------------:|:------:|
| 程序生成的物品 |  根据服务器配置文件随机生成的物品   | `90.0` |
| 加权物品    | 具有非 `dynamic` 权重的物品 | `1.0`  |
| 固定物品    |     具有固定可扩展性的物品     | `10.0` |
| 有限物品    |     具有有限可扩展性的物品     | `3.0`  |
| 可扩展物品   |      具有可扩展性的物品      | `6.0`  |

当 Boss 死亡时，将根据 ItemSettings.yml 配置文件从这些表中选择一个物品。权重的默认值在上面的“默认权重”中列出。权重越高，物品掉落的可能性就越大。

`加权物品` 的 `默认权重` 较小，这意味着它们不会经常掉落。具有非 `dynamic` 的 `dropWeight` 的物品旨在稀有，并且仅用于护符
Boss 掉落的默认设置 - 不直接用于战斗的物品，而是用于通过药水效果来增益玩家的物品。

您在此处设置的 `dropWeight` 设置特定 `加权物品` 从 `加权物品` 列表中掉落的机会。它不会增加 `加权物品` 掉落的机会。

**如果您感到困惑并且只想制作武器和盔甲，请跳过此设置，因为它正确地默认为 `dynamic`。**

`加权物品` 的权重通常为 1.0。

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

从 Minecraft 1.21.4 版本（EM 9.1.13）开始，这是配置自定义物品模型 ID 的新必需设置。
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

此设置将特定纹理分配给物品。以下是它的工作原理：

- `elitemobs:` 是资源包 `assets` 文件夹中的主目录。
- `equipment` 是 `assets/elitemobs/models` 内的子目录。
- `magmaguys_toothpick` 是位于资源包 `assets/elitemobs/models/equipment` 中的模型文件。

在此示例中，模型文件的完整路径将是：
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

这将使用玩家正在使用的 EliteMobs 资源包中的自定义纹理 `magmaguys_toothpick`。建议您设置服务器以在登录时向玩家提供资源包，如果您想正确使用此功能。

</details>

***

### permission

设置获得该物品所需的权限。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `permission` | [字符串](#string) | 无 |

您需要权限管理插件才能为玩家提供权限。如果您没有禁用灵魂绑定附魔，这将仅正常工作。

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

设置物品是否应在掉落时绑定灵魂。

| 键           |        值        | 默认值    |
|-------------|:---------------:|--------|
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
