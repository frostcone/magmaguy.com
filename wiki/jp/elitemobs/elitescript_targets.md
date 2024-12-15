# エリートスクリプトのターゲット

ターゲットはエリートスクリプトの中核であり、アクションとゾーンが機能するために必要です。

## ターゲットの種類

ターゲットの種類は、スクリプトによってターゲットとなるエンティティまたは場所を設定します。

| ターゲットの種類                  |                                    詳細                                     |                                                                                                   特記事項                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | [範囲]($language$/elitemobs/elitescript_targets.md&section=range) 内のプレイヤー |                                                                [`範囲`]($language$/elitemobs/elitescript_targets.md&section=range) が必要                                                                |
| `NEARBY_MOBS`                |       [範囲]($language$/elitemobs/elitescript_targets.md&section=range) 内のモブ        |                                                                [`範囲`]($language$/elitemobs/elitescript_targets.md&section=range) が必要                                                                |
| `WORLD_PLAYERS`              |                                ワールド内のプレイヤー                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             サーバー内のプレイヤー                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                イベント内のプレイヤー                                |                                                                   [互換性のあるイベントが必要です]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               パワーを使用するエリート                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      ボスのスポーン位置をターゲットにする                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               特定の場所                                |                                                             [`場所`]($language$/elitemobs/elitescript_targets.md&section=location) が必要                                                             |
| `LOCATIONS`                  |                           複数の特定の場所                           |                                                            [`場所`]($language$/elitemobs/elitescript_targets.md&section=locations) が必要                                                            |
| `ZONE_FULL`                  |                             ゾーン内部をターゲットにする                             |                                                                        [`ゾーン`]($language$/elitemobs/elitescript_zones.md) が必要                                                                         |
| `ZONE_BORDER`                |                             ゾーンの境界をターゲットにする                             |                                                                        [`ゾーン`]($language$/elitemobs/elitescript_zones.md) が必要                                                                         |
| `ACTION_TARGET`              |                      アクションからターゲットを継承する                      |                 **アクションの[条件]($language$/elitemobs/elitescript_conditions.md)と[相対ベクトル]($language$/elitemobs/elitescript_relative_vectors.md)でのみ使用可能!!**                 |
| `LANDING_LOCATION`           |                     ブロックが落下した場所をターゲットにする                      |                                        **[`SPAWN_FALLING_BLOCK`アクション]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)でのみ使用可能！**                                         |
| `INHERIT_SCRIPT_TARGET`      |           このスクリプトを実行するスクリプトからターゲットを継承する            |                                                                          スクリプトが別のスクリプトによって呼び出された場合にのみ実行可能！                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     このスクリプトを実行するスクリプトから継承したゾーン内部をターゲットにする     |                                                 [`ゾーン`]($language$/elitemobs/elitescript_zones.md)が**このスクリプトを呼び出すスクリプト内に必要！**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     このスクリプトを実行するスクリプトから継承したゾーン境界をターゲットにする     |                                                 [`ゾーン`]($language$/elitemobs/elitescript_zones.md)が**このスクリプトを呼び出すスクリプト内に必要！**                                                  |

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
        sValue: "&2ハローワールド！"
```

これは、ターゲットにメッセージを送信します。ターゲットが`ALL_PLAYERS`に設定されているため、オンラインのすべてのプレイヤーにメッセージが送信されます。

</div>

</details>

</div>

---

## 共通属性

次の設定は、すべてのターゲットに適用できます。

| 値 | 詳細 | 特記事項 |
| --- | :-: | :-: |
| `offset` | ターゲット位置のオフセットを設定します。 | エンティティをターゲットにすることはできません！ |

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

これは、ボスの2ブロック上に雷を落とします。STRIKE_LIGHTNINGは場所を使用し、エンティティには影響しないため、オフセットを設定できます。

メッセージはプレイヤーに送信されるため、メッセージを送信するためにオフセットを設定することはできません。ただし、エンティティをターゲットにできるゾーンにオフセットを設定することはできます。

</div>

</details>

</div>

---

## range

`NEARBY_PLAYERS`ターゲットの種類で近くのプレイヤーをスキャンする範囲を設定します。

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
        sValue: "&225ブロック以内のプレイヤーをターゲットにしました！"
```

これは、ボスが死亡したときに、ボスの25ブロック以内のプレイヤーにメッセージを送信します。

</div>

</details>

</div>

## location

`LOCATION`ターゲットの種類の場所を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `location` | ターゲットとなるワールドの場所を設定します。 | `none` |

これは、場所の形式`location: worldname,x,y,z,pitch,yaw`を使用します。

**`same_as_boss`はワールド名の有効なプレースホルダーであることに注意してください。たとえば、`same_as_boss,100,64,100,0,0`は、ボスがいる場所と同じワールドをターゲットにする有効な場所です。**

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

これは、`myWorld`というワールドのx = 100、y = 64、z = 200の位置に雷を落とします。

</div>

</details>

</div>

---

## locations

`LOCATIONS`ターゲットの種類の場所を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `locations` | ターゲットとなるワールドの場所のリストを設定します。 | `none` |

これは、場所の形式`worldname,x,y,z,pitch,yaw`を使用します。

**`same_as_boss`はワールド名の有効なプレースホルダーであることに注意してください。たとえば、`same_as_boss,100,64,100,0,0`は、ボスがいる場所と同じワールドをターゲットにする有効な場所です。**

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

これは、`myWorld`というワールドのx = 100、y = 64、z = 200の位置に雷を落とし、ボスの同じワールドのx = -100、y = 12、z = 130の位置にもう1つ雷を落とします。

</div>

</details>

</div>

---

## ゾーンのターゲット設定

[ゾーン]($language$/elitemobs/elitescript_zones.md)には複数のターゲットがあり、エリートスクリプトを最大限に活用するためには、それらがどのように機能するかを理解することが重要です。

ゾーンは2つの部分で機能します。

### パート1 - ゾーンの場所の設定

ゾーンは、どこにあるべきかを知る必要があり、そのために、雷のように他の場所ベースのエフェクトと同じ方法でターゲットシステムを使用します。

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

これは、ボスの周りに円柱状のゾーンをスポーンします。この例では、まだアクションが設定されていないことに注意してください。これは以下で説明します。

[STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)などの一部のゾーンには、2つ以上のターゲットがあります。これは、光線が線であり、線が2つの点で定義されるためです。これについては[ゾーンページ]($language$/elitemobs/elitescript_zones.md)で詳しく説明しますが、基本的にすべて同じように機能します。

</div>

</details>

</div>

### パート2 - ゾーン内部のターゲット設定

ゾーンの場所がわかったので、アクションが、定義したゾーンをターゲットとしていることを知る必要があります。これが`targetType: ZONE_FULL`と`targetType: ZONE_BORDER`の目的です。

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

最初のパートと同じゾーンを使用して、アクションを追加しました。このアクションのターゲットは`ZONE_FULL`であり、これはゾーン全体の内側にパーティクルがスポーンすることを意味します。

ZONE_BORDERはすべてのゾーンで使用できるわけではないことに注意してください。[スクリプトゾーン]($language$/elitemobs/elitescript_zones.md)のページで詳しく説明します。

</div>

</details>

</div>

### ゾーントラック

ゾーンがターゲットと一緒に移動するかどうかを設定します。たとえば、ゾーンが`targetType: SELF`でボスが移動したときに移動するかどうかを設定します。

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

パート1とパート2の同じ例を使用すると、ゾーンは追跡しないように設定されました。これは、ゾーンがボスの位置にスポーンしますが、ボスが移動し続けても、ゾーンは最初にスポーンした場所にとどまることを意味します。

最後に、ゾーンが追跡しないように設定されている場合、スクリプトが呼び出された瞬間にその場所を登録することに注意してください。

例として、スクリプトに警告フェーズとダメージフェーズを設定したい場合は、すべてのアクションを開始時に実行し、後で個別に実行したいダメージに関連するすべてのアクションに待機時間を設定する必要があります。技術的な理由により、`RUN_SCRIPT`を介して呼び出すスクリプト全体を遅延させるべきではありません。

以下は、フロストパレスサンクタムから引用した、警告とダメージフェーズのあるパワーの正しい例です。

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

このスクリプトは多くのことを実行しますが、`VisualCylinder`と`DamageCylinder`の2つの明確なスクリプトに分かれています。

VisualCylinderが最初に実行され、`RUN_SCRIPT`アクションがあり、`VisualCylinder`が実行されていると同時に`DamageCylinder`もすぐに実行されます。

ただし、`DamageCylinder`のすべてのアクションは60ティック、つまり3秒間待機するように設定されています。

これは、ボスに3秒の警告フェーズがあり、その後にダメージフェーズが発生することを意味し、ゾーンが追跡しないように設定されていても、警告ゾーンとダメージゾーンは同じ場所に配置されます。

### ゾーン固有のターゲットプロパティ

ゾーンには、次の特定のプロパティがあります。

#### coverage

アクションに実際に使用されるゾーンのパーセンテージを設定します。場所のターゲットでのみ機能します（プレイヤーや他のエンティティをターゲットにするときは機能しません）。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `coverage` | カバーされるゾーンのパーセンテージを設定します。 | `1.0` |

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

この場合、ゾーンの50％のみがパーティクルで覆われます。

</div>

</details>

</div>

### ターゲットの継承

スクリプトが別のスクリプトを実行する（または「呼び出す」）場合、最初のスクリプトから2番目のスクリプトにゾーンとターゲットの情報を渡すことができます。

**使用例**

1.  **改善されたスクリプトランナー**

スクリプトランナーは、その唯一の機能が他の多くのスクリプトを実行することであるスクリプトです。これらは、特に正確なタイミングが必要な複数のスクリプトを処理する場合に、スクリプトの管理を容易にするために使用されます。

ターゲットの継承を使用すると、複数のスクリプトが同じゾーンまたはターゲットを使用できるため、数百行の反復スクリプトを削減できます。

2.  **マトリョーシカターゲットフィルタリング / ロシアの人形ターゲットフィルタリング**

フィルタリング条件は、アクション内のターゲットに適用できます。異なるフィルターを持つ別のスクリプトにターゲットを渡すことにより、条件をレイヤー化し、ますます具体的な基準に基づいて同じターゲットプールに異なるエフェクトを適用することが可能になります。

例として、プレイヤーを探すゾーンを作成し、ゾーン内のすべてのプレイヤーに特定のタグがあるかどうかを確認するアクションを作成できます。次に、有効なターゲットを別のスクリプトに渡すことができます。このスクリプトでは、別のアクションがランダムチェック条件を実行し、そのチャンスに基づいてエフェクトを適用できます。その後、ターゲットをさらに別のスクリプトに渡すことができます。ここでは、別の条件がターゲットがまだ生きているかどうかを確認し、死亡している場合は特別な動作を実行できます。

これらは、もちろん、ほんの一例です。非常に柔軟なシステムです。

3.  **複雑なゾーン**

最後に、必要に応じて条件を使用して、ターゲットをレイヤー化して複雑なゾーンを作成することができ、スクリプト条件と、スクリプトアクションからリストされたスクリプトの1つだけを実行する機能を使用して、半ランダム化されたゾーンを作成することもできます。

**注：**このセクションでは、**「親スクリプト」**とは、**「継承スクリプト」**を実行するスクリプトを指します。これは、継承されたターゲットを使用するスクリプトです。
ターゲット継承を使用する場合、正しいデータが渡されていることを確認するために、_親スクリプト_ を注意深く確認することが重要です。

#### INHERIT_SCRIPT_TARGET

`INHERIT_SCRIPT_TARGET` を使用すると、_親スクリプト_ のターゲットが継承スクリプトに渡されます。これにはいくつかの注意点があります。

- **エンティティターゲット** を渡す場合、エンティティの場所が使用されるため、場所を必要とするアクション (パーティクルのスポーンなど) を実行できます。もちろん、エンティティを必要とするアクションを使用することもできます。

- **場所ターゲット** を渡す場合、場所のみを使用できます。**場所からエンティティを取得する唯一の方法は、その場所にゾーンを作成し、エンティティを探すことです。**したがって、場所を渡してからエンティティを取得することは不可能ではありませんが、少し余分な作業が必要になります。

#### ゾーンの継承

`INHERIT_SCRIPT_ZONE_FULL` または `INHERIT_SCRIPT_ZONE_BORDER` を使用する場合は、_親スクリプト_ がゾーンを定義していることが必須です。そうしないと、_継承スクリプト_ は正しく実行できません。

さらに、ゾーンはオプションで [追跡]($language$/elitemobs/elitescript_targets.md&section=zone-track) することができます。これもゾーンと一緒に渡されます。

- **追跡されていない** ゾーンは、常に _継承スクリプト_ によって定義された場所にゾーンを作成します。これは、ゾーン設定が _継承スクリプト_ のアクションによって使用され、アクションが実行されるたびに新しいゾーンを作成することを意味し、これらのゾーンの場所はアクションによって定義されます。

- **追跡された** ゾーンは、_親スクリプト_ が `ZONE_FULL` または `ZONE_BORDER` をターゲットにするように設定されている場合、まったく同じゾーンの場所をすべての _継承スクリプト_ に渡すことができます。これは、すべてのスクリプトが同じ場所で動作することを意味します。
