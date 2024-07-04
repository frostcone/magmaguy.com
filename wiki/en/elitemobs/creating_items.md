[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Creating Custom Items

## What are Custom Items?

Custom Items are items as defined by EliteMobs through configuration files. You can customize several aspects about these items, such as the level of the item, the enchantments, name, lore, texture and more!

## Webapp

You can easily and quickly create Custom Loot [here](https://magmaguy.com/webapp/webapp.html)!

## Before you begin

### Where do Custom Items go?

Custom item files go into the configuration folder `~/plugins/EliteMobs/customitems`

It is possible to create subfolders, such as `~/plugins/EliteMobs/customitems/myitems`. THis is recommended to keep things organized.

Files are stored in the `.yml` file format and [Notepad++](https://notepad-plus-plus.org/) is the recommended file editing software for configuration work. One file defines one boss, though it is possible to spawn the same boss several times and even set several spawn locations for the same boss file.

It is possible to use the [webapp](https://magmaguy.com/webapp/webapp.html) to quickly and easily create custom bosses and more.

<div align="center">

### Smallest possible configuration

**Please note that the smallest possible configuration file for a Custom Item is:**

```yml
```

Note how this is just an empty file. This will default to using a wooden sword called "Default name". **Everything in this page is optional!**

### Example item

Let's take a look at an example of what an item file looks like.

<details> 
<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
material: WOODEN_AXE
name: '&4Test item'
lore:
- This is a cool item
- It has cool lore
enchantments:
- DAMAGE_ALL,4
- FLAMETHROWER,1
potionEffects:
- FAST_DIGGING,0,self,onHit
- POISON,0,target,onHit
- GLOWING,0,self,continuous
dropWeight: dynamic
scalability: scalable
itemType: custom
```

</div>

</details>

</div>

##  Custom Item settings

The following is a list of all the things you can configure for custom items:

<div align="center">

***

### isEnabled

Sets if the item is enabled. Does not affect items that have already been generated.

| Key | Values | Default |
|-|:-:|-|
| `isEnabled` | `true` / `false` | `true` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### material

Sets the item material.

| Key | Values | Default |
|-|:-:|-|
| `material` | [Pick from this list!](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) | `WOODEN_SWORD` |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
```

</div>

</details>


***

### level

Sets the item level.

| Key | Values | Default |
|-|:-:|-|
| `level` | [Integer](#integer) | `0` |

Note that this setting isn't relevant if you set the item [`scalability`](#scalability) to be `scalable`. If you set it to be `limited, this will be the highest possible level of the item.

Also, materials have a minimum level. Iron materials are level 6, diamond materials are level 7. You can't force items to be lower level than the material's level.

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
level: 100
```

</div>

</details>


***

### name

Sets the display name of the item.

| Key | Values | Default |
|-|:-:|-|
| `material` | [String](#string) with [color codes](#color-codes) | "Default name" |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
name: "&2Cool item"
```

<div align="center">

![create_item_name.jpg](../../../img/wiki/create_item_name.jpg)

</div>

</div>

</details>

***

### lore

Sets the lore of the item.

| Key | Values | Default |
|-|:-:|-|
| `lore` | [List](#list) with [color codes](#color-codes) | none |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
lore:
- "&2This is the coolest sword"
- "&2of all time!"
```

<div align="center">

![create_item_lore.jpg](../../../img/wiki/create_item_lore.jpg)

</div>

</div>

</details>

***

### enchantments

Sets the enchantments on the item.

| Key |                                                                                                       Values                                                                                                        | Default |
|-|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-|
| `enchantments` | [List](#list) with [Minecraft enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) or [EliteMobs Custom Enchantments]($language$/elitemobs/custom_enchantments_list.md) | none |

Note that these entries follow the format `enchantmentName:enchantmentLevel`. Check the example below!

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
enchantments: 
- "DAMAGE_UNDEAD,8"
- "DURABILITY,4"
- "DAMAGE_ALL,7"
- "LOUD_STRIKES,3"
```

<div align="center">

![create_item_enchantments.jpg](../../../img/wiki/create_item_enchantments.jpg)

</div>

</div>

</details>

Also note that enchantments like sharpness become elite sharpness by default if the level start going over vanilla Minecraft limits.

***

### potionEffects

Sets the potion effects the item will have. These can be applied to the player or to an entity damaged by the player.

| Key | Values | Default |
|-|:-:|-|
| `potionEffects` | [List](#list) with [Minecraft potion effects](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionEffectType.html)| none |

Furthermore, potion effects use a specific format that allows admins to select who gets affected and when:

| Setting | Description | Values | Default |
|-|:-:|:-:|-|
| Potion effect level | Sets the level of the potion effect. **Potion effects start at level 0**!  | [Integer](#integer) | none |
| Affected entity | Sets who gets affected by the potion effect.  | `self` (the player) / `target` (entity that gets hit) | none |
| Application method | Sets when the potion effect gets applied.  | `onHit` / `continuous` (constantly reapplies) | none |

The format for potion effects is `potionEffectName,potionEffectLevel,affectedEntity,applicationMethod`. Check the example below!

EliteMobs also features custom items that function as charms. These items do nothing else but provide potion effects to the player when the item is being held or is equipped in a slot.

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
potionEffects: 
- "POISON,0,target,onHit"
- "HEAL,1,self,onHit"
- "NIGHT_VISION,0,self,continuous"
```

<div align="center">

![create_item_potion_effects.jpg](../../../img/wiki/create_item_potion_effects.jpg)

</div>

</div>

With this set of potion effects, the following things will happen:

On hit, the poison potion effect (level 1) will be applied to the entity that got hit by the player. Additionally, the player will be affected by a level 2 instant heal potion effect.

Continuously, the player will be given night vision. This means that the player will have night vision for as long as they are wearing or holding the item.

</details>

***

### scalability

Sets how the level of the item grows with the level of the boss that drops it.

| Key | Values | Default |
|-|:-:|-|
| `scalability` | `fixed`, `limited` or `scalable`. Check below! | scalable |

Check this list to understand what the different options do!

| Setting | Description |
|-|:-:|
| `fixed` | The item level will always be the level set in the configuration file. |
| `limited` | The max item level will be limited by the one set in the configuration file or the level of the boss, whichever is lowest. |
| `scalable` | The level of the item will be entirely based on the level of the boss that drops it. |

Note that items with a dropWeight will always have a `fixed` scalability.

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
scalability: "scalable"
```

</div>

</details>

***

### itemType

Sets where you can obtain the item from.

| Key | Values | Default |
|-|:-:|-|
| `itemType` | `custom` or `unique`. Check below! | `custom` |

There are two item types:

| Setting | Description |
|-|:-:|
| `custom` | The item will be able to drop from any EliteMobs mob able to drop loot, and will be in the custom shop. `
| `unique` | The item will not be dropped by any boss and will not be in the custom shop. The only way to obtain it is by configuring a Custom Boss to drop it through its `uniqueLootTable`! |

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
itemType: "unique"
```

</div>

</details>

***

### dropWeight

Sets the loot table the item will fit into.

| Key |                  Values                  | Default |
|-|:----------------------------------------:|-|
| `dropWeight` | `dynamic` or an [Double](#double) value. | `dynamic` |

EliteMobs has 5 different loot tables for custom items, excluding the ones configured directly like the `uniqueLootList` on Custom Bosses.

These are as follows:

| Loot table | Description | Default weight |
|-|:-:|:-:|
| Procedurally generated items | Items that are randomly generated based on server configuration files | `90.0` |
| Weighed items | Items that have a weight other than `dynamic` | `1.0` |
| Fixed items | Items that have a fixed scalability | `10.0` |
| Limited items | Items that have limited scalability | `3.0` |
| Scalable items | Items that are scalable | `6.0` |

When a boss dies, one item from these tables is selected based on the ItemSettings.yml configuration file. The defaults for the weights are listed above in `Default weight`. The higher the weight, the more likely an item is to drop.

`Weighed items` have a small `Default weight`, meaning they will not drop very often. Items with a `dropWeight` that is not `dynamic` are meant to be rare and are only used in the defaults for the charms bosses drop - items not used directly for combat, but rather for buffing players with potion effects.

The `dropWeight` you set here sets the chance of a specific `Weighed item` dropping from the list of `Weighed items`. It does not increase the chance of `Weighed item`s dropping.

**If you are confused and just want to make weapons and armor, skip this setting as it correctly defaults to be `dynamic`.**

`Weighed item`s usually have a weight of 1.0.

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
dropWeight: "dynamic"
```

</div>

</details>


***

### customModelID

Sets the texture of the item. Requires using a valid texture from the resource pack!

| Key | Values | Default |
|-|:-:|-|
| `customModelID` | [Integer](#integer) | none |

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
material: DIAMOND_SWORD
customModelID: 1
```

</div>

This will use the custom texture 1 of diamonds swords from the resource pack the player is using. It is recommended you set your server up to give players resource packs on login if you want to use this feature correctly.

</details>

***

### permission

Sets the permission required in order to obtain the item.

| Key | Values | Default |
|-|:-:|-|
| `permission` | [String](#string) | none |

You will need a permission management plugin to give players permissions. This will only work correctly if you have not disabled the soulbind enchantment.

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
permission: "elitemobs.cool.permission"
```

</div>

With this setup, only players with the permission `elitemobs.cool.permission` will be able to obtain this item.

</details>

***

### soulbound

Sets if the item should be soulbound on drop.

| Key |       Values        | Default |
|-|:-------------------:|---------|
| `soulbound` | [Boolean](#boolean) | `true`  |

<details>

<summary><b>Example</b></summary>

<div align="left">

```yml
soulbound: true
```

</div>

</details>


</div>
