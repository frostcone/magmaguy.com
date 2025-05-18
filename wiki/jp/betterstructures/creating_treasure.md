日本語に翻訳します。Markdown形式は維持します。

```markdown
# トレジャーファイルとは？

トレジャーファイルは、BetterStructuresのチェストのルートテーブルを決定するものです。通常、
[ジェネレーター]($language$/betterstructures/creating_generators.md&section=treasurefilename)に割り当てられますが、
[個別のビルド設定]($language$/betterstructures/creating_structures.md&section=treasurefile)のレベルで設定することも可能です。

これらのルートテーブルは非常に強力ですが、理解するためにはいくつかの基本的な統計概念の知識も必要です。

<details>
<summary>
これらの概念についてここで読みましょう。このページの残りの部分は、あなたがそれらを理解していることを前提としています！
</summary>

***重み付き確率***

BetterStructuresとEliteMobsは、重み付き確率の概念を頻繁に使用します。これは、単純な問題を解決するためです。潜在的に無限のアイテムリストから1つのアイテムを選ぶ確率をどのように設定できるでしょうか？

重み付き確率は、各アイテムに重みを与えることでこの問題を解決します。100個のアイテムがあり、それぞれに重み1が与えられている場合、それらはすべて等しい確率（1%）で選ばれます。アイテムをもう1つ追加して合計101個にし、その最後のアイテムに重み1を与えた場合、すべてのアイテムは依然として同じ確率（約0.99%）で選ばれます。最後のアイテムに重み2を与えた場合、それが選ばれる確率は増加します。新しい合計重みは102になり、最後の要素の重みは2、100/102 = 約0.98%なので、0.98%+0.98% = 1.96%の確率で選ばれます。最後のアイテムに重み100を与えた場合、新しい重みは200になり、その重みの半分が新しいアイテムであるため、新しいアイテムは50%の確率で選ばれます。

このように、これは数百ものものをランダム化するリストがある場合に便利です。

***ガウス分布***

ガウス分布は、ベル型の数学関数です。

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

これがルートシステムにどのように関連するのか疑問に思うかもしれません。BetterStructuresがチェストにルートを設定する際に決定しなければならないことの1つは、それらのチェストにどれだけのルートが出現するかということです。その量は特定の数値の周りで一貫しているべきですが、チェストを開けることがあまり予測可能にならないように、理想的にはそれほど予測可能であってはなりません。

この半ランダムな効果を達成するために、ガウス分布は*いくつの*アイテムが選ばれるかをランダム化するために使用されます。この量が選ばれたら、*重み付き確率*がレアリティテーブルから重みを考慮してランダムに1つの要素を選びます。

では、ガウス分布はどのように機能するのでしょうか？

幸いなことに、その背後にある数学がどのように機能するかを心配する必要はなく、代わりにそれを変更する2つの設定、平均と標準偏差に焦点を当てることができます。

*平均 (Mean)*

簡単に言えば、`mean`はガウス曲線の中心を設定します。これは、チェストに出現するアイテムの最も可能性の高い量を設定することを意味します。基本的に、チェストに通常5つのアイテムを持たせたい場合は、平均を5に設定します。

*標準偏差 (Standard deviation)*

チェスト内のアイテムの平均数が5だと想像してください。`standard deviation`は、この数値がチェストごとにどれだけ変化するかを決定するのに役立ちます。

小さい`Standard Deviation`（例：1）：これは、ほとんどのチェストが平均に非常に近いアイテム数、例えば4、5、または6個を持つことを意味します。より予測可能な体験です。例えば、チェストの標準偏差が1の場合、ほとんどすべてのチェストに4〜6個のアイテムがあることを期待できます。

中程度の`Standard Deviation`（例：2）：ここでは、より多様性があります。チェストには3〜7個のアイテムがあるかもしれません。5個のアイテムは依然として一般的ですが、少し多かったり少なかったりするチェストを見つけることは珍しくありません。したがって、標準偏差が2の場合、たまに3個しかアイテムがないチェストを見つけたり、運が良ければ7個のアイテムがあるチェストを見つけたりするかもしれません。

大きい`Standard Deviation`（例：3以上）：これで物事が本当に驚くべきものになります！チェストには2個しかアイテムがないこともあれば、8個以上あることもあります。これは、アイテムがほんの数個しかないチェストを見つけるかもしれないが、お宝が詰まったチェストを見つけるチャンスもあることを意味します。例えば、標準偏差が3の場合、チェストには2個から8個までのアイテムがある可能性があり、各チェストを開けるのがエキサイティングなギャンブルになります。

***デフォルトの平均は4、デフォルトの標準偏差は3です。***

</details>

***

# 特殊なフォーマット

トレジャーファイルには、次のような特殊なフォーマットがあります。

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

*注：これはファイルの非常に簡略化されたバージョンです。実際のファイルは、はるかに多くのルートとすべての可能なエンチャントをカバーしているため、2599行あります。*

# isEnabled

| キー        |       値        | デフォルト |
|-------------|:-------------:|---------|
| `isEnabled` | [Boolean](#boolean) | `true`  |

***

# mean

| キー   |      値       | デフォルト |
|--------|:-----------:|---------|
| `mean` | [Double](#double) | `4`     |

`mean`を設定します。詳細については[こちら](https://magmaguy.com/wiki.html#lang=ja&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)をお読みください。

***

# standardDeviation

| キー                 |      値       | デフォルト |
|----------------------|:-----------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

`standardDeviation`を設定します。詳細については[こちら](https://magmaguy.com/wiki.html#lang=ja&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)をお読みください。

***

# items

ここは少し複雑になります。なぜなら、多くのオプションは管理者が設定できるからです。先ほどの構成ファイルの例を詳しく見てみましょう。

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

ここで、`items`構成キーの下に`common`と`rare`を含むマップがあることがわかります。これらは`rarities`（レアリティ）です！
***

## レアリティ

レアリティに固定の名前はありません。同じフォーマットを使用している限り、追加または削除したり、好きなだけカスタマイズしたりできます。

これらのレアリティテーブルをよりレアにするかそうでないかは、ルートテーブルの`weight`であることに注意してください！

デフォルトでは：
- `common`のデフォルトの`weight`は60です。
- `rare`のデフォルトの`weight`は30です。
- `epic`のデフォルトの`weight`は10です。

これにより、コモンアイテムはエピックアイテムよりも6倍ドロップしやすくなります。`weight`については[こちら](https://magmaguy.com/wiki.html#lang=ja&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)で詳しく読むことができます！

重みとは別に、各レアリティテーブルには独自の`items`リストがあります。

***

### レアリティアイテム

レアリティアイテムは[マップリスト](https://magmaguy.com/wiki.html#lang=ja&article=global+configuration_file_guide.md&section=map-list)であり、レアリティテーブルが持つすべてのアイテムをリストアップします。

これらのアイテムには以下の設定があります。

| キー                               |           値            | デフォルト |
|------------------------------------|:-----------------------:|---------|
| `amount`                           | min-max [Integer](#integer) | 可変     |
| `material`                         |    [Material](#Material)    | 可変     |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | 可変     |
| `weight`                           |      [Double](#double)      | 可変     |

***

#### amount

***

ドロップする量を設定します。これは`amount: MIN-MAX`のように範囲で表現されます。例として、1〜5個のアイテムをドロップするには、`amount: 1-5`とします。

#### material

ドロップする可能性のあるアイテムの[Spigot API名](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)を使用してマテリアルを設定します。

***

##### 特殊ケース - シリアライズされた

lootifyコマンドを使用する場合、マテリアルの代わりに`serialized`設定が提供されます。これはプラグインによって自動的に生成されるものであり、手動で生成すべきではありません。これは人間が読める形式ではありません。

***

#### weight

重み付き確率の重みを設定します。詳細については[こちら](https://magmaguy.com/wiki.html#lang=ja&article=betterstructures+creating_treasure.md&section=what-is-a-treasure-file?)をご覧ください。

***

#### procedurallyGenerateItems

`procedurallyGeneratedItemSettings`の設定に基づいて、アイテムをプロシージャルに生成するかどうかを設定します。設定によっては、これによってエンチャントなしでアイテムが生成される場合があることに注意してください。

# procedurallyGeneratedItemSettings

もう一度、構成ファイルの例を見てみましょう。

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

ご覧のように、このファイルにはマテリアルタイプがリストされ、次にエンチャント、そして最小レベル、最大レベル、確率が続きます。

これらの設定に他のプラグインからのカスタムマテリアルを追加することはできません。また、他のプラグインからのカスタムエンチャントを追加することも、その作者が明示的にシステムを互換性があるように作成したと言わない限り、おそらくできません。

エンチャント設定については以下の通りです。

| キー        |       値        | デフォルト |
|-------------|:-------------:|---------|
| `minLevel` | [Integer](#integer) | 可変     |
| `maxLevel` | [Integer](#integer) | 可変     |
| `chance`   |  [Chance](#chance)  | 可変     |

***

## minLevel

最小エンチャントレベルを設定します。

***

## maxLevel

最大エンチャントレベルを設定します。

***

## chance

エンチャントが発生する確率を設定します。これは重み付き確率ではなく、通常のサイコロの出目を使用します。
```