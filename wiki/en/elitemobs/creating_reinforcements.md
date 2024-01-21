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

### summonType

`summonType: SUMMON_TYPE` **is a mandatory field** **as it sets when the reinforcement should spawn.** Here are the valid options:

- `summonType: ONCE` Spawns the reinforcement once, the first time the boss is hit. (can rely on a % chance to happen)
- `summonType: ON_HIT` Spawn the reinforcement any time the boss gets hit (can rely on a % chance to happen)
- `summonType: ON_COMBAT_ENTER` Spawn the reinforcement when the boss enters combat (1)
- `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` Special: this is specifically for placing down end crystals for dragon fights when the boss enters combat(1)
- `summonType: GLOBAL` Spawns reinforcements for every player in the same world as the boss. The reinforcements will spawn near the players, no matter how far they are from the boss. This requires the `customSpawn` field to be set to work!

_(1) Bosses enter combat either when they get hit by players or when they detect a player within range._

### filename

`filename: filename.yml` **is a mandatory field as it sets which reinforcement should spawn.** The only exception to making this field mandatory is when using the `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` setting, as end crystals aren't elites.

Here is an example of this field in action:

- `filename: test_boss.yml` uses the boss from the filename `test_boss.yml` as the reinforcement boss.

---

### Minimum viability

`summonType: SUMMON_TYPE` and `filename: filename.yml` are enough on their own to create a Custom Reinforcement. The example

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

demonstrates this. However, if you want or need something more complex, keep reading to see what else you can do with these options.

---

### chance

`chance: DOUBLE` is an optional config field made to compliment the `summonType` `ONCE` and `ON_HIT` options. It represents the chance of the Custom Reinforcement spawning when a boss gets hit. Here are a few examples:

- `chance: 0.2` represents a 20% chance to spawn the Custom Reinforcement
- `chance: 0.5` represents a 50% chance to spawn the Custom Reinforcement
- `chance: 1` represents a 100% chance to spawn the Custom Reinforcement

### location

`location: x,y,z` is an optional config field which allows admins to offset the location of the reinforcement by a number of blocks. Here are the key concepts you need to know about this option:

- **The offset location is relative.** This means that `location: 0,10,0` will spawn a boss exactly 10 blocks above the boss, and not on world coordinates 0,10,0.
- **The relative location is different for regional bosses.** Regional bosses will always use their spawn point as the origin for the relative location, meaning that if you know where the spawn point of the boss is and count the blocks, you can get reinforcement bosses to spawn in specific locations. The Binder of Worlds lair relies on this to spawn the challenge tower bosses in extremely specific block positions, regardless of where the dragon boss is.
- **Bosses will spawn inside of blocks if you mess up measuring distances.**

Here are a few examples:

- `location: 0,10,0` for a non-regional Custom Boss will spawn the reinforcement exactly 10 blocks above the boss, regardless of where it might be
- `location: 0,10,0` for a regional Custom Boss will spawn the reinforcement exactly 10 blocks above the spawn point of the regional boss, regardless of where the boss is.

_**Important note: This is a mandatory field for `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` specifically!**_

### lightningRod

`lightningRod: BOOLEAN` is a special setting only useful for `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. This gives end crystals the ability to smite the floor around them on a delay. It can't be used with the other Custom Reinforcements, as those should rely on powers for these kinds of abilities.

_Note: if you are confused about `DOUBLE` , `INTEGER` and `BOOLEAN` mentions,_ [_read this_]($language$/global/configuration_file_guide.md)_._

### inheritAggro

`inheritAggro: BOOLEAN` is an optional config field which makes Custom Reinforcements inherit the threat levels of the boss. This is especially useful when you want to have the reinforcements that spawn target the person who is dealing the largest amount of damage.

### amount

`amount: INTEGER` is an optional config field which sets the amount of Custom Bosses that spawn. Example:

- `amount: 5` spawns 5 Custom Bosses

### spawnNearby

`spawnNearby: BOOLEAN` is an optional config field which sets whether the Custom Reinforcement should spawn nearby instead of on top of the boss or at a specific relative location. This method should take terrain variation into account correctly, and not spawn bosses inside of walls, though in some setups it might result in them spawning behind walls if the combat area is too small. Has a ~30 blocks radius.

### inheritLevel

`inheritLevel: BOOLEAN` is an optional config field which sets whether the Custom Reinforcement should inherit the level of the Custom Boss it is reinforcing.

### customSpawn

`customSpawn: customSpawnFilename` is a config field which is only used for global reinforcements. It uses the custom spawn settings to set where the reinforcements will be able to spawn. This can be used to make reinforcements able to spawn on the surface, in places with light, in specific biomes and so on. Check the wiki page on custom spawns for more details

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