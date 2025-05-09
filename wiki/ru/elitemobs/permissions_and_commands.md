# Пользовательские команды

*Примечание: Все разрешения игрока по умолчанию установлены в значение true. Это означает, что они уже настроены.*

*Если вы не хотите, чтобы у игроков был доступ к определенной функции через разрешения, вам придется запретить это
разрешение этому игроку!*

| Команда                              |                                                                                                   Описание                                                                                                    |
|--------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`                 |            Основная команда, которая объединяет всю информацию об игроке в плагине в легкодоступном меню. *Примечание:* все остальные пользовательские команды находятся в этой основной команде.             |
| `/adventurersguild` / `/ag`          |                                  В рекомендуемой конфигурации телепортирует игрока в мир гильдии искателей приключений, где они взаимодействуют с различными NPC EliteMobs.                                   |
| `/em shareItem`                      |                                                                Связывает предмет в чате, чтобы другие игроки могли видеть его характеристики.                                                                 |
| `/em help`                           | Выводит список всех команд. Остальные пользовательские команды обычно заменяются использованием NPC или интерфейсом `/em`! Вы можете навести курсор на команды, чтобы получить описание того, что они делают. |
| `/em money check`                    |                                                                                           Отображает деньги игрока.                                                                                           |
| `/em pay <имя_пользователя> <сумма>` |                                                         Позволяет игрокам платить друг другу. Транзакции облагаются налогом в настраиваемом размере.                                                          |
| `/em spawntp`                        |                                                                                 Телепортирует игрока в точку спавна сервера.                                                                                  |

## NPC команды

Эти команды полезны только в том случае, если у вас не установлен хаб Гильдии искателей приключений с NPC.

Рекомендуется установить их, чтобы выполнять все эти команды через NPC, а не заставлять игроков запоминать, как работают команды.

| Команда                       |                                             Описание                                              |
|-------------------------------|:-------------------------------------------------------------------------------------------------:|
| `/em rank`                    |       Открывает меню рангов или телепортирует игроков в хаб Гильдии искателей приключений.        |
| `/em shop procedural <игрок>` |         Открывает магазин или телепортирует игроков в хаб Гильдии искателей приключений.          |
| `/em shop sell <игрок>`       |  Открывает меню продажи магазина или телепортирует игроков в хаб Гильдии искателей приключений.   |
| `/em shop custom <игрок>`     | Открывает пользовательский магазин или телепортирует игроков в хаб Гильдии искателей приключений. |
| `/em repair`                  |       Открывает меню ремонта или телепортирует игроков в хаб Гильдии искателей приключений.       |
| `/em enchant`                 |     Открывает меню зачарования или телепортирует игроков в хаб Гильдии искателей приключений.     |
| `/em scrap`                   |     Открывает меню утилизации или телепортирует игроков в хаб Гильдии искателей приключений.      |
| `/em unbind`                  |   Открывает меню отмены привязки или телепортирует игроков в хаб Гильдии искателей приключений.   |

## Внутренние пользовательские команды

**Эти команды предназначены для запуска из игровых меню, таких как квесты из меню квестов. Если нет инструкций о том,
как получить идентификатор, то это означает, что получить этот идентификатор нельзя, кроме как запустив команду из
игрового меню.** Для удобства они были разделены на идентифицируемые и неидентифицируемые категории.

### Идентифицируемые

| Команда                         | Описание                           |
|---------------------------------|------------------------------------|
| `/em dungeontp <id_подземелья>` | Телепортирует игрока в подземелье. |

*Примечание: это предназначено для запуска из меню `/em`, так как игроки не могут угадать идентификаторы подземелий.
Идентификаторы подземелий совпадают с именами файлов .yml в `~/plugins/EliteMobs/dungeonpackages/`. <br/>Вы можете
увидеть идентификаторы в консоли при использовании команды `/em` и выбрать телепорт со страницы Телепортов.*

### Неидентифицируемые

| Команда                          |                                                                  Описание                                                                  |
|----------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em quest accept <id_квеста>`   |                                                              Принимает квест.                                                              |
| `/em quest track <id_квеста>`    |                                                             Отслеживает квест.                                                             |
| `/em quest complete <id_квеста>` |                                                              Завершает квест.                                                              |
| `/em quest leave <id_квеста>`    |                                                              Покидает квест.                                                               |
| `/em track boss <uuid>`          | Отслеживает пользовательского босса. Примечание: это предназначено для запуска из меню `/em`, так как игроки не могут угадать UUID боссов. |

# Административные команды

<div>

**> > > `elitemobs.*` - Административное разрешение для EliteMobs для полного доступа! < < <**

</div>

| Команда                                                                                       |                                                                Описание                                                                |
|-----------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------:|
| `/em setup`                                                                                   |                                                   Открывает главное меню настройки.                                                    |
| `/em spawn elite <тип_сущности> <уровень> <сила1> <сила2> <сила3>`                            |                                                 Создает элиту на основе типа сущности.                                                 |
| - `/em spawn eliteAt <тип_сущности> <имя_мира> <x> <y> <z> <уровень> <сила1> <сила2> <сила3>` |                                        Создает элиту на основе типа сущности и местоположения.                                         |
| `/em spawn boss <имя_файла>`                                                                  |                                         Создает пользовательского босса из файла конфигурации.                                         |
| `/em spawn boss <имя_файла> <уровень>`                                                        |                            Создает пользовательского босса из файла конфигурации и переопределяет уровень.                             |
| `/em spawn bossAt <имя_файла> <имя_мира> <x> <y> <z>`                                         |                          Создает пользовательского босса из файла конфигурации в определенном местоположении.                          |
| `/em spawn bossAt <имя_файла> <уровень> <имя_мира> <x> <y> <z>`                               |             Создает пользовательского босса из файла конфигурации в определенном местоположении и переопределяет уровень.              |
| `/em place boss <имя_файла>`                                                                  |                                            Добавляет место спавна для регионального босса.                                             |
| `/em place treasureChest <имя_файла>`                                                         |                                        Добавляет сундук с сокровищами в место, где стоит игрок.                                        |
| `/em remove`                                                                                  | Навсегда удаляет сущность элитного моба. Работает для элиты/региональных/супер/NPC. Запустите еще раз, чтобы выйти из режима удаления. |
| `/em event <имя_события>`                                                                     |                                             Запускает пользовательское событие с таймером.                                             |
| `/em place npc <имя_файла_npc>`                                                               |                                                              Создает NPC.                                                              |
| `/em stats`                                                                                   |                                    Получает статистику для активных сущностей EliteMobs и игроков.                                     |
| `/em loot menu`                                                                               |                                  Открывает меню, в котором можно получить любой пользовательский лут.                                  |
| `/em loot give <игрок> <имя_файла>`                                                           |                                             Дает определенный пользовательский лут игроку.                                             |
| `/em loot simulate <уровень>`                                                                 |                               Моделирует выпадение предметов из элитного моба из установленного уровня.                                |
| `/em loot simulate <уровень> <количество>`                                                    |                   Моделирует выпадение предметов из элитного моба из установленного уровня заданное количество раз.                    |
| `/em version`                                                                                 |                                                        Получает версию плагина.                                                        |
| `/em reload`                                                                                  |                                              Перезагружает плагин. Работает почти всегда.                                              |
| `/em kill`                                                                                    |                                                Убивает всех агрессивных элитных мобов.                                                 |
| `/em kill <радиус>`                                                                           |                                           Убивает всех агрессивных элитных мобов в радиусе.                                            |
| `/em kill type <тип_сущности>`                                                                |                                             Убивает всех элитных мобов определенного типа.                                             |
| `/em kill type <тип_сущности> <радиус>`                                                       |                                        Убивает всех элитных мобов определенного типа в радиусе.                                        |
| `/em loot debug <уровень>`                                                                    |                                             Получает отладочные предметы для тестирования.                                             |
| `/em money add <имя_пользователя> <сумма>`                                                    |                                               Добавляет определенную сумму денег игроку.                                               |
| `/em money addall <сумма>`                                                                    |                                        Добавляет определенную сумму денег всем онлайн игрокам.                                         |
| `/em money remove <имя_пользователя> <сумма>`                                                 |                                               Удаляет определенную сумму денег у игрока.                                               |
| `/em money set <имя_пользователя> <сумма>`                                                    |                                                Устанавливает общую сумму валюты игрока.                                                |
| `/em rank <игрок> <уровень_престижа> <уровень_гильдии>`                                       |                                                   Устанавливает ранг гильдии игрока.                                                   |
| `/em discord`                                                                                 |                                              Получает ссылку на сервер поддержки Discord.                                              |
| `/em discord <сообщение>`                                                                     |                             Публикует отладочное сообщение в Discord, если DiscordSRV настроен правильно.                              |
| `/em unbind force`                                                                            |                                       Отменяет привязку удержанного предмета с привязкой к душе.                                       |
| `/em money check <игрок>`                                                                     |                                                 Проверяет валюту определенного игрока.                                                 |
| `/em fireball`                                                                                |                                     Создает огненный шар для проверки регенерации элитного взрыва.                                     |
| `/em transitiveBlocks register <имя_файла> <ON_SPAWN/ON_REMOVE>`                              |                    См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                    |
| `/em transitiveBlocks edit <имя_файла> <ON_SPAWN/ON_REMOVE>`                                  |                    См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                    |
| `/em /em transitiveBlocks registerArea <имя_файла> <ON_SPAWN/ON_REMOVE>`                      |                    См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                    |
| `/em transitiveBlocks editArea <имя_файла> <ON_SPAWN/ON_REMOVE>`                              |                    См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                    |
| `/em transitiveBlocks cancel`                                                                 |                    См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                    |
| `/em protection bypass`                                                                       |                            Переключает защиту подземелья. Также работает для Гильдии искателей приключений.                            |

## Внутренние административные команды

Эти команды предназначены для запуска при взаимодействии с меню или интерактивным текстом в чате, а не вручную.

| Команда                                      |                            Описание                            |
|----------------------------------------------|:--------------------------------------------------------------:|
| `/em setup done`                             |   Прекращает отображение сообщений при входе администратора.   |
| `/em setup toggle <конфигурация_подземелья>` | Позволяет переключать установку указанного контента EliteMobs. |

# Чистые разрешения:
```
permissions:
  elitemobs.*:
    description: Предоставляет доступ ко всем командам elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Позволяет игрокам запускать /elitemobs stats
    default: op
  elitemobs.version:
    description: Позволяет игрокам запускать /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Позволяет игрокам взаимодействовать с NPC для динамических магазинов
    default: true
  elitemobs.shop.command:
    description: Позволяет игрокам открывать меню динамического магазина с помощью команд
    default: true
  elitemobs.customshop.npc:
    description: Позволяет игрокам взаимодействовать с NPC для динамических магазинов
    default: true
  elitemobs.customshop.command:
    description: Позволяет игрокам открывать меню динамического магазина с помощью команд
    default: true
  elitemobs.currency.pay:
    description: Позволяет игрокам запускать /elitemobs pay [имя_пользователя] [сумма]
    default: true
  elitemobs.currency.check:
    description: Позволяет игрокам запускать /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Позволяет игрокам запускать /elitemobs check [имя_пользователя]
    default: op
  elitemobs.events:
    description: Позволяет игрокам запускать все события
    default: true
  elitemobs.checktier.others:
    description: Позволяет игрокам запускать /elitemobs checktier [игрок]
    default: op
  elitemobs.gettier:
    description: Позволяет игрокам запускать /elitemobs gettier [уровень]
    default: op
  elitemobs.versionnotification:
    description: Позволяет игрокам получать уведомления об обновлениях плагина
    default: op
  elitemobs.adventurersguild.teleport:
    description: Позволяет игрокам телепортироваться в хаб Гильдии искателей приключений с помощью /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Позволяет игрокам открывать меню рангов с помощью команды /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Позволяет игрокам открывать меню рангов с помощью /em rank
    default: true
  elitemobs.rank.npc:
    description: Позволяет игрокам получить доступ к меню /em rank через NPC
    default: true
  elitemobs.quest.command:
    description: Позволяет игрокам брать квесты с помощью команды
    default: true
  elitemobs.quest.npc:
    description: Позволяет игрокам брать квесты через EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Позволяет игрокам телепортироваться в заданное местоположение EliteMobs
    default: true
  elitemobs.spawntp:
    description: Позволяет игрокам телепортироваться в место спавна сервера по умолчанию.
    default: true
  elitemobs.back.npc:
    description: Позволяет игрокам взаимодействовать с NPC, чтобы вернуться в предыдущее местоположение.
    default: true
  elitemobs.shareitem:
    description: Позволяет делиться удержанным элитным предметом в чате.
    default: true
  elitemobs.scrap.npc:
    description: Позволяет игрокам утилизировать предметы у NPC
    default: true
  elitemobs.scrap.command:
    description: Позволяет игрокам утилизировать предметы с помощью команды
    default: true
  elitemobs.smelt.command:
    description: Позволяет игрокам плавить предметы с помощью команды
    default: true
  elitemobs.smelt.npc:
    description: Позволяет игрокам плавить предметы с помощью NPC
    default: true
  elitemobs.repair.command:
    description: Позволяет игрокам использовать команду repair, чтобы открыть меню для ремонта элитных предметов
    default: true
  elitemobs.repair.npc:
    description: Позволяет игрокам взаимодействовать с NPC для ремонта предметов
    default: true
  elitemobs.refiner.command:
    description: Позволяет игрокам использовать команду refiner, чтобы открыть меню для улучшения элитного лома
    default: true
  elitemobs.refiner.npc:
    description: Позволяет игрокам взаимодействовать с NPC для улучшения элитного лома
    default: true
  elitemobs.enhancer.command:
    description: Позволяет игрокам использовать команду enhancer, чтобы открыть меню для улучшения элитных предметов
    default: true
  elitemobs.enhancer.npc:
    description: Позволяет игрокам взаимодействовать с NPC для улучшения элитных предметов
    default: true
  elitemobs.unbind.command:
    description: Позволяет игрокам использовать команду unbind, чтобы открыть меню для отмены привязки элитных предметов
    default: true
  elitemobs.unbind.npc:
    description: Позволяет игрокам взаимодействовать с NPC, отменяющим привязку, для отмены привязки элитных предметов
    default: true
  elitemobs.soulbind.bypass:
    description: Позволяет пользователям обходить ограничения привязки к душе. Рекомендуется только для администраторов!
    default: false
  elitequest.*:
    description: Используется для разрешений, связанных с квестами
    default: false
    op: false
```
