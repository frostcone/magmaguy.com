# エリートスクリプトのアクション

アクションはスクリプトの中核です。これらはスクリプトが何をするかを決定し、カスタム間隔を設定することができます。

アクションは常に、実行するアクションのタイプで始まります。異なるアクションタイプは異なる機能を提供します。さらに、すべてのアクションにはターゲットまたはターゲットがあります。アクションには待機タイマーを設定して、カスタマイズ可能な遅延で物事が起こるようにすることもできます。最後に、アクションにはアクションタイプに固有の他のいくつかのフィールドを設定することもできます。

## 共有属性

| 値             |                                                                                 詳細                                                                                  | 特別 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      アクションを実行する前に待機する時間を設定 (ティック数)                                                      | ❌ |
| `repeatEvery`      |        設定されたティック数ごとにアクションを繰り返すように設定します。これを使用しているがtimesを使用していないスクリプトは、ラグを避けるためにモブが死亡すると終了します。         | ❌ |
| `times`            |                                                            アクションが実行される回数を設定します。                                                            | `repeatEvery` が必要です |
| `scripts`          |                                                         アクションの最後に実行されるスクリプトを設定します。                                                          | ❌ |
| `onlyRunOneScript` |                                                       `scripts`の中から1つをランダムに選択し、それだけを実行します。                                                       | ❌ |
| `offset`           | このオプションは `Target` の下にあります。ターゲットの位置をオフセットできます。オフセットは `ZONE_FULL` または `ZONE_BORDER` のゾーンをターゲットにしているアクションでは機能しません。 | ❌ |
| `debug`           | このオプションはスクリプトのアクションセクションの下にあります。trueに設定すると、アクションがある場所にバリアアイコンが表示されます。 | ❌ |

## アクションの種類

### ACTION_BAR_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値 |                            詳細                            | 必須 | 特別 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&` で [カラーコード](#color_codes) を使用できます |

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

ボスから10ブロック以内のプレイヤーのアクションバーにHello Worldと表示します。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

ターゲットにボスバーを追加します。

| 値 |                            詳細                            | 必須 |                   特別                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            メッセージ                            | ✅ | `&` で [カラーコード](#color_codes) を使用できます |
| `duration` |               ボスバーの持続時間（ティック数）               | ✅ |                      ❌                       |

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

ボスから10ブロック以内のプレイヤーに、1秒間Hello Worldと表示するボスバーを設定します。

</div>

</details>

</div>

---

### DAMAGE

これは、他のエンティティとしてエンティティにダメージを与える方法です。

_注: これはネイティブにEliteMobsダメージシステムを使用します。これは、攻撃による通常の精鋭アーマーの減少が見られることを意味します。これについては、倍率のセクションで詳しく説明します。_

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       ダメージ倍率                       | ✅ |

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

ダメージを、ダメージ軽減を考慮して、ボスがプレイヤーに与えるベースダメージの半分に設定します。

</div>

</details>

</div>

#### 倍率

効果に対するボスのダメージ倍率を設定します。

**重要**: パワーを簡単に自動的にスケールさせるために、ダメージは、ボスがプレイヤーを1回攻撃し、ボスの基本ダメージに倍率を掛けることによって適用されます。

これは、1.0の倍率がボスからの通常のヒットと同じであることを意味します。2.0は通常の強さの2倍のヒットであり、0.5は50%の強さです。

---

### MAKE_INVULNERABLE

ターゲットを無敵にします。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               ボスが無敵かどうかを設定                | ✅ |
| `duration` |       無敵の持続時間（ティック数）を設定        | ❌ |

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

ボスに与えるダメージ、またはそのボスがプレイヤーに与えるダメージを変更します。これはいくつかの特別な要件を持つ特別なアクションです。

| 値 | 詳細 | 必須 |
| --- | :-: | :-: |
| `multiplier` | ダメージ倍率。 | ✅ |

このアクションは特別であり、ダメージイベントのイベントリスナーを持つスクリプト内にある必要があります。以下は有効なダメージイベントです。ボスに与えるダメージを減らすイベントの場合は`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`、プレイヤーに与えるダメージを減らすイベントの場合は`PlayerDamagedByEliteMobEvent`。

このアクションを最大限に活用するために、`hasTag`条件がどのように機能するかを学ぶことを強くお勧めします。正しく使用すると、ボスを一時的に抵抗させたり、ダメージを弱くしたりすることが可能になり、これをプレイヤーのバフ、ボスの位置、その他の多くの要因に関連付けることができます。

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

プレイヤーが "CoolPlayer" というタグを持っている場合にのみ、ボスに与えるプレイヤーのダメージを2倍にします。

</div>

</details>

</div>

---

### MESSAGE

ターゲットにメッセージを送信します。

| 値 |                            詳細                            | 必須 | 特別 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&` で [カラーコード](#color_codes) を使用できます |

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

ボスから10ブロック以内のすべてのプレイヤーにチャットメッセージを送信します。

</div>

</details>

</div>

---

### NAVIGATE

ボスを指定されたターゲットにナビゲート（歩行）させます。

| 値 |                            詳細                            | 必須 | 特別 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | ボスのナビゲーション速度を設定します。`1.0` は、configで設定されているボスの値です。 | ❌ | ❌ |
| `bValue` | ナビゲーションが失敗した場合に、ボスを強制的に`FinalTarget`にテレポートさせるかどうかを設定します。 | ❌ | ❌ |
| `duration` | ボスが諦める前にナビゲートを試みる時間。ティック単位で設定します。デフォルトは100ティックです。 | ✅ | ❌ |

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

ボスがプレイヤーがボスを攻撃したときに立っていた場所をナビゲートさせます。

</div>

</details>

</div>

---

### PLACE_BLOCK

ターゲットの場所に、指定された期間ブロックを配置します。

| 値 |                                                         詳細                                                         | 必須 |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | ブロックの[Material](#material)。[完全なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              効果の持続時間 (ティック単位)                                               | ❌ |

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

ボスを囲むガラスのドームを配置し、6秒間持続します。

_注: 持続時間が定義されていない場合、ブロックの配置は永続的です。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

Model Engineを使用して、カスタムモデルの指定されたアニメーションを再生します。アニメーションを実行するターゲットにModel Engineと有効なカスタムモデルが必要です。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                アニメーションの名前を設定                 | ✅ |

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

ボスにfortnite_danceアニメーションを再生させます。サーバーにModel Engine、ボスにカスタム変装、カスタム変装に "fortnite\_dance" という名前のアニメーションが必要です。

</div>

</details>

</div>

---

### PLAY_SOUND

ゲーム内のサウンドを再生します。

| 値   |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            再生するサウンドの名前を設定            |     ✅     |
| `pitch`  |           再生するサウンドのピッチを設定            |     ❌     |
| `volume` |           再生するサウンドの音量を設定           |     ❌     |

[こちらがすべてのMinecraftサウンドの便利なリストです!](https://www.digminecraft.com/lists/sound_list_pc.php) これはリソースパックからのカスタムサウンドを再生することもできることを覚えておいてください。
アクションがゾーンをターゲットにしている場合、アクションはそのゾーン内のすべてのブロックに対してサウンドを再生します。これにより、サウンドが通常よりもかなり大きくなる可能性があるため、ゾーンをターゲットにしている場合は音量を下げることを検討してください。

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

ボスの場所でMinecraftのベルから共鳴音を再生します。

</div>

</details>

</div>

---

### POTION_EFFECT

特定のポーション効果をターゲットに適用します。

| 値 |                                                       詳細                                                       | 必須 |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 効果タイプ。[有効なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          ポーション効果レベル（0から開始）                                          | ✅ |
| `duration` |                                           効果の持続時間（ティック数）                                            | ✅ |

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

ボスから10ブロック以内のプレイヤーを2秒間（40ティック）浮揚させます。

</div>

</details>

</div>

---

### PUSH

ターゲットを設定されたベクトルでプッシュします。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       適用される速度のベクトルを設定        | ✅ |

*注: このアクションは相対ベクトルも受け入れます。それらの使用方法の詳細については、[こちら]($language$/elitemobs/elitescript_relative_vectors.md)をご覧ください。*

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

これにより、ボスから10ブロック以内のすべてのプレイヤーを0.3の力で空中に押し上げます。このアクションは0.5秒ごと(10ティック)に10回繰り返されます。言い換えれば、これにより、この効果は5秒間 (10回 x 10ティック = 100ティック) 持続します。

これにより、プレイヤーがジャンプしているように見えます。

</div>

</details>

</div>

#### ベクトル

ベクトルは `vValue: x,y,z` で定義されます。例として、ターゲットを上向きにプッシュしたい場合は、`vValue: 0,0.3,0` を実行できます。

---

### RUN_COMMAND_AS_CONSOLE

コンソールとしてコマンドを実行します。

| 値 |                             詳細                             | 必須 |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [詳細はこちら]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    実行するコマンド                     | ✅ |

**注: プレースホルダーが利用可能です! RUN_COMMAND_AS_PLAYER を確認してください。それらは同じです。**

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
      sValue: say こんにちは $bossName 私の名前は$playerNameです。あなたのレベルは？ $bossName 私のレベルは$bossLevelです。
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

コンソールでメッセージ「こんにちは $bossName 私の名前は$playerNameです。あなたのレベルは？ $bossName 私のレベルは$bossLevelです」をブロードキャストさせます。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

プレイヤーとしてコマンドを実行します。ターゲットがプレイヤーである必要があります。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   実行するコマンド                    | ✅ |

**注: RUN_COMMAND_AS_PLAYERとRUN_COMMAND_AS_CONSOLEは、次のプレースホルダーを使用します。**

| プレースホルダー | 詳細 | 特別 |
| --- | :-: | :-: |
| `$playerName` | プレイヤーの表示名 | ターゲットがプレイヤーである必要があります |
| `$playerX` | プレイヤーのX座標 | ターゲットがプレイヤーである必要があります |
| `$playerY` | プレイヤーのY座標 | ターゲットがプレイヤーである必要があります |
| `$playerZ` | プレイヤーのZ座標 | ターゲットがプレイヤーである必要があります |
| `$bossName` | プレイヤーの表示名 | ターゲットがプレイヤーである必要があります |
| `$bossX` | ボスのX座標 | ❌ |
| `$bossY` | ボスのY座標 | ❌ |
| `$bossZ` | ボスのZ座標 | ❌ |
| `$bossLevel` | ボスのレベル | ❌ |

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
        targetType: ZONE_BORDER
      particles:
      - amount: 10
        speed: 0
        particle: FLAME
      - amount: 1
        speed: 0.05
        particle: SMOKE_NORMAL
      - amount: 0
        x: 0.1
        y: 0.1
        z: 0.1
        speed: 0
        particle: DUST_COLOR_TRANSITION
        red: 255
        green: 0
        blue: 0
        toRed: 0
        toGreen: 255
        toBlue: 0
      repeatEvery: 2
      times: 20
```

<div align="center">

![elitescript_actions_particles.jpg](../../../img/wiki/elitescript_actions_particles.jpg)

</div>

Creates a particle system on the zone border. The first particle will be a flame that will be repeated 10 times. The second particle will be a normal smoke that will spawn once. The third particle will create a dust color transition particle. Since the amount is 0, this will act as the velocity and will have a red color that will turn green.

</div>

</details>

</div>

---

### TELEPORT

Teleports the boss to a location.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                     Sets if the teleport is silent                     | ❌ |

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
        targetType: NEARBY_PLAYERS
        range: 10
```

When an elite gets damaged it will teleport to any player within 10 blocks.

</div>

</details>

</div>

---

### REMOVE_POTION_EFFECT

Removes a specific potion effect from the target(s).

| Values |                                                       Details                                                       | Mandatory |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [More info here]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Effect type, [valid list is here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |

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
    - action: REMOVE_POTION_EFFECT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
```

This will remove any levitation effect from any player within 10 blocks from the boss.

</div>

</details>

</div>

---
### ADD_TAG
Adds a tag to the target(s).

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Sets the name of the tag                | ✅ |
| `duration` |              Sets the tag duration in ticks               | ❌ |

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
    - action: ADD_TAG
      Target:
        targetType: SELF
      sValue: "CoolBoss"
      duration: 600
```

Gives the boss the tag "CoolBoss" for 30 seconds.

</div>

</details>

</div>

---

### REMOVE_TAG
Removes a tag from the target(s).

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Sets the name of the tag to remove               | ✅ |

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
    - action: REMOVE_TAG
      Target:
        targetType: SELF
      sValue: "CoolBoss"
```

Removes the "CoolBoss" tag from the boss.

</div>

</details>

</div>

---
### SET_PERSISTENCE

Sets if the mob has persistence. In Minecraft, mobs that do not have persistence will despawn on chunk unload.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 Sets whether the boss has persistence                 | ✅ |

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
    - action: SET_PERSISTENCE
      Target:
        targetType: SELF
      bValue: true
```

Sets the boss to have persistence.

</div>

</details>

</div>

---

### SET_MOB_SILENT

Sets if the mob is silent. In Minecraft, mobs that are silent do not make noises.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 Sets whether the boss is silent                 | ✅ |
| `duration` |               Sets the of the value set (ticks)               | ❌ |

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
    - action: SET_MOB_SILENT
      Target:
        targetType: SELF
      bValue: true
      duration: 40
```

Sets the boss to be silent for 2 seconds (40 ticks).

</div>

</details>

</div>

---

### MATERIAL
List of some of the valid material types
- AIR
- STONE
- GRASS_BLOCK
- DIRT
- COBBLESTONE
- OAK_PLANKS
- SPRUCE_PLANKS
- BIRCH_PLANKS
- JUNGLE_PLANKS
- ACACIA_PLANKS
- DARK_OAK_PLANKS
- BEDROCK
- SAND
- GRAVEL
- GOLD_ORE
- IRON_ORE
- COAL_ORE
- OAK_LOG
- SPRUCE_LOG
- BIRCH_LOG
- JUNGLE_LOG
- ACACIA_LOG
- DARK_OAK_LOG
- SPONGE
- GLASS
- LAPIS_ORE
- LAPIS_BLOCK
- DISPENSER
- SANDSTONE
- NOTE_BLOCK
- POWERED_RAIL
- DETECTOR_RAIL
- STICKY_PISTON
- PISTON
- WOOL
- GOLD_BLOCK
- IRON_BLOCK
- BRICKS
- TNT
- BOOKSHELF
- MOSSY_COBBLESTONE
- OBSIDIAN
- TORCH
- END_STONE
- NETHERRACK
- SOUL_SAND
- GLOWSTONE
- NETHER_BRICKS
- QUARTZ_BLOCK
- REDSTONE_ORE
- ICE
- PACKED_ICE
- BLUE_ICE
- CONCRETE
- CONCRETE_POWDER
- PURPUR_BLOCK
- MAGMA_BLOCK
- BONE_BLOCK
- BLACKSTONE
- GILDED_BLACKSTONE
- POLISHED_BLACKSTONE
- ANDESITE
- DIORITE
- GRANITE
- CALCITE
- TUFF
- DRIPSTONE_BLOCK
- DEEPSLATE
- COPPER_ORE
- IRON_ORE
- GOLD_ORE
- REDSTONE_ORE
- LAPIS_ORE
- DIAMOND_ORE
- COAL_ORE
- EMERALD_ORE
- COPPER_BLOCK
- RAW_COPPER_BLOCK
- RAW_GOLD_BLOCK
- RAW_IRON_BLOCK
- AMETHYST_BLOCK
- SMOOTH_STONE
- MUD
- MUD_BRICK
- TERRACOTTA
- GLAZED_TERRACOTTA
- CRYING_OBSIDIAN
- ANCIENT_DEBRIS
- END_ROD
- SEA_LANTERN
- SHROOMLIGHT
- TARGET
- BARREL
- GRINDSTONE
- BREWING_STAND
- SMOKER
- BLAST_FURNACE
- LECTERN
- LOOM
- SMITHING_TABLE
- CARTOGRAPHY_TABLE
- FLETCHING_TABLE
- STONECUTTER
- BEACON
- ENCHANTING_TABLE
- ANVIL
- CHIPPED_ANVIL
- DAMAGED_ANVIL
- CAULDRON
- COMPOSTER
- JUKEBOX
- CAMPFIRE
- SOUL_CAMPFIRE
- SCULK
- SCULK_VEIN
- SCULK_CATALYST
- SCULK_SHRIEKER
- BAMBOO_BLOCK
- BAMBOO_PLANKS
- CHERRY_PLANKS
- CHERRY_LOG
- CHERRY_WOOD
- STRIPPED_CHERRY_LOG
- STRIPPED_CHERRY_WOOD
- PINK_PETALS
- PITCHER_PLANT
- TORCHFLOWER
- MANGROVE_LOG
- STRIPPED_MANGROVE_LOG
- MANGROVE_PLANKS
- MUDDY_MANGROVE_ROOTS
- MANGROVE_ROOTS
- FROGSPAWN
- PACKED_MUD
- SUSPICIOUS_SAND
- SUSPICIOUS_GRAVEL

---

### Color Codes
You can use the following color codes using the ampersand `&` character

- `&0` - Black
- `&1` - Dark Blue
- `&2` - Dark Green
- `&3` - Dark Aqua
- `&4` - Dark Red
- `&5` - Dark Purple
- `&6` - Gold
- `&7` - Gray
- `&8` - Dark Gray
- `&9` - Blue
- `&a` - Green
- `&b` - Aqua
- `&c` - Red
- `&d` - Light Purple
- `&e` - Yellow
- `&f` - White
- `&k` - Obfuscated (Magic)
- `&l` - Bold
- `&m` - Strikethrough
- `&n` - Underline
- `&o` - Italic
- `&r` - Reset

Here is an example:

`&1This &a&lmessage &cis &bvery &dcolorful`

This will result in:

**This** message is very colorful
(The "This" will be dark blue, the "message" will be bold and green, the "is" will be red, the "very" will be aqua and the "colorful" will be light purple)
```yaml
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName.
```

<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

プレイヤーに「Hello $bossName my name is $playerName.」というsayコマンドを実行させます。つまり、「Hello $bossName my name is $playerName.」と言うだけです。

</div>

</details>

</div>

---

### RUN_SCRIPT

これは単に`scripts`で定義されたスクリプトを実行します。どのアクションでもこれを行うことができ、このアクションは、単にそれだけを実行したい場合の便宜的なアクションとしてのみ存在します。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   実行されるスクリプト                    | ✅ |
| `onlyRunOneScript` |         リストから1つのスクリプトのみを実行します。           | ❌ |

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
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Example1
      - Example2
  Example1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Example2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cクールなボス!: &fやり返したぞ!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

エリートがダメージを受けると、RUN_SCRIPTを実行し、Example1およびExample2スクリプトを実行します。

Example1スクリプトは、ボスから10ブロック以内のすべてのプレイヤーにダメージを与えます。
<br>Example2スクリプトは、ボスから10ブロック以内のすべてのプレイヤーにメッセージ「&cクールなボス!: &fやり返したぞ!」を送信します。

</div>

</details>

</div>

---

### SCALE

エンティティをスケールできます。

| 値   |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `scale` |            スケーリングサイズを設定                               |     ✅     |
| `duration` |           スケーリング効果が持続する時間を設定      |     ❌     |

スケーリングする場合、1.0 はデフォルトのサイズを表します。エンティティを大きくするには、値を大きくします（例：`1.2`）。エンティティを小さくするには、値を小さくします（例：`0.8`）。

**注: これはプレイヤーをターゲットにできるため、使用方法に注意してください。**

**注: ボス設定の `scale` 設定を使用してすでにボスをスケールしている場合、持続時間設定は、設定の最初の `scale` 値に関係なく、ボスをデフォルトのサイズである `1.0` にリセットします。**

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedEvent
    Actions:
    - action: SCALE
      Target:
        targetType: SELF
      scale: 0.3
      duration: 60
```

モブが攻撃されると、モブは非常に小さく縮小します。60ティック（3秒）後、デフォルトのサイズ（`1.0`）に戻ります。

</div>

</details>

</div>

---

### SET_FACING

ボスを特定の方向に向かせます。主にアニメーションと一緒に使用されます。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `vValue` | ボスが向くべき方向。X、Y、Z | ❌ |
| `RelativeVector` |      相対ベクトルを使用して、ボスをターゲットに向かせます。      | ❌ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      vValue: 1,0,0
```

ボスを東向きにします。

</div>


<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: NEARBY_PLAYERS
          range: 20
```

ボスを20ブロック以内のプレイヤーに向かせます。

</div>

</details>

</div>

---

### SET_MOB_AI

モブがAIを持っているかどうかを設定します。Minecraftでは、AIのないモブは移動も攻撃もしません。それらはまだダメージを受けることができますが、それらにダメージを与えてもノックバックすることはありません。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 ボスがAIを持っているかどうかを設定                  | ✅ |
| `duration` |               設定値の持続時間（ティック数）を設定               | ❌ |

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
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

ボスを2秒間（40ティック）AIを持たないように設定します。

</div>

</details>

</div>

---

### SET_MOB_AWARE

モブが認識しているかどうかを設定します。Minecraftでは、認識していないモブは新しい場所に移動したり、攻撃したりしません。それらはまだダメージを受けることができ、ノックバックされます。

注意点として、モブが認識を失ったときにすでに場所に移動していた場合、完全に停止して移動しなくなる前に、その場所への移動を完了します。

これは、AIのないモブとは異なり、認識のないモブを定義された場所に移動するために使用できることを意味します。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   認識しているかどうかを設定                   | ✅ |
| `duration` |               設定値の持続時間（ティック数）を設定               | ❌ |

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
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

ボスを2秒間（40ティック）認識しないように設定します。

</div>

</details>

</div>

---

### SET_ON_FIRE

エンティティを指定された期間燃え上がらせます。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 効果の持続時間 (ティック単位)                  | ✅ |

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
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

ボスから10ブロック以内のすべてのプレイヤーを3秒間（60ティック）炎上させます。

</div>

</details>

</div>

---

### SET_TIME

ターゲットが存在する世界のゲーム内時間を設定します。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         時間を設定                         | ✅ |

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
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

ボスが攻撃されると、ボスが存在する世界の時間を10000ティックに設定します。

</div>

</details>

</div>

---

### SET_WEATHER

ターゲットが存在する世界の天気を設定された時間設定します。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     天候タイプを設定                     | ✅ |
| `duration` |           天候パターンの持続時間を設定            | ✅ |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

ボスのいる世界の天気を、次の1分間雨/雪にするように設定します。

*注: 効果が発動するまでに時間がかかります。*

</div>

</details>

</div>

#### 天候

以下は有効な天候パターンです。

- `CLEAR` - 天候を晴れに設定します
- `PRECIPITATION` - バイオーム、場所の高さ、その他のバニラMinecraftの考慮事項に応じて、天候を雨/雪に設定します。
- `THUNDER` - 天候を雷雨に設定します

---

### SPAWN_FIREWORKS

花火を生成します。

| 値 |                                                                                                            詳細                                                                                                            | 必須 |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                 [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                           花火ロケットの速度を設定                                                                                           | ✅ |
| `flicker` |                                                                                          花火の粒子がちらつくかどうかを設定                                                                                          | ❌ |
| `withTrail` |                                                                                         花火ロケットが軌跡を残すかどうかを設定                                                                                        | ❌ |
| `power` |                                                                                                花火のパワーを設定                                                                                                | ❌ |
| `fireworkEffects` |                                                                     花火の爆発までの時間に関連する、花火の効果を設定                                                                     | ✅ |
| `fireworkEffectType` |                                                 花火の形状を[このリストから](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)設定します。                                                 | ❌ |
| `fireworkEffectTypes` | 花火の形状を[このリストから](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)設定します。これは形状のリストです - 形状のリストが必要な場合は、`fireworkEffectType`を使用しないでください。 [1] | ❌ |

[1] 花火に複数の形状を使用する場合、各形状は同じ位置にある色のリストの色を使用します。以下の例を確認してください。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [オレンジ, 赤]
      - [黄, 青]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

x=1、y=1.5、z=0でオフセットされたボスの場所に花火を生成します。花火にx=.5、y=-.35、z=1の速度を与えます。花火はちらついたり、軌跡を残したりしません。パワーは2に設定されているため、花火の爆発はその量だけ遅延します。

最後に、色のリストの2つのリストがあります。リスト1はオレンジと赤で、リスト2は黄色と青です。花火には2つの形状があります。BALL\_LARGEとSTARです。これは、BALL\_LARGE (要素1) がオレンジと赤の色 (リスト1) を使用し、STAR (要素2) が黄色と青の色 (リスト2) を使用することを意味します。

</div>

</details>

</div>

#### fireworkEffects

これらは、花火ロケットが表示する効果です。少なくとも1つの効果が必要です。以下は有効な効果です。

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

雷を落とします。これは視覚効果です。ダメージが必要な場合は、ダメージアクションを追加する必要があります。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |

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
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

ボスに5回、5ティックごとに雷を落とします。

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

落下するブロックをターゲットに生成します。視覚のみで、ブロックは配置されません。

| 値           |                                                                                      詳細                                                                                       | 必須 |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | 落下するブロックの[Material](#material)を設定します。[有効なタイプはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)を確認し、それらが有効なブロック素材であることを確認してください。 | ✅ |
| `landingScripts` |                                                            ブロックが落下したときに実行されるスクリプトのリストを設定                                                             | ✅ |
| `vValue`         | 落下するブロックの速度と方向を設定します。 | ✅ |

`landingScripts`は[`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script)と同じように機能しますが、特別なターゲットタイプ`LANDING_LOCATION`を受け入れることができます。

`LANDING_LOCATION`はスクリプトランナーによって継承されるため、着地点スクリプトをスクリプトランナーとしても機能させることができます。スクリプトを呼び出すアクションに待機時間を追加し、その後にスクリプト呼び出しを行うことができます。`LANDING_LOCATION`は、単一の特定の方法で割り当てられるため、継承された場合でも、常にターゲットの引数になります。

*注: このアクションは相対ベクトルも受け入れます。それらの使用方法の詳細については、[こちら]($language$/elitemobs/elitescript_relative_vectors.md)をご覧ください。*

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
    - action: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

ボスが攻撃されると、このスクリプトは、ボスの場所から10ブロック上、3ブロック隣に落下する石ブロックを生成します。

ブロックが落下すると、LandingScriptExampleスクリプトが実行され、ブロックが着地した場所に石ブロックが配置されます。
ブロックは10秒間（200ティック）そこにとどまり、その後消えます。

</div>

</details>

</div>

---

### SPAWN_PARTICLE

ターゲットに粒子を生成します。

**注: カバー率が設定されていない場合、カバー率はデフォルトで 0.3 に設定されます。**

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           生成される粒子のリスト            | ✅ |

#### 粒子

粒子には、次のような独自の設定があります。

| 値 | 詳細 | デフォルト | 特別 |
| --- | :-: | :-: | :-: |
| `x` | Xのオフセットを設定します | 0.01 | (1) |
| `y` | Yのオフセットを設定します | 0.01 | (1) |
| `z` | Zのオフセットを設定します | 0.01 | (1) |
| `amount` | 生成される粒子の量を設定します | 1 | (1) |
| `speed` | 粒子の速度を設定します | 0.01 | ❌ |
| `particle` | エンティティタイプを設定します | `FLAME` | [このリストから選択!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | 赤の値を設定します | `255` | (2) |
| `green` | 緑の値を設定します | `255` | (2) |
| `blue` | 青の値を設定します | `255` | (2) |
| `toRed` | 最終的な赤の値を設定します | `255` | (3) |
| `toGreen` | 最終的な緑の値を設定します | `255` | (3) |
| `toBlue` | 最終的な青の値を設定します | `255` | (3) |

_(1) `amount`が0に設定されている場合、`x`、`y`、および`z`は代わりに粒子の速度を設定します。_

_(2) `REDSTONE`、`DUST_COLOR_TRANSITION`、`SPELL_MOB`、および`SPELL_MOB_AMBIENT` `particle`の場合のみ_

_(3) `DUST_COLOR_TRANSITION` `particle`の場合のみ_

1つのSPAWN_PARTICLEスクリプトで複数の粒子を生成できることに注意することが重要です。その後、各粒子はSPAWN_PARTICLEアクション内で独自の設定フィールドを持つことができます。以下に例を示します。

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
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Actions:
    - action: SPAWN_PARTICLE
      Target:
```
