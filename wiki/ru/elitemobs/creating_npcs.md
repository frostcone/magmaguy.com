[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Настройки конфигурации

<div align="center">

### isEnabled

Устанавливает, включен ли NPC.

| Ключ        |     Значения      | По умолчанию |
|-------------|:-----------------:|:------------:|
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

### name

Устанавливает отображаемое имя NPC. Поддерживает [Цветовые коды](#color_codes).

| Ключ    |  Значения   | По умолчанию |
|---------|:-----------:|:------------:|
| `name`  | [String](#string) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aЭн Пи Си"
```

<div align="center">

![create_npc_name.jpg](../../../img/wiki/create_npc_name.jpg)

</div>

</div>

</details>

***

### scale

Устанавливает масштаб (размер) NPC.

| Ключ     |     Значения      | По умолчанию |
|----------|:-----------------:|:------------:|
| `scale`  | [Multiplier](#multiplier) |  `1.0`      |

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

### role

Устанавливает роль NPC под именем. Только визуально. Поддерживает [Цветовые коды](#color_codes).

| Ключ    |  Значения   | По умолчанию |
|---------|:-----------:|:------------:|
| `role`  | [String](#string) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
role: "&c<Красный Парень>"
```

<div align="center">

![create_npc_role.jpg](../../../img/wiki/create_npc_role.jpg)

</div>

</div>

</details>

***

### profession

Устанавливает профессию NPC, которая устанавливает его скин, когда **не** используется маскировка.

| Ключ         |  Значения   | По умолчанию |
|--------------|:-----------:|:------------:|
| `profession` | [Profession](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/Villager.Profession.html) |  `NITWIT`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
profession: NITWIT
```

<div align="center">

![create_npc_profession.jpg](../../../img/wiki/create_npc_profession.jpg)

</div>

</div>

</details>

***

### greetings

Устанавливает список приветствий, которые NPC произносит, когда игрок приближается.

| Ключ       |     Значения      | По умолчанию |
|------------|:-----------------:|:------------:|
| `greetings` | [String List](#string_list) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
greetings:
- Привет!
- Добрый день.
```

<div align="center">

![create_npc_greetings.jpg](../../../img/wiki/create_npc_greetings.jpg)

</div>

</div>

</details>

***

### dialog

Устанавливает диалог, который NPC будет произносить, когда игрок находится рядом (в случае `DIALOG` interactionType, это будет диалог).

| Ключ     |     Значения      | По умолчанию |
|----------|:-----------------:|:------------:|
| `dialog` | [String List](#string_list) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
dialog:
- Я люблю яблоки!
- Ну и жара.
```

<div align="center">

![create_npc_dialog.jpg](../../../img/wiki/create_npc_dialog.jpg)

</div>

</div>

</details>

***

### farewell

Устанавливает прощальное сообщение NPC.

| Ключ     |     Значения      | По умолчанию |
|----------|:-----------------:|:------------:|
| `farewell`| [String List](#string_list) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
farewell:
- До скорой встречи!
- Пока!
```

<div align="center">

![create_npc_farewell.jpg](../../../img/wiki/create_npc_farewell.jpg)

</div>

</div>

</details>

***

### canTalk

Устанавливает, может ли NPC говорить.

| Ключ      |     Значения      | По умолчанию |
|-----------|:-----------------:|:------------:|
| `canTalk` | [Boolean](#boolean) |   `true`     |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
canTalk: true
```

</div>

</details>

***

### activationRadius

Устанавливает радиус, в котором NPC может обнаружить приближающегося игрока.

| Ключ                |     Значения      | По умолчанию |
|---------------------|:-----------------:|:------------:|
| `activationRadius`  |  [Double](#double) |   `3.0`      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
activationRadius: 3.0
```

</div>

</details>

***

### interactionType

Устанавливает тип взаимодействия, которое будет выполнять NPC.

| Ключ              |      Значения       | По умолчанию |
|-------------------|:-------------------:|:------------:|
| `interactionType` | Специальный [1] |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
interactionType: TELEPORT_BACK
```

</div>

</details>

***

### noPreviousLocationMessage

Когда у NPC-телепортера нет предыдущего местоположения, куда он может телепортировать игрока, он отобразит это сообщение. Принимает [Цветовые коды](#color_codes)

| Ключ                      |   Значения   | По умолчанию |
|---------------------------|:------------:|:------------:|
| `noPreviousLocationMessage`| [String](#string) |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
noPreviousLocationMessage: '&8[EliteMobs] &cНе удалось отправить вас обратно в предыдущее местоположение - предыдущее местоположение не найдено!'
```

<div align="center">

![create_npc_noteleportlocation.jpg](../../../img/wiki/create_npc_noteleportlocation.jpg)

</div>

</div>

</details>

***

### timeout

Устанавливает время в минутах, прежде чем NPC исчезнет навсегда.

| Ключ    |     Значения      | По умолчанию |
|---------|:-----------------:|:------------:|
| `timeout`|  [Integer](#integer) | `0` (никогда)|

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
timeout: 0
```

</div>

</details>

***

### questFileName

Устанавливает квесты, которые выдает NPC.

| Ключ          |     Значения      | По умолчанию |
|---------------|:-----------------:|:------------:|
| `questFileName` | [String List](#string_list) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questFileName:
- my_quest_one.yml
- my_quest_two.yml
```

</div>

</details>

***

### disguise

Устанавливает маскировку LibsDisguises, которую имеет NPC.

| Ключ     |     Значения      | По умолчанию |
|----------|:-----------------:|:------------:|
| `disguise`| [Формат LibsDisguises]($language$/elitemobs/libsdisguises.md) |    нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
disguise: SKELETON
```

<div align="center">

![create_npc_disguise.jpg](../../../img/wiki/create_npc_disguise.jpg)

</div>

</div>

</details>

***

### customDisguiseData

Устанавливает данные для пользовательской маскировки LibsDisguises.

| Ключ               |      Значения       | По умолчанию |
|--------------------|:-------------------:|:------------:|
| `customDisguiseData`| [Формат LibsDisguises]($language$/elitemobs/libsdisguises.md&section=how-can-i-disguise-an-entity-with-a-custom-disguise?) |    нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
disguise: custom:my_cool_disguise_name
customDisguiseData: player my_cool_disguise_name setskin {"id":"364acb6d-9050-46f7-b5fb-f8c3fd83a6fc","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYxMTk4ODA4Nzc1NSwKICAicHJvZmlsZUlkIiA6ICJkZGVkNTZlMWVmOGI0MGZlOGFkMTYyOTIwZjdhZWNkYSIsCiAgInByb2ZpbGVOYW1lIiA6ICJEaXNjb3JkQXBwIiwKICAic2lnbmF0dXJlUmVxdWlyZWQiIDogdHJ1ZSwKICAidGV4dHVyZXMiIDogewogICAgIlNLSU4iIDogewogICAgICAidXJsIiA6ICJodHRwOi8vdGV4dHVyZXMubWluZWNyYWZ0Lm5ldC90ZXh0dXJlLzliYmVkODQzNWY4YmYyNzhhZmUyNmU2NGZkOTI2YjhiMzc3MzJkODhlMzM0ODk3ZGJkNTI3ZDU2ZmY5MTk5MGUiCiAgICB9CiAgfQp9","signature":"ujLq1joYVktuQAp1xpFKlxQFUVinSePiDBiVCAxxix/mA5vP86i/eAOfb1mtGjaAZ6sO0l2olbzvycnGXNBtbAxgqprguROXY4tpWiePVTDmy3iD4GdOCxHAkYLoyMV5qTT4SNsldUFFuND8GSEgbNMltKDLmhNKwzm08iCigPfpeuYpwljgJPxu6ka54PKNaQu4doI0ZDZXKqq4hPhR3Bs2Sz9MI0SmdmQWwcCzUz3DFdVno27fmQ6LwqmT+eSoOv0EttVG/XMaTYQ5lhBY61mqf6WlJyYVUSfjJk1AbYsctu7dWM+sbY8jFq5ljvXJGGr5TyKi+fs8vHy06Z2go20QgTYOw+caFxFijAS6fgm3oY57VEO/+/9OLHdD+Z9BrWqQWcIIrVeIfxjue/yt4pyeVv9jX59hjNFjhcPEwotkxJ+vZ96WlTLWDG4BiqauDr2VeGyLlVaygO9ZU0wwsN65iSh91GI3tMIA5wbDR0Hts/9ABvt9eafHbowS+4SZXN0i9mYnKg7op1eiB8nMEAGsPJg3DwsmUrh3ACAapQ6eYHiJpo59RXDqKlRcXwo7wsEFp//5LgQWbPj0NP3nxnywdpozqSAeq6236qlhE9BT9eiyJ41V9sMelYFEWMlUAltR40NdbIrHB0J3nmfuLJz44/sTwWf6P1khOy//XX0="}],"legacy":false}
```

<div align="center">

![create_npc_custom_disguise.jpg](../../../img/wiki/create_npc_custom_disguise.jpg)

</div>

</div>

</details>

***

### customModel

Устанавливает пользовательскую модель ModelEngine, которую будет использовать NPC.

| Ключ        |     Значения      | По умолчанию |
|-------------|:-----------------:|:------------:|
| `customModel`| [String](#string) |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
customModel: MY_MODEL_ONE
```

</div>

</details>

***

### arena

Устанавливает имя файла арены, для которой NPC откроет меню (требуется interactionType `ARENA_MASTER`).

| Ключ  |     Значения      | По умолчанию |
|-------|:-----------------:|:------------:|
| `arena` |  [Filename](#filename)  |    нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
arena: my_arena.yml
```

</div>

</details>

***

### command

Устанавливает команду, которую NPC будет выполнять (требуется `COMMAND` interactionType).

| Ключ    |    Значения     | По умолчанию |
|---------|:---------------:|:------------:|
| `command` | [String](#string) |    нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
command: say Посмотри на меня, как я запускаю команду, как круто!
```

<div align="center">

![create_npc_command.jpg](../../../img/wiki/create_npc_command.jpg)

</div>

</div>

</details>

***

### spawnLocation

Устанавливает местоположение появления NPC. Вы должны установить это с помощью команды `/em spawnnpc <npcfilename.yml>`.

| Ключ          |     Значения      | По умолчанию |
|---------------|:-----------------:|:------------:|
| `spawnLocation`| [String](#string) |   нет   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnLocation: my_world,10,50,10,0,0
```

</div>

</details>

***

### spawnLocations

Устанавливает местоположения появления NPC. Вы должны установить это с помощью команды `/em spawnnpc <npcfilename.yml>`.

| Ключ              |     Значения      | По умолчанию |
|-------------------|:-----------------:|:------------:|
| `spawnLocations`  | [String List](#string_list) |   нет    |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
spawnLocations:
- my_world,10,50,10,0,0
- my_world,-10,50,-10,0,0
```

</div>

</details>

### instanced

Устанавливает, должен ли NPC быть инстанцирован (для использования в инстанцированных подземельях).

| Ключ       |     Значения      | По умолчанию |
|------------|:-----------------:|:------------:|
| `instanced`| [Boolean](#boolean) |  `false`   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
instanced: false
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Пример конфигурации NPC</b></summary>

<div align="left">

```yml
isEnabled: true
name: "&cКрасный Рубин"
role: "&a<Обычный NPC>"
profession: NITWIT
greetings:
- Привет!
- Здравствуйте!
dialog:
- Отличный разговор!
- Приятно было с тобой поговорить!
farewell:
- До свидания!
- Пока!
canTalk: true
activationRadius: 4
interactionType: CHAT
timeout: 0
questFileName:
- my_quest.yml #тип взаимодействия npc должен быть установлен на CUSTOM_QUEST_GIVER
disguise: SKELETON
customDisguiseData: #используется, когда устанавливается пользовательский libsdisguise
customModel: MODEL_ONE
arena: my_arena.yml #тип взаимодействия npc должен быть установлен на ARENA_MASTER
command: /say Привет, мир! #тип взаимодействия npc должен быть установлен на COMMAND
spawnLocation: my_world,584,55,127,90,10 #помните, что NPC используют высоту и угол поворота, чтобы установить, куда они смотрят. это также автоматически устанавливается при запуске команды /em spawnnpc <npcfilename.yml>, поэтому убедитесь, что вы встали там, где вы хотите, чтобы NPC был обращен, при запуске команды.
```

<div align="center">

![create_npc_npc.jpg](../../../img/wiki/create_npc_npc.jpg)

</div>

</div>

</details>

***

## Специальный [1]
Ниже приведен список допустимых типов взаимодействия NPC:

| Тип                          |                                Описание                               |
|-------------------------------|:--------------------------------------------------------------------:|
| `GUILD_GREETER`               |                    Открывает меню гильдии искателей приключений          |
| `CHAT`                        |            Щелчок правой кнопкой мыши циклически перебирает `dialog`    |
| `CUSTOM_SHOP`                 |                        Открывает пользовательское меню магазина          |
| `PROCEDURALLY_GENERATED_SHOP` |                     Открывает процедурно сгенерированный магазин      |
| `BAR`                         |                            Открывает меню бара                            |
| `ARENA`                       |                            Открывает меню арены                           |
| `QUEST_GIVER`                 |                Открывает процедурно сгенерированное меню квестов        |
| `CUSTOM_QUEST_GIVER`          |     Открывает меню квестов для определенного набора квестов в `questFileName`  |
| `NONE`                        |                                Нет взаимодействий                           |
| `SELL`                        |                             Открывает меню продажи                           |
| `TELEPORT_BACK`               | Телепортирует игроков обратно в последнее местоположение, где они были в мире не-elitemobs |
| `SCRAPPER`                    |                           Открывает меню разбора                          |
| `REPAIRMAN`                   |                           Открывает меню ремонта                          |
| `ENCHANTER`                   |                          Открывает меню зачарования                          |
| `REFINER`                     |                          Открывает меню переработки                          |
| `UNBINDER`                    |                         Открывает меню отвязки                            |
| `ARENA_MASTER`                |     Открывает меню арены для арены, установленной в `arenaFilename`   |
| `COMMAND`                     |                    Запускает команду, установленную в `command`                    |

*Для получения дополнительной информации о том, что делают SCRAPPER и аналогичные типы взаимодействия, нажмите [здесь]($language$/elitemobs/item_upgrade_system.md).*
