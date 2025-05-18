Voici la traduction en français, en conservant le formatage markdown :

# Désactiver les dégâts d'explosion

## Désactiver les dégâts aux blocs

### Utiliser la gamerule

Exécutez la commande `/gamerule mobGriefing false`. Cela empêche tous les dégâts aux blocs causés par les explosions.

### Utiliser WorldGuard

Définissez le flag `ghast-fireball` sur deny. Cela empêche tous les dégâts causés par les boules de feu des Ghasts.

## Désactiver les boules de feu d'EliteMobs :

1.  Allez dans le dossier *~plugins\EliteMobs\powers*.
2.  Allez dans *attack_fireball.yml* et définissez `isEnabled` sur `false`.
3.  Allez dans *tracking_fireball.yml* et définissez `isEnabled` sur `false`.