[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Что такое червоточины?

Червоточины - это своего рода высокоэффективная система портальной телепортации. Порталы отмечены визуальными эффектами.

# Механика червоточин

Червоточины могут делать следующее:

* Проходить через один портал, чтобы достичь портала назначения, и возвращаться из портала назначения к первому.
* Издавать звук, когда игроки проходят через них
* Временно ослеплять игроков при прохождении через них для сглаживания перехода
* Выталкивать игроков, чтобы избежать попадания в цикл телепортации
* Блокировать телепортацию для игроков на 5 секунд, чтобы избежать попадания в цикл телепортации
*   Воспроизводить сложные визуальные эффекты
*   Требовать разрешения на использование червоточины
* Требовать использования валюты для использования червоточины
*   Уведомлять игроков и администраторов, когда портал назначения недоступен

# Создание червоточины

Червоточины добавляются как файлы конфигурации в папку wormholes. Можно создавать вложенные папки, и рекомендуется
делать это, если вы добавляете червоточины для определенных подземелий, в формате \` ~
/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml\`.

### Выталкивание

Рыскание и тангаж (две последние цифры в координатах) в `location1` и `location2` будут определять, откуда игроки будут
выталкиваться из червоточины при прохождении через нее. Рассмотрим этот пример:

`location1: my_world,20,10,20,180,20`

При значении рыскания, установленном на `180`, игрок будет выталкиваться лицом на север, а при значении тангажа,
установленном на `20`, он также будет выталкиваться немного вверх. Если вы хотите, чтобы игрок оставался в том же блоке,
что и червоточина, при выталкивании, то рекомендуется установить отрицательный тангаж, чтобы игроки не соскальзывали с
блока.

## Конфигурация червоточины
Ниже приведен пример допустимой конфигурации червоточины:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Устанавливает, включена ли червоточина.

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

### location1

Указывает первое местоположение для червоточины.

| Ключ        |     Значения      | По умолчанию |
|-------------|:-----------------:|:------------:|
| `location1` | [String](#string) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

Указывает второе местоположение для червоточины.

| Ключ        |     Значения      | По умолчанию |
|-------------|:-----------------:|:------------:|
| `location2` | [String](#string) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

Устанавливает отображаемый текст первого местоположения.

| Ключ            |     Значения      | По умолчанию |
|-----------------|:-----------------:|:------------:|
| `location1Text` | [String](#string) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
location1Text: Awesome Wormhole In World One
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

Устанавливает отображаемый текст второго местоположения.

| Ключ            |     Значения      | По умолчанию |
|-----------------|:-----------------:|:------------:|
| `location2Text` | [String](#string) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
location2Text: Awesome Wormhole In World Two
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

Устанавливает разрешение, необходимое для использования червоточины.

| Ключ         |     Значения      | По умолчанию |
|--------------|:-----------------:|:------------:|
| `permission` | [String](#string) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
permission: elitemobs.mypermission
```

</div>

</details>

***

### coinCost

Устанавливает стоимость использования червоточины в элитных монетах.

| Ключ       |     Значения      | По умолчанию |
|------------|:-----------------:|:------------:|
| `coinCost` | [Double](#double) |     none     |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

Устанавливает визуальную форму червоточины.

*Частицы, составляющие эти формы, могут вызывать лаги у некоторых клиентов. Чтобы отключить частицы, перейдите
в **Wormholes.yml** и установите для параметра `noParticlesMode` значение `true`.*

| Ключ    |                  Значения                   | По умолчанию |
|---------|:-------------------------------------------:|:------------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |    `CUBE`    |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

Устанавливает цвет частиц, используемых в настройке `style`.

| Ключ            |                                                 Значения                                                  | По умолчанию |
|-----------------|:---------------------------------------------------------------------------------------------------------:|:------------:|
| `particleColor` | [`0x`, за которым следует шестнадцатеричный код](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`  |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

Устанавливает, ослепляет ли портал игрока для более плавной телепортации.

| Ключ          |      Значения       | По умолчанию |
|---------------|:-------------------:|:------------:|
| `blindPlayer` | [Boolean](#boolean) |   `false`    |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

Умножает размер портала и формы, заданной параметром `style`.

| Ключ             |         Значения          | По умолчанию |
|------------------|:-------------------------:|:------------:|
| `sizeMultiplier` | [Multiplier](#multiplier) |     `1`      |

<details>

<summary><b>Пример</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Имейте в виду, что вам придется скорректировать Y-координаты червоточины после применения множителя размера.*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>Пример конфигурации червоточины</b></summary>

<div align="left">

В этом примере мы создадим простую червоточину, которая переносит нас из одного мира в другой. Не забывайте, что
червоточины могут также просто телепортировать игроков в другое место в том же мире.

```yml
isEnabled: true # Мы включаем червоточину, установив для этого значения значение true.
location1: my_world,1.5,11.0,1.5,108.0,5.0 # здесь появится червоточина в my_world.
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 # здесь появится червоточина в my_other_world.
location1Text: "&aПерейти в мой мир" # создает красивый текст отображения над местоположением червоточины 1.
location2Text: "&aПерейти в мой другой мир" # создает красивый текст отображения над местоположением червоточины 2.
permission: eliteperm.coolplayers # только игроки с этим разрешением смогут использовать червоточину, как для location1, так и для location2
coinCost: 2 # игрокам нужно будет заплатить 12 элитных монет, чтобы иметь возможность использовать червоточину.
style: CRYSTAL # эта червоточина будет в форме кристалла
particleColor: 0x00ff00 # это установит частицы червоточины в зеленый цвет
blindPlayer: true # телепортация червоточины будет ослеплять игрока на короткое время, чтобы сделать переход менее резким.
sizeMultiplier: 1.0 # устанавливает размер формы червоточины
```

</div>

</details>

#### Проблемы с производительностью

Частицы червоточины могут вызывать проблемы с производительностью клиента у игроков, использующих bedrock. Если вы хотите отключить частицы червоточины, вы можете перейти в `~plugins\EliteMobs\Wormholes.yml` и изменить параметр `noParticlesMode` на `true`.
