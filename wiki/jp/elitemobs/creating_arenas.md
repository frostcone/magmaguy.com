```yaml
  - Prêt à relever un défi ?
farewell:
  - Au revoir !
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: my_arena.yml
```

This example shows a basic Arena NPC that will spawn in my_minecraft_world with a zombie disguise. Players can interact
with this NPC to challenge the Example Arena.

</div>

</details>

## Special [4]

The following is the list of valid NPC interaction types:

| Type                          |                                Description                                |
|-------------------------------|:-------------------------------------------------------------------------:|
| `GUILD_GREETER`               |                     Open the adventurer's guild menu                      |
| `CHAT`                        |                Right-clicking cycles through the `dialog`                 |
| `CUSTOM_SHOP`                 |                        Opens the custom shop menu                         |
| `PROCEDURALLY_GENERATED_SHOP` |                   Opens the procedurally generated shop                   |
| `BAR`                         |                            Opens the bar menu                             |
| `ARENA`                       |                           Opens the arena menu                            |
| `QUEST_GIVER`                 |               Opens the procedurally generated quests menu                |
| `CUSTOM_QUEST_GIVER`          |     Opens the quest menu for a specific quest set in `questFilenames`     |
| `NONE`                        |                              No interactions                              |
| `SELL`                        |                            Opens the sell menu                            |
| `TELEPORT_BACK`               | Teleports players back to the last non-elitemobs world location they were |
| `SCRAPPER`                    |                           Opens the scrap menu                            |
| `SMELTER`                     |                           Opens the smelt menu                            |
| `REPAIRMAN`                   |                           Opens the repair menu                           |
| `ENHANCER`                    |                     Opens the item enhancements menu                      |
| `REFINER`                     |                          Opens the refiner menu                           |
| `UNBINDER`                    |                           Opens the unbind menu                           |
| `ARENA_MASTER`                |         Opens the arena menu for the arena set in `arenaFilename`         |
| `COMMAND`                     |                     Runs the command set in `command`                     |

# Création de contenu

***

## Création de la construction

Il n'y a pas de restrictions quant à ce que vous pouvez construire pour BetterStructures, bien qu'il soit recommandé de
maintenir la taille des structures sous 100x100x100 blocs pour des raisons générales d'ajustement mondial et de
performances. Cela dit, il peut facilement gérer des structures beaucoup plus grandes.

***

### Blocs spéciaux

BetterStructures possède deux blocs spéciaux: les barrières et le bedrock. Tout autre bloc que WorldEdit/FAWE peut
coller sera collé normalement, mais les barrières et les blocs de bedrock sont l'exception. Au lieu de coller, ces blocs
sont remplacés par les comportements personnalisés suivants:

***

#### Barrière

Les blocs de barrière font en sorte que le plugin ne place aucun bloc à cet emplacement. Cela signifie que tout bloc qui
se trouvait à l'origine dans la génération normale du monde y restera.

Les constructeurs peuvent utiliser cela pour arrondir les bords d'un collage, le rendant plus naturel, ou pour mouler
des murs dans une grotte potentielle, entre autres astuces.

***

#### Le le le le le le le bedrock

Les blocs de bedrock font en sorte que le plugin garantit qu'il y ait un bloc solide à cet emplacement. Cela signifie
que si un bloc solide s'y trouve déjà dans la génération par défaut du monde, ce bloc ne sera pas modifié ; toutefois,
si le bloc est de l'air ou du liquide, il sera remplacé par un bloc solide provenant du [piédestal](#pedestalmaterial).

Les constructeurs peuvent utiliser cela pour créer des planchers avec des fonctionnalités telles que le plancher pour
les rails de wagonnet ou pour garantir qu'un plancher existe sans remplacer les blocs solides potentiellement déjà
existants à cet emplacement dans le monde, ce qui rend les constructions plus organiques.

***

### Panneaux d'apparition

BetterStructures peut utiliser des panneaux avec du texte spécifique pour générer des mobs et même des boss d'EliteMobs
et MythicMobs à des emplacements spécifiques de la construction.

***

##### Génération de mobs vanilla

Si vous prenez un panneau normal et que vous le placez quelque part, assurez-vous que la première ligne
indique `[spawn]` et que la deuxième ligne a
le [nom du type d'entité suivant l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html),
vous ferez apparaître une entité persistante à cet emplacement du type que vous avez spécifié.

Par exemple, si vous avez un panneau qui indique `[spawn]` sur la première ligne et `ZOMBIE` sur la deuxième ligne, vous
ferez apparaître un zombie à cet emplacement lorsque la construction sera placée. Cela peut également être utilisé pour
les entités non vivantes, telles que les supports d'armure ou les cristaux d'ender.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Génération d'Elite Mobs (plugin de boss recommandé)

BetterStructures a également une intégration avancée avec EliteMobs, ce qui lui permet de créer des arènes de boss
basées sur des constructions et des panneaux d'apparition.

Si vous prenez un panneau normal et le placez quelque part, en faisant de la première ligne [elitemobs], vous pouvez
utiliser toutes les autres lignes pour dire quel fichier de boss utiliser.

Par exemple, si vous faites `[elitemobs]` sur la première ligne, puis `test_boss.yml` sur la deuxième ligne, vous ferez
apparaître le boss de test. Si vous avez un nom de fichier très long, tel que boss_with_very_long_filename.yml, vous
pouvez le diviser en plusieurs lignes, alors mettez la ligne 2 `boss_with_very_` puis la ligne 3 `long_filename.yml` et
cela fonctionnera.

Pour rappel, par défaut, les arènes de combat seront protégées jusqu'à ce que les joueurs tuent tous les boss de la
construction si votre serveur utilise WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Génération de Mythic Mobs

BetterStructures a également une intégration simple avec MythicMobs, ce qui lui permet de faire apparaître un mob de
MythicMobs dans la construction. Sur la première ligne d'un panneau normal, écrivez `[mythicmobs]`, puis sur la deuxième
ligne, utilisez le mob identifié. Vous pouvez utiliser un nombre sur la troisième ligne pour définir le niveau du mob.

<div class="minecraft-sign">
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schémas

Les schémas sont des fichiers générés par WorldEdit ou FastAsyncWorldEdit qui contiennent les blocs pour la construction
que BetterStructures utilisera.

Des instructions détaillées sur la façon de créer un schéma ne sont pas incluses ici, car elles sont décrites en détail
dans les documentations de WorldEdit et de FastAsyncWorldEdit, mais cela se fait généralement en:

1) choisissant un coin de la construction et en utilisant la commande `//pos1`
2) choisissant le coin diagonalement opposé et en utilisant la commande `//pos2`
3) utilisant la commande `//copy`
4) utilisant la commande `/schem save <nomdeschéma>`, où `<nomdeschéma>` est le nom de fichier que vous souhaitez
   utiliser pour votre schéma.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="image de la documentation worldedit provenant de leurs docs">

*Assurez-vous d'exécuter la commande `//pos1` au point 1 et `//pos2` au point 2!*

***

#### Point d'ancrage

Les points d'ancrage sont l'endroit où vous exécutez la commande `//copy` pour le schéma. Lors du simple collage d'un
schéma, ce sont les points où vous vous trouvez par rapport à la construction.

Il est important de bien régler les points d'ancrage pour que les schémas fonctionnent correctement.

* Pour les _constructions de surface_, il est recommandé de se tenir au point le plus bas du sol lors de la copie de la
  construction.
* Pour les _constructions souterraines_, il est recommandé de se tenir au-dessus de la construction.
* Pour les _constructions liquides_, il est recommandé de se tenir au-dessus de l'eau.
* Pour les _constructions aériennes_, il est recommandé de se tenir au-dessus de la construction.

**Veuillez noter que vous devez toujours être très près ou directement au-dessus des constructions lors de la copie ;
plus vous êtes éloigné, plus la latence sera importante lorsque la construction devra être collée.**

***

# Configurations de schémas

Chaque fichier de schéma possède une configuration de schéma. Si un fichier de schéma vient d'être ajouté au serveur, la
configuration sera générée après un redémarrage ou après une commande `/betterstructures reload`.

Ces configurations vous permettent de définir les paramètres suivants pour le collage du schéma:

***

## isEnabled

Définit si le schéma est activé. S'il est désactivé, il ne sera placé nulle part.

***

## weight

Weight définit le poids du schéma en termes de probabilité qu'il soit choisi.

La valeur par défaut est `1.0`. Si vous faites en sorte qu'une construction ait un poids de `2.0`, elle aura 2 fois plus
de chances d'être sélectionnée que les autres constructions. Si vous la définissez sur `0.5`, elle aura deux fois moins
de chances d'être choisie.

_**Remarque:** Gardez à l'esprit que les chances qu'une construction spécifique soit choisie changent radicalement en
fonction du nombre total de constructions en compétition pour l'emplacement qui recevra une structure!_

***

## pedestalMaterial

**Important: champ facultatif!**

Le matériau du piédestal définit le type de matériau des blocs de piédestal à l'aide
des [noms de matériaux de l'API Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html): utilisez-les
sinon cela ne fonctionnera pas!

Les piédestaux sont les blocs qui sont placés sous les bâtiments de surface et souterrains pour combler les espaces
d'air et améliorer l'ajustement d'un bâtiment avec le monde. Ce sont également les mêmes blocs qui remplacent les blocs
de bedrock dans le schéma.

Lorsque rien n'est défini dans la configuration, les blocs sous l'emplacement du collage sont analysés et l'ajustement
le plus approprié est sélectionné comme matériau pour un aspect intégré optimal.

***

## generatorConfigFilename

Cette option définit le nom du fichier de configuration, par nom de fichier, que le schéma utilisera. Cela nécessite le
nom de fichier complet, y compris l'extension `.yml` à la fin. Par
exemple, `generatorConfigFilename: generator_surface_global.yml` serait l'option correcte si vous souhaitez utiliser le
générateur défini dans `generator_surface_global.yml` que vous pouvez trouver dans le dossier de configuration des
générateurs.

***

## treasureFile

Définit le [fichier de trésor]($language$/betterstructures/creating_treasure.md) que cette structure utilisera, en
remplaçant le fichier de trésor défini par le [générateur]($language$/betterstructures/creating_generators.md) de la
structure. Ceci n'est généralement pas recommandé, sauf si c'est pour une construction très spéciale. Il est
généralement préférable de modifier ou de créer un générateur à cette fin.

# Personnalisation du contenu

Tout ce qui est distribué dans BetterStructures est modifiable. Vous êtes libre de modifier tous les fichiers de schéma
et les paramètres du générateur à votre guise.

Le guide de création de contenu ci-dessus est également un guide qui peut vous aider à modifier le contenu existant.
