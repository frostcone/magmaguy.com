```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando arenas

<div align="center">

### isEnabled

Establece si la arena está habilitada.

| Clave       |      Valores       | Por defecto |
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

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
|`arenaName`| [Cadena de texto](#string) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Establece la primera esquina de la arena.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
|`corner1`| [Ubicación](#serialized_location) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

En esta imagen, `corner1` está representado por *lana verde* y `corner2` por *lana roja*. Esta configuración designa el área entre ellas como la arena, representada por *lana amarilla*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Establece la segunda esquina de la arena, debe estar diametralmente opuesta a `corner1`.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `corner2` | [Ubicación](#serialized_location) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

En esta imagen, `corner1` está representado por *lana verde* y `corner2` por *lana roja*. Esta configuración designa el área entre ellas como la arena, representada por *lana amarilla*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Establece la ubicación de inicio de la arena.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `startLocation` | [Ubicación](#serialized_location) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Establece la ubicación de salida de la arena.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [Ubicación](#serialized_location) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Establece la cantidad de oleadas que tiene la arena.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Entero](#integer) | ninguno    |

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

Establece el retraso, en segundos, entre oleadas.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Entero](#integer) | `0`    |

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

Establece las ubicaciones de aparición para los jefes de la arena.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [Lista de cadenas de texto](#string_list) [1] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Establece la lista de jefes que aparecen durante las oleadas de la arena. Las Arenas de EliteMobs son compatibles con la aparición de Mythic Mobs en las arenas.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `bossList` | [Lista de cadenas de texto](#string_list) [2] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

En este ejemplo, la oleada 1 generará un jefe en el punto de aparición norte y un jefe en el punto de aparición sur. Luego, en la oleada 2, aparecerá un jefe mítico, de nivel 10, en el punto central.

Ten en cuenta que también puedes forzar un nivel para los jefes de EliteMobs, pero se recomienda que establezcas su nivel en su archivo de configuración.

</div>

</details>

***

### rawArenaReward

Establece las recompensas otorgadas al final de las oleadas.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [Tabla de botín universal de EliteMobs](es/elitemobs/loot_tables.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Establece la cantidad mínima de jugadores que una arena debe tener antes de comenzar.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Entero](#integer) |   `1`   |

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

Establece la cantidad máxima de jugadores que una arena puede tener.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Entero](#integer) |  `100`  |

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

Establece los mensajes que se muestran entre oleadas.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Especial [3] |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Establece si la arena utiliza una forma cilíndrica (por defecto es cuboide).

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Booleano](#boolean) |  `false`   |

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

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `permission` | [Cadena de texto](#integer) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>


## Especial [1] 
Puntos de aparición: Utiliza el siguiente formato: `name=pointName:location=world_name,x,y,z`.

## Especial [2] 
Lista de jefes: Utiliza el siguiente formato: `wave=x:spawnPoint=Y:boss=bossfilename.yml`.

## Especial [3] 
Mensajes de arena: Utiliza el siguiente formato: `wave=X:message=your message here`.

<details> 

<summary align="center"><b>Ejemplo de Configuración de Arena</b></summary>

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

<summary align="center"><b>Desglose del ejemplo</b></summary>

<div align="left">

Repasemos este ejemplo desde el principio y expliquemos qué hace esta configuración de arena.

Primero, la arena está habilitada con `isEnabled`, y podemos ver que se llama Example Arena usando la configuración `arenaName`. El nombre se mostrará cuando interactúes con el NPC de la arena (hablaremos sobre cómo crear un NPC de arena más adelante) que permitirá a los jugadores unirse a la arena. corner1 y corner2 definen el tamaño de la arena. Estas esquinas deben estar en lados opuestos entre sí en el área que planeas usar para la arena.

`startLocation` es donde los jugadores aparecerán al unirse a la arena; en el ejemplo, sería en el centro de la arena en el mundo my_arena_world. `exitLocation` es donde los jugadores serán teletransportados después de fallar o terminar la arena. En este caso, sería el mundo my_minecraft_world y las coordenadas del ejemplo.

`waveCount` simplemente establece la cantidad de oleadas que durará la arena. En este caso, serían 5 oleadas. Si los jugadores logran sobrevivir las 5 oleadas, han logrado sobrevivir a la arena. `delayBetweenWaves` establecerá la cantidad de segundos antes de que comience la siguiente oleada. En nuestro ejemplo, los jugadores tendrían 5 segundos para prepararse antes de que comience la siguiente oleada.

`spawnPoints` establece las ubicaciones donde pueden aparecer nuestros mobs. Podemos crear tantos como queramos y nombrarlos como queramos. En el ejemplo, hemos decidido crear 5 puntos de aparición y nombrarlos norte, sur, centro, este y oeste.

`bossList` es donde definimos qué jefe debe aparecer en qué oleada y en qué ubicación. En el ejemplo, la oleada 1 tendrá 3 jefes apareciendo desde las ubicaciones de aparición que nombramos norte, centro y sur. Los tres están configurados para usar el mismo archivo de jefe, pero podríamos haber usado archivos de jefe diferentes para cada uno.

`rawArenaReward` establece las recompensas que se entregarán después de que un jugador logre sobrevivir/superar una oleada. Como podemos ver en el ejemplo, superar la oleada 1 recompensará al jugador con 5 monedas de élite. Si logran sobrevivir el resto de las oleadas y luego superan la oleada 5, serán recompensados con 25 monedas de élite y una probabilidad del 50% de obtener un MagmaGuy's Toothpick de nivel 5.

`minimumPlayerCount` establece la cantidad mínima de jugadores necesaria antes de que la arena comience. En nuestro ejemplo, esta configuración está establecida en 1, por lo que solo se necesita un jugador para que la arena comience. `maximumPlayerCount` establece la cantidad máxima de jugadores que pueden participar en la arena. En nuestro ejemplo, esta configuración está establecida en 3, lo que significa que si más de 3 jugadores intentan participar en la arena, la arena no comenzará hasta que haya 3 jugadores o menos.

`arenaMessages` te permite añadir texto descriptivo que se mostrará en el chat al comienzo de las oleadas definidas. En nuestro ejemplo, hemos decidido mostrar un mensaje corto al comienzo de cada oleada. También hemos decidido incluir el nombre del NPC al comienzo de cada mensaje, dando la ilusión de que el texto es un diálogo hablado por el anunciador (maestro de arena).

`cylindricalArena` esta configuración nos permitirá alternar si el área definida que hemos establecido con `corner1` y `corner2` debe tener una forma cilíndrica en lugar de una cuboide. En nuestro ejemplo, hemos establecido esto en `false`, lo que significa que la arena de ejemplo tiene forma cuboide.

`permission` nos permite establecer un permiso que los jugadores necesitarán tener para poder unirse/iniciar la arena. En nuestro ejemplo, los jugadores necesitarán el permiso `arena.mypermission` para poder usar la arena.

</div>

</details>

## Creando el NPC de la Arena

<div align="center">

### isEnabled

Establece si el NPC está habilitado.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
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

Establece el nombre de visualización del NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `name` | [Cadena de texto](#string) |  ninguno   |

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

Establece la visualización del rol bajo el nombre del NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `role` | [Cadena de texto](#string) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Establece la profesión de MineCraft del NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `profession` | [Profesión](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Será anulado si se usa un `disfraz`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece la ubicación de aparición del NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [Ubicación](#serialized_location) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Establece el diálogo de saludo para el NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `greetings` | [Lista de cadenas de texto](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo cuando los jugadores interactúan con el NPC.

| Clave       |      Valores       | Por defecto |
|-----------|:-----------------:|:-------:|
| `dialog` | [Lista de cadenas de texto](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Establece el diálogo de despedida para el NPC.

| Clave       |           Valores            | Por defecto |
|-----------|:---------------------------:|:-------:|
| `farewell` | [Lista de cadenas de texto](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Si una cadena de texto es demasiado larga, puedes usar \n para separar la cadena en múltiples líneas.*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
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

| Clave       |           Valores            | Por defecto |
|-----------|:---------------------------:|:-------:|
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

Establece el radio cuando el NPC debe comenzar a hablar.

| Clave       |           Valores            | Por defecto |
|-----------|:---------------------------:|:-------:|
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

Establece el tipo de interacción que hará el NPC.

| Clave       |           Valores            | Por defecto |
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

Establece el disfraz personalizado del NPC.

| Clave       |           Valores            | Por defecto |
|-----------|:---------------------------:|:-------:|
| `disguise` | [Disfraz](es/elitemobs/libsdisguises.md) |  ninguno   |

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

| Clave       |           Valores            | Por defecto |
|-----------|:---------------------------:|:-------:|
| `arena` | [Nombre de archivo](#filename) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>
```Please specify the language you would like me to translate the text into.