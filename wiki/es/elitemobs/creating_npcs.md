```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Ajustes de configuración

<div align="center">

### isEnabled

Establece si un PNJ está habilitado.

| Clave       |       Valores        | Por defecto |
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

### name

Establece el nombre de visualización de un PNJ. Soporta [Códigos de Color](#color_codes).

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `name` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### scale

Establece la escala (tamaño) del PNJ.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `scale` | [Multiplicador](#multiplier) | `1.0` |

Al escalar, `1.0` representa el tamaño por defecto. Para hacer la entidad más grande, aumenta el valor (ej., `1.2`). Para hacer la entidad más pequeña, disminuye el valor (ej., `0.8`).

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### role

Establece el rol del PNJ, debajo del nombre. Solo visual. Soporta [Códigos de Color](#color_codes).

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `role` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
role: "&c<Red Fellow>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Establece la profesión del PNJ, que define su apariencia cuando **no** se usa un disfraz.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `profession` | [Profesión](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

Establece la lista de saludos que el PNJ dice cuando un jugador se acerca.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `greetings` | [Lista de Cadenas](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- Hi there!
- Good day.
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo que el PNJ dirá mientras un jugador esté cerca (En el caso del interactionType `DIALOG`, este sería el diálogo).

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `dialog` | [Lista de Cadenas](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- I like apples!
- Sure is hot.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Establece el mensaje de despedida del PNJ.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `farewell` | [Lista de Cadenas](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell:
- Until next time!
- Bye!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Establece si el PNJ puede hablar.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Booleano](#boolean) | `true`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Establece el radio en el que un PNJ puede detectar a un jugador que se acerca.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `activationRadius` | [Doble](#double) |  `3.0`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Establece el tipo de interacción que realizará el PNJ.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Especial [1]    |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

Cuando un PNJ Teletransportador no tiene una ubicación anterior a la que pueda teletransportar a un jugador, mostrará este mensaje. Acepta [Códigos de Color](#color_codes)

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cCouldn''t send you back to your previous location - no previous location found!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Establece la cantidad de tiempo, en minutos, antes de que un PNJ desaparezca permanentemente.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `timeout` | [Entero](#integer) |  `0` (nunca)   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

Establece las misiones que da el PNJ.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `questFileName` | [Lista de Cadenas](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

Establece el disfraz de LibsDisguises que tiene el PNJ.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `disguise` | [Formato LibsDisguises]($language$/elitemobs/libsdisguises.md) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Establece los datos para un disfraz personalizado de LibsDisguises.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [Formato LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Establece el modelo personalizado de ModelEngine que usará el PNJ.

| Clave       |       Valores        | Por defecto |
|-----------|:-------------------:|:-------:|
| `customModel` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

Establece el nombre de archivo de la arena para la que el PNJ abrirá un menú (requiere el interactionType `ARENA_MASTER`).

| Clave       |        Valores         | Por defecto |
|-----------|:---------------------:|:-------:|
| `arena` | [Nombre de archivo](#filename) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

Establece el comando que ejecutará el PNJ (requiere el interactionType `COMMAND`).

| Clave       |        Valores         | Por defecto |
|-----------|:---------------------:|:-------:|
| `command` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
command: say Look at me running a command, how cool!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece la ubicación de aparición de los PNJs. Debes configurarla a través del comando `/em spawnnpc <npcfilename.yml>`.

| Clave       |        Valores         | Por defecto |
|-----------|:---------------------:|:-------:|
| `spawnLocation` | [Cadena](#string) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Establece las ubicaciones de aparición de los PNJs. Debes configurarlas a través del comando `/em spawnnpc <npcfilename.yml>`.

| Clave              |           Valores            | Por defecto |
|------------------|:---------------------------:|:-------:|
| `spawnLocations` | [Lista de Cadenas](#string_list) |  none   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocations:
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

Establece si el PNJ debe ser instanciado (para usar en mazmorras instanciadas).

| Clave              |           Valores            | Por defecto |
|------------------|:---------------------------:|:-------:|
| `instanced` | [Booleano](#boolean) |  `false`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de Configuración de PNJ</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cRed Rubin"
role: "&a<Generic NPC>"
profession: NITWIT
greetings:
- Hiya!
- Hello!
dialog:
- Great conversation!
- Pleasure talking with you!
farewell:
- Goodbye!
- Laters!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName:
- my_quest.yml #npc interactionType must be set to CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #used when a custom libsdisguise is being set
customModel: MODEL_ONE
arena: my_arena.yml #npc interactionType must be set to ARENA_MASTER
command: /say Hello World! #npc interactionType must be set to COMMAND
spawnLocation: my_world,584,55,127,90,10 #remember that NPCs use pitch and yaw to set where they are looking at. this is also automatically set when running the /em spawnnpc <npcfilename.yml> command, so make sure you pose where you want the NPC to be facing when running the command.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Especial [1]
La siguiente es la lista de tipos de interacción de PNJ válidos:

| Tipo                          |                                Descripción                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Abre el menú del gremio de aventureros                      |
| `CHAT`                        |                Hacer clic derecho recorre el `dialog`                 |
| `CUSTOM_SHOP`                 |                        Abre el menú de la tienda personalizada                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Abre la tienda generada proceduralmente                   |
| `BAR`                         |                            Abre el menú del bar                             |
| `ARENA`                       |                           Abre el menú de la arena                            |
| `QUEST_GIVER`                 |               Abre el menú de misiones generadas proceduralmente                |
| `CUSTOM_QUEST_GIVER`          |     Abre el menú de misiones para una misión específica configurada en `questFileName`      |
| `NONE`                        |                              Sin interacciones                              |
| `SELL`                        |                            Abre el menú de venta                            |
| `TELEPORT_BACK`               | Teletransporta a los jugadores de vuelta a la última ubicación en un mundo no-elitemobs en la que estuvieron |
| `SCRAPPER`                    |                           Abre el menú de desguace                            |
| `REPAIRMAN`                   |                           Abre el menú de reparación                           |
| `ENCHANTER`                   |                          Abre el menú de encantamiento                           |
| `REFINER`                     |                          Abre el menú de refinamiento                           |
| `UNBINDER`                    |                           Abre el menú de desvinculación                           |
| `ARENA_MASTER`                |         Abre el menú de la arena configurada en `arenaFilename`         |
| `COMMAND`                     |                     Ejecuta el comando configurado en `command`                     |

*Para más información sobre lo que hacen el SCRAPPER y tipos de interacción similares, haz clic [aquí]($language$/elitemobs/item_upgrade_system.md).*
```