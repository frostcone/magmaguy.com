日本語に翻訳します。マークダウンの書式は維持します。

# ユーザーコマンド

*注: デフォルトでは、すべてのプレイヤー権限はtrueに設定されています。これは、それらがすでに設定されていることを意味します。*

*プレイヤーに特定の機能への権限によるアクセスを許可したくない場合は、そのプレイヤーの権限を拒否する必要があります！*

| コマンド | 説明 |
|---------|:-----------------:|
| `/elitemobs` / `/em` | メインコマンド。プラグイン内のすべてのプレイヤー情報を簡単にアクセスできるメニューに集約します。*注:* 他のすべてのユーザーコマンドはこのメインコマンド内にあります。 |
| `/adventurersguild` / `/ag`     |推奨される設定では、プレイヤーを冒険者ギルドワールドにテレポートさせ、そこで様々なEliteMobs NPCと交流できます。|
| `/em shareItem`     |チャットにアイテムをリンクし、他のプレイヤーがそのステータスを見られるようにします。|
| `/em help`     |すべてのコマンドを一覧表示します。残りのユーザーコマンドは通常、NPCまたは`/em`インターフェースの使用に置き換えられます！コマンドにカーソルを合わせると、その説明が表示されます。 |
| `/em money check`     |プレイヤーの所持金を表示します。|
| `/em pay <username> <amount>`     |プレイヤー同士がお金を支払い合えるようにします。取引には設定可能な金額が課税されます。|
| `/em spawntp`     |プレイヤーをサーバーのスポーン地点にテレポートさせます。|

## NPCコマンド

これらのコマンドは、NPC付きの冒険者ギルドハブがインストールされていない場合にのみ役立ちます。

プレイヤーがコマンドの仕組みを覚える代わりに、これらのコマンドすべてをNPC経由で実行できるように、これらをインストールすることを推奨します。

| コマンド | 説明 |
|---------|:-----------:|
| `/em rank`     |     ランクメニューを開くか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop procedural <player>`     |     ショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop sell <player>`     |     ショップ売却メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em shop custom <player>`     |     カスタムショップにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em repair`     |     修理メニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em enchant`     |     エンチャントメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em scrap`     |     スクラップメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |
| `/em unbind`     |     アンバインドメニューにアクセスするか、プレイヤーを冒険者ギルドハブにテレポートさせます。     |

## 内部ユーザーコマンド

**これらのコマンドは、クエストメニューからのクエストなど、ゲーム内メニューから実行されることを意図しています。IDの取得方法に関する説明が書かれていない場合、それはゲーム内メニューからコマンドを実行する以外の方法でそのIDを取得することは不可能であることを意味します。** 利便性のために、これらは識別可能と識別不能のカテゴリに分けられています。

### 識別可能

| コマンド | 説明 |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |プレイヤーをダンジョンにテレポートさせます。|
*注: これは`/em`メニューから実行されることを意図しています。プレイヤーがダンジョンIDを推測することは不可能なためです。ダンジョンのIDは、`~/plugins/EliteMobs/dungeonpackages/`内の.ymlファイル名と同じです。<br/>`/em`コマンドを使用する際にコンソールでIDを確認し、テレポートページからテレポートを選択できます。*

### 識別不能

| コマンド | 説明 |
|---------|:-----------:|
| `/em quest accept <questID>`     |     クエストを受諾します。     |
| `/em quest track <questID>`     |     クエストを追跡します。     |
| `/em quest complete <questID>`     |     クエストを完了します。     |
| `/em quest leave <questID>`     |     クエストを放棄します。     |
| `/em track boss <uuid>`     |     カスタムボスを追跡します。注: これは`/em`メニューから実行されることを意図しています。プレイヤーがボスのUUIDを推測することは不可能なためです。     |

# 管理者コマンド

<div>

**> > > `elitemobs.*` - EliteMobsの管理者権限。フルアクセスが可能！ < < <**

</div>

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup`     |     メインセットアップメニューを開きます。     |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`     |     エンティティタイプに基づいてエリートをスポーンさせます。     |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     エンティティタイプと場所に基づいてエリートをスポーンさせます。     |
| `/em spawn boss <fileName>`     |     設定ファイルからカスタムボスをスポーンさせます。     |
| `/em spawn boss <fileName> <level>`     |     設定ファイルからカスタムボスをスポーンさせ、レベルを上書きします。     |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`     |     設定ファイルからカスタムボスを特定の場所にスポーンさせます。     |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`     |     設定ファイルからカスタムボスを特定の場所にスポーンさせ、レベルを上書きします。     |
| `/em place boss <fileName>`     |     リージョンボスにスポーン場所を追加します。     |
| `/em place treasureChest <fileName>`     |     プレイヤーが立っている場所に宝箱を追加します。     |
| `/em remove`     |     Elite Mobエンティティを永久に削除します。エリート/リージョン/スーパー/NPCすべてに機能します。再度実行すると削除モードを終了します。     |
| `/em event <eventName>`     |     カスタム時限イベントを開始します。     |
| `/em place npc <npcFileName>`     |     NPCをスポーンさせます。     |
| `/em stats`     |     現在アクティブなEliteMobsエンティティとプレイヤーの統計を取得します。     |
| `/em loot menu`     |     任意のカスタムルートを取得できるメニューを開きます。     |
| `/em loot give <player> <filename>`     |     特定のカスタムルートをプレイヤーに与えます。     |
| `/em loot simulate <level>`     |     設定されたティアのエリートモブからのドロップをシミュレートします。     |
| `/em loot simulate <level> <times>`     |     設定されたティアのエリートモブからのドロップを設定回数シミュレートします。     |
| `/em version`     |     プラグインのバージョンを取得します。     |
| `/em reload`     |     プラグインをリロードします。ほとんどの場合機能します。     |
| `/em kill `     |     すべての攻撃的なElite Mobをキルします。     |
| `/em kill <radius>`     |     半径内のすべての攻撃的なElite Mobをキルします。     |
| `/em kill type <entityType>`     |     特定のタイプのエリートをすべてキルします。     |
| `/em kill type <entityType> <radius>`     |     半径内の特定のタイプのエリートをすべてキルします。     |
| `/em loot debug <level>`     |     テスト目的のデバッグアイテムを取得します。     |
| `/em money add <username> <amount>`     |     プレイヤーに設定された金額を追加します。     |
| `/em money addall <amount>`     |     すべてのオンラインプレイヤーに設定された金額を追加します。     |
| `/em money remove <username> <amount>`     |     プレイヤーから設定された金額を削除します。     |
| `/em money set <username> <amount>`     |     プレイヤーが持つ合計金額を設定します。     |
| `/em rank <player> <prestigeLevel> <guildLevel>`     |     プレイヤーのギルドランクを設定します。     |
| `/em discord`     |     サポートDiscordサーバーへのリンクを取得します。     |
| `/em discord <message>`     |     DiscordSRVが正しく設定されている場合、Discordにデバッグメッセージを投稿します。     |
| `/em unbind force`     |     所持しているソウルバウンドアイテムをアンバインドします。     |
| `/em money check <player>`     |     特定のプレイヤーの所持金を確認します。     |
| `/em fireball`     |     エリート爆発再生をテストするために火の玉をスポーンさせます。     |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em transitiveBlocks cancel`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)を参照してください。     |
| `/em protection bypass`     |     ダンジョン保護を切り替えます。冒険者ギルドにも機能します。     |

## 内部管理者コマンド

これらのコマンドは、メニューやチャット上の操作可能なテキストとやり取りする際に実行されることを意図しており、手動で実行するものではありません。

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup done`     |     管理者ログイン時のメッセージ表示を停止します。     |
| `/em setup toggle <dungeonConfig>`     |   指定されたEliteMobsコンテンツのインストールを切り替えることができます。    |

# 生の権限:
```
permissions:
  elitemobs.*:
    description: すべてのelitemobsコマンドへのアクセスを許可します
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: プレイヤーが/elitemobs statsを実行できるようにします
    default: op
  elitemobs.version:
    description: プレイヤーが/elitemobs versionを実行できるようにします
    default: true
  elitemobs.shop.npc:
    description: プレイヤーがNPCとインタラクトして動的なショップを利用できるようにします
    default: true
  elitemobs.shop.command:
    description: プレイヤーがコマンドを通じて動的なショップメニューを開けるようにします
    default: true
  elitemobs.customshop.npc:
    description: プレイヤーがNPCとインタラクトして動的なショップを利用できるようにします
    default: true
  elitemobs.customshop.command:
    description: プレイヤーがコマンドを通じて動的なショップメニューを開けるようにします
    default: true
  elitemobs.money.pay:
    description: プレイヤーが/elitemobs pay [username] [amount]を実行できるようにします
    default: true
  elitemobs.money.check:
    description: プレイヤーが/elitemobs walletを実行できるようにします
    default: true
  elitemobs.money.check.others:
    description: プレイヤーが/elitemobs check [username]を実行できるようにします
    default: op
  elitemobs.events:
    description: プレイヤーがすべてのイベントを開始できるようにします
    default: true
  elitemobs.checktier.others:
    description: プレイヤーが/elitemobs checktier [player]を実行できるようにします
    default: op
  elitemobs.gettier:
    description: プレイヤーが/elitemobs gettier [tier]を実行できるようにします
    default: op
  elitemobs.versionnotification:
    description: プレイヤーがプラグインのアップデート通知を受け取れるようにします
    default: op
  elitemobs.adventurersguild.teleport:
    description: プレイヤーが/agを使用して冒険者ギルドハブにテレポートできるようにします
    default: true
  elitemobs.adventurersguild.command:
    description: プレイヤーが/em adventurersguildコマンドを使用してランクメニューを開けるようにします
    default: true
  elitemobs.rank.command:
    description: プレイヤーが/em rankを通じてランクメニューを開けるようにします
    default: true
  elitemobs.rank.npc:
    description: プレイヤーがNPCを通じて/em rankメニューにアクセスできるようにします
    default: true
  elitemobs.quest.command:
    description: プレイヤーがコマンド経由でクエストを受諾できるようにします
    default: true
  elitemobs.quest.npc:
    description: プレイヤーがEliteMobs NPC経由でクエストを受諾できるようにします
    default: true
  elitemobs.dungeontp:
    description: プレイヤーがelitemobsで設定された場所にテレポートできるようにします
    default: true
  elitemobs.spawntp:
    description: プレイヤーがサーバーのデフォルトスポーン地点にテレポートできるようにします。
    default: true
  elitemobs.back.npc:
    description: プレイヤーがNPCとインタラクトして以前の場所に戻れるようにします。
    default: true
  elitemobs.shareitem:
    description: 所持しているEliteアイテムをチャットで共有します。
    default: true
  elitemobs.scrap.npc:
    description: プレイヤーがNPCでアイテムをスクラップできるようにします
    default: true
  elitemobs.scrap.command:
    description: プレイヤーがコマンドを使用してアイテムをスクラップできるようにします
    default: true
  elitemobs.smelt.command:
    description: プレイヤーがコマンドを使用してアイテムを精錬できるようにします
    default: true
  elitemobs.smelt.npc:
    description: プレイヤーがNPCを使用してアイテムを精錬できるようにします
    default: true
  elitemobs.repair.command:
    description: プレイヤーが修理コマンドを使用してEliteアイテム修理メニューを開けるようにします
    default: true
  elitemobs.repair.npc:
    description: プレイヤーがアイテム修理用のNPCとインタラクトできるようにします
    default: true
  elitemobs.refiner.command:
    description: プレイヤーがリファイナーコマンドを使用してEliteスクラップアップグレードメニューを開けるようにします
    default: true
  elitemobs.refiner.npc:
    description: プレイヤーがEliteスクラップアップグレード用のNPCとインタラクトできるようにします
    default: true
  elitemobs.enhancer.command:
    description: プレイヤーがエンハンサーコマンドを使用してEliteアイテムアップグレードメニューを開けるようにします
    default: true
  elitemobs.enhancer.npc:
    description: プレイヤーがEliteアイテムアップグレード用のNPCとインタラクトできるようにします
    default: true
  elitemobs.unbind.command:
    description: プレイヤーがアンバインドコマンドを使用してEliteアイテムアンバインドメニューを開けるようにします
    default: true
  elitemobs.unbind.npc:
    description: プレイヤーがEliteアイテムアンバインド用のアンバインダーNPCとインタラクトできるようにします
    default: true
  elitemobs.soulbind.bypass:
    description: ユーザーがソウルバインド制限をバイパスできるようにします。管理者のみに推奨！
    default: false
  elitequest.*:
    description: クエスト関連の権限に使用されます
    default: false
    op: false
```