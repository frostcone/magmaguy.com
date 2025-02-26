# 精英脚本事件

EliteScripts 是基于事件的。这意味着它们在特定事件触发时启动。以下是目前有效的事件：

| 事件                             |       详细信息       | 直接目标 [[?]($language$/elitemobs/elitescript_targets.md)] |
|--------------------------------|:----------------:|:-------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent |    精英被另一个精英伤害    |                            ❌                            |
| EliteMobDamagedByPlayerEvent   |     精英被玩家伤害      |                          伤害玩家                           |
| EliteMobDamagedEvent           |    精英被任何东西伤害     |                            ❌                            |
| EliteMobDeathEvent             |       精英死亡       |                            ❌                            |
| EliteMobEnterCombatEvent       |    精英与玩家进入战斗     |                          交战玩家                           |
| EliteMobExitCombatEvent        |      精英退出战斗      |                            ❌                            |
| EliteMobHealEvent              |      精英完全治疗      |                            ❌                            |
| EliteMobSpawnEvent             |       精英生成       |                            ❌                            |
| EliteMobTargetPlayerEvent      |      精英锁定玩家      |                         被锁定的玩家                          |
| PlayerDamagedByEliteMobEvent   |      精英伤害玩家      |                         被伤害的玩家                          |
| ElitePhaseSwitchEvent          |  Boss 从阶段切换中生成   |                            ❌                            |
| ZoneEnterEvent                 | 实体进入区域。需要设置一个区域！ |                         进入区域的实体                         |
| ZoneLeaveEvent                 | 实体离开区域。需要设置一个区域！ |                         离开区域的实体                         |

**注意：“精英”指的是插件生成的任何具有攻击性的实体，无论它们是增援、Boss 还是其他任何东西。**
**注意：ZoneEnterEvent 和 ZoneLeaveEvent 的运行计算量很大，请谨慎使用！**

`直接目标` 由脚本目标使用，更多信息请点击[这里]($language$/elitemobs/elitescript_targets.md)。

`ZoneEnterEvent` 和 `ZoneLeaveEvent` 是特殊事件，允许脚本编写者基于实体进入和离开脚本中设置的区域来触发操作。ZoneEnterEvent
和 ZoneLeaveEvent 的 DIRECT_TARGET 是进入或离开的实体（这意味着您不能使用直接目标作为区域的目标），并且由于内部逻辑的工作方式，只有绝对点（特定坐标）和相对于
Boss 的点才能用于扫描进入和离开（不能使用以玩家为目标的区域）。

每个脚本只能有一个 [Event]($language$/elitemobs/elitescript_events.md) 部分。但是，可以将多个事件设置为脚本的触发器：

<div align="center">

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

此脚本将使精英在被玩家击中或锁定玩家时跳跃。

</div>

</details>

</div>
