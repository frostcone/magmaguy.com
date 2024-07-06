# Événements de script Elite

Les EliteScripts sont basés sur des événements. Cela signifie qu'ils sont lancés lorsqu'un événement spécifique est déclenché. Voici les événements actuellement valides :

| Événement | Détails | Cible directe [[?]($language$/elitemobs/elitescript_targets.md)] |
|---|---|---|
| EliteMobDamagedByEliteMobEvent | Élite endommagée par une autre élite |                                ❌                                 |
| EliteMobDamagedByPlayerEvent | Élite endommagée par un joueur |                         Joueur attaquant                          |
| EliteMobDamagedEvent | Élite endommagée par n'importe quoi |                                ❌                                 |
| EliteMobDeathEvent | Mort de l'élite |                                ❌                                 |
| EliteMobEnterCombatEvent | Élite entre en combat avec un joueur |                         Joueur engagé                             |
| EliteMobExitCombatEvent | Élite sort du combat |                                ❌                                 |
| EliteMobHealEvent | Élite entièrement soignée |                                ❌                                 |
| EliteMobSpawnEvent | Apparition de l'élite |                                ❌                                 |
| EliteMobTargetPlayerEvent | Élite cible un joueur |                         Joueur ciblé                            |
| PlayerDamagedByEliteMobEvent | Élite endommage un joueur |                          Joueur endommagé                         |
| ElitePhaseSwitchEvent | Apparition du boss lors d'un changement de phase |                                ❌                                 |
| ZoneEnterEvent | L'entité entre dans la zone. Nécessite qu'une zone soit définie ! | Entité qui est entrée dans la zone                                |
| ZoneLeaveEvent | L'entité quitte la zone. Nécessite qu'une zone soit définie ! | Entité qui a quitté la zone                                  |

**Remarque : "Élite" désigne toute entité agressive générée par le plugin, qu'il s'agisse d'un renfort, d'un boss ou de toute autre chose.**
**Remarque : ZoneEnterEvent et ZoneLeaveEvent sont coûteux en calculs, veuillez donc les utiliser avec parcimonie !**

`Cible directe` est utilisé par les cibles de script, plus d'informations à ce sujet [ici]($language$/elitemobs/elitescript_targets.md).

`ZoneEnterEvent` et `ZoneLeaveEvent` sont des événements spéciaux qui permettent aux scripteurs de déclencher des actions en fonction des entités entrant et sortant des zones définies dans les scripts. La `CIBLE DIRECTE` de ZoneEnterEvent et ZoneLeaveEvent est l'entité qui est entrée ou sortie (cela signifie que vous ne pouvez pas utiliser la cible directe comme cible de la zone), et en raison du fonctionnement de la logique interne, seuls les points absolus (coordonnées spécifiques) et les points relatifs au boss peuvent être utilisés pour analyser les entrées et les sorties (impossible d'utiliser des zones qui ciblent les joueurs).

Il ne peut y avoir qu'une seule section [Événement]($language$/elitemobs/elitescript_events.md) par script. Cependant, plusieurs événements peuvent être définis comme déclencheurs pour un script :

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
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


