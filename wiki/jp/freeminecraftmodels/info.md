日本語に翻訳します。Markdownの書式は維持します。

# ***始める前に！***

FreeMinecraftModels (FMM) は現在、**活発に開発中**です！これは、一部の機能がまだ完成しておらず、積極的に作業が進められていることを意味します。

しかし、現時点では、プラグインのコア機能は完全に動作しています - bbmodelファイルの変換、リソースパックの生成、ゲーム内でのエンティティのスポーンとそのアニメーション管理、永続的な小道具を配置する機能は、ほとんどすべて動作しています。

開発をサポートしたい方は、https://www.patreon.com/magmaguy をご覧ください！

エクスポートされたリソースパックの内容は、FreeMinecraftModels側ではCC0ライセンスの下で提供されており、いかなる権利も留保されません。
あなたは、制限なく、または帰属表示の必要なく、あらゆる目的で自由に使用、配布、改変することができます。

# このプラグインの使用方法

## FreeMinecraftModels (FMM) はMinecraftサーバー管理者にとって何ができますか？

以下のことができます：

- .bbmodel または .fmmodel (FMM独自の形式) モデルをインポートする
- 通常のMinecraftリソースパックのモデル制限を超えるモデル（最大112x112x112ユニット、またはゲーム内7x7x7ブロック。複数のボーンを使用する場合は実質無制限）を含むリソースパックを生成する
- これらのモデルをゲーム内に表示し、Bedrockクライアントには特定のBedrock互換パケットを送信しつつ、1.19.4以降のJavaクライアントにはDisplay Entitiesを送信する
- Blockbenchで設定された通りにこれらのモデルをアニメーションさせる
- 他のプラグインを必要とせずにデフォルト状態のアニメーション（歩行、待機、死亡、攻撃、スポーン）を処理する
- 基となるエンティティと共に回転し、異なるX軸とZ軸を持つヒットボックスを処理する
- 3種類のモデルを管理する：静的、動的、小道具
    - 小道具は永続的であり、サーバーが再起動しても維持されるようにワールドに配置でき、小道具を含むマップを他のサーバーに配布することも可能です。
    - 動的モデルは、機能するために基となるリビングエンティティが必要なモデル用で、カスタムボスプラグインやペットプラグインでの使用に最適です。
    - 静的モデルは、動き回るべきではない非永続的なモデル用で、基本的に一時的な装飾やエフェクトとして使用されます。

### 既存のモデルを追加するにはどうすればよいですか？

モデルをインポートするには、.bbmodelファイルを`imports`フォルダにドラッグし、`/fmm reload`を実行するだけです。これにより、`models`フォルダに.fmmodelファイルが生成され、`outputs`フォルダのリソースパックにモデルが追加されます。

***モデルを正しく表示するには、そのリソースパックを使用する必要があります！*** これは通常のリソースパックなので、リソースパックフォルダに入れるだけで済みます。Minecraftサーバーにはリソースパックをホストする方法があります。私のプラグイン、[ResourcePackManager](https://www.spigotmc.org/resources/resource-pack-manager.118574/)を使用することをお勧めします。これはファイルを自動的に取得してリモートでホストし、他のプラグインのファイルとマージすることも可能です。

### ゲーム内でモデルを表示するにはどうすればよいですか？

FreeMinecraftModelsは小道具（基本的にワールドに配置できるカスタムモデル）を表示するためのスタンドアロンプラグインとして使用できますが、このプラグインは通常、[EliteMobs](https://www.spigotmc.org/resources/elitemobs.40090/)のようなプラグインと組み合わせて使用すると最も効果的です。EliteMobsでは、モデルが具体的な目的、この場合はボス戦に積極的に使用されます。

モデルには静的、動的、小道具の3種類があります。
- 小道具は永続的であり、サーバーが再起動しても維持されるようにワールドに配置でき、小道具を含むマップを他のサーバーに配布することも可能です。
- 動的モデルは、機能するために基となるリビングエンティティが必要なモデル用で、カスタムボスプラグインやペットプラグインでの使用に最適です。
- 静的モデルは、動き回るべきではない非永続的なモデル用で、基本的に一時的な装飾やエフェクトとして使用されます。

#### ゲーム内での静的モデルの表示

ゲーム内で静的モデルを表示するには、`/fmm spawn static <id>`コマンドを使用します。ここでidはモデルのファイル名（小文字、拡張子なし）です。

#### ゲーム内での動的モデルの表示

ゲーム内で動的モデルを表示するには、`/fmm spawn dynamic <id>`コマンドを使用します。ここでidはモデルのファイル名（小文字、拡張子なし）です。

#### ゲーム内での小道具の表示

ゲーム内で小道具を表示するには、`/fmm spawn prop <id>`コマンドを使用します。ここでidはモデルのファイル名（小文字、拡張子なし）です。

## FreeMinecraftModels (FMM) はモデラーにとって何ができますか？

FMMは、リソースパック生成のための標準的なリソースパックルールに従います。さらに、プラグイン間でモデル作成を標準化するために、ModelEngine互換モデルとの互換性を可能な限り高めようとしています。

### モデル生成の機能 / 制限

ModelEngine用のモデルを作成したことがある方なら、Minecraftリソースパック生成の多くの制限に馴染みがあるでしょう：

#### **キューブ:**

キューブはBlockbenchと同じで、モデルを構成するキューブです。

- キューブは最大112x112x112「ピクセル」（Blockbench単位）、またはゲーム内7x7x7ブロックまで可能です（Display Sizesを使用して通常のMinecraftの制限をバイパスしており、1.19.4以降ではDisplay Entitiesのおかげでさらにバイパスされる予定です）。
- キューブの有効な回転は0、22.5、-22.5、45、-45です。他の回転は機能しません。
- キューブは1つの軸でのみ回転します。つまり、[22.5, 0, 0]の回転は問題ありませんが、[22.5, 0, 45]の回転は完全には機能せず、1つの軸でのみ回転します。

#### **ボーン:**

ボーンはBlockbenchでいう「グループ」です。これらはキューブをグループ化するために使用され、アニメーションのためにボーンをグループ化するために使用されるべきです。

- ボーンは最大112x112x112「ピクセル」（Blockbench単位）、またはゲーム内7x7x7ブロックまで可能です。*ボーンのサイズは含まれるものによって設定されるため、7ブロック以上離れたキューブがある場合、このサイズ制限を超える可能性が高いことに注意してください。この制限をバイパスするのは、最初のボーンに含まれていない別のボーンにブロックを配置するのと同じくらい簡単です！*
- 任意の回転が可能です！ただし、90、-90、180、-180のデフォルト回転は予期しない動作を引き起こす可能性があるため、避けることをお勧めします。これはアニメーションにはあまり適用されず、ボーンのデフォルトの静止位置にのみ適用されることに注意してください。

ボーンはキューブよりもはるかに柔軟ですが、可能な限り少ないボーンを使用する必要があります！FMMでは、Minecraftの制限により、各ボーンが異なるエンティティになります。大規模になると、これはパフォーマンスにかなり早く影響します！常に可能な限り少ないボーンを使用し、そのモデルをいくつスポーンする予定があるかを考慮してください - スポーンする予定が多いほど、ボーンは少なくすべきです！

#### **仮想ボーン**

仮想ボーンは、特定の目的のために使用される特定のメタデータ、通常は特定の名前を持つボーンに対するModel Engineの用語です。

FreeMinecraftModelsでは、以下の仮想ボーンが実装されています：

- ヒットボックス / 目の高さ：「hitbox」という名前のボーンで、境界を定義するキューブを持ち、同じx値とz値（同じでない場合は大きい方の値が選択されます）を持つものがヒットボックスを定義します。目の高さは、ヒットボックスのボーンのピボットポイントに設定されます。
- ネームタグ：「tag_」で始まる名前のボーン。正直なところ、ここではもっと具体的に「tag_name」として他の目的にもタグを使用できるようにしたいのですが、それは後で真剣に検討されます。
- 頭：「h_」で始まる名前のボーン。これはモデルの頭を定義するために使用される仮想ボーンで、基となるエンティティの頭の回転に基づいて回転します。

#### **より安全で、より簡単に、編集不可能なファイルの配布**

FMMが取り組もうとしていることの一つは、モデル作成者が望まない方法でモデルを編集するために、ユーザーが取得したモデルを再利用すること、特にリスキンやその他のわずかな変更を加えて、オリジナルの作品として再販しようとする可能性です。

そのために、FMMは`.fmmodel`ファイル形式を使用しており、`.bbmodel`ファイルをプラグインで使用できるがBlockbenchで編集できない状態にまで削減することを目指しています。

モデラーとして、編集不可能な`.fmmodel`ファイルをリリースするか、編集可能な`.bbmodel`ファイルをリリースするか、あるいは両者に対して異なる価格設定や配布条件を設定するかを選択できるようになりました。

`.fmmodel`を生成するのは、`.bbmodel`を`~/plugins/FreeMinecraftModels/imports`フォルダに入れ、`/fmm reload`でプラグインをリロードするか、サーバーを再起動するのと同じくらい簡単です。`.fmmodel`は`~/plugins/FreeMinecraftModels/models`フォルダに生成されます。

## FreeMinecraftModels (FMM) は、プラグインに統合したい開発者にとって何ができますか？

FMMにはMavenリポジトリがあります！
Maven:

```xml
<repository>
    <id>magmaguy-repo-releases</id>
    <name>MagmaGuy's Repository</name>
    <url>https://repo.magmaguy.com/releases</url>
</repository>

<dependency>
    <groupId>com.magmaguy</groupId>
    <artifactId>FreeMinecraftModels</artifactId>
    <version>LATEST.VERSION.HERE</version>
</dependency>
```

Gradle:

```kotlin
maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
}

compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: 'LATEST.VERSION.HERE'
```

*注意：FreeMinecraftModelsはAPIとして使用されることを意図しており、サーバーへのプラグインのインストールが必要です。プラグインにシェードしないでください！*

## APIの使用方法

FMMは、APIとして可能な限り使いやすいことを目指しています。

現在、FreeMinecraftModelsをAPIとして使用してカスタムモデルを使用したい場合、知っておく必要があるクラスは4つだけです：

- `ModeledEntity` - すべてのエンティティの基底クラス
- `StaticEntity` - 非永続的な静的モデルを使用したい場合
- `DynamicEntity` - 別のリビングエンティティをモデルで偽装したい場合
- `PropEntity` - サーバーが再起動しても維持されるモデルをワールドに配置したい場合

静的モデルを扱うためのスニペットを以下に示します：

```java
import org.bukkit.Bukkit;
import org.bukkit.Location; // Locationクラスをインポート

public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    // モデルを作成する
    public FreeMinecraftModelsModel(String id, Location location) {
        // これがエンティティをスポーンします！
        staticEntity = StaticEntity.create(id, location);
        // エンティティが正しくスポーンされたかを確認します
        if (staticEntity == null) Bukkit.getLogger().warning(("FMM failed to find a model named " + id + " !"));
    }

    public void remove() {
        // これがエンティティを削除します
        staticEntity.remove();
    }
}
```

静的モデルは、定位置に留まり、固定された場所での装飾要素として機能することを意図していることに留意してください（アニメーションはここでは「動き」とはみなされません）。移動させることは可能ですが、それが目的であれば、代わりに動的モデルを使用することを検討してください。

そして、私のカスタムボスプラグインであるEliteMobsが動的エンティティをどのように使用しているかを以下に示します：

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import api.com.magmaguy.freeminecraftmodels.ModeledEntityManager;
import customentity.com.magmaguy.freeminecraftmodels.DynamicEntity;
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

動的モデルはリビングエンティティの上に構築されており、上記の例のようにcreateメソッドを使用するか、Dynamicエンティティでspawnメソッドを実行する際に提供できます。

# 開発者としてFreeMinecraftModels (FMM) プロジェクトに貢献する

FMMはGPLV3ライセンスの下で配布されており、コード貢献を歓迎します。基本的な貢献ガイドラインは以下の通りです：

- 既存の命名規則に従い、既存の詳細度を維持し、貢献が理解しやすいように十分なドキュメントを追加してください。
- 貢献はプラグインの範囲に関連するものにしてください。関連するかどうかわからない場合は、事前に遠慮なく質問してください。
- コードのパフォーマンスへの影響に注意してください。一部の貢献は、最適化が不十分であるか、またはパフォーマンスに大きすぎる影響を与える場合、却下される可能性があります。

## プラグインの一般的な概要

時間を節約するために、FMMのロジックフローの簡単な内訳を以下に示します：

1) `imports`フォルダを読み込む
2) `imports`フォルダから`models`フォルダにファイルを移動する。ファイルが`.bbmodel`の場合、`models`フォルダで`.fmmodel`に変換される。
3) `models`フォルダ内のファイルを読み込む。
4) すべてのモデル構造を解釈し、`Bone`のグループを含む`Skeleton`を作成し、これらのボーンは子`Bone`と`Cube`のグループを含む。`Cube`と`Bone`は、それぞれに関連するJSONリソースパックデータを生成する。これは、`Cube`がキューブ固有のJSONを生成し、`Bone`がアウトラインと個々のボーンファイル（1つのボーンファイルは1つのリソースパックファイルになる）を生成することを意味する。モデルは生成されるとリストに追加される。
5) `Skeleton`内で、モデル内のすべての`Animations`を解釈する（もしあれば）。
6) すべてのデータが初期化され、リソースパックが`outputs`フォルダに生成され、プラグインを使用する準備が整う。

## このプラグインで使用されているトリック：

ここで使用されているトリックはかなり確立され標準化されていますが、直感に反する場合があるため、以下にリストします。

これらのトリックはすべてユーザーやモデルメーカーには完全に不可視であることに注意してください。制限と回避策は、FMMが様々なMinecraftの制限をどのようにバイパスしているかを理解するのに役立つようにのみリストされています。

- すべてのモデルは4倍に拡大され、その後コードでサイズとピボットポイントが再調整され、モデルの理論上の最大サイズを拡張しています。
- リソースパックモデルはサイズが-16から+32までしか設定できないため、モデルはバックグラウンドでシフトされています。これはプレイヤーには完全に不可視です。
- レザーホースアーマーは、コードで色合いを影響させることができるモデル（例：ダメージ表示）を作成するために使用されます。ホースアーマーは正しい色を表示するために白に設定する必要があります！
- Blockbenchはテクスチャに特定のIDシステムを使用しますが、実際には設定からテクスチャを順番に読み込みます。IDは、Blockbenchがそれを行う方法に従って、テクスチャリスト内の位置に基づいてここで割り当てられます。
- Minecraftの制限により、各ボーンは異なるエンティティです。
- レザーホースアーマーはアーマースタンドの頭部スロットにあります。
- アーマースタンドとDisplay Entitiesの両方がデフォルトの静的アイテムに使用されます。Bedrockクライアントはアーマースタンドを取得し、1.19.4以降のクライアントはDisplay Entitiesを取得します（古いクライアントはアーマースタンドを取得します）。

# FreeMinecraftModels (FMM) プロジェクト全般への貢献

FMMは、https://www.patreon.com/magmaguy の素晴らしい人々によってクラウドファンディングされています！すべての貢献は、想像以上に役立ちます ;)

# 現在計画されている機能：
- BedrockクライアントRSP生成
- Geyser統合によるRSP管理
- tag_projectile を、そこから投射体を発射できるメタボーンとして使用（モデルごとに複数持つことが可能）

# 現在の奇妙な制限で修正したいもの：

- TransformationMatrixは混乱していますが、より良い解決策はまだ開発されていません。行列が得意な誰かによる作業が必要です。