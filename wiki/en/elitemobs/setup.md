# Setup video

<div class="outer-container">
<div class="iframe-container">
  <iframe class="video-iframe" src="https://www.youtube.com/embed/boRg2X4qhw4?si=2aRLV_j9UzNz_VO0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
</div>

***


*This guide assumes you are using EliteMobs ***7.2.37*** or later.*

# First boot

Restart once.

<details>

<summary>Why?</summary>

EliteMobs sets increases maximum health of your spigot.yml config file the first time the server starts up. This is so Elite mobs can have more than 2000 health. It does not alter the health of any other mob - so it doesn't change vanilla or plugin mobs.

This change requires a restart to actually work.

</details>

# Permissions

As of EliteMobs 7.2.23, all recommended permissions are already setup by default. You can see more about permissions [here]($language$/elitemobs/permissions_and_commands.md).

# Adventurer's Guild Hub world & Lairs / Minidungeons

As of EliteMobs 7.2.35, there is now an `imports` folder in the EliteMobs directory. The installation process for the Adventurer's Guild World, Lairs and Minidungeons is the same:

1) Download the files. You can click on the red glass in `/em setup` to get links to the downloads.

2) Upload / move the files to your server's `/plugins/EliteMobs/imports` folder. Make sure you put the **ZIPPED** files inside of the `imports` folder without modifying them in any way, EliteMobs will automatically extract the files and move them to the correct locations.

3) Restart or do `/em reload`. After a few seconds, when you do `/em setup` the indicators for the features you downloaded should be yellow.

**IMPORTANT: [WORLDGUARD](https://dev.bukkit.org/projects/worldguard) AND [WORLDEDIT](https://dev.bukkit.org/projects/worldedit) (or [FastAsyncWorldEdit](https://www.spigotmc.org/resources/fastasyncworldedit.13932/)) ARE MANDATORY IF YOU WANT TO INSTALL SOME OF THE CONTENT IN ELITEMOBS!**

4) Click on the yellow glass in the `/em setup` menu to install features!

5) ***If your dungeon files have Custom Models***, you can optionally follow the installation steps listed [here]($language$/elitemobs/custom_models.md%importing-custom-models-from-dungeons) to install them.

That's it! **You can find teleports to the installed dungeons & adventurers guild in /em, in the Teleports page!**

[More info on the Adventurer's Guild here!]($language$/elitemobs/adventurers_guild_world.md)

# Recommended plugins

- [WorldGuard](https://dev.bukkit.org/projects/worldguard): Used to setup and protect areas. [EliteMobs flags list]($language$/elitemobs/worldguard_flags.md).
- [WorldGuardExtraFlags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/): Used for the anti-fly flag, useful to have.
- [PlaceHolderAPI (PAPI)](https://www.spigotmc.org/resources/placeholderapi.6245/): Used to displaying EliteMobs info on other plugins, like for chat. [More info]($language$/elitemobs/placeholders.md).
- [LibsDisguises](https://www.spigotmc.org/resources/libs-disguises-free.81/): Used to disguise Custom Bosses as anything else. Disguises are heavily used in our official dungeons so it is highly recommended you install this plugin. [More info]($language$/elitemobs/libsdisguises.md).
- [DiscordSRV]($language$/elitemobs/discordsrv.md): Used to link EliteMobs announcements to Discord chat. [More info]($language$/elitemobs/discordsrv.md)

# Updating dungeon content

To update dungeon content, simply repeat the installation steps above. **You do ***not*** have to delete any files**, EliteMobs handles that when you import the update.

# Frequently Asked Questions (FAQ)

## EliteMobs says WorldGuard / WorldEdit is not installed when it is

<details><summary>Answer</summary>

This 100% means you are using the wrong version of WorldGuard / WorldEdit on your server. [You can get the right version from the section above.]($language$/elitemobs/setup.md%recommended-plugins)

</details>

## The world-based minidungeon is just flat terrain

<details><summary>Answer</summary>

95% of the time this means you did not follow the setup instructions. If you unzipped any files or loaded any worlds using other plugins, reinstall the content following the steps listed above. You do not need any other plugins to load the worlds correctly.

</details>

## NPC chat looks weird / wormholes aren't working / other weird behavior after installing

<details>

<summary>Answer</summary>

Run the command `/em reload` after setting a dungeon up to make sure all of the values get fully initialized. A restart is even better, but should not be necessary.

</details>

## Bosses aren't spawning

### The boss was spawning earlier!

<details>

<summary>Answer</summary>

Regional bosses have a respawn time. You can check when the boss is scheduled to respawn by going to its configuration file and copying the numbers after the `:` in the spawn locations section.

Example:

```yml
spawnLocations:
- em_primis,1100.5,22.5,526.5,0.0,0.0:1643259941451
```

In this case the numbers you're looking for are `1643259941451`. You can use [this](https://www.unixtimestamp.com/index.php) website to convert that to a specific date. You can delete the numbers to force the boss to respawn, make sure you do `/em reload` after deleting them.

</details>

### The boss was never spawning!

<details>

<summary>Answer</summary>

Check the following things:

- Did you or someone else kill the boss, or did it escape via the timeout feature? The boss may be respawning. Check the cooldowns, info about that is in the section above.
- See if there are any errors on console, especially after you install the dungeon or after an `/em reload`. The errors should tell you what's wrong.
- Check if your region is protected by some other plugin that would prevent mob spawning
- Check the difficulty of your world, mobs can't spawn in peaceful difficulty
- Check WorldGuard flags, see if mob spawning is set to allow
- Check if you installed the dungeon content over the spawn area, that is protected by default
- Very, very rarely, the issue might have to do with the day your server thinks it is. Make sure your server machine's date is correct, otherwise the respawn mechanic might cause some issues.

</details>


## Something's messed up and I just can't fix it

<details>

<summary>Answer</summary>

This usually happens after trying and failing to correctly modify files in a way that EliteMobs could not self-repair. If you are stuck and can't figure out how to repair it from the console messages on startup / dungeon installation, the best thing to do is a clean installation of EliteMobs.

Back up your `~/plugins/EliteMobs/data` folder to keep player data, then delete the `~/plugins/EliteMobs/` folder. Start your server up, shut it down, restore the contents of your backed up data folder **while the server is offline** and then start it up again. You can now resume installing EliteMobs content.

</details>