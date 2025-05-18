Voici la traduction en français, en conservant le formatage markdown :

# Création de Phases de Boss

Les Phases de Boss sont une sous-mécanique des Boss Personnalisés. Le système derrière ces phases est si flexible et puissant qu'il nécessite sa propre explication dédiée afin de vous assurer que vous utilisez bien cette fonctionnalité.

### Comment fonctionnent les Phases de Boss ?

Les Phases de Boss peuvent être ajoutées à n'importe quel Boss Personnalisé dans EliteMobs en utilisant le format de configuration suivant :

```yaml
phases:
- phase_2_boss.yml:0.X
- phase_3_boss.yml:0.Y
```

_**Note : le boss que vous faites apparaître initialement et qui contient les informations pour toutes les autres phases sera appelé le boss de phase 1. Il ne doit pas figurer dans l'entrée phases.**_

L'intention de base derrière cette mécanique est de permettre aux administrateurs de modifier les attributs des Boss Personnalisés pendant le combat. En utilisant le format de configuration ci-dessus, vous pouvez changer complètement les fichiers de configuration d'une phase à l'autre, ce qui signifie que vous pouvez modifier 99,99 % des attributs - comme les pouvoirs, les multiplicateurs de dégâts, les multiplicateurs de santé, le type d'entité, le déguisement, l'armure portée...

Pour y parvenir, EliteMobs supprime votre boss pendant le combat et le remplace instantanément par la version de la phase suivante. Le processus derrière cela est instantané, il a donc tendance à être assez fluide - à moins que vous ne vouliez le rendre spectaculaire exprès.

### Exemple

Prenons cet exemple de boss à phases :

Fichier : phase_1_boss.yml

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

Fichier : phase_2_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: SKELETON
powers:
- attack_gravity.yml
- arrow_fireworks.yml
```

Fichier : phase_3_boss.yml

```yaml
isEnabled: true
level: 50
healthMultiplier: 10
entityType: WITHER_SKELETON
powers:
- arrow_rain
```

Cela constitue un Boss à Phases valide. Si vous faites apparaître phase_1_boss.yml, cela fera apparaître un Stray avec les attributs listés ci-dessus. Après avoir subi des dégâts jusqu'à _60 %_ de sa santé, il sera immédiatement remplacé au même endroit par le Boss Personnalisé tel que défini dans phase_2_boss.yml, car le fichier de configuration indique `- phase_2_boss.yml:0.60` (_phase_2_boss.yml est le nom du fichier pour ce boss personnalisé, 0.60 correspond à 60 % de santé_). _Notez que le boss de phase 2 apparaîtra avec 60 % de sa santé, puisque c'est à ce moment-là qu'il passe à cette phase._ Le boss aura les pouvoirs listés dans le fichier phase_2_boss.yml. Une fois que le boss de phase 2 a subi des dégâts jusqu'à 30 % de sa santé, il fait apparaître le boss défini pour la phase 3. Notez que les pouvoirs pour la phase 3 ne sont pas liés à ceux d'avant - vous pouvez changer complètement les pouvoirs entre les phases, tout comme presque tous les autres attributs.

## Avancé

### Mécaniques héritées

Voici une liste des choses qui ne changent pas d'une phase à l'autre :

- Le premier Boss à Phases de la chaîne détermine les phases que le boss traversera, ce qui signifie que vous ne devriez pas mettre d'entrée `phases` pour les autres boss de la phase.

- La table de menace / table de dégâts reste la même, ce qui signifie que la distribution du butin et le système d'aggro avancé ne sont pas affectés par un changement de phase.

- Le changement de phase est basé sur le pourcentage de santé perdue, qui est préservé d'une phase à l'autre. Cela signifie que si votre boss est configuré pour entrer en phase 2 à 50 % de santé, le boss qui apparaîtra pour remplacer le boss de phase 1 sera toujours à 50 % de santé. Cela signifie également que chaque phase peut avoir des quantités de santé complètement différentes sans que cela ne pose de problèmes.

- Les Boss à Phases reviennent à la Phase 1 s'ils sont soignés jusqu'à leur pleine santé via le système de régénération de boss par défaut hors combat.

- Les Boss à Phases qui sont également des Boss Régionaux partagent le même rayon de laisse et la même mécanique de délai d'attente sur toutes les phases, et réapparaîtront en tant que boss de phase 1 une fois le délai de réapparition terminé.

#### Avertissements

Voici une liste de mécaniques qui fonctionnent d'une manière qui peut initialement sembler contre-intuitive :

- Si un Boss à Phases est tué pendant n'importe quelle phase, il laissera tomber le butin de cette phase. Cela signifie que si quelqu'un parvient à tuer un boss de phase trop rapidement (en un coup), il mourra réellement et laissera tomber le butin configuré pour ce fichier de boss, qui n'est pas nécessairement la phase finale. Vous pouvez résoudre ce problème en configurant la table de butin pour qu'elle soit la même dans tous les fichiers de boss pour ce boss à phases, ou en vous assurant que vos Boss à Phases ont suffisamment de PV pour qu'il soit impossible de les tuer en seulement quelques coups. Alternativement, vous pouvez avoir des tables de butin spéciales pour les personnes capables de sauter des phases.

- Étant donné que les Boss à Phases font réellement apparaître des Boss Personnalisés pendant le combat, ils effectueront toute leur routine d'apparition lorsqu'ils apparaîtront. Soyez donc prudent en ce qui concerne les messages d'apparition et les commandes qui s'exécutent à l'apparition. De plus, les boss de phase ne meurent pas s'ils changent de phase, ils sont simplement échangés contre autre chose. Cela signifie que les commandes qui s'exécutent à la mort ne s'exécuteront que pour le dernier Boss à Phases, ou si le joueur parvient à sauter une phase en infligeant suffisamment de dégâts. Les commandes qui s'exécutent à l'apparition peuvent être utilisées pour s'accrocher aux changements de phase. \*Note : \* le message d'apparition ne sera pas envoyé à nouveau pour le boss de phase 1 s'il réapparaît en raison de la régénération complète du boss à phases.

- Les boss de phase peuvent être montés ou cesser de l'être entre les phases. Si le boss de phase est tué avant que la monture ne soit morte, la monture persistera jusqu'à la phase suivante. Si le boss se régénère complètement, la monture est supprimée et le boss n'est plus monté, à moins qu'il ne soit configuré pour monter une entité pendant la phase 1.

- Étant donné que de nouveaux Boss Personnalisés sont générés entre les phases, la mécanique d'apparition unique se réinitialise entre les phases et lors des guérisons complètes.

### Conseils et astuces

- Vous pouvez utiliser le fait que l'équipement et les types d'entités peuvent être modifiés tout au long du combat pour rendre le boss de plus en plus (ou de moins en moins) dangereux au fil du combat.

- Bien que possible, à moins qu'il n'y ait un objectif de conception spécifique en tête, il est probablement préférable que les pouvoirs du Boss à Phases ne changent pas trop radicalement entre les phases, car les joueurs sont plus susceptibles d'apprécier une progression qui semble naturelle tout au long du combat.

- Vous pouvez utiliser les commandes `onSpawn` pour exécuter des commandes entre les phases.

- Les phases peuvent être utilisées pour faire passer le boss du mode mêlée au mode à distance et vice-versa.

- Les Boss à Phases ont été conçus pour être des boss coriaces avec beaucoup de PV. Ils sont généralement les mieux adaptés comme rencontre de boss finale pour les donjons ou comme grands Boss Mondiaux.

- Lors de la conception des rencontres, gardez à l'esprit qu'il est possible que les renforts ne soient pas tués par les joueurs entre les phases.

- Les boss peuvent avoir autant de phases que vous le souhaitez, mais plus ils ont de phases, plus ils auront besoin de santé pour que chaque phase compte.