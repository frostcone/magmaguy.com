[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 設定

<div align="center">

### isEnabled

NPCが有効かどうかを設定します。

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

### name

NPCの表示名を設定します。[カラーコード](#color_codes)に対応しています。

| キー     |         値         | デフォルト |
|--------|:-----------------:|:-----:|
| `name` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&aエンピーシー"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### scale

NPCのスケール（サイズ）を設定します。

| キー      |             値             | デフォルト |
|---------|:-------------------------:|:-----:|
| `scale` | [Multiplier](#multiplier) | `1.0` |

スケーリング時、`1.0` はデフォルトサイズを表します。エンティティを大きくするには、値を増やし（例：`1.2`
）、小さくするには値を減らします（例：`0.8`）。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### role

NPCの名前の下に表示される役職を設定します。視覚的な表示のみです。[カラーコード](#color_codes)に対応しています。

| キー     |         値         | デフォルト |
|--------|:-----------------:|:-----:|
| `role` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
role: "&c<赤い仲間>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

NPCの職業を設定します。変装を使用**しない**場合、スキンを設定します。

| キー           |                                             値                                             |  デフォルト   |
|--------------|:-----------------------------------------------------------------------------------------:|:--------:|
| `profession` | [職業](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | `NITWIT` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

プレイヤーが近づいたときにNPCが言う挨拶のリストを設定します。

| キー          |           値            | デフォルト |
|-------------|:----------------------:|:-----:|
| `greetings` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
greetings:
- こんにちは！
- ごきげんよう。
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

プレイヤーが近くにいる間にNPCが言うセリフを設定します（`DIALOG` interactionType の場合、これがセリフになります）。

| キー       |           値            | デフォルト |
|----------|:----------------------:|:-----:|
| `dialog` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dialog:
- りんごが好き！
- 今日は暑いね。
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

NPCの別れのメッセージを設定します。

| キー         |           値            | デフォルト |
|------------|:----------------------:|:-----:|
| `farewell` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
farewell: 
- またね！
- バイバイ！
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

NPCが話せるかどうかを設定します。

| キー        |          値          | デフォルト  |
|-----------|:-------------------:|:------:|
| `canTalk` | [Boolean](#boolean) | `true` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

NPCがプレイヤーの接近を検知できる半径を設定します。

| キー                 |         値         | デフォルト |
|--------------------|:-----------------:|:-----:|
| `activationRadius` | [Double](#double) | `3.0` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

NPCが行うインタラクションの種類を設定します。

| キー                |    値    | デフォルト |
|-------------------|:-------:|:-----:|
| `interactionType` | 特別な [1] |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

テレポートNPCがプレイヤーをテレポートできる前の場所がない場合、このメッセージが表示されます。[カラーコード](#color_codes)
を使用できます。

| キー                          |         値         | デフォルト |
|-----------------------------|:-----------------:|:-----:|
| `noPreviousLocationMessage` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &c以前の場所に戻せませんでした - 以前の場所が見つかりませんでした！'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

NPCが完全に消滅するまでの時間（分単位）を設定します。

| キー        |          値          |  デフォルト   |
|-----------|:-------------------:|:--------:|
| `timeout` | [Integer](#integer) | `0` (なし) |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

NPCが与えるクエストを設定します。

| キー              |           値            | デフォルト |
|-----------------|:----------------------:|:-----:|
| `questFileName` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

NPCが持つLibsDisguisesの変装を設定します。

| キー         |                            値                             | デフォルト |
|------------|:--------------------------------------------------------:|:-----:|
| `disguise` | [LibsDisguises形式]($language$/elitemobs/libsdisguises.md) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

カスタムLibsDisguises変装のデータを設定します。

| キー                   |                                                           値                                                           | デフォルト |
|----------------------|:---------------------------------------------------------------------------------------------------------------------:|:-----:|
| `customDisguiseData` | [LibsDisguises形式]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

NPCが使用するModelEngineのカスタムモデルを設定します。

| キー            |         値         | デフォルト |
|---------------|:-----------------:|:-----:|
| `customModel` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

NPCがメニューを開くアリーナのファイル名を設定します（`ARENA_MASTER` interactionType が必要です）。

| キー      |         値          | デフォルト |
|---------|:------------------:|:-----:|
| `arena` | [ファイル名](#filename) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

NPCが実行するコマンドを設定します（`COMMAND` interactionType が必要です）。

| キー        |         値         | デフォルト |
|-----------|:-----------------:|:-----:|
| `command` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
command: say コマンドを実行するのを見てください、なんてクール！
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

NPCのスポーン位置を設定します。`/em spawnnpc <npcfilename.yml>` コマンドを使用して設定する必要があります。

| キー              |         値         | デフォルト |
|-----------------|:-----------------:|:-----:|
| `spawnLocation` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

NPCのスポーン位置を設定します。`/em spawnnpc <npcfilename.yml>` コマンドを使用して設定する必要があります。

| キー               |           値            | デフォルト |
|------------------|:----------------------:|:-----:|
| `spawnLocations` | [文字列リスト](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnLocations:
  - my_world,10,50,10,0,0
  - my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

NPCをインスタンス化するかどうかを設定します（インスタンス化されたダンジョンで使用するため）。

| キー          |          値          |  デフォルト  |
|-------------|:-------------------:|:-------:|
| `instanced` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>NPC設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&c赤いルビン"
role: "&a<一般的なNPC>"
profession: NITWIT
greetings:
- やあ！
- こんにちは！
dialog:
- 素晴らしい会話だった！
- お話できてよかったです！
farewell:
- さようなら！
- またね！
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName: 
- my_quest.yml #npc interactionType は CUSTOM_QUEST_GIVER に設定する必要があります
disguise: SKELETON
customDisguiseData: #カスタム libsdisguise が設定されている場合に使用されます
customModel: MODEL_ONE
arena: my_arena.yml #npc interactionType は ARENA_MASTER に設定する必要があります
command: /say Hello World! #npc interactionType は COMMAND に設定する必要があります
spawnLocation: my_world,584,55,127,90,10 #NPCはピッチとヨーを使用して向きを設定することに注意してください。これは /em spawnnpc <npcfilename.yml> コマンドを実行すると自動的に設定されるため、コマンドを実行するときにNPCを向かせたい位置にポーズをとるようにしてください。
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## 特別 [1]

以下は、有効なNPCインタラクションタイプのリストです。

| タイプ                           |                      説明                      |
|-------------------------------|:--------------------------------------------:|
| `GUILD_GREETER`               |                冒険者ギルドのメニューを開く                |
| `CHAT`                        |           右クリックで `dialog` を順に表示します           |
| `CUSTOM_SHOP`                 |               カスタムショップのメニューを開く               |
| `PROCEDURALLY_GENERATED_SHOP` |                手続き型生成ショップを開く                 |
| `BAR`                         |                  バーメニューを開く                   |
| `ARENA`                       |                 アリーナメニューを開く                  |
| `QUEST_GIVER`                 |              手続き型生成クエストメニューを開く               |
| `CUSTOM_QUEST_GIVER`          | `questFileName` で設定された特定のクエストセットのクエストメニューを開く |
| `NONE`                        |                  インタラクションなし                  |
| `SELL`                        |                  売却メニューを開く                   |
| `TELEPORT_BACK`               |     プレイヤーを最後にいた非 elitemobs ワールドの場所に戻します      |
| `SCRAPPER`                    |                 スクラップメニューを開く                 |
| `REPAIRMAN`                   |                  修理メニューを開く                   |
| `ENCHANTER`                   |                エンチャントメニューを開く                 |
| `REFINER`                     |                リファイナーメニューを開く                 |
| `UNBINDER`                    |                アンバインドメニューを開く                 |
| `ARENA_MASTER`                |    `arenaFilename` で設定されたアリーナのアリーナメニューを開く    |
| `COMMAND`                     |          `command` で設定されたコマンドを実行します          |

*SCRAPPER
および同様のインタラクションタイプが何をするかについての詳細は、[ここ]($language$/elitemobs/item_upgrade_system.md)
をクリックしてください。*
