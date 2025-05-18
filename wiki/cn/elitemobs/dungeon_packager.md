[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地下城？

你可以在[这里]($language$/elitemobs/dungeons.md)找到关于地下城的信息，包括预设地下城的信息。

***

# 什么是地下城打包器？

地下城打包器不仅允许管理员创建和打包地下城，还可以打包任何类型的 EliteMobs 内容。这包括事件包、模型包、竞技场、NPC 包、物品包等等。

<details>

<summary>为什么要使用地下城包？</summary>

- ***副本地下城！*** 副本地下城只能通过地下城打包系统创建。
- ***安全备份迷你地下城！*** 如果你创建了地下城包，你可以在任何时间、任何原因将其部署到任何服务器上。
- ***易于开启和关闭！*** 你随时可以通过 `/em setup` 暂时或永久开启和关闭地下城包。
- ***易于分享！*** 如果你想分享你的创作，只需将地下城包压缩并发送给其他人即可。如果你感兴趣，Discord 上有一个专门用于社区创作的房间！
- ***传送点！*** 地下城包会自动创建传送位置，可以在 `/em` 菜单的传送页面访问，这在很多设置中非常有用。

</details>

# 创建地下城

以下设置用于创建一个配置文件，该文件应放入 `content_packages` 文件夹中。这些设置专门用于创建地下城，如果你只想使用地下城打包器分发非地下城内容（例如物品包或事件包），则不需要这些设置。

## 所需插件

要使用地下城打包器，你需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护迷你地下城

## 创建地下城，一步一步

EliteMobs 以前有两种主要的地下城：基于世界的和基于 schematic 的。

基于 schematic 的地下城与 schematic 构建相关联。它们现在已被淘汰，不再支持。

所有 EliteMobs 地下城现在都基于世界。

## 所需的 pack.meta 文件

你的地下城包应包含一个 `pack.meta` 文件，它只是一个重命名为 `.meta` 扩展名的 `.txt` 文件。此文件应只包含一个单词，指示该包是用于哪个插件的（例如，“elitemobs”，小写）。`pack.meta` 文件必须位于你的包的根目录中，与其他所有文件夹并列。

***

### 全局值

以下值适用于所有地下城

<div align="center">

### isEnabled

设置地下城包是否启用。

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Boolean](#boolean) | `false` |    ✅      |

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

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

设置地下城使用的位置类型。

| Key         |        Values         | Default | Mandatory |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none   |    ✅      |

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

设置地下城的类型。

| Key         |                    Values                    | Default | Mandatory |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none   |    ✅      |

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

设置将显示在 `/em setup` 屏幕上的附加信息。仅供参考。支持[颜色代码](#color_codes)。

| Key         |           Values            | Default | Mandatory |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  none   |    ✅      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

设置内容未下载时的下载链接。仅供参考。

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  none   |    ❌      |

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

设置地下城包的大小类别。仅供参考。

| Key         |   Values    | Default | Mandatory |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | 特殊 [1] |  none   |    ✅      |

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

| Key | Description                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | 巢穴是一种小型地下城，专注于一场大型 Boss 战。  |
| `SANCTUM`    | 圣所是副本化巢穴的等价物。这意味着它们围绕一场巨大的 Boss 战展开。 |
| `MINIDUNGEON`    | 迷你地下城是一种中型地下城，通常包含 3-15 个迷你 Boss 和一个大 Boss，以及大量“垃圾”怪物，玩家可以通过击杀它们来“刷”取金币和装备。 |
| `DUNGEON`    | 地下城是副本化迷你地下城的等价物。这是最传统的 MMORPG 类型地下城，玩家组队通过一系列垃圾怪物和迷你 Boss 的挑战，最终击败最终 Boss。 |
| `RAID`    | 即将推出！|
| `ADVENTURE`    | 冒险是完整的冒险地图。它们包括任务线、NPC、大量的迷你 Boss 和 Boss，甚至可以在其中包含自己的竞技场或地下城。 |
| `ARENA`    | 竞技场是基于波次的生存区域，玩家通过击败波次获得奖励。 |
| `OTHER`    | 任何不属于上述类别的其他内容。 |

更详细的描述请参见[地下城]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置地下城包是否应受 WorldGuard 保护。

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Boolean](#boolean) |  `true`   |    ❌      |

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

设置地下城包的版本。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  none   |    ✅      |

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

*仅当 `/em` 设置为书本模式时有效（使用 `/em alt`）。*

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  none   |    ✅      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

设置玩家进入地下城区域时显示的消息。支持[颜色代码](#colorcodes)。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  none   |    ❌      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

设置玩家离开地下城区域时显示的消息。支持[颜色代码](#colorcodes)。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  none   |    ❌      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

设置地下城包是否包含自定义模型（用于 ModelEngine 或 FreeMinecraftModels）。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  none   |    ❌      |

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

设置用于与此地下城相关联的文件的文件夹名称。

**副本地下城必需！**

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  none   |    ❌      |

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

设置地下城在 EM 菜单中显示的内容等级。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  none   |    ❌      |

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

设置地下城是否为附魔挑战地下城。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |    ❌      |

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

### 基于世界的地下城包

以下值仅适用于基于世界的地下城。

<div align="center">

***

### worldName

设置应打包的世界名称。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  none   |    ✅      |

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

此功能设置虫洞世界的名称，它作为与主世界关联的辅助世界。它用于传送枢纽或独特的 Boss 房间等功能。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  none   |    ❌      |

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

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none   |    ✅      |

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

设置地下城包的传送位置。这是玩家进入地下城时将被传送到的地方。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  none   |    ✅      |

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

允许或阻止爆炸损坏地下城中的方块。爆炸被视为精英爆炸，因此对方块的任何损坏将在 2 分钟内恢复。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Boolean](#boolean) |  `false`   |    ❌      |

<details>

<summary><b>示例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### 副本地下城

*副本地下城会在每次一组玩家想要完成地下城时创建一个新世界，并在完成后删除它。为了使其正常工作，你必须在 EliteMobs 的 `world_blueprints` 配置文件夹中放置一个遵循 `dungeonConfigFolderName` 的文件夹。*

*然后将你要使用的世界放入你创建的文件夹中，确保删除世界的 `session.lock` 文件。*

以下值仅适用于副本地下城。请注意，所有副本地下城都是世界地下城，因此它们也使用基于世界的地下城的值。

<div align="center">

***

### startLocation

设置副本地下城起始点的传送位置。这是玩家使用 `/em start` 开始副本地下城时将被传送到的地方。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  none   |    ✅      |

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

设置进入地下城副本所需的权限。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  none   |    ❌      |

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

设置开始地下城所需的最低玩家数量。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

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

设置开始地下城所需的最高玩家数量。

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

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

设置地下城目标列表，完成这些目标后地下城将被视为已完成。

| Key         |           Values            | Default | Mandatory |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  none   |    ✅      |

<details>

<summary><b>示例</b></summary>

<div align="left">

目前有两种地下城目标类型：

*   击杀目标：`filename=boss.yml:amount=X`
*   击杀地下城百分比：`clearpercentage=X.Y`

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

设置副本地下城中的难度列表。

**副本地下城必需！**

| Key         |   Values    | Default | Mandatory |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | 特殊 [1] |  none   |    ❌      |

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

设置副本地下城难度将自动在进入地下城时创建不同的难度选项。

此处设置的难度名称将用于自定义 Boss 文件夹，你可以在其中根据难度设置 Boss 的能力。

难度采用列表格式，包含以下字段：

|     Key     | Description                                                                                                                                                                                                                                                    | Values | Mandatory |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | 玩家可见的难度名称。                                                                                                                                                                                                                            |[String](#string)        |     ✅     |Please specify the language you would like the text translated into.