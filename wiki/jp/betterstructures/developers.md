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
  <version>最新バージョンを確認してください!</version>
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
    implementation 'com.magmaguy:BetterStructures:最新バージョンを確認してください!'
}
```

注: `versionNumber` をプラグインの現在のバージョンに置き換えます。

# イベント

**注: イベントは com.magmaguy.betterstructures.api にあります**

## BuildPlaceEvent

ビルドが配置されようとしているときに呼び出されます。FitAnything オブジェクトを介して、配置されるビルドやその場所に関するデータなどが公開されます。

**配置されるビルドを修正しようとしないでください。** 小さなものを変更することはできますが、ビルド全体を変更すると、適切にフィットしないビルドになる可能性があります。

これはキャンセル可能です。

## ChestFillEvent

チェストが満たされるときに呼び出されます。適用するデータを安全に保存するために、コンテナースナップショットインベントリを使用します。

戦利品の変更は、アイテムを追加または削除する Spigot メソッドを使用してスナップショットインベントリに行う必要があります。

これはキャンセル可能です。

# 主要クラス

## FitAnything

FitAnything クラスは、ビルドが貼り付けられたときにインスタンス化され、チェストへの充填やモブの生成など、貼り付けのあらゆる側面を処理するクラスです。

## WorldGuard

WorldGuard クラスは、WorldGuard リージョン保護を処理します。ユーティリティ メソッド `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` は、開発者が BetterStructures の上にカスタム リージョン保護スキームを簡単にフックできるようにするために用意されています。
