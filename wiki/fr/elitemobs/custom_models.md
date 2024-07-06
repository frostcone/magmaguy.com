```
## Traduire en français:

À partir d'EliteMobs 7.3.12, les modèles personnalisés ont été ajoutés à EliteMobs via [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) et [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Avant-propos

Du point de vue d'EliteMobs, le système de modèle personnalisé est très simple, car la seule chose que les administrateurs doivent faire est d'ajouter une ligne au fichier de configuration d'un PNJ ou d'un boss personnalisé pour lui indiquer quel modèle personnalisé utiliser. Cependant, il est nécessaire de prendre les mesures appropriées avec Model Engine et Minecraft afin de rendre ce système pleinement fonctionnel, et celles-ci ne sont pas aussi faciles à comprendre.

Ce guide détaillera l'interface avec Model Engine et Minecraft. Il ne vous dira pas comment utiliser Blockbench pour créer des boss personnalisés, ni ne détaillera le fonctionnement de Model Engine. Il existe déjà de nombreux guides sur la façon de le faire ailleurs, et si vous souhaitez en savoir plus sur ces systèmes, il est préférable de consulter directement leur documentation.

## FreeMineCraft Models

Si vous souhaitez savoir comment utiliser FMM pour que vos modèles fonctionnent, vous pouvez consulter [cette]($language$/freeminecraftmodels/info.md) page wiki pour en savoir plus.

# Configuration minimale requise

EliteMobs 7.3.12 ou version ultérieure, Model Engine R2.2.0\* ou version ultérieure, Blockbench\*\*, un pack de ressources Minecraft.

\* Ce plugin peut avoir d'autres dépendances. Consultez la documentation de leur côté.
\*\* Nécessaire pour créer et éditer des modèles personnalisés. Non nécessaire si vous souhaitez simplement installer du contenu sans le modifier.

# Définir manuellement un modèle personnalisé

Remarque : Ce guide suppose que vous avez déjà un modèle personnalisé valide. Ceux-ci sont livrés dans les formats de fichiers Blockbench (`.bbmodel`).

EliteMobs est capable d'utiliser des modèles personnalisés pour les PNJ et les boss personnalisés. Le processus à suivre est le même pour les deux, et est le suivant :

## Étape 1. Définir la configuration EliteMobs

Allez dans le fichier de configuration du boss personnalisé ou du PNJ que vous souhaitez modifier et ajoutez la ligne suivante :

```yaml
customModel: nom_du_modele
```

Remplacez `nom_du_modele` par le nom de votre modèle. Le nom est le nom du fichier du modèle personnalisé que vous utilisez. Par exemple, le fichier du modèle personnalisé du boss de test est `showcase_boss.bbmodel`. Ainsi, l'option de configuration doit être

```yaml
customModel: showcase_boss
```

Et c'est tout pour EliteMobs ! Maintenant, cela devient un peu plus compliqué.

## Étape 2. Génération des données de Model Engine

[_Remarque : En cas de doute ou de problèmes, reportez-vous au wiki de Model Engine ici._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Placez votre fichier Blockbench du modèle personnalisé (`.bbmodel`) dans le répertoire `(votreServeur)/plugins/ModelEngine/blueprints`.
2.  Exécutez la commande `/meg reload`. Si tout a bien fonctionné, vous devriez recevoir un message disant `[Model Engine] X modèles chargés`, où `x` est le nombre de modèles que vous avez enregistrés.

## Étape 3. Génération du pack de ressources

[**Remarque : il existe maintenant une alternative plus simple pour effectuer cette étape sur ce lien.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Cependant, elle est un peu moins flexible que ce qui est indiqué ici.

C'est peut-être la partie la plus délicate si vous souhaitez que votre serveur gère les téléchargements. **Essayez de vérifier si le système fonctionne lorsque vous avez le pack de ressources sur votre client avant de vous pencher sur sa distribution automatique !**

1.  Allez dans le répertoire `(votreServeur)/plugins/ModelEngine/resource pack` et créez un pack de ressources à partir de ces données ou ajoutez le dossier `assets` à votre pack de ressources `assets`
    1.  Si vous créez un nouveau pack de ressources, vous pouvez placer les fichiers dans `resource pack` dans un fichier zippé, et ce sera un pack de ressources valide que vous pouvez distribuer. [Plus d'infos](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Si vous avez déjà un pack de ressources, assurez-vous de ne pas écraser accidentellement des modèles existants. [Plus d'infos](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribuez votre pack de ressources à vos joueurs. **Seuls les joueurs qui ont le pack de ressources pourront voir les modèles personnalisés**, et il aura l'air très bizarre et cassé pour tous les autres. Si vous avez l'intention de les utiliser intensivement, vous pouvez envisager de forcer l'utilisation du pack de ressources.
    1.  (Optionnel) Pour permettre aux joueurs de télécharger un pack de ressources à la connexion, vous devrez héberger le fichier en ligne et modifier le champ `resource-pack=` du fichier server.properties pour qu'il pointe vers cette adresse.**\***
    2.  (Optionnel) Si vous modifiez les packs de ressources, vous devrez utiliser l'option `resource-pack-sha1=` pour que le serveur puisse vérifier si le pack de ressources du joueur doit être mis à jour. Pour générer cette valeur, téléchargez votre pack de ressources sur [http://onlinemd5.com/](http://onlinemd5.com/) et assurez-vous de choisir l'option SHA1. Vous devrez le faire à chaque fois que vous mettez à jour votre pack de ressources, sinon vos utilisateurs ne bénéficieront pas de la mise à jour.**\***
    3.  (Optionnel) Pour forcer les joueurs à utiliser des packs de ressources, utilisez l'option `require-resource-pack=true` dans server.properties.**\***

**Si vous avez modifié server.properties, vous devrez redémarrer !**

**\*** Remarque : Il existe de nombreux guides en ligne qui peuvent vous aider à faire fonctionner ce système si ces instructions ne vous aident pas.

### Fusionner les packs de ressources

Si vous devez fusionner vos packs de ressources, vous pouvez le faire manuellement. Mais nous vous recommandons d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

## Étape 4. J'espère que cela fonctionne

En supposant que tout a été fait correctement, vous devriez maintenant pouvoir voir le modèle personnalisé sur votre boss ou votre PNJ. Vous pouvez les faire apparaître via les commandes :

*   Boss personnalisé : `/em spawncustom nom_de_fichier.yml`
*   PNJ : `/em spawnnpc nom_de_fichier.yml`

Vous pouvez ensuite les supprimer à l'aide de la commande `/em remove`.

# Création et adaptation de modèles personnalisés pour EliteMobs

EliteMobs est capable d'utiliser n'importe quel modèle considéré comme valide par Model Engine, ce qui signifie qu'il n'y a pas grand-chose qui ne puisse pas être fait avec lui.

Cependant, en ce qui concerne les animations, l'utilisation de noms spécifiques pour les animations est nécessaire pour garantir que les boss peuvent utiliser les animations.

Ces noms d'animation sont ceux définis sur Blockbench dans l'onglet des animations. Vous pouvez les renommer à tout moment, ce qui signifie que vous pouvez adapter tous les modèles existants pour qu'ils fonctionnent avec EliteMobs.

## Animations

Veuillez noter que cette section est encore en expansion, car ce système est encore très récent. Plus d'informations seront ajoutées à mesure que les demandes de fonctionnalités seront reçues.

### idle

`idle` est le nom d'animation correct pour les entités qui ne sont pas au combat et qui ne bougent pas. EliteMobs ne modifie pas le système d'animation par défaut `idle` utilisé par Model Engine.

### walk

`walk` est le nom d'animation correct pour les entités qui bougent. EliteMobs ne modifie pas le système d'animation par défaut `idle` utilisé par Model Engine.

### attack

Il existe trois types d'animations d'attaque :

#### attack

`attack` est le nom d'animation générique correct pour lorsqu'un boss attaque.

#### attack_melee

`attack_melee` est le nom d'animation correct pour les attaques effectuées lorsqu'un boss personnalisé attaque une entité à l'aide d'une attaque de mêlée Minecraft vanilla. Remplace `attack`. Veuillez noter que l'animation se déclenche **après** que les dégâts ont été infligés. C'est malheureusement une limitation pour le moment. Par conséquent, essayez de rendre l'animation très rapide.

#### attack_ranged

`attack_ranged` est le nom d'animation correct pour les attaques effectuées lorsqu'un boss personnalisé lance une entité projectile. Remplace `attack`. Veuillez noter que l'animation se déclenche **après** que le projectile a été tiré. C'est malheureusement une limitation pour le moment. Par conséquent, essayez de rendre l'animation très rapide.

### damaged

`damaged` est le nom d'animation correct pour l'animation de blessure qu'un boss personnalisé joue lorsqu'il est endommagé.

### death

`death` est le nom d'animation correct pour l'animation de mort. EliteMobs ne modifie pas le système d'animation par défaut `idle` utilisé par Model Engine.

### powers

Remarque : ce segment est encore en développement. Voici les fonctionnalités telles qu'elles sont prévues.

Chaque pouvoir dans EliteMobs peut avoir une animation qui lui est assignée. L'animation commence toujours lorsque le pouvoir est déclenché, et aucun autre déclencheur n'est actuellement fourni tout au long de l'utilisation du pouvoir. Certains pouvoirs, comme les invulnérabilités, ne feront rien car ils n'ont aucun déclencheur et ne sont que des propriétés passives des boss.

Pour assigner une animation à un pouvoir, l'animation doit avoir le même nom que le fichier du pouvoir d'elitemobs.

Par exemple, pour ajouter une animation au pouvoir du nécromancien zombie, l'animation doit s'appeler `zombie_necronomicon.yml`. Elle commencera à jouer dès que le pouvoir sera déclenché, et se terminera lorsque l'animation se terminera si elle n'est pas définie pour boucler ou lorsque le pouvoir est terminé.

# Importer des modèles personnalisés depuis des donjons

## Étape 1. Importation normale

Lors de l'importation d'un dossier zippé de packager de donjon qui contient des modèles personnalisés, les modèles personnalisés sont automatiquement déplacés vers `(votreServeur)/plugins/ModelEngine/blueprints` et Model Engine se recharge automatiquement pour générer le pack de ressources et les fichiers de Model Engine correspondants.

## Étape 2. Génération du pack de ressources

Si vous êtes en ligne lorsque vous rechargez EliteMobs afin d'importer des fichiers, EliteMobs affichera automatiquement un message dans le chat que vous pouvez cliquer pour générer le pack de ressources d'EliteMobs. Alternativement, vous pouvez exécuter la commande `/em generateresourcepack` pour le générer.

L'exécution de cette commande copie tous les fichiers du pack de ressources dans le dossier `exports` d'EliteMobs de manière non destructive. Cela signifie que si vous décompressez un pack de ressources dans le dossier `exports` en utilisant le nom du pack de ressources `elitemobs_resource_pack` pour votre dossier du pack de ressources, EliteMobs ne supprimera aucun des fichiers qui s'y trouvent, sauf si un fichier du même nom est obtenu de Model Engine (sauf pack.meta et pack.png). Ainsi, vous pouvez mettre à jour votre pack de ressources sans perdre les modèles que vous y avez précédemment placés.

Enfin, EliteMobs zippe le pack de ressources dans le dossier `exports`, et ce fichier est prêt à être distribué

Une fois cela fait, EliteMobs suggère également de mettre à jour le code SHA1 de votre pack de ressources.

### Étape 2.5. Mise à jour du SHA1

Le code SHA1 dans le fichier `server.properties` est utilisé pour indiquer aux clients si leur pack de ressources est obsolète et les oblige à le mettre à jour si nécessaire. Ce code peut être généré par EliteMobs en cliquant sur l'option dans le chat qui apparaît après l'étape 2, ou en exécutant la commande `/em updateresourcepack`

**Gardez à l'esprit que cela met à jour votre fichier server.properties avec le code SHA1 correct pour le pack de ressources zippé dans le dossier `exports`.** Si vous le supprimez ou modifiez le fichier zippé après avoir exécuté la commande, cela ne fonctionnera pas.

## Étape 3. Rendre le fichier accessible au public

Hébergez le fichier à l'emplacement de votre choix. Certaines personnes utilisent Google Drive ou Dropbox pour cela. Il est préférable d'héberger ce fichier vous-même, si vous en avez la possibilité. Certains plugins peuvent également vous aider à l'héberger directement depuis votre serveur Minecraft. Si vous trouvez un plugin qui fonctionne, faites-le savoir à MagmaGuy sur Discord et ce post sera mis à jour avec ces informations.
```