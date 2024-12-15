EliteMobs 7.3.0以降、プレイヤーは様々なユニークな方法でエリートアイテムとインタラクトできるようになりました。このページは、プレイヤーと管理者向けに、システムがどのように機能するかを理解し、後で管理者向けにシステムのバランスを説明することを目的としています。

***

# アイテムのアンバインド

アンバインドスクロールを持っている場合、アンバインダーNPCを使用して、1つのスクロールと1つのアイテムを結合してアンバインドすることができます。

***注意：この記事を書いている時点では、特定のボスに与えたり追加したりすることなく、プレイヤーがスクロールを入手する方法はありません。スクロールは今月リリースされるエンダードラゴン戦でドロップします。***

スクロールは1回しか使用できません。アンバインドされたアイテムは、売却したり、他のプレイヤーに譲渡したり、プレステージ後に使用したりできます。

***

# アイテムのスクラップ

エリートアイテムは、スクラッパーNPCでスクラップできます。アイテムをスクラップする際、アイテムのレベルに応じて、以下のスクラップを入手できます。

- レベル0-50：小さなスクラップ
- レベル50-100：小さなスクラップ
- レベル100-150：中くらいのスクラップ
- レベル150-200：大きなスクラップ

スクラップは、アイテムシステムの残りの部分の基礎となります。

***

# エリートアイテムの修理

エリートアイテムは、スクラップを使用して修理屋NPCで修理できます。アイテムの損傷の程度によって、修理に必要なスクラップの量とサイズが決まります。

***

# エリートアイテムのエンチャント

アイテムをエンチャントする方法を説明する前に、エンチャントに必要なアイテムとその機能をよく理解しておくことをお勧めします。

**エリートアイテム**
</br>エリートアイテムには、エリートモブショップで入手できる戦利品、エリートモブがドロップするアイテム、クエスト完了の報酬として受け取ったアイテムなどが含まれます。

**エンチャントされた本**
</br>エンチャントされた本は、通常、エリートモブがドロップするか、アリーナやクエストで報酬としてプレイヤーに与えられます。これらには、プレイヤーが目的のアイテムに移すことができるエンチャントが含まれています。

**ラッキーチケット**
</br>ラッキーチケットは、通常、エリートモブから入手したり、アリーナやクエストで報酬として入手したりします。これにより、プレイヤーはアイテムをエンチャントする際の成功率を2倍にすることができます。

プレイヤーは、[冒険者ギルド]($language$/elitemobs/adventurers_guild_world.md)のエンチャンターNPCを訪れるか、`/em`メニューを使用することで、エンチャントメニューにアクセスできます。
 
エリートアイテムとエンチャントされた本の両方があれば、プレイヤーは本に保存されているエンチャントをアイテムに追加しようとすることができます。各試行には、プレイヤーにいくつかのエリートコインがかかります。また、ラッキーチケットを持っている場合は、それを使用することで成功率を2倍にすることもできます。

エンチャントを開始するには、プレイヤーはエンチャントウィンドウに1つのエリートアイテム、1つのエンチャントされた本、1枚のラッキーチケット（持っている場合）を置き、アイテムをエンチャントしようとします。その後、次のいずれかの結果が表示されます。

- **成功:** エンチャントがアイテムに正常に追加されます。
- **失敗:** 失敗した試行となり、エンチャントされた本とエリートコインを失います。
- **クリティカル失敗:** より深刻な失敗となり、エンチャントされた本、エリートコイン、エリートアイテム自体を失います。
- **チャレンジ:** 敗北するとクリティカル失敗の確率が10％になるボスバトルに参加します。プレイヤーが勝利した場合、アイテムはエンチャントされます。

<details>

<summary><b>視覚的な例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  お使いのブラウザは、videoタグに対応していません。
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuyによるシステムの説明ビデオ。</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## 独自のエンチャントされた本を作成する

ここでは、独自のエンチャントされた本を作成する方法を説明する簡単なガイドを示します。

<div align="center">

***

### isEnabled

アイテムが有効かどうかを設定します。

| キー         |      値        | デフォルト |
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

アイテムの名前を設定します。[カラーコード](#color_codes)に対応しています。

| キー         |      値        | デフォルト |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: '&aエリートカスタムエンチャントされた本'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

アイテムのロアを設定します。[カラーコード](#color_codes)に対応しています。

| キー         |           値            | デフォルト |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
lore:
- '&2このカスタム本を使って'
- '&2エンチャンターでアイテムをエンチャントしよう！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

アイテムがどのMinecraft素材であるべきかを設定します。

| キー         |      値        | デフォルト |
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

アイテムが保持するエンチャントを設定します。

| キー         |    値    | デフォルト |
|-------------|:------------:|:-------:|
| `enchantments` | [MineCraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) または [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |  なし   |

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

アイテムを入手できる場所を設定します。ランダムなエリートがドロップし、店で販売されるようにするには、これを `custom` に設定できます。

それ以外の場合は、設定されたルートテーブルからのみドロップするように、`unique` に設定できます。

| キー         |    値    | デフォルト |
|-------------|:------------:|:-------:|
| `itemType` | [値]($language$/elitemobs/creating_items.md&section=itemtype) |  なし   |

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

<summary><b>エンチャントされた本の構成例</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5優れた採掘エンチャントされた本'
lore:
- '&2エンチャンターでアイテムをエンチャントするために使用します！'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

ご覧のとおり、エンチャントされた本を作成することはそれほど複雑ではありません。設定のほとんどは、[アイテム]($language$/elitemobs/creating_items.md)を作成するときに使用する通常の設定です。

もちろん、ここでは主な焦点は `enchantments` セクションになります。例の本には、1つのMineCraftエンチャント `MENDING` と1つのEliteMobsエンチャント `DRILLING` があります。

これにより、この例の本は、つるはしに使用したい優れた本になります。

</div>

</details>

</div>
