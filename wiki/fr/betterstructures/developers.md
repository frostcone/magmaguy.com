# Dépôt Public

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
  <version>Vérifiez quelle est la dernière version !</version>
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
    implementation 'com.magmaguy:BetterStructures:Vérifiez quelle est la dernière version !'
}
```

Note : remplacez `versionNumber` par la version actuelle du plugin.

# Événements

**Note : Les événements se trouvent dans com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Appelé lorsqu'une construction est sur le point d'être placée. Expose des données sur quelle construction va être placée
et où, entre autres choses, à travers l'objet FitAnything.

**N'essayez pas de modifier la construction en cours de placement !** Vous pouvez modifier des éléments mineurs, mais
changer toute la construction entraînera probablement une construction avec un ajustement médiocre.

Ceci est annulable.

## ChestFillEvent

Appelé lorsqu'un coffre est rempli. Utilise l'instantané d'inventaire du conteneur pour stocker en toute sécurité les
données à appliquer.

Les modifications au butin doivent être effectuées sur l'instantané d'inventaire via la méthode Spigot d'ajout ou de
suppression d'éléments.

Ceci est annulable.

# Classes clés

## FitAnything

La classe FitAnything est la classe qui est instanciée lorsqu'une construction est collée et gère tous les aspects du
collage, y compris le remplissage des coffres et l'apparition de créatures.

## WorldGuard

La classe WorldGuard gère les protections de région WorldGuard. La méthode
utilitaire `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` est mise
à disposition des développeurs pour qu'ils puissent facilement intégrer un système de protection de région personnalisé
en plus de BetterStructures.
