```markdown
# Цели Elite Script

Цели являются центральной частью Elite Script и необходимы для работы Действий (Actions) и Зон (Zones).

## Типы целей

Типы целей определяют, какие сущности или локации будут выбраны скриптом в качестве цели.

| Тип цели                  |                                    Подробности                                     |                                                                                                   Особое                                                                                                   |
|------------------------------|:------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `NEARBY_PLAYERS`             | Игроки в [радиусе]($language$/elitemobs/elitescript_targets.md&section=range)  |                                                                Требует [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `NEARBY_MOBS`                |       Мобы в [радиусе]($language$/elitemobs/elitescript_targets.md&section=range)        |                                                                Требует [`range`]($language$/elitemobs/elitescript_targets.md&section=range)                                                                |
| `WORLD_PLAYERS`              |                                Игроки в мире                                |                                                                                                      ❌                                                                                                      |
| `ALL_PLAYERS`                |                             Игроки на сервере                              |                                                                                                      ❌                                                                                                      |
| `DIRECT_TARGET`              |                                Игроки в событии                                |                                                                   [Требует совместимого события]($language$/elitemobs/elitescript_events.md)                                                                   |
| `SELF`                       |                               Элита, использующая силу                                |                                                                                                      ❌                                                                                                      |
| `SELF_SPAWN`                 |                      Цель - место спавна босса                      |                                                                                                      ❌                                                                                                      |
| `LOCATION`                   |                               Конкретная локация                                |                                                             Требует [`location`]($language$/elitemobs/elitescript_targets.md&section=location)                                                             |
| `LOCATIONS`                  |                           Несколько конкретных локаций                           |                                                            Требует [`locations`]($language$/elitemobs/elitescript_targets.md&section=locations)                                                            |
| `ZONE_FULL`                  |                             Цели внутри зоны                             |                                                                        Требует [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ZONE_BORDER`                |                             Цели на границе зоны                             |                                                                        Требует [`Zone`]($language$/elitemobs/elitescript_zones.md)                                                                         |
| `ACTION_TARGET`              |                      Наследует цели от действия.                      |                 **Может использоваться только для [условий]($language$/elitemobs/elitescript_conditions.md) действия и [Относительных векторов]($language$/elitemobs/elitescript_relative_vectors.md)!!**                 |
| `LANDING_LOCATION`           |                     Цель - локация, куда упал блок.                      |                                        **Может использоваться только для действия [`SPAWN_FALLING_BLOCK`]($language$/elitemobs/elitescript_actions.md&section=spawn_falling_block)!**                                         |
| `INHERIT_SCRIPT_TARGET`      |           Наследует цель от скрипта, который запускает этот скрипт            |                                                                          Может работать только если скрипт был вызван другим скриптом!                                                                           |
| `INHERIT_SCRIPT_ZONE_FULL`   |     Цели внутри зоны, унаследованной от скрипта, который запускает этот скрипт     |                                                 Требует [`Zone`]($language$/elitemobs/elitescript_zones.md) **в скрипте, который вызывает этот скрипт!**                                                  |
| `INHERIT_SCRIPT_ZONE_BORDER` |     Цели на границе зоны, унаследованной от скрипта, который запускает этот скрипт     |                                                 Требует [`Zone`]($language$/elitemobs/elitescript_zones.md) **в скрипте, который вызывает этот скрипт!**                                                  |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Это отправляет сообщение цели. Поскольку цель установлена как `ALL_PLAYERS`, сообщение будет отправлено всем игрокам онлайн.

</div>

</details>

</div>

---

## Общие атрибуты

Следующие настройки могут быть применены ко всем целям.

| Значения | Подробности | Особое |
| --- | :-: | :-: |
| `offset` | Устанавливает смещение для локации цели. | Не может быть целью для сущностей! |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Это вызывает удар молнии на 2 блока выше босса. Обратите внимание, что STRIKE_LIGHTNING использует локации и не влияет на сущности, поэтому может иметь смещения.

Вы не можете установить смещение для отправки сообщения, так как сообщения отправляются игрокам. Однако вы можете установить смещение для зоны, которая затем может нацеливаться на сущности.

</div>

</details>

</div>

---

## range

Устанавливает радиус сканирования для ближайших игроков в типе цели `NEARBY_PLAYERS`.

| Значения | Подробности | По умолчанию |
| --- | :-: | :-: |
| `range` | Устанавливает радиус в блоках для сканирования целей-игроков. | `20.0` |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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
        sValue: "&2Targeted players within 25 blocks!"
```

Это отправляет сообщение игрокам в радиусе 25 блоков от босса, когда босс умирает.

</div>

</details>

</div>

## location

Устанавливает локацию для типа цели `LOCATION`.

| Значения | Подробности | По умолчанию |
| --- | :-: | :-: |
| `location` | Устанавливает мировую локацию, которая будет целью. | `none` |

Используется формат `location: worldname,x,y,z,pitch,yaw` для локации.

**Обратите внимание, что `same_as_boss` является допустимым плейсхолдером для имени мира, например, `same_as_boss,100,64,100,0,0` будет допустимой локацией, которая будет нацелена на тот же мир, где находится босс.**

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Это вызывает удар молнии в локации x=100, y=64, z=200 в мире под названием `myWorld`.

</div>

</details>

</div>

---

## locations

Устанавливает локации для типа цели `LOCATIONS`.

| Значения | Подробности | По умолчанию |
| --- | :-: | :-: |
| `locations` | Устанавливает список мировых локаций, которые будут целями. | `none` |

Используется формат `worldname,x,y,z,pitch,yaw` для локации.

**Обратите внимание, что `same_as_boss` является допустимым плейсхолдером для имени мира, например, `same_as_boss,100,64,100,0,0` будет допустимой локацией, которая будет нацелена на тот же мир, где находится босс.**

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Это вызывает удар молнии в локации x=100, y=64, z=200 в мире под названием `myWorld` и еще один удар молнии в том же мире, что и босс, в локации x=-100, y=12 и z=130.

</div>

</details>

</div>

---

## Нацеливание на зоны

[Зоны]($language$/elitemobs/elitescript_zones.md) имеют несколько целей, и важно понимать, как они работают, чтобы использовать Elite Scripting в полной мере.

Зоны работают в двух частях:

### Часть 1 - Установка местоположения зоны

Зоны должны знать, где они должны находиться, и для этого вы используете систему целей так же, как для любого другого эффекта, основанного на локации, например, удара молнии.

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Это создает цилиндрическую зону вокруг босса. Обратите внимание, что в этом примере еще не заданы действия, это будет рассмотрено ниже.

Некоторые зоны, такие как [STATIC_RAY]($language$/elitemobs/elitescript_zones.md&section=static_ray), имеют две или более цели. Это потому, что лучи - это линии, а линии определяются двумя точками. Это более подробно рассмотрено на [странице зон]($language$/elitemobs/elitescript_zones.md), но в основе они все работают одинаково.

</div>

</details>

</div>

### Часть 2 - Нацеливание на внутреннюю часть зоны

Теперь, когда зона знает свое местоположение, нам нужно, чтобы действие знало, что его целью является зона, которую мы определили. Для этого используются `targetType: ZONE_FULL` и `targetType:ZONE_BORDER`.

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Используя ту же зону из первой части, мы теперь добавляем действие. Целью для этого действия является `ZONE_FULL`, что означает, что частицы будут появляться внутри всей зоны.

Обратите внимание, что ZONE_BORDER доступен не для каждой зоны. Подробнее об этом на [странице зон скриптов]($language$/elitemobs/elitescript_zones.md).

</div>

</details>

</div>

### Отслеживание зоны

Устанавливает, будет ли зона перемещаться вместе с целью, например, будет ли зона перемещаться, когда босс движется, для `targetType: SELF`.

| Значения | Подробности | По умолчанию |
| --- | :-: | :-: |
| `track` | Устанавливает, будет ли зона перемещаться вместе с целью. | `true` |

Обратите внимание, что анимируемые зоны не могут отслеживать. [Подробнее об этом здесь.]($language$/elitemobs/elitescript_zones.md&section=animatable)

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Используя тот же пример из части 1 и части 2, зона теперь настроена на неотслеживание. Это означает, что зона появится в локации босса, но даже если босс продолжит двигаться, зона останется там, где она появилась изначально.

Наконец, обратите внимание, что если зона настроена на неотслеживание, она зафиксирует свое местоположение в момент вызова скрипта.

Например, если вы хотите иметь фазу предупреждения и фазу урона для вашего скрипта, вам нужно убедиться, что вы запускаете все действия в начале и устанавливаете время ожидания для всех действий, связанных с уроном, которые вы хотите запустить позже индивидуально. Вы не должны задерживать весь скрипт, который вы вызываете через `RUN_SCRIPT`, по техническим причинам.

Ниже приведен правильный пример силы с фазой предупреждения и фазой урона, взятый из Frost Palace Sanctum.

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

Этот скрипт делает много вещей, но он разделен на два четких скрипта: `VisualCylinder` и `DamageCylinder`.

`VisualCylinder` запускается первым и содержит действие `RUN_SCRIPT`, которое немедленно запускает `DamageCylinder` одновременно с выполнением `VisualCylinder`.

Однако каждое действие в `DamageCylinder` настроено на ожидание 60 тиков, или 3 секунд.

Это означает, что у босса есть фаза предупреждения длительностью 3 секунды, а затем фаза урона, и даже несмотря на то, что зоны настроены на неотслеживание, зона предупреждения и зона урона будут находиться в одном и том же месте.

### Свойства цели, специфичные для зоны

Зоны имеют следующие специфические свойства:

#### coverage

Устанавливает процент зоны, который фактически будет использоваться для действия. Работает только для целей-локаций (не будет работать при нацеливании на игроков или другие сущности).

| Значения | Подробности | По умолчанию |
| --- | :-: | :-: |
| `coverage` | Устанавливает процент зоны, который будет покрыт. Вы можете рандомизировать это значение, используя `~`, например: `1.0~0.3`. | `1.0` |

<div align="center">

<details>

<summary><b>Пример</b></summary>

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

В этом случае только 50% зоны будет покрыто частицами.

</div>

</details>

</div>

### Наследование целей

Когда один скрипт запускает другой скрипт (или "вызывает" его), можно передать информацию о зоне и цели из первого скрипта во второй.

**Примеры использования**

1. **Улучшенные запускатели скриптов**

Запускатели скриптов - это скрипты, единственная функция которых - запускать множество других скриптов. Они используются для упрощения управления скриптами, особенно при работе с несколькими скриптами, требующими точного времени.

С наследованием целей несколько скриптов могут использовать одну и ту же зону или цель, сокращая потенциально сотни строк повторяющегося скриптинга.

2. **Фильтрация целей по принципу матрешки / Фильтрация целей по принципу русской вложенной куклы**

Условия фильтрации могут быть применены к целям в действии. Передавая цели в другой скрипт с другими фильтрами, становится возможным накладывать условия и применять различные эффекты к одному и тому же пулу целей на основе все более специфических критериев.

Например, можно создать зону, которая ищет игроков, и создать действие, которое проверяет, имеют ли все игроки в зоне определенный тег. Допустимые цели затем могут быть переданы другому скрипту, где другое действие может выполнить случайную проверку условия и применить эффект на основе этого шанса. Цели затем могут быть далее переданы другому скрипту, где другое условие может выполнить проверку, чтобы увидеть, живы ли цели, и выполнить какое-то особое поведение, если они мертвы.
```Please specify the language you would like me to translate the text into.

Once you provide the language, I will translate the text, making sure to retain the markdown formatting (like bolding, lists, headings, and the link).