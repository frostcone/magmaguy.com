[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are Wormholes?

Wormholes are a kind of highly efficient portal-to-portal teleportation system. The portals are marked with visual effects.

# Wormhole mechanics

Wormholes can do the following:

*   Go through one portal to reach the destination portal, and go from the destination portal back to the first one.
*   Play a sound when players go through them
*   Temporarily blind players while going through them to smooth the transition
*   Push players out to avoid getting caught in a teleport loop
*   Lock players out of teleportation for 5 seconds to avoid getting caught in a teleport loop
*   Play elaborate visual effects
*   Require permissions to use the wormhole
*   Require the use of currency to use the wormhole
*   Notify players and admins when the destination portal is not available

# Creating a Wormhole

Wormholes are added as configuration files to the wormholes folder. It is possible to create subfolders, and it is recommended to do so if you are adding wormholes for specific dungeons, under the format \` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml\`.

### Ejection

Yaw and Pitch (The last two digits in the coordinates) in the `location1` and `location2` will set where the players will get ejected from the wormhole when they travel through it. Let look at this example:

`location1: my_world,20,10,20,180,20`

With Yaw being set at `180` the player would get ejected facing North, and with Pitch being set at `20` they would also get ejected slightly upwards. If you wish the player to remain in the same block as the wormhole when being ejected, then it is a good idea to set the Pitch to negative to make sure the players do not slide off from the block.

## Wormhole Config
The following is an example of a valid Wormhole config:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

| Key | Description |                                        Values                                         | Default |
|-|:-:|:-------------------------------------------------------------------------------------:|:-:|
| `isEnabled` | Sets if the wormhole is enabled |                                   [Boolean](#boolean)                                    | `true` |
| `location1` | Sets one end of the wormhole |                                     Location [1]                                      | none |
| `location2` | Sets the other end of the wormhole |                                     Location [1]                                      | none |
| `location1Text` | Sets the display text of the first location |                                   [String](#string)                                   | none |
| `location2Text` | Sets the display text of the second location |                                   [String](#string)                                   | none |
| `permission` | Sets the permission required to use the wormhole |                                   [String](#string)                                   | none |
| `coinCost` | Sets the cost, in elite coins, of using the wormhole |                                   [Double](#double)                                   | none |
| `style` | Sets the visual shape of the wormhole |                      `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE`                      | `CUBE` |
| `particleColor` | Sets the color of the particle | [`0x` followed by a hexcode](https://www.w3schools.com/colors/colors_hexadecimal.asp) | `0x800080` |
| `blindPlayer` | Sets if the portal blinds the player for a smoother teleport |                                  [Boolean](#boolean)                                  | `false` |
| `sizeMultiplier` | Multiplies the size of the portal |                               [Multiplier](#multiplier)                               | `1` |

<details>

<summary align="center"><b>Example</b></summary>

<div align="left">

In this example we will make a simple wormhole that takes us from one world into another. Do not forget that wormholes can also just teleport players to a different location in the same world.

```yml
isEnabled: true #We enable the worm by setting this value to true
location1: my_world,1.5,11.0,1.5,108.0,5.0 #this is where the wormhole will appear in my_world
location2: my_other_world,766.5,29.0,517.5,-136.0,5.0 #this is where the wormhole will appear in my_other_world
location1Text: "&aGo to My World" #makes a nice display text above wormhole location1
location2Text: "&aGo to My Other World" #makes a nice display text above wormhole location2
permission: eliteperm.coolplayers #only players with this permission will be able to use the wormhole, both for location1 and location2
coinCost: 2 #the players will need to pay 12 elite coins to be able to use the worm hole
style: CRYSTAL #this wormhole will be in the shape of a crystal
particleColor: 0x00ff00 #this will set the wormhole particles to green
blindPlayer: true #the wormhole teleport will blind the player for a short duration to make the transition less jarring
sizeMultiplier: 1.0 #sets how big the shape of the wormhole should be
```

</div>

</details>

#### Performance Issues

The wormhole particles can cause client performance issues for players that are running bedrock. If you would like to turn off the wormhole particles you can go to `~plugins\EliteMobs\Wormholes.yml` and change the `noParticlesMode` setting to `true`.