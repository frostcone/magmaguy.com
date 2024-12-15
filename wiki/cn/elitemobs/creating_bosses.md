[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义首领

# 开始之前

## 首领文件放在哪里？

首领文件放在配置文件夹 `~/plugins/EliteMobs/custombosses` 中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/custombosses/mybosses`。建议这样做以保持井然有序。

一个文件定义一个首领，尽管可以多次生成同一个首领，甚至可以为同一个首领文件设置多个生成位置。

可以使用 [webapp](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义首领等。

## 最小可能的配置

**自定义首领的最小可能配置文件为：**
```yml
```

请注意，这只是一个空文件。这将仍然生成一个具有自定义名称的僵尸自定义首领，因为这些是默认值。**此页面中的所有内容都是可选的！**

## 示例首领

<div align="center">

让我们看一下首领文件的示例。

<details>
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&e测试首领'
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
spawnMessage: 测试首领已生成！
deathMessage: 测试首领已被 $players 击杀！
escapeMessage: 测试首领实体已逃脱！
locationMessage: '测试实体：$location'
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

设置是否启用首领。

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

设置首领的实体类型。

| 键 |                                                                                   值                                                                                   | 默认值 |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [从此处选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。<br> 该值也必须存在于文件夹 `~/plugins/EliteMobs/mobproperties` 中。 | `ZOMBIE` |

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

设置首领的名称。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `name` | [字符串](#string)，接受[颜色代码](#color_codes)和下面列出的占位符 | "默认名称" |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷炫首领！"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>

</div>

</details>

如果您希望在首领名称字段中包含首领等级，只需使用以下占位符之一。

| 占位符 | 描述 | 示例 | 输出（对于 10 级首领） |
|-|:-:|:-:|-|
| `$level` | 替换为等级 | "$level 酷炫首领" | `10 酷炫首领` |
| `$normalLevel` | 替换为等级，为普通生物制作 | `"$normalLevel 酷炫首领"` | `[10] 酷炫首领` |
| `$minibossLevel` | 替换为等级，为迷你首领制作 | `"$minibossLevel 酷炫首领"` | `〖10〗 酷炫首领` |
| `$bossLevel` | 替换为等级，为首领制作 | `"$bossLevel 酷炫首领"` | `『10』 酷炫首领` |
| `$reinforcementLevel` | 替换为等级，为增援制作 | `"$reinforcementLevel 酷炫首领"` | `〔10〕 酷炫首领` |
| `$eventBossLevel` | 替换为等级，为活动首领制作 | `"$eventBossLevel 酷炫首领"` | `「10」 酷炫首领` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷炫首领！"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

设置首领的等级。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `level` | 正[整数](#integer)或 `dynamic` | `dynamic` |

`dynamic` 用于事件，并在首领生成时根据附近玩家的等级进行调整。不建议用于区域首领。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### scale

设置首领的比例（大小）。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `scale` | [乘数](#multiplier) | `1.0` |

缩放时，`1.0` 表示默认大小。要使实体更大，请增加值（例如，`1.2`）。要使实体更小，请减小值（例如，`0.8`）。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

设置首领的类型。这用于显示首领血条和其他功能。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `bossType` | `NORMAL`、`MINIBOSS`、`BOSS`、`EVENT` | `NORMAL` |

`MINIBOSS`、`BOSS`、`EVENT` 将使插件在玩家与这些首领类型战斗时显示血条。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

设置首领的生命值。

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

设置首领的伤害乘数。

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

设置首领是否使用生物的幼体变体。只能应用于具有幼体变体的生物。
如果您想[伪装]($language$/elitemobs/libsdisguises.md)首领，但也希望它在伪装时仍然是幼体（确保伪装实体也支持幼体变体），您可以使用此设置：
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

设置首领的盔甲。并非所有 minecraft 模型都能显示盔甲。首领盔甲纯粹是装饰性的，不会影响游戏玩法。

| 键 |                                    值                                    | 默认值 |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [材质](#material)、[UUID](https://minecraftuuid.com/)           | 无 |
| `chestplate` | [材质](#material) | 无 |
| `leggings` | [材质](#material) | 无 |
| `boots` | [材质](#material) | 无 |
| `mainHand` | [材质](#material) | 无 |
| `offHand` | [材质](#material) | 无 |

**注意：** 此字段还允许您为物品设置自定义模型。要设置自定义模型 ID，请按照以下格式在材质类型后添加 ID：`ITEM_MATERIAL:ID`。示例：`DIAMOND_SWORD:1` 将首领设置为佩戴材质包中自定义模型 #1 的钻石剑。

**注意 2：** 此字段还允许您使用格式 `ITEM_MATERIAL:CODE` 设置自定义皮革颜色，其中代码是颜色的十六进制表示形式。示例：`LEATHER_LEGGINGS:ffa500` 将创建橙色护腿。您可以使用十六进制代码，只需从十六进制代码中删除 `#` 即可。您可以从[此处](https://www.w3schools.com/colors/colors_hexadecimal.asp)获取十六进制代码。

**注意 3：** 头盔字段还允许您将生物头盔设置为玩家头颅。只需获取您要使用的玩家头颅的 UUID，然后将其输入到头盔字段中即可。*玩家需要在线才能使其正常工作，否则头颅将默认为通用的 MineCraft 头颅。*您可以从[此处](https://minecraftuuid.com/)获取玩家 UUID。

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

设置首领拥有的能力。

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

*注意：如果您想查看您可以使用的预制能力列表，可以查看[此页面]($language$/elitemobs/premade_powers.md)。*

***

### 中级配置 - 生成增援

增援也属于能力类别，使用以下设置：

<details>

<summary><b>增援设置</b></summary>

| 键 | 描述 |                                                                                                             值                                                                                                              | 默认值 |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 触发增援生成的原因。必需。 |                                                                                                    请参阅下面的列表                                                                                                     | 无 |
| `filename` | 作为增援生成首领的文件名。必需。 |                                                                                                       [字符串](#string)                                                                                                        | 无 |
| `chance` | 增援生成的几率。可选。 |                                                                                                       [双精度浮点数](#double)                                                                                                        | `1.0` |
| `amount` | 设置要生成的增援数量。可选。 |                                                                                                      [整数](#integer)                                                                                                       | `1` |
| `inheritAggro` | 使增援继承首领的仇恨。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | 使增援在首领 30 个方块的半径内生成。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 使增援继承首领的等级。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | 使用[自定义生成系统]($language$/elitemobs/creating_spawns.md)使增援生成。仅用于 `summonType: GLOBAL` |
| `location` | 生成位置。可选。 | `world_name,x,y,z` 或 `x,y,z` 用于相对于首领的位置。偏移量相对于区域首领的生成位置。您还可以使用 `same_as_boss` 使增援在与首领相同的世界中生成。 | 无 |
| `lightningRod` | `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的特殊设置。使末影水晶在它们周围产生闪电。可选。 |                                                                                                        `true` / `false`                                                                                                        | 无 |

</details>

召唤类型设置增援生成的条件。以下是有效的召唤类型列表：

<details>

<summary><b>召唤类型</b></summary>

| 值 |                                                                         描述                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          仅生成一次增援，首次首领受到伤害时。                                           |
| `ON_HIT` |                                                              在被击中时生成增援。                                                              |
| `ON_COMBAT_ENTER` |                                                   当首领进入战斗时生成增援。                                                    |
| `GLOBAL` | 为每个在线玩家生成一个增援。需要 `customSpawn` 键来设置有效的[自定义生成]($language$/elitemobs/creating_spawns.md)。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 在进入战斗时放置末影水晶增援，仅用于自定义龙战。                                  |

</details>

请注意，也可以通过 [Elite Scripts]($language$/elitemobs/creating_powers.md) 生成增援，因此有更多可自定义的方式来生成增援。

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

### 专业配置 - 创建您自己的能力

可以在首领文件本身中或在能力文件夹中创建新配置文件来创建自己的能力。您可以在[此处]($language$/elitemobs/creating_powers.md)了解更多信息。

### 根据实例地牢难度限制能力

[实例地牢]($language$/elitemobs/dungeons.md&section=instanced-dungeons) 可以具有难度设置，并且可以使特定能力仅对特定难度启用。

<details>

<summary><b>限制能力选项</b></summary>

<div align="left">

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|-|
| `filename` | 能力的文件名。 | [字符串](#string) | 无 |
| `difficultyID` | 难度名称，与地牢包中的难度名称匹配。 | [字符串](#string) | 无 |

</div>

</details>

这仅适用于实例地牢。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

设置首领生成时发送的消息。需要设置 [announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `spawnMessage` | [字符串](#string)和[颜色代码](#color_codes) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: 我再次崛起！
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

设置首领死亡时发送的消息列表。需要设置 [announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `deathMessages` | [字符串](#string)、[颜色代码](#color_codes)和下面的占位符 | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4测试首领已被击杀！'
- '&c&l    1st Damager: $damager1name &c造成了 $damager1damage 伤害！'
- '&6&l    2nd Damager: $damager2name &6造成了 $damager2damage 伤害！'
- '&e&l    3rd Damager: $damager3name &e造成了 $damager3damage 伤害！'
- '&4击杀者：$players'
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

| 值 | 描述 |
|-|:-:|
| `$damager1name` | 顶级伤害者的姓名 |
| `$damager2name` | 第二顶级伤害者的姓名 |
| `$damager3name` | 第三顶级伤害者的姓名 |
| `$damager1damage` | 顶级伤害者的伤害量 |
| `$damager2damage` | 第二顶级伤害者的伤害量 |
| `$damager3damage` | 第三顶级伤害者的伤害量 |
| `$players` | 显示所有伤害者的列表 |

</details>

### onKillMessage

设置首领杀死玩家时发送的消息。需要设置 [announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onKillMessage` | [字符串](#string)和[颜色代码](#color_codes) | 无 |

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

设置史莱姆首领的大小，但仅适用于史莱姆和岩浆怪。

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

设置首领是否以中立状态生成。这仅适用于可以中立的实体类型，例如狼或铁傀儡。

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

设置自定义首领消失之前的时长（以分钟为单位）。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `timeout` | 时间（以分钟为单位）[整数](#integer) | `0` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
timeout: 20
```
将首领设置为在 20 分钟后逃脱。

</div>

</details>

***

### isPersistent

设置首领是否能在区块卸载后生存。仅建议用于活动首领。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details>
<summary><b>Example</b></summary>

<div align="left">

示例：
```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

设置首领可以对其造成强弱影响的武器。

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

在此示例中，首领只会受到钻石剑 80% 的伤害（或减少 20%），但会受到三叉戟 200% 的伤害（或增加 2 倍）。

</details>

***

### normalizedCombat

修改首领的伤害和最大生命值，以匹配 `~/plugins/EliteMobs/mobproperties` 中规范化实体的值。这是区域首领的默认设置，以保证平滑的难度曲线。

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

设置当首领通过 [timeout](#timeout) 机制逃脱时广播给玩家的消息。需要配置 [announcementPriority](#announcementPriority)。

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

设置在首领栏中显示的消息。这用于跟踪自定义首领的生命值及其在服务器中的位置。需要配置 [annoucementPriority](#annoucementPriority)。

| 键 |                                      值                                      | 默认值 |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [字符串](#string)、[颜色代码](#color_codes)和下面列出的占位符 | 无 |

占位符：

| 值 | 描述 |
|-|:-:|
| `$distance` | 替换为玩家与自定义首领之间的距离。这是首选选项。 |
| `$location` | 替换为自定义首领的 x y z 位置坐标 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4酷炫首领：在 $location 处，仅 $distance 个方块之遥！"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

这将显示类似于 `酷炫首领：在 414,55,347 处，仅 10 个方块之遥！` 的内容

</details>

***

### uniqueLootList

设置从首领掉落的[自定义物品]($language$/elitemobs/creating_items.md)。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `uniqueLootList` | [列表](#string_list) | 无 |

自定义战利品中的战利品条目遵循战利品表格式。[有关信息请参见此处！]($language$/elitemobs/loot_tables.md) 请注意，某些较旧的文件可能正在使用与示例不同的过时战利品表。

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

设置首领是否会掉落 EliteMobs 战利品，不包括 [`uniqueLootList`](#uniqueLootList) 中的物品。包括硬币。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` / `false` | `true` |

建议对增援生物设置为 false。

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

设置自定义首领是否会掉落通常与其原版生物类型相关的原版战利品。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsVanillaLoot` | `true` / `false` | `true` |

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

设置自定义首领是否会掉落 EliteMobs 程序化生成的战利品。不包括精英币。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `dropsRandomLoot` | `true` / `false` | `true` |

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

设置首领移动时留下的轨迹。

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

设置首领生物在击中玩家时显示的消息。这是一个列表，使用的消息是从列表中随机选择的。

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

设置首领生物在被玩家伤害时显示的消息。这是一个列表，使用的消息是从列表中随机选择的。

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

设置首领将坐骑并骑乘的实体。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onDamagedMessages` | [要坐骑的首领的文件名](#filename) 或 [实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | 无 |

不要尝试让首领自己坐骑。

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

注意：区域首领将与他们坐骑的实体共享其束缚，这意味着如果他们超过其束缚允许的距离，他们都会被拖回到生成位置。

***

### announcementPriority

设置公告的优先级。较低的优先级意味着不进行公告，较高的优先级不仅可以在聊天中宣布，还可以在配置后在 discord 上宣布。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `announcementPriority` | [整数](#integer) | `1` |

以下是优先级的作用列表：

| 值 |                                                                            描述                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   首领将完全静默，不发送任何公告消息。                                                   |
| `1` |                                这是默认设置。首领可以发送聊天消息、生成消息、死亡消息和逃脱消息。                                |
| `2` |                               在 `1` 中的内容之上，首领将被设置为可通过 `/em` 菜单被玩家跟踪。                                |
| `3` | 在 `2` 中的内容之上，如果已配置，广播消息将在 Discord 上镜像。[Discord 配置信息在此处。]($language$/elitemobs/discordsrv.md) |

以下是一个可以跟踪、可以在聊天和 Discord 上发送生成/死亡/逃脱消息的首领示例：

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注意**：如果您希望使用相应的公告优先级，则必须为聊天和 discord 公告配置 spawnMessage、deathMessage/deathMessages、escapeMessage 以及为跟踪功能配置 locationMessage。

***

### followDistance

设置首领发起攻击并进入战斗的距离。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `followDistance` | [双精度浮点数](#double) | 无，使用 Minecraft 中的默认值 |

注意 1：区域首领在非战斗状态下的 `followDistance` 减半。这是为了防止它们从太远的地方发起攻击，这可能会由于束缚约束而导致恼人的战斗问题。

注意 2：`followDistance` 越高，首领在服务器 CPU 上的负担就越大。请谨慎负责地使用！

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

设置 30 个方块的范围，如果玩家进入该距离附近的首领，它将开始追逐/攻击该玩家。

</details>

***

### onDeathCommands

设置在自定义首领死亡时运行的命令列表。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onDeathCommands` | [列表](#string_list) | 无 |

该列表支持以下占位符：

| 值 | 描述 |
|-|:-:|
| `$level` | 首领等级的占位符。 |
| `$name` | 首领名称的占位符。 |
| `$chance=x$` | 使命令有机会运行。 |
| `$players` | 使该命令对伤害者列表中的每个玩家运行一次，并每次替换为该列表中不同玩家的用户名。 |
| `$locationX` | 死亡时首领的 X 坐标。 |
| `$locationY` | 死亡时首领的 Y 坐标。 |
| `$locationZ` | 死亡时首领的 Z 坐标。 |
| `$damager1name` | 顶级伤害者的用户名 |
| `$damager2name` | 第二顶级伤害者的用户名 |
| `$damager3name` | 第三顶级伤害者的用户名 |

请查看下面的示例，以便更好地了解它们的工作方式。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players 已经杀死了 $name！等级是 $level！"
- "$chance=0.5$ say 杀得漂亮！"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

如果 Player1、Player2 和 Player3 在杀死首领之前都对其造成了伤害，则控制台的命令输出将如下所示：

<div align="left">

```
say Player1 已经杀死了 CustomBossName！等级是 X！
say Player2 已经杀死了 CustomBossName！等级是 X！
say Player3 已经杀死了 CustomBossName！等级是 X！
```

</div>

此外，还有 50% 的几率也会输出以下内容：

<div align="left">

```
say 杀得漂亮！
```

</div>

</details>

***

### onSpawnCommands

设置将在首领生成时运行的命令列表。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `onSpawnCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符将不适用，因为此时不会有任何伤害者。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say 首领已生成！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

设置当首领进入战斗时将运行的命令列表。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onCombatEnterCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符将不适用，因为此时不会有任何伤害者。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say 首领已进入战斗！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

设置当首领离开战斗时运行的命令列表。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onCombatLeaveCommands` | [列表](#string_list) | 无 |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！**

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say 首领已离开战斗！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

如果启用了该插件，则设置 LibsDisguises 伪装。[更多信息请参见此处。]($language$/elitemobs/libsdisguises.md)

| 键 | 值 | 默认值 |
|-|:-:|-|
| `disguise` | [字符串](#string) | 无 |
| `customDisguiseData` | [字符串](#string) | 无 |

<details>

<summary><b>示例伪装</b></summary>

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

<summary><b>示例自定义伪装</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

从 skindex 设置自定义伪装。[查看此页面]($language$/elitemobs/libsdisguises.md)以了解如何正确格式化此数据。

</details>

***

### customModel

如果您有自定义模型和 ModelEngine，则设置要使用的自定义模型。[更多信息请参见此处。]($language$/elitemobs/custom_models.md)

| 键 | 值 | 默认值 |
|-|:-:|-|
| `customModel` | [字符串](#string) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

设置首领是否可以移动。冻结的首领仍然可以攻击。
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

设置首领将播放的音乐，从生成时开始。需要歌曲的 .ogg 文件位于资源包中。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `song` | [字符串](#string) | 无 |

**注意：`song` 设置需要设置 `followDistance`，因为 `followDistance` 决定了歌曲开始播放的范围。**
查看有关如何设置 `song` 的 `length`（毫秒）的示例。

<details>

<summary><b>示例</b></summary>

有两种设置歌曲的方法。这是第一种：

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

这将播放歌曲 ice_queen.idle 76370 毫秒，然后循环播放。请注意，歌曲的位置由资源包决定。

以下是设置歌曲的第二种方法：

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

这将播放歌曲 ice_queen.end_transition 14328 毫秒，然后转换为 ice_queen.end_loop 28657 毫秒，并循环播放 end_loop。

这允许首领具有“intro”或“transition”歌曲，然后是循环播放的主曲目。

</div>

</details>

***

### cullReinforcements

设置当首领死亡时是否删除首领的增援。

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

设置首领的移动速度。
</br>*注意：任何超过 0.36 的值都可能太快。*

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

## 首领阶段

<div align="center">

当首领达到一定百分比的生命值时，首领可以具有发生变化的阶段。发生这种情况时，首领开始使用不同的配置文件，这意味着有关首领的一切都可以改变，包括诸如实体类型之类的内容。
</br>要了解有关首领阶段的更多信息，请单击[此处]($language$/elitemobs/creating_boss_phases.md)。

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|:-:|
| `phases` | 设置首领将具有的阶段。必需 | [列表](#string_list) | 无 |
| `phaseSpawnLocation` | 设置阶段首领的生成位置。可选 | [字符串](#string) | 无 |

<details>

<summary><b>示例</b></summary>

<div align="left">

在此示例中，我们将显示三个不同的配置文件。

第一个首领配置文件：phase_1_boss.yml

```yml
name: "阶段 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

第二个首领配置文件：phase_2_boss.yml

```yml
name: "阶段 2"
entityType: SKELETON
```

第三个首领配置文件：phase_3_boss.yml

```yml
name: "阶段 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

此首领将在生命值达到 60% 时更改为配置文件 `phase_2_boss.yml`，在生命值达到 30% 时在与阶段 2 相同的世界中以坐标 x=10、y=64 和 z=100 更改为配置文件 `phase_3_boss.yml`。首领的实体类型和名称也将改变。

条目的格式为 `filename:healthPercentage`。

phaseSpawnLocation 是可选的，如果未设置，则首领将在其所在的位置更改阶段。

</details>

设计阶段首领时，了解以下事项非常重要：

<div align="left">

- 第一阶段的配置文件设置首领的所有阶段。
- 玩家在阶段之间保持威胁/伤害计数。
- 切换阶段是基于失去的生命值百分比，该百分比在切换到不同阶段时会保留。这意味着增加或减少阶段之间的 healthMultiplier 不会治疗或伤害首领，它仍然会以相同的百分比切换，但该阶段的生命值会更多或更少。
- 如果阶段首领退出战斗，则会恢复到第 1 阶段。
- 同样是区域首领的阶段首领在所有阶段中共享相同的束缚半径和超时机制，并且当计时器结束时，将作为第 1 阶段首领重生。
- 最后一阶段的配置文件设置首领的战利品。
- 阶段无法跳过 - 过度伤害仍然会使首领在定义的百分比处切换阶段。
- 具有坐骑的阶段首领在切换阶段时会停止坐骑。

</div>

</div>

</div>

***

## 区域首领

<div align="center">

区域首领是一种特定类型的自定义首领，它们在特定的配置位置生成，并且能够在延迟后在该位置重生。此外，它们还可以具有束缚，以确保它们停留在特定区域内，以及其他功能。

这些用于所有地牢内容。要了解有关区域首领的更多信息，请单击[此处]($language$/elitemobs/creating_world_bosses.md)。

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|:-:|
| `isRegionalBoss` | 设置首领是否为区域首领。如果想要区域首领，则应为 true。 | `true` / `false` | `false` |
| `spawnLocation` | 设置首领的生成位置。 | 通过 `/em addSpawnLocation [filename.yml]` 命令添加这些！ | 无 |
| `spawnCooldown` | 设置首领的重生冷却时间，以<b>分钟</b>为单位。 | [整数](#integer) | `0` |
| `leashRadius` | 设置首领在被拉回之前可以从其生成点移动的距离。 | [双精度浮点数](#double) | 无 |
| `onSpawnBlockStates` | 设置首领在生成时将修改的方块。 | 检查下面的命令 | 无 |
| `onRemoveBlockStates` | 设置首领在消失时将修改的方块。 | 检查下面的命令 | 无 |

如前所述，区域首领可以具有 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这是一个非常有用的功能，可以在战斗期间修改战斗竞技场，尤其是与阶段切换结合使用时，可以通过更改方块状态来打开和关闭战斗竞技场。

这些格式太复杂而无法手动编写，因此存在一些命令来帮助您设置它们：

| 命令 | 描述 |
|-|:-:|
| /em registerblocks [区域_首领_文件.yml] [on_spawn/on_remove] | 开始注册手动方块选择，以用于在生成时或删除时的方块状态。 |
| /em registerblocksedit [区域_首领_文件.yml] [on_spawn/on_remove] | 编辑在生成时或删除时的方块状态。 |
| /em registerblocksarea [区域_首领_文件.yml] [on_spawn/on_remove] | 允许管理员选择要保存为状态的大面积方块。 |
| /em registerblocksareaedit [区域_首领_文件.yml] [on_spawn/on_remove] | 允许管理员编辑要保存为状态的大面积方块。 |

<details>

<summary><b>示例用法：</b></summary>

<div align="left">

假设您想进行一场战斗，首领在一个门打开的竞技场中生成，并且您想使门在战斗开始时关闭并在战斗结束时重新打开。

为此，您将需要两个首领阶段，并注册三组不同的方块状态。对于此示例，我将分别将这些阶段命名为 phase_1_boss.yml 和 phase_2_boss.yml。

1) 使用 `/em registerblocks phase_1_boss.yml on_spawn` 或 `/em registerblocksedit phase_1_boss.yml on_spawn` 注册处于打开状态的门方块。

这意味着注册空气方块。建议在此处进行区域选择。

这是为了确保首领生成时门是打开的，以便保证玩家有进入的方式。

2) 使用 `/em registerblocks phase_2_boss.yml on_spawn` 或 `/em registerblocksedit phase_2_boss.yml on_spawn` 注册处于关闭状态的门方块。

这意味着注册门的固体方块，这些方块将阻止玩家离开。

这是为了在首领进入第 2 阶段时将门更改为实体的，以阻止玩家离开。

3) 使用 `/em registerblocks phase_2_boss.yml on_remove` 或 `/em registerblocksedit phase_2_boss.yml on_remove` 注册处于打开状态的门方块。

这意味着再次注册第一步中的相同方块（空气方块）。

这是为了在首领死亡时打开门，允许玩家离开竞技场。

</div>

</details>

</div>

***

### alert

<div align="center">

设置首领是否处于警惕状态。默认情况下，区域首领在非战斗状态时会减速，并且具有较短的攻击距离。此设置可防止区域首领在非战斗状态时减速并具有较短的攻击距离，因此它们在战斗中或非战斗状态下的行为方式始终相同。

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

设置区域首领在被杀死后是否会被永久删除。这是 BetterStructures 用于圣殿的设置，在该圣殿中，区域首领仅设计为战斗一次，然后在该位置不再战斗。

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

## 实例首领

<div align="center">

实例首领是在实例地牢中使用的区域首领的子类型。

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|:-:|
| `instanced` | 使自定义首领实例化。必需。 | `true` / `false` | `false` |

将首领设置为实例化对于实例地牢的正常工作至关重要。我们还建议删除任何实例化首领的束缚。

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
