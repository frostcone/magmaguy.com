# Система предметов EliteMobs

Начиная с EliteMobs 7.3.0, игроки могут взаимодействовать с Elite Items  несколькими уникальными способами.  Эта страница предназначена для того, чтобы помочь игрокам и администраторам разобраться в том, как работают эти системы, а также в дальнейшем объяснить баланс системы администраторам.


***

# Отвязка предметов

Если у вас есть свиток отвязки предметов, вы можете использовать NPC Отвязыватель, чтобы объединить 1 свиток с 1 предметом, чтобы отвязать его.

***Примечание:  на момент написания этой статьи нет способа получить свиток, если его не дают или не добавляют к  specific boss. Свиток будет выпадать из боя с  Ender Dragon,  который выйдет в этом месяце.***

Свиток можно использовать только один раз. После отвязки предметы можно продать или передать другим игрокам, или использовать после престижа.

***

# Утилизация предметов

Elite Items  можно утилизировать у NPC  Descartador.  При утилизации предметов в зависимости от уровня предмета вы получите следующую sucata:

- Уровень 0-50:  Tiny Scrap.
- Уровень 50-100:  Small Scrap.
- Уровень 100-150:  Medium Scrap.
- Уровень 150-200:  Huge Scrap.

Sucata - это основа для остальной части системы предметов.

***

# Ремонт Elite Items

Elite items  можно ремонтировать у NPC  Reparador, используя sucata. Степень повреждения вашего предмета определяет количество и размер sucata, необходимых для его починки.

***

# Зачарование Elite Items

Прежде чем мы перейдем к описанию того, как зачаровывать предметы, рекомендуется ознакомиться с предметами, необходимыми для зачарования, и понять их функции.

**Elite Item**
</br>Elite item  включает в себя любой loot, доступный в магазинах EliteMobs, полученный из  Elite Mobs,  или полученный в качестве награды за выполнение квеста, среди прочего.

**Зачарованные Книги**
</br>Зачарованные книги обычно выпадают из  Elite Mobs  или  даются  игрокам  в  качестве  награды  на  Аренах  или  в  Квестах.  Они  содержат  зачарования,  которые  игроки  могут  переносить  на  желаемые  предметы.

**Счастливые Билеты**
</br>Счастливые билеты, обычно получаемые из  Elite Mobs  или  в  качестве  награды  на  Аренах  или  в  Квестах,  позволяют  игрокам  удвоить  свои  шансы  на  успех  при  зачаровании  предметов.

Игроки могут получить доступ к меню зачарования, посетив NPC  Encantador  в  [Гильдии Авантюристов]($language$/elitemobs/adventurers_guild_world.md)  или  используя  меню  `/em`.
 
Имея  Elite Item  и  Зачарованную Книгу,  игроки  могут  попытаться  добавить  зачарование,  хранящееся  в  книге,  к  своему  предмету.  Каждая  попытка  будет  стоить  игрокам  некоторое  количество  Elite Coins.  Они  также  могут  удвоить  свои  шансы,  используя  Счастливый Билет,  если  у  них  есть  один.

Чтобы  начать  зачарование,  игроки  помещают  один  Elite Item,  одну  Зачарованную Книгу  и  один  Счастливый Билет  (если  есть)  в  окно  Зачарования  и  затем  пытаются  зачаровать  свой  предмет.  После  этого  они  получат  один  из  следующих  результатов: 

- **Успех:** Зачарование успешно добавлено к предмету.
- **Неудача:** Неудачная попытка, в результате которой теряется Зачарованная Книга и Elite Coins.
- **Критическая Неудача:** Более серьезная ошибка, ведущая к потере Зачарованной Книги, Elite Coins и самого Elite Item.
- **Вызов:**  Вступите в бой с боссом с 10% шансом критической неудачи при проигрыше. Предмет будет зачарован, если игроки победят.

<details>

<summary><b>Визуальный пример</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>Видео от MagmaGuy, объясняющее некоторые системы.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Создание собственных Зачарованных Книг

Вот краткое руководство, которое объясняет, как вы можете создавать собственные Зачарованные Книги.

<div align="center">

***

### isEnabled

Включает или выключает предмет.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
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

### name

Название предмета. Поддерживает [Цветные коды](#color_codes).

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Описание предмета. Поддерживает [Цветные коды](#color_codes).

| Ключ         |           Значения            | По умолчанию |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
lore:
- '&2Use this custom book to'
- '&2enchant items at the enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Материал, из которого должен быть создан предмет.

| Ключ         |      Значения       | По умолчанию |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Зачарования, которые должен содержать предмет.

| Ключ         |    Значения    | По умолчанию |
|-------------|:------------:|:-------:|
| `enchantments` | [MineCraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) or [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Где можно получить этот предмет. Вы можете установить его как `custom`, если хотите, чтобы ваш  book  падал с рандомных  elite  и продавался в магазинах. 

В противном случае вы можете установить его как `unique`, чтобы он выпадал только из настроенных таблиц loot.

| Ключ         |    Значения    | По умолчанию |
|-------------|:------------:|:-------:|
| `itemType` | [Values]($language$/elitemobs/creating_items.md&section=itemtype) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

Определяет, можно ли обменивать этот предмет с другими игроками.

| Ключ         |    Значения    | По умолчанию |
|-------------|:------------:|:-------:|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## Пример Зачарованной Книги

<div align="center">

<details> 

<summary><b>Пример конфигурации Зачарованной Книги</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Used to enchant items at the enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

Как вы можете видеть, создание Зачарованных Книг не так уж сложно. Большинство настроек - это обычные настройки, которые вы использовали бы при создании [предмета]($language$/elitemobs/creating_items.md).

За исключением того, что, конечно, наш главный фокус - это раздел `enchantments`. В нашей книге примера есть одно зачарование MineCraft `MENDING` и одно зачарование EliteMobs `DRILLING`.

Это сделало бы нашу книгу примера отличной книгой, которую вы бы хотели использовать на кирке.

</div>

</details>

</div>

