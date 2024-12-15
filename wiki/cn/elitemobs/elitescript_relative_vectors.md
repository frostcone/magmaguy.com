[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 相对向量

## 它们是做什么用的

相对向量是相对于特定但动态位置的向量。

为了最好地解释这些是什么，让我们考虑以下情况：您希望作为能力的一部分将玩家推向首领。由于首领和玩家都在战斗中移动，因此无法依靠特定向量来实现此效果 - 您将需要一个从玩家指向首领的向量。（想象一条带有从玩家指向首领的箭头的短线。）

相对向量可以以多种方式使用，不可能全部列出，但其中包括：向特定玩家或生物射击实体（例如抛射物）；在玩家身后生成增援；以特定方向射击坠落的方块；创建朝向玩家发射的光线等等。

## 向量如何工作？

如果您不知道或不记得向量是什么或它们如何工作，您可以将向量视为从一个点指向另一个点的箭头。

因此，向量的属性之一是它们的长度。此长度很重要；对于箭头，此长度是箭头发射的速度，对于尝试从特定位置获取偏移点，它是距该点的距离。距离越远的事物向量长度越大，而距离较近的事物向量长度越短。

对于某些机制，您可能不希望依赖于两个点之间的距离，因为您只想获取一个方向。幸运的是，您可以使用向量归一化，这可以保证保留方向，但将长度更改为 1.0。然后，您可以使用乘数轻松修改向量，直到您对它提供的偏移量或其提供的速度感到满意为止。

## 属性

| 值 |                                                 详细信息                                                  | 必需？ | 默认值 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | 向量将从其开始的点处的 [目标]($language$/elitemobs/elitescript_targets.md) | ✅ | `无` |
| `DestinationTarget` |          向量端点处的 [目标]($language$/elitemobs/elitescript_targets.md)          | ✅ | `无` |
| `normalize` |                                 设置是否应将向量归一化                                  | ❌ | `false` |
| `multiplier` |                                      乘以向量的长度                                      | ❌ | `1.0` |
| `offset` |                          允许插入到此偏移量的手动固定偏移量                           | ❌ | `无` |

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

在玩家身后（相对于首领）2 个方块处生成一个僵尸。

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

创建一个动态火焰球体，收缩到生成位置。

</div>

</details>

</div>

### 操作顺序

应用属性时的操作顺序如下：

向量计算 -> `normalize` -> `multiplier` -> `offset`
