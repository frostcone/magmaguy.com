以下は、EliteMobs の PAPI プレースホルダーの完全なリストです。

| プレースホルダー | 説明 |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     プレイヤーの戦闘ティアを表示します。これは、プレイヤーの周囲にエリートモブをスポーンさせるために使用されるティアを意味します。     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     プレイヤーのアクティブなギルドランクを数値形式で表示します。プレイヤーが意図的に下げている場合、アクティブなギルドランクが実際の最大ギルドランクよりも低い場合があることに注意してください。     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     プレイヤーの最大ギルドランクを数値形式で表示します。プレイヤーが意図的に下げている場合、アクティブなギルドランクよりも高い場合があることに注意してください。     |
| `%elitemobs_player_active_guild_rank_name%`         |     アクティブなギルドランクの名前を表示します。これは、プレイヤーのアクティブなギルドランクを表示したい場合に、おそらく使用したいオプションです。     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     最大ギルドランクの名前を表示します。これは、プレイヤーの最大ギルドランクを表示したい場合に、おそらく使用したいオプションです。     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     プレイヤーのプレステージレベルを数値で表示します。     |
| `%elitemobs_player_money%`         |     プレイヤーが現在持っている EliteMobs の通貨の量を表示します。     |
| `%elitemobs_player_top_tier%`         |     オンラインのプレイヤーの中で最も高い脅威ティアを表示します。     |
| `%elitemobs_player_top_guild_rank%`         |     オンラインのプレイヤーの中で最も高いギルドランクを持つプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージランクとアクティブなギルドランクの短縮バージョンを表示します。特に、チャットや、ランク名がスペースを取りすぎる可能性のある他の場所（スコアボード）に使用します。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれ表すために、フルール・ド・リスと星のユニコードを使用し、数字にはローマ数字を使用します。これは、AdventurersGuild.yml 設定ファイルで 100% 設定可能です。     |
| `%elitemobs_player_top_guild_rank%`         |     オンラインのプレイヤーの中で最も高いギルドランクを持つプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージランクとアクティブなギルドランクの短縮バージョンを表示します。特に、チャットや、ランク名がスペースを取りすぎる可能性のある他の場所（スコアボード）に使用します。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれ表すために、フルール・ド・リスと星のユニコードを使用し、数字にはローマ数字を使用します。これは、AdventurersGuild.yml 設定ファイルで 100% 設定可能です。     |
| `%elitemobs_player_kills%`         |     プレイヤーが持つエリートキルの数を表示します。     |
| `%elitemobs_player_deaths%`         |     プレイヤーがエリートによって死亡した回数を表示します。     |

# 使用方法

1) ***EliteMobs は PAPI eCloud の使用を必要としません。*** EliteMobs がサーバーにあれば動作します。このステップはスキップできます。
2) プレースホルダーを使用する場合は、サーバーに ***PAPI*** と、***それらのプレースホルダーを使用するためのプラグイン*** がインストールされている必要があります。つまり、チャットで使用したい場合は、チャットプラグインが必要です。タイトル、スコアボード、タブリストなどを作成する場合も同様です。

-----

## PAPI を使用するプラグインの簡単なリストを以下に示します。
### チャット:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### その他:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***上記のリストは、最も人気のある例のほんの一部です。他にもあります。プラグインの推奨やサポートを求めないでください。私はそれらを作成しておらず、それらのサポートは行いません。***

-----

3) 選択したプラグインにプレースホルダー（リストは上記）を追加します。

***注: ほとんどのプラグインは、`%elitemobs_XXXXXXX_YYYYYY%` の代わりに `{elitemobs_XXXXXXX_YYYYYY}` の形式を使用します。***

動作しない場合は、`%%` の使用を `{}` に変更してみてください。それでも動作しない場合は、ゲーム内から `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` コマンドを試してください（大文字の箇所は置き換えてください）。

これで有効な出力が得られた場合は、構成に間違いがあるため、プレースホルダーを使用しているプラグインのサポートを受ける必要があります。
