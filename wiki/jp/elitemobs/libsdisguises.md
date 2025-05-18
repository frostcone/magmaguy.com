日本語に翻訳します。Markdownの書式は維持します。

# LibsDisguisesとは？

LibsDisguisesは、サーバー上の任意エンティティを他の任意のエンティティタイプとして偽装できるプラグインです。例えば、プレイヤーをヒツジに偽装したり、ヒツジをプレイヤーに偽装したりできます。

LibsDisguisesには、[無料版](https://www.spigotmc.org/resources/libs-disguises-free.81/)と[プレミアム版](https://www.spigotmc.org/resources/libs-disguises.32453/)があります。LibsDisguisesは他の開発者によって作成・維持されているため、EliteMobsのサポートセクションでLibsDisguisesに関するサポートを求めないでください。

# エンティティをプレイヤーとして偽装するには？

カスタムボス（またはリージョンボス、あるいはNPCでも！）をプレイヤーとして偽装するには、ボス設定ファイルに以下の行を追加するだけです。

```yml
disguise: player:name
```

例として、ボスを私のプレイヤーのスキンとして偽装したい場合、設定行は以下のようになります。

```yml
disguise: player:magmaguy
```

# エンティティをプレイヤーのスキンとして偽装するには？（必ずしもプレイヤーとしてではない）

これは、エンティティをプレイヤーとして偽装する最も柔軟な方法です。管理者はオンラインのスキンを使用したり、独自のスキンを作成してボスを偽装したりできます。ただし、少し複雑になります。

簡単にするため、ここに記載されている例ではオンラインで利用可能なスキンを使用することを想定しています。LibsDisguisesは、独自のカスタムスキンをフォルダに入れる方法など、スキンの逆シリアル化に関する様々な方法を提供しています。オンラインで既に利用可能なスキンを使用しない場合は、彼らのドキュメントを確認してください。

### 1. 偽装の設定

偽装には、以下のように設定します。

```yaml
disguise: custom:your_unique_skin_name
```

### 2. 偽装データの生成

ここが少し難しい部分です。まず、以下の設定項目を作成します。

```yaml
customDisguiseData: player your_unique_skin_name setskin 
```

*disguiseでyour_unique_skin_nameに設定した名前が、customDisguiseDataの名前と一致することが非常に重要です！*

次に、プレイヤーのスキンを逆シリアル化する必要があります。オンラインで公開されているスキンに対してこれを行う最も簡単な方法は、LibsDisguisesのgrabskinコマンドを使用することです。

例えば、[このスキン](https://www.minecraftskins.com/skin/18512841/buff-villager/)を取得したいとします。

これを行うには、コマンド `/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437` を実行する必要があります。

**注意：スキンが含まれているページではなく、スキンファイルへの直接リンクを提供する必要があります。リンクがどこを指しているかに注意してください。[Skindex](https://www.minecraftskins.com/)では、各スキンの右下にある「Image Link」ボタンを押すことで直接リンクを取得できます。**

これが正常に完了すると、LibsDisguisesは「クリックしてコピー」と表示された3〜6個の数字を提供します。これらをクリックすると、数字と文字の長いリストが表示されます。1から始めて、すべての数字を順番に行うようにしてください。それらをコピーするには、Ctrl+Aを押してからCtrl+Cを押し、Ctrl+Vでファイルに貼り付けます。完了すると、以下のようになります。

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWlMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iJJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

これで完了です！ `customDisguiseData` は、逆シリアル化された任意のスキンコードで機能するため、LibsDisguisesで同じコードを生成する他の方法を見つけた場合、ここで使用できます。

customDisguiseDataの利点は、自己完結型であることです。つまり、オンラインのプレイヤーや特定のスキンを持つプレイヤーなどに依存する必要がありません。EliteMobsでは、ダンジョンパッケージ内の偽装されたボスすべてにスキンを適用するためにこれを使用しています！

# カスタムボスを別のエンティティタイプとして偽装するには？

カスタムボス（またはリージョンボス）を別のエンティティタイプとして偽装するには、ボス設定ファイルに以下の行を追加するだけです。

```yml
disguise: ENTITY_TYPE
```

例として、カスタムボスをヒツジとして偽装したい場合、以下のように設定します。

```yml
disguise: SHEEP
```
## カスタムボスを赤ちゃんのエンティティとして偽装するには？

カスタムボス（またはリージョンボス）を赤ちゃんのエンティティとして偽装するには、ボス設定ファイルに以下の行を追加するだけです。

```yml
disguise: HOGLIN:baby
```
この例でわかるように、ボスは赤ちゃんのホグリンとして偽装されます。

# エンティティをカスタム偽装で偽装するには？

カスタムボス（またはリージョンボス）をカスタムLibsDisguisesエンティティとして偽装するには、まずLibsDisguisesの偽装を作成する必要があります。

それが完了したら、正しい構文は以下のようになります。

```yml
disguise: custom:you_custom_disguise_name
```

# 有効な偽装

有効なエンティティタイプの公式リストはありませんが、この記事の執筆時点（2020年8月3日）で機能するはずの非公式リストを以下に示します。

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