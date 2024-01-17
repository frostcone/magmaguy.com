# User commands

*Note: All player permissions are set to be true by default. This means that they are already set up. If you do not want players to have access to a specific feature via permissions, you will have to deny that player the permission!*

- `/elitemobs` / `/em`

Main command, condenses all player info in the plugin in an easy to access menu. *Note:* all other user commands are in this main command. `/em menu` is also a valid command for this.

- `/adventurersguild` / `/ag`

In a recommended setup, teleports the player to the adventurer's guild world where they interact with the various EliteMobs NPCs.

- `/shareitem`

Links an item in chat so other players may see its stats.

- `/em help`

Lists all commands

The remaining user commands are usually replaced by the use of NPCs or the `/em` interface!

- `/em wallet`

Displays player money

- `/em pay <username> <amount>`

Lets players pay each other. Transactions are taxed a configurable amount.

- `/em updateitem`

Updates the lore of an item in case it desynced. This command is meant for debugging purposes, and is not required in normal play.

- `/em spawntp`

Teleports a player to a server spawn

## NPC commands

These commands are only useful if you do not have the Adventurer's Guild Hub with NPCs installed. It is recommended you install these to run all of these commands through NPCs instead of having players remember how the commands work.

- `/em rank`

Opens the rank menu or teleports players to the Adventurer's Guild hub

- `/em shop`

Accesses the shop or teleports players to the Adventurer's Guild Hub

- `/em customshop`

Accesses the custom shop or teleports players to the Adventurer's Guild hub

- `/em repair`

Accesses the repair menu or teleports players to the Adventurer's Guild hub

- `/em enchant`

Accesses the enchant menu or teleports players to the Adventurer's Guild hub

- `/em scrap`

Accesses the scrap menu or teleports players to the Adventurer's Guild hub

- `/em unbind`

Accesses the unbind menu or teleports players to the Adventurer's Guild hub

## Internal user commands

**These commands are meant to be run from in-game menus such as quests from the quest menu. If no instructions are written about how to get an ID, then that means it is not possible to get that ID other than by running the command from the in-game menu.** For convenience, these have been split into the identifiable and unidentifiable categories.

### Identifiable

- `/em dungeontp <dungeonid>`

Teleports a player to a dungeon. Note: this is meant to be run from the `/em` menu, as it is impossible for players to guess dungeon IDs. The IDs of the dungeons are the same as the .yml filenames in `~/plugins/EliteMobs/dungeonpackages/`. You can see the IDs on console when using the `/em` command and pick a teleport from the Teleports page.


### Unidentifiable

- `/em quest accept <questID>`

Accepts a quest

- `/em quest track <questID>`

Tracks a quest

- `/em quest complete <questID>`

Completes a quest

- `/em quest leave <questID>`

Leaves a quest

- `/em trackcustomboss <uuid>`

Tracks a custom boss. Note: this is meant to be run from the `/em` menu, as it is impossible for players to guess boss UUIDs



***

# Admin commands

\> \> \> `elitemobs.*` - Admin permission for EliteMobs for full access! < < <

- `/em setup`

Opens the main setup menu

- `/em setup area <areaName>`

Protects an area using WorldGuard, used for Minidungeons and the Adventurer's World Hub. Note: You do not have to run this manually when setting things up using the recommended setup method.

- `/em spawnelite <entityType> <level> <power1> <power2> <power3>`

Spawns an Elite based on the entity type.

- `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`

Spawns an Elite based on the entity type and location.

- `/em spawncustom <fileName>`

Spawns a Custom Boss from a config file.

- `/em spawncustomlevel <fileName> <level>`

Spawns a Custom Boss from a config file and overrides the level.

- `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`

Spawns a Custom Boss from a config file at a location.

- `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`

Spawns a Custom Boss from a config file at a location and overrides the level.

- `/em spawnsuper <EntityType>`

Spawns a Super Mob based on the entity type.

- `/em addSpawnLocation <fileName>`

Adds a spawn location to a Regional Boss.

- `/em addRelativeSpawnLocation <customBossFileName> <minidungeonFileName>`

Adds a spawn location to a Regional Boss in a schematic-based minidungeon.

- `/em addTreasureChest <fileName>`

Adds a treasure chest at the location the player is standing in.

- `/em addRelativeTreasureChest <fileName> <minidungeonFileName`

Adds a treasure chest at the location the player is standing in for a schematic-based minidungeon.

- `/em setLeashRadius <fileName> <radius>`

Adds a spawn location to a Regional Boss.

- `/em remove`

Permanently removes an Elite Mob entity. Elite/Regional/Super/NPCs all work. Run again to exit remove mode.

- `/em debug <name>`

Opens a debug screen for players or regional bosses.

- `/em event <eventName>`

Launches a custom timed event.

- `/em spawnnpc <npcFileName>`

Spawns an NPC

- `/em stats`

Gets the stats for the currently active EliteMobs entities and players.

- `/em getloot`

Opens a menu where you can get any Custom Loot

- `/em getloot <filename>`

Get specific custom loot

- `/em giveloot <filename> <player>`

Give specific custom loot to a player.

- `/em simloot <level>`

Simulates drops from an Elite Mob from the set tier

- `/em simloot <level> <times>`

Simulates drops from an Elite Mob from the set tier a set amount of times

- `/em version`

Gets the version of the plugin

- `/em reload`

Reloads the plugin. Works almost every time.

- `/em killaggressive`

Kills all aggressive Elite Mobs.

- `/em killaggressive <radius>`

Kills all aggressive Elite Mobs in a radius.

- `/em killpassive`

Kills all passive Super Mobs

- `/em killpassive <radius>`

Kills all passive Super Mobs in a radius

- `/em killtype <entityType>`

Kills all elites of a specific type

- `/em killtype <entityType> <radius>`

Kills all elites of a specific type in a radius

- `/em gettier <tier>`

Gets debug items for testing purposes

- `/em money add <username> <amount>`

Adds a set amount of money to a player

- `/em money addall <amount>`

Adds a set amount of money to all online players

- `/em money remove <username> <amount>`

Removes a set amount of money from a player

- `/em money set <username> <amount>`

Sets the total currency amount of a player

- `/em setrank <player> <prestigetier> <guildtier>`

Sets the guild rank of a player.

- `/em discord`

Gets the link for the support Discord server.

- `/em discord <message>`

Posts a debug message on Discord if DiscordSRV is configured correctly.

- `/em forceunbind`

Unbinds a held soulbound item.

- `/em relativecoords <minidungeon>`

Gets the relative coordinates to an installed dungeon.

- `/em wallet <player>`

Checks the currency of a specific player.

- `/em fireball`

Spawns a fireball to test elite explosion regeneration

- `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`
- `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`
- `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`
- `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`
- `/em cancelblocks`

Check the wiki entry on Regional Bosses for more details on these commands.

- `/em debugmode`

Toggles debug mode on, showing mob spawning and despawning on console and allowing tracking.



## Internal admin commands

These commands are meant to be run when interacting with menus or interactable text on chat, and not manually.


- `/em setup done`

Stops showing messages on admin login.

- `/em setup minidungeon <minidungeonName> `

Installs a Minidungeon

- `/em setup minidungeon <minidungeonName> noPaste`

Installs a Minidungeon without pasting the WorldEdit schematic

- `/em setup minidungeon <minidungeonName>`

Uninstalls a Minidungeon

- `/em setup unminidungeon <minidungeonName> noPaste`

Uninstalls a Minidungeon without undoing a WorldEdit paste.

- `/em trace <uuid>`

Traces the spawns / despawns of a Custom Boss. Requires debug mode to be on.

- `/em debugtp <uuid>`

Teleports to the location of a traced Custom Boss. Requires debug mode to be on.

- `/em generateresourcepack`

Generates a resource pack. Check the wiki entry about Custom Models on how to use this.

- `/em updateresourcepack`

Updates the SHA1 of the resource pack in the server.properties config. Check the wiki entry about Custom Models on how to use this.




# Raw permissions:
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```