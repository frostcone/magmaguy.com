# Comandos de usuario

*Nota: Todos los permisos de los jugadores están configurados como verdaderos de forma predeterminada. Esto significa que ya están configurados.*

*¡Si no deseas que los jugadores tengan acceso a una función específica a través de permisos, tendrás que denegarle ese permiso al jugador!*

| Comando | Descripción |
|---------|:-----------:|
| `/elitemobs` / `/em` | Comando principal, condensa toda la información del jugador en el complemento en un menú de fácil acceso. *Nota:* todos los demás comandos de usuario están en este comando principal. `/em menu` también es un comando válido para esto. |
| `/adventurersguild` / `/ag`     |En una configuración recomendada, teletransporta al jugador al mundo del gremio de aventureros donde interactúa con los diversos NPC de EliteMobs.|
| `/shareitem`     |Vincula un objeto en el chat para que otros jugadores puedan ver sus estadísticas.|
| `/em help`     |Enumera todos los comandos. ¡Los comandos de usuario restantes generalmente se reemplazan por el uso de NPC o la interfaz `/em`!|
| `/em wallet`     |Muestra el dinero del jugador.|
| `/em pay <nombredeusuario> <cantidad>`     |Permite a los jugadores pagarse entre sí. Las transacciones se gravan con una cantidad configurable.|
| `/em updateitem`     |Actualiza la tradición de un objeto en caso de que se desincronice. Este comando está destinado a fines de depuración y no es necesario en el juego normal.|
| `/em spawntp`     |Teletransporta a un jugador a un punto de generación del servidor.|

## Comandos de NPC

Estos comandos solo son útiles si no tienes instalado el centro del gremio de aventureros con NPC.

Se recomienda que los instales para ejecutar todos estos comandos a través de NPC en lugar de que los jugadores recuerden cómo funcionan los comandos.

| Comando | Descripción |
|---------|:-----------:|
| `/em rank`     |     Abre el menú de rango o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em shop`     |     Accede a la tienda o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em customshop`     |     Accede a la tienda personalizada o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em repair`     |     Accede al menú de reparación o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em enchant`     |     Accede al menú de encantamiento o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em scrap`     |     Accede al menú de chatarra o teletransporta a los jugadores al centro del gremio de aventureros.     |
| `/em unbind`     |     Accede al menú de desvinculación o teletransporta a los jugadores al centro del gremio de aventureros.     |

## Comandos de usuario internos

**Estos comandos están destinados a ejecutarse desde menús del juego, como misiones del menú de misiones. Si no se escriben instrucciones sobre cómo obtener una identificación, significa que no es posible obtener esa identificación que no sea ejecutando el comando desde el menú del juego.** Para mayor comodidad, estos se han dividido en las categorías identificables y no identificables.

### Identificable

| Comando | Descripción |
|---------|-------------|
|`/em dungeontp <iddemazmorra>`         |Teletransporta a un jugador a una mazmorra.|
*Nota: esto está destinado a ejecutarse desde el menú `/em`, ya que es imposible para los jugadores adivinar las ID de las mazmorras. Las ID de las mazmorras son las mismas que los nombres de archivo .yml en `~/plugins/EliteMobs/dungeonpackages/`. <br/>Puedes ver las ID en la consola cuando usas el comando `/em` y seleccionas un teletransporte de la página Teletransportes.*

### No identificable

| Comando | Descripción |
|---------|:-----------:|
| `/em quest accept <iddemision>`     |     Acepta una misión.     |
| `/em quest track <iddemision>`     |     Rastrea una misión.     |
| `/em quest complete <iddemision>`     |     Completa una misión.     |
| `/em quest leave <iddemision>`     |     Abandona una misión.     |
| `/em trackcustomboss <uuid>`     |     Rastrea a un jefe personalizado. Nota: esto está destinado a ejecutarse desde el menú `/em`, ya que es imposible para los jugadores adivinar los UUID de los jefes.     |

# Comandos de administrador

<div>

**> > > `elitemobs.*` - ¡Permiso de administrador para EliteMobs para acceso completo! < < <**

</div>

| Comando | Descripción |
|---------|:-----------:|
| `/em setup`     |     Abre el menú de configuración principal.     |
| `/em setup area <nombredelarea>`     |     Protege un área usando WorldGuard, utilizado para minidungeons y el centro del mundo de aventureros. Nota: No tienes que ejecutar esto manualmente al configurar cosas usando el método de configuración recomendado.     |
| `/em spawnelite <tipodeentidad> <nivel> <poder1> <poder2> <poder3>`     |     Genera una élite basada en el tipo de entidad.     |
| - `/em spawnlocationelite <tipodeentidad> <nombredelmundo> <x> <y> <z> <nivel> <poder1> <poder2> <poder3>`     |     Genera una élite basada en el tipo de entidad y la ubicación.     |
| `/em spawncustom <nombredearchivo>`     |     Genera un jefe personalizado desde un archivo de configuración.     |
| `/em spawncustomlevel <nombredearchivo> <nivel>`     |     Genera un jefe personalizado desde un archivo de configuración y anula el nivel.     |
| `/em spawnlocationcustom <nombredearchivo> <nombredelmundo> <x> <y> <z>`     |     Genera un jefe personalizado desde un archivo de configuración en una ubicación.     |
| `/em spawnlocationcustomlevel <nombredearchivo> <nombredelmundo> <x> <y> <z>`     |     Genera un jefe personalizado desde un archivo de configuración en una ubicación y anula el nivel.     |
| `/em spawnsuper <tipodeentidad>`     |     Genera una supermafia basada en el tipo de entidad.     |
| `/em addSpawnLocation <nombredearchivo>`     |     Agrega una ubicación de generación a un jefe regional.     |
| `/em addTreasureChest <nombredearchivo>`     |     Agrega un cofre del tesoro en la ubicación donde está parado el jugador.     |
| `/em setLeashRadius <nombredearchivo> <radio>`     |     Agrega una ubicación de generación a un jefe regional.     |
| `/em remove`     |     Elimina permanentemente una entidad de mafia de élite. Élite/Regional/Super/NPC, todos funcionan. Ejecuta de nuevo para salir del modo de eliminación.     |
| `/em debug <nombre>`     |     Elimina permanentemente una entidad de mafia de élite. Élite/Regional/Super/NPC, todos funcionan. Ejecuta de nuevo para salir del modo de eliminación.     |
| `/em debug <nombre>`     |     Abre una pantalla de depuración para jugadores o jefes regionales.     |
| `/em event <nombreevento>`     |     Inicia un evento cronometrado personalizado.     |
| `/em spawnnpc <nombredearchivodelnpc>`     |     Genera un NPC.     |
| `/em stats`     |     Obtiene las estadísticas de las entidades y jugadores de EliteMobs actualmente activos.     |
| `/em getloot`     |     Abre un menú donde puedes obtener cualquier botín personalizado.     |
| `/em getloot <nombredearchivo>`     |     Obtén un botín personalizado específico.     |
| `/em giveloot <nombredearchivo> <jugador>`     |     Dale un botín personalizado específico a un jugador.     |
| `/em simloot <nivel>`     |     Simula caídas de una mafia de élite del nivel establecido.     |
| `/em simloot <nivel> <veces>`     |     Simula caídas de una mafia de élite del nivel establecido una cantidad determinada de veces.     |
| `/em version`     |     Obtiene la versión del complemento.     |
| `/em reload`     |     Recarga el complemento. Funciona casi siempre.     |
| `/em killaggressive`     |     Mata a todas las turbas de élite agresivas.     |
| `/em killaggressive <radio>`     |     Mata a todas las turbas de élite agresivas en un radio.     |
| `/em killpassive`     |     Mata a todas las supermafias pasivas.     |
| `/em killpassive <radio>`     |     Mata a todas las supermafias pasivas en un radio.     |
| `/em killtype <tipodeentidad>`     |     Mata a todas las élites de un tipo específico.     |
| `/em killtype <tipodeentidad> <radio>`     |     Mata a todas las élites de un tipo específico en un radio.     |
| `/em gettier <nivel>`     |     Obtiene objetos de depuración para fines de prueba.     |
| `/em money add <nombredeusuario> <cantidad>`     |     Agrega una cantidad determinada de dinero a un jugador.     |
| `/em money addall <cantidad>`     |     Agrega una cantidad determinada de dinero a todos los jugadores en línea.     |
| `/em money remove <nombredeusuario> <cantidad>`     |     Elimina una cantidad determinada de dinero de un jugador.     |
| `/em money set <nombredeusuario> <cantidad>`     |     Establece la cantidad total de moneda de un jugador.     |
| `/em setrank <jugador> <niveldeprestigio> <niveldegremio>`     |     Establece el rango de gremio de un jugador.     |
| `/em discord`     |     Obtiene el enlace para el servidor de soporte de Discord.     |
| `/em discord <mensaje>`     |     Publica un mensaje de depuración en Discord si DiscordSRV está configurado correctamente.     |
| `/em forceunbind`     |     Desvincula un objeto vinculado al alma sostenido.     |
| `/em relativecoords <minidungeon>`     |     Obtiene las coordenadas relativas a una mazmorra instalada.     |
| `/em wallet <jugador>`     |     Comprueba la moneda de un jugador específico.     |
| `/em fireball`     |     Genera una bola de fuego para probar la regeneración de explosión de élite.     |
| `/em registerblocks <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`     |     Ver [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`     |     Ver [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksarea <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`     |     Ver [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em registerblocksareaedit <archivo_de_jefe_regional.yml> <on_spawn/on_remove>`     |     Ver [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em cancelblocks`     |     Ver [Bloques transitivos]($language$/elitemobs/creating_world_bosses.md&section=transitive-blocks).     |
| `/em debugmode`     |     Activa el modo de depuración, mostrando la generación y desaparición de turbas en la consola y permitiendo el seguimiento.     |

## Comandos internos de administrador

Estos comandos están destinados a ejecutarse cuando se interactúa con menús o texto interactivo en el chat, y no manualmente.

| Comando | Descripción |
|---------|:-----------:|
| `/em setup done`     |     Deja de mostrar mensajes al iniciar sesión como administrador.     |
| `/em setup minidungeon <nombredelaminidungeon>`     |     Instala una minidungeon.     |
| `/em setup minidungeon <nombredelaminidungeon>`     |     Desinstala una minidungeon.     |
| `/em trace <uuid>`     |     Rastrea las apariciones/desapariciones de un jefe personalizado. Requiere que el modo de depuración esté activado.     |
| `/em debugtp <uuid>`     |     Teletransporta a la ubicación de un jefe personalizado rastreado. Requiere que el modo de depuración esté activado.     |
| `/em generateresourcepack`     |     Genera un paquete de recursos. Consulta la entrada de la wiki sobre modelos personalizados sobre cómo utilizar esto.     |
| `/em updateresourcepack`     |     Actualiza el SHA1 del paquete de recursos en la configuración server.properties. Consulta la entrada de la wiki sobre modelos personalizados sobre cómo utilizar esto.     |

# Permisos sin procesar:
```
permissions:
  elitemobs.*:
    description: Da acceso a todos los comandos de elitemobs.
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
    description: Permite a los jugadores interactuar con NPC para tiendas dinámicas.
    default: true
  elitemobs.shop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos.
    default: true
  elitemobs.customshop.npc:
    description: Permite a los jugadores interactuar con NPC para tiendas dinámicas.
    default: true
  elitemobs.customshop.command:
    description: Permite a los jugadores abrir el menú de la tienda dinámica a través de comandos.
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
    description: Permite a los jugadores iniciar todos los eventos.
    default: true
  elitemobs.checktier.others:
    description: Permite a los jugadores ejecutar /elitemobs checktier [jugador]
    default: op
  elitemobs.gettier:
    description: Permite a los jugadores ejecutar /elitemobs gettier [nivel]
    default: op
  elitemobs.versionnotification:
    description: Permite a los jugadores recibir notificaciones sobre actualizaciones de complementos
    default: op
  elitemobs.adventurersguild.teleport:
    description: Permite a los jugadores teletransportarse al centro del gremio de aventureros usando /ag
    default: true
  elitemobs.adventurersguild.command:
    description: Permite a los jugadores clasificar el menú usando el comando /em adventurersguild
    default: true
  elitemobs.rank.command:
    description: Permite a los jugadores abrir el menú de rango a través de /em rank
    default: true
  elitemobs.rank.npc:
    description: Permite a los jugadores acceder al menú /em rank a través de NPC
    default: true
  elitemobs.quest.command:
    description: Permite a los jugadores aceptar misiones a través de comandos
    default: true
  elitemobs.quest.npc:
    description: Permite a los jugadores aceptar misiones a través de EliteMobs NPC
    default: true
  elitemobs.dungeontp:
    description: Permite a los jugadores teletransportarse a una ubicación establecida por elitemobs
    default: true
  elitemobs.spawntp:
    description: Permite a los jugadores teletransportarse a la ubicación de generación predeterminada del servidor.
    default: true
  elitemobs.back.npc:
    description: Permite a los jugadores interactuar con un npc para volver a una ubicación anterior.
    default: true
  elitemobs.shareitem:
    description: Comparte un objeto de élite sostenido en el chat.
    default: true
  elitemobs.scrap.npc:
    description: Permite a los jugadores desechar objetos en un npc
    default: true
  elitemobs.scrap.command:
    description: Permite a los jugadores desechar objetos usando un comando
    default: true
  elitemobs.smelt.command:
    description: Permite a los jugadores fundir objetos usando un comando
    default: true
  elitemobs.smelt.npc:
    description: Permite a los jugadores fundir objetos usando un npc
    default: true
  elitemobs.repair.command:
    description: Permite a los jugadores usar el comando de reparación para abrir el menú para reparar objetos de élite.
    default: true
  elitemobs.repair.npc:
    description: Permite a los jugadores interactuar con el NPC para reparar objetos.
    default: true
  elitemobs.refiner.command:
    description: Permite a los jugadores usar el comando refinador para abrir el menú para mejorar el desecho de élite.
    default: true
  elitemobs.refiner.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar el desecho de élite.
    default: true
  elitemobs.enhancer.command:
    description: Permite a los jugadores usar el comando potenciador para abrir el menú para mejorar los objetos de élite.
    default: true
  elitemobs.enhancer.npc:
    description: Permite a los jugadores interactuar con el NPC para mejorar los objetos de élite.
    default: true
  elitemobs.unbind.command:
    description: Permite a los jugadores usar el comando desvincular para abrir el menú para desvincular objetos de élite.
    default: true
  elitemobs.unbind.npc:
    description: Permite a los jugadores interactuar con el NPC desvinculador para desvincular objetos de élite.
    default: true
  elitemobs.soulbind.bypass:
    description: Permite a los usuarios eludir las restricciones de vinculación del alma. ¡Solo recomendado para administradores!
    default: false
  elitequest.*:
    description: Utilizado para permisos relacionados con misiones.
    default: false
    op: false
```


