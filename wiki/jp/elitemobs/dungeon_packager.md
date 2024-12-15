[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ダンジョンとは？

ダンジョンに関する情報は、作成済みのダンジョンに関する情報を含め、[こちら]($language$/elitemobs/dungeons.md)で確認できます。

***

# ダンジョンパケージャーとは？

ダンジョンパケージャーを使用すると、管理者はダンジョンを作成およびパッケージ化できるだけでなく、あらゆる種類のEliteMobsコンテンツをパッケージ化できます。これには、イベントパック、モデルパック、アリーナ、NPCパック、アイテムパックなどが含まれます。

<details>

<summary>ダンジョンパッケージを使用する理由</summary>

- ***インスタンス化されたダンジョン！*** インスタンス化されたダンジョンは、ダンジョンパッケージシステムを通じてのみ作成できます。
- ***ミニダンジョンの安全なバックアップ！*** ダンジョンパッケージを作成すると、いつでも、どんな理由でも、任意のサーバーにデプロイおよび再デプロイできます。
- ***オン/オフが簡単！*** `/em setup` を使用して、ダンジョンパッケージを一時的または永続的にオン/オフにすることができます。
- ***共有が簡単！*** 作成物を共有したい場合、ダンジョンパッケージをzip圧縮して他の人に送信できます。興味があれば、コミュニティの作品専用のDiscordルームがあります。
- ***テレポート！*** ダンジョンパッケージは、`/em`メニューの[テレポート]ページでアクセスできるテレポート場所を自動的に作成します。これは多くの設定で非常に役立ちます。

</details>

# ダンジョンの作成

次の設定を使用して、`content_packages`フォルダーに入れる必要がある構成ファイルを作成します。これらの設定は、特にダンジョンを作成するために使用されます。アイテムやイベントのパックなどのダンジョン以外のコンテンツを配布するためにダンジョンパケージャーを使用したいだけの場合は必須ではありません。

## 必須プラグイン

ダンジョンパケージャーを使用するには、次のプラグインが必要です。

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - ミニダンジョンを保護します

## ダンジョンの作成（ステップバイステップ）

EliteMobsには、かつて、ワールドベースとスキーマベースの2種類の主要なダンジョンがありました。

スキーマベースのダンジョンは、スキーマビルドに関連付けられていました。これらは現在段階的に廃止されており、サポートされなくなっています。

現在、すべてのEliteMobsダンジョンはワールドベースです。

## 必須のpack.metaファイル

ダンジョンパッケージには、`pack.meta`ファイルを含める必要があります。これは、拡張子が`.meta`の、名前が変更された`.txt`ファイルです。このファイルには、パッケージが対象とするプラグインを示す単語が1つだけ含まれている必要があります（例：「elitemobs」、小文字で記述）。`pack.meta`ファイルは、他のすべてのフォルダーとともに、パッケージのルートディレクトリに配置する必要があります。

***

### グローバル値

次の値は、すべてのダンジョンに適用されます。

<div align="center">

### isEnabled

ダンジョンパッケージが有効になっているかどうかを設定します。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [ブール値](#boolean) | `false` |    ✅      |

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
| `name` | [文字列](#string) | `false` |    ✅      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: '&c[レベル 999] &a緑のダンジョン'
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
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  なし  |    ✅      |

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
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  なし  |    ✅      |

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

`/em setup`画面に表示される追加情報を設定します。情報目的のみです。[カラーコード](#color_codes)をサポートします。

| キー         |           値            | デフォルト | 必須 |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [文字列リスト](#string_list) |  なし  |    ✅      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
customInfo:
- '&a最高のダンジョン。'
- '&a作成者: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

コンテンツがダウンロードされていない場合にダウンロードリンクを設定します。情報目的のみです。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [文字列](#string) |  なし  |    ❌      |

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

ダンジョンパッケージのサイズカテゴリを設定します。情報目的のみです。

| キー         |   値    | デフォルト | 必須 |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | 特別 [1] |  なし  |    ✅      |

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

**特別 [1]**

<details> 

<summary><b>テーブルを展開</b></summary>

<div align="center">

| キー | 説明                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | 巣窟は、1つの大きなボス戦に焦点を当てた小規模なダンジョンの一種です。  |
| `SANCTUM`    | 聖域は、インスタンス化された巣窟に相当します。つまり、1つの巨大なボス戦を中心に展開します。 |
| `MINIDUNGEON`    | ミニダンジョンは、通常3〜15体のミニボスと1体の巨大なボスを含む、中規模のダンジョンの一種です。また、プレイヤーがコインや装備を「ファーム」するために「ファーム」することを目的とした多くの「雑魚」Mobも含まれています。 |
| `DUNGEON`    | ダンジョンは、インスタンス化されたミニダンジョンに相当します。これは、最も伝統的なMMORPGタイプのダンジョンです。プレイヤーはパーティーを組んで、雑魚Mobとミニボスの難関を突破して、最終ボスと戦います。 |
| `RAID`    | 近日公開！ |
| `ADVENTURE`    | アドベンチャーは、完全なアドベンチャーマップです。クエストライン、NPC、多数のミニボスとボスが含まれており、内部に独自のアリーナやダンジョンを含めることもできます。 |
| `ARENA`    | アリーナは、プレイヤーがウェーブを倒すことで報酬を得られるウェーブベースのサバイバルエリアです。 |
| `OTHER`    | 上記のカテゴリに当てはまらないその他のもの。 |

詳細については、[ダンジョン]($language$/elitemobs/dungeons.md)を参照してください。

</div>

</details>

***

### protect

ダンジョンパッケージをWorldGuardで保護するかどうかを設定します。

| キー         |      値       | デフォルト | 必須 |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [ブール値](#boolean) |  `true`   |    ❌      |

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
| `dungeonVersion` | [整数](#integer) |  なし  |    ✅      |

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

*`/em`が`/em alt`を使用してブックモードに設定されている場合にのみ機能します。*

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [文字列](#string) |  なし  |    ✅      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
playerInfo: '難易度: &a1人用簡単コンテンツ！'
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
| `regionEnterMessage` | [文字列](#string) |  なし  |    ❌      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aダンジョンに入りました！'
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
| `regionLeaveMessage` | [文字列](#string) |  なし  |    ❌      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aダンジョンを離れました！'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

ダンジョンパッケージにカスタムモデルがあるかどうかを設定します（ModelEngineまたはFreeMinecraftModelsの場合）。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [ブール値](#boolean) |  なし  |    ❌      |

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

このダンジョンに関連付けられたファイルに使用するフォルダーの名前を設定します。

**インスタンス化されたダンジョンには必須です！**

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [文字列](#string) |  なし  |    ❌      |

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

ダンジョンがEMメニューに表示するコンテンツレベルを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [整数](#integer) |  なし  |    ❌      |

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

ダンジョンをエンチャントチャレンジダンジョンにするかどうかを設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [ブール値](#boolean) | `false` |    ❌      |

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

次の値は、ワールドベースのダンジョンにのみ適用されます。

<div align="center">

***

### worldName

パッケージ化するワールドの名前を設定します。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [文字列](#string) |  なし  |    ✅      |

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

この関数は、メインワールドにリンクされたセカンダリワールドとして機能するワームホールワールドの名前を設定します。テレポートハブやユニークなボスチェンバーなどの機能に使用されます。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [文字列](#string) |  なし  |    ❌      |

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
| `environment` | [環境](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  なし  |    ✅      |

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

ダンジョンパッケージのテレポート場所を設定します。ここは、プレイヤーがダンジョンに入るときにテレポートされる場所です。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [文字列](#string) |  なし  |    ✅      |

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

ダンジョン内の爆発がブロックにダメージを与えることを許可するか、阻止します。爆発はエリート爆発と見なされるため、ブロックへのダメージは2分以内に再生されます。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [ブール値](#boolean) |  `false`   |    ❌      |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### インスタンス化されたダンジョン

*インスタンス化されたダンジョンは、プレイヤーグループがダンジョンをクリアするたびに新しいワールドを作成し、完了すると削除します。これを正しく機能させるには、EliteMobsの`world_blueprints`構成フォルダーに、`dungeonConfigFolderName`に従うフォルダーを配置する必要があります。*

*次に、作成したフォルダーの内側に使用するワールドを配置し、ワールドの`session.lock`ファイルが削除されていることを確認します。*

次の値は、インスタンス化されたダンジョンにのみ適用されます。すべてのインスタンス化されたダンジョンはワールドダンジョンであるため、ワールドダンジョンの値も使用することに注意してください。

<div align="center">

***

### startLocation

インスタンス化されたダンジョンの開始地点のテレポート場所を設定します。ここは、プレイヤーが`/em start`でインスタンス化されたダンジョンを開始するときにテレポートされる場所です。

| キー         |  値  | デフォルト | 必須 |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [文字列](#string) |  なし  |    ✅      |

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
| `permission` | [文字列](#string) |  なし  |    ❌      |

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
| `minPlayerCount` | [整数](#integer) |  `1`   |    ❌      |

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
| `maxPlayerCount` | [整数](#integer) |   `5`   |    ❌      |

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

ダンジョンが完了したと見なされるために必要なダンジョン目標のリストを設定します。

| キー         |           値            | デフォルト | 必須 |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [文字列リスト](#string_list) |  なし  |    ✅      |

<details> 

<summary><b>例</b></summary>

<div align="left">

現在、次の2つのダンジョン目標タイプがあります。

* ターゲットをキル: `filename=boss.yml:amount=X`
* ダンジョンのパーセンテージをキル: `clearpercentage=X.Y`

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

インスタンス化されたダンジョンの難易度のリストを設定します。

**インスタンス化されたダンジョンには必須です！**

| キー         |   値    | デフォルト | 必須 |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | 特別 [1] |  なし  |    ❌      |

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

**特別 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

<div align="center">

インスタンス化されたダンジョンの難易度を設定すると、ダンジョンに入るときにさまざまな難易度オプションが自動的に作成されます。

ここで設定した難易度の名前は、カスタムボスフォルダーで使用される名前であり、難易度に基づいてボスが持つことができる力を設定できます。

難易度は、次のフィールドを持つリスト形式です。

|     キー     | 説明                                                                                                                                                                                                                                                    | 値 | 必須 |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | プレイヤー向けの難易度の名前。                                                                                                                                                                                                                            |[文字列](#string)        |     ✅     |
|    `id`     | カスタムボスやカスタムアイテムで使用される難易度のID（難易度ベースの機能用）。                                                                                                                                                                 |[文字列](#string)        |     ✅     |
| `levelSync` | 設定されている場合は、レベル同期のレベルを設定します。レベル同期により、すべてのプレイヤー装備が設定値で最大化され、プレイヤーがダンジョンに対して過度にレベルアップすることが不可能になり、後の実行でも適切に維持されます。Final Fantasy 14のレベル同期システムに基づいています。 |[整数](#integer)        |     ❌     |


</div>

</details>

</div>

***

## 大きなダンジョンにmeta_pack.ymlダンジョンパッケージファイルを使用する。
時には、プレイヤーがメインダンジョンワールドを介して移動できるように、内部に他のより小さなダンジョンを含む大規模なダンジョンに取り組んでいる場合があります。この素晴らしい例が、EliteMobsアドベンチャードンジョンPrimisです。

Primisには、プレイヤーが探索してクエストを完了できる広大な世界がありますが、その世界内には2つのインスタンス化されたダンジョンも含まれています。そのうちの1つは最終ボス戦として機能します。このような場合、複数のダンジョンパッケージファイルがありますが、それらはすべて同じ包括的なダンジョンに属しています。

これを管理するために、メタダンジョンパッケージファイルを使用します。このファイルは中央ディレクトリとして機能し、メインダンジョンを指定し、それに関連付けられているすべての追加ダンジョンコンテンツをリストします。

Primisメタダンジョンパッケージの構造を詳しく見てみましょう。

```yaml
isEnabled: true
name: '&2[000-020] プリミスの冒険！'
customInfo:
- EliteMobsを初めて使うプレイヤー向けのチュートリアルアドベンチャー
- ！
downloadLinkV2: https://discord.gg/9f5QSka
dungeonSizeCategory: LAIR
environment: NORMAL
protect: true
contentType: META_PACKAGE
containedPackages:
- primis_adventure.yml
- primis_blood_temple_sanctum.yml
- primis_gladius_invasion_dungeon.yml
setupMenuDescription:
- '&2レベル0〜20のプレイヤー向けのソフトなチュートリアルアドベンチャー！'
- '&2アドベンチャーはクエスト、'
- '&2多くのボスやNPCなどが含まれる巨大なマップです！'
- '&2カスタムモデルもあります！'
dungeonVersion: 21 #ダンジョンメタパッケージファイルを追加
```

ご覧のとおり、メタダンジョンパッケージファイルは、いくつかの重要な違いを除いて、通常のダンジョンパッケージと非常に似ています。`contentType:`は`META_PACKAGE`に設定されており、`containedPackages:`という追加の設定があります。この設定には、より大きなダンジョンの一部である他のすべてのダンジョンパッケージがリストされます。

メタパッケージを作成するときは、`containedPackages:`設定を含め、より大きなダンジョンの一部であるすべてのダンジョンパッケージをリストしてください。これにより、すべてが包括的な構造内で適切にリンクおよび整理されます。

ダンジョンのバージョン管理を行う場合、すべてのバージョン管理はメタパッケージを通じて管理する必要があります。これは、メタパッケージがダンジョン全体のバージョンを決定する主要なパッケージとして機能し、`/em setup`メニューに情報を表示するために使用されるパッケージでもあるためです。

メタパッケージにリストされている個々のダンジョンは、`/em teleport`メニューに表示される場合があることに注意してください。これを防ぐには、それぞれの構成ファイルで、これらの各ダンジョンのテレポートオプションを手動で無効にする必要があります。

たとえば、Primisダンジョンの場合：

`primis_blood_temple_sanctum.yml`と`primis_gladius_invasion_dungeon.yml`のメニューでテレポートエントリを無効にします。
`primis_adventure.yml`のテレポートオプションは有効のままにします。これは、プレイヤーが旅を始め、他のダンジョンにアクセスするメインハブとして機能するためです。
この設定により、ダンジョンシステムの適切な構造と機能を維持しながら、プレイヤーにとってスムーズなエクスペリエンスが保証されます。

ファイルに名前を付けるときは、次の命名規則をお勧めします。

`your_dungeon_name_meta_pack.yml`

***

# 推奨されるボス値

## 平均的なダンジョンMobを作成する

設定`normalizedCombat`をtrueのままにしておくことをお勧めします。この設定では、エンティティタイプに関係なく、すべてのMobが体力とダメージが均等にスケーリングされるように正規化されます。

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4回攻撃で倒せる
damageMultiplier: 1.0 #1.5ハートのダメージ
```

確かに、明確さと書式設定を維持した改訂版を次に示します。

**注：`1.0`は体力とダメージのデフォルト値であるため、`healthMultiplier`または`damageMultiplier`の定義を省略して、`normalizedCombat`を`true`に設定するだけで済みます。**

## 雑魚パックの作成

雑魚パックは数が多いですが、それほど危険ではありません。

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3回攻撃で倒せる
damageMultiplier: 0.5 #0.5ハートのダメージ
```

## 増援の作成

増援は非常に簡単に倒せるはずですが、ダメージの点で危険を及ぼします（これらの値は、4体以上の近接エンティティに推奨されます。実際の使用方法は異なる場合があります）。

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1回攻撃で倒せる
damageMultiplier: 0.6 #1ハートのダメージ
```

## ミニボスの作成

ミニボスは自分の立場を維持し、プレイヤーにメカニックな挑戦を課す必要があります。少しの間続くスキルのテストである必要がありますが、非常に致命的なものではありません。

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10回攻撃で倒せる
damageMultiplier: 1.2 #2ハートのダメージ
```

## ボスの作成

ボスは真の挑戦であり、ダンジョンでの構築の結論であり、すべてがかかっているスキルの真のテストです。遭遇は長く、死は常に脅威となるはずです。

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23回攻撃で倒せる
damageMultiplier: 1.4 #2.5ハートのダメージ
```

**これらの推奨値は単なる概算値であり、最終的な値は特定の遭遇に応じて調整する必要があります。**

**これは、ダンジョンの最終ボスにとって特に重要です。最後の戦いを壮大なものにするために、`healthMultiplier`の推奨値である7.0を大幅に超える値を設定することをお勧めします。**

***

# 配布用のEliteMobsコンテンツのパッケージング

最後に、保管または配布のためにダンジョンをパッケージ化する必要がある場合があります。

EliteMobsには、管理者がコンテンツをすばやくインポート、インストール、アンインストールできるインポートシステムがあります。[その仕組みについてはこちらをご覧ください。]($language$/elitemobs/setup.md)

## ワールドのトリミング

場合によっては、Minecraftワールドのサイズを縮小して軽量化し、結果として配布しやすくする必要がある場合があります。これは、[WorldBorderプラグイン](https://www.spigotmc.org/resources/worldborder-1-15.80466/)を使用して実現できます。プラグインはバージョン1.19までのMineCraftのみをサポートするようにリストされていますが、2024年1月25日現在の最新のMineCraftバージョンでもシームレスに機能します。

<details>
<summary>ヒント</summary>
初めてこれを行う場合は、万が一の事態に備えて、ワールドのバックアップを作成することをお勧めします。
</details>

プラグインがインストールされたら、トリミングするワールドの中央または特定のエリアに移動します。次に、コマンド`/wb set x`を実行します。`x`は、エリアに必要な概算半径サイズを表します。

<details>
<summary>ヒント</summary>
<code>/wb</code>が機能しない場合は、<code>/worldborder:wb</code>を試してください。
</details>

このコマンドを実行したら、ワールドの端に飛んで、ワールド境界が適切に設定され、意図したサイズをカバーしていることを確認します。チャットにメッセージが表示され、押し戻されたときに、ワールド境界の端に到達したことを認識します。

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

上の画像では、紫色のブロックの周りのワールドをトリミングし、周囲にいくつかのチャンクだけを残すことを目指しています。これを実現するために、赤い四角の紫色のエリアの中央に立ち、`/wb set 50`を実行して、紫色のエリアをわずかに超えたところにワールド境界を設定します。

次に、`/wb trim [freq] [pad]`コマンドを使用します。頻度は200に設定し、パッドは20に設定します。パッドはワールド境界（紫色のエリア）の周囲に残すチャンクの数を決定し、頻度は1秒あたりに処理するチャンクの数を決定します。`/wb trim 200 20`を実行した後、`/wb trim confirm`を実行して確認するように求められます。アクションを確認すると、しばらくするとワールドがトリミングされ、サイズが縮小し、配布がより便利になります。

`/wb clear all`を使用してワールド境界を削除するか、必要に応じてそのままにすることができます。

## ワールドフォルダのトリミング

プラグインではすべてのファイルとフォルダを使用しないため、破棄できるワールドフォルダ内にあるいくつかのファイルとフォルダがあります。これにより、ワールドのサイズが削減され、配布が容易になります。

NORMALワールド環境の場合：

ワールドを準備するには、次のファイルとフォルダを保持します。

1. **region**フォルダ
2. **data**フォルダ内の**raids.dat**（コピーするときは**data**フォルダ内にあることを確認してください）
3. **level.dat**ファイル

ワールドフォルダにある他のすべてのファイルとフォルダは安全に削除できます。これにより、NORMAL環境用にワールドが正しくセットアップされます。

NETHERおよびTHE_ENDワールド環境の場合：

ワールドを準備するには、次のファイルとフォルダを保持します。

1. **DIM-1**フォルダ内の**region**フォルダ（コピーするときは**DIM-1**フォルダ内にあることを確認してください）
2. **data**フォルダ内の**raids.dat**（コピーするときは**data**フォルダ内にあることを確認してください）
3. **level.dat**ファイル

ワールドフォルダにある他のすべてのファイルとフォルダは安全に削除できます。これにより、NETHERおよびTHE_END環境用にワールドが正しくセットアップされます。

## パッケージコマンドの実行

EliteMobsには、**`/em package <dungeonName> <version>`**コマンドがあります。このコマンドは、EliteMobsのすべての構成フォルダを調べ、`dungeonName`に一致するフォルダ内のすべてのコンテンツを自動的に圧縮ファイルと、EliteMobsの`exports`フォルダにある通常のフォルダにパッケージ化します。

***このため、パッケージ化するコンテンツを、パッケージの名前と同じ名前のフォルダに入れておくことを強くお勧めします。***そうしないと、配布用のファイル構造にファイルを自分で収集してパッケージ化する必要があります。

## ダンジョンパッケージファイルの追加

ダンジョンを作成する場合は、`exports`フォルダに新しく生成されたフォルダにダンジョンパッケージファイルを手動で追加する必要があります。ダンジョンパッケージ構成ファイルは、上記で説明した形式に従い、`content_packages`というフォルダに入れる必要があります。[詳細については、ファイル構造を確認してください。](#file-structure)。

**完了したら、必ずダンジョンを圧縮してください！**

## ファイル構造

すべて正しく行った場合、ファイル構造は、ダンジョンを`my_cool_dungeon`と呼んだ次の例のようになるはずです。

<details>
<summary>my_cool_dungeonのファイル構造の例</summary>

- my_cool_dungeon.zip
    * content_packages
        * my_cool_dungeon.yml <- ここにダンジョンパッケージ構成ファイルが入ります
    * worldcontainer
        * [ワールドフォルダはここに入ります]
    * wormholes
        * my_cool_dungeon
            * [ワームホールはここに入ります]
    * npcs
        * my_cool_dungeon
            * [NPCはここに入ります]
    * customtreasurechests
        * my_cool_dungeon
            * [トレジャーチェストはここに入ります]
    * customquests
        * my_cool_dungeon
            * [クエストはここに入ります]
    * customitems
        * my_cool_dungeon
            * [カスタムアイテムはここに入ります]
    * custombosses
        * my_cool_dungeon
            * [カスタムボスはここに入ります]
    * customarenas
        * my_cool_dungeon
            * [カスタムアリーナはここに入ります]
    * powers
        * my_cool_dungeon
            * [カスタムパワーはここに入ります]
    * world_blueprints
        * my_cool_dungeon
            * [ワールドフォルダはここに入ります。インスタンス化されたダンジョンに使用されます]
    * customevents
        * my_cool_dungeon
            * [カスタムイベントはここに入ります]
    * customspawns
        * my_cool_dungeon
            * [カスタムスポーンはここに入ります]
    * models
        * [ModelEngine bbmodel形式のモデルはここに入ります。フォルダを受け付けます]

</details>

これにより、ほとんどのユーザーがファイルをサーバーに直接ドラッグアンドドロップして、すぐに動作させることができます。

***重要：配布用にパッケージ化する場合は、最初にミニダンジョンをアンインストールしてください！インストール済みのミニダンジョンを配布したくはないでしょう。管理者にサーバーでセットアップしてもらいたいのです！***

# コミュニティと作成したダンジョンパッケージを共有する

Discordには、人々が自分のミニダンジョンの作品を共有できる[#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons")セクションがあります。遠慮なく貢献してください！
