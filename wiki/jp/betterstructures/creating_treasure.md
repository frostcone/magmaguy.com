```markdown
# Qu'est-ce qu'un fichier de trésor ?

Les fichiers de trésor déterminent les tables de butin des coffres BetterStructures. Ils sont généralement attribués
aux [générateurs]($language$/betterstructures/creating_generators.md&section=treasurefilename), mais ils peuvent également être définis au niveau d'une [configuration de construction individuelle]($language$/betterstructures/creating_structures.md&section=treasurefile).

Ces tables de butin sont assez puissantes, mais nécessitent également des connaissances de base en statistiques pour être comprises.

<details>
<summary>
Lisez ces concepts ici, le reste de la page suppose que vous les comprenez !
</summary>

***Probabilité pondérée***

BetterStructures et EliteMobs utilisent fréquemment le concept de probabilité pondérée. Cela permet de résoudre un problème simple : comment définir la probabilité de choisir un élément dans une liste d'éléments potentiellement infinie ?

La probabilité pondérée résout ce problème en attribuant un poids à chaque élément. Si vous avez 100 éléments et que chacun a un poids de 1, alors ils ont tous la même probabilité - 1 % - d'être choisi. Si vous ajoutez un élément supplémentaire, ce qui porte le nombre total d'éléments à 101, et que vous donnez à ce dernier élément une probabilité de 1, tous les éléments ont toujours la même probabilité - ~0,99 % - d'être choisi. Si vous donnez au dernier élément un poids de 2, la probabilité qu'il soit choisi augmente - le nouveau poids total est de 102, le dernier élément a un poids de 2 et 100/102 = ~0,98 %, donc 0,98 %+0,98 % = 1,96 % de chances d'être choisi. Si vous donnez au dernier élément un poids de 100, le nouveau poids est de 200, et comme la moitié de ce poids est votre nouvel élément, votre nouvel élément a 50 % de chances d'être choisi.

Comme vous pouvez le constater, c'est un bon système à utiliser lorsque vous avez des listes de centaines d'éléments à randomiser.

***Distribution gaussienne***

Une distribution gaussienne est une fonction mathématique en forme de cloche.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Vous vous demandez peut-être en quoi cela est pertinent pour le système de butin. Une des choses que BetterStructures doit décider lors de la définition du butin dans les coffres est simplement le nombre d'éléments qui apparaissent dans ces coffres. Le nombre doit être cohérent autour d'un nombre spécifique, mais idéalement pas si prévisible que l'ouverture d'un coffre devienne moins excitante.

Pour obtenir cet effet semi-aléatoire, la distribution gaussienne est utilisée pour randomiser le *nombre* d'éléments choisis. Une fois que ce nombre est choisi, la *probabilité pondérée* sélectionne un élément dans la table de rareté au hasard en tenant compte des poids.

Alors comment fonctionne la distribution gaussienne ?

Heureusement, vous n'avez pas à vous soucier de la manière dont les mathématiques qui la sous-tendent fonctionnent, et vous pouvez plutôt vous concentrer sur les deux paramètres qui la modifient : la moyenne et l'écart type.

*Moyenne*

Pour le dire simplement, `mean` définit le milieu de la courbe gaussienne, ce qui signifie qu'elle définit le nombre d'éléments le plus probable qui apparaîtra dans un coffre. Essentiellement, si vous souhaitez que vos coffres contiennent généralement 5 éléments, définissez votre moyenne sur 5.

*Écart type*

Imaginez que le nombre moyen d'éléments dans un coffre est de 5. L'`écart type` aide à décider combien ce nombre peut changer d'un coffre à l'autre.

Petit `écart type` (par exemple, 1) : Cela signifie que la plupart des coffres contiendront des éléments très proches de la moyenne, comme 4, 5 ou 6 éléments. C'est une expérience plus prévisible. Par exemple, si un coffre a un écart type de 1, vous pouvez vous attendre à ce que presque tous les coffres contiennent entre 4 et 6 éléments.

Moyen `écart type` (par exemple, 2) : Ici, il y a plus de variété. Les coffres peuvent contenir de 3 à 7 éléments. Bien que 5 éléments soient encore courants, il n'est pas rare de trouver des coffres avec un peu plus ou moins. Donc, avec un écart type de 2, vous pouvez trouver occasionnellement un coffre avec seulement 3 éléments, ou si vous avez de la chance, un coffre avec 7 éléments.

Grand `écart type` (par exemple, 3 ou plus) : Maintenant, les choses deviennent vraiment surprenantes ! Les coffres peuvent contenir aussi peu que 2 éléments ou autant que 8 éléments ou plus. Cela signifie que vous pouvez trouver un coffre avec seulement quelques éléments, mais il y a aussi une chance de trouver un coffre rempli de goodies. Par exemple, avec un écart type de 3, un coffre peut contenir de 2 à 8 éléments, ce qui fait de chaque ouverture de coffre un pari excitant.

***La moyenne par défaut est de 4 et l'écart type par défaut est de 3.***

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

*Remarque : Il s'agit d'une version très réduite du fichier. Le fichier réel compte 2 599 lignes, car il couvre beaucoup plus de butin et tous les enchantements possibles.*

# isEnabled

| Clé |       Valeurs        | Par défaut |
|-|:-------------------:|-|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| Clé    |      Valeurs       | Par défaut |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Définissez la `mean`. Lisez les détails à ce sujet [ici](#what-is-a-treasure-file).

***

# standardDeviation

| Clé                 |      Valeurs       | Par défaut |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Définissez la `standardDeviation`. Lisez les détails à ce sujet [ici](#what-is-a-treasure-file).

***

# items

C'est là que les choses se compliquent, car de nombreuses options peuvent être définies par les administrateurs. Regardons de plus près l'exemple de fichier de configuration donné plus haut.

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

Ici, vous pouvez voir que sous la clé de configuration `items`, nous avons une map avec `common` et `rare`. Ce sont des `raretés` !
***

## Raretés

Les raretés n'ont pas de nom fixe. Vous pouvez les ajouter, les supprimer et les personnaliser autant que vous le souhaitez, tant que vous utilisez le même format.

Notez que ce qui rend ces tables de rareté plus ou moins rares, c'est le `poids` de la table de butin !

Par défaut :

- `common` a un `poids` par défaut de 60
- `rare` a un `poids` par défaut de 30
- `epic` a un `poids` par défaut de 10

Ce qui rend les objets communs 6x plus susceptibles de tomber que les objets épiques. Vous pouvez en savoir plus sur les [`poids` ici](#what-is-a-treasure-file) !

En plus du poids, chaque table de rareté a sa propre liste d'`items`.

***

### Éléments de rareté

Les éléments de rareté sont une [liste de maps]($language$/global/configuration_file_guide.md&section=map_list) qui liste tous les éléments que la table de rareté contient.

Ces éléments ont les paramètres suivants :

| Clé                                |           Valeurs            | Par défaut  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Définit le nombre d'éléments à lâcher. Cela est exprimé sous la forme d'une plage comme suit : `amount: MIN-MAX`. Par exemple, pour lâcher entre 1 et 5 éléments : `amount: 1-5`.

#### material

Définit le matériau en utilisant les [noms de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) de l'élément à lâcher potentiellement.

***

##### Cas spécial - sérialisé

Lors de l'utilisation de la commande lootify, au lieu d'un matériau, lootify fournira un paramètre `serialized`. Celui-ci est généré automatiquement par le plugin et ne doit pas être généré manuellement. Il est dans un format qui n'est pas lisible par l'homme.

***

#### weight

Définit le poids pour la probabilité pondérée. Plus d'informations à ce sujet [ici](#what-is-a-treasure-file).

***

#### procedurallyGenerateItems

Définit si l'élément doit être généré de manière procédurale en fonction des paramètres de configuration de `procedurallyGeneratedItemSettings`. Notez qu'en fonction des paramètres, cela peut entraîner la génération d'un élément sans enchantements, quoi qu'il arrive.


# procedurallyGeneratedItemSettings

Regardons de plus près notre exemple de fichier de configuration :

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

Comme vous pouvez le constater, ce fichier liste les types de matériaux, suivis des enchantements, puis des niveaux minimum et maximum, ainsi qu'une probabilité.

Notez que vous ne pouvez pas ajouter de matériaux personnalisés d'autres plugins dans ces paramètres, et vous n'êtes probablement pas en mesure d'ajouter des enchantements personnalisés d'autres plugins, sauf si leur auteur indique explicitement qu'ils ont rendu leur système compatible.

Quant aux paramètres d'enchantement :

| Clé        |       Valeurs        | Par défaut  |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variable |
| `maxLevel` | [Integer](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

Définit le niveau d'enchantement minimal.

***

## maxLevel

Définit le niveau d'enchantement maximal.

***

## chance

Définit la probabilité que l'enchantement se produise. Ce n'est pas la probabilité pondérée, mais un simple lancer de dé.

```

