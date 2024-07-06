[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Система Scripting EliteMobs

На этой странице подробно описано, как создавать Elite Scripts!

Это продвинутая функция, для которой требуется глубокое знание EliteMobs.

**Примечание: Elite Scripts можно добавлять как файлы способностей, так и в файлы  Custom Bosses!** Если используется как файлы способностей, то их можно добавлять в качестве обычных способностей к боссам, используя настройку конфигурации [powers]($language$/elitemobs/creating_bosses.md&section=powers)  Custom Bosses, как обычно.

## Добавление EliteScript

Чтобы начать добавлять EliteScript к боссу, добавьте следующую запись в файл босса:

```yml
eliteScript:
```

**Примечание: Следующее крайне чувствительно к регистру и пробелам! Убедитесь, что ваши пробелы, переносы строк и общая  форматирование  соответствуют примерам!**

Теперь, когда начало вашего скрипта объявлено, вы можете добавить свой конкретный скрипт. В этом примере мы создадим скрипт с именем `Example`:

```yml
eliteScript:
  Example:
```

EliteScripts имеют 5 различных секций: `Events`, `Conditions`, `Zones`, `Actions` и `Cooldowns`. Только `Actions` являются обязательными.

Давайте рассмотрим простой пример:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
```

Этот скрипт заставляет элиту прыгать вверх, когда ее бьет игрок, и не будет делать это снова в течение 3 секунд (и не позволит другим способностям срабатывать в течение 1 секунды из-за настроек, которые мы задали в разделе Cooldowns).

Теперь, когда вы знаете общий формат структуры скриптов, пришло время узнать, что вы можете сделать с каждой секцией!

----

# События

[Events]($language$/elitemobs/elitescript_events.md)

Нажмите на ссылку выше, чтобы узнать, как использовать события!

# Цели

[Targets]($language$/elitemobs/elitescript_targets.md)

Нажмите на ссылку выше, чтобы узнать, как использовать цели!

# Действия

[Actions]($language$/elitemobs/elitescript_actions.md)

Нажмите на ссылку выше, чтобы узнать, как использовать действия!

# Зоны

[Zones]($language$/elitemobs/elitescript_zones.md)

Нажмите на ссылку выше, чтобы узнать, как использовать зоны!

# Условия

[Conditions]($language$/elitemobs/elitescript_conditions.md)

Нажмите на ссылку выше, чтобы узнать, как использовать условия!

# Темпы Охлаждения

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Нажмите на ссылку выше, чтобы узнать, как использовать темпы охлаждения!

----

## Добавление нескольких EliteScripts

Вы можете иметь несколько действий в одном событии, но что, если вы хотите добавить несколько скриптов к одному и тому же боссу? Это так же просто, как создать новую запись скрипта! Давайте расширим предыдущий пример и добавим к нему еще один скрипт:

```yml
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,0.5,0
    Cooldowns:
      local: 60
      global: 20
  Example2:
    Events:
    - PlayerDamagedByEliteMobEvent
    Actions:
    - action: SET_ON_FIRE
      Target:
        targetType: DIRECT_TARGET
    Cooldowns:
      local: 200
      global: 60
```
В этом примере мы добавили второй скрипт с именем Example2. Example2 будет поджигать игрока, который получит урон от босса. Это происходит из-за того, что targetType установлен как [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>Темп охлаждения для этого скрипта установлен на 200 тактов, что означает, что босс сможет поджигать игроков только каждые 10 секунд.

## Создание  Standalone Powers

Standalone Powers почти полностью состоят из Elite Script. Есть только два поля, которые являются необязательными. Не забывайте, что для работы Standalone Powers они должны быть помещены в папку `~plugins/EliteMobs/powers`. </br>Пример Standalone Power:

```yml
isEnabled: true
powerType: UNIQUE
eliteScript:
  Example:
    Events:
    - EliteMobDamagedByPlayerEvent
    Actions:
    - action: PUSH
      Target:
        targetType: SELF
      vValue: 0,.3,0
    Cooldowns:
      local: 60
      global: 20
```

### isEnabled

Как и везде в плагине, определяет, включена ли эта способность.

### powerType

Определяет, как способность присваивается. Допустимые значения:

- `UNIQUE`: Способность будет применяться только к  Custom Bosses, у которых она установлена в секции powers.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`:  Любая  elite  может получить эти способности, и они будут засчитываться для определенного подмножества способностей.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`:  Только  elite  соответствующего типа существа могут появиться естественным образом с этими способностями, и они будут засчитываться в качестве основных способностей.


