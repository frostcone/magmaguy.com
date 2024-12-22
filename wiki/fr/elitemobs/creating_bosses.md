[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Création de boss personnalisés

# Avant de commencer

## Où vont les fichiers de boss ?

Les fichiers de boss vont dans le dossier de configuration `~/plugins/EliteMobs/custombosses`.

Il est possible de créer des sous-dossiers, comme `~/plugins/EliteMobs/custombosses/mybosses`. Ceci est recommandé pour
garder les choses organisées.

Un fichier définit un boss, bien qu’il soit possible de faire apparaître le même boss plusieurs fois et même de définir
plusieurs emplacements d’apparition pour le même fichier de boss.

Il est possible d’utiliser [l’application web](https://magmaguy.com/webapp/webapp.html) pour créer rapidement et
facilement des boss personnalisés et plus encore.

## Configuration minimale possible

**Le fichier de configuration minimal possible pour un boss personnalisé est:**

```yml
```

Notez que ce n’est qu’un fichier vide. Cela fera quand même apparaître un boss personnalisé zombie avec un nom
personnalisé, car ce sont les paramètres par défaut. **Tout ce qui se trouve sur cette page est facultatif!**

## Exemple de boss

<div align="center">

Jetons un coup d’œil à un exemple de fichier de boss.

<details> 
<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eBoss test'
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
spawnMessage: Un boss test est apparu !
deathMessage: Un boss test a été tué par $players !
escapeMessage: Une entité boss test s’est échappée !
locationMessage: 'Entité test : $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Je t’ai touché !"
onDamagedMessages:
- "J’ai été touché !"
```

</div>

</details>

</div>

## Paramètres de base

<div align="center">

### isEnabled

Définit si le boss est activé.

| Clé         |     Valeurs      | Défaut |
|-------------|:----------------:|--------|
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

Définit le type d’entité du boss.

| Clé          |                                                                                                   Valeurs                                                                                                   | Défaut   |
|--------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|----------|
| `entityType` | [Choisissez parmi cette liste](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> La valeur doit également être présente dans le dossier `~plugins/EliteMobs/mobproperties`. | `ZOMBIE` |

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

| Clé    |                                                         Valeurs                                                         | Défaut           |
|--------|:-----------------------------------------------------------------------------------------------------------------------:|------------------|
| `name` | [Chaîne de caractères](#string), accepte les [codes de couleur](#color_codes) et les espaces réservés listés ci-dessous | "Nom par défaut" |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss cool !"
```

<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Si vous souhaitez inclure le niveau du boss dans son champ de nom, utilisez simplement l’un des espaces réservés
suivants.

| Espace réservé        |                      Description                       |              Exemple              | Sortie (pour un boss de niveau 10) |
|-----------------------|:------------------------------------------------------:|:---------------------------------:|------------------------------------|
| `$level`              |                 Remplace par le niveau                 |        "$level Boss cool"         | `10 Boss cool`                     |
| `$normalLevel`        |   Remplace par le niveau, fait pour les mobs normaux   |    `"$normalLevel Boss cool"`     | `[10] Boss cool`                   |
| `$minibossLevel`      |     Remplace par le niveau, fait pour les miniboss     |   `"$minibossLevel Boss cool"`    | `〖10〗 Boss cool`                   |
| `$bossLevel`          |       Remplace par le niveau, fait pour les boss       |     `"$bossLevel Boss cool"`      | `『10』 Boss cool`                   |
| `$reinforcementLevel` |     Remplace par le niveau, fait pour les renforts     | `"$reinforcementLevel Boss cool"` | `〔10〕 Boss cool`                   |
| `$eventBossLevel`     | Remplace par le niveau, fait pour les boss d’événement |   `"$eventBossLevel Boss cool"`   | `「10」 Boss cool`                   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
name: "$normalLevel &cBoss cool !"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Définit le niveau du boss.

| Clé     |                         Valeurs                          | Défaut    |
|---------|:--------------------------------------------------------:|-----------|
| `level` | Nombres entiers positifs [entier](#integer) ou `dynamic` | `dynamic` |

`dynamic` est utilisé pour les événements et s’adapte au niveau des joueurs à proximité au moment de l’apparition du
boss.
Il n’est pas recommandé pour les boss régionaux.

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

Définit l’échelle (taille) du boss.

| Clé     |            Valeurs            | Défaut |
|---------|:-----------------------------:|--------|
| `scale` | [Multiplicateur](#multiplier) | `1.0`  |

Lors de la mise à l’échelle, `1.0` représente la taille par défaut. Pour agrandir l’entité, augmentez la valeur (par
exemple, `1.2`). Pour rendre l’entité plus petite, diminuez la valeur (par exemple, `0.8`).

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

Définit le type de boss. Ceci est utilisé pour afficher les barres de santé du boss et d’autres fonctionnalités.

| Clé        |                Valeurs                | Défaut   |
|------------|:-------------------------------------:|----------|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` feront en sorte que le plugin affiche les barres de santé lorsque les joueurs combattent ces
types de boss.

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

| Clé                |            Valeurs            | Défaut |
|--------------------|:-----------------------------:|--------|
| `healthMultiplier` | [Multiplicateur](#multiplier) | `1.0`  |

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

| Clé                |            Valeurs            | Défaut |
|--------------------|:-----------------------------:|--------|
| `damageMultiplier` | [Multiplicateur](#multiplier) | `1.0`  |

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

Définit si le boss utilise la variante bébé du mob. Ne peut être appliqué qu’aux mobs avec des variantes bébé.
Si vous souhaitez [déguiser]($language$/elitemobs/libsdisguises.md) le boss mais que vous souhaitez qu’il reste
également un bébé pendant le déguisement (assurez-vous que l’entité de déguisement prend également en charge la variante
bébé), vous pouvez utiliser ce paramètre:
<div align="left">

```yaml
disguise: HOGLIN:baby
```

</div>

| Clé      |     Valeurs      | Défaut  |
|----------|:----------------:|---------|
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

Définit l’armure du boss. Tous les modèles Minecraft ne sont pas capables d’afficher l’armure. L’armure du boss est
purement esthétique et n’affecte pas le gameplay.

| Clé          |                          Valeurs                          | Défaut |
|--------------|:---------------------------------------------------------:|--------|
| `helmet`     | [Matériau](#material), [UUID](https://minecraftuuid.com/) | none   |
| `chestplate` |                   [Matériau](#material)                   | none   |
| `leggings`   |                   [Matériau](#material)                   | none   |
| `boots`      |                   [Matériau](#material)                   | none   |
| `mainHand`   |                   [Matériau](#material)                   | none   |
| `offHand`    |                   [Matériau](#material)                   | none   |

**Remarque:** Ce champ vous permet également de définir des modèles personnalisés pour les objets. Pour définir l’ID du
modèle personnalisé, ajoutez l’ID après le type de matériau en suivant ce format: `ITEM_MATERIAL:ID`.
Exemple: `DIAMOND_SWORD:1` définit le boss pour qu’il porte une épée en diamant avec le modèle personnalisé n° 1 dans
votre pack de textures.

**Remarque 2:** Ce champ vous permet également de définir des couleurs de cuir personnalisées au
format `ITEM_MATERIAL:CODE` où le code est la représentation hexadécimale de la couleur.
Exemple: `LEATHER_LEGGINGS:ffa500` créerait des jambières orange. Vous pouvez utiliser des codes hexadécimaux, il suffit
de supprimer le `#` du code hexadécimal. Vous pouvez obtenir des codes
hexadécimaux [ici](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Remarque 3:** Le champ du casque vous permet également de définir des casques de mob pour qu’ils soient des têtes de
joueur. Obtenez simplement l’UUID de la tête de joueur que vous souhaitez utiliser et saisissez-la dans le champ du
casque. *Le joueur doit être en ligne pour que cela fonctionne ou la tête sera par défaut une tête MineCraft générique.*
Vous pouvez obtenir les UUID des joueurs [ici](https://minecraftuuid.com/).

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

Définit les pouvoirs que possède le boss.

| Clé      |            Valeurs            | Défaut |
|----------|:-----------------------------:|--------|
| `powers` | Consultez la liste ci-dessous | none   |

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

*Remarque: Vous pouvez consulter [cette page]($language$/elitemobs/premade_powers.md) si vous voulez voir une liste de
pouvoirs préfabriqués que vous pouvez utiliser.*

***

### Configuration intermédiaire - Apparition de renforts

Les renforts vont également dans la catégorie des pouvoirs, en utilisant les paramètres suivants:

<details> 

<summary><b>Paramètres de renfort</b></summary>

| Clé            |                                                                              Description                                                                              |                                                                                                                            Valeurs                                                                                                                             | Défaut  |
|----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---------|
| `summonType`   |                                                        Ce qui déclenche l’apparition de renforts. Obligatoire.                                                        |                                                                                                                 Consultez la liste ci-dessous                                                                                                                  | none    |
| `filename`     |                                                  Nom du fichier du boss à faire apparaître en renfort. Obligatoire.                                                   |                                                                                                                [Chaîne de caractères](#string)                                                                                                                 | none    |
| `chance`       |                                                            Chance de l’apparition du renfort. Facultatif.                                                             |                                                                                                             [Nombre à virgule flottante](#double)                                                                                                              | `1.0`   |
| `amount`       |                                                    Définit la quantité de renforts à faire apparaître. Facultatif.                                                    |                                                                                                                       [Entier](#integer)                                                                                                                       | `1`     |
| `inheritAggro` |                                                  Fait en sorte que le renfort hérite de l’aggro du boss. Facultatif.                                                  |                                                                                                                        `true` / `false`                                                                                                                        | `false` |
| `spawnNearby`  |                                          Fait apparaître les renforts dans un rayon de 30 blocs autour du boss. Facultatif.                                           |                                                                                                                        `true` / `false`                                                                                                                        | `false` |
| `inheritLevel` |                                                   Fait en sorte que le renfort hérite du niveau du boss. Facultatif                                                   |                                                                                                                        `true` / `false`                                                                                                                        | `false` |
| `customSpawn`  | Fait apparaître le renfort en utilisant le [système d’apparition personnalisé]($language$/elitemobs/creating_spawns.md). Utilisé uniquement pour `summonType: GLOBAL` 
| `location`     |                                                                 Emplacement d’apparition. Facultatif.                                                                 | `nom_du_monde,x,y,z` ou `x,y,z` pour un emplacement relatif au boss. Le décalage est relatif à l’emplacement d’apparition des boss régionaux. Vous pouvez également utiliser `same_as_boss` pour faire apparaître les renforts dans le même monde que le boss. | none    |
| `lightningRod` |  Paramètre spécial pour `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Fait apparaître des cristaux de l’End qui font apparaître des éclairs autour d’eux. Facultatif.  |                                                                                                                        `true` / `false`                                                                                                                        | none    |

</details>

Les types d’invocation définissent les conditions d’apparition des renforts. Voici une liste des types d’invocation
valides:

<details> 

<summary><b>Types d’invocation</b></summary>

| Valeur                          |                                                                                  Description                                                                                   |
|---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE`                          |                                         Ne fait apparaître les renforts qu’une seule fois, la première fois que le boss est endommagé.                                         |
| `ON_HIT`                        |                                                               Fait apparaître les renforts lorsqu’il est touché.                                                               |
| `ON_COMBAT_ENTER`               |                                                         Fait apparaître les renforts lorsque le boss entre en combat.                                                          |
| `GLOBAL`                        | Fait apparaître un renfort pour chaque joueur en ligne. Nécessite que la clé `customSpawn` ait un [spawn personnalisé]($language$/elitemobs/creating_spawns.md) valide défini. |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                  Place des renforts de cristal de l’End lors de l’entrée en combat, uniquement pour une utilisation avec des combats de dragon personnalisés.                  |

</details>

Notez qu’il est également possible de faire apparaître des renforts via
des [Scripts d’Elite]($language$/elitemobs/creating_powers.md), il existe donc des moyens plus personnalisables de faire
apparaître des renforts.

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

### Configuration expert - Création de vos propres pouvoirs

Il est possible de créer vos propres pouvoirs, soit sur le fichier de boss lui-même, soit sous la forme d’un nouveau
fichier de configuration dans le dossier des pouvoirs. Vous pouvez en savoir plus à ce
sujet [ici]($language$/elitemobs/creating_powers.md).

### Limitation des pouvoirs en fonction de la difficulté du donjon instancié

Les [donjons instanciés]($language$/elitemobs/dungeons.md&section=instanced-dungeons) peuvent avoir des paramètres de
difficulté, et il est possible de faire en sorte qu’un pouvoir spécifique ne soit activé que pour des difficultés
spécifiques.

<details> 

<summary><b>Limitation des options de pouvoir</b></summary>

<div align="left">

| Clé            |                                      Description                                       |             Valeurs             | Défaut |
|----------------|:--------------------------------------------------------------------------------------:|:-------------------------------:|--------|
| `filename`     |                               Nom du fichier du pouvoir.                               | [Chaîne de caractères](#string) | none   |
| `difficultyID` | Nom de la difficulté, correspondant au nom de la difficulté dans le package de donjon. | [Chaîne de caractères](#string) | none   |

</div>

</details>

Cela ne s’appliquera qu’aux donjons instanciés.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - monNomDeDifficulté1
  - monNomDeDifficulté2
  - monNomDeDifficulté3
```

</div>

</details>

***

### spawnMessage

Définit le message à envoyer lorsque le boss apparaît. Nécessite la configuration de
la [priorité d’annonce](#announcementPriority).

| Clé            |                               Valeurs                                | Défaut |
|----------------|:--------------------------------------------------------------------:|--------|
| `spawnMessage` | [Chaînes de caractères](#string) et [codes de couleur](#color_codes) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Je me relève !
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Définit la liste des messages à envoyer lorsque le boss meurt. Nécessite la configuration de
la [priorité d’annonce](#announcementPriority).

| Clé             |                                                Valeurs                                                | Défaut |
|-----------------|:-----------------------------------------------------------------------------------------------------:|--------|
| `deathMessages` | [Chaînes de caractères](#string), [codes de couleur](#color_codes) et les espaces réservés ci-dessous | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Le Boss test a été tué !'
- '&c&l    1er dégâts : $damager1name &c avec $damager1damage dégâts !'
- '&6&l    2e dégâts : $damager2name &6 avec $damager2damage dégâts !'
- '&e&l    3e dégâts : $damager3name &e avec $damager3damage dégâts !'
- '&4Tueurs : $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Les messages de mort utilisent les espaces réservés suivants:

<details> 

<summary><b>Espaces réservés</b></summary>

| Valeur            |                                  Description                                   |
|-------------------|:------------------------------------------------------------------------------:|
| `$damager1name`   |                Le nom de celui qui a infligé le plus de dégâts                 |
| `$damager2name`   |         Le nom de la deuxième personne ayant infligé le plus de dégâts         |
| `$damager3name`   |        Le nom de la troisième personne ayant infligé le plus de dégâts         |
| `$damager1damage` |      La quantité de dégâts de la personne ayant infligé le plus de dégâts      |
| `$damager2damage` | La quantité de dégâts de la deuxième personne ayant infligé le plus de dégâts  |
| `$damager3damage` | La quantité de dégâts de la troisième personne ayant infligé le plus de dégâts |
| `$players`        |           Affiche une liste de tous ceux qui ont infligé des dégâts            |

</details>

### onKillMessage

Définit le message à envoyer lorsque le boss tue un joueur. Nécessite la configuration de
la [priorité d’annonce](#announcementPriority).

| Clé             |                               Valeurs                                | Défaut |
|-----------------|:--------------------------------------------------------------------:|--------|
| `onKillMessage` | [Chaînes de caractères](#string) et [codes de couleur](#color_codes) | none   |

<details> 

<summary><b>Exemple</b></summary>

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

Définit la taille du boss slime, mais ne fonctionne que pour les Slimes et les cubes de magma.

</div>

| Clé         |      Valeurs       | Défaut |
|-------------|:------------------:|--------|
| `slimeSize` | [Entier](#integer) | `4`    |

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

Définit si le boss apparaîtra comme neutre ou non. Ceci ne s’applique qu’aux types d’entités qui peuvent être neutres,
comme les loups ou les golems de fer.

</div>

| Clé       |       Valeurs       | Défaut  |
|-----------|:-------------------:|---------|
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

| Clé       |                Valeurs                | Défaut |
|-----------|:-------------------------------------:|--------|
| `timeout` | Durée (en minutes) [Entier](#integer) | `0`    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
timeout: 20
```

Définit le boss pour qu’il s’échappe au bout de 20 minutes.

</div>

</details>

***

### isPersistent

Définit si le boss peut survivre à un déchargement de chunk. Uniquement recommandé pour les boss d’événement.

| Clé            |     Valeurs      | Défaut  |
|----------------|:----------------:|---------|
| `isPersistent` | `true` / `false` | `false` |

<details>
<summary><b>Exemple</b></summary>

<div align="left">

Exemple:

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Définit les armes contre lesquelles les boss peuvent être forts ou faibles.

| Clé               |        Valeurs        | Défaut |
|-------------------|:---------------------:|--------|
| `damageModifiers` | [Matériau](#material) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

Dans cet exemple, les boss ne subiront que 80 % des dégâts des épées en diamant (ou 20 % de moins), mais subiront 200 %
des dégâts des tridents (ou 2 fois plus).

</details>

***

### normalizedCombat

Modifie les dégâts et la santé maximale du boss pour qu’ils correspondent aux valeurs de l’entité normalisée
dans `~/plugins/EliteMobs/mobproperties`. Il s’agit du paramètre par défaut pour les boss régionaux afin de garantir une
courbe de difficulté fluide.

| Clé                |     Valeurs      | Défaut  |
|--------------------|:----------------:|---------|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Exemple:

```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

Définit le message qui est diffusé aux joueurs lorsque le boss s’échappe via le mécanisme de [timeout](#timeout).
Nécessite la configuration de [announcementPriority](#announcementPriority).

| Clé             |             Valeurs             | Défaut |
|-----------------|:-------------------------------:|--------|
| `escapeMessage` | [Chaîne de caractères](#string) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara !"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Définit le message affiché dans la barre du boss. Ceci est utilisé pour suivre à la fois la santé du boss personnalisé
et son emplacement dans le serveur. Nécessite que [annoucementPriority](#annoucementPriority) soit configuré.

| Clé               |                                                   Valeurs                                                   | Défaut |
|-------------------|:-----------------------------------------------------------------------------------------------------------:|--------|
| `locationMessage` | [Chaîne de caractères](#string), [Codes de couleur](#color_codes) et les espaces réservés listés ci-dessous | none   |

Espaces réservés:

| Valeur      |                                           Description                                            |
|-------------|:------------------------------------------------------------------------------------------------:|
| `$distance` | Est remplacé par la distance entre le joueur et le boss personnalisé. C’est l’option préférable. |
| `$location` |          Est remplacé par les coordonnées x, y, z de l’emplacement du boss personnalisé          |

<details>


<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Boss cool : À $location à seulement $distance blocs !"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Cela afficherait quelque chose comme `Boss cool : À 414,55,347 à seulement 10 blocs !`

</details>

***

### uniqueLootList

Définit les [objets personnalisés]($language$/elitemobs/creating_items.md) qui tombent du boss.

| Clé              |        Valeurs        | Défaut |
|------------------|:---------------------:|--------|
| `uniqueLootList` | [Liste](#string_list) | none   |

Les entrées de butin dans le butin personnalisé suivent le format de table de
butin. [Infos à ce sujet ici !]($language$/elitemobs/loot_tables.md) Veuillez noter que certains fichiers plus anciens
peuvent utiliser des tables de butin obsolètes qui ont un aspect différent de l’exemple.

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

Définit si le boss lâchera du butin EliteMobs, à l’exclusion des objets dans [`uniqueLootList`](#uniqueLootList).
Comprend les pièces.

| Clé                  |      Valeurs      | Défaut |
|----------------------|:-----------------:|--------|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Il est recommandé de définir sur false pour les mobs de renfort.

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

Définit si le boss personnalisé lâchera le butin vanille habituellement associé à son type de mob vanille.

| Clé                |      Valeurs      | Défaut |
|--------------------|:-----------------:|--------|
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

Définit si le boss personnalisé lâchera du butin généré de manière procédurale par EliteMobs. N’inclut pas les pièces
d’élite.

| Clé               |      Valeurs      | Défaut |
|-------------------|:-----------------:|--------|
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

Définit la traînée que le boss laisse derrière lui lorsqu’il se déplace.

| Clé      |                                                                                  Valeurs                                                                                  | Défaut |
|----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `trails` | [Particules](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) ou [matériaux d’objet](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | none   |

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

Définit le message que le mob boss affiche lorsqu’il frappe un joueur. Il s’agit d’une liste, et celui qui est utilisé
est choisi au hasard dans la liste.

| Clé                |        Valeurs        | Défaut |
|--------------------|:---------------------:|--------|
| `onDamageMessages` | [Liste](#string_list) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Je t’ai touché !"
- "Haha, je t’ai touché !"
```

<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Définit le message que le mob boss affiche lorsqu’il est endommagé par un joueur. Il s’agit d’une liste, et celui qui
est utilisé est choisi au hasard dans la liste.

| Clé                 |        Valeurs        | Défaut |
|---------------------|:---------------------:|--------|
| `onDamagedMessages` | [Liste](#string_list) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Tu m’as touché !"
- "J’ai été touché !"
```

<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Définit l’entité que le boss montera et chevauchera.

| Clé                 |                                                                   Valeurs                                                                   | Défaut |
|---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------:|--------|
| `onDamagedMessages` | [Nom de fichier du boss à monter](#filename) ou [type d’entité](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | none   |

N’essayez pas de faire en sorte que le boss se monte lui-même.

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

Remarque: Les boss régionaux partageront leur laisse avec l’entité qu’ils montent, ce qui signifie qu’ils seront tous
les deux ramenés à l’emplacement d’apparition s’ils dépassent la distance autorisée par leur laisse.

***

### announcementPriority

Définit le niveau de priorité des annonces. Les priorités inférieures signifient qu’aucune annonce n’est faite, les
priorités supérieures peuvent annoncer non seulement dans le chat, mais aussi sur Discord si cela est configuré.

| Clé                    |      Valeurs       | Défaut |
|------------------------|:------------------:|--------|
| `announcementPriority` | [Entier](#integer) | `1`    |

Voici une liste de ce que font les priorités:

| Valeur |                                                                                             Description                                                                                             |
|--------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0`    |                                                                  Le boss sera totalement silencieux, sans aucun message d’annonce.                                                                  |
| `1`    |                      Il s’agit du paramètre par défaut. Les boss peuvent envoyer des messages de chat, sur le message d’apparition, sur la mort et les messages d’échappement.                      |
| `2`    |                                               En plus des éléments de `1`, le boss sera configuré pour être suivi par les joueurs via le menu `/em`.                                                |
| `3`    | En plus des éléments de `2`, les messages de diffusion seront mis en miroir sur Discord s’il est configuré. [Informations sur la configuration de Discord ici.]($language$/elitemobs/discordsrv.md) |

Voici un exemple de boss qui est traçable, qui est capable d’envoyer des messages d’apparition/de mort/d’échappement sur
le chat et sur Discord:

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Remarque**: Vous devrez configurer spawnMessage, deathMessage/deathMessages, escapeMessage pour les annonces sur le
chat et Discord et locationMessage pour la fonctionnalité de suivi si vous souhaitez utiliser le niveau de priorité
d’annonce correspondant.

***

### followDistance

Définit la distance à laquelle les boss se mettent en colère et entrent en combat.

| Clé              |                Valeurs                | Défaut                                               |
|------------------|:-------------------------------------:|------------------------------------------------------|
| `followDistance` | [Nombre à virgule flottante](#double) | none, utilise les paramètres par défaut de Minecraft |

Remarque 1: Les boss régionaux ont la moitié de la `followDistance` lorsqu’ils ne sont pas en combat. C’est pour qu’ils
ne se mettent pas en colère de trop loin, ce qui peut entraîner des problèmes de combat ennuyeux en raison des
contraintes de laisse.

Remarque 2: Plus la `followDistance` est élevée, plus le boss utilise l’unité centrale du serveur. Utilisez avec
précaution et de manière responsable!

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Définit une portée de 30 blocs où, si un joueur se trouve à cette distance près du boss, il commencera à
chasser/attaquer le joueur.

</details>

***

### onDeathCommands

Définit la liste des commandes à exécuter lors de la mort du boss personnalisé.

| Clé               |        Valeurs        | Défaut |
|-------------------|:---------------------:|--------|
| `onDeathCommands` | [Liste](#string_list) | none   |

La liste prend en charge les espaces réservés suivants:

| Valeur          |                                                                                               Description                                                                                                |
|-----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `$level`        |                                                                                  Espace réservé pour le niveau du boss.                                                                                  |
| `$name`         |                                                                                   Espace réservé pour le nom du boss.                                                                                    |
| `$chance=x$`    |                                                                              Donne une chance à une commande de s’exécuter.                                                                              |
| `$players`      | Fait exécuter la commande une fois pour chaque joueur dans la liste des personnes ayant infligé des dégâts et la remplace à chaque fois par le nom d’utilisateur d’un joueur différent dans cette liste. |
| `$locationX`    |                                                                                Coordonnée X du boss au moment de sa mort.                                                                                |
| `$locationY`    |                                                                                Coordonnée Y du boss au moment de sa mort.                                                                                |
| `$locationZ`    |                                                                                Coordonnée Z du boss au moment de sa mort.                                                                                |
| `$damager1name` |                                                                     Nom d’utilisateur de la personne ayant infligé le plus de dégâts                                                                     |
| `$damager2name` |                                                                Nom d’utilisateur de la deuxième personne ayant infligé le plus de dégâts                                                                 |
| `$damager3name` |                                                                Nom d’utilisateur de la troisième personne ayant infligé le plus de dégâts                                                                |

Jetez un coup d’œil à l’exemple ci-dessous pour mieux comprendre comment cela fonctionne.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players a tué $name ! C’était le niveau $level !"
- "$chance=0.5$ say Quel meurtre !"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Si Joueur1, Joueur2 et Joueur3 ont tous infligé des dégâts au boss avant de le tuer, voici ce que la commande affichera
à partir de la console:

<div align="left">

```
say Joueur1 a tué NomDuBossPersonnalisé ! C’était le niveau X !
say Joueur2 a tué NomDuBossPersonnalisé ! C’était le niveau X !
say Joueur3 a tué NomDuBossPersonnalisé ! C’était le niveau X !
```

</div>

De plus, il y a 50 % de chances que ce qui suit soit également affiché:

<div align="left">

```
say Quel meurtre !
```

</div>

</details> 

***

### onSpawnCommands

Définit la liste des commandes qui seront exécutées lors de l’apparition du boss.

| Clé               |        Valeurs        | Défaut |
|-------------------|:---------------------:|--------|
| `onSpawnCommands` | [Liste](#string_list) | none   |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands)!** Les espaces réservés pour les
personnes ayant infligé des dégâts ne s’appliqueront pas, car il n’y aura pas de personnes ayant infligé des dégâts pour
le moment.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onSpawnCommands:
  - say Le boss est apparu !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Définit la liste des commandes qui seront exécutées lorsque le boss entre en combat.

| Clé                     |        Valeurs        | Défaut |
|-------------------------|:---------------------:|--------|
| `onCombatEnterCommands` | [Liste](#string_list) | none   |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands)!** Les espaces réservés pour les
personnes ayant infligé des dégâts ne s’appliqueront pas, car il n’y aura pas de personnes ayant infligé des dégâts pour
le moment.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Le boss est entré en combat !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Définit la liste des commandes à exécuter lorsque le boss quitte le combat.

| Clé                     |        Valeurs        | Défaut |
|-------------------------|:---------------------:|--------|
| `onCombatLeaveCommands` | [Liste](#string_list) | none   |

**Cela utilise les mêmes espaces réservés que [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Le boss a quitté le combat !
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Définit le déguisement LibsDisguises si ce plugin est
activé. [Plus d’informations ici.]($language$/elitemobs/libsdisguises.md)

| Clé                  |             Valeurs             | Défaut |
|----------------------|:-------------------------------:|--------|
| `disguise`           | [Chaîne de caractères](#string) | none   |
| `customDisguiseData` | [Chaîne de caractères](#string) | none   |

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
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Inconnu","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Définit un déguisement personnalisé à partir de skindex. [Consultez cette page]($language$/elitemobs/libsdisguises.md)
pour apprendre à formater correctement ces données.

</details>

***

### customModel

Définit le modèle personnalisé à utiliser, si vous avez un modèle personnalisé et
ModelEngine. [Plus d’informations ici.]($language$/elitemobs/custom_models.md)

| Clé           |             Valeurs             | Défaut |
|---------------|:-------------------------------:|--------|
| `customModel` | [Chaîne de caractères](#string) | none   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customModel: votre_modèle
```

</div>

</details>

***

### frozen

Définit si le boss peut bouger. Les boss gelés peuvent toujours attaquer.
</br>*Remarque: Cela peut ne pas fonctionner sur certaines entités.*

| Clé      |     Valeurs      | Défaut  |
|----------|:----------------:|---------|
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

Définit la musique qu’un boss jouera, à partir du moment où il apparaît. Nécessite que le fichier .ogg de la musique se
trouve dans le pack de ressources.

| Clé    |             Valeurs             | Défaut |
|--------|:-------------------------------:|--------|
| `song` | [Chaîne de caractères](#string) | none   |

**Remarque: Le paramètre `song` nécessite que `followDistance` soit défini, car `followDistance` détermine la portée à
laquelle la musique commence à jouer.**
Consultez l’exemple sur la manière de définir la `length` (millisecondes) de la `song`.

<details> 

<summary><b>Exemple</b></summary>

Il existe deux façons de configurer les musiques. Voici la première:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Cela jouera la musique ice_queen.idle pendant 76 370 millisecondes, puis la bouclera. Veuillez noter que l’emplacement
de la musique est déterminé par le pack de ressources.

Voici la deuxième façon de configurer les musiques:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Cela jouera la musique ice_queen.end_transition pendant 14 328 millisecondes, puis passera à ice_queen.end_loop pendant
28 657 millisecondes et bouclera la end_loop.

Cela permet aux boss d’avoir une musique d’« intro » ou de « transition », puis une piste principale qui tourne en
boucle.

</div>

</details>

***

### cullReinforcements

Définit si les renforts du boss seront supprimés lorsque le boss meurt.

| Clé                  |     Valeurs      | Défaut |
|----------------------|:----------------:|--------|
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
</br>*Remarque: Tout ce qui dépasse 0,36 peut être trop rapide.*

| Clé                      |                Valeurs                | Défaut |
|--------------------------|:-------------------------------------:|--------|
| `movementSpeedAttribute` | [Nombre à virgule flottante](#double) | none   |

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

Les boss peuvent avoir des phases qui changent lorsque le boss atteint un certain pourcentage de santé. Lorsque cela se
produit, le boss commence à utiliser un fichier de configuration différent, ce qui signifie que tout ce qui concerne le
boss peut changer, y compris des éléments comme le type d’entité.
</br>Pour en savoir plus sur les phases de boss, cliquez [ici]($language$/elitemobs/creating_boss_phases.md).

| Clé | Description | Valeurs | Défaut |
|-|:-:|-|-|
| `phases` | Définit les phases que le boss aura. Obligatoire | [Liste](#string_list) | none |
| `phaseSpawnLocation` | Définit où apparaît le boss de phase. Facultatif | [Chaîne de caractères](#string) | none |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

Pour cet exemple, nous allons présenter trois fichiers de configuration différents.

Premier fichier de configuration du boss: phase_1_boss.yml

```yml
name: "Phase 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Deuxième fichier de configuration du boss: phase_2_boss.yml

```yml
name: "Phase 2"
entityType: SKELETON
```

Troisième fichier de configuration du boss: phase_3_boss.yml

```yml
name: "Phase 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Ce boss passerait au fichier de configuration `phase_2_boss.yml` à 60 % de sa santé, et au fichier de
configuration `phase_3_boss.yml` à 30 % de sa santé dans le même monde que la phase 2 et aux coordonnées x=10, y=64 et
z=100. Le type d’entité et le nom du boss changeraient également.

Le format d’une entrée est `nom_de_fichier:pourcentageDeSanté`.

phaseSpawnLocation est facultatif, s’il n’est pas défini, le boss changera de phase là où il se trouve.

</details>

Les points suivants sont importants à connaître lors de la conception d’un boss de phase:

<div align="left">

- Le fichier de configuration de la première phase définit toutes les phases du boss.
- La menace/les dégâts comptabilisés sont conservés entre les phases pour les joueurs.
- Le changement de phase est basé sur le pourcentage de santé perdu, qui est conservé lors du passage à une phase
  différente. Cela signifie qu’augmenter ou diminuer le `healthMultiplier` entre les phases ne soignera ni n’endommagera
  le boss, il changera toujours avec le même pourcentage, mais aura plus ou moins de santé pour cette phase.
- Les boss de phase reviennent à la phase 1 s’ils sortent du combat.
- Les boss de phase qui sont également des boss régionaux partagent le même rayon de laisse et le même mécanisme de
  temporisation dans toutes les phases, et réapparaîtront comme le boss de la phase 1 lorsque le temporisateur sera
  terminé.
- Le fichier de configuration de la dernière phase définit le butin du boss.
- Les phases ne peuvent pas être sautées: les dégâts excessifs feront toujours en sorte que le boss change de phase au
  pourcentage défini.
- Les boss de phase qui ont des montures cessent d’être montés lorsqu’ils changent de phase.

</div>

</div>

</div>

***

## Boss régionaux

<div align="center">

Les boss régionaux sont un type spécifique de boss personnalisés qui apparaissent à un emplacement spécifique configuré
et qui peuvent réapparaître à cet emplacement après un délai. De plus, ils peuvent avoir des laisses qui garantissent
qu’ils restent dans une zone spécifique, entre autres fonctionnalités.

Ceux-ci sont utilisés pour tout le contenu des donjons. Pour en savoir plus sur les boss régionaux,
cliquez [ici]($language$/elitemobs/creating_world_bosses.md).

| Clé                   |                                                 Description                                                  |                                  Valeurs                                  | Défaut  |
|-----------------------|:------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------:|---------|
| `isRegionalBoss`      |               Définit si le boss est régional. Doit être true si vous voulez un boss régional.               |                             `true` /  `false`                             | `false` |
| `spawnLocation`       |                                Définit les emplacements d’apparition du boss.                                | Ajoutez-les via la commande `/em addSpawnLocation [nom_de_fichier.yml]` ! | none    |
| `spawnCooldown`       |                         Définit le délai de réapparition du boss, en <b>minutes</b>.                         |                            [Entier](#integer)                             | `0`     |
| `leashRadius`         | Définit la distance que le boss peut parcourir depuis son point d’apparition avant d’être ramené en arrière. |                   [Nombre à virgule flottante](#double)                   | none    |
| `onSpawnBlockStates`  |                         Définit les blocs que le boss modifiera lorsqu’il apparaît.                          |                    Consultez les commandes ci-dessous                     | none    |
| `onRemoveBlockStates` |                         Définit les blocs que le boss modifiera lorsqu’il disparaît.                         |                    Consultez les commandes ci-dessous                     | none    |

Comme indiqué, les boss régionaux peuvent avoir `onSpawnBlockStates` et `onRemoveBlockStates`.

Il s’agit d’une fonctionnalité très utile pour modifier les arènes de combat pendant le combat, en particulier
lorsqu’elle est combinée avec des changements de phase, car il devient possible d’ouvrir et de fermer les arènes de
combat en modifiant les états des blocs.

Le format de ceux-ci est trop complexe pour être écrit manuellement, il existe donc quelques commandes pour vous aider à
les configurer:

| Commande                                                                       |                                               Description                                               |
|--------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------:|
| /em registerblocks [fichier_de_boss_régional.yml] [on_spawn/on_remove]         | Commence à enregistrer des sélections manuelles de blocs pour les états de blocs on spawn ou on remove. |
| /em registerblocksedit [fichier_de_boss_régional.yml] [on_spawn/on_remove]     |                            Modifie les états de blocs on spawn ou on remove.                            |
| /em registerblocksarea [fichier_de_boss_régional.yml] [on_spawn/on_remove]     |  Permet aux administrateurs de sélectionner de grandes zones de blocs à enregistrer en tant qu’états.   |
| /em registerblocksareaedit [fichier_de_boss_régional.yml] [on_spawn/on_remove] |    Permet aux administrateurs de modifier de grandes zones de blocs à enregistrer en tant qu’états.     |

<details> 

<summary><b>Exemple d’utilisation :</b></summary>

<div align="left">

Disons que vous voulez créer un combat où un boss apparaît dans une arène qui a une porte ouverte, et vous voulez faire
en sorte que la porte se ferme lorsque le combat commence et se rouvre lorsque le combat est terminé.

Pour ce faire, vous aurez besoin de deux phases de boss et d’enregistrer trois ensembles différents d’états de blocs.
Pour cet exemple, je nommerai ces phases respectivement phase_1_boss.yml et phase_2_boss.yml.

1) Utilisez `/em registerblocks phase_1_boss.yml on_spawn` ou `/em registerblocksedit phase_1_boss.yml on_spawn` pour
   enregistrer les blocs de porte dans leur état ouvert.

Cela signifie enregistrer les blocs d’air. La sélection de zone est recommandée ici.

Ceci est nécessaire pour s’assurer que la porte est ouverte lorsque le boss apparaît, afin que les joueurs aient la
garantie d’avoir un moyen d’entrer.

2) Utilisez `/em registerblocks phase_2_boss.yml on_spawn` ou `/em registerblocksedit phase_2_boss.yml on_spawn` pour
   enregistrer les blocs de porte dans leur état fermé.

Cela signifie enregistrer les blocs solides de la porte qui empêcheraient le joueur de partir.

Ceci est nécessaire pour que la porte devienne solide lorsque le boss entre dans la phase 2, empêchant les joueurs de
partir.

3) Utilisez `/em registerblocks phase_2_boss.yml on_remove` ou `/em registerblocksedit phase_2_boss.yml on_remove` pour
   enregistrer les blocs de porte dans leur état ouvert.

Cela signifie enregistrer à nouveau les mêmes blocs qu’à la première étape (les blocs d’air).

Ceci est nécessaire pour ouvrir la porte lorsque le boss meurt, permettant aux joueurs de quitter l’arène.

</div>

</details>

</div>

***

### alert

<div align="center">

Définit si le boss est en alerte. Par défaut, les boss régionaux sont ralentis et ont une distance d’aggro plus courte
lorsqu’ils ne sont pas en combat. Ce paramètre empêche les boss régionaux d’être ralentis et d’avoir une distance
d’aggro plus courte lorsqu’ils ne sont pas en combat, de sorte qu’ils se comporteront toujours de la même manière en
combat ou hors combat.

</div>

| Clé     |       Valeurs       | Défaut |
|---------|:-------------------:|--------|
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

Définit si le boss régional sera définitivement supprimé après avoir été tué. C’est ce que BetterStructures utilise pour
les sanctuaires, où le boss régional n’est conçu que pour être combattu une seule fois, puis plus jamais à cet endroit.

</div>

| Clé                |       Valeurs       | Défaut  |
|--------------------|:-------------------:|---------|
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

| Clé         |                    Description                    | Valeurs          | Défaut  |
|-------------|:-------------------------------------------------:|------------------|---------|
| `instanced` | Rend le boss personnalisé instancié. Obligatoire. | `true` / `false` | `false` |

Le fait de définir des boss comme étant instanciés est obligatoire pour que les donjons instanciés fonctionnent
correctement. Nous recommandons également de supprimer les laisses pour tous les boss instanciés.

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
