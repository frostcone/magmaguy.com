    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: DIRECT_TARGET
      sValue: say Hello $playerName!
```

Makes the player that hit the boss say hello to themself on chat!

</div>

</details>

</div>

---

### SET_ON_FIRE

Sets the target on fire.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duration of fire (ticks)                  | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 100
```

Sets any players that are within 10 blocks from the boss on fire for 5 seconds.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Summons a reinforcement, using the same logic as the reinforcement system in Custom Boss config files.

| Values | Details | Mandatory |
| --- | :-: | :-: |
| `filename` | The filename of the custom boss. | ✅ |
| `chance` | Chance of the reinforcement spawning, usually use between 0.0 and 1.0. | ❌ |
| `inheritAggro` | Sets if the reinforcement will aggro the players targeting the parent boss | ❌ |
| `spawnNearby` | Sets if the reinforcement will spawn nearby, instead of exactly at the location. | ❌ |
| `amount` | Sets the amount of reinforcements to spawn. | ❌ |
| `inheritLevel` | Sets if the reinforcement will inherit the level of the parent boss. | ❌ |
| `location` | Sets the spawn location, relative to the parent boss | ❌ |

*Note that it is also possible to spawn reinforcements using the Custom Boss settings instead of EliteScript.*

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
 Example:
  Events:
  - EliteMobDamagedByPlayerEvent
  Actions:
  - action: SUMMON_REINFORCEMENT
    filename: test_boss.yml
    amount: 3
    inheritLevel: true
    inheritAggro: true
    spawnNearby: true
```

Will summon 3 `test_boss.yml` reinforcements when a player hits the boss. Those reinforcements will inherit the parent boss level, will inherit the aggro and will spawn nearby instead of on top of the boss.

</div>

</details>

</div>

---

### TELEPORT

Teleports the target(s) to a specific location.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` | Sets the location using coordinates `world,x,y,z,pitch,yaw` or `x,y,z,pitch,yaw` using the same world as the target for the second format | ✅ |

*Note: this can cause some unintended effects for regional bosses as it bypasses the leash. Using the 'same as boss' string is a way to make sure you don't teleport the boss outside of its zone.*

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: SELF
      location: 0,10,0,0,0
```

Teleports the boss 10 blocks into the air, relative to where it was.

</div>

</details>

</div>

---

### TRANSITIVE_BLOCKS

This action only works with regional bosses. It sets the blocks in the on\_spawn or on\_remove states to change at any given point. It also uses the same transitive block system from World Bosses. It has some extra parameters.

| Values | Details | Mandatory |
| --- | :-: | :-: |
| `Target` | More info [here]($language$/elitemobs/elitescript_targets.md)| ✅ |
| `state`  |     `on_spawn` / `on_remove`    | ✅  |
| `duration`  | Sets how long the action will last (ticks). Has no effect on block placement but sets the duration for effects and sounds set in transitive blocks.  | ❌  |
| `sound`  | Sets if a sound effect should be played with this action. Defaults to true.  | ❌  |

*If a duration is set on the blocks through the configuration files, those will also be applied. These are not the same durations*

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TRANSITIVE_BLOCKS
      Target: 
        targetType: SELF
      state: on_spawn
```

Will make the transitive blocks that have been set to on\_spawn for the location of the boss load and generate.

</div>

</details>

</div>
        targetType: ZONE_BORDER
      particles:
      - particle: FLAME
        amount: 100
      - particle: REDSTONE
        amount: 1
        red: 255
        green: 0
        blue: 0
```

<div align="center">

![elitescript_actions_spawnparticle.gif](../../../img/wiki/elitescript_actions_spawnparticle.gif)

</div>

Spawns 100 `FLAME` particles and 1 `REDSTONE` (with red color) particle on the zone border of a cylinder that is 4 blocks in radius and 30 blocks tall, with a 3 block border width when the boss is hit by a player.

</div>

</details>

</div>

---

### SUMMON_PET

Summons a pet wolf.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |             Sets the duration of the pet (seconds)              | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_PET
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
```

Spawns a temporary pet wolf near any player that is within 10 blocks from the boss for 120 seconds.

</div>

</details>

</div>
        - action: SET_TIME
          Target:
            targetType: SELF
          time: 10000
```

<div align="center">

![elitescript_actions_multiaction.jpg](../../../img/wiki/elitescript_actions_multiaction.jpg)

</div>

This script will make the boss send a message to all players and also set time at 10000 ticks at the same time.

<details>

<summary><b>Important note about multiple actions</b></summary>

Multiple actions will start from top to bottom and are done sequentially (one after the other) with as little time delay as possible, as if they are all part of a single action.

If you want multiple actions to happen with an specific time delay between them, you should chain your actions by setting a wait timer on each action.

*A wait of 1 tick (0.05 seconds) is enough to separate the execution of the actions.*

</details>
