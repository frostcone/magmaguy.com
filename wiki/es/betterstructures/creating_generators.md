## Generadores

Los generadores son la parte más poderosa del sistema de configuración de BetterStructures. De forma predeterminada, hay 27 generadores que administran colectivamente más de 200 construcciones actualmente distribuidas por BetterStructures, y si bien puedes crear tus propios generadores, también puedes usar los existentes como acceso directo.

Los generadores le dicen al complemento dónde deben generarse exactamente las cosas y definen las tablas de botín. Los generadores predeterminados también tienen nombres que deberían ser muy fáciles de adivinar qué hacen.

El único campo obligatorio para los generadores es la configuración `structureType`, que le dice al complemento si la construcción está destinada a generarse en el cielo, bajo tierra poco profunda, bajo tierra profunda, superficie o líquido superficial.

***

### isEnabled

Establece si el generador está habilitado.

***

### structureType

Establece qué tipo de estructura es la construcción. **¡Ten en cuenta que puedes hacer una lista de varios tipos!**

Los siguientes son valores válidos de tipo de estructura:

***

#### surface

```yml
structureType: 
- SURFACE
```

Las estructuras de superficie se generan en la superficie del mundo. La única excepción es el entorno del Nether, donde se genera en puntos que el complemento considera suficientemente parecidos a la superficie.

***

#### sky

```yml
structureType: 
- SKY
```

Las estructuras del cielo se generan entre 80 y 120 bloques por encima del aire, configurable en config.yml. La única excepción es el entorno del Nether, donde se genera en puntos que el complemento considera suficientemente parecidos al aire.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

Las estructuras subterráneas poco profundas se generan entre y=0 e y=60 en el Overworld, y=60 e y=120 en el Nether y cualquier altura subterránea válida en el End.

_**Nota:** Notarás que hay dos configuraciones subterráneas. Esto se debe a que tener solo una da como resultado un subsuelo muy escaso, ya que Minecraft tiene mucho espacio subterráneo y los jugadores a menudo se pierden la estructura subterránea simplemente porque no la extrajeron. Esto también garantiza que haya una distribución uniforme en diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

Las estructuras subterráneas profundas se generan entre y=-64 e y=0 en el Overworld, y=0 e y=60 en el Nether y no se generan en el End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

Las estructuras superficiales líquidas se generarán en líquidos. En el caso del Overworld, se generarán en el agua y casi siempre en los océanos. En el caso del Nether, se generarán en los lagos de lava. No se generarán en el End.

***

### lowestYLevel

Establece el nivel Y más bajo (altitud) en el que se generará la estructura.

***

### highestYLevel

Establece el nivel Y más alto (altitud) en el que se generará la estructura.

***

### validWorlds

Establece la lista de mundos en los que se generará la estructura. **Si no hay una lista presente, utilizará todos los mundos permitidos por el complemento**, a menos que esté limitado de otra manera (como por el tipo de entorno o los biomas).

***

### validWorldEnvironments

Establece la lista de entornos mundiales en los que se generará la estructura. **Si no hay una lista presente, utilizará todos los entornos mundiales permitidos por el complemento**. Valores válidos: `NORMAL`, `NETHER`, `END` y `CUSTOM`.

***

### validBiomes

Establece la lista de biomas válidos en los que se generará la estructura. **¡Si no se define ninguna lista, asumirá que todos los biomas son válidos!**.

Esto requiere usar la lista de biomas según lo define la [API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Establece el archivo de tesoro que utilizará el generador. Esto establece lo que se genera en los cofres para todas las construcciones que usan este generador, a menos que se establezca un valor diferente en la [configuración `treasureFile` de la configuración esquemática]($language$/betterstructures/creating_structures.md&section=treasurefile).


