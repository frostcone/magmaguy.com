はい、承知いたしました。入力されたテキストを日本語に翻訳し、Markdownの書式を維持します。

---

# エリートスクリプトゾーン

ゾーンは、スクリプターがあらゆる種類のアクションを実行するためのターゲットとして使用できる、形状によって定義された場所です。

スクリプトごとに設定できるゾーンは1つだけです。

ゾーンをターゲットにするには、ターゲットタイプ `ZONE_FULL` または `ZONE_BORDER` を使用できます。

ゾーン自体も、ゾーンが表示される場所を定義するために [スクリプトターゲット](ja/elitemobs/elitescript_targets.md) を使用します。

## shape

ゾーンの形状を設定します。有効な形状:

| 形状タイプ                                                               | 詳細 | アニメーション可能 | ボーダー |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`](ja/elitemobs/elitescript_zones.md&section=cylinder)         | 円筒形 | ❌ | ✅ |
| [`SPHERE`](ja/elitemobs/elitescript_zones.md&section=sphere)             | 球形 | ❌ | ✅ |
| [`DOME`](ja/elitemobs/elitescript_zones.md&section=dome)                 | ドーム形 (半球) | ❌ | ✅ |
| [`CUBOID`](ja/elitemobs/elitescript_zones.md&section=cuboid)             | 直方体形 (立方体状) | ❌ | ✅ |
| [`STATIC_RAY`](ja/elitemobs/elitescript_zones.md&section=static_ray)     | 2点間の固定線 | ❌ | ❌ |
| [`ROTATING_RAY`](ja/elitemobs/elitescript_zones.md&section=rotating_ray) | 2点間の回転線 | ✅ | ❌ |
| [`TRANSLATING_RAY`](ja/elitemobs/elitescript_zones.md&section=translating_ray) | 2つの初期点から2つの最終点へ移動する線 | ✅ | ❌ |

---

#### アニメーション可能

アニメーション付きのゾーンは、スクリプトが最初に呼び出されたときにゾーンアニメーションを開始します。

これは、アクションに待機時間がある場合、アクションが開始されるまでに、アクションが待機している間もゾーンはすでに動き回っていたことを意味します。

ゾーンは常に毎ティックアニメーションされます。これは、`SPAWN_PARTICLES` アクションを使用する場合、ゾーンは毎ティック移動するため、毎ティック実行するように設定できることを意味します。毎秒実行すると、パーティクルがスポーンされなかったティックでもゾーンが移動し続けたため、パーティクルが飛び跳ねているのが見られます。

回転するゾーンアクションを作成したいが、アクションを開始する前に一定量のティックを待ちたい場合は、それを別のスクリプトにし、`RUN_SCRIPT` を介してそのスクリプトを呼び出してください。`RUN_SCRIPT` に希望する待機時間があることを確認してください。

ゾーンは、アニメーションが完了すると最終的な場所に留まります。

すべてのアニメーション可能なゾーンは、追加の動きがスクリプターやプレイヤーにとって理解を難しくするため、スクリプトターゲット上で追跡しないように設定されています。これは、これらのゾーンがボスやプレイヤーを追跡せず、常に初期スポーンポイントに対して相対的に移動することを意味します。

---

#### ボーダー

特定のゾーンにはボーダーを設定できます。ボーダーとは、`ZONE_BORDER` をゾーンのターゲットとして使用できることを意味します。ボーダーは、最初のより大きな形状の内側に2番目のより小さな形状を作成することによって定義されます。より小さなゾーンとより大きなゾーンの間の領域がボーダーです。

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

このスクリプトは、ゾーンボーダーに**のみ**5秒間 (repeat every 5 x times 20 = 100ティック) 煙のパーティクルを発生させます。

`ZONE_BORDER` オプションを使用せず、代わりに `ZONE_FULL` オプションを使用した場合は、ゾーン全体がこのように煙のパーティクルで覆われます。

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
| `shape`                                                     | ゾーンの形状を設定します。`SPHERE` である必要があります | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | 球の中心の位置を設定します | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
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
| `shape`                                                     | ゾーンの形状を設定します。`DOME` である必要があります | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | ドームの中心の位置を設定します | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
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
| `shape`                                                     | ゾーンの形状を設定します。`CYLINDER` である必要があります | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | 円筒の中心の位置を設定します | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
| `radius`                                                    | 円筒の半径 | ✅ |
| `borderRadius`                                              | 内側の円筒の半径 | ❌ |
| `height`                                                    | 円筒の高さ | ❌ |

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

このスクリプトは、雲のパーティクルを使用して円筒の形状を示しています。

</div>

</details>

</div>

---

### CUBOID

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`CUBOID` である必要があります | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | 直方体の中心の位置を設定します | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
| `x`                                                         | 直方体の長さを設定します | ✅ |
| `y`                                                         | 直方体の高さを設定します | ✅ |
| `z`                                                         | 直方体の幅を設定します。デフォルトは `x` です | ❌ |
| `xBorder`                                                   | 内側の直方体の長さを設定します | ❌ |
| `yBorder`                                                   | 内側の直方体の高さを設定します | ❌ |
| `zBorder`                                                   | 内側の直方体の幅を設定します。デフォルトは `x` です | ❌ |

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

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`STATIC_RAY` である必要があります | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | 線の最初の点の位置を設定します | ✅ |
| [`target2`](ja/elitemobs/elitescript_targets.md)    | 線の最後の点の位置を設定します | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
| `ignoresSolidBlocks`                                        | レイがソリッドブロックを通過するかどうかを設定します | ❌ |
| `pointRadius`                                               | レイの太さを設定します。デフォルトは0.5ブロックです。 | ❌ |

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

このスクリプトは、雲のパーティクルを使用してスタティックレイの形状を示しています。

ゾーンの両端に `offset` オプションを使用することで、ゾーンの高さを調整し、レイがプレイヤーとボスの真ん中から出現するようにしました。そうしないと、レイは彼らの足元に出現します。

</div>

</details>

</div>

---

### ROTATING_RAY

| キー                                                         | 詳細 | 必須 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | ゾーンの形状を設定します。`ROTATING_RAY` である必要があります | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter) | ターゲットとなるエンティティの種類を設定します | ❌ |
| [`target`](ja/elitemobs/elitescript_targets.md)     | 線の最初の点の位置を設定します | ✅ |
| [`target2`](ja/elitemobs/elitescript_targets.md)    | 線の最後の点の位置を設定します | ✅ |
| `animationDuration`                                         | 回転にかかる時間をティック単位で設定します | ✅ |
| `pitchPreRotation`                                          | アニメーションの前にピッチに初期回転を適用します | ❌ |
| `yawPreRotation`                                            | アニメーションの前にヨーに初期回転を適用します | ❌ |
| `pitchRotation`                                             | アニメーションのピッチ回転を設定します | ❌ |
| `yawRotation`                                               | アニメーションのヨー回転を設定します | ❌ |
| `ignoresSolidBlocks`                                        | レイがソリッドブロックを通過するかどうかを設定します | ❌ |
| `pointRadius`                                               | レイの太さを設定します。デフォルトは0.5ブロックです。 | ❌ |

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

まず、雲のパーティクルを使用して、ボスからダメージを与えたプレイヤーへのレイを作成します。次に、`offset` を使用して位置を1ブロックわずかに上方に調整します。

次に、ターゲットされたプレイヤーを中心に、レイを完全に一周回転させます。この回転は完了するまでに5秒 (100ティック) かかります。

</div>

</details>

</div>

---

### TRANSLATING_RAY

| キー                                                          | 詳細 | 必須 |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | ゾーンの形状を設定します。`TRANSLATING_RAY` である必要があります | ✅ |
| [`filter`](ja/elitemobs/elitescript_zones.md&section=filter)  | ターゲットとなるエンティティの種類を設定します | ❌ |
| `animationDuration`                                          | 移動にかかる時間をティック単位で設定します | ✅ |
| [`target`](ja/elitemobs/elitescript_targets.md)      | 線の最初の点の位置を設定します | ✅ |
| [`finalTarget`](ja/elitemobs/elitescript_targets.md) | 線の最初の点の目的地の位置を設定します | ✅ |
| [`target2`](ja/elitemobs/elitescript_targets.md)     | 線の2番目の点の位置を設定します | ✅ |
| [`finalTarget2`](ja/elitemobs/elitescript_targets.md) | 線の2番目の点の目的地の位置を設定します | ✅ |
| `ignoresSolidBlocks`                                         | レイがソリッドブロックを通過するかどうかを設定します | ❌ |
| `pointRadius`                                                | レイの太さを設定します。デフォルトは0.5ブロックです。 | ❌ |

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

まず、雲のパーティクルを使用して、ボスからダメージを与えたプレイヤーへのレイを作成します。

次に、`FinalTarget1` と `FinalTarget2` の `offset` を使用して、両方のターゲットからレイを10ブロック上方に移動させます。

アニメーションは完了するまでに5秒 (100ティック) かかります。

Z `offset` を `offset: 0,0,10` のように調整することで、レイを簡単に横方向に移動させることができます。

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

この挙動は、ゲーム内でプレイヤーが向いている方向によって変わる可能性があります。
<br>GIF画像に示されているスクリプトで X `offset` を変更すると、レイはプレイヤーの視点から直線的に遠ざかるように見えます。

</div>

</details>

</div>

---

## filter

`filter` プロパティは、ゾーン内の特定のエンティティのみをターゲットにするために使用できます。これらのエンティティは次のとおりです。

| 値 | 詳細 |
| --- | :-: |
| `PLAYER` | ゾーン内のプレイヤーのみをターゲットにします (デフォルト) |
| `ELITE` | ゾーン内のエリートのみをターゲットにします |
| `LIVING` | ゾーン内のすべての生きているエンティティをターゲットにします |

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

この例のスクリプトは、フィルターを使用してゾーンがエリートのみをターゲットにする方法を示しています。

</div>

</details>

</div>