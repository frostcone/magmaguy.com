[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les donjons ?

Vous pouvez trouver des informations sur les donjons, y compris des informations sur les donjons
préfabriqués [ici]($language$/elitemobs/dungeons.md).

***

# Qu'est-ce que l'emballeur de donjons ?

L'emballeur de donjons permet aux administrateurs non seulement de créer et d'emballer des donjons, mais aussi
d'emballer tout type de contenu EliteMobs. Cela inclut des éléments tels que les packs d'événements, les packs de
modèles, les arènes, les packs de PNJ, les packs d'objets, etc.

<details>

<summary>Pourquoi utiliser des packages de donjons ?</summary>

- ***Donjons instanciés !*** Les donjons instanciés ne peuvent être créés que via le système de package de donjons.
- ***Sauvegardes sécurisées de Minidonjons !*** Si vous créez un package de donjons, vous pourrez le déployer et le
  redéployer dans n'importe quel serveur, à tout moment et pour n'importe quelle raison.
- ***Facile à activer et à désactiver !*** Vous pouvez toujours faire `/em setup` et activer et désactiver
  temporairement ou définitivement les packages de donjons.
- ***Facile à partager !*** Si vous souhaitez partager vos créations, les packages de donjons peuvent simplement être
  compressés et envoyés à d'autres personnes. Il existe une salle Discord dédiée aux créations de la communauté si cela
  vous intéresse !
- ***Téléportations !*** Les packages de donjons créent automatiquement des lieux de téléportation auxquels on peut
  accéder dans la page Téléportations du menu `/em`, ce qui peut être très utile dans de nombreuses configurations.

</details>

# Création de donjons

Les paramètres suivants sont utilisés pour créer un fichier de configuration qui doit aller dans le
dossier `content_packages`. Ces paramètres sont utilisés pour créer des donjons spécifiquement et ne sont pas
nécessaires si vous voulez simplement utiliser l'emballeur de donjons pour distribuer du contenu autre qu'un donjon tel
qu'un pack d'objets ou d'événements.

## Plugins requis

Pour utiliser l'emballeur de donjons, vous aurez besoin du plugin suivant :

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protège le minidonjon

## Création d'un donjon, étape par étape

EliteMobs avait autrefois deux types principaux de donjons: basés sur le monde et basés sur des schémas.

Les donjons basés sur des schémas étaient associés à une construction schématique. Ils sont désormais supprimés et ne
sont plus pris en charge.

Tous les donjons EliteMobs sont désormais basés sur le monde.

## Fichier pack.meta requis

Votre package de donjon doit inclure un fichier `pack.meta`, qui est simplement un fichier `.txt` renommé avec une
extension `.meta`. Ce fichier ne doit contenir qu'un seul mot, indiquant pour quel plugin est destiné le package (par
exemple, "elitemobs", écrit en minuscules). Le fichier `pack.meta` doit être situé dans le répertoire racine de votre
package, à côté de tous les autres dossiers.

***

### Valeurs globales

Les valeurs suivantes s'appliquent à tous les donjons

<div align="center">

### isEnabled

Définit si le package de donjon est activé.

| Clé         |       Valeurs       | Par défaut | Obligatoire |
|-------------|:-------------------:|:----------:|:-----------:|
| `isEnabled` | [Booléen](#booléen) |  `false`   |      ✅      |

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

Définit le nom du contenu. Prend en charge les [Codes de couleur](#codes_de_couleur).

| Clé    |      Valeurs      | Par défaut | Obligatoire |
|--------|:-----------------:|:----------:|:-----------:|
| `name` | [Chaîne](#chaîne) |   `faux`   |      ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: '&c[niv 999] &aLe Donjon Vert'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Définit le type d'emplacement utilisé par le donjon.

| Clé                   |        Valeurs        | Par défaut | Obligatoire |
|-----------------------|:---------------------:|:----------:|:-----------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |   aucun    |      ✅      |

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

| Clé           |                   Valeurs                    | Par défaut | Obligatoire |
|---------------|:--------------------------------------------:|:----------:|:-----------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |   aucun    |      ✅      |

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

Définit les informations supplémentaires qui apparaîtront dans l'écran `/em setup`. Uniquement à des fins d'information.
Prend en charge les [Codes de couleur](#codes_de_couleur).

| Clé          |                Valeurs                | Par défaut | Obligatoire |
|--------------|:-------------------------------------:|:----------:|:-----------:|
| `customInfo` | [Liste de chaînes](#liste_de_chaînes) |   aucun    |      ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customInfo:
- '&aLe meilleur donjon.'
- '&aFait par : CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Définit le lien de téléchargement lorsque le contenu n'est pas téléchargé. Uniquement à des fins d'information.

| Clé            |      Valeurs      | Par défaut | Obligatoire |
|----------------|:-----------------:|:----------:|:-----------:|
| `downloadLink` | [Chaîne](#chaîne) |   aucun    |      ❌      |

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

| Clé                   |   Valeurs   | Par défaut | Obligatoire |
|-----------------------|:-----------:|:----------:|:-----------:|
| `dungeonSizeCategory` | Spécial [1] |   aucun    |      ✅      |

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

| Clé           | Description                                                                                                                                                                                                                                                       |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`        | Les repaires sont un type de petit donjon qui se concentre sur un grand combat de boss.                                                                                                                                                                           |
| `SANCTUM`     | Les sanctuaires sont l'équivalent des repaires instanciés. Cela signifie qu'ils se concentrent autour d'un énorme combat de boss.                                                                                                                                 |
| `MINIDUNGEON` | Les minidonjons sont un type de donjon de taille moyenne qui contient généralement 3 à 15 mini-boss et un grand boss, ainsi qu'un grand nombre de monstres « poubelles » destinés à être « cultivés » pour obtenir des pièces et de l'équipement par les joueurs. |
| `DUNGEON`     | Les donjons sont l'équivalent des minidonjons instanciés. C'est le type de donjon MMORPG le plus traditionnel, où les joueurs se regroupent et traversent un défi de monstres poubelles et de mini-boss pour combattre un boss final.                             |
| `RAID`        | Bientôt disponible !                                                                                                                                                                                                                                              |
| `ADVENTURE`   | Les aventures sont des cartes d'aventure complètes. Elles comprennent des séries de quêtes, des PNJ, de grandes quantités de mini-boss et de boss et peuvent même contenir leurs propres arènes ou donjons à l'intérieur.                                         |
| `ARENA`       | Les arènes sont des zones de survie basées sur des vagues dans lesquelles les joueurs sont récompensés pour avoir vaincu des vagues.                                                                                                                              |
| `OTHER`       | Tout ce qui n'entre pas déjà dans les catégories précédentes.                                                                                                                                                                                                     |

Pour des descriptions plus détaillées, voir [Donjons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Définit si le package de donjon doit être protégé par WorldGuard.

| Clé       |       Valeurs       | Par défaut | Obligatoire |
|-----------|:-------------------:|:----------:|:-----------:|
| `protect` | [Booléen](#booléen) |   `true`   |      ❌      |

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

| Clé              |      Valeurs      | Par défaut | Obligatoire |
|------------------|:-----------------:|:----------:|:-----------:|
| `dungeonVersion` | [Entier](#entier) |   aucun    |      ✅      |

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

Définit les informations qui apparaissent dans le menu. Prend en charge les [Codes de couleur](#codes_de_couleur).

*Fonctionne uniquement lorsque le `/em` est défini en mode livre en utilisant `/em alt`.*

| Clé          |      Valeurs      | Par défaut | Obligatoire |
|--------------|:-----------------:|:----------:|:-----------:|
| `playerInfo` | [Chaîne](#chaîne) |   aucun    |      ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulté : &aContenu facile pour 1 personne !'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Définit le message qui apparaît lorsqu'un joueur entre dans la zone du donjon. Prend en charge
les [Codes de couleur](#codes_de_couleur).

| Clé                  |      Valeurs      | Par défaut | Obligatoire |
|----------------------|:-----------------:|:----------:|:-----------:|
| `regionEnterMessage` | [Chaîne](#chaîne) |   aucun    |      ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aVous êtes entré dans le donjon !'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Définit le message qui apparaît lorsqu'un joueur quitte la zone du donjon. Prend en charge
les [Codes de couleur](#codes_de_couleur).

| Clé                  |      Valeurs      | Par défaut | Obligatoire |
|----------------------|:-----------------:|:----------:|:-----------:|
| `regionLeaveMessage` | [Chaîne](#chaîne) |   aucun    |      ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aVous avez quitté le donjon !'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Indique si le package de donjon possède des modèles personnalisés (pour ModelEngine ou FreeMinecraftModels).

| Clé               |       Valeurs       | Par défaut | Obligatoire |
|-------------------|:-------------------:|:----------:|:-----------:|
| `hasCustomModels` | [Booléen](#booléen) |   aucun    |      ❌      |

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

**Obligatoire pour les donjons instanciés!**

| Clé                       |      Valeurs      | Par défaut | Obligatoire |
|---------------------------|:-----------------:|:----------:|:-----------:|
| `dungeonConfigFolderName` | [Chaîne](#chaîne) |   aucun    |      ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mon_dossier_de_donjon
```

</div>

</details>

***

### contentLevel

Définit le niveau de contenu que le donjon doit afficher dans le menu EM.

| Clé            |      Valeurs      | Par défaut | Obligatoire |
|----------------|:-----------------:|:----------:|:-----------:|
| `contentLevel` | [Entier](#entier) |   aucun    |      ❌      |

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

Indique si le donjon doit être un donjon Défi d'enchantement.

| Clé                    |       Valeurs       | Par défaut | Obligatoire |
|------------------------|:-------------------:|:----------:|:-----------:|
| `enchantmentChallenge` | [Booléen](#booléen) |  `false`   |      ❌      |

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

Définit le nom du monde qui doit être emballé.

| Clé         |      Valeurs      | Par défaut | Obligatoire |
|-------------|:-----------------:|:----------:|:-----------:|
| `worldName` | [Chaîne](#chaîne) |   aucun    |      ✅      |

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

Cette fonction définit le nom du monde du trou de ver, qui sert de monde secondaire lié au monde principal. Il est
utilisé pour des fonctionnalités telles que des hubs de téléportation ou des chambres de boss uniques.

| Clé                |      Valeurs      | Par défaut | Obligatoire |
|--------------------|:-----------------:|:----------:|:-----------:|
| `womholeWorldName` | [Chaîne](#chaîne) |   aucun    |      ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
womholeWorldName: mon_monde_minecraft_troudever
```

</div>

</details>

***

### environment

Définit l'environnement du monde.

| Clé           |                                           Valeurs                                           | Par défaut | Obligatoire |
|---------------|:-------------------------------------------------------------------------------------------:|:----------:|:-----------:|
| `environment` | [Environnement](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |   aucun    |      ✅      |

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

Définit l'emplacement de téléportation du package de donjon. C'est là où les joueurs seront téléportés lorsqu'ils
entreront dans le donjon.

| Clé                |      Valeurs      | Par défaut | Obligatoire |
|--------------------|:-----------------:|:----------:|:-----------:|
| `teleportLocation` | [Chaîne](#chaîne) |   aucun    |      ✅      |

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

Autorise ou empêche les explosions d'endommager les blocs dans un donjon. Les explosions sont considérées comme des
explosions d'élite, de sorte que tout dommage aux blocs sera régénéré en moins de 2 minutes.

| Clé                         |       Valeurs       | Par défaut | Obligatoire |
|-----------------------------|:-------------------:|:----------:|:-----------:|
| `allowExplosionBlockDamage` | [Booléen](#booléen) |  `false`   |      ❌      |

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

*Les donjons instanciés créent un nouveau monde à chaque fois qu'un groupe de joueurs veut terminer un donjon, et le
supprime une fois terminé. Pour que cela fonctionne correctement, vous devez placer un dossier suivant
le `dungeonConfigFolderName` dans le dossier de configuration `world_blueprints` d'EliteMobs.*

*Vous placez ensuite le monde que vous utiliserez à l'intérieur du dossier que vous avez créé, en vous assurant que le
fichier `session.lock` du monde est supprimé.*

Les valeurs suivantes s'appliquent uniquement aux donjons instanciés. Notez que tous les donjons instanciés sont des
donjons du monde, ils utilisent donc également les valeurs des donjons du monde.

<div align="center">

***

### startLocation

Définit l'emplacement de téléportation du point de départ du donjon instancié. C'est là que les joueurs seront
téléportés lorsqu'ils commenceront le donjon instancié avec `/em start`.

| Clé             |      Valeurs      | Par défaut | Obligatoire |
|-----------------|:-----------------:|:----------:|:-----------:|
| `startLocation` | [Chaîne](#chaîne) |   aucun    |      ✅      |

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

Définit l'autorisation requise pour entrer dans l'instance de donjon.

| Clé          |      Valeurs      | Par défaut | Obligatoire |
|--------------|:-----------------:|:----------:|:-----------:|
| `permission` | [Chaîne](#chaîne) |   aucun    |      ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: elitedungeon.monautorisation
```

</div>

</details>

***

### minPlayerCount

Définit le nombre minimum de joueurs requis pour démarrer un donjon.

| Clé              |      Valeurs      | Par défaut | Obligatoire |
|------------------|:-----------------:|:----------:|:-----------:|
| `minPlayerCount` | [Entier](#entier) |    `1`     |      ❌      |

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

| Clé              |      Valeurs      | Par défaut | Obligatoire |
|------------------|:-----------------:|:----------:|:-----------:|
| `maxPlayerCount` | [Entier](#entier) |    `5`     |      ❌      |

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

| Clé                 |                Valeurs                | Par défaut | Obligatoire |
|---------------------|:-------------------------------------:|:----------:|:-----------:|
| `dungeonObjectives` | [Liste de chaînes](#liste_de_chaînes) |   aucun    |      ✅      |

<details> 

<summary><b>Exemples</b></summary>

<div align="left">

Il existe actuellement deux types d'objectifs de donjon:

* Tuer la cible: `filename=boss.yml:amount=X`
* Tuer un pourcentage du donjon: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=donjon_boss_final.yml
- filename=donjon_mini_boss_un.yml
- filename=donjon_mini_boss_deux.yml
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

**Obligatoire pour les donjons instanciés!**

| Clé            |   Valeurs   | Par défaut | Obligatoire |
|----------------|:-----------:|:----------:|:-----------:|
| `difficulties` | Spécial [1] |   aucun    |      ❌      |

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
  name: difficile
- levelSync: 15
  id: 2
  name: mythique
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

La définition des difficultés de donjon instancié créera automatiquement différentes options de difficulté lors de
l'entrée dans le donjon.

Les noms de difficulté définis ici seront ceux utilisés dans le dossier des boss personnalisés, où vous pouvez définir
les pouvoirs que les boss ont en fonction de la difficulté.

Les difficultés sont dans un format de liste qui comporte les champs suivants:

|     Clé     | Description                                                                                                                                                                                                                                                                                                                                                      | Valeurs           | Obligatoire |
|:-----------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|:-----------:|
|   `name`    | Nom de la difficulté pour les joueurs.                                                                                                                                                                                                                                                                                                                           | [Chaîne](#chaîne) |      ✅      |
|    `id`     | ID de la difficulté, utilisé dans les boss personnalisés et les éléments personnalisés pour la fonctionnalité basée sur la difficulté.                                                                                                                                                                                                                           | [Chaîne](#chaîne) |      ✅      |
| `levelSync` | Définit le niveau de la synchronisation de niveau, le cas échéant. La synchronisation de niveau fait que tout l'équipement du joueur atteint la valeur définie, ce qui empêche les joueurs d'être trop sur-nivelés pour un donjon et maintient la pertinence pour les courses ultérieures. Basé sur le système de synchronisation de niveau de Final Fantasy 14. | [Entier](#entier) |      ❌      |

</div>

</details>

</div>

***

## Utilisation du fichier de package de donjon meta_pack.yml pour les grands donjons.

Parfois, vous pouvez travailler sur un grand donjon qui inclut d'autres donjons plus petits à l'intérieur, permettant
aux joueurs de voyager entre eux via le monde du donjon principal. Un excellent exemple en est le donjon d'aventure
EliteMobs Primis.

Primis propose un vaste monde où les joueurs peuvent explorer et accomplir des quêtes, mais il comprend également deux
donjons instanciés dans son monde ; l'un d'eux sert de combat de boss final. Dans des cas comme celui-ci, il y aura
plusieurs fichiers de package de donjon, même s'ils appartiennent tous au même donjon global.

Pour gérer cela, nous utilisons un fichier de package de méta-donjon. Ce fichier agit comme un répertoire central,
spécifiant le donjon principal et répertoriant tous les contenus de donjon supplémentaires qui lui sont associés.

Examinons de plus près la structure du package de méta-donjon de Primis:

```yaml
isEnabled: true
name: '&2[000-020] L'aventure Primis !'
customInfo:
- L'aventure tutorielle pour les joueurs
- qui débutent avec EliteMobs !
downloadLinkV2: https://discord.gg/9f5QSka
dungeonSizeCategory: REPAIRE
environment: NORMAL
protect: true
contentType: META_PACKAGE
containedPackages:
- primis_aventure.yml
- primis_temple_de_sang_sanctum.yml
- primis_invasion_gladius_donjon.yml
setupMenuDescription:
- '&2Une aventure tutorielle facile pour les joueurs entre les niveaux 0 et 20 !'
- '&2Les aventures sont des cartes massives avec des quêtes,'
- '&2de nombreux boss et PNJ, entre autres !'
- '&2Possède également des modèles personnalisés !'
dungeonVersion: 21 #Fichier de méta-package de donjon ajouté
```

Comme vous pouvez le constater, le fichier de package de méta-donjon est très similaire à un package de donjon standard,
avec quelques différences essentielles. Le `contentType :` est défini sur `META_PACKAGE`, et il existe un paramètre
supplémentaire appelé `containedPackages :`. Ce paramètre répertorie tous les autres packages de donjon qui font partie
du donjon plus grand.

Lorsque vous créez votre méta-package, assurez-vous d'inclure le paramètre `containedPackages :` et de répertorier
chaque package de donjon qui fait partie de votre donjon plus grand. Cela garantit que tout est correctement lié et
organisé dans la structure globale.

Lors du versionnage de votre donjon, tout le versionnage doit être géré via le méta-package. En effet, le méta-package
sert de package principal qui détermine la version de l'ensemble du donjon et constitue également le package utilisé
pour afficher des informations dans le menu `/em setup`.

Gardez à l'esprit que les donjons individuels répertoriés dans le méta-package peuvent toujours apparaître dans le
menu `/em teleport`. Pour éviter cela, vous devrez désactiver manuellement les options de téléportation pour chacun de
ces donjons dans leurs fichiers de configuration respectifs.

Par exemple, dans le cas du donjon Primis:

Désactivez les entrées de téléportation dans le menu pour `primis_temple_de_sang_sanctum.yml`
et `primis_invasion_gladius_donjon.yml`.
Laissez les options de téléportation activées pour `primis_aventure.yml`, car cela sert de hub principal où les joueurs
commencent leur voyage et accèdent aux autres donjons.
Cette configuration garantit une expérience fluide pour les joueurs tout en maintenant une structure et des
fonctionnalités appropriées pour le système de donjon.

Lors du nommage du fichier, nous recommandons la convention d'attribution de noms suivante:

`votre_nom_de_donjon_meta_pack.yml`

***

# Valeurs de boss recommandées

## Création d'un mob de donjon moyen

Nous recommandons de laisser le paramètre normalizedCombat défini sur true. Ce paramètre normalise tous les monstres
pour qu'ils évoluent de manière égale avec la santé et les dégâts, quel que soit leur type d'entité.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 coups pour tuer
damageMultiplier: 1.0 #1,5 cœurs de dégâts
```

Certes, voici la version révisée avec clarté et mise en forme conservées:

**Remarque: étant donné que `1.0` est la valeur par défaut pour la santé et les dégâts, vous pouvez simplement omettre
de définir `healthMultiplier` ou `damageMultiplier` et définir `normalizedCombat` sur `true`.**

## Création de packs de monstres poubelles

Les packs de monstres poubelles sont nombreux mais pas très dangereux:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 coups pour tuer
damageMultiplier: 0.5 #0,5 cœurs de dégâts
```

## Création de renforts

Les renforts doivent mourir très facilement, mais représentent un danger en termes de dégâts (ces valeurs sont
recommandées pour 4 entités de mêlée ou plus, l'utilisation réelle peut varier):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 coup pour tuer
damageMultiplier: 0.6 #1 cœur de dégâts
```

## Création de mini-boss

Les mini-boss doivent tenir bon et poser un défi mécanique aux joueurs. Ce devrait être un test de compétence qui dure
un peu, mais pas quelque chose d'extrêmement mortel:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 coups pour tuer
damageMultiplier: 1.2 #2 cœurs de dégâts
```

## Création de boss

Les boss sont un véritable défi, la conclusion d'une montée en puissance dans un donjon et un véritable test de
compétence avec tout ce qui est en jeu. Les rencontres doivent être longues et la mort doit être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 coups pour tuer
damageMultiplier: 1.4 #2,5 cœurs de dégâts
```

**Ces valeurs recommandées ne sont que de simples estimations, et les valeurs finales doivent être ajustées en fonction
des rencontres spécifiques.**

**Ceci est particulièrement crucial pour les boss de donjon final ; vous voudrez peut-être dépasser considérablement la
valeur recommandée de 7.0 pour healthMultiplier afin de donner au dernier combat cette sensation épique.**

***

# Emballage du contenu EliteMobs pour la distribution

Enfin, vous voudrez probablement emballer votre donjon pour le stockage ou la distribution.

EliteMobs possède un système d'importation qui permet aux administrateurs d'importer, d'installer et de désinstaller
rapidement du contenu. [Vous pouvez voir comment cela fonctionne ici.]($language$/elitemobs/setup.md)

## Réduction des mondes

Parfois, vous devrez peut-être réduire la taille de votre monde Minecraft pour le rendre plus léger et, par conséquent,
plus facile à distribuer. Cela peut être réalisé grâce à l'utilisation
du [plugin WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Bien que le plugin soit indiqué
comme ne prenant en charge MineCraft que jusqu'à la version 1.19, il fonctionne de manière transparente sur la dernière
version de MineCraft au 25 janvier 2024.

<details>
<summary>Conseil</summary>
Si vous faites cela pour la première fois, il pourrait être judicieux de créer une sauvegarde de votre monde au cas où quelque chose tournerait mal.
</details>

Une fois le plugin installé, naviguez vers le milieu du monde ou la zone spécifique que vous souhaitez réduire. Ensuite,
exécutez la commande `/wb set x`, où `x` représente la taille approximative du rayon que vous souhaitez pour votre zone.

<details>
<summary>Conseil</summary>
Si <code>/wb</code> ne fonctionne pas pour vous, essayez <code>/worldborder:wb</code>.
</details>

Après avoir exécuté cette commande, volez jusqu'aux bords de votre monde pour vérifier que la bordure du monde a été
correctement définie et couvre la taille prévue. Vous reconnaîtrez que vous avez atteint le bord de la bordure du monde
lorsque vous serez repoussé, accompagné d'un message dans le chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

Dans l'image ci-dessus, nous visons à réduire le monde autour des blocs violets, en ne laissant que quelques morceaux
autour d'eux. Pour ce faire, nous nous tenons au milieu de la zone violette sur les carrés rouges et
exécutons `/wb set 50`, en définissant la bordure du monde juste au-delà de la zone violette.

Ensuite, nous utilisons la commande `/wb trim [freq] [pad]`, avec la fréquence définie sur 200 et le pad sur 20. Le pad
détermine combien de morceaux doivent être laissés autour de la bordure du monde (la zone violette), et la fréquence
détermine combien de morceaux doivent être traités par seconde. Après avoir exécuté `/wb trim 200 20`, nous serons
invités à confirmer en exécutant `/wb trim confirm`. Nous confirmons l'action, et après un certain temps, notre monde
sera réduit, ce qui réduira sa taille et le rendra plus pratique pour la distribution.

Vous pouvez maintenant supprimer la bordure du monde en utilisant `/wb clear all` ou la laisser si vous le souhaitez.

## Réduction du dossier du monde

Il existe plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons ignorer car les plugins ne
les utilisent pas tous. Cela réduira la taille de votre monde et le rendra plus facile à distribuer.

Pour un environnement de monde NORMAL:

Pour préparer votre monde, conservez les fichiers et dossiers suivants:

1. Dossier **region**
2. **raids.dat** du dossier **data** (assurez-vous qu'il est placé à l'intérieur du dossier **data** lors de la copie)
3. Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements de monde NETHER et THE_END:

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1. Dossier **region** à l'intérieur du dossier **DIM-1** (assurez-vous qu'il est placé à l'intérieur du dossier **DIM-1
   ** lors de la copie)
2. **raids.dat** du dossier **data** (assurez-vous qu'il est placé à l'intérieur du dossier **data** lors de la copie)
3. Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.

## Exécution de la commande package

EliteMobs possède la commande **`/em package <nomDuDonjon> <version>`**. Cette commande parcourt tous les dossiers de
configuration d'EliteMobs et regroupe automatiquement tout le contenu des dossiers qui correspondent au `nomDuDonjon`
dans un fichier compressé et un dossier normal dans le dossier `exports` d'EliteMobs.

***Pour cette raison, il est fortement recommandé de conserver le contenu que vous souhaitez emballer dans des dossiers
portant le même nom que le nom de votre package.*** Sinon, vous devrez rassembler et emballer manuellement les fichiers
dans la structure de fichiers pour la distribution.

## Ajout du fichier de package de donjon

Si vous créez un donjon, vous devrez ajouter manuellement le fichier de package de donjon dans le dossier nouvellement
généré dans le dossier exports. Votre fichier de configuration de package de donjon doit respecter le format décrit
ci-dessus et être placé dans un dossier
appelé `content_packages`. [Consultez la structure des fichiers pour plus d'informations.](#structure-des-fichiers).

**Assurez-vous de compresser votre donjon une fois terminé!**

## Structure des fichiers

Si vous avez tout fait correctement, la structure du fichier doit être similaire à cet exemple, où nous avons appelé le
donjon `mon_donjon_cool`:

<details>
<summary>Exemple de structure de fichiers mon_donjon_cool</summary>

- mon_donjon_cool.zip
    * content_packages
        * mon_donjon_cool.yml <- C'est là que va votre fichier de configuration de package de donjon
    * worldcontainer
        * [Vos dossiers de monde vont ici]
    * wormholes
        * mon_donjon_cool
            * [Vos trous de ver vont ici]
    * npcs
        * mon_donjon_cool
            * [Vos PNJ vont ici]
    * customtreasurechests
        * mon_donjon_cool
            * [Vos coffres au trésor vont ici]
    * customquests
        * mon_donjon_cool
            * [Vos quêtes vont ici]
    * customitems
        * mon_donjon_cool
            * [Vos éléments personnalisés vont ici]
    * custombosses
        * mon_donjon_cool
            * [Vos boss personnalisés vont ici]
    * customarenas
        * mon_donjon_cool
            * [Vos arènes personnalisées vont ici]
    * powers
        * mon_donjon_cool
            * [Vos pouvoirs personnalisés vont ici]
    * world_blueprints
        * mon_donjon_cool
            * [Votre dossier de monde va ici, utilisé pour les donjons instanciés]
    * customevents
        * mon_donjon_cool
            * [Vos événements personnalisés vont ici]
    * customspawns
        * mon_donjon_cool
            * [Vos apparitions personnalisées vont ici]
    * models
        * [Vos modèles au format bbmodel ModelEngine vont ici, accepte les dossiers]

</details>

Cela permet à la plupart des utilisateurs de faire glisser et de déposer des fichiers directement sur leur serveur et de
le faire fonctionner immédiatement.

***Important: lorsque vous emballez pour la distribution, assurez-vous de DÉSINSTALLER D'ABORD LE MINIDONJON! Vous ne
voulez pas distribuer des minidonjons installés, vous voulez que les administrateurs les configurent sur leurs serveurs!
***

# Partage des packages de donjon que vous avez créés avec la communauté

Discord contient une section [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") où les gens
peuvent partager leurs créations de minidonjons. N'hésitez pas à contribuer!
