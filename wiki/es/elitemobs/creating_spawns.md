[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los Spawns personalizados?

Los Spawns personalizados son utilizados por los eventos y refuerzos globales para establecer cómo, dónde y cuándo un evento debería generar el jefe para ese evento.

Los eventos y refuerzos globales establecen qué spawn están utilizando escribiendo su nombre de archivo.

# Creando Spawns Personalizados

Los Spawns personalizados se introducen en la carpeta `customspawns`. Un Spawn personalizado puede ser utilizado por varios eventos al mismo tiempo, por lo que no tienes que crear uno por evento.

Aquí hay un ejemplo de Spawn personalizado:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Creando un Spawn que puede ocurrir En cualquier lugar
Para crear un spawn que puede ocurrir **en cualquier lugar**, tu configuración debería parecerse a lo siguiente:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuración permite a los mobs spawnear en cualquier lugar, en cualquier mundo, en cualquier momento, y durante cualquier fase lunar.

Si estás interesado en crear un spawn más personalizado, sigue leyendo a continuación.

## Valores

<div align="center">

***

### isEnabled

Establecer si el spawn está habilitado.

| Clave     | Valores       |   Valor por defecto |
|-----------|:-------------------:|:-------:|
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

### lowestYLevel

Establece el nivel de altura mínimo (altura del mapa) utilizado.

| Clave     | Valores       | Valor por defecto |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Integer](#integer) |   `0`   |

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

Establece el nivel de altura mínimo (altura del mapa) utilizado.

| Clave     | Valores       | Valor por defecto |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Integer](#integer) |  `320`  |

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

Establece la lista de los mundos donde el spawn personalizado puede ocurrir. Esta configuración se puede dejar fuera para permitir que **todos** tus mundos sean válidos.

| Clave     | Valores           | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [String List](#string_list) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si quieres que todos tus mundos sean válidos, puedes simplemente no usar la configuración o darle formato de esta manera:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Establece la lista de entornos de mundo válidos en los que puede ocurrir el spawn personalizado. Esta configuración puede omitirse para permitir que **todos** los entornos sean válidos.

| Clave     | Valores            | Valor por defecto |
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

*Si quieres que todos los entornos sean válidos, puedes simplemente no usar la configuración o darle formato de esta manera:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Establece la lista de biomas válidos en los que puede ocurrir el spawn personalizado. Esta configuración puede omitirse para permitir que **todos** los biomas sean válidos.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [Lista de Biomas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  ninguno   |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Si quieres que todos los biomas sean válidos, puedes simplemente no usar la configuración o darle formato de esta manera:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Establece la hora más temprana en el juego en la que puede ocurrir el spawn personalizado.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Integer](#integer) |   `0`   |

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

Establece la hora más temprana en el juego en la que puede ocurrir el spawn personalizado.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Integer](#integer) | `24000` |

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

Establece la hora más temprana en el juego en la que puede ocurrir el spawn personalizado.

| Clave     |   Valores    | Valor por defecto |
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

<summary><b>Expandir Tabla</b></summary>

| Fase Lunar        | Vista previa  |
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

Establece si el spawn personalizado eludirá los sistemas de protección como WorldGuard.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [Boolean](#boolean) | `false` |

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

Especifica si el spawn personalizado puede ocurrir en bloques iluminados por fuentes de luz.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [Boolean](#boolean) | `false` |

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

Establece si el spawn personalizado solo puede ocurrir en la superficie de un mundo.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [Boolean](#boolean) | `false` |

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

Establece si el spawn personalizado solo puede ocurrir bajo tierra.

| Clave     | Valores       | Valor por defecto |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>