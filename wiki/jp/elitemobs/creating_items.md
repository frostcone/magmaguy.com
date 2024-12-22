[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムアイテムの作成

## カスタムアイテムとは？

カスタムアイテムとは、EliteMobsが設定ファイルを通して定義するアイテムのことです。アイテムのレベル、エンチャント、名前、説明文、テクスチャなど、さまざまな側面をカスタマイズできます。

## Webアプリ

カスタムルートは[こちら](https://magmaguy.com/webapp/webapp.html)で簡単かつ迅速に作成できます！

## 始める前に

### カスタムアイテムの保存場所

カスタムアイテムファイルは、設定フォルダ `~/plugins/EliteMobs/customitems` に保存します。

`~/plugins/EliteMobs/customitems/myitems` のようにサブフォルダを作成することもできます。整理するために推奨されます。

ファイルは `.yml` ファイル形式で保存され、設定作業には[Notepad++](https://notepad-plus-plus.org/)
が推奨されるファイル編集ソフトです。1つのファイルが1つのボスを定義しますが、同じボスを複数回スポーンさせたり、同じボスファイルに対して複数のスポーン位置を設定したりすることも可能です。

[Webアプリ](https://magmaguy.com/webapp/webapp.html)を使用すると、カスタムボスなどを迅速かつ簡単に作成できます。

<div align="center">

### 最小限の設定

**カスタムアイテムの最小限の設定ファイルは以下のようになることにご注意ください。**

```yml
```

これは空のファイルです。デフォルトでは「デフォルトの名前」という木の剣を使用します。**このページのすべての項目はオプションです！
**

### アイテムの例

アイテムファイルの例を見てみましょう。

<details> 
<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4テストアイテム'
lore:
- これはクールなアイテムです
- クールな説明文があります
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

## カスタムアイテムの設定

以下は、カスタムアイテムで設定できるすべての項目の一覧です。

<div align="center">

***

### isEnabled

アイテムが有効かどうかを設定します。すでに生成されているアイテムには影響しません。

| キー          |        値         | デフォルト  |
|-------------|:----------------:|--------|
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

| キー         |                                        値                                        | デフォルト          |
|------------|:-------------------------------------------------------------------------------:|----------------|
| `material` | [このリストから選択！](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

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

| キー      |       値        | デフォルト |
|---------|:--------------:|-------|
| `level` | [整数](#integer) | `0`   |

この設定は、アイテムの[`scalability`](#scalability)を `scalable` に設定した場合は関係ありません。`limited`
に設定した場合、これはアイテムの最高レベルになります。

また、素材には最低レベルがあります。鉄素材はレベル6、ダイヤモンド素材はレベル7です。アイテムを素材のレベルより低いレベルに強制することはできません。

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

| キー         |                    値                    | デフォルト      |
|------------|:---------------------------------------:|------------|
| `material` | [カラーコード](#color-codes)付きの[文字列](#string) | "デフォルトの名前" |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
name: "&2クールなアイテム"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

アイテムの説明文を設定します。

| キー     |                   値                   | デフォルト |
|--------|:-------------------------------------:|-------|
| `lore` | [カラーコード](#color-codes)付きの[リスト](#list) | なし    |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
lore:
- "&2これは一番クールな剣です"
- "&2史上最高！"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

アイテムのエンチャントを設定します。

| キー             |                                                                                                値                                                                                                | デフォルト |
|----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------|
| `enchantments` | [Minecraftのエンチャント](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html)または[EliteMobsのカスタムエンチャント]($language$/elitemobs/custom_enchantments_list.md)を含む[リスト](#list) | なし    |

これらのエントリは `エンチャント名:エンチャントレベル` の形式に従うことに注意してください。以下の例を確認してください！

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

また、鋭さなどのエンチャントは、レベルがバニラのMinecraftの制限を超え始めると、デフォルトでエリート鋭さに変化することにも注意してください。

***

### potionEffects

アイテムが持つポーション効果を設定します。これらはプレイヤーまたはプレイヤーがダメージを与えたエンティティに適用できます。

| キー              |                                                          値                                                           | デフォルト |
|-----------------|:--------------------------------------------------------------------------------------------------------------------:|-------|
| `potionEffects` | [Minecraftのポーション効果](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)を含む[リスト](#list) | なし    |

さらに、ポーション効果は、管理者が誰が影響を受けるか、いつ影響を受けるかを選択できる特定の形式を使用します。

| 設定           |                     説明                     |                  値                   | デフォルト |
|--------------|:------------------------------------------:|:------------------------------------:|-------|
| ポーション効果レベル   | ポーション効果のレベルを設定します。**ポーション効果はレベル0から始まります**！ |            [整数](#integer)            | なし    |
| 影響を受けるエンティティ |        ポーション効果の影響を受けるエンティティを設定します。         | `self`（プレイヤー）/ `target`（ヒットしたエンティティ） | なし    |
| 適用方法         |         ポーション効果が適用されるタイミングを設定します。          |    `onHit` / `continuous`（常に再適用）     | なし    |

ポーション効果の形式は `ポーション効果名,ポーション効果レベル,影響を受けるエンティティ,適用方法` です。以下の例を確認してください！

EliteMobsには、チャームとして機能するカスタムアイテムもあります。これらのアイテムは、アイテムが保持されているかスロットに装備されているときに、プレイヤーにポーション効果を提供する以外は何もしません。

警告：INSTANT_DAMAGEポーション効果を使用すると、バニラのMinecraftのデフォルトのメカニズムであるため、アンデッドモブを攻撃時に回復します。

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

このポーション効果のセットアップでは、次のことが起こります。

ヒット時に、毒ポーション効果（レベル1）が、プレイヤーにヒットしたエンティティに適用されます。さらに、プレイヤーはレベル2の即時回復ポーション効果の影響を受けます。

継続的に、プレイヤーには夜間視覚が付与されます。つまり、プレイヤーはアイテムを着用または保持している限り、夜間視覚を持つことになります。

</details>

***

### scalability

アイテムのレベルが、ドロップするボスのレベルに合わせてどのように成長するかを設定します。

| キー            |                       値                       | デフォルト      |
|---------------|:---------------------------------------------:|------------|
| `scalability` | `fixed`、`limited`、または `scalable`。以下を確認してください！ | `scalable` |

さまざまなオプションが何をするかを理解するには、このリストを確認してください！

| 設定         |                           説明                           |
|------------|:------------------------------------------------------:|
| `fixed`    |            アイテムレベルは常に設定ファイルで設定されたレベルになります。             |
| `limited`  | 最大アイテムレベルは、設定ファイルで設定されたレベルまたはボスのレベルのいずれか低い方によって制限されます。 |
| `scalable` |            アイテムのレベルは、ドロップするボスのレベルに完全に依存します。            |

`dropWeight`を持つアイテムは、常に `fixed` スケーラビリティを持つことに注意してください。

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

| キー         |                 値                  | デフォルト    |
|------------|:----------------------------------:|----------|
| `itemType` | `custom` または `unique`。以下を確認してください！ | `custom` |

アイテムタイプには2種類あります。

| 設定       |                                               説明                                                |
|----------|:-----------------------------------------------------------------------------------------------:|
| `custom` |                     アイテムは、ルートをドロップできる任意のEliteMobsモブからドロップでき、カスタムショップにあります。`                     
| `unique` | アイテムはどのボスからもドロップされず、カスタムショップにもありません。入手する唯一の方法は、カスタムボスが `uniqueLootTable` を通してドロップするように設定することです！ |

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

アイテムが収まるルートテーブルを設定します。

| キー           |                  値                  | デフォルト     |
|--------------|:-----------------------------------:|-----------|
| `dropWeight` | `dynamic` または [Double](#double) の値。 | `dynamic` |

EliteMobsには、カスタムボスでの `uniqueLootList` のように直接設定されたものを除いて、カスタムアイテム用の5つの異なるルートテーブルがあります。

これらは次のとおりです。

| ルートテーブル        |               説明               | デフォルトの重み |
|----------------|:------------------------------:|:--------:|
| 手続き的に生成されたアイテム | サーバーの設定ファイルに基づいてランダムに生成されたアイテム |  `90.0`  |
| 重み付けされたアイテム    |     `dynamic` 以外の重みを持つアイテム     |  `1.0`   |
| 固定されたアイテム      |       固定スケーラビリティを持つアイテム        |  `10.0`  |
| 限定的なアイテム       |       限定スケーラビリティを持つアイテム        |  `3.0`   |
| スケーラブルなアイテム    |          スケーラブルなアイテム           |  `6.0`   |

ボスが死亡すると、ItemSettings.yml設定ファイルに基づいて、これらのテーブルから1つのアイテムが選択されます。重みのデフォルトは上記の「デフォルトの重み」にリストされています。重みが大きいほど、アイテムがドロップする可能性が高くなります。

`重み付けされたアイテム` は `デフォルトの重み` が小さいため、あまりドロップしません。`dynamic` ではない `dropWeight`
を持つアイテムは珍しいことを意図しており、主にボスがドロップするチャームのデフォルトで使用されます。戦闘に直接使用するアイテムではなく、ポーション効果でプレイヤーをバフするために使用されます。

ここに設定した `dropWeight` は、`重み付けされたアイテム` のリストから特定の `重み付けされたアイテム`
がドロップする確率を設定します。`重み付けされたアイテム` のドロップ確率を上げるものではありません。

**混乱していて、武器と防具を作成したい場合は、この設定はデフォルトの `dynamic` に正しく設定されているため、スキップしてください。
**

`重み付けされたアイテム` は通常、1.0の重みを持っています。

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

アイテムのテクスチャを設定します。リソースパックからの有効なテクスチャを使用する必要があります！

| キー              |       値        | デフォルト |
|-----------------|:--------------:|-------|
| `customModelID` | [整数](#integer) | なし    |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

これにより、プレイヤーが使用しているリソースパックからのダイヤモンドの剣のカスタムテクスチャ1が使用されます。この機能を正しく使用したい場合は、ログイン時にプレイヤーにリソースパックを与えるようにサーバーを設定することをお勧めします。

</details>

***

### customModelV2

Minecraftバージョン1.21.4（EM 9.1.13）から、これがカスタムアイテムモデルIDを設定するための新しい必須設定です。
アイテムのテクスチャを設定します。リソースパックからの有効なテクスチャを使用する必要があります！

| キー              |       値        | デフォルト |
|-----------------|:--------------:|-------|
| `customModelV2` | [文字列](#string) | なし    |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
customModelV2: elitemobs:equipment/magmaguys_toothpick
```

この設定は、特定のテクスチャをアイテムに割り当てます。仕組みは次のとおりです。

- `elitemobs:` は、リソースパックの `assets` フォルダのメインディレクトリです。
- `equipment` は、`assets/elitemobs/models` 内のサブディレクトリです。
- `magmaguys_toothpick` は、リソースパックの `assets/elitemobs/models/equipment` にあるモデルファイルです。

この例のモデルファイルのフルパスは次のようになります。
`\.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\equipment\magmaguys_toothpick.json`

</div>

これにより、プレイヤーが使用しているEliteMobsリソースパックからカスタムテクスチャ `magmaguys_toothpick`
が使用されます。この機能を正しく使用したい場合は、ログイン時にプレイヤーにリソースパックを与えるようにサーバーを設定することをお勧めします。

</details>

***

### permission

アイテムを取得するために必要な権限を設定します。

| キー           |       値        | デフォルト |
|--------------|:--------------:|-------|
| `permission` | [文字列](#string) | なし    |

プレイヤーに権限を与えるには、権限管理プラグインが必要です。これは、ソウルバインドエンチャントを無効にしていない場合にのみ正しく機能します。

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

この設定では、`elitemobs.cool.permission` の権限を持つプレイヤーのみがこのアイテムを取得できます。

</details>

***

### soulbound

アイテムをドロップ時にソウルバインドする必要があるかどうかを設定します。

| キー          |        値         | デフォルト  |
|-------------|:----------------:|--------|
| `soulbound` | [ブール値](#boolean) | `true` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>

</div>
