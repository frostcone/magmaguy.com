EliteMobsはDiscordSRVを使用して、レベル3の優先度メッセージのブロードキャストを可能にします。アナウンス優先度システムについては[こちら]($language$/elitemobs/announcement_priority_system.md)で読むことができます。

要するに、これは一部の非常に特別なカスタムボスが、Discord上でこのように見えるメッセージを送信できることを意味します。

![Discordメッセージの例](https://i.imgur.com/sIndft0.png)

意図としては、プレイヤーが現在生きている興味深いワールドボスがいるかどうかを確認し、それらを倒してキルリーダーボードで自慢できるような、EliteMobs専用のアナウンスルームを作成することです。

# 全ての設定

## DiscordSRVの設定

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/)は、私が開発したものではない別のプラグインです。[彼らの詳細なセットアップガイドはこちら](https://github.com/discordsrv/discordsrv/wiki/Installation)で見つけることができます。設定に苦労する場合は、[彼らのサポートルームはこちら](https://discord.discordsrv.com/)です。私はこのプラグインのサポートを提供できませんので、このインストール部分については彼らに問い合わせてください。

## EliteMobsのDiscordSRV設定

DiscordSRVを正しく設定したら（*そして、このステップに進む前に実際に動作するかテストする必要があります*）、**EliteMobsの設定はたった1ステップです**。

EliteMobsの設定フォルダにある`DiscordSRV.yml`設定ファイルを開き、`announcementRoomName`という設定オプションを見つけてください。

このメッセージには3つの値を使用できます。私は#1を推奨します。

1.  [推奨] DiscordSRV設定ファイルで設定したルームの名前。ルームを何と呼んだかは重要ではなく、正しい名前を使用していることだけが重要です。EliteMobsイベント専用に設定したルームの例を以下に示します。
    ![名前の使用例](https://i.imgur.com/a2kMWXv.png)
    私の場合、オプションは`announcementRoomName: EMEvents`と記述されているはずです。

2.  DiscordSRV設定ファイルで設定したルームのID。ルームの例を以下に示します。*各ルームは固有であることに注意してください。これは単なる例として画像を示しているだけであり、ID番号をコピーしようとしないでください。動作しません。あなたの設定は、あなたのDiscordルームIDに基づいた固有の番号セットを持つはずです。*
    ![IDの使用例](https://i.imgur.com/CGElkdh.png)
3.  [非推奨] Discordに表示されるルームの名前。これは多くの要因により、正しく動作することが保証されません。DiscordSRVの設定ファイルでDiscordルームを設定する必要があることを忘れないでください。この設定ファイルにルームの名前を入力できるからといって、DiscordSRVでの設定をスキップできるわけではありません。

## テスト

コマンド`/em discord [message]`を使用して、設定が機能しているか確認できます。メッセージが表示されれば、完了です！