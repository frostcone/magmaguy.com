# Creando contenido

***

## Creando la construcción

No existen restricciones sobre lo que puedes construir para BetterStructures, aunque se recomienda mantener el tamaño de
las estructuras por debajo de 100x100x100 bloques por motivos generales de ajuste al mundo y rendimiento. Dicho esto,
puede manejar fácilmente estructuras mucho más grandes.

***

### Bloques especiales

BetterStructures tiene dos bloques especiales: barreras y roca madre. Cualquier otro bloque que WorldEdit / FAWE pueda
pegar se pegará normalmente, pero los bloques de barreras y roca madre son la excepción. En lugar de pegarse, estos
bloques se reemplazan con los siguientes comportamientos personalizados:

***

#### Barrera

Los bloques de barrera hacen que el plugin no coloque ningún bloque en esa ubicación. Esto significa que cualquier bloque que estuviera originalmente allí en la generación normal del mundo permanecerá allí.

Los constructores pueden usar esto para redondear los bordes de un pegado, haciéndolo parecer más natural, o para
moldear las paredes a una posible cueva, entre otros trucos.

***

#### Roca madre

Los bloques de roca madre hacen que el plugin garantice que haya un bloque sólido en esa ubicación. Esto significa que
si ya existe un bloque sólido en la generación predeterminada del mundo, ese bloque no se modificará; sin embargo, si el
bloque es aire o líquido, se reemplazará con un bloque sólido del [pedestal](#pedestalmaterial).

Los constructores pueden usar esto para crear pisos con características como el piso para los rieles de las vagonetas o
garantizar que exista un piso sin anular los bloques sólidos potencialmente ya existentes en esa ubicación en el mundo,
haciendo que las construcciones se vean más orgánicas.

***

### Carteles de aparición

BetterStructures puede usar carteles con texto específico para generar mobs e incluso jefes de EliteMobs y MythicMobs en ubicaciones específicas de la construcción.

***

##### Generación de mobs vanilla

Si tomas un cartel normal y lo colocas en algún lugar, asegúrate de que la primera línea diga `[spawn]` y la segunda
línea tenga
el [nombre del tipo de entidad siguiendo la API de Spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/entity/EntityType.html)
generarás una entidad persistente en esa ubicación del tipo que especificaste.

Como ejemplo, si tienes un cartel que dice `[spawn]` en la primera línea y `ZOMBIE` en la segunda línea, generarás un
zombie en esa ubicación cuando se coloque la construcción. Esto también se puede usar para entidades no vivas, como
soportes de armadura o cristales de ender.

<div class="minecraft-sign">
<p>[spawn]</p>
<p>ZOMBIE</p>
<p></p>
<p></p>
</div>

***

##### Generando Elite Mobs (plugin de jefes recomendado)

BetterStructures también tiene una integración avanzada de EliteMobs, que le permite crear arenas de jefes basadas en
construcciones y carteles de generación.

Si tomas un cartel normal y lo colocas en algún lugar, haciendo que la primera línea sea [elitemobs], puedes usar todas
las demás líneas para decir qué archivo de jefe usar.

Como ejemplo, si haces `[elitemobs]` en la primera línea y luego `test_boss.yml` en la segunda línea, generarás el jefe
de prueba. Si tienes un nombre de archivo muy largo como boss_con_nombre_de_archivo_muy_largo.yml, puedes dividirlo en
varias líneas, así que haz la línea 2 `boss_con_nombre_de_archivo_muy_` y luego la línea 3 `largo.yml` y eso funcionará.

Como recordatorio, de forma predeterminada, las arenas de combate estarán protegidas hasta que los jugadores maten a
todos los jefes en la construcción si tu servidor está usando WorldGuard.

<div class="minecraft-sign">
<p>[elitemobs]</p>
<p>test_boss_con</p>
<p>_un_nombre_largo</p>
<p>.yml</p>
</div>

***

##### Generando Mythic Mobs

BetterStructures también tiene una integración simple de MythicMobs, que le permite generar un mob de MythicMobs en la
construcción. En la primera línea de un cartel normal escribe `[mythicmobs]`, luego en la segunda línea usa el mob
identificado. Puedes usar un número en la tercera línea para establecer el nivel del mob.

<div class="minecraft-sign">
<p>[mythicmobs]</p>
<p>mi_jefe_mítico</p>
<p>1</p>
<p></p>
</div>

***

## Esquemas

Los esquemas son archivos generados por WorldEdit o FastAsyncWorldEdit que contienen los bloques para la construcción
que BetterStructures utilizará.

No se incluyen instrucciones detalladas sobre cómo hacer un esquema aquí, ya que se detallan exhaustivamente en la
documentación de WorldEdit y FastAsyncWorldEdit, pero generalmente se hace de la siguiente manera:

1) elige una esquina de la construcción y usa el comando `//pos1`
2) elige la esquina diagonalmente opuesta y usa el comando `//pos2`
3) usa el comando `//copy`
4) usa el comando `/schem save <nombre_del_esquema>` donde `<nombreDelEsquema>` es el nombre de archivo que quieres usar
   para tu esquema.

<img src="https://worldedit.enginehub.org/en/latest/_images/cuboid.png" alt="imagen de la documentación de Worldedit de sus documentos">

*¡Asegúrate de ejecutar el comando `//pos1` en el punto 1 y `//pos2` en el punto 2!*

***

#### Punto de anclaje

Los puntos de anclaje son donde ejecutas el comando `//copy` para el esquema. Al simplemente pegar un esquema, estos son
donde estás parado en relación con la construcción.

Los puntos de anclaje son importantes para que los esquemas funcionen correctamente.

* Para las _construcciones de superficie_, se recomienda que te pares en el punto más bajo del suelo al copiar la
  construcción.
* Para las _construcciones subterráneas_, se recomienda que te pares en la parte superior de la construcción.
* Para las _construcciones líquidas_, se recomienda que te pares en la parte superior del agua.
* Para las _construcciones aéreas_, se recomienda que te pares en la parte superior de la construcción.

**Ten en cuenta que siempre debes estar muy cerca o directamente encima de las construcciones al copiar; cuanto más
lejos estés, más lento será cuando sea necesario pegar la construcción.**

***

# Configuraciones de esquemas

Cada archivo de esquema tiene una configuración de esquema. Si se acaba de agregar un archivo de esquema al servidor, la
configuración se generará después de un reinicio o después de un `/betterstructures reload`.

Estas configuraciones te permiten establecer las siguientes configuraciones para el pegado del esquema:

***

## isEnabled

Establece si el esquema está habilitado. Si está deshabilitado, no se colocará en ningún lugar.

***

## weight

El peso establece el peso del esquema en términos de la probabilidad de que se elija.

El valor predeterminado es `1.0`. Si haces que una construcción tenga un peso de `2.0`, será 2 veces más probable que se
seleccione que las otras construcciones. Si lo haces `0.5`, tendrá la mitad de posibilidades de ser elegido.

_**Nota:** Ten en cuenta que las probabilidades de que se elija una construcción específica cambian drásticamente según
la cantidad de construcciones que compiten en total por la ubicación que obtendrá una estructura._

***

## pedestalMaterial

**Importante: campo opcional**

El material del pedestal establece el tipo de material de los bloques del pedestal usando
los [nombres de materiales de la API de spigot](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html) -
¡úsalo o no funcionará!

Los pedestales son los bloques que se colocan debajo de los edificios de superficie y subterráneos para ajustar
cualquier espacio de aire y mejorar el ajuste de un edificio con el mundo. Estos son también los mismos bloques que
reemplazan los bloques de roca madre en el esquema.

Cuando no se define nada en la configuración, los bloques debajo de la ubicación para el pegado se analizan y el ajuste
óptimo se selecciona como el material para el aspecto mejor integrado.

***

## generatorConfigFilename

Esta opción establece el nombre del archivo de configuración, por nombre de archivo, que utilizará el esquema. Esto
requiere el nombre de archivo completo, incluida la extensión `.yml` al final. Como
ejemplo, `generatorConfigFilename: generator_surface_global.yml` sería la opción correcta si deseas usar el generador
definido en `generator_surface_global.yml` que puedes encontrar en la carpeta de configuración de generadores.

***

## treasureFile

Establece el [archivo de tesoros]($language$/betterstructures/creating_treasure.md) que esta estructura utilizará,
sobrescribiendo el archivo de tesoros establecido por el [generador]($language$/betterstructures/creating_generators.md)
de la estructura. Esto generalmente no se recomienda a menos que sea para una construcción muy especial. Generalmente,
es mejor modificar o crear un generador para este propósito.

# Personalizando contenido

Todo lo distribuido en BetterStructures es editable. Puedes modificar cualquier archivo de esquema y configuración de
generador a tu gusto.

La guía de creación de contenido anterior es también una guía que puede ayudarte a editar contenido existente.
