# Construyendo para EliteMobs

La siguiente página de wiki te ayuda a comprender el proceso necesario para crear mazmorras y arenas de EliteMobs.

Vocabulario:

- "Jefe" - Encuentro grande, destinado a ser combatido por mucha gente
- "Minijefe" - Encuentro más pequeño, generalmente puede ser asesinado por 1 jugador
- "Carne de cañón" - Mobs relativamente fáciles de matar

## Entendiendo las categorías de mazmorras de EliteMobs

### Guaridas

Categoría de tamaño más pequeño

Las guaridas suelen ser estructuras de construcción única de 50x50, distribuidas como mundos, y generalmente contienen
un gran encuentro con un jefe, aunque algunas también pueden contener un minijefe y algo de carne de cañón.

### Minimazmorras

Categoría de tamaño mediano

Las minimazmorras son estructuras más cercanas a 100x100 o 150x150, a menudo con varias estructuras o estructuras con
varias secciones. Estas tienen 1 jefe, y generalmente al menos 3 o más minijefes. También tienen mucha carne de cañón.

### Aventuras

Las aventuras son mapas de aventuras completos, generalmente no medidos en bloques. Estos son del tamaño de una ciudad o
incluso más grandes. Tienen 1 jefe y más de 10 minijefes, y docenas de carne de cañón únicas, lo que generalmente
equivale a cientos o miles en total en el mapa.

### Arenas

Las arenas son desafíos de arena de supervivencia basados en oleadas en EliteMobs. Estos suelen ser de 100x100. Pueden
tener cualquier cantidad de oleadas, pero no se recomienda generalmente superar las 50.

### Mazmorras instanciadas

Las mazmorras instanciadas son similares a las minimazmorras, excepto que están instanciadas. Lo que significa que cada
vez que un jugador o un grupo de jugadores desea ir a una mazmorra instanciada, se genera un nuevo mundo solo para
ellos.

Las mazmorras instanciadas se comportan de manera muy similar a las mazmorras instanciadas que podrías encontrar en tu
MMO favorito. Por lo general, tienen tres niveles de dificultad y las recompensas son mejores cuanto más difícil se
vuelve la dificultad. Permiten a los jugadores asumir los roles de Tanque o DPS equipando el botín que se deja caer
dentro de la mazmorra instanciada. Los mobs también usarán diferentes conjuntos de poderes dependiendo de la dificultad
que se eligió cuando los jugadores iniciaron la instancia. Cualquier mob que sea asesinado en una instancia no
reaparecerá durante la duración de esa instancia.

Cualquier botín que se deje caer dentro de una mazmorra instanciada utiliza el sistema de codicia o necesidad, lo que
significa que los jugadores pueden votar sobre el objeto que se dejó caer. Como se mencionó anteriormente, el botín de
la mazmorra instanciada está hecho especialmente para estar orientado a la defensa (tanque) o a la ofensiva (DPS).

### Incursiones

Contenido instanciado - próximamente

## Temática

Lo más importante de cualquier estructura de EliteMobs es la temática. Las temáticas influyen en el diseño de la
construcción, su contenido, su historia y sus jefes.

Como ejemplo, puedes ver [El Polo Norte aquí](https://magmaguy.itch.io/elitemobs-the-north-pole). Tenía el concepto de
colocar jefes relacionados con la Navidad en una bola de nieve, lo que resultó en una ubicación visualmente llamativa y
mecánicamente interesante.

Aquí hay otro ejemplo, [El Oasis](https://magmaguy.itch.io/elitemobs-oasis). Se trataba de hacer una ubicación del
antiguo Egipto invadida por los no muertos y las momias, y es una de las construcciones más populares en EliteMobs.

## Lugares de combate

Los lugares de combate deben evitar la creación de terrenos que sean fácilmente explotables. Esto significa evitar hacer
pilares en los que los jugadores puedan subirse para estar seguros, decoraciones que puedan usarse para hacer trampa con
la IA y otros obstáculos similares. Siempre se encontrarán algunos exploits, y eso no es demasiado importante, pero las
ubicaciones de los jefes deberían ser menos propensas a sufrir estos exploits.

El área de combate ideal para el jefe es relativamente plana, sin obstrucciones, con un radio de alrededor de 30 bloques
y puede contener algunos pilares u otros elementos del mapa detrás de los cuales los jugadores deben esconderse para
superar ciertas mecánicas del jefe.

Los pasillos deben tener al menos 5 bloques de ancho si están destinados a tener adds en ellos. Las arenas de minijefes
pueden tener un radio de unos 15 bloques, dependiendo de los poderes/temática que tengan.

Ten en cuenta que estas son las dimensiones mínimas. Realmente no hay ningún problema si te pasas.

Ten en cuenta que puedes sellar o cambiar los bloques del entorno
usando [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
o [Bloques Transitivos]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates).
Esta es una excelente manera de asegurarse de que los jugadores solo puedan progresar más una vez que hayan derrotado a
un cierto mob.

## Diseñando para EliteMobs

Cuanto mejor conozcas EliteMobs, mejor será el contenido que hagas para él. La siguiente es una lista de las
características de EliteMobs que te ayudarán a crear cosas interesantes para tu mazmorra:

- [Jefes Regionales]($language$/elitemobs/creating_world_bosses.md) - Cada criatura en las mazmorras es un jefe
  regional, lo que significa que tienen una correa (si superan cierta distancia, son regresados a su punto de aparición)
  y reaparecen en un temporizador.
- [Creando jefes]($language$/elitemobs/creating_bosses.md) Esto te mostrará todo lo que un jefe puede hacer y ser, como
  disfraces, multiplicadores de salud, si puede moverse y a qué velocidad, burlas y ¡más!
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript es la herramienta más poderosa a tu disposición
  cuando se trata de crear encuentros inolvidables donde solo tu imaginación es el límite.
- [Cofres del tesoro]($language$/elitemobs/creating_treasure_chests.md) Estos pueden tener objetos o incluso convertirse
  en enemigos
- [Fases de jefe]($language$/elitemobs/creating_boss_phases.md) - Los jefes pueden tener fases. Este sistema es muy
  poderoso porque los jefes pueden convertirse en cualquier cosa entre las fases, incluidos diferentes tipos de
  entidades, diferentes disfraces, diferentes modelos personalizados, etc.
- [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
  Estos son bloques que se colocan cuando un jefe aparece o muere. ¡También se pueden generar y borrar cuando un jefe
  cambia de fase! Estos se pueden usar para hacer arenas dinámicas muy interesantes.
- [Agujeros de gusano]($language$/elitemobs/creating_wormholes.md) - portales geniales que pueden teletransportar a los
  jugadores a otros lugares.

## Diseño de encuentros

El diseño de encuentros debe ser una prioridad al diseñar el área de combate. Idealmente, tendrías una idea de qué
poderes quieres usar, o al menos de qué tema deberían ser los poderes, algo así como fuego, iluminación o hielo, o
refuerzos, o cualquier otra cosa que encaje con los poderes de EliteMobs. Una vez que sepas cuáles quieres que sean los
poderes, puedes diseñar el área de combate en consecuencia.

Si los jefes tienen un poder que requería huir de ellos, el área debe ser lo suficientemente grande como para acomodar
eso. Si hay un poder en el que debes esconderte detrás de un obstáculo, la estructura necesita ese tipo de obstáculo.
Hay muchos detalles que pueden influir en la construcción de estas arenas, y cuanto más tengas en cuenta, mejor será el
encuentro.

## Modificando el Pack de Recursos de EliteMobs

A partir de la versión 1.21.4 de Minecraft y la versión 9.1.13 de EliteMobs, el pack de recursos de EliteMobs se ha
actualizado para alinearse con el nuevo método de Minecraft para usar modelos personalizados.

La estructura actualizada del pack de recursos de EliteMobs es la siguiente:

**elitemobs_resource_pack**
- **assets**
    - **elitemobs**
        - **items**
            - Este directorio contiene archivos JSON que definen qué modelos personalizados puede usar Minecraft. Los
              modelos reales se almacenan en la carpeta `models`.
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
                - **items** (aquí se almacenan las texturas específicas del modelo)
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items** (contiene archivos JSON que especifican qué objetos en Minecraft deben usar modelos
              personalizados)
        - **sounds**
            - **custom** (almacena archivos de sonido personalizados)

---

Desglosemos cómo se estructura un archivo JSON en la carpeta *
.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* y qué hace:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Propósito:
Este archivo JSON le dice a Minecraft que esto es un modelo, especifica el tipo de modelo e indica la ubicación del
archivo del modelo.

Campos Clave:

`type: minecraft:model`
Esto especifica que el archivo representa un tipo de modelo.
`model: elitemobs:coins/coin1`
Esto apunta a la ubicación del modelo dentro del pack de recursos.

Detalles de la ruta:

`elitemobs:` indica a Minecraft que busque en la carpeta elitemobs dentro del directorio assets.
`coins/coin1` especifica la subcarpeta y el nombre del archivo del modelo.

La ruta completa al archivo de modelo referenciado es:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Una buena manera de probar si tus modelos personalizados funcionan correctamente es usar el siguiente comando:

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Cómo Funciona:
Este comando te da una manzana que usa el modelo `elitemobs:coins/coin1`. Si el pack de recursos está configurado
correctamente, deberías ver el modelo de moneda personalizado aplicado al objeto de manzana.

Probando tu propio Modelo Personalizado:
Si has añadido tu propio modelo personalizado al pack de recursos, sigue estos pasos para probarlo:

1. **Crea el JSON del Modelo**:
   Coloca tu archivo JSON en la subcarpeta apropiada dentro del directorio `items`.
   Por ejemplo:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Añade el Archivo del Modelo**:
   Añade el archivo de modelo correspondiente (`myawesomemodel.json`) a la carpeta `models` dentro de la misma
   subcarpeta.
   Por ejemplo:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Añade la Textura**:
   Añade el archivo de textura para el modelo en la carpeta `textures`.
   Por ejemplo:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Una vez que todo esté configurado, usa el siguiente comando para probar tu modelo:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Si todo se hizo correctamente, recibirás una manzana en tu mano y mostrará tu modelo personalizado en lugar del modelo
de manzana predeterminado.

## ¿Preguntas?

[¡Pregunta en Discord en cualquier momento!](https://discord.gg/9f5QSka)
