Si vous avez une question qui n'est pas listée ici, ***jetez un coup d'œil à la barre latérale*** pour voir si une page
lui est dédiée dans le wiki!

# FAQ sur la configuration et l'installation

### Comment configurer des modèles personnalisés ?

<details>
<summary>
Infos
</summary>

Il existe deux plugins différents qui gèrent les "Modèles personnalisés".

- LibsDisguises (y compris l'édition gratuite) vous permet de déguiser des monstres en d'autres monstres ou en skins de
  joueur personnalisés. Si vous voyez un boss personnalisé avec un déguisement de joueur, il utilise LibsDisguises pour
  le déguisement. Vous devrez télécharger LibsDisguises pour que cette fonctionnalité spécifique fonctionne.

- FreeMinecraftModels (et ModelEngine R3, bien que ModelEngine ne soit plus recommandé) vous permet de déguiser des
  monstres en n'importe quel modèle personnalisé, avec très peu de limitations. FreeMinecraftModels vous permet de le
  faire gratuitement et est recommandé. Vous devrez utiliser FreeMinecraftModels ou ModelEngine R3 (pas R4) pour que les
  modèles personnalisés fonctionnent. FreeMinecraftModels peut être exécuté en même temps que ModelEngine, vous pouvez
  donc également exécuter les deux.
  <br>Si vous avez installé FreeMinecraftModels/ModelEngine et que les modèles personnalisés ne fonctionnent toujours
  pas, vous avez peut-être installé le contenu avant d'avoir installé le plugin de modèles. Pour vous assurer que ce
  n'est pas un problème, réimportez le contenu EliteMobs avec les déguisements personnalisés et installez-le à nouveau.

</details>

### La console/EliteMobs indique que j'utilise la mauvaise version de WorldGuard

<details>
<summary>
Infos
</summary>

Si EliteMobs indique que WorldGuard n'est pas installé, c'est parce que vous utilisez la mauvaise version de WorldGuard
pour votre plate-forme de serveur. WorldGuard est très sensible à la version que vous utilisez et propose des versions
différentes pour les logiciels de serveur.

- Vous pouvez télécharger la version de WorldGuard pour Spigot/Paper ici: https://dev.bukkit.org/projects/worldguard -
  Assurez-vous qu'elle indique qu'elle est compatible avec votre version de Minecraft!

</details>

### Les trous de ver/arènes/PNJ ne semblent pas fonctionner correctement immédiatement après l'installation

<details>
<summary>
Infos
</summary>

Si les trous de ver/arènes/PNJ ne semblent pas fonctionner correctement immédiatement après l'installation du contenu,
vous devez exécuter `/em reload`. Il est toujours bon de l'exécuter après avoir installé du contenu EliteMobs.

</details>

### Les boss de donjon ne réapparaissent pas après les avoir tués

<details>
<summary>
Infos
</summary>

La plupart du temps, c'est simplement parce que certains boss ont de longs temps de réapparition. L'Ombre du Lieur de
Mondes a le plus long temps de réapparition, soit 1 semaine dans la vie réelle. Les boss de repaire ont généralement un
temps de réapparition de 4 heures. Tous les autres ont tendance à avoir un temps de réapparition de 5 à 30 minutes. Vous
pouvez modifier le temps de réapparition d'un boss personnalisé dans son fichier de configuration dans le
dossier `~/plugins/EliteMobs/custombosses`.

</details>

### Les boss de donjon ne sont jamais apparus après l'installation

<details>
<summary>
Infos
</summary>

Cela est presque certainement dû à l'interférence d'un plugin tiers. Vérifiez les points suivants:

- Votre monde est-il en difficulté Paisible ? Les monstres n'apparaissent pas en difficulté Paisible

- Votre région est-elle protégée contre l'apparition ? Les donjons d'EliteMobs gèrent leur propre protection de région
  via WorldGuard, vous n'avez pas besoin de protéger les mondes de donjons EliteMobs. En fait, cela pourrait empêcher
  l'apparition si les mauvais drapeaux sont utilisés.

- Y a-t-il un autre plugin qui empêche les boss d'EliteMobs d'apparaître ou qui les supprime ? Ces conflits s'affichent
  souvent dans la console, alors vérifiez vos journaux de console.

</details>

### Le plugin n'effectue pas l'autocomplétion des commandes pour le contenu que je viens d'installer

<details>
<summary>
Infos
</summary>

Les suggestions automatiques dans les commandes sont gérées par CloudCommandFramework et ne mettent à jour les
suggestions de commandes **qu'après un redémarrage du serveur**. Malheureusement, je n'y peux rien.

</details>

### Comment utiliser les traductions d'EliteMobs ?

<details>
<summary>
Infos
</summary>

Vous pouvez changer la langue d'EliteMobs en exécutant `/em language <nomdelalangue>.yml`. pour utiliser la traduction
de plugin par défaut créée et gérée par la communauté EliteMobs

Pour ajouter une langue qui n'est pas dans le plugin, ou pour personnaliser la langue existante, il est recommandé
d'utiliser `custom_language.yml`.

Les fichiers de langue ne génèrent leur contenu que lorsque vous changez de langue!

Si vous cassez le formatage du fichier yml, ce qui est très facile à faire par erreur, il réinitialisera le fichier!
***Assurez-vous de conserver une sauvegarde locale de votre traduction si vous traduisez manuellement le contenu!***

Il est plus facile de traduire le fichier de langue dans le site Web de traduction de la communauté, car il gère le
formatage pour vous! Il suggère également automatiquement des traductions. Vous pouvez le trouver
ici: https://crowdin.com/project/elitemobs

Pour rappel, si vous traduisez, si vous utilisez des caractères spéciaux tels que `&` pour commencer une valeur de
configuration, vous devez mettre cette valeur entre guillemets comme \"&cCool value\"! Sinon, le fichier sera cassé et
il réinitialisera votre progression. Vous pouvez utiliser un linter pour vérifier la validité du fichier yml - collez
simplement le contenu de votre yml ici: <https://www.yamllint.com/>

</details>

# FAQ sur la compatibilité d'EliteMobs et BetterStructures

### Puis-je obtenir des structures dans BetterStructure avec des boss d'EliteMobs à l'intérieur ?

<details>
<summary>
Infos
</summary>

Oui, les packs de sanctuaires BetterStructures sont exactement ce type de contenu. Vous pouvez télécharger les packs de
sanctuaires à partir de [itch.io](https://magmaguy.itch.io/).

</details>

### Pourquoi les sanctuaires sont-ils protégés par WorldGuard et comment empêcher cela ?

<details>
<summary>
Infos
</summary>

Les structures de sanctuaires EliteMobs sont protégées par WorldGuard par défaut pour s'assurer que les joueurs ne
construisent pas de systèmes pour abuser du système de combat de Minecraft à l'intérieur de la zone de combat.

Les protections sont automatiquement supprimées une fois le boss vaincu.

Chaque sanctuaire possède des points d'entrée que les joueurs doivent creuser pour trouver s'ils sont souterrains.

Si vous ne souhaitez pas utiliser les protections WorldGuard, vous pouvez les désactiver dans le fichier de
configuration config.yml de BetterStructures.

</details>

### Pourquoi les sanctuaires apparaissent-ils sans élites à l'intérieur ?

<details>
<summary>
Infos
</summary>

Cela peut se produire si vous installez les sanctuaires BetterStructures avant d'installer EliteMobs. Pour résoudre ce
problème, réimportez et réinstallez les sanctuaires sur votre serveur **après** l'installation d'EliteMobs.

</details>

### Puis-je utiliser les sanctuaires sans utiliser EliteMobs ?

<details>
<summary>
Infos
</summary>

Les sanctuaires ont été conçus spécifiquement pour combattre les boss qui s'y trouvent, mais si vous voulez juste les
arènes de combat pour l'esthétique, vous pouvez simplement exécuter les packs de sanctuaires sans avoir EliteMobs
installé.

</details>

# FAQ sur la compatibilité d'EliteMobs et FreeMinecraftModels

### FreeMinecraftModels est-il compatible avec EliteMobs ?

<details>
<summary>
Infos
</summary>

Oui. Le plugin FreeMinecraftModels a été conçu spécifiquement autour d'EliteMobs et d'EternalTD.

</details>

### Comment installer les modèles personnalisés d'EliteMobs ?

<details>
<summary>
Infos
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs sur https://www.patreon.com/magmaguy
et https://magmaguy.itch.io/. Une fois que vous les avez installés, **vous devrez fusionner le pack de ressources**
généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous
souhaitez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>

### Comment installer les modèles personnalisés d'EliteMobs ?

<details>
<summary>
Infos
</summary>

Vous pouvez télécharger les modèles personnalisés pour EliteMobs sur https://www.patreon.com/magmaguy
et https://magmaguy.itch.io/. Une fois que vous les avez installés, vous devrez **fusionner le pack de ressources**
généré par FreeMinecraftModels dans son dossier de sortie avec le pack de ressources officiel d'EliteMobs si vous
souhaitez utiliser le pack de ressources officiel et le distribuer aux joueurs en l'hébergeant en ligne.

</details>

# FAQ sur la compatibilité d'EliteMobs et ResurrectionChest

### EliteMobs fonctionne-t-il avec ResurrectionChest ?

<details>
<summary>
Infos
</summary>

Oui. ResurrectionChest a été conçu spécifiquement pour le contenu EliteMobs et est entièrement compatible.

</details>

# FAQ sur la compatibilité avec d'autres plugins

### Puis-je utiliser EliteMobs avec un plugin similaire à MCMMO ou AureliumSkills ?

<details>
<summary>
Infos
</summary>

Oui. Cela étant dit, vous voudrez peut-être désactiver les bonus de santé du système de prestige d'EliteMobs.

</details>

### Puis-je utiliser EliteMobs avec un autre plugin d'objets personnalisés ?

<details>
<summary>
Infos
</summary>

Oui. Si vous voulez que les boss laissent tomber des objets spécifiques de ce plugin, vous définissez des commandes à
l'exécution à la mort pour donner des objets aux joueurs de cette façon. Cependant, il n'y a pas de moyen réel d'
équilibrer EliteMobs avec le système d'objets que vous utilisez. Les élites passent de 7 points de santé à des centaines
de milliers de points de santé, et en tant que tels, les autres plugins d'objets seront soit incroyablement
surpuissants, soit incroyablement sous-puissants. EliteMobs possède déjà un système d'objets intégré et ne nécessite
aucun plugin d'objets externe.

</details>

# Autres FAQ

### Exécuter une commande à la mort d'un monstre d'élite ou donner du butin/des récompenses d'autres plugins à la mort d'un monstre d'élite ?

[Informations disponibles ici.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Prise en charge de Vault ?

[Informations disponibles ici.]($language$/elitemobs/vault.md)

### Espaces réservés PlaceholderAPI ?

[Informations disponibles ici.]($language$/elitemobs/placeholders.md)

### Utiliser les drapeaux WorldGuard pour autoriser EliteMobs à certains endroits, mais pas à d'autres ?

[Informations disponibles ici.]($language$/elitemobs/worldguard_flags.md)

### Puis-je faire en sorte que 100 % des monstres qui apparaissent soient des monstres d'élite ?

C'est une très mauvaise idée, mais vous pouvez accéder au fichier de configuration `MobCombatSettings.yml` et
modifier `eliteMobsSpawnPercentage` pour définir le pourcentage d'apparition des monstres d'élite.

### Puis-je créer des pouvoirs personnalisés ?

[Informations disponibles ici.]($language$/elitemobs/creating_powers.md)

### Puis-je créer des enchantements personnalisés ?

C'est sur notre liste de choses à faire et cela devrait arriver bientôt, mais ce n'est actuellement pas possible.

### Puis-je créer des effets de potion personnalisés ?

La seule façon de le faire est d'apprendre Java et de les écrire vous-même. À ce moment-là, vous pourriez aussi bien
modifier le code source d'EliteMobs.

### Comment puis-je désactiver les particules des trous de ver ?

Pour désactiver les particules des trous de ver, accédez à *~plugins\EliteMobs\Wormholes.yml*, puis
localisez `noParticlesMode` et remplacez la valeur par `false`.

### Comment puis-je modifier le trou de ver dans l'apparition AG pour téléporter les joueurs où je veux ?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

Vous pouvez le faire en ouvrant *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Ensuite, trouvez le paramètre suivant
`location2: votre_monde_ici,0.5,64,0.5,0,0`
et modifiez les valeurs en fonction de l'emplacement que vous préférez.

N'oubliez pas de faire `/em reload` pour que les modifications prennent effet.

### Comment puis-je délier des objets ?

La seule façon de supprimer la liaison à l'âme des objets est d'utiliser des parchemins de déliaison. Pour en savoir
plus, [cliquez ici]($language$/elitemobs/soulbind.md).

### Comment fusionner des packs de ressources ?

Il est possible de fusionner manuellement des packs de ressources, mais nous vous recommandons d'utiliser un outil en
ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

### Quels sont les espaces réservés de la commande EliteMobs ?

| Espace réservé |          Détails          |
|----------------|:-------------------------:|
| `$player`      | Nom d'affichage du joueur |
| `$bossName`    |  Nom d'affichage du boss  |
| `$bossLevel`   |      Niveau du boss       |

### Que dois-je faire pour désactiver le pack de ressources forcées ?

Ce paramètre se trouve en fait dans votre fichier `server.properties`. Vous pouvez généralement trouver ce fichier dans
le répertoire racine de vos serveurs. Après avoir ouvert le fichier, localisez le paramètre `require-resource-pack` et
remplacez la valeur par `false` pour désactiver le pack de ressources forcées.

### Comment puis-je désactiver les événements ?

Si vous souhaitez désactiver des événements tels que le gobelin d'armes, le gobelin de charmes, etc., vous pouvez ouvrir
*~plugins\EliteMobs\events.yml*, puis localiser les paramètres `actionEventsEnabled`, `timedEventsEnabled` et les
définir sur `false`.

### Comment puis-je modifier un monde de donjon ou le monde de la Guilde des Aventuriers ?

À partir d'EliteMobs 9, EliteMobs ne repose plus sur WorldGuard pour la protection des donjons et du contenu. Pour
contourner temporairement cette protection, utilisez la commande `/em protection bypass`.

Si vous souhaitez désactiver définitivement la protection d'un donjon spécifique, suivez ces étapes:

1. Accédez à *plugins/EliteMobs/content_packages/*.
2. Trouvez le fichier *dungeon_config.yml* du donjon que vous souhaitez modifier.
3. Ouvrez le fichier de configuration et localisez le paramètre `protect:`.
4. Remplacez la valeur par `false` pour désactiver la protection.
