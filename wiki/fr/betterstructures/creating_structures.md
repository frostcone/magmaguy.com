# Création de contenu

***

## Créer la construction

Il n'y a aucune restriction quant à ce que vous pouvez construire pour BetterStructures, bien qu'il soit recommandé de garder la taille des structures en dessous de 100x100x100 blocs pour des raisons d'adaptation au monde et de performances générales. Cela étant dit, il peut facilement gérer des structures beaucoup plus grandes.

***

### Blocs spéciaux

BetterStructures a deux blocs spéciaux : les barrières et la bedrock. Tout autre bloc que WorldEdit / FAWE peut coller sera collé normalement, mais les barrières et les blocs de bedrock sont l'exception. Au lieu de coller, ces blocs sont remplacés par les comportements personnalisés suivants :

***

#### Barrière

Les blocs de barrière empêchent le plugin de placer des blocs à cet endroit. Cela signifie que le bloc qui était initialement présent lors de la génération normale du monde restera en place.

Les constructeurs peuvent utiliser cela pour arrondir les bords d'un collage, le rendant plus naturel, ou pour mouler les murs à une grotte potentielle, entre autres astuces.

***

#### Bedrock

Les blocs de bedrock permettent au plugin de garantir qu'il y a un bloc solide à cet endroit. Cela signifie que si un bloc solide est déjà présent dans la génération de monde par défaut, ce bloc ne sera pas modifié ; cependant, si le bloc est de l'air ou un liquide, il sera remplacé par un bloc solide provenant du [piédestal](#pedestalmaterial).

Les constructeurs peuvent utiliser cela pour créer des sols avec des caractéristiques telles que le sol pour les rails de wagon de mine ou garantir qu'un sol existe sans remplacer les blocs solides potentiellement déjà existants à cet endroit dans le monde, rendant les constructions plus organiques.

***

### Panneaux d'apparition

BetterStructures peut utiliser des panneaux avec un texte spécifique pour faire apparaître des monstres et même des boss d'EliteMobs et MythicMobs à des endroits spécifiques de la construction.

***

##### Faire apparaître des monstres vanilla

Si vous prenez un panneau normal et que vous le placez quelque part, puis que vous vous assurez que la première ligne indique `[spawn]` et que la deuxième ligne contient le [nom du type d'entité suivant l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) vous ferez apparaître une entité persistante à cet endroit du type que vous avez spécifié.

Par exemple, si vous avez un panneau qui indique `[spawn]` sur la première ligne et `ZOMBIE` sur la deuxième ligne, vous ferez apparaître un zombie à cet endroit lorsque la construction sera placée. Cela peut également être utilisé pour les entités non vivantes telles que les supports d'armure ou les cristaux de l'End.

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Faire apparaître des Elite Mobs (plugin de boss recommandé)

BetterStructures dispose également d'une intégration avancée avec EliteMobs, qui lui permet de créer des arènes de boss basées sur des constructions et des panneaux d'apparition.

Si vous prenez un panneau normal et que vous le placez quelque part, en mettant [elitemobs] sur la première ligne, vous pouvez utiliser toutes les autres lignes pour indiquer quel fichier de boss utiliser.

Par exemple, si vous mettez `[elitemobs]` sur la première ligne puis `test_boss.yml`, sur la deuxième ligne, vous ferez apparaître le boss de test. Si vous avez un nom de fichier très long tel que boss_with_very_long_filename.yml, vous pouvez le diviser en plusieurs lignes, donc mettez en ligne 2 `boss_with_very_` puis en ligne 3 `long_filename.yml` et cela fonctionnera.

Pour rappel, par défaut les arènes de combat seront protégées jusqu'à ce que les joueurs tuent tous les boss de la construction si votre serveur utilise WorldGuard.

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Faire apparaître des Mythic Mobs

BetterStructures dispose également d'une intégration simple avec MythicMobs, qui lui permet de faire apparaître un monstre de MythicMobs dans la construction. Sur la première ligne d'un panneau normal, écrivez `[mythicmobs]`, puis sur la deuxième ligne, utilisez le mob identifié. Vous pouvez utiliser un nombre sur la troisième ligne pour définir le niveau du mob.

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schémas

Les schémas sont des fichiers générés par WorldEdit ou FastAsyncWorldEdit qui contiennent les blocs de la construction que BetterStructures utilisera. 

Des instructions détaillées sur la façon de créer un schéma ne sont pas incluses ici, car elles sont décrites en détail dans les documentations de WorldEdit et FastAsyncWorldEdit, mais cela se fait généralement en :

1) Choisissez un coin de la construction et utilisez la commande `//pos1`.
2) Choisissez le coin opposé en diagonale et utilisez la commande `//pos2`.
3) Utilisez la commande `//copy`.
4) Utilisez la commande `/schem save <nomduschéma>` où `<nomduschéma>` est le nom de fichier que vous voulez utiliser pour votre schéma.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="image de la documentation de worldedit provenant de leurs documents">

*Assurez-vous d'exécuter la commande `//pos1` sur le point 1 et `//pos2` sur le point 2 !*

***

#### Point d'ancrage

Les points d'ancrage sont les endroits où vous exécutez la commande `//copy` pour le schéma. Lorsque vous collez simplement un schéma, il s'agit de l'endroit où vous vous trouvez par rapport à la construction.

Il est important de bien comprendre les points d'ancrage pour que les schémas fonctionnent correctement.

* Pour les _constructions de surface_, il est recommandé de se tenir au point le plus bas du sol lors de la copie de la construction.
* Pour les _constructions souterraines_, il est recommandé de se tenir au sommet de la construction.
* Pour les _constructions liquides_, il est recommandé de se tenir au sommet de l'eau.
* Pour les _constructions aériennes_, il est recommandé de se tenir au sommet de la construction.

**Veuillez noter que vous devez toujours être très proche ou directement au-dessus des constructions lors de la copie - plus vous êtes éloigné, plus le décalage sera important lorsque la construction devra être collée.**

***

# Configurations des schémas

Chaque fichier de schéma possède une configuration de schéma. Si un fichier de schéma vient d'être ajouté au serveur, la configuration sera générée après un redémarrage ou après un `/betterstructures reload`.

Ces configurations vous permettent de définir les paramètres suivants pour le collage de schémas :

***

## isEnabled

Définit si le schéma est activé. S'il est désactivé, il ne sera placé nulle part.

***

## weight

Le poids définit le poids du schéma en termes de probabilité qu'il soit choisi.

La valeur par défaut est `1.0`. Si vous créez une construction avec un poids de `2.0`, elle aura 2 fois plus de chances d'être sélectionnée que les autres constructions. Si vous la définissez sur `0.5`, elle aura moitié moins de chances d'être sélectionnée.

_**Remarque :** Gardez à l'esprit que les chances qu'une construction spécifique soit choisie changent radicalement en fonction du nombre total de constructions en concurrence pour l'emplacement qui recevra une structure !_

***

## pedestalMaterial

**Important : champ facultatif !**

Le matériau du piédestal définit le type de matériau des blocs du piédestal en utilisant les [noms de matériaux de l'API spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - utilisez-les ou cela ne fonctionnera pas !

Les piédestaux sont les blocs qui sont placés sous les constructions de surface et souterraines pour combler les espaces vides et améliorer l'intégration de la construction dans le monde. Ce sont également les mêmes blocs qui remplacent les blocs de bedrock dans le schéma.

Lorsque rien n'est défini dans la configuration, les blocs situés sous l'emplacement de la pâte sont analysés et le meilleur ajustement est sélectionné comme matériau pour un aspect intégré optimal.

***

## generatorConfigFilename

Cette option définit le nom du fichier de configuration, par nom de fichier, que le schéma utilisera. Cela nécessite le nom de fichier complet, y compris l'extension `.yml` à la fin. Par exemple, `generatorConfigFilename: generator_surface_global.yml` serait l'option correcte si vous voulez utiliser le générateur défini dans `generator_surface_global.yml` que vous pouvez trouver dans le dossier de configuration des générateurs.

***

## treasureFile

Définit le [fichier de trésor]($language$/betterstructures/creating_treasure.md) que cette structure utilisera, en remplaçant le fichier de trésor défini par le [générateur]($language$/betterstructures/creating_generators.md) de la structure. Ceci n'est généralement pas recommandé, sauf s'il s'agit d'une construction très spéciale. Il est généralement préférable de modifier ou de créer un générateur à cet effet.


# Personnalisation du contenu

Tout ce qui est distribué dans BetterStructures est modifiable. Vous pouvez modifier les fichiers de schémas et les paramètres du générateur à votre guise.

Le guide de création de contenu ci-dessus est également un guide qui peut vous aider à modifier le contenu existant.
