```markdown
# Construyendo para EliteMobs

La siguiente página wiki te ayuda a entender el proceso requerido para crear mazmorras y arenas de EliteMobs.

Vocabulario:

- "Boss" (Jefe) - Gran encuentro, pensado para ser combatido por mucha gente.
- "Miniboss" (Minijefe) - Encuentro más pequeño, usualmente puede ser derrotado por 1 jugador.
- "Fodder" (Carne de cañón) - Mobs relativamente fáciles de matar.

## Entendiendo las categorías de mazmorras de EliteMobs

### Guaridas

Categoría de tamaño más pequeño.

Las Guaridas suelen ser estructuras de construcción única de 50x50, distribuidas como mundos, y usualmente contienen un gran encuentro de jefe, aunque algunas también pueden contener un minijefe y algo de carne de cañón.

### Minicalabozos

Categoría de tamaño mediano.

Los Minicalabozos son estructuras más cercanas a 100x100 o 150x150, a menudo con varias estructuras o estructuras con varias secciones. Estos tienen 1 jefe, y usualmente al menos 3 o más minijefes. También tienen mucha carne de cañón.

### Aventuras

Las Aventuras son mapas de aventura completos, usualmente no medidos en bloques. Son del tamaño de una ciudad o incluso más grandes. Tienen 1 jefe y más de 10 minijefes, y docenas de carne de cañón única que usualmente asciende a cientos o miles en total en el mapa.

### Arenas

Las Arenas son desafíos de supervivencia basados en oleadas en EliteMobs. Suelen ser de 100x100. Pueden tener cualquier cantidad de oleadas, pero no se suele recomendar pasar de 50.

### Mazmorras Instanciadas

Las Mazmorras Instanciadas son similares a los Minicalabozos, excepto que son instanciadas. Esto significa que cada vez que un jugador o un grupo de jugadores desea ir a una Mazmorra Instanciada, se genera un nuevo mundo solo para ellos.

Las Mazmorras Instanciadas se comportan mucho como las mazmorras instanciadas que podrías encontrar en tu MMO favorito. Usualmente tienen tres niveles de dificultad, siendo las recompensas mejores cuanto mayor es la dificultad. Permiten a los jugadores asumir los roles de Tanque o DPS equipando botín que se suelta dentro de la mazmorra instanciada. Los mobs también usarán diferentes conjuntos de poderes dependiendo de la dificultad que se eligió cuando los jugadores iniciaron la instancia. Cualquier mob que sea abatido en una instancia no reaparecerá durante la duración de esa instancia.

Cualquier botín que se suelte dentro de una mazmorra instanciada utiliza el sistema de codicia o necesidad ("greed or need"), lo que significa que los jugadores pueden votar sobre el objeto soltado. Como se mencionó anteriormente, el botín de las mazmorras instanciadas está hecho especialmente para estar orientado a la defensa (tanque) o a la ofensiva (DPS).

### Raids

Contenido instanciado - próximamente

## Temática

Lo más importante de cualquier estructura de EliteMobs es la temática. Las temáticas influyen en el diseño de la construcción, su contenido, su lore y sus jefes.

Como ejemplo, puedes ver [El Polo Norte aquí](https://magmaguy.itch.io/elitemobs-the-north-pole). Tuvo el concepto de poner jefes relacionados con la Navidad en una bola de nieve, resultando en una ubicación visualmente impactante y mecánicamente interesante.

Aquí tienes otro ejemplo, [El Oasis](https://magmaguy.itch.io/elitemobs-oasis). Se trataba de crear una ubicación del antiguo Egipto invadida por no muertos y momias, y es una de las construcciones más populares en EliteMobs.

## Ubicaciones de combate

Las ubicaciones de combate deben evitar crear terreno que sea fácilmente explotable. Esto significa evitar hacer pilares a los que los jugadores puedan subir para estar seguros, decoraciones que puedan usarse para engañar a la IA y otros obstáculos similares. Siempre se encontrarán algunas exploits, y eso no es demasiado importante, pero las ubicaciones de los jefes deberían ser menos propensas a sufrir estas exploits.

El área de combate ideal para un jefe es relativamente plana, sin obstrucciones, con un radio de alrededor de 30 bloques y puede contener algunos pilares u otros elementos del mapa detrás de los cuales los jugadores deben esconderse para superar ciertas mecánicas del jefe.

Los corredores deben tener al menos 5 bloques de ancho si están destinados a tener adds en ellos. Las arenas de minijefes pueden tener un radio de unos 15 bloques, dependiendo de los poderes/temática que tengan.

Ten en cuenta que estas son dimensiones mínimas. Realmente no hay problema si te excedes.

Recuerda que puedes sellar o cambiar los bloques del entorno usando [EliteScript](es/elitemobs/elitescript_actions.md&section=place_block) o [Bloques Transitivos](es/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates). Esta es una excelente manera de asegurar que los jugadores solo puedan progresar más una vez que hayan derrotado a un determinado mob.

## Diseñando para EliteMobs

Cuanto mejor conozcas EliteMobs, mejor será el contenido que crees para él. La siguiente es una lista de características de EliteMobs que te ayudarán a idear cosas interesantes para tu mazmorra:

- [Jefes Regionales](es/elitemobs/creating_world_bosses.md) - Cada criatura en las Mazmorras es un jefe regional, lo que significa que tienen una correa (si superan una cierta distancia, son arrastrados de vuelta a su punto de aparición) y reaparecen con un temporizador.
- [Creando jefes](es/elitemobs/creating_bosses.md) Esto te mostrará todo lo que un jefe puede hacer y ser, como disfraces, multiplicadores de salud, si puede moverse y a qué velocidad, provocaciones y ¡más!
- [EliteScript](es/elitemobs/creating_powers.md) EliteScript es la herramienta más poderosa a tu disposición cuando se trata de crear encuentros inolvidables donde solo tu imaginación es el límite.
- [Cofres del Tesoro](es/elitemobs/creating_treasure_chests.md) Estos pueden contener objetos o incluso convertirse en enemigos.
- [Fases del Jefe](es/elitemobs/creating_boss_phases.md) - Los jefes pueden tener fases. Este sistema es muy poderoso porque los jefes pueden transformarse en cualquier cosa entre fases, incluyendo diferentes tipos de entidades, diferentes disfraces, diferentes modelos personalizados, etc.
- [Bloques Transitivos](es/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates) Estos son bloques que se colocan cuando un jefe aparece o muere. ¡También pueden aparecer y desaparecer cuando un jefe cambia de fase! Estos pueden usarse para crear arenas dinámicas muy interesantes.
- [Agujeros de Gusano](es/elitemobs/creating_wormholes.md) - portales geniales que pueden teletransportar a los jugadores a otras ubicaciones.

## Diseño de encuentros

El diseño de encuentros debe ser una prioridad al diseñar el área de combate. Idealmente, tendrías una idea de qué poderes quieres usar, o al menos de cuál debería ser la temática de los poderes, algo como fuego, o relámpagos, o hielo, o refuerzos, o cualquier otra cosa que encaje con los poderes de EliteMobs. Una vez que sepas qué poderes quieres, puedes diseñar el área de combate en consecuencia.

Si los jefes tienen un poder que requiere huir de ellos, el área debe ser lo suficientemente grande para acomodar eso. Si hay un poder en el que debes esconderte detrás de un obstáculo, la estructura necesita ese tipo de obstáculo. Hay muchos detalles que pueden incluirse al construir estas arenas, y cuanto más tengas en cuenta, mejor será el encuentro.

## Modificando el Paquete de Recursos de EliteMobs

A partir de la versión 1.21.4 de Minecraft y la versión 9.1.13 de EliteMobs, el paquete de recursos de EliteMobs se ha actualizado para alinearse con el nuevo método de Minecraft para usar modelos personalizados.

La estructura actualizada del paquete de recursos de EliteMobs es la siguiente:

**elitemobs_resource_pack**
- **assets**
  - **elitemobs**
    - **items**
      - Este directorio contiene archivos JSON que definen qué modelos personalizados puede usar Minecraft. Los modelos reales se almacenan en la carpeta `models`.
      - Subdirectorios:
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **models**
      - Esta carpeta contiene los archivos de modelo reales como archivos JSON.
      - Subdirectorios:
        - **coins**
        - **equipment**
        - **primis_map**
        - **ui**
    - **textures**
      - Esta carpeta almacena todas las texturas, incluidas las utilizadas por los modelos.
      - Subdirectorios:
        - **blocks**
        - **gui**
        - **items** (aquí se almacenan las texturas específicas de los modelos)
        - **primis_map**
        - **ui**
  - **minecraft**
    - **atlases**
    - **font**
    - **models**
      - **items** (contiene archivos JSON que especifican qué objetos en Minecraft deben usar modelos personalizados)
    - **sounds**
      - **custom** (almacena archivos de sonido personalizados)

---

Analicemos cómo está estructurado un archivo JSON en la carpeta `*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\*` y qué hace:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Propósito:
Este archivo JSON le dice a Minecraft que esto es un modelo, especifica el tipo de modelo e indica la ubicación del archivo del modelo.

Campos Clave:

`type: minecraft:model`
Esto especifica que el archivo representa un tipo de modelo.
`model: elitemobs:coins/coin1`
Esto apunta a la ubicación del modelo dentro del paquete de recursos.

Detalles de la Ruta:

`elitemobs:` instruye a Minecraft a buscar en la carpeta elitemobs dentro del directorio assets.
`coins/coin1` especifica la subcarpeta y el nombre del archivo del modelo.

La ruta completa al archivo de modelo referenciado es:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Una buena manera de probar si tus modelos personalizados funcionan correctamente es usar el siguiente comando:

`/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]`

Cómo Funciona:
Este comando te da una manzana que usa el modelo `elitemobs:coins/coin1`. Si el paquete de recursos está configurado correctamente, deberías ver el modelo de moneda personalizado aplicado al objeto manzana.

Probando Tu Propio Modelo Personalizado:
Si has añadido tu propio modelo personalizado al paquete de recursos, sigue estos pasos para probarlo:

1.  **Crea el JSON del Modelo**:
    Coloca tu archivo JSON en la subcarpeta apropiada dentro del directorio `items`.
    Por ejemplo:
    `assets/elitemobs/items/mymodel/myawesomemodel.json`

2.  **Añade el Archivo del Modelo**:
    Añade el archivo de modelo correspondiente (`myawesomemodel.json`) a la carpeta `models` dentro de la misma subcarpeta.
    Por ejemplo:
    `assets/elitemobs/models/mymodel/myawesomemodel.json`

3.  **Añade la Textura**:
    Añade el archivo de textura para el modelo en la carpeta `textures`.
    Por ejemplo:
    `assets/elitemobs/textures/items/myawesomemodel.png`

---

Una vez que todo esté configurado, usa el comando a continuación para probar tu modelo:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Si todo se hizo correctamente, recibirás una manzana en tu mano, y mostrará tu modelo personalizado en lugar del modelo de manzana predeterminado.

## ¿Preguntas?

[¡Pregunta en Discord en cualquier momento!](https://discord.gg/9f5QSka)
```