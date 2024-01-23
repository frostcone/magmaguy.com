# Disabling explosion damage

## Disabling block damage

### Using gamerule

Run the command `/gamerule mobGriefing false`. This prevents all block damage from explosions.

### Using WorldGuard

Set the flag `ghast-fireball` to deny. This prevents all Ghast fireball damage.

## Disabling EliteMobs fireballs:

1. Go to the *~plugins\EliteMobs\powers* folder.
2. Go to *attack_fireball.yml* and set `isEnabled` to `false`.
3. Go to *tracking_fireball.yml* and set `isEnabled` to `false`.