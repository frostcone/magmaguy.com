# 介绍

在这个页面，你会发现许多不同的自定义 Boss 力量例子，这些例子是通过 EliteScript 和 [WebApp](https://magmaguy.com/webapp/webapp.html) 创建的。 这些简单明了的例子展示了如何利用多种动作和其他功能来制作独特的 Boss 力量。

此外，每个例子都配有可视化示例，因此更容易理解脚本在游戏内部的运行方式。

随意复制任何例子并在您自己的地下城或世界中使用它们。

## 力量例子

### 撞击下来

这个脚本会使 Boss 传送到向它造成伤害的玩家上方8个区块处，然后撞击地面。然后，它会对 Boss 周围3个区块内的任何玩家施加减速药水效果，并在屏幕上显示“Stunned”的消息3秒。

<div align="center">

<details>

<summary><b>展开例子</b></summary>

<div align="left">

```yml
eliteScript:
  SlamDown:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      FinalTarget:
        targetType: DIRECT_TARGET
        offset: 0,8,0
      Target:
        targetType: SELF
    - action: PUSH
      vValue: 0,-5,0
      Target:
        targetType: SELF
      wait: 15
    - action: POTION_EFFECT
      potionEffectType: SLOW
      amplifier: 3
      duration: 60
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    - action: TITLE_MESSAGE
      subtitle: "Stunned!"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    Cooldowns:
      local: 180
      global: 80
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

此脚本将在 Boss 周围生成一个4区块的圆顶。随后，它将在区域边缘启动粒子效果，持续一秒，然后另一个动作会推动在区域内的任何玩家。由于推动的偏移设置，玩家会稍微被弹射向上。最后，脚本会向区域内的任何玩家发送一条消息。

<div align="center">

<details>

<summary><b>展开例子</b></summary>

<div align="left">

```yml
eliteScript:
  PushAway:
    Events:
    - EliteMobDamagedEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_BORDER
        track: true
      repeatEvery: 5
      times: 4
    - action: PUSH
      Target:
        targetType: ZONE_FULL
        track: true
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: ACTION_TARGET
        normalize: true
        multiplier: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: MESSAGE
      sValue: "&cCool boss!: &fBE GONE!"
      Target:
        targetType: ZONE_FULL
      repeatEvery: 10
      times: 2
    Cooldowns:
      local: 140
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_pushaway.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 箭雨

这是一个脚本，会在攻击怪物的玩家周围画一个圆，还会在屏幕上显示一个消息告诉玩家离开这个圆。然后2秒后，它会在这个位置从上方10个区块处向下射箭。

<div align="center">

<details>

<summary><b>展开例子</b></summary>

<div align="left">

```yml
eliteScript:
  MakeCircle:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 8
      particles:
      - particle: FLAME
    - action: TITLE_MESSAGE
      Target:
        targetType: DIRECT_TARGET
      fadeOut: 10
      duration: 20
      fadeIn: 10
      subtitle: Move out of the zone!
    - action: RUN_SCRIPT
      scripts:
      - "ArrowRain"
    Cooldowns:
      local: 160
      global: 80
  ArrowRain:
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
        offset: 0,10,0
    Actions:
    - action: SUMMON_ENTITY
      wait: 40
      sValue: ARROW
      Target:
        targetType: ZONE_FULL
        track: false
      vValue: 0,-1,0
      repeatEvery: 10
      times: 4
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_arrowrain.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 火环

这将创建一个脚本，该脚本将使用柱状区域在 Boss 周围产生粒子，持续6秒。 Boss 还将被赋予`FireOn`标签，持续6秒。

如果玩家在标签激活时攻击 Boss，那么玩家将被设置为火状态，持续1秒。 这是通过使用条件来完成的，`SetOnFire`脚本只能在 Boss 有匹配的`FireOn`标签时才能执行。

<div align="center">

<details>

<summary><b>展开例子</b></summary>

<div align="left">

```yml
eliteScript:
  Visual:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: CYLINDER
      radius: 2
      height: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: FLAME
      Target:
        targetType: ZONE_FULL
        track: true
        coverage: 1.0
      repeatEvery: 5
      times: 24
    - action: TAG
      tags:
      - "FireOn"
      duration: 120
      Target:
        targetType: SELF
    Cooldowns:
      local: 180
      global: 80
  SetOnFire:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 20
      Target:
        targetType: DIRECT_TARGET
      Conditions:
        Target:
          targetType: SELF
        conditionType: BLOCKING
        hasTags:
        - "FireOn"
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_fireaura.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 毒线

此脚本将在 Boss 中心创建两个立方体区。 Boss 的 AI 将被设置为 2 秒关闭。 立方体区配置为这样，他们将在地面上形成一个加号符号。

然后，脚本将在区域内产生云粒子2秒，然后它将在区域内产生烟粒子和应用毒药效果，持续3秒。

<div align="center">

<details>

<summary><b>展开例子</b></summary>

<div align="left">

```yml
eliteScript:
  PoisonLine1:
    Events:
      - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 20
      y: 1
      z: 2
      Target:
        targetType: SELF
        track: false
    Actions:
      - action: SET_MOB_AI
        bValue: false
        duration: 40
        Target:
          targetType: SELF
        scripts:
          - "PoisonLine2"
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
          coverage: 1
        repeatEvery: 5
        times: 8
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_NORMAL
        Target:
          targetType: ZONE_FULL
          coverage: 1
        wait: 40
        repeatEvery: 5
        times: 12
      - action: POTION_EFFECT
        potionEffectType: POISON
        amplifier: 4
        duration: 50
        Target:
          targetType: ZONE_FULL
        wait: 40
        repeatEvery: 5
        times: 12
    Cooldowns:
      local: 200
      global: 80
  PoisonLine2:
    Zone:
      shape: CUBOID
      x: 2
      y: 1
      z: 20
      Target:
        targetType: SELF
        track: false
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
          coverage: 1
        repeatEvery: 5
        times: 8
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_NORMAL
        Target:
          targetType: ZONE_FULL
          coverage: 1
        wait: 40
        repeatEvery: 5
        times: 12
      - action: POTION_EFFECT
        potionEffectType: POISON
        amplifier: 4
        duration: 50
        Target:
          targetType: ZONE_FULL
        wait: 40
        repeatEvery: 5
        times: 12
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_poisonlines.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### Bounce

这个脚本在boss中心创建一个10格长的圆柱区块，然后在区块内应用粒子特效和推力10秒。

推力动作每跳一个刻都会将玩家稍微向上推，给玩家一种他们在区块内来回跳动的错觉。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Bounce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 10
      height: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: EXPLOSION_NORMAL
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.2
    - action: PUSH
      vValue: 0,0.4,0
      Target:
        targetType: ZONE_FULL
      repeatEvery: 1
      times: 200
    Cooldowns:
      local: 220
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_bounce.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### Summon

这个脚本将在损害boss的玩家周围创建一个圆柱区块（因为应用了偏置，所以位于玩家上面6格的位置）。另外，它还会向该玩家显示一个屏幕消息。

延迟2秒后，援兵将在指定区域内生成。然而，由于我们使用了`coverage`，只有部分区域会被援军占据。如果玩家未能消灭所有援军，他们将在20秒后（400跳）自动消失。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Summon:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 3
      height: 1
      Target:
        targetType: DIRECT_TARGET
        offset: 0,6,0
    Actions:
    - action: SUMMON_REINFORCEMENT
      sValue: "fc_boss.yml"
      duration: 400
      Target:
        targetType: ZONE_FULL
        coverage: 0.2
      wait: 40
    - action: TITLE_MESSAGE
      subtitle: "朋友们！帮帮我！！！"
      duration: 30
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 333
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_summon.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### Potion Zones

当玩家伤害boss时，这个脚本就会被激活。它然后执行 `PotionZoneBad` 或 `PotionZoneGood` 脚本。

在 `PotionZoneBad` 脚本中，生成一个在boss周围20格内的玩家周围的圆柱形区域。它产生具有指定覆盖范围的云和大烟雾粒子特效，产生凋零药水效果，并向附近的玩家发送消息。

在 `PotionZoneGood` 脚本中，生成一个在boss周围20格内的玩家周围的圆柱形区域。这个脚本的粒子效果是反转的。这个脚本应用的是治疗药水效果，而不是凋零，并向附近的玩家发送消息。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "PotionZoneBad"
      - "PotionZoneGood"
      onlyRunOneScript: true
    Cooldowns:
      local: 110
      global: 80
  PotionZoneBad:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: WITHER
      amplifier: 3
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&c冷静的老板！: &f感受燃烧！"
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
  PotionZoneGood:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: HEAL
      amplifier: 1
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&c酷老板！: &f感到....等等，这是错误的。"
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  你的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### Blind Waves

该脚本启动两个地面射线波，它们在boss的正负X方向投射。

我们利用`offset` 参数确定射线的长度和大小，特别是通过定义Z值。此外，我们通过设置X值来指定波的传播方向。（这只是解释该特定脚本如何使用这些值，你不必完全模仿）

虽然可能调整Y值以增加射线波的高度，但我们将其留在0以允许玩家有跳过射线的选项。

参数`animationDuration`决定射线波从目标到最终目标旅行的时间。减少这个值会使射线越来越快，更难躲避。

随后，应用粒子和药水效果。失败避免或跳过射线波的玩家将被瞎眼5秒（100跳）。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Blind:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: 10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: 10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
      scripts: "Blind2"
    Cooldowns:
      local: 200
      global: 80
  Blind2:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: -10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
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

### 冻结墙

这个脚本在Boss的中心创建3个旋转的光线。由于我们无法定义光线的高度，所以我们使用了几个脚本和`offset`让这些光线在高度上堆叠，以便它们看起来像一个单一的旋转*墙*。

所有3个脚本的区域都是一样的，除了`offset`的值不同。它们都被设置为从Boss开始，长度为6个块，并设定在10秒（200个Tick）内做一个360度的偏航旋转。

所有脚本都设置了粒子效果，并且会对任何被射线墙*击中*的玩家施加`VISUAL_FREEZE`行动5秒（100个Tick）。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "FreezeWall"
      - "FreezeWall2"
      - "FreezeWall3"
    Cooldowns:
      local: 300
      global: 80      
  FreezeWall:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
      Target2:
        targetType: SELF
        offset: 6,0,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,1,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,1,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,2,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,2,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
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