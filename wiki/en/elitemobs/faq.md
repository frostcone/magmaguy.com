If you have a question that isn't listed here, ***take a look at the sidebar*** to see if it has a page dedicated to it
in the wiki!

# Setup and Installation FAQ

### How can I disable loot or coin drops from EliteMobs, and should I do it?

<details>
<summary>
Info
</summary>

EliteMobs allows you to control loot and coin drops, but before making changes, it's important to understand how these drops affect gameplay and progression:

- **Loot and Coin Drops:**  
Loot drops are a core feature of EliteMobs, tied to the gear players wear. Disabling loot will make it impossible for players to acquire the better gear needed to face higher-level Elites, halting progression entirely.

Coins are vital to the in-game economy, used for buying and upgrading gear. Disabling coin drops will severely disrupt this system, negatively affecting player experience and balance.

To disable loot and coin drops, open `ItemSettings.yml` and set `doEliteMobsLoot` to `false`.

- **Custom Boss Loot in Dungeons:**
Custom bosses have loot defined in their config files, located in `~/elitemobs/custombosses`. Disabling these drops will remove their unique rewards, disrupting the intended experience.

</details>


### How do I set up custom models?

<details>
<summary>
Info
</summary>

There are two different plugins that handle "Custom Models".

- LibsDisguises (including the free edition) lets you disguise mobs as other mobs or as custom player skins. If you see a Custom Boss with a player disguise on it, it is using LibsDisguises for the disguise. You will have to download LibsDisguises to get this specific feature to work.


- FreeMinecraftModels (and ModelEngine R3, although ModelEngine is no longer recommended) lets you disguise mobs as any Custom Model, with very few limitations. FreeMinecraftModels lets you do this for free and is recommended. You will have to either use FreeMinecraftModels or ModelEngine R3 (not R4) for Custom Models to work. FreeMinecraftModels can be run alongside ModelEngine, so you can also just run both.
<br>If you have installed FreeMinecraftModels/ModelEngine and the Custom Models are still not working, you may have installed the content before you installed the model plugin. To make sure this isn't an issue, reimport the EliteMobs content with the Custom Disguises and install it again.

</details>

### Console / EliteMobs says I'm using the wrong WorldGuard version

<details>
<summary>
Info
</summary>

If WorldGuard is reported by EliteMobs as not being installed, that is because you are using the wrong WorldGuard version for your server platform. WorldGuard is very sensitive about which version you are using, and have different version for server software.

- You can download the WorldGuard version for Spigot / Paper from here: https://dev.bukkit.org/projects/worldguard - Make sure that it says it that it is compatible with your Minecraft version!

</details>

### Wormholes / Arenas / NPCs don't seem to be working correctly immediately after installation

<details>
<summary>
Info
</summary>

If wormholes / arenas / NPCs don't seem to be working correctly immediately after installing content, you should run `/em reload`. It is always good to run it after installing EliteMobs content.

</details>

### Dungeon Bosses are not reappearing after killing them

<details>
<summary>
Info
</summary>

Most of the time, this is just because some bosses have long respawn times. The Shadow of the Binder of Worlds has the longer respawn timer of 1 real life week. Lair bosses usually have a 4 hour respawn timer. Everything else tends to be on a 5-30 minute respawn timer. You can edit a Custom Boss' respawn timer in their configuration file in the `~/plugins/EliteMobs/custombosses` folder.

</details>

### Dungeon Bosses never appeared after installation

<details>
<summary>
Info
</summary>

This is almost certainly due to a third party plugin's interference. Check the following:
- Is your world on Peaceful difficulty? Mobs don't spawn on Peaceful difficulty


- Is your region protected against spawning? EliteMobs dungeons handle their own region protection via WorldGuard, you don't need to protect EliteMobs dungeon worlds, actually doing so may prevent spawning if the wrong flags are used.


- Is there another plugin preventing EliteMobs bosses from spawning or removing them? These conflicts will often show up in console, so check your console logs.

</details>

### The plugin isn't autocompleting commands for content I just installed

<details>
<summary>
Info
</summary>

Autosuggestions in commands are handled by CloudCommandFramework and only updates command suggestions **after a server restart**. Unfortunately, there is nothing I can do about that.

</details>

### How do I use the EliteMobs translations?

<details>
<summary>
Info
</summary>

You can change EliteMob's language by running the `/em language <languagename>.yml`. to use the default plugin translation created and managed by the EliteMobs community

To add a language that is not in the plugin, or to customize the existing language, it is recommended you use `custom_language.yml`.

Language files only generate their contents when you switch the language!

If you break the formatting of the yml file, which is very easy to do by mistake, it will reset the file! ***Make sure you keep a local backup of your translation if you are manually translating the content!***

It is easier to translate the language file in the community translation website, as that handles formatting for you! It also automatically suggests translations. You can find that here: https://crowdin.com/project/elitemobs

As a reminder, if you're translating, if you use special characters such as `&` to start a configuration value, you must put that value between quotes like \"&cCool value\"! Otherwise, the file will be broken, and it will reset your progress. You can use a linter to check yml file validity - just paste your yml contents here: <https://www.yamllint.com/>

</details>

# EliteMobs and BetterStructures compatibility FAQ

### Can I get structures in BetterStructure with bosses from EliteMobs in them?

<details>
<summary>
Info
</summary>

Yes, the BetterStructures shrine packages are exactly this kind of content. You can download the shrine packs from [itch.io](https://magmaguy.itch.io/).

</details>

### Why are the shrines protected with WorldGuard and how do I prevent that

<details>
<summary>
Info
</summary>

The EliteMobs shrine structures are protected with WorldGuard by default to make sure that players don't build contraptions to abuse the Minecraft combat system inside the fighting area.

The protections automatically get deleted once the boss is defeated.

Every shrine has entry points that players must dig around to find if they are underground.

If you do not wish to use WorldGuard protections, you can disable it in the BetterStructures config.yml configuration file.

</details>

### Why are the shrines spawning without elites in them?

<details>
<summary>
Info
</summary>

This can happen if you install the BetterStructures shrines before you install EliteMobs. To fix this, reimport and reinstall the shrines into you server **after** EliteMobs is installed.

</details>

### Can I use the shrines without using EliteMobs

<details>
<summary>
Info
</summary>

The shrines were made specifically for combating the bosses that are in them, but if you just want the combat arenas for the aesthetics, you can just run the shrine packages without having EliteMobs installed.

</details>

# EliteMobs and FreeMinecraftModels compatibility FAQ

### Is FreeMinecraftModels compatible with EliteMobs?

<details>
<summary>
Info
</summary>

Yes. the FreeMinecraftModels plugin was made specifically around EliteMobs and EternalTD.

</details>

### How do I install EliteMobs custom models?

<details>
<summary>
Info
</summary>

You can download the custom models for EliteMobs from https://www.patreon.com/magmaguy and https://magmaguy.itch.io/. Once you have them installed, **you will have to merge the resource pack** generated by FreeMinecraftModels in its output folder with the official resource pack from EliteMobs if you want to use the official resource pack and distribute that to players by hosting it online.

</details>

### How do I install EliteMobs custom models?

<details>
<summary>
Info
</summary>

You can download the custom models for EliteMobs from https://www.patreon.com/magmaguy and https://magmaguy.itch.io/ . Once you have them installed, you will **have to merge the resource pack** generated by FreeMinecraftModels in its output folder with the official resource pack from EliteMobs if you want to use the official resource pack and distribute that to players by hosting it online.

</details>


# EliteMobs and ResurrectionChest compatibility FAQ

### Does EliteMobs work with ResurrectionChest?

<details>
<summary>
Info
</summary>

Yes. ResurrectionChest was made specifically for EliteMobs content and is fully compatible.

</details>

# Compatibility with other plugins FAQ

### Can I use EliteMobs with a plugin similar to MCMMO or AureliumSkills

<details>
<summary>
Info
</summary>

Yes. That being said, you might want to disable the bonus health from the EliteMobs prestige system.

</details>

### Can I use EliteMobs with another custom items plugin

<details>
<summary>
Info
</summary>

Yes. If you want bosses to drop specific items from that plugin, you set on death commands to run and give players items that way. However, there is no real way to balance EliteMobs with whatever item system you are using. Elites go from having 7 health points to hundreds of thousands of health points, and as such other item plugins will either be insanely overpowered of incredibly underpowered. EliteMobs already has an item system built into it and does not require any external items plugin.

</details>

# Other FAQ

### Run a command on Elite Mob death or give loot/rewards from other plugins on Elite Mob death?

[Information available here.]($language$/elitemobs/creating_bosses.md&section=ondeathcommands)

### Vault support?

[Information available here.]($language$/elitemobs/vault.md)

### PlaceholderAPI placeholders?

[Information available here.]($language$/elitemobs/placeholders.md)

### Use WorldGuard flags to allow EliteMobs in some places but not others?

[Information available here.]($language$/elitemobs/worldguard_flags.md)

### Can I make 100% of mobs that spawn be Elite Mobs?

This is a terrible idea but, you can access the `MobCombatSettings.yml` configuration file and
edit `eliteMobsSpawnPercentage` to set Elite Mobs spawn percentage.

### Can I create custom powers?

[Information available here.]($language$/elitemobs/creating_powers.md)

### Can I create custom enchantments?

This is on our to do list and should be coming soon, but it is currently not possible.

### Can I create custom potion effects?

The only way to do this is to learn Java and write them yourself. At that point, you might as well modify the
EliteMobs source code.

### How can I turn off wormhole particles?

To turn of the wormhole particles navigate to *~plugins\EliteMobs\Wormholes.yml* and then locate `noParticlesMode` and
change the value to `false`.

### How can I edit the wormhole in AG spawn to teleport players where I want?

<div align="center">

![faq_ag_wormhole.jpg](../../../img/wiki/faq_ag_wormhole.jpg)

</div>

You can do so by opening up *plugins\EliteMobs\wormholes\adventurers_guild_wormhole.yml*.

Then find the following setting
`location2: your_world_here,0.5,64,0.5,0,0`
and change the values to your preferred location.

Remember to do `/em reload` for the changes to take effect.

### How can I unbind items?

The only way to remove soulbound from items is to use Unbind Scrolls. Read more about
that [here]($language$/elitemobs/soulbind.md).

### How can I merge resource packs?

It is possible to merge resource packs manually, but we recommend using an online tool such as [merge.elmakers](https://merge.elmakers.com/) to merge your resource packs.

### What are the EliteMobs command placeholders?

| Placeholder |          Details           |
| --- |:--------------------------:|
| `$player` | Display name of the player |
| `$bossName` |  Display name of the boss  |
| `$bossLevel` |     Level of the boss      |

### What do I do to turn off force resource pack?

This setting is actually located in your `server.properties` file. You can usually find this file in your servers root directory. After opening up the file locate the `require-resource-pack` setting and change the value to `false` to turn off force resource pack.

### How can I turn off events?

If you would like to turn off events such as the weapons goblin, charms goblin etc. Then you can open up *~plugins\EliteMobs\events.yml* then locate the settings `actionEventsEnabled`, `timedEventsEnabled` and set them to `false`.

### How can I edit a dungeon world or the Adventurer's Guild world?

Starting with EliteMobs 9, EliteMobs no longer relies on WorldGuard for dungeon and content protection. To temporarily bypass this protection, use the command `/em protection bypass`.

If you want to permanently disable protection for a specific dungeon, follow these steps:

1. Navigate to *plugins/EliteMobs/content_packages/*.
2. Find the *dungeon_config.yml* file for the dungeon you want to modify.
3. Open the config file and locate the `protect:` setting.
4. Change the value to `false` to disable protection.


### What are Elite Scrolls and how can I use them

**Elite Scrolls** are special upgrade items that allow players to convert regular (non-elite) gear into elite-tier gear, integrating seamlessly with EliteMobs' leveling and loot systems.

- **Plugin Compatibility:** Ideal for servers using other item plugins like **ItemAdder**, allowing those items to gain elite levels.
- **Upgrade Method:** Can be applied at the **Adventurers Guild** by speaking to **Scotty**, the Scroll Applier NPC (located next to the Enchanter). *This feature is disabled by default.*
- **Balanced Progression:** Scrolls drop from **Elite Mobs** of the same level, ensuring fair and level-appropriate upgrades.
- **Custom Item Support:** Allows custom or plugin-based items to function within EliteMobs' progression system.

> **Note:** Elite damage effects are only active within the EliteMobs system. Scroll-enhanced items will not be overpowered in general gameplay outside of EliteMobs content.

### How to Enable Elite Scrolls

By default, Elite Scrolls are **disabled**. To enable them:

1. Open the configuration file:  
   `plugins/EliteMobs/ItemSettings.yml`
2. Set the following option to `true`:  
   ```yml
   useEliteItemScrolls: true
