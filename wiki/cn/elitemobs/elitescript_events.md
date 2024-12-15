[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Elite Script 事件

EliteScript 是基于事件的。这意味着它们在触发特定事件时启动。以下是当前有效的事件：

| 事件 | 详细信息 | 直接目标 [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | 精英被另一个精英伤害 |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | 精英被玩家伤害 |                         造成伤害的玩家                          |
| EliteMobDamagedEvent | 精英被任何事物伤害 |                                ❌                                 |
| EliteMobDeathEvent | 精英死亡 |                                ❌                                 |
| EliteMobEnterCombatEvent | 精英与玩家进入战斗 |                         交战玩家                          |
| EliteMobExitCombatEvent | 精英退出战斗 |                                ❌                                 |
| EliteMobHealEvent | 精英完全治愈 |                                ❌                                 |
| EliteMobSpawnEvent | 精英生成 |                                ❌                                 |
| EliteMobTargetPlayerEvent | 精英以玩家为目标 |                         以其为目标的玩家                          |
| PlayerDamagedByEliteMobEvent | 精英伤害玩家 |                         受到伤害的玩家                          |
| ElitePhaseSwitchEvent | 首领从阶段切换生成 |                                ❌                                 |
| ZoneEnterEvent | 实体进入区域。需要设置区域！ | 进入该区域的实体                                 |
| ZoneLeaveEvent | 实体离开区域。需要设置区域！ | 离开该区域的实体                                 |

**注意：“精英”是指插件生成的任何具有攻击性的实体，无论它们是增援、首领还是其他任何东西。**
**注意：`ZoneEnterEvent` 和 `ZoneLeaveEvent` 在计算上开销很大，因此请谨慎使用！**

`Direct Target` 由脚本目标使用，更多信息请参见[此处]($language$/elitemobs/elitescript_targets.md)。

`ZoneEnterEvent` 和 `ZoneLeaveEvent` 是特殊事件，允许脚本编写者基于在脚本中设置的实体进入和离开区域来触发操作。`ZoneEnterEvent` 和 `ZoneLeaveEvent` 的 `DIRECT_TARGET` 是进入或离开的实体（这意味着您不能将直接目标用作区域的目标），并且由于内部逻辑的工作方式，只有绝对点（特定坐标）和相对于首领的点才能用于扫描进入和离开（不能使用以玩家为目标的区域）。

每个脚本只能有一个[事件]($language$/elitemobs/elitescript_events.md)部分。但是，可以将多个事件设置为脚本的触发器：

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

此脚本将使精英在被玩家击中或以玩家为目标时跳跃。

</div>

</details>

</div>
