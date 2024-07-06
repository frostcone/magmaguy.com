EliteMobs 使用 DiscordSRV 来启用 3 级优先级消息的广播。您可以在[此处]($language$/elitemobs/announcement_priority_system.md)阅读有关公告优先级系统的信息。

本质上，这意味着一些非常特殊的自定义 Boss 能够以如下所示的方式在 Discord 上发送消息：

![discord 消息示例](https://i.imgur.com/sIndft0.png)

目的是创建一个专门的 EliteMobs 公告房间，玩家可以查看该房间以了解当前是否有任何有趣的活着的世界 Boss，他们可以去杀死并在击杀排行榜上炫耀他们所做的事情。

# 全部设置

## 设置 DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) 是一个不是由我开发的不同插件。[您可以在此处找到其详细的设置指南](https://github.com/discordsrv/discordsrv/wiki/Installation)。如果您在设置时遇到困难，[他们的支持房间在这里](https://discord.discordsrv.com/)。我无法为此插件提供支持，因此请参阅它们以获取安装的这一部分。

## 设置 EliteMobs DiscordSRV 配置

正确配置 DiscordSRV 后（*在继续执行此步骤之前，您必须测试以查看它是否真的有效*），**EliteMobs 配置只有 1 个步骤**。

转到 EliteMobs 配置文件夹中的 `DiscordSRV.yml` 配置文件，您会找到一个名为 `announcementRoomName` 的配置选项。

此消息可以使用三个值。我推荐 #1。

1. [推荐] 房间的名称，如您在 DiscordSRV 配置文件中配置的那样。您如何称呼房间并不重要，只要您使用正确的名称即可。以下是我配置为专门用于 EliteMobs 事件的房间示例：
   ![使用名称示例](https://i.imgur.com/a2kMWXv.png)
   在我的情况下，该选项应为 `announcementRoomName: EMEvents`。

2. 房间的 ID，如您在 DiscordSRV 配置文件中配置的那样。以下是一个房间示例。*请注意，每个房间都是唯一的。我只是展示图片作为示例，不要尝试复制 ID 号码。它将不起作用。您的设置应该根据您的 discord 房间 ID 拥有一组唯一的数字。*
   ![使用 ID 示例](https://i.imgur.com/CGElkdh.png)
3. [不好] 您的房间在 discord 上显示的名称。由于多种因素，这不能保证正常工作。请记住，您的 discord 房间必须在 DiscordSRV 的配置文件中设置 - 仅仅因为您可以在此配置文件中输入房间名称并不意味着您可以跳过在 DiscordSRV 上配置它。

## 测试
您可以使用命令 `/em discord [消息]` 来查看您的配置是否有效。如果您的消息出现了，就完成了！

