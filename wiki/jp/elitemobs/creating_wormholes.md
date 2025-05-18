はい、承知いたしました。入力されたテキストを日本語に翻訳し、Markdownの書式設定を維持します。

[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ワームホールとは？

ワームホールは、ポータル間を非常に効率的にテレポートするシステムの一種です。ポータルは視覚効果でマークされています。

# ワームホールの仕組み

ワームホールは以下のことができます：

*   一方のポータルを通って目的地のポータルに到達し、目的地のポータルから最初のポータルに戻る。
*   プレイヤーが通過する際に音を鳴らす
*   通過中にプレイヤーを一時的に盲目にして、スムーズな移行を実現する
*   テレポートループに巻き込まれるのを避けるためにプレイヤーを押し出す
*   テレポートループに巻き込まれるのを避けるために、プレイヤーを5秒間テレポートからロックアウトする
*   凝った視覚効果を再生する
*   ワームホールを使用するために権限を要求する
*   ワームホールを使用するために通貨の使用を要求する
*   目的地のポータルが利用できない場合にプレイヤーと管理者に通知する

# ワームホールの作成

ワームホールは、wormholesフォルダに設定ファイルとして追加されます。サブフォルダを作成することも可能で、特定のダンジョン用のワームホールを追加する場合は、\` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml\` の形式で作成することをお勧めします。

### 射出

\`location1\` と \`location2\` のYawとPitch（座標の最後の2桁）は、プレイヤーがワームホールを通過する際にどこに射出されるかを設定します。この例を見てみましょう：

\`location1: my\_world,20,10,20,180,20\`

Yawが\`180\`に設定されている場合、プレイヤーは北を向いて射出され、Pitchが\`20\`に設定されている場合、わずかに上向きに射出されます。射出時にプレイヤーがワームホールと同じブロックに留まるようにしたい場合は、プレイヤーがブロックから滑り落ちないようにPitchを負の値に設定することをお勧めします。

## ワームホール設定
以下は有効なワームホール設定の例です：

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

ワームホールが有効かどうかを設定します。

| キー        |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
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

### location1

ワームホールの最初の場所を指定します。

| キー        |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
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

ワームホールの2番目の場所を指定します。

| キー          |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
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

最初の場所の表示テキストを設定します。

| キー          |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `location1Text` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
location1Text: Awesome Wormhole In World One
```

<div align="center">

![create_wormhole_location1text.jpg](../../../img/wiki/create_wormhole_location1text.jpg)

</div>

</div>

</details>

***

### location2Text

2番目の場所の表示テキストを設定します。

| キー          |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `location2Text` | [String](#string) |  なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
location2Text: Awesome Wormhole In World Two
```

<div align="center">

![create_wormhole_location2text.jpg](../../../img/wiki/create_wormhole_location2text.jpg)

</div>

</div>

</details>

***

### permission

ワームホールを使用するために必要な権限を設定します。

| キー          |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
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

ワームホールを使用するためのコスト（エリートコイン）を設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
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

*これらの形状を構成するパーティクルは、特定のクライアントでラグを引き起こす可能性があります。パーティクルをオフにするには、**Wormholes.yml** に移動し、\`noParticlesMode\` を \`true\` に設定してください。*

| キー      |               値               | デフォルト |
|---------|:---------------------------------:|:-------:|
| `style` | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` |  `CUBE`   |

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

\`style\` 設定で使用されるパーティクルの色を設定します。

| キー           |                                       値                                        | デフォルト |
|--------------|:-----------------------------------------------------------------:|:-------:|
| `particleColor` | [\`0x\` に続けて16進コード](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

ポータルがプレイヤーを盲目にして、よりスムーズなテレポートを実現するかどうかを設定します。

| キー          |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
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

ポータルと\`style\`で設定された形状のサイズを乗算します。

| キー             |        値         | デフォルト |
|----------------|:----------------------:|:-------:|
| `sizeMultiplier` | [Multiplier](#multiplier) |   `1`   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*サイズ乗数を適用した後、ワームホールのY座標を調整する必要があることに注意してください。*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>ワームホール設定例</b></summary>

<div align="left">

この例では、あるワールドから別のワールドへ移動するシンプルなワームホールを作成します。ワームホールは、同じワールド内の別の場所にプレイヤーをテレポートすることもできることを忘れないでください。

```yml
isEnabled: true #この値をtrueに設定することでワームホールを有効にします
location1: my_world,1.5,11.0,1.5,108.0,5.0 #my_worldにワームホールが出現する場所です
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #my_other_worldにワームホールが出現する場所です
location1Text: "&aGo to My World" #ワームホール location1 の上に素敵な表示テキストを作成します
location2Text: "&aGo to My Other World" #ワームホール location2 の上に素敵な表示テキストを作成します
permission: eliteperm.coolplayers #この権限を持つプレイヤーのみが、location1とlocation2の両方でワームホールを使用できます
coinCost: 2 #プレイヤーはワームホールを使用するために12エリートコインを支払う必要があります
style: CRYSTAL #このワームホールはクリスタルの形状になります
particleColor: 0x00ff00 #これによりワームホールパーティクルが緑色に設定されます
blindPlayer: true #ワームホールのテレポートは、移行をよりスムーズにするために短時間プレイヤーを盲目にします
sizeMultiplier: 1.0 #ワームホールの形状の大きさを設定します
```

</div>

</details>

#### パフォーマンスの問題

ワームホールのパーティクルは、Bedrock版を実行しているプレイヤーのクライアントパフォーマンスに問題を引き起こす可能性があります。ワームホールのパーティクルをオフにしたい場合は、\`~plugins\EliteMobs\Wormholes.yml\` に移動し、\`noParticlesMode\` 設定を \`true\` に変更してください。