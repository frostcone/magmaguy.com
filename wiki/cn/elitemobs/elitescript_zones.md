# Elite 脚本区域

区域是由形状定义的位置，脚本编写者可以使用它们作为目标来运行任何类型的动作。

每个脚本只能设置一个区域。

要定位区域，可以使用目标类型 `区域_完整` 或 `区域_边界`。

区域本身也使用 [脚本目标]($language$/elitemobs/elitescript_targets.md) 来定义区域将出现在哪里。

## 形状

设置区域的形状。有效的形状：

| 形状类型                                                                                                | 详细信息                 | 可动画 | 边界 |
|--------------------------------------------------------------------------|--------------------------|--------|------|
| [`圆柱体`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | 圆柱形。                 | ❌    | ✅   |
| [`球体`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | 球形。                   | ❌    | ✅   |
| [`圆顶`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | 圆顶形（半球形）。        | ❌    | ✅   |
| [`长方体`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | 长方体形（类似立方体）。 | ❌    | ✅   |
| [`静态光线`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | 两点之间的固定线。        | ❌    | ❌   |
| [`旋转光线`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | 两点之间的旋转线。        | ✅    | ❌   |
| [`平移光线`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | 在两个初始点和两个终点之间移动的线。 | ✅    | ❌   |

---

#### 可动画

具有动画的区域会在首次调用脚本时启动区域动画。

这意味着如果某个动作有等待时间，则当该动作开始时，该区域已经在动作等待期间移动了。

区域始终在每个滴答上进行动画处理。这意味着如果您使用 `生成粒子` 动作，则可以将其设置为在每个滴答上运行，因为区域将在每个滴答上移动。如果您每秒运行一次，您会看到粒子四处跳跃，因为即使在未生成粒子的滴答上，区域也会继续移动。

如果您想制作一个旋转区域动作，但想在启动动作之前等待一定数量的滴答，请将其制作成一个不同的脚本，并通过 `运行脚本` 调用该脚本。确保 `运行脚本` 具有您想要的等待时间。

动画完成后，区域将停留在最终位置。

所有可动画区域在脚本目标上都设置为不追踪，因为额外的移动会使脚本编写者和玩家难以理解。这意味着这些区域不会跟随 Boss 或玩家四处移动，并且始终相对于其初始生成点移动。

---

#### 边界

某些区域可以有边界。边界意味着 `区域_边界` 可以用作区域的目标。边界是通过在第一个较大的形状内创建第二个较小的形状来定义的。较小区域和较大区域之间的区域就是边界。

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
      形状: 圆柱体
      半径: 4
      圆角半径: 3
      高度: 8
      目标:
        目标类型: 自身
    动作:
      - action: 生成粒子
        粒子:
          - particle: SMOKE_LARGE
        目标:
          目标类型: 区域_边界
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

此脚本使烟雾粒子**仅**出现在区域边界中 5 秒（每 5 次重复 x 次数 20 = 100 滴答）。

如果您未使用 `区域_边界` 选项而是使用 `区域_完整` 选项，则整个区域将被烟雾粒子覆盖，如下所示：

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### 球体

| 键                                                         | 详细信息                          | 是否必填？ |
|-------------------------------------------------------------|----------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `球体`。      | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置球体中心的位置。            | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。             | ❌   |
| `半径`                                                      | 球体的半径。                      | ✅   |
| `圆角半径`                                                   | 内球体的半径。                     | ❌   |

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
      形状: 球体
      半径: 4
      圆角半径: 3
      目标:
        目标类型: 自身
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
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

### 圆顶

| 键                                                         | 详细信息                          | 是否必填？ |
|-------------------------------------------------------------|----------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `圆顶`。      | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置圆顶中心的位置。            | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。             | ❌   |
| `半径`                                                      | 圆顶的半径。                      | ✅   |
| `圆角半径`                                                   | 内圆顶的半径。                     | ❌   |

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
      形状: 圆顶
      半径: 4
      圆角半径: 3
      目标:
        目标类型: 自身
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
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

### 圆柱体

| 键                                                         | 详细信息                        | 是否必填？ |
|-------------------------------------------------------------|-----------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `圆柱体`。      | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置圆柱体中心的位置。          | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。             | ❌   |
| `半径`                                                      | 圆柱体的半径。                    | ✅   |
| `圆角半径`                                                   | 内圆柱体的半径。                   | ❌   |
| `高度`                                                      | 圆柱体的高度。                    | ❌   |

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
      形状: 圆柱体
      半径: 4
      圆角半径: 3
      高度: 8
      目标:
        目标类型: 自身
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
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

### 长方体

| 键                                                         | 详细信息                                 | 是否必填？ |
|-------------------------------------------------------------|------------------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `长方体`。            | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置长方体中心的位置。                     | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。                      | ❌   |
| `x`                                                         | 设置长方体的长度。                        | ✅   |
| `y`                                                         | 设置长方体的高度。                        | ✅   |
| `z`                                                         | 设置长方体的宽度，默认为 `x`。              | ❌   |
| `xBorder`                                                   | 设置内长方体的长度。                        | ❌   |
| `yBorder`                                                   | 设置内长方体的高度。                        | ❌   |
| `zBorder`                                                   | 设置内长方体的宽度，默认为 `x`。              | ❌   |

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
      形状: 长方体
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      目标:
        目标类型: 自身
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

此脚本使用云粒子演示长方体的形状。

</div>

</details>

</div>

---

### 静态光线

| 键                                                         | 详细信息                                                    | 是否必填？ |
|-------------------------------------------------------------|--------------------------------------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `静态光线`。                         | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置线段的第一个点的位置。                                | ✅   |
| [`目标 2`]($language$/elitemobs/elitescript_targets.md)     | 设置线段的最后一个点的位置。                               | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。                                     | ❌   |
| `ignoresSolidBlocks`                                         | 设置光线是否会穿过固体方块。                               | ❌   |
| `pointRadius`                                                | 设置光线的粗细。默认为 0.5 个方块。                       | ❌   |

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
      形状: 静态光线
      目标 2:
        目标类型: 直接目标
        offset: 0,1,0
      目标:
        目标类型: 自身
        offset: 0,1,0
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

此脚本使用云粒子演示静态光线的形状。

我们通过在区域的两端使用 `偏移量` 选项调整了区域的高度，以使光线从玩家和 Boss 的中间出现，否则光线将出现在他们的脚下。

</div>

</details>

</div>

---

### 旋转光线

| 键                                                         | 详细信息                                                                                | 是否必填？ |
|-------------------------------------------------------------|----------------------------------------------------------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `旋转光线`。                                                     | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。                                                                | ❌   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置线段的第一个点的位置。                                                            | ✅   |
| [`目标 2`]($language$/elitemobs/elitescript_targets.md)     | 设置线段的最后一个点的位置。                                                           | ✅   |
| `animationDuration`                                          | 以滴答为单位设置旋转的时间量。                                                         | ✅   |
| `pitchPreRotation`                                           | 在动画之前对俯仰角应用初始旋转。                                                        | ❌   |
| `yawPreRotation`                                             | 在动画之前对偏航角应用初始旋转。                                                        | ❌   |
| `pitchRotation`                                              | 设置动画的俯仰角旋转。                                                              | ❌   |
| `yawRotation`                                                | 设置动画的偏航角旋转。                                                              | ❌   |
| `ignoresSolidBlocks`                                         | 设置光线是否会穿过固体方块。                                                            | ❌   |
| `pointRadius`                                                | 设置光线的粗细。默认为 0.5 个方块。                                                     | ❌   |

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
      形状: 旋转光线
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      目标:
        目标类型: 自身
        offset: 0,1,0
      目标 2:
        目标类型: 直接目标
        offset: 0,1,0
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

此脚本使用云粒子显示旋转光线的外观。

首先，它使用云粒子从 Boss 到伤害它的玩家创建一条光线。然后，它使用 `偏移量` 将位置稍微向上调整一个方块。

接下来，它围绕被定位的玩家将光线旋转一整圈。此旋转持续 5 秒（100 滴答）才能完成，以被定位的玩家为中心。

</div>

</details>

</div>

---

### 平移光线

| 键                                                          | 详细信息                                                                                                  | 是否必填？ |
|--------------------------------------------------------------|-------------------------------------------------------------------------------------------------------:|------------------:|
| `形状`                                                      | 设置区域的形状。应为 `平移光线`。                                                                       | ✅   |
| [`过滤器`]($language$/elitemobs/elitescript_zones.md&section=filter)  | 设置要定位的实体类型。                                                                                   | ❌   |
| `animationDuration`                                          | 以滴答为单位设置平移的时间量。                                                                           | ✅   |
| [`目标`]($language$/elitemobs/elitescript_targets.md)      | 设置线段的第一个点的位置。                                                                              | ✅   |
| [`最终目标`]($language$/elitemobs/elitescript_targets.md) | 设置线段第一个点的目标位置。                                                                           | ✅   |
| [`目标 2`]($language$/elitemobs/elitescript_targets.md)     | 设置线段的第二个点的位置。                                                                              | ✅   |
| [`最终目标 2`]($language$/elitemobs/elitescript_targets.md) | 设置线段第二个点的目标位置。                                                                           | ✅   |
| `ignoresSolidBlocks`                                         | 设置光线是否会穿过固体方块。                                                                              | ❌   |
| `pointRadius`                                                | 设置光线的粗细。默认为 0.5 个方块。                                                                       | ❌   |

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
      形状: 平移光线
      目标:
        目标类型: 自身
      最终目标:
        目标类型: 自身
        offset: 0,10,0
      目标 2:
        目标类型: 直接目标
      最终目标 2:
        目标类型: 直接目标
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    动作:
      - action: 生成粒子
        粒子:
          - particle: 云
        目标:
          目标类型: 区域_完整
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

此脚本使用云粒子显示平移光线的外观。

首先，它使用云粒子从 Boss 到伤害它的玩家创建一条光线。

然后，它将光线动画化，使其从两个目标向上移动 10 个方块，方法是在 `最终目标 1` 和 `最终目标 2` 上使用 `偏移量`。

动画需要 5 秒（100 滴答）才能完成。

我们可以通过将 Z `偏移量` 调整为类似 `offset: 0,0,10` 的内容来轻松地使光线横向移动：

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

此行为可能会根据您在游戏中面向的方向而改变。
<br>如果我们修改 GIF 图像中显示的脚本中的 X `偏移量`，则从我们的角度来看，光线似乎会以直线远离我们。

</div>

</details>

---

## 过滤器

过滤器属性可用于仅定位区域内的特定实体。这些实体可以是：

| 值      | 详细信息                                 |
|----------|:-----------------------------------------:|
| `玩家`  | 仅定位区域内的玩家（默认）。                   |
| `精英`  | 仅定位区域内的精英。                   |
| `生物`  | 定位区域内的所有生物实体。                |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  过滤器示例:
    事件:
    - PlayerDamagedByEliteMobEvent
    区域:
      形状: 球体
      半径: 12
      圆角半径: 11
      过滤器: 精英
      目标:
        目标类型: 自身
        追踪: false
```

此示例脚本显示了如何使用过滤器使区域仅以精英为目标。

</div>


