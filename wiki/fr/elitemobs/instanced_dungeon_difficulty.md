Les donjons instanciés disposent d'un paramètre spécial pour définir facilement différentes difficultés pour le donjon.

# Comment ça marche

Les difficultés sont en partie calquées sur le système de synchronisation de niveau de Final Fantasy 14.

Les armures et armes d'élite obtiennent des dégâts et une défense d'élite spécifiques basés sur leur niveau, comme vous pouvez le voir sur les objets. Lorsque vous êtes dans un donjon instancié avec une difficulté activée, le niveau de l'objet sera temporairement et invisiblement abaissé pour correspondre à la synchronisation de niveau.

Voici un exemple spécifique : une épée de niveau 100 inflige 100 points de dégâts non enchantée. Si un joueur se trouve dans un donjon instancié avec une difficulté qui synchronise l'équipement au niveau 50, l'épée agira comme une épée de niveau 50 et infligera 50 points de dégâts.

Cependant, si cette épée a un tranchant de niveau 10, elle ajoutera toujours la même quantité de dégâts en plus des dégâts de base.

Cela signifie que, dans les donjons instanciés avec des difficultés, ce qui compte n'est pas tant le niveau de l'équipement que sa qualité. Les joueurs cherchant à vaincre la difficulté mythique devront s'efforcer d'obtenir des objets de haute qualité dans d'autres donjons instanciés et éventuellement interagir fortement avec le système d'amélioration d'objets.

Cela rend également presque impossible pour les joueurs vétérans de "rouler sur" l'ancien contenu de haute difficulté et incite à le faire même si leur niveau est bien supérieur à celui du donjon.

# Système de groupe

Pour tenir compte des groupes de joueurs, les boss sont conçus avec des pouvoirs spécifiques qui deviennent plus dangereux à mesure que plus de joueurs rejoignent l'arène. De plus, les boss obtiennent une augmentation de santé non linéaire à mesure que plus de joueurs rejoignent l'instance.

# Comment définir une difficulté

Les difficultés sont définies dans le dossier `dungeonpackager` dans le fichier de package du donjon pour les donjons instanciés.

Jetons un coup d'œil à un exemple :

```yml
difficulties:
- levelSync: 60
  name: normal
- levelSync: 50
  name: hard
- levelSync: 40
  name: mythic
```

Cela définit trois difficultés. Les difficultés ont deux champs obligatoires facultatifs, `name` et `levelSync`.

Le nom est le nom de la difficulté, tel qu'il apparaîtra dans le paramètre de difficulté en jeu. Il peut avoir n'importe quel nom.

La synchronisation de niveau définit le plafond de niveau d'objet pour le donjon instancié, comme expliqué ci-dessus sur cette page.

Vous pouvez définir autant ou aussi peu de difficultés que vous le souhaitez. Ajoutez ou supprimez simplement des entrées au paramètre difficulties en utilisant le même format.

## Pouvoirs basés sur la difficulté

Il est possible de configurer les boss pour qu'ils n'aient des pouvoirs qu'à des difficultés spécifiques. Regardons un exemple :

```yml
powers:
- filename: invulnerability_fire.yml
  difficultyID:
  - 1
  - 2
```

**Note : ceci fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss n'aura l'invulnérabilité au feu que pour les difficultés avec l'ID `1` et `2`.

*Lorsque vous ajoutez des difficultés, leurs ID commenceront à compter à partir de 0 et augmenteront à mesure que vous ajoutez d'autres difficultés.*

## Butin basé sur la difficulté

Il est possible de configurer les boss pour qu'ils lâchent du butin spécifique à une difficulté de donjon instancié. Regardons un exemple :

```yml
uniqueLootList:
- filename: himiko_boss_drop_axe_tank_normal.yml
  chance: 0.05
  difficultyID: 0
```

**Note : ceci fait partie du fichier de configuration du boss personnalisé !**

Dans ce cas, le boss ne lâchera le butin `himiko_boss_drop_axe_tank_normal.yml` que pour la difficulté `0` et a 5% de chances de le faire.