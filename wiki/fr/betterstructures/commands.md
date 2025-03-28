# Commandes BetterStructures

Ci-dessous, vous trouverez une liste complète des commandes disponibles pour le plugin BetterStructures, ainsi que leurs
permissions respectives.

## Commande Reload

**Commande :** `/betterstructures reload`

**Permission :** `betterstructures.*`

**Description :** Recharge le plugin. Importe également toutes les structures qui doivent être importées.

## Commande Lootify

**Commande :** `/betterstructures lootify <nom du fichier de trésor> <rareté> <quantitéMin> <quantitéMax> <poids>`

**Permission :** `betterstructures.*`

**Description :** Ajoute l'objet actuellement tenu à la table de `rareté` spécifiée du `générateur` spécifié, en
randomisant la quantité de l'objet qui peut être trouvée dans un coffre entre `quantitéMin` et `quantitéMax`, avec
le `poids` spécifié.

C'est un système très spécifique. Pour plus de détails sur le fonctionnement de ces valeurs, vous pouvez
consulter [cette page]($language$/betterstructures/creating_structures.md).

## Commande Place

**Commande :** `/betterstructures place <nom du fichier de structure> <type de générateur>`

**Permission :** `betterstructures.*`

**Description :** Force le placement de la structure sélectionnée à votre emplacement.

## Commande Teleportcoords

**Commande :** `/betterstructures teleporttocoords <nomDuMonde> <x> <y> <z>`

**Permission :** `betterstructures.*`

**Description :** N'est pas destinée à être utilisée directement, il s'agit de la commande qui s'exécute lorsqu'un
administrateur clique sur un avertissement dans le chat qui lui permet de se téléporter vers une structure.

## Commande Version

**Commande :** `/betterstructures version`

**Permission :** `betterstructures.*`

**Description :** Affiche la version du plugin dans le chat.

## Commande Silent

**Commande :** `/betterstructures silent`

**Permission :** `betterstructures.*`

**Description :** Active ou désactive les avertissements qui apparaissent dans le chat pour les opérateurs du serveur
concernant les structures générées sur le serveur.
