# BetterStructures Commands

Below is a comprehensive list of commands available for use with the BetterStructures plugin, along with their respective required permissions.

## Reload Command

**Command:** `/betterstructures reload`

**Permission:** `betterstructures.*`

**Description:** Reloads the plugin. Also imports any structures that need to be imported.

## Lootify Command

**Command:** `/betterstructures lootify <treasure filename> <rarity> <minAmount> <maxAmount> <weight>`

**Permission:** `betterstructures.*`

**Description:** Adds the currently held item to the specific `rarity` table of the specific `generator`, randomizing the amount of the item that can be found in a chest between `minAmount` and `maxAmount`, with the `weight` specified.

This is a very specific system, for more details on how these values work you can read [this page]($language$/betterstructures/creating_structures.md).

## Teleportcoords Command

**Command:** `/betterstructures teleporttocoords <worldName> <x> <y> <z>`

**Permission:** `betterstructures.*`

**Description:** Not meant to be used directly, this is the command that runs when an admin clicks on a chat warning that lets them teleport to a structure.

## Version Command

**Command:** `/betterstructures version`

**Permission:** `betterstructures.*`

**Description:** Outputs the plugin version on chat.

## Silent Command

**Command:** `/betterstructures silent`

**Permission:** `betterstructures.*`

**Description:** Silences or removes silence from warnings appearing in chat for server operators about structures getting generated in the server.