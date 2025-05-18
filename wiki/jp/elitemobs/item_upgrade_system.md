日本語に翻訳します。Markdownの書式は維持します。

EliteMobs 7.3.0現在、プレイヤーは様々なユニークな方法でエリートアイテムとインタラクトすることが可能です。このページは、プレイヤーと管理者がシステムがどのように機能するかを理解するのに役立ち、後で管理者向けにシステムのバランスについて説明することを目的としています。

***

# アイテムのバインド解除

アイテムバインド解除スクロールを持っている場合、アンバインダーNPCを使用してスクロール1つとアイテム1つを組み合わせてバインドを解除することができます。

***注：これを書いている時点では、プレイヤーが特定のボスからドロップするか、与えられるか、追加されない限り、スクロールを入手する方法はありません。スクロールは今月リリースされるエンダードラゴン戦からドロップする予定です。***

スクロールは一度しか使用できません。バインド解除されたアイテムは、他のプレイヤーに売却または譲渡したり、プレステージ後に使用したりすることができます。

***

# アイテムのスクラップ化

エリートアイテムはスクラッパーNPCでスクラップ化できます。アイテムをスクラップ化すると、アイテムのレベルに応じて以下のスクラップを入手できます。

- レベル0-50：タイニースクラップ。
- レベル50-100：スモールスクラップ。
- レベル100-150：ミディアムスクラップ。
- レベル150-200：ヒュージスクラップ。

スクラップは、残りのアイテムシステムの基礎となります。

***

# エリートアイテムの修理

エリートアイテムは、リペアマンNPCでスクラップを使用して修理できます。アイテムの損傷の程度によって、修理に必要なスクラップの量とサイズが決まります。

***

# エリートアイテムのエンチャント

アイテムのエンチャント方法を説明する前に、エンチャントに必要なアイテムに慣れ、その機能を理解しておくことをお勧めします。

**エリートアイテム**
</br>エリートアイテムには、EliteMobsショップで入手できる戦利品、エリートモブからドロップされるもの、クエスト完了の報酬として受け取れるものなどが含まれます。

**エンチャントされた本**
</br>エンチャントされた本は、通常、エリートモブからドロップされるか、アリーナやクエストでプレイヤーに報酬として与えられます。これらには、プレイヤーが希望するアイテムに転送できるエンチャントが含まれています。

**ラッキーチケット**
</br>ラッキーチケットは、通常、エリートモブから入手するか、アリーナやクエストで報酬として得られます。これを使用すると、アイテムをエンチャントする際の成功確率を2倍にすることができます。

プレイヤーは、[冒険者ギルド]($language$/elitemobs/adventurers_guild_world.md)のエンチャンターNPCを訪れるか、`/em`メニューを使用することでエンチャントメニューにアクセスできます。

エリートアイテムとエンチャントされた本の両方があれば、プレイヤーは本に保存されているエンチャントをアイテムに追加しようと試みることができます。各試行には、プレイヤーはいくらかのエリートコインを支払う必要があります。ラッキーチケットを持っている場合は、それを使用して成功確率を2倍にすることもできます。

エンチャントを開始するには、プレイヤーはエンチャントウィンドウにエリートアイテム1つ、エンチャントされた本1つ、ラッキーチケット1つ（持っている場合）を配置し、アイテムをエンチャントしようとします。その後、以下のいずれかの結果が表示されます。

- **成功:** エンチャントがアイテムに正常に追加されます。
- **失敗:** 試行が失敗し、エンチャントされた本とエリートコインが失われます。
- **致命的な失敗:** より深刻な失敗で、エンチャントされた本、エリートコイン、そしてエリートアイテム自体が失われます。
- **チャレンジ:** ボスバトルに参加します。敗北した場合、致命的な失敗の確率は10%です。プレイヤーが勝利した場合、アイテムはエンチャントされます。

<details>

<summary><b>視覚的な例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuyによるシステムの一部を説明するビデオ</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 独自のエンチャントされた本を作成する

ここでは、独自のエンチャントされた本を作成する方法を説明する短いガイドです。

<div align="center">

***

### isEnabled

アイテムが有効になっているかどうかを設定します。

| キー          |      値        | デフォルト |
|-------------|:--------------:|:--------:|
| `isEnabled` | [Boolean](#boolean) |  `true`  |

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

アイテムの名前を設定します。[カラーコード](#color_codes)をサポートしています。

| キー     |      値       | デフォルト |
|-------------|:-------------:|:--------:|
| `name` | [String](#string) |   なし   |

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

アイテムの説明文を設定します。[カラーコード](#color_codes)をサポートしています。

| キー    |           値            | デフォルト |
|-------------|:---------------------------:|:--------:|
| `lore` | [String List](#string_list) |   なし   |

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

アイテムがどのMinecraft素材であるべきかを設定します。

| キー       |      値       | デフォルト |
|-------------|:-------------:|:--------:|
| `material` | [Material](#material) |  `BOOK`  |

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

アイテムが保持すべきエンチャントを設定します。

| キー           |    値    | デフォルト |
|-------------|:------------:|:--------:|
| `enchantments` | [Minecraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) または [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |   なし   |

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

アイテムをどこから入手できるかを設定します。ランダムなエリートからドロップさせたり、ショップで販売したりしたい場合は、これを`custom`に設定できます。

それ以外の場合は、設定されたルートテーブルからのみドロップするように`unique`に設定できます。

| キー       |    値    | デフォルト |
|-------------|:------------:|:--------:|
| `itemType` | [値]($language$/elitemobs/creating_items.md&section=itemtype) |   なし   |

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

他のプレイヤーと取引できるかどうかを設定します。

| キー        |    値    | デフォルト |
|-------------|:------------:|:--------:|
| `soulbound` | [Boolean](#boolean) |  `true`  |

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

<summary><b>エンチャントされた本のコンフィグ例</b></summary>

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

ご覧のように、エンチャントされた本を作成するのはそれほど複雑ではありません。設定のほとんどは、[アイテム]($language$/elitemobs/creating_items.md)を作成する際に使用する通常の設定です。

ただし、ここではもちろん、主な焦点は`enchantments`セクションです。例の本には、Minecraftのエンチャント`MENDING`とEliteMobsのエンチャント`DRILLING`が1つずつ含まれています。

これにより、例の本はツルハシに使用したい優れた本になります。

</div>

</details>

</div>