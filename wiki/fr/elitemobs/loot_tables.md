# Table de butin personnalisée

Format de butin universel. Utilisé par EliteMobs dans plusieurs endroits différents.

Veuillez noter qu'il s'agit du dernier format et celui qu'il est recommandé d'utiliser, mais il existe des formats plus anciens en alternative.

Assurez-vous de commencer vos tables de butin par `uniqueLootList:` avant d'ajouter des paramètres, sinon la configuration .yml produira une erreur.

### Laisser tomber des objets d'élite :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `filename` | Définit le nom de fichier de l'objet personnalisé à utiliser. | [Nom de fichier](#filename) | none |

<details> 

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Cela fera en sorte que le mob laisse tomber 1 *Cure-dent de MagmaGuy* avec une chance de 100 % de chute.

</div>

</details>

### Paramètres généraux :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `chance` | Définit la chance que le butin tombe. | [Double](#double)   | `1.0` |
| `amount` | Définit la quantité de cette entrée de butin à laisser tomber | [Entier](#integer) | `1` |
| `ignorePlayerLevel` | Fait en sorte que le butin ignore le limiteur de butin du joueur | [Booléen](#boolean) | `false` |

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

Cela fera en sorte que le mob laisse tomber 10 *Cure-dents de MagmaGuy* avec une chance de 50 % de chute tout en ignorant le niveau du joueur.

</div>

</details>

### Laisser tomber des pièces d'élite :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Définit le nombre de pièces qui seront laissées tomber. | [Entier](#integer) | none |

<details> 

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Cela fera en sorte que le mob laisse tomber 344 *Pièces d'élite* avec une chance de 50 % de chute.

</div>

</details>

### Laisser tomber des objets vanilla :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `material` | Définit le matériau de l'objet qui tombe. | [Matériau](#material) | none |

<details> 

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Cela fera en sorte que le mob laisse tomber 5 *Pommes* avec une chance de 30 % de chute.

</div>

</details>

### Arènes : EN COURS DE DÉVELOPPEMENT (Ne fonctionne pas actuellement)
Lorsque vous créez des tables de butin d'arène, assurez-vous de commencer votre table de butin par `rawArenaReward:` au lieu de `uniqueLootList:`.

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `wave` | Définit la vague à laquelle cette entrée de butin tombera. Uniquement pour une utilisation dans les arènes. | [Entier](#integer) | none |
| `level` | Définit le niveau de la chute de butin. Uniquement pour une utilisation dans les arènes. | [Entier](#integer) | none |

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
Lorsque les joueurs battent la première vague, cela fera en sorte que l'arène laisse tomber 10 *Pains* avec une chance de 50 % de chute et 1 *Cure-dent de MagmaGuy* de niveau 2 avec une chance de 100 % de chute.

</div>

</details>

### Donjons instanciés :

| Clé | Détails | Valeurs            | Par défaut |
| --- | :-: |-------------------| --- |
| `difficultyID` | Définit la liste des difficultés de donjon instancié pour lesquelles ce butin tombera. Uniquement pour une utilisation dans les donjons instanciés. | [Chaîne](#string) | none |

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
Cela fera en sorte que le mob laisse tomber 1 *Cure-dent de MagmaGuy* avec une chance de 50 % de chute si les joueurs ont vaincu le boss en difficulté 1 ou 2.

</div>

</details>

```

