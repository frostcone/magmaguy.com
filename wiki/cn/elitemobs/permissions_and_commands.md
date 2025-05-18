```
# 用户命令

*注意：所有玩家权限默认设置为 true。这意味着它们已经设置好了。*

*如果您不希望玩家通过权限访问特定功能，则必须拒绝该玩家该权限！*

| 命令 | 描述 |
|---------|:-----------------:|
| `/elitemobs` / `/em` | 主命令，将插件中所有玩家信息整合到一个易于访问的菜单中。*注意：*所有其他用户命令都在此主命令中。 |
| `/adventurersguild` / `/ag` | 在推荐的设置中，将玩家传送到冒险者公会世界，在那里他们可以与各种 EliteMobs NPC 互动。 |
| `/em shareItem` | 在聊天中链接一个物品，以便其他玩家可以看到其属性。 |
| `/em help` | 列出所有命令。其余用户命令通常被 NPC 或 `/em` 界面取代！您可以将光标悬停在命令上以获取其功能的描述。 |
| `/em money check` | 显示玩家金钱。 |
| `/em pay <username> <amount>` | 允许玩家互相支付。交易会收取可配置的税费。 |
| `/em spawntp` | 将玩家传送到服务器出生点。 |

## NPC 命令

这些命令仅在您未安装带有 NPC 的冒险者公会中心时有用。

建议您安装这些，以便通过 NPC 运行所有这些命令，而不是让玩家记住命令的工作方式。

| 命令 | 描述 |
|---------|:-----------:|
| `/em rank` | 打开等级菜单或将玩家传送到冒险者公会中心。 |
| `/em shop procedural <player>` | 访问商店或将玩家传送到冒险者公会中心。 |
| `/em shop sell <player>` | 访问商店出售菜单或将玩家传送到冒险者公会中心。 |
| `/em shop custom <player>` | 访问自定义商店或将玩家传送到冒险者公会中心。 |
| `/em repair` | 访问修复菜单或将玩家传送到冒险者公会中心。 |
| `/em enchant` | 访问附魔菜单或将玩家传送到冒险者公会中心。 |
| `/em scrap` | 访问分解菜单或将玩家传送到冒险者公会中心。 |
| `/em unbind` | 访问解绑菜单或将玩家传送到冒险者公会中心。 |

## 内部用户命令

**这些命令旨在从游戏内菜单运行，例如任务菜单中的任务。如果没有说明如何获取 ID，则表示除了从游戏内菜单运行命令之外，无法获取该 ID。** 为了方便起见，这些命令已分为可识别和不可识别类别。

### 可识别

| 命令 | 描述 |
|---------|-------------|
|`/em dungeontp <dungeonid>` | 将玩家传送到一个地下城。 |
*注意：这应该从 `/em` 菜单运行，因为玩家不可能猜到地下城 ID。地下城的 ID 与 `~/plugins/EliteMobs/dungeonpackages/` 中的 .yml 文件名相同。<br/>在使用 `/em` 命令时，您可以在控制台上看到 ID，并从传送页面选择一个传送点。*

### 不可识别

| 命令 | 描述 |
|---------|:-----------:|
| `/em quest accept <questID>` | 接受一个任务。 |
| `/em quest track <questID>` | 追踪一个任务。 |
| `/em quest complete <questID>` | 完成一个任务。 |
| `/em quest leave <questID>` | 放弃一个任务。 |
| `/em track boss <uuid>` | 追踪一个自定义 Boss。注意：这应该从 `/em` 菜单运行，因为玩家不可能猜到 Boss 的 UUID。 |

# 管理员命令

<div>

**> > > `elitemobs.*` - EliteMobs 的管理员权限，拥有完全访问权！ < < <**

</div>

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup` | 打开主设置菜单。 |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>` | 根据实体类型生成一个精英怪。 |
| `- `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`` | 根据实体类型和位置生成一个精英怪。 |
| `/em spawn boss <fileName>` | 从配置文件生成一个自定义 Boss。 |
| `/em spawn boss <fileName> <level>` | 从配置文件生成一个自定义 Boss 并覆盖等级。 |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>` | 在指定位置从配置文件生成一个自定义 Boss。 |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>` | 在指定位置从配置文件生成一个自定义 Boss 并覆盖等级。 |
| `/em place boss <fileName>` | 为区域 Boss 添加一个生成位置。 |
| `/em place treasureChest <fileName>` | 在玩家站立的位置添加一个宝箱。 |
| `/em remove` | 永久移除一个 Elite Mob 实体。精英怪/区域 Boss/超级 Boss/NPC 都适用。再次运行退出移除模式。 |
| `/em event <eventName>` | 启动一个自定义计时事件。 |
| `/em place npc <npcFileName>` | 生成一个 NPC。 |
| `/em stats` | 获取当前活跃的 EliteMobs 实体和玩家的统计信息。 |
| `/em loot menu` | 打开一个菜单，您可以在其中获取任何自定义战利品。 |
| `/em loot give <player> <filename>` | 给玩家特定的自定义战利品。 |
| `/em loot simulate <level>` | 模拟指定等级的精英怪掉落。 |
| `/em loot simulate <level> <times>` | 模拟指定等级的精英怪掉落指定次数。 |
| `/em version` | 获取插件版本。 |
| `/em reload` | 重载插件。几乎每次都有效。 |
| `/em kill ` | 杀死所有攻击性精英怪。 |
| `/em kill <radius>` | 杀死半径范围内的所有攻击性精英怪。 |
| `/em kill type <entityType>` | 杀死特定类型的所有精英怪。 |
| `/em kill type <entityType> <radius>` | 杀死半径范围内特定类型的所有精英怪。 |
| `/em loot debug <level>` | 获取用于测试的调试物品。 |
| `/em money add <username> <amount>` | 给玩家增加指定金额的金钱。 |
| `/em money addall <amount>` | 给所有在线玩家增加指定金额的金钱。 |
| `/em money remove <username> <amount>` | 从玩家移除指定金额的金钱。 |
| `/em money set <username> <amount>` | 设置玩家的总金钱数量。 |
| `/em rank <player> <prestigeLevel> <guildLevel>` | 设置玩家的公会等级。 |
| `/em discord` | 获取支持 Discord 服务器的链接。 |
| `/em discord <message>` | 如果 DiscordSRV 配置正确，则在 Discord 上发布调试消息。 |
| `/em unbind force` | 解绑手持的灵魂绑定物品。 |
| `/em money check <player>` | 检查特定玩家的金钱数量。 |
| `/em fireball` | 生成一个火球以测试精英爆炸再生。 |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>` | 参见 [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>` | 参见 [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>` | 参见 [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>` | 参见 [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks cancel` | 参见 [Transitive Blocks]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em protection bypass` | 切换地下城保护。也适用于冒险者公会。 |

## 内部管理员命令

这些命令旨在在与菜单或聊天中的可交互文本互动时运行，而不是手动运行。

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup done` | 停止在管理员登录时显示消息。 |
| `/em setup toggle <dungeonConfig>` | 允许您切换指定 EliteMobs 内容的安装。 |

# 原始权限：
```
permissions:
  elitemobs.*:
    description: 授予访问所有 elitemobs 命令的权限
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: 允许玩家运行 /elitemobs stats
    default: op
  elitemobs.version:
    description: 允许玩家运行 /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: 允许玩家与 NPC 互动以使用动态商店
    default: true
  elitemobs.shop.command:
    description: 允许玩家通过命令打开动态商店菜单
    default: true
  elitemobs.customshop.npc:
    description: 允许玩家与 NPC 互动以使用动态商店
    default: true
  elitemobs.customshop.command:
    description: 允许玩家通过命令打开动态商店菜单
    default: true
  elitemobs.money.pay:
    description: 允许玩家运行 /elitemobs pay [username] [amount]
    default: true
  elitemobs.money.check:
    description: 允许玩家运行 /elitemobs wallet
    default: true
  elitemobs.money.check.others:
    description: 允许玩家运行 /elitemobs check [username]
    default: op
  elitemobs.events:
    description: 允许玩家启动所有事件
    default: true
  elitemobs.checktier.others:
    description: 允许玩家运行 /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: 允许玩家运行 /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: 允许玩家接收插件更新通知
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
    description: 允许玩家传送到 EliteMobs 设置的位置
    default: true
  elitemobs.spawntp:
    description: 允许玩家传送到服务器的默认出生点。
    default: true
  elitemobs.back.npc:
    description: 允许玩家与 NPC 互动以返回先前位置。
    default: true
  elitemobs.shareitem:
    description: 在聊天中分享手持的精英物品。
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
    description: 允许玩家使用修复命令打开精英物品修复菜单
    default: true
  elitemobs.repair.npc:
    description: 允许玩家与 NPC 互动以修复物品
    default: true
  elitemobs.refiner.command:
    description: 允许玩家使用精炼命令打开升级精英碎片菜单
    default: true
  elitemobs.refiner.npc:
    description: 允许玩家与 NPC 互动以升级精英碎片
    default: true
  elitemobs.enhancer.command:
    description: 允许玩家使用强化命令打开升级精英物品菜单
    default: true
  elitemobs.enhancer.npc:
    description: 允许玩家与 NPC 互动以升级精英物品
    default: true
  elitemobs.unbind.command:
    description: 允许玩家使用解绑命令打开解绑精英物品菜单
    default: true
  elitemobs.unbind.npc:
    description: 允许玩家与解绑 NPC 互动以解绑精英物品
    default: true
  elitemobs.soulbind.bypass:
    description: 允许用户绕过灵魂绑定限制。仅推荐给管理员！
    default: false
  elitequest.*:
    description: 用于任务相关权限
    default: false
    op: false
```