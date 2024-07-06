[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Зоны в Elite Script

Зоны - это местоположения, определяемые формой, которые могут использоваться scripters  в качестве целей для запуска любого типа действия.

В каждом скрипте может быть задана только одна зона.

Для выбора зон в качестве цели можно использовать тип цели `ZONE_FULL` или `ZONE_BORDER`.

Сами зоны также используют [Цели скриптов]($language$/elitemobs/elitescript_targets.md) для определения того, где будет находиться зона.

## shape

Форма зоны. Допустимые формы:

| Тип Формы                                                               | Детали | Animatable | Border |
|--------------------------------------------------------------------------| :-: | :-: | :-: |
| [`CYLINDER`]($language$/elitemobs/elitescript_zones.md&section=cylinder)         | Цилиндрическая форма | ❌ | ✅ |
| [`SPHERE`]($language$/elitemobs/elitescript_zones.md&section=sphere)             | Сферическая форма | ❌ | ✅ |
| [`DOME`]($language$/elitemobs/elitescript_zones.md&section=dome)                 | Форма купола (полусфера) | ❌ | ✅ |
| [`CUBOID`]($language$/elitemobs/elitescript_zones.md&section=cuboid)             | Кубоидная форма (кубообразная) | ❌ | ✅ |
| [`STATIC_RAY`]($language$/elitemobs/elitescript_zones.md&section=static_ray)     | Неподвижная линия между двумя точками | ❌ | ❌ |
| [`ROTATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=rotating_ray) | Вращающаяся линия между двумя точками | ✅ | ❌ |
| [`TRANSLATING_RAY`]($language$/elitemobs/elitescript_zones.md&section=translating_ray) | Линия, которая перемещается между двумя начальными точками к двум конечным точкам | ✅ | ❌ |

---

#### Animatable

Анимация зоны с анимацией начинается, когда скрипт вызывается в первый раз.

Это означает, что если у действия есть время ожидания, когда действие начнётся, зона уже будет двигаться, пока действие ожидает.

Зона всегда анимируется на каждом такте. Это означает, что если вы используете действие `SPAWN_PARTICLES`, вы можете задать его выполнение на каждом такте, так как зона будет двигаться на каждом такте. Если вы запустите его каждую секунду, вы увидите, как частицы прыгают, потому что зона продолжала двигаться даже на тех тиках, когда частицы не генерировались.

Если вы хотите сделать вращающуюся зону, но хотите подождать определенное количество тактов, прежде чем начать действие, сделайте его отдельным скриптом и вызовите этот скрипт через `RUN_SCRIPT`.  Убедитесь, что у  `RUN_SCRIPT`  есть необходимое вам время ожидания.

Зона останется в конечном положении после завершения анимации.

Все animatable зоны установлены так, чтобы они не отслеживались в целях скриптов, так как дополнительное движение затруднило бы понимание scripters  и игроков. Это означает, что эти зоны не будут следовать за боссами или игроками и всегда будут двигаться относительно своих начальных точек появления.

---

#### Border

Определенные зоны могут иметь границы. Границы означают, что `ZONE_BORDER`  можно использовать как цель зоны. Границы определяются созданием второй, более маленькой, формы внутри первой, более большой формы.  Область между более маленькой зоной и более большой зоной - это граница.

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

Этот скрипт создает дымовые частицы, которые  **только**  появляются на границе зоны в течение 5 секунд (repeat every 5 x times 20 = 100 ticks).

Если бы вы не использовали опцию `ZONE_BORDER`, а вместо этого  опцию  `ZONE_FULL`, то вся зона была бы покрыта дымовыми частицами, как в этом случае:

<div align="center">

![elitescript_zones_borderfull.jpg](../../../img/wiki/elitescript_zones_borderfull.jpg)

</div>

</div>

</details>

</div>

---

### SPHERE

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `SPHERE` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для центра сферы | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы существ будут являться целью | ❌ |
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

Этот скрипт демонстрирует форму сферы с помощью частиц облака.

</div>

</details>

</div>

---

### DOME

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `DOME` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для центра купола | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы существ будут являться целью | ❌ |
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

Этот скрипт демонстрирует форму купола с помощью частиц облака.

</div>

</details>

</div>

---

### CYLINDER

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `CYLINDER` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для центра цилиндра | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы существ будут являться целью | ❌ |
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

Этот скрипт демонстрирует форму цилиндра с помощью частиц облака.

</div>

</details>

</div>

---

### CUBOID

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `CUBOID` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для центра кубоида | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы существ будут являться целью | ❌ |
| `x`                                                         | Задает длину кубоида | ✅ |
| `y`                                                         | Задает высоту кубоида | ✅ |
| `z`                                                         | Задает ширину кубоида, по умолчанию `x` | ❌ |
| `xBorder`                                                   | Задает длину внутреннего кубоида | ❌ |
| `yBorder`                                                   | Задает высоту внутреннего кубоида | ❌ |
| `zBorder`                                                   | Задает ширину внутреннего кубоида, по умолчанию `x` | ❌ |

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

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `STATIC_RAY` | ✅ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Задает местоположение для последней точки линии | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter) | Задает, какие типы существ будут являться целью | ❌ |
| `ignoresSolidBlocks`                                        | Определяет, будет ли луч проходить через твердые блоки | ❌ |
| `pointRadius`                                               | Задает толщину луча. По умолчанию 0.5 блоков. | ❌ |

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

Мы скорректировали высоту зоны, используя опцию `offset` на обоих концах зоны, чтобы луч появлялся из середины игрока и босса, иначе луч появлялся бы у их ног.

</div>

</details>

</div>

---

### ROTATING_RAY

| Ключ                                                         | Детали | Obrigatório |
|-------------------------------------------------------------| :-: | :-: |
| `shape`                                                     | Задает форму зоны. Должно быть `ROTATING_RAY` | ✅ |
| [`filter`]($language$/elitemobs/elitescript_zones.md&section=filter)  | Задает, какие типы существ будут являться целью | ❌ |
| [`target`]($language$/elitemobs/elitescript_targets.md)     | Задает местоположение для первой точки линии | ✅ |
| [`target2`]($language$/elitemobs/elitescript_targets.md)    | Задает местоположение для последней точки линии | ✅ |
| `animationDuration`                                         | Задает (в тиках) количество времени для вращения | ✅ |
| `pitchPreRotation`                                          | Применяет начальную 

