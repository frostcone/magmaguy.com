```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

このガイドはEliteMobs 7.3.4以降を対象としています

# カスタムイベントとは？

ここでいうカスタムイベントとは、プレイヤーのアクションに基づいて発生するもの、または時間によってトリガーされるものなど、ゲーム内でランダムに発生するイベントを指します。このプラグインには、バルログイベント、クラーケンイベント、トレジャーゴブリンイベントなど、いくつかのカスタムイベントがプリロードされています。

このシステムが**カスタム**イベントと呼ばれるのは、イベントをカスタマイズできるだけでなく、ゼロから作成することもできるからです。以下に、独自のイベントを作成およびカスタマイズする方法に関するガイドを示します。

# 共通設定

<div align="center">

以下に示す設定は、アクションイベントと時間指定イベントの両方で使用できます/使用する必要があります。

***

### isEnabled

イベントが有効かどうかを設定します。

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

イベントのタイプを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none  |

*`BREAK_BLOCK`、`FISH`、`TILL_SOIL`は[アクションイベント](#action-events)であり、`TIMED`は[時間指定イベント](#timed-events)であることに注意してください*

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

スポーンされるボスのリストを設定します。**必須！**

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

[アナウンスの優先度]($language$/elitemobs/creating_bosses.md&section=announcementpriority)を設定します。

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

<summary align="center"><b>イベント設定例</b></summary>

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

ブロックを破壊したり釣りをしたりといった特定のアクションが発生したときに実行される可能性があるイベントです。

### chance

アクションが発生したときにイベントが発生する確率を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `chance` | `0.0`から`1.0`の間の値 |  `0`   |

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

アクションが`BREAK_BLOCK`に設定されている場合にチェックするマテリアルのリストを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | [マテリアル](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)のリスト |  none   |

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

<summary align="center"><b>設定例</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

イベントタイプが`BREAK_BLOCK`であると仮定して、石炭鉱石ブロックが破壊されたときにイベントが実行される確率を0.1%に設定します。

</details>

</div>

## 時間指定イベント

<div align="center">

時間指定イベントは、設定可能な時間間隔で発生するイベントです。時間指定イベントのクールダウンが終了すると、イベントの重みに基づいて、時間指定イベントのリストからランダムな時間指定イベントが選択されます。

### spawnType

イベントで使用される[カスタムスポーン]($language$/elitemobs/creating_spawns.md)を設定します。これはボスがスポーンできる場所を定義します。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `spawnType` | [ファイル名](#filename) |  none   |

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

このイベントが再度選択されるまでの時間（分）を設定します。

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

イベントの重みを設定します。これは他のイベントよりも選択される確率に影響します。**推奨: 100**。

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

イベントの最大持続時間（分）を設定します。

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

ボスの死亡によってイベントが終了するかどうかを設定します。

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

イベントが終了するゲーム内時間を設定します。

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

イベントが開始する前に必要な最小オンラインプレイヤー数を設定します。

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

*イベントはキューに入れられることに注意してください。つまり、`customSpawn`で定義された条件が満たされた場合にのみ開始されます。*

<details>

<summary align="center"><b>イベント設定例</b></summary>

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