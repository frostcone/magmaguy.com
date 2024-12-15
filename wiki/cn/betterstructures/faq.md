# 如何使用命令
- 请访问命令页面以获取帮助：[命令页面]($language$/betterstructures/commands.md)

# 检查结构出现的位置
- 如果您是服务器管理员并且没有关闭警告，则当结构出现时，您将在聊天中收到通知。
- 单击聊天消息以传送到结构（不适用于基岩版）。
- 使用 `/betterstructures warn` 打开/关闭警告。

# 为什么结构可能不出现
- 通常，结构不会出现在已经探索过的区域中。访问新区域以查找结构。

<details>
<summary>更多详细信息</summary>

结构不会出现在已经探索过的区域中，以避免过度填充它们并损坏玩家的建筑物。BetterStructures 知道在安装之前是否探索过某个区域，并且不会在那里放置结构。如果您的世界在安装 BetterStructures 之前已被完全探索，则需要重新生成它或创建一个新的世界。

</details>

# EliteMobs 和 BetterStructures

## EliteMobs 提供什么
- 了解有关 EliteMobs 的信息：[EliteMobs Wiki](#)
- 它向结构添加首领。

## 获取预制的 EliteMobs 内容
- 可在 [magmaguy.itch.io](https://magmaguy.itch.io/) 和 [patreon.com/magmaguy](https://www.patreon.com/magmaguy) 找到

## 在不使用其他功能的情况下使用 EliteMobs
- 您可以关闭其他 EliteMobs 功能。要禁用，请在以下位置更改设置：
    - events.yml：`timedEventsEnabled: false` 和 `actionEventsEnabled: false` 禁用所有事件
    - MobCombatSettings.yml：`doNaturalMobSpawning: false` 禁用自然精英生成

## 将 EliteMobs 首领添加到您的结构中

- 在您的标志的第一行添加 `[elitemobs]`
- 在标志的第二/三/四行添加首领的文件名，例如 `test_boss.yml`
- 更多信息请参见[此处]($language$/betterstructures/creating_structures.md)

# BetterStructures 与其他插件

## MythicMobs
- 使用带有 `[mythicmobs]` 的标志生成神话生物，然后在标志的其他行中添加生物标识符。
- EliteMobs 更适合与 BetterStructures 一起使用首领，因为我同时制作了它们。

## MMOItems
- 在宝藏配置文件中使用 `mmoitems=<TYPE>@<ITEM-ID>` 添加 MMOItems。

## 来自其他插件的自定义物品
- 使用 lootify 命令将任何物品添加到箱子中。请参阅[命令页面]($language$/betterstructures/commands.md)。

# 创建您自己的结构
- 了解如何操作：[结构创建指南]($language$/betterstructures/creating_structures.md)

# 性能影响和最小化
- 生成许多结构会减慢服务器的速度。
- 使用 [Chunky](https://www.spigotmc.org/resources/chunky.81534/) 预先生成您的世界，并避免性能问题。
- 如果不使用 EliteMobs，则可以在世界生成后删除 BetterStructures。
- 对于 EliteMobs，请保留 BetterStructures 以进行受保护的区域管理，影响最小。
