```markdown
もしここに載っていない質問がある場合は、***サイドバーを見てください***。wiki にそのページが用意されているかもしれません！

# 設定とインストールに関する FAQ

### カスタムモデルをセットアップするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

"カスタムモデル" を扱うプラグインは 2 つあります。

- LibsDisguises（無料版を含む）を使用すると、モブを別のモブに変装させるか、カスタムプレイヤーのスキンに変装させることができます。プレイヤーの変装をしたカスタムボスがいる場合、LibsDisguises を使用して変装しています。この特定の機能を動作させるには、LibsDisguises をダウンロードする必要があります。


- FreeMinecraftModels（ModelEngine R3 も使用できますが、ModelEngine は推奨されていません）を使用すると、非常に少ない制限で、モブを任意のカスタムモデルに変装させることができます。FreeMinecraftModels は無料で使用でき、お勧めです。カスタムモデルを動作させるには、FreeMinecraftModels または ModelEngine R3（R4 ではありません）のいずれかを使用する必要があります。FreeMinecraftModels は ModelEngine と同時に実行できます。そのため、両方のプラグインを実行することもできます。
<br>FreeMinecraftModels/ModelEngine をインストールしたにもかかわらず、カスタムモデルがまだ動作しない場合は、モデルプラグインをインストールする前にコンテンツをインストールした可能性があります。これが問題ないことを確認するために、カスタム変装付きの EliteMobs コンテンツを再インポートして、もう一度インストールしてください。

</details>

### コンソールまたは EliteMobs に、WorldGuard のバージョンが間違っているというメッセージが表示されます。

<details>
<summary>
情報
</summary>

EliteMobs に WorldGuard がインストールされていないと報告された場合、サーバープラットフォームに適した WorldGuard のバージョンを使用していないことが原因です。WorldGuard は、使用しているバージョンに非常に敏感で、サーバーソフトウェアごとに異なるバージョンが用意されています。

- Spigot/Paper 用の WorldGuard のバージョンは、こちらからダウンロードできます。https://dev.bukkit.org/projects/worldguard - Minecraft のバージョンとの互換性があることが記載されていることを確認してください！

</details>

### ワープホール/アリーナ/NPC が、インストール直後に正しく動作していないようです。

<details>
<summary>
情報
</summary>

ワープホール/アリーナ/NPC が、コンテンツをインストールした直後に正しく動作していない場合は、`/em reload` を実行する必要があります。EliteMobs のコンテンツをインストールした後は、必ず実行してください。

</details>

### ダンジョンボスが倒した後、再び現れません。

<details>
<summary>
情報
</summary>

ほとんどの場合、これは、一部のボスが長いリスポーン時間を持つためです。Binder of Worlds の影は、現実時間で 1 週間という長いリスポーンタイマーを持っています。レイドボスは通常、4 時間のリスポーンタイマーを持っています。それ以外のものは、5 分から 30 分のリスポーンタイマーになっている傾向があります。カスタムボスのリスポーンタイマーは、`~/plugins/EliteMobs/custombosses` フォルダ内の設定ファイルで編集できます。

</details>

### ダンジョンボスがインストール後、まったく出現しませんでした。

<details>
<summary>
情報
</summary>

これは、ほとんどの場合、サードパーティプラグインの干渉によるものです。次のことを確認してください。
- ワールドの難易度が「Peaceful」になっていますか？モブは「Peaceful」難易度ではスポーンしません。


- リージョンがスポーンから保護されていますか？EliteMobs ダンジョンは、WorldGuard を介して独自のリージョン保護を処理します。EliteMobs のダンジョンワールドを保護する必要はありません。実際には、間違ったフラグを使用すると、スポーンが妨げられる可能性があります。


- EliteMobs ボスのスポーンを妨げたり、削除したりする別のプラグインはありますか？これらの競合は、多くの場合、コンソールに表示されるため、コンソールのログを確認してください。

</details>

### インストールしたばかりのコンテンツのコマンドが自動補完されません。

<details>
<summary>
情報
</summary>

コマンドの自動補完は、CloudCommandFramework によって処理され、コマンドの候補が更新されるのは **サーバーの再起動後** です。残念ながら、これについては何もできません。

</details>

### EliteMobs の翻訳を使用するにはどうすればいいですか？

<details>
<summary>
情報
</summary>

`/em language <languagename>.yml` を実行することで、EliteMob の言語を変更できます。これにより、EliteMobs コミュニティによって作成され、管理されているデフォルトのプラグイン翻訳を使用できます。

プラグインに含まれていない言語を追加したり、既存の言語をカスタマイズしたりするには、`custom_language.yml` を使用することをお勧めします。

言語ファイルの内容は、言語を切り替えたときにのみ生成されます！

yml ファイルのフォーマットが壊れてしまうと（これは簡単に起こります）、ファイルがリセットされます！***手動でコンテンツを翻訳している場合は、翻訳のローカルバックアップを作成してください！***

コミュニティの翻訳ウェブサイトで言語ファイルを翻訳すると、フォーマットが処理されるため、より簡単に翻訳できます。また、自動的に翻訳を提案します。こちらから見つけることができます。https://crowdin.com/project/elitemobs

翻訳時に、`&` などの特殊文字を使用して設定値を開始する場合は、値を引用符で囲んで、\"&cCool value\" のようにしてください。そうしないと、ファイルが壊れてしまい、進捗状況がリセットされます。yml ファイルの有効性をチェックするには、リンターを使用できます。yml コンテンツをここに貼り付けるだけです。 <https://www.yamllint.com/>

</details>

# EliteMobs と BetterStructures の互換性に関する FAQ

### BetterStructure で、EliteMobs のボスを含む構造物を取得できますか？

<details>
<summary>
情報
</summary>

はい、BetterStructures の神殿パッケージは、まさにこの種のコンテンツです。神殿パックは、[itch.io](https://magmaguy.itch.io/) からダウンロードできます。

</details>

### なぜ神殿は WorldGuard で保護されているのですか？どのようにして保護を解除できますか？

<details>
<summary>
情報
</summary>

EliteMobs の神殿構造物は、デフォルトで WorldGuard で保護されています。これは、プレイヤーが戦闘エリア内で Minecraft の戦闘システムを悪用するような仕掛けを構築することを防ぐためです。

保護は、ボスが倒されると自動的に削除されます。

すべて的神殿には、プレイヤーが地下にある場合に探す必要があるエントリポイントがあります。

WorldGuard 保護を使用しない場合は、BetterStructures の `config.yml` 設定ファイルで無効にすることができます。

</details>

### なぜ神殿にエリートがスポーンしていないのですか？

<details>
<summary>
情報
</summary>

これは、EliteMobs をインストールする前に BetterStructures の神殿をインストールした場合に発生する可能性があります。これを解決するには、EliteMobs をインストールした **後** に、神殿をサーバーに再インポートして再インストールしてください。

</details>

### EliteMobs を使用せずに、神殿を使用できますか？

<details>
<summary>
情報
</summary>

神殿は、神殿内にいるボスと戦うために特別に作られましたが、単に戦闘アリーナの見た目を取得したい場合は、EliteMobs をインストールせずに、神殿パッケージを実行できます。

</details>

# EliteMobs と FreeMinecraftModels の互換性に関する FAQ

### FreeMinecraftModels は EliteMobs と互換性がありますか？

<details>
<summary>
情報
</summary>

はい。FreeMinecraftModels プラグインは、EliteMobs と EternalTD のために特別に開発されました。

</details>

### EliteMobs のカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobs のカスタムモデルは、https://www.patreon.com/magmaguy と https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、公式のリソースパックを使用し、オンラインでホスティングしてプレイヤーに配布する場合は、FreeMinecraftModels の出力フォルダで生成されたカスタムリソースパックを、EliteMobs の公式リソースパックと **マージする必要があります** 。

</details>

### EliteMobs のカスタムモデルをインストールするにはどうすればいいですか？

<details>
<summary>
情報
</summary>

EliteMobs のカスタムモデルは、https://www.patreon.com/magmaguy と https://magmaguy.itch.io/ からダウンロードできます。インストールしたら、公式のリソースパックを使用し、オンラインでホスティングしてプレイヤーに配布する場合は、FreeMinecraftModels の出力フォルダで生成されたカスタムリソースパックを、EliteMobs の公式リソースパックと **マージする必要があります** 。

</details>


# EliteMobs と ResurrectionChest の互換性に関する FAQ

### EliteMobs は ResurrectionChest と動作しますか？

<details>
<summary>
情報
</summary>

はい。ResurrectionChest は、EliteMobs コンテンツ専用に開発されており、完全に互換性があります。

</details>

# その他のプラグインとの互換性に関する FAQ

### EliteMobs を、MCMMO や AureliumSkills に似たプラグインと使用できますか？

<details>
<summary>
情報
</summary>

はい。ただし、EliteMobs のプレステージシステムによる追加の体力は、無効にすることをお勧めします。

</details>

### EliteMobs を、別のカスタムアイテムプラグインと使用できますか？

<details>
<summary>
情報
</summary>

はい。ボスがそのプラグインの特定のアイテムをドロップするようにするには、死亡時のコマンドを実行して、プレイヤーにそのアイテムを与えるように設定します。ただし、使用しているアイテムシステムに関係なく、EliteMobs をバランスさせる方法は実際にはありません。エリートは、体力が 7 から数十万にまで増加するため、他のアイテムプラグインは、信じられないほど強力になるか、非常に弱体化します。EliteMobs はすでにアイテムシステムを内蔵しているため、外部のアイテムプラグインは必要ありません。

</details>

# その他の FAQ

### Elite Mob の死亡時にコマンドを実行したり、他のプラグインから loot/報酬を死亡時に付与したりできますか？

[情報はここにあります。]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault サポートはありますか？

[情報はここにあります。]($language$/elitemobs/vault.md)

### PlaceholderAPI プレースホルダーはありますか？

[情報はここにあります。]($language$/elitemobs/placeholders.md)

### WorldGuard のフラグを使用して、EliteMobs を一部の場所では許可し、他の場所では許可しないようにできますか？

[情報はここにあります。]($language$/elitemobs/worldguard_flags.md)

### スポーンするモブの 100% を Elite Mob にできますか？

これはひどい考えですが、`MobCombatSettings.yml` 設定ファイルにアクセスして、`eliteMobsSpawnPercentage` を編集することで、Elite Mob のスポーン率を設定できます。

### カスタムパワーを作成できますか？

[情報はここにあります。]($language$/elitemobs/creating_powers.md)

### カスタムエンチャントを作成できますか？

これは、私たちの ToDo リストにあり、まもなく公開される予定です。しかし、現時点では不可能です。

### カスタムポーション効果を作成できますか？

これを行うには、Java を学習して自分で書く必要があります。その時点で、EliteMobs のソースコードを変更するのも同じことです。

### ワープホールのパーティクルをオフにするにはどうすればいいですか？

ワープホールのパーティクルをオフにするには、*~plugins\EliteMobs\Wormholes.yml* に移動し、`noParticlesMode` を探し、値を `false` に変更します。

### AG スポーンのワープホールを編集して、プレイヤーを好きな場所にテレポートさせるにはどうすればいいですか？

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

*plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml* を開いてください。

次に、次の設定を見つけます。
`location2: your_world_here,0.5,64,0.5,0,0`
値を希望の場所に変更します。

### アイテムのソウルバインドを解除するにはどうすればいいですか？

アイテムからソウルバインドを解除する唯一の方法は、ソウルバインド解除スクロールを使用することです。詳細については、[こちら]($language$/elitemobs/soulbind.md) をご覧ください。

### リソースパックをマージするにはどうすればいいですか？

リソースパックを手動でマージすることもできますが、[merge.elmakers](https://merge.elmakers.com/) などのオンラインツールを使用して、リソースパックをマージすることをお勧めします。

### EliteMobs のコマンドプレースホルダーは何ですか？

| プレースホルダー |          詳細           |
| --- |:--------------------------:|
| `$player` | プレイヤーの表示名 |
| `$bossName` |  ボスの表示名  |
| `$bossLevel` |     ボスのレベル      |

### リソースパックの強制をオフにするにはどうすればいいですか？

この設定は、実際には `server.properties` ファイルにあります。このファイルは、通常、サーバーのルートディレクトリにあります。ファイルを
開き、`require-resource-pack` 設定を探し、値を `false` に変更して、リソースパックの強制をオフにします。

### イベントをオフにするにはどうすればいいですか？

武器ゴブリン、チャームゴブリンなどのイベントをオフにするには、*~plugins\EliteMobs\events.yml* を開き、`actionEventsEnabled` と `timedEventsEnabled` の設定を見つけて、`false` に設定します。


```



