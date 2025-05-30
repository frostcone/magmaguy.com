```markdown
# Изменение существующих мини-подземелий

Основываясь на популярных запросах, эта страница описывает основы изменения существующих мини-подземелий. Это не пошаговое руководство, а более широкий взгляд на то, как необходимо модифицировать системы. Вам придется прочитать страницы вики о [Пользовательских боссах]($language$/elitemobs/creating_bosses.md) и [Пользовательских предметах]($language$/elitemobs/creating_items.md), чтобы изменить эти значения.

### Изменение сложности подземелья

Есть три причины, по которым вы можете захотеть изменить сложность подземелий, и они следующие:

### Изменение множителей урона/здоровья боссов

Это самая простая модификация. Если вы считаете, что боссы наносят слишком мало или слишком много урона, или что у них слишком мало или слишком много здоровья, вы можете изменить значения, связанные с этими множителями, в файлах боссов, содержащихся в папке `custombosses`.

Пример значений, которые вы захотите изменить:
```yml
healthMultiplier: 0.5
damageMultiplier: 0.5
```
Подробнее о характеристиках боссов [здесь]($language$/elitemobs/creating_bosses.md&section=healthmultiplier).

Пожалуйста, имейте в виду, что для многих способностей множитель урона не изменяет урон, наносимый самой способностью. Обратитесь к следующему разделу, чтобы узнать, как изменять способности.

### Изменение способностей боссов

Основная сложность EliteMobs заключается в работе с различными способностями, которые могут быть у боссов. Боссы более высокого уровня, как правило, имеют больше и более сложных способностей, а боссы более низкого уровня, как правило, имеют меньше и более простых способностей. Определенные способности, используемые вместе на одном боссе, делают бои легче, а другие способности, собранные вместе, могут сделать бой значительно сложнее.

Пример значений, которые вы захотите изменить:
```yml
powers:
- invulnerability_fire.yml
- invulnerability_arrow.yml
```
Подробнее о способностях боссов [здесь]($language$/elitemobs/creating_bosses.md&section=powers).

Поскольку комбинаций способностей слишком много, чтобы перечислить их здесь, вам придется изучить, как работают способности, и протестировать ваши столкновения, чтобы найти золотую середину для того, что вы считаете ни слишком сложным, ни слишком легким столкновением.

### Изменение уровня боссов

Это самый часто задаваемый вопрос, и хотя это возможно сделать, для этого требуется несколько шагов, чтобы убедиться, что вы адекватно масштабируете своих боссов вверх или вниз.

Пример значений, которые вы захотите изменить:
```yml
level: 21
```
Подробнее об уровнях боссов [здесь]($language$/elitemobs/creating_bosses.md&section=level).

Это требует сочетания того, что сказано о множителях урона / здоровья, поскольку боссам на более низких / высоких уровнях могут потребоваться немного другие множители здоровья и урона, чтобы бой ощущался правильно.

Однако самым важным аспектом, который следует учитывать, являются способности босса. Боссы более низкого и более высокого уровней, как правило, имеют довольно разные наборы способностей в зависимости от того, насколько сложным должен быть бой. Использование одного и того же набора способностей для босса 10-го уровня и босса 200-го уровня обычно приводит к боям, сложность которых ощущается кардинально по-разному. Опять же, единственный способ действительно найти золотую середину — это изучить, как работают способности плагина, и протестировать их.

И последнее, **но не менее важное!** Вероятно, вы захотите подкорректировать пользовательскую добычу. Большинство боссов в EliteMobs имеют пользовательскую добычу, и если вы меняете уровень босса, скорее всего, вы захотите изменить характер добычи, которую он сбрасывает.

Пример значений, которые вы захотите изменить:
```yml
uniqueLootList:
  - filename: mob_drop_boots.yml
    chance: 0.05
```
Подробнее о выпадении добычи [здесь]($language$/elitemobs/loot_tables.md).

### Указание авторства / публикация измененного контента

В рамках EliteMobs вы можете свободно публиковать созданные вами подземелья на соответствующих каналах (Discord). Однако, если ваше творение является лишь модификацией существующего подземелья, ваша публикация может быть удалена, особенно если это лишь небольшая корректировка или если она содержит или получена из премиум-контента (по очевидным причинам).

Вы можете свободно и без ограничений изменять любой контент, который вы приобрели или иным образом загрузили, чтобы адаптировать его к потребностям вашего сервера для использования в вашей собственной сети, однако по очевидным причинам это не дает вам прав на распространение.

Мы оставляем за собой право удалять публикации сообщества по любой причине и в любое время, хотя нам бы очень не хотелось этого делать.

### Дополнительная информация

Если вы считаете, что эту страницу следует дополнить, оставьте предложение в Discord, указав, что именно следует добавить. Дополнительная информация о различных упомянутых здесь системах представлена на других страницах вики.
```