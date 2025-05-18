```markdown
# Eliteスクリプトのターゲット

ターゲットはEliteスクリプトの中心的な要素であり、アクションやゾーンが機能するために必要です。

## ターゲットの種類

ターゲットの種類は、スクリプトによってどのエンティティまたは場所がターゲットになるかを設定します。

| ターゲットの種類             |                                    詳細                                    |                                                                                                   特殊                                                                                                   |
|------------------------------|:--------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | [範囲]($ja$/elitemobs/elitescript_targets.md&section=range)内のプレイヤー  |                                                                [`range`]($ja$/elitemobs/elitescript_targets.md&section=range)が必要                                                                |
| `NEARBY_MOBS`                |       [範囲]($ja$/elitemobs/elitescript_targets.md&section=range)内のモブ        |                                                                [`range`]($ja$/elitemobs/elitescript_targets.md&section=range)が必要                                                                |
| `WORLD_PLAYERS`              |                                ワールド内のプレイヤー                               |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             サーバー内のプレイヤー                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                イベント内のプレイヤー                               |                                                                   [互換性のあるイベントが必要]($ja$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               パワーを使用しているエリート                               |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      ボスのスポーン位置をターゲットにする                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               特定の場所                               |                                                             [`location`]($ja$/elitemobs/elitescript_targets.md&section=location)が必要                                                             |
| `LOCATIONS`                  |                           複数の特定の場所                           |                                                            [`locations`]($ja$/elitemobs/elitescript_targets.md&section=locations)が必要                                                            |
| `ZONE_FULL`                  |                             ゾーン内部をターゲット                             |                                                                        [`Zone`]($ja$/elitemobs/elitescript_zones.md)が必要                                                                         |
| `ZONE_BORDER`                |                             ゾーンの境界をターゲット                             |                                                                        [`Zone`]($ja$/elitemobs/elitescript_zones.md)が必要                                                                         |
| `ACTION_TARGET`              |                      アクションからターゲットを継承する。                      |                 **アクションの[条件]($ja$/elitemobs/elitescript_conditions.md)および[相対ベクトル]($ja$/elitemobs/elitescript_relative_vectors.md)にのみ使用可能!!**                 |
| `LANDING_LOCATION`           |                     ブロックが落下した場所をターゲットにする。                      |                                        **[`SPAWN_FALLING_BLOCK`アクション]($ja$/elitemobs/elitescript_actions.md&section=spawn_falling_block)にのみ使用可能！**                                         |
| `INHERIT_SCRIPT_TARGET`      |           このスクリプトを実行するスクリプトからターゲットを継承する            |                                                                          このスクリプトが別のスクリプトによって呼び出された場合にのみ実行可能！                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     このスクリプトを実行するスクリプトから継承されたゾーン内部をターゲットにする     |                                                 このスクリプトを呼び出すスクリプトに[`Zone`]($ja$/elitemobs/elitescript_zones.md)**が必要！**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     このスクリプトを実行するスクリプトから継承されたゾーンの境界をターゲットにする     |                                                 このスクリプトを呼び出すスクリプトに[`Zone`]($ja$/elitemobs/elitescript_zones.md)**が必要！**                                                  |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2Hello World!"
```

これはターゲットにメッセージを送信します。ターゲットが`ALL_PLAYERS`に設定されているため、オンラインの全プレイヤーにそのメッセージを送信します。

</div>

</details>

</div>

---

## 共有属性

以下の設定は、すべてのターゲットに適用できます。

| 値 | 詳細 | 特殊 |
| --- | :-: | :-: |
| `offset` | ターゲット位置のオフセットを設定します。 | エンティティをターゲットにできません！ |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

これはボスの2ブロック上に雷を落とします。STRIKE_LIGHTNINGは場所を使用し、エンティティには影響しないため、オフセットを持つことができます。

メッセージはプレイヤーに送信されるため、メッセージ送信にオフセットを設定することはできません。ただし、エンティティをターゲットにできるゾーンにオフセットを設定することは可能です。

</div>

</details>

</div>

---

## range

`NEARBY_PLAYERS`ターゲットタイプで近くのプレイヤーをスキャンする範囲を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `range` | プレイヤーターゲットをスキャンする範囲をブロック単位で設定します。 | `20.0` |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2Targeted players within 25 blocks!"
```

これはボスが死亡したときに、ボスの25ブロック以内のプレイヤーにメッセージを送信します。

</div>

</details>

</div>

## location

`LOCATION`ターゲットタイプの場所を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `location` | ターゲットとなるワールドの場所を設定します。 | `none` |

これは場所のフォーマットとして`location: worldname,x,y,z,pitch,yaw`を使用します。

**`same_as_boss`はワールド名の有効なプレースホルダーであることに注意してください。例えば、`same_as_boss,100,64,100,0,0`はボスがいるのと同じワールドをターゲットとする有効な場所になります。**

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "myWorld,100,64,200,0,0"
```

これは`myWorld`というワールドのx=100, y=64, z=200の場所に雷を発生させます。

</div>

</details>

</div>

---

## locations

`LOCATIONS`ターゲットタイプの場所を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `locations` | ターゲットとなるワールドの場所のリストを設定します。 | `none` |

これは場所のフォーマットとして`worldname,x,y,z,pitch,yaw`を使用します。

**`same_as_boss`はワールド名の有効なプレースホルダーであることに注意してください。例えば、`same_as_boss,100,64,100,0,0`はボスがいるのと同じワールドをターゲットとする有効な場所になります。**

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

これは`myWorld`というワールドのx=100, y=64, z=200の場所に雷を発生させ、さらにボスと同じワールドのx=-100, y=12, z=130の場所にもう一つ雷を発生させます。

</div>

</details>

</div>

---

## ゾーンのターゲット

[ゾーン]($ja$/elitemobs/elitescript_zones.md)は複数のターゲットを持ち、Eliteスクリプトを最大限に活用するためには、その仕組みを理解することが重要です。

ゾーンは2つの部分で機能します：

### パート1 - ゾーンの場所を設定する

ゾーンはどこに配置されるべきかを知る必要があり、そのためには雷撃のような他の場所ベースのエフェクトと同じ方法でターゲットシステムを使用します。

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

これはボスの周りに円柱状のゾーンを発生させます。この例ではまだアクションが設定されていませんが、それは後述します。

[STATIC_RAY]($ja$/elitemobs/elitescript_zones.md&section=static_ray)のような一部のゾーンは、2つ以上のターゲットを持ちます。これは、レイが線であり、線は2つの点で定義されるためです。[ゾーンのページ]($ja$/elitemobs/elitescript_zones.md)でより詳しく説明されていますが、それらは基本的にすべて同じように機能します。

</div>

</details>

</div>

### パート2 - ゾーン内部をターゲットにする

ゾーンがどこにあるかを知ったので、アクションがそのターゲットが定義したゾーンであることを知る必要があります。それが`targetType: ZONE_FULL`と`targetType:ZONE_BORDER`の目的です。

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

パート1と同じゾーンを使用して、アクションを追加します。このアクションのターゲットは`ZONE_FULL`であり、これはゾーン全体の内側にパーティクルを発生させることを意味します。

ZONE_BORDERはすべてのゾーンで利用できるわけではないことに注意してください。[スクリプトゾーン]($ja$/elitemobs/elitescript_zones.md)のページで詳細を確認してください。

</div>

</details>

</div>

### ゾーンの追跡

ゾーンがターゲットと一緒に移動するかどうかを設定します。例えば、`targetType: SELF`の場合にボスが移動するとゾーンも移動するかどうかなどです。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `track` | ゾーンがターゲットと一緒に移動するかどうかを設定します。 | `true` |

アニメーション可能なゾーンは追跡できないことに注意してください。[詳細はこちら。]($ja$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

パート1とパート2と同じ例を使用すると、ゾーンは追跡しないように設定されています。これは、ゾーンがボスの位置にスポーンしますが、ボスが移動し続けても、ゾーンは最初にスポーンした場所に留まることを意味します。

最後に、ゾーンが追跡しないように設定されている場合、スクリプトが呼び出された瞬間の位置を登録することに注意してください。

例として、スクリプトに警告フェーズとダメージフェーズを持たせたい場合、すべての行動を最初に実行し、後で個別に実行したいダメージに関連するすべての行動に待機時間を設定する必要があります。技術的な理由から、`RUN_SCRIPT`を介して呼び出すスクリプト全体を遅延させるべきではありません。

以下は、Frost Palace Sanctumから取られた、警告とダメージフェーズを持つパワーの正しい例です。

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

このスクリプトは多くのことを行いますが、`VisualCylinder`と`DamageCylinder`という2つの明確なスクリプトに分けられています。

VisualCylinderが最初に実行され、`RUN_SCRIPT`アクションを持ちます。これにより、VisualCylinderが実行されているのと同時にDamageCylinderもすぐに実行されます。

しかし、DamageCylinder内のすべてのアクションは60ティック、つまり3秒待機するように設定されています。

これは、ボスに3秒間の警告フェーズがあり、その後ダメージフェーズを実行することを意味します。そして、ゾーンが追跡しないように設定されていても、警告ゾーンとダメージゾーンは同じ場所に配置されます。

### ゾーン固有のターゲットプロパティ

ゾーンには以下の固有のプロパティがあります：

#### coverage

アクションに実際に使用されるゾーンの割合を設定します。場所のターゲットにのみ機能します（プレイヤーや他のエンティティをターゲットにする場合は機能しません）。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `coverage` | カバーされるゾーンの割合を設定します。`~`を使用してこの値をランダム化できます。例: `1.0~0.3`。 | `1.0` |

<div align="center">

<details>

<summary><b>例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

この場合、ゾーンの50%のみがパーティクルで覆われます。

</div>

</details>

</div>

### ターゲットの継承

あるスクリプトが別のスクリプトを実行する（または「呼び出す」）とき、最初のスクリプトから2番目のスクリプトにゾーンおよびターゲット情報を渡すことが可能です。

**使用例**

1. **改良されたスクリプトランナー**

スクリプトランナーは、他の多くのスクリプトを実行することだけを機能とするスクリプトです。これらは、特に正確なタイミングを必要とする複数のスクリプトを扱う場合に、スクリプトの管理を容易にするために使用されます。

ターゲット継承を使用すると、複数のスクリプトが同じゾーンまたはターゲットを使用でき、潜在的に数百行に及ぶ反復的なスクリプト記述を削減できます。

2. **マトリョーシカ式ターゲットフィルタリング / ロシアの入れ子人形式ターゲットフィルタリング**

アクションのターゲットにフィルタリング条件を適用できます。異なるフィルターを持つ別のスクリプトにターゲットを渡すことで、条件を重ね合わせ、ますます特定の基準に基づいて同じターゲットプールに異なる効果を適用することが可能になります。

例として、プレイヤーを探すゾーンを作成し、ゾーン内のすべてのプレイヤーが特定のタグを持っているかどうかをチェックするアクションを作成できます。その後、有効なターゲットを別のスクリプトに渡し、そこで別のアクションがランダムチェック条件を実行し、その確率に基づいて効果を適用できます。さらに、ターゲットを別のスクリプトに渡し、そこで別の条件がターゲットがまだ生きているかどうかをチェックし、死亡している場合に特別な動作を実行できます。
```Please specify the language you would like the text translated into.