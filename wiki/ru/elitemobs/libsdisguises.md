# Что такое LibsDisguises?

LibsDisguises - это плагин, который позволяет серверам маскировать любую сущность под любой другой тип сущности. Например, вы можете замаскировать игроков под овец или наоборот, овец под игроков.

Существует [бесплатная](https://www.spigotmc.org/resources/libs-disguises-free.81/) и [премиум](https://www.spigotmc.org/resources/libs-disguises.32453/) версия LibsDisguises. LibsDisguises был создан и поддерживается другими разработчиками, поэтому, пожалуйста, не обращайтесь за помощью с ним в разделах поддержки EliteMobs.

# Как замаскировать сущность под игрока?

Чтобы замаскировать кастомного босса (или регионального босса, или даже NPC!) под игрока, вам нужно добавить в файл конфигурации босса следующую строку:

```yml
disguise: player:name
```

Например, если вы хотите замаскировать босса под скин моего игрока, строка конфигурации будет выглядеть так:

```yml
disguise: player:magmaguy
```

# Как замаскировать сущность под скин игрока, но не обязательно как игрока?

Это самый гибкий способ маскировки сущности под игрока, так как позволяет администраторам использовать онлайн-скины или даже создавать свои собственные, чтобы замаскировать босса. Это также немного сложнее сделать.

Для простоты примеры, приведенные здесь, предполагают, что вы будете использовать скин, доступный онлайн. Libsdisguises  предоставляет различные способы десериализации скинов, в том числе один, где вы помещаете свою собственную кастомную skin в их папку. Проверьте их документацию, если вы не хотите использовать уже доступную skin.

### 1. Настройка маскировки

Для маскировки вам нужно сделать что-то вроде этого:

```yaml
disguise: custom:your_unique_skin_name
```

### 2. Генерация данных маскировки

Это сложная часть. Вы начинаете с создания следующей записи в конфигурации:

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*Важно, чтобы имя, которое вы задаете в  disguise  для  your_unique_skin_name,  совпадало с тем, что указано в  customDisguiseData!*

Затем вам нужно будет десериализовать скин игрока. Самый простой способ сделать это для скина, публично доступного онлайн, - использовать команду grabskin из LibsDisguises.

Допустим, вы хотите получить [эту skin](https://www.minecraftskins.com/skin/18512841/buff-villager/).

Чтобы сделать это, вам нужно выполнить команду `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Примечание:  вам нужно предоставить прямую ссылку на файл скина, а не на страницу, содержащую скин.  Обратите внимание, куда ведет ссылка.  В  [skindex](https://www.minecraftskins.com/),  вы можете получить прямую ссылку, нажав  кнопку  "Image Link",  которая  присутствует  в  правом  нижнем  углу  каждой  skin.**

После успешного выполнения этой команды LibsDisguises  предоставит вам примерно 3-6 чисел с надписью "Click to copy".  Если вы щелкните по ним, появится длинный список чисел и букв.  Вам нужно убедиться, что вы начинаете с 1 и делаете все числа по порядку.  Чтобы скопировать их, нажмите Ctrl+A, затем Ctrl+C, а затем вставьте их в файл, нажав Ctrl+V.  После завершения это должно выглядеть примерно так:

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02YdXD

