# 精英脚本相对向量

## 它们的作用

相对向量是相对于特定但动态位置的向量。

为了最好地解释它们是什么，让我们考虑以下情况：您想将玩家推向 Boss，作为力量的一部分。由于 Boss
和玩家在战斗中都会移动，因此不可能依赖特定的向量来实现此效果 - 您需要一个从玩家指向 Boss 的向量。（想象一条短线，箭头从玩家指向
Boss。）

相对向量可以用在很多方面，不可能全部列举，但其中包括：向特定玩家或怪物射击实体（如投射物）；在玩家身后生成援军；向特定方向射击掉落的方块；创建向玩家射击的光线等等。

## 向量如何工作？

如果您不知道或不记得向量是什么或它们如何工作，您可以将向量视为从一个点指向另一个点的箭头。

因此，向量的属性之一是它们的长度。这个长度很重要；在箭头的情况下，这个长度是箭头射出的速度，在尝试从特定位置获得偏移点的情况下，它是距离该点的距离。距离较远的事物将具有更大的向量长度，而距离较近的事物将具有较短的长度。

对于某些机制，您可能不希望依赖于两个点之间的距离，因为您只想获得一个方向。幸运的是，您可以使用向量归一化，它保证方向被保留，但将长度更改为
1.0。然后，您可以使用乘数轻松修改向量，直到您对它提供的偏移量或它给出的速度感到满意为止。

## 属性

| 值                   |                             细节                              | 必须？ |   默认值   |
|---------------------|:-----------------------------------------------------------:|:---:|:-------:|
| `SourceTarget`      | 向量将从其起始点的 [目标]($language$/elitemobs/elitescript_targets.md) |  ✅  | `none`  |
| `DestinationTarget` |  向量结束点的 [目标]($language$/elitemobs/elitescript_targets.md)   |  ✅  | `none`  |
| `normalize`         |                         设置是否应将向量归一化                         |  ❌  | `false` |
| `multiplier`        |                           向量长度的乘数                           |  ❌  |  `1.0`  |
| `offset`            |                      允许插入此偏移量的手动固定偏移量                       |  ❌  | `none`  |

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

射出一只鸡

***

```yaml
eliteScript:
  ShootArrow:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

射出一支箭

***

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

在 Boss 的相对位置，在玩家身后 2 个方块处生成一个僵尸。

***

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

创建一个动画火焰球体，该球体缩小到生成位置。

</div>

</details>

</div>

### 操作顺序

应用属性时的操作顺序如下：

向量计算 -> `normalize` -> `multiplier` -> `offset`
