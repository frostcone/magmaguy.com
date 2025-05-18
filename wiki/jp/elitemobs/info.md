EliteMobs wikiへようこそ！

# ライセンス

EliteMobsのソースコードは[GPLV3](https://choosealicense.com/licenses/gpl-3.0/)ライセンスの下で提供されており、このwikiは[CC0ライセンス](https://choosealicense.com/licenses/cc0-1.0/)で提供されています。

このwikiの情報は自由に再配布および改変してください。

# バージョン

EliteMobsバージョン9.0.0以降、サポートされるMinecraftバージョンは1.21以上のみです。

古いMinecraftバージョン（1.19.4 - 1.20.4）との互換性を求める場合は、EliteMobsバージョン8を使用してください。

**注意：EliteMobsのどのバージョンも、Minecraftバージョン1.20.5および1.20.6はサポートしていません。**

# EliteMobsは何のためのものですか？

EliteMobsは、様々なボス関連コンテンツを実装することで、Minecraftのエンドゲームを拡張することを目指しています。

これは以下のことを意味します：
- ダイナミックボス（レベル付きモブ）
- カスタムボス
- イベント
- アリーナ
- ワールドベースダンジョン
- インスタンスダンジョン
- オープンワールドランダムダンジョン（BetterStructures連携）
- カスタムアイテム（エリートアイテム/ルート）
- ... その他多数！

このプラグインは、バニラMinecraftのコンテンツを置き換えることを目的とするのではなく、むしろそれを補完し、プレイヤーがEliteMobsコンテンツからオプトアウトできるようにします。EliteMobsのアイテムは通常、PvPやバニラMinecraftの戦闘に影響を与えません。そのダメージと防御ボーナスはEliteMobsとの戦闘中にのみ適用されるためです。

# EliteMobs機能概要

このセクションでは、EliteMobsが提供する**主要な**機能の一部、それらが何であるか、そしてそれらを無効にする方法を見ていきます。全機能リストについては、[このページ]($language$/elitemobs/feature_list.md&section=feature-list)を参照してください。

また、プレイヤーがEliteMobsとどのようにインタラクトすることを意図しているかを知るには、[このページ]($language$/elitemobs/understanding_the_basics_of_elitemobs.md)を確認することもできます。

## ダイナミックボス

ダイナミックボスはEliteMobsの主要機能の一つです。バニラMinecraftのスポーンの一部をエリートモブのスポーンに置き換えます。

エリートは、プレイヤーに挑戦し、倒すとルートドロップの可能性がある報酬を与えるように設計された、よりタフなモブです。エリートのレベルは、プレイヤーが装備している防具と装備品の質によって決定されます。通常のMinecraft装備は、[ここで]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels)説明されているように、素材の質によってレベルが決定されます。しかし、プレイヤーがエリートを倒してより良いルートを獲得するにつれて、最終的には設定されたレベルを持つエリートアイテムを入手し始め、スポーンするエリートのレベルを予測しやすくなります。

これは、プレイヤーのレベルは彼らが着用している装備によって決定され、エリートのレベルはプレイヤーのレベルによって決定されることを意味します。
EliteMobsには経験値システムはなく、プレイヤーのレベル進行はすべて装備に依存します。

*MobCombatSettings.yml*の`damageToEliteMobMultiplierV2`と`damageToPlayerMultiplierV2`の値を変更することで、エリートの難易度を調整できます。これに関する詳細情報は、[ここで]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml)見つけることができます。

この機能を完全に無効にしたい場合は、`doNaturalEliteMobSpawning`の値を`false`に設定することで可能です。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## エリートアイテム/ルート

EliteMobsには、ショップで見つけたり、エリートからドロップしたりするランダム生成アイテムがあります。また、通常ダンジョンや他のエリートコンテンツで見つかるカスタムアイテムもあります。

エリートアイテムはバニラアイテムと似ていますが、通常は追加の特典が付いており、バニラMinecraftで見つけられるものよりも強力です。一部のエリートアイテムには、**エリートシャープネス**や**エリートディフェンス**と呼ばれるステータスが付いています。これらのステータスは、プレイヤーがエリートと戦っているときにのみ適用され、バニラモブには影響しません。

エリートアイテムには、エンチャント、[カスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md)、ポーション効果も付与できます。

エリートアイテムを無効にするには、*ItemSettings.yml*を開き、`doEliteMobsLoot`の値を`false`に設定します。（非推奨、MMORPGレベルの進行が不可能になります。）

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## イベント

イベントはEliteMobsにおけるユニークな遭遇であり、タイマーに基づいてランダムにトリガーされるか、ブロックを採掘したり木を伐採したりするなどの特定のプレイヤーアクションによってトリガーされます。

これらの遭遇には、カスタムのユニークなエリートが登場し、より大きな挑戦をもたらし、倒すと貴重なルートを提供します。

イベントが発生すると、プレイヤーはチャットで通知を受け取り、クリック可能なリンクを介してエリートの体力と位置を追跡するオプションがあります。エリートが一定時間内に倒されない場合、イベントは終了し、エリートはデスポーンします。

すべてのイベントを無効にするには、events.ymlを開き、`actionEventsEnabled`と`timedEventsEnabled`の値を`false`に設定します。

個々のイベントを無効にしたい場合は、*~plugins\EliteMobs\customevents*に移動してください。そこには各イベントの設定ファイルがあり、その設定ファイルを開き、`isEnabled`の値を`false`に設定することで、任意のイベントを無効にできます。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## 冒険者ギルド

冒険者ギルドは、インストールできる追加のハブワールドであり、プレイヤーが使用できるコマンドのセットでもあります。

ハブワールドがインストールされていない場合、プレイヤーはコマンドを使用する必要があります。そうでない場合、ハブワールドがインストールされている状態でコマンドを実行すると、プレイヤーはハブワールドにテレポートされ、そこでコマンドを入力する代わりにNPCとインタラクトできます。

どのようなコマンドがあるのでしょうか？EliteMobsには、プレイヤーがアイテムを売買したり、アイテムを修理したり、アイテムにエンチャントを付けたりするなど、様々なコマンドがあります。プレイヤーが使用できるコマンドの詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md&section=npc-commands)をご覧ください。

冒険者ギルドとハブワールドのインストール方法に関する詳細については、[このページ]($language$/elitemobs/adventurers_guild_world.md)をご覧ください。

ハブワールドを無効にするには、*AdventurersGuild.yml*を開き、`guildHubIsEnabledv2`を`false`に設定します。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## ギルドティア/ランク

プレイヤーが進行し、より良いアイテムを獲得するにつれて、最終的に限界に達し、モブはより高いレベルのアイテムをドロップしなくなります。これはギルドティアルートリミッターと呼ばれます。

ギルドティアルートリミッターは、プレイヤーが獲得できる最高ルートをギルドティアに基づいて制限し、ティア1からティア10のアイテムにデフォルトの制限を適用し、対応するモブレベルを設定します。プレステージレベルはより高いティアをアンロックし、優れたルートとよりタフなモブへのアクセスを可能にし、バランスの取れたゲームプレイを保証します。

このシステムは、ソウルバインドエンチャントと組み合わさることで、パワーレベリングの問題を軽減し、サーバーのバランスを維持し、プレイヤーが獲得したルートへの愛着を育みます。ギルドティアの詳細については、[こちら]($language$/elitemobs/guild_tier_loot_limiter.md)をご覧ください。

ギルドティアのすべての設定は調整可能で、*AdventurersGuild.yml*にあります。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## アリーナ

アリーナは、プレイヤーが戦闘に参加できるウェーブベースのチャレンジです。1人または複数のプレイヤーがアリーナに参加し、ますます難しくなる敵のウェーブに立ち向かうことができ、チャレンジが進むにつれて報酬も向上します。

冒険者ギルドハブワールドをインストールすると、プレイヤーはウッドリーグアリーナにアクセスできます。これは、ハブワールドのNPCとのインタラクションまたは*/em*メニューを通じてアクセスできる無料のアリーナです。

追加のアリーナは、[Itch.io](https://magmaguy.itch.io/)または[Patreon](https://www.patreon.com/magmaguy)で購読することで入手できます。

アリーナを無効にするには、*~plugins\EliteMobs\customarenas*に移動し、アリーナの設定ファイル（例：*wood_league.yml*）を開き、`isEnabled`の値を見つけて`false`に設定します。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## ワールドダンジョン

ワールドダンジョンは、EliteMobs用にダウンロードできる追加のカスタムコンテンツです。ダンジョンには通常、カスタムエリートボス、カスタムワールド、カスタムルート、カスタムボスパワーがあります。

すべてのワールドダンジョンは、独自のワールドに配置されたダンジョンです。つまり、プレイヤーがそれらにアクセスすると、そのダンジョン以外何もないワールドにテレポートされます。

ワールドダンジョンにはいくつかの種類があります。種類の詳細については、[こちら]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory)をクリックしてください。

すべてのワールドダンジョンには設定されたレベルがあり、ダンジョンに挑戦するプレイヤーは最高の体験のためにそのレベル付近であるべきです。

ダンジョンは、[Itch.io](https://magmaguy.itch.io/)または[Patreon](https://www.patreon.com/magmaguy)で購読することで入手できます。[こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のダンジョンもいくつかあります。

個々のダンジョンを無効にするには、*~plugins\EliteMobs\content_packages*に移動し、無効にしたいダンジョンの設定ファイルを開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## インスタンスダンジョン

インスタンスダンジョンは、いくつかの点でワールドダンジョンとは異なります。これらはインスタンス化されており、ブループリントから新しいワールドが動的に作成され、プレイヤーとその友人にMMOで見られるようなプライベートなダンジョン体験を提供します。

インスタンスダンジョンは、ユニークなボスパワー、増加した体力、そして難易度が上がるにつれて優れたルートを提供する様々な難易度を提供します。また、プレイヤーが装備している装備に基づいてタンクまたはDPSの役割を採用できる役割も導入されています（役割固有の装備はインスタンスダンジョン専用です）。難易度がどのように機能するかについては、[こちら]($language$/elitemobs/instanced_dungeon_difficulty.md)で詳細をご覧ください。

さらに、インスタンスダンジョンではプレイヤー同士が蘇生し合うことができ、素早く行動すればすぐに戦闘を再開できます。

インスタンスダンジョンは、[Itch.io](https://magmaguy.itch.io/)または[Patreon](https://www.patreon.com/magmaguy)で購読することで入手できます。[こちら](https://magmaguy.itch.io/em-free-content)からダウンロードできる無料のインスタンスダンジョンもあります。

個々のダンジョンを無効にするには、*~plugins\EliteMobs\dungeonpackages*に移動し、無効にしたいダンジョンの設定ファイルを開き、`isEnabled`の値を`false`に設定します。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## アドベンチャー

アドベンチャーは、EliteMobsで利用できる最も広範な追加コンテンツであり、魅力的なストーリーラインとプレイヤーが着手できる多数のクエストを備えた広大なワールドを誇ります。

数百のカスタムボス、パワー、アイテムを特徴とするアドベンチャーは、没入型のゲーム体験を提供します。アドベンチャー内のクエストは、従来のMMOのクエストと同様に機能し、モブを倒したり、アイテムを見つけたり、NPCとインタラクトしたり、またはそれらの任意の組み合わせなどの目標をプレイヤーに課します。

アドベンチャーは非常に大きいため、内部に他のサブダンジョンやサブアリーナが含まれていることさえあります。

アドベンチャーは通常、プレイヤーに設定されたレベル範囲を推奨しますが、最適な楽しみのために、プレイヤーはレベルスケールの下限で冒険を開始することが推奨されます。

アドベンチャーは、[Itch.io](https://magmaguy.itch.io/)または[Patreon](https://www.patreon.com/magmaguy)で購読することで入手できます。

個々のアドベンチャーを無効にするには、*~plugins\EliteMobs\dungeonpackages*に移動し、無効にしたいアドベンチャーの設定ファイルを開き、`isEnabled`の値を`false`に設定します。アドベンチャーには追加のサブダンジョンやサブアリーナが付随している場合があるため、アドベンチャーを無効にする場合はそれらも無効にしてください。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## ワームホールテレポート

EliteMobsには、ワームホールと呼ばれるシンプルなA地点からB地点へのテレポート機能もあります。これらは主に冒険者ギルドハブワールドで、プレイヤーをそこからダンジョンやサーバーのスポーン地点にテレポートする方法として使用されます。

通常、六角形、立方体、またはダイヤモンドの形をしたパーティクルで構成されています。これらのパーティクルは、Bedrockクライアントにラグを引き起こすことがあるため、*Wormholes.yml*を開き、`noParticlesMode`を`true`に設定することでパーティクル効果を無効にすることができます。

独自のワームホールを作成し、好きなように使用できます。方法については、[こちら]($language$/elitemobs/creating_wormholes.md)をクリックしてください。

<div align="center">

<details>

<summary><b>視覚的な例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## カスタムコンテンツ

EliteMobsでは、[ボス]($language$/elitemobs/creating_bosses.md)、[ダンジョン]($language$/elitemobs/dungeon_packager.md)、[パワー]($language$/elitemobs/creating_powers.md)、[NPC]($language$/elitemobs/creating_npcs.md)、[クエスト]($language$/elitemobs/creating_quests.md)、[アリーナ]($language$/elitemobs/creating_arenas.md)など、独自のコンテンツを作成する機会も提供しています！上記以外のコンテンツの作成ガイドは、wikiのサイドバーメニューで見つけることができます。

最も簡単で効率的なコンテンツ作成体験のために、WebAppの使用を推奨します。このツールを使用すると、特にEliteScriptのボスパワーの作成を検討している場合、正確性を確保するためにwikiを広範囲に閲覧する必要なく、すぐに使用できる設定ファイルを生成できます。[WebAppはこちら](https://magmaguy.com/webapp/webapp.html)からアクセスできます。

# 管理者＆サーバーオーナー向け

このプラグインは、サバイバルおよびサバイバルライクなサーバー（Skyblock、Skywars、大幅に改造されたサバイバルバリアントなど）向けに設計されています。

このプラグインは、プラグインjarをサーバーにドラッグアンドドロップするだけで簡単に使用できるように意図されています。デフォルト設定は私が自分のサーバーで使用しているものであり、時間の経過とともに変更される可能性があります。

**しかし！** EliteMobsの開発プロセス全体を通じて、カスタマイズ性が最優先事項でした。プラグインのほぼすべての側面は、翻訳、カスタマイズ、無効化、または変更が可能です。

# 他の開発者向け

このプロジェクトはGPLV3およびオープンソースの性質を持っていますが、現時点ではコードの追加や変更を求めていませんし、受け入れません。プラグインのフォークは歓迎しており、それらをどのように活用されるかを見るのは非常に嬉しいことです。しかし、これは私の最初の大規模なプログラミングプロジェクトであり、学習経験でもあります。

**しかし！** これは私がどんな批判も受け付けないとか、フィードバックを聞かないという意味ではありません。むしろその逆で、プラグインで行ったことについてより良い方法を指摘してもらえるのは大好きです。私はこのプロジェクトが、私が最初から最後まで書いたものであり、私が知らない、あるいは理解していないコードスニペットがないものであることを望んでいます。