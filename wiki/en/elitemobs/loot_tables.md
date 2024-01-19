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

This will make the mob drop 1 of *MagmaGuy's Toothpick* with a 100% drop chance.

</div>

</details>

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

This will make the mob drop 10 of *MagmaGuy's Toothpick* with a 50% drop chance while ignoring the player level.

</div>

</details>

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

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
uniqueLootList:
  - material: APPLE
    chance: 0.3
    amount: 5
```
This will make the mob drop 5 *Apples* with a 30% drop chance.

</div>

</details>

### Arenas: WORK IN PROGRESS (Not working currently)
When making arena loot tables, please make sure that you start your loot table with `rawArenaReward:` instead of `uniqueLootList:`.

| Key | Details | Values              | Default |
| --- | :-: |---------------------| --- |
| `wave` | Sets the wave at which this loot entry will drop. Only for use in arenas. | [Integer](#integer) | none |
| `level` | Sets the level of the loot drop. Only for use in arenas. | [Integer](#integer) | none |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
rawArenaReward:
  - material: BREAD
    wave: 1
    amount: 10
    chance: 0.5
  - filename: magmaguys_toothpick.yml
    wave: 1
    level: 2
```
When the players beat the first wave then this will make the arena drop 10 *Bread* with a 50% drop chance and 1 *MagmaGuy's Toothpick* that is level 2 with a 100% drop chance.

</div>

</details>

### Instanced dungeons:

| Key | Details | Values            | Default |
| --- | :-: |-------------------| --- |
| `difficultyID` | Sets the list of instanced dungeon difficulties this loot will drop for. Only for use in instanced dungeons. | [String](#string) | none |

<details> 

<summary align="center"><b>Example</b></summary>

<div align="left">

```yml
uniqueLootList:
  - filename: magmaguys_toothpick.yml
    chance: 0.5
    difficultyID:
    - 1
    - 2
```
This will make the mob drop 1 *MagmaGuy's Toothpick* with a 50% drop chance if the players defeated the boss on difficulty 1 or 2.

</div>

</details>