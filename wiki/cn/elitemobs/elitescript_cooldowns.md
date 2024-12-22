# 精英脚本冷却

冷却时间设定了 Boss 在再次执行相同脚本或任何其他能力*之前必须经过的时间。

- 注意：某些能力目前不受冷却时间影响。

冷却时间有两个值：

## 本地冷却

`local` 设置在再次执行相同脚本之前的时间，单位为刻。示例：

示例

```yaml
local: 60
```

设置该能力在 3 秒后可以再次运行。

## 全局冷却

`global` 设置在再次执行任何其他脚本或能力之前的时间，单位为刻[1]。示例：

示例

```yaml
global: 20
```

设置所有其他能力在 1 秒内无法启动。

[1] 一些较旧的能力目前不受此影响，这是一个正在进行的工作。

**注意：通过延长本地冷却时间并缩短全局冷却时间，你可以保证 Boss 会在其可用能力之间交替使用！**
永远不要让全局冷却时间更长，我建议至少保留一秒的本地冷却时间，以便让其他能力有机会触发。

此外，如果你的能力在激活期间具有特定的持续时间，你应该使用此系统来防止其他能力同时运行并可能破坏你的能力。

### 使用冷却时间运行一次脚本

为了确保脚本只触发一次，同时仍然使用在战斗中可能发生多次的[事件]($language$/elitemobs/elitescript_events.md)
，请将本地冷却时间设置为一个较高的数字，例如 `99999`。此示例演示了这个概念：

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  SetMeOnFireOnlyOnce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 60
      Target:
      targetType: DIRECT_TARGET
    Cooldowns:
    local: 99999
    global: 50
```

在这种情况下，`EliteMobDamagedByPlayerEvent` 会触发 `SET_ON_FIRE` 动作。如果没有冷却时间，该动作会在玩家每次攻击怪物时激活。

但是，如果本地冷却时间设置为 `99999`，则该动作只会每 `99999` 刻（83 分钟）触发一次。

</div>

</details>

</div>
