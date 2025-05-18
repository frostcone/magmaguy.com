好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

```markdown
# Elite Script 目标

目标是 Elite Script 的核心部分，是动作（Actions）和区域（Zones）正常工作所必需的。

## 目标类型

目标类型设置脚本将针对哪些实体或位置。

| 目标类型                  |                                    详细信息                                     |                                                                                                   特殊说明                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | [范围]($language$/elitemobs/elitescript_targets.md&section=range)内的玩家  |                                                                需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       [范围]($language$/elitemobs/elitescript_targets.md&section=range)内的生物        |                                                                需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                世界内的玩家                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             服务器内的所有玩家                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                事件中的玩家                                |                                                                   [需要兼容的事件]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               使用能力的精英生物                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      目标是 Boss 的出生位置                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               特定位置                                |                                                             需要 [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           多个特定位置                           |                                                            需要 [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             区域内部的目标                             |                                                                        需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             区域边界的目标                             |                                                                        需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      继承动作的目标。                      |                 **只能用于动作的[条件]($language$/elitemobs/elitescript_conditions.md)和[相对向量]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     目标是方块落地的位置。                      |                                        **只能用于 [`SPAWN_FALLING_BLOCK` 动作]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           继承运行此脚本的脚本的目标            |                                                                          只有当脚本被另一个脚本调用时才能运行！                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     目标是运行此脚本的脚本继承的区域内部     |                                                 需要**调用此脚本的脚本中的** [`Zone`]($language$/elitemobs/elitescript_zones.md)！                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     目标是运行此脚本的脚本继承的区域边界     |                                                 需要**调用此脚本的脚本中的** [`Zone`]($language$/elitemobs/elitescript_zones.md)！                                                  |

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

这会向目标发送一条消息。由于目标设置为 `ALL_PLAYERS`，它将向所有在线玩家发送该消息。

</div>

</details>

</div>

---

## 共享属性

以下设置可以应用于所有目标。

| 值 | 详细信息 | 特殊说明 |
| --- | :-: | :-: |
| `offset` | 设置目标位置的偏移量。 | 不能目标实体！ |

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

这会在 Boss 上方 2 格处召唤闪电。请注意，STRIKE_LIGHTNING 使用位置，不影响实体，因此可以设置偏移量。

你不能设置偏移量来发送消息，因为消息是发送给玩家的。但是，你可以为一个区域设置偏移量，然后该区域可以目标实体。

</div>

</details>

</div>

---

## range

设置 `NEARBY_PLAYERS` 目标类型中扫描附近玩家的范围。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `range` | 设置扫描玩家目标的范围，以方块为单位。 | `20.0` |

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
        sValue: "&2Targeted players within 25 blocks!"
```

这会在 Boss 死亡时向 Boss 25 格范围内的玩家发送一条消息。

</div>

</details>

</div>

## location

设置 `LOCATION` 目标类型的位置。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `location` | 设置将被目标的世界位置。 | `none` |

这使用 `location: worldname,x,y,z,pitch,yaw` 格式来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，它将目标 Boss 所在的世界。**

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

这会在名为 `myWorld` 的世界中，位置 x=100, y=64, z=200 处召唤一道闪电。

</div>

</details>

</div>

---

## locations

设置 `LOCATIONS` 目标类型的位置列表。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `locations` | 设置将被目标的世界位置列表。 | `none` |

这使用 `worldname,x,y,z,pitch,yaw` 格式来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，它将目标 Boss 所在的世界。**

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

这会在名为 `myWorld` 的世界中，位置 x=100, y=64, z=200 处召唤一道闪电，并在 Boss 所在的世界中，位置 x=-100, y=12, z=130 处召唤另一道闪电。

</div>

</details>

</div>

---

## 目标区域

[区域]($language$/elitemobs/elitescript_zones.md)有多个目标，理解它们的工作原理对于充分利用 Elite Scripting 至关重要。

区域分两部分工作：

### 第 1 部分 - 设置区域的位置

区域需要知道它们应该在哪里，为此你使用目标系统，就像用于任何其他基于位置的效果（如闪电）一样。

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

这会在 Boss 周围生成一个圆柱形区域。请注意，此示例中尚未设置任何动作，这将在下面介绍。

某些区域，如 [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)，有两个或更多目标。这是因为射线是线，而线由两个点定义。这在[区域页面]($language$/elitemobs/elitescript_zones.md)中有更详细的介绍，但它们基本都以相同的方式工作。

</div>

</details>

</div>

### 第 2 部分 - 目标区域内部

现在区域知道它在哪里了，我们需要让动作知道它的目标是我们定义的区域。这就是 `targetType: ZONE_FULL` 和 `targetType:ZONE_BORDER` 的作用。

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

使用第一部分中的相同区域，我们现在添加动作。此动作的目标是 `ZONE_FULL`，这意味着它将在整个区域内部生成粒子。

请注意，并非所有区域都提供 ZONE_BORDER。更多信息请参阅[脚本区域]($language$/elitemobs/elitescript_zones.md)页面。

</div>

</details>

</div>

### 区域追踪

设置区域是否会随目标移动，例如当目标类型为 `SELF` 时，区域是否会随 Boss 移动。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `track` | 设置区域是否会随目标移动。 | `true` |

请注意，可动画区域无法追踪。 [更多信息在此。]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

使用第 1 部分和第 2 部分中的相同示例，区域现在设置为不追踪。这意味着区域将在 Boss 位置生成，但即使 Boss 继续移动，区域仍将停留在它首次生成的位置。

最后，请注意，如果区域设置为不追踪，它将在脚本被调用时记录其位置。

举个例子，你希望脚本有一个警告阶段和一个伤害阶段，你需要确保在开始时运行所有动作，并对所有与伤害相关的动作设置等待时间，以便稍后单独运行。出于技术原因，你不应该延迟通过 `RUN_SCRIPT` 调用的整个脚本。

以下是一个带有警告和伤害阶段的正确能力示例，取自 Frost Palace Sanctum。

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
      wait: 60 # 等待 60 刻（3 秒）
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
    - action: RUN_SCRIPT # 立即运行 DamageCylinder 脚本
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
      wait: 60 # 等待 60 刻（3 秒）
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60 # 等待 60 刻（3 秒）
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

这个脚本做了很多事情，但它被分成两个清晰的脚本：`VisualCylinder` 和 `DamageCylinder`。

`VisualCylinder` 先运行，并包含 `RUN_SCRIPT` 动作，该动作会立即同时运行 `DamageCylinder`。

然而，`DamageCylinder` 中的每个动作都设置为等待 60 刻，即 3 秒。

这意味着 Boss 有一个 3 秒的警告阶段，然后进入伤害阶段，即使区域设置为不追踪，警告区域和伤害区域也将在同一位置。

### 区域特定目标属性

区域具有以下特定属性：

#### coverage

设置区域中实际用于动作的百分比。仅适用于位置目标（不适用于目标玩家或其他实体）。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `coverage` | 设置将被覆盖的区域百分比。你可以使用 `~` 来随机化此值，例如：`1.0~0.3`。 | `1.0` |

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
        coverage: 0.5 # 仅覆盖区域的 50%
```

在这种情况下，只有 50% 的区域会被粒子覆盖。

</div>

</details>

</div>

### 继承目标

当一个脚本运行另一个脚本（或“调用”该脚本）时，可以将区域和目标信息从第一个脚本传递给第二个脚本。

**示例用途**

1. **改进的脚本运行器**

脚本运行器是其唯一功能是运行许多其他脚本的脚本。它们用于使脚本管理更容易，尤其是在处理需要精确计时的多个脚本时。

通过目标继承，多个脚本可以使用相同的区域或目标，从而减少潜在的数百行重复脚本。

2. **套娃目标过滤 / 俄罗斯套娃目标过滤**

过滤条件可以应用于动作中的目标。通过将目标传递给具有不同过滤器的不同脚本，可以分层应用条件，并根据越来越具体的标准对同一目标池应用不同的效果。

例如，可以创建一个查找玩家的区域，并创建一个检查区域中所有玩家是否具有特定标签的动作。然后可以将有效目标传递给另一个脚本，在该脚本中，另一个动作可以运行随机检查条件并根据该几率应用效果。然后可以将目标进一步传递给另一个脚本，在该脚本中，另一个条件可以检查目标是否仍然存活，并在它们死亡时执行一些特殊行为。
```Please specify the language you would like the text translated into. I will then translate it, making sure to retain the markdown formatting.