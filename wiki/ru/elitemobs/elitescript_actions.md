# Действия элитного скрипта

Действия лежат в основе скрипта. Они определяют, что делает скрипт, и позволяют устанавливать пользовательские интервалы.

Действия всегда начинаются с типа действия, которое вы собираетесь выполнить. Различные типы действий выполняют разные
функции. Кроме того, все действия имеют цель или цели. Действия могут также иметь таймер ожидания, чтобы убедиться, что
все происходит с настраиваемыми задержками. Наконец, действия также могут иметь несколько других полей, специфичных для
типа действия.

## Общие атрибуты

| Значения           |                                                                                          Детали                                                                                           |       Специальные       |
|--------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------:|
| `Target`           |                                                          [Больше информации здесь]($language$/elitemobs/elitescript_targets.md)                                                           |            ❌            |
| `wait`             |                                                        Устанавливает количество времени ожидания (тики) перед выполнением действий                                                        |            ❌            |
| `repeatEvery`      | Устанавливает повторение действий через заданное количество тиков. Любой скрипт, который имеет это значение, но не использует times, будет завершен после смерти моба во избежание лагов. |            ❌            |
| `times`            |                                                               Устанавливает количество раз, когда действие будет выполнено                                                                | Требуется `repeatEvery` |
| `scripts`          |                                                             Устанавливает скрипты, которые будут выполняться в конце действия                                                             |            ❌            |
| `onlyRunOneScript` |                                                           Выбирает один из `scripts` случайным образом и запускает только его.                                                            |            ❌            |
| `offset`           |    Этот параметр находится в разделе `Target`. Позволяет смещать целевое местоположение. Смещение не работает с действиями, которые нацелены на зоны с `ZONE_FULL` или `ZONE_BORDER`.     |            ❌            |
| `debug`            |                        Этот параметр находится в разделе действий скрипта. Когда установлено значение true, он будет отображать иконки барьера в области действия.                        |            ❌            |

## Типы действий

### ACTION_BAR_MESSAGE

Устанавливает сообщение в панели действий для целей.

| Значения |                                 Детали                                 | Обязательное |                      Специальные                       |
|----------|:----------------------------------------------------------------------:|:------------:|:------------------------------------------------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |                           ❌                            |
| `sValue` |                               Сообщение                                |      ✅       | Можно использовать [Цветовые коды](#color_codes) с `&` |

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
      sValue: "&2Привет, мир!"
```

<div align="center">

![elitescript_actions_actionbar.jpg](../../../img/wiki/elitescript_actions_actionbar.jpg)

</div>

Установит в панели действий сообщение "Привет, мир!" для всех игроков, находящихся в радиусе 10 блоков от босса.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Добавляет босс-бар для целей.

| Значения   |                                 Детали                                 | Обязательное |                      Специальные                       |
|------------|:----------------------------------------------------------------------:|:------------:|:------------------------------------------------------:|
| `Target`   | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |                           ❌                            |
| `sValue`   |                               Сообщение                                |      ✅       | Можно использовать [Цветовые коды](#color_codes) с `&` |
| `duration` |                     Длительность босс-бара в тиках                     |      ✅       |                           ❌                            |

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
      sValue: "&2Привет, мир!"
```

<div align="center">

![elitescript_actions_bossbar.jpg](../../../img/wiki/elitescript_actions_bossbar.jpg)

</div>

Установит босс-бар с сообщением "Привет, мир!" для всех игроков, находящихся в радиусе 10 блоков от босса, на 1 секунду.

</div>

</details>

</div>

---

### DAMAGE

Это способ наносить урон сущностям в качестве других сущностей.

_Примечание: это нативно использует систему урона EliteMobs! Это означает, что вы увидите обычное уменьшение элитной
брони от ударов. Подробнее об этом в разделе множителей._

| Значения     |                                 Детали                                 | Обязательное |
|--------------|:----------------------------------------------------------------------:|:------------:|
| `Target`     | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `multiplier` |                            Множитель урона                             |      ✅       |

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

Устанавливает урон в половину от базового урона, который босс нанесет игроку, с учетом уменьшения урона.

</div>

</details>

</div>

#### множитель

Устанавливает множитель урона босса для эффекта.

**Важно**: чтобы легко и автоматически масштабировать способности, урон наносится путем однократного удара босса по
игроку и умножения базового урона босса на множитель.

Это означает, что множитель 1,0 равен обычному удару босса. 2,0 - это удар в 2 раза сильнее, а 0,5 - 50% от силы удара.

---

### MAKE_INVULNERABLE

Делает цель неуязвимой.

| Значения       |                                 Детали                                 | Обязательное |
|----------------|:----------------------------------------------------------------------:|:------------:|
| `Target`       | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `invulnerable` |               Устанавливает, является ли босс неуязвимым               |      ✅       |
| `duration`     |          Устанавливает продолжительность неуязвимости (тики)           |      ❌       |

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

Изменяет урон, нанесенный боссу, или урон, нанесенный игрокам этим боссом. Это специальное действие с несколькими
особыми требованиями.

| Значения     |      Детали      | Обязательное |
|--------------|:----------------:|:------------:|
| `multiplier` | Множитель урона. |      ✅       |

Это действие является специальным и должно находиться в скрипте, у которого есть прослушиватель событий для события
урона. Следующие события урона являются
допустимыми: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` для событий,
которые уменьшают урон, нанесенный боссу, и `PlayerDamagedByEliteMobEvent` для событий, которые уменьшают урон,
нанесенный игрокам.

Настоятельно рекомендуется изучить, как работает условие `hasTag`, чтобы наилучшим образом использовать это действие.
При правильном использовании можно сделать босса временно устойчивым или более слабым к урону, и это может быть связано
с усилениями игрока, местоположением босса или многими другими факторами.

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
        - "КрутойИгрок"
        Target:
          targetType: DIRECT_TARGET
```

Увеличивает урон, наносимый боссу игроками, в 2 раза, но только если у игрока есть тег под названием "КрутойИгрок".

</div>

</details>

</div>

---

### MESSAGE

Отправляет сообщение целям.

| Значения |                                 Детали                                 | Обязательное |                      Специальные                       |
|----------|:----------------------------------------------------------------------:|:------------:|:------------------------------------------------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |                           ❌                            |
| `sValue` |                               Сообщение                                |      ✅       | Можно использовать [Цветовые коды](#color_codes) с `&` |

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
      sValue: "&2Привет, мир!"
```

<div align="center">

![elitescript_actions_message.jpg](../../../img/wiki/elitescript_actions_message.jpg)

</div>

Отправит сообщение в чат всем игрокам, находящимся в радиусе 10 блоков от босса.

</div>

</details>

</div>

---

### NAVIGATE

Заставляет босса перемещаться (идти) к указанной цели.

| Значения      |                                                      Детали                                                       | Обязательное | Специальные |
|---------------|:-----------------------------------------------------------------------------------------------------------------:|:------------:|:-----------:|
| `Target`      |                      [Больше информации здесь]($language$/elitemobs/elitescript_targets.md)                       |      ✅       |      ❌      |
| `FinalTarget` |                      [Больше информации здесь]($language$/elitemobs/elitescript_targets.md)                       |      ✅       |      ❌      |
| `velocity`    |        Устанавливает скорость перемещения босса. `1.0` - это значение босса, установленное в конфигурации.        |      ❌       |      ❌      |
| `bValue`      |     Устанавливает, следует ли принудительно телепортировать босса к `FinalTarget`, если навигация не удалась.     |      ❌       |      ❌      |
| `duration`    | Как долго босс должен пытаться перемещаться, прежде чем сдаться. Устанавливается в тиках. По умолчанию 100 тиков. |      ✅       |      ❌      |

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

Заставит босса переместиться к месту, где стоял игрок, когда он ударил босса.

</div>

</details>

</div>

---

### PLACE_BLOCK

Размещает блок в целевом местоположении(ях) на время.

| Значения   |                                                        Детали                                                         | Обязательное |
|------------|:---------------------------------------------------------------------------------------------------------------------:|:------------:|
| `Target`   |                        [Больше информации здесь]($language$/elitemobs/elitescript_targets.md)                         |      ✅       |
| `material` | [Материал](#material) блока, [полный список здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |      ✅       |
| `duration` |                                             Длительность эффекта в тиках                                              |      ❌       |

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

Создает стеклянный купол вокруг босса, который будет держаться в течение 6 секунд.

_Примечание: если продолжительность не определена, то размещение блока является постоянным._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Воспроизводит указанную анимацию для пользовательской модели с помощью Model Engine. Требуется Model Engine и
действительная пользовательская модель для цели, которая запускает анимацию.

| Значения |                                 Детали                                 | Обязательное |
|----------|:----------------------------------------------------------------------:|:------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `sValue` |                       Устанавливает имя анимации                       |      ✅       |

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

Заставляет босса воспроизводить анимацию fortnite_dance. Требуется, чтобы на сервере был Model Engine, чтобы у босса
была пользовательская маскировка, а у пользовательской маскировки была анимация под названием "fortnite\_dance".

</div>

</details>

</div>

---

### PLAY_SOUND

Воспроизводит игровой звук.

| Значения |                                 Детали                                 | Обязательное |
|----------|:----------------------------------------------------------------------:|:------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `sValue` |                Устанавливает имя воспроизводимого звука                |      ✅       |
| `pitch`  |            Устанавливает высоту тона воспроизводимого звука            |      ❌       |
| `volume` |             Устанавливает громкость воспроизводимого звука             |      ❌       |

[Вот удобный список всех звуков Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Помните, что это также может воспроизводить пользовательские звуки из пакетов ресурсов.
Когда действие нацелено на зону, действие будет воспроизводить звук для каждого блока в этой зоне. Это может сделать
звук значительно громче, чем обычно, поэтому подумайте о снижении громкости, если нацелены на зону.

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

Воспроизводит звук резонанса из колоколов Minecraft в месте нахождения босса

</div>

</details>

</div>

---

### POTION_EFFECT

Применяет конкретный эффект зелья к цели(ям).

| Значения           |                                                            Детали                                                            | Обязательное |
|--------------------|:----------------------------------------------------------------------------------------------------------------------------:|:------------:|
| `Target`           |                            [Больше информации здесь]($language$/elitemobs/elitescript_targets.md)                            |      ✅       |
| `potionEffectType` | Тип эффекта, [действительный список здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) |      ✅       |
| `amplifier`        |                                            Уровень эффекта зелья (начинается с 0)                                            |      ✅       |
| `duration`         |                                                 Длительность эффекта (тики)                                                  |      ✅       |

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

Это заставит всех игроков в радиусе 10 блоков от босса левитировать в течение 2 секунд (40 тиков).

</div>

</details>

</div>

---

### PUSH

Толкает цель на заданный вектор.

| Значения |                                 Детали                                 | Обязательное |
|----------|:----------------------------------------------------------------------:|:------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `vValue` |         Устанавливает вектор скорости, которая будет применена         |      ✅       |

*Примечание: Это действие также принимает относительные векторы. Подробнее о том, как их использовать, можно
узнать [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Это действие подбросит в воздух всех игроков в радиусе 10 блоков от босса, используя силу 0,3. Это действие будет
повторяться 10 раз каждые 0,5 секунды (10 тиков). Другими словами, этот эффект продлится 5 секунд (10 раз x 10 тиков =
100 тиков).

Это создаст впечатление, что игроки прыгают.

</div>

</details>

</div>

#### вектор

Векторы определяются как `vValue: x,y,z`. Например, если вы хотите, чтобы цель была поднята вверх, вы можете
сделать `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Выполняет команду от имени консоли.

| Значения |                                 Детали                                 | Обязательное |
|----------|:----------------------------------------------------------------------:|:------------:|
| `Target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `sValue` |                    Команда, которая будет выполнена                    |      ✅       |

**Примечание: доступны заполнители! Проверьте RUN_COMMAND_AS_PLAYER, они одинаковые**

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
      sValue: say Привет, $bossName, меня зовут $playerName. Какой у тебя уровень? $bossName, мой уровень $bossLevel.
```

<div align="center">

![elitescript_actions_commandconsole.jpg](../../../img/wiki/elitescript_actions_commandconsole.jpg)

</div>

Заставит консоль транслировать сообщение "Привет, $bossName, меня зовут $playerName. Какой у тебя уровень? $bossName,
мой уровень $bossLevel."

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Выполняет команду от имени `игрока`. Требует, чтобы целью были игроки.

| Значения |                                 Детали                                 | Обязательное |
|----------|:----------------------------------------------------------------------:|:------------:|
| `target` | [Больше информации здесь]($language$/elitemobs/elitescript_targets.md) |      ✅       |
| `sValue` |                    Команда, которая будет выполнена                    |      ✅       |

**Примечание: RUN_COMMAND_AS_PLAYER и RUN_COMMAND_AS_CONSOLE используют следующие заполнители:**

| Заполнитель   |         Детали          |       Специальные        |
|---------------|:-----------------------:|:------------------------:|
| `$playerName` | Отображаемое имя игрока | Цель должна быть игроком |
| `$playerX`    |   Координата X игрока   | Цель должна быть игроком |
| `$playerY`    |   Координата Y игрока   | Цель должна быть игроком |
| `$playerZ`    |   Координата Z игрока   | Цель должна быть игроком |
| `$bossName`   | Отображаемое имя игрока | Цель должна быть игроком |
| `$bossX`      |   Координата X босса    |            ❌             |
| `$bossY`      |   Координата Y босса    |            ❌             |
| `$bossZ`      |   Координата Z босса    |            ❌             |
| `$bossLevel`  |      Уровень босса      |            ❌             |

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
    - action:
```
```yaml
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          amount: 10
        - particle: REDSTONE
          amount: 5
          red: 255
          green: 0
          blue: 0
        - particle: DUST_COLOR_TRANSITION
          amount: 5
          red: 255
          green: 0
          blue: 0
          toRed: 0
          toGreen: 255
          toBlue: 0
```

<div align="center">

![elitescript_actions_particles.jpg](../../../img/wiki/elitescript_actions_particles.jpg)

</div>

When the boss is struck, the action spawns 3 different particles with slightly different configurations: FLAME with 10
particles, REDSTONE with 5 red particles and DUST_COLOR_TRANSITION with 5 particles that transition from red to green.
All will spawn along the boss zone border.

</div>

</details>

</div>

---

### SUMMON_MOB

Summons another mob.

| Values   |                            Details                            | Mandatory |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `mob`    |             Sets the id of the mob to be spawned              |     ✅     |
| `amount` |             Sets the amount of mobs to be spawned             |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: SUMMON_MOB
      Target:
        targetType: SELF
      mob: Skeleton
      amount: 3
```

This will spawn 3 skeletons at the boss location when the boss gets struck.

</div>

</details>

</div>

---

### TELEPORT

Teleports a target to a location.

| Values |                            Details                            | Mandatory |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `FinalTarget` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TELEPORT
      Target:
        targetType: SELF
      FinalTarget:
        targetType: NEARBY_PLAYERS
        range: 50
```

Teleports the boss to the player that struck them, as long as they are in 50 blocks range.

</div>

</details>

</div>

---

### TOGGLE_PERSISTENCE

Toggles a mob's persistence.

| Values   |                            Details                            | Mandatory |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `bValue` |              Sets whether the boss is persistent              |     ✅     |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: TOGGLE_PERSISTENCE
      Target:
        targetType: SELF
      bValue: false
```

If the mob is persistent, this action will stop it from being persistent after it is struck by the player. If the mob
was not persistent, this action will make it persistent after it is struck by the player.

</div>

</details>

</div>

---

## Material

In some actions you may need to use a material. This is simply the name of the material in all uppercase and can be
found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html).

## Color Codes

You can use color codes with the `&` symbol. Here are all the possible color codes you can use.

| Code | Color            |
|------|------------------|
| &0   | Black            |
| &1   | Dark Blue        |
| &2   | Dark Green       |
| &3   | Dark Aqua        |
| &4   | Dark Red         |
| &5   | Dark Purple      |
| &6   | Gold             |
| &7   | Gray             |
| &8   | Dark Gray        |
| &9   | Blue             |
| &a   | Green            |
| &b   | Aqua             |
| &c   | Red              |
| &d   | Pink             |
| &e   | Yellow           |
| &f   | White            |
| &l   | **Bold**         |
| &m   | ~~Strike~~       |
| &n   | <u>Underline</u> |
| &o   | *Italic*         |
| &k   | Obfuscated       |
| &r   | Reset            |
```yaml
    - action: POTION_EFFECT
      Target:
        targetType: NEARBY_PLAYERS
        range: 10
      potionEffectType: SLOW
      amplifier: 2
      duration: 20
```

This will send a message to all online players, then send a message to the player who hit the boss and then also give
all players near the boss the slowness potion effect.

As you can see, the order of the actions matters. The actions are always executed in the order they are listed.

**Important**: while several actions can execute at the same time when triggered by a single event, not all actions are
meant to be executed at the same time. For instance, multiple actions that change the navigation of the boss will
probably lead to unexpected results. It is highly recommended that scripters test these actions one at a time in order
to properly understand the way each one works.
