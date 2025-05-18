EliteMobs 使用 DiscordSRV 来启用 3 级优先消息的广播。你可以在[这里]($language$/elitemobs/announcement_priority_system.md)阅读关于公告优先级系统的更多信息。

本质上，这意味着一些非常特殊的自定义 Boss 能够以如下所示的方式在 Discord 上发送消息：

![discord 消息示例](https://i.imgur.com/sIndft0.png)

这样做的目的是创建一个专门的 EliteMobs 公告频道，玩家可以查看该频道，看看当前是否有任何有趣的 World Boss 存活，他们可以去击杀并在击杀排行榜上炫耀。

# 设置一切

## 设置 DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) 是一个不同的插件，并非由我开发。[你可以在这里找到他们详细的设置指南](https://github.com/discordsrv/discordsrv/wiki/Installation)。如果你在设置过程中遇到困难，[他们的支持频道在这里](https://discord.discordsrv.com/)。我无法为这个插件提供支持，因此请就这部分安装向他们寻求帮助。

## 设置 EliteMobs 的 DiscordSRV 配置

一旦你正确配置了 DiscordSRV（*并且你必须测试以确保它确实工作正常，然后再进行此步骤*），**EliteMobs 的配置只有 1 个步骤**。

前往 EliteMobs 配置文件夹中的 `DiscordSRV.yml` 配置文件，你会找到一个名为 `announcementRoomName` 的配置选项。

这个消息你可以使用三个值。我推荐 #1。

1.  [推荐] 频道名称，与你在 DiscordSRV 配置文件中配置的名称一致。你给频道起什么名字并不重要，重要的是你使用了正确的名称。以下是我配置的专门用于 EliteMobs 事件的频道示例：
    ![使用名称示例](https://i.imgur.com/a2kMWXv.png)
    在我的例子中，该选项应为 `announcementRoomName: EMEvents`。

2.  频道 ID，与你在 DiscordSRV 配置文件中配置的 ID 一致。以下是频道示例。*请注意，每个频道都是唯一的。我只是展示图片作为示例，不要尝试复制 ID 号码。它不会起作用。你的设置应该基于你的 Discord 频道 ID 拥有一组唯一的数字。*
    ![使用 ID 示例](https://i.imgur.com/CGElkdh.png)
3.  [不推荐] 频道名称，与它在 Discord 上显示的名称一致。由于多种因素，这不能保证正确工作。请记住，你的 Discord 频道必须在 DiscordSRV 的配置文件中设置好——仅仅因为你可以在此配置文件中输入频道名称，并不意味着你可以跳过在 DiscordSRV 中进行配置。

## 测试
你可以使用命令 `/em discord [message]` 来查看你的配置是否工作正常。如果你的消息显示出来了，你就完成了！