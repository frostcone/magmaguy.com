# Действия элитного скрипта

Действия лежат в основе скрипта. Они определяют, что делает скрипт, и позволяют устанавливать пользовательские интервалы.

Действия всегда начинаются с типа действия, которое вы собираетесь выполнить. Разные типы действий служат разным функциям. Кроме того, все действия имеют цель или цели. Действия также могут иметь таймер ожидания, чтобы гарантировать, что события будут происходить с настраиваемыми задержками. Наконец, действия могут также иметь несколько других полей, специфичных для типа действия.

## Общие атрибуты

| Значения             |                                                                                 Подробности                                                                                  | Особые |
|--------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target`           |                                                      [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                                                       | ❌ |
| `wait`             |                                                      Устанавливает время ожидания (в тиках) перед запуском действий                                                      | ❌ |
| `repeatEvery`      |        Устанавливает повторение действий через заданное количество тиков. Любой скрипт, у которого задано это значение, но который не использует times, будет завершен после смерти моба, чтобы избежать лагов.         | ❌ |
| `times`            |                                                            Устанавливает количество раз, которое будет происходить действие                                                            | Требуется `repeatEvery` |
| `scripts`          |                                                         Устанавливает скрипты, которые будут выполняться в конце действия                                                          | ❌ |
| `onlyRunOneScript` |                                                       Выбирает один из `scripts` случайным образом и запускает только его.                                                       | ❌ |
| `offset`           | Эта опция находится в разделе `Target`. Позволяет сместить целевое местоположение. Смещение не работает с действиями, которые нацелены на зоны с `ZONE_FULL` или `ZONE_BORDER`. | ❌ |
| `debug`           | Эта опция находится в разделе действий скрипта. Если установлено значение true, отобразит иконки барьеров в области действия. | ❌ |

## Типы действий

### ACTION_BAR_MESSAGE

Устанавливает сообщение панели действий для целей.

| Значения |                            Подробности                            | Обязательно | Особые |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Сообщение                            | ✅ | Может использовать [Цветовые коды](#color_codes) с `&` |

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

Установит на панели действий сообщение "Привет, мир!" для всех игроков, находящихся в пределах 10 блоков от босса.

</div>

</details>

</div>

---

### BOSS_BAR_MESSAGE

Добавляет босс-бар для цели(ей).

| Значения |                            Подробности                            | Обязательно |                   Особые                    |
| --- |:-------------------------------------------------------------:| :-: |:--------------------------------------------:|
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |                      ❌                       |
| `sValue` |                            Сообщение                            | ✅ | Может использовать [Цветовые коды](#color_codes) с `&` |
| `duration` |               Продолжительность полосы босса в тиках               | ✅ |                      ❌                       |

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

Установит босс-бар с сообщением "Привет, мир!" для всех игроков, находящихся в пределах 10 блоков от босса, на 1 секунду.

</div>

</details>

</div>

---

### DAMAGE

Это способ, с помощью которого вы можете наносить урон сущностям в качестве других сущностей.

_Примечание: это изначально использует систему урона EliteMobs! Это означает, что вы увидите обычное снижение брони от элитных ударов. Подробнее об этом в разделе множителей._

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

**Важно**: чтобы сделать силы легко и автоматически масштабируемыми, урон наносится путем однократного удара босса по игроку и умножения базового урона босса на множитель.

Это означает, что множитель 1.0 соответствует обычному удару босса. 2.0 — это удар в 2 раза сильнее обычного, а 0.5 — на 50% слабее.

---

### MAKE_INVULNERABLE

Делает цель неуязвимой.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `invulnerable` |               Устанавливает, неуязвим ли босс                | ✅ |
| `duration` |       Устанавливает продолжительность неуязвимости (в тиках)       | ❌ |

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

Изменяет урон, наносимый боссу или наносимый игрокам этим боссом. Это специальное действие с несколькими особыми требованиями.

| Значения | Подробности | Обязательно |
| --- | :-: | :-: |
| `multiplier` | Множитель урона. | ✅ |

Это действие является особым и должно находиться в скрипте, который имеет прослушиватель событий для события урона. Следующие события урона являются допустимыми: `EliteMobDamagedByEliteMobEvent`, `EliteMobDamagedByPlayerEvent`, `EliteMobDamagedEvent` для событий, которые уменьшают урон, наносимый боссу, и `PlayerDamagedByEliteMobEvent` для событий, которые уменьшают урон, наносимый игрокам.

Настоятельно рекомендуется изучить, как работает условие `hasTag`, чтобы лучше всего использовать это действие. При правильном использовании можно временно сделать босса устойчивым или слабее к урону, и это может быть связано с баффами игрока, местоположением босса или многими другими факторами.

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

Увеличивает урон, наносимый боссу игроками, в 2 раза, но только если у игрока есть тег "КрутойИгрок".

</div>

</details>

</div>

---

### MESSAGE

Отправляет сообщение цели(ям).

| Значения |                            Подробности                            | Обязательно | Особые |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `sValue` |                            Сообщение                            | ✅ | Может использовать [Цветовые коды](#color_codes) с `&` |

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

Отправит сообщение в чат всем игрокам в радиусе 10 блоков от босса.

</div>

</details>

</div>

---

### NAVIGATE

Заставляет босса перемещаться (ходить) к указанной цели.

| Значения |                            Подробности                            | Обязательно | Особые |
| --- |:-------------------------------------------------------------:| :-: | :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `FinalTarget` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `velocity` | Устанавливает скорость перемещения босса. `1.0` — это значение босса, установленное в конфиге. | ❌ | ❌ |
| `bValue` | Устанавливает, следует ли боссу принудительно телепортироваться к `FinalTarget`, если перемещение не удается. | ❌ | ❌ |
| `duration` | Как долго босс должен пытаться переместиться, прежде чем сдастся. Устанавливается в тиках. По умолчанию 100 тиков. | ✅ | ❌ |

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

Заставит босса переместиться в то место, где стоял игрок, когда он ударил босса.

</div>

</details>

</div>

---

### PLACE_BLOCK

Устанавливает блок в целевом(ых) местоположении(ях) на время действия.

| Значения |                                                         Подробности                                                         | Обязательно |
| --- |:-----------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                              [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                              | ✅ |
| `material` | [Материал](#material) блока, [полный список здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | ✅ |
| `duration` |                                              Продолжительность эффекта, в тиках                                               | ❌ |

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

Установит стеклянный купол вокруг босса, который продержится 6 секунд.

_Примечание: если продолжительность не определена, установка блока будет постоянной._

</div>

</details>

</div>

---

### PLAY_ANIMATION

Воспроизводит указанную анимацию для пользовательской модели с использованием Model Engine. Требует наличия Model Engine и допустимой пользовательской модели у цели, которая запускает анимацию.

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

Установит воспроизведение боссом анимации fortnite_dance. Требует, чтобы на сервере был Model Engine, у босса была пользовательская маскировка, а у пользовательской маскировки была анимация под названием "fortnite\_dance".

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
| `pitch`  |           Устанавливает высоту воспроизводимого звука           |     ❌     |
| `volume` |           Устанавливает громкость воспроизводимого звука           |     ❌     |

[Вот удобный список всех звуков Minecraft!](https://www.digminecraft.com/lists/sound_list_pc.php) Помните, что это также может воспроизводить пользовательские звуки из пакетов ресурсов.
Когда действие нацелено на зону, действие будет воспроизводить звук для каждого блока в этой зоне. Это может сделать звук значительно громче обычного, поэтому рассмотрите возможность снижения громкости, если нацеливаетесь на зону.

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

Воспроизводит звук резонирования колоколов Minecraft в месте расположения босса.

</div>

</details>

</div>

---

### POTION_EFFECT

Применяет определенный эффект зелья к цели(ям).

| Значения |                                                       Подробности                                                       | Обязательно |
| --- |:-------------------------------------------------------------------------------------------------------------------:| :-: |
| `Target` |                            [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)                            | ✅ |
| `potionEffectType` | Тип эффекта, [допустимый список находится здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) | ✅ |
| `amplifier` |                                          Уровень эффекта зелья (начинается с 0)                                          | ✅ |
| `duration` |                                           Продолжительность эффекта (в тиках)                                            | ✅ |

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

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `Target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `vValue` |       Устанавливает вектор скорости, который будет применен        | ✅ |

*Примечание: это действие также принимает относительные векторы. Узнайте больше о том, как их использовать [здесь]($language$/elitemobs/elitescript_relative_vectors.md).*

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

Это подтолкнет всех игроков в радиусе 10 блоков от босса в воздух с силой 0,3. Это действие будет повторяться 10 раз каждые 0,5 секунды (10 тиков). Другими словами, это сделает эффект продолжительностью 5 секунд (10 раз x 10 тиков = 100 тиков).

Это создаст впечатление, что игроки прыгают.

</div>

</details>

</div>

#### vector

Векторы определяются как `vValue: x,y,z`. Например, если вы хотите, чтобы цель была подтолкнута вверх, вы можете сделать `vValue: 0,0.3,0`.

---

### RUN_COMMAND_AS_CONSOLE

Запускает команду как консоль.

| Значения |                             Подробности                             | Обязательно |
| --- |:---------------------------------------------------------------:| :-: |
| `Target` |  [Подробнее здесь]($language$/elitemobs/elitescript_targets.md)  | ✅ |
| `sValue` |                    Команда, которая будет выполнена                     | ✅ |

**Примечание: доступны заполнители! Проверьте RUN_COMMAND_AS_PLAYER, они такие же**

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

Заставляет консоль транслировать сообщение "Привет, $bossName, меня зовут $playerName. Какой у тебя уровень? $bossName, мой уровень $bossLevel".

</div>

</details>

</div>

---

### RUN_COMMAND_AS_PLAYER
`
Запускает команду от имени `игрока. Требует, чтобы целью были игроки.

| Значения |                            Подробности                            | Обязательно |
| --- |:-------------------------------------------------------------:| :-: |
| `target` | [Подробнее здесь]($language$/elitemobs/elitescript_targets.md) | ✅ |
| `sValue` |                   Команда, которая будет выполнена                    | ✅ |

**Примечание: RUN_COMMAND_AS_PLAYER и RUN_COMMAND_AS_CONSOLE используют следующие заполнители:**

| Заполнитель | Подробности | Особые |
| --- | :-: | :-: |
| `$playerName` | Отображаемое имя игрока | Цель должна быть игроком |
| `$playerX` | Расположение игрока по оси X | Цель должна быть игроком |
| `$playerY` | Расположение игрока по оси Y | Цель должна быть игроком |
| `$playerZ` | Расположение игрока по оси Z | Цель должна быть игроком |
| `$bossName` | Отображаемое имя игрока | Цель должна быть игроком |
| `$bossX` | Расположение босса по оси X | ❌ |
| `$bossY` | Расположение босса по оси Y | ❌ |
| `$bossZ` | Расположение босса по оси Z | ❌ |
| `$bossLevel` | Уровень босса | ❌ |

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
```
```yaml
        targetType: ZONE_BORDER
      particles:
        - particle: FLAME
          speed: 0.1
          amount: 1
        - particle: REDSTONE
          amount: 1
          red: 255
          green: 0
          blue: 0
        - particle: WATER_SPLASH
          amount: 3
          x: 0.5
          y: 0.2
          z: 0.5
```

<div align="center">

![elitescript_actions_particle.gif](../../../img/wiki/elitescript_actions_particle.gif)

</div>

Spawns particles on the borders of the zone defined. The particles will be a flame with speed 0.1. A redstone particle with red colour (255,0,0). And finally, a water splash particle with 0.5 x, 0.2 y and 0.5 z offset.

</div>

</details>

</div>

---

### SUMMON_MOB

Summons a mob of a type at the target.

| Values      |                            Details                            | Mandatory |
|-------------|:-------------------------------------------------------------:|:---------:|
| `Target`    | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `mobType`   |              Entity type, [list is here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)             |     ✅     |
| `amount`    |                   Amount of mobs to summon                    |     ✅     |
| `level`     |                   Sets the level of the summoned mob. The summoned mob level will never be higher than the EliteMob's level                  |     ❌     |
| `scripts`   |                   Scripts that will be run on each mob that is spawned. This only applies to the mob, not the source of the mob.                      |     ❌     |
| `onlyRunOneScript`   |         Run only one script from the list.           |     ❌     |
| `offset`   |   This option goes under `Target`. Allows you to offset the target location. Offset does not work with actions that are targeting zones with `ZONE_FULL` or `ZONE_BORDER`. |    ❌    |
| `bValue`     |  This option goes under `Target`. Sets if the summoned mob should be riding on top of the caster |    ❌    |

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
      mobType: ZOMBIE
      amount: 3
      scripts:
      - summonscript
  summonscript:
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: SELF
      duration: 60
```

Summons 3 zombies at the location of the boss. Each zombie will then be on fire for 3 seconds (60 ticks).

</div>

</details>

</div>

---

### TELEPORT

Teleports an entity.

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
        range: 10
```

Teleports the boss to a random player within a 10 block radius.

</div>

</details>

</div>

---

### TRANSFORM_MOB

Transforms the mob into a different type of mob.

| Values   |                            Details                            | Mandatory |
|----------|:-------------------------------------------------------------:|:---------:|
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) |     ✅     |
| `mobType`   |              Entity type, [list is here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)            |     ✅     |
| `duration` |           Sets the duration of the transformation (ticks)           |     ❌     |
| `retainName` |           Sets if the mob should retain its custom name from the transformed mob           |     ❌     |
| `retainLevel` | Sets if the mob should retain its custom level from the transformed mob | ❌ |
| `scripts`   |                   Scripts that will be run on each mob that is spawned. This only applies to the transformed mob, not the source of the mob.                      |     ❌     |
| `onlyRunOneScript`   |         Run only one script from the list.           |     ❌     |

**Note: if no duration is set, then the mob will be transformed permanently.**

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
    - action: TRANSFORM_MOB
      Target:
        targetType: SELF
      mobType: CREEPER
      duration: 120
      retainLevel: true
```

Transforms the boss into a creeper for 6 seconds (120 ticks). Retains the boss level.

</div>

</details>

</div>

---

### ZONE

This action type allows you to define a zone that all other actions will use as targets.

| Values |                         Details                          | Mandatory | Special |
| --- |:---------------------------------------------------------:| :-: | :-: |
| `shape` |                       Shape of the zone                       | ✅ | [More here](#zone-shapes) |
| `radius` |                           Radius                          | ✅ | ❌ |
| `borderRadius`|                           Border Radius                          | ❌ | ❌ |
| `height` |                   Height of the zone                     | ❌ | ❌ |
| `Target` | [More info here]($language$/elitemobs/elitescript_targets.md) | ✅ | ❌ |
| `track` |     Sets if the zone should track the source location    | ❌ | ❌ |

<div align="center">

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yaml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Zone:
      shape: CYLINDER
      radius: 5
      height: 10
      Target:
        targetType: SELF
    Actions:
    - action: MESSAGE
      Target:
        targetType: ZONE_FULL
      sValue: "&aI am in a zone!"
```

Defines a zone to be a cylinder with radius 5 and height 10 in the source location. Every action that uses `ZONE_FULL` targetType will now reference this zone, in this case, every block will get the message.

</div>

</details>

</div>

#### Zone shapes

The following are valid zone shapes:

-   `CYLINDER` - Standard cylinder
-   `SPHERE` - Standard sphere
-   `DOME` - A half-sphere or dome shape
-   `CUBOID` - A rectangular prism
-   `BOX` - A box shape, will have the same size on all axis.

## Material

This is a list of block names, and you will find many [more at the Spigot Documentation](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html). Note that block names are CASE SENSITIVE. Here are some of the more relevant examples:

-   AIR
-   STONE
-   DIRT
-   GRASS_BLOCK
-   GLASS
-   WATER
-   LAVA
-   SAND
-   GRAVEL
-   COBBLESTONE
-   OAK_PLANKS
-   SPRUCE_PLANKS
-   BIRCH_PLANKS
-   JUNGLE_PLANKS
-   ACACIA_PLANKS
-   DARK_OAK_PLANKS

---

## Color codes

Color codes use the `&` symbol followed by a number or a letter. Here's a list:

-   `&0` Black
-   `&1` Dark Blue
-   `&2` Dark Green
-   `&3` Dark Aqua
-   `&4` Dark Red
-   `&5` Dark Purple
-   `&6` Gold
-   `&7` Gray
-   `&8` Dark Gray
-   `&9` Blue
-   `&a` Green
-   `&b` Aqua
-   `&c` Red
-   `&d` Pink
-   `&e` Yellow
-   `&f` White
-   `&k` Obfuscated
-   `&l` Bold
-   `&m` Strikethrough
-   `&n` Underline
-   `&o` Italic
-   `&r` Reset
```yaml
    - action: POTION_EFFECT
      Target:
        targetType: DIRECT_TARGET
      potionEffectType: POISON
      amplifier: 1
      duration: 100
```

This will message all online players and also the player that hit the boss with different messages, as well as poisoning the player that hit the boss.

_Note: All actions will run at the same time. The order of actions does not matter if you don't add wait times._
