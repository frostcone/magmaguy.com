# 機能リスト

EliteMobsには非常に多くの機能があるため、見逃してしまうこともあります。これらすべてをご存知か、チェックリストで確認してみましょう！

- エリートモブは手続き的に生成できます。
- エリートモブは、非常に詳細なカスタマイズオプションを持つ[カスタムボス]($language$/elitemobs/creating_bosses.md)にできます。
-
カスタムエリートモブは、特定の場所に継続的にスポーンおよびリスポーンするように設定できます（[ワールドボス]($language$/elitemobs/creating_world_bosses.md)）。
- カスタムエリートモブは、異なるボスフェーズを持つように設定できます（[ボスフェーズ]($language$/elitemobs/creating_boss_phases.md)）。
- ルートは動的にできます。
- ルートは[カスタム]($language$/elitemobs/creating_items.md)にできます。
- カスタムルートは[カスタムモデル]($language$/elitemobs/creating_items.md&section=custommodelid&section=custommodelid)
  を使用できます。
- ルートは1人のプレイヤーに[ソウルバウンド]($language$/elitemobs/soulbind.md)にでき、他のプレイヤーが使用できないようにできます。
-
ルートには、プレイヤーまたはターゲットに適用される継続的およびヒット時の[ポーション効果]($language$/elitemobs/creating_items.md&section=potioneffects)
を含めることができます。
- いくつかのカスタム[EliteMobsエンチャント]($language$/elitemobs/custom_enchantments_list.md)があります。
- 「エリート保護」のような「Elite」で始まるすべてのエンチャントは、エリートモブとの戦闘でのみ適用されます。
- Elite
  Mobsには、ギルドの進行状況に基づいてロックでき、ミミック（カスタムボスをスポーン）になる可能性のある[宝箱]($language$/elitemobs/creating_treasure_chests.md)
  があります。
- [LibsDisguises]($language$/elitemobs/libsdisguises.md)を使用して、カスタムボスを他のプレイヤーを含む他のものに偽装できます！
- [Vault]($language$/elitemobs/vault.md)を使用して、EliteMobsのエコノミーを他のエコノミーに接続できます（推奨されません）。
- [WorldGuard]($language$/elitemobs/worldguard_flags.md)
  を使用して、エリートモブがスポーンできる場所、スポーンできない場所、非エリートがスポーンできる場所とできない場所、アンチエクスプロイトシステムが適用されない場所、そこにスポーンするエリートの最低レベルと最高レベルを設定し、EliteMobsイベントが発生できないエリアを設定できます。
- PlaceholderAPI（[PAPI]($language$/elitemobs/placeholders.md)）を使用して、さまざまなEliteMobs要素をチャット、スコアボードなどに接続できます。
- [DiscordSRV]($language$/elitemobs/discordsrv.md)を使用して、特定のワールドボスのスポーンや死亡などのEliteMobsアナウンスをDiscordサーバーに投稿できます。
- 一部のボスは、採掘などのプレイヤー[イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)に基づいてスポーンします。
- 一部のボスは、隕石が世界に衝突するなどのサーバー[イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)に基づいてスポーンします。
-
EliteMobsには、コマンドを使用する代わりにNPCを介してのみプレイヤーに取引を強制できるNPCシステム（[詳細はこちら]($language$/elitemobs/adventurers_guild_world.md)
）があります。
- **[EliteMobsの隠れ家とミニダンジョン]($language$/elitemobs/dungeons.md)はDiscordで無料でダウンロードでき、Patreonではさらに多くダウンロードできます
  **
-
EliteMobsは、完全な難易度とクラスロールサポートを備えた[インスタンスダンジョン]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=instanced-dungeoneering)
を完全にサポートしています。
- [冒険者ギルド]($language$/elitemobs/adventurers_guild_world.md)ワールドをEliteMobs
  NPCのハブとして使用できます。サーバーにアップロードすると自動的に設定されます（オーバーワールドの代替ではありません！）。
- エリートを倒すための動的なクエストがあります。
-
プレイヤーがより良い装備や、最大体力や回避率の増加などの報酬を得るために進歩する[ギルドシステム]($language$/elitemobs/guild_tier_loot_limiter.md)
があります。
-
ギルドシステムには、これまでのEliteMobsの進行状況をすべて失う代わりに、より多くのランクとより良い報酬をアンロックできる[プレステージシステム]($language$/elitemobs/prestige_system.md)
があります。
- デフォルトでは、装備はギルドランクによって制限されており、プレイヤーがより挑戦的なメカニズムとより対話することを推奨しています。
- 地形を悪用して簡単に装備をファームすることを防ぐアンチエクスプロイトシステムがあります。
- 手続き的に生成されたエリートモブの周りのトレイルは、それらが持っているパワーを示しています。
-
より高いレベルのエリートは、より強力な[パワー]($language$/elitemobs/creating_bosses.md&section=easy-configuration---premade-powers)
をより多く持っています。
- 装備が高いほど、スポーンするエリートのレベルが高くなり、ドロップする装備のレベルが高くなります。
- すべてのプレイヤーコマンドは/emコマンドに集中しています。つまり、プレイヤーはそれ以外のコマンドを覚える必要はありません。
- EliteMobsは、デフォルトで許可なしモードを使用します。これは、プラグインが基本的に機能するために管理者からの追加設定を必要としないことを意味します（ただし、AGワールドとダンジョンは強く推奨されます）。
-
EliteMobsは、1人の男によって100％開発されました。助けを送ってください。できればカフェインの形で。[Patreon](https://www.patreon.com/magmaguy)
でも構いません。
