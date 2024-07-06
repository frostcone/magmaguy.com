# Référentiel Public

## Maven
```xml
<repositories>
    <repository>
        <id>oss-sonatype</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots/</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>versionNumber-SNAPSHOT</version>
</dependency>
```

# Gradle
```kt
repositories {
    maven {
        url 'https://oss.sonatype.org/content/repositories/snapshots'
    }
}

dependencies {
    implementation 'com.magmaguy:BetterStructures:versionNumber-SNAPSHOT'
}
```

Note : remplacez `versionNumber` par la version actuelle du plugin.

# Événements

**Note : Les événements se trouvent dans com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Appelé lorsqu'une construction est sur le point d'être placée. Expose des données sur la construction qui va être placée et où, entre autres choses, via l'objet FitAnything.

**N'essayez pas de modifier la construction en cours de placement !** Vous pouvez modifier des choses mineures, mais modifier la construction entière entraînera probablement une construction mal ajustée.

Cet événement est annulable.

## ChestFillEvent

Appelé lorsqu'un coffre est rempli. Utilise l'inventaire instantané du conteneur pour stocker en toute sécurité les données à appliquer.

Les modifications du butin doivent être effectuées dans l'inventaire instantané via la méthode Spigot d'ajout ou de suppression d'élément.

Cet événement est annulable.

# Classes clés

## FitAnything

La classe FitAnything est la classe qui est instanciée lorsqu'une construction est collée et gère tous les aspects du collage, y compris le remplissage des coffres et l'apparition des monstres.

## WorldGuard

La classe WorldGuard gère les protections de région WorldGuard. La méthode utilitaire `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` est mise à la disposition des développeurs pour leur permettre d'intégrer facilement un système de protection de région personnalisé en plus de BetterStructures.
