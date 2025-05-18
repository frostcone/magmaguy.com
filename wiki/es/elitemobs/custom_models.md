A partir de EliteMobs 7.3.12, se han añadido Modelos Personalizados a EliteMobs a través de [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) y [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Desde la perspectiva de EliteMobs, el sistema de Modelos Personalizados es muy simple, ya que lo único que los administradores tienen que hacer es añadir una línea a un archivo de configuración de NPC o Jefe Personalizado indicando qué Modelo Personalizado usar. Sin embargo, es necesario seguir los pasos correctos con Model Engine y Minecraft para que este sistema sea completamente funcional, y estos no son tan fáciles de entender al principio.

Esta guía entrará en detalle en lo que respecta a la interfaz con Model Engine y Minecraft. No te dirá cómo usar Blockbench para crear jefes personalizados, ni entrará en detalle sobre cómo funciona Model Engine. Ya existen muchas guías sobre cómo hacer eso en otros lugares, y si quieres aprender más sobre esos sistemas, es mejor que consultes directamente su documentación.

## Modelos de FreeMineCraft

Si quieres aprender cómo usar FMM para que tus modelos funcionen, puedes consultar [esta](/es/freeminecraftmodels/info.md) página de la wiki para obtener más información.

# Requisitos mínimos

EliteMobs 7.3.12 o posterior, Model Engine R2.2.0\* o posterior, Blockbench\*\*, y el uso de Paquetes de Recursos de Minecraft.

\* Este plugin puede tener dependencias adicionales. Consulta la documentación correspondiente.
\*\* Necesario para crear y editar Modelos Personalizados. No es necesario si solo buscas instalar contenido sin modificarlo.

# Configuración manual de un Modelo Personalizado

Nota: Esta guía asume que ya tienes un Modelo Personalizado válido. Estos vienen en formatos de archivo de Blockbench (`.bbmodel`).

EliteMobs puede usar Modelos Personalizados para NPCs y Jefes Personalizados. El proceso para hacerlo es el mismo para ambos, y es el siguiente:

## Paso 1. Configuración de EliteMobs

Ve al archivo de configuración del Jefe Personalizado o NPC que deseas modificar y añade la siguiente línea:

```yaml
customModel: modelname
```

Reemplaza `modelname` con el nombre de tu modelo. El nombre es el nombre del archivo del Modelo Personalizado que estás usando. Como ejemplo, el archivo del Modelo Personalizado del Jefe de Prueba es `showcase_boss.bbmodel`. Por lo tanto, la opción de configuración debería ser

```yaml
customModel: showcase_boss
```

¡Y eso es todo para EliteMobs! Ahora se pone un poco más complicado.

## Paso 2. Generación de los datos de Model Engine

[_Nota: En caso de duda o problemas, consulta la wiki de Model Engine aquí._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Coloca tu archivo de Modelo Personalizado de Blockbench (`.bbmodel`) en el directorio `(tuServidor)/plugins/ModelEngine/blueprints` .
2.  Ejecuta el comando `/meg reload` . Si todo funcionó correctamente, deberías recibir un mensaje que dice `[Model Engine] X models loaded` , donde `x` es la cantidad de modelos que has registrado.

## Paso 3. Generación del Paquete de Recursos

[**Nota: ahora hay una forma alternativa y más sencilla de hacer este paso en este enlace.**](/es/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Sin embargo, es un poco menos flexible que lo que se describe aquí.

Esta es posiblemente la parte más complicada si buscas que tu servidor gestione las descargas. **¡Intenta verificar si el sistema funciona cuando tienes el paquete de recursos en tu cliente antes de considerar distribuirlo automáticamente!**

1.  Ve al directorio `(tuServidor)/plugins/ModelEngine/resource pack` y crea un paquete de recursos usando esos datos o añade la carpeta `assets` que se encuentra allí a la carpeta `assets` de tu paquete de recursos.
    1.  Si estás creando un nuevo paquete de recursos, puedes poner los archivos de `resource pack` en un archivo comprimido (zip), y ese será un paquete de recursos válido que puedes distribuir. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Si ya tienes un paquete de recursos, asegúrate de no sobrescribir accidentalmente modelos existentes. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribuye tu paquete de recursos a tus jugadores. **Solo los jugadores que tengan el paquete de recursos podrán ver los Modelos Personalizados**, y se verá muy extraño y roto para todos los demás. Si tienes la intención de hacer un uso intensivo de estos, quizás quieras forzar el uso del paquete de recursos.
    1.  (Opcional) Para permitir que los jugadores descarguen un paquete de recursos al iniciar sesión, necesitarás alojar el archivo en algún lugar en línea y cambiar el campo `resource-pack=` en `server.properties` para que apunte a esa dirección.**\***
    2.  (Opcional) Si estás modificando los paquetes de recursos, querrás usar la opción `resource-pack-sha1=` para que el servidor pueda verificar si el paquete de recursos del jugador necesita ser actualizado. Para generar este valor, sube tu paquete de recursos a [http://onlinemd5.com/](http://onlinemd5.com/) y asegúrate de seleccionar la opción SHA1. Tendrás que hacer esto cada vez que actualices tu Paquete de Recursos, de lo contrario tus usuarios no recibirán la actualización.**\***
    3.  (Opcional) Para forzar a los jugadores a usar paquetes de recursos, usa la opción `require-resource-pack=true` en `server.properties`.**\***

**¡Si modificaste server.properties, necesitarás reiniciar!**

**\*** Nota: Hay muchas guías en línea que pueden ayudarte a que esto funcione si estas instrucciones no te son útiles.

### Fusionar paquetes de recursos

Si necesitas fusionar tus paquetes de recursos, puedes hacerlo manualmente. Pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

## Paso 4. Espera que funcione

Asumiendo que todo se hizo correctamente, ahora deberías poder ver el Modelo Personalizado en tu jefe o NPC. Puedes invocarlos a través de los comandos:

*   Jefe Personalizado: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

Luego puedes eliminarlos a través del comando `/em remove`.

# Creación y adaptación de Modelos Personalizados para EliteMobs

EliteMobs puede usar cualquier modelo considerado válido por Model Engine, lo que significa que no hay mucho que no se pueda hacer con él.

Sin embargo, en lo que respecta a las animaciones, se requiere el uso de nombres específicos para las animaciones para garantizar que los jefes puedan utilizarlas.

Estos nombres de animación son los que se establecen en Blockbench en la pestaña de animaciones. Puedes renombrarlos en cualquier momento, lo que significa que puedes adaptar cualquier modelo existente para que funcione con EliteMobs.

## Animaciones

Ten en cuenta que esta sección aún se está expandiendo, ya que este sistema es muy reciente. Se añadirán más elementos a medida que lleguen las solicitudes de funciones.

### idle

`idle` es el nombre de animación correcto para entidades que no están en combate y no se mueven. EliteMobs no modifica el sistema de animación `idle` predeterminado que usa Model Engine.

### walk

`walk` es el nombre de animación correcto para entidades que se están moviendo. EliteMobs no modifica el sistema de animación `walk` predeterminado que usa Model Engine.

### attack

Hay tres tipos de animaciones de ataque:

#### attack

`attack` es el nombre de animación genérico correcto para cuando un jefe ataca.

#### attack_melee

`attack_melee` es el nombre de animación correcto para los ataques realizados cuando un Jefe Personalizado ataca a una entidad usando un ataque cuerpo a cuerpo de Minecraft vanilla. Sobrescribe `attack` . Ten en cuenta que la animación se reproduce **después** de que se inflige el daño. Desafortunadamente, esto es una limitación por ahora. Por lo tanto, intenta que la animación sea muy rápida.

#### attack_ranged

`attack_ranged` es el nombre de animación correcto para los ataques realizados cuando un Jefe Personalizado genera una entidad proyectil. Sobrescribe `attack`. Ten en cuenta que la animación se reproduce **después** de que se dispara el proyectil. Desafortunadamente, esto es una limitación por ahora. Por lo tanto, intenta que la animación sea muy rápida.

### damaged

`damaged` es el nombre de animación correcto para la animación de daño que un Jefe Personalizado reproduce cuando es dañado.

### death

`death` es el nombre de animación correcto para la animación de muerte. EliteMobs no modifica el sistema de animación `death` predeterminado que usa Model Engine.

### powers

Nota: este segmento aún está en desarrollo. Las siguientes son las características tal como están planificadas.

Cada poder en EliteMobs puede tener una animación asignada. La animación siempre comienza cuando se activa el poder, y actualmente no se proporcionan más activadores durante el uso del poder. Algunos poderes, como las invulnerabilidades, no harán nada ya que no tienen activadores y son solo propiedades pasivas de los jefes.

Para asignar una animación a un poder, la animación debe tener el mismo nombre que el archivo de poder de elitemobs.

Como ejemplo, para añadir una animación al poder zombie necronomicon, la animación debería llamarse `zombie_necronomicon.yml` . Comenzará a reproducirse tan pronto como se active el poder, y terminará cuando la animación termine si no está configurada para repetirse o cuando el poder haya finalizado.

# Importación de Modelos Personalizados desde mazmorras

## Paso 1. Importación normal

Al importar una carpeta comprimida (zip) de un paquete de mazmorra que contiene Modelos Personalizados, los Modelos Personalizados se mueven automáticamente a `(tuServidor)/plugins/ModelEngine/blueprints` y Model Engine se recarga automáticamente para generar el paquete de recursos y los archivos de Model Engine relevantes.

## Paso 2. Generación del Paquete de Recursos

Si estás en línea cuando recargas EliteMobs para importar archivos, EliteMobs publicará automáticamente un mensaje en el chat en el que puedes hacer clic para generar el paquete de recursos de EliteMobs. Alternativamente, puedes ejecutar el comando `/em generateresourcepack` para generarlo.

Ejecutar este comando copia todos los archivos del paquete de recursos a la carpeta `exports` de EliteMobs de manera no destructiva. Esto significa que si descomprimes un paquete de recursos en la carpeta exports usando el nombre de paquete de recursos `elitemobs_resource_pack` para tu carpeta de paquete de recursos, EliteMobs no eliminará ninguno de los archivos allí a menos que se obtenga un archivo con el mismo nombre de ModelEngine (excepto pack.meta y pack.png). De esta manera, puedes actualizar tu paquete de recursos sin perder los modelos que has puesto previamente en él.

Finalmente, EliteMobs comprime el paquete de recursos en la carpeta `exports`, y este archivo está listo para su distribución.

Una vez hecho esto, EliteMobs también sugiere actualizar el código SHA1 para tu paquete de recursos.

### Paso 2.5. Actualización del SHA1

El código SHA1 en el archivo `server.properties` se utiliza para que los clientes sepan si su paquete de recursos está desactualizado y los obliga a actualizarlo si es necesario. Este código se puede generar a través de EliteMobs haciendo clic en la opción del chat que aparece después del paso 2, o ejecutando el comando `/em updateresourcepack`

**Ten en cuenta que esto actualiza tu archivo server.properties con el código SHA1 correcto para el paquete de recursos comprimido en la carpeta `exports`.** Si lo eliminas o modificas el archivo comprimido después de ejecutar el comando, no funcionará.

## Paso 3. Haz que el archivo esté disponible públicamente

Aloja el archivo en una ubicación de tu elección. Algunas personas usan Google Drive o Dropbox para esto. Es mejor alojar este archivo tú mismo, si tienes la capacidad de hacerlo. Algunos plugins por ahí también podrían ayudarte a alojarlo directamente desde tu servidor de Minecraft. Si encuentras un plugin así que funcione, házselo saber a MagmaGuy en Discord y esta publicación se actualizará con esa información.