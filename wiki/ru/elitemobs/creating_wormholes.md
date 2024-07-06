[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Что такое червоточины?

Червоточины - это своего рода высокоэффективная система телепортации из портала в портал. Порталы отмечены визуальными эффектами.

# Механика червоточин

Червоточины могут делать следующее:

*   Переходить через один портал, чтобы достичь портала назначения, и возвращаться из портала назначения в первый.
*   Воспроизводить звук, когда игроки проходят через них.
*   Временно ослеплять игроков во время прохождения через них для плавного перехода.
*   Выталкивать игроков, чтобы они не попали в цикл телепортации.
*   Блокировать игроков от телепортации на 5 секунд, чтобы они не попали в цикл телепортации.
*   Воспроизводить сложные визуальные эффекты.
*   Требовать разрешения для использования червоточины.
*   Требовать использования валюты для использования червоточины.
*   Уведомлять игроков и администраторов, если портал назначения недоступен.

# Создание червоточины

Червоточины добавляются как файлы конфигурации в папку wormholes. Можно создавать подпапки, и рекомендуется делать это, если вы добавляете червоточины для определенных подземелий, в формате \` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml\`.

### Выталкивание

Yaw и Pitch (два последних числа в координатах) в `location1` и `location2`  будут определять, куда игроки будут выброшены из червоточины при прохождении через нее. Давайте посмотрим на этот пример:

`location1: my_world,20,10,20,180,20`

Если Yaw  установлен на `180`, игрок будет выброшен, глядя на Север, а если Pitch  установлен на `20`, он также будет выброшен немного вверх. Если вы хотите, чтобы игрок оставался в том же блоке, что и червоточина, когда его выталкивают, то рекомендуется установить Pitch  отрицательным, чтобы игроки не соскользнули с блока.

## Конфигурация Червоточины
Вот пример допустимой конфигурации Червоточины:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

Включает или выключает червоточину.

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

### location1

Первая локация для червоточины.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `location1` | [String](#string) |  none   |

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

Вторая локация для червоточины.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `location2` | [String](#string) |  none   |

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

Текст, отображаемый в первой локации.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `location1Text` | [String](#string) |  none   |

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

Текст, отображаемый во второй локации.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `location2Text` | [String](#string) |  none   |

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

Разрешение, необходимое для использования червоточины.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `permission` | [String](#string) |  none   |

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

Стоимость использования червоточины в элитных монетах.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `coinCost` | [Double](#double) |  none   |

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

Визуальная форма червоточины.

*Частицы, из которых состоят эти формы, могут вызывать лаги у некоторых клиентов. Чтобы отключить частицы, откройте **Wormholes.yml** и установите `noParticlesMode` в `true`.*

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

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

Цвет частиц, используемых в настройке `style`.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` followed by a hexcode](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

Определяет, ослепляет ли портал игрока для более плавной телепортации.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `blindPlayer` | [Boolean](#boolean) | `false` |

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

Умножает размер портала и форму, заданную в `style`.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [Multiplier](#multiplier) |   `1`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*Имейте в виду, что вам нужно будет отрегулировать координаты Y червоточины после применения  size multiplier.*

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

В этом примере мы создадим простую червоточину, которая переносит нас из одного мира в другой. Не забывайте, что червоточины также могут просто телепортировать игроков в другое место в том же мире.

```yml
isEnabled: true #We enable the worm by setting this value to true
location1: my_world,1.5,11.0,1.5,108.0,5.0 #this is where the wormhole will appear in my_world
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #this is where the wormhole will appear in my_other_world
location1Text: "&aGo to My World" #makes a nice display text above wormhole location1
location2Text: "&aGo to My Other World" #makes a nice display text above wormhole location2
permission: eliteperm.coolplayers #only players with this permission will be able to use the wormhole, both for location1 and location2
coinCost: 2 #the players will need to pay 12 elite coins to be able to use the worm hole
style: CRYSTAL #this wormhole will be in the shape of a crystal
particleColor: 0x00ff00 #this will set the wormhole particles to green
blindPlayer: true #the wormhole teleport will blind the player for a short duration to make the transition less jarring
sizeMultiplier: 1.0 #sets how big the shape of the wormhole should be
```

</div>

</details>

#### Проблемы с производительностью

Частицы червоточины могут вызывать проблемы с производительностью клиента для игроков, использующих Bedrock. Если вы хотите отключить частицы червоточины, вы можете перейти в `~plugins\EliteMobs\Wormholes.yml` и изменить настройку `noParticlesMode` на `true`.



