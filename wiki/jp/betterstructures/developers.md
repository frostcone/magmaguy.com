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
  <version>最新バージョンを確認してください！</version>
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
    implementation 'com.magmaguy:BetterStructures:最新バージョンを確認してください！'
}
```

注: `versionNumber` をプラグインの現在のバージョンに置き換えてください。

# イベント

**注意: イベントは com.magmaguy.betterstructures.api にあります**

## BuildPlaceEvent

ビルドが配置されようとするときに呼び出されます。FitAnythingオブジェクトを通して、どのビルドがどこに配置されるかなどに関するデータが公開されます。

**配置されるビルドを修正しようとしないでください！** 細かい変更はできますが、ビルド全体を変更すると、おそらくフィット感が悪いビルドになります。

これはキャンセル可能です。

## ChestFillEvent

チェストが満たされるときに呼び出されます。コンテナスナップショットインベントリを使用して、適用されるデータを安全に保存します。

ルートの変更は、Spigotのアイテム追加または削除メソッドを使用してスナップショットインベントリに対して行う必要があります。

これはキャンセル可能です。

# 主要なクラス

## FitAnything

FitAnythingクラスは、ビルドがペーストされたときにインスタンス化され、チェストの充填やモブのスポーンなど、ペーストのあらゆる側面を処理するクラスです。

## WorldGuard

WorldGuardクラスは、WorldGuardのリージョン保護を処理します。ユーティリティメソッド `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)`
は、開発者がBetterStructuresの上にカスタムリージョン保護スキームを簡単にフックできるように提供されています。
