# Cibles des scripts Elite

Les cibles sont un élément central des scripts Elite et sont nécessaires au fonctionnement des actions et des zones.

## Types de cibles

Les types de cibles définissent quelles entités ou quels lieux sont ciblés par un script.

| Type de cible                |                                      Détails                                       |                                                                                              Spécial                                                                                               |
|------------------------------|:----------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Joueurs dans un [rayon]($language$/elitemobs/elitescript_targets.md&section=range) |                                                           Nécessite [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                           |
| `NEARBY_MOBS`                |  Mobs dans un [rayon]($language$/elitemobs/elitescript_targets.md&section=range)   |                                                           Nécessite [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                           |
| `WORLD_PLAYERS`              |                               Joueurs dans le monde                                |                                                                                                 ❌                                                                                                  |
| `ALL_PLAYERS`                |                                 Joueurs du serveur                                 |                                                                                                 ❌                                                                                                  |
| `DIRECT_TARGET`              |                              Joueurs dans l'événement                              |                                                          [Nécessite un événement compatible]($language$/elitemobs/elitescript_events.md)                                                           |
| `SELF`                       |                             Élite utilisant le pouvoir                             |                                                                                                 ❌                                                                                                  |
| `SELF_SPAWN`                 |                       Cible l'emplacement de spawn d'un boss                       |                                                                                                 ❌                                                                                                  |
| `LOCATION`                   |                                  Lieu spécifique                                   |                                                        Nécessite [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                        |
| `LOCATIONS`                  |                            Plusieurs lieux spécifiques                             |                                                       Nécessite [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                       |
| `ZONE_FULL`                  |                          Cibles à l'intérieur de la zone                           |                                                                   Nécessite [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                    |
| `ZONE_BORDER`                |                           Cibles à la bordure de la zone                           |                                                                   Nécessite [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                    |
| `ACTION_TARGET`              |                          Hérite des cibles d'une action.                           | **Ne peut être utilisé que pour les [conditions]($language$/elitemobs/elitescript_conditions.md) et les [vecteurs relatifs]($language$/elitemobs/elitescript_relative_vectors.md) d'une action !** |
| `LANDING_LOCATION`           |                     Cible l'emplacement où un bloc est tombé.                      |                           **Ne peut être utilisé que pour l'action [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block) !**                            |
| `INHERIT_SCRIPT_TARGET`      |                 Hérite de la cible du script qui exécute ce script                 |                                                               Ne peut s'exécuter que si le script a été appelé par un autre script !                                                               |
| `INHERIT_SCRIPT_ZONE_FULL`   |      Cibles à l'intérieur de la zone héritée du script qui exécute ce script       |                                              Nécessite [`Zone`]($language$/elitemobs/elitescript_zones.md) **dans le script qui appelle ce script !**                                              |
| `INHERIT_SCRIPT_ZONE_BORDER` |       Cibles à la bordure de la zone héritée du script qui exécute ce script       |                                              Nécessite [`Zone`]($language$/elitemobs/elitescript_zones.md) **dans le script qui appelle ce script !**                                              |

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

Ceci envoie un message à la cible. Étant donné que la cible est définie sur `ALL_PLAYERS`, ce message est envoyé à tous
les joueurs en ligne.

</div>

</details>

</div>

---

## Attributs partagés

Les paramètres suivants peuvent être appliqués à toutes les cibles.

| Valeurs  |                   Détails                   |            Spécial             |
|----------|:-------------------------------------------:|:------------------------------:|
| `offset` | Définit le décalage de l'emplacement cible. | Ne peut pas cibler d'entités ! |

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

Ceci fait tomber la foudre 2 blocs au-dessus du boss. Notez que STRIKE_LIGHTNING utilise des emplacements et n'affecte
pas les entités, il peut donc avoir des décalages.

Vous ne pouvez pas définir de décalage pour envoyer un message, car les messages sont envoyés aux joueurs. Vous pouvez
toutefois définir un décalage pour une zone qui peut ensuite cibler des entités.

</div>

</details>

</div>

---

## range

Définit la portée de recherche des joueurs à proximité dans le type de cible `NEARBY_PLAYERS`.

| Valeurs |                               Détails                                | Par défaut |
|---------|:--------------------------------------------------------------------:|:----------:|
| `range` | Définit la portée, en blocs, de la recherche des cibles des joueurs. |   `20.0`   |

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
        sValue: "&2Joueurs ciblés dans un rayon de 25 blocs !"
```

Ceci envoie un message aux joueurs dans un rayon de 25 blocs du boss lorsque celui-ci meurt.

</div>

</details>

</div>

## location

Définit l'emplacement pour le type de cible `LOCATION`.

| Valeurs    |                    Détails                     | Par défaut |
|------------|:----------------------------------------------:|:----------:|
| `location` | Définit l'emplacement du monde qui sera ciblé. |   `none`   |

Cela utilise le format `location: nomdumonde,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, par exemple, `same_as_boss,100,64,100,0,0`
serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

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
        location: "monMonde,100,64,200,0,0"
```

Ceci fait tomber la foudre à l'emplacement x = 100, y = 64, z = 200 d'un monde appelé `monMonde`.

</div>

</details>

</div>

---

## locations

Définit les emplacements pour le type de cible `LOCATIONS`.

| Valeurs     |                            Détails                            | Par défaut |
|-------------|:-------------------------------------------------------------:|:----------:|
| `locations` | Définit la liste des emplacements du monde qui seront ciblés. |   `none`   |

Cela utilise le format `nomdumonde,x,y,z,pitch,yaw` pour l'emplacement.

**Notez que `same_as_boss` est un espace réservé valide pour le nom du monde, par exemple, `same_as_boss,100,64,100,0,0`
serait un emplacement valide qui ciblerait le même monde que celui où se trouve le boss.**

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
        - "monMonde,100,64,200,0,0"
        - "same_as_boss,-100,12,130,0,0"
```

Ceci fait tomber la foudre à l'emplacement x = 100, y = 64, z = 200 d'un monde appelé `monMonde` et une autre foudre
dans le même monde que le boss à l'emplacement x = -100, y = 12 et z = 130.

</div>

</details>

</div>

---

## Ciblage des zones

Les [zones]($language$/elitemobs/elitescript_zones.md) ont plusieurs cibles et il est important de comprendre leur
fonctionnement afin de pouvoir utiliser au mieux les scripts Elite.

Les zones fonctionnent en deux parties:

### Partie 1 - Définir l'emplacement de la zone

Les zones doivent savoir où elles sont censées se trouver et, pour ce faire, vous utilisez le système de ciblage de la
même manière que pour tout autre effet basé sur l'emplacement, comme la foudre.

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

Ceci fait apparaître une zone cylindrique autour du boss. Notez qu'aucune action n'est définie dans cet exemple pour le
moment, cela est traité ci-dessous.

Certaines zones, comme [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), ont deux cibles ou
plus. En effet, les rayons sont des lignes et les lignes sont définies par deux points. Ceci est traité plus en détail
dans la [page des zones]($language$/elitemobs/elitescript_zones.md), mais elles fonctionnent toutes fondamentalement de
la même manière.

</div>

</details>

</div>

### Partie 2 - Cibler l'intérieur de la zone

Maintenant que la zone sait où elle se trouve, nous devons indiquer à l'action que sa cible est la zone que nous avons
définie. C'est à cela que servent `targetType: ZONE_FULL` et `targetType:ZONE_BORDER`.

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

En utilisant la même zone que dans la première partie, nous ajoutons maintenant l'action. La cible de cette action
est `ZONE_FULL`, ce qui signifie qu'elle fera apparaître des particules à l'intérieur de toute la zone.

Notez que ZONE_BORDER n'est pas disponible pour toutes les zones. Vous trouverez plus d'informations à ce sujet dans la
page [zones de script]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Suivi de la zone

Définit si la zone se déplacera avec la cible, par exemple si la zone se déplacera lorsque le boss se déplacera
pour `targetType: SELF`.

| Valeurs |                    Détails                     | Par défaut |
|---------|:----------------------------------------------:|:----------:|
| `track` | Définit si la zone se déplacera avec la cible. |   `true`   |

Notez que les zones animables ne peuvent pas effectuer de
suivi. [Plus d'informations à ce sujet ici.]($language$/elitemobs/elitescript_zones.md&section=animatable)

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

En utilisant le même exemple que dans les parties 1 et 2, la zone est maintenant définie pour ne pas effectuer de suivi.
Cela signifie que la zone apparaîtra à l'emplacement du boss, mais même si le boss continue de s'éloigner, la zone
restera là où elle a été créée.

Enfin, notez que si une zone est définie pour ne pas effectuer de suivi, elle enregistrera son emplacement au moment où
le script est appelé.

Par exemple, si vous souhaitez avoir une phase d'avertissement et une phase de dégâts pour votre script, vous devrez
vous assurer d'exécuter toutes les actions au début et de mettre un temps d'attente sur toutes les actions liées aux
dégâts que vous souhaitez exécuter plus tard individuellement. Vous ne devez pas retarder un script entier que vous
appelez via `RUN_SCRIPT` pour des raisons techniques.

Voici un exemple correct d'une puissance avec une phase d'avertissement et une phase de dégâts tirée du Sanctuaire du
Palais de givre.

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

Ce script fait beaucoup de choses, mais il est divisé en deux scripts clairs: `VisualCylinder` et `DamageCylinder`.

`VisualCylinder` s'exécute en premier et possède l'action `RUN_SCRIPT` qui exécute immédiatement `DamageCylinder` en
même temps que `VisualCylinder`.

Cependant, chaque action dans `DamageCylinder` est définie pour attendre 60 ticks, soit 3 secondes.

Cela signifie que le boss a une phase d'avertissement de 3 secondes, puis effectue une phase de dégâts, et même si les
zones sont définies pour ne pas effectuer de suivi, la zone d'avertissement et la zone de dégâts se trouveront au même
endroit.

### Propriétés de cible spécifiques à la zone

Les zones ont les propriétés spécifiques suivantes:

#### coverage

Définit le pourcentage de la zone qui sera effectivement utilisé pour l'action. Fonctionne uniquement pour les cibles
d'emplacement (ne fonctionne pas lors du ciblage de joueurs ou d'autres entités).

| Valeurs    |                       Détails                        | Par défaut |
|------------|:----------------------------------------------------:|:----------:|
| `coverage` | Définit le pourcentage de la zone qui sera couverte. |   `1.0`    |

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

Dans ce cas, seules 50 % de la zone seront recouvertes de particules.

</div>

</details>

</div>

### Héritage des cibles

Lorsqu'un script exécute un autre script (ou "appelle" ce script), il est possible de transmettre les informations de
zone et de cible du premier script au second.

**Exemples d'utilisation**

1. **Exécuteurs de scripts améliorés**

Les exécuteurs de scripts sont des scripts dont la seule fonction est d'exécuter de nombreux autres scripts. Ils sont
utilisés pour faciliter la gestion des scripts, en particulier lors de la gestion de plusieurs scripts nécessitant une
synchronisation précise.

Grâce à l'héritage de cible, plusieurs scripts peuvent utiliser la même zone ou la même cible, ce qui réduit
potentiellement des centaines de lignes de scripts répétitifs.

2. **Filtrage de cible Matryoshka / Filtrage de cible de poupée russe**

Des conditions de filtrage peuvent être appliquées aux cibles d'une action. En transmettant les cibles à un script
différent avec des filtres différents, il devient possible de superposer les conditions et d'appliquer différents effets
au même pool de cibles en fonction de critères de plus en plus spécifiques.

Par exemple, il est possible de créer une zone qui recherche des joueurs et de faire une action qui vérifie si tous les
joueurs de la zone ont une étiquette spécifique. Les cibles valides peuvent ensuite être transmises à un autre script où
une autre action peut ensuite exécuter une condition de vérification aléatoire et appliquer un effet basé sur cette
chance. Les cibles peuvent ensuite être transmises à un autre script où une autre condition peut faire une vérification
pour voir si les cibles sont toujours en vie et faire un comportement spécial si elles sont mortes.

Ce ne sont bien sûr que des exemples. Il s'agit d'un système très flexible.

3. **Zones complexes**

Enfin, il est possible de superposer des cibles pour créer des zones complexes, en utilisant éventuellement des
conditions si nécessaire, et il est même possible de créer des zones semi-aléatoires en utilisant les conditions de
script et la possibilité de n'exécuter qu'un seul des scripts listés dans les actions de script.

**Remarque:** Pour cette section, l'expression **"script parent"** désigne le script qui exécute le **"script héritant"
**, c'est-à-dire le script qui utilisera les cibles héritées.
Lors de l'utilisation de l'héritage de cible, il est important d'examiner attentivement le _script parent_ pour
s'assurer que les données correctes sont transmises.

#### INHERIT_SCRIPT_TARGET

Lors de l'utilisation de `INHERIT_SCRIPT_TARGET`, les cibles du _script parent_ seront transmises au script héritant.
Cela présente quelques mises en garde:

- Lors de la transmission de **cibles d'entité**, il est possible d'exécuter des actions qui nécessitent des
  emplacements (telles que l'apparition de particules) car l'emplacement des entités sera utilisé. Il est, bien sûr,
  également possible d'utiliser des actions qui nécessitent des entités.

- Lors de la transmission de **cibles d'emplacement**, il n'est possible d'utiliser que des emplacements. **La seule
  façon d'obtenir une entité à partir d'emplacements est de créer une zone à cet emplacement et de rechercher des
  entités.** Ainsi, même s'il n'est pas impossible de transmettre un emplacement et d'obtenir ensuite des entités, cela
  nécessitera un peu de travail supplémentaire.

#### Héritage de zones

Lors de l'utilisation de `INHERIT_SCRIPT_ZONE_FULL` ou de `INHERIT_SCRIPT_ZONE_BORDER`, il est impératif que le _script
parent_ définisse une zone, sinon le _script héritant_ ne pourra pas s'exécuter correctement.

De plus, les zones peuvent éventuellement être [suivies]($language$/elitemobs/elitescript_targets.md&section=zone-track). Cela sera également transmis avec la zone.

- Une zone **non suivie** créera toujours une zone là où elle est définie par le _script héritant_. Cela signifie que
  les paramètres de la zone seront utilisés par les actions dans les _scripts héritants_ pour créer de toutes nouvelles
  zones chaque fois qu'une action s'exécute, et l'emplacement de ces zones sera défini par l'action.

- Une zone **suivie** peut transmettre le même emplacement exact de zone à tous les _scripts héritants_ si le _script
  parent_ est défini pour cibler `ZONE_FULL` ou `ZONE_BORDER`. Cela signifie que chaque script agira sur les mêmes
  emplacements.
