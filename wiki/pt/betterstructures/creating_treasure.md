```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 宝箱ファイルとは？

宝箱ファイルは、BetterStructures のチェストの loot テーブルを決定するものです。通常、[ジェネレーター]($language$/betterstructures/creating_generators.md&section=treasurefilename) に割り当てられますが、[個々のビルド構成]($language$/betterstructures/creating_structures.md&section=treasurefile) のレベルで設定することもできます。

これらの loot テーブルは非常に強力ですが、理解するには、基本的な統計の概念をある程度知っておく必要があります。

<details>
<summary>
これらの概念については、こちらをご覧ください。ページの残りの部分では、これらの概念を理解していることを前提としています。
</summary>

***加重確率***

BetterStructures と EliteMobs では、頻繁に加重確率の概念を使用します。これは、潜在的に無限のアイテムリストから 1 つのアイテムを選択する確率をどのように設定するかという、単純な問題を解決するためです。

加重確率は、各アイテムに重みを付けることで、この問題を解決します。100 個のアイテムがあり、それぞれが 1 の重みを持っている場合、すべてのアイテムは、同じ確率（1%）で選択されます。1 つのアイテムを追加して合計を 101 個にすると、最後のアイテムに 1 の確率を与えても、すべてのアイテムは同じ確率（約 0.99%）で選択されます。最後のアイテムに 2 の重みを付けると、選択される確率が上昇します。新しい合計の重みは 102 で、最後の要素の重みは 2、100/102 = 約 0.98% で、0.98% + 0.98% = 1.96% の確率で選択されます。最後のアイテムに 100 の重みを付けると、新しい重みは 200 になり、その重みの半分が新しいアイテムなので、新しいアイテムは 50% の確率で選択されます。

ご覧のとおり、これは、数百ものものをランダム化する必要がある場合に適しています。

***ガウス分布***

ガウス分布は、釣鐘型の数学関数です。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

これは、loot システムとどのように関係しているのでしょうか？BetterStructures は、チェストの loot を設定する際に、チェストに表示される loot の量を決定する必要があります。量は特定の数値の周囲に一貫して存在する必要がありますが、理想的には、チェストを開けるのがあまりにも予測可能にならないように、チェストを開けるのがそれほど面白くなくなるようにします。

この半ランダムな効果を得るために、ガウス分布を使用して、*選択するアイテムの数* をランダム化します。この数が選択されると、*加重確率* によって、rarety テーブルから 1 つの要素がランダムに選択され、重みが考慮されます。

では、ガウス分布はどのように機能するのでしょうか？

幸いなことに、その仕組みを理解する必要はありません。代わりに、それを修正する 2 つの設定、平均と標準偏差に焦点を当てることができます。

*平均*

簡単に言うと、`mean` はガウス曲線の真ん中を設定します。つまり、チェストに表示される可能性が最も高いアイテムの数を設定します。基本的に、チェストに通常 5 つのアイテムを入れたい場合は、平均を 5 に設定します。

*標準偏差*

チェスト内のアイテムの平均数を 5 とします。`standard deviation` は、この数が、チェストごとにどれだけ変化できるかを決定するのに役立ちます。

`標準偏差` が小さい（例：1）場合: これは、ほとんどのチェストが、平均値に近い、4、5、または 6 個のアイテムを持っていることを意味します。これは、より予測可能な経験です。たとえば、チェストの標準偏差が 1 の場合、ほとんどのチェストに 4 つから 6 つのアイテムが含まれていると予想できます。

`標準偏差` が中程度（例：2）の場合: ここでは、より多くのバリエーションがあります。チェストには、3 つから 7 つのアイテムが含まれている可能性があります。5 つのアイテムが最も一般的ですが、少し多い、または少ないアイテムが含まれているチェストを見つけるのも珍しいことではありません。そのため、標準偏差が 2 の場合、たまに 3 つのアイテムしか入っていないチェストを見つけたり、運が良ければ、7 つのアイテムが入っているチェストを見つけたりすることもあります。

`標準偏差` が大きい（例：3 以上）場合: これで、本当に驚くべきことに！チェストには、わずか 2 つのアイテムから 8 つ以上のアイテムまで、さまざまなアイテムが含まれている可能性があります。つまり、ほんの数アイテムしかないチェストが見つかることもありますが、たくさんの goodies が詰まっているチェストが見つかる可能性もあります。たとえば、標準偏差が 3 の場合、チェストには 2 から 8 つのアイテムが含まれており、チェストを開けるたびにエキサイティングな賭けになります。

***デフォルトの平均値は 4、標準偏差は 3 です。***

</details>

***

# 特殊な形式

宝箱ファイルには、次の特殊な形式があります。

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

*注意: これは、非常に簡略化されたバージョンです。実際には 2599 行あり、loot とすべての可能なエンチャントがはるかに多く含まれています。*

# isEnabled

| キー |       値        | デフォルト |
|-|:-------------------:|-|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| キー    |      値       | デフォルト |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

`mean` を設定します。詳細については、[こちら](#what-is-a-treasure-file) をご覧ください。

***

# standardDeviation

| キー                 |      値       | デフォルト |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

`standardDeviation` を設定します。詳細については、[こちら](#what-is-a-treasure-file) をご覧ください。

***

# items

これは、多くのオプションを管理者が設定できるため、少し複雑な部分です。前の設定ファイルの例を拡大して見てみましょう。

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

この例では、`items` 設定キーの下に、`common` と `rare` の map があることがわかります。これらは `rarity` です！
***

## rarities

rarity には、固定された名前はありません。同じ形式を使用する限り、自由に追加したり、削除したり、カスタマイズしたりできます。

これらの rarity テーブルがどれほどレアになるかは、loot テーブルの `weight` によって決まります！

デフォルトでは、
- `common` のデフォルトの `weight` は 60 です。
- `rare` のデフォルトの `weight` は 30 です。
- `epic` のデフォルトの `weight` は 10 です。

これにより、common アイテムは、epic アイテムよりも 6 倍ドロップする確率が高くなります。[`weight` についての詳細はこちらをご覧ください](#what-is-a-treasure-file)！

weight 以外にも、各 rarity テーブルには、独自の `items` リストがあります。

***

### rarity アイテム

rarity アイテムは、[map リスト]($language$/global/configuration_file_guide.md&section=map_list) で、rarity テーブルにあるすべてのアイテムをリストします。

これらのアイテムには、次の設定が含まれています。

| キー                                |           値            | デフォルト  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

ドロップする数を設定します。これは、`amount: MIN-MAX` のように、範囲で表されます。たとえば、1 つから 5 つのアイテムをドロップするには、`amount: 1-5` とします。

#### material

ドロップされる可能性のあるアイテムの素材を、[Spigot API の名前](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) を使用して設定します。

***

##### 特殊なケース - シリアル化

lootify コマンドを使用する場合、material の代わりに、lootify は `serialized` 設定を提供します。これはプラグインによって自動的に生成されるため、手動で生成しないでください。これは、人間が読み取れない形式です。

***

#### weight

加重確率の重みを設定します。詳細については、[こちら](#what-is-a-treasure-file) をご覧ください。

***

#### procedurallyGenerateEnchantments

`procedurallyGeneratedItemSettings` にある設定に基づいて、アイテムを処理で生成するかどうかを設定します。設定に基づいて、エンチャントなしでアイテムが生成される場合があります。


# procedurallyGeneratedItemSettings

設定ファイルの例をもう一度見てみましょう。

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

ご覧のとおり、このファイルには、素材タイプ、エンチャント、最小レベルと最大レベル、確率がリストされています。

他のプラグインから、カスタム素材をこれらの設定に追加することはできません。また、他のプラグインの作者が、明示的にシステムを互換性があると宣言していない限り、他のプラグインのカスタムエンチャントを追加できない可能性があります。

エンチャントの設定については、次のとおりです。

| キー        |       値        | デフォルト  |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variable |
| `maxLevel` | [Integer](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

エンチャントの最小レベルを設定します。

***

## maxLevel

エンチャントの最大レベルを設定します。

***

## chance

エンチャントが発生する確率を設定します。これは、加重確率ではなく、通常のサイコロのロールです。

```



