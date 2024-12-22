[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание арен

<div align="center">

### isEnabled

Устанавливает, включена ли арена.

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

### arenaName

Устанавливает имя арены.

| Ключ        |     Значения      | По умолчанию |
|-------------|:-----------------:|:------------:|
| `arenaName` | [String](#string) |     нет      |

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

Устанавливает первый угол арены.

| Ключ      |             Значения             | По умолчанию |
|-----------|:--------------------------------:|:------------:|
| `corner1` | [Location](#serialized_location) |     нет      |

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

| Ключ      |             Значения             | По умолчанию |
|-----------|:--------------------------------:|:------------:|
| `corner2` | [Location](#serialized_location) |     нет      |

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

Устанавливает начальную позицию арены.

| Ключ            |             Значения             | По умолчанию |
|-----------------|:--------------------------------:|:------------:|
| `startLocation` | [Location](#serialized_location) |     нет      |

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

Устанавливает точку выхода с арены.

| Ключ           |             Значения             | По умолчанию |
|----------------|:--------------------------------:|:------------:|
| `exitLocation` | [Location](#serialized_location) |     нет      |

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

| Ключ        |      Значения       | По умолчанию |
|-------------|:-------------------:|:------------:|
| `waveCount` | [Integer](#integer) |     нет      |

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

| Ключ                |      Значения       | По умолчанию |
|---------------------|:-------------------:|:------------:|
| `delayBetweenWaves` | [Integer](#integer) |     `0`      |

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

Устанавливает точки появления для боссов на арене.

| Ключ          |            Значения             | По умолчанию |
|---------------|:-------------------------------:|:------------:|
| `spawnPoints` | [String List](#string_list) [1] |     нет      |

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

Устанавливает список боссов, которые появляются во время волн на арене. EliteMobs Arenas поддерживают появление Mythic
Mobs на аренах.

| Ключ       |            Значения             | По умолчанию |
|------------|:-------------------------------:|:------------:|
| `bossList` | [String List](#string_list) [2] |     нет      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

В этом примере, в волне 1 появится один босс в северной точке появления и один босс в южной точке появления. Затем, в
волне 2, мифический босс появится на 10 уровне в центральной точке.

Обратите внимание, что вы также можете принудительно установить уровень для боссов EliteMobs, но рекомендуется
устанавливать их уровень в их файле конфигурации.

</div>

</details>

***

### rawArenaReward

Устанавливает награды, выдаваемые в конце волн.

| Ключ             |                                  Значения                                   | По умолчанию |
|------------------|:---------------------------------------------------------------------------:|:------------:|
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

Устанавливает минимальное количество игроков, которое должно быть на арене, прежде чем она начнется.

| Ключ                 |      Значения       | По умолчанию |
|----------------------|:-------------------:|:------------:|
| `minimumPlayerCount` | [Integer](#integer) |     `1`      |

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

Устанавливает максимальное количество игроков, которое может быть на арене.

| Ключ                 |      Значения       | По умолчанию |
|----------------------|:-------------------:|:------------:|
| `maximumPlayerCount` | [Integer](#integer) |    `100`     |

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

Устанавливает сообщения, которые отображаются между волнами.

| Ключ            |    Значения     | По умолчанию |
|-----------------|:---------------:|:------------:|
| `arenaMessages` | Специальное [3] |     нет      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
arenaMessages:
- wave=1:message="&a[Arena Announcer] &fВремя для первой волны!"
- wave=2:message="&a[Arena Announcer] &fУх ты, уже вторая волна."
```

<div align="center">

![create_arena_messages.jpg](../../../img/wiki/create_arena_messages.jpg)

</div>

</div>

</details>

***

### cylindricalArena

Устанавливает, использует ли арена цилиндрическую форму (по умолчанию - кубоид).

| Ключ               |      Значения       | По умолчанию |
|--------------------|:-------------------:|:------------:|
| `cylindricalArena` | [Boolean](#boolean) |   `false`    |

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

| Ключ         |      Значения      | По умолчанию |
|--------------|:------------------:|:------------:|
| `permission` | [String](#integer) |     нет      |

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

## Специальное [1]

Точки появления: Использует следующий формат: `name=pointName:location=world_name,x,y,z`.

## Специальное [2]

Список боссов: Использует следующий формат: `wave=x:spawnPoint=Y:boss=bossfilename.yml`.

## Специальное [3]

Сообщения арены: Использует следующий формат: `wave=X:message=your message here`.

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
  - wave=1:message=&d[Arena NPC] &fУх ты! Волна 1!
  - wave=2:message=&d[Arena NPC] &fНевероятно, уже волна 2!
  - wave=3:message=&d[Arena NPC] &fВолна 3 началась!
  - wave=4:message=&d[Arena NPC] &fУже волна 4!
  - wave=5:message=&d[Arena NPC] &fНу, на этом все закончится.
cylindricalArena: false
permission: arena.mypermission
```

</div>

</details>

<details>

<summary align="center"><b>Разбор примера</b></summary>

<div align="left">

Давайте рассмотрим этот пример сверху и объясним, что делает эта конфигурация арены.

Сначала арена включается с помощью `isEnabled`, и мы видим, что она называется "Пример Арены", используя
настройку `arenaName`. Имя будет показано, когда вы будете взаимодействовать с NPC арены (мы поговорим о том, как
создать NPC арены дальше), который позволит игрокам присоединиться к арене. `corner1` и `corner2` определяют размер
арены. Эти углы должны находиться на противоположных сторонах друг от друга в области, которую вы планируете
использовать для арены.

`startLocation` - это то место, где игроки будут появляться при входе на арену, в примере это будет в центре арены в
мире `my_arena_world`. `exitLocation` - это то место, куда игроки будут телепортированы после того, как они проиграют
или закончат арену. В этом случае это будет мир `my_minecraft_world` и координаты из примера.

`waveCount` просто устанавливает количество волн, которые будут длиться на арене. В этом случае это будет 5 волн. Если
игроки сумеют пережить все 5 волн, то они сумели пережить арену. `delayBetweenWaves` установит количество секунд, прежде
чем начнется следующая волна. В нашем примере у игроков будет 5 секунд на подготовку перед началом следующей волны.

`spawnPoints` устанавливает места, где могут появляться наши мобы. Мы можем сделать столько, сколько захотим, и назвать
их как захотим. В примере мы решили сделать 5 точек появления и назвать их север, юг, центр, восток и запад.

`bossList` - это место, где мы определяем, какой босс должен появиться на какой волне и в каком месте. В примере на
волне 1 будет 3 босса, появляющихся из точек появления, которые мы назвали север, центр и юг. Все трое настроены на
использование одного и того же файла босса, но мы могли бы использовать разные файлы боссов для каждого из них.

`rawArenaReward` устанавливает награды, которые будут выданы после того, как игрок сумеет выжить/победить волну. Как мы
видим в примере, за победу на волне 1 игрок получит 5 элитных монет. Если им удастся пережить остальные волны, а затем
победить на волне 5, они будут награждены 25 элитными монетами и 50% шансом получить зубочистку МагмыГая 5-го уровня.

`minimumPlayerCount` устанавливает минимальное необходимое количество игроков перед началом арены. В нашем примере эта
настройка установлена на 1, поэтому для начала арены достаточно только одного игрока. `maximumPlayerCount` устанавливает
максимальное количество игроков, которые могут участвовать в арене. В нашем примере эта настройка установлена на 3, то
есть, если более 3 игроков попытаются участвовать в арене, то арена не начнется, пока не останется 3 игрока или меньше.

`arenaMessages` позволяет добавить немного текста, который будет отображаться в чате в начале определенных волн. В нашем
примере мы решили отобразить короткое сообщение в начале каждой волны. Мы также решили включить имя NPC в начало каждого
сообщения, создавая иллюзию того, что текст - это диалог, произнесенный диктором (мастером арены).

`cylindricalArena` эта настройка позволит нам переключать, должна ли определенная область, которую мы установили с
помощью `corner1` и `corner2`, иметь цилиндрическую форму вместо кубовидной. В нашем примере мы установили это значение
на `false`, что означает, что примерная арена имеет форму куба.

`permission` позволяет нам установить разрешение, которое игрокам потребуется для того, чтобы присоединиться к
арене/начать ее. В нашем примере игрокам понадобится разрешение `arena.mypermission` для того, чтобы иметь возможность
использовать арену.

</div>

</details>

## Создание NPC арены

<div align="center">

### isEnabled

Устанавливает, включен ли NPC.

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

### name

Устанавливает отображаемое имя NPC.

| Ключ   |     Значения      | По умолчанию |
|--------|:-----------------:|:------------:|
| `name` | [String](#string) |     нет      |

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

Устанавливает роль, отображаемую под именем NPC.

| Ключ   |     Значения      | По умолчанию |
|--------|:-----------------:|:------------:|
| `role` | [String](#string) |     нет      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
role: "&c<Мастер Арены>"
```
<div align="center">

![create_arena_npc_role.jpg](../../../img/wiki/create_arena_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Устанавливает профессию NPC в MineCraft.

| Ключ         |                                             Значения                                              | По умолчанию |
|--------------|:-------------------------------------------------------------------------------------------------:|:------------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |     нет      |

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

Устанавливает место появления NPC.

| Ключ            |             Значения             | По умолчанию |
|-----------------|:--------------------------------:|:------------:|
| `spawnLocation` | [Location](#serialized_location) |     нет      |

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

| Ключ        |          Значения           | По умолчанию |
|-------------|:---------------------------:|:------------:|
| `greetings` | [String List](#string_list) |     нет      |

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

Устанавливает диалог, когда игроки взаимодействуют с NPC.

| Ключ     |          Значения           | По умолчанию |
|----------|:---------------------------:|:------------:|
| `dialog` | [String List](#string_list) |     нет      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
dialog:
- Готов к вызову?
- Столкнешься с Ареной?
```

<div align="center">

![create_arena_npc_dialog.jpg](../../../img/wiki/create_arena_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Устанавливает прощальный диалог для NPC.

| Ключ       |          Значения           | По умолчанию |
|------------|:---------------------------:|:------------:|
| `farewell` | [String List](#string_list) |     нет      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
farewell:
- Пока.
- Вернись со своим щитом, или на нем!
```

<div align="center">

![create_arena_npc_farewell.jpg](../../../img/wiki/create_arena_npc_farewell.jpg)

<div align="center">

*Если строка слишком длинная, можно использовать \n для разделения строки на несколько строк.*

<div align="left">

```yml
farewell:
- Пока.
- Вернись со своим\nщитом, или на нем!
```
</div>

![create_arena_npc_lines.jpg](../../../img/wiki/create_arena_npc_lines.jpg)

</div>

</div>

</div>

</details>

***

### canTalk

Устанавливает прощальный диалог для NPC.

| Ключ      |      Значения       | По умолчанию |
|-----------|:-------------------:|:------------:|
| `canTalk` | [Boolean](#boolean) |    `true`    |

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

Устанавливает радиус, когда NPC должен начинать говорить.

| Ключ               |     Значения      | По умолчанию |
|--------------------|:-----------------:|:------------:|
| `activationRadius` | [Double](#double) |    `3.0`     |

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

| Ключ              |    Значения     |  По умолчанию  |
|-------------------|:---------------:|:--------------:|
| `interactionType` | Специальное [4] | `ARENA_MASTER` |

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

Устанавливает пользовательскую маскировку NPC.

| Ключ       |                      Значения                       | По умолчанию |
|------------|:---------------------------------------------------:|:------------:|
| `disguise` | [Маскировка]($language$/elitemobs/libsdisguises.md) |     нет      |

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

| Ключ    |        Значения        | По умолчанию |
|---------|:----------------------:|:------------:|
| `arena` | [Имя файла](#filename) |     нет      |

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

Устанавливает, куда следует телепортировать игроков после взаимодействия с NPC. Этот параметр обычно используется для
телепортации игроков в специальную лобби-зону арены, где они могут начать испытание на арене или подождать, пока другие
игроки закончат прохождение арены.

| Ключ               |       Значения        | По умолчанию |
|--------------------|:---------------------:|:------------:|
| `teleportLocation` | [Location](#location) |     нет      |

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
role: <Мастер Арены>
profession: ARMORER
spawnLocation: my_minecraft_world,233,44,245,0,0
greetings:
  - Добро пожаловать на Арену!
dialog:
```

- Готов войти на Арену?
farewell:
  - Пока!
canTalk: true
activationRadius: 3.0
interactionType: ARENA_MASTER
disguise: ZOMBIE
arena: example_arena.yml
```
Этот пример показывает базового NPC арены, который появится в `my_minecraft_world` в маскировке зомби. Игроки могут взаимодействовать с этим NPC, чтобы бросить вызов Примеру Арены.

</div>

</details>

## Специальное [4]
Ниже приведен список допустимых типов взаимодействия NPC:

| Тип                            | Описание                                                                                                |
|--------------------------------|:---------------------------------------------------------------------------------------------------------|
| `GUILD_GREETER`                | Открывает меню гильдии искателей приключений                                                                |
| `CHAT`                         | Щелчок правой кнопкой мыши переключает `dialog`                                                             |
| `CUSTOM_SHOP`                  | Открывает пользовательское меню магазина                                                                  |
| `PROCEDURALLY_GENERATED_SHOP`   | Открывает процедурно сгенерированный магазин                                                               |
| `BAR`                          | Открывает меню бара                                                                                     |
| `ARENA`                        | Открывает меню арены                                                                                      |
| `QUEST_GIVER`                  | Открывает процедурно сгенерированное меню квестов                                                          |
| `CUSTOM_QUEST_GIVER`           | Открывает меню квестов для определенного набора квестов, установленного в `questFilenames`              |
| `NONE`                         | Нет взаимодействий                                                                                       |
| `SELL`                         | Открывает меню продажи                                                                                    |
| `TELEPORT_BACK`                | Телепортирует игроков обратно в последнее местоположение мира не-elitemobs, где они были                   |
| `SCRAPPER`                     | Открывает меню разбора                                                                                    |
| `SMELTER`                      | Открывает меню плавки                                                                                    |
| `REPAIRMAN`                    | Открывает меню ремонта                                                                                   |
| `ENHANCER`                     | Открывает меню улучшений предметов                                                                       |
| `REFINER`                      | Открывает меню очистки                                                                                     |
| `UNBINDER`                     | Открывает меню отмены привязки                                                                              |
| `ARENA_MASTER`                 | Открывает меню арены для арены, установленной в `arenaFilename`                                        |
| `COMMAND`                      | Выполняет команду, установленную в `command`                                                               |
