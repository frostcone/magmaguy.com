# 创建内容

***

## 创建建筑

对于 BetterStructures，您可以构建任何东西，没有任何限制，但出于一般的世界契合度和性能原因，建议将结构的大小保持在 100x100x100 个方块以下。话虽如此，它可以轻松处理更大的结构。

***

### 特殊方块

BetterStructures 有两个特殊方块：屏障和基岩。WorldEdit / FAWE 可以粘贴的任何其他方块都将正常粘贴，但屏障和基岩方块是例外。这些方块不会被粘贴，而是会被替换为以下自定义行为：

***

#### 屏障

屏障方块使插件不会在该位置放置任何方块。这意味着正常世界生成中原来存在的任何方块都将保留在那里。

建造者可以使用它来使粘贴的边缘圆润，使其看起来更自然，或者将墙壁塑造成潜在的洞穴，以及其他技巧。

***

#### 基岩

基岩方块使插件保证在该位置存在一个固体方块。这意味着如果默认世界生成中已经存在一个固体方块，则该方块将不会被修改；但是，如果该方块是空气或液体，则它将被[基座](#pedestalmaterial)中的固体方块替换。

建造者可以使用它来创建具有诸如矿车轨道地板之类的特征的地板，或者保证存在地板而不会覆盖世界中该位置可能已经存在的固体方块，从而使建筑物看起来更有机。

***

### 生成标志

BetterStructures 可以使用带有特定文本的标志，以在建筑的特定位置生成来自 EliteMobs 和 MythicMobs 的生物甚至首领。

***

##### 生成原版生物

如果您取一个普通的标志并将其放置在某处，然后确保第一行显示 `[spawn]`，第二行具有[遵循 Spigot API 的实体类型名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)，您将在指定类型的位置生成一个持久实体。

例如，如果您的标志第一行写着 `[spawn]`，第二行写着 `ZOMBIE`，则在放置建筑物时，您将在该位置生成一个僵尸。这也可以用于非生物实体，例如盔甲架或末影水晶。

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### 生成精英生物（推荐首领插件）

BetterStructures 还具有高级的 EliteMobs 集成，这使其能够基于建筑物和生成标志创建首领竞技场。

如果您取一个普通的标志并将其放置在某处，并在第一行写上 `[elitemobs]`，则可以使用所有其他行来说明要使用哪个首领文件。

例如，如果您在第一行执行 `[elitemobs]`，然后在第二行执行 `test_boss.yml`，则将生成测试首领。如果您有一个非常长的文件名，例如 boss_with_very_long_filename.yml，则可以将其分成多行，因此将第 2 行设为 `boss_with_very_`，然后将第 3 行设为 `long_filename.yml`，这将起作用。

提醒一下，如果您的服务器正在使用 WorldGuard，则默认情况下，战斗竞技场将受到保护，直到玩家杀死建筑物中的所有首领。

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### 生成神话生物

BetterStructures 还具有简单的 MythicMobs 集成，这使其能够从 MythicMobs 将生物生成到建筑物中。在普通标志的第一行写上 `[mythicmobs]`，然后在第二行使用生物标识符。您可以在第三行使用数字来设置生物的等级。

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## 原理图

原理图是由 WorldEdit 或 FastAsyncWorldEdit 生成的文件，其中包含 BetterStructures 将使用的建筑物的方块。

此处未包含有关如何制作原理图的详细说明，因为它们在 WorldEdit 和 FastAsyncWorldEdit 文档中有详细说明，但通常是通过以下方式完成的：

1) 选择建筑物的角，然后使用命令 `//pos1`
2) 选择对角线上的角，然后使用命令 `//pos2`
3) 使用 `//copy` 命令
4) 使用命令 `/schem save <原理图名称>`，其中 `<原理图名称>` 是您要用于原理图的文件名。

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="来自其文档的 worldedit 文档图像">

*确保在点 1 上运行命令 `//pos1`，在点 2 上运行命令 `//pos2`！*

***

#### 锚点

锚点是您为原理图运行 `//copy` 命令的位置。当简单地粘贴原理图时，这些位置是您相对于建筑物所站的位置。

锚点对于使原理图正常工作非常重要。

* 对于_地表建筑物_，建议您在复制建筑物时站在地板的最低点。
* 对于_地下建筑物_，建议您站在建筑物的顶部。
* 对于_液体建筑物_，建议您站在水面上。
* 对于_空中建筑物_，建议您站在建筑物的顶部。

**请注意，复制时您应该始终非常靠近或直接位于建筑物的顶部 - 您离得越远，在需要粘贴建筑物时就会越卡顿。**

***

# 原理图配置

每个原理图文件都有一个原理图配置。如果原理图文件刚添加到服务器，则会在重新启动后或在 `/betterstructures reload` 之后生成配置。

这些配置允许您为原理图粘贴设置以下设置：

***

## isEnabled

设置是否启用原理图。如果禁用，则不会将其放置在任何位置。

***

## weight

权重设置原理图被选中的可能性。

默认值为 `1.0`。如果您使建筑物的权重为 `2.0`，则它被选中的可能性是其他建筑物的 2 倍。如果您将其设为 `0.5`，则它被选中的几率将减少一半。

_**注意：** 请记住，特定建筑物被选中的几率会根据总共有多少建筑物在竞争将获得结构的特定位置而发生巨大变化！_

***

## pedestalMaterial

**重要：可选字段！**

基座材质使用[spigot api 材质名称](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html)设置基座方块的材质类型 - 使用它们，否则它将无法工作！

基座是放置在地表和地下建筑物下方的方块，以适应任何气隙并改善建筑物与世界的契合度。这些也是替换原理图中基岩方块的相同方块。

当配置中未定义任何内容时，将分析粘贴位置下方的方块，并选择最合适的方块作为最佳集成外观的材质。

***

## generatorConfigFilename

此选项按文件名设置原理图将使用的配置文件的名称。这需要完整的文件名，包括末尾的 `.yml` 扩展名。例如，如果您想使用在 `generator_surface_global.yml` 中定义的生成器，您可以在生成器配置文件夹中找到它，则 `generatorConfigFilename: generator_surface_global.yml` 将是正确的选项。

***

## treasureFile

设置此结构将使用的[宝藏文件]($language$/betterstructures/creating_treasure.md)，覆盖结构的[生成器]($language$/betterstructures/creating_generators.md)设置的宝藏文件。除非是用于非常特殊的构建，否则通常不建议这样做。通常最好为此目的修改或创建生成器。


# 自定义内容

BetterStructures 中分发的所有内容都是可编辑的。您可以根据自己的喜好修改任何原理图文件和生成器设置。

上面的内容创建指南也是一个可以帮助您编辑现有内容的指南。
