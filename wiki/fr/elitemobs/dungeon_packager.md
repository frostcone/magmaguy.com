```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les donjons ?

Vous pouvez trouver des informations sur les donjons, y compris des informations sur les donjons préfaits [ici]($language$/elitemobs/dungeons.md).

***

# Qu'est-ce que le packager de donjons ?

Le packager de donjons permet aux administrateurs non seulement de créer et de packager des donjons, mais aussi de packager tout type de contenu EliteMobs. Cela comprend des choses comme les packs d'événements, les packs de modèles, les arènes, les packs de PNJ, les packs d'objets, etc.

<details>

<summary>Pourquoi utiliser des packages de donjons ?</summary>

- ***Donjons instanciés !*** Les donjons instanciés ne peuvent être créés que via le système de package de donjons.
- ***Sauvegardes sécurisées des minidungeons !*** Si vous créez un package de donjons, vous pourrez le déployer et le redéployer sur n'importe quel serveur que vous souhaitez, à tout moment et pour quelque raison que ce soit.
- ***Facile à activer et à désactiver !*** Vous pouvez toujours faire `/em setup` et désactiver ou activer temporairement ou définitivement les packages de donjons.
- ***Facile à partager !*** Si vous souhaitez partager vos créations, les packages de donjons peuvent simplement être zippés et envoyés à d'autres personnes. Il existe une salle Discord dédiée aux créations de la communauté si vous êtes intéressé !
- ***Téléportations !*** Les packages de donjons créent automatiquement des emplacements de téléportation accessibles dans la page Téléportations du menu `/em`, ce qui peut être très utile dans de nombreuses configurations.

</details>

# Créer des donjons

Les paramètres suivants sont utilisés pour créer un fichier de configuration qui doit aller dans le dossier `dungeonpackages`. Ces paramètres sont utilisés pour créer des donjons spécifiquement et ne sont pas nécessaires si vous souhaitez simplement utiliser le packager de donjons pour distribuer du contenu non-dungeon comme un pack d'objets ou d'événements.

## Plugins requis

Pour utiliser le packager de donjons, vous aurez besoin du plugin suivant :

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protège le minidungeon

## Créer un donjon, étape par étape

EliteMobs avait l'habitude d'avoir deux principaux types de donjons : basés sur le monde et basés sur les schémas.

Les donjons basés sur les schémas étaient associés à une construction schématique. Ils sont maintenant supprimés et ne sont plus pris en charge.

Tous les donjons EliteMobs sont désormais basés sur le monde.

***

### Valeurs globales

Les valeurs suivantes s'appliquent à tous les donjons

<div align="center">

### isEnabled

Définit si le package de donjons est activé.

| Clé         |      Valeurs       | Par défaut | Obligatoire |
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

Définit le nom du contenu. Prend en charge les [codes de couleur](#color_codes).

| Clé         |      Valeurs       | Par défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Définit le type d'emplacement utilisé par le donjon.

| Clé         |        Valeurs         | Par défaut | Obligatoire |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none   |    ✅      |

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

| Clé         |                    Valeurs                    | Par défaut | Obligatoire |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none   |    ✅      |

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

Définit les informations supplémentaires qui apparaîtront dans l'écran `/em setup`. À des fins d'information uniquement. Prend en charge les [codes de couleur](#color_codes).

| Clé         |           Valeurs            | Par défaut | Obligatoire |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Définit le lien de téléchargement lorsque le contenu n'est pas téléchargé. À des fins d'information uniquement.

| Clé         |      Valeurs       | Par défaut | Obligatoire |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  none   |    ❌      |

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

Définit la catégorie de taille du package de donjons. À des fins d'information uniquement.

| Clé         |   Valeurs    | Par défaut | Obligatoire |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Special [1] |  none   |    ✅      |

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

**Special [1]**

<details> 

<summary><b>Développer le tableau</b></summary>

<div align="center">

| Clé | Description                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Les repaires sont un type de petit donjon qui se concentre sur un grand combat de boss.  |
| `SANCTUM`    | Les sanctuaires sont l'équivalent des repaires instanciés. Cela signifie qu'ils se concentrent autour d'un énorme combat de boss. |
| `MINIDUNGEON`    | Les minidungeons sont un type de donjon de taille moyenne qui contient généralement 3 à 15 mini-boss et un grand boss, ainsi qu'un grand nombre de "mobs" de base qui sont censés être "farmés" par les joueurs pour obtenir des pièces et de l'équipement. |
| `DUNGEON`    | Les donjons sont l'équivalent des minidungeons instanciés. Il s'agit du type de donjon MMORPG le plus traditionnel, où les joueurs font équipe et traversent une série de mobs de base et de mini-boss pour affronter un boss final. |
| `RAID`    | Bientôt disponible !|
| `ADVENTURE`    | Les aventures sont des cartes d'aventure complètes. Elles comprennent des lignes de quêtes, des PNJ, un grand nombre de mini-boss et de boss et peuvent même contenir leurs propres arènes ou donjons. |
| `ARENA`    | Les arènes sont des zones de survie basées sur des vagues dans lesquelles les joueurs sont récompensés pour avoir vaincu les vagues. |
| `OTHER`    | Tout ce qui ne correspond pas aux catégories précédentes. |

Pour des descriptions plus détaillées, voir [Donjons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Définit si le package de donjons doit être protégé par WorldGuard.

| Clé         |      Valeurs       | Par défaut | Obligatoire |
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

Définit la version du package de donjons.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  none   |    ✅      |

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

Définit les informations qui apparaissent dans le menu. Prend en charge les [codes de couleur](#colorcodes).

*Ne fonctionne que lorsque `/em` est défini en mode livre à l'aide de `/em alt`.*

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Définit le message qui apparaît lorsqu'un joueur entre dans la zone du donjon. Prend en charge les [codes de couleur](#colorcodes).

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Définit le message qui apparaît lorsqu'un joueur quitte la zone du donjon. Prend en charge les [codes de couleur](#colorcodes).

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Définit si le package de donjons contient des modèles personnalisés (pour ModelEngine ou FreeMinecraftModels).

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  none   |    ❌      |

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

**Obligatoire pour les donjons instanciés !**

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Définit le niveau de contenu que le donjon doit afficher dans le menu EM.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  none   |    ❌      |

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

Définit si le donjon doit être un donjon Enchantment Challenge.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
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

Les valeurs suivantes ne s'appliquent qu'aux donjons basés sur le monde.

<div align="center">

***

### worldName

Définit le nom du monde qui doit être packagé.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

Cette fonction définit le nom du monde du trou de ver, qui sert de monde secondaire lié au monde principal. Il est utilisé pour des fonctionnalités comme les hubs de téléportation ou des salles de boss uniques.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

Définit l'environnement du monde.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none   |    ✅      |

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

Définit l'emplacement de téléportation du package de donjons. C'est là que les joueurs seront téléportés lorsqu'ils entreront dans le donjon.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Autorise ou empêche les explosions d'endommager les blocs dans un donjon. Les explosions sont considérées comme des explosions d'élite, donc tout dommage aux blocs sera régénéré dans les 2 minutes.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
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

*Les donjons instanciés créent un nouveau monde à chaque fois qu'un groupe de joueurs souhaite terminer un donjon et le suppriment une fois terminé. Pour que cela fonctionne correctement, vous devez placer un dossier suivant le `dungeonConfigFolderName` dans le dossier de configuration `world_blueprints` d'EliteMobs.*

*Vous placez ensuite le monde que vous utiliserez dans le dossier que vous avez créé, en vous assurant que le fichier `session.lock` du monde est supprimé.*

Les valeurs suivantes ne s'appliquent qu'aux donjons instanciés. Notez que tous les donjons instanciés sont des donjons du monde, ils utilisent donc également les valeurs des donjons du monde.

<div align="center">

***

### startLocation

Définit l'emplacement de téléportation du point de départ du donjon instancié. C'est là que les joueurs seront téléportés lorsqu'ils lanceront le donjon instancié avec `/em start`.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Définit la permission requise pour entrer dans l'instance du donjon.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  none   |    ❌      |

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

Définit le nombre minimum de joueurs requis pour lancer un donjon.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
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

Définit le nombre minimum de joueurs requis pour lancer un donjon.

| Clé         |  Valeurs  | Par défaut | Obligatoire |
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

Définit la liste des objectifs du donjon requis pour que le donjon soit considéré comme terminé.

| Clé         |           Valeurs            | Par défaut | Obligatoire |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Exemples</b></summary>

<div align="left">

Il existe actuellement deux types d'objectifs de donjon :

* Tuer la cible : `filename=boss.yml:amount=X`
* Tuer un pourcentage du donjon : `clearpercentage=X.Y`

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

**Obligatoire pour les donjons instanciés !**

| Clé         |   Valeurs    | Par défaut | Obligatoire |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Special [1] |  none   |    ❌      |

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

**Special [1]**

<details>

<summary><b>Développer le tableau</b></summary>

<div align="center">

La définition des difficultés de donjon instancié créera automatiquement différentes options de difficulté lors de l'entrée dans le donjon. 

Les noms de difficulté définis ici seront ceux utilisés dans le dossier des boss personnalisés, où vous pouvez définir les pouvoirs des boss en fonction de la difficulté.

Les difficultés sont dans un format de liste qui comporte les champs suivants :

|     Key     | Description                                                                                                                                                                                                                                                    | Valeurs | Obligatoire |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nom de la difficulté pour les joueurs.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |
|    `id`     | ID de la difficulté, utilisé dans les boss personnalisés et les objets personnalisés pour la fonctionnalité basée sur la difficulté.                                                                                                                                                                 |[String](#string)        |     ✅     |
| `levelSync` | Définit le niveau de la synchronisation de niveau, le cas échéant. La synchronisation de niveau fait en sorte que tout l'équipement des joueurs atteigne le maximum à la valeur définie, ce qui rend impossible pour les joueurs d'être surclassés pour un donjon et le maintient pertinent pour les courses ultérieures. Basé sur le système de synchronisation de niveau Final Fantasy 14. |[Integer](#integer)        |     ❌     |


</div>

</details>

</div>

***

# Valeurs de boss recommandées

## Créer un mob de donjon moyen

Nous vous recommandons de laisser le paramètre normalizedCombat défini sur true. Ce paramètre normalise tous les mobs pour qu'ils évoluent de manière égale avec la santé et les dégâts, quel que soit leur type d'entité.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 hits to slay 
damageMultiplier: 1.0 #1.5 hearts of dmg
```

Bien sûr, voici la version révisée avec clarté et le formatage conservé :

**Remarque : Étant donné que `1.0` est la valeur par défaut pour la santé et les dégâts, vous pouvez simplement omettre de définir `healthMultiplier` ou `damageMultiplier` et définir `normalizedCombat` sur `true`.**

## Créer des packs de déchets

Les packs de déchets sont nombreux, mais pas très dangereux :

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 hits to slay 
damageMultiplier: 0.5 #0.5 hearts of dmg
```

## Créer des renforts

Les renforts devraient mourir très facilement, mais poser un danger en termes de dégâts (ces valeurs sont recommandées pour 4 entités de mêlée ou plus, l'utilisation réelle peut varier) :

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 hit to slay 
damageMultiplier: 0.6 #1 heart of dmg
```

## Créer des mini-boss

Les mini-boss devraient tenir bon et poser un défi mécanique aux joueurs. Ce devrait être un test de compétences qui dure un certain temps, mais pas quelque chose d'extrêmement mortel :

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 hits to slay 
damageMultiplier: 1.2 #2 hearts of dmg
```

## Créer des boss

Les boss sont un véritable défi, la conclusion d'une accumulation dans un donjon et un véritable test de compétences avec tout en jeu. Les rencontres doivent être longues et la mort doit être une menace présente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 hits to slay 
damageMultiplier: 1.4 #2.5 hearts of dmg
```

**Ces valeurs recommandées ne sont que des estimations approximatives, et les valeurs finales doivent être ajustées en fonction des rencontres spécifiques.**

**C'est particulièrement crucial pour les boss finaux du donjon ; vous voudrez peut-être dépasser considérablement la valeur recommandée de 7.0 pour healthMultiplier afin de donner à la dernière bataille cette sensation épique.**

***

# Packager le contenu EliteMobs pour la distribution

Enfin, vous voudrez probablement packager votre donjon pour le stockage ou la distribution.

EliteMobs a un système d'importation qui permet aux administrateurs d'importer, d'installer et de désinstaller rapidement du contenu. [Vous pouvez voir comment cela fonctionne ici.]($language$/elitemobs/setup.md)

## Rogner des mondes

Parfois, vous devrez peut-être réduire la taille de votre monde Minecraft pour le rendre plus léger et, par conséquent, plus facile à distribuer. Cela peut être fait à l'aide du plugin [WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Malgré le fait que le plugin soit répertorié comme ne prenant en charge que MineCraft jusqu'à la version 1.19, il fonctionne parfaitement sur la dernière version de MineCraft au 25 janvier 2024.

<details>
<summary>Astuce</summary>
Si vous faites cela pour la première fois, il est peut-être judicieux de créer une sauvegarde de votre monde au cas où quelque chose tournerait mal.
</details>

Une fois le plugin installé, naviguez jusqu'au milieu du monde ou de la zone spécifique que vous souhaitez rogner. Ensuite, exécutez la commande `/wb set x`, où `x` représente la taille approximative du rayon que vous souhaitez pour votre zone.

<details>
<summary>Astuce</summary>
Si <code>/wb</code> ne fonctionne pas pour vous, essayez <code>/worldborder:wb</code>.
</details>

Après avoir exécuté cette commande, volez jusqu'aux limites de votre monde pour vérifier que la limite du monde a bien été définie et couvre la taille souhaitée. Vous reconnaîtrez que vous atteignez la limite du monde lorsque vous êtes repoussé, accompagné d'un message dans le chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

Dans l'image ci-dessus, nous visons à rogner le monde autour des blocs violets, ne laissant que quelques blocs autour d'eux. Pour ce faire, nous nous tenons au milieu de la zone violette sur les carrés rouges et exécutons `/wb set 50`, en définissant la limite du monde juste au-delà de la zone violette.

Ensuite, nous utilisons la commande `/wb trim [freq] [pad]`, avec la fréquence définie sur 200 et le pad sur 20. Le pad détermine le nombre de blocs qui doivent être laissés autour de la limite du monde (la zone violette), et la fréquence détermine le nombre de blocs qui doivent être traités par seconde. Après avoir exécuté `/wb trim 200 20`, nous serons invités à confirmer en exécutant `/wb trim confirm`. Nous confirmons l'action, et après un certain temps, notre monde sera rogné, réduisant sa taille et le rendant plus pratique à distribuer.

Vous pouvez maintenant supprimer la limite du monde à l'aide de `/wb clear all` ou simplement la laisser si vous le souhaitez.

## Rogner le dossier du monde

Il existe plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons jeter car les plugins ne les utilisent pas tous. Cela réduira la taille de votre monde et le rendra plus facile à distribuer.

Pour un environnement de monde NORMAL :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1. Dossier **region**
2. **raids.dat** à partir du dossier **data** (assurez-vous qu'il est placé dans le dossier **data** lors de la copie)
3. Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements de monde NETHER et THE_END :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1. Dossier **region** dans le dossier **DIM-1** (assurez-vous qu'il est placé dans le dossier **DIM-1** lors de la copie)
2. **raids.dat** à partir du dossier **data** (assurez-vous qu'il est placé dans le dossier **data** lors de la copie)
3. Fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.

## Exécuter la commande de package

EliteMobs a la commande **`/em package <dungeonName> <version>`**. Cette commande parcourt tous les dossiers de configuration d'EliteMobs et package automatiquement tout le contenu des dossiers qui correspondent au `dungeonName` dans un fichier zippé et un dossier normal dans le dossier `exports` d'EliteMobs.

***Pour cette raison, il est fortement recommandé de conserver le contenu que vous souhaitez packager dans des dossiers portant le même nom que le nom de votre package.*** Sinon, vous devrez rassembler et packager manuellement les fichiers dans la structure de fichiers pour la distribution.

## Ajouter le fichier de package de donjons

Si vous créez un donjon, vous devrez ajouter manuellement le fichier de package de donjons dans le dossier nouvellement généré dans le dossier exports. Votre fichier de configuration de package de donjons doit suivre le format décrit ci-dessus et être placé dans un dossier appelé `dungeonpackages`. [Consultez la structure de fichiers pour plus d'informations à ce sujet.](#file-structure).

**Assurez-vous de compresser votre donjon une fois terminé !**

## Structure de fichiers

Si vous avez tout fait correctement, la structure de fichiers devrait ressembler à cet exemple, où nous avons appelé le donjon `my_cool_dungeon` :

<details>
<summary>Exemple de structure de fichiers my_cool_dungeon</summary>

- my_cool_dungeon.zip
    * dungeonpackages
        * my_cool_dungeon.yml <- C'est là que votre fichier de configuration de package de donjons se trouve
    * worldcontainer
        * [Vos dossiers de monde se trouvent ici]
    * wormholes
        * my_cool_dungeon
            * [Vos trous de ver se trouvent ici]
    * npcs
        * my_cool_dungeon
            * [Vos PNJ se trouvent ici]
    * customtreasurechests
        * my_cool_dungeon
            * [Vos coffres au trésor personnalisés se trouvent ici]
    * customquests
        * my_cool_dungeon
            * [Vos quêtes personnalisées se trouvent ici]
    * customitems
        * my_cool_dungeon
            * [Vos objets personnalisés se trouvent ici]
    * custombosses
        * my_cool_dungeon
            * [Vos boss personnalisés se trouvent ici]
    * customarenas
        * my_cool_dungeon
            * [Vos arènes personnalisées se trouvent ici]
    * powers
        * my_cool_dungeon
            * [Vos pouvoirs personnalisés se trouvent ici]
    * world_blueprints
        * my_cool_dungeon
            * [Votre dossier de monde se trouve ici, utilisé pour les donjons instanciés]
    * customevents
        * my_cool_dungeon
            * [Vos événements personnalisés se trouvent ici]
    * customspawns
        * my_cool_dungeon
            * [Vos spawns personnalisés se trouvent ici]
    * models
        * [Vos modèles au format bbmodel ModelEngine se trouvent ici, accepte les dossiers]

</details>

Cela permet à la plupart des utilisateurs de faire glisser et de déposer des fichiers directement sur leur serveur et de les faire fonctionner immédiatement.

***Important : lors du conditionnement pour la distribution, assurez-vous de DÉSINSTALLER LE MINIDUNGEON EN PREMIER ! Vous ne voulez pas distribuer des minidungeons installés, vous voulez que les administrateurs les configurent sur leurs serveurs !***

# Partager les packages de donjons que vous avez créés avec la communauté

Discord contient une section [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") où les gens peuvent partager leurs créations de minidungeons. N'hésitez pas à contribuer !
```