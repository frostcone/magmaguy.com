# 如何使用指令

- 请前往指令页面获取帮助：[指令页面]($language$/betterstructures/commands.md)

# 如何检查结构出现的位置

- 如果您是服务器管理员且未关闭警告，当结构出现时，您会在聊天中收到通知。
- 点击聊天消息即可传送至该结构（基岩版除外）。
- 使用 `/betterstructures warn` 命令来开启或关闭警告。

# 为什么结构可能不出现

- 通常情况下，结构不会出现在已探索过的区域。请前往新的区域寻找结构。

<details>
<summary>更多细节</summary>

结构不会出现在已探索过的区域，以避免过度填充这些区域并破坏玩家的建筑。BetterStructures
可以识别一个区域在安装前是否被探索过，并且不会在该区域放置结构。如果您的世界在安装 BetterStructures
前已被完全探索，您需要重新生成世界或创建一个新世界。

</details>

# EliteMobs 和 BetterStructures

## EliteMobs 提供了什么

- 了解更多关于 EliteMobs 的信息：[EliteMobs Wiki](#)
- 它会在结构中添加 Boss。

## 获取预制的 EliteMobs 内容

- 可在 [magmaguy.itch.io](https://magmaguy.itch.io/) 和 [patreon.com/magmaguy](https://www.patreon.com/magmaguy) 获取。

## 在不使用其他功能的情况下使用 EliteMobs

- 您可以关闭 EliteMobs 的其他功能。要禁用，请在以下文件中更改设置：
    - events.yml: `timedEventsEnabled: false` 和 `actionEventsEnabled: false` 禁用所有事件
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` 禁用自然精英怪物的生成

## 在您的结构中添加 EliteMobs Boss

- 在您的告示牌的第一行添加 `[elitemobs]`
- 在告示牌的第二/三/四行添加 Boss 的文件名，例如 `test_boss.yml`
- 更多信息请参考[此处]($language$/betterstructures/creating_structures.md)

# BetterStructures 与其他插件的配合

## MythicMobs

- 使用带有 `[mythicmobs]` 的告示牌，并在其他行添加怪物标识符来生成 MythicMobs 怪物。
- EliteMobs 更适合与 BetterStructures 搭配使用，因为它们都是我制作的。

## MMOItems

- 在战利品配置文件中使用 `mmoitems=<TYPE>@<ITEM-ID>` 添加 MMOItems。

## 来自其他插件的自定义物品

- 使用 lootify 命令向箱子中添加任何物品。请查看[指令页面]($language$/betterstructures/commands.md)。

# 创建您自己的结构

- 了解如何创建：[结构创建指南]($language$/betterstructures/creating_structures.md)

# 性能影响和最小化

- 生成大量结构可能会降低服务器速度。
- 使用 [Chunky](https://www.spigotmc.org/resources/chunky.81534/) 来预生成您的世界，以避免性能问题。
- 如果不使用 EliteMobs，您可以在世界生成后删除 BetterStructures。
- 如果使用 EliteMobs，请保留 BetterStructures 以进行保护区域管理，对性能影响很小。
