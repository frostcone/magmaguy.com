[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las generaciones personalizadas?

Las generaciones personalizadas son utilizadas por eventos y refuerzos globales para establecer cómo, dónde y cuándo un evento debe generar el jefe para ese evento.

Los eventos y los refuerzos globales establecen qué generación están utilizando anotando su nombre de archivo.

# Creando generaciones personalizadas

Las generaciones personalizadas van en la carpeta `customspawns`. Varios eventos pueden utilizar una generación personalizada al mismo tiempo, por lo que no tienes que crear una por evento.

Aquí hay un ejemplo de generación personalizada:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Hacer una generación en cualquier lugar
Para hacer una generación que pueda ocurrir **en cualquier lugar**, tu configuración debe ser similar a la siguiente:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuración permite que las turbas aparezcan en cualquier ubicación, en cualquier mundo, en cualquier momento y durante cualquier fase lunar.

Si estás interesado en crear una generación más personalizada, sigue leyendo a continuación.

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

Establece el nivel y más bajo (altura del mapa) utilizado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Entero](#entero) |   `0`   |

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

Establece el nivel y más bajo (altura del mapa) utilizado.

| Clave       |       Valores        | Predeterminado |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Entero](#entero) |  `320`  |

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

Establece la lista de mundos donde puede ocurrir la generación personalizada. Esta configuración se puede omitir para permitir que **todos** tus mundos sean válidos.

| Clave       |           Valores            | Predeterminado |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si quieres que todos tus mundos sean válidos, simplemente no uses la configuración o formatéala así:*

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

*Si quieres que todos los entornos sean válidos, simplemente no uses la configuración o formatéala así:*

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

*Si quieres que todos los entornos sean válidos, simplemente no uses la configuración o formatéala así:*

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
| `earliestTime` | [Entero](#entero) |   `0`   |

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
| `latestTime` | [Entero](#entero) | `24000` |

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


