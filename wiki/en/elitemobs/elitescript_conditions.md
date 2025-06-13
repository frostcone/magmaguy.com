# Elite Script Conditions

Conditions allow scripters to make scripts and / or actions **not** run based on specific conditions.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Conditions:
      isAlive: true
      conditionType: BLOCKING
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
        conditionType: BLOCKING
        Target:
          targetType: ACTION_TARGET
    Cooldowns:
      local: 60
      global: 20
```

In this example, the `Example` script will only run if the elite is still alive, and will only place a dirt block 3 blocks above the elite location if that block is an air block. Individual actions can have individual conditions.

</div>

</details>

</div>

## Target

Conditions use the [Targets]($language$/elitemobs/elitescript_targets.md) system to target which entity or location is subjected to the conditions. This means that you can associate conditions to the boss or to players or to anything else you can target.

---

## runIfConditionIs

| Key | Details | Values |
| --- | :-: | :-: |
| `runIfConditionIs` | Sets if condition should allow the action to be run when condition is true or false. | `true` / `false` |

You can reverse a condition by using the `runIf` prefix and the `Is` suffix around the condition name.

For example, take the `isAlive` condition. Normally, writing:
`isAlive: true`
means the action will only run if the boss is alive.

But if you also write:
`runIfIsAliveIs: false`
in the same condition, then the condition is reversed — the action will now run only if the boss is dead.

This structure allows you to control whether the condition should pass or fail before running the action.

Example:

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        runIfIsAliveIs: false
        Target:
          targetType: SELF
```

This script will now only set the weather to thunder if the boss is dead.

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

## Condition Block Placement


You can place or nest condition blocks in two ways:

1. **Under individual actions** – The condition will apply only to a specific action. If the condition is met, the action executes; otherwise, it does not.

2. **Under the entire script** – The condition applies to all actions within the script. If the condition is not met, none of the actions will execute.

Below are examples demonstrating how to nest condition blocks for both individual actions and the entire script.

**Under individual actions:**

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
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Check if the location 2 blocks above where the boss is standing is air and if it is then run the SET_WEATHER action when the mob is hit. Otherwise block the SET_WEATHER action. But the boss will always run the MESSAGE action when hit since no conditions are being applied to it.

</div>

</details>

</div>

**Under the entire script:**

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
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
    Conditions:
      conditionType: BLOCKING
      locationIsAir: true
      Target:
        targetType: SELF
        offset: "0,3,0"
```

If the block located two spaces above where the boss is standing is air, then allow all scripts to run when the mob is hit. Otherwise, block the entire script from executing including the SET_WEATHER and MESSAGE actions.

</div>

</details>

</div>

---

## Location-based conditions

### locationIsAir

Sets the condition to be whether the location of the target is air.

| Key | Details |       Values        |
| --- | :-: |:-------------------:|
| `locationIsAir` | Sets to check if the location is an air block (or the opposite). | [Boolean](#boolean) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        locationIsAir: true
        Target:
          targetType: SELF
          offset: "0,3,0"
```

Check if the location 2 blocks above where the boss is standing is air and if it is then do not block the weather script from running when the mob is hit. Otherwise block the action.

</div>

</details>

</div>

---

### isOnFloor

Checks if the location is on the floor. This means the block at the location is not solid, but the block below it is solid.

| Key | Details | Values |
| --- | :-: | :-: |
| `isOnFloor` | Sets to check if the location is a floor location (or the opposite). | [Boolean](#boolean) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isOnFloor: true
        Target:
          targetType: SELF
```

Check if the boss is on a solid block, if they are, then run the script otherwise block the script from running.

</div>

</details>

</div>

---

### isStandingOnMaterial

Checks if the location underneath the target is a matching material type.

| Key |                     Details                     |        Values         |
| --- |:-----------------------------------------------:|:---------------------:|
| `isStandingOnMaterial` | Sets which material type should be checked for. | [Material](#material) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isStandingOnMaterial: BIRCH_WOOD
        Target:
          targetType: SELF
```

Will only run if the boss is standing on a BIRCH_WOOD block otherwise the script will be blocked from running.

</div>

</details>

</div>

## Entity-based conditions

### isAlive

Sets the condition to be whether the condition target entity is alive.

| Key | Details | Values |
| --- | :-: | :-: |
| `isAlive` | Sets to check if the entity is alive (or dead). | [Boolean](#boolean) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        isAlive: true
        Target:
          targetType: SELF
```

Will only run if the boss is currently alive otherwise the script will be blocked.

</div>

</details>

</div>

---

### hasTags

Checks if the target entity has specific tags. Scripters can assign and unassign any tag through actions and use them as conditions for later behavior. Tags are just strings (words) that you can assign to a boss.

| Key | Details |           Values            |
| --- | :-: |:---------------------------:|
| `hasTags` | Sets to check if the entity has a list of tags. | [String List](#string_list) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        hasTags:
        - isCool
        - hasANiceBeard
        Target:
          targetType: SELF
```

Will only run if the boss has the tags "isCool" and "hasANiceBeard" otherwise the script will be blocked.

</div>

</details>

</div>


---

### doesNotHaveTags

Same as `hasTags`, but checks if the boss does not have these values.

| Key | Details | Values |
| --- | :-: | :-: |
| `doesNotHaveTags` | Sets to check if the entity does not have a list of tags. | [String List](#string_list) |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        doesNotHaveTags:
        - isStinky
        - isSus
        Target:
          targetType: SELF
```

Will only run if the boss does not have the tags "isStinky" and "isSus" otherwise the script will be blocked.

</div>

</details>

</div>

## Other conditions

### randomChance

Gives the condition a random chance to be valid.

| Key | Details | Values |
| --- | :-: | :-: |
| `randomChance` | Chance that the condition will be valid. | Number between 0.0 and 1.0 |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        randomChance: 0.1
        Target: # Not required
          targetType: SELF # Not required
```

This will give the script a 10% chance of running otherwise the script will be blocked.

</div>

</details>

</div>

Note that this condition is special as it does not require a target.

## Filter NEARBY with tags

To filter `NEARBY_MOBS` or `NEARBY_PLAYERS` based on specific tags, use `ACTION_TARGET` as the condition's target (If the condition is applied to an action and not the script itself). This ensures that the script accurately filters only the mobs/players with the specified tags.

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: NEARBY_MOBS
        range: 40
      bValue: false
      Conditions:
        conditionType: FILTERING
        hasTags:
          - TurnOff
        Target:
          targetType: ACTION_TARGET
```

This script will look for any nearby mobs with the tag `TurnOff` and if they have the tag it will then turn off their AI.

</div>

</details>

</div>

### targetCountLowerThan and targetCountGreaterThan

Creates a condition that allows the action to run only if the specified target number is lower or greater than the defined value.

| Key | Details | Values |
| --- | :-: | :-: |
| `targetCountLowerThan` | Only run the action if the target count is lower than the number specified. | Number between 0 and 999 |

| Key | Details | Values |
| --- | :-: | :-: |
| `targetCountGreaterThan` | Only run the action if the target count is greater than the number specified. | Number between 0 and 999 |

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
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: THUNDER
      duration: 120
      Conditions:
        conditionType: BLOCKING
        targetCountGreaterThan: 2
        Target: #required
          targetType: NEARBY_MOBS #required
          range: 15
```

The script will only run if there are more than 2 mobs within a 15-block radius.

</div>

</details>

</div>

Note that this condition DOES require a target.
