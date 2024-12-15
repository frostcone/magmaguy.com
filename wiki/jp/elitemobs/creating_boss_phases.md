# Création de phases de boss

Les phases de boss sont une sous-mécanique des boss personnalisés. Le système derrière ces phases est si flexible et puissant qu'il nécessite sa propre explication dédiée afin de s'assurer que vous faites bon usage de cette fonctionnalité.

### Comment fonctionnent les phases de boss ?

Les phases de boss peuvent être ajoutées à n'importe quel boss personnalisé dans EliteMobs en utilisant le format de configuration suivant :

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Remarque :** le boss que vous générez à l'origine et qui contient les informations pour toutes les autres phases sera appelé boss de phase 1. Il ne doit pas figurer dans l'entrée des phases._

L'intention de base derrière cette mécanique est de permettre aux administrateurs de modifier les attributs du boss personnalisé pendant le combat. En utilisant le format de configuration ci-dessus, vous pouvez modifier complètement les fichiers de configuration de phase en phase, ce qui signifie que vous pouvez modifier 99,99 % des attributs, comme les pouvoirs, les multiplicateurs de dégâts, les multiplicateurs de santé, le type d'entité, le déguisement, l'armure portée...

Pour ce faire, EliteMobs supprime votre boss pendant le combat et le remplace instantanément par la version de la phase suivante. Le processus derrière cela est instantané, il a donc tendance à être assez fluide, à moins que vous ne souhaitiez le rendre flamboyant exprès.

### Exemple

Prenons cet exemple de boss de phase :

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

Cela constitue un boss de phase valide. Si vous générez phase_1_boss.yml, il générera un Stray avec les attributs énumérés ci-dessus. Après avoir été endommagé jusqu'à _60 %_ de sa santé, il sera immédiatement remplacé au même endroit par le boss personnalisé tel que formé dans phase_2_boss.yml, étant donné que le fichier de configuration indique `- phase_2_boss.yml:0.60` (_phase_2_boss.yml est le nom de fichier de ce boss personnalisé, 0.60 correspond à 60 % de la santé_). _Notez que le boss de phase 2 apparaîtra avec 60 % de sa santé, car c'est à ce moment-là qu'il passe à cette phase_. Le boss aura les pouvoirs énumérés dans le fichier phase_2_boss.yml. Une fois que le boss de la phase 2 a été endommagé jusqu'à 30 % de sa santé, il génère le boss défini pour la phase 3. Notez que les pouvoirs pour la phase 3 ne sont pas liés à ceux d'avant ; vous pouvez modifier complètement les pouvoirs entre les phases, comme presque tous les autres attributs.

## Avancé

### Mécaniques héritées

Voici une liste de choses qui ne changent pas de phase en phase :

- Le premier boss de phase de la chaîne détermine les phases que le boss traversera, ce qui signifie que vous ne devez pas insérer d'entrée de phases pour les autres boss de la phase.

- La table des menaces/table de dégâts reste la même, ce qui signifie que la distribution du butin et le système d'aggro avancé ne sont pas affectés par un changement de phase.

- Le changement de phase est basé sur le % de santé perdue, qui est conservé de phase en phase. Cela signifie que si votre boss est configuré pour entrer en phase 2 à 50 % de sa santé, le boss qui apparaîtra pour remplacer le boss de la phase 1 sera toujours à 50 % de sa santé. Cela signifie également que chaque phase peut avoir des quantités de santé complètement différentes sans que cela ne pose de problème.

- Les boss de phase reviennent à la phase 1 s'ils sont guéris de nouveau à leur pleine santé via le système de régénération du boss hors combat par défaut.

- Les boss de phase qui sont également des boss régionaux partagent le même rayon de laisse et la même mécanique de temps d'arrêt sur toutes les phases et réapparaîtront en tant que boss de phase 1 lorsque le minuteur de réapparition est terminé.

- Le fichier de configuration de la dernière phase définit le butin pour le boss.

- Les phases ne peuvent pas être ignorées : les dégâts excessifs feront toujours changer les phases du boss au pourcentage défini.

- Les boss de phase qui ont des montures cessent d'être montés lors du changement de phase.

#### Avertissements

Voici une liste de mécanismes qui fonctionnent d'une manière qui peut initialement sembler contre-intuitive :

- Si un boss de phase est tué pendant une phase, il laissera tomber le butin de cette phase. Cela signifie que si quelqu'un parvient à tuer un boss de phase trop rapidement (en un seul coup), il mourra et laissera tomber le butin configuré pour ce fichier de boss, qui n'est pas nécessairement la phase finale. Vous pouvez corriger cela en définissant la table de butin comme étant la même dans tous les fichiers de boss pour ce boss de phase, ou en vous assurant que vos boss de phase ont suffisamment de PV au point où il est impossible de les tuer en quelques coups seulement. Vous pouvez également avoir des tables de butin spéciales pour les personnes capables de passer des phases.

- Étant donné que les boss de phase provoquent en fait l'apparition de boss personnalisés pendant le combat, ils effectueront toute leur routine d'apparition lorsqu'ils apparaissent. En tant que tel, soyez prudent en ce qui concerne les messages d'apparition et les commandes qui s'exécutent à l'apparition. De plus, les boss de phase ne meurent pas s'ils changent de phase, ils sont simplement remplacés par autre chose. Cela signifie que les commandes qui s'exécutent à la mort ne s'exécuteront que pour le dernier boss de phase, ou si le joueur parvient à ignorer une phase en infligeant suffisamment de dégâts. Les commandes qui s'exécutent à l'apparition peuvent être utilisées pour se connecter aux changements de phase. \*Remarque :\* le message d'apparition ne sera pas renvoyé pour le boss de la phase 1 s'il réapparaît en raison de la régénération du boss de la phase en pleine santé.

- Les boss de phase peuvent apparaître montés ou cesser de l'être entre les phases. Si le boss de phase est tué avant que la monture ne meure, la monture persistera jusqu'à la phase suivante. Si le boss se régénère complètement, la monture est supprimée et le boss est démonté, à moins qu'il ne soit configuré pour monter une entité pendant la phase 1.

- Étant donné que de nouveaux boss personnalisés sont générés entre les phases, la mécanique d'apparition unique se réinitialise entre les phases et lors des guérisons complètes.

### Trucs et astuces

- Vous pouvez utiliser le fait que l'équipement et les types d'entités peuvent être modifiés tout au long du combat pour rendre le boss de plus en plus (ou de moins en moins) dangereux tout au long du combat.

- Bien que ce soit possible, à moins qu'il n'y ait un objectif de conception spécifique à l'esprit, il est probablement préférable que les pouvoirs du boss de phase ne changent pas trop radicalement entre les phases, car il est plus probable que les joueurs apprécient une progression qui semble naturelle tout au long du combat.

- Vous pouvez utiliser les commandes onSpawn pour exécuter des commandes entre les phases

- Les phases peuvent être utilisées pour faire passer le boss du mode mêlée au mode à distance et vice-versa

- Les boss de phase ont été conçus pour être des boss coriaces avec beaucoup de PV. Ils sont généralement mieux servis comme rencontre de boss final pour les donjons ou comme grands boss mondiaux.

- Lors de la conception des rencontres, gardez à l'esprit qu'il est possible que les renforts ne soient pas tués par les joueurs entre les phases.

- Les boss peuvent avoir autant de phases que vous le souhaitez, mais plus ils ont de phases, plus ils auront besoin de santé pour que chaque phase compte.
