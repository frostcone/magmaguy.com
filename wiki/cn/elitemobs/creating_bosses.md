## 创建自定义Boss

## 开始之前

### Boss文件放在哪里？

Boss文件位于配置文件 `~/plugins/EliteMobs/custombosses` 文件夹中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/custombosses/mybosses`。建议这样做以保持条理性。

一个文件定义一个Boss，但可以多次生成同一个Boss，甚至可以为同一个Boss文件设置多个生成位置。

可以使用[网页应用程序](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义Boss等等。

### 最精简的配置

**自定义Boss的最精简配置文件如下：**
```yml
```

请注意，这只是一个空文件。但这仍然会生成一个带有自定义名称的僵尸自定义Boss，因为这些是默认值。 **本页面中的所有内容都是可选的！**

## 示例Boss

<div align="center">

让我们看一下Boss文件示例。

<details> 
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&e测试Boss'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: 测试Boss已生成！
deathMessage: 测试Boss已被 $players 击杀！
escapeMessage: 测试Boss实体已逃脱！
locationMessage: '测试实体： $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "我击中你了！"
onDamagedMessages:
- "我被击中了！"
```

</div>

</details>

</div>


## 基本设置

<div align="center">

### isEnabled

设置Boss是否启用。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

设置Boss的实体类型。

| 键 |                                                                                   值                                                                                    | 默认值 |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [从此处选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。 <br>  `~plugins/EliteMobs/mobproperties` 文件夹中也必须存在该值。 | `ZOMBIE`|

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

设置Boss的名称。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `name` | [字符串](#string)，接受[颜色代码](#color_codes) 和下面列出的占位符 | "默认名称" |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷炫Boss！"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

如果希望在名称字段中包含Boss等级，只需使用以下占位符之一。

| 占位符 | 说明 | 示例 | 输出（对于10级Boss） |
|-|:-:|:-:|-|
| `$level` | 替换为等级 | "$level 酷炫Boss" | `10 酷炫Boss` |
| `$normalLevel` | 替换为等级，用于普通怪物 | `"$normalLevel 酷炫Boss"` | `[10] 酷炫Boss` |
| `$minibossLevel` | 替换为等级，用于迷你Boss | `"$minibossLevel 酷炫Boss"` | `〖10〗 酷炫Boss` |
| `$bossLevel` | 替换为等级，用于Boss | `"$bossLevel 酷炫Boss"` | `『10』 酷炫Boss` |
| `$reinforcementLevel` | 替换为等级，用于增援 | `"$reinforcementLevel 酷炫Boss"` | `〔10〕 酷炫Boss` |
| `$eventBossLevel` | 替换为等级，用于事件Boss | `"$eventBossLevel 酷炫Boss"` | `「10」 酷炫Boss` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷炫Boss！"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

设置Boss的等级。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `entityType` | 正[整数](#integer) 或 `dynamic` | `dynamic` |

`dynamic` 用于事件，并根据Boss生成时附近玩家的等级进行调整。
不建议用于区域Boss。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### healthMultiplier

设置Boss的生命值。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `healthMultiplier` | [乘数](#multiplier) | `1.0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

设置Boss的伤害倍数。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `damageMultiplier` | [乘数](#multiplier) | `1.0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

设置Boss是否使用怪物的幼年形态。只能应用于具有幼年形态的怪物。
如果您想[伪装]($language$/elitemobs/libsdisguises.md) Boss，但又希望它在伪装时保持幼年形态（确保伪装实体也支持幼年形态），则可以使用以下设置：
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>


***

### helmet/chestplate/leggings/boots/mainhand/offhand

设置Boss的盔甲。并非所有 Minecraft 模型都能显示盔甲。Boss 盔甲纯粹是装饰性的，不会影响游戏玩法。

| 键 |                                    值                                     | 默认值 |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [材质](#material), [UUID](https://minecraftuuid.com/)           | 无 |
| `chestplate` | [材质](#material) | 无 |
| `leggings` | [材质](#material) | 无 |
| `boots` | [材质](#material) | 无 |
| `mainHand` | [材质](#material) | 无 |
| `offHand` | [材质](#material) | 无 |

**注意：** 此字段还允许您为物品设置自定义模型。要设置自定义模型 ID，请按照以下格式在材质类型后添加 ID：`ITEM_MATERIAL:ID`。例如：`DIAMOND_SWORD:1` 将 Boss 设置为佩戴纹理包中自定义模型 #1 的钻石剑。

**注意 2：** 此字段还允许您使用 `ITEM_MATERIAL:CODE` 格式设置自定义皮革颜色，其中代码是颜色的十六进制表示。例如：`LEATHER_LEGGINGS:ffa500` 将创建橙色护腿。您可以使用十六进制代码，只需从十六进制代码中删除 `#`。您可以从 [此处](https://www.w3schools.com/colors/colors_hexadecimal.asp) 获取十六进制代码。

**注意 3：** 头盔字段还允许您将生物头盔设置为玩家头像。只需获取您要使用的玩家头像的 UUID，然后将其输入到头盔字段中即可。 *玩家需要在线才能使其正常工作，否则头像将默认为通用的 Minecraft 头像。* 您可以从 [此处](https://minecraftuuid.com/) 获取玩家 UUID。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

设置Boss拥有的能力。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `powers` | 请参阅下面的列表 | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*注意：如果您想查看可以使用的一系列预制能力，可以查看[此页面]($language$/elitemobs/premade_powers.md)。*

***

### 中级配置 - 生成增援

增援也属于能力类别，使用以下设置：

<details> 

<summary><b>增援设置</b></summary>

| 键 | 说明 |                                                                                                             值                                                                                                             | 默认值 |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 触发增援生成的条件。必填。 |                                                                                                    请参阅下面的列表                                                                                                     | 无 |
| `filename` | 要作为增援生成的Boss的文件名。必填。 |                                                                                                       [字符串](#string)                                                                                                        | 无 |
| `chance` | 增援生成的几率。可选。 |                                                                                                       [双精度浮点数](#double)                                                                                                        | `1.0` |
| `amount` | 设置要生成的增援数量。可选。 |                                                                                                      [整数](#integer)                                                                                                       | `1` |
| `inheritAggro` | 使增援继承Boss的仇恨值。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | 使增援在Boss周围30个方块半径内生成。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 使增援继承Boss的等级。可选 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | 使增援使用[自定义生成系统]($language$/elitemobs/creating_spawns.md) 生成。仅用于 `summonType: GLOBAL` | `world_name,x,y,z` 或 `x,y,z` 表示相对于Boss的位置。偏移量是相对于区域Boss的生成位置的。您也可以使用 `same_as_boss` 使增援与Boss在同一个世界生成。 | 无 |
| `lightningRod` | `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的特殊设置。使末影水晶周围生成闪电。可选。 |                                                                                                        `true` / `false`                                                                                                        | 无 |

</details>

召唤类型设置增援生成的条件。以下是有效召唤类型的列表：

<details> 

<summary><b>召唤类型</b></summary>

| 值 |                                                                         说明                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          仅在Boss首次受到伤害时生成一次增援。                                           |
| `ON_HIT`  |                                                              Boss每次受到攻击时生成增援。                                                              |
| `ON_COMBAT_ENTER` |                                                   Boss进入战斗状态时生成增援。                                                    |
| `GLOBAL` | 为每个在线玩家生成一个增援。需要 `customSpawn` 键设置有效的[自定义生成点]($language$/elitemobs/creating_spawns.md)。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 进入战斗状态时放置末影水晶增援，仅用于自定义龙战斗。                                  |

</details>

请注意，也可以通过[精英脚本]($language$/elitemobs/creating_powers.md) 生成增援，因此还有更多可定制的增援生成方式。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### 专家配置 - 创建您自己的能力

您可以在Boss文件本身或在powers文件夹中创建一个新的配置文件来创建您自己的能力。您可以[在此处]($language$/elitemobs/creating_powers.md) 了解更多信息。

### 根据实例地牢难度限制能力

[实例地牢]($language$/elitemobs/dungeons.md&section=instanced-dungeons) 可以有难度设置，并且可以设置为仅针对特定难度启用特定能力。

<details> 

<summary><b>限制能力选项</b></summary>

<div align="left">

| 键 | 说明 | 值 | 默认值 |
|-|:-:|:-:|-|
| `filename` | 能力的文件名。 | [字符串](#string) | 无 |
| `difficultyID` | 难度名称，与地牢包中难度的名称相匹配。 | [字符串](#string) | 无 |

</div>

</details>

这将仅适用于实例地牢。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - 我的难度名称1
  - 我的难度名称2
  - 我的难度名称3
```

</div>

</details>

***

### spawnMessage

设置Boss生成时发送的消息。需要设置[公告优先级](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `spawnMessage` | [字符串](#string) 和 [颜色代码](#color_codes) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: 我又回来了！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

设置Boss死亡时发送的消息列表。需要设置[公告优先级](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `deathMessages` | [字符串](#string)、[颜色代码](#color_codes) 和下面的占位符 | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4测试Boss已被击杀！'
- '&c&l    最高伤害： $damager1name &c造成 $damager1damage 点伤害！'
- '&6&l    第二高伤害： $damager2name &6造成 $damager2damage 点伤害！'
- '&e&l    第三高伤害： $damager3name &e造成 $damager3damage 点伤害！'
- '&4击杀者： $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

死亡消息使用以下占位符：

<details> 

<summary><b>占位符</b></summary>

| 值 | 说明 |
|-|:-:|
| `$damager1name` | 最高伤害者的名称 |
| `$damager2name` | 第二高伤害者的名称 |
| `$damager3name` | 第三高伤害者的名称 |
| `$damager1damage` | 最高伤害者的伤害值 |
| `$damager2damage` | 第二高伤害者的伤害值 |
| `$damager3damage` | 第三高伤害者的伤害值 |
| `$players` | 显示所有伤害者的列表 |

</details>

### onKillMessage

设置Boss击杀玩家时发送的消息。需要设置[公告优先级](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onKillMessage` | [字符串](#string) 和 [颜色代码](#color_codes) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: 我赢了，你输了！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

设置史莱姆Boss的大小，但仅适用于史莱姆和岩浆怪。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `slimeSize` | [整数](#integer) | `4` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

设置Boss是否作为中立生物生成。这仅适用于可以是中立生物的实体类型，例如狼或铁傀儡。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `neutral` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## 高级设置

<div align="center">

### timeout

设置自定义Boss在消失之前的分钟数。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `timeout` | 时间（以分钟为单位）[整数](#integer) | `0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
timeout: 20
```
设置Boss在 20 分钟后逃脱。

</div>

</details>

***

### isPersistent

设置Boss是否可以在区块卸载后存活。仅建议用于事件Boss。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

示例：

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

设置Boss对哪些武器强或弱。

| 键 |        值         | 默认值 |
|-|:---------------------:|-|
| `damageModifiers` | [材质](#material) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

在这个例子中，Boss只受到钻石剑 80% 的伤害（或减少 20%），但受到三叉戟 200% 的伤害（或增加 2 倍）。

</details>

***

### normalizedCombat



将Boss的伤害和最大生命值修改为 `~/plugins/EliteMobs/mobproperties` 中标准化实体的值。这是区域Boss的默认设置，以确保平滑的难度曲线。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

示例：
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

设置当Boss通过 [timeout](#timeout) 机制逃脱时，向玩家广播的消息。需要配置 [announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `escapeMessage` | [字符串](#string) | 无 |


<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "再见！"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

设置Boss血条中显示的消息。这用于跟踪自定义Boss的生命值及其在服务器中的位置。需要配置 [annoucementPriority](#annoucementPriority)。

| 键 |                                      值                                      | 默认值 |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [字符串](#string)、[颜色代码](#color_codes) 和下面列出的占位符 | 无 |

占位符：

| 值 | 说明 |
|-|:-:|
| `$distance` | 替换为玩家与自定义Boss之间的距离。这是首选选项。 |
| `$location` | 替换为自定义Boss的 x y z 位置坐标 |


<details>


<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4酷炫Boss：位于 $location，距离 $distance 个方块！"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

这将显示类似于 `酷炫Boss：位于 414,55,347，距离 10 个方块！` 的内容

</details>

***

### uniqueLootList

设置Boss掉落的[自定义物品]($language$/elitemobs/creating_items.md)。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `uniqueLootList` | [列表](#string_list) | 无 |

自定义战利品中的战利品条目遵循战利品表格式。[相关信息请点击此处！]($language$/elitemobs/loot_tables.md) 请注意，一些较旧的文件可能使用过旧的战利品表，这些战利品表的外观与示例不同。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

设置Boss是否会掉落精英怪物战利品，不包括 [`uniqueLootList`](#uniqueLootList) 中的物品。包括硬币。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

建议对增援怪物设置为 false。

<details> 

<summary><b>示例</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

设置自定义Boss是否会掉落与其普通怪物类型相关的普通战利品。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

设置自定义Boss是否会掉落精英怪物程序生成的战利品。不包括精英硬币。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

设置Boss移动时留下的轨迹。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `trails` | [粒子](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) 或 [物品材质](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

设置Boss怪物击中玩家时显示的消息。这是一个列表，使用的是从列表中随机选择的消息。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onDamageMessages` | [列表](#string_list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDamageMessages:
- "我击中你了！"
- "哈哈，我击中你了！"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

设置Boss怪物受到玩家伤害时显示的消息。这是一个列表，使用的是从列表中随机选择的消息。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onDamagedMessages` | [列表](#string_list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "你击中我了！"
- "我被击中了！"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

设置Boss将骑乘的实体。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onDamagedMessages` | [要骑乘的Boss的文件名](#filename) 或 [实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | 无 |

不要试图让Boss骑乘自己。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

注意：区域Boss将与其骑乘的实体共享其牵引绳，这意味着如果它们超过其牵引绳允许的距离，它们都将被拖回生成位置。

***

### announcementPriority

设置公告的优先级。较低的优先级意味着不进行公告，较高的优先级不仅可以在聊天中公告，还可以在配置的情况下在 Discord 上公告。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `announcementPriority` | [整数](#integer) | `1` |

以下是优先级列表及其作用：

| 值 |                                                                            说明                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   Boss 将完全静默，没有任何公告消息。                                                   |
| `1` |                                这是默认值。Boss 可以发送聊天消息、生成消息、死亡和逃脱消息。                                |
| `2` |                               除了 `1` 中的内容外，Boss 还将被设置为可供玩家通过 `/em` 菜单跟踪。                                |
| `3` | 除了 `2` 中的内容外，如果配置了 Discord，广播消息将在 Discord 上镜像。[Discord 配置信息请点击此处。]($language$/elitemobs/discordsrv.md) |

以下是可跟踪的Boss示例，能够在聊天和 Discord 上发送生成/死亡/逃脱消息：

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注意**：如果您希望使用相应的公告优先级，则必须为聊天和 Discord 公告配置 spawnMessage、deathMessage/deathMessages、escapeMessage，以及为跟踪功能配置 locationMessage。

***

### followDistance

设置Boss仇恨并进入战斗的距离。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `followDistance` | [双精度浮点数](#double) | 无，使用 Minecraft 的默认值 |

注意 1：区域Boss在非战斗状态下的 `followDistance` 为一半。这是为了防止它们从太远的地方仇恨，因为牵引绳的限制，这可能会导致恼人的战斗问题。

注意 2：`followDistance` 越高，Boss 对服务器 CPU 的占用就越大。请谨慎使用！

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

设置一个 30 个方块的范围，如果玩家进入该范围靠近Boss，它将开始追逐/攻击玩家。

</details>

***

### onDeathCommands

设置自定义Boss死亡时运行的命令列表。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onDeathCommands` | [列表](#string_list) | 无 |

该列表支持以下占位符：

| 值 | 说明 |
|-|:-:|
| `$level` | Boss 等级的占位符。 |
| `$name` | Boss 名称的占位符。 |
| `$chance=x$` | 使命令有几率运行。 |
| `$players` | 使命令对伤害者列表中的每个玩家运行一次，并每次替换为该列表中不同玩家的用户名。 |
| `$locationX` | Boss 死亡时的 X 坐标。 |
| `$locationY` | Boss 死亡时的 Y 坐标。 |
| `$locationZ` | Boss 死亡时的 Z 坐标。 |
| `$damager1name` | 最高伤害者的用户名 |
| `$damager2name` | 第二高伤害者的用户名 |
| `$damager3name` | 第三高伤害者的用户名 |

请查看下面的示例，以更好地理解这些占位符是如何工作的。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players 击杀了 $name! 它的等级为 $level！"
- "$chance=0.5$ say 多么精彩的击杀！"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

如果玩家 1、玩家 2 和玩家 3 都在击杀Boss之前对其造成了伤害，则控制台的命令输出如下：

<div align="left">

```
say 玩家 1 击杀了 自定义Boss名称! 它的等级为 X!
say 玩家 2 击杀了 自定义Boss名称! 它的等级为 X!
say 玩家 3 击杀了 自定义Boss名称! 它的等级为 X!
```

</div>

此外，还有 50% 的几率还会输出以下内容：

<div align="left">

```
say 多么精彩的击杀！
```

</div>

</details> 

***

### onSpawnCommands

设置Boss生成时运行的命令列表。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onSpawnCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符不适用，因为此时还没有任何伤害者。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say Boss 已生成！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

设置Boss进入战斗状态时运行的命令列表。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onCombatEnterCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符不适用，因为此时还没有任何伤害者。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Boss 已进入战斗状态！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

设置Boss离开战斗状态时运行的命令列表。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onCombatLeaveCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！**

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Boss 已离开战斗状态！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

如果启用了 LibsDisguises 插件，则设置 LibsDisguises 伪装。[更多信息请点击此处。]($language$/elitemobs/libsdisguises.md)

| 键 | 值 | 默认值 |
|-|:-:|-|
| `disguise` | [字符串](#string) | 无 |
| `customDisguiseData` | [字符串](#string) | 无 |

<details> 

<summary><b>伪装示例</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>自定义伪装示例</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU1ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

设置来自 skindex 的自定义伪装。[查看此页面]($language$/elitemobs/libsdisguises.md) 了解如何正确格式化此数据。

</details>

***

### customModel

设置要使用的自定义模型（如果您有自定义模型和 ModelEngine）。[更多信息请点击此处。]($language$/elitemobs/custom_models.md)

| 键 | 值 | 默认值 |
|-|:-:|-|
| `customModel` | [字符串](#string) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customModel: 您的模型
```

</div>

</details>

***

### frozen

设置Boss是否可以移动。冻结的Boss仍然可以攻击。
</br>*注意：这可能不适用于某些实体。*

| 键 | 值 | 默认值 |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

设置Boss将播放的音乐，从它生成时开始。需要将歌曲的 .ogg 文件放在资源包中。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `song` | [字符串](#string) | 无 |

<details> 

<summary><b>示例</b></summary>

有两种方法可以设置歌曲。以下是第一种方法：

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

这将播放歌曲 ice_queen.idle 76370 个游戏刻，然后循环播放。请注意，歌曲的位置由资源包决定。

以下是设置歌曲的第二种方法：

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

这将播放歌曲 ice_queen.end_transition 14328 个游戏刻，然后转换为 ice_queen.end_loop 并播放 28657 个游戏刻，然后循环播放 end_loop。

这允许Boss拥有一首“介绍”或“过渡”歌曲，然后是一首循环播放的主曲目。

</div>

</details>

***

### cullReinforcements

设置当Boss死亡时，是否移除Boss的增援。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

设置Boss的移动速度。
</br>*注意：超过 0.36 的速度可能太快。*

| 键 | 值 | 默认值 |
|-|:-:|-|
| `movementSpeedAttribute` | [双精度浮点数](#double) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Boss 阶段

<div align="center">

Boss 可以有多个阶段，这些阶段会在Boss的生命值达到一定百分比时发生变化。发生这种情况时，Boss 开始使用不同的配置文件，这意味着Boss的所有内容都可以改变，包括实体类型等。
</br>要了解更多关于Boss阶段的信息，请点击[此处]($language$/elitemobs/creating_boss_phases.md)。


| 键 | 说明 | 值 | 默认值 |
|-|:-:|-|-|
| `phases` | 设置Boss将拥有的阶段。必填 | [列表](#string_list) | 无 |
| `phaseSpawnLocation` | 设置阶段Boss的生成位置。可选 | [字符串](#string) | 无 |


<details> 

<summary><b>示例</b></summary>

<div align="left">

在本例中，我们将展示三个不同的配置文件。

第一个Boss配置文件：phase_1_boss.yml

```yml
name: "阶段 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

第二个Boss配置文件：phase_2_boss.yml

```yml
name: "阶段 2"
entityType: SKELETON
```

第三个Boss配置文件：phase_3_boss.yml

```yml
name: "阶段 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

这个Boss将在生命值达到 60% 时切换到配置文件 `phase_2_boss.yml`，并在生命值达到 30% 时切换到配置文件 `phase_3_boss.yml`，与阶段 2 位于同一个世界，坐标为 x=10、y=64 和 z=100。Boss 的实体类型和名称也会发生变化。

条目的格式为 `文件名：生命值百分比`。

phaseSpawnLocation 是可选的，如果没有设置，Boss 将在其所在的位置切换阶段。

</details>

在设计阶段Boss时，以下几点需要注意：

<div align="left">

- 第一阶段的配置文件设置Boss的所有阶段。
- 玩家造成的威胁/伤害值会在各个阶段之间保留。
- 切换阶段的依据是损失的生命值百分比，该百分比在切换到不同阶段时会保留。这意味着在阶段之间增加或减少 healthMultiplier 不会治愈或伤害Boss，它仍然会以相同的百分比切换，但该阶段的生命值会更多或更少。
- 阶段Boss在退出战斗状态时会恢复到阶段 1。
- 也是区域Boss的阶段Boss，其所有阶段都共享相同的牵引绳半径和超时机制，并且在计时器结束后将作为阶段 1 Boss重生。
- 最后一个阶段的配置文件设置Boss的战利品。
- 阶段不能跳过 - 超杀伤害仍然会使Boss在定义的百分比切换阶段。
- 拥有坐骑的阶段Boss在切换阶段时会停止骑乘。

</div>

</div>

</div>

***

## 区域Boss

<div align="center">



## 区域Boss

区域Boss是一种特定类型的自定义Boss，它们会在特定配置的位置生成，并且能够在延迟后在该位置重生。此外，它们可以有牵引绳，以确保它们停留在特定区域内，以及其他功能。

这些用于所有地牢内容。要了解更多关于区域Boss的信息，请点击[此处]($language$/elitemobs/creating_world_bosses.md)。

| 键 | 说明 | 值 | 默认值 |
|-|:-:|:-:|-|
| `isRegionalBoss` | 设置Boss是否是区域Boss。如果您想要一个区域Boss，则应设置为 true。  | `true` /  `false` | `false` |
| `spawnLocation` | 设置Boss的生成位置。  | 通过 `/em addSpawnLocation [filename.yml]` 命令添加！ | 无 |
| `spawnCooldown` | 设置Boss的重生冷却时间，以**分钟**为单位。 | [整数](#integer) | `0` |
| `leashRadius` | 设置Boss在被拉回之前可以离开其生成点的距离。 | [双精度浮点数](#double) | 无 |
| `onSpawnBlockStates` | 设置Boss生成时将修改的方块。 | 查看下面的命令 | 无 |
| `onRemoveBlockStates` | 设置Boss消失时将修改的方块。 | 查看下面的命令 | 无 |

如上所述，区域Boss可以有 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这是一个在战斗中修改战斗竞技场的非常有用的功能，尤其是与阶段切换结合使用时，因为它可以通过更改方块状态来打开和关闭战斗竞技场。

这些格式过于复杂，无法手动编写，因此有一些命令可以帮助您进行设置：

| 命令 | 说明 |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | 开始为生成时或移除时的方块状态注册手动选择的方块。 |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | 编辑生成时或移除时的方块状态。 |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | 允许管理员选择大面积的方块并将其保存为状态。 |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | 允许管理员编辑大面积的方块并将其保存为状态。 |

<details> 

<summary><b>使用示例：</b></summary>

<div align="left">

假设您想创建一个战斗场景，其中一个Boss生成在一个竞技场中，竞技场中有一扇打开的门，您想让这扇门在战斗开始时关闭，在战斗结束后重新打开。

为此，您需要两个Boss阶段，并注册三组不同的方块状态。在本例中，我将这两个阶段分别命名为 phase_1_boss.yml 和 phase_2_boss.yml。

1) 使用 `/em registerblocks phase_1_boss.yml on_spawn` 或 `/em registerblocksedit phase_1_boss.yml on_spawn` 来注册处于打开状态的门方块。

这意味着注册空气方块。建议在此处使用区域选择。

这是为了确保Boss生成时门是打开的，以便玩家 гарантированно 能够进入。

2) 使用 `/em registerblocks phase_2_boss.yml on_spawn` 或 `/em registerblocksedit phase_2_boss.yml on_spawn` 来注册处于关闭状态的门方块。

这意味着注册门的实体方块，这些方块将阻止玩家离开。

这是为了在Boss进入阶段 2 时将门更改为实体，以防止玩家离开。

3) 使用 `/em registerblocks phase_2_boss.yml on_remove` 或 `/em registerblocksedit phase_2_boss.yml on_remove` 来注册处于打开状态的门方块。

这意味着再次注册第一步中的相同方块（空气方块）。

这是为了在Boss死亡时打开门，让玩家离开竞技场。

</div>

</details>

</div>

***

### alert

<div align="center">

设置Boss是否处于警戒状态。默认情况下，区域Boss在非战斗状态下会减速并缩短仇恨距离。此设置可防止区域Boss在非战斗状态下减速并缩短仇恨距离，因此它们在战斗中和战斗外的行为始终相同。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `alert` | [布尔值](#boolean) | `true` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

设置区域Boss在被击杀后是否会被永久删除。BetterStructures 将其用于神殿，其中区域Boss仅设计为在该位置战斗一次，之后就不会再出现。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `removeAfterDeath` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## 实例Boss

<div align="center">

实例Boss是用于实例地牢的区域Boss的子类型。

| 键 | 说明 | 值 | 默认值 |
|-|:-:|-|-|
| `instanced` | 使自定义Boss成为实例Boss。必填。 | `true` / `false` | `false` |


要使实例地牢正常工作，必须将Boss设置为实例Boss。我们还建议移除所有实例Boss的牵引绳。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

