# Creating World Bosses
*World Bosses are also sometimes referred to as Regional Bosses.*
## What are they?

World Bosses are Custom Bosses set to spawn in a specific location on a specific delay. These are also the bosses used in Dungeons. Though in this section we will specifically be discussing making World Bosses for use outside of dungeons.

## What are they for?

World Bosses allow players to face a fixed challenge while knowing that the loot will be rewarding.

## What do I need to make a World Boss?

1. **A location**. A boss room is recommended, with a roughly 15 block radius (30 blocks across) due to the Minecraft aggro range. Additionally, make sure that the terrain is protected through a [WorldGuard](https://dev.bukkit.org/projects/worldguard) region (so players can't build traps) and that the terrain can't be exploited for combat.
2. **A respawn time**. The respawn timer is essential. I don't recommend doing less than a 30 minute respawn timer or else the boss respawning will be less of an event. 1 hour is a fairly good time, but you may also want to make it so the boss respawns once per day or even once per week.
3. **An escape time**. The longer the respawn, the longer the escape time should be. Also take into account that the escape time should be long enough that people can comfortably challenge the boss. Escape timers are important if you don't want to allow players to kamikaze the boss to death. This is not mandatory, nor even recommended if you want to do massive week-long respawn bosses.
4. **A Custom Boss**. World Bosses are really just Custom Bosses with custom spawning rules. Make sure you select powers with a good raid-size combat compatibility.
5. **Interesting loot**. The big draw for the World Bosses, challenge aside, is the loot. Make sure that players can get something from it that they simply can't get from elsewhere.
6. **A theme**. A good Regional boss should have a theme, with a thematic location and thematic loot.

## Custom Boss configuration options for World Bosses:

These settings are added to the normal Custom Boss config files. [An extensive wiki page on those can be found here]($language$/elitemobs/creating_bosses.md).

<div align="center">

***

### isRegionalBoss

Sets whether the boss is a regional boss. Regional bosses are another name for World Bosses, so you want to set that to `true`.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `isRegionalBoss` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isRegionalBoss: true
```

</div>

</details>

***

### spawnLocations

Spawn locations should be set from in-game using the command `/em addSpawnLocation <filename.yml>`.

While it is possible to manually add locations from config, I don't recommend trying to do that as it is just too easy to get it wrong.

| Key              |           Values            | Default |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

Locations in configuration files (for advanced users) The Regional Boss' config files stores all the instances of that Regional Boss in a single file by storing multiple spawn locations as well as respawn timers. 

In practical terms, that means that this entry:

```yaml
spawnLocations:
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
- elitemobs_sewer_maze,-135.02262355317436,168.2,-153.28849346821508,-98.53906,60.750263:1609026066482
- elitemobs_sewer_maze,-70.43846307626053,168.2,-174.13499832314378,-271.24023,64.19999:1610710886530
- elitemobs_sewer_maze,-130.39762674971664,168.2,-171.67396911490718,-47.532227,51.900173:1609026066482
- elitemobs_sewer_maze,-117.12782160766056,162.2,-166.40989416757444,-71.37402,-1.4997427:1610710974882
- elitemobs_sewer_maze,-105.13138759611667,168.2,-169.85898023126538,-124.34766,41.24988:1610710945331
- elitemobs_sewer_maze,-106.21847515732084,169.2,-152.3609257554766,-170.86523,21.450315:1610537606222
```

contains 7 different Regional Bosses, in different locations, and with different respawn timers. 

Let's break the details down, taking a look at the first Regional Boss:

```yaml
- elitemobs_sewer_maze,-70.17178578884845,168.2,-173.17112099568718,-271.24023,64.19999:1610710903931
```

Since this follows the format `world,x,y,z,pitch,yaw:unixTimeStamp`, the boss is spawning in a world called `elitemobs_sewer_maze`at x = `-70.17178578884845`, y = `168.2`, z = `-173.17112099568718`, pitch = `-271.24023`, yaw = `64.19999`.

The unix timestamp stores the time, in unix time, at which the boss will respawn. This is used to store respawn times through restarts. If you wish to know what time that corresponds to, there are countless unix time to real time conversion tools you can find online. 

If you wish to have a specific boss respawn after a reload or restart, all you need to do it clear the `:unixTimeStamp` entry.

</div>

</details>

***

### spawnCooldown

Sets how long it takes for the boss to respawn, in **minutes**.

**Note: longer respawns are recommended for big bosses!**.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `spawnCooldown` | [Integer](#integer) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
spawnCooldown: 20
```

</div>

</details>

***

### leashRadius

Sets the radius from the `spawnLocation` that the World Boss go to before getting teleported back to its spawn point. This prevent players from dragging the boss to a location where it could be easier to fight it.

**Note: try avoiding making combat areas that require leashes shorter than 20 blocks, as it will make the fight worse.**

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `leashRadius` | [Integer](#integer) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
leashRadius: 30
```

</div>

</details>

***

### Transitive Blocks

Also known as `onSpawnBlockStates` and `onRemoveBlockStates`.

These values allow Regional Bosses to spawn blocks when they enter combat and to remove them when they get removed, meaning when they either escape due to timeout or when they die.

**This is how you can make bosses open or close doors / areas or even modify an arena during combat if you are using it with phase bosses!**

| Key       |          Values          | Default |
|-----------|:------------------------:|:-------:|
| `onSpawnBlockStates` | See Detailed Explanation |  none   |


| Key       | Values  | Default |
|-----------|:-------:|:-------:|
| `onRemoveBlockStates` | See Detailed Explanation |  none   |

<details> 

<summary><b>Detailed Explanation</b></summary>

<div align="left">

**All of the blocks are relative to the spawn location. Make sure that you have your final spawn location before starting to set any blocks.**

</br>If you already made a large Transitive Block area and now need to move the boss, but you do not want to redo the Transitive Blocks. Then you can use the EliteScript [Teleport]($language$/elitemobs/elitescript_actions.md&section=teleport) action to move the boss to the correct location after it spawns. Do keep in mind that you will have to adjust your leash accordingly.

Due to the complexity of setting blocks, it is not recommended you do this manually. You should use the following commands to do it:

- /em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>
- /em cancelblocks

Let's break this down.

**/em registerblocks <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

The most basic command. This is a toggle that you run once to start, and again to commit. Just like all other commands, you pick whether you are setting these blocks to be modified for the `on_spawn` or the `on_remove` state.

If registering the on\_spawn, this will modify the blocks when the boss spawns or respawns. If registering the on\_remove, this will modify the blocks when the boss dies or times out using the Custom Boss timeout mechanic.

To register blocks, simply place or remove the blocks you wish to modify while this setting is on.

**/em registerblocksedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

If you want to modify already set blocks, you can use this command. Works in a very similar way to `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`.

**/em registerblocksarea <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Just like `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`, this allows you to register blocks, but it allows selecting them by getting two diametrically opposed corners (same as the worldedit / worldguard region selection) instead of individually selecting blocks. 

For safety reasons, there is a cap of 200 blocks (by default, modifiable in config.yml) for regional selections. Keep in mind that every block gets modified on the same tick, so if you are modifying a lot of terrain you will probably start seeing big lag spikes when running these modifications.

**/em registerblocksareaedit <regional\_boss\_file.yml> <on\_spawn/on\_remove>**

Works the same way as `/em registerblocksedit` but for areas. Can be used to go over the 200 (default) block registration limit for areas.

**/em cancelblocks**

At any time, if a mistake is made while registering blocks, you can run this command to cancel registration. It will revert any changes you started registering on that edit / registration.

</div>

</details>

</div>

***

## Pro tips to make a good, big Regional Boss fight

1. **Actually think about how the powers on your Custom Boss compliment each other**. You don't want your boss to spend most of its time stopped because he's casting something, as that can actually make the fight really easy. You also don't want the boss to have all ranged attacks and no melee powers or the opposite unless you're designing something very specific. Playtesting is important.


2. **Health - lots of it**. That health multiplier should probably be at a solid 10 if you want people to actually group up to fight the boss.


3. **Damage - not too much**. EliteMobs are already extremely deadly by default, and the powers tend to be exponentially deadlier. Instead of boosting the damage through the ceiling, consider using powers to make the boss hit harder.


4. **Exploits, everywhere**. Make extra sure the terrain isn't exploitable. Put the boss in a closed room to prevent people from trying to snipe it from far. The arrow invulnerability power is probably extremely important for a lot of World Bosses since Minecraft mobs can't deal with getting sniped from chunks away, so if you want to allow bow attacks make sure bows can't be exploited.


5. **Know the plugin**. There's a lot of tiny tricks to beating EliteMobs, like how some powers can be countered by using shields, while others should be countered by dodging or even temporarily running away from the boss. The more you know how the powers work and how they're countered, the better the bosses you make will be.