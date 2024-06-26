
# 精英脚本冷却时间

冷却时间设置必须过去的时间长度，然后boss才有资格执行相同的脚本或任何其他力量\*。

- 注意：一些力量目前不受冷却时间的影响。

冷却时间有两个值：

## 本地

`本地` 设置在同一脚本再次发生之前的时间长度，单位是滴答。例如：

示例

```yaml
本地: 60
```

将力量设置为可以在3秒内再次运行。

## 全球

`全球` 设置在任何其他脚本或力量再次发生之前的时间，单位是滴答\[1\]。例如：

示例

```yaml
全球: 20
```

将所有其他力量设置为无法在1秒钟内开始。

[1] 有些早期的力量目前不受此影响，这是一个进行中的工作。

**注意：通过使本地冷却时间更长并使全球冷却时间更短，可以保证boss会在其可用的力量之间交替！** 绝不要使全球冷却时间更长，我建议至少留下一秒的本地冷却时间，以给其他力量触发的机会。

此外，如果你的力量有一个特定的活动期，在此期间你应该使用这个系统，以防止其他力量同时运行并可能破坏你的力量。

### 使用冷却时间只运行一次脚本
为了确保脚本只触发一次，同时仍然使用可能在战斗中多次发生的[事件]($language$/elitemobs/elitescript_events.md)，将本地冷却时间设置为一个大数，例如 `99999`。这个例子阐述了这个概念：

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
精英脚本:
只烧我一次:
事件:
- 精英怪被玩家伤害事件
行动:
- action: 点燃
持续时间: 60
目标:
目标类型: 直接目标
冷却时间:
本地: 99999
全球: 50
```
在这个情况下，`精英怪被玩家伤害事件` 触发 `点燃` 动作。没有冷却时间，每次玩家打怪时动作都会激活。

然而，有了设置为 `99999` 的本地冷却时间，动作只会每 `99999` 滴答(83分钟)触发一次。

</div>

</details>

</div>
