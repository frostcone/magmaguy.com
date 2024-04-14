# Desactivar daño de explosión

## Desactivar daño de bloque

### Usando gamerule

Ejecute el comando `/gamerule mobGriefing false`. Esto previene todo daño de bloque por explosiones.

### Usando WorldGuard

Establezca la bandera `ghast-fireball` en denegar. Esto previene todo daño de bola de fuego de Ghast.

## Desactivar bolas de fuego de EliteMobs:

1. Dirígete a la carpeta *~plugins\EliteMobs\powers*.
2. Ve a *attack_fireball.yml* y establece `isEnabled` en `false`.
3. Ve a *tracking_fireball.yml* y establece `isEnabled` en `false`.