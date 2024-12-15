Les donjons instanciés ont un paramètre spécial pour définir facilement différentes difficultés pour le donjon.

# Comment cela fonctionne

Les difficultés sont en partie calquées sur le système de synchronisation de niveau de Final Fantasy 14.

L'armure et les armes d'élite obtiennent des dégâts d'élite et une défense d'élite spécifiques en fonction de leur niveau, comme vous pouvez le voir sur les objets. Dans un donjon instancié avec une difficulté activée, le niveau de l'objet sera temporairement et invisiblement abaissé pour correspondre à la synchronisation de niveau.

Voici un exemple précis : une épée de niveau 100 inflige 100 dégâts non enchantés. Si un joueur se trouve dans un donjon instancié avec une difficulté qui synchronise l'équipement au niveau 50, l'épée agira comme une épée de niveau 50 et infligera 50 dégâts.

Cependant, si cette épée a une netteté de niveau 10, elle ajoutera toujours la même quantité de dégâts en plus des dégâts de base.

Cela signifie que, dans les donjons instanciés avec des difficultés, ce qui compte n'est pas tant le niveau de l'équipement, mais la qualité de l'équipement. Les joueurs qui cherchent à battre la difficulté mythique devront s'efforcer d'obtenir des objets de haute qualité provenant d'autres donjons instanciés et éventuellement interagir fortement avec le système d'amélioration d'objets.

Cela rend également presque impossible pour les joueurs vétérans de piétiner un contenu ancien de haute difficulté et incite à le faire même si leur niveau est bien au-delà du niveau du donjon.

# Système de groupe

Pour tenir compte des groupes de joueurs, les boss sont conçus avec des pouvoirs spécifiques qui deviennent plus dangereux à mesure que davantage de joueurs rejoignent l'arène. De plus, les boss reçoivent une augmentation de santé non linéaire à mesure que davantage de joueurs rejoignent l'instance.

# Comment définir une difficulté

Les difficultés sont définies dans le dossier `dungeonpackager` dans le fichier du package de donjon des donjons instanciés.

Jetons un coup d'œil à un exemple :

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Cela définit trois difficultés. Les difficultés ont deux champs facultatifs obligatoires, `name` et `levelSync`.

Le nom est le nom de la difficulté, tel qu'il apparaîtra dans le paramètre de difficulté dans le jeu. Il peut avoir n'importe quel nom.

La synchronisation de niveau définit le niveau d'objet maximum pour le donjon instancié, comme expliqué ci-dessus dans cette page.

Vous pouvez avoir autant ou aussi peu de difficultés définies que vous le souhaitez. Ajoutez ou supprimez simplement des entrées au paramètre difficultés en utilisant le même format.

## Pouvoirs en fonction de la difficulté

Il est possible de configurer des boss pour qu'ils n'aient des pouvoirs que dans des difficultés spécifiques. Regardons un exemple :

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Remarque : cela fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss n'aura l'invulnérabilité au feu que pour les difficultés dont l'ID est `1` et `2`.

*Lors de l'ajout de difficultés, leurs ID commenceront à compter à partir de 0 et augmenteront à mesure que vous ajoutez plus de difficultés.*

## Butin en fonction de la difficulté

Il est possible de configurer les boss pour qu'ils laissent tomber du butin spécifique à une difficulté de donjon instancié. Jetons un coup d'œil à un exemple :

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Remarque : cela fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss ne laissera tomber que le butin `himiko_boss_drop_axe_tank_normal.yml` pour la difficulté `0` et a 5 % de chance de le faire.
