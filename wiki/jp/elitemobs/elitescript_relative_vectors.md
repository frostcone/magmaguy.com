```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite スクリプト相対ベクトル

## 相対ベクトルは何のために使うのか？

相対ベクトルは、特定の場所に対する相対ベクトルです。

相対ベクトルの説明として、次のような状況を考えてみましょう。パワーの一部として、プレイヤーをボスに向かって押し上げたいとします。ボスとプレイヤーは戦闘中に動き回るため、特定のベクトルに頼ってこの効果を実現することはできません。プレイヤーからボスに向かうベクトルが必要になります（プレイヤーからボスに向かう矢印が付いた短い線を想像してください）。

相対ベクトルは、特定のプレイヤーやモブに向かってエンティティ（プロジェクタイルなど）を撃ったり、プレイヤーの後ろに援軍をスポーンさせたり、特定の方向に落下ブロックを撃ったり、プレイヤーに向かって光線を撃ったりするなど、非常に多くの方法で使用できます。

## ベクトルはどのように機能するのか？

ベクトルの仕組みを知らない、または忘れてしまった場合は、ベクトルを、ある点から別の点に向かう矢印だと考えてみてください。

そのため、ベクトルの特性の 1 つは、その長さです。この長さは重要です。矢印の場合、この長さは矢印が撃たれる速度ですが、特定の位置からオフセットポイントを取得しようとする場合は、そのポイントからの距離です。遠くにあるものはベクトル長が長く、近くにあるものはベクトル長が短くなります。

一部のメカニズムでは、2 つのポイントがどれだけ離れているかに頼るのではなく、方向だけを取得したい場合があります。ありがたいことに、ベクトルを正規化することができます。これにより、方向は保持されますが、長さが 1.0 に変更されます。その後、乗数を使用してベクトルを簡単に変更して、オフセットまたは速度に満足できるまで調整できます。

## プロパティ

| 値 |                                                 詳細                                                  | 必須？ | デフォルト値 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Target]($language$/elitemobs/elitescript_targets.md) ベクトルの開始ポイントとなる位置 | ✅ | `none` |
| `DestinationTarget` |          [Target]($language$/elitemobs/elitescript_targets.md) ベクトルの終点となる位置           | ✅ | `none` |
| `normalize` |                                 ベクトルを正規化するかどうかを設定します                                  | ❌ | `false` |
| `multiplier` |                                      ベクトル長を掛け合わせます                                      | ❌ | `1.0` |
| `offset` |                          このオフセットに手動の固定オフセットを挿入できます                          | ❌ | `none` |

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

チキンを撃ちます

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

ボスを基準にして、プレイヤーの 2 ブロック後ろにゾンビをスポーンさせます。

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

スポーン位置に縮小する、アニメーション付きの炎の球体を生成します。

</div>

</details>

</div>

### 処理順序

プロパティを適用するときの処理順序は次のとおりです。

ベクトル計算 -> `normalize` -> `multiplier` -> `offset`

```

