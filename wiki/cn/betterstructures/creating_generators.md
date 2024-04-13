## 生成器

生成器是 BetterStructures 配置系统的最强大部分。默认情况下，有 27 个生成器，它们共同管理着目前由 BetterStructures 分发的超过 200 个构建，虽然您可以创建自己的生成器，但也可以使用现有的生成器作为快捷方式。

生成器告诉插件应该在哪里精确产生物品并定义战利品表。默认的生成器也以便于猜测其功能的方式命名。

生成器唯一必填的字段是 `structureType` 设置，它告诉插件建筑是否应该在天空、浅地下、深地下、地面或地面液体中产生。

***

### isEnabled

设置生成器是否启用。

***

### structureType

设置构建物是何种结构。 **请注意，您可以制作一个包含几种类型的列表！**

以下是有效的结构类型值：

***

#### surface

```yml
structureType: 
- SURFACE
```

地表结构在世界表面产生。唯一的例外是在地狱环境中，它会在插件认为足够像表面的地方产生。

***

#### sky

```yml
structureType: 
- SKY
```

天空结构在空气上方 80 到 120 个方块的地方产生，这在 config.yml 中可以配置。唯一的例外是在地狱环境中，它会在插件认为足够像空气的地方产生。

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

浅地下结构在 y=0 到 y=60 的主世界，y=60 和 y=120 的地狱和末路之地的任何有效地下高度产生。

_**注意: ** 你会注意到有两个地下设置。这是因为只有一个会导致地下非常稀疏，因为 Minecraft 有很多地下空间，玩家往往会错过地下结构，仅仅是因为他们没有挖进去。这也保证了在不同深度有均匀的分布。_

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

深地下结构在 y=-64 和 y=0 的主世界，y=0 和 y=60 的地狱产生，但在末路之地不会产生。

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

液体表面结构将在液体上产生。在主世界的情况下，它们将在水面上产生，几乎总是在海洋中产生。在地狱的情况下，它们会在熔岩湖中产生。它们不会在末路之地产生。

***

### lowestYLevel

设置结构会在哪个最低 Y 级别（海拔）产生。

***

### highestYLevel

设置结构会在哪个最高 Y 级别（海拔）产生。

***

### validWorlds

设置结构会在哪些世界产生。 **如果没有列表，它将使用插件允许的所有世界**，除非受到其他限制（如环境类型或生物群系）。

***

### validWorldEnvironments

设置结构会在哪些世界环境产生。**如果没有列表，它将使用插件允许的所有世界环境**。有效值：`NORMAL`，`NETHER`，`END` 和 `CUSTOM`。

***

### validBiomes

设置结构会在哪些有效生物群系产生。 **如果没有定义列表，它将假设每一个生物群系都是有效的！**

这需要使用由 [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html) 定义的生物群系列表。

***

### treasureFilename

设置生成器将使用的宝藏文件。这确定了所有使用此生成器的构建中宝箱中的内容，除非在 [示意图配置的 `treasureFile` 设置]($language$/betterstructures/creating_structures.md&section=treasurefile) 中设置了不同的值。
