Voici la traduction en français, en conservant le formatage markdown :

# Introduction

Sur cette page, vous découvrirez divers exemples de pouvoirs de boss personnalisés créés avec EliteScript et la [WebApp](https://magmaguy.com/webapp/webapp.html). Ces exemples simples illustrent comment utiliser plusieurs actions et d'autres fonctionnalités pour créer des pouvoirs de boss uniques.

De plus, des démonstrations visuelles accompagnent chaque exemple, afin qu'il soit plus facile de comprendre comment le script fonctionne dans le jeu.

N'hésitez pas à copier n'importe lequel de ces exemples et à les utiliser dans vos propres donjons ou mondes.

## Exemples de Pouvoirs

### Coup Écrasant

Ce script fera en sorte que le boss se téléporte à 8 blocs au-dessus du joueur qui lui a infligé des dégâts, puis s'écrase au sol. Ensuite, il appliquera l'effet de potion de lenteur à tous les joueurs se trouvant à moins de 3 blocs du boss, et affichera le message 'Étourdi' à l'écran pendant 3 secondes.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
      subtitle: "Stunned!"
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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Repousser

Ce script générera un dôme de 4 blocs autour du boss. Ensuite, il lancera un effet de particule à la limite de la zone, durant une seconde, puis une autre action repoussera tous les joueurs se trouvant dans la zone. En raison du paramètre de décalage pour la poussée, les joueurs seront légèrement propulsés vers le haut. Enfin, le script enverra un message à tous les joueurs se trouvant dans la zone.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
      sValue: "&cCool boss!: &fBE GONE!"
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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Pluie de Flèches

Crée un script qui dessinera un cercle au sol autour du joueur qui a infligé des dégâts au mob, il affiche également un message à l'écran indiquant au joueur de sortir du cercle. Puis 2 secondes plus tard, il tirera des flèches vers le bas à ce même endroit, juste depuis 10 blocs de hauteur.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
      subtitle: Move out of the zone!
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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Aura de Feu

Cela créera un script qui fera apparaître des particules autour du boss en utilisant la zone cylindrique, cela durera 6 secondes. Le boss recevra également le tag `FireOn` pendant 6 secondes.

Si les joueurs attaquent le boss pendant que le tag est actif, les joueurs prendront feu pendant 1 seconde. Cela est fait en utilisant des conditions, le script `SetOnFire` ne pourra s'exécuter que si le boss possède le tag correspondant `FireOn`.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Lignes de Poison

Ce script créera deux zones cuboïdes centrées sur le boss. L'IA du boss est désactivée pendant 2 secondes. Les zones cuboïdes sont configurées de manière à former un symbole plus au sol.

Le script créera ensuite des particules de nuage pendant 2 secondes dans les zones, puis il créera des particules de fumée et appliquera l'effet de potion de poison aux zones pendant 3 secondes.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Rebond

Ce script crée une zone cylindrique de 10 blocs centrée sur le boss, puis il applique des effets de particules et une poussée à la zone pendant 10 secondes.

L'action de poussée pousse légèrement les joueurs vers le haut à chaque tick, créant l'illusion que les joueurs rebondissent lorsqu'ils se trouvent dans la zone.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Invocation

Ce script créera une zone cylindrique (positionnée à 6 blocs au-dessus du joueur en raison du décalage appliqué) centrée autour du joueur qui a infligé des dégâts au boss. De plus, il affichera un message à l'écran pour ce joueur.

Après un délai de 2 secondes, des renforts apparaîtront dans la zone désignée. Cependant, seule une partie de la zone sera occupée par les renforts puisque nous avons utilisé `coverage`. Si le joueur ne parvient pas à éliminer tous les renforts, ils disparaîtront automatiquement après 20 secondes (400 ticks).

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
      subtitle: "Friends! Help!!!"
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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Zones de Potion

Ce script est activé lorsqu'un joueur inflige des dégâts au boss. Il exécute ensuite soit le script `PotionZoneBad`, soit le script `PotionZoneGood`.

Dans le script `PotionZoneBad`, une zone cylindrique est générée autour des joueurs proches se trouvant à moins de 20 blocs du boss. Il produit des effets de particules de nuage et de grande fumée avec une couverture spécifiée, inflige l'effet de potion de flétrissement, et envoie un message aux joueurs proches.

Dans le script `PotionZoneGood`, une zone cylindrique est générée autour des joueurs se trouvant à moins de 20 blocs du boss. Les effets de particules pour ce script sont inversés. Ce script applique un effet de potion de soin au lieu de flétrissement et envoie un message aux joueurs proches.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
      sValue: "&cCool boss!: &fFeel the burn!"
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
      sValue: "&cCool boss!: &fFeel the... Wait, this is the wrong one."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Vagues Aveuglantes

Ce script lance deux vagues de rayons au sol projetées dans les directions X positive et négative, partant du boss.

Nous utilisons le paramètre `offset` pour déterminer la longueur et la taille des rayons, spécifiquement en définissant la valeur Z. De plus, nous spécifions la direction de propagation de la vague en définissant les valeurs X. (Ceci est juste une explication sur la façon dont ce script spécifique utilise ces valeurs, vous n'êtes pas obligé de faire le vôtre exactement comme cela)

Bien qu'il soit possible d'ajuster les valeurs Y pour augmenter la hauteur des vagues de rayons, nous les laissons à 0 pour permettre aux joueurs de sauter par-dessus les rayons.

Le paramètre `animationDuration` dicte le temps nécessaire aux vagues de rayons pour voyager des cibles aux cibles finales. Réduire cette valeur rendrait les rayons plus rapides et plus difficiles à éviter.

Ensuite, des effets de particules et de potion sont appliqués. Les joueurs ne parvenant pas à éviter ou à sauter par-dessus les vagues de rayons seront aveuglés pendant 5 secondes (100 ticks).

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

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
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</div>

</details>

</div>

***

### Mur de Gel

Ce script crée 3 rayons rotatifs centrés sur le boss. Nous avons besoin de 3 rayons rotatifs différents car nous ne pouvons pas définir la hauteur des rayons, nous utilisons donc plusieurs scripts et `offset` pour empiler les rayons en hauteur afin qu'ils apparaissent comme un seul *mur* rotatif.

Les 3 scripts ont des zones identiques, sauf que le `offset` est différent. Ils sont configurés pour avoir une longueur de 6 blocs à partir du boss et pour effectuer une rotation de 360 degrés en 10 secondes (200 ticks).

Tous les scripts ont des effets de particules configurés et appliqueront l'action `VISUAL_FREEZE` pendant 5 secondes (100 ticks) à tous les joueurs qui sont *touchés* par les murs de rayons.

<div align="center">

<details>

<summary><b>Développer l'exemple</b></summary>

<div align="left">

```yml
eliteScript:
  Trigger:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:Please specify the target language for the translation. I will retain the markdown formatting once the language is provided.