# Actions du script Élite

Les actions sont au cœur du script. Elles déterminent ce que fait le script et vous permettent de définir des intervalles personnalisés.

Les actions commencent toujours par le type d'action que vous allez effectuer. Différents types d'actions ont des
fonctions différentes. De plus, toutes les actions ont une cible ou des cibles. Les actions peuvent également avoir un
minuteur d'attente, pour s'assurer que les choses se produisent avec des délais personnalisables. Enfin, les actions
peuvent également avoir plusieurs autres champs spécifiques au type d'action.

## Attributs partagés

| Valeurs            |                                                                                          Détails                                                                                           |         Spécial         |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|
| `Target`           |                                                           [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                                                           |            ❌            |
| `wait`             |                                                             Définit le temps d'attente (en ticks) avant d'exécuter les actions                                                             |            ❌            |
| `repeatEvery`      |  Définit la répétition des actions à chaque intervalle de ticks. Tout script qui a cette valeur définie mais qui n'utilise pas de temps sera terminé à la mort du mob pour éviter le lag.  |            ❌            |
| `times`            |                                                                    Définit le nombre de fois qu'une action se produira                                                                     | Nécessite `repeatEvery` |
| `scripts`          |                                                                Définit les scripts qui seront exécutés à la fin de l'action                                                                |            ❌            |
| `onlyRunOneScript` |                                                               Choisit au hasard un des `scripts` et n'exécute que celui-ci.                                                                |            ❌            |
| `offset`           | Cette option se trouve sous `Target`. Permet de décaler l'emplacement de la cible. Le décalage ne fonctionne pas avec les actions qui ciblent des zones avec `ZONE_FULL` ou `ZONE_BORDER`. |            ❌            |
| `debug`            |                 Cette option se trouve dans la section action du script. Lorsqu'elle est définie sur true, elle affichera des icônes de barrière dans la zone de l'action.                 |            ❌            |

## Types d'action

### ACTION_BAR_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs  |                                Détails                                 | Obligatoire |                           Spécial                           |
|----------|:----------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |                              ❌                              |
| `sValue` |                                Message                                 |      ✅      | Peut utiliser les [Codes de Couleur](#color_codes) avec `&` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Affichera dans la barre d'action "Bonjour le monde !" pour tous les joueurs situés à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Ajoute une barre de boss à la/les cible(s).

| Valeurs    |                                Détails                                 | Obligatoire |                           Spécial                           |
|------------|:----------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |                              ❌                              |
| `sValue`   |                                Message                                 |      ✅      | Peut utiliser les [Codes de Couleur](#color_codes) avec `&` |
| `duration` |                   Durée de la barre de boss en ticks                   |      ✅      |                              ❌                              |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Affichera une barre de boss avec le message "Bonjour le monde !" pour tous les joueurs situés à moins de 10 blocs du
boss pendant 1 seconde.

</div>

</details>

</div>

---

### DAMAGE

C'est ainsi que vous pouvez infliger des dégâts à des entités en tant qu'autres entités.

_Remarque : cela utilise nativement le système de dégâts d'EliteMobs ! Cela signifie que vous verrez la réduction
d'armure élite normale due aux coups. Plus d'informations à ce sujet dans la section des multiplicateurs._

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicateur de dégâts                       | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Définit les dégâts à la moitié des dégâts de base que le boss infligerait au joueur, en tenant compte des réductions de
dégâts.

</div>

</details>

</div>

#### multiplicateur

Définit le multiplicateur de dégâts du boss pour l'effet.

**Important** : afin de rendre la mise à l'échelle des pouvoirs facile et automatique, les dégâts sont appliqués en
faisant frapper le boss une fois le joueur et en multipliant les dégâts de base du boss par le multiplicateur.

Cela signifie qu'un multiplicateur de 1,0 est le même qu'un coup normal du boss. 2,0 est un coup 2 fois plus fort que la
normale, et 0,5 est 50% moins fort.

---

### MAKE_INVULNERABLE

Rend une cible invulnérable.

| Valeurs        |                                Détails                                 | Obligatoire |
|----------------|:----------------------------------------------------------------------:|:-----------:|
| `Target`       | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `invulnerable` |                  Définit si le boss est invulnérable                   |      ✅      |
| `duration`     |            Définit la durée de l'invulnérabilité (en ticks)            |      ❌      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

Modifie les dégâts infligés à un boss ou aux joueurs par ce boss. Il s'agit d'une action spéciale avec quelques
exigences particulières.

| Valeurs | Détails | Obligatoire |
| --- | :-: | :-: |
| `multiplier` | Multiplicateur de dégâts. | ✅ |

Cette action est spéciale et doit se trouver dans un script qui a un écouteur d'événement pour un événement de dégâts.
Les événements de dégâts suivants sont
valides : `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` pour les événements
qui réduisent les dégâts infligés au boss et `PlayerDamagedByEliteMobEvent` pour les événements qui réduisent les dégâts
infligés aux joueurs.

Il est fortement recommandé d'apprendre comment la condition `hasTag` fonctionne afin de mieux utiliser cette action.
Lorsqu'elle est utilisée correctement, il est possible de rendre le boss temporairement résistant ou plus faible aux
dégâts, et cela peut être associé aux buffs des joueurs, à l'emplacement du boss ou à de nombreux autres facteurs.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "JoueurCool"
        Target:
          targetType: DIRECT_TARGET
```

Augmente de 2x les dégâts infligés au boss par les joueurs, mais uniquement si le joueur a un tag appelé "JoueurCool"

</div>

</details>

</div>

---

### MESSAGE

Envoie un message à la/les cible(s).

| Valeurs  |                                Détails                                 | Obligatoire |                           Spécial                           |
|----------|:----------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |                              ❌                              |
| `sValue` |                                Message                                 |      ✅      | Peut utiliser les [Codes de Couleur](#color_codes) avec `&` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Bonjour le monde !"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Enverra un message de chat à tous les joueurs situés à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### NAVIGATE

Fait naviguer (marcher) le boss vers la cible spécifiée.

| Valeurs       |                                                              Détails                                                              | Obligatoire | Spécial |
|---------------|:---------------------------------------------------------------------------------------------------------------------------------:|:-----------:|:-------:|
| `Target`      |                              [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                               |      ✅      |    ❌    |
| `FinalTarget` |                              [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                               |      ✅      |    ❌    |
| `velocity`    |     Définit la vitesse de navigation du boss. `1.0` étant la valeur du boss telle qu'elle est définie dans la configuration.      |      ❌      |    ❌    |
| `bValue`      |                  Définit si le boss doit être téléporté de force vers la `FinalTarget` si la navigation échoue.                   |      ❌      |    ❌    |
| `duration`    | Combien de temps le boss doit-il essayer de naviguer avant d'abandonner. Définie en ticks. La valeur par défaut est de 100 ticks. |      ✅      |    ❌    |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

Fera naviguer le boss vers l'endroit où se trouvait le joueur lorsqu'il a frappé le boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Place un bloc à l'emplacement cible pendant la durée spécifiée.

| Valeurs    |                                                        Détails                                                         | Obligatoire |
|------------|:----------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Target`   |                         [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                         |      ✅      |
| `material` | [Matériau](#material) du bloc, [liste complète ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |      ✅      |
| `duration` |                                               Durée de l'effet, en ticks                                               |      ❌      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

_Remarque : Si aucune durée n'est définie, le placement du bloc est permanent._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Joue l'animation spécifiée pour un modèle personnalisé en utilisant Model Engine. Nécessite que Model Engine et un
modèle personnalisé valide soient sur la cible qui exécute l'animation.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le nom de l'animation                 | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "danse_fortnite"
```

Définit le boss pour qu'il joue l'animation danse_fortnite. Nécessite que le serveur ait Model Engine, que le boss ait
un déguisement personnalisé et que le déguisement personnalisé ait une animation appelée "danse_fortnite".

</div>

</details>

</div>

---

### PLAY_SOUND

Joue un son en jeu.

| Valeurs  |                                Détails                                 | Obligatoire |
|----------|:----------------------------------------------------------------------:|:-----------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |                     Définit le nom du son à jouer                      |      ✅      |
| `pitch`  |                   Définit la hauteur du son à jouer                    |      ❌      |
| `volume` |                    Définit le volume du son à jouer                    |      ❌      |

[Voici une liste pratique de tous les sons de Minecraft !](https://www.digminecraft.com/lists/sound_list_pc.php)
N'oubliez pas que cela peut également jouer des sons personnalisés à partir de packs de ressources.
Lorsque l'action cible une zone, l'action jouera un son pour chaque bloc de cette zone. Cela peut rendre le son
considérablement plus fort que la normale, alors envisagez de baisser le volume si vous ciblez une zone.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Joue le son de résonance des cloches de Minecraft à l'emplacement du boss

</div>

</details>

</div>

---

### POTION_EFFECT

Applique un effet de potion spécifique à la/les cible(s).

| Valeurs            |                                                      Détails                                                       | Obligatoire |
|--------------------|:------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Target`           |                       [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)                       |      ✅      |
| `potionEffectType` | Type d'effet, [liste valide ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) |      ✅      |
| `amplifier`        |                                     Niveau de l'effet de potion (commence à 0)                                     |      ✅      |
| `duration`         |                                              Durée de l'effet (ticks)                                              |      ✅      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

Cela fera léviter tous les joueurs situés à moins de 10 blocs du boss pendant 2 secondes (40 ticks).

</div>

</details>

</div>

---

### PUSH

Pousse une cible par un vecteur défini.

| Valeurs  |                                Détails                                 | Obligatoire |
|----------|:----------------------------------------------------------------------:|:-----------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `vValue` |          Définit le vecteur de la vélocité qui sera appliquée          |      ✅      |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en plus sur comment les
utiliser [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

Cela poussera tous les joueurs situés à moins de 10 blocs du boss en l'air avec une force de 0,3. Cette action sera
répétée 10 fois toutes les 0,5 secondes (10 ticks). En d'autres termes, cet effet durera 5 secondes (10 fois x 10
ticks = 100 ticks).

Cela donnera l'impression que les joueurs sautent.

</div>

</details>

</div>

#### vecteur

Les vecteurs sont définis par `vValue: x,y,z`. Par exemple, si vous voulez que la cible soit poussée vers le haut, vous
pouvez faire `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Exécute une commande en tant que console.

| Valeurs |                             Détails                             | Obligatoire |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Remarque : des espaces réservés sont disponibles ! Consultez RUN_COMMAND_AS_PLAYER, ils sont les mêmes**

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName mon niveau est $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Fait diffuser par la console le message "Bonjour $bossName mon nom est $playerName. Quel est votre niveau ? $bossName
mon niveau est $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Exécute une commande en tant que `joueur. Nécessite que la cible soit des joueurs.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Commande qui sera exécutée                    | ✅ |

**Remarque : RUN_COMMAND_AS_PLAYER et RUN_COMMAND_AS_CONSOLE utilisent les espaces réservés suivants :**

| Espace réservé |          Détails          |           Spécial            |
|----------------|:-------------------------:|:----------------------------:|
| `$playerName`  | Nom d'affichage du joueur | La cible doit être un joueur |
| `$playerX`     |  Emplacement X du joueur  | La cible doit être un joueur |
| `$playerY`     |  Emplacement Y du joueur  | La cible doit être un joueur |
| `$playerZ`     |  Emplacement Z du joueur  | La cible doit être un joueur |
| `$bossName`    | Nom d'affichage du joueur | La cible doit être un joueur |
| `$bossX`       |   Emplacement X du boss   |              ❌               |
| `$bossY`       |   Emplacement Y du boss   |              ❌               |
| `$bossZ`       |   Emplacement Z du boss   |              ❌               |
| `$bossLevel`   |      Niveau du boss       |              ❌               |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
```yaml
        targetType: ZONE_BORDER
      particles:
      - particle: FLAME
        amount: 1
      - particle: SMOKE_LARGE
        amount: 1
      - particle: REDSTONE
        amount: 0
        x: 1
        y: 0
        z: 0
        red: 255
        green: 255
        blue: 255
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_FULL
      particles:
      - particle: NOTE
        amount: 1
      wait: 20
      repeatEvery: 20
      times: 5
```

When a boss is struck, the script will spawn particles.

The first set of particles will spawn on the border of the zone. These will be: FLAME and SMOKE_LARGE (both at default
settings). There will also be a `REDSTONE` particle with its values set to the parameters below the particle, meaning
that it will not actually spawn but instead it will modify the velocity of the particles, pushing them towards the x
direction.

The second set of particles will be spawning on the entirety of the cylinder. These will be NOTE particles, with the
default values, and will happen every 20 ticks, for 5 times, with an initial wait of 20 ticks.
</div>

</details>

</div>

---

### TELEPORT

Teleports a target to a location.

| Values        |                            Details                            | Mandatory |
|---------------|:-------------------------------------------------------------:|:---------:|
| `Target`      | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `FinalTarget` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

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
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 20
```

Will teleport the boss to the location a player is at within 20 blocks.

</div>

</details>

</div>

---

### SET_TAG

Sets a tag on an entity.

| Values     |                            Details                            | Mandatory |
|------------|:-------------------------------------------------------------:|:---------:|
| `Target`   | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue`   |                            The Tag                            |     ✅     |
| `duration` |             Sets the duration of the tag (ticks)              |     ❌     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_TAG
      Target:
        targetType: SELF
      sValue: "ExampleTag"
      duration: 100
```

Sets the tag "ExampleTag" on the boss for 5 seconds.

</div>

</details>

</div>

---

### REMOVE_TAG

Removes a tag from an entity.

| Values   |                            Details                            | Mandatory |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |                            The Tag                            |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: REMOVE_TAG
      Target:
        targetType: SELF
      sValue: "ExampleTag"
```

Removes the tag "ExampleTag" on the boss.

</div>

</details>

</div>

---

### MATERIAL

Materials are defined in the following format `Material: Material_name`

[Here is the list of all possible materials.](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)

**Note**: Some materials such as air, fire or water are not valid. Use block materials only.

---

### COLOR_CODES

EliteMobs uses the Minecraft color codes system. The following are the most used ones:

| Code | Color       |
|------|-------------|
| `&0` | Black       |
| `&1` | Dark Blue   |
| `&2` | Dark Green  |
| `&3` | Dark Aqua   |
| `&4` | Dark Red    |
| `&5` | Dark Purple |
| `&6` | Gold        |
| `&7` | Gray        |
| `&8` | Dark Gray   |
| `&9` | Blue        |
| `&a` | Green       |
| `&b` | Aqua        |
| `&c` | Red         |
| `&d` | Pink        |
| `&e` | Yellow      |
| `&f` | White       |

```yaml
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Cela fera apparaître un cylindre fait de particules de flamme et de fumée autour du joueur qui a endommagé le boss.

</div>

</details>

</div>

#### Déplacement d'une particule :

Il est possible de définir une vitesse spécifique pour une particule, et cela fonctionne de la même manière que l'API
Spigot. Cela permet aux scripteurs de faire en sorte qu'une particule aille dans une direction spécifique à une vitesse
spécifique. Il n'est pas possible de faire changer de direction aux particules à mi-chemin. Cet effet est utilisé dans
l'enchantement du lance-flammes et le pouvoir de boss.

Pour déplacer une particule, définissez `amount: 0`. Cela signalera à Minecraft que les valeurs `x`, `y` et `z` sont en
fait un vecteur. Ce vecteur définit la direction vers laquelle votre particule va aller.

Disons que vous voulez qu'une particule `FLAME` monte. Pour ce faire, vous devez avoir une valeur `y` positive, et rien
d'autre. Enfin, vous voudrez définir la vélocité à ce que vous voulez que la vitesse soit. Voici un exemple complet:

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true  
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3  
      repeatEvery: 10
```

Cela fera apparaître une particule de flamme à l'emplacement du boss qui montera.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Invoque des renforts à partir de boss personnalisés EliteMobs.

| Valeurs    |                                Détails                                 | Obligatoire |
|------------|:----------------------------------------------------------------------:|:-----------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue`   |       Définit le nom de fichier du renfort de boss personnalisé        |      ✅      |
| `duration` |              Définit la durée du renforcement (en ticks)               |      ❌      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: votre_fichier_boss.yml
```

Fait apparaître le renfort avec le nom de fichier "votre_fichier_boss.yml" à l'emplacement du boss.

</div>

</details>

</div>

---

### SUMMON_ENTITY

MAGMA VEUILLEZ REMPLIR CETTE SECTION AVEC DES INFORMATIONS CORRECTES,

| Valeurs  |                                Détails                                 | Obligatoire |
|----------|:----------------------------------------------------------------------:|:-----------:|
| `Target` | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `sValue` |                               Définit la                               |      ✅      |

*Remarque: cette action accepte également les vecteurs relatifs. Apprenez-en plus sur comment les
utiliser [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
```

Définit le boss pour .

</div>

</details>

</div>

---

### TAG

Ajoute des tags aux boss ou aux joueurs. Les tags ne sont que des chaînes de caractères ou des mots que les scripteurs
peuvent définir. Ceux-ci ne sont utilisés que pour exécuter des vérifications de condition et n'ont aucun effet direct
sur le gameplay en dehors de ce pour quoi ils sont utilisés dans les scripts.

| Valeurs    |                                Détails                                 | Obligatoire |
|------------|:----------------------------------------------------------------------:|:-----------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `tags`     |                            Définit les tags                            |      ✅      |
| `duration` |                  Définit la durée des tags (en ticks)                  |      ❌      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - feux_d'artifice
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
        - feux_d'artifice
```

Balise le boss avec la chaîne de caractères "très_sus", qui peut ensuite être vérifiée par le biais des conditions de
script.

**Important:** il n'est possible de baliser que les joueurs et les mobs élites.

</div>

</details>

</div>

---

### TELEPORT

Téléporte la/les cible(s) à l'endroit défini.

| Valeurs       |                                                            Détails                                                             | Obligatoire |
|---------------|:------------------------------------------------------------------------------------------------------------------------------:|:-----------:|
| `Target`      |    Définit _qui_ sera téléporté. [Informations générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md)    |      ✅      |
| `FinalTarget` | Définit _où_ ils seront téléportés. [Informations générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `location`    |                                                  Emplacement de téléportation                                                  |      ✅      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Cela téléporterait tous les joueurs qui se trouvent à moins de 10 blocs du boss à l'emplacement d'apparition du boss.

</div>

</details>

</div>

#### Emplacement

Définit l'emplacement où le joueur sera téléporté. Le format est le format EliteMobs
standard `nom_du_monde,x,y,z,pitch,yaw`.

Exemple

```yaml
location: monde,0,64,0,0,0
```

Il existe quelques valeurs spéciales:

- Si le nom du monde est défini sur `same_as_boss`, il remplacera le nom du monde par le nom du monde dans lequel se
  trouve actuellement le boss:

```yaml
location: same_as_boss,0,64,0,0,0
```

- S'il n'y a que trois valeurs correspondant à x, y et z, la téléportation se fera à un emplacement relatif à
  l'emplacement du boss. Si le boss est un boss régional, l'emplacement sera relatif au point d'apparition du boss.

---

### TITLE_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs    |                                Détails                                 | Obligatoire |                           Spécial                           | Défaut |
|------------|:----------------------------------------------------------------------:|:-----------:|:-----------------------------------------------------------:|:------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |                              ❌                              |   ❌    |
| `title`    |                      Définit le message du titre                       |      ✅      | Peut utiliser les [Codes de Couleur](#color_codes) avec `&` |   ❌    |
| `subtitle` |                    Définit le message du sous-titre                    |      ✅      | Peut utiliser les [Codes de Couleur](#color_codes) avec `&` |   ❌    |
| `duration` |                 Définit la durée du message (en ticks)                 |      ✅      |                              ❌                              |  `0`   |
| `fadeIn`   |           Définit le temps de fondu en ouverture (en ticks)            |      ❌      |                              ❌                              |  `0`   |
| `fadeOut`  |           Définit le temps de fondu en fermeture (en ticks)            |      ❌      |                              ❌                              |  `0`   |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

Affichera le message de titre avec le titre "&2Bonjour le monde!" avec le sous-titre "&2Je suis un sous-titre!" pour
tous les joueurs qui se trouvent à moins de 10 blocs du boss.

Le message restera à l'écran pendant 8 secondes (120 + 20 + 20 = 160 ticks), y compris l'animation de fondu en ouverture
et en fermeture.

</div>

</details>

</div>

---

### UNTAG

Supprime les tags du boss. Consultez `TAG` pour savoir comment les tags fonctionnent.

| Valeurs    |                                Détails                                 | Obligatoire |
|------------|:----------------------------------------------------------------------:|:-----------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `tags`     |                            Définit les tags                            |      ✅      |
| `duration` |         Définit la durée de la suppression des tags (en ticks)         |      ❌      |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - feux_d'artifice
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
        - feux_d'artifice  
  Example2:
    Événements:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - feux_d'artifice
```

Supprime le tag "très_sus" du boss, qui peut ensuite être vérifié par le biais des conditions de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Donne l'effet visuel de gel au joueur et inflige ses dégâts associés. Cela doit être combiné avec un script répété si
vous ne voulez pas que l'effet s'estompe immédiatement.

| Valeurs    |                                Détails                                 | Obligatoire |
|------------|:----------------------------------------------------------------------:|:-----------:|
| `Target`   | [Plus d'informations ici]($language$/elitemobs/elitescript_targets.md) |      ✅      |
| `duration` |                       Durée de l'effet, en ticks                       |      ✅      |

<div align="center">
<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Événements:
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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) LE GEL VISUEL NE FONCTIONNE PAS
ACTUELLEMENT, JE N'AI DONC PAS PU PRENDRE DE CAPTURE D'ÉCRAN

</div>

Donne à tous les joueurs qui se trouvent à moins de 10 blocs du boss l'effet visuel de gel pendant 3 secondes (60
ticks).

</div>

</details>

</div>

---

# Actions multiples

Parfois, vous pouvez vouloir effectuer plusieurs actions en même temps lorsqu'un événement se produit, comme envoyer
plusieurs messages ou effectuer différentes actions séquentiellement. C'est facile à faire! Ajoutons une action d'effet
de potion à notre exemple:

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Événements:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: J'envoie un message à tous les joueurs en ligne !
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: J'envoie un message au joueur qui a frappé le boss !
```

</div>

</details>

</div>
