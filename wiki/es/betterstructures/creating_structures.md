```markdown
# Creando contenido

***

## Creando la construcción

No hay restricciones sobre lo que puedes construir para BetterStructures, aunque se recomienda mantener el tamaño de las estructuras por debajo de 100x100x100 bloques por razones de ajuste general al mundo y rendimiento. Dicho esto, puede manejar fácilmente estructuras mucho más grandes.

***

### Bloques especiales

BetterStructures tiene dos bloques especiales: barreras y roca madre. Cualquier otro bloque que WorldEdit pueda pegar se pegará normalmente, pero los bloques de barrera y roca madre son la excepción. En lugar de pegarse, estos bloques se reemplazan con los siguientes comportamientos personalizados:

***

#### Barrera

Los bloques de barrera hacen que el plugin no coloque ningún bloque en esa ubicación. Esto significa que cualquier bloque que estuviera originalmente allí en la generación normal del mundo permanecerá allí.

Los constructores pueden usar esto para redondear los bordes de un pegado, haciéndolo parecer más natural, o para moldear paredes a una posible cueva, entre otros trucos.

***

#### Roca madre

Los bloques de roca madre hacen que el plugin garantice que haya un bloque sólido en esa ubicación. Esto significa que si ya hay un bloque sólido en la generación predeterminada del mundo, ese bloque no se modificará; sin embargo, si el bloque es aire o líquido, será reemplazado por un bloque sólido del [pedestal](#pedestalmaterial).

Los constructores pueden usar esto para crear pisos con características como el piso para vías de vagoneta o garantizar que exista un piso sin sobrescribir bloques sólidos potencialmente ya existentes en esa ubicación del mundo, haciendo que las construcciones parezcan más orgánicas.

***

### Carteles de aparición

BetterStructures puede usar carteles con texto específico para hacer aparecer mobs e incluso jefes de EliteMobs y MythicMobs en ubicaciones específicas de la construcción.

***

##### Haciendo aparecer mobs vanilla

Si tomas un cartel normal y lo colocas en algún lugar, luego te aseguras de que la primera línea diga `[spawn]` y la segunda línea tenga el [nombre del tipo de entidad según la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html), harás aparecer una entidad persistente en esa ubicación del tipo que especificaste.

Como ejemplo, si tienes un cartel que dice `[spawn]` en la primera línea y `ZOMBIE` en la segunda línea, harás aparecer un zombi en esa ubicación cuando se coloque la construcción. Esto también se puede usar para entidades no vivas como soportes para armaduras o cristales del End.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Haciendo aparecer Elite Mobs (plugin de jefes recomendado)

BetterStructures también tiene integración avanzada con EliteMobs, lo que le permite crear arenas de jefes basadas en construcciones y carteles de aparición.

Si tomas un cartel normal y lo colocas en algún lugar, haciendo que la primera línea sea [elitemobs], entonces puedes usar todas las demás líneas para decir qué archivo de jefe usar.

Como ejemplo, si pones `[elitemobs]` en la primera línea y luego `test_boss.yml` en la segunda línea, harás aparecer al jefe de prueba. Si tienes un nombre de archivo muy largo, como boss_with_very_long_filename.yml, puedes dividirlo en varias líneas, así que pon en la línea 2 `boss_with_very_` y luego en la línea 3 `long_filename.yml`, y eso funcionará.

Como recordatorio, por defecto, las arenas de combate estarán protegidas hasta que los jugadores maten a todos los jefes de la construcción si tu servidor está usando WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_with</p>
<p>_a_long_name</p>
<p>.yml</p>
</div>

***

## Esquemáticos

Los esquemáticos son archivos generados por WorldEdit o FastAsyncWorldEdit que contienen los bloques para la construcción que BetterStructures utilizará.

Aquí no se incluyen instrucciones detalladas sobre cómo hacer un esquemático, ya que están detalladas exhaustivamente en la documentación de WorldEdit y FastAsyncWorldEdit, pero generalmente se hace de la siguiente manera:

1) elige una esquina de la construcción y usa el comando `//pos1`
2) elige la esquina diagonalmente opuesta y usa el comando `//pos2`
3) usa el comando `//copy`
4) usa el comando `/schem save <nombre_esquemático>` donde `<nombre_esquemático>` es el nombre de archivo que quieres usar para tu esquemático.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagen de la documentación de worldedit de sus documentos">

*¡Asegúrate de ejecutar el comando `//pos1` en el punto 1 y `//pos2` en el punto 2!*

***

#### Punto de anclaje

Los puntos de anclaje son donde ejecutas el comando `//copy` para el esquemático. Cuando simplemente pegas un esquemático, estos son donde estás parado en relación con la construcción.

Los puntos de anclaje son importantes para que los esquemáticos funcionen correctamente.

* Para _construcciones de superficie_, se recomienda que te pares en el punto más bajo del piso al copiar la construcción.
* Para _construcciones subterráneas_, se recomienda que te pares encima de la construcción.
* Para _construcciones líquidas_, se recomienda que te pares encima del agua.
* Para _construcciones aéreas_, se recomienda que te pares encima de la construcción.

**Ten en cuenta que siempre debes estar muy cerca o directamente encima de las construcciones al copiar; cuanto más lejos estés, más lag habrá cuando la construcción necesite ser pegada.**

***

# Configuraciones de esquemáticos

Cada archivo de esquemático tiene una configuración de esquemático. Si se acaba de añadir un archivo de esquemático al servidor, la configuración se generará después de un reinicio o después de un `/betterstructures reload`.

Estas configuraciones te permiten establecer los siguientes ajustes para el pegado del esquemático:

***

## isEnabled

Establece si el esquemático está habilitado. Si está deshabilitado, no se colocará en ningún lugar.

***

## weight

Weight establece el peso del esquemático en términos de cuán probable es que sea elegido.

El valor predeterminado es `1.0`. Si haces que una construcción tenga un peso de `2.0`, tendrá el doble de probabilidades de ser seleccionada que las otras construcciones. Si lo haces `0.5`, tendrá la mitad de posibilidades de ser elegida.

_**Nota:** Ten en cuenta que las probabilidades de que una construcción específica sea elegida cambian drásticamente según cuántas construcciones haya en total compitiendo por la ubicación que recibirá una estructura._

***

## pedestalMaterial

**Importante: ¡campo opcional!**

Pedestal material establece el tipo de material de los bloques de pedestal utilizando los [nombres de materiales de la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) - ¡úsalos o no funcionará!

Los pedestales son los bloques que se colocan debajo de los edificios de superficie y subterráneos para rellenar cualquier hueco de aire y mejorar el ajuste de un edificio con el mundo. Estos son también los mismos bloques que reemplazan a los bloques de roca madre en el esquemático.

Cuando no se define nada en la configuración, se analizan los bloques debajo de la ubicación para el pegado y se selecciona el mejor ajuste como material para la apariencia mejor integrada.

***

## generatorConfigFilename

Esta opción establece el nombre del archivo de configuración, por nombre de archivo, que utilizará el esquemático. Esto requiere el nombre de archivo completo, incluida la extensión `.yml` al final. Como ejemplo, `generatorConfigFilename: generator_surface_global.yml` sería la opción correcta si quieres usar el generador definido en `generator_surface_global.yml`, que puedes encontrar en la carpeta de configuración de generadores.

***

## treasureFile

Establece el [archivo de tesoro]($language$/betterstructures/creating_treasure.md) que utilizará esta estructura, sobrescribiendo el archivo de tesoro establecido por el [generador]($language$/betterstructures/creating_generators.md) de la estructura. Generalmente, esto no se recomienda a menos que sea para una construcción muy especial. Generalmente es mejor modificar o crear un generador para este propósito.

***

# Personalizando contenido

Todo el contenido distribuido en BetterStructures es editable. Puedes modificar cualquier archivo de esquemático y configuración de generador a tu gusto.

La guía de creación de contenido anterior es también una guía que puede ayudarte a editar contenido existente.
```