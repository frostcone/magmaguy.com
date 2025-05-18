[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムスポーンとは？

カスタムスポーンは、イベントやグローバルな増援によって、イベントのボスをどのように、どこで、いつスポーンさせるかを設定するために使用されます。

イベントやグローバルな増援は、使用するスポーンのファイル名を記述することで設定します。

# カスタムスポーンの作成

カスタムスポーンは `customspawns` フォルダに入れます。1つのカスタムスポーンは複数のイベントで同時に使用できるため、イベントごとに作成する必要はありません。

カスタムスポーンの例です。

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## どこでもスポーンを作成する
**どこでも**発生可能なスポーンを作成するには、設定を以下のようにします。

```yml
isEnabled: true
canSpawnInLight: true
```
この設定により、モブは任意の場所、任意のワールド、任意の時間、任意の月の満ち欠けでスポーンできるようになります。

よりカスタマイズされたスポーンの作成に興味がある場合は、以下を読み進めてください。

## 値

<div align="center">

***

### isEnabled

スポーンが有効かどうかを設定します。

| キー        |       値         | デフォルト |
|------------|:----------------:|:--------:|
| `isEnabled` | [Boolean](#boolean) |  `true`  |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### lowestYLevel

使用される最も低いY座標（マップの高さ）を設定します。

| キー         |       値         | デフォルト |
|-------------|:----------------:|:--------:|
| `lowestYLevel` | [Integer](#integer) |   `0`    |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

使用される最も高いY座標（マップの高さ）を設定します。

| キー          |       値         | デフォルト |
|--------------|:----------------:|:--------:|
| `highestYLevel` | [Integer](#integer) |  `320`   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

カスタムスポーンが発生できるワールドのリストを設定します。この設定を省略すると、**すべて**のワールドが有効になります。

| キー         |           値            | デフォルト |
|-------------|:-----------------------:|:--------:|
| `validWorlds` | [String List](#string_list) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*すべてのワールドを有効にしたい場合は、この設定を使用しないか、以下のようにフォーマットできます。*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

カスタムスポーンが発生できる有効なワールド環境のリストを設定します。この設定を省略すると、**すべて**の環境が有効になります。

| キー                   |                       値                        | デフォルト |
|-----------------------|:-----------------------------------------------:|:--------:|
| `validWorldEnvironments` | [環境リスト](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*すべての環境を有効にしたい場合は、この設定を使用しないか、以下のようにフォーマットできます。*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

カスタムスポーンが発生できる有効なバイオームのリストを設定します。この設定を省略すると、**すべて**のバイオームが有効になります。

| キー        |                       値                        | デフォルト |
|------------|:-----------------------------------------------:|:--------:|
| `validBiomes` | [バイオームリスト](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |   なし   |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*すべてのバイオームを有効にしたい場合は、この設定を使用しないか、以下のようにフォーマットできます。*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

カスタムスポーンが発生できるゲーム内での最も早い時間を設定します。

| キー          |       値         | デフォルト |
|--------------|:----------------:|:--------:|
| `earliestTime` | [Integer](#integer) |   `0`    |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

カスタムスポーンが発生できるゲーム内での最も遅い時間を設定します。

| キー         |       値         | デフォルト |
|-------------|:----------------:|:--------:|
| `latestTime` | [Integer](#integer) | `24000`  |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

カスタムスポーンが発生できる月の満ち欠けを設定します。

| キー         |   値    | デフォルト |
|-------------|:-------:|:--------:|
| `moonPhase` | 特殊 [1] | `24000`  |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**特殊 [1]**

<details>

<summary><b>テーブルを展開</b></summary>

| 月の満ち欠け        | プレビュー |
|--------------------|:--------:|
| `NEW_MOON`         |    🌑    |
| `WAXING_CRESCENT`  |    🌒    |
| `FIRST_QUARTER`    |    🌓    |
| `WAXING_GIBBOUS`   |    🌔    |
| `FULL_MOON`        |    🌕    |
| `WANING_GIBBOUS`   |    🌖    |
| `WANING_CRESCENT`  |    🌘    |

</details>

***

### bypassWorldGuard

カスタムスポーンがWorldGuardなどの保護システムをバイパスするかどうかを設定します。

| キー            |       値         | デフォルト |
|----------------|:----------------:|:--------:|
| `bypassWorldGuard` | [Boolean](#boolean) |  `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

カスタムスポーンが光源によって照らされたブロックで発生できるかどうかを指定します。

| キー             |       値         | デフォルト |
|-----------------|:----------------:|:--------:|
| `canSpawnInLight` | [Boolean](#boolean) |  `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

カスタムスポーンがワールドの地表でのみ発生できるかどうかを設定します。

| キー           |       値         | デフォルト |
|---------------|:----------------:|:--------:|
| `isSurfaceSpawn` | [Boolean](#boolean) |  `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

カスタムスポーンが地下でのみ発生できるかどうかを設定します。

| キー              |       値         | デフォルト |
|------------------|:----------------:|:--------:|
| `isUndergroundSpawn` | [Boolean](#boolean) |  `false` |

<details>

<summary><b>例</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>