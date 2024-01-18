[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creating arenas

| Key | Description | Values | Default |
|-|:-:|:-:|:-:|
| `isEnabled` | Sets if the arena is enabled | `true` / `false` | `true` |
| `arenaName` | Sets then name of the arena | STRING | none |
| `corner1` | Sets the first corner of the arena | LOCATION | none |
| `corner2` | Sets the second corner of the arena, must be diametrically opposed from `corner1` | LOCATION | none |
| `startLocation` | Sets the start location of the arena | LOCATION | none |
| `exitLocation` | Sets the exit location of the arena | LOCATION | none |
| `waveCount` | Sets the amounts of waves the arena has | INTEGER | none |
| `delayBetweenWaves` | Sets the delay, in seconds, between waves | INTEGER | `0` |
| `spawnPoints` | Sets the spawn points | STRING LIST [1] | none |
| `bossList` | Sets the list of bosses that spawn on waves | STRING LIST [2] | none |
| `rawArenaReward` | Sets the rewards given at the end of waves | [Universal EliteMobs loot table](https://magmaguy.com/wiki.html#en+elitemobs+loot_tables.md) [3] | none |
| `minimumPlayerCount` | Sets the minimum amount of players an arena must have before starting | INTEGER | `1` |
| `maximumPlayerCount` | Sets the maximum amount of players an arena can have | INTEGER | `100` |
| `arenaMessages` | Sets the messages that run between waves | Special format [4] | none |
| `cylindricalArena` | Sets if the arena uses a cylindrical shape (default is cuboid) | `true` / `false` | `false`
| `permission` | Sets the permission required to use the arena | STRING | none |

[1] Spawn points: Uses the following format: `name=pointName:location=world_name,x,y,z`. Example: `name=north:location=em_adventurers_guild,219.5,71,273.5`

[2] Boss list: Uses the following format: `wave=x:spawnPoint=Y:boss=bossfilename.yml`. Example: `wave=1:spawnPoint=north:boss=wood_league_wave_1_melee.yml`

[3] Arena messages: Uses the following format: `wave=X:message=your message here`. Example: `wave=1:message=&2This is the first wave!`