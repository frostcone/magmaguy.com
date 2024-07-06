# Таблица  Custom Loot

Универсальный формат лута. Используется EliteMobs  в нескольких различных местах.

Обратите внимание, что это новейший формат, и рекомендуется использовать именно его, но  существуют некоторые альтернативные  старые  форматы. 

Убедитесь, что вы начинаете свои таблицы лута с `uniqueLootList:`  перед добавлением любых настроек, иначе конфигурация .yml  выдаст ошибку.

### Выпадение элитных предметов:

| Ключ | Детали | Значения                | По умолчанию |
| --- | :-: |-----------------------| --- |
| `filename` |  Имя файла  Custom Item, который нужно использовать. | [Filename](#filename) | none |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

Этот mob  будет  оставлять  1  *MagmaGuy's Toothpick*  с  шансом  100%  дропа.

</div>

</details>

### Общие настройки:

| Ключ | Детали | Значения              | По умолчанию |
| --- | :-: |---------------------| --- |
| `chance` | Шанс выпадения лута. | [Double](#double)   | `1.0` |
| `amount` | Количество этой записи лута, которое выпадет | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | Loot  будет выпадать, игнорируя ограничитель уровня loot  игрока | [Boolean](#boolean) | `false` |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

Этот mob  будет  оставлять  10  *MagmaGuy's Toothpick*  с  шансом  50%  дропа,  игнорируя  уровень  игрока.

</div>

</details>

### Выпадение монет Elite:

| Ключ | Детали | Значения              | По умолчанию |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Количество монет, которые будут выпасть. | [Integer](#integer) | none |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
Этот mob  будет  оставлять  344  *Elite Coins*  с  шансом  50%  дропа.

</div>

</details>

### Выпадение  ванильных предметов:

| Ключ | Детали | Значения                | По умолчанию |
| --- | :-: |-----------------------| --- |
| `material` | Материал выпавшего предмета. | [Material](#material) | none |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
Этот mob  будет  оставлять  5  *Яблок*  с  шансом  30%  дропа.

</div>

</details>

### Арены:  РАБОТАЕТ В ПРОЦЕССЕ (Не работает в настоящее время)
При создании таблиц loot  арены  убедитесь, что вы начинаете свою таблицу loot  с  `rawArenaReward:`  вместо  `uniqueLootList:`.

| Ключ | Детали | Значения              | По умолчанию |
| --- | :-: |---------------------| --- |
| `wave` | Волнa, на которой будет выпадать эта запись loot.  Только для использования в аренах. | [Integer](#integer) | none |
| `level` |  Уровень дропа loot.  Только для использования в аренах. | [Integer](#integer) | none |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```
Когда игроки победят первую волну, это заставит арену  дропать  10  *Хлебов* с 50% шансом  дропа и 1 *Palito de Dente do MagmaGuy*,  уровень 2, с 100% шансом  дропа.

</div>

</details>

### Инстанс-подземелья:

| Ключ | Детали | Значения            | По умолчанию |
| --- | :-: |-------------------| --- |
| `difficultyID` | Список  сложностей  инстанс-подземелья, для которых этот loot  будет выпадать.  Только для использования в инстанс-подземельях. | [String](#string) | none |

<details> 

<summary align="center"><b>Пример</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
Этот mob  будет  оставлять  1  *MagmaGuy's Toothpick*  с  шансом  50%  дропа,  если  игроки  победили  босса  на  сложности  1  или  2.

</div>

</details>

