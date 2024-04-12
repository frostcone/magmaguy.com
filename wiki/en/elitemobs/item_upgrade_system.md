As of EliteMobs 7.3.0, it is possible for players to interact with Elite Items in a number of unique ways. This page is meant to help players and admins figure out how the systems work, and later explain the balance of the system for admins.


***

# Unbinding Items

If you have an item unbind scroll, you are able to use the Unbinder NPC to combine 1 scroll with 1 item in order to unbind it.

***Note: as of writing this, there is no way for players to get the scroll without being given or adding it to as specific boss. The scroll will drop from the Ender Dragon fight which will be released this month.***

The scroll can only be used once. Once unbound, items can be sold or given to other players, or be used after a prestige.

***

# Scrapping Items

Elite Items can be scrapped at the Scrapper NPC. When scrapping items depending on the level of the item you will get the following scrap:

- Level 0-50: Tiny Scrap.
- Level 50-100: Small Scrap.
- Level 100-150: Medium Scrap.
- Level 150-200: Huge Scrap.

Scrap is the basis for the rest of the Item System.

***

# Repairing Elite Items

Elite items can be repaired at the Repairman NPC using scrap. The extent of damage to your item determines the quantity and size of scrap required to fix it.

***

# Enchanting Elite Items

Before we proceed to describe how to enchant items, it is advisable to familiarize yourself with the items required for enchanting and understand their functions.

**Elite Item**
</br>An elite item encompasses any loot available in the EliteMobs shops, dropped by Elite Mobs, or received as a reward for completing a quest, among other sources.

**Enchanted Books**
</br>Enchanted books are typically dropped by Elite Mobs or bestowed upon players as rewards in Arenas or Quests. They contain enchantments that players can transfer to their desired items.

**Lucky Tickets**
</br>Lucky tickets, usually obtained from Elite Mobs or as rewards in Arenas or Quests, enable players to double their chances of success when enchanting items.

The players can access the enchantment menu by visiting the Enchanter NPC in the [Adventurer's Guild]($language$/elitemobs/adventurers_guild_world.md) or by using the `/em` menu.
 
With both an Elite Item and an Enchanted Book, players can attempt to add the enchantment stored in the book to their item. Each attempt will cost the players some Elite Coins. They can also double their chances by using a Lucky Ticket if they have one.

To begin the enchantment the players would place one Elite Item, one Enchanted Book and one Lucky Ticket (If they have one) in the Enchantment window and then try to enchant their item. After that they would be met with one of the following results: 

- **Success:** The enchantment is successfully added to the item.
- **Failure:** Unsuccessful attempt, resulting in the loss of the Enchanted Book and Elite Coins.
- **Critical Failure:** A more severe failure, leading to the loss of the Enchanted Book, Elite Coins, and the Elite Item itself.
- **Challenge:** Engage in a Boss Battle with a 10% chance of critical failure upon losing. The item is enchanted if the players win.

<details>

<summary><b>Visual Example</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/enchant_example.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</details>

***

<details>
  <summary>MagmaGuy's Video explaining some of the systems.</summary>

  <div style="text-align: center;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MtfeS6fq0Pw" frameborder="0" allowfullscreen></iframe>
  </div>

</details>

## Make your own Enchanted Books

Here is a short guide that explains how you can make your own Enchanted Books.

<div align="center">

***

### isEnabled

Sets if the item is enabled.

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
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

### name

Sets the name of item. Supports [Color Codes](#color_codes).

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `name` | [String](#string) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
name: '&aElite Custom Enchanted Book'
```

<div align="center">

![create_book_name.jpg](../../../img/wiki/create_book_name.jpg)

</div>

</div>

</details>

***

### lore

Sets the lore of the item. Supports [Color Codes](#color_codes).

| Key         |           Values            | Default |
|-------------|:---------------------------:|:-------:|
| `lore` | [String List](#string_list) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
lore:
- '&2Use this custom book to'
- '&2enchant items at the enchanter!'
```

<div align="center">

![create_book_lore.jpg](../../../img/wiki/create_book_lore.jpg)

</div>

</div>

</details>

***

### material

Sets what MineCraft material the item should be.

| Key         |      Values       | Default |
|-------------|:-----------------:|:-------:|
| `material` | [Material](#material) | `BOOK`  |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
material: BOOK
```

<div align="center">

![create_book_material.jpg](../../../img/wiki/create_book_material.jpg)

</div>

</div>

</details>

***

### enchantments

Sets which enchantments the item should hold.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `enchantments` | [MineCraft Enchantments](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html) or [EliteMobs Enchantments]($language$/elitemobs/custom_enchantments_list.md) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
enchantments:
- EARTHQUAKE,1
- LUCK,1
```

<div align="center">

![create_book_enchantments.jpg](../../../img/wiki/create_book_enchantments.jpg)

</div>

</div>

</details>

***

### itemType

Sets where you can obtain the item from. You can set this to `custom` if you want your book to be dropped by random elites and sold in shops. 

Otherwise you can set it to `unique` to have it only drop from configured loot tables.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
| `itemType` | [Values]($language$/elitemobs/creating_items.md&section=itemtype) |  none   |

<details> 

<summary><b>Example</b></summary>

<div align="left">

```yml
itemType: custom
```

</div>

</details>

***

### soulbound

Sets if them can be traded with other players.

| Key         |    Values    | Default |
|-------------|:------------:|:-------:|
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

## Enchanted Book Example

<div align="center">

<details> 

<summary><b>Enchanted Book Config Example</b></summary>

<div align="left">

```yml
isEnabled: true
material: BOOK
name: '&5Excellent Mining Enchanted Book'
lore:
- '&2Used to enchant items at the enchanter!'
enchantments:
- MENDING,1
- DRILLING,1
itemType: UNIQUE
soulbound: false
```

As you can see making your Enchanted Books is not that complicated. Most of the settings are regular settings you would use when creating an [item]($language$/elitemobs/creating_items.md).

Except that of course here our main focus would be the `enchantments` section. Our example book has one MineCraft enchantment `MENDING` and one EliteMobs enchantment `DRILLING`.

This would make our example book an excellent book you would want to use on a pickaxe.

</div>

</details>

</div>