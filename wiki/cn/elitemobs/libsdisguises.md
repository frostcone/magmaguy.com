好的，这是将文本翻译成简体中文并保留 Markdown 格式的结果：

# LibsDisguises 是什么？

LibsDisguises 是一个插件，它允许服务器将任何实体伪装成任何其他类型的实体。例如，你可以将玩家伪装成绵羊，或者将绵羊伪装成玩家。

LibsDisguises 有一个[免费版本](https://www.spigotmc.org/resources/libs-disguises-free.81/)和一个[付费版本](https://www.spigotmc.org/resources/libs-disguises.32453/)。LibsDisguises 由其他开发者创建和维护，因此请不要在 EliteMobs 支持区寻求关于它的帮助。

# 如何将实体伪装成玩家？

要将自定义 Boss（或区域 Boss，甚至是 NPC！）伪装成玩家，你只需要在 Boss 配置文件中添加以下行：

```yml
disguise: player:name
```

例如，如果你想将 Boss 伪装成我的玩家皮肤，配置行将如下所示：

```yml
disguise: player:magmaguy
```

# 如何将实体伪装成玩家皮肤，但不一定是玩家？

这是将实体伪装成玩家的最灵活方式，因为它允许管理员使用在线皮肤甚至创建自己的皮肤来伪装 Boss。它也稍微复杂一些。

为简单起见，此处列出的示例假设你将使用在线可用的皮肤。LibsDisguises 提供了不同的反序列化皮肤方式，包括一种将你自己的自定义皮肤放入其文件夹的方式。如果你不想使用在线已有的皮肤，请查阅其文档。

### 1. 设置伪装

对于伪装，你需要这样做：

```yaml
disguise: custom:your_unique_skin_name
```

### 2. 生成伪装数据

这是棘手的部分。首先创建以下配置条目：

```yaml
customDisguiseData: player your_unique_skin_name setskin
```

*至关重要的是，你在 disguise 中为 your_unique_skin_name 设置的名称必须与 customDisguiseData 中的名称匹配！*

然后你需要反序列化玩家皮肤。对于在线公开可用的皮肤，最简单的方法是使用 LibsDisguises 的 grabskin 命令。

假设你想获取[这个皮肤](https://www.minecraftskins.com/skin/18512841/buff-villager/)。

为此，你需要运行命令 `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**注意：你需要提供皮肤文件的直接链接，而不是包含皮肤的页面链接。注意链接指向哪里。在 [skindex](https://www.minecraftskins.com/) 上，你可以通过按下每个皮肤右下角的“Image Link”按钮来获取直接链接。**

成功执行此操作后，LibsDisguises 将为你提供大约 3-6 个数字，上面写着“Click to copy”（点击复制）。如果你点击这些数字，会出现一长串数字和字母。你需要确保从 1 开始，并按顺序复制所有数字。要复制它们，请按 ctrl-a，然后按 ctrl-c，然后按 ctrl-v 将它们粘贴到文件中。完成后，它应该看起来像这样：

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANaxGzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

就这样！`customDisguiseData` 可以与任何反序列化的皮肤代码一起使用，因此如果你在 LibsDisguises 中找到生成相同代码的其他方法，你也可以在这里使用它。

`customDisguiseData` 的优点在于它是自包含的，这意味着你无需依赖在线玩家、拥有特定皮肤的玩家或任何其他东西。EliteMobs 使用它来为地牢包中的所有伪装 Boss 设置皮肤！

# 如何将自定义 Boss 伪装成另一种类型的实体？

要将自定义 Boss（或区域 Boss）伪装成另一种类型的实体，你只需要在 Boss 配置文件中添加以下行：

```yml
disguise: ENTITY_TYPE
```

例如，如果你想让你的自定义 Boss 伪装成绵羊，你可以这样做：

```yml
disguise: SHEEP
```
## 如何将自定义 Boss 伪装成幼年实体？

要将自定义 Boss（或区域 Boss）伪装成幼年实体，你只需要在 Boss 配置文件中添加以下行：

```yml
disguise: HOGLIN:baby
```
如你在此示例中看到的，我们的 Boss 将被伪装成幼年疣猪兽。

# 如何使用自定义伪装来伪装实体？

要将自定义 Boss（或区域 Boss）伪装成自定义 LibsDisguises 实体，你需要先创建 LibsDisguises 伪装。

完成后，正确的语法是：

```yml
disguise: custom:you_custom_disguise_name
```

# 有效的伪装类型

没有官方的有效实体类型列表，但这里有一个非官方列表，在撰写本文时（2020 年 8 月 3 日）应该有效：

<details>

<summary><b>展开列表</b></summary>

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