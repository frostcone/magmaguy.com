# ユーザーコマンド

*注：すべてのプレイヤーの権限はデフォルトで true に設定されています。つまり、すでに設定済みです。*

*プレイヤーに権限を通じて特定の機能へのアクセスを許可したくない場合は、そのプレイヤーの権限を拒否する必要があります！*

| コマンド                          |                                                説明                                                |
|-------------------------------|:------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`          |       メインコマンド。プラグイン内のすべてのプレイヤー情報を簡単にアクセスできるメニューにまとめます。*注：*他のすべてのユーザーコマンドはこのメインコマンド内にあります。        |
| `/adventurersguild` / `/ag`   |                  推奨設定では、プレイヤーを冒険者ギルドのワールドにテレポートさせ、そこで様々な EliteMobs NPC と交流します。                   |
| `/em shareItem`               |                              アイテムのステータスを他のプレイヤーが見れるようにチャットにリンクします。                               |
| `/em help`                    | すべてのコマンドを一覧表示します。残りのユーザーコマンドは通常、NPC や `/em` インターフェースの使用に置き換えられます！コマンドにカーソルを合わせると、その機能の説明が表示されます。 |
| `/em money check`             |                                         プレイヤーのお金を表示します。                                          |
| `/em pay <username> <amount>` |                            プレイヤー同士で支払いができるようにします。取引には設定可能な金額が課税されます。                             |
| `/em spawntp`                 |                                   プレイヤーをサーバーのスポーン地点にテレポートさせます。                                   |

## NPC コマンド

これらのコマンドは、NPC がインストールされた冒険者ギルドハブがない場合にのみ役立ちます。

プレイヤーにコマンドの仕組みを覚えさせるのではなく、NPC を通じてこれらのコマンドをすべて実行できるようにインストールすることを推奨します。

| コマンド                           |                      説明                       |
|--------------------------------|:---------------------------------------------:|
| `/em rank`                     |     ランクメニューを開くか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop procedural <player>` |    ショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop sell <player>`       | ショップの販売メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。 |
| `/em shop custom <player>`     |  カスタムショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。   |
| `/em repair`                   |   修理メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。    |
| `/em enchant`                  | エンチャントメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。  |
| `/em scrap`                    |  スクラップメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。  |
| `/em unbind`                   | アンバインドメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。  |

## 内部ユーザーコマンド

**これらのコマンドは、クエストメニューのクエストなど、ゲーム内メニューから実行することを想定しています。ID
の取得方法に関する説明が書かれていない場合は、ゲーム内メニューからコマンドを実行する以外に ID
を取得することはできないことを意味します。**便宜上、識別可能と識別不可能なカテゴリに分けました。

### 識別可能

| コマンド                        |           説明           |
|-----------------------------|:----------------------:|
| `/em dungeontp <dungeonid>` | プレイヤーをダンジョンにテレポートさせます。 |

*注：これは `/em` メニューから実行することを想定しています。プレイヤーがダンジョン ID を推測することは不可能だからです。ダンジョンの
ID は、`~/plugins/EliteMobs/dungeonpackages/` 内の .yml ファイル名と同じです。<br/> `/em` コマンドを使用するとコンソールに
ID が表示され、テレポートをテレポートページから選択できます。*

### 識別不可能

| コマンド                           |                                       説明                                        |
|--------------------------------|:-------------------------------------------------------------------------------:|
| `/em quest accept <questID>`   |                                  クエストを受け入れます。                                   |
| `/em quest track <questID>`    |                                   クエストを追跡します。                                   |
| `/em quest complete <questID>` |                                   クエストを完了します。                                   |
| `/em quest leave <questID>`    |                                   クエストを離れます。                                    |
| `/em track boss <uuid>`        | カスタムボスを追跡します。注: これは `/em` メニューから実行することを想定しています。プレイヤーがボスの UUID を推測することは不可能だからです。 |

# 管理者コマンド

<div>

**> > > `elitemobs.*` - EliteMobs の完全なアクセス権を持つ管理者権限！ < < <**

</div>

| コマンド                                                                                          |                                              説明                                              |
|-----------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------:|
| `/em setup`                                                                                   |                                     メインセットアップメニューを開きます。                                      |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`                             |                                 エンティティタイプに基づいてエリートをスポーンさせます。                                 |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>` |                               エンティティタイプと場所に基づいてエリートをスポーンさせます。                                |
| `/em spawn boss <fileName>`                                                                   |                                   設定ファイルからカスタムボスをスポーンさせます。                                   |
| `/em spawn boss <fileName> <level>`                                                           |                              設定ファイルからカスタムボスをスポーンさせ、レベルを上書きします。                               |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`                                         |                               ある場所にある設定ファイルからカスタムボスをスポーンさせます。                                |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`                                 |                           ある場所にある設定ファイルからカスタムボスをスポーンさせ、レベルを上書きします。                           |
| `/em place boss <fileName>`                                                                   |                                    地域ボスにスポーンロケーションを追加します。                                    |
| `/em place treasureChest <fileName>`                                                          |                                   プレイヤーが立っている場所に宝箱を追加します。                                    |
| `/em remove`                                                                                  |           エリートモブエンティティを完全に削除します。エリート/地域/スーパー/NPC はすべて機能します。削除モードを終了するには、もう一度実行します。           |
| `/em event <eventName>`                                                                       |                                      カスタムの時限イベントを開始します。                                      |
| `/em place npc <npcFileName>`                                                                 |                                        NPC をスポーンさせます。                                        |
| `/em stats`                                                                                   |                         現在アクティブな EliteMobs エンティティとプレイヤーの統計情報を取得します。                          |
| `/em loot menu`                                                                               |                                 あらゆるカスタム戦利品を取得できるメニューを開きます。                                  |
| `/em loot give <player> <filename>`                                                           |                                    特定のカスタム戦利品をプレイヤーに与えます。                                    |
| `/em loot simulate <level>`                                                                   |                              設定されたティアからエリートモブからのドロップをシミュレートします。                              |
| `/em loot simulate <level> <times>`                                                           |                          設定されたティアからエリートモブからのドロップを、設定された回数シミュレートします。                          |
| `/em version`                                                                                 |                                      プラグインのバージョンを取得します。                                      |
| `/em reload`                                                                                  |                                   プラグインをリロードします。ほぼ毎回機能します。                                   |
| `/em kill`                                                                                    |                                     すべての攻撃的なエリートモブを倒します。                                     |
| `/em kill <radius>`                                                                           |                                  ある半径内のすべての攻撃的なエリートモブを倒します。                                  |
| `/em kill type <entityType>`                                                                  |                                     特定のタイプのエリートをすべて倒します。                                     |
| `/em kill type <entityType> <radius>`                                                         |                                  ある半径内の特定のタイプのエリートをすべて倒します。                                  |
| `/em loot debug <level>`                                                                      |                                     テスト用のデバッグアイテムを取得します。                                     |
| `/em money add <username> <amount>`                                                           |                                     プレイヤーに設定された金額を追加します。                                     |
| `/em money addall <amount>`                                                                   |                                すべてのオンラインプレイヤーに設定された金額を追加します。                                 |
| `/em money remove <username> <amount>`                                                        |                                    プレイヤーから設定された金額を削除します。                                     |
| `/em money set <username> <amount>`                                                           |                                      プレイヤーの通貨総額を設定します。                                       |
| `/em rank <player> <prestigeLevel> <guildLevel>`                                              |                                     プレイヤーのギルドランクを設定します。                                      |
| `/em discord`                                                                                 |                                 サポート Discord サーバーのリンクを取得します。                                 |
| `/em discord <message>`                                                                       |                      DiscordSRV が正しく設定されている場合、Discord にデバッグメッセージを投稿します。                      |
| `/em unbind force`                                                                            |                                 保持しているソウルバウンドアイテムをアンバインドします。                                 |
| `/em money check <player>`                                                                    |                                      特定のプレイヤーの通貨を確認します。                                      |
| `/em fireball`                                                                                |                                エリート爆発再生をテストするための火の玉をスポーンさせます。                                |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`                               | [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。 |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`                                   | [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。 |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`                       | [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。 |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`                               | [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。 |
| `/em transitiveBlocks cancel`                                                                 | [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。 |
| `/em protection bypass`                                                                       |                                ダンジョン保護を切り替えます。冒険者ギルドでも機能します。                                 |

## 内部管理者コマンド

これらのコマンドは、メニューやチャット上のインタラクティブなテキストと対話するときに実行することを想定しており、手動で実行することを想定していません。

| コマンド                               |                     説明                     |
|------------------------------------|:------------------------------------------:|
| `/em setup done`                   |          管理者ログイン時にメッセージの表示を停止します。          |
| `/em setup toggle <dungeonConfig>` | 指定された EliteMobs コンテンツのインストールを切り替えることができます。 |

# 生の権限：
```
permissions:
  elitemobs.*:
    description: すべての elitemobs コマンドへのアクセスを許可します
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: プレイヤーが /elitemobs stats を実行できるようにします
    default: op
  elitemobs.version:
    description: プレイヤーが /elitemobs version を実行できるようにします
    default: true
  elitemobs.shop.npc:
    description: プレイヤーが動的ショップ用の NPC と対話できるようにします
    default: true
  elitemobs.shop.command:
    description: プレイヤーがコマンドを通じて動的ショップメニューを開くことができるようにします
    default: true
  elitemobs.customshop.npc:
    description: プレイヤーが動的ショップ用の NPC と対話できるようにします
    default: true
  elitemobs.customshop.command:
    description: プレイヤーがコマンドを通じて動的ショップメニューを開くことができるようにします
    default: true
  elitemobs.currency.pay:
    description: プレイヤーが /elitemobs pay [username] [amount] を実行できるようにします
    default: true
  elitemobs.currency.check:
    description: プレイヤーが /elitemobs wallet を実行できるようにします
    default: true
  elitemobs.currency.check.others:
    description: プレイヤーが /elitemobs check [username] を実行できるようにします
    default: op
  elitemobs.events:
    description: プレイヤーがすべてのイベントを開始できるようにします
    default: true
  elitemobs.checktier.others:
    description: プレイヤーが /elitemobs checktier [player] を実行できるようにします
    default: op
  elitemobs.gettier:
    description: プレイヤーが /elitemobs gettier [tier] を実行できるようにします
    default: op
  elitemobs.versionnotification:
    description: プレイヤーがプラグインのアップデートについて通知を受けられるようにします
    default: op
  elitemobs.adventurersguild.teleport:
    description: プレイヤーが /ag を使用して冒険者ギルドハブにテレポートできるようにします
    default: true
  elitemobs.adventurersguild.command:
    description: プレイヤーが /em adventurersguild コマンドを使用してランクメニューを開くことができるようにします
    default: true
  elitemobs.rank.command:
    description: プレイヤーが /em rank を通じてランクメニューを開くことができるようにします
    default: true
  elitemobs.rank.npc:
    description: プレイヤーが NPC を通じて /em rank メニューにアクセスできるようにします
    default: true
  elitemobs.quest.command:
    description: プレイヤーがコマンドを介してクエストを受けることができるようにします
    default: true
  elitemobs.quest.npc:
    description: プレイヤーが EliteMobs NPC を介してクエストを受けることができるようにします
    default: true
  elitemobs.dungeontp:
    description: プレイヤーが elitemobs で設定された場所にテレポートできるようにします
    default: true
  elitemobs.spawntp:
    description: プレイヤーがサーバーのデフォルトのスポーン場所にテレポートできるようにします
    default: true
  elitemobs.back.npc:
    description: プレイヤーが NPC と対話して前の場所に戻れるようにします
    default: true
  elitemobs.shareitem:
    description: 保持しているエリートアイテムをチャットで共有します。
    default: true
  elitemobs.scrap.npc:
    description: プレイヤーが NPC でアイテムをスクラップできるようにします
    default: true
  elitemobs.scrap.command:
    description: プレイヤーがコマンドを使用してアイテムをスクラップできるようにします
    default: true
  elitemobs.smelt.command:
    description: プレイヤーがコマンドを使用してアイテムを製錬できるようにします
    default: true
  elitemobs.smelt.npc:
    description: プレイヤーが NPC を使用してアイテムを製錬できるようにします
    default: true
  elitemobs.repair.command:
    description: プレイヤーが修理コマンドを使用してエリートアイテムを修理するためのメニューを開くことができるようにします
    default: true
  elitemobs.repair.npc:
    description: プレイヤーがアイテムを修理するために NPC と対話できるようにします
    default: true
  elitemobs.refiner.command:
    description: プレイヤーがリファイナーコマンドを使用してエリートスクラップをアップグレードするためのメニューを開くことができるようにします
    default: true
  elitemobs.refiner.npc:
    description: プレイヤーがエリートスクラップをアップグレードするために NPC と対話できるようにします
    default: true
  elitemobs.enhancer.command:
    description: プレイヤーがエンハンサーコマンドを使用してエリートアイテムをアップグレードするためのメニューを開くことができるようにします
    default: true
  elitemobs.enhancer.npc:
    description: プレイヤーがエリートアイテムをアップグレードするために NPC と対話できるようにします
    default: true
  elitemobs.unbind.command:
    description: プレイヤーがアンバインドコマンドを使用してエリートアイテムをアンバインドするためのメニューを開くことができるようにします
    default: true
  elitemobs.unbind.npc:
    description: プレイヤーがエリートアイテムをアンバインドするためにアンバインダー NPC と対話できるようにします
    default: true
  elitemobs.soulbind.bypass:
    description: ユーザーがソウルバインドの制限をバイパスできるようにします。管理者のみにお勧めします！
    default: false
  elitequest.*:
    description: クエスト関連の権限に使用されます
    default: false
    op: false
```
