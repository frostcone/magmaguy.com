公告优先级系统管理 EliteMobs 消息的重要性。目前这些只用于管理 Custom Boss 产生的消息。

# 简化指南：

*   等级 0：静默 / 仅限与 Boss 对战的玩家查看
*   等级 1：聊天消息（如果设置了生成消息）
*   等级 2：追踪（如果设置了位置消息）
*   等级 3：[Discord 公告（如果设置了生成消息且正确安装和配置了 DiscordSRV）]($language$/elitemobs/discordsrv.md)

# 工作原理：

注意：如果您想使用非默认值，需要将此优先级系统设置为 Custom Boss。点击[这里]($language$/elitemobs/创建bosses.md&section=announcementpriority)了解如何操作。

## 等级 0

强制 Custom Boss 保持静默。这意味着即使配置了消息，也不会发送有关它的消息，但有一种场合除外：他们会直接向对 Boss 造成伤害的玩家发送死亡消息。

## 等级 1

**这是默认设置。**如果配置了，Custom Boss 将能够在聊天中发送消息。如果配置了，他们将发送生成、死亡和逃脱消息。

## 等级 2

Custom Boss 将保持与等级 1 相同的行为，并且还能够在生成时被玩家追踪，如果它有一个与之关联的位置消息。玩家可以在它生成时点击聊天内容来追踪它，或者他们可以使用 /em 菜单来追踪它。

## 等级 3

Custom Boss 将保持与等级 2 相同的行为，并且也会将消息发送到配置为发送有关 EliteMobs 的通知的 Discord 房间。[如何设置此功能的页面可以在此处找到.]($language$/elitemobs/discordsrv.md) Discord 上的消息将与聊天消息相同 - 生成/死亡/逃脱