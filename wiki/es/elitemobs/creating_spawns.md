```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son los Spawns Personalizados?

Los Spawns Personalizados son utilizados por Eventos y refuerzos globales para establecer cómo, dónde y cuándo un evento debe generar al jefe de dicho evento.

Los Eventos y refuerzos globales establecen qué spawn están utilizando escribiendo el nombre de su archivo.

# Creando Spawns Personalizados

Los Spawns Personalizados van en la carpeta `customspawns`. Un Spawn Personalizado puede ser utilizado por varios eventos al mismo tiempo, por lo que no tienes que crear uno por evento.

Aquí tienes un ejemplo de Spawn Personalizado:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Creando un Spawn en Cualquier Lugar
Para crear un spawn que pueda ocurrir **en cualquier lugar**, tu configuración debería parecerse a la siguiente:

```yml
isEnabled: true
canSpawnInLight: true
```
Esta configuración permite que las criaturas aparezcan en cualquier ubicación, en cualquier mundo, en cualquier momento y durante cualquier fase lunar.

Si estás interesado en crear un spawn más personalizado, sigue leyendo a continuación.

## Valores

<div align="center">

***

### isEnabled

Establece si el spawn está habilitado.

| Clave       |       Valores        | Por Defecto |
|-----------|:--------------------:|:-----------:|
| `isEnabled` | [Booleano](#boolean) |   `true`    |

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

Establece el nivel Y más bajo (altura del mapa) utilizado.

| Clave        |       Valores        | Por Defecto |
|--------------|:--------------------:|:-----------:|
| `lowestYLevel` | [Entero](#integer) |     `0`     |

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

Establece el nivel Y más alto (altura del mapa) utilizado.

| Clave         |       Valores        | Por Defecto |
|---------------|:--------------------:|:-----------:|
| `highestYLevel` | [Entero](#integer) |    `320`    |

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

Establece la lista de mundos donde puede ocurrir el spawn personalizado. Esta configuración puede omitirse para permitir que **todos** tus mundos sean válidos.

| Clave         |           Valores            | Por Defecto |
|---------------|:----------------------------:|:-----------:|
| `validWorlds` | [Lista de Cadenas](#string_list) |   ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si quieres que todos tus mundos sean válidos, simplemente puedes no usar la configuración o formatearla así:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Establece la lista de entornos de mundo válidos donde puede ocurrir el spawn personalizado. Esta configuración puede omitirse para permitir que **todos** los entornos sean válidos.

| Clave                  |           Valores            | Por Defecto |
|------------------------|:----------------------------:|:-----------:|
| `validWorldEnvironments` | [Lista de Entornos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |   ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*Si quieres que todos los entornos sean válidos, simplemente puedes no usar la configuración o formatearla así:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Establece la lista de biomas válidos donde puede ocurrir el spawn personalizado. Esta configuración puede omitirse para permitir que **todos** los biomas sean válidos.

| Clave        |           Valores            | Por Defecto |
|--------------|:----------------------------:|:-----------:|
| `validBiomes` | [Lista de Biomas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |   ninguno   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Si quieres que todos los biomas sean válidos, simplemente puedes no usar la configuración o formatearla así:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Establece la hora más temprana dentro del juego en la que puede ocurrir el spawn personalizado.

| Clave          |       Valores        | Por Defecto |
|----------------|:--------------------:|:-----------:|
| `earliestTime` | [Entero](#integer) |     `0`     |

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

Establece la hora más tardía dentro del juego en la que puede ocurrir el spawn personalizado.

| Clave        |       Valores        | Por Defecto |
|--------------|:--------------------:|:-----------:|
| `latestTime` | [Entero](#integer) |   `24000`   |

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

Establece la fase lunar en la que puede ocurrir el spawn personalizado.

| Clave       |   Valores    | Por Defecto |
|-------------|:------------:|:-----------:|
| `moonPhase` | Especial [1] |   `24000`   |

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

| Fase Lunar        | Vista Previa |
|-------------------|:------------:|
| `NEW_MOON`        |      🌑      |
| `WAXING_CRESCENT` |      🌒      |
| `FIRST_QUARTER`   |      🌓      |
| `WAXING_GIBBOUS`  |      🌔      |
| `FULL_MOON`       |      🌕      |
| `WANING_GIBBOUS`  |      🌖      |
| `WANING_CRESCENT` |      🌘      |

</details>

***

### bypassWorldGuard

Establece si el spawn personalizado omitirá sistemas de protección como WorldGuard.

| Clave            |       Valores        | Por Defecto |
|------------------|:--------------------:|:-----------:|
| `bypassWorldGuard` | [Booleano](#boolean) |   `false`   |

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

| Clave           |       Valores        | Por Defecto |
|-----------------|:--------------------:|:-----------:|
| `canSpawnInLight` | [Booleano](#boolean) |   `false`   |

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

| Clave          |       Valores        | Por Defecto |
|----------------|:--------------------:|:-----------:|
| `isSurfaceSpawn` | [Booleano](#boolean) |   `false`   |

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

| Clave              |       Valores        | Por Defecto |
|--------------------|:--------------------:|:-----------:|
| `isUndergroundSpawn` | [Booleano](#boolean) |   `false`   |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
```