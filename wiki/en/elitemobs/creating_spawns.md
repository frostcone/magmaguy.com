[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are Custom Spawns?

Custom Spawns are used by Events and global reiforcements to set how, where and when an event should spawn the boss for that event.

Events and global reinforcements set which spawn they are using by writting down its filename.

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

| Key | Description |                                                          Values                                                          | Default |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------:|-|
| `isEnabled` | Sets if the event is enabled |                                                     `true` / `false`                                                     | `true` |
| `lowestYLevel` | Sets the lowest y level (map height) used |                                                   [INTEGER](#integer)                                                    | `0` |
| `highestYLevel` | Sets the highest y level (map height) used |                                                   [INTEGER](#integer)                                                    | `320` |
| `validWorlds` | Sets the list of the worlds where the custom spawn can happen |                                               [STRING LIST](#string_list)                                                | none |
| `validWorldEnvironments` | Sets the list of valid world environments where the custom spawn can happen |                  [ENVIRONMENT LIST](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html)                  | none |
| `validBiomes` | Sets the list of valid biomes where the custom spawn can happen |                    [BIOME LIST](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html)                    | none |
| `earliestTime` | Sets the earliest in-game time at which the custom spawn can happen |                                                   [INTEGER](#integer)                                                    | `0`|
| `latestTime` | Sets teh latest in-game time at which the custom spawn can happen |                                                   [INTEGER](#integer)                                                    | `24000` |
| `moonPhase` | Sets the phase of the moon at which the custom spawn happens | `FULL_MOON` / `WANING_GIBBOUS` / `WANING_CRESCENT` / `NEW_MOON` / `WAXING_CRESCENT` / `FIRST_QUARTER` / `WAXING_GIBBOUS` | none |
| `bypassWorldGuard` | Sets if the custom spawn will bypass protection systems such as WorldGuard |                                                     `true` / `false`                                                     | false |
| `canSpawnInLight` | Sets if the custom spawn can happen in lit blocks |                                                     `true` / `false`                                                     | `false` |
| `isSurfaceSpawn` | Sets if the custom spawn can only happen at the surface of a world |                                                     `true` / `false`                                                     | `false` |
| `isUndergroundSpawn` | Sets if the custom spawn can only happen underground |                                                     `true` / `false`                                                     | `false` |