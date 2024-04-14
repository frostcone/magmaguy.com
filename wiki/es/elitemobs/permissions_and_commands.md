# Comandos de usuario

*Nota: Todos los permisos del jugador están configurados para ser verdaderos por defecto. Esto significa que ya están configurados.*

*Si no quieres que los jugadores tengan acceso a una característica específica a través de los permisos, tendrás que denegarle al jugador el permiso!*

| Comando |    Description    |
|---------|:-----------------:|
| `/elitemobs` / `/em` | Comando principal, condensa toda la información del jugador en un menú fácil de acceder. *Nota:* todos los demás comandos de usuario están en este comando principal. `/em menu` también es un comando válido para esto |
| `/adventurersguild` / `/ag`     |En una configuración recomendada, teletransporta al jugador al mundo de la guild de aventureros donde interactúan con los diversos NPC de EliteMobs.|
| `/shareitem`     |Enlaza un artículo en el chat para que otros jugadores puedan ver sus estadísticas.|
| `/em help`     |Enumera todos los comandos. ¡Los comandos de usuario restantes suelen ser reemplazados por el uso de NPCs o la interfaz `/em`!|
| `/em wallet`     |Muestra el dinero del jugador.|
| `/em pay <username> <amount>`     |Permite a los jugadores pagarse entre sí. Las transacciones se gravan con una cantidad configurable.|
| `/em updateitem`     |Actualiza la descripción de un artículo en caso de que se desincronice. Este comando está destinado a propósitos de depuración, y no es requerido en el juego normal.|
| `/em spawntp`     |Teletransporta a un jugador a un spawn del servidor.|

## Comandos NPC

Estos comandos solo son útiles si no tienes instalado el Adventurer's Guild Hub con NPCs.

Se recomienda que instales estos para ejecutar todos estos comandos a través de NPCs en lugar de que los jugadores recuerden cómo funcionan los comandos.

| Comando | Descripción |
|---------|:-----------:|
| `/em rank`     |     Abre el menú de rango o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em shop`     |     Accede a la tienda o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em customshop`     |     Accede a la tienda personalizada o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em repair`     |     Accede al menú de reparación o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em enchant`     |     Accede al menú de encantamientos o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em scrap`     |     Accede al menú de desguace o teletransporta a los jugadores al hub de la Adventurer's Guild.     |
| `/em unbind`     |     Accede al menú de desvinculación o teletransporta a los jugadores al hub de la Adventurer's Guild.     |

## Comandos de usuario internos

**Estos comandos están destinados a ser ejecutados desde menús en el juego como misiones del menú de misiones. Si no se escriben instrucciones sobre cómo obtener un ID, eso significa que no es posible obtener ese ID más que ejecutando el comando desde el menú del juego.** Para comodidad, estos se han dividido en las categorías identificables e inidentificables.

### Identificable

| Comando | Descripción |
|---------|-------------|
|`/em dungeontp <dungeonid>`         |Teletransporta a un jugador a un calabozo.|
*Nota: esto está destinado a ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los IDs de los calabozos. Los IDs de los calabozos son los mismos que los nombres de archivo .yml en `~/plugins/EliteMobs/dungeonpackages/`. <br/>Puedes ver los IDs en la consola cuando utilizas el comando `/em` y seleccionas un teletransporte de la página de Teleportes.*

### Inidentificable

| Comando | Descripción |
|---------|:-----------:|
| `/em quest accept <questID>`     |     Acepta una misión.     |
| `/em quest track <questID>`     |     Rastrea una misión.     |
| `/em quest complete <questID>`     |     Completa una misión.     |
| `/em quest leave <questID>`     |     Abandona una misión.     |
| `/em trackcustomboss <uuid>`     |     Rastrea a un jefe personalizado. Nota: esto está destinado a ser ejecutado desde el menú `/em`, ya que es imposible para los jugadores adivinar los UUIDs de los jefes.     |

# Comandos de admin

<div>

**> > > `elitemobs.*` - ¡Permiso de administrador para EliteMobs para acceso total! < < <**

</div>

| Comando | Descripción |
|---------|:-----------:|
| `/em setup`     |     Abre el menú de configuración principal.     |
| `/em setup area <areaName>`     |     Protege un área utilizando WorldGuard, usado para Minidungeons y el mundo hub del Adventurer's World. Nota: No tienes que ejecutar esto manualmente cuando configuras cosas utilizando el método de configuración recomendado.     |
| `/em spawnelite <entityType> <level> <power1> <power2> <power3>`     |     Engendra una élite basada en el tipo de entidad.     |
| - `/em spawnlocationelite <entityType> <worldName> <x> <y> <z> <level> <power1> <power2> <power3>`     |     Engendra una élite basada en el tipo de entidad y ubicación.     |
| `/em spawncustom <fileName>`     |     Engendra un jefe personalizado desde un archivo de configuración.     |
| `/em spawncustomlevel <fileName> <level>`     |     Engendra un jefe personalizado desde un archivo de configuración y sobrescribe el nivel.     |
| `/em spawnlocationcustom <filename> <worldName> <x> <y> <z>`     |     Engendra un jefe personalizado desde un archivo de configuración en una ubicación.     |
| `/em spawnlocationcustomlevel <filename> <worldName> <x> <y> <z>`     |     Engendra un jefe personalizado desde un archivo de configuración en una ubicación y sobreescribe el nivel.     |
| `/em spawnsuper <EntityType>`     |     Engendra a Super Mob basado en el tipo de entidad.     |
| `/em addSpawnLocation <fileName>`     |     Agrega una ubicación de spawn a un jefe regional.     |
| `/em addTreasureChest <fileName>`     |     Agrega un cofre del tesoro en la ubicación en la que se encuentra el jugador.     |
| `/em setLeashRadius <fileName> <radius>`     |     Agregar una ubicación de spawn a un jefe regional.     |
| `/em remove`     |     Elimina permanentemente una entidad de Elite Mob. Elite/Regional/Super/NPCs todos funcionan. Ejecute de nuevo para salir del modo de eliminación.     |
| `/em debug <name>`     |     Elimina permanentemente una entidad de Elite Mob. Elite/Regional/Super/NPCs todos funcionan. Ejecute de nuevo para salir del modo de eliminación.     |
| `/em debug <name>`     |     Abre una pantalla de depuración para jugadores o jefes regionales.     |
| `/em event <eventName>`     |     Lanza un evento de tiempo personalizado.     |
| `/em spawnnpc <npcFileName>`     |     Engendra a un NPC.     |
| `/em stats`     |     Obtiene las estadísticas para las entidades EliteMobs y jugadores actualmente activos.     |
| `/em getloot`     |     Abre un menú donde puedes obtener cualquier Botín Personalizado.     |
| `/em getloot <filename>`     |     Obtén botín personalizado específico.     |
| `/em giveloot <filename> <player>`     |     Dar botín personalizado específico a un jugador.     |
| `/em simloot <level>`     |     Simula las caídas desde un Elite Mob del tier establecido.     |
| `/em simloot <level> <times>`     |     Simula las caídas desde un Elite Mob del tier establecido un número de veces establecido.     |
| `/em version`     |     Obtiene la versión del plugin.     |
| `/em reload`     |     Recarga el plugin. Funciona casi todas las veces.     |
| `/em killaggressive`     |     Mata a todos los Elite Mobs agresivos.     |
| `/em killaggressive <radius>`     |     Mata a todos los Elite Mobs agresivos en un radio.     |
| `/em killpassive`     |     Mata a todos los Super Mobs pasivos.     |
| `/em killpassive <radius>`     |     Mata a todos los Super Mobs pasivos en un radio.     |
| `/em killtype <entityType>`     |     Mata a todas las elites de un tipo específico.     |
| `/em killtype <entityType> <radius>`     |     Mata a todas las elites de un tipo específico en un radio.     |
| `/em gettier <tier>`     |     Obtiene elementos de depuración para fines de prueba.     |
| `/em money add <username> <amount>`     |     Agrega una cantidad establecida de dinero a un jugador.     |
| `/em money addall <amount>`     |     Agrega una cantidad establecida de dinero a todos los jugadores en línea.     |
| `/em money remove <username> <amount>`     |     Quita una cantidad establecida de dinero a un jugador.     |
| `/em money set <username> <amount>`     |     Establece el monto total de la divisa de un jugador.     |
| `/em setrank <player> <prestigetier> <guildtier>`     |     Establece el rango de gremio de un jugador.     |
| `/em discord`     |     Obtiene el enlace para el servidor de soporte de Discord.     |
| `/em discord <message>`     |     Publica un mensaje de depuración en Discord si DiscordSRV está configurado correctamente.     |
| `/em forceunbind`     |     Desvincula un artículo ligado al alma que se tiene en la mano.     |
| `/em relativecoords <minidungeon>`     |     Obtiene las coordenadas relativas a un calabozo instalado.     |
| `/em wallet <player>`     |     Verifica la moneda de un jugador específico.     |
| `/em fireball`     |     Engendra una bola de fuego para probar la regeneración de explosiones de elite.     |
| `/em registerblocks <regional_boss_file.yml> <on_spawn/on_remove>`     |     Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksarea <regional_boss_file.yml> <on_spawn/on_remove>`     |     Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksareaedit <regional_boss_file.yml> <on_spawn/on_remove>`     |     Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em cancelblocks`     |     Ver [Bloques Transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em debugmode`     |     Activa el modo de depuración, mostrando el engendrado y desaparición de mobs en la consola y permitiendo el rastreo.     |

## Comandos internos de administrador

Estos comandos están destinados a ser ejecutados al interactuar con menús o texto interactivo en el chat, y no manualmente.

| Comando | Descripción |
|---------|:-----------:|
| `/em setup done`     |     Deja de mostrar mensajes en el inicio de sesión del administrador.     |
| `/em setup minidungeon <nombreMinidungeon>`     |     Instala un Minidungeon.     |
| `/em setup minidungeon <nombreMinidungeon>`     |     Desinstala un Minidungeon.     |
| `/em setup unminidungeon <nombreMinidungeon> noPaste`     |     Desinstala un Minidungeon sin deshacer un pegado de WorldEdit.     |
| `/em trace <uuid>`     |     Rastrea los spawns / despawn de un Jefe Personalizado. Requiere que el modo de depuración esté activado.     |
| `/em debugtp <uuid>`     |     Teletransporta a la ubicación de un Jefe Personalizado rastreado. Requiere que el modo de depuración esté activado.     |
| `/em generateresourcepack`     |     Genera un pack de recursos. Consulta la entrada de wiki sobre Modelos Personalizados sobre cómo usar esto.     |
| `/em updateresourcepack`     |     Actualiza el SHA1 del pack de recursos en la configuración de server.properties. Consulta la entrada de wiki sobre Modelos Personalizados sobre cómo usar esto.     |

# Permisos en bruto:

```
permisos:
elitemobs.*:
descripción: Proporciona acceso a todos los comandos de elitemobs
hijos:
elitemobs.stats: verdadero
elitemobs.checktier.others: verdadero
elitemobs.versionnotification: verdadero
elitemobs.currency.check.others: verdadero
predeterminado: op
elitemobs.stats:
descripción: Permite a los jugadores ejecutar /elitemobs stats
predeterminado: op
elitemobs.version:
descripción: Permite a los jugadores ejecutar /elitemobs version
predeterminado: verdadero
elitemobs.shop.npc:
descripción: Permite a los jugadores interactuar con NPCs para tiendas dinámicas
predeterminado: verdadero
elitemobs.shop.command:
descripción: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos
predeterminado: verdadero
elitemobs.customshop.npc:
descripción: Permite a los jugadores interactuar con NPCs para tiendas dinámicas
predeterminado: verdadero
elitemobs.customshop.command:
descripción: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos
predeterminado: verdadero
elitemobs.currency.pay:
descripción: Permite a los jugadores ejecutar /elitemobs pay [nombreDeUsuario] [cantidad]
predeterminado: verdadero
elitemobs.currency.check:
descripción: Permite a los jugadores ejecutar /elitemobs wallet
predeterminado: verdadero
elitemobs.currency.check.others:
descripción: Permite a los jugadores ejecutar /elitemobs check [nombreDeUsuario]
predeterminado: op
elitemobs.events:
descripción: Permite a los jugadores lanzar todos los eventos
predeterminado: verdadero
elitemobs.checktier.others:
descripción: Permite a los jugadores ejecutar /elitemobs checktier [jugador]
predeterminado: op
elitemobs.gettier:
descripción: Permite a los jugadores ejecutar /elitemobs gettier [tier]
predeterminado: op
elitemobs.versionnotification:
descripción: Permite a los jugadores recibir notificaciones sobre actualizaciones de complementos
predeterminado: op
elitemobs.adventurersguild.teleport:
descripción: Permite a los jugadores teletransportarse al centro de la guilda de aventureros usando /ag
predeterminado: verdadero
elitemobs.adventurersguild.command:
descripción: Permite a los jugadores clasificar el menú usando el comando /em adventurersguild
predeterminado: verdadero
elitemobs.rank.command:
descripción: Permite a los jugadores abrir el menú de rango a través /em rank
predeterminado: verdadero
elitemobs.rank.npc:
descripción: Permite a los jugadores acceder al menú /em rank a través de NPCs
predeterminado: verdadero
elitemobs.quest.command:
descripción: Permite a los jugadores emprender misiones a través de comandos
predeterminado: verdadero
elitemobs.quest.npc:
descripción: Permite a los jugadores emprender misiones a través de EliteMobs NPC
predeterminado: verdadero
elitemobs.dungeontp:
descripción: Permite a los jugadores teletransportarse a una ubicación establecida por elitemobs
predeterminado: verdadero
elitemobs.spawntp:
descripción: Permite a los jugadores teletransportarse a la ubicación de spawn predeterminada del servidor.
predeterminado: verdadero
elitemobs.back.npc:
descripción: Permite a los jugadores interactuar con un npc para volver a una ubicación anterior.
predeterminado: verdadero
elitemobs.shareitem:
descripción: Comparte un Objeto Élite en el chat.
predeterminado: verdadero
elitemobs.scrap.npc:
descripción: Permite a los jugadores deshacerse de objetos en un npc
predeterminado: verdadero
elitemobs.scrap.command:
descripción: Permite a los jugadores deshacerse de los objetos usando un comando
predeterminado: verdadero
elitemobs.smelt.command:
descripción: Permite a los jugadores fundir objetos usando un comando
predeterminado: verdadero
elitemobs.smelt.npc:
descripción: Permite a los jugadores fundir objetos usando un npc
predeterminado: verdadero
elitemobs.repair.command:
descripción: Permite a los jugadores usar el comando de reparación para abrir el menú de reparación de objetos élit
predeterminado: verdadero
elitemobs.repair.npc:
descripción: Permite a los jugadores interactuar con el NPC para reparar objetos
predeterminado: verdadero
elitemobs.refiner.command:
descripción: Permite a los jugadores usar el comando de refinador para abrir el menú de mejora de Elite Scrap
predeterminado: verdadero
elitemobs.refiner.npc:
descripción: Permite a los jugadores interactuar con el NPC para mejorar Elite Scrap
predeterminado: verdadero
elitemobs.enhancer.command:
descripción: Permite a los jugadores usar el comando de mejora para abrir el menú de mejora de Objetos Élite
predeterminado: verdadero
elitemobs.enhancer.npc:
descripción: Permite a los jugadores interactuar con el NPC para mejorar Objetos Élite
predeterminado: verdadero
elitemobs.unbind.command:
descripción: Permite a los jugadores usar el comando de desvinculación para abrir el menú de desvinculación de Objetos Élite
predeterminado: verdadero
elitemobs.unbind.npc:
descripción: Permite a los jugadores interactuar con el NPC de desvinculación para desvincular Objetos Élite
predeterminado: verdadero
elitemobs.soulbind.bypass:
descripción: Permite a los usuarios eludir las restricciones de soulbind. ¡Solo recomendado para administradores!
predeterminado: falso
elitequest.*:
descripción: Usado para permisos relacionados con misiones
predeterminado: falso
op: falso
```