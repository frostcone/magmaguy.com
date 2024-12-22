[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ワームホールとは？

ワームホールは、非常に効率的なポータル間のテレポートシステムの一種です。ポータルは視覚効果でマークされています。

# ワームホールの仕組み

ワームホールは次のことができます。

* 1つのポータルを通って目的地のポータルに到達し、目的地のポータルから最初のポータルに戻ることができます。
* プレイヤーがワームホールを通過する際に音を鳴らします
* スムーズな移行のために、通過中に一時的にプレイヤーを盲目にします
* テレポートのループに巻き込まれるのを防ぐために、プレイヤーを押し出します
* テレポートのループに巻き込まれるのを防ぐために、5秒間テレポートをロックします
* 手の込んだ視覚効果を表示します
* ワームホールを使用するための権限を必要とします
* ワームホールを使用するために通貨を必要とします
* 目的地のポータルが利用できない場合に、プレイヤーと管理者に通知します

# ワームホールの作成

ワームホールは、ワームホールフォルダに構成ファイルとして追加されます。サブフォルダを作成することもできます。特定のダンジョンのワームホールを追加する場合は、` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName_identifier.yml`
の形式でサブフォルダを作成することをお勧めします。

### 排出

`location1` および `location2` のヨーとピッチ（座標の最後の2桁）は、プレイヤーがワームホールを通過する際にどこから排出されるかを設定します。次の例を見てみましょう。

`location1: my_world,20,10,20,180,20`

ヨーが `180` に設定されている場合、プレイヤーは北を向いて排出され、ピッチが `20`
に設定されている場合は、少し上向きにも排出されます。プレイヤーを排出時にワームホールと同じブロックにとどめたい場合は、ピッチを負の値に設定して、プレイヤーがブロックから滑り落ちないようにすることをお勧めします。

## ワームホール設定

以下は、有効なワームホール設定の例です。

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

ワームホールが有効かどうかを設定します。

| キー          |          値          | デフォルト  |
|-------------|:-------------------:|:------:|
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

### location1

ワームホールの最初の位置を指定します。

| キー          |         値         | デフォルト |
|-------------|:-----------------:|:-----:|
| `location1` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
location1: world_one,50,100,50,0,0
```

</div>

</details>

***

### location2

ワームホールの2番目の位置を指定します。

| キー          |         値         | デフォルト |
|-------------|:-----------------:|:-----:|
| `location2` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
location2: world_two,100,33,100,0,0
```

</div>

</details>

***

### location1Text

最初の位置の表示テキストを設定します。

| キー              |         値         | デフォルト |
|-----------------|:-----------------:|:-----:|
| `location1Text` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
location1Text: ワールド1にあるすごいワームホール
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

2番目の位置の表示テキストを設定します。

| キー              |         値         | デフォルト |
|-----------------|:-----------------:|:-----:|
| `location2Text` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
location2Text: ワールド2にあるすごいワームホール
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

ワームホールを使用するために必要な権限を設定します。

| キー           |         値         | デフォルト |
|--------------|:-----------------:|:-----:|
| `permission` | [String](#string) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
permission: elitemobs.mypermission
```

</div>

</details>

***

### coinCost

ワームホールを使用するためのエリートコインでのコストを設定します。

| キー         |         値         | デフォルト |
|------------|:-----------------:|:-----:|
| `coinCost` | [Double](#double) |  なし   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
coinCost: 2.5
```

</div>

</details>

***

### style

ワームホールの視覚的な形状を設定します。

*これらの形状を構成するパーティクルは、特定のクライアントでラグを引き起こす可能性があります。パーティクルをオフにするには、
**Wormholes.yml** に移動して `noParticlesMode` を `true` に設定します。*

| キー      |                      値                      | デフォルト  |
|---------|:-------------------------------------------:|:------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` | `CUBE` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
style: CRYSTAL
```

<div align="center">

![create_wormhole_style.jpg](../../../img/wiki/create_wormhole_style.jpg)

</div>

</div>

</details>

***

### particleColor

`style` 設定で使用されるパーティクルの色を設定します。

| キー              |                                     値                                      |   デフォルト    |
|-----------------|:--------------------------------------------------------------------------:|:----------:|
| `particleColor` | [`0x` に続けて16進コード](https://www.w3schools.com/colors/colors_hexadecimal.asp) | `0x800080` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
particleColor: 0x9f5cdd
```

<div align="center">

![create_wormhole_particlecolor.jpg](../../../img/wiki/create_wormhole_particlecolor.jpg)

</div>

</div>

</details>

***

### blindPlayer

ポータルがよりスムーズなテレポートのためにプレイヤーを盲目にするかどうかを設定します。

| キー            |          値          |  デフォルト  |
|---------------|:-------------------:|:-------:|
| `blindPlayer` | [Boolean](#boolean) | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
blindPlayer: true
```

<div align="center">

![create_wormhole_blind.jpg](../../../img/wiki/create_wormhole_blind.jpg)

</div>

</div>

</details>

***

### sizeMultiplier

ポータルと `style` で設定された形状のサイズを乗算します。

| キー               |             値             | デフォルト |
|------------------|:-------------------------:|:-----:|
| `sizeMultiplier` | [Multiplier](#multiplier) |  `1`  |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*サイズ乗数を適用した後、ワームホールの Y 座標を調整する必要があることに注意してください。*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>ワームホール設定の例</b></summary>

<div align="left">

この例では、あるワールドから別のワールドに移動する単純なワームホールを作成します。ワームホールは、同じワールド内の別の場所にプレイヤーをテレポートすることもできることを忘れないでください。

```yml
isEnabled: true #この値を true に設定することでワームを有効にします
location1: my_world,1.5,11.0,1.5,108.0,5.0 #これは、ワームホールが my_world に表示される場所です
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #これは、ワームホールが my_other_world に表示される場所です
location1Text: "&aマイワールドへ" #ワームホール location1 の上に素敵な表示テキストを作成します
location2Text: "&aマイアザーワールドへ" #ワームホール location2 の上に素敵な表示テキストを作成します
permission: eliteperm.coolplayers #この権限を持つプレイヤーのみが、location1 と location2 の両方でワームホールを使用できます
coinCost: 2 #プレイヤーは、ワームホールを使用するために 12 個のエリートコインを支払う必要があります
style: CRYSTAL #このワームホールはクリスタルの形状になります
particleColor: 0x00ff00 #これにより、ワームホールのパーティクルが緑色に設定されます
blindPlayer: true #ワームホールのテレポートは、移行をよりスムーズにするために、プレイヤーを短時間盲目にします
sizeMultiplier: 1.0 #ワームホールの形状の大きさを設定します
```

</div>

</details>

#### パフォーマンスの問題

ワームホールのパーティクルは、Bedrock
を実行しているプレイヤーにとってクライアントのパフォーマンスの問題を引き起こす可能性があります。ワームホールのパーティクルをオフにしたい場合は、`~plugins\EliteMobs\Wormholes.yml`
に移動して、`noParticlesMode` 設定を `true` に変更できます。
