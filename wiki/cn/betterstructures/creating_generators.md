## 生成器

生成器是 BetterStructures 配置系统中最强大的部分。默认情况下，有 27 个生成器，它们共同管理着当前由 BetterStructures 分发的
200 多个建筑。虽然您可以创建自己的生成器，但也可以使用现有的生成器作为快捷方式。

生成器会告诉插件确切的生成位置并定义战利品表。默认生成器的命名方式也应该很容易猜到它们的作用。

生成器唯一强制的字段是 `structureType` 设置，它告诉插件建筑物是打算生成在天空、浅层地下、深层地下、地面还是地面液体中。

***

### isEnabled

设置是否启用生成器。

***

### structureType

设置建筑物的类型。**请注意，您可以创建一个包含多种类型的列表！**

以下是有效的结构类型值：

***

#### surface

```yml
structureType:
- SURFACE
```

地面结构生成在世界的表面。唯一的例外是下界环境，它会在插件认为足够像地面的点生成。

***

#### sky

```yml
structureType:
- SKY
```

天空结构在空中 80 到 120 个方块之间生成，可在 config.yml 中配置。唯一的例外是下界环境，它会在插件认为足够像空气的点生成。

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

浅层地下结构在主世界 y=0 到 y=60 之间生成，在下界 y=60 到 y=120 之间生成，在末地中任何有效的地下高度生成。

_**注意：** 您会注意到有两个地下设置。这是因为只有一个会导致地下非常稀疏，因为 Minecraft
有大量的地下空间，玩家通常会错过地下结构，仅仅因为他们没有挖到那里。这也保证了在不同深度之间均匀分布。_

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

深层地下结构在主世界 y=-64 到 y=0 之间生成，在下界 y=0 到 y=60 之间生成，并且不会在末地生成。

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

液体表面结构将在液体上生成。在主世界中，它们将在水上生成，几乎总是在海洋上生成。在下界中，它们将在熔岩湖中生成。它们不会在末地生成。

***

### lowestYLevel

设置结构将生成的最低 Y 级别（高度）。

***

### highestYLevel

设置结构将生成的最高 Y 级别（高度）。

***

### validWorlds

设置结构将在其中生成的世界列表。**如果不存在列表，它将使用插件允许的所有世界**，除非另有限制（例如，通过环境类型或生物群系）。

***

### validWorldEnvironments

设置结构将在其中生成的世界环境列表。**如果不存在列表，它将使用插件允许的所有世界环境**。有效值：`NORMAL`、`NETHER`、`END`
和 `CUSTOM`。

***

### validBiomes

设置结构将在其中生成的有效生物群系列表。**如果未定义列表，则将假定每个生物群系都有效！**。

这需要使用 [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) 定义的生物群系列表。

***

### treasureFilename

设置生成器将使用的宝藏文件。这将设置使用此生成器的所有建筑物的箱子中生成的内容，除非在 [原理图配置的 `treasureFile` 设置]($language$/betterstructures/creating_structures.md&section=treasurefile)
中设置了不同的值。
