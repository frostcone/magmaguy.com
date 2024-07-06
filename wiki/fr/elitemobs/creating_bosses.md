[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Création de boss personnalisés

# Avant de commencer

## Où vont les fichiers de boss ?

Les fichiers de boss vont dans le dossier de configuration `~/plugins/EliteMobs/custombosses`.

Il est possible de créer des sous-dossiers, tels que `~/plugins/EliteMobs/custombosses/mybosses`. Ceci est recommandé pour garder les choses organisées.

Un fichier définit un boss, bien qu'il soit possible de faire apparaître le même boss plusieurs fois et même de définir plusieurs emplacements d'apparition pour le même fichier de boss.

Il est possible d'utiliser le [webapp](https://magmaguy.com/webapp/webapp.html) pour créer rapidement et facilement des boss personnalisés et plus encore.

## Configuration minimale possible

**Le plus petit fichier de configuration possible pour un boss personnalisé est :**
```yml
```

Notez qu'il ne s'agit que d'un fichier vide. Cela fera quand même apparaître un boss personnalisé zombie avec un nom personnalisé, car ce sont les valeurs par défaut. **Tout dans cette page est facultatif !**

## Exemple de boss

<div align="center">

Jetons un coup d'œil à un exemple de fichier de boss.

<details> 
<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eBoss de test'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: Un boss de test est apparu !
deathMessage: Un boss de test a été tué par $players !
escapeMessage: Une entité de boss de test s'est échappée !
locationMessage: 'Entité de test : $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Je t'ai frappé !"
onDamagedMessages:
- "J'ai été touché !"
```

</div>

</details>

</div>


## Paramètres de base

<div align="center">

### isEnabled

Définit si le boss est activé.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

Définit le type d'entité du boss.

| Clé |                                                                                   Valeurs                                                                                    | Défaut |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Choisissez parmi ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> La valeur doit également être présente dans le dossier `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

Définit le nom du boss.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `name` | [String](#string), accepte les [codes de couleur](#color_codes) et les espaces réservés répertoriés ci-dessous | "Nom par défaut" |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss cool !"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si vous souhaitez inclure le niveau du boss dans leur champ de nom, utilisez simplement l'un des espaces réservés suivants.

| Espace réservé | Description | Exemple | Sortie (pour un boss de niveau 10) |
|-|:-:|:-:|-|
| `$level` | Remplace par le niveau | "$level Boss cool" | `10 Boss cool` |
| `$normalLevel` | Remplace par le niveau, conçu pour les monstres normaux | `"$normalLevel Boss cool"` | `[10] Boss cool` |
| `$minibossLevel` | Remplace par le niveau, conçu pour les miniboss | `"$minibossLevel Boss cool"` | `〖10〗 Boss cool` |
| `$bossLevel` | Remplace par le niveau, conçu pour les boss | `"$bossLevel Boss cool"` | `『10』 Boss cool` |
| `$reinforcementLevel` | Remplace par le niveau, conçu pour les renforts | `"$reinforcementLevel Boss cool"` | `〔10〕 Boss cool` |
| `$eventBossLevel` | Remplace par le niveau, conçu pour les boss d'événement | `"$eventBossLevel Boss cool"` | `「10」 Boss cool` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss cool !"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Définit le niveau du boss.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `entityType` | Nombres [entiers](#integer) positifs ou `dynamic` | `dynamic` |

`dynamic` est utilisé pour les événements et s'ajuste au niveau des joueurs proches au moment de l'apparition du boss.
Ce n'est pas recommandé pour les boss régionaux.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### healthMultiplier

Définit la santé du boss.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `healthMultiplier` | [Multiplicateur](#multiplier) | `1.0` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

Définit le multiplicateur de dégâts du boss.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `damageMultiplier` | [Multiplicateur](#multiplier) | `1.0` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

Définit si le boss utilise la variante bébé de la foule. Ne peut être appliqué qu'aux monstres avec des variantes de bébé.
Si vous souhaitez [déguiser]($language$/elitemobs/libsdisguises.md) le boss mais que vous souhaitez également qu'il reste un bébé lorsqu'il est déguisé (assurez-vous que l'entité de déguisement prend également en charge la variante bébé), vous pouvez utiliser ce paramètre :
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>


***

### helmet/chestplate/leggings/boots/mainhand/offhand

Définit l'armure du boss. Tous les modèles Minecraft ne sont pas en mesure d'afficher une armure. L'armure de boss est purement cosmétique et n'affecte pas le gameplay.

| Clé |                                    Valeurs                                     | Défaut |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Matériau](#material), [UUID](https://minecraftuuid.com/)           | aucun |
| `chestplate` | [Matériau](#material) | aucun |
| `leggings` | [Matériau](#material) | aucun |
| `boots` | [Matériau](#material) | aucun |
| `mainHand` | [Matériau](#material) | aucun |
| `offHand` | [Matériau](#material) | aucun |

**Remarque :** Ce champ vous permet également de définir des modèles personnalisés pour les éléments. Pour définir l'ID de modèle personnalisé, ajoutez l'ID après le type de matériau en suivant ce format : `ITEM_MATERIAL:ID`. Exemple : `DIAMOND_SWORD:1` définit que le boss porte une épée en diamant avec le modèle personnalisé n° 1 dans votre pack de textures.

**Remarque 2 :** Ce champ vous permet également de définir des couleurs de cuir personnalisées avec le format `ITEM_MATERIAL:CODE` où le code est la représentation hexadécimale de la couleur. Exemple : `LEATHER_LEGGINGS:ffa500` créerait des leggings orange. Vous pouvez utiliser des codes hexadécimaux, supprimez simplement le `#` du code hexadécimal. Vous pouvez obtenir des codes hexadécimaux à partir de [ici](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Remarque 3 :** Le champ du casque vous permet également de définir les casques de foule comme étant des têtes de joueur. Obtenez simplement l'UUID de la tête de joueur que vous souhaitez utiliser et saisissez-la dans le champ du casque. *Le joueur doit être en ligne pour que cela fonctionne ou la tête sera par défaut une tête Minecraft générique.* Vous pouvez obtenir les UUID des joueurs à partir de [ici](https://minecraftuuid.com/).

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

Définit les pouvoirs du boss.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `powers` | Reportez-vous à la liste ci-dessous | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*Remarque : Vous pouvez consulter [cette page]($language$/elitemobs/premade_powers.md) si vous souhaitez voir une liste des pouvoirs prédéfinis que vous pouvez utiliser.*

***

### Configuration intermédiaire - Apparition de renforts

Les renforts entrent également dans la catégorie des pouvoirs, en utilisant les paramètres suivants :

<details> 

<summary><b>Paramètres de renfort</b></summary>

| Clé | Description |                                                                                                             Valeurs                                                                                                             | Défaut |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Ce qui déclenche l'apparition du renfort. Obligatoire. |                                                                                                    Reportez-vous à la liste ci-dessous                                                                                                     | aucun |
| `filename` | Nom de fichier du boss à faire apparaître comme renfort. Obligatoire. |                                                                                                       [String](#string)                                                                                                        | aucun |
| `chance` | Chance que le renfort apparaisse. Facultatif. |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | Définit la quantité de renforts à générer. Facultatif. |                                                                                                      [Entier](#integer)                                                                                                       | `1` |
| `inheritAggro` | Fait en sorte que le renfort hérite de l'aggro du boss. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Fait apparaître les renforts dans un rayon de 30 blocs du boss. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Fait en sorte que le renfort hérite du niveau du boss. Facultatif |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Fait apparaître le renfort en utilisant le [système d'apparition personnalisé]($language$/elitemobs/creating_spawns.md). Utilisé uniquement pour `summonType : GLOBAL`
| `location` | Lieu d'apparition. Facultatif. | `world_name,x,y,z` ou `x,y,z` pour un emplacement relatif au boss. Le décalage est relatif à l'emplacement d'apparition des boss régionaux. Vous pouvez également utiliser `same_as_boss` pour faire apparaître des renforts dans le même monde que le boss. | aucun |
| `lightningRod` | Paramètre spécial pour `summonType : ON_COMBAT_ENTER_PLACE_CRYSTAL`. Fait apparaître des cristaux d'extrémité éclair autour d'eux. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | aucun |

</details>

Les types d'invocation définissent les conditions d'apparition des renforts. Voici une liste des types d'invocation valides :

<details> 

<summary><b>Types d'invocation</b></summary>

| Valeur |                                                                         Description                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Ne génère les renforts qu'une seule fois, la première fois que le boss est endommagé.                                           |
| `ON_HIT`  |                                                              Génère les renforts en cas de coup.                                                              |
| `ON_COMBAT_ENTER` |                                                   Génère les renforts lorsque le boss entre en combat.                                                    |
| `GLOBAL` | Génère un renfort pour chaque joueur en ligne. Nécessite que la clé `customSpawn` ait un [apparition personnalisé]($language$/elitemobs/creating_spawns.md) valide défini. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Place des renforts de cristal d'extrémité sur l'entrée de combat, uniquement pour une utilisation avec des combats de dragon personnalisés.                                  |

</details>

Notez qu'il est également possible de faire apparaître des renforts via [Elite Scripts]($language$/elitemobs/creating_powers.md), il existe donc des moyens plus personnalisables de faire apparaître des renforts.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### Configuration experte - Création de vos propres pouvoirs

Il est possible de créer vos propres pouvoirs, soit sur le fichier du boss lui-même, soit en tant que nouveau fichier de configuration dans le dossier powers. Vous pouvez en apprendre davantage à ce sujet [ici]($language$/elitemobs/creating_powers.md).

### Limiter les pouvoirs en fonction de la difficulté du donjon instancié

Les [donjons instanciés]($language$/elitemobs/dungeons.md&section=instanced-dungeons) peuvent avoir des paramètres de difficulté, et il est possible de faire en sorte qu'un pouvoir spécifique ne soit activé que pour des difficultés spécifiques.

<details> 

<summary><b>Options de limitation de puissance</b></summary>

<div align="left">

| Clé | Description | Valeurs | Défaut |
|-|:-:|:-:|-|
| `filename` | Nom de fichier de l'alimentation. | [String](#string) | aucun |
| `difficultyID` | Nom de la difficulté, correspondant au nom de la difficulté dans le package du donjon. | [String](#string) | aucun |

</div>

</details>

Ceci ne s'appliquera qu'aux donjons instanciés.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

Définit le message à envoyer lorsque le boss apparaît. Nécessite la configuration de l'[announcementPriority](#announcementPriority).

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `spawnMessage` | [Strings](#string) et [codes de couleur](#color_codes) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Je me lève encore une fois !
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Définit la liste des messages à envoyer lorsque le boss meurt. Nécessite la configuration de l'[announcementPriority](#announcementPriority).

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `deathMessages` | [Strings](#string), [codes de couleur](#color_codes) et les espaces réservés ci-dessous | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Le boss de test a été tué !'
- '&c&l    1er attaquant : $damager1name &cavec $damager1damage dégâts !'
- '&6&l    2ème attaquant : $damager2name &6avec $damager2damage dégâts !'
- '&e&l    3ème attaquant : $damager3name &eavec $damager3damage dégâts !'
- '&4Tueurs : $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Les messages de décès utilisent les espaces réservés suivants :

<details> 

<summary><b>Espaces réservés</b></summary>

| Valeur | Description |
|-|:-:|
| `$damager1name` | Le nom du meilleur attaquant |
| `$damager2name` | Le nom du deuxième meilleur attaquant |
| `$damager3name` | Le nom du troisième meilleur attaquant |
| `$damager1damage` | Le montant des dégâts du meilleur attaquant |
| `$damager2damage` | Le montant des dégâts du deuxième meilleur attaquant |
| `$damager3damage` | Le montant des dégâts du troisième meilleur attaquant |
| `$players` | Affiche une liste de tous les attaquants |

</details>

### onKillMessage

Définit le message à envoyer lorsque le boss tue un joueur. Nécessite la configuration de l'[announcementPriority](#announcementPriority).

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `onKillMessage` | [Strings](#string) et [codes de couleur](#color_codes) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: Je gagne, tu perds !
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Définit la taille du boss slime, mais ne fonctionne que pour les Slimes et les Magmacubes.

</div>

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `slimeSize` | [Entier](#integer) | `4` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

Définit si le boss apparaîtra comme neutre ou non. Ceci ne s'applique qu'aux types d'entités pouvant être neutres, tels que les loups ou les golems de fer.

</div>

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `neutral` | [Booléen](#boolean) | `false` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Paramètres avancés

<div align="center">

### timeout

Définit la durée, en minutes, avant que le boss personnalisé ne disparaisse.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `timeout` | Temps (en minutes) [Entier](#integer) | `0` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
timeout: 20
```
Définit que le boss s'échappe après 20 minutes.

</div>

</details>

***

### isPersistent

Définit si le boss peut survivre à un déchargement de chunk. Recommandé uniquement pour les boss d'événement.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Exemple :

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Définit les armes contre lesquelles les boss peuvent être forts ou faibles.

| Clé |        Valeurs         | Défaut |
|-|:---------------------:|-|
| `damageModifiers` | [Matériau](#material) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

Dans cet exemple, les boss ne subiront que 80 % de dégâts des épées en diamant (ou 20 % de moins), mais subiront 200 % de dégâts des tridents (ou 2 fois plus).

</details>

***

### normalizedCombat



Modifie les dégâts et la santé maximale du boss pour qu'ils correspondent aux valeurs de l'entité normalisée dans `~/plugins/EliteMobs/mobproperties`. Il s'agit de la valeur par défaut pour les boss régionaux afin de garantir une courbe de difficulté fluide.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Exemple :
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

Définit le message qui est diffusé aux joueurs lorsque le boss s'échappe grâce à la mécanique de [délai d'expiration](#timeout). Nécessite la configuration de [announcementPriority](#announcementPriority).

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `escapeMessage` | [String](#string) | aucun |


<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara !"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Définit le message affiché dans la barre de boss. Ceci est utilisé pour suivre à la fois la santé du boss personnalisé et son emplacement dans le serveur. Nécessite la configuration de [annoucementPriority](#annoucementPriority).

| Clé |                                      Valeurs                                      | Défaut |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [Codes de couleur](#color_codes) et les espaces réservés répertoriés ci-dessous | aucun |

Espaces réservés :

| Valeur | Description |
|-|:-:|
| `$distance` | Est remplacé par la distance à laquelle le joueur se trouve du boss personnalisé. C'est l'option préférable. |
| `$location` | Est remplacé par les coordonnées d'emplacement x y z du boss personnalisé |


<details>


<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Boss cool : à $location à seulement $distance blocs !"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Cela afficherait quelque chose comme « Boss cool : à 414,55,347 à seulement 10 blocs ! »

</details>

***

### uniqueLootList

Définit les [objets personnalisés]($language$/elitemobs/creating_items.md) qui tombent du boss.

| Clé |        Valeurs        | Défaut |
|-|:--------------------:|-|
| `uniqueLootList` | [Liste](#string_list) | aucun |

Les entrées de butin dans le butin personnalisé suivent le format du tableau de butin. [Informations à ce sujet ici !]($language$/elitemobs/loot_tables.md) Notez que certains fichiers plus anciens peuvent utiliser des tableaux de butin obsolètes qui semblent différents de l'exemple.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

Définit si le boss lâchera du butin EliteMobs, à l'exclusion des objets dans [`uniqueLootList`](#uniqueLootList). Comprend des pièces de monnaie.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Il est recommandé de définir sur false pour les monstres de renfort.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

Définit si le boss personnalisé lâchera le butin vanilla généralement associé à son type de mob vanilla.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

Définit si le boss personnalisé lâchera du butin généré de manière procédurale à partir d'EliteMobs. N'inclut pas les pièces d'élite.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

Définit la traînée que le boss laisse derrière lui lorsqu'il se déplace.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `trails` | [Particules](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) ou [matériaux d'objets](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

Définit le message que la foule du boss affiche lorsqu'elle frappe un joueur. Il s'agit d'une liste, et celle utilisée est choisie au hasard dans la liste.

| Clé |        Valeurs        | Défaut |
|-|:--------------------:|-|
| `onDamageMessages` | [Liste](#string_list) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Je t'ai frappé !"
- "Haha, je t'ai frappé !"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Définit le message que la foule du boss affiche lorsqu'elle est endommagée par un joueur. Il s'agit d'une liste, et celle utilisée est choisie au hasard dans la liste.

| Clé |        Valeurs        | Défaut |
|-|:--------------------:|-|
| `onDamagedMessages` | [Liste](#string_list) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Tu m'as frappé !"
- "J'ai été touché !"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Définit l'entité que le boss montera et chevauchera.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `onDamagedMessages` | [Nom de fichier du boss à monter](#filename) ou [type d'entité](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | aucun |

N'essayez pas de faire monter le boss sur lui-même.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

Remarque : Les boss régionaux partageront leur laisse avec l'entité qu'ils montent, ce qui signifie qu'ils seront tous les deux ramenés à l'emplacement d'apparition s'ils dépassent la distance autorisée par leur laisse.

***

### announcementPriority

Définit le niveau de priorité pour les annonces. Des priorités plus basses signifient qu'aucune annonce n'est faite, des priorités plus élevées peuvent annoncer non seulement sur le chat mais également sur Discord si configuré.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `announcementPriority` | [Entier](#integer) | `1` |

Voici une liste de ce que font les priorités :

| Valeur |                                                                            Description                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   Le boss sera totalement silencieux, sans aucun message d'annonce.                                                   |
| `1` |                                Il s'agit de la valeur par défaut. Les boss peuvent envoyer des messages de chat, des messages d'apparition, de décès et d'évasion.                                |
| `2` |                               En plus des éléments de `1`, le boss sera défini comme pouvant être suivi par les joueurs via le menu `/em`.                                |
| `3` | En plus des éléments de `2`, les messages diffusés seront reflétés sur Discord si configuré. [Informations sur la configuration de Discord ici.]($language$/elitemobs/discordsrv.md) |

Voici un exemple de boss traçable, capable d'envoyer des messages d'apparition/de décès/d'évasion sur le chat et sur Discord :

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Remarque** : Vous devrez configurer spawnMessage, deathMessage/deathMessages, escapeMessage pour les annonces de chat et Discord et locationMessage pour la fonctionnalité de suivi si vous souhaitez utiliser le niveau de priorité d'annonce correspondant.

***

### followDistance

Définissez la distance à laquelle les boss aggro et entrent en combat.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `followDistance` | [Double](#double) | aucun, utilise les valeurs par défaut de Minecraft |

Remarque 1 : Les boss régionaux ont la moitié de la `followDistance` lorsqu'ils sont hors combat. C'est pour qu'ils n'agressent pas de trop loin, ce qui peut entraîner des problèmes de combat gênants en raison de contraintes de laisse.

Remarque 2 : Plus la `followDistance` est élevée, plus le boss devient gourmand en ressources CPU du serveur. À utiliser avec prudence et responsabilité !

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Définit une portée de 30 blocs où si un joueur se trouve à cette distance près du boss, il commencera à poursuivre/attaquer le joueur.

</details>

***

### onDeathCommands

Définit la liste des commandes à exécuter à la mort du boss personnalisé.

| Clé |        Valeurs        | Défaut |
|-|:--------------------:|-|
| `onDeathCommands` | [Liste](#string_list) | aucun |

La liste prend en charge les espaces réservés suivants :

| Valeur | Description |
|-|:-:|
| `$level` | Espace réservé pour le niveau du boss. |
| `$name` | Espace réservé pour le nom du boss. |
| `$chance=x$` | Fait qu'une commande a une chance de s'exécuter. |
| `$players` | Fait exécuter la commande une fois pour chaque joueur dans la liste des attaquants et remplace à chaque fois par le nom d'utilisateur d'un joueur différent de cette liste. |
| `$locationX` | Coordonnée X du boss au moment de la mort. |
| `$locationY` | Coordonnée Y du boss au moment de la mort. |
| `$locationZ` | Coordonnée Z du boss au moment de la mort. |
| `$damager1name` | Nom d'utilisateur du meilleur attaquant |
| `$damager2name` | Nom d'utilisateur du deuxième meilleur attaquant |
| `$damager3name` | Nom d'utilisateur du troisième meilleur attaquant |

Consultez l'exemple ci-dessous pour mieux comprendre comment ceux-ci fonctionnent.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players a tué $name ! C'était le niveau $level !"
- "$chance=0.5$ say Quelle tuerie !"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si Player1, Player2 et Player3 ont tous endommagé le boss avant de le tuer, voici ce que sera la sortie de la commande depuis la console :

<div align="left">

```
say Player1 a tué CustomBossName ! C'était le niveau X !
say Player2 a tué CustomBossName ! C'était le niveau X !
say Player3 a tué CustomBossName ! C'était le niveau X !
```

</div>

De plus, il y a 50 % de chances que ce qui suit soit également affiché :

<div align="left">

```
say Quelle tuerie !
```

</div>

</details> 

***

### onSpawnCommands

Définit la liste des commandes qui s'exécuteront à l'apparition du boss.

| Clé |        Valeurs        | Défaut |
|-|:--------------------:|-|
| `onSpawnCommands` | [Liste](#string_list) | aucun |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands) !** Les espaces réservés aux attaquants ne s'appliqueront pas car il n'y aura aucun attaquant à ce moment-là.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say Le boss est apparu !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Définit la liste des commandes qui s'exécuteront lorsque le boss entrera en combat.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `onCombatEnterCommands` | [Liste](#string_list) | aucun |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands) !** Les espaces réservés aux attaquants ne s'appliqueront pas car il n'y aura aucun attaquant à ce moment-là.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Le boss est entré en combat !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Définit la liste des commandes à exécuter lorsque le boss quitte le combat.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `onCombatLeaveCommands` | [Liste](#string_list) | aucun |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands) !**

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Le boss a quitté le combat !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Définit le déguisement LibsDisguises si ce plugin est activé. [Plus d'infos ici.]($language$/elitemobs/libsdisguises.md)

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `disguise` | [String](#string) | aucun |
| `customDisguiseData` | [String](#string) | aucun |

<details> 

<summary><b>Exemple de déguisement</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>Exemple de déguisement personnalisé</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Définit un déguisement personnalisé de skindex. [Consultez cette page]($language$/elitemobs/libsdisguises.md) pour apprendre à formater correctement ces données.

</details>

***

### customModel

Définit le modèle personnalisé à utiliser, si vous avez un modèle personnalisé et ModelEngine. [Plus d'infos ici.]($language$/elitemobs/custom_models.md)

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `customModel` | [String](#string) | aucun |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

Définit si le boss peut bouger. Les boss gelés peuvent toujours attaquer.
</br>*Remarque : cela peut ne pas fonctionner sur certaines entités.*

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

Définit la musique qu'un boss jouera, en commençant par son apparition. Nécessite que le fichier .ogg de la chanson soit dans le pack de ressources.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `song` | [String](#string) | aucun |

<details> 

<summary><b>Exemple</b></summary>

Il existe deux façons de configurer des chansons. Voici la première :

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Cela jouera la chanson ice_queen.idle pendant 76370 ticks, puis la lira en boucle. Notez que l'emplacement de la chanson est déterminé par le pack de ressources.

Voici la deuxième façon de configurer des chansons :

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Cela jouera la chanson ice_queen.end_transition pendant 14328 ticks, puis passera à ice_queen.end_loop pendant 28657 ticks et bouclera end_loop.

Cela permet aux boss d'avoir une chanson "d'intro" ou de "transition", puis une piste principale qui tourne en boucle.

</div>

</details>

***

### cullReinforcements

Définit si les renforts du boss seront supprimés lorsque le boss mourra.

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

Définit la vitesse de déplacement du boss.
</br>*Remarque : tout ce qui dépasse 0,36 est peut-être trop rapide.*

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | aucun |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Phases de boss

<div align="center">

Les boss peuvent avoir des phases qui changent lorsque le boss atteint un certain pourcentage de santé. Lorsque cela se produit, le boss commence à utiliser un fichier de configuration différent, ce qui signifie que tout ce qui concerne le boss peut changer, y compris des choses comme le type d'entité.
</br>Pour en savoir plus sur les phases de boss, cliquez [ici]($language$/elitemobs/creating_boss_phases.md).


| Clé | Description | Valeurs | Défaut |
|-|:-:|-|-|
| `phases` | Définit les phases que le boss aura. Obligatoire | [Liste](#string_list) | aucun |
| `phaseSpawnLocation` | Définit où le boss de phase apparaît. Optionnel | [String](#string) | aucun |


<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Pour cet exemple, nous allons montrer trois fichiers de configuration différents.

Premier fichier de configuration du boss : phase_1_boss.yml

```yml
name: "Phase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Deuxième fichier de configuration du boss : phase_2_boss.yml

```yml
name: "Phase 2"
entityType: SKELETON
```

Troisième fichier de configuration du boss : phase_3_boss.yml

```yml
name: "Phase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Ce boss passerait au fichier de configuration `phase_2_boss.yml` à 60 % de santé, et au fichier de configuration `phase_3_boss.yml` à 30 % de santé dans le même monde que la phase 2 et aux coordonnées x=10, y=64 et z=100. Le type d'entité et le nom du boss changeraient également.

Le format d'une entrée est `filename:healthPercentage`.

phaseSpawnLocation est facultatif, s'il n'est pas défini, le boss changera de phase là où il se trouve.

</details>

Les points suivants sont importants à savoir lors de la conception d'un boss de phase :

<div align="left">

- Le fichier de configuration de la première phase définit toutes les phases du boss.
- La menace/les dégâts comptés sont conservés entre les phases pour les joueurs.
- Le changement de phase est basé sur le pourcentage de santé perdu, qui est conservé lors du passage à une autre phase. Cela signifie qu'augmenter ou diminuer le multiplicateur de santé entre les phases ne soignera ni n'endommagera le boss, il basculera toujours avec le même pourcentage, mais aura plus ou moins de santé pour cette phase.
- Les boss de phase reviennent à la phase 1 s'ils sortent du combat.
- Les boss de phase qui sont également des boss régionaux partagent le même rayon de laisse et le même mécanisme de délai d'expiration dans toutes les phases, et réapparaîtront en tant que boss de phase 1 lorsque le chronomètre est terminé.
- Le fichier de configuration de la dernière phase définit le butin du boss.
- Les phases ne peuvent pas être ignorées - les dégâts excessifs feront toujours passer le boss aux phases au pourcentage défini.
- Les boss de phase qui ont des montures cessent d'être montés lors du changement de phase.

</div>

</div>

</div>

***

## Boss régionaux

<div align="center">



Les boss régionaux sont un type spécifique de boss personnalisés qui apparaissent à un emplacement configuré spécifique et peuvent réapparaître à cet emplacement après un certain délai. De plus, ils peuvent avoir des laisses qui garantissent qu'ils restent dans une zone spécifique, entre autres fonctionnalités.

Ceux-ci sont utilisés pour tout le contenu du donjon. Pour en savoir plus sur les boss régionaux, cliquez [ici]($language$/elitemobs/creating_world_bosses.md).

| Clé | Description | Valeurs | Défaut |
|-|:-:|:-:|-|
| `isRegionalBoss` | Définit si le boss est régional. Doit être vrai si vous voulez un boss régional.  | `true` /  `false` | `false` |
| `spawnLocation` | Définit les emplacements d'apparition du boss.  | Ajoutez-les via la commande `/em addSpawnLocation [filename.yml]` ! | aucun |
| `spawnCooldown` | Définit le temps de recharge de réapparition du boss, en **minutes**. | [Entier](#integer) | `0` |
| `leashRadius` | Définit la distance que le boss peut parcourir de son point d'apparition avant d'être ramené. | [Double](#double) | aucun |
| `onSpawnBlockStates` | Définit les blocs que le boss modifiera lors de son apparition. | Vérifiez les commandes ci-dessous | aucun |
| `onRemoveBlockStates` | Définit les blocs que le boss modifiera lors de sa disparition. | Vérifiez les commandes ci-dessous | aucun |

Comme indiqué, les boss régionaux peuvent avoir des `onSpawnBlockStates` et des `onRemoveBlockStates`.

C'est une fonctionnalité très utile pour modifier les arènes de combat pendant le combat, en particulier lorsqu'elle est combinée à des changements de phase, car il devient possible d'ouvrir et de fermer des arènes de combat en modifiant les états des blocs.

Le format de ceux-ci est trop complexe pour être écrit manuellement, il existe donc quelques commandes pour vous aider à les configurer :

| Commander | Description |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Commence à enregistrer les sélections manuelles de blocs pour l'apparition ou la suppression des états de bloc. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Modifie les états de bloc à l'apparition ou à la suppression. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Permet aux administrateurs de sélectionner de grandes zones de blocs à enregistrer en tant qu'états. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Permet aux administrateurs de modifier de grandes zones de blocs à enregistrer en tant qu'états. |

<details> 

<summary><b>Exemple d'utilisation :</b></summary>

<div align="left">

Disons que vous voulez créer un combat où un boss apparaît dans une arène avec une porte ouverte, et vous voulez faire en sorte que la porte se ferme lorsque le combat commence et se rouvre lorsque le combat est terminé.

Pour ce faire, vous aurez besoin de deux phases de boss et d'enregistrer trois ensembles différents d'états de bloc. Pour cet exemple, je nommerai ces phases phase_1_boss.yml et phase_2_boss.yml respectivement.

1) Utilisez `/em registerblocks phase_1_boss.yml on_spawn` ou `/em registerblocksedit phase_1_boss.yml on_spawn` pour enregistrer les blocs de porte dans leur état ouvert.

Cela signifie enregistrer les blocs d'air. La sélection de zone est recommandée ici.

Ceci est nécessaire pour s'assurer que la porte est ouverte lorsque le boss apparaît afin que les joueurs soient assurés d'avoir un moyen d'entrer.

2) Utilisez `/em registerblocks phase_2_boss.yml on_spawn` ou `/em registerblocksedit phase_2_boss.yml on_spawn` pour enregistrer les blocs de porte dans leur état fermé.

Cela signifie enregistrer les blocs solides de la porte qui empêcheraient le joueur de partir.

Ceci est nécessaire pour changer la porte en solide lorsque le boss entre en phase 2, empêchant les joueurs de partir.

3) Utilisez `/em registerblocks phase_2_boss.yml on_remove` ou `/em registerblocksedit phase_2_boss.yml on_remove` pour enregistrer les blocs de porte dans leur état ouvert.

Cela signifie enregistrer à nouveau les mêmes blocs qu'à la première étape (les blocs d'air).

Ceci est nécessaire pour ouvrir la porte lorsque le boss meurt, permettant aux joueurs de quitter l'arène.

</div>

</details>

</div>

***

### alert

<div align="center">

Définit si le boss est en alerte. Par défaut, les boss régionaux sont ralentis et ont une distance d'aggro plus courte lorsqu'ils sont hors combat. Ce paramètre empêche les boss régionaux d'être ralentis et d'avoir une distance d'aggro plus courte en dehors du combat, de sorte qu'ils se comporteront toujours de la même manière en combat ou hors combat.

</div>

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `alert` | [Booléen](#boolean) | `true` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

Définit si le boss régional sera définitivement supprimé après avoir été tué. C'est ce que BetterStructures utilise pour les sanctuaires, où le boss régional est uniquement conçu pour être combattu une seule fois, puis plus jamais à cet endroit. 

</div>

| Clé | Valeurs | Défaut |
|-|:-:|-|
| `removeAfterDeath` | [Booléen](#boolean) | `false` |

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Boss instanciés

<div align="center">

Les boss instanciés sont un sous-type de boss régionaux utilisés dans les donjons instanciés.

| Clé | Description | Valeurs | Défaut |
|-|:-:|:-:|-|
| `instanced` | Rend le boss personnalisé instancié. Obligatoire. | `true` / `false` | `false` |


Définir les boss sur instanciés est obligatoire pour que les donjons instanciés fonctionnent correctement. Nous recommandons également de supprimer les laisses pour tous les boss instanciés.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

