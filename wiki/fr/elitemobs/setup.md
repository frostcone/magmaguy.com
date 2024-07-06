```markdown
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

<summary><b>Pourquoi ?</b></summary>

EliteMobs augmente la santé maximale de votre fichier de configuration `spigot.yml` la première fois que le serveur démarre. Cela permet aux mobs Elite d'avoir plus de 2 000 points de vie. Cela ne modifie pas la santé d'autres mobs, donc cela ne modifie pas les mobs vanilla ou les mobs de plugin.

Cette modification nécessite un redémarrage du serveur pour fonctionner.

</details>

# Autorisations

Depuis la version 7.2.23 d'EliteMobs, toutes les autorisations recommandées sont déjà configurées par défaut. Vous pouvez en savoir plus sur les autorisations [ici]($language$/elitemobs/permissions_and_commands.md).

# Donjons et monde central de la Guilde des aventuriers

Depuis la version 7.2.35 d'EliteMobs, il existe désormais un dossier `imports` dans le répertoire EliteMobs. Le processus d'installation des donjons et du monde central de la Guilde des aventuriers est le même :

1) Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir des liens vers les téléchargements.

2) Téléchargez/déplacez les fichiers vers le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de placer les fichiers **ZIPPÉS** dans le dossier `imports` sans les modifier de quelque manière que ce soit. EliteMobs extraira automatiquement les fichiers et les déplacera vers les emplacements corrects.

<div align="center">

<details>

<summary>Exemple visuel</summary>

<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_import.webm" type="video/webm">
  Your browser ne prend pas en charge la balise vidéo.
</video>

</details>

</div>

3) Redémarrez le serveur ou exécutez `/em reload`. Après quelques secondes, les donjons doivent s'installer automatiquement. Lorsque vous exécutez `/em setup`, les indicateurs des donjons que vous avez téléchargés doivent être verts et indiquer que les donjons sont correctement installés et à jour. Si des donjons affichent un panneau de verre jaune, cela signifie qu'il existe une version plus récente du donjon et qu'il doit être mis à jour.

<div align="center">

<details>

<summary>Exemple visuel</summary>


<video autoplay loop muted controls>
  <source src="../../../img/wiki/setup_install.webm" type="video/webm">
  Your browser ne prend pas en charge la balise vidéo.
</video>

</details>

</div>

4) ***Si vos fichiers de donjons contiennent des modèles personnalisés***, vous pouvez éventuellement suivre les étapes d'installation listées [ici]($language$/elitemobs/custom_models.md&section=importing-custom-models-from-dungeons) pour les installer.

C'est tout ! **Vous pouvez trouver des téléports vers les donjons et la guilde des aventuriers installés dans `/em`, dans la page Téléports !**

[Plus d'informations sur la Guilde des aventuriers ici !]($language$/elitemobs/adventurers_guild_world.md)
<br>[Téléchargez le monde central de la Guilde des aventuriers ici !](https://magmaguy.itch.io/elitemobs-the-adventurers-guild)

# Plugins recommandés

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Utilisé pour les balises. [Liste des balises EliteMobs]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Utilisé pour la balise anti-vol, utile à avoir.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Utilisé pour afficher les informations d'EliteMobs sur d'autres plugins, comme pour le chat. [Plus d'informations]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Utilisé pour déguiser les boss personnalisés en n'importe quoi d'autre. Les déguisements sont largement utilisés dans nos donjons officiels, il est donc fortement recommandé d'installer ce plugin. [Plus d'informations]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Utilisé pour lier les annonces d'EliteMobs au chat Discord. [Plus d'informations]($language$/elitemobs/discordsrv.md)

# Mise à jour du contenu du donjon

Pour mettre à jour le contenu du donjon, il suffit de répéter les étapes d'installation ci-dessus. **Vous n'avez ***pas*** à supprimer de fichiers**, EliteMobs s'en charge lorsque vous importez la mise à jour.

# Foire aux questions (FAQ)

## Le minidungeon est juste un terrain plat

<details><summary>Réponse</summary>

95 % du temps, cela signifie que vous n'avez pas suivi les instructions de configuration. Si vous avez décompressé des fichiers ou chargé des mondes à l'aide d'autres plugins, réinstallez le contenu en suivant les étapes listées ci-dessus. Vous n'avez besoin d'aucun autre plugin pour charger correctement les mondes.

</details>

## Le chat des PNJ est étrange/les trous de ver ne fonctionnent pas/autre comportement étrange après l'installation

<details>

<summary>Réponse</summary>

Exécutez la commande `/em reload` après avoir configuré un donjon pour vous assurer que toutes les valeurs sont correctement initialisées. Un redémarrage est encore mieux, mais ne devrait pas être nécessaire.

</details>

## Les boss ne spawnent pas

### Le boss spawnait avant !

<details>

<summary>Réponse</summary>

Les boss régionaux ont un temps de réapparition. Vous pouvez vérifier quand le boss est programmé pour réapparaître en allant dans son fichier de configuration et en copiant les chiffres après les `:` dans la section des emplacements de spawn.

Exemple :

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

Dans ce cas, les chiffres que vous recherchez sont `1643259941451`. Vous pouvez utiliser [ce]

