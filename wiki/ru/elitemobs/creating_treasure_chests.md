```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

Сундуки с сокровищами — это функция, позволяющая администраторам создавать сундуки, из которых может выпадать добыча или появляться босс-мимик (враждебный).

<div align="center">

<div align="left">

## Значения

</div>

### isEnabled

Определяет, включен ли сундук с сокровищами.

| Ключ        |       Значения        | По умолчанию |
|-------------|:-------------------:|:------------:|
| `isEnabled` | [Boolean](#boolean) |   `true`     |

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

Определяет тип материала сундука.

| Ключ        |        Значения         | По умолчанию |
|-------------|:---------------------:|:------------:|
| `chestType` | [Material](#material) |   `CHEST`    |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*Это должен быть допустимый материал сундука, такой как `CHEST` или `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Определяет направление, куда смотрит сундук.

| Ключ     |   Значения    | По умолчанию |
|----------|:-----------:|:------------:|
| `facing` | Специальное [1] |   `CHEST`    |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
facing: CHEST
```
*Это должен быть допустимый материал сундука, такой как `CHEST` или `BARREL`*.

</div>

</details>

**Специальное [1]**

<details>

<summary><b>Развернуть таблицу</b></summary>

| Направление |
|-------------|
| `NORTH`     |
| `SOUTH`     |
| `WEST`      |
| `EAST`      |


</details>

***

### dropStyle

Определяет, предназначен ли сундук для одного игрока или для нескольких.

Сундуки `SINGLE` исчезают после открытия и появляются снова при пополнении запасов. Сундуки `GROUP` остаются на месте и сообщают отдельным игрокам, что они находятся на перезарядке.

| Ключ        |       Значения       | По умолчанию |
|-------------|:--------------------:|:------------:|
| `dropStyle` | `SINGLE` / `GROUP` |   `SINGLE`   |

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

Перечисляет добычу, которая должна выпадать из сундука с сокровищами при открытии.

| Ключ       |                        Значения                        | По умолчанию |
|------------|:------------------------------------------------------:|:------------:|
| `lootList` | [Таблица добычи EM]($language$/elitemobs/loot_tables.md) |     нет      |

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

Устанавливает шанс появления враждебного босса вместо выпадения добычи.

| Ключ          |      Значения       | По умолчанию |
|---------------|:-------------------:|:------------:|
| `mimicChance` | [Double](#double) |     `0`      |

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

Указывает список враждебных боссов, доступных для появления. Один босс будет случайно выбран из этого списка для появления.

Список также поддерживает систему весов, которую вы можете реализовать, чтобы гарантировать, что некоторые боссы выбираются чаще, чем другие.

| Ключ                  |      Значения       | По умолчанию |
|-----------------------|:-------------------:|:------------:|
| `mimicCustomBossesList` | [Список строк](#string_list) |     нет      |

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

*В этой конфигурации `my_cool_mimic_boss.yml` с большей вероятностью будет выбран для появления, чем `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Устанавливает время в минутах до пополнения сундука добычей.

| Ключ           |      Значения       | По умолчанию |
|----------------|:-------------------:|:------------:|
| `restockTimer` | [Integer](#integer) |     `0`      |

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

Устанавливает эффекты частиц, которые будет создавать сундук.

| Ключ      |      Значения       | По умолчанию |
|-----------|:-------------------:|:------------:|
| `effects` | [Частица](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |     нет      |

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

Устанавливает местоположения, где будет появляться сундук с сокровищами.

Местоположения можно проще установить с помощью команды `/em addTreasureChest <имя_файла_сундука_с_сокровищами.yml>`.

| Ключ        |           Значения            | По умолчанию |
|-------------|:-----------------------------:|:------------:|
| `locations` | [Список строк](#string_list) |     нет      |

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

Устанавливает минимальный ранг гильдии, необходимый для открытия сундука.

| Ключ        |           Значения            | По умолчанию |
|-------------|:-----------------------------:|:------------:|
| `chestTier` | [Integer](#integer) |     нет      |

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

Определяет, должен ли сундук быть инстансированным (для использования в инстансированных подземельях).
Все таймеры пополнения запасов отключаются, когда сундуки размещаются в подземельях.

**НЕ УСТАНАВЛИВАЙТЕ ЭТО ЗНАЧЕНИЕ ВРУЧНУЮ**.

| Ключ        |     Значения     | По умолчанию |
|-------------|:----------------:|:------------:|
| `instanced` | [Boolean](#boolean) |   `false`    |

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

После того как сундук был разграблен, плагин запишет этот ключ для отслеживания времени пополнения запасов.

**НЕ УСТАНАВЛИВАЙТЕ ЭТО ЗНАЧЕНИЕ ВРУЧНУЮ**.

| Ключ          |     Значения     | По умолчанию |
|---------------|:----------------:|:------------:|
| `restockTime` | Метка времени Unix |     нет      |

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
```