# Команды EliteMobs

*Примечание: Все разрешения игроков по умолчанию установлены в true. Это означает, что они уже настроены.*

*Если вы не хотите, чтобы у игроков был доступ к определенной функции с помощью разрешений, вам нужно будет запретить этому игроку разрешение!*

| Команда | Описание |
|---------|:-----------:|
| `/elitemobs` / `/em` | Основная команда, которая сводит всю информацию об игроке в плагине в легкодоступное меню. *Примечание:* все остальные команды пользователей находятся в этом главном меню. `/em menu` - это также допустимая команда для этого |
| `/adventurersguild` / `/ag`     |В рекомендуемой настройке телепортирует игрока в мир Гильдии Авантюристов, где он взаимодействует с различными NPC EliteMobs.|
| `/shareitem`     |Создает ссылку на предмет в чате, чтобы другие игроки могли увидеть его характеристики.|
| `/em help`     |Перечисляет все команды. Остальные команды пользователей обычно заменяются использованием NPC или интерфейса `/em`!|
| `/em wallet`     |Отображает деньги игрока.|
| `/em pay <username> <amount>`     |Позволяет игрокам платить друг другу. Транзакции облагаются налогом в настраиваемой сумме.|
| `/em updateitem`     |Обновляет описание предмета, если оно было не синхронизировано. Эта команда предназначена для отладки и не требуется в нормальной игре.|
| `/em spawntp`     |Телепортирует игрока к точке спавна сервера.|

## Команды NPC

Эти команды полезны только в том случае, если у вас не установлен мир центра Гильдии Авантюристов с NPC. 

Рекомендуется установить их, чтобы выполнять все эти команды через NPC, вместо того чтобы заставлять игроков запоминать, как работают команды.

| Команда | Описание |
|---------|:-----------:|
| `/em rank`     |     Открывает меню рангов или телепортирует игроков в мир центра Гильдии Авантюристов.     |
| `/em shop`     |     Доступ к магазину или телепортация в центр Гильдии Авантюристов.     |
| `/em customshop`     |     Доступ к  Custom Shop  или телепортация в центр Гильдии Авантюристов.     |
| `/em repair`     |     Доступ к меню ремонта или телепортация в центр Гильдии Авантюристов.     |
| `/em enchant`     |     Доступ к меню зачарования или телепортация в центр Гильдии Авантюристов.     |
| `/em scrap`     |     Доступ к меню утилизации или телепортация в центр Гильдии Авантюристов.     |
| `/em unbind`     |     Доступ к меню отвязки или телепортация в центр Гильдии Авантюристов.     |

## Внутренние команды пользователей

**Эти команды предназначены для выполнения из меню в игре, таких как квесты из меню квестов. Если не указаны инструкции о том, как получить ID, то это означает, что получить этот ID можно только с помощью команды из меню в игре.** Для удобства они были разделены на категории идентифицируемых и неидентифицируемых.

### Identifiable

| Команда | Описание |
|---------|:-----------:|
|`/em dungeontp <dungeonid>`         |Телепортирует игрока в подземелье.|
*Примечание: эту команду нужно запускать из меню `/em`, так как игрокам невозможно угадать ID подземелья. ID подземелий такие же, как имена файлов .yml в папке `~/plugins/EliteMobs/dungeonpackages/`. <br/>Вы можете увидеть ID в консоли при использовании команды `/em`  и выбрать телепортацию на странице Teleports.*

### Unidentifiable

| Команда | Описание |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Принимает квест.     |
| `/em quest track <questID>`     |     Отслеживает квест.     |
| `/em quest complete <questID>`     |     Завершает квест.     |
| `/em quest leave <questID>`     |     Покидает квест.     |
| `/em trackcustomboss <uuid>`     |     Отслеживает  Custom Boss.  Примечание:  эту  команду  нужно  запускать  из  меню  `/em`,  так  как  игрокам  невозможно  угадать  UUID  босса.     |

# Команды администратора

<div>

**> > > `elitemobs.*` - Разрешение администратора для EliteMobs с полным доступом! < < <**

</div>

| Команда | Описание |
|---------|:-----------:|
| `/em setup`     |     Открывает главное меню настроек.     |
| `/em setup area <areaName>`     |     Защищает область с помощью WorldGuard, используется для Mini-Dungeons и мира центра Гильдии Авантюристов.  Примечание: Вам не нужно запускать эту команду вручную при настройке с использованием рекомендованного метода настройки.     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     Создает Elite  на основе типа существа.     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Создает Elite  на основе типа существа и местоположения.     |
| `/em spawncustom <fileName>`     |     Создает  Custom Boss  из файла конфигурации.     |
| `/em spawncustomlevel <fileName> <level>`     |     Создает  Custom Boss  из файла конфигурации и переопределяет уровень.     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     Создает  Custom Boss  из файла конфигурации в определенном месте.     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     Создает  Custom Boss  из файла конфигурации в определенном месте и переопределяет уровень.     |
| `/em spawnsuper <EntityType>`     |     Создает  Super Mob  на основе типа существа.     |
| `/em addSpawnLocation <fileName>`     |     Добавляет точку появления к региональному боссу.     |
| `/em addTreasureChest <fileName>`     |     Добавляет сундук с сокровищами в место, где стоит игрок.     |
| `/em setLeashRadius <fileName> <radius>`     |     Добавляет точку появления к региональному боссу.     |
| `/em remove`     |     Окончательно удаляет сущность  Elite Mob.  Работает с Elite/Regional/Super/NPCs.  Запустите снова, чтобы выйти из режима удаления.     |
| `/em debug <name>`     |     Окончательно удаляет сущность  Elite Mob.  Elite/Regional/Super/NPCs  все работают.  Запустите снова, чтобы выйти из режима удаления.     |
| `/em debug <name>`     |     Открывает экран отладки для игроков или региональных боссов.     |
| `/em event <eventName>`     |     Запускает  Custom  timed  event.     |
| `/em spawnnpc <npcFileName>`     |     Создает NPC.     |
| `/em stats`     |     Получает статистику для активных сущностей и игроков EliteMobs.     |
| `/em getloot`     |     Открывает меню, где можно получить любой  Custom Loot.     |
| `/em getloot <filename>`     |     Получить  Custom Loot.     |
| `/em giveloot <filename> <player>`     |     Выдать  Custom Loot  игроку.     |
| `/em simloot <level>`     |     Имитация  дропа  из  Elite Mob  из  установленного  типа.     |
| `/em simloot <level> <times>`     |     Имитация  дропа  из  Elite Mob  из  установленного  типа  несколько  раз.     |
| `/em version`     |     Получить  версию  плагина.     |
| `/em reload`     |     Перезагрузить  плагин.  Работает  почти  всегда.     |
| `/em killaggressive`     |     Убивает  всех  агрессивных  Elite Mobs.     |
| `/em killaggressive <radius>`     |     Убивает  всех  агрессивных  Elite Mobs  в  радиусе.     |
| `/em killpassive`     |     Убивает  всех  пассивных  Super Mobs.     |
| `/em killpassive <radius>`     |     Убивает  всех  пассивных  Super Mobs  в  радиусе.     |
| `/em killtype <entityType>`     |     Убивает  всех  элит  определенного  типа.     |
| `/em killtype <entityType> <radius>`     |     Убивает  всех  элит  определенного  типа  в  радиусе.     |
| `/em gettier <tier>`     |     Получает  отладочные  предметы  для  тестирования.     |
| `/em money add <username> <amount>`     |     Добавляет  определенную  сумму  денег  игроку.     |
| `/em money addall <amount>`     |     Добавляет  определенную  сумму  денег  всем  игрокам  в  сети.     |
| `/em money remove <username> <amount>`     |     Удаляет  определенную  сумму  денег  у  игрока.     |
| `/em money set <username> <amount>`     |     Устанавливает  общую  сумму  валюты  игрока.     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     Устанавливает  ранг  гильдии  игрока.     |
| `/em discord`     |     Получить  ссылку  на  сервер  Discord  поддержки.     |
| `/em discord <message>`     |     Отправляет  отладочное  сообщение  в  Discord,  если  DiscordSRV  настроен  правильно.     |
| `/em forceunbind`     |     Отвязывает  soulbound  предмет,  который  игрок  держит  в  руках.     |
| `/em relativecoords <minidungeon>`     |     Получить  относительные  координаты  установленного  подземелья.     |
| `/em wallet <player>`     |     Проверяет  валюту  указанного  игрока.     |
| `/em fireball`     |     Создает  огненный  шар  для  тестирования  регенерации  взрыва  Elite.     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     См.  [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     См.  [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     См.  [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     См.  [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em cancelblocks`     |     См.  [Переходные блоки]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em debugmode`     |     Включает  режим  отладки,  отображая  появление  и  исчезновение  мобов  в  консоли  и  позволяя  отслеживание.     |

## Внутренние команды администратора

Эти команды предназначены для запуска при взаимодействии с меню или интерактивным текстом в чате, а не вручную.

| Команда | Описание |
|---------|:-----------:|
| `/em setup done`     |     Прекращает  отображение  сообщений  при  входе  администратора.     |
| `/em setup minidungeon <minidungeonName>`     |     Устанавливает  Mini-Dungeon.     |
| `/em setup minidungeon <minidungeonName>`     |     Удаляет  Mini-Dungeon.     |
| `/em trace <uuid>`     |     Отслеживает  появление/исчезновение  Custom Boss.  Требуется  включенный  режим  отладки.     |
| `/em debugtp <uuid>`     |     Телепортируется  в  местоположение  отслеживаемого  Custom Boss.  Требуется  включенный  режим  отладки.     |
| `/em generateresourcepack`     |     Создает  пакет  ресурсов.  Проверьте  запись  в  вики  о  Custom Models  о  том,  как  использовать  это.     |
| `/em updateresourcepack`     |     Обновляет  SHA1  пакета  ресурсов  в  конфигурации  server.properties.  Проверьте  запись  в  вики  о  Custom Models  о  том,  как  использовать  это.     |

# Грубые разрешения:
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```

