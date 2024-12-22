# エリートスクリプト相対ベクトル

## 何のためのものか

相対ベクトルとは、特定だが動的な位置を基準としたベクトルです。

これらが何であるかを最もよく説明するために、次のケースを考えてみましょう。あなたは、パワーの一部として、プレイヤーをボスの方へ押し出したいと考えています。ボスもプレイヤーも戦闘中に動き回るため、この効果を実現するために特定のベクトルに頼ることはできません。プレイヤーからボスに向かうベクトルが必要になります。（プレイヤーからボスに向かう矢印の短い線を想像してください。）

相対ベクトルは非常に多くの方法で使用できるため、すべてをリストすることは不可能ですが、その中には、特定のプレイヤーやモブに向かってエンティティ（発射体など）を発射すること、プレイヤーの後ろに援軍を出現させること、特定の方向に落下するブロックを発射すること、プレイヤーに向かって発射される光線を作成することなどがあります。

## ベクトルはどのように機能するのか？

ベクトルとは何か、またはどのように機能するのかを知らない、または覚えていない場合は、ベクトルをある点から別の点を指す矢印と考えることができます。

したがって、ベクトルの特性の1つはその長さです。この長さは重要です。矢印の場合、この長さは矢印が発射される速度であり、特定の場所からのオフセットポイントを取得しようとする場合、そのポイントからの距離です。遠くのものはベクトルの長さが長くなり、近いものは長さが短くなります。

一部のメカニズムでは、2点間の距離に依存したくない場合があります。方向だけを取得したい場合があるからです。幸いなことに、ベクトル正規化を使用することができます。これにより、方向が保持されることが保証され、長さが1.0に変更されます。その後、乗数を使用して、提供されるオフセットや速度に満足するまでベクトルを簡単に変更できます。

## プロパティ

| 値                   |                               詳細                                | 必須？ | デフォルト値  |
|---------------------|:---------------------------------------------------------------:|:---:|:-------:|
| `SourceTarget`      | ベクトルの開始点となる[ターゲット]($language$/elitemobs/elitescript_targets.md) |  ✅  | `none`  |
| `DestinationTarget` | ベクトルの終点となる[ターゲット]($language$/elitemobs/elitescript_targets.md)  |  ✅  | `none`  |
| `normalize`         |                      ベクトルを正規化するかどうかを設定します                       |  ❌  | `false` |
| `multiplier`        |                          ベクトルの長さを乗算します                          |  ❌  |  `1.0`  |
| `offset`            |                    このオフセットに手動で固定オフセットを挿入できます                    |  ❌  | `none`  |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

鶏を発射する

***

```yaml
eliteScript:
  ShootArrow:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

矢を発射する

***

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

ボスの基準で、プレイヤーの2ブロック後ろにゾンビを出現させる。

***

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

スポーン位置に縮小するアニメーション付きの炎の球を作成します。

</div>

</details>

</div>

### 演算順序

プロパティを適用する際の演算順序は次のとおりです。

ベクトル計算 -> `normalize` -> `multiplier` -> `offset`
