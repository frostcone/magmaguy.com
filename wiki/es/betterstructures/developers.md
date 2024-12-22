# Repositorio Público

## Maven
```xml
<repositories>
    <repository>
        <id>magmaguy-repo-releases</id>
        <name>Repositorio de MagmaGuy</name>
        <url>https://repo.magmaguy.com/releases</url>
    </repository>
</repositories>

<dependency>
  <groupId>com.magmaguy</groupId>
  <artifactId>BetterStructures</artifactId>
  <version>¡Comprueba cuál es la última versión!</version>
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
    implementation 'com.magmaguy:BetterStructures:¡Comprueba cuál es la última versión!'
}
```

Nota: reemplaza `versionNumber` con la versión actual del plugin.

# Eventos

**Nota: Los eventos están en com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Se llama cuando una construcción está a punto de colocarse. Expone datos sobre qué construcción se va a colocar y dónde,
entre otras cosas, a través del objeto FitAnything.

**¡No intentes modificar la construcción que se está colocando!** Puedes modificar cosas menores, pero cambiar toda la
construcción probablemente resultará en una construcción con un ajuste deficiente.

Este evento es cancelable.

## ChestFillEvent

Se llama cuando se llena un cofre. Utiliza el inventario de instantánea del contenedor para almacenar de forma segura
los datos que se van a aplicar.

Las modificaciones al botín deben realizarse en el inventario de instantáneas a través del método Spigot para agregar o
eliminar elementos.

Este evento es cancelable.

# Clases clave

## FitAnything

La clase FitAnything es la clase que se instancia cuando se pega una construcción y maneja todos los aspectos del pegado, incluido el llenado de cofres y la generación de mobs.

## WorldGuard

La clase WorldGuard maneja las protecciones de región de WorldGuard. El método de
utilidad `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` está
disponible para que los desarrolladores puedan conectar fácilmente un esquema de protección de región personalizado
además de BetterStructures.
