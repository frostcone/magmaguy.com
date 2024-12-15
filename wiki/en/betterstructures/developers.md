# Public Repository

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>MagmaGuy's Repository</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>Check what the latest version is!</version>
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
    implementation 'com.magmaguy:BetterStructures:Check what the latest version is!'
}
```

Note: replace `versionNumber` with the current version of the plugin.

# Events

**Note: Events are in com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Called when a build is about to be placed. Exposes data about which build is going to be placed and where, among other things, through the FitAnything object.

**Don't attempt to modify the build getting placed!** You can modify minor things, but changing the whole build will probably result in a build with a poor fit.

This is cancellable.

## ChestFillEvent

Called when a chest is filled. Uses the container snapshot inventory to safely store the data to be applied.

Modifications to the loot should be done to the snapshot inventory through the add or remove item Spigot method.

This is cancellable.

# Key classes

## FitAnything

The FitAnything class is the class that gets instantiated when a build gets pasted in and handles every aspect of the paste, including filling chests and spawning mobs.

## WorldGuard

The WorldGuard class handles the WorldGuard region protections. The utility method `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` is made available for developers to easily hook in a custom region protection scheme on top of BetterStructures.