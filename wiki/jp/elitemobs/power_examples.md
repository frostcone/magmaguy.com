```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite スクリプトゾーン

ゾーンは、スクリプターがアクションを実行するためのターゲットとして使用できる、形状で定義された場所です。

スクリプトごとに、1 つのゾーンのみを設定できます。

ゾーンをターゲットにするには、`ZONE_FULL` または `ZONE_BORDER` のターゲットタイプを使用します。

ゾーン自体は、[スクリプトターゲット]($language$/elitemobs/elitescript_targets.md) を使用して、ゾーンが表示される場所を定義します。

## shape

ゾーンの形状を設定します。有効な形状は次のとおりです。

| 形状タイプ                                                               | 詳細 | アニメーション可能 | 境界線 |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | 円柱形 | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | 球形 | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | ドーム形（半球） | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | 直方体形（立方体のような形） | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | 2 つの点間の固定された線 | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | 2 つの点間を回転する線 | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 2 つの初期点から 2 つの最終点に移動する線 | ✅ | ❌ |

---

#### アニメーション可能

アニメーションを含むゾーンは、スクリプトが最初に呼び出されたときにゾーンのアニメーションを開始します。

つまり、アクションに待機時間がある場合、アクションが開始されると、ゾーンはアクションが待機している間もすでに移動しています。

ゾーンは常にすべてのティックでアニメーション化されます。つまり、`SPAWN_PARTICLES` アクションを使用する場合、ゾーンはティックごとに移動するため、ティックごとに実行するように設定できます。秒ごとに実行すると、パーティクルがスポーンされないティックでもゾーンは移動し続けるため、パーティクルが飛び跳ねているように見えます。

ゾーンを回転させたいが、アクションを開始する前に特定のティック数待つ場合は、別のスクリプトを作成し、`RUN_SCRIPT` でそのスクリプトを呼び出します。`RUN_SCRIPT` には、必要な待機時間を設定してください。

ゾーンは、アニメーションが完了すると、最終的な場所に留まります。

アニメーション可能なゾーンはすべて、スクリプトターゲットでの追跡が無効になっています。これは、追加の移動により、スクリプターとプレイヤーにとって理解が難しくなるためです。つまり、これらのゾーンはボスやプレイヤーを追跡せず、常に最初のスポーンポイントを基準に移動します。

---

#### 境界線

一部のゾーンには、境界線を設定できます。境界線がある場合、`ZONE_BORDER` をゾーンのターゲットとして使用できます。境界線は、最初の大きな形状の中に、2 番目の小さな形状を作成することで定義されます。小さなゾーンと大きなゾーンの間の領域が境界線になります。

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
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_LARGE
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

このスクリプトは、5 秒間（5 ティック x 20 回 = 100 ティック）ゾーンの境界線にのみ表示される煙のパーティクルを生成します。

`ZONE_BORDER` オプションを使用せずに、代わりに `ZONE_FULL` オプションを使用した場合は、ゾーン全体がこのように煙のパーティクルで覆われます。

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`SPHERE` にする必要があります。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 球の中心の場所を設定します。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `radius`                                                    | 球の半径 | ✅ |
| `borderRadius`                                              | 内側の球の半径 | ❌ |

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
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_sphere.jpg](../../../img/wiki/elitescript_zones_sphere.jpg)

</div>

このスクリプトは、雲のパーティクルを使用して、球の形状を示しています。

</div>

</details>

</div>

---

### DOME

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`DOME` にする必要があります。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | ドームの中心の場所を設定します。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `radius`                                                    | ドームの半径 | ✅ |
| `borderRadius`                                              | 内側のドームの半径 | ❌ |

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
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_dome.jpg](../../../img/wiki/elitescript_zones_dome.jpg)

</div>

このスクリプトは、雲のパーティクルを使用して、ドームの形状を示しています。

</div>

</details>

</div>

---

### CYLINDER

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`CYLINDER` にする必要があります。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 円柱の中心の場所を設定します。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `radius`                                                    | 円柱の半径 | ✅ |
| `borderRadius`                                              | 内側の円柱の半径 | ❌ |
| `height`                                                    | 円柱の高さ | ❌ |

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
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cylinder.jpg](../../../img/wiki/elitescript_zones_cylinder.jpg)

</div>

このスクリプトは、雲のパーティクルを使用して、円柱の形状を示しています。

</div>

</details>

</div>

---

### CUBOID

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`CUBOID` にする必要があります。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 直方体の中心の場所を設定します。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `x`                                                         | 直方体の長さを設定します。 | ✅ |
| `y`                                                         | 直方体の高さを設定します。 | ✅ |
| `z`                                                         | 直方体の幅を設定します。デフォルトは `x` です。 | ❌ |
| `xBorder`                                                   | 内側の直方体の長さを設定します。 | ❌ |
| `yBorder`                                                   | 内側の直方体の高さを設定します。 | ❌ |
| `zBorder`                                                   | 内側の直方体の幅を設定します。デフォルトは `x` です。 | ❌ |

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
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

このスクリプトは、雲のパーティクルを使用して、直方体の形状を示しています。

</div>

</details>

</div>

---

### STATIC_RAY

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`STATIC_RAY` にする必要があります。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 線の最初の点の場所を設定します。 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 線の最後の点の場所を設定します。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `ignoresSolidBlocks`                                        | 光線が固体ブロックを貫通するかどうかを設定します。 | ❌ |
| `pointRadius`                                               | 光線の太さを設定します。デフォルトは 0.5 ブロックです。 | ❌ |

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
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

このスクリプトは、雲のパーティクルを使用して、静的レイの形状を示しています。 

ゾーンの両端に `offset` オプションを使用することで、ゾーンの高さを調整し、光線をプレイヤーとボスの真ん中から出現させるようにしています。そうしないと、光線は足元に現れます。

</div>

</details>

</div>

---

### ROTATING_RAY

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`ROTATING_RAY` にする必要があります。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 線の最初の点の場所を設定します。 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 線の最後の点の場所を設定します。 | ✅ |
| `animationDuration`                                         | 回転にかかる時間（ティック）を設定します。 | ✅ |
| `pitchPreRotation`                                          | アニメーションの前にピッチに初期回転を適用します。 | ❌ |
| `yawPreRotation`                                            | アニメーションの前にヨーに初期回転を適用します。 | ❌ |
| `pitchRotation`                                             | アニメーションのピッチ回転を設定します。 | ❌ |
| `yawRotation`                                               | アニメーションのヨー回転を設定します。 | ❌ |
| `ignoresSolidBlocks`                                        | 光線が固体ブロックを貫通するかどうかを設定します。 | ❌ |
| `pointRadius`                                               | 光線の太さを設定します。デフォルトは 0.5 ブロックです。 | ❌ |

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
      shape: ROTATING_RAY
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      Target:
        targetType: SELF
        offset: 0,1,0
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

このスクリプトは、雲のパーティクルを使用して、回転レイの形状を示しています。

まず、ボスからダメージを与えたプレイヤーに、雲のパーティクルを使用した光線を生成します。次に、`offset` を使用して、位置を少し上に調整します。

次に、ターゲットにされたプレイヤーを中心に、光線を 360 度回転させます。この回転は 5 秒間（100 ティック）で完了します。

</div>

</details>

</div>

---

### TRANSLATING_RAY

| キー                                                          | 詳細 | 必須 |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | ゾーンの形状を設定します。`TRANSLATING_RAY` にする必要があります。 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | ターゲットにするエンティティのタイプを設定します。 | ❌ |
| `animationDuration`                                          | 移動にかかる時間（ティック）を設定します。 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | 線の最初の点の場所を設定します。 | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | 線の最初の点の移動先の場所を設定します。 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | 線の 2 番目の点の場所を設定します。 | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | 線の 2 番目の点の移動先の場所を設定します。 | ✅ |
| `ignoresSolidBlocks`                                         | 光線が固体ブロックを貫通するかどうかを設定します。 | ❌ |
| `pointRadius`                                                | 光線の太さを設定します。デフォルトは 0.5 ブロックです。 | ❌ |

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
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
      FinalTarget:
        targetType: SELF
        offset: 0,10,0
      Target2:
        targetType: DIRECT_TARGET
      FinalTarget2:
        targetType: DIRECT_TARGET
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

このスクリプトは、雲のパーティクルを使用して、移動する光線の形状を示しています。

まず、ボスからダメージを与えたプレイヤーに、雲のパーティクルを使用した光線を生成します。

次に、`FinalTarget1` と `FinalTarget2` で `offset` を使用して、両方のターゲットから 10 ブロック上に移動するように光線をアニメーション化します。

アニメーションは 5 秒間（100 ティック）で完了します。

Z の `offset` を `offset: 0,0,10` のように調整することで、光線を横方向に簡単に移動できます。

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

この動作は、ゲーム内での向きによって変わる可能性があります。
<br>GIF 画像に示されているスクリプトの X の `offset` を変更すると、光線は、私たちの方向からまっすぐ離れるように見えるかもしれません。

</div>

</details>

</div>

---

## filter

filter プロパティは、ゾーン内の特定のエンティティのみをターゲットにするために使用できます。これらのエンティティは次のとおりです。

| 値 | 詳細 |
| --- | :-: |
| `PLAYER` | ゾーン内のプレイヤーのみをターゲットにする（デフォルト） |
| `ELITE` | ゾーン内のエリートのみをターゲットにする |
| `LIVING` | ゾーン内のすべての生きているエンティティをターゲットにする |

<div align="center">

<details> 

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: SPHERE
      radius: 12
      borderRadius: 11
      filter: ELITE
      Target:
        targetType: SELF
        track: false
```

このスクリプトの例では、フィルターを使用して、ゾーンがエリートのみをターゲットにする方法を示しています。

</div>

```



