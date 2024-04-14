# Creando contenido

***

## Creando la construcción

No hay restricciones con lo que puedes construir para BetterStructures, aunque se recomienda mantener el tamaño de las estructuras por debajo de los 100x100x100 bloques por razones de ajuste general del mundo y rendimiento. Dicho esto, puede manejar fácilmente estructuras muchísimo más grandes.

***

### Bloques especiales

BetterStructures tiene dos bloques especiales: barreras y bedrock. Cualquier otro bloque que WorldEdit / FAWE pueda pegar se pegará normalmente, pero las barreras y los bloques de bedrock son la excepción. En lugar de pegarse, estos bloques se reemplazan con los siguientes comportamientos personalizados:

***

#### Barrera

Los bloques de barrera hacen que el plugin no coloque bloques en esa ubicación. Esto significa que cualquier bloque que originalmente estaba allí en la generación normal del mundo permanecerá allí.

Los constructores pueden usar esto para redondear los bordes de un pegado, haciéndolo parecer más natural, o para moldear las paredes de una posible cueva, entre otros trucos.

***

#### Bedrock

Los bloques de bedrock hacen que el plugin garantice que hay un bloque sólido en esa ubicación. Esto significa que si ya hay un bloque sólido allí en la generación predeterminada del mundo, ese bloque no será modificado; sin embargo, si el bloque es aire o líquido, será reemplazado por un bloque sólido del [pedestal](#pedestalmaterial).

Los constructores pueden usar esto para crear pisos con características como el suelo para las vías de minecart o garantizar que exista un suelo sin sobrescribir potencialmente bloques sólidos ya existentes en esa ubicación en el mundo, lo que hace que las construcciones parezcan más orgánicas.

***

### Señales de aparición

BetterStructures puede usar señales con texto específico para hacer aparecer mobs e incluso jefes de EliteMobs y MythicMobs en ubicaciones específicas de la construcción.

***

##### Aparición de mobs vainilla

Si tomas una señal normal y la colocas en algún lugar, luego asegúrate de que la primera línea diga `[spawn]` y la segunda línea tenga el [nombre del tipo de entidad según la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html) harás aparecer una entidad persistente en esa ubicación del tipo que especificaste.

Como ejemplo, si tienes una señal que dice `[spawn]` en la primera línea y `ZOMBIE` en la segunda línea, harás aparecer un zombi en esa ubicación cuando se coloque la construcción. Esto también se puede usar para entidades no vivientes como armaduras de soporte o cristales de ender.

<div class="minecraft-sign"> 
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Aparición de Elite Mobs (plugin de jefe recomendado)

BetterStructures también tiene una integración avanzada de EliteMobs, que le permite crear arenas de jefes basadas en construcciones y señales de aparición.

Si tomas una señal normal y la colocas en algún lugar, haciendo la primera línea [elitemobs], entonces puedes usar todas las demás líneas para decir qué archivo de jefe usar.

Como ejemplo, si haces `[elitemobs]` en la primera línea y luego `test_boss.yml`, en la segunda línea, harás aparecer al jefe de prueba. Si tienes un nombre de archivo muy largo como boss_with_very_long_filename.yml, puedes dividirlo en varias líneas, por lo que haz la línea 2 `boss_with_very_` y luego la línea 3 `long_filename.yml` y eso funcionará.

Como recordatorio, por defecto las arenas de combate estarán protegidas hasta que los jugadores maten a todos los jefes en la construcción si tu servidor está usando WorldGuard.

<div class="minecraft-sign"> 
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

##### Aparición de Mythic Mobs

BetterStructures también tiene una simple integración de MythicMobs, que le permite hacer aparecer un mob de MythicMobs en la construcción. En la primera línea de una señal normal escribe `[mythicmobs]`, luego en la segunda línea usa el mob identificado. Puedes usar un número en la tercera línea para establecer el nivel del mob.

<div class="minecraft-sign"> 
<p>[mythicmobs]</p>
<p>my_mythic_boss</p>
<p>1</p>
<p></p>
</div>

***

## Esquemáticos

Los esquemáticos son archivos generados por WorldEdit o FastAsyncWorldEdit que contienen los bloques de la construcción que BetterStructures estará utilizando.

Las instrucciones detalladas sobre cómo hacer un esquemático no están incluidas aquí, ya que se detallan a fondo en las documentaciones de WorldEdit y FastAsyncWorldEdit, pero generalmente se realiza de la siguiente manera:

1) elige una esquina de la construcción y usa el comando `//pos1`
2) elige la esquina opuesta en diagonal y usa el comando `//pos2`
3) usa el comando `//copy`
4) usa el comando `/schem save <schematicname>` donde `<schematicName>` es el nombre de archivo que deseas usar para tu esquemático.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagen de documentación de worldedit de sus documentos">

*Asegúrate de ejecutar el comando `//pos1` en el punto 1 y `//pos2` en el punto 2!*

***

#### Punto de anclaje

Los puntos de anclaje son donde ejecutas el comando `//copy` para el esquemático. Al pegar simplemente un esquemático, estos son donde te encuentras en relación a la construcción.

Los puntos de anclaje son importantes para que los esquemáticos funcionen correctamente.

* Para _construcciones en superficie_, se recomienda que te pares en el punto más bajo del piso al copiar la construcción.
* Para _construcciones subterráneas_, se recomienda que te pares encima de la construcción.
* Para _construcciones líquidas_, se recomienda que te pares encima del agua.
* Para _construcciones aéreas_, se recomienda que te pares encima de la construcción.

**Ten en cuenta que siempre debes estar muy cerca o directamente encima de las construcciones al copiar - cuanto más lejos estés, más lento será cuando la construcción necesite ser pegada.**

***

# Configuraciones de esquemático

Cada archivo esquemático tiene una configuración esquemática. Si un archivo esquemático acaba de ser añadido al servidor, la configuración será generada después de un reinicio o después de un `/betterstructures reload`.

Estas configuraciones te permiten establecer los siguientes ajustes para el pegado del esquemático:

***

## isEnabled

Establece si el esquemático está habilitado. Si está deshabilitado, no se colocará en ningún lugar.

***

## weight

Weight establece el peso del esquemático en términos de cuán probable es que sea elegido.

El valor predeterminado es `1.0`. Si haces que una construcción tenga un peso de `2.0`, será 2 veces más probable que sea seleccionada que las demás construcciones. Si lo haces `0.5`, tendrá la mitad de las posibilidades de ser elegida.

_**Nota:** Ten en cuenta que las probabilidades de que una construcción específica sea elegida cambian drásticamente según cuántas construcciones haya en total compitiendo por la ubicación que recibirá estructura!_

***

## pedestalMaterial

**¡Importante: campo opcional!**

Pedestal material establece el tipo de material de los bloques del pedestal utilizando los [nombres de material de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - ¡úsalo o no funcionará!

Los pedestales son los bloques que se colocan debajo de los edificios de superficie y subterráneos para ajustar cualquier hueco de aire y mejorar el ajuste de un edificio con el mundo. Estos son también los mismos bloques que reemplazan los bloques de bedrock en el esquemático.

Cuando no se define nada en la configuración, los bloques debajo de la ubicación para el pegado se analizan y se selecciona la mejor opción como material para ofrecer el look más integrado.

***

## generatorConfigFilename

Esta opción establece el nombre del archivo de configuración, por nombre de archivo, que el esquemático estará utilizando. Esto requiere el nombre de archivo completo, incluyendo la extensión `.yml` al final. Como ejemplo, `generatorConfigFilename: generator_surface_global.yml` sería la opción correcta si quieres usar el generador definido en `generator_surface_global.yml` que puedes encontrar en la carpeta de configuración de generadores.

***

## treasureFile

Establece el [archivo de tesoro]($language$/betterstructures/creating_treasure.md) que esta estructura utilizará, sobrescribiendo el archivo de tesoro establecido por el [generador]($language$/betterstructures/creating_generators.md) de la estructura. Esto generalmente no se recomienda a menos que sea para una construcción muy especial. Por lo general, es mejor modificar o crear un generador para este propósito.


# Personalización de contenido

Todo lo distribuido en BetterStructures es editable. Eres capaz de modificar cualquier archivo de esquemático y configuraciones de generador a tu gusto.

La guía de creación de contenido anterior también es una guía que puede ayudarte a editar contenido existente.