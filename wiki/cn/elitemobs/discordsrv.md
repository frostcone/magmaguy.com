EliteMobs 使用 DiscordSRV 来启动 level 3 优先级的消息广播。您可以从[这里]($language$/elitemobs/announcement_priority_system.md)阅读关于公告优先级系统的内容。

实质上，这意味着一些特定的自定义 Boss 能够以以下的方式在 Discord 上发送消息：

![Discord 消息示例](https://i.imgur.com/sIndft0.png)

我们的目的是创建一个专门的 EliteMobs 公告室，玩家可以查看看看是否有任何有趣的世界 Boss 存活，他们可以前去击败它并在击杀排行榜上炫耀。

# 设置全部内容

## 设置 DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) 是一个由我开发的不同插件。[您可以在这里找到他们完整的设置指南](https://github.com/discordsrv/discordsrv/wiki/Installation)。如果你在设置时遇到困难，[他们的支援室在这里](https://discord.discordsrv.com/)。我不能为这个插件提供支持，所以在安装的这一部分请参考他们。

## 设置 EliteMobs DiscordSRV 的配置

一旦你正确配置了 DiscordSRV(*你必须测试以确保它真的起作用，然后再进行下一步*)，**EliteMobs 的配置只需要一步**。

转到 EliteMobs 配置文件夹中的 `DiscordSRV.yml` 配置文件，你会找到一个名为 `announcementRoomName` 的配置选项。

可以使用三个值来定义这个消息。推荐使用 #1。

1. [推荐] 房间的名称，如您在 DiscordSRV 配置文件中设置的那样。你叫这个房间的名字并不重要，只要你使用正确的名字。这是我配置的专门用于 EliteMobs 事件的房间的一个示例：
   ![使用名称示例](https://i.imgur.com/a2kMWXv.png)
   在我的情况下，选择应该读取 `announcementRoomName: EMEvents`。

2.  房间的 ID，如您在 DiscordSRV 配置文件中设置的那样。这是一个房间的示例。*请注意，每个房间都是唯一的。我只是作为示例展示图片，并不试图复制 ID 号码。这将不能工作。你的设置应该根据你的 discord 房间 id 有一套独特的数字组合。*
    ![使用 id 示例](https://i.imgur.com/CGElkdh.png)
3.  [不好] 您在 discord 上显示的房间名称。由于许多因素，不能保证它能正确工作。请记住，你的 discord 房间必须在 DiscordSRV 的配置文件上设置 - 仅仅因为你可以在这个配置文件中填入房间的名称并不意味着你可以跳过在 DiscordSRV 上配置它。

## 测试
你可以使用命令 `/em discord [message]` 来查看你的配置是否起作用。如果你的消息显示出来，那么你已经完成了！