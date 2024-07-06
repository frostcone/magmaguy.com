```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# アリーナの作成

<div align="center">

### isEnabled

アリーナを有効にするかどうかを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Boolean](#boolean) | `true`    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName


アリーナの名称を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
|`arenaName`| [String](#string) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

アリーナの最初のコーナーを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
|`corner1`| [Location](#serialized_location) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

この画像では、`corner1` は*緑色の羊毛*で、`corner2` は*赤い羊毛*で示されています。この設定では、その間の領域がアリーナとして指定され、*黄色の羊毛*で示されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

アリーナの2番目のコーナーを設定します。`corner1` とは対角線上にある必要があります。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `corner2` | [Location](#serialized_location) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

この画像では、`corner1` は*緑色の羊毛*で、`corner2` は*赤い羊毛*で示されています。この設定では、その間の領域がアリーナとして指定され、*黄色の羊毛*で示されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

アリーナの開始位置を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `startLocation` | [Location](#serialized_location) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

アリーナの終了位置を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [Location](#serialized_location) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

アリーナのウェーブ数を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Integer](#integer) | none    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

ウェーブ間の遅延時間（秒）を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

アリーナボスがスポーンする位置を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [String List](#string_list) [1] |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

アリーナのウェーブ中に登場するボスのリストを設定します。EliteMobsアリーナでは、Mythic Mobsのアリーナ内でのスポーンもサポートされています。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `bossList` | [String List](#string_list) [2] |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

この例では、ウェーブ1で、北のスポーンポイントにボスが1体、南のスポーンポイントにボスが1体スポーンします。次に、ウェーブ2で、レベル10のミシックボスが、中央のポイントにスポーンします。

EliteMobsボスのレベルも強制的に設定できますが、設定ファイルでレベルを設定することをお勧めします。

</div>

</details>

***

### rawArenaReward

ウェーブの最後に与えられる報酬を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [ユニバーサルEliteMobs loot table]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

アリーナを開始するまでに必要なプレイヤーの最小数を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

アリーナに参加できるプレイヤーの最大数を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Integer](#integer) |  `100`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

ウェーブ間で実行されるメッセージを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Special [3] |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

アリーナが円柱形を使用するかどうかを設定します（デフォルトは直方体です）。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

アリーナを使用するために必要な権限を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `permission` | [String](#integer) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>


## Special [1] 
スポーンポイント：`name=pointName:location=world_name,x,y,z` の形式を使用します。

## Special [2] 
ボスリスト：`wave=x:spawnPoint=Y:boss=bossfilename.yml` の形式を使用します。

## Special [3] 
アリーナメッセージ：`wave=X:message=your message here` の形式を使用します。

<details> 

<summary align="center"><b>アリーナ設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>例の解説</b></summary>

<div align="left">

この例を上から見て、このアリーナの設定が何をするのか説明します。

まず、`isEnabled` でアリーナが有効になっています。`arenaName` 設定で、アリーナの名前が Example Arena であることがわかります。名前は、アリーナに参加できるプレイヤーを許可するアリーナの NPC（アリーナの NPC の作成方法については後述します）と対話するときに表示されます。`corner1` と `corner2` は、アリーナのサイズを定義します。これらのコーナーは、アリーナとして使用する予定の領域の反対側に配置する必要があります。

`startLocation` は、プレイヤーがアリーナに参加したときにスポーンする場所です。この例では、アリーナの真ん中、`my_arena_world` ワールドになります。`exitLocation` は、プレイヤーがアリーナに失敗したか、アリーナを完了した後にテレポートされる場所です。この場合、ワールドは `my_minecraft_world`、座標は例に示されているものになります。

`waveCount` は、アリーナが続くウェーブ数を設定します。この例では、5ウェーブになります。プレイヤーが 5 つのウェーブすべてを生き延びることができれば、アリーナを生き延びることができました。`delayBetweenWaves` は、次のウェーブが始まるまでの秒数を設定します。この例では、プレイヤーは次のウェーブが始まる前に 5 秒間の準備時間があります。

`spawnPoints` は、モブがスポーンできる場所を設定します。好きなだけ作成して、好きなように名前を付けることができます。この例では、5 つのスポーンポイントを作成し、北、南、中央、東、西という名前を付けています。

`bossList` は、どのボスがどのウェーブで、どの場所にスポーンするかを定義する場所です。この例では、ウェーブ1で、北、中央、南という名前のスポーンポイントから 3 体のボスがスポーンします。3 体とも同じボスファイルを使用していますが、それぞれ異なるボスファイルを使用することもできます。

`rawArenaReward` は、プレイヤーがウェーブを生き延びて/クリアした後に与えられる報酬を設定します。この例では、ウェーブ1をクリアすると、プレイヤーに 5 個の Elite Coins が与えられます。プレイヤーが他のウェーブを生き延びてウェーブ5をクリアした場合、プレイヤーは 25 個の Elite Coins と、レベル5のMagmaGuy's Toothpick を 50%の確率で獲得できます。

`minimumPlayerCount` は、アリーナを開始するまでに必要なプレイヤーの最小数を設定します。この例では、この設定は 1 に設定されているため、アリーナを開始するには 1 人のプレイヤーが必要です。`maximumPlayerCount` は、アリーナに参加できるプレイヤーの最大数を設定します。この例では、この設定は 3 に設定されているため、3 人以上のプレイヤーがアリーナに参加しようとすると、アリーナは 3 人以下のプレイヤーになるまで開始されません。

`arenaMessages` を使用すると、定義したウェーブの開始時にチャットに表示される風味テキストを追加できます。この例では、各ウェーブの開始時に短いメッセージを表示することにしました。また、各メッセージの最初に NPC の名前を含めることで、テキストがアナウンサー（アリーナマスター）による声のセリフのように見えるようにしています。

`cylindricalArena` この設定により、`corner1` と `corner2` で設定した定義された領域が、直方体ではなく円柱形になるかどうかを切り替えることができます。この例では、この設定は `false` に設定されているため、例のアリーナは直方体形状です。

`permission` を使用して、プレイヤーがアリーナに参加/開始するために必要な権限を設定できます。この例では、プレイヤーはアリーナを使用するために `arena.mypermission` 権限を持つ必要があります。

</div>

</details>

## アリーナNPCの作成

<div align="center">

### isEnabled

NPCを有効にするかどうかを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
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

### name

NPCの表示名を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

NPCの名称の下に表示されるロールを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `role` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

NPCのMinecraft職業を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*`diguise` が使用されている場合は上書きされます。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

NPCのスポーン位置を設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [Location](#serialized_location) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

NPCの挨拶ダイアログを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `greetings` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

プレイヤーがNPCと対話したときのダイアログを設定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `dialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

NPCの別れ際のダイアログを設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `farewell` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*文字列が長すぎる場合は、\nを使用して文字列を複数の行に分割できます。*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

NPCの別れ際のダイアログを設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true`  |

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

NPCが話し始める半径を設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

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

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `interactionType` | Special [4] |  `ARENA_MASTER`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

NPCのカスタム変装を設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

プレイヤーがテレポートされるアリーナを設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `arena` | [Filename](#filename) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### teleportLocation

プレイヤーがNPCと対話した後、テレポートされる場所を設定します。この設定は、通常、プレイヤーをアリーナの専用のロビーエリアにテレポートするために使用されます。そこで、アリーナのチャレンジを開始したり、他のプレイヤーがアリーナをクリアするのを待つことができます。

| キー       |        値         | デフォルト |
|-----------|:---------------------:|:-------:|
| `teleportLocation` | [Location](#location) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
teleportLocation: my_arena_world,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>アリーナ設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
name: Example NPC
role: <Arena Master>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Welcome to the Arena!
dialog:
  - Ready to enter the Arena?
farewell:
  - Bye!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
この例は、ゾンビの変装をして`my_minecraft_world` にスポーンする基本的なアリーナのNPCを示しています。プレイヤーはこのNPCと対話して、「Example Arena」に挑戦できます。

</div>

</details>

## Special [4] 
有効なNPCインタラクションタイプのリストを以下に示します。

| タイプ | 説明 |
| --- | :-: |
| `GUILD_GREETER` | アドベンチャーギルドのメニューを開く |
| `CHAT` | 右クリックすると`dialog` をサイクルする |
| `CUSTOM_SHOP` | カスタムショップメニューを開く |
| `PROCEDURALLY_GENERATED_SHOP` | 処理で生成されたショップを開く |
| `BAR` | バーメニューを開く |
| `ARENA` | アリーナメニューを開く |
| `QUEST_GIVER` | 処理で生成されたクエストメニューを開く |
| `CUSTOM_QUEST_GIVER` | `questFilenames` で指定された特定のクエストセットのクエストメニューを開く |
| `NONE` | インタラクションなし |
| `SELL` | 販売メニューを開く |
| `TELEPORT_BACK` | プレイヤーを最後にいたEliteMobs以外のワールドの場所にテレポートする |
| `SCRAPPER` | スクラップメニューを開く |
| `SMELTER` | スメルトメニューを開く |
| `REPAIRMAN` | 修理メニューを開く |
| `ENHANCER` | アイテム強化メニューを開く |
| `REFINER` | リファイナメニューを開く |
| `UNBINDER` | アンバインドメニューを開く |
| `ARENA_MASTER` | `arenaFilename` で設定されたアリーナの、アリーナメニューを開く |
| `COMMAND` | `command` で設定されたコマンドを実行する |

```

