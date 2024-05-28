[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# 什么是地牢？

你可以在[这里]($language$/elitemobs/dungeons.md)找到关于地牢的信息，包括预设地牢的信息。

***

# 什么是地牢打包器？

地牢打包器允许管理员不仅可以创建和打包地牢，还可以打包任何类型的精英怪物内容。这包括事件包，模型包，竞技场，NPC包，物品包等等。

<details>

<summary>为什么要使用地牢包？</summary>

- ***实例地牢！*** 实例地牢只能通过地牢包系统创建。
- ***迷你地牢的安全备份！*** 如果你制作了地牢包，你将能够在任何时候，出于任何原因，在任何服务器上部署和重新部署它。
- ***易于关闭和启用！*** 您总是可以执行`/em setup`并临时或永久地关闭和打开地牢包。
- ***易于分享！*** 如果您希望分享您的创作，地牢包可以被压缩并发送给其他人。如果你有兴趣，我们有一个专门的Discord房间供社区创作分享！
- ***传送！*** 地牢包会自动创建可以在`/em`菜单的传送页面中访问的传送位置，这在许多设置中可能非常有用。

</details>

# 创建地牢

以下设置用于创建一个应该放入`dungeonpackages`文件夹的配置文件。这些设置用于专门创建地牢，如果你只是想使用地牢打包器分发非地牢内容，如物品包或事件包，就不需要这些设置。

## 需要的插件

为了使用地牢打包器，你需要以下插件：

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - 保护迷你地牢

## 创建地牢，一步一步来

EliteMobs 曾有两种主要类型的地牢：基于世界的和基于模式的。

基于模式的地牢，与模式建筑相关联。他们现在已经被淘汰，不再受支持。

所有EliteMobs地牢现在都是基于世界的。

***

### 全局值

以下值适用于所有地牢

<div align="center">

### isEnabled

设置地牢包是否启用。

| 键         |      值       | 默认值 | 必填 |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [布尔](#boolean) | `false` |  ✅  |

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

设置内容的名字。支持 [色彩代码](#color_codes)。

| 键         |      值       | 默认值 | 必填 |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [字符串](#string) | `false` |   ✅  |

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

设置地牢使用的位置类型。

| 键         |        值         | 默认值 | 必填 |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  无   |  ✅  |

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

| 键         |                    值                    | 默认值 | 必填 |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  无   |  ✅   |

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

设置将在 `/em setup` 屏幕中显示的额外信息。仅供信息查阅。支持 [色彩代码](#color_codes)。

| 键         |        值        | 默认值 | 必填 |
|-------------|:-----------------:|:-------:|:---------:|
| `customInfo` | [字符串列表](#string_list) |  无   |  ✅   |

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

设置内容未下载时的下载链接。仅供信息查阅。

| 键         |      值       | 默认值 | 必填 |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [字符串](#string) |  无   | ❌ |

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

设置地牢包的大小类别。仅供信息 purposes.

| 键         |   值    | 默认 | 必填 |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | 特殊 [1] |  无   |    ✅      |

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

| 键 | 描述 |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Lairs 是一种小型地牢，主要关注一个大型boss战斗。|
| `SANCTUM`    | Sanctuary 是Lairs的实例化，这意味着他们围绕一个大型boss 战斗。 |
| `MINIDUNGEON` | Minidungeons 是一种中等大小的地牢，通常包含3-15个miniboss和一个大boss，以及大量的"trash" mobs,玩家经常去"农场"打金币和装备。|
| `DUNGEON`    | Dungeons 是Minidungeons 的实例版本。这是最传统的 MMORPG 类型的地牢，玩家组队通过一组trash mobs 和minibosses挑战最后的boss。|
| `RAID`    | 即将来临!|
| `ADVENTURE`    | Adventure是完整的冒险地图。他们包括任务线，npcs，大量的minibosses和bosses ，甚至可以包含他们自己的竞技场或地牢。|
| `ARENA`    | Arenas 是玩家在其中得到奖励的波浪式生存区。|
| `OTHER`    | 任何其他不属于上述类别的内容。 |

有关详细描述，请参阅 [Dungeons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

设置是否应通过WorldGuard保护地牢包。

| 键         |      值       | 默认 | 必填 |
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

设置地牢包的版本。

| 键         |  值  | 默认 | 必填 |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  无   |    ✅      |

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

设置出现在菜单中的信息。支持 [Color Codes](#colorcodes).

*只有在将“/em”设置为使用“/em alt”的书模式时才有效。*

| 键         |  值  | 默认 | 必填 |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  无   |    ✅      |

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

设置玩家进入地牢区域时显示的消息。支持 [Color Codes](#colorcodes)。

| 键         |  值  | 默认 | 必填 |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  无   |    ❌      |

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

设置玩家离开地牢区域时显示的消息。支持 [Color Codes](#colorcodes).

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `regionLeaveMessage` | [String](#string) |  无  |   ❌   |

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

设置地牢包是否有自定义模型（适用于ModelEngine/FreeMinecraftModels）。

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `hasCustomModels` | [Boolean](#boolean) |  无  |   ❌  |

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

设置用于此地牢相关文件的文件夹的名称。

**对于样本地牢是必需的!.**

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `dungeonConfigFolderName` | [String](#string) |  无  |   ❌  |

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

设置地牢应在EM菜单中显示的内容级别。

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `contentLevel` | [Integer](#integer) |  无  |   ❌  |

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

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |   ❌  |

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

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `worldName` | [String](#string) |  无  |   ✅  |

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

此功能设置虫洞世界的名称，这是一个与主世界链接的二次世界。它用于传送枢或独特的 boss chambers 等功能。

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `womholeWorldName` | [String](#string) |  无  |   ❌  |

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

| 键   |  值  | 默认 | 必填 |
|------|:----:|:-----:|:------:|
| `environment` | [环境](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  无  |   ✅  |

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

设置地牢包的传送位置。这是玩家在进入地牢时将被传送到的地方。

| 键              |       值     | 默认值 | 必填 |
|----------------|:--------:|:-------:|:----:|
| `teleportLocation` | [字符串](#string) |  无     |  ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

</div>

#### 实例化的地牢

*实例化的地牢每次有一组玩家想完成一个地牢时都会创建一个新的世界，并在完成时删除它。为了正确的工作，你必须在`EliteMobs` 的 `world_blueprints` 配置文件夹里放入一个跟随 `dungeonConfigFolderName` 的文件夹。*

*然后你把你将要使用的世界放在你创建的文件夹里面，确保世界的 `session.lock` 文件被删除。*

以下值仅适用于实例化的地牢。注意，所有的实例化地牢都是世界地牢，所以它们也使用来自世界地牢的值。

<div align="center">

***

### startLocation

设置实例化地牢起点的传送位置。这是玩家在开始实例化地牢时将被传送到的地方。

| 键           | 值   | 默认值 | 必填 |
|-------------|:----:|:-----:|:---:|
| `startLocation` | [字符串](#string) | 无 | ✅ |

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

设置进入地牢实例所需要的权限。

| 键       | 值    | 默认值 | 必填 |
|---------|:----:|:-----:|:---:|
| `permission` | [字符串](#string) | 无 | ❌ |

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

| 键      | 值   | 默认值 | 必填 |
|---------|:---:|:-----:|:----:|
| `minPlayerCount` | [整数](#integer) | `1` | ❌   |

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

设置开始地牢所需的最大玩家数量。

| 键      | 值   | 默认值 | 必填 |
|---------|:---:|:-----:|:----:|
| `maxPlayerCount` | [整数](#integer) | `5` | ❌   |

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

设置地牢要达成的目标列表。

| 键      | 值 | 默认值 | 必填 |
|---------|:--:|:-----:|:---:|
| `dungeonObjectives` | [字符串列表](#string_list) | 无 | ✅   |

<details> 

<summary><b>示例</b></summary>

<div align="left">

当前有两种地牢目标类型：

* 杀死目标：`filename=boss.yml:amount=X`
* 清理地牢的百分比：`clearpercentage=X.Y`

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

设置实例化地牢的难度列表。

**实例化地牢必须拥有此项！**

| 键      | 值 | 默认值 | 必填 |
|---------|:--:|:-----:|:---:|
| `difficulties` | 特殊 [1] | 无 | ❌  |

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

<summary><b>展开表</b></summary>

<div align="center">

设置实例化地牢的难度将会自动在进入地牢时创建不同的难度选择。

这里设置的难度名字将被用在自定义boss文件夹里，你可以设置基于难度的boss有哪些能力。

难度是有以下字段的列表格式：

|     键       | 描述   | 值 | 必填 |
|:-----------:|-------|----|:--:|
|   `name`    | 难度的名字，对玩家可见。|[字符串](#string)   |  ✅    |
|    `id`     | 难度的ID，用于自定义boss和自定义物品的基于难度的特性。|[字符串](#string)   |  ✅    |
| `levelSync` | 设置等级同步的等级（如果有的话）。等级同步会使所有玩家的装备在设定的值上达到最大值，使玩家无法因为等级过高而超过地牢等级，并保持地牢对后续运行的相关性。基于最终幻想14的等级同步系统。|[整数](#integer)   |  ❌    |


</div>

</details>

</div>

***

# 推荐的 Boss 值

## 创建一个普通的地牢小怪

我们建议保留设置normalizedCombat设为true。此设置会使所有小怪的健康和伤害等比例缩放，无论它们的实体类型是什么。

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #击杀需要4次攻击 
damageMultiplier: 1.0 #伤害为1.5颗心
```

当然，这里需要注意的是，由于 `1.0` 是健康和伤害的默认值，你可以简单地省略定义 `healthMultiplier` 或 `damageMultiplier` 并将 `normalizedCombat` 设置为 `true`。

## 创建小怪群

小怪群数量众多，但并不非常危险:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #击杀需要3次攻击 
damageMultiplier: 0.5 #伤害为0.5颗心
```

## 创建援兵

援兵应该很容易被杀，但是伤害方面却很危险（这些值适用于4+ 近战实体，实际使用可能会有所不同）：

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #击杀需要1次攻击 
damageMultiplier: 0.6 #伤害为1颗心
```

## 创建小型 Boss

小型 Boss 应该能站稳脚跟，并对玩家构成机械挑战。它应该是一个考验技巧的小结，但不是非常危险的东西：

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #击杀需要10次攻击 
damageMultiplier: 1.2 #伤害为2颗心
```

## 创建 Boss

Boss 是一个真正的挑战，是地牢中建立起来的结论和对一切有风险的技巧的真正测试。战斗应该很长，死亡应该是一个常在的威胁。

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #击杀需要23次攻击 
damageMultiplier: 1.4 #伤害为2.5颗心
```

**这些推荐值仅是粗略的估计，最终值应根据具体的遇战情况进行调整。**

**这对于最终的地牢Boss尤其重要；你可能会希望显著超过推荐的7.0的健康乘数值，以给最后的战斗带来那种史诗般的感觉。**

***

# 为 EliteMobs 内容打包以便分发

最后，你可能想为了存储或分发而打包你的地牢。

EliteMobs 有一个导入系统，允许管理员快速导入，安装和卸载内容。[你可以在这里看到它是如何工作的。]($language$/elitemobs/setup.md)

## 修剪世界

有时，你可能需要减小你的 Minecraft 世界的尺寸，使其更轻，从而更容易分发。这可以通过使用 [WorldBorder 插件](https://www.spigotmc.org/resources/worldborder-1-15.80466/) 来实现。尽管该插件被列为只支持到 MineCraft 1.19 版本，但它在 2024 年 1 月 25 日的最新 MineCraft 版本上也能顺利运行。

<details>
<summary>提示</summary>
如果你是第一次这么做，最好先备份你的世界，以防万一出错。
</details>

插件安装后，导航到你想修剪的世界的中心或特定区域。然后，执行命令 `/wb set x`，其中 `x` 代表你想要的区域的大致半径大小。

<details>
<summary>提示</summary>
如果 <code>/wb</code> 对你不起作用，试试 <code>/worldborder:wb</code>。
</details>

执行此命令后，飞行到你的世界的边缘，以验证世界边界是否正确设置并覆盖了预期的大小。当你被推回时，你会认出你已经到达了世界边界的边缘，并在聊天中附带一条消息。

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

在上图中，我们的目标是在紫色区域周围修剪世界，只留下紫色区域周围的几个区块。为了实现这个，我们站在红色方块上的紫色区域的中间，执行 `/wb set 50`，将世界边界设置在紫色区域的刚刚之外。

接下来，我们使用 `/wb trim [freq] [pad]` 命令，频率设置为 200，垫片设置为 20。垫带决定了在世界边界（紫色区域）周围应该留下多少区块，频率决定了每秒应该处理多少个区块。执行 `/wb trim 200 20` 后，我们会被提示确认通过执行 `/wb trim confirm`。我们确认这个操作，过一段时间后，我们的世界会被修剪，减小了它的尺寸，使得分发更加方便。

你现在可以使用 `/wb clear all` 删除世界边界，或者你希望的话就保留它。

## 修剪世界文件夹

在你的世界文件夹中有几个文件和文件夹，我们可以丢弃，因为插件并不使用所有的它们。这将减小你的世界的尺寸，使其更易于分发。

对于 NORMAL 环境的世界：

为了准备你的世界，保留以下文件和文件夹：

1. **region** 文件夹
2. **data** 文件夹内的 **raids.dat**（复制的时候确保它放在 **data** 文件夹内）
3. **level.dat** 文件

你可以安全的删除位于世界文件夹内的所有其他文件和文件夹。这将正确的设置你的世界为 NORMAL 环境。

对于 NETHER 和 THE_END 环境的世界：

为了准备你的世界，保留以下文件和文件夹：

1. **DIM-1** 文件夹内的 **region** 文件夹（复制的时候确保它放在 **DIM-1** 文件夹内）
2. **data** 文件夹内的 **raids.dat**（复制的时候确保它放在 **data** 文件夹内）
3. **level.dat** 文件

你可以安全的删除位于世界文件夹内的所有其他文件和文件夹。这将正确的设置你的世界为 NETHER 和 THE_END 环境。

## 运行打包命令

EliteMobs 有 **`/em package <dungeonName> <version>`** 命令。这个命令会遍历 EliteMobs 的所有配置文件夹，并自动将所有与 `dungeonName` 匹配的文件夹中的内容打包成一个压缩文件和一个普通文件夹，在 EliteMobs 的 `exports` 文件夹中。

***因此，我们强烈建议你将你想要打包的内容放在与你的包名相同的文件夹中。*** 否则，你将必须手动收集并将文件打包成文件分发的文件结构。

## 添加地下城包文件

如果您正在创建地下城，则需要手动将地下城包文件添加到新生成的“exports”文件夹中。您的地下城包配置文件应遵循上述格式，并放置在一个名为`dungeonpackages`的文件夹中。您可以参考[文件结构部分了解更多](#file-structure)。

**请确定您在完成后对地下城进行压缩！**

## 文件结构

如果您的操作一切正常，则文件结构应类似于此示例，我们将地下城命名为`my_cool_dungeon`：

<details>
<summary>my_cool_dungeon的文件结构示例</summary>

- my_cool_dungeon.zip
    * dungeonpackages
        * my_cool_dungeon.yml <- Your dungeon package configuration file goes here
    * worldcontainer
        * [你的世界文件夹放在这里]
    * wormholes
        * my_cool_dungeon
            * [你的虫洞在这里]
    * npcs
        * my_cool_dungeon
            * [你的NPC在这里]
    * customtreasurechests
        * my_cool_dungeon
            * [你的宝箱在这里]
    * customquests
        * my_cool_dungeon
            * [你的任务在这里]
    * customitems
        * my_cool_dungeon
            * [你的自定义物品在这里]
    * custombosses
        * my_cool_dungeon
            * [你的自定义Boss萌在这里]
    * customarenas
        * my_cool_dungeon
            * [你的自定义竞技场在这里]
    * powers
        * my_cool_dungeon
            * [你的自定义权限在这里]
    * world_blueprints
        * my_cool_dungeon
            * [你的世界文件夹在这里，用于实例化的地下城]
    * customevents
        * my_cool_dungeon
            * [你的自定义事件在这里]
    * customspawns
        * my_cool_dungeon
            * [你的自定义刷新点在这里]
    * models
        * [你的ModelEngine bbmodel格式的模型在这里，接受的文件夹]

</details>

这使大多数用户可以直接将文件拖放到他们的服务器上并立即运行。

***重要提示：打包供应链发放时，务必先卸载MINIDUNGEON！你不想派发已经安装的minidungeons，你希望管理员们在他们的服务器上进行设置！***

# 与社区分享你创建的Dungeon Packages

Discord有一个[#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons")部分，大家可以在那里分享他们的Minidungeon作品。欢迎你进行贡献！