[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Esta guía es para EliteMobs 7.3.4 y después

# ¿Qué son los Eventos Personalizados?

Los Eventos Personalizados aquí se refieren a eventos que ocurren aleatoriamente en el juego, ya sea en función de las acciones del jugador o que tienen un disparador temporizado. El plugin viene preinstalado con una serie de Eventos personalizados, como el evento Balrog, el evento Kraken y los eventos del Goblin del Tesoro, por nombrar algunos.

A este sistema se le llama **Eventos** Personalizados porque los eventos no solo se pueden personalizar, sino que también se pueden crear desde cero. Lo que sigue es una guía sobre cómo crear y personalizar tus propios eventos.

# Configuraciones comunes

<div align="center">

Las siguientes configuraciones pueden/deben ser usadas tanto para eventos de acción como de tiempo.

***

### isEnabled

Establece si el evento está habilitado.

| Clave       |       Valores       | Predeterminado |
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

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | ninguno  |

*Nota que `BREAK_BLOCK`, `FISH` y `TILL_SOIL` son [Eventos de Acción](#eventos-de-accion) y `TIMED` son [Eventos Temporizados](#eventos-temporizados)*

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

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [Lista de Cadenas](#lista_de_cadenas) | ninguno  |

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

Establece la [prioridad del anuncio]($language$/elitemobs/creating_bosses.md&section=prioridad_del_anuncio).

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Entero](#entero) |  ninguno  |

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

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `startMessage` | [Cadena](#cadena) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startMessage: ¡Ha empezado un evento!

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Establece el mensaje enviado al final del evento.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `endMessage` | [Cadena](#cadena) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
endMessage: ¡Ha terminado un evento!

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Establece los comandos que se ejecutan al inicio del evento.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [Lista de Cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventStartCommands:
- say ¡Ahora empieza el evento!!
- "$chance=0.5$ say ¡Qué inicio!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Establece los comandos que se ejecutan al finalizar el evento.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [Lista de Cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eventEndCommands:
- say El evento termina, qué triste.
- "$chance=0.5$ say ¡Demasiado lento, amigo!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Ejemplo de Configuración del Evento</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "¡Está empezando un evento genial!"
endMessage: "¡Está terminando un evento genial!"
eventStartCommands:
- say ¡El evento empezó!
eventEndCommands:
- say ¡El evento acabó!
```

</div>

</details>

</div>

## Eventos de Acción

<div align="center">

Eventos que tienen la posibilidad de ejecutarse cuando una acción específica, como romper un bloque o pescar, suceden.

### chance

Establece la posibilidad del evento de suceder cuando la acción ocurre.

| Clave       |       Valores       | Predeterminado |
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

Establece la lista de materiales a verificar si la acción está establecida en `BREAK_BLOCK`.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | Lista de [materiales](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  ninguno  |

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

Establece una posibilidad del 0.1% de ejecutar el evento cuando se rompe un bloque de mineral de carbón, suponiendo que el tipo de evento es `BREAK_BLOCK`.

</details>

</div>

## Eventos Temporizados

<div align="center">

Los eventos temporizados son eventos que ocurren en intervalos de tiempo configurables. Una vez que se acaba el enfriamiento de un evento temporalizado, se elige un evento aleatorio temporizado de la lista de eventos temporizados basado en el peso del evento.

### spawnType

Establece el [Spawn Personalizado]($language$/elitemobs/creating_spawns.md) usado por el evento, que define dónde puede generarse el jefe.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `spawnType` | [Nombre de archivo](#nombre_de_archivo) |  ninguno   |

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

Establece la cantidad de tiempo, en minutos, antes de que este evento pueda ser escogido nuevamente.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `localCooldown` | [Entero](#entero) |  `0`   |

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

Establece la cantidad de tiempo, en minutos, antes de que el próximo evento sea escogido.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `globalCooldown` | [Entero](#entero) |  `0`   |

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

Establece el peso del evento, afectando la posibilidad de que sea escogido sobre otros eventos. **Recomendado: 100**.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `weight` | [Doble](#doble) |  `0`   |

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

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `eventDuration` | [Entero](#entero) |  `0`   |

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

Establece si el evento finaliza con la muerte del jefe.

| Clave       |       Valores       | Predeterminado |
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

Establece el tiempo en el juego en el que el evento finalizará.

| Clave       |       Valores       | Predeterminado |
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

Establece la cantidad mínima de jugadores en línea antes de que el evento comience.

| Clave       |       Valores       | Predeterminado |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Entero](#entero) |   `1`   |

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

*Nota que los eventos se encolan, lo que significa que solo comenzarán una vez que se cumplan las condiciones definidas en el `customSpawn`.*

<details> 

<summary align="center"><b>Ejemplo de Configuración de Eventos</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "¡Está empezando un evento genial!"
endMessage: "¡Está terminando un evento genial!"
eventStartCommands:
- say ¡El evento empezó!
eventEndCommands:
- say ¡El evento acabó!
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