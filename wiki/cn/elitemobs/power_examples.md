好的，遵照指示，以下是将输入的文本翻译成简体中文并保留 Markdown 格式的结果：

# 介绍

在此页面上，您将发现使用 EliteScript 和 [WebApp](https://magmaguy.com/webapp/webapp.html) 创建的各种自定义 Boss 能力示例。这些简单的示例说明了如何利用多种动作和其他功能来制作独特的 Boss 能力。

此外，每个示例都附带视觉演示，以便更容易理解脚本在游戏中的运作方式。

您可以随意复制任何示例，并在您自己的地下城或世界中使用它们。

## 能力示例

### 猛击地面

此脚本将使 Boss 传送到对其造成伤害的玩家上方 8 格处，然后猛击地面。之后，它将对 Boss 周围 3 格内的任何玩家施加缓慢药水效果，并在屏幕上显示“眩晕”消息 3 秒。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

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

此脚本将在 Boss 周围生成一个 4 格的圆顶区域。随后，它将在区域边界启动一个持续一秒的粒子效果，然后另一个动作将推开区域内的任何玩家。由于推开动作的偏移设置，玩家将被稍微向上推。最后，脚本将向区域内的任何玩家发送一条消息。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 箭雨

创建一个脚本，将在对怪物造成伤害的玩家周围的地面上绘制一个圆圈，它还在屏幕上显示一条消息，告诉玩家移出圆圈。然后 2 秒后，它将在同一位置从上方 10 格处向下发射箭矢。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 火焰光环

这将创建一个脚本，使用圆柱体区域在 Boss 周围生成粒子，持续 6 秒。Boss 还将被赋予 `FireOn` 标签 6 秒。

如果玩家在标签激活时攻击 Boss，那么玩家将被点燃 1 秒。这是通过条件实现的，`SetOnFire` 脚本只有在 Boss 具有匹配的 `FireOn` 标签时才能执行。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 毒线

此脚本将创建两个以 Boss 为中心的立方体区域。Boss 的 AI 将关闭 2 秒。立方体区域的配置方式使其在地面上形成一个加号。

然后，脚本将在区域内生成云粒子 2 秒，然后生成烟雾粒子并对区域施加中毒药水效果 3 秒。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 弹跳

此脚本创建一个以 Boss 为中心的 10 格圆柱体区域，然后对该区域施加粒子效果和推力，持续 10 秒。

推开动作每刻都会将玩家稍微向上推，创造出玩家在区域内弹跳的错觉。

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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 召唤

此脚本将创建一个圆柱体区域（由于应用了偏移，位于玩家上方 6 格处），以对 Boss 造成伤害的玩家为中心。此外，它还将在屏幕上向该玩家显示一条消息。

延迟 2 秒后，增援部队将生成到指定区域。但是，由于我们使用了 `coverage`，只有部分区域会被增援部队占据。如果玩家未能消灭所有增援部队，它们将在 20 秒（400 刻）后自动消失。

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
      subtitle: "Friends! Help!!!"
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
  您的浏览器不支持视频标签。
</video>

</div>

</div>

</details>

</div>

***

### 药水区域

当玩家对 Boss 造成伤害时，此脚本会被激活。然后它会执行 `PotionZoneBad` 或 `PotionZoneGood` 脚本。

在 `PotionZoneBad` 脚本中，会在 Boss 周围 20 格内的附近玩家周围生成一个圆柱体区域。它会产生具有指定覆盖范围的云和大型烟雾粒子效果，施加凋零药水效果，并向附近玩家发送一条消息。

在 `PotionZoneGood` 脚本中，会在 Boss 周围 20 格内的玩家周围生成一个圆柱体区域。此脚本的粒子效果是反转的。此脚本施加治疗药水效果而不是凋零，并向附近玩家发送一条消息。

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
      sValue: "&cCool boss!: &fFeel the burn!"
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
      sValue: "&cCool boss!: &fFeel the... Wait, this is the wrong one."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
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

此脚本启动两个从 Boss 发出的地面射线波，分别沿正负 X 方向投射。

我们利用 `offset` 参数来确定射线的长度和大小，特别是通过定义 Z 值。此外，我们通过设置 X 值来指定波的传播方向。（这只是解释了此特定脚本如何使用这些值，您不必完全按照这种方式制作您的脚本）

虽然可以调整 Y 值来增加射线波的高度，但我们将其设置为 0，以便玩家可以选择跳过射线。

参数 `animationDuration` 决定了射线波从目标移动到最终目标所需的时间。减小此值将使射线更快，更难躲避。

随后，应用粒子和药水效果。未能避开或跳过射线波的玩家将被致盲 5 秒（100 刻）。

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

### 冰冻墙

此脚本创建 3 个以 Boss 为中心的旋转射线。我们需要 3 个不同的旋转射线，因为我们无法定义射线高度，所以我们使用多个脚本和 `offset` 使射线在高度上堆叠，使其看起来像一个单独的旋转*墙*。

所有 3 个脚本的区域都相同，只是 `offset` 不同。它们被设置为从 Boss 开始长度为 6 格，并在 10 秒（200 刻）内进行 360 度偏航旋转。

所有脚本都设置了粒子效果，并将对被射线墙*击中*的任何玩家施加 `VISUAL_FREEZE` 动作 5 秒（100 刻）。

<div align="center">

<details>

<summary><b>展开示例</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
```Please specify the language you would like the text translated into.