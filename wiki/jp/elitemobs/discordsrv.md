EliteMobsは、レベル3の優先度メッセージのブロードキャストを有効にするためにDiscordSRVを使用します。アナウンス優先度システムについては[こちら]($language$/elitemobs/announcement_priority_system.md)をご覧ください。

基本的に、これはいくつかの非常に特別なカスタムボスが、次のようにDiscordにメッセージを送信できることを意味します。

![discord message example](https://i.imgur.com/sIndft0.png)

この目的は、プレイヤーが現在生きている興味深いワールドボスがいるかどうかを確認し、キルリーダーボードで彼らが倒したことを自慢できる専用のEliteMobsアナウンスルームを作成することです。

# すべての設定

## DiscordSRVの設定

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/)は、私が開発したものではない別のプラグインです。[詳細な設定ガイドはこちら](https://github.com/discordsrv/discordsrv/wiki/Installation)にあります。設定に苦労している場合は、[彼らのサポートルームはこちら](https://discord.discordsrv.com/)です。このプラグインのサポートは提供できませんので、インストールについてはそちらを参照してください。

## EliteMobs DiscordSRV設定

DiscordSRVを正しく設定したら（*そして、このステップに進む前に本当に動作しているかテストする必要があります*）、**EliteMobsの設定は1つのステップだけです**。

EliteMobs設定フォルダにある`DiscordSRV.yml`設定ファイルに移動すると、`announcementRoomName`という設定オプションがあります。

このメッセージには3つの値を使用できます。1を推奨します。

1. [推奨] DiscordSRV設定ファイルで設定した部屋の名前。部屋の名前は何でもかまいません。正しい名前を使用するだけで構いません。以下は、EliteMobsイベント専用に設定した部屋の例です。
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   私の場合、オプションは`announcementRoomName: EMEvents`と表示されるはずです。

2. DiscordSRV設定ファイルで設定した部屋のID。以下は、部屋の例です。*各部屋は固有であることに注意してください。私は例として写真を示しているだけであり、ID番号をコピーしようとしないでください。それは機能しません。セットアップには、ディスコードルームIDに基づいて固有の番号セットが必要です。*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [非推奨] Discordに表示される部屋の名前。これは、いくつかの要因により正しく動作することが保証されていません。この設定ファイルに部屋の名前を入力できるからといって、DiscordSRVの設定ファイルで設定をスキップできるわけではないことに注意してください。ディスコードルームはDiscordSRVの設定ファイルで設定する必要があります。

## テスト
コマンド`/em discord [メッセージ]`を使用して、設定が機能しているかどうかを確認できます。メッセージが表示されたら完了です！
