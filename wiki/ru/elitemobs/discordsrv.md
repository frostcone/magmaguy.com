EliteMobs использует DiscordSRV для включения трансляции сообщений с приоритетом уровня 3. Вы можете прочитать о Системе Приоритета Объявлений [здесь]($language$/elitemobs/announcement_priority_system.md).

По сути, это означает, что некоторые особенные Пользовательские Боссы могут отправлять сообщения в Discord таким образом:

![Пример сообщения в Discord](https://i.imgur.com/sIndft0.png)

Цель состоит в том, чтобы создать выделенную комнату объявлений EliteMobs, которую игроки могут просматривать, чтобы узнать, есть ли в данный момент живые интересные Мировые Боссы, которых они могут пойти убить и похвастаться этим в таблице лидеров убийств.

# Настройка всего

## Настройка DiscordSRV

[DiscordSRV](https://www.spigotmc.org/resources/discordsrv.18494/) — это другой плагин, разработанный не мной. [Вы можете найти их подробное руководство по установке здесь](https://github.com/discordsrv/discordsrv/wiki/Installation). Если у вас возникли трудности с настройкой, [их комната поддержки находится здесь](https://discord.discordsrv.com/). Я не могу предоставить поддержку по этому плагину, поэтому, пожалуйста, обращайтесь к ним по этой части установки.

## Настройка конфигурации EliteMobs DiscordSRV

После того как вы правильно настроили DiscordSRV (*и вам нужно проверить, действительно ли он работает, прежде чем переходить к этому шагу*), **конфигурация EliteMobs состоит всего из 1 шага**.

Перейдите к файлу конфигурации `DiscordSRV.yml` в папке конфигурации EliteMobs, и вы найдете опцию конфигурации под названием `announcementRoomName`.

Для этого сообщения можно использовать три значения. Я рекомендую #1.

1.  [Рекомендуется] Название комнаты, как вы настроили его в файле конфигурации DiscordSRV. Неважно, как вы назвали комнату, важно только, чтобы вы использовали правильное имя. Вот пример комнаты, которую я настроил для выделенных событий EliteMobs:
    ![Пример использования имени](https://i.imgur.com/a2kMWXv.png)
    В моем случае опция должна выглядеть так: `announcementRoomName: EMEvents`.

2.  ID комнаты, как вы настроили его в файле конфигурации DiscordSRV. Вот пример комнаты. *Обратите внимание, что каждая комната уникальна. Я показываю изображения только в качестве примера, не пытайтесь скопировать номера ID. Это не сработает. Ваша настройка должна иметь уникальный набор номеров, основанный на ID вашей комнаты Discord.*
    ![Пример использования ID](https://i.imgur.com/CGElkdh.png)
3.  [Плохо] Название вашей комнаты, как оно отображается в Discord. Это не гарантирует правильную работу из-за ряда факторов. Имейте в виду, что ваша комната Discord должна быть настроена в файлах конфигурации DiscordSRV — то, что вы можете ввести название комнаты в этот файл конфигурации, не означает, что вы можете пропустить настройку в DiscordSRV.

## Тестирование
Вы можете использовать команду `/em discord [сообщение]`, чтобы проверить, работает ли ваша конфигурация. Если ваше сообщение появилось, вы закончили!