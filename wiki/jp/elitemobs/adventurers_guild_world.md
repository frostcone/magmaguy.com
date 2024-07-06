# アドベンチャーギルドの世界

### アドベンチャーギルドの世界とは？

アドベンチャーギルドの世界は、Realm of Lotheridon によって EliteMobs 用に作成された事前作成された世界の名前です。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### アドベンチャーギルドの世界の目的は？

アドベンチャーギルドの世界は、EliteMobs のハブとして機能します。ハブをホストすることで、プレイヤーは EliteMobs の機能とやり取りするために、（/em 以外に）コマンドを覚える必要がなくなります。

この世界には、以下のような NPC が事前に配置されています。

- トランスポーター（以前の場所に戻るため）
- ガイド（すべての NPC に出会うための紹介クエスト）
- ギルド受付係（[ギルドランク]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy) をアップグレードするため）
- ダンジョンテレポーター（インストールされている [ダンジョン]($language$/elitemobs/dungeons.md) にプレイヤーをテレポートする特別な NPC）
- バーテンダー（現在未実装）
- クエスト発行者（ランダムに生成されたクエストを閲覧し、受け入れるため）
- 鍛冶屋（手続き的に生成されたアイテムを購入し、エリートモブからのドロップを販売するため）
- 特殊鍛冶屋（カスタムアイテムを購入し、エリートモブからのドロップを販売するため）
- 戦闘インストラクター（EliteMobs の戦闘に関するヒントを提供するため）
- ワームホール（[ダンジョン]($language$elitemobs/dungeons.md) やその他のインストールされたコンテンツにプレイヤーをテレポートするポータル）
- アリーナマスター（この NPC は、プレイヤーが [ウッドリーグアリーナ]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas) に参加できるようにします）
- ストーリーモードクエスト（プレイヤーが [ストーリーモードダンジョン](www.magmaguy.com) のクエストを受けられるようにします）
- アンバインダー（プレイヤーが EliteMobs の戦利品を価格で [アンバインド]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) できるようにします）
- スクラッパー（プレイヤーが不要な戦利品を [スクラップ]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items) に変換できるようにします）
- 修理工（プレイヤーは、この NPC とやり取りして、スクラップを使用してアイテムを [修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) できます）
- エンチャンター（プレイヤーがアイテムを [エンチャント]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) できるようにします）

さらに、NPC 用の冒険者ギルドの建物と、EliteMobs アリーナ（現在未実装、近日公開予定）があります。

### アドベンチャーギルドの世界の設定方法

アドベンチャーギルドの世界をインストールするには、次の手順を実行します。

1. ファイルをダウンロードします。/em setup の赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2. ファイルをサーバーの /plugins/EliteMobs/imports フォルダーにアップロードまたは移動します。**ZIP** ファイルを `imports` フォルダーに入れたまま、何らかの変更を加えないでください。EliteMobs は、ファイルの抽出と正しい場所への移動を自動的に行います。

3. サーバーを再起動するか、/em reload を実行します。数秒後、/em setup を実行すると、ダウンロードした機能のインジケーターが黄色になります。

4. /em setup メニューの黄色のガラスをクリックして、インポートした機能をインストールします。すべて正しくインストールされると、アドベンチャーギルドのハブワールドにいるはずです。いつでも /ag を実行して、アドベンチャーギルドにテレポートできます。

#### ワームホールの設定

アドベンチャーギルドのハブワールドをインストールすると、プレイヤーがテレポートする場所にワームホールがあることに気づくでしょう。このワームホールは、プレイヤーを通常のワールドのスポーンポイントまたはサーバーのその他のセントラルロケーションに戻すように、あなたによって設定される必要があります。

ワームホールを設定するには、*~plugins\EliteMobs\wormholes* ディレクトリに移動し、*adventurers_guild_wormhole.yml* を開きます。`location2` 値を見つけて、`your_world_here` をワールド名に置き換えて、プレイヤーがテレポートされる正しい座標を追加します。 


