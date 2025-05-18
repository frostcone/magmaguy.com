[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ダンジョンとは？

ダンジョンに関する情報、およびプリメイドダンジョンに関する情報は[こちら]($language$/elitemobs/dungeons.md)で確認できます。

***

# ダンジョンパッケーザーとは？

ダンジョンパッケーザーを使用すると、管理者はダンジョンを作成およびパッケージ化できるだけでなく、あらゆる種類のEliteMobsコンテンツをパッケージ化できます。これには、イベントパック、モデルパック、アリーナ、NPCパック、アイテムパックなどが含まれます。

<details>

<summary>なぜダンジョンパッケージを使用するのですか？</summary>

- ***インスタンスダンジョン！*** インスタンスダンジョンは、ダンジョンパッケージシステムを通じてのみ作成できます。
- ***ミニダンジョンの安全なバックアップ！*** ダンジョンパッケージを作成すると、いつでも、どんな理由でも、好きなサーバーに展開および再展開できます。
- ***簡単にオンオフ可能！*** いつでも`/em setup`を実行して、一時的または永続的にダンジョンパッケージをオンオフできます。
- ***簡単に共有可能！*** 作成したものを共有したい場合、ダンジョンパッケージをzip圧縮して他の人に送信するだけです。興味があれば、コミュニティ作成専用のDiscordルームがあります！
- ***テレポート！*** ダンジョンパッケージは自動的にテレポート場所を作成し、`/em`メニューのテレポートページからアクセスできます。これは多くの設定で非常に役立つ場合があります。

</details>

# ダンジョンの作成

以下の設定は、`content_packages`フォルダに入れるべき設定ファイルを作成するために使用されます。これらの設定は特にダンジョンを作成するために使用され、アイテムやイベントのパックなど、ダンジョン以外のコンテンツを配布するためにダンジョンパッケーザーを使用したいだけであれば必須ではありません。

## 必須プラグイン

ダンジョンパッケーザーを使用するには、以下のプラグインが必要です。

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - ミニダンジョンを保護します

## ダンジョンの作成、ステップバイステップ

EliteMobsには、以前はワールドベースとスキマティックベースの2種類の主要なダンジョンがありました。

スキマティックベースのダンジョンは、スキマティックビルドに関連付けられていました。これらは現在廃止され、サポートされていません。

すべてのEliteMobsダンジョンは現在ワールドベースです。

## 必須のpack.metaファイル

ダンジョンパッケージには、`.txt`ファイルを`.meta`拡張子に名前変更しただけの`pack.meta`ファイルを含める必要があります。このファイルには、パッケージがどのプラグイン用であるかを示す単語（例: "elitemobs"、小文字で記述）のみを含める必要があります。`pack.meta`ファイルは、他のすべてのフォルダと一緒に、パッケージのルートディレクトリに配置する必要があります。

***

### グローバル値

以下の値はすべてのダンジョンに適用されます

<div align="center">

### isEnabled

ダンジョンパッケージが有効かどうかを設定します。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Boolean](#boolean) | `false` |    ✅      |

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

コンテンツの名前を設定します。[カラーコード](#color_codes)をサポートします。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

ダンジョンが使用する場所のタイプを設定します。

| キー         |        値         | デフォルト | 必須 |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

ダンジョンのタイプを設定します。

| キー         |                    値                    | デフォルト | 必須 |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

`/em setup`画面に表示される追加情報を設定します。情報提供のみを目的としています。[カラーコード](#color_codes)をサポートします。

| キー         |           値            | デフォルト | 必須 |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

コンテンツがダウンロードされていない場合のダウンロードリンクを設定します。情報提供のみを目的としています。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

ダンジョンパッケージのサイズカテゴリを設定します。情報提供のみを目的としています。

| キー         |   値    | デフォルト | 必須 |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | 特殊 [1] |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

| キー | 説明                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | レアは、1つの大きなボス戦に焦点を当てた小さなダンジョンのタイプです。  |
| `SANCTUM`    | サンクタムは、インスタンス化されたレアに相当します。これは、1つの巨大なボス戦を中心に展開することを意味します。 |
| `MINIDUNGEON`    | ミニダンジョンは、通常3〜15体のミニボスと1体の大きなボス、およびプレイヤーがコインや装備を「ファーム」するための多くの「雑魚」モブを含む中規模のダンジョンのタイプです。 |
| `DUNGEON`    | ダンジョンは、インスタンス化されたミニダンジョンに相当します。これは、プレイヤーがパーティーを組んで、雑魚モブとミニボスのガントレットを通り抜け、最終ボスと戦う、最も伝統的なMMORPGタイプのダンジョンです。 |
| `RAID`    | 近日公開！|
| `ADVENTURE`    | アドベンチャーは、完全なアドベンチャーマップです。クエストライン、NPC、多数のミニボスとボスを含み、内部に独自のアリーナやダンジョンを含むこともあります。 |
| `ARENA`    | アリーナは、プレイヤーがウェーブを倒すことで報酬を得る、ウェーブベースのサバイバルエリアです。 |
| `OTHER`    | 上記のカテゴリに該当しないその他のすべて。 |

より詳細な説明については、[Dungeons]($language$/elitemobs/dungeons.md)を参照してください。

</div>

</details>

***

### protect

ダンジョンパッケージがWorldGuardによって保護されるかどうかを設定します。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Boolean](#boolean) |  `true`   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

ダンジョンパッケージのバージョンを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

メニューに表示される情報を設定します。[カラーコード](#colorcodes)をサポートします。

*`/em alt`を使用して`/em`がブックモードに設定されている場合にのみ機能します。*

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

プレイヤーがダンジョンゾーンに入ったときに表示されるメッセージを設定します。[カラーコード](#colorcodes)をサポートします。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

プレイヤーがダンジョンゾーンを離れたときに表示されるメッセージを設定します。[カラーコード](#colorcodes)をサポートします。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

ダンジョンパッケージにカスタムモデル（ModelEngineまたはFreeMinecraftModels用）があるかどうかを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

このダンジョンに関連付けられたファイルに使用されるフォルダの名前を設定します。

**インスタンスダンジョンでは必須です！**

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

EMメニューに表示されるダンジョンのコンテンツレベルを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

ダンジョンがエンチャントチャレンジダンジョンであるかどうかを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### ワールドベースのダンジョンパッケージ

以下の値はワールドベースのダンジョンにのみ適用されます。

<div align="center">

***

### worldName

パッケージ化されるワールドの名前を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

この関数はワームホールワールドの名前を設定します。これはメインワールドにリンクされたセカンダリワールドとして機能し、テレポートハブやユニークなボスチャンバーなどの機能に利用されます。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

ワールドの環境を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

ダンジョンパッケージのテレポート場所を設定します。これは、プレイヤーがダンジョンに入るときにテレポートされる場所です。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

ダンジョンでの爆発によるブロックダメージを許可または防止します。爆発はエリート爆発と見なされるため、ブロックへのダメージは2分以内に再生されます。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Boolean](#boolean) |  `false`   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### インスタンスダンジョン

*インスタンスダンジョンは、プレイヤーのグループがダンジョンを完了したいと思うたびに新しいワールドを作成し、完了したら削除します。これが正しく機能するためには、EliteMobsの`world_blueprints`設定フォルダに、`dungeonConfigFolderName`に従ったフォルダを配置する必要があります。*

*次に、使用するワールドを、作成したフォルダ内に配置し、ワールドの`session.lock`ファイルが削除されていることを確認します。*

以下の値はインスタンスダンジョンにのみ適用されます。すべてのインスタンスダンジョンはワールドダンジョンであるため、ワールドダンジョンの値も使用することに注意してください。

<div align="center">

***

### startLocation

インスタンスダンジョンの開始地点のテレポート場所を設定します。これは、プレイヤーが`/em start`でインスタンスダンジョンを開始するときにテレポートされる場所です。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

ダンジョンインスタンスに入るために必要な権限を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

ダンジョンを開始するために必要な最小プレイヤー数を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

ダンジョンを開始するために必要な最小プレイヤー数を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

ダンジョンが完了と見なされるために必要なダンジョン目標のリストを設定します。

| キー         |           値            | デフォルト | 必須 |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  なし   |    ✅      |

<details>

<summary><b>例</b></summary>

<div align="left">

現在、2種類のダンジョン目標タイプがあります。

* ターゲットを倒す: `filename=boss.yml:amount=X`
* ダンジョンのパーセンテージをクリアする: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

インスタンスダンジョンの難易度リストを設定します。

**インスタンスダンジョンでは必須です！**

| キー         |   値    | デフォルト | 必須 |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | 特殊 [1] |  なし   |    ❌      |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

インスタンスダンジョンの難易度を設定すると、ダンジョンに入るときに異なる難易度オプションが自動的に作成されます。

ここで設定された難易度名は、カスタムボスフォルダで使用される名前となり、難易度に基づいてボスが持つパワーを設定できます。

難易度はリスト形式で、以下のフィールドを持ちます。

|     キー     | 説明                                                                                                                                                                                                                                                    | 値 | 必須 |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | プレイヤー向けの難易度名。                                                                                                                                                                                                                            |[String](#string)        |     ✅     |

</div>

</details>
Please specify the language you would like the text translated into.