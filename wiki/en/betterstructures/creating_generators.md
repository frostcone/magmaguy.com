## Generators

Generators are the most powerful part of the configuration system for BetterStructures. By default there are 27 generators which collectively manage over 200 builds currently distributed by BetterStructures, and while you can create your own generators, you can also use existing ones as a shortcut.

Generators tell the plugin where exactly things should spawn and define loot tables. The default generators are also named in ways that should be very easy to guess what they do.

The only mandatory field for generators is the `structureType` setting, which tells the plugin if the building is meant to spawn in the sky, shallow underground, deep underground, surface or surface liquid.

***

### isEnabled

Sets whether the generator is enabled.

***

### structureType

Sets what kind of structure the build is. **Note that you can make a list of several types!** 

The following are valid structure type values:

***

#### surface

```yml
structureType: 
- SURFACE
```

Surface structures spawn at the surface of the world. The only exception is the Nether environment, where it spawns at points the plugin deems to be sufficiently surface-like.

***

#### sky

```yml
structureType: 
- SKY
```

Sky structures spawn between 80 to 120 blocks above the air, configurable in config.yml. The only exception is the Nether environment, where it spawns at points the plugin deems to be sufficiently air-like.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

Underground shallow structures spawn between y=0 and y=60 in the overworld, y=60 and y=120 in the nether and any valid underground height in the End.

_**Note: ** You will notice there are two underground settings. This is because only having one results in having a very sparse underground, as Minecraft has a lot of underground space and players will often times miss underground structure simply because they didn't mine into them. This also guarantees that there is an even spread across different depths._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

Underground deep structures spawn between y=-64 and y=0 in the overworld, y=0 and y=60 in the nether and do not spawn in the End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

Liquid surface structures will spawn on liquids. In the case of the overworld, they will spawn on water, and almost always on oceans. In the case of the Nether, they will spawn in the lava lakes. They will not spawn in the End.

***

### lowestYLevel

Sets the lowest Y level (altitude) the structure will spawn in.

***

### highestYLevel

Sets the highest Y level (altitude) the structure will spawn in.

***

### validWorlds

Sets the list of worlds the structure will spawn in. **If no list is present, it will use all worlds allowed by the plugin**, unless otherwise limited (such as by the environment type or biomes).

***

### validWorldEnvironments

Sets the list of world environments the structure will spawn in. **If no list is present, it will use all world environments allowed by the plugin**. Valid values: `NORMAL`, `NETHER`, `END` and `CUSTOM`.

***

### validBiomes

Sets the list of valid biomes the structure will spawn in. **If no list is defined, it will assume every biome is valid!**.

This requires using the list of biomes as defined by the [Spigot API](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Sets the treasure file that the generator will use. This sets what spawns in the chests for all builds that use this generator, unless a different value is set in a [schematic configuration's `treasureFile` setting]($language$/betterstructures/creating_structures.md%treasurefile).