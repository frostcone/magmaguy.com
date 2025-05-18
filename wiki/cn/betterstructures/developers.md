好的，这是翻译成简体中文的版本，保留了 Markdown 格式：

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

注意：请将 `versionNumber` 替换为插件的当前版本。

# 事件

**注意：事件位于 com.magmaguy.betterstructures.api 包中**

## BuildPlaceEvent

在即将放置构建时触发。通过 FitAnything 对象暴露了关于将要放置哪个构建以及放置在哪里等数据。

**不要尝试修改正在放置的构建！** 你可以修改一些小细节，但改变整个构建可能会导致放置效果不佳。

此事件可取消。

## ChestFillEvent

在填充箱子时触发。使用容器快照库存安全地存储要应用的数据。

对战利品的修改应通过 Spigot 的添加或移除物品方法对快照库存进行。

此事件可取消。

# 关键类

## FitAnything

FitAnything 类是当构建被粘贴时实例化的类，负责处理粘贴的各个方面，包括填充箱子和生成生物。

## WorldGuard

WorldGuard 类处理 WorldGuard 区域保护。提供了实用方法 `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)`，方便开发者在 BetterStructures 之上轻松接入自定义区域保护方案。