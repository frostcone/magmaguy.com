[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

This guide is for EliteMobs 7.3.4 and later

# What are Custom Events?

Custom Events here refer to events that occur randomly in-game, whether based on player actions or having a timed trigger. The plugin comes preloaded with a number of Custom Events, such as the Balrog event, the Kraken event and the Treasure Goblin events, to name a few.

This system is called **Custom** Events because the events can not only be customized but created from scratch. What follows is a guide on how to create and customize your own events.

# Common configuration settings

<div align="center">

The following settings can/should be used for both action and timed events.

***

### isEnabled

Sets if the event is enabled.

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

### eventType

Sets the type of event.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none  |

*Note that `BREAK_BLOCK`, `FISH` and `TILL_SOIL` are [Action Events](#action-events) and `TIMED` is [Timed Events](#timed-events)*

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

Sets the list of bosses which will be spawned. **Mandatory!**

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [String List](#string_list) | none  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

Sets the [announcement priority]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Integer](#integer) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

Sets the message sent at the start of the event.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `startMessage` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
startMessage: An event has started!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Sets the message sent at the end of the event.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `endMessage` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
endMessage: An event has ended!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Sets the commands that run at the start of the event.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Sets the commands that run at the end of the event.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Event Config Example</b></summary>

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
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## Action Events

<div align="center">

Events that have a chance of running when a specific action, such as breaking a block or fishing, happen.

### chance

Sets the chance of the event happening when the action happens.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `chance` | Value between `0.0` and `1.0` |  `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

Sets the list of materials to check if the action is set to `BREAK_BLOCK`.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | List of [materials](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Config Example</b></summary>

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

### spawnType

Sets the [Custom Spawn]($language$/elitemobs/creating_spawns.md) used by the event, which defines where the boss can spawn.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Filename](#filename) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

Sets the amount of time, in minutes, before this event can be picked again.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

Sets the amount of time, in minutes, before the next event will be picked.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

Sets the weight of the event, affecting the chance that it will be picked over other events. **Recommended: 100**.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `weight` | [Double](#double) |  `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

Sets the maximum duration of the event, in minutes.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Integer](#integer) |  `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

Sets if the event ends with the boss death.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

Sets the in-game time at which the event will end.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

Sets the minimum amount of online players before the event will start.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*Note that events get queued, meaning they will only start once the conditions defined in the `customSpawn` are met.*

<details> 

<summary align="center"><b>Events Config Example</b></summary>

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
- say The event started!
eventEndCommands:
- say The event ended!
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