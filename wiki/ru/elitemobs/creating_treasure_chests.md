[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание сундуков с сокровищами

Сундуки с сокровищами - это функция, которая позволяет администраторам создавать сундуки, которые могут либо выпадать, либо генерировать босса-мимика (враждебного).

<div align="center">

<div align="left">

## Значения

</div>

### isEnabled

Включает или выключает сундук с сокровищами.

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

### chestType

Тип материала сундука.

| Ключ       |        Значения         | По умолчанию |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Это должно быть допустимым материалом сундука, например, `CHEST` или `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Направление, на которое смотрит сундук.

| Ключ       |   Значения    | По умолчанию |
|-----------|:-----------:|:-------:|
| `facing` | Special [1] | `CHEST` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Это должно быть допустимым материалом сундука, например, `CHEST` или `BARREL`*.

</div>

</details>

**Special [1]**

<details> 

<summary><b>Развернуть таблицу</b></summary>

| Направление  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

Определяет, для одного игрока или для нескольких игроков предназначен сундук.

Сундуки `SINGLE`  исчезают после открытия и появляются снова при пополнении. Сундуки `GROUP` остаются, и отдельные игроки узнают, что они находятся в режиме ожидания.

| Ключ       |       Значения       | По умолчанию |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

Список лута, который должен выпасть из сундука с сокровищами при его открытии.

| Ключ       |                        Значения                        | По умолчанию |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [EM Loot Table]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml
```

</div>

</details>

***

### mimicChance

Шанс появления враждебного босса вместо лута.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

Список враждебных боссов, доступных для генерации. Один босс будет выбран случайным образом из этого списка для генерации. 

Список также поддерживает систему весов, которую можно использовать, чтобы гарантировать, что некоторые боссы выбираются чаще, чем другие.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*Если вы хотите назначить веса боссам, список должен быть отформатирован следующим образом:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*В этой конфигурации `my_cool_mimic_boss.yml` имеет больше шансов быть выбранным для генерации, чем `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Время (в минутах), за которое сундук пополняется лутом.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

Эффекты частиц, которые будут у сундука.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
effects:
- DRIP_LAVA
- SMOKE_NORMAL
```

<div align="center">

![create_chest_effects.jpg](../../../img/wiki/create_chest_effects.jpg)

</div>

</div>

</details>

***

### locations

Точки появления сундука с сокровищами.

Точки появления можно легко задать с помощью `/em addTreasureChest <treasurechestfilename.yml>

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `locations` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
locations:
- my_world,10,50,10,0,0
- my_nether_world,12,58,12,0,0
```

</div>

</details>

***

### chestTier

Минимальный уровень гильдии, необходимый для открытия сундука.

| Ключ       |           Значения            | По умолчанию |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Integer](#integer) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>


***

### instanced

Определяет, должен ли сундук быть  инстанс-сущностью  (для использования в инстанс-мамортах).
Все таймеры пополнения отключаются, когда сундуки размещаются в подземельях.

**НЕ ЗАДАВАЙТЕ ЭТО ЗНАЧЕНИЕ РУЧНО**.

| Ключ       |     Значения     | По умолчанию |
|-----------|:--------------:|:-------:|
| `instanced` | [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
instanced: true
```

</div>

</details>

</div>

***

### restockTime

После того как сундук был разграблен, плагин запишет этот ключ, чтобы отслеживать время пополнения. 

**НЕ ЗАДАВАЙТЕ ЭТО ЗНАЧЕНИЕ РУЧНО**.

| Ключ       |     Значения     | По умолчанию |
|-----------|:--------------:|:-------:|
| `restockTime` | Unix Timestamp |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Пример конфигурации сундука с сокровищами</b></summary>

<div align="left">

```yml
isEnabled: true
chestType: CHEST
facing: NORTH
dropStyle: MULTIPLE
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml:chance=0.95
mimicChance: 0.50
mimicCustomBossesList:
- balrog.yml
- killer_rabbit_of_caerbannog.yml
restockTimer: 1
effects: SMOKE_NORMAL
locations:
- world,0.0,-60.0,-14.0,0.0,0.0
```

<div align="center">

![create_chest_chest.jpg](../../../img/wiki/create_chest_chest.jpg)

</div>

</div>

</details>


