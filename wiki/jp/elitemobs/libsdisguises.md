# LibsDisguises とは？

LibsDisguises は、サーバーが任意のエンティティを任意の他のタイプのエンティティに変装させることができるプラグインです。たとえば、プレイヤーを羊に変装させたり、羊をプレイヤーに変装させたりできます。

LibsDisguises には、[無料](https://www.spigotmc.org/resources/libs-disguises-free.81/) と [プレミアム](https://www.spigotmc.org/resources/libs-disguises.32453/) の 2 つのバージョンがあります。LibsDisguises は、他の開発者によって作成され、メンテナンスされています。そのため、EliteMobs のサポートセクションで、LibsDisguises のサポートを依頼しないでください。

# エンティティをプレイヤーに変装させるにはどうすればいいですか？

カスタムボス（またはリージョンボス、さらには NPC！）をプレイヤーに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: player:name
```

たとえば、ボスを私のプレイヤーのスキンのように変装させたい場合は、設定行は次のようになります。

```yml
disguise: player:magmaguy
```

# エンティティをプレイヤーのスキンのように変装させることはできますか？ただし、プレイヤーとしてではありません。

これは、エンティティをプレイヤーに変装させる最も柔軟な方法です。管理者は、オンラインスキンを使用したり、独自のボススキンを作成したりできます。また、少し複雑です。

ここでは、簡単にするために、オンラインで入手可能なスキンを使用することを前提として説明します。LibsDisguises は、スキンの逆シリアル化にさまざまな方法を提供していますが、その中には、独自のスキンスキンをフォルダに配置する方法も含まれています。オンラインで入手可能なスキンを使用しない場合は、LibsDisguises のドキュメントを確認してください。

### 1. 変装の設定

変装の場合、次のような操作を行う必要があります。

```yaml
disguise: custom:your_unique_skin_name
```

### 2. 変装データの生成

これが難しい部分です。まず、次の設定エントリを作成します。

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*変装で `your_unique_skin_name` に設定した名前は、`customDisguiseData` で設定した名前と一致する必要があります！*

次に、プレイヤーのスキンの逆シリアル化を行う必要があります。オンラインで公開されているスキンの場合は、LibsDisguises の `grabskin` コマンドを使用するのが最も簡単な方法です。

[このスキン](https://www.minecraftskins.com/skin/18512841/buff-villager/) を取得したいとしましょう。

これを行うには、コマンド `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437` を実行する必要があります。

**注意: スキンファイルへの直接のリンクを提供する必要があり、スキンが含まれているページへのリンクは提供しないでください。リンクが指している場所を確認してください。[skindex](https://www.minecraftskins.com/) では、各スキンの右下に表示されている「画像のリンク」ボタンを押すことで、直接のリンクを取得できます。**

これが正常に完了すると、LibsDisguises は、「クリックしてコピー」というラベルが付いた 3 つから 6 つの数字を表示します。これらを クリックすると、数字と文字の長いリストが表示されます。数字を 1 から順番にすべて入力する必要があります。コピーするには、Ctrl-A を押してから Ctrl-C を押し、Ctrl-V を押してファイルに貼り付けます。完了すると、次のようになります。

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02YdXDOMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

これで完了です！`customDisguiseData` は、逆シリアル化されたスキンスキンコードで動作します。そのため、LibsDisguises で同じコードを生成する別の方法が見つかった場合は、ここで使用できます。

`customDisguiseData` の利点は、自己完結型であることです。つまり、オンラインプレイヤー、特定のスキンのプレイヤー、または他のものには依存しません。EliteMobs は、ダンジョンパッケージのすべての変装ボスのスキンに使用します！

# カスタムボスを別のタイプのエンティティに変装させるにはどうすればいいですか？

カスタムボス（またはリージョンボス）を別のタイプのエンティティに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: ENTITY_TYPE
```

たとえば、カスタムボスを羊に変装させたい場合は、次のようになります。

```yml
disguise: SHEEP
```
## カスタムボスを赤ちゃんエンティティに変装させるにはどうすればいいですか？

カスタムボス（またはリージョンボス）を赤ちゃんエンティティに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: HOGLIN:baby
```
ご覧のとおり、この例では、ボスはベビーホグリンに変装します。

# カスタム変装を使用してエンティティを変装させるにはどうすればいいですか？

カスタムボス（またはリージョンボス）をカスタム LibsDisguises エンティティに変装させるには、まず LibsDisguises 変装を作成する必要があります。

これが完了したら、正しい構文は次のとおりです。

```yml
disguise: custom:you_custom_disguise_name
```

# 有効な変装

有効なエンティティタイプの公式リストはありませんが、この記事の執筆時点（2020 年 8 月 3 日）で機能する非公式リストを以下に示します。

<details>

<summary><b>リストを展開</b></summary>

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



