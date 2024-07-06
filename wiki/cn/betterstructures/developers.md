# 公共仓库

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
  <version>版本号-SNAPSHOT</version>
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
    implementation 'com.magmaguy:BetterStructures:版本号-SNAPSHOT'
}
```

注意：将“版本号”替换为插件的当前版本。

# 事件

**注意：事件位于 com.magmaguy.betterstructures.api 中**

## BuildPlaceEvent

在即将放置建筑时调用。通过 FitAnything 对象公开有关将要放置哪个建筑以及放置在哪里的数据等。

**不要尝试修改要放置的建筑！** 您可以修改一些小东西，但更改整个建筑可能会导致建筑与环境不符。

这是可取消的。

## ChestFillEvent

在填充箱子时调用。使用容器快照库存安全地存储要应用的数据。

对战利品的修改应该通过添加或删除物品的 Spigot 方法对快照库存进行。

这是可取消的。

# 关键类

## FitAnything

FitAnything 类是在粘贴建筑时实例化的类，它处理粘贴的各个方面，包括填充箱子和生成生物。

## WorldGuard

WorldGuard 类处理 WorldGuard 区域保护。实用方法 `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` 可供开发人员轻松地连接到 BetterStructures 之上的自定义区域保护方案。
