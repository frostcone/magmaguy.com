If you have a question that isn't listed here, ***take a look at the sidebar*** to see if it has a page dedicated to it
in the wiki!

### Why are my resource packs suddenly not displaying properly?  

<details>  
<summary>  
Info  
</summary>  

Sometimes issues can arise with resource pack merging, particularly after upgrading your server or plugins. For example, you may update your server from version 1.21 to 1.21.4 and notice that models for coins or swords in the EliteMobs resource pack are displayed as purple and black squares instead of the intended models.  

This issue can occur even if you haven’t made changes to Resource Pack Manager (RSPM) or other related resource pack settings.  

To resolve this, try the following:  

1. Stop your server.  
2. Delete the `ResourcePackManager` folder located in the `plugins` directory.  
3. Restart your server to allow RSPM to regenerate its configuration files and resource packs.  

This process often resolves display issues and restores proper functionality to your resource packs.  

</details>  

### How do I prevent conflicts between RSPM and ItemsAdder's auto-hosting feature?  

<details>  
<summary>  
Info  
</summary>  

ItemsAdder has its own auto-hosting feature, which can conflict with RSPM's auto-hosting if both are enabled. If you're using RSPM's auto-hosting and want it to handle all your resource packs—including those from ItemsAdder—you will need to disable ItemsAdder's auto-hosting.  

To do this, follow these steps:  

1. Open the `config.yml` file for ItemsAdder.  
2. Locate the `auto-external-host` setting and set it to `false`.  
3. Disable all other hosting methods by ensuring that no other hosting options are enabled in the configuration.  

Here’s an example of what the configuration should look like:  

```yaml
auto-external-host:
  enabled: false
```

</details>

### Why isn’t RSPM able to read and merge the ItemsAdder resource pack?  

<details>  
<summary>  
Info  
</summary>  

If you are using ItemsAdder, it is necessary to disable ItemsAdder's encryption to ensure that RSPM can read and merge the resource pack properly. ItemsAdder can encrypt its resource pack, which prevents RSPM from accessing and merging the files.  

To resolve this, follow these steps:  

1. Open the `config.yml` file for ItemsAdder.  
2. Set the following settings to `false`:  

```yaml
zip:
  protect-file-from-unzip:
    protection_1: false
    protection_2: false
```

</details>

### ViaVersion can lead to Resource Packs not displaying properly.  

<details>  
<summary>  
Info  
</summary>  

ViaVersion can cause issues with resource packs, particularly when running a server on a version lower than 1.21.4. Minecraft introduced changes in how resource packs are handled starting from 1.21.4. If you are running a server on a version like 1.21.3 and using ViaVersion to allow 1.21.4 clients to connect, these clients may experience issues displaying certain resource pack contents, such as custom models from FMM (FreeMinecraftModels).  

This happens because the resource pack system in Minecraft changed with the 1.21.4 update.

To resolve this, consider updating your server to 1.21.4 or higher, as this will ensure better compatibility with modern resource pack features, including FMM custom models.  

</details>

### Can I add my own resource packs to be merged?

<details>
<summary>
Info
</summary>

You can add your own custom resource packs by placing them in the `mixer` folder located inside the `ResourcePackManager` plugin directory.

Simply drop your `.zip` file into that folder. To ensure it’s merged correctly, update the `priorityOrder` section in the `config.yml` with the exact filename, including the `.zip` extension. For example:

```yaml
priorityOrder:
  - ResourcePackManager
  - EliteMobs
  - MyCustomPack.zip
```

This allows you to seamlessly merge EliteMobs, FreeMinecraftModels, and any custom textures into a single pack.

</details>


### How do I add a custom resource pack to the `priorityOrder` list?

<details>  
<summary>  
Info  
</summary>  

To add a custom resource pack to the `priorityOrder` in `ResourcePackManager`, simply include the **exact filename** of the `.zip` file you placed in the `mixer` folder.

For example, if you added a resource pack called `MyWeirdTextures.zip`, your config should look like this:

```yaml
priorityOrder:
  - ResourcePackManager
  - EliteMobs
  - MyWeirdTextures.zip

