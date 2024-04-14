[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# ¿Qué son las mazmorras?

Puede encontrar información sobre las mazmorras, incluida información sobre las mazmorras preconstruidas [aquí]($language$/elitemobs/dungeons.md).

***

# ¿Qué es el empaquetador de mazmorras?

El empaquetador de mazmorras permite a los administradores no solo crear y empaquetar mazmorras, sino también empaquetar cualquier tipo de contenido de EliteMobs. Esto incluye cosas como paquetes de eventos, paquetes de modelos, arenas, paquetes de npc, paquetes de artículos y así sucesivamente.

<details>

<summary>¿Por qué usar paquetes de mazmorras?</summary>

- ***¡Mazmorras instanciadas!*** Las mazmorras instanciadas solo se pueden crear a través del sistema de paquetes de mazmorras.
- ***¡Copias de seguridad seguras de Mini mazmorras!*** Si haces un paquete de mazmorras, podrás implementarlo y volver a implementarlo en cualquier servidor que desees en cualquier momento y por cualquier motivo.
- ***¡Fácil de apagar y encender!*** Siempre puedes hacer `/em setup` para apagar y encender temporal o permanentemente los paquetes de mazmorras.
- ***¡Fácil de compartir!*** Si deseas compartir tus creaciones, los paquetes de mazmorras pueden ser comprimidos y enviados a otras personas. ¡Hay una sala de Discord dedicada a las creaciones de la comunidad si estás interesado!
- ***¡Teletransportes!*** Los paquetes de mazmorras crean automáticamente ubicaciones de teletransporte que se pueden acceder en la página de Teleportes del menú `/em`, lo cual podría ser muy útil en muchas configuraciones.

</details>

# Creando Mazmorras

Se usan las siguientes configuraciones para crear un archivo de configuración que debería ir en la carpeta `dungeonpackages`. Estas configuraciones se usan para crear mazmorras específicamente, y no son necesarias si solo quieres usar el empaquetador de mazmorras para distribuir contenido no de mazmorras, como un paquete de artículos o eventos.

## Plugins requeridos

Para utilizar el Empaquetador de Mazmorras, necesitarás el siguiente plugin:

[WorldGuard](https://dev.bukkit.org/projects/worldguard) - protege la Mini mazmorra

## Creando una mazmorra, paso a paso

EliteMobs solía tener dos tipos principales de mazmorras: basadas en el mundo y basadas en esquemas.

Las mazmorras basadas en esquemas estaban asociadas a una construcción de esquemas. Ahora están eliminadas y ya no se admiten.

Todas las mazmorras de EliteMobs son ahora basadas en el mundo.

***

### Valores globales

Los siguientes valores se aplican a todas las mazmorras

<div align="center">

### isEnabled

Establece si el paquete de la mazmorra está habilitado.

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `isEnabled` | [Booleano](#booleano) | `falso` |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
isEnabled: verdadero
```

</div>

</details>

***

### nombre

Establece el nombre del contenido. Soporta [Códigos de Color](#color_codes).

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `name` | [Cadena](#string) | `falso` |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
name: '&c[nivel 999] &aLa Mazmorra Verde'
```

<div align="center">

![create_packager_name.jpg](../../../img/wiki/create_packager_name.jpg)

</div>

</div>

</details>

***

### dungeonLocationType

Establece el tipo de ubicación que utiliza la mazmorra.

| Key         |      Values       | Default | Mandatory |
|-------------|:-----------------:|:-------:|:---------:|
| `dungeonLocationType` | `MUNDO` / `INSTANCIADO` |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonLocationType: MUNDO
```

</div>

</details>

***

### contentType

Establece el tipo de mazmorra.

| Key         |      Values             | Default | Mandatory |
|-------------|:----------------------:|:-------:|:---------:|
| `contentType` | `MAZMORRA_ABIERTA` / `MAZMORRA_INSTANCIADA` / `CENTRAL` |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
contentType: MAZMORRA_INSTANCIADA
```
</div>

</details>

***

### customInfo

Establece la información adicional que aparecerá en la pantalla `/em setup`. Solo para fines informativos. Soporta [Códigos de Color](#color_codes).

| Llave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `customInfo` | [Lista de cadenas](#string_list) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
customInfo:
- '&aEl mejor calabozo.'
- '&aCreado por: CoolPlayer'
```

<div align="center">

![create_packager_custominfo.jpg](../../../img/wiki/create_packager_custominfo.jpg)

</div>

</div>

</details>

***

### downloadLink

Establece el enlace de descarga cuando el contenido no se descarga. Solo para fines informativos.

| Llave         |      Valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `downloadLink` | [Cadena](#string) |  ninguno   |    ❌      |

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

Establece la categoría de tamaño del paquete de calabozo. Solo para fines informativos.

| Llave         |   valores    | Predeterminado | Obligatorio |
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

<summary><b>Expandir Tabla</b></summary>

<div align="center">

| Llave | Descripción                                                                                                                                         |
|-----|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `LAIR`    | Las guaridas son un tipo de calabozo pequeño que se enfoca en una gran pelea de jefes.  |
| `SANCTUM` | Los sanctums son el equivalente de las guaridas instanciadas. Esto significa que se centran en una gran pelea de jefes. |
| `MINIDUNGEON` | Los minidungeons son un tipo de calabozo de tamaño medio que generalmente contiene de 3 a 15 minibosses y un jefe grande, además de un montón de mobs "basura" que están destinados a ser "farmeados" por monedas y equipo por los jugadores. |
| `DUNGEON` | Los calabozos son el equivalente de minidungeons instanciados. Este es el tipo de calabozo más tradicional de MMORPG, donde los jugadores se agrupan y atraviesan un gauntlet de mobs basura y minibosses para luchar contra un jefe final. |
| `RAID` | ¡Próximamente! |
| `ADVENTURE` | Las aventuras son mapas de aventura completos. Incluyen líneas de misiones, NPC, una gran cantidad de minibosses y jefes e incluso pueden contener sus propias arenas o calabozos dentro de ellos. |
| `ARENA` | Las arenas son áreas de supervivencia basadas en olas en las que los jugadores son recompensados por derrotar olas. |
| `OTHER` | Cualquier otra cosa que no caiga en las categorías anteriores. |

Para descripciones más detalladas, vea [Calabozos]($language$/elitemobs/dungeons.md)

</div>

</details>

***

### protect

Establece si el paquete de calabozo debe estar protegido por WorldGuard.

| Llave         |      valores       | Predeterminado | Obligatorio |
|-------------|:-----------------:|:-------:|:---------:|
| `protect` | [Booleano](#boolean) |  `verdadero`   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
protect: verdadero
```

</div>

</details>

***

### dungeonVersion

Establece la versión del paquete de calabozo.

| Llave         |  Valores  | Predeterminado | Obligatorio |
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

Establece la info que aparece en el menú. Soporta [Códigos de Color](#colorcodes).

*Funciona solo cuando el `/em` está configurado en modo libro usando `/em alt`.*

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `playerInfo` | [Cadena](#string) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
playerInfo: 'Dificultad: ¡&a1-hombre contenido fácil!'
```

<div align="center">

![create_packager_playerinfo.jpg](../../../img/wiki/create_packager_playerinfo.jpg)

</div>

</div>

</details>

***

### regionEnterMessage

Establece el mensaje que aparece cuando un jugador entra en la zona del calabozo. Soporta [Códigos de Color](#colorcodes).

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionEnterMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionEnterMessage: '&a¡Has entrado al calabozo!'
```

<div align="center">

![create_packager_enter.jpg](../../../img/wiki/create_packager_enter.jpg)

</div>

</div>

</details>

***

### regionLeaveMessage

Establece el mensaje que aparece cuando un jugador sale de la zona del calabozo. Soporta [Códigos de Color](#colorcodes).

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `regionLeaveMessage` | [Cadena](#string) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
regionLeaveMessage: '&a¡Has salido del calabozo!'
```

<div align="center">

![create_packager_leave.jpg](../../../img/wiki/create_packager_leave.jpg)

</div>

</div>

</details>

***

### hasCustomModels

Establece si el paquete de calabozo tiene modelos personalizados (para ModelEngine).

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `hasCustomModels` | [Booleano](#boolean) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
hasCustomModels: falso
```

</div>

</details>

***

### dungeonConfigFolderName

Establece el nombre de las carpetas usadas para los archivos asociados a este calabozo.

**¡Obligatorio para calabozos instanciados!**

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `dungeonConfigFolderName` | [Cadena](#string) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
dungeonConfigFolderName: mi_carpeta_calabozo
```

</div>

</details>

***

### contentLevel

Establece el nivel de contenido que debería mostrarse en el menú EM.

| Llave         |  Valores  | Predeterminado | Obligatorio |
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

Establece si el calabozo debería ser un calabozo de Desafío de Encantamiento.

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `enchantmentChallenge` | [Booleano](#boolean) | `falso` |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
enchantmentChallenge: falso
```

</div>

</details>

</div>

***

### Paquetes de calabozos basados en mundos

Los siguientes valores solo se aplican a los calabozos basados en mundos.

<div align="center">

***

### worldName

Establece el nombre del mundo que debería ser empaquetado.

| Llave         |  Valores  | Predeterminado | Obligatorio |
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

Esta función establece el nombre del mundo de agujero de gusano, que sirve como un segundo mundo vinculado al mundo principal. Se utiliza para características como los hubs de teletransporte o las cámaras únicas de los jefes.

| Llave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `womholeWorldName` | [Cadena](#string) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
womholeWorldName: mi_mundo_minecraft_gusano
```

</div>

</details>

***

### ambiente

Establece el ambiente del mundo.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `ambiente` | [Ambiente](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/World.Environment.html) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
ambiente: NORMAL
```

</div>

</details>

***

### ubicaciónTeletransporte

Establece la ubicación de teletransporte del paquete de mazmorra. Aquí es donde los jugadores serán teletransportados cuando entren a la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `ubicaciónTeletransporte` | [String](#string) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
ubicaciónTeletransporte: mi_mundo_minecraft,-1.5,68,0.5,0.0,0.0
```

</div>

</details>

</div>

#### Mazmorras instanciadas

*Las mazmorras instanciadas crean un nuevo mundo cada vez que un grupo de jugadores quiere completar una mazmorra, y lo borran cuando terminan. Para que esto funcione correctamente, debes poner una carpeta siguiendo el `dungeonConfigFolderName` en la carpeta de configuración `world_blueprints` de EliteMobs.*

*Entonces colocas el mundo que vas a usar dentro de la carpeta que creaste, asegurándote de que el archivo `session.lock` del mundo se borre.*

Los siguientes valores solo se aplican a mazmorras instanciadas. Tenga en cuenta que todas las mazmorras instanciadas son mazmorras del mundo, por lo que también utilizan los valores de las mazmorras del mundo.

<div align="center">

***

### ubicaciónInicio

Establece la ubicación de teletransporte del punto de inicio de la mazmorra instanciada. Aquí es donde los jugadores serán teletransportados cuando comiencen la mazmorra instanciada con `/em start`.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `ubicaciónInicio` | [String](#string) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
ubicaciónInicio: mi_mundo_minecraft,10.5,70,10.5,0.0,0.0
```

</div>

</details>

***

### permiso

Establece el permiso necesario para entrar en la instancia de la mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `permiso` | [String](#string) |  ninguno   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
permiso: elitedungeon.mipermiso
```

</div>

</details>

***

### minimoJugadores

Establece el conteo mínimo de jugadores requerido para comenzar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `minimoJugadores` | [Integer](#integer) |  `1`   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
minimoJugadores: 1
```

</div>

</details>

***

### maximoJugadores

Establece el conteo máximo de jugadores requerido para comenzar una mazmorra.

| Clave         |  Valores  | Predeterminado | Obligatorio |
|-------------|:--------:|:-------:|:---------:|
| `maximoJugadores` | [Integer](#integer) |   `5`   |    ❌      |

<details> 

<summary><b>Ejemplo</b></summary>

<div align="left">

```yml
maximoJugadores: 5
```

</div>

</details>

***

### objetivosMazmorra

Establece la lista de objetivos de la mazmorra requeridos para que se considere completada la mazmorra.

| Clave         |           Valores            | Predeterminado | Obligatorio |
|-------------|:---------------------------:|:-------:|:---------:|
| `objetivosMazmorra` | [Lista de strings](#string_list) |  ninguno   |    ✅      |

<details> 

<summary><b>Ejemplos</b></summary>

<div align="left">

Actualmente existen dos tipos de objetivos de mazmorra:

* Matar objetivo: `filename=boss.yml:amount=X`
* Matar porcentaje de mazmorra: `clearpercentage=X.Y`

```yml
objetivosMazmorra:
- filename=mazmorra_boss_final.yml
- filename=mazmorra_miniboss_uno.yml
- filename=mazmorra_miniboss_dos.yml
```

```yml
objetivosMazmorra: 
- clearpercentage=0.8
```

</div>

</details>

***

### dificultades

Establece la lista de dificultades en la mazmorra instanciada.

**¡Obligatorio para mazmorras instanciadas!**

| Clave         |   Valores    | Predeterminado | Obligatorio |
|-------------|:-----------:|:-------:|:---------:|
| `dificultades` | Especial [1] |  ninguna   |    ❌      |

<details> 

<summary><b>Ejemplos</b></summary>

<div align="left">

```yml
dificultades:
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

![crear_paqueteador_dificultad.jpg](../../../img/wiki/create_packager_difficulty.jpg)

</div>

</div>

</details>

**Especial [1]**

<details>

<summary><b>Expande la tabla</b></summary>

<div align="center">

Establecer las dificultades de las mazmorras instanciadas creará automáticamente diferentes opciones de dificultad al entrar a la mazmorra.

Los nombres de dificultad que se establezcan aquí serán los utilizados en la carpeta de jefes personalizados, donde podrá establecer qué poderes tienen los jefes basándose en la dificultad.

Las dificultades están en un formato de lista que tienen los siguientes campos:

|     Clave     | Descripción                                                                                                                                                                                                                                                    | Valores | Obligatorio |
|:-----------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|:---------:|
|   `nombre`    | Nombre de la dificultad para los jugadores.                                                                                                                                                                                                                    |[String](#string)        |     ✅     |
|    `id`     | ID de la dificultad, utilizado en jefes personalizados y elementos personalizados para la funcionalidad basada en la dificultad.                                                                                                                 |[String](#string)        |     ✅     |
| `sincronizacionNivel` | Establece el nivel de sincronización de nivel, si hay alguno. La sincronización de nivel hace que todo el equipo del jugador alcance el valor máximo establecido, lo que hace imposible que los jugadores se sobrenivele para una mazmorra y mantiene su relevancia para las carreras posteriores. Basado en el sistema de sincronización de nivel de Final Fantasy 14. |[Integer](#integer)        |     ❌     |


</div>

</details>

</div>

***

# Valores recomendados para los Jefes

## Crear un mob de mazmorra promedio

Recomendamos dejar la configuración de combate normalizado establecida en true. Esta configuración normaliza todos los mobs para escalar de manera igual con la salud y el daño, independientemente de su tipo de entidad.

```yaml
combateNormalizado: true
multiplicadorSalud: 1.0 #4 golpes para derribar 
multiplicadorDaño: 1.0 #1.5 corazones de daño
```

Aseguradamente, aquí está la versión modificada manteniendo la claridad y el formato:

**Nota: Dado que `1.0` es el valor predeterminado para la salud y el daño, simplemente puedes omitir la definición de `multiplicadorSalud` o `multiplicadorDaño` y establecer `combateNormalizado` en `true`.**

## Crear packs de basura

Los packs de basura son numerosos pero no muy peligrosos:

```yaml
combateNormalizado: true
multiplicadorSalud: 0.7 #3 golpes para derribar 
multiplicadorDaño: 0.5 #0.5 corazones de daño
```

## Crear refuerzos

Los refuerzos deberían morir muy fácilmente, pero representar un peligro en términos de daño (estos valores se recomiendan para 4+ entidades cuerpo a cuerpo, el uso real puede variar):

```yaml
combateNormalizado: true
multiplicadorSalud: 0.25 #1 golpe para derribar 
multiplicadorDaño: 0.6 #1 corazon de daño
```

## Crear minibosses

Los minibosses deberían resistir, y representar un desafío mecánico para los jugadores. Debería ser una prueba de habilidad que dure un rato, pero no algo extremadamente letal:

```yaml
combateNormalizado: true
multiplicadorSalud: 3.0 #10 golpes para derribar 
multiplicadorDaño: 1.2 #2 corazones de daño
```

## Creando jefes

Los jefes son un verdadero desafío, la conclusión de una acumulación en una mazmorra y una verdadera prueba de habilidad con todo en juego. Los enfrentamientos deberían ser largos y la muerte debería ser una amenaza presente.

```yaml
combateNormalizado: true
multiplicadorSalud: 7.0 #23 golpes para derribar 
multiplicadorDaño: 1.4 #2.5 corazones de daño
```

**Estos valores recomendados son simplemente estimaciones aproximadas, y los valores finales deben ajustarse en función de los encuentros específicos.**

**Esto es particularmente crucial para los jefes finales de la mazmorra; es posible que desee exceder significativamente el valor recomendado de 7.0 para el multiplicadorSalud para hacer que la última pelea tenga esa sensación épica.**

***

# Empaquetando contenido de EliteMobs para su distribución

Finalmente, probablemente querrás empaquetar tu mazmorra para almacenarla o para su distribución.

EliteMobs tiene un sistema de importación que permite a los administradores importar, instalar y desinstalar contenido rápidamente. [Puedes ver cómo funciona aquí.]($language$/elitemobs/setup.md)

## Recortando Mundos

Algunas veces, puede que necesites reducir el tamaño de tu mundo de Minecraft para hacerlo más ligero y, en consecuencia, más fácil de distribuir. Esto se puede conseguir mediante el uso del [plugin WorldBorder](https://www.spigotmc.org/resources/worldborder-1-15.80466/). A pesar de que el plugin se enumera como compatible solo con la versión de Minecraft 1.19, funciona sin problemas en la última versión de Minecraft al 25 de enero de 2024.

<details>
<summary>Consejo</summary>
Si estás haciendo esto por primera vez puede que sea buena idea crear una copia de seguridad de tu mundo por si algo sale mal.
</details>

Una vez instalado el plugin, navega hasta el centro del mundo o el área específica que desees recortar. Luego, ejecuta el comando `/wb set x`, donde `x` representa el tamaño de radio aproximado que deseas para tu área.

<details>
<summary>Consejo</summary>
Si <code>/wb</code> no está funcionando para ti, prueba <code>/worldborder:wb</code>.
</details>

Después de ejecutar este comando, vuela a los bordes de tu mundo para verificar que la frontera del mundo se haya establecido correctamente y cubra el tamaño deseado. Sabrás que has llegado al borde de la frontera del mundo cuando te empujan hacia atrás, acompañado por un mensaje en el chat.

![recorte_imagen_1.jpg](../../../img/wiki/trim_pic_1.jpg)

En la imagen de arriba, intentamos recortar el mundo alrededor de los bloques púrpura, dejando solo unos pocos fragmentos a su alrededor. Para lograr esto, nos paramos en el medio del área púrpura en los cuadros rojos y ejecutamos `/wb set 50`, estableciendo la frontera del mundo un poco más allá del área púrpura.

A continuación, utilizamos el comando `/wb trim [frecuencia] [revestimiento]`, con la frecuencia establecida en 200 y el revestimiento en 20. El revestimiento determina cuántos fragmentos deben quedar alrededor de la frontera del mundo (área púrpura), y la frecuencia determina cuántos fragmentos deben ser procesados por segundo. Después de ejecutar `/wb trim 200 20`, se nos solicitará que confirmemos ejecutando `/wb trim confirm`. Confirmamos la acción y, después de un tiempo, nuestro mundo será recortado, reduciendo su tamaño y haciendo que sea más conveniente para su distribución.

Ahora puedes eliminar la frontera del mundo utilizando `/wb clear all` o simplemente dejarla si así lo deseas.

## Recortando la carpeta del mundo

Hay varios archivos y carpetas ubicados en la carpeta de tu mundo que podemos descartar ya que los plugins no los usan todos. Esto reducirá el tamaño de tu mundo y facilitará su distribución.

Para un ambiente de mundo NORMAL:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. carpeta **region**
2. archivo **raids.dat** de dentro de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** cuando lo copies)
3. archivo **level.dat**

Puedes eliminar todos los demás archivos y carpetas que se encuentran en la carpeta del mundo de manera segura. Esto configurará tu mundo correctamente para el ambiente NORMAL.

Para los ambientes de mundo NETHER y THE_END:

Para preparar tu mundo, conserva los siguientes archivos y carpetas:

1. carpeta **region** dentro de la carpeta **DIM-1** (asegúrate de que esté dentro de la carpeta **DIM-1** cuando lo copies)
2. archivo **raids.dat** de dentro de la carpeta **data** (asegúrate de que esté dentro de la carpeta **data** cuando lo copies)
3. archivo **level.dat**

Puedes eliminar todos los demás archivos y carpetas que se encuentran en la carpeta del mundo de manera segura. Esto configurará tu mundo correctamente para los ambientes NETHER y THE_END.

## Ejecutando el comando de paquete

EliteMobs tiene el comando **`/em package <nombreDungeon> <version>`**. Este comando recorre todas las carpetas de configuración de EliteMobs y automáticamente empaqueta todo el contenido en las carpetas que coinciden con el `nombreDungeon` en un archivo comprimido y una carpeta normal en la carpeta `exports` de EliteMobs.

***Por esta razón, se recomienda encarecidamente que mantenga el contenido que desea empaquetar en carpetas con el mismo nombre que el nombre de su paquete.*** De lo contrario, deberá recopilar y empaquetar manualmente los archivos en la estructura de archivos para distribución.

## Agregando el archivo de paquete de dungeon

Si estás creando un dungeon, tendrás que agregar manualmente el archivo de paquete de dungeon en la carpeta recién generada en la carpeta de exports. El archivo de configuración de tu paquete de dungeon deberá seguir el formato descrito anteriormente y colocarse en una carpeta llamada `dungeonpackages`.
[Consulte la estructura del archivo para más detalles.](#estructura-del-archivo).

**¡Asegúrese de comprimir tu dungeon una vez hecho!**

## Estructura del archivo

Si hiciste todo correctamente, la estructura del archivo debería ser similar a este ejemplo, en el que nombramos al dungeon `mi_dungeon_genial`:

<details>
<summary>Ejemplo de estructura de archivos de mi_dungeon_genial</summary>

- mi_dungeon_genial.zip
    * dungeonpackages
        * mi_dungeon_genial.yml <- Aquí es donde va tu archivo de configuración del paquete de dungeon
    * worldcontainer
        * [Aquí van las carpetas de tu mundo]
    * wormholes
        * mi_dungeon_genial
            * [Aquí van tus agujeros de gusano]
    * npcs
        * mi_dungeon_genial
            * [Aquí van tus NPCs]
    * customtreasurechests
        * mi_dungeon_genial
            * [Aquí van tus cofres del tesoro]
    * customquests
        * mi_dungeon_genial
            * [Aquí van tus misiones hechas a medida]
    * customitems
        * mi_dungeon_genial
            * [Aquí van tus artículos personalizados]
    * custombosses
        * mi_dungeon_genial
            * [Aquí van tus jefes personalizados]
    * customarenas
        * mi_dungeon_genial
            * [Aquí van tus arenas personalizadas]
    * powers
        * mi_dungeon_genial
            * [Aquí van tus poderes personalizados]
    * world_blueprints
        * mi_dungeon_genial
            * [Aquí va tu carpeta de mundo, usada para dungeons instanciados]
    * customevents
        * mi_dungeon_genial
            * [Aquí van tus eventos personalizados]
    * customspawns
        * mi_dungeon_genial
            * [Aquí van tus spawns personalizados]
    * ModelEngine
        * [Aquí van tus modelos en formato bbmodel de ModelEngine, acepta carpetas]

</details>

Esto permite a la mayoría de los usuarios arrastrar y soltar archivos directamente en su servidor y tenerlo funcionando inmediatamente.

***Importante: Cuando empaquetes para distribución, asegúrate de DESINSTALAR EL MINIDUNGEON PRIMERO. No desea distribuir minidungeons instalados, ¡desea que los administradores los configuren en sus servidores!***

# Compartir paquetes Dungeon que has creado con la comunidad

Discord contiene una sección [#community_dungeons](https://discord.gg/7Pnd7EjdZq "#community_dungeons") donde las personas pueden compartir sus creaciones de MiniDungeon. ¡Siéntete libre de contribuir!