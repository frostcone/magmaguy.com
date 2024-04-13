
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义boss

# 在开始之前

## 怪物文件应该放在哪里?

怪物文件应该放在 `~/plugins/EliteMobs/custombosses` 的配置文件夹中。

您可以创建子文件夹，比如 `~/plugins/EliteMobs/custombosses/mybosses`。这样可以让事物变得更加有组织。

一个文件定义一个boss，虽然可以多次生成同一个boss，甚至可以为同一个boss文件设置多个生成地点。

您可以使用 [网页应用](https://magmaguy.com/webapp/webapp.html) 快速编辑自定义boss和其他更多东西。

## 可能的最小配置

**自定义boss的最小可能配置文件是：**
```yml
```

注意此处只是空文件，但仍会生成一个自定义名字的僵尸boss，因为这些是默认设定。**这页的所有内容都是可选的！**

## Boss例子

<div align="center">

先看一个boss文件可能的样子。

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
spawnMessage: 测试boss被生成！
deathMessage: 测试boss被 $players玩家击败！
escapeMessage: 测试boss实体逃跑了！
locationMessage: '测试实体: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "我打到你了！"
onDamagedMessages:
- "我被打到了！"
```

</div>

</details>

</div>

## 基本设定

<div align="center">

### isEnabled

设置boss是否启用。

| 键 | 可能的值 | 默认值 |
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

设置boss的生物类型。

| 键 |                                                                                   可能的值                                                                                    | 默认值 |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [从此处选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。 <br> 该值也必须在 `~plugins/EliteMobs/mobproperties` 文件夹中。 | `ZOMBIE` |

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

设置boss的名称。

| 键 | 可能的值 | 默认值 |
|-|:-:|-|
| `name` | [字符串](#string)，接受 [颜色编码](#color_codes) 和以下所列的占位符 | "Default Name" |

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

如果你希望把boss的等级包含在他们的名字字段中，只需使用以下的占位符。

| 占位符 | 描述 | 示例 |对于等级10的boss的输出 |
|-|:-:|:-:|-|
| `$level` | 替换为等级 | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | 替换为等级，适用于普通怪物 | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | 替换为等级，适用于小型boss | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | 替换为等级，适用于boss | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | 替换为等级，适用于援军 | `"$reinforcementLevel Cool boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | 替换为等级，适用于活动boss | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

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

设置boss的等级。

| 键 | 可能的值 | 默认值 |
|-|:-:|-|
| `entityType` | 正[整数](#integer) 或 `dynamic` | `dynamic` |

`dynamic` 适用于活动，生成boss时会根据附近玩家的等级进行调整。不推荐用于区域boss。

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

设置boss的生命值。

| 键 | 可能的值 | 默认值 |
|-|:-:|-|
| `healthMultiplier` | [倍率](#multiplier) | `1.0` |

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

设置boss的伤害倍率。

| 键 | 可能的值 | 默认值 |
|-|:-:|-|
| `damageMultiplier` | [倍率](#multiplier) | `1.0` |

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

设置boss是否为生物的婴儿型态。只能应用于有婴儿型态的生物。
如果你想给boss[伪装](#language$/elitemobs/libsdisguises.md), 但同时希望它在伪装状态下仍然是婴儿型（确保伪装的生物也支持婴儿型态），你可以使用以下设置：
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| 键 | 可能的值 | 默认值 |
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

设置boss的护甲。不是所有的minecraft模型都能显示护甲。boss的护甲纯粹是个装饰性的，不会影响游戏玩法。

| 键 | 可能的值 | 默认值 |
|-|:-:|-|
| `helmet` |           [材料](#材料), [UUID](https://minecraftuuid.com/)           | 无 |
| `chestplate` | [材料](#材料) | 无 |
| `leggings` | [材料](#材料) | 无 |
| `boots` | [材料](#材料) | 无 |
| `mainHand` | [材料](#材料) | 无 |
| `offHand` | [材料](#材料) | 无 |

**注意：**此字段还允许您为物品设置自定义模型。要设置自定义模型ID, 在材料类型后添加ID，格式如： `物品材料:ID`。示例：`DIAMOND_SWORD:1` 设置boss持有的是纹理包中编号为#1的钻石剑的自定义模型。

**注意2：**此字段还允许您设置皮革护甲的自定义颜色，格式为 `物品材料:CODE`，其中的code是颜色的16进制表达。示例：`LEATHER_LEGGINGS:ffa500` 会生成橙色的皮革护腿。您可以使用16进制颜色代码，只需去掉颜色代码的 `#`即可。您可以在[这里](https://www.w3schools.com/colors/colors_hexadecimal.asp)获取16进制颜色代码。

**注意3：**头盔字段还允许您设置怪物头盔为玩家头颅。只需要获得你想使用的玩家头颅的UUID并输入到头盔字段即可。*需要玩家在线才能使这个功能工作，否则头颅会变为Minecraft的默认头颅。*您可以在[这里](https://minecraftuuid.com/)获取玩家的UUID。

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

设置Boss的能力。

| 键 | 值  | 默认值 |
|-|:-:|-|
| `powers` | 参考下方列表 | 无 |

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

*注意：如果你想看到可以使用的预制力量列表，可以查看[此页面]($language$/elitemobs/premade_powers.md)。*

***

### Intermediate configuration - Spawning reinforcements

增援也进入了powers类别，使用以下设置：

<details> 

<summary><b>增援设置</b></summary>

| 键 | 描述 |                                                                                                             值                                                                                                             | 默认值 |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | 触发增援生成的条件。必需。 |                                                                                                    参考下方列表                                                                                                     | 无 |
| `filename` | 作为增援生成的boss的文件名。必需。 |                                                                                                       [String] (#string)                                                                                                        | 无 |
| `chance` | 增援生成的机会。可选。 |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | 设置生成的增援数量。可选。 |                                                                                                      [Integer](#integer)                                                                                                       | `1` |
| `inheritAggro` | 使增援继承boss的仇恨。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | 使增援在boss的30个块半径内生成。可选。 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | 使增援继承boss的级别。可选 |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | 使用[自定义生成系统]($language$/elitemobs/creating_spawns.md)生成增援。仅用于`summonType: GLOBAL`
| `location` | 生成位置。可选。 | `world_name,x,y,z` 或 `x,y,z`相对于boss的位置。对于区域boss，偏移是相对于生成位置的。你也可以使用`same_as_boss`使增援在同一个世界中生成，就像boss一样。 | 无 |
| `lightningRod` | 对于 `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`的特别设定。使末影水晶生成闪电。可选。 |                                                                                                        `true` / `false`                                                                                                        | 无 |

</details>

召唤类型设置了增援生成的条件。以下是有效召唤类型列表：

<details> 

<summary><b>召唤类型</b></summary>

| 值 |                                                                         描述                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          只在boss第一次受到伤害时生成增援一次。                                           |
| `ON_HIT`  |                                                              每击中一次boss就生成增援。                                                              |
| `ON_COMBAT_ENTER` |                                                   当boss进入战斗时生成增援。                                                   |
| `GLOBAL` | 对在线的每个玩家生成一次增援。需要`customSpawn`键有一个有效的[自定义生成]($language$/elitemobs/creating_spawns.md)设定。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 进入战斗时产生末影水晶增援，只用于自定义龙战。                                 |

</details>

注意，也可以通过[精英脚本]($language$/elitemobs/creating_powers.md)生成增援，因此有更多可定制的生成增援方式。

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

### Expert configuration - 创建你自己的力量

可以在boss文件本身或者作为电力文件夹中的新配置文件，创建你自己的能力。你可以在[此处]($language$/elitemobs/creating_powers.md)了解更多。

### 根据副本困难度限制力量

[副本]($language$/elitemobs/dungeons.md&section=instanced-dungeons)可以有困难度设置，并且可以使特定的力量只在特定的困难度下启用。

<details> 

<summary><b>限制力量选项</b></summary>

<div align="left">

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|-|
| `filename` | 力量的文件名。 | [String](#string) | 无 |
| `difficultyID` | 困难度名称，与地牢包中的困难度名称匹配。 | [String](#string) | 无 |

</div>

</details>

这只适用于副本。

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

设置boss生成时发送的消息。需要设置[announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) 和 [color codes](#color_codes) | 无 |

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

设置boss死亡时发送的消息列表。需要设置[announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `deathMessages` | [Strings](#string), [color codes](#color_codes) 和下方的皮卡丘 | 无 |

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

死亡消息使用以下皮卡丘：

<details> 

<summary><b>皮卡丘</b></summary>

| 值 | 描述 |
|-|:-:|
| `$damager1name` | 最高伤害者的名字 |
| `$damager2name` | 第二名伤害者的名字 |
| `$damager3name` | 第三名伤害者的名字 |
| `$damager1damage` | 最高伤害者的伤害数量 |
| `$damager2damage` | 第二名伤害者的伤害数量 |
| `$damager3damage` | 第三名伤害者的伤害数量 |
| `$players` | 显示所有伤害者的列表 |

</details>

### onKillMessage

设置boss杀死一个玩家时发送的消息。需要设置[announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) 和 [color codes](#color_codes) | 无 |

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

设置史莱姆boss的大小，但仅适用于史莱姆和岩浆史莱姆。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `slimeSize` | [Integer](#integer) | `4` |

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

设置boss是否会作为中立生物生成。该设置仅适用于可以是中立的实体类型，例如狼或铁砧。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `neutral` | [Boolean](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Advanced settings

<div align="center">

### timeout

设置Custom Boss消失前的时间，以分钟为单位。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `timeout` | 时间（以分钟为单位） [Integer](#integer) | `0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
timeout: 20
```
将boss设置为20分钟后离开。

</div>

</details>

***

### isPersistent

设置boss是否可以在区块卸载后存活。只推荐给节日boss。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

设置boss对哪种武器可以强或弱。

| 键 |        值         | 默认值 |
|-|:---------------------:|-|
| `damageModifiers` | [Material](#material) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

在这个示例中，boss只会受到钻石剑伤害的80%（或减少20%），但会受到三叉戟伤害的200%（或多2倍）。

</details>

***

### normalizedCombat

修改boss的伤害和最大健康值，以匹配`~/plugins/EliteMobs/mobproperties`中规范化实体的值。这是区域boss的默认设置，以保证平滑的难度曲线。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

设置boss通过[timeout](#timeout)机制逃脱时，向玩家广播的消息。需要配置[announcementPriority](#announcementPriority)。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `escapeMessage` | [String](#string) | 无 |


<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

设置在boss条中显示的消息。这用于在服务器中跟踪Custom Boss的健康状况和位置。需要配置[annoucementPriority](#annoucementPriority)。

| 键 |                                      值                                      | 默认值 |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [Color codes](#color_codes) 和下面列出的皮卡丘 | 无 |

皮卡丘:

| 值 | 描述 |
|-|:-:|
| `$distance` | 用于替换玩家距离 Custom Boss 的距离。这是首选选项。 |
| `$location` | 用于替换 Custom Boss 的x y z位置坐标 |


<details>


<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Cool boss: At $location only $distance blocks away!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

这会显示类似于`Cool boss: At 414,55,347 only 10 blocks away!`的内容。

</details>

***

### uniqueLootList

设置从boss掉落的[自定义物品]($language$/elitemobs/creating_items.md)。

| 键 |        值        | 默认值 |
|-|:--------------------:|-|
| `uniqueLootList` | [List](#string_list) | 无 |

Custom Loot的战利品条目遵循Loot Table格式。 [关于这里的信息！]($language$/elitemobs/loot_tables.md)注意，一些旧文件可能正在使用看上去与示例不同的过时战利品表。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.

</div>

</details>

***

### dropsEliteMobsLoot

Sets if the boss will drop EliteMobs loot, excluding items in [`uniqueLootList`](#uniqueLootList). Includes coins.

| Key | Values | Default |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Recommended to set to false for reinforcement mobs.

<details> 

<summary><b>Example</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```
</div>

</details>

***

### dropsVanillaLoot

设置自定义Boss是否会掉落通常与其原生怪物类型相关的原版奖励。

| 键 | 可选值 | 默认值 |
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

设置自定义Boss是否会从EliteMobs中掉落程序生成的战利品。不包含精华币。

| 键 | 可选值 | 默认值 |
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

设置Boss移动时留下的痕迹。

| 键 | 可选值 | 默认值 |
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

设置Boss怪物打击玩家时展示的信息。这是一个列表，使用的是从列表中随机选取的一个。

| 键 |        可选值        | 默认值 |
|-|:--------------------:|-|
| `onDamageMessages` | [列表](#string_list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDamageMessages:
- "I hit you!"
- "Haha I hit you!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

设置Boss怪物受到玩家伤害时展示的信息。这是一个列表，使用的是从列表中随机选取的一个。

| 键 |        可选值        | 默认值 |
|-|:--------------------:|-|
| `onDamagedMessages` | [列表](#string_list) | 无 |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "You hit me!"
- "I've been hit!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

设置Boss将要骑乘和驾驭的实体。

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `onDamagedMessages` | [要骑乘的boss的文件名](#filename) 或 [实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | 无 |

请不要试图让boss骑乘自己。

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

注意：区域boss会与他们骑乘的实体共享他们的链条，这意味着如果他们超出了链条允许的距离，他们将被拖回到出生地。

***

### announcementPriority

设置公告的优先级。优先级较低意味着不会有公告，优先级较高可以不仅在聊天中公告，而且还可以在配置后在Discord上公告。

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `announcementPriority` | [整数](#integer) | `1` |

以下是优先级的作用列表：

| 可选值 |                                                                            描述                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   boss将完全沉默，没有公告消息。                                                   |
| `1` |                                这是默认值。boss可以发送聊天消息，生成消息，死亡和逃生消息。                                |
| `2` |                               除了`1`中的事情外，boss还会被设置为通过`/em`菜单被玩家跟踪。                            |
| `3` | 如已配置，除了`2`中的事物之外，广播消息也将在Discord上呈现。在Discord上的配置信息。|

以下是一个可以被跟踪，能在聊天和Discord上发送生成/死亡/逃生消息的boss的示例：

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注意**： 如果你希望使用对应的公告优先级，你需要配置spawnMessage, deathMessage/deathMessages, escapeMessage在聊天和discord公告，以及locationMessage用于追踪功能。

***

### followDistance

设置boss的仇恨和进入战斗的距离。

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `followDistance` | [双精度浮点](#double) | 无，使用Minecraft的默认值 |

注意1：区域boss在非战斗状态下的`followDistance`是战斗状态的一半。这是为了防止他们从太远的地方攻击，因为这可能会由于链条的限制而导致令人困扰的战斗问题。

注意2：`followDistance`越高，boss对服务器CPU的压力就越大。请小心并负责任地使用！

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

设置一个范围为30格的范围，如果玩家靠近boss到这个距离，boss开始追逐/攻击玩家。

</details>

***

### onDeathCommands

设置自定义boss死亡时运行的命令列表。

| 键 |        可选值        | 默认值 |
|-|:--------------------:|-|
| `onDeathCommands` | [列表](#string_list) | 无 |

列表支持以下占位符：

| 可选值 | 描述 |
|-|:-:|
| `$level` | boss级别的占位符。 |
| `$name` | boss名称的占位符。 |
| `$chance=x$` | 使命令有机会执行。 |
| `$players` | 使命令对破坏者列表中的每个玩家运行一次，并每次都用该列表中的不同玩家的用户名替换。 |
| `$locationX` | boss死亡时的X坐标。 |
| `$locationY` | boss死亡时的Y坐标。 |
| `$locationZ` | boss死亡时的Z坐标。 |
| `$damager1name` | 最大破坏者的用户名 |
| `$damager2name` | 第二大破坏者的用户名 |
| `$damager3name` | 第三大破坏者的用户名 |

以下是一个示例，可以让你更好地理解这些的工作方式。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players has killed $name! That was level $level!"
- "$chance=0.5$ say What a kill!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

如果Player1，Player2和Player3在杀死boss之前都对其造成了伤害，这将是控制台的命令输出：

<div align="left">

```
say Player1 has killed CustomBossName! That was level X!
say Player2 has killed CustomBossName! That was level X!
say Player3 has killed CustomBossName! That was level X!
```

</div>

此外，下面的输出有50%的概率发生：

<div align="left">

```
say What a kill!
```

</div>

</details> 

***

### onSpawnCommands

设置boss生成时运行的命令列表。

| 键 |        可选值        | 默认值 |
|-|:--------------------:|-|
| `onSpawnCommands` | [列表](#string_list) | 无 |

**它使用与[onDeathCommands](#onDeathCommands)相同的占位符！**在它出现的时候，破坏者占位符将不适用，因为这时候没有任何破坏者。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say Boss has spawned!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

设置boss进入战斗时运行的命令列表。

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `onCombatEnterCommands` | [列表](#string_list) | 无 |

**它使用与[onDeathCommands](#onDeathCommands)相同的占位符！**在boss进入战斗时，破坏者占位符将不适用，因为没有任何破坏者。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Boss has entered combat!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

设置boss离开战斗时运行的命令列表。

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `onCombatLeaveCommands` | [列表](#string_list) | 无 |

**它使用与[onDeathCommands](#onDeathCommands)相同的占位符！**

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Boss has left combat!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

如果该插件启用了LibsDisguises伪装插件，则设置要使用的伪装。[这里有更多信息。]($language$/elitemobs/libsdisguises.md)

| 键 | 可选值 | 默认值 |
|-|:-:|-|
| `disguise` | [字符串](#string) | 无 |
| `customDisguiseData` | [字符串](#string) | 无 |

<details> 

<summary><b>示例 disguise</b></summary>

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

<summary><b>示例 custom disguise</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

设置一个来自skindex的自定义显示。查看[这个页面]($language$/elitemobs/libsdisguises.md) 来了解如何正确格式化这些数据。

</details>

***

### customModel

设置要使用的自定义模型，如果你有一个自定义模型和ModelEngine。[在此获取更多信息。]($language$/elitemobs/custom_models.md)

| 键 | 值 | 默认值 |
|-|:-:|-|
| `customModel` | [String](#string) | none |

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

设置boss是否可以移动。冻结的boss仍然可以攻击。
</br>*注意：这可能在某些实体上无效。*

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

设置一个boss出现时播放的歌曲。需要歌曲的 .ogg 文件在资源包中。

| 键 | 值 | 默认值 |
|-|:-:|-|
| `song` | [String](#string) | none |

<details> 

<summary><b>示例</b></summary>

设置歌曲的方式有两种。这是第一种：

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

这将播放歌曲 ice_queen.idle 76370 ticks 然后循环。注意，歌曲的位置由资源包决定。

下面是设置歌曲的第二种方法：

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

这将播放 song ice_queen.end_transition 14328 ticks 然后转到 ice_queen.end_loop 28657 ticks 然后循环 end_loop。

这允许boss有一个"intro"或者"transition"歌曲然后有一个主曲循环。

</div>

</details>

***

### cullReinforcements

设置boss死亡时是否移除其增援。

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

设置boss的移动速度。
</br>*注意：大于0.36的数值可能过快。*

| 键 | 值 | 默认值 |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | none |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Boss phases

<div align="center">

Bosses 可以有多个阶段，boss 的血量达到某个百分比后会改变阶段。当这种情况发生时，boss 会使用不同的配置文件，这意味着 boss 的所有属性都可以改变，包括实体类型等。
</br>要了解更多关于 boss 阶段的信息，点击[这里]($language$/elitemobs/creating_boss_phases.md)。


| 键 | 描述 | 值 | 默认值 |
|-|:-:|-|-|
| `phases` | 设置 boss 的阶段。必填 | [List](#string_list) | none |
| `phaseSpawnLocation` | 设置阶段 boss 的出现位置。可选 | [String](#string) | none |


<details> 

<summary><b>示例</b></summary>

<div align="left">

对于本例子，我们将展示三个不同的配置文件。

第一个 boss 配置文件：phase_1_boss.yml

```yml
name: "Phase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

第二个 boss 配置文件：phase_2_boss.yml

```yml
name: "Phase 2"
entityType: SKELETON
```

第三个 boss 配置文件：phase_3_boss.yml

```yml
name: "Phase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

此 boss 在60%血量时会改变为配置文件`phase_2_boss.yml`，在30%血量时会改变为配置文件`phase_3_boss.yml`, 在和第二阶段相同的世界和坐标x=10, y=64和z=100 上。boss的实体类型和名称也会有所变化。

条目的格式为`文件名：血量百分比`。

phaseSpawnLocation 是可选的，如果没有设置，boss 会在原地改变阶段。

</details>

设计阶段 boss 时需要知道以下重要信息：

<div align="left">

- 第一阶段的配置文件设置 boss 的所有阶段。
- 玩家的威胁/伤害在阶段间保持不变。
- 切换阶段是基于丢失的血量百分比，这在切换到不同阶段时得到保留。这意味着在阶段间增加或减少 healthMultiplier 将不会治愈或伤害 boss，boss 仍然会以相同的百分比切换，但在那个阶段会有更多或更少的血量。
- 如果阶段 boss 脱离战斗，它们会回退到第一阶段。
- 也是区域 boss 的阶段 boss 在所有阶段中共享相同的拴绳半径和时间超限机制，并在定时器结束时作为第一阶段的 boss 重新出现。
- 最后一阶段的配置文件设置了 boss的掉落物品。
- 阶段不能被跳过 - 超杀伤害仍将使 boss 在定义的百分比处切换阶段。
- 有坐骑的阶段 boss 在切换阶段时会停止骑行。

</div>

</div>

</div>

***

## Regional bosses

<div align="center">

区域 boss 是一种特定类型的自定义 boss，它们在特定的配置位置出现并在一段延迟之后能够在该位置重新出现。此外，他们可以有牵引绳，确保他们在特定的区域内停留，等等。

这些都用于所有的地下城内容。要了解更多关于区域 bosses，点击[这里]($language$/elitemobs/creating_world_bosses.md)。

| 键 | 描述 | 值 | 默认值 |
|-|:-:|:-:|-|
| `isRegionalBoss` | 设置 boss 是否为区域性。如果你想要一个区域 boss，应该设置为 true。 | `true` /  `false` | `false` |
| `spawnLocation` | 设置 boss 的出生位置。 | 通过`/em addSpawnLocation [filename.yml]` 命令添加！ | none |
| `spawnCooldown` | 设置 boss 的重生冷却时间，单位为<b>分钟</b>。 | [Integer](#integer) | `0` |
| `leashRadius` | 设置 boss 从其生成点可以移动到的距离，超过这个距离将被拉回。 | [Double](#double) | none |
| `onSpawnBlockStates` | 设置 boss 出现时会修改的方块。 | 检查下方的命令 | none |
| `onRemoveBlockStates` | 设置 boss 消失时会修改的方块。 | 检查下方的命令 | none |

如所示，区域 Bosses 可以有 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这是一项非常有用的功能，可以在战斗中修改战斗区域，尤其是在与阶段切换结合使用时，因为可以通过改变方块状态来打开和关闭战斗区域。

这些的格式过于复杂，无法手动编写，所以有一些命令可以帮助你设置它们：

| 命令 | 描述 |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | 开始为 on spawn 或 on remove block states 注册手动选定的方块。 |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | 编辑 on spawn 或 on remove block states。 |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | 允许管理员选择大面积的方块来保存为 states。 |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | 允许管理员编辑大面积的方块来保存为 states。 |

<details> 

<summary><b>示例使用：:</b></summary>

<div align="left">

假设你想要进行一场战斗，其中 boss 在一个门开着的竞技场中出现，你想要在战斗开始时关上门，战斗结束时重新打开。

为了做到这一点，你需要两个 boss 阶段并注册三个不同的方块状态。对于这个例子，我将这些阶段分别命名为 phase_1_boss.yml 和 phase_2_boss.yml。

1) 使用 `/em registerblocks phase_1_boss.yml on_spawn` 或 `/em registerblocksedit phase_1_boss.yml on_spawn` 来注册开门状态的方块。

这意味着注册空气方块。在这里推荐使用区域选择。

这是必要的，以确保 boss 出现时门是开着的，所以玩家一定能进去。

2) 使用 `/em registerblocks phase_2_boss.yml on_spawn` 或 `/em registerblocksedit phase_2_boss.yml on_spawn` 来注册关闭门的状态的方块。

这意味着注册阻止玩家离开的门的实体方块。

这是必要的，以在 boss 进入第二阶段时将门改变为实体，防止玩家离开。

3) 使用 `/em registerblocks phase_2_boss.yml on_remove` 或 `/em registerblocksedit phase_2_boss.yml on_remove` 来注册开门状态的方块。

这意味着再次注册第一步中的方块（空气方块）。

这是在 boss 死亡时打开门所必需的，允许玩家离开竞技场。

</div>

</details>

</div>

***

### alert

<div align="center">

设置 boss 是否警惕。默认情况下，区域 Bosses 在脱离战斗时会变慢，攻击距离会变短。此设置防止区域 Bosses 在脱离战斗时被减速并且攻击距离缩短，所以它们在战斗中和脱离战斗时的行为将始终一样。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `alert` | [Boolean](#boolean) | `true` |

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

设置区域 Boss 被杀后是否会被永久删除。这是 BetterStructures 用于神殿的方式，其中的区域 Boss 仅设计为在该位置战斗一次，然后再也不会在该位置出现。

</div>

| 键 | 值 | 默认值 |
|-|:-:|-|
| `removeAfterDeath` | [Boolean](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Instanced bosses

<div align="center">

Instanced bosses 是用于无尽地下城的局部 Bosses 的子类型。

| 键 | 描述 | 值 | 默认值 |
|-|:-:|-|-|
| `instanced` | 将自定义 boss 设置为带实例的。必填。 | `true` / `false` | `false` |

对 bosses 设置为带实例对于 instanced dungeons 的正确工作是必需的。我们也建议移除任何带有实例的 bosses 的牵引。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>