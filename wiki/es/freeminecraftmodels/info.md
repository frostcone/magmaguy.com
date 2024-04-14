# ***¡Antes de comenzar!***

FreeMinecraftModels (FMM) se encuentra actualmente en **alfa**. Esto significa que varias funciones aún no están terminadas y se están trabajando activamente.

Sin embargo, en este momento, el núcleo del complemento es totalmente funcional: convertir archivos bbmodel, generar paquetes de recursos, generar entidades en el juego y gestionar sus animaciones está funcionando, aunque quizás no esté pulido al 100%.

Considere apoyar el desarrollo en https://www.patreon.com/magmaguy !

El contenido del paquete de recursos exportado se encuentra bajo la licencia CC0, sin derechos reservados. Está libre para usarlo, distribuirlo, modificarlo para cualquier propósito sin restricciones ni la necesidad de atribución.

# Usando este plugin

## ¿Qué puede hacer FreeMinecraftModels (FMM) para los administradores de servidores de Minecraft?

Puede:

- Importar modelos .bbmodel o fmmodel (formato personalizado de FFM)
- Generar paquetes de recursos con modelos que exceden los límites normales del modelo del paquete de recursos de Minecraft (hasta ~~112x112x112~~ 106x106x106 unidades o 7x7x7 bloques en el juego)
- Mostrar estos modelos en el juego a través del comando `/fmm spawn static <id>` donde la id corresponde al nombre del archivo del modelo, en minúsculas y sin la extensión del archivo
- Animar estos modelos como estaban configurados para ser animados en Blockbench
- Manejar animaciones de estado predeterminado sin requerir otros plugins (caminar, inactivo, muerte, ataque, generar)

### ¿Cómo añades un modelo de archivo existente?

Para importar un modelo, simplemente arrastra el .bbmodel al archivo imports y utiliza `/fmm reload`. Esto generará un archivo .fmmodel en el archivo `modelos` y agregará el modelo al paquete de recursos en el archivo `outputs`.

***¡Necesitarás usar ese paquete de recursos para ver correctamente el modelo!*** Es un paquete de recursos normal, por lo que todo lo que necesitas hacer es ponerlo en tu carpeta de paquetes de recursos. Los servidores de Minecraft tienen una forma de alojar paquetes de recursos en servicios de terceros, como Google Drive, o en un servicio especializado como https://resourcepack.host/, ese último sitio web podría ser el método más fácil de hacerlo.

### ¿Cómo visualizas el modelo en el juego?

Hay dos categorías (planificadas) de modelos.

- Los modelos `Static` son para modelos que no se mueven (pero pueden tener animaciones), y sirven más como decoraciones, piensa en algo como una farola o un árbol de Navidad.
- Los modelos `Dynamic` son para modelos que se comportan como criaturas de Minecraft, es decir, se mueven y realizan varios comportamientos asociados a las criaturas. Piensa en algo como modelos de jefes personalizados o agregando completamente nuevos tipos de entidades a Minecraft.

#### Visualización de modelos estáticos en el juego

Para ver modelos estáticos en el juego, use el comando `/fmm spawn static <id>` donde la id corresponde al nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

#### Visualización de modelos dinámicos en el juego

Para ver los modelos dinámicos en el juego, use el comando `/fmm spawn dynamic <id>` donde la id corresponde al nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

## ¿Qué puede hacer FreeMinecraftModels (FMM) para los modelistas?

FMM sigue las reglas estándar del paquete de recursos para la generación del paquete de recursos. Además, intenta ser lo más compatible posible con los modelos compatibles con ModelEngine en un intento por estandarizar la creación de modelos entre los complementos.

### Características / restricciones de generación de modelos

Si alguna vez has creado modelos para ModelEngine, estarás familiarizado con muchas de las restricciones de generación del paquete de recursos de Minecraft:

#### **Cubos:**

Los cubos son los mismos aquí que en Blockbench, son los cubos que componen el modelo.

- Los cubos pueden subir hasta ~~112x112x112~~ 106x106x106 "píxeles" (unidades Blockbench) o 7x7x7 bloques en el juego (se han eludido las restricciones normales de Minecraft usando tamaños de visualización, pronto se eludirán aún más para 1.19.4+ gracias a las entidades de visualización)
- Las rotaciones legales para cubos son 0, 22.5, -22.5, 45 y -45. No funciona ninguna otra rotación.
- Los cubos solo giran en un eje, lo que significa que una rotación de [22.5, 0, 0] está bien, una rotación de [22.5, 0, 45] no funcionará completamente y solo girará en un eje.

#### **Huesos:**

Los huesos son lo que Blockbench llama "grupos". Sirven para agrupar los cubos, y deben usarse para agrupar huesos juntos para las animacionesBlueprint.

- Los huesos pueden llegar hasta ~~112x112x112~~ 106x106x106 (debería ser 112, no sé por qué es) "píxeles" (unidades Blockbench) o 7x7x7 bloques en el juego. *¡Por favor nota que el tamaño de los huesos está determinado por lo que tienen, así que si tienes cubos que están más separados de 7 bloques, probablemente excederás este límite de tamaño! Eludir este límite es tan fácil como poner los bloques en una diferente boneBlueprint no contenida en la primera boneBlueprint!*
- ¡Puede tener cualquier rotación!

Los huesos son significativamente más flexibles que los cubos, pero ¡debes usar la menor cantidad de huesos posible! En FMM, debido a las limitaciones de Minecraft, cada boneBlueprint es una entidad diferente. A escala, ¡esto afectará el rendimiento rápidamente! Siempre utiliza la menor cantidad de huesos que puedas, y ten en cuenta cuántos de esos modelos planeas generar: ¡cuantos más planees tener, menos huesos deberías tener!

#### **Huesos Virtuales**

Si vienes de ModelEngine, probablemente querrás saber si/cómo se implementan los huesos virtuales en FMM. Los huesos virtuales han sido reservados, pero actualmente no se implementan más allá de una base muy básica.

Sin embargo, al menos los siguientes huesos virtuales pronto serán compatibles con FMM:

- Hitboxes / altura de los ojos: un boneBlueprint llamado "hitbox" con un cubeBlueprint que define los límites, y tiene el mismo valor x y z (se elegirá el valor más grande si no son iguales) define el hitbox. El nivel de los ojos se establece en el punto de pivote del boneBlueprint del hitbox.
- Etiqueta de nombre: un boneBlueprint cuyo nombre comienza con "tag_". Honestamente, preferiría ser más específico aquí e ir con "tag_name" para usar las etiquetas para otras cosas, pero eso se considerará seriamente más tarde.

No se garantiza que ninguna otra característica de boneBlueprint virtual se agregará en el futuro inmediato.

## Combinando paquetes de recursos

Mientras usas FMM probablemente necesitarás fusionar paquetes de recursos.

Puedes fusionar paquetes de recursos manualmente, pero recomendamos un uso online de herramientas como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

#### **Distribución de archivos más segura, fácil e ineditable**

Una cosa que FMM intenta abordar es la repurposición de modelos que los usuarios han obtenido para editarlos de formas que el creador del modelo no quería que editaran, específicamente para volver a pintar o alterar de alguna otra forma un modelo y potencialmente intentar revenderlo como una creación original.

Con ese fin, FMM utiliza el formato de archivo `.fmmodel` que pretende despojar a los archivos `.bbmodel` hasta el punto donde pueden ser utilizados por el plugin pero no pueden ser editados en Blockbench.

Como modelador, ahora tienes la elección de si quieres lanzar un archivo `.fmmodel` ineditable, un archivo `.bbmodel` editable, o incluso hacer una diferenciación de precios o términos de servicio de distribución para los dos.

Generar un `.fmmodel` es tan sencillo como poner tu `.bbmodel` en la carpeta `~/plugins/FreeMinecraftModels/imports` y recargar el complemento con `/fmm reload` o reiniciar el servidor. Tu `.fmmodel` estará entonces en la carpeta `~/plugins/FreeMinecraftModels/models` .

## ¿Qué puede hacer FreeMinecraftModels (FMM) para los desarrolladores que quieren integrarlo en sus complementos?

¡FMM tiene un repo maven!
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

*Nota: FreeMinecraftModels está destinado a usarse como una API, y requerirá la instalación del complemento en el servidor. ¡No lo sombrees en tu complemento!*

FMM pretende ser lo más fácil posible de usar como una API.

Ahora mismo, solo hay una clase que necesitas conocer si deseas usar FMM como una API para tu complemento, y esa es `StaticEntity`.

Aquí hay un fragmento para manejar un modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    // Crear el modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        // ¡Esto genera la entidad!
        staticEntity = StaticEntity.create(id, location);
        // Esto verifica si la entidad se generó correctamente
        if (staticEntity == null) Logger.warningMessage("¡FMM no encontró un modelo llamado " + id + " !");
    }

    public void remove() {
        // Esto elimina la entidad
        staticEntity.remove();
    }
}
```

Tenga en cuenta que los modelos estáticos están diseñados para permanecer en su lugar y actuar como un elemento decorativo en una ubicación fija (las animaciones no cuentan como 'movimiento' aquí). Aunque es posible moverlos, considere si en su lugar podría querer usar un modelo dinámico si ese es su propósito.

Y aquí está cómo EliteMobs, mi complemento de jefes personalizados, utiliza entidades dinámicas:

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

Los modelos dinámicos se basan en una entidad viva, que puede proporcionarse cuando se utiliza el método crear, como en el ejemplo de arriba, o cuando se ejecuta el método de generación en una entidad dinámica.

Aunque no hay un recurso formal de API en este momento, todos los elementos destinados para su uso en la API están contenidos dentro de ModeledEntity (la clase base para todas las entidades), StaticEntity, DynamicEntity y ModeledEntityManager. El 99% de los desarrolladores deberían encontrar todos los métodos que necesitan repartidos entre esas tres clases.

# Contribuyendo al proyecto FreeMinecraftModels (FMM) como desarrollador

FMM se distribuye bajo la licencia GPLV3 y se aceptan contribuciones de código. Aquí están las pautas básicas de contribución:

- Sigue las convenciones de nomenclatura existentes, mantén el nivel actual de verbosidad y agrega suficiente documentación para que tu contribución sea fácil de entender.
- Mantén las contribuciones relevantes para el alcance del complemento. Si no sabes si será relevante, no dudes en preguntar con antelación.
- Ten en cuenta el impacto de rendimiento de tu código. Algunas contribuciones pueden ser rechazadas si son demasiado optimizadas o de lo contrario causan un impacto de rendimiento demasiado grande.

## Esquema general del plugin

Para ahorrarte tiempo, aquí hay un rápido desglose del flujo de lógica de FMM:

1) Leer la carpeta `imports`
2) Mover archivos de la carpeta `imports` a la carpeta `models`. Si el archivo es un `.bbmodel`, se convierte a `.fmmodel` en la carpeta de modelos.
3) Leer los archivos en la carpeta `models`.
4) Interpretar todas las estructuras de modelo, creando `Skeleton`s que contienen grupos de `Bone`s, y estos huesos contienen grupos de `Bone`s y `Cube`s hijos. Los `Cube`s y los `Bone`s generan los datos de JSON del paquete de recursos con los que cada uno está relacionado. Esto significa que los `Cube`s generan el JSON específico para los cubos y los `Bone`s generan la descripción y los archivos individuales de boneBlueprint. Ten en cuenta que un boneBlueprint da como resultado un archivo de paquete de recursos. Los modelos se agregan a una lista a medida que se generan.
5) Aún en el `Skeleton`, interpreta todas las `Animations` en el modelo, si es que hay alguna.
6) Todos los datos ahora se han inicializado, el paquete de recursos se generó en la carpeta `outputs` y el complemento está listo para usarse.

## Trucos utilizados en este complemento:

Los trucos utilizados aquí son bastante establecidos y estandarizados, pero se enumerarán de todas formas porque pueden ser contraintuitivos.

Tenga en cuenta que estos trucos son completamente invisibles para los usuarios y los creadores de modelos; se enumeran las restricciones y soluciones alternativas solo para ayudarte a entender cómo FMM supera varias limitaciones de Minecraft.

- Todos los modelos se escalan 4x y luego el tamaño y el punto de pivote se reajustan en el código para extender el tamaño máximo teórico del modelo.
- Debido a que los modelos de paquetes de recursos solo pueden tener modelos que van desde -16 a +32 en tamaño, los modelos se desplazan en segundo plano. Esto es completamente invisible para los jugadores.
- Se utiliza la armadura de caballo de cuero para crear modelos con un matiz que puede ser influenciado a través del código (es decir, para indicaciones de daño). ¡La armadura del caballo debe estar configurada en blanco para mostrar los colores correctos!
- Blockbench utiliza un sistema específico de ID para las texturas, pero en realidad lee las texturas secuencialmente desde la configuración. Las ID se asignan aquí en función de su posición en la lista de texturas, siguiendo cómo lo hace Blockbench.
- Cada boneBlueprint es una entidad de soporte de armadura diferente debido a las limitaciones de Minecraft.
- La armadura de caballo de cuero está en la ranura de la cabeza del soporte de armadura
- Se utilizan soportes de armadura para los elementos estáticos predeterminados. //todo: pronto tendré que implementar el nuevo sistema de visualización alternativo
  desde MC 1.19.4+, es mucho más eficiente.
- Para evitar colisiones con otros complementos que modifican la armadura de caballo de cuero, FMM utiliza valores de datos de modelo personalizados que comienzan en
  50.000.

# Contribuyendo al proyecto general de FreeMinecraftModels (FMM)

¡FMM es en realidad financiado por las encantadoras personas de [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas las contribuciones ayudan más de lo que te imaginas ;)

# Características planeadas actualmente:
- Generación de RSP del cliente de Bedrock.
- Gestión independiente de las propiedades del servidor RSP con integración de geyser.
- Entidades personalizadas (?).
- tag_projectile como meta huesos desde los que se pueden disparar proyectiles (puede tener más de uno por modelo).

# Limitaciones raras actuales que necesitan ser arregladas:
- Si el punto de pivote (origen) de un boneBlueprint se establece para estar por encima de 67 aproximadamente, el modelo comienza a flotar.