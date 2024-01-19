[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

Treasure Chests are a feature allows admins to design chests that can either drop loot or spawn a mimic (hostile) boss.

<div align="center">

| Key | Description |                                    Values                                     | Default |
|-|:-:|:-----------------------------------------------------------------------------:|:-:|
| `isEnabled` | Sets if a treasure chest is enabled |                               `true` / `false`                                | `true` |
| `chestType` | Sets the type of chest material |                      A valid chest [material](#material)                      | `CHEST` |
| `facing` | Sets the facing direction of the chest |                      `NORTH` / `SOUTH` / `EAST` / `WEST`                      | `NORTH` |
| `dropStyle` | Sets if the chest is meant to be dropped for one player or multiple players [1] |                             `SINGLE` / `MULTIPLE`                             | `SINGLE` |
| `lootList` | Lists the loot of the treasure chest |                                  Special [2]                                  | none |
| `mimicChance` | Sets the chance of spawning a hostile boss instead of loot |                                    INTEGER                                    | `0` |
| `mimicCustomBossesList` | Sets the list of hostile bosses to spawn |                                  STRING LIST                                  | none |
| `restockTimer` | Sets the time, in minutes, before the chest refills with loot |                                    INTEGER                                    | `0` |
| `effects ` | Sets the particle effects that the chest will do | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) | none |
| `locations` | Sets the locations where the treasure chest will spawn [3] |                                 LOCATION LIST                                 | none |

[1] `SINGLE` chests disappear after being opened and reappear when restocked, `MULTIPLE` chests stay around and let individual players know they're in cooldown.

[2] Treasure chests use the [universal EliteMobs loot table format](https://magmaguy.com/wiki.html#en+elitemobs+loot_tables.md)

[3] Locations can more easily be set through `/em addTreasureChest <treasurechestfilename.yml>`

</div>