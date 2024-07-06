```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

このガイドは、EliteMobs 7.3.4 以降を対象としています

# カスタムイベントとは？

カスタムイベントは、プレイヤーのアクションに基づいて発生する場合でも、時間に基づいて発生する場合でも、ゲーム内でランダムに発生するイベントです。このプラグインには、バルログイベント、クラーケンイベント、宝箱ゴブリンイベントなど、さまざまなカスタムイベントが事前にロードされています。

このシステムは、イベントをカスタマイズできるだけでなく、最初から作成することもできるため、**カスタム** イベントと呼ばれています。以下は、独自のカスタムイベントを作成してカスタマイズする方法のガイドです。

# 共通の設定

<div align="center">

次の設定は、アクションイベントと時間イベントの両方で使用できます/使用する必要があります。

***

### isEnabled

イベントを有効にするかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### eventType

イベントの種類を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none  |

*注意：`BREAK_BLOCK`、`FISH`、`TILL_SOIL` は [アクションイベント](#action-events) で、`TIMED` は [時間イベント](#timed-events) です*

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

スポーンするボスのリストを設定します。**必須です！**

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [String List](#string_list) | none  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

[アナウンスの優先順位]($language$/elitemobs/creating_bosses.md&section=announcementpriority) を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Integer](#integer) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

イベント開始時に送信されるメッセージを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `startMessage` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
startMessage: An event has started!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

イベント終了時に送信されるメッセージを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `endMessage` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
endMessage: An event has ended!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

イベント開始時に実行されるコマンドを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

イベント終了時に実行されるコマンドを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>イベント設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## アクションイベント

<div align="center">

特定のアクション（ブロックの破壊や釣りなど）が発生したときに実行される可能性のあるイベントです。

### chance

アクションが発生したときにイベントが発生する確率を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `chance` | `0.0` と `1.0` の間の値 |  `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

アクションが `BREAK_BLOCK` に設定されている場合、確認する素材のリストを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | [素材](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) のリスト |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>設定の例</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

イベントタイプが `BREAK_BLOCK` である場合、石炭鉱石ブロックを破壊すると、0.1% の確率でイベントが実行されます。

</details>

</div>

## 時間イベント

<div align="center">

時間イベントは、設定可能な時間間隔で発生するイベントです。時間イベントのクールダウンが終了すると、イベントの重みに基づいて、時間イベントのリストからランダムな時間イベントが選択されます。

### spawnType

イベントで使用される [カスタムスポーン]($language$/elitemobs/creating_spawns.md) を設定します。これは、ボスがスポーンできる場所を定義します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Filename](#filename) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

このイベントが再び選択されるまでの時間（分）を設定します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

次のイベントが選択されるまでの時間（分）を設定します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

イベントの重みを設定します。これは、他のイベントよりも選択される確率に影響を与えます。**推奨：100**。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `weight` | [Double](#double) |  `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

イベントの最大時間（分）を設定します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

ボスが死亡するとイベントが終了するかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

イベントが終了するゲーム内時間設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

イベントを開始するまでに必要なオンラインプレイヤーの最小数を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*注意: イベントはキューに入れられるため、`customSpawn` で定義された条件が満たされるまでイベントは開始されません。*

<details> 

<summary align="center"><b>イベント設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
customSpawn: "myCoolSpawn.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>

```