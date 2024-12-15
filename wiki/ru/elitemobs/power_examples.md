# Введение

На этой странице вы найдете различные примеры пользовательских способностей боссов, созданных с помощью EliteScript и [WebApp](https://magmaguy.com/webapp/webapp.html). Эти простые примеры показывают, как использовать несколько действий и другие функции для создания уникальных способностей боссов.

Кроме того, каждый пример сопровождается визуальной демонстрацией, чтобы было легче понять, как скрипт работает в игре.

Не стесняйтесь копировать любой из примеров и использовать их в своих подземельях или мирах.

## Примеры способностей

### Удар сверху

Этот скрипт заставит босса телепортироваться на 8 блоков выше игрока, нанесшего ему урон, а затем удариться о землю. После этого он применит эффект зелья замедления ко всем игрокам в радиусе 3 блоков от босса и отобразит на экране сообщение "Оглушен" в течение 3 секунд.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
      subtitle: "Оглушен!"
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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Отбрасывание

Этот скрипт создаст купол радиусом 4 блока вокруг босса. Затем он запустит эффект частиц на границе зоны, длящийся одну секунду, после чего другое действие отбросит всех игроков внутри зоны. Из-за настройки смещения для отбрасывания игроки будут слегка подброшены вверх. Наконец, скрипт отправит сообщение всем игрокам внутри зоны.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
      sValue: "&cКрутой босс!: &fУЙДИТЕ!"
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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Дождь из стрел

Создает скрипт, который нарисует круг на земле вокруг игрока, нанесшего урон мобу, а также покажет сообщение на экране, призывающее игрока выйти из круга. Затем, через 2 секунды, в это же место сверху вниз полетят стрелы, но уже с высоты 10 блоков.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
      subtitle: Выйди из зоны!
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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Огненная аура

Создает скрипт, который будет создавать частицы вокруг босса, используя цилиндрическую зону, и будет длиться 6 секунд. Босс также получит тег `FireOn` на 6 секунд.

Если игроки атакуют босса, пока тег активен, то игроки будут подожжены на 1 секунду. Это делается с помощью условий, скрипт `SetOnFire` сможет выполниться только в том случае, если у босса есть соответствующий тег `FireOn`.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Ядовитые линии

Этот скрипт создаст две кубоидные зоны с центром на боссе. ИИ босса отключится на 2 секунды. Кубоидные зоны настроены таким образом, что они образуют на земле символ плюса.

Затем скрипт будет создавать облачные частицы в течение 2 секунд в зонах, а затем он будет создавать дымовые частицы и применять эффект отравляющего зелья к зонам в течение 3 секунд.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Прыжки

Этот скрипт создает цилиндрическую зону радиусом 10 блоков с центром на боссе, а затем применяет эффекты частиц и отбрасывание к зоне в течение 10 секунд.

Действие отбрасывания подталкивает игроков немного вверх с каждым тиком, создавая иллюзию, что игроки отскакивают, пока они находятся в зоне.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Призыв

Этот скрипт создаст цилиндрическую зону (расположенную на 6 блоков выше игрока из-за примененного смещения) с центром вокруг игрока, который нанес урон боссу. Кроме того, он отобразит сообщение на экране этому игроку.

После задержки в 2 секунды в указанной зоне появятся подкрепления. Однако только часть зоны будет занята подкреплениями, поскольку мы использовали `coverage`. Если игроку не удастся уничтожить все подкрепления, они автоматически исчезнут через 20 секунд (400 тиков).

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
      subtitle: "Друзья! Помогите!!!"
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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Зоны зелий

Этот скрипт активируется, когда игрок наносит урон боссу. Затем он выполняет либо скрипт `PotionZoneBad`, либо `PotionZoneGood`.

В скрипте `PotionZoneBad` цилиндрическая зона генерируется вокруг ближайших игроков, находящихся в пределах 20 блоков от босса. Она создает эффекты частиц облака и большого дыма с указанным покрытием, наносит эффект зелья иссушения и отправляет сообщение ближайшим игрокам.

В скрипте `PotionZoneGood` цилиндрическая зона генерируется вокруг игроков, находящихся в пределах 20 блоков от босса. Эффекты частиц для этого скрипта инвертированы. Этот скрипт применяет эффект лечебного зелья вместо иссушения и отправляет сообщение ближайшим игрокам.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
      sValue: "&cКрутой босс!: &fПочувствуй жар!"
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
      sValue: "&cКрутой босс!: &fПочувствуй... Стоп, это не тот."
      Target:
        targetType: NEARBY_PLAYERS
        range: 20
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_potionzones.webm" type="video/webm">
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Слепые волны

Этот скрипт запускает две наземные лучевые волны, проецируемые как в положительном, так и в отрицательном направлении X, исходящие от босса.

Мы используем параметр `offset` для определения длины и размера лучей, в частности, определяя значение Z. Кроме того, мы указываем направление распространения волны, задавая значения X. (Это всего лишь объяснение того, как этот конкретный скрипт использует эти значения, вам не обязательно делать их точно такими же)

Хотя можно регулировать значения Y, чтобы увеличить высоту лучевых волн, мы оставляем ее на 0, чтобы дать игрокам возможность перепрыгивать через лучи.

Параметр `animationDuration` определяет время, за которое лучевые волны проходят путь от целей до конечных целей. Уменьшение этого значения сделает лучи быстрее и сложнее для уклонения.

Впоследствии применяются эффекты частиц и зелий. Игроки, не сумевшие избежать или перепрыгнуть через лучевые волны, будут ослеплены на 5 секунд (100 тиков).

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>

***

### Замораживающая стена

Этот скрипт создает 3 вращающихся луча с центром на боссе. Нам нужно 3 разных вращающихся луча, так как мы не можем определить высоту луча, поэтому мы используем несколько скриптов и `offset`, чтобы лучи складывались по высоте, чтобы они выглядели как одна единая вращающаяся *стена*.

Все 3 скрипта имеют идентичные зоны, за исключением того, что `offset` отличается. Они установлены на длину 6 блоков, начиная от босса, и установлены на поворот по рысканию на 360 градусов за 10 секунд (200 тиков).

Все скрипты имеют установленные эффекты частиц и будут применять действие `VISUAL_FREEZE` в течение 5 секунд (100 тиков) ко всем игрокам, которые *попадают* под действие лучевых стен.

<div align="center">

<details>

<summary><b>Развернуть пример</b></summary>

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
``````yml
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
  Ваш браузер не поддерживает тег video.
</video>

</div>

</div>

</details>

</div>
```
