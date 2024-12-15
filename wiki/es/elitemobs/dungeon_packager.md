[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puede encontrar información sobre las mazmorras, incluida información sobre mazmorras prefabricadas [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas tales como paquetes de eventos, paquetes de modelos, arenas, paquetes de NPC, paquetes de objetos, etc.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras de instancia!*** Las mazmorras de instancia solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de minimazmorras!*** Si crea un paquete de mazmorras, podrá implementarlo y volver a implementarlo en cualquier servidor que desee en cualquier momento y por cualquier motivo.
- ***¡Fácil de activar y desactivar!*** Siempre puede ejecutar `/em setup` y activar y desactivar los paquetes de mazmorras de forma temporal o permanente.
- ***¡Fácil de compartir!*** Si desea compartir sus creaciones, los paquetes de mazmorras se pueden comprimir y enviar a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si está interesado!
- ***¡Teletransportaciones!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransportación a las que se puede acceder en la página de teletransportaciones del menú `/em`, lo que podría ser muy útil en muchas configuraciones.

</details>

# Creación de mazmorras

Las siguientes configuraciones se utilizan para crear un archivo de configuración que debe ir en la carpeta `content_packages`. Estas configuraciones se utilizan para crear mazmorras específicamente, y no son necesarias si solo desea utilizar el empaquetador de mazmorras para distribuir contenido que no sea de mazmorra, como un paquete de objetos o eventos.

## Plugins requeridos

Para utilizar el empaquetador de mazmorras, necesitará el siguiente plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege la minimazmorra

## Creación de una mazmorra, paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas se asociaron con una compilación esquemática. Ahora están eliminadas gradualmente y ya no son compatibles.

Todas las mazmorras de EliteMobs ahora se basan en el mundo.

## Archivo pack.meta requerido

Su paquete de mazmorras debe incluir un archivo `pack.meta`, que es simplemente un archivo `.txt` renombrado con una extensión `.meta`. Este archivo debe contener solo una palabra, que indica para qué plugin es el paquete (por ejemplo, "elitemobs", escrito en minúsculas). El archivo `pack.meta` debe estar ubicado en el directorio raíz de su paquete, junto con todas las demás carpetas.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras

<div align="center">

### isEnabled

Establece si el paquete de mazmorras está habilitado.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#booleano) | `false` |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Establece el nombre del contenido. Admite [códigos de color](#color_codes).

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [Cadena](#string) | `false` |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aLa mazmorra verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Establece el tipo de ubicación que utiliza la mazmorra.

| Clave         |        Valores         | Predeterminado | Obligatorio |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Establece el tipo de mazmorra.

| Clave         |                    Valores                    | Predeterminado | Obligatorio |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo con fines informativos. Admite [códigos de color](#color_codes).

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aLa mejor mazmorra.'
- '&aCreada por: JugadorGenial'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando el contenido no se descarga. Solo con fines informativos.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Establece la categoría de tamaño del paquete de mazmorras. Solo con fines informativos.

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Especial [1] |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

<div align="center">

| Clave | Descripción                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Las guaridas son un tipo de mazmorra pequeña que se enfoca en una gran pelea de jefes.  |
| `SANCTUM`    | Los santuarios son el equivalente a guaridas de instancia. Esto significa que se centran en una gran pelea de jefes. |
| `MINIDUNGEON`    | Las minimazmorras son un tipo de mazmorra de tamaño mediano que generalmente contiene de 3 a 15 minijefes y un gran jefe, así como una gran cantidad de mobs "basura" que están destinados a ser "cultivados" por los jugadores para obtener monedas y equipo. |
| `DUNGEON`    | Las mazmorras son el equivalente a minimazmorras de instancia. Este es el tipo de mazmorra MMORPG más tradicional, donde los jugadores se juntan en grupo y atraviesan un camino de mobs basura y minijefes para luchar contra un jefe final. |
| `RAID`    | ¡Próximamente!|
| `ADVENTURE`    | Las aventuras son mapas de aventuras completos. Incluyen líneas de misiones, npc, grandes cantidades de minijefes y jefes e incluso pueden contener sus propias arenas o mazmorras dentro de ellos. |
| `ARENA`    | Las arenas son áreas de supervivencia basadas en oleadas en las que los jugadores son recompensados por derrotar a las oleadas. |
| `OTHER`    | Cualquier otra cosa que no entre en las categorías anteriores. |

Para obtener descripciones más detalladas, consulte [Mazmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Establece si el paquete de mazmorras debe estar protegido por WorldGuard.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#booleano) |  `true`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Establece la versión del paquete de mazmorras.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Entero](#integer) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Establece la información que aparece en el menú. Admite [códigos de color](#color_codes).

*Solo funciona cuando `/em` está configurado en modo libro usando `/em alt`.*

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificultad: &a¡Contenido fácil para 1 persona!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Establece el mensaje que aparece cuando un jugador entra en la zona de la mazmorra. Admite [códigos de color](#color_codes).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a¡Has entrado en la mazmorra!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Establece el mensaje que aparece cuando un jugador abandona la zona de la mazmorra. Admite [códigos de color](#color_codes).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a¡Has abandonado la mazmorra!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Establece si el paquete de mazmorras tiene modelos personalizados (para ModelEngine o FreeMinecraftModels).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#booleano) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Establece el nombre de las carpetas utilizadas para los archivos asociados a esta mazmorra.

**¡Obligatorio para las mazmorras de instancia!**.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que debería mostrar la mazmorra en el menú EM.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Entero](#integer) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Establece si la mazmorra debe ser una mazmorra de desafío de encantamiento.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Booleano](#booleano) | `false` |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### Paquetes de mazmorras basados en el mundo

Los siguientes valores solo se aplican a las mazmorras basadas en el mundo.

<div align="center">

***

### worldName

Establece el nombre del mundo que debe empaquetarse.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
worldName: mi_mundo_minecraft
```

</div>

</details>

***

### womholeWorldName

Esta función establece el nombre del mundo de agujero de gusano, que sirve como un mundo secundario vinculado al mundo principal. Se utiliza para funciones como centros de teletransporte o cámaras de jefes únicas.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
womholeWorldName: mi_mundo_minecraft_wormhole
```

</div>

</details>

***

### environment

Establece el entorno del mundo.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Entorno](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Establece la ubicación de teletransportación del paquete de mazmorras. Aquí es donde los jugadores serán teletransportados al entrar a la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: mi_mundo_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Permite o evita que las explosiones dañen los bloques en una mazmorra. Las explosiones se consideran explosiones de élite, por lo que cualquier daño a los bloques se regenerará en 2 minutos.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Booleano](#booleano) |  `false`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Mazmorras de instancia

*Las mazmorras de instancia crean un nuevo mundo cada vez que un grupo de jugadores desea completar una mazmorra y lo eliminan cuando termina. Para que esto funcione correctamente, debe colocar una carpeta siguiendo `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Luego coloca el mundo que vas a utilizar dentro de la carpeta que has creado, asegurándote de que el archivo `session.lock` del mundo se elimine.*

Los siguientes valores solo se aplican a las mazmorras de instancia. Tenga en cuenta que todas las mazmorras de instancia son mazmorras mundiales, por lo que también usan los valores de las mazmorras mundiales.

<div align="center">

***

### startLocation

Establece la ubicación de teletransportación del punto de inicio de la mazmorra de instancia. Aquí es donde los jugadores serán teletransportados al iniciar la mazmorra de instancia con `/em start`.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startLocation: mi_mundo_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Establece el permiso requerido para entrar a la instancia de la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Establece la cantidad mínima de jugadores necesaria para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Entero](#integer) |  `1`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Establece la cantidad mínima de jugadores necesaria para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Entero](#integer) |   `5`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Establece una lista de objetivos de mazmorra necesarios para que la mazmorra se considere completada.

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente hay dos tipos de objetivos de mazmorras:

* Mata al objetivo: `filename=jefe.yml:amount=X`
* Borra un porcentaje de la mazmorra: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Establece una lista de dificultades en la mazmorra de instancia.

**¡Obligatorio para las mazmorras de instancia!**

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Especial [1] |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

<div align="center">

Establecer dificultades de mazmorra de instancia creará automáticamente diferentes opciones de dificultad al entrar en la mazmorra.

Los nombres de dificultad establecidos aquí serán los que se utilicen en la carpeta de jefes personalizados, donde puede establecer qué poderes tienen los jefes según la dificultad.

Las dificultades están en un formato de lista que tiene los siguientes campos:

| Clave    | Descripción | Valores | Obligatorio |
|:----------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|  `name`  | Nombre de la dificultad para los jugadores. |[Cadena](#string)        |     ✅     |
|   `id`   | ID de la dificultad, utilizado en jefes personalizados y objetos personalizados para la función basada en la dificultad.  |[Cadena](#string)        |     ✅     |
| `levelSync` | Establece el nivel de la sincronización de nivel, si corresponde. La sincronización de nivel hace que todo el equipo del jugador alcance el valor establecido, lo que hace que sea imposible para los jugadores superar el nivel de una mazmorra y mantenerla relevante para ejecuciones posteriores. Basado en el sistema de sincronización de nivel de Final Fantasy 14. |[Entero](#integer)        |     ❌     |

</div>

</details>

</div>

***

## Uso del archivo de paquete de mazmorras meta_pack.yml para mazmorras grandes.
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puede encontrar información sobre las mazmorras, incluida información sobre mazmorras prefabricadas [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas tales como paquetes de eventos, paquetes de modelos, arenas, paquetes de NPC, paquetes de objetos, etc.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras de instancia!*** Las mazmorras de instancia solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de minimazmorras!*** Si crea un paquete de mazmorras, podrá implementarlo y volver a implementarlo en cualquier servidor que desee en cualquier momento y por cualquier motivo.
- ***¡Fácil de activar y desactivar!*** Siempre puede ejecutar `/em setup` y activar y desactivar los paquetes de mazmorras de forma temporal o permanente.
- ***¡Fácil de compartir!*** Si desea compartir sus creaciones, los paquetes de mazmorras se pueden comprimir y enviar a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si está interesado!
- ***¡Teletransportaciones!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransportación a las que se puede acceder en la página de teletransportaciones del menú `/em`, lo que podría ser muy útil en muchas configuraciones.

</details>

# Creación de mazmorras

Las siguientes configuraciones se utilizan para crear un archivo de configuración que debe ir en la carpeta `content_packages`. Estas configuraciones se utilizan para crear mazmorras específicamente, y no son necesarias si solo desea utilizar el empaquetador de mazmorras para distribuir contenido que no sea de mazmorra, como un paquete de objetos o eventos.

## Plugins requeridos

Para utilizar el empaquetador de mazmorras, necesitará el siguiente plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege la minimazmorra

## Creación de una mazmorra, paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas se asociaron con una compilación esquemática. Ahora están eliminadas gradualmente y ya no son compatibles.

Todas las mazmorras de EliteMobs ahora se basan en el mundo.

## Archivo pack.meta requerido

Su paquete de mazmorras debe incluir un archivo `pack.meta`, que es simplemente un archivo `.txt` renombrado con una extensión `.meta`. Este archivo debe contener solo una palabra, que indica para qué plugin es el paquete (por ejemplo, "elitemobs", escrito en minúsculas). El archivo `pack.meta` debe estar ubicado en el directorio raíz de su paquete, junto con todas las demás carpetas.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras

<div align="center">

### isEnabled

Establece si el paquete de mazmorras está habilitado.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#booleano) | `false` |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: true
```

</div>

</details>

***

### name

Establece el nombre del contenido. Admite [códigos de color](#color_codes).

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [Cadena](#string) | `false` |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aLa mazmorra verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Establece el tipo de ubicación que utiliza la mazmorra.

| Clave         |        Valores         | Predeterminado | Obligatorio |
|-------------|:---------------------:|:-------:|:---------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonLocationType: WORLD
```

</div>

</details>

***

### contentType

Establece el tipo de mazmorra.

| Clave         |                    Valores                    | Predeterminado | Obligatorio |
|-------------|:--------------------------------------------:|:-------:|:---------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
contentType: INSTANCED_DUNGEON
```

</div>

</details>

***

### customInfo

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo con fines informativos. Admite [códigos de color](#color_codes).

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aLa mejor mazmorra.'
- '&aCreada por: JugadorGenial'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando el contenido no se descarga. Solo con fines informativos.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
downloadLink: http://www.example.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Establece la categoría de tamaño del paquete de mazmorras. Solo con fines informativos.

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Especial [1] |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonSizeCategory: MINIDUNGEON
```

<div align="center">

![create_packager_size.jpg](../../../img/wiki/create_packager_size.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

<div align="center">

| Clave | Descripción                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Las guaridas son un tipo de mazmorra pequeña que se enfoca en una gran pelea de jefes.  |
| `SANCTUM`    | Los santuarios son el equivalente a guaridas de instancia. Esto significa que se centran en una gran pelea de jefes. |
| `MINIDUNGEON`    | Las minimazmorras son un tipo de mazmorra de tamaño mediano que generalmente contiene de 3 a 15 minijefes y un gran jefe, así como una gran cantidad de mobs "basura" que están destinados a ser "cultivados" por los jugadores para obtener monedas y equipo. |
| `DUNGEON`    | Las mazmorras son el equivalente a minimazmorras de instancia. Este es el tipo de mazmorra MMORPG más tradicional, donde los jugadores se juntan en grupo y atraviesan un camino de mobs basura y minijefes para luchar contra un jefe final. |
| `RAID`    | ¡Próximamente!|
| `ADVENTURE`    | Las aventuras son mapas de aventuras completos. Incluyen líneas de misiones, npc, grandes cantidades de minijefes y jefes e incluso pueden contener sus propias arenas o mazmorras dentro de ellos. |
| `ARENA`    | Las arenas son áreas de supervivencia basadas en oleadas en las que los jugadores son recompensados por derrotar a las oleadas. |
| `OTHER`    | Cualquier otra cosa que no entre en las categorías anteriores. |

Para obtener descripciones más detalladas, consulte [Mazmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Establece si el paquete de mazmorras debe estar protegido por WorldGuard.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#booleano) |  `true`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
protect: true
```

</div>

</details>

***

### dungeonVersion

Establece la versión del paquete de mazmorras.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonVersion` | [Entero](#integer) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonVersion: 1
```

</div>

</details>

***

### playerInfo

Establece la información que aparece en el menú. Admite [códigos de color](#color_codes).

*Solo funciona cuando `/em` está configurado en modo libro usando `/em alt`.*

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificultad: &a¡Contenido fácil para 1 persona!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Establece el mensaje que aparece cuando un jugador entra en la zona de la mazmorra. Admite [códigos de color](#color_codes).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a¡Has entrado en la mazmorra!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Establece el mensaje que aparece cuando un jugador abandona la zona de la mazmorra. Admite [códigos de color](#color_codes).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a¡Has abandonado la mazmorra!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Establece si el paquete de mazmorras tiene modelos personalizados (para ModelEngine o FreeMinecraftModels).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#booleano) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
hasCustomModels: false
```

</div>

</details>

***

### dungeonConfigFolderName

Establece el nombre de las carpetas utilizadas para los archivos asociados a esta mazmorra.

**¡Obligatorio para las mazmorras de instancia!**.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: my_dungeon_folder
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que debería mostrar la mazmorra en el menú EM.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Entero](#integer) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
contentLevel: 20
```

</div>

</details>

***

### enchantmentChallenge

Establece si la mazmorra debe ser una mazmorra de desafío de encantamiento.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Booleano](#booleano) | `false` |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantmentChallenge: false
```

</div>

</details>

</div>

***

### Paquetes de mazmorras basadas en el mundo

Los siguientes valores solo se aplican a las mazmorras basadas en el mundo.

<div align="center">

***

### worldName

Establece el nombre del mundo que debe empaquetarse.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
worldName: mi_mundo_minecraft
```

</div>

</details>

***

### womholeWorldName

Esta función establece el nombre del mundo de agujero de gusano, que sirve como un mundo secundario vinculado al mundo principal. Se utiliza para funciones como centros de teletransporte o cámaras de jefes únicas.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
womholeWorldName: mi_mundo_minecraft_wormhole
```

</div>

</details>

***

### environment

Establece el entorno del mundo.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Entorno](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
environment: NORMAL
```

</div>

</details>

***

### teleportLocation

Establece la ubicación de teletransportación del paquete de mazmorras. Aquí es donde los jugadores serán teletransportados al entrar a la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: mi_mundo_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Permite o evita que las explosiones dañen los bloques en una mazmorra. Las explosiones se consideran explosiones de élite, por lo que cualquier daño a los bloques se regenerará en 2 minutos.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Booleano](#booleano) |  `false`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Mazmorras de instancia

*Las mazmorras de instancia crean un nuevo mundo cada vez que un grupo de jugadores desea completar una mazmorra y lo elimina cuando termina. Para que esto funcione correctamente, debe colocar una carpeta siguiendo `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Luego, coloque el mundo que va a usar dentro de la carpeta que ha creado, asegurándose de que el archivo `session.lock` del mundo se elimine.*

Los siguientes valores solo se aplican a las mazmorras de instancia. Tenga en cuenta que todas las mazmorras de instancia son mazmorras mundiales, por lo que también utilizan los valores de las mazmorras mundiales.

<div align="center">

***

### startLocation

Establece la ubicación de teletransportación del punto de inicio de la mazmorra de instancia. Aquí es donde los jugadores serán teletransportados al iniciar la mazmorra de instancia con `/em start`.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startLocation: mi_mundo_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Establece el permiso requerido para poder entrar a la instancia de la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitedungeon.mypermission
```

</div>

</details>

***

### minPlayerCount

Establece la cantidad mínima de jugadores necesaria para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Entero](#integer) |  `1`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
minPlayerCount: 1
```

</div>

</details>

***

### maxPlayerCount

Establece la cantidad mínima de jugadores necesaria para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Entero](#integer) |   `5`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
maxPlayerCount: 5
```

</div>

</details>

***

### dungeonObjectives

Establece una lista de objetivos de mazmorra necesarios para que la mazmorra se considere completada.

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente hay dos tipos de objetivos de mazmorras:

* Mata al objetivo: `filename=jefe.yml:amount=X`
* Borra un porcentaje de la mazmorra: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=dungeon_final_boss.yml
- filename=dungeon_miniboss_one.yml
- filename=dungeon_miniboss_two.yml
```

```yml
dungeonObjectives:
- clearpercentage=0.8
```

</div>

</details>

***

### difficulties

Establece la lista de dificultades en la mazmorra de instancia.

**¡Obligatorio para las mazmorras de instancia!**

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `difficulties` | Especial [1] |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

```yml
difficulties:
- levelSync: 25
  id: 0
  name: normal
- levelSync: 20
  id: 1
  name: hard
- levelSync: 15
  id: 2
  name: mythic
```

<div align="center">

![create_packager_difficulty.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expandir tabla</b></summary>

<div align="center">

Establecer dificultades de mazmorra de instancia creará automáticamente diferentes opciones de dificultad al entrar en la mazmorra.

Los nombres de dificultad establecidos aquí serán los que se utilicen en la carpeta de jefes personalizados, donde puede establecer qué poderes tienen los jefes según la dificultad.

Las dificultades están en un formato de lista que tiene los siguientes campos:

|   Clave   | Descripción | Valores | Obligatorio |
|:-----------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nombre de la dificultad para los jugadores.  |[Cadena](#string)        |     ✅     |
|  `id`   | ID de la dificultad, utilizado en jefes personalizados y objetos personalizados para la función basada en la dificultad. |[Cadena](#string)        |     ✅     |
| `levelSync` | Establece el nivel de la sincronización de nivel, si corresponde. La sincronización de nivel hace que todo el equipo del jugador alcance el valor establecido, lo que hace que sea imposible para los jugadores superar el nivel de una mazmorra y mantenerla relevante para ejecuciones posteriores. Basado en el sistema de sincronización de nivel de Final Fantasy 14. |[Entero](#integer)        |     ❌     |

</div>

</details>

</div>

***

## Uso del archivo de paquete de mazmorras meta_pack.yml para mazmorras grandes.
