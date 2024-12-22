[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Это руководство для EliteMobs 7.3.4 и более поздних версий.

# Что такое Пользовательские События?

Под Пользовательскими Событиями здесь подразумеваются события, которые происходят случайным образом в игре, будь то на
основе действий игрока или с таймером. Плагин поставляется с предустановленным набором Пользовательских Событий, таких
как событие Балрога, событие Кракена и события Гоблина-Сокровища, и это лишь некоторые из них.

Эта система называется **Пользовательскими** Событиями, потому что события можно не только настраивать, но и создавать с
нуля. Ниже приведено руководство о том, как создавать и настраивать собственные события.

# Общие настройки конфигурации

<div align="center">

Следующие настройки можно/следует использовать как для действий, так и для событий с таймером.

***

### isEnabled

Устанавливает, включено ли событие.

| Ключ        |      Значения       | По умолчанию |
|-------------|:-------------------:|:------------:|
| `isEnabled` | [Boolean](#boolean) |    `true`    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### eventType

Устанавливает тип события.

| Ключ        |                    Значения                    | По умолчанию |
|-------------|:----------------------------------------------:|:------------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` |     none     |

*Обратите внимание, что `BREAK_BLOCK`, `FISH` и `TILL_SOIL` являются [Событиями Действий](#action-events), а `TIMED`
является [Событиями по Таймеру](#timed-events)*

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventType: BREAK_BLOCK
```

</div>

</details>

***

### bossFilenames

Устанавливает список боссов, которые будут порождены. **Обязательно!**

| Ключ            |           Значения           | По умолчанию |
|-----------------|:----------------------------:|:------------:|
| `bossFilenames` | [Список Строк](#string_list) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossFilenames:
- balrog.yml
- my_event_boss.yml
```

</div>

</details>

***

### announcementPriority

Устанавливает [приоритет объявления]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Ключ                   |        Значения         | По умолчанию |
|------------------------|:-----------------------:|:------------:|
| `announcementPriority` | [Целое число](#integer) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 1
```

</div>

</details>

***

### startMessage

Устанавливает сообщение, отправляемое в начале события.

| Ключ           |     Значения      | По умолчанию |
|----------------|:-----------------:|:------------:|
| `startMessage` | [Строка](#string) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
startMessage: Событие началось!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Устанавливает сообщение, отправляемое в конце события.

| Ключ         |     Значения      | По умолчанию |
|--------------|:-----------------:|:------------:|
| `endMessage` | [Строка](#string) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
endMessage: Событие закончилось!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Устанавливает команды, которые выполняются в начале события.

| Ключ                 |           Значения           | По умолчанию |
|----------------------|:----------------------------:|:------------:|
| `eventStartCommands` | [Список Строк](#string_list) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventStartCommands:
- say Событие теперь начинается!!
- "$chance=0.5$ say Какой спавн!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Устанавливает команды, которые выполняются в конце события.

| Ключ               |           Значения           | По умолчанию |
|--------------------|:----------------------------:|:------------:|
| `eventEndCommands` | [Список Строк](#string_list) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventEndCommands:
- say Событие заканчивается, как грустно.
- "$chance=0.5$ say Слишком медленный, приятель!"
```

<div align="center">

![create_events_end_commands.jpg](../../../img/wiki/create_events_end_commands.jpg)

</div>

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Пример конфигурации события</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Крутое событие начинается!"
endMessage: "Крутое событие заканчивается!"
eventStartCommands:
- say Событие началось!
eventEndCommands:
- say Событие закончилось!
```

</div>

</details>

</div>

## События Действий

<div align="center">

События, которые имеют шанс запуститься при выполнении определенного действия, такого как разрушение блока или рыбалка.

### chance

Устанавливает шанс срабатывания события при выполнении действия.

| Ключ     |          Значения          | По умолчанию |
|----------|:--------------------------:|:------------:|
| `chance` | Значение от `0.0` до `1.0` |     `0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
chance: 0.001
```

</div>

</details>

***

### breakableMaterials

Устанавливает список материалов для проверки, если действие установлено в значение `BREAK_BLOCK`.

| Ключ                 |                                        Значения                                        | По умолчанию |
|----------------------|:--------------------------------------------------------------------------------------:|:------------:|
| `breakableMaterials` | Список [материалов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
breakableMaterials:
- BEEHIVE
- BIRCH_WOOD
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Пример конфигурации</b></summary>

<div align="left">

```yml
chance: 0.001
breakableMaterials:
- COAL_ORE
```

</div>

Устанавливает шанс срабатывания события 0,1% при разрушении блока угольной руды, предполагая, что тип события
равен `BREAK_BLOCK`.

</details>

</div>

## События по Таймеру

<div align="center">

События по таймеру — это события, которые происходят через настраиваемые промежутки времени. После завершения времени
восстановления события по таймеру случайное событие по таймеру выбирается из списка событий по таймеру на основе веса
события.

### spawnType

Устанавливает [Пользовательский Спавн]($language$/elitemobs/creating_spawns.md), используемый событием, который
определяет, где может появиться босс.

| Ключ        |        Значения        | По умолчанию |
|-------------|:----------------------:|:------------:|
| `spawnType` | [Имя файла](#filename) |     none     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnType: nether_spawn.yml
```

</div>

</details>

***

### localCooldown

Устанавливает количество времени, в минутах, до того, как это событие можно будет выбрать снова.

| Ключ            |        Значения         | По умолчанию |
|-----------------|:-----------------------:|:------------:|
| `localCooldown` | [Целое число](#integer) |     `0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
localCooldown: 120
```

</div>

</details>

***

### globalCooldown

Устанавливает количество времени, в минутах, до выбора следующего события.

| Ключ             |        Значения         | По умолчанию |
|------------------|:-----------------------:|:------------:|
| `globalCooldown` | [Целое число](#integer) |     `0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
globalCooldown: 60
```

</div>

</details>

***

### weight

Устанавливает вес события, влияющий на вероятность его выбора среди других событий. **Рекомендуется: 100**.

| Ключ     |         Значения         | По умолчанию |
|----------|:------------------------:|:------------:|
| `weight` | [Дробное число](#double) |     `0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
weight: 60.5
```

</div>

</details>

***

### eventDuration

Устанавливает максимальную продолжительность события в минутах.

| Ключ            |        Значения         | По умолчанию |
|-----------------|:-----------------------:|:------------:|
| `eventDuration` | [Целое число](#integer) |     `0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventDuration: 30
```

</div>

</details>

***

### eventEndsWithBossDeath

Устанавливает, заканчивается ли событие со смертью босса.

| Ключ                     |      Значения       | По умолчанию |
|--------------------------|:-------------------:|:------------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) |    `true`    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventEndsWithBossDeath: true
```

</div>

</details>

***

### eventEndTime

Устанавливает игровое время, в которое событие закончится.

| Ключ           |      Значения       | По умолчанию |
|----------------|:-------------------:|:------------:|
| `eventEndTime` | [Boolean](#boolean) |    `true`    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventEndTime: true
```

</div>

</details>

***

### minimumPlayerCount

Устанавливает минимальное количество игроков онлайн, прежде чем событие начнется.

| Ключ                 |        Значения         | По умолчанию |
|----------------------|:-----------------------:|:------------:|
| `minimumPlayerCount` | [Целое число](#integer) |     `1`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
minimumPlayerCount: true
```

</div>

</details>

</div>

***

*Обратите внимание, что события становятся в очередь, что означает, что они начнутся только после того, как будут
выполнены условия, определенные в `customSpawn`.*

<details> 

<summary align="center"><b>Пример конфигурации событий</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Крутое событие начинается!"
endMessage: "Крутое событие заканчивается!"
eventStartCommands:
- say Событие началось!
eventEndCommands:
- say Событие закончилось!
customSpawn: "myCoolSpawn.yml"
localCooldown: 30
globalCooldown: 15
weight: 100
eventDuration: 20
eventEndsWithBossDeath: true
eventEndTime: 10000
minimumPlayerCount: 5
```

</div>

</details>

</div>
