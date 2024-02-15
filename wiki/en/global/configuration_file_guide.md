# Getting started

This page helps you understand how to correctly edit a .yml (.yaml) file. All of my plugins use .yml configuration files, which will reset themselves or stop working if you edit them incorrectly.

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

In this case, the damage multiplier would be multiplied by 1, meaning that there is no change from the default value. If the `Multiplier` was `2.0`, the value would be multiplied by `2.0`. If it was `0.5`, it would be multiplied by `0.5`. 

For those not good with fractions, multiplying by `0.5` is the same as dividing by 2. `Multiplier` values should always be larger than 0 (`0.0001` is valid) and don't tend to have a higher ceiling.

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

</div>

<div id="config_string_list">

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

| Code        | Color          | Example                                                |
|-------------|----------------|--------------------------------------------------------|
| **&4**      | Dark red       | <div style="color: darkred;">&4Dark red example.</div> |
| **&c**      | Red            | <div style="color: red;">&cRed example.</div>          |
| **&6**      | Orange         | <div style="color: orange;">&6Orange example.</div>    |
| **&e**      | Yellow         | <div style="color: yellow;">&eYellow example.</div>    |
| **&2**      | Dark green     | <div style="color: darkgreen;">&2Dark green example.</div> |
| **&a**      | Green          | <div style="color: green;">&aGreen example.</div>      |
| **&b**      | Aqua           | <div style="color: aqua;">&bAqua example.</div>        |
| **&3**      | Dark aqua      | <div style="color: cadetblue;">&3Dark aqua example.</div> |
| **&1**      | Dark blue      | <div style="color: darkblue;">&1Dark blue example.</div> |
| **&9**      | Blue           | <div style="color: blue;">&9Blue example.</div>        |
| **&d**      | Light purple   | <div style="color: hotpink;">&dLight purple example.</div> |
| **&5**      | Dark purple    | <div style="color: purple;">&5Dark purple example.</div> |
| **&f**      | White          | <div style="color: white;">&fWhite example.</div>      |
| **&7**      | Gray           | <div style="color: darkgray;">&7Gray example.</div>    |
| **&8**      | Dark gray      | <div style="color: gray;">&8Dark gray example.</div>   |
| **&0**      | Black          | <div style="color: black;">&0Black example.</div>      |
| **&r**      | Reset color    | &rReset example.                                       |
| **&i**      | Bold           | **&iBold example.**                                    |
| **&o**      | Italic         | _&oItalic example._                                    |
| **&n**      | Underline      | <u>&nUnderline example.</u>                            |
| **&m**      | Strikethrough  | ~~&mStrikethrough example.~~                           |
| **&k**      | Random         | &k<div class="magic-text"></div> &fexample.            |


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

<div id="config_trimming_worlds">

# Trimming Worlds

Sometimes, you may need to reduce the size of your Minecraft world to make it lighter and, consequently, easier to distribute. This can be achieved through the use of the [WorldBorder plugin](https://www.spigotmc.org/resources/worldborder-1-15.80466/). Despite the plugin being listed as only supporting MineCraft up to version 1.19, it functions seamlessly on the latest MineCraft version as of January 25, 2024.

<details>
<summary>Tip</summary>
If you are doing this for the first time it might be a good idea to create a backup of your world just in case something goes wrong.
</details>

Once the plugin is installed, navigate to the middle of the world or the specific area you wish to trim. Then, execute the command `/wb set x`, where `x` represents the approximate radius size you want for your area.

<details>
<summary>Tip</summary>
If <code>/wb</code> is not working for you, try <code>/worldborder:wb</code>.
</details>

After executing this command, fly to the edges of your world to verify that the world border has been properly set and covers the intended size. You will recognize reaching the world border edge when you are pushed back, accompanied by a message in the chat.

![trim_pic_1.jpg](trim_pic_1.jpg)

In the image above, we aim to trim the world around the purple blocks, leaving only a few chunks around them. To achieve this, we stand in the middle of the purple area on the red squares and execute `/wb set 50`, setting the world border just beyond the purple area.

Next, we use the `/wb trim [freq] [pad]` command, with the frequency set to 200 and the pad to 20. The pad determines how many chunks should be left around the world border (the purple area), and the frequency determines how many chunks should be processed per second. After running `/wb trim 200 20`, we will be prompted to confirm by executing `/wb trim confirm`. We confirm the action, and after some time, our world will be trimmed, reducing its size and making it more convenient for distribution.

You can now remove the world border using `/wb clear all` or just leave it if you wish.

## Trimming the world folder

There are several files and folders located in your world folder that we can discard since the plugins do not use all of them. This will cut down the size of your world and make it easier to distribute.

For a NORMAL world Environment:

To prepare your world, keep the following files and folders:

1. **region** folder
2. **raids.dat** from within the **data** folder (ensure it's placed inside the **data** folder when copying)
3. **level.dat** file

You can safely delete all other files and folders located in the world folder. This will set up your world correctly for the NORMAL environment.

For NETHER and THE_END world Environments:

To prepare your world, keep the following files and folders:

1. **region** folder inside the **DIM-1** folder (ensure it's placed inside the **DIM-1** folder when copying)
2. **raids.dat** from within the **data** folder (ensure it's placed inside the **data** folder when copying)
3. **level.dat** file

You can safely delete all other files and folders located in the world folder. This will set up your world correctly for the NETHER and THE_END environments.