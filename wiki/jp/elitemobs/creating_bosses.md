```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムボスの作成

# はじめに

## ボスファイルはどこに置く？

ボスファイルは、設定フォルダ `~/plugins/EliteMobs/custombosses` に置きます。

`~/plugins/EliteMobs/custombosses/mybosses` のようにサブフォルダを作成することも可能です。整理するためには、サブフォルダを作成することをお勧めします。

1つのファイルで1つのボスを定義しますが、同じボスを複数回スポーンさせたり、同じボスファイルに対して複数のスポーン場所を設定することも可能です。

[webapp](https://magmaguy.com/webapp/webapp.html) を使用すると、カスタムボスなどを迅速かつ簡単に作成できます。

## 最小限の設定

**カスタムボスの最小限の設定ファイルは以下の通りです。**
```yml
```

これは空のファイルであることに注意してください。これでも、カスタム名を持つゾンビのカスタムボスがスポーンします。これらはデフォルト設定だからです。
**このページに書かれていることはすべてオプションです！**

## ボスの例

<div align="center">

ボスファイルがどのようなものか、例を見てみましょう。

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
spawnMessage: テストボスがスポーンしました！
deathMessage: テストボスは$playersによって倒されました！
escapeMessage: テストボスは逃げ出しました！
locationMessage: 'テストエンティティ: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "当たったぞ！"
onDamagedMessages:
- "くらった！"
```

</div>

</details>

</div>

## 基本設定

<div align="center">

### isEnabled

ボスが有効かどうかを設定します。

| キー          |        値         | デフォルト  |
|-------------|:----------------:|--------|
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

| キー           |                                                                            値                                                                            | デフォルト    |
|--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------:|----------|
| `entityType` | [ここ](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)から選択してください。<br>値は `~plugins/EliteMobs/mobproperties` フォルダにも存在する必要があります。 | `ZOMBIE` |

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

| キー     |                         値                         | デフォルト          |
|--------|:-------------------------------------------------:|----------------|
| `name` | [文字列](#文字列)、[カラーコード](#カラーコード)と以下のプレースホルダーを受け入れます。 | "Default Name" |

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

ボスの名前フィールドにレベルを含めたい場合は、次のいずれかのプレースホルダーを使用してください。

| プレースホルダー              |         説明          |               例                | 出力 (レベル10のボスの場合) |
|-----------------------|:-------------------:|:------------------------------:|------------------|
| `$level`              |     レベルに置き換えます      |        "$level クールなボス"         | `10 クールなボス`      |
| `$normalLevel`        | レベルに置き換えます、通常のモブ向け  |    `"$normalLevel クールなボス"`     | `[10] クールなボス`    |
| `$minibossLevel`      |  レベルに置き換えます、ミニボス向け  |   `"$minibossLevel クールなボス"`    | `〖10〗 クールなボス`    |
| `$bossLevel`          |   レベルに置き換えます、ボス向け   |     `"$bossLevel クールなボス"`      | `『10』 クールなボス`    |
| `$reinforcementLevel` |   レベルに置き換えます、増援向け   | `"$reinforcementLevel クールなボス"` | `〔10〕 クールなボス`    |
| `$eventBossLevel`     | レベルに置き換えます、イベントボス向け |   `"$eventBossLevel クールなボス"`   | `「10」 クールなボス`    |

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

| キー      |            値             | デフォルト     |
|---------|:------------------------:|-----------|
| `level` | 正の[整数](#整数)または `dynamic` | `dynamic` |

`dynamic` はイベントで使用され、ボススポーン時の近くのプレイヤーのレベルに合わせて調整します。
リージョナルボスには推奨されません。

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

ボスのスケール (サイズ) を設定します。

| キー      |     値     | デフォルト |
|---------|:---------:|-------|
| `scale` | [乗数](#乗数) | `1.0` |

スケーリング時、`1.0` はデフォルトサイズを表します。エンティティを大きくするには値を増やし (例: `1.2`)
、エンティティを小さくするには値を減らします (例: `0.8`)。

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

ボスの種類を設定します。これはボスのヘルスバーやその他の機能を表示するために使用されます。

| キー         |                   値                   | デフォルト    |
|------------|:-------------------------------------:|----------|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`、`BOSS`、`EVENT` は、プレイヤーがこれらのボスタイプと戦っているときに、プラグインにヘルスバーを表示させます。

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

ボスのヘルスを設定します。

| キー                 |     値     | デフォルト |
|--------------------|:---------:|-------|
| `healthMultiplier` | [乗数](#乗数) | `1.0` |

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

ボスのダメージ乗数を設定します。

| キー                 |     値     | デフォルト |
|--------------------|:---------:|-------|
| `damageMultiplier` | [乗数](#乗数) | `1.0` |

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

ボスがモブの子供のバリアントを使用するかどうかを設定します。子供のバリアントを持つモブにのみ適用できます。
[変装]($language$/elitemobs/libsdisguises.md)させたいが、変装中も子供のままでありたい場合 (
変装エンティティも子供のバリアントをサポートしていることを確認してください)、この設定を使用できます。
<div align="left">

```yaml
disguise: HOGLIN:baby
```

</div>

| キー       |        値         | デフォルト   |
|----------|:----------------:|---------|
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

ボスの防具を設定します。すべての Minecraft モデルが防具を表示できるわけではありません。ボスの防具は純粋に装飾的なものであり、ゲームプレイには影響しません。

| キー           |                         値                          | デフォルト |
|--------------|:--------------------------------------------------:|-------|
| `helmet`     | [マテリアル](#マテリアル)、[UUID](https://minecraftuuid.com/) | none  |
| `chestplate` |                  [マテリアル](#マテリアル)                   | none  |
| `leggings`   |                  [マテリアル](#マテリアル)                   | none  |
| `boots`      |                  [マテリアル](#マテリアル)                   | none  |
| `mainHand`   |                  [マテリアル](#マテリアル)                   | none  |
| `offHand`    |                  [マテリアル](#マテリアル)                   | none  |

**注:** このフィールドでは、アイテムのカスタムモデルを設定することもできます。カスタムモデル ID
を設定するには、マテリアルタイプの後に `ITEM_MATERIAL:ID` の形式で ID を追加します。例: `DIAMOND_SWORD:1`
は、テクスチャパックのカスタムモデル #1 のダイヤモンドの剣を着用するようにボスを設定します。

**注 2:** このフィールドでは、`ITEM_MATERIAL:CODE` の形式でカスタムレザーカラーを設定することもできます。ここで、CODE
は色の16進数表現です。例: `LEATHER_LEGGINGS:ffa500`
はオレンジ色のレギンスを作成します。16進数コードを使用できます。16進数コードから `#`
を削除するだけです。16進数コードは[ここ](https://www.w3schools.com/colors/colors_hexadecimal.asp)から取得できます。

**注 3:** ヘルメットフィールドでは、モブのヘルメットをプレイヤーの頭に設定することもできます。使用したいプレイヤーの頭の
UUID を取得し、それをヘルメットフィールドに入力するだけです。*これが機能するためにはプレイヤーがオンラインである必要があり、そうでない場合は頭はデフォルトの
Minecraft の頭になります。*プレイヤーの UUID は[ここ](https://minecraftuuid.com/)から取得できます。

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

| キー       |        値        | デフォルト |
|----------|:---------------:|-------|
| `powers` | 下記のリストを参照してください | none  |

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

*注: 使用できる既成のパワーのリストを確認したい場合は、[このページ]($language$/elitemobs/premade_powers.md)
をご覧ください。*

***

### 中間設定 - 増援のスポーン

増援も、次の設定を使用して、パワーカテゴリに入ります。

<details> 

<summary><b>増援の設定</b></summary>

| キー             |                                                   説明                                                   |                                                                  値                                                                   | デフォルト   |
|----------------|:------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------------------------:|---------|
| `summonType`   |                                          増援スポーンをトリガーするもの。必須。                                           |                                                           下記のリストを参照してください                                                            | none    |
| `filename`     |                                        増援としてスポーンするボスのファイル名。必須。                                         |                                                             [文字列](#文字列)                                                              | none    |
| `chance`       |                                           増援がスポーンする確率。オプション。                                           |                                                       [倍精度浮動小数点数](#倍精度浮動小数点数)                                                        | `1.0`   |
| `amount`       |                                        スポーンする増援の数を設定します。オプション。                                         |                                                              [整数](#整数)                                                               | `1`     |
| `inheritAggro` |                                      増援がボスからアグロを引き継ぐようにします。オプション。                                      |                                                           `true` / `false`                                                           | `false` |
| `spawnNearby`  |                                   増援がボスの30ブロック半径でスポーンするようにします。オプション。                                   |                                                           `true` / `false`                                                           | `false` |
| `inheritLevel` |                                       増援がボスのレベルを引き継ぐようにします。オプション                                       |                                                           `true` / `false`                                                           | `false` |
| `customSpawn`  | [カスタムスポーンシステム]($language$/elitemobs/creating_spawns.md)を使用して増援をスポーンさせます。`summonType: GLOBAL` にのみ使用されます 
| `location`     |                                             スポーン場所。オプション。                                              | ボスに対する相対的な場所には `world_name,x,y,z` または `x,y,z`。オフセットはリージョナルボスのスポーン場所に対する相対的なものです。また、`same_as_boss` を使用して、増援をボスと同じワールドにスポーンさせることができます。 | none    |
| `lightningRod` |           `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` の特別な設定。エンドクリスタルがそれらの周囲に雷を発生させます。オプション。           |                                                           `true` / `false`                                                           | none    |

</details>

召喚タイプは、増援スポーンの条件を設定します。以下は、有効な召喚タイプのリストです。

<details> 

<summary><b>召喚タイプ</b></summary>

| 値                               |                                                           説明                                                            |
|---------------------------------|:-----------------------------------------------------------------------------------------------------------------------:|
| `ONCE`                          |                                            増援を一度だけスポーンさせます。ボスが最初にダメージを受けたとき。                                            |
| `ON_HIT`                        |                                                    ヒット時に増援をスポーンします。                                                     |
| `ON_COMBAT_ENTER`               |                                                ボスが戦闘に入ったときに増援をスポーンさせます。                                                 |
| `GLOBAL`                        | すべてのオンラインプレイヤーに対して増援をスポーンさせます。`customSpawn` キーが有効な [カスタムスポーン]($language$/elitemobs/creating_spawns.md) 設定を持っている必要があります。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                      戦闘開始時にエンドクリスタルの増援を配置します。カスタムドラゴンの戦闘でのみ使用します。                                       |

</details>

[Elite Scripts]($language$/elitemobs/creating_powers.md) を介して増援をスポーンさせることも可能であるため、増援をスポーンさせるよりカスタマイズ可能な方法があります。

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

### エキスパート構成 - 独自のパワーの作成

ボスファイル自体または powers
フォルダの新しい構成ファイルとして、独自のパワーを作成できます。詳細については、[こちら]($language$/elitemobs/creating_powers.md)
をご覧ください。

### インスタンス化されたダンジョンの難易度に基づいてパワーを制限する

[インスタンス化されたダンジョン]($language$/elitemobs/dungeons.md&section=instanced-dungeons)
には難易度設定があり、特定のパワーが特定の難易度でのみ有効になるようにすることが可能です。

<details> 

<summary><b>パワーオプションの制限</b></summary>

<div align="left">

| キー             |             説明              |      値      | デフォルト |
|----------------|:---------------------------:|:-----------:|-------|
| `filename`     |         パワーのファイル名。          | [文字列](#文字列) | none  |
| `difficultyID` | ダンジョンパッケージの難易度の名前と一致する難易度名。 | [文字列](#文字列) | none  |

</div>

</details>

これは、インスタンス化されたダンジョンにのみ適用されます。

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

| キー             |               値               | デフォルト |
|----------------|:-----------------------------:|-------|
| `spawnMessage` | [文字列](#文字列)と[カラーコード](#カラーコード) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: 私は再び立ち上がる！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

ボスが死亡したときに送信するメッセージのリストを設定します。[announcementPriority](#announcementPriority) の設定が必要です。

| キー              |                     値                     | デフォルト |
|-----------------|:-----------------------------------------:|-------|
| `deathMessages` | [文字列](#文字列)、[カラーコード](#カラーコード)と以下のプレースホルダー | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4テストボスが倒されました！'
- '&c&l    1位の攻撃者: $damager1name &cダメージ$damager1damage！'
- '&6&l    2位の攻撃者: $damager2name &6ダメージ$damager2damage！'
- '&e&l    3位の攻撃者: $damager3name &eダメージ$damager3damage！'
- '&4倒した人: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

死亡メッセージでは、次のプレースホルダーが使用されます。

<details> 

<summary><b>プレースホルダー</b></summary>

| 値                 |           説明            |
|-------------------|:-----------------------:|
| `$damager1name`   |     トップダメージを与えた人の名前     |
| `$damager2name`   |   2番目にトップダメージを与えた人の名前   |
| `$damager3name`   |   3番目にトップダメージを与えた人の名前   |
| `$damager1damage` |   トップダメージを与えた人のダメージ量    |
| `$damager2damage` | 2番目にトップダメージを与えた人のダメージ量  |
| `$damager3damage` | 3番目にトップダメージを与えた人のダメージ量  |
| `$players`        | すべてのダメージを与えた人のリストを表示します |

</details>

### onKillMessage

ボスがプレイヤーを倒したときに送信するメッセージを設定します。[announcementPriority](#announcementPriority) の設定が必要です。

| キー              |               値               | デフォルト |
|-----------------|:-----------------------------:|-------|
| `onKillMessage` | [文字列](#文字列)と[カラーコード](#カラーコード) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: 私の勝ちだ、お前の負けだ！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

スライムボスのサイズを設定しますが、スライムとマグマキューブでのみ機能します。

</div>

| キー          |     値     | デフォルト |
|-------------|:---------:|-------|
| `slimeSize` | [整数](#整数) | `4`   |

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

ボスが中立としてスポーンするかどうかを設定します。これは、オオカミやアイアンゴーレムなど、中立になりうるエンティティタイプにのみ適用されます。

</div>

| キー        |       値       | デフォルト   |
|-----------|:-------------:|---------|
| `neutral` | [ブール値](#ブール値) | `false` |

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

カスタムボスが消滅するまでの時間（分単位）を設定します。

| キー        |         値          | デフォルト |
|-----------|:------------------:|-------|
| `timeout` | 時間 (分単位) [整数](#整数) | `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
timeout: 20
```

20分後にボスが逃げるように設定します。

</div>

</details>

***

### isPersistent

ボスがチャンクアンロードを生き残ることができるかどうかを設定します。イベントボスにのみ推奨されます。

| キー             |        値         | デフォルト   |
|----------------|:----------------:|---------|
| `isPersistent` | `true` / `false` | `false` |

<details>
```
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

ボスが強くまたは弱くなる可能性のある武器を設定します。

| キー                |        値        | デフォルト |
|-------------------|:---------------:|-------|
| `damageModifiers` | [マテリアル](#マテリアル) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

この例では、ボスはダイヤモンドの剣から 80% のダメージ (または 20% 少ない) しか受けませんが、トライデントから 200%
のダメージ (または 2 倍以上) を受けます。

</details>

***

### normalizedCombat

`~/plugins/EliteMobs/mobproperties` の正規化されたエンティティの値と一致するように、ボスのダメージと最大ヘルスを変更します。これは、スムーズな難易度曲線のために、リージョナルボスに対するデフォルトです。

| キー                 |        値         | デフォルト   |
|--------------------|:----------------:|---------|
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

ボスが [タイムアウト](#timeout)
メカニズムで逃げたときに、プレイヤーにブロードキャストされるメッセージを設定します。[announcementPriority](#announcementPriority)
を設定する必要があります。

| キー              |      値      | デフォルト |
|-----------------|:-----------:|-------|
| `escapeMessage` | [文字列](#文字列) | none  |

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

ボスバーに表示されるメッセージを設定します。これは、カスタムボスのヘルスとサーバー内の場所の両方を追跡するために使用されます。[annoucementPriority](#annoucementPriority)
を設定する必要があります。

| キー                |                     値                     | デフォルト |
|-------------------|:-----------------------------------------:|-------|
| `locationMessage` | [文字列](#文字列)、[カラーコード](#カラーコード)と以下のプレースホルダー | none  |

プレースホルダー：

| 値           |                       説明                       |
|-------------|:----------------------------------------------:|
| `$distance` | プレイヤーがカスタムボスから離れている距離に置き換えられます。これが望ましいオプションです。 |
| `$location` |          カスタムボスの x y z 位置座標に置き換えられます           |

<details>


<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4クールなボス: $location に $distance ブロック離れた場所にいます！"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

これは `クールなボス: 414,55,347 に 10 ブロック離れた場所にいます！` のように表示されます。

</details>

***

### uniqueLootList

ボスからドロップする[カスタムアイテム]($language$/elitemobs/creating_items.md)を設定します。

| キー               |       値        | デフォルト |
|------------------|:--------------:|-------|
| `uniqueLootList` | [リスト](#文字列リスト) | none  |

カスタムルートのルートエントリは、ルートテーブル形式に従います。[詳細についてはこちら!]($language$/elitemobs/loot_tables.md)
一部の古いファイルでは、例とは異なる古いルートテーブルを使用している可能性があることに注意してください。

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

ボスが、[`uniqueLootList`](#uniqueLootList) 内のアイテムを除いて、EliteMobs のルートをドロップするかどうかを設定します。コインが含まれます。

| キー                   |        値         | デフォルト  |
|----------------------|:----------------:|--------|
| `dropsEliteMobsLoot` | `true` / `false` | `true` |

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

カスタムボスが、通常バニラのモブタイプに関連付けられているバニラのルートをドロップするかどうかを設定します。

| キー                 |        値         | デフォルト  |
|--------------------|:----------------:|--------|
| `dropsVanillaLoot` | `true` / `false` | `true` |

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

カスタムボスが EliteMobs から手順的に生成されたルートをドロップするかどうかを設定します。エリートコインは含まれていません。

| キー                |        値         | デフォルト  |
|-------------------|:----------------:|--------|
| `dropsRandomLoot` | `true` / `false` | `true` |

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

移動時にボスが残す軌跡を設定します。

| キー       |                                                                               値                                                                                | デフォルト |
|----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------|
| `trails` | [パーティクル](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) または [アイテムマテリアル](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | none  |

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

プレイヤーを攻撃したときにボスのモブが表示するメッセージを設定します。これはリストであり、使用されるメッセージはリストからランダム化されます。

| キー                 |       値        | デフォルト |
|--------------------|:--------------:|-------|
| `onDamageMessages` | [リスト](#文字列リスト) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDamageMessages:
- "当たったぞ！"
- "ははは、当たった！"
```

<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

プレイヤーからダメージを受けたときにボスのモブが表示するメッセージを設定します。これはリストであり、使用されるメッセージはリストからランダム化されます。

| キー                  |       値        | デフォルト |
|---------------------|:--------------:|-------|
| `onDamagedMessages` | [リスト](#文字列リスト) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "殴られた！"
- "くらった！"
```

<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

ボスがマウントして乗るエンティティを設定します。

| キー                  |                                                            値                                                            | デフォルト |
|---------------------|:-----------------------------------------------------------------------------------------------------------------------:|-------|
| `onDamagedMessages` | [マウントするボスのファイル名](#filename) または [エンティティタイプ](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | none  |

ボス自体をマウントさせようとしないでください。

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

注：リージョナルボスは、マウントしているエンティティとリーシュを共有します。つまり、リーシュで許可されている距離を超えると、両方ともスポーン場所に戻されます。

***

### announcementPriority

アナウンスの優先度レベルを設定します。優先度が低いほどアナウンスは行われず、優先度が高いほどチャットだけでなく、設定されている場合は
Discord でもアナウンスできます。

| キー                     |     値     | デフォルト |
|------------------------|:---------:|-------|
| `announcementPriority` | [整数](#整数) | `1`   |

優先度が何をするかのリストを以下に示します。

| 値   |                                                        説明                                                        |
|-----|:----------------------------------------------------------------------------------------------------------------:|
| `0` |                                          ボスは完全に無音になり、アナウンスメッセージはありません。                                           |
| `1` |                          これはデフォルトです。ボスは、スポーンメッセージ、死亡メッセージ、および逃亡メッセージでチャットメッセージを送信できます。                           |
| `2` |                                `1` の内容に加えて、ボスは `/em` メニューからプレイヤーによって追跡可能に設定されます。                                 |
| `3` | `2` の内容に加えて、構成されている場合、ブロードキャストメッセージは Discord でミラーリングされます。[Discord の構成情報はこちら]($language$/elitemobs/discordsrv.md) |

追跡可能で、チャットと Discord でスポーン/死亡/逃亡メッセージを送信できるボスの例を次に示します。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注**: 対応するアナウンス優先度レベルを使用する場合は、チャットと Discord のアナウンスには
spawnMessage、deathMessage/deathMessages、escapeMessage を、追跡機能には locationMessage を設定する必要があります。

***

### followDistance

ボスがアグロし、戦闘に入る距離を設定します。

| キー               |            値            | デフォルト                     |
|------------------|:-----------------------:|---------------------------|
| `followDistance` | [倍精度浮動小数点数](#倍精度浮動小数点数) | なし、Minecraft のデフォルトを使用します |

注 1：リージョナルボスは、戦闘外では `followDistance` の半分になります。これは、リーシュの制約により、遠くからアグロしないようにするためです。

注 2：`followDistance` が高いほど、ボスはサーバーの CPU に負荷をかけます。慎重かつ責任を持って使用してください！

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

プレイヤーがボスの近くでその距離内に入ると、プレイヤーを追跡/攻撃し始める 30 ブロックの範囲を設定します。

</details>

***

### onDeathCommands

カスタムボスが死亡したときに実行するコマンドのリストを設定します。

| キー                |       値        | デフォルト |
|-------------------|:--------------:|-------|
| `onDeathCommands` | [リスト](#文字列リスト) | none  |

リストは、次のプレースホルダーをサポートしています。

| 値               |                                   説明                                    |
|-----------------|:-----------------------------------------------------------------------:|
| `$level`        |                             ボスレベルのプレースホルダー。                             |
| `$name`         |                              ボス名のプレースホルダー。                              |
| `$chance=x$`    |                          コマンドを実行するチャンスを持たせます。                           |
| `$players`      | ダメージを与えた人のリストにいるすべてのプレイヤーに対してコマンドを 1 回実行し、そのリストの別のプレイヤーのユーザー名で毎回置き換えます。 |
| `$locationX`    |                              死亡時のボスの X 座標。                              |
| `$locationY`    |                              死亡時のボスの Y 座標。                              |
| `$locationZ`    |                              死亡時のボスの Z 座標。                              |
| `$damager1name` |                           トップダメージを与えた人のユーザー名                            |
| `$damager2name` |                         2番目にトップダメージを与えた人のユーザー名                          |
| `$damager3name` |                         3番目にトップダメージを与えた人のユーザー名                          |

これらの仕組みをより良く理解するために、以下の例をご覧ください。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players が $name を倒した！レベルは $level だった！"
- "$chance=0.5$ say 素晴らしいキルだ！"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Player1、Player2、Player3 がすべて倒す前にボスにダメージを与えた場合、これはコンソールからのコマンド出力になります。

<div align="left">

```
say Player1 が CustomBossName を倒した！レベルは X だった！
say Player2 が CustomBossName を倒した！レベルは X だった！
say Player3 が CustomBossName を倒した！レベルは X だった！
```

</div>

さらに、以下も出力される可能性が 50% あります。

<div align="left">

```
say 素晴らしいキルだ！
```

</div>

</details> 

***

### onSpawnCommands

ボスがスポーンしたときに実行されるコマンドのリストを設定します。

| キー                |       値        | デフォルト |
|-------------------|:--------------:|-------|
| `onSpawnCommands` | [リスト](#文字列リスト) | none  |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！**
この時点ではダメージを与える人がいないため、ダメージを与える人のプレースホルダーは適用されません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say ボスがスポーンしました！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

ボスが戦闘に入ったときに実行されるコマンドのリストを設定します。

| キー                      |       値        | デフォルト |
|-------------------------|:--------------:|-------|
| `onCombatEnterCommands` | [リスト](#文字列リスト) | none  |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！**
この時点ではダメージを与える人がいないため、ダメージを与える人のプレースホルダーは適用されません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say ボスが戦闘に入った！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

ボスが戦闘から離脱したときに実行するコマンドのリストを設定します。

| キー                      |       値        | デフォルト |
|-------------------------|:--------------:|-------|
| `onCombatLeaveCommands` | [リスト](#文字列リスト) | none  |

**これは [onDeathCommands](#onDeathCommands) と同じプレースホルダーを使用します！**

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say ボスが戦闘から離脱した！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

そのプラグインが有効になっている場合は、LibsDisguises
の変装を設定します。[詳細はこちら]($language$/elitemobs/libsdisguises.md)

| キー                   |      値      | デフォルト |
|----------------------|:-----------:|-------|
| `disguise`           | [文字列](#文字列) | none  |
| `customDisguiseData` | [文字列](#文字列) | none  |

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

Skindex からカスタム変装を設定します。[このページ]($language$/elitemobs/libsdisguises.md) を確認して、このデータの正しい書式を学ぶことができます。

</details>

***

### customModel

カスタムモデルと ModelEngine
がある場合は、使用するカスタムモデルを設定します。[詳細はこちら]($language$/elitemobs/custom_models.md)

| キー            |      値      | デフォルト |
|---------------|:-----------:|-------|
| `customModel` | [文字列](#文字列) | none  |

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

ボスが移動できるかどうかを設定します。凍結したボスは攻撃することはできます。
</br>*注：これは一部のエンティティでは機能しない場合があります。*

| キー       |        値         | デフォルト   |
|----------|:----------------:|---------|
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

ボスがスポーンしたときに開始する音楽を設定します。曲の .ogg ファイルがリソースパックにある必要があります。

| キー     |      値      | デフォルト |
|--------|:-----------:|-------|
| `song` | [文字列](#文字列) | none  |

**注：`song` 設定では、`followDistance` が、曲の再生が開始される範囲を決定するため、`followDistance` を設定する必要があります。
**
`song` の `length` (ミリ秒) を設定する方法については、例を確認してください。

<details> 

<summary><b>例</b></summary>

曲を設定する方法は2つあります。これが最初の方法です。

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

これにより、曲 ice_queen.idle が 76370 ミリ秒再生され、ループします。曲の場所はリソースパックによって決定されることに注意してください。

曲を設定する2番目の方法を次に示します。

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

これにより、曲 ice_queen.end_transition が 14328 ミリ秒再生され、ice_queen.end_loop に 28657 ミリ秒間移行し、end_loop
をループします。

これにより、ボスが「イントロ」または「トランジション」曲と、ループするメイントラックを持つことができます。

</div>

</details>

***

### cullReinforcements

ボスの増援がボスの死亡時に削除されるかどうかを設定します。

| キー                   |        値         | デフォルト  |
|----------------------|:----------------:|--------|
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
</br>*注：0.36 を超えるものは速すぎる可能性があります。*

| キー                       |            値            | デフォルト |
|--------------------------|:-----------------------:|-------|
| `movementSpeedAttribute` | [倍精度浮動小数点数](#倍精度浮動小数点数) | none  |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## ボスフェーズ

<div align="center">

ボスは、ボスのヘルスが特定の割合に達すると変化するフェーズを持つことができます。これが発生すると、ボスは異なる構成ファイルの使用を開始します。つまり、エンティティタイプなど、ボスに関するすべてを変更できます。
</br>ボスフェーズの詳細については、[こちら]($language$/elitemobs/creating_boss_phases.md)をクリックしてください。

| キー                   |             説明              |       値        | デフォルト |
|----------------------|:---------------------------:|:--------------:|-------|
| `phases`             |     ボスが持つフェーズを設定します。必須      | [リスト](#文字列リスト) | none  |
| `phaseSpawnLocation` | フェーズボスがスポーンする場所を設定します。オプション |  [文字列](#文字列)   | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

この例では、3 つの異なる構成ファイルを示します。

最初のボス構成ファイル：phase_1_boss.yml

```yml
name: "フェーズ1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

2番目のボス構成ファイル：phase_2_boss.yml

```yml
name: "フェーズ2"
entityType: SKELETON
```

3番目のボス構成ファイル：phase_3_boss.yml

```yml
name: "フェーズ3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

このボスは、60% のヘルスで構成ファイル `phase_2_boss.yml` に、30% のヘルスで構成ファイル `phase_3_boss.yml` に、フェーズ 2
と同じワールドで、座標 x=10、y=64、z=100 で変更されます。ボスのエンティティタイプと名前も変更されます。

エントリの形式は `filename:healthPercentage` です。

phaseSpawnLocation はオプションであり、設定されていない場合、ボスは立っている場所でフェーズを変更します。

</details>

フェーズボスを設計する際に知っておくべき重要な事項を次に示します。

<div align="left">

- 最初のフェーズの構成ファイルは、ボスのすべてのフェーズを設定します。
- プレイヤーの脅威/ダメージカウントはフェーズ間で保持されます。
- フェーズの切り替えは、失われたヘルスパーセンテージに基づいており、別のフェーズに切り替える際に保持されます。これは、フェーズ間で
  healthMultiplier を増減してもボスが回復またはダメージを受けないことを意味します。同じパーセンテージで切り替えられますが、そのフェーズではヘルスが多かれ少なかれになります。
- フェーズボスは、戦闘から外れるとフェーズ 1 に戻ります。
- リージョナルボスでもあるフェーズボスは、すべてのフェーズで同じリーシュ半径とタイムアウトメカニズムを共有し、タイマーが終了するとフェーズ
  1 のボスとして再スポーンします。
- 最後のフェーズの構成ファイルは、ボスのルートを設定します。
- フェーズをスキップすることはできません。過剰なダメージでも、定義されたパーセンテージでボスをフェーズ切り替えさせます。
- マウントを持っているフェーズボスは、フェーズを切り替えるとマウントされなくなります。

</div>

</div>

***

## リージョナルボス

<div align="center">

リージョナルボスは、特定の構成された場所にスポーンし、遅延後にその場所で再スポーンできる特定のタイプのカスタムボスです。さらに、他の機能の中で、特定のゾーンに留まるようにするためのリーシュを持つことができます。

これらは、すべてのダンジョンコンテンツに使用されます。リージョナルボスの詳細については、[こちら]($language$/elitemobs/creating_world_bosses.md)
をクリックしてください。

| キー                    |                          説明                          |                          値                           | デフォルト   |
|-----------------------|:----------------------------------------------------:|:----------------------------------------------------:|---------|
| `isRegionalBoss`      | ボスがリージョナルかどうかを設定します。リージョナルボスが必要な場合は true である必要があります。 |                   `true` / `false`                   | `false` |
| `spawnLocation`       |                   ボスのスポーン場所を設定します。                   | `/em addSpawnLocation [filename.yml]` コマンドで追加してください！ | none    |
| `spawnCooldown`       |           ボスの再スポーンクールダウンを<b>分</b>単位で設定します。           |                      [整数](#整数)                       | `0`     |
| `leashRadius`         |         ボスが引き戻されるまでにスポーンポイントから移動できる距離を設定します。         |               [倍精度浮動小数点数](#倍精度浮動小数点数)                | none    |
| `onSpawnBlockStates`  |               ボスがスポーン時に変更するブロックを設定します。               |                   以下のコマンドを確認してください                   | none    |
| `onRemoveBlockStates` |              ボスがデスポーン時に変更するブロックを設定します。               |                   以下のコマンドを確認してください                   | none    |

示されているように、リージョナルボスは `onSpawnBlockStates` および `onRemoveBlockStates` を持つことができます。

これは、戦闘中の戦闘アリーナを変更するための非常に便利な機能であり、特にフェーズスイッチと組み合わせることで、ブロック状態を変更して戦闘アリーナを開閉することが可能になります。

これらの形式は手動で記述するには複雑すぎるため、いくつかのコマンドを使用して設定を支援します。

| コマンド                                                                     |                   説明                    |
|--------------------------------------------------------------------------|:---------------------------------------:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove]         | スポーン時またはリムーブ時のブロック状態の手動ブロック選択の登録を開始します。 |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove]     |       スポーン時またはリムーブ時のブロック状態を編集します。       |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove]     |   管理者がブロックの広い領域を選択して状態として保存できるようにします。   |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] |   管理者がブロックの広い領域を編集して状態として保存できるようにします。   |

<details> 

<summary><b>使用例：</b></summary>

<div align="left">

たとえば、ドアが開いたアリーナにボスがスポーンし、戦闘が開始されるとドアが閉まり、戦闘が終了すると再度開くようにしたいとします。

これを行うには、2つのボスのフェーズと、3つの異なるブロック状態のセットを登録する必要があります。この例では、これらのフェーズをそれぞれ
phase_1_boss.yml と phase_2_boss.yml と名付けます。

1）`/em registerblocks phase_1_boss.yml on_spawn` または `/em registerblocksedit phase_1_boss.yml on_spawn`
を使用して、ドアブロックを開いた状態で登録します。

これは、エアブロックを登録することを意味します。ここでは、領域選択をお勧めします。

これは、ボスがスポーンしたときにドアが開いていることを確認して、プレイヤーが確実に入場できるようにするために必要です。

2）`/em registerblocks phase_2_boss.yml on_spawn` または `/em registerblocksedit phase_2_boss.yml on_spawn`
を使用して、ドアブロックを閉じた状態で登録します。

これは、プレイヤーが離れるのを防ぐドアのソリッドブロックを登録することを意味します。

これは、ボスがフェーズ2に入ったときにドアをソリッドに変更し、プレイヤーが離れるのを防ぐために必要です。

3）`/em registerblocks phase_2_boss.yml on_remove` または `/em registerblocksedit phase_2_boss.yml on_remove`
を使用して、ドアブロックを開いた状態で登録します。

これは、最初のステップと同じブロック (エアブロック) を再度登録することを意味します。

これは、ボスが死亡したときにドアを開き、プレイヤーがアリーナを離れることができるようにするために必要です。

</div>

</details>

</div>

***

### alert

<div align="center">

ボスが警戒しているかどうかを設定します。デフォルトでは、リージョナルボスは戦闘外では速度が低下し、アグロ距離が短くなります。この設定により、リージョナルボスは戦闘外での速度低下とアグロ距離の短縮を防ぎ、戦闘中または戦闘外で常に同じように動作します。

</div>

| キー      |       値       | デフォルト  |
|---------|:-------------:|--------|
| `alert` | [ブール値](#ブール値) | `true` |

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

リージョナルボスを倒した後、恒久的に削除するかどうかを設定します。これは、BetterStructures
が祠に使用するもので、リージョナルボスは一度だけ戦うように設計されており、その場所では二度と戦うことはありません。

</div>

| キー                 |       値       | デフォルト   |
|--------------------|:-------------:|---------|
| `removeAfterDeath` | [ブール値](#ブール値) | `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## インスタンス化されたボス

<div align="center">

インスタンス化されたボスは、インスタンス化されたダンジョンで使用されるリージョナルボスのサブタイプです。

| キー          |          説明           |        値         | デフォルト   |
|-------------|:---------------------:|:----------------:|---------|
| `instanced` | カスタムボスをインスタンス化します。必須。 | `true` / `false` | `false` |

ボスをインスタンス化に設定することは、インスタンス化されたダンジョンが正しく機能するために必須です。また、インスタンス化されたボスにはリーシュを削除することをお勧めします。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
