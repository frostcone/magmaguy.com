# How to Use Commands
- Go to the commands page for help: [Commands Page]($language$/betterstructures/commands.md)

# Checking Where Structures Appear
- If you are a server admin and haven't turned off warnings, you'll be notified in chat when a structure appears.
- Click the chat message to teleport to the structure (not for Bedrock edition).
- Turn warnings on/off with `/betterstructures warn`.

# Why Structures May Not Appear
- Usually, structures don't appear in areas already explored. Visit new areas for structures.

<details> 
<summary>More Details</summary>

Structures won't appear in already explored areas to avoid filling them too much and damaging player buildings. BetterStructures knows if an area was explored before it was installed and won’t place structures there. If your world was fully explored before installing BetterStructures, you need to regenerate it or create a new world.

</details>

# EliteMobs and BetterStructures

## What EliteMobs Offers
- Learn about EliteMobs: [EliteMobs Wiki](#)
- It adds bosses to structures.

## Getting Pre-Made EliteMobs Content
- Available at [magmaguy.itch.io](https://magmaguy.itch.io/) and [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Using EliteMobs Without Other Features
- You can turn off other EliteMobs features. To disable, change settings in:
    - events.yml: `timedEventsEnabled: false` and `actionEventsEnabled: false` disables all events
    - MobCombatSettings.yml: `doNaturalMobSpawning: false` disables natural elite spawns

## Adding an EliteMobs boss to your structure

- Add `[elitemobs]` to the first line of your sign
- Add the filename of the boss on the second / third / fourth lines of the sign like `test_boss.yml`
- More info [here]($language$/betterstructures/creating_structures.md)

# BetterStructures with other plugins

## MythicMobs
- Spawn mythic mobs using signs with `[mythicmobs]` followed by the mob identifier on the other lines of the sign.
- EliteMobs is better for bosses with BetterStructures because I made both.

## MMOItems
- Add MMOItems with `mmoitems=<TYPE>@<ITEM-ID>` in the treasure configuration file.

## Custom Items from Other Plugins
- Use the lootify command to add any items to chests. See [Commands Page]($language$/betterstructures/commands.md).

# Creating Your Own Structures
- Learn how: [Structure Creation Guide]($language$/betterstructures/creating_structures.md)

# Performance Impact and Minimization
- Generating many structures can slow down your server.
- Use [Chunky](https://www.spigotmc.org/resources/chunky.81534/) to pre-generate your world and avoid performance issues.
- If not using EliteMobs, you can remove BetterStructures after world generation.
- With EliteMobs, keep BetterStructures for protected areas management, with minimal impact.
