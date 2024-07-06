```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs へようこそ！

# ライセンス

EliteMobs のソースコードは [GPLV3](https://choosealicense.com/licenses/gpl-3.0/) ライセンスで、この wiki は [CC0 ライセンス](https://choosealicense.com/licenses/cc0-1.0/) で提供されています。

この wiki の情報は自由に再配布および変更できます。

# バージョン

EliteMobs バージョン 9.0.0 以降、サポートされている Minecraft バージョンは 1.21 以降のみです。

以前の Minecraft バージョン (1.19.4 - 1.20.4) との互換性を求める場合は、EliteMobs バージョン 8 を使用してください。

**注意: EliteMobs のどのバージョンも、Minecraft バージョン 1.20.5 と 1.20.6 はサポートしていません。**

# EliteMobs の目的

EliteMobs は、さまざまなボス関連のコンテンツを実装することで、Minecraft のエンドゲームを拡張することを目的としています。

具体的には、次のものが含まれます。

- ダイナミックボス (レベルアップしたモブ)
- カスタムボス
- イベント
- アリーナ
- ワールドベースのダンジョン
- インスタンスダンジョン
- オープンワールドのランダムダンジョン (BetterStructures との統合)
- カスタムアイテム (エリートアイテム/loot)
- その他多数！

このプラグインは、vanilla Minecraft コンテンツを置き換えることを目的とするのではなく、補完することを目的としています。プレイヤーは、必要に応じて EliteMobs コンテンツをオプトアウトできます。EliteMobs のアイテムは、通常、PvP や vanilla Minecraft の戦闘には影響しません。これは、これらのアイテムのダメージと防御のボーナスが、EliteMobs との戦闘中にのみ適用されるためです。

# EliteMobs の機能の概要

このセクションでは、EliteMobs が提供する **主要な** 機能の一部とその機能、および機能を無効にする方法について説明します。機能の完全なリストについては、[こちら]($language$/elitemobs/feature_list.md&section=feature-list) をご覧ください。

EliteMobs との正しいプレイヤーのやり取り方法については、[こちら]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) をご覧ください。

## ダイナミックボス

ダイナミックボスは、EliteMobs の主要な機能の 1 つです。これは、vanilla Minecraft のスポーンの一定の割合を、エリートモブのスポーンに置き換えます。

エリートは、プレイヤーにチャレンジを与え、倒すと loot をドロップする可能性のある、より強力なモブです。エリートのレベルは、プレイヤーが装備しているアーマーと装備の質によって決まります。[こちら]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels) で説明されているように、通常の Minecraft 装備のレベルは素材の質によって決まります。しかし、プレイヤーがエリートを倒してより良い loot を獲得していくと、最終的にはレベルが設定されたエリートアイテムを入手するようになり、スポーンするエリートのレベルを予測しやすくなります。

つまり、プレイヤーのレベルは装備によって決まり、エリートのレベルはプレイヤーのレベルによって決まります。
EliteMobs には経験値システムはありません。プレイヤーのレベルアップはすべて、装備に依存します。

`MobCombatSettings.yml` の `damageToEliteMobMultiplierV2` と `damageToPlayerMultiplierV2` の値を変更することで、エリートの難易度を調整できます。詳細については、[こちら]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml) をご覧ください。

この機能を完全に無効にするには、`doNaturalEliteMobSpawning` の値を `false` に設定します。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## エリートアイテム/loot

EliteMobs には、ショップで見つけることも、エリートからドロップすることもできる、ランダムに生成されたアイテムが用意されています。ダンジョンやその他のエリートコンテンツで見つかるカスタムアイテムもあります。

エリートアイテムは vanilla アイテムと同じですが、通常は追加の goodies が装備されており、vanilla MineCraft で見つけることができるものよりも強力です。一部のエリートアイテムには、**エリートシャープネス** と **エリートディフェンス** と呼ばれるステータスが付属しています。これらのステータスは、プレイヤーがエリートと戦っている場合にのみ適用され、vanilla モブには影響しません。

エリートアイテムには、エンチャント、[カスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md)、およびポーション効果を付与することもできます。

Elite アイテムを無効にするには、`ItemSettings.yml` を開き、`doEliteMobsLoot` の値を `false` に設定します。（推奨されません。MMORPG レベルの進行が不可能になります）。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## イベント

イベントは、EliteMobs のユニークな遭遇です。これは、タイマーに基づいて、または特定のプレイヤーアクション（ブロックの採掘や木の伐採など）によって、ランダムに発生します。

これらの遭遇には、カスタムのユニークなエリートが登場し、より大きなチャレンジを課し、倒すと貴重な loot を提供します。

イベントが発生すると、プレイヤーにはチャットに通知が表示されます。通知には、クリック可能なリンクでエリートの体力と場所を追跡できるオプションが含まれています。エリートが一定時間内に倒されない場合、イベントは終了し、エリートは消滅します。

すべてのイベントを無効にするには、`events.yml` を開き、`actionEventsEnabled` と `timedEventsEnabled` の値を `false` に設定します。

個別のイベントを無効にするには、`~plugins\EliteMobs\customevents` に移動します。各イベントの設定ファイルがあるので、設定ファイルを開いて `isEnabled` の値を `false` に設定することで、イベントを無効にできます。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## アドベンチャーギルド

アドベンチャーギルドは、インストールできる追加のハブワールドであり、プレイヤーが使用できるコマンドのセットでもあります。

ハブワールドがインストールされていない場合は、プレイヤーはコマンドを使用する必要があります。一方、ハブワールドがインストールされている状態でコマンドを実行すると、プレイヤーはハブワールドにテレポートされ、そこでコマンドを入力するのではなく、NPC と対話できます。

どのようなコマンドですか？EliteMobs には、プレイヤーがアイテムの販売や購入、アイテムの修理、アイテムのエンチャントなどに使用できるコマンドがいくつかあります。プレイヤーが使用できるコマンドの詳細については、[こちら]($language$/elitemobs/permissions_and_commands.md&section=npc-commands) をご覧ください。

アドベンチャーギルドの詳細と、ハブワールドのインストール方法については、[こちら]($language$/elitemobs/adventurers_guild_world.md) のページをご覧ください。

ハブワールドを無効にするには、`AdventurersGuild.yml` を開き、`guildHubIsEnabledv2` を `false` に設定します。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## ギルドティア/ランク

プレイヤーがレベルアップしてより良いアイテムを獲得していくと、最終的には制限に達し、モブはそれ以上のレベルのアイテムをドロップしなくなります。これを、ギルドティアloot制限と呼びます。

ギルドティアloot制限は、プレイヤーが取得できる最高の loot を、ギルドティアに基づいて制限します。ティア 1 から 10 のアイテムに、対応するモブレベルでデフォルトの制限が適用されます。プレステージレベルは、より高いティアをアンロックし、より優れた loot とより強力なモブへのアクセスを可能にすることで、バランスのとれたゲームプレイを実現します。

このシステムは、ソウルバインドエンチャントと組み合わせることで、パワーレベルアップの問題を軽減し、サーバーのバランスを維持し、プレイヤーが獲得した loot への愛着を高めます。ギルドティアの詳細については、[こちら]($language$/elitemobs/guild_tier_loot_limiter.md) をご覧ください。

ギルドティアのすべての設定は調整可能で、`AdventurersGuild.yml` にあります。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## アリーナ

アリーナは、プレイヤーが戦闘に参加できる、ウェーブベースのチャレンジです。1 人または複数のプレイヤーがアリーナに参加して、徐々に難しくなる敵のウェーブに立ち向かうことができます。チャレンジが進むにつれて報酬も向上します。

アドベンチャーギルドのハブワールドをインストールすると、プレイヤーは Wood League Arena にアクセスできます。これは、ハブワールドの NPC と対話するか、`/em` メニューからアクセスできる無料のアリーナです。

追加のアリーナを取得するには、[Itch.io](https://magmaguy.itch.io/) にアクセスするか、[Patreon](https://www.patreon.com/magmaguy) に登録してください。

アリーナを無効にするには、`~plugins\EliteMobs\customarenas` に移動し、アリーナの構成ファイル（たとえば、`wood_league.yml` など）を開いて、`isEnabled` の値を `false` に設定します。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## ワールドダンジョン

ワールドダンジョンは、EliteMobs でダウンロードできる追加のカスタムコンテンツです。ダンジョンには、通常、カスタムのエリートボス、カスタムワールド、カスタムloot、カスタムのボスパワーが含まれています。

すべてのワールドダンジョンは、そのダンジョンしかないワールドに置かれるため、プレイヤーがダンジョンにアクセスすると、そのワールドにテレポートされます。

ワールドダンジョンのタイプはいくつかあります。タイプについて詳しくは、[こちら]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory) をクリックしてください。

すべてのワールドダンジョンには、設定されたレベルがあり、ダンジョンに挑戦するプレイヤーは、最高の体験のためにそのレベル周辺にいる必要があります。

ダンジョンを取得するには、[Itch.io](https://magmaguy.itch.io/) にアクセスするか、[Patreon](https://www.patreon.com/magmaguy) に登録してください。[こちら](https://magmaguy.itch.io/em-free-content) から、無料でダウンロードできるダンジョンがいくつかあります。

個別のダンジョンを無効にするには、`~plugins\EliteMobs\dungeonpackages` に移動して、無効にするダンジョンの設定ファイルを開き、`isEnabled` の値を `false` に設定します。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## インスタンスダンジョン

インスタンスダンジョンは、ワールドダンジョンとはいくつかの点で異なります。インスタンス化されるため、プレイヤーとそのフレンドに、MMO に見られるようなプライベートなダンジョン体験を提供するために、ブループリントから新しいワールドが動的に作成されます。

インスタンスダンジョンには、さまざまな難易度が用意されており、難易度が上がるにつれて、ユニークなボスパワー、体力が増加し、より優れた loot が獲得できます。また、ロールが導入されており、プレイヤーは装備した装備に基づいて、タンクまたは DPS のロールを選択できます（ロールに特化した装備は、インスタンスダンジョンでのみ使用できます）。難易度の仕組みについて詳しくは、[こちら]($language$/elitemobs/instanced_dungeon_difficulty.md) をご覧ください。

さらに、プレイヤーはインスタンスダンジョン内で互いに蘇らせることができます。これにより、素早く行動すれば、戦闘をすぐに再開できます。

インスタンスダンジョンを取得するには、[Itch.io](https://magmaguy.itch.io/) にアクセスするか、[Patreon](https://www.patreon.com/magmaguy) に登録してください。[こちら](https://magmaguy.itch.io/em-free-content) から、無料でダウンロードできるインスタンスダンジョンがいくつかあります。

個別のダンジョンを無効にするには、`~plugins\EliteMobs\dungeonpackages` に移動して、無効にするダンジョンの設定ファイルを開き、`isEnabled` の値を `false` に設定します。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## アドベンチャー

アドベンチャーは、EliteMobs で利用できる最も広範な追加コンテンツです。魅力的なストーリーと、プレイヤーが冒険できる多くのクエストを備えた、広大なワールドを誇ります。

数百のカスタムボス、パワー、アイテムが用意されており、アドベンチャーは没入型のゲーム体験を提供します。アドベンチャーのクエストは、伝統的な MMO のクエストと同様に機能します。プレイヤーは、モブを倒す、アイテムを見つける、NPC と対話する、またはこれらの組み合わせなど、さまざまな目標を達成するよう求められます。

アドベンチャーは非常に大きいため、他のサブダンジョンやサブアリーナが内部に存在します。

アドベンチャーでは、通常、プレイヤーのレベル範囲が推奨されていますが、最適な楽しみのためには、レベルスケールの低い方のレベルから始めることをお勧めします。

アドベンチャーを取得するには、[Itch.io](https://magmaguy.itch.io/) にアクセスするか、[Patreon](https://www.patreon.com/magmaguy) に登録してください。

個別のアドベンチャーを無効にするには、`~plugins\EliteMobs\dungeonpackages` に移動して、無効にするアドベンチャーの設定ファイルを開き、`isEnabled` の値を `false` に設定します。アドベンチャーには、サブダンジョンやサブアリーナが追加されている可能性があるため、アドベンチャーを無効にする場合は、それらも無効にしてください。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## ワープホールテレポート

EliteMobs には、A から B に移動できるシンプルなテレポートである、ワープホールも用意されています。これは、アドベンチャーギルドのハブワールドで、プレイヤーをそこからダンジョンにテレポートしたり、サーバーのスポーン地点に戻したりするために、最もよく使用されます。

ワープホールは、通常、六角形、立方体、またはダイヤモンドの形をしたパーティクルで構成されています。これらのパーティクルは、Bedrock クライアントでラグを引き起こす場合があるため、`Wormholes.yml` を開き、`noParticlesMode` を `true` に設定することで、パーティクルエフェクトを無効にすることができます。

独自のワープホールを作成して、自由に使用できます。詳細については、[こちら]($language$/elitemobs/creating_wormholes.md) をクリックしてください。

<div align="center">

<details> 

<summary><b>ビジュアル例</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## カスタムコンテンツ

EliteMobs では、[ボス]($language$/elitemobs/creating_bosses.md)、[ダンジョン]($language$/elitemobs/dungeon_packager.md)、[パワー]($language$/elitemobs/creating_powers.md)、[NPC]($language$/elitemobs/creating_npcs.md)、[クエスト]($language$/elitemobs/creating_quests.md)、[アリーナ]($language$/elitemobs/creating_arenas.md) など、独自のコンテンツを作成することもできます。上記以外のコンテンツの作成方法については、wiki のサイドバーメニューをご覧ください。

最も簡単で効率的なコンテンツ作成エクスペリエンスを実現するには、WebApp を使用することをお勧めします。このツールを使用すると、特に EliteScript ボスパワーの作成を検討している場合、正しさを確認するために wiki を広範囲にわたって参照する必要なく、すぐに使用できる設定ファイルを生成できます。[WebApp へのアクセスはこちら](https://magmaguy.com/webapp/webapp.html).

# 管理者とサーバーオーナー向け

このプラグインは、サバイバルサーバーやサバイバルサーバーに似たサーバー（Skyblock、Skywars、および高度に改造されたサバイバルバリアントなど）向けに設計されています。

このプラグインは、プラグインの jar ファイルをサーバーにドラッグアンドドロップするだけで簡単に使用できます。デフォルト設定は、私が自分のサーバーで使用している設定で、時間の経過とともに変更される可能性があります。

**ただし！** EliteMobs の開発プロセスでは、カスタマイズ性が最優先事項でした。このプラグインのほぼすべての側面は、翻訳、カスタマイズ、無効化、または変更できます。


# その他の開発者向け

このプロジェクトは GPLV3 でオープンソースですが、現時点ではコードの追加や変更は受け付けていません。プラグインのフォークは歓迎し、フォークを使って何ができるかを見るのはとても楽しいことです。しかし、これは私の最初の大きなプログラミングプロジェクトであり、そのため、学びの機会でもあります。

**ただし！** これは、私が批判を超越しているとか、フィードバックに耳を傾けないと言っているわけではありません。むしろ、私がプラグインで行ったことについて、より良い方法を指摘してくれると、とても嬉しいです。私は、このプロジェクトを最初から最後まで、自分が書いたものにしていきたいと考えています。そのため、自分が知らない、または理解していないコードスニペットは含まないようにします。


```

