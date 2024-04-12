# Elite Script Targets

Targets are a central part of Elite Scripts, and are required for Actions and Zones to work.

## Target Types

Target types set what entities or locations get targeted by a script.

| Target Type                  |                                    Details                                     |                                                                                                   Special                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Players in [range]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requires [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs in [range]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requires [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Players in world                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Players in the server                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Players in event                                |                                                                   [Requires compatible event]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite using power                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Targets the spawn location of a boss                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Specific location                                |                                                             Requires [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Several specific locations                           |                                                            Requires [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Targets inside of zone                             |                                                                        Requires [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Targets border of zone                             |                                                                        Requires [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Inherits the targets from an action.                      |                 **Can only be used for action [conditions]($language$/elitemobs/elitescript_conditions.md) and [Relative Vectors]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Targets the location a block fell on.                      |                                        **Can only be used for the [`SPAWN_FALLING_BLOCK` action]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Inherits the target from the script that runs this script            |                                                                          Can only run if the script was called by another script!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Targets inside of zone inherited from the script that runs this script     |                                                 Requires [`Zone`]($language$/elitemobs/elitescript_zones.md) **in the the script that calls this script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Targets border of zone inherited from the script that runs this script     |                                                 Requires [`Zone`]($language$/elitemobs/elitescript_zones.md) **in the the script that calls this script!**                                                  |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2Hello World!"
```

This sends a message to the target. Since the target is set to `ALL_PLAYERS`, it will send that message to all online players.

</div>

</details>

</div>

---

## Shared attributes

The following settings can be applied to all targets.

| Values | Details | Special |
| --- | :-: | :-: |
| `offset` | Sets the offset for the target location. | Can't target entities! |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

This strikes lightning 2 blocks above the boss. Note that STRIKE_LIGHTNING uses locations and does not affect entities, so it can have offsets. 

You can't set an offset to send a message, since messages are sent to players. You can, however, set an offset to a zone that can then target entities.

</div>

</details>

</div>

---

## range

Sets the range to scan for nearby players in the `NEARBY_PLAYERS` target type.

| Values | Details | Default |
| --- | :-: | :-: |
| `range` | Sets the range, in blocks, to scan for player targets. | `20.0` |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2Targeted players within 25 blocks!"
```

This sends a message to players within 25 blocks of the boss when the boss when the boss dies.

</div>

</details>

</div>

## location

Sets the location for the `LOCATION` target type.

| Values | Details | Default |
| --- | :-: | :-: |
| `location` | Sets the world location that will be targeted. | `none` |

This uses the format `location: worldname,x,y,z,pitch,yaw` for the location.

**Note that `same_as_boss` is a valid placeholder for the world name, such as `same_as_boss,100,64,100,0,0` would be a valid location that would target the same world as where the boss is.**

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "myWorld,100,64,200,0,0"
```

This spawns a lighting strike at the location x=100, y=64, z=200 of a world called `myWorld`.

</div>

</details>

</div>

---

## locations

Sets the locations for the `LOCATIONS` target type.

| Values | Details | Default |
| --- | :-: | :-: |
| `locations` | Sets the list of world locations that will be targeted. | `none` |

This uses the format `worldname,x,y,z,pitch,yaw` for the location.

**Note that `same_as_boss` is a valid placeholder for the world name, such as `same_as_boss,100,64,100,0,0` would be a valid location that would target the same world as where the boss is.**

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

This spawns a lighting strike at the location x=100, y=64, z=200 of a world called `myWorld` and another lighting strike in the same world as the boss at the location x=-100, y=12 and z=130.

</div>

</details>

</div>

---

## Targeting zones

[Zones]($language$/elitemobs/elitescript_zones.md) have multiple targets, and it is important to understand how they work in order to use Elite Scripting to its fullest potential.

Zones work in two parts:

### Part 1 - Setting where the zone goes

Zones need to know where they are supposed to be, and to do that you use the target system the same way you would for any other location-based effect, like a lightning strike.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

This spawns a cylindrical zone around the boss. Note that no actions are set in this example yet, that is covered below.

Some zones, like [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), have two or more targets. This is because rays are lines, and lines are defined by two points. This is covered more extensively in the [zones page]($language$/elitemobs/elitescript_zones.md), but they fundamentally all work the same way.

</div>

</details>

</div>

### Part 2 - Targeting the inside of the zone

Now that the zone knows where it is, we need the action to know that its target is the zone that we defined. That is what `targetType: ZONE_FULL` and `targetType:ZONE_BORDER` are for.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

Using the same zone from the first part, we now add the action. The target for this action is `ZONE_FULL`, which means that it will be spawning particles inside of the whole zone.

Note that ZONE_BORDER is not available for every zone. More on that in the [script zones]($language$/elitemobs/elitescript_zones.md) page.

</div>

</details>

</div>

### Zone track

Sets if the zone will move with the target, such as if the zone will move when the boss moves for `targetType: SELF`.

| Values | Details | Default |
| --- | :-: | :-: |
| `track` | Sets if the zone will move around with the target. | `true` |

Note that animatable zones can't track. [More on that here.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Using the same example from part 1 and part 2, the zone is now set to not track. This means that the zone will spawn at the boss location, but even as the boss keeps moving away, the zone will stay where it first spawned.

Finally, note that if a zone is set to not track, it will register its location at the moment the script is called.

As an example, you want to have a warning phase and a damage phase for your script, you will need to make sure you run all actions at the start and put a wait time on all actions related to damage you want to run later individually. You should not delay a whole script that you call through `RUN_SCRIPT` for technical reasons.

The following is a correct example of a power with a warning and a damage phase taken from the Frost Palace Sanctum.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

This script does a lot of things, but it is separated into two clear scripts: `VisualCylinder` and `DamageCylinder`.

VisualCylinder runs first and has the `RUN_SCRIPT` action which immediately also runs the `DamageCylinder` at the same time the `VisualCylinder` is running.

However, every single action in `DamageCylinder` is set to wait for 60 ticks, or 3 seconds.

This means that the boss has a warning phase of 3 seconds, and then does a damage phase, and even though the zones are set not to track the warning zone and the damage zone will be at the same location.

### Zone-specific target properties

Zone have the following specific properties:

#### coverage

Sets the percentage of the zone that will actually be used for the action. Only works for location targets (won't work when targetting players or other entities).

| Values | Details | Default |
| --- | :-: | :-: |
| `coverage` | Sets the percentage of the zone that will be covered. | `1.0` |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

In this case, only 50% of the zone will be covered in particles.

</div>

</details>

</div>

### Inheriting targets

When a script runs another script (or "calls" that script), it is possible to pass zone and target information from the first script to the second.

**Example uses**

1. **Improved script runners**

Script runners are scripts whose only function is to run a lot of other scripts. They are used to make managing scripts easier, especially when handling several scripts that require precise timing.

With target inheritance, several scripts can use the same zone or target, cutting down potentially hundreds of lines of repetitive scripting.

2. **Matryoshka target filtering / Russian nesting doll target filtering**

Filtering conditions can be applied to targets in an action. By passing the targets to a different script with different filters, it becomes possible to layer the conditions and apply different effects to the same pool of targets based in increasingly specific criteria.

As an example, it is possible to create a zone that looks for players and make an action that checks if all players in the zone have a specific tag. The valid targets can then be passed to another script where another action can then run a random check condition and apply an effect based on that chance. The targets can then be further passed along to another script where another condition can do a check to see if the targets are still alive and do some special behavior if they are dead.

These are, of course, just examples. It is a highly flexible system.

3. **Complex zones**

Finally, it is possible to layer targets to create complex zones, optionally using conditions if required, and it is even possible to create semi-randomized zones using the script conditions and the ability to only run one of the listed scripts from the script actions.

**Note:** For this section, **"parent script"** refers to the script that runs the **"inheriting script"**, which is the script which will be using the inherited targets.

When using target inheritance, it is important to take a careful look at the _parent script_ to make sure the correct data is getting passed down.

#### INHERIT_SCRIPT_TARGET

When using `INHERIT_SCRIPT_TARGET`, the targets from the _parent script_ will be passed down to the inheriting script. This has a couple of caveats:

- When passing **entity targets**, it is possible to run actions that require locations (such as spawning particles) as the location of the entities will be used. It is, of course, also possible to use actions which require entities.

- When passing **location targets**, is it only possible to use locations. **The only way to get an entity from a locations is by creating a zone at that location and looking for entities.** So, while it is not impossible to pass a location and then get entities, it will require a little bit of extra work.


#### Inheriting zones

When using `INHERIT_SCRIPT_ZONE_FULL` or `INHERIT_SCRIPT_ZONE_BORDER`, it is imperative that the _parent script_ defines a zone, or else the _inheriting script_ will not be able to run correctly.

Additionally zones can optionally be [tracked]($language$/elitemobs/elitescript_targets.md&section=zone-track). This will also be passed along with the zone.

- An **untracked** zone will always create a zone where defined by the _inheriting script_. This means that the zone settings will be used by the actions in the _inheriting scripts_ to create brand new zones every time an action runs, and the location of those zones will be defined by the action.

- A **tracked** zone can pass the same exact zone location to all _inheriting scripts_ if the _parent script_ is set to target `ZONE_FULL` or `ZONE_BORDER`. This means that every script will be acting on the same locations.