```
# Cibles des scripts Elite

Les cibles sont une partie centrale des scripts Elite et sont nécessaires au fonctionnement des actions et des zones.

## Types de cibles

Les types de cibles définissent les entités ou les emplacements qui sont ciblés par un script.

| Type de cible                  |                                    Détails                                     |                                                                                                   Spécial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Players in [range]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requires [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs in [range]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requires [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Players in world                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Players in the server                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Players in event                                |                                                                   [Requires compatible event]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Elite using power                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Targets the spawn location of a boss                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Specific location                                |                                                             Requires [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Several specific locations                           |                                                            Requires [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Targets inside of zone                             |                                                                        Requires [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Targets border of zone                             |                                                                        Requires [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Inherits the targets from an action.                      |                 **Can only be used for action [conditions]($language$/elitemobs/elitescript_conditions.md) and [Relative Vectors]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Targets the location a block fell on.                      |                                        **Can only be used for the [`SPAWN_FALLING_BLOCK` action]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Inherits the target from the script that runs this script            |                                                                          Can only run if the script was called by another script!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Targets inside of zone inherited from the script that runs this script     |                                                 Requires [`Zone`]($language$/elitemobs/elitescript_zones.md) **in the the script that calls this script!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Targets border of zone inherited from the script that runs this script     |                                                 Requires [`Zone`]($language$/elitemobs/elitescript_zones.md) **in the the script that calls this script!**                                                  |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: ALL_PLAYERS
        sValue: "&2Hello World!"
```

Cela envoie un message à la cible. Puisque la cible est définie sur `ALL_PLAYERS`, il enverra ce message à tous les joueurs en ligne.

</div>

</details>

</div>

---

## Attributs partagés

Les paramètres suivants peuvent être appliqués à toutes les cibles.

| Valeurs | Détails | Spécial |
| --- | :-: | :-: |
| `offset` | Définit le décalage pour l'emplacement de la cible. | Ne peut pas cibler les entités ! |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
        offset: "0,2,0"
```

Cela frappe la foudre 2 blocs au-dessus du boss. Notez que STRIKE_LIGHTNING utilise des emplacements et n'affecte pas les entités, il peut donc avoir des décalages. 

Vous ne pouvez pas définir un décalage pour envoyer un message, car les messages sont envoyés aux joueurs. Vous pouvez cependant définir un décalage pour une zone qui peut ensuite cibler des entités.

</div>

</details>

</div>

---

## range

Définit la portée à scanner pour les joueurs à proximité dans le type de cible `NEARBY_PLAYERS`.

| Valeurs | Détails | Défaut |
| --- | :-: | :-: |
| `range` | Définit la portée, en blocs, à scanner pour les cibles de joueurs. | `20.0` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions:
      - action: MESSAGE
        Target:
          targetType: NEARBY_PLAYERS
          range: 25.0
        sValue: "&2Targeted players within 25 blocks!"
```

Cela envoie un message aux joueurs à moins de 25 blocs du boss lorsque le boss meurt.

</div>

</details>

</div>

## location

Définit l'emplacement pour le type de cible `LOCATION`.

| Valeurs | Détails | Défaut |
| --- | :-: | :-: |
| `location` | Définit l'emplacement du monde qui sera ciblé. | `none` |

Cela utilise le format `location: worldname,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, par exemple `same_as_boss,100,64,100,0,0` serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATION
        location: "myWorld,100,64,200,0,0"
```

Cela génère un éclair à l'emplacement x=100, y=64, z=200 d'un monde appelé `myWorld`.

</div>

</details>

</div>

---

## locations

Définit les emplacements pour le type de cible `LOCATIONS`.

| Valeurs | Détails | Défaut |
| --- | :-: | :-: |
| `locations` | Définit la liste des emplacements mondiaux qui seront ciblés. | `none` |

Cela utilise le format `worldname,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, par exemple `same_as_boss,100,64,100,0,0` serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDeathEvent
    Actions
    - action: STRIKE_LIGHTNING
      Target:
        targetType: LOCATIONS
        locations:
        - "myWorld,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Cela génère un éclair à l'emplacement x=100, y=64, z=200 d'un monde appelé `myWorld` et un autre éclair dans le même monde que le boss à l'emplacement x=-100, y=12 et z=130.

</div>

</details>

</div>

---

## Ciblage des zones

[Les zones]($language$/elitemobs/elitescript_zones.md) ont plusieurs cibles, et il est important de comprendre comment elles fonctionnent afin d'utiliser le script Elite dans toute sa potentialité.

Les zones fonctionnent en deux parties :

### Partie 1 - Définir où la zone se trouve

Les zones doivent savoir où elles sont censées être, et pour cela, vous utilisez le système de ciblage de la même manière que vous le feriez pour tout autre effet basé sur l'emplacement, comme un éclair.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
```

Cela génère une zone cylindrique autour du boss. Notez qu'aucune action n'est définie dans cet exemple pour le moment, c'est couvert ci-dessous.

Certaines zones, comme [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), ont deux cibles ou plus. C'est parce que les rayons sont des lignes, et les lignes sont définies par deux points. Cela est couvert plus en détail dans la [page des zones]($language$/elitemobs/elitescript_zones.md), mais elles fonctionnent fondamentalement toutes de la même manière.

</div>

</details>

</div>

### Partie 2 - Ciblage de l'intérieur de la zone

Maintenant que la zone sait où elle se trouve, nous devons faire savoir à l'action que sa cible est la zone que nous avons définie. C'est à cela que servent `targetType: ZONE_FULL` et `targetType:ZONE_BORDER`.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
```

En utilisant la même zone que dans la première partie, nous ajoutons maintenant l'action. La cible de cette action est `ZONE_FULL`, ce qui signifie qu'elle générera des particules à l'intérieur de toute la zone.

Notez que ZONE_BORDER n'est pas disponible pour toutes les zones. Plus d'informations à ce sujet dans la page des [zones de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Suivi de la zone

Définit si la zone se déplacera avec la cible, par exemple, si la zone se déplacera lorsque le boss se déplacera pour `targetType: SELF`.

| Valeurs | Détails | Défaut |
| --- | :-: | :-: |
| `track` | Définit si la zone se déplacera avec la cible. | `true` |

Notez que les zones animées ne peuvent pas être suivies. [Plus d'informations ici.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

En utilisant le même exemple que dans la partie 1 et la partie 2, la zone est maintenant définie pour ne pas être suivie. Cela signifie que la zone sera générée à l'emplacement du boss, mais même si le boss continue de s'éloigner, la zone restera à l'endroit où elle a été générée.

Enfin, notez que si une zone est définie pour ne pas être suivie, elle enregistrera son emplacement au moment où le script est appelé.

Par exemple, si vous souhaitez avoir une phase d'avertissement et une phase de dégâts pour votre script, vous devrez vous assurer d'exécuter toutes les actions au début et de mettre un temps d'attente sur toutes les actions liées aux dégâts que vous souhaitez exécuter plus tard individuellement. Vous ne devez pas retarder un script entier que vous appelez via `RUN_SCRIPT` pour des raisons techniques.

Voici un exemple correct d'un pouvoir avec une phase d'avertissement et une phase de dégâts tirée du Sanctuaire du Palais de Givre.

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SPAWN_PARTICLE
      wait: 60
      times: 13
      repeatEvery: 3
      particles:
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0
        y: 1
        z: -0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: -0.5
        y: 1
        z: 0.5
        speed: 0.2
      - particle: FLAME
        amount: 0
        x: 0.5
        y: 1
        z: -0.5
        speed: 0.2
      Target:
        targetType: ZONE_FULL
        track: false
    - action: RUN_SCRIPT
      scripts:
      - DamageCylinder
    - action: PLAY_ANIMATION
      sValue: fire_zone
      Target:
        targetType: SELF
    - action: SET_MOB_AI
      duration: 100
      bValue: false
      Target:
        targetType: SELF
    Cooldowns:
      local: 1200
      global: 300
  DamageCylinder:
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 10
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
        offset: 0,-1,0
    Actions:
    - action: DAMAGE
      wait: 60
      repeatEvery: 10
      times: 4
      multiplier: 4
      Target:
        targetType: ZONE_FULL
        track: false
    - action: SET_ON_FIRE
      wait: 60
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
```

</div>

</details>

</div>

Ce script fait beaucoup de choses, mais il est séparé en deux scripts distincts : `VisualCylinder` et `DamageCylinder`.

VisualCylinder s'exécute en premier et possède l'action `RUN_SCRIPT` qui exécute également immédiatement `DamageCylinder` en même temps que l'exécution de `VisualCylinder`.

Cependant, chaque action dans `DamageCylinder` est définie pour attendre 60 ticks, soit 3 secondes.

Cela signifie que le boss a une phase d'avertissement de 3 secondes, puis effectue une phase de dégâts, et même si les zones sont définies pour ne pas être suivies, la zone d'avertissement et la zone de dégâts seront au même emplacement.

### Propriétés de la cible spécifiques à la zone

Les zones ont les propriétés spécifiques suivantes :

#### coverage

Définit le pourcentage de la zone qui sera réellement utilisé pour l'action. Fonctionne uniquement pour les cibles d'emplacement (ne fonctionnera pas lors du ciblage de joueurs ou d'autres entités).

| Valeurs | Détails | Défaut |
| --- | :-: | :-: |
| `coverage` | Définit le pourcentage de la zone qui sera couvert. | `1.0` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  VisualCylinder:
    Events:
    - EliteMobDamagedEvent
    Zone:
      radius: 10.0
      shape: CYLINDER
      height: 1
      filter: PLAYER
      borderRadius: 5.0
      Target:
        targetType: SELF
    Actions:
    - action: SPAWN_PARTICLE
      times: 12
      repeatEvery: 5
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.5
```

Dans ce cas, seulement 50 % de la zone sera couvert de particules.

</div>

</details>

</div>

### Héritage des cibles

Lorsqu'un script exécute un autre script (ou "appelle" ce script), il est possible de transmettre les informations de zone et de cible du premier script au second.

**Exemples d'utilisation**

1. **Exécuteurs de script améliorés**

Les exécuteurs de script sont des scripts dont la seule fonction est d'exécuter de nombreux autres scripts. Ils sont utilisés pour faciliter la gestion des scripts, en particulier lorsqu'il s'agit de gérer plusieurs scripts qui nécessitent un chronométrage précis.

Avec l'héritage de la cible, plusieurs scripts peuvent utiliser la même zone ou la même cible, réduisant potentiellement des centaines de lignes de script répétitives.

2. **Filtrage de la cible Matryoshka / Filtrage de la cible de la poupée russe**

Les conditions de filtrage peuvent être appliquées aux cibles dans une action. En transmettant les cibles à un autre script avec des filtres différents, il devient possible de superposer les conditions et d'appliquer des effets différents au même pool de cibles en fonction de critères de plus en plus spécifiques.

Par exemple, il est possible de créer une zone qui recherche des joueurs et de créer une action qui vérifie si tous les joueurs dans la zone ont une balise spécifique. Les cibles valides peuvent ensuite être transmises à un autre script où une autre action peut alors exécuter une vérification aléatoire et appliquer un effet en fonction de ce hasard. Les cibles peuvent ensuite être encore transmises à un autre script où une autre condition peut vérifier si les cibles sont encore en vie et effectuer un comportement spécial si elles sont mortes.

Ce ne sont bien sûr que des exemples. C'est un système très flexible.

3. **Zones complexes**

Enfin, il est possible de superposer des cibles pour créer des zones complexes, en utilisant éventuellement des conditions si nécessaire, et il est même possible de créer des zones semi-aléatoires en utilisant les conditions de script et la possibilité d'exécuter un seul des scripts répertoriés à partir des actions de script.

**Remarque :** Pour cette section, **"script parent"** fait référence au script qui exécute le **"script hérité"**, qui est le script qui utilisera les cibles héritées.

Lors de l'utilisation de l'héritage de la cible, il est important d'examiner attentivement le _script parent_ pour s'assurer que les données correctes sont transmises.

#### INHERIT_SCRIPT_TARGET

Lorsque vous utilisez `INHERIT_SCRIPT_TARGET`, les cibles du _script parent_ seront transmises au script hérité. Cela a quelques inconvénients :

- Lorsqu'on transmet des **cibles d'entité**, il est possible d'exécuter des actions qui nécessitent des emplacements (comme la génération de particules) car l'emplacement des entités sera utilisé. Il est bien sûr également possible d'utiliser des actions qui nécessitent des entités.

- Lorsqu'on transmet des **cibles d'emplacement**, il n'est possible d'utiliser que des emplacements. **La seule façon d'obtenir une entité à partir d'un emplacement est de créer une zone à cet emplacement et de rechercher des entités.** Ainsi, même s'il n'est pas impossible de transmettre un emplacement puis d'obtenir des entités, cela nécessitera un peu de travail supplémentaire.


#### Héritage des zones

Lorsque vous utilisez `INHERIT_SCRIPT_ZONE_FULL` ou `INHERIT_SCRIPT_ZONE_BORDER`, il est impératif que le _script parent_ définisse une zone, sinon le _script hérité_ ne pourra pas s'exécuter correctement.

En outre, les zones peuvent éventuellement être [suivies]($language$/elitemobs/elitescript_targets.md&section=zone-track). Cela sera également transmis avec la zone.

- Une zone **non suivie** créera toujours une zone à l'endroit défini par le _script hérité_. Cela signifie que les paramètres de la zone seront utilisés par les actions du _script hérité_ pour créer de nouvelles zones à chaque fois qu'une action s'exécute, et l'emplacement de ces zones sera défini par l'action.

- Une zone **suivie** peut transmettre le même emplacement de zone exact à tous les _scripts hérités_ si le _script parent_ est défini pour cibler `ZONE_FULL` ou `ZONE_BORDER`. Cela signifie que chaque script agira sur les mêmes emplacements.
```