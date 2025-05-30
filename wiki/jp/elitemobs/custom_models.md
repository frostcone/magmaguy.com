日本語に翻訳します。Markdownの書式は保持します。

EliteMobs 7.3.12現在、[Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)と[FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/)を通じて、カスタムモデルがEliteMobsに追加されました。

# はじめに

EliteMobsの観点から見ると、カスタムモデルシステムは非常にシンプルです。管理者が行う必要があるのは、NPCまたはカスタムボスの設定ファイルに、使用するカスタムモデルを指定する行を追加することだけです。ただし、このシステムを完全に機能させるためには、Model EngineとMinecraftで正しい手順を踏む必要があり、これらは少し習得が難しいかもしれません。

このガイドでは、Model EngineとMinecraftとの連携について詳しく説明します。Blockbenchを使用してカスタムボスを作成する方法や、Model Engineの仕組みについては詳しく説明しません。それらについては、他の場所に多くのガイドが既に存在しており、それらのシステムについて詳しく知りたい場合は、直接それらのドキュメントを参照する方が良いでしょう。

## FreeMineCraft Models

FMMを使用してモデルを機能させる方法を知りたい場合は、[この]($language$/freeminecraftmodels/info.md)Wikiページを参照して詳細を確認してください。

# 最小要件

EliteMobs 7.3.12以降、Model Engine R2.2.0\*以降、Blockbench\*\*、Minecraftリソースパックの使用。

\* このプラグインには、さらに依存関係がある場合があります。そちらのドキュメントを確認してください。
\*\* カスタムモデルの作成と編集に必要です。コンテンツをインストールするだけで変更しない場合は不要です。

# カスタムモデルを手動で設定する

注意：このガイドは、有効なカスタムモデルが既にあることを前提としています。これらはBlockbenchファイル形式（`.bbmodel`）で提供されます。

EliteMobsは、NPCおよびカスタムボスにカスタムモデルを使用できます。そのプロセスはどちらも同じで、以下の通りです。

## ステップ1. EliteMobsの設定を行う

変更したいカスタムボスまたはNPCの設定ファイルに移動し、以下の行を追加します。

```yaml
customModel: modelname
```

`modelname`をモデルの名前に置き換えてください。名前は、使用しているカスタムモデルファイルの名前です。例として、テストボスのカスタムモデルファイルは`showcase_boss.bbmodel`です。したがって、設定オプションは以下のようになります。

```yaml
customModel: showcase_boss
```

EliteMobsの設定はこれで終わりです！ここから少し難しくなります。

## ステップ2. Model Engineデータの生成

[_注意：疑問や問題がある場合は、こちらのModel Engine Wikiを参照してください。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. カスタムモデルのBlockbenchファイル（`.bbmodel`）を`(yourServer)/plugins/ModelEngine/blueprints`ディレクトリに入れます。
2. コマンド`/meg reload`を実行します。すべてが正しく機能した場合、`[Model Engine] X models loaded`というメッセージが表示されるはずです。ここで`x`は登録されているモデルの数です。

## ステップ3. リソースパックの生成

[**注意：このステップを行うための、より簡単な代替方法がこのリンクにあります。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) ただし、ここでリストされている方法よりも柔軟性が少し劣ります。

これは、サーバーにダウンロードを管理させたい場合に最も難しい部分かもしれません。**自動配布を検討する前に、クライアントにリソースパックがある状態でシステムが機能するかどうかを確認してみてください！**

1. ディレクトリ`(yourServer)/plugins/ModelEngine/resource pack`に移動し、そのデータを使用してリソースパックを作成するか、そこにある`assets`フォルダを独自のリソースパックの`assets`に追加します。
    1. 新しいリソースパックを作成する場合は、`resource pack`内のファイルをzipファイルにまとめることができます。これは配布可能な有効なリソースパックになります。[詳細はこちら](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
    2. 既にリソースパックがある場合は、既存のモデルを誤って上書きしないように注意してください。[詳細はこちら](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack)。
2. リソースパックをプレイヤーに配布します。**リソースパックを持っているプレイヤーだけがカスタムモデルを見ることができます**。それ以外のプレイヤーには、非常に奇妙で壊れているように見えます。これらを多用する予定がある場合は、リソースパックの使用を強制することを検討してください。
    1. (オプション) プレイヤーがログイン時にリソースパックをダウンロードできるようにするには、ファイルをオンラインのどこかにホストし、server.propertiesの`resource-pack=`フィールドをそのアドレスを指すように変更する必要があります。**\***
    2. (オプション) リソースパックを変更している場合は、`resource-pack-sha1=`オプションを使用して、サーバーがプレイヤーのリソースパックを更新する必要があるかどうかを確認できるようにしたいでしょう。この値を生成するには、リソースパックを[http://onlinemd5.com/](http://onlinemd5.com/)にアップロードし、SHA1オプションを選択していることを確認してください。リソースパックを更新するたびにこれを行う必要があります。そうしないと、ユーザーは更新を取得できません。**\***
    3. (オプション) プレイヤーにリソースパックの使用を強制するには、server.propertiesで`require-resource-pack=true`オプションを使用します。**\***

**server.propertiesを変更した場合は、再起動が必要です！**

**\*** 注意：これらの手順でうまくいかない場合、これを機能させるのに役立つ多くのオンラインガイドがあります。

### リソースパックのマージ

リソースパックをマージする必要がある場合は、手動で行うこともできます。しかし、[merge.elmakers](https://merge.elmakers.com/)のようなオンラインツールを使用してリソースパックをマージすることをお勧めします。

## ステップ4. うまくいくことを願う

すべてが正しく行われたと仮定すると、ボスまたはNPCにカスタムモデルが表示されるはずです。以下のコマンドでスポーンできます。

* カスタムボス：`/em spawncustom filename.yml`
* NPC：`/em spawnnpc filename.yml`

その後、コマンド`/em remove`で削除できます。

# EliteMobs用のカスタムモデルの作成と適応

EliteMobsは、Model Engineによって有効と見なされる任意のモデルを使用できます。これは、できないことがほとんどないことを意味します。

ただし、アニメーションに関しては、ボスがアニメーションを使用できることを保証するために、アニメーションに特定の名前を使用する必要があります。

これらのアニメーション名は、Blockbenchのアニメーションタブで設定されたものです。いつでも名前を変更できるため、既存のモデルをEliteMobsで機能するように改造できます。

## アニメーション

このセクションはまだ拡張中です。このシステムはまだ非常に新しいため、機能リクエストが寄せられるにつれて、さらに多くの情報が追加されます。

### idle

`idle`は、戦闘中でなく移動していないエンティティの正しいアニメーション名です。EliteMobsは、Model Engineが使用するデフォルトのアイドルアニメーションシステムを変更しません。

### walk

`walk`は、移動しているエンティティの正しいアニメーション名です。EliteMobsは、Model Engineが使用するデフォルトのアイドルアニメーションシステムを変更しません。

### attack

攻撃アニメーションには3つのタイプがあります。

#### attack

`attack`は、ボスが攻撃するときの正しい一般的なアニメーション名です。

#### attack_melee

`attack_melee`は、カスタムボスがバニラMinecraftの近接攻撃を使用してエンティティを攻撃するときの正しいアニメーション名です。`attack`を上書きします。アニメーションはダメージが与えられた**後**に再生されることに注意してください。これは残念ながら現時点での制限です。したがって、アニメーションを非常に速くするようにしてください。

#### attack_ranged

`attack_ranged`は、カスタムボスが投射エンティティをスポーンするときの正しいアニメーション名です。`attack`を上書きします。アニメーションは投射物が発射された**後**に再生されることに注意してください。これは残念ながら現時点での制限です。したがって、アニメーションを非常に速くするようにしてください。

### damaged

`damaged`は、カスタムボスがダメージを受けたときに再生する被ダメージアニメーションの正しいアニメーション名です。

### death

`death`は、死亡アニメーションの正しいアニメーション名です。EliteMobsは、Model Engineが使用するデフォルトのアイドルアニメーションシステムを変更しません。

### powers

注意：このセグメントはまだ開発中です。以下は、計画されている機能です。

EliteMobsのすべてのパワーには、アニメーションを割り当てることができます。アニメーションは常にパワーがトリガーされたときに開始され、パワーの使用中にそれ以上のトリガーは現在提供されていません。無敵などの一部のパワーは、トリガーがなく、ボスの受動的なプロパティであるため、何も行いません。

パワーにアニメーションを割り当てるには、アニメーションの名前をelitemobsパワーファイルと同じにする必要があります。

例として、ゾンビネクロノミコンパワーにアニメーションを追加するには、アニメーションの名前を`zombie_necronomicon.yml`にする必要があります。パワーがトリガーされるとすぐに再生が開始され、ループするように設定されていない場合はアニメーションが終了したとき、またはパワーが完了したときに終了します。

# ダンジョンからのカスタムモデルのインポート

## ステップ1. 通常のインポート

カスタムモデルを含むダンジョンパッカーのzipフォルダをインポートすると、カスタムモデルは自動的に`(yourServer)/plugins/ModelEngine/blueprints`に移動され、Model Engineは関連するリソースパックとModel Engineファイルを生成するために自動的にリロードされます。

## ステップ2. リソースパックの生成

ファイルをインポートするためにEliteMobsをリロードするときにオンラインである場合、EliteMobsは自動的にチャットにメッセージを投稿し、それをクリックしてEliteMobsリソースパックを生成できます。または、コマンド`/em generateresourcepack`を実行して生成することもできます。

このコマンドを実行すると、すべてのリソースパックファイルがEliteMobsの`exports`フォルダに非破壊的な方法でコピーされます。これは、リソースパックフォルダの名前として`elitemobs_resource_pack`を使用してリソースパックをexportsフォルダに解凍した場合、ModelEngineから同じ名前のファイルが取得されない限り、EliteMobsはそこにあるファイルを削除しないことを意味します（pack.metaとpack.pngを除く）。このようにして、以前に入れたモデルを失うことなくリソースパックを更新できます。

最後に、EliteMobsは`exports`フォルダ内のリソースパックをzip化し、このファイルは配布の準備が整います。

これが完了した後、EliteMobsはリソースパックのSHA1コードを更新することも提案します。

### ステップ2.5. SHA1の更新

`server.properties`ファイル内のSHA1コードは、クライアントにリソースパックが古いかどうかを知らせ、必要に応じて更新させるために使用されます。このコードは、ステップ2の後に表示されるチャットのオプションをクリックするか、コマンド`/em updateresourcepack`を実行することでEliteMobsを通じて生成できます。

**これは、`exports`フォルダ内のzip化されたリソースパックの正しいSHA1コードでserver.propertiesファイルを更新することに注意してください。** コマンド実行後に削除したり、zipファイルを変更したりすると、機能しません。

## ステップ3. ファイルを公開する

選択した場所にファイルをホストします。一部の人はGoogle DriveやDropboxを使用しています。可能であれば、このファイルを自分でホストする方が良いでしょう。一部のプラグインは、Minecraftサーバーから直接ホストするのに役立つかもしれません。そのようなプラグインが見つかり、機能する場合は、DiscordでMagmaGuyに知らせてください。この投稿はその情報で更新されます。