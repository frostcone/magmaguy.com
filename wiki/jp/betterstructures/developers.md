# 公開リポジトリ

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

注意: `versionNumber` はプラグインの現在のバージョンに置き換えてください。

# イベント

**注意: イベントは com.magmaguy.betterstructures.api にあります**

## BuildPlaceEvent

構造が配置されようとしているときに呼び出されます。FitAnything オブジェクトを通じて、配置しようとしている構造や配置場所などのデータが公開されます。

**配置しようとしている構造を変更しようとしないでください！** わずかな変更はできますが、構造全体を変更すると、フィット感の悪い構造になる可能性があります。

これはキャンセル可能です。

## ChestFillEvent

チェストが満たされたときに呼び出されます。コンテナのスナップショットインベントリを使用して、安全に適用するデータを格納します。

戦利品の変更は、add または remove item Spigot メソッドを通じてスナップショットインベントリに行う必要があります。

これはキャンセル可能です。

# 主要なクラス

## FitAnything

FitAnything クラスは、構造がペーストされたときにインスタンス化されるクラスで、チェストの補充やモブのスポーンを含む、ペーストのあらゆる側面を処理します。

## WorldGuard

WorldGuard クラスは、WorldGuard のリージョン保護を処理します。ユーティリティメソッド `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` は、開発者が BetterStructures の上にカスタムリージョン保護スキームを簡単にフックできるようにするために提供されています。

```





