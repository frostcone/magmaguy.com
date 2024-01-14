As of writing this, there is no maven repository for BetterStructures, so it has to be imported manually.

# Gradle repository
```
<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version><checkThisOne>-SNAPSHOT</version>
</dependency>
```

Note: replace <checkThisOne> with the current version of the plugin.

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