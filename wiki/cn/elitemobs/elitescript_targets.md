# 精英脚本目标

目标是精英脚本的核心部分，对于动作和区域的工作是必须的。

## 目标类型

目标类型设定了脚本将要针对的实体或地点。

| 目标类型                  |                                    详细信息                                     |                                                                                                   特殊指向                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | 在[范围]($language$/elitemobs/elitescript_targets.md&section=range)内的玩家  |                                                                需要[`范围`]($language$/elitemobs/elitescript_targets.md&section=range)的设定                                                                 |
| `NEARBY_MOBS`                |  在[范围]($language$/elitemobs/elitescript_targets.md&section=range)内的生物        |                                                              需要[`范围`]($language$/elitemobs/elitescript_targets.md&section=range)的设定                                                                 |
| `WORLD_PLAYERS`              |                                  游戏世界中的玩家                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                                  服务器中的玩家                               |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                     活动中的玩家                               |                                                                   需要[兼容的活动]($language$/elitemobs/elitescript_events.md)的设定                                                                   |
| `SELF`                       |                                     使用能力的Elite                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      目标化Boss的产生地点                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                                     特定位置                                |                                                            需要[`位置`]($language$/elitemobs/elitescript_targets.md&section=location)的设定                                                             |
| `LOCATIONS`                  |                              几个特定的位置                               |                                                          需要[`位置们`]($language$/elitemobs/elitescript_targets.md&section=locations)的设定                                                            |
| `ZONE_FULL`                  |                             定位区域内的目标                              |                                                                          需要[`区域`]($language$/elitemobs/elitescript_zones.md)的设定                                                                         |
| `ZONE_BORDER`                |                             定位区域边界的目标                              |                                                                          需要[`区域`]($language$/elitemobs/elitescript_zones.md)的设定                                                                        |
| `ACTION_TARGET`              |                      继承于一个动作的目标装成(对象)                       |             **只能用于动作[条件]($language$/elitemobs/elitescript_conditions.md)和[相对向量]($language$/elitemobs/elitescript_relative_vectors.md)!!**             |
| `LANDING_LOCATION`           |                 目标化一个方块落下的位置                  |                                           **只能用于[`SPAWN_FALLING_BLOCK`动作]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |            继承于运行这个脚本的脚本的目标装成(对象)           |                                                                        只有当脚本被另一个脚本调用时才能运行!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |    从运行这个脚本的脚本继承的区域内的目标装成(对象)  |                                                需要[`区域`]($language$/elitemobs/elitescript_zones.md) **在调用这个脚本的脚本中!**                                                 |
| `INHERIT_SCRIPT_ZONE_BORDER` |   从运行这个脚本的脚本继承的区域边界的目标装成(对象)   |                                              需要[`区域`]($language$/elitemobs/elitescript_zones.md) **在调用这个脚本的脚本中!**                                                  |


<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDeathEvent
    动作:
      - 动作: 消息
        目标装成:
          目标类型: 全部玩家
        字符值: "&2你好，世界！"
```

这个脚本会向目标装成发送一条消息。由于目标装成设为`全部玩家`，所以它总是会向所有在线玩家发送这条消息。

</div>

</details>

</div>

---

## 共享属性

以下设置可以应用到全部目标装成。

| 值 | 详细信息 | 特殊指向 |
| --- | :-: | :-: |
| `偏移` | 为目标装成的位置设定偏移量。 | 不能对实体进行定位! |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDeathEvent
    动作:
    - 动作: 击出闪电
      目标装成:
        目标类型: 自我
        偏移: "0,2,0"
```

这会在Boss上方两格的位置打出一道闪电。注意STRIKE_LIGHTNING是以位置为基础，并不影响实体，所以它可以有偏移量。

你不能设置一个偏移来发送一条消息，因为消息是发送给玩家的。然而，你可以为一个有能力定位实体的区域设置一个偏移。

</div>

</details>

</div>

---

## 范围

为`NEARBY_PLAYERS`目标类型设定周围玩家的扫描范围。

| 值 | 详细信息 | 默认 |
| --- | :-: | :-: |
| `范围` | 以方块为单位设定针对玩家目标的扫描范围。 | `20.0` |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDeathEvent
    动作:
      - 动作: 消息
        目标装成:
          目标类型: 附近的玩家
          范围: 25.0
        字符值: "&2定位到了在25方块内的玩家!"
```

这将会在Boss死亡后向Boss周围25方块内的玩家发送一条消息。

</div>

</details>

</div>

## 位置

为`LOCATION`目标类型设定位置。

| 值 | 详细信息 | 默认 |
| --- | :-: | :-: |
| `位置` | 设定将会被定位的世界地点。 | `none` |

这使用`位置: 世界名,x,y,z,俯仰,偏航`的格式来设定位置。

**请注意，`same_as_boss`是一个对世界名的有效的占位符，比如`same_as_boss,100,64,100,0,0`将会定位到一个在跟Boss同一个世界的有效位置。**

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDeathEvent
    动作:
    - 动作: 击出闪电
      目标装成:
        目标类型: 位置
        位置: "myWorld,100,64,200,0,0"
```

这会在一个叫`myWorld`的世界中的位置x=100, y=64, z=200处生成一道闪电。

</div>

</details>

</div>

---

## 位置们

为`LOCATIONS`目标类型设定位置。

| 值 | 详细信息 | 默认 |
| --- | :-: | :-: |
| `位置们` | 设定一列将会被定位的世界地点。 | `none` |

这使用`世界名,x,y,z,俯仰,偏航`的格式来设定位置。

**请注意，`same_as_boss`是一个对世界名的有效的占位符，比如`same_as_boss,100,64,100,0,0`将会定位到一个在跟Boss同一个世界的有效位置。**

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  示例:
    事件:
    - EliteMobDeathEvent
    动作
    - 动作: 击出闪电
      目标装成:
        目标类型: 位置们
        位置们:
        - "myWorld,100,64,200,0,0"
        - "同Boss,-100,12,130,0,0"
```

这会在一个叫`myWorld`的世界中的位置x=100, y=64, z=200处，以及在跟Boss同一个世界的位置x=-100, y=12 and z=130处生成闪电。

</div>

</details>

</div>

---
## 定向区域

[区域]($language$/elitemobs/elitescript_zones.md) 有多个目标，理解他们如何工作以便满足精英脚本的全部潜力是非常重要的。

区域存在两部分：

### 第一部分 - 设置区域的所在位置

区域需要知道他们应该在哪里，以此完成，你使用相同的目标系统就如你对待其他基于位置的效果，像一次闪电-strike。

<div align="center">

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

这生成了一个在boss周围的圆柱区域。注意这个例子还没有设置任何行动，下面会进行详细说明。

部分区域，如 [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)，有两个或更多的目标。这是因为光线是条线，线由两点定义。这将会在 [区域页面]($language$/elitemobs/elitescript_zones.md) 进行详细介绍，但他们基本上都是相同的原理。

</div>

</details>

</div>

### 第二部分 - 定向区域的内部

现在区域知道它在哪里，我们需要知道我们定义的区域的的目标。 `targetType: ZONE_FULL` 和 `targetType:ZONE_BORDER` 就是为此。

<div align="center">

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

使用来自第一部分的区域，我们现在添加行动指令。这个指令的目标是 `ZONE_FULL`，这代表他会在完整的区域内生成粒子。

请注意，ZONE_BORDER 并非每个区域都能使用。在 [脚本区域]($language$/elitemobs/elitescript_zones.md) 页面有更多的信息。

</div>

</details>

</div>

### 区域轨迹

设置区域是否会随目标移动，比如如果 boss移动了，`targetType: SELF`的区域是否会移动。

| 值 | 详情 | 默认 |
| --- | :-: | :-: |
| `track` | 设置区域是否会随目标移动。 | `true` |

注意可移动区域不能追踪。 [更多关于这一点的信息在这里。]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

使用来自第一和第二部分的例子，区域现在被设置为不追踪。这代表区域会在boss的位置生成，但就算boss一直在移动，区域会停留在他初始的生成位置。

最后，注意如果一个区域被设定为不追踪，它会在脚本被调用的瞬间记录下它的位置。

比如，你希望在你的脚本中设置一个警告阶段和伤害阶段，你需要确保你在开始时就运行所有行动，并对所有想在之后进行的伤害行动分别设置等待时间. 对于技术原因，你不应该延迟一个通过 `RUN_SCRIPT` 调用的完整脚本。

下面是一个带有警告和伤害阶段的Frost Palace Sanctum的正确力量例子。

<div align="center">

<details> 

<summary><b>例子</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>


这个脚本做了很多事情，但它被分为两个清晰的脚本：`VisualCylinder`和`DamageCylinder`。

首先运行`VisualCylinder`，它有 `RUN_SCRIPT`操作，这个操作会立即同时运行`DamageCylinder`。

然而，`DamageCylinder`中的每个单独行为都被设定为等待60个刻度，或者3秒。

这意味着boss有一个3秒的警告阶段，然后是一个伤害阶段，即使区域被设定为不跟踪警告区域和伤害区域，它们也会在同一个位置。

### 区域特定的目标属性

区域具有以下特定属性：

#### 覆盖率

设置将实际用于动作的区域的百分比。只对位置目标有效（目标为玩家或其他实体时无效）。

| 值 | 详情 | 默认值 |
| --- | :-: | :-: |
| `coverage` | 设置将被覆盖的区域的百分比。 | `1.0` |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

在这种情况下，只有50%的区域将被粒子覆盖。

</div>

</details>

</div>

### 继承目标

当一个脚本运行另一个脚本（或者说"调用"那个脚本）时，有可能将第一个脚本的区域和目标信息传递给第二个脚本。

**使用示例**

1. **改进的脚本运行器**

脚本运行器是只有运行很多其他脚本的功能的脚本。它们被用于使管理脚本更容易，特别是处理需要精确时间的多个脚本。

有了目标继承，多个脚本可以使用相同的区域或目标，从而减少可能高达数百行的重复脚本。

2. **俄罗斯套娃目标过滤**

在一个动作中可以对目标应用过滤条件。通过将目标传递给一个有不同过滤器的不同脚本，就可以将条件分层，并对基于越来越具体的标准的同一池的目标应用不同的效果。

例如，可以创建一个寻找玩家的区域，并进行一个检查区域中所有玩家是否有特定标签的动作。有效的目标可以然后传递给另一个脚本，在那里另一个动作可以运行一个随机检查条件，并根据那个机会应用一个效果。目标可以进一步传给另一个脚本，那里的另一个条件可以做一个检查，看目标是否还活着，如果它们已经死了，就做一些特别的行为。

这些当然只是例子，这是一个非常灵活的系统。

3. **复杂区域**

最后，可以通过可选的条件，将目标分层，从而创建复杂的区域，甚至可以用脚本条件和只运行脚本动作中列出的其中一个脚本的能力，创建半随机化的区域。

**注意：**对于这个版块，**"父脚本"** 指的是运行 **"继承脚本"** 的脚本，即将使用继承目标的脚本。

在使用目标继承时，查看 _父脚本_ 很重要，确保正确的数据被传递。

#### INHERIT_SCRIPT_TARGET

当使用 `INHERIT_SCRIPT_TARGET` 时，_父脚本_ 的目标将被传递给继承的脚本。这有一些注意事项：

- 当传递 **实体目标** 时，可以运行需要位置的动作（如产生粒子），因为将使用实体的位置。当然，也可以用需要实体的动作。

- 当传递 **位置目标** 时，只能使用位置。 **从位置获取实体的唯一方式是在该位置创建一个区域并寻找实体。**所以，虽然传递位置然后获取实体并不是不可能，但是需要多做一点工作。

#### 继承区域

当使用 `INHERIT_SCRIPT_ZONE_FULL` 或 `INHERIT_SCRIPT_ZONE_BORDER` 时， _父脚本_ 定义区域是必要的，否则 _继承脚本_ 将无法正确运行。

另外，区域可以选择性地被[跟踪]($language$/elitemobs/elitescript_targets.md&section=zone-track).，这也会与区域一起传递。

- **非跟踪** 的区域总是会在 _继承的脚本_ 定义的地方创建一个区域。这意味着区域的设置将被 _继承脚本_ 中的动作用于创建全新的区域，每次动作运行时，那些区域的位置将由动作定义。

- 一个 **跟踪** 的区域可以将相同的区域位置传递给所有 _继承脚本_，如果 _父脚本_ 被设置为目标 `ZONE_FULL`或`ZONE_BORDER`。这意味着每一个脚本都将对相同的位置进行操作。