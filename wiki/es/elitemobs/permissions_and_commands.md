```spanish
# Comandos de usuario

*Nota: Todos los permisos de jugador están configurados como verdaderos por defecto. Esto significa que ya están configurados.*

*Si no quieres que los jugadores tengan acceso a una característica específica a través de permisos, ¡tendrás que denegarle ese permiso al jugador!*

| Comando | Descripción |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Comando principal, condensa toda la información del jugador en el plugin en un menú de fácil acceso. *Nota:* todos los demás comandos de usuario están en este comando principal. |
| `/adventurersguild` / `/ag` | En una configuración recomendada, teletransporta al jugador al mundo del gremio de aventureros donde interactúa con los diversos PNJ de EliteMobs. |
| `/em shareItem` | Enlaza un objeto en el chat para que otros jugadores puedan ver sus estadísticas. |
| `/em help` | Lista todos los comandos. Los comandos de usuario restantes suelen ser reemplazados por el uso de PNJ o la interfaz `/em`. Puedes pasar el cursor sobre los comandos para obtener una descripción de lo que hacen. |
| `/em money check` | Muestra el dinero del jugador. |
| `/em pay <username> <amount>` | Permite a los jugadores pagarse entre sí. Las transacciones tienen un impuesto configurable. |
| `/em spawntp` | Teletransporta a un jugador a un punto de aparición del servidor. |

## Comandos de PNJ

Estos comandos solo son útiles si no tienes instalado el Centro del Gremio de Aventureros con PNJ.

Se recomienda que los instales para ejecutar todos estos comandos a través de PNJ en lugar de que los jugadores tengan que recordar cómo funcionan los comandos.

| Comando | Descripción |
|---------|:-----------:|
| `/em rank` | Abre el menú de rango o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em shop procedural <player>` | Accede a la tienda o teletransporta a los jugadores al Centro del Gremio de Aventureros. |
| `/em shop sell <player>` | Accede al menú de venta de la tienda o teletransporta a los jugadores al Centro del Gremio de Aventureros. |
| `/em shop custom <player>` | Accede a la tienda personalizada o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em repair` | Accede al menú de reparación o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em enchant` | Accede al menú de encantamiento o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em scrap` | Accede al menú de desguace o teletransporta a los jugadores al centro del Gremio de Aventureros. |
| `/em unbind` | Accede al menú de desvinculación o teletransporta a los jugadores al centro del Gremio de Aventureros. |

## Comandos de usuario internos

**Estos comandos están diseñados para ser ejecutados desde menús dentro del juego, como misiones desde el menú de misiones. Si no se proporcionan instrucciones sobre cómo obtener un ID, significa que no es posible obtener ese ID de otra manera que no sea ejecutando el comando desde el menú dentro del juego.** Para mayor comodidad, se han dividido en categorías identificables y no identificables.

### Identificables

| Comando | Descripción |
|---------|-------------|
|`/em dungeontp <dungeonid>` | Teletransporta a un jugador a una mazmorra. |
*Nota: esto está diseñado para ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los IDs de las mazmorras. Los IDs de las mazmorras son los mismos que los nombres de archivo .yml en `~/plugins/EliteMobs/dungeonpackages/`. <br/>Puedes ver los IDs en la consola al usar el comando `/em` y seleccionar una teletransportación desde la página de Teletransportaciones.*

### No identificables

| Comando | Descripción |
|---------|:-----------:|
| `/em quest accept <questID>` | Acepta una misión. |
| `/em quest track <questID>` | Rastrea una misión. |
| `/em quest complete <questID>` | Completa una misión. |
| `/em quest leave <questID>` | Abandona una misión. |
| `/em track boss <uuid>` | Rastrea un jefe personalizado. Nota: esto está diseñado para ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los UUIDs de los jefes. |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - Permiso de administrador para EliteMobs para acceso completo! < < <**

</div>

| Comando | Descripción |
|---------|:-----------:|
| `/em setup` | Abre el menú de configuración principal. |
| `/em spawn elite <entityType> <level> <power1> <power2> <power3>` | Genera un Élite basado en el tipo de entidad. |
| - `/em spawn eliteAt <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>` | Genera un Élite basado en el tipo de entidad y la ubicación. |
| `/em spawn boss <fileName>` | Genera un Jefe Personalizado desde un archivo de configuración. |
| `/em spawn boss <fileName> <level>` | Genera un Jefe Personalizado desde un archivo de configuración y anula el nivel. |
| `/em spawn bossAt <filename> <worldName> <x> <y> <z>` | Genera un Jefe Personalizado desde un archivo de configuración en una ubicación. |
| `/em spawn bossAt <filename> <level> <worldName> <x> <y> <z>` | Genera un Jefe Personalizado desde un archivo de configuración en una ubicación y anula el nivel. |
| `/em place boss <fileName>` | Añade una ubicación de aparición a un Jefe Regional. |
| `/em place treasureChest <fileName>` | Añade un cofre del tesoro en la ubicación donde se encuentra el jugador. |
| `/em remove` | Elimina permanentemente una entidad de Mob Élite. Élite/Regional/Súper/PNJ, todos funcionan. Ejecútalo de nuevo para salir del modo de eliminación. |
| `/em event <eventName>` | Lanza un evento cronometrado personalizado. |
| `/em place npc <npcFileName>` | Genera un PNJ. |
| `/em stats` | Obtiene las estadísticas de las entidades y jugadores de EliteMobs actualmente activos. |
| `/em loot menu` | Abre un menú donde puedes obtener cualquier Botín Personalizado. |
| `/em loot give <player> <filename>` | Da un botín personalizado específico a un jugador. |
| `/em loot simulate <level>` | Simula las caídas de un Mob Élite del nivel establecido. |
| `/em loot simulate <level> <times>` | Simula las caídas de un Mob Élite del nivel establecido una cantidad determinada de veces. |
| `/em version` | Obtiene la versión del plugin. |
| `/em reload` | Recarga el plugin. Funciona casi siempre. |
| `/em kill ` | Mata a todos los Mobs Élite agresivos. |
| `/em kill <radius>` | Mata a todos los Mobs Élite agresivos en un radio. |
| `/em kill type <entityType>` | Mata a todos los élites de un tipo específico. |
| `/em kill type <entityType> <radius>` | Mata a todos los élites de un tipo específico en un radio. |
| `/em loot debug <level>` | Obtiene objetos de depuración para fines de prueba. |
| `/em money add <username> <amount>` | Añade una cantidad determinada de dinero a un jugador. |
| `/em money addall <amount>` | Añade una cantidad determinada de dinero a todos los jugadores en línea. |
| `/em money remove <username> <amount>` | Elimina una cantidad determinada de dinero de un jugador. |
| `/em money set <username> <amount>` | Establece la cantidad total de dinero que tiene un jugador. |
| `/em rank <player> <prestigeLevel> <guildLevel>` | Establece el rango del gremio de un jugador. |
| `/em discord` | Obtiene el enlace para el servidor de soporte de Discord. |
| `/em discord <message>` | Publica un mensaje de depuración en Discord si DiscordSRV está configurado correctamente. |
| `/em unbind force` | Desvincula un objeto ligado al alma que se tiene en la mano. |
| `/em money check <player>` | Verifica el dinero que tiene un jugador específico. |
| `/em fireball` | Genera una bola de fuego para probar la regeneración de explosiones de élite. |
| `/em transitiveBlocks register <filename> <ON_SPAWN/ON_REMOVE>` | Ver [Bloques Transitorios]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks). |
| `/em transitiveBlocks edit <filename> <ON_SPAWN/ON_REMOVE>` | Ver [Bloques Transitorios]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks). |
| `/em /em transitiveBlocks registerArea <filename> <ON_SPAWN/ON_REMOVE>` | Ver [Bloques Transitorios]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks). |
| `/em transitiveBlocks editArea <filename> <ON_SPAWN/ON_REMOVE>` | Ver [Bloques Transitorios]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks). |
| `/em transitiveBlocks cancel` | Ver [Bloques Transitorios]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks). |
| `/em protection bypass` | Alterna la protección de mazmorras. También funciona para el Gremio de Aventureros. |

## Comandos de administrador internos

Estos comandos están diseñados para ser ejecutados al interactuar con menús o texto interactuable en el chat, y no manualmente.

| Comando | Descripción |
|---------|:-----------:|
| `/em setup done` | Deja de mostrar mensajes al iniciar sesión como administrador. |
| `/em setup toggle <dungeonConfig>` | Permite alternar la instalación del contenido especificado de EliteMobs. |

# Permisos brutos:
```
permissions:
  elitemobs.*:
    description: Da acceso a todos los comandos de elitemobs
    children:
      elitemobs.stats: true
      elitemobs.checktier.others: true
      elitemobs.versionnotification: true
      elitemobs.money.check.others: true
    default: op
  elitemobs.stats:
    description: Permite a los jugadores ejecutar /elitemobs stats
    default: op
  elitemobs.version:
    description: Permite a los jugadores ejecutar /elitemobs version
    default: true
  elitemobs.shop.npc:
    description: Permite a los jugadores interactuar con PNJ para tiendas dinámicas
    default: true
  elitemobs.shop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos
    default: true
  elitemobs.customshop.npc:
    description: Permite a los jugadores interactuar con PNJ para tiendas dinámicas
    default: true
  elitemobs.customshop.command:
    description: Permite a los jugadores abrir el menú de la tienda personalizada a través de comandos
    default: true
  elitemobs.money.pay:
    description: Permite a los jugadores ejecutar /elitemobs pay [username] [amount]
    default: true
  elitemobs.money.check:
    description: Permite a los jugadores ejecutar /elitemobs wallet
    default: true
  elitemobs.money.check.others:
    description: Permite a los jugadores ejecutar /elitemobs check [username]
    default: op
  elitemobs.events:
    description: Permite a los jugadores lanzar todos los eventos
    default: true
  elitemobs.checktier.others:
    description: Permite a los jugadores ejecutar /elitemobs checktier [player]
    default: op
  elitemobs.gettier:
    description: Permite a los jugadores ejecutar /elitemobs gettier [tier]
    default: op
  elitemobs.versionnotification:
    description: Permite a los jugadores recibir notificaciones sobre actualizaciones del plugin
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permite a los jugadores teletransportarse al centro del gremio de aventureros usando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite a los jugadores acceder al menú de rango usando el comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite a los jugadores abrir el menú de rango a través de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permite a los jugadores acceder al menú /em rank a través de PNJ
    default: true
  elitemobs.quest.command:
    description: Permite a los jugadores aceptar misiones a través de comandos
    default: true
  elitemobs.quest.npc:
    description: Permite a los jugadores aceptar misiones a través de PNJ de EliteMobs
    default: true
  elitemobs.dungeontp:
    description: Permite a los jugadores teletransportarse a una ubicación establecida por elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite a los jugadores teletransportarse a la ubicación de aparición predeterminada del servidor.
    default: true
  elitemobs.back.npc:
    description: Permite a los jugadores interactuar con un PNJ para regresar a una ubicación anterior.
    default: true
  elitemobs.shareitem:
    description: Comparte un objeto Élite que se tiene en la mano en el chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite a los jugadores desguazar objetos en un PNJ
    default: true
  elitemobs.scrap.command:
    description: Permite a los jugadores desguazar objetos usando un comando
    default: true
  elitemobs.smelt.command:
    description: Permite a los jugadores fundir objetos usando un comando
    default: true
  elitemobs.smelt.npc:
    description: Permite a los jugadores fundir objetos usando un PNJ
    default: true
  elitemobs.repair.command:
    description: Permite a los jugadores usar el comando repair para abrir el menú de reparación de objetos élite
    default: true
  elitemobs.repair.npc:
    description: Permite a los jugadores interactuar con el PNJ para reparar objetos
    default: true
  elitemobs.refiner.command:
    description: Permite a los jugadores usar el comando refiner para abrir el menú de mejora de Desguace Élite
    default: true
  elitemobs.refiner.npc:
    description: Permite a los jugadores interactuar con el PNJ para mejorar Desguace Élite
    default: true
  elitemobs.enhancer.command:
    description: Permite a los jugadores usar el comando enhancer para abrir el menú de mejora de Objetos Élite
    default: true
  elitemobs.enhancer.npc:
    description: Permite a los jugadores interactuar con el PNJ para mejorar Objetos Élite
    default: true
  elitemobs.unbind.command:
    description: Permite a los jugadores usar el comando unbind para abrir el menú de desvinculación de Objetos Élite
    default: true
  elitemobs.unbind.npc:
    description: Permite a los jugadores interactuar con el PNJ desvinculador para desvincular Objetos Élite
    default: true
  elitemobs.soulbind.bypass:
    description: Permite a los usuarios omitir las restricciones de ligadura al alma. ¡Solo recomendado para administradores!
    default: false
  elitequest.*:
    description: Usado para permisos relacionados con misiones
    default: false
    op: false
```