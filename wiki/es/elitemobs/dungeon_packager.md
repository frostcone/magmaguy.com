```spanish
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puedes encontrar información sobre las mazmorras, incluyendo información sobre mazmorras prefabricadas [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas como paquetes de eventos, paquetes de modelos, arenas, paquetes de npcs, paquetes de objetos, etc.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras instanciadas!*** Las mazmorras instanciadas solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de Minidungeons!*** Si creas un Paquete de Mazmorra, podrás desplegarlo y redesplegarlo en cualquier servidor que desees en cualquier momento y por cualquier razón.
- ***¡Fácil de activar y desactivar!*** Siempre puedes usar `/em setup` y activar o desactivar temporal o permanentemente los Paquetes de Mazmorras.
- ***¡Fácil de compartir!*** Si deseas compartir tus creaciones, los Paquetes de Mazmorras simplemente se pueden comprimir y enviar a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si estás interesado!
- ***¡Teletransportes!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransporte a las que se puede acceder en la página de Teletransportes del menú `/em`, lo cual puede ser muy útil en muchas configuraciones.

</details>

# Creando Mazmorras

Las siguientes configuraciones se utilizan para crear un archivo de configuración que debe ir en la carpeta `content_packages`. Estas configuraciones se utilizan específicamente para crear mazmorras y no son necesarias si solo quieres usar el empaquetador de mazmorras para distribuir contenido que no sea de mazmorras, como un paquete de objetos o eventos.

## Plugins requeridos

Para usar el Empaquetador de Mazmorras, necesitarás el siguiente plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege la Minidungeon

## Creando una mazmorra, paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas estaban asociadas con una construcción de esquema. Ahora están desfasadas y ya no son compatibles.

Todas las mazmorras de EliteMobs ahora están basadas en el mundo.

## Archivo pack.meta requerido

Tu paquete de mazmorra debe incluir un archivo `pack.meta`, que es simplemente un archivo `.txt` renombrado con una extensión `.meta`. Este archivo debe contener solo una palabra, indicando para qué plugin es el paquete (por ejemplo, "elitemobs", escrito en minúsculas). El archivo `pack.meta` debe estar ubicado en el directorio raíz de tu paquete, junto a todas las demás carpetas.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras

<div align="center">

### isEnabled

Establece si el paquete de mazmorra está habilitado.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#boolean) | `false` |    ✅      |

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

Establece el nombre del contenido. Soporta [Códigos de Color](#color_codes).

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [Cadena](#string) | `false` |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&c[lvl 999] &aLa Mazmorra Verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Establece el tipo de ubicación que usa la mazmorra.

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

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo para fines informativos. Soporta [Códigos de Color](#color_codes).

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de Cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aLa mejor mazmorra.'
- '&aHecha por: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando el contenido no está descargado. Solo para fines informativos.

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

Establece la categoría de tamaño del paquete de mazmorra. Solo para fines informativos.

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `dungeonSizeCategory` | Especial [1] |  ninguno   |    ✅      |

<details>

<summary><b>Expandir Tabla</b></summary>

<div align="center">

| Clave | Descripción                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Las Guaridas son un tipo de mazmorra pequeña que se centra en una gran pelea de jefe.  |
| `SANCTUM`    | Los Santuarios son el equivalente de Guaridas instanciadas. Esto significa que se centran en una enorme pelea de jefe. |
| `MINIDUNGEON`    | Las Minidungeons son un tipo de mazmorra de tamaño medio que generalmente contiene de 3 a 15 minibosses y un gran jefe, así como una gran cantidad de mobs "basura" que están destinados a ser "farmeados" para obtener monedas y equipo por los jugadores. |
| `DUNGEON`    | Las Mazmorras son el equivalente de Minidungeons instanciadas. Este es el tipo de mazmorra MMORPG más tradicional, donde los jugadores se agrupan y atraviesan una serie de mobs basura y minibosses para luchar contra un jefe final. |
| `RAID`    | ¡Próximamente!|
| `ADVENTURE`    | Las Aventuras son mapas de aventura completos. Incluyen líneas de misiones, npcs, grandes cantidades de minibosses y jefes, e incluso pueden contener sus propias arenas o mazmorras dentro de ellas. |
| `ARENA`    | Las Arenas son áreas de supervivencia basadas en oleadas en las que los jugadores son recompensados por derrotar oleadas. |
| `OTHER`    | Cualquier otra cosa que no caiga en las categorías anteriores. |

Para descripciones más detalladas, consulta [Mazmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Establece si el paquete de mazmorra debe ser protegido por WorldGuard.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#boolean) |  `true`   |    ❌      |

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

Establece la versión del paquete de mazmorra.

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

Establece la información que aparece en el menú. Soporta [Códigos de Color](#colorcodes).

*Solo funciona cuando `/em` está configurado en modo libro usando `/em alt`.*

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [Cadena](#string) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificultad: &aContenido fácil para 1 jugador!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Establece el mensaje que aparece cuando un jugador entra en la zona de la mazmorra. Soporta [Códigos de Color](#colorcodes).

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

Establece el mensaje que aparece cuando un jugador sale de la zona de la mazmorra. Soporta [Códigos de Color](#colorcodes).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a¡Has salido de la mazmorra!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Establece si el paquete de mazmorra tiene modelos personalizados (para ModelEngine o FreeMinecraftModels).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#boolean) |  ninguno   |    ❌      |

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

**¡Obligatorio para mazmorras instanciadas!**

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mi_carpeta_mazmorra
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que la mazmorra debe mostrar en el menú de EM.

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

Establece si la mazmorra debe ser una mazmorra de Desafío de Encantamiento.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Booleano](#boolean) | `false` |    ❌      |

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

Establece el nombre del mundo que debe ser empaquetado.

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

Esta función establece el nombre del mundo de agujero de gusano, que sirve como un mundo secundario vinculado al mundo principal. Se utiliza para características como centros de teletransporte o cámaras de jefe únicas.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
womholeWorldName: mi_mundo_minecraft_agujero_gusano
```

</div>

</details>

***

### environment

Establece el entorno del mundo.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `environment` | [Environment](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  ninguno   |    ✅      |

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

Establece la ubicación de teletransporte del paquete de mazmorra. Aquí es donde los jugadores serán teletransportados al entrar en la mazmorra.

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

Permite o evita que las explosiones dañen bloques en una mazmorra. Las explosiones se consideran explosiones de élite, por lo que cualquier daño a los bloques se regenerará en 2 minutos.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `allowExplosionBlockDamage` | [Booleano](#boolean) |  `false`   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
allowExplosionBlockDamage: true
```

</div>

</details>

</div>

#### Mazmorras instanciadas

*Las mazmorras instanciadas crean un nuevo mundo cada vez que un grupo de jugadores quiere completar una mazmorra, y lo eliminan cuando termina. Para que esto funcione correctamente, debes colocar una carpeta siguiendo el `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Luego colocas el mundo que usarás dentro de la carpeta que creaste, asegurándote de que el archivo `session.lock` del mundo sea eliminado.*

Los siguientes valores solo se aplican a las mazmorras instanciadas. Ten en cuenta que todas las mazmorras instanciadas son mazmorras de mundo, por lo que también usan los valores de las mazmorras de mundo.

<div align="center">

***

### startLocation

Establece la ubicación de teletransporte del punto de inicio de la mazmorra instanciada. Aquí es donde los jugadores serán teletransportados al iniciar la mazmorra instanciada con `/em start`.

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

Establece el permiso requerido para entrar en la instancia de la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [Cadena](#string) |  ninguno   |    ❌      |

<details>

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permission: elitedungeon.mipermiso
```

</div>

</details>

***

### minPlayerCount

Establece el número mínimo de jugadores requerido para iniciar una mazmorra.

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

Establece el número máximo de jugadores permitido en una mazmorra.

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

Establece la lista de objetivos de mazmorra requeridos para que la mazmorra se considere completada.

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de Cadenas](#string_list) |  ninguno   |    ✅      |

<details>

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente hay dos tipos de objetivos de mazmorra:

* Matar objetivo: `filename=boss.yml:amount=X`
* Matar porcentaje de mazmorra: `clearpercentage=X.Y`

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

Establece la lista de dificultades en la mazmorra instanciada.

**¡Obligatorio para mazmorras instanciadas!**

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

<summary><b>Expandir Tabla</b></summary>

<div align="center">

Establecer dificultades de mazmorra instanciada creará automáticamente diferentes opciones de dificultad al entrar en la mazmorra.

Los nombres de dificultad establecidos aquí serán los utilizados en la carpeta de jefes personalizados, donde puedes configurar qué poderes tienen los jefes según la dificultad.

Las dificultades están en formato de lista que tienen los siguientes campos:

|     Clave     | Descripción                                                                                                                                                                                                                                                    | Valores | Obligatorio |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nombre de la dificultad para los jugadores.                                                                                                                                                                                                                            |[Cadena](#string)        |     ✅     |
```Please specify the target language for the translation.