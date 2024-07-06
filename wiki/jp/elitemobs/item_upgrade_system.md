```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# EliteMobs 7.3.0 以降、プレイヤーは、さまざまなユニークな方法で Elite アイテムと対話できるようになりました。このページは、プレイヤーと管理者がシステムの仕組みを理解し、さらに管理者向けにシステムのバランスについて説明するために作成されたものです。


***

# アイテムのソウルバインド解除

アイテムのソウルバインド解除スクロールを持っている場合、解除者 NPC を使用して、1 つのスクロールと 1 つのアイテムを組み合わせて、アイテムのソウルバインドを解除できます。

***注意: 執筆時点では、プレイヤーは特定のボスからもらうか、特定のボスに追加されない限り、スクロールを入手する方法はありません。スクロールは、今月末にリリースされる Ender Dragon 戦でドロップします。***

スクロールは 1 回のみ使用できます。ソウルバインドを解除すると、アイテムは販売したり、他のプレイヤーに渡したり、プレステージ後に使用したりできます。

***

# アイテムのスクラップ

Elite アイテムは、スクラッパー NPC でスクラップできます。アイテムをスクラップすると、アイテムのレベルに応じて、次のスクラップが得られます。

- レベル 0-50: Tiny Scrap。
- レベル 50-100: Small Scrap。
- レベル 100-150: Medium Scrap。
- レベル 150-200: Huge Scrap。

スクラップは、アイテムシステムの基礎となります。

***

# Elite アイテムの修理

Elite アイテムは、スクラッパー NPC を使用して、修理係 NPC で修理できます。アイテムのダメージの程度に応じて、修理に必要なスクラップの量とサイズが決まります。

***

# Elite アイテムのエンチャント

アイテムのエンチャント方法について説明する前に、エンチャントに必要なアイテムについて理解し、その機能を理解しておくとよいでしょう。

**Elite アイテム**
</br>Elite アイテムには、EliteMobs ショップで入手できる loot、Elite Mobs からドロップされる loot、クエストを完了した報酬として受け取る loot などが含まれます。

**エンチャントされた本**
</br>エンチャントされた本は、通常、Elite Mobs からドロップされるか、アリーナやクエストの報酬としてプレイヤーに与えられます。エンチャントされた本には、プレイヤーが希望するアイテムに転送できるエンチャントが含まれています。

**ラッキーチケット**
</br>ラッキーチケットは、通常、Elite Mobs またはアリーナやクエストの報酬として取得できます。これにより、アイテムのエンチャント時に成功する確率を 2 倍にすることができます。

プレイヤーは、[アドベンチャーギルド]($language$/elitemobs/adventurers_guild_world.md) のエンチャンター NPC を訪れるか、`/em` メニューを使用することで、エンチャントメニューにアクセスできます。

Elite アイテムとエンチャントされた本の両方を持っている場合、プレイヤーは本に格納されているエンチャントをアイテムに追加しようとすることができます。各試みは、プレイヤーに Elite Coins を消費します。ラッキーチケットを持っている場合は、ラッキーチケットを使用することで、成功する確率を 2 倍にすることもできます。

エンチャントを開始するには、プレイヤーは、エンチャントウィンドウに Elite アイテム 1 つ、エンチャントされた本 1 つ、そしてラッキーチケット 1 つ（ある場合）を置き、アイテムをエンチャントしようとします。その後、プレイヤーは次のいずれかの結果に遭遇します。

- **成功:** アイテムにエンチャントが正常に追加されました。
- **失敗:** エンチャントに失敗し、エンチャントされた本と Elite Coins を失います。
- **致命的な失敗:** より深刻な失敗で、エンチャントされた本、Elite Coins、そして Elite アイテム自体を失います。
- **チャレンジ:** プレイヤーが負けた場合、10% の確率で致命的な失敗が発生するボス戦に参加します。プレイヤーが勝利すると、アイテムはエンチャントされます。

<details>

<summary><b>ビジュアル例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy のシステム説明ビデオ</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 独自のエンチャントされた本を作成する

以下は、独自のエンチャントされた本を作成する方法を説明する簡単なガイドです。

<div align="center">

***

### isEnabled

アイテムを有効にするかどうかを設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

アイテムの名前を設定します。[カラーコード](#color_codes) をサポートしています。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

アイテムの説明文を設定します。[カラーコード](#color_codes) をサポートしています。

| キー         |           値            | デフォルト |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
lore:
- '&2Use this custom book to'
- '&2enchant items at the enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

アイテムの Minecraft 素材を設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

アイテムに含めるエンチャントを設定します。

| キー         |    値    | デフォルト |
|-------------|:------------:|:-------:|
| `enchantments` | [MineCraft エンチャント](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) または [EliteMobs エンチャント]($language$/elitemobs/custom_enchantments_list.md) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

アイテムを入手できる場所を設定します。ランダムなエリートがドロップして、ショップで販売できるように、`custom` に設定できます。

それ以外の場合、構成された loot table からのみドロップするように、`unique` に設定できます。

| キー         |    値    | デフォルト |
|-------------|:------------:|:-------:|
| `itemType` | [Values]($language$/elitemobs/creating_items.md&section=itemtype) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

アイテムを他のプレイヤーと取引できるかどうかを設定します。

| キー         |    値    | デフォルト |
|-------------|:------------:|:-------:|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>

## エンチャントされた本の例

<div align="center">

<details> 

<summary><b>エンチャントされた本の設定の例</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Used to enchant items at the enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

ご覧のとおり、エンチャントされた本を作成するのはそれほど難しくありません。ほとんどの設定は、[アイテム]($language$/elitemobs/creating_items.md) を作成する場合に使用する通常のものです。

もちろん、ここでは、`enchantments` セクションが最も重要になります。この本の例には、MineCraft エンチャント `MENDING` と、EliteMobs エンチャント `DRILLING` が 1 つずつ含まれています。

この例の本は、ツルハシに使用するのに最適な本になります。

</div>

</details>

</div>

```

