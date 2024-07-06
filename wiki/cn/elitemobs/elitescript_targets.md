# Elite 脚本目标

目标是 Elite 脚本的核心部分，是动作和区域工作所必需的。

## 目标类型

目标类型设置了脚本将定位哪些实体或位置。

| 目标类型                     | 详细信息                                                                        | 特殊                                                                                                                                                                                           |
|------------------------------|:--------------------------------------------------------------------------------:|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `附近玩家`                  | [范围]($language$/elitemobs/elitescript_targets.md&section=range) 内的玩家。      | 需要 [`范围`]($language$/elitemobs/elitescript_targets.md&section=range)。                                                                                                                              |
| `附近怪物`                 | [范围]($language$/elitemobs/elitescript_targets.md&section=range) 内的怪物。      | 需要 [`范围`]($language$/elitemobs/elitescript_targets.md&section=range)。                                                                                                                              |
| `世界玩家`                  | 世界中的玩家。                                                               | ❌                                                                                                                                                                                            |
| `所有玩家`                 | 服务器中的玩家。                                                               | ❌                                                                                                                                                                                            |
| `直接目标`                  | 事件中的玩家。                                                               | [需要兼容的事件]($language$/elitemobs/elitescript_events.md)。                                                                                                                                 |
| `自身`                      | 使用力量的精英。                                                               | ❌                                                                                                                                                                                            |
| `自身生成点`                | 以 Boss 的生成位置为目标。                                                    | ❌                                                                                                                                                                                            |
| `位置`                      | 特定的位置。                                                               | 需要 [`位置`]($language$/elitemobs/elitescript_targets.md&section=location)。                                                                                                                           |
| `位置列表`                  | 多个特定的位置。                                                               | 需要 [`位置列表`]($language$/elitemobs/elitescript_targets.md&section=locations)。                                                                                                                         |
| `区域_完整`                 | 以区域内部为目标。                                                               | 需要 [`区域`]($language$/elitemobs/elitescript_zones.md)。                                                                                                                                       |
| `区域_边界`                 | 以区域边界为目标。                                                               | 需要 [`区域`]($language$/elitemobs/elitescript_zones.md)。                                                                                                                                       |
| `动作目标`                  | 继承动作中的目标。                                                             | **只能用于动作 [条件]($language$/elitemobs/elitescript_conditions.md) 和 [相对向量]($language$/elitemobs/elitescript_relative_vectors.md)！！**                                                 |
| `着陆位置`                | 以方块掉落的位置为目标。                                                        | **只能用于 [`SPAWN_FALLING_BLOCK` 动作]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)！**                                                                      |
| `继承_脚本_目标`             | 继承运行此脚本的脚本中的目标。                                                     | 仅当脚本由另一个脚本调用时才能运行！                                                                                                                                                      |
| `继承_脚本_区域_完整`    | 以运行此脚本的脚本继承的区域内部为目标。                                       | 需要**在调用此脚本的脚本中**设置 [`区域`]($language$/elitemobs/elitescript_zones.md)！                                                                                                                |
| `继承_脚本_区域_边界`    | 以运行此脚本的脚本继承的区域边界为目标。                                       | 需要**在调用此脚本的脚本中**设置 [`区域`]($language$/elitemobs/elitescript_zones.md)！                                                                                                                |

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
      - action: 消息
        目标:
          目标类型: 所有玩家
        sValue: "&2你好，世界！"
```

这会向目标发送一条消息。由于目标设置为 `所有玩家`，因此它将向所有在线玩家发送该消息。

</div>

</details>

</div>

---

## 共享属性

以下设置可以应用于所有目标。

| 值       | 详细信息                                      | 特殊               |
|-----------|:--------------------------------------------:|----------------------|
| `offset` | 设置目标位置的偏移量。                         | 不能以实体为目标！ |

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
    - action: 召唤闪电
      目标:
        目标类型: 自身
        offset: "0,2,0"
```

这会在 Boss 上方 2 个方块处召唤闪电。请注意，召唤闪电使用位置，不影响实体，因此可以具有偏移量。

您不能设置偏移量来发送消息，因为消息是发送给玩家的。但是，您可以为区域设置偏移量，然后以实体为目标。

</div>

</details>

</div>

---

## 范围

在 `附近玩家` 目标类型中设置要扫描附近玩家的范围。

| 值      | 详细信息                                               | 默认值  |
|----------|:------------------------------------------------------:|---------|
| `范围` | 设置以方块为单位的扫描玩家目标的范围。                 | `20.0` |

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
      - action: 消息
        目标:
          目标类型: 附近玩家
          范围: 25.0
        sValue: "&2以 25 个方块内的玩家为目标！"
```

这会在 Boss 死亡时向距离 Boss 25 个方块内的玩家发送消息。

</div>

</details>

</div>

## 位置

为 `位置` 目标类型设置位置。

| 值       | 详细信息                       | 默认值 |
|-----------|:----------------------------------:|--------|
| `位置` | 设置将作为目标的世界位置。       | `none` |

这使用格式 `location: 世界名称,x,y,z,俯仰角,偏航角` 来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，它将以与 Boss 所在世界相同的世界为目标。**

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
    - action: 召唤闪电
      目标:
        目标类型: 位置
        位置: "我的世界,100,64,200,0,0"
```

这将在名为 `我的世界` 的世界的 x=100、y=64、z=200 位置生成雷击。

</div>

</details>

</div>

---

## 位置列表

为 `位置列表` 目标类型设置位置。

| 值          | 详细信息                         | 默认值 |
|--------------|:------------------------------------:|--------|
| `位置列表` | 设置将作为目标的世界位置列表。         | `none` |

这使用格式 `世界名称,x,y,z,俯仰角,偏航角` 来表示位置。

**请注意，`same_as_boss` 是世界名称的有效占位符，例如 `same_as_boss,100,64,100,0,0` 将是一个有效位置，它将以与 Boss 所在世界相同的世界为目标。**

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
    - action: 召唤闪电
      目标:
        目标类型: 位置列表
        位置列表:
        - "我的世界,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

这将在名为 `我的世界` 的世界的 x=100、y=64、z=200 位置生成雷击，并在与 Boss 相同的世界中 x=-100、y=12 和 z=130 位置生成另一个雷击。

</div>

</details>

</div>

---

## 定位区域

[区域]($language$/elitemobs/elitescript_zones.md) 具有多个目标，为了充分利用 Elite 脚本，了解它们的工作原理非常重要。

区域分为两部分工作：

### 第 1 部分 - 设置区域的位置

区域需要知道它们应该在哪里，为此，您可以像使用任何其他基于位置的效果（例如雷击）一样使用目标系统。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  可视圆柱体:
    事件:
    - EliteMobDamagedEvent
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 1
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
```

这会在 Boss 周围生成一个圆柱形区域。请注意，此示例中尚未设置任何动作，这将在下面介绍。

某些区域（例如 [静态光线]($language$/elitemobs/elitescript_zones.md&section=static_ray)）有两个或多个目标。这是因为光线是线，而线由两点定义。这在 [区域页面]($language$/elitemobs/elitescript_zones.md) 中有更详细的介绍，但它们基本上都以相同的方式工作。

</div>

</details>

</div>

### 第 2 部分 - 定位区域内部

现在区域知道了它的位置，我们需要让动作知道它的目标是我们定义的区域。这就是 `targetType: 区域_完整` 和 `targetType: 区域_边界` 的用途。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  可视圆柱体:
    事件:
    - EliteMobDamagedEvent
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 1
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
    动作:
    - action: 生成粒子
      times: 12
      repeatEvery: 5
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
```

使用第 1 部分中的相同区域，我们现在添加动作。此动作的目标是 `区域_完整`，这意味着它将在整个区域内部生成粒子。

请注意，并非所有区域都提供 ZONE_BORDER。有关更多信息，请参阅 [脚本区域]($language$/elitemobs/elitescript_zones.md) 页面。

</div>

</details>

</div>

### 区域追踪

设置区域是否会随目标移动，例如，如果区域将在 Boss 移动时移动（对于 `targetType: 自身`）。

| 值      | 详细信息                                       | 默认值 |
|----------|:---------------------------------------------:|--------|
| `追踪` | 设置区域是否会随目标移动。                       | `true` |

请注意，可动画区域无法追踪。[在此处了解更多信息。]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  可视圆柱体:
    事件:
    - EliteMobDamagedEvent
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 1
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
    动作:
    - action: 生成粒子
      times: 12
      repeatEvery: 5
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        追踪: false
```

</div>

</details>

</div>

使用第 1 部分和第 2 部分中的相同示例，现在将区域设置为不追踪。这意味着该区域将在 Boss 位置生成，但即使 Boss 继续移动，该区域仍将保留在它最初生成的位置。

最后，请注意，如果区域设置为不追踪，它将在调用脚本时注册其位置。

例如，您希望您的脚本具有警告阶段和伤害阶段，您需要确保在开始时运行所有动作，并为稍后要单独运行的所有与伤害相关的动作设置等待时间。出于技术原因，您不应该延迟通过 `RUN_SCRIPT` 调用的整个脚本。

以下是来自寒冰宫殿圣殿的具有警告和伤害阶段的力量的正确示例。

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  可视圆柱体:
    事件:
    - EliteMobDamagedEvent
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 1
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
    动作:
    - action: 生成粒子
      times: 12
      repeatEvery: 5
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        追踪: false
    - action: 生成粒子
      wait: 60
      times: 13
      repeatEvery: 3
      粒子:
      - particle: 火焰
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: 火焰
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      目标:
        目标类型: 区域_完整
        追踪: false
    - action: 运行脚本
      scripts:
      - 伤害圆柱体
    - action: 播放动画
      sValue: fire_zone
      目标:
        目标类型: 自身
    - action: 设置_怪物_AI
      duration: 100
      bValue: false
      目标:
        目标类型: 自身
    冷却时间:
      本地: 1200
      全局: 300
  伤害圆柱体:
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 10
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
        offset: 0,-1,0
    动作:
    - action: 伤害
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      目标:
        目标类型: 区域_完整
        追踪: false
    - action: 点燃
      wait: 60
      duration: 80
      目标:
        目标类型: 区域_完整
        追踪: false
```

</div>

</details>

</div>

此脚本执行很多操作，但它分为两个清晰的脚本：`可视圆柱体` 和 `伤害圆柱体`。

可视圆柱体首先运行，并具有 `运行脚本` 动作，该动作会在 `可视圆柱体` 运行的同时立即运行 `伤害圆柱体`。

但是，`伤害圆柱体` 中的每个动作都设置为等待 60 滴答，即 3 秒。

这意味着 Boss 有 3 秒的警告阶段，然后进入伤害阶段，即使区域设置为不追踪，警告区域和伤害区域也将位于同一位置。

### 区域特定目标属性

区域具有以下特定属性：

#### 覆盖范围

设置实际用于动作的区域的百分比。仅适用于位置目标（不适用于以玩家或其他实体为目标）。

| 值         | 详细信息                                | 默认值  |
|-------------|:----------------------------------------:|---------|
| `覆盖范围` | 设置将覆盖的区域的百分比。          | `1.0` |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  可视圆柱体:
    事件:
    - EliteMobDamagedEvent
    区域:
      半径: 10.0
      形状: 圆柱体
      高度: 1
      过滤器: 玩家
      圆角半径: 5.0
      目标:
        目标类型: 自身
    动作:
    - action: 生成粒子
      times: 12
      repeatEvery: 5
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 0.5
```

在这种情况下，只有 50% 的区域会被粒子覆盖。

</div>

</details>

</div>

### 继承目标

当一个脚本运行另一个脚本（或“调用”该脚本）时，可以将区域和目标信息从第一个脚本传递到第二个脚本。

**示例用途**

1. **改进的脚本运行器**

脚本运行器是其唯一功能是运行许多其他脚本的脚本。它们用于使管理脚本更容易，尤其是在处理需要精确计时的多个脚本时。

通过目标继承，多个脚本可以使用相同的区域或目标，从而减少了数百行重复脚本的可能性。

2. **俄罗斯套娃目标过滤**

过滤条件可以应用于动作中的目标。通过将目标传递给具有不同过滤器的不同脚本，可以对条件进行分层，并根据越来越具体的标准对同一目标池应用不同的效果。

例如，可以创建一个寻找玩家的区域，并创建一个动作来检查区域中的所有玩家是否具有特定标签。然后，可以将有效目标传递给另一个脚本，在该脚本中，另一个动作可以运行随机检查条件，并根据该几率应用效果。然后，可以将目标进一步传递给另一个脚本，在该脚本中，另一个条件可以检查目标是否仍然活着，并在它们死亡时执行一些特殊行为。

当然，这些只是示例。这是一个高度灵活的系统。

3. **复杂区域**

最后，可以对目标进行分层以创建复杂区域，如有必要，可以选择使用条件，甚至可以使用脚本条件和仅从脚本动作中运行列出的一个脚本的功能来创建半随机区域。

**注意**：对于本节，**“父脚本”**是指运行 **“继承脚本”** 的脚本，它是将使用继承目标的脚本。

使用目标继承时，请务必仔细查看 _父脚本_ 以确保正确的数据被传递下来。

#### 继承_脚本_目标

使用 `继承_脚本_目标` 时，_父脚本_ 中的目标将传递给继承脚本。这有一些注意事项：

- 传递 **实体目标** 时，可以运行需要位置的动作（例如生成粒子），因为将使用实体的位置。当然，也可以使用需要实体的动作。

- 传递 **位置目标** 时，只能使用位置。**从位置获取实体的唯一方法是在该位置创建区域并寻找实体。** 因此，虽然传递位置然后获取实体并非不可能，但需要一些额外的工作。


#### 继承区域

使用 `继承_脚本_区域_完整` 或 `继承_脚本_区域_边界` 时，_父脚本_ 必须定义一个区域，否则 _继承脚本_ 将无法正确运行。

此外，还可以选择对区域进行 [追踪]($language$/elitemobs/elitescript_targets.md&section=zone-track)。这也将与区域一起传递。

- **未追踪** 的区域将始终在 _继承脚本_ 定义的位置创建一个区域。这意味着 _继承脚本_ 中的动作将使用区域设置来每次运行动作时创建全新的区域，并且这些区域的位置将由动作定义。

- 如果 _父脚本_ 设置为以 `区域_完整` 或 `区域_边界` 为目标，则 **追踪** 的区域可以将完全相同的区域位置传递给所有 _继承脚本_。这意味着每个脚本都将在相同的位置上运行。