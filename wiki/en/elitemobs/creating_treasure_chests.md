[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

Treasure Chests are a feature allows admins to make chests that can either drop loot or spawn a mimic (hostile) boss.

<div align="center">

<div align="left">

## Values

</div>

### isEnabled

Sets if a treasure chest is enabled.

| Key       |       Values        | Default |
|-----------|:-------------------:|:-------:|
| `isEnabled` | [Boolean](#boolean) | `true`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### chestType

Sets the type of chest material.

| Key       |        Values         | Default |
|-----------|:---------------------:|:-------:|
| `chestType` | [Material](#material) | `CHEST` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
chestType: CHEST
```
*This needs to be a valid chest material such as `CHEST` or `BARREL`*.

<div align="center">

![create_chest_material.jpg](../../../img/wiki/create_chest_material.jpg)

</div>

</div>

</details>

***

### facing

Sets the facing direction of the chest.

| Key       |   Values    | Default |
|-----------|:-----------:|:-------:|
| `facing` | Special [1] | `CHEST` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
facing: CHEST
```
*This needs to be a valid chest material such as `CHEST` or `BARREL`*.

</div>

</details>

**Special [1]**

<details> 

<summary><b>Expand Table</b></summary>

| Facing  |
|---------|
| `NORTH` |
| `SOUTH` |
| `WEST`  |
| `EAST`  |


</details>

***

### dropStyle

Sets if the chest is meant to be dropped for one player or multiple players.

`SINGLE` chests disappear after being opened and reappear when restocked. `GROUP` chests stay around and let individual players know they're on cooldown.

| Key       |       Values       | Default |
|-----------|:------------------:|:-------:|
| `dropStyle` | `SINGLE` / `GROUP` | `SINGLE` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
dropStyle: SINGLE
```

</div>

</details>

***

### lootList

Lists the loot that the treasure chest should drop when opened.

| Key       |                        Values                        | Default |
|-----------|:----------------------------------------------------:|:-------:|
| `lootList` | [EM Loot Table]($language$/elitemobs/loot_tables.md) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
lootList:
- filename=elite_scrap_tiny.yml:chance=0.90
- magmaguys_toothpick.yml
```

</div>

</details>

***

### mimicChance

Sets the chance of spawning a hostile boss instead of dropping loot.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `mimicChance` | [Double](#double) |   `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
mimicChance: 0.5
```

</div>

</details>

***

### mimicCustomBossesList

Specifies the list of hostile bosses available for spawning. A single boss will be randomly selected from this list for spawning. 

The list also supports a weight system that you can implement to ensure some bosses are picked more often that the others.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `mimicCustomBossesList` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml
- weak_mimic_boss.yml
```
*If you wish to assign weights to the bosses, the list should be formatted as follows:*

```yml
mimicCustomBossesList:
- my_cool_mimic_boss.yml:60
- weak_mimic_boss.yml:40
```

*In this configuration, `my_cool_mimic_boss.yml` is more likely to be chosen for spawning than `weak_mimic_boss.yml`.*

</div>

</details>

***

### restockTimer

Sets the time, in minutes, before the chest refills with loot.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `restockTimer` | [Integer](#integer) |   `0`   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
restockTimer: 30
```

</div>

</details>

***

### effects

Sets the particle effects that the chest will do.

| Key       |      Values       | Default |
|-----------|:-----------------:|:-------:|
| `effects` | [Particle](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Particle.html) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
effects:
- DRIP_LAVA
- SMOKE_NORMAL
```

<div align="center">

![create_chest_effects.jpg](../../../img/wiki/create_chest_effects.jpg)

</div>

</div>

</details>

***

### locations

Sets the locations where the treasure chest will spawn.

Locations can more easily be set through `/em addTreasureChest <treasurechestfilename.yml>

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `locations` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
locations:
- my_world,10,50,10,0,0
- my_nether_world,12,58,12,0,0
```

</div>

</details>

***

### chestTier

Sets the minimum guild rank required to open the chest.

| Key       |           Values            | Default |
|-----------|:---------------------------:|:-------:|
| `chestTier` | [Integer](#integer) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
chestTier: 3
```

</div>

</details>

***

### restockTime

After a chest has been looted, the plugin will write this key to track restock time. 

**DO NOT SET THIS VALUE MANUALLY**.

| Key       |     Values     | Default |
|-----------|:--------------:|:-------:|
| `restockTime` | Unix Timestamp |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
restockTime: 1707394380
```

</div>

</details>

</div>

***

<details> 

<summary align="center"><b>Treasure Chest Config Example</b></summary>

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

![create_chest_chest.jpg](../../../img/wiki/create_chest_chest.jpg)

</div>

</div>

</details>