# 冒険者ギルドワールド

### 冒険者ギルドワールドとは？

冒険者ギルドワールドは、Realm of LotheridonがEliteMobsのために作成した、あらかじめ構築されたワールドの名前です。

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### 冒険者ギルドワールドの目的は？

冒険者ギルドワールドは、EliteMobsのハブとして機能します。このハブを設置することで、プレイヤーはEliteMobsの機能を利用するために、もはや（/em以外の）コマンドを覚える必要がなくなります。

ワールド内には、以下のNPCがあらかじめ配置されています。

- トランスポーター（以前の場所に戻るため）
- ガイド（すべてのNPCに会うための導入クエスト）
-
ギルドアテンダント（[ギルドランク]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy)
をアップグレードするため）
- ダンジョンテレポーター（インストールされた[ダンジョン]($language$/elitemobs/dungeons.md)にプレイヤーをテレポートさせる特別なNPC）
- バーテンダー（現在未実装）
- クエストギバー（ランダムに生成されるクエストを閲覧・受注するため）
- 鍛冶屋（手続き型で生成されたアイテムを購入したり、エリートモブからのドロップを販売したりするため）
- 特殊鍛冶屋（カスタムアイテムを購入したり、エリートモブからのドロップを販売したりするため）
- 戦闘インストラクター（EliteMobsの戦闘に関するヒントを提供するため）
- ワームホール（プレイヤーを[ダンジョン]($language$elitemobs/dungeons.md)やその他のインストールされたコンテンツにテレポートさせるポータル）
-
アリーナマスター（プレイヤーが[ウッドリーグアリーナ]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas)
に参加できるようにするNPC）
- ストーリーモードクエスト（プレイヤーが[ストーリーモードダンジョン](www.magmaguy.com)のクエストを受けられるようにする）
-
アンバインダー（プレイヤーがEliteMobsの戦利品を、料金を払って[アンバインド]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items)
できるようにする）
-
スクラッパー（プレイヤーが不要な戦利品を[スクラップ]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items)
に変換できるようにする）
-
修理屋（プレイヤーがスクラップを使用してアイテムを[修理]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items)
できるようにする）
-
エンチャンター（プレイヤーがアイテムを[エンチャント]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items)
できるようにする）

さらに、NPC用の冒険者ギルドの建物と、EliteMobsアリーナ（現在未実装、近日公開予定！）も備えています。

### 冒険者ギルドワールドのセットアップ方法

冒険者ギルドワールドをインストールするには、以下を行ってください。

1. ファイルをダウンロードします。`/em setup`の赤いガラスをクリックすると、ダウンロードへのリンクが表示されます。

2. ファイルをサーバーの`/plugins/EliteMobs/imports`フォルダーにアップロード/移動します。**ZIP**
   ファイルを、何も変更せずに`imports`フォルダーの中に置いてください。EliteMobsが自動的にファイルを展開し、正しい場所に移動します。

3. 再起動するか、`/em reload`を実行します。数秒後、`/em setup`を実行すると、ダウンロードした機能のインジケーターが黄色になります。

4. `/em setup`
   メニューの黄色いガラスをクリックして、インポートした機能をインストールします。すべてが正しくインストールされたら、冒険者ギルドのハブワールドにいるはずです。`/ag`
   を実行すると、いつでも冒険者ギルドにテレポートできます。

#### ワームホールの設定

冒険者ギルドのハブワールドをインストールすると、プレイヤーがテレポートインする場所にワームホールがあることに気づくでしょう。このワームホールは、あなた自身が設定して、通常のワールドスポーンや、サーバーの中央となる場所に繋がるようにする必要があります。

ワームホールを設定するには、*~plugins\EliteMobs\wormholes*ディレクトリに移動して、*adventurers_guild_wormhole.yml*
を開いてください。`location2`の値を見つけて、`your_world_here`をあなたのワールド名に置き換え、その後に、プレイヤーがテレポートされるべき正しい座標を続けます。
