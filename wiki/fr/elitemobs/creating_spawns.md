[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les Custom Spawns ?

Les Custom Spawns sont utilisés par les Événements et les renforts globaux pour définir comment, où et quand un événement doit faire apparaître le boss de cet événement.

Les Événements et les renforts globaux définissent quel spawn ils utilisent en écrivant son nom de fichier.

# Créer des Custom Spawns

Les Custom Spawns se trouvent dans le dossier `customspawns`. Un Custom Spawn peut être utilisé par plusieurs événements en même temps, vous n'avez donc pas besoin d'en créer un par événement.

Voici un exemple de Custom Spawn :

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Créer un Spawn Partout
Pour créer un spawn qui peut apparaître **partout**, votre configuration devrait ressembler à ceci :

```yml
isEnabled: true
canSpawnInLight: true
```
Cette configuration permet aux mobs d'apparaître à n'importe quel endroit, dans n'importe quel monde, à n'importe quel moment et pendant n'importe quelle phase lunaire.

Si vous souhaitez créer un spawn plus personnalisé, continuez à lire ci-dessous.

## Valeurs

<div align="center">

***

### isEnabled

Définit si le spawn est activé.

| Clé       |       Valeurs        | Défaut |
|-----------|:--------------------:|:------:|
| `isEnabled` | [Booléen](#boolean) | `true` |

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

Définit le niveau Y le plus bas (hauteur de la carte) utilisé.

| Clé       |       Valeurs        | Défaut |
|-----------|:--------------------:|:------:|
| `lowestYLevel` | [Entier](#integer) |  `0`   |

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

Définit le niveau Y le plus haut (hauteur de la carte) utilisé.

| Clé       |       Valeurs        | Défaut |
|-----------|:--------------------:|:------:|
| `highestYLevel` | [Entier](#integer) | `320`  |

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

Définit la liste des mondes où le custom spawn peut avoir lieu. Ce paramètre peut être omis pour permettre à **tous** vos mondes d'être valides.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
| `validWorlds` | [Liste de chaînes de caractères](#string_list) |  aucun |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*Si vous voulez que tous vos mondes soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Définit la liste des environnements de monde valides où le custom spawn peut avoir lieu. Ce paramètre peut être omis pour permettre à **tous** les environnements d'être valides.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
| `validWorldEnvironments` | [Liste d'environnements](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  aucun |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*Si vous voulez que tous les environnements soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Définit la liste des biomes valides où le custom spawn peut avoir lieu. Ce paramètre peut être omis pour permettre à **tous** les biomes d'être valides.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
| `validBiomes` | [Liste de biomes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  aucun |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*Si vous voulez que tous les biomes soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater comme ceci :*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Définit l'heure en jeu la plus précoce à laquelle le custom spawn peut avoir lieu.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
| `earliestTime` | [Entier](#integer) |  `0`   |

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

Définit l'heure en jeu la plus tardive à laquelle le custom spawn peut avoir lieu.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
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

Définit la phase lunaire à laquelle le custom spawn peut avoir lieu.

| Clé       |   Valeurs    | Défaut |
|-----------|:------------:|:------:|
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

| Phase Lunaire     | Aperçu |
|-------------------|:------:|
| `NEW_MOON`        |   🌑   |
| `WAXING_CRESCENT` |   🌒   |
| `FIRST_QUARTER`   |   🌓   |
| `WAXING_GIBBOUS`  |   🌔   |
| `FULL_MOON`       |   🌕   |
| `WANING_GIBBOUS`  |   🌖   |
| `WANING_CRESCENT` |   🌘   |

</details>

***

### bypassWorldGuard

Définit si le custom spawn contournera les systèmes de protection tels que WorldGuard.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
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

Spécifie si le custom spawn peut avoir lieu sur des blocs éclairés par des sources de lumière.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
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

Définit si le custom spawn ne peut avoir lieu qu'à la surface d'un monde.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
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

Définit si le custom spawn ne peut avoir lieu qu'en souterrain.

| Clé       |           Valeurs            | Défaut |
|-----------|:----------------------------:|:------:|
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