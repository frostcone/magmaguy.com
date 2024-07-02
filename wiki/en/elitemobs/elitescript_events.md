# Elite Script Events

EliteScripts are event-based. This means that they are launched when a specific event is triggered. The following are the currently valid events:

| Event | Details | Direct Target [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Elite damaged by another elite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Elite damaged by a player |                         Damaging player                          |
| EliteMobDamagedEvent | Elite damaged by anything |                                ❌                                 |
| EliteMobDeathEvent | Elite death |                                ❌                                 |
| EliteMobEnterCombatEvent | Elite enter combat with player |                         Engaging player                          |
| EliteMobExitCombatEvent | Elite exit combat |                                ❌                                 |
| EliteMobHealEvent | Elite full heal |                                ❌                                 |
| EliteMobSpawnEvent | Elite spawn |                                ❌                                 |
| EliteMobTargetPlayerEvent | Elite target player |                         Targeted player                          |
| PlayerDamagedByEliteMobEvent | Elite damage player |                          Damaged player                          |
| ElitePhaseSwitchEvent | Boss spawn from phase switch |                                ❌                                 |
| ZoneEnterEvent | Entity enters zone. This event requires a zone to be set! | Entity that entered the zone                                 |
| ZoneLeaveEvent | Entity leaves zone. This event requires a zone to be set! | Entity that left the zone                                 |

**Note: "Elite" refers to any aggressive entity spawned by the plugin, no matter if they're a reinforcement, a boss or anything else.**
**Note: ZoneEnterEvent and ZoneLeaveEvent are computationally expensive to run so please use these sparingly!**

`Direct Target` is used by the Script Targets, more on that [here]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` and `ZoneLeaveEvent` are special events that allow scripters to trigger actions based on entities entering and leaving zones set in scripts. The DIRECT_TARGET of ZoneEnterEvent and ZoneLeaveEvent is the entity that entered or left (this means you can't use the direct target as the target of the zone), and due to how the internal logic works only absolute points (specific coordinates) and points relative to the boss can be used for scanning entering and leaving (cannot use zones that target players).

There can only be one [Event]($language$/elitemobs/elitescript_events.md) section per script. However, several events can be set as triggers for a script:

<div align="center">

<details> 

<summary><b>Example</b></summary>

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

This script would make the elite jump when hit by a player or when targeting a player.

</div>

</details>

</div>
