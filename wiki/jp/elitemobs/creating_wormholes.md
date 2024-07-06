```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ワープホールとは？

ワープホールは、非常に効率的なポータル間テレポートシステムです。ポータルは、ビジュアルエフェクトでマークされています。

# ワープホールのメカニズム

ワープホールは、次のことができます。

*   1 つのポータルを通過して目的地ポータルに到達し、目的地ポータルから最初のポータルに戻る。
*   プレイヤーが通過したときに音を再生する。
*   通過時にプレイヤーを一時的に盲目にすることで、スムーズな移行を実現する。
*   テレポートループに巻き込まれないように、プレイヤーを押し出す。
*   テレポートループに巻き込まれないように、プレイヤーを 5 秒間テレポートからロックする。
*   凝ったビジュアルエフェクトを再生する。
*   ワープホールを使用するために権限を要求する。
*   ワープホールを使用するために通貨の使用を要求する。
*   目的地ポータルが使用できない場合に、プレイヤーと管理者に通知する。

# ワープホールの作成

ワープホールは、`wormholes` フォルダに設定ファイルとして追加されます。サブフォルダを作成することもでき、特定のダンジョンのワープホールを追加する場合は、`~/plugins/EliteMobs/wormholes/dungeonName/dungeonName_identifier.yml` の形式でサブフォルダを作成することをお勧めします。

### 排出

`location1` と `location2` のヨーとピッチ（座標の最後の 2 桁）は、プレイヤーがワープホールを通過したときにワープホールから排出される場所を設定します。次の例を見てみましょう。

`location1: my_world,20,10,20,180,20`

ヨーが `180` に設定されていると、プレイヤーは北を向いて排出されます。ピッチが `20` に設定されていると、プレイヤーはわずかに上に排出されます。プレイヤーをワープホールと同じブロック内に排出したい場合は、ピッチを負の値に設定して、プレイヤーがブロックから滑り落ちないようにすることをお勧めします。

## ワープホールの設定
有効なワープホール設定の例を次に示します。

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

***

<div align="center">

### isEnabled

ワープホールを有効にするかどうかを設定します。

| キー       |       値        | デフォルト |
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

ワープホールの最初の場所を指定します。

| キー       |      値       | デフォルト |
|-----------|:-----------------:|:-------:|
| `location1` | [String](#string) |  none   |

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

ワープホールの 2 番目の場所を指定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `location2` | [String](#string) |  none   |

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

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `location1Text` | [String](#string) |  none   |

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

2 番目の場所の表示テキストを設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `location2Text` | [String](#string) |  none   |

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

ワープホールを使用するために必要な権限を設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `permission` | [String](#string) |  none   |

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

ワープホールを使用するための Elite Coins の費用を設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `coinCost` | [Double](#double) |  none   |

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

ワープホールのビジュアル形状を設定します。

*これらの形状を構成するパーティクルは、一部のクライアントでラグを引き起こす可能性があります。パーティクルを無効にするには、**Wormholes.yml** に移動して、`noParticlesMode` を `true` に設定します。*

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
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

`style` 設定で使用されるパーティクルの色を設定します。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `particleColor` | [`0x` を付けた 16 進数コード](https://www.w3schools.com/colors/colors_hexadecimal.asp) |  `0x800080`   |

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

ポータルがプレイヤーをスムーズにテレポートするために、プレイヤーを盲目にするかどうかを設定します。

| キー         |      値       | デフォルト |
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

ポータルのサイズと `style` 設定で設定された形状を掛け合わせます。

| キー         |      値       | デフォルト |
|-------------|:-----------------:|:-------:|
| `sizeMultiplier` | [Multiplier](#multiplier) |   `1`   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
sizeMultiplier: 3
```

*サイズ倍率を適用した後、ワープホールの Y 座標を調整する必要があることに注意してください。*

<div align="center">

![create_wormhole_size.jpg](../../../img/wiki/create_wormhole_size.jpg)

</div>

</div>

</details>

</div>

***

<details>

<summary align="center"><b>ワープホール設定の例</b></summary>

<div align="left">

この例では、1 つのワールドから別のワールドに移動するシンプルなワープホールを作成します。ワープホールは、同じワールド内の異なる場所にプレイヤーをテレポートすることもできることを忘れないでください。

```yml
isEnabled: true #この値を true に設定することで、ワープホールを有効にします。
location1: my_world,1.5,11.0,1.5,108.0,5.0 #これは、`my_world` 内にワープホールが表示される場所です。
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #これは、`my_other_world` 内にワープホールが表示される場所です。
location1Text: "&aGo to My World" #ワープホールの場所 1 の上に、素敵な表示テキストを表示します。
location2Text: "&aGo to My Other World" #ワープホールの場所 2 の上に、素敵な表示テキストを表示します。
permission: eliteperm.coolplayers #この権限を持つプレイヤーのみが、場所 1 と場所 2 の両方でワープホールを使用できます。
coinCost: 2 #プレイヤーは、ワープホールを使用するために、12 Elite Coins を支払う必要があります。
style: CRYSTAL #このワープホールは、クリスタル型になります。
particleColor: 0x00ff00 #これにより、ワープホールのパーティクルが緑色になります。
blindPlayer: true #ワープホールのテレポートは、プレイヤーを短い時間だけ盲目にすることで、移行をよりスムーズにします。
sizeMultiplier: 1.0 #ワープホールの形状の大きさを設定します。
```

</div>

</details>

#### パフォーマンスの問題

ワープホールのパーティクルは、Bedrock を実行しているプレイヤーでクライアントのパフォーマンスの問題を引き起こす可能性があります。ワープホールのパーティクルを無効にするには、`~plugins\EliteMobs\Wormholes.yml` に移動して、`noParticlesMode` 設定を `true` に変更します。

```



