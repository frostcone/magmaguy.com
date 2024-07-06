[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando arenas

<div align="center">

### isEnabled

Establece si la arena está habilitada.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Booleano](#boolean) | `true`    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName


Establece el nombre de la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`arenaName`| [Texto](#texto) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaName: Arena de Bedrock
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Establece la primera esquina de la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`corner1`| [Ubicación](#ubicación_serializada) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner1: mi_mundo_arena,10,50,-10,0,0
```

<div align="center">

En esta imagen, `corner1` está representado por *lana verde* y `corner2` está representado por *lana roja*. Esta configuración designa el área entre ellos como la arena, representada por *lana amarilla*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Establece la segunda esquina de la arena, debe ser diametralmente opuesta a `corner1`.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `corner2` | [Ubicación](#ubicación_serializada) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner2: mi_mundo_arena,-10,50,10,0,0
```

<div align="center">

En esta imagen, `corner1` está representado por *lana verde* y `corner2` está representado por *lana roja*. Esta configuración designa el área entre ellos como la arena, representada por *lana amarilla*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Establece la ubicación de inicio de la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `startLocation` | [Ubicación](#ubicación_serializada) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startLocation: mi_mundo_arena,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Establece la ubicación de salida de la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [Ubicación](#ubicación_serializada) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
exitLocation: mi_mundo,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Establece la cantidad de oleadas que tiene la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Entero](#entero) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

Establece la demora, en segundos, entre oleadas.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Entero](#entero) | `0`    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

Establece las ubicaciones de aparición de los jefes de la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [Lista de cadenas](#lista_de_cadenas) [1] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnPoints:
- name=norte:location=mi_mundo_arena,219.5,71,273.5
- name=sur:location=mi_mundo_arena,219.5,71,316.5
- name=oeste:location=mi_mundo_arena,197.5,71,295.5
- name=este:location=mi_mundo_arena,240.5,71,295.5
- name=centro:location=mi_mundo_arena,219.5,71,295.5
```

</div>

</details>

***

### bossList

Establece la lista de jefes que aparecen durante las oleadas de la arena. Las Arenas de EliteMobs admiten la aparición de Mythic Mobs en las arenas.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `bossList` | [Lista de cadenas](#lista_de_cadenas) [2] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=norte:boss=mi_jefe_oleada_1.yml
- wave=1:spawnPoint=sur:boss=mi_jefe_oleada_1.yml
- wave=2:spawnPoint=centro:boss=mi_jefe_mythicmobs:mythicmob=true:level=10
```

En este ejemplo, la oleada 1 generará un jefe en el punto de generación norte y un jefe en el punto de generación sur. Luego, en la oleada 2, aparecerá un jefe mítico, en el nivel 10, en el punto central.

Ten en cuenta que también puedes forzar un nivel para los jefes de EliteMobs, pero se recomienda que establezcas su nivel en su archivo de configuración.

</div>

</details>

***

### rawArenaReward

Establece las recompensas que se otorgan al final de las oleadas.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [Tabla de botín universal de EliteMobs]($language$/elitemobs/loot_tables.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=libro_encantado_daño_todo.yml:wave=5:chance=0.25
- filename=chatarra_elite_pequeña.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=pergamino_invocar_comerciante.yml:wave=5
- filename=palillo_de_magmaguys.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Establece la cantidad mínima de jugadores que debe tener una arena antes de comenzar.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Entero](#entero) |   `1`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

Establece la cantidad máxima de jugadores que puede tener una arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Entero](#entero) |  `100`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

Establece los mensajes que se ejecutan entre oleadas.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Especial [3] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Locutor de la arena] &f¡Hora de la oleada uno!"
- wave=2:message="&a[Locutor de la arena] &fVaya, oleada dos ya."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Establece si la arena usa una forma cilíndrica (el valor predeterminado es cuboide).

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Booleano](#booleano) |  `false`   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

Establece el permiso requerido para usar la arena.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `permission` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: mipermiso.arena
```

</div>

</details>

***

</div>


## Especial [1] 
Puntos de aparición: utiliza el siguiente formato: `name=nombreDelPunto:location=nombre_del_mundo,x,y,z`.

## Especial [2] 
Lista de jefes: utiliza el siguiente formato: `wave=x:spawnPoint=Y:boss=nombredearchivodeljefe.yml`.

## Especial [3] 
Mensajes de la arena: utiliza el siguiente formato: `wave=X:message=tu mensaje aquí`.

<details> 

<summary align="center"><b>Ejemplo de configuración de arena</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Arena de ejemplo
corner1: mi_mundo_arena,0,0,0,0,0
corner2: mi_mundo_arena,50,50,50,0,0
startLocation: mi_mundo_arena,25,0,25,0,0
exitLocation: mi_mundo_minecraft,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=norte:location=mi_mundo_arena,40.5,0,0
  - name=sur:location=mi_mundo_arena,10.5,0,0
  - name=oeste:location=mi_mundo_arena,0,0,40.5
  - name=este:location=mi_mundo_arena,0,0,10.5
  - name=centro:location=mi_mundo_arena,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=norte:boss=mob_de_arena_de_ejemplo_oleada_1.yml
  - wave=1:spawnPoint=centro:boss=mob_de_arena_de_ejemplo_oleada_1.yml
  - wave=1:spawnPoint=sur:boss=mob_de_arena_de_ejemplo_oleada_1.yml
  - wave=2:spawnPoint=centro:boss=mob_de_arena_de_ejemplo_oleada_2.yml
  - wave=3:spawnPoint=este:boss=mob_de_arena_de_ejemplo_oleada_3.yml
  - wave=3:spawnPoint=oeste:boss=mob_de_arena_de_ejemplo_oleada_3.yml
  - wave=4:spawnPoint=centro:boss=mob_de_arena_de_ejemplo_oleada_4.yml
  - wave=4:spawnPoint=centro:boss=mob_de_arena_de_ejemplo_oleada_4.yml
  - wave=5:spawnPoint=centro:boss=mob_de_arena_de_ejemplo_oleada_5.yml
  - wave=5:spawnPoint=sur:boss=mob_de_arena_de_ejemplo_oleada_5.yml
  - wave=5:spawnPoint=oeste:boss=mob_de_arena_de_ejemplo_oleada_5.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=palillo_de_magmaguys.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[NPC de la arena] &f¡Vaya! ¡Oleada 1!
  - wave=2:message=&d[NPC de la arena] &f¡Increíble, es la oleada 2!
  - wave=3:message=&d[NPC de la arena] &f¡La oleada 3 ya está en marcha!
  - wave=4:message=&d[NPC de la arena] &f¡Oleada 4 ya!
  - wave=5:message=&d[NPC de la arena] &fBueno, se acabó después de esta.
cylindricalArena: false
permission: arena.mipermiso
```
</div>

</details>

<details> 

<summary align="center"><b>Desglose del ejemplo</b></summary>

<div align="left">

Repasemos este ejemplo desde arriba y expliquemos qué hace esta configuración de arena.

Primero, la arena se habilita con `isEnabled`, y podemos ver que se llama Arena de ejemplo usando la configuración `arenaName`. El nombre se mostrará cuando interactúes con el NPC de la arena (hablaremos sobre cómo crear un NPC de arena más adelante) que permitirá a los jugadores unirse a la arena. `corner1` y `corner2` definen el tamaño de la arena. Estas esquinas deben estar en lados opuestos entre sí en el área que planeas usar para la arena.

`startLocation` es donde aparecerán los jugadores al unirse a la arena, en el ejemplo que estaría en el centro de la arena en el mundo mi_mundo_arena. `exitLocation` es donde los jugadores serán teletransportados después de que fallen o terminen la arena. En este caso sería el mundo mi_mundo_minecraft y las coordenadas en el ejemplo.

`waveCount` simplemente establece la cantidad de oleadas que durará la arena. En este caso serían 5 oleadas. Si los jugadores logran sobrevivir a las 5 oleadas, han logrado sobrevivir a la arena. `delayBetweenWaves` establecerá la cantidad de segundos antes de que comience la siguiente oleada. En nuestro ejemplo, los jugadores tendrían 5 segundos para prepararse antes de que comience la siguiente oleada.

`spawnPoints` establece las ubicaciones donde podemos hacer que aparezcan nuestros mobs. Podemos hacer tantos como queramos y nombrarlos como queramos. En el ejemplo, hemos decidido hacer 5 puntos de generación y nombrarlos norte, sur, centro, este y oeste.

`bossList` es donde definimos qué jefe debe aparecer en qué oleada y en qué ubicación. En el ejemplo, la oleada 1 tendrá 3 jefes que aparecerán desde las ubicaciones de generación que llamamos norte, centro y sur. Los tres están configurados para usar el mismo archivo de jefe, pero podríamos haber usado diferentes archivos de jefe para cada uno.

`rawArenaReward` establece las recompensas que se entregarán después de que un jugador logre sobrevivir/vencer una oleada. Como podemos ver en el ejemplo, vencer la oleada 1 recompensará al jugador con 5 monedas de élite. Si logran sobrevivir al resto de las oleadas y luego vencer la oleada 5, serán recompensados ​​con 25 monedas de élite y un 50% de posibilidades de obtener un palillo de dientes de MagmaGuy de nivel 5.

`minimumPlayerCount` establece la cantidad mínima requerida de jugadores necesarios antes de que comience la arena. En nuestro ejemplo, esta configuración está establecida en 1, por lo que solo se necesita un jugador para que comience la arena. `maximumPlayerCount` establece la cantidad máxima de jugadores que pueden participar en la arena. En nuestro ejemplo, esta configuración está establecida en 3, lo que significa que si más de 3 jugadores intentan participar en la arena, la arena no comenzará hasta que haya 3 jugadores o menos.

`arenaMessages` te permite agregar algo de texto de ambientación que se mostrará en el chat al comienzo de las oleadas definidas. En nuestro ejemplo, hemos decidido mostrar un breve mensaje al comienzo de cada oleada. También hemos decidido incluir el nombre del NPC al comienzo de cada mensaje dando la ilusión de que el texto es un diálogo hablado por el locutor (maestro de la arena).

`cylindricalArena` esta configuración nos permitirá alternar si el área definida que hemos establecido con `corner1` y `corner2` debe tener una forma cilíndrica en lugar de una cuboide. En nuestro ejemplo, hemos establecido esto en `false`, lo que significa que el ejemplo de arena tiene una forma cuboide.

`permission` nos permite establecer un permiso que los jugadores deberán tener para poder unirse/iniciar la arena. En nuestro ejemplo, los jugadores necesitarán el permiso `arena.mipermiso` para poder usar la arena.

</div>

</details>

## Creando el NPC de la arena

<div align="center">

### isEnabled

Establece si el NPC está habilitado.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
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

### name

Establece el nombre para mostrar del NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `name` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

Establece la visualización del rol debajo del nombre del NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `role` | [Texto](#texto) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
role: "&c<Maestro de la arena>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Establece la profesión de MineCraft del NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `profession` | [Profesión](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Se anulará si se utiliza un `disfraz`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece la ubicación de generación del NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [Ubicación](#ubicación_serializada) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocation: mi_mundo,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Establece el diálogo de saludo para el NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `greetings` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- ¡Bienvenido a la arena!
- ¡La arena te da la bienvenida!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo cuando los jugadores interactúan con el NPC.

| Clave       |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
| `dialog` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- ¿Listo para un desafío?
- ¿Enfrentar la arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Establece el diálogo de despedida para el NPC.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `farewell` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell:
- Adiós.
- ¡Vuelve con tu escudo o sobre él!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Si una cadena es demasiado larga, puedes usar \n para separarla en varias líneas.*

<div align="left">

```yml
farewell:
- Adiós.
- ¡Vuelve con tu\nescudo o sobre él!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Establece el diálogo de despedida para el NPC.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `canTalk` | [Booleano](#booleano) | `true`  |

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

Establece el radio cuando el NPC debe comenzar a hablar.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `activationRadius` | [Doble](#doble) |  `3.0`  |

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

Establece el tipo de interacción que realizará el NPC.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `interactionType` | Especial [4] |  `ARENA_MASTER`  |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

Establece el disfraz de NPC personalizado.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `disguise` | [Disfraz]($language$/elitemobs/libsdisguises.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

Establece a qué arena serán teletransportados los jugadores.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `arena` | [Nombre de archivo](#nombre_de_archivo) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arena: mi_arena.yml
```

</div>

</details>

***

### teleportLocation

Establece a dónde deben teletransportarse los jugadores después de interactuar con el NPC. Esta configuración se usa generalmente para teletransportar a los jugadores a un área de tipo lobby dedicada de la arena donde pueden comenzar el desafío de la arena o esperar a que otros jugadores terminen de pasar por la arena.

| Clave       |        Valores         | Predeterminado |
|-----------|:---------------------:|:-------:|
| `teleportLocation` | [Ubicación](#ubicación) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: mi_mundo_arena,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de configuración de arena</b></summary>

<div align="left">

```yml
isEnabled: true
name: NPC de ejemplo
role: <Maestro de la arena>
profession: ARMORER
spawnLocation: mi_mundo_minecraft,233,44,245,0,0
greetings:
  - ¡Bienvenido a la arena!
dialog:
  - ¿Listo para entrar en la arena?
farewell:
  - ¡Adiós!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: arena_de_ejemplo.yml
```
Este ejemplo muestra un NPC de arena básico que aparecerá en mi_mundo_minecraft con un disfraz de zombi. Los jugadores pueden interactuar con este NPC para desafiar a la Arena de ejemplo.

</div>

</details>

## Especial [4] 
La siguiente es la lista de tipos de interacción de NPC válidos:

| Tipo | Descripción |
| --- | :-: |
| `GUILD_GREETER` | Abre el menú del gremio de aventureros |
| `CHAT` | Hacer clic con el botón derecho recorre el `diálogo` |
| `CUSTOM_SHOP` | Abre el menú de la tienda personalizada |
| `PROCEDURALLY_GENERATED_SHOP` | Abre la tienda generada procedimentalmente |
| `BAR` | Abre el menú de la barra |
| `ARENA` | Abre el menú de la arena |
| `QUEST_GIVER` | Abre el menú de misiones generadas procedimentalmente |
| `CUSTOM_QUEST_GIVER` | Abre el menú de misiones para un conjunto de misiones específico en `questFilenames` |
| `NONE` | Sin interacciones |
| `SELL` | Abre el menú de venta |
| `TELEPORT_BACK` | Teletransporta a los jugadores de regreso a la última ubicación mundial que no sea de elitemobs en la que estuvieron |
| `SCRAPPER` | Abre el menú de chatarra |
| `SMELTER` | Abre el menú de fundición |
| `REPAIRMAN` | Abre el menú de reparación |
| `ENHANCER` | Abre el menú de mejoras de artículos |
| `REFINER` | Abre el menú del refinador |
| `UNBINDER` | Abre el menú desvincular |
| `ARENA_MASTER` | Abre el menú de la arena para la arena establecida en `arenaFilename` |
| `COMMAND` | Ejecuta el comando establecido en `command` |

