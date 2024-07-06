[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puedes encontrar información sobre las mazmorras, incluida información sobre las mazmorras prefabricadas, [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas como paquetes de eventos, paquetes de modelos, arenas, paquetes de npc, paquetes de artículos, etc.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras instanciadas!*** Las mazmorras instanciadas solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de minidungeons!*** Si haces un paquete de mazmorras, podrás implementarlo y volver a implementarlo en cualquier servidor que desees en cualquier momento y por cualquier motivo.
- ***¡Fácil de activar y desactivar!*** Siempre puedes hacer `/em setup` y activar y desactivar los paquetes de mazmorras temporal o permanentemente.
- ***¡Fácil de compartir!*** Si deseas compartir tus creaciones, los paquetes de mazmorras se pueden comprimir y enviar a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si estás interesado!
- ***¡Teletransportes!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransporte a las que se puede acceder en la página Teletransportes del menú `/em`, lo que podría ser muy útil en muchas configuraciones.

</details>

# Creando mazmorras

Los siguientes ajustes se utilizan para crear un archivo de configuración que debe ir en la carpeta `dungeonpackages`. Estos ajustes se utilizan para crear mazmorras específicamente y no son necesarios si solo quieres usar el empaquetador de mazmorras para distribuir contenido que no sea de mazmorras, como un paquete de artículos o eventos.

## Complementos necesarios

Para usar Dungeon Packager, necesitarás el siguiente complemento:

[WorldGuard](https://dev.bukkit.org/projects/worldguard): protege la minidungeon.

## Creando una mazmorra, paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas se asociaron con una construcción esquemática. Ahora están eliminados y ya no son compatibles.

Todas las mazmorras de EliteMobs ahora están basadas en el mundo.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras.

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

Establece el nombre del contenido. Admite [códigos de color](#códigos_de_color).

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [Texto](#texto) | `false` |    ✅      |

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

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo para fines informativos. Admite [códigos de color](#códigos_de_color).

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aLa mejor mazmorra'.
- '&aHecho por: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando no se descarga el contenido. Solo para fines informativos.

| Clave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [Texto](#texto) |  ninguno   |    ❌      |

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

Establece la categoría de tamaño del paquete de mazmorras. Solo para fines informativos.

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
| `LAIR`    | Las guaridas son un tipo de mazmorra pequeña que se centra en una gran pelea de jefes.  |
| `SANCTUM`    | Los santuarios son el equivalente a las guaridas instanciadas. Esto significa que se centran en una gran pelea de jefes. |
| `MINIDUNGEON`    | Las minidungeons son un tipo de mazmorra de tamaño mediano que generalmente contiene de 3 a 15 minijefes y un gran jefe, así como muchas turbas de "basura" que están destinadas a ser "farmeadas" por los jugadores para obtener monedas y equipo. |
| `DUNGEON`    | Las mazmorras son el equivalente a las minidungeons instanciadas. Este es el tipo de mazmorra MMORPG más tradicional, donde los jugadores se unen y pasan por una serie de turbas de basura y minijefes para luchar contra un jefe final. |
| `RAID`    | ¡Próximamente!|
| `ADVENTURE`    | Las aventuras son mapas de aventuras completos. Incluyen líneas de misiones, npcs, grandes cantidades de minijefes y jefes e incluso pueden contener sus propias arenas o mazmorras dentro de ellos. |
| `ARENA`    | Las arenas son áreas de supervivencia basadas en oleadas en las que los jugadores son recompensados ​​por derrotar oleadas. |
| `OTHER`    | Cualquier otra cosa que ya no entre en las categorías anteriores. |

Para descripciones más detalladas, consulta [Mazmorras]($language$/elitemobs/dungeons.md).

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
| `dungeonVersion` | [Entero](#entero) |  ninguno   |    ✅      |

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

Establece la información que aparece en el menú. Admite [códigos de color](#códigos_de_color).

*Funciona solo cuando `/em` está configurado en modo libro usando `/em alt`.*

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [Texto](#texto) |  ninguno   |    ✅      |

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

Establece el mensaje que aparece cuando un jugador entra en la zona de la mazmorra. Admite [códigos de color](#códigos_de_color).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [Texto](#texto) |  ninguno   |    ❌      |

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

Establece el mensaje que aparece cuando un jugador abandona la zona de la mazmorra. Admite [códigos de color](#códigos_de_color).

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [Texto](#texto) |  ninguno   |    ❌      |

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

**¡Obligatorio para mazmorras instanciadas!**.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [Texto](#texto) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mi_carpeta_de_mazmorras
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que la mazmorra debe mostrar en el menú EM.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `contentLevel` | [Entero](#entero) |  ninguno   |    ❌      |

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

### Paquetes de mazmorras basados ​​en el mundo

Los siguientes valores solo se aplican a las mazmorras basadas en el mundo.

<div align="center">

***

### worldName

Establece el nombre del mundo que se debe empaquetar.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `worldName` | [Texto](#texto) |  ninguno   |    ✅      |

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

Esta función establece el nombre del mundo del agujero de gusano, que sirve como un mundo secundario vinculado al mundo principal. Se utiliza para funciones como centros de teletransporte o cámaras de jefe únicas.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [Texto](#texto) |  ninguno   |    ❌      |

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

Establece la ubicación de teletransporte del paquete de mazmorras. Aquí es donde los jugadores serán teletransportados al ingresar a la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `teleportLocation` | [Texto](#texto) |  ninguno   |    ✅      |

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

Permite o evita que las explosiones dañen bloques en una mazmorra. Las explosiones se consideran explosiones de élite, por lo que cualquier daño a los bloques se regenerará en 2 minutos.

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

#### Mazmorras instanciadas

*Las mazmorras instanciadas crean un nuevo mundo cada vez que un grupo de jugadores quiere completar una mazmorra y lo elimina cuando termina. Para que esto funcione correctamente, debes colocar una carpeta siguiendo `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Luego, coloca el mundo que usarás dentro de la carpeta que creaste, asegurándote de que el archivo `session.lock` del mundo esté eliminado.*

Los siguientes valores solo se aplican a las mazmorras instanciadas. Ten en cuenta que todas las mazmorras instanciadas son mazmorras del mundo, por lo que también usan los valores de las mazmorras del mundo.

<div align="center">

***

### startLocation

Establece la ubicación de teletransporte del punto de inicio de la mazmorra instanciada. Aquí es donde los jugadores serán teletransportados al iniciar la mazmorra instanciada con `/em start`.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `startLocation` | [Texto](#texto) |  ninguno   |    ✅      |

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

Establece el permiso requerido para ingresar a la instancia de la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `permission` | [Texto](#texto) |  ninguno   |    ❌      |

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

Establece el recuento mínimo de jugadores requerido para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `minPlayerCount` | [Entero](#entero) |  `1`   |    ❌      |

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

Establece el recuento mínimo de jugadores requerido para iniciar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `maxPlayerCount` | [Entero](#entero) |   `5`   |    ❌      |

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

Establece la lista de objetivos de la mazmorra necesarios para que la mazmorra se considere completada.

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `dungeonObjectives` | [Lista de cadenas](#lista_de_cadenas) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente hay dos tipos de objetivos de mazmorras:

* Matar objetivo: `filename=jefe.yml:amount=X`
* Matar porcentaje de mazmorra: `clearpercentage=X.Y`

```yml
dungeonObjectives:
- filename=jefe_final_de_mazmorra.yml
- filename=minijefe_uno_de_mazmorra.yml
- filename=minijefe_dos_de_mazmorra.yml
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

<summary><b>Expandir tabla</b></summary>

<div align="center">

Establecer las dificultades de las mazmorras instanciadas creará automáticamente diferentes opciones de dificultad al ingresar a la mazmorra.

Los nombres de dificultad establecidos aquí serán los que se utilicen en la carpeta de jefes personalizados, donde puedes establecer qué poderes tienen los jefes en función de la dificultad.

Las dificultades están en un formato de lista que tiene los siguientes campos:

|     Clave     | Descripción                                                                                                                                                                                                                                                    | Valores | Obligatorio |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `name`    | Nombre de la dificultad para los jugadores.                                                                                                                                                                                                                            |[Texto](#texto)        |     ✅     |
|    `id`     | ID de la dificultad, utilizada en jefes personalizados y objetos personalizados para la función basada en la dificultad.                                                                                                                                                                 |[Texto](#texto)        |     ✅     |
| `levelSync` | Establece el nivel de sincronización de nivel, si lo hay. La sincronización de nivel hace que todo el equipo del jugador alcance el valor establecido como máximo, lo que hace que sea imposible que los jugadores superen el nivel de una mazmorra y la mantenga relevante para carreras posteriores. Basado en el sistema de sincronización de nivel de Final Fantasy 14. |[Entero](#entero)        |     ❌     |


</div>

</details>

</div>

***

# Valores de jefe recomendados

## Creando una mafia de mazmorra promedio

Recomendamos dejar la configuración `normalizedCombat` establecida en verdadero. Esta configuración normaliza a todas las turbas para que escalen por igual con salud y daño, independientemente de su tipo de entidad.

```yaml
normalizedCombat: true
healthMultiplier: 1.0 #4 golpes para matar
damageMultiplier: 1.0 #1.5 corazones de daño
```

Ciertamente, aquí está la versión revisada con la claridad y el formato retenidos:

**Nota: Dado que `1.0` es el valor predeterminado para la salud y el daño, puedes simplemente omitir la definición de `healthMultiplier` o `damageMultiplier` y establecer `normalizedCombat` en `true`.**

## Creando paquetes de basura

Los paquetes de basura son numerosos pero no muy peligrosos:

```yaml
normalizedCombat: true
healthMultiplier: 0.7 #3 golpes para matar
damageMultiplier: 0.5 #0.5 corazones de daño
```

## Creando refuerzos

Los refuerzos deberían morir muy fácilmente, pero representan un peligro en términos de daño (estos valores se recomiendan para más de 4 entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
normalizedCombat: true
healthMultiplier: 0.25 #1 golpe para matar
damageMultiplier: 0.6 #1 corazón de daño
```

## Creando minijefes

Los minijefes deben mantenerse firmes y plantear un desafío mecánico a los jugadores. Debe ser una prueba de habilidad que dure un poco, pero no algo extremadamente mortal:

```yaml
normalizedCombat: true
healthMultiplier: 3.0 #10 golpes para matar
damageMultiplier: 1.2 #2 corazones de daño
```

## Creando jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad con todo en juego. Los encuentros deben ser largos y la muerte debe ser una amenaza presente.

```yaml
normalizedCombat: true
healthMultiplier: 7.0 #23 golpes para matar
damageMultiplier: 1.4 #2.5 corazones de daño
```

**Estos valores recomendados son meras estimaciones aproximadas, y los valores finales deben ajustarse de acuerdo con los encuentros específicos.**

**Esto es particularmente crucial para los jefes de mazmorras finales; es posible que desees superar significativamente el valor recomendado de 7,0 para healthMultiplier para darle a la última pelea esa sensación épica.**

***

# Empaquetar contenido de EliteMobs para su distribución

Finalmente, probablemente querrás empaquetar tu mazmorra para almacenarla o distribuirla.

EliteMobs tiene un sistema de importación que permite a los administradores importar, instalar y desinstalar contenido rápidamente. [Puedes ver cómo funciona aquí.]($language$/elitemobs/setup.md)

## Recortar mundos

A veces, es posible que debas reducir el tamaño de tu mundo de Minecraft para que sea más ligero y, en consecuencia, más fácil de distribuir. Esto se puede lograr mediante el uso del [complemento WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). A pesar de que el complemento figura como compatible solo con MineCraft hasta la versión 1.19, funciona a la perfección en la última versión de MineCraft a partir del 25 de enero de 2024.

<details>
<summary>Consejo</summary>
Si lo haces por primera vez, puede ser una buena idea crear una copia de seguridad de tu mundo por si acaso algo sale mal.
</details>

Una vez que el complemento está instalado, navega hasta la mitad del mundo o el área específica que deseas recortar. Luego, ejecuta el comando `/wb set x`, donde `x` representa el tamaño aproximado del radio que deseas para tu área.

<details>
<summary>Consejo</summary>
Si <code>/wb</code> no funciona para ti, intenta <code>/worldborder:wb</code>.
</details>

Después de ejecutar este comando, vuela hasta los bordes de tu mundo para verificar que el borde del mundo se haya establecido correctamente y cubra el tamaño deseado. Reconocerás que llegas al borde del mundo cuando seas empujado hacia atrás, acompañado de un mensaje en el chat.

![trim_pic_1.jpg](../../../img/wiki/trim_pic_1.jpg)

En la imagen de arriba, nuestro objetivo es recortar el mundo alrededor de los bloques morados, dejando solo unos pocos fragmentos a su alrededor. Para lograr esto, nos paramos en medio del área púrpura en los cuadrados rojos y ejecutamos `/wb set 50`, estableciendo el borde del mundo justo más allá del área púrpura.

Luego, usamos el comando `/wb trim [freq] [pad]`, con la frecuencia establecida en 200 y el relleno en 20. El relleno determina cuántos fragmentos deben dejarse alrededor del borde del mundo (el área púrpura) y la frecuencia determina cuántos fragmentos deben procesarse por segundo. Después de ejecutar `/wb trim 200 20`, se nos pedirá que confirmemos ejecutando `/wb trim confirm`. Confirmamos la acción, y después de un tiempo, nuestro mundo se recortará, reduciendo su tamaño y haciéndolo más conveniente para la distribución.

Ahora puedes eliminar el borde del mundo usando `/wb clear all` o simplemente dejarlo si lo deseas.

## Recortar la carpeta del mundo

Hay varios archivos y carpetas ubicados en la carpeta de tu mundo que podemos descartar, ya que los complementos no los utilizan todos. Esto reducirá el tamaño de tu mundo y facilitará la distribución.

Para un entorno mundial NORMAL:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. Carpeta **region**
2. **raids.dat** desde dentro de la carpeta **data** (asegúrate de que esté colocado dentro de la carpeta **data** al copiar)
3. Archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará tu mundo correctamente para el entorno NORMAL.

Para los entornos mundiales NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. Carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de que esté colocada dentro de la carpeta **DIM-1** al copiar)
2. **raids.dat** desde dentro de la carpeta **data** (asegúrate de que esté colocado dentro de la carpeta **data** al copiar)
3. Archivo **level.dat**

Puedes eliminar de forma segura todos los demás archivos y carpetas ubicados en la carpeta del mundo. Esto configurará tu mundo correctamente para los entornos NETHER y THE_END.

## Ejecutando el comando de paquete

EliteMobs tiene el comando **`/em package <nombreDeLaMazmorra> <versión>`**. Este comando recorre todas las carpetas de configuración de EliteMobs y empaqueta automáticamente todo el contenido de las carpetas que coinciden con `nombreDeLaMazmorra` en un archivo comprimido y una carpeta normal en la carpeta `exports` de EliteMobs.

***Por esta razón, es muy recomendable que mantengas el contenido que deseas empaquetar en carpetas con el mismo nombre que el nombre de tu paquete.*** De lo contrario, tendrás que recopilar y empaquetar manualmente los archivos en la estructura de archivos para su distribución.

## Adición del archivo del paquete de mazmorras

Si estás creando una mazmorra, deberás agregar manualmente el archivo del paquete de mazmorras a la carpeta recién generada en la carpeta de exportaciones. El archivo de configuración del paquete de tu mazmorra debe seguir el formato descrito anteriormente y colocarse en una carpeta llamada `dungeonpackages`. [Consulta la estructura de archivos para obtener más información al respecto.](#estructura-de-archivos).

**¡Asegúrate de comprimir tu mazmorra una vez que hayas terminado!**

## Estructura de archivos

Si hiciste todo correctamente, la estructura de archivos debería ser similar a este ejemplo, donde llamamos a la mazmorra `mi_mazmorra_genial`:

<details>
<summary>Ejemplo de estructura de archivos de mi_mazmorra_genial</summary>

- mi_mazmorra_genial.zip
    * dungeonpackages
        * mi_mazmorra_genial.yml <- Aquí es donde va el archivo de configuración del paquete de tu mazmorra.
    * worldcontainer
        * [Tus carpetas del mundo van aquí]
    * wormholes
        * mi_mazmorra_genial
            * [Tus agujeros de gusano van aquí]
    * npcs
        * mi_mazmorra_genial
            * [Tus NPC van aquí]
    * customtreasurechests
        * mi_mazmorra_genial
            * [Tus cofres del tesoro van aquí]
    * customquests
        * mi_mazmorra_genial
            * [Tus misiones van aquí]
    * customitems
        * mi_mazmorra_genial
            * [Tus objetos personalizados van aquí]
    * custombosses
        * mi_mazmorra_genial
            * [Tus jefes personalizados van aquí]
    * customarenas
        * mi_mazmorra_genial
            * [Tus arenas personalizadas van aquí]
    * powers
        * mi_mazmorra_genial
            * [Tus poderes personalizados van aquí]
    * world_blueprints
        * mi_mazmorra_genial
            * [Tu carpeta del mundo va aquí, utilizada para mazmorras instanciadas]
    * customevents
        * mi_mazmorra_genial
            * [Tus eventos personalizados van aquí]
    * customspawns
        * mi_mazmorra_genial
            * [Tus generaciones personalizadas van aquí]
    * models
        * [Tus modelos de formato bbmodel de ModelEngine van aquí, se aceptan carpetas]

</details>

Esto permite que la mayoría de los usuarios arrastren y suelten archivos directamente en su servidor y que funcione de inmediato.

***Importante: al empaquetar para la distribución, ¡asegúrate de DESINSTALAR LA MINIDUNGEON PRIMERO! ¡No quieres distribuir minidungeons instaladas, quieres que los administradores las configuren en sus servidores!***

# Compartir paquetes de mazmorras que hayas creado con la comunidad

Discord contiene una sección [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") donde las personas pueden compartir sus creaciones de Minidungeon. ¡Siéntete libre de contribuir!

