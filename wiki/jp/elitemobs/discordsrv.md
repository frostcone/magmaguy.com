EliteMobs は DiscordSRV を使用して、レベル 3
の優先度のメッセージをブロードキャストします。アナウンス優先度システムについては、[こちら]($language$/elitemobs/announcement_priority_system.md)
をご覧ください。

つまり、一部の特別なカスタムボスは、次のような形式で Discord にメッセージを送信できます。

![discord message example](https://i.imgur.com/sIndft0.png)

これは、プレイヤーが確認できる専用の EliteMobs
アナウンスルームを作成し、現在生きている興味深いワールドボスがいるかどうかを確認して、キルリーダーボードでキルしたことをアピールできるようにすることを目的としています。

# セットアップ方法

## DiscordSRV のセットアップ

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/)
は、私によって開発されたものではない別のプラグインです。[詳細なセットアップガイドはこちら](https://github.com/discordsrv/discordsrv/wiki/Installation)
にあります。セットアップが難しい場合は、[サポートルームはこちら](https://discord.discordsrv.com/)
です。このプラグインのサポートは提供できませんので、インストールについてはそちらにお問い合わせください。

## EliteMobs DiscordSRV 設定のセットアップ

DiscordSRV を正しく設定したら (*このステップに進む前に、実際に機能しているかどうかをテストする必要があります*)、*
*EliteMobs の設定には 1 つのステップしかありません**。

EliteMobs の設定フォルダにある `DiscordSRV.yml` 設定ファイルに移動すると、`announcementRoomName` という設定オプションがあります。

このメッセージには 3 つの値を使用できます。#1 をお勧めします。

1. [推奨] DiscordSRV 設定ファイルで設定した部屋の名前。部屋の名前は何でも構いませんが、正しい名前を使用する必要があります。以下は、EliteMobs
   イベント専用に設定した部屋の例です。
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   この例では、オプションは `announcementRoomName: EMEvents` と読み取る必要があります。

2. DiscordSRV 設定ファイルで設定した部屋の ID。以下は部屋の例です。
   *各部屋は固有であることに注意してください。写真はあくまで例として示しており、ID番号をコピーしようとしないでください。動作しません。セットアップには、DiscordルームIDに基づいた一意の番号のセットが必要です。*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [非推奨] Discord に表示される部屋の名前。これは、さまざまな要因により、正しく動作することが保証されていません。Discord
   ルームは DiscordSRV の設定ファイルで設定する必要があることに注意してください。この設定ファイルに部屋の名前を入力できるからといって、DiscordSRV
   での設定をスキップできるわけではありません。

## テスト

コマンド `/em discord [message]` を使用して、設定が機能しているかどうかを確認できます。メッセージが表示されれば完了です。
