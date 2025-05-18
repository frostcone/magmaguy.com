```markdown
# Что такое LibsDisguises?

LibsDisguises — это плагин, который позволяет серверам маскировать любую сущность под любой другой тип сущности. Например, вы можете замаскировать игроков под овец или овец под игроков.

Существует [бесплатная](https://www.spigotmc.org/resources/libs-disguises-free.81/) и [премиум](https://www.spigotmc.org/resources/libs-disguises.32453/) версии LibsDisguises. LibsDisguises был создан и поддерживается другими разработчиками, поэтому, пожалуйста, не обращайтесь за поддержкой по нему в разделах поддержки EliteMobs.

# Как замаскировать сущность под игрока?

Чтобы замаскировать пользовательского босса (или регионального босса, или даже NPC!) под игрока, все, что вам нужно сделать, это добавить следующую строку в файл конфигурации босса:

```yml
disguise: player:name
```

Например, если вы хотите замаскировать босса под скин моего игрока, строка конфигурации будет выглядеть так:

```yml
disguise: player:magmaguy
```

# Как замаскировать сущность под скин игрока, но не обязательно под игрока?

Это наиболее гибкий способ маскировки сущности под игрока, поскольку он позволяет администраторам использовать скины из сети или даже создавать свои собственные для маскировки босса. Это также немного сложнее сделать.

Для простоты, примеры, приведенные здесь, предполагают, что вы собираетесь использовать скин, доступный в сети. Libsdisguises предоставляет различные способы десериализации скинов, включая тот, где вы помещаете свой собственный скин в их папку. Проверьте их документацию, если вы не хотите использовать скин, уже доступный в сети.

### 1. Настройка маскировки

Для маскировки вам нужно будет сделать что-то вроде этого:

```yaml
disguise: custom:your_unique_skin_name
```

### 2. Генерация данных маскировки

Это сложная часть. Вы начинаете с создания следующей записи конфигурации:

```yaml
customDisguiseData: player your_unique_skin_name setskin
```

*Крайне важно, чтобы имя, которое вы установили в disguise для your_unique_skin_name, совпадало с именем в customDisguiseData!*

Затем вам нужно будет десериализовать скин игрока. Самый простой способ сделать это для скина, общедоступного в сети, — использовать команду grabskin из LibsDisguises.

Допустим, вы хотите получить [этот скин](https://www.minecraftskins.com/skin/18512841/buff-villager/).

Для этого вам нужно выполнить команду `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Примечание: вам нужно предоставить прямую ссылку на файл скина, а не на страницу, содержащую скин. Обратите внимание, куда указывает ссылка. На [skindex](https://www.minecraftskins.com/) вы можете получить прямую ссылку, нажав кнопку "Image Link", которая находится в правом нижнем углу каждого скина.**

Как только вы успешно это сделаете, LibsDisguises предоставит вам около 3-6 чисел с надписью "Click to copy" (Нажмите, чтобы скопировать). Если вы нажмете на них, появится длинный список чисел и букв. Убедитесь, что вы начинаете с 1 и выполняете все числа по порядку. Чтобы скопировать их, нажмите ctrl-a, затем ctrl-c, а затем вставьте их в файл с помощью ctrl-v. После этого это должно выглядеть примерно так:

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbE5hbWUiIDogIlNlcmlhbGl6YWJsZSIsCiAgInNpZ25hdHVyZVJlcXVpcmVkIiA6IHRydWUsCiAgInRleHR1cmVzIiA6IHsKICAgICJTS0lOIiA6IHsKICAgICAgInVybCIgOiAiaHR0cDovL3RleHR1cmVzLm1pbmVjcmFmdC5uZXQvdGV4dHVyZS8zOWZhNmQxYWU4MDZhNjY4YjQ5ODNiZmFjZmQwZTMzNDkwYTkwZThhNmYxYTYyYTBkZDljNDU3YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANaxGzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

И это все! `customDisguiseData` будет работать с любым десериализованным кодом скина, поэтому, если вы найдете другие способы генерации того же кода в LibsDisguises, вы можете использовать его здесь.

Преимущество customDisguiseData в том, что он самодостаточен, то есть вам не нужно полагаться на онлайн-игроков, игроков с определенными скинами или что-либо еще. EliteMobs использует его для скинирования всех замаскированных боссов в пакетах подземелий!

# Как замаскировать пользовательского босса под другой тип сущности?

Чтобы замаскировать пользовательского босса (или регионального босса) под другой тип сущности, все, что вам нужно сделать, это добавить следующую строку в файл конфигурации босса:

```yml
disguise: ENTITY_TYPE
```

Например, если вы хотите, чтобы ваш пользовательский босс был замаскирован под овцу, вы сделаете так:

```yml
disguise: SHEEP
```
## Как замаскировать пользовательского босса под детеныша сущности?

Чтобы замаскировать пользовательского босса (или регионального босса) под детеныша сущности, все, что вам нужно сделать, это добавить следующую строку в файл конфигурации босса:

```yml
disguise: HOGLIN:baby
```
Как вы можете видеть в этом примере, наш босс будет замаскирован под детеныша Хоглина.

# Как замаскировать сущность с помощью пользовательской маскировки?

Чтобы замаскировать пользовательского босса (или регионального босса) под пользовательскую сущность LibsDisguises, вам сначала нужно создать маскировку LibsDisguises.

После этого правильный синтаксис выглядит так:

```yml
disguise: custom:you_custom_disguise_name
```

# Допустимые маскировки

Официального списка допустимых типов сущностей нет, но вот неофициальный список, который должен работать на момент написания этого (3 августа 2020 г.)

<details>

<summary><b>Развернуть список</b></summary>

```
    ARMOR_STAND
    ARROW
    BAT
    BLAZE
    BOAT
    CAT
    CAVE_SPIDER
    CHICKEN
    COD
    COW
    CREEPER
    DOLPHIN
    DONKEY
    DRAGON_FIREBALL
    DROWNED
    DROPPED_ITEM
    EGG
    ELDER_GUARDIAN
    ENDER_CRYSTAL
    ENDER_DRAGON
    ENDER_PEARL
    ENDER_SIGNAL
    ENDERMAN
    ENDERMITE
    EVOKER
    EVOKER_FANGS
    EXPERIENCE_ORB
    FALLING_BLOCK
    FIREBALL
    FIREWORK
    FISHING_HOOK
    FOX
    GHAST
    GIANT
    GUARDIAN
    HOGLIN
    HORSE
    HUSK
    ILLUSIONER
    IRON_GOLEM
    ITEM_FRAME
    LLAMA
    LLAMA_SPIT
    LEASH_HITCH
    MAGMA_CUBE
    MINECART
    MINECART_CHEST
    MINECART_COMMAND
    MINECART_FURNACE
    MINECART_HOPPER
    MINECART_MOB_SPAWNER
    MINECART_TNT
    MODDED_MISC
    MODDED_LIVING
    MULE
    MUSHROOM_COW
    OCELOT
    PAINTING
    PANDA
    PARROT
    PHANTOM
    PIG
    PIG_ZOMBIE
    PIGLIN
    PILLAGER
    PLAYER
    POLAR_BEAR
    PRIMED_TNT
    PUFFERFISH
    RABBIT
    RAVAGER
    SALMON
    SHEEP
    SHULKER
    SHULKER_BULLET
    SILVERFISH
    SKELETON
    SKELETON_HORSE
    SLIME
    SMALL_FIREBALL
    SNOWBALL
    SNOWMAN
    SPECTRAL_ARROW
    SPLASH_POTION
    SQUID
    STRAY
    STRIDER
    THROWN_EXP_BOTTLE
    TIPPED_ARROW
    TRIDENT
    TRADER_LLAMA
    TROPICAL_FISH
    TURTLE
    VEX
    VILLAGER
    VINDICATOR
    WANDERING_TRADER
    WITCH
    WITHER
    WITHER_SKELETON
    WITHER_SKULL
    WOLF
    ZOGLIN
    ZOMBIE
    ZOMBIE_HORSE
    ZOMBIE_VILLAGER
    ZOMBIFIED_PIGLIN
```

</details>
```