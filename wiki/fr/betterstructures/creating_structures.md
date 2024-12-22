# Création de contenu

***

## Création de la structure

Il n'y a aucune restriction quant à ce que vous pouvez construire pour BetterStructures, bien qu'il soit recommandé de
maintenir la taille des structures sous les 100x100x100 blocs pour l'adaptation générale au monde et des raisons de
performances. Cela étant dit, il peut facilement gérer des structures beaucoup plus grandes.

***

### Blocs spéciaux

BetterStructures a deux blocs spéciaux: les barrières et le bedrock. Tout autre bloc que WorldEdit / FAWE peut coller
sera collé normalement, mais les barrières et les blocs de bedrock sont l'exception. Au lieu d'être collés, ces blocs
sont remplacés par les comportements personnalisés suivants:

***

#### Barrière

Les blocs de barrière font en sorte que le plugin ne place aucun bloc à cet endroit. Cela signifie que le bloc qui était
à l'origine là lors de la génération normale du monde restera là.

Les constructeurs peuvent utiliser cela pour arrondir les bords d'un collage, le rendant plus naturel, ou pour mouler
des murs sur une grotte potentielle, parmi d'autres astuces.

***

#### Bedrock

Les blocs de bedrock font en sorte que le plugin garantisse qu'il y a un bloc solide à cet emplacement. Cela signifie
que si un bloc solide est déjà présent dans la génération du monde par défaut, ce bloc ne sera pas modifié ; cependant,
si le bloc est de l'air ou du liquide, il sera remplacé par un bloc solide du [piédestal](#pedestalmaterial).

Les constructeurs peuvent utiliser cela pour créer des sols avec des fonctionnalités telles que le sol pour les rails de
chariot de mine ou garantir qu'un sol existe sans remplacer les blocs solides potentiellement déjà existants à cet
endroit dans le monde, ce qui rend les constructions plus organiques.

***

### Panneaux d'apparition

BetterStructures peut utiliser des panneaux avec un texte spécifique pour faire apparaître des créatures et même des
boss d'EliteMobs et MythicMobs à des endroits spécifiques de la construction.

***

##### Faire apparaître des créatures vanille

Si vous prenez un panneau normal et que vous le placez quelque part, assurez-vous que la première ligne
indique `[spawn]` et que la deuxième ligne contient
le [nom du type d'entité suivant l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html),
vous ferez apparaître une entité persistante à cet endroit du type que vous avez spécifié.

Par exemple, si vous avez un panneau qui dit `[spawn]` sur la première ligne et `ZOMBIE` sur la deuxième ligne, vous
ferez apparaître un zombie à cet endroit lorsque la construction sera placée. Cela peut également être utilisé pour des
entités non vivantes telles que des présentoirs d'armure ou des cristaux d'Ender.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Faire apparaître des Elite Mobs (plugin de boss recommandé)

BetterStructures dispose également d'une intégration avancée d'EliteMobs, qui lui permet de créer des arènes de boss
basées sur des constructions et des panneaux d'apparition.

Si vous prenez un panneau normal et que vous le placez quelque part, en mettant [elitemobs] sur la première ligne, vous
pouvez utiliser toutes les autres lignes pour indiquer quel fichier de boss utiliser.

Par exemple, si vous mettez `[elitemobs]` sur la première ligne, puis `test_boss.yml` sur la deuxième ligne, vous ferez
apparaître le boss test. Si vous avez un nom de fichier très long tel que boss_avec_un_nom_de_fichier_tres_long.yml,
vous pouvez le diviser en plusieurs lignes, donc mettez la ligne 2 `boss_avec_un_nom_de_` et ensuite la ligne
3 `fichier_tres_long.yml` et cela fonctionnera.

Pour rappel, par défaut, les arènes de combat seront protégées jusqu'à ce que les joueurs tuent tous les boss de la
construction si votre serveur utilise WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Faire apparaître des Mythic Mobs

BetterStructures dispose également d'une intégration simple de MythicMobs, qui lui permet de faire apparaître une
créature de MythicMobs dans la construction. Sur la première ligne d'un panneau normal, écrivez `[mythicmobs]`, puis sur
la deuxième ligne, utilisez l'identifiant de créature. Vous pouvez utiliser un nombre sur la troisième ligne pour
définir le niveau de la créature.

<div class="minecraft-sign">
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schémas

Les schémas sont des fichiers générés par WorldEdit ou FastAsyncWorldEdit qui contiennent les blocs de la construction
que BetterStructures utilisera.

Des instructions détaillées sur la manière de créer un schéma ne sont pas incluses ici, car elles sont détaillées de
manière approfondie dans les documentations de WorldEdit et FastAsyncWorldEdit, mais cela se fait généralement en:

1) Choisir un coin de la construction et utiliser la commande `//pos1`
2) Choisir le coin diagonalement opposé et utiliser la commande `//pos2`
3) Utiliser la commande `//copy`
4) Utiliser la commande `/schem save <nom_du_schéma>` où `<nom_du_schéma>` est le nom de fichier que vous voulez
   utiliser pour votre schéma.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="image de documentation worldedit de leurs docs">

*Assurez-vous d'exécuter la commande `//pos1` sur le point 1 et `//pos2` sur le point 2!*

***

#### Point d'ancrage

Les points d'ancrage sont l'endroit où vous exécutez la commande `//copy` pour le schéma. Lorsque vous collez simplement
un schéma, c'est là que vous vous tenez par rapport à la construction.

Les points d'ancrage sont importants pour que les schémas fonctionnent correctement.

* Pour les _constructions de surface_, il est recommandé de se tenir au point le plus bas du sol lors de la copie de la
  construction.
* Pour les _constructions souterraines_, il est recommandé de se tenir au-dessus de la construction.
* Pour les _constructions liquides_, il est recommandé de se tenir au-dessus de l'eau.
* Pour les _constructions aériennes_, il est recommandé de se tenir au-dessus de la construction.

**Veuillez noter que vous devez toujours être très près ou directement au-dessus des constructions lors de la copie -
plus vous êtes loin, plus il y aura de latence lorsque la construction devra être collée.**

***

# Configurations de schéma

Chaque fichier de schéma a une configuration de schéma. Si un fichier de schéma vient d'être ajouté au serveur, la
configuration sera générée après un redémarrage ou après un `/betterstructures reload`.

Ces configurations vous permettent de définir les paramètres suivants pour le collage du schéma:

***

## isEnabled

Détermine si le schéma est activé. S'il est désactivé, il ne sera placé nulle part.

***

## weight

Le poids définit le poids du schéma en termes de probabilité d'être choisi.

La valeur par défaut est `1.0`. Si vous donnez à une construction un poids de `2.0`, elle aura 2x plus de chances d'être
sélectionnée que les autres constructions. Si vous mettez `0.5`, elle aura la moitié des chances d'être choisie.

_**Remarque:** N'oubliez pas que les probabilités qu'une construction spécifique soit choisie changent considérablement
en fonction du nombre total de constructions en compétition pour l'emplacement qui recevra une structure!_

***

## pedestalMaterial

**Important: champ facultatif!**

Le matériau du piédestal définit le type de matériau des blocs de piédestal à l'aide
des [noms de matériau de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - utilisez-les
ou cela ne fonctionnera pas!

Les piédestaux sont les blocs qui sont placés sous les bâtiments de surface et souterrains pour combler les espaces
vides et améliorer l'ajustement d'un bâtiment avec le monde. Ce sont également les mêmes blocs qui remplacent les blocs
de bedrock dans le schéma.

Lorsque rien n'est défini dans la configuration, les blocs situés sous l'emplacement du collage sont analysés et le
meilleur ajustement est sélectionné comme matériau pour un aspect mieux intégré.

***

## generatorConfigFilename

Cette option définit le nom du fichier de configuration, par nom de fichier, que le schéma utilisera. Cela nécessite le
nom de fichier complet, y compris l'extension `.yml` à la fin. Par
exemple, `generatorConfigFilename: generator_surface_global.yml` serait l'option correcte si vous voulez utiliser le
générateur défini dans `generator_surface_global.yml` que vous pouvez trouver dans le dossier de configuration des
générateurs.

***

## treasureFile

Définit le [fichier de trésor]($language$/betterstructures/creating_treasure.md) que cette structure utilisera, en
remplaçant le fichier de trésor défini par le [générateur]($language$/betterstructures/creating_generators.md) de la
structure. Ceci n'est généralement pas recommandé, sauf s'il s'agit d'une construction très spéciale. Il est
généralement préférable de modifier ou de créer un générateur à cette fin.

# Personnalisation du contenu

Tout ce qui est distribué dans BetterStructures est modifiable. Vous pouvez modifier tous les fichiers de schémas et les
paramètres du générateur à votre guise.

Le guide de création de contenu ci-dessus est également un guide qui peut vous aider à modifier le contenu existant.
