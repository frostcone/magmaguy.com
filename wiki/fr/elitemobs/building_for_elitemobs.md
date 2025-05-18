Voici la traduction en français, en conservant le formatage markdown :

# Créer pour EliteMobs

La page wiki suivante vous aide à comprendre le processus requis pour créer des donjons et des arènes EliteMobs.

Vocabulaire :

- "Boss" - Grande rencontre, destinée à être combattue par beaucoup de personnes
- "Miniboss" - Rencontre plus petite, généralement pouvant être tuée par 1 joueur
- "Fodder" (Chair à canon) - Mobs relativement faciles à tuer

## Comprendre les catégories de donjons EliteMobs

### Repaires (Lairs)

Catégorie de taille la plus petite

Les repaires sont généralement des structures de 50x50 blocs en une seule construction, distribuées comme des mondes, et contiennent généralement une grande rencontre de boss, bien que certains puissent également contenir un miniboss et de la chair à canon.

### Mini-donjons (Minidungeons)

Catégorie de taille moyenne

Les mini-donjons sont plus proches de structures de 100x100 ou 150x150 blocs, souvent avec plusieurs structures ou des structures avec plusieurs sections. Ceux-ci ont 1 boss, et généralement au moins 3 minibosses ou plus. Ils ont aussi beaucoup de chair à canon.

### Aventures (Adventures)

Les aventures sont des cartes d'aventure entières, généralement non mesurées en blocs. Celles-ci ont la taille d'une ville ou même plus grandes. Elles ont 1 boss et plus de 10 minibosses, et des dizaines de chair à canon uniques qui s'élèvent généralement à des centaines ou des milliers au total sur la carte.

### Arènes (Arenas)

Les arènes sont des défis d'arène de survie basés sur des vagues dans EliteMobs. Celles-ci sont généralement de 100x100 blocs. Elles peuvent avoir n'importe quel nombre de vagues, mais il n'est généralement pas recommandé d'aller au-delà de 50.

### Donjons Instanciés (Instanced Dungeons)

Les donjons instanciés sont similaires aux mini-donjons, sauf qu'ils sont instanciés. Cela signifie que chaque fois qu'un joueur ou un groupe de joueurs souhaite se rendre dans un donjon instancié, un nouveau monde est généré juste pour eux.

Les donjons instanciés se comportent beaucoup comme les donjons instanciés que vous pourriez trouver dans votre MMO préféré. Ils ont généralement trois niveaux de difficulté, les récompenses étant meilleures à mesure que la difficulté augmente. Ils permettent aux joueurs d'assumer les rôles de Tank ou de DPS en s'équipant du butin qui tombe dans le donjon instancié. Les mobs utiliseront également différents ensembles de pouvoirs en fonction de la difficulté choisie lorsque les joueurs ont lancé l'instance. Aucun mob tué dans une instance ne réapparaîtra pendant la durée de cette instance.

Tout butin qui tombe dans un donjon instancié utilise le système de cupidité ou de besoin (greed or need), ce qui signifie que les joueurs peuvent voter sur l'objet tombé. Comme mentionné précédemment, le butin des donjons instanciés est spécialement conçu pour être soit orienté défense (tank), soit orienté attaque (DPS).

### Raids

Contenu instancié - bientôt disponible

## Thème (Theming)

La chose la plus importante concernant toute structure EliteMobs est le thème. Les thèmes influencent la conception de la construction, son contenu, son lore et ses boss.

À titre d'exemple, vous pouvez voir [Le Pôle Nord ici](https://magmaguy.itch.io/elitemobs-the-north-pole). Il avait le concept de placer des boss liés à Noël dans une boule à neige, ce qui a donné lieu à un lieu visuellement frappant et mécaniquement intéressant.

Voici un autre exemple, [L'Oasis](https://magmaguy.itch.io/elitemobs-oasis). Il s'agissait de créer un lieu de l'Égypte ancienne envahi par les morts-vivants et les momies, et c'est l'une des constructions les plus populaires dans EliteMobs.

## Lieux de combat (Combat locations)

Les lieux de combat doivent éviter de créer un terrain facilement exploitable. Cela signifie éviter de créer des piliers sur lesquels les joueurs peuvent grimper pour être en sécurité, des décorations qui peuvent être utilisées pour "cheeser" l'IA et d'autres obstacles de ce type. Certaines exploitations seront toujours trouvées, et ce n'est pas trop important, mais les lieux de boss devraient être moins sujets à ces exploitations.

La zone de combat idéale pour un boss est relativement plate, dégagée, d'environ 30 blocs de rayon et peut contenir quelques piliers ou d'autres éléments de carte derrière lesquels les joueurs doivent se cacher pour gérer certaines mécaniques de boss.

Les couloirs devraient viser à être d'au moins 5 blocs de large s'ils sont destinés à contenir des adds. Les arènes de miniboss peuvent avoir un rayon d'environ 15 blocs, selon les pouvoirs/le thème qu'ils ont.

Veuillez noter qu'il s'agit de dimensions minimales. Il n'y a pas vraiment de problème si vous dépassez.

Gardez à l'esprit que vous pouvez sceller ou modifier les blocs d'environnement soit en utilisant [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block), soit en utilisant les [Blocs Transitoires]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). C'est un excellent moyen de s'assurer que les joueurs ne peuvent progresser qu'après avoir vaincu un certain mob.

## Concevoir pour EliteMobs (Designing for EliteMobs)

Mieux vous connaissez EliteMobs, meilleur sera le contenu que vous créerez pour lui. Voici une liste de fonctionnalités d'EliteMobs qui vous aideront à trouver des idées intéressantes pour votre donjon :

- [Boss Régionaux]($language$/elitemobs/creating_world_bosses.md) - Chaque créature dans les donjons est un boss régional, ce qui signifie qu'elle a une laisse (si elle dépasse une certaine distance, elle est ramenée à son point d'apparition) et réapparaît selon un minuteur.
- [Créer des boss]($language$/elitemobs/creating_bosses.md) Cela vous montrera tout ce qu'un boss peut faire et être, comme des déguisements, des multiplicateurs de santé, s'il peut bouger et à quelle vitesse, des provocations et plus encore !
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript est l'outil le plus puissant à votre disposition lorsqu'il s'agit de créer des rencontres inoubliables où seule votre imagination est la limite.
- [Coffres au trésor]($language$/elitemobs/creating_treasure_chests.md) Ceux-ci peuvent contenir des objets ou même se transformer en ennemis.
- [Phases de boss]($language$/elitemobs/creating_boss_phases.md) - Les boss peuvent avoir des phases. Ce système est très puissant car les boss peuvent se transformer en n'importe quoi entre les phases, y compris différents types d'entités, différents déguisements, différents modèles personnalisés, etc.
- [Blocs Transitoires]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) Ce sont des blocs qui sont placés lorsqu'un boss apparaît ou meurt. Ils peuvent également être générés et retirés lorsqu'un boss change de phase ! Ceux-ci peuvent être utilisés pour créer des arènes dynamiques très intéressantes.
- [Trous de ver]($language$/elitemobs/creating_wormholes.md) - des portails sympas qui peuvent téléporter les joueurs vers d'autres lieux.

## Conception des rencontres (Encounter design)

La conception des rencontres devrait être une priorité lors de la conception de la zone de combat. Idéalement, vous auriez une idée des pouvoirs que vous souhaitez utiliser, ou du moins du thème des pouvoirs - quelque chose comme le feu, la foudre, la glace, les renforts, ou toute autre chose qui correspond aux pouvoirs d'EliteMobs. Une fois que vous savez quels pouvoirs vous voulez, vous pouvez concevoir la zone de combat en conséquence.

Si les boss ont un pouvoir qui nécessite de s'éloigner d'eux, la zone doit être suffisamment grande pour cela. S'il y a un pouvoir où vous devez vous cacher derrière un obstacle, la structure a besoin de ce type d'obstacle. Il y a beaucoup de détails qui peuvent entrer dans la construction de ces arènes, et plus vous en tenez compte, meilleure sera la rencontre.

## Modification du pack de ressources EliteMobs (Modifying the EliteMobs Resource Pack)

À partir de la version 1.21.4 de Minecraft et de la version 9.1.13 d'EliteMobs, le pack de ressources EliteMobs a été mis à jour pour s'aligner sur la nouvelle méthode de Minecraft pour l'utilisation de modèles personnalisés.

La structure mise à jour du pack de ressources EliteMobs est la suivante :

**elitemobs_resource_pack**
- **assets**
  - **elitemobs**
    - **items**
      - Ce répertoire contient des fichiers JSON qui définissent quels modèles personnalisés Minecraft peut utiliser. Les modèles réels sont stockés dans le dossier `models`.
      - Sous-répertoires :
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **models**
      - Ce dossier contient les fichiers de modèle réels sous forme de fichiers JSON.
      - Sous-répertoires :
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **textures**
      - Ce dossier stocke toutes les textures, y compris celles utilisées par les modèles.
      - Sous-répertoires :
        - **blocks**
        - **gui**
        - **items** (c'est ici que sont stockées les textures spécifiques aux modèles)
        - **primis_map**
        - **ui**
  - **minecraft**
    - **atlases**
    - **font**
    - **models**
      - **items** (contient des fichiers JSON qui spécifient quels objets dans Minecraft doivent utiliser des modèles personnalisés)
    - **sounds**
      - **custom** (stocke les fichiers sonores personnalisés)

---

Décortiquons la structure d'un fichier JSON dans le dossier *.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* et ce qu'il fait :

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Objectif :
Ce fichier JSON indique à Minecraft qu'il s'agit d'un modèle, spécifie le type de modèle et indique l'emplacement du fichier de modèle.

Champs clés :

`type: minecraft:model`
Ceci spécifie que le fichier représente un type de modèle.
`model: elitemobs:coins/coin1`
Ceci pointe vers l'emplacement du modèle dans le pack de ressources.

Détails du chemin :

`elitemobs:` indique à Minecraft de chercher dans le dossier elitemobs à l'intérieur du répertoire assets.
`coins/coin1` spécifie le sous-dossier et le nom du fichier de modèle.

Le chemin complet vers le fichier de modèle référencé est :
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Une bonne façon de tester si vos modèles personnalisés fonctionnent correctement est d'utiliser la commande suivante :

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Comment ça marche :
Cette commande vous donne une pomme qui utilise le modèle `elitemobs:coins/coin1`. Si le pack de ressources est correctement configuré, vous devriez voir le modèle de pièce personnalisé appliqué à l'objet pomme.

Tester votre propre modèle personnalisé :
Si vous avez ajouté votre propre modèle personnalisé au pack de ressources, suivez ces étapes pour le tester :

1. **Créer le JSON du modèle** :
   Placez votre fichier JSON dans le sous-dossier approprié à l'intérieur du répertoire `items`.
   Par exemple :
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Ajouter le fichier de modèle** :
   Ajoutez le fichier de modèle correspondant (`myawesomemodel.json`) au dossier `models` à l'intérieur du même sous-dossier.
   Par exemple :
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Ajouter la texture** :
   Ajoutez le fichier de texture pour le modèle dans le dossier `textures`.
   Par exemple :
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Une fois que tout est configuré, utilisez la commande ci-dessous pour tester votre modèle :

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Si tout a été fait correctement, vous recevrez une pomme dans votre main, et elle affichera votre modèle personnalisé au lieu du modèle de pomme par défaut.

## Des questions ?

[Posez vos questions sur Discord à tout moment !](https://discord.gg/9f5QSka)