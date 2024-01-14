Listed here are the WorldGuard flags EliteMobs has and their function.


***

# elitemob-spawning (allow/deny)
Sets whether Elite Mobs can spawn in the region. The default behavior is that Elite Mobs are allowed to spawn everywhere, and therefore the primary use of this flag is to disable them for a specific region. If you want to disable Elite Mob spawning for an entire world, I recommend editing the ValidWorlds.yml file instead.


***

# elitemob-only-spawning (allow/deny)
Sets whether only Elite Mobs can spawn in a region. This does not increase the amount of Elite Mobs that spawn in an area, it only prevents non-elite mob entities from spawning in that area. This is for users who wish to have entire areas where only Elite Mobs can spawn, such as arenas or higher difficulty zones.


***

# elitemobs-antiexploit (allow/deny)
Sets whether the antiexploit can trigger in a region. Allow will let the Antiexploit run, deny will prevent it from running. Deny is recommended for premade arenas and dungeons where you've already tested the terrain for exploits.

***

Also please note: NPCs override the mob-spawning deny flag as a form of third party compatibility with WorldGuard. If you do not wish to have NPCs in an area, I recommend removing them manually.

***

# elitemobs-maximum-level

Sets the maximum level of elite mobs that can spawn in a region. Only affects naturally spawned elites (Custom Bosses ignore this). The level must be an integer value (no values like `1.5`, you have to use whole numbers like `1` or `2`).

***

# elitemobs-minimum-level

Sets the minimum level of elite mobs that can spawn in a region. Only affects naturally spawned elites (Custom Bosses ignore this). The level must be an integer value (no values like `1.5`, you have to use whole numbers like `1` or `2`).

***

# elitemobs-dungeon

Sets the area to only allow normal mobs spawned with the CUSTOM spawn reason, as well as Regional Bosses and Custom Bosses. This is for use in minidungeons.