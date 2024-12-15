[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Événements de script Elite

Les EliteScripts sont basés sur des événements. Cela signifie qu'ils sont lancés lorsqu'un événement spécifique est déclenché. Voici les événements valides actuellement :

| Événement | Détails | Cible directe [[?]($language$/elitemobs/elitescript_targets.md)] |
| --- | :-: |:----------------------------------------------------------------:|
| EliteMobDamagedByEliteMobEvent | Élites endommagées par une autre élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élites endommagées par un joueur |                         Joueur ayant infligé des dégâts                          |
| EliteMobDamagedEvent | Élites endommagées par n'importe quoi |                                ❌                                 |
| EliteMobDeathEvent | Mort d'une élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élites entrant en combat avec un joueur |                         Joueur attaquant                          |
| EliteMobExitCombatEvent | Élites sortant du combat |                                ❌                                 |
| EliteMobHealEvent | Guérison complète de l'élite |                                ❌                                 |
| EliteMobSpawnEvent | Apparition d'une élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Élites ciblant un joueur |                         Joueur ciblé                          |
| PlayerDamagedByEliteMobEvent | Élites endommageant un joueur |                          Joueur endommagé                          |
| ElitePhaseSwitchEvent | Boss engendré par un changement de phase |                                ❌                                 |
| ZoneEnterEvent | Entité entrant dans la zone. Requiert la configuration d'une zone ! | Entité qui est entrée dans la zone                                 |
| ZoneLeaveEvent | Entité quittant la zone. Requiert la configuration d'une zone ! | Entité qui a quitté la zone                                 |

**Remarque : "Élite" fait référence à toute entité agressive générée par le plugin, qu'il s'agisse d'un renfort, d'un boss ou de toute autre chose.**
**Remarque : les événements ZoneEnterEvent et ZoneLeaveEvent sont coûteux en termes de calcul à exécuter, veuillez donc les utiliser avec parcimonie !**

`Cible directe` est utilisé par les cibles du script. Vous trouverez plus d'informations à ce sujet [ici]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` et `ZoneLeaveEvent` sont des événements spéciaux qui permettent aux scénaristes de déclencher des actions basées sur les entités qui entrent et sortent des zones définies dans les scripts. Le DIRECT_TARGET de ZoneEnterEvent et ZoneLeaveEvent est l'entité qui est entrée ou sortie (cela signifie que vous ne pouvez pas utiliser la cible directe comme cible de la zone) et, en raison du fonctionnement de la logique interne, seuls les points absolus (coordonnées spécifiques) et les points relatifs au boss peuvent être utilisés pour la recherche d'entrées et de sorties (impossible d'utiliser des zones qui ciblent des joueurs).

Il ne peut y avoir qu'une seule section [Événement]($language$/elitemobs/elitescript_events.md) par script. Cependant, plusieurs événements peuvent être définis comme déclencheurs d'un script :

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    - EliteMobTargetPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

Ce script ferait sauter l'élite lorsqu'elle est touchée par un joueur ou lorsqu'elle cible un joueur.

</div>

</details>

</div>
