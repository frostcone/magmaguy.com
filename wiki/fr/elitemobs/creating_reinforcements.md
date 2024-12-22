# Création de renforts personnalisés

Si vous êtes intéressé par l'invocation d'élites pendant les combats pour renforcer un boss, ce guide couvre ce sujet en
détail.

## Étapes pour créer un boss personnalisé :

1. Créez votre boss personnalisé principal qui invoquera votre boss personnalisé.
2. Créez un boss personnalisé pour les renforts. Gardez à l'esprit que les boss personnalisés peuvent être plus forts
   que les monstres vanilla, mais ils peuvent aussi être plus faibles.
3. Ajoutez la ligne de renfort correcte au fichier de configuration

## Création de la ligne de renfort

Supposons que vous ayez un boss personnalisé avec ce format:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLieur des Mondes
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

Et vous voulez y ajouter des renforts. Voici à quoi pourrait ressembler un de ces renforts:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Et pour le rendre valide, ajoutez-le à la liste des pouvoirs:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLieur des Mondes
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Le renfort est maintenant ajouté à l'entité du boss. Cependant, comme vous pouvez le voir, il y a plusieurs options ici
que vous pouvez personnaliser. Couvrons-les.

## Toutes les options de renforcement personnalisé

*Conseil: vous pouvez également utiliser EliteScript pour invoquer des renforts, plus d'informations à ce
sujet [ici]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Ceci est un champ obligatoire. Il définit quand le renfort doit apparaître.

| Clé          |   Valeurs   | Par défaut |
|--------------|:-----------:|:----------:|
| `summonType` | Spécial [1] |  `ON_HIT`  |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Spécial [1]

| Clé                             | Description                                                                                                                                                                                                                                 |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ONCE`                          | Fait apparaître le renfort une seule fois, la première fois que le boss est touché. (peut dépendre d'une chance % que cela se produise)                                                                                                     |
| `ON_HIT`                        | Fait apparaître le renfort chaque fois que le boss est touché (peut dépendre d'une chance % que cela se produise)                                                                                                                           |
| `ON_COMBAT_ENTER`               | Fait apparaître le renfort lorsque le boss entre en combat (1)                                                                                                                                                                              |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` | Spécial : ceci est spécifiquement pour placer des cristaux d'end pour les combats de dragon lorsque le boss entre en combat (1)                                                                                                             |
| `GLOBAL`                        | Fait apparaître des renforts pour chaque joueur dans le même monde que le boss. Les renforts apparaîtront près des joueurs, quelle que soit leur distance du boss. Cela nécessite que le champ `customSpawn` soit défini pour fonctionner ! |

_(1) Les boss entrent en combat soit lorsqu'ils sont touchés par les joueurs, soit lorsqu'ils détectent un joueur à
portée._

***

### filename

Ceci est un champ obligatoire car il définit quel renfort doit apparaître. La seule exception à la nécessité de rendre
ce champ obligatoire est lorsque vous utilisez le paramètre `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, car les
cristaux d'end ne sont pas des élites.

| Clé        |           Valeurs           | Par défaut |
|------------|:---------------------------:|:----------:|
| `filename` | [Nom de fichier](#filename) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Viabilité minimale**

`summonType: SUMMON_TYPE` et `filename: filename.yml` sont suffisants à eux seuls pour créer un renfort personnalisé.
L'exemple suivant le démontre.

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLieur des Mondes
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*Cependant, si vous voulez ou avez besoin de quelque chose de plus complexe, continuez à lire ci-dessous pour voir ce
que vous pouvez faire d'autre avec ces options.*

</div>

</details>

</div>

<div align="center">

***

### chance

Il s'agit d'un champ de configuration facultatif créé pour compléter les options `summonType` `ONCE` et `ON_HIT`. Il
représente la chance qu'un renfort personnalisé apparaisse lorsqu'un boss est touché.

| Clé      |      Valeurs      | Par défaut |
|----------|:-----------------:|:----------:|
| `chance` | [Double](#double) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
chance: 0.5
```

*Représente une chance de 50 % de faire apparaître un renfort personnalisé.*

</div>

</details>

***

### location

`location: x,y,z` est un champ de configuration facultatif qui permet aux administrateurs de décaler l'emplacement du
renfort d'un certain nombre de blocs. Voici les concepts clés que vous devez connaître sur cette option:

**L'emplacement de décalage est relatif.** Cela signifie que `location: 0,10,0` fera apparaître un boss exactement 10
blocs au-dessus du boss, et non aux coordonnées mondiales 0,10,0.

**L'emplacement relatif est différent pour les boss régionaux.** Les boss régionaux utiliseront toujours leur point
d'apparition comme origine de l'emplacement relatif, ce qui signifie que si vous savez où se trouve le point
d'apparition du boss et que vous comptez les blocs, vous pouvez faire apparaître les boss de renfort à des emplacements
spécifiques. L'antre du Lieur des Mondes s'appuie sur cela pour faire apparaître les boss de la tour de défi à des
positions de blocs extrêmement spécifiques, quel que soit l'endroit où se trouve le boss dragon.

**Les boss apparaîtront à l'intérieur des blocs si vous vous trompez dans la mesure des distances.**

| Clé        |      Valeurs      | Par défaut |
|------------|:-----------------:|:----------:|
| `location` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location: 0,10,0
```

*Pour un boss personnalisé non régional, le renfort apparaîtra exactement 10 blocs au-dessus du boss, quel que soit son
emplacement.*

*Pour un boss personnalisé régional, le renfort apparaîtra exactement 10 blocs au-dessus du point d'apparition du boss
régional, quel que soit l'endroit où se trouve le boss.*

</div>

</details>

_**Remarque importante: ceci est un champ obligatoire pour `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL` spécifiquement!
**_

***

### lightningRod

Est un paramètre spécial qui n'est utile que pour `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Cela donne aux cristaux
d'end la capacité de foudroyer le sol autour d'eux avec un délai.

Il ne peut pas être utilisé avec les autres renforts personnalisés, car ceux-ci devraient s'appuyer sur des pouvoirs
pour ce type de capacités.

| Clé            |       Valeurs       | Par défaut |
|----------------|:-------------------:|:----------:|
| `lightningRod` | [Booléen](#booléen) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

Est un champ de configuration facultatif qui permet aux renforts personnalisés d'hériter des niveaux de menace du boss.

Ceci est particulièrement utile lorsque vous souhaitez que les renforts qui apparaissent ciblent la personne qui inflige
le plus de dégâts.

| Clé            |       Valeurs       | Par défaut |
|----------------|:-------------------:|:----------:|
| `inheritAggro` | [Booléen](#booléen) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

Est un champ de configuration facultatif qui définit la quantité de renforts qui apparaissent.

| Clé      |      Valeurs      | Par défaut |
|----------|:-----------------:|:----------:|
| `amount` | [Entier](#entier) |    `1`     |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

Est un champ de configuration facultatif qui définit si le renfort personnalisé doit apparaître à proximité au lieu
d'apparaître au-dessus du boss ou à un emplacement relatif spécifique.

Cette méthode doit tenir correctement compte des variations de terrain et ne pas faire apparaître les boss à l'intérieur
des murs, bien que dans certaines configurations, cela pourrait entraîner leur apparition derrière les murs si la zone
de combat est trop petite. A un rayon d'environ 30 blocs.

| Clé           |       Valeurs       | Par défaut |
|---------------|:-------------------:|:----------:|
| `spawnNearby` | [Booléen](#booléen) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

Est un champ de configuration facultatif qui définit si le renfort personnalisé doit hériter du niveau du boss
personnalisé qu'il renforce.

| Clé            |       Valeurs       | Par défaut |
|----------------|:-------------------:|:----------:|
| `inheritLevel` | [Booléen](#booléen) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

Est un champ de configuration qui n'est utilisé que pour les renforts globaux. Il utilise les paramètres d'apparition
personnalisés pour définir où les renforts pourront apparaître.

Cela peut être utilisé pour faire apparaître des renforts à la surface, dans des endroits avec de la lumière, dans des
biomes spécifiques, etc. Consultez la page wiki sur
les [Apparitions personnalisées]($language$/elitemobs/creating_spawns.md) pour plus de détails

| Clé           |           Valeurs           | Par défaut |
|---------------|:---------------------------:|:----------:|
| `customSpawn` | [Nom de fichier](#filename) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Assemblage d'un grand renfort

Créons un exemple de renfort en utilisant la plupart des champs précédents:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Cela fait ce qui suit:

- Crée un renfort personnalisé
- Le renfort personnalisé apparaîtra lorsque le boss personnalisé entrera en combat (`summonType: ON_COMBAT_ENTER`)
- Le renfort personnalisé invoqué sera celui de `test_boss.yml` (`filename: test_boss.yml`)
- Le renfort personnalisé apparaîtra à moins de 30 blocs de l'emplacement actuel du boss
  personnalisé (`spawnNearby: true`)
- Le renfort personnalisé héritera de l'aggro du boss personnalisé qu'il renforce, ce qui signifie qu'il attaquera le
  joueur qui a infligé le plus de dégâts (`inheritAggro: true`)
- Quel que soit le paramètre dans `test_boss.yml`, le renfort personnalisé aura le même niveau que le boss personnalisé
  qu'il renforce (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Cela fait ce qui suit:

- Crée un renfort personnalisé
- Le renfort personnalisé sera un cristal d'end qui est placé lorsque le combat
  commence (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- Le cristal d'end foudroiera le sol autour avec un délai (`lightningRod: true`)

Maintenant, pour appliquer cela au boss personnalisé:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eLieur des Mondes
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Et vous avez terminé! Voici quelques conseils supplémentaires:

- Les champs peuvent être définis dans n'importe quel ordre, bien qu'il soit recommandé d'avoir toujours `summonable` en
  premier!
- Il s'agit d'une grande amélioration par rapport à l'ancien système de renforts, qui n'est plus répertorié. Il n'est
  pas recommandé de s'y fier à ce stade, car il pourrait cesser de fonctionner à l'avenir.
