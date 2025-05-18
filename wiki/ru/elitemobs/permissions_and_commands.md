```russian
# Команды пользователя

*Примечание: Все разрешения игрока по умолчанию установлены как true. Это означает, что они уже настроены.*

*Если вы не хотите, чтобы игроки имели доступ к определенной функции через разрешения, вам придется запретить игроку это разрешение!*

| Команда | Описание |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Основная команда, объединяет всю информацию об игроке в плагине в удобное меню. *Примечание:* все остальные пользовательские команды находятся в этой основной команде. |
| `/adventurersguild` / `/ag`     |В рекомендуемой настройке телепортирует игрока в мир гильдии искателей приключений, где он взаимодействует с различными NPC EliteMobs.|
| `/em shareItem`     |Привязывает предмет в чате, чтобы другие игроки могли видеть его характеристики.|
| `/em help`     |Перечисляет все команды. Остальные пользовательские команды обычно заменяются использованием NPC или интерфейса `/em`! Вы можете навести курсор на команды, чтобы получить описание того, что они делают. |
| `/em money check`     |Отображает деньги игрока.|
| `/em pay <username> <amount>`     |Позволяет игрокам платить друг другу. Транзакции облагаются налогом на настраиваемую сумму.|
| `/em spawntp`     |Телепортирует игрока на спаун сервера.|

## Команды NPC

Эти команды полезны только в том случае, если у вас не установлен Хаб Гильдии Искателей Приключений с NPC.

Рекомендуется установить их, чтобы выполнять все эти команды через NPC, вместо того чтобы игрокам приходилось запоминать, как работают команды.

| Команда | Описание |
|---------|:-----------:|
| `/em rank`     |     Открывает меню рангов или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em shop procedural <player>`     |     Открывает магазин или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em shop sell <player>`     |     Открывает меню продажи магазина или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em shop custom <player>`     |     Открывает пользовательский магазин или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em repair`     |     Открывает меню ремонта или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em enchant`     |     Открывает меню зачарования или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em scrap`     |     Открывает меню утилизации или телепортирует игроков в хаб Гильдии Искателей Приключений.     |
| `/em unbind`     |     Открывает меню отвязки или телепортирует игроков в хаб Гильдии Искателей Приключений.     |

## Внутренние команды пользователя

**Эти команды предназначены для выполнения из внутриигровых меню, таких как квесты из меню квестов. Если нет инструкций о том, как получить ID, это означает, что получить этот ID невозможно, кроме как выполнив команду из внутриигрового меню.** Для удобства они были разделены на идентифицируемые и неидентифицируемые категории.

### Идентифицируемые

| Команда | Описание |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Телепортирует игрока в подземелье.|
*Примечание: эта команда предназначена для выполнения из меню `/em`, так как игрокам невозможно угадать ID подземелий. ID подземелий совпадают с именами файлов .yml в `~/plugins/EliteMobs/dungeonpackages/`. <br/>Вы можете увидеть ID в консоли при использовании команды `/em` и выбрать телепорт со страницы Телепортов.*

### Неидентифицируемые

| Команда | Описание |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Принять квест.     |
| `/em quest track <questID>`     |     Отслеживать квест.     |
| `/em quest complete <questID>`     |     Завершить квест.     |
| `/em quest leave <questID>`     |     Покинуть квест.     |
| `/em track boss <uuid>`     |     Отслеживать пользовательского босса. Примечание: эта команда предназначена для выполнения из меню `/em`, так как игрокам невозможно угадать UUID боссов.     |

# Команды администратора

<div>

**> > > `elitemobs.*` - Разрешение администратора для EliteMobs для полного доступа! < < <**

</div>

| Команда | Описание |
|---------|:-----------:|
| `/em setup`     |     Открывает главное меню настройки.     |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`     |     Спавнит Элиту на основе типа сущности.     |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Спавнит Элиту на основе типа сущности и местоположения.     |
| `/em spawn boss <fileName>`     |     Спавнит Пользовательского Босса из файла конфигурации.     |
| `/em spawn boss <fileName> <level>`     |     Спавнит Пользовательского Босса из файла конфигурации и переопределяет уровень.     |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`     |     Спавнит Пользовательского Босса из файла конфигурации в указанном месте.     |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`     |     Спавнит Пользовательского Босса из файла конфигурации в указанном месте и переопределяет уровень.     |
| `/em place boss <fileName>`     |     Добавляет место спавна для Регионального Босса.     |
| `/em place treasureChest <fileName>`     |     Добавляет сундук с сокровищами в месте, где стоит игрок.     |
| `/em remove`     |     Навсегда удаляет сущность Элитного Моба. Работает для Элитных/Региональных/Супер/NPC. Выполните еще раз, чтобы выйти из режима удаления.     |
| `/em event <eventName>`     |     Запускает пользовательское событие по времени.     |
| `/em place npc <npcFileName>`     |     Спавнит NPC.     |
| `/em stats`     |     Получает статистику для текущих активных сущностей EliteMobs и игроков.     |
| `/em loot menu`     |     Открывает меню, где вы можете получить любой Пользовательский Лут.     |
| `/em loot give <player> <filename>`     |     Выдать конкретный пользовательский лут игроку.     |
| `/em loot simulate <level>`     |     Симулирует выпадение лута из Элитного Моба заданного уровня.     |
| `/em loot simulate <level> <times>`     |     Симулирует выпадение лута из Элитного Моба заданного уровня заданное количество раз.     |
| `/em version`     |     Получает версию плагина.     |
| `/em reload`     |     Перезагружает плагин. Работает почти всегда.     |
| `/em kill `     |     Убивает всех агрессивных Элитных Мобов.     |
| `/em kill <radius>`     |     Убивает всех агрессивных Элитных Мобов в радиусе.     |
| `/em kill type <entityType>`     |     Убивает всех элитных мобов определенного типа.     |
| `/em kill type <entityType> <radius>`     |     Убивает всех элитных мобов определенного типа в радиусе.     |
| `/em loot debug <level>`     |     Получает отладочные предметы для целей тестирования.     |
| `/em money add <username> <amount>`     |     Добавляет заданное количество денег игроку.     |
| `/em money addall <amount>`     |     Добавляет заданное количество денег всем онлайн игрокам.     |
| `/em money remove <username> <amount>`     |     Удаляет заданное количество денег у игрока.     |
| `/em money set <username> <amount>`     |     Устанавливает общее количество денег у игрока.     |
| `/em rank <player> <prestigeLevel> <guildLevel>`     |     Устанавливает ранг гильдии игрока.     |
| `/em discord`     |     Получает ссылку на сервер поддержки в Discord.     |
| `/em discord <message>`     |     Отправляет отладочное сообщение в Discord, если DiscordSRV настроен правильно.     |
| `/em unbind force`     |     Принудительно отвязывает удерживаемый предмет с привязкой к душе.     |
| `/em money check <player>`     |     Проверяет количество денег у конкретного игрока.     |
| `/em fireball`     |     Спавнит огненный шар для тестирования регенерации после взрыва элиты.     |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`     |     См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`     |     См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`     |     См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`     |     См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks cancel`     |     См. [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em protection bypass`     |     Переключает защиту подземелий. Также работает для Гильдии Искателей Приключений.     |

## Внутренние команды администратора

Эти команды предназначены для выполнения при взаимодействии с меню или интерактивным текстом в чате, а не вручную.

| Команда | Описание |
|---------|:-----------:|
| `/em setup done`     |     Прекращает показ сообщений при входе администратора.     |
| `/em setup toggle <dungeonConfig>`     |   Позволяет переключать установку указанного контента EliteMobs.    |

# Сырые разрешения:
```
permissions:
  elitemobs.*:
    description: Дает доступ ко всем командам elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: Позволяет игрокам выполнять /elitemobs stats
    default: op
  elitemobs.version:
    description: Позволяет игрокам выполнять /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Позволяет игрокам взаимодействовать с NPC для динамических магазинов
    default: true
  elitemobs.shop.command:
    description: Позволяет игрокам открывать меню динамического магазина через команды
    default: true
  elitemobs.customshop.npc:
    description: Позволяет игрокам взаимодействовать с NPC для динамических магазинов
    default: true
  elitemobs.customshop.command:
    description: Позволяет игрокам открывать меню динамического магазина через команды
    default: true
  elitemobs.money.pay:
    description: Позволяет игрокам выполнять /elitemobs pay [username] [amount]
    default: true
  elitemobs.money.check:
    description: Позволяет игрокам выполнять /elitemobs wallet
    default: true
  elitemobs.money.check.others:
    description: Позволяет игрокам выполнять /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Позволяет игрокам запускать все события
    default: true
  elitemobs.checktier.others:
    description: Позволяет игрокам выполнять /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Позволяет игрокам выполнять /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Позволяет игрокам получать уведомления об обновлениях плагина
    default: op
  elitemobs.adventurersguild.teleport:
    description: Позволяет игрокам телепортироваться в хаб гильдии искателей приключений с помощью /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Позволяет игрокам открывать меню рангов с помощью команды /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Позволяет игрокам открывать меню рангов через /em rank
    default: true
  elitemobs.rank.npc:
    description: Позволяет игрокам получать доступ к меню /em rank через NPC
    default: true
  elitemobs.quest.command:
    description: Позволяет игрокам брать квесты через команду
    default: true
  elitemobs.quest.npc:
    description: Позволяет игрокам брать квесты через NPC EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Позволяет игрокам телепортироваться в место, установленное elitemobs
    default: true
  elitemobs.spawntp:
    description: Позволяет игрокам телепортироваться на стандартное место спавна сервера.
    default: true
  elitemobs.back.npc:
    description: Позволяет игрокам взаимодействовать с NPC, чтобы вернуться в предыдущее местоположение.
    default: true
  elitemobs.shareitem:
    description: Делится удерживаемым Элитным Предметом в чате.
    default: true
  elitemobs.scrap.npc:
    description: Позволяет игрокам утилизировать предметы у NPC
    default: true
  elitemobs.scrap.command:
    description: Позволяет игрокам утилизировать предметы с помощью команды
    default: true
  elitemobs.smelt.command:
    description: Позволяет игрокам переплавлять предметы с помощью команды
    default: true
  elitemobs.smelt.npc:
    description: Позволяет игрокам переплавлять предметы с помощью NPC
    default: true
  elitemobs.repair.command:
    description: Позволяет игрокам использовать команду repair для открытия меню ремонта элитных предметов
    default: true
  elitemobs.repair.npc:
    description: Позволяет игрокам взаимодействовать с NPC для ремонта предметов
    default: true
  elitemobs.refiner.command:
    description: Позволяет игрокам использовать команду refiner для открытия меню улучшения Элитного Лома
    default: true
  elitemobs.refiner.npc:
    description: Позволяет игрокам взаимодействовать с NPC для улучшения Элитного Лома
    default: true
  elitemobs.enhancer.command:
    description: Позволяет игрокам использовать команду enhancer для открытия меню улучшения Элитных Предметов
    default: true
  elitemobs.enhancer.npc:
    description: Позволяет игрокам взаимодействовать с NPC для улучшения Элитных Предметов
    default: true
  elitemobs.unbind.command:
    description: Позволяет игрокам использовать команду unbind для открытия меню отвязки Элитных Предметов
    default: true
  elitemobs.unbind.npc:
    description: Позволяет игрокам взаимодействовать с NPC-отвязчиком для отвязки Элитных Предметов
    default: true
  elitemobs.soulbind.bypass:
    description: Позволяет пользователям обходить ограничения привязки к душе. Рекомендуется только для администраторов!
    default: false
  elitequest.*:
    description: Используется для разрешений, связанных с квестами
    default: false
    op: false
```