# Elite Script Conditions

Conditions allow scripters to make scripts and / or actions **not** run based on specific conditions.

**Example**

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: DIRECT_TARGET
      duration: 20
      material: DIRT
      offset: 0,3,0
      Conditions:
        locationIsAir: true
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

In this example, the `Example` script will only run if the elite is still alive, and will only place a dirt block 3 blocks above the elite location if that block is an air block. Individual actions can have individual conditions.

## Target

Conditions use the [Targets]($language$/elitemobs/elitescript_targets.md) system to target which entity or location is subjected to the conditions. This means that you can associate conditions to the boss or to players or to anything else you can target.

---

## Condition Type

| Key | Details | Values |
| --- | :-: | :-: |
| `conditionType` | Sets type of condition | `BLOCKING` / `FILTERING` |

There are two types of condition: `BLOCKING` and `FILTERING`. `BLOCKING` conditions make scripts or actions stop running. `FILTERING` conditions make actions skip over targets that do not meet the condition. This means that if you want to only target block that are not air, you will want a `FILTERING`condition, but if you want to stop an action if a player is dead, you'll want a `BLOCKING` condition.

**Conditions outside of actions are always `BLOCKING`**. Conditions inside of actions can be `BLOCKING` or `FILTERING`.

_**Note: if the target is `SELF` (the boss) and the condition check is `isAlive`, the check is always `BLOCKING`!**_ This can be put inside of a `FILTERING` condition and will still make this specific part behave as `BLOCKING`.

Conditions inside of actions are set to `FILTERING` by default.

---

## Location-based conditions

### locationIsAir

Sets the condition to be whether the location of the target is air.

| Key | Details |       Values        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Sets to check if the location is an air block (or the opposite). | [Boolean](#boolean) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

Check if the location 2 blocks above where the boss is standing is air.

---

### isOnFloor

Checks if the location is on the floor. This means the block at the location is not solid, but the block below it is solid.

| Key | Details | Values |
| --- | :-: | :-: |
| `isOnFloor` | Sets to check if the location is a floor location (or the opposite). | [Boolean](#boolean) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      isOnFloor: true
      Target:
        targetType: SELF
```
---

### isStandingOnMaterial

Checks if the location underneath the target is a matching material type.

| Key |                     Details                     |        Values         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Sets which material type should be checked for. | [Material](#material) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      isStandingOnMaterial: BIRCH_WOOD
      Target:
        targetType: SELF
```

Will only run if the boss is standing on BIRCH_WOOD.

## Entity-based conditions

### isAlive

Sets the condition to be whether the condition target entity is alive.

| Key | Details | Values |
| --- | :-: | :-: |
| `isAlive` | Sets to check if the entity is alive (or dead). | [Boolean](#boolean) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      isAlive: false
      Target:
        targetType: SELF
```

Will only run if the boss is dead.

---

### hasTags

Checks if the target entity has specific tags. Scripters can assign and unassign any tag through actions and use them as conditions for later behavior. Tags are just strings (words) that you can assign to a boss.

| Key | Details |           Values            |
| --- | :-: |:---------------------------:|
| `hasTags` | Sets to check if the entity has a list of tags. | [String List](#string_list) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      hasTags:
      - isCool
      - hasANiceBeard
      Target:
        targetType: SELF
```

Will only run if the boss has the tags "isCool" and "hasANiceBeard"

---

### doesNotHaveTags

Same as `hasTags`, but checks if the boss does not have these values.

| Key | Details | Values |
| --- | :-: | :-: |
| `doesNotHaveTags` | Sets to check if the entity does not have a list of tags. | [String List](#string_list) |

**Example**

```yaml
eliteScript:
  Example:
    Conditions:
      doesNotHaveTags:
      - isStinky
      - isSus
      Target:
        targetType: SELF
```

Will only run if the boss does not have the tags "isStinky" and "isSus".

## Other conditions

### randomChance

Gives the condition a random chance to be valid.

| Key | Details | Values |
| --- | :-: | :-: |
| `randomChance` | Chance that the condition will be valid. | Number between 0.0 and 1.0 |

Note that this condition is special as it does not require a target.

**Example**