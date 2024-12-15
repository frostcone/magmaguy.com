# Публичный Репозиторий

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>Репозиторий MagmaGuy</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>Проверьте, какая последняя версия!</version>
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
    implementation 'com.magmaguy:BetterStructures:Проверьте, какая последняя версия!'
}
```

Примечание: замените `versionNumber` на текущую версию плагина.

# События

**Примечание: События находятся в com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Вызывается, когда сборка собирается быть размещена. Предоставляет данные о том, какая сборка будет размещена и где, среди прочего, через объект FitAnything.

**Не пытайтесь изменять размещаемую сборку!** Вы можете изменять незначительные вещи, но изменение всей сборки, вероятно, приведет к сборке с плохой подгонкой.

Это событие можно отменить.

## ChestFillEvent

Вызывается, когда сундук заполняется. Использует снимок инвентаря контейнера для безопасного хранения данных, которые нужно применить.

Изменения лута следует вносить в снимок инвентаря через метод Spigot для добавления или удаления предмета.

Это событие можно отменить.

# Ключевые классы

## FitAnything

Класс FitAnything — это класс, который создается при вставке сборки и обрабатывает каждый аспект вставки, включая заполнение сундуков и спавн мобов.

## WorldGuard

Класс WorldGuard обрабатывает защиты регионов WorldGuard. Вспомогательный метод `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` предоставляется разработчикам для легкого подключения пользовательской схемы защиты регионов поверх BetterStructures.
