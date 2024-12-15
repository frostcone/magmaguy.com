[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

A partir de EliteMobs 7.3.12, se han agregado modelos personalizados a EliteMobs a través de [Model Engine](https://mythiccraft.io/index.php?resources/model-engine%E2%80%94ultimate-entity-model-manager-1-16-5-1-20-4.389/) y [FreeMineCraftModels](https://www.spigotmc.org/resources/free-minecraft-models.111660/).

# Prólogo

Desde una perspectiva de EliteMobs, el sistema de modelo personalizado es muy simple, ya que lo único que tienen que hacer los administradores es agregar una línea a un archivo de configuración de NPC o jefe personalizado diciéndole qué modelo personalizado usar. Sin embargo, es necesario seguir los pasos correctos con Model Engine y Minecraft para que este sistema funcione completamente, y estos no son tan fáciles de entender.

Esta guía entrará en detalles en lo que respecta a la interfaz con Model Engine y Minecraft. No le dirá cómo usar Blockbench para crear jefes personalizados, ni entrará en detalles sobre cómo funciona Model Engine. Ya hay muchas guías sobre cómo hacer eso en otros lugares, y si desea obtener más información sobre esos sistemas, es mejor que consulte directamente su documentación.

## Modelos FreeMineCraft

Si desea aprender cómo puede usar FMM para que sus modelos funcionen, puede consultar [esta]($language$/freeminecraftmodels/info.md) página wiki para obtener más información.

# Requisitos mínimos

EliteMobs 7.3.12 o posterior, Model Engine R2.2.0\* o posterior, Blockbench\*\*, usar paquetes de recursos de Minecraft.

\* Este plugin puede tener más dependencias. Consulte la documentación en su extremo.  
\*\* Necesario para crear y editar modelos personalizados. No es necesario si solo busca instalar contenido sin modificarlo.

# Establecer manualmente un modelo personalizado

Nota: esta guía asume que ya tiene un modelo personalizado válido. Estos vienen en formatos de archivo Blockbench (`.bbmodel`).

EliteMobs puede usar modelos personalizados para NPC y jefes personalizados. El proceso para hacer esto es el mismo para ambos, y es el siguiente:

## Paso 1. Configuración de EliteMobs

Vaya al archivo de configuración del jefe personalizado o NPC que desea modificar y agregue la siguiente línea:

```yaml
customModel: nombremodelo
```

Reemplace `nombremodelo` con el nombre de su modelo. El nombre es el nombre del archivo de modelo personalizado que está utilizando. Como ejemplo, el archivo de modelo personalizado del jefe de prueba es `showcase_boss.bbmodel`. Como tal, la opción de configuración debería ser

```yaml
customModel: showcase_boss
```

¡Y eso es todo para EliteMobs! Ahora se vuelve un poco más complicado.

## Paso 2. Generación de los datos de Model Engine

[_Nota: En caso de duda o problemas, consulte la wiki de Model Engine aquí._](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#importing)

1.  Coloque su archivo Blockbench de modelo personalizado (`.bbmodel`) en el directorio `(suServidor)/plugins/ModelEngine/blueprints`.
2.  Ejecute el comando `/meg reload`. Si todo funcionó correctamente, debería recibir un mensaje que diga `[Model Engine] Se cargaron X modelos`, donde `x` es la cantidad de modelos que ha registrado.

## Paso 3. Generación del paquete de recursos

[**Nota: ahora hay una forma alternativa y más sencilla de hacer este paso en este enlace.**]($language$/elitemobs/custom_models.md&section=step-2.-generating-the-resource-pack) Sin embargo, es un poco menos flexible que lo que se enumera aquí.

Esta es posiblemente la parte más complicada si busca que su servidor gestione las descargas. **¡Intente comprobar si el sistema funciona cuando tiene el paquete de recursos en su cliente antes de buscar distribuirlo automáticamente!**

1.  Vaya al directorio `(suServidor)/plugins/ModelEngine/resource pack` y cree un paquete de recursos utilizando esos datos o agregue la carpeta `assets` allí a la carpeta `assets` de su paquete de recursos.
    1.  Si está creando un nuevo paquete de recursos, puede colocar los archivos en `resource pack` en un archivo comprimido y ese será un paquete de recursos válido que puede distribuir. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
    2.  Si ya tiene un paquete de recursos, asegúrese de no sobrescribir accidentalmente los modelos existentes. [Más información](https://github.com/Ticxo/Model-Engine-Wiki/wiki/Importing-and-Exporting#preexisting-resource-pack).
2.  Distribuya su paquete de recursos a sus jugadores. **Solo los jugadores que tengan el paquete de recursos podrán ver los modelos personalizados** y se verá muy raro y roto para todos los demás. Si tiene la intención de hacer un uso intensivo de estos, es posible que desee forzar el uso del paquete de recursos.
    1.  (Opcional) Para permitir que los jugadores descarguen un paquete de recursos al iniciar sesión, deberá alojar el archivo en algún lugar en línea y cambiar el campo `resource-pack=` de server.properties para que apunte a esa dirección.**\***
    2.  (Opcional) Si está modificando los paquetes de recursos, querrá usar la opción `resource-pack-sha1=`, para que el servidor pueda verificar si el paquete de recursos del jugador necesita ser actualizado. Para generar este valor, cargue su paquete de recursos en [http://onlinemd5.com/](http://onlinemd5.com/) y asegúrese de elegir la opción SHA1. Tendrá que hacer esto cada vez que actualice su paquete de recursos, o sus usuarios no recibirán la actualización.**\***
    3.  (Opcional) Para obligar a los jugadores a usar paquetes de recursos, use la opción `require-resource-pack=true` en server.properties.**\***

**Si modificó server.properties, ¡deberá reiniciar!**

**\*** Nota: Hay muchas guías en línea que pueden ayudarle a que esto funcione si estas instrucciones no le están ayudando.

### Fusionar paquetes de recursos

Si necesita fusionar sus paquetes de recursos, puede hacerlo manualmente. Pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar sus paquetes de recursos.

## Paso 4. Espere que funcione

Suponiendo que todo se haya hecho correctamente, ahora debería poder ver el modelo personalizado en su jefe o NPC. Puede generarlos a través de los comandos:

*   Jefe personalizado: `/em spawncustom nombrearchivo.yml`
*   NPC: `/em spawnnpc nombrearchivo.yml`

Luego puede eliminarlos a través del comando `/em remove`.

# Creación y adaptación de modelos personalizados para EliteMobs

EliteMobs puede usar cualquier modelo que Model Engine considere válido, lo que significa que no hay mucho que no se pueda hacer con él.

Sin embargo, cuando se trata de animaciones, se requiere el uso de nombres específicos para las animaciones para garantizar que los jefes puedan usar las animaciones.

Estos nombres de animación son los que se establecen en Blockbench en la pestaña de animaciones. Puede cambiarlos de nombre en cualquier momento, lo que significa que puede adaptar cualquier modelo existente para que funcione con EliteMobs.

## Animaciones

Tenga en cuenta que esta sección todavía se está expandiendo, ya que este sistema es aún muy reciente. Se agregará más a medida que lleguen las solicitudes de funciones.

### idle

`idle` es el nombre de animación correcto para las entidades que no están en combate y no se mueven. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### walk

`walk` es el nombre de animación correcto para las entidades que se mueven. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### attack

Hay tres tipos de animaciones de ataque:

#### attack

`attack` es el nombre genérico de animación correcto para cuando ataca un jefe.

#### attack_melee

`attack_melee` es el nombre de animación correcto para los ataques realizados cuando un jefe personalizado ataca a una entidad utilizando un ataque cuerpo a cuerpo de vainilla de Minecraft. Anula `attack`. Tenga en cuenta que la animación se reproduce **después** de que se inflige el daño. Desafortunadamente, esta es una limitación por ahora. Como tal, intente que la animación sea muy rápida.

#### attack_ranged

`attack_ranged` es el nombre de animación correcto para los ataques realizados cuando un jefe personalizado genera una entidad de proyectil. Anula `attack`. Tenga en cuenta que la animación se reproduce **después** de que se dispara el proyectil. Desafortunadamente, esta es una limitación por ahora. Como tal, intente que la animación sea muy rápida.

### damaged

`damaged` es el nombre de animación correcto para la animación de daño que reproduce un jefe personalizado cuando recibe daño.

### death

`death` es el nombre de animación correcto para la animación de muerte. EliteMobs no modifica el sistema de animación inactiva predeterminado que utiliza Model Engine.

### powers

Nota: este segmento todavía está en desarrollo. Las siguientes son las características tal como están planificadas.

Cada poder en EliteMobs puede tener una animación asignada. La animación siempre comienza cuando se activa el poder y actualmente no se proporcionan más activadores durante el uso del poder. Algunos poderes, como las invulnerabilidades, no harán nada ya que no tienen activadores y son solo propiedades pasivas de los jefes.

Para asignar una animación a un poder, la animación debe tener el mismo nombre que el archivo de poder de elitemobs.

Como ejemplo, para agregar una animación al poder del nigromicon de zombis, la animación debe llamarse `zombie_necronomicon.yml`. Comenzará a reproducirse tan pronto como se active el poder y finalizará cuando finalice la animación si no está configurado para repetirse o cuando finalice el poder.

# Importación de modelos personalizados de mazmorras

## Paso 1. Importación normal

Al importar una carpeta comprimida de empaquetador de mazmorras que contenga modelos personalizados, los modelos personalizados se mueven automáticamente a `(suServidor)/plugins/ModelEngine/blueprints` y Model Engine se recarga automáticamente para generar el paquete de recursos relevante y los archivos de Model Engine.

## Paso 2. Generación del paquete de recursos

Si está en línea cuando vuelve a cargar EliteMobs para importar archivos, EliteMobs publicará automáticamente un mensaje en el chat en el que puede hacer clic para generar el paquete de recursos de EliteMobs. Alternativamente, puede ejecutar el comando `/em generateresourcepack` para generarlo.

Al ejecutar este comando, se copian todos los archivos del paquete de recursos a la carpeta `exports` de EliteMobs de forma no destructiva. Esto significa que si descomprime un paquete de recursos en la carpeta de exportaciones utilizando el nombre de paquete de recursos `elitemobs_resource_pack` para la carpeta de su paquete de recursos, EliteMobs no eliminará ninguno de los archivos allí a menos que se obtenga un archivo con el mismo nombre de ModelEngine (excepto por pack.meta y pack.png). De esta manera, puede actualizar su paquete de recursos sin perder los modelos que haya puesto previamente en él.

Finalmente, EliteMobs comprime el paquete de recursos en la carpeta `exports` y este archivo está listo para su distribución

Una vez hecho esto, EliteMobs también sugiere actualizar el código SHA1 para su paquete de recursos.

### Paso 2.5. Actualización de SHA1

El código SHA1 en el archivo `server.properties` se utiliza para que los clientes sepan si su paquete de recursos está desactualizado y hace que lo actualicen si es necesario. Este código se puede generar a través de EliteMobs haciendo clic en la opción del chat que aparece después del paso 2, o ejecutando el comando `/em updateresourcepack`

**Tenga en cuenta que esto actualiza su archivo server.properties con el código SHA1 correcto para el paquete de recursos comprimido en la carpeta `exports`.** Si elimina o modifica el archivo comprimido después de ejecutar el comando, no funcionará.

## Paso 3. Ponga el archivo a disposición del público

Aloje el archivo en una ubicación de su elección. Algunas personas usan Google Drive o Dropbox para esto. Es mejor alojar este archivo usted mismo, si tiene la capacidad de hacerlo. Algunos plugins también podrían ayudarle a alojarlo directamente desde su servidor de Minecraft. Si encuentra un plugin como ese que funcione, infórmele a MagmaGuy en Discord y esta publicación se actualizará con esa información.
