# エリートスクリプトアクション

アクションはスクリプトの中核です。これらは、スクリプトの動作を決定し、カスタム間隔を設定できるようにします。

アクションは常に、実行するアクションのタイプから始まります。アクションの種類によって、機能は異なります。さらに、すべてのアクションには1つ以上のターゲットがあります。アクションには、カスタマイズ可能な遅延で物事が発生することを確認するために、待機タイマーを設定することもできます。最後に、アクションには、アクションの種類に固有の他のいくつかのフィールドを設定することもできます。

## 共有属性

| 値                  |                                                                                 詳細                                                                                  | 特別 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                アクションを実行する前に待機する時間（ティック）を設定します                                                | ❌ |
| `repeatEvery`      |        設定されたティック数ごとにアクションを繰り返すように設定します。これが設定されているが、回数が使用されていないスクリプトは、ラグを回避するためにモブの死時に終了します。         | ❌ |
| `times`            |                                                            アクションが発生する回数を設定します                                                            | `repeatEvery` が必要です |
| `scripts`          |                                                         アクションの最後に実行されるスクリプトを設定します                                                          | ❌ |
| `onlyRunOneScript` |                                                      `scripts` の1つをランダムに選択して、それを実行するだけです。                                                       | ❌ |
| `offset`           | このオプションは `Target` の下にあります。ターゲットの場所をオフセットできます。オフセットは、`ZONE_FULL` または `ZONE_BORDER` でゾーンをターゲットにしているアクションでは機能しません。 | ❌ |

## アクションの種類

### ACTION_BAR_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値       |                            詳細                            | 必須 | 特別 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます |

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

ボスから10ブロック以内のすべてのプレイヤーに、Hello Worldと表示されるようにアクションバーを設定します。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

ターゲットにボスバーを追加します。

| 値        |                            詳細                            | 必須 |                   特別                    |
|-----------|:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue`  |                            メッセージ                            | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます |
| `duration` |               ボスバーの期間（ティック単位）               | ✅ |                      ❌                       |

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

ボスから10ブロック以内のすべてのプレイヤーに、Hello Worldと表示されるボスバーを1秒間設定します。

</div>

</details>

</div>

---

### DAMAGE

これは、他のエンティティとしてエンティティにダメージを与える方法です。

_注：これはネイティブでEliteMobsダメージシステムを使用します！これは、攻撃による通常のエリートアーマーの減少が表示されることを意味します。詳細については、乗数セクションを参照してください。_

| 値           |                            詳細                            | 必須 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       ダメージ乗数                       | ✅ |

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

ダメージの減少を考慮して、ボスがプレイヤーに与える基本ダメージの半分になるようにダメージを設定します。

</div>

</details>

</div>

#### multiplier

効果のボスのダメージ乗数を設定します。

**重要**：パワーを簡単かつ自動的にスケールできるようにするために、ボスがプレイヤーに1回攻撃し、ボスの基本ダメージに乗数を掛けてダメージを適用します。

これは、1.0の乗数はボスからの通常の攻撃と同じであることを意味します。2.0は通常の強さの2倍の攻撃で、0.5は50％の強さです。

---

### MAKE_INVULNERABLE

ターゲットを無敵にします。

| 値           |                            詳細                            | 必須 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               ボスが無敵かどうかを設定します               | ✅ |
| `duration`   |       無敵の期間（ティック単位）を設定します        | ❌ |

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
      duration: 60
```

ボスを60ティック（3秒）間無敵にします。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

ボスに与えられたダメージ、またはそのボスがプレイヤーに与えたダメージを変更します。これは、いくつかの特別な要件を持つ特別なアクションです。

| 値           | 詳細 | 必須 |
|-------------| :-: | :-: |
| `multiplier` | ダメージ乗数。 | ✅ |

このアクションは特別であり、ダメージイベントのイベントリスナーを持つスクリプト内にある必要があります。ボスのダメージを減らすイベントとして、有効なダメージイベントは次のとおりです：`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`。プレイヤーのダメージを減らすイベントとして、有効なダメージイベントは `PlayerDamagedByEliteMobEvent` です。

このアクションを最適に使用するには、`hasTag` 条件の仕組みを理解することを強くお勧めします。正しく使用すると、ボスが一時的にダメージに抵抗したり、ダメージを受けやすくなったりするようにすることができます。これは、プレイヤーのバフ、ボスの場所、または他の多くの要因に関連付けることができます。

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

プレイヤーが「CoolPlayer」というタグを持っている場合にのみ、プレイヤーがボスに与えるダメージを2倍に増やします。

</div>

</details>

</div>

---

### MESSAGE

ターゲットにメッセージを送信します。

| 値       |                            詳細                            | 必須 | 特別 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます |

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

ボスを指定されたターゲットに移動（歩行）させます。

| 値          |                            詳細                            | 必須 | 特別 |
|-------------|:-------------------------------------------------------------:| :-: | :-: |
| `Target`     | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity`   | ボスの移動速度を設定します。`1.0` は、設定で設定されたボスの値です。 | ❌ | ❌ |
| `bValue`     | ナビゲーションが失敗した場合、ボスを `FinalTarget` に強制的にテレポートする必要があるかどうかを設定します。 | ❌ | ❌ |
| `duration`   | ボスが諦める前にナビゲートしようとする期間。ティック単位で設定します。デフォルトは100ティックです。 | ✅ | ❌ |

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

指定された期間、ターゲットの場所にブロックを配置します。

| 値       |                                                         詳細                                                         | 必須 |
|----------|:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | ブロックの [素材](#material)、[完全なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              効果の期間（ティック単位）                                               | ❌ |

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

ボスの周りにガラスのドームを6秒間配置します。

_注：期間が定義されていない場合、ブロックの配置は永続的です。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

モデルエンジンを使用して、カスタムモデルの指定されたアニメーションを再生します。アニメーションを実行するターゲットに、モデルエンジンと有効なカスタムモデルが必要です。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                アニメーションの名前を設定します                 | ✅ |

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

ボスにfortnite_danceアニメーションを再生するように設定します。サーバーにモデルエンジンがあり、ボスにカスタムの変装があり、カスタムの変装に「fortnite\_dance」というアニメーションが必要です。

</div>

</details>

</div>

---

### PLAY_SOUND

ゲーム内のサウンドを再生します。

| 値        |                            詳細                            | 必須 |
|-----------|:-------------------------------------------------------------:|:---------:|
| `Target`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue`  |            再生するサウンドの名前を設定します            |     ✅     |
| `pitch`   |           再生するサウンドのピッチを設定します            |     ❌     |
| `volume`  |           再生するサウンドの音量を設定します           |     ❌     |

[Minecraftのすべてのサウンドの便利なリストはこちらです！](https://www.digminecraft.com/lists/sound_list_pc.php) これは、リソースパックのカスタムサウンドも再生できます。
アクションがゾーンをターゲットにしている場合、アクションはそのゾーンのすべてのブロックに対してサウンドを再生します。これにより、サウンドが通常よりもかなり大きくなる可能性があるため、ゾーンをターゲットにしている場合は音量を下げることを検討してください。

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

ボスの場所でMinecraftのベルの共鳴音を再生します

</div>

</details>

</div>

---

### POTION_EFFECT

ターゲットに特定のポーション効果を適用します。

| 値              |                                                       詳細                                                       | 必須 |
|-----------------|:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`        |                            [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 効果の種類、[有効なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier`     |                                          ポーション効果レベル（0から始まります）                                          | ✅ |
| `duration`      |                                           効果の期間（ティック単位）                                            | ✅ |

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

これにより、ボスから10ブロック以内のすべてのプレイヤーが2秒間（40ティック）浮遊します。

</div>

</details>

</div>

---

### PUSH

設定されたベクトルでターゲットを押します。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       適用される速度のベクトルを設定します        | ✅ |

*注：このアクションは相対ベクトルも受け入れます。使用方法の詳細については、[こちら]($language$/elitemobs/elitescript_relative_vectors.md) を参照してください。*

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

これにより、ボスから10ブロック以内のすべてのプレイヤーが、0.3の力で空中に押し出されます。このアクションは0.5秒（10ティック）ごとに10回繰り返されます。言い換えれば、この効果は5秒間持続します（10回×10ティック= 100ティック）。

これは、プレイヤーがジャンプしているように見せます。

</div>

</details>

</div>

#### vector

ベクトルは `vValue: x,y,z` で定義されます。たとえば、ターゲットを上に押したい場合は、`vValue: 0,0.3,0` を使用できます。

---

### RUN_COMMAND_AS_CONSOLE

コンソールとしてコマンドを実行します。

| 値       |                             詳細                             | 必須 |
|----------|:---------------------------------------------------------------:| :-: |
| `Target` |  [詳細はこちら]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    実行されるコマンド                     | ✅ |

**注：プレースホルダーが利用可能です！ RUN_COMMAND_AS_PLAYERを確認してください。同じです**

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

コンソールに「Hello $bossName my name is $playerName。What is your level？ $bossName my level is $bossLevel」というメッセージをブロードキャストさせます。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
`player` としてコマンドを実行します。ターゲットがプレイヤーである必要があります。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                    実行されるコマンド                     | ✅ |

**注：RUN_COMMAND_AS_PLAYERとRUN_COMMAND_AS_CONSOLEは、次のプレースホルダーを使用します。**

| プレースホルダー | 詳細 | 特別 |
| --- | :-: | :-: |
| `$playerName` | プレイヤーの表示名 | ターゲットはプレイヤーである必要があります |
| `$playerX` | プレイヤーのX座標 | ターゲットはプレイヤーである必要があります |
| `$playerY` | プレイヤーのY座標 | ターゲットはプレイヤーである必要があります |
| `$playerZ` | プレイヤーのZ座標 | ターゲットはプレイヤーである必要があります |
| `$bossName` | プレイヤーの表示名 | ターゲットはプレイヤーである必要があります |
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
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName.
```

<div align="center">



| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                出現させるエンティティの種類を設定します                | ✅ |

*注：このアクションは相対ベクトルも受け入れます。使用方法の詳細については、[こちら]($language$/elitemobs/elitescript_relative_vectors.md) を参照してください。*

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

ボスの場所にZOMBIEを出現させるようにボスを設定します。

</div>

</details>

</div>

---

### TAG

ボスまたはプレイヤーにタグを追加します。タグは、スクリプターが定義できる単なる文字列または単語です。これらは条件チェックを実行するためにのみ使用され、スクリプトで使用される以外の直接的なゲームプレイ効果はありません。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         タグを設定します                         | ✅ |
| `duration` |             タグの期間（ティック単位）を設定します             | ❌ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

ボスに「very_sus」という文字列でタグを付けます。これは、後でスクリプト条件を通じて確認できます。

**重要：** プレイヤーとエリートモブにのみタグを付けることができます。

</div>

</details>

</div>

---

### TELEPORT

ターゲットを定義された場所にテレポートします。

| 値          |                                                     詳細                                                     | 必須 |
|-------------|:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`     |     _誰が_テレポートされるかを設定します。[一般的なターゲット情報はこちら！]($language$/elitemobs/elitescript_targets.md)     | ✅ |
| `FinalTarget` | テレポートされる_場所_を設定します。[一般的なターゲット情報はこちら！]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location`   |                                                テレポート場所                                               | ✅ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

これは、ボスから10ブロック以内のすべてのプレイヤーをボスのスポーン場所にテレポートします。

</div>

</details>

</div>

#### location

プレイヤーがテレポートされる場所を設定します。形式は、標準のEliteMobs `world_name,x,y,z,pitch,yaw` です。

例

```yaml
location: world,0,64,0,0,0
```

これには、いくつかの特別な値があります。

- ワールド名が `same_as_boss` に設定されている場合、ワールド名はボスが現在いるワールドの名前に置き換えられます。

```yaml
location: same_as_boss,0,64,0,0,0
```

- x、y、zに一致する値が3つしかない場合、テレポートはボスの場所を基準とした場所に対して行われます。ボスが地域ボスである場合、場所はボスのスポーンポイントを基準とします。

---

### TITLE_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値        |                            詳細                            | 必須 | 特別 | デフォルト |
|-----------|:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title`    |                    タイトルメッセージを設定します                     | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます | ❌ |
| `subtitle` |                   サブタイトルメッセージを設定します                   | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます | ❌ |
| `duration` |            メッセージの期間（ティック単位）を設定します            | ✅ | ❌ | `0` |
| `fadeIn`   |                  フェードイン時間（ティック単位）を設定します                  | ❌ | ❌ | `0` |
| `fadeOut`  |                 フェードアウト時間（ティック単位）を設定します                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

ボスから10ブロック以内のすべてのプレイヤーに、サブタイトル「&2I am a subtitle！」が付いたタイトル「&2Hello World！」を表示するようにタイトルメッセージを設定します。

メッセージは、フェードインとフェードアウトのアニメーションを含めて、画面に8秒間（120 + 20 + 20 = 160ティック）表示されます。

</div>

</details>

</div>

---

### UNTAG

ボスからタグを削除します。タグの仕組みについては、`TAG` を確認してください。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         タグを設定します                         | ✅ |
| `duration` |      タグの削除期間（ティック単位）を設定します      | ❌ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  例2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

ボスから「very_sus」タグを削除します。これは、後でスクリプト条件を通じて確認できます。

</div>

</details>

</div>

---

### VISUAL_FREEZE

プレイヤーにフリーズビジュアルエフェクトを与え、それに関連するダメージを与えます。効果がすぐに消えないようにするには、これを繰り返すスクリプトと組み合わせる必要があります。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 効果の期間（ティック単位）                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZEは現在機能していないため、スクリーンショットを撮ることができませんでした

</div>

ボスから10ブロック以内のすべてのプレイヤーに、3秒間（60ティック）フリーズビジュアルを与えます。

</div>

</details>

</div>

---

# 複数のアクション

イベントが発生したときに、複数のメッセージを送信したり、異なるアクションを順番に実行したりするなど、複数のアクションを一度に実行したい場合があります。これは簡単にできます！例にポーション効果アクションを追加してみましょう。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: オンラインのすべてのプレイヤーにメッセージを送信しています！
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: ボスを攻撃したプレイヤーにメッセージを送信しています！
```

</div>

</details>

</div>



| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                出現させるエンティティの種類を設定します                | ✅ |

*注：このアクションは相対ベクトルも受け入れます。使用方法の詳細については、[こちら]($language$/elitemobs/elitescript_relative_vectors.md) を参照してください。*

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

ボスの場所に ZOMBIE を出現させるようにボスを設定します。

</div>

</details>

</div>

---

### TAG

ボスまたはプレイヤーにタグを追加します。タグは、スクリプターが定義できる単なる文字列または単語です。これらは条件チェックを実行するためにのみ使用され、スクリプトで使用される以外の直接的なゲームプレイ効果はありません。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         タグを設定します                         | ✅ |
| `duration` |             タグの期間（ティック単位）を設定します             | ❌ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

ボスに「very_sus」という文字列でタグを付けます。これは、後でスクリプト条件を通じて確認できます。

**重要：** プレイヤーとエリートモブにのみタグを付けることができます。

</div>

</details>

</div>

---

### TELEPORT

ターゲットを定義された場所にテレポートします。

| 値          |                                                     詳細                                                     | 必須 |
|-------------|:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`     |     _誰が_テレポートされるかを設定します。[一般的なターゲット情報はこちら！]($language$/elitemobs/elitescript_targets.md)     | ✅ |
| `FinalTarget` | テレポートされる_場所_を設定します。[一般的なターゲット情報はこちら！]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location`   |                                                テレポート場所                                               | ✅ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

これは、ボスから10ブロック以内のすべてのプレイヤーをボスのスポーン場所にテレポートします。

</div>

</details>

</div>

#### location

プレイヤーがテレポートされる場所を設定します。形式は、標準のEliteMobs `world_name,x,y,z,pitch,yaw` です。

例

```yaml
location: world,0,64,0,0,0
```

これには、いくつかの特別な値があります。

- ワールド名が `same_as_boss` に設定されている場合、ワールド名はボスが現在いるワールドの名前に置き換えられます。

```yaml
location: same_as_boss,0,64,0,0,0
```

- x、y、zに一致する値が3つしかない場合、テレポートはボスの場所を基準とした場所に対して行われます。ボスが地域ボスである場合、場所はボスのスポーンポイントを基準とします。

---

### TITLE_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値        |                            詳細                            | 必須 | 特別 | デフォルト |
|-----------|:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target`  | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title`    |                    タイトルメッセージを設定します                     | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます | ❌ |
| `subtitle` |                   サブタイトルメッセージを設定します                   | ✅ | `&` と一緒に [カラーコード](#color_codes) を使用できます | ❌ |
| `duration` |            メッセージの期間（ティック単位）を設定します            | ✅ | ❌ | `0` |
| `fadeIn`   |                  フェードイン時間（ティック単位）を設定します                  | ❌ | ❌ | `0` |
| `fadeOut`  |                 フェードアウト時間（ティック単位）を設定します                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

ボスから10ブロック以内のすべてのプレイヤーに、サブタイトル「&2I am a subtitle！」が付いたタイトル「&2Hello World！」を表示するようにタイトルメッセージを設定します。

メッセージは、フェードインとフェードアウトのアニメーションを含めて、画面に8秒間（120 + 20 + 20 = 160ティック）表示されます。

</div>

</details>

</div>

---

### UNTAG

ボスからタグを削除します。タグの仕組みについては、`TAG` を確認してください。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         タグを設定します                         | ✅ |
| `duration` |      タグの削除期間（ティック単位）を設定します      | ❌ |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  例2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

ボスから「very_sus」タグを削除します。これは、後でスクリプト条件を通じて確認できます。

</div>

</details>

</div>

---

### VISUAL_FREEZE

プレイヤーに凍結ビジュアルエフェクトを与え、それに関連するダメージを与えます。効果がすぐに消えないようにするには、これを繰り返すスクリプトと組み合わせる必要があります。

| 値       |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 効果の期間（ティック単位）                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  例:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZEは現在機能していないため、スクリーンショットを撮ることができませんでした

</div>

ボスから10ブロック以内のすべてのプレイヤーに、3秒間（60ティック）凍結ビジュアルを与えます。

</div>

</details>

</div>

---

# 複数のアクション

イベントが発生したときに、複数のメッセージを送信したり、異なるアクションを順番に実行したりするなど、複数のアクションを一度に実行したい場合があります。これは簡単にできます！例にポーション効果アクションを追加してみましょう。

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: オンラインのすべてのプレイヤーにメッセージを送信しています！
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: ボスを攻撃したプレイヤーにメッセージを送信しています！
```

</div>

</details>

</div>


