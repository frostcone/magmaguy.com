[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义物品

## 什么是自定义物品？

自定义物品是由 EliteMobs 通过配置文件定义的物品。您可以自定义这些物品的几个方面，例如物品等级、附魔、名称、传说、纹理等等！

## Web 应用程序

您可以在 [此处](https://magmaguy.com/webapp/webapp.html) 轻松快速地创建自定义战利品！

## 开始之前

### 自定义物品放在哪里？

自定义物品文件放在配置文件夹 `~/plugins/EliteMobs/customitems` 中

可以创建子文件夹，例如 `~/plugins/EliteMobs/customitems/myitems`。建议这样做以便于整理。

文件以 `.yml` 文件格式存储，建议使用 [Notepad++](https://notepad-plus-plus.org/) 文件编辑软件进行配置工作。一个文件定义一个 Boss，但可以多次生成同一个 Boss，甚至可以为同一个 Boss 文件设置多个生成位置。

可以使用 [Web 应用程序](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义 Boss 等。

<div align="center">

### 最小的配置

**请注意，自定义物品最小的配置文件是：**

```yml
```

请注意，这只是一个空文件。这将默认使用名为“默认名称”的木剑。**此页面中的所有内容都是可选的！**

### 示例物品

让我们看一下物品文件的示例。

<details> 
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4测试物品'
lore:
- 这是一个很酷的物品
- 它有很酷的传说
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

##  自定义物品设置

以下是您可以为自定义物品配置的所有内容的列表：

<div align="center">

***

### isEnabled

设置物品是否启用。不影响已经生成的物品。

| 键        | 值            | 默认值 |
|------------|:--------------:|--------|
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

设置物品材料。

| 键       | 值                                             | 默认值        |
|-----------|:-----------------------------------------------:|-----------------|
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

| 键     | 值                | 默认值 |
|---------|:------------------:|--------|
| `level` | [整数](#整数)          | `0`    |

请注意，如果您将物品 [`scalability`](#scalability) 设置为 `scalable`，则此设置不相关。如果您将其设置为 `limited`，这将是物品的最高可能等级。

此外，材料有最低等级。铁制材料为 6 级，钻石材料为 7 级。您不能强制物品等级低于材料等级。

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

| 键     | 值                                    | 默认值      |
|---------|:-------------------------------------:|---------------|
| `material` | 带有 [颜色代码](#颜色代码) 的 [字符串](#字符串) | "默认名称" |

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

设置物品的传说。

| 键     | 值                            | 默认值 |
|---------|:-------------------------------:|--------|
| `lore` | 带有 [颜色代码](#颜色代码) 的 [列表](#列表) | 无      |

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

| 键          | 值                                                                                                                            | 默认值 |
|--------------|:------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `enchantments` | [列表](#列表)，包含 [Minecraft 附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 自定义附魔]($language$/elitemobs/custom_enchantments_list.md) | 无      |

请注意，这些条目遵循 `enchantmentName:enchantmentLevel` 的格式。查看下面的示例！

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

还要注意，如果等级开始超过普通 Minecraft 的限制，像锋利这样的附魔默认情况下会变成精英锋利。

***

### potionEffects

设置物品将具有的药水效果。这些可以应用于玩家或受到玩家伤害的实体。

| 键             | 值                                                                                  | 默认值 |
|----------------|:-------------------------------------------------------------------------------------:|--------|
| `potionEffects` | 包含 [Minecraft 药水效果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) 的 [列表](#列表) | 无      |

此外，药水效果使用特定格式，允许管理员选择谁受到影响以及何时受到影响：

| 设置              | 描述                                                          | 值               | 默认值 |
|-------------------|----------------------------------------------------------------:|------------------:|--------|
| 药水效果等级       | 设置药水效果的等级。**药水效果从 0 级开始**！                 | [整数](#整数)     | 无      |
| 受影响的实体       | 设置谁受到药水效果的影响。                                   | `self`（玩家）/ `target`（被击中的实体） | 无      |
| 应用方法            | 设置何时应用药水效果。                                       | `onHit` / `continuous`（持续重新应用） | 无      |

药水效果的格式为 `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`。查看下面的示例！

EliteMobs 还具有充当饰品的自定义物品。这些物品除了在持有或装备在插槽中时为玩家提供药水效果外，没有其他作用。

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

使用这组药水效果，将发生以下情况：

击中时，中毒药水效果（1 级）将应用于被玩家击中的实体。此外，玩家将受到 2 级瞬间治疗药水效果的影响。

持续地，玩家将获得夜视效果。这意味着只要玩家穿着或持有该物品，他们就会拥有夜视效果。

</details>

***

### scalability

设置物品等级如何随着掉落它的 Boss 的等级而增长。

| 键           | 值                                    | 默认值      |
|---------------|:-------------------------------------:|---------------|
| `scalability` | `fixed`、`limited` 或 `scalable`。查看下方！ | scalable |

查看此列表以了解不同选项的作用！

| 设置      | 描述                                                                  |
|------------|:----------------------------------------------------------------------:|
| `fixed`   | 物品等级将始终是配置文件中设置的等级。                                   |
| `limited` | 最大物品等级将受配置文件中设置的等级或 Boss 的等级（以较低者为准）限制。 |
| `scalable` | 物品等级将完全基于掉落它的 Boss 的等级。                                 |

请注意，具有 dropWeight 的物品将始终具有 `fixed` 可扩展性。

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

设置您可以从哪里获得该物品。

| 键        | 值            | 默认值     |
|------------|:--------------:|------------|
| `itemType` | `custom` 或 `unique`。查看下方！ | `custom` |

有两种物品类型：

| 设置      | 描述                                                                                                     |
|------------|:----------------------------------------------------------------------------------------------------------:|
| `custom`  | 该物品将能够从任何能够掉落战利品的 EliteMobs 怪物身上掉落，并且将在自定义商店中出售。`                      |
| `unique` | 该物品不会被任何 Boss 掉落，也不会出现在自定义商店中。获得它的唯一方法是通过配置自定义 Boss 通过其 `uniqueLootTable` 掉落它！ |

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

设置物品将放入的战利品表。

| 键         | 值                                            | 默认值     |
|-------------|:----------------------------------------------:|------------|
| `dropWeight` | `dynamic` 或 [双精度浮点数](#双精度浮点数) 值。 | `dynamic` |

EliteMobs 有 5 个不同的自定义物品战利品表，不包括直接配置的物品，例如自定义 Boss 上的 `uniqueLootList`。

如下所示：

| 战利品表              | 描述                                                                 | 默认权重  |
|----------------------|:--------------------------------------------------------------------:|-----------|
| 程序生成的物品        | 基于服务器配置文件随机生成的物品                                      | `90.0`   |
| 加权物品               | 权重不是 `dynamic` 的物品                                             | `1.0`    |
| 固定物品               | 具有固定可扩展性的物品                                               | `10.0`   |
| 受限物品               | 具有受限可扩展性的物品                                               | `3.0`    |
| 可扩展物品               | 可扩展的物品                                                           | `6.0`    |

当 Boss 死亡时，将根据 ItemSettings.yml 配置文件从这些表中选择一个物品。权重的默认值在上面的“默认权重”中列出。权重越高，物品掉落的可能性就越大。

`加权物品` 的 `默认权重` 很小，这意味着它们不会经常掉落。`dropWeight` 不是 `dynamic` 的物品 meant to be 稀有，并且仅在默认情况下用于 Boss 掉落的饰品 - 这些物品不是直接用于战斗，而是用于通过药水效果增强玩家。

您在此处设置的 `dropWeight` 设置特定 `加权物品` 从 `加权物品` 列表中掉落的几率。它不会增加 `加权物品` 掉落的几率。

**如果您感到困惑，只想制作武器和盔甲，请跳过此设置，因为它默认情况下正确地设置为 `dynamic`。**

`加权物品` 通常的权重为 1.0。

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

| 键             | 值                | 默认值 |
|----------------|:------------------:|--------|
| `customModelID` | [整数](#整数)          | 无      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

这将使用玩家正在使用的资源包中钻石剑的自定义纹理 1。如果您想正确使用此功能，建议您将服务器设置为在玩家登录时提供资源包。

</details>

***

### permission

设置获得物品所需的权限。

| 键          | 值              | 默认值 |
|--------------|:-----------------|--------|
| `permission` | [字符串](#字符串) | 无      |

您将需要一个权限管理插件来授予玩家权限。只有在您没有禁用灵魂绑定附魔的情况下，这才能正常工作。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: "elitemobs.酷.权限"
```

</div>

通过此设置，只有拥有 `elitemobs.酷.权限` 权限的玩家才能获得此物品。

</details>

***

### soulbound

设置物品掉落时是否应该绑定灵魂。

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


