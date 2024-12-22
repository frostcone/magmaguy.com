Aquí se enumeran los flags de WorldGuard que EliteMobs tiene y su función.

***

# elitemob-spawning (permitir/denegar)

Establece si los Elite Mobs pueden aparecer en la región. El comportamiento predeterminado es que los Elite Mobs pueden
aparecer en todas partes, y por lo tanto, el uso principal de este flag es deshabilitarlos para una región específica.
Si deseas deshabilitar la aparición de Elite Mobs para un mundo entero, te recomiendo editar el archivo ValidWorlds.yml
en su lugar.

***

# elitemob-only-spawning (permitir/denegar)

Establece si solo los Elite Mobs pueden aparecer en una región. Esto no aumenta la cantidad de Elite Mobs que aparecen
en un área, solo evita que las entidades de mobs no élite aparezcan en esa área. Esto es para usuarios que desean tener
áreas enteras donde solo puedan aparecer Elite Mobs, como arenas o zonas de mayor dificultad.

***

# elitemobs-antiexploit (permitir/denegar)

Establece si el antiexploit puede activarse en una región. Permitir dejará que el Antiexploit se ejecute, denegar
evitará que se ejecute. Denegar se recomienda para arenas y mazmorras prefabricadas donde ya has probado el terreno en
busca de exploits.

***

También ten en cuenta: los NPCs anulan el flag de denegación de aparición de mobs como una forma de compatibilidad de
terceros con WorldGuard. Si no deseas tener NPCs en un área, te recomiendo eliminarlos manualmente.

***

# elitemobs-maximum-level

Establece el nivel máximo de mobs élite que pueden aparecer en una región. Solo afecta a los élites que aparecen
naturalmente (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, tienes
que usar números enteros como `1` o `2`).

***

# elitemobs-minimum-level

Establece el nivel mínimo de mobs élite que pueden aparecer en una región. Solo afecta a los élites que aparecen
naturalmente (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, tienes
que usar números enteros como `1` o `2`).

***

# elitemobs-dungeon

Establece el área para permitir solo mobs normales que aparezcan con la razón de aparición CUSTOM, así como Jefes
Regionales y Jefes Personalizados. Esto es para uso en minidungeons.
