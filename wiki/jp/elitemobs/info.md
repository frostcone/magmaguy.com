# EliteMobs Wikiへようこそ！

# ライセンス

EliteMobsのソースコードは[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)ライセンスの下でカバーされており、このwikiは[CC0ライセンス](https://choosealicense.com/licenses/cc0-1.0/)で提供されています。

このwikiの情報は、自由に再配布および変更できます。

# バージョン

EliteMobsバージョン9.0.0以降、サポートされるMinecraftバージョンは1.21以降のみです。

古いMinecraftバージョン（1.19.4〜1.20.4）との互換性が必要な場合は、EliteMobsバージョン8を使用してください。

**注意：どのバージョンのEliteMobsもMinecraftバージョン1.20.5および1.20.6をサポートしていません。**

# EliteMobsは何のためのものですか？

EliteMobsは、さまざまなボス関連コンテンツを実装することで、Minecraftのエンドゲームを拡張することを目的としています。

つまり：
- ダイナミックボス（レベル付きモブ）
- カスタムボス
- イベント
- アリーナ
- ワールドベースダンジョン
- インスタンスダンジョン
- オープンワールドランダムダンジョン（BetterStructures統合付き）
- カスタムアイテム（エリートアイテム/戦利品）
- ...その他！

このプラグインは、バニラのMinecraftコンテンツを置き換えることを目的とするのではなく、むしろそれを補完し、必要に応じてプレイヤーがEliteMobsコンテンツからオプトアウトできるようにします。EliteMobsのアイテムは通常、PvPやバニラのMinecraftの戦闘には影響しません。ダメージと防御のボーナスは、EliteMobsとの戦闘中にのみ適用されるためです。

# EliteMobs機能概要

このセクションでは、EliteMobsが提供する**主要な**機能のいくつか、それらが何であるか、およびそれらを無効にする方法を見ていきます。機能の完全なリストについては、[このページ]($language$/elitemobs/feature_list.md&section=feature-list)を参照してください。

また、[こちら]($language$/elitemobs/understanding_the_basics_of_elitemobs.md)のページでは、プレイヤーがEliteMobsと対話する予定の方法について確認できます。

## ダイナミックボス

ダイナミックボスは、EliteMobsの主な機能の1つです。バニラのMinecraftスポーンの割合を、エリートモブのスポーンに置き換えます。

エリートは、プレイヤーに挑戦し、倒したときに可能な戦利品ドロップで報酬を与えるように設計された、よりタフなモブです。エリートのレベルは、プレイヤーが装備している鎧とギアの品質によって決定されます。通常のMinecraftギアには、[こちら]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels)で説明されているように、素材の品質によって決定されるレベルがあります。ただし、プレイヤーがエリートを倒し、より良い戦利品を手に入れると、最終的に設定レベルのエリートアイテムを入手し始め、スポーンするエリートのレベルを予測しやすくなります。

これは、プレイヤーのレベルは装備しているギアによって決定され、エリートのレベルはプレイヤーのレベルによって決定されることを意味します。
EliteMobsには経験値システムはなく、すべてのプレイヤーのレベル進行はギアに依存します。

*MobCombatSettings.yml*の`damageToEliteMobMultiplierV2`と`damageToPlayerMultiplierV2`の値を変更することで、エリートの難易度を調整できます。これに関する詳細情報は、[こちら]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml)にあります。

この機能を完全に無効にする場合は、`doNaturalEliteMobSpawning`の値を`false`に設定することで無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## エリートアイテム/戦利品

EliteMobsは、ショップで見つけたり、エリートによってドロップされたりするランダムに生成されたアイテムを特徴としています。ダンジョンやその他のエリートコンテンツで通常見つかるカスタムアイテムもあります。

エリートアイテムは、通常は追加のグッズが装備されており、バニラMineCraftで見つけることができるものよりも強力である点を除いて、バニラアイテムとまったく同じです。一部のエリートアイテムには、**エリートシャープネス**および**エリートディフェンス**と呼ばれるステータスが付いています。これらのステータスは、プレイヤーがエリートと戦っているときにのみ適用され、バニラモブには影響しません。

エリートアイテムには、エンチャント、[カスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md)、ポーション効果も適用できます。

*ItemSettings.yml*を開き、`doEliteMobsLoot`の値を`false`に設定すると、エリートアイテムを無効にできます。（推奨されません。MMORPGのレベル進行が不可能になります。）

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## イベント

イベントは、タイマーまたはブロックをマイニングしたり、木を切ったりするなど、特定のプレイヤーのアクションに基づいてランダムにトリガーできるEliteMobsのユニークなエンカウンターです。

これらのエンカウンターは、より大きな挑戦を提示し、倒したときに貴重な戦利品を提供するカスタムのユニークなエリートを特徴としています。

イベントが発生すると、チャットでプレイヤーに通知が届き、クリック可能なリンクを介してエリートの体力と場所を追跡するオプションがあります。エリートが一定時間内に倒されない場合、イベントは終了し、エリートはデスポーンします。

events.ymlを開き、`actionEventsEnabled`と`timedEventsEnabled`の値を`false`に設定すると、すべてのイベントを無効にできます。

個々のイベントを無効にする場合は、*~plugins\EliteMobs\customevents*に移動できます。そこには各イベントの設定があります。設定を開き、値`isEnabled`を`false`に設定することで、任意のイベントを無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## 冒険者ギルド

冒険者ギルドは、インストールできる追加のハブワールドであり、プレイヤーが使用できるコマンドのセットでもあります。

ハブワールドがインストールされていない場合、プレイヤーはコマンドを使用する必要があります。それ以外の場合は、ハブワールドがインストールされた状態でコマンドを実行すると、プレイヤーはハブワールドにテレポートされ、コマンドを入力する必要なしにNPCと対話できます。

どのようなコマンドですか？EliteMobsには、プレイヤーがアイテムを売買したり、アイテムを修理したり、アイテムをエンチャントしたりするために使用できるいくつかのコマンドがあります。プレイヤーが使用できるコマンドの詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md&section=npc-commands)を参照してください。

冒険者ギルドとハブワールドのインストール方法の詳細については、[この]($language$/elitemobs/adventurers_guild_world.md)ページをご覧ください。

*AdventurersGuild.yml*を開き、`guildHubIsEnabledv2`を`false`に設定すると、ハブワールドを無効にできます。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## ギルドティア/ランク

プレイヤーが進行し、より良いアイテムを入手すると、最終的に制限に達し、モブがより高いレベルのアイテムをドロップしなくなります。これは、ギルドティア戦利品リミッターと呼ばれます。

ギルドティア戦利品リミッターは、ギルドティアに基づいてプレイヤーが取得できる最高の戦利品を制限し、ティア1からティア10のアイテムまでのデフォルトの制限を、対応するモブレベルとともに適用します。名声レベルはより高いティアのロックを解除し、優れた戦利品とよりタフなモブへのアクセスを可能にし、バランスの取れたゲームプレイを保証します。

このシステムは、ソウルバインドエンチャントと組み合わせて、パワーレベリングの問題を軽減し、サーバーのバランスを維持し、プレイヤーが取得した戦利品への愛着を育みます。ギルドティアの詳細については、[こちら]($language$/elitemobs/guild_tier_loot_limiter.md)をご覧ください。

ギルドティアのすべての設定は調整可能で、*AdventurersGuild.yml*にあります。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## アリーナ

アリーナは、プレイヤーが戦闘に参加できるウェーブベースのチャレンジです。1人または複数のプレイヤーがアリーナに参加して、難易度が上がる敵のウェーブに立ち向かうことができ、チャレンジが進むにつれて報酬が向上します。

冒険者ギルドハブワールドをインストールすると、プレイヤーはウッドリーグアリーナにアクセスできるようになります。これは、ハブワールドのNPCとの対話または*/em*メニューを通じてアクセスできる無料のアリーナです。

[Itch.io](https://magmaguy.itch.io/)にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)でサブスクライブして、追加のアリーナを入手できます。

アリーナを無効にするには、*~plugins\EliteMobs\customarenas*に移動し、アリーナの設定（例：*wood_league.yml*）を開き、値`isEnabled`を見つけて`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## ワールドダンジョン

ワールドダンジョンは、EliteMobs用にダウンロードできる追加のカスタムコンテンツです。ダンジョンには通常、カスタムのエリートボス、カスタムワールド、カスタム戦利品、カスタムボスパワーがあります。

すべてのワールドダンジョンは独自のワールドにあるダンジョンです。つまり、プレイヤーがダンジョンにアクセスすると、そのダンジョン以外には何も存在しないワールドにテレポートされます。

ワールドダンジョンにはいくつかのタイプがあります。タイプの詳細については、[こちら]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory)をクリックしてください。

すべてのワールドダンジョンには設定されたレベルがあり、ダンジョンを試すプレイヤーは、最高のエクスペリエンスを得るためにそのレベル付近である必要があります。

[Itch.io](https://magmaguy.itch.io/)にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)でサブスクライブしてダンジョンを入手できます。[こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のダンジョンがいくつかあります。

個々のダンジョンを無効にするには、*~plugins\EliteMobs\content_packages*に移動し、無効にするダンジョンのダンジョン設定を開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## インスタンスダンジョン

インスタンスダンジョンは、いくつかの点でワールドダンジョンとは異なります。これらはインスタンス化されています。つまり、設計図から新しいワールドが動的に作成され、プレイヤーとその友人にMMOで見られるものと同様のプライベートなダンジョンエクスペリエンスを提供します。

インスタンスダンジョンは、難易度が上がるにつれて、ユニークなボスパワー、増加した体力、優れた戦利品を備えたさまざまな難易度を提供します。また、ロールを導入し、プレイヤーは装備したギアに基づいてタンクまたはDPSロールを採用できます（ロール固有のギアはインスタンスダンジョン専用です）。難易度の仕組みの詳細については、[こちら]($language$/elitemobs/instanced_dungeon_difficulty.md)をご覧ください。

さらに、プレイヤーはインスタンスダンジョン内でお互いを復活させることができるため、迅速に行動すれば、戦闘をすぐに再開できます。

[Itch.io](https://magmaguy.itch.io/)にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)でサブスクライブしてインスタンスダンジョンを入手できます。[こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のインスタンスダンジョンがあります。

個々のダンジョンを無効にするには、*~plugins\EliteMobs\dungeonpackages*に移動し、無効にするダンジョンのダンジョン設定を開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## アドベンチャー

アドベンチャーは、EliteMobsで利用可能な最も広範な追加コンテンツを表し、魅力的なストーリーラインとプレイヤーが乗り出すための多数のクエストを備えた広大なワールドを誇ります。

何百ものカスタムボス、パワー、アイテムを特徴とするアドベンチャーは、没入型のゲーム体験を提供します。アドベンチャー内のクエストは、従来のMMOのクエストと同様に機能し、モブの撃破、アイテムの発見、NPCとの対話、またはそれらの組み合わせなどの目標をプレイヤーに課します。

アドベンチャーは非常に大きいため、内部に他のサブダンジョンやサブアリーナもあります。

アドベンチャーは通常、プレイヤーに設定されたレベル範囲を推奨しますが、最適な楽しさを得るためには、プレイヤーはレベルスケールの下限から冒険を開始することをお勧めします。

[Itch.io](https://magmaguy.itch.io/)にアクセスするか、[Patreon](https://www.patreon.com/magmaguy)でサブスクライブしてアドベンチャーを入手できます。

個々のアドベンチャーを無効にするには、*~plugins\EliteMobs\dungeonpackages*に移動し、無効にするアドベンチャーの設定を開き、`isEnabled`の値を`false`に設定します。アドベンチャーには、アドベンチャーに付属する追加のサブダンジョンとサブアリーナが含まれている場合があるため、アドベンチャーを無効にする場合は、それらも無効にしてください。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## ワームホールテレポート

EliteMobsには、ワームホールと呼ばれる単純なAからBへのテレポート機能もあります。これらは、冒険者ギルドハブワールドで、プレイヤーをそこからダンジョンにテレポートしたり、サーバーのスポーンに戻したりする方法として主に使用されているのがわかります。

通常、粒子でできた六角形、立方体、またはダイヤモンドの形をしています。これらの粒子は、Bedrockクライアントにラグを引き起こすことがあるため、*Wormholes.yml*を開き、`noParticlesMode`を`true`に設定して、粒子効果を無効にすることができます。

独自のワームホールを作成し、好きなように使用できます。方法については、[こちら]($language$/elitemobs/creating_wormholes.md)をクリックしてください。

<div align="center">

<details> 

<summary><b>視覚的な例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## カスタムコンテンツ

EliteMobsでは、[ボス]($language$/elitemobs/creating_bosses.md)、[ダンジョン]($language$/elitemobs/dungeon_packager.md)、[パワー]($language$/elitemobs/creating_powers.md)、[NPC]($language$/elitemobs/creating_npcs.md)、[クエスト]($language$/elitemobs/creating_quests.md)、[アリーナ]($language$/elitemobs/creating_arenas.md)など、独自のコンテンツを作成する機会も提供しています。上記のリストにない他のタイプのコンテンツの作成に関するガイドは、wikiのサイドバーメニューにあります。

最も簡単で効率的なコンテンツ作成エクスペリエンスのために、WebAppを使用することをお勧めします。このツールを使用すると、特にEliteScriptボスパワーの作成を検討している場合に、wikiを広範囲に閲覧して正確性を確保する必要なく、すぐに使用できる構成ファイルを生成できます。[WebAppはこちら](https://magmaguy.com/webapp/webapp.html)にアクセスしてください。

# 管理者とサーバー所有者向け

このプラグインは、サバイバルおよびサバイバルのようなサーバー（スカイブロック、スカイウォーズ、大幅に改造されたサバイバルバリアントなど）向けに設計されています。

このプラグインは、プラグインjarをサーバーにドラッグアンドドロップするだけで簡単に使用できるように設計されています。デフォルトの設定は、私が自分のサーバーで使用している設定であり、時間の経過とともに変更される可能性があります。

**ただし！**カスタマイズ性は、EliteMobsの開発プロセス全体を通して最優先事項でした。プラグインのほぼすべての側面を翻訳、カスタマイズ、無効化、または変更できます。

# 他の開発者向け

このプロジェクトのGPLV3とオープンソースの性質にもかかわらず、現時点ではコードの追加や変更は求めていませんし、受け付けません。プラグインのフォークを歓迎し、それらで何ができるかを見るのを非常に楽しみにしています。ただし、これは私の最初の巨大なプログラミングプロジェクトであり、学習経験でもあります。

**ただし！**これは、私が批判を超越しているとか、フィードバックを聞かないという意味ではありません。まったく逆で、プラグインで行ったことを達成するためのより良い方法を指摘してくれる人が大好きです。このプロジェクトは、私が最初から最後まで書いたものであり、私が認識していない、または理解していないコードスニペットがないものにしたいと思っています。
