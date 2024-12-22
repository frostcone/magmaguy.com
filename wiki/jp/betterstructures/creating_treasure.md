# トレジャーファイルとは？

トレジャーファイルは、BetterStructuresのチェストのルートテーブルを決定するものです。通常は[ジェネレーター]($language$/betterstructures/creating_generators.md&section=treasurefilename)
に割り当てられますが、[個別のビルド設定]($language$/betterstructures/creating_structures.md&section=treasurefile)
のレベルでも設定できます。

これらのルートテーブルは非常に強力ですが、理解するには基本的な統計の概念に関する知識も必要です。

<details>
<summary>
これらの概念についてここで読んでください。このページの残りの部分は、あなたがそれらを理解していることを前提としています！
</summary>

***重み付け確率***

BetterStructuresとEliteMobsは、重み付け確率の概念を頻繁に使用します。これは、単純な問題を解決するためのものです。つまり、無限の可能性のあるアイテムのリストから1つのアイテムを選択する確率をどのように設定できるのか？

重み付け確率は、各アイテムに重みを与えることでこの問題を解決します。100個のアイテムがあり、それぞれに重みが1の場合、それらはすべて同じ確率 -
1％ -
で選択される可能性があります。合計101個のアイテムになるようにアイテムを1つ追加し、その最後のアイテムに1のチャンスを与えた場合、すべてのアイテムは同じ確率 -
約0.99％ -
で選択される可能性があります。最後のアイテムに2の重みを与えると、選択される確率が上がります。新しい合計重みは102になり、最後の要素の重みは2なので、100/102 =
約0.98％となり、0.98％+0.98％= 1.96％の確率で選択されます。最後のアイテムに100の重みを与えると、新しい重みは200になり、その重みの半分が新しいアイテムなので、新しいアイテムが選択される確率は50％になります。

ご覧のとおり、これは、ランダム化するものが数百個もある可能性がある場合に役立ちます。

***ガウス分布***

ガウス分布とは、ベル型の数学関数です。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

これがルートシステムにどのように関連するのか疑問に思われるかもしれません。BetterStructuresがチェストにルートを設定するときに決定しなければならないことの1つは、チェストにどれだけのルートが表示されるかです。その量は特定の数値付近で常に一定である必要がありますが、理想的にはチェストを開けるのがそれほどエキサイティングでなくなるほど予測可能であってはなりません。

この半ランダムな効果を実現するために、ガウス分布を使用して、選択されるアイテムの*数*をランダム化します。この数が選択されると、
*重み付け確率*は、重みを考慮に入れて、レアリティテーブルから1つの要素をランダムに選択します。

では、ガウス分布はどのように機能するのでしょうか？

幸いなことに、その背後にある数学がどのように機能するかを心配する必要はなく、代わりにそれを変更する2つの設定（平均と標準偏差）に焦点を当てることができます。

*平均*

簡単に言えば、`mean`はガウス曲線の真ん中を設定します。これは、チェストに表示される可能性が最も高いアイテムの数を設定することを意味します。基本的に、チェストに通常5つのアイテムを表示させたい場合は、平均を5に設定します。

*標準偏差*

チェスト内のアイテムの平均数が5であると想像してください。`標準偏差`は、この数値が1つのチェストから別のチェストにどの程度変化するかを決定するのに役立ちます。

小さい`標準偏差`
（例：1）：これは、ほとんどのチェストに、4、5、6個などの平均に非常に近いアイテムがあることを意味します。より予測可能な体験です。たとえば、チェストの標準偏差が1の場合、ほぼすべてのチェストに4〜6個のアイテムが含まれていると予想できます。

中程度の`標準偏差`
（例：2）：ここでは、より多くの種類があります。チェストには3〜7個のアイテムがあるかもしれません。5つのアイテムはまだ一般的ですが、少し多いまたは少ないアイテムが含まれたチェストを見つけることも珍しくありません。したがって、標準偏差が2の場合、3つのアイテムしかないチェストを時々見つけたり、運が良ければ7つのアイテムがあるチェストを見つけることもできます。

大きい`標準偏差`
（例：3以上）：これで、事態は本当に驚くべきものになります！チェストには2つのアイテムしかない場合もあれば、8つ以上のアイテムがある場合もあります。これは、わずか2つのアイテムしかないチェストを見つける可能性もありますが、グッズがたくさん入ったチェストを見つける可能性もあることを意味します。たとえば、標準偏差が3の場合、チェストには2〜8個のアイテムが含まれている可能性があり、チェストを開けるたびにエキサイティングなギャンブルになります。

***デフォルトの平均は4、デフォルトの標準偏差は3です。***

</details>

***

# 特別なフォーマット

トレジャーファイルには、次のような特別な形式があります。

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*注：これはファイルの非常にトリミングされたバージョンであり、実際のファイルは、はるかに多くのルートと、可能なすべてのエンチャントをカバーしているため、2599行の長さです。*

# isEnabled

| キー          |          値          | デフォルト  |
|-------------|:-------------------:|--------|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| キー     |         値         | デフォルト |
|--------|:-----------------:|-------|
| `mean` | [Double](#double) | `4`   |

`mean`
を設定します。詳細については、[こちら](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)
をご覧ください。

***

# standardDeviation

| キー                  |         値         | デフォルト |
|---------------------|:-----------------:|-------|
| `standardDeviation` | [Double](#double) | `3`   |

`standardDeviation`
を設定します。詳細については、[こちら](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)
をご覧ください。

***

# items

ここからがややこしくなります。多くのオプションは管理者によって設定できるためです。前の設定ファイル例を詳しく見てみましょう。

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

ここでは、`items`設定キーの下に、`common`と`rare`を持つマップがあることがわかります。これらは`レアリティ`です！
***

## レアリティ

レアリティには固定の名前はありません。それらを追加または削除したり、同じ形式を使用する限り、好きなようにカスタマイズしたりできます。

これらのレアリティテーブルを多かれ少なかれ珍しくしているのは、ルートテーブルの`重み`であることに注意してください。

デフォルトでは：

- `common`のデフォルトの`重み`は60
- `rare`のデフォルトの`重み`は30
- `epic`のデフォルトの`重み`は10

これにより、一般的なアイテムは、エピックアイテムよりも6倍ドロップする可能性が高くなります。`重み`
の詳細については、[こちら](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)
をご覧ください。

重みとは別に、各レアリティテーブルには独自の`items`リストがあります。

***

### レアリティアイテム

レアリティアイテムは、レアリティテーブルが持つすべてのアイテムをリストする[マップリスト](https://magmaguy.com/wiki.html#lang=en&article=global+configuration_file_guide.md&section=map-list)
です。

これらのアイテムには、次の設定があります。

| キー                                 |              値              | デフォルト |
|------------------------------------|:---------------------------:|-------|
| `amount`                           | min-max [Integer](#integer) | 可変    |
| `material`                         |    [Material](#Material)    | 可変    |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | 可変    |
| `weight`                           |      [Double](#double)      | 可変    |

***

#### amount

***

ドロップする量を設定します。これは、次のように範囲で表されます。`amount: MIN-MAX`。たとえば、1〜5個の
アイテムをドロップするには：`amount: 1-5`。

#### material

ドロップする可能性のあるアイテムの[Spigot API名](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)
を使用してマテリアルを設定します。

***

##### 特別なケース - シリアライズ

lootifyコマンドを使用する場合、マテリアルの代わりにlootifyは`serialized`
設定を提供します。これはプラグインによって自動的に生成され、手動で生成しないでください。それは人間が読めない形式です。

***

#### weight

重み付けされた確率の重みを設定します。詳細については、[こちら](https://magmaguy.com/wiki.html#lang=en&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)
をご覧ください。

***

#### procedurallyGenerateItems

`procedurallyGeneratedItemSettings`
の構成設定に基づいて、アイテムをプロシージャルに生成する必要があるかどうかを設定します。設定によっては、エンチャントなしでアイテムが生成される場合があることに注意してください。

# procedurallyGeneratedItemSettings

設定ファイル例をもう一度見てみましょう。

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

ご覧のとおり、このファイルには、マテリアルタイプ、その後にエンチャント、さらに最小レベルと最大レベル、および確率がリストされています。

これらの設定に他のプラグインからのカスタムマテリアルを追加することはできません。また、作成者がシステムを互換性があると明示的に述べない限り、他のプラグインからのカスタムエンチャントを追加することはできない可能性があります。

エンチャントの設定については：

| キー         |          値          | デフォルト |
|------------|:-------------------:|-------|
| `minLevel` | [Integer](#integer) | 可変    |
| `maxLevel` | [Integer](#integer) | 可変    |
| `chance`   |  [Chance](#chance)  | 可変    |

***

## minLevel

最小エンチャントレベルを設定します。

***

## maxLevel

最大エンチャントレベルを設定します。

***

## chance

エンチャントが発生する確率を設定します。これは、重み付け確率を使用するのではなく、通常のサイコロを振るだけです。
