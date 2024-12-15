# Actions de script d'élite

Les actions sont au cœur du script. Ceux-ci déterminent ce que fait le script et vous permettent de définir des intervalles personnalisés.

Les actions commencent toujours par le type d'action que vous allez effectuer. Différents types d'action ont des fonctions différentes. De plus, toutes les actions ont une ou plusieurs cibles. Les actions peuvent également avoir un temporisateur d'attente, pour s'assurer que les choses se produisent avec des délais personnalisables. Enfin, les actions peuvent également avoir plusieurs autres champs spécifiques au type d'action.

## Attributs partagés

| Valeurs             |                                                                                 Détails                                                                                  | Spécial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                 Définit la durée d'attente (en ticks) avant l'exécution des actions                                                 | ❌ |
| `repeatEvery`      |        Définit les actions à répéter toutes les quantités définies de ticks. Tout script qui a cette valeur définie mais qui n'utilise pas les durées sera terminé lors de la mort du mob pour éviter le décalage.         | ❌ |
| `times`            |                                                           Définit le nombre de fois qu'une action se produira                                                           | Requiert `repeatEvery` |
| `scripts`          |                                                         Définit les scripts qui s'exécuteront à la fin de l'action                                                          | ❌ |
| `onlyRunOneScript` |                                                       Sélectionne un des `scripts` au hasard et exécute seulement celui-là.                                                       | ❌ |
| `offset`           | Cette option se trouve sous `Target`. Vous permet de décaler l'emplacement de la cible. Le décalage ne fonctionne pas avec les actions qui ciblent des zones avec `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |
| `debug`           | Cette option va sous la section d'action du script. Lorsqu'elle est définie sur true, elle affiche des icônes de barrière dans la zone où se trouve l'action. | ❌ |

## Types d'action

### ACTION_BAR_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Affichera dans la barre d'action le texte « Bonjour le monde ! » à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Ajoute une barre de boss à la ou aux cibles.

| Valeurs |                            Détails                            | Obligatoire |                   Spécial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |
| `duration` |               Durée de la barre de boss en ticks               | ✅ |                      ❌                       |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Affichera une barre de boss qui indique « Bonjour le monde ! » à tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 1 seconde.

</div>

</details>

</div>

---

### DAMAGE

C'est ainsi que vous pouvez endommager les entités en tant qu'autres entités.

_Remarque : utilise en natif le système de dégâts d'EliteMobs ! Cela signifie que vous verrez la réduction normale de l'armure d'élite due aux coups. Vous trouverez plus d'informations à ce sujet dans la section des multiplicateurs._

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicateur de dégâts                       | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Définit les dégâts à la moitié de la quantité de dégâts de base que le boss infligerait au joueur, en tenant compte des réductions de dégâts.

</div>

</details>

</div>

#### multiplier

Définit le multiplicateur de dégâts du boss pour l'effet.

**Important**: afin de permettre une mise à l'échelle facile et automatique des pouvoirs, les dégâts sont appliqués en faisant en sorte que le boss frappe le joueur une fois et en multipliant les dégâts de base du boss par le multiplicateur.

Cela signifie qu'un multiplicateur de 1.0 est identique à un coup normal du boss. 2.0 est un coup 2 fois la force normale, et 0.5 est à 50 %.

---

### MAKE_INVULNERABLE

Rend une cible invulnérable.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Définit si le boss est invulnérable                | ✅ |
| `duration` |       Définit la durée de l'invulnérabilité (ticks)        | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Rend un boss invulnérable pendant 60 ticks (3 secondes).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifie les dégâts infligés à un boss ou infligés aux joueurs par ce boss. Il s'agit d'une action spéciale avec quelques exigences spéciales.

| Valeurs | Détails | Obligatoire |
| --- | :-: | :-: |
| `multiplier` | Multiplicateur de dégâts. | ✅ |

Cette action est spéciale et doit se trouver dans un script qui possède un détecteur d'événements pour un événement de dégâts. Les événements de dégâts valides suivants : `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` pour les événements qui réduisent les dégâts infligés au boss et `PlayerDamagedByEliteMobEvent` pour les événements qui réduisent les dégâts infligés aux joueurs.

Il est fortement recommandé d'apprendre comment fonctionne la condition `hasTag` afin de mieux utiliser cette action. Lorsqu'elle est utilisée correctement, il est possible de faire en sorte que le boss résiste temporairement aux dégâts ou qu'il soit plus faible aux dégâts, et cela peut être associé à des améliorations du joueur, à l'emplacement du boss ou à de nombreux autres facteurs.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Augmente les dégâts infligés au boss par les joueurs de 2 fois, mais seulement si le joueur a une balise appelée "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envoie un message aux cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enverra un message de chat à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### NAVIGATE

Fait que le boss navigue (marche) vers la cible spécifiée.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Définit la vitesse de navigation du boss. `1.0` étant la valeur du boss telle que définie dans la configuration. | ❌ | ❌ |
| `bValue` | Définit si le boss doit être téléporté de force vers `FinalTarget` si la navigation échoue. | ❌ | ❌ |
| `duration` | Combien de temps le boss doit-il essayer de naviguer avant d'abandonner. Défini en ticks. La valeur par défaut est de 100 ticks. | ✅ | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

Fera naviguer le boss jusqu'à l'endroit où se trouvait le joueur lorsqu'il a frappé le boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Place un bloc à l'emplacement ou aux emplacements de la cible pendant la durée.

| Valeurs |                                                         Détails                                                         | Obligatoire |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Material](#material) du bloc, [liste complète ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Durée de l'effet, en ticks                                               | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: DOME
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Place une coupole de verre autour du boss qui durera 6 secondes.

_Remarque : si aucune durée n'est définie, le placement du bloc est permanent._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Lit l'animation spécifiée pour un modèle personnalisé à l'aide de Model Engine. Nécessite Model Engine et un modèle personnalisé valide sur la cible qui exécute l'animation.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le nom de l'animation                 | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Définit que le boss doit lire l'animation fortnite_dance. Requiert que le serveur ait Model Engine, que le boss ait un déguisement personnalisé et que le déguisement personnalisé ait une animation appelée "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Reproduit un son dans le jeu.

| Valeurs   |                            Détails                            | Obligatoire |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Définit le nom du son à lire            |     ✅     |
| `pitch`  |           Définit la hauteur du son à lire            |     ❌     |
| `volume` |           Définit le volume du son à lire           |     ❌     |

[Voici une liste pratique de tous les sons Minecraft !](https://www.digminecraft.com/lists/sound_list_pc.php) N'oubliez pas que cela peut également lire des sons personnalisés à partir de packs de ressources.
Lorsque l'action cible une zone, l'action reproduira un son pour chaque bloc de cette zone. Cela peut rendre le son considérablement plus fort que la normale, alors envisagez de réduire le volume si vous ciblez une zone.

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Reproduit le son de résonance des cloches de Minecraft à l'emplacement du boss

</div>

</details>

</div>

---

### POTION_EFFECT

Applique un effet de potion spécifique à la ou aux cibles.

| Valeurs |                                                       Détails                                                       | Obligatoire |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Type d'effet, [la liste valide est ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Niveau de l'effet de potion (commence à 0)                                          | ✅ |
| `duration` |                                           Durée de l'effet (ticks)                                            | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Cela fera léviter tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 2 secondes (40 ticks).

</div>

</details>

</div>

---

### PUSH

Pousse une cible par un vecteur défini.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Définit le vecteur de la vitesse qui sera appliquée        | ✅ |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en davantage sur l'utilisation de ceux-ci [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Cela poussera tous les joueurs qui se trouvent à moins de 10 blocs du boss dans les airs en utilisant une force de 0,3. Cette action sera répétée 10 fois toutes les 0,5 secondes (10 ticks). En d'autres termes, cela fera durer cet effet pendant 5 secondes (10 fois x 10 ticks = 100 ticks).

Cela donnera l'impression que les joueurs sautent.

</div>

</details>

</div>

#### vector

Les vecteurs sont définis par `vValue : x,y,z`. Par exemple, si vous voulez que la cible soit poussée vers le haut, vous pouvez faire `vValue : 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Exécute une commande en tant que console.

| Valeurs |                             Détails                             | Obligatoire |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Remarque : il existe des marqueurs de position disponibles ! Consultez RUN_COMMAND_AS_PLAYER, ce sont les mêmes**

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName mon niveau est $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Fait diffuser par la console le message "Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName mon niveau est $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Exécute une commande en tant que `joueur`. Requiert que la cible soit des joueurs.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Commande qui sera exécutée                    | ✅ |

**Remarque : RUN_COMMAND_AS_PLAYER et RUN_COMMAND_AS_CONSOLE utilisent les marqueurs de position suivants :**

| Marqueur de position | Détails | Spécial |
| --- | :-: | :-: |
| `$playerName` | Nom d'affichage du joueur | La cible doit être un joueur |
| `$playerX` | Emplacement X du joueur | La cible doit être un joueur |
| `$playerY` | Emplacement Y du joueur | La cible doit être un joueur |
| `$playerZ` | Emplacement Z du joueur | La cible doit être un joueur |
| `$bossName` | Nom d'affichage du joueur | La cible doit être un joueur |
| `$bossX` | Emplacement X du boss | ❌ |
| `$bossY` | Emplacement Y du boss | ❌ |
| `$bossZ` | Emplacement Z du boss | ❌ |
| `$bossLevel` | Niveau du boss | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel.
```

Fait que le joueur qui a frappé le boss dise "Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel.", ce qui signifie qu'il dit simplement "Bonjour mon nom est $bossName. Quel est votre niveau ? mon niveau est $bossLevel."

</div>

</details>

</div>

---

### SET_ON_FIRE

Enflamme la cible.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                        Durée (ticks)                       | ✅ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: SELF
      duration: 60
```

Enflamme le boss pendant 3 secondes.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoque un renfort.

*Remarque : vous devez généralement invoquer des boss personnalisés via cette action. Vous pouvez lire la documentation de configuration du boss pour cela [ici]($language$/elitemobs/creating_bosses.md).*

| Valeurs |                Détails                 | Obligatoire |
| --- |:-------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `filename` | Nom de fichier du boss à générer | ✅ |
| `inheritLevel` |     Définit si le boss doit hériter du niveau du boss qui l'a engendré      | ❌ |
| `inheritAggro` |   Définit si le boss doit hériter de l'aggro du boss qui l'a engendré      | ❌ |
| `spawnNearby` |   Définit si le boss doit apparaître près du boss principal au lieu d'être sur le dessus.    | ❌ |
| `location` | Définit l'endroit où le boss apparaîtra, par rapport à la position de la première cible. | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: SELF
      filename: "test_boss.yml"
      inheritLevel: true
      inheritAggro: true
      spawnNearby: true
```

Génère un renfort "test_boss.yml" qui hérite du niveau et de l'aggro du boss parent et apparaît près de celui-ci.

</div>

</details>

</div>

---

### TELEPORT

Téléporte la cible.

| Valeurs |                        Détails                        | Obligatoire |
| --- |:-------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |   Où la cible doit être téléportée   | ✅ |

*Remarque : cela accepte également les vecteurs relatifs. Apprenez-en davantage sur l'utilisation de ceux-ci [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: SELF
      location: 0,10,0
```

Téléporte le boss de 10 blocs vers le haut.

</div>

</details>

</div>

#### location

Vous pouvez définir n'importe quel emplacement spécifique, tel que `location : monde,100,100,100`, mais vous pouvez également utiliser des décalages et des directions relatives. Si vous voulez un décalage par une distance spécifique, vous pouvez simplement écrire quelque chose comme `location : 0,10,0` pour le téléporter 10 blocs vers le haut.

---

### TITLE_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial | Par défaut |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                    Définit le message de titre                     | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` | ❌ |
| `subtitle` |                   Définit le message de sous-titre                   | ✅ | Peut utiliser les [codes de couleur](#color_codes) avec `&` | ❌ |
| `duration` |           Définit la durée du message (ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Définit le temps d'apparition (ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Définit le temps de disparition (ticks)                   | ❌ | ❌ | `0` |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Bonjour le monde !"
      subtitle: "&2Je suis un sous-titre !"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Définit le message du titre pour afficher le titre "&2Bonjour le monde !" avec le sous-titre "&2Je suis un sous-titre !" à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

Le message restera à l'écran pendant 8 secondes (120 + 20 + 20 = 160 ticks), y compris l'animation de fondu en entrée et en sortie.

</div>

</details>

</div>

---

### UNTAG

Supprime les balises du boss. Consultez `TAG` pour voir comment fonctionnent les balises.

| Valeurs |                            Détails                            | Obligatorio |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Définit les balises                         | ✅ |
| `duration` |      Définit la durée de la suppression des balises (ticks)      | ❌ |

<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
eliteScript:
  Example:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
  Example2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Supprime du boss la balise "very_sus", qui peut ensuite être vérifiée par le biais des conditions de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Donne l'effet visuel de congélation au joueur et inflige ses dégâts associés. Cela doit être combiné avec un script de répétition si vous ne voulez pas que l'effet s'estompe immédiatement.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                 Durée de l'effet, en ticks                  | ✅ |

<div align="center">
<div align="center">

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) CONGÉLATION VISUELLE NE FONCTIONNE PAS ACTUELLEMENT, IL N'EST DONC PAS POSSIBLE DE PRENDRE UNE CAPTURE D'ÉCRAN

</div>

Donne à tous les joueurs qui se trouvent à moins de 10 blocs du boss le visuel de congélation pendant 3 secondes (60 ticks).

</div>

</details>

</div>

---

# Actions multiples

Parfois, vous voudrez peut-être effectuer plusieurs actions à la fois lorsqu'un événement se produit, comme envoyer plusieurs messages ou effectuer différentes actions séquentiellement. Cela se fait facilement ! Ajoutons une action d'effet de potion à notre exemple :

<div align="center">

<details>

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
