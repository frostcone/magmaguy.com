# Création de Phases de Boss

Les phases de boss sont une sous-mécanique des boss personnalisés. Le système derrière ces phases est si flexible et puissant qu'il nécessite sa propre explication dédiée afin de s'assurer que vous faites bon usage de cette fonctionnalité.

### Comment fonctionnent les phases de boss ?

Des phases de boss peuvent être ajoutées à n'importe quel boss personnalisé dans EliteMobs en utilisant le format de
configuration suivant :

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Note: le boss que vous faites apparaître à l'origine et qui contient les informations pour toutes les autres phases
sera appelé le boss de la phase 1. Il ne doit pas figurer dans l'entrée des phases.**_

L'intention de base derrière cette mécanique est de permettre aux administrateurs de modifier les attributs des boss
personnalisés pendant le combat. En utilisant le format de configuration ci-dessus, vous pouvez modifier complètement
les fichiers de configuration d'une phase à l'autre, ce qui signifie que vous pouvez modifier 99,99 % des attributs:
pouvoirs, multiplicateurs de dégâts, multiplicateurs de santé, type d'entité, déguisement, armure portée...

Pour y parvenir, EliteMobs supprime votre boss pendant le combat et le remplace instantanément par la version de la
phase suivante. Le processus sous-jacent est instantané, il a donc tendance à être assez fluide, à moins que vous ne
vouliez le rendre intentionnellement voyant.

### Exemple

Prenons cet exemple de boss à phases:

Fichier : phase_1_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: STRAY
powers:
- attack_gravity.yml
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Fichier : phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Fichier : phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Cela constitue un boss à phases valide. Si vous faites apparaître phase_1_boss.yml, cela fera apparaître un errant avec
les attributs énumérés ci-dessus. Après avoir subi des dégâts jusqu'à _60 %_ de sa santé, il sera immédiatement remplacé
au même endroit par le boss personnalisé tel que formé dans phase_2_boss.yml, puisque le fichier de configuration
indique `- phase_2_boss.yml:0.60` (_phase_2_boss.yml est le nom de fichier pour ce boss personnalisé, 0.60 est 60 % de
la santé_). _Notez que le boss de la phase 2 apparaîtra avec 60 % de sa santé, car c'est à ce moment-là qu'il passe à
cette phase._ Le boss aura les pouvoirs énumérés dans le fichier phase_2_boss.yml. Une fois que le boss de la phase 2
est endommagé à 30 % de sa santé, il fait apparaître le boss défini pour la phase 3. Notez que les pouvoirs de la phase
3 ne sont pas liés à ceux d'avant - vous pouvez complètement changer les pouvoirs entre les phases, comme presque tous
les autres attributs.

## Avancé

### Mécanismes hérités

Voici une liste de choses qui ne changent pas d'une phase à l'autre:

- Le premier boss à phases de la chaîne détermine les phases par lesquelles le boss passera, ce qui signifie que vous ne
  devriez pas mettre d'entrée de phases pour les autres boss dans la phase.

- La table de menace/table de dégâts reste la même, ce qui signifie que la distribution du butin et le système d'aggro
  avancé ne sont pas affectés par un changement de phase

- Le changement de phase est basé sur le % de santé perdu, qui est conservé d'une phase à l'autre. Cela signifie que si
  votre boss est configuré pour entrer en phase 2 à 50 % de santé, le boss qui apparaîtra pour remplacer le boss de la
  phase 1 sera toujours à 50 % de santé. Cela signifie également que chaque phase peut avoir des quantités de santé
  complètement différentes sans que cela ne pose de problèmes.

- Les boss à phases reviennent à la phase 1 s'ils sont guéris jusqu'à leur pleine santé via le système de régénération
  par défaut des boss hors combat.

- Les boss à phases qui sont également des boss régionaux partagent le même rayon de laisse et le même mécanisme de
  délai d'attente dans toutes les phases, et réapparaîtront en tant que boss de la phase 1 une fois le minuteur de
  réapparition terminé.

#### Avertissements

Voici une liste de mécanismes qui fonctionnent d'une manière qui peut sembler contre-intuitive au début:

- Si un boss à phases est tué pendant une phase, il lâchera le butin de cette phase. Cela signifie que si quelqu'un
  parvient à tuer un boss à phases trop rapidement (one-shot), il mourra et lâchera le butin configuré pour ce fichier
  de boss, qui ne sera pas nécessairement la phase finale. Vous pouvez corriger cela en définissant la table de butin
  comme étant la même dans tous les fichiers de boss pour ce boss à phases, ou en vous assurant que vos boss à phases
  ont suffisamment de PV au point où il est impossible de les tuer en quelques coups seulement. Vous pouvez également
  avoir des tables de butin spéciales pour les personnes capables de sauter des phases.

- Étant donné que les boss à phases provoquent en fait l'apparition de boss personnalisés pendant le combat, ils
  effectueront toute leur routine d'apparition lorsqu'ils apparaissent. Par conséquent, soyez prudent en ce qui concerne
  les messages d'apparition et les commandes qui s'exécutent à l'apparition. De plus, les boss à phases ne meurent pas
  lorsqu'ils changent de phase, ils sont simplement remplacés par autre chose. Cela signifie que les commandes qui
  s'exécutent à la mort ne s'exécuteront que pour le dernier boss à phases, ou si le joueur parvient à sauter une phase
  en infligeant suffisamment de dégâts. Les commandes qui s'exécutent à l'apparition peuvent être utilisées pour se
  brancher sur les changements de phase. \*Note:\* le message d'apparition ne sera pas envoyé à nouveau pour le boss de
  la phase 1 s'il réapparaît parce que le boss à phases est régénéré jusqu'à sa pleine santé.

- Les boss à phases peuvent être montés ou cesser de l'être entre les phases. Si le boss à phases est tué avant que la
  monture ne meure, la monture persistera jusqu'à la phase suivante. Si le boss se régénère jusqu'à sa pleine santé, la
  monture est supprimée et le boss n'est plus monté, sauf s'il est configuré pour monter une entité pendant la phase 1.

- Étant donné que de nouveaux boss personnalisés sont apparus entre les phases, le mécanisme d'apparition unique se
  réinitialise entre les phases et en cas de guérison complète.

### Trucs et astuces

- Vous pouvez utiliser le fait que l'équipement et les types d'entités peuvent être modifiés pendant le combat pour
  rendre le boss de plus en plus (ou de moins en moins) dangereux tout au long du combat.

- Bien que cela soit possible, à moins qu'il n'y ait un objectif de conception spécifique en tête, il est probablement
  préférable que les pouvoirs que le boss à phases possède ne changent pas trop radicalement entre les phases, car les
  joueurs sont plus susceptibles d'apprécier une progression qui semble naturelle tout au long du combat.

- Vous pouvez utiliser des commandes onSpawn pour exécuter des commandes entre les phases

- Les phases peuvent être utilisées pour faire passer le boss du mode mêlée au mode à distance et vice-versa.

- Les boss à phases ont été conçus pour être des boss coriaces avec beaucoup de PV. Ils sont généralement mieux utilisés
  comme rencontre finale de boss pour les donjons ou comme grands boss du monde.

- Lors de la conception des rencontres, gardez à l'esprit qu'il est possible que les renforts ne soient pas tués par les joueurs entre les phases.

- Les boss peuvent avoir autant de phases que vous le souhaitez, mais plus ils ont de phases, plus ils auront besoin de santé pour que chaque phase compte.
