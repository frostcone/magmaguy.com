# Публичный репозиторий

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
  <version>Узнайте какая последняя версия!</version>
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
    implementation 'com.magmaguy:BetterStructures:Узнайте какая последняя версия!'
}
```

Примечание: замените `versionNumber` на текущую версию плагина.

# События

**Примечание: События находятся в com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Вызывается, когда сборка собирается быть размещена. Предоставляет данные о том, какая сборка будет размещена и где, среди прочего, через объект FitAnything.

**Не пытайтесь изменить размещаемую сборку!** Вы можете изменить незначительные вещи, но изменение всей сборки,
вероятно, приведет к сборке с плохой подгонкой.

Это событие можно отменить.

## ChestFillEvent

Вызывается, когда сундук заполняется. Использует моментальный снимок инвентаря контейнера для безопасного хранения
данных, которые необходимо применить.

Изменения добычи следует вносить в моментальный снимок инвентаря с помощью метода Spigot для добавления или удаления
предметов.

Это событие можно отменить.

# Ключевые классы

## FitAnything

Класс FitAnything - это класс, который создается, когда сборка вставляется, и обрабатывает каждый аспект вставки,
включая заполнение сундуков и порождение мобов.

## WorldGuard

Класс WorldGuard обрабатывает защиты регионов WorldGuard. Для разработчиков доступен вспомогательный
метод `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)`, позволяющий
легко подключить собственную схему защиты регионов поверх BetterStructures.
