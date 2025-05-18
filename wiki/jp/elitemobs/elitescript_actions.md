日本語に翻訳します。Markdown形式は維持します。

```markdown
# Elite Script アクション

アクションはスクリプトの核となる部分です。これらはスクリプトが何をするかを決定し、カスタム間隔を設定できます。

アクションは常に、実行するアクションのタイプから始まります。異なるアクションタイプは異なる機能を果たします。さらに、すべてのアクションにはターゲットまたは複数のターゲットがあります。アクションには待機タイマーを設定することもでき、カスタマイズ可能な遅延で物事が起こるようにします。最後に、アクションにはアクションタイプ固有の他のいくつかのフィールドを含めることもできます。

## 共通属性

| 値             |                                                                                 詳細                                                                                  | 特殊 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      アクションを実行する前に待機する時間（ティック）を設定します                                                      | ❌ |
| `repeatEvery`      |        設定されたティックごとにアクションを繰り返すように設定します。この設定がありながら`times`を使用していないスクリプトは、ラグを避けるためにモブの死亡時に終了します。`~`を使用してこの値をランダム化できます（例: `1~5`）。         | ❌ |
| `times`            |                                                            アクションが発生する回数を設定します。`~`を使用してこの値をランダム化できます（例: `1~5`）。                                                            | `repeatEvery`が必要 |
| `scripts`          |                                                         アクションの終了時に実行されるスクリプトを設定します                                                          | ❌ |
| `onlyRunOneScript` |                                                       `scripts`の中からランダムに1つを選択し、その1つだけを実行します                                                       | ❌ |
| `offset`           | このオプションは`Target`の下に記述します。ターゲット位置をオフセットできます。`ZONE_FULL`または`ZONE_BORDER`でゾーンをターゲットにしているアクションではオフセットは機能しません。 | ❌ |
| `debug`           | このオプションはスクリプトのアクションセクションの下に記述します。trueに設定すると、アクションが行われるエリアにバリアアイコンが表示されます。 | ❌ |

## アクションタイプ

### ACTION_BAR_MESSAGE

ターゲットのアクションバーメッセージを設定します。

| 値 |                            詳細                            | 必須 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&`を使用して[カラーコード](#color_codes)を使用できます |

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

ボスから10ブロック以内のプレイヤーのアクションバーに「Hello World」と表示されます。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

ターゲットにボスバーを追加します。

| 値 |                            詳細                            | 必須 |                   特殊                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            メッセージ                            | ✅ | `&`を使用して[カラーコード](#color_codes)を使用できます |
| `duration` |               ボスバーの持続時間（ティック）               | ✅ |                      ❌                       |

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

ボスから10ブロック以内のプレイヤーに、1秒間持続する「Hello World」というボスバーを設定します。

</div>

</details>

</div>

---

### DAMAGE

これは、他のエンティティとしてエンティティにダメージを与える方法です。

_注: これはEliteMobsのダメージシステムをネイティブに使用します！つまり、通常のStrikeによるエリート防具軽減が見られます。これについては乗数セクションで詳しく説明します。_

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
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

ダメージ軽減を考慮して、ボスがプレイヤーに与える基本ダメージの半分になるようにダメージを設定します。

</div>

</details>

</div>

#### multiplier

効果に対するボスのダメージ乗数を設定します。

**重要**: パワーを簡単に自動的にスケールさせるために、ダメージはボスがプレイヤーに一度ヒットし、ボスの基本ダメージに乗数を掛けることで適用されます。

これは、乗数1.0がボスの通常のヒットと同じであることを意味します。2.0は通常の強さの2倍のヒット、0.5は50%の強さです。

---

### MAKE_INVULNERABLE

ターゲットを無敵にします。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               ボスが無敵かどうかを設定します                | ✅ |
| `duration` |       無敵の持続時間（ティック）を設定します        | ❌ |

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

ボスを60ティック（3秒）間無敵にします。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

ボスに与えられるダメージ、またはそのボスによってプレイヤーに与えられるダメージを変更します。これはいくつかの特殊な要件を持つ特殊なアクションです。

| 値 | 詳細 | 必須 |
| --- | :-: | :-: |
| `multiplier` | ダメージ乗数。 | ✅ |

このアクションは特殊であり、ダメージイベントのイベントリスナーを持つスクリプトに含まれている必要があります。ボスに与えられるダメージを軽減するイベントとしては`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`が有効です。プレイヤーに与えられるダメージを軽減するイベントとしては`PlayerDamagedByEliteMobEvent`が有効です。

このアクションを最大限に活用するためには、`hasTag`条件の仕組みを学ぶことを強く推奨します。正しく使用すると、ボスを一時的にダメージに耐性を持たせたり弱くしたりすることが可能になり、これはプレイヤーのバフ、ボスの位置、その他多くの要因に関連付けることができます。

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

プレイヤーが「CoolPlayer」というタグを持っている場合に限り、プレイヤーがボスに与えるダメージを2倍に増加させます。

</div>

</details>

</div>

---

### MESSAGE

ターゲットにメッセージを送信します。

| 値 |                            詳細                            | 必須 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            メッセージ                            | ✅ | `&`を使用して[カラーコード](#color_codes)を使用できます |

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

| 値 |                            詳細                            | 必須 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | ボスのナビゲーション速度を設定します。`1.0`はconfigで設定されたボスの値です。 | ❌ | ❌ |
| `bValue` | ナビゲーションが失敗した場合に、ボスを`FinalTarget`に強制テレポートさせるかどうかを設定します。 | ❌ | ❌ |
| `duration` | ボスがあきらめるまでにナビゲートを試みる時間。ティックで設定します。デフォルトは100ティックです。 | ✅ | ❌ |

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

プレイヤーがボスをヒットしたときに立っていた場所にボスをナビゲートさせます。

</div>

</details>

</div>

---

### PLACE_BLOCK

ターゲット位置に指定された期間ブロックを設置します。

| 値 |                                                         詳細                                                         | 必須 |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | ブロックの[マテリアル](#material)。[全リストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              効果の持続時間（ティック）                                               | ❌ |

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

ボスの周りに6秒間持続するガラスドームを設置します。

_注: 持続時間が定義されていない場合、ブロックの設置は永続的になります。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

Model Engineを使用してカスタムモデルの指定されたアニメーションを再生します。Model Engineと、アニメーションを実行するターゲットに有効なカスタムモデルが必要です。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
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

ボスにfortnite_danceアニメーションを再生させます。サーバーにModel Engineがあり、ボスにカスタムディスガイズがあり、そのカスタムディスガイズに「fortnite\_dance」という名前のアニメーションがある必要があります。

</div>

</details>

</div>

---

### PLAY_SOUND

ゲーム内サウンドを再生します。

| 値   |                            詳細                            | 必須 |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            再生するサウンドの名前を設定します            |     ✅     |
| `pitch`  |           再生するサウンドのピッチを設定します            |     ❌     |
| `volume` |           再生するサウンドの音量を設定します           |     ❌     |

[Minecraftの全サウンドの便利なリストはこちら！](https://www.digminecraft.com/lists/sound_list_pc.php) リソースパックからのカスタムサウンドも再生できることを覚えておいてください。
アクションがゾーンをターゲットにしている場合、そのゾーン内のすべてのブロックに対してサウンドが再生されます。これによりサウンドが通常よりかなり大きくなる可能性があるため、ゾーンをターゲットにする場合は音量を下げることを検討してください。

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

ボスの位置でMinecraftの鐘の共鳴音を再生します。

</div>

</details>

</div>

---

### POTION_EFFECT

ターゲットに特定のポーション効果を適用します。

| 値 |                                                       詳細                                                       | 必須 |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [詳細はこちら]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 効果タイプ、[有効なリストはこちら](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          ポーション効果レベル（0から始まります）                                          | ✅ |
| `duration` |                                           効果の持続時間（ティック）                                            | ✅ |

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

これにより、ボスから10ブロック以内のプレイヤーは2秒間（40ティック）浮遊します。

</div>

</details>

</div>

---

### PUSH

設定されたベクトルでターゲットをプッシュします。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       適用される速度のベクトルを設定します        | ✅ |

*注: このアクションは相対ベクトルも受け入れます。それらの使用方法については[こちら]($language$/elitemobs/elitescript_relative_vectors.md)をご覧ください。*

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

これにより、ボスから10ブロック以内のすべてのプレイヤーが0.3の力で空中にプッシュされます。このアクションは0.5秒（10ティック）ごとに10回繰り返されます。つまり、この効果は5秒間（10回 x 10ティック = 100ティック）持続します。

これにより、プレイヤーがジャンプしているように見えます。

</div>

</details>

</div>

#### vector

ベクトルは`vValue: x,y,z`で定義されます。例として、ターゲットを上向きにプッシュしたい場合は、`vValue: 0,0.3,0`のように記述できます。

---

### RUN_COMMAND_AS_CONSOLE

コンソールとしてコマンドを実行します。

| 値 |                             詳細                             | 必須 |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [詳細はこちら]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    実行されるコマンド                     | ✅ |

**注: プレースホルダーが利用可能です！RUN_COMMAND_AS_PLAYERを確認してください、それらは同じです**

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

コンソールに「Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel」というメッセージをブロードキャストさせます。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
プレイヤーとしてコマンドを実行します。ターゲットがプレイヤーである必要があります。

| 値 |                            詳細                            | 必須 |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [詳細はこちら]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   実行されるコマンド                    | ✅ |
```**Nota: RUN_COMMAND_AS_PLAYER y RUN_COMMAND_AS_CONSOLE usan los siguientes marcadores de posición:**

| Marcador de posición | Detalles | Especial |
| --- | :-: | :-: |
| `$playerName` | Nombre visible del jugador | El objetivo debe ser un jugador |
| `$playerX` | Ubicación X del jugador | El objetivo debe ser un jugador |
| `$playerY` | Ubicación Y del jugador | El objetivo debe ser un jugador |
| `$playerZ` | Ubicación Z del jugador | El objetivo debe ser un jugador |
| `$bossName` | Nombre visible del jugador | El objetivo debe ser un jugador |
| `$bossX` | Ubicación X del jefe | ❌ |
| `$bossY` | Ubicación Y del jefe | ❌ |
| `$bossZ` | Ubicación Z del jefe | ❌ |
| `$bossLevel` | Nivel del jefe | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Hace que el jugador ejecute el comando say con Hello $bossName my name is $playerName., lo que significa que simplemente dicen "Hello $bossName my name is $playerName."

</div>

</details>

</div>

---

### RUN_SCRIPT

Esto simplemente ejecuta los scripts definidos en `scripts`. Cualquier acción puede hacer esto, esta acción solo existe como una acción de conveniencia para cuando solo quieres hacer eso.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` | Scripts que se ejecutarán | ✅ |
| `onlyRunOneScript` | Ejecutar solo un script de la lista. | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Cuando un élite recibe daño, ejecuta RUN_SCRIPT, que a su vez ejecuta los scripts Example1 y Example2.

El script Example1 dañará a todos los jugadores dentro de un radio de 10 bloques del jefe.
<br>El script Example2 enviará un mensaje a todos los jugadores dentro de un radio de 10 bloques del jefe con el mensaje "&cCool boss!: &fGotcha back!".

</div>

</details>

</div>

---

### SCALE

Permite escalar entidades.

| Valores | Detalles | Obligatorio |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `scale` | Establece el tamaño de escalado | ✅ |
| `duration` | Establece cuánto tiempo debe durar el efecto de escalado | ❌ |

Al escalar, 1.0 representa el tamaño predeterminado. Para hacer la entidad más grande, aumenta el valor (por ejemplo, `1.2`). Para hacer la entidad más pequeña, disminuye el valor (por ejemplo, `0.8`).

**Nota: Esto puede afectar a los jugadores, ¡así que ten cuidado con cómo lo usas!**

**Nota: Si ya has escalado al jefe usando la configuración `scale` en la configuración del jefe, la configuración de duración restablecerá al jefe a su tamaño predeterminado de `1.0`, independientemente del valor inicial de `scale` en la configuración.**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Cuando el mob es golpeado, se encogerá a un tamaño diminuto. Después de 60 ticks (3 segundos), volverá a su tamaño predeterminado (`1.0`).

</div>

</details>

</div>

---

### SET_FACING

Hace que el jefe mire en una dirección determinada. Se usa principalmente junto con animaciones.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `vValue` | Hacia qué dirección debe mirar el jefe. X,Y,Z | ❌ |
| `RelativeVector` | Usa vectores relativos para hacer que el jefe mire hacia un objetivo. | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Hará que el jefe mire hacia el Este.

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

Hará que el jefe mire hacia un jugador dentro de un radio de 20 bloques.

</div>

</details>

</div>

---

### SET_MOB_AI

Establece si el mob tiene IA. En Minecraft, los mobs sin IA no se moverán ni atacarán. Aún pueden recibir daño, pero dañarlos no resultará en que sean empujados.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` | Establece si el jefe tiene IA | ✅ |
| `duration` | Establece la duración del valor establecido (ticks) | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Establece que el jefe no tenga IA durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Establece si el mob está consciente (aware). En Minecraft, los mobs que no están conscientes no se moverán a nuevas ubicaciones y no atacarán. Aún pueden recibir daño, y serán empujados.

Como nota, si el mob ya se estaba moviendo a una ubicación cuando perdió la conciencia, terminará de ir a esa ubicación antes de detenerse por completo y no moverse más.

Esto significa que puedes usar mobs inconscientes para moverte a ubicaciones definidas, a diferencia de los mobs sin IA.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` | Establece si está consciente | ✅ |
| `duration` | Establece la duración del valor establecido (ticks) | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Establece que el jefe no tenga conciencia durante 2 segundos (40 ticks).

</div>

</details>

</div>

---

### SET_ON_FIRE

Prende fuego a una entidad durante la duración especificada.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `duration` | Duración del efecto, en ticks | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Prende fuego a todos los jugadores dentro de un radio de 10 bloques del jefe durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

### SET_TIME

Establece la hora del juego en el mundo en el que se encuentra el objetivo.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `time` | Establece la hora | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Cuando es golpeado, el jefe establecerá la hora del mundo en el que se encuentra a 10000 ticks.

</div>

</details>

</div>

---

### SET_WEATHER

Establece el clima del mundo en el que se encuentra el objetivo durante un tiempo determinado.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `weather` | Establece el tipo de clima | ✅ |
| `duration` | Establece la duración del patrón climático | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Establece el clima del mundo en el que se encuentra el jefe para que llueva/nieve durante el próximo minuto.

*Nota: El efecto tardará un poco en activarse.*

</div>

</details>

</div>

#### weather

Los siguientes son patrones climáticos válidos:

- `CLEAR` - Establece el clima despejado
- `PRECIPITATION` - Establece el clima para que llueva / nieve, dependiendo del bioma, la altura de la ubicación y otras consideraciones de Minecraft vanilla.
- `THUNDER` - Establece el clima para que haya tormenta eléctrica

---

### SPAWN_FIREWORKS

Genera fuegos artificiales.

| Valores | Detalles | Obligatorio |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` | Establece la velocidad del cohete de fuegos artificiales | ✅ |
| `flicker` | Establece si las partículas de fuegos artificiales parpadearán | ❌ |
| `withTrail` | Establece si el cohete de fuegos artificiales dejará un rastro | ❌ |
| `power` | Establece la potencia de los fuegos artificiales | ❌ |
| `fireworkEffects` | Establece los efectos de los fuegos artificiales, relacionados con cuánto tiempo tardará en explotar | ✅ |
| `fireworkEffectType` | Establece la forma del fuego artificial [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html) | ❌ |
| `fireworkEffectTypes` | Establece las formas del fuego artificial [de esta lista](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html). Esta es una lista de formas; si quieres una lista de formas, ¡no uses `fireworkEffectType`! [1] | ❌ |

[1] Al usar múltiples formas para los fuegos artificiales, cada forma usará los colores de la lista de colores en la misma posición. Consulta el ejemplo a continuación.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Genera fuegos artificiales en la ubicación del jefe desplazada por x=1, y=1.5 y z=0. Le da a los fuegos artificiales una velocidad de x=.5, y=-.35 y z=1. Los fuegos artificiales no parpadearán ni tendrán rastro; la potencia se establece en 2, por lo que la explosión de los fuegos artificiales se retrasará esa cantidad.

Finalmente, hay dos listas de listas de colores: la lista 1 es naranja y rojo, y la lista 2 es amarillo y azul. Hay dos formas para los fuegos artificiales: BALL\_LARGE y STAR. Esto significa que BALL\_LARGE (elemento 1) usará los colores naranja y rojo (lista 1) y STAR (elemento 2) usará los colores amarillo y azul (lista 2).

</div>

</details>

</div>

#### fireworkEffects

Estos son los efectos que mostrará el cohete de fuegos artificiales. Se requiere al menos un efecto. Los siguientes son efectos válidos:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Genera un rayo. Este es un efecto visual; si quieres daño, debes añadir una acción de daño.

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Genera un rayo sobre el jefe cada 5 ticks durante 5 veces.

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Genera un bloque que cae en la ubicación del objetivo. Solo visual, no coloca el bloque.

| Valores | Detalles | Obligatorio |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `material` | Establece el [Material](#material) del bloque que cae. [Consulta los tipos válidos aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) y asegúrate de que sea un material de bloque válido. | ✅ |
| `landingScripts` | Establece la lista de scripts que se ejecutarán cuando el bloque caiga | ✅ |
| `vValue` | Establece la velocidad y dirección de un bloque que cae. | ✅ |

`landingScripts` funciona de la misma manera que [`RUN_SCRIPT`](es/elitemobs/elitescript_actions.md&section=run_script) pero puede aceptar el tipo de objetivo especial `LANDING_LOCATION`.

La `LANDING_LOCATION` es heredada por los ejecutores de scripts, permitiendo que un script de ubicación de aterrizaje también funcione como un ejecutor de scripts. Puedes añadir una espera en la acción que llama a los scripts, seguida de las llamadas de scripts subsiguientes. La `LANDING_LOCATION` siempre será el argumento para el objetivo, incluso cuando se herede, ya que se asigna de una manera específica y única.

*Nota: Esta acción también acepta vectores relativos. Aprende más sobre cómo usarlos [aquí](es/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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

Cuando el jefe es golpeado, este script generará un bloque de piedra que cae 10 bloques por encima y 3 bloques al lado de la ubicación del jefe.

Una vez que el bloque caiga, ejecutará el script LandingScriptExample, que colocará un bloque de piedra en la ubicación donde aterrizó el bloque.
El bloque permanecerá allí durante 10 segundos (200 ticks) antes de desaparecer.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Genera partículas en la ubicación del objetivo.

**Nota: Si no se establece la cobertura (coverage), se establecerá en 0.3 por defecto.**

| Valores | Detalles | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Más información aquí](es/elitemobs/elitescript_targets.md) | ✅ |
| `particles` | Enumera las partículas que se generarán | ✅ |

#### particles

Las partículas tienen sus propias configuraciones especiales, que son las siguientes:

| Valores | Detalles | Por defecto | Especial |
| --- | :-: | :-: | :-: || `x` | Establece el desplazamiento de X | 0.01 | (1) |
| `y` | Establece el desplazamiento de Y | 0.01 | (1) |
| `z` | Establece el desplazamiento de Z | 0.01 | (1) |
| `amount` | Establece la cantidad de partículas generadas | 1 | (1) |
| `speed` | Establece la velocidad de las partículas | 0.01 | ❌ |
| `particle` | Establece el tipo de entidad | `FLAME` | [¡Elige de esta lista!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Establece el valor rojo | `255` | (2) |
| `green` | Establece el valor verde | `255` | (2) |
| `blue` | Establece el valor azul | `255` | (2) |
| `toRed` | Establece el valor rojo final | `255` | (3) |
| `toGreen` | Establece el valor verde final | `255` | (3) |
| `toBlue` | Establece el valor azul final | `255` | (3) |

_(1) Si `amount` se establece en 0, `x`, `y` y `z` establecerán la velocidad de la partícula en su lugar._

_(2) Solo para las `particle`s `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` y `SPELL_MOB_AMBIENT`_

_(3) Solo para la `particle` `DUST_COLOR_TRANSITION`_

Es importante notar que un script SPAWN_PARTICLE puede generar múltiples partículas. Cada partícula puede tener sus propios campos de configuración dentro de la acción SPAWN_PARTICLE. Aquí hay un ejemplo:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Esto generará un cilindro hecho de partículas de llama y humo alrededor del jugador que dañó al jefe.

</div>

</details>

</div>

#### Mover una partícula:

Es posible establecer una velocidad específica para una partícula, y funciona de la misma manera que la API de Spigot. Esto permite a los scripters establecer que una partícula vaya en una dirección específica a una velocidad específica. No es posible hacer que las partículas cambien de dirección a mitad de camino. Este efecto se utiliza en el encantamiento de lanzallamas y en el poder del jefe.

Para mover una partícula, establece `amount: 0`. Esto indicará a Minecraft que los valores `x`, `y` y `z` son en realidad un vector. Este vector establece la dirección hacia la que irá tu partícula.

Digamos que quieres que una partícula `FLAME` suba. Para hacer esto, quieres un valor `y` positivo, y nada más. Finalmente, querrás establecer la velocidad a lo que quieres que sea la velocidad. Aquí tienes un ejemplo completo:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
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
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3
      repeatEvery: 10
```

Esto generará una partícula de llama en la ubicación del jefe que subirá.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoca refuerzos de los Jefes Personalizados de EliteMobs.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Establece el nombre del archivo del refuerzo del Jefe Personalizado       | ✅ |
| `duration` |        Establece la duración del refuerzo (ticks)         | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: your_boss_file.yml
```

Genera el refuerzo con el nombre de archivo "your_boss_file.yml" en la ubicación del jefe.

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA POR FAVOR, RELLENA ESTA SECCIÓN CON LA INFORMACIÓN CORRECTA,

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Establece el                  | ✅ |

*Nota: Esta acción también acepta vectores relativos. Aprende más sobre cómo usarlos [aquí]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
```

Establece al jefe a .

</div>

</details>

</div>

---

### TAG

Añade etiquetas a los jefes o jugadores. Las etiquetas son simplemente Strings, o palabras, que los scripters pueden definir. Solo se usan para realizar comprobaciones de condiciones y no tienen un efecto directo en el juego fuera de para lo que se usan en los scripts.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |             Establece la duración de las etiquetas (ticks)             | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Etiqueta al jefe con la cadena "very_sus", que luego se puede verificar a través de condiciones de script.

**Importante:** Solo es posible etiquetar jugadores y mobs de élite.

</div>

</details>

</div>

---

### TELEPORT

Teleporta al(los) objetivo(s) a la ubicación definida.

| Valores |                                                    Detalles                                                     | Obligatorio |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Establece _quién_ será teleportado. [¡Info general de objetivos aquí!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Establece _dónde_ serán teleportados. [¡Info general de objetivos aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Ubicación de teleportación                                                | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Esto teleportaría a todos los jugadores que estén a menos de 10 bloques del jefe a la ubicación de aparición del jefe.

</div>

</details>

</div>

#### location

Establece la ubicación donde el jugador será teleportado. El formato es el estándar de EliteMobs `world_name,x,y,z,pitch,yaw`.

Ejemplo

```yaml
location: world,0,64,0,0,0
```

Esto tiene algunos valores especiales:

- Si el nombre del mundo se establece en `same_as_boss`, reemplazará el nombre del mundo con el nombre del mundo en el que se encuentra actualmente el jefe:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Si solo hay tres valores que coinciden con x, y y z, la teleportación se realizará a una ubicación relativa a la ubicación del jefe. Si el jefe es un jefe regional, la ubicación será relativa al punto de aparición del jefe.

---

### TITLE_MESSAGE

Establece el mensaje de la barra de acción para los objetivos.

| Valores |                            Detalles                            | Obligatorio | Especial | Por defecto |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    Establece el mensaje del título                     | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` | ❌ |
| `subtitle` |                   Establece el mensaje del subtítulo                   | ✅ | Puede usar [Códigos de Color](#color_codes) con `&` | ❌ |
| `duration` |           Establece la duración del mensaje (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Establece el tiempo de aparición (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Establece el tiempo de desvanecimiento (ticks)                   | ❌ | ❌ | `0` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

Establecerá el mensaje del título para mostrar el título "&2Hello World!" con el subtítulo "&2I am a subtitle!" a todos los jugadores que estén a menos de 10 bloques del jefe.

El mensaje permanecerá en pantalla durante 8 segundos (120 + 20 + 20 = 160 ticks) incluyendo la animación de aparición y desvanecimiento.

</div>

</details>

</div>

---

### UNTAG

Elimina etiquetas del jefe. Consulta `TAG` para ver cómo funcionan las etiquetas.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Establece las etiquetas                         | ✅ |
| `duration` |      Establece la duración de la eliminación de las etiquetas (ticks)      | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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
  Example2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Elimina la etiqueta "very_sus" del jefe, que luego se puede verificar a través de condiciones de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Aplica el efecto visual de congelación al jugador y su daño asociado. Esto debe combinarse con un script repetitivo si no quieres que el efecto se desvanezca inmediatamente.

| Valores |                            Detalles                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [¡Más info aquí!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duración del efecto, en ticks                  | ✅ |

<div align="center">
<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NO FUNCIONA ACTUALMENTE POR LO QUE NO SE PUDO TOMAR CAPTURA DE PANTALLA

</div>

Aplica a todos los jugadores a menos de 10 bloques del jefe el efecto visual de congelación durante 3 segundos (60 ticks).

</div>

</details>

</div>

---

# Múltiples acciones

A veces, es posible que desees realizar varias acciones a la vez cuando ocurre un evento, como enviar múltiples mensajes o realizar diferentes acciones secuencialmente. ¡Esto se hace fácilmente! Añadamos una acción de efecto de poción a nuestro ejemplo:

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      message: I am messaging all online players!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: I am messaging the player that hit the boss!
```

</div>

</details>

</div>