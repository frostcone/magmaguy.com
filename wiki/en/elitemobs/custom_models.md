As of EliteMobs 7.3.12, Custom Models have been added to EliteMobs through [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) and [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Foreword

From an EliteMobs perspective, the Custom Model system is very simple, as the only thing admins have to do is add a line to an NPC or Custom Boss config file telling it which Custom Model to use. However, it is necessary to take the correct steps with Model Engine and Minecraft in order to get this system fully functional, and these aren't quite as easy to get into.

This guide will go into detail insofar as interfacing with Model Engine and Minecraft goes. It will not tell you how to use Blockbench to create custom bosses, nor will it go into detail about how Model Engine works. There are already plenty of guides on how to do that elsewhere, and if you want to learn more about those systems you are better served by looking directly at their documentation.

## FreeMineCraft Models

If you want to learn how you can use FMM to get your models working then you can check out [this]($language$/freeminecraftmodels/info.md) wiki page to learn more.

# Minimum requirements

EliteMobs 7.3.12 or later, Model Engine R2.2.0\* or later, Blockbench\*\*, a using Minecraft Resource Packs.

\* This plugin may have further dependencies. Check the documentation on their end.  
\*\* Necessary for creating and editing Custom Models. Not necessary if you are just looking to install content without modifying it.

# Manually setting a Custom Model

Note: This guide assumes you already have a valid Custom Model. These come in Blockbench file formats (`.bbmodel`).

EliteMobs is able to use Custom Models for NPCs and Custom Bosses. The process to do this is the same for both, and is as follows:

## Step 1. Setting the EliteMobs config

Go to the configuration file of the Custom Boss or NPC you want to modify and add the following line:

```yaml
customModel: modelname
```

Replace `modelname` with the name of your model. The name is the name of the Custom Model file you are using. As an example, the Test Boss' Custom Model file is `showcase_boss.bbmodel`. As such, the configuration option should be

```yaml
customModel: showcase_boss
```

And that's it for EliteMobs! Now it gets a bit trickier.

## Step 2. Generating the Model Engine data

[_Note: In case of doubt or issues, refer to the Model Engine wiki here._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Put your Custom Model Blockbench file (`.bbmodel`) into the directory `(yourServer)/plugins/ModelEngine/blueprints` .
2.  Run the command `/meg reload` . If everything worked correctly, you should get a message saying `[Model Engine] X models loaded` , where `x` is the amount of models you have registered.

## Step 3. Generating the Resource Pack

[**Note: there is now an alternative, simpler way to do this step on this link.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) However, it is a little bit less flexible than what is listed here.

This is possibly the trickiest part if you are looking to make your server manage the downloads. **Try checking if the system works when you have the resource pack on your client before looking into distributing it automatically!**

1.  Go to the directory `(yourServer)/plugins/ModelEngine/resource pack` and create a resource pack using that data or add the `assets` folder in there to your resource pack's `assets`
    1.  If you are creating a new resource pack, you can put the files in `resource pack` into a zipped file, and that will be a valid resource pack you can distribute. [More info](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  If you already have a resource pack, make sure you aren't accidentally overwriting existing models. [More info](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribute your resource pack to your players. **Only players that have the resource pack will be able to see the Custom Models**, and it will look very weird and broken to everyone else. If you intend to make heavy use of these, you may want to force the resource pack use.
    1.  (Optional) To allow players to download a resource pack on login, you will need to host the file somewhere online and change the server.properties `resource-pack=` field to point to that address.**\***
    2.  (Optional) If you are modifying the resource packs, you will want to use the `resource-pack-sha1=` option so the server can check if the player's resource pack needs to be updated. To generate this value, upload your resource pack to [http://onlinemd5.com/](http://onlinemd5.com/) and make sure you pick the SHA1 option. You will have to do this every time you update your Resource Pack, or else your users won't get the update.**\***
    3.  (Optional) To force players to use resource packs, use the option `require-resource-pack=true` in server.properties.**\***

**If you modified server.properties you will need to restart!**

**\*** Note: There are a lot of guides online that can help you get this working if these instructions aren't helping you.

### Merge resource packs

Should you need to merge your resource packs you can do so manually. But we recommend using an online tool such as [merge.elmakers](https://merge.elmakers.com/) to merge your resource packs.

## Step 4. Hope it works

Assuming everything was done correctly, you should now be able to see the Custom Model on your boss or NPC. You can spawn them through the commands:

*   Custom Boss: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

You can then remove them through the command `/em remove`.

# Creating and adapting Custom Models for EliteMobs

EliteMobs is able to use any model considered valid by Model Engine, which means there isn't much that can't be done with it.

However, when it comes to animations, the use of specific names for the animations is required to guarantee that the bosses can use the animations.

These animation names are the ones set on Blockbench in the animations tab. You can rename them at any time, meaning you can retrofit any existing models to work with EliteMobs.

## Animations

Please note that this section is still expanding, as this system is still very recent. More will be added to it as feature requests roll in.

### idle

`idle` is the correct animation name for entities that are not in combat and not moving. EliteMobs does not modify the default idle animation system Model Engine uses.

### walk

`walk` is the correct animation name for entities that are moving. EliteMobs does not modify the default idle animation system Model Engine uses.

### attack

There are three types of attack animations:

#### attack

`attack` is the correct generic animation name for when a boss attacks.

#### attack_melee

`attack_melee` is the correct animation name for attacks done when a Custom Boss attacks an entity using a vanilla Minecraft melee attack. Overrides `attack` . Please note that the animation plays **after** the damage is dealt. This is unfortunately a limitation for now. As such, try to make the animation very fast.

#### attack_ranged

`attack_ranged` is the correct animation name for attacks done when a Custom Boss spawns a projectile entity. Overrides `attack`. Please note that the animation plays **after** the projectile is fired. This is unfortunately a limitation for now. As such, try to make the animation very fast.

### damaged

`damaged` is the correct animation name for the hurt animation that a Custom Boss plays when damaged.

### death

`death` is the correct animation name for death animation. EliteMobs does not modify the default idle animation system Model Engine uses.

### powers

Note: this segment is still in development. The following are the features as they are planned.

Every power in EliteMobs can have an animation assigned to it. The animation always starts when the power is triggered, and no further triggers are currently provided throughout the use of the power. Some powers, such as the invulnerabilities, won't do anything as they have no triggers and are just passive properties of the bosses.

In order to assign an animation to a power, the animation must be named the same as the elitemobs power file.

As an example, to add an animation to the zombie necronomicon power, the animation should be called `zombie_necronomicon.yml` . It will start playing as soon as the power is triggered, and end when the animation ends if it is not set to loop or when the power is done.

# Importing Custom Models from dungeons

## Step 1. Normal import

Upon importing a dungeon packager zipped folder that contains Custom Models, the Custom Models get automatically moved to `(yourServer)/plugins/ModelEngine/blueprints` and Model Engine automatically reloads to generate the relevant resource pack and Model Engine files.

## Step 2. Generating the Resource Pack

If you are online when you reload EliteMobs in order to import files, EliteMobs will automatically post a message in chat which you can click to generate the EliteMobs resource pack. Alternatively, you can run the command `/em generateresourcepack` in order to generate it.

Running this command copies all the resource pack files to the EliteMobs `exports` folder in a non-destructive way. This means that if you unzip a resource pack into the exports folder using the resource pack name `elitemobs_resource_pack` for your resource pack folder EliteMobs will not delete any of the files in there unless a file with the same name is obtained from ModelEngine (except for pack.meta and pack.png). This way you are able to update your resource pack without losing the models you've previously put into it.

Finally, EliteMobs zips the resource pack in the `exports` folder, and this file is ready for distribution

After this is done, EliteMobs also suggests updating the SHA1 code for your resource pack.

### Step 2.5. Updating the SHA1

The SHA1 code in the `server.properties` file is used to let clients know if their resource pack is outdated, and makes them update it if necessary. This code can be generated through EliteMobs by clicking on the option on chat which appears after step 2, or by running the command `/em updateresourcepack`

**Keep in mind that this updates your server.properties file with the correct SHA1 code for the zipped resource pack in the `exports` folder.** If you delete it or modify the zipped file after running the command it will not work.

## Step 3. Make the file publicly available

Host the file at a location of your choice. Some people use Google Drive or Dropbox for this. It is better to host this file yourself, if you have the ability to do so. Some plugins out there might also help you host it directly from your Minecraft server. If you find a plugin like that that works, let MagmaGuy know on Discord and this post will be updated with that info.