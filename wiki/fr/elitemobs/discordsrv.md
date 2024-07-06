EliteMobs utilise DiscordSRV pour permettre la diffusion de messages de priorité de niveau 3. Vous pouvez en savoir plus sur le système de priorité des annonces [ici]($language$/elitemobs/announcement_priority_system.md).

En substance, cela signifie que certains boss personnalisés très spéciaux sont en mesure d'envoyer des messages sur Discord d'une manière qui ressemble à ceci :

![exemple de message discord](https://i.imgur.com/sIndft0.png)

L'intention est de créer une salle d'annonce EliteMobs dédiée que les joueurs peuvent consulter pour voir s'il y a des boss mondiaux intéressants actuellement en vie qu'ils peuvent aller tuer et montrer qu'ils l'ont fait dans le classement des tueries.

# Tout mettre en place

## Configuration de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) est un plugin différent que je n'ai pas développé. [Vous pouvez trouver leur guide d'installation complet ici](https://github.com/discordsrv/discordsrv/wiki/Installation). Si vous avez des difficultés à l'installer, [leur salle d'assistance se trouve ici](https://discord.discordsrv.com/). Je ne suis pas en mesure de fournir une assistance pour ce plugin, veuillez donc vous référer à eux pour cette partie de l'installation.

## Configuration de la configuration DiscordSRV d'EliteMobs

Une fois que vous avez correctement configuré DiscordSRV (*et vous devez tester pour voir s'il fonctionne vraiment avant de passer à cette étape*), **la configuration d'EliteMobs ne comporte qu'une seule étape**.

Allez dans le fichier de configuration `DiscordSRV.yml` dans le dossier de configuration d'EliteMobs et vous trouverez une option de configuration appelée `announcementRoomName`.

Il existe trois valeurs que vous pouvez utiliser pour ce message. Je recommande la n°1.

1. [Recommandé] Le nom de la salle tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Le nom que vous avez donné à la salle n'a pas d'importance, il suffit d'utiliser le nom correct. Voici un exemple de la salle que j'ai configurée pour être dédiée aux événements EliteMobs :
   ![exemple d'utilisation du nom](https://i.imgur.com/a2kMWXv.png)
   Dans mon cas, l'option devrait être `announcementRoomName: EMEvents`.

2. L'ID de la salle tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Voici un exemple de la salle. *Veuillez noter que chaque salle est unique. Je ne montre les images qu'à titre d'exemple, n'essayez pas de copier les numéros d'identification. Cela ne fonctionnera pas. Votre configuration doit avoir un ensemble unique de numéros basés sur l'identifiant de votre salle discord.*
   ![exemple d'utilisation de l'identifiant](https://i.imgur.com/CGElkdh.png)
3. [Mauvais] Le nom de votre salle tel qu'il apparaît sur discord. Il n'est pas garanti que cela fonctionne correctement en raison d'un certain nombre de facteurs. Gardez à l'esprit que votre salle discord doit être configurée dans les fichiers de configuration de DiscordSRV - ce n'est pas parce que vous pouvez mettre le nom de la salle dans ce fichier de configuration que vous pouvez ignorer sa configuration sur DiscordSRV.

## Essai
Vous pouvez utiliser la commande `/em discord [message]` pour voir si votre configuration fonctionne. Si votre message s'affiche, vous avez terminé !
