＃用户命令

*注意：所有玩家的权限默认为true，这意味着他们已经设置好了。*

*如果您不希望玩家通过权限访问某个特定的功能，那么您将不得不拒绝该玩家的权限！*

| 命令 |    描述    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | 主命令，将插件中的所有玩家信息简洁地集中在一个易于访问的菜单中。*注意：* 所有其他用户命令都在此主命令中。`/em menu`也是此命令的有效命令 |
| `/adventurersguild` / `/ag`     |在推荐的设置中，将玩家传送到冒险者工会世界，在那里他们可以与各种EliteMobs NPCs互动。|
| `/shareitem`     |在聊天中链接一个物品，以便其他玩家可以查看其状态。|
| `/em help`     |列出所有命令。其余的用户命令通常通过使用NPC或者`/em`界面来替换！|
| `/em wallet`     |显示玩家的金钱。|
| `/em pay <username> <amount>`     |让玩家之间支付。交易将对可配置的金额进行征税。|
| `/em updateitem`     |更新物品的游戏解释，以防其不同步。此命令用于调试目的，并不在正常游戏中要求。|
| `/em spawntp`     |将玩家传送到服务器刷新点。|

## NPC 命令

如果你没有安装带有NPC的冒险者公会集线器，那么这些命令只有一点用。

建议您将它们都安装起来，让这些命令都能通过NPC来运行，而不是让玩家去记住命令的工作方式。

| 命令 | 描述 |
|---------|:-----------:|
| `/em rank`     |     打开排行菜单或将玩家传送到冒险者公会集线器。     |
| `/em shop`     |     访问商店或将玩家传送到冒险者公会集线器。     |
| `/em customshop`     |     访问自定义商店或将玩家传送到冒险者公会集线器。     |
| `/em repair`     |     访问维修菜单或将玩家传送到冒险者公会集线器。     |
| `/em enchant`     |     访问附魔菜单或将玩家传送到冒险者公会集线器。     |
| `/em scrap`     |     访问废料菜单或将玩家传送到冒险者公会集线器。     |
| `/em unbind`     |     访问解绑菜单或将玩家传送到冒险者公会集线器。     |

## 内部用户命令

**这些命令是打算在游戏内的菜单中运行的，比如从任务菜单中的任务。如果没有关于如何获取ID的指示，那就意味着除了从游戏内菜单运行命令外，没有其他办法获取那个ID。** 为了方便，我们将这些分为可识别和不可识别的类别。

### 可识别

| 命令 | 描述 |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |将玩家传送到地牢。|
*注意：这应该从`/em`菜单中运行，因为对玩家来说，猜测地牢ID是不可能的。地牢的ID与`~/plugins/EliteMobs/dungeonpackages/`中的.yml文件名相同。 <br/>当你使用`/em`命令并从传送页面选择一个传送点时，你可以在控制台上看到ID。*

### 不可识别

| 命令 | 描述 |
|---------|:-----------:|
| `/em quest accept <questID>`     |     接受任务。     |
| `/em quest track <questID>`     |     跟踪任务。     |
| `/em quest complete <questID>`     |     完成任务。     |
| `/em quest leave <questID>`     |     离开任务。     |
| `/em trackcustomboss <uuid>`     |     跟踪一个自定义boss。注意：这应该从`/em`菜单中运行，因为对玩家来说，猜测boss UUID是不可能的。     |

＃管理员命令

<div>

**> > > `elitemobs.*` - 给Elite Mobs的管理员权限以获取全部访问权限！ < < <**

</div>

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup`     |     打开主设置菜单。     |
| `/em setup area <areaName>`     |     使用WorldGuard保护一个区域，用于小型地牢和冒险者世界中心。注意：当你使用推荐的设置方法设置东西时，无需手动运行这个。     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     依据实体类型产生一个精英。     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     依据实体类型和位置产生一个精英。     |
| `/em spawncustom <fileName>`     |     从配置文件产生自定义Boss。     |
| `/em spawncustomlevel <fileName> <level>`     |     从配置文件产生自定义Boss并覆盖级别。     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     在某个位置从配置文件产生一个自定义Boss。     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     在某个位置从配置文件产生一个自定义Boss并覆盖等级。     |
| `/em spawnsuper <EntityType>`     |     基于实体类型产生一个超级生物。     |
| `/em addSpawnLocation <fileName>`     |     向定区Boss添加一个生成位置。     |
| `/em addTreasureChest <fileName>`     |     在玩家站立的位置添加一个宝箱。     |
| `/em setLeashRadius <fileName> <radius>`     |     向Regional Boss添加一个生成位置。     |
| `/em remove`     |     永久性地移除一个精英生物实体。精英/区域/超级/NPCs都有效。再次运行以退出移除模式。     |
| `/em debug <name>`     |     永久性地移除一个精英生物实体。精英/区域/超级/NPCs都有效。再次运行以退出移除模式。     |
| `/em debug <name>`     |     为玩家或区域boss打开一个debug屏幕。     |
| `/em event <eventName>`     |     启动一个自定义计时事件。     |
| `/em spawnnpc <npcFileName>`     |     产生一个NPC。     |
| `/em stats`     |     获取当前活跃的EliteMobs实体和玩家的状态。     |
| `/em getloot`     |     打开一个菜单，你可以从这里获取任何自定义掉落。     |
| `/em getloot <filename>`     |     获取特定的自定义掉落。     |
| `/em giveloot <filename> <player>`     |     给特定的玩家发放特定的自定义掉落。     |
| `/em simloot <level>`     |     模拟从固定层级的精英生物那里掉落物品。     |
| `/em simloot <level> <times>`     |     模拟从固定层级的精英生物那里掉落物品固定次数。     |
| `/em version`     |     获取插件的版本。     |
| `/em reload`     |     重载插件。几乎每次都可以工作。     |
| `/em killaggressive`     |     杀掉所有的攻击型精英怪。     |
| `/em killaggressive <radius>`     |     在一个半径内杀掉所有的攻击型精英怪。     |
| `/em killpassive`     |     杀掉所有的闲散的超级怪物。     |
| `/em killpassive <radius>`     |     在一个半径内杀掉所有的闲散的超级怪物。     |
| `/em killtype <entityType>`     |     杀掉一个具体类型的精英。     |
| `/em killtype <entityType> <radius>`     |     在一个半径内杀掉一个具体类型的精英。     |
| `/em gettier <tier>`     |     获取用于测试目的的debug物品。     |
| `/em money add <username> <amount>`     |     给玩家添加规定的金额。     |
| `/em money addall <amount>`     |     给所有在线的玩家添加规定的金额。     |
| `/em money remove <username> <amount>`     |     从玩家那里移除规定的金额。     |
| `/em money set <username> <amount>`     |     设置玩家的总货币数。     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     设置玩家的公会等级。     |
| `/em discord`     |     获取支持Discord服务器的链接。     |
| `/em discord <message>`     |     如果DiscordSRV配置正确，那么在Discord上发布一个debug信息。     |
| `/em forceunbind`     |     （强制）解绑持有的有灵魂绑定的物品。     |
| `/em relativecoords <minidungeon>`     |     获取到已安装地牢的相对坐标。     |
| `/em wallet <player>`     |     检查特定玩家的货币。     |
| `/em fireball`     |     生成一个火球来测试精英的爆炸恢复。     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     查看[互动（Transitive） Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |      查看[互动 Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     查看[互动 Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     查看[互动 Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。     |
| `/em cancelblocks`     |     查看[互动 Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。     |
| `/em debugmode`     |     切换debug模式，显示怪物的生成和消失在控制台，并允许追踪。     |

## 内部管理命令

当与菜单或在聊天上可以互动的文本交互时，这些命令就会运行，而不是手动运行。

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup done`     |     停止在管理员登录时显示消息。     |
| `/em setup minidungeon <minidungeonName>`     |     安装一个迷你地牢。     |
| `/em setup unminidungeon`     |     卸载一个迷你地牢。     |
| `/em setup unminidungeon noPaste`     |     卸载一个minidungeon，而不撤销WorldEdit的粘贴。     |
| `/em trace <uuid>`     |     追踪一个自定义Boss的生成/消失。需要debug模式开启。     |
| `/em debugtp <uuid>`     |     传送到被追踪的自定义Boss的位置。需要debug模式开启。     |
| `/em generateresourcepack`     |     生成资源包。如何使用此功能，请查看wiki中有关自定义模型的条目。     |
| `/em updateresourcepack`     |     在server.properties配置中更新资源包的SHA1。如何使用此功能，请查看wiki中有关自定义模型的条目。     |

# 原始权限：

```
权限:
elitemobs.*:
描述: 提供访问所有elitemobs命令的权限
子项:
elitemobs.stats: 真
elitemobs.checktier.others: 真
elitemobs.versionnotification: 真
elitemobs.currency.check.others: 真
默认: 操作
elitemobs.stats:
描述: 允许玩家运行 /elitemobs stats 命令
默认: 操作
elitemobs.version:
描述: 允许玩家运行 /elitemobs version 命令
默认: 真
elitemobs.shop.npc:
描述: 允许玩家与NPC交互进行动态购物
默认: 真
elitemobs.shop.command:
描述: 允许玩家通过命令打开动态购物菜单
默认: 真
elitemobs.customshop.npc:
描述: 允许玩家与NPC交互进行动态购物
默认: 真
elitemobs.customshop.command:
描述: 允许玩家通过命令打开动态购物菜单
默认: 真
elitemobs.currency.pay:
描述: 允许玩家运行 /elitemobs pay [用户名] [金额] 命令
默认: 真
elitemobs.currency.check:
描述: 允许玩家运行 /elitemobs wallet 命令
默认: 真
elitemobs.currency.check.others:
描述: 允许玩家运行 /elitemobs check [用户名] 命令
默认: 操作
elitemobs.events:
描述: 允许玩家启动所有事件
默认: 真
elitemobs.checktier.others:
描述: 允许玩家运行 /elitemobs checktier [player] 命令
默认: 操作
elitemobs.gettier:
描述: 允许玩家运行 /elitemobs gettier [tier] 命令
默认: 操作
elitemobs.versionnotification:
描述: 允许玩家获取插件更新通知
默认: 操作
elitemobs.adventurersguild.teleport:
描述: 允许玩家使用 /ag 命令传送到冒险者公会中心
默认: 真
elitemobs.adventurersguild.command:
描述: 允许玩家使用 /em adventurersguild 命令访问排名菜单
默认: 真
elitemobs.rank.command:
描述: 允许玩家通过 /em rank 命令打开排名菜单
默认: 真
elitemobs.rank.npc:
描述: 允许玩家通过NPC访问 /em rank 菜单
默认: 真
elitemobs.quest.command:
描述: 允许玩家通过命令接受任务
默认: 真
elitemobs.quest.npc:
描述: 允许玩家通过以liteMobs NPC接受任务
默认: 真
elitemobs.dungeontp:
描述: 允许玩家传送到elitemobs设置的位置
默认: 真
elitemobs.spawntp:
描述: 允许玩家传送到服务器的默认出生地点
默认: 真
elitemobs.back.npc:
描述: 允许玩家与NPC交互以返回之前的位置
默认: 真
elitemobs.shareitem:
描述: 在聊天中分享持有的精英物品
默认: 真
elitemobs.scrap.npc:
描述: 允许玩家在NPC处拆解物品
默认: 真
elitemobs.scrap.command:
描述: 允许玩家使用命令拆解物品
默认: 真
elitemobs.smelt.command:
描述: 允许玩家使用命令熔炼物品
默认: 真
elitemobs.smelt.npc:
描述: 允许玩家在NPC处熔炼物品
默认: 真
elitemobs.repair.command:
描述: 允许玩家使用修复命令打开装备精英物品的菜单
默认: 真
elitemobs.repair.npc:
描述: 允许玩家与NPC互动进行物品修理
默认: 真
elitemobs.refiner.command:
描述: 允许玩家使用提炼命令打开升级精英废料的菜单
默认: 真
elitemobs.refiner.npc:
描述: 允许玩家与NPC互动升级精英废料
默认: 真
elitemobs.enhancer.command:
描述: 允许玩家使用增强器命令打开升级精英物品的菜单
默认: 真
elitemobs.enhancer.npc:
描述: 允许玩家与NPC互动升级精英物品
默认: 真
elitemobs.unbind.command:
描述: 允许玩家使用解绑命令打开解绑精英物品的菜单
默认: 真
elitemobs.unbind.npc:
描述: 允许玩家与解绑NPC互动以解绑精英物品
默认: 真
elitemobs.soulbind.bypass:
描述: 允许用户绕过灵魂绑定的限制。 只推荐给管理员!
默认: 否
elitequest.*:
描述: 用于任务相关的权限
默认: 否
操作: 否
```