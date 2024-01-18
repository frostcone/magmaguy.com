# Custom Loot Table

Universal loot format. Used by EliteMobs in several different locations.

Please note that this is the latest format and the one that is recommended to use, but some alternative older formats exist. 

Make sure to start your loot tables with `uniqueLootList:` before adding any settings otherwise the .yml config will error.

### Dropping elite items:

| Key | Details | Values                | Default |
| --- | :-: |-----------------------| --- |
| `filename` | Sets the file name of the Custom Item to use. | [Filename](#filename) | none |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
```

</div>

</details>

This will make the mob drop 1 of *MagmaGuy's Toothpick* with a 100% drop chance.

### General settings:

| Key | Details | Values              | Default |
| --- | :-: |---------------------| --- |
| `chance` | Sets the chance of the loot dropping. | [Double](#double)   | `1.0` |
| `amount` | Sets the amount of this loot entry to drop | [Integer](#integer) | `1` |
| `ignorePlayerLevel` | Makes the loot drop ignore the player loot limiter | [Boolean](#boolean) | `false` |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    amount: 10
    ignorePlayerLevel: true
```

</div>

</details>

This will make the mob drop 10 of *MagmaGuy's Toothpick* with a 50% drop chance while ignoring the player level.

### Dropping elite coins:

| Key | Details | Values              | Default |
| --- | :-: |---------------------| --- |
| `currencyAmount` | Sets the amount of coins that will be dropped. | [Integer](#integer) | none |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
uniqueLootList:
  - currencyAmount: 344
    chance: 0.5
```
This will make the mob drop 344 *Elite Coins* with a 50% drop chance.

</div>

</details>

### Dropping vanilla items:

| Key | Details | Values                | Default |
| --- | :-: |-----------------------| --- |
| `material` | Sets the material of the item dropped. | [Material](#material) | none |

### Arenas:

| Key | Details | Values              | Default |
| --- | :-: |---------------------| --- |
| `wave` | Sets the wave at which this loot entry will drop. Only for use in arenas. | [Integer](#integer) | none |
| `level` | Sets the level of the loot drop. Only for use in arenas. | [Integer](#integer) | none |

### Instanced dungeons:

| Key | Details | Values            | Default |
| --- | :-: |-------------------| --- |
| `difficultyID` | Sets the list of instanced dungeon difficulties this loot will drop for. Only for use in instanced dungeons. | [String](#string) | none |