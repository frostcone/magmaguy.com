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
  <version>检查最新版本是什么！</version>
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
    implementation 'com.magmaguy:BetterStructures:检查最新版本是什么！'
}
```

注意：将 `versionNumber` 替换为插件的当前版本。

# 事件

**注意：事件在 com.magmaguy.betterstructures.api 中**

## BuildPlaceEvent

当一个构建即将被放置时调用。通过 FitAnything 对象公开有关将要放置的构建以及放置位置等数据。

**不要尝试修改正在放置的构建！**您可以修改一些小的事情，但更改整个构建可能会导致构建不佳。

这是可取消的。

## ChestFillEvent

当一个箱子被填充时调用。使用容器快照库存来安全地存储要应用的数据。

对战利品的修改应通过添加或删除物品 Spigot 方法对快照库存进行。

这是可取消的。

# 关键类

## FitAnything

FitAnything 类是在构建被粘贴时实例化的类，并处理粘贴的各个方面，包括填充箱子和生成生物。

## WorldGuard

WorldGuard 类处理 WorldGuard 区域保护。实用方法 `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` 可供开发人员使用，以便在 BetterStructures 的基础上轻松挂钩自定义区域保护方案。
