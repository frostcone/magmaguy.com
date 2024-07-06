# Commandes BetterStructures

Vous trouverez ci-dessous une liste complète des commandes disponibles pour le plugin BetterStructures, ainsi que leurs permissions requises respectives.

## Commande Reload

**Commande :** `/betterstructures reload`

**Permission :** `betterstructures.*`

**Description :** Recharge le plugin. Importe également toutes les structures qui doivent être importées.

## Commande Lootify

**Commande :** `/betterstructures lootify <treasure filename> <rarity> <minAmount> <maxAmount> <weight>`

**Permission :** `betterstructures.*`

**Description :** Ajoute l'objet actuellement tenu à la table de `rarity` spécifique du `generator` spécifique, en choisissant au hasard la quantité de l'objet qui peut être trouvée dans un coffre entre `minAmount` et `maxAmount`, avec le `weight` spécifié.

Ceci est un système très spécifique, pour plus de détails sur le fonctionnement de ces valeurs, vous pouvez lire [cette page]($language$/betterstructures/creating_structures.md).

## Commande Place

**Commande :** `/betterstructures place <structure filename> <generator type>`

**Permission :** `betterstructures.*`

**Description :** Force le placement de la structure sélectionnée à votre emplacement.

## Commande Teleportcoords

**Commande :** `/betterstructures teleporttocoords <worldName> <x> <y> <z>`

**Permission :** `betterstructures.*`

**Description :** Non destinée à être utilisée directement, c'est la commande qui s'exécute lorsqu'un administrateur clique sur un avertissement de chat qui lui permet de se téléporter vers une structure.

## Commande Version

**Commande :** `/betterstructures version`

**Permission :** `betterstructures.*`

**Description :** Affiche la version du plugin sur le chat.

## Commande Silent

**Commande :** `/betterstructures silent`

**Permission :** `betterstructures.*`

**Description :** Fait taire ou supprime le silence des avertissements apparaissant dans le chat pour les opérateurs du serveur concernant les structures générées sur le serveur. 
