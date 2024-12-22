# 公共仓库

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
  <version>检查最新的版本！</version>
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
    implementation 'com.magmaguy:BetterStructures:检查最新的版本!'
}
```

注意：将 `versionNumber` 替换为插件的当前版本。

# 事件

**注意：事件位于 com.magmaguy.betterstructures.api 中**

## BuildPlaceEvent

当一个建筑即将被放置时调用。通过 FitAnything 对象，可以获取关于哪个建筑将被放置以及放置位置的数据。

**不要尝试修改正在放置的建筑！** 你可以修改一些小地方，但更改整个建筑可能会导致放置的建筑不合适。

这是可以取消的。

## ChestFillEvent

当一个箱子被填充时调用。使用容器快照 inventory 安全地存储要应用的数据。

对战利品的修改应该通过添加或删除物品的 Spigot 方法对快照 inventory 进行。

这是可以取消的。

# 主要类

## FitAnything

FitAnything 类是在粘贴建筑时实例化的类，处理粘贴的每个方面，包括填充箱子和生成生物。

## WorldGuard

WorldGuard 类处理 WorldGuard
区域保护。实用方法 `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)`
可供开发人员轻松地在 BetterStructures 之上钩入自定义区域保护方案。
