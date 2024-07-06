Le système de priorité des annonces gère le niveau d'importance des messages d'EliteMobs. Ceux-ci sont actuellement utilisés uniquement pour gérer les messages envoyés par les apparitions de boss personnalisés.

# Aide-mémoire abrégé :

*   Niveau 0 : Silencieux / Local pour les joueurs qui ont combattu le boss
*   Niveau 1 : Messages de chat (s’il a des messages d’apparition)
*   Niveau 2 : Suivi (s’il a un message de localisation)
*   Niveau 3 : [Annonces Discord (s’il a des messages d’apparition et que DiscordSRV est installé et configuré correctement)]($language$/elitemobs/discordsrv.md)

# Comment ça marche :

Remarque : Vous devez configurer votre boss personnalisé avec ce système de priorité si vous souhaitez utiliser une valeur différente de celle par défaut. Cliquez [ici]($language$/elitemobs/creating_bosses.md&section=announcementpriority) pour savoir comment faire.

## Niveau 0

Force le boss personnalisé à être silencieux. Cela signifie qu'aucun message ne sera envoyé à son sujet, même s'il est configuré pour en avoir, à une exception près : il enverra des messages de décès directement aux joueurs qui ont endommagé le boss.

## Niveau 1

**C’est la valeur par défaut.** Le boss personnalisé pourra envoyer un message dans le chat s'il est configuré pour le faire. Il enverra des messages d’apparition, de décès et de fuite s’il est configuré pour les avoir.

## Niveau 2

Le boss personnalisé aura le même comportement qu'au niveau 1, et pourra également être suivi par les joueurs lors de son apparition s'il a un message de localisation qui lui est associé. Les joueurs peuvent cliquer sur le chat pour le suivre lorsqu'il apparaît, ou ils peuvent utiliser le menu /em pour le suivre.

## Niveau 3

Le boss personnalisé a le même comportement qu'au niveau 2 et enverra également des messages au salon Discord configuré pour envoyer des notifications concernant EliteMobs. [La page expliquant comment configurer cette fonctionnalité se trouve ici.]($language$/elitemobs/discordsrv.md) Les messages sur Discord seront les mêmes que les messages de chat : apparition/décès/fuite
