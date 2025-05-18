```markdown
# Действия Elite Script

Действия являются основой скрипта. Они определяют, что делает скрипт, и позволяют устанавливать настраиваемые интервалы.

Действия всегда начинаются с типа действия, которое вы собираетесь выполнить. Различные типы действий выполняют разные функции. Кроме того, все действия имеют цель или цели. Действия также могут иметь таймер ожидания, чтобы гарантировать выполнение действий с настраиваемыми задержками. Наконец, действия могут иметь несколько других полей, специфичных для типа действия.

## Общие атрибуты

| Значения             |                                                                                 Подробности                                                                                  | Особое |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Устанавливает время ожидания (тиков) перед выполнением действий                                                      | ❌ |
| `repeatEvery`      |        Устанавливает повторение действий через заданное количество тиков. Любой скрипт, у которого это установлено, но не используются `times`, будет завершен при смерти моба во избежание задержек. Вы можете рандомизировать это значение, используя `~`, например: `1~5`.         | ❌ |
| `times`            |                                                            Устанавливает количество раз, которое действие будет выполнено. Вы можете рандомизировать это значение, используя `~`, например: `1~5`.                                                            | Требует `repeatEvery` |
| `scripts`          |                                                         Устанавливает скрипты, которые будут запущены в конце действия                                                          | ❌ |
| `onlyRunOneScript` |                                                       Выбирает один из `scripts` случайным образом и запускает только его.                                                       | ❌ |
| `offset`           | Эта опция находится под `Target`. Позволяет смещать местоположение цели. Смещение не работает с действиями, нацеленными на зоны с `ZONE_FULL` или `ZONE_BORDER`. | ❌ |
| `debug`           | Эта опция находится в секции действия скрипта. Если установлено в true, будет отображать иконки барьеров в области действия. | ❌ |

## Типы действий

### ACTION_BAR_MESSAGE

Устанавливает сообщение на панели действий для целей.

| Значения |                            Подробности                            | Обязательно | Особое |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Сообщение                            | ✅ | Можно использовать [Цветовые коды](#color_codes) с `&` |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: ACTION_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Установит на панели действий сообщение "Hello World" для любых игроков, находящихся в радиусе 10 блоков от босса.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Добавляет боссбар цели(ям).

| Значения |                            Подробности                            | Обязательно |                   Особое                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Сообщение                            | ✅ | Можно использовать [Цветовые коды](#color_codes) с `&` |
| `duration` |               Длительность боссбара в тиках               | ✅ |                      ❌                       |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: BOSS_BAR_MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      duration: 120
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Установит боссбар с сообщением "Hello World" для любых игроков, находящихся в радиусе 10 блоков от босса, на 1 секунду.

</div>

</details>

</div>

---

### DAMAGE

Так вы можете наносить урон сущностям от имени других сущностей.

_Примечание: это нативно использует систему урона EliteMobs! Это означает, что вы увидите обычное снижение урона от брони элитных мобов при ударах. Подробнее об этом в разделе множителей._

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `multiplier` |                       Множитель урона                       | ✅ |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: DAMAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      multiplier: 0.5
```

Устанавливает урон равным половине базового урона, который босс нанес бы игроку, с учетом снижения урона.

</div>

</details>

</div>

#### multiplier

Устанавливает множитель урона босса для эффекта.

**Важно**: чтобы способности легко и автоматически масштабировались, урон применяется путем однократного удара босса по игроку и умножения базового урона босса на множитель.

Это означает, что множитель 1.0 эквивалентен обычному удару босса. 2.0 — это удар в 2 раза сильнее обычного, а 0.5 — в 2 раза слабее.

---

### MAKE_INVULNERABLE

Делает цель неуязвимой.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Устанавливает, является ли босс неуязвимым                | ✅ |
| `duration` |       Устанавливает длительность неуязвимости (тиков)        | ❌ |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MAKE_INVULNERABLE
      Target:
        targetType: SELF
      invulnerable: true
      duration: 60
```

Делает босса неуязвимым на 60 тиков (3 секунды).

</div>

</details>

</div>

---

### MODIFY_DAMAGE

Изменяет урон, наносимый боссу, или урон, наносимый игрокам этим боссом. Это особое действие с несколькими особыми требованиями.

| Значения | Подробности | Обязательно |
| --- | :-: | :-: |
| `multiplier` | Множитель урона. | ✅ |

Это действие особое и должно находиться в скрипте, который имеет слушатель событий урона. Ниже приведены допустимые события урона: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` для событий, которые уменьшают урон, наносимый боссу, и `PlayerDamagedByEliteMobEvent` для событий, которые уменьшают урон, наносимый игрокам.

Настоятельно рекомендуется изучить, как работает условие `hasTag`, чтобы наилучшим образом использовать это действие. При правильном использовании можно временно сделать босса более устойчивым или более уязвимым к урону, и это может быть связано с баффами игрока, местоположением босса или многими другими факторами.

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MODIFY_DAMAGE
      multiplier: 2.0
      Conditions:
        hasTags:
        - "CoolPlayer"
        Target:
          targetType: DIRECT_TARGET
```

Увеличивает урон, наносимый боссу игроками, в 2 раза, но только если у игрока есть тег "CoolPlayer"

</div>

</details>

</div>

---

### MESSAGE

Отправляет сообщение цели(ям).

| Значения |                            Подробности                            | Обязательно | Особое |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Сообщение                            | ✅ | Можно использовать [Цветовые коды](#color_codes) с `&` |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: MESSAGE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: "&2Hello World!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Отправит сообщение в чат всем игрокам в радиусе 10 блоков от босса.

</div>

</details>

</div>

---

### NAVIGATE

Заставляет босса перемещаться (идти) к указанной цели.

| Значения |                            Подробности                            | Обязательно | Особое |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Устанавливает скорость перемещения босса. `1.0` — это значение босса, установленное в конфиге. | ❌ | ❌ |
| `bValue` | Устанавливает, следует ли принудительно телепортировать босса к `FinalTarget`, если навигация не удалась. | ❌ | ❌ |
| `duration` | Как долго босс должен пытаться перемещаться, прежде чем сдастся. Устанавливается в тиках. По умолчанию 100 тиков. | ✅ | ❌ |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: NAVIGATE
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
      velocity: 1.0
      bValue: true
      duration: 100
```

Заставит босса перемещаться к месту, где стоял игрок, когда он ударил босса.

</div>

</details>

</div>

---

### PLACE_BLOCK

Ставит блок(и) в местоположении(ях) цели на указанную длительность.

| Значения |                                                         Подробности                                                         | Обязательно |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Материал](#material) блока, [полный список здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Длительность эффекта, в тиках                                               | ❌ |

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
      radius: 3
      Target:
        targetType: SELF
    Actions:
    - action: PLACE_BLOCK
      Target:
        targetType: ZONE_FULL
      duration: 120
      material: GLASS
```

<div align="center">

![elitescript_actions_placeblock.jpg](../../../img/wiki/elitescript_actions_placeblock.jpg)

</div>

Ставит стеклянный купол вокруг босса, который продержится 6 секунд.

_Примечание: Если длительность не указана, блок остается навсегда._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Воспроизводит указанную анимацию для Пользовательской Модели с использованием Model Engine. Требует Model Engine и действительную Пользовательскую Модель на цели, которая запускает анимацию.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                Устанавливает имя анимации                 | ✅ |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_ANIMATION
      Target:
        targetType: SELF
      sValue: "fortnite_dance"
```

Заставляет босса воспроизвести анимацию fortnite_dance. Требует, чтобы на сервере был установлен Model Engine, у босса был пользовательский облик, и у этого облика была анимация под названием "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Воспроизводит внутриигровой звук.

| Значения   |                            Подробности                            | Обязательно |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `sValue` |            Устанавливает имя воспроизводимого звука            |     ✅     |
| `pitch`  |           Устанавливает высоту тона воспроизводимого звука            |     ❌     |
| `volume` |           Устанавливает громкость воспроизводимого звука           |     ❌     |

[Вот удобный список всех звуков Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Помните, что это также может воспроизводить пользовательские звуки из ресурс-паков.
Когда действие нацелено на зону, звук будет воспроизводиться для каждого блока в этой зоне. Это может сделать звук значительно громче обычного, поэтому рассмотрите возможность снижения громкости при нацеливании на зону.

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PLAY_SOUND
      Target:
        targeType: SELF
      sValue: minecraft:block.bell.resonate
```

Воспроизводит звук резонанса колоколов Minecraft в местоположении босса

</div>

</details>

</div>

---

### POTION_EFFECT

Применяет определенный эффект зелья к цели(ям).

| Значения |                                                       Подробности                                                       | Обязательно |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Тип эффекта, [список допустимых значений здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Уровень эффекта зелья (начинается с 0)                                          | ✅ |
| `duration` |                                           Длительность эффекта (тиков)                                            | ✅ |

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: LEVITATION
      amplifier: 1
      duration: 40
```

<div align="center">

![elitescript_actions_potioneffect.jpg](../../../img/wiki/elitescript_actions_potioneffect.jpg)

</div>

Это заставит любых игроков в радиусе 10 блоков от босса левитировать в течение 2 секунд (40 тиков).

</div>

</details>

</div>

---

### PUSH

Толкает цель с заданным вектором.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Устанавливает вектор скорости, который будет применен        | ✅ |

*Примечание: Это действие также принимает относительные векторы. Узнайте больше о том, как их использовать [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      wait: 3
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      vValue: 0,0.3,0
      times: 10
      repeatEvery: 10
```

<div align="center">

![elitescript_actions_push.jpg](../../../img/wiki/elitescript_actions_push.jpg)

</div>

Это подтолкнет всех игроков в радиусе 10 блоков от босса в воздух с силой 0.3. Это действие будет повторяться 10 раз каждые 0.5 секунды (10 тиков). Другими словами, этот эффект продлится 5 секунд (10 раз x 10 тиков = 100 тиков).

Это будет выглядеть так, будто игроки прыгают.

</div>

</details>

</div>

#### vector

Векторы определяются как `vValue: x,y,z`. Например, если вы хотите, чтобы цель была подтолкнута вверх, вы можете использовать `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Выполняет команду от имени консоли.

| Значения |                             Подробности                             | Обязательно |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Команда, которая будет выполнена                     | ✅ |

**Примечание: доступны плейсхолдеры! Проверьте RUN_COMMAND_AS_PLAYER, они одинаковы**

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: RUN_COMMAND_AS_CONSOLE
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      sValue: say Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Заставляет консоль транслировать сообщение "Hello $bossName my name is $playerName. What is your level? $bossName my level is $bossLevel"

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER

Выполняет команду от имени игрока. Требует, чтобы целью были игроки.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Команда, которая будет выполнена                    | ✅ |
```Okay, I can do that. Please provide the text you want translated and specify the target language.Please specify the target language for the translation. I need the language to translate the text while retaining the markdown formatting.