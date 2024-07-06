# EliteMobs と DiscordSRV

EliteMobs は DiscordSRV を使用して、レベル 3 の優先度のメッセージのブロードキャストを有効にします。アナウンス優先度システムについては、[こちら]($language$/elitemobs/announcement_priority_system.md) をご覧ください。

本質的に、これは、いくつかの非常に特別なカスタムボスが、次のような方法で Discord にメッセージを送信できることを意味します。

![discord message example](https://i.imgur.com/sIndft0.png)

目的は、プレイヤーが、現在生きている興味深いワールドボスがいないか確認し、そのボスを倒してキルリーダーボードに表示するために、専用の EliteMobs アナウンスルームを作成することです。

# 設定

## DiscordSRV の設定

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) は、私が開発したものではなく、別のプラグインです。[広範なセットアップガイドはこちらで見つけることができます](https://github.com/discordsrv/discordsrv/wiki/Installation)。セットアップに苦労している場合は、[サポートルームはこちら](https://discord.discordsrv.com/) にあります。このプラグインのサポートを提供することはできませんので、インストールのこの部分については、DiscordSRV にお問い合わせください。

## EliteMobs の DiscordSRV 設定

DiscordSRV を正しく構成したら (この手順に進む前に、実際に動作しているかどうかをテストする必要があります)、**EliteMobs の構成は 1 つの手順のみです。**

EliteMobs の構成フォルダーの `DiscordSRV.yml` 構成ファイルに移動すると、`announcementRoomName` という構成オプションが見つかります。

このメッセージには、3 つの値を使用できます。#1 をお勧めします。

1. [推奨] DiscordSRV 構成ファイルで構成したルームの名前。ルームの名前は関係ありません。正しい名前を使用していることが重要です。これは、EliteMobs イベント専用に構成したルームの例です。
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   私の場合、オプションは `announcementRoomName: EMEvents` になります。

2. DiscordSRV 構成ファイルで構成したルームの ID。ルームの例を以下に示します。*各ルームはユニークであることに注意してください。画像の例としてのみ表示しています。ID 番号をコピーしようとしないでください。機能しません。セットアップでは、Discord ルーム ID に基づいて、一意の番号のセットが設定されているはずです。*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [悪い] Discord に表示されるルームの名前。これは、さまざまな要因により、正しく動作しない可能性があります。Discord ルームは DiscordSRV の構成ファイルで設定する必要があることに注意してください。この構成ファイルにルームの名前を置くことができるからといって、DiscordSRV での構成をスキップできるわけではありません。

## テスト

コマンド `/em discord [message]` を使用して、構成が機能しているかどうかを確認できます。メッセージが表示されたら、完了です！

```

