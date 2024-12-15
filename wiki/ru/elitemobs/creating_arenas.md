```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание арен

<div align="center">

### isEnabled

Устанавливает, включена ли арена.

| Ключ        |  Значения      | По умолчанию |
|-------------|:---------------:|:------------:|
| `isEnabled` | [Boolean](#boolean) |    `true`   |

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


Устанавливает имя арены.

| Ключ        |  Значения       | По умолчанию |
|-------------|:---------------:|:------------:|
| `arenaName` | [String](#string) |    нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arenaName: Бедрок Арена
```

<div align="center">

![create_arena_name.jpg](../../../img/wiki/create_arena_name.jpg)

</div>

</div>

</details>

***

### corner1

Устанавливает первый угол арены.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `corner1`  | [Location](#serialized_location) |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

На этом изображении `corner1` представлен *зеленой шерстью*, а `corner2` представлен *красной шерстью*. Эта конфигурация определяет область между ними как арену, представленную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Устанавливает второй угол арены, должен быть диаметрально противоположен `corner1`.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `corner2` | [Location](#serialized_location) |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

На этом изображении `corner1` представлен *зеленой шерстью*, а `corner2` представлен *красной шерстью*. Эта конфигурация определяет область между ними как арену, представленную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Устанавливает начальную точку арены.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `startLocation` | [Location](#serialized_location) |   нет   |

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

Устанавливает точку выхода из арены.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `exitLocation` | [Location](#serialized_location) |  нет   |

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

Устанавливает количество волн на арене.

| Ключ        |  Значения       | По умолчанию |
|-------------|:---------------:|:------------:|
| `waveCount` | [Integer](#integer) |   нет   |

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

Устанавливает задержку в секундах между волнами.

| Ключ               | Значения        | По умолчанию |
|--------------------|:---------------:|:------------:|
| `delayBetweenWaves` | [Integer](#integer) |   `0`   |

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

Устанавливает точки появления боссов на арене.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `spawnPoints` | [String List](#string_list) [1] |  нет  |

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

Устанавливает список боссов, появляющихся во время волн арены. EliteMobs Arenas поддерживают появление Mythic Mobs на аренах.

| Ключ        |  Значения       | По умолчанию |
|-------------|:---------------:|:------------:|
| `bossList` | [String List](#string_list) [2] |   нет  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

В этом примере на волне 1 появится один босс в точке появления на севере и один босс в точке появления на юге. Затем на волне 2 в центральной точке появится мифический босс 10-го уровня.

Обратите внимание, что вы также можете принудительно установить уровень для боссов EliteMobs, но рекомендуется устанавливать их уровень в файле конфигурации.

</div>

</details>

***

### rawArenaReward

Устанавливает награды, выдаваемые в конце волн.

| Ключ              | Значения                                                                 | По умолчанию |
|-------------------|:-------------------------------------------------------------------------:|:------------:|
| `rawArenaReward` | [Универсальная таблица лута EliteMobs]($language$/elitemobs/loot_tables.md) |     нет      |

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

Устанавливает минимальное количество игроков, которое должна иметь арена перед началом.

| Ключ                 | Значения        | По умолчанию |
|----------------------|:---------------:|:------------:|
| `minimumPlayerCount` | [Integer](#integer) |    `1`    |

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

Устанавливает максимальное количество игроков, которое может иметь арена.

| Ключ                 | Значения        | По умолчанию |
|----------------------|:---------------:|:------------:|
| `maximumPlayerCount` | [Integer](#integer) |   `100`   |

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

Устанавливает сообщения, которые выполняются между волнами.

| Ключ           | Значения    | По умолчанию |
|----------------|:-----------:|:------------:|
| `arenaMessages` | Специальные [3] |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Объявитель арены] &fВремя для первой волны!"
- wave=2:message="&a[Объявитель арены] &fУх ты, уже вторая волна."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Устанавливает, использует ли арена цилиндрическую форму (по умолчанию - кубоид).

| Ключ             | Значения        | По умолчанию |
|------------------|:---------------:|:------------:|
| `cylindricalArena` | [Boolean](#boolean) |  `false`  |

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

Устанавливает разрешение, необходимое для использования арены.

| Ключ         |  Значения        | По умолчанию |
|--------------|:----------------:|:------------:|
| `permission` | [String](#integer) |    нет   |

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


## Специальные [1] 
Точки появления: Используют следующий формат: `name=имя_точки:location=имя_мира,x,y,z`.

## Специальные [2] 
Список боссов: Использует следующий формат: `wave=x:spawnPoint=Y:boss=имя_файла_босса.yml`.

## Специальные [3] 
Сообщения арены: Используют следующий формат: `wave=X:message=ваше сообщение здесь`.

<details> 

<summary align="center"><b>Пример конфигурации арены</b></summary>

<div align="left">

```yml
isEnabled: true
arenaName: Пример Арены
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
  - wave=1:message=&d[NPC Арены] &fВау! Волна 1!
  - wave=2:message=&d[NPC Арены] &fУдивительно, это волна 2!
  - wave=3:message=&d[NPC Арены] &fВолна 3 началась!
  - wave=4:message=&d[NPC Арены] &fУже волна 4!
  - wave=5:message=&d[NPC Арены] &fНу, после этого все закончится.
cylindricalArena: false
permission: arena.mypermission
```
</div>

</details>

<details> 

<summary align="center"><b>Разбор примера</b></summary>

<div align="left">

Давайте рассмотрим этот пример сверху и объясним, что делает эта конфигурация арены.

Сначала арена включается с помощью `isEnabled`, и мы видим, что она называется "Пример Арены", используя настройку `arenaName`. Имя будет показано, когда вы взаимодействуете с NPC арены (мы поговорим о том, как создать NPC арены ниже), который позволит игрокам присоединиться к арене. corner1 и corner2 определяют размер арены. Эти углы должны находиться на противоположных сторонах друг от друга в области, которую вы планируете использовать для арены.

`startLocation` - это место, где игроки будут появляться при входе на арену, в примере это будет в центре арены в мире my_arena_world. `exitLocation` - это место, куда игроки будут телепортированы после того, как они провалят или завершат арену. В этом случае это будет мир my_minecraft_world и координаты в примере.

`waveCount` просто устанавливает количество волн, которые будут длиться на арене. В этом случае это будет 5 волн. Если игрокам удастся пережить все 5 волн, им удалось пережить арену. `delayBetweenWaves` установит количество секунд до начала следующей волны. В нашем примере у игроков будет 5 секунд на подготовку перед началом следующей волны.

`spawnPoints` устанавливает места, где могут появляться наши мобы. Мы можем сделать столько, сколько захотим, и назвать их как хотим. В примере мы решили создать 5 точек появления и назвать их север, юг, центр, восток и запад.

`bossList` - это место, где мы определяем, какой босс должен появляться на какой волне и в каком месте. В примере волна 1 будет иметь 3 боссов, появляющихся из точек появления, которые мы назвали север, центр и юг. Все три настроены на использование одного и того же файла босса, но мы могли бы использовать разные файлы боссов для каждого из них.

`rawArenaReward` устанавливает награды, которые будут выданы после того, как игрок сумеет пережить/победить волну. Как мы видим в примере, за победу над волной 1 игрок получит 5 элитных монет. Если им удастся пережить остальные волны, а затем победить волну 5, они будут вознаграждены 25 элитными монетами и 50% шансом получить Зубочистку МагмаГая 5-го уровня.

`minimumPlayerCount` устанавливает минимальное количество игроков, необходимое для запуска арены. В нашем примере эта настройка установлена на 1, поэтому для начала арены нужен только один игрок. `maximumPlayerCount` устанавливает максимальное количество игроков, которые могут участвовать в арене. В нашем примере эта настройка установлена на 3, что означает, что если более 3 игроков попытаются участвовать в арене, то арена не начнется до тех пор, пока не останется 3 игрока или меньше.

`arenaMessages` позволяет вам добавить немного текста, который будет отображаться в чате в начале определенных волн. В нашем примере мы решили отображать короткое сообщение в начале каждой волны. Мы также решили включить имя NPC в начале каждого сообщения, создавая иллюзию того, что текст является диалогом, произносимым диктором (мастером арены).

`cylindricalArena` эта настройка позволит нам переключать, должна ли определенная область, которую мы установили с помощью `corner1` и `corner2`, иметь цилиндрическую форму вместо кубовидной. В нашем примере мы установили значение `false`, что означает, что пример арены имеет кубовидную форму.

`permission` позволяет нам установить разрешение, которое потребуется игрокам для того, чтобы иметь возможность присоединиться/начать арену. В нашем примере игрокам потребуется разрешение `arena.mypermission`, чтобы иметь возможность использовать арену.

</div>

</details>

## Создание NPC арены

<div align="center">

### isEnabled

Устанавливает, включен ли NPC.

| Ключ        |  Значения      | По умолчанию |
|-------------|:---------------:|:------------:|
| `isEnabled` | [Boolean](#boolean) |   `true`  |

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

Устанавливает отображаемое имя NPC.

| Ключ     |  Значения       | По умолчанию |
|----------|:---------------:|:------------:|
| `name`  | [String](#string) |    нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aГладиус"
```

<div align="center">

![create_arena_npc_name.jpg](../../../img/wiki/create_arena_npc_name.jpg)

</div>

</div>

</details>

***

### role

Устанавливает отображаемую роль под именем NPC.

| Ключ    |  Значения       | По умолчанию |
|---------|:---------------:|:------------:|
| `role` | [String](#string) |    нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
role: "&c<Мастер арены>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Устанавливает профессию NPC в MineCraft.

| Ключ          |  Значения    | По умолчанию |
|---------------|:-------------:|:------------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |    нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">


*Будет перезаписано, если используется `diguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Устанавливает место появления NPC.

| Ключ             |  Значения        | По умолчанию |
|------------------|:---------------:|:------------:|
| `spawnLocation` | [Location](#serialized_location) |   нет   |

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

Устанавливает приветственный диалог для NPC.

| Ключ       |  Значения       | По умолчанию |
|------------|:---------------:|:------------:|
| `greetings` | [String List](#string_list) |    нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
greetings:
- Добро пожаловать на Арену!
- Арена приветствует вас!
```

<div align="center">

![create_arena_npc_greetings.jpg](../../../img/wiki/create_arena_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Устанавливает диалог при взаимодействии игроков с NPC.

| Ключ    |  Значения       | По умолчанию |
|---------|:---------------:|:------------:|
| `dialog`| [String List](#string_list) |  нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dialog:
- Готовы к испытанию?
- Принять вызов Арены?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Устанавливает прощальный диалог для NPC.

| Ключ       |  Значения            | По умолчанию |
|------------|:--------------------:|:------------:|
| `farewell` | [String List](#string_list) |  нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
farewell:
- Пока.
- Возвращайся со щитом или на нем!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Если строка слишком длинная, вы можете использовать \n, чтобы разделить строку на несколько строк.*

<div align="left">

```yml
farewell:
- Пока.
- Возвращайся со \nщитом или на нем!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Устанавливает, может ли NPC говорить.

| Ключ      |  Значения       | По умолчанию |
|-----------|:---------------:|:------------:|
| `canTalk` | [Boolean](#boolean) |   `true`  |

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

Устанавливает радиус, когда NPC должен начать говорить.

| Ключ              |  Значения    | По умолчанию |
|-------------------|:-------------:|:------------:|
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

Устанавливает тип взаимодействия, которое будет выполнять NPC.

| Ключ              | Значения      | По умолчанию   |
|-------------------|:-------------:|:--------------:|
| `interactionType` | Специальный [4] | `ARENA_MASTER` |

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

Устанавливает настраиваемую маскировку NPC.

| Ключ      | Значения                                      | По умолчанию |
|-----------|:---------------------------------------------:|:------------:|
| `disguise` | [Disguise]($language$/elitemobs/libsdisguises.md) |    нет    |

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

Устанавливает, на какую арену будут телепортированы игроки.

| Ключ    |  Значения        | По умолчанию |
|---------|:----------------:|:------------:|
| `arena` | [Filename](#filename) |    нет    |

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

Устанавливает, куда игроки должны быть телепортированы после взаимодействия с NPC. Эта настройка обычно используется для телепортации игроков в выделенную область типа лобби арены, где они могут начать испытание арены или дождаться, пока другие игроки закончат проходить арену.

| Ключ              |  Значения          | По умолчанию |
|-------------------|:-----------------:|:------------:|
| `teleportLocation` | [Location](#location) |   нет   |

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
name: Пример NPC
role: <Мастер арены>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Добро пожаловать на Арену!
dialog:
```
```markdown
- Готовы войти на Арену?
farewell:
  - Пока!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
Этот пример показывает базового NPC арены, который появится в мире my_minecraft_world в виде зомби. Игроки могут взаимодействовать с этим NPC, чтобы бросить вызов Арене примера.

</div>

</details>

## Специальные [4] 
Ниже приведен список допустимых типов взаимодействия NPC:

| Тип                               | Описание                                                                                             |
|-----------------------------------|:----------------------------------------------------------------------------------------------------:|
| `GUILD_GREETER`                   | Открывает меню гильдии искателей приключений                                                              |
| `CHAT`                            | Правый щелчок переключает `диалог`                                                                     |
| `CUSTOM_SHOP`                     | Открывает меню пользовательского магазина                                                              |
| `PROCEDURALLY_GENERATED_SHOP`     | Открывает процедурно сгенерированный магазин                                                             |
| `BAR`                             | Открывает меню бара                                                                                   |
| `ARENA`                           | Открывает меню арены                                                                                  |
| `QUEST_GIVER`                     | Открывает меню процедурно сгенерированных заданий                                                        |
| `CUSTOM_QUEST_GIVER`             | Открывает меню заданий для определенного набора заданий, установленного в `questFilenames`                |
| `NONE`                            | Нет взаимодействий                                                                                     |
| `SELL`                            | Открывает меню продажи                                                                              |
| `TELEPORT_BACK`                   | Телепортирует игроков обратно в последнее место в мире, отличное от elitemobs, где они были              |
| `SCRAPPER`                        | Открывает меню разбора                                                                             |
| `SMELTER`                         | Открывает меню плавки                                                                                 |
| `REPAIRMAN`                       | Открывает меню ремонта                                                                               |
| `ENHANCER`                        | Открывает меню улучшения предметов                                                                     |
| `REFINER`                         | Открывает меню переработки                                                                            |
| `UNBINDER`                        | Открывает меню снятия привязки                                                                       |
| `ARENA_MASTER`                    | Открывает меню арены для арены, установленной в `arenaFilename`                                       |
| `COMMAND`                       | Выполняет команду, установленную в `command`                                                                     |
```
