Voici la traduction en français, en conservant le formatage markdown :

EliteMobs utilise DiscordSRV pour permettre la diffusion de messages de priorité de niveau 3. Vous pouvez en savoir plus sur le Système de Priorité des Annonces [ici](fr/elitemobs/announcement_priority_system.md).

En substance, cela signifie que certains Bosses Personnalisés très spéciaux sont capables d'envoyer des messages sur Discord d'une manière qui ressemble à ceci :

![exemple de message discord](https://i.imgur.com/sIndft0.png)

L'intention est de créer un salon d'annonce EliteMobs dédié que les joueurs peuvent consulter pour voir s'il y a des Bosses Mondiaux intéressants actuellement vivants qu'ils peuvent aller tuer et montrer qu'ils l'ont fait dans le classement des éliminations.

# Configuration complète

## Configuration de DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) est un plugin différent non développé par moi. [Vous pouvez trouver leur guide d'installation détaillé ici](https://github.com/discordsrv/discordsrv/wiki/Installation). Si vous avez du mal à le configurer, [leur salon de support est ici](https://discord.discordsrv.com/). Je ne suis pas en mesure de fournir de support pour ce plugin, veuillez donc vous référer à eux pour cette partie de l'installation.

## Configuration de la configuration DiscordSRV d'EliteMobs

Une fois que vous avez correctement configuré DiscordSRV (*et vous devez tester pour voir si cela fonctionne vraiment avant de passer à cette étape*), **la configuration d'EliteMobs n'a qu'une seule étape**.

Allez dans le fichier de configuration `DiscordSRV.yml` dans le dossier de configuration d'EliteMobs et vous trouverez une option de configuration appelée `announcementRoomName`.

Il y a trois valeurs que vous pouvez utiliser pour ce message. Je recommande la #1.

1. [Recommandé] Le nom du salon tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Peu importe comment vous avez appelé le salon, seule l'utilisation du nom correct compte. Voici un exemple du salon que j'ai configuré pour être dédié aux événements EliteMobs :
   ![exemple d'utilisation du nom](https://i.imgur.com/a2kMWXv.png)
   Dans mon cas, l'option devrait être `announcementRoomName: EMEvents`.

2. L'ID du salon tel que vous l'avez configuré dans le fichier de configuration de DiscordSRV. Voici un exemple du salon. *Veuillez noter que chaque salon est unique. Je ne montre que des images à titre d'exemple, n'essayez pas de copier les numéros d'ID. Cela ne fonctionnera pas. Votre configuration devrait avoir un ensemble unique de numéros basé sur l'ID de votre salon discord.*
   ![exemple d'utilisation de l'id](https://i.imgur.com/CGElkdh.png)
3. [Mauvais] Le nom de votre salon tel qu'il apparaît sur discord. Cela n'est pas garanti de fonctionner correctement en raison d'un certain nombre de facteurs. Gardez à l'esprit que votre salon discord doit être configuré dans les fichiers de configuration de DiscordSRV - ce n'est pas parce que vous pouvez mettre le nom du salon dans ce fichier de configuration que vous pouvez ignorer sa configuration sur DiscordSRV.

## Test
Vous pouvez utiliser la commande `/em discord [message]` pour voir si votre configuration fonctionne. Si votre message apparaît, vous avez terminé !