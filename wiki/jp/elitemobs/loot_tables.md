```markdown
# カスタムルートテーブル

汎用ルート形式。EliteMobsの様々な場所で使用されます。

これは最新の形式であり、使用が推奨されるものですが、いくつかの代替の古い形式も存在することにご注意ください。

設定を追加する前に、ルートテーブルを `uniqueLootList:` で開始してください。そうしないと、.yml設定でエラーが発生します。

### エリートアイテムのドロップ:

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-----------------------| --- |
| `filename` | 使用するカスタムアイテムのファイル名を設定します。 | [Filename](#filename) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

これにより、モブは *MagmaGuy's Toothpick* を1つ、100%のドロップ率でドロップするようになります。

</div>

</details>

### 一般設定:

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `chance` | ルートがドロップする確率を設定します。 | [Double](#double) | `1.0` |
| `amount` | このルートエントリーがドロップする量を設定します。 | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | ルートドロップがプレイヤーのルート制限を無視するようにします。 | [Boolean](#boolean) | `false` |

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

これにより、モブはプレイヤーレベルを無視して、*MagmaGuy's Toothpick* を10個、50%のドロップ率でドロップするようになります。

</div>

</details>

### エリートコインのドロップ:

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `currencyAmount` | ドロップされるコインの量を設定します。 | [Integer](#integer) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
これにより、モブは *Elite Coins* を344枚、50%のドロップ率でドロップするようになります。

</div>

</details>

### バニラアイテムのドロップ:

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-----------------------| --- |
| `material` | ドロップされるアイテムのマテリアルを設定します。 | [Material](#material) | なし |

<details>

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
これにより、モブは *Apples* を5個、30%のドロップ率でドロップするようになります。

</div>

</details>

### アリーナ: 開発中 (現在動作していません)
アリーナルートテーブルを作成する際は、ルートテーブルを `uniqueLootList:` ではなく `rawArenaReward:` で開始するようにしてください。

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |---------------------| --- |
| `wave` | このルートエントリーがドロップするウェーブを設定します。アリーナでのみ使用されます。 | [Integer](#integer) | なし |
| `level` | ルートドロップのレベルを設定します。アリーナでのみ使用されます。 | [Integer](#integer) | なし |

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
プレイヤーが最初のウェーブをクリアすると、アリーナは *Bread* を10個、50%のドロップ率でドロップし、レベル2の *MagmaGuy's Toothpick* を1つ、100%のドロップ率でドロップするようになります。

</div>

</details>

### インスタンスダンジョン:

| キー | 詳細 | 値 | デフォルト |
| --- | :-: |-------------------| --- |
| `difficultyID` | このルートがドロップするインスタンスダンジョンの難易度リストを設定します。インスタンスダンジョンでのみ使用されます。 | [String](#string) | なし |

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
プレイヤーが難易度1または2でボスを倒した場合、モブは *MagmaGuy's Toothpick* を1つ、50%のドロップ率でドロップするようになります。

</div>

</details>
```