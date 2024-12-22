Les donjons instanciés ont un paramètre spécial pour définir facilement différentes difficultés pour le donjon.

# Comment ça marche

Les difficultés sont en partie calquées sur le système de synchronisation de niveau de Final Fantasy 14.

Les armures et armes d'élite obtiennent des dégâts d'élite et une défense d'élite spécifiques en fonction de leur
niveau, comme vous pouvez le voir sur les objets. Lorsqu'on se trouve dans un donjon instancié avec une difficulté
activée, le niveau de l'objet est temporairement et invisiblement abaissé pour correspondre à la synchronisation de
niveau.

Voici un exemple précis : une épée de niveau 100 inflige 100 dégâts sans enchantement. Si un joueur se trouve dans un
donjon instancié avec une difficulté qui synchronise l'équipement au niveau 50, l'épée agira comme une épée de niveau 50
et infligera 50 dégâts.

Cependant, si cette épée a une netteté de niveau 10, elle ajoutera toujours la même quantité de dégâts en plus des
dégâts de base.

Cela signifie que, dans les donjons instanciés avec des difficultés, ce qui compte n'est pas tant le niveau de l'
équipement que sa qualité. Les joueurs qui cherchent à battre la difficulté mythique devront s'efforcer d'obtenir des
objets de haute qualité dans d'autres donjons instanciés et éventuellement interagir fortement avec le système d'
amélioration d'objets.

Cela rend également presque impossible pour les joueurs vétérans de piétiner l'ancien contenu de haute difficulté et
incite à le faire même si leur niveau est bien au-delà du niveau du donjon.

# Système de groupe

Pour tenir compte des groupes de joueurs, les boss sont conçus avec des pouvoirs spécifiques qui deviennent plus
dangereux au fur et à mesure que des joueurs rejoignent l'arène. De plus, les boss bénéficient d'une augmentation non
linéaire de leur santé à mesure que d'autres joueurs rejoignent l'instance.

# Comment définir une difficulté

Les difficultés sont définies dans le dossier `dungeonpackager` dans le fichier de package de donjon des donjons
instanciés.

Prenons un exemple :

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Cela définit trois difficultés. Les difficultés ont deux champs optionnels obligatoires, `name` et `levelSync`.

Le nom est le nom de la difficulté, tel qu'il apparaîtra dans le paramètre de difficulté en jeu. Il peut avoir n'importe
quel nom.

La synchronisation de niveau définit la limite de niveau d'objet pour le donjon instancié, comme expliqué ci-dessus sur
cette page.

Vous pouvez définir autant ou aussi peu de difficultés que vous le souhaitez. Ajoutez ou supprimez simplement des
entrées au paramètre de difficultés en utilisant le même format.

## Pouvoirs basés sur la difficulté

Il est possible de configurer les boss pour qu'ils n'aient des pouvoirs qu'à des difficultés spécifiques. Prenons un
exemple :

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Remarque : ceci fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss n'aura l'invulnérabilité au feu que pour les difficultés avec les ID `1` et `2`.

*Lors de l'ajout de difficultés, leurs ID commenceront à compter à partir de 0 et augmenteront à mesure que vous ajoutez
d'autres difficultés.*

## Butin basé sur la difficulté

Il est possible de configurer les boss pour qu'ils laissent tomber du butin spécifique à une difficulté de donjon
instancié. Prenons un exemple :

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Remarque : ceci fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss ne laissera tomber le butin `himiko_boss_drop_axe_tank_normal.yml` que pour la difficulté `0` et a
5 % de chances de le faire.
