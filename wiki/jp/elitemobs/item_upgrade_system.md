EliteMobs
7.3.0の時点では、プレイヤーがエリートアイテムとさまざまな独自の方法でインタラクトすることが可能です。このページは、プレイヤーと管理者がシステムがどのように機能するかを理解し、後で管理者がシステムバランスを説明するのに役立つことを目的としています。

***

# アイテムのバインド解除

アイテムのバインド解除スクロールを持っている場合、アンバインダーNPCを使用して、1つのスクロールと1つのアイテムを組み合わせてバインドを解除することができます。

***注意：この記事を書いている時点では、プレイヤーが特定のボスに与えたり追加したりすることなく、スクロールを入手する方法はありません。スクロールは、今月リリースされるエンダードラゴン戦でドロップします。
***

スクロールは一度しか使用できません。バインドが解除されると、アイテムは販売または他のプレイヤーに譲渡したり、プレステージ後に使用したりできます。

***

# アイテムのスクラップ

エリートアイテムはスクラッパーNPCでスクラップできます。アイテムをスクラップすると、アイテムのレベルに応じて、次のスクラップが得られます。

- レベル0〜50：小さなスクラップ。
- レベル50〜100：小さなスクラップ。
- レベル100〜150：中程度のスクラップ。
- レベル150〜200：巨大なスクラップ。

スクラップは、残りのアイテムシステムの基礎となります。

***

# エリートアイテムの修理

エリートアイテムは、スクラップを使用して修理工NPCで修理できます。アイテムの損傷の程度によって、修理に必要なスクラップの量とサイズが決まります。

***

# エリートアイテムのエンチャント

アイテムのエンチャント方法について説明する前に、エンチャントに必要なアイテムとその機能をよく理解しておくことをお勧めします。

**エリートアイテム**
</br>エリートアイテムには、エリートモブショップで入手できる戦利品、エリートモブがドロップした戦利品、クエストを完了した報酬などが含まれます。

**エンチャントされた本**
</br>エンチャントされた本は通常、エリートモブがドロップしたり、アリーナやクエストで報酬としてプレイヤーに与えられます。これらには、プレイヤーが目的のアイテムに転送できるエンチャントが含まれています。

**ラッキーチケット**
</br>ラッキーチケットは、通常エリートモブから入手したり、アリーナやクエストで報酬として入手したりすることで、アイテムをエンチャントする際の成功の可能性を2倍にすることができます。

プレイヤーは、[冒険者ギルド]($language$/elitemobs/adventurers_guild_world.md)のエンチャンターNPCを訪問するか、`/em`
メニューを使用することで、エンチャントメニューにアクセスできます。

エリートアイテムとエンチャントされた本の両方を使用することで、プレイヤーは本に保存されているエンチャントをアイテムに追加しようとすることができます。各試行には、プレイヤーにいくらかのエリートコインがかかります。また、ラッキーチケットを持っている場合は、それを使用することで成功の可能性を2倍にすることができます。

エンチャントを開始するには、プレイヤーはエリートアイテム1つ、エンチャントされた本1つ、ラッキーチケット1枚（持っている場合）をエンチャントウィンドウに置き、アイテムをエンチャントしようとします。その後、次のいずれかの結果になります。

- **成功：** エンチャントがアイテムに正常に追加されます。
- **失敗：** 失敗した試行となり、エンチャントされた本とエリートコインが失われます。
- **重大な失敗：** より深刻な失敗となり、エンチャントされた本、エリートコイン、およびエリートアイテム自体が失われます。
- **チャレンジ：** 負けた場合、重大な失敗の可能性が10％のボス戦に参加します。プレイヤーが勝てば、アイテムはエンチャントされます。

<details>

<summary><b>視覚的な例</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  お使いのブラウザは動画タグに対応していません。
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuyがいくつかのシステムを説明する動画</summary>

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

| キー          |          値          | デフォルト  |
|:------------|:-------------------:|:------:|
| `isEnabled` | [Boolean](#boolean) | `true` |

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

アイテムの名前を設定します。[カラーコード](#color_codes)をサポートします。

| キー     |         値         | デフォルト |
|:-------|:-----------------:|:-----:|
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

アイテムの伝承を設定します。[カラーコード](#color_codes)をサポートします。

| キー     |              値              | デフォルト |
|:-------|:---------------------------:|:-----:|
| `lore` | [String List](#string_list) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
lore:
- '&2このカスタム本を使って'
- '&2エンチャンターでアイテムをエンチャントしましょう！'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

アイテムがどのMineCraft素材にするかを設定します。

| キー         |           値           | デフォルト  |
|:-----------|:---------------------:|:------:|
| `material` | [Material](#material) | `BOOK` |

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

| キー             |                                                                                             値                                                                                             | デフォルト |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:-----:|
| `enchantments` | [MineCraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) or [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |  なし   |

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

アイテムをどこで入手できるかを設定します。本をランダムなエリートがドロップし、店で販売するようにする場合は、これを `custom`
に設定できます。

それ以外の場合は、設定されたルートテーブルからのみドロップするように `unique` に設定できます。

| キー         |                                 値                                 | デフォルト |
|:-----------|:-----------------------------------------------------------------:|:-----:|
| `itemType` | [Values]($language$/elitemobs/creating_items.md&section=itemtype) |  なし   |

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

| キー          |          値          | デフォルト  |
|:------------|:-------------------:|:------:|
| `soulbound` | [Boolean](#boolean) | `true` |

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

<summary><b>エンチャントされた本の設定例</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5優れたマイニングエンチャントされた本'
lore:
- '&2エンチャンターでアイテムをエンチャントするために使用されます！'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

ご覧のとおり、エンチャントされた本を作るのはそれほど複雑ではありません。設定のほとんどは、[アイテム]($language$/elitemobs/creating_items.md)
を作成するときに使用する通常の設定です。

もちろん、ここでは主な焦点は `enchantments` セクションになります。例の本には、1つのMineCraftエンチャント `MENDING` と1つのEliteMobsエンチャント `DRILLING` があります。

これにより、例の本は、つるはしで使用したい優れた本になります。

</div>

</details>

</div>
