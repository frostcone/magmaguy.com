```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

EliteMobs 7.3.12 以降、[Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) と [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/) を介して、カスタムモデルが EliteMobs に追加されました。

# はじめに

EliteMobs の観点から見ると、カスタムモデルシステムは非常にシンプルです。管理者は、NPC またはカスタムボスの設定ファイルに、使用するカスタムモデルを指定する行を追加するだけです。しかし、このシステムを完全に機能させるためには、Model Engine と Minecraft で正しい手順を実行する必要があり、これはそれほど簡単ではありません。

このガイドでは、Model Engine と Minecraft のインターフェースに関する詳細を説明します。カスタムボスを作成するために Blockbench をどのように使用するか、または Model Engine の動作の詳細については説明しません。これらについては、すでにさまざまなガイドが用意されています。これらのシステムについてさらに詳しく知りたい場合は、直接それぞれのドキュメントを参照してください。

## FreeMineCraft Models

FMM を使用してモデルを動作させる方法については、[この](https://wiki.magmaguy.com/freeminecraftmodels/info.md) wiki ページで詳しく確認できます。

# 最低要件

EliteMobs 7.3.12 以降、Model Engine R2.2.0\* 以降、Blockbench\*\*、Minecraft リソースパックを使用しています。

\* このプラグインには、さらに依存関係がある可能性があります。それぞれのドキュメントを確認してください。  
\*\* カスタムモデルの作成と編集に必要です。変更せずにコンテンツをインストールするだけの場合、これは必要ありません。

# カスタムモデルを手動で設定する

注意: このガイドでは、有効なカスタムモデルがすでに存在することを前提としています。これらのモデルは、Blockbench ファイル形式（`.bbmodel`）で提供されます。

EliteMobs は、NPC とカスタムボスにカスタムモデルを使用できます。この手順は、両方とも同じで、次のとおりです。

## 手順 1. EliteMobs 設定の設定

変更するカスタムボスまたは NPC の設定ファイルに移動し、次の行を追加します。

```yaml
customModel: modelname
```

`modelname` をモデルの名前で置き換えます。名前は、使用しているカスタムモデルファイルの名前です。たとえば、Test Boss のカスタムモデルファイルは `showcase_boss.bbmodel` です。したがって、設定オプションは次のようになります。

```yaml
customModel: showcase_boss
```

これで EliteMobs の設定は完了です。ここからが少し難しいです。

## 手順 2. Model Engine データの生成

[_注意: 不明な点や問題が発生した場合は、Model Engine の wiki をこちらで確認してください。_](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  カスタムモデルの Blockbench ファイル（`.bbmodel`）を `(yourServer)/plugins/ModelEngine/blueprints` ディレクトリに入れます。
2.  コマンド `/meg reload` を実行します。すべてが正しく動作した場合は、`[Model Engine] X models loaded` というメッセージが表示されます。ここで、`x` は登録したモデルの数です。

## 手順 3. リソースパックの生成

[**注意: この手順には、このリンクにある、より簡単で、代替の方法が用意されました。**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) しかし、これは、ここに記載されているものよりも柔軟性が劣ります。

これは、サーバーがダウンロードを管理する場合、おそらく最も難しい部分です。**リソースパックをクライアントにインストールしてから、自動配信を検討する前に、システムが正常に動作するかを確認してみてください！**

1.  `

