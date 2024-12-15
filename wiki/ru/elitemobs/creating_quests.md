```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Пример Квеста

EliteMobs поставляется с предустановленным `test_quest.yml`, который будет проанализирован здесь как простой формат квеста для примера.

_Пользовательские квесты находятся в папке `~plugins/EliteMobs/customquests`!_

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
name: "&aУбейте Тестового Босса"
questLore: 
- "&cПоложите конец правлению террора тестового босса!"
```

<div align="center">

![create_quest_quest.jpg](../../../img/wiki/create_quest_quest.jpg)

</div>

*Если ваш интерфейс квестов выглядит не так, вы можете изменить его, используя `/em alt`.*

Этот пример квеста даст игрокам задание убить 1 `test_boss.yml`. (Фактическое имя босса, отображаемое в трекере квестов, будет `name:`, установленным в `test_boss.yml`.) И в качестве награды за выполнение квеста они будут вознаграждены 1 Зубочисткой Магмагуя.

## Создание Пользовательских Квестов

<div align="center">

### customObjectives

Устанавливает цели квеста.

| Ключ       |   Значения    | По умолчанию |
|-----------|:-----------:|:-------:|
| `customObjectives` | Специальный [1] |  none   |

*Примечание: Если вы используете многофазного босса в качестве цели, то цель должна использовать первую фазу в качестве целевой.*

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
    - "&a[Диалоговый NPC] &fЧасто сюда заходите?"
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

**Специальный [1]**

<details>

<summary><b>Развернуть таблицу</b></summary>

<div align="center">

Пользовательские цели создаются с использованием следующих значений:

| Ключ                                     | Описание |
|-----------------------------------------|-------------|
| `KILL_CUSTOM` / `FETCH_ITEM` / `DIALOG` | Используется для установки типа цели, которую это представляет. `KILL_CUSTOM` указывает, что квест включает убийство определенного пользовательского босса, `FETCH_ITEM` указывает, что квест включает получение определенного пользовательского предмета, а `DIALOG` указывает, что квест включает разговор с NPC.            |
| `filename`                                    | Используется для установки имени файла пользовательского босса, пользовательского предмета, которого игрок должен убить/получить, или NPC, с которым нужно поговорить.           |
| `amount`                                      | Используется для установки количества пользовательских боссов, которых нужно убить, или предметов, которые нужно получить.            |
| `dialog`                                      | Используется для установки диалога NPC, с которым говорит игрок.            |
| `name`                                        | Используется для установки имени цели квеста, будь то NPC или пользовательский предмет. Только для визуальных целей.            |

_Пожалуйста, обратите внимание, что каждое поле пользовательской цели разделено с помощью `:` !_

</div>

</details>

***

### customRewards

Устанавливает награды за квест.

| Ключ       |                                Значения                                 | По умолчанию |
|-----------|:---------------------------------------------------------------------:|:-------:|
| `customRewards` | [Универсальный формат добычи EliteMobs]($language$elitemobs/loot_tables.md) |  none   |

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

Устанавливает разрешение, которое игрок должен иметь, чтобы принять квест.

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questAcceptPermission` | [Строка](#string) |  none   |

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

Устанавливает разрешения, которые игрок должен иметь, чтобы принять квест.

| Ключ       |   Значения    | По умолчанию |
|-----------|:-----------:|:-------:|
| `questAcceptPermissions` | [Список Строк](#string_list) |  none   |

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

Устанавливает разрешение, которое игрок получит после завершения квеста, что заблокирует его от повторного выполнения квеста (обычно [имя файла](#fielname) квеста, который вы редактируете).

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questLockoutPermission` | [Строка](#string) |  none   |

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

Устанавливает, сколько минут игрок должен ждать, прежде чем сможет снова выполнить квест (работает путем удаления разрешения на блокировку квеста).

| Ключ       |      Значения       | По умолчанию |
|-----------|:-----------------:|:-------:|
| `questLockoutMinutes` | [Целое Число](#integer) |  `-1`(никогда не повторится)   |

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

Устанавливает имя квеста. Принимает [Цветовые Коды](#color_codes).

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `name` | [Строка](#string) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
name: "&aМое Великое Имя Квеста"
```

</div>

</details>

***

### questLore

Устанавливает описание квеста, которое будет отображаться в игровом меню квестов.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questLore` | [Список Строк](#string_list) |  none   |

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

Устанавливает разрешения, назначенные игроку до тех пор, пока он не сдаст квест.

Если вы используете эту настройку, чтобы гарантировать, что предмет выпадает только тогда, когда у игроков есть конкретный активный квест, вам также необходимо настроить [То же Разрешение]($language$/elitemobs/creating_items.md&section=permission) в файле конфигурации предмета.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `temporaryPermissions` | [Список Строк](#string_list) |  none   |

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

Устанавливает диалог, который появляется в чате при принятии квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questAcceptDialog` | [Список Строк](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questAcceptDialog:
- "Мой герой! Вы так полезны!"
- "Я желаю вам удачи!"
```

<div align="center">

![create_quest_accept.jpg](../../../img/wiki/create_quest_accept.jpg)

</div>

</div>

</details>

***

### questCompleteMessage

Устанавливает диалог, который появляется в чате при завершении квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questCompleteMessage` | [Список Строк](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteMessage:
- "Мой герой! Вы выполнили мой сложный квест!"
- "В качестве награды вы можете получить этот батон хлеба!"
```

<div align="center">

![create_quest_complete.jpg](../../../img/wiki/create_quest_complete.jpg)

</div>

</div>

</details>

***

### questCompleteCommands

Устанавливает команды, которые будут выполняться при завершении квеста.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questCompleteCommands` | [Список Строк](#string_list) |  none   |

<details> 

<summary><b>Пример</b></summary>

<div align="left">

```yml
questCompleteCommands:
- say $player закончил квест!
```

<div align="center">

![create_quest_commands.jpg](../../../img/wiki/create_quest_commands.jpg)

</div>

</div>

</details>

***

### turnInNPC

Устанавливает имя файла NPC, с которым игрокам нужно поговорить/взаимодействовать, чтобы завершить квест. Это **не** обязательно должен быть тот же NPC, который выдал квест.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `turnInNPC` | [Имя файла](#filename) |  none   |

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

Устанавливает, будет ли квест использовать трекер квестов.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `trackable` | [Логическое значение](#boolean) | `true`  |

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

Устанавливает уровень квеста. Это всего лишь визуальное руководство, чтобы игроки могли понять, насколько сложным будет квест. Это **никак** не меняет уровень босса, предмета или других уровней.

| Ключ    |      Значения       | По умолчанию |
|--------|:-----------------:|:-------:|
| `questLevel` | [Целое число](#integer) | `0`  |

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

Устанавливает звук, который воспроизводится при принятии квеста. Можно воспроизводить как звуки Minecraft, так и звуки из ресурспака.

| Ключ                |      Значения       | По умолчанию |
|--------------------|:-----------------:|:-------:|
| `questAcceptSound` | [Строка](#string) |  none   |

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

Устанавливает звук, который воспроизводится при завершении (сдаче) квеста. Можно воспроизводить как звуки Minecraft, так и звуки из ресурспака.

| Ключ                |      Значения       | По умолчанию |
|--------------------|:-----------------:|:-------:|
| `questCompleteSound` | [Строка](#string) |  none   |

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

Как упоминалось в таблицах выше, разрешения обычно являются [Строками](#string) или [Списками Строк](#string_list). Но давайте подробнее рассмотрим, как вы будете использовать их для блокировки и разблокировки квестов.

Допустим, вы делаете quest_3 в серии запланированных квестов, и вы не хотите, чтобы игроки могли взять quest_3 до завершения quest_2. Мы бы настроили файл квеста следующим образом:

```yml
questAcceptPermission: elitequest.quest_2.yml
questLockoutPermission: elitequest.quest_3.yml
```
Установив `questAcceptPermissions` на `elitequest.quest_2.yml`, мы теперь предотвратили возможность для игроков взять quest_3.yml до завершения quest_2.yml. </br> Установив `questLockoutPermission` на `elitequest.quest_3.yml`, мы предотвратили возможность для игроков получить этот квест, если он уже есть в их трекере, или если они уже закончили этот квест. Это останавливает игроков от повторения квеста.

Если вы хотите создать квест, который станет доступен только после того, как игроки завершат серию квестов, вы бы настроили файл квеста следующим образом:

```yml
questAcceptPermissions: 
- elitequest.quest_2.yml
- elitequest.quest_3.yml
- elitequest.quest_4.yml
```

Если вы хотите, чтобы игроки могли получать определенные предметы только при наличии активного правильного квеста, то мы можем сделать это, используя `temporaryPermissions`. Мы создадим разрешение в файле квеста, используя `temporaryPermissions`, а затем создадим соответствующее [разрешение]($language$/elitemobs/creating_items.md&section=permission) в файле предмета, используя `permission`.

Например, мы откроем наш файл квеста и добавим следующее:

```yml
temporaryPermissions: 
- elitequest.my_cool_item.yml
```
Затем мы откроем файл предмета, в нашем случае *my_cool_item.yml*, и добавим следующее:

```yml
permission: elitequest.my_cool_item.yml
```
Оба файла теперь имеют соответствующие разрешения, которые теперь должны сделать так, чтобы наш предмет выпадал только тогда, когда у игроков есть активный правильный квест.
</div>
```