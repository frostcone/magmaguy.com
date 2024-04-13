[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义物品

## 自定义物品是什么？

自定义物品是 EliteMobs 通过配置文件定义的物品。您可以自定义这些物品的多个方面，例如物品的等级、附魔、名称、描述、纹理等等！

## 网络应用程序

您可以在 [这里](https://magmaguy.com/webapp/webapp.html) 轻松迅速地创建自定义战利品！

## 开始之前

### 自定义物品放在哪里？

自定义物品文件应放入配置文件夹 `~/plugins/EliteMobs/customitems` 中

可以建立子文件夹，例如 `~/plugins/EliteMobs/customitems/myitems`。 这对于保持事物组织有序来说是推荐的方式。

文件以 `.yml` 文件格式存储，推荐使用 [Notepad++](https://notepad-plus-plus.org/) 进行配置文件的编辑工作。 一个文件定义一个 Boss，尽管可以多次生成同一个 Boss，甚至为同一个 Boss 文件设置多个生成位置。

可以使用 [网络应用程序](https://magmaguy.com/webapp/webapp.html) 来快速轻松地创建自定义 Boss 和更多内容。

<div align="center">

### 最小可能的配置

**请注意自定义物品的最小可能配置文件是：**

```yml
```

注意这只是一个空文件。 这将默认使用名为“默认名称”的木剑。 **这个页面中的所有内容都是可选的！**

### 示例物品

我们来看看一个物品文件的示例。

<details> 
<summary><b>例子</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4测试物品'
lore:
- 这是一个很酷的物品
- 它有很酷的描述
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

以下是您可以为自定义物品配置的所有内容列表：

<div align="center">

***

### isEnabled

设置物品是否启用。 不会影响已经生成的物品。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

设置物品材料。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `material` | 从 [此列表中选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

设置物品等级。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `level` | [整数](#integer) | `0` |

注意，如果您将物品的 [`scalability`](#scalability) 设置为 `scalable`，则此设置不相关。如果您将其设置为 `limited`，那么这将是该物品可能达到的最高等级。

此外，材料有最低等级。 铁材料是等级 6，钻石材料是等级 7。 您不能强制物品低于材料的等级。

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

设置物品的显示名称。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `material` | [字符串](#string) 含有 [颜色代码](#color-codes) | "Default name" |

<details> 

<summary><b>例子</b></summary>

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

设置物品的描述。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `lore` | [列表](#list) 含有 [颜色代码](#color-codes) | none |

<details> 

<summary><b>例子</b></summary>

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

设置物品上的附魔效果。

| 关键字 |                                                                                                       值                                                                                                        | 默认值 |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [列表](#list) 含有 [Minecraft附魔](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) 或 [EliteMobs 自定义附魔]($language$/elitemobs/custom_enchantments_list.md) | none |

注意，这些条目遵循 `enchantmentName:enchantmentLevel` 的格式。 更多详情查看下方的例子！

<details>

<summary><b>例子</b></summary>

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

同时注意，像锋利这样的附魔如果等级超过了原版 Minecraft 的限制，将默认变为精英锋利。

***

### potionEffects

设置物品上的药水效果。 这些可以应用到玩家或玩家击中的实体。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `potionEffects` | [列表](#list) 含有 [Minecraft药水效果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| none |

此外，药水效果使用特定格式，允许管理员选择受影响者及何时受影响：

| 设置 | 描述 | 可选值 | 默认值 |
|-|:-:|:-:|-|
| 药水效果等级 | 设置药水效果的等级。 **药水效果从等级 0 开始**！  | [整数](#integer) | none |
| 受影响的实体 | 设置谁会受到药水效果的影响。  | `self` (玩家) / `target` (被击中的实体) | none |
| 应用方法 | 设置何时应用药水效果。  | `onHit` / `continuous` (持续应用) | none |

药水效果的格式是 `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`。 查看下面的例子！

<details>

<summary><b>例子</b></summary>

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

设定这组药水效果后，将发生以下情况：

击中时，毒药效果（等级 1）将应用于玩家击中的实体。 另外，玩家将受到等级 2 的瞬间治疗药水效果的影响。

持续地，玩家将获得夜视。 这意味着玩家在装备或握住物品时将始终拥有夜视。

</details>

***

### scalability

设置物品等级如何随掉落它的 Boss 的等级而增长。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `scalability` | `fixed`，`limited` 或 `scalable`。 查看下方！ | scalable |

查看此列表以了解不同选项的作用！

| 设置 | 描述 |
|-|:-:|
| `fixed` | 物品等级将始终设置为配置文件中的等级。 |
| `limited` | 最大的物品等级将由配置文件中的等级或 Boss 的等级（取较小值）限制。 |
| `scalable` | 物品的等级将完全基于掉落它的 Boss 的等级。|

注意具有 dropWeight 的物品将始终具有 `fixed` 可扩展性。

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

设置可以从哪里获得物品。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `itemType` | `custom` 或 `unique`。 查看下方！ | `custom` |

存在两种物品类型：

| 设置 | 描述 |
|-|:-:|
| `custom` | 物品可以从任何可以掉落战利品的 EliteMobs 移动生物中掉落，并将在自定义商店中可见。 `
| `unique` | 物品将不会被任何 Boss 掉落，也不会在自定义商店中可见。 获取它的唯一方式是通过配置一个 Custom Boss 通过其 `uniqueLootTable` 掉落它！ |

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

设置物品将适合进哪个掉落表。

| 关键字 |                  值                  | 默认值 |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` 或一个 [双精度数](#double) 值。 | `dynamic` |

EliteMobs 具有 5 种不同的自定义物品掉落表，不包括直接配置的，如 Custom Bosses 的 `uniqueLootList`。

它们是：

| 掉落表 | 描述 | 默认权重 |
|-|:-:|:-:|
| 随机生成的物品 | 根据服务器配置文件随机生成的物品 | `90.0` |
| 重量物品 | 重量不为 `dynamic` 的物品 | `1.0` |
| 固定物品 | 具有固定可扩展性的物品 | `10.0` |
| 限定物品 | 具有限定可扩展性的物品 | `3.0` |
| 可扩展物品 | 具有可扩展性的物品 | `6.0` |

当 Boss 死亡时，根据 ItemSettings.yml 配置文件从这些表中选择一个物品。 上面列出了 `Default weight` 里的默认权重。 权重越高，物品的掉落可能性就越大。

`Weighed items` 的 `Default weight` 很小，意味着它们将不会经常掉落。 `dropWeight` 不为 `dynamic` 的物品应当是稀有的，仅用于 Boss 掉落魅力之类的默认物品 -- 这些物品不直接用于战斗，而是用于通过药水效果来增强玩家。

您在这里设置的 `dropWeight` 设置了特定 `Weighed item` 从 `Weighed items` 列表中掉落的概率。 它不会增加 `Weighed item`s 掉落的概率。

**如果您感到困惑并只是想制作武器和盔甲，可以跳过此设置，因为它默认为 `dynamic` 是正确的。**

`Weighed item`s 通常有 1.0 的权重。

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

设置物品的纹理。 需要使用资源包中的有效纹理！

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `customModelID` | [整数](#integer) | none |

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

这将使用玩家使用的资源包中的钻石剑的自定义纹理 1。 如果想正确地使用此功能，建议将服务器设置为在玩家登录时提供资源包。

</details>

***

### permission

设置获得物品所需的权限。

| 关键字 | 值 | 默认值 |
|-|:-:|-|
| `permission` | [字符串](#string) | none |

您需要一个权限管理插件才能给玩家授权。 只有在您没有禁用 soulbind 附魔时，此功能才能正确工作。

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

在这个设置下，只有拥有 `elitemobs.cool.permission` 权限的玩家才能获得此物品。

</details>

***

### soulbound

设置在掉落时物品是否应绑定到魂魄。

| 关键字 |       值        | 默认值 |
|-|:-------------------:|---------|
| `soulbound` | [布尔值](#boolean) | `true`  |

<details>

<summary><b>例子</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>