[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

宝箱是一项功能，允许管理员创建可以掉落战利品或生成一个模仿怪（敌对） Boss 的箱子。

<div align="center">

<div align="left">

## 数值

</div>

### isEnabled

设置是否启用宝箱。

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

### chestType

设置箱子材料的类型。

| 键           |        值        |   默认值   |
|-------------|:---------------:|:-------:|
| `chestType` | [材料](#material) | `CHEST` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chestType: CHEST
```

*这需要是有效的箱子材料，例如 `CHEST` 或 `BARREL`*。

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

设置箱子的朝向。

| 键        |   值    |   默认值   |
|----------|:------:|:-------:|
| `facing` | 特殊 [1] | `CHEST` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
facing: CHEST
```

*这需要是有效的箱子材料，例如 `CHEST` 或 `BARREL`*。

</div>

</details>

**特殊 [1]**

<details> 

<summary><b>展开表格</b></summary>

| 朝向  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

设置箱子是为单个玩家掉落还是为多个玩家掉落。

`SINGLE` 箱子在打开后消失，并在重新补充时重新出现。`GROUP` 箱子会一直存在，并让各个玩家知道它们正处于冷却中。

| 键           |         值          |   默认值    |
|-------------|:------------------:|:--------:|
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

列出宝箱在打开时应掉落的战利品。

| 键          |                       值                       | 默认值  |
|------------|:---------------------------------------------:|:----:|
| `lootList` | [EM 掉落表]($language$/elitemobs/loot_tables.md) | none |

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

设置生成敌对 Boss 而不是掉落战利品的几率。

| 键             |         值         | 默认值 |
|---------------|:-----------------:|:---:|
| `mimicChance` | [双精度浮点数](#double) | `0` |

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

指定可用于生成的敌对 Boss 列表。将从此列表中随机选择一个 Boss 进行生成。

该列表还支持权重系统，您可以实现该系统以确保某些 Boss 比其他 Boss 更频繁地被选中。

| 键                       |           值           | 默认值  |
|-------------------------|:---------------------:|:----:|
| `mimicCustomBossesList` | [字符串列表](#string_list) | none |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```

*如果要为 Boss 分配权重，列表应格式化如下：*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*在此配置中，`my_cool_mimic_boss.yml` 比 `weak_mimic_boss.yml` 更容易被选择生成。*

</div>

</details>

***

### restockTimer

设置箱子重新装满战利品之前的时间，以分钟为单位。

| 键              |       值        | 默认值 |
|----------------|:--------------:|:---:|
| `restockTimer` | [整数](#integer) | `0` |

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

设置箱子将产生的粒子效果。

| 键         |                                    值                                    | 默认值  |
|-----------|:-----------------------------------------------------------------------:|:----:|
| `effects` | [粒子](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) | none |

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

设置宝箱将生成的地点。

可以通过 `/em addTreasureChest <treasurechestfilename.yml>` 更轻松地设置地点。

| 键           |           值           | 默认值  |
|-------------|:---------------------:|:----:|
| `locations` | [字符串列表](#string_list) | none |

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

| 键           |       值        | 默认值  |
|-------------|:--------------:|:----:|
| `chestTier` | [整数](#integer) | none |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>


***

### instanced

设置箱子是否应为实例化的（用于实例化的地牢）。
当箱子放置在地牢中时，所有重新补充计时器都将被禁用。

**请勿手动设置此值**。

| 键           |        值        |   默认值   |
|-------------|:---------------:|:-------:|
| `instanced` | [布尔值](#boolean) | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

***

### restockTime

在箱子被掠夺后，插件将写入此键以跟踪重新补充时间。

**请勿手动设置此值**。

| 键             |    值     | 默认值  |
|---------------|:--------:|:----:|
| `restockTime` | Unix 时间戳 | none |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>宝箱配置示例</b></summary>

<div align="left">

```yml
isEnabled: true
chestType: CHEST
facing: NORTH
dropStyle: MULTIPLE
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml:chance=0.95
mimicChance: 0.50
mimicCustomBossesList:
- balrog.yml
- killer_rabbit_of_caerbannog.yml
restockTimer: 1
effects: SMOKE_NORMAL
locations:
- world,0.0,-60.0,-14.0,0.0,0.0
```

<div align="center">

![create_chest_chest.jpg](../../../img/wiki/create_chest_chest.jpg)

</div>

</div>

</details>
