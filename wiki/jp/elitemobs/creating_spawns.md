[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# カスタムスポーンとは？

カスタムスポーンは、イベントとグローバルな援軍によって、イベントがそのイベントのボスをどのように、どこで、いつスポーンするかを設定するために使用されます。

イベントとグローバルな援軍は、スポーンファイル名を書き込むことで、使用するスポーンを設定します。

# カスタムスポーンの作成

カスタムスポーンは、`customspawns` フォルダーに配置されます。1 つのカスタムスポーンを、同時に複数のイベントで使用できます。そのため、イベントごとに 1 つ作成する必要はありません。

カスタムスポーンの例を以下に示します。

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## どこにでもスポーンできるスポーンを作成する
どこにでもスポーンできるスポーンを作成するには、構成は次のようになります。

```yml
isEnabled: true
canSpawnInLight: true
```
この構成により、モブは、いつでも、どのワールドでも、どの場所でも、どの月の満ち欠けのときでもスポーンできます。

よりカスタマイズされたスポーンを作成する場合は、以下を読み続けてください。

## 値

<div align="center">

***

### isEnabled

スポーンを有効にするかどうかを設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [ブール値](#boolean) | `true`  |

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

使用される最低の y レベル (マップの高さ) を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `lowestYLevel` | [整数](#integer) |   `0`   |

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

使用される最低の y レベル (マップの高さ) を設定します。

| キー       |       値        | デフォルト |
|-----------|:-------------------:|:-------:|
| `highestYLevel` | [整数](#integer) |  `320`  |

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

カスタムスポーンが発生する可能性のあるワールドのリストを設定します。この設定は、**すべての** ワールドを有効にするために省略できます。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `validWorlds` | [文字列リスト](#string_list) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*すべてのワールドを有効にする場合は、設定を使用しないか、次のようにフォーマットしてください:*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

カスタムスポーンが発生する可能性のある有効なワールド環境のリストを設定します。この設定は、**すべての** 環境を有効にするために省略できます。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [環境リスト](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*すべての環境を有効にする場合は、設定を使用しないか、次のようにフォーマットしてください:*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

カスタムスポーンが発生する可能性のある有効なバイオームのリストを設定します。この設定は、**すべての** バイオームを有効にするために省略できます。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `validBiomes` | [バイオームリスト](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  none   |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*すべての環境を有効にする場合は、設定を使用しないか、次のようにフォーマットしてください:*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

カスタムスポーンが発生する可能性のある、ゲーム内での最も早い時間を設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `earliestTime` | [整数](#integer) |   `0`   |

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

カスタムスポーンが発生する可能性のある、ゲーム内での最も遅い時間を設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `latestTime` | [整数](#integer) | `24000` |

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

カスタムスポーンが発生する可能性のある、ゲーム内での最も早い時間を設定します。

| キー       |   値    | デフォルト |
|-----------|:-----------:|:-------:|
| `moonPhase` | 特殊 [1] | `24000` |

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

<summary><b>テーブルを展開する</b></summary>

| 月の満ち欠け        | プレビュー  |
|-------------------|:--------:|
| `NEW_MOON`        |    🌑    |
| `WAXING_CRESCENT` |    🌒    |
| `FIRST_QUARTER`   |    🌓    |
| `WAXING_GIBBOUS`  |    🌔    |
| `FULL_MOON`       |    🌕    |
| `WANING_GIBBOUS`  |    🌖    |
| `WANING_CRESCENT` |    🌘    |

</details>

***

### bypassWorldGuard

カスタムスポーンが WorldGuard などの保護システムをバイパスするかどうかを設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [ブール値](#boolean) | `false` |

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

カスタムスポーンが光源によって照らされたブロックで発生するかどうかを指定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `canSpawnInLight` | [ブール値](#boolean) | `false` |

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

カスタムスポーンがワールドの表面でしか発生しないように設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [ブール値](#boolean) | `false` |

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

カスタムスポーンが地下でしか発生しないように設定します。

| キー       |           値            | デフォルト |
|-----------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [ブール値](#boolean) | `false` |

<details> 

<summary><b>例</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>

