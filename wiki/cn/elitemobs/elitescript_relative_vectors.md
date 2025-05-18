好的，这是将您提供的文本翻译成简体中文并保留 Markdown 格式的结果：

# Elite Script 相对向量

## 它们有什么用

相对向量是相对于一个特定但动态位置的向量。

为了最好地解释它们是什么，让我们考虑以下情况：你想作为一种能力的一部分，将玩家推向 Boss。由于 Boss 和玩家在战斗中都会移动，因此不可能依赖一个固定的向量来实现这种效果——你需要一个从玩家指向 Boss 的向量。（想象一条从玩家指向 Boss 的带箭头的短线。）

相对向量的使用方式多种多样，不可能一一列举，但其中包括：向特定玩家或怪物射击实体（如抛射物）；在玩家身后生成增援；向特定方向射击下落的方块；创建射向玩家的光线等等。

## 向量如何工作？

如果你不知道或不记得向量是什么或它们如何工作，你可以将向量想象成从一个点指向另一个点的箭头。

因此，向量的属性之一是它们的长度。这个长度很重要；对于箭来说，这个长度是箭射出的速度；对于尝试从特定位置获取偏移点来说，它是与该点的距离。距离越远的东西向量长度越大，距离越近的东西长度越短。

对于某些机制，你可能不想依赖两点之间的距离，因为你只想获得一个方向。幸运的是，你可以使用向量归一化，这保证了方向不变，但将长度改变为 1.0。然后你可以使用乘数轻松修改向量，直到你对其提供的偏移量或给予的速度感到满意为止。

## 属性

| 值 | 详情 | 强制？ | 默认值 |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [目标]($language$/elitemobs/elitescript_targets.md) 作为向量的起始点 | ✅ | `none` |
| `DestinationTarget` | [目标]($language$/elitemobs/elitescript_targets.md) 作为向量的终点 | ✅ | `none` |
| `normalize` | 设置向量是否应该被归一化 | ❌ | `false` |
| `multiplier` | 乘以向量的长度。你可以使用 `~` 来随机化这个值。示例：`1.0~2.5`。 | ❌ | `1.0` |
| `offset` | 允许为此偏移量插入一个手动固定偏移量。你可以使用 `~` 来随机化这个值。示例：`0~5,0~2,0~10`。 | ❌ | `none` |

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

在玩家身后生成一个僵尸，相对于 Boss，距离为 2 格。

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

创建一个动画火焰球，它会缩小到生成位置。

</div>

</details>

</div>

### 操作顺序

应用属性时的操作顺序如下：

向量计算 -> `normalize` -> `multiplier` -> `offset`