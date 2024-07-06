Como de EliteMobs 7.3.12, se han añadido modelos personalizados a EliteMobs a través de [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) y [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Desde la perspectiva de EliteMobs, el sistema de modelo personalizado es muy simple, ya que lo único que tienen que hacer los administradores es agregar una línea a un archivo de configuración de jefe personalizado o NPC que le diga qué modelo personalizado usar. Sin embargo, es necesario seguir los pasos correctos con Model Engine y Minecraft para que este sistema sea completamente funcional, y estos no son tan fáciles de seguir.

Esta guía entrará en detalles en la medida en que se refiere a la interfaz con Model Engine y Minecraft. No te dirá cómo usar Blockbench para crear jefes personalizados, ni entrará en detalles sobre cómo funciona Model Engine. Ya hay muchas guías sobre cómo hacerlo en otros lugares, y si quieres obtener más información sobre esos sistemas, es mejor que consultes directamente su documentación.

## FreeMineCraft Models

Si deseas aprender cómo puedes usar FMM para que tus modelos funcionen, puedes consultar [esta]($language$/freeminecraftmodels/info.md) página wiki para obtener más información.

# Requisitos mínimos

EliteMobs 7.3.12 o posterior, Model Engine R2.2.0\* o posterior, Blockbench\*\*, un uso de paquetes de recursos de Minecraft.

\* Este complemento puede tener más dependencias. Consulta la documentación de su lado.  
\*\* Necesario para crear y editar modelos personalizados. No es necesario si solo estás buscando instalar contenido sin modificarlo.

# Configuración manual de un modelo personalizado

Nota: Esta guía asume que ya tienes un modelo personalizado válido. Estos vienen en formatos de archivo de Blockbench (`.bbmodel`).

EliteMobs puede usar modelos personalizados para NPC y jefes personalizados. El proceso para hacer esto es el mismo para ambos y es el siguiente:

## Paso 1. Configuración de la configuración de EliteMobs

Ve al archivo de configuración del jefe personalizado o NPC que deseas modificar y agrega la siguiente línea:

```yaml
customModel: nombredelmodelo
```

Reemplaza `nombredelmodelo` con el nombre de tu modelo. El nombre es el nombre del archivo de modelo personalizado que estás utilizando. Por ejemplo, el archivo de modelo personalizado de Test Boss es `showcase_boss.bbmodel`. Como tal, la opción de configuración debería ser

```yaml
customModel: showcase_boss
```

¡Y eso es todo para EliteMobs! Ahora se vuelve un poco más complicado.

## Paso 2. Generación de datos de Model Engine

[_Nota: en caso de duda o problemas, consulta la wiki de Model Engine aquí._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Coloca tu archivo Blockbench de modelo personalizado (`.bbmodel`) en el directorio `(tuServidor)/plugins/ModelEngine/blueprints`.
2.  Ejecuta el comando `/meg reload`. Si todo funcionó correctamente, deberías recibir un mensaje que dice `[Model Engine] X modelos cargados`, donde `x` es la cantidad de modelos que has registrado.

## Paso 3. Generación del paquete de recursos

[**Nota: ahora hay una forma alternativa y más sencilla de hacer este paso en este enlace.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Sin embargo, es un poco menos flexible que lo que se enumera aquí.

Esta es posiblemente la parte más complicada si estás buscando que tu servidor administre las descargas. **¡Intenta comprobar si el sistema funciona cuando tienes el paquete de recursos en tu cliente antes de buscar distribuirlo automáticamente!**

1.  Ve al directorio `(tuServidor)/plugins/ModelEngine/resource pack` y crea un paquete de recursos utilizando esos datos o agrega la carpeta `assets` allí a los `assets` de tu paquete de recursos.
    1.  Si estás creando un nuevo paquete de recursos, puedes colocar los archivos en `resource pack` en un archivo comprimido, y ese será un paquete de recursos válido que puedes distribuir. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Si ya tienes un paquete de recursos, asegúrate de no sobrescribir accidentalmente los modelos existentes. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribuye tu paquete de recursos a tus jugadores. **Solo los jugadores que tengan el paquete de recursos podrán ver los modelos personalizados**, y se verá muy extraño y roto para todos los demás. Si tienes la intención de hacer un uso intensivo de estos, es posible que desees forzar el uso del paquete de recursos.
    1.  (Opcional) Para permitir que los jugadores descarguen un paquete de recursos al iniciar sesión, deberás alojar el archivo en algún lugar en línea y cambiar el campo `resource-pack=` de server.properties para que apunte a esa dirección.**\***
    2.  (Opcional) Si estás modificando los paquetes de recursos, querrás usar la opción `resource-pack-sha1=` para que el servidor pueda verificar si el paquete de recursos del jugador necesita ser actualizado. Para generar este valor, carga tu paquete de recursos a [http://onlinemd5.com/](http://onlinemd5.com/) y asegúrate de elegir la opción SHA1. Tendrás que hacer esto cada vez que actualices tu paquete de recursos, de lo contrario, tus usuarios no recibirán la actualización.**\***
    3.  (Opcional) Para obligar a los jugadores a usar paquetes de recursos, usa la opción `require-resource-pack=true` en server.properties.**\***

**¡Si modificaste server.properties, deberás reiniciar!**

**\*** Nota: hay muchas guías en línea que pueden ayudarte a que esto funcione si estas instrucciones no te ayudan.

### Fusionar paquetes de recursos

Si necesitas fusionar tus paquetes de recursos, puedes hacerlo manualmente. Pero recomendamos utilizar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

## Paso 4. Espero que funcione

Suponiendo que todo se hizo correctamente, ahora deberías poder ver el modelo personalizado en tu jefe o NPC. Puedes generarlos a través de los comandos:

*   Jefe personalizado: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

Luego puedes eliminarlos a través del comando `/em remove`.

# Creación y adaptación de modelos personalizados para EliteMobs

EliteMobs puede usar cualquier modelo considerado válido por Model Engine, lo que significa que no hay mucho que no se pueda hacer con él.

Sin embargo, cuando se trata de animaciones, se requiere el uso de nombres específicos para las animaciones para garantizar que los jefes puedan usar las animaciones.

Estos nombres de animación son los que se establecen en Blockbench en la pestaña de animaciones. Puedes cambiarles el nombre en cualquier momento, lo que significa que puedes adaptar cualquier modelo existente para que funcione con EliteMobs.

## Animaciones

Ten en cuenta que esta sección aún se está expandiendo, ya que este sistema es muy reciente. Se le agregará más a medida que lleguen las solicitudes de funciones.

### idle

`idle` es el nombre de animación correcto para las entidades que no están en combate y no se mueven. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### walk

`walk` es el nombre de animación correcto para las entidades que se están moviendo. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### attack

Hay tres tipos de animaciones de ataque:

#### attack

`attack` es el nombre de animación genérico correcto para cuando un jefe ataca.

#### attack_melee

`attack_melee` es el nombre de animación correcto para los ataques que se realizan cuando un jefe personalizado ataca a una entidad utilizando un ataque cuerpo a cuerpo de vainilla de Minecraft. Anula `attack`. Ten en cuenta que la animación se reproduce **después** de que se inflige el daño. Desafortunadamente, esta es una limitación por ahora. Como tal, intenta hacer la animación muy rápida.

#### attack_ranged

`attack_ranged` es el nombre de animación correcto para los ataques que se realizan cuando un jefe personalizado genera una entidad proyectil. Anula `attack`. Ten en cuenta que la animación se reproduce **después** de que se dispara el proyectil. Desafortunadamente, esta es una limitación por ahora. Como tal, intenta hacer la animación muy rápida.

### damaged

`damaged` es el nombre de animación correcto para la animación de daño que reproduce un jefe personalizado cuando se daña.

### death

`death` es el nombre de animación correcto para la animación de muerte. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### powers

Nota: este segmento aún está en desarrollo. Las siguientes son las características tal como están planificadas.

A cada poder en EliteMobs se le puede asignar una animación. La animación siempre comienza cuando se activa el poder, y actualmente no se proporcionan más activadores durante el uso del poder. Algunos poderes, como las invulnerabilidades, no harán nada ya que no tienen activadores y son solo propiedades pasivas de los jefes.

Para asignar una animación a un poder, la animación debe tener el mismo nombre que el archivo de poder de elitemobs.

Como ejemplo, para agregar una animación al poder del necronomicón zombi, la animación debe llamarse `zombie_necronomicon.yml`. Comenzará a reproducirse tan pronto como se active el poder y finalizará cuando finalice la animación si no está configurada para repetirse o cuando finalice el poder.

# Importar modelos personalizados de mazmorras

## Paso 1. Importación normal

Al importar una carpeta comprimida del empaquetador de mazmorras que contiene modelos personalizados, los modelos personalizados se mueven automáticamente a `(tuServidor)/plugins/ModelEngine/blueprints` y Model Engine se recarga automáticamente para generar el paquete de recursos y los archivos de Model Engine relevantes.

## Paso 2. Generación del paquete de recursos

Si estás en línea cuando recargas EliteMobs para importar archivos, EliteMobs publicará automáticamente un mensaje en el chat en el que puedes hacer clic para generar el paquete de recursos de EliteMobs. Alternativamente, puedes ejecutar el comando `/em generateresourcepack` para generarlo.

Ejecutar este comando copia todos los archivos del paquete de recursos a la carpeta `exports` de EliteMobs de forma no destructiva. Esto significa que si descomprimes un paquete de recursos en la carpeta de exportaciones utilizando el nombre del paquete de recursos `elitemobs_resource_pack` para tu carpeta de paquete de recursos, EliteMobs no eliminará ninguno de los archivos que contiene a menos que se obtenga un archivo con el mismo nombre de ModelEngine (excepto para pack.meta y pack.png). De esta manera, puedes actualizar tu paquete de recursos sin perder los modelos que has puesto previamente en él.

Finalmente, EliteMobs comprime el paquete de recursos en la carpeta `exports`, y este archivo está listo para su distribución.

Una vez hecho esto, EliteMobs también sugiere actualizar el código SHA1 de tu paquete de recursos.

### Paso 2.5. Actualización del SHA1

El código SHA1 en el archivo `server.properties` se utiliza para informar a los clientes si su paquete de recursos está desactualizado y les hace actualizarlo si es necesario. Este código se puede generar a través de EliteMobs haciendo clic en la opción en el chat que aparece después del paso 2 o ejecutando el comando `/em updateresourcepack`.

**Ten en cuenta que esto actualiza tu archivo server.properties con el código SHA1 correcto para el paquete de recursos comprimido en la carpeta `exports`.** Si lo eliminas o modificas el archivo comprimido después de ejecutar el comando, no funcionará.

## Paso 3. Haz que el archivo esté disponible públicamente

Aloja el archivo en una ubicación de tu elección. Algunas personas usan Google Drive o Dropbox para esto. Es mejor alojar este archivo tú mismo, si tienes la posibilidad de hacerlo. Algunos complementos también pueden ayudarte a alojarlo directamente desde tu servidor de Minecraft. Si encuentras un complemento de este tipo que funcione, házselo saber a MagmaGuy en Discord y esta publicación se actualizará con esa información.

