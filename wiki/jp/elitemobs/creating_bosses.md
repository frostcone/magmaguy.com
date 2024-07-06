[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムボスの作成

# 開始する前に

## ボスファイルはどこにありますか？

ボスファイルは、構成フォルダ `~/plugins/EliteMobs/custombosses` に配置されます。

`~/plugins/EliteMobs/custombosses/mybosses` などのサブフォルダを作成することもできます。整理整頓するために、この方法をお勧めします。

1つのファイルで1つのボスを定義しますが、同じボスを複数回出現させたり、同じボスファイルに複数の出現場所を設定したりすることもできます。

[webapp](https://magmaguy.com/webapp/webapp.html) を使用すると、カスタムボスなどをすばやく簡単に作成できます。

## 最小限の構成

**カスタムボスの最小限の構成ファイルは次のとおりです。**
```yml
```

これは空のファイルです。デフォルトでは、カスタムネームを持つゾンビのカスタムボスがスポーンします。**このページの内容はすべてオプションです！**

## ボスの例

<div align="center">

ボスファイルの例を見てみましょう。

<details> 
<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eテストボス'
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
spawnMessage: テストボスが出現しました！
deathMessage: テストボスは$playersに倒されました！
escapeMessage: テストボスエンティティは逃亡しました！
locationMessage: 'テストエンティティ: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "攻撃が当たった！"
onDamagedMessages:
- "ダメージを受けた！"
```

</div>

</details>

</div>


## 基本設定

<div align="center">

### isEnabled

ボスを有効にするかどうかを設定します。

| Key | Values | Default |
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

| Key |                                                                                   Values                                                                                    | Default |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [ここから選択してください](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。 <br> 値は、フォルダ `~plugins/EliteMobs/mobproperties` にも存在する必要があります。 | `ZOMBIE`|

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

| Key | Values | Default |
|-|:-:|-|
| `name` | [String](#string)、[カラーコード](#color_codes) と以下にリストされているプレースホルダーを許可します。 | "Default Name" |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cクールなボス！"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

ボスレベルを名前に含める場合は、次のいずれかのプレースホルダーを使用します。

| プレースホルダー | 説明 | 例 |レベル10のボスの場合の出力 |
|-|:-:|:-:|-|
| `$level` | レベルに置き換えられます | "$level クールなボス" | `10 クールなボス` |
| `$normalLevel` | 通常のモブ用に作られたレベルに置き換えられます | `"$normalLevel クールなボス"` | `[10] クールなボス` |
| `$minibossLevel` | ミニボス用に作られたレベルに置き換えられます | `"$minibossLevel クールなボス"` | `〖10〗 クールなボス` |
| `$bossLevel` | ボス用に作られたレベルに置き換えられます | `"$bossLevel クールなボス"` | `『10』 クールなボス` |
| `$reinforcementLevel` | 増援用に作られたレベルに置き換えられます | `"$reinforcementLevel クールなボス"` | `〔10〕 クールなボス` |
| `$eventBossLevel` | イベントボス用に作られたレベルに置き換えられます | `"$eventBossLevel クールなボス"` | `「10」 クールなボス` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cクールなボス！"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

ボスのレベルを設定します。

| Key | Values | Default |
|-|:-:|-|
| `entityType` | 正の[整数](#integer)または `dynamic` | `dynamic` |

`dynamic` はイベントに使用され、ボスが出現したときの近くのプレイヤーのレベルに調整されます。
リージョナルボスにはお勧めしません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### healthMultiplier

ボスの体力倍率を設定します。

| Key | Values | Default |
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

| Key | Values | Default |
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

ボスがモブのベビーバリアントを使用するかどうかを設定します。ベビーバリアントを持つモブにのみ適用できます。
ボスを[変装]($language$/elitemobs/libsdisguises.md)させたいが、変装中も赤ちゃんであり続けたい場合は（変装エンティティも赤ちゃんバリアントをサポートしていることを確認してください）、この設定を使用できます。
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Key | Values | Default |
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

ボスの防具を設定します。すべてのMinecraftモデルが防具を表示できるわけではありません。ボスの防具は純粋に装飾用であり、ゲームプレイには影響しません。

| Key |                                    Values                                     | Default |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [マテリアル](#material)、[UUID](https://minecraftuuid.com/)           | なし |
| `chestplate` | [マテリアル](#material) | なし |
| `leggings` | [マテリアル](#material) | なし |
| `boots` | [マテリアル](#material) | なし |
| `mainHand` | [マテリアル](#material) | なし |
| `offHand` | [マテリアル](#material) | なし |

**注:** このフィールドでは、アイテムのカスタムモデルを設定することもできます。カスタムモデルIDを設定するには、`ITEM_MATERIAL:ID` の形式に従ってマテリアルタイプの後にIDを追加します。例：`DIAMOND_SWORD:1` は、テクスチャパックのカスタムモデル＃1を使用してダイヤモンドの剣をボスに装着します。

**注2:** このフィールドでは、`ITEM_MATERIAL:CODE` の形式でカスタムレザーカラーを設定することもできます。ここで、コードは色の16進数表現です。例：`LEATHER_LEGGINGS:ffa500` はオレンジ色のレギンスを作成します。16進コードを使用できます。16進コードから `#` を削除するだけです。16進コードは[こちら](https://www.w3schools.com/colors/colors_hexadecimal.asp)から取得できます。

**注3:** ヘルメットフィールドでは、モブのヘルメットをプレイヤーの頭にすることもできます。使用するプレイヤーの頭のUUIDを取得し、ヘルメットフィールドに入力するだけです。*これが機能するには、プレイヤーがオンラインになっている必要があります。そうしないと、頭は一般的なMinecraftの頭になります。* プレイヤーのUUIDは[こちら](https://minecraftuuid.com/)から取得できます。

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

| Key | Values | Default |
|-|:-:|-|
| `powers` | 以下のリストを参照してください | なし |

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

*注: 使用できる既製のパワーのリストを見たい場合は、[このページ]($language$/elitemobs/premade_powers.md)をご覧ください。*

***

### 中級構成-増援のスポーン

増援もパワーカテゴリに分類され、次の設定が使用されます。

<details> 

<summary><b>増援設定</b></summary>

| Key | 説明 |                                                                                                             Values                                                                                                             | Default |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 増援のスポーンのトリガーとなるもの。必須。 |                                                                                                    以下のリストを参照してください                                                                                                     | なし |
| `filename` | 増援としてスポーンするボスのファイル名。必須。 |                                                                                                       [String](#string)                                                                                                        | なし |
| `chance` | 増援がスポーンする確率。オプション。 |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | スポーンする増援の数を設定します。オプション。 |                                                                                                      [整数](#integer)                                                                                                       | `1` |
| `inheritAggro` | 増援がボスからの攻撃を引き継ぐようにします。オプション。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | ボスから半径30ブロック以内に増援がスポーンするようにします。オプション。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 増援がボスのレベルを継承するようにします。オプション |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | [カスタムスポーンシステム]($language$/elitemobs/creating_spawns.md)を使用して増援をスポーンさせます。 `summonType: GLOBAL` の場合にのみ使用されます | 
| `location` | スポーン場所。オプション。 | `world_name,x,y,z` またはボスを基準とした場所の場合は `x,y,z` 。オフセットは、リージョナルボスのスポーン場所を基準としています。 `same_as_boss` を使用して、ボスと同じワールドに増援をスポーンさせることもできます。 | なし |
| `lightningRod` | `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` の場合の特別な設定。エンドクリスタルの周りに雷を発生させます。オプション。 |                                                                                                        `true` / `false`                                                                                                        | なし |

</details>

召喚タイプは、増援のスポーンの条件を設定します。有効な召喚タイプのリストを以下に示します。

<details> 

<summary><b>召喚タイプ</b></summary>

| Value |                                                                         説明                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          ボスが初めてダメージを受けたときにのみ、増援を1回だけスポーンさせます。                                           |
| `ON_HIT`  |                                                              攻撃を受けたときに増援をスポーンさせます。                                                              |
| `ON_COMBAT_ENTER` |                                                   ボスが戦闘状態になったときに増援をスポーンさせます。                                                    |
| `GLOBAL` | オンラインになっているすべてのプレイヤーに対して増援をスポーンさせます。 `customSpawn` キーに有効な[カスタムスポーン]($language$/elitemobs/creating_spawns.md)が設定されている必要があります。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 戦闘開始時にエンドクリスタル増援を配置します。カスタムドラゴンの戦闘でのみ使用されます。                                  |

</details>

[Elite Scripts]($language$/elitemobs/creating_powers.md)を使用して増援をスポーンさせることもできるため、増援のスポーンをよりカスタマイズできます。

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

### 上級者向け構成-独自のパワーの作成

ボスファイル自体に、またはパワーフォルダに新しい構成ファイルとして、独自のパワーを作成できます。詳細については、[こちら]($language$/elitemobs/creating_powers.md)をご覧ください。

### インスタンスダンジョンの難易度に基づいてパワーを制限する

[インスタンスダンジョン]($language$/elitemobs/dungeons.md&section=instanced-dungeons)には難易度設定があり、特定の難易度でのみ特定のパワーが有効になるようにすることができます。

<details> 

<summary><b>パワーの制限オプション</b></summary>

<div align="left">

| Key | 説明 | Values | Default |
|-|:-:|:-:|-|
| `filename` | パワーのファイル名。 | [String](#string) | なし |
| `difficultyID` | ダンジョンパッケージ内の難易度の名前と一致する難易度の名前。 | [String](#string) | なし |

</div>

</details>

これは、インスタンスダンジョンにのみ適用されます。

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

ボスが出現したときに送信するメッセージを設定します。 [announcementPriority](#announcementPriority)を設定する必要があります。

| Key | Values | Default |
|-|:-:|-|
| `spawnMessage` | [文字列](#string)と[カラーコード](#color_codes) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: 再び現れたぞ！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

ボスが倒れたときに送信するメッセージのリストを設定します。 [announcementPriority](#announcementPriority)を設定する必要があります。

| Key | Values | Default |
|-|:-:|-|
| `deathMessages` | [文字列](#string)、[カラーコード](#color_codes)、および以下のプレースホルダー | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4テストボスが倒されました！'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage ダメージ！'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage ダメージ！'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage ダメージ！'
- '&4Slayers: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

死亡メッセージでは、次のプレースホルダーを使用します。

<details> 

<summary><b>プレースホルダー</b></summary>

| Value | 説明 |
|-|:-:|
| `$damager1name` | ダメージを与えた人の名前 |
| `$damager2name` | 2番目にダメージを与えた人の名前 |
| `$damager3name` | 3番目にダメージを与えた人の名前 |
| `$damager1damage` | ダメージを与えた人のダメージ量 |
| `$damager2damage` | 2番目にダメージを与えた人のダメージ量 |
| `$damager3damage` | 3番目にダメージを与えた人のダメージ量 |
| `$players` | すべてのダメージを与えた人のリストを表示します |

</details>

### onKillMessage

ボスがプレイヤーを倒したときに送信するメッセージを設定します。 [announcementPriority](#announcementPriority)を設定する必要があります。

| Key | Values | Default |
|-|:-:|-|
| `onKillMessage` | [文字列](#string)と[カラーコード](#color_codes) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: 私の勝ちだ！
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

| Key | Values | Default |
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

ボスがニュートラルとしてスポーンするかどうかを設定します。これは、オオカミやアイアンゴーレムなど、ニュートラルになる可能性のあるエンティティタイプにのみ適用されます。

</div>

| Key | Values | Default |
|-|:-:|-|
| `neutral` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## 詳細設定

<div align="center">

### timeout

カスタムボスがデスポーンするまでの時間を分単位で設定します。

| Key | Values | Default |
|-|:-:|-|
| `timeout` | 時間（分）[整数](#integer) | `0` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
timeout: 20
```
ボスを20分後に逃亡させます。

</div>

</details>

***

### isPersistent

チャンクのアンロード後もボスが生き残ることができるかどうかを設定します。イベントボスにのみお勧めします。

| Key | Values | Default |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

例：

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

ボスが有利または不利になる武器を設定します。

| Key |        Values         | Default |
|-|:---------------------:|-|
| `damageModifiers` | [マテリアル](#material) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

この例では、ボスはダイヤモンドの剣からのダメージを80％しか受けませんが（20％減少）、トライデントからのダメージは200％受けます（2倍）。

</details>

***

### normalizedCombat



`~/plugins/EliteMobs/mobproperties` にある正規化されたエンティティの値に合わせて、ボスのダメージと最大体力を変更します。これは、リージョナルボスのデフォルトであり、スムーズな難易度曲線を保証します。

| Key | Values | Default |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

例：
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

[タイムアウト](#timeout) メカニズムによってボスが逃亡したときに、プレイヤーにブロードキャストされるメッセージを設定します。 [announcementPriority](#announcementPriority) を構成する必要があります。

| Key | Values | Default |
|-|:-:|-|
| `escapeMessage` | [String](#string) | なし |


<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "さようなら！"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

ボスバーに表示されるメッセージを設定します。これは、カスタムボスの体力とサーバー内の場所の両方を追跡するために使用されます。 [annoucementPriority](#annoucementPriority) を構成する必要があります。

| Key |                                      Values                                      | Default |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string)、[カラーコード](#color_codes)、および以下にリストされているプレースホルダー | なし |

プレースホルダー：

| Value | 説明 |
|-|:-:|
| `$distance` | プレイヤーからカスタムボスまでの距離に置き換えられます。これが推奨されるオプションです。 |
| `$location` | カスタムボスのxyz位置座標に置き換えられます |


<details>


<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4クールなボス: $location にいます、わずか $distance ブロック先！"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

これは、「クールなボス: 414,55,347 にいます、わずか 10 ブロック先！」のように表示されます。

</details>

***

### uniqueLootList

ボスからドロップする[カスタムアイテム]($language$/elitemobs/creating_items.md)を設定します。

| Key |        Values        | Default |
|-|:--------------------:|-|
| `uniqueLootList` | [リスト](#string_list) | なし |

カスタムルートのルートエントリは、ルートテーブルの形式に従います。 [詳細については、こちらをご覧ください！]($language$/elitemobs/loot_tables.md) 一部の古いファイルでは、例とは異なる古いルートテーブルが使用されている可能性があることに注意してください。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

[`uniqueLootList`](#uniqueLootList) のアイテムを除く、EliteMobs ルートをボスがドロップするかどうかを設定します。コインが含まれます。

| Key | Values | Default |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

増援モブの場合は、false に設定することをお勧めします。

<details> 

<summary><b>例</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

カスタムボスが、通常はバニラのモブタイプに関連付けられているバニラルートをドロップするかどうかを設定します。

| Key | Values | Default |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

カスタムボスが、EliteMobs から手続き的に生成されたルートをドロップするかどうかを設定します。エリートコインは含まれません。

| Key | Values | Default |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

ボスが移動するときに残す軌跡を設定します。

| Key | Values | Default |
|-|:-:|-|
| `trails` | [パーティクル](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) または [アイテムマテリアル](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

ボスモブがプレイヤーに命中したときに表示するメッセージを設定します。これはリストであり、使用されるものはリストからランダムに選択されます。

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDamageMessages` | [リスト](#string_list) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDamageMessages:
- "攻撃が当たった！"
- "ハハハ、攻撃が当たった！"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

ボスモブがプレイヤーからダメージを受けたときに表示するメッセージを設定します。これはリストであり、使用されるものはリストからランダムに選択されます。

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDamagedMessages` | [リスト](#string_list) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "ダメージを受けた！"
- "攻撃を受けた！"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

ボスが騎乗するエンティティを設定します。

| Key | Values | Default |
|-|:-:|-|
| `onDamagedMessages` | [騎乗するボスのファイル名](#filename) または [エンティティタイプ](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | なし |

ボスが自分自身に騎乗しようとしないでください。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

注：リージョナルボスは、騎乗しているエンティティとリーシュを共有します。つまり、リーシュで許可されている距離を超えると、両方ともスポーン場所にドラッグされます。

***

### announcementPriority

アナウンスの優先レベルを設定します。優先度が低いほどアナウンスは行われず、優先度が高いほどチャットだけでなく、構成されている場合は Discord でもアナウンスできます。

| Key | Values | Default |
|-|:-:|-|
| `announcementPriority` | [整数](#integer) | `1` |

優先度の機能のリストを以下に示します。

| Value |                                                                            説明                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   ボスは完全に沈黙し、アナウンスメッセージは表示されません。                                                   |
| `1` |                                これがデフォルトです。ボスは、スポーンメッセージ、死亡メッセージ、逃亡メッセージをチャットメッセージで送信できます。                                |
| `2` |                               `1` の内容に加えて、ボスは `/em` メニューからプレイヤーが追跡できるように設定されます。                                |
| `3` | `2` の内容に加えて、ブロードキャストメッセージは、構成されている場合は Discord にミラーリングされます。 [Discord 構成情報はこちら。]($language$/elitemobs/discordsrv.md) |

追跡可能で、チャットと Discord でスポーン/死亡/逃亡メッセージを送信できるボスの例を以下に示します。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注**：対応するアナウンス優先度レベルを使用する場合は、チャットと Discord のアナウンス用の spawnMessage、deathMessage/deathMessages、escapeMessage、および追跡機能用の locationMessage を構成する必要があります。

***

### followDistance

ボスが攻撃し、戦闘状態になる距離を設定します。

| Key | Values | Default |
|-|:-:|-|
| `followDistance` | [Double](#double) | なし、Minecraft のデフォルトを使用します |

注1：リージョナルボスは、戦闘状態ではない場合、`followDistance` が半分になります。これは、リーシュの制約により、あまりにも遠くから攻撃して面倒な戦闘問題が発生するのを防ぐためです。

注2：`followDistance` が高いほど、サーバーの CPU に対するボスの負荷が大きくなります。注意して責任を持って使用してください！

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

プレイヤーがボスに近づいてその距離以内に入ると、ボスがプレイヤーを追跡/攻撃し始める30ブロックの範囲を設定します。

</details>

***

### onDeathCommands

カスタムボスの死亡時に実行するコマンドのリストを設定します。

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDeathCommands` | [リスト](#string_list) | なし |

リストは、次のプレースホルダーをサポートしています。

| Value | 説明 |
|-|:-:|
| `$level` | ボスレベルのプレースホルダー。 |
| `$name` | ボスの名前のプレースホルダー。 |
| `$chance=x$` | コマンドが実行される確率を設定します。 |
| `$players` | ダメージを与えた人のリストの各プレイヤーに対してコマンドを1回実行し、そのリストの別のプレイヤーのユーザー名に置き換えます。 |
| `$locationX` | 死亡時のボスのX座標。 |
| `$locationY` | 死亡時のボスのY座標。 |
| `$locationZ` | 死亡時のボスのZ座標。 |
| `$damager1name` | 最もダメージを与えた人のユーザー名 |
| `$damager2name` | 2番目にダメージを与えた人のユーザー名 |
| `$damager3name` | 3番目にダメージを与えた人のユーザー名 |

これらの動作をよりよく理解するには、以下の例をご覧ください。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players が $name を倒しました！レベル $level でした！"
- "$chance=0.5$ say 素晴らしいキル！"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Player1、Player2、Player3 がボスを倒す前に全員がボスにダメージを与えた場合、コンソールからのコマンド出力は次のようになります。

<div align="left">

```
say Player1 が CustomBossName を倒しました！レベル X でした！
say Player2 が CustomBossName を倒しました！レベル X でした！
say Player3 が CustomBossName を倒しました！レベル X でした！
```

</div>

さらに、次の出力が表示される確率は50％です。

<div align="left">

```
say 素晴らしいキル！
```

</div>

</details> 

***

### onSpawnCommands

ボスのスポーン時に実行されるコマンドのリストを設定します。

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onSpawnCommands` | [リスト](#string_list) | なし |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！** この時点ではダメージを与えた人がいないため、ダメージを与えた人のプレースホルダーは適用されません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say ボスが出現しました！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

ボスが戦闘状態になったときに実行されるコマンドのリストを設定します。

| Key | Values | Default |
|-|:-:|-|
| `onCombatEnterCommands` | [リスト](#string_list) | なし |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！** この時点ではダメージを与えた人がいないため、ダメージを与えた人のプレースホルダーは適用されません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say ボスが戦闘状態になりました！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

ボスが戦闘状態を離れたときに実行するコマンドのリストを設定します。

| Key | Values | Default |
|-|:-:|-|
| `onCombatLeaveCommands` | [リスト](#string_list) | なし |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！**

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say ボスが戦闘状態を離れました！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

そのプラグインが有効になっている場合、LibsDisguises の変装を設定します。 [詳細については、こちらをご覧ください。]($language$/elitemobs/libsdisguises.md)

| Key | Values | Default |
|-|:-:|-|
| `disguise` | [String](#string) | なし |
| `customDisguiseData` | [String](#string) | なし |

<details> 

<summary><b>変装の例</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>カスタム変装の例</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

skindex からカスタム変装を設定します。 [このページ]($language$/elitemobs/libsdisguises.md) で、このデータを正しくフォーマットする方法を確認してください。

</details>

***

### customModel

カスタムモデルと ModelEngine がある場合、使用するカスタムモデルを設定します。 [詳細については、こちらをご覧ください。]($language$/elitemobs/custom_models.md)

| Key | Values | Default |
|-|:-:|-|
| `customModel` | [String](#string) | なし |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

ボスが移動できるかどうかを設定します。フリーズしたボスは攻撃できます。
</br>*注：これは一部のエンティティでは機能しない場合があります。*

| Key | Values | Default |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

ボスが出現したときに再生される音楽を設定します。曲の.oggファイルがリソースパックに含まれている必要があります。

| Key | Values | Default |
|-|:-:|-|
| `song` | [String](#string) | なし |

<details> 

<summary><b>例</b></summary>

曲をセットアップする方法は2つあります。1つ目は次のとおりです。

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

これにより、ice_queen.idle の曲が 76370 ティック再生され、ループされます。曲の場所はリソースパックによって決まることに注意してください。

曲をセットアップする2つ目の方法は次のとおりです。

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

これにより、ice_queen.end_transition の曲が 14328 ティック再生され、ice_queen.end_loop に移行して 28657 ティック再生され、end_loop がループされます。

これにより、ボスは「イントロ」または「トランジション」の曲を持ち、その後ループするメイントラックを持つことができます。

</div>

</details>

***

### cullReinforcements

ボスが倒れたときにボスの増援が削除されるかどうかを設定します。

| Key | Values | Default |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

ボスの移動速度を設定します。
</br>*注：0.36 を超えると速すぎる可能性があります。*

| Key | Values | Default |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | なし |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## ボスのフェーズ

<div align="center">

ボスは、体力が一定の割合に達すると変化するフェーズを持つことができます。これが発生すると、ボスは別の構成ファイルを使用し始めます。これは、エンティティタイプなど、ボスに関するすべてが変更される可能性があることを意味します。
</br>ボスのフェーズの詳細については、[こちら]($language$/elitemobs/creating_boss_phases.md)をクリックしてください。


| Key | 説明 | Values | Default |
|-|:-:|-|-|
| `phases` | ボスが持つフェーズを設定します。必須 | [リスト](#string_list) | なし |
| `phaseSpawnLocation` | フェーズボスのスポーン場所を設定します。オプション | [String](#string) | なし |


<details> 

<summary><b>例</b></summary>

<div align="left">

この例では、3つの異なる構成ファイルを示します。

最初のボスの構成ファイル：phase_1_boss.yml

```yml
name: "フェーズ1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

2番目のボスの構成ファイル：phase_2_boss.yml

```yml
name: "フェーズ2"
entityType: SKELETON
```

3番目のボスの構成ファイル：phase_3_boss.yml

```yml
name: "フェーズ3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

このボスは、体力が60％になると構成ファイル `phase_2_boss.yml` に、体力が30％になると構成ファイル `phase_3_boss.yml` に変更されます。フェーズ2と同じワールドで、座標はx = 10、y = 64、z = 100です。ボスのエンティティタイプと名前も変更されます。

エントリの形式は `filename:healthPercentage` です。

phaseSpawnLocation はオプションです。設定されていない場合、ボスは現在の場所に立っているフェーズを変更します。

</details>

フェーズボスを設計する際に知っておくべき重要なことは次のとおりです。

<div align="left">

- 最初のフェーズの構成ファイルは、ボスのすべてのフェーズを設定します。
- プレイヤーに対する脅威/カウントされたダメージは、フェーズ間で保持されます。
- フェーズの切り替えは、失われた体力の割合に基づいており、別のフェーズに切り替えても保持されます。これは、フェーズ間で healthMultiplier を増減しても、ボスが回復したりダメージを受けたりしないことを意味します。同じ割合で切り替わりますが、そのフェーズの体力は多かれ少なかれ異なります。
- フェーズボスは、戦闘状態を離れるとフェーズ1に戻ります。
- リージョナルボスでもあるフェーズボスは、すべてのフェーズで同じリーシュ半径とタイムアウトメカニズムを共有し、タイマーが終了するとフェーズ1のボスとしてリスポーンします。
- 最後のフェーズの構成ファイルは、ボスのルートを設定します。
- フェーズをスキップすることはできません。過剰なダメージを与えても、ボスは定義された割合でフェーズを切り替えます。
- マウントを持っているフェーズボスは、フェーズを切り替えるとマウントされなくなります。

</div>

</div>

</div>

***

## リージョナルボス

<div align="center">



リージョナルボスは、特定の構成済み場所にスポーンし、遅延後にその場所でリスポーンできるカスタムボスの特定のタイプです。さらに、他の機能の中でも、特定のゾーンにとどまることを保証するリーシュを持つことができます。

これらはすべてのダンジョンコンテンツに使用されます。リージョナルボスの詳細については、[こちら]($language$/elitemobs/creating_world_bosses.md)をクリックしてください。

| Key | 説明 | Values | Default |
|-|:-:|:-:|-|
| `isRegionalBoss` | ボスがリージョナルかどうかを設定します。リージョナルボスが必要な場合はtrueにする必要があります。  | `true` /  `false` | `false` |
| `spawnLocation` | ボスのスポーン場所を設定します。  | `/em addSpawnLocation [filename.yml]` コマンドを使用して追加してください！ | なし |
| `spawnCooldown` | ボスのリスポーンクールダウンを<b>分</b>単位で設定します。 | [整数](#integer) | `0` |
| `leashRadius` | 引き戻される前にボスがスポーンポイントから移動できる距離を設定します。 | [Double](#double) | なし |
| `onSpawnBlockStates` | ボスがスポーンしたときに変更するブロックを設定します。 | 以下のコマンドを確認してください | なし |
| `onRemoveBlockStates` | ボスがデスポーンしたときに変更するブロックを設定します。 | 以下のコマンドを確認してください | なし |

示されているように、リージョナルボスは `onSpawnBlockStates` と `onRemoveBlockStates` を持つことができます。

これは、戦闘中に戦闘アリーナを変更するのに非常に役立つ機能です。特にフェーズスイッチと組み合わせると、ブロックの状態を変更することで戦闘アリーナを開閉できるようになります。

これらの形式は手動で記述するには複雑すぎるため、設定を支援するためのコマンドがいくつか存在します。

| コマンド | 説明 |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | スポーン時または削除時のブロック状態の手動ブロック選択の登録を開始します。 |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | スポーン時または削除時のブロック状態を編集します。 |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | 管理者が状態として保存する大きなブロック領域を選択できるようにします。 |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | 管理者が状態として保存する大きなブロック領域を編集できるようにします。 |

<details> 

<summary><b>使用例：</b></summary>

<div align="left">

たとえば、ボスがドアが開いたアリーナにスポーンし、戦闘開始時にドアが閉まり、戦闘終了時に再び開くようにしたいとします。

これを行うには、2つのボスのフェーズと3つの異なるブロック状態のセットを登録する必要があります。この例では、これらのフェーズをそれぞれphase_1_boss.ymlとphase_2_boss.ymlと名付けます。

1) `/em registerblocks phase_1_boss.yml on_spawn` または `/em registerblocksedit phase_1_boss.yml on_spawn` を使用して、開いた状態のドアブロックを登録します。

これは、空気ブロックを登録することを意味します。ここでは、エリア選択をお勧めします。

これは、ボスがスポーンしたときにドアが開いていることを確認するために必要であり、プレイヤーが入れるようにします。

2) `/em registerblocks phase_2_boss.yml on_spawn` または `/em registerblocksedit phase_2_boss.yml on_spawn` を使用して、閉じた状態のドアブロックを登録します。

これは、プレイヤーが去るのを防ぐドアの固体ブロックを登録することを意味します。

これは、ボスがフェーズ2に入るときにドアを固体に変更するために必要であり、プレイヤーが去るのを防ぎます。

3) `/em registerblocks phase_2_boss.yml on_remove` または `/em registerblocksedit phase_2_boss.yml on_remove` を使用して、開いた状態のドアブロックを登録します。

これは、最初の手順と同じブロック（空気ブロック）を再度登録することを意味します。

これは、ボスが倒れたときにドアを開くために必要であり、プレイヤーがアリーナを離れることができます。

</div>

</details>

</div>

***

### alert

<div align="center">

ボスが警戒しているかどうかを設定します。デフォルトでは、リージョナルボスは戦闘状態ではない場合、速度が低下し、攻撃距離が短くなります。この設定により、リージョナルボスは戦闘外で速度が低下したり、攻撃距離が短くなったりすることがなくなり、戦闘中と戦闘外で常に同じように動作します。

</div>

| Key | Values | Default |
|-|:-:|-|
| `alert` | [ブール値](#boolean) | `true` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

リージョナルボスが倒された後、完全に削除されるかどうかを設定します。これは、BetterStructures が神社に使用する方法であり、リージョナルボスは一度だけ戦うように設計されており、その場所では二度と戦うことはありません。

</div>

| Key | Values | Default |
|-|:-:|-|
| `removeAfterDeath` | [ブール値](#boolean) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## インスタンスボス

<div align="center">

インスタンスボスは、インスタンスダンジョンで使用されるリージョナルボスのサブタイプです。

| Key | 説明 | Values | Default |
|-|:-:|:-:|-|
| `instanced` | カスタムボスをインスタンス化します。必須。 | `true` / `false` | `false` |


インスタンスダンジョンが正しく機能するには、ボスをインスタンス化に設定する必要があります。また、インスタンス化されたボスのリーシュを削除することをお勧めします。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
