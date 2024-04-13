
# 什么是LibsDisguises?

LibsDisguises是一个插件，允许服务器将任何实体伪装成任何其他类型的实体。例如，您可以将玩家伪装成羊，或者将羊伪装成玩家。

LibsDisguises有一个[免费](https://www.spigotmc.org/resources/libs-disguises-free.81/)版本和一个[付费](https://www.spigotmc.org/resources/libs-disguises.32453/)版本。请不要在EliteMobs支持部分寻求LibsDisguises的支持，因为LibsDisguises是由其他开发者创建和维护的。

# 如何将实体伪装成玩家？

若要将自定义boss（或者区域boss，甚至NPC）伪装成玩家，你需要做的只是将下面这行代码添加到boss配置文件中：

```yml
disguise: player:name
```


例如，如果你想将boss伪装成我的玩家的皮肤，配置行会看起来像这样：

```yml
disguise: player:magmaguy
```

# 如何将一个实体伪装成玩家皮肤，但可能不是玩家？

这是将实体伪装成玩家的最灵活方法，它让管理员可以使用在线皮肤甚至创建他们自己的皮肤来伪装boss。但是也更加复杂。

为了简单起见，这里列举的例子假设你将使用在线可用的皮肤。Libsdisguises提供了不同的方式来反序列化皮肤，包括一种在文件夹中放入自己的自定义皮肤的方式。如果你不想使用在线已有的皮肤，请查阅它们的文档。

### 1. 设置伪装

对于伪装，你会想要做这样的事情：

```yaml
disguise: custom:your_unique_skin_name
```

### 2. 生成伪装数据

这是困难的部分。你首先需要创建以下配置条目：

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*在伪装的名字中设置你的唯一皮肤名与在customDisguiseData中的匹配是至关重要的！*

然后，你需要反序列化一个玩家皮肤。对于在线公开可用的皮肤，用LibsDisguises的grabskin命令来做这个是最简单的方式。

比如说，你想要得到[这个皮肤](https://www.minecraftskins.com/skin/18512841/buff-villager/).

要做到这一点，你需要运行命令`/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**注意：你需要提供一个直接指向皮肤文件的链接，而不是指向包含皮肤的页面的链接。请注意链接指向的位置。在[skindex](https://www.minecraftskins.com/)，你可以通过按下每个皮肤右下角的"图像链接"按钮来获取直接链接。**

成功完成后，LibsDisguises将为你提供大约3-6个写着"点击以复制"的数字。如果你点击这些数字，一长串的数字和字母将会出现。你要确保从1开始，按顺序做所有的数字。复制它们，按ctrl-a然后ctrl-c，然后在文件中粘贴它们，使用ctrl-v。完成后，它看起来应该像这样：

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

那就是它！`customDisguiseData`可以与任何反序列化的皮肤代码一起使用，所以如果你在LibsDisguises中找到了生成同样代码的其他方法，你可以在这里使用它。

customDisguiseData的优点在于，它是自包含的，这意味着你不必依赖在线玩家，有特定皮肤的玩家或其它任何东西。EliteMobs使用它来为所有迷宫包中的伪装boss提供皮肤！

# 如何将自定义boss伪装成另一种实体？

若要将自定义boss (或区 域boss) 伪装 为另一种类型的 实体，你需要做 的只是将下面这行 代码添加到boss 配置文件中：

```yml
disguise: ENTITY_TYPE
```

例如，如果你想让你的自定义boss被伪装成一只羊，你需要这样做：

```yml
disguise: SHEEP
```

## 如何将一个自定义boss伪装为一个宝宝实体？

若要将自定义boss (或区域boss) 伪装为宝宝实体，你需要做的只是将以下行添加到boss配置文件中：

```yml
disguise: HOGLIN:baby
```

如你在本例中看到的，我们的boss将会被伪装成一个宝宝Hoglin。

# 如何将一个实体带有自定义伪装？

若要伪装一个自定义boss（或区域boss）为一个自定义的LibsDisguises实体，你需要首先创建LibsDisguises伪装。

一旦完成，正确的语法是：

```yml
disguise: custom:you_custom_disguise_name
```

# 有效的伪装

没有各种实体类型的官方列表，但是在编写这篇文章时（2020年8月3日）这里有一个应该奏效的非官方列表。

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