Voici la traduction en français, en conservant le formatage markdown :

## Générateurs

Les générateurs sont la partie la plus puissante du système de configuration de BetterStructures. Par défaut, il existe 27 générateurs qui gèrent collectivement plus de 200 structures actuellement distribuées par BetterStructures, et bien que vous puissiez créer vos propres générateurs, vous pouvez également utiliser ceux existants comme raccourci.

Les générateurs indiquent au plugin où exactement les choses doivent apparaître et définissent les tables de butin. Les générateurs par défaut sont également nommés de manière à ce qu'il soit très facile de deviner ce qu'ils font.

Le seul champ obligatoire pour les générateurs est le paramètre `structureType`, qui indique au plugin si la structure est destinée à apparaître dans le ciel, en souterrain peu profond, en souterrain profond, en surface ou en surface liquide.

***

### isEnabled

Définit si le générateur est activé.

***

### structureType

Définit le type de structure de la construction. **Notez que vous pouvez faire une liste de plusieurs types !**

Voici les valeurs de type de structure valides :

***

#### surface

```yml
structureType:
- SURFACE
```

Les structures de surface apparaissent à la surface du monde. La seule exception est l'environnement du Nether, où elles apparaissent aux points que le plugin juge suffisamment similaires à la surface.

***

#### sky

```yml
structureType:
- SKY
```

Les structures célestes apparaissent entre 80 et 120 blocs au-dessus de l'air, configurable dans config.yml. La seule exception est l'environnement du Nether, où elles apparaissent aux points que le plugin juge suffisamment similaires à l'air.

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

Les structures souterraines peu profondes apparaissent entre y=0 et y=60 dans l'Overworld, y=60 et y=120 dans le Nether et à toute hauteur souterraine valide dans l'End.

_**Note :** Vous remarquerez qu'il existe deux paramètres souterrains. C'est parce qu'en n'en ayant qu'un seul, le souterrain serait très clairsemé, car Minecraft a beaucoup d'espace souterrain et les joueurs manqueraient souvent les structures souterraines simplement parce qu'ils n'ont pas miné dedans. Cela garantit également une répartition uniforme à différentes profondeurs._

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

Les structures souterraines profondes apparaissent entre y=-64 et y=0 dans l'Overworld, y=0 et y=60 dans le Nether et n'apparaissent pas dans l'End.

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

Les structures de surface liquide apparaîtront sur les liquides. Dans le cas de l'Overworld, elles apparaîtront sur l'eau, et presque toujours sur les océans. Dans le cas du Nether, elles apparaîtront dans les lacs de lave. Elles n'apparaîtront pas dans l'End.

***

### lowestYLevel

Définit le niveau Y (altitude) le plus bas auquel la structure apparaîtra.

***

### highestYLevel

Définit le niveau Y (altitude) le plus haut auquel la structure apparaîtra.

***

### validWorlds

Définit la liste des mondes dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, elle utilisera tous les mondes autorisés par le plugin**, sauf limitation contraire (par exemple, par le type d'environnement ou les biomes).

***

### validWorldEnvironments

Définit la liste des environnements de monde dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, elle utilisera tous les environnements de monde autorisés par le plugin**. Valeurs valides : `NORMAL`, `NETHER`, `END` et `CUSTOM`.

***

### validBiomes

Définit la liste des biomes valides dans lesquels la structure apparaîtra. **Si aucune liste n'est définie, elle supposera que chaque biome est valide !**.

Cela nécessite d'utiliser la liste des biomes telle que définie par l'[API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Définit le fichier de butin que le générateur utilisera. Cela définit ce qui apparaît dans les coffres pour toutes les constructions qui utilisent ce générateur, sauf si une valeur différente est définie dans le [paramètre `treasureFile` d'une configuration de schéma](fr/betterstructures/creating_structures.md&section=treasurefile).