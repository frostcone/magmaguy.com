# 自定义掉落表

通用的掉落格式。被 EliteMobs 在很多不同位置使用。

请注意，这是最新的格式，推荐使用，但也存在一些较旧的备选格式。

请在添加任何设置之前确保以 `uniqueLootList:` 开始你的掉落表，否则 .yml 配置会出错。

### 掉落精英物品：

| 键 | 详情 | 值                | 默认值 |
| --- | :-: |-----------------------| --- |
| `filename` | 设置要使用的自定义物品的文件名。 | [文件名](#filename) | 无 |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

这将使怪物以 100% 的几率掉落 1 个 *MagmaGuy 的 Toothpick*。

</div>

</details>

### 通用设置：

| 键 | 详情 | 值              | 默认值 |
| --- | :-: |---------------------| --- |
| `chance` | 设置掉落的几率。 | [双精度](#double)   | `1.0` |
| `amount` | 设置此掉落条目要掉落的数量 | [整数](#integer) | `1` |
| `ignorePlayerLevel` | 使掉落忽略玩家的掉落限制器 | [布尔](#boolean) | `false` |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

这将使怪物以 50% 的几率掉落 10 个 *MagmaGuy 的 Toothpick*，同时忽略玩家等级。

</div>

</details>

### 掉落精英硬币：

| 键 | 详情 | 值              | 默认值 |
| --- | :-: |---------------------| --- |
| `currencyAmount` | 设置将要掉落的硬币数量。 | [整数](#integer) | 无 |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
这将使怪物以 50% 的掉落几率掉落 344 枚 *精英硬币*。

</div>

</details>

### 掉落原生物品：

| 键 | 详情 | 值                | 默认值 |
| --- | :-: |-----------------------| --- |
| `material` | 设置掉落物品的材料。 | [材料](#material) | 无 |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
这会使怪物以 30% 的掉落几率掉落 5 枚 *苹果*。

</div>

</details>

### 竞技场：工作进行中 (目前不工作)
当制作竞技场掉落表时，请确保开始你的掉落表时使用 `rawArenaReward:` 而不是 `uniqueLootList:`。

| 键 | 详情 | 值              | 默认值 |
| --- | :-: |---------------------| --- |
| `wave` | 设置此掉落条目将在哪个波次掉落。仅限于竞技场使用。 | [整数](#integer) | 无 |
| `level` | 设置掉落的等级。仅限于竞技场使用。 | [整数](#integer) | 无 |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```
当玩家们打败第一波后，这将使竞技场以 50% 的掉落率掉落 10 *面包* 和 1 *等级 2 的 MagmaGuy's Toothpick*。

</div>

</details>

### 副本地下城：

| 键 | 详情 | 值            | 默认值 |
| --- | :-: |-------------------| --- |
| `difficultyID` | 设置此掉落将为哪些副本挑战难度掉落。仅限于副本地下城使用。 | [字符串](#string) | 无 |

<details> 

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
这将使怪物在玩家们在难度 1 或 2 上打败 Boss 时以 50% 的掉落率掉落 1 *MagmaGuy's Toothpick*。

</div>

</details>
