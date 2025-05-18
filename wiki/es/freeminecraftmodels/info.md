Aquí tienes la traducción al español, conservando el formato markdown:

# ***¡Antes de empezar!***

FreeMinecraftModels (FMM) se encuentra actualmente en **desarrollo activo**! Esto significa que algunas características aún no están terminadas y se está trabajando activamente en ellas.

Sin embargo, en este momento, el núcleo del plugin es completamente funcional: la conversión de archivos bbmodel, la generación de paquetes de recursos, la aparición de entidades en el juego y la gestión de sus animaciones, la capacidad de colocar props persistentes, todo funciona en su mayor parte.

¡Considera apoyar el desarrollo en https://www.patreon.com/magmaguy!

El contenido del paquete de recursos exportado está licenciado bajo la licencia CC0 por parte de FreeMinecraftModels, sin derechos reservados. Eres libre de usar, distribuir, modificar para cualquier propósito sin restricciones ni necesidad de atribución.

# Uso de este plugin

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los administradores de servidores de Minecraft?

Puede:

- Importar modelos .bbmodel o fmmodel (formato personalizado de FMM)
- Generar paquetes de recursos con modelos que superan los límites normales de los modelos de paquetes de recursos de Minecraft (hasta 112x112x112 unidades o 7x7x7 bloques en el juego, funcionalmente ilimitado al usar múltiples huesos)
- Mostrar estos modelos en el juego, enviando paquetes específicos compatibles con Bedrock a los clientes de Bedrock, al mismo tiempo que envía entidades de visualización a los clientes de Java 1.19.4+
- Animar estos modelos tal como fueron configurados para ser animados en Blockbench
- Manejar animaciones de estado predeterminado sin requerir otros plugins (caminar, inactivo, muerte, ataque, aparición)
- Manejar hitboxes que rotan con la entidad subyacente y tienen un eje x y z diferente
- Gestionar tres tipos de modelos: estáticos, dinámicos y props
    - Los props son persistentes y se pueden colocar en el mundo de tal manera que persistan incluso si el servidor se reinicia, y es posible distribuir mapas con props a otros servidores
    - Los modelos dinámicos son para modelos que necesitan una entidad viviente subyacente para funcionar, idealmente utilizados por plugins de jefes personalizados o plugins de mascotas
    - Los modelos estáticos son para modelos no persistentes que no deben moverse, básicamente decoraciones o efectos temporales

### ¿Cómo se añade un modelo existente?

Para importar un modelo, simplemente arrastra el archivo .bbmodel a la carpeta `imports` y ejecuta `/fmm reload`. Esto generará un archivo .fmmodel en la carpeta `models` y añadirá el modelo al paquete de recursos en la carpeta `outputs`.

***¡Necesitarás usar ese paquete de recursos para ver el modelo correctamente!*** Es un paquete de recursos normal, así que todo lo que necesitas hacer es ponerlo en tu carpeta de paquetes de recursos. Los servidores de Minecraft tienen una forma de alojar paquetes de recursos. Recomiendo usar mi plugin, [ResourcePackManager](https://www.spigotmc.org/resources/resource-pack-manager.118574/), que automáticamente toma los archivos y los aloja remotamente para ti, incluso fusionándolos con los archivos de otros plugins.

### ¿Cómo se ve el modelo en el juego?

Es importante notar que si bien FreeMinecraftModels puede usarse como un plugin independiente para ver props (básicamente modelos personalizados que puedes colocar en el mundo), el plugin suele estar en su mejor momento cuando se combina con un plugin como [EliteMobs](https://www.spigotmc.org/resources/elitemobs.40090/) donde los modelos se usan activamente para algo concreto, en este caso, peleas de jefes.

Hay tres tipos de modelos: estáticos, dinámicos y props.
- Los props son persistentes y se pueden colocar en el mundo de tal manera que persistan incluso si el servidor se reinicia, y es posible distribuir mapas con props a otros servidores
- Los modelos dinámicos son para modelos que necesitan una entidad viviente subyacente para funcionar, idealmente utilizados por plugins de jefes personalizados o plugins de mascotas
- Los modelos estáticos son para modelos no persistentes que no deben moverse, básicamente decoraciones o efectos temporales

#### Visualización de modelos estáticos en el juego

Para ver modelos estáticos en el juego, usa el comando `/fmm spawn static <id>` donde el id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

#### Visualización de modelos dinámicos en el juego

Para ver modelos dinámicos en el juego, usa el comando `/fmm spawn dynamic <id>` donde el id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

#### Visualización de props en el juego

Para ver modelos dinámicos en el juego, usa el comando `/fmm spawn prop <id>` donde el id es el nombre del archivo del modelo, en minúsculas y sin la extensión del archivo.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los modeladores?

FMM sigue las reglas estándar de paquetes de recursos para la generación de paquetes de recursos. Además, intenta ser lo más compatible posible con modelos compatibles con ModelEngine para intentar estandarizar la creación de modelos entre plugins.

### Características / restricciones de generación de modelos

Si alguna vez has creado modelos para ModelEngine, estarás familiarizado con muchas de las restricciones de generación de paquetes de recursos de Minecraft:

#### **Cubos:**

Los cubos son lo mismo aquí que en Blockbench, son los cubos que componen el modelo.

- Los cubos pueden tener hasta 112x112x112 "píxeles" (unidades de Blockbench) o 7x7x7 bloques en el juego (restricciones normales de Minecraft sorteadas usando tamaños de visualización, pronto se sortearán aún más para 1.19.4+ gracias a las entidades de visualización)
- Las rotaciones legales para los cubos son 0, 22.5, -22.5, 45 y -45. Ninguna otra rotación funciona.
- Los cubos solo rotan en un eje, lo que significa que una rotación de [22.5, 0, 0] está bien, una rotación de [22.5, 0, 45] no funcionará completamente y solo rotará en un eje.

#### **Huesos (Bones):**

Los huesos son lo que Blockbench llama "grupos". Sirven para agrupar los cubos y deben usarse para agrupar huesos para animaciones.

- Los huesos pueden tener hasta 112x112x112 "píxeles" (unidades de Blockbench) o 7x7x7 bloques en el juego. *Ten en cuenta que el tamaño de los huesos se establece por lo que contienen, así que si tienes cubos que están a más de 7 bloques de distancia, probablemente excederás este límite de tamaño. ¡Sortear este límite es tan fácil como poner los bloques en un hueso diferente no contenido en el primer hueso!*
- ¡Pueden tener cualquier rotación! Sin embargo, se recomienda evitar el uso de rotaciones predeterminadas de 90, -90, 180 y -180, ya que a menudo pueden llevar a un comportamiento inesperado. Ten en cuenta que esto no se aplica realmente a las animaciones, solo a la posición de descanso predeterminada de los huesos.

Los huesos son significativamente más flexibles que los cubos, ¡pero debes usar la menor cantidad de huesos posible! En FMM, debido a las limitaciones de Minecraft, cada hueso es una entidad diferente. A escala, ¡esto afectará el rendimiento bastante rápido! Siempre usa la menor cantidad de huesos que puedas, y ten en cuenta cuántos de ese modelo planeas generar: ¡cuantos más planees tener, menos huesos deberías tener!

#### **Huesos Virtuales (Virtual Bones)**

Los Huesos Virtuales es terminología de ModelEngine para huesos que tienen metadatos específicos, generalmente en forma de un nombre específico, que se utiliza para un propósito particular.

Los siguientes huesos virtuales se han implementado en FreeMinecraftModels:

- Hitboxes / altura de los ojos: un hueso llamado "hitbox" con un cubo que define los límites, y tiene el mismo valor x y z (se elegirá el valor más grande si no son iguales) define la hitbox. El nivel de los ojos se establece en el punto de pivote del hueso de la hitbox.
- Etiqueta de nombre (Name tag): un hueso cuyo nombre comienza con "tag_". Honestamente, preferiría ser más específico aquí y usar "tag_name" para usar etiquetas para otras cosas, pero eso se considerará seriamente más adelante.
- Cabeza (Head): un hueso cuyo nombre comienza con h_. Este es un hueso virtual que se utiliza para definir la cabeza del modelo, que rotará según la rotación de la cabeza de la entidad subyacente.

#### **Distribución de archivos más segura, fácil e ineditable**

Una cosa que FMM intenta abordar es que los usuarios reutilicen modelos que han obtenido para editarlos de formas que el creador del modelo no quería, específicamente para cambiar la apariencia o alterar ligeramente un modelo y potencialmente intentar revenderlo como una creación original.

Para ello, FMM utiliza el formato de archivo `.fmmodel` que tiene como objetivo reducir los archivos `.bbmodel` hasta el punto en que puedan ser utilizados por el plugin pero no puedan ser editados en Blockbench.

Como modelador, ahora tienes la opción de lanzar un archivo `.fmmodel` ineditable, un archivo `.bbmodel` editable o incluso aplicar precios diferenciales o términos de servicio de distribución para los dos.

Generar un `.fmmodel` es tan simple como poner tu `.bbmodel` en la carpeta `~/plugins/FreeMinecraftModels/imports` y recargar el plugin con `/fmm reload` o reiniciar el servidor. Tu `.fmmodel` estará entonces en la carpeta `~/plugins/FreeMinecraftModels/models`.

## ¿Qué puede hacer FreeMinecraftModels (FMM) por los desarrolladores que quieren integrarlo en sus plugins?

¡FMM tiene un repositorio Maven!
Maven:

```xml

<repository>
    <id>magmaguy-repo-releases</id>
    <name>MagmaGuy's Repository</name>
    <url>https://repo.magmaguy.com/releases</url>
</repository>

<dependency>
<groupId>com.magmaguy</groupId>
<artifactId>FreeMinecraftModels</artifactId>
<version>LATEST.VERSION.HERE</version>
</dependency>
```

Gradle:

```kotlin
maven {
    name = "magmaguyRepoReleases"
    url = uri("https://repo.magmaguy.com/releases")
}

compileOnly group : 'com.magmaguy', name: 'FreeMinecraftModels', version: 'LATEST.VERSION.HERE'
```

*Nota: FreeMinecraftModels está diseñado para ser utilizado como una API, y requerirá la instalación del plugin en el servidor. ¡No lo incluyas (shade) en tu plugin!*

## Uso de la API

FMM tiene como objetivo ser lo más fácil posible de usar como API.

Ahora mismo, si deseas usar FreeMinecraftModels como API para tener acceso al uso de modelos personalizados, solo hay cuatro clases que necesitas conocer:

- `ModeledEntity` - la clase base para todas las entidades
- `StaticEntity` - para cuando quieras usar un modelo estático no permanente
- `DynamicEntity` - para cuando quieras disfrazar otra entidad viviente con un modelo
- `PropEntity` - para cuando quieras colocar un modelo en el mundo que persista incluso si el servidor se reinicia

Aquí tienes un fragmento para manejar un modelo estático:

```java
import org.bukkit.Bukkit;

public class FreeMinecraftModelsModel {
    private StaticEntity staticEntity = null;

    //Create the model
    public FreeMinecraftModelsModel(String id, Location location) {
        //This spawns the entity!
        staticEntity = StaticEntity.create(id, location);
        //This checks if the entity spawned correctly
        if (staticEntity == null) Bukkit.getLogger().warning(("FMM failed to find a model named " + id + " !"));
    }

    public void remove() {
        //This removes the entity
        staticEntity.remove();
    }
}
```

Ten en cuenta que los modelos estáticos están destinados a permanecer en su lugar y actuar como un elemento decorativo en una ubicación fija (las animaciones no cuentan como 'movimiento' aquí). Si bien es posible moverlos, considera si en su lugar podrías querer usar un modelo dinámico si ese es tu propósito.

Y aquí es cómo EliteMobs, mi plugin de jefes personalizados, usa entidades dinámicas:

```java
package com.magmaguy.elitemobs.thirdparty.custommodels.freeminecraftmodels;

import com.magmaguy.elitemobs.thirdparty.custommodels.CustomModelInterface;
import api.com.magmaguy.freeminecraftmodels.ModeledEntityManager;
import customentity.com.magmaguy.freeminecraftmodels.DynamicEntity;
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

Los modelos dinámicos se construyen sobre una entidad viviente, que se puede proporcionar al usar el método `create` como en el ejemplo anterior, o al ejecutar el método `spawn` en una entidad `Dynamic`.

# Contribución al proyecto FreeMinecraftModels (FMM) como desarrollador

FMM se distribuye bajo la licencia GPLV3 y las contribuciones de código son bienvenidas. Aquí están las pautas básicas de contribución:

- Sigue las convenciones de nomenclatura existentes, mantén el nivel de verbosidad existente y añade suficiente documentación para que tu contribución sea fácil de entender.
- Mantén las contribuciones relevantes para el alcance del plugin. Si no sabes si será relevante, no dudes en preguntar con antelación.
- Sé consciente del impacto de rendimiento de tu código. Algunas contribuciones pueden ser rechazadas si son demasiado poco optimizadas o causan un impacto de rendimiento demasiado grande.

## Esquema general del plugin

Para ahorrarte algo de tiempo, aquí tienes un resumen rápido del flujo lógico de FMM:

1) Lee la carpeta `imports`.
2) Mueve los archivos de la carpeta `imports` a la carpeta `models`. Si el archivo es un `.bbmodel`, se convierte a `.fmmodel` en la carpeta `models`.
3) Lee los archivos en la carpeta `models`.
4) Interpreta todas las estructuras del modelo, creando `Skeleton`s que contienen grupos de `Bone`s, y estos huesos contienen grupos de `Bone`s e `Cube`s hijos. `Cube`s y `Bone`s generan los datos del paquete de recursos JSON a los que están relacionados. Esto significa que los `Cube`s generan el JSON específico de los cubos y los `Bone`s generan el esquema y los archivos individuales de los huesos. Ten en cuenta que un hueso resulta en un archivo de paquete de recursos. Los modelos se añaden a una lista a medida que se generan.
5) Todavía en el `Skeleton`, interpreta todas las `Animations` en el modelo, si las hay.
6) Todos los datos han sido inicializados, el paquete de recursos se generó en la carpeta `outputs` y el plugin está listo para ser usado.

## Trucos utilizados en este plugin:

Los trucos utilizados aquí están bastante bien establecidos y estandarizados, pero se enumerarán de todos modos porque pueden ser contraintuitivos.

Ten en cuenta que estos trucos son completamente invisibles para los usuarios y creadores de modelos; las restricciones y soluciones alternativas solo se enumeran para ayudarte a comprender cómo FMM sortea varias limitaciones de Minecraft.

- Todos los modelos se escalan 4 veces y luego el tamaño y el punto de pivote se reajustan en el código para extender el tamaño máximo teórico del modelo.
- Debido a que los modelos de paquetes de recursos solo pueden tener tamaños que van de -16 a +32, los modelos se desplazan en segundo plano. Esto es completamente invisible para los jugadores.
- Se utiliza armadura de caballo de cuero para crear modelos con un tono que puede ser influenciado a través del código (por ejemplo, para indicaciones de daño). ¡La armadura de caballo debe estar configurada en blanco para mostrar los colores correctos!
- Blockbench utiliza un sistema específico de IDs para las texturas, pero en realidad lee las texturas secuencialmente desde la configuración. Las IDs se asignan aquí basándose en su posición en la lista de texturas, siguiendo cómo lo hace Blockbench.
- Cada hueso es una entidad diferente debido a las limitaciones de Minecraft.
- La armadura de caballo de cuero está en el espacio de la cabeza del soporte de armadura.
- Tanto los soportes de armadura como las entidades de visualización se utilizan para los elementos estáticos predeterminados; los clientes de Bedrock obtienen los soportes de armadura, y los clientes 1.19.4+ obtienen las entidades de visualización (los clientes más antiguos obtendrán soportes de armadura).

# Contribución al proyecto FreeMinecraftModels (FMM) en general

¡FMM está realmente financiado por crowdfunding por la gente encantadora en https://www.patreon.com/magmaguy! Todas las contribuciones ayudan más de lo que imaginas ;)

# Características actualmente planificadas:
- Generación de RSP para clientes Bedrock
- Gestión de RSP con integración de Geyser
- tag_projectile como meta huesos desde los cuales se pueden disparar proyectiles (puede haber más de uno por modelo)

# Limitaciones extrañas actuales que sería bueno solucionar:

- La TransformationMatrix es un desastre, pero aún no se han desarrollado mejores soluciones. Necesitan trabajo de alguien que sea bueno con matrices.