# Monde de la Guilde des Aventuriers

### Qu'est-ce que le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers est le nom d'un monde pré-fait créé pour EliteMobs par Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### À quoi sert le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers sert de centre pour EliteMobs. En hébergeant le centre, les joueurs n'ont plus besoin de mémoriser aucune commande (autre que /em) pour interagir avec les fonctionnalités d'EliteMobs.

Dans le monde, les PNJ suivants sont placés à l'avance :

- Transporteur (pour retourner à votre emplacement précédent)
- Guide (quête d'introduction pour rencontrer tous les PNJ)
- Assistant de guilde (pour améliorer les [Rangs de guilde]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Téléporteurs de donjon (PNJ spéciaux qui téléporteront les joueurs vers n'importe quel [Donjon]($language$/elitemobs/dungeons.md) installé)
- Barman (actuellement non implémenté)
- Donneur de quête (pour parcourir et accepter des quêtes générées aléatoirement)
- Forgeron (pour acheter des objets générés procéduralement et vendre des drops de mobs d'élite)
- Forgeron spécial (pour acheter des objets personnalisés et vendre des drops de mobs d'élite)
- Instructeur de combat (pour donner des conseils sur le combat d'EliteMobs)
- Trous de ver (portails qui téléporteront les joueurs vers des [Donjons]($language$elitemobs/dungeons.md) et tout autre contenu installé)
- Maître de l'arène (ce PNJ permettra aux joueurs de participer à l' [Arène de la Ligue de Bois]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Quêtes du mode histoire (permet aux joueurs de faire des quêtes pour les [Donjons du mode histoire](www.magmaguy.com))
- Délieur (permet aux joueurs de [Délier]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) leur butin EliteMobs contre un prix)
- Déchiqueteur (permet aux joueurs de convertir tout butin indésirable en [Déchets]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Réparateur (les joueurs peuvent interagir avec ce PNJ pour [Réparer]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) leurs objets en utilisant des déchets)
- Enchanteur (permet aux joueurs d'[Enchanter]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) leurs objets)

De plus, il comprend un bâtiment de guilde des aventuriers pour les PNJ, ainsi qu'une arène EliteMobs (actuellement non implémentée, à venir bientôt!).

### Comment configurer le Monde de la Guilde des Aventuriers

Pour installer le Monde de la Guilde des Aventuriers, procédez comme suit :

1. Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir des liens vers les téléchargements.

2. Téléchargez / déplacez les fichiers dans le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de placer les fichiers **ZIP** dans le dossier `imports` sans les modifier de quelque manière que ce soit, EliteMobs extraira automatiquement les fichiers et les déplacera vers les emplacements corrects.

3. Redémarrez ou faites `/em reload`. Après quelques secondes, lorsque vous faites `/em setup`, les indicateurs des fonctionnalités que vous avez téléchargées devraient être jaunes.

4. Cliquez sur le verre jaune dans le menu `/em setup` pour installer les fonctionnalités importées. Si tout s'est bien installé, vous devriez être dans le monde central de la Guilde des Aventuriers. Vous pouvez vous téléporter à la Guilde des Aventuriers à tout moment en faisant `/ag`.

#### Configuration du Trou de Ver

Après avoir installé le monde central de la Guilde des Aventuriers, vous remarquerez qu'il y a un trou de ver situé à l'endroit où les joueurs se téléportent. Ce trou de ver est censé être configuré par vous, pour vous ramener à votre point de spawn du monde régulier ou à tout autre emplacement central de votre serveur.

Pour configurer le trou de ver, naviguez dans le répertoire *~plugins\EliteMobs\wormholes* et ouvrez *adventurers_guild_wormhole.yml*. Localisez la valeur `location2` et remplacez `your_world_here` par le nom de votre monde, suivi des coordonnées correctes vers lesquelles les joueurs doivent être téléportés. 


