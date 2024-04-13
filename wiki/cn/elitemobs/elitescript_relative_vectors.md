
# Elite Script 相对向量

## 它们的用途

相对向量是相对于某个特定但动态位置的向量。

为了更好地解释这些是什么，让我们考虑以下情况：你想将玩家向boss推进作为力量的一部分。由于boss和玩家在战斗中都会移动，因此无法依赖特定的向量来实现这种效果 - 你需要一个从玩家指向boss的向量。（想象一条从玩家向boss的短线，线尾有一个箭头。）

相对向量可以以很多方式使用，其种类繁多以至于无法一一列举，但其中包括：向指定的玩家或怪物射击实体（如弹射物）；在玩家背后生成增援；向特定方向射出落下的方块；创建向玩家射出的射线等等。

## 向量如何工作？

向量是单独的标记，表明从一个点向另一个点指向。因此，向量的一个属性是其长度。这个长度很重要；对于箭头，这个长度是箭头射出的速度，在试图从特定位置获取偏移点时，它是从那个点的距离。更远的物体将有更大的向量长度，而更近的物体将有更短的长度。

对于某些机制，你可能不想依赖两个点之间的距离，你只是想获取一个方向。幸运的是，你可以使用向量归一化，它保证了方向的保持，但改变了长度为1.0。然后你可以使用乘数轻松地修改向量，直到你对它提供的偏移或速度满意。

## 属性

| 属性 | 描述 | 是否必需 | 默认值 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` |向量开始的点处的 [Target]($language$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `DestinationTarget` |向量结束的点处的 [Target]($language$/elitemobs/elitescript_targets.md) | ✅ | `none` |
| `normalize` |设定是否应该对向量进行归一化 | ❌ | `false` |
| `multiplier` |倍增向量的长度 | ❌ | `1.0` |
| `offset` |允许插入固定偏移值到此偏移 | ❌ | `none` |

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

生成一只僵尸在玩家2个方块后面，相对于boss.

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

创建一个动画火焰球体，缩小到出生地点.

</div>

</details>

</div>

### 操作顺序

应用属性时的操作顺序如下：

向量计算 -> `normalize` -> `multiplier` -> `offset`