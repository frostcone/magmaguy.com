# 用户命令

*注意：默认情况下，所有玩家权限都设置为 true。这意味着它们已经设置好。*

*如果您不希望玩家通过权限访问特定功能，您将必须拒绝该玩家的权限！*

| 命令 | 描述 |
|---------|:-----------------:|
| `/elitemobs` / `/em` | 主命令，在一个易于访问的菜单中集中插件中的所有玩家信息。*注意：*所有其他用户命令都在此主命令中。 |
| `/adventurersguild` / `/ag` | 在建议的设置中，将玩家传送到冒险者公会世界，在那里他们与各种 EliteMobs NPC 互动。 |
| `/em shareItem` | 在聊天中链接一个物品，以便其他玩家可以看到它的属性。 |
| `/em help` | 列出所有命令。其余的用户命令通常通过使用 NPC 或 `/em` 界面来代替！您可以将鼠标悬停在命令上以获取有关其功能的描述。 |
| `/em money check` | 显示玩家的货币。 |
| `/em pay <username> <amount>` | 让玩家互相付款。交易会收取可配置的税。 |
| `/em spawntp` | 将玩家传送到服务器生成点。 |

## NPC 命令

这些命令仅在您没有安装带有 NPC 的冒险者公会中心时才有用。

建议安装这些以通过 NPC 运行所有这些命令，而不是让玩家记住命令的工作方式。

| 命令 | 描述 |
|---------|:-----------:|
| `/em rank` | 打开等级菜单或将玩家传送到冒险者公会中心。 |
| `/em shop procedural <player>` | 访问商店或将玩家传送到冒险者公会中心。 |
| `/em shop sell <player>` | 访问商店出售菜单或将玩家传送到冒险者公会中心。 |
| `/em shop custom <player>` | 访问自定义商店或将玩家传送到冒险者公会中心。 |
| `/em repair` | 访问修理菜单或将玩家传送到冒险者公会中心。 |
| `/em enchant` | 访问附魔菜单或将玩家传送到冒险者公会中心。 |
| `/em scrap` | 访问废料菜单或将玩家传送到冒险者公会中心。 |
| `/em unbind` | 访问解绑菜单或将玩家传送到冒险者公会中心。 |

## 内部用户命令

**这些命令旨在从游戏内菜单（例如任务菜单中的任务）运行，而不是手动运行。如果没有说明如何获取 ID，则意味着除了从游戏内菜单运行命令外，不可能获取该 ID。** 为了方便起见，这些命令已分为可识别和不可识别类别。

### 可识别

| 命令 | 描述 |
|---------|-------------|
| `/em dungeontp <dungeonid>` | 将玩家传送到地牢。 |

*注意：此命令旨在从 `/em` 菜单中运行，因为玩家不可能猜到地牢 ID。地牢的 ID 与 `~/plugins/EliteMobs/dungeonpackages/` 中的 .yml 文件名相同。<br/>当您使用 `/em` 命令并从“传送点”页面选择一个传送点时，您可以在控制台中看到这些 ID。*

### 不可识别

| 命令 | 描述 |
|---------|:-----------:|
| `/em quest accept <questID>` | 接受任务。 |
| `/em quest track <questID>` | 跟踪任务。 |
| `/em quest complete <questID>` | 完成任务。 |
| `/em quest leave <questID>` | 离开任务。 |
| `/em track boss <uuid>` | 跟踪自定义首领。注意：此命令旨在从 `/em` 菜单中运行，因为玩家不可能猜到首领 UUID。 |

# 管理员命令

<div>

**> > > `elitemobs.*` - 用于完全访问权限的 EliteMobs 管理员权限！ < < <**

</div>

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup` | 打开主设置菜单。 |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>` | 基于实体类型生成精英。 |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>` | 基于实体类型和位置生成精英。 |
| `/em spawn boss <fileName>` | 从配置文件生成自定义首领。 |
| `/em spawn boss <fileName> <level>` | 从配置文件生成自定义首领并覆盖等级。 |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>` | 在某个位置从配置文件生成自定义首领。 |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>` | 在某个位置从配置文件生成自定义首领并覆盖等级。 |
| `/em place boss <fileName>` | 将生成位置添加到区域首领。 |
| `/em place treasureChest <fileName>` | 在玩家所站的位置添加一个宝箱。 |
| `/em remove` | 永久删除一个精英生物实体。精英/区域/超级/NPC 均可使用。再次运行以退出删除模式。 |
| `/em event <eventName>` | 启动自定义的定时事件。 |
| `/em place npc <npcFileName>` | 生成 NPC。 |
| `/em stats` | 获取当前活动的 EliteMobs 实体和玩家的属性。 |
| `/em loot menu` | 打开一个菜单，您可以在其中获取任何自定义战利品。 |
| `/em loot give <player> <filename>` | 将特定的自定义战利品给予玩家。 |
| `/em loot simulate <level>` | 模拟从设置等级的精英生物掉落的战利品。 |
| `/em loot simulate <level> <times>` | 模拟从设置等级的精英生物掉落的战利品（设置次数）。 |
| `/em version` | 获取插件版本。 |
| `/em reload` | 重新加载插件。几乎每次都有效。 |
| `/em kill` | 杀死所有具有攻击性的精英生物。 |
| `/em kill <radius>` | 杀死某个半径范围内的所有具有攻击性的精英生物。 |
| `/em kill type <entityType>` | 杀死特定类型的所有精英。 |
| `/em kill type <entityType> <radius>` | 杀死某个半径范围内特定类型的所有精英。 |
| `/em loot debug <level>` | 获取用于测试目的的调试物品。 |
| `/em money add <username> <amount>` | 向玩家添加一定数量的货币。 |
| `/em money addall <amount>` | 向所有在线玩家添加一定数量的货币。 |
| `/em money remove <username> <amount>` | 从玩家移除一定数量的货币。 |
| `/em money set <username> <amount>` | 设置玩家的总货币金额。 |
| `/em rank <player> <prestigeLevel> <guildLevel>` | 设置玩家的公会等级。 |
| `/em discord` | 获取支持 Discord 服务器的链接。 |
| `/em discord <message>` | 如果 DiscordSRV 配置正确，则在 Discord 房间上发布调试消息。 |
| `/em unbind force` | 解绑一个灵魂绑定的手持物品。 |
| `/em money check <player>` | 检查特定玩家的货币。 |
| `/em fireball` | 生成一个火球以测试精英爆炸再生。 |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>` | 请参阅[过渡方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>` | 请参阅[过渡方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>` | 请参阅[过渡方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>` | 请参阅[过渡方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em transitiveBlocks cancel` | 请参阅[过渡方块]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks)。 |
| `/em protection bypass` | 切换地牢保护。也适用于冒险者公会。 |

## 内部管理员命令

这些命令旨在在与菜单或聊天中的可交互文本交互时运行，而不是手动运行。

| 命令 | 描述 |
|---------|:-----------:|
| `/em setup done` | 停止在管理员登录时显示消息。 |
| `/em setup toggle <dungeonConfig>` | 允许您切换指定 EliteMobs 内容的安装。 |

# 原始权限：
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```
