Si vous avez une question qui n'est pas listée ici, ***jetez un œil à la barre latérale*** pour voir si une page lui est dédiée dans le wiki !

# FAQ Configuration et Installation

### Comment puis-je désactiver les butins ou les pièces lâchées par EliteMobs, et devrais-je le faire ?

<details>
<summary>
Info
</summary>

EliteMobs vous permet de contrôler les butins et les pièces lâchées, mais avant d'apporter des modifications, il est important de comprendre comment ces butins affectent le gameplay et la progression :

- **Butins et Pièces Lâchées :**
Les butins sont une fonctionnalité principale d'EliteMobs, liée à l'équipement que les joueurs portent. Désactiver les butins rendra impossible l'acquisition par les joueurs du meilleur équipement nécessaire pour affronter les Élites de niveau supérieur, arrêtant complètement la progression.

Les pièces sont vitales pour l'économie en jeu, utilisées pour acheter et améliorer l'équipement. Désactiver les pièces lâchées perturbera gravement ce système, affectant négativement l'expérience du joueur et l'équilibre.

Pour désactiver les butins et les pièces lâchées, ouvrez `ItemSettings.yml` et définissez `doEliteMobsLoot` sur `false`.

- **Butin des Boss Personnalisés dans les Donjons :**
Les boss personnalisés ont un butin défini dans leurs fichiers de configuration, situés dans `~/elitemobs/custombosses`. Désactiver ces butins supprimera leurs récompenses uniques, perturbant l'expérience prévue.

</details>


### Comment configurer les modèles personnalisés ?

<details>
<summary>
Info
</summary>

Il existe deux plugins différents qui gèrent les "Modèles Personnalisés".

- LibsDisguises (y compris l'édition gratuite) vous permet de déguiser les mobs en d'autres mobs ou en skins de joueurs personnalisés. Si vous voyez un Boss Personnalisé avec un déguisement de joueur, il utilise LibsDisguises pour le déguisement. Vous devrez télécharger LibsDisguises pour que cette fonctionnalité spécifique fonctionne.


- FreeMinecraftModels (et ModelEngine R3, bien que ModelEngine ne soit plus recommandé) vous permet de déguiser les mobs en n'importe quel Modèle Personnalisé, avec très peu de limitations. FreeMinecraftModels vous permet de le faire gratuitement et est recommandé. Vous devrez soit utiliser FreeMinecraftModels soit ModelEngine R3 (pas R4) pour que les Modèles Personnalisés fonctionnent. FreeMinecraftModels peut être exécuté en parallèle de ModelEngine, vous pouvez donc aussi simplement exécuter les deux.
<br>Si vous avez installé FreeMinecraftModels/ModelEngine et que les Modèles Personnalisés ne fonctionnent toujours pas, vous avez peut-être installé le contenu avant d'installer le plugin de modèle. Pour vous assurer que ce n'est pas un problème, réimportez le contenu EliteMobs avec les Déguisements Personnalisés et installez-le à nouveau.

</details>

### La console / EliteMobs indique que j'utilise la mauvaise version de WorldGuard

<details>
<summary>
Info
</summary>

Si WorldGuard est signalé par EliteMobs comme n'étant pas installé, c'est parce que vous utilisez la mauvaise version de WorldGuard pour la plateforme de votre serveur. WorldGuard est très sensible quant à la version que vous utilisez et a différentes versions pour les logiciels de serveur.

- Vous pouvez télécharger la version de WorldGuard pour Spigot / Paper ici : https://dev.bukkit.org/projects/worldguard - Assurez-vous qu'il indique qu'il est compatible avec votre version de Minecraft !

</details>

### Les trous de ver / arènes / PNJ ne semblent pas fonctionner correctement immédiatement après l'installation

<details>
<summary>
Info
</summary>

Si les trous de ver / arènes / PNJ ne semblent pas fonctionner correctement immédiatement après l'installation du contenu, vous devriez exécuter `/em reload`. Il est toujours bon de l'exécuter après avoir installé le contenu EliteMobs.

</details>

### Les Boss de Donjon ne réapparaissent pas après les avoir tués

<details>
<summary>
Info
</summary>

La plupart du temps, c'est juste parce que certains boss ont de longs temps de réapparition. L'Ombre du Lieur de Mondes a le temps de réapparition le plus long, soit 1 semaine réelle. Les boss de repaire ont généralement un temps de réapparition de 4 heures. Tout le reste a tendance à avoir un temps de réapparition de 5 à 30 minutes. Vous pouvez modifier le temps de réapparition d'un Boss Personnalisé dans son fichier de configuration dans le dossier `~/plugins/EliteMobs/custombosses`.

</details>

### Les Boss de Donjon ne sont jamais apparus après l'installation

<details>
<summary>
Info
</summary>

C'est presque certainement dû à l'interférence d'un plugin tiers. Vérifiez les points suivants :
- Votre monde est-il en difficulté Pacifique ? Les mobs n'apparaissent pas en difficulté Pacifique.


- Votre région est-elle protégée contre l'apparition ? Les donjons EliteMobs gèrent leur propre protection de région via WorldGuard, vous n'avez pas besoin de protéger les mondes de donjon EliteMobs, le faire peut en fait empêcher l'apparition si les mauvais drapeaux sont utilisés.


- Y a-t-il un autre plugin empêchant les boss EliteMobs d'apparaître ou de les supprimer ? Ces conflits apparaîtront souvent dans la console, alors vérifiez vos journaux de console.

</details>

### Le plugin ne complète pas automatiquement les commandes pour le contenu que je viens d'installer

<details>
<summary>
Info
</summary>

Les suggestions automatiques dans les commandes sont gérées par CloudCommandFramework et ne mettent à jour les suggestions de commande **qu'après un redémarrage du serveur**. Malheureusement, il n'y a rien que je puisse faire à ce sujet.

</details>

### Comment utiliser les traductions d'EliteMobs ?

<details>
<summary>
Info
</summary>

Vous pouvez changer la langue d'EliteMobs en exécutant la commande `/em language <nomdelangue>.yml`. pour utiliser la traduction par défaut du plugin créée et gérée par la communauté EliteMobs.

Pour ajouter une langue qui n'est pas dans le plugin, ou pour personnaliser la langue existante, il est recommandé d'utiliser `custom_language.yml`.

Les fichiers de langue ne génèrent leur contenu que lorsque vous changez de langue !

Si vous cassez le formatage du fichier yml, ce qui est très facile à faire par erreur, cela réinitialisera le fichier ! ***Assurez-vous de conserver une sauvegarde locale de votre traduction si vous traduisez manuellement le contenu !***

Il est plus facile de traduire le fichier de langue sur le site web de traduction communautaire, car cela gère le formatage pour vous ! Il suggère également automatiquement des traductions. Vous pouvez le trouver ici : https://crowdin.com/project/elitemobs

Pour rappel, si vous traduisez, si vous utilisez des caractères spéciaux tels que `&` pour commencer une valeur de configuration, vous devez mettre cette valeur entre guillemets comme \"&cCool value\" ! Sinon, le fichier sera cassé et cela réinitialisera votre progression. Vous pouvez utiliser un linter pour vérifier la validité du fichier yml - collez simplement le contenu de votre yml ici : <https://www.yamllint.com/>

</details>

# FAQ Compatibilité EliteMobs et BetterStructures

### Puis-je obtenir des structures dans BetterStructures avec des boss d'EliteMobs à l'intérieur ?

<details>
<summary>
Info
</summary>

Oui, les packs de sanctuaires BetterStructures sont exactement ce type de contenu. Vous pouvez télécharger les packs de sanctuaires depuis [itch.io](https://magmaguy.itch.io/).

</details>

### Pourquoi les sanctuaires sont-ils protégés avec WorldGuard et comment puis-je l'empêcher ?

<details>
<summary>
Info
</summary>

Les structures de sanctuaire EliteMobs sont protégées par défaut avec WorldGuard pour s'assurer que les joueurs ne construisent pas de mécanismes pour abuser du système de combat de Minecraft à l'intérieur de la zone de combat.

Les protections sont automatiquement supprimées une fois le boss vaincu.

Chaque sanctuaire a des points d'entrée que les joueurs doivent creuser pour trouver s'ils sont souterrains.

Si vous ne souhaitez pas utiliser les protections WorldGuard, vous pouvez les désactiver dans le fichier de configuration config.yml de BetterStructures.

</details>

### Pourquoi les sanctuaires apparaissent-ils sans élites à l'intérieur ?

<details>
<summary>
Info
</summary>

Cela peut arriver si vous installez les sanctuaires BetterStructures avant d'installer EliteMobs. Pour corriger cela, réimportez et réinstallez les sanctuaires sur votre serveur **après** l'installation d'EliteMobs.

</details>

### Puis-je utiliser les sanctuaires sans utiliser EliteMobs ?

<details>
<summary>
Info
</summary>

Les sanctuaires ont été conçus spécifiquement pour combattre les boss qui s'y trouvent, mais si vous voulez juste les arènes de combat pour l'esthétique, vous pouvez simplement exécuter les packs de sanctuaires sans avoir EliteMobs installé.

</details>

# FAQ Compatibilité EliteMobs et FreeMinecraftModels

### FreeMinecraftModels est-il compatible avec EliteMobs ?

<details>
<summary>
Info
</summary>

Oui. le plugin FreeMinecraftModels a été conçu spécifiquement autour d'EliteMobs et EternalTD.

</details>

### Comment installer les modèles personnalisés d'EliteMobs ?

<details>
<summary>
Info
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs depuis https://www.patreon.com/magmaguy et https://magmaguy.itch.io/. Une fois qu'ils sont installés, **vous devrez fusionner le pack de ressources** généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous voulez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>

### Comment installer les modèles personnalisés d'EliteMobs ?

<details>
<summary>
Info
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs depuis https://www.patreon.com/magmaguy et https://magmaguy.itch.io/. Une fois qu'ils sont installés, vous devrez **fusionner le pack de ressources** généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous voulez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>


# FAQ Compatibilité EliteMobs et ResurrectionChest

### EliteMobs fonctionne-t-il avec ResurrectionChest ?

<details>
<summary>
Info
</summary>

Oui. ResurrectionChest a été conçu spécifiquement pour le contenu EliteMobs et est entièrement compatible.

</details>

# FAQ Compatibilité avec d'autres plugins

### Puis-je utiliser EliteMobs avec un plugin similaire à MCMMO ou AureliumSkills ?

<details>
<summary>
Info
</summary>

Oui. Cela étant dit, vous pourriez vouloir désactiver la santé bonus du système de prestige d'EliteMobs.

</details>

### Puis-je utiliser EliteMobs avec un autre plugin d'objets personnalisés ?

<details>
<summary>
Info
</summary>

Oui. Si vous voulez que les boss lâchent des objets spécifiques de ce plugin, vous définissez des commandes à exécuter à la mort et donnez ainsi des objets aux joueurs. Cependant, il n'y a pas de véritable moyen d'équilibrer EliteMobs avec le système d'objets que vous utilisez. Les Élites passent de 7 points de vie à des centaines de milliers de points de vie, et en tant que tels, les autres plugins d'objets seront soit incroyablement surpuissants, soit incroyablement sous-puissants. EliteMobs a déjà un système d'objets intégré et ne nécessite aucun plugin d'objets externe.

</details>

# Autres FAQ

### Exécuter une commande à la mort d'un Mob Élite ou donner du butin/des récompenses d'autres plugins à la mort d'un Mob Élite ?

[Informations disponibles ici.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Support Vault ?

[Informations disponibles ici.]($language$/elitemobs/vault.md)

### Placeholders PlaceholderAPI ?

[Informations disponibles ici.]($language$/elitemobs/placeholders.md)

### Utiliser les drapeaux WorldGuard pour autoriser EliteMobs à certains endroits mais pas à d'autres ?

[Informations disponibles ici.]($language$/elitemobs/worldguard_flags.md)

### Puis-je faire en sorte que 100% des mobs qui apparaissent soient des Mobs Élites ?

C'est une idée terrible mais, vous pouvez accéder au fichier de configuration `MobCombatSettings.yml` et
modifier `eliteMobsSpawnPercentage` pour définir le pourcentage d'apparition des Mobs Élites.

### Puis-je créer des pouvoirs personnalisés ?

[Informations disponibles ici.]($language$/elitemobs/creating_powers.md)

### Puis-je créer des enchantements personnalisés ?

C'est sur notre liste de choses à faire et devrait arriver bientôt, mais ce n'est actuellement pas possible.

### Puis-je créer des effets de potion personnalisés ?

La seule façon de le faire est d'apprendre Java et de les écrire vous-même. À ce stade, vous pourriez aussi bien modifier le
code source d'EliteMobs.

### Comment désactiver les particules de trou de ver ?

Pour désactiver les particules de trou de ver, naviguez vers *~plugins\EliteMobs\Wormholes.yml*, puis localisez `noParticlesMode` et
changez la valeur en `false`.

### Comment modifier le trou de ver dans le spawn de la Guilde des Aventuriers pour téléporter les joueurs où je veux ?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Vous pouvez le faire en ouvrant *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Puis trouvez le paramètre suivant
`location2: your_world_here,0.5,64,0.5,0,0`
et changez les valeurs pour votre emplacement préféré.

N'oubliez pas de faire `/em reload` pour que les changements prennent effet.

### Comment puis-je délier des objets ?

La seule façon de retirer le lien d'âme des objets est d'utiliser des Parchemins de Déliaison. En savoir plus à ce sujet
[ici]($language$/elitemobs/soulbind.md).

### Comment fusionner des packs de ressources ?

Il est possible de fusionner des packs de ressources manuellement, mais nous recommandons d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

### Quels sont les placeholders de commande EliteMobs ?

| Placeholder |          Détails           |
| --- |:--------------------------:|
| `$player` | Nom d'affichage du joueur |
| `$bossName` |  Nom d'affichage du boss  |
| `$bossLevel` |     Niveau du boss      |

### Que faire pour désactiver le pack de ressources forcé ?

Ce paramètre se trouve en fait dans votre fichier `server.properties`. Vous pouvez généralement trouver ce fichier dans le répertoire racine de votre serveur. Après avoir ouvert le fichier, localisez le paramètre `require-resource-pack` et changez la valeur en `false` pour désactiver le pack de ressources forcé.

### Comment désactiver les événements ?

Si vous souhaitez désactiver les événements tels que le gobelin d'armes, le gobelin de charmes, etc., alors vous pouvez ouvrir *~plugins\EliteMobs\events.yml*, puis localiser les paramètres `actionEventsEnabled`, `timedEventsEnabled` et les définir sur `false`.

### Comment modifier un monde de donjon ou le monde de la Guilde des Aventuriers ?

À partir d'EliteMobs 9, EliteMobs ne dépend plus de WorldGuard pour la protection des donjons et du contenu. Pour contourner temporairement cette protection, utilisez la commande `/em protection bypass`.

Si vous voulez désactiver définitivement la protection pour un donjon spécifique, suivez ces étapes :

1. Naviguez vers *plugins/EliteMobs/content_packages/*.
2. Trouvez le fichier *dungeon_config.yml* pour le donjon que vous souhaitez modifier.
3. Ouvrez le fichier de configuration et localisez le paramètre `protect:`.
4. Changez la valeur en `false` pour désactiver la protection.


### Que sont les Parchemins d'Élite et comment puis-je les utiliser ?

Les **Parchemins d'Élite** sont des objets d'amélioration spéciaux qui permettent aux joueurs de convertir l'équipement ordinaire (non-élite) en équipement de niveau élite, s'intégrant parfaitement aux systèmes de nivellement et de butin d'EliteMobs.

- **Compatibilité des Plugins :** Idéal pour les serveurs utilisant d'autres plugins d'objets comme **ItemAdder**, permettant à ces objets d'acquérir des niveaux élite.
- **Méthode d'Amélioration :** Peut être appliqué à la **Guilde des Aventuriers** en parlant à **Scotty**, le PNJ Appliqueur de Parchemins (situé à côté de l'Enchanteur). *Cette fonctionnalité est désactivée par défaut.*
- **Progression Équilibrée :** Les parchemins sont lâchés par les **Mobs Élites** du même niveau, assurant des améliorations justes et appropriées au niveau.
- **Support des Objets Personnalisés :** Permet aux objets personnalisés ou basés sur des plugins de fonctionner au sein du système de progression d'EliteMobs.

> **Note :** Les effets de dégâts élite ne sont actifs qu'au sein du système EliteMobs. Les objets améliorés par parchemin ne seront pas surpuissants dans le jeu général en dehors du contenu EliteMobs.

#### Comment Activer les Parchemins d'Élite

Par défaut, les Parchemins d'Élite sont **désactivés**. Pour les activer :

1. Ouvrez le fichier de configuration :
   `plugins/EliteMobs/ItemSettings.yml`
2. Définissez l'option suivante sur `true` :
   `useEliteItemScrolls`
3. Puis exécutez la commande suivante :
   `/em reload`