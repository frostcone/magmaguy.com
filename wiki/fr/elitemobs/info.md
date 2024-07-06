```markdown
Bienvenue sur le wiki EliteMobs !

# Licence

Le code source d'EliteMobs est couvert par la licence [GPLV3](https://choosealicense.com/licenses/gpl-3.0/), et ce wiki est fourni avec la licence [CC0](https://choosealicense.com/licenses/cc0-1.0/).

N'hésitez pas à redistribuer et à modifier les informations de ce wiki.

# Versions

À partir de la version 9.0.0 d'EliteMobs, la seule version de Minecraft prise en charge est la 1.21 et les versions ultérieures.

Pour ceux qui recherchent la compatibilité avec des versions de Minecraft plus anciennes (1.19.4 - 1.20.4), veuillez utiliser la version 8 d'EliteMobs.

**Remarque : Aucune version d'EliteMobs ne prend en charge les versions 1.20.5 et 1.20.6 de Minecraft.**

# À quoi sert EliteMobs ?

EliteMobs vise à étendre le contenu de fin de partie de Minecraft en implémentant divers contenus liés aux boss.

Cela signifie :

- Boss dynamiques (Mobs avec niveau)
- Boss personnalisés
- Événements
- Arènes
- Donjons basés sur le monde
- Donjons instanciés
- Donjons aléatoires en monde ouvert (avec intégration BetterStructures)
- Objets personnalisés (objets/butin Elite)
- ... et bien plus encore !

Le plugin ne vise pas à remplacer le contenu vanilla de Minecraft, mais plutôt à le compléter, permettant aux joueurs de se désengager du contenu EliteMobs si nécessaire. Les objets EliteMobs n'affectent généralement pas le PvP ou les combats vanilla de Minecraft, car leurs bonus de dégâts et de défense ne s'appliquent que pendant les combats avec EliteMobs.

# Aperçu des fonctionnalités d'EliteMobs

Dans cette section, nous allons examiner certaines des principales fonctionnalités offertes par EliteMobs, ce qu'elles sont et comment vous pouvez les désactiver. Pour une liste complète des fonctionnalités, consultez [cette page]($language$/elitemobs/feature_list.md&section=feature-list).

Vous pouvez également consulter [cette]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) page pour trouver la manière dont les joueurs sont censés interagir avec EliteMobs.

## Boss dynamiques

Les boss dynamiques sont l'une des principales fonctionnalités d'EliteMobs. Ils remplacent un pourcentage des spawn vanilla de Minecraft par des spawns de mobs Elite.

Les élites sont des mobs plus coriaces conçus pour défier les joueurs et les récompenser avec de possibles butins à leur mort. Le niveau des élites est déterminé par la qualité de l'armure et de l'équipement équipés par le joueur. L'équipement normal de Minecraft a un niveau déterminé par la qualité du matériau, comme expliqué [ici]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). Cependant, au fur et à mesure que les joueurs vainquent les élites et acquièrent un meilleur butin, ils commenceront finalement à obtenir des objets Elite avec des niveaux définis, ce qui facilitera la prédiction des niveaux des élites qui spawnent.

Cela implique que les niveaux des joueurs sont déterminés par l'équipement qu'ils portent, tandis que les niveaux des élites sont déterminés par les niveaux des joueurs.
Il n'y a pas de système d'expérience dans EliteMobs, toute la progression du niveau du joueur dépend de l'équipement.

Vous pouvez ajuster la difficulté des élites en modifiant les valeurs `damageToEliteMobMultiplierV2` et `damageToPlayerMultiplierV2` dans *MobCombatSettings.yml*. Vous trouverez plus d'informations à ce sujet [ici]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

Si vous souhaitez désactiver complètement cette fonctionnalité, vous pouvez le faire en définissant la valeur `doNaturalEliteMobSpawning` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Objets/Butin Elite

EliteMobs propose des objets générés aléatoirement que l'on peut trouver dans les boutiques ou qui sont lâchés par les élites. Il existe également des objets personnalisés qui sont généralement trouvés dans les donjons et autres contenus Elite.

Les objets Elite sont comme des objets vanilla, sauf qu'ils sont généralement équipés de goodies supplémentaires et sont plus puissants que tout ce que vous pouvez trouver dans Minecraft vanilla. Certains objets Elite auront des statistiques qui s'appellent **Précision Elite** et **Défense Elite**, ces statistiques ne s'appliqueront que lorsque les joueurs combattent des élites et n'affectent pas les mobs vanilla.

Les objets Elite peuvent également avoir des enchantements, des [enchantements personnalisés]($language$/elitemobs/custom_enchantments_list.md) et des effets de potion.

Vous pouvez désactiver les objets Elite en ouvrant *ItemSettings.yml* et en définissant la valeur `doEliteMobsLoot` sur `false`. (Déconseillé, rend la progression de niveau MMORPG impossible.)

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Événements

Les événements sont des rencontres uniques dans EliteMobs qui peuvent se déclencher aléatoirement en fonction d'un minuteur ou d'actions spécifiques du joueur, telles que l'extraction d'un bloc ou l'abattage d'un arbre. 

Ces rencontres mettent en scène des élites personnalisées et uniques qui présentent un défi plus important et offrent un butin précieux à leur mort. 

Les joueurs reçoivent des notifications dans le chat lorsqu'un événement se produit, avec la possibilité de suivre la santé et l'emplacement de l'élite via un lien cliquable. Si l'élite n'est pas vaincue dans un délai donné, l'événement prend fin et l'élite disparaît.

Vous pouvez désactiver tous les événements en ouvrant events.yml et en définissant les valeurs actionEventsEnabled et timedEventsEnabled sur false.

Si vous souhaitez désactiver des événements individuels, vous pouvez vous rendre dans ~plugins\EliteMobs\customevents. Vous y trouverez des fichiers de configuration pour chaque événement et vous pouvez désactiver tout événement en ouvrant sa configuration et en définissant la valeur isEnabled sur false.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Guilde des aventuriers

La Guilde des aventuriers est un monde central supplémentaire que vous pouvez installer, et c'est aussi un ensemble de commandes que les joueurs peuvent utiliser.

Si le monde central n'est pas installé, les joueurs devront utiliser des commandes. Sinon, l'exécution de commandes avec le monde central installé téléportera les joueurs vers le monde central et ils pourront y interagir avec les PNJ au lieu d'avoir à saisir des commandes.

Quelles commandes ? EliteMobs propose plusieurs commandes que les joueurs peuvent utiliser pour vendre et acheter des objets, réparer des objets, enchantements des objets et bien plus encore. Apprenez-en plus sur les commandes que les joueurs peuvent utiliser [ici]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

Pour plus d'informations sur la Guilde des aventuriers et sur la façon d'installer le monde central, consultez [cette]($language$/elitemobs/adventurers_guild_world.md) page.

Vous pouvez désactiver le monde central en ouvrant *AdventurersGuild.yml* et en définissant `guildHubIsEnabledv2` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Rang/Niveau de guilde

Au fur et à mesure que les joueurs progressent et acquièrent de meilleurs objets, ils finiront par atteindre une limite et les mobs arrêteront de lâcher des objets de niveau supérieur. C'est ce qu'on appelle le limiteur de butin de niveau de guilde.

Le limiteur de butin de niveau de guilde restreint le butin le plus élevé que les joueurs peuvent obtenir en fonction de leur niveau de guilde et applique des limitations par défaut des objets de niveau 1 à 10, avec des niveaux de mob correspondants. Les niveaux de prestige débloquent des niveaux supérieurs, ce qui permet d'accéder à un butin supérieur et à des mobs plus coriaces, garantissant un gameplay équilibré. 

Ce système, combiné à l'enchantement de lien d'âme, atténue les problèmes de surclassement, maintient l'équilibre du serveur et favorise l'attachement des joueurs au butin qu'ils ont acquis. Vous pouvez en savoir plus sur le niveau de guilde [ici]($language$/elitemobs/guild_tier_loot_limiter.md).

Tous les paramètres du niveau de guilde peuvent être ajustés et se trouvent dans *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arènes

Les arènes sont des défis basés sur des vagues où les joueurs peuvent s'engager dans des combats. Un ou plusieurs joueurs peuvent rejoindre une arène et affronter des vagues d'ennemis de plus en plus difficiles, les récompenses s'améliorant au fur et à mesure que le défi progresse. 

Lors de l'installation du monde central de la Guilde des aventuriers, les joueurs ont accès à l'Arène de la Ligue de bois, une arène gratuite accessible via une interaction avec un PNJ dans le monde central ou via le menu */em*.

Vous pouvez obtenir des arènes supplémentaires en vous rendant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver les arènes en vous rendant dans *~plugins\EliteMobs\customarenas*
et en ouvrant la configuration de l'arène, par exemple *wood_league.yml*, puis en trouvant la valeur `isEnabled` et en la définissant sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## Donjons du monde

Les donjons du monde sont du contenu personnalisé supplémentaire que vous pouvez télécharger pour EliteMobs. Les donjons ont généralement des boss Elite personnalisés, des mondes personnalisés, du butin personnalisé et des pouvoirs de boss personnalisés.


Tous les donjons du monde sont des donjons qui se trouvent dans leur propre monde, ce qui signifie que lorsque les joueurs y accèdent, ils sont téléportés dans un monde qui ne contient rien d'autre que ce donjon.

Il existe plusieurs types de donjons du monde, pour en savoir plus sur les types, cliquez [ici]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

Tous les donjons du monde ont un niveau défini, et tous les joueurs qui tentent les donjons doivent être environ à ce niveau pour une expérience optimale.

Vous pouvez obtenir des donjons en vous rendant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy). Vous pouvez télécharger plusieurs donjons gratuits depuis [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver des donjons individuels en vous rendant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la configuration du donjon que vous souhaitez désactiver, puis en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Donjons instanciés

Les donjons instanciés diffèrent des donjons du monde à plusieurs égards. Ils sont instanciés, ce qui signifie qu'un nouveau monde est créé dynamiquement à partir d'un modèle, offrant aux joueurs et à leurs amis une expérience de donjon privée similaire à celle que l'on trouve dans les MMO. 

Les donjons instanciés offrent différentes difficultés avec des pouvoirs de boss uniques, une santé accrue et un butin supérieur au fur et à mesure que la difficulté augmente. Ils introduisent également des rôles, permettant aux joueurs d'adopter des rôles de tank ou de DPS en fonction de l'équipement qu'ils portent (l'équipement spécifique à un rôle est exclusif aux donjons instanciés). Pour en savoir plus sur le fonctionnement de la difficulté, consultez [cette page]($language$/elitemobs/instanced_dungeon_difficulty.md).

De plus, les joueurs peuvent se ressusciter les uns les autres dans les donjons instanciés, ce qui leur permet de reprendre rapidement le combat s'ils agissent suffisamment vite.

Vous pouvez obtenir des donjons instanciés en vous rendant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy). Vous pouvez télécharger des donjons instanciés gratuits depuis [ici](https://magmaguy.itch.io/em-free-content).

Vous pouvez désactiver des donjons individuels en vous rendant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la configuration du donjon que vous souhaitez désactiver, puis en définissant la valeur `isEnabled` sur `false`.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Aventures

Les aventures représentent le contenu supplémentaire le plus vaste disponible pour EliteMobs, avec un vaste monde complet avec une histoire captivante et une multitude de quêtes que les joueurs peuvent entreprendre. 

Avec des centaines de boss, pouvoirs et objets personnalisés, les aventures offrent une expérience de jeu immersive. Les quêtes dans les aventures fonctionnent de manière similaire à celles des MMO traditionnels, demandant aux joueurs d'accomplir des objectifs tels que vaincre des mobs, trouver des objets, interagir avec des PNJ ou toute combinaison de ces éléments.

Les aventures sont si grandes qu'elles contiennent même d'autres sous-donjons ou sous-arènes.

Bien que les aventures recommandent généralement une fourchette de niveaux définie pour les joueurs, il est conseillé aux joueurs de commencer leur aventure à la limite inférieure de l'échelle de niveau pour une expérience optimale.

Vous pouvez obtenir des aventures en vous rendant sur : [Itch.io](https://magmaguy.itch.io/) ou en vous abonnant sur [Patreon](https://www.patreon.com/magmaguy).

Vous pouvez désactiver des aventures individuelles en vous rendant dans *~plugins\EliteMobs\dungeonpackages* et en ouvrant la configuration de l'aventure que vous souhaitez désactiver, puis en définissant la valeur `isEnabled` sur `false`. Les aventures peuvent avoir des sous-donjons et des sous-arènes supplémentaires qui sont fournis avec les aventures, alors assurez-vous de les désactiver également si vous désactivez une aventure.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Téléportations par trou de ver

EliteMobs propose également des téléporteurs simples de A à B appelés trous de ver. Vous les verrez surtout utilisés dans le monde central de la Guilde des aventuriers pour téléporter les joueurs de ce monde vers un donjon ou de retour vers le spawn du serveur.

Ils ont généralement la forme d'un hexagone, d'un cube ou d'un diamant composé de particules. Ces particules peuvent parfois entraîner du lag pour les clients Bedrock, il est donc peut-être préférable de désactiver les effets de particules en ouvrant *Wormholes.yml* et en définissant `noParticlesMode` sur `true`.

Vous pouvez créer vos propres trous de ver et les utiliser comme vous le souhaitez. Cliquez [ici]($language$/elitemobs/creating_wormholes.md) pour savoir comment.

<div align="center">

<details> 

<summary><b>Exemple visuel</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Contenu personnalisé

EliteMobs vous offre également la possibilité de créer votre propre contenu, notamment des [boss]($language$/elitemobs/creating_bosses.md), des [donjons]($language$/elitemobs/dungeon_packager.md), des [pouvoirs]($language$/elitemobs/creating_powers.md), des [PNJ]($language$/elitemobs/creating_npcs.md), des [quêtes]($language$/elitemobs/creating_quests.md), des [arènes]($language$/elitemobs/creating_arenas.md), et bien plus encore ! Vous trouverez des guides pour créer d'autres types de contenu que ceux énumérés ci-dessus dans le menu de la barre latérale du wiki.

Pour une expérience de création de contenu la plus simple et la plus efficace, nous vous recommandons d'utiliser la WebApp. Cet outil vous permet de générer des fichiers de configuration prêts à l'emploi sans avoir à parcourir le wiki pour vous assurer de la justesse, en particulier si vous envisagez de créer des pouvoirs de boss EliteScript. Accédez à la [WebApp ici](https://magmaguy.com/webapp/webapp.html).

# Pour les administrateurs et les propriétaires de serveurs

Ce plugin est conçu pour les serveurs de survie et de type survie (tels que Skyblock, Skywars et des variantes de survie fortement modifiées).

Le plugin est conçu pour être facile à utiliser en faisant simplement glisser et en déposant le fichier jar du plugin dans le serveur. Les paramètres par défaut sont ceux que j'utilise sur mes propres serveurs et sont sujets à changement au fil du temps.

**Cependant !** La personnalisation a été une priorité absolue tout au long du processus de développement d'EliteMobs. Presque tous les aspects du plugin peuvent être traduits, personnalisés, désactivés ou modifiés.


# Pour les autres développeurs

Malgré la nature GPLV3 et open source de ce projet, je ne recherche pas et n'accepterai pas d'ajouts ou de modifications de code pour le moment. Je suis favorable aux forks du plugin et serais ravi de voir ce que vous pourriez en faire ; cependant, il s'agit de mon premier grand projet de programmation et, en tant que tel, il s'agit également d'une expérience d'apprentissage.

**Cependant !** Ne prenez pas cela comme une affirmation selon laquelle je suis au-dessus de toute critique ou que je ne tiendrai pas compte des commentaires - au contraire, j'adore que les gens me signalent de meilleures façons d'accomplir les choses que j'ai faites dans le plugin. Je souhaite que ce projet soit quelque chose que j'ai écrit de bout en bout, sans aucun extrait de code que je ne connais pas ou que je ne comprends pas.


```