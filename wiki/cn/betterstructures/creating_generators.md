## 生成器

生成器是 BetterStructures 配置系统中最强大的部分。默认情况下有 27 个生成器，它们共同管理着 BetterStructures 当前分发的 200 多个建筑。虽然你可以创建自己的生成器，但也可以使用现有的生成器作为快捷方式。

生成器告诉插件物品应该在哪里生成，并定义战利品表。默认生成器的命名方式也很容易猜出它们的功能。

生成器唯一强制的字段是 `structureType` 设置，它告诉插件建筑是应该生成在空中、浅层地下、深层地下、地表还是地表液体中。

***

### isEnabled

设置生成器是否启用。

***

### structureType

设置建筑的结构类型。**注意，你可以设置一个包含多种类型的列表！**

以下是有效的结构类型值：

***

#### surface

```yml
structureType:
- SURFACE
```

地表结构生成在世界的地表。唯一的例外是下界环境，它会生成在插件认为足够接近地表的点。

***

#### sky

```yml
structureType:
- SKY
```

天空结构生成在空中 80 到 120 格之间，可在 config.yml 中配置。唯一的例外是下界环境，它会生成在插件认为足够接近空中的点。

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

浅层地下结构在主世界生成于 y=0 到 y=60 之间，在下界生成于 y=60 到 y=120 之间，并在末地生成于任何有效的地下高度。

_**注意：** 你会注意到有两个地下设置。这是因为只有一个设置会导致地下结构非常稀疏，因为 Minecraft 有大量的地下空间，玩家常常会因为没有挖到地下结构而错过它们。这也能确保结构在不同深度均匀分布。_

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

深层地下结构在主世界生成于 y=-64 到 y=0 之间，在下界生成于 y=0 到 y=60 之间，并且不会在末地生成。

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

地表液体结构将生成在液体上。在主世界的情况下，它们会生成在水上，几乎总是在海洋上。在下界的情况下，它们会生成在熔岩湖中。它们不会在末地生成。

***

### lowestYLevel

设置结构将生成的最低 Y 坐标（高度）。

***

### highestYLevel

设置结构将生成的最高 Y 坐标（高度）。

***

### validWorlds

设置结构将生成的世界列表。**如果未指定列表，它将使用插件允许的所有世界**，除非受到其他限制（例如环境类型或生物群系）。

***

### validWorldEnvironments

设置结构将生成的世界环境列表。**如果未指定列表，它将使用插件允许的所有世界环境**。有效值：`NORMAL`、`NETHER`、`END` 和 `CUSTOM`。

***

### validBiomes

设置结构将生成的有效生物群系列表。**如果未定义列表，它将假定所有生物群系都有效！**。

这需要使用 [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) 定义的生物群系列表。

***

### treasureFilename

设置生成器将使用的宝藏文件。这设置了使用此生成器的所有建筑中箱子里生成的内容，除非在[原理图配置的 `treasureFile` 设置]($language$/betterstructures/creating_structures.md&section=treasurefile)中设置了不同的值。