# 创建内容

***

## 创建建筑

BetterStructures 对你可以建造的内容没有限制，虽然建议为了世界整体的契合度和性能，将结构的大小控制在 100x100x100 个方块以内。也就是说，它可以轻松处理更大的结构。

***

### 特殊方块

BetterStructures 有两个特殊方块：屏障和基岩。WorldEdit / FAWE 可以粘贴的任何其他方块都会正常粘贴，但屏障和基岩方块除外。这些方块不会被粘贴，而是被以下自定义行为替换：

***

#### 屏障

屏障方块使插件在该位置不放置任何方块。这意味着在普通世界生成中原本存在的任何方块都将保留在那里。

建造者可以使用它来圆化粘贴的边缘，使其看起来更自然，或者将墙壁模塑到一个潜在的洞穴，以及其他技巧。

***

#### 基岩

基岩方块使插件保证在该位置有一个实体方块。这意味着，如果在默认世界生成中已经存在实体方块，则该方块不会被修改；但是，如果方块为空气或液体，它将被 [基座](#pedestalmaterial) 中的实体方块替换。

建造者可以使用它来创建带有功能的地板，例如矿车轨道的轨道地板，或保证地板存在，而不会覆盖世界中该位置可能已经存在的实体方块，使建筑看起来更自然。

***

### 生成标志

BetterStructures 可以使用带有特定文本的标志在建筑的特定位置生成生物，甚至从 EliteMobs 和 MythicMobs 生成 Boss。

***

##### 生成普通生物

如果你拿一个普通标志并将其放置在某个地方，然后确保第一行写着 `[spawn]` 并且第二行写着 [实体类型名称，遵循 Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)，你将在你指定类型的位置生成一个持久实体。

例如，如果你有一个标志，第一行写着 `[spawn]`，第二行写着 `ZOMBIE`，那么你在放置建筑物时会在那个位置生成一个僵尸。这也可以用于非生物实体，例如盔甲架或末影水晶。

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### 生成 Elite Mobs（推荐的 Boss 插件）

BetterStructures 还拥有高级的 EliteMobs 集成，它允许根据建筑和生成标志创建 Boss 竞技场。

如果你拿一个普通标志并将其放置在某个地方，在第一行写着 `[elitemobs]`，然后你可以使用所有其他行来表示要使用哪个 Boss 文件。

例如，如果你在第一行写着 `[elitemobs]`，然后在第二行写着 `test_boss.yml`，你将生成测试 Boss。如果你有一个很长的文件名，例如 `boss_with_very_long_filename.yml`，你可以将其分成多行，因此让第二行是 `boss_with_very_`，然后让第三行是 `long_filename.yml`，这样就可以工作了。

提醒一下，如果你的服务器使用 WorldGuard，默认情况下战斗竞技场将被保护，直到玩家杀死建筑中的所有 Boss。

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### 生成 Mythic Mobs

BetterStructures 还拥有简单的 MythicMobs 集成，它允许你从 MythicMobs 生成一个生物到建筑中。在普通标志的第一行写着 `[mythicmobs]`，然后在第二行使用要识别的生物。你可以在第三行使用数字来设置生物的等级。

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Schematic

Schematic 是 WorldEdit 或 FastAsyncWorldEdit 生成的文件，其中包含 BetterStructures 将使用的建筑的方块。

这里没有详细说明如何制作 Schematic，因为它们在 WorldEdit 和 FastAsyncWorldEdit 文档中都有详细介绍，但一般来说是通过以下步骤完成的：

1) 选择建筑的一个角，并使用命令 `//pos1`
2) 选择对角线相对的角，并使用命令 `//pos2`
3) 使用 `//copy` 命令
4) 使用命令 `/schem save <schematicname>`，其中 `<schematicName>` 是你想要用于 Schematic 的文件名。

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="worldedit documentation image from their docs">

*确保你在点 1 上运行命令 `//pos1`，在点 2 上运行命令 `//pos2`!*

***

#### 锚点

锚点是你运行 `//copy` 命令来创建 Schematic 的地方。当简单地粘贴 Schematic 时，这些点是你相对于建筑物的位置。

锚点对于 Schematic 正确运行非常重要。

* 对于 _地表建筑_，建议你在复制建筑物时站在地板的最低点。
* 对于 _地下建筑_，建议你在建筑物顶部站立。
* 对于 _液体建筑_，建议你在水面上站立。
* 对于 _空中建筑_，建议你在建筑物顶部站立。

**请注意，你在复制时应该始终非常靠近或直接位于建筑物顶部 - 你离建筑物越远，建筑物需要粘贴时延迟就越大。**

***

# Schematic 配置

每个 Schematic 文件都有一个 Schematic 配置。如果刚刚将 Schematic 文件添加到服务器，则在重启后或在运行 `/betterstructures reload` 后，将生成配置。

这些配置允许你为 Schematic 粘贴设置以下设置：

***

## isEnabled

设置 Schematic 是否启用。如果禁用，它将不会被放置在任何地方。

***

## weight

Weight 设置 Schematic 的权重，表示它被选中的可能性。

默认值为 `1.0`。如果你将一个建筑物的权重设置为 `2.0`，它被选中的可能性将是其他建筑物的 2 倍。如果你将其设置为 `0.5`，它被选中的可能性将减半。

_**注意：**请记住，特定建筑被选中的概率会根据与竞争同一个位置的建筑总数而发生很大变化！_

***

## pedestalMaterial

**重要：可选字段！**

基座材质使用 [Spigot API 材质名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) 设置基座方块的材质类型 - 使用它们，否则它将无法工作！

基座是在地表和地下建筑下方放置的方块，用于填充任何气隙，并改善建筑物与世界的契合度。这些方块也是替换 Schematic 中基岩方块的方块。

当配置中没有定义任何内容时，将分析粘贴位置下方的方块，并选择最适合的方块作为材质，以实现最佳的集成外观。

***

## generatorConfigFilename

此选项使用文件名设置 Schematic 将使用的配置文件的名称，包括末尾的 `.yml` 扩展名。例如，`generatorConfigFilename: generator_surface_global.yml` 是正确选项，如果你想使用 `generator_surface_global.yml` 中定义的生成器，你可以在生成器配置文件夹中找到它。

***

## treasureFile

设置 [宝藏文件]($language$/betterstructures/creating_treasure.md)，该文件将由此结构使用，覆盖由结构的 [生成器]($language$/betterstructures/creating_generators.md) 设置的宝藏文件。除非是用于非常特殊的建筑，否则一般不建议这样做。通常最好修改或创建生成器来实现此目的。


# 自定义内容

BetterStructures 中分发的所有内容都是可编辑的。你可以随意修改任何 Schematic 文件和生成器设置。

上面的内容创建指南也是一个可以帮助你编辑现有内容的指南。

