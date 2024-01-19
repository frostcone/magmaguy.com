[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creating arenas

| Key |                                    Description                                    |                                            Values                                            | Default |
|-|:---------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|:-:|
| `isEnabled` |                           Sets if the arena is enabled                            |                                     [Boolean](#boolean)                                      | `true` |
| `arenaName` |                            Sets then name of the arena                            |                                      [String](#string)                                       | none |
| `corner1` |                        Sets the first corner of the arena                         |                               [Location](#serialized_location)                               | none |
| `corner2` | Sets the second corner of the arena, must be diametrically opposed from `corner1` |                               [Location](#serialized_location)                               | none |
| `startLocation` |                       Sets the start location of the arena                        |                               [Location](#serialized_location)                               | none |
| `exitLocation` |                        Sets the exit location of the arena                        |                               [Location](#serialized_location)                               | none |
| `waveCount` |                      Sets the amounts of waves the arena has                      |                                     [Integer](#integer)                                      | none |
| `delayBetweenWaves` |                     Sets the delay, in seconds, between waves                     |                                     [Integer](#integer)                                      | `0` |
| `spawnPoints` |                             Sets the mob spawn points                             |                               [String List](#string_list) [1]                                | none |
| `bossList` |                    Sets the list of bosses that spawn on waves                    |                               [String List](#string_list) [2]                                | none |
| `rawArenaReward` |                    Sets the rewards given at the end of waves                     | [Universal EliteMobs loot table](https://magmaguy.com/wiki.html#en+elitemobs+loot_tables.md) | none |
| `minimumPlayerCount` |       Sets the minimum amount of players an arena must have before starting       |                                     [Integer](#integer)                                      | `1` |
| `maximumPlayerCount` |               Sets the maximum amount of players an arena can have                |                                     [Integer](#integer)                                      | `100` |
| `arenaMessages` |                     Sets the messages that run between waves                      |                                         Special [3]                                          | none |
| `cylindricalArena` |          Sets if the arena uses a cylindrical shape (default is cuboid)           |                                     [Boolean](#boolean)                                      | `false`
| `permission` |                   Sets the permission required to use the arena                   |                                      [String](#integer)                                      | none |


[1] Spawn points: Uses the following format: `name=pointName:location=world_name,x,y,z`. Example: `name=north:location=em_adventurers_guild,219.5,71,273.5`

[2] Boss list: Uses the following format: `wave=x:spawnPoint=Y:boss=bossfilename.yml`. Example: `wave=1:spawnPoint=north:boss=wood_league_wave_1_melee.yml`

[3] Arena messages: Uses the following format: `wave=X:message=your message here`. Example: `wave=1:message=&2This is the first wave!`

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>Breakdown of the example</b></summary>

<div align="left">

Let us go over this example from the top and explain what this arena configuration does.

First the arena is enabled with `isEnabled`, and we can see that it is called Example Arena using the `arenaName` setting. The name will be shown when you interact with the arena NPC (we talk about how to make an arena NPC further down) that will allow players to join the arena. corner1 and corner2 define the arena size. These corners should be at the opposite sides of each other in the area that you plan to use for the arena.

`startLocation` is where the players will spawn in when joining the arena, in the example that would be in the center of the arena in the world my_arena_world. `exitLocation` is where the players will be teleported after they fail or finish the arena. In this case it would be the world my_minecraft_world and the coordinates in the example.

`waveCount` simply sets the amount of waves that the arena will last for. In this case that would be 5 waves. If they players manage to survive all 5 waves they have managed to survive the arena. `delayBetweenWaves` will set the amount of seconds before the next wave starts. In our example players would have 5 seconds to prepare before the next wave starts.

`spawnPoints` set the locations where we can have our mobs spawn. We can make as many as we want and name them as we want. In the example we have decided to make 5 spawn points and name them north, south, center, east and west.

`bossList` is where we define which boss should spawn at what wave and at which location. In the example wave 1 will have 3 bosses spawning from the spawn locations that we named north, center and south. All three are set to use the same boss file but we could have used different boss files for each one.

`rawArenaReward` sets the rewards that will be handed out after a player manages to survive/beat a wave. As we can see in the example beating wave 1 will reward the player with 5 elite coins. If they manage to survive the rest of the waves and then beat wave 5, they will be rewarded with 25 elite coins and a 50% chance to get a level 5 MagmaGuy's Toothpick.

`minimumPlayerCount` sets the minimum required amount of players needed before the arena will start. In our example this setting is set to 1, so only one player is needed for the arena to starts. `maximumPlayerCount` sets the maximum amount of players that can participate in the arena. In our example this setting is set to 3, meaning that if more than 3 players try to participate in the arena then the arena will not start until there are 3 players or less.

`arenaMessages` lets you add some flavor text that will be displayed in the chat at the start of the defined waves. In our example we have decided to display a short message at the start of each wave. We have also decided to include the NPC name at the start of each message giving the illusion that the text is spoken dialogue by the announcer (arena master).

`cylindricalArena` this setting will let us toggle if the defined area that we have set with `corner1` and `corner2` should be a cylindrical shape instead of a cuboid one. In our example we have set this to `false` meaning that the example arena is a cuboid shape.

`permission` lets us set a permission that the players will need to have to be able to join/start the arena. In our example the players will need the `arena.mypermission` permission to be able to use the arena.

</div>

</details>

## Creating the Arena NPC

     

| Key                | Description                                        | Values                                                                                            |
|--------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `isEnabled`        | Sets if the NPC is enabled                         | [Boolean](#boolean)                                                                               |
| `name`             | Sets the display name of the NPC                   | [String](#string)                                                                                 |
| `role`             | Sets role display under the NPC name               | [String](#string)                                                                                 |
| `profession`       | Sets the minecraft profession of the NPC           | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |
| `spawnLocation`    | Sets the spawn location of the NPC                 | [Location](#serialized_location)                                                                  |
| `greetings`        | Sets greeting dialog for the NPC                   | [String](#string)                                                                                 |
| `dialog`           | Sets dialog when the players interact with the NPC | [String](#string)                                                                                 |
| `farewell`         | Sets the goodbye dialog for the NPC                | [String](#string)                                                                                 |
| `canTalk`          | Sets if the NPC should use dialog                  | [Boolean](#boolean)                                                                               |
| `activationRadius` | Sets the radius when the NPC should start talking  | [Double](#double)                                                                                 |
| `interactionType`  | Sets the type of interaction the NPC will do       | Special [4]                                                                                       |
| `disguise`         | Sets the custom NPC disguise                       | [Disguise](https://magmaguy.com/wiki.html#en+elitemobs+libsdisguises.md)                          |
| `arena`            | Sets which arena the NPC should be assigned to     | [Filename](#filename)                                                                             |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
name: Example NPC
role: <Arena Master>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Welcome to the Arena!
dialog:
  - Ready to enter the Arena?
farewell:
  - Bye!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
This example shows a basic Arena NPC that will spawn in my_minecraft_world with a zombie disguise. Players can interact with this NPC to challenge the Example Arena.

</div>

</details>

[4] The following is the list of valid NPC interaction types:

| Type | Description |
| --- | :-: |
| `GUILD_GREETER` | Open the adventurer's guild menu |
| `CHAT` | Right-clicking cycles through the `dialog` |
| `CUSTOM_SHOP` | Opens the custom shop menu |
| `PROCEDURALLY_GENERATED_SHOP` | Opens the procedurally generated shop |
| `BAR` | Opens the bar menu |
| `ARENA` | Opens the arena menu |
| `QUEST_GIVER` | Opens the procedurally generated quests menu |
| `CUSTOM_QUEST_GIVER` | Opens the quest menu for a specific quest set in `questFilenames` |
| `NONE` | No interactions |
| `SELL` | Opens the sell menu |
| `TELEPORT_BACK` | Teleports players back to the last non-elitemobs world location they were |
| `SCRAPPER` | Opens the scrap menu |
| `SMELTER` | Opens the smelt menu |
| `REPAIRMAN` | Opens the repair menu |
| `ENHANCER` | Opens the item enhancements menu |
| `REFINER` | Opens the refiner menu |
| `UNBINDER` | Opens the unbind menu |
| `ARENA_MASTER` | Opens the arena menu for the arena set in `arenaFilename` |
| `COMMAND` | Runs the command set in `command` |