# 用户命令

*注意：默认情况下，所有玩家权限都设置为 true。这意味着它们已经设置好了。*

*如果您不希望玩家通过权限访问特定功能，则必须拒绝该玩家的权限！*

| 命令                    | 描述                                                                                                                                                                |
|-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`  | 主命令，将插件中的所有玩家信息压缩在一个易于访问的菜单中。*注意：*所有其他用户命令都在此主命令中。`/em menu` 也是此命令的有效命令。                             |
| `/adventurersguild` / `/ag` | 在推荐的设置中，将玩家传送到冒险家公会世界，在那里他们可以与各种 EliteMobs NPC 交互。                                                                                 |
| `/shareitem`           | 在聊天中链接一个物品，以便其他玩家可以看到其属性。                                                                                                                       |
| `/em help`            | 列出所有命令。其余的用户命令通常被 NPC 或 `/em` 界面的使用所取代！                                                                                                     |
| `/em wallet`           | 显示玩家金钱。                                                                                                                                                            |
| `/em pay <用户名> <金额>`    | 让玩家互相付款。交易会按可配置的金额征税。                                                                                                                                  |
| `/em updateitem`        | 更新物品的传说，以防它不同步。此命令用于调试目的，在正常游戏中不需要。                                                                                                         |
| `/em spawntp`          | 将玩家传送到服务器生成点。                                                                                                                                              |

## NPC 命令

这些命令仅在您没有安装带有 NPC 的冒险家公会中心时才有用。

建议您安装这些命令，以便通过 NPC 运行所有这些命令，而不是让玩家记住命令是如何工作的。

| 命令                     | 描述                                                                                                |
|--------------------------|:-----------------------------------------------------------------------------------------------------:|
| `/em rank`              | 打开等级菜单或将玩家传送到冒险家公会中心。                                                               |
| `/em shop`              | 访问商店或将玩家传送到冒险家公会中心。                                                               |
| `/em customshop`        | 访问自定义商店或将玩家传送到冒险家公会中心。                                                            |
| `/em repair`            | 访问修理菜单或将玩家传送到冒险家公会中心。                                                               |
| `/em enchant`           | 访问附魔菜单或将玩家传送到冒险家公会中心。                                                               |
| `/em scrap`             | 访问报废菜单或将玩家传送到冒险家公会中心。                                                               |
| `/em unbind`            | 访问解绑菜单或将玩家传送到冒险家公会中心。                                                               |

## 内部用户命令

**这些命令 meant to be 从游戏内菜单（例如任务菜单中的任务）运行。如果没有关于如何获取 ID 的说明，则意味着除了从游戏内菜单运行命令之外，无法获取该 ID。** 为方便起见，这些命令已分为可识别和不可识别类别。

### 可识别

| 命令                             | 描述                 |
|----------------------------------|:----------------------:|
| `/em dungeontp <地下城 ID>` | 将玩家传送到地下城。 |
*注意：这 meant to be 从 `/em` 菜单运行，因为玩家不可能猜到地下城 ID。地下城的 ID 与 `~/plugins/EliteMobs/dungeonpackages/` 中的 .yml 文件名相同。 <br/>您可以在使用 `/em` 命令并在“传送”页面中选择传送时在控制台上看到 ID。*

### 不可识别

| 命令                                  | 描述                |
|---------------------------------------|:---------------------:|
| `/em quest accept <任务 ID>`           | 接受任务。          |
| `/em quest track <任务 ID>`           | 追踪任务。          |
| `/em quest complete <任务 ID>`        | 完成任务。          |
| `/em quest leave <任务 ID>`           | 离开任务。          |
| `/em trackcustomboss <uuid>`          | 追踪自定义 Boss。注意：这 meant to be 从 `/em` 菜单运行，因为玩家不可能猜到 Boss UUID。 |

# 管理员命令

<div>

**> > > `elitemobs.*` - EliteMobs 的管理员权限，用于完全访问！ < < <**

</div>

| 命令                                     | 描述                                                                                                                                                                                                      |
|------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em setup`                             | 打开主设置菜单。                                                                                                                                                                                        |
| `/em setup area <区域名称>`               | 使用 WorldGuard 保护区域，用于小型地下城和冒险家世界中心。注意：使用推荐的设置方法设置时，您无需手动运行此命令。                                                                                                     |
| `/em spawnelite <实体类型> <等级> <力量 1> <力量 2> <力量 3>` | 根据实体类型生成精英。                                                                                                                                                                                   |
| - `/em spawnlocationelite <实体类型> <世界名称> <x> <y> <z> <等级> <力量 1> <力量 2> <力量 3>` | 根据实体类型和位置生成精英。                                                                                                                                                                              |
| `/em spawncustom <文件名>`                 | 从配置文件生成自定义 Boss。                                                                                                                                                                                   |
| `/em spawncustomlevel <文件名> <等级>`      | 从配置文件生成自定义 Boss 并覆盖等级。                                                                                                                                                                     |
| `/em spawnlocationcustom <文件名> <世界名称> <x> <y> <z>` | 在某个位置从配置文件生成自定义 Boss。                                                                                                                                                                          |
| `/em spawnlocationcustomlevel <文件名> <世界名称> <x> <y> <z>` | 在某个位置从配置文件生成自定义 Boss 并覆盖等级。                                                                                                                                                              |
| `/em spawnsuper <实体类型>`                | 根据实体类型生成超级怪物。                                                                                                                                                                                   |
| `/em addSpawnLocation <文件名>`            | 向区域 Boss 添加生成位置。                                                                                                                                                                                    |
| `/em addTreasureChest <文件名>`           | 在玩家站立的位置添加宝箱。                                                                                                                                                                                   |
| `/em setLeashRadius <文件名> <半径>`       | 向区域 Boss 添加生成位置。                                                                                                                                                                                    |
| `/em remove`                            | 永久移除精英怪物实体。精英/区域/超级/NPC 都可以。再次运行以退出移除模式。                                                                                                                                   |
| `/em debug <名称>`                       | 永久移除精英怪物实体。精英/区域/超级/NPC 都可以。再次运行以退出移除模式。                                                                                                                                   |
| `/em debug <名称>`                       | 为玩家或区域 Boss 打开调试屏幕。                                                                                                                                                                            |
| `/em event <事件名称>`                  | 启动自定义定时事件。                                                                                                                                                                                     |
| `/em spawnnpc <npc文件名>`                | 生成 NPC。                                                                                                                                                                                          |
| `/em stats`                              | 获取当前活跃的 EliteMobs 实体和玩家的统计信息。                                                                                                                                                               |
| `/em getloot`                           | 打开一个菜单，您可以在其中获取任何自定义战利品。                                                                                                                                                           |
| `/em getloot <文件名>`                    | 获取特定的自定义战利品。                                                                                                                                                                              |
| `/em giveloot <文件名> <玩家>`             | 将特定的自定义战利品赠送给玩家。                                                                                                                                                                           |
| `/em simloot <等级>`                     | 模拟设定等级的精英怪物的掉落物。                                                                                                                                                                          |
| `/em simloot <等级> <次数>`                 | 模拟设定等级的精英怪物的掉落物一定次数。                                                                                                                                                                 |
| `/em version`                           | 获取插件版本。                                                                                                                                                                                          |
| `/em reload`                            | 重新加载插件。几乎每次都有效。                                                                                                                                                                        |
| `/em killaggressive`                    | 杀死所有攻击性精英怪物。                                                                                                                                                                                  |
| `/em killaggressive <半径>`               | 杀死半径范围内的所有攻击性精英怪物。                                                                                                                                                                 |
| `/em killpassive`                     | 杀死所有被动超级怪物。                                                                                                                                                                                  |
| `/em killpassive <半径>`                | 杀死半径范围内的所有被动超级怪物。                                                                                                                                                                 |
| `/em killtype <实体类型>`                 | 杀死所有特定类型的精英。                                                                                                                                                                                   |
| `/em killtype <实体类型> <半径>`            | 杀死半径范围内所有特定类型的精英。                                                                                                                                                                          |
| `/em gettier <等级>`                      | 获取调试物品以进行测试。                                                                                                                                                                                 |
| `/em money add <用户名> <金额>`             | 向玩家添加一定数量的钱。                                                                                                                                                                                    |
| `/em money addall <金额>`                | 向所有在线玩家添加一定数量的钱。                                                                                                                                                                            |
| `/em money remove <用户名> <金额>`          | 从玩家中移除一定数量的钱。                                                                                                                                                                                   |
| `/em money set <用户名> <金额>`            | 设置玩家的总货币数量。                                                                                                                                                                                    |
| `/em setrank <玩家> <声望等级> <公会等级>`     | 设置玩家的公会等级。                                                                                                                                                                                     |
| `/em discord`                           | 获取支持 Discord 服务器的链接。                                                                                                                                                                        |
| `/em discord <消息>`                      | 如果 DiscordSRV 配置正确，则在 Discord 上发布调试消息。                                                                                                                                                         |
| `/em forceunbind`                       | 解绑一个手持的灵魂绑定物品。                                                                                                                                                                              |
| `/em relativecoords <小型地下城>`         | 获取到已安装地下城的相对坐标。                                                                                                                                                                           |
| `/em wallet <玩家>`                      | 检查特定玩家的货币。                                                                                                                                                                                 |
| `/em fireball`                          | 生成一个火球来测试精英爆炸再生。                                                                                                                                                                       |
| `/em registerblocks <区域_Boss_文件.yml> <on_spawn/on_remove>` | 请参阅 [可传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。                                                                                                    |
| `/em registerblocksedit <区域_Boss_文件.yml> <on_spawn/on_remove>` | 请参阅 [可传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。                                                                                                    |
| `/em registerblocksarea <区域_Boss_文件.yml> <on_spawn/on_remove>` | 请参阅 [可传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。                                                                                                    |
| `/em registerblocksareaedit <区域_Boss_文件.yml> <on_spawn/on_remove>` | 请参阅 [可传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。                                                                                                    |
| `/em cancelblocks`                       | 请参阅 [可传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。                                                                                                    |
| `/em debugmode`                          | 切换调试模式，在控制台上显示怪物生成和消失，并允许跟踪。                                                                                                                                                             |

## 内部管理员命令

这些命令 meant to be 在与菜单或聊天中的可交互文本交互时运行，而不是手动运行。

| 命令                         | 描述                                             |
|------------------------------|:-------------------------------------------------|
| `/em setup done`            | 停止在管理员登录时显示消息。                   |
| `/em setup minidungeon <小型地下城名称>` | 安装小型地下城。                               |
| `/em setup minidungeon <小型地下城名称>` | 卸载小型地下城。                               |
| `/em trace <uuid>`           | 追踪自定义 Boss 的生成/消失。需要打开调试模式。 |
| `/em debugtp <uuid>`          | 传送到被追踪的自定义 Boss 的位置。需要打开调试模式。 |
| `/em generateresourcepack`  | 生成资源包。查看有关如何使用此功能的自定义模型的维基条目。 |
| `/em updateresourcepack`   | 更新 server.properties 配置中的资源包的 SHA1。查看有关如何使用此功能的自定义模型的维基条目。 |

# 原始权限：
```
permissions:
  elitemobs.*:
    description: 授予对所有 elitemobs 命令的访问权限
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: 允许玩家运行 /elitemobs stats
    default: op
  elitemobs.version:
    description: 允许玩家运行 /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: 允许玩家与 NPC 交互以获取动态商店
    default: true
  elitemobs.shop.command:
    description: 允许玩家通过命令打开动态商店菜单
    default: true
  elitemobs.customshop.npc:
    description: 允许玩家与 NPC 交互以获取动态商店
    default: true
  elitemobs.customshop.command:
    description: 允许玩家通过命令打开动态商店菜单
    default: true
  elitemobs.currency.pay:
    description: 允许玩家运行 /elitemobs pay [用户名] [金额]
    default: true
  elitemobs.currency.check:
    description: 允许玩家运行 /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: 允许玩家运行 /elitemobs check [用户名]
    default: op
  elitemobs.events:
    description: 允许玩家启动所有事件
    default: true
  elitemobs.checktier.others:
    description: 允许玩家运行 /elitemobs checktier [玩家]
    default: op
  elitemobs.gettier:
    description: 允许玩家运行 /elitemobs gettier [等级]
    default: op
  elitemobs.versionnotification:
    description: 允许玩家接收有关插件更新的通知
    default: op
  elitemobs.adventurersguild.teleport:
    description: 允许玩家使用 /ag 传送到冒险家公会中心
    default: true
  elitemobs.adventurersguild.command:
    description: 允许玩家使用 /em adventurersguild 命令排名菜单
    default: true
  elitemobs.rank.command:
    description: 允许玩家通过 /em rank 打开排名菜单
    default: true
  elitemobs.rank.npc:
    description: 允许玩家通过 NPC 访问 /em rank 菜单
    default: true
  elitemobs.quest.command:
    description: 允许玩家通过命令接受任务
    default: true
  elitemobs.quest.npc:
    description: 允许玩家通过 EliteMobs NPC 接受任务
    default: true
  elitemobs.dungeontp:
    description: 允许玩家传送到 elitemobs 设置的位置
    default: true
  elitemobs.spawntp:
    description: 允许玩家传送到服务器的默认生成位置。
    default: true
  elitemobs.back.npc:
    description: 允许玩家与 npc 交互以返回到先前的位置。
    default: true
  elitemobs.shareitem:
    description: 在聊天中分享一个手持的精英物品。
    default: true
  elitemobs.scrap.npc:
    description: 允许玩家在 npc 处报废物品
    default: true
  elitemobs.scrap.command:
    description: 允许玩家使用命令报废物品
    default: true
  elitemobs.smelt.command:
    description: 允许玩家使用命令熔炼物品
    default: true
  elitemobs.smelt.npc:
    description: 允许玩家使用 npc 熔炼物品
    default: true
  elitemobs.repair.command:
    description: 允许玩家使用修理命令打开修理精英物品的菜单
    default: true
  elitemobs.repair.npc:
    description: 允许玩家与 NPC 交互以修理物品
    default: true
  elitemobs.refiner.command:
    description: 允许玩家使用精炼器命令打开升级精英碎片的菜单
    default: true
  elitemobs.refiner.npc:
    description: 允许玩家与 NPC 交互以升级精英碎片
    default: true
  elitemobs.enhancer.command:
    description: 允许玩家使用强化器命令打开升级精英物品的菜单
    default: true
  elitemobs.enhancer.npc:
    description: 允许玩家与 NPC 交互以升级精英物品
    default: true
  elitemobs.unbind.command:
    description: 允许玩家使用解绑命令打开解绑精英物品的菜单
    default: true
  elitemobs.unbind.npc:
    description: 允许玩家与解绑师 NPC 交互以解绑精英物品
    default: true
  elitemobs.soulbind.bypass:
    description: 允许用户绕过灵魂绑定限制。仅建议管理员使用！
    default: false
  elitequest.*:
    description: 用于与任务相关的权限
    default: false
    op: false
```


