Aquí tienes la traducción al español, conservando el formato markdown:

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando jefes personalizados

# Antes de empezar

## ¿Dónde van los archivos de jefe?

Los archivos de jefe van en la carpeta de configuración `~/plugins/EliteMobs/custombosses`.

Es posible crear subcarpetas, como `~/plugins/EliteMobs/custombosses/mybosses`. Esto es recomendable para mantener las cosas organizadas.

Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible usar la [webapp](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados y más de forma rápida y sencilla.

## Configuración más pequeña posible

**El archivo de configuración más pequeño posible para un Jefe Personalizado es:**
```yml
```

Observa cómo es solo un archivo vacío. Esto seguirá generando un jefe personalizado zombi con un nombre personalizado, ya que esos son los valores predeterminados. **¡Todo en esta página es opcional!**

## Ejemplo de jefe

<div align="center">

Echemos un vistazo a un ejemplo de cómo se ve un archivo de jefe.

<details>
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eTest boss'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: A test boss has been spawned!
deathMessage: A test boss has been slain by $players!
escapeMessage: A test boss entity has escaped!
locationMessage: 'Test entity: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "I've hit you!"
onDamagedMessages:
- "I've been hit!"
```

</div>

</details>

</div>


## Configuración básica

<div align="center">

### isEnabled

Establece si el jefe está habilitado.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

Establece el tipo de entidad del jefe.

| Clave |                                                                                   Valores                                                                                    | Predeterminado |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Elige de aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> El valor también debe estar presente en la carpeta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

Establece el nombre del jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `name` | [Cadena](#string), acepta [códigos de color](#color_codes) y los marcadores de posición listados abajo | "Nombre Predeterminado" |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si deseas incluir el nivel del jefe en su campo de nombre, simplemente usa uno de los siguientes marcadores de posición.

| Marcador de posición | Descripción | Ejemplo | Salida (para un jefe de nivel 10) |
|-|:-:|:-:|-|
| `$level` | Reemplaza con el nivel | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | Reemplaza con el nivel, hecho para mobs normales | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | Reemplaza con el nivel, hecho para minibosses | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | Reemplaza con el nivel, hecho para jefes | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | Reemplaza con el nivel, hecho para refuerzos | `"$reinforcementLevel Cool boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | Reemplaza con el nivel, hecho para jefes de evento | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Establece el nivel del jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `level` | Números [enteros](#integer) positivos o `dynamic` | `dynamic` |

`dynamic` se usa para eventos y se ajusta al nivel de los jugadores cercanos en el momento de la generación del jefe.
No se recomienda para jefes regionales.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### scale

Establece la escala (tamaño) del jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `scale` | [Multiplicador](#multiplier) | `1.0` |

Al escalar, `1.0` representa el tamaño predeterminado. Para hacer la entidad más grande, aumenta el valor (por ejemplo, `1.2`). Para hacer la entidad más pequeña, disminuye el valor (por ejemplo, `0.8`).

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

Establece qué tipo de jefe es. Esto se usa para mostrar barras de salud de jefe y otras características.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` hará que el plugin muestre barras de salud cuando los jugadores estén luchando contra estos tipos de jefe.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

Establece la salud del jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `healthMultiplier` | [Multiplicador](#multiplier) | `1.0` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

Establece el multiplicador de daño del jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `damageMultiplier` | [Multiplicador](#multiplier) | `1.0` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

Establece si el jefe usa la variante bebé del mob. Solo se puede aplicar a mobs con variantes bebé.
Si deseas [disfrazar]($language$/elitemobs/libsdisguises.md) al jefe pero también quieres que permanezca como bebé mientras está disfrazado (asegúrate de que la entidad del disfraz también soporte la variante bebé), puedes usar esta configuración:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>


***

### helmet/chestplate/leggings/boots/mainhand/offhand

Establece la armadura del jefe. No todos los modelos de minecraft pueden mostrar armadura. La armadura del jefe es puramente cosmética y no afecta la jugabilidad.

| Clave |                                    Valores                                     | Predeterminado |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | ninguno |
| `chestplate` | [Material](#material) | ninguno |
| `leggings` | [Material](#material) | ninguno |
| `boots` | [Material](#material) | ninguno |
| `mainHand` | [Material](#material) | ninguno |
| `offHand` | [Material](#material) | ninguno |

**Nota:** Este campo también te permite establecer modelos personalizados para los ítems. Para establecer el ID del modelo personalizado, añade el ID después del tipo de material siguiendo este formato: `MATERIAL_DEL_ITEM:ID`. Ejemplo: `DIAMOND_SWORD:1` establece que el jefe use una espada de diamante con el modelo personalizado #1 en tu paquete de texturas.

**Nota 2:** Este campo también te permite establecer colores de cuero personalizados con el formato `MATERIAL_DEL_ITEM:CÓDIGO`, donde el código es la representación hexadecimal del color. Ejemplo: `LEATHER_LEGGINGS:ffa500` crearía polainas naranjas. Puedes usar códigos hexadecimales, simplemente elimina el `#` del código hexadecimal. Puedes obtener códigos hexadecimales [aquí](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** El campo del casco también te permite establecer cascos de mob como cabezas de jugador. Simplemente obtén el UUID de la cabeza de jugador que deseas usar e introdúcelo en el campo del casco. *El jugador debe estar en línea para que esto funcione o la cabeza se establecerá por defecto en una cabeza genérica de MineCraft.* Puedes obtener los UUID de jugador [aquí](https://minecraftuuid.com/).

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

Establece los poderes que tiene el jefe.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `powers` | Consulta la lista de abajo | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*Nota: Puedes consultar [esta página]($language$/elitemobs/premade_powers.md) si quieres ver una lista de poderes prefabricados que puedes usar.*

***

### Configuración intermedia - Generando refuerzos

Los refuerzos también entran en la categoría de poderes, usando las siguientes configuraciones:

<details>

<summary><b>Configuración de refuerzos</b></summary>

| Clave | Descripción |                                                                                                             Valores                                                                                                             | Predeterminado |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Qué activa la generación del refuerzo. Obligatorio. |                                                                                                    Consulta la lista de abajo                                                                                                     | ninguno |
| `filename` | Nombre del archivo del jefe a generar como refuerzo. Obligatorio. |                                                                                                       [Cadena](#string)                                                                                                        | ninguno |
| `chance` | Probabilidad de que se genere el refuerzo. Opcional. |                                                                                                       [Doble](#double)                                                                                                        | `1.0` |
| `amount` | Establece la cantidad de refuerzos a generar. Opcional. |                                                                                                      [Entero](#integer)                                                                                                       | `1` |
| `inheritAggro` | Hace que el refuerzo herede el aggro del jefe. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Hace que los refuerzos se generen en un radio de 30 bloques desde el jefe. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Hace que el refuerzo herede el nivel del jefe. Opcional |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Hace que el refuerzo se genere usando el [sistema de generación personalizado]($language$/elitemobs/creating_spawns.md). Solo se usa para `summonType: GLOBAL` | ninguno |
| `location` | Ubicación de generación. Opcional. | `nombre_del_mundo,x,y,z` o `x,y,z` para una ubicación relativa al jefe. El desplazamiento es relativo a la ubicación de generación para jefes regionales. También puedes usar `same_as_boss` para que los refuerzos se generen en el mismo mundo que el jefe. | ninguno |
| `lightningRod` | Configuración especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Hace que los cristales del end generen rayos a su alrededor. Opcional. |                                                                                                        `true` / `false`                                                                                                        | ninguno |

</details>

Los tipos de invocación establecen las condiciones para la generación de refuerzos. La siguiente es una lista de los tipos de invocación válidos:

<details>

<summary><b>Tipos de invocación</b></summary>

| Valor |                                                                         Descripción                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Solo genera los refuerzos una vez, la primera vez que el jefe es dañado.                                           |
| `ON_HIT`  |                                                              Genera los refuerzos al ser golpeado.                                                              |
| `ON_COMBAT_ENTER` |                                                   Genera los refuerzos cuando el jefe entra en combate.                                                    |
| `GLOBAL` | Genera un refuerzo por cada jugador en línea. Requiere que la clave `customSpawn` tenga un [custom spawn]($language$/elitemobs/creating_spawns.md) válido establecido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Coloca refuerzos de cristal del end al entrar en combate, solo para usar con peleas de dragón personalizadas.                                  |

</details>

Ten en cuenta que también es posible generar refuerzos a través de [Elite Scripts]($language$/elitemobs/creating_powers.md), por lo que hay formas más personalizables de generar refuerzos.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### Configuración experta - Creando tus propios poderes

Es posible crear tus propios poderes, ya sea en el propio archivo del jefe o como un nuevo archivo de configuración en la carpeta de poderes. Puedes aprender más sobre eso [aquí]($language$/elitemobs/creating_powers.md).

### Limitando poderes basados en la dificultad de la mazmorra instanciada

Las [mazmorras instanciadas]($language$/elitemobs/dungeons.md&section=instanced-dungeons) pueden tener configuraciones de dificultad, y es posible hacer que un poder específico solo esté habilitado para dificultades específicas.

<details>

<summary><b>Opciones de limitación de poder</b></summary>

<div align="left">

| Clave | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| `filename` | Nombre del archivo del poder. | [Cadena](#string) | ninguno |
| `difficultyID` | Nombre de la dificultad, coincidiendo con el nombre de la dificultad en el paquete de mazmorra. | [Cadena](#string) | ninguno |

</div>

</details>

Esto solo se aplicará a mazmorras instanciadas.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

Establece el mensaje a enviar cuando el jefe se genera. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `spawnMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: I rise once more!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Establece la lista de mensajes a enviar cuando el jefe muere. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `deathMessages` | [Cadenas](#string), [códigos de color](#color_codes) y los marcadores de posición de abajo | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4The Test Boss has been killed!'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage damage!'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage damage!'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage damage!'
- '&4Slayers: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Los mensajes de muerte usan los siguientes marcadores de posición:

<details>

<summary><b>Marcadores de posición</b></summary>

| Valor | Descripción |
|-|:-:|
| `$damager1name` | El nombre del jugador con más daño |
| `$damager2name` | El nombre del jugador con el segundo mayor daño |
| `$damager3name` | El nombre del jugador con el tercer mayor daño |
| `$damager1damage` | La cantidad de daño del jugador con más daño |
| `$damager2damage` | La cantidad de daño del jugador con el segundo mayor daño |
| `$damager3damage` | La cantidad de daño del jugador con el tercer mayor daño |
| `$players` | Muestra una lista de todos los jugadores que infligieron daño |

</details>

### onKillMessage

Establece el mensaje a enviar cuando el jefe mata a un jugador. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `onKillMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: I win, you lose!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Establece el tamaño del jefe slime, pero solo funciona para Slimes y Magmacubes.

</div>

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `slimeSize` | [Entero](#integer) | `4` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

Establece si el jefe se generará como neutral o no. Esto solo se aplica a tipos de entidad que pueden ser neutrales, como Lobos o Golems de Hierro.

</div>

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `neutral` | [Booleano](#boolean) | `false` |

<details>Okay, I will translate the text into Spanish, keeping all the markdown formatting intact.

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Ajustes avanzados

<div align="center">

### timeout

Establece la cantidad de tiempo, en minutos, antes de que el Jefe Personalizado desaparezca.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `timeout` | Tiempo (en minutos) [Entero](#integer) | `0` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
timeout: 20
```
Establece que el jefe escape después de 20 minutos.

</div>

</details>

***

### isPersistent

Establece si el jefe puede sobrevivir a la descarga de un chunk. Solo recomendado para jefes de eventos.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Ejemplo:

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Establece armas contra las que los jefes pueden ser fuertes o débiles.

| Clave |        Valores         | Predeterminado |
|-|:---------------------:|-|
| `damageModifiers` | [Material](#material) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

En este ejemplo, los jefes solo recibirán el 80% del daño de las espadas de diamante (o un 20% menos), pero recibirán el 200% del daño de los tridentes (o 2 veces más).

</details>

***

### normalizedCombat

Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada en `~/plugins/EliteMobs/mobproperties`. Este es el valor predeterminado para los jefes regionales para garantizar una curva de dificultad fluida.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Ejemplo:
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

Establece el mensaje que se transmite a los jugadores cuando el jefe escapa a través de la mecánica de [timeout](#timeout). Requiere que [announcementPriority](#announcementPriority) esté configurado.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `escapeMessage` | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Establece el mensaje que se muestra en la barra de jefe. Esto se utiliza para rastrear tanto la salud del Jefe Personalizado como su ubicación en el servidor. Requiere que [annoucementPriority](#annoucementPriority) esté configurado.

| Clave |                                      Valores                                      | Predeterminado |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [Cadena](#string), [Códigos de color](#color_codes) y los marcadores de posición listados a continuación | ninguno |

Marcadores de posición:

| Valor | Descripción |
|-|:-:|
| `$distance` | Se reemplaza con la distancia a la que el jugador se encuentra del Jefe Personalizado. Esta es la opción preferible. |
| `$location` | Se reemplaza con las coordenadas de ubicación x y z del Jefe Personalizado |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Cool boss: At $location only $distance blocks away!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `Cool boss: At 414,55,347 only 10 blocks away!`

</details>

***

### uniqueLootList

Establece los [Objetos Personalizados]($language$/elitemobs/creating_items.md) que suelta el jefe.

| Clave |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `uniqueLootList` | [Lista](#string_list) | ninguno |

Las entradas de botín en el Botín Personalizado siguen el formato de Tabla de Botín. [¡Información sobre eso aquí!]($language$/elitemobs/loot_tables.md) Ten en cuenta que algunos archivos antiguos podrían estar utilizando tablas de botín desactualizadas que se ven diferentes al ejemplo.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

Establece si el jefe soltará botín de EliteMobs, excluyendo los objetos en [`uniqueLootList`](#uniqueLootList). Incluye monedas.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Recomendado establecer en false para mobs de refuerzo.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

Establece si el Jefe Personalizado soltará el botín vanilla usualmente asociado a su tipo de mob vanilla.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

Establece si el Jefe Personalizado soltará botín generado proceduralmente de EliteMobs. No incluye monedas de élite.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

Establece el rastro que el jefe deja al moverse.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) o [materiales de objeto](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

Establece el mensaje que el Mob Jefe muestra cuando golpea a un jugador. Esta es una lista, y el que se utiliza se elige aleatoriamente de la lista.

| Clave |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDamageMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "I hit you!"
- "Haha I hit you!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Establece el mensaje que el Mob Jefe muestra cuando es dañado por un jugador. Esta es una lista, y el que se utiliza se elige aleatoriamente de la lista.

| Clave |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDamagedMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "You hit me!"
- "I've been hit!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Establece la entidad que el jefe montará y cabalgará.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `onDamagedMessages` | [Nombre de archivo del jefe a montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | ninguno |

No intentes que el jefe se monte a sí mismo.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

Nota: Los jefes regionales compartirán su correa con la entidad que estén montando, lo que significa que ambos serán arrastrados de vuelta a la ubicación de aparición si exceden la distancia permitida por su correa.

***

### announcementPriority

Establece el nivel de prioridad para los anuncios. Prioridades más bajas significan que no se hacen anuncios, prioridades más altas pueden anunciar no solo en el chat sino también en Discord si está configurado.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `announcementPriority` | [Entero](#integer) | `1` |

Aquí hay una lista de lo que hacen las prioridades:

| Valor |                                                                            Descripción                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   El jefe estará completamente silencioso, sin mensajes de anuncio.                                                   |
| `1` |                                Este es el valor predeterminado. Los jefes pueden enviar mensajes de chat, mensajes al aparecer, al morir y al escapar.                                |
| `2` |                               Además de lo mencionado en `1`, el jefe se configurará para ser rastreable por los jugadores a través del menú `/em`.                                |
| `3` | Además de lo mencionado en `2`, los mensajes de difusión se reflejarán en Discord si está configurado. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí tienes un ejemplo de un jefe que es rastreable, es capaz de enviar mensajes de aparición/muerte/escape en el chat y en Discord:

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Tendrás que configurar spawnMessage, deathMessage/deathMessages, escapeMessage para los anuncios de chat y Discord, y locationMessage para la función de rastreo si deseas utilizar el nivel de Prioridad de Anuncio correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se agreden y entran en combate.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `followDistance` | [Doble](#double) | ninguno, usa los valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad de `followDistance` cuando están fuera de combate. Esto es para que no se agredan desde demasiado lejos, lo que puede causar problemas de combate molestos debido a las restricciones de la correa.

Nota 2: Cuanto mayor sea el `followDistance`, más intensivo será el jefe para la CPU del servidor. ¡Úsalo con cuidado y responsabilidad!

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia del jefe, este comenzará a perseguir/atacar al jugador.

</details>

***

### onDeathCommands

Establece la lista de comandos a ejecutar al morir el jefe personalizado.

| Clave |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDeathCommands` | [Lista](#string_list) | ninguno |

La lista admite los siguientes marcadores de posición:

| Valor | Descripción |
|-|:-:|
| `$level` | Marcador de posición para el nivel del jefe. |
| `$name` | Marcador de posición para el nombre del jefe. |
| `$chance=x$` | Hace que un comando tenga una probabilidad de ejecutarse. |
| `$players` | Hace que el comando se ejecute una vez por cada jugador en la lista de dañadores y se reemplaza cada vez con el nombre de usuario de un jugador diferente de esa lista. |
| `$locationX` | Coordenada X del jefe en el momento de la muerte. |
| `$locationY` | Coordenada Y del jefe en el momento de la muerte. |
| `$locationZ` | Coordenada Z del jefe en el momento de la muerte. |
| `$damager1name` | Nombre de usuario del principal dañador |
| `$damager2name` | Nombre de usuario del segundo principal dañador |
| `$damager3name` | Nombre de usuario del tercer principal dañador |

Echa un vistazo al ejemplo a continuación para comprender mejor cómo funcionan.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players has killed $name! That was level $level!"
- "$chance=0.5$ say What a kill!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si Jugador1, Jugador2 y Jugador3 dañaron al jefe antes de matarlo, esta será la salida del comando desde la consola:

<div align="left">

```
say Player1 has killed CustomBossName! That was level X!
say Player2 has killed CustomBossName! That was level X!
say Player3 has killed CustomBossName! That was level X!
```

</div>

Además, hay un 50% de probabilidad de que también se muestre lo siguiente:

<div align="left">

```
say What a kill!
```

</div>

</details>

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán al aparecer el jefe.

| Clave |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onSpawnCommands` | [Lista](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de dañador no se aplicarán ya que no habrá dañadores en este momento.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say Boss has spawned!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Establece la lista de comandos que se ejecutarán cuando el jefe entre en combate.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `onCombatEnterCommands` | [Lista](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de dañador no se aplicarán ya que no habrá dañadores en este momento.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Boss has entered combat!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Establece la lista de comandos a ejecutar cuando el jefe sale de combate.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `onCombatLeaveCommands` | [Lista](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!**

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Boss has left combat!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Establece el disfraz de LibsDisguises si ese plugin está habilitado. [Más información aquí.]($language$/elitemobs/libsdisguises.md)

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `disguise` | [Cadena](#string) | ninguno |
| `customDisguiseData` | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo de disfraz</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details>

<summary><b>Ejemplo de disfraz personalizado</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6HsKICAgICJTS0lOIiA6HsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6HsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Establece un disfraz personalizado de skindex. [Consulta esta página]($language$/elitemobs/libsdisguises.md) para aprender a formatear correctamente estos datos.

</details>

***

### customModel

Establece el modelo personalizado a usar, si tienes un modelo personalizado y los plugins FreeMinecraftModels o ModelEngine. [Más información sobre cómo crear y usar modelos personalizados aquí.]($language$/elitemobs/custom_models.md)

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `customModel` | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

Establece si el jefe puede moverse. Los jefes congelados aún pueden atacar.
</br>*Nota: esto podría no funcionar en algunas entidades.*

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

Establece la música que reproducirá un jefe, comenzando cuando aparece. Requiere que el archivo .ogg de la canción esté en el paquete de recursos.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `song` | [Cadena](#string) | ninguno |

**Nota: La configuración `song` requiere que `followDistance` esté establecido, ya que `followDistance` determina el rango en el que comienza a reproducirse la canción.**
Consulta el ejemplo sobre cómo establecer la `length` (milisegundos) de la `song`.

<details>

<summary><b>Ejemplo</b></summary>

Hay dos formas de configurar canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 milisegundos y luego la repetirá. Ten en cuenta que la ubicación de la canción está determinada por el paquete de recursos.

Aquí está la segunda forma de configurar canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 milisegundos y luego hará la transición a ice_queen.end_loop durante 28657 milisegundos y repetirá end_loop.

Esto permite que los jefes tengan una canción de "introducción" o "transición" y luego una pista principal que se repite.

</div>

</details>

***

### cullReinforcements

Establece si los refuerzos del jefe serán eliminados cuando el jefe muera.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

Establece la velocidad de movimiento del jefe.
</br>*Nota: cualquier valor superior a 0.36 podría ser demasiado rápido.*

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `movementSpeedAttribute` | [Doble](#double) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Fases del jefe

<div align="center">Okay, I understand. Please provide the target language you would like the text translated into. I will translate the text while preserving all the markdown and HTML formatting.