[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是 LibsDisguises？

LibsDisguises 是一个插件，允许服务器将任何实体伪装成任何其他类型的实体。例如，您可以将玩家伪装成绵羊，或者将绵羊伪装成玩家。

LibsDisguises 有一个[免费版](https://www.spigotmc.org/resources/libs-disguises-free.81/) 和一个[高级版](https://www.spigotmc.org/resources/libs-disguises.32453/)。LibsDisguises 由其他开发人员创建和维护，因此请不要在 EliteMobs 支持部分中询问有关它的支持。

# 如何将实体伪装成玩家？

要将自定义首领（或区域首领，甚至 NPC！）伪装成玩家，您只需在首领配置文件中添加以下行即可：

```yml
disguise: player:name
```

例如，如果您想将首领伪装成我的玩家皮肤，则配置行应如下所示：

```yml
disguise: player:magmaguy
```

# 如何将实体伪装成玩家皮肤，但不一定是玩家？

这是将实体伪装成玩家的最灵活的方法，因为它允许管理员使用在线皮肤甚至创建自己的皮肤来伪装首领。它也稍微复杂一点。

为了简单起见，此处列出的示例假设您将使用在线可用的皮肤。Libsdisguises 提供了反序列化皮肤的不同方法，包括一种将您自己的自定义皮肤放入其文件夹中的方法。如果您不想使用在线已有的皮肤，请查看它们的文档。

### 1. 设置伪装

对于伪装，您需要执行类似以下操作：

```yaml
disguise: custom:you_unique_skin_name
```

### 2. 生成伪装数据

这是棘手的部分。首先，创建以下配置条目：

```yaml
customDisguiseData: player your_unique_skin_name setskin
```

*至关重要的是，您在伪装中为 your_unique_skin_name 设置的名称与 customDisguiseData 中的名称相匹配！*

然后，您需要反序列化玩家皮肤。要使用在线公开可用的皮肤执行此操作，最简单的方法是使用 LibsDisguises 中的 grabskin 命令。

假设您想获得[此皮肤](https://www.minecraftskins.com/skin/18512841/buff-villager/)。

为此，您需要运行命令 `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**注意：您需要提供指向皮肤文件的直接链接，而不是指向包含皮肤的页面。请注意链接指向的位置。在 [skindex](https://www.minecraftskins.com/) 中，您可以通过按位于每个皮肤右下角的“图像链接”按钮来获取直接链接。**

成功完成后，LibsDisguises 将为您提供约 3-6 个数字，上面显示“单击以复制”。如果您单击这些数字，将会出现一长串数字和字母。您需要确保从 1 开始，然后按顺序执行所有数字。要复制它们，请按 ctrl-a，然后按 ctrl-c，然后使用 ctrl-v 将它们粘贴到文件中。完成后，它应如下所示：

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

就这样！`customDisguiseData` 将适用于任何反序列化的皮肤代码，因此如果您找到在 LibsDisguises 中生成相同代码的其他方法，您可以在此处使用它。

`customDisguiseData` 的优点在于它是独立的，这意味着您不必依赖在线玩家、具有特定皮肤的玩家或任何其他内容。EliteMobs 使用它来为地牢包中的所有伪装首领设置皮肤！

# 如何将自定义首领伪装成另一种类型的实体？

要将自定义首领（或区域首领）伪装成另一种类型的实体，您只需在首领配置文件中添加以下行即可：

```yml
disguise: ENTITY_TYPE
```

例如，如果您希望您的自定义首领伪装成绵羊，您可以执行以下操作：

```yml
disguise: SHEEP
```
## 如何将自定义首领伪装成幼体实体？

要将自定义首领（或区域首领）伪装成幼体实体，您只需在首领配置文件中添加以下行即可：

```yml
disguise: HOGLIN:baby
```
如您在此示例中看到的，我们的首领将被伪装成幼年疣猪兽。

# 如何使用自定义伪装伪装实体？

要将自定义首领（或区域首领）伪装成自定义 LibsDisguises 实体，您需要首先创建 LibsDisguises 伪装。

完成后，正确的语法是：

```yml
disguise: custom:your_custom_disguise_name
```

# 有效的伪装

没有官方的有效实体类型列表，但以下是一个在撰写本文时（2020 年 8 月 3 日）应该可以工作的非官方列表

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
