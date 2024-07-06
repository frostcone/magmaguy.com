[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание Арен

<div align="center">

### isEnabled

Включает или выключает арену.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
|`isEnabled`| [Boolean](#boolean) | `true`    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### arenaName


Название арены.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
|`arenaName`| [String](#string) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arenaName: Bedrock Arena
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Первый угол арены.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
|`corner1`| [Location](#serialized_location) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

На этом изображении `corner1` обозначен *зелёной шерстью*, а `corner2` - *красной шерстью*. Эта конфигурация определяет область между ними как арену, обозначенную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Второй угол арены, должен быть диаметрально противоположным `corner1`.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `corner2` | [Location](#serialized_location) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

На этом изображении `corner1` обозначен *зелёной шерстью*, а `corner2` - *красной шерстью*. Эта конфигурация определяет область между ними как арену, обозначенную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Точка входа на арену.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `startLocation` | [Location](#serialized_location) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
startLocation: my_arena_world,1,50,1,0,0
```

</div>

</details>

***

### exitLocation

Точка выхода с арены.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `exitLocation` | [Location](#serialized_location) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
exitLocation: my_world,1,50,1,0,0
```

</div>

</details>

***

### waveCount

Количество волн на арене.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `waveCount` | [Integer](#integer) | none    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
waveCount: 10
```

</div>

</details>

***

### delayBetweenWaves

Задержка, в секундах, между волнами.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
delayBetweenWaves: 5
```

</div>

</details>

***

### spawnPoints

Локации спавна боссов арены.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `spawnPoints` | [String List](#string_list) [1] |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnPoints:
- name=north:location=my_arena_world,219.5,71,273.5
- name=south:location=my_arena_world,219.5,71,316.5
- name=west:location=my_arena_world,197.5,71,295.5
- name=east:location=my_arena_world,240.5,71,295.5
- name=center:location=my_arena_world,219.5,71,295.5
```

</div>

</details>

***

### bossList

Список боссов, которые появляются во время волн арены. Арены EliteMobs поддерживают появление мобов Mythic Mobs в аренах.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `bossList` | [String List](#string_list) [2] |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

В этом примере, волна 1 будет генерировать одного босса в точке спавна на севере и одного босса в точке спавна на юге. Затем, на волне 2, будет генерироваться мифический босс на уровне 10 в центральной точке.

Обратите внимание, что вы также можете заставить боссов EliteMobs иметь определенный уровень, но рекомендуется задать их уровень в их конфигурационном файле.

</div>

</details>

***

### rawArenaReward

Настройки наград, выдаваемых в конце волн.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `rawArenaReward` | [Универсальная таблица лута EliteMobs]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
rawArenaReward:
- filename=enchanted_book_damage_all.yml:wave=5:chance=0.25
- filename=elite_scrap_tiny.yml:wave=1:chance=0.5:amount=5
- currencyAmount=3:wave=3
- level=5:filename=summon_merchant_scroll.yml:wave=5
- filename=magmaguys_toothpick.yml:itemlevel=10:wave=10:chance=0.95
```

</div>

</details>

***

### minimumPlayerCount

Минимальное количество игроков, которое должно быть на арене, чтобы она началась.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `minimumPlayerCount` | [Integer](#integer) |   `1`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
minimumPlayerCount: 1
```

</div>

</details>

***

### maximumPlayerCount

Максимальное количество игроков, которое может быть на арене.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `maximumPlayerCount` | [Integer](#integer) |  `100`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
maximumPlayerCount: 100
```

</div>

</details>

***

### arenaMessages

Сообщения, которые отображаются между волнами.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `arenaMessages` | Special [3] |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fTime for wave one!"
- wave=2:message="&a[Arena Announcer] &fWow, wave two already."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Определяет, использует ли арена цилиндрическую форму (по умолчанию - кубоид).

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `cylindricalArena` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
cylindricalArena: false
```

</div>

</details>

***

### permission

Разрешение, необходимое для участия в арене.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `permission` | [String](#integer) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
permission: mypermission.arena
```

</div>

</details>

***

</div>


## Special [1] 
Точки спавна: Использует следующий формат: `name=pointName:location=world_name,x,y,z`.

## Special [2] 
Список боссов: Использует следующий формат: `wave=x:spawnPoint=Y:boss=bossfilename.yml`.

## Special [3] 
Сообщения арены: Использует следующий формат: `wave=X:message=your message here`.

<details> 

<summary align="center"><b>Пример конфигурации арены</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Example Arena
corner1: my_arena_world,0,0,0,0,0
corner2: my_arena_world,50,50,50,0,0
startLocation: my_arena_world,25,0,25,0,0
exitLocation: my_minecraft_world,234,44,245,0,0
waveCount: 5
delayBetweenWaves: 5
spawnPoints:
  - name=north:location=my_arena_world,40.5,0,0
  - name=south:location=my_arena_world,10.5,0,0
  - name=west:location=my_arena_world,0,0,40.5
  - name=east:location=my_arena_world,0,0,10.5
  - name=center:location=my_arena_world,25.5,0,25.5
bossList:
  - wave=1:spawnPoint=north:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=center:boss=example_arena_wave_1_mob.yml
  - wave=1:spawnPoint=south:boss=example_arena_wave_1_mob.yml
  - wave=2:spawnPoint=center:boss=example_arena_wave_2_mob.yml
  - wave=3:spawnPoint=east:boss=example_arena_wave_3_mob.yml
  - wave=3:spawnPoint=west:boss=example_arena_wave_3_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=4:spawnPoint=center:boss=example_arena_wave_4_mob.yml
  - wave=5:spawnPoint=center:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=south:boss=example_arena_wave_5_mob.yml
  - wave=5:spawnPoint=west:boss=example_arena_wave_5_mob.yml
rawArenaReward:
  - currencyAmount=5:wave=1
  - currencyAmount=10:wave=2
  - currencyAmount=15:wave=3
  - currencyAmount=20:wave=4
  - currencyAmount=25:wave=5
  - filename=magmaguys_toothpick.yml:itemlevel=5:wave=5:chance=0.5
minimumPlayerCount: 1
maximumPlayerCount: 3
arenaMessages:
  - wave=1:message=&d[Arena NPC] &fWow! Wave 1!
  - wave=2:message=&d[Arena NPC] &fAmazing it is wave 2!
  - wave=3:message=&d[Arena NPC] &fWave 3 is now on!
  - wave=4:message=&d[Arena NPC] &fWave 4 already!
  - wave=5:message=&d[Arena NPC] &fWell it is all over after this one.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>Разбор примера</b></summary>

<div align="left">

Давайте рассмотрим этот пример сверху и объясним, что делает эта конфигурация арены.

Сначала арена включается с помощью `isEnabled`, и мы видим, что она называется Example Arena, используя настройку `arenaName`. Имя будет показано, когда вы взаимодействуете с NPC арены (мы поговорим о том, как создать NPC арены ниже), который позволит игрокам присоединиться к арене. corner1 и corner2 определяют размер арены. Эти углы должны быть на противоположных сторонах области, которую вы планируете использовать для арены.

`startLocation` - это место, где игроки будут появляться при входе на арену. В этом примере это будет в центре арены в мире my_arena_world. `exitLocation` - это место, куда игроки будут телепортированы после того, как проиграют или завершат арену. В этом случае это будет мир my_minecraft_world и координаты в примере.

`waveCount` просто устанавливает количество волн, которые будут на арене. В этом случае, это будет 5 волн. Если игрокам удастся выжить во всех 5 волнах, они выживут на арене. `delayBetweenWaves` установит количество секунд, которое пройдет перед началом следующей волны. В нашем примере игроки будут иметь 5 секунд, чтобы подготовиться перед началом следующей волны.

`spawnPoints` устанавливают места, где мы можем генерировать мобов. Мы можем создавать столько, сколько захотим, и называть их как угодно. В примере мы решили создать 5 точек спавна и назвать их север, юг, центр, восток и запад.

`bossList` - это место, где мы определяем, какой босс должен появляться на какой волне и в какой локации. В примере, волна 1 будет иметь 3 босса, появляющихся из точек спавна, которые мы назвали север, центр и юг. Все три настроены на использование одного и того же файла босса, но мы могли бы использовать разные файлы боссов для каждого из них.

`rawArenaReward` устанавливает награды, которые будут выдаваться после того, как игрок выживет/пройдет волну. Как мы видим в примере, прохождение волны 1 наградит игрока 5 элитными монетами. Если им удастся пережить остальные волны и затем победить на волне 5, они будут вознаграждены 25 элитными монетами и 50% шансом получить Palito de Dente do MagmaGuy уровня 5.

`minimumPlayerCount` устанавливает минимальное количество игроков, которое необходимо, чтобы арена началась. В нашем примере этот параметр установлен в 1, поэтому для запуска арены нужен только один игрок. `maximumPlayerCount` устанавливает максимальное количество игроков, которые могут участвовать в арене. В нашем примере этот параметр установлен в 3, то есть если более 3 игроков попытаются участвовать в арене, то арена не начнется, пока не останется 3 или меньше игроков.

`arenaMessages` позволяет добавлять текст, который будет отображаться в чате при начале определенных волн. В нашем примере мы решили отображать короткое сообщение в начале каждой волны. Мы также решили включить имя NPC в начало каждого сообщения, создавая иллюзию, что текст - это разговорный диалог диктора (мастер арены).

`cylindricalArena` этот параметр позволит нам переключать, должна ли определенная область, которую мы установили с помощью `corner1` и `corner2`, иметь цилиндрическую форму вместо кубоидной. В нашем примере мы установили это значение как `false`, что означает, что арена примера имеет кубоидную форму.

`permission` позволяет нам установить разрешение, которое игрокам нужно иметь, чтобы они могли присоединиться/начать арену. В нашем примере игрокам нужно будет иметь разрешение `arena.mypermission`, чтобы они могли использовать арену.

</div>

</details>

## Создание NPC арены

<div align="center">

### isEnabled

Включает или выключает NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
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

### name

Отображаемое имя NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aGladius"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

Отображаемая роль под именем NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `role` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
role: "&c<Arena Master>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Профессия MineCraft для NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Будет переопределено, если используется `diguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Точка спавна NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `spawnLocation` | [Location](#serialized_location) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnLocation: my_world,1.5,50,1.5,-108,0
```

</div>

</details>

***

### greetings

Настройка приветственного диалога для NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `greetings` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
greetings:
- Welcome to the Arena!
- The Arena welcomes you!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Настройка диалога при взаимодействии игроков с NPC.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `dialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dialog:
- Ready for a challenge?
- Face the Arena?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Настройка прощального диалога для NPC.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `farewell` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
farewell:
- Bye.
- Return with your shield, or on it!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Если строка слишком длинная, вы можете использовать \n, чтобы разделить ее на несколько строк.*

<div align="left">

```yml
farewell:
- Bye.
- Return with your\nshield, or on it!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Настройка прощального диалога для NPC.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `canTalk` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Радиус, при котором NPC должен начать разговаривать.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `activationRadius` | [Double](#double) |  `3.0`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Определяет, как NPC будет взаимодействовать.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `interactionType` | Special [4] |  `ARENA_MASTER`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
interactionType: ARENA_MASTER
```

</div>

</details>

***

### disguise

Настройка  custom NPC disguise.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
disguise: ZOMBIE
```

<div align="center">

![create_arena_npc_disguise.jpg](../../../img/wiki/create_arena_npc_disguise.jpg)

<div align="center">

</div>

</details>

***

### arena

Определяет арену, на которую будут телепортированы игроки.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `arena` | [Filename](#filename) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### teleportLocation

Определяет, куда должны быть телепортированы игроки после взаимодействия с NPC. Эта настройка обычно используется, чтобы телепортировать игроков в специальную зону типа лобби арены, где они могут начать арена-вызов или ждать, пока другие игроки завершат прохождение арены. 

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `teleportLocation` | [Location](#location) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
teleportLocation: my_arena_world,10,50,10,0,0
```

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Пример конфигурации арены</b></summary>

<div align="left">

```yml
isEnabled: true
name: Example NPC
role: <Arena Master>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Welcome to the Arena!
dialog:
  - Ready to enter the Arena?
farewell:
  - Bye!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
Этот пример показывает простой NPC арены, который появится в my_minecraft_world с маскировкой зомби. Игроки могут взаимодействовать с этим NPC, чтобы бросить вызов Example Arena.

</div>

</details>

## Special [4] 
Список допустимых типов взаимодействия NPC:

| Тип | Описание |
| --- | :-: |
| `GUILD_GREETER` | Открывает меню гильдии авантюристов |
| `CHAT` | Клик правой кнопкой мыши переключает `dialog` |
| `CUSTOM_SHOP` | Открывает меню магазина |
| `PROCEDURALLY_GENERATED_SHOP` | Открывает магазин, сгенерированный процедурно |
| `BAR` | Открывает меню бара |
| `ARENA` | Открывает меню арены |
| `QUEST_GIVER` | Открывает меню квестов, сгенерированных процедурно |
| `CUSTOM_QUEST_GIVER` | Открывает меню квестов для конкретного набора квестов, заданного в `questFilenames` |
| `NONE` | Отсутствие взаимодействия |
| `SELL` | Открывает меню продажи |
| `TELEPORT_BACK` | Телепортирует игроков назад в последнее местоположение мира, не относящееся к EliteMobs |
| `SCRAPPER` | Открывает меню утилизации |
| `SMELTER` | Открывает меню плавки |
| `REPAIRMAN` | Открывает меню ремонта |
| `ENHANCER` | Открывает меню улучшения предметов |
| `REFINER` | Открывает меню переработки |
| `UNBINDER` | Открывает меню отвязки |
| `ARENA_MASTER` | Открывает меню арены для арены, заданной в `arenaFilename` |
| `COMMAND` | Выполняет команду, заданную в `command` |

