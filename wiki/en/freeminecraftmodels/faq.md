If you have a question that isn't listed here, ***take a look at the sidebar*** to see if it has a page dedicated to it
in the wiki!

# Troubleshooting FAQ

### Instead of custom models, I only see horse armor.

<details>
<summary>
Info
</summary>

If, instead of custom models appearing in your game, you only see horse armor, the issue is most likely that you haven’t merged the FMM resource pack properly with your preexisting resource pack.

MagmaGuy has developed a plugin called Resource Pack Manager (RSPM) that can automatically merge resource packs for you. You can download it from Spigot [here](https://www.spigotmc.org/resources/resource-pack-manager.118574/).

Simply drop the RSPM .jar file into your plugins folder, and RSPM will handle everything. It will merge all the resource packs, auto-host them, and distribute them to players when they log into your server.

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