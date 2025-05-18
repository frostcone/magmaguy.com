Voici la traduction en français, en conservant le formatage markdown :

# Table de Butin Personnalisée

Format de butin universel. Utilisé par EliteMobs dans plusieurs endroits différents.

Veuillez noter qu'il s'agit du format le plus récent et celui recommandé, mais il existe d'autres formats plus anciens.

Assurez-vous de commencer vos tables de butin par `uniqueLootList:` avant d'ajouter des paramètres, sinon la configuration .yml générera une erreur.

### Objets d'élite à faire tomber :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `filename` | Définit le nom du fichier de l'Objet Personnalisé à utiliser. | [Filename](#filename) | none |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Cela fera tomber 1 *MagmaGuy's Toothpick* par le mob avec une chance de 100%.

</div>

</details>

### Paramètres généraux :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `chance` | Définit la chance que le butin tombe. | [Double](#double)   | `1.0` |
| `amount` | Définit la quantité de cette entrée de butin à faire tomber | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | Fait en sorte que le butin ignore le limiteur de butin du joueur | [Boolean](#boolean) | `false` |

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

Cela fera tomber 10 *MagmaGuy's Toothpick* par le mob avec une chance de 50% tout en ignorant le niveau du joueur.

</div>

</details>

### Pièces d'élite à faire tomber :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Définit la quantité de pièces qui seront lâchées. | [Integer](#integer) | none |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Cela fera tomber 344 *Elite Coins* par le mob avec une chance de 50%.

</div>

</details>

### Objets vanilla à faire tomber :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `material` | Définit le matériau de l'objet lâché. | [Material](#material) | none |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Cela fera tomber 5 *Apples* par le mob avec une chance de 30%.

</div>

</details>

### Arènes : TRAVAIL EN COURS (Ne fonctionne pas actuellement)
Lorsque vous créez des tables de butin d'arène, assurez-vous de commencer votre table de butin par `rawArenaReward:` au lieu de `uniqueLootList:`.

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `wave` | Définit la vague à laquelle cette entrée de butin tombera. À utiliser uniquement dans les arènes. | [Integer](#integer) | none |
| `level` | Définit le niveau du butin. À utiliser uniquement dans les arènes. | [Integer](#integer) | none |

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
Lorsque les joueurs battent la première vague, cela fera tomber 10 *Bread* dans l'arène avec une chance de 50% et 1 *MagmaGuy's Toothpick* de niveau 2 avec une chance de 100%.

</div>

</details>

### Donjons Instanciés :

| Clé | Détails | Valeurs            | Par défaut |
| --- | :-: |-------------------| --- |
| `difficultyID` | Définit la liste des difficultés de donjon instancié pour lesquelles ce butin tombera. À utiliser uniquement dans les donjons instanciés. | [String](#string) | none |

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
Cela fera tomber 1 *MagmaGuy's Toothpick* par le mob avec une chance de 50% si les joueurs ont vaincu le boss en difficulté 1 ou 2.

</div>

</details>