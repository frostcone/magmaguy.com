# Resource Pack Manager (RSPM)  

**Resource Pack Manager (RSPM)** is a plugin designed to streamline the management of resource packs on Minecraft servers. It automates merging, hosting, and distributing resource packs, saving server administrators time and effort while ensuring a seamless experience for players.  

## Key Features  

RSPM handles all aspects of resource pack management automatically. It merges resource packs from compatible plugins or manually added files, hosts the resulting pack remotely, and distributes it to players when they log into the server. This process eliminates the need for manual intervention or technical expertise, allowing administrators to focus on running their servers.  

The plugin supports both automatic merging and manual integration. Non-compatible resource packs can be added to a designated folder (`mixer`), where RSPM will incorporate them into the merged pack. Hosting is handled automatically by default, with the option to disable auto-hosting for manual hosting setups.  

RSPM works with minimal configuration out of the box. However, administrators can customize the settings through configuration files, including managing priority lists for plugins to resolve conflicts when merging.  

## Compatibility  

RSPM supports a wide range of plugins that rely on resource packs, including FreeMinecraftModels, EliteMobs, ModelEngine, and ItemsAdder. The plugin can also handle resource packs from plugins that require extra steps, like ValhallaMMO and Oraxen. For servers using unsupported plugins, administrators can request compatibility through the developer's active Discord support.  

## How It Works  

RSPM automatically detects resource packs from supported plugins and merges them based on a priority list defined in its configuration. This ensures that the most critical resource packs take precedence in cases of conflict.  

Once merged, the resource pack is either hosted remotely (via RSPM’s auto-hosting feature) or saved for manual hosting, depending on the server’s setup. Players receive the correct resource pack automatically when they log in, ensuring they always have the required assets without additional downloads or troubleshooting.  

## Setup  

Using RSPM is simple:  

1. Drop the `ResourcePackManager.jar` file into your server's `plugins` folder.  
2. Restart your server.  
3. (Optional) Adjust the configuration files to customize the plugin’s behavior.  

The plugin is designed to work immediately with default settings, making it easy for new users to get started.  

## Limitations  

While RSPM excels at merging resource packs, it cannot resolve fundamental conflicts, such as:  
- Overlapping Unicode characters in GUIs.  
- Conflicting model IDs between plugins.  

In such cases, the plugin uses the resource pack with the highest priority as specified in the configuration.  

## Auto-Hosting  

To simplify distribution, RSPM offers a free auto-hosting service. This feature uploads merged resource packs to remote servers and automatically distributes them to players when they log in. Auto-hosting is enabled by default but can be disabled in the configuration for administrators who prefer to manage hosting themselves.  

The auto-hosting service is supported by the developer’s Patreon community, ensuring that it remains free and accessible for all users.  

## Commands  

RSPM provides a few essential commands for server administrators:  

- `/resourcepackmanager reload`: Reloads the plugin and applies configuration changes.  
- `/resourcepackmanager data_compliance_request`: Downloads hosted resource pack data for inspection (not required for regular operation).