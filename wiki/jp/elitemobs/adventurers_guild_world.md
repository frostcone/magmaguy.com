# 冒険者ギルドワールド

### 冒険者ギルドワールドとは？

冒険者ギルドワールドは、Realm of Lotheridon が EliteMobs 用に作成した、事前作成されたワールドの名前です。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒険者ギルドワールドは何のためにありますか？

冒険者ギルドワールドは、EliteMobs のハブとして機能します。ハブをホストすることで、プレイヤーは、EliteMobs
の機能と対話するために、( `/em` 以外の) コマンドを記憶する必要がなくなります。

ワールド内には、次の NPC が事前に配置されています。

- トランスポーター（以前の場所に戻るため）
- ガイド（すべての NPC に会うための入門クエスト）
-
ギルドの受付係 ( [ギルドランク]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy)
のアップグレードのため)
- ダンジョン テレポーター (インストールされているすべての [ダンジョン]($language$/elitemobs/dungeons.md)
  にプレイヤーをテレポートする特別な NPC)
- バーテンダー (現在実装されていません)
- クエスト発行者 (ランダムに生成されたクエストを閲覧および受け入れるため)
- 鍛冶屋 (手続き的に生成されたアイテムを購入し、エリート モブからドロップを販売するため)
- 特別な鍛冶屋 (カスタム アイテムを購入し、エリート モブからドロップを販売するため)
- 戦闘教官 (EliteMobs 戦闘に関するヒントを提供するため)
- ワームホール (プレイヤーを[ダンジョン]($language$elitemobs/dungeons.md)
  やその他インストール済みのコンテンツにテレポートするポータル)
-
アリーナマスター（このNPCはプレイヤーに[ウッドリーグアリーナ]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas)
に参加させることができます）
- ストーリーモードクエスト（プレイヤーが[ストーリーモードダンジョン](www.magmaguy.com)のクエストを受注できるようにします）
- アンスティラー (プレイヤーが[アンスティル]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items)
  してEliteMobsの戦利品を有料で取引できるようにします)
- スクラッパー (
  プレイヤーが不要な戦利品を [スクラップ]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items)
  に変換できるようにします)
- 修理工 (プレイヤーがこの NPC
  と対話して、スクラップを使用してアイテムを[修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items)
  できます)
- エンチャンター (
  プレイヤーがアイテムを[エンチャント]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items)
  できます)

さらに、NPC のための冒険者ギルドの建物や、EliteMobs アリーナ (現在は未実装、近日公開!) があります。

### 冒険者ギルドワールドの設定方法

冒険者ギルドワールドをインストールするには、次の手順を実行します。

1. ファイルをダウンロードします。 `/em setup` の赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2. ファイルをサーバーの `/plugins/EliteMobs/imports` フォルダーにアップロード/移動します。**ZIP** ファイルを `imports`
   フォルダー内にそのままの状態で保存してください。EliteMobs はファイルを自動的に展開し、正しい場所に移動します。

3. 再起動するか、`/em reload` を実行します。数秒後、`/em setup` を実行すると、ダウンロードした機能のインジケーターが黄色になるはずです。

4. `/em setup`
   メニューで黄色いガラスをクリックして、インポートした機能をインストールします。すべてが正しくインストールされた場合、冒険者ギルドのハブワールドにいるはずです。`/ag`
   を実行すると、いつでも冒険者ギルドにテレポートできます。

#### ワームホールの構成

冒険者ギルドハブワールドをインストールすると、プレイヤーがテレポートする場所にワームホールがあることに気付くでしょう。このワームホールは、あなたの通常のワールドスポーンまたはサーバーの他の中心的な場所に戻るようにあなたが構成することになっています。

ワームホールを構成するには、ディレクトリ *~plugins\EliteMobs\wormholes* に移動し、*adventurers_guild_wormhole.yml*
を開きます。`location2` の値を見つけて、`your_world_here` をあなたのワールド名に置き換え、その後にプレイヤーがテレポートされるべき正しい座標を続けて入力します。
