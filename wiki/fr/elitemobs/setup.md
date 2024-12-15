# Vidéo d'installation

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***

*Ce guide suppose que vous utilisez EliteMobs ***7.2.37*** ou une version ultérieure.*

# Premier démarrage

Redémarrez le serveur une fois.

<details>

<summary><b>Pourquoi ?</b></summary>

EliteMobs augmente la santé maximale de votre fichier de configuration spigot.yml la première fois que le serveur démarre. Ceci afin que les mobs d'élite puissent avoir plus de 2 000 points de santé. Il ne modifie pas la santé de tout autre mob - donc il ne modifie pas les mobs vanilla ou plugin.

Ce changement nécessite un redémarrage du serveur pour fonctionner réellement.

</details>

# Autorisations

À partir d'EliteMobs 7.2.23, toutes les autorisations recommandées sont déjà configurées par défaut. Vous pouvez en savoir plus sur les autorisations [ici]($language$/elitemobs/permissions_and_commands.md).

# Mondes de donjons et de hub du Gremio de Aventureros

À partir d'EliteMobs 7.2.35, il existe maintenant un dossier `imports` dans le répertoire EliteMobs. Le processus d'installation pour les donjons, le monde du Gremio de Aventureros est le même :

1) Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir des liens vers les téléchargements.

2) Téléchargez/déplacez les fichiers vers le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de placer les fichiers **ZIPPÉS** à l'intérieur du dossier `imports` sans les modifier de quelque manière que ce soit, EliteMobs extraira automatiquement les fichiers et les déplacera vers les emplacements corrects.

<div align="center">

<details>

<summary>Exemple visuel</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</details>

</div>

3) Redémarrez ou exécutez `/em reload`. Après quelques secondes, les donjons devraient s'installer automatiquement, lorsque vous faites `/em setup`, les indicateurs des donjons que vous avez téléchargés devraient être verts et indiquer que les donjons sont correctement installés et à jour. Si des donjons affichent un panneau de verre jaune, cela signifie qu'il existe une version plus récente du donjon et qu'elle doit être mise à jour.

<div align="center">

<details>

<summary>Exemple visuel</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</details>

</div>

4) ***Si vos fichiers de donjon ont des modèles personnalisés***, vous pouvez éventuellement suivre les étapes d'installation indiquées [ici]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) pour les installer.

C'est tout ! **Vous pouvez trouver des téléporteurs vers les donjons installés et la guilde des aventuriers dans /em, sur la page Téléporteurs !**

[Plus d'informations sur le Gremio de Aventureros ici !]($language$/elitemobs/adventurers_guild_world.md)
<br>[Téléchargez le monde central du Gremio de Aventureros ici !](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recommandés

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Utilisé pour les indicateurs. [Liste des indicateurs d'EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Utilisé pour l'indicateur anti-vol, utile à avoir.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Utilisé pour afficher les informations d'EliteMobs sur d'autres plugins, comme pour le chat. [Plus d'informations]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Utilisé pour déguiser les boss personnalisés en n'importe quoi d'autre. Les déguisements sont largement utilisés dans nos donjons officiels, il est donc fortement recommandé d'installer ce plugin. [Plus d'informations]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Utilisé pour lier les annonces EliteMobs au chat Discord. [Plus d'informations]($language$/elitemobs/discordsrv.md)

# Mise à jour du contenu des donjons

Pour mettre à jour le contenu des donjons, répétez simplement les étapes d'installation ci-dessus. **Vous ne ***devez*** pas supprimer de fichiers**, EliteMobs s'en charge lorsque vous importez la mise à jour.

# Questions fréquemment posées (FAQ)

## Le mini-donjon n'est qu'un terrain plat

<details><summary>Réponse</summary>

95 % du temps, cela signifie que vous n'avez pas suivi les instructions de configuration. Si vous avez dézippé des fichiers ou chargé des mondes à l'aide d'autres plugins, réinstallez le contenu en suivant les étapes énumérées ci-dessus. Vous n'avez besoin d'aucun autre plugin pour charger correctement les mondes.

</details>

## Le chat PNJ semble bizarre / les trous de ver ne fonctionnent pas / autre comportement étrange après l'installation

<details>

<summary>Réponse</summary>

Exécutez la commande `/em reload` après avoir configuré un donjon pour vous assurer que toutes les valeurs sont entièrement initialisées. Un redémarrage est encore mieux, mais ne devrait pas être nécessaire.

</details>

## Les boss n'apparaissent pas

### Le boss apparaissait plus tôt !

<details>

<summary>Réponse</summary>

Les boss régionaux ont un temps de réapparition. Vous pouvez vérifier quand le boss est censé réapparaître en allant dans son fichier de configuration et en copiant les chiffres après les `:` dans la section des emplacements d'apparition.

Exemple :

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

Dans ce cas, les chiffres que vous recherchez sont `1643259941451`. Vous pouvez utiliser [ce](https://www.unixtimestamp.com/index.php) site Web pour les convertir en une date spécifique. Vous pouvez supprimer les chiffres pour forcer la réapparition du boss, assurez-vous de faire `/em reload` après les avoir supprimés.

</details>

### Le boss n'est jamais apparu !

<details>

<summary>Réponse</summary>

Vérifiez les points suivants :

- Avez-vous ou quelqu'un d'autre tué le boss, ou s'est-il échappé via la fonction de temps d'arrêt ? Le boss pourrait être en train de réapparaître. Vérifiez les temps de recharge, des informations à ce sujet se trouvent dans la section ci-dessus.
- Voyez s'il y a des erreurs sur la console, en particulier après avoir installé le donjon ou après un `/em reload`. Les erreurs devraient vous indiquer ce qui ne va pas.
- Vérifiez si votre région est protégée par un autre plugin qui empêcherait l'apparition de mobs.
- Vérifiez la difficulté de votre monde, les mobs ne peuvent pas apparaître avec la difficulté paisible.
- Vérifiez les indicateurs WorldGuard, voyez si l'apparition de mobs est définie sur autoriser.
- Vérifiez si vous avez installé le contenu du donjon sur la zone d'apparition, qui est protégée par défaut.
- Très, très rarement, le problème pourrait être lié au jour que votre serveur pense être. Assurez-vous que la date de la machine de votre serveur est correcte, sinon la mécanique de réapparition pourrait causer des problèmes.

</details>

## Quelque chose ne va pas et je n'arrive pas à le résoudre

<details>

<summary>Réponse</summary>

Cela se produit généralement après avoir essayé et échoué à modifier correctement des fichiers d'une manière qu'EliteMobs ne pouvait pas auto-réparer. Si vous êtes bloqué et que vous ne parvenez pas à trouver comment le réparer à partir des messages de la console au démarrage/à l'installation du donjon, la meilleure chose à faire est une installation propre d'EliteMobs.

Sauvegardez votre dossier `~/plugins/EliteMobs/data` pour conserver les données du joueur, puis supprimez le dossier `~/plugins/EliteMobs/`. Démarrez votre serveur, éteignez-le, restaurez le contenu de votre dossier de données sauvegardé **pendant que le serveur est hors ligne**, puis redémarrez-le. Vous pouvez maintenant reprendre l'installation du contenu EliteMobs.

</details>
