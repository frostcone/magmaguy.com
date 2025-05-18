Voici la traduction en français, en conservant le formatage markdown :

# Monde de la Guilde des Aventuriers

### Qu'est-ce que le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers est le nom d'un monde préfabriqué créé pour EliteMobs par Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### À quoi sert le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers sert de hub pour EliteMobs. En hébergeant le hub, les joueurs n'ont plus besoin de mémoriser de commandes (autres que /em) pour interagir avec les fonctionnalités d'EliteMobs.

Dans ce monde, les PNJ suivants sont placés à l'avance :

- Transporteur (pour retourner à votre emplacement précédent)
- Guide (quête d'introduction pour rencontrer tous les PNJ)
- Préposé de la Guilde (pour améliorer les [Rangs de Guilde](fr/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Téléporteurs de Donjons (PNJ spéciaux qui téléporteront les joueurs vers tous les [Donjons](fr/elitemobs/dungeons.md) installés)
- Barman (actuellement non implémenté)
- Donneur de Quêtes (pour parcourir et accepter des quêtes générées aléatoirement)
- Forgeron (pour acheter des objets générés de manière procédurale et vendre les butins des mobs élites)
- Forgeron Spécial (pour acheter des objets personnalisés et vendre les butins des mobs élites)
- Instructeur de Combat (pour donner des conseils sur le combat dans EliteMobs)
- Trous de Ver (portails qui téléporteront les joueurs vers les [Donjons](fr/elitemobs/dungeons.md) et tout autre contenu installé)
- Maître d'Arène (ce PNJ permettra aux joueurs de participer à l'[Arène de la Ligue de Bois](fr/elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Quêtes du Mode Histoire (permet aux joueurs de prendre des quêtes pour les [Donjons du Mode Histoire](www.magmaguy.com))
- Délie-Objets (permet aux joueurs de [Délier](fr/elitemobs/item_upgrade_system.md&section=unbinding-items) leur butin EliteMobs moyennant un prix)
- Broyeur (permet aux joueurs de convertir tout butin indésirable en [Débris](fr/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Réparateur (les joueurs peuvent interagir avec ce PNJ pour [Réparer](fr/elitemobs/item_upgrade_system.md&section=repairing-elite-items) leurs objets en utilisant des débris)
- Enchanteur (permet aux joueurs d'[Enchanter](fr/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) leurs objets)

De plus, il comprend un bâtiment de guilde des aventuriers pour les PNJ, ainsi qu'une Arène EliteMobs (actuellement non implémentée, à venir prochainement !).

### Comment configurer le Monde de la Guilde des Aventuriers

Pour installer le Monde de la Guilde des Aventuriers, procédez comme suit :

1. Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir les liens de téléchargement.

2. Téléchargez / déplacez les fichiers dans le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de placer les fichiers **ZIPÉS** à l'intérieur du dossier `imports` sans les modifier de quelque manière que ce soit, EliteMobs extraira automatiquement les fichiers et les déplacera aux bons emplacements.

3. Redémarrez ou faites `/em reload`. Après quelques secondes, lorsque vous ferez `/em setup`, les indicateurs des fonctionnalités que vous avez téléchargées devraient être jaunes.

4. Cliquez sur le verre jaune dans le menu `/em setup` pour installer les fonctionnalités importées. Si tout s'est installé correctement, vous devriez vous trouver dans le monde du hub de la Guilde des Aventuriers. Vous pouvez vous téléporter à la Guilde des Aventuriers à tout moment en faisant `/ag`.

#### Configuration du Trou de Ver

Après avoir installé le monde du hub de lailde des Aventuriers, vous remarquerez qu'il y a un trou de ver situé là où les joueurs se téléportent. Ce trou de ver est censé être configuré par vous, pour ramener les joueurs à l'emplacement d'apparition de votre monde habituel ou à tout autre emplacement central de votre serveur.

Pour configurer le trou de ver, naviguez jusqu'au répertoire *~plugins\EliteMobs\wormholes* et ouvrez *adventurers_guild_wormhole.yml*. Localisez la valeur `location2` et remplacez `your_world_here` par le nom de votre monde, suivi des coordonnées correctes où les joueurs doivent être téléportés.