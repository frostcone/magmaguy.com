# Getting started

This page helps you understand how to correctly edit a .yml file. All of my plugins use .yml configuration files, which will reset themselves or stop working if you edit them incorrectly.

Below, you will find every configuration entry type and how they should be formatted if you are modifying any values!

# `How to edit .yml files`

Files are stored in the `.yml` file format and [Notepad++](https://notepad-plus-plus.org/) is the recommended file editing software for configuration work. Of course you can use any other text editor of your choice.

# `Boolean`

`Boolean` values are `true` or `false`. This is what they look like:

```yml
value1: true
value2: false
```

`Boolean`s only ever accept either `true` or `false` values. They are usually used to turn specific features on or off.


# `String`

`String` values are usually just normal text. It is highly recommended that you create `String` values between quotes, following this format:

```yml
value: "String"
```

While this is not always mandatory, it is mandatory for any string that contains color codes, especially if the first character starts with a color code. ***Color codes follow the in-game color code format*** meaning that `"&aTest`" would result in green text. The availability of colored text varies depending on the configuration setting. Check [this page](https://minecraft.gamepedia.com/Formatting_codes) for color codes.

<details>
<summary>Why?</summary>
Configuration strings can accept special characters such as `&`. If these special characters occupy the first character, such as in `value: "&aString"`, if the `String` is not between quotes the value will be wiped and the config option will be reset to its defaults. This is a limitation of the configuration system that Spigot uses.
</details>

# `Serialized Location`

`Serialized Location` is a specific type of String which looks like this:

```yml
location: world,1.0,2.0,3.0,4.0,5.0
```

These are used to store and configure locations. It follows this format: `worldName,X,Y,Z,PITCH,YAW`. Pitch and yaw just determine the direction that the player/mob is looking at, and is implemented the same way Minecraft locations are.

# `Multiplier`

`Multiplier` values multiply plugin values by that number. These values should ***never*** be between quotes. Here's an example:

```yml
damageMultiplier: 1.0
```

In this case, the damage multiplier would be multiplied by 1, meaning that there is no change from the default value. If the `Multiplier` was `2.0`, the value would be multiplied by `2.0`. If it was `0.5`, it would be multiplied by `0.5`. For those not good with fractions, multiplying by `0.5` is the same as dividing by 2. `Multiplier` values should always be larger than 0 (`0.0001` is valid) and don't tend to have a higher ceiling.

### `Integer`

`Integer` values are just whole numbers. Example:

```yml
value: 10
```

The main thing about `Integer` values they must be whole numbers. This means that `10.1` is not valid.

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

# Map List

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