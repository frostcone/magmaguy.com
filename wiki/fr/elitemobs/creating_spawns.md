[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les apparitions personnalisées ?

Les apparitions personnalisées sont utilisées par les événements et les renforts globaux pour définir comment, où et quand un événement doit faire apparaître le boss pour cet événement.

Les événements et les renforts globaux définissent le lieu d’apparition qu’ils utilisent en écrivant son nom de fichier.

# Créer des apparitions personnalisées

Les apparitions personnalisées vont dans le dossier `customspawns`. Un lieu d’apparition personnalisé peut être utilisé par plusieurs événements en même temps, vous n’avez donc pas à en créer un par événement.

Voici un exemple d’apparition personnalisée :

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Créer une apparition n’importe où
Pour créer une apparition qui peut se produire **n’importe où**, votre configuration doit ressembler à ce qui suit :

```yml
isEnabled: true
canSpawnInLight: true
```
Cette configuration permet aux monstres d’apparaître à n’importe quel endroit, dans n’importe quel monde, à n’importe quel moment et pendant n’importe quelle phase de lune.

Si vous souhaitez créer une apparition plus personnalisée, poursuivez votre lecture ci-dessous.

## Valeurs

<div align="center">

***

### isEnabled

Définit si l’apparition est activée.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booléen](#boolean) | `true`  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### lowestYLevel

Définit le niveau y le plus bas (hauteur de la carte) utilisé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [Entier](#integer) |   `0`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

Définit le niveau y le plus haut (hauteur de la carte) utilisé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [Entier](#integer) |  `320`  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

Définit la liste des mondes où l’apparition personnalisée peut se produire. Ce paramètre peut être omis pour autoriser **tous** vos mondes à être valides.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [Liste de chaînes](#string_list) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si vous souhaitez que tous vos mondes soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Définit la liste des environnements de monde valides où l’apparition personnalisée peut se produire. Ce paramètre peut être omis pour autoriser **tous** les environnements à être valides.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [Liste d’environnements](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*Si vous souhaitez que tous les environnements soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Définit la liste des biomes valides où l’apparition personnalisée peut se produire. Ce paramètre peut être omis pour autoriser **tous** les biomes à être valides.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [Liste de biomes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Si vous souhaitez que tous les environnements soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Définit l’heure la plus ancienne dans le jeu à laquelle l’apparition personnalisée peut se produire.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [Entier](#integer) |   `0`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

Définit l’heure la plus tardive dans le jeu à laquelle l’apparition personnalisée peut se produire.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [Entier](#integer) | `24000` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

Définit la phase de lune pendant laquelle l’apparition personnalisée peut se produire.

| Clé       |   Valeurs    | Par défaut |
|-----------|:-----------:|:-------:|
| `moonPhase` | Spécial [1] | `24000` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**Spécial [1]**

<details> 

<summary><b>Développer le tableau</b></summary>

| Phase de lune        | Aperçu  |
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

Définit si l’apparition personnalisée contournera les systèmes de protection tels que WorldGuard.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [Booléen](#boolean) | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

Spécifie si l’apparition personnalisée peut se produire sur des blocs éclairés par des sources lumineuses.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [Booléen](#boolean) | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

Définit si l’apparition personnalisée ne peut se produire qu’à la surface d’un monde.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [Booléen](#boolean) | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

Définit si l’apparition personnalisée ne peut se produire que sous terre.

| Clé       |           Valeurs            | Par défaut |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [Booléen](#boolean) | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
