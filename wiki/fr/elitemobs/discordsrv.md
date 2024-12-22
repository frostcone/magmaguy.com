EliteMobs utilise DiscordSRV pour activer la diffusion de messages de priorité de niveau 3. Vous pouvez en savoir plus
sur le système de priorité des annonces [ici]($language$/elitemobs/announcement_priority_system.md).

En résumé, cela signifie que certains boss personnalisés très spéciaux sont capables d'envoyer des messages sur Discord
d'une manière qui ressemble à ceci:

![exemple de message discord](https://i.imgur.com/sIndft0.png)

L'objectif est de créer un salon d'annonces EliteMobs dédié que les joueurs peuvent consulter pour voir s'il y a des
boss mondiaux intéressants actuellement en vie qu'ils peuvent aller tuer et montrer qu'ils l'ont fait dans le classement
des morts.

# Mise en place

## Configuration de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) est un plugin différent qui n'est pas développé par
moi. [Vous pouvez trouver leur guide d'installation complet ici](https://github.com/discordsrv/discordsrv/wiki/Installation).
Si vous avez des difficultés à le configurer, [leur salon d'assistance est ici](https://discord.discordsrv.com/). Je ne
suis pas en mesure de fournir une assistance pour ce plugin, veuillez donc vous référer à eux pour cette partie de
l'installation.

## Configuration du fichier de configuration EliteMobs DiscordSRV

Une fois que vous avez correctement configuré DiscordSRV (*et vous devez tester pour voir s'il fonctionne réellement
avant de passer à cette étape*), **la configuration d'EliteMobs ne comporte qu'une seule étape**.

Allez dans le fichier de configuration `DiscordSRV.yml` dans le dossier de configuration d'EliteMobs et vous trouverez
une option de configuration appelée `announcementRoomName`.

Il existe trois valeurs que vous pouvez utiliser pour ce message. Je recommande la n° 1.

1. [Recommandé] Le nom du salon tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Peu
   importe le nom que vous avez donné au salon, l'important est que vous utilisiez le bon nom. Voici un exemple du salon
   que j'ai configuré pour être dédié aux événements EliteMobs:
   ![exemple d'utilisation du nom](https://i.imgur.com/a2kMWXv.png)
   Dans mon cas, l'option doit être lue `announcementRoomName: EMEvents`.

2. L'identifiant du salon tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Voici un exemple
   du salon. *Veuillez noter que chaque salon est unique. Je ne montre des images qu'à titre d'exemple, n'essayez pas de
   copier les numéros d'identifiant. Cela ne fonctionnera pas. Votre configuration doit avoir un ensemble unique de
   numéros en fonction de l'identifiant de votre salon discord.*
   ![exemple d'utilisation de l'identifiant](https://i.imgur.com/CGElkdh.png)
3. [Mauvais] Le nom de votre salon tel qu'il apparaît sur Discord. Il n'est pas garanti que cela fonctionne correctement
   en raison d'un certain nombre de facteurs. N'oubliez pas que votre salon discord doit être configuré dans les
   fichiers de configuration de DiscordSRV: ce n'est pas parce que vous pouvez mettre le nom du salon dans ce fichier de
   configuration que vous pouvez éviter de le configurer dans DiscordSRV.

## Test

Vous pouvez utiliser la commande `/em discord [message]` pour voir si votre configuration fonctionne. Si votre message
apparaît, vous avez terminé!
