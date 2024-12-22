# ***始める前に！***

FreeMinecraftModels (FMM) は現在 **アルファ版** です！これは、いくつかの機能がまだ完了しておらず、積極的に開発が進められていることを意味します。

しかし、現時点では、プラグインの中核部分は完全に機能しています。bbmodel
ファイルの変換、リソースパックの生成、ゲーム内でのエンティティのスポーン、およびそれらのアニメーションの管理はすべて動作します。完璧ではないかもしれませんが。

https://www.patreon.com/magmaguy で開発を支援することを検討してください！

エクスポートされたリソースパックの内容は、CC0 ライセンスに基づいてライセンスされており、権利は留保されていません。制限や帰属の必要なく、あらゆる目的で使用、配布、変更することができます。

# このプラグインの使い方

## FreeMinecraftModels (FMM) は Minecraft サーバー管理者にとって何ができますか？

FMM は以下を実行できます。

- .bbmodel または fmmodel (FFM のカスタム形式) モデルをインポートします
- 通常の Minecraft リソースパックのモデル制限を超えるモデルを使用したリソースパックを生成します (最大 ~~112x112x112~~
  106x106x106 ユニットまたはゲーム内ブロックで 7x7x7)
- コマンド `/fmm spawn static <id>` を使用して、これらのモデルをゲーム内に表示します。ここで、id
  はモデルのファイル名であり、小文字で、ファイル拡張子なしで指定します
- Blockbench でアニメーション化するように設定されたこれらのモデルをアニメーション化します
- 他のプラグインを必要とせずに、デフォルト状態のアニメーション (歩行、アイドル、死亡、攻撃、スポーン) を処理します

### 既存のモデルを追加するにはどうすればよいですか？

モデルをインポートするには、.bbmodel を imports フォルダーにドラッグし、`/fmm reload` を実行します。これにより、`models` フォルダーに .fmmodel ファイルが生成され、`outputs` フォルダーのリソースパックにモデルが追加されます。

***モデルを正しく表示するには、そのリソースパックを使用する必要があります！***
これは通常のリソースパックなので、リソースパックフォルダーに入れるだけです。Minecraft サーバーには、Google
ドライブなどのサードパーティサービスや、https://resourcepack.host/
などの専門サービスでリソースパックをホストする方法があります。最後のウェブサイトが最も簡単な方法かもしれません。

### ゲーム内でモデルを表示するにはどうすればよいですか？

モデルには 2 つの (計画中の) カテゴリがあります。

- `Static` モデルは、(アニメーションは可能ですが) 動かないモデルであり、装飾のような役割を果たします。電柱やクリスマスツリーのようなものを考えてください。
- `Dynamic` モデルは、Minecraft のモブのように動作するモデルであり、動き回り、モブに関連するさまざまな動作を行います。カスタムボスモデルや、Minecraft
  に完全に新しいエンティティタイプを追加するようなものを考えてください。

#### ゲーム内で静的モデルを表示する

ゲーム内で静的モデルを表示するには、コマンド `/fmm spawn static <id>` を使用します。ここで、id
はモデルのファイル名であり、小文字で、ファイル拡張子なしで指定します。

#### ゲーム内で動的モデルを表示する

ゲーム内で動的モデルを表示するには、コマンド `/fmm spawn dynamic <id>` を使用します。ここで、id
はモデルのファイル名であり、小文字で、ファイル拡張子なしで指定します。

## FreeMinecraftModels (FMM) はモデラーにとって何ができますか？

FMM は、リソースパックの生成に関する標準リソースパックのルールに従います。さらに、プラグイン全体でモデル作成を標準化するために、ModelEngine
と互換性のあるモデルと可能な限り互換性があるように努めています。

### モデル生成機能/制限

ModelEngine 用のモデルを作成したことがある場合は、Minecraft リソースパックの生成に関する多くの制限に精通していることでしょう。

#### **キューブ:**

キューブは Blockbench の場合と同じで、モデルを構成するキューブです。

- キューブは最大 ~~112x112x112~~ 106x106x106 "ピクセル" (Blockbench ユニット) またはゲーム内ブロックで 7x7x7
  まで可能です (表示サイズを使用してバイパスされた通常の Minecraft 制限、1.19.4
  以降のディスプレイエンティティのおかげでさらにバイパスされる予定です)
- キューブの法的な回転は、0、22.5、-22.5、45、および -45 です。他の回転は機能しません。
- キューブは 1 つの軸でのみ回転します。つまり、[22.5, 0, 0] の回転は問題ありませんが、[22.5, 0, 45] の回転は完全に機能せず、1 つの軸でのみ回転します。

#### **ボーン:**

ボーンは、Blockbench が「グループ」と呼ぶものです。これらはキューブをグループ化するのに役立ち、animationsBlueprint
のためにボーンをグループ化するために使用する必要があります。

- ボーンは最大 ~~112x112x112~~ 106x106x106 (これがなぜかわかりませんが、112 である必要があります) "ピクセル" (Blockbench
  ユニット) またはゲーム内ブロックで 7x7x7 まで可能です。*ボーンのサイズはそれらが持っているもので設定されるため、7
  ブロック以上離れたキューブがある場合は、このサイズ制限を超える可能性があることに注意してください。この制限をバイパスするには、最初の
  boneBlueprint に含まれていない別の boneBlueprint にブロックを配置するだけです!*
- 任意の回転をすることができます！

ボーンはキューブよりもはるかに柔軟ですが、できるだけ少ないボーンを使用する必要があります。FMM では、Minecraft の制限により、各
boneBlueprint
は異なるエンティティです。規模によっては、これはパフォーマンスにすぐに影響を与えます！常にできるだけ少ないボーンを使用し、スポーンする予定のモデルの数を考慮してください。多く計画するほど、ボーンは少なくする必要があります。

#### **仮想ボーン**

ModelEngine から移行する場合、FMM で仮想ボーンが実装されているかどうか/方法を知りたいでしょう。仮想ボーンは予定されていますが、非常に基本的な基礎作業以外には現在実装されていません。

ただし、少なくとも、次の仮想ボーンはすぐに FMM と互換性があります。

- ヒットボックス/目の高さ: 境界を定義する cubeBlueprint を持つ "hitbox" という名前の boneBlueprint で、同じ x および z
  値 (同じでない場合は、最大の値が選択されます) は、ヒットボックスを定義します。目の高さは、ヒットボックスの boneBlueprint
  のピボットポイントに設定されます。
- 名前タグ: 名前が "tag_" で始まる boneBlueprint。正直なところ、他のものにタグを使用するために、「tag_name」を使用してモード固有にしたいと思いますが、これは後で真剣に検討します。

他の仮想 boneBlueprint 機能は、すぐに実装される保証はありません。

## リソースパックのマージ

FMM を使用している間は、リソースパックをマージする必要があるでしょう。

リソースパックを手動でマージできますが、[merge.elmakers](https://merge.elmakers.com/)
などのオンラインツールを使用してリソースパックをマージすることをお勧めします。

#### **より安全で簡単、編集不可能なファイル配布**

FMM が取り組もうとしていることの 1
つは、ユーザーが取得したモデルを、モデルクリエイターが編集を望まなかった方法で編集するために再利用することです。具体的には、モデルをリスキンしたり、わずかに変更したりして、オリジナルの作品として再販しようとする可能性を排除するためです。

そのために、FMM は `.fmmodel` ファイル形式を使用します。これは、プラグインで使用できますが、Blockbench
で編集できないように、`.bbmodel` ファイルを削除することを目的としています。

モデラーとして、編集不可能な `.fmmodel` ファイル、編集可能な `.bbmodel` ファイルをリリースするか、2
つのファイルで異なる価格設定または配布サービス規約を行うかを選択できるようになりました。

`.fmmodel` の生成は、`.bbmodel` を `~/plugins/FreeMinecraftModels/imports` フォルダーに入れて、`/fmm reload`
でプラグインをリロードするか、サーバーを再起動するだけです。`.fmmodel` は `~/plugins/FreeMinecraftModels/models`
フォルダーにあります。

## FreeMinecraftModels (FMM) は、プラグインに統合したい開発者にとって何ができますか？

FMM には Maven リポジトリがあります！
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

*注: FreeMinecraftModels は API
として使用することを目的としており、サーバーへのプラグインのインストールが必要です。プラグインにシェードしないでください！*

FMM は、API として可能な限り簡単に使用できるようにすることを目的としています。

現在、プラグインの API として FMM を使用したい場合に知っておく必要があるクラスは 1 つだけであり、それは `StaticEntity` です。

静的モデルを処理するためのスニペットを次に示します。

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //モデルを作成します
    public FreeMinecraftModelsModel(String id, Location location) {
        //これにより、エンティティがスポーンします！
        staticEntity = StaticEntity.create(id, location);
        //これにより、エンティティが正しくスポーンしたかどうかが確認されます
        if (staticEntity == null) Logger.warningMessage("FMM failed to find a model named " + id + " !");
    }

    public void remove() {
        //これにより、エンティティが削除されます
        staticEntity.remove();
    }
}
```

静的モデルは、その場所に留まり、固定された場所で装飾的な要素として機能することを目的としていることに注意してください (
アニメーションはここでの「移動」にはカウントされません)。移動させることは可能ですが、その目的であれば、代わりに動的モデルを使用することを検討してください。

そして、これが私のカスタムボスプラグインである EliteMobs が動的エンティティを使用する方法です。

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

動的モデルは、生存エンティティの上に構築されており、上記の例のように create メソッドを使用するか、動的エンティティで spawn
メソッドを実行するときに提供できます。

現在、正式な API リソースはありませんが、API での使用を目的としたすべての要素は、ModeledEntity (
すべてのエンティティの基本クラス)、StaticEntity、DynamicEntity、および ModeledEntityManager 内に含まれています。開発者の 99%
は、これら 3 つのクラスに分散された必要なすべてのメソッドを見つける必要があります。

# 開発者として FreeMinecraftModels (FMM) プロジェクトに貢献する

FMM は GPLV3 ライセンスに基づいて配布されており、コードの貢献を歓迎します。基本的な貢献ガイドラインを次に示します。

- 既存の命名規則に従い、既存の詳細度を維持し、貢献内容が理解しやすいように十分なドキュメントを追加してください
- プラグインのスコープに関連する貢献を維持してください。関連性があるかどうかわからない場合は、事前に質問してください
- コードのパフォーマンスへの影響に注意してください。貢献が最適化されていないか、パフォーマンスへの影響が大きすぎる場合は、受け入れられない場合があります。

## 一般的なプラグインの概要

時間を節約するために、FMM のロジックフローの簡単な内訳を次に示します。

1) `imports` フォルダーを読み取ります
2) `imports` フォルダーから `models` フォルダーにファイルを移動します。ファイルが `.bbmodel`
   の場合、モデルフォルダーで `.fmmodel` に変換されます。
3) `models` フォルダー内のファイルを読み取ります。
4) すべてのモデル構造を解釈し、`Skeleton` を作成します。これには、`Bone`
   のグループが含まれており、これらのボーンには子 `Bone` と `Cube` のグループが含まれています。`Cube` と `Bone`
   は、それぞれが関連付けられている JSON リソースパックデータを生成します。つまり、`Cube` はキューブに固有の JSON
   を生成し、`Bone` はアウトラインと個々の boneBlueprint ファイルを生成します。1 つの boneBlueprint は、1
   つのリソースパックファイルを生成することに注意してください。モデルは、生成されるとリストに追加されます。
5) `Skeleton` で、モデル内のすべての `Animations` を (存在する場合) 解釈します
6) すべてのデータが初期化され、リソースパックが `outputs` フォルダーに生成され、プラグインを使用する準備ができました。

## このプラグインで使用されているトリック:

ここで使用されているトリックは、かなり確立されており標準化されていますが、それでもリストします。直観に反する可能性があるためです。

これらのトリックはすべて、ユーザーとモデルメーカーには完全に不可視であることに注意してください。制限と回避策は、FMM が
Minecraft のさまざまな制限を回避する方法を理解するのに役立つようにのみリストされています。

- すべてのモデルは 4 倍に拡大され、モデルの理論上の最大サイズを拡張するために、サイズとピボットポイントがコードで再調整されます。
- リソースパックモデルはサイズが -16 から +32 までしかモデルを配置できないため、モデルはバックグラウンドでシフトされます。これはプレイヤーには完全に不可視です。
- コードを通じて影響を受ける可能性のある色相を持つモデル (つまり、ダメージ表示用)
  を作成するために、革の馬の鎧が使用されます。正しい色を表示するには、馬の鎧を白に設定する必要があります。
- Blockbench はテクスチャに特定の ID システムを使用しますが、実際にはテクスチャを構成から順番に読み取ります。ID
  は、Blockbench が行う方法に従って、テクスチャリスト内の位置に基づいてここに割り当てられます。
- Minecraft の制限により、各 boneBlueprint は異なるアーマースタンドエンティティです。
- 革の馬の鎧は、アーマースタンドの頭のスロットにあります
- デフォルトの静的アイテムには、アーマースタンドが使用されます。//todo: まもなく、MC 1.19.4+
  からの新しい代替表示システムを実装する必要があります。これははるかに効率的です。
- 革の馬の鎧を修正する他のプラグインとの競合を回避するために、FMM は 50,000 から始まるカスタムモデルデータ値を使用します。

# 一般的に FreeMinecraftModels (FMM) プロジェクトに貢献する

FMM は、[https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)
の素敵な人々によってクラウドファンディングされています。すべての貢献は、想像以上に役立ちます ;)

# 現在計画中の機能:

- Bedrock クライアントの RSP 生成。
- Geyser 統合によるサーバープロパティに依存しない RSP 管理。
- カスタムエンティティ (？)。
- 発射体を撃つことができるメタボーンとしての tag_projectile (モデルごとに複数持つことができる)。

# 現在修正が必要な奇妙な制限:

- boneBlueprint のピボットポイント (原点) が 67 以上に設定されている場合、モデルが浮遊し始めます。
