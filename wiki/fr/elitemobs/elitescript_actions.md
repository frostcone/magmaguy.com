# Actions de script Elite

Les actions sont au cœur du script. Elles déterminent ce que fait le script et vous permettent de définir des intervalles personnalisés.

Les actions commencent toujours par le type d'action que vous allez effectuer. Différents types d'actions servent à différentes fonctions. De plus, toutes les actions ont une ou plusieurs cibles. Les actions peuvent également avoir une minuterie d'attente, pour s'assurer que les choses se produisent avec des délais personnalisables. Enfin, les actions peuvent également avoir plusieurs autres champs spécifiques au type d'action.

## Attributs partagés

| Valeurs             |                                                                                 Détails                                                                                 | Spécial |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                     [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md)                                                      | ❌ |
| `wait`             |                                              Définit la durée d'attente (en ticks) avant d'exécuter les actions                                               | ❌ |
| `repeatEvery`      |        Définit les actions à répéter tous les X ticks définis. Tout script qui a cet attribut défini mais qui n'utilise pas de temps sera arrêté à la mort du mob pour éviter le lag.         | ❌ |
| `times`            |                                                           Définit le nombre de fois qu'une action se produira                                                           | Nécessite `repeatEvery` |
| `scripts`          |                                                     Définit les scripts qui s'exécuteront à la fin de l'action                                                      | ❌ |
| `onlyRunOneScript` |                                                     Choisit un des `scripts` au hasard et ne l'exécute que lui.                                                      | ❌ |
| `offset`           | Cette option se trouve sous `Target`. Permet de décaler la position de la cible. L'offset ne fonctionne pas avec les actions qui ciblent des zones avec `ZONE_FULL` ou `ZONE_BORDER`. | ❌ |

## Types d'actions

### ACTION_BAR_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Définira la barre d'action pour dire Hello World à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Ajoute une barre de boss aux cibles.

| Valeurs |                            Détails                            | Obligatoire |                   Spécial                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` |
| `duration` |               Durée de la barre de boss en ticks               | ✅ |                      ❌                       |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Définira une barre de boss disant Hello World à tous les joueurs qui se trouvent à moins de 10 blocs du boss pendant 1 seconde.

</div>

</details>

</div>

---

### DAMAGE

Voici comment vous pouvez infliger des dégâts à des entités en tant qu'autres entités.

_Remarque : cela utilise nativement le système de dégâts d'EliteMobs ! Cela signifie que vous verrez la réduction d'armure d'élite normale des coups. Plus d'informations à ce sujet dans la section des multiplicateurs._

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Multiplicateur de dégâts                       | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Définit les dégâts à la moitié du montant des dégâts de base que le boss infligerait au joueur, en tenant compte des réductions de dégâts.

</div>

</details>

</div>

#### multiplier

Définit le multiplicateur de dégâts du boss pour l'effet.

**Important** : afin de faire évoluer les pouvoirs facilement et automatiquement, les dégâts sont appliqués en faisant frapper le boss au joueur une fois et en multipliant les dégâts de base du boss par le multiplicateur.

Cela signifie qu'un multiplicateur de 1,0 est le même qu'un coup normal du boss. 2,0 est un coup 2x plus fort que la normale, et 0,5 est 50 % moins fort.

---

### MAKE_INVULNERABLE

Rend une cible invulnérable.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Définit si le boss est invulnérable               | ✅ |
| `duration` |      Définit la durée de l'invulnérabilité (en ticks)      | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      duration: 60
```

Rend un boss invulnérable pendant 60 ticks (3 secondes).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Modifie les dégâts infligés à un boss ou infligés aux joueurs par ce boss. Il s'agit d'une action spéciale avec quelques exigences particulières.

| Valeurs | Détails | Obligatoire |
| --- | :-: | :-: |
| `multiplier` | Multiplicateur de dégâts. | ✅ |

Cette action est spéciale et doit se trouver dans un script qui a un écouteur d'événement pour un événement de dégâts. Les événements de dégâts valides suivants : `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` pour les événements qui réduisent les dégâts infligés au boss et `PlayerDamagedByEliteMobEvent` pour les événements qui réduisent les dégâts infligés aux joueurs.

Il est fortement recommandé d'apprendre comment fonctionne la condition `hasTag` afin de mieux utiliser cette action. Lorsqu'elle est utilisée correctement, il est possible de faire en sorte que le boss résiste temporairement ou soit plus faible aux dégâts, et cela peut être associé aux buffs du joueur, à la position du boss ou à de nombreux autres facteurs.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Augmente les dégâts infligés au boss par les joueurs de 2x, mais seulement si le joueur a une balise appelée "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Envoie un message aux cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Message                            | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Enverra un message dans le chat à tous les joueurs à moins de 10 blocs du boss.

</div>

</details>

</div>

---

### NAVIGATE

Fait naviguer (marcher) le boss jusqu'à la cible spécifiée.

| Valeurs |                            Détails                            | Obligatoire | Spécial |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Définit la vitesse de navigation du boss. `1.0` étant la valeur du boss définie dans la configuration. | ❌ | ❌ |
| `bValue` | Définit si le boss doit être téléporté de force vers la `FinalTarget` si la navigation échoue. | ❌ | ❌ |
| `duration` | Combien de temps le boss doit-il essayer de naviguer avant d'abandonner. Défini en ticks. La valeur par défaut est de 100 ticks. | ✅ | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Fera naviguer le boss jusqu'à l'endroit où se tenait le joueur lorsqu'il a frappé le boss.

</div>

</details>

</div>

---

### PLACE_BLOCK

Place un bloc à l'emplacement(s) cible pendant la durée.

| Valeurs |                                                         Détails                                                         | Obligatoire |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Matériau](#material) du bloc, [liste complète ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                            Durée de l'effet, en ticks                                             | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Place un dôme en verre autour du boss qui durera 6 secondes.

_Remarque : si aucune durée n'est définie, le placement du bloc est permanent._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Joue l'animation spécifiée pour un modèle personnalisé à l'aide de Model Engine. Nécessite Model Engine et un modèle personnalisé valide pour être sur la cible qui exécute l'animation.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le nom de l'animation                 | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Joue un son dans le jeu.

| Valeurs   |                            Détails                            | Obligatoire |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Définit le nom du son à jouer            |     ✅     |
| `pitch`  |           Définit la hauteur du son à jouer            |     ❌     |
| `volume` |           Définit le volume du son à jouer            |     ❌     |

[Voici une liste pratique de tous les sons de Minecraft !](https://www.digminecraft.com/lists/sound_list_pc.php) N'oubliez pas que cela peut également lire des sons personnalisés à partir de packs de ressources. 
Lorsque l'action cible une zone, l'action jouera un son pour chaque bloc de cette zone. Cela peut rendre le son considérablement plus fort que la normale, alors pensez à baisser le volume si vous ciblez une zone.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Joue le son de résonance des cloches Minecraft à l'emplacement du boss

</div>

</details>

</div>

---

### POTION_EFFECT

Applique un effet de potion spécifique à la ou aux cibles.

| Valeurs |                                                       Détails                                                       | Obligatoire |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Type d'effet, [liste valide ici](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                         Niveau d'effet de potion (commence à 0)                                          | ✅ |
| `duration` |                                           Durée de l'effet (en ticks)                                            | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Cela fera léviter tous les joueurs à moins de 10 blocs du boss pendant 2 secondes (40 ticks).

</div>

</details>

</div>

---

### PUSH

Pousse une cible d'un vecteur défini.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Définit le vecteur de la vélocité qui sera appliquée       | ✅ |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en plus sur la façon de les utiliser [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Cela poussera tous les joueurs à moins de 10 blocs du boss en l'air en utilisant une force de 0,3. Cette action sera répétée 10 fois toutes les 0,5 seconde (10 ticks). En d'autres termes, cela fera durer cet effet 5 secondes (10 fois x 10 ticks = 100 ticks).

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
| `Target` |  [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Remarque : des espaces réservés sont disponibles ! Vérifiez RUN_COMMAND_AS_PLAYER, ils sont identiques**

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

Fait diffuser par la console le message "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Exécute une commande en tant que `player`. Nécessite que la cible soit des joueurs.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                    Commande qui sera exécutée                     | ✅ |

**Remarque : RUN_COMMAND_AS_PLAYER et RUN_COMMAND_AS_CONSOLE utilisent les espaces réservés suivants :**

| Espace réservé | Détails | Spécial |
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

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_PLAYER
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName.
```

<div align="center">



| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le type d'entité à faire apparaître                 | ✅ |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en plus sur la façon de les utiliser [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Définit le boss pour faire apparaître un ZOMBIE à l'emplacement du boss.

</div>

</details>

</div>

---

### TAG

Ajoute des balises aux boss ou aux joueurs. Les balises sont simplement des chaînes, ou des mots, que les scripteurs peuvent définir. Elles ne sont utilisées que pour exécuter des vérifications de conditions et n'ont aucun effet direct sur le gameplay en dehors de ce pour quoi elles sont utilisées dans les scripts.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Définit les balises                         | ✅ |
| `duration` |              Définit la durée des balises (en ticks)              | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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
```

Marque le boss avec la chaîne "very_sus", qui peut ensuite être vérifiée via les conditions de script.

**Important** : il n'est possible de marquer que les joueurs et les mobs d'élite.

</div>

</details>

</div>

---

### TELEPORT

Téléporte la ou les cibles vers l'emplacement défini.

| Valeurs |                                                     Détails                                                     | Obligatoire |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Définit _qui_ sera téléporté. [Infos générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Définit _où_ ils seront téléportés. [Infos générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Emplacement de la téléportation                                               | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
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

Cela téléporterait tous les joueurs qui se trouvent à moins de 10 blocs du boss vers l'emplacement d'apparition du boss.

</div>

</details>

</div>

#### location

Définit l'emplacement où le joueur sera téléporté. Le format est le format EliteMobs standard `world_name,x,y,z,pitch,yaw`.

Exemple

```yaml
location: world,0,64,0,0,0
```

Cela a quelques valeurs spéciales :

- Si le nom du monde est défini sur `same_as_boss`, il remplacera le nom du monde par le nom du monde dans lequel se trouve actuellement le boss :

```yaml
location: same_as_boss,0,64,0,0,0
```

- S'il n'y a que trois valeurs correspondant à x, y et z, la téléportation sera effectuée vers un emplacement relatif à l'emplacement du boss. Si le boss est un boss régional, l'emplacement sera relatif au point d'apparition du boss.

---

### TITLE_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial | Par défaut |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                     Définit le message du titre                     | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` | ❌ |
| `subtitle` |                    Définit le message du sous-titre                    | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` | ❌ |
| `duration` |           Définit la durée du message (en ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Définit le temps de fondu d'entrée (en ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Définit le temps de fondu de sortie (en ticks)                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Définira le message du titre pour afficher le titre "&2Hello World!" avec le sous-titre "&2I am a subtitle!" à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

Le message restera à l'écran pendant 8 secondes (120 + 20 + 20 = 160 ticks), animation de fondu d'entrée et de sortie comprise.

</div>

</details>

</div>

---

### UNTAG

Supprime les balises du boss. Vérifiez `TAG` pour voir comment fonctionnent les balises.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Définit les balises                         | ✅ |
| `duration` |       Définit la durée de la suppression des balises (en ticks)       | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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
  Exemple2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Supprime la balise "very_sus" du boss, qui peut ensuite être vérifiée via les conditions de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Donne l'effet visuel gelé au joueur et inflige les dégâts associés. Cela devrait être combiné avec un script répétitif si vous ne voulez pas que l'effet disparaisse immédiatement.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                  Durée de l'effet, en ticks                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NE FONCTIONNE PAS ACTUELLEMENT, DONC IMPOSSIBLE DE PRENDRE UNE CAPTURE D'ÉCRAN

</div>

Donne à tous les joueurs à moins de 10 blocs du boss le visuel de gel pendant 3 secondes (60 ticks).

</div>

</details>

</div>

---

# Actions multiples

Parfois, vous voudrez peut-être effectuer plusieurs actions à la fois lorsqu'un événement se produit, comme envoyer plusieurs messages ou effectuer différentes actions de manière séquentielle. C'est facile à faire ! Ajoutons une action d'effet de potion à notre exemple :

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
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


| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Définit le type d'entité à faire apparaître                 | ✅ |

*Remarque : cette action accepte également les vecteurs relatifs. Apprenez-en plus sur la façon de les utiliser [ici]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Définit le boss pour faire apparaître un ZOMBIE à l'emplacement du boss.

</div>

</details>

</div>

---

### TAG

Ajoute des balises aux boss ou aux joueurs. Les balises sont simplement des chaînes, ou des mots, que les scripteurs peuvent définir. Elles ne sont utilisées que pour exécuter des vérifications de conditions et n'ont aucun effet direct sur le gameplay en dehors de ce pour quoi elles sont utilisées dans les scripts.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Définit les balises                         | ✅ |
| `duration` |              Définit la durée des balises (en ticks)              | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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
```

Marque le boss avec la chaîne "very_sus", qui peut ensuite être vérifiée via les conditions de script.

**Important** : il n'est possible de marquer que les joueurs et les mobs d'élite.

</div>

</details>

</div>

---

### TELEPORT

Téléporte la ou les cibles vers l'emplacement défini.

| Valeurs |                                                     Détails                                                     | Obligatoire |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Définit _qui_ sera téléporté. [Infos générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Définit _où_ ils seront téléportés. [Infos générales sur les cibles ici !]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Emplacement de la téléportation                                               | ✅ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
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

Cela téléporterait tous les joueurs qui se trouvent à moins de 10 blocs du boss vers l'emplacement d'apparition du boss.

</div>

</details>

</div>

#### location

Définit l'emplacement où le joueur sera téléporté. Le format est le format EliteMobs standard `world_name,x,y,z,pitch,yaw`.

Exemple

```yaml
location: world,0,64,0,0,0
```

Cela a quelques valeurs spéciales :

- Si le nom du monde est défini sur `same_as_boss`, il remplacera le nom du monde par le nom du monde dans lequel se trouve actuellement le boss :

```yaml
location: same_as_boss,0,64,0,0,0
```

- S'il n'y a que trois valeurs correspondant à x, y et z, la téléportation sera effectuée vers un emplacement relatif à l'emplacement du boss. Si le boss est un boss régional, l'emplacement sera relatif au point d'apparition du boss.

---

### TITLE_MESSAGE

Définit le message de la barre d'action pour les cibles.

| Valeurs |                            Détails                            | Obligatoire | Spécial | Par défaut |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                     Définit le message du titre                     | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` | ❌ |
| `subtitle` |                    Définit le message du sous-titre                    | ✅ | Peut utiliser les [Codes couleur](#color_codes) avec `&` | ❌ |
| `duration` |           Définit la durée du message (en ticks)            | ✅ | ❌ | `0` |
| `fadeIn` |                   Définit le temps de fondu d'entrée (en ticks)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Définit le temps de fondu de sortie (en ticks)                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2I am a subtitle!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Définira le message du titre pour afficher le titre "&2Hello World!" avec le sous-titre "&2I am a subtitle!" à tous les joueurs qui se trouvent à moins de 10 blocs du boss.

Le message restera à l'écran pendant 8 secondes (120 + 20 + 20 = 160 ticks), animation de fondu d'entrée et de sortie comprise.

</div>

</details>

</div>

---

### UNTAG

Supprime les balises du boss. Vérifiez `TAG` pour voir comment fonctionnent les balises.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                         Définit les balises                         | ✅ |
| `duration` |       Définit la durée de la suppression des balises (en ticks)       | ❌ |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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
  Exemple2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Supprime la balise "very_sus" du boss, qui peut ensuite être vérifiée via les conditions de script.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Donne l'effet visuel gelé au joueur et inflige les dégâts associés. Cela devrait être combiné avec un script répétitif si vous ne voulez pas que l'effet disparaisse immédiatement.

| Valeurs |                            Détails                            | Obligatoire |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Plus d'infos ici]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                  Durée de l'effet, en ticks                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Exemple:
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

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) VISUAL FREEZE NE FONCTIONNE PAS ACTUELLEMENT, DONC IMPOSSIBLE DE PRENDRE UNE CAPTURE D'ÉCRAN

</div>

Donne à tous les joueurs à moins de 10 blocs du boss le visuel de gel pendant 3 secondes (60 ticks).

</div>

</details>

</div>

---

# Actions multiples

Parfois, vous voudrez peut-être effectuer plusieurs actions à la fois lorsqu'un événement se produit, comme envoyer plusieurs messages ou effectuer différentes actions de manière séquentielle. C'est facile à faire ! Ajoutons une action d'effet de potion à notre exemple :

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
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




