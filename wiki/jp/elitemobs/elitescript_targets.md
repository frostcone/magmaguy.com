```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite スクリプトターゲット

ターゲットは、Elite スクリプトの中心的な部分であり、アクションとゾーンが機能するために必要です。

## ターゲットタイプ

ターゲットタイプは、スクリプトによってどのエンティティまたは場所がターゲットになるかを設定します。

| ターゲットタイプ                  |                                    詳細                                     |                                                                                                   特殊                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             |  [範囲]($language$/elitemobs/elitescript_targets.md&section=range) 内のプレイヤー  |                                                                [`range`]($language$/elitemobs/elitescript_targets.md&section=range) が必要です                                                                |
| `NEARBY_MOBS`                |       [範囲]($language$/elitemobs/elitescript_targets.md&section=range) 内のモブ        |                                                                [`range`]($language$/elitemobs/elitescript_targets.md&section=range) が必要です                                                                |
| `WORLD_PLAYERS`              |                                ワールドにいるプレイヤー                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             サーバーにいるすべてのプレイヤー                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                イベントでターゲットにされたプレイヤー                                |                                                                   [互換性のあるイベントが必要です]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               パワーを使用しているエリート                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      ボスのスポーン位置をターゲットにする                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               特定の場所                                |                                                             [`location`]($language$/elitemobs/elitescript_targets.md&section=location) が必要です                                                             |
| `LOCATIONS`                  |                           複数の特定の場所                           |                                                            [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations) が必要です                                                            |
| `ZONE_FULL`                  |                             ゾーン内をターゲットにする                             |                                                                        [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要です                                                                         |
| `ZONE_BORDER`                |                             ゾーンの境界をターゲットにする                             |                                                                        [`Zone`]($language$/elitemobs/elitescript_zones.md) が必要です                                                                         |
| `ACTION_TARGET`              |                      アクションからターゲットを継承します。                      |                 **アクションの [条件]($language$/elitemobs/elitescript_conditions.md) と [相対ベクトル]($language$/elitemobs/elitescript_relative_vectors.md) でのみ使用できます！**                 |
| `LANDING_LOCATION`           |                     ブロックが落ちた場所をターゲットにする。                      |                                        **[`SPAWN_FALLING_BLOCK` アクション]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block) でのみ使用できます！**                                         |
| `INHERIT_SCRIPT_TARGET`      |           このスクリプトを実行したスクリプトのターゲットを継承します。           |                                                                          別のスクリプトからスクリプトが呼び出された場合にのみ実行できます！                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     このスクリプトを実行したスクリプトから継承したゾーン内をターゲットにする。     |                                                 [`Zone`]($language$/elitemobs/elitescript_zones.md) **をこのスクリプトを呼び出すスクリプトで設定する必要があります！**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     このスクリプトを実行したスクリプトから継承したゾーンの境界をターゲットにする。     |                                                 [`Zone`]($language$/elitemobs/elitescript_zones.md) **をこのスクリプトを呼び出すスクリプトで設定する必要があります！**                                                  |

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

これは、ターゲットにメッセージを送信します。ターゲットが `ALL_PLAYERS` に設定されているため、オンラインのすべてのプレイヤーにそのメッセージが送信されます。

</div>

</details>

</div>

---

## 共通属性

次の設定は、すべてのターゲットに適用できます。

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

これは、ボスの 2 ブロック上に雷を落とします。STRIKE\_LIGHTNING は位置を使用し、エンティティには影響を与えないため、オフセットを設定できます。 

メッセージを送信するためにオフセットを設定することはできません。ただし、ゾーンにオフセットを設定して、エンティティをターゲットにすることはできます。

</div>

</details>

</div>

---

## range

`NEARBY_PLAYERS` ターゲットタイプで、近くのプレイヤーをスキャンする範囲を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `range` | プレイヤーターゲットをスキャンする範囲（ブロック単位）を設定します。 | `20.0` |

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

これは、ボスが死亡したときに、ボスの周囲 25 ブロック以内のプレイヤーにメッセージを送信します。

</div>

</details>

</div>

## location

`LOCATION` ターゲットタイプに位置を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `location` | ターゲットにするワールド位置を設定します。 | `none` |

これは、`location: worldname,x,y,z,pitch,yaw` の形式で位置を設定します。

**注意: `same_as_boss` は、ワールド名の有効なプレースホルダーです。たとえば、`same_as_boss,100,64,100,0,0` は、ボスが存在するワールドをターゲットにする有効な場所です。**

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

これは、`myWorld` というワールドの、x=100、y=64、z=200 の位置に雷撃を発生させます。

</div>

</details>

</div>

---

## locations

`LOCATIONS` ターゲットタイプに位置を設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `locations` | ターゲットにするワールド位置のリストを設定します。 | `none` |

これは、`worldname,x,y,z,pitch,yaw` の形式で位置を設定します。

**注意: `same_as_boss` は、ワールド名の有効なプレースホルダーです。たとえば、`same_as_boss,100,64,100,0,0` は、ボスが存在するワールドをターゲットにする有効な場所です。**

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

これは、`myWorld` というワールドの、x=100、y=64、z=200 の位置に雷撃を発生させ、ボスと同じワールドの、x=-100、y=12、z=130 の位置に別の雷撃を発生させます。

</div>

</details>

</div>

---

## ゾーンのターゲット指定

[ゾーン]($language$/elitemobs/elitescript_zones.md) には、複数のターゲットがあり、Elite スクリプトを最大限に活用するためには、その仕組みを理解することが重要です。

ゾーンは、2 つの部分で構成されます。

### パート 1 - ゾーンの配置を設定する

ゾーンは、どこにあるのかを知る必要があり、そのために、雷撃などの他の場所ベースのエフェクトと同じように、ターゲットシステムを使用します。

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

これは、ボスの周囲に円柱型のゾーンを生成します。この例では、まだアクションは設定されていません。これは、以下で説明します。

[STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray) などのゾーンは、2 つ以上のターゲットを持つ場合があります。これは、光線が線であり、線は 2 つの点によって定義されるためです。これは、[ゾーンページ]($language$/elitemobs/elitescript_zones.md) でより詳しく説明されていますが、基本的にすべて同じように機能します。

</div>

</details>

</div>

### パート 2 - ゾーンの内側をターゲットにする

これでゾーンは配置場所がわかりました。次に、アクションに、定義したゾーンをターゲットにすることを知らせる必要があります。それが、`targetType: ZONE_FULL` と `targetType:ZONE_BORDER` の役割です。

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

パート 1 とパート 2 で同じゾーンを使用し、アクションを追加します。このアクションのターゲットは `ZONE_FULL` なので、ゾーン全体にパーティクルがスポーンされます。

注意: ZONE\_BORDER は、すべてのゾーンで使用できるわけではありません。[スクリプトゾーン]($language$/elitemobs/elitescript_zones.md) ページで、詳細を確認してください。

</div>

</details>

</div>

### ゾーンの追跡

ゾーンがターゲットとともに移動するかどうかを設定します。たとえば、`targetType: SELF` の場合、ボスが移動するときにゾーンが移動するかどうかを設定します。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `track` | ゾーンがターゲットとともに移動するかどうかを設定します。 | `true` |

アニメーション可能なゾーンは追跡できません。[詳細はこちらをご覧ください。]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

パート 1 とパート 2 の同じ例を使用すると、ゾーンが追跡されないように設定されています。これは、ゾーンがボスの位置にスポーンしますが、ボスが移動し続けても、ゾーンは最初にスポーンした場所に留まることを意味します。

最後に、ゾーンが追跡されないように設定されている場合、ゾーンはスクリプトが呼び出されたときに位置を登録します。

たとえば、スクリプトに警告フェーズとダメージフェーズを設けたい場合は、すべてのアクションを最初に実行し、後で個別に実行したいダメージ関連のアクションに待機時間を設定する必要があります。技術的な理由から、`RUN_SCRIPT` で呼び出すスクリプト全体を遅延させることはできません。

以下は、Frost Palace Sanctum から取得した、警告フェーズとダメージフェーズを持つパワーの正しい例です。

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

このスクリプトは、多くのことを行いますが、`VisualCylinder` と `DamageCylinder` の 2 つの明確なスクリプトに分かれています。

VisualCylinder は最初に実行され、`RUN_SCRIPT` アクションを実行します。このアクションは、`VisualCylinder` が実行されているのと同時に、`DamageCylinder` もすぐに実行します。

ただし、`DamageCylinder` の各アクションは、60 ティック（3 秒間）待機するように設定されています。

つまり、ボスは 3 秒間の警告フェーズを持ち、その後ダメージフェーズを実行し、ゾーンが追跡されないように設定されているにもかかわらず、警告ゾーンとダメージゾーンは同じ場所に存在します。

### ゾーン固有のターゲットプロパティ

ゾーンには、次のようなゾーン固有のプロパティがあります。

#### coverage

実際のアクションに使用されるゾーンのパーセンテージを設定します。位置ターゲットでのみ機能します（プレイヤーまたは他のエンティティをターゲットにする場合は機能しません）。

| 値 | 詳細 | デフォルト |
| --- | :-: | :-: |
| `coverage` | ゾーンのカバーされるパーセンテージを設定します。 | `1.0` |

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

スクリプトが別のスクリプトを実行する（または、そのスクリプトを「呼び出す」）場合、最初のスクリプトから 2 番目のスクリプトにゾーンとターゲットの情報を渡すことができます。

**例として**

1. **スクリプトランナーの改善**

スクリプトランナーは、他の多くのスクリプトを実行することのみを目的としたスクリプトです。これは、特に、正確なタイミングを必要とする複数のスクリプトを扱う場合に、スクリプトの管理を容易にするために使用されます。

ターゲットの継承により、複数のスクリプトで同じゾーンまたはターゲットを使用できるため、数百行にわたる反復的なスクリプトを削減できます。

2. **マトリョーシカターゲットフィルター/ロシアの入れ子人形ターゲットフィルター**

フィルター条件は、アクションのターゲットに適用できます。ターゲットを別のスクリプトに渡して、別のフィルターを適用すると、条件を重ねて、より具体的な基準に基づいて、同じターゲットプールにさまざまな効果を適用できます。

たとえば、プレイヤーを探すゾーンを作成し、ゾーン内のすべてのプレイヤーが特定のタグを持っているかどうかを確認するアクションを実行できます。有効なターゲットを別のスクリプトに渡すと、別のアクションがランダムなチェック条件を実行し、その確率に基づいて効果を適用できます。次に、ターゲットを別のスクリプトに渡すと、別の条件を使用して、ターゲットがまだ生きているかどうかを確認し、死亡している場合は特別な動作を実行できます。

これらはあくまで例です。これは、非常に柔軟性のあるシステムです。

3. **複雑なゾーン**

最後に、ターゲットを重ねて複雑なゾーンを作成することもできます。必要に応じて条件を使用することもできますし、スクリプトの条件と、スクリプトアクションからリストされているスクリプトの 1 つだけを実行する機能を使用して、半ランダムなゾーンを作成することもできます。

**注意:** このセクションでは、**「親スクリプト」** は、**「継承スクリプト」** を実行するスクリプトを指します。継承スクリプトは、継承されたターゲットを使用するスクリプトです。

ターゲットの継承を使用する場合は、_親スクリプト_ を注意深く確認して、正しいデータが渡されていることを確認してください。

#### INHERIT_SCRIPT_TARGET

`INHERIT_SCRIPT_TARGET` を使用する場合、_親スクリプト_ のターゲットは、継承スクリプトに渡されます。これには、いくつかの注意点があります。

- **エンティティターゲット** を渡す場合、場所を必要とするアクション（パーティクルをスポーンさせるなど）を実行できます。これは、エンティティの位置が使用されるためです。もちろん、エンティティを必要とするアクションを使用することもできます。

- **位置ターゲット** を渡す場合は、場所のみを使用できます。**位置からエンティティを取得する唯一の方法は、その位置にゾーンを作成し、エンティティを探すことです。** したがって、位置を渡してエンティティを取得することは不可能ではありませんが、少し余分な作業が必要です。


#### ゾーンを継承する

`INHERIT_SCRIPT_ZONE_FULL` または `INHERIT_SCRIPT_ZONE_BORDER` を使用する場合、_親スクリプト_ でゾーンを定義する必要があります。そうしないと、_継承スクリプト_ は正しく実行されません。

さらに、ゾーンは [追跡]($language$/elitemobs/elitescript_targets.md&section=zone-track) できます。これは、ゾーンとともに渡されます。

- **追跡されていない** ゾーンは、常に _継承スクリプト_ で定義された場所にゾーンを作成します。これは、_継承スクリプト_ のアクションがゾーン設定を使用して、アクションが実行されるたびに新しいゾーンを常に作成し、そのゾーンの位置はアクションによって定義されることを意味します。

- **追跡された** ゾーンは、_親スクリプト_ が `ZONE_FULL` または `ZONE_BORDER` をターゲットに設定されている場合、同じ正確なゾーン位置をすべての _継承スクリプト_ に渡すことができます。これは、すべてのスクリプトが同じ位置で動作することを意味します。

```

