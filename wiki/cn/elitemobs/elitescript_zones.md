# 精英脚本区域

区域是由形状定义的位置，可以被脚本编写者用来运行任何种类的动作。

每个脚本只能设置一个区域。

要定位区域，可以使用目标类型 `ZONE_FULL` 或 `ZONE_BORDER`。

区域本身也使用 [脚本目标]($language$/elitemobs/elitescript_targets.md) 来定义区域将要出现的位置。

## shape

设置区域的形状。有效的形状：

| 形状类型                                                                 | 细节 | 可动画的 | 边界 |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)           | 圆柱形状 | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)               | 球形状   | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                   | 圆顶形状 (半球) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)               | 长方体形状 (类似立方体) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)       | 两点之间的固定线 | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray)   | 两点之间的旋转线 | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 两个初始点到两个终点之间的移动线 | ✅ | ❌ |

---

#### 可动画的

带有动画的区域在脚本首次调用时启动区域动画。

这意味着，如果一个动作有等待时间，在动作开始时，区域已经在动作等待的同时移动了。

区域总是在每个tick上都被动画化。这意味着，如果你使用 `SPAWN_PARTICLES` 动作，你可以设置它在每个 tick 运行，因为区域将会在每个 tick 移动。如果你每秒运行一次，你会看到粒子在区域移动的tick上跳动，即使在没有生成粒子的tick上，区域也会保持移动。

如果你想做一个旋转区域动作，但是希望在开始动作之前等待一定数量的 tick ，请将其制作成一个不同的脚本，并通过 `RUN_SCRIPT` 调用那个脚本。确保 `RUN_SCRIPT` 有你想要的等待时间。

一旦动画完成，区域将停留在最终位置。

所有可动画的区域都被设置为在脚本目标上不跟踪，因为额外的移动会让脚本编写者和玩家难以理解。这意味着这些区域不会跟随boss或玩家移动，总是相对于他们初始生成点进行移动。

---

#### 边界

某些区域可以有边界。边界意味着 `ZONE_BORDER` 可以被用作区域的目标。边界是通过在第一个，更大的形状内部创建第二个，更小的形状来定义的。较小区域和较大区域之间的面积是边界。

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

这个脚本产生的烟雾颗粒只会在区域边界出现5秒钟 (每5秒重复 x 20次 = 100 tick)。

如果你没有使用 `ZONE_BORDER` 选项，而是使用 `ZONE_FULL` 选项，那么整个区域将会被烟雾颗粒覆盖，就像这样：

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| 键                                                         | 细节 | 必要 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应设置为 `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置球心的位置 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置被目标化的实体类型 | ❌ |
| `radius`                                                    | 球的半径 | ✅ |
| `borderRadius`                                              | 内球的半径 | ❌ |

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

该脚本使用云粒子演示了球体的形状。

</div>

</details>

</div>

---

### DOME

| 键                                                         | 细节 | 必要 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置圆顶中心的位置 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置被目标化的实体类型 | ❌ |
| `radius`                                                    | 圆顶的半径 | ✅ |
| `borderRadius`                                              | 内半圆的半径 | ❌ |

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

该脚本使用云粒子演示了半球体的形状。

</div>

</details>

</div>

---

### CYLINDER

| 键                                                         | 细节 | 必要 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为 `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置圆柱中心的位置 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置被目标化的实体类型 | ❌ |
| `radius`                                                    | 圆柱的半径 | ✅ |
| `borderRadius`                                              | 内圆柱的半径 | ❌ |
| `height`                                                    | 圆柱的高度 | ❌ |

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

该脚本使用云粒子演示了圆柱体的形状。

</div>

</details>

</div>

---

### CUBOID

| 键                                                         | 细节 | 必要 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设定区域的形状。应为 `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设定长方体中心的位置 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设定被目标化的实体类型 | ❌ |
| `x`                                                         | 设定长方体的长度 | ✅ |
| `y`                                                         | 设定长方体的高度 | ✅ |
| `z`                                                         | 设定长方体的宽度，默认为 `x` | ❌ |
| `xBorder`                                                   | 设定内部长方体的长度 | ❌ |
| `yBorder`                                                   | 设定内部长方体的高度 | ❌ |
| `zBorder`                                                   | 设定内部长方体的宽度，默认为 `x` | ❌ |

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

此脚本使用云粒子演示了长方体的形状。

</div>

</details>

</div>

---


### 静态射线

| 键                                                         | 详情 | 是否必需 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为`STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置线的第一个点的位置 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 设置线的最后一个点的位置 | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体被目标化 | ❌ |
| `ignoresSolidBlocks`                                        | 设置射线是否会穿过坚固的块 | ❌ |
| `pointRadius`                                               | 设置射线的厚度。默认是0.5个块。 | ❌ |

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

该脚本使用云粒子展示了静态射线的形状。

我们通过在区域的两端使用`offset`选项调整了区域的高度，使射线从玩家和boss的中间出现，否则射线会出现在他们的脚下。

</div>

</details>

</div>

---

### 旋转射线

| 键                                                         | 详情 | 是否必需 |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | 设置区域的形状。应为`ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | 设置哪些类型的实体被目标化 | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | 设置线的第一个点的位置 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | 设置线的最后一个点的位置 | ✅ |
| `animationDuration`                                         | 以tick为单位，设置旋转时间 | ✅ |
| `pitchPreRotation`                                          | 在动画开始前对俯仰进行初始旋转 | ❌ |
| `yawPreRotation`                                            | 在动画开始前对偏航进行初始旋转 | ❌ |
| `pitchRotation`                                             | 设置动画的俯仰旋转 | ❌ |
| `yawRotation`                                               | 设置动画的偏航旋转 | ❌ |
| `ignoresSolidBlocks`                                        | 设置射线是否会穿过坚固的块 | ❌ |
| `pointRadius`                                               | 设置射线的厚度。默认是0.5个块。 | ❌ |

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

这个脚本展示了使用云粒子时旋转射线的样子。

首先，它使用云粒子从boss创建一个射线到伤害它的玩家。然后，它通过使用`offset`将位置稍微上调一个方块。

接下来，它让射线在被目标的玩家周围完整旋转一圈。这个旋转持续5秒（100刻）完成，以被目标的玩家为中心。

</div>

</details>

</div>

---

### 平移射线

| 键                                                          | 详情 | 是否必需 |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | 设置区域的形状。应为`TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置哪些类型的实体被目标化 | ❌ |
| `animationDuration`                                          | 以tick为单位，设置平移时间 | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | 设置线的第一个点的位置 | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | 设置线的第一个点的目标位置 | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | 设置线的第二个点的位置 | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | 设置线的第二个点的目标位置 | ✅ |
| `ignoresSolidBlocks`                                         | 设置射线是否会穿过坚固的块 | ❌ |
| `pointRadius`                                                | 设置射线的厚度。默认是0.5个块。 | ❌ |

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

这个脚本展示了使用云粒子如何看起来是一个平移的射线。

首先，它使用云粒子从boss创建一个射线到伤害它的玩家。

然后，它使用`FinalTarget1`和`FinalTarget2`上的`offset`将射线动画化以从两个目标上升10个方块。

动画需要5秒（100刻）来完成。

我们可以轻松地让射线水平移动，通过将Z `offset` 调整为类似于 `offset: 0,0,10`：

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

这个行为可能会根据你在游戏中面对的方向而改变。
<br>如果我们在GIF图像中展示的脚本中修改X `offset` ，从我们的角度看，射线会看起来是从我们逃开的一条直线。

</div>

</details>

---

## 过滤器

`filter` 属性可以用来只针对区域内的特定实体。这些实体可以是：

| 值 | 详细信息 |
| --- | :-: |
| `PLAYER` | 只针对区域内的玩家（默认） |
| `ELITE` | 只针对区域内的精英 |
| `LIVING` | 针对区域内的所有生物 |

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

此示例脚本展示了如何使用过滤器让区域仅针对精英。

</div>

