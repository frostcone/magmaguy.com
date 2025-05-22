[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are Custom Spawns?

Custom Spawns are used by Events and global reinforcements to set how, where and when an event should spawn the boss for that event.

Events and global reinforcements set which spawn they are using by writing down its filename.

# Creating Custom Spawns

Custom Spawns go into the `customspawns` folder. One Custom Spawn can be used by several events at the same time, so you don't have to create one per event.

Here is an example Custom Spawn:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Making an Anywhere Spawn
To make a spawn that can occur **anywhere**, your configuration should resemble the following:

```yml
isEnabled: true
canSpawnInLight: true
```
This configuration allows mobs to spawn in any location, in any world, at any time, and during any moon phase.

If you're interested in creating a more customized spawn, keep reading below.

## Values

<div align="center">

***

### isEnabled

Sets if the spawn is enabled.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### lowestYLevel

Sets the lowest y level (map height) used.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

Sets the lowest y level (map height) used.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Integer](#integer) |  `320`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

Sets the list of the worlds where the custom spawn can happen. This setting can be left out to allow **all** your worlds to be valid.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*If you want all your worlds to be valid you can just not use the setting or format it like this:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Sets the list of valid world environments where the custom spawn can happen. This setting can be left out to allow **all** environments to be valid.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [Environment List](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*If you want all environments to be valid you can just not use the setting or format it like this:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomesV2

Sets the list of valid biomes where the custom spawn can happen. This setting can be left out to allow **all** biomes to be valid.
*This setting used to be called `validBiomes` in older versions of EM.*

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [Biome List](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*If you want all environments to be valid you can just not use the setting or format it like this:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Sets the earliest in-game time at which the custom spawn can happen.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

Sets the earliest in-game time at which the custom spawn can happen.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Integer](#integer) | `24000` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

Sets the earliest in-game time at which the custom spawn can happen.

| Key       |   Values    | Default |
|-----------|:-----------:|:-------:|
| `moonPhase` | Special [1] | `24000` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**Special [1]**

<details> 

<summary><b>Expand Table</b></summary>

| Moon Phase        | Preview  |
|-------------------|:--------:|
| `NEW_MOON`        |    🌑    |
| `WAXING_CRESCENT` |    🌒    |
| `FIRST_QUARTER`   |    🌓    |
| `WAXING_GIBBOUS`  |    🌔    |
| `FULL_MOON`       |    🌕    |
| `WANING_GIBBOUS`  |    🌖    |
| `WANING_CRESCENT` |    🌘    |

</details>

***

### bypassWorldGuard

Sets if the custom spawn will bypass protection systems such as WorldGuard.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

Specifies whether the custom spawn can occur on blocks illuminated by light sources.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

Sets if the custom spawn can only happen at the surface of a world.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

Sets if the custom spawn can only happen underground.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>