Конечно, вот перевод на русский язык с сохранением форматирования markdown:

# Зоны скриптов Elite

Зоны — это области, определенные формой, которые могут использоваться скриптерами в качестве целей для выполнения любых действий.

На один скрипт может быть установлена только одна зона.

Для нацеливания на зоны можно использовать типы целей `ZONE_FULL` или `ZONE_BORDER`.

Сами зоны также используют [Цели скриптов]($language$/elitemobs/elitescript_targets.md) для определения места появления зоны.

## shape

Устанавливает форму зоны. Допустимые формы:

| Тип формы                                                               | Подробности | Анимируемая | Граница |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Цилиндрическая форма | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Сферическая форма | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Форма купола (полусфера) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Форма кубоида (похожая на куб) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Фиксированная линия между двумя точками | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Вращающаяся линия между двумя точками | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Линия, которая перемещается между двумя начальными точками к двум конечным точкам | ✅ | ❌ |

---

#### Анимируемая

Зоны с анимацией начинают анимацию зоны при первом вызове скрипта.

Это означает, что если у действия есть время ожидания, то к моменту начала действия зона уже перемещалась, пока действие ожидало.

Зоны всегда анимируются каждый тик. Это означает, что если вы используете действие `SPAWN_PARTICLES`, вы можете настроить его на выполнение каждый тик, так как зона будет перемещаться каждый тик. Если вы будете выполнять его каждую секунду, вы увидите, как частицы "прыгают", поскольку зона продолжала двигаться даже в те тики, когда частицы не появлялись.

Если вы хотите создать действие с вращающейся зоной, но хотите подождать определенное количество тиков перед началом действия, создайте для этого отдельный скрипт и вызовите его через `RUN_SCRIPT`. Убедитесь, что у `RUN_SCRIPT` установлено нужное вам время ожидания.

Зоны останутся в конечном местоположении после завершения анимации.

Все анимируемые зоны настроены на неотслеживание целей скрипта, поскольку дополнительное движение сделало бы вещи слишком сложными для понимания как для скриптеров, так и для игроков. Это означает, что эти зоны не будут следовать за боссами или игроками и всегда будут двигаться относительно своих начальных точек появления.

---

#### Граница

Некоторые зоны могут иметь границы. Границы означают, что `ZONE_BORDER` может использоваться в качестве цели зоны. Границы определяются путем создания второй, меньшей формы внутри первой, большей формы. Область между меньшей зоной и большей зоной является границей.

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

Этот скрипт создает частицы дыма, которые появляются **только** в границе зоны в течение 5 секунд (повторять каждые 5 тиков x 20 раз = 100 тиков).

Если бы вы не использовали опцию `ZONE_BORDER`, а использовали `ZONE_FULL`, то вся зона была бы покрыта частицами дыма вот так:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение центра сферы | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `radius`                                                    | Радиус сферы | ✅ |
| `borderRadius`                                              | Радиус внутренней сферы | ❌ |

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

Этот скрипт демонстрирует форму сферы с использованием частиц облака.

</div>

</details>

</div>

---

### DOME

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение центра купола | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `radius`                                                    | Радиус купола | ✅ |
| `borderRadius`                                              | Радиус внутреннего купола | ❌ |

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

Этот скрипт демонстрирует форму купола с использованием частиц облака.

</div>

</details>

</div>

---

### CYLINDER

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение центра цилиндра | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `radius`                                                    | Радиус цилиндра | ✅ |
| `borderRadius`                                              | Радиус внутреннего цилиндра | ❌ |
| `height`                                                    | Высота цилиндра | ❌ |

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

Этот скрипт демонстрирует форму цилиндра с использованием частиц облака.

</div>

</details>

</div>

---

### CUBOID

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение центра кубоида | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `x`                                                         | Устанавливает длину кубоида | ✅ |
| `y`                                                         | Устанавливает высоту кубоида | ✅ |
| `z`                                                         | Устанавливает ширину кубоида, по умолчанию равно `x` | ❌ |
| `xBorder`                                                   | Устанавливает длину внутреннего кубоида | ❌ |
| `yBorder`                                                   | Устанавливает высоту внутреннего кубоида | ❌ |
| `zBorder`                                                   | Устанавливает ширину внутреннего кубоида, по умолчанию равно `x` | ❌ |

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

Этот скрипт демонстрирует форму кубоида с использованием частиц облака.

</div>

</details>

</div>

---

### STATIC_RAY

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Устанавливает местоположение последней точки линии | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `ignoresSolidBlocks`                                        | Устанавливает, будет ли луч проходить сквозь твердые блоки | ❌ |
| `pointRadius`                                               | Устанавливает толщину луча. По умолчанию 0.5 блока. | ❌ |

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

Этот скрипт демонстрирует форму статического луча с использованием частиц облака.

Мы скорректировали высоту зоны, используя опцию `offset` на обоих концах зоны, чтобы луч появлялся из середины игрока и босса, иначе луч появлялся бы у их ног.

</div>

</details>

</div>

---

### ROTATING_RAY

| Ключ                                                        | Подробности | Обязательный |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Устанавливает форму зоны. Должно быть `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Устанавливает, какие типы сущностей становятся целями | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Устанавливает местоположение последней точки линии | ✅ |
| `animationDuration`                                         | Устанавливает, в тиках, время вращения | ✅ |
| `pitchPreRotation`                                          | Применяет начальное вращение по тангажу перед анимацией | ❌ |
| `yawPreRotation`                                            | Применяет начальное вращение по рысканию перед анимацией | ❌ |
| `pitchRotation`                                             | Устанавливает вращение по тангажу для анимации | ❌ |
| `yawRotation`                                               | Устанавливает вращение по рысканию для анимации | ❌ |
| `ignoresSolidBlocks`                                        | Устанавливает, будет ли луч проходить сквозь твердые блоки | ❌ |
| `pointRadius`                                               | Устанавливает толщину луча. По умолчанию 0.5 блока. | ❌ |

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

Этот скрипт показывает, как выглядит вращающийся луч с использованием частиц облака.

Сначала он создает луч от босса к игроку, который нанес ему урон, используя частицы облака. Затем он немного смещает позиции вверх на один блок с помощью `offset`.

Далее он вращает луч по полному кругу вокруг игрока, который был целью. Это вращение занимает 5 секунд (100 тиков), при этом целевой игрок является центром.

</div>

</details>

</div>

---

### TRANSLATING_RAY

| Ключ                                                         | Подробности | Обязательный |
|--------------------------------------------------------------| :-: | :-: |
| `shape`                                                      | Устанавливает форму зоны. Должно быть `TRANSLATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Устанавливает, какие типы сущностей становятся целями | ❌ |
| `animationDuration`                                          | Устанавливает, в тиках, время перемещения | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)      | Устанавливает местоположение первой точки линии | ✅ |
| [`finalTarget`]($language$/elitemobs/elitescript_targets.md) | Устанавливает местоположение назначения для первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)     | Устанавливает местоположение второй точки линии | ✅ |
| [`finalTarget2`]($language$/elitemobs/elitescript_targets.md) | Устанавливает местоположение назначения для второй точки линии | ✅ |
| `ignoresSolidBlocks`                                         | Устанавливает, будет ли луч проходить сквозь твердые блоки | ❌ |
| `pointRadius`                                                | Устанавливает толщину луча. По умолчанию 0.5 блока. | ❌ |

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

Этот скрипт показывает, как выглядит перемещающийся луч с использованием частиц облака.

Сначала он создает луч от босса к игроку, который нанес ему урон, используя частицы облака.

Затем он анимирует луч, чтобы он перемещался вверх на 10 блоков от обеих целей, используя `offset` на `FinalTarget1` и `FinalTarget2`.

Анимация занимает 5 секунд (100 тиков).

Мы можем легко заставить луч двигаться вбок, изменив Z `offset` на что-то вроде `offset: 0,0,10`:

<div align="center">

![elitescript_zones_translatingray2.gif](../../../img/wiki/elitescript_zones_translatingray2.gif)

</div>

Это поведение может меняться в зависимости от того, куда вы смотрите в игре.
<br>Если мы изменим X `offset` в скрипте, показанном на GIF-изображении, луч будет казаться движущимся от нас по прямой линии с нашей точки зрения.

</div>

</details>

---

## filter

Свойство filter может использоваться для нацеливания только на определенные сущности внутри зоны. Этими сущностями могут быть:

| Значение | Подробности |
| --- | :-: |
| `PLAYER` | Нацеливается только на игроков в зоне (по умолчанию) |
| `ELITE` | Нацеливается только на элитов в зоне |
| `LIVING` | Нацеливается на все живые сущности в зоне |

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

Этот пример скрипта показывает, как использовать фильтр, чтобы зона нацеливалась только на элитов.

</div>