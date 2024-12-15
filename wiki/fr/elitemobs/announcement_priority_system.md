Le système de priorité d'annonce gère l'importance des messages d'EliteMobs. Ceux-ci ne sont actuellement utilisés que
pour gérer les messages envoyés par les apparitions de boss personnalisés.

# Aide-mémoire abrégé :

* Niveau 0: Silencieux/Local pour les joueurs qui ont combattu le boss
* Niveau 1: Messages du chat (s'il a des messages d'apparition)
* Niveau 2: Suivi (s'il a un message de localisation)
* Niveau
  3: [Annonces Discord (s'il a des messages d'apparition et que DiscordSRV est installé et configuré correctement)]($language$/elitemobs/discordsrv.md)

# Comment cela fonctionne :

Remarque: vous devez configurer votre boss personnalisé avec ce système de priorité si vous souhaitez utiliser une
valeur non par défaut. Cliquez [ici]($language$/elitemobs/creating_bosses.md&section=announcementpriority) pour
apprendre comment faire cela.

## Niveau 0

Force le boss personnalisé à être silencieux. Cela signifie qu'aucun message ne sera envoyé à son sujet, même s'il est
configuré pour en avoir, à une exception près: ils enverront des messages de mort directement aux joueurs qui ont
endommagé le boss.

## Niveau 1

**Ceci est la valeur par défaut.** Le boss personnalisé pourra envoyer un message dans le chat s'il est configuré pour
le faire. Il enverra l'apparition, la mort et les
messages d'échappement s'il est configuré pour en avoir.

## Niveau 2

Le boss personnalisé aura le même comportement qu'au niveau 1 et pourra également être suivi par les joueurs lors de l'
apparition s'il a un message de localisation associé. Les joueurs peuvent cliquer sur le chat pour le suivre lorsqu'il
apparaît, ou ils peuvent utiliser le menu /em pour le suivre.

## Niveau 3

Le boss personnalisé a le même comportement qu'au niveau 2 et enverra également des messages à la salle Discord
configurée pour envoyer des notifications sur
EliteMobs. [La page sur la façon de configurer cette fonctionnalité peut être trouvée ici.]($language$/elitemobs/discordsrv.md)
Les messages sur Discord seront les mêmes que les messages du chat - apparition/mort/fuite
