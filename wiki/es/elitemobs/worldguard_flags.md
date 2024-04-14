Aquí se enumeran las banderas de WorldGuard que tiene EliteMobs y su función.


***

# elitemob-spawning (permitir/negar)
Establece si los Elite Mobs pueden aparecer en la región. El comportamiento predeterminado es que se permite el spawn de Elite Mobs en todas partes, y por lo tanto, el uso principal de esta bandera es desactivarlos para una región específica. Si deseas deshabilitar la generación de Elite Mob para un mundo entero, recomiendo editar el archivo ValidWorlds.yml.


***

# elitemob-only-spawning (permitir/negar)
Establece si solo los Elite Mobs pueden aparecer en una región. Esto no aumenta la cantidad de Elite Mobs que aparecen en un área, solo evita que las entidades mob no elite aparezcan en esa área. Esto es para los usuarios que desean tener áreas enteras donde solo puedan aparecer los Elite Mobs, como arenas o zonas de mayor dificultad.


***

# elitemobs-antiexploit (permitir/negar)
Establece si el antiexploit puede activarse en una región. Permitir permitirá que se ejecute el Antiexploit, negar evitará que se ejecute. Se recomienda negar para arenas y mazmorras ya hechas donde ya has probado el terreno en busca de exploits.

***

También ten en cuenta: los NPC anulan la bandera de negar la aparición de mobs como una forma de compatibilidad de terceros con WorldGuard. Si no deseas tener NPCs en un área, recomiendo eliminarlos manualmente.

***

# elitemobs-maximum-level

Establece el nivel máximo de elite mobs que pueden aparecer en una región. Solo afecta a las elites generadas naturalmente (los Custom Bosses ignoran esto). El nivel debe ser un valor entero (no se admiten valores como `1.5`, debes usar números enteros como `1` o `2`).

***

# elitemobs-minimum-level

Establece el nivel mínimo de elite mobs que pueden aparecer en una región. Solo afecta a las elites generadas naturalmente (los Custom Bosses ignoran esto). El nivel debe ser un valor entero (no se admiten valores como `1.5`, debes usar números enteros como `1` o `2`).

***

# elitemobs-dungeon

Establece el área para permitir solo mobs normales generados con la razón de spawn CUSTOM, así como Regional Bosses y Custom Bosses. Esto es para uso en minidungeons.