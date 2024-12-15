# ***始める前に！***

FreeMinecraftModels (FMM) は現在**アルファ**版です！これは、いくつかの機能がまだ完成しておらず、積極的に開発中であることを意味します。

しかし、現時点では、プラグインのコア機能は完全に機能しています。bbmodel ファイルの変換、リソースパックの生成、ゲーム内でのエンティティのスポーン、およびアニメーションの管理は、すべて機能しています。ただし、100％洗練されているとは限りません。

https://www.patreon.com/magmaguy での開発を支援することを検討してください！

エクスポートされたリソースパックの内容は、CC0ライセンスの下でライセンスされており、すべての権利は留保されていません。制限や帰属の必要なしに、あらゆる目的で自由に使用、配布、変更できます。

# このプラグインの使い方

## FreeMinecraftModels (FMM) はMinecraftサーバー管理者にとって何ができるのか？

次のことができます。

- .bbmodel または fmmodel (FMMのカスタム形式) モデルをインポートする
- 通常の Minecraft リソースパックのモデル制限を超えるモデル (~~112x112x112~~ 106x106x106 ユニットまたはゲーム内ブロック 7x7x7 まで) を含むリソースパックを生成する
- コマンド `/fmm spawn static <id>` を使用して、これらのモデルをゲーム内に表示する。ここで、id はモデルのファイル名であり、小文字でファイル拡張子はありません。
- Blockbench で構成されたとおりにこれらのモデルをアニメーション化する
- 他のプラグインを必要とせずに、デフォルトの状態アニメーション (歩行、アイドル、死亡、攻撃、スポーン) を処理する

### 既存のモデルを追加するにはどうすればよいですか？

モデルをインポートするには、.bbmodel を imports フォルダーにドラッグし、`/fmm reload` を実行します。これにより、`models` フォルダーに .fmmodel ファイルが生成され、`outputs` フォルダーのリソースパックにモデルが追加されます。

***モデルを正しく表示するには、そのリソースパックを使用する必要があります！*** これは通常のリソースパックなので、リソースパックフォルダーに入れるだけで済みます。Minecraft サーバーには、Google ドライブなどのサードパーティサービスや、https://resourcepack.host/ などの専門サービスでリソースパックをホストする方法があります。最後のウェブサイトが最も簡単な方法かもしれません。

### ゲーム内でモデルを表示するにはどうすればよいですか？

モデルには 2 つの (計画された) カテゴリがあります。

- `Static` モデルは、動きのない (ただしアニメーションを持つことができる) モデルであり、装飾品のように機能します。例えば、街灯柱やクリスマスツリーなどを考えてください。
- `Dynamic` モデルは、Minecraft のモブのように動作するモデルです。つまり、動き回ってモブに関連するさまざまな動作を行います。例えば、カスタムボスのモデルや、完全に新しいエンティティタイプを Minecraft に追加することを考えてください。

#### ゲーム内で静的なモデルを表示する

ゲーム内で静的なモデルを表示するには、コマンド `/fmm spawn static <id>` を使用します。ここで、id はモデルのファイル名であり、小文字でファイル拡張子はありません。

#### ゲーム内で動的なモデルを表示する

ゲーム内で動的なモデルを表示するには、コマンド `/fmm spawn dynamic <id>` を使用します。ここで、id はモデルのファイル名であり、小文字でファイル拡張子はありません。

## FreeMinecraftModels (FMM) はモデラーにとって何ができるのか？

FMM は、リソースパックの生成に関する標準のリソースパック規則に従います。さらに、ModelEngine と互換性のあるモデルとできるだけ互換性を持たせ、プラグイン全体のモデル作成を標準化しようとしています。

### モデル生成機能/制限

ModelEngine 用のモデルを作成したことがある場合、Minecraft リソースパックの生成に関する多くの制限に精通しているでしょう。

#### **キューブ:**

キューブは Blockbench と同じで、モデルを構成するキューブです。

- キューブは最大 ~~112x112x112~~ 106x106x106 "ピクセル" (Blockbench 単位) またはゲーム内ブロック 7x7x7 まで可能です (表示サイズを使用して通常の Minecraft の制限をバイパスし、1.19.4 以降では表示エンティティのおかげでさらにバイパスされます)
- キューブの有効な回転は 0、22.5、-22.5、45、および -45 です。他の回転は機能しません。
- キューブは 1 つの軸でのみ回転します。つまり、[22.5, 0, 0] の回転は問題ありませんが、[22.5, 0, 45] の回転は完全に機能せず、1 つの軸でのみ回転します。

#### **ボーン:**

ボーンは Blockbench で「グループ」と呼ばれるものです。キューブをグループ化するために使用され、アニメーションBlueprintのためにボーンをグループ化するために使用する必要があります。

- ボーンは最大 ~~112x112x112~~ 106x106x106 (これが 112 であるべき理由は不明) "ピクセル" (Blockbench 単位) またはゲーム内ブロック 7x7x7 まで可能です。*ボーンのサイズは含まれているもので設定されるため、7 ブロック以上離れたキューブがある場合は、このサイズ制限を超える可能性があります。この制限のバイパスは、最初のボーンBlueprintに含まれていない別のボーンBlueprintにブロックを配置するのと同じくらい簡単です!*
- 任意の回転を持つことができます！

ボーンはキューブよりもはるかに柔軟性がありますが、できるだけ少ないボーンを使用する必要があります！ FMM では、Minecraft の制限により、各ボーンBlueprintは異なるエンティティです。規模によっては、パフォーマンスにすぐに影響を与えます！常にできるだけ少ないボーンを使用し、スポーンする予定のモデルの数を考慮してください。計画している数が多いほど、ボーンは少なくする必要があります。

#### **仮想ボーン**

ModelEngine から来ている場合は、仮想ボーンが FMM で実装されているかどうか、またはどのように実装されているかを知りたいでしょう。仮想ボーンは指定されていますが、現在のところ非常に基本的な基礎以上には実装されていません。

ただし、少なくとも、次の仮想ボーンは間もなく FMM と互換性を持つようになります。

- ヒットボックス/目の高さ: 境界を定義し、同じ x および z 値を持つキューブBlueprintを持つ "hitbox" という名前のボーンBlueprint (同じでない場合は最大の値が選択されます) がヒットボックスを定義します。目の高さは、ヒットボックスのボーンBlueprintのピボットポイントに設定されます。
- ネームタグ: 名前が "tag_" で始まるボーンBlueprint。正直なところ、ここでモード固有にしたいと考えており、他のことにタグを使用するために "tag_name" にしたいと思います。しかし、これは後で真剣に検討されます。

他の仮想ボーンBlueprint機能が近い将来に追加される保証はありません。

## リソースパックのマージ

FMM を使用している間は、リソースパックをマージする必要があるでしょう。

リソースパックを手動でマージすることもできますが、[merge.elmakers](https://merge.elmakers.com/) などのオンラインツールを使用してリソースパックをマージすることをお勧めします。

#### **より安全で、より簡単で、編集できないファイル配布**

FMM が取り組もうとしていることの 1 つは、ユーザーが取得したモデルを、モデル作成者が編集を望まなかった方法で編集するために再利用することです。特に、モデルをリスキンしたり、わずかに変更したりして、オリジナル作品として再販しようとする可能性があります。

そのため、FMM では `.fmmodel` ファイル形式を使用しており、`.bbmodel` ファイルをプラグインで使用できる程度まで削減することを目的としていますが、Blockbench で編集することはできません。

モデラーとして、編集できない `.fmmodel` ファイル、編集可能な `.bbmodel` ファイルをリリースするか、2 つの差額価格や配布利用規約を設定するかを選択できるようになりました。

`.fmmodel` の生成は、`.bbmodel` を `~/plugins/FreeMinecraftModels/imports` フォルダーに入れて、`/fmm reload` でプラグインをリロードするか、サーバーを再起動するだけで簡単です。`.fmmodel` は `~/plugins/FreeMinecraftModels/models` フォルダーに置かれます。

## FreeMinecraftModels (FMM) は、プラグインに統合したい開発者にとって何ができるのか？

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

*FreeMinecraftModels は API として使用することを目的としており、サーバーにプラグインをインストールする必要があります。プラグインにシェーディングしないでください!*

FMM は、API としてできるだけ簡単に使用できるようにすることを目指しています。

現時点では、プラグインの API として FMM を使用したい場合に知っておく必要があるクラスは 1 つだけであり、それは `StaticEntity` です。

静的なモデルを処理するためのスニペットを次に示します。

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //モデルの作成
    public FreeMinecraftModelsModel(String id, Location location) {
        //これによりエンティティがスポーンします!
        staticEntity = StaticEntity.create(id, location);
        //これによりエンティティが正しくスポーンしたかどうかがチェックされます
        if (staticEntity == null) Logger.warningMessage("FMM は " + id + " という名前のモデルを見つけることができませんでした!");
    }

    public void remove() {
        //これによりエンティティが削除されます
        staticEntity.remove();
    }
}
```

静的なモデルは、所定の位置にとどまり、固定された場所の装飾要素として機能することを目的としています (アニメーションは、ここでの「移動」とは見なされません)。それらを移動することは可能ですが、それが目的である場合は、代わりに動的なモデルを使用することを検討してください。

そして、これが私のカスタムボスプラグインである EliteMobs が動的なエンティティを使用する方法です。

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

動的なモデルは、リビングエンティティの上に構築されています。これは、上記の例のように create メソッドを使用するとき、または動的なエンティティで spawn メソッドを実行するときに提供できます。

現時点では正式な API リソースはありませんが、API で使用することを目的としたすべての要素は、ModeledEntity (すべてのエンティティの基本クラス)、StaticEntity、DynamicEntity、および ModeledEntityManager 内に含まれています。開発者の 99% は、これら 3 つのクラス全体に分散されている必要なすべてのメソッドを見つける必要があります。

# 開発者として FreeMinecraftModels (FMM) プロジェクトに貢献する

FMM は GPLV3 ライセンスの下で配布されており、コードの貢献を歓迎します。基本的な貢献ガイドラインを次に示します。

- 既存の命名規則に従い、既存の冗長性を維持し、貢献を理解しやすいように十分なドキュメントを追加してください
- プラグインの範囲に関連する貢献を維持してください。関連するかどうかわからない場合は、事前に遠慮なく質問してください。
- コードのパフォーマンスへの影響を考慮してください。最適化されていないか、パフォーマンスへの影響が大きすぎる場合、一部の貢献は拒否される可能性があります。

## プラグインの一般的な概要

時間を節約するために、FMM のロジックフローの簡単な内訳を次に示します。

1) `imports` フォルダーを読み取る
2) `imports` フォルダーから `models` フォルダーにファイルを移動します。ファイルが `.bbmodel` の場合、models フォルダーで `.fmmodel` に変換されます。
3) `models` フォルダー内のファイルを読み取る。
4) すべてのモデル構造を解釈し、`Bone` のグループを含む `Skeleton` を作成します。これらのボーンには、子 `Bone` と `Cube` のグループが含まれます。`Cube` と `Bone` は、それぞれが関連付けられている JSON リソースパックデータを生成します。これは、`Cube` がキューブに固有の JSON を生成し、`Bone` がアウトラインと個々のボーンBlueprintファイルを生成することを意味します。1 つのボーンBlueprintが 1 つのリソースパックファイルになることに注意してください。モデルは、生成されるとリストに追加されます。
5) まだ `Skeleton` で、モデル内のすべての `Animations` を解釈します (存在する場合)。
6) すべてのデータが初期化され、リソースパックが `outputs` フォルダーに生成され、プラグインを使用する準備が整いました。

## このプラグインで使用されるトリック:

ここで使用されているトリックは、かなり確立されており標準化されていますが、反直観的である可能性があるため、それでもリストされます。

これらのトリックはすべて、ユーザーやモデル作成者には完全に目に見えないことに注意してください。制限と回避策は、FMM がさまざまな Minecraft の制限をどのようにバイパスするかを理解するのに役立つようにのみリストされています。

- すべてのモデルは 4 倍に拡大され、モデルの理論上の最大サイズを拡張するために、サイズとピボットポイントがコードで再調整されます。
- リソースパックモデルのサイズは -16 から +32 までしかできないため、モデルはバックグラウンドでシフトされます。これはプレイヤーには完全に目に見えません。
- コードを通して影響を受ける可能性のある色相でモデルを作成するために、革製の馬の鎧が使用されます (つまり、損傷の表示)。馬の鎧は、正しい色を表示するために白に設定する必要があります！
- Blockbench はテクスチャに特定の ID システムを使用していますが、実際には構成からテクスチャを順番に読み取ります。ID は、Blockbench が行う方法に従って、テクスチャのリスト内の位置に基づいてここで割り当てられます。
- Minecraft の制限により、各ボーンBlueprintは異なる防具立てエンティティです。
- 革製の馬の鎧は、防具立ての頭のスロットにあります
- 防具立ては、デフォルトの静的なアイテムに使用されます。//todo: 近いうちに MC 1.19.4+ の新しい代替表示システムを実装する必要があるでしょう。これははるかに効率的です。
- 革製の馬の鎧を修正する他のプラグインとの競合を避けるため、FMM は 50,000 から始まるカスタムモデルデータ値を使用します。

# FreeMinecraftModels (FMM) プロジェクトへの一般的な貢献

FMM は、[https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy) の素敵な人々によってクラウドファンディングされています！すべての貢献はあなたが想像する以上に役立ちます ;)

# 現在計画中の機能:
- Bedrock クライアント RSP 生成。
- Geyser 統合によるサーバープロパティに依存しない RSP 管理。
- カスタムエンティティ (?)。
- 発射物を発射できるメタボーンとしての tag_projectile (1 モデルあたり複数持つことができます)。

# 現在修正が必要な奇妙な制限事項:
- ボーンBlueprintのピボットポイント (原点) が 67 以上に設定されていると、モデルが浮遊し始めます。
