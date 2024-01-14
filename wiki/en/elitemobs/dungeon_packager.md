[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are dungeons?

You can find info about dungeons, including info about premade dungeons [here](https://github.com/MagmaGuy/EliteMobs/wiki/Dungeons).

***

# What is the dungeon packager?

The dungeon packager allows admins to not only create and package dungeons but also package any kind of EliteMobs content. This includes things such as event packs, model packs, arenas, npc packs, item packs and so on.

<details>

<summary>Why use dungeon packages?</summary>

- ***Instanced dungeons!*** Instanced dungeons can only be created through the dungeon package system.
- ***Safe backups of Minidungeons!*** If you make a Dungeon Package, you'll be able to deploy and redeploy it in any server you want at any time and for any reason.
- ***Easy to turn off and on!*** You can always do `/em setup` and temporarily or permanently turn Dungeon Packages off and on.
- ***Easy to share!*** If you wish to share your creations, Dungeon Packages can just be zipped up and sent to other people. There is a Discord room dedicated to community creations if you are interested!
- ***Teleports!*** Dungeon packages automatically create teleport locations which can be accessed in the Teleports page of the `/em` menu, which might be very useful in a lot of setups.

</details>

# Creating Dungeons

The following settings are used to create a configuration file which should go into the `dungeonpackages` folder. These settings are used to create dungeons specifically, and are not required if you just want to use the dungeon packager to distribute non-dungeon content such as a pack of items or events.

## Required plugins

In order to use the Dungeon Packager, you will need the following plugins:

1) [WorldGuard](https://dev.bukkit.org/projects/worldguard) - protects the Minidungeon
2) (For schematics) [WorldEdit](https://dev.bukkit.org/projects/worldedit) ***or*** FastAsyncWorldEdit (FAWE) - Copies the build from a schematic file

## Creating a dungeon, step-by-step

There are two major kinds of dungeons: world-based and schematic-based.

World-based dungeons are for content that has its own world.

The schematic-based dungeons are for content that is associated to a schematic build, which can be pasted anywhere.

It is generally recommended to use world-based dungeons as they are easier to create and manage.

***

### Global values

The following values apply to all dungeons

| Key | Description | Values | Default | Mandatory |
|-|:---:|:-:|:-:|:-:|
| `isEnabled` | Sets if the dungeon package is enabled | `true` / `false` | `false` | ✅ |
| `name` | Sets the name of the content | STRING | none | ✅ |
| `dungeonLocationType` | Sets the type of location the dungeon uses | `WORLD` / `SCHEMATIC` / `INSTANCED` | none | ✅ |
| `contentType` | Sets the type of dungeon | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` / `SCHEMATIC_DUNGEON` | none | ✅ |
| `customInfo` | Sets the additional info that will appear in the `/em setup` screen. Only for information purposes. | STRING | none | ✅ |
| `downloadLink` | Sets the download link when the content is not downloaded. Only for information purposes.  | STRING | none | ❌ |
| `dungeonSizeCategory` | Sets the size category of the dungeon package. Only for information purposes. | `LAIR` / `SANCTUM` / `MINIDUNGEON` / `DUNGEON` / `RAID` /  `ADVENTURE` / `ARENA` / `OTHER` | none | ✅ |
| `protect` | Sets if the dungeon package should be protected by WorldGuard | `true` / `false` | `true `| ❌ |
| `anchorPoint` | Sets the spawn location of the build. **This is set when you install, do not set manually!** | LOCATION | none | ❌ |
| `dungeonVersion` | Sets the version of the dungeon package | INTEGER | none | ✅ |
| `playerInfo` | Sets the info which appears in the teleport menu | STRING | none | ✅ |
| `regionEnterMessage` | Sets the message that appears when a player enters the dungeon zone | STRING | none | ❌ |
| `regionLeaveMessage` | Sets the message that appears when a player leaves the dungeon zone | STRING | none | ❌ |
| `hasCustomModels` | Sets whether the dungeon package has custom models (for ModelEngine) | `true` / `false` | false | ❌ |
| `dungeonConfigFolderName` | Sets the name of the folders used for files associated to this dungeon. Mandatory for instanced dungeons! | STRING | none | ❌ |

***

### World-based dungeon packages

The following values only apply to world-based dungeons.

| Key | Description | Values | Default | Mandatory |
|-|:-:|:-:|:-:|:-:|
| `worldName` | Sets the name of the world packaged | STRING | none | ✅ |
| `womholeWorldName` | Sets the name of the wormhole world. This is used as a side world for the main world, for things such as teleport hubs or special boss rooms. | STRING | none | ❌ |
| `environment` | Sets the world's environment | [ENVIRONMENT](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) | none | ✅ |
| `teleportLocation` | Sets the teleport location of the dungeon package | STRING | none | ✅ |

#### Instanced dungeons

The following values only apply to instanced dungeons. Note that all instanced dungeons are world dungeons, so they also use the values from world dungeons.

| Key | Description | Values | Default | Mandatory |
|-|:-:|:-:|:-:|:-:|
| `startLocation` | Sets the start location of the instanced dungeon | STRING | none | ✅ |
| `permission` | Sets the permission required in order to enter the dungeon instance | STRING | none | ❌ |
| `minPlayerCount` | Sets the minimum player count required to start a dungeon | INTEGER | `1` | ❌ |
| `maxPlayerCount` | Sets the maximum player count required to start a dungeon | INTEGER | `5` | ❌ |
| `dungeonObjectives` | Sets list of dungeon objectives required for the dungeon to be considered completed | INTEGER | `1` | ✅ |
| `difficulties` | Sets list of difficulties in the instanced dungeon| Special format, check below!| none | ✅ |

**Note 1:** There are currently two dungeon objective types:

* Kill target: `filename=boss.yml:amount=X` example `filename=myboss.yml:amount=1`
* Kill percentage of dungeon: `clearpercentage=X.Y` example `clearpercentage=0.8` is 80%

**Note 2:** Setting instanced dungeon difficulties will automatically create different difficulty options when entering the dungeon, and the difficulty names set here will be the ones used in the custom bosses folder, where you are able to set which powers bosses have based on the difficulty.

Difficulties are in a list format which have the following fields:

| Key | Description | Values | Mandatory |
|-|:-:|:-:|:-:|
| `name` | Name of the difficulty for players | STRING | ✅ |
| `id` | ID of the difficulty, used in custom bosses and custom items for the difficulty-based features | STRING | ✅ |
| `levelSync` | Sets the level of the level sync, if any. Level sync makes all player gear max out at the set value, making it impossible for players to get overleveled for a dungeon and keeping it relevant for later runs. Based on the Final Fantasy 14 level sync system. | INTEGER | ❌ |

<details>
<summary>Example</summary>

```yml
difficulties:
- name: normal
  id: 0
  levelSync: 60
- name: hard
  id: 1
  levelSync: 50
- name: mythic
  id: 2
  levelSync: 40
```

</details>

***

**Note 3:** Instanced worlds create a new world for every time a group of players wants to complete a dungeon, and deletes it when it's done. For this to work correctly, you must put a folder following the `dungeonConfigFolderName` in the the `world_blueprints` configuration folder of EliteMobs. You then place the world you'll be using inside of the folder you created, making sure that the `session.lock` file of the world is deleted.

### Schematic-based Minidungeons

The following values only apply to schematic-based dungeons

| Key | Description | Values | Default | Mandatory |
|-|:-:|:-:|:-:|:-:|
| `relativeBossLocations` | Sets the boss locations of the content relative to the anchor point | STRING LIST | none | ✅ |
| `relativeTreasureChestLocations` | Sets the treasure chest locations of the content relative to the anchor point | STRING LIST | none | ❌ |
| `schematicName` | Sets the name of the schematic file with the build | STRING LIST | none | ✅ |
| `defaultSchematicRotation` | Sets the default rotation of the schematic. This should be the direction you face when looking towards the build from the anchor point. | `NORTH` / `SOUTH` / `EAST` / `WEST` | `SOUTH` | ✅ |
| `calculatedRotation` | Sets the rotation of the dungeon as installed. **Do not set this manually!** This setting is generated by the plugin. | INTEGER | none | ❌ |
| `corner1` | Sets one of the corners of the build, using relative locations from the anchor point | VECTOR | none | ✅ |
| `corner2` | Sets the corner of the build diametrically opposd to the first corner, using relative locations from the anchor point | VECTOR | none | ✅ |
| `teleportLocationOffset` | Sets the offset from the anchor point for the teleport point. | VECTOR | none | ❌ |

***

# Packaging EliteMobs content for distribution

Finally, you will probably want to package your dungeon either for storage or for distribution.

EliteMobs has an import system which allows admins to quickly import, install and uninstall content. [You can see how it works here.](https://github.com/MagmaGuy/EliteMobs/wiki/%5BGuide%5D-Quick-Setup)

## Running the package command

EliteMobs has the **`/em package <dungeonName> <version>`** command. This command goes through all the configuration folders of EliteMobs and automatically packages all content in folders that match the `dungeonName` into a zipped file and a normal folder in the `exports` folder of EliteMobs.

***For this reason, it is highly recommended you keep the content you want to package in folders with the same name as the name of your package.*** Otherwise, you will have to manually gather and package the files into the file structure for distribution.

## Adding the dungeon package file

If you are creating a dungeon, you will need to manually add the dungeon package file into the freshly generated folder in the exports folder. Your dungeon package configuration file should follow the format described above and be placed in a folder called `dungeonpackages`. [Check file structure for more on that.](#file-structure).

**Make sure you zip your dungeon once done!**

## File structure

If you did everything correctly, the file structure should be similar to this example, where we called the dungeon `my_cool_dungeon`:

<details>
<summary>my_cool_dungeon File Structure Example</summary>

- my_cool_dungeon.zip
    * dungeonpackages
        * my_cool_dungeon.yml <- This is where your dungeon package configuration file goes
    * worldcontainer
        * [Your world folders go here]
    * wormholes
        * my_cool_dungeon
            * [Your wormholes go here]
    * npcs
        * my_cool_dungeon
            * [Your NPCs go here]
    * customtreasurechests
        * my_cool_dungeon
            * [Your treasure chests go here]
    * customquests
        * my_cool_dungeon
            * [Your quests go here]
    * customitems
        * my_cool_dungeon
            * [Your custom items go here]
    * custombosses
        * my_cool_dungeon
            * [Your custom bosses go here]
    * customarenas
        * my_cool_dungeon
            * [Your custom arenas go here]
    * powers
        * my_cool_dungeon
            * [Your custom powers go here]
    * world_blueprints
        * my_cool_dungeon
            * [Your world folder goes here]
    * customevents
        * my_cool_dungeon
            * [Your custom events go here]
    * customspawns
        * my_cool_dungeon
            * [Your custom spawns go here]
    * schematics
        * [Your schematic goes here]
    * ModelEngine
        * [Your ModelEngine bbmodel format models go here, accepts folders]

</details>

This allows most users to drag and drop files directly on to their server and have it working immediately.

***Important: when packaging for distribution, make sure you UNINSTALL THE MINIDUNGEON FIRST! You don't want to distribute installed minidungeons, you want admins to set them up on their servers!***

# Sharing Dungeon Packages you've created with the community

Discord contains a [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") section where people can share their Minidungeon creations. Feel free to contribute!