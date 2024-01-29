# What is a treasure file?

Treasure files are what determine the loot tables for BetterStructures chests. They are usually assigned
to [generators]($language$/betterstructures/creating_generators.md%treasurefilename) but they can also be set at the
level of an [individual build configuration]($language$/betterstructures/creating_structures.md%treasurefile).

These loot tables are quite powerful, but also require knowledge of some basic statistics concepts to understand.

<details>
<summary>
Read about those concepts here, the rest of the page assumes you understand them!
</summary>

***Weighted probability***

BetterStructures and EliteMobs frequently use the concept of weighted probability. This is to solve a simple problem: how can you set the chance of picking one item from a list of potentially infinite items?

Weighted probability solves this issue by giving each item a weight. If you have 100 items and each has a weight of 1, then they all have an equal chance - 1% - of getting picked. If you add one more item, bringing the total to 101 items, you and give that last item a chance of 1, all items still have the same chance - ~0.99% - of getting picked. If you give the last item a weight of 2, the chance of it getting picked increases - the new total weight is 102, the last element has a weight of 2 and 100/102 = ~0.98% so 0.98%+0.98% = 1.96% chance of getting picked. If you give the last item a weight of 100, the new weight is 200, and since half of that weight is your new item, you new item has a 50% chance of getting picked.

As you can see, this is good to use when you might have lists of hundreds of things to randomize from.

***Gaussian distribution***

A gaussian distribution is a bell-shaped mathematical function.

<img src="http://sfonline.barnard.edu/wp-content/uploads/2015/12/gaussian-distribution.jpg">

You might be wondering how this is relevant to the loot system. One thing BetterStructures has to decide when setting loot in chests is just how much loot appears in those chests. The amount should be consistently around a specific number, but ideally not so predictable that opening a chest might become less exciting.

To achieve this semi-random effect, gaussian distribution is used to randomize *how many* items are picked. Once this amount is picked, the *weighted probability* picks one element from the rarity table at random and taking the weights into account.

So how does the gaussian distribution work?

Fortunately, you don't have to worry about how the math behind it works, and can instead focus on the two settings that modify it: mean and standard deviation.

*Mean*

To put it simply, `mean` sets the middle of the gaussian curve, which means it sets the most likely amount of items that will appear in a chest. Essentially, if you want your chests to usually have 5 items, set your mean to 5.

*Standard deviation*

Imagine the average number of items in a chest is 5. The `standard deviation` helps decide how much this number can change from one chest to another.

Small `Standard Deviation` (e.g., 1): This means most chests will have items very close to the average, like 4, 5, or 6 items. It's a more predictable experience. For example, if a chest has a standard deviation of 1, you can expect almost all chests to have between 4 to 6 items.

Medium `Standard Deviation` (e.g., 2): Here, there's more variety. Chests might have 3 to 7 items. While 5 items are still common, it's not unusual to find chests with a bit more or less. So, with a standard deviation of 2, you might occasionally find a chest with only 3 items, or if you're lucky, one with 7 items.

Large `Standard Deviation` (e.g., 3 or more): Now things get really surprising! Chests could have as few as 2 items or as many as 8 or more. It means you might find a chest with just a couple of items, but there's also a chance of finding a chest loaded with goodies. For instance, with a standard deviation of 3, a chest could have anywhere from 2 to 8 items, making each chest opening an exciting gamble.

***The default mean is 4, and the default standard deviation is 3.***

</details>

***

# Special format

Treasure files have a special format that looks like this:

```yml
isEnabled: true
mean: 4.0
standardDeviation: 3.0
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
  epic:
    weight: 10
    items:
    - amount: 2-10
      material: DIAMOND
      weight: 1.0
    - amount: 1-1
      material: DIAMOND_AXE
      weight: 6.0
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2

```

*Note: this is a very trimmed down version of the file, the actual file is 2599 lines long as it covers far more loot and every possible enchantment.*

# isEnabled

| Key |       Values        | Default |
|-|:-------------------:|-|
| `isEnabled` | [Boolean](#boolean) | `true` |

***

# mean

| Key    |      Values       | Default |
|--------|:-----------------:|---------|
| `mean` | [Double](#double) | `4`     |

Set the `mean`. Read the details about that [here](#what-is-a-treasure-file).

***

# standardDeviation

| Key                 |      Values       | Default |
|---------------------|:-----------------:|---------|
| `standardDeviation` | [Double](#double) | `3`     |

Set the `standardDeviation`. Read the details about that [here](#what-is-a-treasure-file).

***

# items

This is where it gets a tricky, as many of the options can be set by admins. Let's zoom in on the configuration file example from earlier.

```yml
items:
  common:
    weight: 60
    items:
    - amount: 1-1
      material: STONE_PICKAXE
      procedurallyGenerateEnchantments: true
      weight: 1.0
    - amount: 1-1
      material: STONE_SHOVEL
      procedurallyGenerateEnchantments: true
      weight: 1.0
  rare:
    weight: 30
    items:
    - amount: 1-1
      material: ANVIL
      weight: 6.0
    - amount: 1-6
      material: BEETROOT
      weight: 6.0
```

Here, you can see that under the `items` configuration key we have a map with `common` and `rare`. These are `rarities`!
***

## rarities

Rarities do not have a fixed name. You can add or remove them, and customize them as much as you want, as long as you use the same format.

Note that what makes these rarity tables more or less rare is the `weight` of the loot table!

By default:
- `common` has a default `weight` of 60
- `rare` has a default `weight` of 30
- `epic` has a default `weight` of 10

Making common items 6x more likely to drop than epic items. You can read more about [`weight`s here](#what-is-a-treasure-file)!

Aside from the weight, each rarity table has its own list of `items`.

***

### rarity items

Rarity items are a [map list]($language$/global/configuration_file_guide.md%map_list) which lists all the items that the rarity table has.

There items have the following settings:

| Key                                |           Values            | Default  |
|------------------------------------|:---------------------------:|----------|
| `amount`                           | min-max [Integer](#integer) | variable |
| `material`                         |    [Material](#Material)    | variable |
| `procedurallyGenerateEnchantments` |     [Boolean](#boolean)     | variable |
| `weight`                           |      [Double](#double)      | variable |

***

#### amount

***

Sets the amount to drop. This is expressed as a range as follows `amount: MIN-MAX`. As an example, to drop between 1 to 5
items: `amount: 1-5`.

#### material

Sets the material using the [Spigot API names](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) of the
item to potentially drop.

***

##### Special case - serialized

When using the lootify command, instead of a material lootify will provide a `serialized` setting. This is automatically generated by the plugin and should not be manually generated. Is it in a format that is no human-readable.

***

#### weight

Sets the weight for the weighted chance. More about that [here](#what-is-a-treasure-file).

***

#### procedurallyGenerateItems

Sets whether the item should be procedurally generated based on the configuration settings if `procedurallyGeneratedItemSettings`. Note that based on the settings this might result in an item generating without enchantments regardless.


# procedurallyGeneratedItemSettings

Let's take another look at our configuration file example:

```yml
procedurallyGeneratedItemSettings:
  golden_sword:
    bane_of_arthropods:
      minLevel: 1
      maxLevel: 5
      chance: 0.2
    looting:
      minLevel: 1
      maxLevel: 3
      chance: 0.2
```

As you can see, this file lists material types, followed by enchantments and then followed by minimum and maximum levels and a chance.

Note that you can not add custom materials from other plugins in these settings, and you are probably not able to add custom enchantments from other plugins unless their author explicitly say they have made their system compatible.

As for the enchantment settings:

| Key        |       Values        | Default  |
|------------|:-------------------:|----------|
| `minLevel` | [Integer](#integer) | variable |
| `maxLevel` | [Integer](#integer) | variable |
| `chance`   |  [Chance](#chance)  | variable |

***

## minLevel

Sets the minimum enchantment level.

***

## maxLevel

Sets the maximum enchantment level.

***

## chance

Sets the chance of the enchantment happening. This is not using weighted probability, just a normal dice roll.