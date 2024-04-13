# 创建内容

***

## 创建构建

对于 BetterStructures，您可以构建的内容没有任何限制，但我们推荐将结构的尺寸保持在 100x100x100 的方块以下，以适应一般的世界环境与性能。虽然如此，它仍能轻松处理更大的结构。

***

### 特殊方块

BetterStructures 有两种特殊方块：障碍物和基岩。其他任何 WorldEdit / FAWE 可以粘贴的方块都会按常规粘贴，但障碍物和基岩方块则是例外。这些方块不会被粘贴，而是由以下的自定义行为替换：

***

#### 障碍物

障碍物方块使插件在该位置不放置任何方块。这意味着原本在正常世界生成中的任何方块都会维持原样。

建筑师可以利用这个方块来圆润粘贴的边缘，使其看起来更自然，或按需铸造墙壁，适应潜在的洞穴，等等。

***

#### 基岩

基岩方块确保该位置有一个固体方块。这意味着如果在默认的世界生成中已经有一个固体方块，那么该方块不会被修改；然而，如果该方块是空气或液体，它将被[支架](#pedestalmaterial)中的固体方块替换。

建筑师可以用此来创建带有矿车轨道之类的特性的地板，或者保证在不覆写可能已经存在的固体方块的前提下存在地板，使建筑看起来更具有机感。

***

### 出生标志

BetterStructures 可以使用具有特定文本的标志，在建筑的特定位置生成怪物，甚至是来自 EliteMobs 和 MythicMobs 的 Boss。

***

##### 生成普通怪物

如果你把一个普通的标志放在某处，然后确保第一行写着 [spawn]，第二行写着[按照 Spigot API 的实体类型名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)，你将会在你指定的位置生成一个持久性的实体。

作为例子，如果你的标志的第一行写着 [spawn]，第二行写着 ZOMBIE，你将在建筑布置的位置生成一个僵尸。这也可以用于生成非生物实体，如盔甲架或者末影水晶。

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### 生成精英怪物 (推荐的 Boss 插件)

BetterStructures 也有高级 EliteMobs 整合，它能基于建筑和生成标志创建 Boss 竞技场。

如果您在某处放置一个普通标志，使第一行为 [elitemobs]，那么你可以使用其他所有行来指定需要使用的 Boss 文件。

以一个示例，如果你在第一行做了 [elitemobs]，然后在第二行写了 `test_boss.yml`，你会生成测试 Boss。如果你有一个非常长的文件名，例如 `boss_with_very_long_filename.yml`，你可以把它分成多行，所以你做第二行为 `boss_with_very_`，然后第三行为 `long_filename.yml`，然后它就可以工作了。

需要提醒的是，如果你的服务器使用 WorldGuard，那么战斗竞技场在玩家杀掉所有建筑内的 Boss 前，都会受到保护。

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### 生成 Mythic Mobs

BetterStructures 也有简单的 MythicMobs 整合，它能在建筑中生成 MythicMobs 的怪物。在一个普通标志的第一行，写上 `[mythicmobs]`，然后在第二行使用怪物标识符。你可以在第三行使用一个数字来设置怪物的等级。

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## 图纸

图纸是由 WorldEdit 或者 FastAsyncWorldEdit 生成的文件，其中包含 BetterStructures 将使用的建筑的所有方块。

关于如何制作图纸的详细说明在此未被包含，因为它们已经在 WorldEdit 和 FastAsyncWorldEdit 的文档中详细描述了，但一般操作如下：

1) 选择建筑的一个角落，然后使用命令 `//pos1`
2) 选择对角的角落，然后使用命令 `//pos2`
3) 使用 `//copy` 命令
4) 使用命令 `/schem save <schematicname>`，其中 `<schematicName>` 是你为你的图纸文件想要使用的文件名。

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*确保你在点 1 运行命令 `//pos1`，在点 2 运行命令 `//pos2`！*

***

#### 锚点

锚点是你运行图纸的 `//copy` 命令的地方。当仅仅粘贴一个图纸的时候，这就是你相对于建筑的立足地点。

锚点的正确设置对于图纸正确工作来说非常重要。

* 对于_地面建筑_，建议您在复制建筑时站在地板的最低点。
* 对于_地下建筑_，建议您站在建筑的顶部。
* 对于_水体建筑_，建议您站在水的上方。
* 对于_空中建筑_，建议您站在建筑的上方。

**请注意，您应尽量贴近或直接在建筑上方复制 - 距离越远，粘贴建筑时的延迟就会越大。**

***

# 图纸配置

每个图纸文件都有一个图纸配置。如果一个图纸文件刚被添加到服务器，该配置将在重启后或在 `/betterstructures reload` 后生成。

这些配置允许你设置图纸粘贴的以下设置：

***

## isEnabled

设置图纸是否启用。如果被禁用，它将不会被放置在任何地方。

***

## weight

weight 设置了图纸的权重，表示其被选中的可能性。

默认值是 `1.0`。如果你设定一个建筑的 weight 是 `2.0`，它被选中的可能性会比其他建筑高2倍。如果你设定的是 `0.5`，它被选中的可能性则只有一半。

_**注意:** 请记住，特定构建被选择的可能性，会根据总共有多少构建在竞争将要放置结构的地点而大幅变化！_

***

## pedestalMaterial

**重要: 可选的字段！**

支架材料使用 [spigot api material names](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 来设置支架方块的材料类型 - 需要使用它们，否则无法工作！

支架是被放置在地面和地下建筑下面的方块，用于填充任何空气空白，提高建筑与世界的融合度。这些方块也会替换图纸中的基岩方块。

当在配置中没有定义时，将会分析粘贴位置下的方块，并选择最合适的材料，以达到最佳的整合效果。

***

## generatorConfigFilename

此选项设置图纸将使用的配置文件的名称，以文件名形式。这需要完全的文件名，包括 `.yml` 扩展名。例如，要使用者 `generator_surface_global.yml` 中定义的生成器，正确的选项将是 `generatorConfigFilename: generator_surface_global.yml`，这个文件可以在生成器配置文件夹中找到。

***

## treasureFile

设置此结构将使用的[宝藏文件]($language$/betterstructures/creating_treasure.md)，覆盖由结构的[生成器]($language$/betterstructures/creating_generators.md)设置的宝藏文件。这通常是不推荐的，除非它是一个非常特殊的建筑。一般来说，修改或创建生成器以达到这个目的更好。

# 自定义内容

BetterStructures 分发的所有内容都是可编辑的。您可以根据您的喜好修改任何图纸文件和生成器设置。

上面的内容创建指南也是一个可以帮助您编辑现有的内容的指导。