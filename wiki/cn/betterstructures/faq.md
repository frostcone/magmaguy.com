# 如何使用命令
- 前往命令页面获取帮助：[命令页面]($language$/betterstructures/commands.md)

# 检查结构出现的位置
- 如果您是服务器管理员并且没有关闭警告，则会在结构出现时在聊天中收到通知。
- 点击聊天消息以传送到结构（基岩版不支持）。
- 使用 `/betterstructures warn` 打开/关闭警告。

# 结构可能不会出现的原因
- 通常，结构不会出现在已经探索过的区域。前往新的区域寻找结构。

<details> 
<summary>更多详细信息</summary>

结构不会出现在已经探索过的区域，以避免过度填充和破坏玩家建筑。BetterStructures 知道一个区域是否在安装之前就已经被探索过，并且不会在那里放置结构。如果您的世界在安装 BetterStructures 之前就已经被完全探索过，则需要重新生成它或创建一个新的世界。

</details>

# EliteMobs 和 BetterStructures

## EliteMobs 提供的功能
- 了解 EliteMobs：[EliteMobs Wiki](#)
- 它为结构添加了 Boss。

## 获取预制的 EliteMobs 内容
- 可在 [magmaguy.itch.io](https://magmaguy.itch.io/) 和 [patreon.com/magmaguy](https://www.patreon.com/magmaguy) 上获得

## 在没有其他功能的情况下使用 EliteMobs
- 您可以关闭其他 EliteMobs 功能。要禁用，请在以下位置更改设置：
    - events.yml：`timedEventsEnabled: false` 和 `actionEventsEnabled: false` 禁用所有事件
    - MobCombatSettings.yml：`doNaturalMobSpawning: false` 禁用自然精英生成

## 将 EliteMobs Boss 添加到您的结构中

- 在您的告示牌的第一行添加 `[elitemobs]`
- 在告示牌的第二行/第三行/第四行添加 Boss 的文件名，例如 `test_boss.yml`
- 更多信息请参阅 [此处]($language$/betterstructures/creating_structures.md)

# BetterStructures 与其他插件

## MythicMobs
- 使用告示牌生成 MythicMobs，在告示牌的其他行上使用 `[mythicmobs]` 后面跟着生物标识符。
- 对于使用 BetterStructures 的 Boss 来说，EliteMobs 更好，因为我同时制作了这两个插件。

## MMOItems
- 在宝藏配置文件中使用 `mmoitems=<类型>@<物品 ID>` 添加 MMOItems。

## 来自其他插件的自定义物品
- 使用 lootify 命令将任何物品添加到箱子中。请参阅 [命令页面]($language$/betterstructures/commands.md)。

# 创建您自己的结构
- 了解如何操作：[结构创建指南]($language$/betterstructures/creating_structures.md)

# 性能影响和最小化
- 生成许多结构可能会降低您的服务器速度。
- 使用 [Chunky](https://www.spigotmc.org/resources/chunky.81534/) 预先生成您的世界，以避免性能问题。
- 如果不使用 EliteMobs，您可以在世界生成后删除 BetterStructures。
- 使用 EliteMobs 时，保留 BetterStructures 以进行保护区域管理，其影响很小。


