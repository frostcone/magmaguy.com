[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Comandos de usuario

*Nota: todos los permisos de los jugadores están configurados como verdaderos de forma predeterminada. Esto significa que ya están configurados.*

*Si no quiere que los jugadores tengan acceso a una función específica a través de permisos, ¡tendrá que denegar a ese jugador el permiso!*

| Comando |    Descripción    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Comando principal, condensa toda la información del jugador en el plugin en un menú de fácil acceso. *Nota:* todos los demás comandos de usuario están en este comando principal. |
| `/adventurersguild` / `/ag`     | En una configuración recomendada, teletransporta al jugador al mundo del gremio de aventureros, donde interactúa con los diversos NPC de EliteMobs. |
| `/em shareItem`     | Vincula un objeto en el chat para que otros jugadores puedan ver sus estadísticas. |
| `/em help`     | Enumera todos los comandos. Los comandos de usuario restantes generalmente se reemplazan por el uso de NPC o la interfaz `/em`. Puede pasar el cursor sobre los comandos para obtener una descripción de lo que hacen. |
| `/em money check`     | Muestra el dinero del jugador. |
| `/em pay <nombredeusuario> <cantidad>`     | Permite a los jugadores pagarse entre sí. Las transacciones tienen un impuesto de una cantidad configurable. |
| `/em spawntp`     | Teletransporta a un jugador a la ubicación de generación del servidor. |

## Comandos NPC

Estos comandos solo son útiles si no tiene instalado el Centro del Gremio de Aventureros con NPC.

Se recomienda que los instale para ejecutar todos estos comandos a través de NPC en lugar de que los jugadores recuerden cómo funcionan los comandos.

| Comando | Descripción |
|---------|:-----------:|
| `/em rank`     |     Abre el menú de rango o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em shop procedural <jugador>`     |     Accede a la tienda o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em shop sell <jugador>`     |     Accede al menú de venta de la tienda o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em shop custom <jugador>`     |     Accede a la tienda personalizada o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em repair`     |     Accede al menú de reparación o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em enchant`     |     Accede al menú de encantamiento o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em scrap`     |     Accede al menú de desguace o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |
| `/em unbind`     |     Accede al menú de desvinculación o teletransporta a los jugadores al Centro del Gremio de Aventureros.     |

## Comandos internos de usuario

**Estos comandos están diseñados para ejecutarse desde menús del juego, como misiones del menú de misiones. Si no se escriben instrucciones sobre cómo obtener un ID, eso significa que no es posible obtener ese ID más que ejecutando el comando desde el menú del juego.** Para mayor comodidad, estos se han dividido en categorías identificables y no identificables.

### Identificables

| Comando | Descripción |
|---------|-------------|
|`/em dungeontp <idmazmorra>`         |Teletransporta a un jugador a una mazmorra.|
*Nota: esto está diseñado para ejecutarse desde el menú `/em`, ya que es imposible para los jugadores adivinar los ID de las mazmorras. Los ID de las mazmorras son los mismos que los nombres de archivo .yml en `~/plugins/EliteMobs/dungeonpackages/`. <br/> Puede ver los ID en la consola al usar el comando `/em` y elegir un teletransportador desde la página de Teletransportaciones.*

### No identificables

| Comando | Descripción |
|---------|:-----------:|
| `/em quest accept <idMisión>`     |     Acepta una misión.     |
| `/em quest track <idMisión>`     |     Rastrea una misión.     |
| `/em quest complete <idMisión>`     |     Completa una misión.     |
| `/em quest leave <idMisión>`     |     Abandona una misión.     |
| `/em track boss <uuid>`     |     Rastrea un jefe personalizado. Nota: esto está diseñado para ejecutarse desde el menú `/em`, ya que es imposible para los jugadores adivinar los UUID de los jefes.     |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - ¡Permiso de administrador para EliteMobs para acceso completo! < < <**

</div>

| Comando | Descripción |
|---------|:-----------:|
| `/em setup`     |     Abre el menú de configuración principal.     |
| `/em spawn elite <tipoDeEntidad> <nivel> <poder1> <poder2> <poder3>`     |     Genera una élite según el tipo de entidad.     |
| - `/em spawn eliteAt <tipoDeEntidad> <nombreMundo> <x> <y> <z> <nivel> <poder1> <poder2> <poder3>`     |     Genera una élite según el tipo de entidad y la ubicación.     |
| `/em spawn boss <nombreArchivo>`     |     Genera un jefe personalizado desde un archivo de configuración.     |
| `/em spawn boss <nombreArchivo> <nivel>`     |     Genera un jefe personalizado desde un archivo de configuración e invalida el nivel.     |
| `/em spawn bossAt <nombreArchivo> <nombreMundo> <x> <y> <z>`     |     Genera un jefe personalizado desde un archivo de configuración en una ubicación.     |
| `/em spawn bossAt <nombreArchivo> <nivel> <nombreMundo> <x> <y> <z>`     |     Genera un jefe personalizado desde un archivo de configuración en una ubicación e invalida el nivel.     |
| `/em place boss <nombreArchivo>`     |     Agrega una ubicación de generación a un jefe regional.     |
| `/em place treasureChest <nombreArchivo>`     |     Agrega un cofre del tesoro en la ubicación en la que está parado el jugador.     |
| `/em remove`     |     Elimina permanentemente una entidad mob de élite. Las élites/regionales/súper/NPC funcionan. Ejecute de nuevo para salir del modo eliminar.     |
| `/em event <nombreEvento>`     |     Inicia un evento personalizado temporizado.     |
| `/em place npc <nombreArchivoNpc>`     |     Genera un NPC.     |
| `/em stats`     |     Obtiene las estadísticas de las entidades de EliteMobs y los jugadores activos actualmente.     |
| `/em loot menu`     |     Abre un menú donde puede obtener cualquier botín personalizado.     |
| `/em loot give <jugador> <nombreArchivo>`     |     Da botín personalizado específico a un jugador.     |
| `/em loot simulate <nivel>`     |     Simula las caídas de un mob de élite del nivel establecido.     |
| `/em loot simulate <nivel> <veces>`     |     Simula las caídas de un mob de élite del nivel establecido una cantidad determinada de veces.     |
| `/em version`     |     Obtiene la versión del plugin.     |
| `/em reload`     |     Vuelve a cargar el plugin. Funciona casi siempre.     |
| `/em kill `     |     Mata a todos los mobs de élite agresivos.     |
| `/em kill <radio>`     |     Mata a todos los mobs de élite agresivos en un radio.     |
| `/em kill type <tipoDeEntidad>`     |     Mata a todas las élites de un tipo específico.     |
| `/em kill type <tipoDeEntidad> <radio>`     |     Mata a todas las élites de un tipo específico en un radio.     |
| `/em loot debug <nivel>`     |     Obtiene objetos de depuración para fines de prueba.     |
| `/em money add <nombredeusuario> <cantidad>`     |     Agrega una cantidad establecida de dinero a un jugador.     |
| `/em money addall <cantidad>`     |     Agrega una cantidad establecida de dinero a todos los jugadores en línea.     |
| `/em money remove <nombredeusuario> <cantidad>`     |     Elimina una cantidad establecida de dinero de un jugador.     |
| `/em money set <nombredeusuario> <cantidad>`     |     Establece la cantidad total de moneda de un jugador.     |
| `/em rank <jugador> <nivelDePrestigio> <nivelDeGremio>`     |     Establece el rango de gremio de un jugador.     |
| `/em discord`     |     Obtiene el enlace para el servidor de soporte de Discord.     |
| `/em discord <mensaje>`     |     Publica un mensaje de depuración en Discord si DiscordSRV está configurado correctamente.     |
| `/em unbind force`     |     Desvincula un objeto con enlace de alma sostenido.     |
| `/em money check <jugador>`     |     Comprueba la moneda de un jugador específico.     |
| `/em fireball`     |     Genera una bola de fuego para probar la regeneración de la explosión de élite.     |
| `/em transitiveBlocks register <nombreArchivo> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks edit <nombreArchivo> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em /em transitiveBlocks registerArea <nombreArchivo> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks editArea <nombreArchivo> <ON_SPAWN/ON_REMOVE>`     |     Consulte [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em transitiveBlocks cancel`     |     Consulte [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em protection bypass`     |     Activa/desactiva la protección de la mazmorra. También funciona para el Gremio de Aventureros.     |

## Comandos internos de administrador

Estos comandos están diseñados para ejecutarse al interactuar con menús o texto interactivo en el chat, y no manualmente.

| Comando | Descripción |
|---------|:-----------:|
| `/em setup done`     |     Deja de mostrar mensajes al iniciar sesión como administrador.     |
| `/em setup toggle <configMazmorra>`     |   Le permite activar o desactivar la instalación del contenido de EliteMobs especificado.   |

# Permisos sin formato:
```
permissions:
  elitemobs.*:
    description: Otorga acceso a todos los comandos de elitemobs
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
    description: Permite a los jugadores interactuar con los NPC para tiendas dinámicas
    default: true
  elitemobs.shop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica mediante comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite a los jugadores interactuar con los NPC para tiendas dinámicas
    default: true
  elitemobs.customshop.command:
    description: Permite a los jugadores abrir el menú de la tienda personalizada mediante comandos
    default: true
  elitemobs.currency.pay:
    description: Permite a los jugadores ejecutar /elitemobs pay [nombredeusuario] [cantidad]
    default: true
  elitemobs.currency.check:
    description: Permite a los jugadores ejecutar /elitemobs wallet
    default: true
  elitemobs.currency.check.others:
    description: Permite a los jugadores ejecutar /elitemobs check [nombredeusuario]
    default: op
  elitemobs.events:
    description: Permite a los jugadores iniciar todos los eventos
    default: true
  elitemobs.checktier.others:
    description: Permite a los jugadores ejecutar /elitemobs checktier [jugador]
    default: op
  elitemobs.gettier:
    description: Permite a los jugadores ejecutar /elitemobs gettier [nivel]
    default: op
  elitemobs.versionnotification:
    description: Permite a los jugadores recibir notificaciones sobre actualizaciones del plugin
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
    description: Permite a los jugadores acceder al menú /em rank a través de los NPC
    default: true
  elitemobs.quest.command:
    description: Permite a los jugadores emprender misiones a través de un comando
    default: true
  elitemobs.quest.npc:
    description: Permite a los jugadores emprender misiones a través de NPC de EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permite a los jugadores teletransportarse a una ubicación establecida por elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite a los jugadores teletransportarse a la ubicación de generación predeterminada del servidor.
    default: true
  elitemobs.back.npc:
    description: Permite a los jugadores interactuar con un npc para regresar a una ubicación anterior.
    default: true
  elitemobs.shareitem:
    description: Comparte un objeto de élite sostenido en el chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite a los jugadores desguazar objetos en un npc
    default: true
  elitemobs.scrap.command:
    description: Permite a los jugadores desguazar objetos utilizando un comando
    default: true
  elitemobs.smelt.command:
    description: Permite a los jugadores fundir objetos utilizando un comando
    default: true
  elitemobs.smelt.npc:
    description: Permite a los jugadores fundir objetos utilizando un npc
    default: true
  elitemobs.repair.command:
    description: Permite a los jugadores usar el comando reparar para abrir el menú para reparar objetos de élite
    default: true
  elitemobs.repair.npc:
    description: Permite a los jugadores interactuar con el NPC para reparar objetos
    default: true
  elitemobs.refiner.command:
    description: Permite a los jugadores usar el comando refinador para abrir el menú para mejorar chatarra de élite
    default: true
  elitemobs.refiner.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar chatarra de élite
    default: true
  elitemobs.enhancer.command:
    description: Permite a los jugadores usar el comando potenciador para abrir el menú para mejorar objetos de élite
    default: true
  elitemobs.enhancer.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar objetos de élite
    default: true
  elitemobs.unbind.command:
    description: Permite a los jugadores usar el comando de desvinculación para abrir el menú para desvincular objetos de élite
    default: true
  elitemobs.unbind.npc:
    description: Permite a los jugadores interactuar con el NPC de desvinculación para desvincular objetos de élite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite a los usuarios omitir las restricciones de enlace de alma. ¡Solo recomendado para administradores!
    default: false
  elitequest.*:
    description: Se utiliza para los permisos relacionados con las misiones
    default: false
    op: false
```