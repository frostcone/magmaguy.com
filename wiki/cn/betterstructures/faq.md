# 如何使用命令
- 去命令页寻找帮助: [命令页]($language$/betterstructures/commands.md)

# 检查结构出现的位置
- 如果你是服务器管理员并且没有关闭警告，你将在聊天中被通知当一个结构出现。
- 点击聊天信息以传送至结构（非Bedrock版）。
- 通过`/betterstructures warn`开关警告。

# 为什么结构可能不出现
- 通常，结构不会出现在已经被探索的区域。访问新区域获取结构。

<details> 
<summary>更多详情</summary>

结构不会出现在已经被探索的区域以避免填充过多并破坏玩家建筑。BetterStructures知道一个区域是否在它被安装前已经被探索，并且不会在那里放置结构。如果你的世界在安装BetterStructures前已经被完全探索，你需要再生成或者创建一个新的世界。

</details>

# EliteMobs 和 BetterStructures

## EliteMobs 提供的内容
- 了解 EliteMobs: [EliteMobs Wiki](#)
- 它在结构中添加boss。

## 获取预设的 EliteMobs 内容
- 可在 [magmaguy.itch.io](https://magmaguy.itch.io/) 和 [patreon.com/magmaguy](https://www.patreon.com/magmaguy) 获取

## 使用 EliteMobs 但不使用其他功能
- 你可以关闭其他的 EliteMobs 功能。想要禁用，改变以下设置：
  - events.yml: `timedEventsEnabled: false` 和 `actionEventsEnabled: false` 禁用所有事件
  - MobCombatSettings.yml: `doNaturalMobSpawning: false`禁用自然 elite 生成

## 添加一个 EliteMobs boss 到你的结构

-在你的标志的第一行添加 `[elitemobs]`
-在标志的第二/ 第三 / 第四行添加像 `test_boss.yml` 这样的boss 的文件名
-更多信息 [这里]($language$/betterstructures/creating_structures.md)

# BetterStructures 与其他插件

## MythicMobs
- 使用带有 `[mythicmobs]` 的标志来生成神话怪物，在标志的其他行上跟随怪物标识符。
- EliteMobs 更适合搭配 BetterStructures 使用，因为我制作了两个。

## MMOItems
- 在宝藏配置文件中添加 MMOItems，格式为 `mmoitems=<TYPE>@<ITEM-ID>`。

## 来自其他插件的自定义物品
- 使用 lootify 命令将任何物品添加到箱子中。详见 [命令页]($language$/betterstructures/commands.md)。

# 创建你自己的结构
- 学习如何：[结构创建指南]($language$/betterstructures/creating_structures.md)

# 性能影响及最小化
- 生成大量的结构可能会导致你的服务器变慢。
- 使用 [Chunky](https://www.spigotmc.org/resources/chunky.81534/) 来预生成你的世界并避免性能问题。
- 如果不使用 EliteMobs，你可以在世界生成后移除 BetterStructures。
- 使用 EliteMobs 时，保留 BetterStructures 管理保护区域，其影响可以忽略不计。