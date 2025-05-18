好的，这是翻译成简体中文并保留 Markdown 格式的文本：

# 精英脚本冷却时间

冷却时间设定了在首领有资格执行同一脚本或任何其他能力*之前必须经过的时间量。

* 注意：某些能力目前不受冷却时间影响。

冷却时间有两个值：

## 本地冷却 (local)

`local` 以游戏刻为单位，设定了同一脚本再次发生之前的时间。示例：

示例

```yaml
local: 60
```

设定该能力可以在 3 秒后再次运行。

## 全局冷却 (global)

`global` 以游戏刻为单位，设定了任何其他脚本或能力再次发生之前的时间\[1\]。示例：

示例

```yaml
global: 20
```

设定所有其他能力在 1 秒内无法开始。

\[1\] 一些较旧的能力目前不受此影响，这仍在开发中。

**注意：通过将本地冷却时间设置得更长，将全局冷却时间设置得更短，你可以确保首领在其可用能力之间交替！** 切勿将全局冷却时间设置得更长，并且我建议至少保留一秒的本地冷却时间，以便给其他能力触发的机会。

此外，如果你的能力有特定的持续激活时间，你应该使用此系统来防止其他能力同时运行并可能破坏你的能力。

### 使用冷却时间仅运行脚本一次

为了确保脚本在战斗中可能多次发生的[事件](zh-cn/elitemobs/elitescript_events.md)触发时仅运行一次，请将本地冷却时间设置为一个较高的数字，例如 `99999`。此示例演示了该概念：

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
在此场景中，`EliteMobDamagedByPlayerEvent` 触发 `SET_ON_FIRE` 动作。如果没有冷却时间，该动作会在玩家每次击中怪物时激活。

然而，当本地冷却时间设置为 `99999` 时，该动作将仅每 `99999` 个游戏刻（83 分钟）触发一次。

</div>

</details>

</div>