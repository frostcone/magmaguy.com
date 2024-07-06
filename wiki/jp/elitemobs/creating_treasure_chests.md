```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

宝箱は、管理者がlootをドロップするか、ミミック（敵対的な）ボスをスポーンさせることができるチェストを作成できるようにする機能です。

<div align="center">

<div align="left">

## 値

</div>

### isEnabled

宝箱を有効にするかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### chestType

チェスト素材の種類を設定します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*これは、`CHEST` や `BARREL` などの有効なチェスト素材である必要があります。*

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

チェストの向きを設定します。

| キー       |   値    | デフォルト |
|-----------|:-----------:|:-------:|
| `facing` | Special [1] | `CHEST` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
facing: CHEST
```
*これは、`CHEST` や `BARREL` などの有効なチェスト素材である必要があります。*

</div>

</details>

**Special [1]**

<details> 

<summary><b>テーブルを展開</b></summary>

| 向き  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

チェストが、1 人のプレイヤー用か、複数のプレイヤー用かを設定します。

`SINGLE` チェストは、開くと消え、補充されると再び表示されます。`GROUP` チェストは、周囲に残り、個々のプレイヤーにクールダウン中であることを知らせます。

| キー       |       値       | デフォルト |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

宝箱が開けられたときにドロップするlootをリストアップします。

| キー       |                        値                        | デフォルト |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [EM Loot Table]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>例</b></summary>

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

lootをドロップする代わりに、敵対的なボスをスポーンさせる確率を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

スポーンできる敵対的なボスのリストを指定します。このリストから、スポーンするボスがランダムに 1 体選択されます。

このリストでは、重み付けシステムもサポートされているため、一部のボスが他のボスよりも頻繁に選択されるようにすることができます。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*ボスに重みを割り当てる場合は、リストは次の形式にする必要があります。*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*この設定では、`my_cool_mimic_boss.yml` は `weak_mimic_boss.yml` よりもスポーンされる確率が高くなります。*

</div>

</details>

***

### restockTimer

lootを再補充するまでの時間（分）を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

チェストが実行するパーティクルエフェクトを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  none   |

<details> 

<summary><b>例</b></summary>

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

宝箱がスポーンする位置を設定します。

場所は、`/em addTreasureChest <treasurechestfilename.yml>` を通じてより簡単に設定できます。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `locations` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

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

チェストを開くために必要なギルドランクの最小値を設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Integer](#integer) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>


***

### instanced

チェストをインスタンス化するかどうかを設定します（インスタンス化されたダンジョンで使用するための設定）。
ダンジョンにチェストを配置すると、すべての補充タイマーが無効になります。

**この値を** **手動で設定しないでください**。

| キー       |     値     | デフォルト |
|-----------|:--------------:|:-------:|
| `instanced` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

***

### restockTime

チェストがlootされた後、プラグインはこのキーを書き込んで補充時間を追跡します。

**この値を** **手動で設定しないでください**。

| キー       |     値     | デフォルト |
|-----------|:--------------:|:-------:|
| `restockTime` | Unix Timestamp |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>宝箱の設定例</b></summary>

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