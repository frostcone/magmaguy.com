```markdown
# ユーザーコマンド

*注意: すべてのプレイヤー権限は、デフォルトで true に設定されています。つまり、すでに設定されています。*

*プレイヤーに特定の機能への権限アクセスを許可したくない場合は、そのプレイヤーの権限を拒否する必要があります。*

| コマンド |    説明    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | メインコマンド。プラグイン内のすべてのプレイヤー情報を、アクセスしやすいメニューにまとめます。*注意:* 他のすべてのユーザーコマンドはこのメインコマンドに含まれています。`/em menu` も、このコマンドの有効なコマンドです。 |
| `/adventurersguild` / `/ag`     |推奨される設定では、プレイヤーをアドベンチャーギルドワールドにテレポートさせます。そこで、プレイヤーはさまざまな EliteMobs NPC と対話します。|
| `/shareitem`     |他のプレイヤーがアイテムの統計を見られるように、チャットでアイテムをリンクします。|
| `/em help`     |すべてのコマンドを一覧表示します。残りのユーザーコマンドは、通常、NPC または `/em` インターフェースを使用して置き換えられます！|
| `/em wallet`     |プレイヤーの所持金を表示します。|
| `/em pay <username> <amount>`     |プレイヤー同士がお金を支払うことができます。取引には、設定可能な金額が課税されます。|
| `/em updateitem`     |アイテムの Lore が同期されていない場合に、更新します。このコマンドは、デバッグ目的で使用され、通常のプレイでは必要ありません。|
| `/em spawntp`     |プレイヤーをサーバーのスポーン地点にテレポートします。|

## NPC コマンド

これらのコマンドは、NPC がインストールされたアドベンチャーギルドハブがない場合にのみ役立ちます。

コマンドを覚える代わりに、これらのコマンドを NPC で実行できるようにすることをお勧めします。

| コマンド | 説明 |
|---------|:-----------:|
| `/em rank`     |     ランクメニューを開くか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em shop`     |     ショップにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em customshop`     |     カスタムショップにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em repair`     |     修理メニューにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em enchant`     |     エンチャントメニューにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em scrap`     |     スクラップメニューにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |
| `/em unbind`     |     アンバインドメニューにアクセスするか、プレイヤーをアドベンチャーギルドハブにテレポートします。     |

## 内部ユーザーコマンド

**これらのコマンドは、クエストメニューのクエストなど、ゲーム内メニューから実行されることを意図しています。ID の取得方法について何も記載されていない場合は、ゲーム内メニューからコマンドを実行する以外に、ID を取得することはできません。** 利便性のために、これらのコマンドは、識別可能なカテゴリと識別不可能なカテゴリに分けられています。

### 識別可能なコマンド

| コマンド | 説明 |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |プレイヤーをダンジョンにテレポートします。|
*注意: これは `/em` メニューから実行されることを意図しています。プレイヤーがダンジョンの ID を推測することは不可能です。ダンジョンの ID は、`~/plugins/EliteMobs/dungeonpackages/` 内の .yml ファイル名と同じです。 <br/>`/em` コマンドを使用すると、コンソールに ID が表示されるので、テレポートページからテレポートを選択できます。*

### 識別不可能なコマンド

| コマンド | 説明 |
|---------|:-----------:|
| `/em quest accept <questID>`     |     クエストを受け入れます。     |
| `/em quest track <questID>`     |     クエストを追跡します。     |
| `/em quest complete <questID>`     |     クエストを完了します。     |
| `/em quest leave <questID>`     |     クエストから退出します。     |
| `/em trackcustomboss <uuid>`     |     カスタムボスを追跡します。注意: これは `/em` メニューから実行されることを意図しています。プレイヤーがボスの UUID を推測することは不可能です。     |

# 管理者コマンド

<div>

**> > > `elitemobs.*` - EliteMobs のすべてのコマンドへのアクセス権を持つ管理者権限！ < < <**

</div>

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup`     |     メイン設定メニューを開きます。     |
| `/em setup area <areaName>`     |     WorldGuard を使用してエリアを保護します。ミニダンジョンとアドベンチャーワールドハブで使用されます。注意: 推奨される設定方法を使用して設定する場合、手動で実行する必要はありません。     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     エンティティタイプに基づいてエリートをスポーンさせます。     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     エンティティタイプと場所に基づいてエリートをスポーンさせます。     |
| `/em spawncustom <fileName>`     |     設定ファイルからカスタムボスをスポーンさせます。     |
| `/em spawncustomlevel <fileName> <level>`     |     設定ファイルからカスタムボスをスポーンさせ、レベルを上書きします。     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     設定ファイルから場所を指定してカスタムボスをスポーンさせます。     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     設定ファイルから場所を指定してカスタムボスをスポーンさせ、レベルを上書きします。     |
| `/em spawnsuper <EntityType>`     |     エンティティタイプに基づいてスーパーモブをスポーンさせます。     |
| `/em addSpawnLocation <fileName>`     |     リージョンボスにスポーン位置を追加します。     |
| `/em addTreasureChest <fileName>`     |     プレイヤーが立っている場所に宝箱を追加します。     |
| `/em setLeashRadius <fileName> <radius>`     |     リージョンボスにスポーン位置を追加します。     |
| `/em remove`     |     エリートモブエンティティを永続的に削除します。エリート/リージョン/スーパー/NPC はすべて機能します。再度実行して削除モードを終了します。     |
| `/em debug <name>`     |     エリートモブエンティティを永続的に削除します。エリート/リージョン/スーパー/NPC はすべて機能します。再度実行して削除モードを終了します。     |
| `/em debug <name>`     |     プレイヤーまたはリージョンボスのデバッグ画面を開きます。     |
| `/em event <eventName>`     |     カスタムの時間イベントを開始します。     |
| `/em spawnnpc <npcFileName>`     |     NPC をスポーンさせます。     |
| `/em stats`     |     現在アクティブな EliteMobs エンティティとプレイヤーの統計情報を取得します。     |
| `/em getloot`     |     カスタムlootを取得できるメニューを開きます。     |
| `/em getloot <filename>`     |     特定のカスタムlootを取得します。     |
| `/em giveloot <filename> <player>`     |     プレイヤーに特定のカスタムlootを与えます。     |
| `/em simloot <level>`     |     設定されたティアのエリートモブからのドロップをシミュレートします。     |
| `/em simloot <level> <times>`     |     設定されたティアのエリートモブからのドロップを、設定された回数だけシミュレートします。     |
| `/em version`     |     プラグインのバージョンを取得します。     |
| `/em reload`     |     プラグインを再読み込みします。ほとんどの場合機能します。     |
| `/em killaggressive`     |     すべての攻撃的なエリートモブを殺します。     |
| `/em killaggressive <radius>`     |     半径内のすべての攻撃的なエリートモブを殺します。     |
| `/em killpassive`     |     すべての受動的なスーパーモブを殺します。     |
| `/em killpassive <radius>`     |     半径内のすべての受動的なスーパーモブを殺します。     |
| `/em killtype <entityType>`     |     特定のタイプのエリートをすべて殺します。     |
| `/em killtype <entityType> <radius>`     |     半径内の特定のタイプのエリートをすべて殺します。     |
| `/em gettier <tier>`     |     テスト目的でデバッグアイテムを取得します。     |
| `/em money add <username> <amount>`     |     プレイヤーに所定の金額を追加します。     |
| `/em money addall <amount>`     |     オンラインのすべてのプレイヤーに所定の金額を追加します。     |
| `/em money remove <username> <amount>`     |     プレイヤーから所定の金額を削除します。     |
| `/em money set <username> <amount>`     |     プレイヤーの総通貨額を設定します。     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     プレイヤーのギルドランクを設定します。     |
| `/em discord`     |     サポートDiscordサーバーのリンクを取得します。     |
| `/em discord <message>`     |     DiscordSRV が正しく設定されている場合は、デバッグメッセージをDiscordに投稿します。     |
| `/em forceunbind`     |     所持しているソウルバインドアイテムのソウルバインドを解除します。     |
| `/em relativecoords <minidungeon>`     |     インストールされているダンジョンの相対座標を取得します。     |
| `/em wallet <player>`     |     特定のプレイヤーの通貨を確認します。     |
| `/em fireball`     |     エリートの爆発の再生をテストするために、火の玉をスポーンさせます。     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。     |
| `/em cancelblocks`     |     [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks) を参照してください。     |
| `/em debugmode`     |     デバッグモードをオンにします。これにより、コンソールにモブのスポーンとデスが表示され、追跡が可能になります。     |

## 内部管理者コマンド

これらのコマンドは、メニューと対話可能なチャットテキストとの対話時に実行されることを意図しており、手動では実行されません。

| コマンド | 説明 |
|---------|:-----------:|
| `/em setup done`     |     管理者のログイン時にメッセージの表示を停止します。     |
| `/em setup minidungeon <minidungeonName>`     |     ミニダンジョンをインストールします。     |
| `/em setup minidungeon <minidungeonName>`     |     ミニダンジョンをアンインストールします。     |
| `/em trace <uuid>`     |     カスタムボスのスポーン/デスをトレースします。デバッグモードをオンにする必要があります。     |
| `/em debugtp <uuid>`     |     トレースされたカスタムボスがいる場所にテレポートします。デバッグモードをオンにする必要があります。     |
| `/em generateresourcepack`     |     リソースパックを生成します。使用方法については、カスタムモデルに関する wiki のエントリを確認してください。     |
| `/em updateresourcepack`     |     `server.properties` 設定でリソースパックの SHA1 を更新します。使用方法については、カスタムモデルに関する wiki のエントリを確認してください。     |

# 生の権限:
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```

