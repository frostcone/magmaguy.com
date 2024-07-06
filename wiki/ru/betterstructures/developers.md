# Публичный репозиторий

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

Примечание: замените `versionNumber` на текущую версию плагина.

# События

**Примечание: События находятся в com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Вызывается, когда структура должна быть размещена. Предоставляет данные о том, какая структура будет размещена и где, а также другую информацию через объект FitAnything.

**Не пытайтесь изменять структуру, которая будет размещена!** Вы можете изменять мелкие вещи, но изменение всей структуры, вероятно, приведет к структуре с плохой посадкой.

Это событие можно отменить.

## ChestFillEvent

Вызывается, когда сундук заполняется. Использует инвентарь снимка контейнера для безопасного хранения данных, которые должны быть применены.

Изменения в loot должны быть внесены в инвентарь снимка через метод добавления или удаления предмета Spigot.

Это событие можно отменить.

# Ключевые классы

## FitAnything

Класс FitAnything - это класс, который создается при вставке структуры и обрабатывает все аспекты вставки, включая заполнение сундуков и генерацию мобов.

## WorldGuard

Класс WorldGuard обрабатывает защиту регионов WorldGuard. Метод утилиты `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` доступен разработчикам, чтобы они могли легко подключить схему защиты региона на основе BetterStructures.


