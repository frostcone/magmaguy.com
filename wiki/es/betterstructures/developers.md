Aquí tienes la traducción al español, manteniendo el formato markdown:

# Repositorio Público

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

Nota: reemplaza `Check what the latest version is!` con la versión actual del plugin.

# Eventos

**Nota: Los eventos están en com.magmaguy.betterstructures.api**

## BuildPlaceEvent

Se llama cuando una construcción está a punto de ser colocada. Expone datos sobre qué construcción se va a colocar y dónde, entre otras cosas, a través del objeto FitAnything.

**¡No intentes modificar la construcción que se está colocando!** Puedes modificar cosas menores, pero cambiar toda la construcción probablemente resultará en una construcción con un ajuste deficiente.

Esto es cancelable.

## ChestFillEvent

Se llama cuando un cofre es llenado. Utiliza el inventario de la instantánea del contenedor para almacenar de forma segura los datos a aplicar.

Las modificaciones al botín deben hacerse en el inventario de la instantánea a través del método Spigot para añadir o eliminar ítems.

Esto es cancelable.

# Clases clave

## FitAnything

La clase FitAnything es la clase que se instancia cuando se pega una construcción y maneja todos los aspectos del pegado, incluyendo el llenado de cofres y la generación de mobs.

## WorldGuard

La clase WorldGuard maneja las protecciones de región de WorldGuard. El método de utilidad `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` está disponible para que los desarrolladores puedan integrar fácilmente un esquema de protección de región personalizado además de BetterStructures.