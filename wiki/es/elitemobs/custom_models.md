A partir de EliteMobs 7.3.12, se han añadido Modelos Personalizados a EliteMobs a través
de [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/)
y [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Desde la perspectiva de EliteMobs, el sistema de Modelos Personalizados es muy sencillo, ya que lo único que tienen que
hacer los administradores es añadir una línea al archivo de configuración de un NPC o Jefe Personalizado diciéndole qué
Modelo Personalizado usar. Sin embargo, es necesario seguir los pasos correctos con Model Engine y Minecraft para que
este sistema funcione correctamente, y estos no son tan fáciles de entender.

Esta guía entrará en detalle en lo que respecta a la interfaz con Model Engine y Minecraft. No te dirá cómo usar
Blockbench para crear jefes personalizados, ni entrará en detalles sobre cómo funciona Model Engine. Ya hay muchas guías
sobre cómo hacer eso en otros lugares, y si quieres aprender más sobre esos sistemas, es mejor que consultes
directamente su documentación.

## FreeMineCraft Models

Si quieres saber cómo puedes usar FMM para que tus modelos funcionen, puedes
consultar [esta]($language$/freeminecraftmodels/info.md) página de la wiki para obtener más información.

# Requisitos mínimos

EliteMobs 7.3.12 o posterior, Model Engine R2.2.0\* o posterior, Blockbench\*\*, un paquete de recursos de Minecraft en
uso.

\* Este plugin puede tener más dependencias. Consulta la documentación correspondiente.
\*\* Necesario para crear y editar Modelos Personalizados. No es necesario si solo quieres instalar contenido sin
modificarlo.

# Configuración manual de un Modelo Personalizado

Nota: Esta guía asume que ya tienes un Modelo Personalizado válido. Estos vienen en formatos de archivo
Blockbench (`.bbmodel`).

EliteMobs puede usar Modelos Personalizados para NPCs y Jefes Personalizados. El proceso para hacer esto es el mismo
para ambos, y es el siguiente:

## Paso 1. Configuración de EliteMobs

Ve al archivo de configuración del Jefe Personalizado o NPC que quieras modificar y añade la siguiente línea:

```yaml
customModel: nombremodelo
```

Sustituye `nombremodelo` por el nombre de tu modelo. El nombre es el nombre del archivo del Modelo Personalizado que
estás usando. Por ejemplo, el archivo del Modelo Personalizado del Jefe de Prueba es `showcase_boss.bbmodel`. Como tal,
la opción de configuración debería ser

```yaml
customModel: showcase_boss
```

¡Y eso es todo para EliteMobs! Ahora se pone un poco más complicado.

## Paso 2. Generar los datos de Model Engine

[_Nota: En caso de duda o problemas, consulta la wiki de Model Engine
aquí._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1. Coloca tu archivo Blockbench de Modelo Personalizado (`.bbmodel`) en el
   directorio `(tuServidor)/plugins/ModelEngine/blueprints`.
2. Ejecuta el comando `/meg reload`. Si todo funcionó correctamente, deberías recibir un mensaje que
   diga `[Model Engine] X modelos cargados`, donde `x` es la cantidad de modelos que has registrado.

## Paso 3. Generar el paquete de recursos

[**Nota: ahora hay una forma alternativa más sencilla de hacer este paso en este enlace.
**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Sin embargo, es un poco menos
flexible que lo que se indica aquí.

Esta es posiblemente la parte más complicada si quieres que tu servidor gestione las descargas. **¡Intenta comprobar si
el sistema funciona cuando tienes el paquete de recursos en tu cliente antes de intentar distribuirlo automáticamente!**

1. Ve al directorio `(tuServidor)/plugins/ModelEngine/resource pack` y crea un paquete de recursos utilizando esos datos
   o añade la carpeta `assets` ahí a la carpeta `assets` de tu paquete de recursos.
    1. Si estás creando un nuevo paquete de recursos, puedes poner los archivos en `resource pack` en un archivo
       comprimido, y ese será un paquete de recursos válido que puedes
       distribuir. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2. Si ya tienes un paquete de recursos, asegúrate de no sobrescribir accidentalmente los modelos
       existentes. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2. Distribuye tu paquete de recursos a tus jugadores. **Solo los jugadores que tengan el paquete de recursos podrán ver
   los Modelos Personalizados**, y se verá muy raro y roto para todos los demás. Si tienes la intención de hacer un uso
   intensivo de estos, es posible que desees forzar el uso del paquete de recursos.
    1. (Opcional) Para permitir que los jugadores descarguen un paquete de recursos al iniciar sesión, tendrás que
       alojar el archivo en algún lugar en línea y cambiar el campo `resource-pack=` de `server.properties` para que
       apunte a esa dirección.**\***
    2. (Opcional) Si estás modificando los paquetes de recursos, querrás usar la opción `resource-pack-sha1=` para que
       el servidor pueda comprobar si es necesario actualizar el paquete de recursos del jugador. Para generar este
       valor, sube tu paquete de recursos a [http://onlinemd5.com/](http://onlinemd5.com/) y asegúrate de elegir la
       opción SHA1. Tendrás que hacer esto cada vez que actualices tu Paquete de Recursos, o de lo contrario tus
       usuarios no recibirán la actualización.**\***
    3. (Opcional) Para obligar a los jugadores a usar paquetes de recursos, usa la opción `require-resource-pack=true`
       en server.properties.**\***

**Si has modificado server.properties, ¡tendrás que reiniciar!**

**\*** Nota: Hay muchas guías en línea que pueden ayudarte a hacer que esto funcione si estas instrucciones no te están
ayudando.

### Combinar paquetes de recursos

Si necesitas combinar tus paquetes de recursos, puedes hacerlo manualmente. Pero recomendamos utilizar una herramienta
en línea como [merge.elmakers](https://merge.elmakers.com/) para combinar tus paquetes de recursos.

## Paso 4. Espera que funcione

Si todo se hizo correctamente, ahora deberías poder ver el Modelo Personalizado en tu jefe o NPC. Puedes invocarlos a
través de los comandos:

* Jefe Personalizado: `/em spawncustom nombrearchivo.yml`
*   NPC: `/em spawnnpc nombrearchivo.yml`

A continuación, puedes eliminarlos mediante el comando `/em remove`.

# Crear y adaptar Modelos Personalizados para EliteMobs

EliteMobs puede utilizar cualquier modelo considerado válido por Model Engine, lo que significa que no hay mucho que no
se pueda hacer con él.

Sin embargo, cuando se trata de animaciones, se requiere el uso de nombres específicos para las animaciones para garantizar que los jefes puedan usar las animaciones.

Estos nombres de animación son los que se establecen en Blockbench en la pestaña de animaciones. Puedes cambiarlos de
nombre en cualquier momento, lo que significa que puedes adaptar cualquier modelo existente para que funcione con
EliteMobs.

## Animaciones

Ten en cuenta que esta sección todavía se está ampliando, ya que este sistema es muy reciente. Se añadirá más a medida
que lleguen las solicitudes de funciones.

### idle

`idle` es el nombre de animación correcto para las entidades que no están en combate y no se mueven. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### walk

`walk` es el nombre de animación correcto para las entidades que se están moviendo. EliteMobs no modifica el sistema de
animación inactiva predeterminado que utiliza Model Engine.

### attack

Hay tres tipos de animaciones de ataque:

#### attack

`attack` es el nombre genérico correcto de la animación para cuando un jefe ataca.

#### attack_melee

`attack_melee` es el nombre de animación correcto para los ataques realizados cuando un Jefe Personalizado ataca a una
entidad usando un ataque cuerpo a cuerpo de Minecraft vanilla. Sustituye a `attack`. Ten en cuenta que la animación se
reproduce **después** de que se haya infligido el daño. Desafortunadamente, esta es una limitación por ahora. Por lo
tanto, intenta que la animación sea muy rápida.

#### attack_ranged

`attack_ranged` es el nombre de animación correcto para los ataques realizados cuando un Jefe Personalizado genera una
entidad de proyectil. Sustituye a `attack`. Ten en cuenta que la animación se reproduce **después** de que se haya
disparado el proyectil. Desafortunadamente, esta es una limitación por ahora. Por lo tanto, intenta que la animación sea
muy rápida.

### damaged

`damaged` es el nombre de animación correcto para la animación de daño que reproduce un Jefe Personalizado cuando recibe
daño.

### death

`death` es el nombre de animación correcto para la animación de muerte. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### powers

Nota: este segmento todavía está en desarrollo. Las siguientes son las características tal como están planeadas.

Cada poder en EliteMobs puede tener una animación asignada. La animación siempre comienza cuando se activa el poder, y
actualmente no se proporcionan más activaciones durante el uso del poder. Algunos poderes, como las invulnerabilidades,
no harán nada ya que no tienen activadores y son solo propiedades pasivas de los jefes.

Para asignar una animación a un poder, la animación debe tener el mismo nombre que el archivo de poder de elitemobs.

Como ejemplo, para añadir una animación al poder zombi necronomicon, la animación debería
llamarse `zombie_necronomicon.yml`. Comenzará a reproducirse tan pronto como se active el poder, y terminará cuando
termine la animación si no está configurada para repetirse o cuando el poder termine.

# Importar Modelos Personalizados de mazmorras

## Paso 1. Importación normal

Al importar una carpeta comprimida de empaquetador de mazmorras que contenga Modelos Personalizados, los Modelos
Personalizados se mueven automáticamente a `(tuServidor)/plugins/ModelEngine/blueprints` y Model Engine se recarga
automáticamente para generar el paquete de recursos y los archivos de Model Engine pertinentes.

## Paso 2. Generar el paquete de recursos

Si estás en línea cuando recargas EliteMobs para importar archivos, EliteMobs publicará automáticamente un mensaje en el
chat en el que puedes hacer clic para generar el paquete de recursos de EliteMobs. Alternativamente, puedes ejecutar el
comando `/em generateresourcepack` para generarlo.

La ejecución de este comando copia todos los archivos del paquete de recursos a la carpeta `exports` de EliteMobs de
forma no destructiva. Esto significa que si descomprimes un paquete de recursos en la carpeta de exports utilizando el
nombre del paquete de recursos `elitemobs_resource_pack` para tu carpeta de paquetes de recursos, EliteMobs no eliminará
ninguno de los archivos que haya allí, a menos que se obtenga un archivo con el mismo nombre de ModelEngine (excepto
pack.meta y pack.png). De esta manera, puedes actualizar tu paquete de recursos sin perder los modelos que hayas
introducido previamente en él.

Finalmente, EliteMobs comprime el paquete de recursos en la carpeta `exports`, y este archivo está listo para su
distribución

Una vez hecho esto, EliteMobs también sugiere actualizar el código SHA1 de tu paquete de recursos.

### Paso 2.5. Actualizar el SHA1

El código SHA1 en el archivo `server.properties` se utiliza para que los clientes sepan si su paquete de recursos está
desactualizado, y les hace actualizarlo si es necesario. Este código se puede generar a través de EliteMobs haciendo
clic en la opción del chat que aparece después del paso 2, o ejecutando el comando `/em updateresourcepack`

**Ten en cuenta que esto actualiza tu archivo server.properties con el código SHA1 correcto para el paquete de recursos
comprimido en la carpeta `exports`.** Si lo borras o modificas el archivo comprimido después de ejecutar el comando, no
funcionará.

## Paso 3. Haz que el archivo esté disponible públicamente

Aloja el archivo en la ubicación que elijas. Algunas personas usan Google Drive o Dropbox para esto. Es mejor que alojes
este archivo tú mismo, si tienes la posibilidad de hacerlo. Algunos plugins que hay por ahí también podrían ayudarte a
alojarlo directamente desde tu servidor de Minecraft. Si encuentras un plugin de ese tipo que funcione, házselo saber a
MagmaGuy en Discord y esta publicación se actualizará con esa información.
