# Deshabilitar el daño por explosión

## Deshabilitar el daño a bloques

### Usando gamerule

Ejecuta el comando `/gamerule mobGriefing false`. Esto evita todo el daño a bloques causado por explosiones.

### Usando WorldGuard

Establece el flag `ghast-fireball` a deny. Esto evita todo el daño causado por las bolas de fuego de Ghast.

## Deshabilitar las bolas de fuego de EliteMobs:

1. Ve a la carpeta *~plugins\EliteMobs\powers*.
2. Ve a *attack_fireball.yml* y establece `isEnabled` a `false`.
3. Ve a *tracking_fireball.yml* y establece `isEnabled` a `false`.
