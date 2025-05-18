日本語に翻訳します。Markdownの書式は維持します。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

トレジャーチェストは、管理者がルートをドロップするか、ミミック（敵対的な）ボスをスポーンさせることができるチェストを作成するための機能です。

<div align="center">

<div align="left">

## 値

</div>

### isEnabled

トレジャーチェストが有効かどうかを設定します。

| キー        |       値         | デフォルト |
|------------|:----------------:|:--------:|
| `isEnabled` | [Boolean](#boolean) |  `true`  |

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

チェストの素材タイプを設定します。

| キー         |        値          | デフォルト |
|-------------|:------------------:|:--------:|
| `chestType` | [Material](#material) |  `CHEST` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*これは `CHEST` や `BARREL` のような有効なチェスト素材である必要があります。*

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

チェストの向きを設定します。

| キー      |   値    | デフォルト |
|----------|:-------:|:--------:|
| `facing` | 特殊 [1] |  `CHEST` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
facing: CHEST
```
*これは `CHEST` や `BARREL` のような有効なチェスト素材である必要があります。*

</div>

</details>

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

| 向き    |
|--------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |

</details>

***

### dropStyle

チェストが1人のプレイヤー向けにドロップされるか、複数のプレイヤー向けにドロップされるかを設定します。

`SINGLE` チェストは開けられると消え、再補充されると再出現します。`GROUP` チェストはそのまま残り、個々のプレイヤーにクールダウン中であることを知らせます。

| キー         |       値        | デフォルト |
|-------------|:---------------:|:--------:|
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

トレジャーチェストが開かれたときにドロップするルートをリストします。

| キー        |                        値                         | デフォルト |
|------------|:-------------------------------------------------:|:--------:|
| `lootList` | [EM Loot Table]($language$/elitemobs/loot_tables.md) |   なし   |

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

ルートをドロップする代わりに、敵対的なボスをスポーンさせる確率を設定します。

| キー          |      値       | デフォルト |
|--------------|:-------------:|:--------:|
| `mimicChance` | [Double](#double) |    `0`   |

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

スポーン可能な敵対的なボスのリストを指定します。このリストからランダムに1体のボスがスポーンのために選択されます。

このリストは、特定のボスが他のボスよりも頻繁に選ばれるようにするためのウェイトシステムもサポートしています。

| キー                   |        値         | デフォルト |
|-----------------------|:-----------------:|:--------:|
| `mimicCustomBossesList` | [String List](#string_list) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*ボスにウェイトを割り当てたい場合は、リストを以下の形式で記述する必要があります。*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*この設定では、`my_cool_mimic_boss.yml` は `weak_mimic_boss.yml` よりもスポーンに選ばれる可能性が高くなります。*

</div>

</details>

***

### restockTimer

チェストがルートで再補充されるまでの時間を分単位で設定します。

| キー           |      値       | デフォルト |
|---------------|:-------------:|:--------:|
| `restockTimer` | [Integer](#integer) |    `0`   |

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

チェストが行うパーティクルエフェクトを設定します。

| キー       |      値       | デフォルト |
|-----------|:-------------:|:--------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |   なし   |

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

トレジャーチェストがスポーンする場所を設定します。

場所は `/em addTreasureChest <treasurechestfilename.yml>` を通じてより簡単に設定できます。

| キー         |           値            | デフォルト |
|-------------|:-----------------------:|:--------:|
| `locations` | [String List](#string_list) |   なし   |

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

チェストを開けるために必要な最低ギルドランクを設定します。

| キー        |           値            | デフォルト |
|------------|:-----------------------:|:--------:|
| `chestTier` | [Integer](#integer) |   なし   |

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

チェストがインスタンス化されるべきか（インスタンスダンジョンでの使用のため）を設定します。
チェストがダンジョンに配置されている場合、すべての再補充タイマーは無効になります。

**この値を手動で設定しないでください**。

| キー         |     値     | デフォルト |
|-------------|:----------:|:--------:|
| `instanced` | [Boolean](#boolean) |  `false` |

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

チェストがルートされた後、プラグインはこのキーを書き込み、再補充時間を追跡します。

**この値を手動で設定しないでください**。

| キー          |      値       | デフォルト |
|--------------|:-------------:|:--------:|
| `restockTime` | Unix Timestamp |   なし   |

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

<summary align="center"><b>トレジャーチェスト設定例</b></summary>

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