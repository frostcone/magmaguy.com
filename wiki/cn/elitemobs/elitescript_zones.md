好的，我会将输入的文本翻译成简体中文，并保留 Markdown 格式。

```markdown
# 精英脚本区域 (Elite Script Zones)

区域是由形状定义的地点，脚本编写者可以将其用作目标来运行任何类型的动作。

每个脚本只能设置一个区域。

要将区域作为目标，可以使用目标类型 `ZONE_FULL` 或 `ZONE_BORDER`。

区域本身也使用 [脚本目标 (Script Targets)]($language$/elitemobs/elitescript_targets.md) 来定义区域将出现在哪里。

## shape (形状)

设置区域的形状。有效形状：

| 形状类型                                                               | 详情 | 可动画 | 边界 |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | 圆柱形 | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | 球形 | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | 圆顶形 (半球) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | 长方体形 (类似立方体) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | 两点之间的固定直线 | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | 两点之间的旋转直线 | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 在两个初始点和两个最终点之间移动的直线 | ✅ | ❌ |

---

#### Animatable (可动画)

可动画区域在脚本首次调用时开始区域动画。

这意味着如果一个动作有等待时间，当动作开始时，区域在动作等待期间已经一直在移动。

区域始终在每个 tick 进行动画。这意味着如果您使用 `SPAWN_PARTICLES` 动作，您可以将其设置为每 tick 运行，因为区域会每 tick 移动。如果您每秒运行一次，您会看到粒子跳跃，因为区域即使在未生成粒子的 tick 也在移动。

如果您想制作一个旋转区域动作，但想在开始动作前等待设定的 tick 数，请将其制作成一个不同的脚本，并通过 `RUN_SCRIPT` 调用该脚本。确保 `RUN_SCRIPT` 具有您想要的等待时间。

区域动画完成后将停留在最终位置。

所有可动画区域都被设置为不在脚本目标上进行跟踪，因为额外的移动会使脚本编写者和玩家难以理解。这意味着这些区域不会跟随 Boss 或玩家移动，并且始终相对于其初始生成点移动。

---

#### Border (边界)

某些区域可以有边界。边界意味着 `ZONE_BORDER` 可以用作区域的目标。边界是通过在第一个较大形状内创建第二个较小形状来定义的。较小区域和较大区域之间的区域就是边界。

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

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
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_LARGE
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

此脚本生成烟雾粒子，这些粒子**仅**出现在区域边界内，持续 5 秒 (repeat every 5 x times 20 = 100 ticks)。

如果您不使用 `ZONE_BORDER` 选项，而是使用 `ZONE_FULL` 选项，那么整个区域都会被烟雾粒子覆盖，如下所示：

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE (球形)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置球体中心的坐标 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| `radius`                                                    | 球体的半径 | ✅ |
| `borderRadius`                                              | 内部球体的半径 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_sphere.jpg](../../../img/wiki/elitescript_zones_sphere.jpg)

</div>

此脚本使用云粒子演示了球体的形状。

</div>

</details>

</div>

---

### DOME (圆顶形)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置圆顶中心的坐标 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| `radius`                                                    | 圆顶的半径 | ✅ |
| `borderRadius`                                              | 内部圆顶的半径 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_dome.jpg](../../../img/wiki/elitescript_zones_dome.jpg)

</div>

此脚本使用云粒子演示了圆顶的形状。

</div>

</details>

</div>

---

### CYLINDER (圆柱形)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置圆柱体中心的坐标 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| `radius`                                                    | 圆柱体的半径 | ✅ |
| `borderRadius`                                              | 内部圆柱体的半径 | ❌ |
| `height`                                                    | 圆柱体的高度 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

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
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cylinder.jpg](../../../img/wiki/elitescript_zones_cylinder.jpg)

</div>

此脚本使用云粒子演示了圆柱体的形状。

</div>

</details>

</div>

---

### CUBOID (长方体形)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置长方体中心的坐标 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| `x`                                                         | 设置长方体的长度 | ✅ |
| `y`                                                         | 设置长方体的高度 | ✅ |
| `z`                                                         | 设置长方体的宽度，默认为 `x` | ❌ |
| `xBorder`                                                   | 设置内部长方体的长度 | ❌ |
| `yBorder`                                                   | 设置内部长方体的高度 | ❌ |
| `zBorder`                                                   | 设置内部长方体的宽度，默认为 `x` | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

此脚本使用云粒子演示了长方体的形状。

</div>

</details>

</div>

---

### STATIC_RAY (静态射线)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置直线的第一个点的坐标 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 设置直线的最后一个点的坐标 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| `ignoresSolidBlocks`                                        | 设置射线是否穿过固体方块 | ❌ |
| `pointRadius`                                               | 设置射线的粗细。默认为 0.5 方块。 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

此脚本使用云粒子演示了静态射线的形状。

我们通过在区域的两端使用 `offset` 选项调整了区域的高度，使射线从玩家和 Boss 的中间出现，否则射线会出现在他们的脚下。

</div>

</details>

</div>

---

### ROTATING_RAY (旋转射线)

| Key (键)                                                    | Details (详情) | Mandatory (强制) |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体会被作为目标 | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置直线的第一个点的坐标 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 设置直线的最后一个点的坐标 | ✅ |
| `animationDuration`                                         | 设置旋转的持续时间，单位为 tick | ✅ |
| `pitchPreRotation`                                          | 在动画前对俯仰角应用初始旋转 | ❌ |
| `yawPreRotation`                                            | 在动画前对偏航角应用初始旋转 | ❌ |
| `pitchRotation`                                             | 设置动画的俯仰角旋转 | ❌ |
| `yawRotation`                                               | 设置动画的偏航角旋转 | ❌ |
| `ignoresSolidBlocks`                                        | 设置射线是否穿过固体方块 | ❌ |
| `pointRadius`                                               | 设置射线的粗细。默认为 0.5 方块。 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: ROTATING_RAY
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      Target:
        targetType: SELF
        offset: 0,1,0
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

此脚本使用云粒子展示了旋转射线的样子。

首先，它使用云粒子创建一条从 Boss 到伤害它的玩家的射线。然后，它使用 `offset` 将位置向上稍微调整一个方块。

接下来，它围绕被作为目标的玩家将射线旋转一整圈。此旋转持续 5 秒 (100 ticks) 完成，以被作为目标的玩家为中心。

</div>

</details>

</div>

---

### TRANSLATING_RAY (平移射线)

| Key (键)                                                         | Details (详情) | Mandatory (强制) |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | 设置区域的形状。应为 `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置哪些类型的实体会被作为目标 | ❌ |
| `animationDuration`                                          | 设置平移的持续时间，单位为 tick | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | 设置直线的第一个点的坐标 | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | 设置直线第一个点的目标坐标 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | 设置直线的第二个点的坐标 | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | 设置直线第二个点的目标坐标 | ✅ |
| `ignoresSolidBlocks`                                         | 设置射线是否穿过固体方块 | ❌ |
| `pointRadius`                                                | 设置射线的粗细。默认为 0.5 方块。 | ❌ |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
      FinalTarget:
        targetType: SELF
        offset: 0,10,0
      Target2:
        targetType: DIRECT_TARGET
      FinalTarget2:
        targetType: DIRECT_TARGET
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

此脚本使用云粒子展示了平移射线的样子。

首先，它使用云粒子创建一条从 Boss 到伤害它的玩家的射线。

然后，它通过在 `FinalTarget1` 和 `FinalTarget2` 上使用 `offset`，将射线从两个目标向上动画移动 10 个方块。

动画需要 5 秒 (100 ticks) 完成。

我们可以通过调整 Z `offset` 到类似 `offset: 0,0,10` 来轻松地使射线横向移动：

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

这种行为可能会根据您在游戏中的朝向而改变。
<br>如果我们修改 GIF 图像中所示脚本的 X `offset`，从我们的视角看，射线会沿着直线向我们远离的方向移动。

</div>

</details>

---

## filter (过滤器)

`filter` 属性可用于仅将区域内的特定实体作为目标。这些实体可以是：

| Value (值) | Details (详情) |
| --- | :-: |
| `PLAYER` | 仅将区域内的玩家作为目标 (默认) |
| `ELITE` | 仅将区域内的精英怪作为目标 |
| `LIVING` | 将区域内的所有活体实体作为目标 |

<div align="center">

<details> 

<summary><b>示例 (Example)</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: SPHERE
      radius: 12
      borderRadius: 11
      filter: ELITE
      Target:
        targetType: SELF
        track: false
```

此示例脚本展示了如何使用过滤器使区域仅将精英怪作为目标。

</div>
```