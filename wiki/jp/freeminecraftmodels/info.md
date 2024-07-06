```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ***始める前に！***

FreeMinecraftModels (FMM) は現在 **アルファ版** です！つまり、いくつかの機能はまだ完成しておらず、現在も積極的に開発中です。

しかし、現時点では、このプラグインのコア部分は完全に機能しています。bbmodel ファイルの変換、リソースパックの生成、ゲーム内でのエンティティのスポーン、アニメーションの管理など、すべてが機能しています。ただし、100% 完成しているわけではありません。

https://www.patreon.com/magmaguy で開発を支援することを検討してください。

エクスポートされたリソースパックの内容は、CC0 ライセンスで提供されており、一切の権利は主張しません。無制限かつ帰属の必要なく、あらゆる目的に使用、配布、変更できます。

# このプラグインの使い方

## FreeMinecraftModels (FMM) は、Minecraft サーバーの管理者にとってどんなことができるのでしょうか？

次のことができます。

- .bbmodel または fmmodel（FFM のカスタム形式）モデルをインポートする
- 通常の Minecraft リソースパックモデルの制限を超えたモデルを含むリソースパックを生成する（最大 ~~112x112x112~~ 106x106x106 ユニットまたは 7x7x7 インゲームブロック）
- モデルのファイル名を小文字で、ファイル拡張子なしで指定して、コマンド `/fmm spawn static <id>` を使用して、これらのモデルをゲーム内に表示する
- Blockbench でアニメーションが設定されているように、これらのモデルをアニメーション化する
- 他のプラグインを必要とせずに、デフォルトの状態アニメーションを処理する（歩行、アイドル、死亡、攻撃、スポーン）

### 既存のモデルを追加するにはどうすればいいですか？

モデルをインポートするには、`.bbmodel` をインポートフォルダにドラッグし、`/fmm reload` を実行します。これにより、`models` フォルダに `.fmmodel` ファイルが生成され、`outputs` フォルダのリソースパックにモデルが追加されます。

***モデルを正しく表示するには、そのリソースパックを使用する必要があります！*** これは、通常の リソースパックなので、リソースパックフォルダに配置するだけです。Minecraft サーバーでは、Google Drive や https://resourcepack.host/ などの専門サービスなど、サードパーティサービスでリソースパックをホストする方法があります。この最後のウェブサイトが最も簡単な方法です。

### ゲーム内でモデルを表示するにはどうすればいいですか？

モデルには 2 つの（計画されている）カテゴリがあります。

- `Static` モデルは、移動しないモデル（アニメーションを持つことはできます）用で、電柱やクリスマスツリーなど、装飾として使用します。
- `Dynamic` モデルは、Minecraft のモブのように動作するモデル用です。つまり、モブに関連するさまざまな動作を行いながら移動します。カスタムボスモデルや、Minecraft にまったく新しいエンティティタイプを追加することを考えてみてください。

#### ゲーム内で静的モデルを表示する

ゲーム内で静的モデルを表示するには、モデルのファイル名を小文字で、ファイル拡張子なしで指定して、コマンド `/fmm spawn static <id>` を使用します。

#### ゲーム内で動的モデルを表示する

ゲーム内で動的モデルを表示するには、モデルのファイル名を小文字で、ファイル拡張子なしで指定して、コマンド `/fmm spawn dynamic <id>` を使用します。

## FreeMinecraftModels (FMM) は、モデル製作者にとってどんなことができるのでしょうか？

FMM は、リソースパックの生成に標準的なリソースパックルールに従っています。さらに、プラグイン間でモデル作成を標準化するために、可能な限り ModelEngine と互換性のあるモデルをサポートするように努めています。

### モデル生成の機能/制限

ModelEngine 用のモデルを作成したことがある場合は、Minecraft リソースパック生成の制限事項の多くを理解していることでしょう。

#### **キューブ:**

キューブは、Blockbench と同じように、モデルを構成するキューブです。

- キューブは、~~112x112x112~~ 106x106x106 "ピクセル"（Blockbench ユニット）または 7x7x7 インゲームブロックまで拡大できます（通常の Minecraft 制限は、表示サイズを使用して回避されています。1.19.4+ では、ディスプレイエンティティのおかげでさらに回避できるようになります）。
- キューブの有効な回転は、0、22.5、-22.5、45、-45 です。それ以外の回転は機能しません。
- キューブは、1 つの軸でのみ回転します。つまり、[22.5, 0, 0] の回転は問題ありませんが、[22.5, 0, 45] の回転は完全に機能せず、1 つの軸でのみ回転します。

#### **ボーン:**

ボーンは、Blockbench で「グループ」と呼ばれるものです。これは、キューブをグループ化するためのもので、アニメーション Blueprint のためにボーンをグループ化するために使用します。

- ボーンは、~~112x112x112~~ 106x106x106（112 であるべきですが、理由がわかりません） "ピクセル"（Blockbench ユニット）または 7x7x7 インゲームブロックまで拡大できます。*ボーンのサイズは、ボーンが持つものによって設定されるため、7 ブロック以上離れたキューブがある場合は、このサイズ制限を超える可能性があります。この制限を回避するには、最初の boneBlueprint に含まれない、別の boneBlueprint にブロックを配置するだけです。*
- 任意の回転を適用できます！

ボーンはキューブよりもはるかに柔軟性がありますが、できるだけ少ないボーンを使用する必要があります！FMM では、Minecraft の制限により、各 boneBlueprint は異なるエンティティです。規模が大きくなると、パフォーマンスが急速に悪化する可能性があります！可能な限り少ないボーンを使用し、スポーンするモデルの数を意識してください。スポーンするモデルの数が多いほど、ボーンの数は少なくなります！

#### **仮想ボーン**

ModelEngine を使用してきた場合は、仮想ボーンが FMM にどのように実装されているかを気にするかもしれません。仮想ボーンは予定されていましたが、非常に基本的な土台以外ではまだ実装されていません。

しかし、少なくとも、次の仮想 boneBlueprint 機能は、まもなく FMM と互換性を持つようになります。

- ヒットボックス/目の高さ: 境界線を定義する `cubeBlueprint` を含む、"hitbox" という名前の `boneBlueprint`。これは、x と z の値が同じです（値が異なる場合は、最も大きい値が選択されます）。ヒットボックスを定義します。目の高さは、ヒットボックスの `boneBlueprint` のピボットポイントに設定されます。
- 名前タグ: 名前が "tag_" で始まる `boneBlueprint` 。正直なところ、他の目的にタグを使用するために、"tag_name" のようにモード固有にすることを好むのですが、これは後で真剣に検討する予定です。

その他の仮想 boneBlueprint 機能は、近いうちに実装される予定はありません。

## リソースパックのマージ

FMM を使用している場合、リソースパックのマージが必要になる可能性があります。

リソースパックを手動でマージすることもできますが、[merge.elmakers](https://merge.elmakers.com/) などのオンラインツールを使用して、リソースパックをマージすることをお勧めします。

#### **より安全で簡単、編集不可能なファイルの配布**

FMM が取り組もうとしている 1 つの点は、ユーザーが取得したモデルを、モデルの作成者が編集したくない方法で編集することです。具体的には、モデルのスキンスキンを変更したり、わずかに変更したりして、独自の創作として販売しようとする場合です。

そのため、FMM は `.fmmodel` ファイル形式を使用しています。これは、`.bbmodel` ファイルを、プラグインで使用できるようになり、Blockbench で編集できなくなるまで、簡素化することを目的としています。

モデル制作者は、編集不可能な `.fmmodel` ファイルをリリースするか、編集可能な `.bbmodel` ファイルをリリースするか、またはその 2 つに対して差別化された価格設定や配布条件を設定するかを選択できます。

`.fmmodel` を生成するのは、`.bbmodel` を `~/plugins/FreeMinecraftModels/imports` フォルダに配置して、`/fmm reload` を実行するか、サーバーを再起動するだけです。`.fmmodel` は、`~/plugins/FreeMinecraftModels/models` フォルダに配置されます。

## FreeMinecraftModels (FMM) は、プラグインに統合したい開発者にとってどんなことができるのでしょうか？

FMM には、Maven レポジトリがあります！
Maven:

```xml

<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*注意: FreeMinecraftModels は API として使用することを目的としており、サーバーにプラグインをインストールする必要があります。プラグインにシェードしないでください。*

FMM は、API としてできるだけ簡単に使用できるように設計されています。

現時点では、プラグインの API として FMM を使用する場合、知っておく必要があるクラスは `StaticEntity` のみです。

これは、静的モデルを処理するためのスニペットです。

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Logger.warningMessage("FMM failed to find a model named " + id + " !");
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

静的モデルは、固定された場所に配置され、装飾として機能することを意図していることを忘れないでください（アニメーションはここでは「移動」と見なされません）。移動させることはできますが、目的がその場合は、代わりに動的モデルを使用することを検討してください。

そして、私のカスタムボスプラグインである EliteMobs は、動的エンティティを次のように使用しています。

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

動的モデルは、生きているエンティティの上に構築されます。このエンティティは、上記の例のように create メソッドを使用する場合、または Dynamic エンティティで spawn メソッドを実行する場合に提供されます。

正式な API リソースはまだありませんが、API 用途を目的としたすべての要素は、`ModeledEntity`（すべてのエンティティの基底クラス）、`StaticEntity`、`DynamicEntity`、`ModeledEntityManager` に含まれています。開発者の 99% は、これらの 3 つのクラスにわたって必要なメソッドを見つけることができるはずです。

# 開発者としての FreeMinecraftModels (FMM) プロジェクトへの貢献

FMM は、GPLV3 ライセンスで配布されており、コードへの貢献は大歓迎です。貢献に関する基本的なガイドラインを以下に示します。

- 既存の命名規則に従い、既存の冗長性を維持し、貢献が理解しやすいように十分なドキュメントを追加してください。
- 貢献は、プラグインの範囲に関連しているようにしてください。関連しているかどうかがわからない場合は、事前に質問してください。
- コードのパフォーマンスへの影響を考慮してください。コードが最適化されていない、またはパフォーマンスへの影響が大きすぎる場合は、貢献が拒否されることがあります。

## プラグインの概要

時間を節約するために、FMM のロジックフローを簡単に説明します。

1) `imports` フォルダを読み込みます。
2) `imports` フォルダのファイルを `models` フォルダに移動します。ファイルが `.bbmodel` の場合、`models` フォルダに `.fmmodel` に変換されます。
3) `models` フォルダのファイルを読み込みます。
4) すべてのモデル構造を解釈し、`Bone` のグループを含む `Skeleton` を作成します。これらのボーンには、子 `Bone` と `Cube` のグループが含まれます。`Cube` と `Bone` は、それぞれ関連する JSON リソースパックデータを生成します。つまり、`Cube` はキューブに固有の JSON を生成し、`Bone` はアウトラインと個々の `boneBlueprint` ファイルを生成します。1 つの `boneBlueprint` は、1 つのリソースパックファイルになります。モデルは、生成されると、リストに追加されます。
5) `Skeleton` のまま、モデルの `Animations` をすべて解釈します（存在する場合）。
6) すべてのデータが初期化され、`outputs` フォルダにリソースパックが生成され、プラグインが使用できるようになります。

## このプラグインで使用されているテクニック

ここで使用されているテクニックは、かなり確立されており、標準化されていますが、直感的ではないため、ここでリストします。

これらのテクニックは、ユーザーとモデル製作者にはすべて完全に隠されていることに注意してください。制限事項と回避策は、FMM がさまざまな Minecraft の制限をどのように回避しているかを理解するためにのみリストされています。

- すべてのモデルは 4 倍に拡大され、その後、コードでサイズとピボットポイントを再調整して、モデルの理論上の最大サイズを拡張します。
- リソースパックモデルは、サイズが -16 から +32 の範囲しか指定できないため、モデルはバックグラウンドでシフトされます。これは、プレイヤーにはまったく見えません。
- レザーの馬の鎧を使用して、コードで影響を与えられる色相のモデルを作成します（つまり、ダメージの表示のため）。馬の鎧は、正しい色を表示するために、白に設定する必要があります。
- Blockbench は、テクスチャに特定の ID システムを使用しますが、実際には、テクスチャを config から順番に読み取ります。ID は、Blockbench と同様に、テクスチャリストでの位置に基づいて、ここで割り当てられます。
- 各 boneBlueprint は、Minecraft の制限により、異なるアーマースタンドエンティティです。
- レザーの馬の鎧は、アーマースタンドの頭のスロットにあります。
- デフォルトの静的アイテムには、アーマースタンドが使用されます。//todo: まもなく、MC 1.19.4+ から新しい代替表示システムを実装する必要があります。これは、はるかに効率的です。
- レザーの馬の鎧を修正する他のプラグインとの衝突を避けるために、FMM は 50,000 から始まるカスタムモデルデータ値を使用します。

# FreeMinecraftModels (FMM) プロジェクトへの貢献

FMM は、[https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy) の素敵な方々に資金提供されています！すべての貢献は、想像以上に役に立ちます ;)

# 現在計画されている機能:
- Bedrock クライアントの RSP 生成。
- Geyser との統合による、サーバープロパティに依存しない RSP 管理。
- カスタムエンティティ (？)。
- 発射物を撃つことができるメタボーンとしての `tag_projectile`（モデルごとに複数ある可能性があります）。

# 現在存在する、修正が必要な奇妙な制限事項:
- `boneBlueprint` のピボットポイント（原点）が 67 を超えると、モデルが浮き始めます。

```



