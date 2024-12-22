# Comandos de usuario

*Nota: Todos los permisos de jugador están configurados como verdaderos por defecto. Esto significa que ya están
configurados.*

*Si no quieres que los jugadores tengan acceso a una función específica a través de los permisos, ¡tendrás que negar ese
permiso al jugador!*

| Comando                        |                                                                                                    Descripción                                                                                                     |
|--------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/elitemobs` / `/em`           |                 Comando principal, condensa toda la información del jugador en el plugin en un menú de fácil acceso. *Nota:* todos los demás comandos de usuario están en este comando principal.                  |
| `/adventurersguild` / `/ag`    |                                En una configuración recomendada, teletransporta al jugador al mundo del gremio de aventureros donde interactúan con los diversos NPC de EliteMobs.                                 |
| `/em shareItem`                |                                                                 Enlaza un objeto en el chat para que otros jugadores puedan ver sus estadísticas.                                                                  |
| `/em help`                     | Lista todos los comandos. Los comandos de usuario restantes suelen ser reemplazados por el uso de NPC o la interfaz `/em`. Puedes pasar el cursor sobre los comandos para obtener una descripción de lo que hacen. |
| `/em money check`              |                                                                                           Muestra el dinero del jugador.                                                                                           |
| `/em pay <usuario> <cantidad>` |                                                     Permite a los jugadores pagarse entre sí. Las transacciones están gravadas con una cantidad configurable.                                                      |
| `/em spawntp`                  |                                                                         Teletransporta a un jugador a un punto de aparición del servidor.                                                                          |

## Comandos de NPC

Estos comandos solo son útiles si no tienes instalado el centro del Gremio de Aventureros con NPC.

Se recomienda que los instales para ejecutar todos estos comandos a través de NPC en lugar de que los jugadores
recuerden cómo funcionan los comandos.

| Comando                         |                                                Descripción                                                 |
|---------------------------------|:----------------------------------------------------------------------------------------------------------:|
| `/em rank`                      |        Abre el menú de rangos o teletransporta a los jugadores al centro del Gremio de Aventureros.        |
| `/em shop procedural <jugador>` |          Accede a la tienda o teletransporta a los jugadores al centro del Gremio de Aventureros.          |
| `/em shop sell <jugador>`       | Accede al menú de venta de la tienda o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em shop custom <jugador>`     |   Accede a la tienda personalizada o teletransporta a los jugadores al centro del Gremio de Aventureros.   |
| `/em repair`                    |     Accede al menú de reparación o teletransporta a los jugadores al centro del Gremio de Aventureros.     |
| `/em enchant`                   |   Accede al menú de encantamiento o teletransporta a los jugadores al centro del Gremio de Aventureros.    |
| `/em scrap`                     |      Accede al menú de desguace o teletransporta a los jugadores al centro del Gremio de Aventureros.      |
| `/em unbind`                    |   Accede al menú de desvinculación o teletransporta a los jugadores al centro del Gremio de Aventureros.   |

## Comandos internos de usuario

**Estos comandos están pensados para ser ejecutados desde menús del juego, como misiones del menú de misiones. Si no hay
instrucciones escritas sobre cómo obtener un ID, significa que no es posible obtener ese ID más que ejecutando el
comando desde el menú del juego.** Para mayor comodidad, estos se han dividido en las categorías identificables y no
identificables.

### Identificables

| Comando | Descripción |
|---------|-------------|
|`/em dungeontp <idmazmorra>`         |Teletransporta a un jugador a una mazmorra.|

*Nota: esto está pensado para ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los IDs
de las mazmorras. Los IDs de las mazmorras son los mismos que los nombres de archivo .yml
en `~/plugins/EliteMobs/dungeonpackages/`. <br/>Puedes ver los IDs en la consola cuando usas el comando `/em` y eliges
un teletransporte desde la página de Teletransportes.*

### No identificables

| Comando                         |                                                                                       Descripción                                                                                       |
|---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em quest accept <idMisión>`   |                                                                                   Acepta una misión.                                                                                    |
| `/em quest track <idMisión>`    |                                                                          Realiza el seguimiento de una misión.                                                                          |
| `/em quest complete <idMisión>` |                                                                                  Completa una misión.                                                                                   |
| `/em quest leave <idMisión>`    |                                                                                  Abandona una misión.                                                                                   |
| `/em track boss <uuid>`         | Realiza el seguimiento de un jefe personalizado. Nota: esto está pensado para ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los UUID de los jefes. |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - ¡Permiso de administrador para EliteMobs para acceso completo! < < <**

</div>

| Comando                                                                                          |                                                                  Descripción                                                                   |
|--------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------:|
| `/em setup`                                                                                      |                                                    Abre el menú de configuración principal.                                                    |
| `/em spawn elite <tipoEntidad> <nivel> <poder1> <poder2> <poder3>`                               |                                                 Genera un Elite basado en el tipo de entidad.                                                  |
| - `/em spawn eliteAt <tipoEntidad> <nombreMundo> <x> <y> <z> <nivel> <poder1> <poder2> <poder3>` |                                          Genera un Elite basado en el tipo de entidad y la ubicación.                                          |
| `/em spawn boss <nombreArchivo>`                                                                 |                                        Genera un Jefe Personalizado desde un archivo de configuración.                                         |
| `/em spawn boss <nombreArchivo> <nivel>`                                                         |                                Genera un Jefe Personalizado desde un archivo de configuración y anula el nivel.                                |
| `/em spawn bossAt <nombreArchivo> <nombreMundo> <x> <y> <z>`                                     |                                Genera un Jefe Personalizado desde un archivo de configuración en una ubicación.                                |
| `/em spawn bossAt <nombreArchivo> <nivel> <nombreMundo> <x> <y> <z>`                             |                       Genera un Jefe Personalizado desde un archivo de configuración en una ubicación y anula el nivel.                        |
| `/em place boss <nombreArchivo>`                                                                 |                                              Añade una ubicación de aparición a un Jefe Regional.                                              |
| `/em place treasureChest <nombreArchivo>`                                                        |                                      Añade un cofre del tesoro en la ubicación en la que está el jugador.                                      |
| `/em remove`                                                                                     | Elimina permanentemente una entidad Elite Mob. Los Elites/Regionales/Super/NPC funcionan. Ejecuta de nuevo para salir del modo de eliminación. |
| `/em event <nombreEvento>`                                                                       |                                                   Lanza un evento personalizado programado.                                                    |
| `/em place npc <nombreArchivoNPC>`                                                               |                                                                 Genera un NPC.                                                                 |
| `/em stats`                                                                                      |                            Obtiene las estadísticas de las entidades EliteMobs y los jugadores actualmente activos.                            |
| `/em loot menu`                                                                                  |                                        Abre un menú donde puedes obtener cualquier Botín Personalizado.                                        |
| `/em loot give <jugador> <nombreArchivo>`                                                        |                                                Da botín personalizado específico a un jugador.                                                 |
| `/em loot simulate <nivel>`                                                                      |                                            Simula las caídas de un Elite Mob del nivel establecido.                                            |
| `/em loot simulate <nivel> <veces>`                                                              |                           Simula las caídas de un Elite Mob del nivel establecido una cantidad determinada de veces.                           |
| `/em version`                                                                                    |                                                         Obtiene la versión del plugin.                                                         |
| `/em reload`                                                                                     |                                                   Recarga el plugin. Funciona casi siempre.                                                    |
| `/em kill `                                                                                      |                                                     Mata a todos los Elite Mobs agresivos.                                                     |
| `/em kill <radio>`                                                                               |                                               Mata a todos los Elite Mobs agresivos en un radio.                                               |
| `/em kill type <tipoEntidad>`                                                                    |                                                 Mata a todos los elites de un tipo específico.                                                 |
| `/em kill type <tipoEntidad> <radio>`                                                            |                                           Mata a todos los elites de un tipo específico en un radio.                                           |
| `/em loot debug <nivel>`                                                                         |                                              Obtiene objetos de depuración para fines de prueba.                                               |
| `/em money add <usuario> <cantidad>`                                                             |                                                Añade una cantidad fija de dinero a un jugador.                                                 |
| `/em money addall <cantidad>`                                                                    |                                       Añade una cantidad fija de dinero a todos los jugadores en línea.                                        |
| `/em money remove <usuario> <cantidad>`                                                          |                                               Elimina una cantidad fija de dinero de un jugador.                                               |
| `/em money set <usuario> <cantidad>`                                                             |                                              Establece la cantidad total de dinero de un jugador.                                              |
| `/em rank <jugador> <nivelPrestigio> <nivelGremio>`                                              |                                                  Establece el rango de gremio de un jugador.                                                   |
| `/em discord`                                                                                    |                                              Obtiene el enlace al servidor de Discord de soporte.                                              |
| `/em discord <mensaje>`                                                                          |                           Publica un mensaje de depuración en Discord si DiscordSRV está configurado correctamente.                            |
| `/em unbind force`                                                                               |                                                 Desvincula un objeto ligado al alma sostenido.                                                 |
| `/em money check <jugador>`                                                                      |                                                 Comprueba la moneda de un jugador específico.                                                  |
| `/em fireball`                                                                                   |                                 Genera una bola de fuego para probar la regeneración de la explosión de élite.                                 |
| `/em transitiveBlocks register <nombreArchivo> <ON_SPAWN/ON_REMOVE>`                             |                      Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                       |
| `/em transitiveBlocks edit <nombreArchivo> <ON_SPAWN/ON_REMOVE>`                                 |                      Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                       |
| `/em /em transitiveBlocks registerArea <nombreArchivo> <ON_SPAWN/ON_REMOVE>`                     |                      Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                       |
| `/em transitiveBlocks editArea <nombreArchivo> <ON_SPAWN/ON_REMOVE>`                             |                      Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                       |
| `/em transitiveBlocks cancel`                                                                    |                      Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).                       |
| `/em protection bypass`                                                                          |                              Alterna la protección de mazmorras. También funciona para el Gremio de Aventureros.                               |

## Comandos internos de administrador

Estos comandos están pensados para ser ejecutados al interactuar con menús o texto interactivo en el chat, y no
manualmente.

| Comando                             |                                 Descripción                                 |
|-------------------------------------|:---------------------------------------------------------------------------:|
| `/em setup done`                    |       Deja de mostrar mensajes al iniciar sesión como administrador.        |
| `/em setup toggle <configMazmorra>` | Te permite alternar la instalación del contenido especificado de EliteMobs. |

# Permisos brutos:
```
permissions:
  elitemobs.*:
    description: Da acceso a todos los comandos de elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.currency.check.others: true
    default: op
  elitemobs.stats:
    description: Permite a los jugadores ejecutar /elitemobs stats
    default: op
  elitemobs.version:
    description: Permite a los jugadores ejecutar /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Permite a los jugadores interactuar con NPC para tiendas dinámicas
    default: true
  elitemobs.shop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite a los jugadores interactuar con NPC para tiendas dinámicas
    default: true
  elitemobs.customshop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos
    default: true
  elitemobs.currency.pay:
    description: Permite a los jugadores ejecutar /elitemobs pay [usuario] [cantidad]
    default: true
  elitemobs.currency.check:
    description: Permite a los jugadores ejecutar /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Permite a los jugadores ejecutar /elitemobs check [usuario]
    default: op
  elitemobs.events:
    description: Permite a los jugadores lanzar todos los eventos
    default: true
  elitemobs.checktier.others:
    description: Permite a los jugadores ejecutar /elitemobs checktier [jugador]
    default: op
  elitemobs.gettier:
    description: Permite a los jugadores ejecutar /elitemobs gettier [nivel]
    default: op
  elitemobs.versionnotification:
    description: Permite a los jugadores recibir notificaciones sobre actualizaciones de plugins
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permite a los jugadores teletransportarse al centro del gremio de aventureros usando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite a los jugadores acceder al menú de rangos usando el comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite a los jugadores abrir el menú de rangos a través de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permite a los jugadores acceder al menú /em rank a través de NPC
    default: true
  elitemobs.quest.command:
    description: Permite a los jugadores aceptar misiones mediante comandos
    default: true
  elitemobs.quest.npc:
    description: Permite a los jugadores aceptar misiones mediante un NPC de EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permite a los jugadores teletransportarse a una ubicación establecida por elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite a los jugadores teletransportarse a la ubicación de aparición predeterminada del servidor.
    default: true
  elitemobs.back.npc:
    description: Permite a los jugadores interactuar con un npc para volver a una ubicación anterior.
    default: true
  elitemobs.shareitem:
    description: Comparte un objeto élite sostenido en el chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite a los jugadores desguazar objetos en un npc
    default: true
  elitemobs.scrap.command:
    description: Permite a los jugadores desguazar objetos utilizando un comando
    default: true
  elitemobs.smelt.command:
    description: Permite a los jugadores fundir objetos usando un comando
    default: true
  elitemobs.smelt.npc:
    description: Permite a los jugadores fundir objetos usando un npc
    default: true
  elitemobs.repair.command:
    description: Permite a los jugadores usar el comando de reparación para abrir el menú de reparación de objetos de élite
    default: true
  elitemobs.repair.npc:
    description: Permite a los jugadores interactuar con el NPC para reparar objetos
    default: true
  elitemobs.refiner.command:
    description: Permite a los jugadores usar el comando de refinador para abrir el menú de mejora de chatarra de élite
    default: true
  elitemobs.refiner.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar chatarra de élite
    default: true
  elitemobs.enhancer.command:
    description: Permite a los jugadores usar el comando de potenciador para abrir el menú de mejora de objetos de élite
    default: true
  elitemobs.enhancer.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar objetos de élite
    default: true
  elitemobs.unbind.command:
    description: Permite a los jugadores usar el comando de desvinculación para abrir el menú de desvinculación de objetos de élite
    default: true
  elitemobs.unbind.npc:
    description: Permite a los jugadores interactuar con el NPC desvinculador para desvincular objetos de élite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite a los usuarios eludir las restricciones de unión al alma. ¡Solo recomendado para administradores!
    default: false
  elitequest.*:
    description: Se utiliza para permisos relacionados con las misiones
    default: false
    op: false
```
