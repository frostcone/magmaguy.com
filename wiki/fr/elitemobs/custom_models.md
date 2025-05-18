Voici la traduction en français, en conservant le formatage markdown :

À partir d'EliteMobs 7.3.12, les Modèles Personnalisés ont été ajoutés à EliteMobs via [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) et [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Avant-propos

Du point de vue d'EliteMobs, le système de Modèles Personnalisés est très simple, car la seule chose que les administrateurs ont à faire est d'ajouter une ligne dans le fichier de configuration d'un PNJ ou d'un Boss Personnalisé lui indiquant quel Modèle Personnalisé utiliser. Cependant, il est nécessaire de suivre les étapes correctes avec Model Engine et Minecraft afin de rendre ce système entièrement fonctionnel, et celles-ci ne sont pas aussi faciles à appréhender.

Ce guide détaillera l'interface avec Model Engine et Minecraft. Il ne vous expliquera pas comment utiliser Blockbench pour créer des boss personnalisés, ni ne détaillera le fonctionnement de Model Engine. Il existe déjà de nombreux guides sur ces sujets ailleurs, et si vous souhaitez en savoir plus sur ces systèmes, il est préférable de consulter directement leur documentation.

## FreeMineCraft Models

Si vous souhaitez apprendre comment utiliser FMM pour faire fonctionner vos modèles, vous pouvez consulter [cette]($language$/freeminecraftmodels/info.md) page wiki pour en savoir plus.

# Exigences minimales

EliteMobs 7.3.12 ou ultérieur, Model Engine R2.2.0\* ou ultérieur, Blockbench\*\*, utilisation de Packs de Ressources Minecraft.

\* Ce plugin peut avoir d'autres dépendances. Vérifiez la documentation de leur côté.
\*\* Nécessaire pour créer et éditer des Modèles Personnalisés. Pas nécessaire si vous cherchez juste à installer du contenu sans le modifier.

# Définir manuellement un Modèle Personnalisé

Note : Ce guide suppose que vous avez déjà un Modèle Personnalisé valide. Ceux-ci sont au format de fichier Blockbench (`.bbmodel`).

EliteMobs est capable d'utiliser des Modèles Personnalisés pour les PNJ et les Boss Personnalisés. Le processus est le même pour les deux, et est le suivant :

## Étape 1. Configurer EliteMobs

Allez dans le fichier de configuration du Boss Personnalisé ou du PNJ que vous souhaitez modifier et ajoutez la ligne suivante :

```yaml
customModel: nomdumodele
```

Remplacez `nomdumodele` par le nom de votre modèle. Le nom est le nom du fichier de Modèle Personnalisé que vous utilisez. Par exemple, le fichier de Modèle Personnalisé du Boss de Test est `showcase_boss.bbmodel`. Ainsi, l'option de configuration devrait être :

```yaml
customModel: showcase_boss
```

Et c'est tout pour EliteMobs ! Maintenant, cela devient un peu plus délicat.

## Étape 2. Générer les données de Model Engine

[_Note : En cas de doute ou de problème, référez-vous au wiki de Model Engine ici._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Placez votre fichier Blockbench de Modèle Personnalisé (`.bbmodel`) dans le répertoire `(votreServeur)/plugins/ModelEngine/blueprints`.
2.  Exécutez la commande `/meg reload`. Si tout a fonctionné correctement, vous devriez recevoir un message indiquant `[Model Engine] X models loaded`, où `x` est le nombre de modèles que vous avez enregistrés.

## Étape 3. Générer le Pack de Ressources

[**Note : il existe maintenant une alternative plus simple pour cette étape sur ce lien.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Cependant, elle est un peu moins flexible que ce qui est listé ici.

C'est peut-être la partie la plus délicate si vous souhaitez que votre serveur gère les téléchargements. **Essayez de vérifier si le système fonctionne lorsque vous avez le pack de ressources sur votre client avant de chercher à le distribuer automatiquement !**

1.  Allez dans le répertoire `(votreServeur)/plugins/ModelEngine/resource pack` et créez un pack de ressources en utilisant ces données ou ajoutez le dossier `assets` qui s'y trouve aux `assets` de votre pack de ressources.
    1.  Si vous créez un nouveau pack de ressources, vous pouvez mettre les fichiers du dossier `resource pack` dans un fichier zip, et ce sera un pack de ressources valide que vous pourrez distribuer. [Plus d'infos](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Si vous avez déjà un pack de ressources, assurez-vous de ne pas écraser accidentellement des modèles existants. [Plus d'infos](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribuez votre pack de ressources à vos joueurs. **Seuls les joueurs qui ont le pack de ressources pourront voir les Modèles Personnalisés**, et cela semblera très étrange et cassé pour tous les autres. Si vous avez l'intention d'en faire un usage intensif, vous pourriez vouloir forcer l'utilisation du pack de ressources.
    1.  (Optionnel) Pour permettre aux joueurs de télécharger un pack de ressources à la connexion, vous devrez héberger le fichier quelque part en ligne et modifier le champ `resource-pack=` de `server.properties` pour qu'il pointe vers cette adresse.**\***
    2.  (Optionnel) Si vous modifiez les packs de ressources, vous voudrez utiliser l'option `resource-pack-sha1=` afin que le serveur puisse vérifier si le pack de ressources du joueur a besoin d'être mis à jour. Pour générer cette valeur, téléchargez votre pack de ressources sur [http://onlinemd5.com/](http://onlinemd5.com/) et assurez-vous de choisir l'option SHA1. Vous devrez le faire chaque fois que vous mettez à jour votre Pack de Ressources, sinon vos utilisateurs ne recevront pas la mise à jour.**\***
    3.  (Optionnel) Pour forcer les joueurs à utiliser les packs de ressources, utilisez l'option `require-resource-pack=true` dans `server.properties`.**\***

**Si vous avez modifié server.properties, vous devrez redémarrer !**

**\*** Note : Il existe de nombreux guides en ligne qui peuvent vous aider à faire fonctionner cela si ces instructions ne vous aident pas.

### Fusionner les packs de ressources

Si vous avez besoin de fusionner vos packs de ressources, vous pouvez le faire manuellement. Mais nous recommandons d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

## Étape 4. Espérer que ça marche

En supposant que tout a été fait correctement, vous devriez maintenant pouvoir voir le Modèle Personnalisé sur votre boss ou PNJ. Vous pouvez les faire apparaître via les commandes :

*   Boss Personnalisé : `/em spawncustom nomdufichier.yml`
*   PNJ : `/em spawnnpc nomdufichier.yml`

Vous pouvez ensuite les supprimer via la commande `/em remove`.

# Créer et adapter des Modèles Personnalisés pour EliteMobs

EliteMobs est capable d'utiliser n'importe quel modèle considéré comme valide par Model Engine, ce qui signifie qu'il n'y a pas grand-chose qui ne puisse pas être fait avec.

Cependant, en ce qui concerne les animations, l'utilisation de noms spécifiques pour les animations est requise pour garantir que les boss puissent utiliser les animations.

Ces noms d'animation sont ceux définis dans Blockbench dans l'onglet animations. Vous pouvez les renommer à tout moment, ce qui signifie que vous pouvez adapter n'importe quel modèle existant pour qu'il fonctionne avec EliteMobs.

## Animations

Veuillez noter que cette section est encore en expansion, car ce système est encore très récent. D'autres éléments y seront ajoutés au fur et à mesure des demandes de fonctionnalités.

### idle

`idle` est le nom d'animation correct pour les entités qui ne sont pas en combat et ne bougent pas. EliteMobs ne modifie pas le système d'animation d'inactivité par défaut utilisé par Model Engine.

### walk

`walk` est le nom d'animation correct pour les entités qui se déplacent. EliteMobs ne modifie pas le système d'animation d'inactivité par défaut utilisé par Model Engine.

### attack

Il existe trois types d'animations d'attaque :

#### attack

`attack` est le nom d'animation générique correct pour lorsqu'un boss attaque.

#### attack_melee

`attack_melee` est le nom d'animation correct pour les attaques effectuées lorsqu'un Boss Personnalisé attaque une entité en utilisant une attaque de mêlée vanilla de Minecraft. Remplace `attack`. Veuillez noter que l'animation se joue **après** que les dégâts soient infligés. C'est malheureusement une limitation pour l'instant. Par conséquent, essayez de rendre l'animation très rapide.

#### attack_ranged

`attack_ranged` est le nom d'animation correct pour les attaques effectuées lorsqu'un Boss Personnalisé fait apparaître une entité projectile. Remplace `attack`. Veuillez noter que l'animation se joue **après** que le projectile soit tiré. C'est malheureusement une limitation pour l'instant. Par conséquent, essayez de rendre l'animation très rapide.

### damaged

`damaged` est le nom d'animation correct pour l'animation de blessure qu'un Boss Personnalisé joue lorsqu'il est endommagé.

### death

`death` est le nom d'animation correct pour l'animation de mort. EliteMobs ne modifie pas le système d'animation d'inactivité par défaut utilisé par Model Engine.

### powers

Note : ce segment est encore en développement. Les éléments suivants sont les fonctionnalités telles qu'elles sont prévues.

Chaque pouvoir dans EliteMobs peut avoir une animation qui lui est assignée. L'animation commence toujours lorsque le pouvoir est déclenché, et aucun autre déclencheur n'est actuellement fourni tout au long de l'utilisation du pouvoir. Certains pouvoirs, comme les invulnérabilités, ne feront rien car ils n'ont pas de déclencheurs et ne sont que des propriétés passives des boss.

Afin d'assigner une animation à un pouvoir, l'animation doit être nommée de la même manière que le fichier de pouvoir elitemobs.

Par exemple, pour ajouter une animation au pouvoir zombie necronomicon, l'animation devrait s'appeler `zombie_necronomicon.yml`. Elle commencera à jouer dès que le pouvoir sera déclenché, et se terminera lorsque l'animation se terminera si elle n'est pas configurée pour boucler, ou lorsque le pouvoir sera terminé.

# Importer des Modèles Personnalisés depuis des donjons

## Étape 1. Importation normale

Lors de l'importation d'un dossier zippé de packager de donjon qui contient des Modèles Personnalisés, les Modèles Personnalisés sont automatiquement déplacés vers `(votreServeur)/plugins/ModelEngine/blueprints` et Model Engine se recharge automatiquement pour générer le pack de ressources et les fichiers Model Engine pertinents.

## Étape 2. Générer le Pack de Ressources

Si vous êtes en ligne lorsque vous rechargez EliteMobs afin d'importer des fichiers, EliteMobs publiera automatiquement un message dans le chat sur lequel vous pourrez cliquer pour générer le pack de ressources EliteMobs. Alternativement, vous pouvez exécuter la commande `/em generateresourcepack` afin de le générer.

L'exécution de cette commande copie tous les fichiers du pack de ressources dans le dossier `exports` d'EliteMobs de manière non destructive. Cela signifie que si vous dézippez un pack de ressources dans le dossier exports en utilisant le nom de pack de ressources `elitemobs_resource_pack` pour votre dossier de pack de ressources, EliteMobs ne supprimera aucun des fichiers qui s'y trouvent, sauf si un fichier portant le même nom est obtenu de ModelEngine (à l'exception de pack.meta et pack.png). De cette façon, vous pouvez mettre à jour votre pack de ressources sans perdre les modèles que vous y avez précédemment placés.

Enfin, EliteMobs zippe le pack de ressources dans le dossier `exports`, et ce fichier est prêt à être distribué.

Une fois cela fait, EliteMobs suggère également de mettre à jour le code SHA1 pour votre pack de ressources.

### Étape 2.5. Mettre à jour le SHA1

Le code SHA1 dans le fichier `server.properties` est utilisé pour informer les clients si leur pack de ressources est obsolète, et les force à le mettre à jour si nécessaire. Ce code peut être généré via EliteMobs en cliquant sur l'option dans le chat qui apparaît après l'étape 2, ou en exécutant la commande `/em updateresourcepack`.

**Gardez à l'esprit que cela met à jour votre fichier server.properties avec le code SHA1 correct pour le pack de ressources zippé dans le dossier `exports`.** Si vous le supprimez ou modifiez le fichier zippé après avoir exécuté la commande, cela ne fonctionnera pas.

## Étape 3. Rendre le fichier publiquement disponible

Hébergez le fichier à l'emplacement de votre choix. Certaines personnes utilisent Google Drive ou Dropbox pour cela. Il est préférable d'héberger ce fichier vous-même, si vous en avez la capacité. Certains plugins peuvent également vous aider à l'héberger directement depuis votre serveur Minecraft. Si vous trouvez un plugin de ce type qui fonctionne, faites-le savoir à MagmaGuy sur Discord et ce message sera mis à jour avec cette information.