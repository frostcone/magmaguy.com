# エリートスクリプトゾーン

ゾーンとは、スクリプターが何らかのアクションを実行するためのターゲットとして使用できる、形状によって定義された場所のことです。

スクリプトごとに設定できるゾーンは1つだけです。

ゾーンをターゲットにするには、ターゲットタイプ`ZONE_FULL`または`ZONE_BORDER`を使用できます。

ゾーン自体も、[スクリプトターゲット]($language$/elitemobs/elitescript_targets.md)を使用して、ゾーンが表示される場所を定義します。

## 形状

ゾーンの形状を設定します。有効な形状は次のとおりです。

| 形状タイプ                                                                                  |          詳細           | アニメーション可能 | ボーダー |
|----------------------------------------------------------------------------------------|:---------------------:|:---------:|:----:|
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)               |          円筒形          |     ❌     |  ✅   |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)                   |          球形           |     ❌     |  ✅   |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                       |       ドーム形（半球）        |     ❌     |  ✅   |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)                   |     直方体形（立方体のような）     |     ❌     |  ✅   |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)           |        2点間の固定線        |     ❌     |  ❌   |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray)       |       2点間を回転する線       |     ✅     |  ❌   |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 2つの初期点から2つの最終点まで移動する線 |     ✅     |  ❌   |

---

#### アニメーション可能

アニメーション付きのゾーンは、スクリプトが最初に呼び出されたときにゾーンアニメーションを開始します。

つまり、アクションに待機時間がある場合、アクションが開始されると、アクションが待機している間、ゾーンはすでに動き回っています。

ゾーンは常にすべてのティックでアニメーション化されます。つまり、`SPAWN_PARTICLES`
アクションを使用する場合は、ゾーンがすべてのティックで移動するため、すべてのティックで実行するように設定できます。1秒ごとに実行すると、パーティクルがスポーンされなかったティックでもゾーンが移動し続けたため、パーティクルが飛び回るように見えます。

回転するゾーンアクションを作成したいが、アクションを開始する前に一定時間待機したい場合は、それを別のスクリプトにして、`RUN_SCRIPT`
を介してそのスクリプトを呼び出します。`RUN_SCRIPT`に目的の待機時間があることを確認してください。

ゾーンは、アニメーションが完了すると最終的な場所に留まります。

アニメーション可能なすべてのゾーンは、スクリプトターゲットを追跡しないように設定されています。これは、追加の動きにより、スクリプターとプレイヤーにとって理解が非常に困難になるためです。つまり、これらのゾーンはボスやプレイヤーを追跡せず、常に最初のスポーンポイントに対して相対的に移動します。

---

#### ボーダー

特定のゾーンにはボーダーを設定できます。ボーダーとは、`ZONE_BORDER`
をゾーンのターゲットとして使用できることを意味します。ボーダーは、最初の大きな形状の中に、2番目の小さな形状を作成することで定義されます。小さいゾーンと大きいゾーンの間がボーダーになります。

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

このスクリプトでは、煙のパーティクルが5秒間（5回ごとに20回繰り返し = 100ティック）、ゾーンボーダーに**のみ**表示されます。

`ZONE_BORDER`オプションを使用せず、代わりに`ZONE_FULL`オプションを使用した場合は、次のようにゾーン全体が煙のパーティクルで覆われます。

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
| `shape`                                                     | ゾーンの形状を設定します。`SPHERE`である必要があります | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 球の中心の位置を設定します | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します | ❌ |
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

このスクリプトは、雲のパーティクルを使用して球の形状を示しています。

</div>

</details>

</div>

---

### DOME

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`DOME`である必要があります | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | ドームの中心の位置を設定します | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します | ❌ |
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

このスクリプトは、雲のパーティクルを使用してドームの形状を示しています。

</div>

</details>

</div>

---

### CYLINDER

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`CYLINDER`である必要があります | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 円柱の中心の位置を設定します | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します | ❌ |
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

このスクリプトは、雲のパーティクルを使用して円柱の形状を示しています。

</div>

</details>

</div>

---

### CUBOID

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`CUBOID`である必要があります | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 直方体の中心の位置を設定します | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | ターゲットにするエンティティのタイプを設定します | ❌ |
| `x`                                                         | 直方体の長さを設定します | ✅ |
| `y`                                                         | 直方体の高さを設定します | ✅ |
| `z`                                                         | 直方体の幅を設定します。デフォルトは`x` | ❌ |
| `xBorder`                                                   | 内側の直方体の長さを設定します | ❌ |
| `yBorder`                                                   | 内側の直方体の高さを設定します | ❌ |
| `zBorder`                                                   | 内側の直方体の幅を設定します。デフォルトは`x` | ❌ |

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

このスクリプトは、雲のパーティクルを使用して直方体の形状を示しています。

</div>

</details>

</div>

---

### STATIC_RAY

| キー                                                                   |                 詳細                  | 必須 |
|----------------------------------------------------------------------|:-----------------------------------:|:--:|
| `shape`                                                              | ゾーンの形状を設定します。`STATIC_RAY`である必要があります | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |           線の最初の点の位置を設定します           | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |           線の最後の点の位置を設定します           | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |      ターゲットにするエンティティのタイプを設定します       | ❌  |
| `ignoresSolidBlocks`                                                 |      レイが固体ブロックを通過するかどうかを設定します       | ❌  |
| `pointRadius`                                                        |    レイの太さを設定します。デフォルトは0.5ブロックです。     | ❌  |

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

このスクリプトは、雲のパーティクルを使用して静的なレイの形状を示しています。

ゾーンの両端で`offset`オプションを使用することでゾーンの高さを調整し、レイがプレイヤーとボスの真ん中から表示されるようにしました。そうしないと、レイは足元に表示されます。

</div>

</details>

</div>

---

### ROTATING_RAY

| キー                                                                   |                  詳細                   | 必須 |
|----------------------------------------------------------------------|:-------------------------------------:|:--:|
| `shape`                                                              | ゾーンの形状を設定します。`ROTATING_RAY`である必要があります | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |       ターゲットにするエンティティのタイプを設定します        | ❌  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |            線の最初の点の位置を設定します            | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |            線の最後の点の位置を設定します            | ✅  |
| `animationDuration`                                                  |         回転にかかる時間をティック単位で設定します         | ✅  |
| `pitchPreRotation`                                                   |       アニメーションの前に、ピッチに初期回転を適用します       | ❌  |
| `yawPreRotation`                                                     |       アニメーションの前に、ヨーに初期回転を適用します        | ❌  |
| `pitchRotation`                                                      |          アニメーションのピッチ回転を設定します          | ❌  |
| `yawRotation`                                                        |          アニメーションのヨー回転を設定します           | ❌  |
| `ignoresSolidBlocks`                                                 |       レイが固体ブロックを通過するかどうかを設定します        | ❌  |
| `pointRadius`                                                        |     レイの太さを設定します。デフォルトは0.5ブロックです。      | ❌  |

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

このスクリプトは、雲のパーティクルを使用して回転するレイがどのように見えるかを示しています。

最初に、ボスからダメージを与えたプレイヤーまでのレイを、雲のパーティクルを使用して作成します。次に、`offset`
を使用して位置を少し1ブロック上に調整します。

次に、ターゲットにされたプレイヤーを中心に、レイを一周させます。この回転は、ターゲットにされたプレイヤーを中心に、完了するまでに5秒（100ティック）かかります。

</div>

</details>

</div>

---

### TRANSLATING_RAY

| キー                                                                   |                    詳細                    | 必須 |
|----------------------------------------------------------------------|:----------------------------------------:|:--:|
| `shape`                                                              | ゾーンの形状を設定します。`TRANSLATING_RAY`である必要があります | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |         ターゲットにするエンティティのタイプを設定します         | ❌  |
| `animationDuration`                                                  |          移動にかかる時間をティック単位で設定します           | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |             線の最初の点の位置を設定します              | ✅  |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md)         |           線の最初の点の目的地の位置を設定します            | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |             線の2番目の点の位置を設定します             | ✅  |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md)        |           線の2番目の点の目的地の位置を設定します           | ✅  |
| `ignoresSolidBlocks`                                                 |         レイが固体ブロックを通過するかどうかを設定します         | ❌  |
| `pointRadius`                                                        |       レイの太さを設定します。デフォルトは0.5ブロックです。       | ❌  |

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

このスクリプトは、雲のパーティクルを使用して移動するレイがどのように見えるかを示しています。

最初に、ボスからダメージを与えたプレイヤーまでのレイを、雲のパーティクルを使用して作成します。

次に、`FinalTarget1`と`FinalTarget2`の`offset`を使用して、両方のターゲットからレイを10ブロック上に移動させるアニメーションを行います。

アニメーションは完了するまでに5秒（100ティック）かかります。

Zの`offset`を`offset: 0,0,10`のように調整することで、レイを横方向に簡単に移動させることができます。

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

この動作は、ゲームでどちらを向いているかによって異なる場合があります。
<br>GIF画像に示されているスクリプトでXの`offset`を変更すると、レイは私たちの視点から見てまっすぐ私たちから離れていくように見えます。

</div>

</details>

---

## フィルター

フィルタープロパティを使用すると、ゾーン内の特定のエンティティのみをターゲットにすることができます。これらのエンティティは次のとおりです。

| 値        |              詳細               |
|----------|:-----------------------------:|
| `PLAYER` | ゾーン内のプレイヤーのみをターゲットにします（デフォルト） |
| `ELITE`  |     ゾーン内のエリートのみをターゲットにします     |
| `LIVING` |  ゾーン内のすべての生存エンティティをターゲットにします  |

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

このスクリプトの例は、フィルターを使用してゾーンがエリートのみをターゲットにするようにする方法を示しています。

</div>
