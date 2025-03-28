[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Система скриптов EliteMobs

Следующая страница расскажет о том, как создавать элитные скрипты!

Это продвинутая функция, требующая глубоких знаний EliteMobs.

**Примечание: Элитные скрипты могут быть добавлены как файлы способностей или в файлы пользовательских боссов!** При
использовании в качестве файлов способностей их можно добавить как обычные способности к боссам, используя настройку
конфигурации [powers]($language$/elitemobs/creating_bosses.md&section=powers) пользовательских боссов, как обычно.

## Добавление EliteScript

Чтобы начать добавление EliteScript к боссу, добавьте следующую запись в файл босса:

```yml
eliteScript:
```

**Примечание: Следующее очень чувствительно к регистру и пробелам! Убедитесь, что ваши пробелы, переносы строк и общее
форматирование соответствуют примерам!**

Теперь, когда вы объявили начало вашего скрипта, вы можете добавить свой конкретный скрипт. В этом примере мы собираемся создать скрипт под названием `Example`:

```yml
eliteScript:
  Example:
```

EliteScripts имеют 5 различных разделов: `Events`, `Conditions`, `Zones`, `Actions` и `Cooldowns`. Обязательным является
только раздел `Actions`.

Давайте посмотрим на простой пример:

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

Этот скрипт заставляет элиту подпрыгивать вверх при ударе игроком и не будет делать этого снова в течение 3 секунд (и
остановит срабатывание других способностей на 1 секунду из-за настроек, установленных в разделе Cooldowns).

Теперь, когда вы знаете общий формат структуры скриптов, пришло время узнать, что вы можете делать с каждым разделом!

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

# Перезарядки

[Cooldowns]($language$/elitemobs/elitescript_cooldowns.md)

Нажмите на ссылку выше, чтобы узнать, как использовать перезарядки!

----

## Добавление нескольких EliteScripts

У вас может быть несколько действий в событии, но что, если вы хотите несколько скриптов на одном и том же боссе? Это
так же просто, как создать новую запись скрипта! Давайте расширим предыдущий пример и добавим к нему еще один скрипт:

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

В этом примере мы добавили второй скрипт под названием Example2. Example2 подожжет игрока, получившего урон от босса,
это связано с тем, что targetType установлен
в [DIRECT_TARGET]($language$/elitemobs/elitescript_targets.md&section=target-types). </br>Перезарядка для этого скрипта
установлена на 200 тиков, что означает, что босс сможет поджигать игроков только каждые 10 секунд.

## Создание автономных способностей

Автономные способности почти полностью состоят из элитного скрипта. Есть только два необязательных поля. Не забывайте,
что для работы автономных способностей они должны быть помещены в папку `~plugins/EliteMobs/powers`. </br>Пример
автономной способности:

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

Как и везде в плагине, определяет, включена ли способность.

### powerType

Тип способности определяет, как назначается способность. Возможные значения:

- `UNIQUE`: Способность будет применяться только к пользовательским боссам, у которых эта способность установлена в разделе способностей.
- `DEFENSIVE` / `MISCELLANEOUS` / `OFFENSIVE`: ЛЮБАЯ элита сможет получить эти способности, и они будут засчитываться в
  определенный набор способностей.
- `MAJOR_ZOMBIE`, `MAJOR_SKELETON`, `MAJOR_BLAZE`, `MAJOR_ENDERMAN`, `MAJOR_GHAST`: Только элиты подходящего типа
  сущности смогут появляться естественным путем с этими способностями, и они будут засчитываться в качестве основных
  способностей.
