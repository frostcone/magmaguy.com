[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Этот гайд для EliteMobs 7.3.4 и выше

# Что такое Кастомные События?

Кастомные События здесь - это события, которые происходят случайно в игре, будь то на основе действий игроков или с помощью таймера. Плагин поставляется с предустановленными Кастомными Событиями, например, событием Balrog, событием Kraken и событиями Goblin'а с сокровищами, чтобы назвать несколько.

Эта система называется **Custom** Events, потому что события можно не только настраивать, но и создавать с нуля. Ниже приводится руководство по созданию и настройке собственных событий.

# Общие настройки конфигурации

<div align="center">

Следующие настройки можно/следует использовать как для событий действий, так и для событий по таймеру.

***

### isEnabled

Включает или выключает событие.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

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

Тип события.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` | none  |

*Обратите внимание, что `BREAK_BLOCK`, `FISH` и `TILL_SOIL` - это [События Действий](#action-events), а `TIMED` - это [События по Таймеру](#timed-events)*

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

Список боссов, которые будут появляться. **Обязательно!**

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `bossFilenames` | [String List](#string_list) | none  |

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

Настройка [приоритета объявления]($language$/elitemobs/creating_bosses.md&section=announcementpriority).

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `announcementPriority` | [Integer](#integer) |  none   |

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

Сообщение, которое отправляется при начале события.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `startMessage` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
startMessage: An event has started!
```

<div align="center">

![create_events_start_message.jpg](../../../img/wiki/create_events_start_message.jpg)

</div>

</div>

</details>

***

### endMessage

Сообщение, которое отправляется при окончании события.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `endMessage` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
endMessage: An event has ended!
```

<div align="center">

![create_events_end_message.jpg](../../../img/wiki/create_events_end_message.jpg)

</div>

</div>

</details>

***

### eventStartCommands

Команды, которые выполняются при начале события.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `eventStartCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventStartCommands:
- say The event now starts!!
- "$chance=0.5$ say What a spawn!"
```

<div align="center">

![create_events_start_commands.jpg](../../../img/wiki/create_events_start_commands.jpg)

</div>

</div>

</details>

***

### eventEndCommands

Команды, которые выполняются при окончании события.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `eventEndCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventEndCommands:
- say The event ends, so sad.
- "$chance=0.5$ say Too slow bud!"
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
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
```

</div>

</details>


</div>

## События Действий

<div align="center">

События, которые имеют шанс быть запущенными при выполнении определенного действия, например, при разрушении блока или рыбалке.

### chance

Шанс того, что событие произойдет при выполнении действия.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `chance` | Значение от `0.0` до `1.0` |  `0`   |

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

Список материалов, которые необходимо проверить, если действие установлено как `BREAK_BLOCK`.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `breakableMaterials` | Список  [материалов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |  none   |

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

Устанавливает 0.1% шанс запуска события при разрушении блока угольной руды, предполагая, что тип события - `BREAK_BLOCK`.

</details>

</div>

## События по Таймеру

<div align="center">

События по таймеру - это события, которые происходят с настраиваемыми интервалами. После того как время ожидания для события по таймеру истечет, случайное событие по таймеру выбирается из списка событий по таймеру, исходя из веса события.

### spawnType

Настройка [Custom Spawn]($language$/elitemobs/creating_spawns.md), используемая событием, которая определяет, где может появиться босс.

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `spawnType` | [Filename](#filename) |  none   |

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

Время (в минутах) до того, как это событие можно будет выбрать снова.

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `localCooldown` | [Integer](#integer) |  `0`   |

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

Время (в минутах) до того, как будет выбрано следующее событие.

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `globalCooldown` | [Integer](#integer) |  `0`   |

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

Вес события, влияющий на шанс его выбора по сравнению с другими событиями. **Рекомендуется: 100**.

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `weight` | [Double](#double) |  `0`   |

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

Максимальная продолжительность события (в минутах).

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `eventDuration` | [Integer](#integer) |  `0`   |

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

Окончание события при смерти босса.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `eventEndsWithBossDeath` | [Boolean](#boolean) | `true`  |

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

Время в игре, в которое событие завершится.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `eventEndTime` | [Boolean](#boolean) | `true`  |

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

Минимальное количество игроков онлайн, чтобы событие началось.

| Ключ       |       Значения        | По умолчанию |
|-----------|:-------------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

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

*Обратите внимание, что события ставятся в очередь, то есть они начинаются только после того, как условия, заданные в `customSpawn`, будут выполнены.*

<details> 

<summary align="center"><b>Пример конфигурации события</b></summary>

<div align="left">

```yml
isEnabled: true
bossFilenames:
- "cool_boss.yml"
- "other_cool_boss.yml"
announcementPriority: 3
startMessage: "Cool event is starting!"
endMessage: "Cool event is ending!"
eventStartCommands:
- say The event started!
eventEndCommands:
- say The event ended!
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

