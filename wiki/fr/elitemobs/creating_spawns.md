[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les Apparitions Personnalisées ?

Les apparitions personnalisées sont utilisées par les Événements et les renforts mondiaux pour définir comment, où et
quand un événement doit faire apparaître le boss pour cet événement.

Les événements et les renforts mondiaux définissent l'apparition qu'ils utilisent en notant son nom de fichier.

# Création d'Apparitions Personnalisées

Les apparitions personnalisées sont placées dans le dossier `customspawns`. Une apparition personnalisée peut être
utilisée par plusieurs événements en même temps, il n'est donc pas nécessaire d'en créer une par événement.

Voici un exemple d'apparition personnalisée:

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## Création d'une Apparition N'importe Où

Pour créer une apparition qui peut avoir lieu **n'importe où**, votre configuration doit ressembler à ce qui suit:

```yml
isEnabled: true
canSpawnInLight: true
```

Cette configuration permet aux mobs d'apparaître n'importe où, dans n'importe quel monde, à n'importe quel moment et
pendant n'importe quelle phase de la lune.

Si vous souhaitez créer une apparition plus personnalisée, continuez à lire ci-dessous.

## Valeurs

<div align="center">

***

### isEnabled

Définit si l'apparition est activée.

| Clé         |       Valeurs       | Par Défaut |
|-------------|:-------------------:|:----------:|
| `isEnabled` | [Booléen](#boolean) |   `true`   |

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

| Clé            |      Valeurs       | Par Défaut |
|----------------|:------------------:|:----------:|
| `lowestYLevel` | [Entier](#integer) |    `0`     |

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

Définit le niveau y le plus bas (hauteur de la carte) utilisé.

| Clé             |      Valeurs       | Par Défaut |
|-----------------|:------------------:|:----------:|
| `highestYLevel` | [Entier](#integer) |   `320`    |

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

Définit la liste des mondes où l'apparition personnalisée peut avoir lieu. Ce paramètre peut être omis pour que **tous**
vos mondes soient valides.

| Clé           |             Valeurs              | Par Défaut |
|---------------|:--------------------------------:|:----------:|
| `validWorlds` | [Liste de Chaînes](#string_list) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorlds:
- MONDE
- TERRE_DE_PLAISIR
```

*Si vous voulez que tous vos mondes soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le formater
comme ceci:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

Définit la liste des environnements mondiaux valides où l'apparition personnalisée peut avoir lieu. Ce paramètre peut
être omis pour que **tous** les environnements soient valides.

| Clé                      |                                           Valeurs                                            | Par Défaut |
|--------------------------|:--------------------------------------------------------------------------------------------:|:----------:|
| `validWorldEnvironments` | [Liste d'Environnements](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- PLAT
- GRANDS_BIOMES
```

*Si vous voulez que tous les environnements soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le
formater comme ceci:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

Définit la liste des biomes valides où l'apparition personnalisée peut avoir lieu. Ce paramètre peut être omis pour que
**tous** les biomes soient valides.

| Clé           |                                         Valeurs                                         | Par Défaut |
|---------------|:---------------------------------------------------------------------------------------:|:----------:|
| `validBiomes` | [Liste de Biomes](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- CHAMPS_DE_CHAMPIGNONS
```

*Si vous voulez que tous les environnements soient valides, vous pouvez simplement ne pas utiliser le paramètre ou le
formater comme ceci:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

Définit l'heure la plus proche dans le jeu à laquelle l'apparition personnalisée peut avoir lieu.

| Clé            |      Valeurs       | Par Défaut |
|----------------|:------------------:|:----------:|
| `earliestTime` | [Entier](#integer) |    `0`     |

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

Définit l'heure la plus tardive dans le jeu à laquelle l'apparition personnalisée peut avoir lieu.

| Clé          |      Valeurs       | Par Défaut |
|--------------|:------------------:|:----------:|
| `latestTime` | [Entier](#integer) |  `24000`   |

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

Définit l'heure la plus proche dans le jeu à laquelle l'apparition personnalisée peut avoir lieu.

| Clé         |   Valeurs   | Par Défaut |
|-------------|:-----------:|:----------:|
| `moonPhase` | Spécial [1] |  `24000`   |

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

| Phase de la Lune                | Aperçu |
|---------------------------------|:------:|
| `NOUVELLE_LUNE`                 |   🌑   |
| `CROISSANT_DE_LUNE`             |   🌒   |
| `PREMIER_QUARTIER`              |   🌓   |
| `LUNE_GIBBEUSE_CROISSANTE`      |   🌔   |
| `PLEINE_LUNE`                   |   🌕   |
| `LUNE_GIBBEUSE_DÉCROISSANTE`    |   🌖   |
| `CROISSANT_DE_LUNE_DÉCROISSANT` |   🌘   |

</details>

***

### bypassWorldGuard

Définit si l'apparition personnalisée contournera les systèmes de protection tels que WorldGuard.

| Clé                |       Valeurs       | Par Défaut |
|--------------------|:-------------------:|:----------:|
| `bypassWorldGuard` | [Booléen](#boolean) |  `false`   |

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

Indique si l'apparition personnalisée peut avoir lieu sur des blocs éclairés par des sources lumineuses.

| Clé               |       Valeurs       | Par Défaut |
|-------------------|:-------------------:|:----------:|
| `canSpawnInLight` | [Booléen](#boolean) |  `false`   |

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

Définit si l'apparition personnalisée ne peut avoir lieu qu'à la surface d'un monde.

| Clé              |       Valeurs       | Par Défaut |
|------------------|:-------------------:|:----------:|
| `isSurfaceSpawn` | [Booléen](#boolean) |  `false`   |

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

Définit si l'apparition personnalisée ne peut avoir lieu que sous terre.

| Clé                  |       Valeurs       | Par Défaut |
|----------------------|:-------------------:|:----------:|
| `isUndergroundSpawn` | [Booléen](#boolean) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>
