```markdown
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puedes encontrar información sobre las mazmorras, incluyendo información sobre mazmorras prefabricadas [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas como paquetes de eventos, paquetes de modelos, arenas, paquetes de NPC, paquetes de objetos, etc.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras instanciadas!*** Las mazmorras instanciadas solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de las Minidungeons!*** Si creas un paquete de mazmorras, podrás implementarlo y volver a implementarlo en cualquier servidor que desees, en cualquier momento y por cualquier motivo.
- ***¡Fácil de activar y desactivar!*** Siempre puedes usar `/em setup` y activar y desactivar temporal o permanentemente los paquetes de mazmorras.
- ***¡Fácil de compartir!*** Si deseas compartir tus creaciones, los paquetes de mazmorras se pueden comprimir y enviar a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si estás interesado!
- ***¡Teletransportes!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransporte a las que se puede acceder en la página de Teletransportes del menú `/em`, lo que podría ser muy útil en muchas configuraciones.

</details>

# Creación de mazmorras

Las siguientes configuraciones se utilizan para crear un archivo de configuración que debe ir en la carpeta `content_packages`. Estas configuraciones se utilizan para crear mazmorras específicamente y no son necesarias si solo quieres usar el empaquetador de mazmorras para distribuir contenido que no sea de mazmorras, como un paquete de elementos o eventos.

## Complementos requeridos

Para usar el empaquetador de mazmorras, necesitarás el siguiente complemento:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege la Minidungeon

## Creación de una mazmorra paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas estaban asociadas con una construcción de esquema. Ahora están eliminadas y ya no son compatibles.

Todas las mazmorras de EliteMobs ahora están basadas en el mundo.

## Archivo pack.meta requerido

Tu paquete de mazmorras debe incluir un archivo `pack.meta`, que es simplemente un archivo `.txt` renombrado con una extensión `.meta`. Este archivo debe contener solo una palabra, que indica para qué complemento es el paquete (por ejemplo, "elitemobs", escrito en minúsculas). El archivo `pack.meta` debe estar ubicado en el directorio raíz de tu paquete, junto con todas las demás carpetas.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras

<div align="center">

### isEnabled

Establece si el paquete de mazmorras está habilitado.

| Clave         |      Valores      | Predeterminado | Obligatorio |
|-------------|:-----------------:|:------------:|:-----------:|
| `isEnabled` | [Booleano](#boolean) |    `false`   |     ✅      |

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

| Clave  |      Valores      | Predeterminado | Obligatorio |
|--------|:-----------------:|:--------------:|:-----------:|
| `name` | [Cadena](#string) |    `false`     |      ✅      |

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

| Clave                 |        Valores        | Predeterminado | Obligatorio |
|-----------------------|:---------------------:|:--------------:|:-----------:|
| `dungeonLocationType` | `WORLD` / `INSTANCED` |    ninguno     |      ✅      |

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

| Clave         |                   Valores                    | Predeterminado | Obligatorio |
|---------------|:--------------------------------------------:|:--------------:|:-----------:|
| `contentType` | `OPEN_DUNGEON` / `INSTANCED_DUNGEON` / `HUB` |    ninguno     |      ✅      |

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

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo para fines informativos.
Admite [códigos de color](#color_codes).

| Clave        |             Valores              | Predeterminado | Obligatorio |
|--------------|:--------------------------------:|:--------------:|:-----------:|
| `customInfo` | [Lista de cadenas](#string_list) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aLa mejor mazmorra.'
- '&aHecha por: JugadorGenial'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando el contenido no está descargado. Solo para fines informativos.

| Clave          |      Valores      | Predeterminado | Obligatorio |
|----------------|:-----------------:|:--------------:|:-----------:|
| `downloadLink` | [Cadena](#string) |    ninguno     |      ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
downloadLink: http://www.ejemplo.org
```

<div align="center">

![create_packager_downloadlink.jpg](../../../img/wiki/create_packager_downloadlink.jpg)

</div>

</div>

</details>

***

### dungeonSizeCategory

Establece la categoría de tamaño del paquete de mazmorras. Solo para fines informativos.

| Clave                 |   Valores    | Predeterminado | Obligatorio |
|-----------------------|:------------:|:--------------:|:-----------:|
| `dungeonSizeCategory` | Especial [1] |    ninguno     |      ✅      |

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

| Clave         | Descripción                                                                                                                                                                                                                                             |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`        | Las guaridas son un tipo de mazmorra pequeña que se centra en una gran pelea contra un jefe.                                                                                                                                                            |
| `SANCTUM`     | Los santuarios son el equivalente a guaridas instanciadas. Esto significa que se centran en una gran pelea contra un jefe.                                                                                                                              |
| `MINIDUNGEON` | Las minidungeons son un tipo de mazmorra de tamaño mediano que generalmente contiene de 3 a 15 minibosses y un gran jefe, así como muchos mobs "basura" que están destinados a ser "farmados" para obtener monedas y equipo por parte de los jugadores. |
| `DUNGEON`     | Las mazmorras son el equivalente a minidungeons instanciadas. Este es el tipo de mazmorra MMORPG más tradicional, donde los jugadores se agrupan y atraviesan una serie de mobs basura y minibosses para luchar contra un jefe final.                   |
| `RAID`        | ¡Próximamente!                                                                                                                                                                                                                                          |
| `ADVENTURE`   | Las aventuras son mapas de aventura completos. Incluyen líneas de misiones, NPC, grandes cantidades de minibosses y jefes e incluso pueden contener sus propias arenas o mazmorras dentro de ellos.                                                     |
| `ARENA`       | Las arenas son áreas de supervivencia basadas en oleadas en las que los jugadores son recompensados por derrotar oleadas.                                                                                                                               |
| `OTHER`       | Cualquier otra cosa que no caiga en las categorías anteriores.                                                                                                                                                                                          |

Para obtener descripciones más detalladas, consulta [Mazmorras]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Establece si el paquete de mazmorras debe estar protegido por WorldGuard.

| Clave     |       Valores        | Predeterminado | Obligatorio |
|-----------|:--------------------:|:--------------:|:-----------:|
| `protect` | [Booleano](#boolean) |     `true`     |      ❌      |

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

| Clave            |      Valores       | Predeterminado | Obligatorio |
|------------------|:------------------:|:--------------:|:-----------:|
| `dungeonVersion` | [Entero](#integer) |    ninguno     |      ✅      |

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

Establece la información que aparece en el menú. Admite [códigos de color](#colorcodes).

*Solo funciona cuando el `/em` está configurado en modo libro usando `/em alt`.*

| Clave        |      Valores      | Predeterminado | Obligatorio |
|--------------|:-----------------:|:--------------:|:-----------:|
| `playerInfo` | [Cadena](#string) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificultad: &a¡Contenido fácil para 1 jugador!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Establece el mensaje que aparece cuando un jugador entra en la zona de la mazmorra.
Admite [códigos de color](#colorcodes).

| Clave                |      Valores      | Predeterminado | Obligatorio |
|----------------------|:-----------------:|:--------------:|:-----------:|
| `regionEnterMessage` | [Cadena](#string) |    ninguno     |      ❌      |

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

Establece el mensaje que aparece cuando un jugador sale de la zona de la mazmorra.
Admite [códigos de color](#colorcodes).

| Clave                |      Valores      | Predeterminado | Obligatorio |
|----------------------|:-----------------:|:--------------:|:-----------:|
| `regionLeaveMessage` | [Cadena](#string) |    ninguno     |      ❌      |

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

Establece si el paquete de mazmorras tiene modelos personalizados (para ModelEngine o FreeMinecraftModels).

| Clave             |       Valores        | Predeterminado | Obligatorio |
|-------------------|:--------------------:|:--------------:|:-----------:|
| `hasCustomModels` | [Booleano](#boolean) |    ninguno     |      ❌      |

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

| Clave                     |      Valores      | Predeterminado | Obligatorio |
|---------------------------|:-----------------:|:--------------:|:-----------:|
| `dungeonConfigFolderName` | [Cadena](#string) |    ninguno     |      ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mi_carpeta_de_mazmorra
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que la mazmorra debe mostrar en el menú EM.

| Clave          |      Valores       | Predeterminado | Obligatorio |
|----------------|:------------------:|:--------------:|:-----------:|
| `contentLevel` | [Entero](#integer) |    ninguno     |      ❌      |

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

| Clave                  |       Valores        | Predeterminado | Obligatorio |
|------------------------|:--------------------:|:--------------:|:-----------:|
| `enchantmentChallenge` | [Booleano](#boolean) |    `false`     |      ❌      |

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

| Clave       |      Valores      | Predeterminado | Obligatorio |
|-------------|:-----------------:|:--------------:|:-----------:|
| `worldName` | [Cadena](#string) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
worldName: mi_mundo_de_minecraft
```

</div>

</details>

***

### womholeWorldName

Esta función establece el nombre del mundo de agujero de gusano, que sirve como un mundo secundario vinculado al mundo
principal. Se utiliza para funciones como centros de teletransporte o cámaras de jefes únicos.

| Clave              |      Valores      | Predeterminado | Obligatorio |
|--------------------|:-----------------:|:--------------:|:-----------:|
| `womholeWorldName` | [Cadena](#string) |    ninguno     |      ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
womholeWorldName: mi_mundo_de_minecraft_agujero_de_gusano
```

</div>

</details>

***

### environment

Establece el entorno del mundo.

| Clave         |                                        Valores                                        | Predeterminado | Obligatorio |
|---------------|:-------------------------------------------------------------------------------------:|:--------------:|:-----------:|
| `environment` | [Entorno](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |    ninguno     |      ✅      |

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

Establece la ubicación de teletransporte del paquete de mazmorras. Aquí es donde los jugadores serán teletransportados
al entrar en la mazmorra.

| Clave              |      Valores      | Predeterminado | Obligatorio |
|--------------------|:-----------------:|:--------------:|:-----------:|
| `teleportLocation` | [Cadena](#string) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
teleportLocation: mi_mundo_de_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

***

### allowExplosionBlockDamage

Permite o impide que las explosiones dañen los bloques en una mazmorra. Las explosiones se consideran explosiones de
élite, por lo que cualquier daño a los bloques se regenerará en 2 minutos.

| Clave                       |       Valores        | Predeterminado | Obligatorio |
|-----------------------------|:--------------------:|:--------------:|:-----------:|
| `allowExplosionBlockDamage` | [Booleano](#boolean) |    `false`     |      ❌      |

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

*Las mazmorras instanciadas crean un nuevo mundo cada vez que un grupo de jugadores quiere completar una mazmorra y lo
elimina cuando termina. Para que esto funcione correctamente, debes colocar una carpeta
siguiendo `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Luego, coloca el mundo que usarás dentro de la carpeta que creaste, asegurándote de que se elimine el
archivo `session.lock` del mundo.*

Los siguientes valores solo se aplican a las mazmorras instanciadas. Ten en cuenta que todas las mazmorras instanciadas
son mazmorras de mundo, por lo que también usan los valores de las mazmorras de mundo.

<div align="center">

***

### startLocation

Establece la ubicación de teletransporte del punto de inicio de la mazmorra instanciada. Aquí es donde los jugadores
serán teletransportados al iniciar la mazmorra instanciada con `/em start`.

| Clave           |      Valores      | Predeterminado | Obligatorio |
|-----------------|:-----------------:|:--------------:|:-----------:|
| `startLocation` | [Cadena](#string) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
startLocation: mi_mundo_de_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permission

Establece el permiso requerido para entrar en la instancia de la mazmorra.

| Clave        |      Valores      | Predeterminado | Obligatorio |
|--------------|:-----------------:|:--------------:|:-----------:|
| `permission` | [Cadena](#string) |    ninguno     |      ❌      |

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

Establece el número mínimo de jugadores necesarios para iniciar una mazmorra.

| Clave            |      Valores       | Predeterminado | Obligatorio |
|------------------|:------------------:|:--------------:|:-----------:|
| `minPlayerCount` | [Entero](#integer) |      `1`       |      ❌      |

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

Establece el número mínimo de jugadores necesarios para iniciar una mazmorra.

| Clave            |      Valores       | Predeterminado | Obligatorio |
|------------------|:------------------:|:--------------:|:-----------:|
| `maxPlayerCount` | [Entero](#integer) |      `5`       |      ❌      |

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

Establece la lista de objetivos de la mazmorra necesarios para que se considere que la mazmorra está completada.

| Clave               |             Valores              | Predeterminado | Obligatorio |
|---------------------|:--------------------------------:|:--------------:|:-----------:|
| `dungeonObjectives` | [Lista de cadenas](#string_list) |    ninguno     |      ✅      |

<details> 

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente hay dos tipos de objetivos de mazmorra:

* Matar objetivo: `nombre_de_archivo=boss.yml:cantidad=X`
* Matar porcentaje de la mazmorra: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- nombre_de_archivo=dungeon_final_boss.yml
- nombre_de_archivo=dungeon_miniboss_one.yml
- nombre_de_archivo=dungeon_miniboss_two.yml
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

| Clave          |   Valores    | Predeterminado | Obligatorio |
|----------------|:------------:|:--------------:|:-----------:|
| `difficulties` | Especial [1] |    ninguno     |      ❌      |

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
  name: difícil
- levelSync: 15
  id: 2
  name: mítico
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

Configurar las dificultades de las mazmorras instanciadas creará automáticamente diferentes opciones de dificultad al
entrar en la mazmorra.

Los nombres de dificultad establecidos aquí serán los que se utilicen en la carpeta de jefes personalizados, donde
puedes establecer qué poderes tienen los jefes en función de la dificultad.

Las dificultades están en formato de lista que tiene los siguientes campos:

|    Clave    | Descripción                                                                                                                                                                                                                                                                                                                                                             | Valores            | Obligatorio |
|:-----------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------|:-----------:|
|   `name`    | Nombre de la dificultad para los jugadores.                                                                                                                                                                                                                                                                                                                             | [Cadena](#string)  |      ✅      |
|    `id`     | ID de la dificultad, utilizado en jefes personalizados e ítems personalizados para la función basada en la dificultad.                                                                                                                                                                                                                                                  | [Cadena](#string)  |      ✅      |
| `levelSync` | Establece el nivel de la sincronización de nivel, si existe. La sincronización de nivel hace que todo el equipo del jugador alcance el valor establecido, lo que hace imposible que los jugadores se sobrepasen de nivel para una mazmorra y la mantiene relevante para ejecuciones posteriores. Basado en el sistema de sincronización de niveles de Final Fantasy 14. | [Entero](#integer) |      ❌      |

</div>

</details>

</div>

***

## Usando el archivo de paquete de mazmorras meta_pack.yml para mazmorras grandes.

```
A veces, es posible que estés trabajando en una mazmorra grande que incluye otras mazmorras más pequeñas dentro de sí misma, lo que permite a los jugadores viajar entre ellas a través del mundo principal de la mazmorra. Un gran ejemplo de esto es la Mazmorra de Aventura Primis de EliteMobs.

Primis presenta un vasto mundo donde los jugadores pueden explorar y completar misiones, pero también incluye dos mazmorras instanciadas dentro de su mundo, una de las cuales sirve como la pelea final contra el jefe. En casos como este, habrá varios archivos de paquetes de mazmorras, aunque todos pertenezcan a la misma mazmorra general.

Para administrar esto, usamos un archivo de metapaquete de mazmorras. Este archivo actúa como un directorio central, especificando la mazmorra principal y enumerando todo el contenido adicional de mazmorras asociado a ella.

Echemos un vistazo más de cerca a cómo está estructurado el metapaquete de mazmorras de Primis:

```yaml
isEnabled: true
name: '&2[000-020] ¡La aventura de Primis!'
customInfo:
- La aventura tutorial para jugadores
- ¡Nuevos en EliteMobs!
downloadLinkV2: https://discord.gg/9f5QSka
dungeonSizeCategory: LAIR
environment: NORMAL
protect: true
contentType: META_PACKAGE
containedPackages:
- primis_adventure.yml
- primis_blood_temple_sanctum.yml
- primis_gladius_invasion_dungeon.yml
setupMenuDescription:
- '&2¡Una aventura tutorial suave para jugadores entre los niveles 0 y 20!'
- '&2Las aventuras son mapas masivos con misiones,'
- '&2muchos jefes y NPC, ¡entre otras cosas!'
- '&2¡También tiene modelos personalizados!'
dungeonVersion: 21 #agregado archivo de metapaquete de mazmorras
```

Como puedes ver, el archivo de metapaquete de mazmorras es muy similar a un paquete de mazmorras normal, con algunas
diferencias clave. El `contentType:` está configurado en `META_PACKAGE`, y hay una configuración adicional
llamada `containedPackages:`. Esta configuración enumera todos los demás paquetes de mazmorras que forman parte de la
mazmorra más grande.

Al crear tu metapaquete, asegúrate de incluir la configuración `containedPackages:` y enumerar cada paquete de mazmorras
que forme parte de tu mazmorra más grande. Esto asegura que todo esté correctamente vinculado y organizado dentro de la
estructura general.

Al controlar las versiones de tu mazmorra, todas las versiones deben administrarse a través del metapaquete. Esto se
debe a que el metapaquete sirve como el paquete principal que determina la versión de toda la mazmorra y también es el
paquete que se utiliza para mostrar información en el menú `/em setup`.

Ten en cuenta que las mazmorras individuales enumeradas en el metapaquete aún pueden aparecer en el menú `/em teleport`.
Para evitar esto, deberás deshabilitar manualmente las opciones de teletransporte para cada una de esas mazmorras en sus
respectivos archivos de configuración.

Por ejemplo, en el caso de la mazmorra Primis:

Deshabilita las entradas de teletransporte en el menú para `primis_blood_temple_sanctum.yml`
y `primis_gladius_invasion_dungeon.yml`.
Deja habilitadas las opciones de teletransporte para `primis_adventure.yml`, ya que este sirve como el centro principal
donde los jugadores comienzan su viaje y acceden a las otras mazmorras.
Esta configuración garantiza una experiencia fluida para los jugadores al tiempo que mantiene la estructura y la
funcionalidad adecuadas para el sistema de mazmorras.

Al nombrar el archivo, recomendamos la siguiente convención de nomenclatura:

`tu_nombre_de_mazmorra_meta_pack.yml`

***

# Valores de jefe recomendados

## Creación de un mob de mazmorra promedio

Recomendamos dejar la configuración normalizedCombat establecida en true. Esta configuración normaliza a todos los mobs
para que se escalen por igual con la salud y el daño, independientemente de su tipo de entidad.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corazones de daño
```

Ciertamente, aquí está la versión revisada con claridad y formato conservados:

**Nota: Dado que `1.0` es el valor predeterminado para la salud y el daño, simplemente puedes omitir la definición
de `healthMultiplier` o `damageMultiplier` y establecer `normalizedCombat` en `true`.**

## Creación de paquetes de basura

Los paquetes de basura son numerosos, pero no muy peligrosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Creación de refuerzos

Los refuerzos deben morir muy fácilmente, pero representan un peligro en cuanto al daño (estos valores se recomiendan
para más de 4 entidades de combate cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 corazón de daño
```

## Creación de minibosses

Los minibosses deben mantener su posición y representar un desafío mecánico para los jugadores. Debe ser una prueba de
habilidad que dure un poco, pero no algo extremadamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corazones de daño
```

## Creación de jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad
con todo en juego. Los encuentros deben ser largos y la muerte debe ser una amenaza presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corazones de daño
```

**Estos valores recomendados son solo estimaciones aproximadas, y los valores finales deben ajustarse de acuerdo con los
encuentros específicos.**

**Esto es particularmente crucial para los jefes finales de la mazmorra; es posible que desees superar
significativamente el valor recomendado de 7.0 para healthMultiplier para darle a la última pelea esa sensación épica.**

***

# Empaquetado de contenido de EliteMobs para distribución

Finalmente, probablemente querrás empaquetar tu mazmorra para almacenarla o para distribuirla.

EliteMobs tiene un sistema de importación que permite a los administradores importar, instalar y desinstalar contenido
rápidamente. [Puedes ver cómo funciona aquí.]($language$/elitemobs/setup.md)

## Recortar mundos

A veces, es posible que necesites reducir el tamaño de tu mundo de Minecraft para que sea más ligero y, en consecuencia,
más fácil de distribuir. Esto se puede lograr mediante el uso
del [complemento WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). A pesar de que el complemento
aparece como compatible solo con MineCraft hasta la versión 1.19, funciona a la perfección en la última versión de
MineCraft a partir del 25 de enero de 2024.

<details>
<summary>Consejo</summary>
Si estás haciendo esto por primera vez, podría ser una buena idea crear una copia de seguridad de tu mundo por si algo sale mal.
</details>

Una vez que el complemento esté instalado, navega hasta el centro del mundo o el área específica que deseas recortar.
Luego, ejecuta el comando `/wb set x`, donde `x` representa el tamaño del radio aproximado que deseas para tu área.

<details>
<summary>Consejo</summary>
Si <code>/wb</code> no funciona para ti, prueba con <code>/worldborder:wb</code>.
</details>

Después de ejecutar este comando, vuela a los bordes de tu mundo para verificar que el borde del mundo se haya
establecido correctamente y cubra el tamaño deseado. Reconocerás que has llegado al borde del mundo cuando te empujen
hacia atrás, acompañado de un mensaje en el chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

En la imagen de arriba, nuestro objetivo es recortar el mundo alrededor de los bloques morados, dejando solo unos pocos
fragmentos alrededor de ellos. Para lograr esto, nos colocamos en medio del área morada en los cuadrados rojos y
ejecutamos `/wb set 50`, estableciendo el borde del mundo justo más allá del área morada.

Luego, usamos el comando `/wb trim [freq] [pad]`, con la frecuencia establecida en 200 y el pad en 20. El pad determina
cuántos fragmentos se deben dejar alrededor del borde del mundo (el área morada), y la frecuencia determina cuántos
fragmentos se deben procesar por segundo. Después de ejecutar `/wb trim 200 20`, se nos pedirá que confirmemos
ejecutando `/wb trim confirm`. Confirmamos la acción y, después de un tiempo, nuestro mundo se recortará, reduciendo su
tamaño y haciéndolo más conveniente para la distribución.

Ahora puedes eliminar el borde del mundo usando `/wb clear all` o simplemente dejarlo si lo deseas.

## Recortar la carpeta del mundo

Hay varios archivos y carpetas ubicados en la carpeta de tu mundo que podemos descartar, ya que los complementos no los
usan todos. Esto reducirá el tamaño de tu mundo y hará que sea más fácil de distribuir.

Para un entorno mundial NORMAL:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. carpeta **region**
2. **raids.dat** de dentro de la carpeta **data** (asegúrate de colocarlo dentro de la carpeta **data** al copiar)
3. archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará
tu mundo correctamente para el entorno NORMAL.

Para los entornos mundiales NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de colocarla dentro de la carpeta **DIM-1** al copiar)
2. **raids.dat** de dentro de la carpeta **data** (asegúrate de colocarlo dentro de la carpeta **data** al copiar)
3. archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará
tu mundo correctamente para los entornos NETHER y THE_END.

## Ejecutar el comando de paquete

EliteMobs tiene el comando **`/em package <nombreDeMazmorra> <versión>`**. Este comando recorre todas las carpetas de
configuración de EliteMobs y empaqueta automáticamente todo el contenido en carpetas que coincidan con
el `nombreDeMazmorra` en un archivo comprimido y una carpeta normal en la carpeta `exports` de EliteMobs.

***Por este motivo, se recomienda encarecidamente que mantengas el contenido que deseas empaquetar en carpetas con el
mismo nombre que el nombre de tu paquete.*** De lo contrario, tendrás que recopilar y empaquetar manualmente los
archivos en la estructura de archivos para la distribución.

## Agregar el archivo de paquete de mazmorras

Si estás creando una mazmorra, deberás agregar manualmente el archivo de paquete de mazmorras a la carpeta recién
generada en la carpeta de exportaciones. Tu archivo de configuración de paquete de mazmorras debe seguir el formato
descrito anteriormente y colocarse en una carpeta
llamada `content_packages`. [Consulta la estructura de archivos para obtener más información al respecto.](#file-structure).

**¡Asegúrate de comprimir tu mazmorra una vez que hayas terminado!**

## Estructura de archivos

Si hiciste todo correctamente, la estructura de archivos debería ser similar a este ejemplo, donde llamamos a la
mazmorra `mi_mazmorra_genial`:

<details>
<summary>Ejemplo de estructura de archivos de mi_mazmorra_genial</summary>

- mi_mazmorra_genial.zip
    * content_packages
        * mi_mazmorra_genial.yml <- Aquí es donde va tu archivo de configuración de paquete de mazmorras
    * worldcontainer
        * [Aquí van tus carpetas de mundo]
    * wormholes
        * mi_mazmorra_genial
            * [Aquí van tus agujeros de gusano]
    * npcs
        * mi_mazmorra_genial
            * [Aquí van tus NPC]
    * customtreasurechests
        * mi_mazmorra_genial
            * [Aquí van tus cofres del tesoro]
    * customquests
        * mi_mazmorra_genial
            * [Aquí van tus misiones]
    * customitems
        * mi_mazmorra_genial
            * [Aquí van tus objetos personalizados]
    * custombosses
        * mi_mazmorra_genial
            * [Aquí van tus jefes personalizados]
    * customarenas
        * mi_mazmorra_genial
            * [Aquí van tus arenas personalizadas]
    * powers
        * mi_mazmorra_genial
            * [Aquí van tus poderes personalizados]
    * world_blueprints
        * mi_mazmorra_genial
            * [Aquí va tu carpeta de mundo, utilizada para mazmorras instanciadas]
    * customevents
        * mi_mazmorra_genial
            * [Aquí van tus eventos personalizados]
    * customspawns
        * mi_mazmorra_genial
            * [Aquí van tus desoves personalizados]
    * models
        * [Aquí van tus modelos en formato bbmodel de ModelEngine, acepta carpetas]

</details>

Esto permite que la mayoría de los usuarios arrastren y suelten archivos directamente en su servidor y que funcione de
inmediato.

***Importante: cuando empaquetes para la distribución, ¡asegúrate de DESINSTALAR LA MINIDUNGEON PRIMERO! No quieres
distribuir minidungeons instaladas, ¡quieres que los administradores las configuren en sus servidores!***

# Compartir paquetes de mazmorras que has creado con la comunidad

Discord contiene una sección [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") donde la gente
puede compartir sus creaciones de Minidungeon. ¡Siéntete libre de contribuir!
