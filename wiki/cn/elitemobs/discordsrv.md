EliteMobs 使用 DiscordSRV 来启用 3 级优先消息的广播。您可以在[此处]($language$/elitemobs/announcement_priority_system.md)
阅读有关公告优先级系统的更多信息。

本质上，这意味着一些非常特殊的自定义 Boss 能够在 Discord 上发送消息，看起来像这样：

![discord 消息示例](https://i.imgur.com/sIndft0.png)

目的是创建一个专门的 EliteMobs 公告房间，玩家可以在其中查看是否有任何有趣的 World Boss 存活，他们可以去击杀并在击杀排行榜上炫耀他们的战绩。

# 设置所有内容

## 设置 DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/)
是一个由其他人开发的插件，不是我开发的。[您可以在此处找到他们详尽的设置指南](https://github.com/discordsrv/discordsrv/wiki/Installation)
。如果您在设置时遇到困难，[他们的支持房间在这里](https://discord.discordsrv.com/)。我无法为这个插件提供支持，所以请就安装的这一部分向他们咨询。

## 设置 EliteMobs DiscordSRV 配置

一旦您正确配置了 DiscordSRV (*并且您必须测试以查看它是否真的在工作，然后再进行下一步*)，**EliteMobs 配置只有 1 个步骤**。

转到 EliteMobs 配置文件夹中的 `DiscordSRV.yml` 配置文件，您将找到一个名为 `announcementRoomName` 的配置选项。

您可以为该消息使用三个值。我建议使用 #1。

1. [推荐] 您在 DiscordSRV 配置文件中配置的房间名称。您给房间起什么名字并不重要，重要的是您使用正确的名称。这是一个我配置为专门用于
   EliteMobs 事件的房间的示例：
   ![使用名称示例](https://i.imgur.com/a2kMWXv.png)
   在我的例子中，该选项应读取 `announcementRoomName: EMEvents`。

2. 您在 DiscordSRV 配置文件中配置的房间 ID。这是一个房间的示例。*请注意，每个房间都是唯一的。我只是展示图片作为示例，不要尝试复制
   ID 号码。它不会起作用。您的设置应该有一组基于您的 Discord 房间 ID 的唯一数字。*
   ![使用 ID 示例](https://i.imgur.com/CGElkdh.png)
3. [糟糕] 您的房间在 Discord 上显示的名称。由于多种因素，这不能保证正常工作。请记住，您的 Discord 房间必须在 DiscordSRV
   的配置文件中设置 - 仅仅因为您可以在此配置文件中输入房间名称并不意味着您可以跳过在 DiscordSRV 上的配置。

## 测试

您可以使用命令 `/em discord [消息]` 来查看您的配置是否正常工作。如果您的消息出现，您就完成了！
