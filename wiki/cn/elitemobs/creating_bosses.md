```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 创建自定义 Boss

# 开始之前

## Boss 文件存放位置？

Boss 文件存放在配置文件夹 `~/plugins/EliteMobs/custombosses` 中。

可以创建子文件夹，例如 `~/plugins/EliteMobs/custombosses/mybosses`。 建议这样做以保持组织性。

一个文件定义一个 Boss，尽管可以多次生成同一个 Boss，甚至为同一个 Boss 文件设置多个生成位置。

可以使用 [webapp](https://magmaguy.com/webapp/webapp.html) 快速轻松地创建自定义 Boss 和更多内容。

## 最小配置

**自定义 Boss 的最小可能配置文件是：**
```yml
```

请注意，这只是一个空文件。 这仍然会生成一个具有自定义名称的僵尸自定义 Boss，因为这些是默认值。 **此页面中的所有内容都是可选的！
**

## 示例 Boss

<div align="center">

让我们看一下 Boss 文件的示例。

<details> 
<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&e测试 Boss'
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
spawnMessage: 已生成一个测试 Boss！
deathMessage: 测试 Boss 已被 $players 击杀！
escapeMessage: 测试 Boss 实体已逃脱！
locationMessage: '测试实体：$location'
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


## 基本设置

<div align="center">

### isEnabled

设置是否启用 Boss。

| 键           |        值         | 默认值    |
|-------------|:----------------:|--------|
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

| 键            |                                                                     值                                                                     | 默认值      |
|--------------|:-----------------------------------------------------------------------------------------------------------------------------------------:|----------|
| `entityType` | [从这里选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)。<br>该值还必须存在于 `~plugins/EliteMobs/mobproperties` 文件夹中。 | `ZOMBIE` |

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

| 键      |                        值                        | 默认值    |
|--------|:-----------------------------------------------:|--------|
| `name` | [字符串](#string)，接受[颜色代码](#color_codes) 和下面列出的占位符 | "默认名称" |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷 Boss！"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

如果你希望在他们的名称字段中包含 Boss 等级，只需使用以下占位符之一。

| 占位符                   |        描述         |               示例               | 输出（对于 10 级 Boss） |
|-----------------------|:-----------------:|:------------------------------:|------------------|
| `$level`              |       替换为等级       |        "$level 酷 Boss"         | `10 酷 Boss`      |
| `$normalLevel`        |   替换为等级，为普通怪物制作   |    `"$normalLevel 酷 Boss"`     | `[10] 酷 Boss`    |
| `$minibossLevel`      | 替换为等级，为小 Boss 制作  |   `"$minibossLevel 酷 Boss"`    | `〖10〗 酷 Boss`    |
| `$bossLevel`          |  替换为等级，为 Boss 制作  |     `"$bossLevel 酷 Boss"`      | `『10』 酷 Boss`    |
| `$reinforcementLevel` |    替换为等级，为援军制作    | `"$reinforcementLevel 酷 Boss"` | `〔10〕酷 Boss`     |
| `$eventBossLevel`     | 替换为等级，为事件 Boss 制作 |   `"$eventBossLevel 酷 Boss"`   | `「10」酷 Boss`     |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: "$normalLevel &c酷 Boss！"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

设置 Boss 的等级。

| 键       |              值               | 默认值       |
|---------|:----------------------------:|-----------|
| `level` | 正 [整数](#integer) 或 `dynamic` | `dynamic` |

`dynamic` 用于事件，并在 Boss 生成时调整为附近玩家的等级。
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

| 键       |         值         | 默认值   |
|---------|:-----------------:|-------|
| `scale` | [乘数](#multiplier) | `1.0` |

缩放时，`1.0` 表示默认大小。 要使实体变大，请增加该值（例如，`1.2`）。 要使实体变小，请减小该值（例如，`0.8`）。

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

设置 Boss 的类型。 这用于显示 Boss 生命值条和其他功能。

| 键          |                 值                  | 默认值      |
|------------|:----------------------------------:|----------|
| `bossType` | `NORMAL`、`MINIBOSS`、`BOSS`、`EVENT` | `NORMAL` |

当玩家与这些 Boss 类型战斗时，`MINIBOSS`、`BOSS`、`EVENT` 将使插件显示生命值条。

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

| 键                  |         值         | 默认值   |
|--------------------|:-----------------:|-------|
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

| 键                  |         值         | 默认值   |
|--------------------|:-----------------:|-------|
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

设置 Boss 是否使用怪物的幼体变种。 只能应用于具有幼体变种的怪物。
如果你想[伪装]($language$/elitemobs/libsdisguises.md) Boss，但又希望它在伪装时仍然是幼体（确保伪装实体也支持幼体变种），你可以使用此设置：
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| 键        |        值         | 默认值     |
|----------|:----------------:|---------|
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

设置 Boss 的盔甲。 并非所有 Minecraft 模型都能显示盔甲。 Boss 盔甲纯粹是装饰性的，不会影响游戏玩法。

| 键            |                          值                          | 默认值 |
|--------------|:---------------------------------------------------:|-----|
| `helmet`     | [材质](#material), [UUID](https://minecraftuuid.com/) | 无   |
| `chestplate` |                   [材质](#material)                   | 无   |
| `leggings`   |                   [材质](#material)                   | 无   |
| `boots`      |                   [材质](#material)                   | 无   |
| `mainHand`   |                   [材质](#material)                   | 无   |
| `offHand`    |                   [材质](#material)                   | 无   |

**注意：**此字段还允许你为物品设置自定义模型。 要设置自定义模型 ID，请按照以下格式在材质类型后添加 ID：`ITEM_MATERIAL:ID`。
示例：`DIAMOND_SWORD:1` 设置 Boss 佩戴你的材质包中自定义模型 #1 的钻石剑。

**注意 2：**此字段还允许你使用格式 `ITEM_MATERIAL:CODE` 设置自定义皮革颜色，其中代码是颜色的十六进制表示形式。
示例：`LEATHER_LEGGINGS:ffa500` 将创建橙色护腿。 你可以使用十六进制代码，只需从十六进制代码中删除 `#`。
你可以从[这里](https://www.w3schools.com/colors/colors_hexadecimal.asp)获取十六进制代码。

**注意 3：**头盔字段还允许你将怪物头盔设置为玩家的头部。 只需获取你要使用的玩家头部的 UUID 并将其键入头盔字段即可。
*玩家需要在线才能使此工作生效，否则头部将默认为通用的 Minecraft 头部。* 你可以从[这里](https://minecraftuuid.com/)获取玩家
UUID。

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

设置 Boss 拥有的力量。

| 键        |    值    | 默认值 |
|----------|:-------:|-----|
| `powers` | 请参考以下列表 | 无   |

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

*注意：如果你想查看可以使用的预制力量列表，可以查看[此页面]($language$/elitemobs/premade_powers.md)。*

***

### 中级配置 - 生成援军

援军也进入力量类别，使用以下设置：

<details> 

<summary><b>援军设置</b></summary>

| 键              |                                         描述                                         |                                                      值                                                      | 默认值     |
|----------------|:----------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------:|---------|
| `summonType`   |                                  触发援军生成的因素。 强制性。                                   |                                                   请参考以下列表                                                   | 无       |
| `filename`     |                              要生成为援军的 Boss 的文件名。 强制性。                               |                                               [字符串](#string)                                                | 无       |
| `chance`       |                                    援军生成的几率。 可选。                                    |                                               [双精度](#double)                                                | `1.0`   |
| `amount`       |                                   设置生成的援军数量。 可选。                                   |                                               [整数](#integer)                                                | `1`     |
| `inheritAggro` |                                使援军继承 Boss 的仇恨。 可选。                                 |                                              `true` / `false`                                               | `false` |
| `spawnNearby`  |                            使援军在 Boss 半径 30 个方块内生成。 可选。                             |                                              `true` / `false`                                               | `false` |
| `inheritLevel` |                                 使援军继承 Boss 的等级。 可选                                 |                                              `true` / `false`                                               | `false` |
| `customSpawn`  | 使用[自定义生成系统]($language$/elitemobs/creating_spawns.md)生成援军。 仅用于 `summonType: GLOBAL` |
| `location`     |                                     生成位置。 可选。                                      | `world_name,x,y,z` 或相对于 Boss 的位置的 `x,y,z`。 对于区域 Boss，偏移量相对于生成位置。 你还可以使用 `same_as_boss` 使援军在与 Boss 相同的世界中生成。 | 无       |
| `lightningRod` |       `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` 的特殊设置。 使末地水晶在其周围生成闪电。 可选。        |                                              `true` / `false`                                               | 无       |

</details>

召唤类型设置援军生成的条件。 以下是有效的召唤类型的列表：

<details> 

<summary><b>召唤类型</b></summary>

| 值                               |                                            描述                                             |
|---------------------------------|:-----------------------------------------------------------------------------------------:|
| `ONCE`                          |                                  仅在 Boss 第一次受到伤害时生成一次援军。                                  |
| `ON_HIT`                        |                                        在受到攻击时生成援军。                                        |
| `ON_COMBAT_ENTER`               |                                     在 Boss 进入战斗时生成援军。                                     |
| `GLOBAL`                        | 为每个在线玩家生成一个援军。 需要 `customSpawn` 键具有有效的[自定义生成]($language$/elitemobs/creating_spawns.md)设置。 |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 在进入战斗时放置末地水晶援军，仅用于自定义龙战。                                  |

</details>

请注意，也可以通过[精英脚本]($language$/elitemobs/creating_powers.md)生成援军，因此有更多可自定义的援军生成方式。

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

### 高级配置 - 创建你自己的力量

可以在 Boss 文件本身中或作为 powers 文件夹中的新配置文件创建你自己的力量。
你可以在[这里]($language$/elitemobs/creating_powers.md)了解更多相关信息。

### 根据实例地下城难度限制力量

[实例地下城]($language$/elitemobs/dungeons.md&section=instanced-dungeons)可以有难度设置，并且可以使特定力量仅在特定难度下启用。

<details> 

<summary><b>限制力量选项</b></summary>

<div align="left">

| 键              |         描述          |       值        | 默认值 |
|----------------|:-------------------:|:--------------:|-----|
| `filename`     |       力量的文件名。       | [字符串](#string) | 无   |
| `difficultyID` | 难度名称，与地下城包中难度的名称匹配。 | [字符串](#string) | 无   |

</div>

</details>

这仅适用于实例地下城。

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

设置 Boss 生成时发送的消息。 需要设置[announcementPriority](#announcementPriority)。

| 键              |                  值                   | 默认值 |
|----------------|:------------------------------------:|-----|
| `spawnMessage` | [字符串](#string) 和[颜色代码](#color_codes) | 无   |

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

设置 Boss 死亡时要发送的消息列表。 需要设置[announcementPriority](#announcementPriority)。

| 键               |                     值                      | 默认值 |
|-----------------|:------------------------------------------:|-----|
| `deathMessages` | [字符串](#string)、[颜色代码](#color_codes) 和以下占位符 | 无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4测试 Boss 已被击杀！'
- '&c&l    第一名伤害者：$damager1name &c造成 $damager1damage 点伤害！'
- '&6&l    第二名伤害者：$damager2name &6造成 $damager2damage 点伤害！'
- '&e&l    第三名伤害者：$damager3name &e造成 $damager3damage 点伤害！'
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

| 值                 |     描述     |
|-------------------|:----------:|
| `$damager1name`   |  最高伤害者的姓名  |
| `$damager2name`   | 第二高伤害者的姓名  |
| `$damager3name`   | 第三高伤害者的姓名  |
| `$damager1damage` | 最高伤害者的伤害量  |
| `$damager2damage` | 第二高伤害者的伤害量 |
| `$damager3damage` | 第三高伤害者的伤害量 |
| `$players`        | 显示所有伤害者的列表 |

</details>

### onKillMessage

设置 Boss 杀死玩家时发送的消息。 需要设置[announcementPriority](#announcementPriority)。

| 键               |                  值                   | 默认值 |
|-----------------|:------------------------------------:|-----|
| `onKillMessage` | [字符串](#string) 和[颜色代码](#color_codes) | 无   |

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

设置粘液 Boss 的大小，但仅适用于粘液和岩浆怪。

</div>

| 键           |       值        | 默认值 |
|-------------|:--------------:|-----|
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

设置 Boss 是否以中立状态生成。 这仅适用于可以中立的实体类型，例如狼或铁傀儡。

</div>

| 键         |        值        | 默认值     |
|-----------|:---------------:|---------|
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

设置自定义 Boss 在取消生成之前的时间（分钟）。

| 键         |          值           | 默认值 |
|-----------|:--------------------:|-----|
| `timeout` | 时间（分钟）[整数](#integer) | `0` |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
timeout: 20
```

设置 Boss 在 20 分钟后逃脱。

</div>

</details>

***

### isPersistent

设置 Boss 是否可以在区块卸载后生存。 仅建议用于事件 Boss。

| 键              |        值         | 默认值     |
|----------------|:----------------:|---------|
| `isPersistent` | `true` / `false` | `false` |

<details>
```
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

设置 Boss 可以强对抗或弱对抗的武器。

| 键                 |        值        | 默认值 |
|-------------------|:---------------:|-----|
| `damageModifiers` | [材质](#material) | 无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

在此示例中，Boss 只会受到钻石剑 80% 的伤害（或减少 20%），但会受到三叉戟 200% 的伤害（或增加 2 倍）。

</details>

***

### normalizedCombat

修改 Boss 的伤害和最大生命值，以匹配 `~/plugins/EliteMobs/mobproperties` 中规范化实体的值。 这是区域 Boss 的默认值，以保证平滑的难度曲线。

| 键                  |        值         | 默认值     |
|--------------------|:----------------:|---------|
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

设置当 Boss 通过 [timeout](#timeout) 机制逃脱时，向玩家广播的消息。
需要配置 [announcementPriority](#announcementPriority)。

| 键               |       值        | 默认值 |
|-----------------|:--------------:|-----|
| `escapeMessage` | [字符串](#string) | 无   |

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

设置 Boss 血条中显示的消息。 这用于跟踪自定义 Boss 的生命值及其在服务器中的位置。
需要配置 [annoucementPriority](#annoucementPriority)。

| 键                 |                       值                       | 默认值 |
|-------------------|:---------------------------------------------:|-----|
| `locationMessage` | [字符串](#string)、[颜色代码](#color_codes) 和下面列出的占位符 | 无   |

占位符：

| 值           |              描述               |
|-------------|:-----------------------------:|
| `$distance` | 被玩家与自定义 Boss 之间的距离替换。 这是首选选项。 |
| `$location` |   被自定义 Boss 的 x y z 位置坐标替换    |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4酷 Boss：在 $location 处，仅 $distance 个方块远！"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

这将显示类似于 `酷 Boss：在 414,55,347 处，仅 10 个方块远！` 的内容

</details>

***

### uniqueLootList

设置 Boss 掉落的[自定义物品]($language$/elitemobs/creating_items.md)。

| 键                |         值          | 默认值 |
|------------------|:------------------:|-----|
| `uniqueLootList` | [列表](#string_list) | 无   |

自定义战利品中的战利品条目遵循战利品表格式。 [有关此处的更多信息！]($language$/elitemobs/loot_tables.md)
请注意，某些旧文件可能使用与示例不同的过时战利品表。

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

设置 Boss 是否掉落 EliteMobs 战利品，不包括 [`uniqueLootList`](#uniqueLootList) 中的物品。 包括硬币。

| 键                    |         值         | 默认值    |
|----------------------|:-----------------:|--------|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

建议为援军怪物设置为 false。

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

设置自定义 Boss 是否掉落通常与其普通怪物类型相关的普通战利品。

| 键                  |         值         | 默认值    |
|--------------------|:-----------------:|--------|
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

设置自定义 Boss 是否掉落 EliteMobs 程序生成的战利品。 不包括精英硬币。

| 键                 |         值         | 默认值    |
|-------------------|:-----------------:|--------|
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

设置 Boss 移动时留下的轨迹。

| 键        |                                                                          值                                                                          | 默认值 |
|----------|:---------------------------------------------------------------------------------------------------------------------------------------------------:|-----|
| `trails` | [粒子](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) 或 [物品材质](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | 无   |

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

设置 Boss 怪物在击中玩家时显示的消息。 这是一个列表，并且使用的消息是从列表中随机选择的。

| 键                  |         值          | 默认值 |
|--------------------|:------------------:|-----|
| `onDamageMessages` | [列表](#string_list) | 无   |

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

设置 Boss 怪物在被玩家伤害时显示的消息。 这是一个列表，并且使用的消息是从列表中随机选择的。

| 键                   |         值          | 默认值 |
|---------------------|:------------------:|-----|
| `onDamagedMessages` | [列表](#string_list) | 无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "你击中我了！"
- "我被打中了！"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

设置 Boss 将会骑乘的实体。

| 键                   |                                                        值                                                         | 默认值 |
|---------------------|:----------------------------------------------------------------------------------------------------------------:|-----|
| `onDamagedMessages` | [要骑乘的 Boss 的文件名](#filename) 或 [实体类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | 无   |

不要试图让 Boss 自己骑乘自己。

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

注意：区域 Boss 将与他们骑乘的实体共享他们的栓绳，这意味着如果他们超出其栓绳允许的距离，他们都会被拖回生成位置。

***

### announcementPriority

设置公告的优先级。 较低的优先级意味着不进行公告，较高的优先级不仅可以在聊天中公告，还可以在配置时在 Discord 上公告。

| 键                      |       值        | 默认值 |
|------------------------|:--------------:|-----|
| `announcementPriority` | [整数](#integer) | `1` |

以下是优先级的作用列表：

| 值   |                                               描述                                               |
|-----|:----------------------------------------------------------------------------------------------:|
| `0` |                                       Boss 将完全静音，没有公告消息。                                       |
| `1` |                            这是默认值。 Boss 可以在聊天中发送消息，包括生成消息、死亡消息和逃脱消息。                            |
| `2` |                           除了 `1` 中的内容之外，Boss 将设置为可以通过 `/em` 菜单被玩家跟踪。                           |
| `3` | 除了 `2` 中的内容之外，如果配置了，广播消息将在 Discord 上镜像。 [Discord 配置信息在这里。]($language$/elitemobs/discordsrv.md) |

这是一个可跟踪的 Boss 的示例，它能够在聊天和 Discord 上发送生成/死亡/逃脱消息：

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**注意**：如果要使用相应的公告优先级，则必须配置 spawnMessage、deathMessage/deathMessages、escapeMessage 以用于聊天和
Discord 公告，以及 locationMessage 以用于跟踪功能。

***

### followDistance

设置 Boss 激怒和进入战斗的距离。

| 键                |       值        | 默认值                 |
|------------------|:--------------:|---------------------|
| `followDistance` | [双精度](#double) | 无，使用 Minecraft 的默认值 |

注意 1：区域 Boss 在脱离战斗时拥有 `followDistance` 的一半。 这是为了防止他们从太远的地方激怒，这可能会由于栓绳约束而导致烦人的战斗问题。

注意 2：`followDistance` 越高，Boss 对服务器 CPU 的消耗就越大。 请小心谨慎地使用！

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

设置 30 个方块的范围，如果玩家进入该距离，Boss 将开始追逐/攻击玩家。

</details>

***

### onDeathCommands

设置自定义 Boss 死亡时要运行的命令列表。

| 键                 |         值          | 默认值 |
|-------------------|:------------------:|-----|
| `onDeathCommands` | [列表](#string_list) | 无   |

该列表支持以下占位符：

| 值               |                     描述                      |
|-----------------|:-------------------------------------------:|
| `$level`        |                Boss 等级的占位符。                 |
| `$name`         |                Boss 名称的占位符。                 |
| `$chance=x$`    |                  使命令有机会运行。                  |
| `$players`      | 使命令在伤害者列表中的每个玩家运行一次，并在每次运行时替换为该列表中不同玩家的用户名。 |
| `$locationX`    |               Boss 死亡时的 X 坐标。               |
| `$locationY`    |               Boss 死亡时的 Y 坐标。               |
| `$locationZ`    |               Boss 死亡时的 Z 坐标。               |
| `$damager1name` |                  最高伤害者的用户名                  |
| `$damager2name` |                 第二高伤害者的用户名                  |
| `$damager3name` |                 第三高伤害者的用户名                  |

请查看下面的示例，以更好地了解它们的工作原理。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players 击杀了 $name！那是 $level 级的！"
- "$chance=0.5$ say 杀得漂亮！"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

如果 Player1、Player2 和 Player3 在杀死 Boss 之前都对其造成了伤害，则控制台的命令输出将如下所示：

<div align="left">

```
say Player1 击杀了 CustomBossName！那是 X 级的！
say Player2 击杀了 CustomBossName！那是 X 级的！
say Player3 击杀了 CustomBossName！那是 X 级的！
```

</div>

此外，以下内容也有 50% 的几率输出：

<div align="left">

```
say 杀得漂亮！
```

</div>

</details> 

***

### onSpawnCommands

设置 Boss 生成时将运行的命令列表。

| 键                 |         值          | 默认值 |
|-------------------|:------------------:|-----|
| `onSpawnCommands` | [列表](#string_list) | 无   |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符将不适用，因为此时不会有任何伤害者。

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

设置当 Boss 进入战斗时将运行的命令列表。

| 键                       |         值          | 默认值 |
|-------------------------|:------------------:|-----|
| `onCombatEnterCommands` | [列表](#string_list) | 无   |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！** 伤害者占位符将不适用，因为此时不会有任何伤害者。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Boss 已进入战斗！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

设置当 Boss 脱离战斗时要运行的命令列表。

| 键                       |         值          | 默认值 |
|-------------------------|:------------------:|-----|
| `onCombatLeaveCommands` | [列表](#string_list) | 无   |

**这使用与 [onDeathCommands](#onDeathCommands) 相同的占位符！**

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Boss 已脱离战斗！
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

如果启用了该插件，则设置 LibsDisguises 伪装。 [更多信息在这里。]($language$/elitemobs/libsdisguises.md)

| 键                    |       值        | 默认值 |
|----------------------|:--------------:|-----|
| `disguise`           | [字符串](#string) | 无   |
| `customDisguiseData` | [字符串](#string) | 无   |

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

设置来自 skindex 的自定义伪装。 [查看此页面]($language$/elitemobs/libsdisguises.md) 以了解如何正确格式化此数据。

</details>

***

### customModel

设置要使用的自定义模型，如果你有自定义模型和 ModelEngine。 [更多信息在这里。]($language$/elitemobs/custom_models.md)

| 键             |       值        | 默认值 |
|---------------|:--------------:|-----|
| `customModel` | [字符串](#string) | 无   |

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

设置 Boss 是否可以移动。 被冻结的 Boss 仍然可以攻击。
</br>*注意：这可能不适用于某些实体。*

| 键        |        值         | 默认值     |
|----------|:----------------:|---------|
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

设置 Boss 将播放的音乐，从它生成时开始。 需要在资源包中使用歌曲的 .ogg 文件。

| 键      |       值        | 默认值 |
|--------|:--------------:|-----|
| `song` | [字符串](#string) | 无   |

**注意：`song` 设置需要设置 `followDistance`，因为 `followDistance` 确定歌曲开始播放的范围。**
查看示例，了解如何设置 `song` 的 `length`（毫秒）。

<details> 

<summary><b>示例</b></summary>

有两种设置歌曲的方法。 这是第一种：

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

这将播放歌曲 ice_queen.idle 76370 毫秒，然后循环播放。 请注意，歌曲的位置由资源包决定。

这是设置歌曲的第二种方法：

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

这将播放歌曲 ice_queen.end_transition 14328 毫秒，然后过渡到 ice_queen.end_loop 28657 毫秒并循环播放 end_loop。

这允许 Boss 拥有“介绍”或“过渡”歌曲，然后是循环播放的主曲目。

</div>

</details>

***

### cullReinforcements

设置当 Boss 死亡时是否移除 Boss 的援军。

| 键                    |        值         | 默认值    |
|----------------------|:----------------:|--------|
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

设置 Boss 的移动速度。
</br>*注意：任何超过 0.36 的速度都可能太快。*

| 键                        |       值        | 默认值 |
|--------------------------|:--------------:|-----|
| `movementSpeedAttribute` | [双精度](#double) | 无   |

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

当 Boss 达到一定比例的生命值时，Boss 可以具有会变化的阶段。 当这种情况发生时，Boss 将开始使用不同的配置文件，这意味着 Boss
的一切都可以更改，包括实体类型之类的东西。
</br>要了解有关 Boss 阶段的更多信息，请点击[此处]($language$/elitemobs/creating_boss_phases.md)。

| 键                    |         描述          | 值                  | 默认值 |
|----------------------|:-------------------:|--------------------|-----|
| `phases`             | 设置 Boss 将拥有的阶段。 强制性 | [列表](#string_list) | 无   |
| `phaseSpawnLocation` | 设置阶段 Boss 生成的位置。 可选 | [字符串](#string)     | 无   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

对于此示例，我们将展示三个不同的配置文件。

第一个 Boss 配置文件：phase_1_boss.yml

```yml
name: "阶段 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

第二个 Boss 配置文件：phase_2_boss.yml

```yml
name: "阶段 2"
entityType: SKELETON
```

第三个 Boss 配置文件：phase_3_boss.yml

```yml
name: "阶段 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

这个 Boss 将在 60% 的生命值时更改为配置文件 `phase_2_boss.yml`，并在 30% 的生命值时更改为与阶段 2
相同的世界的 `phase_3_boss.yml` 配置文件，并且坐标为 x=10、y=64 和 z=100。 Boss 的实体类型和名称也会更改。

条目的格式为 `filename:healthPercentage`。

phaseSpawnLocation 是可选的，如果未设置，Boss 将在其站立的位置更改阶段。

</details>

在设计阶段 Boss 时，了解以下事项非常重要：

<div align="left">

- 第一个阶段的配置文件设置 Boss 的所有阶段。
- 玩家在阶段之间保持威胁/伤害计数。
- 切换阶段是基于损失的生命值百分比，该百分比在切换到不同阶段时会保留。 这意味着增加或减少阶段之间的 healthMultiplier
  不会治疗或伤害 Boss，它仍将以相同的百分比切换，但该阶段的生命值会更多或更少。
- 如果阶段 Boss 脱离战斗，它们会恢复到第一阶段。
- 同时也是区域 Boss 的阶段 Boss 在所有阶段共享相同的栓绳半径和超时机制，并且当计时器完成时，将以第一阶段 Boss 的身份重生。
- 最后一个阶段的配置文件设置 Boss 的战利品。
- 阶段无法跳过 - 过度杀伤造成的伤害仍然会让 Boss 在定义的百分比处切换阶段。
- 具有坐骑的阶段 Boss 在切换阶段时不再被骑乘。

</div>

</div>

</div>

***

## 区域 Boss

<div align="center">

区域 Boss 是一种特定类型的自定义 Boss，它在特定的配置位置生成，并且能够在延迟后在该位置重生。
此外，它们可以具有栓绳，以确保它们停留在特定区域，以及其他功能。

这些用于所有地下城内容。 要了解有关区域 Boss 的更多信息，请点击[此处]($language$/elitemobs/creating_world_bosses.md)。

| 键                     |                     描述                     |                         值                          | 默认值     |
|-----------------------|:------------------------------------------:|:--------------------------------------------------:|---------|
| `isRegionalBoss`      | 设置 Boss 是否为区域 Boss。 如果你想要区域 Boss，则应为 true。 |                  `true` / `false`                  | `false` |
| `spawnLocation`       |               设置 Boss 的生成位置。               | 通过 `/em addSpawnLocation [filename.yml]` 命令添加这些位置！ | 无       |
| `spawnCooldown`       |       设置 Boss 的重生冷却时间，以<b>分钟</b>为单位。       |                   [整数](#integer)                   | `0`     |
| `leashRadius`         |      设置 Boss 从其生成点可以行走的距离，超出该距离将被拉回。       |                   [双精度](#double)                   | 无       |
| `onSpawnBlockStates`  |            设置 Boss 在生成时将修改的方块。             |                      请查看下面的命令                      | 无       |
| `onRemoveBlockStates` |           设置 Boss 在取消生成时将修改的方块。            |                      请查看下面的命令                      | 无       |

如所指出的，区域 Boss 可以具有 `onSpawnBlockStates` 和 `onRemoveBlockStates`。

这是一个非常有用的功能，可以在战斗中修改战斗竞技场，尤其是在与阶段切换结合使用时，因为可以通过更改方块状态来打开和关闭战斗竞技场。

这些的格式太复杂，无法手动编写，因此存在一些命令来帮助你进行设置：

| 命令                                                                       |          描述           |
|--------------------------------------------------------------------------|:---------------------:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove]         | 开始为生成或删除方块状态注册手动方块选择。 |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove]     |     编辑生成或删除方块状态。      |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove]     | 允许管理员选择要保存为状态的大面积方块。  |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | 允许管理员编辑要保存为状态的大面积方块。  |

<details> 

<summary><b>使用示例：</b></summary>

<div align="left">

假设你想要进行一场战斗，其中 Boss 在一个有敞开门的竞技场中生成，并且你希望在战斗开始时关闭门，并在战斗结束时重新打开门。

为此，你需要两个 Boss 阶段，并注册三组不同的方块状态。 对于此示例，我将这些阶段分别命名为 phase_1_boss.yml 和
phase_2_boss.yml。

1) 使用 `/em registerblocks phase_1_boss.yml on_spawn` 或 `/em registerblocksedit phase_1_boss.yml on_spawn` 注册处于打开状态的门方块。

这意味着注册空气方块。 这里建议使用区域选择。

这对于确保 Boss 生成时门是打开的，以便玩家有进入的保证方法是必要的。

2) 使用 `/em registerblocks phase_2_boss.yml on_spawn` 或 `/em registerblocksedit phase_2_boss.yml on_spawn` 注册处于关闭状态的门方块。

这意味着注册门的固体方块，这将阻止玩家离开。

这对于在 Boss 进入第二阶段时更改门为实体，从而阻止玩家离开是必要的。

3) 使用 `/em registerblocks phase_2_boss.yml on_remove` 或 `/em registerblocksedit phase_2_boss.yml on_remove` 注册处于打开状态的门方块。

这意味着再次注册第一步中的相同方块（空气方块）。

这对于在 Boss 死亡时打开门，以便玩家离开竞技场是必要的。

</div>

</details>

</div>

***

### alert

<div align="center">

设置 Boss 是否处于警惕状态。 默认情况下，区域 Boss 在脱离战斗时会减速并具有较短的激怒距离。 此设置可防止区域 Boss
在脱离战斗时减速并具有较短的激怒距离，因此它们在战斗中或战斗外始终会表现相同。

</div>

| 键       |        值        | 默认值    |
|---------|:---------------:|--------|
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

设置区域 Boss 在被杀死后是否会被永久删除。 这是 BetterStructures 用于神殿的方式，其中区域 Boss 仅设计为战斗一次，然后永远不在该位置进行战斗。

</div>

| 键                  |        值        | 默认值     |
|--------------------|:---------------:|---------|
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

## 实例 Boss

<div align="center">

实例 Boss 是实例地下城中使用的区域 Boss 的子类型。

| 键           |          描述          | 值                | 默认值     |
|-------------|:--------------------:|------------------|---------|
| `instanced` | 使自定义 Boss 成为实例。 强制性。 | `true` / `false` | `false` |

将 Boss 设置为实例对于实例地下城的正常工作是强制性的。 我们还建议删除任何实例 Boss 的栓绳。

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
