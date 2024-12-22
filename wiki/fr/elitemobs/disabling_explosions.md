# Désactivation des dégâts d'explosion

## Désactivation des dégâts aux blocs

### Utilisation de la règle de jeu

Exécutez la commande `/gamerule mobGriefing false`. Cela empêche tous les dégâts aux blocs causés par les explosions.

### Utilisation de WorldGuard

Définissez le flag `ghast-fireball` sur deny. Cela empêche tous les dégâts causés par les boules de feu des Ghasts.

## Désactivation des boules de feu d'EliteMobs :

1. Allez dans le dossier *~plugins\EliteMobs\powers*.
2. Allez dans *attack_fireball.yml* et mettez `isEnabled` sur `false`.
3. Allez dans *tracking_fireball.yml* et mettez `isEnabled` sur `false`.
