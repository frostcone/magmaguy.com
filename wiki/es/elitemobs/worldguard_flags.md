Aquí se listan las banderas de WorldGuard que tiene EliteMobs y su función.

***

# elitemob-spawning (allow/deny)
Establece si los Mobs Élite pueden aparecer en la región. El comportamiento predeterminado es que los Mobs Élite tienen permitido aparecer en todas partes, y por lo tanto, el uso principal de esta bandera es deshabilitarlos para una región específica. Si deseas deshabilitar la aparición de Mobs Élite para un mundo entero, recomiendo editar el archivo ValidWorlds.yml en su lugar.

***

# elitemob-only-spawning (allow/deny)
Establece si solo los Mobs Élite pueden aparecer en una región. Esto no aumenta la cantidad de Mobs Élite que aparecen en un área, solo evita que las entidades de mobs no élite aparezcan en esa área. Esto es para usuarios que desean tener áreas enteras donde solo puedan aparecer Mobs Élite, como arenas o zonas de mayor dificultad.

***

# elitemobs-antiexploit (allow/deny)
Establece si el antiexploit puede activarse en una región. 'Allow' permitirá que el Antiexploit se ejecute, 'deny' evitará que se ejecute. 'Deny' se recomienda para arenas y mazmorras prefabricadas donde ya has probado el terreno en busca de exploits.

***

Ten en cuenta también: Los NPCs anulan la bandera 'mob-spawning deny' como una forma de compatibilidad con WorldGuard de terceros. Si no deseas tener NPCs en un área, recomiendo eliminarlos manualmente.

***

# elitemobs-maximum-level

Establece el nivel máximo de mobs élite que pueden aparecer en una región. Solo afecta a los élites que aparecen de forma natural (los Jefes Personalizados ignoran esto). El nivel debe ser un valor entero (no valores como `1.5`, debes usar números enteros como `1` o `2`).

***

# elitemobs-minimum-level

Establece el nivel mínimo de mobs élite que pueden aparecer en una región. Solo afecta a los élites que aparecen de forma natural (los Jefes Personalizados ignoran esto). El nivel debe ser un valor entero (no valores como `1.5`, debes usar números enteros como `1` o `2`).

***

# elitemobs-dungeon

Establece que el área solo permita mobs normales que aparecen con la razón de aparición CUSTOM, así como Jefes Regionales y Jefes Personalizados. Esto es para usar en minidungeons.