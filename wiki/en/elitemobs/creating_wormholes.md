[![](https://i.imgur.com/LPnSUkK.jpg)](https://magmaguy.com/webapp/webapp.html)

# What are Wormholes?

Wormholes are a kind of highly efficient portal-to-portal teleportation system. The portals are marked with visual effects.

# Wormhole mechanics

Wormholes can do the following:

*   Go through one portal to reach the destination portal, and go from the destination portal back to the first one.
*   Play a sound when players go through them
*   Temporarily blind players while going through them to smooth the transition
*   Push players out to avoid getting caught in a teleport loop
*   Lock players out of teleporation for 5 seconds to avoid getting caught in a teleport loop
*   Play elaborate visual effects
*   Require permissions to use the wormhole
*   Require the use of currency to use the wormhole
*   Notify players and admins when the destination portal is not available

# Creating a Wormhole

Wormholes are added as configuration files to the wormholes folder. It is possible to create subfolders, and it is recommended to do so if you are adding wormholes for specific dungeons, under the format \` ~/plugins/EliteMobs/wormholes/dungeonName/dungeonName\_identifier.yml\`.


The following is an example of a valid Wormhole config:

```yaml
isEnabled: true
location1: em_primis,1288.5,19,452.5,135,-23
location2: em_primis,1288.5,-39,451.5,180,-1
```

| Key | Description | Values | Default |
|-|:-:|:-:|:-:|
| `isEnabled` | Sets if the wormhole is enabled | `true` / `false`| `true` |
| `location1` | Sets one end of the wormhole | LOCATION [1] | none |
| `location2` | Sets the other end of the wormhole | LOCATION [1] | none |
| `location1Text` | Sets the display text of the first location | STRING | none |
| `location2Text` | Sets the display text of the second location | STRING | none |
| `permission` | Sets the permission required to use the wormhole | STRING | none |
| `coinCost` | Sets the cost, in elite coins, of using the wormhole | DOUBLE | none |
| `style` | Sets the visual shape of the wormhole | `NONE` / `CRYSTAL` / `ISOCAHEDRON` / `CUBE` | `CUBE` |
| `particleColor` | Sets the color of the particle | [`0x` followed by a hexcode](https://www.w3schools.com/colors/colors_hexadecimal.asp) | `0x800080` |
| `blindPlayer` | Sets if the portal blinds the player for a smoother teleport | `true` / `false` | `false` |
| `sizeMultiplier` | Multiplies the size of the portal | MULTIPLIER | `1` |