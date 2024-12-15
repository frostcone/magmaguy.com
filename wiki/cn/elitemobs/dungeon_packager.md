[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地牢？

您可以在[此处]($language$/elitemobs/dungeons.md)找到有关地牢的信息，包括有关预制地牢的信息。

***

# 什么是地牢打包器？

地牢打包器允许管理员不仅创建和打包地牢，还可以打包任何类型的 EliteMobs 内容。这包括事件包、模型包、竞技场、npc 包、物品包等等。

<details>

<summary>为什么要使用地牢包？</summary>

- ***实例地牢！*** 实例地牢只能通过地牢包系统创建。
- ***迷你地牢的安全备份！*** 如果您创建地牢包，您将能够在任何时间，出于任何原因在您想要的任何服务器中部署和重新部署它。
- ***易于关闭和打开！*** 您始终可以执行 `/em setup` 并临时或永久关闭和打开地牢包。
- ***易于共享！*** 如果您想分享您的创作，可以将地牢包压缩并发送给其他人。如果您有兴趣，还有一个专门用于社区创作的 Discord 房间！
- ***传送点！*** 地牢包会自动创建传送位置，可以在 `/em` 菜单的传送页面中访问这些位置，这在许多设置中可能非常有用。

</details>

# 创建地牢

以下设置用于创建应放入 `content_packages` 文件夹中的配置文件。这些设置专门用于创建地牢，如果您只想使用地牢打包器来分发非地牢内容（例如物品包或事件包），则不需要这些设置。

## 必需的插件

要使用地牢打包器，您将需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护迷你地牢

## 创建地牢，分步指南

EliteMobs 过去有两种主要的地牢类型：基于世界和基于原理图。

基于原理图的地牢与原理图构建相关联。它们现在已被逐步淘汰，不再受支持。

所有 EliteMobs 地牢现在都基于世界。

## 必需的 pack.meta 文件

您的地牢包应包含一个 `pack.meta` 文件，该文件只是一个重命名为 `.meta` 扩展名的 `.txt` 文件。此文件应仅包含一个单词，指示该包适用于哪个插件（例如，“elitemobs”，以小写形式书写）。`pack.meta` 文件必须位于包的根目录中，与所有其他文件夹位于同一位置。

***

### 全局值

以下值适用于所有地牢

<div align="center">

### isEnabled

设置是否启用地牢包。

| 键        |       值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `isEnabled` | [布尔值](#boolean) | `false` |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

设置内容的名称。支持[颜色代码](#color_codes)。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `name` | [字符串](#string) | `false` |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: '&c[等级 999] &a绿色地牢'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

设置地牢使用的位置类型。

| 键        |        值         | 默认值 | 强制 |
|-----------|:---------------------:|:------:|:-----:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

设置地牢的类型。

| 键        |                    值                    | 默认值 | 强制 |
|-----------|:--------------------------------------------:|:------:|:-----:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

设置将显示在 `/em setup` 屏幕中的附加信息。仅供参考。支持[颜色代码](#color_codes)。

| 键        |           值            | 默认值 | 强制 |
|-----------|:---------------------------:|:------:|:-----:|
| `customInfo` | [字符串列表](#string_list) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customInfo:
- '&a最好的地牢。'
- '&a由：酷玩家 制作'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

设置未下载内容时显示的下载链接。仅供参考。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `downloadLink` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

设置地牢包的大小类别。仅供参考。

| 键        |   值    | 默认值 | 强制 |
|-----------|:-----------:|:------:|:-----:|
| `dungeonSizeCategory` | 特殊 [1] |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

| 键 | 描述                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | 巢穴是一种小型地牢，专注于一场大型首领战。  |
| `SANCTUM`    | 圣所相当于实例化的巢穴。这意味着它们专注于一场大型首领战。 |
| `MINIDUNGEON`    | 迷你地牢是一种中型地牢，通常包含 3-15 个迷你首领和一个大型首领，以及大量旨在供玩家“刷”硬币和装备的“炮灰”生物。 |
| `DUNGEON`    | 地牢相当于实例化的迷你地牢。这是最传统的 MMORPG 类型地牢，玩家在其中组队并通过一系列炮灰生物和迷你首领，以与最终首领战斗。 |
| `RAID`    | 即将推出！|
| `ADVENTURE`    | 冒险是完整的冒险地图。它们包括任务线、npc、大量的迷你首领和首领，甚至可以在其中包含自己的竞技场或地牢。 |
| `ARENA`    | 竞技场是基于波次的生存区域，玩家在其中因击败波次而获得奖励。 |
| `OTHER`    | 不属于先前类别的任何其他内容。 |

有关更多详细描述，请参见[地牢]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置地牢包是否应受 WorldGuard 保护。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `protect` | [布尔值](#boolean) |  `true`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

设置地牢包的版本。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `dungeonVersion` | [整数](#integer) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

设置菜单中显示的信息。支持[颜色代码](#colorcodes)。

*仅当使用 `/em alt` 将 `/em` 设置为书本模式时才有效。*

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `playerInfo` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
playerInfo: '难度：&a单人简易内容！'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

设置当玩家进入地牢区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `regionEnterMessage` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a您已进入地牢！'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

设置当玩家离开地牢区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `regionLeaveMessage` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a您已离开地牢！'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

设置地牢包是否具有自定义模型（适用于 ModelEngine 或 FreeMinecraftModels）。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `hasCustomModels` | [布尔值](#boolean) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

设置用于与此地牢关联的文件的文件夹名称。

**实例地牢必填！**

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `dungeonConfigFolderName` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

设置地牢应在 EM 菜单中显示的内容等级。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `contentLevel` | [整数](#integer) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

设置地牢是否应为附魔挑战地牢。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `enchantmentChallenge` | [布尔值](#boolean) | `false` |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### 基于世界的地牢包

以下值仅适用于基于世界的地牢。

<div align="center">

***

### worldName

设置应打包的世界的名称。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `worldName` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

此函数设置虫洞世界的名称，该世界充当连接到主世界的辅助世界。它用于传送中心或独特的首领室等功能。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `womholeWorldName` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

设置世界的环境。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `environment` | [环境](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

设置地牢包的传送位置。这是玩家进入地牢时将被传送到的位置。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `teleportLocation` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

允许或阻止爆炸损坏地牢中的方块。爆炸被认为是精英爆炸，因此对地块造成的任何损坏将在 2 分钟内再生。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `allowExplosionBlockDamage` | [布尔值](#boolean) |  `false`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### 实例化的地牢

*实例化的地牢为每次玩家组想要完成地牢时创建新世界，并在完成后将其删除。为了使此操作正常工作，您必须在 EliteMobs 的 `world_blueprints` 配置文件夹中放置一个遵循 `dungeonConfigFolderName` 的文件夹。*

*然后，将您将要使用的世界放入您创建的文件夹中，确保删除该世界的 `session.lock` 文件。*

以下值仅适用于实例化的地牢。请注意，所有实例化的地牢都是世界地牢，因此它们也使用来自世界地牢的值。

<div align="center">

***

### startLocation

设置实例地牢起始点的传送位置。这是玩家在使用 `/em start` 启动实例地牢时将被传送到的位置。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `startLocation` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

设置进入地牢实例所需的权限。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `permission` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

设置启动地牢所需的最少玩家数量。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `minPlayerCount` | [整数](#integer) |  `1`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

设置启动地牢所需的最少玩家数量。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `maxPlayerCount` | [整数](#integer) |   `5`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

设置地牢被视为完成所需的地牢目标列表。

| 键        |           值            | 默认值 | 强制 |
|-----------|:---------------------------:|:------:|:-----:|
| `dungeonObjectives` | [字符串列表](#string_list) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

目前有两种地牢目标类型：

*   杀死目标：`filename=boss.yml:amount=X`
*   杀死一定百分比的地牢：`clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

设置实例地牢中的难度列表。

**实例地牢必填！**

| 键        |   值    | 默认值 | 强制 |
|-----------|:-----------:|:------:|:-----:|
| `difficulties` | 特殊 [1] |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

设置实例化的地牢难度将在进入地牢时自动创建不同的难度选项。

此处设置的难度名称将是在自定义首领文件夹中使用的名称，您可以在其中根据难度设置首领具有的能力。

难度采用列表格式，具有以下字段：

|     键     | 描述                                                                                                                                                                                                                                                 | 值 | 强制 |
|:-----------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:----:|
|   `name`    | 玩家的难度名称。 |[字符串](#string)        |   ✅    |
|    `id`     | 难度的 ID，用于自定义首领和自定义物品中以实现基于难度的功能。 |[字符串](#string)        |   ✅    |
| `levelSync` | 设置等级同步的等级（如果有）。等级同步使所有玩家装备的最大等级都设置为指定值，使得玩家无法在地牢中获得高于该等级的等级，并使其在以后的运行中保持相关性。基于最终幻想 14 等级同步系统。 |[整数](#integer)       |   ❌   |

</div>

</details>

</div>

***

## 为大型地牢使用 meta_pack.yml 地牢包文件。
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地牢？

您可以在[此处]($language$/elitemobs/dungeons.md)找到有关地牢的信息，包括有关预制地牢的信息。

***

# 什么是地牢打包器？

地牢打包器允许管理员不仅创建和打包地牢，还可以打包任何类型的 EliteMobs 内容。这包括事件包、模型包、竞技场、npc 包、物品包等等。

<details>

<summary>为什么要使用地牢包？</summary>

- ***实例地牢！*** 实例地牢只能通过地牢包系统创建。
- ***迷你地牢的安全备份！*** 如果您创建地牢包，您将能够在任何时间，出于任何原因在您想要的任何服务器中部署和重新部署它。
- ***易于关闭和打开！*** 您始终可以执行 `/em setup` 并临时或永久关闭和打开地牢包。
- ***易于共享！*** 如果您想分享您的创作，可以将地牢包压缩并发送给其他人。如果您有兴趣，还有一个专门用于社区创作的 Discord 房间！
- ***传送点！*** 地牢包会自动创建传送位置，可以在 `/em` 菜单的传送页面中访问这些位置，这在许多设置中可能非常有用。

</details>

# 创建地牢

以下设置用于创建应放入 `content_packages` 文件夹中的配置文件。这些设置专门用于创建地牢，如果您只想使用地牢打包器来分发非地牢内容（例如物品包或事件包），则不需要这些设置。

## 必需的插件

要使用地牢打包器，您将需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护迷你地牢

## 创建地牢，分步指南

EliteMobs 过去有两种主要的地牢类型：基于世界和基于原理图。

基于原理图的地牢与原理图构建相关联。它们现在已被逐步淘汰，不再受支持。

所有 EliteMobs 地牢现在都基于世界。

## 必需的 pack.meta 文件

您的地牢包应包含一个 `pack.meta` 文件，该文件只是一个重命名为 `.meta` 扩展名的 `.txt` 文件。此文件应仅包含一个单词，指示该包适用于哪个插件（例如，“elitemobs”，以小写形式书写）。`pack.meta` 文件必须位于包的根目录中，与所有其他文件夹位于同一位置。

***

### 全局值

以下值适用于所有地牢

<div align="center">

### isEnabled

设置是否启用地牢包。

| 键        |       值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `isEnabled` | [布尔值](#boolean) | `false` |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

设置内容的名称。支持[颜色代码](#color_codes)。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `name` | [字符串](#string) | `false` |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: '&c[等级 999] &a绿色地牢'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

设置地牢使用的位置类型。

| 键        |        值         | 默认值 | 强制 |
|-----------|:---------------------:|:------:|:-----:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

设置地牢的类型。

| 键        |                    值                    | 默认值 | 强制 |
|-----------|:--------------------------------------------:|:------:|:-----:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

设置将显示在 `/em setup` 屏幕中的附加信息。仅供参考。支持[颜色代码](#color_codes)。

| 键        |           值            | 默认值 | 强制 |
|-----------|:---------------------------:|:------:|:-----:|
| `customInfo` | [字符串列表](#string_list) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customInfo:
- '&a最好的地牢。'
- '&a由：酷玩家 制作'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

设置未下载内容时显示的下载链接。仅供参考。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `downloadLink` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

设置地牢包的大小类别。仅供参考。

| 键        |   值    | 默认值 | 强制 |
|-----------|:-----------:|:------:|:-----:|
| `dungeonSizeCategory` | 特殊 [1] |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

| 键 | 描述                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | 巢穴是一种小型地牢，专注于一场大型首领战。 |
| `SANCTUM`    | 圣所相当于实例化的巢穴。这意味着它们专注于一场大型首领战。 |
| `MINIDUNGEON`    | 迷你地牢是一种中型地牢，通常包含 3-15 个迷你首领和一个大型首领，以及大量旨在供玩家“刷”硬币和装备的“炮灰”生物。 |
| `DUNGEON`    | 地牢相当于实例化的迷你地牢。这是最传统的 MMORPG 类型地牢，玩家在其中组队并通过一系列炮灰生物和迷你首领，以与最终首领战斗。 |
| `RAID`    | 即将推出！|
| `ADVENTURE`    | 冒险是完整的冒险地图。它们包括任务线、npc、大量的迷你首领和首领，甚至可以在其中包含自己的竞技场或地牢。 |
| `ARENA`    | 竞技场是基于波次的生存区域，玩家在其中因击败波次而获得奖励。 |
| `OTHER`    | 不属于先前类别的任何其他内容。 |

有关更多详细描述，请参见[地牢]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置地牢包是否应受 WorldGuard 保护。

| 键        |      值        | 默认值 | 强制 |
|-----------|:---------------:|:------:|:-----:|
| `protect` | [布尔值](#boolean) |  `true`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

设置地牢包的版本。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `dungeonVersion` | [整数](#integer) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

设置菜单中显示的信息。支持[颜色代码](#colorcodes)。

*仅当使用 `/em alt` 将 `/em` 设置为书本模式时才有效。*

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `playerInfo` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
playerInfo: '难度：&a单人简易内容！'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

设置当玩家进入地牢区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `regionEnterMessage` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a您已进入地牢！'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

设置当玩家离开地牢区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `regionLeaveMessage` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a您已离开地牢！'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

设置地牢包是否具有自定义模型（适用于 ModelEngine 或 FreeMinecraftModels）。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `hasCustomModels` | [布尔值](#boolean) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

设置用于与此地牢关联的文件的文件夹名称。

**实例地牢必填！**

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `dungeonConfigFolderName` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

设置地牢应在 EM 菜单中显示的内容等级。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `contentLevel` | [整数](#integer) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

设置地牢是否应为附魔挑战地牢。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `enchantmentChallenge` | [布尔值](#boolean) | `false` |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### 基于世界的地牢包

以下值仅适用于基于世界的地牢。

<div align="center">

***

### worldName

设置应打包的世界的名称。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `worldName` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

此函数设置虫洞世界的名称，该世界充当连接到主世界的辅助世界。它用于传送中心或独特的首领室等功能。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `womholeWorldName` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

设置世界的环境。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `environment` | [环境](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

设置地牢包的传送位置。这是玩家进入地牢时将被传送到的位置。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `teleportLocation` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

允许或阻止爆炸损坏地牢中的方块。爆炸被认为是精英爆炸，因此对地块造成的任何损坏将在 2 分钟内再生。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `allowExplosionBlockDamage` | [布尔值](#boolean) |  `false`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### 实例化的地牢

*实例化的地牢会为每次一组玩家想要完成一个地牢时创建一个新世界，并在完成后将其删除。为了使此操作正常工作，您必须将一个遵循 `dungeonConfigFolderName` 的文件夹放在 EliteMobs 的 `world_blueprints` 配置文件夹中。*

*然后，将您将要使用的世界放入您创建的文件夹中，确保删除该世界的 `session.lock` 文件。*

以下值仅适用于实例化的地牢。请注意，所有实例化的地牢都是世界地牢，因此它们也使用来自世界地牢的值。

<div align="center">

***

### startLocation

设置实例化的地牢起点的传送位置。这是玩家在使用 `/em start` 启动实例化的地牢时将被传送到的位置。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `startLocation` | [字符串](#string) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

设置进入地牢实例所需的权限。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `permission` | [字符串](#string) |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

设置开始地牢所需的最少玩家数量。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `minPlayerCount` | [整数](#integer) |  `1`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

设置启动地牢所需的最少玩家数量。

| 键        |  值  | 默认值 | 强制 |
|-----------|:--------:|:------:|:-----:|
| `maxPlayerCount` | [整数](#integer) |   `5`   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

设置要将地牢视为已完成所需的地牢目标列表。

| 键        |           值            | 默认值 | 强制 |
|-----------|:---------------------------:|:------:|:-----:|
| `dungeonObjectives` | [字符串列表](#string_list) |  无   |   ✅   |

<details>

<summary><b>示例</b></summary>

<div align="left">

目前有两种地牢目标类型：

*   杀死目标：`filename=boss.yml:amount=X`
*   杀死地牢的百分比：`clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

设置实例地牢中的难度列表。

**实例地牢必填！**

| 键        |   值    | 默认值 | 强制 |
|-----------|:-----------:|:------:|:-----:|
| `difficulties` | 特殊 [1] |  无   |   ❌   |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**特殊 [1]**

<details>

<summary><b>展开表格</b></summary>

<div align="center">

设置实例地牢难度将在进入地牢时自动创建不同的难度选项。

此处设置的难度名称将是在自定义首领文件夹中使用的名称，您可以在其中根据难度设置首领具有的能力。

难度采用列表格式，具有以下字段：

|     键     | 描述                                                                                                                                                                                                                                               | 值 | 强制 |
|:-----------:|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:----:|
|   `name`    | 玩家的难度名称。                                                                                                                                                                                                                            | [字符串](#string)        |   ✅  |
|    `id`     | 难度的 ID，用于自定义首领和自定义物品中以实现基于难度的功能。                                                                                                                                                                                                | [字符串](#string)        |   ✅    |
| `levelSync` | 设置等级同步的等级（如果有）。等级同步使所有玩家装备的最大等级都设置为指定值，使得玩家无法在地牢中获得高于该等级的等级，并使其在以后的运行中保持相关性。基于最终幻想 14 等级同步系统。 | [整数](#integer)       |  ❌   |

</div>

</details>

</div>

***

## 将 meta_pack.yml 地牢包文件用于大型地牢。
