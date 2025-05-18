日本語に翻訳します。Markdownの書式は維持します。

# はじめに

このページでは、EliteScriptと[WebApp](https://magmaguy.com/webapp/webapp.html)を使用して作成されたカスタムボスパワーの様々な例を紹介します。これらの分かりやすい例は、複数のアクションやその他の機能を活用してユニークなボスパワーを作成する方法を示しています。

さらに、各例には視覚的なデモンストレーションが付いているため、ゲーム内でスクリプトがどのように動作するかをより簡単に理解できます。

自由に例をコピーして、自分のダンジョンやワールドで使用してください。

## パワーの例

### スラムダウン

このスクリプトは、ボスにダメージを与えたプレイヤーの8ブロック上空にボスをテレポートさせ、地面に叩きつけます。その後、ボスの3ブロック以内にいるプレイヤーに鈍化のポーション効果を適用し、画面に「Stunned」というメッセージを3秒間表示します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  SlamDown:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      FinalTarget:
        targetType: DIRECT_TARGET
        offset: 0,8,0
      Target:
        targetType: SELF
    - action: PUSH
      vValue: 0,-5,0
      Target:
        targetType: SELF
      wait: 15
    - action: POTION_EFFECT
      potionEffectType: SLOW
      amplifier: 3
      duration: 60
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    - action: TITLE_MESSAGE
      subtitle: "Stunned!"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    Cooldowns:
      local: 180
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_slamdown.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### プッシュアウェイ

このスクリプトは、ボスの周囲に4ブロックのドームを生成します。その後、ゾーンの境界で1秒間続くパーティクルエフェクトを開始し、次に別の行動でゾーン内のプレイヤーを押し離します。プッシュのオフセット設定により、プレイヤーはわずかに上方に押し上げられます。最後に、スクリプトはゾーン内のプレイヤーにメッセージを送信します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  PushAway:
    Events:
    - EliteMobDamagedEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_BORDER
        track: true
      repeatEvery: 5
      times: 4
    - action: PUSH
      Target:
        targetType: ZONE_FULL
        track: true
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: ACTION_TARGET
        normalize: true
        multiplier: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: MESSAGE
      sValue: "&cCool boss!: &fBE GONE!"
      Target:
        targetType: ZONE_FULL
      repeatEvery: 10
      times: 2
    Cooldowns:
      local: 140
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_pushaway.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### アローレイン

このスクリプトは、モブにダメージを与えたプレイヤーの周囲の地面に円を描き、プレイヤーに円から出るように促すメッセージを画面に表示します。その後、2秒後にその同じ場所のちょうど10ブロック上空から下向きに矢を発射します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  MakeCircle:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 8
      particles:
      - particle: FLAME
    - action: TITLE_MESSAGE
      Target:
        targetType: DIRECT_TARGET
      fadeOut: 10
      duration: 20
      fadeIn: 10
      subtitle: Move out of the zone!
    - action: RUN_SCRIPT
      scripts:
      - "ArrowRain"
    Cooldowns:
      local: 160
      global: 80
  ArrowRain:
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
        offset: 0,10,0
    Actions:
    - action: SUMMON_ENTITY
      wait: 40
      sValue: ARROW
      Target:
        targetType: ZONE_FULL
        track: false
      vValue: 0,-1,0
      repeatEvery: 10
      times: 4
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_arrowrain.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### ファイアオーラ

これは、シリンダーゾーンを使用してボスの周囲にパーティクルをスポーンさせるスクリプトを作成します。これは6秒間続きます。ボスには6秒間 `FireOn` タグも付与されます。

プレイヤーがタグがアクティブな間にボスを攻撃した場合、プレイヤーは1秒間炎上します。これは条件を使用して行われ、`SetOnFire` スクリプトはボスが一致するタグ `FireOn` を持っている場合にのみ実行できます。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Visual:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: CYLINDER
      radius: 2
      height: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: FLAME
      Target:
        targetType: ZONE_FULL
        track: true
        coverage: 1.0
      repeatEvery: 5
      times: 24
    - action: TAG
      tags:
      - "FireOn"
      duration: 120
      Target:
        targetType: SELF
    Cooldowns:
      local: 180
      global: 80
  SetOnFire:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 20
      Target:
        targetType: DIRECT_TARGET
      Conditions:
        Target:
          targetType: SELF
        conditionType: BLOCKING
        hasTags:
        - "FireOn"
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_fireaura.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### ポイズンライン

このスクリプトは、ボスを中心とした2つの直方体ゾーンを作成します。ボスのAIは2秒間オフに設定されます。直方体ゾーンは、地面にプラス記号を形成するように構成されています。

その後、スクリプトはゾーン内に2秒間雲のパーティクルを生成し、次に煙のパーティクルを生成してゾーンに3秒間毒のポーション効果を適用します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  PoisonLine1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 20
      y: 1
      z: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SET_MOB_AI
      bValue: false
      duration: 40
      Target:
        targetType: SELF
      scripts:
      - "PoisonLine2"
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
    Cooldowns:
      local: 200
      global: 80
  PoisonLine2:
    Zone:
      shape: CUBOID
      x: 2
      y: 1
      z: 20
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_poisonlines.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### バウンス

このスクリプトは、ボスを中心とした10ブロックのシリンダーゾーンを作成し、そのゾーンに10秒間パーティクルエフェクトとプッシュを適用します。

プッシュアクションは、毎ティックプレイヤーをわずかに上方に押し上げ、プレイヤーがゾーン内にいる間跳ね回っているような錯覚を生み出します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Bounce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 10
      height: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: EXPLOSION_NORMAL
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.2
    - action: PUSH
      vValue: 0,0.4,0
      Target:
        targetType: ZONE_FULL
      repeatEvery: 1
      times: 200
    Cooldowns:
      local: 220
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_bounce.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### サモン

このスクリプトは、ボスにダメージを与えたプレイヤーを中心とした（適用されたオフセットによりプレイヤーの6ブロック上に配置された）シリンダーゾーンを作成します。さらに、そのプレイヤーの画面にメッセージを表示します。

2秒の遅延の後、指定されたゾーンに援軍がスポーンします。ただし、`coverage` を使用したため、ゾーンの一部のみが援軍によって占められます。プレイヤーがすべての援軍を排除できなかった場合、20秒（400ティック）後に自動的にデスポーンします。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Summon:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 3
      height: 1
      Target:
        targetType: DIRECT_TARGET
        offset: 0,6,0
    Actions:
    - action: SUMMON_REINFORCEMENT
      sValue: "fc_boss.yml"
      duration: 400
      Target:
        targetType: ZONE_FULL
        coverage: 0.2
      wait: 40
    - action: TITLE_MESSAGE
      subtitle: "Friends! Help!!!"
      duration: 30
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 333
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_summon.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### ポーションゾーン

このスクリプトは、プレイヤーがボスにダメージを与えたときにアクティブになります。その後、`PotionZoneBad` または `PotionZoneGood` スクリプトのいずれかを実行します。

`PotionZoneBad` スクリプトでは、ボスの20ブロック以内にいる近くのプレイヤーの周囲にシリンダーゾーンが生成されます。指定されたカバレッジで雲と大きな煙のパーティクルエフェクトを生成し、ウィザーのポーション効果を与え、近くのプレイヤーにメッセージを送信します。

`PotionZoneGood` スクリプトでは、ボスの20ブロック以内にいるプレイヤーの周囲にシリンダーゾーンが生成されます。このスクリプトのパーティクルエフェクトは反転しています。このスクリプトはウィザーではなく回復のポーション効果を適用し、近くのプレイヤーにメッセージを送信します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "PotionZoneBad"
      - "PotionZoneGood"
      onlyRunOneScript: true
    Cooldowns:
      local: 110
      global: 80
  PotionZoneBad:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: WITHER
      amplifier: 3
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cCool boss!: &fFeel the burn!"
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
  PotionZoneGood:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: HEAL
      amplifier: 1
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cCool boss!: &fFeel the... Wait, this is the wrong one."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### ブラインドウェーブ

このスクリプトは、ボスから発生する正および負のX方向の両方に投影される2つの地面レイウェーブを開始します。

レイの長さとサイズを決定するために `offset` パラメータ、特にZ値を定義して利用します。さらに、X値を設定することでウェーブの伝播方向を指定します。（これはこの特定のスクリプトがこれらの値をどのように使用するかについての説明であり、必ずしもこれと全く同じにする必要はありません）

Y値を調整してレイウェーブの高さを増やすことも可能ですが、プレイヤーがレイを飛び越えるオプションを可能にするために0のままにしています。

`animationDuration` パラメータは、レイウェーブがターゲットから最終ターゲットまで移動するのにかかる時間を決定します。この値を減らすと、レイはより速くなり、回避がより困難になります。

その後、パーティクルとポーション効果が適用されます。レイウェーブを回避または飛び越えられなかったプレイヤーは、5秒間（100ティック）盲目になります。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Blind:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: 10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
      scripts: "Blind2"
    Cooldowns:
      local: 200
      global: 80
  Blind2:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: -10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_blindwaves.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

***

### フリーズウォール

このスクリプトは、ボスを中心とした3つの回転するレイを作成します。レイの高さを定義できないため、3つの異なる回転するレイが必要です。そのため、複数のスクリプトと `offset` を使用してレイを高さ方向に積み重ね、1つの回転する*壁*のように見えるようにします。

3つのスクリプトはすべて、`offset` が異なる点を除いてゾーンは同じです。ボスから始まる長さ6ブロックに設定されており、10秒間（200ティック）で360度のヨー回転を行うように設定されています。

すべてのスクリプトにはパーティクルエフェクトが設定されており、レイウォールに*当たった*プレイヤーに5秒間（100ティック）`VISUAL_FREEZE` アクションを適用します。

<div align="center">

<details>

<summary><b>例を展開</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
``````yaml
- EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "FreezeWall"
      - "FreezeWall2"
      - "FreezeWall3"
    Cooldowns:
      local: 300
      global: 80      
  FreezeWall:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
      Target2:
        targetType: SELF
        offset: 6,0,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,1,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,1,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,2,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,2,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>