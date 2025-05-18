Voici la traduction en français, en conservant le formatage markdown :

# Création de contenu

***

## Création de la construction

Il n'y a aucune restriction quant à ce que vous pouvez construire pour BetterStructures, bien qu'il soit recommandé de maintenir la taille des structures en dessous de 100x100x100 blocs pour des raisons d'intégration générale dans le monde et de performance. Cela dit, il peut facilement gérer des structures beaucoup plus grandes.

***

### Blocs spéciaux

BetterStructures possède deux blocs spéciaux : les barrières et le bedrock. Tout autre bloc que WorldEdit peut coller sera collé normalement, mais les blocs de barrière et de bedrock font exception. Au lieu d'être collés, ces blocs sont remplacés par les comportements personnalisés suivants :

***

#### Barrière

Les blocs de barrière empêchent le plugin de placer des blocs à cet endroit. Cela signifie que le bloc qui s'y trouvait à l'origine lors de la génération normale du monde y restera.

Les constructeurs peuvent utiliser cela pour arrondir les bords d'un collage, le rendant plus naturel, ou pour mouler les murs à une grotte potentielle, entre autres astuces.

***

#### Bedrock

Les blocs de bedrock garantissent qu'il y a un bloc solide à cet endroit. Cela signifie que si un bloc solide s'y trouve déjà lors de la génération par défaut du monde, ce bloc ne sera pas modifié ; cependant, si le bloc est de l'air ou un liquide, il sera remplacé par un bloc solide provenant du [socle](#pedestalmaterial).

Les constructeurs peuvent utiliser cela pour créer des sols avec des caractéristiques telles que le sol pour les rails de wagonnets ou garantir qu'un sol existe sans écraser les blocs solides potentiellement déjà existants à cet endroit dans le monde, rendant les constructions plus organiques.

***

### Panneaux de spawn

BetterStructures peut utiliser des panneaux avec un texte spécifique pour faire apparaître des créatures (mobs) et même des boss d'EliteMobs et MythicMobs à des endroits spécifiques de la construction.

***

##### Faire apparaître des créatures vanilla

Si vous prenez un panneau normal et le placez quelque part, puis assurez-vous que la première ligne indique `[spawn]` et que la deuxième ligne contient le [nom du type d'entité selon l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html), vous ferez apparaître une entité persistante à cet endroit du type que vous avez spécifié.

À titre d'exemple, si vous avez un panneau qui indique `[spawn]` sur la première ligne et `ZOMBIE` sur la deuxième ligne, vous ferez apparaître un zombie à cet endroit lorsque la construction sera placée. Cela peut également être utilisé pour des entités non vivantes telles que les supports d'armure ou les cristaux de l'Ender.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Faire apparaître des Elite Mobs (plugin de boss recommandé)

BetterStructures dispose également d'une intégration avancée avec EliteMobs, ce qui lui permet de créer des arènes de boss basées sur les constructions et les panneaux de spawn.

Si vous prenez un panneau normal et le placez quelque part, en mettant [elitemobs] sur la première ligne, vous pouvez ensuite utiliser toutes les autres lignes pour indiquer quel fichier de boss utiliser.

À titre d'exemple, si vous mettez `[elitemobs]` sur la première ligne et ensuite `test_boss.yml` sur la deuxième ligne, vous ferez apparaître le boss de test. Si vous avez un nom de fichier très long comme boss_with_very_long_filename.yml, vous pouvez le diviser en plusieurs lignes, donc mettez sur la ligne 2 `boss_with_very_` et ensuite sur la ligne 3 `long_filename.yml`, et cela fonctionnera.

Pour rappel, par défaut, les arènes de combat seront protégées jusqu'à ce que les joueurs tuent tous les boss de la construction si votre serveur utilise WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

## Schématiques

Les schématiques sont des fichiers générés par WorldEdit ou FastAsyncWorldEdit qui contiennent les blocs de la construction que BetterStructures utilisera.

Des instructions détaillées sur la création d'une schématique ne sont pas incluses ici, car elles sont minutieusement détaillées dans les documentations de WorldEdit et FastAsyncWorldEdit, mais cela se fait généralement en :

1) choisissant un coin de la construction et en utilisant la commande `//pos1`
2) choisissant le coin diagonalement opposé et en utilisant la commande `//pos2`
3) utilisant la commande `//copy`
4) utilisant la commande `/schem save <nom_schematique>` où `<nom_schematique>` est le nom de fichier que vous souhaitez utiliser pour votre schématique.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*Assurez-vous d'exécuter la commande `//pos1` sur le point 1 et `//pos2` sur le point 2 !*

***

#### Point d'ancrage

Les points d'ancrage sont l'endroit où vous exécutez la commande `//copy` pour la schématique. Lorsque vous collez simplement une schématique, c'est là où vous vous trouvez par rapport à la construction.

Il est important de bien définir les points d'ancrage pour que les schématiques fonctionnent correctement.

* Pour les _constructions de surface_, il est recommandé de vous tenir au point le plus bas du sol lors de la copie de la construction.
* Pour les _constructions souterraines_, il est recommandé de vous tenir au-dessus de la construction.
* Pour les _constructions liquides_, il est recommandé de vous tenir au-dessus de l'eau.
* Pour les _constructions aériennes_, il est recommandé de vous tenir au-dessus de la construction.

**Veuillez noter que vous devez toujours être très proche ou directement au-dessus des constructions lors de la copie - plus vous êtes loin, plus le collage sera lent lorsque la construction devra être collée.**

***

# Configurations de schématique

Chaque fichier de schématique possède une configuration de schématique. Si un fichier de schématique vient d'être ajouté au serveur, la configuration sera générée après un redémarrage ou après un `/betterstructures reload`.

Ces configurations vous permettent de définir les paramètres suivants pour le collage de la schématique :

***

## isEnabled

Définit si la schématique est activée. Si elle est désactivée, elle ne sera placée nulle part.

***

## weight

Le poids définit la probabilité qu'une schématique soit choisie.

La valeur par défaut est `1.0`. Si vous donnez à une construction un poids de `2.0`, elle aura 2 fois plus de chances d'être sélectionnée que les autres constructions. Si vous la mettez à `0.5`, elle aura la moitié des chances d'être choisie.

_**Note :** Gardez à l'esprit que les chances qu'une construction spécifique soit choisie changent considérablement en fonction du nombre total de constructions en compétition pour l'emplacement qui recevra une structure !_

***

## pedestalMaterial

**Important : champ optionnel !**

Le matériau du socle définit le type de matériau des blocs de socle en utilisant les [noms de matériaux de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - utilisez-les sinon cela ne fonctionnera pas !

Les socles sont les blocs qui sont placés sous les bâtiments de surface et souterrains pour combler les espaces vides et améliorer l'intégration d'un bâtiment dans le monde. Ce sont également les mêmes blocs qui remplacent les blocs de bedrock dans la schématique.

Lorsque rien n'est défini dans la configuration, les blocs sous l'emplacement du collage sont analysés et le meilleur ajustement est sélectionné comme matériau pour une meilleure intégration visuelle.

***

## generatorConfigFilename

Cette option définit le nom du fichier de configuration, par nom de fichier, que la schématique utilisera. Cela nécessite le nom de fichier complet, y compris l'extension `.yml` à la fin. À titre d'exemple, `generatorConfigFilename: generator_surface_global.yml` serait l'option correcte si vous souhaitez utiliser le générateur défini dans `generator_surface_global.yml` que vous pouvez trouver dans le dossier de configuration des générateurs.

***

## treasureFile

Définit le [fichier de trésor]($language$/betterstructures/creating_treasure.md) que cette structure utilisera, écrasant le fichier de trésor défini par le [générateur]($language$/betterstructures/creating_generators.md) de la structure. Ce n'est généralement pas recommandé, sauf pour une construction très spéciale. Il est généralement préférable de modifier ou de créer un générateur à cette fin.

# Personnalisation du contenu

Tout ce qui est distribué dans BetterStructures est modifiable. Vous pouvez modifier n'importe quel fichier de schématique et paramètre de générateur à votre guise.

Le guide de création de contenu ci-dessus est également un guide qui peut vous aider à modifier le contenu existant.