[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Que sont les trous de ver ?

Les trous de ver sont une sorte de système de téléportation de portail à portail très efficace. Les portails sont signalés par des effets visuels.

# Mécanique des trous de ver

Les trous de ver peuvent faire ce qui suit :

*   Traverser un portail pour atteindre le portail de destination, et aller du portail de destination au premier.
*   Jouer un son lorsque les joueurs les traversent
*   Aveugler temporairement les joueurs lorsqu’ils les traversent pour fluidifier la transition
*   Pousser les joueurs à l’extérieur pour éviter de se retrouver coincés dans une boucle de téléportation
*   Empêcher les joueurs de se téléporter pendant 5 secondes pour éviter de se retrouver coincés dans une boucle de téléportation
*   Jouer des effets visuels élaborés
*   Exiger des permissions pour utiliser le trou de ver
*   Exiger l’utilisation de monnaie pour utiliser le trou de ver
*   Notifier les joueurs et les administrateurs lorsque le portail de destination n’est pas disponible

# Créer un trou de ver

Les trous de ver sont ajoutés en tant que fichiers de configuration au dossier des trous de ver. Il est possible de créer des sous-dossiers, et il est recommandé de le faire si vous ajoutez des trous de ver pour des donjons spécifiques, sous le format \` ~/plugins/EliteMobs/wormholes/nomDuDonjon/nomDuDonjon\_identifiant.yml\`.

### Éjection

Le lacet et le tangage (les deux derniers chiffres dans les coordonnées) dans `location1` et `location2` définiront l’endroit où les joueurs seront éjectés du trou de ver lorsqu’ils le traverseront. Voyons cet exemple :

`location1: my_world,20,10,20,180,20`

Le lacet étant défini sur `180`, le joueur serait éjecté face au nord, et le tangage étant défini sur `20`, il serait également éjecté légèrement vers le haut. Si vous souhaitez que le joueur reste dans le même bloc que le trou de ver lors de son éjection, il est judicieux de définir le tangage sur une valeur négative pour s’assurer que les joueurs ne glissent pas hors du bloc.

## Configuration du trou de ver
Ce qui suit est un exemple de configuration de trou de ver valide :

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Définit si le trou de ver est activé.

| Clé       |       Valeurs        | Par défaut |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Booléen](#boolean) | `true`  |

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

| Clé       |      Valeurs       | Par défaut |
|-----------|:-----------------:|:-------:|
| `location1` | [Chaîne](#string) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

Spécifie le deuxième emplacement du trou de ver.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `location2` | [Chaîne](#string) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Définit le texte affiché du premier emplacement.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `location1Text` | [Chaîne](#string) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location1Text: Super trou de ver dans le monde un
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Définit le texte affiché du deuxième emplacement.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `location2Text` | [Chaîne](#string) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
location2Text: Super trou de ver dans le monde deux
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Définit la permission requise pour utiliser le trou de ver.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `permission` | [Chaîne](#string) |  aucun   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
permission: elitemobs.mapermission
```

</div>

</details>

***

### coinCost

Définit le coût, en pièces d’élite, de l’utilisation du trou de ver.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `coinCost` | [Double](#double) |  aucun   |

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

*Les particules qui composent ces formes peuvent entraîner des décalages dans certains clients. Pour désactiver les particules, allez dans **Wormholes.yml** et définissez `noParticlesMode` sur `true`.*

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Définit la couleur des particules utilisées dans le paramètre `style`.

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` suivi d’un code hexadécimal](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `blindPlayer` | [Booléen](#boolean) | `false` |

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

| Clé         |      Valeurs       | Par défaut |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [Multiplicateur](#multiplier) |   `1`   |

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*N’oubliez pas que vous devrez ajuster les coordonnées Y du trou de ver après avoir appliqué le multiplicateur de taille.*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Exemple de configuration de trou de ver</b></summary>

<div align="left">

Dans cet exemple, nous allons créer un trou de ver simple qui nous emmène d’un monde à un autre. N’oubliez pas que les trous de ver peuvent également simplement téléporter les joueurs vers un autre endroit dans le même monde.

```yml
isEnabled: true #Nous activons le ver en définissant cette valeur sur true
location1: my_world,1.5,11.0,1.5,108.0,5.0 #c’est ici que le trou de ver apparaîtra dans mon_monde
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #c’est ici que le trou de ver apparaîtra dans mon_autre_monde
location1Text: "&aAller à Mon monde" #crée un joli texte d’affichage au-dessus de l’emplacement 1 du trou de ver
location2Text: "&aAller à Mon autre monde" #crée un joli texte d’affichage au-dessus de l’emplacement 2 du trou de ver
permission: eliteperm.joueurscool #seuls les joueurs disposant de cette permission pourront utiliser le trou de ver, à la fois pour l’emplacement 1 et l’emplacement 2
coinCost: 2 #les joueurs devront payer 12 pièces d’élite pour pouvoir utiliser le trou de ver
style: CRYSTAL #ce trou de ver aura la forme d’un cristal
particleColor: 0x00ff00 #cela définira les particules du trou de ver en vert
blindPlayer: true #la téléportation du trou de ver aveuglera le joueur pendant une courte durée pour rendre la transition moins brutale
sizeMultiplier: 1.0 #définit la taille de la forme du trou de ver
```

</div>

</details>

#### Problèmes de performances

Les particules du trou de ver peuvent entraîner des problèmes de performances du client pour les joueurs qui utilisent Bedrock. Si vous souhaitez désactiver les particules du trou de ver, vous pouvez accéder à `~plugins\EliteMobs\Wormholes.yml` et modifier le paramètre `noParticlesMode` sur `true`.

