# Construire pour EliteMobs

La page wiki suivante vous aidera à comprendre le processus requis pour créer des donjons et des arènes EliteMobs.

Vocabulaire :

- « Boss » : grande rencontre, censée être combattue par de nombreuses personnes
- « Mini-boss » : rencontre plus petite, pouvant généralement être tuée par un seul joueur
- « Fodder » : monstres relativement faciles à tuer

## Comprendre les catégories de donjons EliteMobs

### Repaires

Catégorie de taille la plus petite

Les repaires sont généralement des structures à bâtiment unique de 50 x 50, distribuées sous forme de mondes, et contiennent généralement une grande rencontre de boss, bien que certains puissent également contenir un mini-boss et quelques ennemis mineurs.

### Mini-donjons

Catégorie de taille moyenne

Les mini-donjons sont plus proches des structures de 100 x 100 ou 150 x 150, souvent avec plusieurs structures ou des structures avec plusieurs sections. Ceux-ci ont un boss et généralement au moins 3 mini-boss ou plus. Ils ont également beaucoup d'ennemis mineurs.

### Aventures

Les aventures sont des cartes d'aventure complètes, généralement non mesurées en blocs. Ceux-ci sont de la taille d'une ville ou même plus grands. Ils ont un boss et plus de 10 mini-boss, ainsi que des dizaines d'ennemis mineurs uniques qui s'élèvent généralement à des centaines, voire des milliers au total sur la carte.

### Arènes

Les arènes sont des défis d'arène de survie par vagues dans EliteMobs. Ceux-ci mesurent généralement 100 x 100. Ils peuvent avoir un nombre illimité de vagues, mais il n'est généralement pas recommandé de dépasser 50.

### Donjons instanciés

Les donjons instanciés sont similaires aux mini-donjons, sauf qu'ils sont instanciés. Cela signifie que chaque fois qu'un joueur ou un groupe de joueurs souhaite se rendre dans un donjon instancié, un nouveau monde est généré juste pour eux.

Les donjons instanciés se comportent comme les donjons instanciés que vous pourriez trouver dans votre MMO préféré. Ils ont généralement trois niveaux de difficulté, les récompenses étant meilleures à mesure que la difficulté augmente. Ils permettent aux joueurs d'endosser les rôles de Tank ou de DPS en équipant le butin qui est lâché dans le donjon instancié. Les monstres utiliseront également différents ensembles de pouvoirs en fonction de la difficulté choisie lorsque les joueurs ont lancé l'instance. Tous les monstres tués dans une instance ne réapparaîtront pas pendant la durée de cette instance.

Tout butin qui est lâché dans un donjon instancié utilise le système de cupidité ou de besoin, ce qui signifie que les joueurs peuvent voter sur l'objet lâché. Comme mentionné précédemment, le butin du donjon instancié est spécialement conçu pour être soit axé sur la défense (tank), soit axé sur l'attaque (DPS).

### Raids

Contenu instancié : à venir

## Thème

La chose la plus importante à propos de toute structure EliteMobs est le thème. Les thèmes influencent la conception de la construction, son contenu, son histoire et ses boss.

Par exemple, vous pouvez voir [Le pôle Nord ici](https://magmaguy.itch.io/elitemobs-the-north-pole). Il avait pour concept de placer des boss liés à Noël dans une boule à neige, ce qui a donné un lieu visuellement frappant et mécaniquement intéressant.

Voici un autre exemple, [L'oasis](https://magmaguy.itch.io/elitemobs-oasis). Il s'agissait de créer un lieu de l'Égypte ancienne envahi par les morts-vivants et les momies, et c'est l'une des constructions les plus populaires d'EliteMobs.

## Lieux de combat

Les lieux de combat doivent éviter de créer un terrain facilement exploitable. Cela signifie éviter de créer des piliers sur lesquels les joueurs peuvent grimper pour être en sécurité, des décorations qui peuvent être utilisées pour tromper l'IA et d'autres obstacles de ce type. Certains exploits seront toujours trouvés, et ce n'est pas très grave, mais les emplacements des boss devraient être moins susceptibles de souffrir de ces exploits.

La zone de combat idéale pour les boss est relativement plate, dégagée, d'environ 30 blocs de rayon et peut contenir des piliers ou d'autres éléments de la carte derrière lesquels les joueurs doivent se cacher pour éviter certaines mécaniques de boss.

Les couloirs doivent viser à faire au moins 5 blocs de large s'ils sont censés contenir des ennemis supplémentaires. Les arènes de mini-boss peuvent avoir un rayon d'environ 15 blocs, en fonction de leurs pouvoirs/thèmes.

Veuillez noter qu'il s'agit de dimensions minimales. Il n'y a aucun problème à les dépasser.

N'oubliez pas que vous pouvez sceller ou modifier les blocs d'environnement en utilisant [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block) ou [Blocs transitoires]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). C'est un excellent moyen de s'assurer que les joueurs ne peuvent progresser qu'une fois qu'ils ont vaincu un certain monstre.

## Concevoir pour EliteMobs

Mieux vous connaîtrez EliteMobs, meilleur sera le contenu que vous créerez pour celui-ci. Voici une liste des fonctionnalités d'EliteMobs qui vous aideront à trouver des idées intéressantes pour votre donjon :

- [Boss régionaux]($language$/elitemobs/creating_world_bosses.md) : chaque créature des donjons est un boss régional, ce qui signifie qu'elle a une laisse (si elle dépasse une certaine distance, elle est ramenée à son point d'apparition) et réapparaît après un certain temps.
- [Créer des boss]($language$/elitemobs/creating_bosses.md) : cela vous montrera tout ce qu'un boss peut faire et être, comme les déguisements, les multiplicateurs de santé, s'il peut se déplacer et à quelle vitesse, les railleries, etc. !
- [EliteScript]($language$/elitemobs/creating_powers.md) : EliteScript est l'outil le plus puissant à votre disposition lorsqu'il s'agit de créer des rencontres inoubliables où seule votre imagination est la limite.
- [Coffres au trésor]($language$/elitemobs/creating_treasure_chests.md) : ceux-ci peuvent contenir des objets ou même se transformer en ennemis
- [Phases de boss]($language$/elitemobs/creating_boss_phases.md) : les boss peuvent avoir des phases. Ce système est très puissant car les boss peuvent se transformer en n'importe quoi entre les phases, y compris différents types d'entités, différents déguisements, différents modèles personnalisés, etc.
- [Blocs transitoires]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) : ce sont des blocs qui sont placés lorsqu'un boss apparaît ou meurt. Ils peuvent également être générés et supprimés lorsqu'un boss change de phase ! Ceux-ci peuvent être utilisés pour créer des arènes dynamiques très intéressantes.
- [Trous de ver]($language$/elitemobs/creating_wormholes.md) : des portails sympas qui peuvent téléporter les joueurs vers d'autres endroits.

## Conception de rencontre

La conception des rencontres doit être une priorité lors de la conception de la zone de combat. Idéalement, vous auriez une idée des pouvoirs que vous souhaitez utiliser, ou au moins du thème que les pouvoirs devraient avoir : quelque chose comme le feu, la foudre, la glace, les renforts ou tout autre chose qui correspond aux pouvoirs d'EliteMobs. Une fois que vous savez quels pouvoirs vous voulez, vous pouvez concevoir la zone de combat en conséquence.

Si les boss ont un pouvoir qui oblige à s'enfuir, la zone doit être suffisamment grande pour accueillir cela. S'il y a un pouvoir où vous devez vous cacher derrière un obstacle, la structure a besoin de ce type d'obstacle. Il y a beaucoup de détails qui peuvent entrer dans la construction de ces arènes, et plus vous en tenez compte, meilleure sera la rencontre.

## Des questions ?

[Posez-les sur Discord à tout moment !] (https://discord.gg/9f5QSka)

