# Table de Butin Personnalisée

Format de butin universel. Utilisé par EliteMobs à plusieurs endroits différents.

Veuillez noter qu'il s'agit du format le plus récent et celui qu'il est recommandé d'utiliser, mais certains anciens
formats alternatifs existent.

Assurez-vous de commencer vos tables de butin avec `uniqueLootList:` avant d'ajouter des paramètres, sinon la
configuration .yml générera une erreur.

### Lâcher des objets d'élite :

| Clé        |                            Détails                            | Valeurs                     | Par défaut |
|------------|:-------------------------------------------------------------:|-----------------------------|------------|
| `filename` | Définit le nom de fichier de l'objet personnalisé à utiliser. | [Nom de Fichier](#filename) | aucun      |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Cela fera en sorte que le mob lâche 1 exemplaire du *Cure-dent de MagmaGuy* avec une chance de butin de 100 %.

</div>

</details>

### Paramètres généraux :

| Clé                 |                                   Détails                                    | Valeurs             | Par défaut |
|---------------------|:----------------------------------------------------------------------------:|---------------------|------------|
| `chance`            |                       Définit la probabilité de butin.                       | [Double](#double)   | `1.0`      |
| `amount`            |            Définit la quantité de cette entrée de butin à lâcher.            | [Entier](#integer)  | `1`        |
| `ignorePlayerLevel` | Permet au butin de tomber sans tenir compte de la limite de butin du joueur. | [Booléen](#boolean) | `false`    |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Cela fera en sorte que le mob lâche 10 exemplaires du *Cure-dent de MagmaGuy* avec une chance de butin de 50 % tout en
ignorant le niveau du joueur.

</div>

</details>

### Lâcher des pièces d'élite :

| Clé              |                      Détails                      | Valeurs            | Par défaut |
|------------------|:-------------------------------------------------:|--------------------|------------|
| `currencyAmount` | Définit la quantité de pièces qui seront lâchées. | [Entier](#integer) | aucun      |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```

Cela fera en sorte que le mob lâche 344 *Pièces d'Élite* avec une chance de butin de 50 %.

</div>

</details>

### Lâcher des objets vanille :

| Clé        |                Détails                | Valeurs               | Par défaut |
|------------|:-------------------------------------:|-----------------------|------------|
| `material` | Définit le matériau de l'objet lâché. | [Matériau](#material) | aucun      |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```

Cela fera en sorte que le mob lâche 5 *Pommes* avec une chance de butin de 30 %.

</div>

</details>

### Arènes : EN COURS DE TRAVAIL (Ne fonctionne pas actuellement)

Lors de la création de tables de butin d'arène, veuillez vous assurer de commencer votre table de butin
avec `rawArenaReward:` au lieu de `uniqueLootList:`.

| Clé     |                                                Détails                                                | Valeurs            | Par défaut |
|---------|:-----------------------------------------------------------------------------------------------------:|--------------------|------------|
| `wave`  | Définit la vague à laquelle cette entrée de butin sera lâchée. À utiliser uniquement dans les arènes. | [Entier](#integer) | aucun      |
| `level` |                  Définit le niveau du butin. À utiliser uniquement dans les arènes.                   | [Entier](#integer) | aucun      |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```

Lorsque les joueurs battent la première vague, l'arène lâchera 10 *Pains* avec une chance de butin de 50 % et 1
*Cure-dent de MagmaGuy* de niveau 2 avec une chance de butin de 100 %.

</div>

</details>

### Donjons Instanciés :

| Clé            |                                                                   Détails                                                                    | Valeurs           | Par défaut |
|----------------|:--------------------------------------------------------------------------------------------------------------------------------------------:|-------------------|------------|
| `difficultyID` | Définit la liste des difficultés de donjon instancié pour lesquelles ce butin sera lâché. À utiliser uniquement dans les donjons instanciés. | [Chaîne](#string) | aucun      |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```

Cela fera en sorte que le mob lâche 1 *Cure-dent de MagmaGuy* avec une chance de butin de 50 % si les joueurs ont vaincu
le boss en difficulté 1 ou 2.

</div>

</details>
