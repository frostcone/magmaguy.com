Voici la traduction en français, en conservant le formatage markdown :

# Actions de Script Élite

Les actions sont au cœur du script. Elles déterminent ce que fait le script et vous permettent de définir des intervalles personnalisés.

Les actions commencent toujours par le type d'action que vous allez effectuer. Différents types d'actions remplissent différentes fonctions. De plus, toutes les actions ont une cible ou des cibles. Les actions peuvent également avoir un délai d'attente, pour s'assurer que les choses se produisent avec des délais personnalisables. Enfin, les actions peuvent également avoir plusieurs autres champs spécifiques au type d'action.

## Attributs partagés

| Valeurs             |                                                                                 Détails                                                                                  | Spécial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Plus d'infos ici](fr/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Définit le temps d'attente (en ticks) avant d'exécuter les actions                                                      | ❌ |
| `repeatEvery`      |        Définit que les actions se répètent à chaque intervalle de ticks défini. Tout script qui a ceci défini mais n'utilise pas `times` sera terminé à la mort du mob pour éviter le lag. Vous pouvez randomiser cette valeur en utilisant `~` exemple : `1~5`.         | ❌ |
| `times`            |                                                            Définit le nombre de fois qu'une action se produira. Vous pouvez randomiser cette valeur en utilisant `~` exemple : `1~5`.                                                            | Nécessite `repeatEvery` |
| `scripts`          |                                                         Définit les scripts qui s'exécuteront à la fin de l'action                                                          | ❌ |
| `onlyRunOneScript` |                                                       Choisit l'un des `scripts` au hasard et n'exécute que celui-ci.                                                       | ❌ |
| `offset`           | Cette option se trouve sous `Target`. Vous permet de décaler l'emplacement de la cible. L'offset ne fonctionne pas avec les actions qui ciblent des zones avec `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |
| `debug`           | Cette option se trouve sous la section action du script. Lorsqu'elle est définie sur true, elle affichera des icônes de barrière dans la zone où se trouve l'action. | ❌ |

## Types d'action

### ACTION_BAR_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes Couleur](#color_codes) avec `&` |

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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Définira la barre d'action pour afficher "Hello World" à tous les joueurs se trouvant à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Ajoute une barre de boss aux cibles.

| Valeurs |                            Détails                            | Obligatoire |                   Spécial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes Couleur](#color_codes) avec `&` |
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
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Définira une barre de boss affichant "Hello World" à tous les joueurs se trouvant à moins de 10 blocs du boss pendant 1 seconde.

</div>

</details>

</div>

---

### DAMAGE

C'est ainsi que vous pouvez infliger des dégâts à des entités en tant qu'autres entités.

_Note : ceci utilise nativement le système de dégâts d'EliteMobs ! Cela signifie que vous verrez la réduction d'armure normale d'élite due aux coups. Plus d'informations à ce sujet dans la section multiplicateurs._

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicateur de dégâts                       | ✅ |

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
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Définit les dégâts comme étant la moitié des dégâts de base que le boss infligerait au joueur, en tenant compte des réductions de dégâts.

</div>

</details>

</div>

#### multiplier

Définit le multiplicateur de dégâts du boss pour l'effet.

**Important** : afin de permettre aux pouvoirs de s'adapter facilement et automatiquement, les dégâts sont appliqués en faisant frapper le boss le joueur une fois et en multipliant les dégâts de base du boss par le multiplicateur.

Cela signifie qu'un multiplicateur de 1.0 est identique à un coup normal du boss. 2.0 est un coup 2 fois plus fort que la normale, et 0.5 est 50% moins fort.

---

### MAKE_INVULNERABLE

Rend une cible invulnérable.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Définit si le boss est invulnérable                | ✅ |
| `duration` |       Définit la durée de l'invulnérabilité (en ticks)        | ❌ |

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
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Rend un boss invulnérable pendant 60 ticks (3 secondes).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifie les dégâts infligés à un boss ou infligés aux joueurs par ce boss. C'est une action spéciale avec quelques exigences particulières.

| Valeurs | Détails | Obligatoire |
| --- | :-: | :-: |
| `multiplier` | Multiplicateur de dégâts. | ✅ |

Cette action est spéciale et doit se trouver dans un script qui a un écouteur d'événement pour un événement de dégâts. Les événements de dégâts valides sont les suivants : `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` pour les événements qui réduisent les dégâts infligés au boss et `PlayerDamagedByEliteMobEvent` pour les événements qui réduisent les dégâts infligés aux joueurs.

Il est fortement recommandé d'apprendre comment fonctionne la condition `hasTag` afin de mieux utiliser cette action. Lorsqu'elle est utilisée correctement, il est possible de rendre le boss temporairement résistant ou plus faible aux dégâts, et cela peut être associé à des buffs de joueur, à l'emplacement du boss ou à de nombreux autres facteurs.

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
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Augmente les dégâts infligés au boss par les joueurs de 2x, mais seulement si le joueur a un tag appelé "CoolPlayer".

</div>

</details>

</div>

---

### MESSAGE

Envoie un message aux cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes Couleur](#color_codes) avec `&` |

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
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enverra un message de chat à tous les joueurs se trouvant à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### NAVIGATE

Fait naviguer (marcher) le boss vers la cible spécifiée.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Définit la vitesse de navigation du boss. `1.0` étant la valeur du boss telle que définie dans la configuration. | ❌ | ❌ |
| `bValue` | Définit si le boss doit être téléporté de force vers le `FinalTarget` si la navigation échoue. | ❌ | ❌ |
| `duration` | Combien de temps le boss doit-il essayer de naviguer avant d'abandonner. Défini en ticks. La valeur par défaut est 100 ticks. | ✅ | ❌ |

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

Fera naviguer le boss jusqu'à l'endroit où le joueur se tenait lorsqu'il a frappé le boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Place un bloc à l'emplacement (ou aux emplacements) cible(s) pour la durée.

| Valeurs |                                                         Détails                                                         | Obligatoire |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Plus d'infos ici](fr/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Matériau](#material) du bloc, [liste complète ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Durée de l'effet, en ticks                                               | ❌ |

<div align="center">

<details>

<summary><b>Exemple</b></summary>

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

Place un dôme de verre autour du boss qui durera 6 secondes.

_Note : Si aucune durée n'est définie, le placement du bloc est permanent._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Joue l'animation spécifiée pour un Modèle Personnalisé utilisant Model Engine. Nécessite Model Engine et un Modèle Personnalisé valide sur la cible qui exécute l'animation.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le nom de l'animation                 | ✅ |

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
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Définit le boss pour jouer l'animation fortnite_dance. Nécessite que le serveur ait Model Engine, que le boss ait un déguisement personnalisé et que le déguisement personnalisé ait une animation appelée "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Joue un son en jeu.

| Valeurs   |                            Détails                            | Obligatoire |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Définit le nom du son à jouer            |     ✅     |
| `pitch`  |           Définit la hauteur du son à jouer            |     ❌     |
| `volume` |           Définit le volume du son à jouer           |     ❌     |

[Voici une liste pratique de tous les sons de Minecraft !](https://www.digminecraft.com/lists/sound_list_pc.php) N'oubliez pas que cela peut également jouer des sons personnalisés à partir de packs de ressources.
Lorsque l'action cible une zone, l'action jouera un son pour chaque bloc de cette zone. Cela peut rendre le son considérablement plus fort que la normale, alors envisagez de baisser le volume si vous ciblez une zone.

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
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Joue le son de résonance des cloches de Minecraft à l'emplacement du boss.

</div>

</details>

</div>

---

### POTION_EFFECT

Applique un effet de potion spécifique aux cibles.

| Valeurs |                                                       Détails                                                       | Obligatoire |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Plus d'infos ici](fr/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Type d'effet, [liste valide ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Niveau de l'effet de potion (commence à 0)                                          | ✅ |
| `duration` |                                           Durée de l'effet (en ticks)                                            | ✅ |

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

Cela fera léviter tous les joueurs se trouvant à moins de 10 blocs du boss pendant 2 secondes (40 ticks).

</div>

</details>

</div>

---

### PUSH

Pousse une cible selon un vecteur défini.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Définit le vecteur de la vélocité qui sera appliquée        | ✅ |

*Note : Cette action accepte également les vecteurs relatifs. Apprenez-en plus sur leur utilisation [ici](fr/elitemobs/elitescript_relative_vectors.md).*

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

Cela poussera tous les joueurs se trouvant à moins de 10 blocs du boss en l'air en utilisant une force de 0.3. Cette action sera répétée 10 fois toutes les 0.5 secondes (10 ticks). En d'autres termes, cet effet durera 5 secondes (10 fois x 10 ticks = 100 ticks).

Cela donnera l'impression que les joueurs sautent.

</div>

</details>

</div>

#### vector

Les vecteurs sont définis par `vValue: x,y,z`. Par exemple, si vous voulez que la cible soit poussée vers le haut, vous pouvez faire `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Exécute une commande en tant que console.

| Valeurs |                             Détails                             | Obligatoire |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Plus d'infos ici](fr/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Note : des placeholders sont disponibles ! Consultez RUN_COMMAND_AS_PLAYER, ils sont les mêmes**

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
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Fait diffuser par la console le message "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel".

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

Exécute une commande en tant que joueur. Nécessite que la cible soit des joueurs.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Plus d'infos ici](fr/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Commande qui sera exécutée                    | ✅ |Please specify the language you would like the text translated into.Okay, I am ready. Please provide the target language for the translation.