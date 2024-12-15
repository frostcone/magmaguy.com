## Generadores

Los generadores son la parte más poderosa del sistema de configuración de BetterStructures. De forma predeterminada, hay 27 generadores que gestionan colectivamente más de 200 construcciones actualmente distribuidas por BetterStructures, y si bien puede crear sus propios generadores, también puede usar los existentes como un atajo.

Los generadores le dicen al plugin dónde exactamente deberían aparecer las cosas y definen las tablas de botín. Los generadores predeterminados también tienen nombres que deberían ser muy fáciles de adivinar lo que hacen.

El único campo obligatorio para los generadores es la configuración de `structureType`, que le dice al plugin si el edificio está destinado a aparecer en el cielo, en las profundidades subterráneas, en las profundidades subterráneas, en la superficie o en la superficie líquida.

***

### isEnabled

Establece si el generador está habilitado.

***

### structureType

Establece qué tipo de estructura es la construcción. **¡Tenga en cuenta que puede crear una lista de varios tipos!**

Los siguientes son valores de tipo de estructura válidos:

***

#### surface

```yml
structureType: 
- SURFACE
```

Las estructuras de superficie aparecen en la superficie del mundo. La única excepción es el entorno del Nether, donde aparece en puntos que el plugin considera suficientemente similares a la superficie.

***

#### sky

```yml
structureType: 
- SKY
```

Las estructuras del cielo aparecen entre 80 y 120 bloques sobre el aire, configurable en config.yml. La única excepción es el entorno del Nether, donde aparece en puntos que el plugin considera suficientemente similares al aire.

***

#### underground_shallow

```yml
structureType: 
- UNDERGROUND_SHALLOW
```

Las estructuras subterráneas superficiales aparecen entre y=0 e y=60 en el supramundo, y=60 e y=120 en el nether y cualquier altura subterránea válida en el End.

_**Nota:** Notará que hay dos configuraciones subterráneas. Esto se debe a que tener solo una resulta en tener un subsuelo muy disperso, ya que Minecraft tiene mucho espacio subterráneo y los jugadores a menudo se pierden la estructura subterránea simplemente porque no se metieron en ella. Esto también garantiza que haya una distribución uniforme en diferentes profundidades._

***

#### underground_deep

```yml
structureType: 
- UNDERGROUND_DEEP
```

Las estructuras subterráneas profundas aparecen entre y=-64 e y=0 en el supramundo, y=0 e y=60 en el nether y no aparecen en el End.

***

#### liquid_surface

```yml
structureType: 
- LIQUID_SURFACE
```

Las estructuras de superficie líquida aparecerán en líquidos. En el caso del supramundo, aparecerán en el agua y casi siempre en los océanos. En el caso del Nether, aparecerán en los lagos de lava. No aparecerán en el End.

***

### lowestYLevel

Establece el nivel Y (altitud) más bajo en el que aparecerá la estructura.

***

### highestYLevel

Establece el nivel Y (altitud) más alto en el que aparecerá la estructura.

***

### validWorlds

Establece la lista de mundos en los que aparecerá la estructura. **Si no hay una lista presente, utilizará todos los mundos permitidos por el plugin**, a menos que esté limitado de otra manera (como por el tipo de entorno o los biomas).

***

### validWorldEnvironments

Establece la lista de entornos mundiales en los que aparecerá la estructura. **Si no hay una lista presente, utilizará todos los entornos mundiales permitidos por el plugin**. Valores válidos: `NORMAL`, `NETHER`, `END` y `CUSTOM`.

***

### validBiomes

Establece la lista de biomas válidos en los que aparecerá la estructura. **Si no se define una lista, ¡asumirá que todos los biomas son válidos!**.

Esto requiere usar la lista de biomas según lo definido por la [API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/block/Biome.html).

***

### treasureFilename

Establece el archivo de tesoro que utilizará el generador. Esto establece lo que aparece en los cofres para todas las construcciones que usan este generador, a menos que se establezca un valor diferente en una [configuración esquemática de `treasureFile`]($language$/betterstructures/creating_structures.md&section=treasurefile).
