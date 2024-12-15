[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las generaciones personalizadas?

Las generaciones personalizadas son utilizadas por Eventos y refuerzos globales para establecer cómo, dónde y cuándo un evento debe generar al jefe para ese evento.

Los eventos y los refuerzos globales establecen qué generación están usando al escribir su nombre de archivo.

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

Establece el nivel y (altura del mapa) más bajo utilizado.

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

Establece el nivel y (altura del mapa) más bajo utilizado.

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

Establece la lista de mundos donde puede ocurrir la generación personalizada. Esta configuración se puede omitir para permitir que **todos** sus mundos sean válidos.

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

Establece la lista de entornos mundiales válidos donde puede ocurrir la generación personalizada. Esta configuración se puede omitir para permitir que **todos** los entornos sean válidos.

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

Establece la lista de biomas válidos donde puede ocurrir la generación personalizada. Esta configuración se puede omitir para permitir que **todos** los biomas sean válidos.

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

Establece la hora más temprana del juego en la que puede ocurrir la generación personalizada.

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

Establece la hora más temprana del juego en la que puede ocurrir la generación personalizada.

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

Establece la hora más temprana del juego en la que puede ocurrir la generación personalizada.

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

### bypassWorldGuard

Establece si la generación personalizada omitirá los sistemas de protección como WorldGuard.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

Especifica si la generación personalizada puede ocurrir en bloques iluminados por fuentes de luz.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

Establece si la generación personalizada solo puede ocurrir en la superficie de un mundo.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

Establece si la generación personalizada solo puede ocurrir bajo tierra.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [Booleano](#booleano) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
