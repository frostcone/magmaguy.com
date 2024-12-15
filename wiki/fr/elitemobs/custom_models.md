[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Création de boss personnalisés

# Avant de commencer

## Où vont les fichiers de boss ?

Les fichiers de boss sont placés dans le dossier de configuration `~/plugins/EliteMobs/custombosses`.

Il est possible de créer des sous-dossiers, comme `~/plugins/EliteMobs/custombosses/mybosses`. Il est recommandé de le faire pour maintenir l'organisation.

Un fichier définit un boss, bien qu'il soit possible de générer le même boss plusieurs fois et même de définir plusieurs emplacements d'apparition pour le même fichier de boss.

Il est possible d'utiliser l'[application Web](https://magmaguy.com/webapp/webapp.html) pour créer rapidement et facilement des boss personnalisés et plus encore.

## La plus petite configuration possible

**Le plus petit fichier de configuration possible pour un boss personnalisé est :**
```yml
```

Notez qu'il s'agit simplement d'un fichier vide. Cela générera toujours un boss personnalisé zombie avec un nom personnalisé, car ce sont les valeurs par défaut. **Tout ce qui figure sur cette page est facultatif !**

## Exemple de boss

<div align="center">

Jetons un coup d'œil à un exemple de ce à quoi ressemble un fichier de boss.

<details>
<summary><b>Ejemplo</b></summary>

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
spawnMessage: Un boss de test a été généré !
deathMessage: Un boss de test a été tué par $players !
escapeMessage: Une entité de boss de test s'est échappée !
locationMessage: 'Entité de test : $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Je vous ai frappé !"
onDamagedMessages:
- "J'ai été frappé !"
```

</div>

</details>

</div>

## Paramètres de base

<div align="center">

### isEnabled

Définit si le boss est activé.

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `isEnabled` | `true` / `false` | `true` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

Définit le type d'entité du boss.

| Clé |                                                                                   Valeurs                                                                                    | Par défaut |
|---|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Choisissez dans cette liste](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> La valeur doit également être présente dans le dossier `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

<details>

<summary><b>Ejemplo</b></summary>

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
|---|:-:|---|
| `name` | [Chaîne de caractères](#string), accepte les [codes de couleur](#color_codes) et les marqueurs de position énumérés ci-dessous | "Nom par défaut" |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss sympa !"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si vous souhaitez inclure le niveau du boss dans son champ de nom, utilisez simplement l'un des marqueurs de position suivants.

| Marqueur de position | Description | Exemple |Sortie (pour un boss de niveau 10) |
|---|:-:|:-:|-|
| `$level` | Remplace par le niveau | "$level Boss sympa" | `10 Boss sympa` |
| `$normalLevel` | Remplace par le niveau, fait pour les mobs normaux | `"$normalLevel Boss sympa"` | `[10] Boss sympa` |
| `$minibossLevel` | Remplace par le niveau, fait pour les mini-boss | `"$minibossLevel Boss sympa"` | `〖10〗 Boss sympa` |
| `$bossLevel` | Remplace par le niveau, fait pour les boss | `"$bossLevel Boss sympa"` | `『10』 Boss sympa` |
| `$reinforcementLevel` | Remplace par le niveau, fait pour les renforts | `"$reinforcementLevel Boss sympa"` | `〔10〕 Boss sympa` |
| `$eventBossLevel` | Remplace par le niveau, fait pour les boss d'événements | `"$eventBossLevel Boss sympa"` | `「10」 Boss sympa` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss sympa !"
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
|---|:-:|---|
| `level` | Nombres [entiers](#integer) positifs ou `dynamic` | `dynamic` |

`dynamic` est utilisé pour les événements et s'ajuste au niveau des joueurs proches au moment de l'apparition du boss.
Ce n'est pas recommandé pour les boss régionaux.

<details>

<summary><b>Ejemplo</b></summary>

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
|---|:-:|---|
| `scale` | [Multiplicateur](#multiplier) | `1.0` |

Lors de la mise à l'échelle, `1.0` représente la taille par défaut. Pour agrandir l'entité, augmentez la valeur (par exemple, `1.2`). Pour rendre l'entité plus petite, diminuez la valeur (par exemple, `0.8`).

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

Définit le type de boss. Ceci est utilisé pour afficher les barres de santé des boss et d'autres caractéristiques.

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` fera afficher au plugin les barres de santé lorsque les joueurs combattent ces types de boss.

<details>

<summary><b>Ejemplo</b></summary>

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
|---|:-:|---|
| `healthMultiplier` | [Multiplicateur](#multiplier) | `1.0` |

<details>

<summary><b>Ejemplo</b></summary>

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
|---|:-:|---|
| `damageMultiplier` | [Multiplicateur](#multiplier) | `1.0` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

Définit si le boss utilise la variante bébé du mob. Ne peut être appliqué qu'aux mobs avec des variantes de bébé.
Si vous souhaitez [déguiser]($language$/elitemobs/libsdisguises.md) le boss, mais que vous souhaitez également qu'il reste un bébé pendant le déguisement (assurez-vous que l'entité de déguisement prend également en charge la variante bébé), vous pouvez utiliser ce paramètre :
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `isBaby` | `true` / `false` | `false` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>

***

### helmet/chestplate/leggings/boots/mainhand/offhand

Définit l'armure du boss. Tous les modèles Minecraft ne sont pas capables d'afficher l'armure. L'armure de boss est purement cosmétique et n'affecte pas le gameplay.

| Clé |                                    Valeurs                                     | Par défaut |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Material](#material), [UUID](https://minecraftuuid.com/)           | aucun |
| `chestplate` | [Material](#material) | aucun |
| `leggings` | [Material](#material) | aucun |
| `boots` | [Material](#material) | aucun |
| `mainHand` | [Material](#material) | aucun |
| `offHand` | [Material](#material) | aucun |

**Remarque :** ce champ vous permet également de définir des modèles personnalisés pour les objets. Pour définir l'ID de modèle personnalisé, ajoutez l'ID après le type de matériau en suivant ce format : `ITEM_MATERIAL:ID`. Exemple : `DIAMOND_SWORD:1` indique que le boss doit porter une épée en diamant avec le modèle personnalisé nº 1 dans votre pack de textures.

**Remarque 2 :** Ce champ vous permet également de définir des couleurs de cuir personnalisées avec le format `ITEM_MATERIAL:CODE` où le code est la représentation hexadécimale de la couleur. Exemple : `LEATHER_LEGGINGS:ffa500` créerait des jambières orange. Vous pouvez utiliser des codes hexadécimaux, il vous suffit de supprimer le `#` du code hexadécimal. Vous pouvez obtenir des codes hexadécimaux à partir de [ici](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Remarque 3 :** Le champ du casque vous permet également de définir que les casques de mobs soient des têtes de joueur. Obtenez simplement l'UUID de la tête du joueur que vous souhaitez utiliser et saisissez-le dans le champ du casque. *Le joueur doit être en ligne pour que cela fonctionne ou la tête par défaut sera une tête Minecraft générique.* Vous pouvez obtenir les UUID des joueurs à partir de [ici](https://minecraftuuid.com/).

<details>

<summary><b>Ejemplo</b></summary>

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

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `powers` | Reportez-vous à la liste ci-dessous | aucun |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*Remarque : vous pouvez consulter [cette page]($language$/elitemobs/premade_powers.md) si vous souhaitez voir une liste des pouvoirs préfabriqués que vous pouvez utiliser.*

***

##### Configuration intermédiaire - Génération de renforts

Les renforts vont également dans la catégorie des pouvoirs, en utilisant les paramètres suivants :

<details>

<summary><b>Paramètres des renforts</b></summary>

| Clé | Description |                                                                                                             Valeurs                                                                                                             | Par défaut |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Ce qui déclenche l'apparition de renforts. Obligatoire. |                                                                                                    Reportez-vous à la liste ci-dessous                                                                                                    | aucun |
| `filename` | Nom de fichier du boss à générer comme renfort. Obligatoire. |                                                                                                       [Chaîne de caractères](#string)                                                                                                        | aucun |
| `chance` | Possibilité que le renfort apparaisse. Facultatif. |                                                                                                       [Nombre à virgule flottante double précision](#double)                                                                                                        | `1.0` |
| `amount` | Définit la quantité de renforts à générer. Facultatif. |                                                                                                      [Entier](#integer)                                                                                                       | `1` |
| `inheritAggro` | Fait que le renfort hérite de l'aggro du boss. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Fait que les renforts apparaissent dans un rayon de 30 blocs du boss. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Fait que le renfort hérite du niveau du boss. Facultatif |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Fait que le renfort se génère en utilisant le [système de génération personnalisé]($language$/elitemobs/creating_spawns.md). Utilisé uniquement pour `summonType : GLOBAL`
| `location` | Emplacement de l'apparition. Facultatif. | `nom_du_monde,x,y,z` ou `x,y,z` pour un emplacement relatif au boss. Le décalage est relatif à l'emplacement de l'apparition pour les boss régionaux. Vous pouvez également utiliser `same_as_boss` pour faire apparaître des renforts dans le même monde que le boss. | aucun |
| `lightningRod` | Paramètre spécial pour `summonType : ON_COMBAT_ENTER_PLACE_CRYSTAL`. Fait que les cristaux de l'end génèrent des éclairs autour d'eux. Facultatif. |                                                                                                        `true` / `false`                                                                                                        | aucun |

</details>

Les types d'invocation définissent les conditions de l'apparition des renforts. Voici une liste des types d'invocation valides :

<details>

<summary><b>Types d'invocation</b></summary>

| Valeur | Description |
|---|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Ne génère les renforts qu'une seule fois, la première fois que le boss est endommagé.                                           |
| `ON_HIT`  |                                                              Génère les renforts lors d'un coup.                                                              |
| `ON_COMBAT_ENTER` |                                                    Génère les renforts lorsque le boss entre en combat.                                                    |
| `GLOBAL` | Génère un renfort pour chaque joueur en ligne. Nécessite que la clé `customSpawn` ait une [génération personnalisée]($language$/elitemobs/creating_spawns.md) valide définie. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Place des renforts de cristaux de l'end lors de l'entrée au combat, uniquement pour une utilisation avec des combats de dragon personnalisés.                                  |

</details>

Notez qu'il est également possible de générer des renforts via [Elite Scripts]($language$/elitemobs/creating_powers.md), il existe donc des moyens plus personnalisables de générer des renforts.

<details>

<summary><b>Ejemplo</b></summary>

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

Il est possible de créer vos propres pouvoirs, soit dans le fichier du boss lui-même, soit comme nouveau fichier de configuration dans le dossier des pouvoirs. Vous pouvez en savoir plus [ici]($language$/elitemobs/creating_powers.md).

### Limitation des pouvoirs en fonction de la difficulté du donjon instancié

[Les donjons instanciés]($language$/elitemobs/dungeons.md&section=instanced-dungeons) peuvent avoir des paramètres de difficulté et il est possible de faire en sorte qu'un pouvoir spécifique ne soit activé que pour des difficultés spécifiques.

<details>

<summary><b>Options de limitation de pouvoir</b></summary>

<div align="left">

| Clé | Description | Valeurs | Par défaut |
|---|:-:|:-:|---|
| `filename` | Nom de fichier du pouvoir. | [Chaîne de caractères](#string) | aucun |
| `difficultyID` | Nom de difficulté, correspondant au nom de la difficulté dans le package de donjon. | [Chaîne de caractères](#string) | aucun |

</div>

</details>

Cela ne s'appliquera qu'aux donjons instanciés.

<details>

<summary><b>Ejemplo</b></summary>

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

Définit le message à envoyer lorsque le boss apparaît. Requiert la configuration de la [announcementPriority](#announcementPriority).

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `spawnMessage` | [Chaînes de caractères](#string) et [codes de couleur](#color_codes) | aucun |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Je me relève une fois de plus !
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Définit la liste des messages à envoyer lorsque le boss meurt. Requiert la configuration de la [announcementPriority](#announcementPriority).

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `deathMessages` | [Chaînes de caractères](#string), [codes de couleur](#color_codes) et les marqueurs de position ci-dessous | aucun |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Le boss de test a été tué !'
- '&c&l    1er Dégâts : $damager1name &cavec $damager1damage de dégâts !'
- '&6&l    2e Dégâts : $damager2name &6avec $damager2damage de dégâts !'
- '&e&l    3e Dégâts : $damager3name &eavec $damager3damage de dégâts !'
- '&4Tueurs : $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Les messages de mort utilisent les marqueurs de position suivants :

<details>

<summary><b>Marqueurs de position</b></summary>

| Valeur | Description |
|---|:-:|
| `$damager1name` | Le nom du joueur qui a infligé le plus de dégâts |
| `$damager2name` | Le nom du deuxième joueur qui a infligé le plus de dégâts |
| `$damager3name` | Le nom du troisième joueur qui a infligé le plus de dégâts |
| `$damager1damage` | La quantité de dégâts du joueur qui a infligé le plus de dégâts |
| `$damager2damage` | La quantité de dégâts du deuxième joueur qui a infligé le plus de dégâts |
| `$damager3damage` | La quantité de dégâts du troisième joueur qui a infligé le plus de dégâts |
| `$players` | Affiche la liste de tous les joueurs qui ont infligé des dégâts |

</details>

### onKillMessage

Définit le message à envoyer lorsque le boss tue un joueur. Requiert la configuration de la [announcementPriority](#announcementPriority).

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `onKillMessage` | [Chaînes de caractères](#string) et [codes de couleur](#color_codes) | aucun |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: Je gagne, vous perdez !
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
|---|:-:|---|
| `slimeSize` | [Entier](#integer) | `4` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

Définit si le boss apparaîtra comme neutre ou non. Cela ne s'applique qu'aux types d'entités qui peuvent être neutres, tels que les loups ou les golems de fer.

</div>

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `neutral` | [Booléen](#boolean) | `false` |

<details>

<summary><b>Ejemplo</b></summary>

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

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `timeout` | Durée (en minutes) [Entier](#integer) | `0` |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
timeout: 20
```
Définit le boss pour qu'il s'échappe après 20 minutes.

</div>

</details>

***

### isPersistent

Définit si le boss peut survivre à un déchargement de chunks. Uniquement recommandé pour les boss d'événement.

| Clé | Valeurs | Par défaut |
|---|:-:|---|
| `isPersistent` | `true` / `false` | `false` |

<details>
