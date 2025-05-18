Le Système de Priorité d'Annonce gère l'importance des messages d'EliteMobs. Ceux-ci ne sont actuellement utilisés que pour gérer les messages envoyés par les apparitions de Boss Personnalisés.

# Aide-mémoire rapide :

*   Niveau 0 : Silencieux / Local aux joueurs qui ont combattu le boss
*   Niveau 1 : Messages de Chat (s'il a des messages d'apparition)
*   Niveau 2 : Suivi (s'il a un message de localisation)
*   Niveau 3 : [Annonces Discord (s'il a des messages d'apparition et que DiscordSRV est installé et configuré correctement)]($language$/elitemobs/discordsrv.md)

# Comment ça marche :

Note : Vous devez configurer votre Boss Personnalisé avec ce système de priorité si vous souhaitez utiliser une valeur non par défaut. Cliquez [ici]($language$/elitemobs/creating_bosses.md&section=announcementpriority) pour apprendre comment faire.

## Niveau 0

Force le Boss Personnalisé à être silencieux. Cela signifie qu'aucun message ne sera envoyé à son sujet, même s'il est configuré pour en avoir, à une exception près : Il enverra des messages de mort directement aux joueurs qui ont endommagé le boss.

## Niveau 1

**C'est la valeur par défaut.** Le Boss Personnalisé pourra envoyer un message dans le chat s'il est configuré pour le faire. Il enverra des messages d'apparition, de mort et\
d'évasion s'il est configuré pour en avoir.

## Niveau 2

Le Boss Personnalisé aura le même comportement qu'au Niveau 1, et pourra également être suivi par les joueurs lors de son apparition s'il a un message de localisation associé. Les joueurs peuvent cliquer sur le chat pour le suivre lorsqu'il apparaît, ou ils peuvent utiliser le menu /em pour le suivre.

## Niveau 3

Le Boss Personnalisé aura le même comportement qu'au Niveau 2, et enverra également des messages au salon Discord configuré pour envoyer des notifications concernant EliteMobs. [La page expliquant comment configurer cette fonctionnalité se trouve ici.]($language$/elitemobs/discordsrv.md) Les messages sur Discord seront les mêmes que les messages du chat - apparition/mort/évasion