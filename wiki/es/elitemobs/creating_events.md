[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Esta guía es para EliteMobs 7.3.4 y versiones posteriores

# ¿Qué son los eventos personalizados?

Aquí, los eventos personalizados se refieren a los eventos que ocurren aleatoriamente en el juego, ya sea en función de las acciones del jugador o de un disparador temporizado. El plugin viene precargado con una serie de eventos personalizados, como el evento Balrog, el evento Kraken y los eventos Tesoro Goblin, por nombrar algunos.

Este sistema se denomina eventos **personalizados** porque los eventos no solo se pueden personalizar, sino que también se pueden crear desde cero. Lo que sigue es una guía sobre cómo crear y personalizar sus propios eventos.

# Configuración común

<div align="center">

Las siguientes configuraciones se pueden/deben usar tanto para eventos de acción como para eventos temporizados.

***

### isEnabled

Establece si el evento está habilitado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booleano](#booleano) | `true`  |

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

*Tenga en cuenta que `BREAK_BLOCK`, `FISH` y `TILL_SOIL` son [Eventos de acción](#action-events) y `TIMED` son [Eventos temporizados](#timed-events)*

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

Establece la lista de jefes que se generarán. **¡Obligatorio!**

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [Lista de cadenas](#string_list) | ninguno  |

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

Establece el mensaje enviado al comienzo del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `startMessage` | [Cadena](#string) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startMessage: ¡Un evento ha comenzado!
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
endMessage: ¡Un evento ha terminado!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Establece los comandos que se ejecutan al comienzo del evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventStartCommands:
- say ¡El evento ahora comienza!!
- "$chance=0.5$ say ¡Qué aparición!"
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
| `eventEndCommands` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventEndCommands:
- say El evento termina, qué triste.
- "$chance=0.5$ say ¡Demasiado lento amigo!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de configuración de eventos</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "¡El evento genial está comenzando!"
endMessage: "¡El evento genial está terminando!"
eventStartCommands:
- say ¡El evento comenzó!
eventEndCommands:
- say ¡El evento terminó!
```

</div>

</details>

</div>

## Eventos de acción

<div align="center">

Eventos que tienen la posibilidad de ejecutarse cuando ocurre una acción específica, como romper un bloque o pescar.

### chance

Establece la posibilidad de que ocurra el evento cuando ocurre la acción.

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

Establece la lista de materiales para comprobar si la acción está establecida en `BREAK_BLOCK`.

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

<summary align="center"><b>Ejemplo de configuración</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Establece una probabilidad del 0.1 % de ejecutar el evento cuando se rompe un bloque de mena de carbón, suponiendo que el tipo de evento sea `BREAK_BLOCK`.

</details>

</div>

## Eventos temporizados

<div align="center">

Los eventos temporizados son eventos que suceden a intervalos de tiempo configurables. Una vez que finaliza el tiempo de espera de un evento temporizado, se elige un evento temporizado aleatorio de la lista de eventos temporizados según el peso del evento.

### spawnType

Establece la [Generación personalizada]($language$/elitemobs/creating_spawns.md) utilizada por el evento, que define dónde puede aparecer el jefe.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Nombre de archivo](#filename) |  ninguno   |

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

Establece la cantidad de tiempo, en minutos, antes de que este evento se pueda volver a elegir.

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

Establece la cantidad de tiempo, en minutos, antes de que se elija el próximo evento.

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

Establece el peso del evento, afectando la posibilidad de que se elija sobre otros eventos. **Recomendado: 100**.

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
| `eventEndsWithBossDeath` | [Booleano](#booleano) | `true`  |

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

Establece la hora del juego en la que finalizará el evento.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Booleano](#booleano) | `true`  |

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

Establece la cantidad mínima de jugadores en línea antes de que comience el evento.

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

*Tenga en cuenta que los eventos se ponen en cola, lo que significa que solo comenzarán una vez que se cumplan las condiciones definidas en la `generación personalizada`.*

<details>

<summary align="center"><b>Ejemplo de configuración de eventos</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "¡El evento genial está comenzando!"
endMessage: "¡El evento genial está terminando!"
eventStartCommands:
- say ¡El evento comenzó!
eventEndCommands:
- say ¡El evento terminó!
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
