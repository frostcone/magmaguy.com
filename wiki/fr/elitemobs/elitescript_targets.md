Voici la traduction en français, en conservant le formatage markdown :

# Cibles de Script Élite

Les cibles sont un élément central des Scripts Élite et sont requises pour que les Actions et les Zones fonctionnent.

## Types de Cibles

Les types de cibles définissent quelles entités ou quels lieux sont ciblés par un script.

| Type de Cible                |                                    Détails                                     |                                                                                                   Spécial                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Joueurs à [portée]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Requiert [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Mobs à [portée]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Requiert [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Joueurs dans le monde                               |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Joueurs sur le serveur                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Joueurs dans l'événement                                |                                                                   [Requiert un événement compatible]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Élite utilisant le pouvoir                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Cible l'emplacement d'apparition d'un boss                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Emplacement spécifique                                |                                                             Requiert [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Plusieurs emplacements spécifiques                           |                                                            Requiert [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Cibles à l'intérieur de la zone                             |                                                                        Requiert [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Cibles à la bordure de la zone                             |                                                                        Requiert [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Hérite des cibles d'une action.                      |                 **Peut seulement être utilisé pour les [conditions]($language$/elitemobs/elitescript_conditions.md) d'action et les [Vecteurs Relatifs]($language$/elitemobs/elitescript_relative_vectors.md) !!**                 |
| `LANDING_LOCATION`           |                     Cible l'emplacement où un bloc est tombé.                      |                                        **Peut seulement être utilisé pour l'action [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block) !**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Hérite de la cible du script qui exécute ce script            |                                                                          Peut seulement s'exécuter si le script a été appelé par un autre script !                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Cibles à l'intérieur de la zone héritée du script qui exécute ce script     |                                                 Requiert [`Zone`]($language$/elitemobs/elitescript_zones.md) **dans le script qui appelle ce script !**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Cibles à la bordure de la zone héritée du script qui exécute ce script     |                                                 Requiert [`Zone`]($language$/elitemobs/elitescript_zones.md) **dans le script qui appelle ce script !**                                                  |

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
        sValue: "&2Bonjour Monde !"
```

Ceci envoie un message à la cible. Puisque la cible est définie sur `ALL_PLAYERS`, cela enverra ce message à tous les joueurs en ligne.

</div>

</details>

</div>

---

## Attributs partagés

Les paramètres suivants peuvent être appliqués à toutes les cibles.

| Valeurs | Détails | Spécial |
| --- | :-: | :-: |
| `offset` | Définit le décalage pour l'emplacement de la cible. | Ne peut pas cibler d'entités ! |

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

Ceci frappe la foudre 2 blocs au-dessus du boss. Notez que STRIKE_LIGHTNING utilise des emplacements et n'affecte pas les entités, il peut donc avoir des décalages.

Vous ne pouvez pas définir de décalage pour envoyer un message, puisque les messages sont envoyés aux joueurs. Vous pouvez, cependant, définir un décalage pour une zone qui peut ensuite cibler des entités.

</div>

</details>

</div>

---

## range

Définit la portée pour scanner les joueurs proches dans le type de cible `NEARBY_PLAYERS`.

| Valeurs | Détails | Par défaut |
| --- | :-: | :-: |
| `range` | Définit la portée, en blocs, pour scanner les cibles de type joueur. | `20.0` |

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
        sValue: "&2Joueurs ciblés à moins de 25 blocs !"
```

Ceci envoie un message aux joueurs à moins de 25 blocs du boss lorsque le boss meurt.

</div>

</details>

</div>

## location

Définit l'emplacement pour le type de cible `LOCATION`.

| Valeurs | Détails | Par défaut |
| --- | :-: | :-: |
| `location` | Définit l'emplacement mondial qui sera ciblé. | `none` |

Ceci utilise le format `location: worldname,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, tel que `same_as_boss,100,64,100,0,0` serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

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

Ceci fait apparaître un éclair à l'emplacement x=100, y=64, z=200 d'un monde appelé `myWorld`.

</div>

</details>

</div>

---

## locations

Définit les emplacements pour le type de cible `LOCATIONS`.

| Valeurs | Détails | Par défaut |
| --- | :-: | :-: |
| `locations` | Définit la liste des emplacements mondiaux qui seront ciblés. | `none` |

Ceci utilise le format `worldname,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, tel que `same_as_boss,100,64,100,0,0` serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

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

Ceci fait apparaître un éclair à l'emplacement x=100, y=64, z=200 d'un monde appelé `myWorld` et un autre éclair dans le même monde que le boss à l'emplacement x=-100, y=12 et z=130.

</div>

</details>

</div>

---

## Cibler les zones

Les [Zones]($language$/elitemobs/elitescript_zones.md) ont plusieurs cibles, et il est important de comprendre comment elles fonctionnent afin d'utiliser Elite Scripting à son plein potentiel.

Les zones fonctionnent en deux parties :

### Partie 1 - Définir où va la zone

Les zones ont besoin de savoir où elles sont censées être, et pour ce faire, vous utilisez le système de ciblage de la même manière que pour tout autre effet basé sur un emplacement, comme un éclair.

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

Ceci fait apparaître une zone cylindrique autour du boss. Notez qu'aucune action n'est encore définie dans cet exemple, cela est couvert ci-dessous.

Certaines zones, comme [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), ont deux cibles ou plus. C'est parce que les rayons sont des lignes, et les lignes sont définies par deux points. Ceci est couvert plus en détail sur la [page des zones]($language$/elitemobs/elitescript_zones.md), mais elles fonctionnent fondamentalement toutes de la même manière.

</div>

</details>

</div>

### Partie 2 - Cibler l'intérieur de la zone

Maintenant que la zone sait où elle se trouve, nous avons besoin que l'action sache que sa cible est la zone que nous avons définie. C'est à cela que servent `targetType: ZONE_FULL` et `targetType:ZONE_BORDER`.

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

En utilisant la même zone que dans la première partie, nous ajoutons maintenant l'action. La cible pour cette action est `ZONE_FULL`, ce qui signifie qu'elle fera apparaître des particules à l'intérieur de toute la zone.

Notez que ZONE_BORDER n'est pas disponible pour toutes les zones. Plus d'informations à ce sujet sur la page des [zones de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Suivi de zone

Définit si la zone se déplacera avec la cible, par exemple si la zone se déplacera lorsque le boss bouge pour `targetType: SELF`.

| Valeurs | Détails | Par défaut |
| --- | :-: | :-: |
| `track` | Définit si la zone se déplacera avec la cible. | `true` |

Notez que les zones animables ne peuvent pas suivre. [Plus d'informations ici.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

En utilisant le même exemple des parties 1 et 2, la zone est maintenant configurée pour ne pas suivre. Cela signifie que la zone apparaîtra à l'emplacement du boss, mais même si le boss continue de s'éloigner, la zone restera là où elle est apparue pour la première fois.

Enfin, notez que si une zone est configurée pour ne pas suivre, elle enregistrera son emplacement au moment où le script est appelé.

À titre d'exemple, si vous voulez avoir une phase d'avertissement et une phase de dégâts pour votre script, vous devrez vous assurer d'exécuter toutes les actions au début et de mettre un temps d'attente sur toutes les actions liées aux dégâts que vous souhaitez exécuter individuellement plus tard. Vous ne devriez pas retarder un script entier que vous appelez via `RUN_SCRIPT` pour des raisons techniques.

Ce qui suit est un exemple correct d'un pouvoir avec une phase d'avertissement et une phase de dégâts tiré du Sanctuaire du Palais de Givre.

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

Ce script fait beaucoup de choses, mais il est séparé en deux scripts clairs : `VisualCylinder` et `DamageCylinder`.

VisualCylinder s'exécute en premier et a l'action `RUN_SCRIPT` qui exécute immédiatement aussi le `DamageCylinder` en même temps que le `VisualCylinder` s'exécute.

Cependant, chaque action dans `DamageCylinder` est configurée pour attendre 60 ticks, soit 3 secondes.

Cela signifie que le boss a une phase d'avertissement de 3 secondes, puis effectue une phase de dégâts, et même si les zones sont configurées pour ne pas suivre, la zone d'avertissement et la zone de dégâts seront au même emplacement.

### Propriétés de cible spécifiques aux zones

Les zones ont les propriétés spécifiques suivantes :

#### coverage

Définit le pourcentage de la zone qui sera réellement utilisé pour l'action. Fonctionne uniquement pour les cibles d'emplacement (ne fonctionnera pas lors du ciblage de joueurs ou d'autres entités).

| Valeurs | Détails | Par défaut |
| --- | :-: | :-: |
| `coverage` | Définit le pourcentage de la zone qui sera couverte. Vous pouvez randomiser cette valeur en utilisant `~` exemple : `1.0~0.3`. | `1.0` |

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

Dans ce cas, seulement 50% de la zone sera couverte de particules.

</div>

</details>

</div>

### Hériter des cibles

Lorsqu'un script exécute un autre script (ou "appelle" ce script), il est possible de transmettre les informations de zone et de cible du premier script au second.

**Exemples d'utilisation**

1.  **Exécuteurs de scripts améliorés**

Les exécuteurs de scripts sont des scripts dont la seule fonction est d'exécuter de nombreux autres scripts. Ils sont utilisés pour faciliter la gestion des scripts, surtout lors de la gestion de plusieurs scripts qui nécessitent un timing précis.

Avec l'héritage de cible, plusieurs scripts peuvent utiliser la même zone ou la même cible, réduisant potentiellement des centaines de lignes de script répétitif.

2.  **Filtrage de cible Matriochka / Filtrage de cible poupées russes**

Des conditions de filtrage peuvent être appliquées aux cibles dans une action. En passant les cibles à un script différent avec des filtres différents, il devient possible de superposer les conditions et d'appliquer différents effets au même ensemble de cibles basés sur des critères de plus en plus spécifiques.

À titre d'exemple, il est possible de créer une zone qui recherche des joueurs et de créer une action qui vérifie si tous les joueurs de la zone ont un tag spécifique. Les cibles valides peuvent ensuite être passées à un autre script où une autre action peut ensuite exécuter une condition de vérification aléatoire et appliquer un effet basé sur cette chance. Les cibles peuvent ensuite être transmises à un autre script où une autre condition peut vérifier si les cibles sont toujours en vie et effectuer un comportement spécial si elles sont mortes.Please specify the language you would like the text translated into. I will translate it while retaining the markdown formatting.