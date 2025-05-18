```markdown
# Публичный репозиторий

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

Примечание: замените `versionNumber` на текущую версию плагина.

# События

**Примечание: События находятся в com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Вызывается, когда постройка собирается быть размещена. Предоставляет данные о том, какая постройка будет размещена и где, среди прочего, через объект FitAnything.

**Не пытайтесь изменять размещаемую постройку!** Вы можете изменять незначительные вещи, но изменение всей постройки, вероятно, приведет к плохому соответствию.

Это событие можно отменить.

## ChestFillEvent

Вызывается, когда сундук заполняется. Использует инвентарь-снимок контейнера для безопасного хранения данных, которые будут применены.

Изменения добычи следует вносить в инвентарь-снимок с помощью методов Spigot для добавления или удаления предметов.

Это событие можно отменить.

# Ключевые классы

## FitAnything

Класс FitAnything — это класс, который создается при вставке постройки и обрабатывает все аспекты вставки, включая заполнение сундуков и спавн мобов.

## WorldGuard

Класс WorldGuard обрабатывает защиту регионов WorldGuard. Утилитарный метод `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` доступен для разработчиков, чтобы легко интегрировать собственную схему защиты регионов поверх BetterStructures.
```