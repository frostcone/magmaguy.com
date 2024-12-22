[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

このガイドは、EliteMobs 7.3.4 以降のバージョンを対象としています。

# カスタムイベントとは？

ここで言うカスタムイベントとは、プレイヤーの行動や時間経過によってトリガーされる、ゲーム内でランダムに発生するイベントのことです。このプラグインには、バルログイベント、クラーケンイベント、トレジャーゴブリンイベントなど、多くのカスタムイベントがプリロードされています。

このシステムが**カスタム**イベントと呼ばれるのは、イベントをカスタマイズできるだけでなく、ゼロから作成することもできるからです。以下は、独自のイベントを作成およびカスタマイズする方法に関するガイドです。

# 一般的な設定項目

<div align="center">

以下の設定は、アクションイベントと時間経過イベントの両方に使用できます/使用する必要があります。

***

### isEnabled

イベントが有効かどうかを設定します。

| キー          |          値          | デフォルト  |
|-------------|:-------------------:|:------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

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

| キー          |                       値                        | デフォルト |
|-------------|:----------------------------------------------:|:-----:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` |  なし   |

*`BREAK_BLOCK`、`FISH`、`TILL_SOIL`は[アクションイベント](#action-events)で、`TIMED`は[時間経過イベント](#timed-events)
です。*

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

スポーンさせるボスのリストを設定します。**必須！**

| キー              |              値              | デフォルト |
|-----------------|:---------------------------:|:-----:|
| `bossFilenames` | [String List](#string_list) |  なし   |

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

| キー                     |          値          | デフォルト |
|------------------------|:-------------------:|:-----:|
| `announcementPriority` | [Integer](#integer) |  なし   |

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

| キー             |         値         | デフォルト |
|----------------|:-----------------:|:-----:|
| `startMessage` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
startMessage: イベントが開始されました！
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

イベント終了時に送信されるメッセージを設定します。

| キー           |         値         | デフォルト |
|--------------|:-----------------:|:-----:|
| `endMessage` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
endMessage: イベントが終了しました！
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

イベント開始時に実行されるコマンドを設定します。

| キー                   |              値              | デフォルト |
|----------------------|:---------------------------:|:-----:|
| `eventStartCommands` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
eventStartCommands:
- say イベントが開始されました!!
- "$chance=0.5$ say なんてスポーンだ！"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

イベント終了時に実行されるコマンドを設定します。

| キー                 |              値              | デフォルト |
|--------------------|:---------------------------:|:-----:|
| `eventEndCommands` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
eventEndCommands:
- say イベントが終了、残念。
- "$chance=0.5$ say 遅すぎたな、坊や！"
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
startMessage: "クールなイベントが開始されます！"
endMessage: "クールなイベントが終了します！"
eventStartCommands:
  - say イベントが開始されました！
eventEndCommands:
  - say イベントが終了しました！
```

</div>

</details>

</div>

## アクションイベント

<div align="center">

ブロックを破壊したり、釣りをしたりするなどの特定のアクションが発生した場合に、実行される可能性のあるイベントです。

### chance

アクションが発生した場合にイベントが発生する確率を設定します。

| キー       |       値       | デフォルト |
|----------|:-------------:|:-----:|
| `chance` | `0.0`～`1.0`の値 |  `0`  |

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

アクションが`BREAK_BLOCK`に設定されている場合にチェックする、素材のリストを設定します。

| キー                   |                                      値                                       | デフォルト |
|----------------------|:----------------------------------------------------------------------------:|:-----:|
| `breakableMaterials` | [素材](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) のリスト |  なし   |

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

イベントタイプが`BREAK_BLOCK`の場合、石炭鉱石のブロックが破壊されたときにイベントが実行される確率が0.1%に設定されます。

</details>

</div>

## 時間経過イベント

<div align="center">

時間経過イベントは、設定可能な時間間隔で発生するイベントです。時間経過イベントのクールダウンが終了すると、イベントの重みに基づいて、時間経過イベントのリストからランダムに時間経過イベントが選択されます。

### spawnType

イベントで使用される[カスタムスポーン]($language$/elitemobs/creating_spawns.md)を設定します。これにより、ボスがスポーンできる場所が定義されます。

| キー          |           値           | デフォルト |
|-------------|:---------------------:|:-----:|
| `spawnType` | [Filename](#filename) |  なし   |

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

このイベントが再び選択されるまでの時間（分単位）を設定します。

| キー              |          値          | デフォルト |
|-----------------|:-------------------:|:-----:|
| `localCooldown` | [Integer](#integer) |  `0`  |

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

次のイベントが選択されるまでの時間（分単位）を設定します。

| キー               |          値          | デフォルト |
|------------------|:-------------------:|:-----:|
| `globalCooldown` | [Integer](#integer) |  `0`  |

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

イベントの重みを設定します。これにより、他のイベントよりも選択される確率に影響します。**推奨: 100**。

| キー       |         値         | デフォルト |
|----------|:-----------------:|:-----:|
| `weight` | [Double](#double) |  `0`  |

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

イベントの最大時間（分単位）を設定します。

| キー              |          値          | デフォルト |
|-----------------|:-------------------:|:-----:|
| `eventDuration` | [Integer](#integer) |  `0`  |

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

イベントがボスの死亡で終了するかどうかを設定します。

| キー                       |          値          | デフォルト  |
|--------------------------|:-------------------:|:------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) | `true` |

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

| キー             |          値          | デフォルト  |
|----------------|:-------------------:|:------:|
| `eventEndTime` | [Boolean](#boolean) | `true` |

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

イベントが開始される前に必要なオンラインプレイヤーの最小数を設定します。

| キー                   |          値          | デフォルト |
|----------------------|:-------------------:|:-----:|
| `minimumPlayerCount` | [Integer](#integer) |  `1`  |

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

*イベントはキューに入れられるため、`customSpawn`で定義された条件が満たされた場合にのみ開始されることに注意してください。*

<details>

<summary align="center"><b>イベント設定例</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "クールなイベントが開始されます！"
endMessage: "クールなイベントが終了します！"
eventStartCommands:
- say イベントが開始されました！
eventEndCommands:
- say イベントが終了しました！
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
