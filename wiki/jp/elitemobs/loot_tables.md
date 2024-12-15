# カスタムルートテーブル

ユニバーサルなルート形式。EliteMobsで複数の異なる場所で使用されます。

これは最新の形式であり、使用が推奨される形式ですが、いくつかの代替となる古い形式も存在します。

設定を追加する前に、必ずルートテーブルを`uniqueLootList:`で開始してください。そうしないと、.yml設定でエラーが発生します。

### エリートアイテムのドロップ：

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-----------------------| --- |
| `filename` | 使用するカスタムアイテムのファイル名を設定します。 | [ファイル名](#filename) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

これは、100％のドロップ率で*MagmaGuy's Toothpick*を1つドロップさせます。

</div>

</details>

### 一般的な設定：

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `chance` | ルートがドロップする確率を設定します。 | [Double](#double) | `1.0` |
| `amount` | このルートエントリをドロップする量を設定します。 | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | ルートのドロップをプレイヤーのルート制限を無視するようにします。 | [Boolean](#boolean) | `false` |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

これは、プレイヤーレベルを無視し、50％のドロップ率で*MagmaGuy's Toothpick*を10個ドロップさせます。

</div>

</details>

### エリートコインのドロップ：

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `currencyAmount` | ドロップするコインの量を設定します。 | [Integer](#integer) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

これは、50％のドロップ率で344 *エリートコイン*をドロップさせます。

</div>

</details>

### バニラアイテムのドロップ：

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-----------------------| --- |
| `material` | ドロップするアイテムのマテリアルを設定します。 | [Material](#material) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
これは、30％のドロップ率で5個の*リンゴ*をドロップさせます。

</div>

</details>

### アリーナ：開発中（現在機能していません）
アリーナルートテーブルを作成する場合は、`uniqueLootList:`の代わりに`rawArenaReward:`でルートテーブルを開始するようにしてください。

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `wave` | このルートエントリがドロップするウェーブを設定します。アリーナでのみ使用します。 | [Integer](#integer) | なし |
| `level` | ルートドロップのレベルを設定します。アリーナでのみ使用します。 | [Integer](#integer) | なし |

<details>

<summary align="center"><b>例</b></summary>

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
プレイヤーが最初のウェーブをクリアすると、これは50％のドロップ率で10個の*パン*をドロップさせ、100％のドロップ率でレベル2の*MagmaGuy's Toothpick*を1つドロップさせます。

</div>

</details>

### インスタンスダンジョン：

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-------------------| --- |
| `difficultyID` | このルートがドロップするインスタンスダンジョンの難易度リストを設定します。インスタンスダンジョンでのみ使用します。 | [String](#string) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
これは、プレイヤーが難易度1または2でボスを倒した場合、50％のドロップ率で1つの*MagmaGuy's Toothpick*をドロップさせます。

</div>

</details>
