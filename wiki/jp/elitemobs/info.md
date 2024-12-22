# EliteMobs Wikiへようこそ！

# ライセンス

EliteMobsのソースコードは[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)
ライセンスの下で配布されており、このWikiは[CC0ライセンス](https://choosealicense.com/licenses/cc0-1.0/)で提供されています。

このWikiの情報は、自由に再配布および変更できます。

# バージョン

EliteMobsバージョン9.0.0以降では、サポートされるMinecraftのバージョンは1.21以降のみです。

古いMinecraftバージョン（1.19.4〜1.20.4）との互換性を求める場合は、EliteMobsバージョン8を使用してください。

**注意：EliteMobsのどのバージョンもMinecraftバージョン1.20.5および1.20.6をサポートしていません。**

# EliteMobsは何のために？

EliteMobsは、さまざまなボス関連のコンテンツを実装することにより、Minecraftのエンドゲームを拡張することを目的としています。

これは以下を意味します。
- ダイナミックボス（レベル付きモブ）
- カスタムボス
- イベント
- アリーナ
- ワールドベースダンジョン
- インスタンスダンジョン
- オープンワールドランダムダンジョン（BetterStructures統合）
- カスタムアイテム（エリートアイテム/戦利品）
- ...その他！

このプラグインは、バニラMinecraftコンテンツを置き換えることを目的とするものではなく、むしろ補完するものであり、プレイヤーは必要に応じてEliteMobsコンテンツをオプトアウトできます。EliteMobsのアイテムは、通常、PvPやバニラMinecraftの戦闘には影響しません。ダメージと防御のボーナスは、EliteMobsとの戦闘中にのみ適用されるためです。

# EliteMobsの機能概要

このセクションでは、EliteMobsが提供する**主要な**
機能のいくつか、それらが何であるか、およびそれらを無効にする方法を見ていきます。完全な機能リストについては、[このページ]($language$/elitemobs/feature_list.md&section=feature-list)
を参照してください。

また、[この]($language$/elitemobs/understanding_the_basics_of_elitemobs.md)
ページで、プレイヤーがEliteMobsとどのように対話することを想定しているかを確認できます。

## ダイナミックボス

ダイナミックボスは、EliteMobsの主要な機能の1つです。バニラMinecraftのスポーンの割合をエリートモブスポーンに置き換えます。

エリートは、プレイヤーに挑戦し、倒すと戦利品をドロップする可能性がある、より手ごわいモブです。エリートのレベルは、プレイヤーが装備している鎧と装備の品質によって決定されます。通常のMinecraft装備には、[こちら]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels)
で説明されているように、素材の品質によって決定されるレベルがあります。ただし、プレイヤーがエリートを倒してより良い戦利品を獲得すると、最終的には設定されたレベルのエリートアイテムを獲得し始め、スポーンするエリートのレベルを予測しやすくなります。

これは、プレイヤーのレベルは装備によって決定され、エリートのレベルはプレイヤーのレベルによって決定されることを意味します。EliteMobsには経験値システムはなく、すべてのプレイヤーレベルの進行は装備に依存します。

*MobCombatSettings.yml*の`damageToEliteMobMultiplierV2`と`damageToPlayerMultiplierV2`
の値を変更することで、エリートの難易度を調整できます。詳細については、[こちら]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml)
をご覧ください。

この機能を完全に無効にしたい場合は、`doNaturalEliteMobSpawning`の値を`false`に設定することで無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## エリートアイテム/戦利品

EliteMobsには、ショップで見つけたり、エリートがドロップしたりするランダムに生成されたアイテムがあります。また、通常はダンジョンやその他のエリートコンテンツで見つかるカスタムアイテムもあります。

エリートアイテムはバニラアイテムとほぼ同じですが、通常は追加の特典が装備されており、バニラMinecraftで見つけられるものよりも強力です。一部のエリートアイテムには、
**エリートシャープネス**と**エリートディフェンス**と呼ばれるステータスがあります。これらのステータスは、プレイヤーがエリートと戦っているときにのみ適用され、バニラモブには影響しません。

エリートアイテムには、エンチャント、[カスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md)、ポーション効果もあります。

*ItemSettings.yml*を開いて`doEliteMobsLoot`の値を`false`に設定すると、エリートアイテムを無効にできます。（推奨しません。MMORPGレベルの進行が不可能になります。）

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## イベント

イベントは、タイマーまたはブロックを採掘したり、木を切ったりするなど、特定のプレイヤーアクションに基づいてランダムにトリガーされる可能性がある、EliteMobsのユニークなエンカウンターです。

これらのエンカウンターは、より大きな挑戦を提示し、倒すと貴重な戦利品を提供するカスタムのユニークなエリートを特徴としています。

イベントが発生すると、プレイヤーはチャットで通知を受け取り、クリック可能なリンクを介してエリートの体力と場所を追跡するオプションがあります。エリートが一定時間内に倒されない場合、イベントは終了し、エリートはデスポーンします。

events.ymlを開き、`actionEventsEnabled`と`timedEventsEnabled`の値を`false`に設定すると、すべてのイベントを無効にできます。

個々のイベントを無効にしたい場合は、*〜plugins\EliteMobs\customevents*
に移動します。そこには各イベントの設定があり、その設定を開いて`isEnabled`の値を`false`に設定することで、任意のイベントを無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## 冒険者ギルド

冒険者ギルドは、インストールできる追加のハブワールドであり、プレイヤーが使用できる一連のコマンドでもあります。

ハブワールドがインストールされていない場合、プレイヤーはコマンドを使用する必要があります。それ以外の場合、ハブワールドがインストールされた状態でコマンドを実行すると、プレイヤーはハブワールドにテレポートし、コマンドを入力する必要なしにNPCと対話できます。

どのようなコマンドですか？EliteMobsには、プレイヤーがアイテムの売買、アイテムの修理、アイテムのエンチャントなどに使用できるいくつかのコマンドがあります。プレイヤーが使用できるコマンドの詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md&section=npc-commands)
をご覧ください。

冒険者ギルドの詳細とハブワールドのインストール方法については、[この]($language$/elitemobs/adventurers_guild_world.md)
ページをご覧ください。

*AdventurersGuild.yml*を開き、`guildHubIsEnabledv2`を`false`に設定すると、ハブワールドを無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## ギルドティア/ランク

プレイヤーが進行してより良いアイテムを獲得すると、最終的に制限に達し、モブはより高いレベルのアイテムをドロップしなくなります。これはギルドティア戦利品リミッターと呼ばれます。

ギルドティア戦利品リミッターは、プレイヤーがギルドティアに基づいて獲得できる最高の戦利品を制限し、ティア1からティア10のアイテムにデフォルトの制限を適用し、対応するモブレベルを適用します。名声レベルはより高いティアのロックを解除し、優れた戦利品とより手ごわいモブにアクセスできるようにして、バランスの取れたゲームプレイを保証します。

このシステムは、ソウルバインドエンチャントと組み合わせることで、パワーレベリングの問題を軽減し、サーバーのバランスを維持し、獲得した戦利品に対するプレイヤーの愛着を育みます。ギルドティアの詳細については、[こちら]($language$/elitemobs/guild_tier_loot_limiter.md)
をご覧ください。

ギルドティアのすべての設定は調整可能で、*AdventurersGuild.yml*にあります。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## アリーナ

アリーナは、プレイヤーが戦闘に参加できるウェーブベースのチャレンジです。1人または複数のプレイヤーがアリーナに参加して、ますます難しくなる敵のウェーブに立ち向かうことができ、チャレンジが進むにつれて報酬が向上します。

冒険者ギルドのハブワールドをインストールすると、プレイヤーはハブワールドのNPCとの対話または*/em*
メニューからアクセスできる無料のアリーナであるウッドリーグアリーナにアクセスできます。

追加のアリーナを入手するには、[Itch.io](https://magmaguy.itch.io/)
にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)で購読してください。

アリーナを無効にするには、*〜plugins\EliteMobs\customarenas*に移動し、アリーナ設定（例：*wood_league.yml*）を開き、`isEnabled`
の値を見つけて`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## ワールドダンジョン

ワールドダンジョンは、EliteMobs用にダウンロードできる追加のカスタムコンテンツです。ダンジョンには通常、カスタムのエリートボス、カスタムワールド、カスタム戦利品、カスタムボスパワーがあります。

すべてのワールドダンジョンは、独自のワールドにあるダンジョンです。つまり、プレイヤーがアクセスすると、ダンジョン以外に何も含まれていないワールドにテレポートされます。

ワールドダンジョンにはいくつかのタイプがあります。タイプの詳細については、[こちら]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory)をクリックしてください。

すべてのワールドダンジョンには設定されたレベルがあり、最高の体験のために、ダンジョンを試すプレイヤーはそのレベル付近である必要があります。

ダンジョンを入手するには、[Itch.io](https://magmaguy.itch.io/)
にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)
で購読してください。 [こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のダンジョンがいくつかあります。

個々のダンジョンを無効にするには、*〜plugins\EliteMobs\content_packages*
に移動し、無効にするダンジョンのダンジョン設定を開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## インスタンスダンジョン

インスタンスダンジョンは、いくつかの点でワールドダンジョンとは異なります。それらはインスタンス化されています。つまり、青写真から新しいワールドが動的に作成され、プレイヤーとその友達にMMOで見られるものと同様のプライベートなダンジョン体験を提供します。

インスタンスダンジョンは、難易度が上がるにつれて、独自のボスパワー、体力増加、優れた戦利品を備えたさまざまな難易度を提供します。また、役割も導入されており、プレイヤーは装備している装備に基づいてタンクまたはDPSの役割を採用できます（役割固有の装備はインスタンスダンジョン専用です）。難易度の仕組みの詳細については、[こちら]($language$/elitemobs/instanced_dungeon_difficulty.md)
をご覧ください。

さらに、プレイヤーはインスタンスダンジョン内で互いに復活させることができるため、十分な速さで行動すれば、すぐに戦闘を再開できます。

インスタンスダンジョンを入手するには、[Itch.io](https://magmaguy.itch.io/)
にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)
で購読してください。 [こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のインスタンスダンジョンがあります。

個々のダンジョンを無効にするには、*〜plugins\EliteMobs\dungeonpackages*
に移動し、無効にするダンジョンのダンジョン設定を開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## アドベンチャー

アドベンチャーは、EliteMobsで利用可能な最も広範な追加コンテンツを表しており、魅力的なストーリーとプレイヤーが着手できる多数のクエストを備えた広大なワールドを誇っています。

何百ものカスタムボス、パワー、アイテムを特徴とするアドベンチャーは、没入型のゲーム体験を提供します。アドベンチャー内のクエストは、従来のMMOのクエストと同様に機能し、プレイヤーにモブを倒したり、アイテムを見つけたり、NPCと対話したり、それらの組み合わせなどの目標を課します。

アドベンチャーは非常に大きいため、内部に他のサブダンジョンまたはサブアリーナも含まれています。

アドベンチャーは通常、プレイヤーに設定されたレベル範囲を推奨しますが、最適な楽しみのために、レベルスケールの下端からアドベンチャーを開始することをお勧めします。

アドベンチャーを入手するには、[Itch.io](https://magmaguy.itch.io/)
にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)で購読してください。

個々のアドベンチャーを無効にするには、*〜plugins\EliteMobs\dungeonpackages*
に移動し、無効にするアドベンチャーの設定を開き、`isEnabled`の値を`false`
に設定します。アドベンチャーには、アドベンチャーに付属する追加のサブダンジョンとサブアリーナが含まれている可能性があるため、アドベンチャーを無効にする場合は、それらも無効にしてください。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## ワームホールテレポート

EliteMobsには、ワームホールと呼ばれるAからBへの簡単なテレポート機能もあります。これらは、主に冒険者ギルドのハブワールドで、プレイヤーをそこからダンジョンやサーバーのスポーンに戻すために使用されます。

それらは通常、六角形、立方体、またはダイヤモンドの形をしており、粒子でできています。これらの粒子は、bedrockクライアントのラグを引き起こす可能性があるため、
*Wormholes.yml*を開き、`noParticlesMode`を`true`に設定して、粒子効果を無効にすることができます。

独自のワームホールを作成して、好きなように使用できます。方法については、[こちら]($language$/elitemobs/creating_wormholes.md)
をクリックしてください。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## カスタムコンテンツ

EliteMobsでは、[ボス]($language$/elitemobs/creating_bosses.md)、[ダンジョン]($language$/elitemobs/dungeon_packager.md)、[パワー]($language$/elitemobs/creating_powers.md)、[NPC]($language$/elitemobs/creating_npcs.md)、[クエスト]($language$/elitemobs/creating_quests.md)、[アリーナ]($language$/elitemobs/creating_arenas.md)
など、独自のコンテンツを作成する機会も提供しています。Wikiのサイドバーメニューには、上記以外の他の種類のコンテンツを作成するためのガイドがあります。

最も簡単で効率的なコンテンツ作成エクスペリエンスについては、WebAppを使用することをお勧めします。このツールを使用すると、特にEliteScriptボスパワーの作成を検討している場合は、Wikiを広範囲に参照して正確性を確認する必要なく、すぐに使用できる構成ファイルを生成できます。 [こちら](https://magmaguy.com/webapp/webapp.html)
からWebAppにアクセスしてください。

# 管理者とサーバー所有者向け

このプラグインは、サバイバルおよびサバイバルタイプのサーバー（スカイブロック、スカイウォーズ、大幅に改造されたサバイバルバリアントなど）向けに設計されています。

このプラグインは、プラグインのjarをサーバーにドラッグアンドドロップするだけで簡単に使用できるように設計されています。デフォルト設定は、私が自分のサーバーで使用しているものであり、時間の経過とともに変更される可能性があります。

**ただし！**EliteMobsの開発プロセス全体を通して、カスタマイズ可能性が最優先事項でした。プラグインのほぼすべての側面を翻訳、カスタマイズ、無効化、または変更できます。

# 他の開発者向け

このプロジェクトのGPLV3およびオープンソースの性質にもかかわらず、現時点ではコードの追加や変更を求めても受け付けません。プラグインのフォークは大歓迎ですし、それらをどのように使用するかを見るのは非常に楽しいでしょう。ただし、これは私の最初の巨大なプログラミングプロジェクトであり、学習経験でもあります。

**ただし！**
これを私が批判を超えているとか、フィードバックを聞かないと言っていると受け止めないでください。まったく逆で、プラグインで私がやったことをより良く達成する方法を指摘してくれる人がいると嬉しいです。私はこのプロジェクトを、私が認識していない、または理解していないコードスニペットを使用せずに、最初から最後まで私が書いたものにしたいと思っています。
