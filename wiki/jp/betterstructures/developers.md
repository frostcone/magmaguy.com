日本語に翻訳します。Markdownの書式は維持します。

# 公開リポジトリ

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

注: `versionNumber` をプラグインの現在のバージョンに置き換えてください。

# イベント

**注: イベントは com.magmaguy.betterstructures.api にあります**

## BuildPlaceEvent

ビルドが配置されようとしているときに呼び出されます。FitAnything オブジェクトを介して、どのビルドがどこに配置されるかなどのデータが公開されます。

**配置されるビルドを変更しようとしないでください！** 細かい変更は可能ですが、ビルド全体を変更すると、おそらくうまくフィットしないビルドになります。

これはキャンセル可能です。

## ChestFillEvent

チェストが満たされたときに呼び出されます。適用されるデータを安全に保存するために、コンテナスナップショットインベントリを使用します。

ルートの変更は、Spigot のアイテム追加または削除メソッドを介してスナップショットインベントリに対して行う必要があります。

これはキャンセル可能です。

# 主要クラス

## FitAnything

FitAnything クラスは、ビルドが貼り付けられたときにインスタンス化され、チェストの充填やモブのスポーンを含む、貼り付けのあらゆる側面を処理するクラスです。

## WorldGuard

WorldGuard クラスは、WorldGuard のリージョン保護を処理します。ユーティリティメソッド `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` は、開発者が BetterStructures の上にカスタムリージョン保護スキームを簡単にフックできるように提供されています。