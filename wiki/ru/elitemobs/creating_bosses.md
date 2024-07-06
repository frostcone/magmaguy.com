[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание пользовательских боссов

# Прежде чем начать

## Куда помещаются файлы боссов?

Файлы боссов помещаются в папку конфигурации `~/plugins/EliteMobs/custombosses`.

Можно создавать подпапки, например `~/plugins/EliteMobs/custombosses/mybosses`. Это рекомендуется для лучшей организации.

Один файл определяет одного босса, хотя можно создать несколько копий одного и того же босса, а также установить несколько точек появления для одного и того же файла босса.

Можно использовать [веб-приложение](https://magmaguy.com/webapp/webapp.html), чтобы быстро и легко создавать пользовательских боссов и многое другое.

## Минимальная конфигурация

**Минимальный файл конфигурации для пользовательского босса выглядит так:**
```yml
```

Обратите внимание, что это просто пустой файл. Он все равно создаст пользовательского босса-зомби с пользовательским именем, так как это значения по умолчанию. **Все на этой странице необязательно!**

## Пример босса

<div align="center">

Давайте рассмотрим пример того, как выглядит файл босса.

<details> 
<summary><b>Пример</b></summary>

<div align="left">

```yml
isEnabled: true
entityType: ZOMBIE
name: '&eТестовый босс'
level: dynamic
timeout: 10
isPersistent: false
healthMultiplier: 2.0
damageMultiplier: 0.5
helmet: GOLDEN_HELMET
chestplate: IRON_CHESTPLATE
leggings: LEATHER_LEGGINGS
boots: CHAINMAIL_BOOTS
mainHand: GOLDEN_AXE
offHand: SHIELD
isBaby: false
powers:
- invulnerability_knockback.yml
spawnMessage: Тестовый босс появился!
deathMessage: Тестовый босс был убит игроком $players!
escapeMessage: Тестовый босс сбежал!
locationMessage: 'Тестовый объект: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Я ударил тебя!"
onDamagedMessages:
- "Я получил удар!"
```

</div>

</details>

</div>


## Основные настройки

<div align="center">

### isEnabled

Устанавливает, включен ли босс.

| Key | Values | Default |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### entityType

Устанавливает тип сущности босса.

| Key |                                                                                   Values                                                                                    | Default |
|-|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `entityType` | [Выберите здесь](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html). <br> Значение также должно присутствовать в папке `~plugins/EliteMobs/mobproperties`. | `ZOMBIE`|

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
entityType: ZOMBIE
```

</div>

</details>

***

### name

Устанавливает имя босса.

| Key | Values | Default |
|-|:-:|-|
| `name` | [String](#string), принимает [цветовые коды](#color_codes) и заполнители, перечисленные ниже | "Default Name" |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "$normalLevel &cКрутой босс!"
```
<div align="center">

![create_boss_name_pic_no_level.jpg](../../../img/wiki/create_boss_name_pic_no_level.jpg)

</div>


</div>

</details>

Если вы хотите включить уровень босса в его имя, просто используйте один из следующих заполнителей.

| Заполнитель | Описание | Пример | Вывод (для босса 10-го уровня) |
|-|:-:|:-:|-|
| `$level` | Заменяется на уровень | "$level Крутой босс" | `10 Крутой босс` |
| `$normalLevel` | Заменяется на уровень, предназначенный для обычных мобов | `"$normalLevel Крутой босс"` | `[10] Крутой босс` |
| `$minibossLevel` | Заменяется на уровень, предназначенный для мини-боссов | `"$minibossLevel Крутой босс"` | `〖10〗 Крутой босс` |
| `$bossLevel` | Заменяется на уровень, предназначенный для боссов | `"$bossLevel Крутой босс"` | `『10』 Крутой босс` |
| `$reinforcementLevel` | Заменяется на уровень, предназначенный для подкреплений | `"$reinforcementLevel Крутой босс"` | `〔10〕 Крутой босс` |
| `$eventBossLevel` | Заменяется на уровень, предназначенный для боссов событий | `"$eventBossLevel Крутой босс"` | `「10」 Крутой босс` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "$normalLevel &cКрутой босс!"
```

<div align="center">

![create_boss_name_pic.jpg](../../../img/wiki/create_boss_name_pic.jpg)

</div>

</div>

</details>

***

### level

Устанавливает уровень босса.

| Key | Values | Default |
|-|:-:|-|
| `entityType` | Положительные [целые](#integer) числа или `dynamic` | `dynamic` |

`dynamic` используется для событий и подстраивается под уровень ближайших игроков в момент появления босса.
Не рекомендуется для региональных боссов.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
level: 1
```

</div>

</details>

***

### healthMultiplier

Устанавливает здоровье босса.

| Key | Values | Default |
|-|:-:|-|
| `healthMultiplier` | [Множитель](#multiplier) | `1.0` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
healthMultiplier: 1.5
```

</div>

</details>

***

### damageMultiplier

Устанавливает множитель урона босса.

| Key | Values | Default |
|-|:-:|-|
| `damageMultiplier` | [Множитель](#multiplier) | `1.0` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
damageMultiplier: 1.5
```

</div>

</details>

***

### isBaby

Устанавливает, использует ли босс детскую версию моба. Может быть применено только к мобам, у которых есть детские версии.
Если вы хотите [замаскировать]($language$/elitemobs/libsdisguises.md) босса, но при этом хотите, чтобы он оставался ребенком, будучи замаскированным (убедитесь, что замаскированный объект также поддерживает детскую версию), вы можете использовать эту настройку:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Key | Values | Default |
|-|:-:|-|
| `isBaby` | `true` / `false` | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
isBaby: true
```

</div>

</details>


***

### helmet/chestplate/leggings/boots/mainhand/offhand

Устанавливает броню босса. Не все модели Minecraft способны отображать броню. Броня босса является чисто косметической и не влияет на игровой процесс.

| Key |                                    Values                                     | Default |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Материал](#material), [UUID](https://minecraftuuid.com/)           | нет |
| `chestplate` | [Материал](#material) | нет |
| `leggings` | [Материал](#material) | нет |
| `boots` | [Материал](#material) | нет |
| `mainHand` | [Материал](#material) | нет |
| `offHand` | [Материал](#material) | нет |

**Примечание:** Это поле также позволяет устанавливать пользовательские модели для предметов. Чтобы установить ID пользовательской модели, добавьте ID после типа материала в следующем формате: `ITEM_MATERIAL:ID`. Пример: `DIAMOND_SWORD:1` устанавливает на босса алмазный меч с пользовательской моделью №1 в вашем пакете текстур.

**Примечание 2:** Это поле также позволяет устанавливать пользовательские цвета кожи в формате `ITEM_MATERIAL:CODE`, где код - это шестнадцатеричное представление цвета. Пример: `LEATHER_LEGGINGS:ffa500` создаст оранжевые леггинсы. Вы можете использовать шестнадцатеричные коды, просто удалите `#` из кода. Вы можете получить шестнадцатеричные коды [здесь](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Примечание 3:** Поле шлема также позволяет устанавливать на мобов головы игроков. Просто получите UUID головы игрока, которую вы хотите использовать, и введите его в поле шлема. *Для этого игрок должен быть онлайн, иначе голова будет по умолчанию обычной головой Minecraft.* Вы можете получить UUID игрока [здесь](https://minecraftuuid.com/).

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
helmet: 198c4123-cafc-45df-ba79-02a421eb8ce7
chestplate: DIAMOND_CHESTPLATE:1
leggings: LEATHER_LEGGINGS:ffa500
boots: NETHERITE_BOOTS
mainHand: DIAMOND_SWORD
offHand: SHIELD
```

<div align="center">

![create_boss_armor.jpg](../../../img/wiki/create_boss_armor.jpg)

</div>

</div>

</details>

***

### powers

Устанавливает способности, которыми обладает босс.

| Key | Values | Default |
|-|:-:|-|
| `powers` | См. список ниже | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
powers:
- hyper_loot.yml
- attack_arrow.yml
```

</div>

</details>

*Примечание: Вы можете ознакомиться с [этой страницей]($language$/elitemobs/premade_powers.md), чтобы увидеть список готовых способностей, которые вы можете использовать.*

***

### Промежуточная конфигурация - Создание подкреплений

Подкрепления также относятся к категории способностей, для них используются следующие настройки:

<details> 

<summary><b>Настройки подкреплений</b></summary>

| Key | Описание |                                                                                                             Values                                                                                                             | Default |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Что вызывает появление подкрепления. Обязательный параметр. |                                                                                                    См. список ниже                                                                                                     | нет |
| `filename` | Имя файла босса, который появится в качестве подкрепления. Обязательный параметр. |                                                                                                       [String](#string)                                                                                                        | нет |
| `chance` | Вероятность появления подкрепления. Необязательный параметр. |                                                                                                       [Double](#double)                                                                                                        | `1.0` |
| `amount` | Устанавливает количество появляющихся подкреплений. Необязательный параметр. |                                                                                                      [Integer](#integer)                                                                                                       | `1` |
| `inheritAggro` | Заставляет подкрепление наследовать агрессию от босса. Необязательный параметр. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Заставляет подкрепления появляться в радиусе 30 блоков от босса. Необязательный параметр. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Заставляет подкрепление наследовать уровень босса. Необязательный параметр. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Заставляет подкрепление появляться с помощью [пользовательской системы появления]($language$/elitemobs/creating_spawns.md). Используется только для `summonType: GLOBAL`
| `location` | Место появления. Необязательный параметр. | `world_name,x,y,z` или `x,y,z` для местоположения относительно босса. Смещение относительно точки появления для региональных боссов. Вы также можете использовать `same_as_boss`, чтобы подкрепления появлялись в том же мире, что и босс. | нет |
| `lightningRod` | Специальная настройка для `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Заставляет кристаллы Края создавать молнии вокруг себя. Необязательный параметр. |                                                                                                        `true` / `false`                                                                                                        | нет |

</details>

Типы призыва устанавливают условия для появления подкреплений. Ниже приведен список допустимых типов призыва:

<details> 

<summary><b>Типы призыва</b></summary>

| Value |                                                                         Описание                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Создает подкрепления только один раз, когда босс получает урон в первый раз.                                           |
| `ON_HIT`  |                                                              Создает подкрепления при каждом ударе.                                                              |
| `ON_COMBAT_ENTER` |                                                   Создает подкрепления, когда босс вступает в бой.                                                    |
| `GLOBAL` | Создает подкрепление для каждого игрока онлайн. Требует, чтобы ключ `customSpawn` имел действующую [пользовательскую точку появления]($language$/elitemobs/creating_spawns.md). |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Размещает подкрепления в виде кристаллов Края при вступлении в бой, используется только для пользовательских боев с драконами.                                  |

</details>

Обратите внимание, что можно создавать подкрепления и с помощью [Elite Scripts]($language$/elitemobs/creating_powers.md), что дает больше возможностей для настройки.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
powers:
- summonType: ON_COMBAT_ENTER
  filename: test_boss.yml
  chance: 0.5
  amount: 5
  inheritAggro: true
  spawnNearby: true
  inheritLevel: true
  customSpawn: false
  location: same_as_boss,10,20,30
  lightningRod: false
```

</div>

</details>

### Экспертная конфигурация - Создание собственных способностей

Можно создавать собственные способности, либо в самом файле босса, либо в виде нового файла конфигурации в папке способностей. Подробнее об этом можно узнать [здесь]($language$/elitemobs/creating_powers.md).

### Ограничение способностей в зависимости от сложности инстанцированного подземелья

[Инстанцированные подземелья]($language$/elitemobs/dungeons.md&section=instanced-dungeons) могут иметь настройки сложности, и можно сделать так, чтобы определенная способность была доступна только на определенных уровнях сложности.

<details> 

<summary><b>Параметры ограничения способностей</b></summary>

<div align="left">

| Key | Описание | Values | Default |
|-|:-:|:-:|-|
| `filename` | Имя файла способности. | [String](#string) | нет |
| `difficultyID` | Название сложности, соответствующее названию сложности в пакете подземелья. | [String](#string) | нет |

</div>

</details>

Это будет применяться только к инстанцированным подземельям.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
powers:
- filename: movement_speed.yml
  difficultyID:
  - myDifficultyName1
  - myDifficultyName2
  - myDifficultyName3
```

</div>

</details>

***

### spawnMessage

Устанавливает сообщение, отправляемое при появлении босса. Требуется настройка [announcementPriority](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `spawnMessage` | [Строки](#string) и [цветовые коды](#color_codes) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
spawnMessage: Я снова восстал!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### deathMessages

Устанавливает список сообщений, отправляемых при смерти босса. Требуется настройка [announcementPriority](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `deathMessages` | [Строки](#string), [цветовые коды](#color_codes) и заполнители, перечисленные ниже | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Тестовый босс был убит!'
- '&c&l    1-й нанесший урон: $damager1name &cс $damager1damage урона!'
- '&6&l    2-й нанесший урон: $damager2name &6с $damager2damage урона!'
- '&e&l    3-й нанесший урон: $damager3name &eс $damager3damage урона!'
- '&4Убийцы: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

В сообщениях о смерти используются следующие заполнители:

<details> 

<summary><b>Заполнители</b></summary>

| Значение | Описание |
|-|:-:|
| `$damager1name` | Имя игрока, нанесшего наибольший урон |
| `$damager2name` | Имя игрока, нанесшего второй по величине урон |
| `$damager3name` | Имя игрока, нанесшего третий по величине урон |
| `$damager1damage` | Количество урона, нанесенного игроком, нанесшим наибольший урон |
| `$damager2damage` | Количество урона, нанесенного игроком, нанесшим второй по величине урон |
| `$damager3damage` | Количество урона, нанесенного игроком, нанесшим третий по величине урон |
| `$players` | Отображает список всех игроков, нанесших урон |

</details>

### onKillMessage

Устанавливает сообщение, отправляемое, когда босс убивает игрока. Требуется настройка [announcementPriority](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `onKillMessage` | [Строки](#string) и [цветовые коды](#color_codes) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
onKillMessage: Я победил, ты проиграл!
```

<div align="center">

![create_boss_spawn_message.jpg](../../../img/wiki/create_boss_spawn_message.jpg)

</div>

</div>

</details>

***

### slimeSize

<div align="center">

Устанавливает размер босса-слизня, но работает только для слизней и магма-кубов.

</div>

| Key | Values | Default |
|-|:-:|-|
| `slimeSize` | [Integer](#integer) | `4` |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
slimeSize: 5
```

</div>

</details>

***

### neutral

<div align="center">

Устанавливает, будет ли босс появляться нейтральным или нет. Применяется только к типам сущностей, которые могут быть нейтральными, например, волки или железные големы.

</div>

| Key | Values | Default |
|-|:-:|-|
| `neutral` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
neutral: true
```

</div>

</details>

## Дополнительные настройки

<div align="center">

### timeout

Устанавливает время в минутах, через которое пользовательский босс исчезнет.

| Key | Values | Default |
|-|:-:|-|
| `timeout` | Время (в минутах) [Integer](#integer) | `0` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
timeout: 20
```
Босс сбежит через 20 минут.

</div>

</details>

***

### isPersistent

Устанавливает, может ли босс пережить выгрузку чанка. Рекомендуется только для боссов событий.

| Key | Values | Default |
|-|:-:|-|
| `isPersistent` | `true` / `false` | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

Пример:

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Устанавливает оружие, против которого боссы могут быть сильными или слабыми.

| Key |        Values         | Default |
|-|:---------------------:|-|
| `damageModifiers` | [Material](#material) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
damageModifiers:
- material:DIAMOND_SWORD,multiplier:0.8
- material:TRIDENT,multiplier:2.0
```

</div>

В этом примере боссы будут получать только 80% урона от алмазных мечей (или на 20% меньше), но будут получать 200% урона от трезубцев (или в 2 раза больше).

</details>

***

### normalizedCombat



Изменяет урон и максимальное здоровье босса в соответствии со значениями нормализованной сущности в `~/plugins/EliteMobs/mobproperties`. Это значение по умолчанию для региональных боссов, чтобы гарантировать плавную кривую сложности.

| Key | Values | Default |
|-|:-:|-|
| `normalizedCombat` | `true` / `false` | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

Пример:
```yml
normalizedCombat: true
```

</div>

</details>

***

### escapeMessage

Устанавливает сообщение, которое будет транслироваться игрокам, когда босс сбежит с помощью механики [тайм-аута](#timeout). Требуется настройка [announcementPriority](#announcementPriority).

| Key | Values | Default |
|-|:-:|-|
| `escapeMessage` | [String](#string) | нет |


<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Sayonara!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Устанавливает сообщение, отображаемое на панели босса. Используется для отслеживания здоровья пользовательского босса и его местоположения на сервере. Требуется настройка [annoucementPriority](#annoucementPriority).

| Key |                                      Values                                      | Default |
|-|:--------------------------------------------------------------------------------:|-|
| `locationMessage` | [String](#string), [цветовые коды](#color_codes) и заполнители, перечисленные ниже | нет |

Заполнители:

| Значение | Описание |
|-|:-:|
| `$distance` | Заменяется расстоянием от игрока до пользовательского босса. Это предпочтительный вариант. |
| `$location` | Заменяется координатами местоположения x y z пользовательского босса |


<details>


<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Крутой босс: Находится в $location всего в $distance блоках!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Это будет выглядеть примерно так: `Крутой босс: Находится в 414,55,347 всего в 10 блоках!`

</details>

***

### uniqueLootList

Устанавливает [пользовательские предметы]($language$/elitemobs/creating_items.md), которые выпадают из босса.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `uniqueLootList` | [List](#string_list) | нет |

Записи добычи в пользовательской добыче следуют формату таблицы добычи. [Информация об этом здесь!]($language$/elitemobs/loot_tables.md) Обратите внимание, что в некоторых старых файлах могут использоваться устаревшие таблицы добычи, которые выглядят иначе, чем в примере.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.02
  - minecraft:type=DIAMOND:amount=1:chance=0.9
  - SCRAP:level=5-10:amount=10-20:ignorePlayerLevel=false:chance=0.5
  - UPGRADE_ITEM:level=5-10:amount=1-2:ignorePlayerLevel=false:chance=0.1
  - magmaguys_toothpick.yml:0.5:elitemobs.*
```

</div>

</details>

***

### dropsEliteMobsLoot

Устанавливает, будет ли босс выкидывать добычу EliteMobs, за исключением предметов в [`uniqueLootList`](#uniqueLootList). Включает монеты.

| Key | Values | Default |
|-|:-:|-|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Рекомендуется установить значение false для мобов подкрепления.

<details> 

<summary><b>Пример</b></summary>

<div align="left">


```yml
dropsEliteMobsLoot: true
```

</div>

</details>

***

### dropsVanillaLoot

Устанавливает, будет ли пользовательский босс выкидывать ванильную добычу, обычно связанную с его ванильным типом моба.

| Key | Values | Default |
|-|:-:|-|
| `dropsVanillaLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dropsVanillaLoot: true
```

</div>

</details>

***

### dropsRandomLoot

Устанавливает, будет ли пользовательский босс выкидывать процедурно сгенерированную добычу из EliteMobs. Не включает элитные монеты.

| Key | Values | Default |
|-|:-:|-|
| `dropsRandomLoot` | `true` /  `false` | `true` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dropsRandomLoot: true
```

</div>

</details>

***

### trails

Устанавливает след, который босс оставляет позади себя при движении.

| Key | Values | Default |
|-|:-:|-|
| `trails` | [Частицы](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) или [материалы предметов](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
trails:
- CLOUD
```

</div>

</details>

***

### onDamageMessages

Устанавливает сообщение, которое босс-моб отображает, когда попадает по игроку. Это список, и используемое сообщение выбирается случайным образом из списка.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDamageMessages` | [List](#string_list) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Я ударил тебя!"
- "Ха-ха, я ударил тебя!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Устанавливает сообщение, которое босс-моб отображает, когда получает урон от игрока. Это список, и используемое сообщение выбирается случайным образом из списка.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDamagedMessages` | [List](#string_list) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Ты ударил меня!"
- "Я получил удар!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Устанавливает сущность, на которую босс будет садиться и ездить.

| Key | Values | Default |
|-|:-:|-|
| `onDamagedMessages` | [Имя файла босса для посадки](#filename) или [тип сущности](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | нет |

Не пытайтесь заставить босса сесть на самого себя.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
mountedEntity: wild_wolf.yml
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_mounted.jpg)

</div>

</div>

</details>

Примечание: Региональные боссы будут разделять свой поводок с сущностью, на которую они садятся, что означает, что оба будут перетащены обратно к точке появления, если превысят расстояние, разрешенное их поводком.

***

### announcementPriority

Устанавливает уровень приоритета для объявлений. Более низкие приоритеты означают, что объявления не делаются, более высокие приоритеты могут объявлять не только в чате, но и в Discord, если настроено.

| Key | Values | Default |
|-|:-:|-|
| `announcementPriority` | [Integer](#integer) | `1` |

Вот список того, что делают приоритеты:

| Значение |                                                                            Описание                                                                            |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   Босс будет полностью молчать, без сообщений объявлений.                                                   |
| `1` |                                Это значение по умолчанию. Боссы могут отправлять сообщения в чат, при появлении, смерти и побеге.                                |
| `2` |                               В дополнение к функциям из `1`, босс будет отслеживаться игроками через меню `/em`.                                |
| `3` | В дополнение к функциям из `2`, широковещательные сообщения будут дублироваться в Discord, если настроено. [Информация о настройке Discord здесь.]($language$/elitemobs/discordsrv.md) |

Вот пример босса, который отслеживается, способен отправлять сообщения о появлении/смерти/побеге в чат и Discord:

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Примечание**: Вам нужно будет настроить spawnMessage, deathMessage/deathMessages, escapeMessage для объявлений в чате и Discord, а также locationMessage для функции отслеживания, если вы хотите использовать соответствующий уровень приоритета объявлений.

***

### followDistance

Устанавливает расстояние, на котором боссы агрятся и вступают в бой.

| Key | Values | Default |
|-|:-:|-|
| `followDistance` | [Double](#double) | нет, используются значения по умолчанию из Minecraft |

Примечание 1: Региональные боссы имеют половину `followDistance`, когда находятся вне боя. Это сделано для того, чтобы они не агрились слишком издалека, что может вызвать раздражающие проблемы с боем из-за ограничений поводка.

Примечание 2: Чем выше `followDistance`, тем более интенсивным для процессора сервера становится босс. Используйте осторожно и ответственно!

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Устанавливает радиус 30 блоков, в пределах которого, если игрок окажется рядом с боссом, босс начнет преследовать/атаковать игрока.

</details>

***

### onDeathCommands

Устанавливает список команд, которые будут выполняться при смерти пользовательского босса.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onDeathCommands` | [List](#string_list) | нет |

Список поддерживает следующие заполнители:

| Значение | Описание |
|-|:-:|
| `$level` | Заполнитель для уровня босса. |
| `$name` | Заполнитель для имени босса. |
| `$chance=x$` | Дает команде шанс на выполнение. |
| `$players` | Заставляет команду выполняться один раз для каждого игрока в списке нанесших урон и каждый раз заменяет его именем пользователя другого игрока из этого списка. |
| `$locationX` | Координата X босса в момент смерти. |
| `$locationY` | Координата Y босса в момент смерти. |
| `$locationZ` | Координата Z босса в момент смерти. |
| `$damager1name` | Имя пользователя игрока, нанесшего наибольший урон |
| `$damager2name` | Имя пользователя игрока, нанесшего второй по величине урон |
| `$damager3name` | Имя пользователя игрока, нанесшего третий по величине урон |

Взгляните на пример ниже, чтобы лучше понять, как это работает.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players убил $name! Это был уровень $level!"
- "$chance=0.5$ say Отличное убийство!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Если Player1, Player2 и Player3 все нанесли урон боссу перед его убийством, то вывод команды в консоли будет следующим:

<div align="left">

```
say Player1 убил CustomBossName! Это был уровень X!
say Player2 убил CustomBossName! Это был уровень X!
say Player3 убил CustomBossName! Это был уровень X!
```

</div>

Дополнительно, есть 50% шанс, что также будет выведено следующее:

<div align="left">

```
say Отличное убийство!
```

</div>

</details> 

***

### onSpawnCommands

Устанавливает список команд, которые будут выполняться при появлении босса.

| Key |        Values        | Default |
|-|:--------------------:|-|
| `onSpawnCommands` | [List](#string_list) | нет |

**Использует те же заполнители, что и [onDeathCommands](#onDeathCommands)!** Заполнители нанесших урон не будут применяться, так как на данный момент нанесших урон не будет.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onSpawnCommands:
- say Босс появился!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_onspawncommands.jpg)

</div>

</div>

</details>

***

### onCombatEnterCommands

Устанавливает список команд, которые будут выполняться, когда босс вступает в бой.

| Key | Values | Default |
|-|:-:|-|
| `onCombatEnterCommands` | [List](#string_list) | нет |

**Использует те же заполнители, что и [onDeathCommands](#onDeathCommands)!** Заполнители нанесших урон не будут применяться, так как на данный момент нанесших урон не будет.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onCombatEnterCommands:
- say Босс вступил в бой!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatentercommands.jpg)

</div>

</div>

</details>

***

### onCombatLeaveCommands

Устанавливает список команд, которые будут выполняться, когда босс выходит из боя.

| Key | Values | Default |
|-|:-:|-|
| `onCombatLeaveCommands` | [List](#string_list) | нет |

**Использует те же заполнители, что и [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Босс вышел из боя!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Устанавливает маскировку LibsDisguises, если этот плагин включен. [Подробнее здесь.]($language$/elitemobs/libsdisguises.md)

| Key | Values | Default |
|-|:-:|-|
| `disguise` | [String](#string) | нет |
| `customDisguiseData` | [String](#string) | нет |

<details> 

<summary><b>Пример маскировки</b></summary>

<div align="left">

```yml
disguise: CHICKEN
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_disguise.jpg)

</div>

</div>

</details>

<details> 

<summary><b>Пример пользовательской маскировки</b></summary>

<div align="left">

```yml
disguise: custom:the_beast_sanctuary_beast
customDisguiseData: player the_beast_sanctuary_beast setskin {"id":"44e6d42b-bd8d-4e48-873b-fae7afed36e4","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTY2NjcwNjYwODA1MCwKICAicHJvZmlsZUlkIiA6ICI3MmY5MTdjNWQyNDU0OTk0YjlmYzQ1YjVhM2YyMjIzMCIsCiAgInByb2ZpbGVOYW1lIiA6ICJUaGF0X0d1eV9Jc19NZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS82YmYyMTY4NmM1MGQ1ODhmZmExMDZhZDdjNmViZTk1ZWZiMjE2NDU5ODRjZDFjZWYwODkzNDc4NzMzNmI2YTI3IiwKICAgICAgIm1ldGFkYXRhIiA6IHsKICAgICAgICAibW9kZWwiIDogInNsaW0iCiAgICAgIH0KICAgIH0KICB9Cn0=","signature":"jSsQvpUeWVtyqjtnydPadormkrZLVihetiX4dFQb3+BF/1x6wOgsNKRnnwj6J1mfu2im79LYEJbL+fQ9p1SJIW1uZ6hV7vPSAGUopyXGHNibNXorfV/dGjM77S0t86Jls50XWgJAnLn5RdhQcHahDAHHZ8to6K0HW5gvKKSalR5X/myaiV0E5ujJ+LUFWIiuDmtsmyxTX1zsohyYrVMo/4sD0DpBN+as95wO476gLb5fDTDV569QwExlDOt60W8qSzPw6ncYsOKJIiRE3EddspUm3/NrfDiKApUh8UbzVtwu1XlVAxWNgYN3PkqhWKuE4kvORQuoSJzOgSHkiqdXsQOED2HXfOKdfsnpZUwjepIU5A+/mu0gc3mPQPToKSss2bC1nXn//0bOZZSuQRgTS6PkKDHIQ1nClSZQZlJIsiLmaaN2k1tIHTIlDquKN6G1Ta9c3t6G5kugjqRo78ebbt7l3e0Z3BcdOkuO2WbvBjIg5Uiqyf+cYDZedJ+OEOqL/U6VVlsmbw0rd5deHrbnPn9cRzmWGjrXnxIlAszl+0Uqabj/BrkWcbBCwZJEPaV1hHpC4nJX1m5xvKZHB2Bw0AYWaQ3f3tRBbCA/xqwCS0Px1QohzV0nvtiMbjB38ziT1M5DgLtAVLcHPio7THZMxXAi4IjEIMac9ODbh5OxthA="}],"legacy":false}
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_custom_disguise.jpg)

</div>

</div>

Устанавливает пользовательскую маскировку из skindex. [Проверьте эту страницу]($language$/elitemobs/libsdisguises.md), чтобы узнать, как правильно отформатировать эти данные.

</details>

***

### customModel

Устанавливает пользовательскую модель для использования, если у вас есть пользовательская модель и ModelEngine. [Подробнее здесь.]($language$/elitemobs/custom_models.md)

| Key | Values | Default |
|-|:-:|-|
| `customModel` | [String](#string) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
customModel: your_model
```

</div>

</details>

***

### frozen

Устанавливает, может ли босс двигаться. Замороженные боссы все еще могут атаковать.
</br>*Примечание: это может не работать с некоторыми сущностями.*

| Key | Values | Default |
|-|:-:|-|
| `frozen` | `true` / `false` | `false` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
frozen: true
```

</div>

</details>

***

### song

Устанавливает музыку, которую будет проигрывать босс, начиная с момента его появления. Требуется, чтобы файл .ogg с песней находился в ресурспаке.

| Key | Values | Default |
|-|:-:|-|
| `song` | [String](#string) | нет |

<details> 

<summary><b>Пример</b></summary>

Существует два способа настройки музыки. Вот первый:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Это воспроизведет песню ice_queen.idle в течение 76370 тиков, а затем зациклит ее. Обратите внимание, что местоположение песни определяется ресурспаком.

Вот второй способ настройки музыки:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Это воспроизведет песню ice_queen.end_transition в течение 14328 тиков, а затем перейдет к ice_queen.end_loop на 28657 тиков и зациклит end_loop.

Это позволяет боссам иметь "вступление" или "переходную" песню, а затем основную дорожку, которая зацикливается.

</div>

</details>

***

### cullReinforcements

Устанавливает, будут ли подкрепления босса удалены, когда босс умрет.

| Key | Values | Default |
|-|:-:|-|
| `cullReinforcements` | `true` / `false` | `true` |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
cullReinforcements: true
```

</div>

</details>

***

### movementSpeedAttribute

Устанавливает скорость движения босса.
</br>*Примечание: значение выше 0,36 может быть слишком быстрым.*

| Key | Values | Default |
|-|:-:|-|
| `movementSpeedAttribute` | [Double](#double) | нет |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
movementSpeedAttribute: 0.3
```

</div>

</details>

## Фазы босса

<div align="center">

Боссы могут иметь фазы, которые меняются, когда босс достигает определенного процента здоровья. Когда это происходит, босс начинает использовать другой файл конфигурации, что означает, что все, что касается босса, может измениться, включая такие вещи, как тип сущности.
</br>Чтобы узнать больше о фазах босса, нажмите [здесь]($language$/elitemobs/creating_boss_phases.md).


| Key | Описание | Values | Default |
|-|:-:|-|-|
| `phases` | Устанавливает фазы, которые будет иметь босс. Обязательный параметр. | [List](#string_list) | нет |
| `phaseSpawnLocation` | Устанавливает место появления босса фазы. Необязательный параметр. | [String](#string) | нет |


<details> 

<summary><b>Пример</b></summary>

<div align="left">

Для этого примера мы покажем три разных файла конфигурации.

Первый файл конфигурации босса: phase_1_boss.yml

```yml
name: "Фаза 1"
entityType: ZOMBIE
phases:
- phase_2_boss.yml:0.60
- phase_3_boss.yml:0.30
```

Второй файл конфигурации босса: phase_2_boss.yml

```yml
name: "Фаза 2"
entityType: SKELETON
```

Третий файл конфигурации босса: phase_3_boss.yml

```yml
name: "Фаза 3"
phaseSpawnLocation: same_as_boss,10,64,100,0,0
entityType: RAVAGER
```

</div>

Этот босс будет переключаться на файл конфигурации `phase_2_boss.yml` при 60% здоровья и на файл конфигурации `phase_3_boss.yml` при 30% здоровья в том же мире, что и фаза 2, и с координатами x=10, y=64 и z=100. Тип сущности и имя босса также изменятся.

Формат записи: `filename:healthPercentage`.

phaseSpawnLocation - необязательный параметр, если он не установлен, босс будет менять фазы там, где он стоит.

</details>

Следующие вещи важно знать при разработке фазового босса:

<div align="left">

- Файл конфигурации для первой фазы устанавливает все фазы босса.
- Угроза/подсчитанный урон сохраняется между фазами для игроков.
- Переключение фаз основано на проценте потерянного здоровья, который сохраняется при переключении на другую фазу. Это означает, что увеличение или уменьшение healthMultiplier между фазами не вылечит и не повредит босса, он все равно переключится с тем же процентом, но будет иметь больше или меньше здоровья для этой фазы.
- Фазовые боссы возвращаются к фазе 1, если выходят из боя.
- Фазовые боссы, которые также являются региональными боссами, разделяют один и тот же радиус поводка и механику тайм-аута во всех фазах и будут возрождаться как босс фазы 1, когда таймер закончится.
- Файл конфигурации для последней фазы устанавливает добычу для босса.
- Фазы не могут быть пропущены - урон от перебора все равно заставит босса сменить фазу на заданный процент.
- Фазовые боссы, имеющие средства передвижения, перестают быть верхом при смене фаз.

</div>

</div>

</div>

***

## Региональные боссы

<div align="center">



Региональные боссы - это особый тип пользовательских боссов, которые появляются в определенном настроенном месте и могут возрождаться в этом месте после задержки. Кроме того, у них могут быть поводки, которые гарантируют, что они останутся в определенной зоне, среди других функций.

Они используются для всего контента подземелья. Чтобы узнать больше о региональных боссах, нажмите [здесь]($language$/elitemobs/creating_world_bosses.md).

| Ключ | Описание | Значения | По умолчанию |
|-|:-:|:-:|-|
| `isRegionalBoss` | Устанавливает, является ли босс региональным. Должно быть `true`, если вы хотите регионального босса.  | `true` /  `false` | `false` |
| `spawnLocation` | Устанавливает места появления босса.  | Добавьте их с помощью команды `/em addSpawnLocation [filename.yml]`! | нет |
| `spawnCooldown` | Устанавливает время восстановления босса, в <b>минутах</b>. | [Integer](#integer) | `0` |
| `leashRadius` | Устанавливает расстояние, на которое босс может отойти от своей точки появления, прежде чем его оттянет назад. | [Double](#double) | нет |
| `onSpawnBlockStates` | Устанавливает блоки, которые босс будет изменять при появлении. | Проверьте команды ниже | нет |
| `onRemoveBlockStates` | Устанавливает блоки, которые босс будет изменять при исчезновении. | Проверьте команды ниже | нет |

Как указано, региональные боссы могут иметь `onSpawnBlockStates` и `onRemoveBlockStates`.

Это очень полезная функция для изменения арены боя во время боя, особенно в сочетании с переключателями фаз, поскольку становится возможным открывать и закрывать арены боя путем изменения состояний блоков.

Формат для них слишком сложен для написания вручную, поэтому существует несколько команд, которые помогут вам их настроить:

| Команда | Описание |
|-|:-:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Начинает регистрацию ручного выбора блоков для состояний блоков при появлении или удалении. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Редактирует состояния блоков при появлении или удалении. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Позволяет администраторам выбирать большие области блоков для сохранения в виде состояний. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Позволяет администраторам редактировать большие области блоков для сохранения в виде состояний. |

<details> 

<summary><b>Пример использования:</b></summary>

<div align="left">

Допустим, вы хотите сделать бой, где босс появляется на арене с открытой дверью, и вы хотите, чтобы дверь закрывалась, когда начинается бой, и снова открывалась, когда бой заканчивается.

Для этого вам понадобятся две фазы босса и три разных набора состояний блоков. Для этого примера я назову эти фазы phase_1_boss.yml и phase_2_boss.yml соответственно.

1) Используйте `/em registerblocks phase_1_boss.yml on_spawn` или `/em registerblocksedit phase_1_boss.yml on_spawn`, чтобы зарегистрировать блоки двери в их открытом состоянии.

Это означает регистрацию блоков воздуха. Здесь рекомендуется выбор области.

Это необходимо, чтобы убедиться, что дверь открыта, когда босс появляется, чтобы у игроков гарантированно был вход.

2) Используйте `/em registerblocks phase_2_boss.yml on_spawn` или `/em registerblocksedit phase_2_boss.yml on_spawn`, чтобы зарегистрировать блоки двери в их закрытом состоянии.

Это означает регистрацию твердых блоков двери, которые будут препятствовать выходу игрока.

Это необходимо, чтобы изменить дверь на твердую, когда босс входит во 2-ю фазу, предотвращая выход игроков.

3) Используйте `/em registerblocks phase_2_boss.yml on_remove` или `/em registerblocksedit phase_2_boss.yml on_remove`, чтобы зарегистрировать блоки двери в их открытом состоянии.

Это означает повторную регистрацию тех же блоков из первого шага (блоков воздуха).

Это необходимо, чтобы открыть дверь, когда босс умрет, позволяя игрокам покинуть арену.

</div>

</details>

</div>

***

### alert

<div align="center">

Устанавливает, находится ли босс в состоянии боевой готовности. По умолчанию региональные боссы замедляются и имеют меньшее расстояние агрессии, когда они не находятся в бою. Этот параметр предотвращает замедление региональных боссов и уменьшение расстояния агрессии вне боя, поэтому они всегда будут вести себя одинаково в бою или вне боя.

</div>

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `alert` | [Boolean](#boolean) | `true` |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
alert: true
```

</div>

</details>

***

### removeAfterDeath

<div align="center">

Устанавливает, будет ли региональный босс безвозвратно удален после убийства. Это то, что BetterStructures использует для святынь, где региональный босс предназначен для борьбы только один раз, а затем никогда больше в этом месте. 

</div>

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `removeAfterDeath` | [Boolean](#boolean) | `false` |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
removeAfterDeath: true
```

</div>

</details>

***

## Инстансные боссы

<div align="center">

Инстансные боссы - это подтип региональных боссов, используемых в инстансных подземельях.

| Ключ | Описание | Значения | По умолчанию |
|-|:-:|:-:|-|
| `instanced` | Делает пользовательского босса инстансным. Обязательный параметр. | `true` / `false` | `false` |


Установка боссов в инстансные обязательна для правильной работы инстансных подземелий. Мы также рекомендуем удалить поводки для любых инстансных боссов.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>


