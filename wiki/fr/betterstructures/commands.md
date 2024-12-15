# Commandes BetterStructures

Vous trouverez ci-dessous une liste complète des commandes disponibles pour une utilisation avec le plugin
BetterStructures, ainsi que leurs autorisations requises respectives.

## Commande Reload

**Commande:** `/betterstructures reload`

**Autorisation:** `betterstructures.*`

**Description:** Recharge le plugin. Importe également toutes les structures qui doivent être importées.

## Commande Lootify

**Commande:** `/betterstructures lootify <nom de fichier de trésor> <rareté> <quantitéMin> <quantitéMax> <poids>`

**Autorisation:** `betterstructures.*`

**Description:** Ajoute l’objet actuellement tenu à la table de `rareté` spécifique du `générateur` spécifique, en
randomisant la quantité de l’objet qui peut être trouvée dans un coffre entre `quantitéMin` et `quantitéMax`, avec
le `poids` spécifié.

Il s’agit d’un système très spécifique. Pour plus de détails sur le fonctionnement de ces valeurs, vous pouvez
consulter [cette page]($language$/betterstructures/creating_structures.md).

## Commande Place

**Commande:** `/betterstructures place <nom de fichier de structure> <type de générateur>`

**Autorisation:** `betterstructures.*`

**Description:** Force le placement de la structure sélectionnée à votre emplacement.

## Commande Teleportcoords

**Commande:** `/betterstructures teleporttocoords <nom du monde> <x> <y> <z>`

**Autorisation:** `betterstructures.*`

**Description:** N’est pas destiné à être utilisé directement, il s’agit de la commande qui s’exécute lorsqu’un
administrateur clique sur un avertissement de chat qui lui permet de se téléporter vers une structure.

## Commande Version

**Commande:** `/betterstructures version`

**Autorisation:** `betterstructures.*`

**Description:** Affiche la version du plugin dans le chat.

## Commande Silent

**Commande:** `/betterstructures silent`

**Autorisation:** `betterstructures.*`

**Description:** Active ou désactive le silence des avertissements apparaissant dans le chat pour les opérateurs de
serveur concernant les structures générées dans le serveur.
