[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание кастомных подкреплений

Если вы заинтересованы в вызове элит во время боя для усиления босса, этот гайд подробно расскажет об этом.

## Шаги по созданию кастомного босса:

1. Создайте основного кастомного босса, который будет вызывать вашего кастомного босса.
2. Создайте кастомного босса для подкреплений. Имейте в виду, что кастомные боссы могут быть сильнее, чем ванильные мобы, но они также могут быть слабее.
3. Добавьте правильную строку подкрепления в конфигурационный файл.

## Создание строки подкрепления

Допустим, у вас есть кастомный босс со следующим форматом:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
```

И вы хотите добавить к нему подкрепление. Вот как может выглядеть одно такое подкрепление:

```yaml
- summonType:ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Чтобы сделать его действительным, добавьте его в список powers:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

Теперь подкрепление добавлено к сущности босса. Однако, как вы можете видеть, есть несколько опций, которые вы можете настроить. Давайте разберемся с ними.

## Все опции кастомных подкреплений

*Совет: Вы также можете использовать EliteScript для вызова подкреплений, подробнее об этом [здесь]($language$/elitemobs/elitescript_actions.md&section=summon_reinforcement).*

<div align="center">

### summonType

Это обязательное поле. Оно определяет, когда должно появиться подкрепление.

| Ключ    |   Значения    | По умолчанию  |
|--------|:-----------:|:--------:|
| `summonType` | Special [1] | `ON_HIT` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
summonType: ON_HIT
```

</div>

</details>

#### Special [1]

| Ключ | Описание                                                                                       |
|-----|---------------------------------------------------------------------------------------------------|
|  `ONCE`   | Подкрепление появляется только один раз, в первый раз, когда босс получает урон. (может зависеть от % шанса) |
| `ON_HIT`  | Подкрепление появляется при каждом попадании по боссу (может зависеть от % шанса)             |
| `ON_COMBAT_ENTER`    | Подкрепление появляется, когда босс вступает в бой (1)                                                                                                  |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL`    |  Специально для размещения конечных кристаллов для боев с драконами, когда босс вступает в бой(1)                                                                                                 |
| `GLOBAL`    |  Подкрепления появляются для каждого игрока в том же мире, что и босс. Подкрепления будут появляться рядом с игроками, независимо от того, как далеко они находятся от босса. Для работы требуется, чтобы поле `customSpawn` было установлено!                                                                                                 |

_(1) Боссы вступают в бой, когда их атакуют игроки или когда они обнаруживают игрока в пределах досягаемости._

***

### filename

Это обязательное поле, которое определяет, какое подкрепление должно появиться. Единственное исключение, когда это поле не является обязательным, - это использование настройки `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`, так как конечные кристаллы не являются элитами.

| Ключ    |        Значения         | По умолчанию |
|--------|:---------------------:|:-------:|
| `filename` | [Filename](#filename) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
filename: test_boss.yml
```

</div>

</details>

</div>

***

**Минимальная жизнеспособность**

`summonType: SUMMON_TYPE` и `filename: filename.yml` достаточно сами по себе, чтобы создать  Custom Reinforcement. Следующий пример демонстрирует это.

<div align="center">

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: binder_of_worlds_phase_1_parkour_reinforcement.yml
```

*Однако, если вы хотите или нуждаетесь в чем-то более сложном, продолжайте читать ниже, чтобы узнать, что еще вы можете сделать с этими опциями.*

</div>

</details>

</div>

<div align="center">

***

### chance

Это необязательное поле конфигурации, дополняющее опции `summonType` `ONCE` и `ON_HIT`. Оно представляет собой шанс появления  Custom Reinforcement при атаке босса.

| Ключ    |        Значения         | По умолчанию |
|--------|:---------------------:|:-------:|
| `chance` | [Double](#double) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
chance: 0.5
```
*Представляет собой 50% шанс появления Custom Reinforcement.*

</div>

</details>

***

### location

`location: x,y,z` - это необязательное поле конфигурации, которое позволяет администраторам сдвигать местоположение подкрепления на определенное количество блоков. Вот основные концепции, которые вам нужно знать об этой опции:

**Местоположение сдвига является относительным.** Это означает, что `location: 0,10,0`  вызовет появление босса точно на 10 блоков выше босса, а не по координатам мира 0,10,0.


**Относительное местоположение отличается для региональных боссов.** Региональные боссы всегда будут использовать свою точку появления в качестве точки отсчета для относительного местоположения, то есть, если вы знаете, где находится точка появления босса, и считаете блоки, вы можете сделать так, чтобы боссы-подкрепления появлялись в определенных местах. В логово Binder of Worlds это используется для вызова боссов башни испытаний в очень конкретных блочных позициях, независимо от того, где находится босс-дракон.


**Боссы будут появляться внутри блоков, если вы ошибетесь в измерении расстояний.**

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `location` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
location: 0,10,0
```
*Для не регионального  Custom Boss  подкрепление появится точно на 10 блоков выше босса, независимо от того, где он может быть.*

*Для регионального  Custom Boss  подкрепление появится точно на 10 блоков выше точки появления регионального босса, независимо от того, где находится босс.*

</div>

</details>

_**Важно: Это обязательное поле именно для `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`!**_

***

### lightningRod

Специальная настройка, которая полезна только для `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Дает конечным кристаллам способность поражать молнией землю вокруг себя с задержкой. 

Она не может быть использована с другими  Custom Reinforcements, так как они должны полагаться на способности для такого рода действий.

| Ключ    |       Значения        | По умолчанию |
|--------|:-------------------:|:-------:|
| `lightningRod` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
lightningRod: false
```

</div>

</details>

***

### inheritAggro

Необязательное поле конфигурации, которое заставляет  Custom Reinforcements наследовать уровни угрозы босса. 

Это особенно полезно, когда вы хотите, чтобы подкрепления, которые появляются, атаковали того, кто нанес больше всего урона.

| Ключ    |       Значения        | По умолчанию |
|--------|:-------------------:|:-------:|
| `inheritAggro` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
inheritAggro: false
```

</div>

</details>

***

### amount

Необязательное поле конфигурации, которое задает количество подкреплений, которые появятся.

| Ключ    |       Значения        | По умолчанию |
|--------|:-------------------:|:-------:|
| `amount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
amount: 1
```

</div>

</details>

***

### spawnNearby

Необязательное поле конфигурации, которое определяет, должно ли  Custom Reinforcement появиться поблизости, а не сверху босса или в определенном относительном местоположении. 

Этот метод должен правильно учитывать вариации ландшафта и не создавать боссов внутри стен, хотя в некоторых случаях это может привести к их появлению за стенами, если зона боя слишком маленькая. Имеет радиус ~30 блоков.

| Ключ    |       Значения        | По умолчанию |
|--------|:-------------------:|:-------:|
| `spawnNearby` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnNearby: false
```

</div>

</details>

***

### inheritLevel

Необязательное поле конфигурации, которое определяет, должно ли  Custom Reinforcement наследовать уровень  Custom Boss, который оно усиливает.

| Ключ    |       Значения        | По умолчанию |
|--------|:-------------------:|:-------:|
| `inheritLevel` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
inheritLevel: false
```

</div>

</details>

***

### customSpawn

Поле конфигурации, которое используется только для глобальных подкреплений. Оно использует настройки  custom spawn, чтобы задать, где будут появляться подкрепления. 

Это можно использовать, чтобы сделать так, чтобы подкрепления могли появляться на поверхности, в местах со светом, в определенных биомах и так далее. Проверьте страницу вики о  [Custom Spawns]($language$/elitemobs/creating_spawns.md) для получения более подробной информации.

| Ключ    |        Значения         | По умолчанию |
|--------|:---------------------:|:-------:|
| `customSpawn` | [Filename](#filename) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
customSpawn: normal_surface_spawn.yml
```

</div>

</details>

</div>

## Создание крупного подкрепления

Давайте создадим пример подкрепления, используя большинство предыдущих полей:

```yaml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
```

Это делает следующее:

- Создает  Custom Reinforcement
-  Custom Reinforcement  появится, когда  Custom Boss  вступит в бой (`summonType: ON_COMBAT_ENTER`)
-  Custom Reinforcement, который будет вызван, будет тем, который находится в `test_boss.yml` (`filename: test_boss.yml`)
-  Custom Reinforcement  появится в радиусе 30 блоков от текущего местоположения  Custom Boss  (`spawnNearby: true`)
-  Custom Reinforcement  наследует аггро  Custom Boss, которого он усиливает, то есть будет атаковать игрока, который нанес больше всего урона (`inheritAggro: true`)
- Независимо от настройки в `test_boss.yml`,  Custom Reinforcement  будет иметь тот же уровень, что и  Custom Boss, которого он усиливает (`inheritLevel: true`)

```yaml
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

Это делает следующее:

- Создает  Custom Reinforcement
-  Custom Reinforcement  будет Конечным Кристаллом, который будет размещен, когда начнется бой (`summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`)
- Конечный Кристалл поразит землю вокруг себя с задержкой (`lightningRod: true`)

Теперь применим это к  Custom Boss:

```yaml
isEnabled: true
entityType: ENDER_DRAGON
name: $eventBossLevel &eBinder of Worlds
level: 200
powers:
- ender_dragon_arrow_bombardment.yml
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  spawnNearby: true
  inheritAggro: true
  inheritLevel: true
- summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL
  location: -80,10,0
  lightningRod: true
```

И все! Вот еще несколько советов:

- Поля можно задавать в любом порядке, хотя рекомендуется всегда ставить `summonable` первым!
- Это большое улучшение по сравнению со старой системой подкреплений, которая больше не указана. Не рекомендуется полагаться на нее в данный момент, так как она может перестать работать в будущем.

