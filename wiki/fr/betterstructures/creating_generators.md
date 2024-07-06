## Générateurs

Les générateurs sont la partie la plus puissante du système de configuration de BetterStructures. Par défaut, il existe 27 générateurs qui gèrent collectivement plus de 200 constructions actuellement distribuées par BetterStructures, et bien que vous puissiez créer vos propres générateurs, vous pouvez également utiliser les générateurs existants comme raccourci.

Les générateurs indiquent au plugin où exactement les choses doivent apparaître et définissent les tables de butin. Les générateurs par défaut sont également nommés de manière à ce que vous puissiez facilement deviner ce qu'ils font.

Le seul champ obligatoire pour les générateurs est le paramètre `structureType`, qui indique au plugin si la construction est destinée à apparaître dans le ciel, sous terre peu profonde, sous terre profonde, en surface ou en surface liquide.

***

### isEnabled

Définit si le générateur est activé.

***

### structureType

Définit le type de structure de la construction. **Notez que vous pouvez faire une liste de plusieurs types !**

Les valeurs suivantes sont valables pour le type de structure :

***

#### surface

```yml
structureType: 
- SURFACE
```

Les structures de surface apparaissent à la surface du monde. La seule exception est l'environnement du Nether, où elles apparaissent aux endroits que le plugin juge suffisamment ressemblants à la surface.

***

#### sky

```yml
structureType: 
- SKY
```

Les structures célestes apparaissent entre 80 et 120 blocs au-dessus de l'air, configurables dans config.yml. La seule exception est l'environnement du Nether, où elles apparaissent aux endroits que le plugin juge suffisamment ressemblants à l'air.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

Les structures souterraines peu profondes apparaissent entre y=0 et y=60 dans l'Overworld, y=60 et y=120 dans le Nether et à toute hauteur souterraine valide dans l'End.

_**Remarque :** Vous remarquerez qu'il existe deux paramètres souterrains. En effet, n'en avoir qu'un seul donne un sous-sol très clairsemé, car Minecraft a beaucoup d'espace souterrain et les joueurs passent souvent à côté des structures souterraines simplement parce qu'ils n'ont pas creusé dedans. Cela garantit également une répartition uniforme sur différentes profondeurs._

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

Définit le niveau Y le plus bas (altitude) auquel la structure apparaîtra.

***

### highestYLevel

Définit le niveau Y le plus élevé (altitude) auquel la structure apparaîtra.

***

### validWorlds

Définit la liste des mondes dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, tous les mondes autorisés par le plugin seront utilisés**, sauf limitation contraire (comme par le type d'environnement ou les biomes).

***

### validWorldEnvironments

Définit la liste des environnements mondiaux dans lesquels la structure apparaîtra. **Si aucune liste n'est présente, tous les environnements mondiaux autorisés par le plugin seront utilisés**. Valeurs valides : `NORMAL`, `NETHER`, `END` et `CUSTOM`.

***

### validBiomes

Définit la liste des biomes valides dans lesquels la structure apparaîtra. **Si aucune liste n'est définie, tous les biomes seront considérés comme valides !**.

Cela nécessite d'utiliser la liste des biomes telle que définie par [l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Définit le fichier de trésor que le générateur utilisera. Cela définit ce qui apparaît dans les coffres pour toutes les constructions qui utilisent ce générateur, à moins qu'une valeur différente ne soit définie dans le [paramètre `treasureFile` de la configuration schématique]($language$/betterstructures/creating_structures.md&section=treasurefile).
