# Commandes utilisateur

*Note: Toutes les permissions des joueurs sont définies sur « true » par défaut. Cela signifie qu’elles sont déjà
configurées.*

*Si vous ne voulez pas que les joueurs aient accès à une fonctionnalité spécifique via les permissions, vous devrez
refuser cette permission au joueur!*

| Commande                                |                                                                                                                       Description                                                                                                                       |
|-----------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`                    |                       Commande principale, condense toutes les informations des joueurs dans le plugin dans un menu facile d’accès. *Note :* toutes les autres commandes utilisateur se trouvent dans cette commande principale.                        |
| `/adventurersguild` / `/ag`             |                                                   Dans une configuration recommandée, téléporte le joueur au monde de la guilde des aventuriers où il interagit avec les différents PNJ d’EliteMobs.                                                    |
| `/em shareItem`                         |                                                                               Lien vers un objet dans le chat afin que les autres joueurs puissent voir ses statistiques.                                                                               |
| `/em help`                              | Liste toutes les commandes. Les commandes utilisateur restantes sont généralement remplacées par l’utilisation de PNJ ou de l’interface `/em` ! Vous pouvez survoler les commandes avec votre curseur pour obtenir une description de ce qu’elles font. |
| `/em money check`                       |                                                                                                               Affiche l’argent du joueur.                                                                                                               |
| `/em pay <nom d’utilisateur> <montant>` |                                                                          Permet aux joueurs de se payer mutuellement. Les transactions sont taxées d’un montant configurable.                                                                           |
| `/em spawntp`                           |                                                                                                 Téléporte un joueur à un point d’apparition du serveur.                                                                                                 |

## Commandes PNJ

Ces commandes ne sont utiles que si vous n’avez pas le hub de la guilde des aventuriers avec les PNJ installés.

Il est recommandé de les installer pour exécuter toutes ces commandes par le biais des PNJ au lieu de demander aux
joueurs de se rappeler comment les commandes fonctionnent.

| Commande                       |                                                Description                                                |
|--------------------------------|:---------------------------------------------------------------------------------------------------------:|
| `/em rank`                     |         Ouvre le menu de rang ou téléporte les joueurs vers le hub de la guilde des aventuriers.          |
| `/em shop procedural <joueur>` |          Accède à la boutique ou téléporte les joueurs vers le hub de la guilde des aventuriers.          |
| `/em shop sell <joueur>`       | Accède au menu de vente de la boutique ou téléporte les joueurs vers le hub de la guilde des aventuriers. |
| `/em shop custom <joueur>`     |   Accède à la boutique personnalisée ou téléporte les joueurs vers le hub de la guilde des aventuriers.   |
| `/em repair`                   |      Accède au menu de réparation ou téléporte les joueurs vers le hub de la guilde des aventuriers.      |
| `/em enchant`                  |     Accède au menu d’enchantement ou téléporte les joueurs vers le hub de la guilde des aventuriers.      |
| `/em scrap`                    |    Accède au menu de mise au rebut ou téléporte les joueurs vers le hub de la guilde des aventuriers.     |
| `/em unbind`                   |      Accède au menu de libération ou téléporte les joueurs vers le hub de la guilde des aventuriers.      |

## Commandes utilisateur internes

**Ces commandes sont destinées à être exécutées à partir de menus en jeu tels que les quêtes du menu des quêtes. Si
aucune instruction n’est écrite sur la façon d’obtenir un ID, cela signifie qu’il est impossible d’obtenir cet ID
autrement qu’en exécutant la commande à partir du menu en jeu.** Pour plus de commodité, celles-ci ont été divisées en
catégories identifiables et non identifiables.

### Identifiables

| Commande                       | Description                         |
|--------------------------------|-------------------------------------|
| `/em dungeontp <id de donjon>` | Téléporte un joueur vers un donjon. |

*Note: Cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de
deviner les ID de donjon. Les ID des donjons sont les mêmes que les noms de fichiers .yml
dans `~/plugins/EliteMobs/dungeonpackages/`.<br/> Vous pouvez voir les ID sur la console lorsque vous utilisez la
commande `/em` et choisir une téléportation à partir de la page Téléportations.*

### Non identifiables

| Commande                           |                                                                                Description                                                                                |
|------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em quest accept <id de quête>`   |                                                                            Accepte une quête.                                                                             |
| `/em quest track <id de quête>`    |                                                                              Suit une quête.                                                                              |
| `/em quest complete <id de quête>` |                                                                            Termine une quête.                                                                             |
| `/em quest leave <id de quête>`    |                                                                           Abandonne une quête.                                                                            |
| `/em track boss <uuid>`            | Suit un boss personnalisé. Note : Cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de deviner les UUID de boss. |

# Commandes administrateur

<div>

**> > > `elitemobs.*` - Permission d’administrateur pour EliteMobs pour un accès complet! < < <**

</div>

| Commande                                                                                                   |                                                                    Description                                                                    |
|------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em setup`                                                                                                |                                                     Ouvre le menu principal de configuration.                                                     |
| `/em spawn elite <type d’entité> <niveau> <pouvoir1> <pouvoir2> <pouvoir3>`                                |                                              Fait apparaître un Elite en fonction du type d’entité.                                               |
| - `/em spawn eliteAt <type d’entité> <nom du monde> <x> <y> <z> <niveau> <pouvoir1> <pouvoir2> <pouvoir3>` |                                    Fait apparaître un Elite en fonction du type d’entité et de l’emplacement.                                     |
| `/em spawn boss <nom de fichier>`                                                                          |                                   Fait apparaître un boss personnalisé à partir d’un fichier de configuration.                                    |
| `/em spawn boss <nom de fichier> <niveau>`                                                                 |                        Fait apparaître un boss personnalisé à partir d’un fichier de configuration et remplace le niveau.                         |
| `/em spawn bossAt <nom de fichier> <nom du monde> <x> <y> <z>`                                             |                           Fait apparaître un boss personnalisé à partir d’un fichier de configuration à un emplacement.                           |
| `/em spawn bossAt <nom de fichier> <niveau> <nom du monde> <x> <y> <z>`                                    |                Fait apparaître un boss personnalisé à partir d’un fichier de configuration à un emplacement et remplace le niveau.                |
| `/em place boss <nom de fichier>`                                                                          |                                              Ajoute un emplacement d’apparition à un boss régional.                                               |
| `/em place treasureChest <nom de fichier>`                                                                 |                                        Ajoute un coffre au trésor à l’emplacement où se trouve le joueur.                                         |
| `/em remove`                                                                                               | Supprime définitivement une entité Elite Mob. Elite/Régional/Super/PNJ fonctionnent tous. Exécutez à nouveau pour quitter le mode de suppression. |
| `/em event <nom de l’événement>`                                                                           |                                                   Lance un événement personnalisé chronométré.                                                    |
| `/em place npc <nom de fichier PNJ>`                                                                       |                                                              Fait apparaître un PNJ.                                                              |
| `/em stats`                                                                                                |                                Obtient les statistiques des entités EliteMobs et des joueurs actuellement actifs.                                 |
| `/em loot menu`                                                                                            |                                      Ouvre un menu où vous pouvez obtenir n’importe quel butin personnalisé.                                      |
| `/em loot give <joueur> <nom de fichier>`                                                                  |                                                Donne un butin personnalisé spécifique à un joueur.                                                |
| `/em loot simulate <niveau>`                                                                               |                                            Simule les butins d’un Elite Mob à partir du niveau défini.                                            |
| `/em loot simulate <niveau> <fois>`                                                                        |                               Simule les butins d’un Elite Mob à partir du niveau défini un certain nombre de fois.                               |
| `/em version`                                                                                              |                                                           Obtient la version du plugin.                                                           |
| `/em reload`                                                                                               |                                               Recharge le plugin. Fonctionne presque à chaque fois.                                               |
| `/em kill`                                                                                                 |                                                        Tue tous les Elite Mobs agressifs.                                                         |
| `/em kill <rayon>`                                                                                         |                                                 Tue tous les Elite Mobs agressifs dans un rayon.                                                  |
| `/em kill type <type d’entité>`                                                                            |                                                     Tue tous les élites d’un type spécifique.                                                     |
| `/em kill type <type d’entité> <rayon>`                                                                    |                                              Tue tous les élites d’un type spécifique dans un rayon.                                              |
| `/em loot debug <niveau>`                                                                                  |                                                Obtient des objets de débogage à des fins de test.                                                 |
| `/em money add <nom d’utilisateur> <montant>`                                                              |                                                  Ajoute un montant d’argent défini à un joueur.                                                   |
| `/em money addall <montant>`                                                                               |                                          Ajoute un montant d’argent défini à tous les joueurs en ligne.                                           |
| `/em money remove <nom d’utilisateur> <montant>`                                                           |                                                 Supprime un montant d’argent défini à un joueur.                                                  |
| `/em money set <nom d’utilisateur> <montant>`                                                              |                                                Définit le montant total de la monnaie d’un joueur.                                                |
| `/em rank <joueur> <niveau de prestige> <niveau de guilde>`                                                |                                                      Définit le rang de guilde d’un joueur.                                                       |
| `/em discord`                                                                                              |                                               Obtient le lien pour le serveur Discord d’assistance.                                               |
| `/em discord <message>`                                                                                    |                                Publie un message de débogage sur Discord si DiscordSRV est correctement configuré.                                |
| `/em unbind force`                                                                                         |                                                     Libère un objet lié à l’âme tenu en main.                                                     |
| `/em money check <joueur>`                                                                                 |                                                    Vérifie la monnaie d’un joueur spécifique.                                                     |
| `/em fireball`                                                                                             |                               Fait apparaître une boule de feu pour tester la régénération des explosions d’élite.                                |
| `/em transitiveBlocks register <nom de fichier> <ON_SPAWN/ON_REMOVE>`                                      |                         Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                         |
| `/em transitiveBlocks edit <nom de fichier> <ON_SPAWN/ON_REMOVE>`                                          |                         Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                         |
| `/em /em transitiveBlocks registerArea <nom de fichier> <ON_SPAWN/ON_REMOVE>`                              |                         Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                         |
| `/em transitiveBlocks editArea <nom de fichier> <ON_SPAWN/ON_REMOVE>`                                      |                         Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                         |
| `/em transitiveBlocks cancel`                                                                              |                         Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                         |
| `/em protection bypass`                                                                                    |                         Active/désactive la protection des donjons. Fonctionne également pour la guilde des aventuriers.                          |

## Commandes administrateur internes

Ces commandes sont destinées à être exécutées lors de l’interaction avec des menus ou du texte interactif sur le chat,
et non manuellement.

| Commande                                     |                                  Description                                   |
|----------------------------------------------|:------------------------------------------------------------------------------:|
| `/em setup done`                             |    Arrête d’afficher les messages lors de la connexion de l’administrateur.    |
| `/em setup toggle <configuration du donjon>` | Vous permet d’activer/désactiver l’installation du contenu EliteMobs spécifié. |

# Permissions brutes :
```
permissions:
  elitemobs.*:
    description: Donne accès à toutes les commandes elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Permet aux joueurs d’exécuter /elitemobs stats
    default: op
  elitemobs.version:
    description: Permet aux joueurs d’exécuter /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Permet aux joueurs d’interagir avec les PNJ pour les boutiques dynamiques
    default: true
  elitemobs.shop.command:
    description: Permet aux joueurs d’ouvrir le menu de la boutique dynamique par le biais de commandes
    default: true
  elitemobs.customshop.npc:
    description: Permet aux joueurs d’interagir avec les PNJ pour les boutiques dynamiques
    default: true
  elitemobs.customshop.command:
    description: Permet aux joueurs d’ouvrir le menu de la boutique dynamique par le biais de commandes
    default: true
  elitemobs.currency.pay:
    description: Permet aux joueurs d’exécuter /elitemobs pay [nom d’utilisateur] [montant]
    default: true
  elitemobs.currency.check:
    description: Permet aux joueurs d’exécuter /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Permet aux joueurs d’exécuter /elitemobs check [nom d’utilisateur]
    default: op
  elitemobs.events:
    description: Permet aux joueurs de lancer tous les événements
    default: true
  elitemobs.checktier.others:
    description: Permet aux joueurs d’exécuter /elitemobs checktier [joueur]
    default: op
  elitemobs.gettier:
    description: Permet aux joueurs d’exécuter /elitemobs gettier [niveau]
    default: op
  elitemobs.versionnotification:
    description: Permet aux joueurs d’être informés des mises à jour du plugin
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permet aux joueurs de se téléporter vers le hub de la guilde des aventuriers en utilisant /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permet aux joueurs d’ouvrir le menu de rang en utilisant la commande /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permet aux joueurs d’ouvrir le menu de rang par le biais de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permet aux joueurs d’accéder au menu /em rank par le biais des PNJ
    default: true
  elitemobs.quest.command:
    description: Permet aux joueurs de participer à des quêtes par le biais de commandes
    default: true
  elitemobs.quest.npc:
    description: Permet aux joueurs de participer à des quêtes par le biais d’un PNJ EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permet aux joueurs de se téléporter vers un emplacement défini par elitemobs
    default: true
  elitemobs.spawntp:
    description: Permet aux joueurs de se téléporter vers l’emplacement d’apparition par défaut du serveur.
    default: true
  elitemobs.back.npc:
    description: Permet aux joueurs d’interagir avec un PNJ pour revenir à un emplacement précédent.
    default: true
  elitemobs.shareitem:
    description: Partage un objet d’élite tenu en main sur le chat.
    default: true
  elitemobs.scrap.npc:
    description: Permet aux joueurs de mettre au rebut des objets auprès d’un PNJ
    default: true
  elitemobs.scrap.command:
    description: Permet aux joueurs de mettre au rebut des objets en utilisant une commande
    default: true
  elitemobs.smelt.command:
    description: Permet aux joueurs de fondre des objets en utilisant une commande
    default: true
  elitemobs.smelt.npc:
    description: Permet aux joueurs de fondre des objets en utilisant un PNJ
    default: true
  elitemobs.repair.command:
    description: Permet aux joueurs d’utiliser la commande de réparation pour ouvrir le menu de réparation des objets d’élite
    default: true
  elitemobs.repair.npc:
    description: Permet aux joueurs d’interagir avec le PNJ pour la réparation des objets
    default: true
  elitemobs.refiner.command:
    description: Permet aux joueurs d’utiliser la commande de raffineur pour ouvrir le menu de mise à niveau des rebuts d’élite
    default: true
  elitemobs.refiner.npc:
    description: Permet aux joueurs d’interagir avec le PNJ pour la mise à niveau des rebuts d’élite
    default: true
  elitemobs.enhancer.command:
    description: Permet aux joueurs d’utiliser la commande d’améliorateur pour ouvrir le menu de mise à niveau des objets d’élite
    default: true
  elitemobs.enhancer.npc:
    description: Permet aux joueurs d’interagir avec le PNJ pour la mise à niveau des objets d’élite
    default: true
  elitemobs.unbind.command:
    description: Permet aux joueurs d’utiliser la commande de libération pour ouvrir le menu de libération des objets d’élite
    default: true
  elitemobs.unbind.npc:
    description: Permet aux joueurs d’interagir avec le PNJ libérateur pour libérer les objets d’élite
    default: true
  elitemobs.soulbind.bypass:
    description: Permet aux utilisateurs de contourner les restrictions de liaison à l’âme. Uniquement recommandé pour les administrateurs !
    default: false
  elitequest.*:
    description: Utilisé pour les permissions relatives aux quêtes
    default: false
    op: false
```