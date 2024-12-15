```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание пользовательских боссов

# Перед началом

## Куда помещать файлы боссов?

Файлы боссов помещаются в папку конфигурации `~/plugins/EliteMobs/custombosses`.

Можно создавать подпапки, например `~/plugins/EliteMobs/custombosses/mybosses`. Это рекомендуется для поддержания порядка.

Один файл определяет одного босса, хотя можно создать одного и того же босса несколько раз и даже установить несколько мест появления для одного и того же файла босса.

Можно использовать [веб-приложение](https://magmaguy.com/webapp/webapp.html) для быстрого и легкого создания пользовательских боссов и многого другого.

## Минимально возможная конфигурация

**Минимальный файл конфигурации для пользовательского босса выглядит следующим образом:**
```yml
```

Обратите внимание, что это просто пустой файл. Это все равно создаст пользовательского босса-зомби с пользовательским именем, так как это значения по умолчанию. **Все на этой странице не является обязательным!**

## Пример босса

<div align="center">

Давайте посмотрим на пример того, как выглядит файл босса.

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
spawnMessage: Появился тестовый босс!
deathMessage: Тестовый босс был убит $players!
escapeMessage: Тестовый босс сбежал!
locationMessage: 'Тестовый объект: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Я тебя ударил!"
onDamagedMessages:
- "Меня ударили!"
```

</div>

</details>

</div>


## Основные настройки

<div align="center">

### isEnabled

Устанавливает, включен ли босс.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

| Ключ |                                                                                   Значения                                                                                    | По умолчанию |
|---|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `name` | [Строка](#string), принимает [коды цветов](#color_codes) и плейсхолдеры, перечисленные ниже | "Имя по умолчанию" |

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

Если вы хотите включить уровень босса в поле имени, просто используйте один из следующих плейсхолдеров.

| Плейсхолдер | Описание | Пример |Вывод (для босса 10 уровня) |
|---|:---:|---|---|
| `$level` | Заменяет уровнем | "$level Крутой босс" | `10 Крутой босс` |
| `$normalLevel` | Заменяет уровнем, сделано для обычных мобов | `"$normalLevel Крутой босс"` | `[10] Крутой босс` |
| `$minibossLevel` | Заменяет уровнем, сделано для мини-боссов | `"$minibossLevel Крутой босс"` | `〖10〗 Крутой босс` |
| `$bossLevel` | Заменяет уровнем, сделано для боссов | `"$bossLevel Крутой босс"` | `『10』 Крутой босс` |
| `$reinforcementLevel` | Заменяет уровнем, сделано для подкреплений | `"$reinforcementLevel Крутой босс"` | `〔10〕 Крутой босс` |
| `$eventBossLevel` | Заменяет уровнем, сделано для боссов событий | `"$eventBossLevel Крутой босс"` | `「10」 Крутой босс` |

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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `level` | Положительные [целые](#integer) числа или `dynamic` | `dynamic` |

`dynamic` используется для событий и подстраивается под уровень ближайших игроков во время появления босса.
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

### scale

Устанавливает масштаб (размер) босса.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `scale` | [Множитель](#multiplier) | `1.0` |

При масштабировании `1.0` представляет размер по умолчанию. Чтобы сделать сущность больше, увеличьте значение (например, `1.2`). Чтобы сделать сущность меньше, уменьшите значение (например, `0.8`).

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
scale: 1.2
```

</div>

</details>

***

### bossType

Устанавливает тип босса. Это используется для отображения полос здоровья босса и других функций.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` заставит плагин отображать полосы здоровья, когда игроки сражаются с боссами этих типов.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
bossType: MINIBOSS
```

</div>

</details>

***

### healthMultiplier

Устанавливает здоровье босса.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает, использует ли босс детеныша моба. Можно применить только к мобам с детенышами.
Если вы хотите [замаскировать]($language$/elitemobs/libsdisguises.md) босса, но хотите, чтобы он оставался детенышем во время маскировки (убедитесь, что сущность маскировки также поддерживает вариант детеныша), вы можете использовать эту настройку:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает броню босса. Не все модели minecraft могут отображать броню. Броня босса носит чисто косметический характер и не влияет на игровой процесс.

| Ключ |                                    Значения                                     | По умолчанию |
|---|:-----------------------------------------------------------------------------:|---|
| `helmet` |           [Материал](#material), [UUID](https://minecraftuuid.com/)           | нет |
| `chestplate` | [Материал](#material) | нет |
| `leggings` | [Материал](#material) | нет |
| `boots` | [Материал](#material) | нет |
| `mainHand` | [Материал](#material) | нет |
| `offHand` | [Материал](#material) | нет |

**Примечание:** Это поле также позволяет устанавливать пользовательские модели для предметов. Чтобы установить пользовательский ID модели, добавьте ID после типа материала в следующем формате: `ITEM_MATERIAL:ID`. Пример: `DIAMOND_SWORD:1` устанавливает босса носить алмазный меч с пользовательской моделью №1 в вашем пакете текстур.

**Примечание 2:** Это поле также позволяет устанавливать пользовательские цвета кожи с форматом `ITEM_MATERIAL:CODE`, где код является шестнадцатеричным представлением цвета. Пример: `LEATHER_LEGGINGS:ffa500` создаст оранжевые поножи. Вы можете использовать шестнадцатеричные коды, просто удалите `#` из шестнадцатеричного кода. Вы можете получить шестнадцатеричные коды [здесь](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Примечание 3:** Поле шлема также позволяет устанавливать шлемы мобов в виде голов игроков. Просто получите UUID головы игрока, которую вы хотели бы использовать, и введите его в поле шлема. *Игрок должен быть в сети, чтобы это работало, иначе голова по умолчанию будет общей головой MineCraft.* Вы можете получить UUID игрока [здесь](https://minecraftuuid.com/).

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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

*Примечание: Вы можете просмотреть [эту страницу]($language$/elitemobs/premade_powers.md), если хотите увидеть список готовых способностей, которые вы можете использовать.*

***

### Промежуточная конфигурация - Создание подкреплений

Подкрепления также относятся к категории способностей и используют следующие настройки:

<details> 

<summary><b>Настройки подкреплений</b></summary>

| Ключ | Описание |                                                                                                             Значения                                                                                                             | По умолчанию |
|---|:---:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|---|
| `summonType` | Что вызывает появление подкрепления. Обязательно. |                                                                                                    См. список ниже                                                                                                     | нет |
| `filename` | Имя файла босса для появления в качестве подкрепления. Обязательно. |                                                                                                       [Строка](#string)                                                                                                        | нет |
| `chance` | Шанс появления подкрепления. Необязательно. |                                                                                                       [Дробное](#double)                                                                                                        | `1.0` |
| `amount` | Устанавливает количество подкреплений для появления. Необязательно. |                                                                                                      [Целое](#integer)                                                                                                       | `1` |
| `inheritAggro` | Заставляет подкрепление наследовать агрессию от босса. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Заставляет подкрепления появляться в радиусе 30 блоков от босса. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Заставляет подкрепление наследовать уровень босса. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Заставляет подкрепление появляться с помощью [пользовательской системы появления]($language$/elitemobs/creating_spawns.md). Используется только для `summonType: GLOBAL` |
| `location` | Место появления. Необязательно. | `world_name,x,y,z` или `x,y,z` для местоположения относительно босса. Смещение относительно места появления региональных боссов. Вы также можете использовать `same_as_boss`, чтобы подкрепления появлялись в том же мире, что и босс. | нет |
| `lightningRod` | Специальная настройка для `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Заставляет кристаллы края испускать молнии вокруг них. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | нет |

</details>

Типы вызова устанавливают условия для появления подкреплений. Ниже приведен список действительных типов вызова:

<details> 

<summary><b>Типы вызова</b></summary>

| Значение |                                                                         Описание                                                                         |
|---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                   Создает подкрепления только один раз, в первый раз, когда боссу наносится урон.                                   |
| `ON_HIT`  |                                                              Создает подкрепления при ударе.                                                              |
| `ON_COMBAT_ENTER` |                                                Создает подкрепления, когда босс вступает в бой.                                                |
| `GLOBAL` | Создает подкрепление для каждого онлайн-игрока. Требует, чтобы ключ `customSpawn` имел действительное значение [пользовательского появления]($language$/elitemobs/creating_spawns.md). |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                Ставит кристаллы края подкреплений при входе в бой, только для использования в пользовательских битвах с драконами.                                 |

</details>

Обратите внимание, что также можно создавать подкрепления с помощью [Elite Scripts]($language$/elitemobs/creating_powers.md), поэтому существуют более настраиваемые способы создания подкреплений.

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

Можно создавать собственные способности либо в самом файле босса, либо в виде нового файла конфигурации в папке способностей. Подробнее об этом вы можете узнать [здесь]($language$/elitemobs/creating_powers.md).

### Ограничение способностей в зависимости от сложности инстанса подземелья

[Инстансные подземелья]($language$/elitemobs/dungeons.md&section=instanced-dungeons) могут иметь настройки сложности, и можно сделать так, чтобы конкретная способность была включена только для определенных сложностей.

<details> 

<summary><b>Ограничение параметров способностей</b></summary>

<div align="left">

| Ключ | Описание | Значения | По умолчанию |
|---|:---:|:---:|---|
| `filename` | Имя файла способности. | [Строка](#string) | нет |
| `difficultyID` | Имя сложности, совпадающее с именем сложности в пакете подземелья. | [Строка](#string) | нет |

</div>

</details>

Это будет применяться только к инстансным подземельям.

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

Устанавливает сообщение для отправки при появлении босса. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `spawnMessage` | [Строки](#string) и [коды цветов](#color_codes) | нет |

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

Устанавливает список сообщений для отправки, когда босс умирает. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `deathMessages` | [Строки](#string), [коды цветов](#color_codes) и плейсхолдеры ниже | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Тестовый босс был убит!'
- '&c&l    1-й урон: $damager1name &cс уроном $damager1damage!'
- '&6&l    2-й урон: $damager2name &6с уроном $damager2damage!'
- '&e&l    3-й урон: $damager3name &eс уроном $damager3damage!'
- '&4Убийцы: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

В сообщениях о смерти используются следующие плейсхолдеры:

<details> 

<summary><b>Плейсхолдеры</b></summary>

| Значение | Описание |
|---|:---:|
| `$damager1name` | Имя игрока, нанесшего наибольший урон |
| `$damager2name` | Имя игрока, нанесшего второй по величине урон |
| `$damager3name` | Имя игрока, нанесшего третий по величине урон |
| `$damager1damage` | Величина урона, нанесенного игроком с наибольшим уроном |
| `$damager2damage` | Величина урона, нанесенного вторым игроком по величине |
| `$damager3damage` | Величина урона, нанесенного третьим игроком по величине |
| `$players` | Отображает список всех наносителей урона |

</details>

### onKillMessage

Устанавливает сообщение для отправки, когда босс убивает игрока. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `onKillMessage` | [Строки](#string) и [коды цветов](#color_codes) | нет |

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

Устанавливает размер слизня босса, но работает только для слизней и магмовых кубов.

</div>

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `slimeSize` | [Целое](#integer) | `4` |

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

Устанавливает, будет ли босс появляться нейтральным или нет. Это относится только к типам сущностей, которые могут быть нейтральными, таким как волки или железные големы.

</div>

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `neutral` | [Булево](#boolean) | `false` |

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

Устанавливает количество времени в минутах, по истечении которого пользовательский босс исчезает.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `timeout` | Время (в минутах) [Целое](#integer) | `0` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
timeout: 20
```
Устанавливает босса для побега через 20 минут.

</div>

</details>

***

### isPersistent

Устанавливает, может ли босс пережить выгрузку чанка. Рекомендуется только для боссов событий.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `isPersistent` | `true` / `false` | `false` |

<details>
```
</details>

***

### Example

```yml
isPersistent: true
```

</div>

</details>

***

### damageModifiers

Устанавливает оружие, против которого боссы могут быть сильными или слабыми.

| Ключ |        Значения         | По умолчанию |
|---|:---------------------:|---|
| `damageModifiers` | [Материал](#material) | нет |

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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает сообщение, которое транслируется игрокам, когда босс сбегает из-за [таймаута](#timeout). Требуется настроить [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `escapeMessage` | [Строка](#string) | нет |


<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
timeout: 60
escapeMessage: "Саёнара!"
```

<div align="center">

![create_boss_escape_message.jpg](../../../img/wiki/create_boss_escape_message.jpg)

</div>

</div>

</details>

***

### locationMessage

Устанавливает сообщение, отображаемое на панели босса. Это используется для отслеживания как здоровья пользовательского босса, так и его местоположения на сервере. Требует настройки [annoucementPriority](#annoucementPriority).

| Ключ |                                      Значения                                      | По умолчанию |
|---|:--------------------------------------------------------------------------------:|---|
| `locationMessage` | [Строка](#string), [коды цветов](#color_codes) и плейсхолдеры, перечисленные ниже | нет |

Плейсхолдеры:

| Значение | Описание |
|---|:---:|
| `$distance` | Заменяется расстоянием от игрока до пользовательского босса. Это предпочтительный вариант. |
| `$location` | Заменяется координатами x y z местоположения пользовательского босса |


<details>


<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
locationMessage: "&4Крутой босс: В $location всего в $distance блоках!"
```

<div align="center">

![create_boss_location_message.jpg](../../../img/wiki/create_boss_location_message.jpg)

</div>

</div>

Это покажет что-то вроде `Крутой босс: в 414,55,347 всего в 10 блоках!`

</details>

***

### uniqueLootList

Устанавливает [пользовательские предметы]($language$/elitemobs/creating_items.md), которые выпадают из босса.

| Ключ |        Значения        | По умолчанию |
|---|:--------------------:|---|
| `uniqueLootList` | [Список](#string_list) | нет |

Записи добычи в пользовательской добыче соответствуют формату таблицы добычи. [Информация об этом здесь!]($language$/elitemobs/loot_tables.md) Обратите внимание, что некоторые старые файлы могут использовать устаревшие таблицы добычи, которые выглядят иначе, чем в примере.

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

Устанавливает, будет ли босс выкидывать добычу EliteMobs, исключая предметы в [`uniqueLootList`](#uniqueLootList). Включает монеты.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `dropsEliteMobsLoot` | `true` /  `false` | `true` |

Рекомендуется установить значение false для мобов подкреплений.

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

Устанавливает, будет ли пользовательский босс выкидывать обычную добычу, обычно связанную с его обычным типом моба.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает след, который босс оставляет за собой при движении.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает сообщение, которое отображается боссом-мобом, когда он ударяет игрока. Это список, и используется один из списка в случайном порядке.

| Ключ |        Значения        | По умолчанию |
|---|:--------------------:|---|
| `onDamageMessages` | [Список](#string_list) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDamageMessages:
- "Я тебя ударил!"
- "Ха-ха, я тебя ударил!"
```
<div align="center">

![create_boss_damage_message.jpg](../../../img/wiki/create_boss_damage_message.jpg)

</div>

</div>

</details>

***

### onDamagedMessages

Устанавливает сообщение, которое отображается боссом-мобом, когда игрок наносит ему урон. Это список, и используется один из списка в случайном порядке.

| Ключ |        Значения        | По умолчанию |
|---|:--------------------:|---|
| `onDamagedMessages` | [Список](#string_list) | нет |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDamagedMessages:
- "Ты меня ударил!"
- "Меня ударили!"
```
<div align="center">

![create_boss_damaged_message.jpg](../../../img/wiki/create_boss_damaged_message.jpg)

</div>

</div>

</details>

***

### mountedEntity

Устанавливает сущность, на которую босс будет садиться и кататься.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `onDamagedMessages` | [Имя файла босса для установки](#filename) или [тип сущности](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) | нет |

Не пытайтесь заставить босса сесть на себя.

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

Примечание: региональные боссы будут делить свой поводок с сущностью, на которую они садятся, что означает, что они оба будут оттащены обратно в место появления, если превысят расстояние, разрешенное их поводком.

***

### announcementPriority

Устанавливает уровень приоритета для объявлений. Более низкие приоритеты означают, что объявления не делаются, более высокие приоритеты могут объявлять не только в чате, но и в Discord, если это настроено.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `announcementPriority` | [Целое](#integer) | `1` |

Вот список того, что делают приоритеты:

| Значение |                                                                            Описание                                                                            |
|---|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `0` |                                                   Босс будет полностью бесшумным, без сообщений объявления.                                                   |
| `1` |                                Это значение по умолчанию. Боссы могут отправлять сообщения чата, сообщения при появлении, смерти и побеге.                                |
| `2` |                               В дополнение к вещам в `1`, босс будет отслеживаться игроками через меню `/em`.                                |
| `3` | В дополнение к вещам в `2`, транслируемые сообщения будут дублироваться в Discord, если это настроено. [Информация о настройке Discord здесь.]($language$/elitemobs/discordsrv.md) |

Вот пример босса, которого можно отследить, который может отправлять сообщения о появлении/смерти/побеге в чате и в Discord:

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
```

</div>

</details>

**Примечание**: Вам нужно будет настроить spawnMessage, deathMessage/deathMessages, escapeMessage для объявлений в чате и Discord, а также locationMessage для функции отслеживания, если вы хотите использовать соответствующий уровень приоритета объявления.

***

### followDistance

Установите расстояние, на котором боссы агрятся и вступают в бой.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `followDistance` | [Дробное](#double) | нет, используются значения по умолчанию из Minecraft |

Примечание 1. Региональные боссы имеют половину `followDistance`, когда не в бою. Это сделано для того, чтобы они не агрились слишком далеко, что может вызвать раздражающие проблемы с боем из-за ограничений поводка.

Примечание 2: Чем выше `followDistance`, тем больше нагрузка на процессор сервера. Используйте осторожно и ответственно!

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
followDistance: 30
```

</div>

Устанавливает диапазон в 30 блоков, где, если игрок окажется в пределах этого расстояния рядом с боссом, он начнет преследовать/атаковать игрока.

</details>

***

### onDeathCommands

Устанавливает список команд, которые выполняются при смерти пользовательского босса.

| Ключ |        Значения        | По умолчанию |
|---|:--------------------:|---|
| `onDeathCommands` | [Список](#string_list) | нет |

Список поддерживает следующие плейсхолдеры:

| Значение | Описание |
|---|:---:|
| `$level` | Плейсхолдер для уровня босса. |
| `$name` | Плейсхолдер для имени босса. |
| `$chance=x$` | Заставляет команду иметь шанс быть запущенной. |
| `$players` | Заставляет команду выполняться один раз для каждого игрока в списке наносителей урона и каждый раз заменяется именем пользователя другого игрока из этого списка. |
| `$locationX` | Координата X босса на момент смерти. |
| `$locationY` | Координата Y босса на момент смерти. |
| `$locationZ` | Координата Z босса на момент смерти. |
| `$damager1name` | Имя пользователя, нанесшего наибольший урон |
| `$damager2name` | Имя пользователя, нанесшего второй по величине урон |
| `$damager3name` | Имя пользователя, нанесшего третий по величине урон |

Посмотрите на пример ниже, чтобы лучше понять, как они работают.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onDeathCommands:
- "say $players убил $name! Это был уровень $level!"
- "$chance=0.5$ say Какое убийство!"
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_ondeathcommands.jpg)

</div>

</div>

Если игрок 1, игрок 2 и игрок 3 нанесли урон боссу перед его убийством, вот что будет выведено из консоли:

<div align="left">

```
say Игрок1 убил CustomBossName! Это был уровень X!
say Игрок2 убил CustomBossName! Это был уровень X!
say Игрок3 убил CustomBossName! Это был уровень X!
```

</div>

Кроме того, существует 50% вероятность того, что также будет выведено следующее:

<div align="left">

```
say Какое убийство!
```

</div>

</details> 

***

### onSpawnCommands

Устанавливает список команд, которые будут выполняться при появлении босса.

| Ключ |        Значения        | По умолчанию |
|---|:--------------------:|---|
| `onSpawnCommands` | [Список](#string_list) | нет |

**Здесь используются те же плейсхолдеры, что и в [onDeathCommands](#onDeathCommands)!** Плейсхолдеры урона не будут применяться, так как в это время не будет наносителей урона.

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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `onCombatEnterCommands` | [Список](#string_list) | нет |

**Здесь используются те же плейсхолдеры, что и в [onDeathCommands](#onDeathCommands)!** Плейсхолдеры урона не будут применяться, так как в это время не будет наносителей урона.

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

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `onCombatLeaveCommands` | [Список](#string_list) | нет |

**Здесь используются те же плейсхолдеры, что и в [onDeathCommands](#onDeathCommands)!**

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
onCombatLeaveCommands:
- say Босс покинул бой!
```

<div align="center">

![create_boss_mounted.jpg](../../../img/wiki/create_boss_oncombatleavecommands.jpg)

</div>

</div>

</details>

***

### disguise

Устанавливает маскировку LibsDisguises, если этот плагин включен. [Подробнее здесь.]($language$/elitemobs/libsdisguises.md)

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `disguise` | [Строка](#string) | нет |
| `customDisguiseData` | [Строка](#string) | нет |

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

Устанавливает пользовательскую маскировку из skindex. [Посмотрите эту страницу]($language$/elitemobs/libsdisguises.md), чтобы узнать, как правильно отформатировать эти данные.

</details>

***

### customModel

Устанавливает пользовательскую модель для использования, если у вас есть пользовательская модель и ModelEngine. [Подробнее здесь.]($language$/elitemobs/custom_models.md)

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `customModel` | [Строка](#string) | нет |

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
</br>*Примечание: это может не работать на некоторых сущностях.*

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает музыку, которую будет воспроизводить босс, начиная с момента его появления. Требуется, чтобы файл .ogg для песни находился в пакете ресурсов.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `song` | [Строка](#string) | нет |

**Примечание: для настройки `song` требуется установить `followDistance`, так как `followDistance` определяет диапазон, в котором начинается воспроизведение песни.**
Ознакомьтесь с примером того, как установить `length` (миллисекунды) для `song`.

<details> 

<summary><b>Пример</b></summary>

Есть два способа настройки песен. Вот первый:

<div align="left">

```yml
song: name=elitemobs:ice_queen.idle length=76370
```

</div>

Это будет воспроизводить песню ice_queen.idle в течение 76370 миллисекунд, а затем зацикливать ее. Обратите внимание, что местоположение песни определяется пакетом ресурсов.

Вот второй способ настройки песен:

<div align="left">

```yml
song: name=elitemobs:ice_queen.end_transition length=14328->name=elitemobs:ice_queen.end_loop length=28657
```

Это будет воспроизводить песню ice_queen.end_transition в течение 14328 миллисекунд, а затем перейдет к ice_queen.end_loop в течение 28657 миллисекунд и зациклит end_loop.

Это позволяет боссам иметь "вступительную" или "переходную" песню, а затем основной трек, который зацикливается.

</div>

</details>

***

### cullReinforcements

Устанавливает, будут ли удалены подкрепления босса после смерти босса.

| Ключ | Значения | По умолчанию |
|---|:---:|---|
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

Устанавливает скорость передвижения босса.
</br>*Примечание: все, что больше 0.36, может быть слишком быстрым.*

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `movementSpeedAttribute` | [Дробное](#double) | нет |

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

Боссы могут иметь фазы, которые меняются, когда босс достигает определенного процента здоровья. Когда это происходит, босс начинает использовать другой файл конфигурации, а это означает, что все о боссе может измениться, включая такие вещи, как тип сущности.
</br>Чтобы узнать больше о фазах босса, нажмите [здесь]($language$/elitemobs/creating_boss_phases.md).


| Ключ | Описание | Значения | По умолчанию |
|---|:---:|---|---|
| `phases` | Устанавливает фазы, которые будет иметь босс. Обязательно | [Список](#string_list) | нет |
| `phaseSpawnLocation` | Устанавливает, где появляется босс фазы. Необязательно | [Строка](#string) | нет |


<details> 

<summary><b>Пример</b></summary>

<div align="left">

В этом примере мы покажем три разных файла конфигурации.

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

Этот босс переключится на файл конфигурации `phase_2_boss.yml` при 60% здоровья, а на файл конфигурации `phase_3_boss.yml` при 30% здоровья в том же мире, что и фаза 2, и в координатах x=10, y=64 и z=100. Тип сущности и имя босса также изменятся.

Формат для записи: `filename:healthPercentage`.

phaseSpawnLocation является необязательным, если он не установлен, босс будет менять фазы там, где он стоит.

</details>

При разработке фазового босса важно знать следующее:

<div align="left">

- Файл конфигурации для первой фазы устанавливает все фазы босса.
- Угроза/урон, подсчитанные, сохраняются между фазами для игроков.
- Переключение фаз основано на проценте потерянного здоровья, который сохраняется при переключении на другую фазу. Это означает, что увеличение или уменьшение healthMultiplier между фазами не излечит и не повредит босса, он все равно переключится с тем же процентом, но будет иметь больше или меньше здоровья для этой фазы.
- Фазовые боссы возвращаются к 1-й фазе, если выходят из боя.
- Фазовые боссы, которые также являются региональными боссами, имеют одинаковый радиус поводка и механизм тайм-аута во всех фазах и будут возрождаться как босс 1-й фазы, когда таймер закончится.
- Файл конфигурации для последней фазы устанавливает добычу для босса.
- Фазы нельзя пропустить - чрезмерный урон все равно заставит босса переключаться между фазами в соответствии с определенным процентом.
- Фазовые боссы, у которых есть маунты, перестают быть на них во время переключения фаз.

</div>

</div>

***

## Региональные боссы

<div align="center">

Региональные боссы — это особый тип пользовательских боссов, которые появляются в определенном настроенном месте и могут возрождаться в этом месте после задержки. Кроме того, у них могут быть поводки, которые гарантируют, что они остаются в определенной зоне, среди прочих функций.

Они используются для всего контента подземелий. Чтобы узнать больше о региональных боссах, нажмите [здесь]($language$/elitemobs/creating_world_bosses.md).

| Ключ | Описание | Значения | По умолчанию |
|---|:---:|---|---|
| `isRegionalBoss` | Устанавливает, является ли босс региональным. Должно быть true, если вы хотите регионального босса. | `true` /  `false` | `false` |
| `spawnLocation` | Устанавливает места появления босса. | Добавьте их с помощью команды `/em addSpawnLocation [filename.yml]`! | нет |
| `spawnCooldown` | Устанавливает время восстановления босса в <b>минутах</b>. | [Целое](#integer) | `0` |
| `leashRadius` | Устанавливает расстояние, на которое босс может отойти от своей точки появления, прежде чем его оттащат назад. | [Дробное](#double) | нет |
| `onSpawnBlockStates` | Устанавливает блоки, которые босс будет изменять при появлении. | См. команды ниже | нет |
| `onRemoveBlockStates` | Устанавливает блоки, которые босс будет изменять при исчезновении. | См. команды ниже | нет |

Как указано, региональные боссы могут иметь `onSpawnBlockStates` и `onRemoveBlockStates`.

Это очень полезная функция для изменения боевых арен во время боя, особенно в сочетании с переключениями фаз, поскольку становится возможным открывать и закрывать боевые арены посредством изменения состояний блоков.

Формат для них слишком сложен для ручного написания, поэтому существует несколько команд, которые помогут вам их настроить:

| Команда | Описание |
|---|:---:|
| /em registerblocks [regional_boss_file.yml] [on_spawn/on_remove] | Начинает регистрацию ручного выбора блоков для состояний блоков при появлении или удалении. |
| /em registerblocksedit [regional_boss_file.yml] [on_spawn/on_remove] | Изменяет состояния блоков при появлении или удалении. |
| /em registerblocksarea [regional_boss_file.yml] [on_spawn/on_remove] | Позволяет администраторам выбирать большие области блоков для сохранения в качестве состояний. |
| /em registerblocksareaedit [regional_boss_file.yml] [on_spawn/on_remove] | Позволяет администраторам редактировать большие области блоков для сохранения в качестве состояний. |

<details> 

<summary><b>Пример использования:</b></summary>

<div align="left">

Предположим, вы хотите сделать бой, в котором босс появляется на арене с открытой дверью, и вы хотите сделать так, чтобы дверь закрывалась при начале боя и снова открывалась при его завершении.

Для этого вам понадобятся две фазы босса и зарегистрировать три разных набора состояний блоков. В этом примере я назову эти фазы phase_1_boss.yml и phase_2_boss.yml соответственно.

1) Используйте `/em registerblocks phase_1_boss.yml on_spawn` или `/em registerblocksedit phase_1_boss.yml on_spawn`, чтобы зарегистрировать блоки дверей в открытом состоянии.

Это означает регистрацию воздушных блоков. Здесь рекомендуется выбор области.

Это необходимо для того, чтобы дверь была открыта при появлении босса, чтобы игроки гарантированно могли войти.

2) Используйте `/em registerblocks phase_2_boss.yml on_spawn` или `/em registerblocksedit phase_2_boss.yml on_spawn`, чтобы зарегистрировать блоки дверей в закрытом состоянии.

Это означает регистрацию сплошных блоков двери, которые не позволят игроку уйти.

Это необходимо для того, чтобы при переходе босса во 2-ю фазу дверь стала сплошной, не позволяя игрокам уйти.

3) Используйте `/em registerblocks phase_2_boss.yml on_remove` или `/em registerblocksedit phase_2_boss.yml on_remove`, чтобы зарегистрировать блоки дверей в открытом состоянии.

Это означает повторную регистрацию тех же блоков с первого шага (воздушных блоков).

Это необходимо, чтобы открыть дверь, когда босс умирает, позволяя игрокам покинуть арену.

</div>

</details>

</div>

***

### alert

<div align="center">

Устанавливает, находится ли босс в состоянии готовности. По умолчанию региональные боссы замедляются и имеют меньшее расстояние агрессии, когда они не в бою. Этот параметр предотвращает замедление региональных боссов и уменьшение расстояния их агрессии вне боя, поэтому они всегда будут вести себя одинаково в бою или вне его.

</div>

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `alert` | [Булево](#boolean) | `true` |

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

Устанавливает, будет ли региональный босс навсегда удален после убийства. Это то, что BetterStructures использует для святилищ, где региональный босс предназначен для борьбы только один раз и никогда больше в этом месте.

</div>

| Ключ | Значения | По умолчанию |
|---|:---:|---|
| `removeAfterDeath` | [Булево](#boolean) | `false` |

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

Инстансные боссы — это подтип региональных боссов, используемых в инстансных подземельях.

| Ключ | Описание | Значения | По умолчанию |
|---|:---:|---|---|
| `instanced` | Делает пользовательского босса инстансным. Обязательно. | `true` / `false` | `false` |


Установка боссов в качестве инстансных является обязательным условием для правильной работы инстансных подземелий. Мы также рекомендуем убрать поводки для всех инстансных боссов.

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>
