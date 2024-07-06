# Creación de contenido

***

## Creando la construcción

No hay restricciones con lo que puedes construir para BetterStructures, aunque se recomienda mantener el tamaño de las estructuras por debajo de 100x100x100 bloques por razones generales de ajuste mundial y rendimiento. Dicho esto, puede manejar fácilmente estructuras mucho más grandes.

***

### Bloques especiales

BetterStructures tiene dos bloques especiales: barreras y bedrock. Cualquier otro bloque que WorldEdit / FAWE pueda pegar se pegará normalmente, pero las barreras y los bloques de bedrock son la excepción. En lugar de pegarse, estos bloques se reemplazan con los siguientes comportamientos personalizados:

***

#### Barrera

Los bloques de barrera hacen que el complemento no coloque ningún bloque en esa ubicación. Esto significa que cualquier bloque que estuviera originalmente allí en la generación mundial normal permanecerá allí.

Los constructores pueden usar esto para redondear los bordes de una pasta, haciéndola parecer más natural, o para moldear paredes a una cueva potencial, entre otros trucos.

***

#### Bedrock

Los bloques de bedrock hacen que el complemento garantice que haya un bloque sólido en esa ubicación. Esto significa que si ya hay un bloque sólido en la generación mundial predeterminada, ese bloque no se modificará; sin embargo, si el bloque es aire o líquido, será reemplazado por un bloque sólido del [pedestal](#pedestalmaterial).

Los constructores pueden usar esto para crear pisos con características como el piso para rieles de vagoneta o garantizar que exista un piso sin anular los bloques sólidos potencialmente ya existentes en esa ubicación en el mundo, haciendo que las construcciones se vean más orgánicas.

***

### Señales de generación

BetterStructures puede usar letreros con texto específico para generar mobs e incluso jefes de EliteMobs y MythicMobs en ubicaciones específicas de la construcción.

***

##### Generando mobs de vainilla

Si tomas un letrero normal y lo colocas en algún lugar, luego asegúrate de que la primera línea diga `[spawn]` y la segunda línea tenga el [nombre del tipo de entidad siguiendo la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) generarás una entidad persistente en esa ubicación del tipo que especificaste.

Como ejemplo, si tienes un letrero que dice `[spawn]` en la primera línea y `ZOMBIE` en la segunda línea, generarás un zombie en esa ubicación cuando se coloque la construcción. Esto también se puede usar para entidades no vivas como soportes de armadura o cristales de ender.

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Generando Elite Mobs (complemento de jefe recomendado)

BetterStructures también tiene integración avanzada con EliteMobs, lo que le permite crear arenas de jefes basadas en construcciones y letreros de generación.

Si tomas un letrero normal y lo colocas en algún lugar, haciendo que la primera línea sea [elitemobs], puedes usar todas las demás líneas para decir qué archivo de jefe usar.

Como ejemplo, si haces `[elitemobs]` en la primera línea y luego `test_boss.yml`, en la segunda línea, generarás el jefe de prueba. Si tienes un nombre de archivo muy largo como boss_with_very_long_filename.yml, puedes dividirlo en varias líneas, así que haz la línea 2 `boss_with_very_` y luego la línea 3 `long_filename.yml` y eso funcionará.

Como recordatorio, de forma predeterminada, las arenas de combate estarán protegidas hasta que los jugadores maten a todos los jefes en la construcción si tu servidor está utilizando WorldGuard.

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Generando Mythic Mobs

BetterStructures también tiene una integración simple con MythicMobs, lo que le permite generar un mob de MythicMobs en la construcción. En la primera línea de un letrero normal, escribe `[mythicmobs]`, luego, en la segunda línea, usa la mafia identificada. Puedes usar un número en la tercera línea para establecer el nivel del mob.

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Esquemas

Los esquemas son archivos generados por WorldEdit o FastAsyncWorldEdit que contienen los bloques para la construcción que utilizará BetterStructures.

Las instrucciones detalladas sobre cómo hacer un esquema no se incluyen aquí, ya que se detallan a fondo en las documentaciones de WorldEdit y FastAsyncWorldEdit, pero generalmente se hacen mediante:

1) elige una esquina de la construcción y usa el comando `//pos1`
2) elige la esquina diagonalmente opuesta y usa el comando `//pos2`
3) usa el comando `//copy`
4) usa el comando `/schem save <nombredelesquema>` donde `<nombredelesquema>` es el nombre de archivo que deseas usar para tu esquema.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagen de documentación de worldedit de sus documentos">

*¡Asegúrate de ejecutar el comando `//pos1` en el punto 1 y `//pos2` en el punto 2!*

***

#### Punto de anclaje

Los puntos de anclaje son donde ejecutas el comando `//copy` para el esquema. Al simplemente pegar un esquema, aquí es donde te encuentras en relación con la construcción.

Los puntos de anclaje son importantes para que los esquemas funcionen correctamente.

* Para _construcciones de superficie_, se recomienda pararse en el punto más bajo del piso al copiar la construcción.
* Para _construcciones subterráneas_, se recomienda pararse encima de la construcción.
* Para _construcciones líquidas_, se recomienda pararse sobre el agua.
* Para _construcciones aéreas_, se recomienda pararse encima de la construcción.

**Tenga en cuenta que siempre debe estar muy cerca o directamente encima de las construcciones al copiar; cuanto más lejos esté, más lento será cuando la construcción deba pegarse.**

***

# Configuraciones esquemáticas

Cada archivo esquemático tiene una configuración esquemática. Si se acaba de agregar un archivo esquemático al servidor, la configuración se generará después de un reinicio o después de un `/betterstructures reload`.

Estas configuraciones te permiten establecer las siguientes configuraciones para la pasta esquemática:

***

## isEnabled

Establece si el esquema está habilitado. Si está deshabilitado, no se colocará en ningún lugar.

***

## weight

El peso establece el peso del esquema en términos de qué tan probable es que se elija.

El valor predeterminado es `1.0`. Si haces que una construcción tenga un peso de `2.0`, tendrá 2 veces más probabilidades de ser seleccionada que las otras construcciones. Si lo haces `0.5`, tendrá la mitad de posibilidades de ser elegido.

_**Nota:** ¡Tenga en cuenta que las probabilidades de que se elija una construcción específica cambian drásticamente según la cantidad de construcciones que compitan en total por la ubicación que obtendrá una estructura!_

***

## pedestalMaterial

**¡Importante: campo opcional!**

El material del pedestal establece el tipo de material de los bloques del pedestal utilizando los [nombres de material de la API de spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html). ¡Úsalos o no funcionará!

Los pedestales son los bloques que se colocan debajo de las construcciones superficiales y subterráneas para adaptarse a cualquier espacio de aire y mejorar el ajuste de una construcción con el mundo. Estos también son los mismos bloques que reemplazan los bloques de bedrock en el esquema.

Cuando no se define nada en la configuración, los bloques debajo de la ubicación para la pasta se analizan y se selecciona el mejor ajuste como material para la apariencia mejor integrada.

***

## generatorConfigFilename

Esta opción establece el nombre del archivo de configuración, por nombre de archivo, que utilizará el esquema. Esto requiere el nombre de archivo completo, incluida la extensión `.yml` al final. Como ejemplo, `generatorConfigFilename: generator_surface_global.yml` sería la opción correcta si deseas utilizar el generador definido en `generator_surface_global.yml` que puedes encontrar en la carpeta de configuración de generadores.

***

## treasureFile

Establece el [archivo de tesoro]($language$/betterstructures/creating_treasure.md) que utilizará esta estructura, sobrescribiendo el archivo de tesoro establecido por el [generador]($language$/betterstructures/creating_generators.md) de la estructura. Esto generalmente no se recomienda a menos que sea para una construcción muy especial. Generalmente es mejor modificar o crear un generador para este propósito.


# Personalización de contenido

Todo lo distribuido en BetterStructures es editable. Puedes modificar cualquier archivo esquemático y configuración del generador a tu gusto.

La guía de creación de contenido anterior también es una guía que puede ayudarte a editar contenido existente.
