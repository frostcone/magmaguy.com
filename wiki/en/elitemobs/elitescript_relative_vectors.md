# Elite Script Relative Vectors

## What they are for

Relative vectors are vectors that are relative to a specific but dynamic location.

To best explain what these are, let's consider the following case: you want to push a player towards the boss as a part of a power. Since both the boss and the player move around during combat, it is not possible to rely of a specific vector to accomplish this effect - you will need a vector that goes from the player towards the boss. (Imagine a short line with an arrow going from the player towards the boss.)

Relative vectors can be use in so many ways that it would be impossible to list them all, but among them are: shooting entities (like projectiles) towards a specific player or mob; spawning reinforcements behind a player; shooting a falling block in a specific direction; creating rays that are shot towards a player, and so much more.

## How do vectors work?

If you don't know or don't remember what vectors are or how they work, you can think of vectors as arrows that point from one point to another point.

As such, one of the properties of vectors is their length. This length is important; in the case of arrows, this length is the speed at which an arrow is shot, in the case of trying to get offset points from a specific location it is the distance from that point. Things farther away will have greater vector lengths, and closer things will have shorter lengths.

For some mechanics, you will probably not want to rely on how far apart two points are, as you just want to get a direction. Fortunately you are able to use vector normalization, which guarantees that the direction is preserved but changes the length to be 1.0. You can then use multipliers to easily modify the vector until you are satisfied with the offset that it provides or the velocity it gives.

## Properties

| Value |                                                 Details                                                  | Mandatory? | Default value |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Target]($language$/elitemobs/elitescript_targets.md) at the point from which the vector will start from | ✅ | `none` |
| `DestinationTarget` |          [Target]($language$/elitemobs/elitescript_targets.md) at the end point for the vector           | ✅ | `none` |
| `normalize` |                                 Sets if the vector should be normalized                                  | ❌ | `false` |
| `multiplier` |                                      Multiplies the vector's length                                      | ❌ | `1.0` |
| `offset` |                          Allows inserting a manual fixed offset to this offset                           | ❌ | `none` |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Shoots a chicken

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Shoots an arrow

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Spawns a zombie 2 blocks behind the player, relative to the boss.

</div>

</details>

</div>

### Order of operations

The order of operations when applying the properties goes as follows:

Vector calculation -> `normalize` -> `multiplier` -> `offset`