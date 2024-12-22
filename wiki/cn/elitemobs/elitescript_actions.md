# 精英脚本动作

动作是脚本的核心。它们决定脚本的功能，并允许您设置自定义的时间间隔。

动作总是以您要执行的动作类型开始。不同的动作类型服务于不同的功能。此外，所有动作都有一个或多个目标。动作还可以有一个等待计时器，以确保事情以可自定义的延迟发生。最后，动作还可以有几个特定于动作类型的其他字段。

## 共享属性

| 值                  |                                   详细信息                                    |        特殊        |
|--------------------|:-------------------------------------------------------------------------:|:----------------:|
| `Target`           |          [更多信息在这里]($language$/elitemobs/elitescript_targets.md)           |        ❌         |
| `wait`             |                            设置在运行动作之前等待的时间量（刻度）                            |        ❌         |
| `repeatEvery`      |           设置动作每隔一定数量的刻度重复一次。任何设置了这个但没有使用次数的脚本，都会在怪物死亡时终止，以避免延迟。           |        ❌         |
| `times`            |                               设置一个动作将发生的次数                                | 需要 `repeatEvery` |
| `scripts`          |                              设置将在动作结束时运行的脚本                               |        ❌         |
| `onlyRunOneScript` |                         随机选择一个 `scripts` 并只运行那一个。                         |        ❌         |
| `offset`           | 此选项位于 `Target` 下。允许您偏移目标位置。偏移不适用于以 `ZONE_FULL` 或 `ZONE_BORDER` 为目标的区域的动作。 |        ❌         |
| `debug`            |                此选项位于脚本的动作部分下。当设置为 true 时，它将在动作所在的区域显示屏障图标。                |        ❌         |

## 动作类型

### ACTION_BAR_MESSAGE

为目标设置动作栏消息。

| 值        |                          详细信息                          | 必需 |                特殊                |
|----------|:------------------------------------------------------:|:--:|:--------------------------------:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |                ❌                 |
| `sValue` |                           消息                           | ✅  | 可以使用带 `&` 的 [颜色代码](#color_codes) |

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
      sValue: "&2你好世界！"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

将动作栏设置为向距离 Boss 10 个方块内的任何玩家说 Hello World。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

为目标添加 Boss 血条。

| 值          |                          详细信息                          | 必需 |                特殊                |
|------------|:------------------------------------------------------:|:--:|:--------------------------------:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |                ❌                 |
| `sValue`   |                           消息                           | ✅  | 可以使用带 `&` 的 [颜色代码](#color_codes) |
| `duration` |                  Boss 血条的持续时间（以刻度为单位）                  | ✅  |                ❌                 |

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
      sValue: "&2你好世界！"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

将 Boss 血条设置为向距离 Boss 10 个方块内的任何玩家说 Hello World，持续 1 秒。

</div>

</details>

</div>

---

### DAMAGE

这是您如何让实体以其他实体的身份造成伤害的方式。

_注意：这原生使用 EliteMobs 伤害系统！这意味着您将看到来自攻击的正常精英护甲减少。更多关于此的信息，请参阅乘数部分。_

| 值            |                          详细信息                          | 必需 |
|--------------|:------------------------------------------------------:|:--:|
| `Target`     | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `multiplier` |                          伤害乘数                          | ✅  |

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

将伤害设置为 Boss 对玩家造成的正常伤害的一半，并考虑伤害减少。

</div>

</details>

</div>

#### multiplier

设置 Boss 对效果的伤害乘数。

**重要提示**：为了使能力轻松且自动地缩放，伤害是通过让 Boss 击中玩家一次并将 Boss 的基础伤害乘以乘数来应用的。

这意味着 1.0 的乘数与 Boss 的正常攻击相同。2.0 的攻击强度是正常强度的 2 倍，而 0.5 的攻击强度是 50%。

---

### MAKE_INVULNERABLE

使目标无敌。

| 值              |                          详细信息                          | 必需 |
|----------------|:------------------------------------------------------:|:--:|
| `Target`       | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `invulnerable` |                      设置 Boss 是否无敌                      | ✅  |
| `duration`     |                   设置无敌的持续时间（以刻度为单位）                    | ❌  |

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

使 Boss 无敌 60 个刻度（3 秒）。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

修改对 Boss 或 Boss 对玩家造成的伤害。这是一个特殊动作，有一些特殊要求。

| 值            | 详细信息  | 必需 |
|--------------|:-----:|:--:|
| `multiplier` | 伤害乘数。 | ✅  |

此动作是特殊的，必须在具有伤害事件事件侦听器的脚本中。以下是有效的伤害事件：`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`
，用于减少对 Boss 造成的伤害，以及 `PlayerDamagedByEliteMobEvent`，用于减少对玩家造成的伤害。

强烈建议您学习 `hasTag` 条件如何工作，以便最好地使用此动作。如果使用得当，可以使 Boss 暂时抵抗或对伤害变得更弱，并且这可以与玩家增益、Boss
位置或许多其他因素相关联。

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

将玩家对 Boss 造成的伤害增加 2 倍，但前提是玩家拥有一个名为“CoolPlayer”的标签

</div>

</details>

</div>

---

### MESSAGE

向目标发送消息。

| 值        |                          详细信息                          | 必需 |                特殊                |
|----------|:------------------------------------------------------:|:--:|:--------------------------------:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |                ❌                 |
| `sValue` |                           消息                           | ✅  | 可以使用带 `&` 的 [颜色代码](#color_codes) |

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
      sValue: "&2你好世界！"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

将向距离 Boss 10 个方块内的所有玩家发送聊天消息。

</div>

</details>

</div>

---

### NAVIGATE

使 Boss 导航（行走）到指定的目标。

| 值             |                          详细信息                          | 必需 | 特殊 |
|---------------|:------------------------------------------------------:|:--:|:--:|
| `Target`      | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  | ❌  |
| `FinalTarget` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  | ❌  |
| `velocity`    |          设置 Boss 的导航速度。`1.0` 是 Boss 在配置中设置的值。          | ❌  | ❌  |
| `bValue`      |        设置如果导航失败是否应该强制将 Boss 传送至 `FinalTarget`。         | ❌  | ❌  |
| `duration`    |      Boss 在放弃之前应该尝试导航多长时间。以刻度为单位设置。默认值为 100 个刻度。       | ✅  | ❌  |

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

使 Boss 导航到玩家击中 Boss 时所在的位置。

</div>

</details>

</div>

---

### PLACE_BLOCK

在目标位置放置一个方块，持续一段时间。

| 值          |                                              详细信息                                               | 必需 |
|------------|:-----------------------------------------------------------------------------------------------:|:--:|
| `Target`   |                     [更多信息在这里]($language$/elitemobs/elitescript_targets.md)                      | ✅  |
| `material` | 方块的 [材质](#material)，[完整列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅  |
| `duration` |                                          效果持续时间，以刻度为单位                                          | ❌  |

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

在 Boss 周围放置一个玻璃穹顶，持续 6 秒。

_注意：如果未定义持续时间，则方块放置是永久性的。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

使用 Model Engine 为自定义模型播放指定的动画。需要在运行动画的目标上安装 Model Engine 和有效的自定义模型。

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                        设置动画的名称                         | ✅  |

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

设置 Boss 播放 fortnite_dance 动画。要求服务器具有 Model Engine、Boss 具有自定义伪装，并且自定义伪装具有名为“fortnite\_dance”的动画。

</div>

</details>

</div>

---

### PLAY_SOUND

播放游戏内的声音。

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                      设置要播放的声音的名称                       | ✅  |
| `pitch`  |                      设置要播放的声音的音调                       | ❌  |
| `volume` |                      设置要播放的声音的音量                       | ❌  |

[这是一个所有 Minecraft 声音的方便列表！](https://www.digminecraft.com/lists/sound_list_pc.php)请记住，这也可以播放来自资源包的自定义声音。
当动作以一个区域为目标时，该动作将为该区域中的每个方块播放一个声音。这会使声音比正常情况下大得多，因此如果以区域为目标，请考虑降低音量。

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

在 Boss 位置播放 Minecraft 钟的共鸣声音

</div>

</details>

</div>

---

### POTION_EFFECT

将特定的药水效果应用于目标。

| 值                  |                                              详细信息                                               | 必需 |
|--------------------|:-----------------------------------------------------------------------------------------------:|:--:|
| `Target`           |                     [更多信息在这里]($language$/elitemobs/elitescript_targets.md)                      | ✅  |
| `potionEffectType` | 效果类型，[有效列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅  |
| `amplifier`        |                                         药水效果级别（从 0 开始）                                          | ✅  |
| `duration`         |                                           效果持续时间（刻度）                                            | ✅  |

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

这将使距离 Boss 10 个方块内的任何玩家漂浮 2 秒（40 个刻度）。

</div>

</details>

</div>

---

### PUSH

按设定的向量推动目标。

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `vValue` |                      设置将应用的向量的速度                       | ✅  |

*注意：此动作也接受相对向量。了解有关如何使用这些向量的更多信息[此处]($language$/elitemobs/elitescript_relative_vectors.md)。*

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

这将使用 0.3 的力将距离 Boss 10 个方块内的所有玩家推入空中。此动作将每 0.5 秒（10 个刻度）重复 10 次。换句话说，这将使此效果持续
5 秒（10 次 x 10 个刻度 = 100 个刻度）。

这将使玩家看起来像在跳跃。

</div>

</details>

</div>

#### vector

向量由 `vValue: x,y,z` 定义。例如，如果你想向上推动目标，你可以这样做 `vValue: 0,0.3,0`。

---

### RUN_COMMAND_AS_CONSOLE

以控制台身份运行命令。

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                        将要运行的命令                         | ✅  |

**注意：有占位符可用！查看 RUN_COMMAND_AS_PLAYER，它们是相同的**

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

使控制台广播消息“你好 $bossName 我的名字是 $playerName。你的等级是多少？$bossName 我的等级是 $bossLevel”

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

`
以 `player` 身份运行命令。要求目标是玩家。

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                        将要运行的命令                         | ✅  |

**注意：RUN_COMMAND_AS_PLAYER 和 RUN_COMMAND_AS_CONSOLE 使用以下占位符：**

| 占位符           |    详细信息     |   特殊    |
|---------------|:-----------:|:-------:|
| `$playerName` |   玩家的显示名称   | 目标必须是玩家 |
| `$playerX`    |  玩家的 X 位置   | 目标必须是玩家 |
| `$playerY`    |  玩家的 Y 位置   | 目标必须是玩家 |
| `$playerZ`    |  玩家的 Z 位置   | 目标必须是玩家 |
| `$bossName`   |   玩家的显示名称   | 目标必须是玩家 |
| `$bossX`      | Boss 的 X 位置 |    ❌    |
| `$bossY`      | Boss 的 Y 位置 |    ❌    |
| `$bossZ`      | Boss 的 Z 位置 |    ❌    |
| `$bossLevel`  |  Boss 的等级   |    ❌    |

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
```

        targetType: ZONE_BORDER
      particles:
      - amount: 1
        speed: 0.1
        x: 0.1
        y: 0.1
        z: 0.1
        particle: FLAME
      - amount: 10
        speed: 0.5
        particle: SMOKE_NORMAL
      - amount: 0
        speed: 0.2
        x: 0.2
        y: 0.2
        z: 0.2
        particle: REDSTONE
        red: 200
        blue: 0
        green: 0

```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

This will spawn a Flame particle, a Smoke particle and a Redstone particle in the border of the zone of the player being attacked.

The flame particle will be spawned at a speed of 0.1, and the velocity offset will be of 0.1 for all axis. The amount of particles will be 1.

The smoke particle will be spawned at a speed of 0.5, with a particle amount of 10, without velocity offset.

The redstone particle will be spawned with a speed of 0.2, the velocity offset is set to 0.2 for all axis, amount will be set to 0, so the location offset will be set as the particle's velocity, and the redstone particle color will be set to red.

</div>

</details>

</div>

---

### SUMMON_ENTITY

Summons an entity.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `entityType` |                      Sets entity type                      | ✅ |
| `duration` |                  Sets the duration of the entity                   | ❌ |
| `scripts` | Sets the scripts that will be applied to the summoned entity.  | ❌ |
| `onlyRunOneScript` | Picks one of the `scripts` at random and only runs that one. | ❌ |

[This is a full list of all valid entity types](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html).

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      Target:
        targetType: SELF
        offset: 0,1,0
      entityType: ZOMBIE
      duration: 600
      scripts:
      - ExampleSummonScript
  ExampleSummonScript:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: SELF
      sValue: "&cI am a zombie"
```

<div align="center">

![elitescript_actions_summon.jpg](../../../img/wiki/elitescript_actions_summon.jpg)

</div>

Summons a zombie 1 block above the boss that will despawn after 30 seconds (600 ticks).

When summoned the zombie will run the ExampleSummonScript, which will make it send a chat message saying "I am a
zombie".

</div>

</details>

</div>

---

### TELEPORT

Teleports the target(s) to the specified location.

| Values        |                            Details                            | Mandatory |
|---------------|:-------------------------------------------------------------:|:---------:|
| `Target`      | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `FinalTarget` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 5
```

Will teleport the boss to a random player within a range of 5 blocks.

</div>

</details>

</div>

---

### TRIGGER_EVENT

Triggers another event in the same script.

| Values   |                         Details                         | Mandatory |
|----------|:-------------------------------------------------------:|:---------:|
| `sValue` | The event that will be triggered, the name of the event |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: SELF
      sValue: "&cI am hit!"
    - action: TRIGGER_EVENT
      sValue: "SecondEvent"
    - action: MESSAGE
      Target:
        targetType: SELF
      sValue: "&cI am still hit!"
  SecondEvent:
    Actions:
    - action: MESSAGE
      Target:
        targetType: SELF
      sValue: "&cI am a second event!"
```

When the boss gets hit, it will first send the message "I am hit!", then it will trigger the SecondEvent, which will
make the boss send the message "I am a second event!", then the boss will finish the first event and send the message "I
am still hit!".

</div>

</details>

</div>

---

### Color codes

You can use Minecraft color codes in text fields to make them more visually appealing.
For example `&a` is green, `&b` is aqua, etc.

To find a list of all color codes visit [this wiki](https://minecraft.fandom.com/wiki/Formatting_codes#Color_codes).
Please note that it is required to use an `&` instead of `§` when writing a script.

---

### Material

All [Materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) are supported, and are required to be
written exactly as in that link. Some examples include:

* `STONE`
* `GRASS_BLOCK`
* `DIRT`
* `GLASS`

Make sure that when inputting material, that you do so correctly as they are case sensitive.

```yaml
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

这将在攻击 Boss 的玩家周围生成一个由火焰和烟雾粒子组成的圆柱体。

</div>

</details>

</div>

#### 移动粒子：

可以为粒子设置特定的速度，其工作方式与 Spigot API 相同。这允许脚本编写者设置粒子以特定速度朝特定方向移动。无法使粒子在途中改变方向。此效果用于火焰喷射器附魔和
Boss 能力。

要移动粒子，请设置 `amount: 0`。这将向 Minecraft 发出信号，表示 `x`、`y` 和 `z` 值实际上是一个向量。此向量设置粒子将朝哪个方向移动。

假设您希望 `FLAME` 粒子向上移动。为此，您需要一个正的 `y` 值，而不需要其他任何值。最后，您需要将速度设置为您希望的速度。这是一个完整的示例：

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true  
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3  
      repeatEvery: 10
```

这将在 Boss 位置生成一个会向上移动的火焰粒子。

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

从 EliteMobs 自定义 Boss 中召唤增援。

| 值          |                          详细信息                          | 必需 |
|------------|:------------------------------------------------------:|:--:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue`   |                   设置自定义 Boss 增援的文件名                    | ✅  |
| `duration` |                   设置增援的持续时间（以刻度为单位）                    | ❌  |

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
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: your_boss_file.yml
```

在 Boss 位置生成文件名为“your_boss_file.yml”的增援。

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA 请用正确的信息填写此部分，

| 值        |                          详细信息                          | 必需 |
|----------|:------------------------------------------------------:|:--:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `sValue` |                           设置                           | ✅  |

*注意：此动作也接受相对向量。了解有关如何使用这些向量的更多信息[此处]($language$/elitemobs/elitescript_relative_vectors.md)。*

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
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
```

设置 Boss 为 。

</div>

</details>

</div>

---

### TAG

为 Boss 或玩家添加标签。标签只是字符串或单词，脚本编写者可以定义它们。这些仅用于运行条件检查，除了在脚本中使用的用途之外，没有直接的游戏效果。

| 值          |                          详细信息                          | 必需 |
|------------|:------------------------------------------------------:|:--:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `tags`     |                          设置标签                          | ✅  |
| `duration` |                   设置标签的持续时间（以刻度为单位）                    | ❌  |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

用字符串“very_sus”标记 Boss，稍后可以通过脚本条件进行检查。

**重要提示：**只能标记玩家和精英怪物。

</div>

</details>

</div>

---

### TELEPORT

将目标传送到定义的位置。

| 值             |                                   详细信息                                    | 必需 |
|---------------|:-------------------------------------------------------------------------:|:--:|
| `Target`      |   设置 _谁_ 将被传送。[一般目标信息在这里！]($language$/elitemobs/elitescript_targets.md)   | ✅  |
| `FinalTarget` | 设置 _他们_ 将被传送到哪里。[一般目标信息在这里！]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `location`    |                                   传送位置                                    | ✅  |

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
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

这将把距离 Boss 10 个方块内的所有玩家传送到 Boss 的生成位置。

</div>

</details>

</div>

#### location

设置玩家将被传送到的位置。格式是标准的 EliteMobs `world_name,x,y,z,pitch,yaw`。

示例

```yaml
location: world,0,64,0,0,0
```

这有一些特殊值：

- 如果世界名称设置为 `same_as_boss`，它会将世界名称替换为 Boss 当前所在的世界的名称：

```yaml
location: same_as_boss,0,64,0,0,0
```

- 如果只有三个与 x、y 和 z 匹配的值，则传送将相对于 Boss 位置完成。如果 Boss 是区域 Boss，则位置将相对于 Boss 的生成点。

---

### TITLE_MESSAGE

为目标设置动作栏消息。

| 值          |                          详细信息                          | 必需 |                特殊                | 默认值 |
|------------|:------------------------------------------------------:|:--:|:--------------------------------:|:---:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |                ❌                 |  ❌  |
| `title`    |                         设置标题消息                         | ✅  | 可以使用带 `&` 的 [颜色代码](#color_codes) |  ❌  |
| `subtitle` |                        设置副标题消息                         | ✅  | 可以使用带 `&` 的 [颜色代码](#color_codes) |  ❌  |
| `duration` |                   设置消息的持续时间（以刻度为单位）                    | ✅  |                ❌                 | `0` |
| `fadeIn`   |                     设置淡入时间（以刻度为单位）                     | ❌  |                ❌                 | `0` |
| `fadeOut`  |                     设置淡出时间（以刻度为单位）                     | ❌  |                ❌                 | `0` |

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
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2你好世界！"
      subtitle: "&2我是副标题！"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

将标题消息设置为向距离 Boss 10 个方块内的所有玩家显示标题“&2你好世界！”和副标题“&2我是副标题！”。

消息将在屏幕上停留 8 秒（120 + 20 + 20 = 160 个刻度），包括淡入和淡出动画。

</div>

</details>

</div>

---

### UNTAG

从 Boss 中删除标签。查看 `TAG` 以了解标签的工作原理。

| 值          |                          详细信息                          | 必需 |
|------------|:------------------------------------------------------:|:--:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `tags`     |                          设置标签                          | ✅  |
| `duration` |                  设置删除标签的持续时间（以刻度为单位）                   | ❌  |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  Example2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

从 Boss 中删除标签“very_sus”，稍后可以通过脚本条件进行检查。

</div>

</details>

</div>

---

### VISUAL_FREEZE

为玩家提供冻结视觉效果并造成相关的伤害。如果您不希望效果立即消失，则应将此效果与重复脚本组合使用。

| 值          |                          详细信息                          | 必需 |
|------------|:------------------------------------------------------:|:--:|
| `Target`   | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅  |
| `duration` |                     效果的持续时间，以刻度为单位                     | ✅  |

<div align="center">
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
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE 目前无法正常工作，因此无法截取屏幕截图

</div>

为距离 Boss 10 个方块内的所有玩家提供冻结视觉效果，持续 3 秒（60 个刻度）。

</div>

</details>

</div>

---

# 多重动作

有时，您可能希望在发生事件时同时执行多个动作，例如发送多个消息或按顺序执行不同的动作。这很容易做到！让我们在示例中添加一个药水效果动作：

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: 我正在向所有在线玩家发送消息！
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: 我正在向击中 Boss 的玩家发送消息！
```

</div>

</details>

</div>
