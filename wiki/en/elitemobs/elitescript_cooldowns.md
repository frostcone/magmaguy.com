# Elite Script Cooldowns

Cooldowns set the amount of time that must pass before the boss is eligible to do a both the same script or any other power\*.

- note: some powers are not currently affected by cooldowns.

Cooldowns have two values:

## local

`local` sets the time, in ticks, before the same script can happen again. Example:

Example

```yaml
local: 60
```

Sets the power to be able to run again for 3 seconds.

## global

`global` sets the time, in ticks, before any other script or power can happen again\[1\]. Example:

Example

```yaml
global: 20
```

Sets all other powers to not be able to start for 1 second.

[1] some of the older powers are currently unaffected by this, it is a work in progress.

**Note: by making the local cooldown longer and the global cooldown shorter, you can guarantee that the boss will alternate between its available powers!** Never make the global cooldown longer, and I recommend leaving at least one second of local cooldown to give other powers a chance to trigger.

Additionally, if your power has a specific duration during which it is active, you should use this system to prevent other powers from running simultaneously and potentially ruining your power.

### Run Scripts Once with Cooldowns
To ensure scripts trigger only once while still using an [Event]($language$/elitemobs/elitescript_events.md) that may occur multiple times during a fight, set the local cooldown to a high number, such as `99999`. This example demonstrates the concept:

<div align="center">

<details> 

<summary><b>Example</b></summary>

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
In this scenario, the `EliteMobDamagedByPlayerEvent` triggers the `SET_ON_FIRE` action. Without cooldowns, the action would activate every time the player hits the mob. 

However, with a local cooldown set to `99999`, the action will only trigger every `99999` ticks (83 minutes).

</div>

</details>

</div>
