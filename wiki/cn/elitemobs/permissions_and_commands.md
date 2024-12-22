# 用户指令

*注意：所有玩家权限默认设置为 true。这意味着它们已经设置好了。*

*如果您不希望玩家通过权限访问特定功能，您必须拒绝该玩家的权限！*

| 命令                          |                              描述                              |
|-----------------------------|:------------------------------------------------------------:|
| `/elitemobs` / `/em`        |      主要命令，在一个易于访问的菜单中汇总插件中的所有玩家信息。*注意：*所有其他用户命令都在此主命令中。      |
| `/adventurersguild` / `/ag` |       在推荐的设置中，将玩家传送到冒险者公会世界，他们在那里与各种 EliteMobs NPC 互动。       |
| `/em shareItem`             |                  在聊天中链接一个物品，以便其他玩家可以看到其属性。                   |
| `/em help`                  | 列出所有命令。其余的用户命令通常由 NPC 或 `/em` 界面代替！您可以将光标悬停在命令上以获取有关它们用途的描述。 |
| `/em money check`           |                           显示玩家的金钱。                           |
| `/em pay <用户名> <金额>`        |                    允许玩家互相支付。交易将收取可配置的税费。                     |
| `/em spawntp`               |                        将玩家传送到服务器出生点。                         |

## NPC 指令

这些命令仅在您未安装带有 NPC 的冒险者公会中心时有用。

建议您安装这些内容，以便通过 NPC 运行所有这些命令，而不是让玩家记住这些命令的工作方式。

| 命令                         |           描述            |
|----------------------------|:-----------------------:|
| `/em rank`                 |  打开等级菜单或将玩家传送到冒险者公会中心。  |
| `/em shop procedural <玩家>` |   访问商店或将玩家传送到冒险者公会中心。   |
| `/em shop sell <玩家>`       | 访问商店出售菜单或将玩家传送到冒险者公会中心。 |
| `/em shop custom <玩家>`     | 访问自定义商店或将玩家传送到冒险者公会中心。  |
| `/em repair`               |  访问修理菜单或将玩家传送到冒险者公会中心。  |
| `/em enchant`              |  访问附魔菜单或将玩家传送到冒险者公会中心。  |
| `/em scrap`                |  访问分解菜单或将玩家传送到冒险者公会中心。  |
| `/em unbind`               |  访问解绑菜单或将玩家传送到冒险者公会中心。  |

## 内部用户命令

**这些命令旨在从游戏内菜单（例如任务菜单中的任务）运行。如果没有关于如何获取 ID 的说明，则意味着除了从游戏内菜单运行命令之外，无法获取该
ID。** 为了方便起见，这些命令已分为可识别和不可识别的类别。

### 可识别

| 命令                      | 描述         |
|-------------------------|------------|
| `/em dungeontp <地下城ID>` | 将玩家传送到地下城。 |

*注意：这旨在从 `/em` 菜单运行，因为玩家不可能猜到地下城 ID。地下城的 ID 与 `~/plugins/EliteMobs/dungeonpackages/` 中的
.yml 文件名相同。 <br/>您可以在使用 `/em` 命令时在控制台上看到 ID，并从“传送”页面中选择传送。*

### 不可识别

| 命令                          |                         描述                          |
|-----------------------------|:---------------------------------------------------:|
| `/em quest accept <任务ID>`   |                        接受任务。                        |
| `/em quest track <任务ID>`    |                        追踪任务。                        |
| `/em quest complete <任务ID>` |                        完成任务。                        |
| `/em quest leave <任务ID>`    |                        离开任务。                        |
| `/em track boss <uuid>`     | 追踪自定义 Boss。 注意：这旨在从 `/em` 菜单运行，因为玩家不可能猜到 Boss UUID。 |

# 管理员命令

<div>

**> > > `elitemobs.*` - EliteMobs 的管理员权限，用于完全访问！< < <**

</div>

| 命令                                                                     |                                         描述                                          |
|------------------------------------------------------------------------|:-----------------------------------------------------------------------------------:|
| `/em setup`                                                            |                                      打开主设置菜单。                                       |
| `/em spawn elite <实体类型> <等级> <力量1> <力量2> <力量3>`                        |                                     基于实体类型生成精英。                                     |
| - `/em spawn eliteAt <实体类型> <世界名称> <x> <y> <z> <等级> <力量1> <力量2> <力量3>` |                                   基于实体类型和位置生成精英。                                    |
| `/em spawn boss <文件名>`                                                 |                                  从配置文件生成自定义 Boss。                                   |
| `/em spawn boss <文件名> <等级>`                                            |                               从配置文件生成自定义 Boss 并覆盖等级。                                |
| `/em spawn bossAt <文件名> <世界名称> <x> <y> <z>`                            |                                在某个位置从配置文件生成自定义 Boss。                                |
| `/em spawn bossAt <文件名> <等级> <世界名称> <x> <y> <z>`                       |                             在某个位置从配置文件生成自定义 Boss 并覆盖等级。                             |
| `/em place boss <文件名>`                                                 |                                  将生成位置添加到区域 Boss。                                   |
| `/em place treasureChest <文件名>`                                        |                                   在玩家所站的位置添加一个宝箱。                                   |
| `/em remove`                                                           |                     永久删除一个精英怪物实体。精英/区域/超级/NPC 都有效。再次运行以退出删除模式。                      |
| `/em event <事件名称>`                                                     |                                     启动自定义定时事件。                                      |
| `/em place npc <npc文件名>`                                               |                                      生成一个 NPC。                                      |
| `/em stats`                                                            |                            获取当前活跃的 EliteMobs 实体和玩家的统计信息。                            |
| `/em loot menu`                                                        |                              打开一个菜单，您可以在其中获取任何自定义战利品。                               |
| `/em loot give <玩家> <文件名>`                                             |                                   将特定的自定义战利品给予玩家。                                   |
| `/em loot simulate <等级>`                                               |                                 模拟从设定等级的精英怪物掉落的物品。                                  |
| `/em loot simulate <等级> <次数>`                                          |                              模拟从设定等级的精英怪物掉落的物品，模拟指定次数。                              |
| `/em version`                                                          |                                       获取插件版本。                                       |
| `/em reload`                                                           |                                   重新加载插件。几乎每次都有效。                                   |
| `/em kill `                                                            |                                   杀死所有具有攻击性的精英怪物。                                   |
| `/em kill <半径>`                                                        |                                 杀死半径内的所有具有攻击性的精英怪物。                                 |
| `/em kill type <实体类型>`                                                 |                                    杀死特定类型的所有精英。                                     |
| `/em kill type <实体类型> <半径>`                                            |                                  杀死半径内的特定类型的所有精英。                                   |
| `/em loot debug <等级>`                                                  |                                    获取用于测试的调试物品。                                     |
| `/em money add <用户名> <金额>`                                             |                                    给玩家增加一定金额的金钱。                                    |
| `/em money addall <金额>`                                                |                                  给所有在线玩家增加一定金额的金钱。                                  |
| `/em money remove <用户名> <金额>`                                          |                                   从玩家身上移除一定金额的金钱。                                   |
| `/em money set <用户名> <金额>`                                             |                                     设置玩家的总货币金额。                                     |
| `/em rank <玩家> <声望等级> <公会等级>`                                          |                                     设置玩家的公会等级。                                      |
| `/em discord`                                                          |                                获取支持 Discord 服务器的链接。                                 |
| `/em discord <消息>`                                                     |                       如果正确配置了 DiscordSRV，则在 Discord 上发布调试消息。                        |
| `/em unbind force`                                                     |                                   解绑一个持有的灵魂绑定物品。                                    |
| `/em money check <玩家>`                                                 |                                     检查特定玩家的货币。                                      |
| `/em fireball`                                                         |                                  生成一个火球以测试精英爆炸再生。                                   |
| `/em transitiveBlocks register <文件名> <ON_SPAWN/ON_REMOVE>`             | 请参阅[传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks edit <文件名> <ON_SPAWN/ON_REMOVE>`                 | 请参阅[传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em /em transitiveBlocks registerArea <文件名> <ON_SPAWN/ON_REMOVE>`     | 请参阅[传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks editArea <文件名> <ON_SPAWN/ON_REMOVE>`             | 请参阅[传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks cancel`                                          | 请参阅[传递方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em protection bypass`                                                |                                 切换地下城保护。也适用于冒险者公会。                                  |

## 内部管理员命令

这些命令旨在在与菜单或聊天中的可交互文本交互时运行，而不是手动运行。

| 命令                         |            描述             |
|----------------------------|:-------------------------:|
| `/em setup done`           |      停止在管理员登录时显示消息。       |
| `/em setup toggle <地下城配置>` | 允许您切换指定的 EliteMobs 内容的安装。 |

# 原始权限：
```
permissions:
  elitemobs.*:
    description: 提供对所有 elitemobs 命令的访问权限
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
    description: 允许玩家与 NPC 互动以进行动态商店
    default: true
  elitemobs.shop.command:
    description: 允许玩家通过命令打开动态商店菜单
    default: true
  elitemobs.customshop.npc:
    description: 允许玩家与 NPC 互动以进行动态商店
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
    description: 允许玩家获得有关插件更新的通知
    default: op
  elitemobs.adventurersguild.teleport:
    description: 允许玩家使用 /ag 传送到冒险者公会中心
    default: true
  elitemobs.adventurersguild.command:
    description: 允许玩家使用 /em adventurersguild 命令打开等级菜单
    default: true
  elitemobs.rank.command:
    description: 允许玩家通过 /em rank 打开等级菜单
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
    description: 允许玩家传送到服务器的默认出生位置。
    default: true
  elitemobs.back.npc:
    description: 允许玩家与 NPC 互动以返回到之前的位置。
    default: true
  elitemobs.shareitem:
    description: 在聊天中分享一个持有的精英物品。
    default: true
  elitemobs.scrap.npc:
    description: 允许玩家在 NPC 处分解物品
    default: true
  elitemobs.scrap.command:
    description: 允许玩家使用命令分解物品
    default: true
  elitemobs.smelt.command:
    description: 允许玩家使用命令熔炼物品
    default: true
  elitemobs.smelt.npc:
    description: 允许玩家使用 NPC 熔炼物品
    default: true
  elitemobs.repair.command:
    description: 允许玩家使用 repair 命令打开修理精英物品的菜单
    default: true
  elitemobs.repair.npc:
    description: 允许玩家与 NPC 互动以修理物品
    default: true
  elitemobs.refiner.command:
    description: 允许玩家使用 refiner 命令打开升级精英碎片菜单
    default: true
  elitemobs.refiner.npc:
    description: 允许玩家与 NPC 互动以升级精英碎片
    default: true
  elitemobs.enhancer.command:
    description: 允许玩家使用 enhancer 命令打开升级精英物品的菜单
    default: true
  elitemobs.enhancer.npc:
    description: 允许玩家与 NPC 互动以升级精英物品
    default: true
  elitemobs.unbind.command:
    description: 允许玩家使用 unbind 命令打开解绑精英物品的菜单
    default: true
  elitemobs.unbind.npc:
    description: 允许玩家与解绑 NPC 互动以解绑精英物品
    default: true
  elitemobs.soulbind.bypass:
    description: 允许用户绕过灵魂绑定限制。仅建议管理员使用！
    default: false
  elitequest.*:
    description: 用于与任务相关的权限
    default: false
    op: false
```
