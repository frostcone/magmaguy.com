[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Создание квестов

# Прежде чем начать

## Где хранятся файлы квестов?

Файлы квестов находятся в папке конфигурации `~/plugins/EliteMobs/customquests`.

Можно создавать подпапки, например, `~/plugins/EliteMobs/customquests/myquests`. Это рекомендуется для удобства организации.

Один файл определяет один квест, хотя можно несколько раз создавать один и тот же квест и даже задавать несколько точек появления для одного и того же файла квеста.

Можно использовать [webapp](https://magmaguy.com/webapp/webapp.html) для быстрого и простого создания  Custom Bosses и не только.

## Минимальная конфигурация

**Минимальный возможный файл конфигурации для  Custom Quest:**
```yml
```

Обратите внимание, что это просто пустой файл. Он все равно будет создавать  Custom Quest, который не работает, так как это значения по умолчанию. **Все на этой странице - опционально!**

## Пример квеста

<div align="center">

Давайте посмотрим на пример того, как выглядит файл квеста.

<details> 
<summary><b>Пример</b></summary>

<div align="left">

```yml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aKill the Test Boss"
questLore: 
- "&cEnd the test boss'' reign of terror!"
```

</div>

</details>

</div>


## Базовые настройки

<div align="center">

### isEnabled

Включает или выключает квест.

| Ключ       |       Значения        | По умолчанию |
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

### customObjectives

Цели квеста.

| Ключ       |       Значения        | По умолчанию |
|-|:-:|-|
| `customObjectives` |  Special [1] |  none   |

*Примечание: Если вы используете многофазного босса в качестве цели, то цель должна использовать первую фазу в качестве цели.*

<details> 

<summary><b>Примеры</b></summary>

<div align="left">

`KILL_CUSTOM`:

```yml
customObjectives:
  Objective1:
    amount: '1'
    filename: my_cool_boss.yml
    objectiveType: KILL_CUSTOM
```

`DIALOG`:

```yml
customObjectives:
  Objective1:
    dialog:
    - "&a[Dialog NPC] &fCome here often?"
    - "&7&oI should eat more apples."
    filename: dialog_npc.yml
    npcName: Dialog NPC
    location: at dialog location.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Red Apples
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Special [1]**

<details>

<summary><b>Expand Table</b></summary>

<div align="center">

Custom Objectives are constructed using the following values:

| Key                                     | Description |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Used to set the type of objective this represents. `KILL_CUSTOM` indicates the quest involves killing a specific Custom Boss, `FETCH_ITEM` indicates that the quest involves getting a specific Custom Item and `DIALOG` indicates that the quest involves talking to an NPC.            |
| `filename`                                    | Used to set the file name of the Custom Boss, the Custom Item that the player has to kill / obtain or the NPC they have to talk to.            |
| `amount`                                      | Used to set the amount of Custom Bosses that must be killed or items that must be obtained.            |
| `dialog`                                      | Used to set the dialog of the NPC the player talks to.            |
| `name`                                        | Used to set the name of the quest objective, be it an NPC or a custom item. For visual purposes only.            |

_Please note that every Custom Objective field is separated with a `:` !_

</div>

</details>

***

### customRewards

Настройки наград за квест.

| Ключ       |                                Значения                                 | По умолчанию |
|-|:-:|:-------:|
| `customRewards` | [Универсальный формат лута EliteMobs]($language$elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
customRewards:
- currencyAmount=50:amount=1:chance=0.05
- material=COOKED_COD:amount=3:chance=1.0
- filename=magmaguys_toothpick.yml:amount=1:chance=1.0
```

<div align="center">

![create_quest_rewards.jpg](../../../img/wiki/create_quest_rewards.jpg)

</div>

</div>

</details>

***

### questAcceptPermission

Разрешение, которое должно быть у игрока, чтобы принять квест.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptPermission: elitequest.my_permission
```

</div>

</details>

***

### questAcceptPermissions

Разрешения, которые должны быть у игрока, чтобы принять квест.

| Ключ       |   Значения    | По умолчанию |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptPermissions: 
- elitequest.my_previous_quest_one.yml
- elitequest.my_previous_quest_two.yml
```

</div>

</details>

***

### questLockoutPermission

Разрешение, которое игрок получит после завершения квеста, которое заблокирует его от повторного выполнения квеста (обычно [Filename](#fielname) редактируемого квеста).

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questLockoutPermission: elitequest.my_quest.yml
```

</div>

</details>

***

### questLockoutMinutes

Сколько времени (в минутах) игрок должен ждать, прежде чем сможет снова выполнить квест (работает путем удаления разрешения на блокировку квеста).

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Integer](#integer) |  `-1`(никогда не повторится)   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questLockoutMinutes: 60
```

</div>

</details>

***

### name

Название квеста. Поддерживает [Цветные коды](#color_codes).

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aMy Great Quest Name"
```

</div>

</details>

***

### questLore

Описание квеста, которое будет отображаться в меню квестов в игре.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questLore` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questLore:
- "Interesting lore sentence."
- "Yet another interesting lore sentence."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Разрешения, которые присваиваются игроку, пока он не сдаст квест.

Если вы используете эту настройку, чтобы гарантировать, что предмет выпадает только тогда, когда у игроков есть активный определенный квест, вам также нужно будет настроить [Same Permission]($language$/elitemobs/creating_items.md&section=permission) в конфигурационном файле предмета.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
temporaryPermissions:
- elitequest.item_that_should_drop_only_during_quest.yml
```

</div>

</details>

***

### questAcceptDialog

Диалог, который появляется в чате при принятии квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "My hero! You are so helpful!"
- "I wish you the best of luck!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Диалог, который появляется в чате при завершении квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "My hero! You have completed my difficult quest!"
- "As a reward you can have this loaf of bread!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Команды, которые будут выполняться при завершении квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [String List](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player has finished a quest!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Имя файла NPC, с которым игрокам нужно поговорить/взаимодействовать, чтобы завершить квест. Это **не обязательно** должен быть тот же NPC, который выдал квест.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Filename](#filename) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
turnInNPC: my_cool_quest_npc.yml
```

</div>

</details>

***

### trackable

Определяет, будет ли квест использовать трекер квестов.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `trackable` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
trackable: true
```

</div>

</details>

***

### questLevel

Уровень квеста. Это всего лишь визуальное руководство, чтобы игроки могли понять, насколько сложным будет квест. Это **никак не** влияет на уровень босса, предмета или других уровней.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questLevel` | [Integer](#integer) | `0`  |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questLevel: 10
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questAcceptSound

Звук, который воспроизводится при принятии квеста. Можно воспроизводить как звуки Minecraft, так и звуки из текстурного пакета.

| Ключ                |      Значения       | По умолчанию |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptSound: entity.experience_orb.pickup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

***

### questCompleteSound

Звук, который воспроизводится при завершении квеста (сдаче). Можно воспроизводить как звуки Minecraft, так и звуки из текстурного пакета.

| Ключ                |      Значения       | По умолчанию |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [String](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteSound: entity.player.levelup
```

<div align="center">

![create_quest_level.jpg](../../../img/wiki/create_quest_BUGGEDaddLATER.jpg)

</div>

</div>

</details>

### Разрешения

Как упоминалось в таблицах выше, разрешения обычно являются [Строками](#string) или [Список строк](#string_list). Но давайте подробнее рассмотрим, как вы будете их использовать для блокировки и разблокировки квестов. 

Допустим, вы создаете quest_3 в серии квестов, которые вы запланировали, и не хотите, чтобы игроки могли взять quest_3, пока не завершат quest_2. Мы настроим файл квеста следующим образом:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Установив `questAcceptPermissions` как `elitequest.quest_2.yml`, мы теперь запретили игрокам брать quest_3.yml, пока они не завершат quest_2.yml. </br> Установив `questLockoutPermission` как `elitequest.quest_3.yml`, мы запретили игрокам получать этот квест, пока у них уже есть этот квест в их трекере или если они уже завершили этот квест. Это не позволяет игрокам повторять квест.

Если вы хотите создать квест, который станет доступен только после того, как игроки завершат серию квестов, вам нужно будет настроить файл квеста следующим образом:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Если вы хотите, чтобы игроки могли lootar определенные предметы только тогда, когда у них есть активный правильный квест, то мы можем сделать это, используя `temporaryPermissions`. Мы создадим разрешение в файле квеста, используя `temporaryPermissions`, а затем создадим соответствующее [разрешение]($language$/elitemobs/creating_items.md&section=permission) в файле предмета, используя `permission`.

Например, мы откроем наш файл квеста и добавим следующее:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Затем мы откроем файл предмета, в нашем случае *my_cool_item.yml*, и добавим следующее:

```yml
permission: elitequest.my_cool_item.yml
```
Оба файла теперь имеют совпадающие разрешения, что должно сделать так, чтобы наш предмет выпадал только тогда, когда у игроков есть активный правильный квест.

</div>

