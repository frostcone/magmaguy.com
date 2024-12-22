[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# アリーナの作成

<div align="center">

### isEnabled

アリーナが有効かどうかを設定します。

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

### arenaName

アリーナの名前を設定します。

| キー          |         値         | デフォルト |
|-------------|:-----------------:|:-----:|
| `arenaName` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
arenaName: ベッドロックアリーナ
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

アリーナの最初のコーナーを設定します。

| キー        |                値                 | デフォルト |
|-----------|:--------------------------------:|:-----:|
| `corner1` | [Location](#serialized_location) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

この画像では、`corner1`は*緑色の羊毛*で、`corner2`は*赤色の羊毛*で表されています。この構成は、それらの間の領域をアリーナとして指定し、
*黄色の羊毛*で表されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

アリーナの2番目のコーナーを設定します。`corner1`から対角線上になければなりません。

| キー        |                値                 | デフォルト |
|-----------|:--------------------------------:|:-----:|
| `corner2` | [Location](#serialized_location) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

この画像では、`corner1`は*緑色の羊毛*で、`corner2`は*赤色の羊毛*で表されています。この構成は、それらの間の領域をアリーナとして指定し、
*黄色の羊毛*で表されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

アリーナの開始位置を設定します。

| キー              |                値                 | デフォルト |
|-----------------|:--------------------------------:|:-----:|
| `startLocation` | [Location](#serialized_location) |  なし   |

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

| キー             |                値                 | デフォルト |
|----------------|:--------------------------------:|:-----:|
| `exitLocation` | [Location](#serialized_location) |  なし   |

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

| キー          |          値          | デフォルト |
|-------------|:-------------------:|:-----:|
| `waveCount` | [Integer](#integer) |  なし   |

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

ウェーブ間の遅延を秒単位で設定します。

| キー                  |          値          | デフォルト |
|---------------------|:-------------------:|:-----:|
| `delayBetweenWaves` | [Integer](#integer) |  `0`  |

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

アリーナのボスのスポーン位置を設定します。

| キー            |                値                | デフォルト |
|---------------|:-------------------------------:|:-----:|
| `spawnPoints` | [String List](#string_list) [1] |  なし   |

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

アリーナのウェーブ中に登場するボスのリストを設定します。EliteMobsアリーナは、アリーナでのMythic Mobsのスポーンをサポートしています。

| キー         |                値                | デフォルト |
|------------|:-------------------------------:|:-----:|
| `bossList` | [String List](#string_list) [2] |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

この例では、ウェーブ1で北のスポーンポイントに1体のボスがスポーンし、南のスポーンポイントに1体のボスがスポーンします。次に、ウェーブ2では、レベル10のミシックボスが中央ポイントにスポーンします。

EliteMobsのボスのレベルを強制することもできますが、構成ファイルでレベルを設定することをお勧めします。

</div>

</details>

***

### rawArenaReward

ウェーブ終了時に与えられる報酬を設定します。

| キー               |                                   値                                   | デフォルト |
|------------------|:---------------------------------------------------------------------:|:-----:|
| `rawArenaReward` | [Universal EliteMobs loot table]($language$/elitemobs/loot_tables.md) |  なし   |

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

アリーナを開始する前に必要な最小プレイヤー数を設定します。

| キー                   |          値          | デフォルト |
|----------------------|:-------------------:|:-----:|
| `minimumPlayerCount` | [Integer](#integer) |  `1`  |

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

アリーナに参加できる最大プレイヤー数を設定します。

| キー                   |          値          | デフォルト |
|----------------------|:-------------------:|:-----:|
| `maximumPlayerCount` | [Integer](#integer) | `100` |

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

| キー              |      値      | デフォルト |
|-----------------|:-----------:|:-----:|
| `arenaMessages` | Special [3] |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[アリーナアナウンサー] &fウェーブ1の時間です！"
- wave=2:message="&a[アリーナアナウンサー] &fもうウェーブ2だよ。"
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

アリーナが円筒形を使用するかどうかを設定します（デフォルトは直方体）。

| キー                 |          値          |  デフォルト  |
|--------------------|:-------------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) | `false` |

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

| キー           |         値          | デフォルト |
|--------------|:------------------:|:-----:|
| `permission` | [String](#integer) |  なし   |

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

スポーンポイント：次の形式を使用します：`name=ポイント名:location=ワールド名,x,y,z`。

## Special [2]

ボスリスト：次の形式を使用します：`wave=x:spawnPoint=Y:boss=bossfilename.yml`。

## Special [3]

アリーナメッセージ：次の形式を使用します：`wave=X:message=ここにメッセージを入力`。

<details>

<summary align="center"><b>アリーナ構成の例</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: 例のアリーナ
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
  - wave=1:message=&d[アリーナNPC] &fすごい！ウェーブ1！
  - wave=2:message=&d[アリーナNPC] &f驚くべきことにウェーブ2です！
  - wave=3:message=&d[アリーナNPC] &fウェーブ3が始まりました！
  - wave=4:message=&d[アリーナNPC] &fもうウェーブ4です！
  - wave=5:message=&d[アリーナNPC] &fさて、これが終わったら全て終わります。
cylindricalArena: false
permission: arena.mypermission
```

</div>

</details>

<details>

<summary align="center"><b>例の分解</b></summary>

<div align="left">

この例を最初から見て、このアリーナ構成が何をするかを説明しましょう。

まず、`isEnabled`でアリーナが有効になり、`arenaName`
設定を使用して例のアリーナと呼ばれることがわかります。この名前は、プレイヤーがアリーナに参加できるようにするアリーナNPC（後でアリーナNPCの作成方法について説明します）と対話するときに表示されます。corner1とcorner2は、アリーナのサイズを定義します。これらのコーナーは、アリーナに使用する予定の領域の反対側にある必要があります。

`startLocation`
は、アリーナに参加するときにプレイヤーがスポーンする場所です。例では、ワールドmy_arena_worldのアリーナの中心になります。`exitLocation`
は、プレイヤーがアリーナに失敗または終了した後にテレポートされる場所です。この場合、ワールドmy_minecraft_worldと例の座標になります。

`waveCount`
は、アリーナが続くウェーブ数を単純に設定します。この場合、それは5つのウェーブになります。プレイヤーが5つのウェーブすべてを生き残ることができれば、アリーナを生き残ることができたことになります。`delayBetweenWaves`
は、次のウェーブが開始されるまでの秒数を設定します。例では、プレイヤーは次のウェーブが開始されるまでに5秒間準備することができます。

`spawnPoints`は、モブをスポーンさせることができる場所を設定します。必要なだけ作成して、好きなように名前を付けることができます。例では、5つのスポーンポイントを作成し、それらを北、南、中央、東、西と名付けることにしました。

`bossList`
は、どのボスがどのウェーブでどの場所でスポーンする必要があるかを定義する場所です。例では、ウェーブ1は、北、中央、南と名付けたスポーン位置からスポーンする3体のボスになります。3体すべてが同じボスファイルを使用するように設定されていますが、それぞれ異なるボスファイルを使用することもできました。

`rawArenaReward`
は、プレイヤーがウェーブを生き残る/倒すことに成功した後に配布される報酬を設定します。例でわかるように、ウェーブ1を倒すと、プレイヤーは5つのエリートコインを獲得できます。残りのウェーブを生き残り、ウェーブ5を倒すことができれば、25のエリートコインと、レベル5のマグマガイのつまようじを手に入れる50％のチャンスが与えられます。

`minimumPlayerCount`
は、アリーナが開始する前に必要な最小プレイヤー数を設定します。例では、この設定は1に設定されているため、アリーナが開始するには1人のプレイヤーのみが必要です。`maximumPlayerCount`
は、アリーナに参加できる最大プレイヤー数を設定します。例では、この設定は3に設定されています。つまり、3人以上のプレイヤーがアリーナに参加しようとすると、3人以下のプレイヤーになるまでアリーナは開始されません。

`arenaMessages`
を使用すると、定義されたウェーブの開始時にチャットに表示されるフレーバーテキストを追加できます。例では、各ウェーブの開始時に短いメッセージを表示することにしました。また、各メッセージの先頭にNPC名を含めることで、テキストがアナウンサー（アリーナマスター）のセリフであるという錯覚を与えています。

`cylindricalArena`この設定により、`corner1`と`corner2`
で設定した定義済み領域を、直方体ではなく円筒形にするかどうかを切り替えることができます。例では、これを`false`
に設定しました。つまり、例のアリーナは直方体です。

`permission`
を使用すると、プレイヤーがアリーナに参加/開始するために必要な権限を設定できます。例では、プレイヤーはアリーナを使用するために`arena.mypermission`
権限を持っている必要があります。

</div>

</details>

## アリーナNPCの作成

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

NPCの表示名を設定します。

| キー     |         値         | デフォルト |
|--------|:-----------------:|:-----:|
| `name` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&aグラディウス"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

NPC名の下に役割の表示を設定します。

| キー     |         値         | デフォルト |
|--------|:-----------------:|:-----:|
| `role` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
role: "&c<アリーナマスター>"
```

<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

NPCのMineCraft職業を設定します。

| キー           |                                                 値                                                 | デフォルト |
|--------------|:-------------------------------------------------------------------------------------------------:|:-----:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">

*`diguise`を使用している場合はオーバーライドされます。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

NPCのスポーン位置を設定します。

| キー              |                値                 | デフォルト |
|-----------------|:--------------------------------:|:-----:|
| `spawnLocation` | [Location](#serialized_location) |  なし   |

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

NPCの挨拶のダイアログを設定します。

| キー          |              値              | デフォルト |
|-------------|:---------------------------:|:-----:|
| `greetings` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
greetings:
- アリーナへようこそ！
- アリーナがあなたを歓迎します！
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

プレイヤーがNPCと対話したときのダイアログを設定します。

| キー       |              値              | デフォルト |
|----------|:---------------------------:|:-----:|
| `dialog` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dialog:
- 挑戦する準備はできていますか？
- アリーナに立ち向かいますか？
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

NPCのさよならダイアログを設定します。

| キー         |              値              | デフォルト |
|------------|:---------------------------:|:-----:|
| `farewell` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
farewell:
- さようなら。
- 盾を持って戻ってきてください、または盾の上に！
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*文字列が長すぎる場合は、\nを使用して文字列を複数行に分割できます。*

<div align="left">

```yml
farewell:
- さようなら。
- 盾を持って\n戻ってきてください、または盾の上に！
```

</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

NPCのさよならダイアログを設定します。

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

NPCが会話を開始する半径を設定します。

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

NPCが行うインタラクションのタイプを設定します。

| キー                |      値      |     デフォルト      |
|-------------------|:-----------:|:--------------:|
| `interactionType` | Special [4] | `ARENA_MASTER` |

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

カスタムNPCの偽装を設定します。

| キー         |                         値                         | デフォルト |
|------------|:-------------------------------------------------:|:-----:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) |  なし   |

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

| キー      |           値           | デフォルト |
|---------|:---------------------:|:-----:|
| `arena` | [Filename](#filename) |  なし   |

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

NPCと対話した後にプレイヤーをテレポートする場所を設定します。この設定は、通常、プレイヤーをアリーナの専用ロビータイプのエリアにテレポートするために使用されます。ここでは、アリーナチャレンジを開始したり、他のプレイヤーがアリーナを通過するのを終了するまで待つことができます。

| キー                 |           値           | デフォルト |
|--------------------|:---------------------:|:-----:|
| `teleportLocation` | [Location](#location) |  なし   |

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

<summary align="center"><b>アリーナ構成の例</b></summary>

<div align="left">

```yml
isEnabled: true
name: 例のNPC
role: <アリーナマスター>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - アリーナへようこそ！
dialog:
```

```yml
- アリーナに入る準備はできましたか？
farewell:
  - さようなら！
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```

この例は、ゾンビの偽装でmy_minecraft_worldにスポーンする基本的なアリーナNPCを示しています。プレイヤーは、このNPCと対話して例のアリーナに挑戦できます。

</div>

</details>

## Special [4]

以下は、有効なNPCインタラクションタイプのリストです。

| タイプ                           |                       説明                       |
|-------------------------------|:----------------------------------------------:|
| `GUILD_GREETER`               |                冒険者ギルドメニューを開きます                 |
| `CHAT`                        |            右クリックすると`dialog`が切り替わります            |
| `CUSTOM_SHOP`                 |               カスタムショップメニューを開きます                |
| `PROCEDURALLY_GENERATED_SHOP` |              手続き的に生成されたショップを開きます               |
| `BAR`                         |                  バーメニューを開きます                   |
| `ARENA`                       |                 アリーナメニューを開きます                  |
| `QUEST_GIVER`                 |            手続き的に生成されたクエストメニューを開きます             |
| `CUSTOM_QUEST_GIVER`          | `questFilenames`で設定された特定のクエストセットのクエストメニューを開きます |
| `NONE`                        |                   インタラクションなし                   |
| `SELL`                        |                  販売メニューを開きます                   |
| `TELEPORT_BACK`               |    プレイヤーを最後にいたelitemobs以外のワールドの場所にテレポートさせます    |
| `SCRAPPER`                    |                 スクラップメニューを開きます                 |
| `SMELTER`                     |                  製錬メニューを開きます                   |
| `REPAIRMAN`                   |                  修理メニューを開きます                   |
| `ENHANCER`                    |                アイテム強化メニューを開きます                 |
| `REFINER`                     |                リファイナーメニューを開きます                 |
| `UNBINDER`                    |                アンバインドメニューを開きます                 |
| `ARENA_MASTER`                |    `arenaFilename`で設定されたアリーナのアリーナメニューを開きます     |
| `COMMAND`                     |           `command`で設定されたコマンドを実行します            |
