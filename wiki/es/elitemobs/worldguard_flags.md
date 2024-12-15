Aquí se enumeran los indicadores de WorldGuard que tiene EliteMobs y su función.

***

# elitemob-spawning (permitir/denegar)
Establece si los mobs de élite pueden aparecer en la región. El comportamiento predeterminado es que se permita que los mobs de élite aparezcan en todas partes, y por lo tanto, el uso principal de este indicador es deshabilitarlos para una región específica. Si desea deshabilitar la aparición de mobs de élite para un mundo entero, le recomiendo que edite el archivo ValidWorlds.yml en su lugar.

***

# elitemob-only-spawning (permitir/denegar)
Establece si solo los mobs de élite pueden aparecer en una región. Esto no aumenta la cantidad de mobs de élite que aparecen en un área, solo evita que las entidades de mobs que no son de élite aparezcan en esa área. Esto es para los usuarios que desean tener áreas enteras donde solo puedan aparecer mobs de élite, como arenas o zonas de mayor dificultad.

***

# elitemobs-antiexploit (permitir/denegar)
Establece si el antiexploit puede activarse en una región. Permitir permitirá que se ejecute Antiexploit, denegar evitará que se ejecute. Se recomienda denegar para arenas y mazmorras prefabricadas donde ya ha probado el terreno en busca de exploits.

***

También tenga en cuenta: los NPC invalidan el indicador de denegación de aparición de mobs como una forma de compatibilidad de terceros con WorldGuard. Si no desea tener NPC en un área, le recomiendo que los elimine manualmente.

***

# elitemobs-maximum-level

Establece el nivel máximo de mobs de élite que pueden aparecer en una región. Solo afecta a las élites generadas de forma natural (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, debe usar números enteros como `1` o `2`).

***

# elitemobs-minimum-level

Establece el nivel mínimo de mobs de élite que pueden aparecer en una región. Solo afecta a las élites generadas de forma natural (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, debe usar números enteros como `1` o `2`).

***

# elitemobs-dungeon

Establece el área para que solo permita mobs normales generados con el motivo de generación CUSTOM, así como jefes regionales y jefes personalizados. Esto es para uso en minimazmorras.
