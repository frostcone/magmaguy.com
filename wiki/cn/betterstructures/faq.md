```markdown
# 如何使用命令
- 前往命令页面获取帮助：[命令页面]($language$/betterstructures/commands.md)

# 检查结构出现的位置
- 如果您是服务器管理员且未关闭警告，当结构出现时，您会在聊天中收到通知。
- 点击聊天消息可传送到该结构（基岩版不支持）。
- 使用 `/betterstructures warn` 开启/关闭警告。

# 结构可能不出现的原因
- 通常，结构不会出现在已探索的区域。请前往新的区域寻找结构。

<details>
<summary>更多详情</summary>

结构不会出现在已探索的区域，以避免过度填充这些区域并损坏玩家的建筑。BetterStructures 知道某个区域在安装插件之前是否已被探索，并且不会在那里放置结构。如果您的世界在安装 BetterStructures 之前已被完全探索，您需要重新生成世界或创建一个新世界。

</details>

# EliteMobs 与 BetterStructures

## EliteMobs 提供什么
- 了解 EliteMobs：[EliteMobs Wiki](#)
- 它会为结构添加 Boss。

## 获取预制的 EliteMobs 内容
- 可在 [magmaguy.itch.io](https://magmaguy.itch.io/) 和 [patreon.com/magmaguy](https://www.patreon.com/magmaguy) 获取

## 在不使用其他功能的情况下使用 EliteMobs
- 您可以关闭 EliteMobs 的其他功能。要禁用，请修改以下设置：
    - events.yml: `timedEventsEnabled: false` 和 `actionEventsEnabled: false` 禁用所有事件
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` 禁用自然精英生成

## 将 EliteMobs Boss 添加到您的结构中

- 在告示牌的第一行添加 `[elitemobs]`
- 在告示牌的第二/第三/第四行添加 Boss 的文件名，例如 `test_boss.yml`
- 更多信息请见[此处]($language$/betterstructures/creating_structures.md)

# BetterStructures 与其他插件的配合

## MMOItems
- 在宝藏配置文件中添加 `mmoitems=<TYPE>@<ITEM-ID>` 来添加 MMOItems 物品。

## 其他插件的自定义物品
- 使用 lootify 命令可以将任何物品添加到箱子中。请参阅[命令页面]($language$/betterstructures/commands.md)。

# 创建您自己的结构
- 学习如何创建：[结构创建指南]($language$/betterstructures/creating_structures.md)

# 性能影响及最小化
- 生成大量结构可能会降低服务器速度。
- 使用 [Chunky](https://www.spigotmc.org/resources/chunky.81534/) 预生成您的世界，以避免性能问题。
- 如果不使用 EliteMobs，您可以在世界生成后移除 BetterStructures。
- 如果使用 EliteMobs，请保留 BetterStructures 用于受保护区域管理，其影响微乎其微。
```