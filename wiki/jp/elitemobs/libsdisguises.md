# LibsDisguisesとは？

LibsDisguisesは、サーバーがあらゆるエンティティを他のあらゆるタイプのエンティティに変装させることを可能にするプラグインです。例として、プレイヤーを羊に変装させたり、羊をプレイヤーに変装させたりできます。

LibsDisguisesには[無料](https://www.spigotmc.org/resources/libs-disguises-free.81/)
版と[プレミアム](https://www.spigotmc.org/resources/libs-disguises.32453/)
版があります。LibsDisguisesは他の開発者によって作成、維持されているため、EliteMobsのサポートセクションでサポートを求めないでください。

# エンティティをプレイヤーに変装させるにはどうすればいいですか？

カスタムボス（またはリージョナルボス、あるいはNPC！）をプレイヤーに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: player:名前
```

例として、ボスを私のプレイヤースキンに変装させたい場合、設定行は次のようになります。

```yml
disguise: player:magmaguy
```

# エンティティをプレイヤースキンに変装させたいが、必ずしもプレイヤーである必要はない場合はどうすればいいですか？

これはエンティティをプレイヤーとして偽装する最も柔軟な方法で、管理者がオンラインスキンを使用したり、独自のスキンを作成してボスを偽装したりすることができます。また、少し複雑でもあります。

簡単にするために、ここでリストされている例では、オンラインで入手可能なスキンを使用することを前提としています。Libsdisguisesは、独自のカスタムスキンをフォルダーに入れる方法を含め、スキンの逆シリアル化のさまざまな方法を提供します。オンラインで既に利用可能なスキンを使用したくない場合は、ドキュメントを確認してください。

### 1. 変装を設定する

変装には、次のように設定します。

```yaml
disguise: custom:あなたのユニークなスキン名
```

### 2. 変装データを生成する

ここが難しいところです。最初に、次の設定エントリを作成します。

```yaml
customDisguiseData: player あなたのユニークなスキン名 setskin
```

*変装に設定した名前が、customDisguiseDataのyour_unique_skin_nameと一致することが非常に重要です！*

次に、プレイヤースキンを逆シリアル化する必要があります。オンラインで公開されているスキンに対してこれを行う最も簡単な方法は、LibsDisguisesのgrabskinコマンドを使用することです。

[このスキン](https://www.minecraftskins.com/skin/18512841/buff-villager/)を取得したいとしましょう。

これを行うには、コマンド`/grabskin https://www.minecraftskins.com/uploads/skins/2021/07/28/buff-villager-18512841.png?v437`を実行する必要があります。

*
*注：スキンファイルへの直接リンクを提供する必要があり、スキンを含むページへのリンクではありません。リンクが指している場所に注意してください。[skindex](https://www.minecraftskins.com/)
では、すべてのスキンの右下にある「画像リンク」ボタンを押すことで直接リンクを取得できます。**

これが正常に完了すると、LibsDisguisesは「クリックしてコピー」と表示される約3〜6個の数字を提供します。これらをクリックすると、数字と文字の長いリストが表示されます。1から始めて、すべての番号を順番に行う必要があります。コピーするには、ctrl-aを押してからctrl-cを押し、次にctrl-vでファイルに貼り付けます。完了すると、次のようになります。

```yaml
customDisguiseData: player your_unique_skin_name setskin {"id":"d1fbb77f-b184-4718-b0a2-c7ae866798d3","name":"Unknown","properties":[{"name":"textures","value":"ewogICJ0aW1lc3RhbXAiIDogMTYyNzU0ODkwMjQ0OSwKICAicHJvZmlsZUlkIiA6ICIxOTI1MjFiNGVmZGI0MjVjODkzMWYwMmE4NDk2ZTExYiIsCiAgInByb2ZpbGVOYW1lIiA6ICJTZXJpYWxpemFibGUiLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzlmYTZkMWFlODA2YTY2OGI0OTgzYmZhY2ZkMGUzMzQ5MGE5MGU4YTZmMWE2MmEwZGQ5YzQ1YjdkYjBiNjU1MyIKICAgIH0KICB9Cn0=","signature":"P/XSvxX45MUZGc5uuDKuVgmMUk2V1HADPI84Os5J4NnmURhLeS4jL4FSeShmz0cH7sBWmMg80g9ADP33R9PcOmzbHK4hJBFt2VYLJNgSYHK6VGp6qLGXDfdAa3vRNXN7jKtsrqVEANax7Gzv3xcWARLbq1FuQ6yYdXDY8Coc02Y/POMRG/i6iACtro5DQGhr2JgbL++95UhSBFxmU82Zef3UMHLfgt7lC4vWN4c4xrOAKllzF2mwohuMmEkoKzu/6s/eu5q4J4bBH08M8UN02/yJuEH5sTy/iVJfaoPs90ZfcVdRpUZvVDZh5eXapQN1/Q9/79Pc8YOXF/20iygZ/hpvTPKP8wbMP2b1cJSyAaEIUtG9I7mG3bAXbH7mcswM1CNFF3+GEFnZI5dPxzuOelJR/t2mtVl82a4zEm9KG9Fq7iGfuK9aiWR8Yot1KeuIddPbBL8JnxHy2wW9OySjzAbs8tUI/i5KKmZmQrPH0RmHrFIuVK4C849QtRt57sQaUr1+W6Vto3r7J5jhpZ30wIIfS9hvW/ReB9rbwUQWERWie5Lchfcp7YkKbzuuaddnIjPew2IQDESlXzVW84kXtYKCs8hFgYVn27wU8jqtBCVkr0iHW7YLQTl4SFUzTFCSgAx5KSFHGm/4kqXqpHNdjS687o13MWpxrxLkV1svIp4="}],"legacy":false}
```

これで完了です！`customDisguiseData`は、逆シリアル化されたスキンコードであればどれでも機能するため、LibsDisguisesで同じコードを生成する他の方法が見つかった場合は、ここで使用できます。

customDisguiseDataの利点は、それ自体で完結していることです。つまり、オンラインプレイヤー、特定のスキンを持つプレイヤーなどに依存する必要はありません。EliteMobsは、ダンジョンパッケージで偽装されたすべてのボスをスキンするためにそれを使用します！

# カスタムボスを他のタイプのエンティティに変装させるにはどうすればいいですか？

カスタムボス（またはリージョナルボス）を別のタイプのエンティティに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: ENTITY_TYPE
```

例として、カスタムボスを羊に変装させたい場合は、次のようになります。

```yml
disguise: SHEEP
```

## カスタムボスをベビーエンティティに変装させるにはどうすればいいですか？

カスタムボス（またはリージョナルボス）をベビーエンティティに変装させるには、ボス設定ファイルに次の行を追加するだけです。

```yml
disguise: HOGLIN:baby
```

この例に見られるように、私たちのボスはベビーホグリンとして変装します。

# エンティティをカスタム変装で変装させるにはどうすればいいですか？

カスタムボス（またはリージョナルボス）をカスタムLibsDisguisesエンティティとして変装させるには、まずLibsDisguises変装を作成する必要があります。

それが完了すると、正しい構文は次のようになります。

```yml
disguise: custom:あなたのカスタム変装名
```

# 有効な変装

有効なエンティティタイプの公式リストはありませんが、これを書いている時点（2020年8月3日）で動作するはずの非公式リストを次に示します。

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
