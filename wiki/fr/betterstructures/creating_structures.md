# Creación de contenido

***

## Creación de la compilación

No hay restricciones en cuanto a lo que puede construir para BetterStructures, aunque se recomienda mantener el tamaño de las estructuras por debajo de 100x100x100 bloques por razones generales de ajuste mundial y rendimiento. Dicho esto, puede manejar fácilmente estructuras mucho más grandes.

***

### Bloques especiales

BetterStructures tiene dos bloques especiales: barreras y lechos de roca. Cualquier otro bloque que WorldEdit / FAWE pueda pegar se pegará normalmente, pero las barreras y los bloques de lecho de roca son la excepción. En lugar de pegar, estos bloques se reemplazan con los siguientes comportamientos personalizados:

***

#### Barrera

Los bloques de barrera hacen que el plugin no coloque ningún bloque en esa ubicación. Esto significa que cualquier bloque que estuviera originalmente allí en la generación normal del mundo permanecerá allí.

Los constructores pueden usar esto para redondear los bordes de un pegado, haciéndolo parecer más natural, o para moldear paredes a una cueva potencial, entre otros trucos.

***

#### Lecho de roca

Los bloques de lecho de roca hacen que el plugin garantice que haya un bloque sólido en esa ubicación. Esto significa que si ya existe un bloque sólido en la generación predeterminada del mundo, ese bloque no se modificará; sin embargo, si el bloque es aire o líquido, se reemplazará con un bloque sólido del [pedestal](#pedestalmaterial).

Los constructores pueden usar esto para crear pisos con características como el piso para rieles de vagonetas o garantizar que exista un piso sin anular los bloques sólidos que ya puedan existir en esa ubicación en el mundo, haciendo que las construcciones parezcan más orgánicas.

***

### Carteles de generación

BetterStructures puede usar carteles con texto específico para generar mobs e incluso jefes de EliteMobs y MythicMobs en ubicaciones específicas de la compilación.

***

##### Generación de mobs de vainilla

Si toma un cartel normal y lo coloca en algún lugar, asegúrese de que la primera línea diga `[spawn]` y la segunda línea tenga el [nombre del tipo de entidad siguiendo la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html), generará una entidad persistente en esa ubicación del tipo que especificó.

Como ejemplo, si tiene un cartel que dice `[spawn]` en la primera línea y `ZOMBIE` en la segunda línea, generará un zombi en esa ubicación cuando se coloque la compilación. Esto también se puede utilizar para entidades no vivas, como soportes de armadura o cristales de ender.

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Generación de mobs de élite (plugin de jefes recomendado)

BetterStructures también tiene una integración avanzada con EliteMobs, que le permite crear arenas de jefes basadas en compilaciones y carteles de generación.

Si toma un cartel normal y lo coloca en algún lugar, haciendo que la primera línea sea [elitemobs], puede usar todas las demás líneas para decir qué archivo de jefe usar.

Como ejemplo, si hace `[elitemobs]` en la primera línea y luego `test_boss.yml`, en la segunda línea, generará el jefe de prueba. Si tiene un nombre de archivo muy largo, como boss_with_very_long_filename.yml, puede dividirlo en varias líneas, así que haga la línea 2 `boss_with_very_` y luego la línea 3 `long_filename.yml` y eso funcionará.

Como recordatorio, de forma predeterminada, las arenas de combate estarán protegidas hasta que los jugadores maten a todos los jefes de la compilación si su servidor está utilizando WorldGuard.

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Generación de Mythic Mobs

BetterStructures también tiene una integración simple con MythicMobs, que le permite generar un mob de MythicMobs en la compilación. En la primera línea de un cartel normal, escriba `[mythicmobs]`, luego en la segunda línea use el mob identificado. Puede usar un número en la tercera línea para establecer el nivel del mob.

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Esquemas

Los esquemas son archivos generados por WorldEdit o FastAsyncWorldEdit que contienen los bloques para la compilación que utilizará BetterStructures.

Aquí no se incluyen instrucciones detalladas sobre cómo hacer un esquema, ya que se detallan minuciosamente en las documentaciones de WorldEdit y FastAsyncWorldEdit, pero generalmente se hace mediante:

1) elija una esquina de la compilación y use el comando `//pos1`
2) elija la esquina diagonalmente opuesta y use el comando `//pos2`
3) use el comando `//copy`
4) use el comando `/schem save <nombreEsquema>`, donde `<nombreEsquema>` es el nombre de archivo que desea utilizar para su esquema.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagen de la documentación de worldedit de sus documentos">

*¡Asegúrese de ejecutar el comando `//pos1` en el punto 1 y `//pos2` en el punto 2!*

***

#### Punto de anclaje

Los puntos de anclaje son donde ejecuta el comando `//copy` para el esquema. Al simplemente pegar un esquema, estos son donde está parado en relación con la compilación.

Es importante que los puntos de anclaje sean correctos para que los esquemas funcionen correctamente.

* Para las _compilaciones de superficie_, se recomienda pararse en el punto más bajo del piso al copiar la compilación.
* Para las _compilaciones subterráneas_, se recomienda pararse encima de la compilación.
* Para las _compilaciones de líquido_, se recomienda pararse encima del agua.
* Para las _compilaciones aéreas_, se recomienda que se pare encima de la compilación.

**Tenga en cuenta que siempre debe estar muy cerca o directamente encima de las compilaciones al copiarlas; cuanto más lejos esté, más lento será cuando sea necesario pegar la compilación.**

***

# Configuraciones de esquemas

Cada archivo de esquema tiene una configuración de esquema. Si un archivo de esquema acaba de agregarse al servidor, la configuración se generará después de un reinicio o después de un `/betterstructures reload`.

Estas configuraciones le permiten establecer las siguientes configuraciones para el pegado del esquema:

***

## isEnabled

Establece si el esquema está habilitado. Si está deshabilitado, no se colocará en ningún lugar.

***

## weight

Peso establece el peso del esquema en términos de la probabilidad de que se elija.

El valor predeterminado es `1.0`. Si hace que una compilación tenga un peso de `2.0`, será 2 veces más probable que se seleccione que las otras compilaciones. Si lo hace `0.5`, tendrá la mitad de posibilidades de ser elegido.

_**Nota:** ¡Tenga en cuenta que las probabilidades de que se elija una compilación específica cambian drásticamente según la cantidad de compilaciones que compiten por la ubicación que recibirá una estructura!_

***

## pedestalMaterial

**Importante: ¡campo opcional!**

El material del pedestal establece el tipo de material de los bloques del pedestal utilizando los [nombres de materiales de la api de spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - ¡utilícelos o no funcionará!

Los pedestales son los bloques que se colocan debajo de las construcciones de superficie y subterráneas para ajustar cualquier espacio de aire y mejorar el ajuste de una construcción con el mundo. Estos son también los mismos bloques que reemplazan los bloques de lecho de roca en el esquema.

Cuando no se define nada en la configuración, se analizan los bloques debajo de la ubicación para el pegado y se selecciona el que mejor se ajuste como material para la mejor apariencia integrada.

***

## generatorConfigFilename

Esta opción establece el nombre del archivo de configuración, por nombre de archivo, que utilizará el esquema. Esto requiere el nombre de archivo completo, incluida la extensión `.yml` al final. Como ejemplo, `generatorConfigFilename: generator_surface_global.yml` sería la opción correcta si desea utilizar el generador definido en `generator_surface_global.yml` que puede encontrar en la carpeta de configuración de generadores.

***

## treasureFile

Establece el [archivo de tesoro]($language$/betterstructures/creating_treasure.md) que utilizará esta estructura, sobrescribiendo el archivo de tesoro establecido por el [generador]($language$/betterstructures/creating_generators.md) de la estructura. Esto generalmente no se recomienda a menos que sea para una construcción muy especial. Generalmente es mejor modificar o crear un generador para este propósito.

# Personalización del contenido

Todo lo que se distribuye en BetterStructures es editable. Puede modificar cualquier archivo de esquema y configuración del generador a su gusto.

La guía de creación de contenido anterior también es una guía que puede ayudarlo a editar contenido existente.
