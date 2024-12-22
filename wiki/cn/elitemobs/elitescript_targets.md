# 精英脚本目标

目标是精英脚本的核心部分，是动作和区域正常工作所必需的。

## 目标类型

目标类型设置脚本针对哪些实体或位置。

| 目标类型                         |                                 详情                                  |                                                                特殊                                                                |
|------------------------------|:-------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | [范围]($language$/elitemobs/elitescript_targets.md&section=range)内的玩家 |                             需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                              |
| `NEARBY_MOBS`                | [范围]($language$/elitemobs/elitescript_targets.md&section=range)内的生物 |                             需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                              |
| `WORLD_PLAYERS`              |                               世界中的玩家                                |                                                                ❌                                                                 |
| `ALL_PLAYERS`                |                               服务器中的玩家                               |                                                                ❌                                                                 |
| `DIRECT_TARGET`              |                               事件中的玩家                                |                                       [需要兼容事件]($language$/elitemobs/elitescript_events.md)                                       |
| `SELF`                       |                               使用能力的精英                               |                                                                ❌                                                                 |
| `SELF_SPAWN`                 |                              目标首领的出生位置                              |                                                                ❌                                                                 |
| `LOCATION`                   |                                特定位置                                 |                          需要 [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                           |
| `LOCATIONS`                  |                               多个特定位置                                |                         需要 [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                          |
| `ZONE_FULL`                  |                               区域内部的目标                               |                                      需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                      |
| `ZONE_BORDER`                |                               区域边界的目标                               |                                      需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                      |
| `ACTION_TARGET`              |                             继承来自一个动作的目标                             | **只能用于动作 [条件]($language$/elitemobs/elitescript_conditions.md) 和 [相对向量]($language$/elitemobs/elitescript_relative_vectors.md)!!** |
| `LANDING_LOCATION`           |                              目标方块掉落的位置                              |          **只能用于 [`SPAWN_FALLING_BLOCK` 动作]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)！**           |
| `INHERIT_SCRIPT_TARGET`      |                            继承运行此脚本的脚本的目标                            |                                                       只有在脚本被另一个脚本调用时才能运行！                                                        |
| `INHERIT_SCRIPT_ZONE_FULL`   |                         目标来自运行此脚本的脚本继承的区域内部                         |                              需要 **调用此脚本的脚本中** 的[`Zone`]($language$/elitemobs/elitescript_zones.md)！                              |
| `INHERIT_SCRIPT_ZONE_BORDER` |                         目标来自运行此脚本的脚本继承的区域边界                         |                              需要 **调用此脚本的脚本中** 的[`Zone`]($language$/elitemobs/elitescript_zones.md)！                              |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2Hello World!"
```

这会向目标发送消息。由于目标设置为 `ALL_PLAYERS`，它会将该消息发送给所有在线玩家。

</div>

</details>

</div>

---

## 共享属性

以下设置可以应用于所有目标。

| 数值       |     详情      |    特殊     |
|----------|:-----------:|:---------:|
| `offset` | 设置目标位置的偏移量。 | 不能以实体为目标！ |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

这会在首领上方 2 个方块处产生闪电。请注意，STRIKE_LIGHTNING 使用位置，不影响实体，因此可以有偏移量。

你不能设置偏移量来发送消息，因为消息是发送给玩家的。但是，你可以将偏移量设置为区域，然后该区域可以以实体为目标。

</div>

</details>

</div>

---

## 范围

设置在 `NEARBY_PLAYERS` 目标类型中扫描附近玩家的范围。

| 数值      |          详情          |  默认值   |
|---------|:--------------------:|:------:|
| `range` | 设置扫描玩家目标的范围（以方块为单位）。 | `20.0` |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2目标为 25 方块内的玩家！"
```

当首领死亡时，这会将消息发送给首领 25 方块内的玩家。

</div>

</details>

</div>

## 位置

设置 `LOCATION` 目标类型的位置。

| 数值         |      详情       |  默认值   |
|------------|:-------------:|:------:|
| `location` | 设置将作为目标的世界位置。 | `none` |

位置使用 `location: worldname,x,y,z,pitch,yaw` 的格式。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是有效的位置，它将以首领所在的世界为目标。
**

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "myWorld,100,64,200,0,0"
```

这会在名为 `myWorld` 的世界的 x=100、y=64、z=200 的位置产生闪电。

</div>

</details>

</div>

---

## 多个位置

设置 `LOCATIONS` 目标类型的位置。

| 数值          |       详情        |  默认值   |
|-------------|:---------------:|:------:|
| `locations` | 设置将作为目标的世界位置列表。 | `none` |

位置使用 `worldname,x,y,z,pitch,yaw` 的格式。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是有效的位置，它将以首领所在的世界为目标。
**

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

这会在名为 `myWorld` 的世界的 x=100、y=64、z=200 的位置产生闪电，并在与首领相同的世界中的 x=-100、y=12 和 z=130 的位置产生另一个闪电。

</div>

</details>

</div>

---

## 目标区域

[区域]($language$/elitemobs/elitescript_zones.md) 有多个目标，了解它们的工作方式对于充分利用精英脚本至关重要。

区域分两个部分工作：

### 第 1 部分 - 设置区域的去向

区域需要知道它们应该在哪里，为此，你使用与任何其他基于位置的效果（如闪电）相同的方式使用目标系统。

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
```

这会在首领周围产生一个圆柱形区域。请注意，此示例中尚未设置任何操作，这将在下面介绍。

某些区域，如[STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)
，有两个或多个目标。这是因为射线是直线，而直线由两个点定义。这在[区域页面]($language$/elitemobs/elitescript_zones.md)
中进行了更广泛的介绍，但它们从根本上都以相同的方式工作。

</div>

</details>

</div>

### 第 2 部分 - 定位区域内部

现在区域知道它在哪里，我们需要操作知道其目标是我们定义的区域。这就是 `targetType: ZONE_FULL` 和 `targetType:ZONE_BORDER` 的用途。

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
```

使用第一部分的相同区域，我们现在添加操作。此操作的目标是 `ZONE_FULL`，这意味着它将在整个区域内部产生粒子。

请注意，并非每个区域都提供 ZONE_BORDER。有关更多信息，请参阅[脚本区域]($language$/elitemobs/elitescript_zones.md)页面。

</div>

</details>

</div>

### 区域跟踪

设置区域是否将随目标移动，例如，如果区域将随着首领移动而移动 `targetType: SELF`。

| 数值      |      详情       |  默认值   |
|---------|:-------------:|:------:|
| `track` | 设置区域是否将随目标移动。 | `true` |

请注意，可动画区域无法跟踪。[有关更多信息，请点击此处。]($language$/elitemobs/elitescript_zones.md&section=animatable)

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
```

</div>

</details>

</div>

使用第 1 部分和第 2 部分的相同示例，现在将区域设置为不跟踪。这意味着区域将生成在首领位置，但即使首领继续移动，区域也将保持在其首次生成的位置。

最后，请注意，如果将区域设置为不跟踪，它将会在脚本被调用时注册其位置。

例如，你想为你的脚本设置一个警告阶段和一个伤害阶段，你需要确保在开始时运行所有操作，并将等待时间放在所有与你想稍后单独运行的伤害相关的操作上。出于技术原因，你不应该延迟通过 `RUN_SCRIPT`
调用的整个脚本。

以下是来自冰霜宫殿圣殿的带有警告阶段和伤害阶段的技能的正确示例。

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

此脚本执行许多操作，但它被分为两个清晰的脚本：`VisualCylinder` 和 `DamageCylinder`。

`VisualCylinder` 首先运行，并且具有 `RUN_SCRIPT` 操作，该操作在 `VisualCylinder` 运行的同时立即运行 `DamageCylinder`。

但是，`DamageCylinder` 中的每个操作都设置为等待 60 个刻度，或 3 秒。

这意味着首领有 3 秒的警告阶段，然后执行伤害阶段，即使区域设置为不跟踪，警告区域和伤害区域也将位于同一位置。

### 区域特定的目标属性

区域具有以下特定属性：

#### 覆盖率

设置实际用于操作的区域百分比。仅适用于位置目标（在定位玩家或其他实体时无效）。

| 数值         |      详情       |  默认值  |
|------------|:-------------:|:-----:|
| `coverage` | 设置将被覆盖的区域百分比。 | `1.0` |

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

在这种情况下，只有 50% 的区域将覆盖粒子。

</div>

</details>

</div>

### 继承目标

当一个脚本运行另一个脚本（或“调用”该脚本）时，可以将第一个脚本的区域和目标信息传递给第二个脚本。

**示例用法**

1. **改进的脚本运行器**

脚本运行器是其唯一功能是运行许多其他脚本的脚本。它们用于使脚本管理更容易，尤其是在处理多个需要精确计时的脚本时。

通过目标继承，多个脚本可以使用相同的区域或目标，从而减少了数百行重复的脚本编写。

2. **俄罗斯套娃目标筛选/俄罗斯套娃嵌套目标筛选**

筛选条件可以应用于操作中的目标。通过将目标传递给具有不同筛选器的不同脚本，可以对条件进行分层，并根据越来越具体的条件将不同的效果应用于同一目标池。

例如，可以创建一个寻找玩家的区域，并执行一个操作来检查区域中的所有玩家是否具有特定标签。然后，可以将有效目标传递给另一个脚本，在其中，另一个操作可以运行随机检查条件，并根据该机会应用效果。然后，可以将目标进一步传递给另一个脚本，在该脚本中，另一个条件可以检查目标是否仍然活着，如果目标死了，则执行一些特殊行为。

当然，这些只是示例。这是一个高度灵活的系统。

3. **复杂区域**

最后，可以分层目标以创建复杂区域，如果需要，可以选择使用条件，甚至可以使用脚本条件和仅运行脚本操作中列出的脚本之一的能力来创建半随机区域。

**注意：**对于本节，**“父脚本”**是指运行**“继承脚本”**的脚本，即使用继承目标的脚本。
在使用目标继承时，仔细查看_父脚本_以确保正确的数据被传递下来非常重要。

#### INHERIT_SCRIPT_TARGET

使用 `INHERIT_SCRIPT_TARGET` 时，来自_父脚本_的目标将被传递到继承脚本。这有一些注意事项：

- 当传递**实体目标**时，可以运行需要位置的操作（例如生成粒子），因为将使用实体的位置。当然，也可以使用需要实体的操作。

- 当传递**位置目标**时，只能使用位置。**从位置获取实体的唯一方法是在该位置创建一个区域并寻找实体。**
  因此，虽然传递位置然后获取实体并非不可能，但这需要额外做一些工作。

#### 继承区域

使用 `INHERIT_SCRIPT_ZONE_FULL` 或 `INHERIT_SCRIPT_ZONE_BORDER` 时，_父脚本_必须定义一个区域，否则_继承脚本_将无法正确运行。

此外，区域可以选择[跟踪]($language$/elitemobs/elitescript_targets.md&section=zone-track)。这也将与区域一起传递。

- **未跟踪**的区域将始终在_继承脚本_定义的位置创建区域。这意味着_继承脚本_中的操作将使用区域设置来创建全新的区域，并且这些区域的位置将由操作定义。

- 如果将_父脚本_设置为以 `ZONE_FULL` 或 `ZONE_BORDER` 为目标，则**跟踪**区域可以将完全相同的区域位置传递给所有_继承脚本_
  。这意味着每个脚本都将在相同的位置上运行。
