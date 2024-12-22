À partir d'EliteMobs 7.3.12, des modèles personnalisés ont été ajoutés à EliteMobs
via [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)
et [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Avant-propos

Du point de vue d'EliteMobs, le système de modèles personnalisés est très simple, car la seule chose que les
administrateurs ont à faire est d'ajouter une ligne à un fichier de configuration de PNJ ou de boss personnalisé en lui
indiquant quel modèle personnalisé utiliser. Cependant, il est nécessaire de prendre les mesures correctes avec Model
Engine et Minecraft afin de rendre ce système pleinement fonctionnel, et celles-ci ne sont pas aussi faciles à mettre en
place.

Ce guide entrera dans les détails en ce qui concerne l'interface avec Model Engine et Minecraft. Il ne vous expliquera
pas comment utiliser Blockbench pour créer des boss personnalisés, ni n'entrera dans les détails du fonctionnement de
Model Engine. Il existe déjà de nombreux guides sur la façon de le faire ailleurs, et si vous voulez en savoir plus sur
ces systèmes, il est préférable de consulter directement leur documentation.

## FreeMineCraft Models

Si vous voulez savoir comment utiliser FMM pour faire fonctionner vos modèles, vous pouvez
consulter [cette]($language$/freeminecraftmodels/info.md) page wiki pour en savoir plus.

# Exigences minimales

EliteMobs 7.3.12 ou version ultérieure, Model Engine R2.2.0\* ou version ultérieure, Blockbench\*\*, et l'utilisation de
packs de ressources Minecraft.

\* Ce plugin peut avoir d'autres dépendances. Vérifiez la documentation de leur côté.  
\*\* Nécessaire pour créer et modifier des modèles personnalisés. Pas nécessaire si vous cherchez simplement à installer
du contenu sans le modifier.

# Définition manuelle d'un modèle personnalisé

Remarque: ce guide suppose que vous avez déjà un modèle personnalisé valide. Ceux-ci se présentent sous forme de
fichiers Blockbench (`.bbmodel`).

EliteMobs est capable d'utiliser des modèles personnalisés pour les PNJ et les boss personnalisés. Le processus pour ce
faire est le même pour les deux, et il est le suivant:

## Étape 1. Définition de la configuration d'EliteMobs

Allez dans le fichier de configuration du boss personnalisé ou du PNJ que vous souhaitez modifier et ajoutez la ligne
suivante:

```yaml
customModel: nom_du_modèle
```

Remplacez `nom_du_modèle` par le nom de votre modèle. Le nom est le nom du fichier de modèle personnalisé que vous
utilisez. Par exemple, le fichier de modèle personnalisé du boss de test est `showcase_boss.bbmodel`. Par conséquent,
l'option de configuration doit être la suivante:

```yaml
customModel: showcase_boss
```

Et c'est tout pour EliteMobs! Maintenant, ça devient un peu plus compliqué.

## Étape 2. Génération des données de Model Engine

[_Remarque: en cas de doute ou de problème, consultez le wiki de Model Engine
ici._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. Placez votre fichier Blockbench de modèle personnalisé (`.bbmodel`) dans le
   répertoire `(votreServeur)/plugins/ModelEngine/blueprints` .
2. Exécutez la commande `/meg reload` . Si tout a fonctionné correctement, vous devriez recevoir un message
   indiquant `[Model Engine] X modèles chargés` , où `x` est le nombre de modèles que vous avez enregistrés.

## Étape 3. Génération du pack de ressources

[**Remarque: il existe maintenant une autre façon plus simple de réaliser cette étape sur ce lien.
**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Cependant, elle est un peu moins
flexible que celle qui est listée ici.

C'est peut-être la partie la plus délicate si vous cherchez à faire en sorte que votre serveur gère les téléchargements.
**Essayez de vérifier si le système fonctionne lorsque vous avez le pack de ressources sur votre client avant de
chercher à le distribuer automatiquement!**

1. Allez dans le répertoire `(votreServeur)/plugins/ModelEngine/resource pack` et créez un pack de ressources en
   utilisant ces données ou ajoutez le dossier `assets` dans le dossier `assets` de votre pack de ressources.
    1. Si vous créez un nouveau pack de ressources, vous pouvez mettre les fichiers dans `resource pack` dans un fichier
       compressé, et ce sera un pack de ressources valide que vous pourrez
       distribuer. [Plus d'informations](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2. Si vous avez déjà un pack de ressources, assurez-vous de ne pas écraser accidentellement les modèles
       existants. [Plus d'informations](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2. Distribuez votre pack de ressources à vos joueurs. **Seuls les joueurs qui ont le pack de ressources pourront voir
   les modèles personnalisés**, et il paraîtra très bizarre et cassé pour tous les autres. Si vous avez l'intention d'en
   faire un usage intensif, vous pouvez forcer l'utilisation du pack de ressources.
    1. (Facultatif) Pour permettre aux joueurs de télécharger un pack de ressources lors de leur connexion, vous devrez
       héberger le fichier quelque part en ligne et modifier le champ `resource-pack=` du fichier server.properties pour
       qu'il pointe vers cette adresse.**\***
    2. (Facultatif)Si vous modifiez les packs de ressources, vous devez utiliser l'option `resource-pack-sha1=` afin que
       le serveur puisse vérifier si le pack de ressources du joueur doit être mis à jour. Pour générer cette valeur,
       téléchargez votre pack de ressources sur [http://onlinemd5.com/](http://onlinemd5.com/) et assurez-vous de
       choisir l'option SHA1. Vous devrez le faire chaque fois que vous mettrez à jour votre pack de ressources, sinon
       vos utilisateurs ne recevront pas la mise à jour.**\***
    3. (Facultatif)Pour forcer les joueurs à utiliser les packs de ressources, utilisez
       l'option `require-resource-pack=true` dans server.properties.**\***

**Si vous avez modifié server.properties, vous devrez redémarrer!**

**\*** Remarque: il existe de nombreux guides en ligne qui peuvent vous aider à faire fonctionner cela si ces
instructions ne vous aident pas.

### Fusionner les packs de ressources

Si vous avez besoin de fusionner vos packs de ressources, vous pouvez le faire manuellement. Mais nous vous recommandons
d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de
ressources.

## Étape 4. Espérer que ça marche

Si tout a été fait correctement, vous devriez maintenant pouvoir voir le modèle personnalisé sur votre boss ou votre
PNJ. Vous pouvez les faire apparaître via les commandes:

* Boss personnalisé: `/em spawncustom nom_fichier.yml`
* PNJ: `/em spawnnpc nom_fichier.yml`

Vous pouvez ensuite les supprimer via la commande `/em remove`.

# Création et adaptation de modèles personnalisés pour EliteMobs

EliteMobs est capable d'utiliser tout modèle considéré comme valide par Model Engine, ce qui signifie qu'il n'y a pas
grand-chose qui ne puisse être fait avec lui.

Cependant, en ce qui concerne les animations, l'utilisation de noms spécifiques pour les animations est nécessaire pour
garantir que les boss peuvent utiliser les animations.

Ces noms d'animation sont ceux qui sont définis sur Blockbench dans l'onglet des animations. Vous pouvez les renommer à
tout moment, ce qui signifie que vous pouvez adapter n'importe quel modèle existant pour qu'il fonctionne avec
EliteMobs.

## Animations

Veuillez noter que cette section est encore en expansion, car ce système est encore très récent. D'autres éléments y
seront ajoutés au fur et à mesure des demandes de fonctionnalités.

### idle

`idle` est le nom d'animation correct pour les entités qui ne sont pas en combat et qui ne bougent pas. EliteMobs ne
modifie pas le système d'animation idle par défaut utilisé par Model Engine.

### walk

`walk` est le nom d'animation correct pour les entités qui se déplacent. EliteMobs ne modifie pas le système d'animation
idle par défaut utilisé par Model Engine.

### attack

Il existe trois types d'animations d'attaque:

#### attack

`attack` est le nom d'animation générique correct lorsqu'un boss attaque.

#### attack_melee

`attack_melee` est le nom d'animation correct pour les attaques effectuées lorsqu'un boss personnalisé attaque une
entité en utilisant une attaque de mêlée vanilla de Minecraft. Remplace `attack` . Veuillez noter que l'animation est
jouée **après** que les dégâts ont été infligés. C'est malheureusement une limitation pour le moment. Par conséquent,
essayez de rendre l'animation très rapide.

#### attack_ranged

`attack_ranged` est le nom d'animation correct pour les attaques effectuées lorsqu'un boss personnalisé génère une
entité projectile. Remplace `attack`. Veuillez noter que l'animation est jouée **après** le tir du projectile. C'est
malheureusement une limitation pour le moment. Par conséquent, essayez de rendre l'animation très rapide.

### damaged

`damaged` est le nom d'animation correct pour l'animation de douleur qu'un boss personnalisé joue lorsqu'il est
endommagé.

### death

`death` est le nom d'animation correct pour l'animation de mort. EliteMobs ne modifie pas le système d'animation idle
par défaut utilisé par Model Engine.

### powers

Remarque: ce segment est encore en cours de développement. Les éléments suivants sont les fonctionnalités telles
qu'elles sont prévues.

Chaque pouvoir dans EliteMobs peut avoir une animation qui lui est assignée. L'animation démarre toujours lorsque le
pouvoir est déclenché, et aucun autre déclencheur n'est actuellement fourni tout au long de l'utilisation du pouvoir.
Certains pouvoirs, tels que les invulnérabilités, ne feront rien car ils n'ont pas de déclencheurs et ne sont que des
propriétés passives des boss.

Afin d'assigner une animation à un pouvoir, l'animation doit être nommée de la même manière que le fichier de pouvoir d'
elitemobs.

Par exemple, pour ajouter une animation au pouvoir de nécromancien zombie, l'animation doit être
appelée `zombie_necronomicon.yml` . Elle commencera à être jouée dès que le pouvoir est déclenché, et se terminera
lorsque l'animation se terminera si elle n'est pas réglée sur boucle ou lorsque le pouvoir est terminé.

# Importation de modèles personnalisés à partir de donjons

## Étape 1. Importation normale

Lors de l'importation d'un dossier zippé de pack de donjons contenant des modèles personnalisés, les modèles
personnalisés sont automatiquement déplacés vers `(votreServeur)/plugins/ModelEngine/blueprints` et Model Engine est
automatiquement rechargé pour générer le pack de ressources et les fichiers Model Engine pertinents.

## Étape 2. Génération du pack de ressources

Si vous êtes en ligne lorsque vous rechargez EliteMobs afin d'importer des fichiers, EliteMobs publiera automatiquement
un message dans le chat sur lequel vous pouvez cliquer pour générer le pack de ressources EliteMobs. Vous pouvez
également exécuter la commande `/em generateresourcepack` pour le générer.

L'exécution de cette commande copie tous les fichiers du pack de ressources dans le dossier `exports` d'EliteMobs de
manière non destructive. Cela signifie que si vous décompressez un pack de ressources dans le dossier exports en
utilisant le nom de pack de ressources `elitemobs_resource_pack` pour votre dossier de pack de ressources, EliteMobs ne
supprimera aucun des fichiers qui s'y trouvent, à moins qu'un fichier portant le même nom ne soit obtenu à partir de
ModelEngine (à l'exception de pack.meta et pack.png). De cette façon, vous pouvez mettre à jour votre pack de ressources
sans perdre les modèles que vous y avez précédemment ajoutés.

Enfin, EliteMobs zippe le pack de ressources dans le dossier `exports`, et ce fichier est prêt à être distribué.

Une fois que cela est fait, EliteMobs suggère également de mettre à jour le code SHA1 de votre pack de ressources.

### Étape 2.5. Mise à jour du SHA1

Le code SHA1 dans le fichier `server.properties` est utilisé pour informer les clients si leur pack de ressources est
obsolète, et les fait mettre à jour si nécessaire. Ce code peut être généré par EliteMobs en cliquant sur l'option du
chat qui apparaît après l'étape 2, ou en exécutant la commande `/em updateresourcepack`.

**Gardez à l'esprit que cela met à jour votre fichier server.properties avec le code SHA1 correct pour le pack de
ressources zippé dans le dossier `exports`.** Si vous le supprimez ou si vous modifiez le fichier zippé après avoir
exécuté la commande, cela ne fonctionnera pas.

## Étape 3. Rendre le fichier accessible au public

Hébergez le fichier à l'endroit de votre choix. Certaines personnes utilisent Google Drive ou Dropbox pour cela. Il est
préférable d'héberger ce fichier vous-même, si vous en avez la possibilité. Certains plugins peuvent également vous
aider à l'héberger directement depuis votre serveur Minecraft. Si vous trouvez un plugin comme celui-là qui fonctionne,
faites-le savoir à MagmaGuy sur Discord et cet article sera mis à jour avec cette info.
