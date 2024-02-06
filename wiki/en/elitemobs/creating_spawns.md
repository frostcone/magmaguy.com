[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

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

## Values

<!-- FROSTCONE: make sure that the wiki makes it clear that the fields are optional and that empty examples are specifically shown like for the custom boss file. Especially for valid worlds. -->

| Key | Description |                                                          Values                                                          | Default |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------:|-|
| `isEnabled` | Sets if the event is enabled |                                                     `true` / `false`                                                     | `true` |
| `lowestYLevel` | Sets the lowest y level (map height) used |                                                   [Integer](#integer)                                                    | `0` |
| `highestYLevel` | Sets the highest y level (map height) used |                                                   [Integer](#integer)                                                    | `320` |
| `validWorlds` | Sets the list of the worlds where the custom spawn can happen |                                               [String List](#string_list)                                                | none |
| `validWorldEnvironments` | Sets the list of valid world environments where the custom spawn can happen |                  [Environment List](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html)                  | none |
| `validBiomes` | Sets the list of valid biomes where the custom spawn can happen |                    [Biome List](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)                    | none |
| `earliestTime` | Sets the earliest in-game time at which the custom spawn can happen |                                                   [Integer](#integer)                                                    | `0`|
| `latestTime` | Sets teh latest in-game time at which the custom spawn can happen |                                                   [Integer](#integer)                                                    | `24000` |
| `moonPhase` | Sets the phase of the moon at which the custom spawn happens | `FULL_MOON` / `WANING_GIBBOUS` / `WANING_CRESCENT` / `NEW_MOON` / `WAXING_CRESCENT` / `FIRST_QUARTER` / `WAXING_GIBBOUS` | none |
| `bypassWorldGuard` | Sets if the custom spawn will bypass protection systems such as WorldGuard |                                                   [Boolean](#boolean)                                                    | `false` |
| `canSpawnInLight` | Sets if the custom spawn can happen in lit blocks |                                                     [Boolean](#boolean)                                                     | `false` |
| `isSurfaceSpawn` | Sets if the custom spawn can only happen at the surface of a world |                                                     [Boolean](#boolean)                                                     | `false` |
| `isUndergroundSpawn` | Sets if the custom spawn can only happen underground |                                                     [Boolean](#boolean)                                                     | `false` |