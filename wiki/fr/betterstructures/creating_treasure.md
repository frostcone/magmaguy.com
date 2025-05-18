Voici la traduction en français, en conservant le formatage markdown :

# Qu'est-ce qu'un fichier de trésor ?

Les fichiers de trésor sont ce qui détermine les tables de butin pour les coffres de BetterStructures. Ils sont généralement assignés
aux [générateurs]($language$/betterstructures/creating_generators.md&section=treasurefilename) mais ils peuvent aussi être définis au
niveau d'une [configuration de construction individuelle]($language$/betterstructures/creating_structures.md&section=treasurefile).

Ces tables de butin sont assez puissantes, mais nécessitent également la connaissance de quelques concepts statistiques de base pour être comprises.

<details>
<summary>
Lisez ces concepts ici, le reste de la page suppose que vous les comprenez !
</summary>

***Probabilité pondérée***

BetterStructures et EliteMobs utilisent fréquemment le concept de probabilité pondérée. Cela permet de résoudre un problème simple : comment définir la chance de choisir un objet parmi une liste d'objets potentiellement infinie ?

La probabilité pondérée résout ce problème en attribuant un poids à chaque objet. Si vous avez 100 objets et que chacun a un poids de 1, alors ils ont tous une chance égale - 1% - d'être choisis. Si vous ajoutez un objet de plus, portant le total à 101 objets, et que vous donnez à ce dernier objet une chance de 1, tous les objets ont toujours la même chance - ~0,99% - d'être choisis. Si vous donnez au dernier objet un poids de 2, la chance qu'il soit choisi augmente - le nouveau poids total est de 102, le dernier élément a un poids de 2 et 100/102 = ~0,98%, donc 0,98%+0,98% = 1,96% de chance d'être choisi. Si vous donnez au dernier objet un poids de 100, le nouveau poids est de 200, et comme la moitié de ce poids est votre nouvel objet, votre nouvel objet a 50% de chance d'être choisi.

Comme vous pouvez le voir, c'est utile lorsque vous pourriez avoir des listes de centaines de choses à randomiser.

***Distribution gaussienne***

Une distribution gaussienne est une fonction mathématique en forme de cloche.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

Vous vous demandez peut-être en quoi cela est pertinent pour le système de butin. Une chose que BetterStructures doit décider lors de la définition du butin dans les coffres est la quantité de butin qui apparaît dans ces coffres. La quantité doit être constamment autour d'un nombre spécifique, mais idéalement pas si prévisible que l'ouverture d'un coffre pourrait devenir moins excitante.

Pour obtenir cet effet semi-aléatoire, la distribution gaussienne est utilisée pour randomiser *combien* d'objets sont choisis. Une fois cette quantité choisie, la *probabilité pondérée* choisit un élément de la table de rareté au hasard en tenant compte des poids.

Alors, comment fonctionne la distribution gaussienne ?

Heureusement, vous n'avez pas à vous sou soucier du fonctionnement mathématique derrière elle, et pouvez plutôt vous concentrer sur les deux paramètres qui la modifient : la moyenne et l'écart type.

*Moyenne*

Pour faire simple, `mean` (moyenne) définit le centre de la courbe gaussienne, ce qui signifie qu'il définit la quantité d'objets la plus probable qui apparaîtra dans un coffre. Essentiellement, si vous voulez que vos coffres contiennent généralement 5 objets, définissez votre moyenne à 5.

*Écart type*

Imaginez que le nombre moyen d'objets dans un coffre est de 5. L'`standard deviation` (écart type) aide à décider à quel point ce nombre peut varier d'un coffre à l'autre.

Petit `Standard Deviation` (par exemple, 1) : Cela signifie que la plupart des coffres auront un nombre d'objets très proche de la moyenne, comme 4, 5 ou 6 objets. C'est une expérience plus prévisible. Par exemple, si un coffre a un écart type de 1, vous pouvez vous attendre à ce que presque tous les coffres contiennent entre 4 et 6 objets.

Moyen `Standard Deviation` (par exemple, 2) : Ici, il y a plus de variété. Les coffres peuvent contenir de 3 à 7 objets. Bien que 5 objets soient toujours courants, il n'est pas inhabituel de trouver des coffres avec un peu plus ou un peu moins. Ainsi, avec un écart type de 2, vous pourriez occasionnellement trouver un coffre avec seulement 3 objets, ou si vous avez de la chance, un avec 7 objets.

Grand `Standard Deviation` (par exemple, 3 ou plus) : Maintenant, les choses deviennent vraiment surprenantes ! Les coffres pourraient contenir aussi peu que 2 objets ou autant que 8 ou plus. Cela signifie que vous pourriez trouver un coffre avec juste quelques objets, mais il y a aussi une chance de trouver un coffre rempli de bonnes choses. Par exemple, avec un écart type de 3, un coffre pourrait contenir n'importe où entre 2 et 8 objets, faisant de chaque ouverture de coffre un pari excitant.

***La moyenne par défaut est de 4, et l'écart type par défaut est de 3.***

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

*Note : ceci est une version très simplifiée du fichier, le fichier réel fait 2599 lignes car il couvre beaucoup plus de butin et chaque enchantement possible.*

# isEnabled

| Clé         |       Valeurs        | Défaut |
|-|:-------------------:|-|
| `isEnabled` | [Booléen](#boolean) | `true` |

***

# mean

| Clé    |      Valeurs       | Défaut |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Définit la `mean` (moyenne). Lisez les détails à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# standardDeviation

| Clé                 |      Valeurs       | Défaut |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Définit l'`standardDeviation` (écart type). Lisez les détails à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

# items

C'est ici que cela devient délicat, car de nombreuses options peuvent être définies par les administrateurs. Examinons de plus près l'exemple de fichier de configuration précédent.

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

Ici, vous pouvez voir que sous la clé de configuration `items`, nous avons une map avec `common` et `rare`. Ce sont des `rarities` (raretés) !
***

## raretés

Les raretés n'ont pas de nom fixe. Vous pouvez en ajouter ou en supprimer, et les personnaliser autant que vous le souhaitez, tant que vous utilisez le même format.

Notez que ce qui rend ces tables de rareté plus ou moins rares est le `weight` (poids) de la table de butin !

Par défaut :
- `common` a un `weight` par défaut de 60
- `rare` a un `weight` par défaut de 30
- `epic` a un `weight` par défaut de 10

Rendant les objets communs 6 fois plus susceptibles de tomber que les objets épiques. Vous pouvez en savoir plus sur les `weight`s [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?) !

Outre le poids, chaque table de rareté a sa propre liste d'`items` (objets).

***

### objets de rareté

Les objets de rareté sont une [liste de maps](https://magmaguy.com/wiki.html#lang=fr&article=global+configuration_file_guide.md&section=map-list) qui liste tous les objets que la table de rareté contient.

Ces objets ont les paramètres suivants :

| Clé                                |           Valeurs            | Défaut   |
|------------------------------------|:----------------------------:|----------|
| `amount`                           | min-max [Entier](#integer)   | variable |
| `material`                         |    [Matériau](#Material)     | variable |
| `procedurallyGenerateEnchantments` |     [Booléen](#boolean)      | variable |
| `weight`                           |      [Double](#double)       | variable |

***

#### quantité

***

Définit la quantité à déposer. Ceci est exprimé sous forme de plage comme suit `amount: MIN-MAX`. Par exemple, pour déposer entre 1 et 5
objets : `amount: 1-5`.

#### matériau

Définit le matériau en utilisant les [noms de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) de
l'objet potentiellement à déposer.

***

##### Cas spécial - sérialisé

Lors de l'utilisation de la commande lootify, au lieu d'un matériau, lootify fournira un paramètre `serialized`. Ceci est généré automatiquement par le plugin et ne doit pas être généré manuellement. Il est dans un format qui n'est pas lisible par l'homme.

***

#### poids

Définit le poids pour la chance pondérée. Plus d'informations à ce sujet [ici](https://magmaguy.com/wiki.html#lang=fr&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?).

***

#### procedurallyGenerateItems

Définit si l'objet doit être généré de manière procédurale en fonction des paramètres de configuration si `procedurallyGeneratedItemSettings`. Notez qu'en fonction des paramètres, cela pourrait entraîner la génération d'un objet sans enchantements malgré tout.

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

Comme vous pouvez le voir, ce fichier liste les types de matériaux, suivis des enchantements, puis des niveaux minimum et maximum et d'une chance.

Notez que vous ne pouvez pas ajouter de matériaux personnalisés d'autres plugins dans ces paramètres, et vous ne pourrez probablement pas ajouter d'enchantements personnalisés d'autres plugins à moins que leur auteur n'ait explicitement indiqué qu'il a rendu leur système compatible.

Quant aux paramètres d'enchantement :

| Clé        |       Valeurs        | Défaut   |
|------------|:--------------------:|----------|
| `minLevel` | [Entier](#integer)   | variable |
| `maxLevel` | [Entier](#integer)   | variable |
| `chance`   |  [Chance](#chance)   | variable |

***

## minLevel

Définit le niveau d'enchantement minimum.

***

## maxLevel

Définit le niveau d'enchantement maximum.

***

## chance

Définit la chance que l'enchantement se produise. Ceci n'utilise pas la probabilité pondérée, juste un simple lancer de dé.