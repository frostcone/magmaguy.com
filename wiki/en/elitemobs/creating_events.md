[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

This guide is for EliteMobs 7.3.4 and later

# What are Custom Events?

Custom Events here refer to events that occur randomly in-game, whether based on player actions or having a timed trigger. The plugin comes preloaded with a number of Custom Events, such as the Balrog event, the Kraken event and the Treasure Goblin events, to name a few.

This system is called **Custom** Events because the events can not only be customized but created from scratch. What follows is a guide on how to create and customize your own events.

# Common configuration settings

<div align="center">

The follow settings can/should be used for both action and timed events.

| Key |                          Description                          |                     Values                     | Default |
|-|:-------------------------------------------------------------:|:----------------------------------------------:|-|
| `isEnabled` |                 Sets if the event is enabled                  |                `true` / `false`                | `true` |
| `eventType` |                Sets the type of event this is                 | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none |
| `bossFilenames` | Sets the list of bosses which will be spawned. **Mandatory!** |          [String List](#string_list)           | none |
| `announcementPriority` |    Sets the [announcement priority](#announcementPriority)    |              [Integer](#integer)               | none |
| `startMessage` |        Sets the message sent at the start of the event        |               [String](#string)                | none |
| `endMessage` |         Sets the message sent at the end of the event         |               [String](#string)                | none |
| `eventStartCommands` |     Sets the commands that run at the start of the event      |          [String List](#string_list)           | none |
| `eventEndCommands` |      Sets the commands that run at the end of the event       |           [String List](string_list)           | none |

Note that `BREAK_BLOCK`, `FISH` and `TILL_SOIL` are [Action Events](#action-events) and `TIMED` is [Timed Events](#timed-events)

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- broadcast The event started!
eventEndCommands:
- broadcast The event ended!
```

</div>

</details>


</div>

## Action Events

<div align="center">

Events that have a chance of running when a specific action, such as breaking a block or fishing, happen.

| Key | Description | Values | Default |
|-|:-:|:-:|-|
| `chance` | Sets the chance of the event happening when the action happens | Value between `0.0` and `1.0` | `0` |
| `breakableMaterials` | Sets the list of materials to check if the action is `BREAK_BLOCK` | List of [materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | none |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Sets a 0.1% chance of running the event when a coal ore block is broken, assuming that the event type is `BREAK_BLOCK`.

</details>

</div>

## Timed Events

<div align="center">

Timed Events are events that happen at configurable time intervals. Once the cooldown for a timed event is over, a random timed event is picked from the list of timed events based on the weight of the event.

| Key |                                                        Description                                                         |       Values        | Default |
|-|:--------------------------------------------------------------------------------------------------------------------------:|:-------------------:|-|
| `customSpawn` | Sets the [Custom Spawn]($language$/elitemobs/creating_spawns.md) used by the event, which defines where the boss can spawn |  [STRING](#string)  | none |
| `localCooldown` |                         Sets the amount of time, in minutes, before this event can be picked again                         | [Integer](#integer) | `0` |
| `globalCooldown` |                            Sets the amount of time, in minutes, before any event will be picked                            | [Integer](#integer) | `0` |
| `weight` |     Sets the weight of the event, affecting the chance that it will be picked over other events. **Recommended: 100**      |  [Double](#double)  | `0` |
| `eventDuration` |                                     Sets the maximum duration of the event, in minutes                                     | [Integer](#integer) | `0` |
| `eventEndsWithBossDeath` |                                         Sets if the event ends with the boss death                                         |  `true` / `false`   | `true` |
| `eventEndTime` |                                     Sets the in-game time at which the event will end                                      | [Integer](#integer) | none |
| `minimumPlayerCount`|                           Sets the minimum amount of online players before the event will start                            | [Integer](#integer) | `1` |

Note that events get queued, meaning they will only start once the conditions defined in the `customSpawn` are met.

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- broadcast The event started!
eventEndCommands:
- broadcast The event ended!
customSpawn: "myCoolSpawn.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>