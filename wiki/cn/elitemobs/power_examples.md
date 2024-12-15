  FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,2,0
      Target2:
        targetType: SELF
        offset: 6,2,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 10
      times: 20
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,-2,0
      Target2:
        targetType: SELF
        offset: 6,-2,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 10
      times: 20
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>

---

## How are these used in combat?

As you can see in this page, this system offers a lot of flexibility and complexity, which means players can't just ignore the environment of the fight! As an example, you've seen examples of how to:

- Create a moving zone that hurts players that fail to get out of the zone.
- Create safe zones by healing players inside of them.
- Change the battlefield by spawning and removing blocks.
- Stun players by changing their movement capabilities.

And that's just by combining different actions and using different zone types. EliteMobs is very much a "combat puzzle" type of system - you are only as powerful as you can put together the pieces in order to create a strategy for combat. If a group of players ignores the core mechanics of a power, they might find themselfs overwhelmed and dead due to what should otherwise be a manageable situation.
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 操作

操作是脚本的核心。它们决定了脚本的作用，并允许您设置自定义间隔。

操作始终以您要执行的操作类型开始。不同的操作类型具有不同的功能。此外，所有操作都具有一个或多个目标。操作还可以具有等待计时器，以确保事情以可自定义的延迟发生。最后，操作还可以具有特定于操作类型的其他几个字段。

## 共享属性

| 值            |                                                                                 详细信息                                                                                  | 特殊 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      设置运行操作之前要等待的时间量（刻度）                                                      | ❌ |
| `repeatEvery`      |        设置操作每隔一定数量的刻度重复执行。任何设置了此选项但未使用 times 的脚本都将在生物死亡时终止，以避免延迟。         | ❌ |
| `times`            |                                                            设置操作将发生的次数                                                            | 需要 `repeatEvery` |
| `scripts`          |                                                         设置将在操作结束时运行的脚本                                                          | ❌ |
| `onlyRunOneScript` |                                                       从 `scripts` 中随机选择一个并仅运行该脚本。                                                       | ❌ |
| `offset`           | 此选项位于 `Target` 下方。允许您偏移目标位置。偏移量不适用于将区域作为目标，且 `ZONE_FULL` 或 `ZONE_BORDER` 的操作。 | ❌ |
| `debug`           | 此选项位于脚本的操作部分下方。如果设置为 true，则它将在操作所在的区域中显示屏障图标。 | ❌ |

## 操作类型

### ACTION_BAR_MESSAGE

为目标设置操作栏消息。

| 值 | 详细信息 | 强制 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` | 消息 | ✅ | 可以使用带有 `&` 的 [颜色代码](#color_codes) |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2你好，世界！"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

将操作栏设置为对距首领 10 个方块范围内的任何玩家说“Hello World”。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

向目标添加首领栏。

| 值 | 详细信息 | 强制 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            消息                            | ✅ | 可以使用带有 `&` 的 [颜色代码](#color_codes) |
| `duration` |                  首领栏的持续时间（以刻度为单位）                  | ✅ |                      ❌                       |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2你好，世界！"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

将设置一个首领栏，该首领栏对距首领 10 个方块范围内的任何玩家说“Hello World”，持续 1 秒。

</div>

</details>

</div>

---

### DAMAGE

这是如何让其他实体伤害实体。

_注意：它会原生使用 EliteMobs 伤害系统！这意味着您会看到来自攻击的正常精英护甲减伤。有关此内容的更多信息，请参见倍数部分。_

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` | 伤害倍数 | ✅ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

设置伤害为首领对玩家造成的基线伤害量的一半，同时考虑伤害减免。

</div>

</details>

</div>

#### multiplier

设置该效果的首领的伤害倍数。

**重要说明**：为了使能力能够轻松自动地缩放，通过让首领击中玩家一次，并将首领的基本伤害乘以倍数来应用伤害。

这意味着 1.0 的倍数与首领的普通攻击相同。2.0 是强度为 2 倍的攻击，而 0.5 是 50% 的强度。

---

### MAKE_INVULNERABLE

使目标无敌。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` | 设置首领是否无敌 | ✅ |
| `duration` |             设置无敌的持续时间（刻度）             | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

使首领在 60 个刻度（3 秒）内无敌。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

修改首领造成的伤害或该首领对玩家造成的伤害。这是一个特殊的操作，有一些特殊要求。

| 值 | 详细信息 | 强制 |
| --- | :-: | :-: |
| `multiplier` | 伤害倍数。 | ✅ |

此操作是特殊的，必须在具有伤害事件事件侦听器的脚本中。以下是有效的伤害事件：`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent` 用于减少对首领造成的伤害的事件，以及 `PlayerDamagedByEliteMobEvent` 用于减少对玩家造成的伤害的事件。

强烈建议您了解 `hasTag` 条件的工作原理，以便充分利用此操作。如果使用正确，可以使首领临时抵抗或更容易受到伤害，并且这可以与玩家增益、首领位置或许多其他因素相关联。

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

将玩家对首领造成的伤害提高 2 倍，但仅当玩家具有名为“CoolPlayer”的标签时。

</div>

</details>

</div>

---

### MESSAGE

向目标发送消息。

| 值 | 详细信息 | 强制 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` | 消息 | ✅ | 可以使用带有 `&` 的 [颜色代码](#color_codes) |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2你好，世界！"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

将向距首领 10 个方块范围内的所有玩家发送聊天消息。

</div>

</details>

</div>

---

### NAVIGATE

使首领导航（行走）到指定目标。

| 值 | 详细信息 | 强制 | 特殊 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | 设置首领的导航速度。`1.0` 是 config 中设置的首领值。 | ❌ | ❌ |
| `bValue` | 设置如果导航失败是否应强制将首领传送到 `FinalTarget`。 | ❌ | ❌ |
| `duration` | 首领在放弃前应尝试导航的时间。以刻度为单位设置。默认为 100 个刻度。 | ✅ | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

将使首领导航到玩家击中首领时所站的位置。

</div>

</details>

</div>

---

### PLACE_BLOCK

在持续时间内在目标位置放置一个方块。

| 值 |                                                         详细信息                                                         | 强制 |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | 方块的 [材质](#material)，[完整列表请参见此处](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              效果的持续时间，以刻度为单位                                               | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

在首领周围放置一个玻璃穹顶，该穹顶将持续 6 秒。

_注意：如果未定义持续时间，则方块放置将是永久性的。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

使用 Model Engine 为自定义模型播放指定的动画。需要在运行动画的目标上具有 Model Engine 和有效的自定义模型。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                设置动画的名称                 | ✅ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

将首领设置为播放 fortnite_dance 动画。要求服务器具有 Model Engine、首领具有自定义伪装，并且自定义伪装具有名为 "fortnite\_dance" 的动画。

</div>

</details>

</div>

---

### PLAY_SOUND

播放游戏内声音。

| 值  | 详细信息 | 强制 |
|-----|:-------------------------------------------------------------:|:-----:|
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |            设置要播放的声音的名称            | ✅ |
| `pitch` |             设置要播放的声音的音调             | ❌ |
| `volume` |           设置要播放的声音的音量           | ❌ |

[这里有一个所有 Minecraft 声音的便捷列表！](https://www.digminecraft.com/lists/sound_list_pc.php) 请记住，这也可以播放资源包中的自定义声音。
当操作以区域为目标时，该操作将为该区域中的每个方块播放声音。这会使声音比正常声音大得多，因此如果以区域为目标，请考虑降低音量。

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

在首领位置播放 Minecraft 铃铛的共鸣声音

</div>

</details>

</div>

---

### POTION_EFFECT

将特定的药水效果应用于目标。

| 值 |                                                       详细信息                                                       | 强制 |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 效果类型，[有效的列表在这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                         药水效果等级（从 0 开始）                                           | ✅ |
| `duration` |                                            效果的持续时间（刻度）                                            | ✅ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

这将使距首领 10 个方块范围内的任何玩家悬浮 2 秒（40 个刻度）。

</div>

</details>

</div>

---

### PUSH

通过设置的向量推动目标。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` | 设置将应用的速率向量 | ✅ |

*注意：此操作还接受相对向量。在此处了解有关如何使用它们的更多信息[此处]($language$/elitemobs/elitescript_relative_vectors.md)。*

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

这将使用 0.3 的力将距首领 10 个方块范围内的所有玩家推向空中。此操作将每 0.5 秒（10 个刻度）重复 10 次。换句话说，这将使此效果持续 5 秒（10 次 x 10 个刻度 = 100 个刻度）。

这将使玩家看起来好像在跳跃。

</div>

</details>

</div>

#### 向量

向量由 `vValue: x,y,z` 定义。例如，如果您希望将目标向上推动，您可以执行 `vValue: 0,0.3,0`。

---

### RUN_COMMAND_AS_CONSOLE

以控制台身份运行命令。

| 值 |                             详细信息                             | 强制 |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |   [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md)   | ✅ |
| `sValue` |                      将要运行的命令                       | ✅ |

**注意：有可用的占位符！请查看 RUN_COMMAND_AS_PLAYER，它们是相同的**

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say 你好 $bossName 我的名字是 $playerName。你的等级是多少？$bossName 我的等级是 $bossLevel。
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

使控制台广播消息“你好 $bossName 我的名字是 $playerName。你的等级是多少？$bossName 我的等级是 $bossLevel。”

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
以 `player` 身份运行命令。要求目标是玩家。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   将要运行的命令                    | ✅ |

**注意：RUN_COMMAND_AS_PLAYER 和 RUN_COMMAND_AS_CONSOLE 使用以下占位符：**

| 占位符 | 详细信息 | 特殊 |
| --- | :-: | :-: |
| `$playerName` | 玩家的显示名称 | 目标必须是玩家 |
| `$playerX` | 玩家的 X 位置 | 目标必须是玩家 |
| `$playerY` | 玩家的 Y 位置 | 目标必须是玩家 |
| `$playerZ` | 玩家的 Z 位置 | 目标必须是玩家 |
| `$bossName` | 玩家的显示名称 | 目标必须是玩家 |
| `$bossX` | 首领的 X 位置 | ❌ |
| `$bossY` | 首领的 Y 位置 | ❌ |
| `$bossZ` | 首领的 Z 位置 | ❌ |
| `$bossLevel` | 首领的等级 | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: DIRECT_TARGET
      sValue: say 你好 $playerName！
```

使击中首领的玩家在聊天中对自己说你好！

</div>

</details>

</div>

---

### SET_ON_FIRE

将目标点燃。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                火焰的持续时间（刻度）                 | ✅ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 100
```

使距首领 10 个方块范围内的任何玩家着火 5 秒。

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

使用与自定义首领配置文件中的增援系统相同的逻辑召唤增援。

| 值 | 详细信息 | 强制 |
| --- | :-: | :-: |
| `filename` | 自定义首领的文件名。 | ✅ |
| `chance` | 增援生成的几率，通常在 0.0 和 1.0 之间使用。 | ❌ |
| `inheritAggro` | 设置增援是否将对以父首领为目标的玩家发起攻击 | ❌ |
| `spawnNearby` | 设置增援是否会在附近生成，而不是正好在位置处生成。 | ❌ |
| `amount` | 设置要生成的增援数量。 | ❌ |
| `inheritLevel` | 设置增援是否将继承父首领的等级。 | ❌ |
| `location` | 设置相对于父首领的生成位置 | ❌ |

*请注意，也可以使用自定义首领设置而不是 EliteScript 生成增援。*

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
 Example:
  Events:
  - EliteMobDamagedByPlayerEvent
  Actions:
  - action: SUMMON_REINFORCEMENT
    filename: test_boss.yml
    amount: 3
    inheritLevel: true
    inheritAggro: true
    spawnNearby: true
```

当玩家击中首领时，将生成 3 个 `test_boss.yml` 增援。这些增援将继承父首领等级，将继承仇恨，并将在附近生成而不是在首领顶部生成。

</div>

</details>

</div>

---

### TELEPORT

将目标传送到特定位置。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` | 使用 `world,x,y,z,pitch,yaw` 坐标或使用与第二种格式中的目标相同的世界的 `x,y,z,pitch,yaw` 设置位置 | ✅ |

*注意：这可能会对区域首领造成一些意想不到的影响，因为它会绕过束缚。使用“与首领相同”字符串是一种确保您不会将首领传送到其区域之外的方法。*

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: SELF
      location: 0,10,0,0,0
```

将首领相对于它所在的位置传送到空中 10 个方块处。

</div>

</details>

</div>

---

### TRANSITIVE_BLOCKS

此操作仅适用于区域首领。它设置在生成时或删除时状态中指定位置的方块发生更改。它还使用来自世界首领的相同过渡方块系统。它有一些额外的参数。

| 值 | 详细信息 | 强制 |
| --- | :-: | :-: |
| `Target` | 更多信息[此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `state`  |     `on_spawn` / `on_remove`    | ✅  |
| `duration`  | 设置操作将持续的时间（以刻度为单位）。对块放置没有影响，但设置在过渡方块中设置的效果和声音的持续时间。  | ❌  |
| `sound`  | 设置是否应使用此操作播放声音效果。默认为 true。  | ❌  |

*如果通过配置文件在方块上设置了持续时间，则也会应用这些持续时间。这些不是相同的持续时间。*

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TRANSITIVE_BLOCKS
      Target:
        targetType: SELF
      state: on_spawn
```

将使已设置为在首领位置的 on_spawn 的过渡方块加载和生成。

</div>

</details>

</div>

---

### 运行脚本

只是运行在 `scripts` 中定义的脚本。任何操作都可以执行此操作，此操作仅作为便利操作而存在，用于在您只想执行该操作时使用。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   将要运行的脚本                    | ✅ |
| `onlyRunOneScript` |        仅运行列表中的一个脚本。        | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Example1
      - Example2
  Example1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Example2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&c酷炫首领！：&f抓到你了！"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

当精英受到伤害时，运行 RUN_SCRIPT，它将运行 Example1 和 Example2 脚本。

Example1 脚本将伤害距首领 10 个方块范围内的所有玩家。
<br>Example2 脚本将使用消息 "&c酷炫首领！：&f抓到你了！" 消息传递给距首领 10 个方块范围内的所有玩家。

</div>

</details>

</div>

---

### SCALE

允许您缩放实体。

| 值  | 详细信息 | 强制 |
|-----|:-------------------------------------------------------------:|:-----:|
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scale` |            设置缩放大小                               | ✅ |
| `duration` |        设置缩放效果应持续的时间              | ❌ |

缩放时，1.0 表示默认大小。要使实体更大，请增加值（例如，`1.2`）。要使实体更小，请减小值（例如，`0.8`）。

**注意：这可以定位玩家，因此请谨慎使用！**

**注意：如果您已使用首领配置中的 `scale` 设置缩放首领，则 duration 设置会将首领重置回 `1.0` 的默认大小，而不管配置中的初始 `scale` 值如何。**

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedEvent
    Actions:
    - action: SCALE
      Target:
        targetType: SELF
      scale: 0.3
      duration: 60
```

当生物被击中时，它将缩小到很小的大小。在 60 个刻度（3 秒）后，它将恢复到默认大小 (`1.0`)。

</div>

</details>

</div>

---

### SET_FACING

使首领朝向某个特定方向。主要与动画一起使用。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `vValue` | 首领应朝向哪个方向。X,Y,Z | ❌ |
| `RelativeVector` |     使用相对向量使首领朝向一个目标。     | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      vValue: 1,0,0
```

将使首领朝向东方。

</div>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: NEARBY_PLAYERS
          range: 20
```

将使首领朝向 20 个方块范围内的玩家。

</div>

</details>

</div>

---

### SET_MOB_AI

设置生物是否具有 AI。在 Minecraft 中，没有 AI 的生物不会移动也不会攻击。它们仍然可以被损坏，但对它们造成伤害不会导致它们被击退。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 设置首领是否具有 AI                 | ✅ |
| `duration` |               设置值设置的持续时间（刻度）               | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

设置首领在 2 秒（40 个刻度）内不具有 AI。

</div>

</details>

</div>

---

### SET_MOB_AWARE

设置生物是否知道。在 Minecraft 中，没有意识的生物不会移动到新的位置，也不会攻击。它们仍然可以被损坏，并且它们将被击退。

作为说明，如果生物在失去意识时已经在移动到某个位置，它将完成前往该位置，然后完全停止移动。

这意味着您可以使用不知情的生物移动到定义的位置，这与没有 AI 的生物不同。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   设置是否知道                   | ✅ |
| `duration` |               设置该值设置的持续时间（刻度）               | ❌ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

设置首领在 2 秒（40 个刻度）内不具有意识。

</div>

</details>

</div>

---

### SET_ON_FIRE

在持续时间内将实体点燃。

| 值 | 详细信息 | 强制 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息请参见此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                效果的持续时间（以刻度为单位）                 | ✅ |

<div align="center">

<details>

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

将距首领 10 个方块