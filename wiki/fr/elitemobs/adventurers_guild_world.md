# Monde de la Guilde des Aventuriers

### Qu'est-ce que le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers est le nom d'un monde préfabriqué créé pour EliteMobs par Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### À quoi sert le Monde de la Guilde des Aventuriers ?

Le Monde de la Guilde des Aventuriers sert de plaque tournante pour EliteMobs. En hébergeant la plaque tournante, les
joueurs n'ont plus à mémoriser de commandes (autres que /em) pour interagir avec les fonctionnalités d'EliteMobs.

Dans ce monde, les PNJ suivants sont placés à l'avance:

- Transporteur (pour retourner à votre emplacement précédent)
- Guide (quête d'introduction pour rencontrer tous les PNJ)
- Préposé de la Guilde (pour améliorer
  les [Rangs de la Guilde]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Téléporteurs de Donjons (PNJ spéciaux qui téléporteront les joueurs vers n'importe
  quel [Donjon]($language$/elitemobs/dungeons.md) installé)
- Barman (actuellement non implémenté)
- Donneurs de Quêtes (pour parcourir et accepter des quêtes générées aléatoirement)
- Forgeron (pour acheter des objets générés de manière procédurale et vendre des butins de monstres d'élite)
- Forgeron Spécial (pour acheter des objets personnalisés et vendre des butins de monstres d'élite)
- Instructeur de Combat (pour donner des conseils sur le combat d'EliteMobs)
- Trous de ver (portails qui téléporteront les joueurs vers [Donjons]($language$elitemobs/dungeons.md) et tout autre
  contenu installé)
- Maître d'Arène (ce PNJ permettra aux joueurs de participer
  à [l'Arène de la Ligue de Bois]($language$elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Quêtes du Mode Histoire (permet aux joueurs d'accepter des quêtes pour
  les [Donjons du Mode Histoire](www.magmaguy.com))
- Délieur (permet aux joueurs de [Délier]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) leurs
  butins EliteMobs pour un prix)
- Ferrailleur (permet aux joueurs de convertir tout butin indésirable
  en [Ferraille]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Réparateur (les joueurs peuvent interagir avec ce PNJ
  pour [Réparer]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) leurs objets en utilisant de
  la ferraille)
- Enchanteur (permet aux
  joueurs [d'Enchanter]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) leurs objets)

De plus, il comprend un bâtiment de guilde d'aventuriers pour les PNJ, ainsi qu'une Arène EliteMobs (actuellement non
implémentée, à venir prochainement!).

### Comment configurer le Monde de la Guilde des Aventuriers

Pour installer le Monde de la Guilde des Aventuriers, procédez comme suit:

1. Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir des liens vers les téléchargements.

2. Téléchargez/déplacez les fichiers vers le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de
   placer les fichiers **ZIPPÉS** dans le dossier `imports` sans les modifier d'aucune façon, EliteMobs extraira
   automatiquement les fichiers et les déplacera aux emplacements corrects.

3. Redémarrez ou faites `/em reload`. Après quelques secondes, lorsque vous faites `/em setup`, les indicateurs des
   fonctionnalités que vous avez téléchargées devraient être jaunes.

4. Cliquez sur le verre jaune dans le menu `/em setup` pour installer les fonctionnalités importées. Si tout est
   installé correctement, vous devriez vous trouver dans le monde de la plaque tournante de la Guilde des Aventuriers.
   Vous pouvez vous téléporter à la Guilde des Aventuriers à tout moment en faisant `/ag`.

#### Configuration du Trou de Ver

Après avoir installé le monde de la plaque tournante de la Guilde des Aventuriers, vous remarquerez qu'il y a un trou de
ver situé à l'endroit où les joueurs se téléportent. Ce trou de ver est censé être configuré par vous, pour ramener à
votre point d'apparition régulier ou à tout autre endroit central de votre serveur.

Pour configurer le trou de ver, naviguez jusqu'au répertoire *~plugins\EliteMobs\wormholes* et ouvrez
*adventurers_guild_wormhole.yml*. Repérez la valeur `location2` et remplacez `your_world_here` par le nom de votre
monde, suivi des coordonnées correctes où les joueurs doivent être téléportés.
