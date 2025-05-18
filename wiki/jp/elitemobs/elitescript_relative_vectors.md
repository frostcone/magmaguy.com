```markdown
# エリートスクリプト 相対ベクトル

## 用途

相対ベクトルとは、特定の、しかし動的な位置を基準としたベクトルです。

これらが何であるかを最もよく説明するために、次のケースを考えてみましょう。能力の一部として、プレイヤーをボスの方へ押したいとします。戦闘中、ボスもプレイヤーも動き回るため、この効果を達成するために特定のベクトルに頼ることはできません。プレイヤーからボスへ向かうベクトルが必要になります。（プレイヤーからボスへ向かう短い線に矢印が付いているのを想像してください。）

相対ベクトルは非常に多くの方法で使用できるため、すべてをリストアップすることは不可能ですが、その中には以下のようなものがあります：特定のプレイヤーやモブに向かってエンティティ（投射物など）を発射する；プレイヤーの後ろに援軍をスポーンさせる；特定の方向に落下ブロックを発射する；プレイヤーに向かって発射されるレイを作成するなど、他にもたくさんあります。

## ベクトルの仕組み

ベクトルが何であるか、あるいはどのように機能するかを知らない、または覚えていない場合は、ベクトルをある点から別の点へ向かう矢印として考えることができます。

そのため、ベクトルの特性の一つはその長さです。この長さは重要です。矢の場合、この長さは矢が発射される速度であり、特定の場所からオフセット点を得ようとする場合、それはその点からの距離です。遠いものはベクトル長が大きくなり、近いものは短くなります。

一部のメカニクスでは、方向だけを得たいので、2点間の距離に頼りたくないでしょう。幸いなことに、ベクトル正規化を使用できます。これにより、方向は保持されますが、長さは1.0に変更されます。その後、乗数を使用して、提供されるオフセットまたは与えられる速度に満足するまで、ベクトルを簡単に変更できます。

## プロパティ

| 値 | 詳細 | 必須？ | デフォルト値 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | ベクトルが開始する地点の[ターゲット]($ja$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `DestinationTarget` | ベクトルの終点となる[ターゲット]($ja$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `normalize` | ベクトルを正規化するかどうかを設定します | ❌ | `false` |
| `multiplier` | ベクトルの長さを乗算します。`~`を使用してこの値をランダム化できます。例: `1.0~2.5`。 | ❌ | `1.0` |
| `offset` | このオフセットに手動で固定オフセットを挿入できます。`~`を使用してこの値をランダム化できます。例: `0~5,0~2,0~10`。 | ❌ | `none` |

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

ニワトリを発射します

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

矢を発射します

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

ボスを基準に、プレイヤーの後ろ2ブロックにゾンビをスポーンさせます。

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

スポーン位置に向かって縮小するアニメーション化された炎の球を作成します。

</div>

</details>

</div>

### 演算の順序

プロパティを適用する際の演算の順序は以下の通りです：

ベクトル計算 -> `normalize` -> `multiplier` -> `offset`
```