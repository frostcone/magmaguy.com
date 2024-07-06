![elitescript_actions_commandplayer.jpg](../../../img/wiki/elitescript_actions_commandplayer.jpg)

</div>

Заставляет игрока выполнить команду say с Hello $bossName my name is $playerName., что означает, что он просто скажет "Hello $bossName my name is $playerName."

</div>

</details>

</div>

---

### RUN_SCRIPT

Просто запускает скрипты, определенные в `scripts`. Любое действие может сделать это, это действие существует только как удобное действие, когда вы просто хотите это сделать.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `scripts` |                    Скрипты, которые будут запущены                   | ✅ |
| `onlyRunOneScript` |         Запустить только один скрипт из списка.           | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_SCRIPT
      onlyRunOneScript: false
      scripts:
      - Пример1
      - Пример2
  Пример1:
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
  Пример2:
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&cКрутой босс!: &fЯ вернул тебе!"
```

<div align="center">

![elitescript_actions_runscript.jpg](../../../img/wiki/elitescript_actions_runscript.jpg)

</div>

Когда элита получает урон, запускает RUN_SCRIPT, который запускает скрипты Пример1 и Пример2.

Скрипт Пример1 нанесет урон всем игрокам в пределах 10 блоков от босса.
<br>Скрипт Пример2 отправит сообщение всем игрокам в пределах 10 блоков от босса с сообщением "&cКрутой босс!: &fЯ вернул тебе!".

</div>

</details>

</div>

---

### SET_MOB_AI

Устанавливает, есть ли у моба ИИ. В Minecraft мобы без ИИ не будут двигаться и атаковать. Они все еще могут получить урон, но нанесение им урона не приведет к их отбрасыванию.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                 Устанавливает, есть ли у босса ИИ                  | ✅ |
| `duration` |               Устанавливает значение (в тиках)               | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AI
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Устанавливает для босса отсутствие ИИ на 2 секунды (40 тиков).

</div>

</details>

</div>

---

### SET_MOB_AWARE

Устанавливает, знает ли моб о своем окружении. В Minecraft мобы, которые не знают о своем окружении, не будут перемещаться в новые места и не будут атаковать. Они все еще могут получить урон и будут отброшены.

Обратите внимание, что если моб уже двигался к месту, когда он потерял осознание, он закончит движение к этому месту, прежде чем полностью остановиться и больше не двигаться.

Это означает, что вы можете использовать мобов, не знающих о своем окружении, для перемещения в определенные места, в отличие от мобов без ИИ.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `bValue` |                  Устанавливает, знает ли моб о своем окружении                  | ✅ |
| `duration` |               Устанавливает значение (в тиках)               | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_MOB_AWARE
      Target:
        targetType: SELF
      bValue: false
      duration: 40
```

Устанавливает для босса отсутствие осознания на 2 секунды (40 тиков).

</div>

</details>

</div>

---

### SET_ON_FIRE

Поджигает сущность на указанное время.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                Продолжительность эффекта в тиках                 | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 60
```

<div align="center">

![elitescript_actions_setonfire.jpg](../../../img/wiki/elitescript_actions_setonfire.jpg)

</div>

Поджигает всех игроков в пределах 10 блоков от босса на 3 секунды (60 тиков).

</div>

</details>

</div>

---

### SET_TIME

Устанавливает игровое время мира, в котором находится цель.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `time` |                         Устанавливает время                         | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_TIME
      Target:
        targetType: SELF
      time: 10000
```

<div align="center">

![elitescript_actions_settime.gif](../../../img/wiki/elitescript_actions_settime.gif)

</div>

При ударе босс установит время мира, в котором он находится, на 10000 тиков.

</div>

</details>

</div>

---

### SET_WEATHER

Устанавливает погоду мира, в котором находится цель, на заданный промежуток времени.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `weather` |                     Устанавливает тип погоды                     | ✅ |
| `duration` |           Устанавливает продолжительность погодного паттерна           | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SET_WEATHER
      Target:
        targetType: SELF
      weather: PRECIPITATION
      duration: 120
```

<div align="center">

![elitescript_actions_setweather.gif](../../../img/wiki/elitescript_actions_setweather.gif)

</div>

Устанавливает погоду мира, в котором находится босс, на дождь/снег на следующую минуту.

*Примечание: для срабатывания эффекта потребуется некоторое время.*

</div>

</details>

</div>

#### weather

Допустимые погодные паттерны:

- `CLEAR` - устанавливает ясную погоду
- `PRECIPITATION` - устанавливает дождь / снег, в зависимости от биома, высоты местности и других ванильных соображений Minecraft.
- `THUNDER` - устанавливает грозу

---

### SPAWN_FIREWORKS

Создает фейерверки.

| Значения |                                                                                                            Подробности                                                                                                            | Обязательно |
| --- |:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                                                                                [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                                                                                 | ✅ |
| `vValue` |                                                                                           Устанавливает скорость ракеты фейерверка                                                                                           | ✅ |
| `flicker` |                                                                                         Устанавливает, будут ли мерцать частицы фейерверка                                                                                         | ❌ |
| `withTrail` |                                                                                        Устанавливает, будет ли ракета фейерверка оставлять след                                                                                        | ❌ |
| `power` |                                                                                               Устанавливает мощность фейерверков                                                                                                | ❌ |
| `fireworkEffects` |                                                                    Устанавливает эффекты фейерверков, относящиеся к тому, как долго они будут гореть, прежде чем взорвутся.                                                                    | ✅ |
| `fireworkEffectType` |                                                Устанавливает форму фейерверка [из этого списка](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html)                                                | ❌ |
| `fireworkEffectTypes` | Устанавливает формы фейерверка [из этого списка](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/FireworkEffect.Type.html). Это список форм - если вам нужен список форм, не используйте `fireworkEffectType`! [1] | ❌ |

[1] При использовании нескольких форм для фейерверков, каждая форма будет использовать цвета из списка цветов в той же позиции. Смотрите пример ниже.

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  fireworkShot1:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
        offset: 1,1.5,0
      vValue: .5,-.35,1
      flicker: false
      withTrail: false
      power: 2
      fireworkEffects:
      - [ORANGE, RED]
      - [YELLOW, BLUE]
      fireworkEffectTypes:
      - BALL_LARGE
      - STAR
```

<div align="center">

![elitescript_actions_fireworks.jpg](../../../img/wiki/elitescript_actions_fireworks.jpg)

</div>

Создает фейерверки в локации босса со смещением x= 1, y= 1.5 и z = 0. Придает фейерверкам скорость x=.5, y=-.35 и z=1. Фейерверки не будут мерцать и не будут оставлять след; мощность установлена на 2, поэтому взрыв фейерверков будет отложен на это время. 

Наконец, есть два списка списков цветов: список 1 - оранжевый и красный, а список 2 - желтый и синий. Есть две формы для фейерверков: BALL\_LARGE и STAR. Это означает, что BALL\_LARGE (элемент 1) будет использовать оранжевый и красный цвета (список 1), а STAR (элемент 2) будет использовать желтый и синий цвета (список 2).

</div>

</details>

</div>

#### fireworkEffects

Это эффекты, которые покажет ракета фейерверка. Требуется как минимум один эффект. Допустимые эффекты:

- WHITE, SILVER, GRAY, BLACK, RED, MAROON, YELLOW, OLIVE, LIME, GREEN, AQUA, TEAL, BLUE, NAVY, FUCHSIA, PURPLE, ORANGE

---

### STRIKE_LIGHTNING

Создает удар молнии. Это визуальный эффект, если вы хотите урон, вам следует добавить действие damage.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: STRIKE_LIGHTNING
      Target:
        targetType: SELF
      repeatEvery: 5
      times: 5
```

<div align="center">

![elitescript_actions_strike.jpg](../../../img/wiki/elitescript_actions_strike.jpg)

</div>

Создает удар молнии в босса каждые 5 тиков, 5 раз.

</div>

</details>

</div>

---

### SPAWN_FALLING_BLOCK

Создает падающий блок в цели. Только визуальный эффект, блок не размещается.

| Значения           |                                                                                      Подробности                                                                                       | Обязательно |
|------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`         |                                                           [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                                                            | ✅ |
| `material`       | Устанавливает [Материал](#material) падающего блока. [Проверьте допустимые типы здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) и убедитесь, что это допустимый материал блока. | ✅ |
| `landingScripts` |                                                             Устанавливает список скриптов, которые будут запущены при падении блока                                                              | ✅ |
| `vValue`         | Устанавливает скорость и направление падающего блока. | ✅ |

`landingScripts` работает так же, как [`RUN_SCRIPT`]($language$/elitemobs/elitescript_actions.md&section=run_script), но может принимать специальный тип цели `LANDING_LOCATION`.

*Примечание: это действие также принимает относительные векторы. Подробнее об их использовании [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SPAWN_FALLING_BLOCK
      Target:
        targetType: SELF
        offset: 3,10,0
      material: STONE
      vValue: 0,0,0
      landingScripts:
      - LandingScriptExample
  LandingScriptExample:
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: LANDING_LOCATION
      duration: 200
      material: STONE
```

<div align="center">

![elitescript_actions_block.gif](../../../img/wiki/elitescript_actions_block.gif)

</div>

Когда босс получает удар, этот скрипт создаст падающий каменный блок на 10 блоков выше и на 3 блока рядом с местоположением босса.

Как только блок упадет, он запустит скрипт LandingScriptExample, который разместит каменный блок в том месте, где упал блок.
Блок останется там на 10 секунд (200 тиков), прежде чем исчезнет.

</div>

</details>

</div>

---

### SPAWN_PARTICLE

Создает частицы в цели.

**Примечание: если покрытие не установлено, то по умолчанию оно будет установлено на 0.3!**

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `particles` |           Список частиц, которые будут созданы            | ✅ |

#### particles

Частицы имеют свои собственные специальные настройки, которые выглядят следующим образом:

| Значения | Подробности | По умолчанию | Специальный |
| --- | :-: | :-: | :-: |
| `x` | Устанавливает смещение по X | 0.01 | (1) |
| `y` | Устанавливает смещение по Y | 0.01 | (1) |
| `z` | Устанавливает смещение по Z | 0.01 | (1) |
| `amount` | Устанавливает количество создаваемых частиц | 1 | (1) |
| `speed` | Устанавливает скорость частиц | 0.01 | ❌ |
| `particle` | Устанавливает тип сущности | `FLAME` | [Выберите из этого списка!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |
| `red` | Устанавливает значение красного цвета | `255` | (2) |
| `green` | Устанавливает значение зеленого цвета | `255` | (2) |
| `blue` | Устанавливает значение синего цвета | `255` | (2) |
| `toRed` | Устанавливает конечное значение красного цвета | `255` | (3) |
| `toGreen` | Устанавливает конечное значение зеленого цвета | `255` | (3) |
| `toBlue` | Устанавливает конечное значение синего цвета | `255` | (3) |

_(1) Если `amount` установлено в 0, то вместо этого `x`, `y` и `z` будут устанавливать скорость частицы._

_(2) Только для `particle` `REDSTONE`, `DUST_COLOR_TRANSITION`, `SPELL_MOB` и `SPELL_MOB_AMBIENT`_

_(3) Только для `particle` `DUST_COLOR_TRANSITION`_

Важно отметить, что один скрипт SPAWN_PARTICLE может создавать несколько частиц. Каждая частица может иметь свои собственные поля конфигурации внутри действия SPAWN_PARTICLE. Вот пример:

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
      amount: 1
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_particle.jpg](../../../img/wiki/elitescript_actions_particle.jpg)

</div>

Это создаст цилиндр из частиц пламени и дыма вокруг игрока, который нанес урон боссу.

</div>

</details>

</div>

#### Перемещение частицы:

Можно задать определенную скорость для частицы, и это работает так же, как Spigot API. Это позволяет скриптерам задать для частицы направление и скорость. Невозможно заставить частицы менять направление на полпути. Этот эффект используется в зачаровании огнемета и силе босса.

Чтобы переместить частицу, установите `amount: 0`. Это даст Minecraft знать, что значения `x`, `y` и `z` на самом деле являются вектором. Этот вектор задает направление, в котором будет двигаться ваша частица.

Допустим, вы хотите, чтобы частица `FLAME` двигалась вверх. Для этого вам нужно положительное значение `y` и ничего больше. Наконец, вам нужно будет установить скорость, с которой вы хотите, чтобы частица двигалась. Вот полный пример:

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobEnterCombatEvent
    Zone:
      shape: CYLINDER
      radius: 4
      borderRadius: 3
      height: 30
      Target:
        targetType: DIRECT_TARGET
      track: true  
    Actions:
    - action: SPAWN_PARTICLE
      Target:
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 0
          x: 0
          y: 1
          z: 0
          speed: 0.2
        - particle: SMOKE_NORMAL
          speed: 0.1
          amount: 0
          x: 0.5
          y: 1
          z: 0.5
      amount: 3  
      repeatEvery: 10
```

Это создаст частицу пламени в локации босса, которая будет двигаться вверх.

</div>

</details>

</div>

---

### SUMMON_REINFORCEMENT

Призывает подкрепление из EliteMobs Custom Bosses.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |      Устанавливает имя файла подкрепления Custom Boss      | ✅ |
| `duration` |        Устанавливает продолжительность подкрепления (в тиках)         | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: SUMMON_REINFORCEMENT
      Target:
        targetType: DIRECT_TARGET
      sValue: your_boss_file.yml
```

Создает подкрепление с именем файла "your_boss_file.yml" в локации босса.

</div>

</details>

</div>

---

### SUMMON_ENTITY

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Устанавливает тип сущности для появления               | ✅ |

*Примечание: это действие также принимает относительные векторы. Подробнее об их использовании [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Устанавливает босса для появления ZOMBIE в локации босса.

</div>

</details>

</div>| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Устанавливает тип сущности для появления               | ✅ |

*Примечание: это действие также принимает относительные векторы. Подробнее об их использовании [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Устанавливает, что босс будет создавать ZOMBIE в своем местоположении.

</div>

</details>

</div>

---

### TAG

Добавляет теги к боссам или игрокам. Теги - это просто строки или слова, которые могут определять скриптеры. Они используются только для запуска проверок условий и не оказывают прямого влияния на игровой процесс, кроме того, для чего они используются в скриптах.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                        Устанавливает теги                         | ✅ |
| `duration` |               Устанавливает длительность тегов (в тиках)               | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

Помечает босса строкой "very_sus", которую позже можно проверить с помощью условий скрипта.

**Важно:** Помечать можно только игроков и элитных мобов.

</div>

</details>

</div>

---

### TELEPORT

Телепортирует цель(и) в указанное место.

| Значения |                                                     Подробности                                                     | Обязательно |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Устанавливает, _кто_ будет телепортирован. [Общая информация о целях здесь!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Устанавливает, _куда_ они будут телепортированы. [Общая информация о целях здесь!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Место телепортации                                               | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Это телепортирует всех игроков, находящихся в пределах 10 блоков от босса, к месту появления босса.

</div>

</details>

</div>

#### location

Устанавливает место, куда будет телепортирован игрок. Формат - стандартный EliteMobs `world_name,x,y,z,pitch,yaw`.

Пример

```yaml
location: world,0,64,0,0,0
```

Есть несколько специальных значений:

- Если имя мира установлено как `same_as_boss`, оно заменит имя мира на имя мира, в котором в данный момент находится босс:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Если есть только три значения, соответствующие x, y и z, телепортация будет произведена в место, относительное местоположению босса. Если босс является региональным боссом, местоположение будет относительным к точке появления босса.

---

### TITLE_MESSAGE

Устанавливает сообщение в строке действия для целей.

| Значения |                            Подробности                            | Обязательно | Специальный | По умолчанию |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                      Устанавливает заголовок сообщения                      | ✅ | Можно использовать [Коды цветов](#color_codes) с `&` | ❌ |
| `subtitle` |                    Устанавливает подзаголовок сообщения                    | ✅ | Можно использовать [Коды цветов](#color_codes) с `&` | ❌ |
| `duration` |          Устанавливает длительность сообщения (в тиках)            | ✅ | ❌ | `0` |
| `fadeIn` |                 Устанавливает время появления (в тиках)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Устанавливает время исчезновения (в тиках)                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2Я подзаголовок!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Установит сообщение заголовка для отображения заголовка "&2Hello World!" с подзаголовком "&2Я подзаголовок!" всем игрокам, находящимся в пределах 10 блоков от босса.

Сообщение будет оставаться на экране в течение 8 секунд (120 + 20 + 20 = 160 тиков), включая анимацию появления и исчезновения.

</div>

</details>

</div>

---

### UNTAG

Удаляет теги с босса. Проверьте `TAG`, чтобы узнать, как работают теги.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                        Устанавливает теги                         | ✅ |
| `duration` |      Устанавливает длительность удаления тегов (в тиках)      | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  Пример2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Удаляет тег "very_sus" с босса, который позже можно проверить с помощью условий скрипта.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Придает игроку визуальный эффект заморозки и наносит связанный с ним урон. Это действие следует комбинировать с повторяющимся скриптом, если вы не хотите, чтобы эффект сразу исчезал.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                  Продолжительность эффекта в тиках                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) В настоящее время VISUAL FREEZE не работает, поэтому сделать скриншот не удалось

</div>

Придает всем игрокам в пределах 10 блоков от босса визуальный эффект заморозки на 3 секунды (60 тиков).

</div>

</details>

</div>

---

# Множественные действия

Иногда вам может понадобиться выполнить несколько действий одновременно, когда происходит какое-либо событие, например, отправить несколько сообщений или выполнить различные действия последовательно. Это легко сделать! Давайте добавим действие эффекта зелья в наш пример:

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: Я отправляю сообщение всем игрокам онлайн!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: Я отправляю сообщение игроку, который ударил босса!
```

</div>

</details>

</div>




| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Устанавливает тип сущности, которая будет вызвана               | ✅ |

*Примечание: это действие также принимает относительные векторы. Подробнее об их использовании [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
      - EliteMobEnterCombatEvent
    Actions:
      - action: SUMMON_ENTITY
        Target:
          targetType: DIRECT_TARGET
        sValue: ZOMBIE
```

Устанавливает, что босс будет создавать ZOMBIE в своем местоположении.

</div>

</details>

</div>

---

### TAG

Добавляет теги к боссам или игрокам. Теги - это просто строки или слова, которые могут определять скриптеры. Они используются только для запуска проверок условий и не оказывают прямого влияния на игровой процесс, кроме того, для чего они используются в скриптах.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                        Устанавливает теги                         | ✅ |
| `duration` |               Устанавливает длительность тегов (в тиках)               | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks
```

Помечает босса строкой "very_sus", которую позже можно проверить с помощью условий скрипта.

**Важно:** Помечать можно только игроков и элитных мобов.

</div>

</details>

</div>

---

### TELEPORT

Телепортирует цель(и) в указанное место.

| Значения |                                                     Подробности                                                     | Обязательно |
| --- |:--------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |    Устанавливает, _кто_ будет телепортирован. [Общая информация о целях здесь!]($language$/elitemobs/elitescript_targets.md)    | ✅ |
| `FinalTarget` | Устанавливает, _куда_ они будут телепортированы. [Общая информация о целях здесь!]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `location` |                                               Место телепортации                                               | ✅ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      FinalTarget:
        targetType: SELF_SPAWN
```

<div align="center">

![elitescript_actions_teleport.gif](../../../img/wiki/elitescript_actions_teleport.gif)

</div>

Это телепортирует всех игроков, находящихся в пределах 10 блоков от босса, к месту появления босса.

</div>

</details>

</div>

#### location

Устанавливает место, куда будет телепортирован игрок. Формат - стандартный EliteMobs `world_name,x,y,z,pitch,yaw`.

Пример

```yaml
location: world,0,64,0,0,0
```

Есть несколько специальных значений:

- Если имя мира установлено как `same_as_boss`, оно заменит имя мира на имя мира, в котором в данный момент находится босс:

```yaml
location: same_as_boss,0,64,0,0,0
```

- Если есть только три значения, соответствующие x, y и z, телепортация будет произведена в место, относительное местоположению босса. Если босс является региональным боссом, местоположение будет относительным к точке появления босса.

---

### TITLE_MESSAGE

Устанавливает сообщение в строке действия для целей.

| Значения |                            Подробности                            | Обязательно | Специальный | По умолчанию |
| --- |:-------------------------------------------------------------:| :-: | :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ | ❌ |
| `title` |                      Устанавливает заголовок сообщения                      | ✅ | Можно использовать [Коды цветов](#color_codes) с `&` | ❌ |
| `subtitle` |                    Устанавливает подзаголовок сообщения                    | ✅ | Можно использовать [Коды цветов](#color_codes) с `&` | ❌ |
| `duration` |          Устанавливает длительность сообщения (в тиках)            | ✅ | ❌ | `0` |
| `fadeIn` |                 Устанавливает время появления (в тиках)                   | ❌ | ❌ | `0` |
| `fadeOut` |                  Устанавливает время исчезновения (в тиках)                  | ❌ | ❌ | `0` |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TITLE_MESSAGE
      Target: 
        targetType: NEARBY_PLAYERS
        range: 10
      title: "&2Hello World!"
      subtitle: "&2Я подзаголовок!"
      duration: 120
      fadeIn: 20
      fadeOut: 20
```

<div align="center">

![elitescript_actions_titlescreen.jpg](../../../img/wiki/elitescript_actions_titlescreen.jpg)

</div>

Установит сообщение заголовка для отображения заголовка "&2Hello World!" с подзаголовком "&2Я подзаголовок!" всем игрокам, находящимся в пределах 10 блоков от босса.

Сообщение будет оставаться на экране в течение 8 секунд (120 + 20 + 20 = 160 тиков), включая анимацию появления и исчезновения.

</div>

</details>

</div>

---

### UNTAG

Удаляет теги с босса. Проверьте `TAG`, чтобы узнать, как работают теги.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `tags` |                        Устанавливает теги                         | ✅ |
| `duration` |      Устанавливает длительность удаления тегов (в тиках)      | ❌ |

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobSpawnEvent
    Actions:
    - action: TAG
      Target:
        targetType: SELF
      tags:
      - fireworks
    - action: SPAWN_FIREWORKS
      Target:
        targetType: SELF
      wait: 20  
      offset: 0,3,0
      vValue: 0,.1,0
      flicker: true
      withTrail: true
      power: 1
      fireworkEffects:
      - [ORANGE, RED]
      repeatEvery: 20
      Conditions:
        hasTags:
        - fireworks  
  Пример2:
    Events:
    - EliteMobEnterCombatEvent
    Actions:
    - action: UNTAG
      Target:
        targetType: SELF
      tags:
      - fireworks
```

Удаляет тег "very_sus" с босса, который позже можно проверить с помощью условий скрипта.

</div>

</details>

</div>

---

### VISUAL_FREEZE

Придает игроку визуальный эффект заморозки и наносит связанный с ним урон. Это действие следует комбинировать с повторяющимся скриптом, если вы не хотите, чтобы эффект сразу исчезал.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `duration` |                  Продолжительность эффекта в тиках                  | ✅ |

<div align="center">
<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Пример:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: VISUAL_FREEZE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 20
      repeatEvery: 20
      times: 3
```

<div align="center">

![elitescript_actions_freeze.jpg](../../../img/wiki/elitescript_actions_freeze.jpg) В настоящее время VISUAL FREEZE не работает, поэтому сделать скриншот не удалось

</div>

Придает всем игрокам в пределах 10 блоков от босса визуальный эффект заморозки на 3 секунды (60 тиков).

</div>

</details>

</div>

---

# Множественные действия

Иногда вам может понадобиться выполнить несколько действий одновременно, когда происходит какое-либо событие, например, отправить несколько сообщений или выполнить различные действия последовательно. Это легко сделать! Давайте добавим действие эффекта зелья в наш пример:

<div align="center">

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  MessagePlayers:
    Events:
    - EliteMobDamagedEventByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: ALL_PLAYERS
      message: Я отправляю сообщение всем игрокам онлайн!
    - action: MESSAGE
      Target:
        targetType: DIRECT_TARGET
      message: Я отправляю сообщение игроку, который ударил босса!
```

</div>

</details>

</div>


