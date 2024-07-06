# Qu'est-ce qu'un fichier de trésor ?

Les fichiers de trésor sont ceux qui déterminent les tables de butin pour les coffres de BetterStructures. Ils sont généralement attribués
aux [générateurs]($language$/betterstructures/creating_generators.md&section=treasurefilename) mais ils peuvent également être définis au
niveau d'une [configuration de construction individuelle]($language$/betterstructures/creating_structures.md&section=treasurefile).

Ces tables de butin sont assez puissantes, mais nécessitent également la connaissance de certains concepts statistiques de base pour être comprises.

<details>
<summary>
Lisez à propos de ces concepts ici, le reste de la page suppose que vous les comprenez !
</summary>

***Probabilité pondérée***

BetterStructures et EliteMobs utilisent fréquemment le concept de probabilité pondérée. Il s'agit de résoudre un problème simple : comment définir la probabilité de choisir un élément dans une liste d'éléments potentiellement infinis ?

La probabilité pondérée résout ce problème en attribuant un poids à chaque élément. Si vous avez 100 éléments et que chacun a un poids de 1, alors ils ont tous une chance égale - 1% - d'être choisis. Si vous ajoutez un élément supplémentaire, portant le total à 101 éléments, et que vous donnez à ce dernier élément un poids de 1, tous les éléments ont toujours la même chance - ~0,99% - d'être choisis. Si vous donnez au dernier élément un poids de 2, sa probabilité d'être choisi augmente - le nouveau poids total est de 102, le dernier élément a un poids de 2 et 100/102 = ~0,98%, donc 0,98% + 0,98% = 1,96% de chances d'être choisi. Si vous donnez au dernier élément un poids de 100, le nouveau poids est de 200, et puisque la moitié de ce poids est votre nouvel élément, votre nouvel élément a 50% de chances d'être choisi.

Comme vous pouvez le voir, c'est utile lorsque vous avez des listes de centaines de choses à choisir au hasard.

***Distribution gaussienne***

Une distribution gaussienne est une fonction mathématique en forme de cloche.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Vous vous demandez peut-être en quoi cela est pertinent pour le système de butin. Une chose que BetterStructures doit décider lors de la définition du butin dans les coffres est la quantité de butin qui apparaît dans ces coffres. La quantité doit être constamment autour d'un nombre spécifique, mais idéalement pas si prévisible que l'ouverture d'un coffre puisse devenir moins excitante.

Pour obtenir cet effet semi-aléatoire, la distribution gaussienne est utilisée pour randomiser le *nombre* d'éléments choisis. Une fois cette quantité choisie, la *probabilité pondérée* sélectionne un élément dans la table de rareté au hasard en tenant compte des poids.

Alors, comment fonctionne la distribution gaussienne ?

Heureusement, vous n'avez pas à vous soucier du fonctionnement mathématique derrière cela, et vous pouvez plutôt vous concentrer sur les deux paramètres qui la modifient : la moyenne et l'écart type.

*Moyenne*

Pour faire simple, la `moyenne` définit le milieu de la courbe gaussienne, ce qui signifie qu'elle définit la quantité d'éléments la plus probable qui apparaîtra dans un coffre. Essentiellement, si vous voulez que vos coffres contiennent généralement 5 éléments, définissez votre moyenne sur 5.

*Écart type*

Imaginez que le nombre moyen d'éléments dans un coffre est de 5. L'`écart type` permet de déterminer dans quelle mesure ce nombre peut varier d'un coffre à l'autre.

Petit `écart type` (par exemple, 1) : Cela signifie que la plupart des coffres auront des éléments très proches de la moyenne, comme 4, 5 ou 6 éléments. C'est une expérience plus prévisible. Par exemple, si un coffre a un écart type de 1, vous pouvez vous attendre à ce que presque tous les coffres contiennent entre 4 et 6 éléments.

`Écart type` moyen (par exemple, 2) : Ici, il y a plus de variété. Les coffres peuvent contenir de 3 à 7 éléments. Bien que 5 éléments soient toujours courants, il n'est pas rare de trouver des coffres avec un peu plus ou moins. Ainsi, avec un écart type de 2, vous pourriez occasionnellement trouver un coffre avec seulement 3 éléments, ou si vous êtes chanceux, un avec 7 éléments.

Grand `écart type` (par exemple, 3 ou plus) : Maintenant, les choses deviennent vraiment surprenantes ! Les coffres pourraient contenir aussi peu que 2 éléments ou jusqu'à 8 éléments ou plus. Cela signifie que vous pourriez trouver un coffre avec seulement quelques éléments, mais il y a aussi une chance de trouver un coffre rempli de goodies. Par exemple, avec un écart type de 3, un coffre pourrait contenir entre 2 et 8 éléments, faisant de chaque ouverture de coffre un pari passionnant.

***La moyenne par défaut est de 4 et l'écart type par défaut est de 3.***

</details>

***

# Format spécial

Les fichiers de trésor ont un format spécial qui ressemble à ceci :

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*Remarque : il s'agit d'une version très simplifiée du fichier, le fichier réel comporte 2599 lignes car il couvre beaucoup plus de butin et tous les enchantements possibles.*

# isEnabled

| Clé | Valeurs | Valeur par défaut |
|-|:-------------------:|-|
| `isEnabled` | [Booléen](#boolean) | `true` |

***

# mean

| Clé | Valeurs | Valeur par défaut |
|--------|:-----------------:|---------|
| `mean` | [Nombre décimal](#double) | `4`     |

Définit la `moyenne`. Lisez les détails à ce sujet [ici](#what-is-a-treasure-file).

***

# standardDeviation

| Clé | Valeurs | Valeur par défaut |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Nombre décimal](#double) | `3`     |

Définit l'`écart type`. Lisez les détails à ce sujet [ici](#what-is-a-treasure-file).

***

# items

C'est là que ça devient délicat, car de nombreuses options peuvent être définies par les administrateurs. Zoomons sur l'exemple de fichier de configuration précédent.

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

Ici, vous pouvez voir que sous la clé de configuration `items`, nous avons une carte avec `common` et `rare`. Ce sont des `raretés` !
***

## raretés

Les raretés n'ont pas de nom fixe. Vous pouvez les ajouter ou les supprimer, et les personnaliser autant que vous le souhaitez, tant que vous utilisez le même format.

Notez que ce qui rend ces tables de rareté plus ou moins rares est le `poids` de la table de butin !

Par défaut :
- `common` a un `poids` par défaut de 60
- `rare` a un `poids` par défaut de 30
- `epic` a un `poids` par défaut de 10

Ce qui rend les objets communs 6 fois plus susceptibles d'apparaître que les objets épiques. Vous pouvez en savoir plus sur les `poids` [ici](#what-is-a-treasure-file) !

Outre le poids, chaque table de rareté a sa propre liste d'`éléments`.

***

### Éléments de rareté

Les éléments de rareté sont une [liste de cartes]($language$/global/configuration_file_guide.md&section=map_list) qui répertorie tous les éléments que la table de rareté contient.

Ces éléments ont les paramètres suivants :

| Clé | Valeurs | Valeur par défaut |
|------------------------------------|:---------------------------:|----------|
| `amount` | min-max [Entier](#integer) | variable |
| `material` | [Matériau](#Material) | variable |
| `procedurallyGenerateEnchantments` | [Booléen](#boolean) | variable |
| `weight` | [Nombre décimal](#double) | variable |

***

#### amount

***

Définit la quantité à faire apparaître. Ceci est exprimé sous forme de plage comme suit `amount: MIN-MAX`. Par exemple, pour faire apparaître entre 1 et 5
éléments : `amount: 1-5`.

#### material

Définit le matériau en utilisant les [noms de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) de
l'élément à faire apparaître potentiellement.

***

##### Cas spécial - sérialisé

Lors de l'utilisation de la commande lootify, au lieu d'un matériau, lootify fournira un paramètre `sérialisé`. Ceci est généré automatiquement par le plugin et ne doit pas être généré manuellement. Il est dans un format illisible par l'homme.

***

#### weight

Définit le poids pour la probabilité pondérée. Plus d'informations à ce sujet [ici](#what-is-a-treasure-file).

***

#### procedurallyGenerateItems

Définit si l'élément doit être généré de manière procédurale en fonction des paramètres de configuration si `procedurallyGeneratedItemSettings`. Notez qu'en fonction des paramètres, cela peut entraîner la génération d'un élément sans enchantements.


# procedurallyGeneratedItemSettings

Jetons un autre coup d'œil à notre exemple de fichier de configuration :

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

Comme vous pouvez le voir, ce fichier répertorie les types de matériaux, suivis des enchantements, puis des niveaux minimum et maximum et d'une probabilité.

Notez que vous ne pouvez pas ajouter de matériaux personnalisés provenant d'autres plugins dans ces paramètres, et vous ne pouvez probablement pas ajouter d'enchantements personnalisés provenant d'autres plugins à moins que leur auteur ne dise explicitement qu'ils ont rendu leur système compatible.

En ce qui concerne les paramètres d'enchantement :

| Clé | Valeurs | Valeur par défaut |
|------------|:-------------------:|----------|
| `minLevel` | [Entier](#integer) | variable |
| `maxLevel` | [Entier](#integer) | variable |
| `chance` | [Probabilité](#chance) | variable |

***

## minLevel

Définit le niveau d'enchantement minimum.

***

## maxLevel

Définit le niveau d'enchantement maximum.

***

## chance

Définit la probabilité que l'enchantement se produise. Il ne s'agit pas d'une probabilité pondérée, mais d'un simple lancer de dé.
