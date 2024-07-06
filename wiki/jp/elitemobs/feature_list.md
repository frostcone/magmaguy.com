```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 機能リスト

EliteMobs には、多くの機能が搭載されており、見逃してしまうことも多いです。すべての機能を知っているかを確認するためのチェックリストを以下に示します！

- エリートモブは処理で生成できます。
- エリートモブは、非常に高度なカスタマイズオプションを持つ [カスタムボス]($language$/elitemobs/creating_bosses.md) にすることができます。
- カスタムエリートモブは、特定の場所にスポーンして、定期的にリスポーンするように設定できます ([ワールドボス]($language$/elitemobs/creating_world_bosses.md)).
- カスタムエリートモブは、異なるボスフェーズを持つように設定できます ([ボスフェーズ]($language$/elitemobs/creating_boss_phases.md)).
- loot は動的にすることができます。
- loot は [カスタム]($language$/elitemobs/creating_items.md) にすることができます。
- カスタムloot は、[カスタムモデル]($language$/elitemobs/creating_items.md&section=custommodelid&section=custommodelid) を使用できます。
- loot は、他のプレイヤーが使用できないように、1 人のプレイヤーに [ソウルバインド]($language$/elitemobs/soulbind.md) できます。
- loot には、プレイヤーまたはターゲットに適用される、継続的な [ポーション効果]($language$/elitemobs/creating_items.md&section=potioneffects) と、攻撃時に適用されるポーション効果を設定できます。
- さまざまなカスタム [EliteMobs エンチャント]($language$/elitemobs/custom_enchantments_list.md) があります。
- 「Elite」を接頭辞とするすべてのエンチャント（「Elite Protection」など）は、Elite Mob との戦闘時にのみ適用されます。
- Elite Mobs には、ギルドの進行状況に基づいてロックできる [宝箱]($language$/elitemobs/creating_treasure_chests.md) があります。宝箱は、ミミック（カスタムボスをスポーン）に変身する可能性があります。
- [LibsDisguises]($language$/elitemobs/libsdisguises.md) を使用して、カスタムボスを他のプレイヤーを含む、他のものに変装させることができます。
- [Vault]($language$/elitemobs/vault.md) を使用して、EliteMobs の経済システムをサーバーの他の経済システムに接続できます（推奨されていません）。
- [WorldGuard]($language$/elitemobs/worldguard_flags.md) を使用して、ワールドのどこで Elite Mob をスポーンさせるか、スポーンさせないか、非エリートをスポーンさせるか、スポーンさせないか、アンチエクスプロイトシステムが適用されない場所、スポーンするエリートのレベルの最小値と最大値を設定するか、EliteMobs イベントが発生しない場所を設定できます。
- PlaceholderAPI ([PAPI]($language$/elitemobs/placeholders.md)) を使用して、チャット、スコアボードなど、さまざまな EliteMobs の要素を接続できます。
- [DiscordSRV]($language$/elitemobs/discordsrv.md) を使用して、EliteMobs のアナウンスを Discord サーバーに投稿できます（特定のワールドボスのスポーンや死亡など）。
- 一部のボスは、プレイヤーの [イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)（鉱業など）に基づいてスポーンします。
- 一部のボスは、サーバーの [イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)（隕石がワールドに墜落するなど）に基づいてスポーンします。
- EliteMobs には、NPC システム ([詳細はこちら]($language$/elitemobs/adventurers_guild_world.md)) があり、コマンドを使用するのではなく、NPC を通してのみ取引を行わせることができます。
- **EliteMobs の [レイドとミニダンジョン]($language$/elitemobs/dungeons.md) は、Discord で無料でダウンロードできます。さらに多くのダンジョンは、Patreon で提供されています。**
- EliteMobs は、難易度とクラスの役割のサポートをすべて含めた、[インスタンスダンジョン]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=instanced-dungeoneering) を完全にサポートしています。
- [アドベンチャーギルド]($language$/elitemobs/adventurers_guild_world.md) のワールドを、EliteMobs NPC のハブとして使用できます。このワールドは、サーバーにアップロードすると自動的にセットアップされます（オーバーワールドの代替ではありません！）。
- エリートを倒すダイナミックなクエストがあります。
- プレイヤーがレベルアップして、より良い装備や報酬（最大体力の増加、回避率の増加など）を獲得できる [ギルドシステム]($language$/elitemobs/guild_tier_loot_limiter.md) があります。
- ギルドシステムには、[プレステージシステム]($language$/elitemobs/prestige_system.md) があり、プレイヤーはこれまでに獲得した EliteMobs の進捗状況を失う代わりに、より多くのランクとより良い報酬をアンロックできます。
- デフォルトでは、装備はギルドランクによって制限されているため、プレイヤーはより多くのチャレンジングなメカニズムを体験する必要があります。
- 地形を悪用して簡単に装備をファームすることを防ぐ、アンチエクスプロイトシステムがあります。
- 処理で生成されたエリートモブの周囲の軌跡は、そのモブが持つパワーを示しています。
- レベルの高いエリートほど、[パワー]($language$/elitemobs/creating_bosses.md&section=easy-configuration---premade-powers) が多く、強力になります。
- 装備のレベルが高くなるほど、スポーンするエリートのレベルが高くなり、ドロップする装備のレベルも高くなります。
- すべてのプレイヤーコマンドは、`/em` コマンドに集約されているため、プレイヤーは、そのコマンド以外のコマンドを覚える必要はありません。
- EliteMobs は、デフォルトで権限不要モードを使用しています。これは、管理者がプラグインを基本的に動作させるために、さらに設定を行う必要がないことを意味します（ただし、AG ワールドとダンジョンは強く推奨されます）。
- EliteMobs は、すべて 1 人の男によって開発されました。助けが必要な場合は、カフェインをください。[Patreon](https://www.patreon.com/magmaguy) でも構いません。


```

