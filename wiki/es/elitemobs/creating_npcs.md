[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Configuración de ajustes

<div align="center">

### isEnabled

Establece si un NPC está habilitado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: verdadero
```

</div>

</details>

***

### nombre

Establece el nombre para mostrar de un NPC. Soporta [Códigos de color](#color_codes).

| Clave      |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `name` | [Cadena de caracteres](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
nombre: "&aEnn Peecee"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### role

Establece el rol del NPC, bajo el nombre. Sólo visual. Soporta [Códigos de color](#color_codes).

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `role` | [Cadena de caracteres](#string) |  ninguno   |

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

Establece la profesión del NPC, lo que establece su apariencia cuando **no** se está utilizando un disfraz.

| Clave       |       Valores        | Predeterminado |
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

Establece la lista de saludos que el NPC dice cuando un jugador se acerca.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `greetings` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- ¡Hola!
- Buen día. 
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo que el NPC dirá mientras un jugador está cerca (En caso de que `interactionType` sea `DIALOG`, este sería el diálogo).

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `dialog` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- ¡Me gustan las manzanas!
- Hace calor. 
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Establece el mensaje de despedida del NPC.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `farewell` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell: 
- ¡Hasta la próxima!
- ¡Adiós!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Establece si el NPC puede hablar.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `canTalk` | [Booleano](#boolean) | `true`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
canTalk: verdadero
```

</div>

</details>

***

### activationRadius

Establece el radio al que un NPC puede detectar a un jugador que se acerca.

| Clave       |       Valores        | Predeterminado |
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

Define el tipo de interacción que realizará el NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `interactionType` |    Especial [1]    |  ninguno   |

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

Cuando un NPC teletransportador no tiene una ubicación previa a la que puede teletransportar a un jugador, mostrará este mensaje. Acepta [Códigos de color](#color_codes)

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `noPreviousLocationMessage` | [Cadena de caracteres](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cNo se pudo enviarte a tu ubicación anterior - ¡no se encontró ubicación anterior!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Establece la cantidad de tiempo, en minutos, antes de que un NPC desaparezca permanentemente.

| Clave       |       Valores        | Predeterminado |
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

Establece las misiones que da el NPC.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `questFileName` | [Lista de Cadenas](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
questFileName:
- mi_mision_uno.yml
- mi_mision_dos.yml
```

</div>

</details>

***

### disguise

Establece el disfraz de LibsDisguises que tiene el NPC.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `disguise` | [Formato de LibsDisguises]($language$/elitemobs/libsdisguises.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: ESQUELETO
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Establece los datos para un disfraz personalizado de LibsDisguises.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `customDisguiseData` | [Formato de LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: custom:mi_cool_nombre_disfraz
customDisguiseData: player mi_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Establece el modelo personalizado de ModelEngine que utilizará el NPC.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `customModel` | [Cadena de caracteres](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModel: MI_MODELO_UNO
```

</div>

</details>

***

### arena

Establece el nombre del archivo de la arena para la que el NPC abrirá un menú (requiere el `ARENA_MASTER` interactionType).

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `arena` | [Nombre del archivo](#filename) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arena: mi_arena.yml
```

</div>

</details>

***

### command

Establece el comando que ejecutará el NPC (requiere `interactionType` de `COMMAND`).

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `command` | [Cadena de caracteres](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
command: say Mira cómo ejecuto un comando, ¡qué genial!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece la ubicación de aparición de los NPCs. Debes establecer esto a través del comando `/em spawnnpc <npcfilename.yml>`.

| Clave          |        Valores       | Defecto |
|-----------|:------------------:|:---------:|
| `spawnLocation` | [String](#string) |  ninguno  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocation: mi_mundo,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Establece las ubicaciones de aparición de los NPCs. Debes establecer esto a través del comando `/em spawnnpc <npcfilename.yml>`.

| Clave             |           Valores            | Defecto |
|-----------------|:--------------------------:|:--------:|
| `spawnLocations` | [Lista de Strings](#string_list) |  ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocations: 
- mi_mundo,10,50,10,0,0
- mi_mundo,-10,50,-10,0,0
```

</div>

</details>

### instanced

Establece si el NPC debe ser instanciado (para usar en mazmorras instanciadas).

| Clave              |           Valores            | Defecto |
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

<summary align="center"><b>Ejemplo de Configuración de NPC</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cRed Rubin"
role: "&a<Generic NPC>"
profession: NITWIT
greetings:
- ¡Hola!
- ¡Saludos!
dialog:
- ¡Gran conversación!
- ¡Un placer hablar contigo!
farewell:
- ¡Adiós!
- ¡Hasta luego!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName: 
- mi_mision.yml #npc interactionType debe establecerse a CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #utilizado cuando se establece una personalización de libsdisguise
customModel: MODEL_ONE
arena: mi_arena.yml #npc interactionType debe establecerse a ARENA_MASTER
command: /say Hola Mundo! #npc interactionType debe establecerse a COMMAND
spawnLocation: mi_mundo,584,55,127,90,10 #Recuerda que los NPCs usan pitch y yaw para establecer a dónde están mirando. Esto también se establece automáticamente al ejecutar el comando /em spawnnpc <npcfilename.yml>, así que asegúrate de ubicarte donde quieras que el NPC esté mirando al ejecutar el comando.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Especial [1]
La siguiente es la lista de tipos de interacción válidos para NPCs:

| Tipo                          |                                Descripción                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Abre el menú del gremio de aventureros                      |
| `CHAT`                        |                El clic derecho recorre el `dialog`                |
| `CUSTOM_SHOP`                 |                        Abre el menú de la tienda personalizada                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Abre la tienda generada por procedimiento                  |
| `BAR`                         |                            Abre el menú del bar                             |
| `ARENA`                       |                           Abre el menú de la arena                            |
| `QUEST_GIVER`                 |               Abre el menú de misiones generadas por procedimiento               |
| `CUSTOM_QUEST_GIVER`          |     Abre el menú de una misión específica establecida en `questFileName`      |
| `NONE`                        |                              Sin interacciones                              |
| `SELL`                        |                            Abre el menú de venta                            |
| `TELEPORT_BACK`               | Teleporta a los jugadores a la última ubicación del mundo no-elitemobs donde estuvieron |
| `SCRAPPER`                    |                           Abre el menú de desguace                            |
| `REPAIRMAN`                   |                           Abre el menú de reparaciones                           |
| `ENCHANTER`                   |                          Abre el menú de encantamientos                          |
| `REFINER`                     |                          Abre el menú de refinado                           |
| `UNBINDER`                    |                           Abre el menú de desvinculación                           |
| `ARENA_MASTER`                |         Abre el menú de la arena de la arena establecida en `arenaFilename`         |
| `COMMAND`                     |                     Ejecuta el comando establecido en `command`                     |

*Para más información sobre lo que hacen los tipos de interacción SCRAPPER y similares, haz clic [aquí]($language$/elitemobs/item_upgrade_system.md).*
```