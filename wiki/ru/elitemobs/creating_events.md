[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Это руководство предназначено для EliteMobs 7.3.4 и более поздних версий.

# Что такое пользовательские события?

Под пользовательскими событиями здесь понимаются события, которые происходят случайным образом в игре, будь то на основе действий игрока или по таймеру. Плагин поставляется с предустановленным набором пользовательских событий, таких как событие Балрога, событие Кракена и событие Гоблина-Сокровища, и это лишь некоторые из них.

Эта система называется **пользовательскими** событиями, потому что события можно не только настраивать, но и создавать с нуля. Ниже приводится руководство о том, как создавать и настраивать собственные события.

# Общие параметры конфигурации

<div align="center">

Следующие параметры могут/должны использоваться как для событий по действию, так и для событий по таймеру.

***

### isEnabled

Устанавливает, включено ли событие.

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `isEnabled` | [Boolean](#boolean) |   `true`   |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventType` | `BREAK_BLOCK` / `FISH` / `TILL_SOIL` / `TIMED` |     нет     |

*Обратите внимание, что `BREAK_BLOCK`, `FISH` и `TILL_SOIL` являются [Событиями по действию](#action-events), а `TIMED` является [Событиями по таймеру](#timed-events)*

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

Устанавливает список боссов, которые будут порождаться. **Обязательно!**

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `bossFilenames` | [Список строк](#string_list) |     нет     |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `announcementPriority` |  [Integer](#integer) |     нет     |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `startMessage` | [Строка](#string) |     нет     |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `endMessage` | [Строка](#string) |     нет     |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventStartCommands` | [Список строк](#string_list) |     нет     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventStartCommands:
- say Событие началось!!
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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventEndCommands` | [Список строк](#string_list) |     нет     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
eventEndCommands:
- say Событие закончилось, так грустно.
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

## События по действию

<div align="center">

События, которые имеют шанс запуститься при выполнении определенного действия, например, при разрушении блока или рыбалке.

### chance

Устанавливает шанс того, что событие произойдет при выполнении действия.

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `chance` | Значение от `0.0` до `1.0` |   `0`   |

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

Устанавливает список материалов для проверки, если действие установлено как `BREAK_BLOCK`.

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `breakableMaterials` | Список [материалов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) |     нет     |

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

Устанавливает 0,1% шанс запуска события при разрушении блока угольной руды, если тип события - `BREAK_BLOCK`.

</details>

</div>

## События по таймеру

<div align="center">

События по таймеру - это события, которые происходят через настраиваемые промежутки времени. После того, как время восстановления события по таймеру истечет, из списка событий по таймеру выбирается случайное событие на основе веса события.

### spawnType

Устанавливает [Пользовательский спавн]($language$/elitemobs/creating_spawns.md), используемый событием, который определяет, где может появиться босс.

| Ключ          |        Значения         | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `spawnType` | [Имя файла](#filename) |     нет     |

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

Устанавливает время в минутах, через которое это событие может быть выбрано снова.

| Ключ          |        Значения         | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `localCooldown` |  [Integer](#integer) |   `0`   |

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

Устанавливает время в минутах, через которое будет выбрано следующее событие.

| Ключ          |        Значения         | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `globalCooldown` |  [Integer](#integer) |   `0`   |

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

Устанавливает вес события, влияющий на вероятность его выбора по сравнению с другими событиями. **Рекомендуется: 100**.

| Ключ          |        Значения         | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `weight` |  [Double](#double) |   `0`   |

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

| Ключ          |        Значения         | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventDuration` |  [Integer](#integer) |   `0`   |

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

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventEndsWithBossDeath` | [Boolean](#boolean) |   `true`   |

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

Устанавливает игровое время, в которое закончится событие.

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
| `eventEndTime` | [Boolean](#boolean) |   `true`   |

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

Устанавливает минимальное количество игроков онлайн, прежде чем начнется событие.

| Ключ          |       Значения          | По умолчанию |
| ------------- | :---------------------: | :----------: |
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

*Обратите внимание, что события ставятся в очередь, а это означает, что они начнутся только после того, как будут выполнены условия, определенные в `customSpawn`.*

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
