# Repositorio Público

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
  <version>numeroDeVersion-SNAPSHOT</version>
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
    implementation 'com.magmaguy:BetterStructures:numeroDeVersion-SNAPSHOT'
}
```

Nota: reemplaza `numeroDeVersion` con la versión actual del complemento.

# Eventos

**Nota: Los eventos están en com.magmaguy.betterstructures.api**

## Evento de Ubicación de la Construcción (BuildPlaceEvent)

Se llama cuando se va a colocar una construcción. Expone datos sobre qué construcción se va a colocar y dónde, entre otras cosas, a través del objeto FitAnything.

**¡No intentes modificar la construcción que se está colocando!** Puedes modificar cosas menores, pero cambiar la construcción completa probablemente resultará en una construcción con un ajuste deficiente.

Este es cancelable.

## Evento de Llenado del Cofre (ChestFillEvent)

Se llama cuando un cofre se llena. Utiliza el inventario de instantáneas del contenedor para almacenar de manera segura los datos a aplicar.

Las modificaciones al botín deberían hacerse al inventario de instantáneas a través del método Spigot de agregar o eliminar un artículo.

Este es cancelable.

# Clases Clave

## FitAnything

La clase FitAnything es la clase que se instancia cuando una construcción se pega y maneja cada aspecto de la pega, incluido llenar cofres y generar mobs.

## WorldGuard

La clase WorldGuard maneja las protecciones de regiones de WorldGuard. El método de utilidad `public static ProtectedRegion generateProtectedRegion(FitAnything fitAnything, String regionName)` se pone a disposición de los desarrolladores para facilitar la incorporación de un esquema personalizado de protección de región en BetterStructures. 