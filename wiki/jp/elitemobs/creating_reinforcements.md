```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタム援軍の作成

戦闘中にボスを強化するためにエリートを召喚することに興味がある場合は、このガイドでは詳細を説明します。

## カスタムボスを作成する手順:

1. カスタム援軍を召喚するカスタムボスを作成します。
2. 援軍用のカスタムボスを作成します。カスタムボスは vanilla モブよりも強くすることも、弱くすることもできます。
3. 設定ファイルに正しい援軍行を追加します。

## 援軍行の作成

次の形式のカスタムボスがあるとしましょう。

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

このボスに援軍を追加したいとします。このような援軍の例を次に示します。

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

有効にするには、これを powers リストに追加します。

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

これで、援軍がボスエンティティに追加されました。しかし、ご覧のとおり、ここでカスタマイズできるオプションがいくつかあります。それらを説明しましょう。

## すべてのカスタム援軍のオプション

*ヒント: EliteScript を使用して援軍を召喚することもできます。詳細はこちらをご覧ください。[こちら]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

これは必須フィールドです。援軍がいつスポーンするかを設定します。

| キー    |   値    | デフォルト  |
|--------|:-----------:|:--------:|
| `summonType` | Special [1] | `ON_HIT` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Special [1]

| キー | 説明                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | ボスが最初に攻撃されたときに、援軍を 1 回だけスポーンさせます（発生する確率に依存する可能性があります）。 |
| `ON_HIT`  | ボスが攻撃されたときにいつでも援軍をスポーンさせます（発生する確率に依存する可能性があります）。             |
| `ON_COMBAT_ENTER`    | ボスが戦闘状態になったときに援軍をスポーンさせます（1）。                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    | 特殊: これは、ボスが戦闘状態になったときにドラゴン戦でエンドクリスタルを配置するためのものであり、ドラゴン戦でのみ使用されます（1）。                                                                                                 |
| `GLOBAL`    |  ボスと同じワールドにいるすべてのプレイヤーに対して、援軍をスポーンさせます。援軍は、ボスからどれだけ離れていても、プレイヤーの近くにスポーンします。これは、`customSpawn` フィールドを設定する必要があります！                                                                                                 |

_(1) ボスは、プレイヤーから攻撃を受けた場合、または範囲内にプレイヤーを検出した場合に、戦闘状態になります。_

***

### filename

これは、スポーンさせる援軍を設定するため、必須フィールドです。`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 設定を使用する場合を除き、このフィールドは必須です。これは、エンドクリスタルはエリートではないためです。

| キー    |        値         | デフォルト |
|--------|:---------------------:|:-------:|
| `filename` | [Filename](#filename) |  none   |

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

**最小限の有効性**

`summonType: SUMMON_TYPE` と `filename: filename.yml` は、それ自体でカスタム援軍を作成するのに十分です。次の例では、これを実証しています。

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*ただし、もっと複雑なものが欲しい、または必要な場合は、下記のオプションを確認して、さらに詳しく調べてください。*

</div>

</details>

</div>

<div align="center">

***

### chance

これは、`summonType` の `ONCE` と `ON_HIT` オプションを補完するために使用されるオプションの構成フィールドです。これは、ボスが攻撃を受けたときにカスタム援軍がスポーンする確率を表しています。

| キー    |        値         | デフォルト |
|--------|:---------------------:|:-------:|
| `chance` | [Double](#double) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
chance: 0.5
```
*これは、カスタム援軍がスポーンする確率が 50% であることを示しています。*

</div>

</details>

***

### location

`location: x,y,z` は、援軍の位置をブロック数だけオフセットするために使用できるオプションの構成フィールドです。このオプションについて知っておくべき重要な概念を次に示します。

**相対位置は相対的です。** つまり、`location: 0,10,0` は、ボスの正確に 10 ブロック上に援軍をスポーンさせ、ワールド座標 0,10,0 にはスポーンさせません。


**リージョンボスでは、相対位置が異なります。** リージョンボスは、常にスポーンポイントを相対位置の原点として使用するため、ボスのスポーンポイントの場所とブロック数を把握していれば、援軍ボスを特定の場所にスポーンさせることができます。Binder of Worlds のダンジョンでは、これが使用されて、ドラゴンのボスがどこにいるかに関係なく、非常に特定のブロック位置にチャレンジタワーボスがスポーンされます。


**ボスのスポーン位置が正しくない場合、ボスはブロックの中にスポーンします。**

| キー    |      値       | デフォルト |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*リージョンではないカスタムボスの場合は、ボスがどこにいても、ボスの正確に 10 ブロック上に援軍がスポーンします。*

*リージョンカスタムボスの場合は、ボスがどこにいても、リージョンボスのスポーンポイントの正確に 10 ブロック上に援軍がスポーンします。*

</div>

</details>

_**重要: これは、特に `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` の場合、必須フィールドです！**_

***

### lightningRod

これは、`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` にのみ使用される特殊な設定です。これにより、エンドクリスタルが一定時間後に周囲の床に雷を落とすことができます。

これは、他のカスタム援軍では使用できません。これらのカスタム援軍では、パワーに頼ってこのような能力を発揮する必要があります。

| キー    |       値        | デフォルト |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Boolean](#boolean) | `false` |

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

これは、カスタム援軍が強化しているボスの脅威レベルを引き継ぐかどうかを設定するオプションの構成フィールドです。

これは、スポーンした援軍に、最もダメージを与えているプレイヤーを攻撃させたい場合に特に役立ちます。

| キー    |       値        | デフォルト |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Boolean](#boolean) | `false` |

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

これは、スポーンする援軍の数を設定するオプションの構成フィールドです。

| キー    |       値        | デフォルト |
|--------|:-------------------:|:-------:|
| `amount` | [Integer](#integer) |   `1`   |

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

これは、カスタム援軍をボスの上に、または特定の相対位置にスポーンさせるのではなく、近くにスポーンさせるかどうかを設定するオプションの構成フィールドです。 

この方法は、地形の変化を正しく考慮し、ボスを壁の中にスポーンさせないようにするはずです。ただし、戦闘エリアが小さすぎる場合、壁の後ろにスポーンしてしまう可能性があります。半径は 30 ブロックほどです。

| キー    |       値        | デフォルト |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Boolean](#boolean) | `false` |

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

これは、カスタム援軍が、強化しているカスタムボスのレベルを引き継ぐかどうかを設定するオプションの構成フィールドです。

| キー    |       値        | デフォルト |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Boolean](#boolean) | `false` |

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

これは、グローバルな援軍にのみ使用される構成フィールドです。カスタムスポーン設定を使用して、援軍がスポーンできる場所を設定します。 

これにより、援軍を地面に、光のある場所に、特定のバイオームなどにスポーンさせることができます。詳細については、[カスタムスポーン]($language$/elitemobs/creating_spawns.md) の wiki ページをご覧ください。

| キー    |        値         | デフォルト |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Filename](#filename) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## 大規模援軍の作成

上記のほとんどのフィールドを使用して、援軍の例を作成しましょう。

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

これは、次の処理を行います。

- カスタム援軍を作成します。
- カスタムボスが戦闘状態になったときに、カスタム援軍がスポーンします (`summonType: ON_COMBAT_ENTER`)
- 召喚されるカスタム援軍は、`test_boss.yml` のものです (`filename: test_boss.yml`)
- カスタム援軍は、カスタムボスの現在の位置から 30 ブロック以内にスポーンします (`spawnNearby: true`)
- カスタム援軍は、強化しているカスタムボスのアグレッシブを引き継ぎ、最もダメージを与えているプレイヤーを攻撃します (`inheritAggro: true`)
- `test_boss.yml` の設定にかかわらず、カスタム援軍は、強化しているカスタムボスと同じレベルになります (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

これは、次の処理を行います。

- カスタム援軍を作成します。
- カスタム援軍は、戦闘開始時に配置されるエンドクリスタルになります (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- エンドクリスタルは、一定時間後に周囲の床に雷を落とします (`lightningRod: true`)

これで、カスタムボスに適用しましょう。

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
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

これで完了です！さらにヒントをいくつかご紹介します。

- フィールドはどのような順番でも設定できますが、常に `summonable` を最初に配置することをお勧めします！
- これは、以前の援軍システムの大きな改善点であり、以前のシステムはリストに載っていません。以前のシステムは、将来的に動作しなくなる可能性があるため、依存しないことをお勧めします。

```

