[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando jefes personalizados

# Antes de que empieces

## ¿Dónde van los archivos de los jefes?

Los archivos de los jefes van en la carpeta de configuración `~/plugins/EliteMobs/custombosses`.

Es posible crear subcarpetas, como `~/plugins/EliteMobs/custombosses/mybosses`. Esto es recomendable para mantener las cosas organizadas.

Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [webapp](https://magmaguy.com/webapp/webapp.html) para crear de forma rápida y sencilla jefes personalizados y mucho más.

## La configuración más pequeña posible

**El archivo de configuración más pequeño posible para un Jefe Personalizado es:**
```yml
```

Tenga en cuenta que se trata de un archivo vacío. Esto seguirá generando un jefe personalizado zombi con un nombre personalizado, ya que esos son los valores predeterminados. **¡Todo en esta página es opcional!**

## Ejemplo de jefe

<div align="center">

Veamos un ejemplo de cómo es un archivo de jefe.

<details> 
<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eJefe de prueba'
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
spawnMessage: ¡Se ha generado un jefe de prueba!
deathMessage: ¡Un jefe de prueba ha sido asesinado por $players!
escapeMessage: ¡Una entidad jefe de prueba ha escapado!
locationMessage: 'Entidad de prueba: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "¡Te he golpeado!"
onDamagedMessages:
- "¡Me han golpeado!"
```

</div>

</details>

</div>


## Configuración básica

<div align="center">

### isEnabled

Establece si el jefe está habilitado.

| Clave | Valores | Por defecto |
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

| Clave | Valores | Por defecto |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Elegir de aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> El valor también debe estar presente en la carpeta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `name` | [Cadena](#string), acepta [códigos de color](#color_codes) y los marcadores de posición que se enumeran a continuación | "Nombre predeterminado" |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c¡Jefe guay!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si deseas incluir el nivel del jefe en su campo de nombre, simplemente utiliza uno de los siguientes marcadores de posición.

| Marcador de posición | Descripción | Ejemplo |Salida (para un jefe de nivel 10) |
|-|:-:|:-:|-|
| `$level` | Reemplaza con el nivel | "$level Jefe guay" | `10 Jefe guay` |
| `$normalLevel` | Reemplaza con el nivel, hecho para mobs normales | `"$normalLevel Jefe guay"` | `[10] Jefe guay` |
| `$minibossLevel` | Reemplaza con el nivel, hecho para mini-jefes | `"$minibossLevel Jefe guay"` | `〖10〗 Jefe guay` |
| `$bossLevel` | Reemplaza con el nivel, hecho para jefes | `"$bossLevel Jefe guay"` | `『10』 Jefe guay` |
| `$reinforcementLevel` | Reemplaza con el nivel, hecho para refuerzos | `"$reinforcementLevel Jefe guay"` | `〔10〕 Jefe guay` |
| `$eventBossLevel` | Reemplaza con el nivel, hecho para jefes de eventos | `"$eventBossLevel Jefe guay"` | `「10」 Jefe guay` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c¡Jefe guay!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Establece el nivel del jefe.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `entityType` | Números [enteros](#integer) positivos o `dynamic` | `dynamic` |

`dynamic` se utiliza para eventos y se ajusta al nivel de los jugadores cercanos en el momento de la aparición del jefe.
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

### healthMultiplier

Establece la salud del jefe.

| Clave | Valores | Por defecto |
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

| Clave | Valores | Por defecto |
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

Establece si el jefe utiliza la variante bebé del mob. Sólo se puede aplicar a los mobs con variantes de bebé.
Si quieres [disfrazar]($language$/elitemobs/libsdisguises.md) al jefe pero quieres que siga siendo un bebé mientras está disfrazado (asegúrate de que la entidad de disfraz también admite la variante de bebé) puedes usar esta configuración:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clave | Valores | Por defecto |
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

Establece la armadura del jefe. No todos los modelos de minecraft son capaces de mostrar la armadura. La armadura del jefe es puramente cosmética y no afecta a la jugabilidad.

| Clave | Valores | Por defecto |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` | [Material](#material), [UUID](https://minecraftuuid.com/) | ninguno |
| `chestplate` | [Material](#material) | ninguno |
| `leggings` | [Material](#material) | ninguno |
| `boots` | [Material](#material) | ninguno |
| `mainHand` | [Material](#material) | ninguno |
| `offHand` | [Material](#material) | ninguno |

**Nota:** Este campo también te permite establecer modelos personalizados para los objetos. Para establecer el ID del modelo personalizado, añade el ID después del tipo de material siguiendo este formato: `ITEM_MATERIAL:ID`. Ejemplo: `DIAMOND_SWORD:1` hace que el jefe lleve una espada de diamante con el modelo personalizado #1 en tu paquete de texturas.

**Nota 2:** Este campo también te permite establecer colores de cuero personalizados con el formato `ITEM_MATERIAL:CODE` donde el código es la representación hexadecimal del color. Ejemplo: `LEATHER_LEGGINGS:ffa500` crearía leggings naranjas. Puedes usar códigos hexadecimales, sólo tienes que eliminar el `#` del código hexadecimal. Puedes obtener códigos hexadecimales [aquí](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** El campo del casco también te permite establecer los cascos de la mafia para que sean cabezas de jugador. Simplemente obtenga el UUID de la cabeza del jugador que desea utilizar y escríbalo en el campo del casco. *El jugador necesita estar en línea para que esto funcione o la cabeza será por defecto una cabeza genérica de MineCraft.* Puedes obtener los UUID de los jugadores [aquí](https://minecraftuuid.com/).

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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `powers` | Consulte la siguiente lista | ninguno |

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

*Nota: Puedes consultar [esta página]($language$/elitemobs/premade_powers.md) si quieres ver una lista de poderes preestablecidos que puedes utilizar.*

***

### Configuración intermedia - Generar refuerzos

Los refuerzos también entran en la categoría de poderes, utilizando los siguientes ajustes:

<details> 

<summary><b>Ajustes de refuerzo</b></summary>

| Clave | Descripción | Valores | Por defecto |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Lo que desencadena la aparición del refuerzo. Obligatorio. | Consulte la siguiente lista | ninguno |
| `filename` | Nombre del archivo del jefe para que aparezca como refuerzo. Obligatorio. | [Cadena](#string) | ninguno |
| `chance` | Posibilidad de que aparezca el refuerzo. Opcional. | [Doble](#double) | `1.0` |
| `amount` | Establece la cantidad de refuerzos que aparecerán. Opcional. | [Entero](#integer) | `1` |
| `inheritAggro` | Hace que el refuerzo herede el aggro del jefe. Opcional. | `true` / `false` | `false` |
| `spawnNearby` | Hace que los refuerzos aparezcan en un radio de 30 bloques del jefe. Opcional. | `true` / `false` | `false` |
| `inheritLevel` | Hace que el refuerzo herede el nivel del jefe. Opcional | `true` / `false` | `false` |
| `customSpawn` | Hace que el refuerzo aparezca utilizando el [sistema de aparición personalizado]($language$/elitemobs/creating_spawns.md). Sólo se utiliza para `summonType: GLOBAL`
| `location` | Ubicación del spawn. Opcional. | `world_name,x,y,z` o `x,y,z` para una ubicación relativa al jefe. El desplazamiento es relativo a la ubicación de aparición de los jefes regionales. También puedes utilizar `same_as_boss` para que los refuerzos aparezcan en el mismo mundo que el jefe. | ninguno |
| `lightningRod` | Ajuste especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Hace que los cristales finales generen rayos a su alrededor. Opcional. | `true` / `false` | ninguno |

</details>

Los tipos de invocación establecen las condiciones para que aparezcan los refuerzos. La siguiente es una lista de los tipos de invocación válidos:

<details> 

<summary><b>Tipos de invocación</b></summary>

| Valor | Descripción |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` | Sólo genera los refuerzos una vez, la primera vez que el jefe recibe daño. |
| `ON_HIT`  | Genera los refuerzos al ser golpeado. |
| `ON_COMBAT_ENTER` | Genera los refuerzos cuando el jefe entra en combate. |
| `GLOBAL` | Genera un refuerzo para cada jugador en línea. Requiere que la clave `customSpawn` tenga un [spawn personalizado]($language$/elitemobs/creating_spawns.md) válido establecido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Coloca cristales finales de refuerzo al entrar en combate, sólo para usar con combates de dragones personalizados. |

</details>

Tenga en cuenta que también es posible generar refuerzos a través de [Elite Scripts]($language$/elitemobs/creating_powers.md), por lo que hay formas más personalizables de generar refuerzos.

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

Es posible crear tus propios poderes, ya sea en el propio archivo del jefe o como un nuevo archivo de configuración en la carpeta de poderes. Puedes aprender más sobre esto [aquí]($language$/elitemobs/creating_powers.md).

### Limitar los poderes en función de la dificultad de la mazmorra instanciada

Las [mazmorras instanciadas]($language$/elitemobs/dungeons.md&section=instanced-dungeons) pueden tener ajustes de dificultad, y es posible hacer que un poder específico sólo esté habilitado para dificultades específicas.

<details> 

<summary><b>Opciones de limitación de potencia</b></summary>

<div align="left">

| Clave | Descripción | Valores | Por defecto |
|-|:-:|:-:|-|
| `filename` | Nombre del archivo del poder. | [Cadena](#string) | ninguno |
| `difficultyID` | Nombre de la dificultad, que coincide con el nombre de la dificultad en el paquete de la mazmorra. | [Cadena](#string) | ninguno |

</div>

</details>

Esto sólo se aplicará a las mazmorras instanciadas.

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

Establece el mensaje que se enviará cuando aparezca el jefe. Requiere configurar la [prioridad del anuncio](#announcementPriority).

| Clave | Valores | Por defecto |
|-|:-:|-|
| `spawnMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: ¡Me levanto una vez más!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Establece la lista de mensajes que se enviarán cuando el jefe muera. Requiere configurar la [prioridad del anuncio](#announcementPriority).

| Clave | Valores | Por defecto |
|-|:-:|-|
| `deathMessages` | [Cadenas](#string), [códigos de color](#color_codes) y los marcadores de posición que se indican a continuación | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4¡El Jefe de Prueba ha sido asesinado!'
- '&c&l    1er Dañador: $damager1name &ccon $damager1damage de daño!'
- '&6&l    2º Dañador: $damager2name &6con $damager2damage de daño!'
- '&e&l    3er Dañador: $damager3name &econ $damager3damage de daño!'
- '&4Asesinos: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Los mensajes de muerte utilizan los siguientes marcadores de posición:

<details> 

<summary><b>Marcadores de posición</b></summary>

| Valor | Descripción |
|-|:-:|
| `$damager1name` | El nombre del mayor dañador |
| `$damager2name` | El nombre del segundo mayor dañador |
| `$damager3name` | El nombre del tercer mayor dañador |
| `$damager1damage` | La cantidad de daño del mayor dañador |
| `$damager2damage` | La cantidad de daño del segundo mayor dañador |
| `$damager3damage` | La cantidad de daño del tercer mayor dañador |
| `$players` | Muestra una lista de todos los dañadores |

</details>

### onKillMessage

Establece el mensaje que se enviará cuando el jefe mate a un jugador. Requiere configurar la [prioridad del anuncio](#announcementPriority).

| Clave | Valores | Por defecto |
|-|:-:|-|
| `onKillMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: ¡Yo gano, tú pierdes!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Establece el tamaño del jefe de limo, pero sólo funciona para Slimes y Magmacubes.

</div>

| Clave | Valores | Por defecto |
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

Establece si el jefe aparecerá como neutral o no. Esto sólo se aplica a los tipos de entidad que pueden ser neutrales, como los lobos o los golems de hierro.

</div>

| Clave | Valores | Por defecto |
|-|:-:|-|
| `neutral` | [Booleano](#boolean) | `false` |

<details>

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

| Clave | Valores | Por defecto |
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

Establece si el jefe puede sobrevivir a una descarga de chunk. Sólo se recomienda para los jefes de eventos.

| Clave | Valores | Por defecto |
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

Establece las armas contra las que los jefes pueden ser fuertes o débiles.

| Clave | Valores | Por defecto |
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

En este ejemplo, los jefes sólo recibirán un 80% de daño de las espadas de diamante (o un 20% menos), pero recibirán un 200% de daño de los tridentes (o 2 veces más).

</details>

***

### normalizedCombat



Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada en `~/plugins/EliteMobs/mobproperties`. Esta es la configuración predeterminada para los jefes regionales para garantizar una curva de dificultad fluida.

| Clave | Valores | Por defecto |
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

Establece el mensaje que se transmite a los jugadores cuando el jefe escapa a través de la mecánica de [timeout](#timeout). Requiere que se configure [announcementPriority](#announcementPriority).

| Clave | Valores | Por defecto |
|-|:-:|-|
| `escapeMessage` | [String](#string) | ninguno |


<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "¡Sayonara!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Establece el mensaje que se muestra en la barra de jefe. Esto se utiliza para rastrear tanto la salud del Jefe Personalizado como su ubicación en el servidor. Requiere que se configure [annoucementPriority](#annoucementPriority).

| Clave | Valores | Por defecto |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [Color codes](#color_codes) y los marcadores de posición que se enumeran a continuación | ninguno |

Marcadores de posición:

| Valor | Descripción |
|-|:-:|
| `$distance` | Se sustituye por la distancia a la que se encuentra el jugador del Jefe Personalizado. Esta es la opción preferible. |
| `$location` | Se sustituye por las coordenadas de ubicación x y z del Jefe Personalizado |


<details>


<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4¡Jefe guay: En $location a sólo $distance bloques de distancia!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `¡Jefe guay: En 414,55,347 a sólo 10 bloques de distancia!`

</details>

***

### uniqueLootList

Establece los [Objetos Personalizados]($language$/elitemobs/creating_items.md) que deja caer el jefe.

| Clave | Valores | Por defecto |
|-|:--------------------:|-|
| `uniqueLootList` | [List](#string_list) | ninguno |

Las entradas de botín en el Botín Personalizado siguen el formato de la Tabla de Botín. [¡Información sobre esto aquí!]($language$/elitemobs/loot_tables.md) Tenga en cuenta que algunos archivos antiguos pueden estar utilizando tablas de botín obsoletas que se ven diferentes al ejemplo.

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

Establece si el jefe dejará caer botín de EliteMobs, excluyendo los objetos en [`uniqueLootList`](#uniqueLootList). Incluye monedas.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Se recomienda establecer en falso para los mobs de refuerzo.

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

Establece si el Jefe Personalizado dejará caer el botín de vanilla normalmente asociado a su tipo de mob de vanilla.

| Clave | Valores | Por defecto |
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

Establece si el Jefe Personalizado dejará caer botín generado por procedimientos de EliteMobs. No incluye las monedas de élite.

| Clave | Valores | Por defecto |
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

Establece el rastro que el jefe deja tras de sí al moverse.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) o [materiales de objetos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ninguno |

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

Establece el mensaje que muestra el Mob Jefe cuando golpea a un jugador. Se trata de una lista, y el que se utiliza se elige al azar de la misma.

| Clave | Valores | Por defecto |
|-|:--------------------:|-|
| `onDamageMessages` | [List](#string_list) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "¡Te golpeé!"
- "¡Jaja te golpeé!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Establece el mensaje que muestra el Mob Jefe cuando es dañado por un jugador. Se trata de una lista, y el que se utiliza se elige al azar de la misma.

| Clave | Valores | Por defecto |
|-|:--------------------:|-|
| `onDamagedMessages` | [List](#string_list) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "¡Me has golpeado!"
- "¡Me han golpeado!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Establece la entidad que el jefe montará y cabalgará.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `onDamagedMessages` | [Nombre de archivo del jefe a montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | ninguno |

No intentes hacer que el jefe se monte a sí mismo.

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

Establece el nivel de prioridad de los anuncios. Las prioridades más bajas significan que no se hacen anuncios, las prioridades más altas pueden anunciar no sólo en el chat sino también en la discordia si está configurado.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `announcementPriority` | [Integer](#integer) | `1` |

Aquí hay una lista de lo que hacen las prioridades:

| Valor | Descripción |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` | El jefe estará completamente en silencio, sin mensajes de anuncio. |
| `1` | Esta es la configuración predeterminada. Los jefes pueden enviar mensajes de chat, al aparecer, al morir y al escapar. |
| `2` | Además de lo anterior en `1`, el jefe se configurará para que los jugadores puedan seguirlo a través del menú `/em`. |
| `3` | Además de lo anterior en `2`, los mensajes de difusión se reflejarán en Discord si está configurado. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí tienes un ejemplo de un jefe que se puede rastrear, que puede enviar mensajes de aparición/muerte/escape en el chat y en Discord:

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Tendrás que configurar spawnMessage, deathMessage/deathMessages, escapeMessage para los anuncios de chat y discordia y locationMessage para la función de seguimiento si deseas utilizar el nivel de prioridad de anuncio correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se agregan y entran en combate.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `followDistance` | [Double](#double) | ninguno, utiliza los valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad de la `followDistance` cuando están fuera de combate. Esto es para que no se agreguen desde muy lejos, lo que puede causar molestos problemas de combate debido a las restricciones de la correa.

Nota 2: Cuanto mayor sea la `followDistance`, más intensivo será el jefe para la CPU del servidor. ¡Utilícelo con cuidado y responsabilidad!

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia del jefe, éste comenzará a perseguirlo/atacarlo.

</details>

***

### onDeathCommands

Establece la lista de comandos que se ejecutarán al morir el jefe personalizado.

| Clave | Valores | Por defecto |
|-|:--------------------:|-|
| `onDeathCommands` | [List](#string_list) | ninguno |

La lista admite los siguientes marcadores de posición:

| Valor | Descripción |
|-|:-:|
| `$level` | Marcador de posición para el nivel del jefe. |
| `$name` | Marcador de posición para el nombre del jefe. |
| `$chance=x$` | Hace que un comando tenga la posibilidad de ejecutarse. |
| `$players` | Hace que el comando se ejecute una vez por cada jugador en la lista de dañadores y lo reemplaza cada vez por el nombre de usuario de un jugador diferente en esa lista. |
| `$locationX` | Coordenada X del jefe en el momento de la muerte. |
| `$locationY` | Coordenada Y del jefe en el momento de la muerte. |
| `$locationZ` | Coordenada Z del jefe en el momento de la muerte. |
| `$damager1name` | Nombre de usuario del mayor dañador |
| `$damager2name` | Nombre de usuario del segundo mayor dañador |
| `$damager3name` | Nombre de usuario del tercer mayor dañador |

Echa un vistazo al siguiente ejemplo para comprender mejor cómo funcionan.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players ha matado a $name! ¡Ese era el nivel $level!"
- "$chance=0.5$ say ¡Qué muerte!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si Jugador1, Jugador2 y Jugador3 dañaron al jefe antes de matarlo, esto es lo que la salida del comando será desde la consola:

<div align="left">

```
say Jugador1 ha matado a NombreDelJefePersonalizado! ¡Ese era el nivel X!
say Jugador2 ha matado a NombreDelJefePersonalizado! ¡Ese era el nivel X!
say Jugador3 ha matado a NombreDelJefePersonalizado! ¡Ese era el nivel X!
```

</div>

Además, hay un 50% de posibilidades de que también se genere lo siguiente:

<div align="left">

```
say ¡Qué muerte!
```

</div>

</details> 

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán al aparecer el jefe.

| Clave | Valores | Por defecto |
|-|:--------------------:|-|
| `onSpawnCommands` | [List](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán, ya que no habrá ningún dañador en este momento.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say ¡El jefe ha aparecido!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Establece la lista de comandos que se ejecutarán cuando el jefe entre en combate.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `onCombatEnterCommands` | [List](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán, ya que no habrá ningún dañador en este momento.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say ¡El jefe ha entrado en combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Establece la lista de comandos que se ejecutarán cuando el jefe abandone el combate.

| Clave | Valores | Por defecto |
|-|:-:|-|
| `onCombatLeaveCommands` | [List](#string_list) | ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say ¡El jefe ha abandonado el combate!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Establece el disfraz de LibsDisguises si ese plugin está habilitado. [Más información aquí.]($language$/elitemobs/libsdisguises.md)

| Clave | Valores | Por defecto |
|-|:-:|-|
| `disguise` | [String](#string) | ninguno |
| `customDisguiseData` | [String](#string) | ninguno |

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
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Establece un disfraz personalizado de skindex. [Consulta esta página]($language$/elitemobs/libsdisguises.md) para aprender a formatear correctamente estos datos.

</details>

***

### customModel

Establece el modelo personalizado que se utilizará, si tiene un modelo personalizado y ModelEngine. [Más información aquí.]($language$/elitemobs/custom_models.md)

| Clave | Valores | Por defecto |
|-|:-:|-|
| `customModel` | [String](#string) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customModel: tu_modelo
```

</div>

</details>

***

### frozen

Establece si el jefe puede moverse. Los jefes congelados aún pueden atacar.
</br>*Nota: esto podría no funcionar en algunas entidades.*

| Clave | Valores | Por defecto |
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

| Clave | Valores | Por defecto |
|-|:-:|-|
| `song` | [String](#string) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

Hay dos maneras de configurar las canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 ticks y luego la repetirá. Ten en cuenta que la ubicación de la canción viene determinada por el paquete de recursos.

Aquí está la segunda forma de configurar las canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 ticks y luego hará la transición a ice_queen.end_loop durante 28657 ticks y repetirá el end_loop.

Esto permite que los jefes tengan una canción de "introducción" o "transición" y luego una pista principal que se repite.

</div>

</details>

***

### cullReinforcements

Establece si los refuerzos del jefe se eliminarán cuando éste muera.

| Clave | Valores | Por defecto |
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
</br>*Nota: cualquier valor superior a 0,36 puede ser demasiado rápido.*

| Clave | Valores | Por defecto |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Fases de jefe

<div align="center">

Los jefes pueden tener fases que cambian cuando el jefe alcanza un cierto porcentaje de salud. Cuando esto sucede, el jefe comienza a usar un archivo de configuración diferente, lo que significa que todo sobre el jefe puede cambiar, incluyendo cosas como el tipo de entidad.
</br>Para obtener más información sobre las fases del jefe, haz clic [aquí]($language$/elitemobs/creating_boss_phases.md).


| Clave | Descripción | Valores | Por defecto |
|-|:-:|-|-|
| `phases` | Establece las fases que tendrá el jefe. Obligatorio | [List](#string_list) | ninguno |
| `phaseSpawnLocation` | Establece dónde aparece el jefe de fase. Opcional | [String](#string) | ninguno |


<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

Para este ejemplo, vamos a mostrar tres archivos de configuración diferentes.

Primer archivo de configuración del jefe: phase_1_boss.yml

```yml
name: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo archivo de configuración del jefe: phase_2_boss.yml

```yml
name: "Fase 2"
entityType: SKELETON
```

Tercer archivo de configuración del jefe: phase_3_boss.yml

```yml
name: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este jefe cambiaría al archivo de configuración `phase_2_boss.yml` al 60% de salud, y al archivo de configuración `phase_3_boss.yml` al 30% de salud en el mismo mundo que la fase 2 y en las coordenadas x=10, y=64 y z=100. El tipo de entidad y el nombre del jefe también cambiarían.

El formato de una entrada es `filename:healthPercentage`.

phaseSpawnLocation es opcional, si no se establece, el jefe cambiará de fase donde esté parado.

</details>

Las siguientes cosas son importantes a la hora de diseñar un jefe de fase:

<div align="left">

- El archivo de configuración de la primera fase establece todas las fases del jefe.
- La amenaza/daño contado se mantiene entre fases para los jugadores.
- El cambio de fase se basa en el porcentaje de salud perdida, que se conserva al cambiar a una fase diferente. Esto significa que aumentar o disminuir el healthMultiplier entre fases no curará ni dañará al jefe, seguirá cambiando con el mismo porcentaje, pero tendrá más o menos salud para esa fase.
- Los jefes de fase vuelven a la fase 1 si salen del combate.
- Los jefes de fase que también son jefes regionales comparten el mismo radio de correa y el mismo tiempo de espera en todas las fases, y reaparecerán como el jefe de la fase 1 cuando se acabe el tiempo.
- El archivo de configuración de la última fase establece el botín del jefe.
- Las fases no se pueden saltar: el daño por exceso de muerte hará que el jefe cambie de fase en el porcentaje definido.
- Los jefes de fase que tienen monturas dejan de estar montados cuando cambian de fase.

</div>

</div>

</div>

***

## Jefes regionales

<div align="center">



Los jefes regionales son un tipo específico de jefes personalizados que aparecen en una ubicación específica configurada y pueden reaparecer en esa ubicación después de un retraso. Además, pueden tener correas que aseguren que permanezcan en una zona específica, entre otras características.

Estos se utilizan para todo el contenido de las mazmorras. Para obtener más información sobre los jefes regionales, haz clic [aquí]($language$/elitemobs/creating_world_bosses.md).

| Clave | Descripción | Valores | Por defecto |
|-|:-:|:-:|-|
| `isRegionalBoss` | Establece si el jefe es regional. Debe ser verdadero si quieres un jefe regional.  | `true` /  `false` | `false` |
| `spawnLocation` | Establece las ubicaciones de aparición del jefe.  | ¡Añádelas a través del comando `/em addSpawnLocation [nombredearchivo.yml]`! | ninguno |
| `spawnCooldown` | Establece el tiempo de reutilización de reaparición del jefe, en **minutos**. | [Integer](#integer) | `0` |
| `leashRadius` | Establece la distancia que el jefe puede alejarse de su punto de aparición antes de ser arrastrado de vuelta. | [Double](#double) | ninguno |
| `onSpawnBlockStates` | Establece los bloques que el jefe modificará cuando aparezca. | Comprueba los comandos a continuación | ninguno |
| `onRemoveBlockStates` | Establece los bloques que el jefe modificará cuando desaparezca. | Comprueba los comandos a continuación | ninguno |

Como se ha indicado, los jefes regionales pueden tener `onSpawnBlockStates` y `onRemoveBlockStates`.

Esta es una característica muy útil para modificar las arenas de combate durante el combate, especialmente cuando se combina con los cambios de fase, ya que permite abrir y cerrar las arenas de combate a través del cambio de estado de los bloques.

El formato de estos es demasiado complejo para escribirlo manualmente, por lo que existen algunos comandos que te ayudarán a configurarlos:

| Comando | Descripción |
|-|:-:|
| /em registerblocks [archivo_jefe_regional.yml] [al_aparecer/al_eliminar] | Inicia el registro manual de selecciones de bloques para los estados de bloque al aparecer o al eliminar. |
| /em registerblocksedit [archivo_jefe_regional.yml] [al_aparecer/al_eliminar] | Edita los estados de bloque al aparecer o al eliminar. |
| /em registerblocksarea [archivo_jefe_regional.yml] [al_aparecer/al_eliminar] | Permite a los administradores seleccionar grandes áreas de bloques para guardarlos como estados. |
| /em registerblocksareaedit [archivo_jefe_regional.yml] [al_aparecer/al_eliminar] | Permite a los administradores editar grandes áreas de bloques para guardarlos como estados. |

<details> 

<summary><b>Ejemplo de uso:</b></summary>

<div align="left">

Digamos que quieres hacer una pelea en la que un jefe aparece en una arena que tiene una puerta abierta, y quieres hacer que la puerta se cierre cuando la pelea comienza y se vuelva a abrir cuando termina.

Para ello, necesitarás dos fases de jefe y registrar tres conjuntos diferentes de estados de bloque. Para este ejemplo, voy a nombrar estas fases phase_1_boss.yml y phase_2_boss.yml respectivamente.

1) Utiliza `/em registerblocks phase_1_boss.yml on_spawn` o `/em registerblocksedit phase_1_boss.yml on_spawn` para registrar los bloques de la puerta en su estado abierto.

Esto significa registrar los bloques de aire. Se recomienda la selección de área aquí.

Esto es necesario para asegurarse de que la puerta está abierta cuando el jefe aparece, de modo que los jugadores tengan garantizado un camino de entrada.

2) Utiliza `/em registerblocks phase_2_boss.yml on_spawn` o `/em registerblocksedit phase_2_boss.yml on_spawn` para registrar los bloques de la puerta en su estado cerrado.

Esto significa registrar los bloques sólidos de la puerta que impedirían la salida del jugador.

Esto es necesario para cambiar la puerta a sólida cuando el jefe entra en la fase 2, impidiendo que los jugadores salgan.

3) Utiliza `/em registerblocks phase_2_boss.yml on_remove` o `/em registerblocksedit phase_2_boss.yml on_remove` para registrar los bloques de la puerta en su estado abierto.

Esto significa registrar de nuevo los mismos bloques del primer paso (los bloques de aire).

Esto es necesario para abrir la puerta cuando el jefe muere, permitiendo a los jugadores salir de la arena.

</div>

</details>

</div>

***

### alert

<div align="center">

Establece si el jefe está alerta. Por defecto, los jefes regionales son más lentos y tienen una distancia de aggro más corta cuando están fuera de combate. Este ajuste evita que los jefes regionales sean más lentos y tengan una distancia de aggro más corta mientras están fuera de combate, por lo que siempre se comportarán de la misma manera dentro o fuera de combate.

</div>

| Clave | Valores | Por defecto |
|-|:-:|-|
| `alert` | [Boolean](#boolean) | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

Establece si el Jefe Regional se eliminará permanentemente después de ser asesinado. Esto es lo que BetterStructures utiliza para los Santuarios, donde el Jefe Regional sólo está diseñado para ser combatido una vez y nunca más en esa ubicación. 

</div>

| Clave | Valores | Por defecto |
|-|:-:|-|
| `removeAfterDeath` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Jefes instanciados

<div align="center">

Los jefes instanciados son un subtipo de jefes regionales que se utilizan en las mazmorras instanciadas.

| Clave | Descripción | Valores | Por defecto |
|-|:-:|-|-|
| `instanced` | Hace que el jefe personalizado sea instanciado. Obligatorio. | `true` / `false` | `false` |


Establecer los jefes como instanciados es obligatorio para que las mazmorras instanciadas funcionen correctamente. También recomendamos eliminar las correas para cualquier jefe instanciado.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
