[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 冷却时间

冷却时间设置在首领有资格再次执行相同脚本或任何其他能力之前必须经过的时间\*。

- 注意：某些能力当前不受冷却时间的影响。

冷却时间有两个值：

## local

`local` 设置同一脚本可以再次发生之前的时间（以刻度为单位）。示例：

示例

```yaml
local: 60
```

设置该能力在 3 秒内再次运行。

## global

`global` 设置任何其他脚本或能力可以再次发生之前的时间（以刻度为单位）[1]。示例：

示例

```yaml
global: 20
```

设置所有其他能力在 1 秒内无法启动。

[1] 某些较旧的能力目前不受此影响，这是一个正在进行的工作。

**注意：通过使本地冷却时间更长，全局冷却时间更短，您可以保证首领将在其可用能力之间交替进行！** 永远不要使全局冷却时间更长，我建议保留至少一秒的本地冷却时间，以便让其他能力有机会触发。

此外，如果您的能力具有特定的活动持续时间，您应该使用此系统来防止其他能力同时运行，并可能破坏您的能力。

### 使用冷却时间运行脚本一次
要确保脚本仅触发一次，同时仍使用在战斗中可能发生多次的[事件]($language$/elitemobs/elitescript_events.md)，请将本地冷却时间设置为高值，例如 `99999`。此示例演示了该概念：

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
在这种情况下，`EliteMobDamagedByPlayerEvent` 会触发 `SET_ON_FIRE` 操作。如果没有冷却时间，该操作将在玩家每次击中生物时激活。

但是，如果将本地冷却时间设置为 `99999`，则该操作将仅每 `99999` 个刻度（83 分钟）触发一次。

</div>

</details>

</div>
