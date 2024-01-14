# What's LibsDisguises?

LibsDisguises is a plugin that allows servers to disguise any entity as any other type of entity. As an example, you can disguise players as sheep, or disguise sheep as players.

There is a [free](https://www.spigotmc.org/resources/libs-disguises-free.81/) and a [premium](https://www.spigotmc.org/resources/libs-disguises.32453/) version to LibsDisguises. LibsDisguises was created and is maintained by other developers, so please don't ask for support for it in EliteMobs support sections.

# How can I disguise an entity as a player?

To disguise a custom boss (or a regional boss, or even an NPC!) as a player, all you need to do is add the following line to the boss config file:

```yml
disguise: player:name
```

As an example, if you want to disguise a boss as my player's skin, the configuration line would look like:

```yml
disguise: player:magmaguy
```

# How can I disguise an entity as a player skin, but not necessarily a player?

This is the most flexible way of disguising an entity as a player, as it allows admins to use online skins or even create their own to disguise a boss. It is also a little bit more complex to do.

For the sake of simplicity, the examples listed here assume you are going to use a skin available online. Libsdisguises provides different ways of deserializing skins, including one where you put your own custom skin in their folder. Check their documentation if you don't wish to use a skin already available online.

### 1. Setting the disguise

For the disguise, you will want to do something like this:

```yaml
disguise: custom:your_unique_skin_name
```

### 2. Generating the disguise data

This is the tricky part. You start by creating the following config entry:

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*It is crucial that the name you set in disguise for the your_unique_skin_name matches the one in customDisguiseData!*

Then you will need to deserialize a player skin. The easiest way to do this for a skin publicly available online is by using the grabskin command from LibsDisguises.

Let's say you want to get [this skin](https://www.minecraftskins.com/skin/18512841/buff-villager/).

To do this, you need to run the command `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`

**Note: you need to provide a direct link to the skin file, and not to the page containing the skin. Note where the link points to. In [skindex](https://www.minecraftskins.com/), you can get the direct link by pressing the "Image Link" button which is present at the bottom right of every skin.**

Once you have done this successfully, LibsDisguises will provide you with about 3-6 numbers that say "Click to copy". If you click on these, a long list of numbers and letters will appear. You want to make sure you start at 1 and do all of the numbers in order. To copy them, press ctrl-a and then ctrl-c, then paste them in the file with ctrl-v. Once done, it should look similar to this:

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

And that's it! `customDisguiseData` will work with any deserialized skin code, so if you find other ways of generating the same code in LibsDisguises you can use it here.

The advantage of customDisguiseData is that it is self-contained, meaning you don't have to rely on online players, players with specific skins or anything else. EliteMobs uses it to skin all of the disguised bosses in dungeon packages!

# How can I disguise a custom boss as another type of entity?

To disguise a custom boss (or a regional boss) as another type of entity, all you need to do is add the following line to the boss config file:

```yml
disguise: ENTITY_TYPE
```

As an example, if you want your custom boss to be disguised as a sheep, you'd do:

```yml
disguise: SHEEP
```

# How can I disguise an entity with a custom disguise?

To disguise a custom boss (or a regional boss) as a custom LibsDisguises entity, you need to create the LibsDisguises disguise first.

Once that's done, the correct syntax is:

```yml
disguise: custom:you_custom_disguise_name
```

# Valid disguises

There is no official list of valid entity types, but here's an unofficial list that should work at the time of writing this (August 3rd 2020)

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