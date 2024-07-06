# Désactivation des dommages d'explosion

## Désactivation des dommages aux blocs

### Utilisation de gamerule

Exécutez la commande `/gamerule mobGriefing false`. Cela empêche tous les dommages aux blocs causés par les explosions.

### Utilisation de WorldGuard

Définissez le drapeau `ghast-fireball` sur deny. Cela empêche tous les dommages causés par les boules de feu des Ghasts.

## Désactivation des boules de feu d'EliteMobs :

1. Allez dans le dossier *~plugins\EliteMobs\powers*.
2. Allez dans *attack_fireball.yml* et définissez `isEnabled` sur `false`.
3. Allez dans *tracking_fireball.yml* et définissez `isEnabled` sur `false`.
