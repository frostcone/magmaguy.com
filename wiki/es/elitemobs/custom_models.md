A partir de EliteMobs 7.3.12, los Modelos Personalizados se han añadido a EliteMobs a través de [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) y [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Desde la perspectiva de EliteMobs, el sistema de Modelos Personalizados es muy simple, ya que lo único que los administradores tienen que hacer es añadir una línea a un archivo de configuración de NPC o Jefe Personalizado indicando qué Modelo Personalizado utilizar. Sin embargo, es necesario seguir los pasos correctos con Model Engine y Minecraft para conseguir que este sistema esté completamente funcional, y estos no son tan fáciles de seguir.

Esta guía detallará cómo interactuar con Model Engine y Minecraft. No te explicará cómo usar Blockbench para crear jefes personalizados, ni entrará en detalles sobre cómo funciona Model Engine. Hay un montón de guías que te muestran cómo hacer eso en otros lugares, y si quieres aprender más sobre estos sistemas es mejor que consultes su documentación directamente.

## FreeMineCraft Models

Si quieres aprender cómo puedes usar FMM para hacer que tus modelos funcionen, puedes consultar [esta](\$language\$/freeminecraftmodels/info.md) página wiki para obtener más información.

# Requisitos mínimos

EliteMobs 7.3.12 o posterior, Model Engine R2.2.0\* o posterior, Blockbench\*\*, uso de paquetes de recursos de Minecraft.

\* Este plugin puede tener más dependencias. Consulta la documentación en su extremo.
\*\* Necesario para crear y editar Modelos Personalizados. No es necesario si sólo buscas instalar contenido sin modificarlo.

# Configuración manual de un Modelo Personalizado

Nota: Esta guía asume que ya tienes un Modelo Personalizado válido. Estos vienen en formatos de archivo Blockbench (`.bbmodel`).

EliteMobs puede utilizar Modelos Personalizados para NPCs y Jefes Personalizados. El proceso para hacer esto es el mismo para ambos, y es el siguiente:

## Paso 1. Configuración de EliteMobs

Ve al archivo de configuración del Jefe Personalizado o NPC que quieres modificar y añade la siguiente línea:

```yaml
customModel: modelname
```

Reemplaza `modelname` por el nombre de tu modelo. El nombre es el nombre del archivo del Modelo Personalizado que estás utilizando. Como ejemplo, el archivo de Modelo Personalizado del Jefe de Prueba es `showcase_boss.bbmodel`. Por lo tanto, la opción de configuración debería ser:

```yaml
customModel: showcase_boss
```

¡Y eso es todo para EliteMobs! Ahora se pone un poco más complicado.

## Paso 2. Generando los datos del Model Engine

[_Nota: En caso de duda o problemas, consulta la wiki de Model Engine aquí._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. Coloca tu archivo Blockbench de Modelo Personalizado (`.bbmodel`) en el directorio `(yourServer)/plugins/ModelEngine/blueprints`.
2. Ejecuta el comando `/meg reload`. Si todo funcionó correctamente, deberías recibir un mensaje que dice `[Model Engine] X modelos cargados`, donde `x` es la cantidad de modelos que tienes registrados.

## Paso 3. Generando el Paquete de Recursos

[**Nota: ahora hay una forma alternativa y más sencilla de hacer este paso en este enlace.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Sin embargo, es un poco menos flexible de lo que se detalla aquí.

Esta es posiblemente la parte más complicada si quieres que tu servidor gestione las descargas. **¡Intenta verificar si el sistema funciona cuando tienes el paquete de recursos en tu cliente antes de buscar cómo distribuirlo automáticamente!**

1. Ve al directorio `(yourServer)/plugins/ModelEngine/resource pack` y crea un paquete de recursos usando esos datos o añade la carpeta `assets` a los `assets` de tu paquete de recursos.
    1. Si estás creando un nuevo paquete de recursos, puedes poner los archivos en `resource pack` en un archivo comprimido, y ese será un paquete de recursos válido que puedes distribuir. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2. Si ya tienes un paquete de recursos, asegúrate de no sobrescribir accidentalmente modelos existentes. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2. Distribuye tu paquete de recursos a tus jugadores. **Sólo los jugadores que tengan el paquete de recursos podrán ver los Modelos Personalizados**, y a los demás les parecerá muy raro y roto. Si piensas hacer un uso intensivo de estos, es posible que quieras obligar al uso del paquete de recursos.
    1. (Opcional) Para permitir a los jugadores descargar el paquete de recursos al iniciar sesión, necesitarás alojar el archivo en algún lugar en línea y cambiar el campo `resource-pack=` de server.properties para que apunte a esa dirección.**\***
    2. (Opcional) Si estás modificando los paquetes de recursos, querrás usar la opción `resource-pack-sha1=` para que el servidor pueda comprobar si el paquete de recursos del jugador necesita ser actualizado. Para generar este valor, sube tu paquete de recursos a [http://onlinemd5.com/](http://onlinemd5.com/) y asegúrate de escoger la opción SHA1. Tendrás que hacer esto cada vez que actualices tu Paquete de Recursos, o tus usuarios no recibirán la actualización.**\***
    3. (Opcional) Para obligar a los jugadores a utilizar paquetes de recursos, usa la opción `require-resource-pack=true` en server.properties.**\***

**¡Si modificaste server.properties necesitarás reiniciar!**

**\*** Nota: Hay muchas guías en línea que pueden ayudarte a hacer que esto funcione si estas instrucciones no te están ayudando.

### Fusionar paquetes de recursos

Si necesitas fusionar tus paquetes de recursos puedes hacerlo manualmente. Pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

## Paso 4. Esperamos que funcione

Asumiendo que todo se hizo correctamente, ahora deberías poder ver el Modelo Personalizado en tu jefe o NPC. Puedes hacer que aparezcan a través de los comandos:

*   Custom Boss: `/em spawncustom filename.yml`
*   NPC: `/em spawnnpc filename.yml`

Y puedes quitarlos a través del comando `/em remove`.

# Creando y adaptando Modelos Personalizados para EliteMobs

EliteMobs puede utilizar cualquier modelo que Model Engine considere válido, lo que significa que no hay mucho que no se pueda hacer con él.

Sin embargo, en cuanto a animaciones, se requiere el uso de nombres específicos para las animaciones para garantizar que los jefes pueden utilizar las animaciones.

Los nombres de las animaciones son los que se establecen en Blockbench en la pestaña de animaciones. Puedes cambiarlos en cualquier momento, lo que significa que puedes adaptar cualquier modelo existente para que funcione con EliteMobs.

## Animaciones

Ten en cuenta que esta sección está aún en expansión, ya que este sistema es aún muy reciente. Se añadirá más a medida que vayan llegando las solicitudes de características.

### idle

`idle` es el nombre correcto de la animación para entidades que no están en combate y no se están moviendo. EliteMobs no modifica el sistema de animación idle (en reposo) por defecto que utiliza Model Engine.

### walk

`walk` es el nombre correcto de la animación para entidades que están moviéndose. EliteMobs no modifica el sistema de animación idle (en reposo) por defecto que utiliza Model Engine.

### attack

Hay tres tipos de animaciones de ataque:

#### attack

`attack` es el nombre de animación genérico correcto para cuando un jefe ataca.

#### attack_melee

`attack_melee` es el nombre correcto de la animación para los ataques realizados cuando un Jefe Personalizado ataca a una entidad usando un ataque cuerpo a cuerpo de Minecraft estándar. Sobreescribe `attack`. Ten en cuenta que la animación se reproduce **después** de que se inflige el daño. Esto es desafortunadamente una limitación por ahora. Como tal, trata de hacer que la animación sea muy rápida.

#### attack_ranged

`attack_ranged` es el nombre correcto de la animación para ataques realizados cuando un Jefe Personalizado lanza una entidad de proyectil. Sobreescribe `attack`. Ten en cuenta que la animación se reproduce **después** de que se dispara el proyectil. Esto es desafortunadamente una limitación por ahora. Como tal, trata de hacer que la animación sea muy rápida.

### damaged

`damaged` es el nombre correcto de la animación de daño que un Jefe Personalizado reproduce cuando es dañado.

### death

`death` es el nombre correcto de la animación de muerte. EliteMobs no modifica el sistema de animación idle (en reposo) por defecto que utiliza Model Engine.

### powers

Nota: este segmento aún está en desarrollo. Lo siguiente son las características tal como están planeadas.

Cada poder en EliteMobs puede tener una animación asignada a él. La animación siempre comienza cuando se activa el poder, y no se proporcionan más disparadores durante el uso del poder. Algunos poderes, como las invulnerabilidades, no harán nada ya que no tienen disparadores y son simplemente propiedades pasivas de los jefes.

Para asignar una animación a un poder, la animación debe tener el mismo nombre que el archivo de poder de elitemobs.

Como ejemplo, para añadir una animación al poder del necronomicón zombi, la animación debería llamarse `zombie_necronomicon.yml`. Comenzará a reproducirse tan pronto como se active el poder, y terminará cuando la animación termine si no está configurada para repetirse o cuando el poder esté hecho.

# Importar Modelos Personalizados de dungeons

## Paso 1. Importación normal

Al importar una carpeta comprimida de empaquetador de dungeon que contiene Modelos Personalizados, estos se mueven automáticamente a `(yourServer)/plugins/ModelEngine/blueprints` y Model Engine se recarga automáticamente para generar el paquete de recursos relevante y los archivos de Model Engine.

## Paso 2. Generando el Paquete de Recursos

Si estás en línea cuando recargas EliteMobs para importar archivos, EliteMobs automáticamente publicará un mensaje en el chat al que puedes hacer clic para generar el paquete de recursos de EliteMobs. Alternativamente, puedes ejecutar el comando `/em generateresourcepack` para generarlo.

Ejecutar este comando copia todos los archivos del paquete de recursos a la carpeta `exports` de EliteMobs de una manera no destructiva. Esto significa que si descomprimes un paquete de recursos en la carpeta de exportaciones utilizando el nombre `elitemobs_resource_pack` para la carpeta de tu paquete de recursos, EliteMobs no eliminará ninguno de los archivos allí a menos que se obtenga un archivo con el mismo nombre de ModelEngine (excepto para pack.meta y pack.png). De esta manera puedes actualizar tu paquete de recursos sin perder los modelos que previamente pusiste en él.

Finalmente, EliteMobs comprime el paquete de recursos en la carpeta `exports`, y este archivo está listo para ser distribuido

Después de esto, EliteMobs también sugiere actualizar el código SHA1 de tu paquete de recursos.

### Paso 2.5. Actualizando el SHA1

El código SHA1 en el archivo `server.properties` se utiliza para que los clientes sepan si su paquete de recursos está desactualizado, y les haga actualizarlo si es necesario. Este código puede generarse a través de EliteMobs haciendo clic en la opción en el chat que aparece después del paso 2, o ejecutando el comando `/em updateresourcepack`

**Ten en cuenta que esto actualiza tu archivo server.properties con el código SHA1 correcto para el paquete de recursos comprimido en la carpeta `exports`.** Si lo borras o modificas el archivo comprimido después de ejecutar el comando, no funcionará.

## Paso 3. Haz el archivo públicamente disponible

Aloja el archivo en un lugar de tu elección. Algunas personas utilizan Google Drive o Dropbox para esto. Es mejor alojar este archivo tú mismo, si tienes la capacidad de hacerlo. Algunos plugins por ahí también pueden ayudarte a alojarlo directamente desde tu servidor de Minecraft. Si encuentras un plugin de ese tipo que funcione, informa a MagmaGuy en Discord y esta publicación será actualizada con esa información.


