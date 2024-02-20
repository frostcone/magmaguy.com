# Introduction

On this page, you'll discover various examples of custom boss powers created with EliteScript and the [WebApp](https://magmaguy.com/webapp/webapp.html). These straightforward examples illustrate how to utilize multiple actions and other features to craft unique boss powers. 

Additionally, visual demonstrations accompany each example, so it is easier to understand how the script operates within the game.

Feel free to copy any of the examples and use them in your own dungeons or worlds.

## Power Examples

### Slam Down

This script will cause the boss to teleport 8 blocks above the player who dealt damage to it, then slam into the ground. Afterward, it will apply the slow potion effect to any players within 3 blocks of the boss, and display the message 'Stunned' on screen for 3 seconds.

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml
eliteScript:
  SlamDown:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      FinalTarget:
        targetType: DIRECT_TARGET
        offset: 0,8,0
      Target:
        targetType: SELF
    - action: PUSH
      vValue: 0,-5,0
      Target:
        targetType: SELF
      wait: 15
    - action: POTION_EFFECT
      potionEffectType: SLOW
      amplifier: 3
      duration: 60
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    - action: TITLE_MESSAGE
      subtitle: "Stunned!"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    Cooldowns:
      local: 180
      global: 80
```

</div>

</details>

</div>

***

### Push Away

This script will generate a 4-block dome around the boss. Subsequently, it will initiate a particle effect at the zone border, lasting for one second, then another action will push away any players within the zone. Due to the offset setting for the push, players will be slightly propelled upwards. Finally, the script will send a message to any players within the zone.

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml
eliteScript:
  PushAway:
    Events:
    - EliteMobDamagedEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_BORDER
        track: true
      repeatEvery: 5
      times: 4
    - action: PUSH
      Target:
        targetType: ZONE_FULL
        track: true
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: ACTION_TARGET
        normalize: true
        multiplier: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: MESSAGE
      sValue: "&cCool boss!: &fBE GONE!"
      Target:
        targetType: ZONE_FULL
      repeatEvery: 10
      times: 2
    Cooldowns:
      local: 140
      global: 80
```

</div>

</details>

</div>

***

### Example 3

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 4

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 5

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 6

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 7

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 8

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 9

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>

***

### Example 10

<div align="center">

<details>

<summary><b>Expand Example</b></summary>

<div align="left">

```yml

```

</div>

</details>

</div>