# 精英脚本动作

动作是脚本的核心。它们决定了脚本的功能，并允许你设置自定义间隔。

动作总是以你要执行的动作类型开始。不同的动作类型服务于不同的功能。此外，所有动作都有一个或多个目标。动作还可以有一个等待计时器，以确保事情在可定制的延迟下发生。最后，动作还可以有其他几个特定于动作类型的字段。

## 共享属性

| 值                  |                                                                                 详情                                                                                  | 特殊 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [更多信息]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      设置运行动作之前的等待时间（刻）                                                      | ❌ |
| `repeatEvery`      |        设置动作每隔一定时间重复一次。任何设置了此选项但不使用次数的脚本将在怪物死亡时终止，以避免延迟。         | ❌ |
| `times`            |                                                            设置动作将发生的次数                                                            | 需要 `repeatEvery` |
| `scripts`          |                                                         设置将在动作结束时运行的脚本                                                          | ❌ |
| `onlyRunOneScript` |                                                       随机选择一个 `scripts` 并只运行该脚本。                                                       | ❌ |
| `offset`           | 此选项位于 `Target` 下。允许你偏移目标位置。偏移对目标区域为 `ZONE_FULL` 或 `ZONE_BORDER` 的动作无效。 | ❌ |

## 动作类型

### ACTION_BAR_MESSAGE

设置目标的动作栏消息。

| 值       |                            详情                            | 必填 | 特殊 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |

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

这会将所有距离 Boss 10 个方块内的玩家的动作栏设置为“你好，世界”。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

为目标添加一个 Boss 血条。

| 值        |                            详情                            | 必填 |                    特殊                    |
|-----------|:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target`  | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue`  |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |
| `duration` |               Boss 血条的持续时间（刻）               | ✅ |                      ❌                       |

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

这会为所有距离 Boss 10 个方块内的玩家设置一个 Boss 血条，显示“你好，世界”，持续时间为 1 秒。

</div>

</details>

</div>

---

### DAMAGE

这就是你如何让实体像其他实体一样造成伤害。

_注意：这本身使用的是 EliteMobs 伤害系统！这意味着你将会看到来自攻击的正常精英护甲减免。更多信息请参见倍率部分。_

| 值           |                            详情                            | 必填 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       伤害倍率                       | ✅ |

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

将伤害设置为 Boss 对玩家造成的伤害的一半，并考虑到伤害减免。

</div>

</details>

</div>

#### multiplier

设置 Boss 的伤害倍率。

**重要提示**：为了使能力能够轻松、自动地扩展，伤害的应用方式是让 Boss 攻击玩家一次，并将 Boss 的基础伤害乘以倍率。

这意味着 1.0 的倍率与 Boss 的一次普通攻击相同。2.0 是 2 倍于正常强度的攻击，0.5 是 50% 的强度。

---

### MAKE_INVULNERABLE

使目标无敌。

| 值           |                            详情                            | 必填 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               设置 Boss 是否无敌                | ✅ |
| `duration`   |       设置无敌的持续时间（刻）        | ❌ |

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
      duration: 60
```

使 Boss 无敌 60 刻（3 秒）。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

修改对 Boss 造成的伤害或 Boss 对玩家造成的伤害。这是一个特殊动作，有一些特殊要求。

| 值           | 详情 | 必填 |
|-------------| :-: | :-: |
| `multiplier` | 伤害倍率。 | ✅ |

这个动作很特殊，它必须位于一个脚本中，该脚本具有对伤害事件的事件监听器。以下是可以减少对 Boss 造成的伤害的有效伤害事件：`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`，以及可以减少对玩家造成的伤害的事件 `PlayerDamagedByEliteMobEvent`。

强烈建议你学习 `hasTag` 条件的工作原理，以便最好地使用此动作。如果使用得当，可以让 Boss 暂时抵抗伤害或更容易受到伤害，这可以与玩家增益、Boss 位置或许多其他因素相关联。

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

将玩家对 Boss 造成的伤害提高 2 倍，但前提是玩家拥有名为“CoolPlayer”的标签

</div>

</details>

</div>

---

### MESSAGE

向目标发送消息。

| 值       |                            详情                            | 必填 | 特殊 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |

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

这将向所有距离 Boss 10 个方块内的玩家发送一条聊天消息。

</div>

</details>

</div>

---

### NAVIGATE

使 Boss 移动（行走）到指定目标。

| 值          |                            详情                            | 必填 | 特殊 |
|-------------|:-------------------------------------------------------------:| :-: | :-: |
| `Target`     | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity`   | 设置 Boss 的移动速度。`1.0` 为 Boss 在配置中设置的值。 | ❌ | ❌ |
| `bValue`     | 设置如果移动失败，Boss 是否应该被强制传送 `FinalTarget`。 | ❌ | ❌ |
| `duration`   | Boss 应该尝试移动多长时间才会放弃。以刻为单位设置。默认值为 100 刻。 | ✅ | ❌ |

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

这将使 Boss 移动到玩家攻击它时所站的位置。

</div>

</details>

</div>

---

### PLACE_BLOCK

在目标位置放置一个方块，持续一段时间。

| 值       |                                                         详情                                                         | 必填 |
|----------|:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [更多信息]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | 方块的 [材质](#material)，[完整列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              效果持续时间（刻）                                               | ❌ |

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

在 Boss 周围放置一个持续 6 秒的玻璃圆顶。

_注意：如果没有定义持续时间，则方块放置是永久性的。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

使用模型引擎为自定义模型播放指定的动画。需要模型引擎和一个有效的自定义模型，该模型位于运行动画的目标上。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
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

设置 Boss 播放 fortnite_dance 动画。要求服务器具有模型引擎，Boss 具有自定义伪装，并且自定义伪装具有名为“fortnite_dance”的动画。

</div>

</details>

</div>

---

### PLAY_SOUND

播放游戏内的声音。

| 值        |                            详情                            | 必填 |
|-----------|:-------------------------------------------------------------:|:---------:|
| `Target`  | [更多信息]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue`  |            设置要播放的声音的名称            |     ✅     |
| `pitch`   |           设置要播放的声音的音调            |     ❌     |
| `volume`  |           设置要播放的声音的音量           |     ❌     |

[这是一个所有 Minecraft 声音的便捷列表！](https://www.digminecraft.com/lists/sound_list_pc.php) 请记住，这也可以播放来自资源包的自定义声音。
当动作的目标区域是一个区域时，该动作将为该区域中的每个方块播放一个声音。这可能会使声音比平时大得多，因此如果目标区域是一个区域，请考虑降低音量。

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

在 Boss 所在地播放 Minecraft 铃铛的共鸣声

</div>

</details>

</div>

---

### POTION_EFFECT

对目标应用特定的药水效果。

| 值              |                                                       详情                                                       | 必填 |
|-----------------|:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`        |                            [更多信息]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 药水效果类型，[有效列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier`     |                                          药水效果等级（从 0 开始）                                          | ✅ |
| `duration`      |                                           效果持续时间（刻）                                            | ✅ |

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

这将使所有距离 Boss 10 个方块内的玩家漂浮 2 秒（40 刻）。

</div>

</details>

</div>

---

### PUSH

将目标推开一个设定的向量。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       设置将要应用的速度向量        | ✅ |

*注意：此动作也接受相对向量。[在此]($language$/elitemobs/elitescript_relative_vectors.md) 了解更多关于如何使用它们的信息。*

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

这将使用 0.3 的力将所有距离 Boss 10 个方块内的玩家推向空中。此动作将每 0.5 秒（10 刻）重复 10 次。换句话说，这将使此效果持续 5 秒（10 次 x 10 刻 = 100 刻）。

这将使玩家看起来像是在跳跃。

</div>

</details>

</div>

#### vector

向量由 `vValue: x,y,z` 定义。例如，如果你想将目标向上推，你可以使用 `vValue: 0,0.3,0`。

---

### RUN_COMMAND_AS_CONSOLE

以控制台身份运行命令。

| 值       |                             详情                             | 必填 |
|----------|:---------------------------------------------------------------:| :-: |
| `Target` |  [更多信息]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    将要运行的命令                     | ✅ |

**注意：这里可以使用占位符！请查看 RUN_COMMAND_AS_PLAYER，它们是相同的**

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
      sValue: say 你好，$bossName，我的名字是 $playerName。你的等级是多少？$bossName，我的等级是 $bossLevel。
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

使控制台广播消息“你好，$bossName，我的名字是 $playerName。你的等级是多少？$bossName，我的等级是 $bossLevel”。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
以 `player` 身份运行命令。要求目标是玩家。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   将要运行的命令                    | ✅ |

**注意：RUN_COMMAND_AS_PLAYER 和 RUN_COMMAND_AS_CONSOLE 使用以下占位符：**

| 占位符 | 详情 | 特殊 |
| --- | :-: | :-: |
| `$playerName` | 玩家的显示名称 | 目标必须是玩家 |
| `$playerX` | 玩家的 X 坐标 | 目标必须是玩家 |
| `$playerY` | 玩家的 Y 坐标 | 目标必须是玩家 |
| `$playerZ` | 玩家的 Z 坐标 | 目标必须是玩家 |
| `$bossName` | 玩家的显示名称 | 目标必须是玩家 |
| `$bossX` | Boss 的 X 坐标 | ❌ |
| `$bossY` | Boss 的 Y 坐标 | ❌ |
| `$bossZ` | Boss 的 Z 坐标 | ❌ |
| `$bossLevel` | Boss 的等级 | ❌ |

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
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say 你好，$bossName，我的名字是 $playerName。
```

<div align="center">



# 精英脚本动作

动作是脚本的核心。它们决定了脚本的功能，并允许你设置自定义间隔。

动作总是以你要执行的动作类型开始。不同的动作类型服务于不同的功能。此外，所有动作都有一个或多个目标。动作还可以有一个等待计时器，以确保事情在可定制的延迟下发生。最后，动作还可以有其他几个特定于动作类型的字段。

## 共享属性

| 值                  |                                                                                 详情                                                                                  | 特殊 |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [更多信息]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      设置运行动作之前的等待时间（刻）                                                      | ❌ |
| `repeatEvery`      |        设置动作每隔一定时间重复一次。任何设置了此选项但不使用次数的脚本将在怪物死亡时终止，以避免延迟。         | ❌ |
| `times`            |                                                            设置动作将发生的次数                                                            | 需要 `repeatEvery` |
| `scripts`          |                                                         设置将在动作结束时运行的脚本                                                          | ❌ |
| `onlyRunOneScript` |                                                       随机选择一个 `scripts` 并只运行该脚本。                                                       | ❌ |
| `offset`           | 此选项位于 `Target` 下。允许你偏移目标位置。偏移对目标区域为 `ZONE_FULL` 或 `ZONE_BORDER` 的动作无效。 | ❌ |

## 动作类型

### ACTION_BAR_MESSAGE

设置目标的动作栏消息。

| 值       |                            详情                            | 必填 | 特殊 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |

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

这会将所有距离 Boss 10 个方块内的玩家的动作栏设置为“你好，世界”。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

为目标添加一个 Boss 血条。

| 值        |                            详情                            | 必填 |                    特殊                    |
|-----------|:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target`  | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue`  |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |
| `duration` |               Boss 血条的持续时间（刻）               | ✅ |                      ❌                       |

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

这会为所有距离 Boss 10 个方块内的玩家设置一个 Boss 血条，显示“你好，世界”，持续时间为 1 秒。

</div>

</details>

</div>

---

### DAMAGE

这就是你如何让实体像其他实体一样造成伤害。

_注意：这本身使用的是 EliteMobs 伤害系统！这意味着你将会看到来自攻击的正常精英护甲减免。更多信息请参见倍率部分。_

| 值           |                            详情                            | 必填 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       伤害倍率                       | ✅ |

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

将伤害设置为 Boss 对玩家造成的伤害的一半，并考虑到伤害减免。

</div>

</details>

</div>

#### multiplier

设置 Boss 的伤害倍率。

**重要提示**：为了使能力能够轻松、自动地扩展，伤害的应用方式是让 Boss 攻击玩家一次，并将 Boss 的基础伤害乘以倍率。

这意味着 1.0 的倍率与 Boss 的一次普通攻击相同。2.0 是 2 倍于正常强度的攻击，0.5 是 50% 的强度。

---

### MAKE_INVULNERABLE

使目标无敌。

| 值           |                            详情                            | 必填 |
|-------------|:-------------------------------------------------------------:| :-: |
| `Target`    | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               设置 Boss 是否无敌                | ✅ |
| `duration`   |       设置无敌的持续时间（刻）        | ❌ |

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
      duration: 60
```

使 Boss 无敌 60 刻（3 秒）。

</div>

</details>

</div>

---

### MODIFY_DAMAGE

修改对 Boss 造成的伤害或 Boss 对玩家造成的伤害。这是一个特殊动作，有一些特殊要求。

| 值           | 详情 | 必填 |
|-------------| :-: | :-: |
| `multiplier` | 伤害倍率。 | ✅ |

这个动作很特殊，它必须位于一个脚本中，该脚本具有对伤害事件的事件监听器。以下是可以减少对 Boss 造成的伤害的有效伤害事件：`EliteMobDamagedByEliteMobEvent`、`EliteMobDamagedByPlayerEvent`、`EliteMobDamagedEvent`，以及可以减少对玩家造成的伤害的事件 `PlayerDamagedByEliteMobEvent`。

强烈建议你学习 `hasTag` 条件的工作原理，以便最好地使用此动作。如果使用得当，可以让 Boss 暂时抵抗伤害或更容易受到伤害，这可以与玩家增益、Boss 位置或许多其他因素相关联。

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

将玩家对 Boss 造成的伤害提高 2 倍，但前提是玩家拥有名为“CoolPlayer”的标签

</div>

</details>

</div>

---

### MESSAGE

向目标发送消息。

| 值       |                            详情                            | 必填 | 特殊 |
|----------|:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            消息                            | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) |

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

这将向所有距离 Boss 10 个方块内的玩家发送一条聊天消息。

</div>

</details>

</div>

---

### NAVIGATE

使 Boss 移动（行走）到指定目标。

| 值          |                            详情                            | 必填 | 特殊 |
|-------------|:-------------------------------------------------------------:| :-: | :-: |
| `Target`     | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity`   | 设置 Boss 的移动速度。`1.0` 为 Boss 在配置中设置的值。 | ❌ | ❌ |
| `bValue`     | 设置如果移动失败，Boss 是否应该被强制传送 `FinalTarget`。 | ❌ | ❌ |
| `duration`   | Boss 应该尝试移动多长时间才会放弃。以刻为单位设置。默认值为 100 刻。 | ✅ | ❌ |

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

这将使 Boss 移动到玩家攻击它时所站的位置。

</div>

</details>

</div>

---

### PLACE_BLOCK

在目标位置放置一个方块，持续一段时间。

| 值       |                                                         详情                                                         | 必填 |
|----------|:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [更多信息]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | 方块的 [材质](#material)，[完整列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              效果持续时间（刻）                                               | ❌ |

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

在 Boss 周围放置一个持续 6 秒的玻璃圆顶。

_注意：如果没有定义持续时间，则方块放置是永久性的。_

</div>

</details>

</div>

---

### PLAY_ANIMATION

使用模型引擎为自定义模型播放指定的动画。需要模型引擎和一个有效的自定义模型，该模型位于运行动画的目标上。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
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

设置 Boss 播放 fortnite_dance 动画。要求服务器具有模型引擎，Boss 具有自定义伪装，并且自定义伪装具有名为“fortnite_dance”的动画。

</div>

</details>

</div>

---

### PLAY_SOUND

播放游戏内的声音。

| 值        |                            详情                            | 必填 |
|-----------|:-------------------------------------------------------------:|:---------:|
| `Target`  | [更多信息]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue`  |            设置要播放的声音的名称            |     ✅     |
| `pitch`   |           设置要播放的声音的音调            |     ❌     |
| `volume`  |           设置要播放的声音的音量           |     ❌     |

[这是一个所有 Minecraft 声音的便捷列表！](https://www.digminecraft.com/lists/sound_list_pc.php) 请记住，这也可以播放来自资源包的自定义声音。
当动作的目标区域是一个区域时，该动作将为该区域中的每个方块播放一个声音。这可能会使声音比平时大得多，因此如果目标区域是一个区域，请考虑降低音量。

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

在 Boss 所在地播放 Minecraft 铃铛的共鸣声

</div>

</details>

</div>

---

### POTION_EFFECT

对目标应用特定的药水效果。

| 值              |                                                       详情                                                       | 必填 |
|-----------------|:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`        |                            [更多信息]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | 药水效果类型，[有效列表在此](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier`     |                                          药水效果等级（从 0 开始）                                          | ✅ |
| `duration`      |                                           效果持续时间（刻）                                            | ✅ |

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

这将使所有距离 Boss 10 个方块内的玩家漂浮 2 秒（40 刻）。

</div>

</details>

</div>

---

### PUSH

将目标推开一个设定的向量。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       设置将要应用的速度向量        | ✅ |

*注意：此动作也接受相对向量。[在此]($language$/elitemobs/elitescript_relative_vectors.md) 了解更多关于如何使用它们的信息。*

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

这将使用 0.3 的力将所有距离 Boss 10 个方块内的玩家推向空中。此动作将每 0.5 秒（10 刻）重复 10 次。换句话说，这将使此效果持续 5 秒（10 次 x 10 刻 = 100 刻）。

这将使玩家看起来像是在跳跃。

</div>

</details>

</div>

#### vector

向量由 `vValue: x,y,z` 定义。例如，如果你想将目标向上推，你可以使用 `vValue: 0,0.3,0`。

---

### RUN_COMMAND_AS_CONSOLE

以控制台身份运行命令。

| 值       |                             详情                             | 必填 |
|----------|:---------------------------------------------------------------:| :-: |
| `Target` |  [更多信息]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    将要运行的命令                     | ✅ |

**注意：这里可以使用占位符！请查看 RUN_COMMAND_AS_PLAYER，它们是相同的**

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
      sValue: say 你好，$bossName，我的名字是 $playerName。你的等级是多少？$bossName，我的等级是 $bossLevel。
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

使控制台广播消息“你好，$bossName，我的名字是 $playerName。你的等级是多少？$bossName，我的等级是 $bossLevel”。

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
以 `player` 身份运行命令。要求目标是玩家。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   将要运行的命令                    | ✅ |

**注意：RUN_COMMAND_AS_PLAYER 和 RUN_COMMAND_AS_CONSOLE 使用以下占位符：**

| 占位符 | 详情 | 特殊 |
| --- | :-: | :-: |
| `$playerName` | 玩家的显示名称 | 目标必须是玩家 |
| `$playerX` | 玩家的 X 坐标 | 目标必须是玩家 |
| `$playerY` | 玩家的 Y 坐标 | 目标必须是玩家 |
| `$playerZ` | 玩家的 Z 坐标 | 目标必须是玩家 |
| `$bossName` | 玩家的显示名称 | 目标必须是玩家 |
| `$bossX` | Boss 的 X 坐标 | ❌ |
| `$bossY` | Boss 的 Y 坐标 | ❌ |
| `$bossZ` | Boss 的 Z 坐标 | ❌ |
| `$bossLevel` | Boss 的等级 | ❌ |

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
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say 你好，$bossName，我的名字是 $playerName。
```

<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

使玩家运行带有“你好，$bossName，我的名字是 $playerName。”的 say 命令，这意味着他们只是说“你好，$bossName，我的名字是 $playerName。”。

</div>

</details>

</div>

---

### RUN_SCRIPT

这将简单地运行在 `scripts` 中定义的脚本。任何动作都可以做到这一点，这个动作的存在仅仅是为了方便你在只想这样做的时候使用。

| 值                  |                            详情                            | 必填 |
|--------------------|:-------------------------------------------------------------:| :-: |
| `Target`           | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts`          |                   将要运行的脚本                    | ✅ |
| `onlyRunOneScript` |         仅运行列表中的一个脚本。           | ❌ |

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
      sValue: "&c酷炫的 Boss!: &f我抓住你了！"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

当一个精英受到伤害时，运行 RUN_SCRIPT，它会运行 Example1 和 Example2 脚本。

Example1 脚本将对距离 Boss 10 个方块内的所有玩家造成伤害。
<br>Example2 脚本将向距离 Boss 10 个方块内的所有玩家发送消息“&c酷炫的 Boss!: &f我抓住你了！”。

</div>

</details>

</div>

---

### SET_MOB_AI

设置生物是否具有 AI。在 Minecraft 中，没有 AI 的生物不会移动，也不会攻击。它们仍然可以受到伤害，但攻击它们不会导致它们被击退。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 设置 Boss 是否具有 AI                  | ✅ |
| `duration` |               设置值的持续时间（刻）               | ❌ |

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

设置 Boss 在 2 秒（40 刻）内没有 AI。

</div>

</details>

</div>

---

### SET_MOB_AWARE

设置生物是否处于感知状态。在 Minecraft 中，未处于感知状态的生物不会移动到新位置，也不会攻击。它们仍然可以受到伤害，并且会被击退。

需要注意的是，如果生物在失去感知时已经在移动到某个位置，它会在完全停止并停止移动之前完成到该位置的移动。

这意味着你可以使用无感知生物移动到指定的位置，这与没有 AI 的生物不同。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   设置是否处于感知状态                   | ✅ |
| `duration` |               设置值的持续时间（刻）               | ❌ |

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

设置 Boss 在 2 秒（40 刻）内不处于感知状态。

</div>

</details>

</div>

---

### SET_ON_FIRE

使实体着火一段时间。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 效果持续时间（刻）                  | ✅ |

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

使距离 Boss 10 个方块内的所有玩家着火 3 秒（60 刻）。

</div>

</details>

</div>

---

### SET_TIME

设置目标所在世界的游戏内时间。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time`   |                         设置时间                         | ✅ |

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
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

当 Boss 受到攻击时，它将把 Boss 所在世界的时间设置为 10000 刻。

</div>

</details>

</div>

---

### SET_WEATHER

设置目标所在世界的天气一段时间。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     设置天气类型                     | ✅ |
| `duration` |           设置天气模式的持续时间            | ✅ |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

将 Boss 所在世界的天气设置为下雨/下雪，持续时间为下一分钟。

*注意：效果需要一段时间才能触发。*

</div>

</details>

</div>

#### weather

以下是有效的天气模式：

- `CLEAR` - 将天气设置为晴朗
- `PRECIPITATION` - 根据生物群落、位置高度和其他 Minecraft 因素，将天气设置为下雨/下雪。
- `THUNDER` - 将天气设置为雷暴

---

### SPAWN_FIREWORKS

生成烟花。

| 值              |                                                                                                            详情                                                                                                            | 必填 |
|-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`        |                                                                                 [更多信息]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue`        |                                                                                           设置烟花火箭的速度                                                                                           | ✅ |
| `flicker`      |                                                                                          设置烟花粒子是否会闪烁                                                                                          | ❌ |
| `withTrail`    |                                                                                         设置烟花火箭是否会留下尾迹                                                                                        | ❌ |
| `power`         |                                                                                                设置烟花的威力                                                                                                | ❌ |
| `fireworkEffects`    |                                                                     设置烟花的效果，与其爆炸前需要多长时间有关                                                                     | ✅ |
| `fireworkEffectType` |                                                 设置烟花的形状 [从列表中选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                 | ❌ |
| `fireworkEffectTypes` | 设置烟花的形状 [从列表中选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html) 。这是一个形状列表 - 如果你想要一个形状列表，不要使用 `fireworkEffectType`！ [1] | ❌ |

[1] 当烟花使用多种形状时，每种形状将使用列表中相同位置的颜色。请查看下面的示例。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

在 Boss 位置生成烟花，偏移量为 x= 1、y= 1.5 和 z = 0。赋予烟花一个速度，分别为 x=.5、y=-.35 和 z=1。烟花不会闪烁，也没有尾迹；威力设置为 2，因此烟花爆炸会延迟这么多。 

最后，有两个颜色列表：列表 1 是橙色和红色，列表 2 是黄色和蓝色。烟花有两种形状：BALL_LARGE 和 STAR。这意味着 BALL_LARGE（元素 1）将使用橙色和红色（列表 1），STAR（元素 2）将使用黄色和蓝色（列表 2）。

</div>

</details>

</div>

#### fireworkEffects

这些是烟花火箭将显示的效果。至少需要一种效果。以下是有效效果：

- WHITE、SILVER、GRAY、BLACK、RED、MAROON、YELLOW、OLIVE、LIME、GREEN、AQUA、TEAL、BLUE、NAVY、FUCHSIA、PURPLE、ORANGE

---

### STRIKE_LIGHTNING

召唤闪电。这是一种视觉效果，如果你想要伤害，你应该添加一个伤害动作。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |

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
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

每 5 刻对 Boss 召唤一次闪电，持续 5 次。

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

在目标位置生成一个下落的方块。仅限视觉效果，不会放置方块。

| 值           |                                                                                      详情                                                                                       | 必填 |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [更多信息]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | 设置下落方块的 [材质](#material)。[在此处查看有效类型](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)，并确保它们是有效的方块材质。 | ✅ |
| `landingScripts` |                                                            设置方块落下时将运行的脚本列表                                                             | ✅ |
| `vValue`         | 设置下落方块的速度和方向。 | ✅ |

`landingScripts` 的工作方式与 [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script)| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                设置                 | ✅ |

*注意：此动作也接受相对向量。[在此]($language$/elitemobs/elitescript_relative_vectors.md) 了解更多关于如何使用它们的信息。*

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

设置 Boss 为。

</div>

</details>

</div>

---

### TAG

为 Boss 或玩家添加标签。标签只是字符串或单词，脚本编写者可以定义它们。它们仅用于运行条件检查，除了在脚本中使用之外，没有直接的游戏效果。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         设置标签                         | ✅ |
| `duration` |             设置标签的持续时间（刻）             | ❌ |

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

使用字符串“very_sus”标记 Boss，稍后可以通过脚本条件进行检查。

**重要提示：** 只能标记玩家和精英生物。

</div>

</details>

</div>

---

### TELEPORT

将目标传送至指定位置。

| 值          |                                                    详情                                                     | 必填 |
|-------------|:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`     |    设置_谁_将被传送。[常规目标信息在此处！]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | 设置他们将被传送_到哪里_。[常规目标信息在此处！]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location`   |                                               传送位置                                                | ✅ |

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

这会将距离 Boss 10 个方块内的所有玩家传送至 Boss 生成位置。

</div>

</details>

</div>

#### location

设置玩家将被传送到的位置。格式为标准的 EliteMobs 格式 `world_name,x,y,z,pitch,yaw`。

示例

```yaml
location: world,0,64,0,0,0
```

这有一些特殊值：

- 如果世界名称设置为 `same_as_boss`，它将使用 Boss 当前所在世界的名称替换世界名称：

```yaml
location: same_as_boss,0,64,0,0,0
```

- 如果只有三个值匹配 x、y 和 z，则传送将相对于 Boss 位置完成。如果 Boss 是区域 Boss，则位置将相对于 Boss 的生成点。

---

### TITLE_MESSAGE

设置目标的动作栏消息。

| 值        |                            详情                            | 必填 | 特殊 | 默认 |
|-----------|:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target`  | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title`    |                    设置标题消息                     | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) | ❌ |
| `subtitle` |                   设置副标题消息                   | ✅ | 可以使用 `&` 和 [颜色代码](#color_codes) | ❌ |
| `duration` |           设置消息的持续时间（刻）            | ✅ | ❌ | `0` |
| `fadeIn`   |                   设置淡入时间（刻）                   | ❌ | ❌ | `0` |
| `fadeOut`  |                   设置淡出时间（刻）                   | ❌ | ❌ | `0` |

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
      title: "&2你好，世界！"
      subtitle: "&2我是一个副标题！"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

这会将标题消息设置为向所有距离 Boss 10 个方块内的玩家显示标题“&2你好，世界！”和副标题“&2我是一个副标题！”。

消息将在屏幕上停留 8 秒（120 + 20 + 20 = 160 刻），包括淡入和淡出动画。

</div>

</details>

</div>

---

### UNTAG

从 Boss 中移除标签。查看 `TAG` 以了解标签的工作原理。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags`   |                         设置标签                         | ✅ |
| `duration` |      设置移除标签的持续时间（刻）      | ❌ |

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

从 Boss 中移除标签“very_sus”，稍后可以通过脚本条件进行检查。

</div>

</details>

</div>

---

### VISUAL_FREEZE

为玩家提供冻结视觉效果，并造成其相关的伤害。如果你不希望效果立即消失，则应将其与重复脚本结合使用。

| 值       |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 效果持续时间（刻）                  | ✅ |

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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) 视觉冻结当前不起作用，因此无法截取屏幕截图

</div>

为距离 Boss 10 个方块内的所有玩家提供 3 秒（60 刻）的冻结视觉效果。

</div>

</details>

</div>

---

# 多个动作

有时，你可能希望在事件发生时一次执行多个动作，例如发送多条消息或按顺序执行不同的动作。这很容易做到！让我们在示例中添加一个药水效果动作：

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
      message: 我正在向攻击 Boss 的玩家发送消息！
```

</div>

</details>

</div>


