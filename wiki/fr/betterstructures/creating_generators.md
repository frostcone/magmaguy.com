## Générateurs

Les générateurs sont la partie la plus puissante du système de configuration de BetterStructures. Par défaut, il existe 27 générateurs qui gèrent collectivement plus de 200 constructions actuellement distribuées par BetterStructures, et bien que vous puissiez créer vos propres générateurs, vous pouvez également utiliser ceux qui existent déjà comme raccourci.

Les générateurs indiquent au plugin où exactement les choses doivent apparaître et définissent les tables de butin. Les générateurs par défaut sont également nommés de manière à ce qu'il soit très facile de deviner ce qu'ils font.

Le seul champ obligatoire pour les générateurs est le paramètre `structureType`, qui indique au plugin si le bâtiment est destiné à apparaître dans le ciel, en sous-sol peu profond, en sous-sol profond, en surface ou en surface liquide.

***

### isEnabled

Définit si le générateur est activé.

***

### structureType

Définit le type de structure qu'est la construction. **Notez que vous pouvez créer une liste de plusieurs types !**

Voici les valeurs de type de structure valides :

***

#### surface

```yml
structureType:
- SURFACE
```

Les structures de surface apparaissent à la surface du monde. La seule exception est l'environnement du Nether, où elles apparaissent à des points que le plugin juge suffisamment semblables à la surface.

***

#### sky

```yml
structureType:
- SKY
```

Les structures du ciel apparaissent entre 80 et 120 blocs au-dessus de l'air, configurables dans config.yml. La seule exception est l'environnement du Nether, où elles apparaissent à des points que le plugin juge suffisamment semblables à l'air.

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

Les structures souterraines peu profondes apparaissent entre y = 0 et y = 60 dans le monde normal, entre y = 60 et y = 120 dans le Nether et à toute hauteur souterraine valide dans l'End.

_**Remarque :** Vous remarquerez qu'il existe deux paramètres souterrains. En effet, n'en avoir qu'un seul a pour conséquence d'avoir un sous-sol très épars, car Minecraft a beaucoup d'espace souterrain et les joueurs manqueront souvent la structure souterraine simplement parce qu'ils ne l'ont pas creusée. Cela garantit également une répartition uniforme à différentes profondeurs._

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

Les structures souterraines profondes apparaissent entre y = -64 et y = 0 dans le monde normal, entre y = 0 et y = 60 dans le Nether et n'apparaissent pas dans l'End.

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

Les structures de surface liquide apparaissent sur les liquides. Dans le cas du monde normal, elles apparaissent sur l'eau et presque toujours sur les océans. Dans le cas du Nether, elles apparaissent dans les lacs de lave. Elles n'apparaissent pas dans l'End.

***

### lowestYLevel

Définit le niveau Y (altitude) le plus bas auquel la structure apparaîtra.

***

### highestYLevel

Définit le niveau Y (altitude) le plus élevé auquel la structure apparaîtra.

***

### validWorlds

Définit la liste des mondes dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, elle utilisera tous les mondes autorisés par le plugin**, sauf si cela est limité d'une autre manière (comme par le type d'environnement ou les biomes).

***

### validWorldEnvironments

Définit la liste des environnements mondiaux dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, elle utilisera tous les environnements mondiaux autorisés par le plugin**. Valeurs valides : `NORMAL`, `NETHER`, `END` et `CUSTOM`.

***

### validBiomes

Définit la liste des biomes valides dans lesquels la structure apparaîtra. **Si aucune liste n'est définie, elle supposera que tous les biomes sont valides !**.

Cela nécessite d'utiliser la liste des biomes telle que définie par l'[API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Définit le fichier de trésor que le générateur utilisera. Cela définit ce qui apparaît dans les coffres pour toutes les constructions qui utilisent ce générateur, à moins qu'une valeur différente ne soit définie dans un paramètre de `treasureFile` d'une [configuration schématique]($language$/betterstructures/creating_structures.md&section=treasurefile).
