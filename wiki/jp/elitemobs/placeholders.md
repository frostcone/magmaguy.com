```markdown
# EliteMobs 用の PAPI プレースホルダー

EliteMobs 用の PAPI プレースホルダーの完全なリストを以下に示します。

| プレースホルダー | 説明 |
|-------------|:-----------:|
| `%elitemobs_player_combat_tier%`         |     プレイヤーの戦闘ティアを表示します。つまり、プレイヤーの周囲にエリートモブをスポーンさせるために使用されるティアです。     |
| `%elitemobs_player_active_guild_rank_numerical%`         |     プレイヤーのアクティブなギルドランクを数値で表示します。プレイヤーが意図的にランクを下げている場合は、アクティブなギルドランクが実際の最大ギルドランクよりも低くなる可能性があります。     |
| `%elitemobs_player_maximum_guild_rank_numerical%`         |     プレイヤーの最大ギルドランクを数値で表示します。プレイヤーが意図的にランクを下げている場合は、これがアクティブなギルドランクよりも高くなる可能性があります。     |
| `%elitemobs_player_active_guild_rank_name%`         |     アクティブなギルドランクの名前を表示します。プレイヤーのアクティブなギルドランクを表示する場合は、このオプションを使用することをお勧めします。     |
| `%elitemobs_player_maximum_guild_rank_name%`         |     最大ギルドランクの名前を表示します。プレイヤーの最大ギルドランクを表示する場合は、このオプションを使用することをお勧めします。     |
| `%elitemobs_player_prestige_guild_rank_numerical%`         |     プレイヤーのプレステージレベルを数値で表示します。     |
| `%elitemobs_player_money%`         |     プレイヤーが現在持っている EliteMobs の通貨額を表示します。     |
| `%elitemobs_player_top_tier%`         |     オンラインのプレイヤーの中で、最も脅威度の高いティアを表示します。     |
| `%elitemobs_player_top_guild_rank%`         |     ギルドランクが最も高いオンラインプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージレベルとアクティブなギルドランクの短縮バージョンを表示します。これは、ランク名がそれほどスペースを必要としない場所（スコアボードなど）のチャットやその他の場所向けに特別に設計されています。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれ表すために、フルール・ド・リスと星形の Unicode を使用し、数値にはローマ数字を使用します。これは、`AdventurersGuild.yml` 設定ファイルで 100% 設定可能です。     |
| `%elitemobs_player_top_guild_rank%`         |     ギルドランクが最も高いオンラインプレイヤーの名前を表示します。     |
| `%elitemobs_player_shortened_guild_rank%`         |     プレステージレベルとアクティブなギルドランクの短縮バージョンを表示します。これは、ランク名がそれほどスペースを必要としない場所（スコアボードなど）のチャットやその他の場所向けに特別に設計されています。デフォルトでは、プレステージレベルとアクティブなギルドランクをそれぞれ表すために、フルール・ド・リスと星形の Unicode を使用し、数値にはローマ数字を使用します。これは、`AdventurersGuild.yml` 設定ファイルで 100% 設定可能です。     |
| `%elitemobs_player_kills%`         |     プレイヤーが倒したエリートの数を表示します。     |
| `%elitemobs_player_deaths%`         |     プレイヤーがエリートに倒された回数を表示します。     |

# 使用方法

1) ***EliteMobs は、PAPI eCloud の使用を必要としません。*** EliteMobs がサーバーにインストールされていれば、動作します。この手順はスキップできます。
2) プレースホルダーを使用する場合は、サーバーに ***PAPI*** をインストールする必要があります。また、***それらのプレースホルダーを使用するプラグイン*** も必要です。つまり、チャットで使用したい場合は、チャットプラグインが必要です。タイトル、スコアボード、タブリスト、その他のものを作りたい場合も同じです。

-----

## PAPI を使用するプラグインの簡単なリストを以下に示します。
### チャット:
- [Venturechat](https://www.spigotmc.org/resources/venturechat.771/)
- [ChatControl](https://www.spigotmc.org/resources/chatcontrol%E2%84%A2-the-ultimate-chat-plugin-500-000-downloads-1-2-5-1-16-4.271/)
### その他:
- [FeatherBoard](https://www.spigotmc.org/resources/featherboard.2691/)

***上記のリストは、最も一般的な例をいくつか示したものです。他にもあります。それらのプラグインに関するさらなる推奨事項やサポートを依頼しないでください。私はそれらのプラグインを作成したわけではないので、サポートもできません。***

-----

3) 選択したプラグインにプレースホルダー（上記にリストされています）を追加します。

***注意: ほとんどのプラグインは、`%elitemobs_XXXXXXX_YYYYYY%` ではなく、`{elitemobs_XXXXXXX_YYYYYY}` 形式を使用しています。***

うまくいかない場合は、`%%` の使用を `{}` に変更してみてください。それでもうまくいかない場合は、ゲーム内からコマンド `/papi parse YOUR_USERNAME_HERE %elitemobs_YOUR_PLACEHOLDER_HERE%` を試してください（大文字の部分は置き換えてください）。

これで有効な出力が得られた場合は、設定が間違っているため、プレースホルダーを使用しているプラグインのサポートに問い合わせる必要があります。

```

