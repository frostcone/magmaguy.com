[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Что такое подземелья?

Вы можете найти информацию о подземельях, в том числе информацию о готовых подземельях [здесь]($language$/elitemobs/dungeons.md).

***

# Что такое  dungeon packager?

Dungeon Packager  позволяет администраторам не только создавать и упаковывать подземелья, но и упаковывать любой тип контента EliteMobs. Сюда входят такие вещи, как пакеты событий, пакеты моделей, арены, пакеты NPC, пакеты предметов и так далее.

<details>

<summary>Зачем использовать пакеты подземелий?</summary>

- ***Инстанс-подземелья!*** Инстанс-подземелья можно создавать только с помощью системы dungeon package.
- ***Безопасное резервное копирование мини-подземелий!*** Если вы создадите  Dungeon Package, вы сможете развернуть его и снова развернуть на любом сервере, который захотите, в любое время и по любой причине.
- ***Легко включать и выключать!*** Вы всегда можете сделать `/em setup` и временно или permanently  отключить или включить  Dungeon Packages.
- ***Легко делиться!*** Если вы хотите поделиться своими творениями,  Dungeon Packages  можно просто архивировать и отправить другим людям. Существует комната в Discord, посвященная творениям сообщества, если вы заинтересованы!
- ***Телепорты!*** Dungeon Packages автоматически создают точки телепортации, к которым можно получить доступ на странице Teleports в меню `/em`, что может быть очень полезно во многих конфигурациях.

</details>

# Создание подземелий

Следующие настройки используются для создания файла конфигурации, который должен находиться в папке `dungeonpackages`. Эти настройки используются для создания именно подземелий и не требуются, если вы просто хотите использовать  dungeon packager  для распространения контента, не относящегося к подземельям, такого как пакет предметов или событий.

## Требуемые plugins

Чтобы использовать  Dungeon Packager,  вам понадобится следующий plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - защищает мини-подземелье

## Создание подземелья шаг за шагом

Раньше в EliteMobs было два основных типа подземелий:  подземелья,  базирующиеся на мире,  и подземелья,  базирующиеся на схемах.

Подземелья,  базирующиеся на схемах,  были связаны со схемой построения. Сейчас они сняты с поддержки и больше не поддерживаются.

Все подземелья EliteMobs теперь основаны на мире.

***

### Глобальные значения

Следующие значения применяются ко всем подземельям

<div align="center">

### isEnabled

Включает или выключает пакет подземелья.

| Ключ         |      Значения       | По умолчанию | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Boolean](#boolean) | `false` |    ✅      |

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

Название контента. Поддерживает [Цветные коды](#color_codes).

| Ключ         |      Значения       | По умолчанию | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Тип местоположения, которое использует подземелье.

| Ключ         |        Значения         | По умолчанию | Obrigatório |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Тип подземелья.

| Ключ         |                    Значения                    | По умолчанию | Obrigatório |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Дополнительная информация, которая будет отображаться на экране `/em setup`. Только для информационных целей. Поддерживает [Цветные коды](#color_codes).

| Ключ         |           Значения            | По умолчанию | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Ссылка для загрузки, если контент не был загружен. Только для информационных целей.

| Ключ         |      Значения       | По умолчанию | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Категория размера пакета подземелья. Только для информационных целей.

| Ключ         |   Значения    | По умолчанию | Obrigatório |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Special [1] |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Special [1]**

<details> 

<summary><b>Развернуть таблицу</b></summary>

<div align="center">

| Ключ | Описание                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Ковы - это тип небольшого подземелья, которое сосредоточено на одной большой битве с боссом.  |
| `SANCTUM`    | Сantuários - это эквивалент инстанс-логова. Это означает, что они сосредоточены вокруг одного огромного босса. |
| `MINIDUNGEON`    | Мини-подземелья - это тип подземелья среднего размера, которое обычно содержит 3-15 мини-боссов и большого босса, а также много "пушечного мяса", которое игроки должны "фармить" для получения монет и снаряжения. |
| `DUNGEON`    | Подземелья - это эквивалент инстанс-мини-подземелий. Это самый традиционный тип подземелья MMORPG, где игроки объединяются в группы и проходят испытание, полное "пушечного мяса" и мини-боссов, чтобы сразиться с финальным боссом. |
| `RAID`    | Скоро!|
| `ADVENTURE`    | Приключения - это полные карты приключений. Они включают линии квестов, NPC, большое количество мини-боссов и боссов, и даже могут содержать свои собственные арены или подземелья внутри себя. |
| `ARENA`    | Арены - это выживания, основанные на волнах, в которых игроки получают награды за победу над волнами. |
| `OTHER`    | Все остальное, что не попадает в предыдущие категории. |

For more detailed descriptions see [Dungeons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Определяет, должен ли пакет подземелья быть защищен WorldGuard.

| Ключ         |      Значения       | По умолчанию | Obrigatório |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Boolean](#boolean) |  `true`   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Версия пакета подземелья.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Информация, которая отображается в меню. Поддерживает [Цветные коды](#colorcodes).

*Работает только, когда `/em`  установлен в режим книги с помощью `/em alt`.*

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Сообщение, которое появляется, когда игрок входит в зону подземелья. Поддерживает [Цветные коды](#colorcodes).

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Сообщение, которое появляется, когда игрок покидает зону подземелья. Поддерживает [Цветные коды](#colorcodes).

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Определяет, есть ли в пакете подземелья кастомные модели (для ModelEngine или FreeMinecraftModels).

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Имя папок, используемых для файлов, связанных с этим подземельем. 

**Обязательно для инстанс-подземелий!**.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Уровень контента, который должен отображаться для подземелья в меню EM.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Определяет, является ли подземелье  enchantment challenge.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

###  Пакуется подземелий,  базирующихся на мире

Следующие значения применяются только к подземельям,  базирующимся на мире.

<div align="center">

***

### worldName

Имя мира, который нужно упаковать.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

Эта функция задает имя мира червоточины, который служит вторичным миром, связанным с основным миром. Он используется для таких функций, как хабы телепортации или уникальные камеры боссов.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

Среда мира.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Точка телепортации для пакета подземелья.  Сюда будут телепортироваться игроки при входе в подземелье.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Разрешает или запрещает взрывам повреждать блоки в подземелье.  Взрывы считаются взрывами элит, поэтому любой ущерб блокам будет восстановлен в течение 2 минут.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Boolean](#boolean) |  `false`   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Инстанс-подземелья

*Инстанс-подземелья  создают новый мир каждый раз, когда группа игроков хочет пройти подземелье, и удаляют его, когда все закончат. Чтобы это работало правильно, нужно создать папку с именем `dungeonConfigFolderName` в папке конфигурации `world_blueprints` EliteMobs.*

*Затем поместите мир, который будете использовать, в созданную папку, убедившись, что файл `session.lock` мира удален.*

Следующие значения применяются только к инстанс-подземельям. Обратите внимание, что все инстанс-подземелья - это подземелья в мире, поэтому они также используют значения из подземелий мира.

<div align="center">

***

### startLocation

Точка телепортации начальной точки инстанс-подземелья. Сюда будут телепортироваться игроки при запуске инстанс-подземелья с помощью `/em start`.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Разрешение, необходимое для входа в инстанс-подземелье.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Минимальное количество игроков, которое необходимо для запуска подземелья.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Минимальное количество игроков, которое необходимо для запуска подземелья.

| Ключ         |  Значения  | По умолчанию | Obrigatório |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Список целей подземелья, которые необходимо выполнить, чтобы подземелье считалось завершенным.

| Ключ         |           Значения            | По умолчанию | Obrigatório |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Примеры</b></summary>

<div align="left">

Currently there are two dungeon objective types:

* Kill target: `filename=boss.yml:amount=X`
* Kill percentage of dungeon: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives: 
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Список сложностей в инстанс-подземелье. 

**Обязательно для инстанс-подземелий!**

| Ключ         |   Значения    | По умолчанию | Obrigatório |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Special [1] |  none   |    ❌      |

<details> 

<summary><b>Примеры</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Special [1]**

<details>

<summary><b>Развернуть таблицу</b></summary>

<div align="center">

Настройка сложностей инстанс-подземелья автоматически создает разные варианты сложности при входе в подземелье. 

Названия сложностей, заданные здесь, будут использоваться в папке  Custom Bosses, где можно задать, какие способности боссы имеют, в зависимости от сложности.

Сложности находятся в формате списка, который имеет следующие поля:

|     Key     | Описание                                                                                                                                                                                                                                                    | Значения | Obrigatório |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Название сложности для игроков.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |
|    `id`     | ID сложности, используется в  Custom Bosses  и  Custom Items  для функции, основанной на сложности.                                                                                                                                                                 |[String](#string)        |     ✅     |
| `levelSync` | Задает уровень  level sync, если он есть.  Level sync  заставляет все снаряжение игроков достигать максимального значения, делая невозможным для игроков получение слишком высокого уровня для подземелья и сохраняя его актуальным для последующих прохождений. Основано на системе level sync Final Fantasy 14. |[Integer](#integer)        |     ❌     |


</div>

</details>

</div>

***

# Рекомендуемые значения для боссов

## Создание обычного моба подземелья

Рекомендуем оставить настройку  normalizedCombat  включенной. Эта настройка нормализует всех мобов, чтобы они масштабировались одинаково по здоровью и урону, независимо от их типа существа.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 hits to slay 
damageMultiplier: 1.0 #1.5 hearts of dmg
```

Конечно, вот переработанная версия с сохранением ясности и форматирования:

**Примечание:  Так как `1.0` - это значение по умолчанию для здоровья и урона, вы можете просто не задавать `healthMultiplier` или `damageMultiplier`, а установить `normalizedCombat` в `true`.**

## Создание "пушечного мяса"

"Пушечное мясо" - это многочисленные, но не очень опасные мобы:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 hits to slay 
damageMultiplier: 0.5 #0.5 hearts of dmg
```

## Создание подкреплений

Подкрепления должны легко умирать, но представлять опасность с точки зрения урона (эти значения рекомендуются для 4+ мобов ближнего боя, фактическое использование может варьироваться):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 hit to slay 
damageMultiplier: 0.6 #1 heart of dmg
```

## Создание мини-боссов

Мини-боссы должны удерживать позицию и представлять механический вызов для игроков. Это должен быть тест на мастерство, который длится какое-то время, но не что-то слишком смертельное:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 hits to slay 
damageMultiplier: 1.2 #2 hearts of dmg
```

## Создание боссов

Боссы - это настоящий вызов, кульминация подготовки в подземелье и настоящий тест на мастерство, когда на кону все. Встречи должны быть долгими, и смерть должна быть реальной угрозой.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 hits to slay 
damageMultiplier: 1.4 #2.5 hearts of dmg
```

**Эти рекомендуемые значения являются лишь приблизительными оценками, и окончательные значения должны быть скорректированы в соответствии с конкретными встречами.**

**Это особенно важно для финальных боссов подземелья; вы можете захотеть значительно превысить рекомендуемое значение 7.0 для healthMultiplier, чтобы сделать финальный бой действительно эпическим.**

***

# Упаковка контента EliteMobs для распространения

Наконец, вам, вероятно, потребуется упаковать ваше подземелье для хранения или распространения.

EliteMobs имеет систему импорта, которая позволяет администраторам быстро импортировать, устанавливать и удалять контент. [Вы можете узнать, как это работает, здесь.]($language$/elitemobs/setup.md)

## Обрезка миров

Иногда вам может потребоваться уменьшить размер своего мира Minecraft, чтобы сделать его легче и, следовательно, проще распространять. Этого можно добиться с помощью плагина [WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Несмотря на то, что в описании плагина указано, что он поддерживает Minecraft только до версии 1.19, он работает без проблем в последней версии Minecraft по состоянию на 25 января 2024 года.

<details>
<summary>Совет</summary>
Если вы делаете это в первый раз, может быть разумно создать резервную копию своего мира на случай, если что-то пойдет не так.
</details>

После установки плагина перейдите в середину мира или в определенную область, которую вы хотите обрезать. Затем выполните команду `/wb set x`, где `x`  представляет собой приблизительный размер радиуса, который вы хотите для своей области.

<details>
<summary>Совет</summary>
Если <code>/wb</code>  не работает, попробуйте <code>/worldborder:wb</code>.
</details>

После выполнения этой команды полетите к краям своего мира, чтобы убедиться, что граница мира была установлена правильно и покрывает требуемый размер. Вы узнаете, что достигли края границы мира, когда вас оттолкнут назад, а в чате появится сообщение.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

На изображении выше мы хотим обрезать мир вокруг фиолетовых блоков, оставив только несколько чанков вокруг них. Чтобы сделать это, мы становимся в середине фиолетовой области на красных квадратах и запускаем `/wb set 50`, устанавливая границу мира чуть за пределами фиолетовой области.

Далее мы используем команду `/wb trim [freq] [pad]`, где частота установлена на 200, а pad на 20. Pad  определяет, сколько чанков нужно оставить вокруг границы мира (фиолетовая область), а частота определяет, сколько чанков будет обработано в секунду. После запуска `/wb trim 200 20` нас попросят подтвердить, выполнив `/wb trim confirm`. Мы подтверждаем действие, и после некоторого времени наш мир будет обрез

