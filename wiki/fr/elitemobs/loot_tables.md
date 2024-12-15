[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Table de butin personnalisée

Format de butin universel. Utilisé par EliteMobs dans plusieurs emplacements différents.

Veuillez noter qu'il s'agit du dernier format et de celui qu'il est recommandé d'utiliser, mais certains anciens formats alternatifs existent.

Assurez-vous de commencer vos tables de butin par `uniqueLootList:` avant d'ajouter des paramètres, sinon la configuration .yml produira une erreur.

### Laisser tomber les objets d'élite :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `filename` | Définit le nom de fichier de l'objet personnalisé à utiliser. | [Nom de fichier](#filename) | aucun |

<details>

<summary align="center"><b>Exemple</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Cela fera que le mob laisse tomber 1 *cure-dent de MagmaGuy* avec une probabilité de 100 % de le faire tomber.

</div>

</details>

### Paramètres généraux :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `chance` | Définit la probabilité que le butin tombe. | [Nombre à virgule flottante double précision](#double)   | `1.0` |
| `amount` | Définit la quantité de cette entrée de butin à laisser tomber | [Entier](#integer) | `1` |
| `ignorePlayerLevel` | Fait que le butin qui tombe ignore le limiteur de butin du joueur | [Booléen](#boolean) | `false` |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Cela fera que le mob laisse tomber 10 *cure-dents de MagmaGuy* avec une probabilité de 50 % de le faire tomber tout en ignorant le niveau du joueur.

</div>

</details>

### Laisser tomber des pièces d'élite :

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Définit la quantité de pièces qui seront laissées tomber. | [Entier](#integer) | aucun |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Cela fera que le mob laisse tomber 344 *pièces d'élite* avec une probabilité de 50 % de le faire tomber.

</div>

</details>

### Laisser tomber des objets de vanilla :

| Clé | Détails | Valeurs                | Par défaut |
| --- | :-: |-----------------------| --- |
| `material` | Définit le matériau de l'objet qui tombe. | [Matériau](#material) | aucun |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Cela fera que le mob laisse tomber 5 *pommes* avec une possibilité de 30 % de les faire tomber.

</div>

</details>

### Arènes : TRAVAIL EN COURS (ne fonctionne pas actuellement)
Lors de la création de tables de butin d'arènes, assurez-vous de commencer votre table de butin par `rawArenaReward:` au lieu de `uniqueLootList:`.

| Clé | Détails | Valeurs              | Par défaut |
| --- | :-: |---------------------| --- |
| `wave` | Définit la vague à laquelle cette entrée de butin tombera. Uniquement pour une utilisation dans les arènes. | [Entier](#integer) | aucun |
| `level` | Définit le niveau du butin qui tombe. Uniquement pour une utilisation dans les arènes. | [Entier](#integer) | aucun |

<details>

<summary align="center"><b>Ejemplo</b></summary>

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
Lorsque les joueurs battent la première vague, cela fera que l'arène laisse tomber 10 *Pains* avec une probabilité de 50 % de les faire tomber et 1 *cure-dent de MagmaGuy* de niveau 2 avec une probabilité de 100 % de le faire tomber.

</div>

</details>

### Donjons instanciés :

| Clé | Détails | Valeurs            | Par défaut |
| --- | :-: |-------------------| --- |
| `difficultyID` | Définit la liste des difficultés de donjon instancié pour lesquelles ce butin sera laissé tomber. Uniquement pour une utilisation dans les donjons instanciés. | [Chaîne de caractères](#string) | aucun |

<details>

<summary align="center"><b>Ejemplo</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
Cela fera que le mob laissera tomber 1 *cure-dent de MagmaGuy* avec une probabilité de 50 % de le faire tomber si les joueurs ont vaincu le boss à la difficulté 1 ou 2.

</div>

</details>
