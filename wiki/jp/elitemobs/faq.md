日本語に翻訳します。Markdownの書式は維持します。

ここに記載されていない質問がある場合は、wikiに専用のページがあるかどうか***サイドバーを確認してください***！

# セットアップとインストールのFAQ

### EliteMobsからのルートやコインのドロップを無効にするにはどうすればいいですか？また、そうすべきですか？

<details>
<summary>
情報
</summary>

EliteMobsではルートやコインのドロップを制御できますが、変更を行う前に、これらのドロップがゲームプレイと進行にどのように影響するかを理解することが重要です。

- **ルートとコインのドロップ:**
ルートドロップはEliteMobsのコア機能であり、プレイヤーが装備するギアと関連しています。ルートを無効にすると、プレイヤーはより高レベルのエリートに立ち向かうために必要なより良いギアを入手できなくなり、進行が完全に停止します。

コインはゲーム内経済にとって不可欠であり、ギアの購入やアップグレードに使用されます。コインのドロップを無効にすると、このシステムが深刻に混乱し、プレイヤー体験とバランスに悪影響を与えます。

ルートとコインのドロップを無効にするには、`ItemSettings.yml`を開き、`doEliteMobsLoot`を`false`に設定してください。

- **ダンジョン内のカスタムボスルート:**
カスタムボスには、`~/elitemobs/custombosses`にある設定ファイルで定義されたルートがあります。これらのドロップを無効にすると、ユニークな報酬が削除され、意図された体験が損なわれます。

</details>


### カスタムモデルを設定するにはどうすればいいですか？

<details>
<summary>
情報
</summary>

「カスタムモデル」を扱うプラグインは2種類あります。

- LibsDisguises（無料版を含む）を使用すると、モブを他のモブやカスタムプレイヤースキンに変装させることができます。カスタムボスがプレイヤースキンに変装している場合、それはLibsDisguisesを使用して変装しています。この特定の機能を機能させるには、LibsDisguisesをダウンロードする必要があります。


- FreeMinecraftModels（およびModelEngine R3、ただしModelEngineはもはや推奨されません）を使用すると、モブをほとんど制限なく任意のカスタムモデルに変装させることができます。FreeMinecraftModelsはこれを無料で実行でき、推奨されます。カスタムモデルを機能させるには、FreeMinecraftModelsまたはModelEngine R3（R4ではない）のいずれかを使用する必要があります。FreeMinecraftModelsはModelEngineと並行して実行できるため、両方を実行することも可能です。
<br>FreeMinecraftModels/ModelEngineをインストールしてもカスタムモデルがまだ機能しない場合は、モデルプラグインをインストールする前にコンテンツをインストールした可能性があります。これが問題でないことを確認するには、カスタムディスガイズを含むEliteMobsコンテンツを再インポートし、再度インストールしてください。

</details>

### コンソール / EliteMobsが間違ったWorldGuardバージョンを使用していると言っています

<details>
<summary>
情報
</summary>

EliteMobsによってWorldGuardがインストールされていないと報告される場合、それはサーバープラットフォームに対して間違ったWorldGuardバージョンを使用しているためです。WorldGuardは使用しているバージョンに非常に敏感であり、サーバーソフトウェアごとに異なるバージョンがあります。

- Spigot / Paper用のWorldGuardバージョンは、こちらからダウンロードできます: https://dev.bukkit.org/projects/worldguard - 使用しているMinecraftバージョンと互換性があることを確認してください！

</details>

### インストール直後にワームホール / アリーナ / NPCが正しく機能していないようです

<details>
<summary>
情報
</summary>

コンテンツをインストールした直後にワームホール / アリーナ / NPCが正しく機能していないように見える場合は、`/em reload`を実行する必要があります。EliteMobsコンテンツをインストールした後は、常にこれを実行することをお勧めします。

</details>

### ダンジョンボスを倒した後、再出現しません

<details>
<summary>
情報
</summary>

ほとんどの場合、これは一部のボスのリスポーン時間が長いためです。Shadow of the Binder of Worldsは、現実時間で1週間の最長リスポーンタイマーを持っています。隠れ家のボスは通常4時間のリスポーンタイマーを持っています。その他のボスは5〜30分のリスポーンタイマーになる傾向があります。カスタムボスのリスポーンタイマーは、`~/plugins/EliteMobs/custombosses`フォルダにある設定ファイルで編集できます。

</details>

### インストール後、ダンジョンボスが一度も出現しませんでした

<details>
<summary>
情報
</summary>

これはほぼ間違いなく、サードパーティ製プラグインの干渉によるものです。以下を確認してください。
- ワールドはピースフル難易度ですか？ピースフル難易度ではモブはスポーンしません。


- リージョンはスポーンから保護されていますか？EliteMobsダンジョンはWorldGuardを介して独自のリージョン保護を処理するため、EliteMobsダンジョンワールドを保護する必要はありません。実際、間違ったフラグを使用するとスポーンが妨げられる可能性があります。


- EliteMobsボスのスポーンを妨げたり、削除したりする別のプラグインはありますか？これらの競合はコンソールに表示されることが多いので、コンソールログを確認してください。

</details>

### インストールしたばかりのコンテンツのコマンドがオートコンプリートされません

<details>
<summary>
情報
</summary>

コマンドのオートサジェストはCloudCommandFrameworkによって処理され、**サーバーの再起動後**にのみコマンドサジェストを更新します。残念ながら、これについて私にできることはありません。

</details>

### EliteMobsの翻訳を使用するにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobの言語は、`/em language <languagename>.yml`を実行することで変更できます。これは、EliteMobsコミュニティによって作成および管理されているデフォルトのプラグイン翻訳を使用するためです。

プラグインにない言語を追加したり、既存の言語をカスタマイズしたりするには、`custom_language.yml`を使用することをお勧めします。

言語ファイルは、言語を切り替えたときにのみ内容を生成します！

ymlファイルの書式を崩すと、これは非常に簡単に間違いで起こりますが、ファイルがリセットされます！***手動でコンテンツを翻訳している場合は、翻訳のローカルバックアップを必ず保管してください！***

コミュニティ翻訳ウェブサイトで言語ファイルを翻訳する方が簡単です。そこでは書式設定を処理してくれます！また、翻訳を自動的に提案してくれます。それはこちらで見つけることができます: https://crowdin.com/project/elitemobs

注意として、翻訳する際に、構成値の開始に`&`のような特殊文字を使用する場合、その値を`\"&cCool value\"`のように引用符で囲む必要があります！そうしないと、ファイルが壊れて進行状況がリセットされます。ymlファイルの有効性をチェックするには、リンターを使用できます。ymlの内容をここに貼り付けてください: <https://www.yamllint.com/>

</details>

# EliteMobsとBetterStructuresの互換性FAQ

### BetterStructureのストラクチャーにEliteMobsのボスを入れることはできますか？

<details>
<summary>
情報
</summary>

はい、BetterStructuresの神社パッケージはまさにこの種のコンテンツです。神社パックは[itch.io](https://magmaguy.itch.io/)からダウンロードできます。

</details>

### なぜ神社はWorldGuardで保護されているのですか？また、それを防ぐにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsの神社ストラクチャーは、プレイヤーが戦闘エリア内でMinecraftの戦闘システムを悪用するための仕掛けを作らないように、デフォルトでWorldGuardで保護されています。

保護はボスが倒されると自動的に削除されます。

すべての神社には、地下にある場合にプレイヤーが掘り進んで見つける必要がある入り口があります。

WorldGuardの保護を使用しない場合は、BetterStructuresのconfig.yml設定ファイルで無効にできます。

</details>

### なぜ神社はエリートなしでスポーンするのですか？

<details>
<summary>
情報
</summary>

これは、EliteMobsをインストールする前にBetterStructuresの神社をインストールした場合に発生する可能性があります。これを修正するには、EliteMobsがインストールされた**後**に、神社をサーバーに再インポートして再インストールしてください。

</details>

### EliteMobsを使用せずに神社を使用できますか？

<details>
<summary>
情報
</summary>

神社は、そこに含まれるボスと戦うために特別に作られましたが、戦闘アリーナを単に見た目のために使用したい場合は、EliteMobsをインストールせずに神社パッケージを実行するだけで済みます。

</details>

# EliteMobsとFreeMinecraftModelsの互換性FAQ

### FreeMinecraftModelsはEliteMobsと互換性がありますか？

<details>
<summary>
情報
</summary>

はい。FreeMinecraftModelsプラグインは、EliteMobsとEternalTDを中心に特別に作られました。

</details>

### EliteMobsのカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、公式のリソースパックを使用し、それをオンラインでホストしてプレイヤーに配布したい場合は、FreeMinecraftModelsが出力フォルダに生成した**リソースパックをEliteMobsの公式リソースパックとマージする必要があります**。

</details>

### EliteMobsのカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、公式のリソースパックを使用し、それをオンラインでホストしてプレイヤーに配布したい場合は、FreeMinecraftModelsが出力フォルダに生成した**リソースパックをEliteMobsの公式リソースパックとマージする必要があります**。

</details>


# EliteMobsとResurrectionChestの互換性FAQ

### EliteMobsはResurrectionChestと連携しますか？

<details>
<summary>
情報
</summary>

はい。ResurrectionChestはEliteMobsコンテンツのために特別に作られており、完全に互換性があります。

</details>

# 他のプラグインとの互換性FAQ

### EliteMobsをMCMMOやAureliumSkillsに似たプラグインと一緒に使用できますか？

<details>
<summary>
情報
</summary>

はい。ただし、EliteMobsのプレステージシステムからのボーナス体力を無効にしたい場合があります。

</details>

### EliteMobsを別のカスタムアイテムプラグインと一緒に使用できますか？

<details>
<summary>
情報
</summary>

はい。ボスにそのプラグインからの特定のアイテムをドロップさせたい場合は、死亡時コマンドを設定してプレイヤーにアイテムを与えることができます。ただし、使用しているアイテムシステムとEliteMobsのバランスを取る現実的な方法はありません。エリートは体力が7から数十万にまで増加するため、他のアイテムプラグインは非常に強力すぎるか、信じられないほど弱すぎるかのどちらかになります。EliteMobsにはすでに独自のアイテムシステムが組み込まれており、外部のアイテムプラグインは必要ありません。

</details>

# その他のFAQ

### エリートモブ死亡時にコマンドを実行したり、他のプラグインからのルート/報酬を与えたりするには？

[情報はこちらで入手できます。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vaultのサポートは？

[情報はこちらで入手できます。]($language$/elitemobs/vault.md)

### PlaceholderAPIのプレースホルダーは？

[情報はこちらで入手できます。]($language$/elitemobs/placeholders.md)

### WorldGuardフラグを使用して、一部の場所ではEliteMobsを許可し、他の場所では許可しないようにするには？

[情報はこちらで入手できます。]($language$/elitemobs/worldguard_flags.md)

### スポーンするモブの100%をエリートモブにできますか？

これはひどいアイデアですが、`MobCombatSettings.yml`設定ファイルにアクセスして
`eliteMobsSpawnPercentage`を編集することで、エリートモブのスポーン率を設定できます。

### カスタムパワーを作成できますか？

[情報はこちらで入手できます。]($language$/elitemobs/creating_powers.md)

### カスタムエンチャントを作成できますか？

これは私たちのToDoリストにあり、まもなく登場するはずですが、現在は不可能です。

### カスタムポーション効果を作成できますか？

これを行う唯一の方法は、Javaを学び、自分で記述することです。その時点では、EliteMobsのソースコードを修正するのと同じくらいです。

### ワームホールのパーティクルをオフにするにはどうすればいいですか？

ワームホールのパーティクルをオフにするには、*~plugins\EliteMobs\Wormholes.yml*に移動し、`noParticlesMode`を見つけて
値を`false`に変更してください。

### AGスポーンのワームホールを編集して、プレイヤーを希望の場所にテレポートさせるにはどうすればいいですか？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

*plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*を開くことで可能です。

次に、以下の設定を見つけてください。
`location2: your_world_here,0.5,64,0.5,0,0`
そして、値を希望の場所に編集してください。

変更を有効にするには、`/em reload`を実行することを忘れないでください。

### アイテムのバインドを解除するにはどうすればいいですか？

アイテムからソウルバウンドを削除する唯一の方法は、アンバインドスクロールを使用することです。詳細については、
[こちら]($language$/elitemobs/soulbind.md)をご覧ください。

### リソースパックをマージするにはどうすればいいですか？

リソースパックを手動でマージすることも可能ですが、リソースパックをマージするには[merge.elmakers](https://merge.elmakers.com/)のようなオンラインツールを使用することをお勧めします。

### EliteMobsのコマンドプレースホルダーは何ですか？

| プレースホルダー |          詳細           |
| --- |:--------------------------:|
| `$player` | プレイヤーの表示名 |
| `$bossName` |  ボスの表示名  |
| `$bossLevel` |     ボスのレベル      |

### 強制リソースパックをオフにするにはどうすればいいですか？

この設定は実際には`server.properties`ファイルにあります。通常、このファイルはサーバーのルートディレクトリにあります。ファイルを開いた後、`require-resource-pack`設定を見つけて、値を`false`に変更すると強制リソースパックがオフになります。

### イベントをオフにするにはどうすればいいですか？

武器ゴブリン、チャームゴブリンなどのイベントをオフにしたい場合は、*~plugins\EliteMobs\events.yml*を開き、`actionEventsEnabled`、`timedEventsEnabled`の設定を見つけて`false`に設定してください。

### ダンジョンワールドまたは冒険者ギルドワールドを編集するにはどうすればいいですか？

EliteMobs 9以降、EliteMobsはダンジョンおよびコンテンツ保護のためにWorldGuardに依存しなくなりました。この保護を一時的にバイパスするには、コマンド`/em protection bypass`を使用してください。

特定のダンジョンの保護を永続的に無効にしたい場合は、以下の手順に従ってください。

1. *plugins/EliteMobs/content_packages/*に移動します。
2. 変更したいダンジョンの*dungeon_config.yml*ファイルを見つけます。
3. 設定ファイルを開き、`protect:`設定を見つけます。
4. 値を`false`に変更して保護を無効にします。


### エリートスクロールとは何ですか？また、どのように使用できますか？

**エリートスクロール**は、プレイヤーが通常の（エリートではない）ギアをエリートティアのギアに変換できる特別なアップグレードアイテムであり、EliteMobsのレベリングおよびルートシステムとシームレスに統合されます。

- **プラグイン互換性:** **ItemAdder**のような他のアイテムプラグインを使用しているサーバーに最適で、それらのアイテムがエリートレベルを獲得できるようにします。
- **アップグレード方法:** **冒険者ギルド**で、スクロールアプライヤーNPCである**Scotty**（エンチャンターの隣に位置）に話しかけることで適用できます。*この機能はデフォルトで無効になっています。*
- **バランスの取れた進行:** スクロールは同じレベルの**エリートモブ**からドロップし、公正でレベルに適したアップグレードを保証します。
- **カスタムアイテムサポート:** カスタムまたはプラグインベースのアイテムがEliteMobsの進行システム内で機能することを可能にします。

> **注:** エリートダメージ効果はEliteMobsシステム内でのみ有効です。スクロールで強化されたアイテムは、EliteMobsコンテンツ外の一般的なゲームプレイでは強力すぎません。

#### エリートスクロールを有効にする方法

デフォルトでは、エリートスクロールは**無効**になっています。有効にするには:

1. 設定ファイルを開きます:
   `plugins/EliteMobs/ItemSettings.yml`
2. 以下のオプションを`true`に設定します:
   `useEliteItemScrolls`
3. 次に、以下のコマンドを実行します:
   `/em reload`