# Construire pour EliteMobs

La page wiki suivante vous aide à comprendre le processus nécessaire pour créer des donjons et des arènes EliteMobs.

Vocabulaire :

- "Boss" - Rencontre importante, conçue pour être combattue par beaucoup de personnes
- "Mini-boss" - Rencontre plus petite, généralement capable d'être tuée par 1 joueur
- "Chair à canon" - Mobs relativement faciles à tuer

## Comprendre les catégories de donjons EliteMobs

### Repaires

Catégorie de plus petite taille

Les repaires sont généralement des structures uniques de 50x50, distribuées en tant que mondes, et contiennent
généralement une grosse rencontre avec un boss, bien que certaines puissent également contenir un mini-boss et de la
chair à canon.

### Mini-donjons

Catégorie de taille moyenne

Les mini-donjons sont plus proches des structures de 100x100 ou 150x150, souvent avec plusieurs structures ou des
structures avec plusieurs sections. Celles-ci ont 1 boss, et généralement au moins 3 mini-boss ou plus. Ils ont
également beaucoup de chair à canon.

### Aventures

Les aventures sont des cartes d'aventure entières, généralement non mesurées en blocs. Celles-ci sont de la taille d'une
ville, voire plus grandes. Elles ont 1 boss et plus de 10 mini-boss, et des dizaines de chair à canon uniques, ce qui
représente généralement des centaines ou des milliers au total sur la carte.

### Arènes

Les arènes sont des défis de survie en arène basés sur des vagues dans EliteMobs. Elles font généralement 100x100. Elles
peuvent avoir n'importe quel nombre de vagues, mais il n'est généralement pas recommandé de dépasser 50.

### Donjons Instanciés

Les donjons instanciés sont similaires aux mini-donjons, sauf qu'ils sont instanciés. Ce qui signifie que chaque fois
qu'un joueur ou un groupe de joueurs souhaite se rendre dans un donjon instancié, un nouveau monde est généré
spécialement pour eux.

Les donjons instanciés se comportent beaucoup comme les donjons instanciés que vous pourriez trouver dans votre MMO
préféré. Ils ont généralement trois niveaux de difficulté, les récompenses étant meilleures à mesure que la difficulté
augmente. Ils permettent aux joueurs d'assumer les rôles de Tank ou de DPS en s'équipant de butin qui est lâché à
l'intérieur du donjon instancié. Les mobs utiliseront également différents ensembles de pouvoirs en fonction de la
difficulté choisie lorsque les joueurs ont lancé l'instance. Tous les mobs qui sont tués dans une instance ne
réapparaîtront pas pendant la durée de cette instance.

Tout le butin qui est lâché dans un donjon instancié utilise le système de cupidité ou de besoin, ce qui signifie que
les joueurs peuvent voter sur l'objet lâché. Comme mentionné précédemment, le butin des donjons instanciés est
spécialement conçu pour être orienté vers la défense (tank) ou l'offensive (DPS).

### Raids

Contenu instancié - bientôt disponible

## Thèmes

La chose la plus importante concernant toute structure EliteMobs est le thème. Les thèmes influencent la conception de
la construction, son contenu, son histoire et ses boss.

Par exemple, vous pouvez voir [Le pôle Nord ici](https://magmaguy.itch.io/elitemobs-the-north-pole). Il avait le concept
de mettre des boss liés à Noël dans une boule à neige, ce qui a donné un lieu visuellement frappant et mécaniquement
intéressant.

Voici un autre exemple, [L'oasis](https://magmaguy.itch.io/elitemobs-oasis). Il s'agissait de créer un lieu de l'Égypte
ancienne envahi par les morts-vivants et les momies, et c'est l'une des constructions les plus populaires d'EliteMobs.

## Lieux de combat

Les lieux de combat doivent éviter de créer un terrain facilement exploitable. Cela signifie qu'il faut éviter de créer
des piliers sur lesquels les joueurs peuvent grimper pour être en sécurité, des décorations qui peuvent être utilisées
pour tricher l'IA et d'autres obstacles de ce type. Certains exploits seront toujours trouvés, et ce n'est pas trop
important, mais les lieux des boss devraient être moins susceptibles de souffrir de ces exploits.

La zone de combat idéale pour les boss est relativement plate, dégagée, d'environ 30 blocs de rayon et peut contenir des
piliers ou d'autres éléments de la carte derrière lesquels les joueurs doivent se cacher pour exécuter certaines
mécaniques de boss.

Les couloirs doivent avoir une largeur d'au moins 5 blocs s'ils sont censés avoir des adds. Les arènes de mini-boss
peuvent avoir un rayon d'environ 15 blocs, en fonction des pouvoirs/thèmes qu'ils ont.

Veuillez noter que ce sont des dimensions minimales. Il n'y a pas vraiment de problème si vous les dépassez.

Gardez à l'esprit que vous pouvez sceller ou modifier les blocs de l'environnement en
utilisant [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
ou [Blocs transitifs]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates).
C'est un excellent moyen de s'assurer que les joueurs ne peuvent progresser davantage qu'une fois qu'ils ont vaincu un
certain mob.

## Conception pour EliteMobs

Mieux vous connaissez EliteMobs, meilleur sera le contenu que vous créez pour celui-ci. Voici une liste des
fonctionnalités d'EliteMobs qui vous aideront à trouver des idées intéressantes pour votre donjon :

- [Boss régionaux]($language$/elitemobs/creating_world_bosses.md) - Chaque créature dans les donjons est un boss
  régional, ce qui signifie qu'elles ont une laisse (si elles dépassent une certaine distance, elles sont ramenées à
  leur point d'apparition) et réapparaissent selon un minuteur.
- [Création de boss]($language$/elitemobs/creating_bosses.md) Cela vous montrera tout ce qu'un boss peut faire et être,
  comme les déguisements, les multiplicateurs de santé, s'il peut se déplacer et à quelle vitesse, les provocations et
  plus encore !
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript est l'outil le plus puissant à votre disposition
  lorsqu'il s'agit de créer des rencontres inoubliables où seule votre imagination est la limite.
- [Coffres aux trésors]($language$/elitemobs/creating_treasure_chests.md) Ceux-ci peuvent contenir des objets ou même se
  transformer en ennemis
- [Phases de boss]($language$/elitemobs/creating_boss_phases.md) - Les boss peuvent avoir des phases. Ce système est
  très puissant car les boss peuvent se transformer en n'importe quoi entre les phases, y compris différents types
  d'entités, différents déguisements, différents modèles personnalisés, etc.
- [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
  Ce sont des blocs qui sont placés lorsqu'un boss apparaît ou meurt. Ils peuvent également être apparus et supprimés
  lorsqu'un boss change de phase ! Ils peuvent être utilisés pour créer des arènes dynamiques très intéressantes.
- [Trous de ver]($language$/elitemobs/creating_wormholes.md) - des portails sympas qui peuvent téléporter les joueurs
  vers d'autres endroits.

## Conception des rencontres

La conception des rencontres doit être une priorité lors de la conception de la zone de combat. Idéalement, vous auriez
une idée des pouvoirs que vous voulez utiliser, ou au moins du thème des pouvoirs - quelque chose comme le feu, ou
l'éclairage, ou la glace, ou les renforts, ou toute autre chose qui correspond aux pouvoirs d'EliteMobs. Une fois que
vous savez quels sont les pouvoirs que vous voulez, vous pouvez concevoir la zone de combat en conséquence.

Si les boss ont un pouvoir qui nécessite de s'enfuir d'eux, la zone doit être suffisamment grande pour l'accommoder.
S'il y a un pouvoir où vous devez vous cacher derrière un obstacle, la structure a besoin de ce type d'obstacle. Il y a
beaucoup de détails qui peuvent entrer dans la construction de ces arènes, et plus vous en tenez compte, meilleure sera
la rencontre.

## Modification du pack de ressources EliteMobs

À partir de la version 1.21.4 de Minecraft et de la version 9.1.13 d'EliteMobs, le pack de ressources EliteMobs a été
mis à jour pour s'aligner sur la nouvelle méthode de Minecraft d'utilisation de modèles personnalisés.

La structure mise à jour du pack de ressources EliteMobs est la suivante:

**elitemobs_resource_pack**
- **assets**
    - **elitemobs**
        - **items**
            - Ce répertoire contient des fichiers JSON qui définissent quels modèles personnalisés Minecraft peut
              utiliser. Les modèles réels sont stockés dans le dossier `models`.
            - Sous-répertoires:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **models**
            - Ce dossier contient les fichiers de modèles réels sous forme de fichiers JSON.
            - Sous-répertoires:
                - **coins**
                - **equipment**
                - **primis_map**
                - **ui**
        - **textures**
            - Ce dossier stocke toutes les textures, y compris celles utilisées par les modèles.
            - Sous-répertoires:
                - **blocks**
                - **gui**
                - **items** (c'est là que sont stockées les textures spécifiques aux modèles)
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items** (contient des fichiers JSON qui spécifient quels éléments de Minecraft doivent utiliser des
              modèles personnalisés)
        - **sounds**
            - **custom** (stocke les fichiers sonores personnalisés)

---

Voyons comment un fichier JSON dans le dossier *
.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* est structuré et ce qu'il fait:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Objectif:
Ce fichier JSON indique à Minecraft qu'il s'agit d'un modèle, spécifie le type de modèle et indique l'emplacement du
fichier de modèle.

Champs clés:

`type: minecraft:model`
Cela indique que le fichier représente un type de modèle.
`model: elitemobs:coins/coin1`
Cela pointe vers l'emplacement du modèle dans le pack de ressources.

Détails du chemin d'accès:

`elitemobs:` indique à Minecraft de rechercher dans le dossier elitemobs dans le répertoire des ressources.
`coins/coin1` spécifie le sous-dossier et le nom du fichier de modèle.

Le chemin d'accès complet au fichier de modèle référencé est:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Un bon moyen de vérifier si vos modèles personnalisés fonctionnent correctement consiste à utiliser la commande
suivante:

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Fonctionnement:
Cette commande vous donne une pomme qui utilise le modèle `elitemobs:coins/coin1`. Si le pack de ressources est
configuré correctement, vous devriez voir le modèle de pièce personnalisé appliqué à l'élément pomme.

Tester votre propre modèle personnalisé:
Si vous avez ajouté votre propre modèle personnalisé au pack de ressources, suivez ces étapes pour le tester:

1. **Créer le JSON du modèle**:
   Placez votre fichier JSON dans le sous-dossier approprié du répertoire `items`.
   Par exemple:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Ajouter le fichier de modèle**:
   Ajoutez le fichier de modèle correspondant (`myawesomemodel.json`) dans le dossier `models` du même sous-dossier.
   Par exemple:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Ajouter la texture**:
   Ajoutez le fichier de texture du modèle dans le dossier `textures`.
   Par exemple:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Une fois que tout est configuré, utilisez la commande ci-dessous pour tester votre modèle:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Si tout a été fait correctement, vous recevrez une pomme dans votre main et elle affichera votre modèle personnalisé au
lieu du modèle de pomme par défaut.

## Questions ?

[Posez vos questions sur Discord à tout moment !](https://discord.gg/9f5QSka)
