[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# DiscordSRV

EliteMobs 使用 DiscordSRV 来启用 3 级优先级消息的广播。您可以在[此处]($language$/elitemobs/announcement_priority_system.md)阅读有关公告优先级系统的更多信息。

本质上，这意味着一些非常特殊的自定义首领能够在 Discord 上发送如下消息：

![discord 消息示例](https://i.imgur.com/sIndft0.png)

目的是创建一个专用的 EliteMobs 公告室，玩家可以在其中查看当前是否有任何有趣的在世世界首领，他们可以前去杀死，并在击杀排行榜中炫耀自己已经完成了击杀。

# 进行设置

## 设置 DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) 是一个不是由我开发的单独插件。[您可以在此处找到他们详尽的设置指南](https://github.com/discordsrv/discordsrv/wiki/Installation)。如果您在设置时遇到困难，[他们的支持室在这里](https://discord.discordsrv.com/)。我无法为此插件提供支持，因此请向他们咨询安装的这一部分。

## 设置 EliteMobs DiscordSRV 配置

在您正确配置 DiscordSRV 之后（*并且您必须进行测试以查看它是否真的在工作之后才能继续执行此步骤*），**EliteMobs 配置仅需 1 个步骤**。

转到 EliteMobs 配置文件夹中的 `DiscordSRV.yml` 配置文件，您将找到一个名为 `announcementRoomName` 的配置选项。

您可以将三个值用于此消息。我建议使用 #1。

1.  [推荐] 您在 DiscordSRV 配置文件中配置的房间名称。您将房间命名为什么并不重要，重要的是您使用正确的名称。这是一个我配置为专门用于 EliteMobs 事件的房间的示例：
   ![使用名称示例](https://i.imgur.com/a2kMWXv.png)
   在我的例子中，该选项应为 `announcementRoomName: EMEvents`。

2.  您在 DiscordSRV 配置文件中配置的房间 ID。这是一个房间的示例。*请注意，每个房间都是唯一的。我只是显示图片作为示例，请勿尝试复制 ID 号。它将无法工作。您的设置应该根据您的 discord 房间 ID 拥有一组唯一的数字。*
   ![使用 ID 示例](https://i.imgur.com/CGElkdh.png)
3.  [不好] 您在 discord 上显示的房间名称。由于多种因素，这不能保证正常工作。请记住，您的 discord 房间必须在 DiscordSRV 的配置文件中设置 - 仅仅因为您可以在此配置文件中输入房间的名称并不意味着您可以跳过在 DiscordSRV 上对其进行配置。

## 测试
您可以使用命令 `/em discord [消息]` 查看您的配置是否正在工作。如果您的消息出现，则表示您已完成！
