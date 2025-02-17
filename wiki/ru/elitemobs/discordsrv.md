EliteMobs использует DiscordSRV для трансляции сообщений с приоритетом уровня 3. Вы можете прочитать о системе
приоритетов объявлений [здесь]($language$/elitemobs/announcement_priority_system.md).

По сути, это означает, что некоторые особенные Пользовательские Боссы могут отправлять сообщения в Discord, которые
выглядят следующим образом:

![пример сообщения в discord](https://i.imgur.com/sIndft0.png)

Цель состоит в том, чтобы создать отдельную комнату объявлений EliteMobs, куда игроки могут заглянуть, чтобы узнать,
есть ли в данный момент живые интересные Мировые Боссы, которых они могут пойти убить и показать в таблице лидеров
убийств.

# Настройка

## Настройка DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) — это другой плагин, разработанный не
мной. [Вы можете найти их подробное руководство по настройке здесь](https://github.com/discordsrv/discordsrv/wiki/Installation).
Если у вас возникнут трудности с его
настройкой, [их комната поддержки находится здесь](https://discord.discordsrv.com/). Я не могу предоставить поддержку
для этого плагина, поэтому, пожалуйста, обращайтесь к ним по этой части установки.

## Настройка конфигурации EliteMobs DiscordSRV

После того, как вы правильно настроили DiscordSRV (*и вы должны протестировать, действительно ли он работает, прежде чем
переходить к этому шагу*), **конфигурация EliteMobs имеет только 1 шаг**.

Перейдите к файлу конфигурации `DiscordSRV.yml` в папке конфигурации EliteMobs, и вы найдете параметр конфигурации под названием `announcementRoomName`.

Для этого сообщения можно использовать три значения. Я рекомендую #1.

1. [Рекомендуется] Имя комнаты, как вы настроили его в файле конфигурации DiscordSRV. Не имеет значения, как вы назвали
   комнату, важно только то, чтобы вы использовали правильное имя. Вот пример комнаты, которую я настроил для событий
   EliteMobs:
   ![пример использования имени](https://i.imgur.com/a2kMWXv.png)
   В моем случае параметр должен выглядеть так: `announcementRoomName: EMEvents`.

2. Идентификатор комнаты, как вы настроили его в файле конфигурации DiscordSRV. Вот пример комнаты. *Обратите внимание,
   что каждая комната уникальна. Я показываю картинки только в качестве примера, не пытайтесь скопировать номера ID. Это
   не сработает. В вашей настройке должен быть уникальный набор номеров на основе идентификатора вашей комнаты в
   Discord.*
   ![пример использования ID](https://i.imgur.com/CGElkdh.png)
3. [Плохо] Название вашей комнаты, как оно отображается в Discord. Нет гарантии, что это будет работать правильно из-за
   ряда факторов. Имейте в виду, что ваша комната Discord должна быть настроена в файлах конфигурации DiscordSRV — то,
   что вы можете указать название комнаты в этом файле конфигурации, не означает, что вы можете пропустить ее настройку
   в DiscordSRV.

## Тестирование

Вы можете использовать команду `/em discord [сообщение]`, чтобы проверить, работает ли ваша конфигурация. Если ваше
сообщение отображается, то все готово!
