```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地下城？

你可以在[这里]($language$/elitemobs/dungeons.md)找到关于地下城的信息，包括预制地下城的信息。

***

# 什么是地下城打包器？

地下城打包器允许管理员不仅创建和打包地下城，还可以打包任何类型的 EliteMobs 内容。这包括诸如事件包、模型包、竞技场、NPC 包、物品包等等。

<details>

<summary>为什么要使用地下城包？</summary>

- ***实例化的地下城！*** 实例化的地下城只能通过地下城打包系统创建。
- ***迷你地下城的安全备份！*** 如果你制作了一个地下城包，你将能够随时随地在任何服务器中部署和重新部署它，而无需任何理由。
- ***易于关闭和开启！*** 你可以随时使用 `/em setup` 来临时或永久地关闭和开启地下城包。
- ***易于分享！*** 如果你希望分享你的创作，地下城包可以被压缩并发送给其他人。如果你有兴趣，还有一个专门用于社区创作的 Discord 房间！
- ***传送点！*** 地下城包会自动创建传送位置，可以在 `/em` 菜单的传送页面中访问，这在许多设置中可能非常有用。

</details>

# 创建地下城

以下设置用于创建一个配置文件，该文件应放入 `content_packages` 文件夹中。这些设置专门用于创建地下城，如果你只想使用地下城打包器来分发非地下城内容（例如物品包或事件包），则不是必需的。

## 必需的插件

要使用地下城打包器，你需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护迷你地下城

## 创建地下城，逐步指南

EliteMobs 过去有两种主要的地下城类型：基于世界的和基于示意图的。

基于示意图的地下城与示意图构建相关联。它们现在已逐步淘汰，不再支持。

所有 EliteMobs 地下城现在都是基于世界的。

## 必需的 pack.meta 文件

你的地下城包应包含一个 `pack.meta` 文件，它只是一个重命名为 `.meta` 扩展名的 `.txt` 文件。该文件应仅包含一个单词，指示该包用于哪个插件（例如，“elitemobs”，以小写字母书写）。`pack.meta` 文件必须位于你的包的根目录中，与其他所有文件夹并列。

***

### 全局值

以下值适用于所有地下城

<div align="center">

### isEnabled

设置是否启用地下城包。

| 键         |      值       | 默认 | 强制 |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [布尔值](#boolean) | `false` |    ✅      |

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

| 键      |       值        |   默认    | 强制 |
|--------|:--------------:|:-------:|:--:|
| `name` | [字符串](#string) | `false` | ✅  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &a绿色地下城'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

设置地下城使用的位置类型。

| 键                     |           值           |  默认  | 强制 |
|-----------------------|:---------------------:|:----:|:--:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` | none | ✅  |

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

| 键             |                      值                       |  默认  | 强制 |
|---------------|:--------------------------------------------:|:----:|:--:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` | none | ✅  |

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

设置将显示在 `/em setup` 屏幕中的其他信息。仅供参考。支持[颜色代码](#color_codes)。

| 键            |           值           |  默认  | 强制 |
|--------------|:---------------------:|:----:|:--:|
| `customInfo` | [字符串列表](#string_list) | none | ✅  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customInfo:
- '&a最好的地下城。'
- '&a由：CoolPlayer 制作'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

设置内容未下载时的下载链接。仅供参考。

| 键              |       值        |  默认  | 强制 |
|----------------|:--------------:|:----:|:--:|
| `downloadLink` | [字符串](#string) | none | ❌  |

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

| 键                     |   值    |  默认  | 强制 |
|-----------------------|:------:|:----:|:--:|
| `dungeonSizeCategory` | 特殊 [1] | none | ✅  |

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

| 键             | 描述                                                                     |
|---------------|------------------------------------------------------------------------|
| `LAIR`        | 巢穴是一种小型地下城，侧重于一场大型 Boss 战。                                             |
| `SANCTUM`     | 圣所相当于实例化的巢穴。这意味着它们围绕一场大型 Boss 战展开。                                     |
| `MINIDUNGEON` | 迷你地下城是一种中等大小的地下城，通常包含 3-15 个小 Boss 和一个大 Boss，以及大量“垃圾”怪物，旨在供玩家“刷”金币和装备。 |
| `DUNGEON`     | 地下城相当于实例化的迷你地下城。这是最传统的 MMORPG 型地下城，玩家组队，通过一系列垃圾怪物和小 Boss，与最终 Boss 作战。  |
| `RAID`        | 即将推出！                                                                  |
| `ADVENTURE`   | 冒险是完整的冒险地图。它们包括任务线、NPC、大量小 Boss 和 Boss，甚至可以包含它们自己的竞技场或地下城。             |
| `ARENA`       | 竞技场是基于波次的生存区域，玩家可以通过击败波次获得奖励。                                          |
| `OTHER`       | 任何不属于上述类别的其他内容。                                                        |

有关更详细的描述，请参见 [地下城]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置地下城包是否应受 WorldGuard 保护。

| 键         |        值        |   默认   | 强制 |
|-----------|:---------------:|:------:|:--:|
| `protect` | [布尔值](#boolean) | `true` | ❌  |

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

| 键                |       值        |  默认  | 强制 |
|------------------|:--------------:|:----:|:--:|
| `dungeonVersion` | [整数](#integer) | none | ✅  |

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

| 键            |       值        |  默认  | 强制 |
|--------------|:--------------:|:----:|:--:|
| `playerInfo` | [字符串](#string) | none | ✅  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
playerInfo: '难度： &a1 人轻松内容！'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

设置当玩家进入地下城区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键                    |       值        |  默认  | 强制 |
|----------------------|:--------------:|:----:|:--:|
| `regionEnterMessage` | [字符串](#string) | none | ❌  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a你已进入地下城！'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

设置当玩家离开地下城区域时显示的消息。支持[颜色代码](#colorcodes)。

| 键                    |       值        |  默认  | 强制 |
|----------------------|:--------------:|:----:|:--:|
| `regionLeaveMessage` | [字符串](#string) | none | ❌  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a你已离开地下城！'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

设置地下城包是否具有自定义模型（用于 ModelEngine 或 FreeMinecraftModels）。

| 键                 |        值        |  默认  | 强制 |
|-------------------|:---------------:|:----:|:--:|
| `hasCustomModels` | [布尔值](#boolean) | none | ❌  |

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

设置用于与此地下城关联的文件的文件夹的名称。

**实例化的地下城强制要求！**

| 键                         |       值        |  默认  | 强制 |
|---------------------------|:--------------:|:----:|:--:|
| `dungeonConfigFolderName` | [字符串](#string) | none | ❌  |

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

设置地下城应在 EM 菜单中显示的内容级别。

| 键              |       值        |  默认  | 强制 |
|----------------|:--------------:|:----:|:--:|
| `contentLevel` | [整数](#integer) | none | ❌  |

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

设置地下城是否应为附魔挑战地下城。

| 键                      |        值        |   默认    | 强制 |
|------------------------|:---------------:|:-------:|:--:|
| `enchantmentChallenge` | [布尔值](#boolean) | `false` | ❌  |

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

设置应打包的世界的名称。

| 键           |       值        |  默认  | 强制 |
|-------------|:--------------:|:----:|:--:|
| `worldName` | [字符串](#string) | none | ✅  |

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

此函数设置虫洞世界的名称，该世界是链接到主世界的次要世界。它用于诸如传送中心或独特的 Boss 房间之类的功能。

| 键                  |       值        |  默认  | 强制 |
|--------------------|:--------------:|:----:|:--:|
| `womholeWorldName` | [字符串](#string) | none | ❌  |

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

| 键             |                                             值                                             |  默认  | 强制 |
|---------------|:-----------------------------------------------------------------------------------------:|:----:|:--:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) | none | ✅  |

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

设置地下城包的传送位置。这是玩家进入地下城时将被传送到的位置。

| 键                  |       值        |  默认  | 强制 |
|--------------------|:--------------:|:----:|:--:|
| `teleportLocation` | [字符串](#string) | none | ✅  |

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

允许或阻止爆炸损坏地下城中的方块。爆炸被认为是精英爆炸，因此对块的任何损坏将在 2 分钟内再生。

| 键                           |        值        |   默认    | 强制 |
|-----------------------------|:---------------:|:-------:|:--:|
| `allowExplosionBlockDamage` | [布尔值](#boolean) | `false` | ❌  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### 实例化的地下城

*实例化的地下城为每当一群玩家想要完成一个地下城时创建一个新世界，并在完成后将其删除。为了使其正常工作，你必须在 EliteMobs
的 `world_blueprints` 配置文件夹中放置一个遵循 `dungeonConfigFolderName` 的文件夹。*

*然后，将你将要使用的世界放置在你创建的文件夹内，确保删除该世界的 `session.lock` 文件。*

以下值仅适用于实例化的地下城。请注意，所有实例化的地下城都是世界地下城，因此它们也使用来自世界地下城的值。

<div align="center">

***

### startLocation

设置实例化的地下城起点的传送位置。这是玩家使用 `/em start` 启动实例化的地下城时将被传送到的位置。

| 键               |       值        |  默认  | 强制 |
|-----------------|:--------------:|:----:|:--:|
| `startLocation` | [字符串](#string) | none | ✅  |

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

设置进入地下城实例所需的权限。

| 键            |       值        |  默认  | 强制 |
|--------------|:--------------:|:----:|:--:|
| `permission` | [字符串](#string) | none | ❌  |

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

设置启动地下城所需的最小玩家人数。

| 键                |       值        | 默认  | 强制 |
|------------------|:--------------:|:---:|:--:|
| `minPlayerCount` | [整数](#integer) | `1` | ❌  |

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

设置启动地下城所需的最小玩家人数。

| 键                |       值        | 默认  | 强制 |
|------------------|:--------------:|:---:|:--:|
| `maxPlayerCount` | [整数](#integer) | `5` | ❌  |

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

设置地下城被视为完成所必需的地下城目标列表。

| 键                   |           值           |  默认  | 强制 |
|---------------------|:---------------------:|:----:|:--:|
| `dungeonObjectives` | [字符串列表](#string_list) | none | ✅  |

<details> 

<summary><b>示例</b></summary>

<div align="left">

目前有两种地下城目标类型：

* 杀死目标：`filename=boss.yml:amount=X`
* 清除地下城百分比：`clearpercentage=X.Y`

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

设置实例化的地下城中的难度列表。

**实例化的地下城强制要求！**

| 键              |   值    |  默认  | 强制 |
|----------------|:------:|:----:|:--:|
| `difficulties` | 特殊 [1] | none | ❌  |

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

设置实例化的地下城难度会在进入地下城时自动创建不同的难度选项。

这里设置的难度名称将是自定义 Boss 文件夹中使用的名称，你可以在其中根据难度设置 Boss 拥有的力量。

难度采用列表格式，具有以下字段：

|      键      | 描述                                                                                       | 值              | 强制 |
|:-----------:|------------------------------------------------------------------------------------------|----------------|:--:|
|   `name`    | 玩家难度的名称。                                                                                 | [字符串](#string) | ✅  |
|    `id`     | 难度的 ID，在自定义 Boss 和自定义物品中用于基于难度的功能。                                                       | [字符串](#string) | ✅  |
| `levelSync` | 设置等级同步的等级（如果有）。等级同步使所有玩家装备的最大值达到设定值，使玩家无法在地下城中获得过高的等级，并使其在以后的游戏中保持相关性。基于最终幻想 14 的等级同步系统。 | [整数](#integer) | ❌  |

</div>

</details>

</div>

***

## 将 meta_pack.yml 地下城包文件用于大型地下城。

```
```markdown
有时，你可能正在开发一个大型地下城，其中包含其他较小的地下城，允许玩家通过主地下城世界在它们之间旅行。一个很好的例子是 EliteMobs 冒险地下城 Primis。

Primis 的特点是一个广阔的世界，玩家可以在其中探索和完成任务，但它还在其世界中包含两个实例化的地下城 - 其中一个用作最终 Boss 战。在这种情况下，即使它们都属于同一个总体地下城，也会有多个地下城包文件。

为了管理这一点，我们使用元地下城包文件。此文件充当中央目录，指定主地下城并列出与之关联的所有其他地下城内容。

让我们仔细看看 Primis 元地下城包是如何构建的：

```yaml
isEnabled: true
name: '&2[000-020] Primis 大冒险！'
customInfo:
- 为 EliteMobs 新手玩家准备的教程冒险
- ！
downloadLinkV2: https://discord.gg/9f5QSka
dungeonSizeCategory: LAIR
environment: NORMAL
protect: true
contentType: META_PACKAGE
containedPackages:
- primis_adventure.yml
- primis_blood_temple_sanctum.yml
- primis_gladius_invasion_dungeon.yml
setupMenuDescription:
- '&2为 0-20 级之间的玩家准备的软教程冒险！'
- '&2冒险是包含任务的大型地图，'
- '&2许多 Boss 和 NPC，以及其他内容！'
- '&2还有自定义模型！'
dungeonVersion: 21 #添加了地下城元包文件
```

如你所见，元地下城包文件与常规地下城包非常相似，但有一些关键区别。`contentType:` 设置为 `META_PACKAGE`
，并且有一个名为 `containedPackages:` 的附加设置。此设置列出了属于较大地下城一部分的所有其他地下城包。

创建元包时，请务必包含 `containedPackages:` 设置并列出属于较大地下城的所有地下城包。这确保了所有内容都在总体结构中正确链接和组织。

在对地下城进行版本控制时，所有版本控制都应通过元包进行管理。这是因为元包是确定整个地下城版本的基本包，也是用于在 `/em setup`
菜单中显示信息的包。

请记住，元包中列出的各个地下城仍可能会出现在 `/em teleport` 菜单中。为防止这种情况，你需要手动禁用每个地下城在其各自配置文件中的传送选项。

例如，在 Primis 地下城的情况下：

禁用 `primis_blood_temple_sanctum.yml` 和 `primis_gladius_invasion_dungeon.yml` 的菜单中的传送条目。
保持 `primis_adventure.yml` 的传送选项启用，因为它是玩家开始旅程并访问其他地下城的主要中心。
此设置确保玩家获得流畅的体验，同时保持地下城系统的适当结构和功能。

在命名文件时，我们建议使用以下命名约定：

`your_dungeon_name_meta_pack.yml`

***

# 推荐的 Boss 值

## 创建一个普通的地下城怪物

我们建议将设置 normalizedCombat 保留为 true。此设置会标准化所有怪物，使其在生命值和伤害方面均匀缩放，而不管它们的实体类型如何。

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 次攻击击杀
damageMultiplier: 1.0 #1.5 格伤害
```

当然，这是经过修改的版本，保留了清晰度和格式：

**注意：鉴于 `1.0` 是生命值和伤害的默认值，你可以简单地省略定义 `healthMultiplier` 或 `damageMultiplier`
并将 `normalizedCombat` 设置为 `true`。**

## 创建垃圾包

垃圾包数量众多，但不是很危险：

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 次攻击击杀
damageMultiplier: 0.5 #0.5 格伤害
```

## 创建增援

增援应该很容易死亡，但在伤害方面构成危险（这些值推荐用于 4 个或更多近战实体，实际使用可能会有所不同）：

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 次攻击击杀
damageMultiplier: 0.6 #1 格伤害
```

## 创建小 Boss

小 Boss 应该坚守阵地，并对玩家构成机制挑战。这应该是一个持续一段时间的技能测试，但不是什么极其致命的东西：

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 次攻击击杀
damageMultiplier: 1.2 #2 格伤害
```

## 创建 Boss

Boss 是一项真正的挑战，是地下城中高潮的结局，也是对所有事物都面临风险的技能的真正考验。遭遇战应该持续很长时间，死亡应该是一个存在的威胁。

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 次攻击击杀
damageMultiplier: 1.4 #2.5 格伤害
```

**这些推荐值仅仅是粗略的估计，最终值应根据具体遭遇战进行调整。**

**对于最终地下城 Boss 来说尤其如此；你可能希望大幅超过推荐的 `healthMultiplier` 的 7.0 值，以使最后的战斗具有史诗般的感觉。
**

***

# 打包用于分发的 EliteMobs 内容

最后，你可能希望打包你的地下城以进行存储或分发。

EliteMobs
具有一个导入系统，允许管理员快速导入、安装和卸载内容。[你可以在此处查看其工作原理。]($language$/elitemobs/setup.md)

## 修剪世界

有时，你可能需要减小 Minecraft
世界的大小，使其更轻便，从而更容易分发。这可以通过使用 [WorldBorder 插件](https://www.spigotmc.org/resources/worldborder-1-15.80466/)
来实现。尽管该插件被列为仅支持 MineCraft 1.19 版，但它在截至 2024 年 1 月 25 日的最新 MineCraft 版本上也能无缝运行。

<details>
<summary>提示</summary>
如果你是第一次这样做，最好备份你的世界，以防万一出现问题。
</details>

安装插件后，导航到世界的中间或你要修剪的特定区域。然后，执行命令 `/wb set x`，其中 `x` 表示你希望区域的大致半径大小。

<details>
<summary>提示</summary>
如果 <code>/wb</code> 对你不起作用，请尝试 <code>/worldborder:wb</code>。
</details>

执行此命令后，飞到世界的边缘，以验证世界边界是否已正确设置并覆盖了预期的大小。当你被推回时，你会在聊天中收到消息，从而识别出已到达世界边界边缘。

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

在上图中，我们旨在修剪紫色块周围的世界，仅留下它们周围的几个区块。为了实现这一点，我们站在红色方块上紫色区域的中间，并执行 `/wb set 50`
，将世界边界设置在紫色区域之外。

接下来，我们使用 `/wb trim [freq] [pad]` 命令，频率设置为 200，填充设置为
20。填充确定应在世界边界（紫色区域）周围保留多少区块，频率确定每秒应处理多少区块。运行 `/wb trim 200 20`
后，系统会提示你通过执行 `/wb trim confirm` 进行确认。我们确认该操作，经过一段时间后，我们的世界将被修剪，从而减小其大小并使其更方便分发。

你现在可以使用 `/wb clear all` 删除世界边界，或者如果你愿意，也可以保留它。

## 修剪世界文件夹

你的世界文件夹中有几个文件和文件夹，我们可以丢弃它们，因为插件不会全部使用它们。这将减小你的世界的大小，并使其更容易分发。

对于 NORMAL 世界环境：

要准备你的世界，请保留以下文件和文件夹：

1. **region** 文件夹
2. **data** 文件夹内的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）
3. **level.dat** 文件

你可以安全地删除世界文件夹中的所有其他文件和文件夹。这将为 NORMAL 环境正确设置你的世界。

对于 NETHER 和 THE_END 世界环境：

要准备你的世界，请保留以下文件和文件夹：

1. **DIM-1** 文件夹内的 **region** 文件夹（确保在复制时将其放在 **DIM-1** 文件夹中）
2. **data** 文件夹内的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）
3. **level.dat** 文件

你可以安全地删除世界文件夹中的所有其他文件和文件夹。这将为 NETHER 和 THE_END 环境正确设置你的世界。

## 运行打包命令

EliteMobs 具有 **`/em package <dungeonName> <version>`** 命令。此命令会遍历 EliteMobs
的所有配置文件夹，并将与 `dungeonName` 匹配的文件夹中的所有内容自动打包为压缩文件和 EliteMobs 的 `exports` 文件夹中的普通文件夹。

***因此，强烈建议你将要打包的内容保存在与你的包名称相同的文件夹中。*** 否则，你将必须手动收集文件并将其打包到分发的文件结构中。

## 添加地下城包文件

如果要创建地下城，你需要手动将地下城包文件添加到 exports
文件夹中新生成的文件夹中。你的地下城包配置文件应遵循上述格式，并放置在名为 `content_packages`
的文件夹中。[有关详细信息，请查看文件结构。](#file-structure)。

**确保完成后压缩你的地下城！**

## 文件结构

如果一切操作正确，则文件结构应类似于此示例，其中我们调用了地下城 `my_cool_dungeon`：

<details>
<summary>my_cool_dungeon 文件结构示例</summary>

- my_cool_dungeon.zip
    * content_packages
        * my_cool_dungeon.yml <- 这是你的地下城包配置文件所在的位置
    * worldcontainer
        * [你的世界文件夹在此处]
    * wormholes
        * my_cool_dungeon
            * [你的虫洞在此处]
    * npcs
        * my_cool_dungeon
            * [你的 NPC 在此处]
    * customtreasurechests
        * my_cool_dungeon
            * [你的宝箱在此处]
    * customquests
        * my_cool_dungeon
            * [你的任务在此处]
    * customitems
        * my_cool_dungeon
            * [你的自定义物品在此处]
    * custombosses
        * my_cool_dungeon
            * [你的自定义 Boss 在此处]
    * customarenas
        * my_cool_dungeon
            * [你的自定义竞技场在此处]
    * powers
        * my_cool_dungeon
            * [你的自定义力量在此处]
    * world_blueprints
        * my_cool_dungeon
            * [你的世界文件夹在此处，用于实例化的地下城]
    * customevents
        * my_cool_dungeon
            * [你的自定义事件在此处]
    * customspawns
        * my_cool_dungeon
            * [你的自定义生成在此处]
    * models
        * [你的 ModelEngine bbmodel 格式模型在此处，接受文件夹]

</details>

这允许大多数用户将文件直接拖放到他们的服务器上并使其立即工作。

***重要提示：在打包以进行分发时，请确保首先卸载迷你地下城！你不想分发已安装的迷你地下城，你希望管理员在他们的服务器上进行设置！
***

# 与社区分享你创建的地下城包

Discord 包含一个 [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons")
部分，人们可以在其中分享他们的迷你地下城创作。请随时贡献！
```
