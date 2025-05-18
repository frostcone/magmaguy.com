Voici la traduction en français, en conservant le formatage markdown :

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Créer des boss personnalisés

# Avant de commencer

## Où vont les fichiers de boss ?

Les fichiers de boss vont dans le dossier de configuration `~/plugins/EliteMobs/custombosses`.

Il est possible de créer des sous-dossiers, tels que `~/plugins/EliteMobs/custombosses/mybosses`. Ceci est recommandé pour maintenir l'organisation.

Un fichier définit un boss, bien qu'il soit possible de faire apparaître le même boss plusieurs fois et même de définir plusieurs lieux d'apparition pour le même fichier de boss.

Il est possible d'utiliser l'[application web](https://magmaguy.com/webapp/webapp.html) pour créer rapidement et facilement des boss personnalisés et plus encore.

## Configuration la plus petite possible

**Le fichier de configuration le plus petit possible pour un Boss Personnalisé est :**
```yml
```

Notez qu'il s'agit simplement d'un fichier vide. Cela fera quand même apparaître un boss personnalisé zombie avec un nom personnalisé, car ce sont les valeurs par défaut. **Tout sur cette page est optionnel !**

## Exemple de boss

<div align="center">

Jetons un coup d'œil à un exemple de ce à quoi ressemble un fichier de boss.

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eTest boss'
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
spawnMessage: A test boss has been spawned!
deathMessage: A test boss has been slain by $players!
escapeMessage: A test boss entity has escaped!
locationMessage: 'Test entity: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "I've hit you!"
onDamagedMessages:
- "I've been hit!"
```

</div>

</details>

</div>

## Paramètres de base

<div align="center">

### isEnabled

Définit si le boss est activé.

| Clé | Valeurs | Par défaut |
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

| Clé | Valeurs | Par défaut |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Choisissez ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> La valeur doit également être présente dans le dossier `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

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

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `name` | [Chaîne de caractères](#string), accepte les [codes couleur](#color_codes) et les placeholders listés ci-dessous | "Nom par défaut" |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>

</div>

</details>

Si vous souhaitez inclure le niveau du boss dans son champ de nom, utilisez simplement l'un des placeholders suivants.

| Placeholder | Description | Exemple | Sortie (pour un boss de niveau 10) |
|-|:-:|:-:|-|
| `$level` | Remplace par le niveau | "$level Cool boss" | `10 Cool boss` |
| `$normalLevel` | Remplace par le niveau, fait pour les mobs normaux | `"$normalLevel Cool boss"` | `[10] Cool boss` |
| `$minibossLevel` | Remplace par le niveau, fait pour les minibosses | `"$minibossLevel Cool boss"` | `〖10〗 Cool boss` |
| `$bossLevel` | Remplace par le niveau, fait pour les boss | `"$bossLevel Cool boss"` | `『10』 Cool boss` |
| `$reinforcementLevel` | Remplace par le niveau, fait pour les renforts | `"$reinforcementLevel Cool boss"` | `〔10〕 Cool Boss` |
| `$eventBossLevel` | Remplace par le niveau, fait pour les boss d'événement | `"$eventBossLevel Cool boss"` | `「10」 Cool boss` |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cCool boss!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Définit le niveau du boss.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `level` | Nombres [entiers](#integer) positifs ou `dynamic` | `dynamic` |

`dynamic` est utilisé pour les événements et s'ajuste au niveau des joueurs proches au moment de l'apparition du boss.
Il n'est pas recommandé pour les boss régionaux.

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### scale

Définit l'échelle (taille) du boss.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `scale` | [Multiplicateur](#multiplier) | `1.0` |

Lors de la mise à l'échelle, `1.0` représente la taille par défaut. Pour agrandir l'entité, augmentez la valeur (par exemple, `1.2`). Pour réduire l'entité, diminuez la valeur (par exemple, `0.8`).

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

Définit le type de boss. Ceci est utilisé pour afficher les barres de vie des boss et d'autres fonctionnalités.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` feront que le plugin affichera des barres de vie lorsque les joueurs combattront ces types de boss.

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

Définit la santé du boss.

| Clé | Valeurs | Par défaut |
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

| Clé | Valeurs | Par défaut |
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

Définit si le boss utilise la variante bébé du mob. Ne peut être appliqué qu'aux mobs ayant des variantes bébé.
Si vous souhaitez [déguiser]($language$/elitemobs/libsdisguises.md) le boss mais qu'il reste également un bébé pendant le déguisement (assurez-vous que l'entité de déguisement prend également en charge la variante bébé), vous pouvez utiliser ce paramètre :
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clé | Valeurs | Par défaut |
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

Définit l'armure du boss. Tous les modèles Minecraft ne sont pas capables d'afficher l'armure. L'armure du boss est purement cosmétique et n'affecte pas le gameplay.

| Clé | Valeurs | Par défaut |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` | [Matériau](#material), [UUID](https://minecraftuuid.com/) | aucun |
| `chestplate` | [Matériau](#material) | aucun |
| `leggings` | [Matériau](#material) | aucun |
| `boots` | [Matériau](#material) | aucun |
| `mainHand` | [Matériau](#material) | aucun |
| `offHand` | [Matériau](#material) | aucun |

**Note :** Ce champ vous permet également de définir des modèles personnalisés pour les objets. Pour définir l'ID du modèle personnalisé, ajoutez l'ID après le type de matériau en suivant ce format : `MATERIAU_OBJET:ID`. Exemple : `DIAMOND_SWORD:1` définit le boss pour qu'il porte une épée en diamant avec le modèle personnalisé #1 dans votre pack de textures.

**Note 2 :** Ce champ vous permet également de définir des couleurs de cuir personnalisées avec le format `MATERIAU_OBJET:CODE` où le code est la représentation hexadécimale de la couleur. Exemple : `LEATHER_LEGGINGS:ffa500` créerait des jambières orange. Vous pouvez utiliser des codes hexadécimaux, il suffit de supprimer le `#` du code hexadécimal. Vous pouvez obtenir des codes hexadécimaux [ici](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Note 3 :** Le champ du casque vous permet également de définir les casques des mobs comme des têtes de joueur. Obtenez simplement l'UUID de la tête de joueur que vous souhaitez utiliser et tapez-le dans le champ du casque. *Le joueur doit être en ligne pour que cela fonctionne, sinon la tête sera par défaut une tête Minecraft générique.* Vous pouvez obtenir les UUID des joueurs [ici](https://minecraftuuid.com/).

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

Définit les pouvoirs que le boss possède.

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `powers` | Référez-vous à la liste ci-dessous | aucun |

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

*Note : Vous pouvez consulter [cette page](fr/elitemobs/premade_powers.md) si vous souhaitez voir une liste de pouvoirs prédéfinis que vous pouvez utiliser.*

***

### Configuration intermédiaire - Faire apparaître des renforts

Les renforts entrent également dans la catégorie des pouvoirs, en utilisant les paramètres suivants :

<details>
<summary><b>Paramètres de renfort</b></summary>

| Clé | Description | Valeurs | Par défaut |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Ce qui déclenche l'apparition du renfort. Obligatoire. | Référez-vous à la liste ci-dessous | aucun |
| `filename` | Nom du fichier du boss à faire apparaître en tant que renfort. Obligatoire. | [Chaîne de caractères](#string) | aucun |
| `chance` | Chance d'apparition du renfort. Optionnel. | [Double](#double) | `1.0` |
| `amount` | Définit la quantité de renforts à faire apparaître. Optionnel. | [Entier](#integer) | `1` |
| `inheritAggro` | Fait que le renfort hérite de l'aggro du boss. Optionnel. | `true` / `false` | `false` |
| `spawnNearby` | Fait que les renforts apparaissent dans un rayon de 30 blocs autour du boss. Optionnel. | `true` / `false` | `false` |
| `inheritLevel` | Fait que le renfort hérite du niveau du boss. Optionnel | `true` / `false` | `false` |
| `customSpawn` | Fait que le renfort apparaisse en utilisant le [système d'apparition personnalisé](fr/elitemobs/creating_spawns.md). Uniquement utilisé pour `summonType: GLOBAL` | `true` / `false` | `false` |
| `location` | Lieu d'apparition. Optionnel. | `nom_monde,x,y,z` ou `x,y,z` pour un lieu relatif au boss. Le décalage est relatif au lieu d'apparition pour les boss régionaux. Vous pouvez également utiliser `same_as_boss` pour faire apparaître les renforts dans le même monde que le boss. | aucun |
| `lightningRod` | Paramètre spécial pour `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Fait que les cristaux de l'End génèrent de la foudre autour d'eux. Optionnel. | `true` / `false` | aucun |

</details>

Les types d'invocation définissent les conditions d'apparition des renforts. Voici une liste des types d'invocation valides :

<details>
<summary><b>Types d'invocation</b></summary>

| Valeur | Description |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` | Ne fait apparaître les renforts qu'une seule fois, la première fois que le boss est blessé. |
| `ON_HIT` | Fait apparaître les renforts lors d'un coup. |
| `ON_COMBAT_ENTER` | Fait apparaître les renforts lorsque le boss entre en combat. |
| `GLOBAL` | Fait apparaître un renfort pour chaque joueur en ligne. Nécessite que la clé `customSpawn` ait un [point d'apparition personnalisé](fr/elitemobs/creating_spawns.md) valide défini. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Place des renforts de cristal de l'End lors de l'entrée en combat, uniquement pour une utilisation avec des combats de dragon personnalisés. |

</details>

Notez qu'il est également possible de faire apparaître des renforts via les [Scripts Elite](fr/elitemobs/creating_powers.md), il existe donc des moyens plus personnalisables de faire apparaître des renforts.

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

### Configuration experte - Créer vos propres pouvoirs

Il est possible de créer vos propres pouvoirs, soit directement dans le fichier du boss, soit en tant que nouveau fichier de configuration dans le dossier des pouvoirs. Vous pouvez en apprendre davantage à ce sujet [ici](fr/elitemobs/creating_powers.md).

### Limiter les pouvoirs en fonction de la difficulté du donjon instancié

Les [donjons instanciés](fr/elitemobs/dungeons.md&section=instanced-dungeons) peuvent avoir des paramètres de difficulté, et il est possible de faire en sorte qu'un pouvoir spécifique ne soit activé que pour des difficultés spécifiques.

<details>
<summary><b>Options de limitation des pouvoirs</b></summary>

<div align="left">

| Clé | Description | Valeurs | Par défaut |
|-|:-:|:-:|-|
| `filename` | Nom du fichier du pouvoir. | [Chaîne de caractères](#string) | aucun |
| `difficultyID` | Nom de la difficulté, correspondant au nom de la difficulté dans le package du donjon. | [Chaîne de caractères](#string) | aucun |

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

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `spawnMessage` | [Chaînes de caractères](#string) et [codes couleur](#color_codes) | aucun |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: I rise once more!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Définit la liste des messages à envoyer lorsque le boss meurt. Nécessite la configuration de l'[announcementPriority](#announcementPriority).

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `deathMessages` | [Chaînes de caractères](#string), [codes couleur](#color_codes) et les placeholders ci-dessous | aucun |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4The Test Boss has been killed!'
- '&c&l    1st Damager: $damager1name &cwith $damager1damage damage!'
- '&6&l    2nd Damager: $damager2name &6with $damager2damage damage!'
- '&e&l    3rd Damager: $damager3name &ewith $damager3damage damage!'
- '&4Slayers: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Les messages de mort utilisent les placeholders suivants :

<details>
<summary><b>Placeholders</b></summary>

| Valeur | Description |
|-|:-:|
| `$damager1name` | Le nom du premier infligeur de dégâts |
| `$damager2name` | Le nom du deuxième infligeur de dégâts |
| `$damager3name` | Le nom du troisième infligeur de dégâts |
| `$damager1damage` | Le montant des dégâts du premier infligeur de dégâts |
| `$damager2damage` | Le montant des dégâts du deuxième infligeur de dégâts |
| `$damager3damage` | Le montant des dégâts du troisième infligeur de dégâts |
| `$players` | Affiche une liste de tous les infligeurs de dégâts |

</details>

### onKillMessage

Définit le message à envoyer lorsque le boss tue un joueur. Nécessite la configuration de l'[announcementPriority](#announcementPriority).

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `onKillMessage` | [Chaînes de caractères](#string) et [codes couleur](#color_codes) | aucun |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: I win, you lose!
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

| Clé | Valeurs | Par défaut |
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

Définit si le boss apparaîtra comme neutre ou non. Cela ne s'applique qu'aux types d'entités qui peuvent être neutres, comme les Loups ou les Golems de Fer.

</div>

| Clé | Valeurs | Par défaut |
|-|:-:|-|
| `neutral` | [Booléen](#boolean) | `false` |

<details>Please specify the target language for the translation.Okay, please provide the language you would like the text translated into. I will then translate it, keeping all the markdown formatting intact.