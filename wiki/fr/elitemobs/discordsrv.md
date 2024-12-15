EliteMobs utilise DiscordSRV pour activer la diffusion de messages de priorité de niveau 3. Vous pouvez en savoir plus sur le système de priorité des annonces [ici]($language$/elitemobs/announcement_priority_system.md).

Essentiellement, cela signifie que certains boss personnalisés très spéciaux peuvent envoyer des messages sur Discord de la manière suivante :

![discord message example](https://i.imgur.com/sIndft0.png)

L'intention est de créer une salle d'annonce EliteMobs dédiée que les joueurs peuvent consulter pour voir s'il y a des boss mondiaux intéressants actuellement en vie qu'ils peuvent aller tuer et montrer qu'ils l'ont fait dans le classement des éliminations.

# Tout configurer

## Configuration de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) est un plugin différent qui n'a pas été développé par moi. [Vous pouvez trouver leur guide de configuration détaillé ici](https://github.com/discordsrv/discordsrv/wiki/Installation). Si vous avez des difficultés à le configurer, [leur salle de support est ici](https://discord.discordsrv.com/). Je ne suis pas en mesure de fournir une assistance pour ce plugin, veuillez donc vous adresser à eux pour cette partie de l'installation.

## Configuration de la configuration DiscordSRV d'EliteMobs

Une fois que vous avez correctement configuré DiscordSRV (*et que vous devez tester pour voir si cela fonctionne réellement avant de passer à cette étape*), **la configuration d'EliteMobs n'a qu'une seule étape**.

Accédez au fichier de configuration `DiscordSRV.yml` dans le dossier de configuration d'EliteMobs et vous trouverez une option de configuration appelée `announcementRoomName`.

Vous pouvez utiliser trois valeurs pour ce message. Je recommande le n° 1.

1. [Recommandé] Le nom de la salle tel que vous l'avez configuré dans le fichier de configuration DiscordSRV. Peu importe comment vous avez appelé la salle, mais vous devez utiliser le nom correct. Voici un exemple de la salle que j'ai configurée pour être dédiée aux événements EliteMobs :
   ![using name example](https://i.imgur.com/a2kMWXv.png)
   Dans mon cas, l'option devrait être `announcementRoomName : EMEvents`.

2. L'ID de la salle telle que vous l'avez configurée dans le fichier de configuration de DiscordSRV. Voici un exemple de la salle. *Veuillez noter que chaque salle est unique. Je ne montre des images qu'à titre d'exemple, n'essayez pas de copier les numéros d'ID. Cela ne fonctionnera pas. Votre configuration doit avoir un ensemble unique de numéros basé sur l'ID de votre salle Discord.*
   ![using id example](https://i.imgur.com/CGElkdh.png)
3. [Mauvais] Le nom de votre salle tel qu'il apparaît sur Discord. Il n'est pas garanti que cela fonctionne correctement en raison d'un certain nombre de facteurs. Gardez à l'esprit que votre salle Discord doit être configurée dans les fichiers de configuration de DiscordSRV : ce n'est pas parce que vous pouvez mettre le nom de la salle dans ce fichier de configuration que vous pouvez éviter de la configurer dans DiscordSRV.

## Test
Vous pouvez utiliser la commande `/em discord [message]` pour voir si votre configuration fonctionne. Si votre message apparaît, c'est terminé !
