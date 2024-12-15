# LibsDisguisesとは？

LibsDisguisesは、サーバーが任意のエンティティを別の種類のエンティティとして偽装できるようにするプラグインです。たとえば、プレイヤーを羊として偽装したり、羊をプレイヤーとして偽装したりできます。

LibsDisguisesには[無料版](https://www.spigotmc.org/resources/libs-disguises-free.81/)と[プレミアム版](https://www.spigotmc.org/resources/libs-disguises.32453/)があります。LibsDisguisesは他の開発者によって作成および維持されているため、EliteMobsのサポートセクションでサポートを求めないでください。

# エンティティをプレイヤーとして偽装するには？

カスタムボス（またはリージョンボス、さらにはNPC！）をプレイヤーとして偽装するには、ボス構成ファイルに次の行を追加するだけです。

```yml
disguise: player:name
```

たとえば、ボスを私のプレイヤーのスキンとして偽装したい場合、構成行は次のようになります。

```yml
disguise: player:magmaguy
```

# エンティティをプレイヤースキンとして偽装したいが、必ずしもプレイヤーとしてではない場合は？

これは、エンティティをプレイヤーとして偽装する最も柔軟な方法です。管理者はオンラインスキンを使用したり、独自のスキンを作成してボスを偽装したりできます。また、少し複雑です。

簡単にするために、ここにリストされている例では、オンラインで利用可能なスキンを使用することを前提としています。Libsdisguisesは、独自のカスタムスキンをフォルダーに入れる方法を含め、スキンをデシリアライズするさまざまな方法を提供しています。オンラインで既に入手可能なスキンを使用したくない場合は、ドキュメントを確認してください。

### 1. 偽装の設定

偽装には、次のようなことを行う必要があります。

```yaml
disguise: custom:your_unique_skin_name
```

### 2. 偽装データの生成

これが難しい部分です。まず、次の構成エントリを作成します。

```yaml
customDisguiseData: player your_unique_skin_name setskin
```

*偽装に設定した`your_unique_skin_name`の名前が`customDisguiseData`の名前と一致することが重要です！*

次に、プレイヤースキンをデシリアライズする必要があります。オンラインで公開されているスキンでこれを行う最も簡単な方法は、LibsDisguisesの`grabskin`コマンドを使用することです。

たとえば、[このスキン](https://www.minecraftskins.com/skin/18512841/buff-villager/)を取得したいとしましょう。

これを行うには、コマンド`/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`を実行する必要があります。

**注：スキンを含むページではなく、スキンファイルへの直接リンクを提供する必要があります。リンクがどこを指しているかに注意してください。[skindex](https://www.minecraftskins.com/)では、すべてのスキンの右下にある「画像リンク」ボタンを押すと、直接リンクを取得できます。**

これが正常に完了すると、LibsDisguisesは「クリックしてコピー」と表示される約3〜6個の数字を提供します。これらをクリックすると、数字と文字の長いリストが表示されます。1から始めて、すべての数字を順番に行うようにする必要があります。コピーするには、ctrl-aを押してからctrl-cを押して、ctrl-vでファイルに貼り付けます。完了すると、次のようになります。

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

以上です！`customDisguiseData`は、デシリアライズされたスキンコードで動作するため、LibsDisguisesで同じコードを生成する他の方法が見つかった場合は、ここで使用できます。

`customDisguiseData`の利点は、自己完結型であるため、オンラインプレイヤー、特定のスキンを持つプレイヤーなどに依存する必要がないことです。EliteMobsは、ダンジョンパッケージ内の偽装されたすべてのボスのスキンに使用しています！

# カスタムボスを別のタイプのエンティティとして偽装するには？

カスタムボス（またはリージョンボス）を別のタイプのエンティティとして偽装するには、ボス構成ファイルに次の行を追加するだけです。

```yml
disguise: ENTITY_TYPE
```

たとえば、カスタムボスを羊として偽装したい場合は、次のようにします。

```yml
disguise: SHEEP
```

## カスタムボスをベビーエンティティとして偽装するには？

カスタムボス（またはリージョンボス）をベビーエンティティとして偽装するには、ボス構成ファイルに次の行を追加するだけです。

```yml
disguise: HOGLIN:baby
```

この例では、ボスがベビーホグリンとして偽装されていることがわかります。

# エンティティをカスタム偽装で偽装するには？

カスタムボス（またはリージョンボス）をカスタムLibsDisguisesエンティティとして偽装するには、最初にLibsDisguisesの偽装を作成する必要があります。

それが完了したら、正しい構文は次のようになります。

```yml
disguise: custom:you_custom_disguise_name
```

# 有効な偽装

有効なエンティティタイプの公式リストはありませんが、これを作成した時点（2020年8月3日）で機能するはずの非公式リストを次に示します。

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
