## Generadores

Los generadores son la parte más potente del sistema de configuración para BetterStructures. Por defecto hay 27 generadores que gestionan colectivamente más de 200 construcciones distribuidas actualmente por BetterStructures, y aunque puedes crear tus propios generadores, también puedes usar los existentes como un atajo.

Los generadores indican al plugin dónde exactamente deben aparecer las cosas y definen las tablas de botín. Los generadores por defecto también están nombrados de formas que deberían ser muy fáciles de adivinar qué hacen.

El único campo obligatorio para los generadores es el ajuste `structureType`, que indica al plugin si el edificio está destinado a aparecer en el cielo, bajo tierra superficialmente, bajo tierra profundamente, superficie o líquido de superficie.

***

### isEnabled

Determina si el generador está habilitado.

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

Las estructuras de superficie aparecen en la superficie del mundo. La única excepción es el ambiente del Nether, donde aparece en puntos que el complemento considera suficientemente parecidos a la superficie.

***

#### sky

```yml
structureType: 
- SKY
```

Las estructuras del cielo aparecen entre 80 y 120 bloques por encima del aire, configurable en config.yml. La única excepción es el entorno del Nether, donde aparece en puntos que el complemento considera suficientemente parecidos al aire.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

Las estructuras subterráneas superficiales aparecen entre y=0 y y=60 en el overworld, y=60 y y=120 en el nether y cualquier altura subterránea válida en el End.

_**Nota: ** Te darás cuenta de que hay dos configuraciones subterráneas. Esto se debe a que tener solo una resulta en tener un subsuelo muy escaso, ya que Minecraft tiene mucho espacio subterráneo y los jugadores a menudo se pierden la estructura subterránea simplemente porque no cavaron en ellas. Esto también garantiza que hay una distribución uniforme a lo largo de diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

Las estructuras subterráneas profundas aparecen entre y=-64 y y=0 en el overworld, y=0 y y=60 en el nether y no aparecen en el End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

Las estructuras de superficie líquida aparecerán en líquidos. En el caso del overworld, aparecerán en agua, y casi siempre en océanos. En el caso del Nether, aparecerán en los lagos de lava. No aparecerán en el End.

***

### lowestYLevel

Establece el nivel Y más bajo (altitud) en el que aparecerá la estructura.

***

### highestYLevel

Establece el nivel Y más alto (altitud) en el que aparecerá la estructura.

***

### validWorlds

Establece la lista de mundos en los que aparecerá la estructura. **Si no se presenta ninguna lista, usará todos los mundos permitidos por el plugin**, a menos que esté limitado de otra manera (como por el tipo de entorno o los biomas).

***

### validWorldEnvironments

Establece la lista de entornos de mundo en los que aparecerá la estructura. **Si no se presenta ninguna lista, usará todos los entornos de mundo permitidos por el plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` y `CUSTOM`.

***

### validBiomes

Establece la lista de biomas válidos en los que aparecerá la estructura. **¡Si no se define ninguna lista, asumirá que cada bioma es válido!**.

Esto requiere usar la lista de biomas definida por la [API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Establece el archivo de tesoro que utilizará el generador. Esto establece lo que aparece en los cofres para todas las construcciones que usen este generador, a menos que se establezca un valor diferente en la configuración de un [esquema `treasureFile`]($language$/betterstructures/creating_structures.md&section=treasurefile).
