[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are dungeons?

You can find info about dungeons, including info about premade dungeons [here]($language$/elitemobs/dungeons.md).

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

The schematic-based dungeons are for content that is associated to a schematic build, which can be pasted anywhere. (We are slowly phasing these out so schematic-based dungeons should not be something you focus on as we might only support them in the future as a legacy thing.)

It is generally recommended to use world-based dungeons as they are easier to create and manage.

***

### Global values

The following values apply to all dungeons

<div align="center">

### isEnabled

Sets if the dungeon package is enabled.

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Boolean](#boolean) | `false` |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Sets the name of the content. Supports [Color Codes](#color_codes).

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [String](#string) | `false` |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aThe Green Dungeon'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Sets the type of location the dungeon uses.

| Key         |        Values         | Default | Mandatory |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Sets the type of dungeon.

| Key         |                    Values                    | Default | Mandatory |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Sets the additional info that will appear in the `/em setup` screen. Only for information purposes. Supports [Color Codes](#color_codes).

| Key         |           Values            | Default | Mandatory |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
customInfo:
- '&aThe best dungeon.'
- '&aMade by: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Sets the download link when the content is not downloaded. Only for information purposes.

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Sets the size category of the dungeon package. Only for information purposes.

| Key         |   Values    | Default | Mandatory |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Special [1] |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Special [1]**

<details> 

<summary><b>Expand Table</b></summary>

<div align="center">

| Key | Description                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Lairs are a type of small dungeon which focuses on one big boss fight.  |
| `SANCTUM`    | Sanctums are the equivalent of instanced Lairs. This means that they focus around one huge boss fight. |
| `MINIDUNGEON`    | Minidungeons are a type of medium sized dungeon which usually contains 3-15 minibosses and a big boss, as well as a lot of "trash" mobs which are meant to be "farmed" for coins and gear by players. |
| `DUNGEON`    | Dungeons are the equivalent of instanced Minidungeons. This the the most traditional MMORPG type of dungeon, where players party up and go through a gauntlet of trash mobs and minibosses to fight a final boss. |
| `RAID`    | Coming soon!|
| `ADVENTURE`    | Adventures are full adventure maps. They include quests lines, npcs, large amounts of minibosses and bosses and can even contain their own arenas or dungeons inside of them. |
| `ARENA`    | Arenas are wave-based survival areas in which players get rewarded for defeating waves. |
| `OTHER`    | Anything else that does not alreeady fall in the previous categories. |

For more detailed descriptions see [Dungeons]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Sets if the dungeon package should be protected by WorldGuard.

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Boolean](#boolean) |  `true`   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Sets the version of the dungeon package.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Integer](#integer) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Sets the info which appears in the menu. Supports [Color Codes](#colorcodes).

*Works only when the `/em` is set to book mode using `/em alt`.*

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
playerInfo: 'Difficulty: &a1-man easy content!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Sets the message that appears when a player enters the dungeon zone. Supports [Color Codes](#colorcodes).

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
regionEnterMessage: '&aYou have entered the dungeon!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Sets the message that appears when a player leaves the dungeon zone. Supports [Color Codes](#colorcodes).

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&aYou have left the dungeon!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Sets whether the dungeon package has custom models (for ModelEngine).

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Boolean](#boolean) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Sets the name of the folders used for files associated to this dungeon. 

**Mandatory for instanced dungeons!.**

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Sets the content level the dungeon should display in the EM menu.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Integer](#integer) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Sets if the dungeon should be an Enchantment Challenge dungeon.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Boolean](#boolean) | `false` |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### World-based dungeon packages

The following values only apply to world-based dungeons.

<div align="center">

***

### worldName

Sets the name of the world that should be packaged.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
worldName: my_minecraft_world
```

</div>

</details>

***

### womholeWorldName

This function sets the name of the wormhole world, which serves as a secondary world linked to the main world. It is utilized for features like teleport hubs or unique boss chambers.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
womholeWorldName: my_minecraft_world_wormhole
```

</div>

</details>

***

### environment

Sets the world's environment.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Sets the teleport location of the dungeon package. This is where the players will be teleported to when entering the dungeon.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
teleportLocation: my_minecraft_world,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

</div>

#### Instanced dungeons

*Instanced dungeons create a new world for every time a group of players wants to complete a dungeon, and deletes it when it's done. For this to work correctly, you must put a folder following the `dungeonConfigFolderName` in the the `world_blueprints` configuration folder of EliteMobs.*

*You then place the world you'll be using inside of the folder you created, making sure that the `session.lock` file of the world is deleted.*

The following values only apply to instanced dungeons. Note that all instanced dungeons are world dungeons, so they also use the values from world dungeons.

<div align="center">

***

### startLocation

Sets the teleport location of the instanced dungeon starting point. This is where the players will be teleported to when starting the instanced dungeon with `/em start`.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [String](#string) |  none   |    ✅      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
startLocation: my_minecraft_world,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Sets the permission required in order to enter the dungeon instance.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [String](#string) |  none   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Sets the minimum player count required to start a dungeon.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Integer](#integer) |  `1`   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Sets the minimum player count required to start a dungeon.

| Key         |  Values  | Default | Mandatory |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Integer](#integer) |   `5`   |    ❌      |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Sets list of dungeon objectives required for the dungeon to be considered completed.

| Key         |           Values            | Default | Mandatory |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [String List](#string_list) |  none   |    ✅      |

<details> 

<summary><b>Examples</b></summary>

<div align="left">

There are currently two dungeon objective types:

* Kill target: `filename=boss.yml:amount=X`
* Kill percentage of dungeon: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives: 
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Sets list of difficulties in the instanced dungeon. 

**Mandatory for instanced dungeons!**

| Key         |   Values    | Default | Mandatory |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Special [1] |  none   |    ❌      |

<details> 

<summary><b>Examples</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Special [1]**

<details>

<summary><b>Expand Table</b></summary>

<div align="center">

Setting instanced dungeon difficulties will automatically create different difficulty options when entering the dungeon. 

The difficulty names set here will be the ones used in the custom bosses folder, where you are able to set which powers bosses have based on the difficulty.

Difficulties are in a list format which have the following fields:

|     Key     | Description                                                                                                                                                                                                                                                    | Values | Mandatory |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Name of the difficulty for players.                                                                                                                                                                                                                            |[String](#string)        |     ✅     |
|    `id`     | ID of the difficulty, used in custom bosses and custom items for the difficulty-based feature.                                                                                                                                                                 |[String](#string)        |     ✅     |
| `levelSync` | Sets the level of the level sync, if any. Level sync makes all player gear max out at the set value, making it impossible for players to get over leveled for a dungeon and keeping it relevant for later runs. Based on the Final Fantasy 14 level sync system. |[Integer](#integer)        |     ❌     |


</div>

</details>

</div>

***

# Packaging EliteMobs content for distribution

Finally, you will probably want to package your dungeon either for storage or for distribution.

EliteMobs has an import system which allows admins to quickly import, install and uninstall content. [You can see how it works here.]($language$/elitemobs/setup.md)

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
            * [Your world folder goes here, used for instanced dungeons]
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