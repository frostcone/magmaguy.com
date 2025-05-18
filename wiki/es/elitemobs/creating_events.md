[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Esta guía es para EliteMobs 7.3.4 y posteriores

# ¿Qué son los Eventos Personalizados?

Los Eventos Personalizados aquí se refieren a eventos que ocurren aleatoriamente en el juego, ya sea basados en acciones del jugador o con un disparador temporizado. El plugin viene precargado con varios Eventos Personalizados, como el evento Balrog, el evento Kraken y los eventos Treasure Goblin, por nombrar algunos.

Este sistema se llama Eventos **Personalizados** porque los eventos no solo pueden ser personalizados sino también creados desde cero. A continuación, se presenta una guía sobre cómo crear y personalizar tus propios eventos.

# Configuraciones comunes

<div align="center">

Las siguientes configuraciones pueden/deben usarse tanto para eventos de acción como para eventos temporizados.

***

### isEnabled

Establece si el evento está habilitado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#boolean) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### eventType

Establece el tipo de evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | ninguno  |

*Tenga en cuenta que `BREAK_BLOCK`, `FISH` y `TILL_SOIL` son [Eventos de Acción](#action-events) y `TIMED` es [Eventos Temporizados](#timed-events)*

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

Establece la lista de jefes que serán generados. **¡Obligatorio!**

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [Lista de Cadenas](#string_list) | ninguno  |

<details>

<summary><b>Ejemplo</b></summary>

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

Establece la [prioridad de anuncio]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Entero](#integer) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

Establece el mensaje enviado al inicio del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `startMessage` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

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

Establece el mensaje enviado al final del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `endMessage` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

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

Establece los comandos que se ejecutan al inicio del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [Lista de Cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

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

Establece los comandos que se ejecutan al final del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [Lista de Cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

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

<summary align="center"><b>Ejemplo de Configuración de Evento</b></summary>

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

## Eventos de Acción

<div align="center">

Eventos que tienen una probabilidad de ejecutarse cuando ocurre una acción específica, como romper un bloque o pescar.

### chance

Establece la probabilidad de que el evento ocurra cuando la acción sucede.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `chance` | Valor entre `0.0` y `1.0` |  `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

Establece la lista de materiales a verificar si la acción está configurada como `BREAK_BLOCK`.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | Lista de [materiales](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

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

<summary align="center"><b>Ejemplo de Configuración</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Establece una probabilidad del 0.1% de ejecutar el evento cuando se rompe un bloque de mineral de carbón, asumiendo que el tipo de evento es `BREAK_BLOCK`.

</details>

</div>

## Eventos Temporizados

<div align="center">

Los Eventos Temporizados son eventos que ocurren a intervalos de tiempo configurables. Una vez que el tiempo de espera para un evento temporizado ha terminado, se selecciona un evento temporizado aleatorio de la lista de eventos temporizados basándose en el peso del evento.

### spawnType

Establece el [Spawn Personalizado]($language$/elitemobs/creating_spawns.md) utilizado por el evento, que define dónde puede aparecer el jefe.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Nombre de Archivo](#filename) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

Establece la cantidad de tiempo, en minutos, antes de que este evento pueda ser seleccionado de nuevo.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Entero](#integer) |  `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

Establece la cantidad de tiempo, en minutos, antes de que se seleccione el próximo evento.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Entero](#integer) |  `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

Establece el peso del evento, afectando la probabilidad de que sea seleccionado sobre otros eventos. **Recomendado: 100**.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `weight` | [Doble](#double) |  `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

Establece la duración máxima del evento, en minutos.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Entero](#integer) |  `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

Establece si el evento termina con la muerte del jefe.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Booleano](#boolean) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

Establece la hora del juego en la que terminará el evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Booleano](#boolean) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

Establece la cantidad mínima de jugadores en línea antes de que el evento comience.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Entero](#integer) |   `1`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*Tenga en cuenta que los eventos se ponen en cola, lo que significa que solo comenzarán una vez que se cumplan las condiciones definidas en el `customSpawn`.*

<details>

<summary align="center"><b>Ejemplo de Configuración de Eventos</b></summary>

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