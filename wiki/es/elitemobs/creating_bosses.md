[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de jefes personalizados

# Antes de comenzar

## ¿Dónde van los archivos de jefes?

Los archivos de jefes van a la carpeta de configuración `~/plugins/EliteMobs/custombosses`.

Es posible crear subcarpetas, como `~/plugins/EliteMobs/custombosses/mybosses`. Esto se recomienda para mantener las cosas organizadas.

Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados y más de forma rápida y sencilla.

## La configuración más pequeña posible

**El archivo de configuración más pequeño posible para un jefe personalizado es:**
```yml
```

Tenga en cuenta que este es solo un archivo vacío. Esto seguirá generando un jefe personalizado zombi con un nombre personalizado, ya que esos son los valores predeterminados. **¡Todo en esta página es opcional!**

## Ejemplo de jefe

<div align="center">

Echemos un vistazo a un ejemplo de cómo se ve un archivo de jefe.

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
- "¡He sido golpeado!"
```

</div>

</details>

</div>

## Configuración básica

<div align="center">

### isEnabled

Establece si el jefe está habilitado.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

| Clave | Valores | Predeterminado |
|---|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
| `entityType` | [Elija desde aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> El valor también debe estar presente en la carpeta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

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
|---|:-:|---|
| `name` | [Cadena](#string), acepta [códigos de color](#color_codes) y los marcadores de posición que se enumeran a continuación | "Nombre predeterminado" |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c¡Jefe genial!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si desea incluir el nivel del jefe en su campo de nombre, simplemente use uno de los siguientes marcadores de posición.

| Marcador de posición | Descripción | Ejemplo | Salida (para un jefe de nivel 10) |
|---|:-:|:-:|---|
| `$level` | Reemplaza con el nivel | "$level Jefe genial" | `10 Jefe genial` |
| `$normalLevel` | Reemplaza con el nivel, hecho para mobs normales | `"$normalLevel Jefe genial"` | `[10] Jefe genial` |
| `$minibossLevel` | Reemplaza con el nivel, hecho para minijefes | `"$minibossLevel Jefe genial"` | `〖10〗 Jefe genial` |
| `$bossLevel` | Reemplaza con el nivel, hecho para jefes | `"$bossLevel Jefe genial"` | `『10』 Jefe genial` |
| `$reinforcementLevel` | Reemplaza con el nivel, hecho para refuerzos | `"$reinforcementLevel Jefe genial"` | `〔10〕 Jefe genial` |
| `$eventBossLevel` | Reemplaza con el nivel, hecho para jefes de eventos | `"$eventBossLevel Jefe genial"` | `「10」 Jefe genial` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &c¡Jefe genial!"
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
|---|:-:|---|
| `level` | Números [enteros](#integer) positivos o `dynamic` | `dynamic` |

`dynamic` se usa para eventos y se ajusta al nivel de los jugadores cercanos en el momento de la aparición del jefe.
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
|---|:-:|---|
| `scale` | [Multiplicador](#multiplier) | `1.0` |

Al escalar, `1.0` representa el tamaño predeterminado. Para hacer que la entidad sea más grande, aumente el valor (por ejemplo, `1.2`). Para hacer que la entidad sea más pequeña, disminuya el valor (por ejemplo, `0.8`).

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

Establece qué tipo es el jefe. Esto se usa para mostrar barras de salud de jefes y otras características.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` hará que el plugin muestre barras de salud cuando los jugadores estén luchando contra estos tipos de jefes.

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
|---|:-:|---|
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
|---|:-:|---|
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
Si desea [disfrazar]($language$/elitemobs/libsdisguises.md) al jefe pero le gustaría que también siga siendo un bebé mientras está disfrazado (asegúrese de que la entidad de disfraz también admita la variante bebé), puede usar esta configuración:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece la armadura del jefe. No todos los modelos de Minecraft pueden mostrar armadura. La armadura de jefe es puramente cosmética y no afecta el juego.

| Clave |                                    Valores                                     | Predeterminado |
|---|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | ninguno |
| `chestplate` | [Material](#material) | ninguno |
| `leggings` | [Material](#material) | ninguno |
| `boots` | [Material](#material) | ninguno |
| `mainHand` | [Material](#material) | ninguno |
| `offHand` | [Material](#material) | ninguno |

**Nota:** Este campo también le permite establecer modelos personalizados para los elementos. Para establecer la ID de modelo personalizado, agregue la ID después del tipo de material siguiendo este formato: `ITEM_MATERIAL:ID`. Ejemplo: `DIAMOND_SWORD:1` establece que el jefe use una espada de diamante con el modelo personalizado #1 en su paquete de texturas.

**Nota 2:** Este campo también le permite establecer colores de cuero personalizados con el formato `ITEM_MATERIAL:CODE` donde el código es la representación hexadecimal del color. Ejemplo: `LEATHER_LEGGINGS:ffa500` crearía leggings naranjas. Puede usar códigos hexadecimales, simplemente elimine el `#` del código hexadecimal. Puede obtener códigos hexadecimales desde [aquí](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** El campo del casco también le permite establecer que los cascos de mob sean cabezas de jugador. Simplemente obtenga el UUID de la cabeza de jugador que le gustaría usar e introdúzcalo en el campo del casco. *El jugador debe estar en línea para que esto funcione o la cabeza volverá a ser una cabeza genérica de MineCraft.* Puede obtener UUID de jugador desde [aquí](https://minecraftuuid.com/).

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
|---|:-:|---|
| `powers` | Consulte la lista a continuación | ninguno |

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

*Nota: Puede consultar [esta página]($language$/elitemobs/premade_powers.md) si desea ver una lista de poderes prefabricados que puede usar.*

***

### Configuración intermedia: generación de refuerzos

Los refuerzos también entran en la categoría de poderes, usando las siguientes configuraciones:

<details>

<summary><b>Configuración de refuerzos</b></summary>

| Clave | Descripción | Valores | Predeterminado |
|---|:-:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
| `summonType` | Qué desencadena la aparición de refuerzos. Obligatorio. | Consulte la lista a continuación | ninguno |
| `filename` | Nombre de archivo del jefe para generar como refuerzo. Obligatorio. | [Cadena](#string) | ninguno |
| `chance` | Probabilidad de que aparezca el refuerzo. Opcional. | [Doble](#double) | `1.0` |
| `amount` | Establece la cantidad de refuerzos para generar. Opcional. | [Entero](#integer) | `1` |
| `inheritAggro` | Hace que el refuerzo herede el aggro del jefe. Opcional. | `true` / `false` | `false` |
| `spawnNearby` | Hace que los refuerzos aparezcan en un radio de 30 bloques del jefe. Opcional. | `true` / `false` | `false` |
| `inheritLevel` | Hace que el refuerzo herede el nivel del jefe. Opcional. | `true` / `false` | `false` |
| `customSpawn` | Hace que el refuerzo se genere usando el [sistema de generación personalizada]($language$/elitemobs/creating_spawns.md). Solo se usa para `summonType: GLOBAL`
| `location` | Ubicación de generación. Opcional. | `nombre_mundo,x,y,z` o `x,y,z` para una ubicación relativa al jefe. El desplazamiento es relativo a la ubicación de generación para los jefes regionales. También puede usar `same_as_boss` para hacer que los refuerzos aparezcan en el mismo mundo que el jefe. | ninguno |
| `lightningRod` | Configuración especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Hace que los cristales del end generen rayos a su alrededor. Opcional. | `true` / `false` | ninguno |

</details>

Los tipos de invocación establecen las condiciones para la aparición de los refuerzos. La siguiente es una lista de los tipos de invocación válidos:

<details>

<summary><b>Tipos de invocación</b></summary>

| Valor | Descripción |
|---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` | Solo genera los refuerzos una vez, la primera vez que el jefe recibe daño. |
| `ON_HIT` | Genera los refuerzos al golpear. |
| `ON_COMBAT_ENTER` | Genera los refuerzos cuando el jefe entra en combate. |
| `GLOBAL` | Genera un refuerzo para cada jugador en línea. Requiere que la clave `customSpawn` tenga un [generación personalizada]($language$/elitemobs/creating_spawns.md) válida establecida. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Coloca refuerzos de cristales del end al entrar en combate, solo para uso con peleas de dragón personalizadas. |

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

### Configuración experta: creación de sus propios poderes

Es posible crear sus propios poderes, ya sea en el propio archivo de jefe o como un nuevo archivo de configuración en la carpeta de poderes. Puede obtener más información sobre eso [aquí]($language$/elitemobs/creating_powers.md).

### Limitar los poderes según la dificultad de la mazmorra de instancia

[Las mazmorras de instancia]($language$/elitemobs/dungeons.md&section=instanced-dungeons) pueden tener configuraciones de dificultad, y es posible hacer que un poder específico solo esté habilitado para dificultades específicas.

<details>

<summary><b>Opciones de limitación de poder</b></summary>

<div align="left">

| Clave | Descripción | Valores | Predeterminado |
|---|:-:|:-:|---|
| `filename` | Nombre de archivo del poder. | [Cadena](#string) | ninguno |
| `difficultyID` | Nombre de la dificultad, que coincida con el nombre de la dificultad en el paquete de mazmorras. | [Cadena](#string) | ninguno |

</div>

</details>

Esto solo se aplicará a las mazmorras de instancia.

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

Establece el mensaje para enviar cuando aparece el jefe. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece la lista de mensajes que se enviarán cuando muera el jefe. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `deathMessages` | [Cadenas](#string), [códigos de color](#color_codes) y los marcadores de posición a continuación | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4¡El jefe de prueba ha sido asesinado!'
- '&c&l    1er Dañador: $damager1name &c¡con $damager1damage de daño!'
- '&6&l    2do Dañador: $damager2name &6¡con $damager2damage de daño!'
- '&e&l    3er Dañador: $damager3name &e¡con $damager3damage de daño!'
- '&4Asesinos: $players'
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
|---|:-:|
| `$damager1name` | El nombre del máximo dañador |
| `$damager2name` | El nombre del segundo máximo dañador |
| `$damager3name` | El nombre del tercer máximo dañador |
| `$damager1damage` | La cantidad de daño del máximo dañador |
| `$damager2damage` | La cantidad de daño del segundo máximo dañador |
| `$damager3damage` | La cantidad de daño del tercer máximo dañador |
| `$players` | Muestra una lista de todos los dañadores |

</details>

### onKillMessage

Establece el mensaje para enviar cuando el jefe mata a un jugador. Requiere configurar la [announcementPriority](#announcementPriority).

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el tamaño del jefe de slime, pero solo funciona para slimes y cubos de magma.

</div>

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece si el jefe aparecerá como neutral o no. Esto solo se aplica a tipos de entidad que pueden ser neutrales, como lobos o gólems de hierro.

</div>

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `neutral` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Configuración avanzada

<div align="center">

### timeout

Establece la cantidad de tiempo, en minutos, antes de que el jefe personalizado desaparezca.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece si el jefe puede sobrevivir a una descarga de fragmentos. Solo se recomienda para jefes de eventos.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:---------------------:|-|
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

En este ejemplo, los jefes solo recibirán el 80% de daño de las espadas de diamante (o un 20% menos), pero recibirán el 200% de daño de los tridentes (o 2 veces más).

</details>

***

### normalizedCombat

Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada en `~/plugins/EliteMobs/mobproperties`. Este es el valor predeterminado para los jefes regionales para garantizar una curva de dificultad suave.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
| `escapeMessage` | [Cadena](#string) | ninguno |

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

Establece el mensaje que se muestra en la barra de jefe. Esto se usa para rastrear tanto la salud del jefe personalizado como su ubicación en el servidor. Requiere que se configure el [annoucementPriority](#annoucementPriority).

| Clave | Valores | Predeterminado |
|---|:--------------------------------------------------------------------------------:|---|
| `locationMessage` | [Cadena](#string), [códigos de color](#color_codes) y los marcadores de posición que se enumeran a continuación | ninguno |

Marcadores de posición:

| Valor | Descripción |
|---|:-:|
| `$distance` | Se reemplaza con la distancia a la que se encuentra el jugador del jefe personalizado. Esta es la opción preferible. |
| `$location` | Se reemplaza con las coordenadas de ubicación x, y, z del jefe personalizado |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Jefe genial: ¡A $location solo a $distance bloques de distancia!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `Jefe genial: ¡En 414,55,347 solo a 10 bloques de distancia!`

</details>

***

### uniqueLootList

Establece los [Objetos personalizados]($language$/elitemobs/creating_items.md) que se obtienen del jefe.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `uniqueLootList` | [Lista](#string_list) | ninguno |

Las entradas de botín en el Botín personalizado siguen el formato de la tabla de botín. [¡Información sobre eso aquí!]($language$/elitemobs/loot_tables.md) Tenga en cuenta que algunos archivos más antiguos pueden estar usando tablas de botín obsoletas que se ven diferentes al ejemplo.

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

Establece si el jefe dejará caer botín de EliteMobs, excluyendo los elementos de [`uniqueLootList`](#uniqueLootList). Incluye monedas.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Se recomienda establecer en falso para mobs de refuerzo.

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

Establece si el jefe personalizado dejará caer el botín de vainilla generalmente asociado con su tipo de mob de vainilla.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece si el jefe personalizado dejará caer botín generado por procedimientos de EliteMobs. No incluye monedas de élite.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el rastro que deja el jefe al moverse.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el mensaje que muestra el mob jefe cuando golpea a un jugador. Esta es una lista, y la que se usa se aleatoriza de la lista.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDamageMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "¡Te golpeé!"
- "¡Jaja, te golpeé!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Establece el mensaje que muestra el mob jefe cuando un jugador lo daña. Esta es una lista, y la que se usa se aleatoriza de la lista.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDamagedMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "¡Me golpeaste!"
- "¡He sido golpeado!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Establece la entidad que montará y montará el jefe.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `onDamagedMessages` | [Nombre de archivo del jefe para montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | ninguno |

No intente hacer que el jefe se monte a sí mismo.

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

Nota: Los jefes regionales compartirán su correa con la entidad que estén montando, lo que significa que ambos serán arrastrados de regreso a la ubicación de generación si exceden la distancia permitida por su correa.

***

### announcementPriority

Establece el nivel de prioridad para los anuncios. Las prioridades más bajas significan que no se realizan anuncios, las prioridades más altas pueden anunciar no solo en el chat, sino también en Discord si está configurado.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `announcementPriority` | [Entero](#integer) | `1` |

Aquí hay una lista de lo que hacen las prioridades:

| Valor | Descripción |
|---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` | El jefe estará completamente en silencio, sin mensajes de anuncio. |
| `1` | Este es el valor predeterminado. Los jefes pueden enviar mensajes de chat, mensaje de aparición, mensajes de muerte y escape. |
| `2` | Además de las cosas en `1`, el jefe se configurará para que los jugadores puedan rastrearlo a través del menú `/em`. |
| `3` | Además de las cosas en `2`, los mensajes de difusión se reflejarán en Discord si está configurado. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí hay un ejemplo de un jefe que se puede rastrear, puede enviar mensajes de aparición/muerte/escape en el chat y en Discord:

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: tendrá que configurar spawnMessage, deathMessage/deathMessages, escapeMessage para anuncios de chat y discord y locationMessage para la función de seguimiento si desea utilizar el nivel de prioridad de anuncio correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se enfadan y entran en combate.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `followDistance` | [Doble](#double) | ninguno, usa valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad de la `followDistance` cuando están fuera de combate. Esto es para que no se enfaden desde demasiado lejos, lo que puede causar problemas de combate molestos debido a las limitaciones de la correa.

Nota 2: Cuanto mayor sea la `followDistance`, más intensivo para la CPU del servidor se vuelve el jefe. ¡Úselo con cuidado y responsabilidad!

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia cerca del jefe, comenzará a perseguir/atacar al jugador.

</details>

***

### onDeathCommands

Establece la lista de comandos para ejecutar al morir el jefe personalizado.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDeathCommands` | [Lista](#string_list) | ninguno |

La lista admite los siguientes marcadores de posición:

| Valor | Descripción |
|---|:-:|
| `$level` | Marcador de posición para el nivel del jefe. |
| `$name` | Marcador de posición para el nombre del jefe. |
| `$chance=x$` | Hace que un comando tenga una posibilidad de ejecutarse. |
| `$players` | Hace que el comando se ejecute una vez para cada jugador en la lista de dañadores y lo reemplaza cada vez con el nombre de usuario de un jugador diferente en esa lista. |
| `$locationX` | Coordenada X del jefe en el momento de la muerte. |
| `$locationY` | Coordenada Y del jefe en el momento de la muerte. |
| `$locationZ` | Coordenada Z del jefe en el momento de la muerte. |
| `$damager1name` | Nombre de usuario del máximo dañador |
| `$damager2name` | Nombre de usuario del segundo máximo dañador |
| `$damager3name` | Nombre de usuario del tercer máximo dañador |

Eche un vistazo al ejemplo a continuación para comprender mejor cómo funcionan.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players ha matado a $name! ¡Ese era el nivel $level!"
- "$chance=0.5$ say ¡Qué asesinato!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si el Jugador1, el Jugador2 y el Jugador3 dañaron al jefe antes de matarlo, esta será la salida del comando desde la consola:

<div align="left">

```
say El Jugador1 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
say El Jugador2 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
say El Jugador3 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
```

</div>

Además, existe una probabilidad del 50 % de que también se produzca la siguiente salida:

<div align="left">

```
say ¡Qué asesinato!
```

</div>

</details>

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán al generar el jefe.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onSpawnCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán ya que no habrá ningún dañador en este momento.

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

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onCombatEnterCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán ya que no habrá ningún dañador en este momento.

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

Establece la lista de comandos para ejecutar cuando el jefe sale del combate.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onCombatLeaveCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!**

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say ¡El jefe ha salido del combate!
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
|---|:-:|---|
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
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Establece un disfraz personalizado de skindex. [Consulte esta página]($language$/elitemobs/libsdisguises.md) para aprender a formatear correctamente estos datos.

</details>

***

### customModel

Establece el modelo personalizado para usar, si tiene un modelo personalizado y ModelEngine. [Más información aquí.]($language$/elitemobs/custom_models.md)

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
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
|---|:-:|---|
| `song` | [Cadena](#string) | ninguno |

**Nota: la configuración `song` requiere que se establezca `followDistance`, ya que `followDistance` determina el rango en el que comienza a reproducirse la canción.**
Consulte el ejemplo sobre cómo establecer la `longitud` (milisegundos) de la `song`.

<details>

<summary><b>Ejemplo</b></summary>

Hay dos formas de configurar las canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 milisegundos y luego la repetirá. Tenga en cuenta que la ubicación de la canción está determinada por el paquete de recursos.

Aquí está la segunda forma de configurar canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 milisegundos y luego hará la transición a ice_queen.end_loop durante 28657 milisegundos y repetirá el end_loop.

Esto permite a los jefes tener una canción de "introducción" o "transición" y luego una pista principal que se repite.

</div>

</details>

***

### cullReinforcements

Establece si los refuerzos del jefe se eliminarán cuando el jefe muera.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
| `movementSpeedAttribute` | [Doble](#double) | ninguno |

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

Los jefes pueden tener fases que cambian cuando el jefe alcanza un cierto porcentaje de salud. Cuando esto sucede, el jefe comienza a usar un archivo de configuración diferente, lo que significa que todo sobre el jefe puede cambiar, incluidas cosas como el tipo de entidad.
</br>Para obtener más información sobre las fases de jefe, haga clic [aquí]($language$/elitemobs/creating_boss_phases.md).

| Clave | Descripción | Valores | Predeterminado |
|---|:-:|:-:|---|
| `phases` | Establece las fases que tendrá el jefe. Obligatorio | [Lista](#string_list) | ninguno |
| `phaseSpawnLocation` | Establece dónde aparece el jefe de fase. Opcional | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Para este ejemplo, vamos a mostrar tres archivos de configuración diferentes.

Primer archivo de configuración de jefe: phase_1_boss.yml

```yml
name: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo archivo de configuración de jefe: phase_2_boss.yml

```yml
name: "Fase 2"
entityType: SKELETON
```

Tercer archivo de configuración de jefe: phase_3_boss.yml

```yml
name: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este jefe cambiaría al archivo de configuración `phase_2_boss.yml` al 60 % de salud, y al archivo de configuración `phase_3_boss.yml` al 30 % de salud en el mismo mundo que la fase 2 y en las coordenadas x=10, y=64 y z=100. El tipo de entidad y el nombre del jefe también cambiarían.

El formato para una entrada es `nombrearchivo:porcentajeDeSalud`.

phaseSpawnLocation es opcional, si no está establecido, el jefe cambiará de fase donde está parado.

</details>

Lo siguiente es importante saber al diseñar un jefe de fase:

<div align="left">

- El archivo de configuración para la primera fase establece todas las fases del jefe.
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
|---|:---------------------:|-|
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

En este ejemplo, los jefes solo recibirán el 80 % de daño de las espadas de diamante (o un 20 % menos), pero recibirán el 200 % de daño de los tridentes (o 2 veces más).

</details>

***

### normalizedCombat

Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada en `~/plugins/EliteMobs/mobproperties`. Este es el valor predeterminado para los jefes regionales para garantizar una curva de dificultad suave.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
| `escapeMessage` | [Cadena](#string) | ninguno |

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

Establece el mensaje que se muestra en la barra de jefe. Esto se usa para rastrear tanto la salud del jefe personalizado como su ubicación en el servidor. Requiere que se configure el [annoucementPriority](#annoucementPriority).

| Clave | Valores | Predeterminado |
|---|:--------------------------------------------------------------------------------:|---|
| `locationMessage` | [Cadena](#string), [códigos de color](#color_codes) y los marcadores de posición que se enumeran a continuación | ninguno |

Marcadores de posición:

| Valor | Descripción |
|---|:-:|
| `$distance` | Se reemplaza con la distancia a la que se encuentra el jugador del jefe personalizado. Esta es la opción preferible. |
| `$location` | Se reemplaza con las coordenadas de ubicación x, y, z del jefe personalizado |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Jefe genial: ¡En $location solo a $distance bloques de distancia!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `Jefe genial: ¡En 414,55,347 solo a 10 bloques de distancia!`

</details>

***

### uniqueLootList

Establece los [Objetos personalizados]($language$/elitemobs/creating_items.md) que se obtienen del jefe.

| Clave |        Valores        | Predeterminado |
|---|:--------------------:|---|
| `uniqueLootList` | [Lista](#string_list) | ninguno |

Las entradas de botín en el Botín personalizado siguen el formato de la tabla de botín. [¡Información sobre eso aquí!]($language$/elitemobs/loot_tables.md) Tenga en cuenta que algunos archivos más antiguos pueden estar usando tablas de botín obsoletas que se ven diferentes al ejemplo.

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

Establece si el jefe dejará caer botín de EliteMobs, excluyendo los elementos de [`uniqueLootList`](#uniqueLootList). Incluye monedas.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Se recomienda establecer en falso para mobs de refuerzo.

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

Establece si el jefe personalizado dejará caer el botín de vainilla generalmente asociado con su tipo de mob de vainilla.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece si el jefe personalizado dejará caer botín generado por procedimientos de EliteMobs. No incluye monedas de élite.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el rastro que deja el jefe al moverse.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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

Establece el mensaje que muestra el mob jefe cuando golpea a un jugador. Esta es una lista, y la que se usa se aleatoriza de la lista.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDamageMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamageMessages:
- "¡Te golpeé!"
- "¡Jaja, te golpeé!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Establece el mensaje que muestra el mob jefe cuando un jugador lo daña. Esta es una lista, y la que se usa se aleatoriza de la lista.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDamagedMessages` | [Lista](#string_list) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "¡Me golpeaste!"
- "¡He sido golpeado!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Establece la entidad que montará y montará el jefe.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `onDamagedMessages` | [Nombre de archivo del jefe para montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | ninguno |

No intente hacer que el jefe se monte a sí mismo.

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

Nota: Los jefes regionales compartirán su correa con la entidad que estén montando, lo que significa que ambos serán arrastrados de regreso a la ubicación de generación si exceden la distancia permitida por su correa.

***

### announcementPriority

Establece el nivel de prioridad para los anuncios. Las prioridades más bajas significan que no se realizan anuncios, las prioridades más altas pueden anunciar no solo en el chat, sino también en Discord si está configurado.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `announcementPriority` | [Entero](#integer) | `1` |

Aquí hay una lista de lo que hacen las prioridades:

| Valor | Descripción |
|---|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` | El jefe estará completamente en silencio, sin mensajes de anuncio. |
| `1` | Este es el valor predeterminado. Los jefes pueden enviar mensajes de chat, mensaje de aparición, mensajes de muerte y escape. |
| `2` | Además de las cosas en `1`, el jefe se configurará para que los jugadores puedan rastrearlo a través del menú `/em`. |
| `3` | Además de las cosas en `2`, los mensajes de difusión se reflejarán en Discord si está configurado. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí hay un ejemplo de un jefe que se puede rastrear, puede enviar mensajes de aparición/muerte/escape en el chat y en Discord:

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Tendrá que configurar el spawnMessage, deathMessage/deathMessages, escapeMessage para los anuncios de chat y discord, y el locationMessage para la función de seguimiento si desea utilizar el nivel de prioridad de anuncio correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se enfadan y entran en combate.

| Clave | Valores | Predeterminado |
|---|:-:|---|
| `followDistance` | [Doble](#double) | ninguno, usa valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad de la `followDistance` cuando están fuera de combate. Esto es para que no se enfaden desde demasiado lejos, lo que puede causar problemas de combate molestos debido a las limitaciones de la correa.

Nota 2: Cuanto mayor sea la `followDistance`, más intensivo para la CPU del servidor se vuelve el jefe. ¡Úselo con cuidado y responsabilidad!

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia cerca del jefe, comenzará a perseguir/atacar al jugador.

</details>

***

### onDeathCommands

Establece la lista de comandos para ejecutar al morir el jefe personalizado.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onDeathCommands` | [Lista](#string_list) | ninguno |

La lista admite los siguientes marcadores de posición:

| Valor | Descripción |
|---|:-:|
| `$level` | Marcador de posición para el nivel del jefe. |
| `$name` | Marcador de posición para el nombre del jefe. |
| `$chance=x$` | Hace que un comando tenga una posibilidad de ejecutarse. |
| `$players` | Hace que el comando se ejecute una vez para cada jugador en la lista de dañadores y lo reemplaza cada vez con el nombre de usuario de un jugador diferente en esa lista. |
| `$locationX` | Coordenada X del jefe en el momento de la muerte. |
| `$locationY` | Coordenada Y del jefe en el momento de la muerte. |
| `$locationZ` | Coordenada Z del jefe en el momento de la muerte. |
| `$damager1name` | Nombre de usuario del máximo dañador |
| `$damager2name` | Nombre de usuario del segundo máximo dañador |
| `$damager3name` | Nombre de usuario del tercer máximo dañador |

Eche un vistazo al ejemplo a continuación para comprender mejor cómo funcionan.

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players ha matado a $name! ¡Ese era el nivel $level!"
- "$chance=0.5$ say ¡Qué asesinato!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si el Jugador1, el Jugador2 y el Jugador3 dañaron al jefe antes de matarlo, esta será la salida del comando desde la consola:

<div align="left">

```
say El Jugador1 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
say El Jugador2 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
say El Jugador3 ha matado a NombreJefePersonalizado! ¡Ese era el nivel X!
```

</div>

Además, existe una probabilidad del 50 % de que también se produzca la siguiente salida:

<div align="left">

```
say ¡Qué asesinato!
```

</div>

</details>

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán al generar el jefe.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onSpawnCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán ya que no habrá ningún dañador en este momento.

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

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onCombatEnterCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de los dañadores no se aplicarán ya que no habrá ningún dañador en este momento.

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

Establece la lista de comandos para ejecutar cuando el jefe sale del combate.

| Clave | Valores | Predeterminado |
|---|:--------------------:|---|
| `onCombatLeaveCommands` | [Lista](#string_list) | ninguno |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!**

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say ¡El jefe ha salido del combate!
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
|---|:-:|---|
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
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Establece un disfraz personalizado de skindex. [Consulte esta página]($language$/elitemobs/libsdisguises.md) para aprender a formatear correctamente estos datos.

</details>

***

### customModel

Establece el modelo personalizado para usar, si tiene un modelo personalizado y ModelEngine. [Más información aquí.]($language$/elitemobs/custom_models.md)

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
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
|---|:-:|---|
| `song` | [Cadena](#string) | ninguno |

**Nota: la configuración `song` requiere que se establezca `followDistance`, ya que `followDistance` determina el rango en el que comienza a reproducirse la canción.**
Consulte el ejemplo sobre cómo establecer la `longitud` (milisegundos) de la `song`.

<details>

<summary><b>Ejemplo</b></summary>

Hay dos formas de configurar las canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 milisegundos y luego la repetirá. Tenga en cuenta que la ubicación de la canción está determinada por el paquete de recursos.

Aquí está la segunda forma de configurar canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 milisegundos y luego hará la transición a ice_queen.end_loop durante 28657 milisegundos y repetirá el end_loop.

Esto permite a los jefes tener una canción de "introducción" o "transición" y luego una pista principal que se repite.

</div>

</details>

***

### cullReinforcements

Establece si los refuerzos del jefe se eliminarán cuando el jefe muera.

| Clave | Valores | Predeterminado |
|---|:-:|---|
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
|---|:-:|---|
| `movementSpeedAttribute` | [Doble](#double) | ninguno |

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

Los jefes pueden tener fases que cambian cuando el jefe alcanza un cierto porcentaje de salud. Cuando esto sucede, el jefe comienza a usar un archivo de configuración diferente, lo que significa que todo sobre el jefe puede cambiar, incluidas cosas como el tipo de entidad.
</br>Para obtener más información sobre las fases de jefe, haga clic [aquí]($language$/elitemobs/creating_boss_phases.md).

| Clave | Descripción | Valores | Predeterminado |
|---|:-:|:-:|---|
| `phases` | Establece las fases que tendrá el jefe. Obligatorio | [Lista](#string_list) | ninguno |
| `phaseSpawnLocation` | Establece dónde aparece el jefe de fase. Opcional | [Cadena](#string) | ninguno |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

Para este ejemplo, vamos a mostrar tres archivos de configuración diferentes.

Primer archivo de configuración de jefe: phase_1_boss.yml

```yml
name: "Fase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Segundo archivo de configuración de jefe: phase_2_boss.yml

```yml
name: "Fase 2"
entityType: SKELETON
```

Tercer archivo de configuración de jefe: phase_3_boss.yml

```yml
name: "Fase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Este jefe cambiaría al archivo de configuración `phase_2_boss.yml` al 60 % de salud, y al archivo de configuración `phase_3_boss.yml` al 30 % de salud en el mismo mundo que la fase 2 y en las coordenadas x=10, y=64 y z=100. El tipo de entidad y el nombre del jefe también cambiarían.

El formato para una entrada es `nombrearchivo:porcentajeDeSalud`.

phaseSpawnLocation es opcional, si no está establecido, el jefe cambiará de fase donde está parado.

</details>

Lo siguiente es importante saber al diseñar un jefe de fase:

<div align="left">

- El archivo de configuración para la primera fase establece todas las fases del jefe.
