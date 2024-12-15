[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las generaciones personalizadas?

Las generaciones personalizadas son utilizadas por Eventos y refuerzos globales para establecer cómo, dónde y cuándo un evento debe generar al jefe para ese evento.

Los eventos y refuerzos globales establecen qué generación están usando escribiendo su nombre de archivo.

# Creación de generaciones personalizadas

Las generaciones personalizadas van a la carpeta `customspawns`. Una generación personalizada puede ser utilizada por varios eventos al mismo tiempo, por lo que no tiene que crear una por evento.

Aquí hay un ejemplo de una generación personalizada:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Creación de una generación en cualquier lugar
Para hacer que una generación pueda ocurrir **en cualquier lugar**, su configuración debe ser similar a la siguiente:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuración permite que los mobs aparezcan en cualquier ubicación, en cualquier mundo, en cualquier momento y durante cualquier fase lunar.

Si está interesado en crear una generación más personalizada, siga leyendo a continuación.

## Valores

<div align="center">

***

### isEnabled

Establece si la generación está habilitada.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
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

### lowestYLevel

Establece el nivel Y (altitud) más bajo utilizado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Entero](#integer) |   `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

Establece el nivel Y (altitud) más bajo utilizado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Entero](#integer) |  `320`  |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

Establece la lista de mundos en los que aparecerá la estructura. **Si no hay una lista presente, utilizará todos los mundos permitidos por el plugin**, a menos que esté limitado de otra manera (como por el tipo de entorno o los biomas).

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [Lista de cadenas](#string_list) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si desea que todos sus mundos sean válidos, simplemente no use la configuración o formatee de esta manera:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Establece la lista de entornos mundiales en los que aparecerá la estructura. **Si no hay una lista presente, utilizará todos los entornos mundiales permitidos por el plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` y `CUSTOM`.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [Lista de entornos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*Si desea que todos los entornos sean válidos, simplemente no use la configuración o formatee de esta manera:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Establece la lista de biomas válidos en los que aparecerá la estructura. **Si no se define una lista, ¡asumirá que todos los biomas son válidos!**.

Esto requiere usar la lista de biomas según lo definido por la [API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [Lista de biomas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Si desea que todos los entornos sean válidos, simplemente no use la configuración o formatee de esta manera:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Establece la hora más temprana del juego en la que aparecerá la estructura.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Entero](#integer) |   `0`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

Establece la hora más reciente del juego en la que aparecerá la estructura.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Entero](#integer) | `24000` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

Establece la hora más reciente del juego en la que aparecerá la estructura.

| Clave       |   Valores    | Predeterminado |
|-----------|:-----------:|:-------:|
| `moonPhase` | Especial [1] | `24000` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

| Fase lunar        | Vista previa  |
|-------------------|:--------:|
| `NEW_MOON`        |    🌑    |
| `WAXING_CRESCENT` |    🌒    |
| `FIRST_QUARTER`   |    🌓    |
| `WAXING_GIBBOUS`  |    🌔    |
| `FULL_MOON`       |    🌕    |
| `WANING_GIBBOUS`  |    🌖    |
| `WANING_CRESCENT` |    🌘    |

</details>

***

# elitemobs-maximum-level

Sets the maximum level of elite mobs that can spawn in a region. Only affects naturally spawned elites (Custom Bosses ignore this). The level must be an integer value (no values like `1.5`, you have to use whole numbers like `1` or `2`).

***

# elitemobs-minimum-level

Sets the minimum level of elite mobs that can spawn in a region. Only affects naturally spawned elites (Custom Bosses ignore this). The level must be an integer value (no values like `1.5`, you have to use whole numbers like `1` or `2`).

***

# elitemobs-dungeon

Sets the area to only allow normal mobs spawned with the CUSTOM spawn reason, as well as Regional Bosses and Custom Bosses. This is for use in minidungeons.
