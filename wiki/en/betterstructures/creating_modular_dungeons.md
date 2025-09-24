# What are Modular Dungeons?

Modular dungeons are a dungeon system introduced in BetterStructures 2.0.0 and later.  
Instead of spawning as one fixed schematic, modular dungeons are dynamically assembled from smaller, handcrafted **modules**.  
This approach allows for large, multi-floor dungeons that feel unique in every world while still fitting seamlessly into vanilla Minecraft.

---

## How are modular dungeons generated

- **Modules**  
  Each module is a 32×16×32 build designed with standardized connection points so it can attach to other modules without gaps or overlaps.  
  Modules can contain corridors, rooms, staircases, or special encounter spaces.

- **Stitching process**  
  When a modular dungeon generates in a new chunk, BetterStructures randomly selects from the available module pool and “stitches” them together into a complete dungeon.  
  The process typically takes a few seconds to a few minutes depending on server performance and dungeon size.

- **Dungeon size**  
  A single modular dungeon can be the equivalent of **6+ Minecraft Trial Chambers combined**, both in floor area and verticality.  
  Most dungeons include **multiple floors**, linked through stair modules or vertical shafts.

---

## Variety and pack integration

- **Free Pack**  
  The *Dungeoneering Modules Free Pack* includes 15 modules. This functions as a fully playable dungeon on its own.

- **Premium Pack**  
  The *Dungeoneering Modules Premium Pack* adds 38 additional modules. When combined with the Free Pack, both sets intertwine into a single dungeon system with a much larger module pool.  
  This reduces repetition and increases variety in the generated layouts.

- **Props integration**  
  If you also install the **BetterStructures Prop Pack** (via FreeMinecraftModels), modular dungeons will display custom model props throughout the builds, as shown in our showcase screenshots.  
  Without the prop pack, the dungeons will still function normally, but without the decorative models.

---

## EliteMobs Integration

While most of the dungeon relies only on BetterStructures and vanilla MineCraft mobs, some dungeons feature a **designated boss room**:  
- If *EliteMobs* and *FreeMinecraftModels* are both installed → full custom boss fight with model.  
- If only *FreeMinecraftModels* is installed → boss model appears as a decorative prop.  
- If neither is installed → boss room will simply be empty.

This design keeps modular dungeons compatible with vanilla-style setups, while still offering deeper integration for users with additional plugins.

---

## FMM Integration

Modular dungeons can also take advantage of **FreeMinecraftModels (FMM) props** during creation.  
- If FMM is installed, any props placed by the module creator or builder will appear in the generated dungeon.  
- Props are purely decorative and do not affect gameplay, but they enhance the visual fidelity and immersion of the environment.  
- If FMM is not installed, the dungeon will still generate normally, but these custom props will not be displayed.

This ensures that creators can design dungeons with extra detail while maintaining compatibility for players who do not have FMM installed.

---