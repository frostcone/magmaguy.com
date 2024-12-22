# エリートスクリプトのターゲット

ターゲットはエリートスクリプトの中核であり、アクションとゾーンが機能するために必要です。

## ターゲットの種類

ターゲットの種類は、スクリプトがどのエンティティまたは場所をターゲットにするかを設定します。

| ターゲットの種類                     |                                   詳細                                   |                                                                   特別な点                                                                   |
|------------------------------|:----------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | [範囲]($language$/elitemobs/elitescript_targets.md&section=range)内のプレイヤー |                                 [`range`]($language$/elitemobs/elitescript_targets.md&section=range) が必要                                 |
| `NEARBY_MOBS`                |  [範囲]($language$/elitemobs/elitescript_targets.md&section=range)内のMob  |                                 [`range`]($language$/elitemobs/elitescript_targets.md&section=range) が必要                                 |
| `WORLD_PLAYERS`              |                              ワールド内のプレイヤー                               |                                                                    ❌                                                                     |
| `ALL_PLAYERS`                |                              サーバー内のプレイヤー                               |                                                                    ❌                                                                     |
| `DIRECT_TARGET`              |                              イベント内のプレイヤー                               |                                       [互換性のあるイベントが必要]($language$/elitemobs/elitescript_events.md)                                        |
| `SELF`                       |                             パワーを使用しているエリート                             |                                                                    ❌                                                                     |
| `SELF_SPAWN`                 |                            ボスのスポーン地点をターゲット                             |                                                                    ❌                                                                     |
| `LOCATION`                   |                                 特定の場所                                  |                              [`location`]($language$/elitemobs/elitescript_targets.md&section=location) が必要                              |
| `LOCATIONS`                  |                                複数の特定の場所                                |                             [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations) が必要                             |
| `ZONE_FULL`                  |                              ゾーンの内部をターゲット                              |                                         [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要                                          |
| `ZONE_BORDER`                |                              ゾーンの境界をターゲット                              |                                         [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要                                          |
| `ACTION_TARGET`              |                            アクションからターゲットを継承                             | **アクションの[条件]($language$/elitemobs/elitescript_conditions.md)と[相対ベクトル]($language$/elitemobs/elitescript_relative_vectors.md)でのみ使用できます!!** |
| `LANDING_LOCATION`           |                           ブロックが落下した場所をターゲット                            |           **[`SPAWN_FALLING_BLOCK`アクション]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)でのみ使用できます!**            |
| `INHERIT_SCRIPT_TARGET`      |                      このスクリプトを実行するスクリプトからターゲットを継承                       |                                                   スクリプトが別のスクリプトによって呼び出された場合にのみ実行できます!                                                    |
| `INHERIT_SCRIPT_ZONE_FULL`   |                  このスクリプトを実行するスクリプトから継承されたゾーンの内部をターゲット                  |                              [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要**このスクリプトを呼び出すスクリプト内!**                              |
| `INHERIT_SCRIPT_ZONE_BORDER` |                  このスクリプトを実行するスクリプトから継承されたゾーンの境界をターゲット                  |                              [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要**このスクリプトを呼び出すスクリプト内!**                              |

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
        sValue: "&2ハローワールド!"
```

これはターゲットにメッセージを送信します。ターゲットが `ALL_PLAYERS` に設定されているため、すべてのオンラインプレイヤーにメッセージが送信されます。

</div>

</details>

</div>

---

## 共有属性

以下の設定は、すべてのターゲットに適用できます。

| 値        |          詳細          |           特別な点           |
|----------|:--------------------:|:------------------------:|
| `offset` | ターゲット位置のオフセットを設定します。 | エンティティをターゲットにすることはできません! |

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

これはボスの2ブロック上に雷を落とします。STRIKE_LIGHTNINGはエンティティではなく場所を使用するため、オフセットを設定できることに注意してください。

メッセージはプレイヤーに送信されるため、オフセットを設定してメッセージを送信することはできません。ただし、エンティティをターゲットにできるゾーンにオフセットを設定することはできます。

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
        sValue: "&225ブロック以内のプレイヤーをターゲットにしました!"
```

これは、ボスが死亡したときに、ボスの25ブロック以内のプレイヤーにメッセージを送信します。

</div>

</details>

</div>

## location

`LOCATION`ターゲットタイプの場所を設定します。

| 値          |           詳細           | デフォルト  |
|------------|:----------------------:|:------:|
| `location` | ターゲットにするワールドの場所を設定します。 | `none` |

これは、場所の形式 `location: ワールド名,x,y,z,pitch,yaw` を使用します。

**`same_as_boss`
は、ワールド名の有効なプレースホルダーであることに注意してください。たとえば、`same_as_boss,100,64,100,0,0`
は、ボスがいる場所と同じワールドをターゲットにする有効な場所です。**

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

これは、`myWorld` という名前のワールドの x=100, y=64, z=200 の場所に雷を落とします。

</div>

</details>

</div>

---

## locations

`LOCATIONS`ターゲットタイプの場所を設定します。

| 値           |             詳細             | デフォルト  |
|-------------|:--------------------------:|:------:|
| `locations` | ターゲットにするワールドの場所のリストを設定します。 | `none` |

これは、場所の形式 `ワールド名,x,y,z,pitch,yaw` を使用します。

**`same_as_boss`
は、ワールド名の有効なプレースホルダーであることに注意してください。たとえば、`same_as_boss,100,64,100,0,0`
は、ボスがいる場所と同じワールドをターゲットにする有効な場所です。**

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

これは、`myWorld` という名前のワールドの x=100, y=64, z=200 の場所と、ボスと同じワールドの x=-100, y=12, z=130
の場所に別の雷を落とします。

</div>

</details>

</div>

---

## ゾーンのターゲット設定

[ゾーン]($language$/elitemobs/elitescript_zones.md)には複数のターゲットがあり、エリートスクリプトを最大限に活用するためには、それらがどのように機能するかを理解することが重要です。

ゾーンは2つの部分で機能します。

### パート1 - ゾーンの配置場所の設定

ゾーンはどこにあるべきかを知る必要があり、それを行うには、雷のように他の場所ベースのエフェクトと同じようにターゲットシステムを使用します。

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

これは、ボスの周りに円柱状のゾーンを生成します。この例ではまだアクションが設定されていないことに注意してください。これについては以下で説明します。

[STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)
のような一部のゾーンには、2つ以上のターゲットがあります。これは、光線が線であり、線が2点で定義されるためです。これについては、[ゾーンページ]($language$/elitemobs/elitescript_zones.md)
でより詳しく説明しますが、基本的にすべて同じように機能します。

</div>

</details>

</div>

### パート2 - ゾーン内部のターゲット設定

ゾーンがどこにあるかがわかったので、アクションに、ターゲットが定義したゾーンであることを認識させる必要があります。それが `targetType: ZONE_FULL`
と `targetType:ZONE_BORDER` の目的です。

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

最初の部分と同じゾーンを使用して、アクションを追加しました。このアクションのターゲットは `ZONE_FULL`
であり、ゾーン全体の内側にパーティクルを生成することを意味します。

ZONE_BORDER
はすべてのゾーンで使用できるわけではないことに注意してください。[スクリプトゾーン]($language$/elitemobs/elitescript_zones.md)
ページで詳細をご覧ください。

</div>

</details>

</div>

### ゾーンの追跡

ゾーンがターゲットと一緒に移動するかどうかを設定します。たとえば、`targetType: SELF` の場合、ボスが移動したときにゾーンが移動するかどうかなどです。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `track` | ゾーンがターゲットと一緒に移動するかどうかを設定します。 | `true` |

アニメーション可能なゾーンは追跡できないことに注意してください。[詳細はこちら。]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

パート1とパート2の同じ例を使用すると、ゾーンは追跡しないように設定されました。つまり、ゾーンはボスの場所にスポーンしますが、ボスが移動し続けても、ゾーンは最初にスポーンした場所に留まります。

最後に、ゾーンが追跡しないように設定されている場合、スクリプトが呼び出された瞬間にその場所を登録することに注意してください。

例として、スクリプトに警告フェーズとダメージフェーズを設定する場合は、すべての開始時にすべてのアクションを実行し、後で個別に実行したいダメージに関連するすべてのアクションに待機時間を設定する必要があります。技術的な理由から、`RUN_SCRIPT`
を介して呼び出すスクリプト全体を遅延させるべきではありません。

以下は、フロストパレスサンクタムから採取された、警告フェーズとダメージフェーズを備えたパワーの正しい例です。

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

このスクリプトは多くのことを行いますが、2つの明確なスクリプト、`VisualCylinder` と `DamageCylinder` に分かれています。

VisualCylinder は最初に実行され、`RUN_SCRIPT` アクションがあります。これにより、`VisualCylinder`
が実行されていると同時に `DamageCylinder` もすぐに実行されます。

ただし、`DamageCylinder` のすべてのアクションは、60ティックまたは3秒間待機するように設定されています。

つまり、ボスには3秒の警告フェーズがあり、その後ダメージフェーズが発生し、ゾーンは追跡しないように設定されていても、警告ゾーンとダメージゾーンは同じ場所にあります。

### ゾーン固有のターゲットプロパティ

ゾーンには、次の特定のプロパティがあります。

#### coverage

アクションに実際に使用されるゾーンの割合を設定します。場所ターゲットでのみ機能します（プレイヤーやその他のエンティティをターゲットにする場合は機能しません）。

| 値          |         詳細          | デフォルト |
|------------|:-------------------:|:-----:|
| `coverage` | カバーされるゾーンの割合を設定します。 | `1.0` |

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

この場合、ゾーンの 50% のみがパーティクルで覆われます。

</div>

</details>

</div>

### ターゲットの継承

スクリプトが別のスクリプトを実行する（または「呼び出す」）場合、最初のスクリプトから2番目のスクリプトにゾーンとターゲット情報を渡すことができます。

**使用例**

1. **改善されたスクリプトランナー**

スクリプトランナーは、多くの他のスクリプトを実行することだけを目的としたスクリプトです。これらは、特に正確なタイミングを必要とする複数のスクリプトを処理する場合に、スクリプトの管理を容易にするために使用されます。

ターゲットの継承により、複数のスクリプトが同じゾーンまたはターゲットを使用できるため、数百行にも及ぶ可能性のある反復スクリプトを削減できます。

2. **マトリョーシカターゲットフィルタリング/ロシアの人形ネストターゲットフィルタリング**

フィルター条件は、アクションのターゲットに適用できます。異なるフィルターを使用してターゲットを別のスクリプトに渡すことで、条件を階層化し、ますます具体的な基準に基づいて同じターゲットプールに異なるエフェクトを適用することができます。

たとえば、プレイヤーを探すゾーンを作成し、ゾーン内のすべてのプレイヤーに特定のタグがあるかどうかをチェックするアクションを作成することができます。有効なターゲットは別のスクリプトに渡され、そこで別のアクションがランダムチェック条件を実行し、そのチャンスに基づいてエフェクトを適用できます。その後、ターゲットはさらに別のスクリプトに渡され、そこで別の条件がターゲットがまだ生きているかどうかを確認し、ターゲットが死亡している場合に特別な動作を実行できます。

もちろん、これらは単なる例です。非常に柔軟なシステムです。

3. **複雑なゾーン**

最後に、ターゲットを階層化して複雑なゾーンを作成したり、必要に応じて条件を使用したりすることができ、スクリプト条件とスクリプトアクションからリストされたスクリプトの1つのみを実行する機能を使用して、準ランダム化されたゾーンを作成することもできます。

**注意：**このセクションでは、**「親スクリプト」**は**「継承スクリプト」**を実行するスクリプトを指し、**「継承スクリプト」**
は継承されたターゲットを使用するスクリプトを指します。
ターゲットの継承を使用する場合、正しいデータが渡されていることを確認するために、**親スクリプト**を注意深く確認することが重要です。

#### INHERIT_SCRIPT_TARGET

`INHERIT_SCRIPT_TARGET`を使用すると、**親スクリプト**からのターゲットが継承スクリプトに渡されます。これにはいくつかの注意点があります。

- **エンティティターゲット**
  を渡す場合、エンティティの場所が使用されるため、場所を必要とするアクション（パーティクルの生成など）を実行できます。もちろん、エンティティを必要とするアクションを使用することも可能です。

- **場所ターゲット**を渡す場合、場所のみを使用できます。**
  場所からエンティティを取得する唯一の方法は、その場所にゾーンを作成し、エンティティを探すことです。**
  そのため、場所を渡してからエンティティを取得することが不可能ではないものの、少し追加の作業が必要になります。

#### ゾーンの継承

`INHERIT_SCRIPT_ZONE_FULL`または`INHERIT_SCRIPT_ZONE_BORDER`を使用する場合、**親スクリプト**がゾーンを定義していることが不可欠です。そうしないと、
**継承スクリプト**は正しく実行できません。

さらに、ゾーンはオプションで[追跡]($language$/elitemobs/elitescript_targets.md&section=zone-track)できます。これもゾーンとともに渡されます。

- **追跡されていない**ゾーンは、**継承スクリプト**で定義された場所に常にゾーンを作成します。つまり、ゾーン設定は、アクションが実行されるたびに新しいゾーンを作成するために
  **継承スクリプト**のアクションで使用され、それらのゾーンの場所はアクションによって定義されます。

- **追跡されている**ゾーンは、**親スクリプト**が`ZONE_FULL`または`ZONE_BORDER`をターゲットに設定されている場合、同じ正確なゾーンの場所をすべての
  **継承スクリプト**に渡すことができます。つまり、すべてのスクリプトは同じ場所で動作します。
