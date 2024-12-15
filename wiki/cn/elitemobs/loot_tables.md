[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 自定义战利品表

通用战利品格式。EliteMobs 在多个不同位置使用。

请注意，这是最新的格式，也是建议使用的格式，但存在一些替代的较旧格式。

在添加任何设置之前，请务必以 `uniqueLootList:` 开头您的战利品表，否则 .yml 配置将出错。

### 掉落精英物品：

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |-----------------------| --- |
| `filename` | 设置要使用的自定义物品的文件名。 | [文件名](#filename) | 无 |

<details>

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

这将使生物掉落 1 个 *MagmaGuy's Toothpick*，掉落几率为 100%。

</div>

</details>

### 常规设置：

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |---------------------| --- |
| `chance` | 设置战利品掉落的几率。 | [双精度浮点数](#double)   | `1.0` |
| `amount` | 设置要掉落的此战利品条目的数量 | [整数](#integer) | `1` |
| `ignorePlayerLevel` | 使战利品掉落忽略玩家战利品限制器 | [布尔值](#boolean) | `false` |

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

这将使生物掉落 10 个 *MagmaGuy's Toothpick*，掉落几率为 50%，同时忽略玩家等级。

</div>

</details>

### 掉落精英币：

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |---------------------| --- |
| `currencyAmount` | 设置将掉落的硬币数量。 | [整数](#integer) | 无 |

<details>

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
这将使生物掉落 344 个 *精英币*，掉落几率为 50%。

</div>

</details>

### 掉落原版物品：

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |-----------------------| --- |
| `material` | 设置掉落物品的材质。 | [材质](#material) | 无 |

<details>

<summary align="center"><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
这将使生物掉落 5 个 *苹果*，掉落几率为 30%。

</div>

</details>

### 竞技场：正在开发中（目前无法正常工作）
在制作竞技场战利品表时，请确保以 `rawArenaReward:` 而不是 `uniqueLootList:` 开头您的战利品表。

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |---------------------| --- |
| `wave` | 设置此战利品条目掉落的波次。仅用于竞技场。 | [整数](#integer) | 无 |
| `level` | 设置战利品掉落的等级。仅用于竞技场。 | [整数](#integer) | 无 |

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
当玩家击败第一波时，这将使竞技场掉落 10 个 *面包*，掉落几率为 50%，以及 1 个等级为 2 的 *MagmaGuy's Toothpick*，掉落几率为 100%。

</div>

</details>

### 实例化的地牢：

| 键 | 详细信息 | 值 | 默认值 |
| --- | :-: |-------------------| --- |
| `difficultyID` | 设置此战利品掉落的实例化地牢难度列表。仅用于实例化的地牢。 | [字符串](#string) | 无 |

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
如果玩家在难度 1 或 2 上击败了首领，这将使首领掉落 1 个 *MagmaGuy's Toothpick*，掉落几率为 50%。

</div>

</details>
