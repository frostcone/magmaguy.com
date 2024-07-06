```markdown
Si vous avez une question qui n'est pas répertoriée ici, ***jetez un œil à la barre latérale*** pour voir si elle possède une page qui lui est dédiée dans le wiki !

# FAQ sur la configuration et l'installation

### Comment configurer des modèles personnalisés ?

<details>
<summary>
Informations
</summary>

Il existe deux plugins différents qui gèrent les "modèles personnalisés".

- LibsDisguises (y compris l'édition gratuite) vous permet de déguiser des mobs en d'autres mobs ou en skins de joueur personnalisés. Si vous voyez un boss personnalisé avec un déguisement de joueur, il utilise LibsDisguises pour le déguisement. Vous devrez télécharger LibsDisguises pour que cette fonctionnalité spécifique fonctionne.


- FreeMinecraftModels (et ModelEngine R3, bien que ModelEngine ne soit plus recommandé) vous permet de déguiser des mobs en n'importe quel modèle personnalisé, avec très peu de limitations. FreeMinecraftModels vous permet de le faire gratuitement et est recommandé. Vous devrez utiliser FreeMinecraftModels ou ModelEngine R3 (pas R4) pour que les modèles personnalisés fonctionnent. FreeMinecraftModels peut être exécuté en parallèle de ModelEngine, vous pouvez donc simplement exécuter les deux.
<br>Si vous avez installé FreeMinecraftModels/ModelEngine et que les modèles personnalisés ne fonctionnent toujours pas, vous avez peut-être installé le contenu avant d'installer le plugin de modèle. Pour vous assurer que ce n'est pas un problème, réimportez le contenu EliteMobs avec les déguisements personnalisés et réinstallez-le.

</details>

### La console/EliteMobs indique que j'utilise la mauvaise version de WorldGuard

<details>
<summary>
Informations
</summary>

Si WorldGuard est signalé par EliteMobs comme n'étant pas installé, c'est parce que vous utilisez la mauvaise version de WorldGuard pour votre plateforme de serveur. WorldGuard est très sensible à la version que vous utilisez et possède des versions différentes pour les logiciels serveur.

- Vous pouvez télécharger la version de WorldGuard pour Spigot/Paper ici : https://dev.bukkit.org/projects/worldguard - Assurez-vous qu'il est compatible avec votre version de Minecraft !

</details>

### Les trous de ver/arènes/PNJ ne semblent pas fonctionner correctement immédiatement après l'installation

<details>
<summary>
Informations
</summary>

Si les trous de ver/arènes/PNJ ne semblent pas fonctionner correctement immédiatement après l'installation du contenu, vous devez exécuter `/em reload`. Il est toujours bon de l'exécuter après avoir installé du contenu EliteMobs.

</details>

### Les boss de donjon ne réapparaissent pas après leur élimination

<details>
<summary>
Informations
</summary>

La plupart du temps, c'est simplement parce que certains boss ont des temps de réapparition longs. L'ombre du lieur des mondes a le temps de réapparition le plus long, qui est d'une semaine en temps réel. Les boss de repaire ont généralement un temps de réapparition de 4 heures. Tout le reste a tendance à avoir un temps de réapparition de 5 à 30 minutes. Vous pouvez modifier le temps de réapparition d'un boss personnalisé dans son fichier de configuration dans le dossier `~/plugins/EliteMobs/custombosses`.

</details>

### Les boss de donjon ne sont jamais apparus après l'installation

<details>
<summary>
Informations
</summary>

Cela est presque certainement dû à l'interférence d'un plugin tiers. Vérifiez les éléments suivants :

- Votre monde est-il en difficulté Pacifique ? Les mobs ne spawnent pas en difficulté Pacifique


- Votre région est-elle protégée contre le spawn ? Les donjons EliteMobs gèrent leur propre protection de région via WorldGuard, vous n'avez pas besoin de protéger les mondes de donjon EliteMobs, le faire peut en fait empêcher le spawn si les mauvaises balises sont utilisées.


- Existe-t-il un autre plugin qui empêche les boss EliteMobs de spawn ou de les supprimer ? Ces conflits apparaissent souvent dans la console, alors vérifiez les journaux de votre console.

</details>

### Le plugin ne complète pas automatiquement les commandes pour le contenu que je viens d'installer

<details>
<summary>
Informations
</summary>

Les suggestions automatiques dans les commandes sont gérées par CloudCommandFramework et ne mettent à jour les suggestions de commandes **qu'après un redémarrage du serveur**. Malheureusement, je ne peux rien faire à ce sujet.

</details>

### Comment utiliser les traductions EliteMobs ?

<details>
<summary>
Informations
</summary>

Vous pouvez modifier la langue d'EliteMob en exécutant la commande `/em language <languagename>.yml`. pour utiliser la traduction par défaut du plugin créée et gérée par la communauté EliteMobs.

Pour ajouter une langue qui n'est pas dans le plugin, ou pour personnaliser la langue existante, il est recommandé d'utiliser `custom_language.yml`.

Les fichiers de langue ne génèrent leur contenu que lorsque vous changez de langue !

Si vous cassez le formatage du fichier yml, ce qui est très facile à faire par erreur, le fichier sera réinitialisé ! ***Assurez-vous de conserver une sauvegarde locale de votre traduction si vous traduisez manuellement le contenu !***

Il est plus facile de traduire le fichier de langue sur le site Web de traduction de la communauté, car celui-ci gère le formatage pour vous ! Il suggère également automatiquement des traductions. Vous pouvez le trouver ici : https://crowdin.com/project/elitemobs

Pour rappel, si vous traduisez, si vous utilisez des caractères spéciaux comme `&` pour commencer une valeur de configuration, vous devez mettre cette valeur entre guillemets comme \"&cCool value\" ! Sinon, le fichier sera corrompu et votre progression sera réinitialisée. Vous pouvez utiliser un linter pour vérifier la validité du fichier yml - il vous suffit de coller le contenu de votre fichier yml ici : <https://www.yamllint.com/>

</details>

# FAQ sur la compatibilité EliteMobs et BetterStructures

### Puis-je obtenir des structures dans BetterStructure avec des boss d'EliteMobs à l'intérieur ?

<details>
<summary>
Informations
</summary>

Oui, les packages de sanctuaires BetterStructures sont exactement ce type de contenu. Vous pouvez télécharger les packs de sanctuaires depuis [itch.io](https://magmaguy.itch.io/).

</details>

### Pourquoi les sanctuaires sont-ils protégés par WorldGuard et comment l'empêcher ?

<details>
<summary>
Informations
</summary>

Les structures de sanctuaires EliteMobs sont protégées par WorldGuard par défaut pour s'assurer que les joueurs ne construisent pas de dispositifs pour abuser du système de combat de Minecraft à l'intérieur de la zone de combat.

Les protections sont automatiquement supprimées une fois que le boss est vaincu.

Chaque sanctuaire a des points d'entrée que les joueurs doivent creuser pour les trouver s'ils sont souterrains.

Si vous ne souhaitez pas utiliser les protections WorldGuard, vous pouvez les désactiver dans le fichier de configuration BetterStructures config.yml.

</details>

### Pourquoi les sanctuaires spawn sans élites à l'intérieur ?

<details>
<summary>
Informations
</summary>

Cela peut arriver si vous installez les sanctuaires BetterStructures avant d'installer EliteMobs. Pour résoudre ce problème, réimportez et réinstallez les sanctuaires sur votre serveur **après** l'installation d'EliteMobs.

</details>

### Puis-je utiliser les sanctuaires sans utiliser EliteMobs ?

<details>
<summary>
Informations
</summary>

Les sanctuaires ont été conçus spécifiquement pour combattre les boss qui s'y trouvent, mais si vous voulez juste les arènes de combat pour l'esthétique, vous pouvez simplement exécuter les packages de sanctuaires sans avoir EliteMobs installé.

</details>

# FAQ sur la compatibilité EliteMobs et FreeMinecraftModels

### FreeMinecraftModels est-il compatible avec EliteMobs ?

<details>
<summary>
Informations
</summary>

Oui. Le plugin FreeMinecraftModels a été conçu spécifiquement pour EliteMobs et EternalTD.

</details>

### Comment installer les modèles personnalisés EliteMobs ?

<details>
<summary>
Informations
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs depuis https://www.patreon.com/magmaguy et https://magmaguy.itch.io/. Une fois qu'ils sont installés, **vous devrez fusionner le pack de ressources** généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous souhaitez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>

### Comment installer les modèles personnalisés EliteMobs ?

<details>
<summary>
Informations
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs depuis https://www.patreon.com/magmaguy et https://magmaguy.itch.io/. Une fois qu'ils sont installés, **vous devrez fusionner le pack de ressources** généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous souhaitez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>


# FAQ sur la compatibilité EliteMobs et ResurrectionChest

### EliteMobs fonctionne-t-il avec ResurrectionChest ?

<details>
<summary>
Informations
</summary>

Oui. ResurrectionChest a été conçu spécifiquement pour le contenu EliteMobs et est entièrement compatible.

</details>

# FAQ sur la compatibilité avec d'autres plugins

### Puis-je utiliser EliteMobs avec un plugin similaire à MCMMO ou AureliumSkills ?

<details>
<summary>
Informations
</summary>

Oui. Cela dit, vous voudrez peut-être désactiver la santé bonus du système de prestige EliteMobs.

</details>

### Puis-je utiliser EliteMobs avec un autre plugin d'objets personnalisés ?

<details>
<summary>
Informations
</summary>

Oui. Si vous souhaitez que les boss laissent tomber des objets spécifiques de ce plugin, configurez des commandes à l'exécution à la mort pour donner aux joueurs des objets de cette façon. Cependant, il n'y a pas vraiment de moyen d'équilibrer EliteMobs avec le système d'objets que vous utilisez. Les élites passent de 7 points de vie à des centaines de milliers de points de vie, et par conséquent, les autres plugins d'objets seront soit incroyablement puissants, soit incroyablement sous-puissants. EliteMobs possède déjà un système d'objets intégré et ne nécessite aucun plugin d'objets externe.

</details>

# Autre FAQ

### Exécuter une commande à la mort d'un mob Elite ou donner du butin/des récompenses d'autres plugins à la mort d'un mob Elite ?

[Informations disponibles ici.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Prise en charge de Vault ?

[Informations disponibles ici.]($language$/elitemobs/vault.md)

### Espaces réservés PlaceholderAPI ?

[Informations disponibles ici.]($language$/elitemobs/placeholders.md)

### Utiliser les balises WorldGuard pour autoriser EliteMobs à certains endroits mais pas à d'autres ?

[Informations disponibles ici.]($language$/elitemobs/worldguard_flags.md)

### Puis-je faire en sorte que 100 % des mobs qui spawnent soient des mobs Elite ?

C'est une mauvaise idée, mais vous pouvez accéder au fichier de configuration `MobCombatSettings.yml` et modifier `eliteMobsSpawnPercentage` pour définir le pourcentage de spawn des mobs Elite.

### Puis-je créer des pouvoirs personnalisés ?

[Informations disponibles ici.]($language$/elitemobs/creating_powers.md)

### Puis-je créer des enchantements personnalisés ?

Cela fait partie de notre liste de choses à faire et devrait arriver bientôt, mais ce n'est pas possible pour le moment.

### Puis-je créer des effets de potion personnalisés ?

La seule façon de le faire est d'apprendre Java et de les écrire vous-même. À ce moment-là, vous pourriez aussi bien modifier le code source d'EliteMobs.

### Comment puis-je désactiver les particules de trou de ver ?

Pour désactiver les particules de trou de ver, naviguez jusqu'à *~plugins\EliteMobs\Wormholes.yml*, puis recherchez `noParticlesMode` et modifiez la valeur en `false`.

### Comment puis-je modifier le trou de ver dans le spawn de la guilde des aventuriers pour téléporter les joueurs où je veux ?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Vous pouvez le faire en ouvrant *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Ensuite, recherchez le paramètre suivant :
`location2: your_world_here,0.5,64,0.5,0,0`
et modifiez les valeurs en fonction de votre emplacement préféré.

### Comment puis-je délier les objets ?

La seule façon de supprimer le lien des objets est d'utiliser des parchemins de déliaison. En savoir plus à ce sujet [ici]($language$/elitemobs/soulbind.md).

### Comment puis-je fusionner des packs de ressources ?

Il est possible de fusionner des packs de ressources manuellement, mais nous vous recommandons d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

### Quels sont les espaces réservés des commandes EliteMobs ?

| Espace réservé |          Détails           |
| --- |:--------------------------:|
| `$player` | Display name of the player |
| `$bossName` |  Display name of the boss  |
| `$bossLevel` |     Level of the boss      |

### Que dois-je faire pour désactiver le pack de ressources forcé ?

Ce paramètre se trouve en fait dans votre fichier `server.properties`. Vous pouvez généralement trouver ce fichier dans le répertoire racine de votre serveur. Après avoir ouvert le fichier, recherchez le paramètre `require-resource-pack` et modifiez la valeur en `false` pour désactiver le pack de ressources forcé.

### Comment puis-je désactiver les événements ?

Si vous souhaitez désactiver des événements tels que le gobelin des armes, le gobelin des charmes, etc., vous pouvez ouvrir *~plugins\EliteMobs\events.yml*, puis localiser les paramètres `actionEventsEnabled`, `timedEventsEnabled` et les définir sur `false`.


```

