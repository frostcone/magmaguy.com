# 精英脚本区域

区域是由形状定义的位置，脚本编写者可以使用它们作为目标来运行任何类型的操作。

每个脚本只能设置一个区域。

要以区域为目标，可以使用目标类型 `ZONE_FULL` 或 `ZONE_BORDER`。

区域本身也使用 [脚本目标]($language$/elitemobs/elitescript_targets.md) 来定义区域的出现位置。

## 形状

设置区域的形状。有效形状：

| 形状类型                                                                                   |         详情          | 可动画化 | 边框 |
|----------------------------------------------------------------------------------------|:-------------------:|:----:|:--:|
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)               |         圆柱形         |  ❌   | ✅  |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)                   |         球形          |  ❌   | ✅  |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                       |       圆顶形（半球）       |  ❌   | ✅  |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)                   |     立方体形（类似立方体）     |  ❌   | ✅  |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)           |      两点之间的固定直线      |  ❌   | ❌  |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray)       |      两点之间的旋转直线      |  ✅   | ❌  |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 在两个初始点和两个最终点之间移动的直线 |  ✅   | ❌  |

---

#### 可动画化

带有动画的区域在首次调用脚本时开始区域动画。

这意味着如果一个动作有等待时间，那么当动作开始时，区域已经在等待时移动了。

区域始终在每个刻度上动画化。这意味着如果你使用 `SPAWN_PARTICLES`
动作，你可以将其设置为每刻度运行，因为区域会每刻度移动。如果你每秒运行，你会看到粒子跳来跳去，因为区域即使在没有生成粒子的刻度上也在移动。

如果你想制作一个旋转区域动作，但想等待一段设定的刻度数后再开始动作，请将其作为一个单独的脚本，并通过 `RUN_SCRIPT`
调用该脚本。请确保 `RUN_SCRIPT` 具有你想要的等待时间。

区域在完成动画后会停留在最终位置。

所有可动画化区域都设置为不跟踪脚本目标，因为额外的移动会使脚本编写者和玩家都难以理解。这意味着这些区域不会跟随 Boss
或玩家移动，并且始终会相对于其初始生成点移动。

---

#### 边框

某些区域可以有边框。边框意味着 `ZONE_BORDER` 可以用作区域的目标。边框是通过在第一个较大的形状内创建第二个较小的形状来定义的。较小区域和较大区域之间的区域是边框。

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

此脚本会生成 **仅** 出现在区域边框中的烟雾粒子，持续 5 秒（每 5 次重复 x 20 次 = 100 个刻度）。

如果你不使用 `ZONE_BORDER` 选项，而是使用 `ZONE_FULL` 选项，则整个区域将覆盖烟雾粒子，如下所示：

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| 键                                                                    |         详情          | 必需 |
|----------------------------------------------------------------------|:-------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `SPHERE` | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |     设置球体中心的所在地      | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |      设置目标实体类型       | ❌  |
| `radius`                                                             |        球体的半径        | ✅  |
| `borderRadius`                                                       |       内部球体的半径       | ❌  |

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

此脚本使用云粒子演示球体的形状。

</div>

</details>

</div>

---

### DOME

| 键                                                                    |        详情         | 必需 |
|----------------------------------------------------------------------|:-----------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `DOME` | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |    设置圆顶中心的所在地     | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |     设置目标实体类型      | ❌  |
| `radius`                                                             |       圆顶的半径       | ✅  |
| `borderRadius`                                                       |      内部圆顶的半径      | ❌  |

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

此脚本使用云粒子演示圆顶的形状。

</div>

</details>

</div>

---

### CYLINDER

| 键                                                                    |          详情           | 必需 |
|----------------------------------------------------------------------|:---------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `CYLINDER` | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |      设置圆柱体中心的所在地      | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |       设置目标实体类型        | ❌  |
| `radius`                                                             |        圆柱体的半径         | ✅  |
| `borderRadius`                                                       |       内部圆柱体的半径        | ❌  |
| `height`                                                             |        圆柱体的高度         | ❌  |

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

此脚本使用云粒子演示圆柱体的形状。

</div>

</details>

</div>

---

### CUBOID

| 键                                                                    |         详情          | 必需 |
|----------------------------------------------------------------------|:-------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `CUBOID` | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |     设置立方体中心的所在地     | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |      设置目标实体类型       | ❌  |
| `x`                                                                  |      设置立方体的长度       | ✅  |
| `y`                                                                  |      设置立方体的高度       | ✅  |
| `z`                                                                  |  设置立方体的宽度，默认为 `x`   | ❌  |
| `xBorder`                                                            |     设置内部立方体的长度      | ❌  |
| `yBorder`                                                            |     设置内部立方体的高度      | ❌  |
| `zBorder`                                                            | 设置内部立方体的宽度，默认为 `x`  | ❌  |

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

此脚本使用云粒子演示立方体的形状。

</div>

</details>

</div>

---

### STATIC_RAY

| 键                                                                    |           详情            | 必需 |
|----------------------------------------------------------------------|:-----------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `STATIC_RAY` | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |      设置直线第一个点的所在地       | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |      设置直线最后一个点的所在地      | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |        设置目标实体类型         | ❌  |
| `ignoresSolidBlocks`                                                 |      设置射线是否穿过实体方块       | ❌  |
| `pointRadius`                                                        |   设置射线的粗细。默认为 0.5 方块。   | ❌  |

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

此脚本使用云粒子演示静态射线的形状。

我们通过在区域的两端使用 `offset` 选项调整了区域的高度，使射线从玩家和 Boss 的中间出现，否则射线会出现在他们的脚下。

</div>

</details>

</div>

---

### ROTATING_RAY

| 键                                                                    |            详情             | 必需 |
|----------------------------------------------------------------------|:-------------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `ROTATING_RAY` | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |         设置目标实体类型          | ❌  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |       设置直线第一个点的所在地        | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |       设置直线最后一个点的所在地       | ✅  |
| `animationDuration`                                                  |      设置旋转的时间，以刻度为单位       | ✅  |
| `pitchPreRotation`                                                   |      在动画之前对俯仰应用初始旋转       | ❌  |
| `yawPreRotation`                                                     |      在动画之前对偏航应用初始旋转       | ❌  |
| `pitchRotation`                                                      |         设置动画的俯仰旋转         | ❌  |
| `yawRotation`                                                        |         设置动画的偏航旋转         | ❌  |
| `ignoresSolidBlocks`                                                 |       设置射线是否穿过实体方块        | ❌  |
| `pointRadius`                                                        |    设置射线的粗细。默认为 0.5 方块。    | ❌  |

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

此脚本显示旋转射线使用云粒子的外观。

首先，它使用云粒子创建从 Boss 到伤害它的玩家的射线。然后，它使用 `offset` 将位置稍微向上调整了一个方块。

接下来，它使射线围绕被瞄准的玩家旋转一整圈。此旋转持续 5 秒（100 个刻度）完成，以被瞄准的玩家为中心。

</div>

</details>

</div>

---

### TRANSLATING_RAY

| 键                                                                    |              详情              | 必需 |
|----------------------------------------------------------------------|:----------------------------:|:--:|
| `shape`                                                              | 设置区域的形状。应为 `TRANSLATING_RAY` | ✅  |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) |           设置目标实体类型           | ❌  |
| `animationDuration`                                                  |        设置平移的时间，以刻度为单位        | ✅  |
| [`target`]($language$/elitemobs/elitescript_targets.md)              |         设置直线第一个点的所在地         | ✅  |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md)         |         设置直线第一个点的目的地         | ✅  |
| [`target2`]($language$/elitemobs/elitescript_targets.md)             |         设置直线第二个点的所在地         | ✅  |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md)        |         设置直线第二个点的目的地         | ✅  |
| `ignoresSolidBlocks`                                                 |         设置射线是否穿过实体方块         | ❌  |
| `pointRadius`                                                        |     设置射线的粗细。默认为 0.5 方块。      | ❌  |

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

此脚本显示平移射线使用云粒子的外观。

首先，它使用云粒子创建从 Boss 到伤害它的玩家的射线。

然后，它使射线从两个目标向上移动 10 个方块，使用 `FinalTarget1` 和 `FinalTarget2` 上的 `offset`。

动画需要 5 秒（100 个刻度）才能完成。

我们可以通过将 Z `offset` 调整为类似 `offset: 0,0,10` 的值，轻松使射线横向移动：

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

此行为可能会根据你在游戏中面对的方向而变化。
<br>如果我们修改 GIF 图像中显示的脚本中的 X `offset`，则从我们的角度来看，射线会以直线方式远离我们。

</div>

</details>

---

## 过滤器

过滤器属性可用于仅定位区域内的特定实体。这些实体可以是：

| 值        |      详情       |
|----------|:-------------:|
| `PLAYER` | 仅定位区域中的玩家（默认） |
| `ELITE`  |   仅定位区域中的精英   |
| `LIVING` | 定位区域中的所有生物实体  |

<div align="center">

<details> 

<summary><b>示例</b></summary>

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

此示例脚本显示如何使用过滤器使区域仅定位精英。

</div>
