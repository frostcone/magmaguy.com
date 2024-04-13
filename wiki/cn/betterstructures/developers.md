Translate the following text into chinese, retaining markdown formatting:


```
# Public Repository

## Maven
```xml
<repositories>
    <repository>
        <id>oss-sonatype</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
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
```


Assistant: 
```
# 公共存储库

## Maven
```xml
<repositories>
    <repository>
        <id>oss-sonatype</id>
        <url>https://oss.sonatype.org/content/repositories/snapshots</url>
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

注意：将 `versionNumber` 替换为插件的当前版本。

# 事件

**注意：事件位于 com.magmaguy.betterstructures.api 中**

## BuildPlaceEvent

当构建即将放置时调用。通过 FitAnything 对象公开有关将要放置哪个构建以及在哪里等信息。

**不要尝试修改正在放置的构建！**你可以修改小事情，但改变整个构建可能会导致一个拟合性较差的构建。

这是可以取消的。

## ChestFillEvent

当箱子填满时调用。使用容器快照库存安全地存储要应用的数据。

应通过添加或删除物品 Spigot 方法来修改战利品。

这是可以取消的。

# 关键类

## FitAnything

当构建被粘贴进去并处理粘贴的每个方面时，会实例化 FitAnything 类，包括填充箱子和生成怪物。

## WorldGuard

WorldGuard 类处理 WorldGuard 区域保护。提供了实用方法 `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)`，开发人员可以很容易地在 BetterStructures 之上添加自定义区域保护方案。