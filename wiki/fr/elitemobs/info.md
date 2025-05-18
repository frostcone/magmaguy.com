Bienvenue sur le wiki d'EliteMobs !

# Licence

Le code source d'EliteMobs est couvert par la licence [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), et ce wiki est fourni sous la [licence CC0](https://choosealicense.com/licenses/cc0-1.0/).

N'hésitez pas à redistribuer et modifier les informations de ce wiki.

# Versions

À partir de la version 9.0.0 d'EliteMobs, la seule version de Minecraft prise en charge est la 1.21 et supérieure.

Pour ceux qui recherchent la compatibilité avec les anciennes versions de Minecraft (1.19.4 - 1.20.4), veuillez utiliser la version 8 d'EliteMobs.

**Note : Aucune version d'EliteMobs ne prend en charge les versions 1.20.5 et 1.20.6 de Minecraft.**

# À quoi sert EliteMobs ?

EliteMobs vise à étendre le contenu de fin de jeu de Minecraft en implémentant divers contenus liés aux boss.

Cela signifie :
- Boss Dynamiques (Mobs Nivelés)
- Boss Personnalisés
- Événements
- Arènes
- Donjons Basés sur le Monde
- Donjons Instanciés
- Donjons Aléatoires en Monde Ouvert (avec intégration BetterStructures)
- Objets Personnalisés (Objets/Butin d'Élite)
- ... et plus encore !

Le plugin ne vise pas à remplacer le contenu vanilla de Minecraft, mais plutôt à le compléter, permettant aux joueurs de se désengager du contenu d'EliteMobs s'ils le souhaitent. Les objets d'EliteMobs n'affectent généralement pas le PvP ou le combat vanilla de Minecraft, car leurs bonus de dégâts et de défense ne s'appliquent que lors des combats contre les EliteMobs.

# Aperçu des Fonctionnalités d'EliteMobs

Dans cette section, nous allons examiner certaines des fonctionnalités **majeures** qu'EliteMobs a à offrir, ce qu'elles sont et comment vous pouvez les désactiver. Pour une liste complète des fonctionnalités, consultez [cette page]($language$/elitemobs/feature_list.md&section=feature-list).

Vous pouvez également consulter [cette page]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) pour découvrir la manière dont les joueurs sont censés interagir avec EliteMobs.

## Boss Dynamiques

Les Boss Dynamiques sont l'une des principales fonctionnalités d'EliteMobs. Il remplace un pourcentage des apparitions vanilla de Minecraft par des apparitions d'Elite Mobs.

Les Élites sont des mobs plus résistants conçus pour défier les joueurs et les récompenser avec d'éventuels butins à leur défaite. Le niveau des Élites est déterminé par la qualité de l'armure et de l'équipement portés par le joueur. L'équipement vanilla de Minecraft a un niveau déterminé par la qualité du matériau, comme expliqué [ici]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Cependant, à mesure que les joueurs vainquent des Élites et acquièrent un meilleur butin, ils finiront par obtenir des objets d'Élite avec des niveaux définis, ce qui facilitera la prédiction des niveaux des Élites qui apparaîtront.

Cela implique que les niveaux des joueurs sont déterminés par l'équipement qu'ils portent, tandis que les niveaux des Élites sont déterminés par les niveaux des joueurs.
Il n'y a pas de système d'expérience dans EliteMobs, toute la progression du niveau du joueur dépend de l'équipement.

Vous pouvez ajuster la difficulté des élites en modifiant les valeurs `damageToEliteMobMultiplierV2` et `damageToPlayerMultiplierV2` dans *MobCombatSettings.yml*. Plus d'informations à ce sujet peuvent être trouvées [ici]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si vous souhaitez désactiver entièrement cette fonctionnalité, vous pouvez le faire en définissant la valeur `doNaturalEliteMobSpawning` sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objets/Butin d'Élite

EliteMobs propose des objets générés aléatoirement qui peuvent être trouvés dans les boutiques ou être lâchés par les Élites. Il existe également des objets personnalisés que l'on trouve généralement dans les donjons et autres contenus d'Élite.

Les objets d'Élite sont comme les objets vanilla, sauf qu'ils sont généralement équipés de bonus supplémentaires et sont plus puissants que tout ce que vous pouvez trouver dans Minecraft vanilla. Certains objets d'Élite auront des statistiques appelées **Tranchant d'Élite** et **Défense d'Élite**, ces statistiques ne s'appliqueront que lorsque les joueurs combattent des Élites et n'affectent pas les mobs vanilla.

Les objets d'Élite peuvent également avoir des enchantements, des [Enchantements Personnalisés]($language$/elitemobs/custom_enchantments_list.md) et des effets de potion.

Vous pouvez désactiver les objets d'Élite en ouvrant *ItemSettings.yml* et en définissant la valeur `doEliteMobsLoot` sur `false`. (Non recommandé, rend la progression de niveau MMORPG impossible.)

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Événements

Les Événements sont des rencontres uniques dans EliteMobs qui peuvent se déclencher aléatoirement en fonction d'un minuteur ou d'actions spécifiques du joueur, comme miner un bloc ou couper un arbre.

Ces rencontres mettent en scène des Élites personnalisées et uniques qui représentent un plus grand défi et offrent un butin précieux à leur défaite.

Les joueurs reçoivent des notifications dans le chat lorsqu'un événement se produit, avec la possibilité de suivre la santé et l'emplacement de l'Élite via un lien cliquable. Si l'Élite n'est pas vaincue dans un certain délai, l'événement se termine et l'Élite disparaît.

Vous pouvez désactiver tous les événements en ouvrant events.yml et en définissant les valeurs `actionEventsEnabled` et `timedEventsEnabled` sur `false`.

Si vous souhaitez désactiver des événements individuels, vous pouvez aller dans *~plugins\EliteMobs\customevents*. Vous y trouverez les configurations pour chaque événement et vous pourrez désactiver n'importe quel événement en ouvrant sa configuration et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilde des Aventuriers

La Guilde des Aventuriers est un monde central supplémentaire que vous pouvez installer et c'est aussi un ensemble de commandes que les joueurs peuvent utiliser.

Si le monde central n'est pas installé, les joueurs devront utiliser des commandes ; sinon, l'exécution de commandes avec le monde central installé téléportera les joueurs vers le monde central où ils pourront interagir avec des PNJ au lieu de devoir taper des commandes.

Quelles commandes ? EliteMobs dispose de plusieurs commandes que les joueurs peuvent utiliser pour vendre et acheter des objets, réparer des objets, enchanter des objets et plus encore. Apprenez-en davantage sur les commandes que les joueurs peuvent utiliser [ici]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Pour plus d'informations sur la Guilde des Aventuriers et comment installer le monde central, consultez [cette page]($language$/elitemobs/adventurers_guild_world.md).

Vous pouvez désactiver le monde central en ouvrant *AdventurersGuild.yml* et en définissant `guildHubIsEnabledv2` sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Niveau/Rang de Guilde

À mesure que les joueurs progressent et acquièrent de meilleurs objets, ils atteindront finalement une limite et les mobs cesseront de lâcher des objets de niveau supérieur, c'est ce qu'on appelle le limiteur de butin par niveau de guilde.

Le limiteur de butin par niveau de guilde restreint le butin le plus élevé que les joueurs peuvent obtenir en fonction de leur niveau de guilde et applique des limitations par défaut des objets de niveau 1 à 10, avec des niveaux de mob correspondants. Les niveaux de prestige débloquent des niveaux supérieurs, permettant l'accès à un butin supérieur et à des mobs plus résistants, assurant un gameplay équilibré.

Ce système, combiné à l'enchantement de liaison d'âme (soulbind), atténue les problèmes de powerleveling, maintient l'équilibre du serveur et favorise l'attachement des joueurs à leur butin acquis. Vous pouvez en savoir plus sur le niveau de guilde [ici]($language$/elitemobs/guild_tier_loot_limiter.md).

Tous les paramètres pour le Niveau de Guilde peuvent être ajustés et se trouvent dans *AdventurersGuild.yml*.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arènes

Les Arènes sont des défis basés sur des vagues où les joueurs peuvent s'engager dans des combats. Un ou plusieurs joueurs peuvent rejoindre une arène et affronter des vagues d'ennemis de plus en plus difficiles, avec des récompenses s'améliorant à mesure que le défi progresse.

Lors de l'installation du monde central de la Guilde des Aventuriers, les joueurs ont accès à l'Arène de la Ligue de Bois, une arène gratuite accessible via l'interaction avec un PNJ dans le monde central ou via le menu */em*.

Vous pouvez obtenir des arènes supplémentaires en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver les arènes en allant dans *~plugins\EliteMobs\customarenas* et en ouvrant la configuration de l'arène, par exemple *wood_league.yml*, et en trouvant la valeur `isEnabled` et en la définissant sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Donjons Mondiaux

Les Donjons Mondiaux sont du contenu personnalisé supplémentaire que vous pouvez télécharger pour EliteMobs. Les donjons ont généralement des boss Élites personnalisés, des mondes personnalisés, du butin personnalisé et des pouvoirs de boss personnalisés.

Tous les donjons mondiaux sont des donjons situés dans leur propre monde, ce qui signifie que lorsque les joueurs y accèdent, ils sont téléportés dans un monde qui ne contient rien d'autre que ce donjon.

Il existe plusieurs types de donjons mondiaux, pour en savoir plus sur les types, cliquez [ici]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Tous les donjons mondiaux ont un niveau défini et les joueurs qui tentent les donjons devraient être autour de ce niveau pour la meilleure expérience.

Vous pouvez obtenir des donjons en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy). Il existe plusieurs donjons gratuits que vous pouvez télécharger [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver les donjons individuels en allant dans *~plugins\EliteMobs\content_packages* et en ouvrant la configuration du donjon que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Donjons Instanciés

Les Donjons Instanciés diffèrent des Donjons Mondiaux de plusieurs manières. Ils sont instanciés, ce qui signifie qu'un nouveau monde est créé dynamiquement à partir d'un plan, offrant aux joueurs et à leurs amis une expérience de donjon privée similaire à celles que l'on trouve dans les MMO.

Les Donjons Instanciés offrent diverses difficultés avec des pouvoirs de boss uniques, une santé accrue et un butin supérieur à mesure que la difficulté augmente. Ils introduisent également des rôles, permettant aux joueurs d'adopter des rôles de tank ou de DPS en fonction de leur équipement (l'équipement spécifique aux rôles est exclusif aux Donjons Instanciés). En savoir plus sur le fonctionnement de la difficulté [ici]($language$/elitemobs/instanced_dungeon_difficulty.md).

De plus, les joueurs peuvent se ressusciter mutuellement dans les Donjons Instanciés, leur permettant de reprendre rapidement le combat s'ils agissent assez vite.

Vous pouvez obtenir des donjons instanciés en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy). Il existe des donjons instanciés gratuits que vous pouvez télécharger [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver les donjons individuels en allant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la configuration du donjon que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventures

Les Aventures représentent le contenu supplémentaire le plus vaste disponible pour EliteMobs, offrant un vaste monde complet avec une intrigue captivante et une multitude de quêtes pour les joueurs.

Avec des centaines de boss, pouvoirs et objets personnalisés, les Aventures offrent une expérience de jeu immersive. Les quêtes dans les Aventures fonctionnent de manière similaire à celles des MMO traditionnels, assignant aux joueurs des objectifs tels que vaincre des mobs, localiser des objets, interagir avec des PNJ, ou toute combinaison de ces éléments.

Les Aventures sont si vastes qu'elles contiennent même d'autres sous-donjons ou sous-arènes.

Bien que les Aventures recommandent généralement une fourchette de niveaux définie pour les joueurs, il est conseillé aux joueurs de commencer leur aventure à l'extrémité inférieure de l'échelle de niveaux pour un plaisir optimal.

Vous pouvez obtenir des aventures en allant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver les aventures individuelles en allant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la configuration de l'aventure que vous souhaitez désactiver et en définissant la valeur `isEnabled` sur `false`. Les Aventures peuvent avoir des sous-donjons et sous-arènes supplémentaires qui accompagnent les aventures, alors assurez-vous de les désactiver également si vous désactivez une aventure.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Téléporteurs Vortex

EliteMobs propose également de simples téléporteurs de A à B appelés vortex (wormholes). Vous les verrez principalement utilisés dans le monde central de la Guilde des Aventuriers comme moyen de téléporter les joueurs de là vers un donjon ou de retour au point d'apparition du serveur.

Ils ont généralement la forme d'un hexagone, d'un cube ou d'un diamant fait de particules. Ces particules peuvent parfois causer du lag aux clients Bedrock, vous pourriez donc vouloir désactiver les effets de particules en ouvrant *Wormholes.yml* et en définissant `noParticlesMode` sur `true`.

Vous pouvez créer vos propres vortex et les utiliser comme vous le souhaitez. Cliquez [ici]($language$/elitemobs/creating_wormholes.md) pour savoir comment.

<div align="center">

<details>

<summary><b>Exemple Visuel</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenu Personnalisé

EliteMobs vous offre également la possibilité de créer votre propre contenu, y compris des [boss]($language$/elitemobs/creating_bosses.md), des [donjons]($language$/elitemobs/dungeon_packager.md), des [pouvoirs]($language$/elitemobs/creating_powers.md), des [PNJ]($language$/elitemobs/creating_npcs.md), des [quêtes]($language$/elitemobs/creating_quests.md), des [arènes]($language$/elitemobs/creating_arenas.md), et bien plus encore ! Vous pouvez trouver des guides pour créer d'autres types de contenu que ceux listés ci-dessus dans le menu latéral du wiki.

Pour l'expérience de création de contenu la plus simple et la plus efficace, nous vous recommandons d'utiliser l'Application Web (WebApp). Cet outil vous permet de générer des fichiers de configuration prêts à l'emploi sans avoir besoin de parcourir extensivement le wiki pour assurer leur exactitude, en particulier si vous envisagez de créer des pouvoirs de boss EliteScript. Accédez à l'[Application Web ici](https://magmaguy.com/webapp/webapp.html).

# Pour les Admins & Propriétaires de Serveurs

Ce plugin est conçu pour les serveurs de survie et similaires (tels que Skyblock, Skywars et les variantes de survie fortement moddées).

Le plugin est destiné à être facilement utilisable en faisant simplement glisser et déposer le fichier jar du plugin dans le serveur. Les paramètres par défaut sont ceux que j'utilise sur mes propres serveurs et sont sujets à changement au fil du temps.

**Cependant !** La personnalisation a été une priorité absolue tout au long du processus de développement d'EliteMobs. Presque tous les aspects du plugin peuvent être traduits, personnalisés, désactivés ou modifiés.

# Pour les autres développeurs

Malgré la nature GPLV3 et open-source de ce projet, je ne recherche ni n'accepterai aucune addition ou modification de code pour le moment. J'accueille favorablement les forks du plugin, et j'aurais un immense plaisir à voir ce que vous pourriez en faire ; cependant, c'est mon premier projet de programmation d'envergure et en tant que tel, c'est aussi une expérience d'apprentissage.

**Cependant !** Ne prenez pas cela comme une affirmation que je suis au-delà de toute critique ou que je n'écouterai pas les retours - bien au contraire, j'adore quand les gens me montrent de meilleures façons d'accomplir des choses que j'ai faites dans le plugin. Je souhaite que ce projet soit quelque chose que j'ai écrit de bout en bout, sans extraits de code dont je ne suis pas conscient ou que je ne comprends pas.