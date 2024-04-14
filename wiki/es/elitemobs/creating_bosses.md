[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creando jefes personalizados

# Antes de comenzar

## ¿Dónde deben colocarse los ficheros de jefes?

Los ficheros de los jefes deben colocarse en el directorio de configuración `~/plugins/EliteMobs/custombosses`.

Es posible crear subdirectorios, como `~/plugins/EliteMobs/custombosses/misjefes`. Esto es recomendable para mantener las cosas organizadas.

Un fichero define un jefe, aunque es posible spawnear el mismo jefe varias veces e incluso establecer varias ubicaciones de spawn para el mismo fichero de jefe.

Es posible utilizar la [webapp](https://magmaguy.com/webapp/webapp.html) para crear de forma rápida y sencilla jefes personalizados y más.

## Configuración mínima possible

**El fichero de configuración más pequeño posible para un jefe personalizado es:**
```yml
```

Ten en cuenta que este es sólo un fichero vacío. Esto todavía spawneará un jefe zombie personalizado con un nombre personalizado, ya que esos son los valores predeterminados. **¡Todo en esta página es opcional!**

## Jefe de ejemplo

<div align="center">

Echemos un vistazo a un ejemplo de cómo se ve un fichero de jefe.

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
spawnMessage: ¡Un jefe de prueba ha sido spawnado!
deathMessage: ¡Un jefe de prueba ha sido asesinado por $players!
escapeMessage: ¡Una entidad de jefe de prueba ha escapado!
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

Establece si el jefe está activado.

| Llave | Valores | Predeterminado |
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

| Llave |                                                                                   Valores                                                                                    | Predeterminado |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Seleccionar de aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> El valor también debe estar presente en el directorio `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

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

| Llave | Valores | Predeterminado |
|-|:-:|-|
| `name` | [Cadena de texto](#cadena), acepta [códigos de color](#color_codes)  y los placeholders listados por debajo | "Nombre predeterminado" |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c ¡Jefe genial!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si deseas incluir el nivel del jefe en su campo de nombre, simplemente usa uno de los placeholders siguientes.

| Placeholder | Descripción | Ejemplo | Salida (para un jefe de nivel 10) |
|-|:-:|:-:|-|
| `$level` | Se reemplaza por el nivel | "$level Jefe genial" | `10 Jefe genial` |
| `$normalLevel` | Se reemplaza por el nivel, hecho para mobs normales | `"$normalLevel Jefe genial"` | `[10] Jefe genial` |
| `$minibossLevel` | Se reemplaza por el nivel, hecho para minibosses | `"$minibossLevel Jefe genial"` | `〖10〗 Jefe genial` |
| `$bossLevel` | Se reemplaza por el nivel, hecho para jefes | `"$bossLevel Jefe genial"` | `『10』 Jefe genial` |
| `$reinforcementLevel` | Se reemplaza por el nivel, hecho para refuerzos | `"$reinforcementLevel Jefe genial"` | `〔10〕 Jefe genial` |
| `$eventBossLevel` | Se reemplaza por el nivel, hecho para jefes de eventos | `"$eventBossLevel Jefe genial"` | `「10」 Jefe genial` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c ¡Jefe genial!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Establece el nivel del jefe.

| Llave | Valores | Predeterminado |
|-|:-:|-|
| `level` | Números [enteros](#integer) positivos o `dynamic` | `dynamic` |

`dynamic` se usa para eventos y se ajusta al nivel de los jugadores cercanos en el momento del spawn del jefe.
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

| Llave | Valores | Predeterminado |
|-|:-:|-|
| `healthMultiplier` | [Multiplicador](#multiplicador) | `1.0` |

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

| Llave | Valores | Predeterminado |
|-|:-:|-|
| `damageMultiplier` | [Multiplicador](#multiplicador) | `1.0` |

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

Establece si el jefe utiliza la variante bebé del mob. Sólo puede ser aplicado a mobs con variantes de bebé.
Si deseas [disfrazar]($language$/elitemobs/libsdisguises.md) al jefe pero también quieres que permanezca siendo un bebé mientras está disfrazado (asegúrate de que la entidad del disfraz también admite la variante bebé) puedes usar esta configuración:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Llave | Valores | Predeterminado |
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

Establece la armadura del jefe. No todos los modelos de Minecraft son capaces de mostrar armadura. La armadura del jefe es puramente cosmética y no afecta al juego.

| Llave |                                    Valores                                     | Predeterminado |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | ninguno |
| `chestplate` | [Material](#material) | ninguno |
| `leggings` | [Material](#material) | ninguno |
| `boots` | [Material](#material) | ninguno |
| `mainHand` | [Material](#material) | ninguno |
| `offHand` | [Material](#material) | ninguno |

**Nota:** Este campo también permite establecer modelos personalizados para los items. Para establecer el ID del modelo personalizado, agrega el ID después del tipo de material siguiendo este formato: `TIPO_DE_MATERIAL:ID`. Ejemplo: `DIAMOND_SWORD:1` establece que el jefe lleve una espada de diamante con el modelo personalizado #1 en tu pack de texturas.

**Nota 2:** Este campo también permite establecer colores de cuero personalizados con el formato `TIPO_DE_MATERIAL:CODE` donde el code es la representación hexadecimal del color. Ejemplo: `LEATHER_LEGGINGS:ffa500` creará leggings naranjas. Puedes utilizar códigos hex, simplemente elimina el `#` del código hex. Puedes obtener códigos hex desde [aquí](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** El campo del casco también permite establecer cascos de mob para ser cabezas de jugadores. Simplemente obtén el UUID de la cabeza del jugador que te gustaría usar y escríbelo en el campo del casco. *El jugador necesita estar online para que esto funcione o la cabeza se quedará en una cabeza genérica de MineCraft.* Puedes obtener los UUID de los jugadores desde [aquí](https://minecraftuuid.com/) .

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

Establece los poderes del jefe.

| Llave | Valores | Predeterminado |
|-|:-:|-|
| `powers` | Consulta la lista a continuación | ninguno |

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

*Nota: Puedes consultar [esta página]($language$/elitemobs/poderes_premezclados.md) si quieres ver una lista de poderes premezclados que puedes usar.*

***

### Configuración intermedia - Spawnear refuerzos

Los refuerzos también entran en la categoría de poderes, utilizando las siguientes configuraciones:

<details> 

<summary><b>Configuración de refuerzos</b></summary>

| Llave | Descripción |                                                                                                             Valores                                                                                                             | Predeterminado |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Qué dispara el spawn de refuerzos. Obligatorio. |                                                                                                    Consulta la lista a continuación                                                                                                     | ninguno |
| `filename` | Nombre del fichero del jefe que debe spawnear como refuerzo. Obligatorio. |                                                                                                       [Cadena de texto](#string)                                                                                                        | ninguno |
| `chance` | Probabilidad de que aparezcan los refuerzos. Opcional. |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | Establece la cantidad de refuerzos para spawnear. Opcional. |                                                                                                      [Entero](#integer)                                                                                                       | `1` |
| `inheritAggro` | Hace que el refuerzo herede el aggro del jefe. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Hace que los refuerzos spawneen en un radio de 30 bloques desde el jefe. Opcional. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Hace que el refuerzo herede el nivel del jefe. Opcional |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Hace que el refuerzo spawnee utilizando el [sistema de spawn personalizado]($language$/elitemobs/crear_spawn.md). Solo se utiliza para `summonType: GLOBAL`
| `location` | Localización de spawn. Opcional. | `world_name,x,y,z` o `x,y,z` para una ubicación relativa al jefe. El desplazamiento es relativo a la ubicación de spawn para los jefes regionales. También puedes usar `same_as_boss` para que los refuerzos spawneen en el mismo mundo que el jefe. | ninguno |
| `lightningRod` | Configuración especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Hace que los cristales de end spawnen rayos alrededor de ellos. Opcional. |                                                                                                        `true` / `false`                                                                                                        | ninguno |

</details>

Los tipos de invocación establecen las condiciones para el spawn de refuerzos. La siguiente es una lista de los tipos de invocación válidos:

<details> 

<summary><b>Tipos de invocación</b></summary>

| Valor |                                                                         Descripción                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Solo genera los refuerzos una vez, la primera vez que el jefe recibe daño.                                           |
| `ON_HIT`  |                                                              Genera los refuerzos al recibir un golpe.                                                              |
| `ON_COMBAT_ENTER` |                                                   Genera los refuerzos cuando el jefe entra en combate.                                                    |
| `GLOBAL` | Genera un refuerzo para cada jugador en línea. Requiere que la clave `customSpawn` tenga un spawn [personalizado]($language$/elitemobs/creating_spawns.md) válido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Coloca refuerzos de ender crystal al entrar en combate, solamente para uso en peleas personalizadas con dragones.                                  |

</details>

Nota que también es posible generar refuerzos a través de [Scripts de élite]($language$/elitemobs/creating_powers.md), por lo que hay más formas personalizables de generar refuerzos.

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

### Configuración avanzada - Creación de tus propios poderes

Es posible crear tus propios poderes, ya sea en el archivo del jefe o como un nuevo archivo de configuración en la carpeta de poderes. Puedes aprender más sobre eso [aquí]($language$/elitemobs/creating_powers.md).

### Limitar los poderes en base a la dificultad del calabozo instanciado

Los [calabozos instanciados]($language$/elitemobs/dungeons.md&section=instanced-dungeons) pueden tener configuraciones de dificultad, y es posible hacer que un poder específico solo esté habilitado para ciertas dificultades.

<details> 

<summary><b>Opciones de limitación de poder</b></summary>

<div align="left">

| Clave | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| `filename` | Nombre del archivo de poder. | [String](#string) | none |
| `difficultyID` | Nombre de la dificultad, coincidente con el nombre de la dificultad en el paquete de calabozo. | [String](#string) | none |

</div>

</details>

Esto solo se aplicará a calabozos instanciados.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - NombreDificultadMia1
  - NombreDificultadMia2
  - NombreDificultadMia3
```

</div>

</details>

***

### spawnMessage

Establece el mensaje a enviar cuando el jefe aparece. Requiere la configuración de la [prioridad de anuncio](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) y [Codigos de color](#color_codes) | none |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: ¡Resurgiré una vez más!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Establece la lista de mensajes a enviar cuando el jefe muere. Requiere la configuración de la [prioridad de anuncio](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `deathMessages` | [Strings](#string), [Codigos de color](#color_codes) y los placeholders mencionados abajo | none |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4¡El Jefe de Prueba ha sido aniquilado!'
- '&c&l    1er Daño: $damager1name &ccon $damager1damage de daño!'
- '&6&l    2do Daño: $damager2name &6con $damager2damage de daño!'
- '&e&l    3er Daño: $damager3name &econ $damager3damage de daño!'
- '&4Asesinos: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Los mensajes de muerte usan los siguientes placeholders:

<details> 

<summary><b>Placeholders</b></summary>

| Valor | Descripción |
|-|:-:|
| `$damager1name` | El nombre del que más daño ha hecho |
| `$damager2name` | El nombre del segundo que más daño ha hecho |
| `$damager3name` | El nombre del tercer que más daño ha hecho |
| `$damager1damage` | La cantidad de daño del que más ha hecho |
| `$damager2damage` | La cantidad de daño del segundo que más ha hecho |
| `$damager3damage` | La cantidad de daño del tercer que más ha hecho |
| `$players` | Muestra una lista de todos los jugadores que han hecho daño |

</details>

### onKillMessage

Establece el mensaje a enviar cuando el jefe mata a un jugador. Requiere la configuración de la [prioridad de anuncio](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) y [Codigos de color](#color_codes) | none |

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

Establece el tamaño del jefe slime, pero sólo funciona para Slimes y Magmacubes.

</div>

| Key | Values | Default |
|-|:-:|-|
| `slimeSize` | [Integer](#integer) | `4` |

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

Establece si el jefe aparecerá como neutral o no. Esto sólo se aplica a tipos de entidades que pueden ser neutrales como Lobos o Golems de Hierro.

</div>

| Key | Values | Default |
|-|:-:|-|
| `neutral` | [Boolean](#boolean) | `false` |

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

| Key | Values | Default |
|-|:-:|-|
| `timeout` | Tiempo (en minutos) [Integer](#integer) | `0` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
timeout: 20
```

Establece que el jefe se escape después de 20 minutos.

</div>

</details>

***

### isPersistent

Establece si el jefe puede sobrevivir a la descarga de un chunk. Solo se recomienda para jefes de eventos.

| Key | Values | Default |
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

| Key |        Values         | Default |
|-|:---------------------:|-|
| `damageModifiers` | [Material](#material) | none |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

En este ejemplo, los jefes recibirán solo el 80% de daño de las espadas de diamante (o un 20% menos), pero recibirán el 200% de daño de los tridentes (o 2 veces más).

</details>

***

### normalizedCombat

Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada en `~/plugins/EliteMobs/mobproperties`. Esta es la opción predeterminada para los jefes regionales para garantizar una curva de dificultad suave.

| Key | Values | Default |
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

Establece el mensaje que se transmite a los jugadores cuando el jefe escapa a través del mecanismo de [timeout](#timeout). Requiere que se configure [announcementPriority](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `escapeMessage` | [String](#string) | none |


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

| Key |                                      Values                                      | Default |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [Codigos de color](#color_codes) y los placeholders listados a continuación | none |

Placeholders:

| Valor | Descripción |
|-|:-:|
| `$distance` | Se sustituye por la distancia a la que el jugador se encuentra del Jefe Personalizado. Esta es la opción preferible. |
| `$location` | Se sustituye por las coordenadas de localización x y z del Jefe Personalizado |


<details>


<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Cool boss: En $location a solo $distance bloques de distancia!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `Cool boss: En 414,55,347 a solo 10 bloques de distancia!`

</details>

***

### uniqueLootList

Establece los [Items Personalizados]($language$/elitemobs/creating_items.md) que caen del jefe.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `uniqueLootList` | [List](#string_list) | none |

Las entradas de botín en el botín personalizado siguen el formato de tabla de botín. [¡Información sobre eso aquí!]($language$/elitemobs/loot_tables.md) Toma nota de que algunos archivos antiguos podrían estar usando tablas de botín obsoletas que se ven diferentes que el ejemplo.

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

Establece si el jefe dejará caer el botín de EliteMobs, excluyendo los elementos en [`uniqueLootList`](#uniqueLootList). Incluye monedas.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Se recomienda configurar en false para mobs de refuerzo.

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

Establece si el Jefe Personalizado dejará caer el botín vanilla normalmente asociado a su tipo de mob vanilla.

| Key | Valores | Predeterminado |
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

Establece si el Jefe Personalizado dejará caer botín generado procedimentalmente de EliteMobs. No incluye monedas de élite.

| Key | Valores | Predeterminado |
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

Establece el rastro que el jefe deja atrás al moverse.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) o [materiales de ítems](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | Ninguno |

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

Establece el mensaje que muestra el Mob Jefe cuando golpean a un jugador. Esta es una lista, y el que se usa se selecciona al azar de la lista.

| Key |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDamageMessages` | [Lista](#string_list) | Ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "¡Te he golpeado!"
- "¡Jaja te golpeé!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Establece el mensaje que el Jefe Muestra cuando es dañado por un jugador. Esta es una lista, y el que se usa se selecciona al azar de la lista.

| Key |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDamagedMessages` | [Lista](#string_list) | Ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "¡Me has golpeado!"
- "¡He sido golpeado!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Establece la entidad que el jefe montará y cabalgará.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `onDamagedMessages` | [Nombre del archivo del jefe a montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | Ninguno |

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

Nota: Los jefes regionales compartirán su correa con la entidad que están montando, lo que significa que ambos serán arrastrados de vuelta a la ubicación de aparición si exceden la distancia permitida por su correa.

***

### announcementPriority

Establece el nivel de prioridad para los anuncios. Las prioridades más bajas significan que no se realizan anuncios, las prioridades más altas pueden anunciar no solo en el chat sino también en discord si está configurado.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `announcementPriority` | [Integer](#integer) | `1` |

Aquí hay una lista de lo que hacen las prioridades:

| Valor |                                                                            Descripción                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   El jefe estará completamente en silencio, sin mensajes de anuncio.                                                   |
| `1` |                                Este es el predeterminado. Los jefes pueden enviar mensajes de chat, mensajes de inicio, de muerte y de escape.                                |
| `2` |                               Encima de las cosas en `1`, el jefe será rastreable por los jugadores a través del menú `/em`.                                |
| `3` | Además de las cosas en `2`, los mensajes de transmisión se reflejarán en Discord si está configurado. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí hay un ejemplo de un jefe que es rastreable, puede enviar mensajes de inicio/muerte/escape en el chat y en Discord:

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Tendrá que configurar el spawnMessage, deathMessage/deathMessages, escapeMessage para anuncios de chat y discord y el locationMessage para la característica de seguimiento si desea usar el nivel de Prioridad de anuncio correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se enganchan y entran en combate.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `followDistance` | [Double](#double) | ninguno, usa los valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad del `followDistance` cuando están fuera de combate. Esto es para que no se enganchen desde demasiado lejos, lo que puede causar problemas de combate molestos debido a las restricciones de la correa.

Nota 2: Cuanto mayor sea el `followDistance`, más intenso será el jefe en la CPU del servidor. ¡Úsalo con cuidado y responsabilidad!

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia cerca del jefe, este empezará a perseguir/atacar al jugador.

</details>

***

### onDeathCommands

Establece la lista de comandos a ejecutar en la muerte del jefe personalizado.

| Key |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onDeathCommands` | [Lista](#string_list) | Ninguno |

La lista admite los siguientes marcadores de posición:

| Valor | Descripción |
|-|:-:|
| `$level` | Marcador de posición para el nivel de jefe. |
| `$name` | Marcador de posición para el nombre del jefe. |
| `$chance=x$` | Hace que un comando tenga una oportunidad de ejecutarse. |
| `$players` | Hace que el comando se ejecute una vez para cada jugador en la lista de atacantes y lo reemplace cada vez con el nombre de usuario de un jugador diferente en esa lista. |
| `$locationX` | Coordenada X del jefe en el momento de la muerte. |
| `$locationY` | Coordenada Y del jefe en el momento de la muerte. |
| `$locationZ` | Coordenada Z del jefe en el momento de la muerte. |
| `$damager1name` | Nombre de usuario del atacante principal |
| `$damager2name` | Nombre de usuario del segundo atacante principal |
| `$damager3name` | Nombre de usuario del tercer atacante principal |

Echa un vistazo al siguiente ejemplo para entender mejor cómo funcionan.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players ha matado a $name! Eso fue nivel $level!"
- "$chance=0.5$ say ¡Qué muerte!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si Player1, Player2 y Player3 todos dañaron al jefe antes de matarlo, este es el resultado del comando de la consola:

<div align="left">

```
say Player1 ha matado a CustomBossName! Eso fue nivel X!
say Player2 ha matado a CustomBossName! Eso fue nivel X!
say Player3 ha matado a CustomBossName! Eso fue nivel X!
```

</div>

Además, hay una probabilidad del 50% de que también se produzca la siguiente salida:

<div align="left">

```
say ¡Qué muerte!
```

</div>

</details> 

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán al hacer spawn el jefe.

| Key |        Valores        | Predeterminado |
|-|:--------------------:|-|
| `onSpawnCommands` | [Lista](#string_list) | Ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de atacante no se aplicarán ya que no habrá atacantes en este momento.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say ¡Se ha generado el jefe!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Establece la lista de comandos que se ejecutarán cuando el jefe entre en combate.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `onCombatEnterCommands` | [Lista](#string_list) | Ninguno |

**¡Esto utiliza los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de atacante no se aplicarán ya que no habrá atacantes en este momento.

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

Establece la lista de comandos a ejecutar cuando el jefe abandone el combate.

| Key | Valores | Predeterminado |
|-|:-:|-|
| `onCombatLeaveCommands` | [Lista](#string_list) | Ninguno |

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

Establece la Disfraz de LibsDisguises si ese plugin está habilitado. [Más información aquí.]($language$/elitemobs/libsdisguises.md)

| Key | Valores | Predeterminado |
|-|:-:|-|
| `disguise` | [Cadena](#string) | Ninguno |
| `customDisguiseData` | [Cadena](#string) | Ninguno |

<details> 

<summary><b>Ejemplo el disfraz</b></summary>

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

<summary><b>El ejemplo personalizado disfraz</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Establece un disfraz personalizado desde skindex. [Consulta esta página]($idioma$/elitemobs/libsdisguises.md) para aprender cómo formatear correctamente estos datos.

</details>

*** 

### customModel

Establece el modelo personalizado a usar, si tienes un modelo personalizado y ModelEngine. [Más información aquí.]($idioma$/elitemobs/custom_models.md)

| Clave | Valores | Predeterminado |
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

Establece si el jefe puede moverse. Los jefes congelados todavía pueden atacar.
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

Establece la música que reproducirá un jefe, empezando cuando aparece. Requiere el archivo .ogg de la canción en el paquete de recursos.

| Clave | Valores | Predeterminado |
|-|:-:|-|
| `song` | [String](#string) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

Hay dos formas de configurar las canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 ticks y luego la repetirá. Ten en cuenta que la ubicación de la canción está determinada por el paquete de recursos.

Aquí está la segunda forma de configurar las canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 ticks y luego pasará a ice_queen.end_loop durante 28657 ticks y repetirá el end_loop.

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
</br>*Nota: cualquier cosa más allá de 0.36 podría ser demasiado rápida.*

| Clave | Valores | Predeterminado |
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

## Fases del Jefe

<div align="center">

Los jefes pueden tener fases que cambian cuando el jefe alcanza un cierto porcentaje de salud. Cuando esto ocurre, el jefe comienza a usar un archivo de configuración diferente, lo que significa que todo sobre el jefe puede cambiar, incluyendo cosas como el tipo de entidad.
</br>Para aprender más sobre las fases de los jefes haz clic [aquí]($idioma$/elitemobs/creating_boss_phases.md).

| Clave | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| `phases` | Establece las fases que tendrá el jefe. Obligatorio.  | [Lista](#string_list) | ninguno |
| `phaseSpawnLocation` | Establece donde se generará el jefe de la fase. Opcional.  | [String](#string) | ninguno |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

Para este ejemplo, vamos a mostrar tres archivos de configuración diferentes.

Primer archivo de configuración del jefe: phase_1_boss.yml

```yml
nombre: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo archivo de configuración del jefe: phase_2_boss.yml

```yml
nombre: "Fase 2"
entityType: SKELETON
```

Tercer archivo de configuración del jefe: phase_3_boss.yml

```yml
nombre: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este jefe cambiaría al archivo de configuración `phase_2_boss.yml` al 60% de salud, y al archivo de configuración `phase_3_boss.yml` al 30% de salud en el mismo mundo que la fase 2 y en las coordenadas x=10, y=64 y z=100. El tipo de entidad y el nombre del jefe también cambiarían.

El formato para una entrada es `nombre_del_archivo:porcentajeDeSalud`.

phaseSpawnLocation es opcional, si no se establece, el jefe cambiará de fases donde esté parado.

</details>

Las siguientes cosas son importantes para saber cuando se diseñe un jefe de fase:

<div align="left">

- El archivo de configuración para la primera fase establece todas las fases del jefe.
- La amenaza/daño contado se mantiene entre fases para los jugadores.
- El cambio de fases se basa en el porcentaje de salud perdida, que se preserva al pasar a una fase diferente. Esto significa que aumentar o disminuir el multiplicador de salud entre fases no curará ni dañará al jefe, seguirá cambiando con el mismo porcentaje, pero tendrá más o menos salud para esa fase.
- Los jefes de fase vuelven a la fase 1 si salen del combate.
- Los jefes de fase que también son jefes regionales comparten el mismo radio de correa y mecanismo de tiempo de espera en todas las fases, y reaparecerán como el jefe de la fase 1 cuando el temporizador haya terminado.
- El archivo de configuración para la última fase establece el botín para el jefe.
- Las fases no pueden ser saltadas - el daño excesivo aún hará que el jefe cambie de fases en el porcentaje definido.
- Los jefes de fase que tienen monturas dejan de estar montados al cambiar de fases.

</div>

</div>

</div>

***

## Jefes regionales

<div align="center">

Los jefes regionales son un tipo específico de jefes personalizados que aparecen en una ubicación específica configurada y pueden reaparecer en esa ubicación después de un retraso. Además, pueden tener correas que aseguran que permanezcan en una zona específica, entre otras características.

Estos son utilizados para todo el contenido de la mazmorra. Para aprender más sobre los jefes regionales haz clic [aquí]($idioma$/elitemobs/creating_world_bosses.md).

| Clave | Descripción | Valores | Predeterminado |
|-|:-:|:-:|-|
| `isRegionalBoss` | Establece si el jefe es regional. Debe ser verdadero si quieres un jefe regional.  | `true` / `false` | `false` |
| `spawnLocation` | Establece las ubicaciones de aparición del jefe.  | ¡Añádelas a través del comando `/em addSpawnLocation [filename.yml]`! | ninguno |
| `spawnCooldown` | Establece el tiempo de retraso para el reaparecimiento del jefe, en <b>minutos</b>. | [Integer](#integer) | `0` |
| `leashRadius` | Establece la distancia a la que el jefe puede alejarse de su punto de aparición antes de ser regresado. | [Double](#double) | ninguno |
| `onSpawnBlockStates` | Establece los bloques que el jefe modificará cuando aparezca. | Consulta los comandos abajo | ninguno |
| `onRemoveBlockStates` | Establece los bloques que el jefe modificará cuando desaparezca. | Consulta los comandos abajo | ninguno |

Como se ha indicado, los Jefes Regionales pueden tener `onSpawnBlockStates` y `onRemoveBlockStates`.

Esta es una característica muy útil para modificar las arenas de combate durante el combate, especialmente cuando se combina con los cambios de fase, ya que se hace posible abrir y cerrar las arenas de combate a través del cambio de estados de bloques.

El formato para estos es demasiado complejo para escribirlo manualmente, por lo que existen algunos comandos para ayudarte a configurarlo:

| Comando | Descripción |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Comienza a registrar selecciones manuales de bloques para los estados de bloques en la aparición o la remoción. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Edita los estados de bloques en la aparición o la remoción. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Permite a los administradores seleccionar grandes áreas de bloques para guardar como estados. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Permite a los administradores editar grandes áreas de bloques para guardar como estados. |

<details> 

<summary><b>Ejemplo de uso:</b></summary>

<div align="left">

Digamos que quieres hacer una pelea donde un jefe aparece en una arena que tiene una puerta abierta, y quieres hacer que la puerta se cierre cuando empieza la pelea y se vuelva a abrir cuando la pelea termine.

Para hacer esto, necesitarás dos fases de jefe y registrar tres conjuntos diferentes de estados de bloques. Para este ejemplo, voy a llamar a estas fases phase_1_boss.yml y phase_2_boss.yml respectivamente.

1) Usa `/em registerblocks phase_1_boss.yml on_spawn` o `/em registerblocksedit phase_1_boss.yml on_spawn` para registrar los bloques de la puerta en su estado abierto.

Esto significa registrar los bloques de aire. Aquí se recomienza la selección de área.

Esto es necesario para asegurar que la puerta esté abierta cuando el jefe aparezca, así los jugadores tienen garantizada una forma de entrar.

2) Usa `/em registerblocks phase_2_boss.yml on_spawn` o `/em registerblocksedit phase_2_boss.yml on_spawn` para registrar los bloques de la puerta en su estado cerrado.

Esto significa registrar los bloques sólidos de la puerta que impedirían la salida del jugador.

Esto es necesario para cambiar la puerta a ser sólida cuando el jefe entra en la fase 2, evitando que los jugadores salgan.

3) Usa `/em registerblocks phase_2_boss.yml on_remove` o `/em registerblocksedit phase_2_boss.yml on_remove` para registrar los bloques de la puerta en su estado abierto.

Esto significa registrar los mismos bloques del primer paso de nuevo (los bloques de aire).

Esto es necesario para abrir la puerta cuando el jefe muera, permitiendo que los jugadores salgan de la arena.

</div>

</details>

</div>

***

### alert

<div align="center">

Establece si el jefe está alerta. Por defecto, los jefes regionales se ralentizan y tienen una distancia de agresión más corta cuando están fuera de combate. Esta configuración evita que los jefes regionales se ralenticen y tengan una distancia de agresión más corta mientras están fuera de combate, por lo que siempre se comportarán de la misma manera dentro o fuera de combate.

</div>

| Clave | Valores | Predeterminado |
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

Establece si el jefe regional será borrado permanentemente después de ser asesinado. Esto es lo que utiliza BetterStructures para los santuarios, donde el jefe regional solo está diseñado para ser combatido una vez y luego nunca más en esa ubicación.

</div>

| Clave | Valores | Predeterminado |
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

Los jefes instanciados son un subtipo de Jefes Regionales usados en Mazmorras Instanciadas.

| Clave | Descripción | Valores | Predeterminado |
|-|:-:|-|-|
| `instanced` | Hace que el jefe personalizado sea instanciado. Obligatorio. | `true` / `false` | `false` |

Hacer que los jefes sean instanciados es obligatorio para que las mazmorras instanciadas funcionen correctamente. También recomendamos retirar las correas de cualquier jefe instanciado.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>