Aquí se enumeran las banderas de WorldGuard que tiene EliteMobs y su función.


***

# elitemob-spawning (permitir/denegar)
Establece si las turbas de élite pueden aparecer en la región. El comportamiento predeterminado es que las turbas de élite pueden aparecer en todas partes y, por lo tanto, el uso principal de esta bandera es deshabilitarlas para una región específica. Si deseas deshabilitar la generación de turbas de élite para todo un mundo, te recomiendo editar el archivo ValidWorlds.yml en su lugar.


***

# elitemob-only-spawning (permitir/denegar)
Establece si solo las turbas de élite pueden aparecer en una región. Esto no aumenta la cantidad de turbas de élite que aparecen en un área, solo evita que aparezcan entidades de turbas que no son de élite en esa área. Esto es para usuarios que desean tener áreas completas donde solo pueden aparecer turbas de élite, como arenas o zonas de mayor dificultad.


***

# elitemobs-antiexploit (permitir/denegar)
Establece si el antiexploit se puede activar en una región. Permitir permitirá que se ejecute Antiexploit, denegar evitará que se ejecute. Se recomienda denegar para arenas y mazmorras prefabricadas donde ya hayas probado el terreno en busca de exploits.

***

También ten en cuenta: los NPC anulan la bandera de denegación de generación de turbas como una forma de compatibilidad de terceros con WorldGuard. Si no deseas tener NPC en un área, te recomiendo eliminarlos manualmente.

***

# elitemobs-maximum-level

Establece el nivel máximo de turbas de élite que pueden aparecer en una región. Solo afecta a las élites generadas naturalmente (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, tienes que usar números enteros como `1` o `2`).

***

# elitemobs-minimum-level

Establece el nivel mínimo de turbas de élite que pueden aparecer en una región. Solo afecta a las élites generadas naturalmente (los jefes personalizados ignoran esto). El nivel debe ser un valor entero (sin valores como `1.5`, tienes que usar números enteros como `1` o `2`).

***

# elitemobs-dungeon

Establece que el área solo permita turbas normales generadas con el motivo de generación PERSONALIZADO, así como jefes regionales y jefes personalizados. Esto es para usar en minidungeons.




