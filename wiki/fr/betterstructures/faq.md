# Comment utiliser les commandes
- Allez sur la page des commandes pour obtenir de l'aide : [Page des commandes]($language$/betterstructures/commands.md)

# Vérifier où les structures apparaissent
- Si vous êtes un administrateur de serveur et que vous n'avez pas désactivé les avertissements, vous serez averti dans le chat lorsqu'une structure apparaît.
- Cliquez sur le message du chat pour vous téléporter à la structure (pas pour l'édition Bedrock).
- Activez/désactivez les avertissements avec `/betterstructures warn`.

# Pourquoi les structures peuvent ne pas apparaître
- Habituellement, les structures n'apparaissent pas dans les zones déjà explorées. Visitez de nouvelles zones pour les structures.

<details> 
<summary>Plus de détails</summary>

Les structures n'apparaîtront pas dans les zones déjà explorées afin d'éviter de les surcharger et d'endommager les constructions des joueurs. BetterStructures sait si une zone a été explorée avant son installation et n'y placera pas de structures. Si votre monde a été entièrement exploré avant d'installer BetterStructures, vous devez le régénérer ou créer un nouveau monde.

</details>

# EliteMobs et BetterStructures

## Ce qu'offre EliteMobs
- En savoir plus sur EliteMobs : [Wiki EliteMobs](#)
- Il ajoute des boss aux structures.

## Obtenir du contenu EliteMobs préfabriqué
- Disponible sur [magmaguy.itch.io](https://magmaguy.itch.io/) et [patreon.com/magmaguy](https://www.patreon.com/magmaguy)

## Utiliser EliteMobs sans les autres fonctionnalités
- Vous pouvez désactiver les autres fonctionnalités d'EliteMobs. Pour ce faire, modifiez les paramètres dans :
    - events.yml : `timedEventsEnabled: false` et `actionEventsEnabled: false` désactivent tous les événements
    - MobCombatSettings.yml : `doNaturalMobSpawning: false` désactive les apparitions naturelles d'élites

## Ajouter un boss EliteMobs à votre structure

- Ajoutez `[elitemobs]` à la première ligne de votre panneau
- Ajoutez le nom de fichier du boss sur les deuxième / troisième / quatrième lignes du panneau comme `test_boss.yml`
- Plus d'informations [ici]($language$/betterstructures/creating_structures.md)

# BetterStructures avec d'autres plugins

## MythicMobs
- Faites apparaître des monstres mythiques en utilisant des panneaux avec `[mythicmobs]` suivi de l'identifiant du monstre sur les autres lignes du panneau.
- EliteMobs est meilleur pour les boss avec BetterStructures car j'ai fait les deux.

## MMOItems
- Ajoutez des MMOItems avec `mmoitems=<TYPE>@<ITEM-ID>` dans le fichier de configuration du trésor.

## Objets personnalisés d'autres plugins
- Utilisez la commande lootify pour ajouter des objets aux coffres. Voir la [Page des commandes]($language$/betterstructures/commands.md).

# Créer vos propres structures
- Apprenez comment faire : [Guide de création de structure]($language$/betterstructures/creating_structures.md)

# Impact sur les performances et minimisation
- Générer de nombreuses structures peut ralentir votre serveur.
- Utilisez [Chunky](https://www.spigotmc.org/resources/chunky.81534/) pour pré-générer votre monde et éviter les problèmes de performances.
- Si vous n'utilisez pas EliteMobs, vous pouvez supprimer BetterStructures après la génération du monde.
- Avec EliteMobs, conservez BetterStructures pour la gestion des zones protégées, avec un impact minimal.


