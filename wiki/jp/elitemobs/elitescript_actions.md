# エリートスクリプトのアクション

アクションはスクリプトの中核です。これらはスクリプトが何をするかを決定し、カスタム間隔を設定できます。

アクションは常に実行するアクションのタイプで始まります。異なるアクションタイプは異なる機能を提供します。さらに、すべてのアクションにはターゲットまたは複数のターゲットがあります。アクションには、カスタマイズ可能な遅延で物事が起こるように、待機タイマーを設定することもできます。最後に、アクションにはアクションタイプに固有の他のいくつかのフィールドを含めることもできます。

## 共有属性

| 値              |                                                   詳細                                                    |     特殊      |
|----------------|:-------------------------------------------------------------------------------------------------------:|:-----------:|
| `ターゲット`        |                          [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                          |      ❌      |
| `待機`           |                                    アクションを実行する前に待機する時間（ティック単位）を設定します                                     |      ❌      |
| `繰り返し間隔`       |           設定されたティックごとにアクションを繰り返すように設定します。これを使用しているが、時間が使用されていないスクリプトは、ラグを避けるためにモブの死亡時に終了します。            |      ❌      |
| `回数`           |                                           アクションが発生する回数を設定します                                            | `繰り返し間隔`が必要 |
| `スクリプト`        |                                        アクションの最後に実行されるスクリプトを設定します                                        |      ❌      |
| `1つのスクリプトのみ実行` |                                    `スクリプト`の中から1つをランダムに選び、それだけを実行します。                                    |      ❌      |
| `オフセット`        | このオプションは`ターゲット`の下にあります。ターゲットの位置をオフセットできます。オフセットは、`ZONE_FULL`または`ZONE_BORDER`でゾーンをターゲットとするアクションでは機能しません。 |      ❌      |
| `デバッグ`         |                  このオプションはスクリプトのアクションセクションの下にあります。trueに設定すると、アクションがあるエリアにバリアアイコンを表示します。                  |      ❌      |

## アクションタイプ

### ACTION_BAR_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値        |                          詳細                           | 必須 |                特殊                 |
|----------|:-----------------------------------------------------:|:--:|:---------------------------------:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |                 ❌                 |
| `sValue` |                         メッセージ                         | ✅  | `&`で[カラーコード](#color_codes)を使用できます |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

ボスの10ブロック以内にいるすべてのプレイヤーに、アクションバーにHello Worldと表示します。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

ターゲットにボスバーを追加します。

| 値        |                          詳細                           | 必須 |                特殊                 |
|----------|:-----------------------------------------------------:|:--:|:---------------------------------:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |                 ❌                 |
| `sValue` |                         メッセージ                         | ✅  | `&`で[カラーコード](#color_codes)を使用できます |
| `期間`     |                   ボスバーの持続時間（ティック単位）                   | ✅  |                 ❌                 |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

ボスの10ブロック以内にいるすべてのプレイヤーに、1秒間Hello Worldと表示するボスバーを設定します。

</div>

</details>

</div>

---

### DAMAGE

これは、エンティティを他のエンティティとしてダメージを与える方法です。

_注意：これはネイティブにEliteMobsダメージシステムを使用します！これは、攻撃からの通常の精鋭鎧の削減が表示されることを意味します。これについては、倍率セクションで詳しく説明します。_

| 値       |                          詳細                           | 必須 |
|---------|:-----------------------------------------------------:|:--:|
| `ターゲット` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `倍率`    |                        ダメージ倍率                         | ✅  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

ボスがプレイヤーに与える基本ダメージの半分にダメージを設定し、ダメージ軽減を考慮に入れます。

</div>

</details>

</div>

#### 倍率

効果のボスのダメージ倍率を設定します。

**重要**: パワーを簡単かつ自動的にスケールさせるために、ダメージは、ボスがプレイヤーを1回攻撃し、ボスの基本ダメージに倍率を掛けることで適用されます。

これは、1.0の倍率がボスからの通常のヒットと同じであることを意味します。2.0は通常の強さの2倍のヒットで、0.5は50％の強さです。

---

### MAKE_INVULNERABLE

ターゲットを無敵にします。

| 値       |                          詳細                           | 必須 |
|---------|:-----------------------------------------------------:|:--:|
| `ターゲット` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `無敵`    |                  ボスが無敵であるかどうかを設定します                   | ✅  |
| `期間`    |                  無敵の期間（ティック単位）を設定します                  | ❌  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

ボスを60ティック（3秒）無敵にします。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

ボスに与えられるダメージ、またはそのボスによってプレイヤーに与えられるダメージを変更します。これは、いくつかの特別な要件を持つ特別なアクションです。

| 値    |   詳細    | 必須 |
|------|:-------:|:--:|
| `倍率` | ダメージ倍率。 | ✅  |

このアクションは特別で、ダメージイベントのイベントリスナーがあるスクリプト内にある必要があります。有効なダメージイベントは、ボスに与えられるダメージを減らすイベントの場合は`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`
であり、プレイヤーに与えられるダメージを減らすイベントの場合は`PlayerDamagedByEliteMobEvent`です。

このアクションを最大限に活用するには、`hasTag`
条件の仕組みを学ぶことを強くお勧めします。正しく使用すると、ボスを一時的に抵抗させたり、ダメージに対して弱くしたりすることができ、これはプレイヤーのバフ、ボスの位置、または他の多くの要因に関連付けることができます。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

プレイヤーが「CoolPlayer」というタグを持っている場合にのみ、プレイヤーがボスに与えるダメージを2倍に増やします

</div>

</details>

</div>

---

### MESSAGE

ターゲットにメッセージを送信します。

| 値        |                          詳細                           | 必須 |                特殊                 |
|----------|:-----------------------------------------------------:|:--:|:---------------------------------:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |                 ❌                 |
| `sValue` |                         メッセージ                         | ✅  | `&`で[カラーコード](#color_codes)を使用できます |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

ボスから10ブロック以内にいるすべてのプレイヤーにチャットメッセージを送信します。

</div>

</details>

</div>

---

### NAVIGATE

ボスを指定されたターゲットに移動（歩行）させます。

| 値         |                            詳細                             | 必須 | 特殊 |
|-----------|:---------------------------------------------------------:|:--:|:--:|
| `ターゲット`   |   [詳細はこちら]($language$/elitemobs/elitescript_targets.md)   | ✅  | ❌  |
| `最終ターゲット` |   [詳細はこちら]($language$/elitemobs/elitescript_targets.md)   | ✅  | ❌  |
| `速度`      |       ボスのナビゲーション速度を設定します。`1.0`は、設定ファイルで設定されたボスの値です。       | ❌  | ❌  |
| `bValue`  | ナビゲーションが失敗した場合に、ボスを`最終ターゲット`に強制的にテレポートさせる必要があるかどうかを設定します。 | ❌  | ❌  |
| `期間`      |    ボスが諦める前にナビゲートしようとする時間。ティック単位で設定します。デフォルトは100ティックです。    | ✅  | ❌  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target: 
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

ボスを、プレイヤーがボスを攻撃したときに立っていた場所に移動させます。

</div>

</details>

</div>

---

### PLACE_BLOCK

ターゲットの場所にブロックを一定時間配置します。

| 値       |                                                  詳細                                                  | 必須 |
|---------|:----------------------------------------------------------------------------------------------------:|:--:|
| `ターゲット` |                        [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                         | ✅  |
| `素材`    | ブロックの[素材](#material)、[完全なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅  |
| `期間`    |                                           効果の持続時間（ティック単位）                                            | ❌  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

ボスを囲むガラスドームを6秒間作成します。

_注：期間が定義されていない場合、ブロックの配置は永続的です。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

Model Engineを使用してカスタムモデルの指定されたアニメーションを再生します。アニメーションを実行するターゲットにModel
Engineと有効なカスタムモデルが必要です。

| 値        |                          詳細                           | 必須 |
|----------|:-----------------------------------------------------:|:--:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                   アニメーションの名前を設定します                    | ✅  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

ボスをfortnite_danceアニメーションを再生するように設定します。サーバーにModel
Engineがあり、ボスにカスタムの偽装があり、カスタムの偽装に「fortnite\_dance」という名前のアニメーションがある必要があります。

</div>

</details>

</div>

---

### PLAY_SOUND

ゲーム内のサウンドを再生します。

| 値        |                          詳細                           | 必須 |
|----------|:-----------------------------------------------------:|:--:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                   再生するサウンドの名前を設定します                   | ✅  |
| `ピッチ`    |                  再生するサウンドのピッチを設定します                   | ❌  |
| `ボリューム`  |                 再生するサウンドのボリュームを設定します                  | ❌  |

[すべてのMinecraftサウンドの便利なリストはこちらです！](https://www.digminecraft.com/lists/sound_list_pc.php)
これは、リソースパックからカスタムサウンドを再生することもできます。アクションがゾーンをターゲットにしている場合、アクションはそのゾーン内のすべてのブロックに対してサウンドを再生します。これにより、サウンドが通常よりもかなり大きくなる可能性があるため、ゾーンをターゲットにしている場合は音量を下げることを検討してください。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

ボス位置でMinecraftのベルからの共鳴音を再生します

</div>

</details>

</div>

---

### POTION_EFFECT

ターゲットに特定のポーション効果を適用します。

| 値            |                                                  詳細                                                  | 必須 |
|--------------|:----------------------------------------------------------------------------------------------------:|:--:|
| `ターゲット`      |                        [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                         | ✅  |
| `ポーション効果タイプ` | 効果タイプ、[有効なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅  |
| `増幅器`        |                                          ポーション効果レベル（0から開始）                                           | ✅  |
| `期間`         |                                            効果の期間（ティック単位）                                             | ✅  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

これにより、ボスの10ブロック以内にいるすべてのプレイヤーが2秒間（40ティック）浮揚します。

</div>

</details>

</div>

---

### PUSH

ターゲットを設定されたベクトルでプッシュします。

| 値        |                          詳細                           | 必須 |
|----------|:-----------------------------------------------------:|:--:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `vValue` |                  適用される速度のベクトルを設定します                   | ✅  |

*注：このアクションは相対ベクトルも受け入れます。それらの使用方法について詳しくは、[こちら]($language$/elitemobs/elitescript_relative_vectors.md)
をご覧ください。*

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

これにより、ボスから10ブロック以内にいるすべてのプレイヤーが0.3の力を使用して空中に押し上げられます。このアクションは、0.5秒ごと（10ティック）に10回繰り返されます。つまり、この効果は5秒間続きます（10回x
10ティック= 100ティック）。

これにより、プレイヤーがジャンプしているように見えます。

</div>

</details>

</div>

#### ベクトル

ベクトルは、`vValue: x,y,z`で定義されます。例として、ターゲットを上向きにプッシュしたい場合は、`vValue: 0,0.3,0`を実行できます。

---

### RUN_COMMAND_AS_CONSOLE

コマンドをコンソールとして実行します。

| 値        |                          詳細                           | 必須 |
|----------|:-----------------------------------------------------:|:--:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                       実行されるコマンド                       | ✅  |

**注：プレースホルダーが利用可能です！RUN_COMMAND_AS_PLAYERを確認してください。それらは同じです。**

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

コンソールに「Hello $bossName my name is $playerName. What is your level? $bossName my level is
$bossLevel」というメッセージをブロードキャストさせます。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

`
コマンドを`player`として実行します。ターゲットがプレイヤーである必要があります。

| 値        |                          詳細                           | 必須 |
|----------|:-----------------------------------------------------:|:--:|
| `ターゲット`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                       実行されるコマンド                       | ✅  |

**注：RUN_COMMAND_AS_PLAYERおよびRUN_COMMAND_AS_CONSOLEは、次のプレースホルダーを使用します。**

| プレースホルダー      |    詳細     |          特殊           |
|---------------|:---------:|:---------------------:|
| `$playerName` | プレイヤーの表示名 | ターゲットはプレイヤーである必要があります |
| `$playerX`    | プレイヤーのX座標 | ターゲットはプレイヤーである必要があります |
| `$playerY`    | プレイヤーのY座標 | ターゲットはプレイヤーである必要があります |
| `$playerZ`    | プレイヤーのZ座標 | ターゲットはプレイヤーである必要があります |
| `$bossName`   | プレイヤーの表示名 | ターゲットはプレイヤーである必要があります |
| `$bossX`      |  ボスのX座標   |           ❌           |
| `$bossY`      |  ボスのY座標   |           ❌           |
| `$bossZ`      |  ボスのZ座標   |           ❌           |
| `$bossLevel`  |  ボスのレベル   |           ❌           |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
```

```yaml
        targetType: ZONE_FULL
      particles:
      - particle: FLAME
        x: 0
        y: 0
        z: 0
        amount: 1
      - particle: SMOKE_LARGE
        x: 0
        y: 0
        z: 0
        amount: 1
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Spawns one flame and one large smoke particle in the selected zone.

</div>

</details>

</div>

---

### TELEPORT

Teleports the target.

| Values        |                            Details                            | Mandatory |
|---------------|:-------------------------------------------------------------:|:---------:|
| `Target`      | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `FinalTarget` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `bValue`      | Sets if the teleport should keep the target's look direction. |     ❌     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 20
```

When the boss gets hit, it will teleport to one of the players within 20 blocks range.

</div>

</details>

</div>

---

### WARD

Places a ward effect at a location. This ward effect does not damage or harm other entities, its a purely visual effect.

| Values     |                                            Details                                             | Mandatory |
|------------|:----------------------------------------------------------------------------------------------:|:---------:|
| `Target`   |                 [More info here]($language$/elitemobs/elitescript_targets.md)                  |     ✅     |
| `duration` |                                Duration of the effect, in ticks                                |     ✅     |
| `radius`   |                                       Radius of the ward                                       |     ✅     |
| `particle` |                         [Particle Type](#particles) that will be used                          |     ✅     |
| `coverage` | Sets how far apart will particles be, the higher the number, the more spread out they will be. |     ❌     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: WARD
      Target:
        targetType: SELF
      radius: 5
      duration: 120
      particle: FLAME
```

<div align="center">

![elitescript_actions_ward.jpg](../../../img/wiki/elitescript_actions_ward.jpg)

</div>

Places a flame ward around the boss with a radius of 5 that will last 6 seconds.

</div>

</details>

</div>

---

## Color Codes

These are color codes you can use in chat/action bar messages:

| Code | Color       | Code | Color         |
|------|-------------|------|---------------|
| &0   | Black       | &a   | Lime          |
| &1   | Dark Blue   | &b   | Aqua          |
| &2   | Dark Green  | &c   | Red           |
| &3   | Dark Aqua   | &d   | Fuchsia       |
| &4   | Dark Red    | &e   | Yellow        |
| &5   | Dark Purple | &f   | White         |
| &6   | Gold        | &k   | Magic         |
| &7   | Gray        | &l   | Bold          |
| &8   | Dark Gray   | &m   | Strikethrough |
| &9   | Blue        | &n   | Underline     |
|      |             | &o   | Italic        |
|      |             | &r   | Reset         |

---

## Material

Materials are defined by strings, such as `DIRT`, `STONE`, `GLASS`, `REDSTONE_BLOCK`, etc.

Here is a [full list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) of available materials!
```yaml
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: WEAKNESS
      amplifier: 1
      duration: 200
```

This will make the boss message all the online players, message the player that damaged the boss, and make all the
players around the boss weak for 10 seconds (200 ticks).

---

# Advanced Example

Here is a complicated example using most of the elements detailed above.

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&6Prepare to be boxed in!"
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 600
      material: GLASS
      Conditions:
        hasTags:
        - "start"
    - action: WARD
      Target:
        targetType: SELF
      duration: 600
      radius: 5
      particle: FLAME
      Conditions:
        hasTags:
        - "start"
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: SMOKE_NORMAL
          speed: 0.1
        - particle: FLAME
          speed: 0.2
      amount: 1
      repeatEvery: 10
      Conditions:
        hasTags:
        - "start"
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 100
      Conditions:
        hasTags:
        - "start"
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: SELF
      sValue: my_minion
      Conditions:
        hasTags:
        - "start"
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - not_start
      Conditions:
        hasTags:
        - "start"
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - start
      Conditions:
        hasTags:
        - "start"   
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - start
      Conditions:
        hasTags:
        - not_start 
    Zone:
      shape: CUBE
      radius: 10
      Target:
        targetType: SELF
    Conditions:
      hasTags:
      - "start"
```

This will make the boss message all nearby players, surround himself with a glass box, a ward of fire and smoke, making
himself invulnerable for 5 seconds. It also summons a minion, adds a tag and removes another tag.

After this is done, the boss will have a "start" tag and not the tag "not_start" allowing this sequence of events to
only run once, unless another script adds the tag back!
