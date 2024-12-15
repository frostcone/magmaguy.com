# エリートスクリプト相対ベクトル

## 何のために使うのか

相対ベクトルとは、特定の場所を基準とするが、その場所が動的に変化するベクトルのことです。

これらのベクトルの説明として最適なのは、次のようなケースを考えることです。あなたは、パワーの一部としてプレイヤーをボスに向かって押したいとします。ボスとプレイヤーは戦闘中に動き回るので、この効果を達成するために特定のベクトルに頼ることはできません。プレイヤーからボスに向かうベクトルが必要になります（プレイヤーからボスに向かう矢印のついた短い線を想像してください）。

相対ベクトルは非常に多くの方法で使用できるため、そのすべてをリストすることは不可能ですが、その中には、特定のプレイヤーやMobに向かってエンティティ（投射物など）を撃つ、プレイヤーの後ろに援軍をスポーンさせる、特定の方向に落下ブロックを撃つ、プレイヤーに向かって発射される光線を作成するなど、非常に多くのものがあります。

## ベクトルはどのように機能するのか？

ベクトルとは何か、またはどのように機能するのかを知らない場合、または覚えていない場合は、ベクトルをある点から別の点を指す矢印と考えることができます。

そのため、ベクトルのプロパティの1つに長さがあります。この長さは重要です。矢印の場合、この長さは矢印が撃たれる速度であり、特定の場所からオフセットポイントを取得しようとする場合は、そのポイントからの距離です。遠くにあるものはベクトルの長さが大きくなり、近くにあるものはベクトルの長さが短くなります。

一部のメカニズムでは、2点間の距離に依存したくない場合があります。方向を取得するだけでよい場合です。幸い、ベクトル正規化を使用できます。これにより、方向が維持されますが、長さが1.0に変更されます。次に、乗数を使用して、それが提供するオフセットまたは速度に満足するまで、ベクトルを簡単に変更できます。

## プロパティ

| 値 | 詳細                                                                     | 必須？ | デフォルト値 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | ベクトルを開始するポイントの[ターゲット]($language$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `DestinationTarget` | ベクトルの終点の[ターゲット]($language$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `normalize` | ベクトルを正規化するかどうかを設定します                                                                   | ❌ | `false` |
| `multiplier` | ベクトルの長さを乗算します                                                                  | ❌ | `1.0` |
| `offset` | このオフセットに手動で固定オフセットを挿入できます                                                                | ❌ | `none` |

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

ニワトリを撃ちます

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

矢を撃ちます

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

ボスを基準にして、プレイヤーの2ブロック後ろにゾンビをスポーンさせます。

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

スポーン位置に向かって縮小するアニメーション付きの炎の球を作成します。

</div>

</details>

</div>

### 演算順序

プロパティを適用する際の演算順序は次のとおりです。

ベクトル計算 -> `normalize` -> `multiplier` -> `offset`
