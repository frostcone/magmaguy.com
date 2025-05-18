日本語に翻訳します。マークダウンの書式は保持します。

# 冒険者ギルドワールド

### 冒険者ギルドワールドとは？

冒険者ギルドワールドは、Realm of LotheridonによってEliteMobs向けに作成されたプリメイドワールドの名前です。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒険者ギルドワールドの目的は何ですか？

冒険者ギルドワールドはEliteMobsのハブとして機能します。このハブを設置することで、プレイヤーはEliteMobsの機能とやり取りするために、( /em 以外の) コマンドを覚える必要がなくなります。

ワールドには、以下のNPCが事前に配置されています：

- 転送屋 (以前の場所に戻るため)
- ガイド (すべてのNPCに会うための入門クエスト)
- ギルド受付 ( [ギルドランク]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy) をアップグレードするため)
- ダンジョン転送屋 (インストールされている [ダンジョン]($language$/elitemobs/dungeons.md) にプレイヤーをテレポートさせる特別なNPC)
- バーテンダー (現在未実装)
- クエスト提供者 (ランダムに生成されたクエストを閲覧・受注するため)
- 鍛冶屋 (プロシージャル生成されたアイテムを購入したり、エリートモブからのドロップ品を売却したりするため)
- 特殊鍛冶屋 (カスタムアイテムを購入したり、エリートモブからのドロップ品を売却したりするため)
- 戦闘教官 (EliteMobsの戦闘に関するヒントを与えるため)
- ワームホール (プレイヤーを [ダンジョン]($language$elitemobs/dungeons.md) やその他のインストールされたコンテンツにテレポートさせるポータル)
- アリーナマスター (このNPCはプレイヤーが [ウッドリーグアリーナ]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas) に参加できるようにします)
- ストーリーモードクエスト (プレイヤーが [ストーリーモードダンジョン](www.magmaguy.com) のクエストを受けられるようにします)
- アンバインダー (プレイヤーがEliteMobsの戦利品を費用を払って [アンバインド]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) できるようにします)
- スクラッパー (プレイヤーが不要な戦利品を [スクラップ]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items) に変換できるようにします)
- 修理屋 (プレイヤーはこのNPCとやり取りして、スクラップを使ってアイテムを [修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) できます)
- エンチャンター (プレイヤーがアイテムを [エンチャント]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) できるようにします)

さらに、NPCのための冒険者ギルドの建物や、EliteMobsアリーナ (現在未実装、近日公開！) も備えています。

### 冒険者ギルドワールドのセットアップ方法

冒険者ギルドワールドをインストールするには、以下の手順を実行してください：

1. ファイルをダウンロードします。ダウンロードリンクを取得するには、`/em setup` で赤いガラスをクリックしてください。

2. ファイルをサーバーの `/plugins/EliteMobs/imports` フォルダにアップロード/移動します。**ZIP化された**ファイルを一切変更せずに `imports` フォルダ内に配置してください。EliteMobsが自動的にファイルを解凍し、正しい場所に移動します。

3. サーバーを再起動するか、`/em reload` を実行します。数秒後、`/em setup` を実行すると、ダウンロードした機能のインジケーターが黄色になっているはずです。

4. `/em setup` メニューで黄色のガラスをクリックして、インポートされた機能をインストールします。すべてが正しくインストールされていれば、冒険者ギルドのハブワールドにいるはずです。`/ag` を実行することで、いつでも冒険者ギルドにテレポートできます。

#### ワームホールの設定

冒険者ギルドのハブワールドをインストールした後、プレイヤーがテレポートしてくる場所にワームホールがあることに気づくでしょう。このワームホールは、あなたの通常のワールドのスポーン地点や、サーバーの他の中心的な場所に戻るように、あなたが設定する必要があります。

ワームホールを設定するには、ディレクトリ *~plugins\EliteMobs\wormholes* に移動し、*adventurers_guild_wormhole.yml* を開きます。`location2` の値を見つけ、`your_world_here` をあなたのワールド名に置き換え、その後にプレイヤーがテレポートされるべき正しい座標を記述します。