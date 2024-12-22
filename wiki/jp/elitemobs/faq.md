もしここに記載されていない質問がある場合は、***サイドバーを確認して***、wikiに専用ページがあるかどうかを確認してください！

# セットアップとインストールに関するFAQ

### カスタムモデルを設定するにはどうすればいいですか？

<details>
<summary>
情報
</summary>

「カスタムモデル」を処理するプラグインは2種類あります。

- LibsDisguises (無料版を含む)
  では、モブを他のモブやカスタムプレイヤーのスキンに変装させることができます。カスタムボスがプレイヤーに変装している場合は、変装にLibsDisguisesを使用しています。この特定の機能を動作させるには、LibsDisguisesをダウンロードする必要があります。

- FreeMinecraftModels (および ModelEngine R3。ModelEngineは推奨されなくなりました)
  では、モブをほとんど制限なく任意のカスタムモデルに変装させることができます。FreeMinecraftModelsではこれを無料で実行でき、推奨されます。カスタムモデルを動作させるには、FreeMinecraftModelsまたはModelEngine
  R3 (R4ではない) のいずれかを使用する必要があります。FreeMinecraftModelsはModelEngineと並行して実行できるため、両方を実行することもできます。
  <br>FreeMinecraftModels /
  ModelEngineをインストールしてもカスタムモデルがまだ動作しない場合は、モデルプラグインをインストールする前にコンテンツをインストールした可能性があります。これが問題でないことを確認するには、カスタム変装付きでEliteMobsコンテンツを再インポートし、再度インストールしてください。

</details>

### コンソール / EliteMobs に間違った WorldGuard バージョンを使用していると表示される

<details>
<summary>
情報
</summary>

WorldGuardがEliteMobsによってインストールされていないと報告されている場合は、サーバープラットフォームに間違ったWorldGuardバージョンを使用しているためです。WorldGuardはどのバージョンを使用しているかに非常に敏感であり、サーバーソフトウェアごとに異なるバージョンがあります。

- Spigot / Paper用のWorldGuardバージョンは、こちらからダウンロードできます。https://dev.bukkit.org/projects/worldguard -
  Minecraftバージョンと互換性があることを確認してください！

</details>

### ワームホール / アリーナ / NPCがインストール直後に正しく動作していないように見える

<details>
<summary>
情報
</summary>

コンテンツのインストール直後にワームホール / アリーナ / NPCが正しく動作していないように見える場合は、`/em reload`
を実行する必要があります。EliteMobsコンテンツをインストールした後、常に実行することをお勧めします。

</details>

### ダンジョンボスを倒した後、再出現しない

<details>
<summary>
情報
</summary>

ほとんどの場合、一部のボスはリスポーン時間が長いためです。「世界の束縛者の影」は、リスポーンタイマーが現実世界の1週間と最も長いです。隠れ家のボスは通常、4時間のリスポーンタイマーを持っています。それ以外のものは、5〜30分のリスポーンタイマーを持つ傾向があります。カスタムボスのリスポーンタイマーは、`~/plugins/EliteMobs/custombosses`
フォルダーにある構成ファイルで編集できます。

</details>

### インストール後、ダンジョンボスが一度も出現しない

<details>
<summary>
情報
</summary>

これはほぼ確実にサードパーティのプラグインの干渉によるものです。次のことを確認してください。

- ワールドの難易度が「平和」になっていませんか？モブは「平和」難易度ではスポーンしません

-
スポーンから領域が保護されていませんか？EliteMobsダンジョンはWorldGuardを介して独自の領域保護を処理します。EliteMobsダンジョンワールドを保護する必要はありません。実際に行うと、間違ったフラグが使用された場合にスポーンが妨げられる可能性があります。

- 他のプラグインがEliteMobsボスのスポーンを妨げたり、削除したりしていませんか？これらの競合はコンソールに表示されることが多いため、コンソールログを確認してください。

</details>

### インストールしたばかりのコンテンツのコマンドがプラグインで自動補完されない

<details>
<summary>
情報
</summary>

コマンドの自動サジェストはCloudCommandFrameworkによって処理され、コマンドサジェストは**サーバーの再起動後**
にのみ更新されます。残念ながら、これについては何もできません。

</details>

### EliteMobsの翻訳を使用するにはどうすればいいですか？

<details>
<summary>
情報
</summary>

`/em language <languagename>.yml`を実行してEliteMobの言語を変更し、EliteMobsコミュニティによって作成および管理されたデフォルトのプラグイン翻訳を使用できます。

プラグインにない言語を追加したり、既存の言語をカスタマイズするには、`custom_language.yml`を使用することをお勧めします。

言語ファイルは、言語を切り替えたときにのみコンテンツを生成します！

誤って非常に簡単に行うことができるymlファイルの書式設定を壊すと、ファイルがリセットされます！
***コンテンツを手動で翻訳する場合は、翻訳のローカルバックアップを必ず保管してください！***

コミュニティ翻訳Webサイトで言語ファイルを翻訳する方が、書式設定を処理してくれるので簡単です！また、翻訳を自動的に提案します。こちらからご覧いただけます: https://crowdin.com/project/elitemobs

念のためですが、翻訳する場合、構成値を開始するために`&`などの特殊文字を使用する場合は、`\"&cCool value\"`
のように値を引用符で囲む必要があります。そうしないと、ファイルが壊れ、進行状況がリセットされます。リンターを使用してymlファイルの有効性をチェックできます。ymlコンテンツをここに貼り付けてください: <https://www.yamllint.com/>

</details>

# EliteMobsとBetterStructuresの互換性FAQ

### BetterStructureの構造にEliteMobsのボスを配置することはできますか？

<details>
<summary>
情報
</summary>

はい、BetterStructuresの祠パッケージはまさにこのタイプのコンテンツです。祠パックは[itch.io](https://magmaguy.itch.io/)
からダウンロードできます。

</details>

### なぜ祠はWorldGuardで保護されているのですか？また、それを防ぐにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsの祠の構造は、Minecraftの戦闘システムを戦闘エリア内で悪用する装置をプレイヤーが構築しないように、デフォルトでWorldGuardによって保護されています。

保護は、ボスが倒されると自動的に削除されます。

すべての祠には、地下にある場合にプレイヤーが掘り下げて見つけなければならないエントリーポイントがあります。

WorldGuardの保護を使用しない場合は、BetterStructuresのconfig.yml構成ファイルで無効にできます。

</details>

### なぜ祠にエリートが出現しないのですか？

<details>
<summary>
情報
</summary>

これは、EliteMobsをインストールする前にBetterStructuresの祠をインストールした場合に発生する可能性があります。これを修正するには、EliteMobsをインストールした
**後**に、祠をサーバーに再インポートして再インストールしてください。

</details>

### EliteMobsを使用せずに祠を使用できますか

<details>
<summary>
情報
</summary>

祠は、中にあるボスと戦うために特別に作成されましたが、戦闘アリーナを美観のためだけに使用したい場合は、EliteMobsをインストールせずに祠パッケージを実行できます。

</details>

# EliteMobsとFreeMinecraftModelsの互換性FAQ

### FreeMinecraftModelsはEliteMobsと互換性がありますか？

<details>
<summary>
情報
</summary>

はい。FreeMinecraftModelsプラグインは、EliteMobsとEternalTDを中心に特別に作成されました。

</details>

### EliteMobsカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/
からダウンロードできます。インストールしたら、公式のリソースパックを使用し、オンラインでホストしてプレイヤーに配布する場合は、FreeMinecraftModelsの出力フォルダーで生成された
**リソースパックをEliteMobsの公式リソースパックとマージする必要**があります。

</details>

### EliteMobsカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobsのカスタムモデルは、https://www.patreon.com/magmaguy および https://magmaguy.itch.io/
からダウンロードできます。インストールしたら、公式のリソースパックを使用し、オンラインでホストしてプレイヤーに配布する場合は、FreeMinecraftModelsの出力フォルダーで生成された
**リソースパックをEliteMobsの公式リソースパックとマージする必要**があります。

</details>

# EliteMobsとResurrectionChestの互換性FAQ

### EliteMobsはResurrectionChestと連携しますか？

<details>
<summary>
情報
</summary>

はい。ResurrectionChestは、EliteMobsコンテンツ専用に作成されており、完全に互換性があります。

</details>

# 他のプラグインとの互換性に関するFAQ

### EliteMobsをMCMMOまたはAureliumSkillsのようなプラグインと一緒に使用できますか？

<details>
<summary>
情報
</summary>

はい。とはいえ、EliteMobsのプレステージシステムによるボーナスヘルスを無効にすることをお勧めします。

</details>

### EliteMobsを別のカスタムアイテムプラグインと一緒に使用できますか

<details>
<summary>
情報
</summary>

はい。ボスにそのプラグインの特定のアイテムをドロップさせたい場合は、死亡時にコマンドを実行し、その方法でプレイヤーにアイテムを与えるように設定します。ただし、使用しているアイテムシステムでEliteMobsのバランスをとる実際の方法はありません。エリートは7つのヘルスポイントから数十万のヘルスポイントになり、他のアイテムプラグインは非常に強力になるか、信じられないほど非力になります。EliteMobsにはすでに組み込まれたアイテムシステムがあり、外部アイテムプラグインは必要ありません。

</details>

# その他のFAQ

### エリートモブの死亡時にコマンドを実行したり、エリートモブの死亡時に他のプラグインからルート/報酬を与えたりするにはどうすればよいですか？

[情報はこちらです。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vaultはサポートされていますか？

[情報はこちらです。]($language$/elitemobs/vault.md)

### PlaceholderAPIのプレースホルダーはありますか？

[情報はこちらです。]($language$/elitemobs/placeholders.md)

### WorldGuardフラグを使用して、EliteMobsを一部の場所では許可し、他の場所では許可しないようにすることはできますか？

[情報はこちらです。]($language$/elitemobs/worldguard_flags.md)

### スポーンするモブの100％をエリートモブにすることはできますか？

これはひどいアイデアですが、`MobCombatSettings.yml`構成ファイルにアクセスして
`eliteMobsSpawnPercentage`を編集して、エリートモブのスポーン率を設定できます。

### カスタムパワーを作成することはできますか？

[情報はこちらです。]($language$/elitemobs/creating_powers.md)

### カスタムエンチャントを作成することはできますか？

これはToDoリストにあり、近日中に提供される予定ですが、現在、不可能です。

### カスタムポーションエフェクトを作成することはできますか？

これを行う唯一の方法は、Javaを学び、自分で書くことです。その時点で、EliteMobsのソースコードを修正しても構いません。

### ワームホールのパーティクルをオフにするにはどうすればいいですか？

ワームホールのパーティクルをオフにするには、*~plugins\EliteMobs\Wormholes.yml*に移動し、`noParticlesMode`
を見つけて、値を`false`に変更します。

### AGスポーンのワームホールを編集して、プレイヤーを好きな場所にテレポートするにはどうすればいいですか？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

*plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*を開いてください。

次に、次の設定を見つけます
`location2: your_world_here,0.5,64,0.5,0,0`
値を好みの場所に変更します。

変更を有効にするには、`/em reload`を実行することを忘れないでください。

### アイテムのバインドを解除するにはどうすればいいですか？

アイテムからソウルバウンドを削除する唯一の方法は、バインド解除スクロールを使用することです。詳細については、[こちら]($language$/elitemobs/soulbind.md)
を参照してください。

### リソースパックをマージするにはどうすればいいですか？

リソースパックを手動でマージすることは可能ですが、[merge.elmakers](https://merge.elmakers.com/)などのオンラインツールを使用してリソースパックをマージすることをお勧めします。

### EliteMobsコマンドのプレースホルダーは何ですか？

| プレースホルダー     |    詳細     |
|--------------|:---------:|
| `$player`    | プレイヤーの表示名 |
| `$bossName`  |  ボスの表示名   |
| `$bossLevel` |  ボスのレベル   |

### 強制リソースパックをオフにするにはどうすればいいですか？

この設定は、実際には`server.properties`
ファイルにあります。通常、このファイルはサーバーのルートディレクトリにあります。ファイルを開いた後、`require-resource-pack`
設定を見つけて、値を`false`に変更して強制リソースパックをオフにします。

### イベントをオフにするにはどうすればいいですか？

武器ゴブリンやチャームゴブリンなどのイベントをオフにしたい場合は、*~plugins\EliteMobs\events.yml*
を開き、`actionEventsEnabled`、`timedEventsEnabled`の設定を見つけて、それらを`false`に設定します。

### ダンジョンワールドまたは冒険者ギルドワールドを編集するにはどうすればいいですか？

EliteMobs
9以降、EliteMobsはダンジョンおよびコンテンツの保護にWorldGuardに依存しなくなりました。この保護を一時的にバイパスするには、コマンド`/em protection bypass`
を使用します。

特定のダンジョンの保護を永続的に無効にする場合は、次の手順に従ってください。

1. *plugins/EliteMobs/content_packages/*に移動します。
2. 変更するダンジョンの*dungeon_config.yml*ファイルを見つけます。
3. 構成ファイルを開き、`protect:`設定を見つけます。
4. 値を`false`に変更して、保護を無効にします。
