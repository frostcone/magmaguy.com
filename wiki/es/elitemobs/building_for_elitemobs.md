# Construcción para EliteMobs

La siguiente página de wiki te ayudará a entender el proceso requerido para crear mazmorras y arenas de EliteMobs.

Vocabulario:

- "Boss" - Gran enfrentamiento, diseñado para ser combatido por un gran número de personas
- "Miniboss" - Enfrentamiento más pequeño, usualmente puede ser asesinado por 1 jugador
- "Fodder" - Mobs relativamente fáciles de matar

## Comprendiendo las categorías de mazmorras EliteMobs

### Guaridas

Categoría de menor tamaño

Las guaridas son generalmente estructuras únicas de 50x50, distribuidas como mundos, y usualmente contienen un gran enfrentamiento de Boss, aunque algunas también pueden contener un Miniboss y algunos Fodders.

### Minimazmorras

Categoría de tamaño medio

Las minimazmorras están más cerca de las estructuras de 100x100 o 150x150, muchas veces con diversas estructuras o estructuras con diferentes secciones. Estas tienen 1 Boss, y usualmente al menos 3 o más Minibosses. También tienen mucho Fodder.

### Aventuras

Las Aventuras son mapas de aventuras completos, usualmente no se miden en bloques. Estos son del tamaño de una ciudad o incluso más grandes. Tienen 1 Boss y 10+ minibosses, y docenas de Fodders únicos que usualmente ascienden a cientos o miles en total en el mapa.

### Arenas

Las Arenas son desafíos de supervivencia basados en olas en EliteMobs. Estos son usualmente de 100x100. Pueden tener cualquier cantidad de olas, pero no se recomienda generalmente pasar de 50.

### Mazmorras Instanciadas

Las Mazmorras Instanciadas son similares a las Minimazmorras, excepto que son instanciadas. Esto significa que cada vez que un jugador o un grupo de jugadores desea ir a una Mazmorra Instanciada, se genera un nuevo mundo solo para ellos.

Las Mazmorras Instanciadas se parecen mucho a las mazmorras instanciadas que podrías encontrar en tu MMO favorito. Suelen tener tres niveles de dificultad, siendo mejores las recompensas cuanto más difícil sea el nivel. Permiten a los jugadores asumir los roles de un Tanque o DPS al equipar botín que se suelta dentro de la mazmorra instanciada. Los mobs también usarán diferentes conjuntos de poderes dependiendo de la dificultad elegida cuando los jugadores lanzaron la instancia. Cualquier mob que sea derrotado en una instancia no volverá a aparecer durante esa instancia.

Cualquier botín que se suelte dentro de una mazmorra instanciada utiliza el sistema de codicia o necesidad, lo que significa que los jugadores pueden votar por el objeto caído. Como se mencionó anteriormente, el botín de la mazmorra instanciada está especialmente hecho para ser defensivo (tanque) u ofensivo (DPS).

### Raids

Contenido Instanciado - en desarrollo

## Temática

Lo más importante de cualquier estructura de EliteMobs es la temática. Los temas influyen en el diseño del edificio, su contenido, su historia y sus jefes.

Como ejemplo, puedes ver [el Polo Norte aquí](https://magmaguy.itch.io/elitemobs-the-north-pole). Tuvo el concepto de poner jefes relacionados con la Navidad en una bola de nieve, dando lugar a una ubicación visualmente impactante y mecánicamente interesante.

Aquí está otro ejemplo, [El Oasis](https://magmaguy.itch.io/elitemobs-oasis). Esto trataba de hacer una ubicación en Egipto antiguo invadida por los no muertos y las momias, y es una de las construcciones más populares en EliteMobs.

## Ubicaciones de combate

Las ubicaciones de combate deben evitar la creación de terreno que se pueda explotar fácilmente. Esto significa evitar la creación de pilares en los que los jugadores puedan trepar para estar seguros, decoraciones que se puedan usar para engañar a la IA y otros obstáculos similares. Siempre se encontrarán algunos exploits, y eso no es demasiado importante, pero las ubicaciones de los jefes deberían ser menos propensas a sufrir estos exploits.

El área de combate ideal para el jefe es relativamente plana, despejada, alrededor de 30 bloques de radio y puede contener algunos pilares u otros elementos del mapa detrás de los cuales los jugadores deben esconderse para despejar ciertas dinámicas del jefe.

Los corredores deben apuntar a tener al menos 5 bloques de ancho si se supone que deben tener adds en ellos. Las arenas de Miniboss pueden tener un radio de unos 15 bloques, dependiendo de los poderes/temas que tengan.

Ten en cuenta que estas son dimensiones mínimas. No hay realmente ningún problema si vas por encima.

Recuerda que puedes sellar o cambiar los bloques del entorno usando [EliteScript](\$idioma\$/elitemobs/elitescript_actions.md&section=place_block) o [Bloques Transicitvos](\$idioma\$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). Esta es una gran manera de asegurar que los jugadores solo puedan avanzar una vez que han derrotado a un certain mob.

## Diseñando para EliteMobs

Cuanto mejor conozcas a EliteMobs, mejor será el contenido que crees para él. La siguiente es una lista de las características de EliteMobs que te ayudarán a idear cosas interesantes para tu mazmorra:

- [Jefes Regionales](\$idioma\$/elitemobs/creating_world_bosses.md) - Cada criatura en Mazmorras es un jefe regional, lo cual significa que tienen una correa (si se exceden una cierta distancia son jalado de regreso a su punto de aparición inicial) y respawn en un temporizador.
- [Creando jefes](\$idioma\$/elitemobs/creating_bosses.md) Esto te enseñará todo lo que un jefe puede hacer y ser, como disfraces, multiplicadores de salud, si puede moverse y a qué velocidad, insultos y mucho más!
- [EliteScript](\$idioma\$/elitemobs/creating_powers.md) EliteScript es la herramienta más poderosa a tu disposición a la hora de crear encuentros inolvidables donde sólo tu imaginación es el límite.
- [Cofres de Tesoro](\$idioma\$/elitemobs/creating_treasure_chests.md) Estos pueden tener objetos o incluso convertirse en enemigos
- [Fases de los jefes](\$idioma\$/elitemobs/creating_boss_phases.md) - Los jefes pueden tener fases. Este sistema es muy poderoso porque los jefes pueden convertirse en cualquier cosa entre las fases, incluyendo diferentes tipos de entidades, diferentes disfraces, diferentes modelos personalizados y así sucesivamente.
- [Bloques Transicitvos](\$idioma\$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) Estos son bloques que se colocan cuando un jefe aparece o muere. ¡También pueden ser spawned y despejados cuando un jefe cambia de fase! Estos pueden ser usados para hacer arenas dinámicas muy interesantes.
- [Agujeros de Gusano](\$idioma\$/elitemobs/creating_wormholes.md) - Portales geniales que pueden teletransportar a los jugadores a otras ubicaciones.


## Diseño de encuentros

El diseño de los encuentros debe ser una prioridad al diseñar el área de combate. Idealmente tendrías una idea de los poderes que quieres usar, o al menos de qué temática deben ser los poderos - algo como fuego, o luz, o hielo, o refuerzos, o cualquier otra cosa que encaje con los poderos de EliteMobs. Una vez que sepas qué quieres que sean los poderos, puedes diseñar el área de combate en consecuencia.

Si los jefes tienen un poder que requiere huir de ellos, el área necesita ser lo suficientemente grande para acomodarlo. Si hay un poder donde debes esconderte detrás de un obstáculo, la estructura necesita ese tipo de obstáculo. Hay muchos detalles que pueden entrar en la construcción de estas arenas, y cuantos más tengas en cuenta, mejor será el encuentro.


## ¿Preguntas?

[¡Pregunta en discord en cualquier momento!](https://discord.gg/9f5QSka)