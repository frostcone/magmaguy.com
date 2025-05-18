[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les donjons ?

Vous pouvez trouver des informations sur les donjons, y compris des informations sur les donjons préfabriqués [ici](/fr/elitemobs/dungeons.md).

***

# Qu'est-ce que le packager de donjons ?

Le packager de donjons permet aux administrateurs non seulement de créer et de packager des donjons, mais aussi de packager tout type de contenu EliteMobs. Cela inclut des éléments tels que des packs d'événements, des packs de modèles, des arènes, des packs de PNJ, des packs d'objets, etc.

<details>

<summary>Pourquoi utiliser les packages de donjons ?</summary>

- ***Donjons instanciés !*** Les donjons instanciés ne peuvent être créés qu'à l'aide du système de package de donjons.
- ***Sauvegardes sécurisées des Minidungeons !*** Si vous créez un package de donjon, vous pourrez le déployer et le redéployer sur n'importe quel serveur quand vous le souhaitez et pour n'importe quelle raison.
- ***Facile à activer et désactiver !*** Vous pouvez toujours faire `/em setup` et activer ou désactiver temporairement ou définitivement les packages de donjons.
- ***Facile à partager !*** Si vous souhaitez partager vos créations, les packages de donjons peuvent simplement être compressés et envoyés à d'autres personnes. Il existe un salon Discord dédié aux créations communautaires si vous êtes intéressé !
- ***Téléportations !*** Les packages de donjons créent automatiquement des emplacements de téléportation accessibles dans la page Téléportations du menu `/em`, ce qui peut être très utile dans de nombreuses configurations.

</details>

# Création de donjons

Les paramètres suivants sont utilisés pour créer un fichier de configuration qui doit se trouver dans le dossier `content_packages`. Ces paramètres sont utilisés spécifiquement pour créer des donjons et ne sont pas requis si vous souhaitez simplement utiliser le packager de donjons pour distribuer du contenu non lié aux donjons, comme un pack d'objets ou d'événements.

## Plugins requis

Pour utiliser le packager de donjons, vous aurez besoin du plugin suivant :

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protège le Minidungeon

## Créer un donjon, étape par étape

EliteMobs avait auparavant deux types principaux de donjons : basés sur le monde et basés sur des schémas.

Les donjons basés sur des schémas étaient associés à une construction schématique. Ils sont maintenant progressivement supprimés et ne sont plus pris en charge.

Tous les donjons EliteMobs sont désormais basés sur le monde.

## Fichier pack.meta requis

Votre package de donjon doit inclure un fichier `pack.meta`, qui est simplement un fichier `.txt` renommé avec une extension `.meta`. Ce fichier ne doit contenir qu'un seul mot, indiquant à quel plugin le package est destiné (par exemple, "elitemobs", écrit en minuscules). Le fichier `pack.meta` doit se trouver dans le répertoire racine de votre package, à côté de tous les autres dossiers.

***

### Valeurs globales

Les valeurs suivantes s'appliquent à tous les donjons

<div align="center">

### isEnabled

Définit si le package de donjon est activé.

| Clé         |      Valeurs       | Défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Boolean](#boolean) | `false` |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Définit le nom du contenu. Prend en charge les [Codes de couleur](#color_codes).

| Clé         |      Valeurs       | Défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aLe Donjon Vert'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Définit le type d'emplacement utilisé par le donjon.

| Clé         |        Valeurs         | Défaut | Obligatoire |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Définit le type de donjon.

| Clé         |                    Valeurs                    | Défaut | Obligatoire |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Définit les informations supplémentaires qui apparaîtront dans l'écran `/em setup`. Uniquement à des fins d'information. Prend en charge les [Codes de couleur](#color_codes).

| Clé         |           Valeurs            | Défaut | Obligatoire |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customInfo:
- '&aLe meilleur donjon.'
- '&aCréé par : CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Définit le lien de téléchargement lorsque le contenu n'est pas téléchargé. Uniquement à des fins d'information.

| Clé         |      Valeurs       | Défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Définit la catégorie de taille du package de donjon. Uniquement à des fins d'information.

| Clé         |   Valeurs    | Défaut | Obligatoire |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Spécial [1] |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Spécial [1]**

<details> 

<summary><b>Développer le tableau</b></summary>

<div align="center">

| Clé | Description                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Les repaires sont un type de petit donjon qui se concentre sur un grand combat de boss.  |
| `SANCTUM`    | Les sanctuaires sont l'équivalent des repaires instanciés. Cela signifie qu'ils se concentrent sur un énorme combat de boss. |
| `MINIDUNGEON`    | Les minidungeons sont un type de donjon de taille moyenne qui contient généralement 3 à 15 minibosses et un grand boss, ainsi que beaucoup de mobs "trash" qui sont destinés à être "farmés" pour des pièces et de l'équipement par les joueurs. |
| `DUNGEON`    | Les donjons sont l'équivalent des minidungeons instanciés. C'est le type de donjon MMORPG le plus traditionnel, où les joueurs s'associent et traversent un parcours de mobs trash et de minibosses pour affronter un boss final. |
| `RAID`    | Bientôt disponible !|
| `ADVENTURE`    | Les aventures sont des cartes d'aventure complètes. Elles incluent des quêtes, des PNJ, de grandes quantités de minibosses et de boss, et peuvent même contenir leurs propres arènes ou donjons à l'intérieur. |
| `ARENA`    | Les arènes sont des zones de survie basées sur des vagues dans lesquelles les joueurs sont récompensés pour avoir vaincu des vagues. |
| `OTHER`    | Tout ce qui ne rentre pas déjà dans les catégories précédentes. |

Pour des descriptions plus détaillées, voir [Donjons](/fr/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Définit si le package de donjon doit être protégé par WorldGuard.

| Clé         |      Valeurs       | Défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Boolean](#boolean) |  `true`   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Définit la version du package de donjon.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Définit les informations qui apparaissent dans le menu. Prend en charge les [Codes de couleur](#colorcodes).

*Fonctionne uniquement lorsque le `/em` est défini en mode livre à l'aide de `/em alt`.*

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulté : &aContenu facile pour 1 joueur !'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Définit le message qui apparaît lorsqu'un joueur entre dans la zone du donjon. Prend en charge les [Codes de couleur](#colorcodes).

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aVous êtes entré dans le donjon !'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Définit le message qui apparaît lorsqu'un joueur quitte la zone du donjon. Prend en charge les [Codes de couleur](#colorcodes).

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aVous avez quitté le donjon !'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Définit si le package de donjon contient des modèles personnalisés (pour ModelEngine ou FreeMinecraftModels).

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Définit le nom des dossiers utilisés pour les fichiers associés à ce donjon.

**Obligatoire pour les donjons instanciés !**

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mon_dossier_donjon
```

</div>

</details>

***

### contentLevel

Définit le niveau de contenu que le donjon doit afficher dans le menu EM.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Définit si le donjon doit être un donjon de Défi d'Enchantement.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### Packages de donjons basés sur le monde

Les valeurs suivantes s'appliquent uniquement aux donjons basés sur le monde.

<div align="center">

***

### worldName

Définit le nom du monde qui doit être packagé.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
worldName: mon_monde_minecraft
```

</div>

</details>

***

### womholeWorldName

Cette fonction définit le nom du monde du trou de ver (wormhole), qui sert de monde secondaire lié au monde principal. Il est utilisé pour des fonctionnalités telles que les hubs de téléportation ou les chambres de boss uniques.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
womholeWorldName: mon_monde_minecraft_wormhole
```

</div>

</details>

***

### environment

Définit l'environnement du monde.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Définit l'emplacement de téléportation du package de donjon. C'est là que les joueurs seront téléportés en entrant dans le donjon.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
teleportLocation: mon_monde_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Autorise ou empêche les explosions d'endommager les blocs dans un donjon. Les explosions sont considérées comme des explosions d'élite, donc tout dommage aux blocs sera régénéré dans les 2 minutes.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Boolean](#boolean) |  `false`   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Donjons instanciés

*Les donjons instanciés créent un nouveau monde chaque fois qu'un groupe de joueurs souhaite terminer un donjon, et le suppriment une fois terminé. Pour que cela fonctionne correctement, vous devez placer un dossier suivant le `dungeonConfigFolderName` dans le dossier de configuration `world_blueprints` d'EliteMobs.*

*Vous placez ensuite le monde que vous utiliserez à l'intérieur du dossier que vous avez créé, en vous assurant que le fichier `session.lock` du monde est supprimé.*

Les valeurs suivantes s'appliquent uniquement aux donjons instanciés. Notez que tous les donjons instanciés sont des donjons basés sur le monde, ils utilisent donc également les valeurs des donjons basés sur le monde.

<div align="center">

***

### startLocation

Définit l'emplacement de téléportation du point de départ du donjon instancié. C'est là que les joueurs seront téléportés en démarrant le donjon instancié avec `/em start`.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  aucun   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startLocation: mon_monde_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Définit la permission requise pour entrer dans l'instance du donjon.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  aucun   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Définit le nombre minimum de joueurs requis pour démarrer un donjon.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Définit le nombre minimum de joueurs requis pour démarrer un donjon.

| Clé         |  Valeurs  | Défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Définit la liste des objectifs de donjon requis pour que le donjon soit considéré comme terminé.

| Clé         |           Valeurs            | Défaut | Obligatoire |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  aucun   |    ✅      |

<details> 

<summary><b>Exemples</b></summary>

<div align="left">

Il existe actuellement deux types d'objectifs de donjon :

* Tuer la cible : `filename=boss.yml:amount=X`
* Tuer un pourcentage du donjon : `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives: 
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Définit la liste des difficultés dans le donjon instancié.

**Obligatoire pour les donjons instanciés !**

| Clé         |   Valeurs    | Défaut | Obligatoire |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Spécial [1] |  aucun   |    ❌      |

<details> 

<summary><b>Exemples</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Spécial [1]**

<details>

<summary><b>Développer le tableau</b></summary>

<div align="center">

La définition des difficultés de donjon instancié créera automatiquement différentes options de difficulté lors de l'entrée dans le donjon.

Les noms de difficulté définis ici seront ceux utilisés dans le dossier des boss personnalisés, où vous pouvez définir les pouvoirs des boss en fonction de la difficulté.

Les difficultés sont au format liste et comportent les champs suivants :

|     Clé     | Description                                                                                                                                                                                                                                                    | Valeurs | Obligatoire |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nom de la difficulté pour les joueurs.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |Please specify the language you would like the text translated into.