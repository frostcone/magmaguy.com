```markdown
# ***Avant de commencer !***

FreeMinecraftModels (FMM) est actuellement en **alpha !** Cela signifie que plusieurs fonctionnalités ne sont pas encore terminées et sont en cours de développement actif.

Cependant, à ce jour, le cœur du plugin est entièrement fonctionnel : la conversion de fichiers `.bbmodel`, la génération de packs de ressources, le spawn d'entités dans le jeu et la gestion de leurs animations fonctionnent toutes, même si elles ne sont peut-être pas encore 100 % abouties.

Envisagez de soutenir le développement sur https://www.patreon.com/magmaguy !

Le contenu du pack de ressources exporté est sous licence CC0, sans aucune réserve de droits. Vous êtes libre d'utiliser, de distribuer et de modifier les informations de ce wiki à toutes fins sans restriction ni obligation d'attribution.

# Utilisation de ce plugin

## Que peut faire FreeMinecraftModels (FMM) pour les administrateurs de serveurs Minecraft ?

Il peut :

- Importer des modèles `.bbmodel` ou `.fmmodel` (format personnalisé de FMM)
- Générer des packs de ressources avec des modèles qui dépassent les limites normales des modèles de packs de ressources Minecraft (jusqu'à ~~112x112x112~~ 106x106x106 unités ou 7x7x7 blocs dans le jeu)
- Afficher ces modèles dans le jeu en utilisant la commande `/fmm spawn static <id>` où l'ID est le nom de fichier du modèle, en minuscules et sans l'extension de fichier
- Animer ces modèles comme ils ont été configurés pour être animés dans Blockbench
- Gérer les animations d'état par défaut sans nécessiter d'autres plugins (marche, inactivité, mort, attaque, spawn)

### Comment ajouter un modèle existant ?

Pour importer un modèle, faites simplement glisser le fichier `.bbmodel` vers le dossier `imports` et exécutez `/fmm reload`. Cela générera un fichier `.fmmodel` dans le dossier `models` et ajoutera le modèle au pack de ressources dans le dossier `outputs`.

***Vous devrez utiliser ce pack de ressources pour voir correctement le modèle !*** Il s'agit d'un pack de ressources normal, il vous suffit donc de le placer dans votre dossier de pack de ressources. Les serveurs Minecraft ont un moyen d'héberger des packs de ressources sur des services tiers tels que Google Drive ou un service spécialisé tel que https://resourcepack.host/, ce dernier site Web étant peut-être le moyen le plus simple de le faire.

### Comment visualiser le modèle dans le jeu ?

Il existe deux (prévues) catégories de modèles.

- Les modèles `Static` sont destinés aux modèles qui ne bougent pas (mais qui peuvent avoir des animations), et servent plutôt de décorations - pensez à quelque chose comme un lampadaire ou un sapin de Noël.
- Les modèles `Dynamic` sont destinés aux modèles qui se comportent comme des mobs Minecraft, c'est-à-dire qu'ils se déplacent et exécutent divers comportements associés aux mobs. Pensez à quelque chose comme des modèles de boss personnalisés ou à l'ajout de nouveaux types d'entités à Minecraft.

#### Visualisation des modèles statiques dans le jeu

Pour visualiser des modèles statiques dans le jeu, utilisez la commande `/fmm spawn static <id>` où l'ID est le nom de fichier du modèle, en minuscules et sans l'extension de fichier.

#### Visualisation des modèles dynamiques dans le jeu

Pour visualiser des modèles dynamiques dans le jeu, utilisez la commande `/fmm spawn dynamic <id>` où l'ID est le nom de fichier du modèle, en minuscules et sans l'extension de fichier.

## Que peut faire FreeMinecraftModels (FMM) pour les modélisateurs ?

FMM suit les règles standard des packs de ressources pour la génération de packs de ressources. De plus, il essaie d'être aussi compatible que possible avec les modèles compatibles avec ModelEngine afin d'essayer de standardiser la création de modèles entre les plugins.

### Fonctionnalités/restrictions de la génération de modèles

Si vous avez déjà créé des modèles pour ModelEngine, vous connaîtrez beaucoup des restrictions de génération de packs de ressources Minecraft :

#### **Cubes :**

Les cubes sont les mêmes ici que dans Blockbench, ce sont les cubes qui composent le modèle.

- Les cubes peuvent aller jusqu'à ~~112x112x112~~ 106x106x106 "pixels" (unités Blockbench) ou 7x7x7 blocs dans le jeu (restrictions Minecraft normales contournées à l'aide des tailles d'affichage, bientôt contournées pour 1.19.4+ grâce aux entités d'affichage)
- Les rotations autorisées pour les cubes sont 0, 22.5, -22.5, 45 et -45. Aucune autre rotation ne fonctionne.
- Les cubes ne tournent que sur un axe, ce qui signifie qu'une rotation de [22.5, 0, 0] est correcte, une rotation de [22.5, 0, 45] ne fonctionnera pas complètement et ne tournera que sur un axe.

#### **Os :**

Les os sont ce que Blockbench appelle des "groupes". Ils servent à regrouper les cubes, et doivent être utilisés pour regrouper les os pour les animations Blueprint.

- Les os peuvent aller jusqu'à ~~112x112x112~~ 106x106x106 (devrait être 112, je ne sais pas pourquoi c'est le cas) "pixels" (unités Blockbench) ou 7x7x7 blocs dans le jeu. *Veuillez noter que la taille des os est définie par ce qu'ils contiennent. Donc, si vous avez des cubes qui sont séparés de plus de 7 blocs, vous dépasserez probablement cette limite de taille. Contourner cette limite est aussi simple que de placer les blocs dans un autre `boneBlueprint` qui n'est pas contenu dans le premier `boneBlueprint` !*
- Peut avoir n'importe quelle rotation !

Les os sont beaucoup plus flexibles que les cubes, mais vous devez utiliser le moins d'os possible ! Dans FMM, en raison de limitations de Minecraft, chaque `boneBlueprint` est une entité différente. À une certaine échelle, cela affectera les performances assez rapidement ! Utilisez toujours le moins d'os possible et soyez attentif au nombre de modèles de ce type que vous prévoyez de faire spawn - plus vous en avez, moins vous devez avoir d'os !

#### **Os virtuels**

Si vous venez de ModelEngine, vous voudrez probablement savoir si/comment les os virtuels sont implémentés dans FMM. Les os virtuels ont été prévus, mais ne sont pas encore implémentés au-delà des bases.

Cependant, au moins, les os virtuels suivants seront compatibles avec FMM prochainement :

- Hitboxes/hauteur des yeux : un `boneBlueprint` appelé "hitbox" avec un `cubeBlueprint` qui définit les limites et a la même valeur x et z (la plus grande valeur sera choisie si elles ne sont pas identiques) définit la hitbox. Le niveau des yeux est défini au point de pivot du `boneBlueprint` de la hitbox.
- Balise de nom : un `boneBlueprint` dont le nom commence par "tag_". Honnêtement, je préférerais être plus spécifique au mode et utiliser "tag_name" afin d'utiliser des balises pour d'autres choses, mais cela sera sérieusement envisagé plus tard.

Aucune autre fonctionnalité de `boneBlueprint` virtuel n'est garantie d'être ajoutée dans un avenir immédiat.

## Fusion des packs de ressources

Lorsque vous utilisez FMM, vous devrez probablement fusionner des packs de ressources.

Vous pouvez fusionner des packs de ressources manuellement, mais nous vous recommandons d'utiliser un outil en ligne tel que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

#### **Distribution de fichiers plus sûre, plus facile et non modifiable**

Une des choses que FMM essaie de résoudre est le fait que les utilisateurs réutilisent des modèles qu'ils ont obtenus pour les modifier d'une manière que le créateur du modèle ne voulait pas qu'ils modifient, en particulier pour changer le skin ou modifier légèrement un modèle et éventuellement essayer de le revendre comme une création originale.

À cette fin, FMM utilise le format de fichier `.fmmodel` qui vise à simplifier les fichiers `.bbmodel` au point où ils peuvent être utilisés par le plugin, mais ne peuvent pas être modifiés dans Blockbench.

En tant que modélisateur, vous avez désormais le choix de diffuser un fichier `.fmmodel` non modifiable, un fichier `.bbmodel` modifiable ou même de faire des prix différentiels ou des conditions générales de distribution différentes pour les deux.

Générer un fichier `.fmmodel` est aussi simple que de placer votre fichier `.bbmodel` dans le dossier `~/plugins/FreeMinecraftModels/imports` et de recharger le plugin avec `/fmm reload` ou de redémarrer le serveur. Votre fichier `.fmmodel` se trouvera ensuite dans le dossier `~/plugins/FreeMinecraftModels/models`.

## Que peut faire FreeMinecraftModels (FMM) pour les développeurs qui souhaitent l'intégrer à leurs plugins ?

FMM dispose d'un référentiel Maven !
Maven :

```xml

<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle :

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Remarque : FreeMinecraftModels est destiné à être utilisé comme une API et nécessitera l'installation du plugin sur le serveur. Ne l'integrez pas à votre plugin !*

FMM vise à être aussi simple que possible à utiliser comme une API.

Pour le moment, il n'y a qu'une seule classe que vous devez connaître si vous souhaitez utiliser FMM comme une API pour votre plugin, et c'est `StaticEntity`.

Voici un extrait pour gérer un modèle statique :

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Créer le modèle
    public FreeMinecraftModelsModel(String id, Location location) {
        //Cela fait spawn l'entité !
        staticEntity = StaticEntity.create(id, location);
        //Cela vérifie si l'entité a spawné correctement
        if (staticEntity == null) Logger.warningMessage("FMM a échoué à trouver un modèle nommé " + id + " !");
    }

    public void remove() {
        //Cela supprime l'entité
        staticEntity.remove();
    }
}
```

Gardez à l'esprit que les modèles statiques sont destinés à rester en place et à servir d'éléments décoratifs à un emplacement fixe (les animations ne sont pas considérées comme des "déplacements" ici). S'il est possible de les déplacer, demandez-vous si vous ne voulez pas plutôt utiliser un modèle dynamique si tel est votre objectif.

Et voici comment EliteMobs, mon plugin de boss personnalisé, utilise les entités dynamiques :

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
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

Les modèles dynamiques sont construits sur une entité vivante, qui peut être fournie lors de l'utilisation de la méthode de création comme dans l'exemple ci-dessus, ou lors de l'exécution de la méthode de spawn sur une entité dynamique.

Bien qu'il n'existe pas d'API formelle pour le moment, tous les éléments destinés à l'utilisation de l'API sont contenus dans `ModeledEntity` (la classe de base de toutes les entités), `StaticEntity`, `DynamicEntity` et `ModeledEntityManager`. 99 % des développeurs devraient trouver toutes les méthodes dont ils ont besoin réparties entre ces trois classes.

# Contribution au projet FreeMinecraftModels (FMM) en tant que développeur

FMM est distribué sous licence GPLV3 et les contributions de code sont les bienvenues. Voici les directives de contribution de base :

- Suivez les conventions de nommage existantes, maintenez le niveau de verbosité existant et ajoutez suffisamment de documentation pour que votre contribution soit facile à comprendre.
- Gardez les contributions pertinentes à la portée du plugin. Si vous ne savez pas si cela sera pertinent, n'hésitez pas à poser la question à l'avance.
- Soyez attentif à l'impact de votre code sur les performances. Certaines contributions peuvent être refusées si elles sont soit trop peu optimisées, soit si elles ont un impact trop important sur les performances.

## Schéma général du plugin

Pour vous faire gagner du temps, voici une brève ventilation du flux logique de FMM :

1) Lire le dossier `imports`
2) Déplacer les fichiers du dossier `imports` vers le dossier `models`. Si le fichier est un fichier `.bbmodel`, il est converti en `.fmmodel` dans le dossier `models`.
3) Lire les fichiers dans le dossier `models`.
4) Interpréter toutes les structures de modèles, en créant des `Skeleton` qui contiennent des groupes de `Bone`, et ces os contiennent des groupes de `Bone` enfants et de `Cube`. Les `Cube` et les `Bone` génèrent les données JSON du pack de ressources auxquelles ils sont liés. Cela signifie que les `Cube` génèrent le JSON spécifique aux cubes et que les `Bone` génèrent les fichiers de contour et d'os individuels. Notez qu'un `boneBlueprint` génère un fichier de pack de ressources. Les modèles sont ajoutés à une liste au fur et à mesure qu'ils sont générés.
5) Toujours dans le `Skeleton`, interpréter toutes les `Animations` du modèle, le cas échéant.
6) Toutes les données ont maintenant été initialisées, le pack de ressources a été généré dans le dossier `outputs` et le plugin est prêt à être utilisé.

## Astuces utilisées dans ce plugin :

Les astuces utilisées ici sont assez bien établies et standardisées, mais seront néanmoins listées car elles peuvent être contre-intuitives.

Veuillez noter que ces astuces sont toutes totalement invisibles aux utilisateurs et aux créateurs de modèles ; les restrictions et les solutions de contournement ne sont listées que pour vous aider à comprendre comment FMM contourne diverses limitations de Minecraft.

- Tous les modèles sont agrandis de 4x, puis la taille et le point de pivot sont réajustés dans le code afin d'étendre la taille maximale théorique du modèle.
- Étant donné que les modèles de packs de ressources ne peuvent avoir que des modèles allant de -16 à +32 en taille, les modèles sont décalés en arrière-plan. Cela est totalement invisible aux joueurs.
- L'armure de cheval en cuir est utilisée pour créer des modèles avec une teinte qui peut être influencée par le code (par exemple, pour les indications de dégâts). L'armure de cheval doit être blanche pour afficher les bonnes couleurs !
- Blockbench utilise un système d'ID spécifique pour les textures, mais lit en réalité les textures de manière séquentielle à partir de la configuration. Les ID sont attribués ici en fonction de leur position dans la liste des textures, en suivant la méthode de Blockbench.
- Chaque `boneBlueprint` est une entité de support d'armure différente en raison de limitations de Minecraft.
- L'armure de cheval en cuir est sur l'emplacement de la tête du support d'armure.
- Les supports d'armure sont utilisés pour les objets statiques par défaut. //todo : Je devrai bientôt implémenter le nouveau système d'affichage alternatif de MC 1.19.4+, il est beaucoup plus efficace.
- Pour éviter les collisions avec d'autres plugins qui modifient l'armure de cheval en cuir, FMM utilise des valeurs de données de modèle personnalisées à partir de 50 000.

# Contribution au projet FreeMinecraftModels (FMM) en général

FMM est en fait financé par le biais de dons par les adorables personnes de [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy) ! Toutes les contributions aident plus que vous ne l'imaginez ;)

# Fonctionnalités actuellement prévues :
- Génération de RSP pour les clients Bedrock.
- Gestion du RSP indépendant des propriétés du serveur avec intégration Geyser.
- Entités personnalisées (?).
- `tag_projectile` en tant qu'os méta à partir desquels des projectiles peuvent être tirés (peut en avoir plusieurs par modèle).

# Limitations étranges actuelles qui doivent être corrigées :
- Si le point de pivot (origine) d'un `boneBlueprint` est défini sur plus de 67 environ, le modèle commence à flotter.

```

