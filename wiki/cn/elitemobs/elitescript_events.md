
# 精英脚本事件

EliteScripts是基于事件的。这意味着它们在触发特定事件时启动。以下是当前有效的事件：

| 事件 | 详情 | 直接目标 [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | 精英被其他精英伤害 |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | 精英被玩家伤害 |                         伤害玩家                          |
| EliteMobDamagedEvent | 精英被任何事物伤害 |                                ❌                                 |
| EliteMobDeathEvent | 精英死亡 |                                ❌                                 |
| EliteMobEnterCombatEvent | 精英与玩家进入战斗 |                         交战的玩家                          |
| EliteMobExitCombatEvent | 精英退出战斗 |                                ❌                                 |
| EliteMobHealEvent | 精英全血复活 |                                ❌                                 |
| EliteMobSpawnEvent | 精英生成 |                                ❌                                 |
| EliteMobTargetPlayerEvent | 精英目标玩家 |                         被定位的玩家                          |
| PlayerDamagedByEliteMobEvent | 精英伤害玩家 |                          受伤的玩家                          |
| ElitePhaseSwitchEvent | Boss从阶段切换生成 |                                ❌                                 |

**注意：“精英”指的是由插件生成的任何进攻实体，无论它们是增援，Boss还是其他**

`Direct Target`由脚本目标使用，更多信息[在此]($language$/elitemobs/elitescript_targets.md)。

每个脚本的 [Event]($language$/elitemobs/elitescript_events.md) 部分只能有一个。但是，可以将多个事件设置为触发脚本的触发器：

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

当这个脚本被玩家击中或者当目标玩家时，它会使精英跳跃。

</div>

</details>

</div>