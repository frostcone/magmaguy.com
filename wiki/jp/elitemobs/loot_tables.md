# カスタムルートテーブル

汎用的なルート形式。EliteMobsで複数の場所で使用されます。

これは最新の形式であり、使用が推奨される形式ですが、いくつかの古い代替形式も存在します。

`.yml`設定がエラーにならないように、ルートテーブルを記述する際は、設定を追加する前に必ず`uniqueLootList:`で開始してください。

### エリートアイテムのドロップ:

| キー         |            詳細             | 値                  | デフォルト |
|------------|:-------------------------:|--------------------|-------|
| `filename` | 使用するカスタムアイテムのファイル名を設定します。 | [ファイル名](#filename) | none  |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

これにより、1つの *マグマガイの爪楊枝* が100%のドロップ率でドロップします。

</div>

</details>

### 一般的な設定:

| キー                  |                詳細                | 値                   | デフォルト   |
|---------------------|:--------------------------------:|---------------------|---------|
| `chance`            |       ルートがドロップする確率を設定します。        | [Double](#double)   | `1.0`   |
| `amount`            |      このルートエントリのドロップ量を設定します。      | [Integer](#integer) | `1`     |
| `ignorePlayerLevel` | ルートのドロップがプレイヤーのルート制限を無視するようにします。 | [Boolean](#boolean) | `false` |

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

これにより、プレイヤーレベルを無視して、*マグマガイの爪楊枝*が10個、50%のドロップ率でドロップします。

</div>

</details>

### エリートコインのドロップ:

| キー               |         詳細         | 値                   | デフォルト |
|------------------|:------------------:|---------------------|-------|
| `currencyAmount` | ドロップするコインの量を設定します。 | [Integer](#integer) | none  |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

これにより、344個の *エリートコイン* が50%のドロップ率でドロップします。

</div>

</details>

### バニラアイテムのドロップ:

| キー         |          詳細          | 値                     | デフォルト |
|------------|:--------------------:|-----------------------|-------|
| `material` | ドロップするアイテムの素材を設定します。 | [Material](#material) | none  |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```

これにより、5個の *リンゴ* が30%のドロップ率でドロップします。

</div>

</details>

### アリーナ: 開発中 (現在機能していません)

アリーナのルートテーブルを作成する際は、必ず`uniqueLootList:`の代わりに`rawArenaReward:`でルートテーブルを開始してください。

| キー      |                    詳細                    | 値                   | デフォルト |
|---------|:----------------------------------------:|---------------------|-------|
| `wave`  | このルートエントリがドロップするウェーブを設定します。アリーナでのみ使用します。 | [Integer](#integer) | none  |
| `level` |     ルートドロップのレベルを設定します。アリーナでのみ使用します。      | [Integer](#integer) | none  |

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

プレイヤーが最初のウェーブをクリアすると、アリーナから10個の*パン*が50%のドロップ率で、レベル2の*マグマガイの爪楊枝*
が1個100%のドロップ率でドロップします。

</div>

</details>

### インスタンスダンジョン:

| キー             |                            詳細                             | 値                 | デフォルト |
|----------------|:---------------------------------------------------------:|-------------------|-------|
| `difficultyID` | このルートがドロップするインスタンスダンジョンの難易度リストを設定します。インスタンスダンジョンでのみ使用します。 | [String](#string) | none  |

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

これにより、プレイヤーが難易度1または2でボスを倒した場合に、*マグマガイの爪楊枝*が1個、50%のドロップ率でドロップします。

</div>

</details>
