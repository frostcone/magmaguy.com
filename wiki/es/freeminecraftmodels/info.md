# ***¡Antes de comenzar!***

FreeMinecraftModels (FMM) se encuentra actualmente en **alfa**! Esto significa que varias funciones aún no están terminadas y se está trabajando activamente en ellas.

Sin embargo, en este momento, el núcleo del plugin es completamente funcional: la conversión de archivos bbmodel, la generación de paquetes de recursos, la generación de entidades en el juego y la administración de sus animaciones funcionan, aunque tal vez no estén 100% pulidos.

¡Considere apoyar el desarrollo en https://www.patreon.com/magmaguy!

El contenido del paquete de recursos exportado tiene la licencia CC0, no se reservan derechos. Usted es libre de usar,
distribuir, modificar para cualquier propósito sin restricciones o la necesidad de atribución.

# Uso de este plugin

## ¿Qué puede hacer FreeMinecraftModels (FMM) para los administradores de servidores de Minecraft?

Puede:

- Importar modelos .bbmodel o fmmodel (formato personalizado de FFM)
- Generar paquetes de recursos con modelos que superan los límites normales de modelos de paquetes de recursos de Minecraft (hasta ~~112x112x112~~
  106x106x106 unidades o 7x7x7 bloques en el juego)
- Mostrar estos modelos en el juego mediante el uso del comando `/fmm spawn static <id>` donde la id es el nombre de archivo del modelo, en minúsculas y sin la extensión de archivo
- Animar estos modelos tal como se configuraron para que se animen en Blockbench
- Gestionar las animaciones de estado predeterminadas sin requerir otros plugins (caminar, inactivo, muerte, ataque, generación)

### ¿Cómo se agrega un modelo existente?

Para importar un modelo, simplemente arrastre el .bbmodel a la carpeta de importaciones y ejecute `/fmm reload`. Esto generará un archivo .fmmodel en la carpeta `models` y agregará el modelo al paquete de recursos en la carpeta `outputs`.

***¡Necesitará usar ese paquete de recursos para ver el modelo correctamente!*** Es un paquete de recursos normal, por lo que todo lo que necesita hacer es ponerlo en su carpeta de paquetes de recursos. Los servidores de Minecraft tienen una forma de alojar paquetes de recursos en servicios de terceros como Google Drive o un servicio especializado como https://resourcepack.host/, ese último sitio web podría ser la forma más fácil de hacerlo.

### ¿Cómo se ve el modelo en el juego?

Hay dos categorías (planificadas) de modelos.

- Los modelos `Static` son para modelos que no se mueven (pero pueden tener animaciones) y sirven más como decoraciones, piense en
  algo como una farola o un árbol de Navidad.
- Los modelos `Dynamic` son para modelos que se comportan como mobs de Minecraft, es decir, se mueven y realizan varias
  comportamientos asociados con los mobs. Piense en algo como modelos de jefes personalizados o agregar tipos de entidades completamente nuevos a
  Minecraft.

#### Visualización de modelos estáticos en el juego

Para ver modelos estáticos en el juego, use el comando `/fmm spawn static <id>` donde la id es el nombre de archivo del modelo, en minúsculas y sin la extensión de archivo.

#### Visualización de modelos dinámicos en el juego

Para ver modelos dinámicos en el juego, use el comando `/fmm spawn dynamic <id>` donde la id es el nombre de archivo del modelo, en
minúsculas y sin la extensión de archivo.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los modeladores?

FMM sigue las reglas estándar del paquete de recursos para la generación de paquetes de recursos. Además, intenta ser lo más compatible posible
con modelos compatibles con ModelEngine para tratar de estandarizar la creación de modelos en todos los plugins.

### Características/restricciones de la generación de modelos

Si alguna vez ha creado modelos para ModelEngine, estará familiarizado con muchas de las restricciones de generación de paquetes de recursos de Minecraft:

#### **Cubos:**

Los cubos son los mismos aquí que en Blockbench, son los cubos que componen el modelo.

- Los cubos pueden alcanzar hasta ~~112x112x112~~ 106x106x106 "píxeles" (unidades de Blockbench) o 7x7x7 bloques en el juego (Minecraft normal
  restricciones omitidas utilizando tamaños de visualización, pronto se omitirán aún más para 1.19.4+ gracias a las entidades de visualización)
- Las rotaciones legales para los cubos son 0, 22.5, -22.5, 45 y -45. Ninguna otra rotación funciona.
- Los cubos solo giran en un eje, lo que significa que una rotación de [22.5, 0, 0] está bien, una rotación de [22.5, 0, 45] no
  funcionará completamente y solo girará en un eje.

#### **Huesos:**

Los huesos son lo que Blockbench llama "grupos". Sirven para agrupar los cubos y deben usarse para agrupar los huesos
juntos para animationsBlueprint.

- Los huesos pueden alcanzar hasta ~~112x112x112~~ 106x106x106 (deberían ser 112, no estoy seguro de por qué es así) "píxeles" (unidades de Blockbench) o
  7x7x7 bloques en el juego. *Tenga en cuenta que el tamaño de los huesos se establece según lo que tienen, por lo que si tiene cubos que están a más de 7 bloques de distancia, probablemente excederá este límite de tamaño. ¡Omitir este límite es tan fácil como poner los bloques en un boneBlueprint diferente no contenido en el primer boneBlueprint!*
- ¡Puede tener cualquier rotación!

Los huesos son significativamente más flexibles que los cubos, ¡pero debe usar la menor cantidad posible de huesos! En FMM, debido a las limitaciones de Minecraft
, cada boneBlueprint es una entidad diferente. A escala, ¡esto afectará el rendimiento con bastante rapidez! Siempre
use la menor cantidad de huesos posible y tenga en cuenta cuántos de ese modelo planea generar; cuantos más
planee tener, ¡menos huesos debería tener!

#### **Huesos virtuales**

Si viene de ModelEngine, probablemente quiera saber si/cómo se implementan los huesos virtuales en FMM. Los huesos virtuales
se han destinado, pero actualmente no se implementan más allá de un trabajo básico muy elemental.

Sin embargo, como mínimo, los siguientes huesos virtuales serán compatibles con FMM en breve:

- Hitboxes/altura de los ojos: un boneBlueprint llamado "hitbox" con un cubeBlueprint que define los límites y tiene el mismo valor x e z (se elegirá el valor más grande si no son iguales) define la hitbox. El nivel de los ojos se establece en el punto de pivote del boneBlueprint de la hitbox.
- Etiqueta de nombre: un boneBlueprint cuyo nombre comienza con "tag\_". Honestamente, preferiría ser específico del modo aquí y usar "tag_name" para usar etiquetas para otras cosas, pero eso se considerará seriamente más tarde.

No se garantiza que se agregue ninguna otra función de boneBlueprint virtual en el futuro inmediato.

## Fusión de paquetes de recursos

Mientras usa FMM, es probable que necesite fusionar paquetes de recursos.

Puede fusionar los paquetes de recursos manualmente, pero le recomendamos que utilice una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar sus paquetes de recursos.

#### **Distribución de archivos más segura, fácil y no editable**

Una cosa que FMM intenta abordar es que los usuarios reutilicen los modelos que han obtenido para editarlos de formas en que el creador del modelo no quería que los editaran, específicamente para cambiar la apariencia o alterar ligeramente un modelo y potencialmente intentar revenderlo como una creación original.

Con ese fin, FMM usa el formato de archivo `.fmmodel` que tiene como objetivo reducir los archivos `.bbmodel` hasta el punto en que puedan
ser utilizados por el plugin pero no se pueden editar en Blockbench.

Como modelador, ahora tiene la opción de si desea lanzar un archivo `.fmmodel` no editable, un archivo `.bbmodel` editable
o incluso hacer precios diferenciados o términos de servicio de distribución para los dos.

Generar un `.fmmodel` es tan simple como colocar su `.bbmodel` en la carpeta `~/plugins/FreeMinecraftModels/imports`
y volver a cargar el plugin con `/fmm reload` o reiniciar el servidor. Su `.fmmodel` estará luego en
la carpeta `~/plugins/FreeMinecraftModels/models`.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los desarrolladores que desean integrarlo en sus plugins?

¡FMM tiene un repositorio de Maven!
Maven:

```xml

<repository>
    <id>ossrh-public</id>
    <url>https://s01.oss.sonatype.org/content/groups/snapshots/</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>1.1.3-SNAPSHOT</version>
<scope>provided</scope>
</dependency>
```

Gradle:

```kotlin
compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: '1.1.2-SNAPSHOT'
```

*Nota: FreeMinecraftModels está destinado a usarse como una API y requerirá la instalación del plugin en el servidor. No lo
sombrees en tu plugin!*

FMM tiene como objetivo ser lo más fácil posible de usar como API.

En este momento, solo hay una clase que necesita conocer si desea usar FMM como API para su plugin, y esa es `StaticEntity`.

Aquí hay un fragmento para el manejo de un modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Crea el modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        //¡Esto genera la entidad!
        staticEntity = StaticEntity.create(id, location);
        //Esto verifica si la entidad se generó correctamente
        if (staticEntity == null) Logger.warningMessage("¡FMM no pudo encontrar un modelo llamado " + id + " !");
    }

    public void remove() {
        //Esto elimina la entidad
        staticEntity.remove();
    }
}
```

Tenga en cuenta que los modelos estáticos están destinados a permanecer en su lugar y actuar como un elemento decorativo en una ubicación fija (
las animaciones no cuentan como "movimiento" aquí). Si bien es posible moverlos, considere si, en cambio, podría querer
usar un modelo dinámico si ese es su propósito.

Y aquí está cómo EliteMobs, mi plugin de jefes personalizados, usa entidades dinámicas:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.mobconstructor.custombosses.CustomBossEntity;
import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import com.magmaguy.freeminecraftmodels.api.ModeledEntityManager;
import com.magmaguy.freeminecraftmodels.customentity.DynamicEntity;
import lombok.Getter;
import org.bukkit.entity.LivingEntity;

public class CustomModelFMM implements CustomModelInterface {
    @Getter
    private DynamicEntity dynamicEntity;

    public CustomModelFMM(LivingEntity livingEntity, String modelName, String nametagName) {
        dynamicEntity = DynamicEntity.create(modelName, livingEntity);
        if (dynamicEntity == null) return;
        dynamicEntity.setName(nametagName);
    }

    public static void reloadModels() {
        ModeledEntityManager.reload();
    }

    public static boolean modelExists(String modelName) {
        return ModeledEntityManager.modelExists(modelName);
    }

    @Override
    public void shoot() {
        if (dynamicEntity.hasAnimation("attack_ranged")) dynamicEntity.playAnimation("attack_ranged", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void melee() {
        if (dynamicEntity.hasAnimation("attack_melee")) dynamicEntity.playAnimation("attack_melee", false);
        else dynamicEntity.playAnimation("attack", false);
    }

    @Override
    public void playAnimationByName(String animationName) {
        dynamicEntity.playAnimation(animationName, false);
    }

    @Override
    public void setName(String nametagName, boolean visible) {
        dynamicEntity.setName(nametagName);
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void setNameVisible(boolean visible) {
        dynamicEntity.setNameVisible(visible);
    }

    @Override
    public void switchPhase() {
        dynamicEntity.stopCurrentAnimations();
    }
}
```

Los modelos dinámicos se construyen sobre una entidad viviente, que se puede proporcionar al usar el método crear como en el
ejemplo anterior, o al ejecutar el método spawn en una entidad dinámica.

Si bien no hay un recurso de API formal en este momento, todos los elementos destinados al uso de la API se encuentran dentro de ModeledEntity (
la clase base para todas las entidades), StaticEntity, DynamicEntity y ModeledEntityManager. El 99% de los desarrolladores deberían encontrar
todos los métodos que necesitan distribuidos en esas tres clases.

# Contribución al proyecto FreeMinecraftModels (FMM) como desarrollador

FMM se distribuye bajo la licencia GPLV3 y las contribuciones de código son bienvenidas. Estas son las directrices básicas de contribución:

- Siga las convenciones de nomenclatura existentes, mantenga el nivel de verbosidad existente y agregue suficiente documentación para que
  su contribución sea fácil de entender
- Mantenga las contribuciones relevantes para el alcance del plugin. Si no sabe si será relevante, no dude en
  preguntar con anticipación.
- Tenga en cuenta el impacto en el rendimiento de su código. Algunas contribuciones pueden ser rechazadas si son demasiado
  no optimizadas o de lo contrario causan un impacto demasiado grande en el rendimiento.

## Esquema general del plugin

Para ahorrarle algo de tiempo, aquí hay un desglose rápido del flujo lógico de FMM:

1) Lee la carpeta `imports`
2) Mueve los archivos de la carpeta `imports` a la carpeta `models`. Si el archivo es un `.bbmodel`, se convierte
   a `.fmmodel` en la carpeta models.
3) Lee los archivos en la carpeta `models`.
4) Interpreta todas las estructuras de modelo, creando `Skeleton`s que contienen grupos de `Bone`s, y estos huesos contienen grupos
   de `Bone`s y `Cube`s secundarios. `Cube`s y `Bone`s generan los datos del paquete de recursos JSON a los que están relacionados cada uno. Esto
   significa que `Cube`s genera el JSON específico de los cubos y `Bone`s genera el esquema y los archivos de boneBlueprint
   individuales. Tenga en cuenta que un boneBlueprint da como resultado un archivo de paquete de recursos. Los modelos se agregan a una lista a medida que se
   generan.
5) Aún en el `Skeleton`, interpreta todas las `Animations` en el modelo, si las hay
6) Ahora se han inicializado todos los datos, el paquete de recursos se generó en la carpeta `outputs` y el plugin está listo para
   ser usado.

## Trucos utilizados en este plugin:

Los trucos utilizados aquí están bastante bien establecidos y estandarizados, pero se enumerarán de todos modos porque pueden ser contradictorios.

Tenga en cuenta que todos estos trucos son completamente invisibles para los usuarios y los creadores de modelos; las restricciones y las soluciones alternativas solo se enumeran para ayudarlo a comprender cómo FMM omite varias limitaciones de Minecraft.

- Todos los modelos se escalan 4 veces y luego el tamaño y el punto de pivote se reajustan en el código para extender el tamaño máximo teórico del modelo.
- Debido a que los modelos de paquetes de recursos solo pueden tener modelos que vayan de -16 a +32 en tamaño, los modelos se desplazan en segundo plano. Esto es completamente invisible para los jugadores.
- Se utiliza la armadura de caballo de cuero para crear modelos con un tono que puede ser influenciado a través del código (es decir, para indicaciones de daño). ¡La armadura de caballo debe establecerse en blanco para mostrar los colores correctos!
- Blockbench utiliza un sistema específico de ID para las texturas, pero en realidad lee las texturas secuencialmente desde la configuración. Las ID se asignan aquí según su posición en la lista de texturas, siguiendo cómo lo hace Blockbench.
- Cada boneBlueprint es una entidad de soporte de armadura diferente debido a las limitaciones de Minecraft.
- La armadura de caballo de cuero está en la ranura de la cabeza del soporte de armadura.
- Los soportes de armadura se utilizan para los elementos estáticos predeterminados. //por hacer: pronto tendré que implementar la nueva pantalla alternativa
  sistema de MC 1.19.4+, es mucho más eficiente.
- Para evitar colisiones con otros plugins que modifican la armadura de caballo de cuero, FMM usa valores de datos de modelos personalizados que comienzan en
  50 000.

# Contribución al proyecto FreeMinecraftModels (FMM) en general

¡FMM en realidad está financiado colectivamente por la gente encantadora de [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas las contribuciones ayudan más de lo que imaginas ;)

# Funciones planificadas actualmente:
- Generación de RSP de cliente Bedrock.
- Gestión de RSP independiente de las propiedades del servidor con integración Geyser.
- Entidades personalizadas (?).
- tag_projectile como metabone de la que se pueden disparar proyectiles (puede tener más de uno por modelo).

# Limitaciones extrañas actuales que deben corregirse:
- Si el punto de pivote (origen) de un boneBlueprint se establece en más de 67, el modelo comienza a flotar.
