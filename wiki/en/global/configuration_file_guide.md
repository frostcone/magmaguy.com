# Getting started

This page helps you understand how to correctly edit a .yml file. All of my plugins use .yml configuration files, which will reset themselves or stop working if you edit them incorrectly.

Below, you will find every configuration entry type and how they should be formatted if you are modifying any values!

# How to edit .yml files

Files are stored in the `.yml` file format and [Notepad++](https://notepad-plus-plus.org/) is the recommended file editing software for configuration work. Of course you can use any other text editor of your choice.

<div id="config_boolean">

# `Boolean`

`Boolean` values are `true` or `false`. This is what they look like:

```yml
value1: true
value2: false
```

`Boolean`s only ever accept either `true` or `false` values. They are usually used to turn specific features on or off.

</div>

<div id="config_string">

# `String`

`String` values are usually just normal text. It is highly recommended that you create `String` values between quotes, following this format:

```yml
value: "String"
```

While this is not always mandatory, it is mandatory for any string that contains color codes, especially if the first character starts with a [color code](#color_codes). ***Color codes follow the in-game color code format*** meaning that `"&aTest`" would result in green text. The availability of colored text varies depending on the configuration setting. Check [this page](https://minecraft.gamepedia.com/Formatting_codes) for color codes.

</div>

<details>

<summary>Why?</summary>
Configuration strings can accept special characters such as `&`. If these special characters occupy the first character, such as in `value: "&aString"`, if the `String` is not between quotes the value will be wiped and the config option will be reset to its defaults. This is a limitation of the configuration system that Spigot uses.
</details>

<div id="config_serialized_location">

# `Serialized Location`

`Serialized Location` is a specific type of String which looks like this:

```yml
location: world,1.0,2.0,3.0,4.0,5.0
```

These are used to store and configure locations. It follows this format: `worldName,X,Y,Z,PITCH,YAW`. Pitch and yaw just determine the direction that the player is looking at, and is implemented the same way Minecraft locations are.

</div>

<div id="config_multiplier">

# `Multiplier`

`Multiplier` values multiply plugin values by that number. These values should ***never*** be between quotes. Here's an example:

```yml
damageMultiplier: 1.0
```

In this case, the damage multiplier would be multiplied by 1, meaning that there is no change from the default value. If the `Multiplier` was `2.0`, the value would be multiplied by `2.0`. If it was `0.5`, it would be multiplied by `0.5`. For those not good with fractions, multiplying by `0.5` is the same as dividing by 2. `Multiplier` values should always be larger than 0 (`0.0001` is valid) and don't tend to have a higher ceiling.

</div>

<div id="config_integer">

# `Integer`

`Integer` values are just whole numbers. Example:

```yml
value: 10
```

The main thing about `Integer` values they must be whole numbers. This means that `10.1` is not valid.

</div>

<div id="config_double">

# `Double`

`Double`s are irrational numbers. Example:

```yml
value: 10.01
```

`Double`s can also happen to be whole numbers like integers, like `10.0` or even represented as `10`.

# `String List`
`String List`s are lists of `String` values. These tend to be the hardest values to configure, as they require a very specific config format:

```yml
valuesList:
- "value,1"
- "value,2"
- "value,3"
```

Like with `String`s, it is recommended to keep the values between quotes. Each `String List` has its own format, so you'll have to find the specific format the one you're editing requires; however, globally, that is what the overall format should look like.

</div>

<div id="config_map_list">

# `Map List`

'Map List' are lists of 'Map' value. These are only used in elite scripting, and require this configuration format:

```yml
parentMap:
- Map1:
  key: value
- Map2:
  key: value
  keyForList:
    - "value1"
    - "value2"
```

As you can see, Map Lists can contain any kind of format inside them, but if you are using them in scripting you will need to refer to the documentation to see which are the valid keys and values for the different maps.

</div>

<div id="config_color_codes">

# `Color Codes`

You can also assign colors or make text bold using the following modifiers:

| Color                                                  | Code                                                       | Table                                                    |
|--------------------------------------------------------|------------------------------------------------------------|----------------------------------------------------------|
| **&4** for dark red text.                              | **&c** for red text.                                       | **&6** for orange text.                                  |
| <div style="color: darkred;">&4Dark red example.</div> | <div style="color: red;">&cRed example.</div>              | <div style="color: orange;">&6Orange example.</div>      |
| **&e** for yellow text.                                | **&2** for dark green text.                                | **&a** for green text.                                   |
| <div style="color: yellow;">&eYellow example.</div>    | <div style="color: darkgreen;">&2Dark green example.</div> | <div style="color: green;">&aGreen example.</div>        |
| **&b** for aqua text.                                  | **&3** for dark aqua text.                                 | **&1** for dark blue text.                               |
| <div style="color: aqua;">&bAqua example.</div>        | <div style="color: cadetblue;">&3Dark aqua example.</div>  | <div style="color: darkblue;">&1Dark aqua example.</div> |
| **&9** for blue text.                                  | **&d** for light purple text.                              | **&5** for dark purple text.                             |
| <div style="color: blue;">&9Blue example.</div>        | <div style="color: hotpink;">&dLight purple example.</div> | <div style="color: purple;">&5Dark purple example.</div> |
| **&f** for white text.                                 | **&7** for gray text.                                      | **&8** for dark gray text.                               |
| <div style="color: white;">&fWhite example.</div>      | <div style="color: gray;">&7Gray example.</div>            | <div style="color: darkgray;">&8Dark gray example.</div> |
| **&0** for black text.                                 | **&r** to reset color to default.                          | **&i** for bold text.                                    |
| <div style="color: black;">&0Black example.</div>      | &rReset example.                                           | **&iBold example.**                                      |
| **&o** for italic text.                                | **&n** for underline text.                                 | **&m** for strikethrough text.                           |
| _&oItalic example._                                    | <u> &nUnderline example. </u>                              | ~~&mStrikethrough example.~~                             |
|                                                        | **&k** for random text.                                    |                                                          |
|                                                        | &k<div class="magic-text"></div> example.                  |                                                          |

As you can see in the examples, the modifiers follow the regular minecraft syntax except that the § is replaced with a & when used with EliteMobs. You can use this to modify most EliteMobs text such as, mob names, quest text, dungeon names etc.

Take note that when working properly the modifiers themselves will not show in your text. They are only shown here for demonstration purposes.

It is also possible to combine colors and other text modifiers. For example, you can do:

*<div style="color: green;">&a&oTo get green text that is italic.</div>*

If we wanted our custom mob to have a nice fancy colorful name we would do the following:

```yml
name: $normalBossLevel &aScary &dDragon
```

</div>

<div id="config_material">

# `Material`

`Material` values are just Materials that you can find in MineCraft, such as `IRON_CHESTPLATE`. For a list of valid `Material`s see this [page](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

```yml
helmet: IRON_HELMET
```

`Material`s are used as values in several settings such as equipment for mobs, loot drops, quest rewards etc.

</div>

<div id="config_filename">

# `Filename`

`Filename` values are just .yml config files that are formatted to be used with MagmaGuy's plugins. These could be anything from items to quests.

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

</div>