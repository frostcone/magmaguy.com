```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Пример Задания

EliteMobs поставляется с предустановленным `test_quest.yml`, который будет проанализирован здесь как простой формат заданий для подражания.

_Пользовательские задания находятся в папке `~plugins/EliteMobs/customquests`!_

`test_quest.yml`

```yaml
isEnabled: true
customObjectives:
  Objective1:
    amount: '1'
    filename: test_boss.yml
    objectiveType: KILL_CUSTOM
customRewards:
- filename=magmaguys_toothpick.yml:amount=1:chance=1
name: "&aУбить тестового босса"
questLore: 
- "&cПоложи конец правлению террора тестового босса!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Если ваш интерфейс заданий выглядит не так, вы можете изменить его, используя `/em alt`.*

Это примерное задание даст игрокам задачу убить 1 test_boss.yml. (Фактическое имя босса, отображаемое в отслеживании
заданий, будет `name:`, установленное в test_boss.yml.) И в качестве награды за выполнение задания они получат 1
Зубочистку Магмагуя.

## Создание Пользовательских Заданий

<div align="center">

### customObjectives

Устанавливает цели задания.

| Ключ               |    Значения     | По умолчанию |
|--------------------|:---------------:|:------------:|
| `customObjectives` | Специальное [1] |     нет      |

*Примечание: Если вы используете многофазного босса в качестве своей цели, то цель должна использовать первую фазу в
качестве мишени.*

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
    - "&a[Диалоговый NPC] &fЧасто сюда заглядываете?"
    - "&7&oМне нужно есть больше яблок."
    filename: dialog_npc.yml
    npcName: Диалоговый NPC
    location: в месте диалога.
    objectiveType: DIALOG
```

`FETCH_ITEM`:

```yml
customObjectives:
  Objective1:
    amount: '99'
    itemName: Красные Яблоки
    filename: my_quest_item_red_apples.yml
    objectiveType: FETCH_ITEM
```

<div align="center">

![create_quest_objective.jpg](../../../img/wiki/create_quest_objective.jpg)

</div>

</div>

</details>

**Специальное [1]**

<details>

<summary><b>Развернуть Таблицу</b></summary>

<div align="center">

Пользовательские цели строятся с использованием следующих значений:

| Ключ                                    | Описание                                                                                                                                                                                                                                                                                    |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Используется для установки типа цели. `KILL_CUSTOM` указывает, что задание включает убийство конкретного пользовательского босса, `FETCH_ITEM` указывает, что задание включает получение конкретного пользовательского предмета, а `DIALOG` указывает, что задание включает разговор с NPC. |
| `filename`                              | Используется для установки имени файла пользовательского босса, пользовательского предмета, которого игрок должен убить/получить, или NPC, с которым он должен поговорить.                                                                                                                  |
| `amount`                                | Используется для установки количества пользовательских боссов, которых необходимо убить, или предметов, которые необходимо получить.                                                                                                                                                        |
| `dialog`                                | Используется для установки диалога NPC, с которым разговаривает игрок.                                                                                                                                                                                                                      |
| `name`                                  | Используется для установки названия цели задания, будь то NPC или пользовательский предмет. Только для визуальных целей.                                                                                                                                                                    |

_Обратите внимание, что каждое поле пользовательской цели разделено знаком `:`!_

</div>

</details>

***

### customRewards

Устанавливает награды за задание.

| Ключ            |                                  Значения                                   | По умолчанию |
|-----------------|:---------------------------------------------------------------------------:|:------------:|
| `customRewards` | [Универсальный формат добычи EliteMobs]($language$elitemobs/loot_tables.md) |     нет      |

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

Устанавливает разрешение, которое игрок должен иметь, чтобы принять задание.

| Ключ                    |     Значения      | По умолчанию |
|-------------------------|:-----------------:|:------------:|
| `questAcceptPermission` | [Строка](#string) |     нет      |

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

Устанавливает разрешения, которые игрок должен иметь, чтобы принять задание.

| Ключ                     |           Значения           | По умолчанию |
|--------------------------|:----------------------------:|:------------:|
| `questAcceptPermissions` | [Список Строк](#string_list) |     нет      |

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

Устанавливает разрешение, которое игрок получит по завершении задания, которое заблокирует ему возможность выполнять
задание снова (обычно [Имя файла](#fielname) редактируемого задания).

| Ключ                     |     Значения      | По умолчанию |
|--------------------------|:-----------------:|:------------:|
| `questLockoutPermission` | [Строка](#string) |     нет      |

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

Устанавливает, сколько минут игроку придется ждать, прежде чем он сможет выполнить задание снова (работает путем
удаления разрешения блокировки задания).

| Ключ                  |        Значения         |         По умолчанию         |
|-----------------------|:-----------------------:|:----------------------------:|
| `questLockoutMinutes` | [Целое число](#integer) | `-1` (никогда не повторится) |

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

Устанавливает название задания. Принимает [Цветовые коды](#color_codes).

| Ключ   |     Значения      | По умолчанию |
|--------|:-----------------:|:------------:|
| `name` | [Строка](#string) |     нет      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aМое Великое Название Задания"
```

</div>

</details>

***

### questLore

Устанавливает описание задания, которое появится во внутриигровом меню заданий.

| Ключ        |           Значения           | По умолчанию |
|-------------|:----------------------------:|:------------:|
| `questLore` | [Список Строк](#string_list) |     нет      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questLore:
- "Интересное предложение описания."
- "Еще одно интересное предложение описания."
```

<div align="center">

![create_quest_lore.jpg](../../../img/wiki/create_quest_lore.jpg)

</div>

</div>

</details>

***

### temporaryPermissions

Устанавливает разрешения, назначенные игроку до тех пор, пока он не сдаст задание.

Если вы используете этот параметр, чтобы гарантировать, что предмет выпадает только тогда, когда у игроков есть
определенное активное задание, вам также нужно будет
настроить [То же Разрешение]($language$/elitemobs/creating_items.md&section=permission) в файле конфигурации предмета.

| Ключ                   |           Значения           | По умолчанию |
|------------------------|:----------------------------:|:------------:|
| `temporaryPermissions` | [Список Строк](#string_list) |     нет      |

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

Устанавливает диалог, который появляется в чате при принятии задания.

| Ключ                |           Значения           | По умолчанию |
|---------------------|:----------------------------:|:------------:|
| `questAcceptDialog` | [Список Строк](#string_list) |     нет      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "Мой герой! Ты так помогаешь!"
- "Желаю тебе удачи!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Устанавливает диалог, который появляется в чате по завершении задания.

| Ключ                   |           Значения           | По умолчанию |
|------------------------|:----------------------------:|:------------:|
| `questCompleteMessage` | [Список Строк](#string_list) |     нет      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "Мой герой! Ты выполнил мое сложное задание!"
- "В качестве награды ты можешь взять этот хлеб!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Устанавливает команды, которые будут выполняться по завершении задания.

| Ключ                    |           Значения           | По умолчанию |
|-------------------------|:----------------------------:|:------------:|
| `questCompleteCommands` | [Список Строк](#string_list) |     нет      |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player завершил задание!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Устанавливает имя файла NPC, с которым игрокам нужно поговорить/взаимодействовать, чтобы завершить задание. Это **не**
обязательно должен быть тот же NPC, который выдал задание.

| Ключ        |        Значения        | По умолчанию |
|-------------|:----------------------:|:------------:|
| `turnInNPC` | [Имя файла](#filename) |     нет      |

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

Устанавливает, будет ли задание использовать отслеживание заданий.

| Ключ        |            Значения             | По умолчанию |
|-------------|:-------------------------------:|:------------:|
| `trackable` | [Логическое значение](#boolean) |    `true`    |

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

Устанавливает уровень задания. Это всего лишь визуальное руководство, чтобы игроки могли понять, насколько сложным будет
задание. Это **никак** не изменяет уровень босса, предмета или другие уровни.

| Ключ         |        Значения         | По умолчанию |
|--------------|:-----------------------:|:------------:|
| `questLevel` | [Целое число](#integer) |     `0`      |

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

Устанавливает звук, который воспроизводится при принятии задания. Можно воспроизводить как звуки Minecraft, так и звуки
из пакета ресурсов.

| Ключ               |     Значения      | По умолчанию |
|--------------------|:-----------------:|:------------:|
| `questAcceptSound` | [Строка](#string) |     нет      |

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

Устанавливает звук, который воспроизводится при завершении (сдаче) задания. Можно воспроизводить как звуки Minecraft,
так и звуки из пакета ресурсов.

| Ключ                 |     Значения      | По умолчанию |
|----------------------|:-----------------:|:------------:|
| `questCompleteSound` | [Строка](#string) |     нет      |

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

Как упоминалось в таблицах выше, разрешения обычно являются [Строками](#string) или [Списками Строк](#string_list). Но
давайте более подробно рассмотрим, как вы будете использовать их для блокировки и разблокировки заданий.

Допустим, вы создаете quest_3 в серии запланированных вами заданий, и вы не хотите, чтобы игроки могли взять quest_3 до
того, как они закончат quest_2. Мы настроим файл задания следующим образом:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```

Установив для `questAcceptPermissions` значение `elitequest.quest_2.yml`, мы теперь запретили игрокам брать quest_3.yml
до того, как они закончат quest_2.yml. </br> Установив для `questLockoutPermission` значение `elitequest.quest_3.yml`,
мы запретили игрокам получать это задание, пока у них уже есть это задание в своем трекере или если они уже закончили
это задание. Это не позволяет игрокам повторять задание.

Если вы хотите сделать задание, которое станет доступным только после того, как игроки завершат серию заданий, то вы
настроите файл задания следующим образом:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Если вы хотите, чтобы игроки могли добывать определенные предметы только тогда, когда у них активно правильное задание,
мы можем сделать это, используя `temporaryPermissions`. Мы создадим разрешение в файле задания,
используя `temporaryPermissions`, затем создадим
соответствующее [разрешение]($language$/elitemobs/creating_items.md&section=permission) в файле предмета,
используя `permission`.

Например, мы откроем наш файл задания и добавим следующее:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```

Затем мы откроем файл предмета, в нашем случае *my_cool_item.yml*, и затем добавим следующее:

```yml
permission: elitequest.my_cool_item.yml
```

Теперь оба файла имеют совпадающие разрешения, что теперь должно сделать наш предмет выпадающим только тогда, когда у
игроков есть правильное активное задание.

</div>
```
