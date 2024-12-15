# Dépôt public

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>Dépôt de MagmaGuy</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>Vérifiez quelle est la dernière version !</version>
  <scope>provided</scope>
</dependency>
```

# Gradle
```kt
repositories {
  maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
  }
}

dependencies {
    implementation 'com.magmaguy:BetterStructures:Vérifiez quelle est la dernière version !'
}
```

Remarque : remplacez `versionNumber` par la version actuelle du plugin.

# Événements

**Remarque : les événements se trouvent dans com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Appelé lorsqu'une compilation est sur le point d'être placée. Expose les données concernant la compilation qui va être placée et où, entre autres choses, via l'objet FitAnything.

**N'essayez pas de modifier la compilation en cours de placement !** Vous pouvez modifier des éléments mineurs, mais changer l'ensemble de la compilation entraînera probablement une compilation mal ajustée.

Cela peut être annulé.

## ChestFillEvent

Appelé lorsqu'un coffre est rempli. Utilise l'inventaire d'instantané de conteneur pour stocker en toute sécurité les données à appliquer.

Les modifications du butin doivent être apportées à l'inventaire d'instantané via la méthode Spigot d'ajout ou de suppression d'objets.

Cela peut être annulé.

# Classes clés

## FitAnything

La classe FitAnything est la classe qui est instanciée lorsqu'une compilation est collée et gère tous les aspects du collage, y compris le remplissage des coffres et la génération de mobs.

## WorldGuard

La classe WorldGuard gère les protections de région de WorldGuard. La méthode utilitaire `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` est mise à disposition pour que les développeurs puissent facilement raccorder un schéma de protection de région personnalisé en plus de BetterStructures.
