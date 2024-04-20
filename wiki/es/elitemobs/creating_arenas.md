[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando arenas

<div align="center">

### isEnabled

Establece si la arena está habilitada.

| Clave      |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Boolean](#boolean) | `true`    |

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

| Clave      |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`arenaName`| [String](#string) | ninguno    |

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

| Clave      |      Valores       | Predeterminado |
|-----------|:-----------------:|:-------:|
|`corner1`| [Ubicación](#ubicacion_serializada) | ninguno    |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

En esta imagen, `corner1` está representado por *lana verde* y `corner2` está representado por *lana roja*. Esta configuración designa el área entre ellos como la arena, representada por *lana amarilla*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Establece la segunda esquina de la arena, debe estar diametralmente opuesta a `corner1`.

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `corner2` | [Ubicación](#ubicacion_serializada) | ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
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

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `startLocation` | [Ubicación](#ubicacion_serializada) | ninguno     |

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

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `exitLocation` | [Ubicación](#ubicacion_serializada) | ninguno     |

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

Establece la cantidad de olas que tiene la arena.

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `waveCount` | [Integer](#integer) | ninguno     |

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

Establece el retraso, en segundos, entre olas.

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `delayBetweenWaves` | [Integer](#integer) | `0`     |

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

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `spawnPoints` | [Lista de Strings](#lista_de_strings) [1] |  ninguno   |

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

Establece la lista de jefes que aparecen durante las oleadas de la arena. Las Arenas de EliteMobs admiten el generacion de Mythic Mobs en las arenas.

| Clave       | Valores               | Predeterminado |
|-----------|:-----------------:|:-------:|
| `bossList` | [Lista de Cadenas](#lista_de_cadenas) [2] | ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
listaDeJefes:
- ola=1:posicionGeneracion=norte:jefe=mijefe_ola_1.yml
- ola=1:posicionGeneracion=sur:jefe=mijefe_ola_1.yml
- ola=2:posicionGeneracion=center:jefe=mimythicmobs_jefe:mythicmob=true:level=10
```

En este ejemplo, la ola 1 generará un jefe en el punto de generación del norte y un jefe en el punto de generación del sur. Entonces, en la ola 2, se generará un jefe mítico, a nivel 10, en el punto central.

Tenga en cuenta que también puede forzar un nivel para los jefes EliteMobs, pero se recomienda que configure su nivel en su archivo de configuración.

</div>

</details>

***

### rawArenaReward

Establece las recompensas que se dan al final de las olas.

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `rawArenaReward` | [Tabla universal de botín de EliteMobs]($language$/elitemobs/loot_tables.md) |  ninguno   |

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

Establece la cantidad mínima de jugadores que debe tener una arena antes de comenzar.

| Clave       | Valores | Predeterminado |
|------------ | :-----: | :----: |
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

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

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Integer](#integer) |  `100`  |

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

Establece los mensajes que se ejecutan entre las olas.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Especial [3] |  ninguna   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Anunciador de la Arena] &f¡Hora de la primera ola!"
- wave=2:message="&a[Anunciador de la Arena] &fGuau, ya es la segunda ola."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Establece si la arena usa una forma cilíndrica (por defecto es cúbica).

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) |  `false`   |

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

Establece el permiso necesario para usar la arena.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `permission` | [String](#integer) |  ninguna  |

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
Mensajes de la arena: Utiliza el siguiente formato: `wave=X:message=tu mensaje aquí`.

<details> 

<summary align="center"><b>Ejemplo de Configuración de la Arena</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Arena de Ejemplo
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
  - wave=1:message=&d[NPC de la Arena] &f¡Guau! ¡Ola 1!
  - wave=2:message=&d[NPC de la Arena] &f¡Es asombroso, ya es la ola 2!
  - wave=3:message=&d[NPC de la Arena] &f¡La ola 3 ya está aquí!
  - wave=4:message=&d[NPC de la Arena] &f¡Ya es la ola 4!
  - wave=5:message=&d[NPC de la Arena] &fBueno, todo acaba con ésta.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>Desglose del ejemplo</b></summary>

<div align="left">

Vamos a revisar este ejemplo desde el principio y explicar lo que hace esta configuración de la arena.

Primero, la arena está habilitada con `isEnabled`, y podemos ver que se llama Arena de Ejemplo usando la configuración `arenaName`. El nombre se mostrará cuando interactúes con el NPC de la arena (hablamos de cómo hacer un NPC de la arena más adelante) que permitirá a los jugadores unirse a la arena. `corner1` y `corner2` definen el tamaño de la arena. Estas esquinas deberían estar en los lados opuestos de cada uno en el área que planeas usar para la arena.

`startLocation` es donde los jugadores aparecerán cuando se unan a la arena, en el ejemplo eso sería en el centro de la arena en el mundo `my_arena_world`. `exitLocation` es donde se teletransportarán los jugadores después de que fallen o terminen la arena. En este caso, sería el mundo `my_minecraft_world` y las coordenadas en el ejemplo.

`waveCount` simplemente establece la cantidad de olas que durará la arena. En este caso, serían 5 olas. Si los jugadores logran sobrevivir a las 5 olas, habrán logrado sobrevivir en la arena. `delayBetweenWaves` establecerá la cantidad de segundos antes de que comience la próxima ola. En nuestro ejemplo, los jugadores tendrían 5 segundos para prepararse antes de que comience la próxima ola.

`spawnPoints` establece las ubicaciones donde podemos hacer aparecer nuestros mobs. Podemos hacer tantos como queramos y nombrarlos como queramos. En el ejemplo, hemos decidido hacer 5 puntos de aparición y nombrarlos norte, sur, centro, este y oeste.

`bossList` es donde definimos qué jefe debe aparecer en qué ola y en qué ubicación. En el ejemplo, la ola 1 tendrá 3 jefes apareciendo desde las ubicaciones de aparición que nombramos norte, centro y sur. Los tres están configurados para usar el mismo archivo de jefe, pero podríamos haber usado diferentes archivos de jefe para cada uno.

`rawArenaReward` establece las recompensas que se entregarán después de que un jugador logre sobrevivir/superar una ola. Como podemos ver en el ejemplo, al superar la ola 1 se recompensará al jugador con 5 monedas élite. Si logran sobrevivir al resto de las olas y luego vencen la ola 5, serán recompensados con 25 monedas élite y un 50% de probabilidad de obtener un MagmaGuy's Toothpick de nivel 5.

`minimumPlayerCount` establece la cantidad mínima requerida de jugadores necesarios antes de que la arena comience. En nuestro ejemplo, esta configuración está establecida a 1, así que solo se necesita un jugador para que la arena comience. `maximumPlayerCount` establece la cantidad máxima de jugadores que pueden participar en la arena. En nuestro ejemplo, esta configuración está establecida a 3, lo que significa que si más de 3 jugadores intentan participar en la arena, entonces la arena no comenzará hasta que haya 3 jugadores o menos.

`arenaMessages` te permite agregar un texto de sabor que se mostrará en el chat al comienzo de las olas definidas. En nuestro ejemplo, hemos decidido mostrar un breve mensaje al comienzo de cada ola. También hemos decidido incluir el nombre del NPC al comienzo de cada mensaje dando la ilusión de que el texto es un diálogo hablado por el anunciador (maestro de arena).

`cylindricalArena` esta configuración nos permitirá alternar si el área definida que hemos establecido con `corner1` y `corner2` debe tener una forma cilíndrica en lugar de una cúbica. En nuestro ejemplo, hemos establecido esto en `false`, lo que significa que la arena del ejemplo es de forma cúbica.

`permission` nos permite establecer un permiso que los jugadores necesitarán tener para poder unirse/iniciar la arena. En nuestro ejemplo, los jugadores necesitarán el permiso `arena.mypermission` para poder usar la arena.

</div>

</details>

## Creando el NPC de la Arena

<div align="center">

### isEnabled

Establece si el NPC está habilitado.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

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

Establece el nombre visible del NPC.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `name` | [String](#string) |  ninguna   |

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

Establece la función que se muestra debajo del nombre del NPC.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `role` | [String](#string) |  ninguna   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
role: "&c<Maestro de la Arena>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Establece la profesión de MineCraft del NPC.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  ninguna   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">

*Será sobrescrito si se usa un `disguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece el lugar de aparición del NPC.

| Key       |      Values       | Predeterminado |
|-----------|:-----------------:|:--------------:|
| `spawnLocation` | [Ubicación](#ubicacion_serializada) |  ninguno   |

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

Establece el diálogo de saludo del NPC.

| Key       |      Values       | Predeterminado |
|-----------|:-----------------:|:--------------:|
| `greetings` | [Lista de Cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- ¡Bienvenido a la arena!
- ¡La arena te da la bienvenida!
```

<div align="center">

![crear_npc_arena_saludos.jpg](../../../img/wiki/crear_npc_arena_saludos.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo cuando los jugadores interactúan con el NPC.

| Key       |      Values       | Predeterminado |
|-----------|:-----------------:|:--------------:|
| `dialog` | [Lista de Cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- ¿Listo para el desafío?
- ¿Enfrentas la arena?
```

<div align="center">

![crear_npc_arena_dialogo.jpg](../../../img/wiki/crear_npc_arena_dialogo.jpg)

</div>

</div>

</details>

***

### farewell

Establece el diálogo de despedida del NPC.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
| `farewell` | [Lista de Cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell:
- Adiós.
- ¡Regresa con tu escudo, o sobre él!
```

<div align="center">

![crear_npc_arena_despedida.jpg](../../../img/wiki/crear_npc_arena_despedida.jpg)

<div align="center">

*Si una cadena es demasiado larga, puedes usar \n para separar la cadena en varias líneas.*

<div align="left">

```yml
farewell:
- Adiós.
- ¡Regresa con tu\nescudo, o sobre él!
```
</div>

![crear_npc_arena_lineas.jpg](../../../img/wiki/crear_npc_arena_lineas.jpg)

</div>

</div>

</details>

***

### canTalk

Establece el diálogo de despedida del NPC.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
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

Establece el radio en el que el NPC debe comenzar a hablar.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
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

Establece el tipo de interacción que hará el NPC.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
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

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
| `disguise` | [Disfraz]($language$/elitemobs/libsdisguises.md) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![crear_npc_arena_disfraz.jpg](../../../img/wiki/crear_npc_arena_disfraz.jpg)

</div>

</div>

</details>

***

### arena

Define a qué arena serán teletransportados los jugadores.

| Key       |           Values            | Predeterminado |
|-----------|:---------------------------:|:--------------:|
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

Establece dónde deben ser teletransportados los jugadores después de interactuar con el NPC. Esta configuración se suele utilizar para teleportar a los jugadores a un área tipo vestíbulo dedicada de la arena donde pueden comenzar el desafío de la arena o esperar a que otros jugadores terminen de pasar por la arena.

| Key       |        Values         | Predeterminado |
|-----------|:---------------------:|:--------------:|
| `teleportLocation` | [Ubicación](#ubicacion) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: mi_mundo_arena,10,50,10,0,0
```

</div>

</details>

***

<details>

<summary align="center"><b>Ejemplo de Configuración de Arena </b></summary>

<div align="left">

```yml
isEnabled: true
name: Ejemplo NPC
role: <Maestro de Arena>
profession: ARMORERO
spawnLocation: mi_mundo_minecraft,233,44,245,0,0
greetings:
  - ¡Bienvenido a la Arena!
dialog:
  - ¿Listo para entrar a la Arena?
farewell:
  - ¡Adiós!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: ejemplo_arena.yml
```
Este ejemplo muestra un NPC de Arena básico que aparecerá en mi_mundo_minecraft con un disfraz de zombie. Los jugadores pueden interactuar con este NPC para desafiar la Arena de Ejemplo.

</div>

</details>

## Especial [4]
La siguiente es la lista de tipos de interacción de NPC válidos:

| Tipo | Descripción |
| --- | :-: |
| `GUILD_GREETER` | Abre el menú del gremio de aventureros |
| `CHAT` | Hacer clic con el botón derecho hace que se pase al `dialog` |
| `CUSTOM_SHOP` | Abre el menú de la tienda personalizada |
| `PROCEDURALLY_GENERATED_SHOP` | Abre la tienda generada procedimentalmente |
| `BAR` | Abre el menú del bar |
| `ARENA` | Abre el menú de la arena |
| `QUEST_GIVER` | Abre el menú de misiones generadas proceduralmente |
| `CUSTOM_QUEST_GIVER` | Abre el menú de misiones para un conjunto de misiones específico establecido en `questFilenames` |
| `NONE` | Sin interacciones |
| `SELL` | Abre el menú de venta |
| `TELEPORT_BACK` | Teletransporta a los jugadores de vuelta a la última ubicación del mundo no-elitemobs en la que estuvieron |
| `SCRAPPER` | Abre el menú de desguace |
| `SMELTER` | Abre el menú de fundición |
| `REPAIRMAN` | Abre el menú de reparaciones |
| `ENHANCER` | Abre el menú de mejoras de objetos |
| `REFINER` | Abre el menú de refinamiento |
| `UNBINDER` | Abre el menú de desvinculación |
| `ARENA_MASTER` | Abre el menú de la arena para la arena establecida en `arenaFilename` |
| `COMMAND` | Ejecuta el comando establecido en `command` |