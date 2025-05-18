Voici la traduction en français, en conservant le formatage markdown :

# Vidéo de configuration

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*Ce guide suppose que vous utilisez EliteMobs ***7.2.37*** ou une version ultérieure.*

# Premier démarrage

Redémarrez le serveur une fois.

<details>

<summary><b>Pourquoi ?</b></summary>

EliteMobs augmente la santé maximale de votre fichier de configuration spigot.yml lors du premier démarrage du serveur. Cela permet aux mobs d'élite d'avoir plus de 2000 points de vie. Cela ne modifie pas la santé des autres mobs - donc cela ne change pas les mobs vanilla ou ceux des plugins.

Ce changement nécessite un redémarrage du serveur pour fonctionner correctement.

</details>

# Permissions

À partir d'EliteMobs 7.2.23, toutes les permissions recommandées sont déjà configurées par défaut. Vous pouvez en savoir plus sur les permissions [ici]($language$/elitemobs/permissions_and_commands.md).

# Donjons et Monde du Hub de la Guilde des Aventuriers

À partir d'EliteMobs 7.2.35, il y a maintenant un dossier `imports` dans le répertoire EliteMobs. Le processus d'installation des Donjons et du Monde de la Guilde des Aventuriers est le même :

1) Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir les liens de téléchargement.

2) Téléchargez / déplacez les fichiers dans le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de placer les fichiers **ZIPÉS** à l'intérieur du dossier `imports` sans les modifier d'aucune manière, EliteMobs extraira automatiquement les fichiers et les déplacera aux bons endroits.

<div align="center">

<details>

<summary>Exemple Visuel</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

3) Redémarrez ou faites `/em reload`. Après quelques secondes, les donjons devraient s'installer automatiquement. Lorsque vous faites `/em setup`, les indicateurs des donjons que vous avez téléchargés devraient être verts, indiquant que les donjons sont correctement installés et à jour. Si un donjon affiche un panneau de verre jaune, cela signifie qu'il existe une version plus récente du donjon et qu'il doit être mis à jour.

<div align="center">

<details>

<summary>Exemple Visuel</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</details>

</div>

4) ***Si vos fichiers de donjon contiennent des Modèles Personnalisés***, vous pouvez éventuellement suivre les étapes d'installation listées [ici]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) pour les installer.

C'est tout ! **Vous pouvez trouver les téléportations vers les donjons installés et la guilde des aventuriers dans /em, sur la page Téléportations !**

[Plus d'infos sur la Guilde des Aventuriers ici !]($language$/elitemobs/adventurers_guild_world.md)
<br>[Téléchargez le Monde du Hub de la Guilde des Aventuriers ici !](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recommandés

- [WorldGuard](https://dev.bukkit.org/projects/worldguard) : Utilisé pour les drapeaux (flags). [Liste des drapeaux EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/) : Utilisé pour le drapeau anti-vol, utile à avoir.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/) : Utilisé pour afficher les informations d'EliteMobs sur d'autres plugins, comme pour le chat. [Plus d'infos]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/) : Utilisé pour déguiser les Bosses Personnalisés en n'importe quoi d'autre. Les déguisements sont très utilisés dans nos donjons officiels, il est donc fortement recommandé d'installer ce plugin. [Plus d'infos]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md) : Utilisé pour lier les annonces d'EliteMobs au chat Discord. [Plus d'infos]($language$/elitemobs/discordsrv.md)

# Mise à jour du contenu des donjons

Pour mettre à jour le contenu des donjons, répétez simplement les étapes d'installation ci-dessus. **Vous ***n'avez pas*** à supprimer de fichiers**, EliteMobs s'en charge lorsque vous importez la mise à jour.

# Foire Aux Questions (FAQ)

## Le mini-donjon n'est qu'un terrain plat

<details><summary>Réponse</summary>

95% du temps, cela signifie que vous n'avez pas suivi les instructions de configuration. Si vous avez décompressé des fichiers ou chargé des mondes à l'aide d'autres plugins, réinstallez le contenu en suivant les étapes listées ci-dessus. Vous n'avez besoin d'aucun autre plugin pour charger correctement les mondes.

</details>

## Le chat des PNJ semble bizarre / les trous de ver ne fonctionnent pas / autre comportement étrange après l'installation

<details>

<summary>Réponse</summary>

Exécutez la commande `/em reload` après avoir configuré un donjon pour vous assurer que toutes les valeurs sont entièrement initialisées. Un redémarrage est encore mieux, mais ne devrait pas être nécessaire.

</details>

## Les boss n'apparaissent pas

### Le boss apparaissait avant !

<details>

<summary>Réponse</summary>

Les boss régionaux ont un temps de réapparition. Vous pouvez vérifier quand le boss est censé réapparaître en allant dans son fichier de configuration et en copiant les nombres après le `:` dans la section des lieux d'apparition.

Exemple :

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

Dans ce cas, les nombres que vous recherchez sont `1643259941451`. Vous pouvez utiliser [ce](https://www.unixtimestamp.com/index.php) site web pour convertir cela en une date spécifique. Vous pouvez supprimer les nombres pour forcer le boss à réapparaître, assurez-vous de faire `/em reload` après les avoir supprimés.

</details>

### Le boss n'est jamais apparu !

<details>

<summary>Réponse</summary>

Vérifiez les points suivants :

- Avez-vous ou quelqu'un d'autre tué le boss, ou s'est-il échappé via la fonction de timeout ? Le boss pourrait être en train de réapparaître. Vérifiez les temps de recharge, les informations à ce sujet se trouvent dans la section ci-dessus.
- Vérifiez s'il y a des erreurs dans la console, surtout après avoir installé le donjon ou après un `/em reload`. Les erreurs devraient vous indiquer ce qui ne va pas.
- Vérifiez si votre région est protégée par un autre plugin qui empêcherait l'apparition de mobs
- Vérifiez la difficulté de votre monde, les mobs ne peuvent pas apparaître en difficulté paisible
- Vérifiez les drapeaux WorldGuard, voyez si l'apparition de mobs est autorisée
- Vérifiez si vous avez installé le contenu du donjon sur la zone d'apparition, qui est protégée par défaut
- Très, très rarement, le problème pourrait être lié au jour que votre serveur pense être. Assurez-vous que la date de la machine de votre serveur est correcte, sinon le mécanisme de réapparition pourrait causer des problèmes.

</details>


## Quelque chose ne va pas et je n'arrive pas à le réparer

<details>

<summary>Réponse</summary>

Cela arrive généralement après avoir essayé et échoué à modifier correctement des fichiers d'une manière qu'EliteMobs n'a pas pu réparer lui-même. Si vous êtes bloqué et ne parvenez pas à réparer le problème à partir des messages de la console au démarrage / lors de l'installation du donjon, la meilleure chose à faire est une installation propre d'EliteMobs.

Sauvegardez votre dossier `~/plugins/EliteMobs/data` pour conserver les données des joueurs, puis supprimez le dossier `~/plugins/EliteMobs/`. Démarrez votre serveur, arrêtez-le, restaurez le contenu de votre dossier de données sauvegardé **pendant que le serveur est hors ligne**, puis redémarrez-le. Vous pouvez maintenant reprendre l'installation du contenu d'EliteMobs.

</details>