```markdown
# Относительные векторы Elite Script

## Для чего они нужны

Относительные векторы — это векторы, которые являются относительными к определенному, но динамическому местоположению.

Чтобы лучше объяснить, что это такое, рассмотрим следующий случай: вы хотите оттолкнуть игрока в сторону босса как часть способности. Поскольку и босс, и игрок перемещаются во время боя, невозможно полагаться на определенный вектор для достижения этого эффекта — вам понадобится вектор, который идет от игрока к боссу. (Представьте короткую линию со стрелкой, идущей от игрока к боссу.)

Относительные векторы могут использоваться столькими способами, что перечислить их все было бы невозможно, но среди них: стрельба сущностями (например, снарядами) в сторону определенного игрока или моба; появление подкреплений позади игрока; стрельба падающим блоком в определенном направлении; создание лучей, направленных в сторону игрока, и многое другое.

## Как работают векторы?

Если вы не знаете или не помните, что такое векторы или как они работают, вы можете представить векторы как стрелки, которые указывают из одной точки в другую.

Таким образом, одним из свойств векторов является их длина. Эта длина важна; в случае стрел эта длина — скорость, с которой стрела выстреливается, в случае попытки получить смещенные точки от определенного местоположения это расстояние от этой точки. Более удаленные объекты будут иметь большую длину вектора, а более близкие — меньшую.

Для некоторых механик вам, вероятно, не захочется полагаться на то, насколько далеко находятся две точки, поскольку вам просто нужно получить направление. К счастью, вы можете использовать нормализацию вектора, которая гарантирует сохранение направления, но изменяет длину до 1.0. Затем вы можете использовать множители, чтобы легко изменять вектор, пока не будете удовлетворены смещением, которое он предоставляет, или скоростью, которую он дает.

## Свойства

| Value | Details | Mandatory? | Default value |
| --- |:--------------------------------------------------------------------------------------------------------:| :-: | :-: |
| `SourceTarget` | [Цель]($language$/elitemobs/elitescript_targets.md) в точке, из которой будет начинаться вектор | ✅ | `none` |
| `DestinationTarget` | [Цель]($language$/elitemobs/elitescript_targets.md) в конечной точке вектора | ✅ | `none` |
| `normalize` | Определяет, должен ли вектор быть нормализован | ❌ | `false` |
| `multiplier` | Умножает длину вектора. Вы можете рандомизировать это значение, используя `~`. Пример: `1.0~2.5`. | ❌ | `1.0` |
| `offset` | Позволяет вставить ручное фиксированное смещение к этому смещению. Вы можете рандомизировать это значение, используя `~`. Пример: `0~5,0~2,0~10`. | ❌ | `none` |

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

Создает анимированную огненную сферу, которая сжимается к месту появления.

</div>

</details>

</div>

### Порядок операций

Порядок операций при применении свойств следующий:

Расчет вектора -> `normalize` -> `multiplier` -> `offset`
```