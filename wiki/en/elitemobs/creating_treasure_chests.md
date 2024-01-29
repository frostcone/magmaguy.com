[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

Treasure Chests are a feature allows admins to design chests that can either drop loot or spawn a mimic (hostile) boss.

<div align="center">

| Key | Description |                                    Values                                     | Default |
|-|:-:|:-----------------------------------------------------------------------------:|:-:|
| `isEnabled` | Sets if a treasure chest is enabled |                              [Boolean](#boolean)                              | `true` |
| `chestType` | Sets the type of chest material |                      A valid chest [material](#material)                      | `CHEST` |
| `facing` | Sets the facing direction of the chest |                      `NORTH` / `SOUTH` / `EAST` / `WEST`                      | `NORTH` |
| `dropStyle` | Sets if the chest is meant to be dropped for one player or multiple players [1] |                             `SINGLE` / `MULTIPLE`                             | `SINGLE` |
| `lootList` | Lists the loot of the treasure chest |                                  Special [2]                                  | none |
| `mimicChance` | Sets the chance of spawning a hostile boss instead of loot |                               [Double](#double)                               | `0` |
| `mimicCustomBossesList` | Sets the list of hostile bosses to spawn |                          [String List](#string_list)                          | none |
| `restockTimer` | Sets the time, in minutes, before the chest refills with loot |                              [Integer](#integer)                              | `0` |
| `effects ` | Sets the particle effects that the chest will do | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) | none |
| `locations` | Sets the locations where the treasure chest will spawn [3] |                                 Location List                                 | none |

[1] `SINGLE` chests disappear after being opened and reappear when restocked, `MULTIPLE` chests stay around and let individual players know they're in cooldown.

[2] Treasure chests use the [universal EliteMobs loot table format]($language$/elitemobs/loot_tables.md)

[3] Locations can more easily be set through `/em addTreasureChest <treasurechestfilename.yml>`

</div>

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
chestType: CHEST
facing: NORTH
dropStyle: MULTIPLE
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml:chance=0.95
mimicChance: 0.50
mimicCustomBossesList:
- balrog.yml
- killer_rabbit_of_caerbannog.yml
restockTimer: 1
effects: SMOKE_NORMAL
locations:
- world,0.0,-60.0,-14.0,0.0,0.0
```

<div align="center">

![create_boss_mounted.jpg](..%2F..%2F..%2Fimg%2Fwiki%2Fcreate_chest_chest.jpg)
<!-- NOTE FROST: Redesign all pages to use the same guide format as create_bosses does where there is a table with a setting explaining what it does and then an example right underneath it. Much better way to show examples and the ability to include pictures for every setting,-->

</div>

</div>

</details>