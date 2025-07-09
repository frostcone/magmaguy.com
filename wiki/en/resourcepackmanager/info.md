# Resource Pack Manager (RSPM)

**Resource Pack Manager (RSPM)** is a plugin designed to simplify how Minecraft servers handle resource packs. It automatically merges, hosts, and distributes resource packs, ensuring players always have the correct pack with minimal setup.

---

## What Does It Do?

RSPM detects resource packs from supported plugins like EliteMobs, FreeMinecraftModels, ModelEngine, and others, then merges them together into a single resource pack. This merged pack is automatically hosted and delivered to players when they join your server.

You can also manually add your own resource packs by placing them in the `plugins/ResourcePackManager/mixer/` folder. The plugin merges these based on the order you define in the `priorityOrder` section of the config.

This means you no longer need to mess with manually merging zip files or uploading packs to third-party sites. Just configure your priorities and RSPM handles the rest.

---

## Setup Guide

1. Download and drop `ResourcePackManager.jar` into your server’s `plugins` folder.
2. Restart your server.
3. (Optional) Add any custom resource packs to the `mixer` folder.
4. (Optional) Edit `config.yml` to adjust priority or disable auto-hosting.
5. Run `/rspm reload` if you make changes.

---

## Configuration Example

```yaml
priorityOrder:
  - ResourcePackManager
  - EliteMobs
  - FreeMinecraftModels
  - ModelEngine
  - Nova
  - ItemsAdder
  - Oraxen
  - BetterHUD
  - ValhallaMMO
  - MMOInventory
  - vane-core
  - RealisticSurvival

autoHost: true
forceResourcePack: false
resourcePackPrompt: Use recommended resource pack?
resourcePackRerouting: ''
```

- **priorityOrder**: Controls which pack wins when there’s a conflict.
- **autoHost**: Uploads the merged pack to Magma’s hosting service.
- **forceResourcePack**: Forces clients to accept the pack.
- **resourcePackPrompt**: Sets the message shown when prompting players.
- **resourcePackRerouting**: Advanced use only – ignore if unsure.

---

## Supported Plugins

RSPM is compatible with most major plugins that generate their own resource packs:

- EliteMobs
- FreeMinecraftModels
- ModelEngine
- ItemsAdder (encryption must be disabled)
- Nova
- Oraxen
- MMOInventory
- BetterHUD
- ValhallaMMO

If your plugin isn't listed, you can still add its pack manually by placing the zip in the `mixer` folder and referencing its filename (including `.zip`) in the `priorityOrder`.

---

## Auto-Hosting

By default, RSPM uses a free auto-hosting service maintained by the plugin developer. This removes the need to configure your own hosting solution. If you prefer to host it yourself, simply disable `autoHost` in the config.

> Note: The auto-hosting is supported through community contributions and may not be available forever.

---

## Resolving Resource Pack Conflicts

While Resource Pack Manager (RSPM) streamlines the merging and distribution of resource packs, it is **not designed to resolve all possible conflicts** between them.

RSPM merges packs based on the `priorityOrder` defined in the configuration. If two packs contain the same file (e.g., the same model ID or GUI element), the one listed higher in the priority list will take precedence. However, this does **not** eliminate all compatibility issues. Common examples of unresolved conflicts include:

- Overlapping custom model data (CMD) IDs
- Conflicting texture paths
- Duplicate or clashing Unicode characters (used in custom GUIs)
- Incompatible overrides or model selectors

To manage these conflicts effectively:
- Adjust the `priorityOrder` so that your most important plugin appears at the top.
- Manually resolve overlaps by editing the packs directly, if necessary.
- Double-check that all packs are correctly generated and placed in their appropriate plugin directories or the `mixer` folder.

> Note: Many issues reported with RSPM are not bugs in the plugin, but rather the result of conflicting files between resource packs. RSPM cannot automatically fix these — it simply merges and serves them based on your configuration.

If you’re still encountering problems after adjusting priorities and checking for conflicts, you may need to manually intervene or reach out to the developers of the conflicting plugins for guidance.


---

## Commands

- `/rspm reload` — Reloads the plugin and re-merges all packs.
- `/rspm data_compliance_request` — Optional. Downloads hosted resource pack data.

---

## Summary

RSPM helps server owners streamline resource pack management. It automates the merging process, handles hosting, and distributes the final pack to players — all with minimal setup. However, it's still your responsibility to manage plugin conflicts through the config or by editing the packs if needed.

If you need help or run into issues, the official Discord is a good place to ask questions and get support.
