```markdown
# 機能リスト

EliteMobsには非常に多くの機能があるため、見落としがちです。ここでは、それらすべてを知っているかどうかのチェックリストを示します！

- エリートモブはプロシージャル生成できます。
- エリートモブは[カスタムボス]($language$/elitemobs/creating_bosses.md)にすることができ、非常に詳細なカスタマイズオプションがあります。
- カスタムエリートモブは、1つの場所に継続的にスポーンおよびリスポーンするように設定できます（[ワールドボス]($language$/elitemobs/creating_world_bosses.md)）。
- カスタムエリートモブは、異なるボスフェーズを持つように設定できます（[ボスフェーズ]($language$/elitemobs/creating_boss_phases.md)）。
- ルートは動的です。
- ルートは[カスタム]($language$/elitemobs/creating_items.md)にできます。
- カスタムルートは[カスタムモデル]($language$/elitemobs/creating_items.md&section=custommodelid&section=custommodelid)を使用できます。
- ルートは1人のプレイヤーに[ソウルバウンド]($language$/elitemobs/soulbind.md)することができ、他のプレイヤーが使用するのを防ぎます。
- ルートには、プレイヤーまたはターゲットに適用される継続的およびヒット時の[ポーション効果]($language$/elitemobs/creating_items.md&section=potioneffects)を持たせることができます。
- いくつかのカスタム[EliteMobsエンチャント]($language$/elitemobs/custom_enchantments_list.md)があります。
- 「Elite」という接頭辞が付いたすべてのエンチャント（「Elite Protection」など）は、エリートモブと戦っている場合にのみ適用されます。
- Elite Mobsには、ギルドの進行状況に基づいてロックでき、ミミック（カスタムボスをスポーン）になる可能性のある[宝箱]($language$/elitemobs/creating_treasure_chests.md)があります。
- [LibsDisguises]($language$/elitemobs/libsdisguises.md)を使用して、カスタムボスを他のプレイヤーを含むあらゆるものに変装させることができます！
- [Vault]($language$/elitemobs/vault.md)を使用して、EliteMobsエコノミーを他のエコノミーに接続できます（非推奨）。
- [WorldGuard]($language$/elitemobs/worldguard_flags.md)を使用して、ワールド内のどこにエリートモブがスポーンできるか、できないか、非エリートがスポーンできるか、できないか、アンチエクスプロイトシステムが適用されない場所、そこでスポーンするエリートの最小レベルと最大レベル、およびEliteMobsイベントが発生できないエリアを設定できます。
- PlaceholderAPI（[PAPI]($language$/elitemobs/placeholders.md)）を使用して、さまざまなEliteMobs要素をチャット、スコアボードなどに接続できます。
- [DiscordSRV]($language$/elitemobs/discordsrv.md)を使用して、特定のワールドボスのスポーンや死亡などのEliteMobsアナウンスをDiscordサーバーに投稿できます。
- 一部のボスは、採掘などのプレイヤー[イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)に基づいてスポーンします。
- 一部のボスは、隕石がワールドに衝突するなど、サーバー[イベント]($language$/elitemobs/elitemobs+creating_events.md&section=what-are-custom-events?)に基づいてスポーンします。
- EliteMobsにはNPCシステムがあります（[詳細はこちら]($language$/elitemobs/adventurers_guild_world.md)）。これにより、プレイヤーはコマンドを使用する代わりにNPCを介してのみ取引するように強制できます。
- **Discordで無料でダウンロードできる[EliteMobsの隠れ家とミニダンジョン]($language$/elitemobs/dungeons.md)があり、Patreonにはさらに多くのものがあります**
- EliteMobsは、完全な難易度とクラスロールのサポートを備えた[インスタンスダンジョン]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=instanced-dungeoneering)を完全にサポートしています。
- [冒険者ギルド]($language$/elitemobs/adventurers_guild_world.md)ワールドをEliteMobs NPCのハブとして使用できます。サーバーにアップロードすると自動的にセットアップされます（オーバーワールドの代替ではありません！）。
- エリートを倒すための動的なクエストがあります。
- プレイヤーが進行して、最大体力の増加や回避率の向上などのより良い装備と報酬を得るための[ギルドシステム]($language$/elitemobs/guild_tier_loot_limiter.md)があります。
- ギルドシステムには、プレイヤーがこれまでのEliteMobsの進行状況をすべて失う代わりに、より多くのランクとより良い報酬をアンロックできる[プレステージシステム]($language$/elitemobs/prestige_system.md)があります。
- 装備はデフォルトでギルドランクによって制限されており、人々がより挑戦的なメカニクスと交流することを奨励しています。
- 地形を悪用してプレイヤーが簡単に装備をファームするのを防ぐアンチエクスプロイトシステムがあります。
- プロシージャル生成されたエリートモブの周りの軌跡は、彼らが持っている能力を示しています。
- レベルの高いエリートは、より多くの、より強力な[能力]($language$/elitemobs/creating_bosses.md&section=easy-configuration---premade-powers)を持っています。
- 装備のレベルが高いほど、スポーンするエリートのレベルが高くなり、ドロップする装備のレベルも高くなります。
- すべてのプレイヤーコマンドは/emコマンドに一元化されており、プレイヤーはそれ以外のコマンドを覚える必要がありません。
- EliteMobsはデフォルトでパーミッションレスモードを使用しており、プラグインが基本的に機能するために管理者からの追加設定は必要ありません（ただし、AGワールドとダンジョンは強く推奨されます）。
- EliteMobsは1人の開発者によって100%開発されました。助けてください。できればカフェインの形で。 [Patreon](https://www.patreon.com/magmaguy)でも構いません。
```