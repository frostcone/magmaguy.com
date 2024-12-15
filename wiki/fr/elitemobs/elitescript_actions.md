```yaml
  - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello my name is $bossName. What is your level? my level is $bossLevel.
```

Makes the player that hit the boss say "Hello my name is $bossName. What is your level? my level is $bossLevel."

</div>

</details>

</div>

---

### RUN_SCRIPT

This simply runs the scripts defined in `scripts`. Any action can do this, this action only exists as a convenience action for when you just want to do that.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                   Scripts that will be run                    | ✅ |
| `onlyRunOneScript` |         Run only one script from the list.           | ❌ |

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
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Example1
      - Example2
  Example1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Example2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cCool boss!: &fGotcha back!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

When an elite gets damaged, runs RUN_SCRIPT, which runs Example1 and Example2 scripts.

Example1 script will damage all players within 10 blocks from the boss.
<br>Example2 script will message all players within 10 blocks from the boss with the message "&cCool boss!: &fGotcha back!".

</div>

</details>

</div>

---

### SCALE

Allows you to scale entities.

| Values   |                            Details                            | Mandatory |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `scale` |            Sets the scaling size                               |     ✅     |
| `duration` |           Sets how long the scaling effect should last      |     ❌     |

When scaling, 1.0 represents the default size. To make the entity larger, increase the value (e.g., `1.2`). To make the entity smaller, decrease the value (e.g., `0.8`).

**Note: This can target players so please be careful with how you use it!**

**Note: If you have already scaled the boss using the `scale` setting in the boss config, the duration setting will reset the boss back to the default size of `1.0`, regardless of the initial `scale` value in the config.**

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedEvent
    Actions:
    - action: SCALE
      Target:
        targetType: SELF
      scale: 0.3
      duration: 60
```

When the mob gets hit, it will shrink to a tiny size. After 60 ticks (3 seconds), it will revert back to its default size (`1.0`).

</div>

</details>

</div>

---

### SET_FACING

Makes the boss face a certain direction. Mostly used together with animations.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `vValue` | Which direction should the boss face. X,Y,Z | ❌ |
| `RelativeVector` |      Uses relative vectors to make the boss face a target.      | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      vValue: 1,0,0
```

Will make the boss face East.

</div>


<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SET_FACING
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: NEARBY_PLAYERS
          range: 20
```

Will make the boss face a player within 20 blocks range.

</div>

</details>

</div>

---

### SET_MOB_AI

Sets if the mob has AI. In Minecraft, mobs with no AI will not move and will not attack. They can still get damaged, but damaging them will not result in them getting knocked back.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 Sets whether the boss has AI                  | ✅ |
| `duration` |               Sets the of the value set (ticks)               | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Sets the boss to not have AI for 2 seconds (40 ticks).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Sets if the mob is aware. In Minecraft, mobs that are not aware will not move to new locations and will not attack. They can still get damaged, and they will get knocked back.

As a note, if the mob was already moving to a location when it lose awareness, it will finish going to that location before fully stopping and not moving anymore.

This means you can use unaware mobs to move to defined locations, unlike mobs with no AI.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                   Sets whether the is aware                   | ✅ |
| `duration` |               Sets the of the value set (ticks)               | ❌ |

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
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Sets the boss to not have awareness for 2 seconds (40 ticks).

</div>

</details>

</div>

---

### SET_ON_FIRE

Sets an entity on fire for the duration.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Duration of effect, in ticks                  | ✅ |

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
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Sets on fire all players within 10 blocks from the boss for 3 seconds (60 ticks).

</div>

</details>

</div>

---

### SET_TIME

Sets the in-game time of the world the target is in.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         Sets the time                         | ✅ |

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
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

When struck the boss will set the time of the world the boss is in to be 10000 ticks.

</div>

</details>

</div>

---

### SET_WEATHER

Sets the weather of the world the target is in for a set amount of time.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     Sets the weather type                     | ✅ |
| `duration` |           Sets the duration of the weather pattern            | ✅ |

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
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Sets the weather of the world the boss is in to be raining/snowing for the next minute.

*Note: The effect will take a while to trigger.*

</div>

</details>

</div>

#### weather

The following are valid weather patterns:

- `CLEAR` - Sets the weather to be clear
- `PRECIPITATION` - Sets the weather to rain / snow, depending on the biome, location height and other vanilla Minecraft considerations.
- `THUNDER` - Sets the weather to thunderstorm

---

### SPAWN_FIREWORKS

Spawns fireworks.

| Values |                                                                                                            Details                                                                                                            | Mandatory |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                 [More info here]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                           Sets the velocity of the fireworks rocket                                                                                           | ✅ |
| `flicker` |                                                                                          Sets if the firework particles will flicker                                                                                          | ❌ |
| `withTrail` |                                                                                         Sets if the firework rocket will leave a trail                                                                                        | ❌ |
| `power` |                                                                                                Sets the power of the fireworks                                                                                                | ❌ |
| `fireworkEffects` |                                                                     Sets the effects of the fireworks, relating to how long it will take before exploding                                                                     | ✅ |
| `fireworkEffectType` |                                                 Sets the shape of the firework [from this list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                 | ❌ |
| `fireworkEffectTypes` | Sets the shapes of the firework [from this list](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html) . This is a list of shapes - if you want a list of shapes, don't use `fireworkEffectType`! [1] | ❌ |

[1] When using multiple shapes for the fireworks, each shape will use the colors from the list of colors at the same position. Check example below.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Spawns fireworks at the boss location offset by x= 1, y= 1.5 and z = 0. Gives the fireworks a velocity of x=.5, y=-.35 and z=1. The fireworks won't flicker nor have trails; power is set to 2, so the fireworks explosion will be delayed by that amount. 

Finally, there are two lists of color lists: list 1 is orange & red and list 2 is yellow & blue. There are two shapes for the fireworks: BALL\_LARGE and STAR. This means that BALL\_LARGE (element 1) will use orange & red colors (list 1) and STAR (element 2) will use yellow & blue colors (list 2).

</div>

</details>

</div>

#### fireworkEffects

These are the effects the fireworks rocket will show. At least one effect is required. The following are valid effects:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Strikes lightning. This is a visual effect, if you want damage you should add a damage action.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |

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
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

Strikes lightning the boss every 5 ticks for 5 times. 

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Spawns a falling block at the target. Visual only, does not place the block.

| Values           |                                                                                      Details                                                                                       | Mandatory |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [More info here]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | Sets the [Material](#material) of the falling block. [Check valid types here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) and make sure they are a valid block material. | ✅ |
| `landingScripts` |                                                            Sets the list of scripts that will run when the block falls                                                             | ✅ |
| `vValue`         | Sets the velocity and direction of a falling block. | ✅ |

`landingScripts` works the same way as [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script) but can accept the special target type `LANDING_LOCATION`.

The `LANDING_LOCATION` is inherited by script runners, allowing for a landing location script to also function as a script runner. You can add a wait on the action that calls the scripts, followed by the subsequent script calls. The `LANDING_LOCATION` will always be the argument for the target, even when inherited, as it is assigned in a single specific way.

*Note: This action also accepts relative vectors. Learn more about how to use those [here]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

When the boss is struck, this script will spawn a falling stone block 10 blocks above and 3 blocks next to the boss location. 

Once the block falls, it will run the LandingScriptExample script, which will place a stone block at the location the block landed on.
The block will stay there for 10 seconds (200 ticks) before it disappears.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Spawns particles at the target.

**Note: If coverage is not set, then the coverage will be set to 0.3 by default!**

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           Lists the particles that will be spawned            | ✅ |

#### particles

Particles have their own special settings, which go as follows:

| Values | Details | Default | Special |
| --- | :-: | :-: | :-: |
| `x` | Sets offset of X | 0.01 | (1) |
| `y` | Sets offset of Y | 0.01 | (1) |
| `z` | Sets offset of Z | 0.01 | (1) |
| `amount` | Sets amount of particles spawned | 1 | (1) |
| `speed` | Sets speed of particles | 0.01 | ❌ |
| `particle` | Sets entity type | `FLAME` | [Pick from this list!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Sets red value | `255` | (2) |
| `green` | Sets green value | `255` | (2) |
| `blue` | Sets blue value | `255` | (2) |
| `toRed` | Sets final red value | `255` | (3) |
| `toGreen` | Sets final green value | `255` | (3) |
| `toBlue` | Sets final blue value | `255` | (3) |

_(1) If the `amount` is set to 0, `x`, `y` and `z` will set the particle's velocity instead._

_(2) Only for the `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` and `SPELL_MOB_AMBIENT` `particle`s_

_(3) Only for the `DUST_COLOR_TRANSITION` `particle`_

It is important to note that one SPAWN_PARTICLE script can spawn multiple particles. Each particle can then have its own configuration fields within the SPAWN_PARTICLE action. Here is an example:

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Spawns fireworks at the boss location offset by x= 1, y= 1.5 and z = 0. Gives the fireworks a velocity of x=.5, y=-.35 and z=1. The fireworks won't flicker nor have trails; power is set to 2, so the fireworks explosion will be delayed by that amount. 

Finally, there are two lists of color lists: list 1 is orange & red and list 2 is yellow & blue. There are two shapes for the fireworks: BALL\_LARGE and STAR. This means that BALL\_LARGE (element 1) will use orange & red colors (list 1) and STAR (element 2) will use yellow & blue colors (list 2).

</div>

</details>

</div>

#### Moving a particle:

It is possible to set a specific speed for a particle, and it works the same way the Spigot API does. This allows scripters to set a particle to go in a specific direction at a specific speed. It is not possible to make particles change direction midway. This effect is used in the flamethrower enchantment and boss power.

To move a particle, set `amount: 0`. This will signal to Minecraft that the `x`, `y` and `z` values are actually a vector. This vector sets the direction toward which your particle will go.

Let's say that you want a `FLAME` particle to go up. To do this, you want a positive `y` value, and nothing else. Finally, you will want to set the velocity to what you want the speed to be. Here is a full example:

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true  
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3  
      repeatEvery: 10
```

This will spawn a flame particle at the boss location that will go up.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Summons reinforcements from EliteMobs Custom Bosses.

| Values |                Details                 | Mandatory |
| --- |:-------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Sets the filename of the Custom Boss reinforcement       | ✅ |
| `duration` |        Sets the duration of the reinforcement (ticks)         | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: "your_boss_file.yml"
```

Spawns the reinforcement with the filename "your_boss_file.yml" at the boss location.

</div>

</details>

</div>

---

### TELEPORT

Teleports the target.

| Values |                        Details                        | Mandatory |
| --- |:-------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |   Where the target should be teleported to   | ✅ |

*Note: this also accepts relative vectors. Learn more about how to use those [here]($language$/elitemobs/elitescript_relative_vectors.md).*

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
      location: 0,10,0
```

Teleports the boss 10 blocks upwards.

</div>

</details>

</div>

#### location

You can set any specific location, such as `location: world,100,100,100`, but you can also use offsets and relative directions. If you want to offset by a specific distance, you can just write something like `location: 0,10,0` to make it teleport the boss 10 blocks up.

      - idéntico a los de [onDeathCommands](#onDeathCommands).
   
```

</details>

---

### disguise

Sets the LibsDisguises disguise if that plugin is enabled. [More info here.]($language$/elitemobs/libsdisguises.md)

| Key | Values | Default |
|-|:-:|-|
| `disguise` | [String](#string) | none |
| `customDisguiseData` | [String](#string) | none |

<details> 

<summary><b>Example disguise</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>Example custom disguise</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Sets a custom disguise from skindex. [Check this page]($language$/elitemobs/libsdisguises.md) to learn how to correctly format this data.

</details>

***

### customModel

Sets the custom model to use, if you have a custom model and ModelEngine. [More info here.]($language$/elitemobs/custom_models.md)

| Key | Values | Default |
|-|:-:|-|
| `customModel` | [String](#string) | none |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

Sets if the boss can move. Frozen bosses can still attack.
</br>*Note: this might not work on some entities.*

| Key | Values | Default |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

Sets the music a boss will play, starting when it spawns. Requires the .ogg file for the song to be in the resource pack.

| Key | Values | Default |
|-|:-:|-|
| `song` | [String](#string) | none |

**Note: The `song` setting requires `followDistance` to be set, as `followDistance` determines the range at which the song starts playing.**
Check out the example on how to set the `length` (milliseconds) of the `song`.

<details> 

<summary><b>Example</b></summary>

There are two ways to set up songs. Here is the first one:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

This will play the song ice_queen.idle for 76370 milliseconds and then loop it. Note that the location of the song is determined by the resource pack.

Here is the second way of setting up songs:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

This will play the song ice_queen.end_transition for 14328 milliseconds and then transition to ice_queen.end_loop for 28657 milliseconds and loop the end_loop.

This allows bosses to have an "intro" or "transition" song and then a main track that loops.

</div>

</details>

***

### cullReinforcements

Sets if the reinforcements of the boss will be removed when the boss dies.

| Key | Values | Default |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

Sets the movement speed of the boss.
</br>*Note: anything beyond 0.36 might be too fast.*

| Key | Values | Default |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | none |

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Merging resource packs

While using FMM you will probably need to merge resource packs.

You can merge resource packs manually, but we recommend using an online tool such as [merge.elmakers](https://merge.elmakers.com/) to merge your resource packs.

#### **Safer, easier, uneditable file distribution**

One thing that FMM tries to tackle is users repurposing models they have obtained to edit them in ways the model creator did not want them to edit, specifically in order to reskin or otherwise slightly alter a model and potentially try to resell as an original creation.

To that end, FMM uses the `.fmmodel` file format which aims to strip `.bbmodel` files down to the point where they can
be used by the plugin but can not be edited in Blockbench.

As a modeler, you now have the choice whether you want to release an uneditable `.fmmodel` file, an editable `.bbmodel`
file or even do differential pricing or distribution terms of service for the two.

Generating an `.fmmodel` is as simple as putting your `.bbmodel` in the `~/plugins/FreeMinecraftModels/imports` folder
and reloading the plugin with `/fmm reload` or restarting the server. Your `.fmmodel` will then be in
the `~/plugins/FreeMinecraftModels/models` folder.

## What can FreeMinecraftModels (FMM) do for developers who want to integrate it in their plugins?

FMM has a maven repo!
Maven:

```xml

<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Note FreeMinecraftModels is mean to be used as an API, and will require installation of the plugin on the server. Do
not shade it into your plugin!*

FMM aims to be as easy as possible to use as an API.

Right now, there is only one class you need to know about if you wish to use FMM as an API for your plugin, and that
is `StaticEntity`.

Here is a snippet for handling a static model:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Logger.warningMessage("FMM failed to find a model named " + id + " !");
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

Keep in mind that static models are meant to stay in place and act as a decorative element in a fixed location (
animations don't count as 'movement' here). While it is possible to move them, consider whether you might instead want
to use a dynamic model if that is your purpose.

And here is how EliteMobs, my custom bosses plugin, uses dynamic entities:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

Dynamic models are built on top of a living entity, which can be provided either when using the create method as in the
example above, or when running the spawn method on a Dynamic entity.

While there is no formal API resource right now, all elements intended for API use are contained within ModeledEntity (
the base class for all entities), StaticEntity, DynamicEntity and ModeledEntityManager. 99% of developers should find
all the methods they need spread across those three classes.

# Contributing to the FreeMinecraftModels (FMM) project as a developer

FMM is distributed under the GPLV3 license and code contributions are welcome. Here are the basic contribution
guidelines:

- Follow the existing naming conventions, maintain the existing level of verbosity and add enough documentation that
  your contribution is easy to understand
- Keep contributions relevant to the scope of the plugin. If you don't know whether it will be relevant, feel free to
  ask ahead of time.
- Be mindful of the performance impact of your code. Some contributions may be turned away if they are either too
  unoptimized or otherwise cause too great of a performance impact.

## General plugin outline

To save you some time, here is a quick breakdown of the logic flow of FMM:

1) Read the `imports` folder
2) Move files from `imports` folder into the `models` folder. If the file is a `.bbmodel`, it gets converted
   to `.fmmodel` in the models folder.
3) Read the files in the `models` folder.
4) Interpret all model structures, creating `Skeleton`s which contain groups of `Bone`s, and these bones contain groups
   of child `Bone`s and `Cube`s. `Cube`s and `Bone`s generate the JSON resource pack data they are each related to. This
   means that `Cube`s generate the JSON specific to cubes and `Bone`s generate the outline and individual boneBlueprint
   files. Note that one boneBlueprint results in one resource pack file. Models are added to a list as they are
   generated.
5) Still in the `Skeleton`, interpret all `Animations` in the model, if any
6) All data has now been initialized, the resource pack was generated in the `outputs` folder and the plugin is ready to
   be used.

## Tricks used in this plugin:

The tricks used here are fairly well-established and standardized, but will be listed nonetheless because they can be counter-intuitive.

Please note that these tricks are all completely invisible to users and model makers; restrictions and workarounds are only listed to help you understand how FMM bypasses various Minecraft limitations.

- All models are scaled up 4x and then the size and pivot point is readjusted in code in order to extend the theoretical maximum size of the model.
- Because resource pack models can only have models go from -16 to +32 in size, models are shifted in the background. This is completely invisible to players.
- Leather horse armor is used to create models with a hue that can be influenced through code (i.e. for damage indications). The horse armor must be set to white to display the correct colors!
- Blockbench uses a specific system of IDs for the textures, but actually reads the textures sequentially from config. IDs are assigned here based on their position in the list of textures, following how Blockbench does it.
- Each boneBlueprint is a different armor stand entity due to Minecraft limitations.
- Leather horse armor is on the head slot of the armor stand
- Armor stands are used for the default static items. //todo: soon I'll have to implement the new alternative display
  system from MC 1.19.4+, it's way more efficient.
- To avoid collisions with other plugins which modify leather horse armor, FMM uses custom model data values starting at
  50,000.

# Contributing to the FreeMinecraftModels (FMM) project in general

FMM is actually crowdfunded by the lovely people over at [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! All contributions help more than you'd imagine ;)

# Currently planned features:
- Bedrock client RSP generation.
- Server properties-independent RSP management with geyser integration.
- Custom entities (?).
- tag_projectile as meta bones from which projectiles can be shot (can have more than one per model).

# Current weird limitations that need to be fixed:
- If the pivot point (origin) of a boneBlueprint is set to be over 67ish the model starts floating.
```
# Actions d'Elite Script

Les actions sont au cœur du script. Elles déterminent ce que fait le script et vous permettent de définir des intervalles personnalisés.

Les actions commencent toujours par le type d'action que vous allez effectuer. Différents types d'action ont des fonctions différentes. De plus, toutes les actions ont une ou plusieurs cibles. Les actions peuvent également avoir un temporisateur d'attente, pour s'assurer que les choses se produisent avec des délais personnalisables. Enfin, les actions peuvent également avoir plusieurs autres champs spécifiques au type d'action.

## Attributs partagés

| Valeurs             |                                                                                 Détails                                                                                  | Spécial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                 Définit la durée d'attente (en ticks) avant l'exécution des actions                                                 | ❌ |
| `repeatEvery`      |        Définit les actions à répéter toutes les quantités définies de ticks. Tout script qui a cette valeur définie mais qui n'utilise pas les durées sera terminé lors de la mort du mob pour éviter le décalage.         | ❌ |
| `times`            |                                                           Définit le nombre de fois qu'une action se produira                                                           | Requiert `repeatEvery` |
| `scripts`          |                                                         Définit les scripts qui s'exécuteront à la fin de l'action                                                          | ❌ |
| `onlyRunOneScript` |                                                       Sélectionne un des `scripts` au hasard et exécute seulement celui-là.                                                       | ❌ |
| `offset`           | Cette option se trouve sous `Target`. Vous permet de décaler l'emplacement de la cible. Le décalage ne fonctionne pas avec les actions qui ciblent des zones avec `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |
| `debug`           | Cette option va sous la section d'action du script. Lorsqu'elle est définie sur true, elle affiche des icônes de barrière dans la zone où se trouve l'action. | ❌ |

## Types d'action

### ACTION_BAR_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Affichera dans la barre d'action le texte « Bonjour le monde ! » à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Ajoute une barre de boss à la ou aux cibles.

| Valeurs |                            Détails                            | Obligatoire |                   Spécial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |
| `duration` |               Durée de la barre de boss en ticks               | ✅ |                      ❌                       |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Affichera une barre de boss qui indique « Bonjour le monde ! » à tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 1 seconde.

</div>

</details>

</div>

---

### DAMAGE

C'est ainsi que vous pouvez endommager les entités en tant qu'autres entités.

_Remarque : utilise en natif le système de dégâts d'EliteMobs ! Cela signifie que vous verrez la réduction normale de l'armure d'élite due aux coups. Vous trouverez plus d'informations à ce sujet dans la section des multiplicateurs._

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicateur de dégâts                       | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Définit les dégâts à la moitié de la quantité de dégâts de base que le boss infligerait au joueur, en tenant compte des réductions de dégâts.

</div>

</details>

</div>

#### multiplier

Définit le multiplicateur de dégâts du boss pour l'effet.

**Important**: afin de permettre une mise à l'échelle facile et automatique des pouvoirs, les dégâts sont appliqués en faisant en sorte que le boss frappe le joueur une fois et en multipliant les dégâts de base du boss par le multiplicateur.

Cela signifie qu'un multiplicateur de 1.0 est identique à un coup normal du boss. 2.0 est un coup 2 fois la force normale, et 0.5 est à 50 %.

---

### MAKE_INVULNERABLE

Rend une cible invulnérable.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Définit si le boss est invulnérable                | ✅ |
| `duration` |       Définit la durée de l'invulnérabilité (ticks)        | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Rend un boss invulnérable pendant 60 ticks (3 secondes).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifie les dégâts infligés à un boss ou infligés aux joueurs par ce boss. Il s'agit d'une action spéciale avec quelques exigences spéciales.

| Valeurs | Détails | Obligatoire |
| --- | :-: | :-: |
| `multiplier` | Multiplicateur de dégâts. | ✅ |

Cette action est spéciale et doit se trouver dans un script qui possède un détecteur d'événements pour un événement de dégâts. Les événements de dégâts valides suivants : `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` pour les événements qui réduisent les dégâts infligés au boss et `PlayerDamagedByEliteMobEvent` pour les événements qui réduisent les dégâts infligés aux joueurs.

Il est fortement recommandé d'apprendre comment fonctionne la condition `hasTag` afin de mieux utiliser cette action. Lorsqu'elle est utilisée correctement, il est possible de faire en sorte que le boss résiste temporairement aux dégâts ou qu'il soit plus faible aux dégâts, et cela peut être associé à des améliorations du joueur, à l'emplacement du boss ou à de nombreux autres facteurs.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Augmente les dégâts infligés au boss par les joueurs de 2 fois, mais seulement si le joueur a une balise appelée "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envoie un message aux cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enverra un message de chat à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### NAVIGATE

Fait que le boss navigue (marche) vers la cible spécifiée.

| Valeurs |                            Détails                            | Obligatorio | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Définit la vitesse de navigation du boss. `1.0` étant la valeur du boss telle que définie dans la configuration. | ❌ | ❌ |
| `bValue` | Définit si le boss doit être téléporté de force vers `FinalTarget` si la navigation échoue. | ❌ | ❌ |
| `duration` | Combien de temps le boss doit-il essayer de naviguer avant d'abandonner. Défini en ticks. La valeur par défaut est de 100 ticks. | ✅ | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

Fera naviguer le boss jusqu'à l'endroit où se trouvait le joueur lorsqu'il a frappé le boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Place un bloc à l'emplacement ou aux emplacements de la cible pendant la durée.

| Valeurs |                                                         Détails                                                         | Obligatoire |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) du bloc, [liste complète ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Durée de l'effet, en ticks                                               | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Place une coupole de verre autour du boss qui durera 6 secondes.

_Remarque : si aucune durée n'est définie, le placement du bloc est permanent._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Lit l'animation spécifiée pour un modèle personnalisé à l'aide de Model Engine. Nécessite Model Engine et un modèle personnalisé valide sur la cible qui exécute l'animation.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le nom de l'animation                 | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Définit que le boss doit lire l'animation fortnite_dance. Requiert que le serveur ait Model Engine, que le boss ait un déguisement personnalisé et que le déguisement personnalisé ait une animation appelée "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Reproduit un son dans le jeu.

| Valeurs   |                            Détails                            | Obligatoire |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Définit le nom du son à lire            |     ✅     |
| `pitch`  |           Définit la hauteur du son à lire            |     ❌     |
| `volume` |           Définit le volume du son à lire           |     ❌     |

[Voici une liste pratique de tous les sons Minecraft !](https://www.digminecraft.com/lists/sound_list_pc.php) N'oubliez pas que cela peut également lire des sons personnalisés à partir de packs de ressources.
Lorsque l'action cible une zone, l'action reproduira un son pour chaque bloc de cette zone. Cela peut rendre le son considérablement plus fort que la normale, alors envisagez de réduire le volume si vous ciblez une zone.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Reproduit le son de résonance des cloches de Minecraft à l'emplacement du boss

</div>

</details>

</div>

---

### POTION_EFFECT

Applique un effet de potion spécifique à la ou aux cibles.

| Valeurs |                                                       Détails                                                       | Obligatoire |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Type d'effet, [la liste valide est ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Niveau de l'effet de potion (commence à 0)                                          | ✅ |
| `duration` |                                           Durée de l'effet (ticks)                                            | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Cela fera léviter tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 2 secondes (40 ticks).

</div>

</details>

</div>

---

### PUSH

Pousse une cible par un vecteur défini.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Définit le vecteur de la vitesse qui sera appliquée        | ✅ |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en davantage sur l'utilisation de ceux-ci [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Cela poussera tous les joueurs qui se trouvent à moins de 10 blocs du boss dans les airs en utilisant une force de 0,3. Cette action sera répétée 10 fois toutes les 0,5 secondes (10 ticks). En d'autres termes, cela fera durer cet effet pendant 5 secondes (10 fois x 10 ticks = 100 ticks).

Cela donnera l'impression que les joueurs sautent.

</div>

</details>

</div>

#### vector

Les vecteurs sont définis par `vValue : x,y,z`. Par exemple, si vous voulez que la cible soit poussée vers le haut, vous pouvez faire `vValue : 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Exécute une commande en tant que console.

| Valeurs |                             Détails                             | Obligatoire |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Remarque : il existe des marqueurs de position disponibles ! Consultez RUN_COMMAND_AS_PLAYER, ce sont les mêmes**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName mon niveau est $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Fait diffuser par la console le message "Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName mon niveau est $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Exécute une commande en tant que `joueur`. Requiert que la cible soit des joueurs.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Commande qui sera exécutée                    | ✅ |

**Remarque : RUN_COMMAND_AS_PLAYER et RUN_COMMAND_AS_CONSOLE utilisent les marqueurs de position suivants :**

| Marqueur de position | Détails | Spécial |
| --- | :-: | :-: |
| `$playerName` | Nom d'affichage du joueur | La cible doit être un joueur |
| `$playerX` | Emplacement X du joueur | La cible doit être un joueur |
| `$playerY` | Emplacement Y du joueur | La cible doit être un joueur |
| `$playerZ` | Emplacement Z du joueur | La cible doit être un joueur |
| `$bossName` | Nom d'affichage du joueur | La cible doit être un joueur |
| `$bossX` | Emplacement X du boss | ❌ |
| `$bossY` | Emplacement Y du boss | ❌ |
| `$bossZ` | Emplacement Z du boss | ❌ |
| `$bossLevel` | Niveau du boss | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel.
```

Fait que le joueur qui a frappé le boss dise "Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel.", ce qui signifie qu'il dit simplement "Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel."

</div>

</details>

</div>

---

### SET_ON_FIRE

Enflamme la cible.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Durée de l'effet, en ticks                  | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Enflamme tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 3 secondes (60 ticks).

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoque un renfort.

*Remarque : vous devez généralement invoquer des boss personnalisés via cette action. Vous pouvez lire la documentation de configuration du boss pour cela [ici]($language$/elitemobs/creating_bosses.md).*

| Valeurs |                Détails                 | Obligatoire |
| --- |:-------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `filename` | Nom de fichier du boss à générer | ✅ |
| `inheritLevel` |     Définit si le boss doit hériter du niveau du boss qui l'a engendré      | ❌ |
| `inheritAggro` |   Définit si le boss doit hériter de l'aggro du boss qui l'a engendré      | ❌ |
| `spawnNearby` |   Définit si le boss doit apparaître près du boss principal au lieu d'être sur le dessus.    | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: SELF
      filename: "test_boss.yml"
      inheritLevel: true
      inheritAggro: true
      spawnNearby: true
```

Génère un renfort "test_boss.yml" qui hérite du niveau et de l'aggro du boss parent et apparaît près de celui-ci.

</div>

</details>

</div>

---

### TELEPORT

Téléporte la cible.

| Valeurs |                        Détails                        | Obligatoire |
| --- |:-------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |   Où la cible doit être téléportée   | ✅ |

*Remarque : cela accepte également les vecteurs relatifs. Apprenez-en davantage sur l'utilisation de ceux-ci [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

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
      location: 0,10,0
```

Téléporte le boss de 10 blocs vers le haut.

</div>

</details>

</div>

#### location

Vous pouvez définir n'importe quel emplacement spécifique, tel que `location : monde,100,100,100`, mais vous pouvez également utiliser des décalages et des directions relatives. Si vous voulez un décalage par une distance spécifique, vous pouvez simplement écrire quelque chose comme `location : 0,10,0` pour le téléporter 10 blocs vers le haut.

