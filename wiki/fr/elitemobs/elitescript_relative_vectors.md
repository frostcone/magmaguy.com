# Vecteurs relatifs Elite Script

## À quoi servent-ils

Les vecteurs relatifs sont des vecteurs qui sont relatifs à un emplacement spécifique mais dynamique.

Pour mieux expliquer ce que sont ces vecteurs, considérons le cas suivant : vous voulez pousser un joueur vers le boss dans le cadre d'un pouvoir. Étant donné que le boss et le joueur se déplacent pendant le combat, il n'est pas possible de compter sur un vecteur spécifique pour réaliser cet effet : vous aurez besoin d'un vecteur qui va du joueur vers le boss. (Imaginez une courte ligne avec une flèche allant du joueur vers le boss.)

Les vecteurs relatifs peuvent être utilisés de tellement de façons qu'il serait impossible de toutes les énumérer, mais parmi elles figurent : tirer des entités (comme des projectiles) vers un joueur ou un mob spécifique ; faire apparaître des renforts derrière un joueur ; tirer un bloc tombant dans une direction spécifique ; créer des rayons qui sont tirés vers un joueur, et bien plus encore.

## Comment fonctionnent les vecteurs ?

Si vous ne savez pas ou ne vous souvenez pas ce que sont les vecteurs ou comment ils fonctionnent, vous pouvez penser aux vecteurs comme des flèches qui pointent d'un point à un autre.

En tant que tel, l'une des propriétés des vecteurs est leur longueur. Cette longueur est importante ; dans le cas des flèches, cette longueur est la vitesse à laquelle une flèche est tirée, dans le cas d'une tentative d'obtention de points décalés par rapport à un emplacement spécifique, c'est la distance par rapport à ce point. Les choses plus éloignées auront des longueurs de vecteurs plus importantes, et les choses plus proches auront des longueurs plus courtes.

Pour certains mécanismes, vous ne voudrez probablement pas compter sur la distance qui sépare deux points, car vous voulez juste obtenir une direction. Heureusement, vous pouvez utiliser la normalisation de vecteur, qui garantit que la direction est préservée mais modifie la longueur pour qu'elle soit de 1,0. Vous pouvez ensuite utiliser des multiplicateurs pour modifier facilement le vecteur jusqu'à ce que vous soyez satisfait du décalage qu'il fournit ou de la vitesse qu'il donne.

## Propriétés

| Valeur |                                                 Détails                                                  | Obligatoire ? | Valeur par défaut |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Cible]($language$/elitemobs/elitescript_targets.md) au point à partir duquel le vecteur démarrera | ✅ | `none` |
| `DestinationTarget` |          [Cible]($language$/elitemobs/elitescript_targets.md) au point final du vecteur           | ✅ | `none` |
| `normalize` |                                 Définit si le vecteur doit être normalisé                                  | ❌ | `false` |
| `multiplier` |                                      Multiplie la longueur du vecteur                                      | ❌ | `1.0` |
| `offset` |                          Permet d'insérer un décalage fixe manuel à ce décalage                           | ❌ | `none` |

<div align="center">

<details> 

<summary><b>Exemple</b></summary>

<div align="left">

```yaml
eliteScript:
  ShootChicken:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: CHICKEN
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Tire un poulet

***

```yaml
eliteScript:
  ShootArrow:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ARROW
      Target:
        targetType: SELF
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Tire une flèche

***

```yaml
eliteScript:
  SpawnReinforcement:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_ENTITY
      sValue: ZOMBIE
      Target:
        targetType: SELF
      RelativeOffset:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: DIRECT_TARGET
        normalize: true
        multiplier: 2.0
```

Fait apparaître un zombie 2 blocs derrière le joueur, par rapport au boss.

***

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      Shape: SPHERE
      target:
        targetType: SELF_SPAWN
        offset: 0,0,0
        track: false
      filter: PLAYER
      radius: 6
    Actions:
    - action: SPAWN_PARTICLE
      repeatEvery: 38
      times: 5
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.9
      particles:
      - particle: FLAME
        RelativeVector:
          SourceTarget:
            targetType: ACTION_TARGET
            track: true
          DestinationTarget:
            targetType: SELF_SPAWN
            offset: 0,-0.5,0
        speed: 0.05
```

Crée une sphère de flamme animée qui rétrécit jusqu'à l'emplacement d'apparition.

</div>

</details>

</div>

### Ordre des opérations

L'ordre des opérations lors de l'application des propriétés est le suivant :

Calcul de vecteur -> `normalize` -> `multiplier` -> `offset`

```

