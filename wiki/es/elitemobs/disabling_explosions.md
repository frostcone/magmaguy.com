Aquí tienes la traducción al español, manteniendo el formato markdown:

# Deshabilitar daño por explosión

## Deshabilitar daño a bloques

### Usando gamerule

Ejecuta el comando `/gamerule mobGriefing false`. Esto previene todo el daño a bloques causado por explosiones.

### Usando WorldGuard

Establece la bandera `ghast-fireball` a deny. Esto previene todo el daño de las bolas de fuego de Ghast.

## Deshabilitar bolas de fuego de EliteMobs:

1. Ve a la carpeta *~plugins\EliteMobs\powers*.
2. Ve a *attack_fireball.yml* y establece `isEnabled` a `false`.
3. Ve a *tracking_fireball.yml* y establece `isEnabled` a `false`.