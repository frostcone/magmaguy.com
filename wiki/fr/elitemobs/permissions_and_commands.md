```markdown
# Commandes des joueurs

*Remarque : Toutes les autorisations des joueurs sont définies sur true par défaut. Cela signifie qu'elles sont déjà configurées.*

*Si vous ne souhaitez pas que les joueurs aient accès à une fonctionnalité spécifique via les autorisations, vous devrez refuser à ce joueur l'autorisation !*

| Commande |    Description    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Commande principale, regroupe toutes les informations du joueur dans le plugin dans un menu facile d'accès. *Remarque :* toutes les autres commandes des joueurs se trouvent dans cette commande principale. `/em menu` est également une commande valide pour cela |
| `/adventurersguild` / `/ag`     |Dans une configuration recommandée, téléporte le joueur vers le monde de la guilde des aventuriers où il interagit avec les divers PNJ EliteMobs.|
| `/shareitem`     |Lie un objet dans le chat afin que les autres joueurs puissent voir ses statistiques.|
| `/em help`     |Affiche toutes les commandes. Les commandes des joueurs restantes sont généralement remplacées par l'utilisation de PNJ ou de l'interface `/em` !|
| `/em wallet`     |Affiche l'argent du joueur.|
| `/em pay <username> <amount>`     |Permet aux joueurs de se payer mutuellement. Les transactions sont taxées d'un montant configurable.|
| `/em updateitem`     |Met à jour le lore d'un objet au cas où il ne serait pas synchronisé. Cette commande est destinée au débogage et n'est pas nécessaire en jeu normal.|
| `/em spawntp`     |Téléporte un joueur vers le spawn du serveur.|

## Commandes des PNJ

Ces commandes ne sont utiles que si vous n'avez pas installé le hub de la Guilde des aventuriers avec des PNJ. 

Il est recommandé de les installer pour exécuter toutes ces commandes via des PNJ au lieu de faire en sorte que les joueurs se souviennent du fonctionnement des commandes.

| Commande | Description |
|---------|:-----------:|
| `/em rank`     |     Ouvre le menu des rangs ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em shop`     |     Accède à la boutique ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em customshop`     |     Accède à la boutique personnalisée ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em repair`     |     Accède au menu de réparation ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em enchant`     |     Accède au menu d'enchantement ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em scrap`     |     Accède au menu de démantèlement ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |
| `/em unbind`     |     Accède au menu de déliaison ou téléporte les joueurs vers le hub de la Guilde des aventuriers.     |

## Commandes des joueurs internes

**Ces commandes sont destinées à être exécutées à partir de menus en jeu, tels que les quêtes à partir du menu des quêtes. Si aucune instruction n'est écrite sur la façon d'obtenir un ID, cela signifie qu'il est impossible d'obtenir cet ID autrement qu'en exécutant la commande à partir du menu en jeu.** Par souci de commodité, elles ont été divisées en catégories identifiables et non identifiables.

### Identifiables

| Commande | Description |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Téléporte un joueur vers un donjon.|
*Remarque : Cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de deviner les ID de donjon. Les ID des donjons sont les mêmes que les noms de fichiers .yml dans `~/plugins/EliteMobs/dungeonpackages/`. <br/>Vous pouvez voir les ID sur la console lorsque vous utilisez la commande `/em` et choisir un téléport depuis la page Téléports.*

### Non identifiables

| Commande | Description |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Accepte une quête.     |
| `/em quest track <questID>`     |     Suit une quête.     |
| `/em quest complete <questID>`     |     Termine une quête.     |
| `/em quest leave <questID>`     |     Quitte une quête.     |
| `/em trackcustomboss <uuid>`     |     Suit un boss personnalisé. Remarque : Cette commande est destinée à être exécutée à partir du menu `/em`, car il est impossible pour les joueurs de deviner les UUID des boss.     |

# Commandes d'administrateur

<div>

**> > > `elitemobs.*` - Autorisation d'administrateur pour EliteMobs pour un accès complet ! < < <**

</div>

| Commande | Description |
|---------|:-----------:|
| `/em setup`     |     Ouvre le menu de configuration principal.     |
| `/em setup area <areaName>`     |     Protège une zone à l'aide de WorldGuard, utilisé pour les minidungeons et le hub du monde de la Guilde des aventuriers. Remarque : Vous n'avez pas besoin d'exécuter cette commande manuellement lorsque vous configurez les choses en utilisant la méthode de configuration recommandée.     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     Fait spawn un Elite en fonction du type d'entité.     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Fait spawn un Elite en fonction du type d'entité et de l'emplacement.     |
| `/em spawncustom <fileName>`     |     Fait spawn un boss personnalisé à partir d'un fichier de configuration.     |
| `/em spawncustomlevel <fileName> <level>`     |     Fait spawn un boss personnalisé à partir d'un fichier de configuration et remplace le niveau.     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     Fait spawn un boss personnalisé à partir d'un fichier de configuration à un emplacement.     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     Fait spawn un boss personnalisé à partir d'un fichier de configuration à un emplacement et remplace le niveau.     |
| `/em spawnsuper <EntityType>`     |     Fait spawn un super mob en fonction du type d'entité.     |
| `/em addSpawnLocation <fileName>`     |     Ajoute un emplacement de spawn à un boss régional.     |
| `/em addTreasureChest <fileName>`     |     Ajoute un coffre au trésor à l'emplacement où le joueur se trouve.     |
| `/em setLeashRadius <fileName> <radius>`     |     Ajoute un emplacement de spawn à un boss régional.     |
| `/em remove`     |     Supprime définitivement une entité de mob Elite. Les élites/boss régionaux/super mobs/PNJ fonctionnent tous. Exécutez à nouveau pour quitter le mode de suppression.     |
| `/em debug <name>`     |     Supprime définitivement une entité de mob Elite. Les élites/boss régionaux/super mobs/PNJ fonctionnent tous. Exécutez à nouveau pour quitter le mode de suppression.     |
| `/em debug <name>`     |     Ouvre un écran de débogage pour les joueurs ou les boss régionaux.     |
| `/em event <eventName>`     |     Lance un événement personnalisé à heure fixe.     |
| `/em spawnnpc <npcFileName>`     |     Fait spawn un PNJ.     |
| `/em stats`     |     Obtient les statistiques des entités et des joueurs EliteMobs actuellement actifs.     |
| `/em getloot`     |     Ouvre un menu où vous pouvez obtenir n'importe quel butin personnalisé.     |
| `/em getloot <filename>`     |     Obtenir du butin personnalisé spécifique.     |
| `/em giveloot <filename> <player>`     |     Donner du butin personnalisé spécifique à un joueur.     |
| `/em simloot <level>`     |     Simule des drops d'un mob Elite du niveau défini.     |
| `/em simloot <level> <times>`     |     Simule des drops d'un mob Elite du niveau défini un nombre défini de fois.     |
| `/em version`     |     Obtient la version du plugin.     |
| `/em reload`     |     Recharge le plugin. Fonctionne presque à chaque fois.     |
| `/em killaggressive`     |     Tuer tous les mobs Elite agressifs.     |
| `/em killaggressive <radius>`     |     Tuer tous les mobs Elite agressifs dans un rayon.     |
| `/em killpassive`     |     Tuer tous les super mobs passifs.     |
| `/em killpassive <radius>`     |     Tuer tous les super mobs passifs dans un rayon.     |
| `/em killtype <entityType>`     |     Tuer toutes les élites d'un type spécifique.     |
| `/em killtype <entityType> <radius>`     |     Tuer toutes les élites d'un type spécifique dans un rayon.     |
| `/em gettier <tier>`     |     Obtenir des objets de débogage à des fins de test.     |
| `/em money add <username> <amount>`     |     Ajoute un montant d'argent défini à un joueur.     |
| `/em money addall <amount>`     |     Ajoute un montant d'argent défini à tous les joueurs en ligne.     |
| `/em money remove <username> <amount>`     |     Supprime un montant d'argent défini d'un joueur.     |
| `/em money set <username> <amount>`     |     Définit le montant total de la monnaie d'un joueur.     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     Définit le rang de guilde d'un joueur.     |
| `/em discord`     |     Obtient le lien du serveur Discord d'assistance.     |
| `/em discord <message>`     |     Publie un message de débogage sur Discord si DiscordSRV est correctement configuré.     |
| `/em forceunbind`     |     Délie un objet lié à l'âme tenu.     |
| `/em relativecoords <minidungeon>`     |     Obtient les coordonnées relatives à un donjon installé.     |
| `/em wallet <player>`     |     Vérifie la monnaie d'un joueur spécifique.     |
| `/em fireball`     |     Fait spawn une boule de feu pour tester la régénération des explosions d'élite.     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em cancelblocks`     |     Voir [Blocs transitifs]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em debugmode`     |     Active le mode débogage, affichant le spawn et la disparition des mobs sur la console et permettant le suivi.     |

## Commandes internes d'administrateur

Ces commandes sont destinées à être exécutées lors de l'interaction avec des menus ou du texte interactif sur le chat, et non manuellement.

| Commande | Description |
|---------|:-----------:|
| `/em setup done`     |     Arrête d'afficher les messages à la connexion de l'administrateur.     |
| `/em setup minidungeon <minidungeonName>`     |     Installe un minidungeon.     |
| `/em setup minidungeon <minidungeonName>`     |     Désinstalle un minidungeon.     |
| `/em trace <uuid>`     |     Trace les spawns/disparitions d'un boss personnalisé. Nécessite que le mode débogage soit activé.     |
| `/em debugtp <uuid>`     |     Téléporte à l'emplacement d'un boss personnalisé tracé. Nécessite que le mode débogage soit activé.     |
| `/em generateresourcepack`     |     Génère un pack de ressources. Consultez l'entrée du wiki sur les modèles personnalisés pour savoir comment l'utiliser.     |
| `/em updateresourcepack`     |     Met à jour le SHA1 du pack de ressources dans le fichier de configuration server.properties. Consultez l'entrée du wiki sur les modèles personnalisés pour savoir comment l'utiliser.     |

# Autorisations brutes :
```
permissions:
  elitemobs.*:
    description: Gives access to all elitemobs commands
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Allows players to run /elitemobs stats
    default: op
  elitemobs.version:
    description: Allows players to run /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.shop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.customshop.npc:
    description: Allows players to interact with NPCs for dynamic shops
    default: true
  elitemobs.customshop.command:
    description: Allows players to open the dynamic shop menu through commands
    default: true
  elitemobs.currency.pay:
    description: Allows players to run /elitemobs pay [username] [amount]
    default: true
  elitemobs.currency.check:
    description: Allows players to run /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Allows players to run /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Allows players to launch all events
    default: true
  elitemobs.checktier.others:
    description: Allows players to run /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Allows players tu run /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Allows players to get notified about plugin updates
    default: op
  elitemobs.adventurersguild.teleport:
    description: Allows players to teleport to the adventurer's guild hub using /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Allows players to rank menu using the /em adventurersguild command
    default: true
  elitemobs.rank.command:
    description: Allows players to open the rank menu through /em rank
    default: true
  elitemobs.rank.npc:
    description: Allows players to access the /em rank menu through NPCs
    default: true
  elitemobs.quest.command:
    description: Allows players to take on quests via command
    default: true
  elitemobs.quest.npc:
    description: Allows players to take on quests via EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Allows players to teleport to an elitemobs-set location
    default: true
  elitemobs.spawntp:
    description: Allows players to teleport to the default spawn location of the server.
    default: true
  elitemobs.back.npc:
    description: Allows players to interact with an npc to go back to a previous location.
    default: true
  elitemobs.shareitem:
    description: Shares a held Elite Item on chat.
    default: true
  elitemobs.scrap.npc:
    description: Allows players to scrap items at an npc
    default: true
  elitemobs.scrap.command:
    description: Allows players to scrap items using a command
    default: true
  elitemobs.smelt.command:
    description: Allows players to smelt items using a command
    default: true
  elitemobs.smelt.npc:
    description: Allows players to smelt items using an npc
    default: true
  elitemobs.repair.command:
    description: Allows players to use the repair command to open the menu for repairing elite items
    default: true
  elitemobs.repair.npc:
    description: Allows players to interact with the NPC for repairing items
    default: true
  elitemobs.refiner.command:
    description: Allows players to use the refiner command to open the menu for upgrading Elite Scrap
    default: true
  elitemobs.refiner.npc:
    description: Allows players to interact with the NPC for upgrading Elite Scrap
    default: true
  elitemobs.enhancer.command:
    description: Allows players to use the enhancer command to open the menu for upgrading Elite Items
    default: true
  elitemobs.enhancer.npc:
    description: Allows players to interact with the NPC for upgrading Elite Items
    default: true
  elitemobs.unbind.command:
    description: Allows players to use the unbind command to open the menu for unbinding Elite Items
    default: true
  elitemobs.unbind.npc:
    description: Allows players to interact with the unbinder NPC for unbind Elite Items
    default: true
  elitemobs.soulbind.bypass:
    description: Allows users to bypass the soulbind restrictions. Only recommended for admins!
    default: false
  elitequest.*:
    description: Used for quest-related permissions
    default: false
    op: false
```

```

