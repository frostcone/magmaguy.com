[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 目标

目标是 Elite Script 的核心部分，并且是操作和区域正常工作所必需的。

## 目标类型

目标类型设置脚本定位的实体或位置。

| 目标类型                 |                                    详细信息                                    |                                                                                                   特殊                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             |      [范围]($language$/elitemobs/elitescript_targets.md&section=range) 中的玩家      |                                                                  需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                  |
| `NEARBY_MOBS`                |         [范围]($language$/elitemobs/elitescript_targets.md&section=range) 中的生物        |                                                                  需要 [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                  |
| `WORLD_PLAYERS`              |                                   世界中的玩家                                 |                                                                                                    ❌                                                                                                      |
| `ALL_PLAYERS`                |                                   服务器中的玩家                                 |                                                                                                    ❌                                                                                                      |
| `DIRECT_TARGET`              |                                   事件中的玩家                                 |                                                                  [需要兼容事件]($language$/elitemobs/elitescript_events.md)                                                                  |
| `SELF`                       |                             使用能力的首领                             |                                                                                                    ❌                                                                                                      |
| `SELF_SPAWN`                 |                             目标首领的生成位置                            |                                                                                                    ❌                                                                                                      |
| `LOCATION`                   |                                    特定位置                                    |                                                             需要 [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                            多个特定位置                            |                                                            需要 [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                                区域内的目标                                |                                                                        需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                                区域边界的目标                                |                                                                        需要 [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                           继承操作中的目标。                           |                **只能用于操作[条件]($language$/elitemobs/elitescript_conditions.md)和[相对向量]($language$/elitemobs/elitescript_relative_vectors.md)！**                |
| `LANDING_LOCATION`           |                           目标方块坠落的位置。                           |                                         **只能用于 [`SPAWN_FALLING_BLOCK` 操作]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)！**                                         |
| `INHERIT_SCRIPT_TARGET`      |           继承运行此脚本的脚本中的目标            |                                                                          只有当脚本被另一个脚本调用时才能运行！                                                                          |
| `INHERIT_SCRIPT_ZONE_FULL`   |     目标从运行此脚本的脚本继承的区域内部     |                                                 需要在调用此脚本的脚本中使用 [`Zone`]($language$/elitemobs/elitescript_zones.md)！                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     目标从运行此脚本的脚本继承的区域边界     |                                                 需要在调用此脚本的脚本中使用 [`Zone`]($language$/elitemobs/elitescript_zones.md)！                                                  |

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
        sValue: "&2你好，世界！"
```

这会将消息发送到目标。由于目标设置为 `ALL_PLAYERS`，它会将该消息发送给所有在线玩家。

</div>

</details>

</div>

---

## 共享属性

以下设置可以应用于所有目标。

| 值 | 详细信息 | 特殊 |
| --- | :-: | :-: |
| `offset` | 设置目标位置的偏移量。 | 无法定位实体！ |

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

这会在首领上方 2 个方块处产生闪电。请注意，STRIKE_LIGHTNING 使用位置并且不影响实体，因此它可以使用偏移量。

您不能设置偏移量来发送消息，因为消息是发送给玩家的。但是，您可以为可以定位实体的区域设置偏移量。

</div>

</details>

</div>

---

## range

设置扫描 `NEARBY_PLAYERS` 目标类型中附近玩家的范围。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
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
        sValue: "&2目标是 25 个方块内的玩家！"
```

这会在首领死亡时向距首领 25 个方块内的玩家发送消息。

</div>

</details>

</div>

## location

为 `LOCATION` 目标类型设置位置。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `location` | 设置将成为目标的世界位置。 | `无` |

这使用格式 `location: worldname,x,y,z,pitch,yaw` 来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，会将目标设置为与首领所在的世界相同的世界。**

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

这将使闪电在名为 `myWorld` 的世界的 x=100、y=64、z=200 的位置生成。

</div>

</details>

</div>

---

## locations

为 `LOCATIONS` 目标类型设置位置。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `locations` | 设置将成为目标的世界位置列表。 | `无` |

这使用格式 `worldname,x,y,z,pitch,yaw` 来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，会将目标设置为与首领所在的世界相同的世界。**

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

这将使闪电在名为 `myWorld` 的世界的 x=100、y=64、z=200 的位置生成，并在与首领位于同一世界中 x=-100、y=12 和 z=130 的位置生成另一个闪电。

</div>

</details>

</div>

---

## 定位区域

[区域]($language$/elitemobs/elitescript_zones.md)具有多个目标，并且了解它们的工作原理非常重要，以便最大限度地利用 Elite Scripting。

区域分两部分工作：

### 第 1 部分 - 设置区域的去向

区域需要知道它们应该在哪里，并且为此，您可以使用与任何其他基于位置的效果（如闪电）相同的方式使用目标系统。

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

这将在首领周围生成一个圆柱形区域。请注意，在此示例中尚未设置任何操作，这将在下面介绍。

某些区域（例如 [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray)）具有两个或多个目标。这是因为射线是线，而线由两个点定义。这在[区域页面]($language$/elitemobs/elitescript_zones.md)中有更详尽的介绍，但它们从根本上都以相同的方式工作。

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

使用第一部分中的相同区域，我们现在添加操作。此操作的目标是 `ZONE_FULL`，这意味着它将在整个区域内生成粒子。

请注意，并非所有区域都提供 ZONE_BORDER。有关更多信息，请参见[脚本区域]($language$/elitemobs/elitescript_zones.md)页面。

</div>

</details>

</div>

### 区域跟踪

设置该区域是否将与目标一起移动，例如，如果区域在首领因 `targetType: SELF` 而移动时是否将随之移动。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `track` | 设置区域是否将随目标一起移动。 | `true` |

请注意，可动画的区域无法跟踪。[有关更多信息，请参见此处。]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

使用第 1 部分和第 2 部分的相同示例，该区域现在设置为不跟踪。这意味着该区域将在首领位置生成，但即使首领不断移动，该区域也将保持在其首次生成的位置。

最后，请注意，如果将某个区域设置为不跟踪，它将记录在调用脚本时所在的位置。

例如，您希望为脚本设置一个警告阶段和一个伤害阶段，您需要确保在开始时运行所有操作，并将等待时间设置为所有与您希望稍后单独运行的伤害相关的操作。出于技术原因，您不应延迟通过 `RUN_SCRIPT` 调用的整个脚本。

以下是摘自冰霜宫殿圣所的一个具有警告和伤害阶段的能力的正确示例。

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

此脚本执行许多操作，但它分为两个清晰的脚本：`VisualCylinder` 和 `DamageCylinder`。

`VisualCylinder` 首先运行，并具有 `RUN_SCRIPT` 操作，该操作会立即运行 `DamageCylinder`，同时 `VisualCylinder` 也在运行。

但是，`DamageCylinder` 中的每个操作都设置为等待 60 个刻度或 3 秒。

这意味着首领有一个 3 秒的警告阶段，然后执行一个伤害阶段，并且即使区域设置为不跟踪，警告区域和伤害区域也将位于同一位置。

### 特定于区域的目标属性

区域具有以下特定属性：

#### coverage

设置将实际用于操作的区域的百分比。仅适用于位置目标（在定位玩家或其他实体时无效）。

| 值 | 详细信息 | 默认值 |
| --- | :-: | :-: |
| `coverage` | 设置将覆盖的区域的百分比。 | `1.0` |

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

当一个脚本运行另一个脚本（或“调用”该脚本）时，可以将区域和目标信息从第一个脚本传递到第二个脚本。

**示例用法**

1. **改进的脚本运行器**

脚本运行器是其唯一功能是运行大量其他脚本的脚本。它们用于简化脚本管理，尤其是在处理需要精确计时的多个脚本时。

通过目标继承，多个脚本可以使用相同的区域或目标，从而减少了数百行可能重复的脚本编写。

2. **套娃式目标筛选/俄罗斯套娃式目标筛选**

可以将筛选条件应用于操作中的目标。通过将目标传递到具有不同筛选器的另一个脚本，可以对同一目标池中的目标根据越来越具体的条件进行分层，并应用不同的效果。

例如，可以创建一个查找玩家的区域，并创建一个操作来检查区域中的所有玩家是否具有特定标签。然后，可以将有效目标传递到另一个脚本，其中另一个操作可以运行随机检查条件，并根据该机会应用效果。然后，可以将目标进一步传递到另一个脚本，在其中，另一个条件可以进行检查，以查看目标是否仍然存活，如果它们已死亡，则执行一些特殊行为。

当然，这些只是示例。它是一个高度灵活的系统。

3. **复杂区域**

最后，可以分层目标以创建复杂的区域，如果需要，可以选择使用条件，甚至可以使用脚本条件和仅运行脚本操作中列出的一个脚本的功能来创建半随机区域。

**注意：** 在本节中，**“父脚本”** 指的是运行 **“继承脚本”** 的脚本，后者是将使用继承目标的脚本。
当使用目标继承时，请务必仔细查看*父脚本*，以确保将正确的数据传递下来。

#### INHERIT_SCRIPT_TARGET

当使用 `INHERIT_SCRIPT_TARGET` 时，来自*父脚本*的目标将传递到继承脚本。这有一些注意事项：

- 在传递**实体目标**时，可以运行需要位置的操作（例如生成粒子），因为将使用实体的位置。当然，也可以使用需要实体的操作。

- 在传递**位置目标**时，只能使用位置。**从位置获取实体的唯一方法是在该位置创建一个区域并查找实体。** 因此，虽然传递位置然后获取实体并非不可能，但这需要做一些额外的工作。

#### 继承区域

当使用 `INHERIT_SCRIPT_ZONE_FULL` 或 `INHERIT_SCRIPT_ZONE_BORDER` 时，必须使*父脚本*定义一个区域，否则*继承脚本*将无法正常运行。

此外，区域可以选择[跟踪]($language$/elitemobs/elitescript_targets.md&section=zone-track)。这也会随区域一起传递。

- **未跟踪**的区域将始终在*继承脚本*定义的位置创建一个区域。这意味着该区域设置将由*继承脚本*中的操作使用，以便在每次操作运行时创建全新的区域，并且这些区域的位置将由操作定义。

- 如果*父脚本*设置为目标 `ZONE_FULL` 或 `ZONE_BORDER`，**跟踪**的区域可以将完全相同的区域位置传递给所有*继承脚本*。这意味着每个脚本都将在相同的位置上运行。
