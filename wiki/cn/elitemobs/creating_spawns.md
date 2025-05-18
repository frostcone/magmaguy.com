[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是自定义生成点？

自定义生成点用于事件和全局增援，以设置事件应如何、在何处以及何时生成该事件的首领。

事件和全局增援通过写下其文件名来设置它们正在使用的生成点。

# 创建自定义生成点

自定义生成点位于 `customspawns` 文件夹中。一个自定义生成点可以同时被多个事件使用，因此您不必为每个事件创建一个。

这是一个自定义生成点的示例：

```yaml
isEnabled: true
validWorldTypes:
- NORMAL
- CUSTOM
bypassWorldGuard: false
isSurfaceSpawn: true
```

## 创建一个任意位置生成点
要创建一个可以发生在**任意位置**的生成点，您的配置应类似于以下内容：

```yml
isEnabled: true
canSpawnInLight: true
```
此配置允许生物在任何位置、任何世界、任何时间以及任何月相期间生成。

如果您有兴趣创建更自定义的生成点，请继续阅读下方内容。

## 值

<div align="center">

***

### isEnabled

设置生成点是否启用。

| 键        |       值        | 默认值 |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [布尔值](#boolean) | `true`  |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### lowestYLevel

设置使用的最低 Y 坐标（地图高度）。

| 键         |       值        | 默认值 |
|------------|:-------------------:|:-------:|
| `lowestYLevel` | [整数](#integer) |   `0`   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
lowestYLevel: 0
```

</div>

</details>

***

### highestYLevel

设置使用的最高 Y 坐标（地图高度）。

| 键          |       值        | 默认值 |
|-------------|:-------------------:|:-------:|
| `highestYLevel` | [整数](#integer) |  `320`  |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
highestYLevel: 320
```

</div>

</details>

***

### validWorlds

设置自定义生成点可以发生的**世界**列表。可以省略此设置以允许您的**所有**世界都有效。

| 键         |           值            | 默认值 |
|------------|:---------------------------:|:-------:|
| `validWorlds` | [字符串列表](#string_list) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
validWorlds:
- WORLD
- FUN_LAND
```

*如果您希望所有世界都有效，您可以不使用此设置或按如下方式格式化：*

```yml
validWorlds: []
```

</div>

</details>

***

### validWorldEnvironments

设置自定义生成点可以发生的有效**世界环境**列表。可以省略此设置以允许您的**所有**环境都有效。

| 键                   |           值            | 默认值 |
|----------------------|:---------------------------:|:-------:|
| `validWorldEnvironments` | [环境列表](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/WorldType.html) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
validWorldEnvironments:
- FLAT
- LARGE_BIOMES
```

*如果您希望所有环境都有效，您可以不使用此设置或按如下方式格式化：*

```yml
validWorldEnvironments: []
```

</div>

</details>

***

### validBiomes

设置自定义生成点可以发生的有效**生物群系**列表。可以省略此设置以允许您的**所有**生物群系都有效。

| 键         |           值            | 默认值 |
|------------|:---------------------------:|:-------:|
| `validBiomes` | [生物群系列表](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) |  无   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
validBiomes:
- DESERT
- MUSHROOM_FIELDS
```

*如果您希望所有生物群系都有效，您可以不使用此设置或按如下方式格式化：*

```yml
validBiomes: []
```

</div>

</details>

***

### earliestTime

设置自定义生成点可以发生的最早游戏内时间。

| 键           |           值            | 默认值 |
|--------------|:---------------------------:|:-------:|
| `earliestTime` | [整数](#integer) |   `0`   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
earliestTime: 0
```

</div>

</details>

***

### latestTime

设置自定义生成点可以发生的最晚游戏内时间。

| 键          |           值            | 默认值 |
|-------------|:---------------------------:|:-------:|
| `latestTime` | [整数](#integer) | `24000` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
latestTime: 24000
```

</div>

</details>

***

### moonPhase

设置自定义生成点可以发生的月相。

| 键        |   值    | 默认值 |
|-----------|:-----------:|:-------:|
| `moonPhase` | 特殊 [1] | `24000` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
moonPhase: 24000
```

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

| 月相        | 预览  |
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

设置自定义生成点是否会绕过 WorldGuard 等保护系统。

| 键             |           值            | 默认值 |
|----------------|:---------------------------:|:-------:|
| `bypassWorldGuard` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
bypassWorldGuard: false
```

</div>

</details>

***

### canSpawnInLight

指定自定义生成点是否可以在光源照亮的方块上发生。

| 键              |           值            | 默认值 |
|-----------------|:---------------------------:|:-------:|
| `canSpawnInLight` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
canSpawnInLight: false
```

</div>

</details>

***

### isSurfaceSpawn

设置自定义生成点是否只能在世界的地表发生。

| 键             |           值            | 默认值 |
|----------------|:---------------------------:|:-------:|
| `isSurfaceSpawn` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isSurfaceSpawn: false
```

</div>

</details>

***

### isUndergroundSpawn

设置自定义生成点是否只能在地下发生。

| 键               |           值            | 默认值 |
|------------------|:---------------------------:|:-------:|
| `isUndergroundSpawn` | [布尔值](#boolean) | `false` |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isUndergroundSpawn: false
```

</div>

</details>

</div>