
#精英脚本操作

操作是脚本的核心。这些决定了脚本的执行情况，并允许您设置自定义间隔。

操作始终以你要执行的操作类型开始。不同的操作类型有不同的功能。另外，所有操作都有一个或多个目标。操作也可以有等待计时器，以确保它们在可定制的延迟后发生。最后，操作还可以有特定于操作类型的其他各种字段。

##共享属性

| 值                   |                                                                                                   详情                                                                                                     | 特殊 |
|----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`             |                                                           [更多信息在这里]($language$/elitemobs/elitescript_targets.md)                                                           | ❌ |
| `wait`               |                                                             在运行操作之前设置等待的时间(刻)                                                             | ❌ |
| `repeatEvery`        |  设置每隔固定数量的刻重复操作。任何设置了这个但没有使用次数的脚本都会在怪物死亡后终止，以避免延迟。         | ❌ |
| `times`              |                                                                         设置一个操作将发生的次数                                                                         | 需要 `repeatEvery` |
| `scripts`            |                                                                  设置在动作结束时运行的脚本                                                                  | ❌ |
| `onlyRunOneScript`   |                                                                随机选择一个`scripts`并只运行那个。                                                                | ❌ |
| `offset`             | 这个选项放在`Target`下面。允许你偏移目标位置。偏移不适用于那些以`ZONE_FULL`或`ZONE_BORDER`为目标的动作。 | ❌ |

##操作类型

### ACTION_BAR_MESSAGE

为目标设置动作栏消息。

| 值       |                                   详情                                   | 强制性 | 特殊 |
| ---------|:-------------------------------------------------------------------------:| :-: | :-: |
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                                   消息                                   | ✅ | 可以使用`&`的[颜色代码](#color_codes) |

<div align="center">

<details> 

<summary><b>例子：</b></summary>

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

将动作栏设置为向距离boss 10个方块内的任何玩家说Hello World。

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

为目标(s)添加一个boss bar。

| 值       |                                   详情                                   | 强制性 |        特殊        |
| ---------|:-------------------------------------------------------------------------:| :-: |:----------------------:|
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅ |           ❌           |
| `sValue` |                                   消息                                   | ✅ | 可以使用`&`的[颜色代码](#color_codes) |
| `duration` |                    boss 条闪烁的时长 (刻)                     | ✅ |           ❌           |

<div align="center">

<details> 

<summary><b>例子：</b></summary>

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

将在距离boss 10格内的任何玩家处设置一个为期1秒的说Hell World的boss条。

</div>

</details>

</div>

---

### DAMAGE

这是你可以用其他实体来损害实体的方式。

_注意:这本质上使用的是EliteMobs的伤害系统!这意味着你会看到来自打击的正常精英护甲减少。在乘数部分有更多内容_

| 值       |                                   详情                                   | 强制性 |
| ---------|:-------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                            伤害乘数                            | ✅ |

<div align="center">

<details> 

<summary><b>例子：</b></summary>

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

将伤害设置为boss对玩家的基础伤害的一半，考虑到伤害减少。

</div>

</details>

</div>

#### multiplier

设置boss的伤害乘数。

**重要**:为了使功率易于和自动化的比例，伤害是由boss击打玩家一次并将boss的基础伤害与乘数相乘来应用的。

这意味着1.0的乘数和boss的正常击打是一样的。2.0是正常强度的2倍的击打，0.5是硬的50%。

---

### MAKE_INVULNERABLE

使一个目标无敌。

| 值       |                                   详情                                   | 强制性 |
| ---------|:-------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在这里]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |                     设置boss是否无敌                      | ✅ |
| `duration` |               无敌状态的时长 (刻)               | ❌ |

<div align="center">

<details> 

<summary><b>例子：</b></summary>

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

使boss无敌60刻（3秒）

</div>

</details>

</div>

---

### MODIFY_DAMAGE

修改对boss造成的伤害或由那个boss对玩家造成的伤害。这是一种特殊的行动，有几个特殊的要求。

| 值       | 详情 | 强制性 |
| ---------| :-: | :-: |
| `multiplier` | 伤害乘数。 | ✅ |

该行动是特殊的，必须在一个脚本中，有一个对伤害事件的事件监听器。以下是有效的伤害事件:`EliteMobDamagedByEliteMobEvent`，`EliteMobDamagedByPlayerEvent`，`EliteMobDamagedEvent` 用于减少对boss造成的伤害的事件，`PlayerDamagedByEliteMobEvent` 用于减少对玩家造成的伤害的事件。

强烈建议你学习如何使`hasTag`条件运作，以便最好地使用这个行动。如果使用正确，可以使boss暂时抵抗或弱化伤害，这可以与玩家buffs，boss位置或许多其他因素相关。

<div align="center">

<details> 

<summary><b>例子：</b></summary>

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

将对boss造成的伤害增加2倍，但只有当玩家有一个叫做"CoolPlayer"的标签时。

</div>

</details>

</div>
---

### 消息

向目标发送一条消息。

| 变量 |                            详情                            | 必填 | 特性 |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `目标` | [此处有更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `s值` |                            消息                            | ✅ | 可用 `&` 使用[颜色代码](#color_codes) |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 消息
      目标: 
        targetType: NEARBY_PLAYERS
        range: 10
      s值: "&2你好，世界！"
```


<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

会向离boss 10格范围内的所有玩家发送聊天消息。

</div>

</details>

</div>

---

### 放置方块

在目标位置放置一个方块持续一段时间。

| 变量 |                                                         详情                                                         | 必填 |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `目标` |                              [此处有更多信息]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `材料` | 方块的[材质](#material)，可在[这里找到完整列表](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `持续时间` |                                              效果的持续时间，单位为 刻（ticks）                                               | ❌ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: DOME
      半径: 3
      目标:
        targetType: 自我
    动作:
    - action: 放置方块
      目标:
        targetType: 区域全覆盖
      duration: 120
      材料: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

在boss周围放置一个玻璃圆顶，持续6秒。

_注意：如果未定义持续时间，方块放置将会永久性_

</div>

</details>

</div>

---

### 播放动画

使用模型引擎为自定义模型播放指定的动画。需要在运行动画的目标上有模型引擎和有效的自定义模型。

| 变量 |                            详情                            | 必填 |
| --- |:-------------------------------------------------------------:| :-: |
| `目标` | [此处有更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `s值` |                设置动画的名称                 | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 播放动画
      目标:
        targetType: 自我
      s值: "fortnite_dance"
```



设置boss播放 the fortnite_dance 动画。 需要服务器有模型引擎，boss有自定义伪装，自定义伪装有名为 "fortnite\_dance" 的动画。

</div>

</details>

</div>

---

### 播放声音

播放游戏内声音。

| 变量 |                            详情                            | 必填 |
|----------|:-------------------------------------------------------------:|:---------:|
| `目标` | [此处有更多信息]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `s值` |            设置播放声音的名称            |     ✅     |
| `音高`  |           设置播放声音的音高            |     ❌     |
| `音量` |           设置播放声音的音量           |     ❌     |

[这里有一个Minecraft所有声音的方便列表！](https://www.digminecraft.com/lists/sound_list_pc.php) 记得这也可以播放资源包中的自定义声音。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 播放声音
      目标:
        targetType: 自我
      s值: minecraft:block.bell.resonate
```



在boss位置播放Minecraft铃声的共鸣声

</div>

</details>

</div>

---

### 药水效果

向目标应用特定的药水效果。

| 变量 |                                                       详情                                                       | 必填 |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `目标` |                            [此处有更多信息]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `药剂效果类型` | 效果类型，[有效列表在这里](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `增强器` |                                          药剂效果等级（从0开始）                                          | ✅ |
| `持续时间` |                                           效果的持续时间（刻）                                            | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 药水效果
      目标: 
        targetType: NEARBY_PLAYERS
        范围: 10
      药剂效果类型: LEVITATION
      增强器: 1
      持续时间: 40
```



<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

这将使离boss 10格范围内的任何玩家上升2秒（40刻）。

</div>

</details>

</div>

---

### 推动

通过设置的向量推动一个目标。

| 变量 |                            详情                            | 必填 |
| --- |:-------------------------------------------------------------:| :-: |
| `目标` | [此处有更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `v值` |       设置将应用的速度的向量        | ✅ |

*注意：此动作也接受相对向量。 [在此了解如何使用]($language$/elitemobs/elitescript_relative_vectors.md)。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 推动
      等待: 3
      目标: 
        targetType: NEARBY_PLAYERS
        范围: 10
      v值: 0,0.3,0
      次数: 10
      每隔: 10
```



<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

这将推动所有离boss 10格范围内的玩家使用 0.3 的力量进入空中。这个动作将每0.5秒 （10刻）重复10次。 换言之，这将使效果持续5秒（ 10次 x 10刻 = 100刻）。

这将让玩家感觉像他们正在跳跃。

</div>

</details>

</div>

#### 向量

向量由 `v值: x,y,z` 定义。 例如，如果您想推动目标上升，您可以做 `v值: 0,0.3,0`。

---

### 以控制台身份运行命令

以控制台的身份运行一个命令。

| 变量 |                             详情                             | 必填 |
| --- |:---------------------------------------------------------------:| :-: |
| `目标` |  [此处有更多信息]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `s值` |                    将运行的命令                     | ✅ |

**注：有可用的占位符！查看 RUN_COMMAND_AS_PLAYER（即 以玩家身份运行命令），它们是相同的**

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 以控制台身份运行命令
      目标:
        targetType: NEARBY_PLAYERS
        范围: 10
      s值: say 你好 $bossName 我的名字是 $playerName。 你的等级是什么？ $bossName 我的等级是 $bossLevel。
```



<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

使控制台广播该消息 "你好 $bossName 我的名字是 $playerName。 你的等级是什么？ $bossName 我的等级是 $bossLevel"

</div>

</details>

</div>

---

### 以玩家身份运行命令

以玩家的身份运行一个命令。 需要目标是玩家。

| 变量 |                            详情                            | 必填 |
| --- |:-------------------------------------------------------------:| :-: |
| `目标` | [此处有更多信息]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `s值` |                   将运行的命令                    | ✅ |

**注：RUN_COMMAND_AS_PLAYER （以玩家身份运行命令）和 RUN_COMMAND_AS_CONSOLE （以控制台身份运行命令） 使用以下占位符：**

| 占位符 | 详情 | 特性 |
| --- | :-: | :-: |
| `$playerName` | 玩家的显示名称 | 目标必须是玩家 |
| `$playerX` | 玩家的X位置 | 目标必须是玩家 |
| `$playerY` | 玩家的Y位置 | 目标必须是玩家 |
| `$playerZ` | 玩家的Z位置 | 目标必须是玩家 |
| `$bossName` | 玩家的名称 | 目标必须是玩家 |
| `$bossX` | Boss的X位置 | ❌ |
| `$bossY` | Boss的Y位置 | ❌ |
| `$bossZ` | Boss的Z位置 | ❌ |
| `$bossLevel` | Boss的等级 | ❌ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">



```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 以玩家身份运行命令
      目标:
        targetType: NEARBY_PLAYERS
        范围: 10
      s值: say 你好 $bossName 我的名字是 $playerName。
```



<div align="center">

![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

使玩家运行say命令，内容为 你好 $bossName 我的名字是 $playerName. ，这意味着他们只是说 "你好 $bossName 我的名字是 $playerName."

</div>

</details>

</div>


---

### RUN_SCRIPT

这只是运行在`scripts`中定义的脚本。任何操作都可以做到这一点，这个操作只存在作为方便操作，当你只是想做那个。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                                 将运行的脚本                                   | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: RUN_SCRIPT
      scripts:
      - Example1
      - Example2
  Example1:
    动作:
    - 操作方式: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Example2:
    动作:
    - 操作方式: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

当精英受到伤害时，运行 RUN_SCRIPT，其会运行 Example1 和 Example2 脚本。

Example1 脚本将伤害所有距离boss 10格内的玩家。
<br>Example2 脚本将发给距离boss 10格内的所有玩家"&cCool boss!: &fGotcha back!"的消息。

</div>

</details>

</div>

---

### SET_MOB_AI

设置怪物是否有AI。在Minecraft中，没有AI的怪物不会移动也不会攻击。他们仍然可以受到伤害，但是伤害他们不会导致他们被击退。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                             设置boss是否有AI                              | ✅ |
| `持续时间` |                       设置值设定的时间（刻）                       | ❌ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

将boss设置为2秒（40个刻）没有AI。

</div>

</details>

</div>

---

### SET_MOB_AWARE

设置怪物是否有意识。在Minecraft中，没有意识的怪物不会移动到新的位置，也不会攻击。他们仍然可以受到伤害，并且他们会被击退。

注意的是，如果在怪物失去意识之前，怪物已经在移动到一个地方，它会完成去那个地方之前完全停止并且不再移动。

这意味着你可以使用无意识的怪物移动到定义的地点，而不像没有AI的怪物那样。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                          设置怪是否有意识                           | ✅ |
| `持续时间` |                       设置值设定的时间（刻）                       | ❌ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

将boss设置为2秒（40个刻）没有意识。

</div>

</details>

</div>

---

### SET_ON_FIRE

设置一个实体在持续时间内着火。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `持续时间` |                        效果的持续时间，以贴合操作时间来计算                         | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

将所有距boss 10格内的玩家都设置为燃烧，持续3秒（60刻）。

</div>

</details>

</div>

---

### SET_TIME

设置目标所在世界的游戏时间。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                                 设置时间                                 | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

当boss被攻击时，将设置boss所在世界的时间为10000个游戏刻。

</div>

</details>

</div>

---

### SET_WEATHER

设置目标所在世界的天气持续一段时间。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `天气` |                                设置天气类型                                 | ✅ |
| `持续时间` |              设置天气模式持续的时间              | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

设置boss所在世界的天气为下一分钟雨水/雪。

*注意:效果将需要一段时间才能触发。*

</div>

</details>

</div>

#### 天气

以下是有效的天气模式：

- `CLEAR` - 设置天气为晴朗
- `PRECIPITATION` - 设置天气为雨/雪，取决于生物群系，位置高度和其他原版Minecraft的考虑。
- `THUNDER` - 设置天气为雷暴

---

### SPAWN_FIREWORKS

产生焰火。

| 值 |                                                                                                         详情                                                                                                         | 是否必填 |
| --- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                              [更多信息在此处]($language$/elitemobs/elitescript_targets.md)                                                                              | ✅ |
| `vValue` |                                                                                        设置焰火火箭的速度                                                                                         | ✅ |
| `flicker` |                                                                                       设置焰火粒子是否闪烁                                                                                        | ❌ |
| `withTrail` |                                                                                      设置焰火火箭是否留下痕迹                                                                                       | ❌ |
| `power` |                                                                                             设置焰火的力量                                                                                              | ❌ |
| `fireworkEffects` |                                                              设置灼热的火焰，关系到爆炸之前需要多久的时间                                                              | ✅ |
| `fireworkEffectType` |                                           设置焰火的形状 [从这个列表选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                            | ❌ |
| `fireworkEffectTypes` | 从这个列表选择焰火的形状[从这个列表选择](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html).这是一个形状的列表 - 如果你想要一个形状的列表，不要使用`fireworkEffectType`! [1] | ❌ |

[1] 当多次为焰火设置各种形状时，每种形状都将使用相同位置的颜色列表。请查看下面的示例。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SPAWN_FIREWORKS
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

在boss位置偏移为x=1，y=1.5，z=0的地方产生粒子。给予焰火速度x=.5，y=-.35，z=1。焰火既不会闪烁，也不会留下痕迹；力度设为2，然后爆炸的火焰将延迟那个数量。

最后，有两个颜色列表列表：列表1是橙色和红色；列表2是黄色和蓝色。焰火有两种形状：BALL_LARGE和STAR。这意味着BALL_LARGE（元素1）将使用橙色和红色（列表1），STAR（元素2）将使用黄色和蓝色（列表2）。

</div>

</details>

</div>

#### fireworkEffects

这些是焰火火箭将展示的效果。至少需要一个效果。以下是有效的效果：

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

打雷。这是一个视觉效果，如果你想要伤害你应该增加一个伤害动作。

| 值 |                                                 详情                                                  | 是否必填 |
| --- |:--------------------------------------------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此处]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

每5刻，在boss处打雷5次。

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

在目标处产生掉落方块。仅可视，不会放置方块。

| 值 |                                                          详情                                                           | 是否必填 |
|---|:---------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                        [更多信息在此处]($language$/elitemobs/elitescript_targets.md)                         | ✅ |
| `material` | 设置掉落方块的[Material](#material)。[检查有效的类型在此处](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)，并确保它们是一个有效的方块材料。 | ✅ |
| `landingScripts` |                         设置方块落下时运行的脚本列表                          | ✅ |
| `vValue` | 设置掉落方块的速度和方向。 | ✅ |

`landingScripts`的作用与[`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script)相同，但它可以接受特殊的目标类型`LANDING_LOCATION`。

*注意:此动作也接受相对向量。[在此处]($language$/elitemobs/elitescript_relative_vectors.md)了解更多如何使用它们。*

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - 操作方式: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    动作:
    - 操作方式: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

当boss被攻击时，这个脚本将在boss位置上方10格，旁边3格的地方生成一个掉落的石头方块。

一旦方块落下，它将运行LandingScriptExample脚本，该脚本将在方块落地的位置放置一个石头方块。方块将在那里停留10秒(200刻)，然后再消失。

</div>

</details>

</div>

---

### SPAWN_PARTICLE

在目标处生成粒子。

**注意：如果覆盖率未设置，那么默认覆盖率将被设置为0.3！**

| 值 |                           详细信息                          | 是否必须 |
| --- |:-------------------------------------------------------:| :--: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |                 列出将要生成的粒子                 | ✅ |

#### particles

粒子有自己的特殊设置，如下所示：

| 值 | 详细信息 | 默认值 | 特殊 |
| --- | :-: | :-: | :-: |
| `x` | 设置X轴的偏移 | 0.01 | (1) |
| `y` | 设置Y轴的偏移 | 0.01 | (1) |
| `z` | 设置Z轴的偏移 | 0.01 | (1) |
| `amount` | 设置生成粒子的数量 | 1 | (1) |
| `speed` | 设置粒子的速度 | 0.01 | ❌ |
| `particle` | 设置实体类型 | `FLAME` | [从此列表中选择！](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | 设置红色值 | `255` | (2) |
| `green` | 设置绿色值 | `255` | (2) |
| `blue` | 设置蓝色值 | `255` | (2) |
| `toRed` | 设置最终红色值 | `255` | (3) |
| `toGreen` | 设置最终绿色值 | `255` | (3) |
| `toBlue` | 设置最终蓝色值 | `255` | (3) |

_(1) 如果`amount`设置为0，`x`，`y`和`z`将设置粒子的速度。_

_(2) 只对`REDSTONE`，`DUST_COLOR_TRANSITION`，`SPELL_MOB`和`SPELL_MOB_AMBIENT` `particle`有效_

_(3) 只对`DUST_COLOR_TRANSITION` `particle`有效_

重要的是要注意，一个SPAWN_PARTICLE脚本可以生成多个粒子。每个粒子都可以在SPAWN_PARTICLE动作中拥有自己的配置字段。以下是一个例子：

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
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

这将在玩家周围生成由火焰和烟雾粒子组成的圆柱。

</div>

</details>

</div>

#### 移动粒子：

可以为粒子设置特定的速度，它的工作方式与Spigot API相同。这允许脚本编写着设置粒子以特定的速度去特定的方向。无法让粒子在途中改变方向。这个效果在火焰喷射器附魔和boss力量中使用。

要移动一个粒子，设置`amount: 0`。这将向Minecraft发出信号，`x`，`y`和`z`的值实际上是一个向量。这个向量设置了你的粒子将要去的方向。

假设你想让`FLAME`粒子向上移动。为此，你需要一个正的`y`值，而其他什么都不需要。最后，你需要将速度设置为你想要的速度值。以下是一个完整的例子：

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

这将在boss的位置生成一个向上的火焰粒子。

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

召集来自EliteMobs自定义Boss的增援。

| 值 |                            详细信息                            | 是否必须 |
| --- |:-------------------------------------------------------------:| :--: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |        设置自定义Boss增援的文件名        | ✅ |
| `duration` |          设置增援的持续时间（以tick为单位）          | ❌ |

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

在boss的位置召唤有"your_boss_file.yml"文件名的增援。

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA请在此部分填写正确的信息，

| 值 |                            详细信息                            | 是否必须 |
| --- |:-------------------------------------------------------------:| :--: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   设置                   | ✅ |

*注：此动作也接受相对向量。可以在这里学习更多关于如何使用这些的信息 [$language$/elitemobs/elitescript_relative_vectors.md].*

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

设置boss为  .

</div>

</details>

</div>

---

### TAG

给boss或玩家添加标签。标签只是字符串或单词，可以由脚本编写者自定义。这些只用于执行条件检查，并且在脚本中用途之外无直接的游戏效果。

| 值 |                            详细信息                            | 是否必须 |
| --- |:-------------------------------------------------------------:| :--: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         设置标签                        | ✅ |
| `duration` |               设置标签的持续时间（以tick为单位）               | ❌ |

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

给boss标记为"very_sus"字符串，稍后可以通过脚本条件进行检查。

**重要：** 只能标记玩家和精英怪物。

</div>

</details>

</div>

---

### TELEPORT

将目标传送到定义的位置。

| 值 |                                                    详细信息                                                     | 是否必须 |
| --- |:--------------------------------------------------------------------------------------------------------:| :--: |
| `Target` |    设置_谁_将被传送。 [通用目标信息在此！]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | 设置_他们_将被传送到哪里。 [通用目标信息在此！]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               传送位置                                               | ✅ |

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

这将把所有在boss10个单位内的玩家传送到boss的初始位置。

</div>

</details>

</div>

#### location

设置玩家被传送的位置。格式为标准EliteMobs `world_name,x,y,z,pitch,yaw`。

示例

```yaml
location: world,0,64,0,0,0
```

这有一些特殊的值：

- 如果世界名设置为`same_as_boss`，它将用boss当前所在的世界的名称替换世界名：

```yaml
location: same_as_boss,0,64,0,0,0
```

- 如果只有三个值匹配x, y和z，那么将相对于boss位置进行传送。如果boss是一个区域boss，那么位置将相对于boss的初始点。

---

### TITLE_MESSAGE

为目标设置动作栏消息。

| 值 |                            详细信息                            | 是否必须| 特殊 | 默认值 |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    设置标题消息                     | ✅ | 可以使用`&`的[颜色代码](#color_codes) | ❌ |
| `subtitle` |                   设置副标题消息                  | ✅ | 可以使用`&`的[颜色代码](#color_codes) | ❌ |
| `duration` |           设置消息持续时间（以tick为单位）              | ✅ | ❌ | `0`|
| `fadeIn` |                   设置淡入时间（以tick为单位）                   | ❌ | ❌ | `0` |
| `fadeOut` |                  设置淡出时间（以tick为单位）                   | ❌ | ❌ | `0` |

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
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

将标题消息设置为向标题显示“&2Hello World!”并附带副标题“&2I am a subtitle!”给所有在boss10个单位内的玩家。

消息将在屏幕上停留8秒钟（120 + 20 + 20 = 160 tick）包括淡入和淡出动画。

</div>

</details>

</div>

---

### UNTAG

移除boss的标签。查看`TAG`来看标签如何工作。

| 值 |                            详细信息                            | 是否必须 |
| --- |:-------------------------------------------------------------:| :--: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         设置标签                          | ✅ |
| `duration` |      设置删除标签的持续时间（以tick为单位）         | ❌ |

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

从boss中移除"very_sus"标签，稍后可以通过脚本条件进行检查。

</div>

</details>

</div>

---

### VISUAL_FREEZE

给玩家提供冻结的视觉效果并对其造成相关伤害。如果你不希望效果立即消退，应该和重复性脚本联用。

| 值 |                            详情                            | 是否必须 |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [更多信息在此]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 效果持续时间，按照刻度                 | ✅ |

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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL_FREEZE目前无法工作，无法获取屏幕截图

</div>

给所有离boss10个方块内的玩家冻结视觉效果3秒钟（60刻度）。

</div>

</details>

</div>

---

# 多个动作

有时候，当某个事件发生的时候，你可能想一次做几个动作，比如发送多个消息或者顺序执行不同的动作。这很容易实现！让我们在示例中添加一个药水效果动作：

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
      message: I am messaging all online players!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: I am messaging the player that hit the boss!
```

</div>

</details>

</div>