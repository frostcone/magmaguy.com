EliteMobs用のPAPIプレースホルダーの全リストは以下の通りです。

| プレースホルダー | 説明 |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     プレイヤーのコンバットティア（プレイヤーの周囲にエリートモブをスポーンさせるために使用されるティア）を表示します。     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     プレイヤーのアクティブなギルドランクを数値で表示します。プレイヤーが意図的にランクを下げた場合、アクティブなギルドランクが実際の最大ギルドランクよりも低くなる可能性があることに注意してください。     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     プレイヤーの最大ギルドランクを数値で表示します。プレイヤーが意図的にランクを下げた場合、これが現在アクティブなギルドランクよりも高くなる可能性があることに注意してください。     |
| `%elitemobs_player_active_guild_rank_name%`         |     アクティブなギルドランクの名前を表示します。プレイヤーのアクティブなギルドランクを表示したい場合は、おそらくこのオプションを使用することをお勧めします。     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     最大ギルドランクの名前を表示します。プレイヤーの最大ギルドランクを表示したい場合は、おそらくこのオプションを使用することをお勧めします。     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     プレイヤーのプレステージレベルを数値で表示します。     |
| `%elitemobs_player_money%`         |     プレイヤーが現在持っているEliteMobs通貨の量を表示します。     |
| `%elitemobs_player_top_tier%`         |     オンラインプレイヤーの中で最も高い脅威ティアを表示します。     |
| `%elitemobs_player_top_guild_rank%`         |     オンラインプレイヤーの中で最も高いギルドランクを持つプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージランクとアクティブなギルドランクの短縮版を表示します。特にチャットや、ランク名がスペースを取りすぎない場所（スコアボードなど）向けです。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれユリの紋章と星のUnicodeで表し、数値にはローマ数字を使用します。これはAdventurersGuild.yml設定ファイルで100%設定可能です。     |
| `%elitemobs_player_top_guild_rank%`         |     オンラインプレイヤーの中で最も高いギルドランクを持つプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージランクとアクティブなギルドランクの短縮版を表示します。特にチャットや、ランク名がスペースを取りすぎない場所（スコアボードなど）向けです。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれユリの紋章と星のUnicodeで表し、数値にはローマ数字を使用します。これはAdventurersGuild.yml設定ファイルで100%設定可能です。     |
| `%elitemobs_player_kills%`         |     プレイヤーが倒したエリートの数を表示します。     |
| `%elitemobs_player_deaths%`         |     プレイヤーがエリートによって倒された回数を表示します。     |

# 使用方法

1) ***EliteMobsはPAPI eCloudの使用を必要としません。*** EliteMobsがサーバーにあれば動作します。このステップはスキップできます。
2) プレースホルダーを使用したい場合は、サーバーに***PAPI***がインストールされている必要があります。また、***それらのプレースホルダーを使用するためのプラグイン***も必要です。つまり、チャットで使用したい場合はチャットプラグインが必要です。タイトル、スコアボード、タブリストなど、他のものを作成したい場合も同様です。

-----

## PAPIを使用するプラグインの短いリストはこちらです：
### チャット：
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### その他：
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***上記のリストは、最も人気のある例のほんの一部です。他にもあります。これ以上の推奨や、これらのプラグインのサポートを求めないでください。私はそれらを作成していませんし、サポートも行いません。***

-----

3) 選択したプラグインにプレースホルダー（リストは上記）を追加します。

***注：ほとんどのプラグインでは、`%elitemobs_XXXXXXX_YYYYYY%`の代わりに`{elitemobs_XXXXXXX_YYYYYY}`の形式を使用します。***

動作しない場合は、`%%`の使用を`{}`に変更してみてください。それでも動作しない場合は、ゲーム内からコマンド`/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%`を試してみてください（大文字の部分を置き換えてください）。

それで有効な出力が得られる場合、設定が間違っています。プレースホルダーを使用しているプラグインのサポートを求めてください。