```markdown
# Zones des scripts Elite

Les zones sont des emplacements définis par une forme qui peut être utilisée comme cible par les scripteurs pour exécuter tout type d'action.

Une seule zone peut être définie par script.

Pour cibler des zones, les types de cibles `ZONE_FULL` ou `ZONE_BORDER` peuvent être utilisés.

Les zones elles-mêmes utilisent également les [cibles de script]($language$/elitemobs/elitescript_targets.md) pour définir l'emplacement de la zone.

## shape

Définit la forme de la zone. Formes valides :

| Type de forme                                                               | Détails | Animé | Frontière |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Forme cylindrique | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Forme sphérique | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Forme de dôme (demi-sphère) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Forme cuboïde (forme de cube) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Une ligne fixe entre deux points | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Une ligne qui tourne entre deux points | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Une ligne qui se déplace entre deux points initiaux et deux points finaux | ✅ | ❌ |

---

#### Animé

Les zones avec des animations démarrent l'animation de la zone lorsque le script est appelé pour la première fois.

Cela signifie que si une action a un délai d'attente, lorsque l'action démarre, la zone a déjà bougé pendant que l'action était en attente.

Les zones sont toujours animées à chaque tick. Cela signifie que si vous utilisez l'action `SPAWN_PARTICLES`, vous pouvez la configurer pour qu'elle s'exécute à chaque tick car la zone bougera à chaque tick. Si vous l'exécutez toutes les secondes, vous verrez les particules sauter car la zone a continué à bouger même pendant les ticks où les particules n'ont pas été générées.

Si vous souhaitez créer une action de zone rotative mais que vous souhaitez attendre un certain nombre de ticks avant de démarrer l'action, créez un script différent et appelez ce script via `RUN_SCRIPT`. Assurez-vous que `RUN_SCRIPT` a le délai d'attente que vous souhaitez.

Les zones resteront à l'emplacement final une fois qu'elles auront terminé l'animation.

Toutes les zones animées sont configurées pour ne pas suivre les cibles de script car le mouvement supplémentaire rendrait les choses trop difficiles à comprendre pour les scripteurs et les joueurs. Cela signifie que ces zones ne suivront pas les boss ou les joueurs et qu'elles se déplaceront toujours par rapport à leurs points de spawn initiaux.

---

#### Frontière

Certaines zones peuvent avoir des frontières. Les frontières signifient que `ZONE_BORDER` peut être utilisé comme cible de la zone. Les frontières sont définies en créant une deuxième forme plus petite à l'intérieur de la première, plus grande. La zone entre la zone plus petite et la zone plus grande est la frontière.

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
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: SMOKE_LARGE
        Target:
          targetType: ZONE_BORDER
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_border.jpg](../../../img/wiki/elitescript_zones_border.jpg)

</div>

Ce script génère des particules de fumée qui n'apparaissent **que** dans la frontière de la zone pendant 5 secondes (répétition toutes les 5 x fois 20 = 100 ticks).

Si vous n'aviez pas utilisé l'option `ZONE_BORDER` mais l'option `ZONE_FULL` à la place, la zone entière serait recouverte de particules de fumée comme ceci :

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du centre de la sphère | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| `radius`                                                    | Rayon de la sphère | ✅ |
| `borderRadius`                                              | Rayon de la sphère intérieure | ❌ |

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
      shape: SPHERE
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_sphere.jpg](../../../img/wiki/elitescript_zones_sphere.jpg)

</div>

Ce script montre la forme d'une sphère en utilisant des particules de nuages.

</div>

</details>

</div>

---

### DOME

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du centre du dôme | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| `radius`                                                    | Rayon du dôme | ✅ |
| `borderRadius`                                              | Rayon du dôme intérieur | ❌ |

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
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_dome.jpg](../../../img/wiki/elitescript_zones_dome.jpg)

</div>

Ce script montre la forme d'un dôme en utilisant des particules de nuages.

</div>

</details>

</div>

---

### CYLINDER

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du centre du cylindre | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| `radius`                                                    | Rayon du cylindre | ✅ |
| `borderRadius`                                              | Rayon du cylindre intérieur | ❌ |
| `height`                                                    | Hauteur du cylindre | ❌ |

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
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 8
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cylinder.jpg](../../../img/wiki/elitescript_zones_cylinder.jpg)

</div>

Ce script montre la forme d'un cylindre en utilisant des particules de nuages.

</div>

</details>

</div>

---

### CUBOID

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du centre du cuboïde | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| `x`                                                         | Définit la longueur du cuboïde | ✅ |
| `y`                                                         | Définit la hauteur du cuboïde | ✅ |
| `z`                                                         | Définit la largeur du cuboïde, par défaut `x` | ❌ |
| `xBorder`                                                   | Définit la longueur du cuboïde intérieur | ❌ |
| `yBorder`                                                   | Définit la hauteur du cuboïde intérieur | ❌ |
| `zBorder`                                                   | Définit la largeur du cuboïde intérieur, par défaut `x` | ❌ |

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
      shape: CUBOID
      x: 4
      y: 4
      z: 4
      xBorder: 3
      yBorder: 3
      zBorder: 3
      Target:
        targetType: SELF
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_cuboid.jpg](../../../img/wiki/elitescript_zones_cuboid.jpg)

</div>

Ce script montre la forme d'un cuboïde en utilisant des particules de nuages.

</div>

</details>

</div>

---

### STATIC_RAY

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du premier point de la ligne | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Définit l'emplacement du dernier point de la ligne | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| `ignoresSolidBlocks`                                        | Définit si le rayon traversera les blocs solides | ❌ |
| `pointRadius`                                               | Définit l'épaisseur du rayon. La valeur par défaut est de 0.5 bloc. | ❌ |

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
      shape: STATIC_RAY
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
      Target:
        targetType: SELF
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 5
        times: 20
```

<div align="center">

![elitescript_zones_staticray.jpg](../../../img/wiki/elitescript_zones_staticray.jpg)

</div>

Ce script montre la forme d'un rayon statique en utilisant des particules de nuages. 

Nous avons ajusté la hauteur de la zone en utilisant l'option `offset` aux deux extrémités de la zone pour faire apparaître le rayon du milieu du joueur et du boss, sinon le rayon apparaîtrait à leurs pieds.

</div>

</details>

</div>

---

### ROTATING_RAY

| Clé                                                         | Détails | Obligatoire |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Définit la forme de la zone. Doit être `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Définit les types d'entités qui sont ciblées | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du premier point de la ligne | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Définit l'emplacement du dernier point de la ligne | ✅ |
| `animationDuration`                                         | Définit, en ticks, la durée de la rotation | ✅ |
| `pitchPreRotation`                                          | Applique une rotation initiale au tangage avant l'animation | ❌ |
| `yawPreRotation`                                            | Applique une rotation initiale au lacet avant l'animation | ❌ |
| `pitchRotation`                                             | Définit la rotation du tangage pour l'animation | ❌ |
| `yawRotation`                                               | Définit la rotation du lacet pour l'animation | ❌ |
| `ignoresSolidBlocks`                                        | Définit si le rayon traversera les blocs solides | ❌ |
| `pointRadius`                                               | Définit l'épaisseur du rayon. La valeur par défaut est de 0.5 bloc. | ❌ |

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
      shape: ROTATING_RAY
      animationDuration: 100
      pitchPrerotation: 0
      yawPrerotation: 0
      pitchRotation: 0
      yawRotation: 360
      ignoresSolidBlocks: true
      Target:
        targetType: SELF
        offset: 0,1,0
      Target2:
        targetType: DIRECT_TARGET
        offset: 0,1,0
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_rotatingray.gif](../../../img/wiki/elitescript_zones_rotatingray.gif)

</div>

Ce script montre à quoi ressemble un rayon rotatif en utilisant des particules de nuages.

Premièrement, il crée un rayon du boss au joueur qui l'a blessé, en utilisant des particules de nuages. Ensuite, il ajuste les positions légèrement vers le haut d'un bloc en utilisant `offset`.

Ensuite, il fait tourner le rayon dans un cercle complet autour du joueur qui a été ciblé. Cette rotation dure 5 secondes (100 ticks) pour se terminer, le joueur ciblé étant au centre.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Clé                                                          | Détails | Obligatoire |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Définit la forme de la zone. Doit être `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Définit les types d'entités qui sont ciblées | ❌ |
| `animationDuration`                                          | Définit, en ticks, la durée de la translation | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Définit l'emplacement du premier point de la ligne | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Définit l'emplacement de destination du premier point de la ligne | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Définit l'emplacement du deuxième point de la ligne | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Définit l'emplacement de destination du deuxième point de la ligne | ✅ |
| `ignoresSolidBlocks`                                         | Définit si le rayon traversera les blocs solides | ❌ |
| `pointRadius`                                                | Définit l'épaisseur du rayon. La valeur par défaut est de 0.5 bloc. | ❌ |

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
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
      FinalTarget:
        targetType: SELF
        offset: 0,10,0
      Target2:
        targetType: DIRECT_TARGET
      FinalTarget2:
        targetType: DIRECT_TARGET
        offset: 0,10,0
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
      - action: SPAWN_PARTICLE
        particles:
          - particle: CLOUD
        Target:
          targetType: ZONE_FULL
        repeatEvery: 1
        times: 100
```

<div align="center">

![elitescript_zones_translatingray.gif](../../../img/wiki/elitescript_zones_translatingray.gif)

</div>

Ce script montre à quoi ressemble un rayon qui se déplace en utilisant des particules de nuages.

Premièrement, il crée un rayon du boss au joueur qui l'a blessé, en utilisant des particules de nuages. 

Ensuite, il anime le rayon pour qu'il monte de 10 blocs vers le haut à partir des deux cibles en utilisant `offset` sur `FinalTarget1` et `FinalTarget2`.

L'animation dure 5 secondes (100 ticks) pour se terminer.

Nous pouvons facilement faire déplacer le rayon latéralement en ajustant le décalage Z sur quelque chose comme `offset: 0,0,10` :

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Ce comportement peut changer en fonction de l'endroit où vous vous trouvez dans le jeu. 
<br>Si nous modifions le décalage X dans le script affiché dans l'image GIF, le rayon semblera s'éloigner de nous en ligne droite de notre point de vue.

</div>

</details>

</div>

---

## filter

La propriété de filtre peut être utilisée pour ne cibler que des entités spécifiques à l'intérieur de la zone. Ces entités peuvent être :

| Valeur | Détails |
| --- | :-: |
| `PLAYER` | Ne cible que les joueurs dans la zone (par défaut) |
| `ELITE` | Ne cible que les élites dans la zone |
| `LIVING` | Cible toutes les entités vivantes dans la zone |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  FilterExample:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: SPHERE
      radius: 12
      borderRadius: 11
      filter: ELITE
      Target:
        targetType: SELF
        track: false
```

Cet exemple de script montre comment utiliser le filtre pour que la zone ne cible que les élites.

</div>

```