# Construyendo para EliteMobs

La siguiente página wiki te ayuda a comprender el proceso necesario para crear mazmorras y arenas de EliteMobs.

Vocabulario:

- "Jefe": gran encuentro, destinado a ser combatido por mucha gente.
- "Minijefe": encuentro más pequeño, generalmente puede ser asesinado por 1 jugador
- "Forraje": turbas relativamente fáciles de matar

## Comprender las categorías de mazmorras de EliteMobs

### Guaridas

Categoría de tamaño más pequeño

Las guaridas suelen ser estructuras de construcción única de 50x50, distribuidas como mundos, y generalmente contienen un gran encuentro con un jefe, aunque algunas también pueden contener un minijefe y algo de forraje.

### Minidungeons

Categoría de tamaño mediano

Las minidungeons están más cerca de las estructuras de 100x100 o 150x150, a menudo con varias estructuras o estructuras con varias secciones. Estos tienen 1 jefe y, por lo general, al menos 3 o más minijefes. También tienen mucho forraje.

### Aventuras

Las aventuras son mapas de aventuras completos, generalmente no medidos en bloques. Estos son del tamaño de una ciudad o incluso más grandes. Tienen 1 jefe y más de 10 minijefes, y docenas de forraje único que generalmente asciende a cientos o miles en total en el mapa.

### Arenas

Las arenas son desafíos de arena de supervivencia basados ​​en oleadas en EliteMobs. Estos suelen ser de 100x100. Pueden tener cualquier cantidad de oleadas, pero generalmente no se recomienda pasar de 50.

### Mazmorras instanciadas

Las mazmorras instanciadas son similares a las minidungeons, excepto que están instanciadas. Lo que significa que cada vez que un jugador o un grupo de jugadores desea ir a una mazmorra instanciada, se genera un nuevo mundo solo para ellos.

Las mazmorras instanciadas se comportan de manera muy parecida a las mazmorras instanciadas que puedes encontrar en tu MMO favorito. Suelen tener tres niveles de dificultad y las recompensas son mejores cuanto más difícil se vuelve la dificultad. Permiten a los jugadores asumir los roles de un tanque o DPS al equipar el botín que se deja caer dentro de la mazmorra instanciada. Los mobs también usarán diferentes conjuntos de poderes dependiendo de la dificultad que se eligió cuando los jugadores lanzaron la instancia. Cualquier mob que sea asesinado en una instancia no reaparecerá mientras dure esa instancia.

Cualquier botín que se deje caer dentro de una mazmorra instanciada utiliza el sistema de codicia o necesidad, lo que significa que los jugadores pueden votar por el artículo dejado caer. Como se mencionó anteriormente, el botín de la mazmorra instanciada está especialmente diseñado para estar orientado a la defensa (tanque) u orientado a la ofensiva (DPS).

### Incursiones

Contenido instanciado - próximamente

## Temática

Lo más importante de cualquier estructura de EliteMobs es el tema. Los temas influyen en el diseño de la construcción, su contenido, su tradición y sus jefes.

Como ejemplo, puedes ver [El Polo Norte aquí](https://magmaguy.itch.io/elitemobs-the-north-pole). Tenía el concepto de poner jefes relacionados con la Navidad en una bola de nieve, lo que resultó en una ubicación visualmente impactante y mecánicamente interesante.

Aquí hay otro ejemplo, [El Oasis](https://magmaguy.itch.io/elitemobs-oasis). Se trataba de hacer una antigua ubicación de Egipto invadida por muertos vivientes y momias, y es una de las construcciones más populares de EliteMobs.

## Lugares de combate

Las ubicaciones de combate deben evitar crear terrenos que sean fácilmente explotables. Esto significa evitar hacer pilares a los que los jugadores puedan subirse para estar seguros, decoraciones que puedan usarse para engañar a la IA y otros obstáculos similares. Siempre se encontrarán algunas hazañas, y eso no es demasiado importante, pero las ubicaciones de los jefes deben ser menos propensas a sufrir estas hazañas.

El área de combate de jefe ideal es relativamente plana, sin obstáculos, de alrededor de 30 bloques de radio y puede contener algunos pilares u otros elementos del mapa detrás de los cuales los jugadores deben esconderse para despejar ciertas mecánicas de jefe.

Los pasillos deben tener al menos 5 bloques de ancho si están destinados a tener adiciones en ellos. Las arenas de minijefes pueden tener un radio de 15 bloques, dependiendo de los poderes/temas que tengan.

Tenga en cuenta que estas son dimensiones mínimas. Realmente no hay problema si te pasas.

Tenga en cuenta que puedes sellar o cambiar los bloques del entorno utilizando [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block) o [Bloques transitivos]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). Esta es una excelente manera de asegurarse de que los jugadores solo puedan progresar más una vez que hayan derrotado a cierto mob.

## Diseñando para EliteMobs

Cuanto mejor conozcas EliteMobs, mejor será el contenido que crees para él. La siguiente es una lista de funciones de EliteMobs que te ayudarán a encontrar cosas interesantes para tu mazmorra:

- [Jefes regionales]($language$/elitemobs/creating_world_bosses.md): todas las criaturas de las mazmorras son jefes regionales, lo que significa que tienen una correa (si superan una cierta distancia, vuelven a su punto de generación) y reaparecen en un temporizador.
- [Crear jefes]($language$/elitemobs/creating_bosses.md) Esto te mostrará todo lo que un jefe puede hacer y ser, como disfraces, multiplicadores de salud, si puede moverse y a qué velocidad, burlas y más.
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript es la herramienta más poderosa a tu disposición cuando se trata de crear encuentros inolvidables donde solo tu imaginación es el límite.
- [Cofres del tesoro]($language$/elitemobs/creating_treasure_chests.md) Estos pueden tener elementos o incluso convertirse en enemigos
- [Fases de jefe]($language$/elitemobs/creating_boss_phases.md): los jefes pueden tener fases. Este sistema es muy poderoso porque los jefes pueden transformarse en cualquier cosa entre fases, incluidos diferentes tipos de entidades, diferentes disfraces, diferentes modelos personalizados, etc.
- [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) Estos son bloques que se colocan cuando aparece o muere un jefe. ¡También se pueden generar y eliminar cuando un jefe cambia de fase! Estos se pueden utilizar para crear arenas dinámicas muy interesantes.
- [Agujeros de gusano]($language$/elitemobs/creating_wormholes.md): portales geniales que pueden teletransportar a los jugadores a otras ubicaciones.

## Diseño de encuentros

El diseño de encuentros debe ser una prioridad al diseñar el área de combate. Idealmente, tendrías una idea de qué poderes quieres usar, o al menos de qué tema deberían ser los poderes: algo así como fuego, o relámpagos, o hielo, o refuerzos, o cualquier otra cosa que encaje con los poderes de EliteMobs. Una vez que sepas cuáles quieres que sean los poderes, puedes diseñar el área de combate en consecuencia.

Si los jefes tienen un poder que requirió huir de ellos, el área debe ser lo suficientemente grande para acomodar eso. Si hay un poder en el que debes esconderte detrás de un obstáculo, la estructura necesita ese tipo de obstáculo. Hay muchos detalles que pueden incluirse en la construcción de estas arenas, y cuanto más tengas en cuenta, mejor será el encuentro.

## ¿Preguntas?

[¡Pregunta en Discord en cualquier momento!](https://discord.gg/9f5QSka)



