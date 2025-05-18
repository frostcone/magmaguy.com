```markdown
# Valores predeterminados de configuración de EliteMobs

**EliteMobs viene con los valores predeterminados recomendados instalados por defecto. Si cambias cosas al azar, lo más probable es que solo empeores la experiencia en general.**

_**EliteMobs se proporciona a todos los usuarios con la configuración predeterminada recomendada. Si cambias cosas al azar y luego solicitas soporte, hay una gran probabilidad de que se te diga que restablezcas tus archivos de configuración. Las modificaciones al plugin deben surgir de pruebas de juego y no solo de conjeturas.**_

## Empezando

EliteMobs actualmente ofrece una amplia gama de opciones de configuración debido a la alta demanda de personalización. Para mantener esta página wiki concisa, solo se mostrarán las configuraciones predeterminadas.

Si deseas obtener más información sobre una configuración específica, puedes consultar el archivo de configuración y revisar los comentarios.

---

## config.yml

`config.yml` contiene principalmente configuraciones aleatorias que no encajaban cómodamente en otro lugar en el momento de su creación. Es el archivo de configuración con más probabilidades de ver cambios entre versiones.

<div align="left">

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# Establece el archivo de idioma utilizado por EliteMobs
# ¡NO cambies esto manualmente! Está destinado a ser instalado con el comando '/em language <languagefile>'
language: english
# Establece si las élites y los jefes generados por elitemobs siempre mostrarán sus etiquetas de nombre.
# ¡No recomendado!
alwaysShowEliteMobNameTags: false
# Establece la cantidad de mobs pasivos que deben estar cerca antes de que puedan fusionarse.
# ¡No establezcas esto a 0!
superMobStackAmount: 50
# Hace que las élites no dañen a los mobs pasivos con explosiones.
preventEliteCreeperDamageToPassiveMobs: true
# Establece si EliteMobs usará títulos para advertir a los jugadores sobre permisos faltantes
useTitlesForMissingPermissionMessages: true
# Establece si EliteMobs evitará convertir mobs con nombre en élites.
# Especialmente importante para la compatibilidad con otros plugins.
preventEliteMobConversionOfNamedMobs: true
# Establece si EliteMobs convertirá mobs con razones de aparición personalizadas.
# Ejecutar ciertos plugins de jefes establecerá automáticamente esto a true, sin importar el valor en la configuración.
enableHighCompatibilityMode: false
# Establece el bonus de aparición de élites para el modo de juego pesadilla
nightmareWorldSpawnBonus: 0.5
# Establece si el comando centralizado /em abre la página de estado principal del plugin.
# ¡Altamente recomendado!
emLeadsToStatusMenu: true
# Establece si ejecutar comandos específicos como /em wallet llevará al menú /em donde esa información está centralizada.
otherCommandsLeadToEMStatusMenu: true
# Establece si la configuración está completa.
# No establezcas este valor manualmente, está destinado a ser modificado a través de comandos dentro del juego.
setupDoneV3: true
# Establece si las élites evitarán la aparición de refuerzos vanilla, como para la característica de refuerzo de Zombis.
preventVanillaReinforcementsForEliteEntities: true
# Establece la ubicación de aparición predeterminada del servidor para EliteMobs. /em spawntp llevará a esta ubicación.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Establece si EliteMobs regenerará los bloques volados por las élites.
doExplosionRegen: true
# Establece si la regeneración de explosiones también regenerará el contenido de contenedores como cofres.
# Ponerlo a false hará que las explosiones de élite no vuelen contenedores.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Establece si el menú /em solo usará el estilo de menú basado en inventario que es compatible con bedrock.
# Como recordatorio, los jugadores pueden usar el comando /em alt para cambiar entre estilos de menú /em
onlyUseBedrockMenus: false
# Establece el límite de caracteres por línea para las páginas del menú de libros.
# Reduce esta cantidad si el texto se corta en los menús de libros, como en las misiones.
characterLimitForBookMenuPagesV2: 170
# Establece si el espacio vacío del menú se llenará con paneles de cristal.
# No recomendado si estás usando el paquete de recursos de EliteMobs.
useGlassToFillMenuEmptySpace: false
# Establece si se usará unicode para formatear el paquete de recursos de EliteMobs.
# No establezcas esto manualmente, se establece automáticamente al instalar el paquete de recursos.
# Solo configúralo manualmente si tuviste que fusionar el paquete de recursos de EliteMobs, y espera que el espaciado pueda no funcionar si lo haces.
menuUnicodeFormatting: false
# Establece el mensaje enviado a los jugadores si ejecutan '/em confirm' sin comandos pendientes.
noPendingCommands: '&c¡Actualmente no tienes comandos pendientes!'
# Establece el mensaje de seguimiento para los jefes que envían mensajes de seguimiento.
trackMessage: Rastrear a $name
# Establece el mensaje enviado a los jugadores que abren cofres del tesoro con requisitos de nivel superiores a su rango de gremio.
chestLowRankMessage: '&7[EM] &c¡Tu rango de gremio debe ser al menos $rank &cpara
  poder abrir este cofre!'
# Establece el mensaje enviado a los jugadores que intentan reabrir un cofre del tesoro que ya han abierto.
chestCooldownMessage: '&7[EM] &c¡Ya has abierto este cofre recientemente! ¡Espera $time!'
# Establece el mensaje que aparece recomendando el comando /em alt para los jugadores que tienen problemas con el comando /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f¿el menú no te funciona? ¡Prueba &2/elitemobs
  alt &fpara ver una versión alternativa del menú! &c¿No quieres volver a ver este mensaje? &4/em dismiss'
# Establece el mensaje que aparece cuando los jugadores ejecutan el comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f¡estilo de menú cambiado! ¡Échale un vistazo!'
# Establece el mensaje que aparece cuando un jugador abre un cofre del tesoro pero no obtiene nada.
treasureChestNoDropMessage: '&8[EliteMobs] &c¡No obtuviste nada! ¡Mejor suerte
  la próxima vez!'
# Establece el mensaje que aparece cuando un jugador intenta rastrear un jefe que ya no es válido.
bossAlreadyGoneMessage: '&c[EliteMobs] ¡Lo siento, este jefe ya se ha ido!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contiene configuraciones relevantes tanto para el Centro del Gremio de Aventureros (el mundo) como para el sistema de ascenso de rango del Gremio de Aventureros.

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# Establece si EliteMobs añadirá salud máxima al desbloquear rangos de gremio como recompensa de prestigio
Add max health when unlocking higher guild ranks: true
# Establece si EliteMobs añadirá una probabilidad de golpe crítico al desbloquear rangos de gremio como recompensa de prestigio
Add critical chance when unlocking higher guild ranks: true
# Establece si EliteMobs añadirá probabilidad de esquivar al desbloquear rangos de gremio como recompensa de prestigio
Add dodge chance when unlocking higher guild ranks: true
# Establece si los comandos de usuario se redirigen al centro del gremio de aventureros. Esto es altamente recomendado para la inmersión en el juego y propósitos de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Establece el nombre de visualización dentro del juego del gremio de aventureros
adventurersGuildMenuName: '&6&lCentro de Aventureros'
Prestige 0 rank 0: '&8Plebeyo - ¡deshabilita élites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Establece si el botín del jugador está limitado por su nivel de gremio.
# Esta es una parte increíblemente importante de EliteMobs y extremadamente recomendada.
limitLootBasedOnGuildTier: true
# Establece el mensaje enviado a los jugadores si su botín se reduce debido a su bajo nivel de gremio.
lootLimiterMessage: '&7[EM] &c¡Debes desbloquear el siguiente rango de gremio a través de /ag para saquear
  mejores objetos!'
# Establece los comandos que se ejecutan al subir de rango de gremio. Los placeholders son:
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onRankUpCommand: []
# Establece los comandos que se ejecutan al subir de rango de prestigio.
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onPrestigeUpCommand: []
# Establece el nivel de prestigio para el primer bonus de esquivar.
dodgePrestige3Bonus: 3.0
# Establece el nivel de prestigio para el segundo bonus de esquivar.
dodgePrestige6Bonus: 6.0
# Establece el nivel de prestigio para el tercer bonus de esquivar.
dodgePrestige9Bonus: 10.0
# Establece el nivel de prestigio para el primer bonus de golpe crítico.
critPrestige2Bonus: 3.0
# Establece el nivel de prestigio para el segundo bonus de golpe crítico.
critPrestige5Bonus: 6.0
# Establece el nivel de prestigio para el tercer bonus de golpe crítico.
critPrestige8Bonus: 10.0
# Establece el nivel de prestigio para el primer bonus de salud máxima.
healthPrestige1Bonus: 2.0
# Establece el nivel de prestigio para el segundo bonus de salud máxima.
healthPrestige4Bonus: 2.5
# Establece el nivel de prestigio para el tercer bonus de salud máxima.
healthPrestige7Bonus: 3.0
# Establece el nivel de prestigio para el tercer bonus de salud máxima.
healthPrestige10Bonus: 4.0
# Establece la cantidad base estimada de jefes que deben ser asesinados para poder permitirse una subida de rango.
baseKillsForRankUp: 100
# Establece la cantidad adicional estimada de jefes que deben ser asesinados para poder subir de rango, por nivel.
# La fórmula es esta cantidad x el nivel en el que se encuentra actualmente el jugador.
additionalKillsForRankUpPerTier: 50
# Establece el título enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $player es un placeholder que se reemplaza con el nombre de visualización del jugador.
prestigeUnlockMessageTitle: $player
# Establece el subtítulo enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $tier es un placeholder que se reemplaza con el nivel de prestigio del jugador.
prestigeUnlockMessageSubtitle: '&2¡ha desbloqueado $tier&2!'
# Establece el multiplicador que se aplicará a la probabilidad de aparición cuando los jugadores estén usando el rango pacífico (plebeyo).
peacefulModeEliteChanceDecrease: 0.2
# Establece la lista de mundos a los que no se aplicarán los bonus de rango de gremio.
worldsWithoutAGBonuses: []
# Deshabilita la capacidad de los usuarios para cambiar al modo pacífico para EliteMobs. El modo pacífico reduce el nivel y las tasas de aparición de mobs alrededor de ese jugador específicamente.
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite a los administradores personalizar diferentes aspectos del sistema AntiExploit. El sistema AntiExploit existe para evitar que los jugadores utilicen cosas como granjas de mobs para farmear fácilmente monedas y botín, y los impulsa a realizar combates reales y minidungeons en lugar de hacer clic AFK para llegar a la cima del plugin.

Este es un sistema crítico para mantener activado si no quieres que la gente simplemente farmee AFK todo el plugin y quieres que realmente interactúen con las minidungeons.

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# Establece el mensaje que aparece cuando se activa el antiexploit.
AntiExploit message: '&c[EM AntiExploit] &7El élite cercano no soltará botín especial.'
# Establece si el antiexploit de cuarto oscuro 1 está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 1: true
# Establece si el antiexploit de cuarto oscuro 2 está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 2: true
# Establece si el antiexploit de cuarto oscuro 3 está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 3: true
# Establece si el antiexploit de cuarto oscuro grande 1 está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable large darkroom antiexploit 1: true
# Establece si el antiexploit de altura de enderman está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable enderman height antiexploit: true
# Establece si el antiexploit de montura está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable mount antiexploit: true
# Establece si los mobs élite pueden recoger objetos.
preventItemPickupByMobs: true
# Establece si el antiexploit de daño ambiental está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable ambient damage antiexploit: true
# Establece si el antiexploit de bloque de miel está habilitado.
# Las características específicas del antiexploit no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable honey block antiexploit: true
# Establece el umbral para la activación del antiexploit. Valores más altos lo hacen más tolerante. No se recomienda modificar esto.
antiExploitThreshold: 10
# Establece si el antiexploit sin ruta está habilitado.
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contiene las configuraciones para el sistema Combat Tag. Este sistema aún está muy lejos de estar completo, pero intenta gestionar el comportamiento del jugador una vez que entra en combate.

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# Establece si la etiqueta de combate está habilitada.
# Cuando está habilitado, los jugadores voladores que entran en combate dejan de volar.
Enable combat tag: true
# Establece el mensaje enviado cuando se activa la etiqueta de combate.
Combat tag message: '&c[EliteMobs] ¡Etiqueta de combate activada!'
# Establece si el comando /ag tendrá un temporizador antes de la teletransportación.
Enable adventurers guild teleport timer: true
# Establece el mensaje de acción mostrado mientras se espera el temporizador de teletransporte.
Teleport time left: '&7[EM] Teletransportando en &a$time &7segundos...'
# Establece el mensaje enviado cuando los jugadores se mueven mientras esperan la teletransportación.
Teleport cancelled: '&7[EM] &c¡Teletransporte interrumpido!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contiene las configuraciones para DiscordSRV. Si quieres ver cómo configurar esta característica, [¡haz clic aquí!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# La documentación se puede encontrar aquí: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: YOU_NEED_TO_PUT_THE_NAME_OF_THE_DISCORD_ROOM_YOU_WANT_ELITEMOBS_ANNOUNCEMENTS_TO_BE_BROADCASTED_IN_AS_YOU_HAVE_IN_YOUR_DISCORDSRV_CONFIGURATION_FILE_CHECK_ELITEMOBS_WIKI_FOR_DETAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contiene las configuraciones para la economía de EliteMobs.

<details>

<summary><b>Expandir Tabla</b></summary>

```yml
# Establece si la economía de EliteMobs está habilitada. Esto significa monedas élite, la capacidad de comprar y vender equipo y la capacidad de mejorar rangos de gremio.
# Si está deshabilitado, ¡los jugadores no podrán progresar en el plugin!
enableEconomy: true
# Establece el valor de reventa de los objetos, como un % del precio original. 5 es 5%
itemResaleValue: 5.0
# Establece el nombre dentro del juego de la moneda utilizada.
currencyName: Monedas Élite
# Establece que el plugin use Vault. ¡ESTO NO ES RECOMENDADO! Lee por qué aquí: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Establece si las élites soltarán monedas según su nivel.
enableCurrencyShower: true
# Establece el multiplicador para la moneda soltada por las élites.
currencyShowerTierMultiplier: 1.0
# Establece el mensaje enviado cuando los jugadores recogen moneda élite.
chatCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Establece el mensaje de la barra de acción enviado cuando los jugadores recogen moneda élite.
actionbarCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Envía el mensaje que los jugadores reciben después de saquear moneda. Útil para propósitos de tutorial.
adventurersGuildNotificationMessages: '&7[EM] ¿Dinero extra para gastar? ¡Prueba &a/ag !'
# Establece la tasa de impuestos para transacciones entre jugadores.
# Fuertemente recomendado por razones de equilibrio, ya que los jugadores de alto nivel pueden ganar hasta 6 veces más moneda e intentar usar a otros jugadores para evitar los reinicios de moneda de prestigio.
playerToPlayerPaymentTaxes: 0.2
# Mensaje enviado al enviar moneda élite a otros jugadores.
Economy pay message v2: '&2Has pagado &2$amount_sent $currency_name &2a $receiver&2,
  ¡quien recibió $amount_received después de impuestos!'
# Mensaje enviado después de que los jugadores envían moneda.
Economy currency left message: Ahora tienes &2$amount_left $currency_name
# Mensaje recibido al recibir moneda.
Economy money from payment message: Has recibido &2$amount_received $currency_name
  &fde $sender
# Mensaje enviado cuando los jugadores intentan enviar una cantidad de monedas que no tienen.
Economy payment insufficient currency: '&c¡No tienes suficientes $currency_name para
  hacer eso!'
# Mensaje del comando /em balance
Wallet command message: Tienes &2$balance $currency_name
# Mensaje de confirmación enviado cuando los jugadores intentan enviar moneda a otro jugador.
Tax confirmation message: '&cEnviar un pago costará $percentage% en impuestos. &a¡Haz
  &9$command &apara proceder!'
# Mensaje enviado cuando un jugador compra en una tienda.
Shop buy message: '&a¡Has comprado $item_name &apor $item_value $currency_name!'
# Mensaje enviado cuando un jugador interactúa con una tienda.
Shop current balance message: '&aTienes $currency_amount $currency_name.'
# Mensaje enviado cuando los jugadores no tienen suficiente moneda para comprar un objeto.
Shop insufficient funds message: '&c¡No tienes suficientes $currency_name!'
# Segunda parte del mensaje enviado cuando los jugadores intentan comprar un objeto que no pueden permitirse.
Shop item cost message: Ese objeto cuesta &c$item_value $currency_name.
# Mensaje enviado al vender un objeto a una tienda.
Shop sell message: '&a¡Has vendido $item_name &apor $currency_amount $currency_name!'
# Mensaje enviado al intentar vender un objeto que no pertenece a ese jugador.
Shop sale player items warning: '&c¡No puedes vender objetos que no estén actualmente ligados a tu alma!
  ¡Esto incluye objetos de otros niveles de prestigio!'
# Mensaje enviado al intentar vender un objeto que no es de EliteMobs.
Shop sale instructions: '&c¡Aquí solo puedes vender botín de EliteMobs! (Armaduras / armas
  soltadas por élites que muestran un valor en su lore)'
# Mensaje enviado al vender un lote de objetos élite.
shopBatchSellItem: '&a¡Has vendido tus objetos &apor $currency_amount $currency_name!'
lootShowerMaterial:
  # Establece el tipo de material de 1 moneda élite soltada.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Establece el ID del modelo personalizado para 1 moneda élite soltada. Usado por el paquete de recursos.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_AXE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_BOOTS: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_HELMET: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_PICKAXE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_SHOVEL: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_SWORD: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  DIAMOND_HOE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_AXE: 16.0
```

</details>
```Please specify the target language for the translation.

Once you provide the language, I will translate the text while retaining the markdown formatting.Please specify the language you would like the text translated into.Please specify the target language for the translation.