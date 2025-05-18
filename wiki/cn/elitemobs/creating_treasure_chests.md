```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

宝箱是一项允许管理员创建宝箱的功能，这些宝箱可以掉落战利品或生成一个拟态怪（敌对）首领。

<div align="center">

<div align="left">

## 值

</div>

### isEnabled

设置宝箱是否启用。

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
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

### chestType

设置宝箱的材质类型。

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*这需要是一个有效的宝箱材质，例如 `CHEST` 或 `BARREL`*。

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

设置宝箱的朝向。

| Key       |   Values    | Default |
|-----------|:-----------:|:-------:|
| `facing` | 特殊 [1] | `CHEST` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
facing: CHEST
```
*这需要是一个有效的宝箱材质，例如 `CHEST` 或 `BARREL`*。

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

设置宝箱是为单个玩家还是多个玩家掉落。

`SINGLE` 宝箱在被打开后消失，并在补货时重新出现。`GROUP` 宝箱会保留，并告知单个玩家他们正处于冷却中。

| Key       |       Values       | Default |
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

| Key       |                        Values                        | Default |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [EM 战利品表]($language$/elitemobs/loot_tables.md) |  none   |

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

设置生成敌对首领而不是掉落战利品的几率。

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

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

指定可用于生成的敌对首领列表。将从此列表中随机选择一个首领进行生成。

该列表还支持权重系统，您可以实现该系统以确保某些首领比其他首领更频繁地被选中。

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [String List](#string_list) |  none   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*如果您希望为首领分配权重，列表应按以下格式设置：*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*在此配置中，`my_cool_mimic_boss.yml` 比 `weak_mimic_boss.yml` 更可能被选中生成。*

</div>

</details>

***

### restockTimer

设置宝箱重新装满战利品所需的时间，单位为分钟。

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Integer](#integer) |   `0`   |

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

设置宝箱将产生的粒子效果。

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  none   |

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

地点可以通过 `/em addTreasureChest <treasurechestfilename.yml>` 更容易地设置。

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `locations` | [String List](#string_list) |  none   |

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

设置打开宝箱所需的最低公会等级。

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Integer](#integer) |  none   |

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

设置宝箱是否为副本化（用于副本）。
当宝箱放置在副本中时，所有补货计时器都将禁用。

**请勿手动设置此值**。

| Key       |     Values     | Default |
|-----------|:--------------:|:-------:|
| `instanced` | [Boolean](#boolean) |  `false`   |

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

宝箱被掠夺后，插件将写入此键以跟踪补货时间。

**请勿手动设置此值**。

| Key       |     Values     | Default |
|-----------|:--------------:|:-------:|
| `restockTime` | Unix 时间戳 |  none   |

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
```