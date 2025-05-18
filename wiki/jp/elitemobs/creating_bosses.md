はい、承知いたしました。入力されたテキストをMarkdown形式を維持したまま日本語に翻訳します。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムボスの作成

# 始める前に

## ボスファイルはどこに置くか？

ボスファイルは設定フォルダ `~/plugins/EliteMobs/custombosses` に置かれます。

`~/plugins/EliteMobs/custombosses/mybosses` のようなサブフォルダを作成することも可能です。これは整理された状態を保つために推奨されます。

1つのファイルが1体のボスを定義しますが、同じボスファイルを複数回スポーンさせたり、同じボスファイルに対して複数のスポーン位置を設定したりすることも可能です。

[ウェブアプリ](https://magmaguy.com/webapp/webapp.html) を使用すると、カスタムボスなどを素早く簡単に作成できます。

## 最小限の設定

**カスタムボスの最小限の設定ファイルは以下の通りです:**
```yml
```

これは単なる空のファイルであることに注意してください。それでも、これらはデフォルトであるため、カスタム名を持つゾンビカスタムボスがスポーンします。**このページの全てはオプションです！**

## ボスの例

<div align="center">

ボスファイルがどのようなものか、例を見てみましょう。

<details>
<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eTest boss'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: A test boss has been spawned!
deathMessage: A test boss has been slain by $players!
escapeMessage: A test boss entity has escaped!
locationMessage: 'Test entity: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "I've hit you!"
onDamagedMessages:
- "I've been hit!"
```

</div>

</details>

</div>

## 基本設定

<div align="center">

### isEnabled

ボスが有効かどうかを設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

ボスのエンティティタイプを設定します。

| キー |                                                                                   値                                                                                    | デフォルト |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [ここから選択](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。 <br> 値はフォルダ `~plugins/EliteMobs/mobproperties` 内にも存在する必要があります。 | `ZOMBIE`|

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

ボスの名前を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `name` | [文字列](#string)、[カラーコード](#color_codes) および以下のプレースホルダーを受け付けます | "Default Name" |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>

</div>

</details>

ボスのレベルを名前フィールドに含めたい場合、以下のプレースホルダーのいずれかを使用してください。

| プレースホルダー | 説明 | 例 | 出力（レベル10のボスの場合） |
|-|:-:|:-:|-|
| `$level` | レベルに置き換えられます | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | レベルに置き換えられます、通常モブ用 | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | レベルに置き換えられます、ミニボス用 | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | レベルに置き換えられます、ボス用 | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | レベルに置き換えられます、援軍用 | `"$reinforcementLevel Cool boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | レベルに置き換えられます、イベントボス用 | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

ボスのレベルを設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `level` | 正の[整数](#integer)または `dynamic` | `dynamic` |

`dynamic` はイベントに使用され、ボスがスポーンした時点の近くのプレイヤーのレベルに合わせて調整されます。
リージョンボスには推奨されません。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### scale

ボスのスケール（サイズ）を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `scale` | [倍率](#multiplier) | `1.0` |

スケールを設定する際、`1.0` はデフォルトサイズを表します。エンティティを大きくするには、値を増やします（例: `1.2`）。エンティティを小さくするには、値を減らします（例: `0.8`）。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

ボスのタイプを設定します。これはボスの体力バーやその他の機能を表示するために使用されます。

| キー | 値 | デフォルト |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`、`BOSS`、`EVENT` は、プレイヤーがこれらのボスタイプと戦っているときにプラグインが体力バーを表示するようにします。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

ボスの体力を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `healthMultiplier` | [倍率](#multiplier) | `1.0` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

ボスのダメージ倍率を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `damageMultiplier` | [倍率](#multiplier) | `1.0` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

ボスがモブのベビーバリアントを使用するかどうかを設定します。ベビーバリアントを持つモブにのみ適用可能です。
ボスを[偽装]($language$/elitemobs/libsdisguises.md)したいが、偽装中もベビーのままにしたい場合（偽装エンティティもベビーバリアントをサポートしていることを確認してください）、この設定を使用できます:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| キー | 値 | デフォルト |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>

***

### helmet/chestplate/leggings/boots/mainhand/offhand

ボスの防具を設定します。全てのMinecraftモデルが防具を表示できるわけではありません。ボスの防具は完全に見た目だけであり、ゲームプレイには影響しません。

| キー |                                    値                                     | デフォルト |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [マテリアル](#material)、[UUID](https://minecraftuuid.com/)           | なし |
| `chestplate` | [マテリアル](#material) | なし |
| `leggings` | [マテリアル](#material) | なし |
| `boots` | [マテリアル](#material) | なし |
| `mainHand` | [マテリアル](#material) | なし |
| `offHand` | [マテリアル](#material) | なし |

**注:** このフィールドでは、アイテムのカスタムモデルも設定できます。カスタムモデルIDを設定するには、この形式に従ってマテリアルタイプの後にIDを追加します: `ITEM_MATERIAL:ID`。例: `DIAMOND_SWORD:1` は、ボスにテクスチャパック内のカスタムモデル#1のダイヤモンドソードを装備させます。

**注2:** このフィールドでは、`ITEM_MATERIAL:CODE` の形式でカスタムレザーカラーも設定できます。ここでコードは色の16進数表現です。例: `LEATHER_LEGGINGS:ffa500` はオレンジ色のレギンスを作成します。16進数コードを使用できますが、`#` を削除してください。16進数コードは[こちら](https://www.w3schools.com/colors/colors_hexadecimal.asp)から取得できます。

**注3:** ヘルメットフィールドでは、モブのヘルメットをプレイヤーの頭に設定することもできます。使用したいプレイヤーの頭のUUIDを取得し、ヘルメットフィールドに入力するだけです。*これが機能するにはプレイヤーがオンラインである必要があります。そうでない場合、頭は一般的なMinecraftの頭にデフォルト設定されます。* プレイヤーのUUIDは[こちら](https://minecraftuuid.com/)から取得できます。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

ボスが持つパワーを設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `powers` | 以下のリストを参照 | なし |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*注: [このページ]($language$/elitemobs/premade_powers.md)で、使用できるプリメイドパワーのリストを確認できます。*

***

### 中級設定 - 援軍のスポーン

援軍も以下の設定を使用してパワーカテゴリに含まれます:

<details>

<summary><b>援軍設定</b></summary>

| キー | 説明 |                                                                                                             値                                                                                                             | デフォルト |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 援軍スポーンをトリガーするもの。必須。 |                                                                                                    以下のリストを参照                                                                                                     | なし |
| `filename` | 援軍としてスポーンさせるボスのファイル名。必須。 |                                                                                                       [文字列](#string)                                                                                                        | なし |
| `chance` | 援軍がスポーンする確率。オプション。 |                                                                                                       [倍率](#double)                                                                                                        | `1.0` |
| `amount` | スポーンさせる援軍の数を設定します。オプション。 |                                                                                                      [整数](#integer)                                                                                                       | `1` |
| `inheritAggro` | 援軍がボスからアグロを引き継ぐようにします。オプション。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | 援軍がボスから半径30ブロック以内にスポーンするようにします。オプション。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 援軍がボスのレベルを引き継ぐようにします。オプション |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | [カスタムスポーンシステム]($language$/elitemobs/creating_spawns.md)を使用して援軍がスポーンするようにします。`summonType: GLOBAL` のみで使用されます。 |
| `location` | スポーン位置。オプション。 | `world_name,x,y,z` またはボスからの相対位置を示す `x,y,z`。オフセットはリージョンボスのスポーン位置からの相対です。`same_as_boss` を使用して、援軍をボスと同じワールドにスポーンさせることもできます。 | なし |
| `lightningRod` | `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` の特殊設定。エンドクリスタルが周囲に雷を発生させるようにします。オプション。 |                                                                                                        `true` / `false`                                                                                                        | なし |

</details>

サモンタイプは援軍がスポーンする条件を設定します。以下は有効なサモンタイプのリストです:

<details>

<summary><b>サモンタイプ</b></summary>

| 値 |                                                                         説明                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          ボスが最初にダメージを受けたときに一度だけ援軍をスポーンさせます。                                           |
| `ON_HIT`  |                                                              ヒット時に援軍をスポーンさせます。                                                              |
| `ON_COMBAT_ENTER` |                                                   ボスが戦闘に入ったときに援軍をスポーンさせます。                                                    |
| `GLOBAL` | オンラインのプレイヤーごとに援軍をスポーンさせます。`customSpawn` キーに有効な[カスタムスポーン]($language$/elitemobs/creating_spawns.md)が設定されている必要があります。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 戦闘開始時にエンドクリスタル援軍を配置します。カスタムドラゴン戦でのみ使用されます。                                  |

</details>

Elite Scripts を通じて援軍をスポーンさせることも可能であることに注意してください[こちら]($language$/elitemobs/creating_powers.md)。そのため、援軍をスポーンさせるよりカスタマイズ可能な方法があります。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### 上級設定 - 独自のパワーを作成する

ボスファイル自体に、またはpowersフォルダ内の新しい設定ファイルとして、独自のパワーを作成することが可能です。詳細については[こちら]($language$/elitemobs/creating_powers.md)で確認できます。

### インスタンスダンジョンの難易度に基づいたパワーの制限

[インスタンスダンジョン]($language$/elitemobs/dungeons.md&section=instanced-dungeons)は難易度設定を持つことができ、特定のパワーが特定の難易度でのみ有効になるように設定することが可能です。

<details>

<summary><b>パワー制限オプション</b></summary>

<div align="left">

| キー | 説明 | 値 | デフォルト |
|-|:-:|:-:|-|
| `filename` | パワーのファイル名。 | [文字列](#string) | なし |
| `difficultyID` | 難易度名、ダンジョンパッケージ内の難易度名と一致。 | [文字列](#string) | なし |

</div>

</details>

これはインスタンスダンジョンにのみ適用されます。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

ボスがスポーンしたときに送信するメッセージを設定します。[announcementPriority](#announcementPriority) の設定が必要です。

| キー | 値 | デフォルト |
|-|:-:|-|
| `spawnMessage` | [文字列](#string)と[カラーコード](#color_codes) | なし |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: I rise once more!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

ボスが死亡したときに送信するメッセージのリストを設定します。[announcementPriority](#announcementPriority) の設定が必要です。

| キー | 値 | デフォルト |
|-|:-:|-|
| `deathMessages` | [文字列](#string)、[カラーコード](#color_codes) および以下のプレースホルダー | なし |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4The Test Boss has been killed!'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage damage!'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage damage!'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage damage!'
- '&4Slayers: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

死亡メッセージは以下のプレースホルダーを使用します:

<details>

<summary><b>プレースホルダー</b></summary>

| 値 | 説明 |
|-|:-:|
| `$damager1name` | トップダメージを与えたプレイヤーの名前 |
| `$damager2name` | 2番目にダメージを与えたプレイヤーの名前 |
| `$damager3name` | 3番目にダメージを与えたプレイヤーの名前 |
| `$damager1damage` | トップダメージを与えたプレイヤーのダメージ量 |
| `$damager2damage` | 2番目にダメージを与えたプレイヤーのダメージ量 |
| `$damager3damage` | 3番目にダメージを与えたプレイヤーのダメージ量 |
| `$players` | 全てのダメージを与えたプレイヤーのリストを表示します |

</details>

### onKillMessage

ボスがプレイヤーを倒したときに送信するメッセージを設定します。[announcementPriority](#announcementPriority) の設定が必要です。

| キー | 値 | デフォルト |
|-|:-:|-|
| `onKillMessage` | [文字列](#string)と[カラーコード](#color_codes) | なし |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: I win, you lose!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

スライムボスのサイズを設定しますが、スライムとマグマキューブにのみ機能します。

</div>

| キー | 値 | デフォルト |
|-|:-:|-|
| `slimeSize` | [整数](#integer) | `4` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

ボスが中立としてスポーンするかどうかを設定します。これはオオカミやアイアンゴーレムなど、中立になりうるエンティティタイプにのみ適用されます。

</div>

| キー | 値 | デフォルト |
|-|:-:|-|
| `neutral` | [真偽値](#boolean) | `false` |

<details>Please specify the target language for the translation.Please specify the target language for the translation.