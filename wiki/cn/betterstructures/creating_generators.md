## 生成器

生成器是 BetterStructures 配置系统中最强大的部分。默认情况下有 27 个生成器，它们共同管理着 BetterStructures 目前分发的 200 多个建筑，虽然你可以创建自己的生成器，但你也可以使用现有的生成器作为快捷方式。

生成器告诉插件建筑应该在哪里生成，以及定义战利品表格。默认生成器也以很容易猜测它们功能的方式命名。

生成器唯一必须的字段是 `structureType` 设置，它告诉插件建筑是否应该在空中、地下浅处、地下深处、地表或地表液体中生成。

***

### isEnabled

设置生成器是否启用。

***

### structureType

设置建筑是什么类型的结构。**注意，你可以制作一个包含几种类型的列表！**

以下是有效的结构类型值：

***

#### surface

```yml
structureType: 
- SURFACE
```

地表结构在地表的表面生成。唯一的例外是 Nether 环境，它会在插件认为足够类似表面的地方生成。

***

#### sky

```yml
structureType: 
- SKY
```

天空结构在空中 80 到 120 个方块之间生成，可以在 config.yml 中配置。唯一的例外是 Nether 环境，它会在插件认为足够类似空气的区域生成。

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

地下浅层结构在主世界中 y=0 到 y=60 之间生成，在 Nether 中 y=60 到 y=120 之间生成，在末地中生成在任何有效的地下高度。

_**注意：**你会注意到有两个地下设置。这是因为只有一个会导致地下非常稀疏，因为 Minecraft 有很多地下空间，玩家经常会错过地下结构，仅仅因为他们没有挖到那里。这也保证了不同深度的均匀分布。_

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

地下深层结构在主世界中 y=-64 到 y=0 之间生成，在 Nether 中 y=0 到 y=60 之间生成，在末地中不会生成。

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

液体表面结构将在液体上生成。在主世界中，它们会在水面上生成，几乎总是在海洋中生成。在 Nether 中，它们将在熔岩湖中生成。它们不会在末地中生成。

***

### lowestYLevel

设置结构将生成的最低 Y 水平（海拔）。

***

### highestYLevel

设置结构将生成的最高 Y 水平（海拔）。

***

### validWorlds

设置结构将生成的世界的列表。**如果没有列表，它将使用插件允许的所有世界**，除非有其他限制（例如，环境类型或生物群落）。

***

### validWorldEnvironments

设置结构将生成的世界的环境列表。**如果没有列表，它将使用插件允许的所有世界环境**。有效值：`NORMAL`、`NETHER`、`END` 和 `CUSTOM`。

***

### validBiomes

设置结构将生成的有效生物群落的列表。**如果没有定义列表，它将假定每个生物群落都是有效的！**。

这需要使用 [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) 定义的生物群落列表。

***

### treasureFilename

设置生成器将使用的宝藏文件。这将设置使用此生成器的所有建筑物的宝箱中生成的物品，除非在 [示意图配置的 `treasureFile` 设置]($language$/betterstructures/creating_structures.md&section=treasurefile) 中设置了不同的值。
