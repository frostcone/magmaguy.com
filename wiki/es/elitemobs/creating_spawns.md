[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las Apariciones Personalizadas?

Las Apariciones Personalizadas son utilizadas por los Eventos y los refuerzos globales para establecer cómo, dónde y
cuándo un evento debe hacer aparecer al jefe de ese evento.

Los eventos y los refuerzos globales establecen qué aparición están usando al escribir el nombre del archivo.

# Creando Apariciones Personalizadas

Las Apariciones Personalizadas se guardan en la carpeta `customspawns`. Una Aparición Personalizada puede ser usada por
varios eventos al mismo tiempo, por lo que no tienes que crear una por evento.

Aquí hay un ejemplo de Aparición Personalizada:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Haciendo una Aparición en Cualquier Lugar

Para hacer una aparición que pueda ocurrir **en cualquier lugar**, tu configuración debería ser similar a la siguiente:

```yml
isEnabled: true
canSpawnInLight: true
```

Esta configuración permite que los mobs aparezcan en cualquier lugar, en cualquier mundo, en cualquier momento y durante
cualquier fase lunar.

Si estás interesado en crear una aparición más personalizada, sigue leyendo a continuación.

## Valores

<div align="center">

***

### isEnabled

Establece si la aparición está habilitada.

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

| Clave          |      Valores      | Predeterminado |
|----------------|:-----------------:|:--------------:|
| `lowestYLevel` | [Entero](#entero) |      `0`       |

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

Establece el nivel y (altura del mapa) más alto utilizado.

| Clave           |      Valores      | Predeterminado |
|-----------------|:-----------------:|:--------------:|
| `highestYLevel` | [Entero](#entero) |     `320`      |

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

Establece la lista de los mundos donde puede ocurrir la aparición personalizada. Esta configuración se puede omitir para
permitir que **todos** tus mundos sean válidos.

| Clave         |                Valores                | Predeterminado |
|---------------|:-------------------------------------:|:--------------:|
| `validWorlds` | [Lista de Cadenas](#lista_de_cadenas) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorlds:
- MUNDO
- TIERRA_DIVERTIDA
```

*Si quieres que todos tus mundos sean válidos, puedes simplemente no usar la configuración o formatearla así:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Establece la lista de entornos de mundo válidos donde puede ocurrir la aparición personalizada. Esta configuración se
puede omitir para permitir que **todos** los entornos sean válidos.

| Clave                    |                                         Valores                                         | Predeterminado |
|--------------------------|:---------------------------------------------------------------------------------------:|:--------------:|
| `validWorldEnvironments` | [Lista de Entornos](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- PLANO
- BIOMAS_GRANDES
```

*Si quieres que todos los entornos sean válidos, puedes simplemente no usar la configuración o formatearla así:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Establece la lista de biomas válidos donde puede ocurrir la aparición personalizada. Esta configuración se puede omitir
para permitir que **todos** los biomas sean válidos.

| Clave         |                                         Valores                                         | Predeterminado |
|---------------|:---------------------------------------------------------------------------------------:|:--------------:|
| `validBiomes` | [Lista de Biomas](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |    ninguno     |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
validBiomes:
- DESIERTO
- CAMPOS_DE_SETA
```

*Si quieres que todos los entornos sean válidos, puedes simplemente no usar la configuración o formatearla así:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Establece la hora más temprana dentro del juego en la que puede ocurrir la aparición personalizada.

| Clave          |      Valores      | Predeterminado |
|----------------|:-----------------:|:--------------:|
| `earliestTime` | [Entero](#entero) |      `0`       |

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

Establece la hora más tardía dentro del juego en la que puede ocurrir la aparición personalizada.

| Clave        |      Valores      | Predeterminado |
|--------------|:-----------------:|:--------------:|
| `latestTime` | [Entero](#entero) |    `24000`     |

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

Establece la hora más temprana dentro del juego en la que puede ocurrir la aparición personalizada.

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

<summary><b>Expandir Tabla</b></summary>

| Fase Lunar         | Vista Previa |
|--------------------|:------------:|
| `LUNA_NUEVA`       |      🌑      |
| `LUNA_CRECIENTE`   |      🌒      |
| `CUARTO_CRECIENTE` |      🌓      |
| `GIBOSA_CRECIENTE` |      🌔      |
| `LUNA_LLENA`       |      🌕      |
| `GIBOSA_MENGUANTE` |      🌖      |
| `CUARTO_MENGUANTE` |      🌘      |

</details>

***

### bypassWorldGuard

Establece si la aparición personalizada evitará los sistemas de protección como WorldGuard.

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

Especifica si la aparición personalizada puede ocurrir en bloques iluminados por fuentes de luz.

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

Establece si la aparición personalizada solo puede ocurrir en la superficie de un mundo.

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

Establece si la aparición personalizada solo puede ocurrir bajo tierra.

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
