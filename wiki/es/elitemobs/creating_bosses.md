```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creación de jefes personalizados

# Antes de empezar

## ¿Dónde van los archivos de jefes?

Los archivos de jefes van en la carpeta de configuración `~/plugins/EliteMobs/custombosses`.

Es posible crear subcarpetas, como `~/plugins/EliteMobs/custombosses/mybosses`. Esto se recomienda para mantener las cosas organizadas.

Un archivo define un jefe, aunque es posible generar el mismo jefe varias veces e incluso establecer varias ubicaciones de generación para el mismo archivo de jefe.

Es posible utilizar la [aplicación web](https://magmaguy.com/webapp/webapp.html) para crear jefes personalizados de forma rápida y sencilla, y mucho más.

## La configuración más pequeña posible

**El archivo de configuración más pequeño posible para un jefe personalizado es:**
```yml
```

Observa cómo este es solo un archivo vacío. Esto seguirá generando un jefe personalizado zombi con un nombre
personalizado, ya que esos son los valores predeterminados. **¡Todo en esta página es opcional!**

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
spawnMessage: ¡Un jefe de prueba ha aparecido!
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

## Ajustes básicos

<div align="center">

### isEnabled

Establece si el jefe está habilitado.

| Clave       |     Valores      | Predeterminado |
|-------------|:----------------:|----------------|
| `isEnabled` | `true` / `false` | `true`         |

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

| Clave        |                                                                                         Valores                                                                                          | Predeterminado |
|--------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `entityType` | [Elige de aquí](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> El valor también debe estar presente en la carpeta `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`       |

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

| Clave  |                                                        Valores                                                         | Predeterminado          |
|--------|:----------------------------------------------------------------------------------------------------------------------:|-------------------------|
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

Si deseas incluir el nivel del jefe en su campo de nombre, simplemente usa uno de los siguientes marcadores de posición.

| Marcador de posición  |                    Descripción                     |               Ejemplo               | Salida (para un jefe de nivel 10) |
|-----------------------|:--------------------------------------------------:|:-----------------------------------:|-----------------------------------|
| `$level`              |               Reemplaza con el nivel               |        "$level Jefe genial"         | `10 Jefe genial`                  |
| `$normalLevel`        |  Reemplaza con el nivel, hecho para mobs normales  |    `"$normalLevel Jefe genial"`     | `[10] Jefe genial`                |
| `$minibossLevel`      |    Reemplaza con el nivel, hecho para minijefes    |   `"$minibossLevel Jefe genial"`    | `〖10〗 Jefe genial`                |
| `$bossLevel`          |      Reemplaza con el nivel, hecho para jefes      |     `"$bossLevel Jefe genial"`      | `『10』 Jefe genial`                |
| `$reinforcementLevel` |    Reemplaza con el nivel, hecho para refuerzos    | `"$reinforcementLevel Jefe genial"` | `〔10〕 Jefe genial`                |
| `$eventBossLevel`     | Reemplaza con el nivel, hecho para jefes de evento |   `"$eventBossLevel Jefe genial"`   | `「10」 Jefe genial`                |

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

| Clave   |                      Valores                      | Predeterminado |
|---------|:-------------------------------------------------:|----------------|
| `level` | Números [enteros](#integer) positivos o `dynamic` | `dynamic`      |

`dynamic` se usa para eventos y se ajusta al nivel de los jugadores cercanos en el momento de la aparición del jefe. No
se recomienda para jefes regionales.

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

| Clave   |           Valores            | Predeterminado |
|---------|:----------------------------:|----------------|
| `scale` | [Multiplicador](#multiplier) | `1.0`          |

Al escalar, `1.0` representa el tamaño predeterminado. Para hacer que la entidad sea más grande, aumenta el valor (p.
ej., `1.2`). Para hacer que la entidad sea más pequeña, disminuye el valor (p. ej., `0.8`).

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

Establece qué tipo es el jefe. Esto se usa para mostrar las barras de salud del jefe y otras características.

| Clave      |                Valores                | Predeterminado |
|------------|:-------------------------------------:|----------------|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL`       |

`MINIBOSS`, `BOSS`, `EVENT` harán que el plugin muestre barras de salud cuando los jugadores estén luchando contra estos
tipos de jefe.

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

| Clave              |           Valores            | Predeterminado |
|--------------------|:----------------------------:|----------------|
| `healthMultiplier` | [Multiplicador](#multiplier) | `1.0`          |

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

| Clave              |           Valores            | Predeterminado |
|--------------------|:----------------------------:|----------------|
| `damageMultiplier` | [Multiplicador](#multiplier) | `1.0`          |

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
Si deseas [disfrazar]($language$/elitemobs/libsdisguises.md) al jefe, pero quieres que siga siendo un bebé mientras está
disfrazado (asegúrate de que la entidad disfrazada también admita la variante bebé), puedes usar esta configuración:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clave    |     Valores      | Predeterminado |
|----------|:----------------:|----------------|
| `isBaby` | `true` / `false` | `false`        |

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

Establece la armadura del jefe. No todos los modelos de Minecraft pueden mostrar armadura. La armadura del jefe es
puramente cosmética y no afecta el juego.

| Clave        |                          Valores                          | Predeterminado |
|--------------|:---------------------------------------------------------:|----------------|
| `helmet`     | [Material](#material), [UUID](https://minecraftuuid.com/) | ninguno        |
| `chestplate` |                   [Material](#material)                   | ninguno        |
| `leggings`   |                   [Material](#material)                   | ninguno        |
| `boots`      |                   [Material](#material)                   | ninguno        |
| `mainHand`   |                   [Material](#material)                   | ninguno        |
| `offHand`    |                   [Material](#material)                   | ninguno        |

**Nota:** Este campo también te permite establecer modelos personalizados para los objetos. Para establecer el ID del
modelo personalizado, agrega el ID después del tipo de material siguiendo este formato: `ITEM_MATERIAL:ID`.
Ejemplo: `DIAMOND_SWORD:1` establece que el jefe lleve una espada de diamante con el modelo personalizado #1 en tu
paquete de texturas.

**Nota 2:** Este campo también te permite establecer colores de cuero personalizados con el
formato `ITEM_MATERIAL:CÓDIGO` donde el código es la representación hexadecimal del color.
Ejemplo: `LEATHER_LEGGINGS:ffa500` crearía unas mallas naranjas. Puedes usar códigos hexadecimales, solo elimina el `#`
del código hexadecimal. Puedes obtener códigos hexadecimales
desde [aquí](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Nota 3:** El campo del casco también te permite establecer cascos de mobs para que sean cabezas de jugador.
Simplemente obtén el UUID de la cabeza de jugador que deseas usar y escríbelo en el campo del casco. *El jugador debe
estar en línea para que esto funcione o la cabeza se establecerá de forma predeterminada a una cabeza genérica de
Minecraft.* Puedes obtener los UUID de los jugadores desde [aquí](https://minecraftuuid.com/).

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

| Clave    |             Valores              | Predeterminado |
|----------|:--------------------------------:|----------------|
| `powers` | Consulta la lista a continuación | ninguno        |

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

*Nota: Puedes consultar [esta página]($language$/elitemobs/premade_powers.md) si deseas ver una lista de poderes
prefabricados que puedes usar.*

***

### Configuración intermedia: Generación de refuerzos

Los refuerzos también van en la categoría de poderes, usando la siguiente configuración:

<details> 

<summary><b>Configuración de refuerzos</b></summary>

| Clave          |                                                                          Descripción                                                                           |                                                                                                                                Valores                                                                                                                                 | Predeterminado |
|----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `summonType`   |                                                      Qué activa la generación de refuerzos. Obligatorio.                                                       |                                                                                                                    Consulta la lista a continuación                                                                                                                    | ninguno        |
| `filename`     |                                             Nombre de archivo del jefe que se generará como refuerzo. Obligatorio.                                             |                                                                                                                           [Cadena](#string)                                                                                                                            | ninguno        |
| `chance`       |                                                      Posibilidad de que se genere el refuerzo. Opcional.                                                       |                                                                                                                            [Doble](#double)                                                                                                                            | `1.0`          |
| `amount`       |                                                 Establece la cantidad de refuerzos que se generarán. Opcional.                                                 |                                                                                                                           [Entero](#integer)                                                                                                                           | `1`            |
| `inheritAggro` |                                                    Hace que el refuerzo herede el aggro del jefe. Opcional.                                                    |                                                                                                                            `true` / `false`                                                                                                                            | `false`        |
| `spawnNearby`  |                                         Hace que los refuerzos aparezcan en un radio de 30 bloques del jefe. Opcional.                                         |                                                                                                                            `true` / `false`                                                                                                                            | `false`        |
| `inheritLevel` |                                                    Hace que el refuerzo herede el nivel del jefe. Opcional                                                     |                                                                                                                            `true` / `false`                                                                                                                            | `false`        |
| `customSpawn`  | Hace que el refuerzo se genere usando el [sistema de generación personalizado]($language$/elitemobs/creating_spawns.md). Solo se usa para `summonType: GLOBAL` 
| `location`     |                                                               Ubicación de generación. Opcional.                                                               | `nombre_del_mundo,x,y,z` o `x,y,z` para una ubicación relativa al jefe. El desplazamiento es relativo a la ubicación de generación para los jefes regionales. También puedes usar `same_as_boss` para hacer que los refuerzos aparezcan en el mismo mundo que el jefe. | ninguno        |
| `lightningRod` |            Ajuste especial para `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Hace que los cristales del end generen rayos a su alrededor. Opcional.            |                                                                                                                            `true` / `false`                                                                                                                            | ninguno        |

</details>

Los tipos de invocación establecen las condiciones para la generación de refuerzos. La siguiente es una lista de los
tipos de invocación válidos:

<details> 

<summary><b>Tipos de invocación</b></summary>

| Valor                           |                                                                                  Descripción                                                                                  |
|---------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE`                          |                                                   Solo genera los refuerzos una vez, la primera vez que el jefe es dañado.                                                    |
| `ON_HIT`                        |                                                                       Genera los refuerzos al golpear.                                                                        |
| `ON_COMBAT_ENTER`               |                                                             Genera los refuerzos cuando el jefe entra en combate.                                                             |
| `GLOBAL`                        | Genera un refuerzo por cada jugador en línea. Requiere que la clave `customSpawn` tenga un [spawn personalizado]($language$/elitemobs/creating_spawns.md) válido establecido. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                               Coloca refuerzos de cristal del end al entrar en combate, solo para su uso con peleas de dragones personalizadas.                               |

</details>

Ten en cuenta que también es posible generar refuerzos a través
de [Elite Scripts]($language$/elitemobs/creating_powers.md), por lo que hay formas más personalizables de generar
refuerzos.

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

### Configuración experta: creación de tus propios poderes

Es posible crear tus propios poderes, ya sea en el propio archivo del jefe o como un nuevo archivo de configuración en
la carpeta de poderes. Puedes obtener más información al respecto [aquí]($language$/elitemobs/creating_powers.md).

### Limitación de poderes según la dificultad de la mazmorra con instancia

Las [mazmorras con instancia]($language$/elitemobs/dungeons.md&section=instanced-dungeons) pueden tener ajustes de
dificultad, y es posible hacer que un poder específico solo se habilite para dificultades específicas.

<details> 

<summary><b>Opciones de limitación de poder</b></summary>

<div align="left">

| Clave          |                                            Descripción                                             |      Valores      | Predeterminado |
|----------------|:--------------------------------------------------------------------------------------------------:|:-----------------:|----------------|
| `filename`     |                                    Nombre de archivo del poder.                                    | [Cadena](#string) | ninguno        |
| `difficultyID` | Nombre de la dificultad, que coincide con el nombre de la dificultad en el paquete de la mazmorra. | [Cadena](#string) | ninguno        |

</div>

</details>

Esto solo se aplicará a las mazmorras con instancia.

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

Establece el mensaje que se enviará cuando aparezca el jefe. Requiere configurar
el [announcementPriority](#announcementPriority).

| Clave          |                        Valores                        | Predeterminado |
|----------------|:-----------------------------------------------------:|----------------|
| `spawnMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno        |

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

Establece la lista de mensajes que se enviarán cuando el jefe muera. Requiere configurar
el [announcementPriority](#announcementPriority).

| Clave           |                                             Valores                                              | Predeterminado |
|-----------------|:------------------------------------------------------------------------------------------------:|----------------|
| `deathMessages` | [Cadenas](#string), [códigos de color](#color_codes) y los marcadores de posición a continuación | ninguno        |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4¡El jefe de prueba ha sido asesinado!'
- '&c&l    1er atacante: $damager1name &c¡con $damager1damage de daño!'
- '&6&l    2do atacante: $damager2name &6¡con $damager2damage de daño!'
- '&e&l    3er atacante: $damager3name &e¡con $damager3damage de daño!'
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

| Valor             |                    Descripción                     |
|-------------------|:--------------------------------------------------:|
| `$damager1name`   |          El nombre del atacante principal          |
| `$damager2name`   |      El nombre del segundo atacante principal      |
| `$damager3name`   |      El nombre del tercer atacante principal       |
| `$damager1damage` |     La cantidad de daño del atacante principal     |
| `$damager2damage` | La cantidad de daño del segundo atacante principal |
| `$damager3damage` | La cantidad de daño del tercer atacante principal  |
| `$players`        |      Muestra una lista de todos los atacantes      |

</details>

### onKillMessage

Establece el mensaje que se enviará cuando el jefe mate a un jugador. Requiere configurar
el [announcementPriority](#announcementPriority).

| Clave           |                        Valores                        | Predeterminado |
|-----------------|:-----------------------------------------------------:|----------------|
| `onKillMessage` | [Cadenas](#string) y [códigos de color](#color_codes) | ninguno        |

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

Establece el tamaño del jefe slime, pero solo funciona para slimes y cubos de magma.

</div>

| Clave       |      Valores       | Predeterminado |
|-------------|:------------------:|----------------|
| `slimeSize` | [Entero](#integer) | `4`            |

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

Establece si el jefe aparecerá como neutral o no. Esto solo se aplica a los tipos de entidades que pueden ser neutrales,
como los lobos o los gólems de hierro.

</div>

| Clave     |       Valores        | Predeterminado |
|-----------|:--------------------:|----------------|
| `neutral` | [Booleano](#boolean) | `false`        |

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

Establece la cantidad de tiempo, en minutos, antes de que el jefe personalizado desaparezca.

| Clave     |                Valores                 | Predeterminado |
|-----------|:--------------------------------------:|----------------|
| `timeout` | Tiempo (en minutos) [Entero](#integer) | `0`            |

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

Establece si el jefe puede sobrevivir a la descarga de un fragmento. Solo se recomienda para jefes de eventos.

| Clave          |     Valores      | Predeterminado |
|----------------|:----------------:|----------------|
| `isPersistent` | `true` / `false` | `false`        |

<details>
```
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

| Clave             |        Valores        | Predeterminado |
|-------------------|:---------------------:|----------------|
| `damageModifiers` | [Material](#material) | ninguno        |

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

Modifica el daño y la salud máxima del jefe para que coincidan con los valores de la entidad normalizada
en `~/plugins/EliteMobs/mobproperties`. Este es el valor predeterminado para los jefes regionales para garantizar una
curva de dificultad fluida.

| Clave              |     Valores      | Predeterminado |
|--------------------|:----------------:|----------------|
| `normalizedCombat` | `true` / `false` | `false`        |

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

Establece el mensaje que se transmite a los jugadores cuando el jefe escapa a través del mecanismo
de [tiempo de espera](#timeout). Requiere que se configure [announcementPriority](#announcementPriority).

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|----------------|
| `escapeMessage` | [Cadena](#string) | ninguno        |

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

Establece el mensaje que se muestra en la barra de jefe. Esto se usa para rastrear tanto la salud del jefe personalizado
como su ubicación en el servidor. Requiere que se configure [annoucementPriority](#annoucementPriority).

| Clave             |                                                     Valores                                                     | Predeterminado |
|-------------------|:---------------------------------------------------------------------------------------------------------------:|----------------|
| `locationMessage` | [Cadena](#string), [códigos de color](#color_codes) y los marcadores de posición que se enumeran a continuación | ninguno        |

Marcadores de posición:

| Valor       |                                                     Descripción                                                      |
|-------------|:--------------------------------------------------------------------------------------------------------------------:|
| `$distance` | Se reemplaza con la distancia a la que se encuentra el jugador del jefe personalizado. Esta es la opción preferible. |
| `$location` |                      Se reemplaza con las coordenadas de ubicación x y z del jefe personalizado                      |

<details>


<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Jefe genial: ¡En $location a solo $distance bloques de distancia!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Esto mostraría algo como `Jefe genial: ¡En 414,55,347 a solo 10 bloques de distancia!`

</details>

***

### uniqueLootList

Establece los [objetos personalizados]($language$/elitemobs/creating_items.md) que se obtienen del jefe.

| Clave            |        Valores        | Predeterminado |
|------------------|:---------------------:|----------------|
| `uniqueLootList` | [Lista](#string_list) | ninguno        |

Las entradas de botín en el botín personalizado siguen el formato de tabla de
botín. [¡Información sobre esto aquí!]($language$/elitemobs/loot_tables.md) Ten en cuenta que algunos archivos más
antiguos podrían estar usando tablas de botín obsoletas que se ven diferentes al ejemplo.

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

Establece si el jefe soltará botín de EliteMobs, excluyendo los objetos en [`uniqueLootList`](#uniqueLootList). Incluye
monedas.

| Clave                |     Valores      | Predeterminado |
|----------------------|:----------------:|----------------|
| `dropsEliteMobsLoot` | `true` / `false` | `true`         |

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

Establece si el jefe personalizado soltará el botín vainilla generalmente asociado a su tipo de mob vainilla.

| Clave              |     Valores      | Predeterminado |
|--------------------|:----------------:|----------------|
| `dropsVanillaLoot` | `true` / `false` | `true`         |

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

Establece si el jefe personalizado soltará botín generado por procedimientos de EliteMobs. No incluye monedas élite.

| Clave             |     Valores      | Predeterminado |
|-------------------|:----------------:|----------------|
| `dropsRandomLoot` | `true` / `false` | `true`         |

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

| Clave    |                                                                                   Valores                                                                                    | Predeterminado |
|----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `trails` | [Partículas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) o [materiales de objetos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ninguno        |

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

Establece el mensaje que muestra el mob jefe cuando golpea a un jugador. Esta es una lista, y la que se usa se elige al
azar de la lista.

| Clave              |        Valores        | Predeterminado |
|--------------------|:---------------------:|----------------|
| `onDamageMessages` | [Lista](#string_list) | ninguno        |

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

Establece el mensaje que muestra el mob jefe cuando un jugador lo daña. Esta es una lista, y la que se usa se elige al
azar de la lista.

| Clave               |        Valores        | Predeterminado |
|---------------------|:---------------------:|----------------|
| `onDamagedMessages` | [Lista](#string_list) | ninguno        |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "¡Me golpeaste!"
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

| Clave               |                                                                       Valores                                                                       | Predeterminado |
|---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------:|----------------|
| `onDamagedMessages` | [Nombre de archivo del jefe para montar](#filename) o [tipo de entidad](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | ninguno        |

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

Nota: Los jefes regionales compartirán su correa con la entidad que estén montando, lo que significa que ambos serán
arrastrados de vuelta a la ubicación de aparición si exceden la distancia permitida por su correa.

***

### announcementPriority

Establece el nivel de prioridad para los anuncios. Las prioridades más bajas significan que no se hacen anuncios, las
prioridades más altas pueden anunciar no solo en el chat, sino también en Discord si está configurado.

| Clave                  |      Valores       | Predeterminado |
|------------------------|:------------------:|----------------|
| `announcementPriority` | [Entero](#integer) | `1`            |

Aquí hay una lista de lo que hacen las prioridades:

| Valor |                                                                                       Descripción                                                                                        |
|-------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0`   |                                                            El jefe estará completamente en silencio, sin mensajes de anuncio.                                                            |
| `1`   |                             Este es el valor predeterminado. Los jefes pueden enviar mensajes de chat, mensaje de aparición, mensajes de muerte y de escape.                             |
| `2`   |                                   Además de las cosas en `1`, el jefe se configurará para que los jugadores puedan rastrearlo a través del menú `/em`.                                   |
| `3`   | Además de las cosas en `2`, los mensajes de difusión se reflejarán en Discord si están configurados. [Información de configuración de Discord aquí.]($language$/elitemobs/discordsrv.md) |

Aquí hay un ejemplo de un jefe que es rastreable, puede enviar mensajes de aparición/muerte/escape en el chat y en
Discord:

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Nota**: Tendrás que configurar spawnMessage, deathMessage/deathMessages, escapeMessage para los anuncios de chat y
Discord y locationMessage para la función de seguimiento si deseas usar el nivel de prioridad de anuncio
correspondiente.

***

### followDistance

Establece la distancia a la que los jefes se enfurecen y entran en combate.

| Clave            |     Valores      | Predeterminado                                        |
|------------------|:----------------:|-------------------------------------------------------|
| `followDistance` | [Doble](#double) | ninguno, usa los valores predeterminados de Minecraft |

Nota 1: Los jefes regionales tienen la mitad de la `followDistance` cuando están fuera de combate. Esto es para que no
se enfurezcan desde demasiado lejos, lo que puede causar problemas de combate molestos debido a las restricciones de la
correa.

Nota 2: Cuanto mayor sea la `followDistance`, más intensivo se vuelve el jefe para la CPU del servidor. ¡Úsalo con
cuidado y responsabilidad!

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Establece un rango de 30 bloques donde si un jugador se acerca a esa distancia al jefe, comenzará a perseguir/atacar al
jugador.

</details>

***

### onDeathCommands

Establece la lista de comandos que se ejecutarán cuando muera un jefe personalizado.

| Clave             |        Valores        | Predeterminado |
|-------------------|:---------------------:|----------------|
| `onDeathCommands` | [Lista](#string_list) | ninguno        |

La lista admite los siguientes marcadores de posición:

| Valor           |                                                                               Descripción                                                                               |
|-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `$level`        |                                                              Marcador de posición para el nivel del jefe.                                                               |
| `$name`         |                                                              Marcador de posición para el nombre del jefe.                                                              |
| `$chance=x$`    |                                                         Hace que un comando tenga la posibilidad de ejecutarse.                                                         |
| `$players`      | Hace que el comando se ejecute una vez por cada jugador en la lista de atacantes y se reemplaza cada vez con el nombre de usuario de un jugador diferente en esa lista. |
| `$locationX`    |                                                            Coordenada X del jefe en el momento de la muerte.                                                            |
| `$locationY`    |                                                            Coordenada Y del jefe en el momento de la muerte.                                                            |
| `$locationZ`    |                                                            Coordenada Z del jefe en el momento de la muerte.                                                            |
| `$damager1name` |                                                                Nombre de usuario del atacante principal                                                                 |
| `$damager2name` |                                                            Nombre de usuario del segundo atacante principal                                                             |
| `$damager3name` |                                                             Nombre de usuario del tercer atacante principal                                                             |

Echa un vistazo al ejemplo de abajo para entender mejor cómo funcionan.

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

Si Jugador1, Jugador2 y Jugador3 dañaron al jefe antes de matarlo, esto es lo que la consola emitirá como resultado del
comando:

<div align="left">

```
say Jugador1 ha matado a NombreDeJefePersonalizado! ¡Ese era el nivel X!
say Jugador2 ha matado a NombreDeJefePersonalizado! ¡Ese era el nivel X!
say Jugador3 ha matado a NombreDeJefePersonalizado! ¡Ese era el nivel X!
```

</div>

Además, existe un 50% de posibilidades de que también se emita lo siguiente:

<div align="left">

```
say ¡Qué muerte!
```

</div>

</details> 

***

### onSpawnCommands

Establece la lista de comandos que se ejecutarán cuando aparezca el jefe.

| Clave             |        Valores        | Predeterminado |
|-------------------|:---------------------:|----------------|
| `onSpawnCommands` | [Lista](#string_list) | ninguno        |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de
los atacantes no se aplicarán ya que no habrá ningún atacante en este momento.

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

| Clave                   |        Valores        | Predeterminado |
|-------------------------|:---------------------:|----------------|
| `onCombatEnterCommands` | [Lista](#string_list) | ninguno        |

**¡Esto usa los mismos marcadores de posición que [onDeathCommands](#onDeathCommands)!** Los marcadores de posición de
los atacantes no se aplicarán ya que no habrá ningún atacante en este momento.

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

Establece la lista de comandos que se ejecutarán cuando el jefe salga del combate.

| Clave                   |        Valores        | Predeterminado |
|-------------------------|:---------------------:|----------------|
| `onCombatLeaveCommands` | [Lista](#string_list) | ninguno        |

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

| Clave                |      Valores      | Predeterminado |
|----------------------|:-----------------:|----------------|
| `disguise`           | [Cadena](#string) | ninguno        |
| `customDisguiseData` | [Cadena](#string) | ninguno        |

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

Establece un disfraz personalizado de skindex. [Consulta esta página]($language$/elitemobs/libsdisguises.md) para
aprender cómo formatear correctamente estos datos.

</details>

***

### customModel

Establece el modelo personalizado para usar, si tienes un modelo personalizado y
ModelEngine. [Más información aquí.]($language$/elitemobs/custom_models.md)

| Clave         |      Valores      | Predeterminado |
|---------------|:-----------------:|----------------|
| `customModel` | [Cadena](#string) | ninguno        |

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

Establece si el jefe puede moverse. Los jefes congelados todavía pueden atacar.
</br>*Nota: esto podría no funcionar en algunas entidades.*

| Clave    |     Valores      | Predeterminado |
|----------|:----------------:|----------------|
| `frozen` | `true` / `false` | `false`        |

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

Establece la música que reproducirá un jefe, comenzando cuando aparezca. Requiere que el archivo .ogg de la canción esté
en el paquete de recursos.

| Clave  |      Valores      | Predeterminado |
|--------|:-----------------:|----------------|
| `song` | [Cadena](#string) | ninguno        |

**Nota: El ajuste `song` requiere que se establezca `followDistance`, ya que `followDistance` determina el rango en el
que la canción comienza a reproducirse.**
Echa un vistazo al ejemplo sobre cómo establecer la `length` (milisegundos) de la `song`.

<details> 

<summary><b>Ejemplo</b></summary>

Hay dos formas de configurar las canciones. Aquí está la primera:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Esto reproducirá la canción ice_queen.idle durante 76370 milisegundos y luego la repetirá. Ten en cuenta que la
ubicación de la canción está determinada por el paquete de recursos.

Aquí está la segunda forma de configurar las canciones:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Esto reproducirá la canción ice_queen.end_transition durante 14328 milisegundos y luego hará la transición a
ice_queen.end_loop durante 28657 milisegundos y repetirá end_loop.

Esto permite a los jefes tener una canción de "introducción" o "transición" y luego una pista principal que se repite.

</div>

</details>

***

### cullReinforcements

Establece si los refuerzos del jefe se eliminarán cuando el jefe muera.

| Clave                |     Valores      | Predeterminado |
|----------------------|:----------------:|----------------|
| `cullReinforcements` | `true` / `false` | `true`         |

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

| Clave                    |     Valores      | Predeterminado |
|--------------------------|:----------------:|----------------|
| `movementSpeedAttribute` | [Doble](#double) | ninguno        |

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

Los jefes pueden tener fases que cambian cuando el jefe alcanza un cierto porcentaje de salud. Cuando esto sucede, el
jefe comienza a usar un archivo de configuración diferente, lo que significa que todo sobre el jefe puede cambiar,
incluyendo cosas como el tipo de entidad.
</br>Para obtener más información sobre las fases de jefe, haz
clic [aquí]($language$/elitemobs/creating_boss_phases.md).

| Clave                |                     Descripción                     | Valores               | Predeterminado |
|----------------------|:---------------------------------------------------:|-----------------------|----------------|
| `phases`             | Establece las fases que tendrá el jefe. Obligatorio | [Lista](#string_list) | ninguno        |
| `phaseSpawnLocation` |  Establece dónde aparece el jefe de fase. Opcional  | [Cadena](#string)     | ninguno        |

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

Este jefe cambiaría al archivo de configuración `phase_2_boss.yml` con un 60 % de salud y al archivo de
configuración `phase_3_boss.yml` con un 30 % de salud en el mismo mundo que la fase 2 y en las coordenadas x=10, y=64 y
z=100. El tipo de entidad y el nombre del jefe también cambiarían.

El formato para una entrada es `nombre de archivo:porcentajeDeSalud`.

phaseSpawnLocation es opcional, si no está configurado, el jefe cambiará de fase donde esté parado.

</details>

Las siguientes cosas son importantes saberlas al diseñar un jefe de fase:

<div align="left">

- El archivo de configuración para la primera fase establece todas las fases del jefe.
- La amenaza/daño contado se mantiene entre fases para los jugadores.
- El cambio de fases se basa en el porcentaje de salud perdida, que se conserva al cambiar a una fase diferente. Esto
  significa que aumentar o disminuir el multiplicador de salud entre fases no curará ni dañará al jefe, seguirá
  cambiando con el mismo porcentaje, pero tendrá más o menos salud para esa fase.
- Los jefes de fase vuelven a la fase 1 si salen del combate.
- Los jefes de fase que también son jefes regionales comparten el mismo radio de correa y el mismo mecanismo de tiempo
  de espera en todas las fases, y volverán a aparecer como el jefe de la fase 1 cuando termine el temporizador.
- El archivo de configuración para la última fase establece el botín para el jefe.
- Las fases no se pueden saltar: el daño excesivo seguirá haciendo que el jefe cambie de fase en el porcentaje definido.
- Los jefes de fase que tienen monturas dejan de estar montados al cambiar de fase.

</div>

</div>

</div>

***

## Jefes regionales

<div align="center">

Los jefes regionales son un tipo específico de jefes personalizados que aparecen en una ubicación específica configurada
y pueden reaparecer en esa ubicación después de un retraso. Además, pueden tener correas que aseguren que permanezcan en
una zona específica, entre otras características.

Estos se utilizan para todo el contenido de las mazmorras. Para obtener más información sobre los jefes regionales, haz
clic [aquí]($language$/elitemobs/creating_world_bosses.md).

| Clave                 |                                                    Descripción                                                     |                                      Valores                                      | Predeterminado |
|-----------------------|:------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|----------------|
| `isRegionalBoss`      |                 Establece si el jefe es regional. Debe ser verdadero si quieres un jefe regional.                  |                                 `true` / `false`                                  | `false`        |
| `spawnLocation`       |                                  Establece las ubicaciones de aparición del jefe.                                  | ¡Añade estas a través del comando `/em addSpawnLocation [nombre_de_archivo.yml]`! | ninguno        |
| `spawnCooldown`       |                  Establece el tiempo de reutilización de reaparición del jefe, en <b>minutos</b>.                  |                                [Entero](#integer)                                 | `0`            |
| `leashRadius`         | Establece la distancia a la que el jefe puede alejarse de su punto de aparición antes de ser arrastrado de vuelta. |                                 [Doble](#double)                                  | ninguno        |
| `onSpawnBlockStates`  |                           Establece los bloques que el jefe modificará cuando aparezca.                            |                       Consulta los comandos a continuación                        | ninguno        |
| `onRemoveBlockStates` |                          Establece los bloques que el jefe modificará cuando desaparezca.                          |                       Consulta los comandos a continuación                        | ninguno        |

Como se indica, los jefes regionales pueden tener `onSpawnBlockStates` y `onRemoveBlockStates`.

Esta es una característica muy útil para modificar las arenas de combate durante el combate, especialmente cuando se
combina con los cambios de fase, ya que se hace posible abrir y cerrar las arenas de combate cambiando los estados de
los bloques.

El formato para estos es demasiado complejo para escribirlo manualmente, por lo que existen algunos comandos para
ayudarte a configurarlos:

| Comando                                                                  |                                                   Descripción                                                   |
|--------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove]         | Comienza a registrar las selecciones manuales de bloques para los estados de bloques al aparecer o al eliminar. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove]     |                             Edita los estados de bloque al aparecer o al eliminar.                              |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove]     |          Permite a los administradores seleccionar grandes áreas de bloques para guardar como estados.          |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] |            Permite a los administradores editar grandes áreas de bloques para guardar como estados.             |

<details> 

<summary><b>Ejemplo de uso:</b></summary>

<div align="left">

Digamos que quieres hacer una pelea en la que un jefe aparece en una arena que tiene una puerta abierta, y quieres hacer
que la puerta se cierre cuando comience la pelea y se vuelva a abrir cuando termine la pelea.

Para hacer esto, necesitarás dos fases de jefe y registrar tres conjuntos diferentes de estados de bloques. Para este
ejemplo, nombraré estas fases phase_1_boss.yml y phase_2_boss.yml respectivamente.

1) Utiliza `/em registerblocks phase_1_boss.yml on_spawn` o `/em registerblocksedit phase_1_boss.yml on_spawn` para
   registrar los bloques de la puerta en su estado abierto.

Esto significa registrar los bloques de aire. Aquí se recomienda la selección de área.

Esto es necesario para asegurar que la puerta esté abierta cuando aparezca el jefe, por lo que se garantiza que los
jugadores tengan una forma de entrar.

2) Utiliza `/em registerblocks phase_2_boss.yml on_spawn` o `/em registerblocksedit phase_2_boss.yml on_spawn` para
   registrar los bloques de la puerta en su estado cerrado.

Esto significa registrar los bloques sólidos de la puerta que impedirían que el jugador saliera.

Esto es necesario para cambiar la puerta a sólida cuando el jefe entra en la fase 2, impidiendo que los jugadores
salgan.

3) Utiliza `/em registerblocks phase_2_boss.yml on_remove` o `/em registerblocksedit phase_2_boss.yml on_remove` para
   registrar los bloques de la puerta en su estado abierto.

Esto significa registrar los mismos bloques del primer paso de nuevo (los bloques de aire).

Esto es necesario para abrir la puerta cuando el jefe muere, permitiendo a los jugadores salir de la arena.

</div>

</details>

</div>

***

### alert

<div align="center">

Establece si el jefe está alerta. De forma predeterminada, los jefes regionales se ralentizan y tienen una distancia de
aggro más corta cuando están fuera de combate. Esta configuración evita que los jefes regionales se ralenticen y tengan
una distancia de aggro más corta mientras están fuera de combate, por lo que siempre se comportarán de la misma manera
dentro o fuera del combate.

</div>

| Clave   |       Valores        | Predeterminado |
|---------|:--------------------:|----------------|
| `alert` | [Booleano](#boolean) | `true`         |

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

Establece si el jefe regional se eliminará permanentemente después de ser asesinado. Esto es lo que usa BetterStructures
para los Santuarios, donde el jefe regional solo está diseñado para ser combatido una vez y nunca más en esa ubicación.

</div>

| Clave              |       Valores        | Predeterminado |
|--------------------|:--------------------:|----------------|
| `removeAfterDeath` | [Booleano](#boolean) | `false`        |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Jefes con instancia

<div align="center">

Los jefes con instancia son un subtipo de jefes regionales utilizados en mazmorras con instancia.

| Clave       |                           Descripción                            | Valores          | Predeterminado |
|-------------|:----------------------------------------------------------------:|------------------|----------------|
| `instanced` | Hace que el jefe personalizado tenga una instancia. Obligatorio. | `true` / `false` | `false`        |

Establecer que los jefes tengan instancia es obligatorio para que las mazmorras con instancia funcionen correctamente.
También recomendamos quitar las correas para cualquier jefe con instancia.

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
