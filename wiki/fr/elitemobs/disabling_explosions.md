# Désactivation des dégâts d’explosion

## Désactivation des dégâts aux blocs

### Utilisation de la règle de jeu

Exécutez la commande `/gamerule mobGriefing false`. Cela empêche tous les dégâts aux blocs causés par les explosions.

### Utilisation de WorldGuard

Définissez l’indicateur `ghast-fireball` sur « refuser ». Cela empêche tous les dégâts des boules de feu de Ghast.

## Désactivation des boules de feu d'EliteMobs :

1. Accédez au dossier *~plugins\EliteMobs\powers*.
2. Accédez à *attack_fireball.yml* et définissez `isEnabled` sur `false`.
3. Accédez à *tracking_fireball.yml* et définissez `isEnabled` sur `false`.
