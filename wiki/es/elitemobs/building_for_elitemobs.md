# Construcción para EliteMobs

La siguiente página de la wiki lo ayuda a comprender el proceso necesario para crear mazmorras y arenas de EliteMobs.

Vocabulario:

- "Jefe": encuentro grande, destinado a ser peleado por muchas personas
- "Minijefe": encuentro más pequeño, generalmente capaz de ser asesinado por 1 jugador
- "Carne de cañón": mobs relativamente fáciles de matar

## Entender las categorías de mazmorras de EliteMobs

### Guaridas

Categoría de tamaño más pequeño

Las guaridas suelen ser estructuras de construcción única de 50x50, distribuidas como mundos, y generalmente contienen
un gran encuentro con un jefe, aunque algunas también pueden contener un minijefe y algo de carne de cañón.

### Minidungeons

Categoría de tamaño mediano

Los minidungeons están más cerca de estructuras de 100x100 o 150x150, a menudo con varias estructuras o estructuras con
varias secciones. Estos tienen 1 jefe y generalmente al menos 3 o más minijefes. También tienen mucha carne de cañón.

### Aventuras

Las aventuras son mapas de aventuras completos, generalmente no medidos en bloques. Estos son del tamaño de una ciudad o
incluso más grandes. Tienen 1 jefe y más de 10 minijefes, y docenas de carne de cañón únicos, lo que generalmente
equivale a cientos o miles en total en el mapa.

### Arenas

Las arenas son desafíos de arena de supervivencia basados en oleadas en EliteMobs. Estos suelen ser de 100x100. Pueden
tener cualquier cantidad de oleadas, pero generalmente no se recomienda superar las 50.

### Mazmorras de instancia

Las mazmorras de instancia son similares a los minidungeons, excepto que son de instancia. Esto significa que cada vez
que un jugador o un grupo de jugadores desea ir a una mazmorra de instancia, se genera un nuevo mundo solo para ellos.

Las mazmorras de instancia se comportan mucho como las mazmorras de instancia que puede encontrar en su MMO favorito.
Por lo general, tienen tres niveles de dificultad, y las recompensas son mejores cuanto más difícil se vuelve la
dificultad. Permiten a los jugadores asumir los roles de Tanque o DPS equipando el botín que se deja caer dentro de la
mazmorra de instancia. Los mobs también usarán diferentes conjuntos de poderes dependiendo de qué dificultad se eligió
cuando los jugadores lanzaron la instancia. Cualquier mob que sea asesinado en una instancia no volverá a aparecer
durante esa instancia.

Cualquier botín que se deje caer dentro de una mazmorra de instancia utiliza el sistema de codicia o necesidad, lo que
significa que los jugadores pueden votar sobre el objeto que se dejó caer. Como se mencionó anteriormente, el botín de
la mazmorra de instancia está especialmente hecho para estar orientado a la defensa (tanque) o a la ofensiva (DPS).

### Incursiones

Contenido de instancia - próximamente

## Tematización

Lo más importante de cualquier estructura de EliteMobs es el tema. Los temas influyen en el diseño de la construcción, su contenido, su tradición y sus jefes.

Como ejemplo, puede ver [El Polo Norte aquí](https://magmaguy.itch.io/elitemobs-the-north-pole). Tenía el concepto de
poner jefes relacionados con la Navidad en una bola de nieve, lo que resultó en una ubicación visualmente llamativa y
mecánicamente interesante.

Aquí hay otro ejemplo, [El Oasis](https://magmaguy.itch.io/elitemobs-oasis). Se trataba de hacer una antigua ubicación
de Egipto invadida por muertos vivientes y momias, y es una de las construcciones más populares en EliteMobs.

## Ubicaciones de combate

Las ubicaciones de combate deben evitar la creación de terrenos que sean fácilmente explotables. Esto significa evitar
la creación de pilares en los que los jugadores puedan trepar para estar seguros, decoraciones que se puedan usar para
engañar a la IA y otros obstáculos similares. Algunos exploits siempre se encontrarán, y eso no es demasiado importante,
pero las ubicaciones de los jefes deberían ser menos propensas a sufrir estos exploits.

El área de combate ideal para el jefe es relativamente plana, sin obstrucciones, con un radio de alrededor de 30 bloques
y puede contener algunos pilares u otros elementos del mapa detrás de los cuales los jugadores deben esconderse para
superar ciertas mecánicas del jefe.

Los pasillos deben tener al menos 5 bloques de ancho si se supone que deben tener complementos en ellos. Las arenas de
minijefes pueden tener un radio de 15 bloques, dependiendo de los poderes/temáticas que tengan.

Tenga en cuenta que estas son dimensiones mínimas. No hay ningún problema si se excede.

Tenga en cuenta que puede sellar o cambiar los bloques del entorno
usando [EliteScript]($language$/elitemobs/elitescript_actions.md&section=place_block)
o [Bloques transitivos]($language$elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates).
Esta es una excelente manera de asegurarse de que los jugadores solo puedan progresar más una vez que hayan derrotado a
cierto mob.

## Diseño para EliteMobs

Cuanto mejor conozca EliteMobs, mejor será el contenido que haga para él. La siguiente es una lista de las funciones de
EliteMobs que lo ayudarán a crear cosas interesantes para su mazmorra:

- [Jefes regionales]($language$/elitemobs/creating_world_bosses.md) - Cada criatura en las Mazmorras es un jefe
  regional, lo que significa que tienen una correa (si superan una cierta distancia, son atraídos de vuelta a su punto
  de aparición) y reaparecen en un temporizador.
- [Creación de jefes]($language$/elitemobs/creating_bosses.md) Esto le mostrará todo lo que un jefe puede hacer y ser,
  como disfraces, multiplicadores de salud, si puede moverse y a qué velocidad, provocaciones y más.
- [EliteScript]($language$/elitemobs/creating_powers.md) EliteScript es la herramienta más poderosa a su disposición
  cuando se trata de crear encuentros inolvidables donde solo su imaginación es el límite.
- [Cofres del tesoro]($language$/elitemobs/creating_treasure_chests.md) Estos pueden tener objetos o incluso convertirse
  en enemigos
- [Fases de jefe]($language$/elitemobs/creating_boss_phases.md) - Los jefes pueden tener fases. Este sistema es muy
  poderoso porque los jefes pueden convertirse en cualquier cosa entre fases, incluidos diferentes tipos de entidades,
  diferentes disfraces, diferentes modelos personalizados, etc.
- [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=onspawnblockstates-and-onremoveblockstates)
  Estos son bloques que se colocan cuando un jefe aparece o muere. ¡También se pueden generar y eliminar cuando un jefe
  cambia de fase! Estos se pueden usar para hacer arenas dinámicas muy interesantes.
- [Agujeros de gusano]($language$/elitemobs/creating_wormholes.md) - portales geniales que pueden teletransportar a los
  jugadores a otras ubicaciones.

## Diseño de encuentros

El diseño de encuentros debe ser una prioridad al diseñar el área de combate. Lo ideal sería que tuviera una idea de qué
poderes desea usar, o al menos de qué tema deberían ser los poderes: algo como fuego, o iluminación, o hielo, o
refuerzos, o cualquier otra cosa que encaje con los poderes de EliteMobs. Una vez que sepa cuáles quiere que sean los
poderes, puede diseñar el área de combate en consecuencia.

Si los jefes tienen un poder que requería huir de ellos, el área debe ser lo suficientemente grande para acomodar eso.
Si hay un poder en el que debes esconderte detrás de un obstáculo, la estructura necesita ese tipo de obstáculo. Hay
muchos detalles que pueden entrar en la construcción de estas arenas, y cuanto más tenga en cuenta, mejor será el
encuentro.

## Modificación del paquete de recursos de EliteMobs

A partir de la versión 1.21.4 de Minecraft y la versión 9.1.13 de EliteMobs, el paquete de recursos de EliteMobs se ha
actualizado para alinearse con el nuevo método de Minecraft para usar modelos personalizados.

La estructura actualizada del paquete de recursos de EliteMobs es la siguiente:

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
            - Esta carpeta almacena todas las texturas, incluidas las que utilizan los modelos.
            - Subdirectorios:
                - **blocks**
                - **gui**
                - **items** (aquí es donde se almacenan las texturas específicas del modelo)
                - **primis_map**
                - **ui**
    - **minecraft**
        - **atlases**
        - **font**
        - **models**
            - **items** (contiene archivos JSON que especifican qué elementos en Minecraft deben usar modelos
              personalizados)
        - **sounds**
            - **custom** (almacena archivos de sonido personalizados)

---

Desglosemos cómo se estructura un archivo JSON en la carpeta
\*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\items\coins\* y qué hace:

```
{
  "model": {
    "type": "minecraft:model",
    "model": "elitemobs:coins/coin1"
  }
}
```

Propósito:
Este archivo JSON le dice a Minecraft que este es un modelo, especifica el tipo de modelo e indica la ubicación del
archivo del modelo.

Campos clave:

`type: minecraft:model`
Esto especifica que el archivo representa un tipo de modelo.
`model: elitemobs:coins/coin1`
Esto apunta a la ubicación del modelo dentro del paquete de recursos.

Detalles de la ruta:

`elitemobs:` instruye a Minecraft para que busque en la carpeta elitemobs dentro del directorio assets.
`coins/coin1` especifica la subcarpeta y el nombre del archivo de modelo.

La ruta completa al archivo del modelo referenciado es:
`*.minecraft\resourcepacks\elitemobs_resource_pack\assets\elitemobs\models\coins\coin1.json`

---

Una buena manera de probar si sus modelos personalizados funcionan correctamente es utilizar el siguiente comando:

/minecraft:give @p apple[item_model="elitemobs:coins/coin1"]

Cómo funciona:
Este comando le da una manzana que usa el modelo `elitemobs:coins/coin1`. Si el paquete de recursos está configurado
correctamente, debería ver el modelo de moneda personalizado aplicado al elemento de la manzana.

Prueba de su propio modelo personalizado:
Si ha agregado su propio modelo personalizado al paquete de recursos, siga estos pasos para probarlo:

1. **Cree el JSON del modelo**:
   Coloque su archivo JSON en la subcarpeta adecuada dentro del directorio `items`.
   Por ejemplo:
   `assets/elitemobs/items/mymodel/myawesomemodel.json`

2. **Agregue el archivo de modelo**:
   Agregue el archivo de modelo correspondiente (`myawesomemodel.json`) a la carpeta `models` dentro de la misma
   subcarpeta.
   Por ejemplo:
   `assets/elitemobs/models/mymodel/myawesomemodel.json`

3. **Agregue la textura**:
   Agregue el archivo de textura para el modelo en la carpeta `textures`.
   Por ejemplo:
   `assets/elitemobs/textures/items/myawesomemodel.png`

---

Una vez que todo esté configurado, utilice el siguiente comando para probar su modelo:

`/minecraft:give @p apple[item_model="elitemobs:mymodel/myawesomemodel"]`

Si todo se hizo correctamente, recibirá una manzana en su mano y mostrará su modelo personalizado en lugar del modelo de
manzana predeterminado.

## ¿Preguntas?

[¡Pregunte en Discord en cualquier momento!](https://discord.gg/9f5QSka)
