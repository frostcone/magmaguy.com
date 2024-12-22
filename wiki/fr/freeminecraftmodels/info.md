# ***Avant de commencer !***

FreeMinecraftModels (FMM) est actuellement en **alpha** ! Cela signifie que plusieurs fonctionnalités ne sont pas encore
terminées et sont activement
en cours de développement.

Cependant, en ce moment, le cœur du plugin est entièrement fonctionnel - la conversion de fichiers bbmodel, la
génération de packs de ressources, le spawn d'entités en jeu et la gestion de leurs animations fonctionnent tous, même
s'ils ne sont peut-être pas 100 % peaufinés.

Envisagez de soutenir le développement sur https://www.patreon.com/magmaguy !

Le contenu du pack de ressources exporté est sous licence CC0, aucun droit réservé. Vous êtes libre d'utiliser,
de distribuer, de modifier à toutes fins sans restrictions ni besoin d'attribution.

# Utilisation de ce plugin

## Que peut faire FreeMinecraftModels (FMM) pour les administrateurs de serveurs Minecraft ?

Il peut :

- Importer des modèles .bbmodel ou fmmodel (format personnalisé de FFM)
- Générer des packs de ressources avec des modèles qui dépassent les limites normales des modèles de packs de ressources
  Minecraft (jusqu'à ~~112x112x112~~
  106x106x106 unités ou 7x7x7 blocs en jeu)
- Afficher ces modèles en jeu grâce à la commande `/fmm spawn static <id>` où l'id est le nom du fichier du
  modèle, en minuscules et sans l'extension de fichier
- Animer ces modèles tels qu'ils ont été configurés pour être animés dans Blockbench
- Gérer les animations d'état par défaut sans nécessiter d'autres plugins (marche, ralenti, mort, attaque, spawn)

### Comment ajouter un modèle existant ?

Pour importer un modèle, glissez simplement le fichier .bbmodel dans le dossier imports et faites `/fmm reload`. Cela
générera un fichier .fmmodel dans le dossier `models` et ajoutera le modèle au pack de ressources dans le
dossier `outputs`.

***Vous devrez utiliser ce pack de ressources pour visualiser correctement le modèle !*** C'est un pack de ressources
normal, donc tout ce que vous avez à faire est de le mettre dans votre dossier de packs de ressources. Les serveurs
Minecraft ont un moyen d'héberger des packs de ressources sur des services tiers tels que google drive ou un service
spécialisé tel que https://resourcepack.host/, ce dernier site web étant peut-être le moyen le plus simple de le faire.

### Comment visualiser le modèle en jeu ?

Il existe deux catégories (prévues) de modèles.

- Les modèles `Statiques` sont pour les modèles qui ne bougent pas (mais peuvent avoir des animations) et servent
  davantage de décorations - pensez
  à quelque chose comme un lampadaire ou un sapin de Noël.
- Les modèles `Dynamiques` sont pour les modèles qui se comportent comme des mobs Minecraft, c'est-à-dire qu'ils se
  déplacent et effectuent divers
  comportements associés aux mobs. Pensez à quelque chose comme des modèles de boss personnalisés ou à l'ajout de types
  d'entités complètement nouveaux à
  Minecraft.

#### Visualisation des modèles statiques en jeu

Pour visualiser les modèles statiques en jeu, utilisez la commande `/fmm spawn static <id>` où l'id est le nom du
fichier du modèle, en minuscules et sans l'extension de fichier.

#### Visualisation des modèles dynamiques en jeu

Pour visualiser les modèles dynamiques en jeu, utilisez la commande `/fmm spawn dynamic <id>` où l'id est le nom du
fichier du modèle, en
minuscules et sans l'extension de fichier.

## Que peut faire FreeMinecraftModels (FMM) pour les modeleurs ?

FMM suit les règles standard des packs de ressources pour la génération de packs de ressources. De plus, il essaie
d'être aussi compatible
que possible avec les modèles compatibles avec ModelEngine afin d'essayer de standardiser la création de modèles entre
les plugins.

### Caractéristiques / restrictions de la génération de modèles

Si vous avez déjà créé des modèles pour ModelEngine, vous connaissez bien de nombreuses restrictions de génération de
packs de ressources Minecraft :

#### **Cubes :**

Les cubes sont les mêmes ici que dans Blockbench, ce sont les cubes qui composent le modèle.

- Les cubes peuvent aller jusqu'à ~~112x112x112~~ 106x106x106 "pixels" (unités Blockbench) ou 7x7x7 blocs en jeu (
  restrictions normales de Minecraft
  contournées à l'aide des tailles d'affichage, bientôt davantage contournées pour 1.19.4+ grâce aux entités
  d'affichage)
- Les rotations légales pour les cubes sont 0, 22,5, -22,5, 45 et -45. Aucune autre rotation ne fonctionne.
- Les cubes ne tournent que sur un seul axe, ce qui signifie qu'une rotation de [22,5, 0, 0] est correcte, une rotation
  de [22,5, 0, 45] ne fonctionnera pas
  entièrement et ne tournera que sur un seul axe.

#### **Os :**

Les os sont ce que Blockbench appelle des "groupes". Ils servent à regrouper les cubes et doivent être utilisés pour
regrouper les os
pour les animationsBlueprint.

- Les os peuvent aller jusqu'à ~~112x112x112~~ 106x106x106 (devrait être 112, je ne sais pas pourquoi c'est le cas) "
  pixels" (unités Blockbench) ou
  7x7x7 blocs en jeu. *Veuillez noter que la taille des os est définie par ce qu'ils contiennent, donc si vous avez des
  cubes qui sont à plus
  de 7 blocs de distance, vous dépasserez probablement cette limite de taille. Contourner cette limite est aussi simple
  que de mettre les blocs
  dans un autre Blueprint d'os non contenu dans le premier Blueprint d'os !*
- Peut avoir n'importe quelle rotation !

Les os sont beaucoup plus flexibles que les cubes, mais vous devez utiliser le moins d'os possible ! Dans FMM, en raison
des limitations de Minecraft,
chaque Blueprint d'os est une entité différente. À grande échelle, cela affectera rapidement les performances ! Utilisez
toujours le moins d'os possible
et soyez conscient du nombre de modèles que vous prévoyez de faire apparaître - plus vous prévoyez en avoir, moins vous
devez avoir d'os !

#### **Os virtuels**

Si vous venez de ModelEngine, vous voulez probablement savoir si/comment les os virtuels sont implémentés dans FMM. Les
os virtuels
ont été affectés, mais ne sont pas actuellement implémentés au-delà d'un travail de base très élémentaire.

Cependant, au minimum, les os virtuels suivants seront bientôt compatibles avec FMM :

- Hitboxes / hauteur des yeux : un Blueprint d'os appelé "hitbox" avec un Blueprint de cube qui définit les limites et a
  la même valeur x et z (la plus grande valeur sera choisie si elles ne sont pas les mêmes) définit la hitbox. La
  hauteur des yeux est définie au niveau du point de pivot du Blueprint d'os de la hitbox.
- Étiquette de nom : un Blueprint d'os dont le nom commence par "tag_". Honnêtement, je préférerais être plus spécifique
  ici et utiliser "tag_name" afin d'utiliser les étiquettes pour d'autres choses, mais cela sera sérieusement envisagé
  plus tard.

Aucune autre fonctionnalité de Blueprint d'os virtuel n'est garantie d'être ajoutée dans un avenir immédiat.

## Fusionner des packs de ressources

Pendant que vous utilisez FMM, vous aurez probablement besoin de fusionner des packs de ressources.

Vous pouvez fusionner des packs de ressources manuellement, mais nous vous recommandons d'utiliser un outil en ligne tel
que [merge.elmakers](https://merge.elmakers.com/) pour fusionner vos packs de ressources.

#### **Distribution de fichiers plus sûre, plus facile et non modifiable**

Une chose que FMM essaie de résoudre, c'est la réutilisation par les utilisateurs de modèles qu'ils ont obtenus pour les
modifier d'une manière que le créateur du modèle ne voulait pas qu'ils soient modifiés, en particulier afin de reskinner
ou de modifier légèrement un modèle et potentiellement essayer de le revendre comme une création originale.

À cette fin, FMM utilise le format de fichier `.fmmodel` qui vise à réduire les fichiers `.bbmodel` au point où ils
peuvent être utilisés par le plugin mais ne peuvent pas être modifiés dans Blockbench.

En tant que modeleur, vous avez maintenant le choix de publier un fichier `.fmmodel` non modifiable, un
fichier `.bbmodel` modifiable ou même de pratiquer une tarification différenciée ou des conditions de service de
distribution pour les deux.

Générer un fichier `.fmmodel` est aussi simple que de mettre votre fichier `.bbmodel` dans le
dossier `~/plugins/FreeMinecraftModels/imports`
et de recharger le plugin avec `/fmm reload` ou de redémarrer le serveur. Votre `.fmmodel` se trouvera alors dans le
dossier
`~/plugins/FreeMinecraftModels/models`.

## Que peut faire FreeMinecraftModels (FMM) pour les développeurs qui souhaitent l'intégrer dans leurs plugins ?

FMM a un repo maven !
Maven :

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

Gradle :

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Notez que FreeMinecraftModels est destiné à être utilisé comme une API et nécessitera l'installation du plugin sur le
serveur. Ne
le copiez pas dans votre plugin !*

FMM vise à être aussi facile que possible à utiliser comme une API.

Pour l'instant, il n'y a qu'une seule classe que vous devez connaître si vous souhaitez utiliser FMM comme API pour
votre plugin, et c'est `StaticEntity`.

Voici un extrait pour la gestion d'un modèle statique :

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Créer le modèle
    public FreeMinecraftModelsModel(String id, Location location) {
        //Ceci fait apparaître l'entité !
        staticEntity = StaticEntity.create(id, location);
        //Ceci vérifie si l'entité a été correctement créée
        if (staticEntity == null) Logger.warningMessage("FMM n'a pas réussi à trouver un modèle nommé " + id + " !");
    }

    public void remove() {
        //Ceci supprime l'entité
        staticEntity.remove();
    }
}
```

Gardez à l'esprit que les modèles statiques sont destinés à rester en place et à agir comme un élément décoratif à un
emplacement fixe (
les animations ne comptent pas comme un "mouvement" ici). Bien qu'il soit possible de les déplacer, demandez-vous si
vous ne préféreriez pas
utiliser un modèle dynamique si c'est votre objectif.

Et voici comment EliteMobs, mon plugin de boss personnalisé, utilise des entités dynamiques :

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

Les modèles dynamiques sont construits sur une entité vivante, qui peut être fournie soit lors de l'utilisation de la
méthode create comme dans l'exemple ci-dessus, soit lors de l'exécution de la méthode spawn sur une entité dynamique.

Bien qu'il n'y ait pas de ressource API formelle pour le moment, tous les éléments destinés à l'utilisation de l'API
sont contenus dans ModeledEntity (
la classe de base pour toutes les entités), StaticEntity, DynamicEntity et ModeledEntityManager. 99 % des développeurs
devraient trouver
toutes les méthodes dont ils ont besoin réparties dans ces trois classes.

# Contribuer au projet FreeMinecraftModels (FMM) en tant que développeur

FMM est distribué sous la licence GPLV3 et les contributions de code sont les bienvenues. Voici les directives de
contribution de base :

- Suivez les conventions de nommage existantes, maintenez le niveau de verbosité existant et ajoutez suffisamment de
  documentation pour
  que votre contribution soit facile à comprendre
- Conservez les contributions pertinentes à la portée du plugin. Si vous ne savez pas si cela sera pertinent, n'hésitez
  pas à
  poser la question à l'avance.
- Soyez conscient de l'impact des performances de votre code. Certaines contributions peuvent être refusées si elles
  sont trop
  peu optimisées ou provoquent un impact de performance trop important.

## Aperçu général du plugin

Pour vous faire gagner du temps, voici une ventilation rapide du flux logique de FMM :

1) Lire le dossier `imports`
2) Déplacer les fichiers du dossier `imports` vers le dossier `models`. Si le fichier est un `.bbmodel`, il est converti
   en `.fmmodel` dans le dossier models.
3) Lire les fichiers dans le dossier `models`.
4) Interpréter toutes les structures de modèles, en créant des `Squelettes` qui contiennent des groupes d'`Os`, et ces
   os contiennent des groupes
   d'`Os` enfants et de `Cubes`. Les `Cubes` et les `Os` génèrent les données JSON du pack de ressources auxquelles ils
   sont chacun liés. Cela
   signifie que les `Cubes` génèrent le JSON spécifique aux cubes et les `Os` génèrent le contour et les fichiers
   d'osBlueprint individuels. Notez qu'un Blueprint d'os résulte en un fichier de pack de ressources. Les modèles sont
   ajoutés à une liste au fur et à mesure de leur
   génération.
5) Toujours dans le `Squelette`, interpréter toutes les `Animations` dans le modèle, le cas échéant
6) Toutes les données ont maintenant été initialisées, le pack de ressources a été généré dans le dossier `outputs` et
   le plugin est prêt à
   être utilisé.

## Astuces utilisées dans ce plugin :

Les astuces utilisées ici sont assez bien établies et standardisées, mais elles seront néanmoins énumérées car elles
peuvent être contre-intuitives.

Veuillez noter que ces astuces sont toutes complètement invisibles pour les utilisateurs et les créateurs de modèles ;
les restrictions et les solutions de contournement ne sont répertoriées que pour vous aider à comprendre comment FMM
contourne diverses limitations de Minecraft.

- Tous les modèles sont agrandis 4x, puis la taille et le point de pivot sont réajustés dans le code afin d'étendre la
  taille théorique maximale du modèle.
- Étant donné que les modèles de pack de ressources ne peuvent avoir que des modèles allant de -16 à +32 en taille, les
  modèles sont décalés en arrière-plan. Ceci est totalement invisible pour les joueurs.
- Une armure de cheval en cuir est utilisée pour créer des modèles avec une teinte qui peut être influencée par le
  code (c'est-à-dire pour les indications de dégâts). L'armure de cheval doit être réglée sur blanc pour afficher les
  couleurs correctes !
- Blockbench utilise un système spécifique d'ID pour les textures, mais lit en fait les textures séquentiellement à
  partir de la configuration. Les ID sont attribués ici en fonction de leur position dans la liste des textures, en
  suivant la façon dont Blockbench le fait.
- Chaque Blueprint d'os est une entité de porte-armure différente en raison des limitations de Minecraft.
- L'armure de cheval en cuir se trouve sur l'emplacement de la tête du porte-armure
- Les porte-armures sont utilisés pour les objets statiques par défaut. //todo : bientôt, je devrai implémenter le
  nouveau système d'affichage alternatif de MC 1.19.4+, il est beaucoup plus efficace.
- Pour éviter les conflits avec d'autres plugins qui modifient l'armure de cheval en cuir, FMM utilise des valeurs de
  données de modèles personnalisés à partir de 50 000.

# Contribuer au projet FreeMinecraftModels (FMM) en général

FMM est en fait financé par la foule par les personnes adorables
sur [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy) ! Toutes les contributions aident plus que vous
ne l'imaginez ;)

# Fonctionnalités actuellement prévues :

- Génération de RSP pour le client Bedrock.
- Gestion des RSP indépendante des propriétés du serveur avec intégration de geyser.
- Entités personnalisées (?).
- tag_projectile comme os méta à partir desquels les projectiles peuvent être tirés (peut en avoir plus d'un par
  modèle).

# Limitations étranges actuelles qui doivent être corrigées :

- Si le point de pivot (origine) d'un Blueprint d'os est réglé à plus de 67, le modèle commence à flotter.
