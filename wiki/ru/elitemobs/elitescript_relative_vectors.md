# Относительные векторы в Elite Script

## Для чего они нужны

Относительные векторы - это векторы, которые являются относительными к определенному, но динамическому местоположению.

Чтобы лучше объяснить, что это такое, давайте рассмотрим следующий случай: вы хотите толкнуть игрока к боссу в рамках
какой-либо способности. Поскольку и босс, и игрок перемещаются во время боя, невозможно полагаться на определенный
вектор для достижения этого эффекта - вам понадобится вектор, идущий от игрока к боссу. (Представьте себе короткую линию
со стрелкой, идущей от игрока к боссу.)

Относительные векторы можно использовать множеством способов, и перечислить их все невозможно, но среди них: стрельба
сущностями (например, снарядами) в определенного игрока или моба; появление подкреплений за игроком; выстрел падающим
блоком в определенном направлении; создание лучей, которые направлены на игрока, и многое другое.

## Как работают векторы?

Если вы не знаете или не помните, что такое векторы и как они работают, вы можете думать о векторах как о стрелках,
которые указывают от одной точки к другой.

Таким образом, одним из свойств векторов является их длина. Эта длина важна; в случае стрелок эта длина является
скоростью, с которой стрела выстреливается, в случае попытки получить смещенные точки от определенного местоположения
это расстояние от этой точки. Объекты, находящиеся дальше, будут иметь большую длину вектора, а более близкие - меньшую
длину.

Для некоторых механик вам, вероятно, не захочется полагаться на то, насколько далеко друг от друга находятся две точки,
поскольку вы просто хотите получить направление. К счастью, вы можете использовать нормализацию вектора, которая
гарантирует, что направление сохраняется, но изменяет длину на 1.0. Затем вы можете использовать множители, чтобы легко
изменять вектор, пока не будете удовлетворены смещением, которое он обеспечивает, или скоростью, которую он дает.

## Свойства

| Значение            |                                             Детали                                             | Обязательно? | Значение по умолчанию |
|---------------------|:----------------------------------------------------------------------------------------------:|:------------:|:---------------------:|
| `SourceTarget`      | [Цель]($language$/elitemobs/elitescript_targets.md) в точке, с которой будет начинаться вектор |      ✅       |        `none`         |
| `DestinationTarget` |          [Цель]($language$/elitemobs/elitescript_targets.md) в конечной точке вектора          |      ✅       |        `none`         |
| `normalize`         |                         Устанавливает, следует ли нормализовать вектор                         |      ❌       |        `false`        |
| `multiplier`        |                                     Умножает длину вектора                                     |      ❌       |         `1.0`         |
| `offset`            |               Позволяет вставить ручное фиксированное смещение к этому смещению                |      ❌       |        `none`         |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

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

Выстреливает курицей

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

Выстреливает стрелой

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

Появляется зомби в 2 блоках позади игрока, относительно босса.

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

Создает анимированную огненную сферу, которая сжимается до места появления.

</div>

</details>

</div>

### Порядок операций

Порядок операций при применении свойств следующий:

Вычисление вектора -> `normalize` -> `multiplier` -> `offset`
