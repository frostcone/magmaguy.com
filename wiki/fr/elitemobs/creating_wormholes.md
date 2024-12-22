[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les Trous de Ver ?

Les trous de ver sont une sorte de système de téléportation de portail à portail très efficace. Les portails sont
marqués par des effets visuels.

# Mécanismes des Trous de Ver

Les trous de ver peuvent faire ce qui suit :

* Passer par un portail pour atteindre le portail de destination, et revenir du portail de destination au premier.
* Jouer un son lorsque les joueurs les traversent
* Aveugler temporairement les joueurs pendant qu'ils les traversent pour adoucir la transition
* Pousser les joueurs vers l'extérieur pour éviter de se faire prendre dans une boucle de téléportation
* Verrouiller les joueurs hors de la téléportation pendant 5 secondes pour éviter de se faire prendre dans une boucle de
  téléportation
* Jouer des effets visuels élaborés
* Nécessiter des permissions pour utiliser le trou de ver
* Nécessiter l'utilisation de monnaie pour utiliser le trou de ver
* Notifier les joueurs et les administrateurs lorsque le portail de destination n'est pas disponible

# Créer un Trou de Ver

Les trous de ver sont ajoutés sous forme de fichiers de configuration au dossier des trous de ver. Il est possible de
créer des sous-dossiers, et il est recommandé de le faire si vous ajoutez des trous de ver pour des donjons spécifiques,
sous le format \` ~/plugins/EliteMobs/wormholes/nomDuDonjon/nomDuDonjon\_identifiant.yml\`.

### Éjection

Le lacet et le tangage (les deux derniers chiffres des coordonnées) dans `location1` et `location2` définiront d'où les
joueurs seront éjectés du trou de ver lorsqu'ils le traverseront. Regardons cet exemple :

`location1 : mon_monde,20,10,20,180,20`

Avec le lacet réglé sur `180`, le joueur serait éjecté face au nord, et avec le tangage réglé sur `20`, il serait
également éjecté légèrement vers le haut. Si vous souhaitez que le joueur reste dans le même bloc que le trou de ver
lorsqu'il est éjecté, il est préférable de régler le tangage sur une valeur négative pour vous assurer que les joueurs
ne glissent pas hors du bloc.

## Configuration du Trou de Ver

Voici un exemple de configuration de trou de ver valide:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Définit si le trou de ver est activé.

| Clé         |       Valeurs       | Par Défaut |
|-------------|:-------------------:|:----------:|
| `isEnabled` | [Booléen](#booléen) |   `true`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### location1

Spécifie le premier emplacement du trou de ver.

| Clé         |      Valeurs      | Par Défaut |
|-------------|:-----------------:|:----------:|
| `location1` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location1: monde_un,50,100,50,0,0
```

</div>

</details>

***

### location2

Spécifie le deuxième emplacement du trou de ver.

| Clé         |      Valeurs      | Par Défaut |
|-------------|:-----------------:|:----------:|
| `location2` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location2: monde_deux,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Définit le texte d'affichage du premier emplacement.

| Clé             |      Valeurs      | Par Défaut |
|-----------------|:-----------------:|:----------:|
| `location1Text` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location1Text: Super Trou de Ver Dans le Monde Un
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Définit le texte d'affichage du deuxième emplacement.

| Clé             |      Valeurs      | Par Défaut |
|-----------------|:-----------------:|:----------:|
| `location2Text` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location2Text: Super Trou de Ver Dans le Monde Deux
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Définit l'autorisation requise pour utiliser le trou de ver.

| Clé          |      Valeurs      | Par Défaut |
|--------------|:-----------------:|:----------:|
| `permission` | [Chaîne](#chaîne) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: elitemobs.ma_permission
```

</div>

</details>

***

### coinCost

Définit le coût, en pièces d'élite, de l'utilisation du trou de ver.

| Clé        |      Valeurs      | Par Défaut |
|------------|:-----------------:|:----------:|
| `coinCost` | [Double](#double) |   aucun    |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

Définit la forme visuelle du trou de ver.

*Les particules qui composent ces formes peuvent provoquer des lags chez certains clients. Pour désactiver les
particules, allez dans **Wormholes.yml** et réglez `noParticlesMode` sur `true`.*

| Clé     |                   Valeurs                   | Par Défaut |
|---------|:-------------------------------------------:|:----------:|
| `style` | `AUCUN` / `CRISTAL` / `ISOCAHEDRE` / `CUBE` |   `CUBE`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
style: CRISTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Définit la couleur des particules utilisées dans le paramètre `style`.

| Clé             |                                           Valeurs                                           | Par Défaut |
|-----------------|:-------------------------------------------------------------------------------------------:|:----------:|
| `particleColor` | [`0x` suivi d'un code hexadécimal](https://www.w3schools.com/colors/colors_hexadecimal.asp) | `0x800080` |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

Définit si le portail aveugle le joueur pour une téléportation plus fluide.

| Clé           |       Valeurs       | Par Défaut |
|---------------|:-------------------:|:----------:|
| `blindPlayer` | [Booléen](#booléen) |  `false`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

Multiplie la taille du portail et de la forme définie par `style`.

| Clé              |              Valeurs              | Par Défaut |
|------------------|:---------------------------------:|:----------:|
| `sizeMultiplier` | [Multiplicateur](#multiplicateur) |    `1`     |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*N'oubliez pas que vous devrez ajuster les coordonnées Y du trou de ver après avoir appliqué le multiplicateur de
taille.*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de Configuration de Trou de Ver</b></summary>

<div align="left">

Dans cet exemple, nous allons créer un simple trou de ver qui nous emmènera d'un monde à un autre. N'oubliez pas que les
trous de ver peuvent également téléporter les joueurs à un endroit différent du même monde.

```yml
isEnabled: true #Nous activons le ver en réglant cette valeur sur true
location1: mon_monde,1.5,11.0,1.5,108.0,5.0 #c'est là que le trou de ver apparaîtra dans mon_monde
location2: mon_autre_monde,766.5,29.0,517.5,-136.0,5.0 #c'est là que le trou de ver apparaîtra dans mon_autre_monde
location1Text: "&aAller à Mon Monde" #fait un joli texte d'affichage au-dessus du trou de ver location1
location2Text: "&aAller à Mon Autre Monde" #fait un joli texte d'affichage au-dessus du trou de ver location2
permission: eliteperm.joueurs_sympas #seuls les joueurs ayant cette permission pourront utiliser le trou de ver, à la fois pour location1 et location2
coinCost: 2 #les joueurs devront payer 12 pièces d'élite pour pouvoir utiliser le trou de ver
style: CRISTAL #ce trou de ver aura la forme d'un cristal
particleColor: 0x00ff00 #cela définira les particules du trou de ver en vert
blindPlayer: true #la téléportation du trou de ver aveuglera le joueur pendant une courte durée afin de rendre la transition moins brutale
sizeMultiplier: 1.0 #définit la taille de la forme du trou de ver
```

</div>

</details>

#### Problèmes de performance

Les particules du trou de ver peuvent provoquer des problèmes de performances client pour les joueurs qui utilisent
bedrock. Si vous souhaitez désactiver les particules du trou de ver, vous pouvez aller
dans `~plugins\EliteMobs\Wormholes.yml` et modifier le paramètre `noParticlesMode` sur `true`.
