```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание пользовательских боссов

# Прежде чем начать

## Где хранятся файлы боссов?

Файлы боссов находятся в папке конфигурации `~/plugins/EliteMobs/custombosses`.

Можно создавать подпапки, например `~/plugins/EliteMobs/custombosses/mybosses`. Это рекомендуется для поддержания порядка.

Один файл определяет одного босса, хотя можно спавнить одного и того же босса несколько раз и даже задавать несколько мест спавна для одного файла босса.

Можно использовать [веб-приложение](https://magmaguy.com/webapp/webapp.html) для быстрого и легкого создания пользовательских боссов и многого другого.

## Наименьшая возможная конфигурация

**Наименьший возможный файл конфигурации для Пользовательского Босса:**
```yml
```

Обратите внимание, что это просто пустой файл. Он все равно заспавнит пользовательского босса-зомби с пользовательским именем, так как это значения по умолчанию. **Все на этой странице необязательно!**

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
spawnMessage: Заспавнен тестовый босс!
deathMessage: Тестовый босс был убит игроками $players!
escapeMessage: Сущность тестового босса сбежала!
locationMessage: 'Тестовая сущность: $location'
uniqueLootList:
- magmaguys_toothpick.yml:1
dropsEliteMobsLoot: true
dropsVanillaLoot: true
trails:
- BARRIER
onDamageMessages:
- "Я ударил тебя!"
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

| Ключ |                                                                                   Значения                                                                                    | По умолчанию |
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

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `name` | [Строка](#string), принимает [коды цветов](#color_codes) и перечисленные ниже плейсхолдеры | "Default Name" |

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

Если вы хотите включить уровень босса в его имя, просто используйте один из следующих плейсхолдеров.

| Плейсхолдер | Описание | Пример | Вывод (для босса 10 уровня) |
|-|:-:|:-:|-|
| `$level` | Заменяется на уровень | "$level Крутой босс" | `10 Крутой босс` |
| `$normalLevel` | Заменяется на уровень, для обычных мобов | `"$normalLevel Крутой босс"` | `[10] Крутой босс` |
| `$minibossLevel` | Заменяется на уровень, для мини-боссов | `"$minibossLevel Крутой босс"` | `〖10〗 Крутой босс` |
| `$bossLevel` | Заменяется на уровень, для боссов | `"$bossLevel Крутой босс"` | `『10』 Крутой босс` |
| `$reinforcementLevel` | Заменяется на уровень, для подкреплений | `"$reinforcementLevel Крутой босс"` | `〔10〕 Крутой Босс` |
| `$eventBossLevel` | Заменяется на уровень, для боссов событий | `"$eventBossLevel Крутой босс"` | `「10」 Крутой босс` |

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
|-|:-:|-|
| `level` | Положительные [целые числа](#integer) или `dynamic` | `dynamic` |

`dynamic` используется для событий и подстраивается под уровень ближайших игроков в момент спавна босса.
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
|-|:-:|-|
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

Устанавливает тип босса. Используется для отображения полос здоровья боссов и других функций.

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `bossType` | `NORMAL`, `MINIBOSS`, `BOSS`, `EVENT` | `NORMAL` |

`MINIBOSS`, `BOSS`, `EVENT` заставят плагин отображать полосы здоровья, когда игроки сражаются с этими типами боссов.

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

Устанавливает множитель здоровья босса.

| Ключ | Значения | По умолчанию |
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

| Ключ | Значения | По умолчанию |
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

Устанавливает, использует ли босс вариант моба-детеныша. Может быть применено только к мобам, у которых есть варианты-детеныши.
Если вы хотите [замаскировать]($language$/elitemobs/libsdisguises.md) босса, но хотите, чтобы он оставался детенышем в маскировке (убедитесь, что сущность маскировки также поддерживает вариант детеныша), вы можете использовать эту настройку:
<div align="left">

```yaml
disguise: HOGLIN:baby
```
</div>

| Ключ | Значения | По умолчанию |
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

Устанавливает броню босса. Не все модели Minecraft могут отображать броню. Броня босса является чисто косметической и не влияет на игровой процесс.

| Ключ |                                    Значения                                     | По умолчанию |
|-|:-----------------------------------------------------------------------------:|-|
| `helmet` |           [Материал](#material), [UUID](https://minecraftuuid.com/)           | нет |
| `chestplate` | [Материал](#material) | нет |
| `leggings` | [Материал](#material) | нет |
| `boots` | [Материал](#material) | нет |
| `mainHand` | [Материал](#material) | нет |
| `offHand` | [Материал](#material) | нет |

**Примечание:** Это поле также позволяет устанавливать пользовательские модели для предметов. Чтобы установить ID пользовательской модели, добавьте ID после типа материала в следующем формате: `ITEM_MATERIAL:ID`. Пример: `DIAMOND_SWORD:1` устанавливает боссу алмазный меч с пользовательской моделью #1 в вашем текстур-паке.

**Примечание 2:** Это поле также позволяет устанавливать пользовательские цвета кожаной брони в формате `ITEM_MATERIAL:CODE`, где код — это шестнадцатеричное представление цвета. Пример: `LEATHER_LEGGINGS:ffa500` создаст оранжевые поножи. Вы можете использовать шестнадцатеричные коды, просто удалите `#` из шестнадцатеричного кода. Вы можете получить шестнадцатеричные коды [здесь](https://www.w3schools.com/colors/colors_hexadecimal.asp).

**Примечание 3:** Поле шлема также позволяет устанавливать в качестве шлемов мобов головы игроков. Просто получите UUID головы игрока, которую вы хотите использовать, и введите его в поле шлема. *Игрок должен быть онлайн, чтобы это работало, иначе голова по умолчанию будет обычной головой Minecraft.* Вы можете получить UUID игроков [здесь](https://minecraftuuid.com/).

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

Устанавливает способности босса.

| Ключ | Значения | По умолчанию |
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

*Примечание: Вы можете посмотреть [эту страницу]($language$/elitemobs/premade_powers.md), если хотите увидеть список готовых способностей, которые вы можете использовать.*

***

### Промежуточная конфигурация - Спавн подкреплений

Подкрепления также относятся к категории способностей, используя следующие настройки:

<details>

<summary><b>Настройки подкреплений</b></summary>

| Ключ | Описание |                                                                                                             Значения                                                                                                             | По умолчанию |
|-|:-:|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `summonType` | Что вызывает спавн подкрепления. Обязательно. |                                                                                                    См. список ниже                                                                                                     | нет |
| `filename` | Имя файла босса, который будет заспавнен в качестве подкрепления. Обязательно. |                                                                                                       [Строка](#string)                                                                                                        | нет |
| `chance` | Шанс спавна подкрепления. Необязательно. |                                                                                                       [Дробное число](#double)                                                                                                        | `1.0` |
| `amount` | Устанавливает количество подкреплений для спавна. Необязательно. |                                                                                                      [Целое число](#integer)                                                                                                       | `1` |
| `inheritAggro` | Заставляет подкрепление наследовать агрессию от босса. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `spawnNearby` | Заставляет подкрепления спавниться в радиусе 30 блоков от босса. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `inheritLevel` | Заставляет подкрепление наследовать уровень босса. Необязательно |                                                                                                        `true` / `false`                                                                                                        | `false` |
| `customSpawn` | Заставляет подкрепление спавниться с использованием [системы пользовательского спавна]($language$/elitemobs/creating_spawns.md). Используется только для `summonType: GLOBAL` |
| `location` | Место спавна. Необязательно. | `world_name,x,y,z` или `x,y,z` для местоположения относительно босса. Смещение относительно места спавна для региональных боссов. Вы также можете использовать `same_as_boss`, чтобы подкрепления спавнились в том же мире, что и босс. | нет |
| `lightningRod` | Специальная настройка для `summonType: ON_COMBAT_ENTER_PLACE_CRYSTAL`. Заставляет кристаллы Края спавнить молнии вокруг себя. Необязательно. |                                                                                                        `true` / `false`                                                                                                        | нет |

</details>

Типы вызова устанавливают условия для спавна подкреплений. Ниже приведен список допустимых типов вызова:

<details>

<summary><b>Типы вызова</b></summary>

| Значение |                                                                         Описание                                                                         |
|-|:-----------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `ONCE` |                                          Спавнит подкрепления только один раз, при первом получении урона боссом.                                           |
| `ON_HIT`  |                                                              Спавнит подкрепления при ударе.                                                              |
| `ON_COMBAT_ENTER` |                                                   Спавнит подкрепления, когда босс вступает в бой.                                                    |
| `GLOBAL` | Спавнит подкрепление для каждого онлайн-игрока. Требует, чтобы ключ `customSpawn` имел действительный [пользовательский спавн]($language$/elitemobs/creating_spawns.md). |
| `ON_COMBAT_ENTER_PLACE_CRYSTAL` |                                 Размещает подкрепления в виде кристаллов Края при вступлении в бой, только для пользовательских боев с драконами.                                  |

</details>

Обратите внимание, что также возможно спавнить подкрепления через [Elite Scripts]($language$/elitemobs/creating_powers.md), поэтому существуют более настраиваемые способы спавна подкреплений.

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

Можно создавать собственные способности, либо в самом файле босса, либо как новый файл конфигурации в папке powers. Подробнее об этом можно узнать [здесь]($language$/elitemobs/creating_powers.md).

### Ограничение способностей в зависимости от сложности инстанс-подземелья

[Инстанс-подземелья]($language$/elitemobs/dungeons.md&section=instanced-dungeons) могут иметь настройки сложности, и можно сделать так, чтобы определенная способность была включена только для определенных сложностей.

<details>

<summary><b>Ограничение опций способностей</b></summary>

<div align="left">

| Ключ | Описание | Значения | По умолчанию |
|-|:-:|:-:|-|
| `filename` | Имя файла способности. | [Строка](#string) | нет |
| `difficultyID` | Название сложности, соответствующее названию сложности в пакете подземелья. | [Строка](#string) | нет |

</div>

</details>

Это будет применяться только к инстанс-подземельям.

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

Устанавливает сообщение, которое отправляется при спавне босса. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|-|:-:|-|
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

Устанавливает список сообщений, которые отправляются при смерти босса. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `deathMessages` | [Строки](#string), [коды цветов](#color_codes) и плейсхолдеры ниже | нет |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
announcementPriority: 3
deathMessages:
- '&e&l---------------------------------------------'
- '&4Тестовый Босс был убит!'
- '&c&l    1-й нанесший урон: $damager1name &cс уроном $damager1damage!'
- '&6&l    2-й нанесший урон: $damager2name &6с уроном $damager2damage!'
- '&e&l    3-й нанесший урон: $damager3name &eс уроном $damager3damage!'
- '&4Убийцы: $players'
- '&e&l---------------------------------------------'
```

<div align="center">

![create_boss_death_message.jpg](../../../img/wiki/create_boss_death_message.jpg)

</div>

</div>

</details>

Сообщения о смерти используют следующие плейсхолдеры:

<details>

<summary><b>Плейсхолдеры</b></summary>

| Значение | Описание |
|-|:-:|
| `$damager1name` | Имя игрока, нанесшего наибольший урон |
| `$damager2name` | Имя игрока, нанесшего второй по величине урон |
| `$damager3name` | Имя игрока, нанесшего третий по величине урон |
| `$damager1damage` | Количество урона, нанесенного первым игроком |
| `$damager2damage` | Количество урона, нанесенного вторым игроком |
| `$damager3damage` | Количество урона, нанесенного третьим игроком |
| `$players` | Отображает список всех игроков, нанесших урон |

</details>

### onKillMessage

Устанавливает сообщение, которое отправляется, когда босс убивает игрока. Требует настройки [announcementPriority](#announcementPriority).

| Ключ | Значения | По умолчанию |
|-|:-:|-|
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

Устанавливает размер босса-слизня, но работает только для Слизней и Лавовых кубов.

</div>

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `slimeSize` | [Целое число](#integer) | `4` |

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

Устанавливает, будет ли босс спавниться нейтральным или нет. Применяется только к типам сущностей, которые могут быть нейтральными, таким как Волки или Железные големы.

</div>

| Ключ | Значения | По умолчанию |
|-|:-:|-|
| `neutral` | [Булево значение](#boolean) | `false` |

<details>
```

```yaml
neutral: true
```

</div>

</details>
```Okay, I can do that. Please provide the target language for the translation.Please specify the language you would like the text translated into. I will then translate it while retaining all the markdown formatting.