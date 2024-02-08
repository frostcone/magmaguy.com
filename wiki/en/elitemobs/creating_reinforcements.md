# Creating Custom Reinforcements

If you are interested in summoning elites during combat to reinforce the a boss, this guide covers that in detail.

## Steps to create a custom boss:

1. Create your main custom boss that will summon your custom boss
2. Create a custom boss for reinforcements. Keep in mind that custom bosses can be stronger than vanilla mobs, but they can also be weaker.
3. Add the correct reinforcement line to the configuration file

## Creating the reinforcement line

Let's assume you have a custom boss with this format:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

And you want to add reinforcements to it. Here is what one such reinforcement could look like:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

And to make it valid, add it to the powers list:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

The reinforcement is now added to the boss entity. However, as you can see, there are several options here you can customize. Let's cover them.

## All Custom Reinforcement options

*Tip: You can also use EliteScript to summon reinforcements, more about that [here]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

This is a mandatory field. It sets when the reinforcement should spawn.

| Key    |   Values    | Default  |
|--------|:-----------:|:--------:|
| `summonType` | Special [1] | `ON_HIT` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Special [1]

| Key | Description                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Spawns the reinforcement once, the first time the boss is hit. (can rely on a % chance to happen) |
| `ON_HIT`  | Spawn the reinforcement any time the boss gets hit (can rely on a % chance to happen)             |
| `ON_COMBAT_ENTER`    | Spawn the reinforcement when the boss enters combat (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Special: this is specifically for placing down end crystals for dragon fights when the boss enters combat(1)                                                                                                 |
| `GLOBAL`    |  Spawns reinforcements for every player in the same world as the boss. The reinforcements will spawn near the players, no matter how far they are from the boss. This requires the `customSpawn` field to be set to work!                                                                                                 |

_(1) Bosses enter combat either when they get hit by players or when they detect a player within range._

***

### filename

This is a mandatory field as it sets which reinforcement should spawn. The only exception to making this field mandatory is when using the `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` setting, as end crystals aren't elites.

| Key    |        Values         | Default |
|--------|:---------------------:|:-------:|
| `filename` | [Filename](#filename) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Minimum Viability**

`summonType: SUMMON_TYPE` and `filename: filename.yml` are enough on their own to create a Custom Reinforcement. The following example demonstrates this.

<div align="center">

<details>

<summary><b>Example</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*However, if you want or need something more complex, keep reading below to see what else you can do with these options.*

</div>

</details>

</div>

<div align="center">

***

### chance

This is an optional config field made to compliment the `summonType` `ONCE` and `ON_HIT` options. It represents the chance of the Custom Reinforcement spawning when a boss gets hit.

| Key    |        Values         | Default |
|--------|:---------------------:|:-------:|
| `chance` | [Double](#double) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Represents a 50% chance to spawn a Custom Reinforcement.*

</div>

</details>

***

### location

`location: x,y,z` is an optional config field which allows admins to offset the location of the reinforcement by a number of blocks. Here are the key concepts you need to know about this option:

**The offset location is relative.** This means that `location: 0,10,0` will spawn a boss exactly 10 blocks above the boss, and not on world coordinates 0,10,0.


**The relative location is different for regional bosses.** Regional bosses will always use their spawn point as the origin for the relative location, meaning that if you know where the spawn point of the boss is and count the blocks, you can get reinforcement bosses to spawn in specific locations. The Binder of Worlds lair relies on this to spawn the challenge tower bosses in extremely specific block positions, regardless of where the dragon boss is.


**Bosses will spawn inside of blocks if you mess up measuring distances.**

| Key    |      Values       | Default |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*For a non-regional Custom Boss will spawn the reinforcement exactly 10 blocks above the boss, regardless of where it might be.*

*For a regional Custom Boss will spawn the reinforcement exactly 10 blocks above the spawn point of the regional boss, regardless of where the boss is.*

</div>

</details>

_**Important note: This is a mandatory field for `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` specifically!**_

***

### lightningRod

Is a special setting only useful for `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. This gives end crystals the ability to smite the floor around them on a delay. 

It can't be used with the other Custom Reinforcements, as those should rely on powers for these kinds of abilities.

| Key    |       Values        | Default |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

Is an optional config field which makes Custom Reinforcements inherit the threat levels of the boss. 

This is especially useful when you want to have the reinforcements that spawn target the person who is dealing the largest amount of damage.

| Key    |       Values        | Default |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

Is an optional config field which sets the amount of Reinforcements that spawn.

| Key    |       Values        | Default |
|--------|:-------------------:|:-------:|
| `amount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

Is an optional config field which sets whether the Custom Reinforcement should spawn nearby instead of on top of the boss or at a specific relative location. 

This method should take terrain variation into account correctly, and not spawn bosses inside of walls, though in some setups it might result in them spawning behind walls if the combat area is too small. Has a ~30 blocks radius.

| Key    |       Values        | Default |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

Is an optional config field which sets whether the Custom Reinforcement should inherit the level of the Custom Boss it is reinforcing.

| Key    |       Values        | Default |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

Is a config field which is only used for global reinforcements. It uses the custom spawn settings to set where the reinforcements will be able to spawn. 

This can be used to make reinforcements able to spawn on the surface, in places with light, in specific biomes and so on. Check the wiki page on [Custom Spawns]($language$/elitemobs/creating_spawns.md) for more details

| Key    |        Values         | Default |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Filename](#filename) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Putting a big reinforcement together

Let's create an example reinforcement using most of the previous fields:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

This does the following:

- Creates a Custom Reinforcement
- The Custom Reinforcement will spawn when the Custom Boss enters combat (`summonType: ON_COMBAT_ENTER`)
- The Custom Reinforcement summoned will be the one from `test_boss.yml` (`filename: test_boss.yml`)
- The Custom Reinforcement will spawn within 30 blocks of the Custom Boss' current location (`spawnNearby: true`)
- The Custom Reinforcement will inherit the aggro of the Custom Boss it is reinforcing, meaning it will attack the player who has dealt the most damage (`inheritAggro: true`)
- Regardless of the setting in `test_boss.yml` , the Custom Reinforcement will have the same level as the Custom Boss it is reinforcing (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

This does the following:

- Creates a Custom Reinforcement
- The Custom Reinforcement will be an End Crystal which gets placed down when the combat starts (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- The End Crystal will smite the ground around on a delay (`lightningRod: true`)

Now to apply this to the Custom Boss:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

And you're done! Here are a few more tips:

- The fields can be set in any order, though it is recommended to always have `summonable` first!
- This is a big improvement on the old reinforcements system, which is no longer listed. It is not recommended to rely on it at this point, as it may cease to work in the future.