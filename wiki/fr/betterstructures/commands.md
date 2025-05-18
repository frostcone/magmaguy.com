Voici la traduction en français, en conservant le formatage markdown :

# Commandes BetterStructures

Voici une liste complète des commandes disponibles pour le plugin BetterStructures, ainsi que les permissions requises correspondantes.

## Commande Reload

**Commande :** `/betterstructures reload`

**Permission :** `betterstructures.*`

**Description :** Recharge le plugin. Importe également toutes les structures qui doivent l'être.

## Commande Lootify

**Commande :** `/betterstructures lootify <nom_fichier_tresor> <rarity> <minAmount> <maxAmount> <weight>`

**Permission :** `betterstructures.*`

**Description :** Ajoute l'objet actuellement tenu à la table de `rarity` spécifique du `generator` spécifique, en randomisant la quantité de l'objet qui peut être trouvée dans un coffre entre `minAmount` et `maxAmount`, avec le `weight` spécifié.

C'est un système très spécifique. Pour plus de détails sur le fonctionnement de ces valeurs, vous pouvez lire [cette page]($language$/betterstructures/creating_structures.md).

## Commande Place

**Commande :** `/betterstructures place <nom_fichier_structure> <type_generateur>`

**Permission :** `betterstructures.*`

**Description :** Force le placement de la structure sélectionnée à votre emplacement.

## Commande Teleportcoords

**Commande :** `/betterstructures teleporttocoords <nom_monde> <x> <y> <z>`

**Permission :** `betterstructures.*`

**Description :** N'est pas destinée à être utilisée directement. C'est la commande qui s'exécute lorsqu'un administrateur clique sur un avertissement dans le chat lui permettant de se téléporter à une structure.

## Commande Version

**Commande :** `/betterstructures version`

**Permission :** `betterstructures.*`

**Description :** Affiche la version du plugin dans le chat.

## Commande Silent

**Commande :** `/betterstructures silent`

**Permission :** `betterstructures.*`

**Description :** Active ou désactive le silence des avertissements apparaissant dans le chat pour les opérateurs de serveur concernant la génération de structures sur le serveur.