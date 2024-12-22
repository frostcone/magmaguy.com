# カスタム援軍の作成

戦闘中にエリートを召喚してボスを強化することに興味があるなら、このガイドで詳しく説明します。

## カスタムボス作成の手順：

1. カスタムボスを召喚するメインのカスタムボスを作成します。
2. 援軍用のカスタムボスを作成します。カスタムボスはバニラのモブよりも強くすることもできますが、弱くすることもできます。
3. 設定ファイルに正しい援軍行を追加します。

## 援軍行の作成

次の形式のカスタムボスがあると仮定しましょう。

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界の束縛者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

そして、これに援軍を追加したいとします。以下は、そのような援軍の例です。

```yaml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

そして、それを有効にするには、powersリストに追加します。

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界の束縛者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

これで、援軍がボスエンティティに追加されました。ただし、ご覧のとおり、ここではカスタマイズできるオプションがいくつかあります。それらを見ていきましょう。

## すべてのカスタム援軍オプション

*ヒント:
EliteScriptを使用して援軍を召喚することもできます。詳細については、[こちら]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement)
をご覧ください。*

<div align="center">

### summonType

これは必須フィールドです。援軍をいつスポーンさせるかを設定します。

| キー           |   値    |  デフォルト   |
|--------------|:------:|:--------:|
| `summonType` | 特殊 [1] | `ON_HIT` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### 特殊 [1]

| キー                              | 説明                                                                                                                |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `ONCE`                          | ボスが最初に攻撃されたときに、一度だけ援軍をスポーンさせます（発生する確率に依存できます）。                                                                    |
| `ON_HIT`                        | ボスが攻撃されるたびに援軍をスポーンさせます（発生する確率に依存できます）。                                                                            |
| `ON_COMBAT_ENTER`               | ボスが戦闘状態になったときに援軍をスポーンさせます (1)。                                                                                    |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | 特別：これは、ボスが戦闘状態になったときにドラゴン戦のためにエンドクリスタルを設置するためのものです(1)。                                                            |
| `GLOBAL`                        | ボスと同じワールド内のすべてのプレイヤーに援軍をスポーンさせます。援軍は、ボスからどれだけ離れていても、プレイヤーの近くにスポーンします。これには、`customSpawn`フィールドを機能させるために設定する必要があります！ |

_(1) ボスは、プレイヤーに攻撃されたとき、または範囲内にプレイヤーを検出したときに戦闘状態になります。_

***

### filename

これは必須フィールドであり、どの援軍をスポーンさせるかを設定します。このフィールドを必須にしない唯一の例外は、`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`
設定を使用する場合です。エンドクリスタルはエリートではないためです。

| キー         |         値          | デフォルト |
|------------|:------------------:|:-----:|
| `filename` | [ファイル名](#filename) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**最小限の実行可能性**

`summonType: SUMMON_TYPE`と`filename: filename.yml`だけで、カスタム援軍を作成するのに十分です。次の例がこれを示しています。

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界の束縛者
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*ただし、もっと複雑なものが必要な場合は、以下を読み進めて、これらのオプションで他に何ができるかを確認してください。*

</div>

</details>

</div>

<div align="center">

***

### chance

これは、`summonType` `ONCE`および`ON_HIT`オプションを補完するために作成されたオプションの設定フィールドです。これは、ボスが攻撃されたときにカスタム援軍がスポーンする確率を表します。

| キー       |       値        | デフォルト |
|----------|:--------------:|:-----:|
| `chance` | [ダブル](#double) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
chance: 0.5
```

*カスタム援軍をスポーンさせる確率が50％であることを表します。*

</div>

</details>

***

### location

`location: x,y,z`はオプションの設定フィールドで、管理者が援軍の位置をブロック数でオフセットできます。このオプションについて知っておくべき重要な概念を以下に示します。

**オフセットされた場所は相対的です。** これは、`location: 0,10,0`がボスからちょうど10ブロック上にボスをスポーンし、ワールド座標0,10,0にはスポーンしないことを意味します。

**相対位置は、リージョナルボスでは異なります。**
リージョナルボスは常にスポーンポイントを相対位置の原点として使用します。つまり、ボスのスポーンポイントがわかっていてブロックを数えれば、ドラゴンのボスがどこにいても、非常に特定のブロック位置にチャレンジタワーのボスをスポーンさせることができます。

**距離の測定に失敗すると、ボスはブロックの中にスポーンします。**

| キー         |       値        | デフォルト |
|------------|:--------------:|:-----:|
| `location` | [文字列](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
location: 0,10,0
```

*リージョナルでないカスタムボスの場合、ボスがどこにいても、ボスのちょうど10ブロック上に援軍をスポーンさせます。*

*リージョナルカスタムボスの場合、ボスがどこにいても、リージョナルボスのスポーンポイントのちょうど10ブロック上に援軍をスポーンさせます。*

</div>

</details>

_**重要な注意点：これは特に`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`には必須のフィールドです！**_

***

### lightningRod

これは、`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`でのみ役立つ特別な設定です。これにより、エンドクリスタルが遅延して周囲の床を打ち付ける能力が得られます。

他のカスタム援軍では使用できません。これらの能力にはパワーを使用する必要があるためです。

| キー             |        値         |  デフォルト  |
|----------------|:----------------:|:-------:|
| `lightningRod` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

これは、カスタム援軍がボスの脅威レベルを継承するオプションの設定フィールドです。

これは、スポーンする援軍に最大のダメージを与えている人をターゲットにさせたい場合に特に役立ちます。

| キー             |        値         |  デフォルト  |
|----------------|:----------------:|:-------:|
| `inheritAggro` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

これは、スポーンする援軍の量を設定するオプションの設定フィールドです。

| キー       |       値        | デフォルト |
|----------|:--------------:|:-----:|
| `amount` | [整数](#integer) |  `1`  |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

これは、カスタム援軍をボスの上または特定の相対位置ではなく、近くにスポーンさせるかどうかを設定するオプションの設定フィールドです。

この方法は地形の変動を正しく考慮に入れ、壁の中にボスをスポーンさせることはありませんが、一部の設定では、戦闘エリアが小さすぎると壁の後ろにスポーンする可能性があります。半径は約30ブロックです。

| キー            |        値         |  デフォルト  |
|---------------|:----------------:|:-------:|
| `spawnNearby` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

これは、カスタム援軍が強化するカスタムボスのレベルを継承するかどうかを設定するオプションの設定フィールドです。

| キー             |        値         |  デフォルト  |
|----------------|:----------------:|:-------:|
| `inheritLevel` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

これは、グローバル援軍にのみ使用される設定フィールドです。カスタムスポーン設定を使用して、援軍がスポーンできる場所を設定します。

これは、援軍を地表、光のある場所、特定のバイオームなどにスポーンできるようにするために使用できます。詳細については、[カスタムスポーン]($language$/elitemobs/creating_spawns.md)
に関するウィキページを確認してください。

| キー            |         値          | デフォルト |
|---------------|:------------------:|:-----:|
| `customSpawn` | [ファイル名](#filename) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## 大規模な援軍の構築

前のフィールドのほとんどを使用して、援軍の例を作成してみましょう。

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

これは次のことを行います。

- カスタム援軍を作成します。
- カスタム援軍は、カスタムボスが戦闘状態になるとスポーンします（`summonType: ON_COMBAT_ENTER`）。
- 召喚されるカスタム援軍は、`test_boss.yml`のものです（`filename: test_boss.yml`）。
- カスタム援軍は、カスタムボスの現在の場所から30ブロック以内にスポーンします（`spawnNearby: true`）。
-
カスタム援軍は、強化するカスタムボスのターゲットを継承します。つまり、最大のダメージを与えたプレイヤーを攻撃します（`inheritAggro: true`）。
- `test_boss.yml`の設定に関係なく、カスタム援軍は、強化するカスタムボスと同じレベルになります（`inheritLevel: true`）。

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

これは次のことを行います。

- カスタム援軍を作成します。
-
カスタム援軍は、戦闘が開始されたときに設置されるエンドクリスタルになります（`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`）。
- エンドクリスタルは、遅延して周囲の地面を打ち付けます（`lightningRod: true`）。

これをカスタムボスに適用するには：

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &e世界の束縛者
level: 200
powers:
  - ender_dragon_arrow_bombardment.yml
  - summonType: ON_COMBAT_ENTER
    filename: test_boss.yml
    spawnNearby: true
    inheritAggro: true
    inheritLevel: true
  - summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
    location: -80,10,0
    lightningRod: true
```

これで完了です！以下にさらにいくつかのヒントを示します。

- フィールドは任意の順序で設定できますが、常に最初に`summonable`を設定することをお勧めします。
- これは、古くてリストにない援軍システムの大幅な改善です。将来機能しなくなる可能性があるため、現時点では依存することはお勧めしません。
