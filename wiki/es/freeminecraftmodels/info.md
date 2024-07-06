# ***¡Antes de empezar!***

¡FreeMinecraftModels (FMM) se encuentra actualmente en **alfa**! Esto significa que varias funciones aún no están terminadas y se está trabajando activamente en ellas.

Sin embargo, en este momento, el núcleo del complemento es completamente funcional: convertir archivos bbmodel, generar paquetes de recursos, generar entidades en el juego y administrar sus animaciones está funcionando, aunque quizás no al 100%.

¡Considera apoyar el desarrollo en https://www.patreon.com/magmaguy!

El contenido del paquete de recursos exportado está licenciado bajo la licencia CC0, sin derechos reservados. Eres libre de usarlo, distribuirlo y modificarlo para cualquier propósito sin restricciones ni necesidad de atribución.

# Usando este complemento

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los administradores de servidores de Minecraft?

Puede:

- Importar modelos .bbmodel o fmmodel (formato personalizado de FFM)
- Generar paquetes de recursos con modelos que superan los límites normales de los modelos de paquetes de recursos de Minecraft (hasta ~~112x112x112~~ 106x106x106 unidades o 7x7x7 bloques en el juego)
- Mostrar estos modelos en el juego mediante el uso del comando `/fmm spawn static <id>` donde la id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.
- Animar estos modelos como se configuraron para animar en Blockbench
- Manejar animaciones de estado predeterminadas sin necesidad de otros complementos (caminar, inactivo, morir, atacar, generar)

### ¿Cómo se agrega un modelo existente?

Para importar un modelo, simplemente arrastra el .bbmodel a la carpeta de importaciones y haz `/fmm reload`. Esto generará un archivo .fmmodel en la carpeta `models` y agregará el modelo al paquete de recursos en la carpeta `outputs`.

***¡Necesitarás usar ese paquete de recursos para ver el modelo correctamente!*** Es un paquete de recursos normal, por lo que todo lo que necesitas hacer es colocarlo en tu carpeta de paquetes de recursos. Los servidores de Minecraft tienen una forma de alojar paquetes de recursos en servicios de terceros como Google Drive o un servicio especializado como https://resourcepack.host/, ese último sitio web podría ser la forma más sencilla de hacerlo.

### ¿Cómo se ve el modelo en el juego?

Hay dos (planificadas) categorías de modelos.

- Los modelos `estáticos` son para modelos que no se mueven (pero pueden tener animaciones) y sirven más como decoración, piensa en algo como una farola o un árbol de Navidad.
- Los modelos `dinámicos` son para modelos que se comportan como turbas de Minecraft, es decir, se mueven y realizan varios comportamientos asociados a las turbas. Piensa en algo como modelos de jefes personalizados o agregar tipos de entidades completamente nuevos a Minecraft.

#### Visualización de modelos estáticos en el juego

Para ver modelos estáticos en el juego, usa el comando `/fmm spawn static <id>` donde la id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

#### Visualización de modelos dinámicos en el juego

Para ver modelos dinámicos en el juego, usa el comando `/fmm spawn dynamic <id>` donde la id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los modeladores?

FMM sigue las reglas estándar del paquete de recursos para la generación de paquetes de recursos. Además, intenta ser lo más compatible posible con los modelos compatibles con ModelEngine para intentar estandarizar la creación de modelos entre complementos.

### Funciones/restricciones de generación de modelos

Si alguna vez has creado modelos para ModelEngine, estarás familiarizado con muchas de las restricciones de generación de paquetes de recursos de Minecraft:

#### **Cubos:**

Los cubos son los mismos aquí que en Blockbench, son los cubos que componen el modelo.

- Los cubos pueden tener hasta ~~112x112x112~~ 106x106x106 "píxeles" (unidades de Blockbench) o 7x7x7 bloques en el juego (las restricciones normales de Minecraft se omiten usando tamaños de visualización, pronto se omitirán aún más para 1.19.4+ gracias a las entidades de visualización)
- Las rotaciones legales para cubos son 0, 22.5, -22.5, 45 y -45. Ninguna otra rotación funciona.
- Los cubos solo giran en un eje, lo que significa que una rotación de [22.5, 0, 0] está bien, una rotación de [22.5, 0, 45] no funcionará completamente y solo girará en un eje.

#### **Huesos:**

Los huesos son lo que Blockbench llama "grupos". Sirven para agrupar los cubos y deben usarse para agrupar huesos para las animaciones.

- Los huesos pueden tener hasta ~~112x112x112~~ 106x106x106 (deberían ser 112, no estoy seguro de por qué es esto) "píxeles" (unidades de Blockbench) o 7x7x7 bloques en el juego. *¡Ten en cuenta que el tamaño de los huesos está determinado por lo que tienen, por lo que si tienes cubos que están separados por más de 7 bloques, probablemente excederás este límite de tamaño. ¡Superar este límite es tan fácil como colocar los bloques en un hueso diferente que no esté contenido en el primer hueso!*
- ¡Puede tener cualquier rotación!

Los huesos son significativamente más flexibles que los cubos, ¡pero debes usar la menor cantidad de huesos posible! En FMM, debido a las limitaciones de Minecraft, cada hueso es una entidad diferente. ¡A escala, esto afectará el rendimiento con bastante rapidez! ¡Siempre usa la menor cantidad de huesos posible y ten en cuenta cuántos de ese modelo planeas generar: cuantos más planeas tener, menos huesos deberías tener!

#### **Huesos virtuales**

Si vienes de ModelEngine, probablemente quieras saber si/cómo se implementan los huesos virtuales en FMM. Los huesos virtuales se han marcado, pero actualmente no se implementan más allá del trabajo preliminar muy básico.

Sin embargo, como mínimo, los siguientes huesos virtuales serán compatibles con FMM pronto:

- Hitboxes/altura de los ojos: un hueso llamado "hitbox" con un cubo que define los límites, y tiene el mismo valor x y z (se elegirá el valor más grande si no son iguales) define el hitbox. El nivel de los ojos se establece en el punto de pivote del hueso del hitbox.
- Etiqueta de nombre: un hueso cuyo nombre comienza con "tag_". Honestamente, preferiría ser más específico aquí e ir con "tag_name" para usar etiquetas para otras cosas, pero eso se considerará seriamente más adelante.

No se garantiza que se agregue ninguna otra función de hueso virtual en el futuro inmediato.

## Fusionar paquetes de recursos

Mientras usas FMM, probablemente necesitarás fusionar paquetes de recursos.

Puedes fusionar paquetes de recursos manualmente, pero recomendamos usar una herramienta en línea como [merge.elmakers](https://merge.elmakers.com/) para fusionar tus paquetes de recursos.

#### **Distribución de archivos más segura, fácil y no editable**

Una cosa que FMM intenta abordar es que los usuarios reutilizan los modelos que han obtenido para editarlos de maneras que el creador del modelo no quería que editaran, específicamente para cambiar la apariencia o alterar ligeramente un modelo y potencialmente intentar revenderlo como una creación original.

Con ese fin, FMM utiliza el formato de archivo `.fmmodel` que tiene como objetivo reducir los archivos `.bbmodel` hasta el punto en que puedan ser utilizados por el complemento, pero no se puedan editar en Blockbench.

Como modelador, ahora tienes la opción de publicar un archivo `.fmmodel` no editable, un archivo `.bbmodel` editable o incluso hacer precios diferenciales o términos de servicio de distribución para los dos.

Generar un `.fmmodel` es tan simple como poner tu `.bbmodel` en la carpeta `~/plugins/FreeMinecraftModels/imports` y volver a cargar el complemento con `/fmm reload` o reiniciar el servidor. Tu `.fmmodel` estará entonces en la carpeta `~/plugins/FreeMinecraftModels/models`.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los desarrolladores que quieren integrarlo en sus complementos?

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

*¡Ten en cuenta que FreeMinecraftModels está diseñado para usarse como una API y requerirá la instalación del complemento en el servidor! ¡No lo incluyas en tu complemento!*

FMM tiene como objetivo ser lo más fácil posible de usar como API.

En este momento, solo hay una clase que necesitas conocer si deseas usar FMM como API para tu complemento, y esa es `StaticEntity`.

Aquí hay un fragmento de código para manejar un modelo estático:

```java
public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Crea el modelo
    public FreeMinecraftModelsModel(String id, Location location) {
        //¡Esto genera la entidad!
        staticEntity = StaticEntity.create(id, location);
        //Esto comprueba si la entidad se generó correctamente
        if (staticEntity == null) Logger.warningMessage("FMM no pudo encontrar un modelo llamado " + id + " !");
    }

    public void remove() {
        //Esto elimina la entidad
        staticEntity.remove();
    }
}
```

Ten en cuenta que los modelos estáticos están diseñados para permanecer en su lugar y actuar como un elemento decorativo en una ubicación fija (las animaciones no cuentan como "movimiento" aquí). Si bien es posible moverlos, considera si en su lugar podrías querer usar un modelo dinámico si ese es tu propósito.

Y así es como EliteMobs, mi complemento de jefes personalizados, usa entidades dinámicas:

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

Los modelos dinámicos se basan en una entidad viviente, que se puede proporcionar al usar el método de creación como en el ejemplo anterior o al ejecutar el método de generación en una entidad dinámica.

Si bien en este momento no existe un recurso API formal, todos los elementos destinados al uso de la API están contenidos en ModeledEntity (la clase base para todas las entidades), StaticEntity, DynamicEntity y ModeledEntityManager. El 99% de los desarrolladores deberían encontrar todos los métodos que necesitan distribuidos en esas tres clases.

# Contribuir al proyecto FreeMinecraftModels (FMM) como desarrollador

FMM se distribuye bajo la licencia GPLV3 y las contribuciones de código son bienvenidas. Estas son las pautas básicas de contribución:

- Sigue las convenciones de nomenclatura existentes, mantén el nivel de verbosidad existente y agrega suficiente documentación para que tu contribución sea fácil de entender.
- Mantén las contribuciones relevantes para el alcance del complemento. Si no sabes si será relevante, no dudes en preguntar con antelación.
- Ten en cuenta el impacto en el rendimiento de tu código. Algunas contribuciones pueden ser rechazadas si no están optimizadas o si causan un impacto demasiado grande en el rendimiento.

## Esquema general del complemento

Para ahorrarte algo de tiempo, aquí tienes un breve desglose del flujo lógico de FMM:

1) Lee la carpeta `imports`.
2) Mueve los archivos de la carpeta `imports` a la carpeta `models`. Si el archivo es un `.bbmodel`, se convierte a `.fmmodel` en la carpeta de modelos.
3) Lee los archivos en la carpeta `models`.
4) Interpreta todas las estructuras de modelos, creando `Skeletons` que contienen grupos de `Bones`, y estos huesos contienen grupos de `Bones` y `Cubes` secundarios. Los `Cubes` y los `Bones` generan los datos JSON del paquete de recursos con los que están relacionados. Esto significa que los `Cubes` generan el JSON específico de los cubos y los `Bones` generan el esquema y los archivos de hueso individuales. Ten en cuenta que un hueso da como resultado un archivo de paquete de recursos. Los modelos se agregan a una lista a medida que se generan.
5) Todavía en `Skeleton`, interpreta todas las `Animaciones` en el modelo, si las hay.
6) Todos los datos ahora se han inicializado, el paquete de recursos se generó en la carpeta `outputs` y el complemento está listo para usarse.

## Trucos utilizados en este complemento:

Los trucos que se usan aquí están bastante bien establecidos y estandarizados, pero se enumerarán de todos modos porque pueden ser contradictorios.

Ten en cuenta que estos trucos son completamente invisibles para los usuarios y los creadores de modelos; las restricciones y las soluciones alternativas solo se enumeran para ayudarte a comprender cómo FMM elude varias limitaciones de Minecraft.

- Todos los modelos se escalan 4 veces y luego el tamaño y el punto de pivote se reajustan en el código para extender el tamaño máximo teórico del modelo.
- Debido a que los modelos de paquetes de recursos solo pueden tener modelos que van de -16 a +32 de tamaño, los modelos se desplazan en segundo plano. Esto es completamente invisible para los jugadores.
- La armadura de cuero para caballos se usa para crear modelos con un tono que puede ser influenciado a través del código (es decir, para indicaciones de daño). ¡La armadura de caballo debe estar configurada en blanco para mostrar los colores correctos!
- Blockbench utiliza un sistema específico de ID para las texturas, pero en realidad lee las texturas secuencialmente desde la configuración. Las ID se asignan aquí en función de su posición en la lista de texturas, siguiendo cómo lo hace Blockbench.
- Cada hueso es una entidad de soporte de armadura diferente debido a las limitaciones de Minecraft.
- La armadura de cuero para caballos está en la ranura de la cabeza del soporte de armadura.
- Los soportes de armadura se utilizan para los objetos estáticos predeterminados. //todo: pronto tendré que implementar el nuevo sistema de visualización alternativo de MC 1.19.4+, es mucho más eficiente.
- Para evitar colisiones con otros complementos que modifican la armadura de cuero para caballos, FMM utiliza valores de datos de modelo personalizados a partir de 50 000.

# Contribuir al proyecto FreeMinecraftModels (FMM) en general

¡FMM en realidad está financiado colectivamente por las personas encantadoras de [https://www.patreon.com/magmaguy](https://www.patreon.com/magmaguy)! Todas las contribuciones ayudan más de lo que imaginas ;)

# Características actualmente planificadas:
- Generación RSP del cliente Bedrock.
- Gestión de RSP independiente de las propiedades del servidor con integración de Geyser.
- Entidades personalizadas (?).
- tag_projectile como metahuesos desde los que se pueden disparar proyectiles (puede haber más de uno por modelo).

# Limitaciones extrañas actuales que deben corregirse:
- Si el punto de pivote (origen) de un hueso está configurado para estar por encima de 67, el modelo comienza a flotar.




