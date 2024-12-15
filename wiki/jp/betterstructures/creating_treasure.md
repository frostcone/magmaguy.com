# Qu'est-ce qu'un fichier de trésor ?

Les fichiers de trésor sont ce qui détermine les tables de butin pour les coffres de BetterStructures. Ils sont généralement attribués
aux [générateurs]($language$/betterstructures/creating_generators.md&section=treasurefilename), mais ils peuvent également être définis au niveau d'une [configuration de construction individuelle]($language$/betterstructures/creating_structures.md&section=treasurefile).

Ces tables de butin sont assez puissantes, mais nécessitent également la connaissance de quelques concepts statistiques de base pour les comprendre.

<details>
<summary>
Lisez ces concepts ici, le reste de la page suppose que vous les comprenez !
</summary>

***Probabilité pondérée***

BetterStructures et EliteMobs utilisent fréquemment le concept de probabilité pondérée. Il s'agit de résoudre un problème simple : comment pouvez-vous définir la probabilité de choisir un élément dans une liste d'éléments potentiellement infinie ?

La probabilité pondérée résout ce problème en attribuant un poids à chaque élément. Si vous avez 100 éléments et que chacun a un poids de 1, ils ont tous une chance égale - 1 % - d'être choisis. Si vous ajoutez un élément de plus, portant le total à 101 éléments, et que vous donnez à ce dernier élément une chance de 1, tous les éléments ont toujours la même chance - ~0,99 % - d'être choisis. Si vous donnez au dernier élément un poids de 2, la chance qu'il soit choisi augmente : le nouveau poids total est de 102, le dernier élément a un poids de 2 et 100/102 = ~0,98 %, donc 0,98 %+ 0,98 % = 1,96 % de chances d'être choisi. Si vous donnez au dernier élément un poids de 100, le nouveau poids est de 200 et, comme la moitié de ce poids est votre nouvel élément, votre nouvel élément a 50 % de chances d'être choisi.

Comme vous pouvez le voir, ceci est utile à utiliser lorsque vous pourriez avoir des listes de centaines de choses à choisir au hasard.

***Distribution gaussienne***

Une distribution gaussienne est une fonction mathématique en forme de cloche.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Vous vous demandez peut-être en quoi cela est pertinent pour le système de butin. L'une des choses que BetterStructures doit décider lors de la configuration du butin dans les coffres est la quantité de butin qui apparaît dans ces coffres. La quantité doit être régulièrement autour d'un nombre spécifique, mais idéalement pas si prévisible qu'ouvrir un coffre pourrait devenir moins excitant.

Pour obtenir cet effet semi-aléatoire, la distribution gaussienne est utilisée pour randomiser *le nombre* d'objets sélectionnés. Une fois que cette quantité est choisie, la *probabilité pondérée* choisit un élément dans la table de rareté au hasard et en tenant compte des poids.

Alors, comment fonctionne la distribution gaussienne ?

Heureusement, vous n'avez pas à vous soucier du fonctionnement des mathématiques sous-jacentes, et vous pouvez vous concentrer sur les deux paramètres qui la modifient : la moyenne et l'écart type.

*Moyenne*

Pour faire simple, `mean` définit le milieu de la courbe gaussienne, ce qui signifie qu'il définit la quantité d'objets la plus probable qui apparaîtra dans un coffre. Essentiellement, si vous voulez que vos coffres aient habituellement 5 objets, définissez votre moyenne sur 5.

*Écart type*

Imaginez que le nombre moyen d'objets dans un coffre soit de 5. L'`standard deviation` permet de décider de combien ce nombre peut changer d'un coffre à l'autre.

`Écart type` faible (p. ex., 1) : Cela signifie que la plupart des coffres auront des objets très proches de la moyenne, comme 4, 5 ou 6 objets. C'est une expérience plus prévisible. Par exemple, si un coffre a un écart type de 1, vous pouvez vous attendre à ce que presque tous les coffres aient entre 4 et 6 objets.

`Écart type` moyen (p. ex., 2) : Ici, il y a plus de variété. Les coffres peuvent contenir de 3 à 7 objets. Bien que 5 objets soient toujours courants, il n'est pas rare de trouver des coffres avec un peu plus ou un peu moins d'objets. Donc, avec un écart type de 2, vous pourriez occasionnellement trouver un coffre avec seulement 3 objets, ou si vous avez de la chance, un coffre avec 7 objets.

`Écart type` élevé (p. ex., 3 ou plus) : Maintenant, les choses deviennent vraiment surprenantes ! Les coffres pourraient avoir aussi peu que 2 objets ou jusqu'à 8 ou plus. Cela signifie que vous pourriez trouver un coffre avec seulement quelques objets, mais il y a aussi une chance de trouver un coffre rempli de friandises. Par exemple, avec un écart type de 3, un coffre pourrait avoir entre 2 et 8 objets, ce qui fait de chaque ouverture de coffre un pari passionnant.

***La moyenne par défaut est de 4 et l'écart type par défaut est de 3.***

</details>

***

# Format spécial

Les fichiers de trésor ont un format spécial qui ressemble à ceci :

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

*Remarque : il s'agit d'une version très réduite du fichier, le fichier réel est de 2 599 lignes, car il couvre beaucoup plus de butin et tous les enchantements possibles.*

# isEnabled

| Clé |       Valeurs        | Par défaut |
|---|:-------------------:|---|
| `isEnabled` | [Booléen](#booleano) | `true` |

***

# mean

| Clé    |      Valeurs       | Par défaut |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Définissez la `moyenne`. Lisez les détails à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Clé                 |      Valeurs       | Par défaut |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Définissez l'`standardDeviation`. Lisez les détails à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

C'est là que ça devient délicat, car de nombreuses options peuvent être définies par les administrateurs. Examinons de plus près l'exemple de fichier de configuration précédent.

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

Ici, vous pouvez voir que sous la clé de configuration `items`, nous avons une carte avec `common` et `rare`. Ce sont des `raretés` !
***

## raretés

Les raretés n'ont pas de nom fixe. Vous pouvez les ajouter ou les supprimer et les personnaliser autant que vous le souhaitez, à condition d'utiliser le même format.

Notez que ce qui rend ces tableaux de rareté plus ou moins rares, c'est le `weight` de la table de butin !

Par défaut :
- `common` a un `weight` par défaut de 60
- `rare` a un `weight` par défaut de 30
- `epic` a un `weight` par défaut de 10

Ce qui fait que les objets courants ont 6 fois plus de chances de tomber que les objets épiques. Vous pouvez en savoir plus sur les `weight`s [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?) !

En dehors du poids, chaque table de rareté a sa propre liste d'`items`.

***

### items de rareté

Les éléments de rareté sont une [liste de cartes](https://magmaguy.com/wiki.html#lang=fr&article=global+configuration_file_guide.md&section=map-list) qui répertorie tous les éléments que possède la table de rareté.

Ces éléments ont les paramètres suivants :

| Clé                                |           Valeurs            | Par défaut  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Entier](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Booléen](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Définit la quantité à laisser tomber. Ceci est exprimé sous la forme d'une plage comme suit `amount: MIN-MAX`. Par exemple, pour faire tomber entre 1 et 5
objets : `amount: 1-5`.

#### material

Définit le matériau à l'aide des [noms de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) de
l'objet à potentiellement laisser tomber.

***

##### Cas spécial - sérialisé

Lors de l'utilisation de la commande lootify, au lieu d'un matériau, lootify fournira un paramètre `serialized`. Ceci est généré automatiquement par le plugin et ne doit pas être généré manuellement. Il est dans un format qui n'est pas lisible par l'homme.

***

#### weight

Définit le poids pour la probabilité pondérée. Plus d'informations à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Définit si l'objet doit être généré de manière procédurale en fonction des paramètres de configuration si `procedurallyGeneratedItemSettings`. Notez qu'en fonction des paramètres, cela pourrait entraîner la génération d'un objet sans enchantements malgré tout.

# procedurallyGeneratedItemSettings

Jetons un autre coup d'œil à notre exemple de fichier de configuration :

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

Comme vous pouvez le voir, ce fichier répertorie les types de matériaux, suivis des enchantements, puis suivis des niveaux minimum et maximum et d'une chance.

Notez que vous ne pouvez pas ajouter de matériaux personnalisés provenant d'autres plugins dans ces paramètres, et vous ne pouvez probablement pas ajouter d'enchantements personnalisés provenant d'autres plugins, sauf si leur auteur indique explicitement qu'il a rendu son système compatible.

En ce qui concerne les paramètres d'enchantement :

| Clé        |       Valeurs        | Par défaut  |
|------------|:-------------------:|----------|
| `minLevel` | [Entier](#integer) | variable |
| `maxLevel` | [Entier](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

Définit le niveau d'enchantement minimum.

***

## maxLevel

Définit le niveau d'enchantement maximum.

***

## chance

Définit la probabilité que l'enchantement se produise. Ceci n'utilise pas la probabilité pondérée, juste un jet de dés normal.
