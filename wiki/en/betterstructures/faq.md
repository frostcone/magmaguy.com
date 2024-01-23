# How do I use the commands?

[Check the commands page!]($language$/betterstructures/commands.md)

# How can I see where structures are spawning?

If you are a server operator and have not disabled warnings, the plugin will notify you on chat every time a building spawns. You can then click on the chat message to teleport to the structure, as long as you are not using a Bedrock edition client. You can toggle warning by running the command `/betterstructures warn`.

# Why are structures not spawning?

99% of the time, this is because you're visiting previously generated chunks. You must spawn entirely fresh, never explored before chunks for BetterStructures to work properly.

<details> 
<summary>More info</summary>

<div align="left">

The reason why BetterStructures does not automatically place structures in already generated chunks is to avoid overfilling chunks that already had previously generated structures and to prevent any chance of griefing player structures.

Note that BetterStructures uses the Spigot API to determine if a chunk is new, meaning that it is aware of chunks that were generated before the plugin was installed, and will never spawn structures in those chunks. If your world is already pregenerated, you will either have to trim and regenerate it or create a different world to get automatically placed structures in it.

</div>

</details>

# EliteMobs integration

## What can EliteMobs do?

You can read everything EliteMobs can do [in its wiki page]($language$/elitemobs/info.md), but in the context of BetterStructures it basically adds bosses to some of the structures get generated.

## Is there pre-made content with EliteMobs integration?

Yes. You can get it at [magmaguy.itch.io](https://magmaguy.itch.io/) and [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Can I use the EliteMobs structures without using other EliteMobs features?

Yes, EliteMobs is highly modular, and you can disable features you do not wish to have. While I recommend you give EliteMobs a try first, you can disable every feature not related to the shrine build packs for BetterStructures by going into the following configuration files:

- events.yml : `timedEventsEnabled: false` and `actionEventsEnabled: false` disables all events
- MobCombatSettings.yml: `doNaturalMobSpawning: false` disables natural elite spawns

# BetterStructures and MythicMobs

BetterStructures has basic MythicMobs integration. You can spawn a mythic mob by putting `[mythicmobs]` on the first line of a sign and putting the mob identifier on the second line.

However, when it comes to creating bosses, EliteMobs is recommended instead since I also made that plugin and it has better integration with BetterStructures.

# BetterStructure and MMOItems

You can add an MMOItems item through the following syntax: `mmoitems=<TYPE>@<ITEM-ID>`.

# BetterStructures and custom items from other plugins

BetterStructures is able to put any item into chests using the lootify command you can read about [here]($language$/betterstructures/commands.md)

# How can I create my own structures?

Read the structure creation guide [here]($language$/betterstructures/creating_structures.md)!

# How does BetterStructures impact my server's performance and how can I minimize that impact?

BetterStructures can have a fairly high impact on performance when generating dozens of structures at the same time.

However, it is entirely possible to get rid of all performance impact of the plugin.

If you pre-generate your world using a plugin like [Chunky](https://www.spigotmc.org/resources/chunky.81534/) BetterStructures will not scan any chunks or generate any structures, meaning there will be 0 performance impact on your server.

If you are not using EliteMobs integration, you can remove BetterStructures from your server once the entire world has been generated, although it doesn't hurt to leave it on either.

If you are using EliteMobs integration with WorldGuard protections, you will need to leave BetterStructure on for managing the protected combat regions, but this should have next to no performance impact.

