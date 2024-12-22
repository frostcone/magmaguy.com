Bienvenue sur le wiki EliteMobs !

# Licence

Le code source d'EliteMobs est couvert par la licence [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), et ce wiki
est fourni sous la licence [CC0](https://choosealicense.com/licenses/cc0-1.0/).

N'hésitez pas à redistribuer et à modifier les informations contenues dans ce wiki.

# Versions

À partir de la version 9.0.0 d'EliteMobs, la seule version de Minecraft prise en charge est la 1.21 et les versions
supérieures.

Pour ceux qui recherchent une compatibilité avec les anciennes versions de Minecraft (1.19.4 - 1.20.4), veuillez
utiliser la version 8 d'EliteMobs.

**Remarque : aucune version d'EliteMobs ne prend en charge les versions 1.20.5 et 1.20.6 de Minecraft.**

# À quoi sert EliteMobs ?

EliteMobs a pour objectif d'étendre la phase finale de Minecraft en mettant en œuvre divers contenus liés aux boss.

Cela signifie :

- Des boss dynamiques (mobs à niveaux)
- Des boss personnalisés
- Des événements
- Des arènes
- Des donjons basés sur le monde
- Des donjons instanciés
- Des donjons aléatoires en monde ouvert (avec l'intégration de BetterStructures)
- Des objets personnalisés (objets/butin d'élite)
- ... et plus encore !

Le plugin ne vise pas à remplacer le contenu de Minecraft vanilla, mais plutôt à le compléter, permettant aux joueurs de
se retirer du contenu d'EliteMobs s'ils le souhaitent. Les objets d'EliteMobs n'affectent généralement pas le JcJ ou les
combats de Minecraft vanilla, car leurs bonus de dégâts et de défense ne s'appliquent que pendant les combats contre les
EliteMobs.

# Aperçu des fonctionnalités d'EliteMobs

Dans cette section, nous allons examiner certaines des **principales** fonctionnalités qu'EliteMobs a à offrir, ce
qu'elles sont et comment vous pouvez les désactiver. Pour une liste complète des fonctionnalités,
consultez [cette page]($language$/elitemobs/feature_list.md&section=feature-list).

Vous pouvez également consulter [cette]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) page pour
connaître la manière dont les joueurs sont censés interagir avec EliteMobs.

## Boss dynamiques

Les boss dynamiques sont l'une des principales fonctionnalités d'EliteMobs. Il remplace un pourcentage des spawns de
Minecraft vanilla par des spawns de mobs d'élite.

Les élites sont des mobs plus résistants conçus pour défier les joueurs et les récompenser par d'éventuels drops de
butin après leur défaite. Le niveau des élites est déterminé par la qualité de l'armure et de l'équipement porté par le
joueur. L'équipement normal de Minecraft a un niveau déterminé par la qualité du matériau, comme
expliqué [ici]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Cependant, au fur et à mesure que
les joueurs vainquent des élites et acquièrent un meilleur butin, ils finiront par obtenir des objets d'élite avec des
niveaux définis, ce qui permettra de prédire plus facilement les niveaux des élites qui apparaîtront.

Cela implique que les niveaux des joueurs sont déterminés par l'équipement qu'ils portent, tandis que les niveaux des
élites sont déterminés par les niveaux des joueurs.
Il n'y a pas de système d'expérience dans EliteMobs, toute la progression du niveau du joueur dépend de l'équipement.

Vous pouvez ajuster la difficulté des élites en modifiant les valeurs `damageToEliteMobMultiplierV2`
et `damageToPlayerMultiplierV2` dans *MobCombatSettings.yml*. Vous trouverez plus d'informations à ce
sujet [ici]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si vous souhaitez désactiver complètement cette fonctionnalité, vous pouvez le faire en définissant la
valeur `doNaturalEliteMobSpawning` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objets/Butin d'élite

EliteMobs propose des objets générés aléatoirement que l'on peut trouver dans les magasins ou qui peuvent être lâchés
par les élites. Il existe également des objets personnalisés que l'on trouve généralement dans les donjons et autres
contenus d'élite.

Les objets d'élite sont identiques aux objets vanilla, sauf qu'ils sont généralement équipés de bonus supplémentaires et
qu'ils sont plus puissants que tout ce que vous pouvez trouver dans Minecraft vanilla. Certains objets d'élite auront
des statistiques appelées **Tranchant d'élite** et **Défense d'élite**, ces statistiques ne s'appliqueront que lorsque
les joueurs combattent des élites et n'affecteront pas les mobs vanilla.

Les objets d'élite peuvent également avoir des enchantements,
des [Enchantements personnalisés]($language$/elitemobs/custom_enchantments_list.md) et des effets de potion.

Vous pouvez désactiver les objets d'élite en ouvrant *ItemSettings.yml* et en définissant la valeur `doEliteMobsLoot`
sur `false`. (Non recommandé, rend la progression du niveau MMORPG impossible).

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Événements

Les événements sont des rencontres uniques dans EliteMobs qui peuvent se déclencher de manière aléatoire en fonction
d'un minuteur ou d'actions spécifiques des joueurs, comme l'extraction d'un bloc ou l'abattage d'un arbre.

Ces rencontres présentent des élites personnalisées et uniques qui posent un plus grand défi et offrent un butin
précieux après leur défaite.

Les joueurs reçoivent des notifications dans le chat lorsqu'un événement se produit, avec la possibilité de suivre la
santé et l'emplacement de l'élite via un lien cliquable. Si l'élite n'est pas vaincue dans un certain délai, l'événement
se termine et l'élite disparaît.

Vous pouvez désactiver tous les événements en ouvrant events.yml et en définissant les valeurs `actionEventsEnabled`
et `timedEventsEnabled` sur `false`.

Si vous souhaitez désactiver des événements individuels, vous pouvez aller dans *~plugins\EliteMobs\customevents*. Vous
y trouverez des configurations pour chaque événement et vous pouvez désactiver n'importe quel événement en ouvrant sa
configuration et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilde des aventuriers

La guilde des aventuriers est un monde de hub supplémentaire que vous pouvez installer et c'est également un ensemble de
commandes que les joueurs peuvent utiliser.

Si le monde du hub n'est pas installé, les joueurs devront utiliser des commandes, sinon, l'exécution de commandes avec
le monde du hub installé téléportera les joueurs vers le monde du hub et ils pourront interagir avec les PNJ au lieu d'
avoir à taper des commandes.

Quelles commandes ? EliteMobs possède plusieurs commandes que les joueurs peuvent utiliser pour vendre et acheter des
objets, réparer des objets, enchanter des objets et plus encore. Apprenez-en plus sur les commandes que les joueurs
peuvent utiliser [ici]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Pour plus d'informations sur la guilde des aventuriers et sur la manière d'installer le monde du hub,
consultez [cette]($language$/elitemobs/adventurers_guild_world.md) page.

Vous pouvez désactiver le monde du hub en ouvrant *AdventurersGuild.yml* et en définissant `guildHubIsEnabledv2`
sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Niveau/Rang de guilde

Au fur et à mesure que les joueurs progressent et acquièrent de meilleurs objets, ils finiront par atteindre une limite
et les mobs cesseront de lâcher des objets de niveau supérieur, c'est ce qu'on appelle le limiteur de butin de niveau de
guilde.

Le limiteur de butin de niveau de guilde restreint le butin le plus élevé que les joueurs peuvent obtenir en fonction de
leur niveau de guilde et applique des limitations par défaut des objets de niveau 1 à 10, avec les niveaux de mobs
correspondants. Les niveaux de prestige débloquent des niveaux supérieurs, permettant d'accéder à un butin supérieur et
à des mobs plus coriaces, assurant un gameplay équilibré.

Ce système, combiné à l'enchantement de liaison d'âme, atténue les problèmes de powerleveling, maintient l'équilibre du
serveur et favorise l'attachement des joueurs à leur butin acquis. Vous pouvez en savoir plus sur le niveau de
guilde [ici]($language$/elitemobs/guild_tier_loot_limiter.md).

Tous les paramètres du niveau de guilde peuvent être ajustés et se trouvent dans *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arènes

Les arènes sont des défis basés sur des vagues où les joueurs peuvent s'engager dans des combats. Un ou plusieurs
joueurs peuvent rejoindre une arène et affronter des vagues d'ennemis de plus en plus difficiles, les récompenses
s'améliorant au fur et à mesure que le défi progresse.

Après avoir installé le monde du hub de la guilde des aventuriers, les joueurs ont accès à l'arène de la Ligue du bois,
une arène gratuite accessible par interaction avec un PNJ dans le monde du hub ou via le menu */em*.

Vous pouvez obtenir des arènes supplémentaires en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant
sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver les arènes en allant dans *~plugins\EliteMobs\customarenas*
puis en ouvrant la configuration de l'arène, par exemple *wood_league.yml*, puis en trouvant la valeur `isEnabled` et en
la définissant sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Donjons mondiaux

Les donjons mondiaux sont des contenus personnalisés supplémentaires que vous pouvez télécharger pour EliteMobs. Les
donjons ont généralement des boss d'élite personnalisés, des mondes personnalisés, du butin personnalisé et des pouvoirs
de boss personnalisés.

Tous les donjons mondiaux sont des donjons qui sont situés dans leur propre monde, ce qui signifie que lorsque les
joueurs y accèdent, ils sont téléportés dans un monde qui ne contient rien d'autre que ce donjon.

Il existe plusieurs types de donjons mondiaux. Pour en savoir plus sur les types,
cliquez [ici]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Tous les donjons mondiaux ont un niveau défini et tous les joueurs qui tentent les donjons doivent être à peu près à ce
niveau pour une expérience optimale.

Vous pouvez obtenir des donjons en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant
sur [Patreon](https://www.patreon.com/magmaguy). Il existe plusieurs donjons gratuits que vous pouvez
télécharger [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver des donjons individuels en allant dans *~plugins\EliteMobs\content_packages* et en ouvrant la
configuration du donjon que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Donjons instanciés

Les donjons instanciés diffèrent des donjons mondiaux de plusieurs manières. Ils sont instanciés, ce qui signifie qu'un
nouveau monde est créé dynamiquement à partir d'un plan, offrant aux joueurs et à leurs amis une expérience de donjon
privée similaire à celles que l'on trouve dans les MMO.

Les donjons instanciés offrent différentes difficultés avec des pouvoirs de boss uniques, une santé accrue et un butin
supérieur au fur et à mesure que la difficulté augmente. Ils introduisent également des rôles, permettant aux joueurs
d'adopter des rôles de tank ou de DPS en fonction de leur équipement (l'équipement spécifique à un rôle est exclusif aux
donjons instanciés). Pour en savoir plus sur le fonctionnement de la difficulté,
cliquez [ici]($language$/elitemobs/instanced_dungeon_difficulty.md).

De plus, les joueurs peuvent se ressusciter mutuellement dans les donjons instanciés, ce qui leur permet de reprendre
rapidement le combat s'ils agissent assez vite.

Vous pouvez obtenir des donjons instanciés en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant
sur [Patreon](https://www.patreon.com/magmaguy). Il existe des donjons instanciés gratuits que vous pouvez
télécharger [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver des donjons individuels en allant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la
configuration du donjon que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventures

Les aventures représentent le contenu supplémentaire le plus vaste disponible pour EliteMobs, avec un vaste monde
comprenant un scénario captivant et une multitude de quêtes à accomplir pour les joueurs.

Avec des centaines de boss personnalisés, de pouvoirs et d'objets, les aventures offrent une expérience de jeu
immersive. Les quêtes dans les aventures fonctionnent de la même manière que dans les MMO traditionnels, en chargeant
les joueurs d'objectifs tels que vaincre des mobs, localiser des objets, interagir avec des PNJ ou toute combinaison de
ces éléments.

Les aventures sont si importantes qu'elles comportent même d'autres sous-donjons ou sous-arènes.

Bien que les aventures recommandent généralement une fourchette de niveaux définie pour les joueurs, il est conseillé
aux joueurs de commencer leur aventure à l'extrémité inférieure de l'échelle des niveaux pour un plaisir optimal.

Vous pouvez obtenir des aventures en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant
sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver des aventures individuelles en allant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la
configuration de l'aventure que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`. Les
aventures peuvent avoir des sous-donjons et des sous-arènes supplémentaires, veillez donc à les désactiver également si
vous désactivez une aventure.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Téléportations par trou de ver

EliteMobs propose également de simples téléporteurs d'un point A à un point B appelés trous de ver. Vous les verrez
principalement utilisés dans le monde du hub de la guilde des aventuriers pour téléporter les joueurs de là vers un
donjon ou vers le spawn du serveur.

Ils ont généralement la forme d'un hexagone, d'un cube ou d'un diamant fait de particules. Ces particules peuvent
parfois provoquer un décalage pour les clients de Bedrock, vous pouvez donc désactiver les effets de particules en
ouvrant *Wormholes.yml* et en définissant `noParticlesMode` sur `true`.

Vous pouvez créer vos propres trous de ver et les utiliser comme vous le souhaitez.
Cliquez [ici]($language$/elitemobs/creating_wormholes.md) pour savoir comment faire.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenu personnalisé

EliteMobs vous offre également la possibilité de créer votre propre contenu, notamment
des [boss]($language$/elitemobs/creating_bosses.md), des [donjons]($language$/elitemobs/dungeon_packager.md),
des [pouvoirs]($language$/elitemobs/creating_powers.md), des [PNJ]($language$/elitemobs/creating_npcs.md),
des [quêtes]($language$/elitemobs/creating_quests.md), des [arènes]($language$/elitemobs/creating_arenas.md), et bien
plus encore ! Vous trouverez des guides pour la création d'autres types de contenu que ceux énumérés ci-dessus dans le
menu de la barre latérale du wiki.

Pour une expérience de création de contenu plus simple et efficace, nous vous recommandons d'utiliser la WebApp. Cet
outil vous permet de générer des fichiers de configuration prêts à l'emploi sans avoir à parcourir longuement le wiki
pour vous assurer de leur exactitude, en particulier si vous envisagez de créer des pouvoirs de boss EliteScript.
Accédez à la [WebApp ici](https://magmaguy.com/webapp/webapp.html).

# Pour les administrateurs et les propriétaires de serveurs

Ce plugin est conçu pour les serveurs de survie et de type survie (tels que Skyblock, Skywars et les variantes de survie
fortement modifiées).

Le plugin est conçu pour être facilement utilisable en faisant simplement glisser et en déposant le jar du plugin dans
le serveur. Les paramètres par défaut sont ceux que j'utilise sur mes propres serveurs et sont susceptibles d'être
modifiés au fil du temps.

**Cependant !** La personnalisation a été une priorité absolue tout au long du processus de développement d'EliteMobs.
Presque tous les aspects du plugin peuvent être traduits, personnalisés, désactivés ou modifiés.

# Pour les autres développeurs

Malgré la nature GPLV3 et open-source de ce projet, je ne recherche ni n'accepterai aucun ajout ou modification de code
pour le moment. J'accueille avec plaisir les forks du plugin et je serais ravi de voir ce que vous pourriez en faire ;
cependant, il s'agit de mon premier projet de programmation de grande envergure et il s'agit donc également d'une
expérience d'apprentissage.

**Cependant !** Ne prenez pas cela comme si je prétendais être au-delà de toute critique ou que je n'écouterais pas les
retours d'expérience - bien au contraire, j'adore quand les gens soulignent de meilleures façons d'accomplir les choses
que j'ai faites dans le plugin. Je souhaite que ce projet soit quelque chose que j'ai écrit de bout en bout, sans aucun
extrait de code que je ne connaisse pas ou que je ne comprenne pas.
