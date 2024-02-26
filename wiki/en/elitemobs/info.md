Welcome to the EliteMobs wiki!

# License

The EliteMobs source code is covered under the [GPLV3](https://choosealicense.com/licenses/gpl-3.0/) license, and this wiki is provided with the [CC0 license](https://choosealicense.com/licenses/cc0-1.0/).

Feel free to redistribute and modify the information in this wiki.

# What is EliteMobs for?

EliteMobs aims to extend the end-game of Minecraft by implementing various boss-related content.

This means:
- Dynamic Bosses (Leveled Mobs)
- Custom Bosses
- Events
- Arenas
- World Based Dungeons
- Instanced Dungeons
- Open-World Random Dungeons (with BetterStructures integration)
- Custom Items (Elite Items/Loot)
- ... and more! 

The plugin does not aim to replace vanilla Minecraft content but rather complement it, allowing players to opt-out of EliteMobs content if desired. EliteMobs items typically do not affect PvP or vanilla Minecraft combat, as their damage and defense bonuses only apply during combat with EliteMobs.

# EliteMobs Feature Overview

In this section we will take a look at the some of the **major** features EliteMobs has to offer, what they are and how you can disable them. For a full feature list see [this page]($language$/elitemobs/feature_list.md&section=feature-list).

You can also check out [this]($language$/elitemobs/understanding_the_basics_of_elitemobs.md) page to find the intended way the players are supposed to interact with EliteMobs.

## Dynamic Bosses

Dynamic Bosses is one of the main features of EliteMobs. It replaces a percentage of vanilla Minecraft spawns with Elite Mob spawns.

Elites are tougher mobs designed to challenge players and reward them with possible loot drops upon defeat. The level of Elites is determined by the quality of armor and gear equipped by the player. Normal Minecraft gear has a level determined by the material quality, as explained [here]($language$/elitemobs/spawning_tiers_loot.md&section=material-levels). However, as players defeat Elites and acquire better loot, they will eventually start obtaining Elite items with set levels, making it easier to predict the levels of Elites that will spawn.

This implies that player levels are determined by the gear they wear, while Elite levels are determined by the players' levels.
There is no experience system in EliteMobs, all player level progression is dependent on gear.

You can adjust the difficulty of elites by modifying the `damageToEliteMobMultiplierV2` and `damageToPlayerMultiplierV2` values in *MobCombatSettings.yml*. More information on this can be found [here]($language$/elitemobs/elitemobs_config_settings.md&section=mobcombatsettings.yml).

If you wish to disable this feature entirely, you can do so by setting the `doNaturalEliteMobSpawning` value to `false`.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_dynamic_boss.jpg](../../../img/wiki/eminfo_dynamic_boss.jpg)

</details>

</div>

## Elite Items/Loot

EliteMobs features randomly generated items that can be found in shops or be dropped by Elites. There also custom items that are usually found in dungeons and other Elite content.

Elite items are just like vanilla items except they are usually equipped with extra goodies and are more powerful than anything you can find in vanilla MineCraft. Some Elite items will have stats on them that are called **Elite Sharpness** and **Elite Defense**, these stats will only apply when players are fighting Elites and do not affect vanilla mobs.

Elite items can also have enchantments, [Custom Enchantments]($language$/elitemobs/custom_enchantments_list.md) and potion effects.

You can disable Elite items by opening up *ItemSettings.yml* and setting the `doEliteMobsLoot` value to `false`. (Not recommended, makes MMORPG level progression impossible.)

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_elite_items.jpg](../../../img/wiki/eminfo_elite_items.jpg)

</details>

</div>

## Events

Events are unique encounters in EliteMobs that can trigger randomly based on a timer or by specific player actions, such as mining a block or chopping a tree. 

These encounters feature custom, unique Elites that pose a greater challenge and offer valuable loot upon defeat. 

Players receive notifications in the chat when an event occurs, with the option to track the Elite's health and location via a clickable link. If the Elite is not defeated within a certain time frame, the event ends and the Elite despawns.

You can disable all events by opening events.yml and setting the values actionEventsEnabled and timedEventsEnabled to false.

If you would like to disable individual events you can go to ~plugins\EliteMobs\customevents. there you will find configs for each event and you can disable any event by opening its config and setting the value isEnabled to false.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_event_boss.jpg](../../../img/wiki/eminfo_event_boss.jpg)

</details>

</div>

## Adventurer's Guild

The Adventurer's Guild is an additional hub world that you can install and it is also a set of commands that the players can use.

If the hub world is not installed then the players will have to use commands, otherwise running commands with the hub world installed will teleport players to the hub world and there they can interact with NPCs instead of having to type in commands.

What commands? EliteMobs has several commands that players can use to sell and buy items, repair items, enchant items and more. Learn more about which commands the players can use [here]($language$/elitemobs/permissions_and_commands.md&section=npc-commands).

For more information on the Adventurer's Guild and how to install the hub world check out [this]($language$/elitemobs/adventurers_guild_world.md) page.

You can disable the hub world by opening up *AdventurersGuild.yml* and setting the `guildHubIsEnabledv2` to `false`.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_ag.jpg](../../../img/wiki/eminfo_ag.jpg)

</details>

</div>

## Guild Tier/Rank

As players progress and acquire better items they will eventually hit a limit and mobs will stop dropping higher level items, this is called the guild tier loot limiter.

The guild tier loot limiter restricts the highest loot players can obtain based on their guild tier and applies default limitations from tier 1 to tier 10 items, with corresponding mob levels. Prestige levels unlock higher tiers, allowing access to superior loot and tougher mobs, ensuring balanced gameplay. 

This system, combined with the soulbind enchantment, mitigates powerleveling issues, maintains server balance, and fosters player attachment to their acquired loot. You can read more about guild tier [here]($language$/elitemobs/guild_tier_loot_limiter.md).

All settings for the Guild Tier can be adjusted and are located in *AdventurersGuild.yml*.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_guild_tier.jpg](../../../img/wiki/eminfo_guild_tier.jpg)

</details>

</div>

## Arenas

Arenas are wave-based challenges where players can engage in combat. One or multiple players can join an arena and face increasingly difficult waves of enemies, with rewards improving as the challenge progresses. 

Upon installing the Adventurer's Guild hub world, players gain access to the Wood League Arena, a free arena accessible via interaction with an NPC in the hub world or through the */em* menu.

You can get additional arenas by going to: [Itch.io](https://magmaguy.itch.io/) or by subscribing on [Patreon](https://www.patreon.com/magmaguy).

You can disable arenas by going to *~plugins\EliteMobs\customarenas*
and then opening up the arena config, for example *wood_league.yml* and then finding the value `isEnabled` and setting it to `false`.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_arena.jpg](../../../img/wiki/eminfo_arena.jpg)

</details>

</div>

## World Dungeons

World Dungeons are additional custom content that you can download for EliteMobs. Dungeons usually have custom Elite bosses, custom worlds, custom loot and custom boss powers.


All world dungeons are dungeons that are located in their own world, meaning that when the players access them they are teleported to a world that has nothing in it but that dungeon.

There are several types of world dungeons, to learn more about types click [here]($language$/elitemobs/dungeon_packager.md&section=dungeonsizecategory).

All world dungeon have a set level and any players attempting the dungeons should be around that level for the best experience.

You can get dungeons by going to: [Itch.io](https://magmaguy.itch.io/) or by subscribing on [Patreon](https://www.patreon.com/magmaguy). There are several free dungeons that you can download from [here](https://magmaguy.itch.io/em-free-content).

You can disable individual dungeons by going to *~plugins\EliteMobs\dungeonpackages* and opening up the dungeon config for the dungeon you wish to disable and setting the `isEnabled` value to `false`.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_world_dungeon.jpg](../../../img/wiki/eminfo_world_dungeon.jpg)

</details>

</div>

## Instanced Dungeons

Instanced Dungeons differ from World Dungeons in several ways. They are instanced, meaning a new world is dynamically created from a blueprint, providing players and their friends with a private dungeon experience similar to those found in MMOs. 

Instanced Dungeons offer various difficulties with unique boss powers, increased health, and superior loot as the difficulty rises. They also introduce roles, allowing players to adopt tank or DPS roles based on their equipped gear (role-specific gear is exclusive to Instanced Dungeons). Read more about how difficulty works [here]($language$/elitemobs/instanced_dungeon_difficulty.md).

Additionally, players can resurrect each other within Instanced Dungeons, enabling them to swiftly resume the battle if they act fast enough.

You can get instanced dungeons by going to: [Itch.io](https://magmaguy.itch.io/) or by subscribing on [Patreon](https://www.patreon.com/magmaguy). There are free instanced dungeons that you can download from [here](https://magmaguy.itch.io/em-free-content).

You can disable individual dungeons by going to *~plugins\EliteMobs\dungeonpackages* and opening up the dungeon config for the dungeon you wish to disable and setting the `isEnabled` value to `false`.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_instanced_dungeon.jpg](../../../img/wiki/eminfo_instanced_dungeon.jpg)

</details>

</div>

## Adventures

Adventures represent the most expansive additional content available for EliteMobs, boasting a vast world complete with a captivating storyline and a multitude of quests for players to embark on. 

Featuring hundreds of custom bosses, powers, and items, Adventures offer an immersive gaming experience. Quests within Adventures function similarly to those in traditional MMOs, tasking players with objectives such as defeating mobs, locating items, interacting with NPCs, or any combination thereof.

Adventures are so big that they even have other sub-dungeons or sub-arenas located within.

While Adventures typically recommend a set level range for players, it's advised for players to begin their adventure at the lower end of the level scale for optimal enjoyment.

You can get adventures by going to: [Itch.io](https://magmaguy.itch.io/) or by subscribing on [Patreon](https://www.patreon.com/magmaguy).

You can disable individual adventures by going to *~plugins\EliteMobs\dungeonpackages* and opening up the config for the adventure you wish to disable and setting the `isEnabled` value to `false`. Adventures can have additional sub-dungeons and sub-arenas that come with adventures so make sure you disable those as well if you are disabling an adventure.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_adventure.jpg](../../../img/wiki/eminfo_adventure.jpg)

</details>

</div>

## Wormhole Teleports

EliteMobs also features simple from A to B teleporters called wormholes. You will see these mostly used in the Adventurer's Guild hub world as a way to teleport players from there to a dungeon or back to server spawn.

They are usually in the shape of a hexagon, cube or a diamond made out of particles. These particles can sometimes cause lag to bedrock clients, so you might want to disable the particle effects by opening up *Wormholes.yml* and setting `noParticlesMode` to `true`.

You can make your own wormholes and use them however you wish. Click [here]($language$/elitemobs/creating_wormholes.md) to find out how.

<div align="center">

<details> 

<summary><b>Visual Example</b></summary>

![eminfo_wormhole.jpg](../../../img/wiki/eminfo_wormhole.jpg)

</details>

</div>

## Custom Content

EliteMobs also offers you the opportunity to create your own content, including [bosses]($language$/elitemobs/creating_bosses.md), [dungeons]($language$/elitemobs/dungeon_packager.md), [powers]($language$/elitemobs/creating_powers.md), [NPCs]($language$/elitemobs/creating_npcs.md), [quests]($language$/elitemobs/creating_quests.md), [arenas]($language$/elitemobs/creating_arenas.md), and much more! You can find guides for creating other types of content than the ones listed above in the wiki's sidebar menu.

For the easiest and most efficient content creation experience, we recommend using the WebApp. This tool enables you to generate ready-to-use configuration files without the need to extensively browse through the wiki to ensure correctness, particularly if you're considering creating EliteScript boss powers. Access the [WebApp here](https://magmaguy.com/webapp/webapp.html).

# For Admins & Server Owners

This plugin is designed for survival and survival-like servers (such as Skyblock, Skywars, and heavily modded survival variants).

The plugin is intended to be easily usable by simply dragging and dropping the plugin jar into the server. The default settings are the ones I use on my own servers and are subject to change over time.

**However!** Customizability has been a top priority throughout the development process of EliteMobs. Almost every aspect of the plugin can be translated, customized, disabled, or modified.


# For other developers

Despite the GPLV3 and open-source nature of this project, I am neither looking for nor will I accept any code additions or changes at this time. I welcome forks of the plugin, and would take immense pleasure to see what you might do with them; however, this is my first massive programming project and as such is also a learning experience.

**However!** Do not take this as me claiming I am beyond any criticism or that I won't listen to feedback - quite the opposite, I love it when people point out better ways of accomplishing things I've done in the plugin. I wish for this project to be something that I wrote end to end, with no code snippets that I am not aware of or that I don't understand.