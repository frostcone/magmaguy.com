# Introduction

Sur cette page, vous découvrirez divers exemples de pouvoirs de boss personnalisés créés avec EliteScript et
l'[WebApp](https://magmaguy.com/webapp/webapp.html). Ces exemples simples illustrent comment utiliser plusieurs actions
et d'autres fonctionnalités pour créer des pouvoirs de boss uniques.

De plus, des démonstrations visuelles accompagnent chaque exemple, ce qui facilite la compréhension du fonctionnement du
script dans le jeu.

N'hésitez pas à copier n'importe lequel des exemples et à les utiliser dans vos propres donjons ou mondes.

## Exemples de Pouvoirs

### Coup au Sol

Ce script fera se téléporter le boss 8 blocs au-dessus du joueur qui lui a infligé des dégâts, puis s'écrasera au sol.
Ensuite, il appliquera l'effet de potion de lenteur à tous les joueurs situés à moins de 3 blocs du boss, et affichera
le message "Étourdi" à l'écran pendant 3 secondes.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  SlamDown:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      FinalTarget:
        targetType: DIRECT_TARGET
        offset: 0,8,0
      Target:
        targetType: SELF
    - action: PUSH
      vValue: 0,-5,0
      Target:
        targetType: SELF
      wait: 15
    - action: POTION_EFFECT
      potionEffectType: SLOW
      amplifier: 3
      duration: 60
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    - action: TITLE_MESSAGE
      subtitle: "Étourdi !"
      duration: 40
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: NEARBY_PLAYERS
        range: 3
      wait: 20
    Cooldowns:
      local: 180
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_slamdown.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Repousser

Ce script générera un dôme de 4 blocs autour du boss. Par la suite, il lancera un effet de particules à la limite de la
zone, pendant une seconde, puis une autre action repoussera tous les joueurs à l'intérieur de la zone. En raison du
paramètre de décalage pour la poussée, les joueurs seront légèrement propulsés vers le haut. Enfin, le script enverra un
message à tous les joueurs à l'intérieur de la zone.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  PushAway:
    Events:
    - EliteMobDamagedEvent
    Zone:
      shape: DOME
      radius: 4
      borderRadius: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_BORDER
        track: true
      repeatEvery: 5
      times: 4
    - action: PUSH
      Target:
        targetType: ZONE_FULL
        track: true
      RelativeVector:
        SourceTarget:
          targetType: SELF
        DestinationTarget:
          targetType: ACTION_TARGET
        normalize: true
        multiplier: 1.0
        offset: 0,0.2,0
      repeatEvery: 1
      times: 20
    - action: MESSAGE
      sValue: "&cBoss cool!: &fPARTEZ !"
      Target:
        targetType: ZONE_FULL
      repeatEvery: 10
      times: 2
    Cooldowns:
      local: 140
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_pushaway.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Pluie de Flèches

Crée un script qui dessinera un cercle au sol autour du joueur qui a endommagé le monstre, il affiche également un
message à l'écran indiquant au joueur de sortir du cercle. Puis, 2 secondes plus tard, il tirera des flèches vers le bas
au même endroit, mais à partir de 10 blocs au-dessus.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  MakeCircle:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 8
      particles:
      - particle: FLAME
    - action: TITLE_MESSAGE
      Target:
        targetType: DIRECT_TARGET
      fadeOut: 10
      duration: 20
      fadeIn: 10
      subtitle: Sortez de la zone !
    - action: RUN_SCRIPT
      scripts:
      - "ArrowRain"
    Cooldowns:
      local: 160
      global: 80
  ArrowRain:
    Zone:
      shape: CYLINDER
      radius: 5
      borderRadius: 4
      height: 1
      Target:
        targetType: DIRECT_TARGET
        track: false
        offset: 0,10,0
    Actions:
    - action: SUMMON_ENTITY
      wait: 40
      sValue: ARROW
      Target:
        targetType: ZONE_FULL
        track: false
      vValue: 0,-1,0
      repeatEvery: 10
      times: 4
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_arrowrain.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Aura de Feu

Ceci créera un script qui fera apparaître des particules autour du boss en utilisant la zone cylindrique, cela durera 6
secondes. Le boss recevra également l'étiquette `FireOn` pendant 6 secondes.

Si les joueurs attaquent le boss lorsque l'étiquette est active, les joueurs seront mis en feu pendant 1 seconde. Ceci
est fait en utilisant des conditions, le script `SetOnFire` ne pourra s'exécuter que si le boss a l'étiquette
correspondante `FireOn`.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Visual:
    Events:
    - PlayerDamagedByEliteMobEvent
    Zone:
      shape: CYLINDER
      radius: 2
      height: 3
      Target:
        targetType: SELF
        track: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: FLAME
      Target:
        targetType: ZONE_FULL
        track: true
        coverage: 1.0
      repeatEvery: 5
      times: 24
    - action: TAG
      tags:
      - "FireOn"
      duration: 120
      Target:
        targetType: SELF
    Cooldowns:
      local: 180
      global: 80
  SetOnFire:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      duration: 20
      Target:
        targetType: DIRECT_TARGET
      Conditions:
        Target:
          targetType: SELF
        conditionType: BLOCKING
        hasTags:
        - "FireOn"
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_fireaura.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Lignes de Poison

Ce script créera deux zones cuboïdes centrées sur le boss. L'IA du boss est désactivée pendant 2 secondes. Les zones
cuboïdes sont configurées de manière à former un symbole plus au sol.

Le script générera ensuite des particules de nuage pendant 2 secondes dans les zones, puis il générera des particules de
fumée et appliquera l'effet de potion de poison aux zones pendant 3 secondes.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  PoisonLine1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CUBOID
      x: 20
      y: 1
      z: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SET_MOB_AI
      bValue: false
      duration: 40
      Target:
        targetType: SELF
      scripts:
      - "PoisonLine2"
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
    Cooldowns:
      local: 200
      global: 80
  PoisonLine2:
    Zone:
      shape: CUBOID
      x: 2
      y: 1
      z: 20
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 1
      repeatEvery: 5
      times: 8
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        coverage: 1
      wait: 40
      repeatEvery: 5
      times: 12
    - action: POTION_EFFECT
      potionEffectType: POISON
      amplifier: 4
      duration: 50
      Target:
        targetType: ZONE_FULL
      wait: 40
      repeatEvery: 5
      times: 12
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_poisonlines.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Rebond

Ce script crée une zone cylindrique de 10 blocs centrée sur le boss, puis il applique des effets de particules et une
poussée à la zone pendant 10 secondes.

L'action de poussée pousse les joueurs légèrement vers le haut à chaque tic, créant l'illusion que les joueurs
rebondissent lorsqu'ils se trouvent dans la zone.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Bounce:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 10
      height: 2
      Target:
        targetType: SELF
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: EXPLOSION_NORMAL
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 0.2
    - action: PUSH
      vValue: 0,0.4,0
      Target:
        targetType: ZONE_FULL
      repeatEvery: 1
      times: 200
    Cooldowns:
      local: 220
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_bounce.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Invoquer

Ce script créera une zone cylindrique (positionnée 6 blocs au-dessus du joueur en raison du décalage appliqué) centrée
autour du joueur qui a endommagé le boss. De plus, il affichera un message à l'écran à ce joueur.

Après un délai de 2 secondes, des renforts apparaîtront dans la zone désignée. Cependant, seule une partie de la zone
sera occupée par des renforts, car nous avons utilisé `coverage`. Si le joueur ne parvient pas à éliminer tous les
renforts, ils disparaîtront automatiquement après 20 secondes (400 ticks).

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Summon:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 3
      height: 1
      Target:
        targetType: DIRECT_TARGET
        offset: 0,6,0
    Actions:
    - action: SUMMON_REINFORCEMENT
      sValue: "fc_boss.yml"
      duration: 400
      Target:
        targetType: ZONE_FULL
        coverage: 0.2
      wait: 40
    - action: TITLE_MESSAGE
      subtitle: "Amis ! À l'aide !!!"
      duration: 30
      fadeIn: 10
      fadeOut: 10
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 333
      global: 80
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_summon.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Zones de Potion

Ce script est activé lorsqu'un joueur endommage le boss. Il exécute ensuite soit le script `PotionZoneBad`, soit le
script `PotionZoneGood`.

Dans le script `PotionZoneBad`, une zone cylindrique est générée autour des joueurs proches qui se trouvent à moins de
20 blocs du boss. Il produit des effets de particules de nuage et de grande fumée avec une couverture spécifiée, inflige
l'effet de potion de flétrissement et délivre un message aux joueurs proches.

Dans le script `PotionZoneGood`, une zone cylindrique est générée autour des joueurs qui se trouvent à moins de 20 blocs
du boss. Les effets de particules pour ce script sont inversés. Ce script applique un effet de potion de guérison au
lieu du flétrissement et envoie un message aux joueurs proches.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "PotionZoneBad"
      - "PotionZoneGood"
      onlyRunOneScript: true
    Cooldowns:
      local: 110
      global: 80
  PotionZoneBad:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: WITHER
      amplifier: 3
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cBoss cool!: &fSentez la brûlure !"
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
  PotionZoneGood:
    Zone:
      shape: CYLINDER
      height: 2
      radius: 5
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
        track: false
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_LARGE
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      repeatEvery: 10
      times: 4
    - action: SPAWN_PARTICLE
      particles:
      - particle: CLOUD
      Target:
        targetType: ZONE_FULL
        coverage: 0.3
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: POTION_EFFECT
      potionEffectType: HEAL
      amplifier: 1
      duration: 80
      Target:
        targetType: ZONE_FULL
        track: false
      wait: 40
      repeatEvery: 10
      times: 6
    - action: MESSAGE
      sValue: "&cBoss cool!: &fSentez le... Attendez, ce n'est pas le bon."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Vagues Aveuglantes

Ce script lance deux vagues de rayons au sol projetées dans les directions X positives et négatives, en partant du boss.

Nous utilisons le paramètre `offset` pour déterminer la longueur et la taille des rayons, en définissant spécifiquement
la valeur Z. De plus, nous spécifions la direction de propagation de la vague en définissant les valeurs X. (Ceci n'est
qu'une explication de la façon dont ce script spécifique utilise ces valeurs, vous n'êtes pas obligé de faire les vôtres
exactement comme ça)

Bien qu'il soit possible d'ajuster les valeurs Y pour augmenter la hauteur des vagues de rayons, nous la laissons à 0
pour permettre aux joueurs de sauter par-dessus les rayons.

Le paramètre `animationDuration` détermine le temps nécessaire aux vagues de rayons pour se déplacer des cibles aux
cibles finales. La réduction de cette valeur rendrait les rayons plus rapides et plus difficiles à éviter.

Par la suite, des effets de particules et de potions sont appliqués. Les joueurs qui ne parviennent pas à éviter ou à
sauter par-dessus les vagues de rayons seront aveuglés pendant 5 secondes (100 ticks).

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Blind:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: 10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: 10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
      scripts: "Blind2"
    Cooldowns:
      local: 200
      global: 80
  Blind2:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: TRANSLATING_RAY
      Target:
        targetType: SELF
        offset: 0,0,5
        track: false
      FinalTarget:
        targetType: SELF
        offset: -10,0,5
        track: false
      Target2:
        targetType: SELF
        offset: 0,0,-5
        track: false
      FinalTarget2:
        targetType: SELF
        offset: -10,0,-5
        track: false
      animationDuration: 100
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SMOKE_NORMAL
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 5
      times: 20
    - action: POTION_EFFECT
      potionEffectType: BLINDNESS
      amplifier: 5
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: true
      repeatEvery: 1
      times: 100
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_blindwaves.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Mur de Glace

Ce script crée 3 rayons rotatifs centrés sur le boss. Nous avons besoin de 3 rayons rotatifs différents car nous ne
pouvons pas définir la hauteur du rayon, nous utilisons donc plusieurs scripts et `offset` pour que les rayons
s'empilent en hauteur afin qu'ils apparaissent comme un *mur* rotatif singulier.

Les 3 scripts ont des zones identiques, sauf que le `offset` est différent. Ils sont configurés pour avoir une longueur
de 6 blocs à partir du boss et sont configurés pour faire une rotation de 360 degrés sur l'axe des abscisses en 10
secondes (200 ticks).

Tous les scripts ont des effets de particules définis et appliqueront l'action `VISUAL_FREEZE` pendant 5 secondes (100
ticks) à tous les joueurs qui sont *touchés* par les murs de rayons.

<div align="center">

<details>

<summary><b>Développer l'Exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      scripts:
      - "FreezeWall"
      - "FreezeWall2"
      - "FreezeWall3"
    Cooldowns:
      local: 300
      global: 80      
  FreezeWall:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
      Target2:
        targetType: SELF
        offset: 6,0,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
    <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>
```yml
FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,1,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,1,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        track: false
        offset: 0,2,0
      Target2:
        targetType: SELF
        track: false
        offset: 6,2,0
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      repeatEvery: 10
      times: 20
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  Votre navigateur ne supporte pas la balise vidéo.
</video>

</div>

</div>

</details>

</div>
