# Зоны элитных скриптов

Зоны — это области, определяемые формой, которые могут использоваться сценаристами в качестве целей для выполнения любых действий.

Для каждого скрипта можно установить только одну зону.

Для нацеливания на зоны можно использовать тип цели `ZONE_FULL` или `ZONE_BORDER`.

Сами зоны также используют [Цели скрипта]($language$/elitemobs/elitescript_targets.md) для определения места появления зоны.

## форма

Задает форму зоны. Допустимые формы:

| Тип формы                                                               | Описание | Анимируемая | Граница |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Цилиндрическая форма | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Сферическая форма | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Форма купола (полусфера) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Форма кубоида (кубоподобная) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Фиксированная линия между двумя точками | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Вращающаяся линия между двумя точками | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Линия, перемещающаяся между двумя начальными точками и двумя конечными точками | ✅ | ❌ |

---

#### Анимируемая

Зоны с анимацией запускают анимацию зоны при первом вызове скрипта.

Это означает, что если у действия есть время ожидания, то к моменту начала действия зона уже будет двигаться, пока действие ожидало.

Зоны всегда анимируются на каждом тике. Это означает, что если вы используете действие `SPAWN_PARTICLES`, вы можете настроить его на выполнение на каждом тике, поскольку зона будет двигаться на каждом тике. Если вы запустите его каждую секунду, вы увидите, что частицы будут прыгать, поскольку зона продолжала двигаться даже на тиках, когда частицы не создавались.

Если вы хотите создать действие вращающейся зоны, но хотите подождать определенное количество тиков перед началом действия, сделайте это отдельным скриптом и вызовите этот скрипт через `RUN_SCRIPT`. Убедитесь, что `RUN_SCRIPT` имеет желаемое время ожидания.

После завершения анимации зоны останутся в конечном положении.

Все анимируемые зоны настроены на то, чтобы не отслеживать цели скрипта, поскольку дополнительное движение затруднило бы понимание для сценаристов и игроков. Это означает, что эти зоны не будут следовать за боссами или игроками и всегда будут перемещаться относительно своих начальных точек появления.

---

#### Граница

Некоторые зоны могут иметь границы. Границы означают, что `ZONE_BORDER` можно использовать в качестве цели зоны. Границы определяются путем создания второй, меньшей фигуры внутри первой, большей фигуры. Область между меньшей зоной и большей зоной является границей.

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт создает частицы дыма, которые появляются **только** на границе зоны в течение 5 секунд (повторять каждые 5 раз x 20 = 100 тиков).

Если бы вы не использовали опцию `ZONE_BORDER`, а вместо этого опцию `ZONE_FULL`, то вся зона была бы покрыта частицами дыма, как показано ниже:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение центра сферы | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `radius`                                                     | Радиус сферы | ✅ |
| `borderRadius`                                               | Радиус внутренней сферы | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт демонстрирует форму сферы с помощью частиц облака.

</div>

</details>

</div>

---

### DOME

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение центра купола | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `radius`                                                     | Радиус купола | ✅ |
| `borderRadius`                                               | Радиус внутреннего купола | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт демонстрирует форму купола с помощью частиц облака.

</div>

</details>

</div>

---

### CYLINDER

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение центра цилиндра | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `radius`                                                     | Радиус цилиндра | ✅ |
| `borderRadius`                                               | Радиус внутреннего цилиндра | ❌ |
| `height`                                                     | Высота цилиндра | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт демонстрирует форму цилиндра с помощью частиц облака.

</div>

</details>

</div>

---

### CUBOID

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение центра кубоида | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `x`                                                          | Задает длину кубоида | ✅ |
| `y`                                                          | Задает высоту кубоида | ✅ |
| `z`                                                          | Задает ширину кубоида, по умолчанию `x` | ❌ |
| `xBorder`                                                    | Задает длину внутреннего кубоида | ❌ |
| `yBorder`                                                    | Задает высоту внутреннего кубоида | ❌ |
| `zBorder`                                                    | Задает ширину внутреннего кубоида, по умолчанию `x` | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт демонстрирует форму кубоида с помощью частиц облака.

</div>

</details>

</div>

---

### STATIC_RAY

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение последней точки линии | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `ignoresSolidBlocks`                                         | Задает, будет ли луч проходить через твердые блоки | ❌ |
| `pointRadius`                                               | Задает толщину луча. По умолчанию 0.5 блока. | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт демонстрирует форму статического луча с помощью частиц облака.

Мы отрегулировали высоту зоны, используя опцию `offset` на обоих концах зоны, чтобы луч появлялся из середины игрока и босса, в противном случае луч появлялся бы у их ног.

</div>

</details>

</div>

---

### ROTATING_RAY

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение последней точки линии | ✅ |
| `animationDuration`                                         | Задает в тиках время вращения | ✅ |
| `pitchPreRotation`                                          | Применяет начальное вращение к тангажу перед анимацией | ❌ |
| `yawPreRotation`                                            | Применяет начальное вращение к рысканию перед анимацией | ❌ |
| `pitchRotation`                                             | Задает вращение тангажа для анимации | ❌ |
| `yawRotation`                                               | Задает вращение рыскания для анимации | ❌ |
| `ignoresSolidBlocks`                                         | Задает, будет ли луч проходить через твердые блоки | ❌ |
| `pointRadius`                                               | Задает толщину луча. По умолчанию 0.5 блока. | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт показывает, как выглядит вращающийся луч, с помощью частиц облака.

Сначала он создает луч от босса до игрока, который нанес ему урон, с помощью частиц облака. Затем он слегка корректирует позиции вверх на один блок, используя `offset`.

Далее, он вращает луч по кругу вокруг игрока, который был выбран целью. Это вращение длится 5 секунд (100 тиков), при этом целевой игрок является центром.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Ключ                                                          | Описание | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Задает форму зоны. Должна быть `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы сущностей становятся целью | ❌ |
| `animationDuration`                                          | Задает в тиках время перемещения | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Задает местоположение первой точки линии | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Задает местоположение точки назначения первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение второй точки линии | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Задает местоположение точки назначения второй точки линии | ✅ |
| `ignoresSolidBlocks`                                         | Задает, будет ли луч проходить через твердые блоки | ❌ |
| `pointRadius`                                               | Задает толщину луча. По умолчанию 0.5 блока. | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот скрипт показывает, как выглядит перемещающийся луч, с помощью частиц облака.

Сначала он создает луч от босса до игрока, который нанес ему урон, с помощью частиц облака.

Затем он анимирует луч, чтобы тот поднялся на 10 блоков от обеих целей, используя `offset` в `FinalTarget1` и `FinalTarget2`.

Анимация занимает 5 секунд (100 тиков).

Мы можем легко переместить луч вбок, скорректировав Z `offset` на что-то вроде `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Это поведение может меняться в зависимости от того, куда вы смотрите в игре.
<br>Если мы изменим X `offset` в скрипте, показанном на GIF-изображении, то луч, с нашей точки зрения, будет двигаться от нас по прямой линии.

</div>

</details>

---

## filter

Свойство filter можно использовать для выбора только определенных сущностей внутри зоны. Этими сущностями могут быть:

| Значение | Описание |
| --- | :-: |
| `PLAYER` | Нацеливает только на игроков в зоне (по умолчанию) |
| `ELITE` | Нацеливает только на элиту в зоне |
| `LIVING` | Нацеливает на все живые сущности в зоне |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Этот пример скрипта показывает, как использовать фильтр, чтобы зона нацеливалась только на элиту.

</div>
