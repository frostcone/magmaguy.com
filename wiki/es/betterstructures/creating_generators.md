```markdown
## Generadores

Los generadores son la parte más potente del sistema de configuración de BetterStructures. Por defecto, hay 27 generadores que gestionan colectivamente más de 200 construcciones distribuidas actualmente por BetterStructures, y aunque puedes crear tus propios generadores, también puedes usar los existentes como atajo.

Los generadores le dicen al plugin dónde exactamente deben aparecer las cosas y definen las tablas de botín. Los generadores por defecto también están nombrados de forma que debería ser muy fácil adivinar lo que hacen.

El único campo obligatorio para los generadores es la configuración `structureType`, que le dice al plugin si la construcción debe aparecer en el cielo, subterráneo poco profundo, subterráneo profundo, superficie o líquido superficial.

***

### isEnabled

Establece si el generador está habilitado.

***

### structureType

Establece qué tipo de estructura es la construcción. **¡Ten en cuenta que puedes hacer una lista de varios tipos!**

Los siguientes son valores válidos para el tipo de estructura:

***

#### surface

```yml
structureType:
- SURFACE
```

Las estructuras de superficie aparecen en la superficie del mundo. La única excepción es el entorno del Nether, donde aparece en puntos que el plugin considera suficientemente parecidos a la superficie.

***

#### sky

```yml
structureType:
- SKY
```

Las estructuras aéreas aparecen entre 80 y 120 bloques por encima del aire, configurable en config.yml. La única excepción es el entorno del Nether, donde aparece en puntos que el plugin considera suficientemente parecidos al aire.

***

#### underground_shallow

```yml
structureType:
- UNDERGROUND_SHALLOW
```

Las estructuras subterráneas poco profundas aparecen entre y=0 e y=60 en el Overworld, y=60 e y=120 en el Nether y en cualquier altura subterránea válida en el End.

_**Nota: ** Notarás que hay dos configuraciones subterráneas. Esto se debe a que tener solo una resulta en un subsuelo muy disperso, ya que Minecraft tiene mucho espacio subterráneo y los jugadores a menudo pasarán por alto estructuras subterráneas simplemente porque no minaron hacia ellas. Esto también garantiza que haya una distribución uniforme en diferentes profundidades._

***

#### underground_deep

```yml
structureType:
- UNDERGROUND_DEEP
```

Las estructuras subterráneas profundas aparecen entre y=-64 e y=0 en el Overworld, y=0 e y=60 en el Nether y no aparecen en el End.

***

#### liquid_surface

```yml
structureType:
- LIQUID_SURFACE
```

Las estructuras líquidas superficiales aparecerán sobre líquidos. En el caso del Overworld, aparecerán sobre agua, y casi siempre en océanos. En el caso del Nether, aparecerán en los lagos de lava. No aparecerán en el End.

***

### lowestYLevel

Establece el nivel Y (altitud) más bajo en el que aparecerá la estructura.

***

### highestYLevel

Establece el nivel Y (altitud) más alto en el que aparecerá la estructura.

***

### validWorlds

Establece la lista de mundos en los que aparecerá la estructura. **Si no hay ninguna lista presente, utilizará todos los mundos permitidos por el plugin**, a menos que esté limitado de otra manera (como por el tipo de entorno o los biomas).

***

### validWorldEnvironments

Establece la lista de entornos de mundo en los que aparecerá la estructura. **Si no hay ninguna lista presente, utilizará todos los entornos de mundo permitidos por el plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` y `CUSTOM`.

***

### validBiomes

Establece la lista de biomas válidos en los que aparecerá la estructura. **¡Si no se define ninguna lista, asumirá que cada bioma es válido!**.

Esto requiere usar la lista de biomas tal como la define la [API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Establece el archivo de tesoro que utilizará el generador. Esto establece lo que aparece en los cofres para todas las construcciones que usan este generador, a menos que se establezca un valor diferente en la [configuración `treasureFile` de una configuración de esquema]($language$/betterstructures/creating_structures.md&section=treasurefile).
```