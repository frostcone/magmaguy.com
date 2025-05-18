Voici la traduction en français, en conservant le formatage markdown :

# Commandes utilisateur

*Note : Toutes les permissions des joueurs sont définies sur vrai par défaut. Cela signifie qu'elles sont déjà configurées.*

*Si vous ne souhaitez pas que les joueurs aient accès à une fonctionnalité spécifique via les permissions, vous devrez refuser cette permission à ce joueur !*

| Commande | Description |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Commande principale, condense toutes les informations du joueur dans le plugin dans un menu facile d'accès. *Note :* toutes les autres commandes utilisateur se trouvent dans cette commande principale. |
| `/adventurersguild` / `/ag`     |Dans une configuration recommandée, téléporte le joueur vers le monde de la guilde des aventuriers où il interagit avec les différents PNJ d'EliteMobs.|
| `/em shareItem`     |Lie un objet dans le chat afin que les autres joueurs puissent voir ses statistiques.|
| `/em help`     |Liste toutes les commandes. Les commandes utilisateur restantes sont généralement remplacées par l'utilisation de PNJ ou de l'interface `/em` ! Vous pouvez passer votre curseur sur les commandes pour obtenir une description de ce qu'elles font. |
| `/em money check`     |Affiche l'argent du joueur.|
| `/em pay <username> <amount>`     |Permet aux joueurs de se payer mutuellement. Les transactions sont taxées d'un montant configurable.|
| `/em spawntp`     |Téléporte un joueur au point d'apparition du serveur.|

## Commandes PNJ

Ces commandes ne sont utiles que si vous n'avez pas installé le Hub de la Guilde des Aventuriers avec les PNJ.

Il est recommandé de les installer pour exécuter toutes ces commandes via des PNJ au lieu de demander aux joueurs de se souvenir du fonctionnement des commandes.

| Commande | Description |
|---------|:-----------:|
| `/em rank`     |     Ouvre le menu des rangs ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |
| `/em shop procedural <player>`     |     Accède à la boutique ou téléporte les joueurs au Hub de la Guilde des Aventuriers.     |
| `/em shop sell <player>`     |     Accède au menu de vente de la boutique ou téléporte les joueurs au Hub de la Guilde des Aventuriers.     |
| `/em shop custom <player>`     |     Accède à la boutique personnalisée ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |
| `/em repair`     |     Accède au menu de réparation ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |
| `/em enchant`     |     Accède au menu d'enchantement ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |
| `/em scrap`     |     Accède au menu de recyclage ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |
| `/em unbind`     |     Accède au menu de déliement ou téléporte les joueurs au hub de la Guilde des Aventuriers.     |

## Commandes utilisateur internes

**Ces commandes sont destinées à être exécutées à partir de menus en jeu, tels que les quêtes du menu des quêtes. S'il n'y a pas d'instructions sur la manière d'obtenir un ID, cela signifie qu'il n'est pas possible d'obtenir cet ID autrement qu'en exécutant la commande à partir du menu en jeu.** Pour plus de commodité, elles ont été divisées en catégories identifiables et non identifiables.

### Identifiables

| Commande | Description |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Téléporte un joueur à un donjon.|
*Note : cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de deviner les ID de donjon. Les ID des donjons sont les mêmes que les noms de fichiers .yml dans `~/plugins/EliteMobs/dungeonpackages/`. <br/>Vous pouvez voir les ID sur la console lorsque vous utilisez la commande `/em` et choisir une téléportation depuis la page Téléportations.*

### Non identifiables

| Commande | Description |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Accepte une quête.     |
| `/em quest track <questID>`     |     Suit une quête.     |
| `/em quest complete <questID>`     |     Termine une quête.     |
| `/em quest leave <questID>`     |     Quitte une quête.     |
| `/em track boss <uuid>`     |     Suit un boss personnalisé. Note : cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de deviner les UUID des boss.     |

# Commandes admin

<div>

**> > > `elitemobs.*` - Permission admin pour EliteMobs pour un accès complet ! < < <**

</div>

| Commande | Description |
|---------|:-----------:|
| `/em setup`     |     Ouvre le menu de configuration principal.     |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>`     |     Fait apparaître un Élite basé sur le type d'entité.     |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Fait apparaître un Élite basé sur le type d'entité et l'emplacement.     |
| `/em spawn boss <fileName>`     |     Fait apparaître un Boss Personnalisé à partir d'un fichier de configuration.     |
| `/em spawn boss <fileName> <level>`     |     Fait apparaître un Boss Personnalisé à partir d'un fichier de configuration et remplace le niveau.     |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>`     |     Fait apparaître un Boss Personnalisé à partir d'un fichier de configuration à un emplacement.     |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>`     |     Fait apparaître un Boss Personnalisé à partir d'un fichier de configuration à un emplacement et remplace le niveau.     |
| `/em place boss <fileName>`     |     Ajoute un emplacement d'apparition à un Boss Régional.     |
| `/em place treasureChest <fileName>`     |     Ajoute un coffre au trésor à l'emplacement où se trouve le joueur.     |
| `/em remove`     |     Supprime définitivement une entité de Mob Élite. Les Élite/Régional/Super/PNJ fonctionnent tous. Exécutez à nouveau pour quitter le mode suppression.     |
| `/em event <eventName>`     |     Lance un événement chronométré personnalisé.     |
| `/em place npc <npcFileName>`     |     Fait apparaître un PNJ.     |
| `/em stats`     |     Obtient les statistiques des entités et joueurs EliteMobs actuellement actifs.     |
| `/em loot menu`     |     Ouvre un menu où vous pouvez obtenir n'importe quel Butin Personnalisé.     |
| `/em loot give <player> <filename>`     |     Donne un butin personnalisé spécifique à un joueur.     |
| `/em loot simulate <level>`     |     Simule les butins d'un Mob Élite du niveau défini.     |
| `/em loot simulate <level> <times>`     |     Simule les butins d'un Mob Élite du niveau défini un certain nombre de fois.     |
| `/em version`     |     Obtient la version du plugin.     |
| `/em reload`     |     Recharge le plugin. Fonctionne presque à chaque fois.     |
| `/em kill `     |     Tue tous les Mobs Élite agressifs.     |
| `/em kill <radius>`     |     Tue tous les Mobs Élite agressifs dans un rayon.     |
| `/em kill type <entityType>`     |     Tue tous les élites d'un type spécifique.     |
| `/em kill type <entityType> <radius>`     |     Tue tous les élites d'un type spécifique dans un rayon.     |
| `/em loot debug <level>`     |     Obtient des objets de débogage à des fins de test.     |
| `/em money add <username> <amount>`     |     Ajoute un montant défini d'argent à un joueur.     |
| `/em money addall <amount>`     |     Ajoute un montant défini d'argent à tous les joueurs en ligne.     |
| `/em money remove <username> <amount>`     |     Supprime un montant défini d'argent d'un joueur.     |
| `/em money set <username> <amount>`     |     Définit le montant total d'argent qu'un joueur possède.     |
| `/em rank <player> <prestigeLevel> <guildLevel>`     |     Définit le rang de guilde d'un joueur.     |
| `/em discord`     |     Obtient le lien du serveur Discord de support.     |
| `/em discord <message>`     |     Publie un message de débogage sur Discord si DiscordSRV est configuré correctement.     |
| `/em unbind force`     |     Délie un objet lié à l'âme tenu.     |
| `/em money check <player>`     |     Vérifie l'argent qu'un joueur spécifique possède.     |
| `/em fireball`     |     Fait apparaître une boule de feu pour tester la régénération des explosions d'élite.     |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>`     |     Voir [Blocs Transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>`     |     Voir [Blocs Transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>`     |     Voir [Blocs Transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>`     |     Voir [Blocs Transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks cancel`     |     Voir [Blocs Transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em protection bypass`     |     Active/désactive la protection des donjons. Fonctionne également pour la Guilde des Aventuriers.     |

## Commandes admin internes

Ces commandes sont destinées à être exécutées lors de l'interaction avec des menus ou du texte interactif dans le chat, et non manuellement.

| Commande | Description |
|---------|:-----------:|
| `/em setup done`     |     Arrête d'afficher les messages lors de la connexion admin.     |
| `/em setup toggle <dungeonConfig>`     |   Permet d'activer/désactiver l'installation du contenu EliteMobs spécifié.    |

# Permissions brutes :
```
permissions:
  elitemobs.*:
    description: Donne accès à toutes les commandes elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: Permet aux joueurs d'exécuter /elitemobs stats
    default: op
  elitemobs.version:
    description: Permet aux joueurs d'exécuter /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Permet aux joueurs d'interagir avec les PNJ pour les boutiques dynamiques
    default: true
  elitemobs.shop.command:
    description: Permet aux joueurs d'ouvrir le menu de la boutique dynamique via des commandes
    default: true
  elitemobs.customshop.npc:
    description: Permet aux joueurs d'interagir avec les PNJ pour les boutiques dynamiques
    default: true
  elitemobs.customshop.command:
    description: Permet aux joueurs d'ouvrir le menu de la boutique dynamique via des commandes
    default: true
  elitemobs.money.pay:
    description: Permet aux joueurs d'exécuter /elitemobs pay [nom d'utilisateur] [montant]
    default: true
  elitemobs.money.check:
    description: Permet aux joueurs d'exécuter /elitemobs wallet
    default: true
  elitemobs.money.check.others:
    description: Permet aux joueurs d'exécuter /elitemobs check [nom d'utilisateur]
    default: op
  elitemobs.events:
    description: Permet aux joueurs de lancer tous les événements
    default: true
  elitemobs.checktier.others:
    description: Permet aux joueurs d'exécuter /elitemobs checktier [joueur]
    default: op
  elitemobs.gettier:
    description: Permet aux joueurs d'exécuter /elitemobs gettier [niveau]
    default: op
  elitemobs.versionnotification:
    description: Permet aux joueurs d'être notifiés des mises à jour du plugin
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permet aux joueurs de se téléporter au hub de la guilde des aventuriers en utilisant /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permet aux joueurs d'accéder au menu des rangs en utilisant la commande /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permet aux joueurs d'ouvrir le menu des rangs via /em rank
    default: true
  elitemobs.rank.npc:
    description: Permet aux joueurs d'accéder au menu /em rank via les PNJ
    default: true
  elitemobs.quest.command:
    description: Permet aux joueurs d'accepter des quêtes via commande
    default: true
  elitemobs.quest.npc:
    description: Permet aux joueurs d'accepter des quêtes via un PNJ EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permet aux joueurs de se téléporter à un emplacement défini par elitemobs
    default: true
  elitemobs.spawntp:
    description: Permet aux joueurs de se téléporter à l'emplacement d'apparition par défaut du serveur.
    default: true
  elitemobs.back.npc:
    description: Permet aux joueurs d'interagir avec un PNJ pour retourner à un emplacement précédent.
    default: true
  elitemobs.shareitem:
    description: Partage un objet Élite tenu dans le chat.
    default: true
  elitemobs.scrap.npc:
    description: Permet aux joueurs de recycler des objets auprès d'un PNJ
    default: true
  elitemobs.scrap.command:
    description: Permet aux joueurs de recycler des objets en utilisant une commande
    default: true
  elitemobs.smelt.command:
    description: Permet aux joueurs de fondre des objets en utilisant une commande
    default: true
  elitemobs.smelt.npc:
    description: Permet aux joueurs de fondre des objets en utilisant un PNJ
    default: true
  elitemobs.repair.command:
    description: Permet aux joueurs d'utiliser la commande de réparation pour ouvrir le menu de réparation des objets élite
    default: true
  elitemobs.repair.npc:
    description: Permet aux joueurs d'interagir avec le PNJ pour réparer des objets
    default: true
  elitemobs.refiner.command:
    description: Permet aux joueurs d'utiliser la commande de raffinement pour ouvrir le menu d'amélioration des Débris Élite
    default: true
  elitemobs.refiner.npc:
    description: Permet aux joueurs d'interagir avec le PNJ pour améliorer les Débris Élite
    default: true
  elitemobs.enhancer.command:
    description: Permet aux joueurs d'utiliser la commande d'amélioration pour ouvrir le menu d'amélioration des Objets Élite
    default: true
  elitemobs.enhancer.npc:
    description: Permet aux joueurs d'interagir avec le PNJ pour améliorer les Objets Élite
    default: true
  elitemobs.unbind.command:
    description: Permet aux joueurs d'utiliser la commande de déliement pour ouvrir le menu de déliement des Objets Élite
    default: true
  elitemobs.unbind.npc:
    description: Permet aux joueurs d'interagir avec le PNJ de déliement pour délier les Objets Élite
    default: true
  elitemobs.soulbind.bypass:
    description: Permet aux utilisateurs de contourner les restrictions de liaison d'âme. Recommandé uniquement pour les admins !
    default: false
  elitequest.*:
    description: Utilisé pour les permissions liées aux quêtes
    default: false
    op: false
```