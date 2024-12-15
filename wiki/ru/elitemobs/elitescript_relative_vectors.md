# Относительные векторы в Elite Script

## Для чего они нужны

Относительные векторы - это векторы, которые относятся к определенному, но динамическому местоположению.

Чтобы лучше объяснить, что это такое, рассмотрим следующий случай: вы хотите толкнуть игрока к боссу в рамках какой-либо способности. Поскольку и босс, и игрок перемещаются во время боя, невозможно полагаться на определенный вектор для достижения этого эффекта - вам понадобится вектор, идущий от игрока к боссу. (Представьте себе короткую линию со стрелкой, идущей от игрока к боссу.)

Относительные векторы можно использовать множеством способов, что невозможно перечислить все, но среди них: выстрелы сущностями (например, снарядами) в конкретного игрока или моба; появление подкреплений позади игрока; выстрел падающим блоком в определенном направлении; создание лучей, которые направляются к игроку, и многое другое.

## Как работают векторы?

Если вы не знаете или не помните, что такое векторы и как они работают, можете думать о них как о стрелках, которые указывают от одной точки к другой.

Таким образом, одним из свойств векторов является их длина. Эта длина важна; в случае стрел эта длина является скоростью, с которой стрела выстреливается, в случае попытки получить смещенные точки от определенного местоположения это расстояние от этой точки. Вещи, расположенные дальше, будут иметь большую длину вектора, а более близкие - меньшую длину.

Для некоторых механик вам, вероятно, не захочется полагаться на то, насколько далеко друг от друга находятся две точки, так как вы просто хотите получить направление. К счастью, вы можете использовать нормализацию вектора, которая гарантирует, что направление сохраняется, но изменяет длину на 1.0. Затем вы можете использовать множители для легкого изменения вектора, пока не будете удовлетворены смещением, которое он дает, или скоростью, которую он дает.

## Свойства

| Значение |                                                            Детали                                                            | Обязательно? | Значение по умолчанию |
| -------- | :------------------------------------------------------------------------------------------------------------------------: | :----------: | :--------------------: |
| `SourceTarget` |      [Цель]($language$/elitemobs/elitescript_targets.md) в точке, из которой будет начинаться вектор       |      ✅      |     `none`     |
| `DestinationTarget` |          [Цель]($language$/elitemobs/elitescript_targets.md) в конечной точке вектора          |      ✅      |     `none`     |
| `normalize` |                                       Устанавливает, следует ли нормализовать вектор                                        |      ❌      |     `false`    |
| `multiplier` |                                             Умножает длину вектора                                              |      ❌      |     `1.0`     |
| `offset` |                                Позволяет вставить ручное фиксированное смещение в это смещение                                 |      ❌      |     `none`     |

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

Стреляет курицей

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

Стреляет стрелой

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

Создает зомби в 2 блоках позади игрока относительно босса.

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

Создает анимированную сферу пламени, которая сжимается до места появления.

</div>

</details>

</div>

### Порядок операций

Порядок операций при применении свойств следующий:

Вычисление вектора -> `normalize` -> `multiplier` -> `offset`
