[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

宝箱是一种功能，允许管理员创建的宝箱可以掉落战利品或生成一个模拟（敌对）boss。

<div align="center">

<div align="left">

## 值

</div>

### isEnabled

设置一个宝箱是否启用。

| 关键字       |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
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

### chestType

设置宝箱的类型。

| 关键字       |        值         | 默认值 |
|-----------|:---------------------:|:-------:|
| `chestType` | [材料](#material) | `CHEST` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*这需要是一个有效的箱子材料，如`CHEST`或`BARREL`*。

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

设置箱子的朝向。

| 关键字       |   值    | 默认值 |
|-----------|:-----------:|:-------:|
| `facing` | 特殊 [1] | `CHEST` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
facing: CHEST
```
*这需要是一个有效的箱子材料，如`CHEST`或`BARREL`*。

</div>

</details>

**特殊 [1]**

<details> 

<summary><b>展开表格</b></summary>

| 面朝  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

设置箱子是否被一个玩家还是多个玩家掉落。

`SINGLE`型箱子在开启后消失，并在重新装货后出现。`GROUP`型箱子保持在场，并让单个玩家知道他们处于冷却状态。

| 关键字       |       值       | 默认值 |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

列出宝箱打开时应掉落的战利品。

| 关键字       |                        值                        | 默认值 |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [EM Loot Table]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml
```

</div>

</details>

***

### mimicChance

设置生成一个敌对boss代替掉落战利品的几率。

| 关键字       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [双精度浮点数](#double) |   `0`   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

指定可供生成的敌对boss的列表。将从此列表中随机选择一个boss进行生成。

该列表也支持您可以实施的权重系统，以确保某些boss比其他boss更常被选中。

| 关键字       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [字符串列表](#string_list) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*如果你希望给bosses分配权重，列表应该按照以下格式进行排列：*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*在此配置中，`my_cool_mimic_boss.yml`比`weak_mimic_boss.yml`更有可能被选中生成。*

</div>

</details>

***

### restockTimer

设置宝箱在被清空后多少分钟后重新填满战利品。

| 关键字       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [整数](#integer) |   `0`   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

设置箱子将做出的粒子效果。

| 关键字       |      值       | 默认值 |
|-----------|:-----------------:|:-------:|
| `effects` | [粒子](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
effects:
- DRIP_LAVA
- SMOKE_NORMAL
```

<div align="center">

![create_chest_effects.jpg](../../../img/wiki/create_chest_effects.jpg)

</div>

</div>

</details>

***

### locations

设置宝箱将在哪里生成。

可以通过 `/em addTreasureChest <treasurechestfilename.yml> 更容易地设置位置。

| 关键字       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `locations` | [字符串列表](#string_list) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
locations:
- my_world,10,50,10,0,0
- my_nether_world,12,58,12,0,0
```

</div>

</details>

***

### chestTier

设置打开箱子所需的最低公会等级。

| 关键字       |           值            | 默认值 |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [整数](#integer) |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>

***

### restockTime

在箱子被掠夺后，插件将写入此键以跟踪重新装货时间。

**不要手动设置此值**。

| 关键字       |     值     | 默认值 |
|-----------|:--------------:|:-------:|
| `restockTime` | Unix 时间戳 |  none   |

<details> 

<summary><b>示例</b></summary>

<div align="left">