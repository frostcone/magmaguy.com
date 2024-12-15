# Deshabilitar el daño por explosión

## Deshabilitación del daño de bloque

### Uso de gamerule

Ejecute el comando `/gamerule mobGriefing false`. Esto evita todo el daño de bloques por explosiones.

### Uso de WorldGuard

Establezca el indicador `ghast-fireball` en denegar. Esto evita todo el daño de las bolas de fuego de Ghast.

## Deshabilitación de bolas de fuego de EliteMobs:

1. Vaya a la carpeta *~plugins\EliteMobs\powers*.
2. Vaya a *attack_fireball.yml* y establezca `isEnabled` en `false`.
3. Vaya a *tracking_fireball.yml* y establezca `isEnabled` en `false`.
