```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムアイテムの作成

## カスタムアイテムとは？

カスタムアイテムは、EliteMobs によって設定ファイルで定義されたアイテムです。これらのアイテムについて、レベル、エンチャント、名前、説明文、テクスチャなどをカスタマイズできます！

## Webapp

カスタム loot を簡単にすばやく作成できます [こちら](https://magmaguy.com/webapp/webapp.html)!

## 開始前に

### カスタムアイテムはどこに置くか？

カスタムアイテムファイルは、`~/plugins/EliteMobs/customitems` という設定フォルダに置きます。

`~/plugins/EliteMobs/customitems/myitems` などのサブフォルダを作成することもできます。これは、整理整頓のために推奨されます。

ファイルは `.yml` ファイル形式で保存されます。設定作業には、[Notepad++](https://notepad-plus-plus.org/) が推奨されるファイル編集ソフトウェアです。1 つのファイルで 1 つのアイテムを定義しますが、同じアイテムを複数回スポーンしたり、同じアイテムファイルに複数のスポーン位置を設定したりすることもできます。

[webapp](https://magmaguy.com/webapp/webapp.html) を使用すると、カスタムボスなどをすばやく簡単に作成できます。

<div align="center">

### 最小限の構成

**カスタムアイテムの最小限の構成ファイルは次のとおりです。**

```yml
```

空のファイルであることに注意してください。これでも、デフォルトで「Default name」という名前の、木の剣が使用されます。**このページのすべてはオプションです！**

### アイテムの例

アイテムファイルの例を見てみましょう。

<details> 
<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Test item'
lore:
- This is a cool item
- It has cool lore
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

##  カスタムアイテムの設定

以下は、カスタムアイテムで設定できる項目のリストです。

<div align="center">

***

### isEnabled

アイテムを有効にするかどうかを設定します。すでに生成されたアイテムには影響しません。

| キー | 値 | デフォルト |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

アイテムの素材を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `material` | [こちらから選択！](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

アイテムのレベルを設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `level` | [Integer](#integer) | `0` |

アイテムの [`scalability`](#scalability) を `scalable` に設定した場合、この設定は関連しません。`limited` に設定した場合、これがアイテムの最高レベルになります。

また、素材には最低レベルがあります。鉄素材はレベル6、ダイヤモンド素材はレベル7です。素材のレベルよりも低いレベルのアイテムを強制的に作成することはできません。

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

アイテムの表示名を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `material` | [String](#string) と [カラーコード](#color-codes) を使用 | "Default name" |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&2Cool item"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

アイテムの説明文を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `lore` | [List](#list) と [カラーコード](#color-codes) を使用 | none |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
lore:
- "&2This is the coolest sword"
- "&2of all time!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

アイテムのエンチャントを設定します。

| キー |                                                                                                       値                                                                                                        | デフォルト |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [List](#list) と [Minecraft のエンチャント](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) または [EliteMobs のカスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md) を使用 | none |

これらのエントリは、`enchantmentName:enchantmentLevel` 形式に従います。下記の例を確認してください。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
enchantments: 
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

また、シャープネスなどのエンチャントは、レベルが vanilla Minecraft の制限を超えると、デフォルトで Elite シャープネスになります。

***

### potionEffects

アイテムに与えるポーション効果を設定します。これらの効果は、プレイヤーに適用することも、プレイヤーによってダメージを受けたエンティティに適用することもできます。

| キー | 値 | デフォルト |
|-|:-:|-|
| `potionEffects` | [List](#list) と [Minecraft のポーション効果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html) を使用 | none |

さらに、ポーション効果は、プレイヤーに適用される対象とタイミングを選択できる特定の形式を使用します。

| 設定 | 説明 | 値 | デフォルト |
|-|:-:|:-:|-|
| ポーション効果レベル | ポーション効果のレベルを設定します。**ポーション効果はレベル 0 から始まります！** | [Integer](#integer) | none |
| 影響を受けるエンティティ | ポーション効果の影響を受ける対象を設定します。 | `self`（プレイヤー）/ `target`（攻撃を受けたエンティティ） | none |
| 適用方法 | ポーション効果が適用されるタイミングを設定します。 | `onHit` / `continuous`（継続的に再適用） | none |

ポーション効果の形式は、`potionEffectName,potionEffectLevel,affectedEntity,applicationMethod` です。下記の例を確認してください。

EliteMobs には、チャームとして機能するカスタムアイテムもあります。これらのアイテムは、プレイヤーがアイテムを所持している場合またはスロットに装備している場合に、プレイヤーにポーション効果を与える以外の効果はありません。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
potionEffects: 
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

このポーション効果の設定で、次のことが起こります。

攻撃時に、ポイズンポーション効果（レベル1）が攻撃を受けたエンティティに適用されます。また、プレイヤーにはレベル2の即時回復ポーション効果が適用されます。

継続的に、プレイヤーにナイトビジョンが与えられます。これは、プレイヤーがアイテムを着用または所持している間、ナイトビジョンが有効になることを意味します。

</details>

***

### scalability

アイテムのレベルが、アイテムをドロップするボスのレベルとともにどのように成長するかを設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `scalability` | `fixed`、`limited`、または `scalable`。下記を確認してください！ | scalable |

このリストを確認して、さまざまなオプションがどのように機能するかを理解してください。

| 設定 | 説明 |
|-|:-:|
| `fixed` | アイテムのレベルは、常に設定ファイルで設定されたレベルになります。 |
| `limited` | アイテムの最大レベルは、設定ファイルで設定されたレベルまたはボスのレベルのどちらか低い方のレベルになります。 |
| `scalable` | アイテムのレベルは、アイテムをドロップするボスのレベルに完全に依存します。 |

`dropWeight` が設定されているアイテムは、常に `fixed` スケーラビリティになります。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

アイテムを入手できる場所を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `itemType` | `custom` または `unique`。下記を確認してください！ | `custom` |

アイテムタイプには 2 種類あります。

| 設定 | 説明 |
|-|:-:|
| `custom` | アイテムは、loot をドロップできるすべての EliteMobs モブからドロップされ、カスタムショップに表示されます。 `
| `unique` | アイテムは、どのボスからもドロップされず、カスタムショップには表示されません。アイテムを入手するには、カスタムボスで `uniqueLootTable` を設定して、アイテムをドロップするように構成する必要があります。 |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

アイテムが収まる loot table を設定します。

| キー |                  値                  | デフォルト |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` または [Double](#double) 値 | `dynamic` |

EliteMobs には、カスタムアイテム用の 5 つの loot table があります。これは、カスタムボスの `uniqueLootList` のように直接構成されているものを除きます。

これらは次のとおりです。

| loot table | 説明 | デフォルトの重み |
|-|:-:|:-:|
| 処理で生成されたアイテム | サーバー設定ファイルに基づいてランダムに生成されるアイテム | `90.0` |
| 重み付けされたアイテム | `dynamic` 以外の重みを持つアイテム | `1.0` |
| 固定アイテム | スケーラビリティが固定されているアイテム | `10.0` |
| 制限付きアイテム | スケーラビリティが制限されているアイテム | `3.0` |
| スケーラブルなアイテム | スケーラブルなアイテム | `6.0` |

ボスが死亡すると、`ItemSettings.yml` 設定ファイルに基づいて、これらのテーブルから 1 つのアイテムが選択されます。重みのデフォルト値は上記に `Default weight` として示されています。重みが大きいほど、アイテムがドロップする確率が高くなります。

`重み付けされたアイテム` は、`Default weight` が小さいため、あまりドロップしません。`dropWeight` が `dynamic` ではないアイテムは、レアアイテムとして設計されており、チャームボスがドロップするデフォルトアイテムでのみ使用されます。これは、戦闘に直接使用されるのではなく、プレイヤーにポーション効果を与えるために使用されるアイテムです。

ここで設定する `dropWeight` は、`重み付けされたアイテム` のリストから、特定の `重み付けされたアイテム` がドロップされる確率を設定します。`重み付けされたアイテム` のドロップ率を高めるものではありません。

**混乱している場合、武器やアーマーを作成するだけなら、この設定をスキップしてください。これは、正しくデフォルトで `dynamic` に設定されています。**

`重み付けされたアイテム` は、通常、1.0 の重みを持っています。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

アイテムのテクスチャを設定します。リソースパックから有効なテクスチャを使用する必要があります！

| キー | 値 | デフォルト |
|-|:-:|-|
| `customModelID` | [Integer](#integer) | none |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

これは、プレイヤーが使用しているリソースパックから、ダイヤモンドの剣のカスタムテクスチャ 1 を使用します。この機能を正しく使用するには、サーバーを、ログイン時にプレイヤーにリソースパックを提供するように設定することをお勧めします。

</details>

***

### permission

アイテムを入手するために必要な権限を設定します。

| キー | 値 | デフォルト |
|-|:-:|-|
| `permission` | [String](#string) | none |

権限をプレイヤーに付与するには、権限管理プラグインが必要です。これは、ソウルバインドエンチャントを無効にしていない場合にのみ正しく機能します。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

この設定では、`elitemobs.cool.permission` 権限を持つプレイヤーのみがアイテムを入手できます。

</details>

***

### soulbound

アイテムをドロップ時にソウルバインドするかどうかを設定します。

| キー |       値        | デフォルト |
|-|:-------------------:|---------|
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


```

