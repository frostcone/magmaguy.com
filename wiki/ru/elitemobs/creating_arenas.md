```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание арен

<div align="center">

### isEnabled

Устанавливает, включена ли арена.

| Ключ      |      Значения     | По умолчанию |
|-----------|:-----------------:|:------------:|
|`isEnabled`| [Boolean](#boolean) | `true`       |

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

Устанавливает название арены.

| Ключ      |      Значения     | По умолчанию |
|-----------|:-----------------:|:------------:|
|`arenaName`| [String](#string) | нет          |

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

| Ключ     |      Значения                      | По умолчанию |
|----------|:----------------------------------:|:------------:|
|`corner1`| [Location](#serialized_location) | нет          |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner1: my_arena_world,10,50,-10,0,0
```

<div align="center">

На этом изображении `corner1` представлен *зеленой шерстью*, а `corner2` — *красной шерстью*. Эта конфигурация обозначает область между ними как арену, представленную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### corner2

Устанавливает второй угол арены, должен быть диаметрально противоположен `corner1`.

| Ключ     |      Значения                      | По умолчанию |
|----------|:----------------------------------:|:------------:|
| `corner2` | [Location](#serialized_location) | нет          |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
corner2: my_arena_world,-10,50,10,0,0
```

<div align="center">

На этом изображении `corner1` представлен *зеленой шерстью*, а `corner2` — *красной шерстью*. Эта конфигурация обозначает область между ними как арену, представленную *желтой шерстью*.

![create_arena_corner.jpg](../../../img/wiki/create_arena_corner.jpg)

</div>

</div>

</details>

***

### startLocation

Устанавливает начальное местоположение арены.

| Ключ          |      Значения                      | По умолчанию |
|---------------|:----------------------------------:|:------------:|
| `startLocation` | [Location](#serialized_location) | нет          |

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

Устанавливает местоположение выхода с арены.

| Ключ         |      Значения                      | По умолчанию |
|--------------|:----------------------------------:|:------------:|
| `exitLocation` | [Location](#serialized_location) | нет          |

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

| Ключ      |      Значения     | По умолчанию |
|-----------|:-----------------:|:------------:|
| `waveCount` | [Integer](#integer) | нет          |

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

Устанавливает задержку, в секундах, между волнами.

| Ключ              |      Значения     | По умолчанию |
|-------------------|:-----------------:|:------------:|
| `delayBetweenWaves` | [Integer](#integer) | `0`          |

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

Устанавливает местоположения появления боссов на арене.

| Ключ         |      Значения               | По умолчанию |
|--------------|:---------------------------:|:------------:|
| `spawnPoints` | [String List](#string_list) [1] | нет          |

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

Устанавливает список боссов, которые появляются во время волн на арене. Арены EliteMobs поддерживают появление Mythic Mobs на аренах.

| Ключ     |      Значения               | По умолчанию |
|----------|:---------------------------:|:------------:|
| `bossList` | [String List](#string_list) [2] | нет          |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossList:
- wave=1:spawnPoint=north:boss=my_boss_wave_1.yml
- wave=1:spawnPoint=south:boss=my_boss_wave_1.yml
- wave=2:spawnPoint=center:boss=my_mythicmobs_boss:mythicmob=true:level=10
```

В этом примере, волна 1 породит одного босса в северной точке появления и одного босса в южной точке появления. Затем, на волне 2, появится мифический босс, уровня 10, в центральной точке.

Обратите внимание, что вы также можете принудительно установить уровень для боссов EliteMobs, но рекомендуется устанавливать их уровень в их файле конфигурации.

</div>

</details>

***

### rawArenaReward

Устанавливает награды, выдаваемые в конце волн.

| Ключ           |      Значения                                                              | По умолчанию |
|----------------|:--------------------------------------------------------------------------:|:------------:|
| `rawArenaReward` | [Универсальная таблица добычи EliteMobs](ru/elitemobs/loot_tables.md) | нет          |

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

Устанавливает минимальное количество игроков, которое должно быть на арене перед началом.

| Ключ               |      Значения     | По умолчанию |
|--------------------|:-----------------:|:------------:|
| `minimumPlayerCount` | [Integer](#integer) | `1`          |

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

| Ключ               |      Значения     | По умолчанию |
|--------------------|:-----------------:|:------------:|
| `maximumPlayerCount` | [Integer](#integer) | `100`        |

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

| Ключ          |      Значения     | По умолчанию |
|---------------|:-----------------:|:------------:|
| `arenaMessages` | Специальное [3] | нет          |

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

Устанавливает, использует ли арена цилиндрическую форму (по умолчанию — кубоид).

| Ключ             |      Значения     | По умолчанию |
|------------------|:-----------------:|:------------:|
| `cylindricalArena` | [Boolean](#boolean) | `false`      |

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

| Ключ       |      Значения     | По умолчанию |
|------------|:-----------------:|:------------:|
| `permission` | [String](#integer) | нет          |

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
Сообщения арены: Использует следующий формат: `wave=X:message=ваше сообщение здесь`.

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

Давайте рассмотрим этот пример сверху вниз и объясним, что делает эта конфигурация арены.

Сначала арена включена с помощью `isEnabled`, и мы видим, что она называется Example Arena, используя настройку `arenaName`. Название будет отображаться при взаимодействии с NPC арены (о том, как создать NPC арены, мы расскажем далее), который позволит игрокам присоединиться к арене. `corner1` и `corner2` определяют размер арены. Эти углы должны находиться на противоположных сторонах области, которую вы планируете использовать для арены.

`startLocation` — это место, где игроки будут появляться при присоединении к арене; в примере это будет центр арены в мире my_arena_world. `exitLocation` — это место, куда игроки будут телепортированы после того, как они проиграют или завершат арену. В данном случае это будет мир my_minecraft_world и координаты из примера.

`waveCount` просто устанавливает количество волн, которые продлится арена. В данном случае это будет 5 волн. Если игрокам удастся пережить все 5 волн, они успешно прошли арену. `delayBetweenWaves` установит количество секунд до начала следующей волны. В нашем примере у игроков будет 5 секунд на подготовку перед началом следующей волны.

`spawnPoints` устанавливает местоположения, где могут появляться наши мобы. Мы можем создать столько точек, сколько захотим, и назвать их как угодно. В примере мы решили создать 5 точек появления и назвать их north, south, center, east и west.

`bossList` — это место, где мы определяем, какой босс должен появиться на какой волне и в каком местоположении. В примере на волне 1 появится 3 босса из точек появления, которые мы назвали north, center и south. Все три настроены на использование одного и того же файла босса, но мы могли бы использовать разные файлы боссов для каждого.

`rawArenaReward` устанавливает награды, которые будут выданы после того, как игрок сумеет пережить/победить волну. Как видно в примере, победа на волне 1 наградит игрока 5 элитными монетами. Если им удастся пережить оставшиеся волны, а затем победить волну 5, они будут награждены 25 элитными монетами и 50% шансом получить Зубочистку MagmaGuy'а 5-го уровня.

`minimumPlayerCount` устанавливает минимальное требуемое количество игроков, необходимое для начала арены. В нашем примере эта настройка установлена на 1, поэтому для начала арены нужен всего один игрок. `maximumPlayerCount` устанавливает максимальное количество игроков, которые могут участвовать в арене. В нашем примере эта настройка установлена на 3, что означает, что если более 3 игроков попытаются участвовать в арене, арена не начнется, пока не останется 3 игрока или меньше.

`arenaMessages` позволяет добавить некоторый "вкусный" текст, который будет отображаться в чате в начале определенных волн. В нашем примере мы решили отображать короткое сообщение в начале каждой волны. Мы также решили включить имя NPC в начало каждого сообщения, создавая иллюзию, что текст является диалогом, произносимым диктором (мастером арены).

`cylindricalArena` эта настройка позволит нам переключать, должна ли определенная область, которую мы установили с помощью `corner1` и `corner2`, иметь цилиндрическую форму вместо кубоидной. В нашем примере мы установили это значение на `false`, что означает, что пример арены имеет кубоидную форму.

`permission` позволяет нам установить разрешение, которое игрокам потребуется для присоединения/начала арены. В нашем примере игрокам потребуется разрешение `arena.mypermission`, чтобы иметь возможность использовать арену.

</div>

</details>

## Создание NPC арены

<div align="center">

### isEnabled

Устанавливает, включен ли NPC.

| Ключ      |      Значения     | По умолчанию |
|-----------|:-----------------:|:------------:|
| `isEnabled` | [Boolean](#boolean) | `true`       |

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

| Ключ   |      Значения     | По умолчанию |
|--------|:-----------------:|:------------:|
| `name` | [String](#string) | нет          |

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

Устанавливает отображаемую роль под именем NPC.

| Ключ   |      Значения     | По умолчанию |
|--------|:-----------------:|:------------:|
| `role` | [String](#string) | нет          |

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

Устанавливает профессию NPC в MineCraft.

| Ключ         |      Значения                                                                  | По умолчанию |
|--------------|:-------------------------------------------------------------------------------:|:------------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) | нет          |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
profession: ARMORER
```

<div align="center">

*Будет переопределено, если используется `disguise`.*

![create_arena_npc_profession.jpg](../../../img/wiki/create_arena_npc_profession.jpg)

</div>

</div>

</details>

***

### spawnLocation

Устанавливает местоположение появления NPC.

| Ключ          |      Значения                      | По умолчанию |
|---------------|:----------------------------------:|:------------:|
| `spawnLocation` | [Location](#serialized_location) | нет          |

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

| Ключ        |           Значения            | По умолчанию |
|-------------|:---------------------------:|:------------:|
| `greetings` | [String List](#string_list) | нет          |

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

Устанавливает диалог при взаимодействии игроков с NPC.

| Ключ   |           Значения            | По умолчанию |
|--------|:---------------------------:|:------------:|
| `dialog` | [String List](#string_list) | нет          |

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

Устанавливает прощальный диалог для NPC.

| Ключ     |           Значения            | По умолчанию |
|----------|:---------------------------:|:------------:|
| `farewell` | [String List](#string_list) | нет          |

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

*Если строка слишком длинная, вы можете использовать \n для разделения строки на несколько строк.*

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

Устанавливает, может ли NPC говорить.

| Ключ    |           Значения            | По умолчанию |
|---------|:---------------------------:|:------------:|
| `canTalk` | [Boolean](#boolean) | `true`       |

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

Устанавливает радиус, в котором NPC должен начать говорить.

| Ключ             |           Значения            | По умолчанию |
|------------------|:---------------------------:|:------------:|
| `activationRadius` | [Double](#double) | `3.0`        |

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

| Ключ            |      Значения     | По умолчанию |
|-----------------|:-----------------:|:------------:|
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

Устанавливает пользовательский облик NPC.

| Ключ       |      Значения                                                              | По умолчанию |
|------------|:--------------------------------------------------------------------------:|:------------:|
| `disguise` | [Disguise](ru/elitemobs/libsdisguises.md) | нет          |

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

| Ключ  |      Значения     | По умолчанию |
|-------|:-----------------:|:------------:|
| `arena` | [Filename](#filename) | нет          |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>
```Please specify the language you would like the text translated into.