Voici la traduction en français, en conservant le formatage markdown :

# ***Avant de commencer !***

FreeMinecraftModels (FMM) est actuellement en **développement actif** ! Cela signifie que certaines fonctionnalités ne sont pas encore terminées et qu'elles sont activement en cours de développement.

Cependant, à l'heure actuelle, le cœur du plugin est entièrement fonctionnel - la conversion des fichiers bbmodel, la génération de packs de ressources, l'apparition d'entités en jeu et la gestion de leurs animations, la possibilité de placer des accessoires persistants, tout cela fonctionne en grande partie.

Envisagez de soutenir le développement sur https://www.patreon.com/magmaguy !

Le contenu du pack de ressources exporté est sous licence CC0 du côté de FreeMinecraftModels, aucun droit réservé. Vous êtes libre de l'utiliser, de le distribuer, de le modifier à toutes fins sans restrictions ni besoin d'attribution.

# Utilisation de ce plugin

## Que peut faire FreeMinecraftModels (FMM) pour les administrateurs de serveurs Minecraft ?

Il peut :

- Importer des modèles .bbmodel ou fmmodel (format personnalisé de FMM)
- Générer des packs de ressources avec des modèles qui dépassent les limites normales des modèles de packs de ressources Minecraft (jusqu'à 112x112x112 unités ou 7x7x7 blocs en jeu, fonctionnellement illimité lors de l'utilisation de plusieurs os)
- Afficher ces modèles en jeu, en envoyant des paquets spécifiques compatibles Bedrock aux clients Bedrock tout en envoyant des entités d'affichage aux clients Java 1.19.4+
- Animer ces modèles tels qu'ils ont été configurés pour être animés dans Blockbench
- Gérer les animations d'état par défaut sans nécessiter d'autres plugins (marche, inactif, mort, attaque, apparition)
- Gérer les hitboxes qui pivotent avec l'entité sous-jacente et ont un axe x et z différent
- Gérer trois types de modèles : statiques, dynamiques et accessoires (props)
    - Les accessoires (props) sont persistants et peuvent être placés dans le monde de manière à persister même si le serveur est redémarré, et il est possible de distribuer des cartes avec des accessoires à d'autres serveurs
    - Les modèles dynamiques sont destinés aux modèles qui nécessitent une entité vivante sous-jacente pour fonctionner, idéalement utilisés par les plugins de boss personnalisés ou les plugins d'animaux de compagnie
    - Les modèles statiques sont destinés aux modèles non persistants qui ne doivent pas se déplacer, donc essentiellement des décorations ou des effets temporaires

### Comment ajouter un modèle existant ?

Pour importer un modèle, il suffit de glisser le fichier .bbmodel dans le dossier imports et de faire `/fmm reload`. Cela générera un fichier .fmmodel dans le dossier `models` et ajoutera le modèle au pack de ressources dans le dossier `outputs`.

***Vous devrez utiliser ce pack de ressources pour visualiser correctement le modèle !*** C'est un pack de ressources normal, il vous suffit donc de le placer dans votre dossier de packs de ressources. Les serveurs Minecraft ont un moyen d'héberger les packs de ressources. Je recommande d'utiliser mon plugin, [ResourcePackManager](https://www.spigotmc.org/resources/resource-pack-manager.118574/), qui récupère automatiquement les fichiers et les héberge à distance pour vous, en les fusionnant même avec les fichiers d'autres plugins.

### Comment visualiser le modèle en jeu ?

Il est important de noter que si FreeMinecraftModels peut être utilisé comme un plugin autonome pour visualiser des accessoires (essentiellement des modèles personnalisés que vous pouvez placer dans le monde), le plugin est généralement à son meilleur lorsqu'il est associé à un plugin tel que [EliteMobs](https://www.spigotmc.org/resources/elitemobs.40090/) où les modèles sont activement utilisés pour quelque chose de concret, dans ce cas, des combats de boss.

Il existe trois types de modèles : statiques, dynamiques et accessoires (props).
- Les accessoires (props) sont persistants et peuvent être placés dans le monde de manière à persister même si le serveur est redémarré, et il est possible de distribuer des cartes avec des accessoires à d'autres serveurs
- Les modèles dynamiques sont destinés aux modèles qui nécessitent une entité vivante sous-jacente pour fonctionner, idéalement utilisés par les plugins de boss personnalisés ou les plugins d'animaux de compagnie
- Les modèles statiques sont destinés aux modèles non persistants qui ne doivent pas se déplacer, donc essentiellement des décorations ou des effets temporaires

#### Visualisation des modèles statiques en jeu

Pour visualiser les modèles statiques en jeu, utilisez la commande `/fmm spawn static <id>` où l'id est le nom du fichier du modèle, en minuscules et sans l'extension de fichier.

#### Visualisation des modèles dynamiques en jeu

Pour visualiser les modèles dynamiques en jeu, utilisez la commande `/fmm spawn dynamic <id>` où l'id est le nom du fichier du modèle, en minuscules et sans l'extension de fichier.

#### Visualisation des accessoires (props) en jeu

Pour visualiser les accessoires (props) en jeu, utilisez la commande `/fmm spawn prop <id>` où l'id est le nom du fichier du modèle, en minuscules et sans l'extension de fichier.

## Que peut faire FreeMinecraftModels (FMM) pour les modélisateurs ?

FMM suit les règles standard des packs de ressources pour la génération de packs de ressources. De plus, il essaie d'être aussi compatible que possible avec les modèles compatibles avec ModelEngine afin d'essayer de standardiser la création de modèles entre les plugins.

### Fonctionnalités / restrictions de génération de modèles

Si vous avez déjà créé des modèles pour ModelEngine, vous serez familier avec de nombreuses restrictions de génération de packs de ressources de Minecraft :

#### **Cubes :**

Les cubes sont les mêmes ici que dans Blockbench, ce sont les cubes qui composent le modèle.

- Les cubes peuvent aller jusqu'à 112x112x112 "pixels" (unités Blockbench) ou 7x7x7 blocs en jeu (restrictions normales de Minecraft contournées en utilisant les tailles d'affichage, bientôt encore plus contournées pour la 1.19.4+ grâce aux entités d'affichage)
- Les rotations légales pour les cubes sont 0, 22.5, -22.5, 45 et -45. Aucune autre rotation ne fonctionne.
- Les cubes ne tournent que sur un seul axe, ce qui signifie qu'une rotation de [22.5, 0, 0] est correcte, une rotation de [22.5, 0, 45] ne fonctionnera pas entièrement et ne tournera que sur un seul axe.

#### **Os (Bones) :**

Les os sont ce que Blockbench appelle des "groupes". Ils servent à regrouper les cubes et doivent être utilisés pour regrouper les os pour les animations.

- Les os peuvent aller jusqu'à 112x112x112 "pixels" (unités Blockbench) ou 7x7x7 blocs en jeu. *Veuillez noter que la taille des os est définie par ce qu'ils contiennent, donc si vous avez des cubes qui sont séparés de plus de 7 blocs, vous dépasserez probablement cette limite de taille. Contourner cette limite est aussi simple que de placer les blocs dans un os différent non contenu dans le premier os !*
- Peuvent avoir n'importe quelle rotation ! Cependant, il est recommandé d'éviter d'utiliser les rotations par défaut de 90, -90, 180 et -180, car elles peuvent souvent entraîner un comportement inattendu. Notez que cela ne s'applique pas vraiment aux animations, juste à la position de repos par défaut des os.

Les os sont beaucoup plus flexibles que les cubes, mais vous devriez utiliser le moins d'os possible ! Dans FMM, en raison des limitations de Minecraft, chaque os est une entité différente. À grande échelle, cela affectera les performances assez rapidement ! Utilisez toujours le moins d'os possible et soyez attentif au nombre de modèles que vous prévoyez de faire apparaître - plus vous prévoyez d'en avoir, moins vous devriez avoir d'os !

#### **Os Virtuels (Virtual Bones)**

Les Os Virtuels sont une terminologie de ModelEngine pour les os qui ont des métadonnées spécifiques, généralement sous la forme d'un nom spécifique, qui est utilisé dans un but précis.

Les os virtuels suivants ont été implémentés dans FreeMinecraftModels :

- Hitboxes / hauteur des yeux : un os appelé "hitbox" avec un cube qui définit les limites, et qui a la même valeur x et z (la plus grande valeur sera choisie si elles ne sont pas identiques) définit la hitbox. Le niveau des yeux est défini au point de pivot de l'os de la hitbox.
- Étiquette de nom (Name tag) : un os dont le nom commence par "tag_". Honnêtement, je préférerais être plus spécifique ici et utiliser "tag_name" afin d'utiliser les tags pour d'autres choses, mais cela sera sérieusement envisagé plus tard.
- Tête (Head) : un os dont le nom commence par h_ . C'est un os virtuel qui est utilisé pour définir la tête du modèle, qui tournera en fonction de la rotation de la tête de l'entité sous-jacente.

#### **Distribution de fichiers plus sûre, plus facile et non modifiable**

Une chose que FMM essaie de résoudre est le fait que les utilisateurs réutilisent les modèles qu'ils ont obtenus pour les modifier d'une manière que le créateur du modèle ne souhaitait pas, spécifiquement afin de changer la texture ou d'altérer légèrement un modèle et potentiellement essayer de le revendre comme une création originale.

À cette fin, FMM utilise le format de fichier `.fmmodel` qui vise à dépouiller les fichiers `.bbmodel` au point où ils peuvent être utilisés par le plugin mais ne peuvent pas être modifiés dans Blockbench.

En tant que modélisateur, vous avez maintenant le choix de publier un fichier `.fmmodel` non modifiable, un fichier `.bbmodel` modifiable, ou même d'appliquer une tarification ou des conditions de distribution différentes pour les deux.

Générer un `.fmmodel` est aussi simple que de placer votre `.bbmodel` dans le dossier `~/plugins/FreeMinecraftModels/imports` et de recharger le plugin avec `/fmm reload` ou de redémarrer le serveur. Votre `.fmmodel` se trouvera alors dans le dossier `~/plugins/FreeMinecraftModels/models`.

## Que peut faire FreeMinecraftModels (FMM) pour les développeurs qui souhaitent l'intégrer dans leurs plugins ?

FMM dispose d'un dépôt Maven !
Maven :

```xml
<repository>
    <id>magmaguy-repo-releases</id>
    <name>MagmaGuy's Repository</name>
    <url>https://repo.magmaguy.com/releases</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>LATEST.VERSION.HERE</version>
</dependency>
```

Gradle :

```kotlin
maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
}

compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: 'LATEST.VERSION.HERE'
```

*Note : FreeMinecraftModels est destiné à être utilisé comme une API, et nécessitera l'installation du plugin sur le serveur. Ne l'incluez pas (shade) dans votre plugin !*

## Utilisation de l'API

FMM vise à être aussi facile que possible à utiliser en tant qu'API.

Actuellement, si vous souhaitez utiliser FreeMinecraftModels comme une API pour avoir accès à l'utilisation de modèles personnalisés, il n'y a que quatre classes que vous devez connaître :

- `ModeledEntity` - la classe de base pour toutes les entités
- `StaticEntity` - pour lorsque vous souhaitez utiliser un modèle statique non permanent
- `DynamicEntity` - pour lorsque vous souhaitez déguiser une autre entité vivante avec un modèle
- `PropEntity` - pour lorsque vous souhaitez placer un modèle dans le monde qui persiste même si le serveur est redémarré

Voici un extrait pour gérer un modèle statique :

```java
import org.bukkit.Bukkit;

public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Bukkit.getLogger().warning(("FMM failed to find a model named " + id + " !"));
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

Gardez à l'esprit que les modèles statiques sont destinés à rester en place et à agir comme un élément décoratif dans un emplacement fixe (les animations ne comptent pas comme du 'mouvement' ici). Bien qu'il soit possible de les déplacer, demandez-vous si vous ne préféreriez pas plutôt utiliser un modèle dynamique si tel est votre objectif.

Et voici comment EliteMobs, mon plugin de boss personnalisés, utilise les entités dynamiques :

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import api.com.magmaguy.freeminecraftmodels.ModeledEntityManager;
import customentity.com.magmaguy.freeminecraftmodels.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

Les modèles dynamiques sont construits sur une entité vivante, qui peut être fournie soit lors de l'utilisation de la méthode create comme dans l'exemple ci-dessus, soit lors de l'exécution de la méthode spawn sur une entité Dynamic.

# Contribuer au projet FreeMinecraftModels (FMM) en tant que développeur

FMM est distribué sous la licence GPLV3 et les contributions de code sont les bienvenues. Voici les directives de contribution de base :

- Suivez les conventions de nommage existantes, maintenez le niveau de verbosité existant et ajoutez suffisamment de documentation pour que votre contribution soit facile à comprendre
- Gardez les contributions pertinentes par rapport à la portée du plugin. Si vous ne savez pas si cela sera pertinent, n'hésitez pas à demander à l'avance.
- Soyez attentif à l'impact de votre code sur les performances. Certaines contributions peuvent être refusées si elles sont trop peu optimisées ou causent un impact trop important sur les performances.

## Aperçu général du plugin

Pour vous faire gagner du temps, voici un aperçu rapide du flux logique de FMM :

1) Lire le dossier `imports`
2) Déplacer les fichiers du dossier `imports` vers le dossier `models`. Si le fichier est un `.bbmodel`, il est converti en `.fmmodel` dans le dossier `models`.
3) Lire les fichiers dans le dossier `models`.
4) Interpréter toutes les structures de modèles, créant des `Skeleton`s qui contiennent des groupes d'`Bone`s, et ces os contiennent des groupes d'`Bone`s enfants et de `Cube`s. Les `Cube`s et les `Bone`s génèrent les données JSON du pack de ressources auxquelles ils sont chacun liés. Cela signifie que les `Cube`s génèrent le JSON spécifique aux cubes et les `Bone`s génèrent le contour et les fichiers d'os individuels. Notez qu'un os donne lieu à un fichier de pack de ressources. Les modèles sont ajoutés à une liste au fur et à mesure de leur génération.
5) Toujours dans le `Skeleton`, interpréter toutes les `Animations` du modèle, s'il y en a
6) Toutes les données ont maintenant été initialisées, le pack de ressources a été généré dans le dossier `outputs` et le plugin est prêt à être utilisé.

## Astuces utilisées dans ce plugin :

Les astuces utilisées ici sont assez bien établies et standardisées, mais seront néanmoins listées car elles peuvent être contre-intuitives.

Veuillez noter que ces astuces sont toutes complètement invisibles pour les utilisateurs et les créateurs de modèles ; les restrictions et les solutions de contournement ne sont listées que pour vous aider à comprendre comment FMM contourne diverses limitations de Minecraft.

- Tous les modèles sont mis à l'échelle 4x, puis la taille et le point de pivot sont réajustés dans le code afin d'étendre la taille maximale théorique du modèle
- Étant donné que les modèles de packs de ressources ne peuvent avoir une taille que de -16 à +32, les modèles sont décalés en arrière-plan. C'est complètement invisible pour les joueurs.
- L'armure de cheval en cuir est utilisée pour créer des modèles avec une teinte qui peut être influencée par le code (par exemple, pour les indications de dégâts). L'armure de cheval doit être réglée sur blanc pour afficher les couleurs correctes !
- Blockbench utilise un système spécifique d'IDs pour les textures, mais lit en fait les textures séquentiellement à partir de la configuration. Les IDs sont attribués ici en fonction de leur position dans la liste des textures, suivant la manière dont Blockbench le fait.
- Chaque os est une entité différente en raison des limitations de Minecraft
- L'armure de cheval en cuir est sur l'emplacement de tête du porte-armure
- Les porte-armures et les entités d'affichage sont utilisés pour les éléments statiques par défaut ; les clients Bedrock obtiennent les porte-armures, et les clients 1.19.4+ obtiennent les entités d'affichage (les clients plus anciens obtiendront des porte-armures)

# Contribuer au projet FreeMinecraftModels (FMM) en général

FMM est en fait financé par la foule par les personnes adorables sur https://www.patreon.com/magmaguy ! Toutes les contributions aident plus que vous ne l'imaginez ;)

# Fonctionnalités actuellement prévues :
- Génération de RSP pour les clients Bedrock
- Gestion de RSP avec intégration Geyser
- tag_projectile comme méta-os à partir desquels des projectiles peuvent être tirés (peut y en avoir plus d'un par modèle)

# Limitations étranges actuelles qu'il serait bien de corriger :

- La TransformationMatrix est un désordre, mais aucune meilleure solution n'a encore été développée. Elles nécessitent le travail de quelqu'un qui est bon en matrices.