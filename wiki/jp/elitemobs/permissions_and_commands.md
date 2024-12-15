# ユーザーコマンド

*注：すべてのプレイヤーの権限はデフォルトでtrueに設定されています。つまり、すでに設定されている状態です。*

*権限を通じて特定の機能へのアクセスをプレイヤーに許可したくない場合は、そのプレイヤーの権限を拒否する必要があります！*

| コマンド | 説明 |
|---------|:-----------------:|
| `/elitemobs` / `/em` | メインコマンドで、プラグイン内のすべてのプレイヤー情報をアクセスしやすいメニューにまとめます。 *注：* 他のすべてのユーザーコマンドはこのメインコマンドの中にあります。 |
| `/adventurersguild` / `/ag`     |推奨設定では、プレイヤーを冒険者ギルドの世界にテレポートさせ、そこでさまざまなEliteMobsのNPCと対話します。|
| `/em shareItem`     |他のプレイヤーがそのステータスを見ることができるように、チャットにアイテムのリンクを貼ります。|
| `/em help`     |すべてのコマンドを一覧表示します。残りのユーザーコマンドは通常、NPCまたは`/em`インターフェースの使用に置き換えられます！コマンドにカーソルを合わせると、その説明が表示されます。|
| `/em money check`     |プレイヤーのお金を表示します。|
| `/em pay <username> <amount>`     |プレイヤー同士が支払いをできるようにします。トランザクションには設定可能な金額の税金がかかります。|
| `/em spawntp`     |プレイヤーをサーバーのスポーン地点にテレポートさせます。|

## NPCコマンド

これらのコマンドは、NPCがインストールされた冒険者ギルドハブがない場合にのみ役立ちます。

これらのコマンドを、プレイヤーがコマンドの動作を覚えるのではなく、NPCを通じて実行することをお勧めします。

| コマンド | 説明 |
|---------|:-----------:|
| `/em rank`     |     ランクメニューを開くか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop procedural <player>`     |     ショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop sell <player>`     |     ショップの売却メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop custom <player>`     |     カスタムショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em repair`     |     修理メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em enchant`     |     エンチャントメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em scrap`     |     スクラップメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em unbind`     |     バインド解除メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |

## 内部ユーザーコマンド

**これらのコマンドは、クエストメニューからのクエストなど、ゲーム内メニューから実行されることを想定しています。IDを取得する方法に関する説明がない場合、それはゲーム内メニューからコマンドを実行する以外にそのIDを取得することができないことを意味します。**便宜上、これらは識別可能および識別不可能なカテゴリに分割されています。

### 識別可能

| コマンド | 説明 |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |プレイヤーをダンジョンにテレポートさせます。|
*注：これは`/em`メニューから実行されることを想定しています。プレイヤーがダンジョンIDを推測することは不可能であるためです。ダンジョンのIDは、`~/plugins/EliteMobs/dungeonpackages/`内の.ymlファイル名と同じです。<br/>`/em`コマンドを使用してコンソールでIDを確認し、「テレポート」ページからテレポートを選択できます。*

### 識別不可能

| コマンド | 説明 |
|---------|:-----------:|
| `/em quest accept <questID>`     |     クエストを受け入れます。     |
| `/em quest track <questID>`     |     クエストを追跡します。     |
| `/em quest complete <questID>`     |     クエストを完了します。     |
| `/em quest leave <questID>`     |     クエストを離れます。     |
| `/em track boss <uuid>`     |     カスタムボスを追跡します。注：これは`/em`メニューから実行されることを想定しています。プレイヤーがボスのUUIDを推測することは不可能であるためです。     |

# 管理者コマンド

<div>

**> > > `elitemobs.*` - 完全なアクセス権を持つEliteMobsの管理者権限！ < < <**

</div>

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup`     |     メイン設定メニューを開きます。     |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`     |     エンティティタイプに基づいてエリートをスポーンします。     |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     エンティティタイプと場所に基づいてエリートをスポーンします。     |
| `/em spawn boss <fileName>`     |     構成ファイルからカスタムボスをスポーンします。     |
| `/em spawn boss <fileName> <level>`     |     構成ファイルからカスタムボスをスポーンし、レベルを上書きします。     |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`     |     特定の場所の構成ファイルからカスタムボスをスポーンします。     |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`     |     特定の場所の構成ファイルからカスタムボスをスポーンし、レベルを上書きします。     |
| `/em place boss <fileName>`     |     リージョナルボスのスポーン場所を追加します。     |
| `/em place treasureChest <fileName>`     |     プレイヤーが立っている場所に宝箱を追加します。     |
| `/em remove`     |     エリートモブエンティティを永久に削除します。エリート/リージョナル/スーパー/NPCすべてが機能します。削除モードを終了するには、もう一度実行してください。     |
| `/em event <eventName>`     |     カスタムの時限イベントを開始します。     |
| `/em place npc <npcFileName>`     |     NPCをスポーンします。     |
| `/em stats`     |     現在アクティブなEliteMobsエンティティとプレイヤーの統計情報を取得します。     |
| `/em loot menu`     |     カスタムルートを取得できるメニューを開きます。     |
| `/em loot give <player> <filename>`     |     特定のカスタムルートをプレイヤーに付与します。     |
| `/em loot simulate <level>`     |     設定されたティアのエリートモブからのドロップをシミュレートします。     |
| `/em loot simulate <level> <times>`     |     設定されたティアのエリートモブからのドロップを設定回数シミュレートします。     |
| `/em version`     |     プラグインのバージョンを取得します。     |
| `/em reload`     |     プラグインをリロードします。ほとんどの場合機能します。     |
| `/em kill `     |     すべてのアグレッシブなエリートモブをキルします。     |
| `/em kill <radius>`     |     半径内のすべてのアグレッシブなエリートモブをキルします。     |
| `/em kill type <entityType>`     |     特定のタイプのエリートをすべてキルします。     |
| `/em kill type <entityType> <radius>`     |     半径内の特定のタイプのエリートをすべてキルします。     |
| `/em loot debug <level>`     |     テスト目的でデバッグアイテムを取得します。     |
| `/em money add <username> <amount>`     |     プレイヤーに設定された金額のお金を追加します。     |
| `/em money addall <amount>`     |     オンラインのすべてのプレイヤーに設定された金額のお金を追加します。     |
| `/em money remove <username> <amount>`     |     プレイヤーから設定された金額のお金を削除します。     |
| `/em money set <username> <amount>`     |     プレイヤーの総通貨額を設定します。     |
| `/em rank <player> <prestigeLevel> <guildLevel>`     |     プレイヤーのギルドランクを設定します。     |
| `/em discord`     |     サポートDiscordサーバーのリンクを取得します。     |
| `/em discord <message>`     |     DiscordSRVが正しく設定されている場合、Discordにデバッグメッセージを投稿します。     |
| `/em unbind force`     |     保持されているソウルバウンドアイテムをバインド解除します。     |
| `/em money check <player>`     |     特定のプレイヤーの通貨を確認します。     |
| `/em fireball`     |     エリート爆発再生をテストするための火の玉をスポーンします。     |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`     |     [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`     |     [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`     |     [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`     |     [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks cancel`     |     [可変ブロック]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em protection bypass`     |     ダンジョン保護を切り替えます。冒険者ギルドでも機能します。     |

## 内部管理者コマンド

これらのコマンドは、メニューやチャットのインタラクティブテキストと対話するときに実行されることを意図しており、手動ではありません。

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup done`     |     管理者のログイン時にメッセージの表示を停止します。     |
| `/em setup toggle <dungeonConfig>`     |   指定されたEliteMobsコンテンツのインストールを切り替えることができます。    |

# 生の権限:
```
permissions:
  elitemobs.*:
    description: すべてのelitemobsコマンドへのアクセスを許可します。
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: プレイヤーが/elitemobs statsを実行できるようにします。
    default: op
  elitemobs.version:
    description: プレイヤーが/elitemobs versionを実行できるようにします。
    default: true
  elitemobs.shop.npc:
    description: プレイヤーが動的なショップのためにNPCと対話できるようにします。
    default: true
  elitemobs.shop.command:
    description: プレイヤーがコマンドを通じて動的なショップメニューを開くことを許可します。
    default: true
  elitemobs.customshop.npc:
    description: プレイヤーが動的なショップのためにNPCと対話できるようにします。
    default: true
  elitemobs.customshop.command:
    description: プレイヤーがコマンドを通じて動的なショップメニューを開くことを許可します。
    default: true
  elitemobs.currency.pay:
    description: プレイヤーが/elitemobs pay [username] [amount]を実行できるようにします。
    default: true
  elitemobs.currency.check:
    description: プレイヤーが/elitemobs walletを実行できるようにします。
    default: true
  elitemobs.currency.check.others:
    description: プレイヤーが/elitemobs check [username]を実行できるようにします。
    default: op
  elitemobs.events:
    description: プレイヤーがすべてのイベントを開始できるようにします。
    default: true
  elitemobs.checktier.others:
    description: プレイヤーが/elitemobs checktier [player]を実行できるようにします。
    default: op
  elitemobs.gettier:
    description: プレイヤーが/elitemobs gettier [tier]を実行できるようにします。
    default: op
  elitemobs.versionnotification:
    description: プレイヤーがプラグインのアップデートについて通知を受けられるようにします。
    default: op
  elitemobs.adventurersguild.teleport:
    description: プレイヤーが/agを使用して冒険者ギルドハブにテレポートできるようにします。
    default: true
  elitemobs.adventurersguild.command:
    description: プレイヤーが/em adventurersguildコマンドを使用してランクメニューにアクセスできるようにします。
    default: true
  elitemobs.rank.command:
    description: プレイヤーが/em rankを通じてランクメニューを開くことができるようにします。
    default: true
  elitemobs.rank.npc:
    description: プレイヤーがNPCを通じて/em rankメニューにアクセスできるようにします。
    default: true
  elitemobs.quest.command:
    description: プレイヤーがコマンドを介してクエストを引き受けることを許可します。
    default: true
  elitemobs.quest.npc:
    description: プレイヤーがEliteMobs NPCを介してクエストを引き受けることを許可します。
    default: true
  elitemobs.dungeontp:
    description: プレイヤーがelitemobs設定の場所にテレポートできるようにします。
    default: true
  elitemobs.spawntp:
    description: プレイヤーがサーバーのデフォルトのスポーン場所にテレポートできるようにします。
    default: true
  elitemobs.back.npc:
    description: プレイヤーがNPCと対話して前の場所に戻ることができるようにします。
    default: true
  elitemobs.shareitem:
    description: チャットで保持されているエリートアイテムを共有します。
    default: true
  elitemobs.scrap.npc:
    description: プレイヤーがNPCでアイテムをスクラップできるようにします。
    default: true
  elitemobs.scrap.command:
    description: プレイヤーがコマンドを使用してアイテムをスクラップできるようにします。
    default: true
  elitemobs.smelt.command:
    description: プレイヤーがコマンドを使用してアイテムを製錬できるようにします。
    default: true
  elitemobs.smelt.npc:
    description: プレイヤーがNPCを使用してアイテムを製錬できるようにします。
    default: true
  elitemobs.repair.command:
    description: プレイヤーが修理コマンドを使用して、エリートアイテムを修理するためのメニューを開くことができるようにします。
    default: true
  elitemobs.repair.npc:
    description: プレイヤーがアイテムを修理するためにNPCと対話できるようにします。
    default: true
  elitemobs.refiner.command:
    description: プレイヤーがリファイナーコマンドを使用して、エリートスクラップをアップグレードするためのメニューを開くことができるようにします。
    default: true
  elitemobs.refiner.npc:
    description: プレイヤーがエリートスクラップをアップグレードするためにNPCと対話できるようにします。
    default: true
  elitemobs.enhancer.command:
    description: プレイヤーがエンハンサーコマンドを使用して、エリートアイテムをアップグレードするためのメニューを開くことができるようにします。
    default: true
  elitemobs.enhancer.npc:
    description: プレイヤーがエリートアイテムをアップグレードするためにNPCと対話できるようにします。
    default: true
  elitemobs.unbind.command:
    description: プレイヤーがバインド解除コマンドを使用して、エリートアイテムをバインド解除するためのメニューを開くことができるようにします。
    default: true
  elitemobs.unbind.npc:
    description: プレイヤーがエリートアイテムのバインドを解除するためにバインダー解除NPCと対話できるようにします。
    default: true
  elitemobs.soulbind.bypass:
    description: ユーザーがソウルバインドの制限を回避できるようにします。管理者のみに推奨されます！
    default: false
  elitequest.*:
    description: クエスト関連の権限に使用されます。
    default: false
    op: false
```
