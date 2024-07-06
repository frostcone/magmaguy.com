# 简介

在此页面上，您将发现使用 EliteScript 和 [WebApp](https://magmaguy.com/webapp/webapp.html) 创建的自定义 Boss 力量的各种示例。这些简单的示例说明了如何利用多个动作和其他功能来制作独特的 Boss 力量。

此外，每个示例都附带视觉演示，因此更容易理解脚本在游戏中的运作方式。

您可以随意复制任何示例并将其用于您自己的地下城或世界中。

## 力量示例

### 猛击地面

此脚本将使 Boss 传送到对其造成伤害的玩家上方 8 个方块处，然后猛击地面。之后，它将对 Boss 3 个方块内的任何玩家施加缓慢药水效果，并在屏幕上显示消息“眩晕”3 秒。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  猛击地面:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 传送
      最终目标:
        目标类型: 直接目标
        offset: 0,8,0
      目标:
        目标类型: 自身
    - action: 推动
      vValue: 0,-5,0
      目标:
        目标类型: 自身
      wait: 15
    - action: 药水效果
      potionEffectType: 缓慢
      amplifier: 3
      duration: 60
      目标:
        目标类型: 附近玩家
        范围: 3
      wait: 20
    - action: 标题消息
      字幕: "眩晕！"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      目标:
        目标类型: 附近玩家
        范围: 3
      wait: 20
    冷却时间:
      本地: 180
      全局: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_slamdown.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 推开

此脚本将在 Boss 周围生成一个 4 格方块的圆顶。随后，它将在区域边界处启动一个持续一秒的粒子效果，然后另一个动作将推开区域内的任何玩家。由于推动设置的偏移量，玩家将被稍微向上推。最后，脚本将向区域内的任何玩家发送消息。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  推开:
    事件:
    - EliteMobDamagedEvent
    区域:
      形状: 圆顶
      半径: 4
      圆角半径: 3
      目标:
        目标类型: 自身
        追踪: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: 云
      目标:
        目标类型: 区域_边界
        追踪: true
      repeatEvery: 5
      times: 4
    - action: 推动
      目标:
        目标类型: 区域_完整
        追踪: true
      相对向量:
        源目标:
          目标类型: 自身
        目标目标:
          目标类型: 动作目标
        归一化: true
        倍增器: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: 消息
      sValue: "&c酷 Boss！: &f走开！"
      目标:
        目标类型: 区域_完整
      repeatEvery: 10
      times: 2
    冷却时间:
      本地: 140
      全局: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_pushaway.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 箭雨

制作一个脚本，它会在对怪物造成伤害的玩家周围的地面上画一个圆圈，它还会在屏幕上显示一条消息，告诉玩家移出圆圈。然后 2 秒后，它会从 10 个方块高的地方向下发射箭矢到同一位置。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  制作圆圈:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 圆柱体
      半径: 5
      圆角半径: 4
      高度: 1
      目标:
        目标类型: 直接目标
        追踪: false
    动作:
    - action: 生成粒子
      目标:
        目标类型: 区域_边界
        追踪: false
        覆盖范围: 1.0
      repeatEvery: 5
      times: 8
      粒子:
      - particle: 火焰
    - action: 标题消息
      目标:
        目标类型: 直接目标
      fadeOut: 10
      duration: 20
      fadeIn: 10
      字幕: 移出区域！
    - action: 运行脚本
      scripts:
      - "箭雨"
    冷却时间:
      本地: 160
      全局: 80
  箭雨:
    区域:
      形状: 圆柱体
      半径: 5
      圆角半径: 4
      高度: 1
      目标:
        目标类型: 直接目标
        追踪: false
        offset: 0,10,0
    动作:
    - action: 召唤实体
      wait: 40
      sValue: 箭
      目标:
        目标类型: 区域_完整
        追踪: false
      vValue: 0,-1,0
      repeatEvery: 10
      times: 4
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_arrowrain.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 火焰光环

这将创建一个脚本，使用圆柱体区域在 Boss 周围生成粒子，持续 6 秒。Boss 还会获得 6 秒的“火焰开启”标签。

如果玩家在标签激活时攻击 Boss，则玩家会被点燃 1 秒。这是通过条件完成的，“点燃”脚本只有在 Boss 具有匹配的“火焰开启”标签时才能执行。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  视觉:
    事件:
    - PlayerDamagedByEliteMobEvent
    区域:
      形状: 圆柱体
      半径: 2
      高度: 3
      目标:
        目标类型: 自身
        追踪: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: 火焰
      目标:
        目标类型: 区域_完整
        追踪: true
        覆盖范围: 1.0
      repeatEvery: 5
      times: 24
    - action: 标签
      标签:
      - "火焰开启"
      duration: 120
      目标:
        目标类型: 自身
    冷却时间:
      本地: 180
      全局: 80
  点燃:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 点燃
      duration: 20
      目标:
        目标类型: 直接目标
      条件:
        目标:
          目标类型: 自身
        条件类型: 阻止
        hasTags:
        - "火焰开启"
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_fireaura.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 毒线

此脚本将创建两个以 Boss 为中心的立方体区域。Boss AI 设置为关闭 2 秒。立方体区域的配置方式使其在地面上形成一个加号。

然后，脚本将在区域中生成云粒子 2 秒，然后生成烟雾粒子并对区域施加中毒药水效果 3 秒。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  毒线 1:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 立方体
      x: 20
      y: 1
      z: 2
      目标:
        目标类型: 自身
        追踪: false
    动作:
    - action: 设置_怪物_AI
      bValue: false
      duration: 40
      目标:
        目标类型: 自身
      scripts:
      - "毒线 2"
    - action: 生成粒子
      粒子:
      - particle: 云
      目标:
        目标类型: 区域_完整
        覆盖范围: 1
      repeatEvery: 5
      times: 8
    - action: 生成粒子
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        覆盖范围: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: 药水效果
      potionEffectType: 中毒
      amplifier: 4
      duration: 50
      目标:
        目标类型: 区域_完整
      wait: 40
      repeatEvery: 5
      times: 12
    冷却时间:
      本地: 200
      全局: 80
  毒线 2:
    区域:
      形状: 立方体
      x: 2
      y: 1
      z: 20
      目标:
        目标类型: 自身
        追踪: false
    动作:
    - action: 生成粒子
      粒子:
      - particle: 云
      目标:
        目标类型: 区域_完整
        覆盖范围: 1
      repeatEvery: 5
      times: 8
    - action: 生成粒子
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        覆盖范围: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: 药水效果
      potionEffectType: 中毒
      amplifier: 4
      duration: 50
      目标:
        目标类型: 区域_完整
      wait: 40
      repeatEvery: 10
      times: 12
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_poisonlines.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 弹跳

此脚本创建一个以 Boss 为中心的 10 格方块圆柱体区域，然后对该区域应用粒子效果和推动 10 秒。

推动动作每滴答将玩家稍微向上推，造成玩家在区域内弹跳的错觉。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  弹跳:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 圆柱体
      半径: 10
      高度: 2
      目标:
        目标类型: 自身
        追踪: false
    动作:
    - action: 生成粒子
      粒子:
      - particle: EXPLOSION_NORMAL
      repeatEvery: 10
      times: 20
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 0.2
    - action: 推动
      vValue: 0,0.4,0
      目标:
        目标类型: 区域_完整
      repeatEvery: 1
      times: 200
    冷却时间:
      本地: 220
      全局: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_bounce.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 召唤

此脚本将创建一个以伤害 Boss 的玩家为中心的圆柱体区域（由于应用了偏移量，该区域位于玩家上方 6 个方块处）。此外，它还会在屏幕上向该玩家显示一条消息。

延迟 2 秒后，增援将生成到指定的区域中。但是，由于我们使用了 `覆盖范围`，因此只有一部分区域会被增援占据。如果玩家未能消灭所有增援，它们将在 20 秒（400 滴答）后自动消失。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  召唤:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 圆柱体
      半径: 3
      高度: 1
      目标:
        目标类型: 直接目标
        offset: 0,6,0
    动作:
    - action: 召唤增援
      sValue: "fc_boss.yml"
      duration: 400
      目标:
        目标类型: 区域_完整
        覆盖范围: 0.2
      wait: 40
    - action: 标题消息
      字幕: "朋友们！救命！！!"
      duration: 30
      fadeIn: 10
      fadeOut: 10
      目标:
        目标类型: 直接目标
    冷却时间:
      本地: 333
      全局: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_summon.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 药水区域

当玩家伤害 Boss 时，此脚本将被激活。然后，它将执行 `药水区域_坏` 或 `药水区域_好` 脚本。

在 `药水区域_坏` 脚本中，将在距离 Boss 20 个方块内的附近玩家周围生成一个圆柱体区域。它会产生具有指定覆盖范围的云和大型烟雾粒子效果，造成凋零药水效果，并向附近玩家传递消息。

在 `药水区域_好` 脚本中，将在距离 Boss 20 个方块内的玩家周围生成一个圆柱体区域。此脚本的粒子效果是相反的。此脚本应用治疗药水效果而不是凋零，并向附近玩家发送消息。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  触发:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 运行脚本
      scripts:
      - "药水区域_坏"
      - "药水区域_好"
      onlyRunOneScript: true
    冷却时间:
      本地: 110
      全局: 80
  药水区域_坏:
    区域:
      形状: 圆柱体
      高度: 2
      半径: 5
      目标:
        目标类型: 附近玩家
        范围: 20
        追踪: false
    动作:
    - action: 生成粒子
      粒子:
      - particle: 云
      目标:
        目标类型: 区域_完整
        覆盖范围: 0.3
        追踪: false
      repeatEvery: 10
      times: 4
    - action: 生成粒子
      粒子:
      - particle: SMOKE_LARGE
      目标:
        目标类型: 区域_完整
        覆盖范围: 0.3
        追踪: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: 药水效果
      potionEffectType: 凋零
      amplifier: 3
      duration: 80
      目标:
        目标类型: 区域_完整
        追踪: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: 消息
      sValue: "&c酷 Boss！: &f感受灼烧吧！"
      目标:
        目标类型: 附近玩家
        范围: 20
  药水区域_好:
    区域:
      形状: 圆柱体
      高度: 2
      半径: 5
      目标:
        目标类型: 附近玩家
        范围: 20
        追踪: false
    动作:
    - action: 生成粒子
      粒子:
      - particle: SMOKE_LARGE
      目标:
        目标类型: 区域_完整
        覆盖范围: 0.3
        追踪: false
      repeatEvery: 10
      times: 4
    - action: 生成粒子
      粒子:
      - particle: 云
      目标:
        目标类型: 区域_完整
        覆盖范围: 0.3
        追踪: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: 药水效果
      potionEffectType: 治疗
      amplifier: 1
      duration: 80
      目标:
        目标类型: 区域_完整
        追踪: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: 消息
      sValue: "&c酷 Boss！: &f感受...等等，这是错误的。"
      目标:
        目标类型: 附近玩家
        范围: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 致盲波

此脚本启动两个地面光线波，从 Boss 出发，分别投射到正负 X 方向。

我们利用 `offset` 参数来确定光线的长度和大小，特别是通过定义 Z 值。此外，我们通过设置 X 值来指定波传播的方向。（这只是对这个特定脚本如何使用这些值的解释，您不必完全按照此方式进行操作）

虽然可以通过调整 Y 值来增加光线波的高度，但我们将其保留为 0，以便玩家可以选择跳过光线。

参数 `animationDuration` 指定了光线波从目标传播到最终目标所需的时间。减小此值将使光线更快，更难以躲避。

随后，应用粒子和药水效果。未能躲避或跳过光线波的玩家将被致盲 5 秒（100 滴答）。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  致盲:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 平移光线
      目标:
        目标类型: 自身
        offset: 0,0,5
        追踪: false
      最终目标:
        目标类型: 自身
        offset: 10,0,5
        追踪: false
      目标 2:
        目标类型: 自身
        offset: 0,0,-5
        追踪: false
      最终目标 2:
        目标类型: 自身
        offset: 10,0,-5
        追踪: false
      animationDuration: 100
      ignoresSolidBlocks: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 1.0
      repeatEvery: 5
      times: 20
    - action: 药水效果
      potionEffectType: 致盲
      amplifier: 5
      duration: 100
      目标:
        目标类型: 区域_完整
        追踪: true
      repeatEvery: 1
      times: 100
      scripts: "致盲 2"
    冷却时间:
      本地: 200
      全局: 80
  致盲 2:
    事件:
    - EliteMobDamagedByPlayerEvent
    区域:
      形状: 平移光线
      目标:
        目标类型: 自身
        offset: 0,0,5
        追踪: false
      最终目标:
        目标类型: 自身
        offset: -10,0,5
        追踪: false
      目标 2:
        目标类型: 自身
        offset: 0,0,-5
        追踪: false
      最终目标 2:
        目标类型: 自身
        offset: -10,0,-5
        追踪: false
      animationDuration: 100
      ignoresSolidBlocks: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: SMOKE_NORMAL
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 1.0
      repeatEvery: 5
      times: 20
    - action: 药水效果
      potionEffectType: 致盲
      amplifier: 5
      duration: 100
      目标:
        目标类型: 区域_完整
        追踪: true
      repeatEvery: 1
      times: 100
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_blindwaves.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 冰冻墙

此脚本创建 3 个以 Boss 为中心的旋转光线。我们需要 3 个不同的旋转光线，因为我们无法定义光线高度，因此我们使用多个脚本和 `offset` 使光线在高度上堆叠，使其看起来像一个单一的旋转“墙”。

所有 3 个脚本都具有相同的区域，除了 `offset` 不同。它们设置为从 Boss 开始长度为 6 个方块，并在 10 秒（200 滴答）内进行 360 度偏航旋转。

所有脚本都设置了粒子效果，并将对被光线墙“击中”的任何玩家应用 `视觉冻结` 动作 5 秒（100 滴答）。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  触发:
    事件:
    - EliteMobDamagedByPlayerEvent
    动作:
    - action: 运行脚本
      scripts:
      - "冰冻墙"
      - "冰冻墙 2"
      - "冰冻墙 3"
    冷却时间:
      本地: 300
      全局: 80      
  冰冻墙:
    区域:
      形状: 旋转光线
      目标:
        目标类型: 自身
        追踪: false
      目标 2:
        目标类型: 自身
        offset: 6,0,0
        追踪: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: 雪花
      repeatEvery: 10
      times: 20
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 1.0
    - action: 视觉冻结
      duration: 100
      目标:
        目标类型: 区域_完整
        追踪: false
      repeatEvery: 1
      times: 200
  冰冻墙 2:
    区域:
      形状: 旋转光线
      目标:
        目标类型: 自身
        追踪: false
        offset: 0,1,0
      目标 2:
        目标类型: 自身
        追踪: false
        offset: 6,1,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: 雪花
      repeatEvery: 10
      times: 20
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 1.0
    - action: 视觉冻结
      duration: 100
      目标:
        目标类型: 区域_完整
        追踪: false
      repeatEvery: 1
      times: 200
  冰冻墙 3:
    区域:
      形状: 旋转光线
      目标:
        目标类型: 自身
        追踪: false
        offset: 0,2,0
      目标 2:
        目标类型: 自身
        追踪: false
        offset: 6,2,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    动作:
    - action: 生成粒子
      粒子:
      - particle: 雪花
      repeatEvery: 10
      times: 20
      目标:
        目标类型: 区域_完整
        追踪: false
        覆盖范围: 1.0
    - action: 视觉冻结
      duration: 100
      目标:
        目标类型: 区域_完整
        追踪: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>




