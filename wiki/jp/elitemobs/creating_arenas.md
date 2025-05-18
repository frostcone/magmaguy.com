日本語に翻訳します。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# アリーナの作成

<div align="center">

### isEnabled

アリーナを有効にするかどうかを設定します。

| キー        |      値       | デフォルト |
|-----------|:-------------:|:--------:|
|`isEnabled`| [Boolean](#boolean) | `true`     |

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

| キー        |      値       | デフォルト |
|-----------|:-------------:|:--------:|
|`arenaName`| [String](#string) | none     |

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

アリーナの最初の角を設定します。

| キー        |             値              | デフォルト |
|-----------|:---------------------------:|:--------:|
|`corner1`| [Location](#serialized_location) | none     |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

この画像では、`corner1`は*緑色の羊毛*で、`corner2`は*赤色の羊毛*で表されています。この設定により、それらの間の領域がアリーナとして指定され、*黄色の羊毛*で表されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

アリーナの2番目の角を設定します。`corner1`と対角線上に位置する必要があります。

| キー        |             値              | デフォルト |
|-----------|:---------------------------:|:--------:|
| `corner2` | [Location](#serialized_location) | none     |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

この画像では、`corner1`は*緑色の羊毛*で、`corner2`は*赤色の羊毛*で表されています。この設定により、それらの間の領域がアリーナとして指定され、*黄色の羊毛*で表されています。

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

アリーナの開始位置を設定します。

| キー          |             値              | デフォルト |
|---------------|:---------------------------:|:--------:|
| `startLocation` | [Location](#serialized_location) | none     |

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

| キー         |             値              | デフォルト |
|--------------|:---------------------------:|:--------:|
| `exitLocation` | [Location](#serialized_location) | none     |

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

| キー        |      値       | デフォルト |
|-----------|:-------------:|:--------:|
| `waveCount` | [Integer](#integer) | none     |

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

| キー              |      値       | デフォルト |
|-------------------|:-------------:|:--------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`      |

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

アリーナのボスが出現する場所を設定します。

| キー          |             値              | デフォルト |
|---------------|:---------------------------:|:--------:|
| `spawnPoints` | [String List](#string_list) [1] | none     |

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

アリーナのウェーブ中に出現するボスのリストを設定します。EliteMobs Arenasは、Mythic Mobsがアリーナに出現するのをサポートしています。

| キー       |             値              | デフォルト |
|------------|:---------------------------:|:--------:|
| `bossList` | [String List](#string_list) [2] | none     |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

この例では、ウェーブ1で北のスポーンポイントと南のスポーンポイントにそれぞれ1体ずつボスが出現します。次に、ウェーブ2では、レベル10のMythic Bossが中央のポイントに出現します。

EliteMobsのボスに対してもレベルを強制できますが、設定ファイルでレベルを設定することをお勧めします。

</div>

</details>

***

### rawArenaReward

ウェーブ終了時に与えられる報酬を設定します。

| キー             |                      値                       | デフォルト |
|------------------|:---------------------------------------------:|:--------:|
| `rawArenaReward` | [Universal EliteMobs loot table]($language$/elitemobs/loot_tables.md) | none     |

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

アリーナが開始する前に必要な最小プレイヤー数を設定します。

| キー                 |      値       | デフォルト |
|----------------------|:-------------:|:--------:|
| `minimumPlayerCount` | [Integer](#integer) | `1`      |

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

| キー                 |      値       | デフォルト |
|----------------------|:-------------:|:--------:|
| `maximumPlayerCount` | [Integer](#integer) | `100`    |

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

ウェーブ間に実行されるメッセージを設定します。

| キー            |     値     | デフォルト |
|-----------------|:----------:|:--------:|
| `arenaMessages` | Special [3] | none     |

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

アリーナが円筒形を使用するかどうかを設定します（デフォルトは直方体です）。

| キー               |      値       | デフォルト |
|--------------------|:-------------:|:--------:|
| `cylindricalArena` | [Boolean](#boolean) | `false`  |

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

| キー         |      値       | デフォルト |
|--------------|:-------------:|:--------:|
| `permission` | [String](#integer) | none     |

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

## 特殊 [1]
スポーンポイント: 以下の形式を使用します: `name=pointName:location=world_name,x,y,z`。

## 特殊 [2]
ボスリスト: 以下の形式を使用します: `wave=x:spawnPoint=Y:boss=bossfilename.yml`。

## 特殊 [3]
アリーナメッセージ: 以下の形式を使用します: `wave=X:message=your message here`。

<details>

<summary align="center"><b>アリーナ設定例</b></summary>

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

この例を最初から見て、このアリーナ設定が何をするのかを説明しましょう。

まず、`isEnabled`でアリーナが有効になっており、`arenaName`設定を使用してExample Arenaと呼ばれていることがわかります。この名前は、アリーナNPC（アリーナNPCの作成方法については後述します）とインタラクトする際に表示され、プレイヤーはアリーナに参加できるようになります。`corner1`と`corner2`はアリーナのサイズを定義します。これらの角は、アリーナとして使用する領域の対角線上に位置する必要があります。

`startLocation`は、プレイヤーがアリーナに参加した際に出現する場所です。例では、my_arena_worldワールドのアリーナの中央になります。`exitLocation`は、プレイヤーがアリーナに失敗または完了した後にテレポートされる場所です。この例では、my_minecraft_worldワールドの例に示された座標になります。

`waveCount`は、アリーナが続くウェーブ数を単純に設定します。この場合、5ウェーブになります。プレイヤーが5ウェーブすべてを生き残ることができれば、アリーナを生き残ったことになります。`delayBetweenWaves`は、次のウェーブが開始するまでの秒数を設定します。例では、プレイヤーは次のウェーブが開始する前に5秒間準備する時間があります。

`spawnPoints`は、モブが出現できる場所を設定します。好きなだけ作成し、好きなように名前を付けることができます。例では、5つのスポーンポイントを作成し、それぞれnorth、south、center、east、westと名付けました。

`bossList`は、どのボスがどのウェーブでどの場所に出現するかを定義する場所です。例では、ウェーブ1では、north、center、southと名付けたスポーン場所から3体のボスが出現します。3体すべてが同じボスファイルを使用するように設定されていますが、それぞれに異なるボスファイルを使用することもできます。

`rawArenaReward`は、プレイヤーがウェーブを生き残る/クリアした後に配布される報酬を設定します。例に見られるように、ウェーブ1をクリアすると、プレイヤーは5つのエリートコインを獲得します。残りのウェーブを生き残り、ウェーブ5をクリアすると、25個のエリートコインと、レベル5のMagmaGuy's Toothpickを50%の確率で獲得できます。

`minimumPlayerCount`は、アリーナが開始する前に必要な最小プレイヤー数を設定します。例では、この設定は1に設定されているため、アリーナを開始するにはプレイヤーが1人だけ必要です。`maximumPlayerCount`は、アリーナに参加できる最大プレイヤー数を設定します。例では、この設定は3に設定されているため、3人を超えるプレイヤーがアリーナに参加しようとすると、プレイヤーが3人以下になるまでアリーナは開始しません。

`arenaMessages`を使用すると、定義されたウェーブの開始時にチャットに表示されるフレーバーテキストを追加できます。例では、各ウェーブの開始時に短いメッセージを表示することにしました。また、各メッセージの冒頭にNPC名を含めることで、テキストがアナウンサー（アリーナマスター）による話し言葉であるかのような錯覚を与えています。

`cylindricalArena`この設定により、`corner1`と`corner2`で設定した定義済みの領域が、直方体ではなく円筒形になるかどうかを切り替えることができます。例では、これを`false`に設定しているため、例のアリーナは直方体です。

`permission`を使用すると、プレイヤーがアリーナに参加/開始するために必要となる権限を設定できます。例では、プレイヤーはアリーナを使用するために`arena.mypermission`権限が必要になります。

</div>

</details>

## アリーナNPCの作成

<div align="center">

### isEnabled

NPCを有効にするかどうかを設定します。

| キー        |      値       | デフォルト |
|-----------|:-------------:|:--------:|
| `isEnabled` | [Boolean](#boolean) | `true`   |

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

| キー   |      値       | デフォルト |
|--------|:-------------:|:--------:|
| `name` | [String](#string) | none     |

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

NPC名の下に表示される役割を設定します。

| キー   |      値       | デフォルト |
|--------|:-------------:|:--------:|
| `role` | [String](#string) | none     |

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

NPCのMinecraftの職業を設定します。

| キー         |                         値                          | デフォルト |
|--------------|:---------------------------------------------------:|:--------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | none     |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">

*`disguise`が使用されている場合は上書きされます。*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

NPCの出現場所を設定します。

| キー          |             値              | デフォルト |
|---------------|:---------------------------:|:--------:|
| `spawnLocation` | [Location](#serialized_location) | none     |

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

| キー        |             値              | デフォルト |
|-------------|:---------------------------:|:--------:|
| `greetings` | [String List](#string_list) | none     |

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

プレイヤーがNPCとインタラクトしたときのダイアログを設定します。

| キー     |             値              | デフォルト |
|----------|:---------------------------:|:--------:|
| `dialog` | [String List](#string_list) | none     |

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

NPCの別れのダイアログを設定します。

| キー       |             値              | デフォルト |
|------------|:---------------------------:|:--------:|
| `farewell` | [String List](#string_list) | none     |

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

*文字列が長すぎる場合は、\nを使用して文字列を複数行に分割できます。*

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

NPCが話すことができるかどうかを設定します。

| キー      |      値       | デフォルト |
|-----------|:-------------:|:--------:|
| `canTalk` | [Boolean](#boolean) | `true`   |

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

| キー               |     値      | デフォルト |
|--------------------|:-----------:|:--------:|
| `activationRadius` | [Double](#double) | `3.0`    |

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

| キー              |     値     | デフォルト |
|-------------------|:----------:|:--------:|
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

| キー       |                      値                       | デフォルト |
|------------|:---------------------------------------------:|:--------:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) | none     |

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

| キー    |      値       | デフォルト |
|---------|:-------------:|:--------:|
| `arena` | [Filename](#filename) | none     |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>
Please specify the language you would like me to translate the text into.