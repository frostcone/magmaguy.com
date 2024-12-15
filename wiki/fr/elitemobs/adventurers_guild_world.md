# Le monde du Gremio de Aventureros

### Qu'est-ce que le monde du Gremio de Aventureros ?

Le monde du Gremio de Aventureros est le nom d'un monde préfabriqué créé pour EliteMobs par Realm of Lotheridon.

![ag_pic_1.jpg](../../../img/wiki/ag_pic_1.jpg)

### À quoi sert le monde du Gremio de Aventureros ?

Le monde du Gremio de Aventureros sert de hub pour EliteMobs. En hébergeant le hub, les joueurs n'ont plus à mémoriser
de commandes (autres que /em) pour interagir avec les fonctionnalités d'EliteMobs.

Dans le monde, les PNJ suivants sont placés à l'avance:

- Transporteur (pour retourner à votre emplacement précédent)
- Guide (quête d'introduction pour rencontrer tous les PNJ)
- Agent de guilde (pour améliorer
  les [rangs de guilde]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=step-2:-discovering-the-economy))
- Téléporteurs de donjons (PNJ spéciaux qui téléporteront les joueurs vers tous
  les [donjons]($language$/elitemobs/dungeons.md) installés)
- Barman (actuellement non implémenté)
- Donneur de quêtes (pour parcourir et accepter les quêtes générées de façon aléatoire)
- Forgeron (pour acheter des objets générés de façon procédurale et vendre du butin de mobs d'élite)
- Forgeron spécial (pour acheter des objets personnalisés et vendre du butin de mobs d'élite)
- Instructeur de combat (pour donner des conseils sur le combat d'EliteMobs)
- Trous de ver (portails qui téléporteront les joueurs vers les [donjons]($language$elitemobs/dungeons.md) et tout autre
  contenu installé)
- Maître de l'arène (ce PNJ permettra aux joueurs de participer à
  l'[arène de la ligue de bois]($language$/elitemobs/understanding_the_basics_of_elitemobs.md&section=arenas))
- Quêtes du mode histoire (permet aux joueurs d'accepter des quêtes pour
  les [donjons du mode histoire](www.magmaguy.com))
- Détacheur (permet aux joueurs de [détacher]($language$/elitemobs/item_upgrade_system.md&section=unbinding-items) leur
  butin EliteMobs moyennant un prix)
- Ferrailleur (permet aux joueurs de convertir tout butin indésirable
  en [ferraille]($language$/elitemobs/item_upgrade_system.md&section=scrapping-items))
- Réparateur (les joueurs peuvent interagir avec ce PNJ
  pour [réparer]($language$/elitemobs/item_upgrade_system.md&section=repairing-elite-items) leurs objets en utilisant de
  la ferraille)
- Enchanteur (permet aux joueurs
  d'[enchanter]($language$/elitemobs/item_upgrade_system.md&section=enchanting-elite-items) leurs objets)

De plus, il comprend un bâtiment de guilde d'aventuriers pour les PNJ, ainsi qu'une arène EliteMobs (actuellement non
implémentée, bientôt disponible!).

### Comment configurer le monde du Gremio de Aventureros

Pour installer le monde du Gremio de Aventureros, procédez comme suit:

1. Téléchargez les fichiers. Vous pouvez cliquer sur le verre rouge dans `/em setup` pour obtenir des liens vers les téléchargements.

2. Téléchargez/déplacez les fichiers vers le dossier `/plugins/EliteMobs/imports` de votre serveur. Assurez-vous de
   placer les fichiers **ZIPPÉS** à l'intérieur du dossier `imports` sans les modifier de quelque manière que ce soit,
   EliteMobs extraira automatiquement les fichiers et les déplacera vers les emplacements corrects.

3. Redémarrez ou faites `/em reload`. Après quelques secondes, lorsque vous faites `/em setup`, les indicateurs des
   fonctionnalités que vous avez téléchargées doivent être jaunes.

4. Cliquez sur le verre jaune dans le menu `/em setup` pour installer les fonctionnalités importées. Si tout s'est
   installé correctement, vous devriez être dans le monde central du Gremio de Aventureros. Vous pouvez vous téléporter
   au Gremio de Aventureros à tout moment en faisant `/ag`.

#### Configuration du trou de ver

Après avoir installé le monde central du Gremio de Aventureros, vous remarquerez qu'il y a un trou de ver situé à l'
endroit où les joueurs se téléportent. Ce trou de ver est censé être configuré par vous, pour revenir au point
d'apparition de votre monde habituel ou à tout autre emplacement central de votre serveur.

Pour configurer le trou de ver, accédez au répertoire *~plugins\EliteMobs\wormholes* et ouvrez
*adventurers_guild_wormhole.yml*. Localisez la valeur `location2` et remplacez `votre_monde_ici` par le nom de votre
monde, suivi des coordonnées correctes où les joueurs doivent être téléportés.
