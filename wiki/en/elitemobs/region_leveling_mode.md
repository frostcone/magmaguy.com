# What is region leveling mode?

Region leveling mode is a game mode which overrides the default EliteMobs behavior or spawning mobs based on player item tier and instead spawns them based on the location they're at. Each 50x50 zone gets assigned a tier. The tiers go up based on distance from spawn in a mostly randomized fashion. Zone tiers get randomized on every restart.

# What is the region leveling mode for?

The region leveling mode **is not supposed to act as the main game mode for your server network**. It's been added on request and in order to spice up the mob level mechanics of server networks who may wish to run the Nightmare mode. Both modes can be enabled for the same world. Like the Nightmare mode, I recommend you run this in a world dedicated to hunting Elite Mobs and not on your main world.

# How to activate

You can activate this game mode on the ValidWorlds.yml folder using the following format:

```yml
zoneBasedWorlds:
- yourWorldName1
- yourWorldName2
- yourWorldName3
```