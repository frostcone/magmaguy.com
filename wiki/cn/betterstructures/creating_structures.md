好的，我将把输入的文本翻译成简体中文，并保留 Markdown 格式。

# 创建内容

***

## 创建建筑

BetterStructures 对你可以创建的建筑没有任何限制，但为了更好地适应世界和性能考虑，建议将结构尺寸保持在 100x100x100 方块以下。尽管如此，它也能轻松处理更大的结构。

***

### 特殊方块

BetterStructures 有两种特殊方块：屏障和基岩。WorldEdit 可以粘贴的任何其他方块都会正常粘贴，但屏障和基岩方块是例外。这些方块不会被粘贴，而是被以下自定义行为取代：

***

#### 屏障

屏障方块会使插件在该位置不放置任何方块。这意味着在正常世界生成中原本在该位置的方块将保留在那里。

建筑师可以使用它来使粘贴的边缘更圆润，使其看起来更自然，或者将墙壁塑造成潜在的洞穴，以及其他技巧。

***

#### 基岩

基岩方块会使插件保证在该位置有一个实体方块。这意味着如果在默认世界生成中已经有一个实体方块在那里，该方块将不会被修改；但是，如果该方块是空气或液体，它将被替换为来自 [pedestal](#pedestalmaterial) 的实体方块。

建筑师可以使用它来创建带有特定功能的地面，例如矿车轨道的地面，或者保证地面存在而不会覆盖世界中该位置可能已经存在的实体方块，从而使建筑看起来更自然。

***

### 生成告示牌

BetterStructures 可以使用带有特定文本的告示牌，在建筑的特定位置生成来自 EliteMobs 和 MythicMobs 的生物甚至 Boss。

***

##### 生成原版生物

如果你放置一个普通告示牌，并确保第一行写着 `[spawn]`，第二行写着 [遵循 Spigot API 的实体类型名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)，你将在该位置生成一个指定类型的持久性实体。

例如，如果你的告示牌第一行写着 `[spawn]`，第二行写着 `ZOMBIE`，那么当建筑被放置时，你将在该位置生成一个僵尸。这也可以用于非生物实体，如盔甲架或末影水晶。

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### 生成精英怪物 (推荐的 Boss 插件)

BetterStructures 还具有高级的 EliteMobs 集成，允许它基于建筑和生成告示牌创建 Boss 竞技场。

如果你放置一个普通告示牌，并使第一行写着 `[elitemobs]`，那么你可以使用其他行来指定要使用的 Boss 文件。

例如，如果你在第一行写 `[elitemobs]`，然后在第二行写 `test_boss.yml`，你将生成测试 Boss。如果你的文件名很长，例如 boss_with_very_long_filename.yml，你可以将其分成多行，例如第二行写 `boss_with_very_`，然后第三行写 `long_filename.yml`，这样也能工作。

提醒一下，如果你的服务器使用 WorldGuard，默认情况下，战斗竞技场将受到保护，直到玩家杀死建筑中的所有 Boss。

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

## 结构文件 (Schematics)

结构文件是由 WorldEdit 或 FastAsyncWorldEdit 生成的文件，其中包含 BetterStructures 将使用的建筑方块信息。

此处不包含如何制作结构文件的详细说明，因为 WorldEdit 和 FastAsyncWorldEdit 的文档中已详细说明，但通常通过以下步骤完成：

1) 选择建筑的一个角，使用命令 `//pos1`
2) 选择对角，使用命令 `//pos2`
3) 使用 `//copy` 命令
4) 使用命令 `/schem save <schematicname>`，其中 `<schematicName>` 是你想要用于结构文件的文件名。

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*确保你在点 1 运行命令 `//pos1`，在点 2 运行命令 `//pos2`！*

***

#### 锚点

锚点是你运行 `//copy` 命令来复制结构文件的地方。简单粘贴结构文件时，锚点是你相对于建筑所站的位置。

锚点对于结构文件正常工作至关重要。

* 对于_地面建筑_，建议你在复制建筑时站在地面的最低点。
* 对于_地下建筑_，建议你站在建筑顶部。
* 对于_液体建筑_，建议你站在水面上。
* 对于_空中建筑_，建议你站在建筑顶部。

**请注意，复制时应始终非常靠近或直接站在建筑顶部——你离得越远，粘贴建筑时就越卡顿。**

***

# 结构文件配置

每个结构文件都有一个结构文件配置。如果服务器刚刚添加了一个结构文件，配置将在重启或执行 `/betterstructures reload` 后生成。

这些配置允许你为结构文件粘贴设置以下选项：

***

## isEnabled

设置结构文件是否启用。如果禁用，它将不会被放置在任何地方。

***

## weight

Weight 设置结构文件被选中的概率权重。

默认值为 `1.0`。如果你将一个建筑的权重设置为 `2.0`，它被选中的可能性将是其他建筑的 2 倍。如果你将其设置为 `0.5`，它被选中的几率将减半。

_**注意：** 请记住，特定建筑被选中的几率会根据总共有多少建筑竞争该位置而发生巨大变化！_

***

## pedestalMaterial

**重要：可选字段！**

Pedestal material 使用 [spigot api material names](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置基座方块的材质类型——请使用它们，否则将无法工作！

基座是放置在地面和地下建筑下方以填充空气间隙并改善建筑与世界契合度的方块。这些方块也与结构文件中替换基岩方块的方块相同。

当配置中未定义任何内容时，将分析粘贴位置下方的方块，并选择最合适的方块作为材质，以获得最佳的集成外观。

***

## generatorConfigFilename

此选项按文件名设置结构文件将使用的配置文件名称。这需要完整的文件名，包括末尾的 `.yml` 扩展名。例如，如果你想使用 `generator_surface_global.yml` 中定义的生成器，你可以设置 `generatorConfigFilename: generator_surface_global.yml`。你可以在生成器配置文件文件夹中找到该文件。

***

## treasureFile

设置此结构将使用的[宝藏文件]($language$/betterstructures/creating_treasure.md)，覆盖结构[生成器]($language$/betterstructures/creating_generators.md)设置的宝藏文件。除非是用于非常特殊的建筑，否则通常不建议这样做。通常最好为此目的修改或创建生成器。

# 自定义内容

BetterStructures 中分发的所有内容都是可编辑的。你可以根据自己的喜好修改任何结构文件和生成器设置。

上面的内容创建指南也可以帮助你编辑现有内容。