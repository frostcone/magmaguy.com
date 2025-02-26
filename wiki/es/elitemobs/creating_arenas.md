[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando arenas

<div align="center">

### isEnabled

Establece si la arena está habilitada.

| Clave       |        Valores        | Predeterminado |
|-------------|:---------------------:|:--------------:|
| `isEnabled` | [Booleano](#booleano) |     `true`     |

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

| Clave       |      Valores      | Predeterminado |
|-------------|:-----------------:|:--------------:|
| `arenaName` | [Cadena](#cadena) |    ninguno     |

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

| Clave     |               Valores               | Predeterminado |
|-----------|:-----------------------------------:|:--------------:|
| `corner1` | [Ubicación](#ubicacion_serializada) |    ninguno     |

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

| Clave     |               Valores               | Predeterminado |
|-----------|:-----------------------------------:|:--------------:|
| `corner2` | [Ubicación](#ubicacion_serializada) |    ninguno     |

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

| Clave           |               Valores               | Predeterminado |
|-----------------|:-----------------------------------:|:--------------:|
| `startLocation` | [Ubicación](#ubicacion_serializada) |    ninguno     |

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

| Clave          |               Valores               | Predeterminado |
|----------------|:-----------------------------------:|:--------------:|
| `exitLocation` | [Ubicación](#ubicacion_serializada) |    ninguno     |

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

| Clave       |      Valores      | Predeterminado |
|-------------|:-----------------:|:--------------:|
| `waveCount` | [Entero](#entero) |    ninguno     |

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

| Clave               |      Valores      | Predeterminado |
|---------------------|:-----------------:|:--------------:|
| `delayBetweenWaves` | [Entero](#entero) |      `0`       |

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

| Clave         |                  Valores                  | Predeterminado |
|---------------|:-----------------------------------------:|:--------------:|
| `spawnPoints` | [Lista de cadenas](#lista_de_cadenas) [1] |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
spawnPoints:
- name=norte:location=my_arena_world,219.5,71,273.5
- name=sur:location=my_arena_world,219.5,71,316.5
- name=oeste:location=my_arena_world,197.5,71,295.5
- name=este:location=my_arena_world,240.5,71,295.5
- name=centro:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Establece la lista de jefes que aparecen durante las oleadas de la arena. Las Arenas de EliteMobs admiten la aparición
de Mythic Mobs en las arenas.

| Clave      |                  Valores                  | Predeterminado |
|------------|:-----------------------------------------:|:--------------:|
| `bossList` | [Lista de cadenas](#lista_de_cadenas) [2] |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=norte:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=sur:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=centro:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

En este ejemplo, la oleada 1 generará un jefe en el punto de aparición norte y un jefe en el punto de aparición sur.
Luego, en la oleada 2, aparecerá un jefe mítico, en el nivel 10, en el punto central.

Tenga en cuenta que también puede forzar un nivel para los jefes de EliteMobs, pero se recomienda que establezca su
nivel en su archivo de configuración.

</div>

</details>

***

### rawArenaReward

Establece las recompensas otorgadas al final de las oleadas.

| Clave            |                                   Valores                                    | Predeterminado |
|------------------|:----------------------------------------------------------------------------:|:--------------:|
| `rawArenaReward` | [Tabla de botín universal de EliteMobs]($language$/elitemobs/loot_tables.md) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=libro_encantado_daño_total.yml:wave=5:chance=0.25
- filename=chatarra_elite_pequeña.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=pergamino_de_invocación_de_comerciante.yml:wave=5
- filename=palillo_de_magmaguys.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Establece la cantidad mínima de jugadores que debe tener una arena antes de comenzar.

| Clave                |      Valores      | Predeterminado |
|----------------------|:-----------------:|:--------------:|
| `minimumPlayerCount` | [Entero](#entero) |      `1`       |

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

| Clave                |      Valores      | Predeterminado |
|----------------------|:-----------------:|:--------------:|
| `maximumPlayerCount` | [Entero](#entero) |     `100`      |

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

| Clave           |   Valores    | Predeterminado |
|-----------------|:------------:|:--------------:|
| `arenaMessages` | Especial [3] |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Anunciador de la Arena] &f¡Es hora de la oleada uno!"
- wave=2:message="&a[Anunciador de la Arena] &fVaya, ya la oleada dos."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Establece si la arena usa una forma cilíndrica (el valor predeterminado es cuboide).

| Clave              |        Valores        | Predeterminado |
|--------------------|:---------------------:|:--------------:|
| `cylindricalArena` | [Booleano](#booleano) |    `false`     |

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

| Clave        |      Valores      | Predeterminado |
|--------------|:-----------------:|:--------------:|
| `permission` | [Cadena](#entero) |    ninguno     |

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

Puntos de aparición: Utiliza el siguiente formato: `name=nombrePunto:location=nombre_mundo,x,y,z`.

## Especial [2]

Lista de jefes: Utiliza el siguiente formato: `wave=x:spawnPoint=Y:boss=nombrearchivojefe.yml`.

## Especial [3]

Mensajes de la arena: Utiliza el siguiente formato: `wave=X:message=tu mensaje aquí`.

<details> 

<summary align="center"><b>Ejemplo de configuración de arena</b></summary>

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
  - name=norte:location=my_arena_world,40.5,0,0
  - name=sur:location=my_arena_world,10.5,0,0
  - name=oeste:location=my_arena_world,0,0,40.5
  - name=este:location=my_arena_world,0,0,10.5
  - name=centro:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=norte:boss=ejemplo_arena_oleada_1_mob.yml
  - wave=1:spawnPoint=centro:boss=ejemplo_arena_oleada_1_mob.yml
  - wave=1:spawnPoint=sur:boss=ejemplo_arena_oleada_1_mob.yml
  - wave=2:spawnPoint=centro:boss=ejemplo_arena_oleada_2_mob.yml
  - wave=3:spawnPoint=este:boss=ejemplo_arena_oleada_3_mob.yml
  - wave=3:spawnPoint=oeste:boss=ejemplo_arena_oleada_3_mob.yml
  - wave=4:spawnPoint=centro:boss=ejemplo_arena_oleada_4_mob.yml
  - wave=4:spawnPoint=centro:boss=ejemplo_arena_oleada_4_mob.yml
  - wave=5:spawnPoint=centro:boss=ejemplo_arena_oleada_5_mob.yml
  - wave=5:spawnPoint=sur:boss=ejemplo_arena_oleada_5_mob.yml
  - wave=5:spawnPoint=oeste:boss=ejemplo_arena_oleada_5_mob.yml
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
  - wave=1:message=&d[NPC de Arena] &f¡Guau! ¡Oleada 1!
  - wave=2:message=&d[NPC de Arena] &f¡Increíble, es la oleada 2!
  - wave=3:message=&d[NPC de Arena] &f¡La oleada 3 ya está en marcha!
  - wave=4:message=&d[NPC de Arena] &f¡Ya la oleada 4!
  - wave=5:message=&d[NPC de Arena] &fBueno, todo termina después de esta.
cylindricalArena: false
permission: arena.mipermiso
```
</div>

</details>

<details> 

<summary align="center"><b>Desglose del ejemplo</b></summary>

<div align="left">

Vamos a repasar este ejemplo desde arriba y explicar lo que hace esta configuración de la arena.

Primero, la arena se habilita con `isEnabled`, y podemos ver que se llama Arena de Ejemplo usando la
configuración `arenaName`. El nombre se mostrará cuando interactúes con el NPC de la arena (hablaremos sobre cómo crear
un NPC de la arena más adelante) que permitirá a los jugadores unirse a la arena. corner1 y corner2 definen el tamaño de
la arena. Estas esquinas deben estar en los lados opuestos entre sí en el área que planeas usar para la arena.

`startLocation` es donde aparecerán los jugadores al unirse a la arena, en el ejemplo estaría en el centro de la arena
en el mundo my_arena_world. `exitLocation` es donde los jugadores serán teletransportados después de que fallen o
terminen la arena. En este caso, sería el mundo my_minecraft_world y las coordenadas del ejemplo.

`waveCount` simplemente establece la cantidad de oleadas que durará la arena. En este caso serían 5 oleadas. Si los
jugadores logran sobrevivir a las 5 oleadas, han logrado sobrevivir a la arena. `delayBetweenWaves` establecerá la
cantidad de segundos antes de que comience la siguiente oleada. En nuestro ejemplo, los jugadores tendrían 5 segundos
para prepararse antes de que comience la siguiente oleada.

`spawnPoints` establece las ubicaciones donde podemos hacer que aparezcan nuestras criaturas. Podemos hacer tantas como
queramos y nombrarlas como queramos. En el ejemplo, hemos decidido crear 5 puntos de aparición y nombrarlos norte, sur,
centro, este y oeste.

`bossList` es donde definimos qué jefe debe aparecer en qué oleada y en qué ubicación. En el ejemplo, la oleada 1 tendrá
3 jefes que aparecerán desde las ubicaciones de aparición que nombramos norte, centro y sur. Los tres están configurados
para usar el mismo archivo de jefe, pero podríamos haber usado diferentes archivos de jefe para cada uno.

`rawArenaReward` establece las recompensas que se entregarán después de que un jugador logre sobrevivir/vencer una
oleada. Como podemos ver en el ejemplo, vencer la oleada 1 recompensará al jugador con 5 monedas de élite. Si logran
sobrevivir al resto de las oleadas y luego vencer la oleada 5, serán recompensados con 25 monedas de élite y un 50% de
posibilidades de obtener un Palillo de MagmaGuy de nivel 5.

`minimumPlayerCount` establece la cantidad mínima requerida de jugadores necesarios antes de que comience la arena. En
nuestro ejemplo, esta configuración está establecida en 1, por lo que solo se necesita un jugador para que comience la
arena. `maximumPlayerCount` establece la cantidad máxima de jugadores que pueden participar en la arena. En nuestro
ejemplo, esta configuración está establecida en 3, lo que significa que si más de 3 jugadores intentan participar en la
arena, la arena no comenzará hasta que haya 3 jugadores o menos.

`arenaMessages` te permite añadir texto adicional que se mostrará en el chat al comienzo de las oleadas definidas. En
nuestro ejemplo, hemos decidido mostrar un breve mensaje al inicio de cada oleada. También hemos decidido incluir el
nombre del NPC al inicio de cada mensaje dando la ilusión de que el texto es un diálogo hablado por el anunciador (
maestro de arena).

`cylindricalArena` esta configuración nos permitirá alternar si el área definida que hemos establecido con `corner1`
y `corner2` debe ser una forma cilíndrica en lugar de una cuboide. En nuestro ejemplo, lo hemos establecido en `false`,
lo que significa que la arena de ejemplo tiene forma cuboide.

`permission` nos permite establecer un permiso que los jugadores deberán tener para poder unirse/iniciar la arena. En
nuestro ejemplo, los jugadores necesitarán el permiso `arena.mipermiso` para poder usar la arena.

</div>

</details>

## Creando el NPC de la arena

<div align="center">

### isEnabled

Establece si el NPC está habilitado.

| Clave       |        Valores        | Predeterminado |
|-------------|:---------------------:|:--------------:|
| `isEnabled` | [Booleano](#booleano) |     `true`     |

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

| Clave  |      Valores      | Predeterminado |
|--------|:-----------------:|:--------------:|
| `name` | [Cadena](#cadena) |    ninguno     |

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

| Clave  |      Valores      | Predeterminado |
|--------|:-----------------:|:--------------:|
| `role` | [Cadena](#cadena) |    ninguno     |

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

| Clave        |                                             Valores                                              | Predeterminado |
|--------------|:------------------------------------------------------------------------------------------------:|:--------------:|
| `profession` | [Profesión](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Será anulado si se usa un `disguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Establece la ubicación de aparición del NPC.

| Clave           |               Valores               | Predeterminado |
|-----------------|:-----------------------------------:|:--------------:|
| `spawnLocation` | [Ubicación](#ubicacion_serializada) |    ninguno     |

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

| Clave       |                Valores                | Predeterminado |
|-------------|:-------------------------------------:|:--------------:|
| `greetings` | [Lista de cadenas](#lista_de_cadenas) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
greetings:
- ¡Bienvenido a la Arena!
- ¡La Arena te da la bienvenida!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Establece el diálogo cuando los jugadores interactúan con el NPC.

| Clave    |                Valores                | Predeterminado |
|----------|:-------------------------------------:|:--------------:|
| `dialog` | [Lista de cadenas](#lista_de_cadenas) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dialog:
- ¿Listo para un desafío?
- ¿Enfrentar la Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Establece el diálogo de despedida para el NPC.

| Clave      |                Valores                | Predeterminado |
|------------|:-------------------------------------:|:--------------:|
| `farewell` | [Lista de cadenas](#lista_de_cadenas) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
farewell:
- Adiós.
- ¡Regresa con tu escudo o sobre él!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Si una cadena es demasiado larga, puedes usar \n para separar la cadena en varias líneas.*

<div align="left">

```yml
farewell:
- Adiós.
- ¡Regresa con tu\nescudo o sobre él!
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

| Clave     |        Valores        | Predeterminado |
|-----------|:---------------------:|:--------------:|
| `canTalk` | [Booleano](#booleano) |     `true`     |

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

| Clave              |     Valores     | Predeterminado |
|--------------------|:---------------:|:--------------:|
| `activationRadius` | [Doble](#doble) |     `3.0`      |

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

| Clave             |   Valores    | Predeterminado |
|-------------------|:------------:|:--------------:|
| `interactionType` | Especial [4] | `ARENA_MASTER` |

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

| Clave      |                     Valores                      | Predeterminado |
|------------|:------------------------------------------------:|:--------------:|
| `disguise` | [Disfraz]($language$/elitemobs/libsdisguises.md) |    ninguno     |

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

| Clave   |                 Valores                 | Predeterminado |
|---------|:---------------------------------------:|:--------------:|
| `arena` | [Nombre de archivo](#nombre_de_archivo) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### teleportLocation

Establece dónde deben teletransportarse los jugadores después de interactuar con el NPC. Esta configuración se usa
generalmente para teletransportar a los jugadores a un área tipo lobby dedicada de la arena donde pueden comenzar el
desafío de la arena o esperar a que otros jugadores terminen de pasar por la arena.

| Clave              |         Valores         | Predeterminado |
|--------------------|:-----------------------:|:--------------:|
| `teleportLocation` | [Ubicación](#ubicacion) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: my_arena_world,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Ejemplo de configuración de Arena</b></summary>

<div align="left">

```yml
isEnabled: true
name: NPC de ejemplo
role: <Maestro de la Arena>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - ¡Bienvenido a la Arena!
dialog:
```

</div>
</details>
- ¿Listo para entrar en la Arena?
farewell:
  - ¡Adiós!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: ejemplo_arena.yml
```
Este ejemplo muestra un NPC básico de la Arena que aparecerá en my_minecraft_world con un disfraz de zombi. Los jugadores pueden interactuar con este NPC para desafiar la Arena de Ejemplo.

</div>

</details>

## Especial [4]
La siguiente es la lista de tipos de interacción de NPC válidos:

| Tipo                          |                                           Descripción                                            |
|-------------------------------|:------------------------------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                              Abre el menú del gremio de aventureros                              |
| `CHAT`                        |                              Hacer clic derecho recorre el `dialog`                              |
| `CUSTOM_SHOP`                 |                             Abre el menú de la tienda personalizada                              |
| `PROCEDURALLY_GENERATED_SHOP` |                            Abre la tienda generada procedimentalmente                            |
| `BAR`                         |                                     Abre el menú de la barra                                     |
| `ARENA`                       |                                     Abre el menú de la arena                                     |
| `QUEST_GIVER`                 |                      Abre el menú de misiones generadas procedimentalmente                       |
| `CUSTOM_QUEST_GIVER`          | Abre el menú de misiones para un conjunto de misiones específico establecido en `questFilenames` |
| `NONE`                        |                                        Sin interacciones                                         |
| `SELL`                        |                                      Abre el menú de venta                                       |
| `TELEPORT_BACK`               | Teletransporta a los jugadores de regreso a la última ubicación mundial que no era de elitemobs  |
| `SCRAPPER`                    |                                     Abre el menú de chatarra                                     |
| `SMELTER`                     |                                    Abre el menú de fundición                                     |
| `REPAIRMAN`                   |                                    Abre el menú de reparación                                    |
| `ENHANCER`                    |                                Abre el menú de mejoras de objetos                                |
| `REFINER`                     |                                    Abre el menú de refinería                                     |
| `UNBINDER`                    |                                  Abre el menú de desvinculación                                  |
| `ARENA_MASTER`                |              Abre el menú de la arena para la arena establecida en `arenaFilename`               |
| `COMMAND`                     |                           Ejecuta el comando establecido en `command`                            |
