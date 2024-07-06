[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地下城？

您可以在[此处]($language$/elitemobs/dungeons.md)找到有关地下城的信息，包括有关预制地下城的信息。

***

# 什么是地下城打包程序？

地下城打包程序不仅允许管理员创建和打包地下城，还可以打包任何类型的 EliteMobs 内容。这包括事件包、模型包、竞技场、NPC 包、物品包等等。

<details>

<summary>为什么要使用地下城包？</summary>

- ***副本地下城！*** 副本地下城只能通过地下城包系统创建。
- ***小型地下城的安全备份！*** 如果您制作了地下城包，您将能够随时出于任何原因在您想要的任何服务器上部署和重新部署它。
- ***易于打开和关闭！*** 您始终可以执行 `/em setup` 并临时或永久关闭和打开地下城包。
- ***易于分享！*** 如果您想分享您的作品，只需将地下城包压缩并发送给其他人即可。如果您有兴趣，有一个专门用于社区创作的 Discord 房间！
- ***传送！*** 地下城包会自动创建传送位置，这些位置可以在 `/em` 菜单的“传送”页面中访问，这在很多设置中都非常有用。

</details>

# 创建地下城

以下设置用于创建一个配置文件，该文件应放在 `dungeonpackages` 文件夹中。这些设置专门用于创建地下城，如果您只想使用地下城打包程序分发非地下城内容（例如一包物品或事件），则不需要这些设置。

## 必需的插件

要使用地下城打包程序，您将需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护小型地下城

## 创建地下城，一步一步

EliteMobs 以前有两种主要类型的地下城：基于世界的地下城和基于原理图的地下城。

基于原理图的地下城与原理图构建相关联。它们现在已逐步淘汰，不再受支持。

所有 EliteMobs 地下城现在都是基于世界的。

***

### 全局值

以下值适用于所有地下城

<div align="center">

### isEnabled

设置地下城包是否启用。

| 键        | 值              | 默认值  | 必填 |
|------------|:-----------------|---------|:-----:|
| `isEnabled` | [布尔值](#布尔值) | `false` | ✅   |

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

设置内容的名称。支持 [颜色代码](#颜色代码)。

| 键     | 值              | 默认值  | 必填 |
|---------|:-----------------|---------|:-----:|
| `name` | [字符串](#字符串) | `false` | ✅   |

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

| 键                    | 值                  | 默认值 | 必填 |
|------------------------|:----------------------:|--------|:-----:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` | 无      | ✅   |

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

| 键          | 值                              | 默认值 | 必填 |
|--------------|:---------------------------------:|--------|:-----:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` | 无      | ✅   |

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

设置将出现在 `/em setup` 屏幕中的附加信息。仅供参考。支持 [颜色代码](#颜色代码)。

| 键           | 值                     | 默认值 | 必填 |
|---------------|:------------------------:|--------|:-----:|
| `customInfo` | [字符串列表](#字符串列表)      | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
customInfo:
- '&a最好的地下城。'
- '&a作者：酷玩家'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

设置内容未下载时的下载链接。仅供参考。

| 键            | 值              | 默认值 | 必填 |
|----------------|:-----------------|--------|:-----:|
| `downloadLink` | [字符串](#字符串) | 无      | ❌   |

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

设置地下城包的尺寸类别。仅供参考。

| 键                    | 值           | 默认值 | 必填 |
|------------------------|:------------:|--------|:-----:|
| `dungeonSizeCategory` | 特殊 [1]      | 无      | ✅   |

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

| 键             | 描述                                                                                                                                                                  |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`          | 巢穴是一种小型地下城，专注于一场大型 Boss 战斗。                                                                                                                |
| `SANCTUM`        | 圣殿相当于副本化的巢穴。这意味着它们专注于一场大型 Boss 战斗。                                                                                                          |
| `MINIDUNGEON`   | 小型地下城是一种中等规模的地下城，通常包含 3-15 个小 Boss 和一个大 Boss，以及许多“垃圾”怪物，这些怪物 meant to be 被玩家“刷怪”以获取硬币和装备。                    |
| `DUNGEON`       | 地下城相当于副本化的小型地下城。这是最传统的 MMORPG 类型的地下城，玩家组队并通过一系列垃圾怪物和小 Boss 的挑战，最终与最终 Boss 战斗。                                                               |
| `RAID`          | 即将推出！                                                                                                                                                        |
| `ADVENTURE`     | 冒险是完整的冒险地图。它们包括任务线、npc、大量小 Boss 和 Boss，甚至可以包含自己的竞技场或地下城。                                                                            |
| `ARENA`         | 竞技场是基于波次的生存区域，玩家在击败波次后会获得奖励。                                                                                                                 |
| `OTHER`         | 其他任何不属于先前类别的内容。                                                                                                                                         |

有关更详细的描述，请参阅 [地下城]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置地下城包是否应受 WorldGuard 保护。

| 键         | 值              | 默认值 | 必填 |
|-------------|:-----------------|---------|:-----:|
| `protect` | [布尔值](#布尔值) | `true`  | ❌   |

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

| 键             | 值                | 默认值 | 必填 |
|----------------|:------------------:|--------|:-----:|
| `dungeonVersion` | [整数](#整数)          | 无      | ✅   |

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

设置菜单中显示的信息。支持 [颜色代码](#颜色代码)。

*仅当使用 `/em alt` 将 `/em` 设置为书籍模式时才有效。*

| 键            | 值              | 默认值 | 必填 |
|----------------|:-----------------|--------|:-----:|
| `playerInfo` | [字符串](#字符串) | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
playerInfo: '难度：&a1 人简单内容！'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

设置玩家进入地下城区域时出现的消息。支持 [颜色代码](#颜色代码)。

| 键                   | 值              | 默认值 | 必填 |
|-----------------------|:-----------------|--------|:-----:|
| `regionEnterMessage` | [字符串](#字符串) | 无      | ❌   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a您已进入地下城！'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

设置玩家离开地下城区域时出现的消息。支持 [颜色代码](#颜色代码)。

| 键                   | 值              | 默认值 | 必填 |
|-----------------------|:-----------------|--------|:-----:|
| `regionLeaveMessage` | [字符串](#字符串) | 无      | ❌   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a您已离开地下城！'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

设置地下城包是否具有自定义模型（对于 ModelEngine 或 FreeMinecraftModels）。

| 键                | 值              | 默认值 | 必填 |
|--------------------|:-----------------|--------|:-----:|
| `hasCustomModels` | [布尔值](#布尔值) | 无      | ❌   |

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

设置用于与此地下城关联的文件的文件夹名称。

**对于副本地下城是必需的！**

| 键                       | 值              | 默认值 | 必填 |
|---------------------------|:-----------------|--------|:-----:|
| `dungeonConfigFolderName` | [字符串](#字符串) | 无      | ❌   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: 我的地下城_文件夹
```

</div>

</details>

***

### contentLevel

设置地下城应在 EM 菜单中显示的内容等级。

| 键              | 值                | 默认值 | 必填 |
|-----------------|:------------------:|--------|:-----:|
| `contentLevel` | [整数](#整数)          | 无      | ❌   |

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

设置地下城是否应该成为附魔挑战地下城。

| 键                     | 值              | 默认值  | 必填 |
|-------------------------|:-----------------|---------|:-----:|
| `enchantmentChallenge` | [布尔值](#布尔值) | `false` | ❌   |

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

设置要打包的世界名称。

| 键         | 值              | 默认值 | 必填 |
|-------------|:-----------------|--------|:-----:|
| `worldName` | [字符串](#字符串) | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
worldName: 我的 Minecraft 世界
```

</div>

</details>

***

### womholeWorldName

此函数设置虫洞世界的名称，该世界充当与主世界链接的次要世界。它用于传送中心或独特 Boss 房间等功能。

| 键                | 值              | 默认值 | 必填 |
|--------------------|:-----------------|--------|:-----:|
| `womholeWorldName` | [字符串](#字符串) | 无      | ❌   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
womholeWorldName: 我的 Minecraft 世界_虫洞
```

</div>

</details>

***

### environment

设置世界的环境。

| 键          | 值                                                                              | 默认值 | 必填 |
|--------------|:----------------------------------------------------------------------------------:|--------|:-----:|
| `environment` | [环境](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) | 无      | ✅   |

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

| 键                  | 值              | 默认值 | 必填 |
|----------------------|:-----------------|--------|:-----:|
| `teleportLocation` | [字符串](#字符串) | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: 我的 Minecraft 世界,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

允许或禁止爆炸在地下城中损坏方块。爆炸被认为是精英爆炸，因此对积木的任何损坏将在 2 分钟内再生。

| 键                          | 值              | 默认值  | 必填 |
|-----------------------------|:-----------------|---------|:-----:|
| `allowExplosionBlockDamage` | [布尔值](#布尔值) | `false` | ❌   |

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

*副本地下城每次都为想要完成地下城的一组玩家创建一个新的世界，并在完成后将其删除。为了使其正常工作，您必须在 EliteMobs 的 `world_blueprints` 配置文件夹中放置一个遵循 `dungeonConfigFolderName` 的文件夹。*

*然后，将您要使用的世界放置在您创建的文件夹中，确保删除了世界的 `session.lock` 文件。*

以下值仅适用于副本地下城。请注意，所有副本地下城都是世界地下城，因此它们也使用来自世界地下城的值。

<div align="center">

***

### startLocation

设置副本地下城起点的传送位置。这是玩家使用 `/em start` 启动副本地下城时将被传送到的地方。

| 键              | 值              | 默认值 | 必填 |
|-----------------|:-----------------|--------|:-----:|
| `startLocation` | [字符串](#字符串) | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
startLocation: 我的 Minecraft 世界,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

设置进入地下城副本所需的权限。

| 键          | 值              | 默认值 | 必填 |
|--------------|:-----------------|--------|:-----:|
| `permission` | [字符串](#字符串) | 无      | ❌   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
permission: elitedungeon.我的权限
```

</div>

</details>

***

### minPlayerCount

设置启动地下城所需的最小玩家数量。

| 键              | 值                | 默认值 | 必填 |
|-----------------|:------------------:|--------|:-----:|
| `minPlayerCount` | [整数](#整数)          | `1`    | ❌   |

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

设置启动地下城所需的最小玩家数量。

| 键              | 值                | 默认值 | 必填 |
|-----------------|:------------------:|--------|:-----:|
| `maxPlayerCount` | [整数](#整数)          | `5`    | ❌   |

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

设置将地下城视为已完成所需的地下城目标列表。

| 键                 | 值                     | 默认值 | 必填 |
|---------------------|:------------------------:|--------|:-----:|
| `dungeonObjectives` | [字符串列表](#字符串列表)      | 无      | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

当前有两种地下城目标类型：

* 杀死目标：`filename=boss.yml:amount=X`
* 杀死地下城百分比的怪物：`clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=地下城_最终_Boss.yml
- filename=地下城_小 Boss_一.yml
- filename=地下城_小 Boss_二.yml
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

**对于副本地下城是必需的！**

| 键           | 值           | 默认值 | 必填 |
|---------------|:------------:|--------|:-----:|
| `difficulties` | 特殊 [1]      | 无      | ❌   |

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

设置副本地下城难度将在进入地下城时自动创建不同的难度选项。

此处设置的难度名称将是自定义 Boss 文件夹中使用的名称，您可以在其中根据难度设置 Boss 拥有的力量。

难度采用列表格式，具有以下字段：

| 键            | 描述                                                                                                                                                                                                                                                        | 值              | 必填 |
|----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-----------------|--------|
| `name`          | 玩家看到的难度名称。                                                                                                                                                                                                                                             | [字符串](#字符串) | ✅   |
| `id`            | 难度的 ID，用于自定义 Boss 和自定义物品的基于难度的功能。                                                                                                                                                                                                          | [字符串](#字符串) | ✅   |
| `levelSync`     | 设置等级同步的等级（如果有）。等级同步使所有玩家的装备最大值达到设定值，使玩家无法在地下城中获得过高的等级，并使其在以后的运行中保持相关性。基于最终幻想 14 等级同步系统。                                                                                          | [整数](#整数)          | ❌   |


</div>

</details>

</div>

***

# 推荐的 Boss 值

## 创建普通的地下城怪物

我们建议将 normalizedCombat 设置保留为 true。此设置将所有怪物的生命值和伤害标准化为相同的比例，而不管它们的实体类型如何。

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 次攻击杀死
damageMultiplier: 1.0 #1.5 颗心伤害
```

当然，以下是保留了清晰度和格式的修订版本：

**注意：鉴于 `1.0` 是生命值和伤害的默认值，您可以简单地省略定义 `healthMultiplier` 或 `damageMultiplier` 并将 `normalizedCombat` 设置为 `true`。**

## 创建垃圾怪物群

垃圾怪物群数量众多，但并不十分危险：

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 次攻击杀死
damageMultiplier: 0.5 #0.5 颗心伤害
```

## 创建增援

增援应该很容易被杀死，但在伤害方面构成威胁（这些值建议用于 4 个以上的近战实体，实际使用可能会有所不同）：

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 次攻击杀死
damageMultiplier: 0.6 #1 颗心伤害
```

## 创建小 Boss

小 Boss 应该站稳脚跟，并对玩家构成机制挑战。它应该是一项持续一段时间的技能考验，但不是极度致命的东西：

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 次攻击杀死
damageMultiplier: 1.2 #2 颗心伤害
```

## 创建 Boss

Boss 是一个真正的挑战，是地下城积累的高潮，也是一场真正的技能考验，一切都岌岌可危。遭遇战应该很长，死亡应该是一个现实的威胁。

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 次攻击杀死
damageMultiplier: 1.4 #2.5 颗心伤害
```

**这些推荐值仅仅是粗略的估计，最终值应根据具体的遭遇战进行调整。**

**这对于最终的地下城 Boss 尤其重要；您可能希望显着超过推荐的 7.0 的 healthMultiplier 值，以赋予最后一场战斗史诗般的感觉。**

***

# 打包 EliteMobs 内容以供分发

最后，您可能希望打包您的地下城以供存储或分发。

EliteMobs 有一个导入系统，允许管理员快速导入、安装和卸载内容。[您可以在此处查看其工作原理。]($language$/elitemobs/setup.md)

## 修剪世界

有时，您可能需要缩小 Minecraft 世界的大小，使其更轻，从而更易于分发。这可以通过使用 [WorldBorder 插件](https://www.spigotmc.org/resources/worldborder-1-15.80466/) 来实现。尽管该插件被列为仅支持 MineCraft 直至 1.19 版本，但截至 2024 年 1 月 25 日，它在最新的 MineCraft 版本上无缝运行。

<details>
<summary>提示</summary>
如果您是第一次执行此操作，最好创建您的世界的备份，以防万一出现问题。
</details>

安装插件后，导航到世界中心或您要修剪的特定区域。然后，执行命令 `/wb set x`，其中 `x` 表示您希望为您的区域设置的大致半径大小。

<details>
<summary>提示</summary>
如果 <code>/wb</code> 对您不起作用，请尝试 <code>/worldborder:wb</code>。
</details>

执行此命令后，飞到您的世界的边缘，以验证世界边界是否已正确设置并覆盖了预期的大小。当您被推回时，您会识别到已到达世界边界边缘，并在聊天中收到一条消息。

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

在上图中，我们的目标是修剪紫色方块周围的世界，只留下它们周围的几个区块。为此，我们站在红色方块上紫色区域的中间，并执行 `/wb set 50`，将世界边界设置在紫色区域之外。

接下来，我们使用 `/wb trim [频率] [填充]` 命令，将频率设置为 200，填充设置为 20。填充确定应该在世界边界（紫色区域）周围留下多少个区块，频率确定每秒应该处理多少个区块。运行 `/wb trim 200 20` 后，系统将提示我们通过执行 `/wb trim confirm` 来确认。我们确认操作，一段时间后，我们的世界将被修剪，从而减小其大小并使其更易于分发。

您现在可以使用 `/wb clear all` 删除世界边界，或者如果您愿意，也可以保留它。

## 修剪世界文件夹

您的世界文件夹中有一些文件和文件夹我们可以丢弃，因为插件不会使用所有这些文件和文件夹。这将减少您的世界的大小，并使其更易于分发。

对于普通的世界环境：

要准备您的世界，请保留以下文件和文件夹：

1.  **region** 文件夹
2.  **data** 文件夹中的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）
3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为普通环境正确设置您的世界。

对于地狱和末地世界环境：

要准备您的世界，请保留以下文件和文件夹：

1.  **DIM-1** 文件夹中的 **region** 文件夹（确保在复制时将其放在 **DIM-1** 文件夹中）
2.  **data** 文件夹中的 **raids.dat**（确保在复制时将其放在 **data** 文件夹中）
3.  **level.dat** 文件

您可以安全地删除世界文件夹中所有其他文件和文件夹。这将为地狱和末地环境正确设置您的世界。

## 运行打包命令

EliteMobs 具有 **`/em package <dungeonName> <version>`** 命令。此命令会遍历 EliteMobs 的所有配置文件夹，并将文件夹中与 `dungeonName` 匹配的所有内容自动打包到 EliteMobs 的 `exports` 文件夹中的压缩文件和普通文件夹中。

***因此，强烈建议您将要打包的内容放在与您的包名称相同的文件夹中。***否则，您将必须手动收集文件并将它们打包到文件结构中以供分发。

## 添加地下城包文件

如果您正在创建地下城，则需要将地下城包文件手动添加到导出文件夹中新生成的文件夹中。您的地下城包配置文件应遵循上述格式，并放在名为 `dungeonpackages` 的文件夹中。[有关更多信息，请查看文件结构。](#文件结构)。

**确保在完成后压缩您的地下城！**

## 文件结构

如果您正确完成了所有操作，则文件结构应类似于此示例，我们将地下城命名为 `我的酷地下城`：

<details>
<summary>我的酷地下城 文件结构示例</summary>

- 我的酷地下城.zip
    * dungeonpackages
        * 我的酷地下城.yml <- 这是您的地下城包配置文件所在的位置
    * worldcontainer
        * [您的世界文件夹放在这里]
    * wormholes
        * 我的酷地下城
            * [您的虫洞放在这里]
    * npcs
        * 我的酷地下城
            * [您的 NPC 放在这里]
    * customtreasurechests
        * 我的酷地下城
            * [您的宝箱放在这里]
    * customquests
        * 我的酷地下城
            * [您的任务放在这里]
    * customitems
        * 我的酷地下城
            * [您的自定义物品放在这里]
    * custombosses
        * 我的酷地下城
            * [您的自定义 Boss 放在这里]
    * customarenas
        * 我的酷地下城
            * [您的自定义竞技场放在这里]
    * powers
        * 我的酷地下城
            * [您的自定义力量放在这里]
    * world_blueprints
        * 我的酷地下城
            * [您的世界文件夹放在这里，用于副本地下城]
    * customevents
        * 我的酷地下城
            * [您的自定义事件放在这里]
    * customspawns
        * 我的酷地下城
            * [您的自定义生成放在这里]
    * models
        * [您的 ModelEngine bbmodel 格式模型放在这里，接受文件夹]

</details>

这允许大多数用户将文件直接拖放到他们的服务器上并立即使用它。

***重要提示：在打包以供分发时，请确保先卸载小型地下城！您不想分发已安装的小型地下城，您希望管理员在他们的服务器上设置它们！***

# 与社区分享您创建的地下城包

Discord 包含一个 [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") 部分，人们可以在其中分享他们的小型地下城作品。欢迎您贡献！



