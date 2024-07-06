```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムlootテーブル

ユニバーサル loot 形式。EliteMobs では、さまざまな場所で利用されます。

これは最新の形式であり、使用するように推奨されている形式ですが、古い形式がいくつか存在しています。

`.yml` 設定にエラーが発生しないように、必ず `uniqueLootList:` を loot テーブルの先頭に設定してください。

### エリートアイテムのドロップ:

| キー | 詳細 | 値                | デフォルト |
| --- | :-: |-----------------------| --- |
| `filename` | 使用するカスタムアイテムのファイル名を設定します。 | [Filename](#filename) | none |

<details> 

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

これにより、モブは、100% の確率で、*MagmaGuy's Toothpick* を 1 つドロップします。

</div>

</details>

### 一般的な設定:

| キー | 詳細 | 値              | デフォルト |
| --- | :-: |---------------------| --- |
| `chance` | loot がドロップする確率を設定します。 | [Double](#double)   | `1.0` |
| `amount` | ドロップする loot エントリの数を設定します。 | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | プレイヤーの loot リミッターを無視して loot をドロップします。 | [Boolean](#boolean) | `false` |

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

これにより、モブは 50% の確率で、プレイヤーレベルを無視して、*MagmaGuy's Toothpick* を 10 個ドロップします。

</div>

</details>

### Elite Coins のドロップ:

| キー | 詳細 | 値              | デフォルト |
| --- | :-: |---------------------| --- |
| `currencyAmount` | ドロップされるコインの数を設定します。 | [Integer](#integer) | none |

<details> 

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
これにより、モブは 50% の確率で、344 個の *Elite Coins* をドロップします。

</div>

</details>

### vanilla アイテムのドロップ:

| キー | 詳細 | 値                | デフォルト |
| --- | :-: |-----------------------| --- |
| `material` | ドロップされるアイテムの素材を設定します。 | [Material](#material) | none |

<details> 

<summary align="center"><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
これにより、モブは 30% の確率で、*リンゴ* を 5 個ドロップします。

</div>

</details>

### アリーナ: 進行中（現在動作していません）
アリーナの loot テーブルを作成する場合は、`uniqueLootList:` ではなく、`rawArenaReward:` で loot テーブルを開始してください。

| キー | 詳細 | 値              | デフォルト |
| --- | :-: |---------------------| --- |
| `wave` | この loot エントリがドロップされるウェーブを設定します。アリーナでのみ使用されます。 | [Integer](#integer) | none |
| `level` | loot ドロップのレベルを設定します。アリーナでのみ使用されます。 | [Integer](#integer) | none |

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
プレイヤーが最初のウェーブをクリアすると、アリーナは 50% の確率で *パン* を 10 個、そして 100% の確率でレベル 2 の *MagmaGuy's Toothpick* を 1 つドロップします。

</div>

</details>

### インスタンスダンジョン:

| キー | 詳細 | 値            | デフォルト |
| --- | :-: |-------------------| --- |
| `difficultyID` | この loot がドロップされるインスタンスダンジョンの難易度リストを設定します。インスタンスダンジョンでのみ使用されます。 | [String](#string) | none |

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
これにより、プレイヤーが難易度 1 または 2 でボスを倒した場合、モブは 50% の確率で *MagmaGuy's Toothpick* を 1 個ドロップします。

</div>

</details>

```

