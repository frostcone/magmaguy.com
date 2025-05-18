好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义 Boss

# 开始之前

## Boss 文件放在哪里？

Boss 文件放在配置文件夹 `~/plugins/EliteMobs/custombosses` 中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/custombosses/mybosses`。建议这样做以保持文件井井有条。

一个文件定义一个 Boss，但可以多次生成同一个 Boss，甚至可以为同一个 Boss 文件设置多个生成位置。

可以使用 [webapp](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义 Boss 等内容。

## 最小配置

**自定义 Boss 的最小配置文件是：**
```yml
```

请注意，这只是一个空文件。它仍然会生成一个带有自定义名称的僵尸自定义 Boss，因为这些是默认设置。**本页中的所有内容都是可选的！**

## 示例 Boss

<div align="center">

让我们看看一个 Boss 文件是什么样子的示例。

<details>
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eTest boss'
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
spawnMessage: A test boss has been spawned!
deathMessage: A test boss has been slain by $players!
escapeMessage: A test boss entity has escaped!
locationMessage: 'Test entity: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "I've hit you!"
onDamagedMessages:
- "I've been hit!"
```

</div>

</details>

</div>

## 基本设置

<div align="center">

### isEnabled

设置 Boss 是否启用。

| Key | Values | Default |
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

设置 Boss 的实体类型。

| Key |                                                                                   Values                                                                                    | Default |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [从这里选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。<br>该值也必须存在于文件夹 `~plugins/EliteMobs/mobproperties` 中。 | `ZOMBIE`|

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

设置 Boss 的名称。

| Key | Values | Default |
|-|:-:|-|
| `name` | [字符串](#string)，接受[颜色代码](#color_codes)和下面列出的占位符 | "Default Name" |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>

</div>

</details>

如果您希望在 Boss 的名称字段中包含其等级，只需使用以下占位符之一。

| Placeholder | Description | Example | Output (对于 10 级的 Boss) |
|-|:-:|:-:|-|
| `$level` | 替换为等级 | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | 替换为等级，用于普通怪物 | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | 替换为等级，用于迷你 Boss | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | 替换为等级，用于 Boss | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | 替换为等级，用于增援 | `"$reinforcementLevel Cool boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | 替换为等级，用于事件 Boss | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

设置 Boss 的等级。

| Key | Values | Default |
|-|:-:|-|
| `level` | 正[整数](#integer)或 `dynamic` | `dynamic` |

`dynamic` 用于事件，并根据 Boss 生成时附近玩家的等级进行调整。
不建议用于区域 Boss。

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

设置 Boss 的比例（大小）。

| Key | Values | Default |
|-|:-:|-|
| `scale` | [乘数](#multiplier) | `1.0` |

缩放时，`1.0` 表示默认大小。要使实体更大，请增加该值（例如 `1.2`）。要使实体更小，请减小该值（例如 `0.8`）。

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

设置 Boss 的类型。这用于显示 Boss 血条和其他功能。

| Key | Values | Default |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`、`BOSS`、`EVENT` 会使插件在玩家与这些 Boss 类型战斗时显示血条。

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

设置 Boss 的生命值。

| Key | Values | Default |
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

设置 Boss 的伤害乘数。

| Key | Values | Default |
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

设置 Boss 是否使用怪物的幼年变体。只能应用于有幼年变体的怪物。
如果您想[伪装]($language$/elitemobs/libsdisguises.md) Boss，但希望它在伪装时也保持幼年状态（确保伪装实体也支持幼年变体），您可以使用此设置：
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Key | Values | Default |
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

设置 Boss 的盔甲。并非所有 Minecraft 模型都能显示盔甲。Boss 盔甲纯粹是装饰性的，不影响游戏玩法。

| Key |                                    Values                                     | Default |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [材质](#material)，[UUID](https://minecraftuuid.com/)           | none |
| `chestplate` | [材质](#material) | none |
| `leggings` | [材质](#material) | none |
| `boots` | [材质](#material) | none |
| `mainHand` | [材质](#material) | none |
| `offHand` | [材质](#material) | none |

**注意：** 此字段还允许您为物品设置自定义模型。要设置自定义模型 ID，请在材质类型后添加 ID，格式如下：`ITEM_MATERIAL:ID`。示例：`DIAMOND_SWORD:1` 设置 Boss 佩戴带有您材质包中自定义模型 #1 的钻石剑。

**注意 2：** 此字段还允许您使用格式 `ITEM_MATERIAL:CODE` 设置自定义皮革颜色，其中 CODE 是颜色的十六进制表示。示例：`LEATHER_LEGGINGS:ffa500` 将创建橙色护腿。您可以使用十六进制代码，只需删除十六进制代码中的 `#`。您可以从[这里](https://www.w3schools.com/colors/colors_hexadecimal.asp)获取十六进制代码。

**注意 3：** 头盔字段还允许您将怪物头盔设置为玩家头颅。只需获取您想使用的玩家头颅的 UUID，并将其输入到头盔字段中。*玩家需要在线才能使此功能生效，否则头颅将默认为通用的 Minecraft 头颅。* 您可以从[这里](https://minecraftuuid.com/)获取玩家 UUID。

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

设置 Boss 拥有的能力。

| Key | Values | Default |
|-|:-:|-|
| `powers` | 参考下面的列表 | none |

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

*注意：如果您想查看可用的预设能力列表，可以查看[此页面]($language$/elitemobs/premade_powers.md)。*

***

### 中级配置 - 生成增援

增援也属于 powers 类别，使用以下设置：

<details>

<summary><b>增援设置</b></summary>

| Key | Description |                                                                                                             Values                                                                                                             | Default |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 触发增援生成的条件。必填。 |                                                                                                    参考下面的列表                                                                                                     | none |
| `filename` | 要作为增援生成的 Boss 文件名。必填。 |                                                                                                       [字符串](#string)                                                                                                        | none |
| `chance` | 增援生成的几率。可选。 |                                                                                                       [双精度浮点数](#double)                                                                                                        | `1.0` |
| `amount` | 设置要生成的增援数量。可选。 |                                                                                                      [整数](#integer)                                                                                                       | `1` |
| `inheritAggro` | 使增援继承 Boss 的仇恨。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | 使增援在 Boss 周围 30 格半径内生成。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 使增援继承 Boss 的等级。可选 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | 使增援使用[自定义生成系统]($language$/elitemobs/creating_spawns.md)生成。仅用于 `summonType: GLOBAL` |
| `location` | 生成位置。可选。 | `world_name,x,y,z` 或 `x,y,z` 表示相对于 Boss 的位置。对于区域 Boss，偏移量是相对于生成位置的。您也可以使用 `same_as_boss` 使增援与 Boss 在同一世界生成。 | none |
| `lightningRod` | `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的特殊设置。使末影水晶在其周围生成闪电。可选。 |                                                                                                        `true` / `false`                                                                                                        | none |

</details>

召唤类型设置了增援生成的条件。以下是有效的召唤类型列表：

<details>

<summary><b>召唤类型</b></summary>

| Value |                                                                         Description                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          仅在 Boss 第一次受到伤害时生成一次增援。                                           |
| `ON_HIT`  |                                                              在受到攻击时生成增援。                                                              |
| `ON_COMBAT_ENTER` |                                                   在 Boss 进入战斗时生成增援。                                                    |
| `GLOBAL` | 为每个在线玩家生成一个增援。需要 `customSpawn` 键设置一个有效的[自定义生成]($language$/elitemobs/creating_spawns.md)。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 在进入战斗时放置末影水晶增援，仅用于自定义龙战。                                  |

</details>

请注意，也可以通过 [Elite 脚本]($language$/elitemobs/creating_powers.md) 生成增援，因此有更多可自定义的方式来生成增援。

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

可以在 Boss 文件本身或 powers 文件夹中的新配置文件中创建您自己的能力。您可以在[这里]($language$/elitemobs/creating_powers.md)了解更多信息。

### 根据副本难度限制能力

[副本]($language$/elitemobs/dungeons.md&section=instanced-dungeons)可以有难度设置，并且可以设置特定能力仅在特定难度下启用。

<details>

<summary><b>限制能力选项</b></summary>

<div align="left">

| Key | Description | Values | Default |
|-|:-:|:-:|-|
| `filename` | 能力的文件名。 | [字符串](#string) | none |
| `difficultyID` | 难度名称，与副本包中的难度名称匹配。 | [字符串](#string) | none |

</div>

</details>

这仅适用于副本。

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

设置 Boss 生成时发送的消息。需要设置 [announcementPriority](#announcementPriority)。

| Key | Values | Default |
|-|:-:|-|
| `spawnMessage` | [字符串](#string)和[颜色代码](#color_codes) | none |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: I rise once more!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

设置 Boss 死亡时发送的消息列表。需要设置 [announcementPriority](#announcementPriority)。

| Key | Values | Default |
|-|:-:|-|
| `deathMessages` | [字符串](#string)、[颜色代码](#color_codes)和以下占位符 | none |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4The Test Boss has been killed!'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage damage!'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage damage!'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage damage!'
- '&4Slayers: $players'
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

| Value | Description |
|-|:-:|
| `$damager1name` | 最高伤害者的名称 |
| `$damager2name` | 第二高伤害者的名称 |
| `$damager3name` | 第三高伤害者的名称 |
| `$damager1damage` | 最高伤害者的伤害量 |
| `$damager2damage` | 第二高伤害者的伤害量 |
| `$damager3damage` | 第三高伤害者的伤害量 |
| `$players` | 显示所有伤害者的列表 |

</details>

### onKillMessage

设置 Boss 杀死玩家时发送的消息。需要设置 [announcementPriority](#announcementPriority)。

| Key | Values | Default |
|-|:-:|-|
| `onKillMessage` | [字符串](#string)和[颜色代码](#color_codes) | none |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: I win, you lose!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

设置史莱姆 Boss 的大小，但仅适用于史莱姆和岩浆怪。

</div>

| Key | Values | Default |
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

设置 Boss 生成时是否为中立。这仅适用于可以中立的实体类型，例如狼或铁傀儡。

</div>

| Key | Values | Default |
|-|:-:|-|
| `neutral` | [布尔值](#boolean) | `false` |Please specify the target language for the translation.Please specify the language you would like the text translated into.