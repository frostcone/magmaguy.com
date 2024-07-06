# Относительные векторы в Elite Script

## Для чего они нужны

Относительные векторы - это векторы, которые относятся к определенному, но динамическому местоположению.

Чтобы лучше объяснить, что это такое, рассмотрим следующий случай: вы хотите оттолкнуть игрока в сторону босса как часть способности. Поскольку как босс, так и игрок движутся во время боя, нельзя полагаться на конкретный вектор для достижения этого эффекта - вам понадобится вектор, который идет от игрока к боссу. (Представьте себе короткую линию со стрелкой, идущей от игрока к боссу.)

Относительные векторы можно использовать множеством способов, которые невозможно перечислить, но среди них: выстрел сущностями (например, снарядами) в сторону конкретного игрока или моба; появление подкреплений за игроком; выстрел падающим блоком в определенном направлении; создание лучей, которые стреляют в сторону игрока, и многое другое.

## Как работают векторы?

Если вы не знаете или не помните, что такое векторы и как они работают, можете представить векторы как стрелки, которые указывают из одной точки в другую.

Соответственно, одна из характеристик векторов - их длина. Эта длина важна: в случае стрел эта длина - это скорость, с которой стрела выпускается; в случае, если вы пытаетесь получить смещенные точки от определенного местоположения, это расстояние от этой точки.  Предметы, находящиеся дальше, будут иметь больший вектор, а предметы, находящиеся ближе, будут иметь меньший вектор.

Для некоторых механик вам, вероятно, не захочется полагаться на то, как далеко друг от друга находятся две точки, так как вам просто нужна будет направление. К счастью, вы можете использовать нормализацию вектора, которая гарантирует, что направление сохраняется, но изменяет длину на 1.0. Затем вы можете использовать множители для легкой модификации вектора, пока не будете довольны смещением, которое он обеспечивает, или скоростью, которую он дает.

## Свойства

| Значение |                                                 Детали                                                  | Obrigatório? | Значение по умолчанию |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Цель]($language$/elitemobs/elitescript_targets.md) в точке, из которой будет начинаться вектор | ✅ | `none` |
| `DestinationTarget` |          [Цель]($language$/elitemobs/elitescript_targets.md) в конечной точке для вектора           | ✅ | `none` |
| `normalize` |                                 Устанавливает, нужно ли нормализовать вектор                                  | ❌ | `false` |
| `multiplier` |                                      Умножает длину вектора                                      | ❌ | `1.0` |
| `offset` |                          Позволяет вставить ручной фиксированный сдвиг к этому смещению                           | ❌ | `none` |

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

Создает зомби на 2 блока позади игрока, относительно босса.

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

Создает анимированную сферу из пламени, которая сжимается к точке появления.

</div>

</details>

</div>

### Порядок действий

Порядок действий при применении свойств следующий:

Вычисление вектора -> `normalize` -> `multiplier` -> `offset`

