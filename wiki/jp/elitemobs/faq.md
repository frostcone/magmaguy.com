もしここにない質問がある場合は、***サイドバーを見てください***。Wikiに専用のページがあるかもしれません！

# セットアップとインストールに関するFAQ

### カスタムモデルをセットアップするにはどうすればよいですか？

<details>
<summary>
情報
</summary>

「カスタムモデル」を扱うプラグインは2種類あります。

- LibsDisguises (無料版を含む) は、モブを他のモブやカスタムプレイヤースキンに変装させることができます。カスタムボスがプレイヤースキンに変装しているのを見たら、それは変装にLibsDisguisesを使用しています。この特定の機能を動作させるには、LibsDisguisesをダウンロードする必要があります。

- FreeMinecraftModels (およびModelEngine R3。ただし、ModelEngineはもう推奨されていません) では、モブをほとんど制限なく任意のカスタムモデルに変装させることができます。FreeMinecraftModelsではこれが無料ででき、推奨されています。カスタムモデルを動作させるには、FreeMinecraftModelsまたはModelEngine R3 (R4ではない) のいずれかを使用する必要があります。FreeMinecraftModelsはModelEngineと並行して実行できるため、両方を実行することもできます。<br>FreeMinecraftModels/ModelEngineをインストールしてもカスタムモデルがまだ動作しない場合は、モデルプラグインをインストールする前にコンテンツをインストールした可能性があります。この問題がないことを確認するには、カスタム変装を使用してEliteMobsコンテンツを再インポートし、再度インストールしてください。

</details>

### コンソール / EliteMobsで間違ったWorldGuardバージョンを使用していると言われます

<details>
<summary>
情報
</summary>

EliteMobsでWorldGuardがインストールされていないと報告される場合、それはサーバープラットフォームで間違ったWorldGuardバージョンを使用しているためです。WorldGuardはどのバージョンを使用しているかに非常に敏感で、サーバーソフトウェアごとに異なるバージョンがあります。

- Spigot / Paper用のWorldGuardバージョンはここからダウンロードできます: https://dev.bukkit.org/projects/worldguard - お使いのMinecraftバージョンと互換性があることを確認してください!

</details>

### ワームホール / アリーナ / NPCがインストール直後に正しく動作していないようです

<details>
<summary>
情報
</summary>

ワームホール / アリーナ / NPCがコンテンツのインストール直後に正しく動作していないように見える場合は、`/em reload`を実行する必要があります。EliteMobsコンテンツをインストールした後、常に実行することをお勧めします。

</details>

### ダンジョンボスを倒した後、再出現しません

<details>
<summary>
情報
</summary>

ほとんどの場合、これは一部のボスが長いリスポーン時間を持っているためです。「世界の束縛者の影」は、現実世界の1週間の長いリスポーンタイマーを持っています。隠れ家のボスは通常4時間のリスポーンタイマーを持っています。その他はすべて5〜30分のリスポーンタイマーであることが多いです。カスタムボスのリスポーンタイマーは、`~/plugins/EliteMobs/custombosses`フォルダにある構成ファイルで編集できます。

</details>

### インストール後、ダンジョンボスが一度も出現しませんでした

<details>
<summary>
情報
</summary>

これはほぼ確実にサードパーティ製プラグインの干渉によるものです。以下を確認してください。
- ワールドはピースフル難易度になっていますか? モブはピースフル難易度ではスポーンしません。

- あなたの領域はスポーンから保護されていますか? EliteMobsダンジョンはWorldGuardを介して独自の領域保護を処理します。EliteMobsダンジョンワールドを保護する必要はありません。実際には、間違ったフラグを使用するとスポーンを防ぐ可能性があります。

- EliteMobsボスのスポーンを妨げたり、削除したりする別のプラグインはありますか? これらの競合は多くの場合、コンソールに表示されるため、コンソールログを確認してください。

</details>

### プラグインがインストールしたばかりのコンテンツのコマンドを自動補完しません

<details>
<summary>
情報
</summary>

コマンドの自動提案はCloudCommandFrameworkによって処理され、**サーバー再起動後**にのみコマンド提案が更新されます。残念ながら、それについては何もできません。

</details>

### EliteMobsの翻訳をどのように使用しますか？

<details>
<summary>
情報
</summary>

`/em language <言語名>.yml`を実行して、EliteMobsコミュニティによって作成および管理されたデフォルトのプラグイン翻訳を使用することにより、EliteMobの言語を変更できます。

プラグインにない言語を追加したり、既存の言語をカスタマイズしたりするには、`custom_language.yml`を使用することをお勧めします。

言語ファイルは、言語を切り替えたときにのみコンテンツを生成します！

誤って行いやすい、ymlファイルのフォーマットを壊すと、ファイルがリセットされます！ ***コンテンツを手動で翻訳する場合は、翻訳のローカルバックアップを必ず保管してください！***

コミュニティ翻訳ウェブサイトで言語ファイルを翻訳する方が簡単です。これはフォーマットを処理してくれるからです！また、自動的に翻訳を提案します。こちらをご覧ください：https://crowdin.com/project/elitemobs

念のためですが、翻訳している場合、`&`などの特殊文字を使用して構成値を開始する場合は、`\"&cCool value\"`のように値を引用符で囲む必要があります！そうしないと、ファイルが壊れ、進行状況がリセットされます。linterを使用してymlファイルの有効性を確認できます。ymlの内容をここに貼り付けるだけです: <https://www.yamllint.com/>

</details>

# EliteMobsとBetterStructuresの互換性に関するFAQ

### BetterStructureでEliteMobsのボスがいる構造物を手に入れることはできますか？

<details>
<summary>
情報
</summary>

はい、BetterStructures神社のパッケージはまさにこの種のコンテンツです。神社のパックは[itch.io](https://magmaguy.itch.io/)からダウンロードできます。

</details>

### なぜ神社はWorldGuardで保護されており、それを防ぐにはどうすればよいですか

<details>
<summary>
情報
</summary>

EliteMobs神社の構造物は、戦闘エリア内でプレイヤーがMinecraftの戦闘システムを悪用する構造物を構築しないように、デフォルトでWorldGuardで保護されています。

保護は、ボスが倒されると自動的に削除されます。

すべての神社には、地下にある場合にプレイヤーが掘り進んで見つける必要のあるエントリポイントがあります。

WorldGuard保護を使用したくない場合は、BetterStructures config.yml構成ファイルで無効にできます。

</details>

### なぜ神社はエリートなしでスポーンするのですか？

<details>
<summary>
情報
</summary>

これは、EliteMobsをインストールする前にBetterStructures神社をインストールした場合に発生する可能性があります。これを修正するには、EliteMobsがインストールされた**後**、神社をサーバーに再インポートして再インストールしてください。

</details>

### EliteMobsを使用せずに神社を使用できますか

<details>
<summary>
情報
</summary>

神社は、その中にいるボスと戦うために特別に作られましたが、外観のために戦闘アリーナだけが必要な場合は、EliteMobsをインストールせずに神社のパッケージを実行できます。

</details>

# EliteMobsとFreeMinecraftModelsの互換性に関するFAQ

### FreeMinecraftModelsはEliteMobsと互換性がありますか？

<details>
<summary>
情報
</summary>

はい。FreeMinecraftModelsプラグインは、EliteMobsとEternalTDを中心に特別に作成されました。

</details>

### EliteMobsカスタムモデルをインストールするにはどうすればよいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、オンラインでホストしてプレイヤーに配布したい場合は、FreeMinecraftModelsがその出力フォルダーで生成したリソースパックを、EliteMobsからの公式リソースパックと**マージする必要があります**。

</details>

### EliteMobsカスタムモデルをインストールするにはどうすればよいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、オンラインでホストしてプレイヤーに配布したい場合は、FreeMinecraftModelsがその出力フォルダーで生成したリソースパックを、EliteMobsからの公式リソースパックと**マージする必要があります**。

</details>

# EliteMobsとResurrectionChestの互換性に関するFAQ

### EliteMobsはResurrectionChestと連携しますか？

<details>
<summary>
情報
</summary>

はい。ResurrectionChestはEliteMobsコンテンツ専用に作成されており、完全に互換性があります。

</details>

# 他のプラグインとの互換性に関するFAQ

### MCMMOやAureliumSkillsのようなプラグインと一緒にEliteMobsを使用できますか

<details>
<summary>
情報
</summary>

はい。そうは言っても、EliteMobsのプレステージシステムによるボーナスヘルスを無効にすることもできます。

</details>

### 別のカスタムアイテムプラグインでEliteMobsを使用できますか

<details>
<summary>
情報
</summary>

はい。ボスにそのプラグインから特定のアイテムをドロップさせたい場合は、死亡時のコマンドを設定して、その方法でプレイヤーにアイテムを与えます。ただし、使用しているアイテムシステムでEliteMobsのバランスを取るための適切な方法はありません。エリートは7ヘルスポイントから数十万のヘルスポイントまで増加するため、他のアイテムプラグインは非常に強力になるか、非常に弱くなります。EliteMobsにはすでに組み込まれたアイテムシステムがあり、外部のアイテムプラグインは必要ありません。

</details>

# その他のFAQ

### エリートモブの死亡時にコマンドを実行するか、エリートモブの死亡時に他のプラグインから戦利品/報酬を与えますか？

[情報はここで入手できます。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vaultサポートはありますか？

[情報はここで入手できます。]($language$/elitemobs/vault.md)

### PlaceholderAPIのプレースホルダーはありますか？

[情報はここで入手できます。]($language$/elitemobs/placeholders.md)

### WorldGuardフラグを使用して、一部の場所ではEliteMobsを許可し、他の場所では許可しないようにすることはできますか？

[情報はここで入手できます。]($language$/elitemobs/worldguard_flags.md)

### スポーンするモブの100％をエリートモブにすることはできますか？

これはひどい考えですが、`MobCombatSettings.yml`構成ファイルにアクセスして、
`eliteMobsSpawnPercentage`を編集して、エリートモブのスポーン率を設定できます。

### カスタムパワーを作成できますか？

[情報はここで入手できます。]($language$/elitemobs/creating_powers.md)

### カスタムエンチャントを作成できますか？

これは私たちのTo Doリストにあり、近日中に登場する予定ですが、現在はできません。

### カスタムポーションエフェクトを作成できますか？

これを行う唯一の方法は、Javaを学び、自分で記述することです。その時点で、EliteMobsソースコードを修正することもできます。

### ワームホールのパーティクルをオフにするにはどうすればよいですか？

ワームホールのパーティクルをオフにするには、*~plugins\EliteMobs\Wormholes.yml*に移動し、`noParticlesMode`を見つけて
値を`false`に変更します。

### AGスポーンのワームホールを編集して、プレイヤーを好きな場所にテレポートするにはどうすればよいですか？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

*plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*を開くことで実行できます。

次に、次の設定を見つけます
`location2: your_world_here,0.5,64,0.5,0,0`
値を目的の場所に変更します。

変更を有効にするには、`/em reload`を実行することを忘れないでください。

### アイテムのバインドを解除するにはどうすればよいですか？

アイテムからソウルバウンドを削除する唯一の方法は、アンバインドスクロールを使用することです。詳細については、
[こちら]($language$/elitemobs/soulbind.md)を参照してください。

### リソースパックをマージするにはどうすればよいですか？

リソースパックを手動でマージすることは可能ですが、[merge.elmakers](https://merge.elmakers.com/)などのオンラインツールを使用してリソースパックをマージすることをお勧めします。

### EliteMobsのコマンドプレースホルダーは何ですか？

| プレースホルダー |          詳細           |
| --- |:--------------------------:|
| `$player` | プレイヤーの表示名 |
| `$bossName` |   ボスの表示名   |
| `$bossLevel` |     ボスのレベル     |

### 強制リソースパックをオフにするにはどうすればよいですか？

この設定は実際には`server.properties`ファイルにあります。このファイルは通常、サーバーのルートディレクトリにあります。ファイルを開いたら、`require-resource-pack`設定を見つけて、値を`false`に変更して強制リソースパックをオフにします。

### イベントをオフにするにはどうすればよいですか？

武器ゴブリン、チャームゴブリンなどのイベントをオフにする場合は、*~plugins\EliteMobs\events.yml*を開き、`actionEventsEnabled`、`timedEventsEnabled`の設定を見つけて`false`に設定します。

### ダンジョンワールドまたは冒険者ギルドワールドを編集するにはどうすればよいですか？

EliteMobs 9以降、EliteMobsはダンジョンとコンテンツの保護にWorldGuardに依存しなくなりました。この保護を一時的にバイパスするには、コマンド`/em protection bypass`を使用します。

特定のダンジョンの保護を永続的に無効にする場合は、次の手順に従ってください。

1. *plugins/EliteMobs/content_packages/*に移動します。
2. 変更したいダンジョンの*dungeon_config.yml*ファイルを見つけます。
3. 構成ファイルを開き、`protect:`設定を見つけます。
4. 保護を無効にするには、値を`false`に変更します。
