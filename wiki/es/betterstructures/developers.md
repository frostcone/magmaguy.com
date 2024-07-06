# Repositorio público

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

Nota: Reemplaza `versionNumber` con la versión actual del complemento.

# Eventos

**Nota: Los eventos están en com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Se llama cuando una construcción está a punto de ser colocada. Expone datos sobre qué construcción se va a colocar y dónde, entre otras cosas, a través del objeto FitAnything.

**¡No intentes modificar la construcción que se está colocando!** Puedes modificar cosas menores, pero cambiar toda la construcción probablemente resultará en una construcción con un ajuste deficiente.

Esto es cancelable.

## ChestFillEvent

Se llama cuando se llena un cofre. Utiliza el inventario de instantáneas del contenedor para almacenar de forma segura los datos que se aplicarán.

Las modificaciones al botín deben realizarse en el inventario de instantáneas a través del método Spigot para agregar o eliminar elementos.

Esto es cancelable.

# Clases clave

## FitAnything

La clase FitAnything es la clase que se instancia cuando se pega una construcción y maneja todos los aspectos de la pasta, incluido el llenado de cofres y la generación de mobs.

## WorldGuard

La clase WorldGuard maneja las protecciones de la región WorldGuard. El método de utilidad `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` está disponible para que los desarrolladores conecten fácilmente un esquema de protección de región personalizado sobre BetterStructures.

