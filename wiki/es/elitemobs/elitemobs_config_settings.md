# Valores predeterminados de configuración de EliteMobs

**EliteMobs viene con los valores predeterminados recomendados instalados por defecto. Si cambias las cosas al azar, lo más probable es que solo empeores la experiencia en general.**

_**EliteMobs se proporciona a todos los usuarios con la configuración predeterminada recomendada. Si cambias las cosas al azar y luego solicitas asistencia, hay una gran probabilidad de que se te diga que restablezcas los archivos de configuración. Las modificaciones del plugin deben basarse en pruebas de juego y no en conjeturas.**_

## Introducción

EliteMobs actualmente ofrece una amplia gama de opciones de configuración debido a la alta demanda de personalización. Para mantener esta página wiki concisa, solo se mostrarán las configuraciones predeterminadas. 

Si deseas obtener más información sobre una configuración específica, puedes consultar el archivo de configuración y revisar los comentarios.

---

## config.yml

`config.yml` contiene principalmente configuraciones aleatorias que no podían encajar cómodamente en otro lugar en el momento de crearlas. Es el archivo de configuración con mayor probabilidad de ver cambios entre versiones.

<div align="left">

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el archivo de idioma utilizado por EliteMobs
# ¡NO cambies esto manualmente! Está destinado a ser instalado con el comando '/em language <languagefile>'
language: english
# Establece si las élites y los jefes generados por elitemobs siempre mostrarán sus etiquetas de nombre.
# ¡No recomendado!
alwaysShowEliteMobNameTags: false
# Establece la cantidad de mobs pasivos que deben estar muy cerca antes de que puedan fusionarse.
# ¡No establezcas esto en 0!
superMobStackAmount: 50
# Hace que las élites no dañen a los mobs pasivos con explosiones.
preventEliteCreeperDamageToPassiveMobs: true
# Establece si EliteMobs usará títulos para advertir a los jugadores sobre los permisos faltantes.
useTitlesForMissingPermissionMessages: true
# Establece si EliteMobs evitará la conversión de mobs con nombre a élites.
# Especialmente importante para la compatibilidad con otros plugins.
preventEliteMobConversionOfNamedMobs: true
# Establece si EliteMobs convertirá mobs con razones de generación personalizadas.
# La ejecución de ciertos plugins de jefe establecerá automáticamente esto en verdadero, sin importar cuál sea el valor en la configuración.
enableHighCompatibilityMode: false
# Establece la bonificación de generación de élite para el modo de juego de pesadilla
nightmareWorldSpawnBonus: 0.5
# Establece si el comando centralizado /em abre la página de estado principal del plugin.
# ¡Muy recomendado!
emLeadsToStatusMenu: true
# Establece si la ejecución de comandos específicos como /em wallet conducirá al menú /em donde esa información está centralizada.
otherCommandsLeadToEMStatusMenu: true
# Establece si la configuración está completa.
# No establezcas este valor manualmente, está destinado a ser modificado a través de comandos en el juego.
setupDoneV3: true
# Establece si las élites evitarán la generación de refuerzos de vainilla, como para la función de refuerzo de zombis.
preventVanillaReinforcementsForEliteEntities: true
# Establece la ubicación de generación predeterminada del servidor para EliteMobs. /em spawntp conducirá a esta ubicación.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Establece si EliteMobs regenerará los bloques explotados por las élites.
doExplosionRegen: true
# Establece si la regeneración de explosión también regenerará el contenido de contenedores como cofres.
# Ponerlo en falso hará que las explosiones de élite no exploten los contenedores.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Establece si el menú /em solo usará el estilo de menú basado en inventario que es compatible con Bedrock.
# Como recordatorio, los jugadores pueden hacer el comando /em alt para cambiar entre los estilos de menú /em
onlyUseBedrockMenus: false
# Establece el límite de caracteres por línea para las páginas del menú del libro.
# Reduce esta cantidad si el texto se corta en los menús de libros, como en las misiones.
characterLimitForBookMenuPagesV2: 170
# Establece si el espacio vacío del menú se rellenará con paneles de vidrio.
# No se recomienda si estás utilizando el paquete de recursos de EliteMobs.
useGlassToFillMenuEmptySpace: false
# Establece si se utilizará unicode para formatear el paquete de recursos de EliteMobs.
# No establezcas esto manualmente, se establece automáticamente al instalar el paquete de recursos.
# Solo configúralo manualmente si tuviste que fusionar el paquete de recursos de EliteMobs y espera que el espaciado podría no funcionar si lo haces.
menuUnicodeFormatting: false
# Establece el mensaje enviado a los jugadores si ejecutan '/em confirm' sin comandos pendientes.
noPendingCommands: '&c¡Actualmente no tienes ningún comando pendiente!'
# Establece el mensaje de seguimiento para los jefes que envían mensajes de seguimiento.
trackMessage: Rastrear a $name
# Establece el mensaje enviado a los jugadores que abren cofres del tesoro con requisitos de nivel por encima de su rango de gremio.
chestLowRankMessage: '&7[EM] &c¡Tu rango de gremio debe ser al menos $rank &cpara
  abrir este cofre!'
# Establece el mensaje enviado a los jugadores que intentan volver a abrir un cofre del tesoro que ya han abierto.
chestCooldownMessage: '&7[EM] &c¡Ya has abierto este cofre recientemente! ¡Espera $time!'
# Establece el mensaje que aparece recomendando el comando /em alt para los jugadores que tienen problemas con el comando /em
dismissEMMessage: '&8[EliteMobs] ¿El &2/elitemobs &fmenu no te funciona? ¡Prueba &2/elitemobs
  alt &fpara ver una versión alternativa del menú! &c¿No quieres volver a ver este mensaje?
  &4/em dismiss'
# Establece el mensaje que aparece cuando los jugadores ejecutan el comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] ¡El estilo del menú &2/elitemobs &fha cambiado! ¡Compruébalo!'
# Establece el mensaje que aparece cuando un jugador abre un cofre del tesoro pero no obtiene nada
treasureChestNoDropMessage: '&8[EliteMobs] &c¡No obtuviste nada! ¡Mejor suerte
  la próxima vez!'
# Establece el mensaje que aparece cuando un jugador intenta rastrear a un jefe que ya no es válido
bossAlreadyGoneMessage: '&c[EliteMobs] Lo siento, este jefe ya se ha ido!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contiene configuraciones relevantes tanto para el Centro del Gremio de Aventureros (el mundo) como para el sistema de subida de rango del Gremio de Aventureros.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si EliteMobs agregará salud máxima al desbloquear rangos de gremio como recompensa de prestigio
Add max health when unlocking higher guild ranks: true
# Establece si EliteMobs agregará una probabilidad de golpe crítico al desbloquear rangos de gremio como recompensa de prestigio
Add critical chance when unlocking higher guild ranks: true
# Establece si EliteMobs agregará probabilidad de esquivar al desbloquear rangos de gremio como recompensa de prestigio
Add dodge chance when unlocking higher guild ranks: true
# Establece si los comandos de usuario se redirigen al centro del gremio de aventureros. Esto es muy recomendable para la inmersión en el juego y con fines de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Establece el nombre para mostrar en el juego del gremio de aventureros
adventurersGuildMenuName: '&6&lCentro de Aventureros'
Prestige 0 rank 0: '&8Plebeyo - ¡desactiva las élites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Establece si el botín del jugador está limitado por su nivel de gremio.
#  Esta es una parte increíblemente importante de EliteMobs y es extremadamente recomendable.
limitLootBasedOnGuildTier: true
# Establece el mensaje enviado a los jugadores si su botín se reduce debido a su bajo nivel de gremio.
lootLimiterMessage: '&7[EM] &c¡Debes desbloquear el siguiente rango de gremio a través de /ag para saquear
  mejores objetos!'
# Establece los comandos que se ejecutan al subir de rango de gremio. Los marcadores de posición son:
# $prestigerank - genera el rango de prestigio
# $activerank - genera el rango actualmente activo
# $player - genera el nombre del jugador
onRankUpCommand: []
# Establece los comandos que se ejecutan al subir de rango de prestigio.
# $prestigerank - genera el rango de prestigio
# $activerank - genera el rango actualmente activo
# $player - genera el nombre del jugador
onPrestigeUpCommand: []
# Establece el nivel de prestigio para la primera bonificación de esquivar.
dodgePrestige3Bonus: 3.0
# Establece el nivel de prestigio para la segunda bonificación de esquivar.
dodgePrestige6Bonus: 6.0
# Establece el nivel de prestigio para la tercera bonificación de esquivar.
dodgePrestige9Bonus: 10.0
# Establece el nivel de prestigio para la primera bonificación de golpe crítico.
critPrestige2Bonus: 3.0
# Establece el nivel de prestigio para la segunda bonificación de golpe crítico.
critPrestige5Bonus: 6.0
# Establece el nivel de prestigio para la tercera bonificación de golpe crítico.
critPrestige8Bonus: 10.0
# Establece el nivel de prestigio para la primera bonificación de salud máxima.
healthPrestige1Bonus: 2.0
# Establece el nivel de prestigio para la segunda bonificación de salud máxima.
healthPrestige4Bonus: 2.5
# Establece el nivel de prestigio para la tercera bonificación de salud máxima.
healthPrestige7Bonus: 3.0
# Establece el nivel de prestigio para la tercera bonificación de salud máxima.
healthPrestige10Bonus: 4.0
# Establece la cantidad base estimada de jefes que deben matarse para poder permitirse una subida de rango.
baseKillsForRankUp: 100
# Establece la cantidad adicional estimada de jefes que deben matarse para poder subir de rango, por nivel.
# La fórmula es esta cantidad x el nivel en el que se encuentra actualmente el jugador.
additionalKillsForRankUpPerTier: 50
# Establece el título enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $player es un marcador de posición que se reemplaza con el nombre para mostrar del jugador.
prestigeUnlockMessageTitle: $player
# Establece el subtítulo enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $tier es un marcador de posición que se reemplaza con el nivel de prestigio del jugador.
prestigeUnlockMessageSubtitle: '&2ha desbloqueado $tier&2!'
# Establece el multiplicador que se aplicará a la probabilidad de generación cuando los jugadores estén usando el rango pacífico (plebeyo).
peacefulModeEliteChanceDecrease: 0.2
# Establece la lista de mundos a los que no se aplicarán las bonificaciones de rango de gremio
worldsWithoutAGBonuses: []
# Desactiva la capacidad de los usuarios para cambiar al modo pacífico para EliteMobs. El modo pacífico reduce el nivel y las tasas de generación de mobs alrededor de ese jugador específicamente
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite a los administradores personalizar diferentes aspectos del sistema AntiExploit. El sistema AntiExploit existe para evitar que los jugadores usen cosas como grinders de mobs para farmear monedas y botín fácilmente, y los empuja a realizar peleas reales y minidungeons en lugar de hacer clic afk hasta la cima del plugin.

Este es un sistema crítico para mantener activado si no quieres que la gente simplemente farmee afk todo el plugin y quieres que realmente interactúen con minidungeons.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el mensaje que aparece cuando se activa el antiexploit.
AntiExploit message: '&c[EM AntiExploit] &7Las élites cercanas no soltarán botín especial.'
# Establece si el antiexploit de cuarto oscuro 1 está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 1: true
# Establece si el antiexploit de cuarto oscuro 2 está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 2: true
# Establece si el antiexploit de cuarto oscuro 3 está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 3: true
# Establece si el antiexploit de cuarto oscuro grande 1 está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable large darkroom antiexploit 1: true
# Establece si el antiexploit de altura de enderman está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable enderman height antiexploit: true
# Establece si el antiexploit de montura está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable mount antiexploit: true
# Establece si los mobs de élite pueden recoger objetos
preventItemPickupByMobs: true
# Establece si el antiexploit de daño ambiental está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable ambient damage antiexploit: true
# Establece si el antiexploit de bloque de miel está habilitado.
# Las funciones antiexploit específicas no están documentadas intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se proporciona más información sobre cómo funciona específicamente.
Enable honey block antiexploit: true
# Establece el umbral para la activación antiexploit. Los valores más altos lo hacen más tolerante. No se recomienda modificar esto.
antiExploitThreshold: 10
# Establece si el antiexploit sin ruta está habilitado
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contiene la configuración del sistema Combat Tag. Este sistema aún está muy lejos de estar completo, pero intenta administrar el comportamiento del jugador una vez que entra en combate.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la etiqueta de combate está habilitada.
# Cuando está habilitado, los jugadores voladores que entran en combate se configuran para que dejen de volar.
Enable combat tag: true
# Establece el mensaje enviado cuando se activa la etiqueta de combate.
Combat tag message: '&c[EliteMobs] ¡Etiqueta de combate activada!'
# Establece si el comando /ag tendrá un temporizador antes de la teletransportación
Enable adventurers guild teleport timer: true
# Establece el mensaje de acción establecido mientras se espera el temporizador de teletransportación.
Teleport time left: '&7[EM] Teletransportando en &a$time &7segundos...'
# Establece el mensaje enviado cuando los jugadores se mueven mientras esperan la teletransportación.
Teleport cancelled: '&7[EM] &c¡Teletransportación interrumpida!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contiene la configuración de DiscordSRV. Si quieres ver cómo configurar esta función, [haz clic aquí!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# La documentación se puede encontrar aquí: https://magmaguy.com/wiki.html#lang=en&article=elitemobs+discordsrv.md
announcementRoomName: DEBES_PONER_EL_NOMBRE_DE_LA_SALA_DE_DISCORD_EN_LA_QUE_QUIERES_QUE_SE_EMITAN_LOS_ANUNCIOS_DE_ELITEMOBS_COMO_LO_TIENES_EN_TU_ARCHIVO_DE_CONFIGURACIÓN_DE_DISCORDSRV_CONSULTA_EL_WIKI_DE_ELITEMOBS_PARA_MÁS_DETALLES

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contiene la configuración de la economía de EliteMobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la economía de EliteMobs está habilitada. Esto significa monedas de élite, la capacidad de comprar y vender equipo y la capacidad de mejorar los rangos de gremio
# ¡Si está deshabilitado, los jugadores no podrán progresar en el plugin!
enableEconomy: true
# Establece el valor de reventa de los objetos, como un % del precio original. 5 es 5%
itemResaleValue: 5.0
# Establece el nombre en el juego de la moneda utilizada.
currencyName: Monedas de élite
# Establece el plugin para usar Vault. ¡ESTO NO SE RECOMIENDA! Lee por qué aquí: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Establece si las élites soltarán monedas según su nivel.
enableCurrencyShower: true
# Establece el multiplicador de la moneda que sueltan las élites.
currencyShowerTierMultiplier: 1.0
# Establece el mensaje enviado cuando los jugadores recogen la moneda de élite.
chatCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Establece el mensaje de la barra de acción enviado cuando los jugadores recogen la moneda de élite.
actionbarCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Envía el mensaje que los jugadores reciben después de saquear la moneda. Útil para fines de tutorial.
adventurersGuildNotificationMessages: '&7[EM] ¿Dinero extra para gastar? ¡Prueba &a/ag !'
# Establece la tasa de impuestos para las transacciones entre jugadores.
# Muy recomendable por razones de equilibrio, ya que los jugadores de alto nivel pueden ganar hasta 6 veces más moneda e intentar usar a otros jugadores para evitar los restablecimientos de moneda de prestigio.
playerToPlayerPaymentTaxes: 0.2
# Mensaje enviado al enviar moneda de élite a otros jugadores.
Economy pay message v2: '&2Has pagado &2$amount_sent $currency_name &2a $receiver&2,
  ¡que recibió $amount_received después de impuestos!'
# Mensaje enviado después de que los jugadores envían moneda.
Economy currency left message: Ahora tienes &2$amount_left $currency_name
# Mensaje recibido al recibir moneda.
Economy money from payment message: Has recibido &2$amount_received $currency_name
  &fde $sender
# Mensaje enviado cuando los jugadores intentan enviar una cantidad de monedas que no tienen.
Economy payment insufficient currency: '&c¡No tienes suficiente $currency_name para
  hacer eso!'
# Mensaje de saldo /em
Wallet command message: Tienes &2$balance $currency_name
# Mensaje de confirmación enviado cuando los jugadores intentan enviar moneda a otro jugador.
Tax confirmation message: '&cEnviar un pago costará $percentage% en impuestos. &aHaz
  &9$command &apara continuar!'
# Mensaje enviado cuando un jugador compra en una tienda.
Shop buy message: '&a¡Has comprado $item_name &apor $item_value $currency_name!'
# Mensaje enviado cuando un jugador interactúa con una tienda.
Shop current balance message: '&aTienes $currency_amount $currency_name.'
# Mensaje enviado cuando los jugadores no tienen suficiente moneda para comprar un objeto
Shop insufficient funds message: '&c¡No tienes suficiente $currency_name!'
# Segunda parte del mensaje enviado cuando los jugadores intentan comprar un objeto que no pueden pagar.
Shop item cost message: Ese objeto cuesta &c$item_value $currency_name.
# Mensaje enviado al vender un objeto a una tienda.
Shop sell message: '&a¡Has vendido $item_name &apor $currency_amount $currency_name!'
# Mensaje enviado al intentar vender un objeto que no pertenece a ese jugador.
Shop sale player items warning: '&c¡No puedes vender objetos que no estén actualmente ligados a tu alma
  a ti! ¡Esto incluye objetos de otros niveles de prestigio!'
# Mensaje enviado al intentar vender un objeto que no es de EliteMobs
Shop sale instructions: '&c¡Solo puedes vender botín de EliteMobs aquí! (Armadura / armas
  que sueltan las élites que muestran un valor en su descripción)'
# Mensaje enviado al vender un lote de objetos de élite.
shopBatchSellItem: '&a¡Has vendido tus objetos &apor $currency_amount $currency_name!'
lootShowerMaterial:
  # Establece el tipo de material de 1 moneda de élite que se suelta.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Establece el ID de modelo personalizado para 1 moneda de élite que se suelta. Utilizado por el paquete de recursos.
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
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_BOOTS: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_LEGGINGS: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_CHESTPLATE: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_HELMET: 16.0


```

</details>

---
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_PICKAXE: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_SHOVEL: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_HOE: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  IRON_SWORD: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  SHIELD: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  BOW: 16.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  CHAINMAIL_BOOTS: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  CHAINMAIL_LEGGINGS: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  CHAINMAIL_CHESTPLATE: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  CHAINMAIL_HELMET: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  STONE_SWORD: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  STONE_AXE: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  STONE_PICKAXE: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  STONE_SHOVEL: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  STONE_HOE: 15.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_AXE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_BOOTS: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_LEGGINGS: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_CHESTPLATE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_HELMET: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_SWORD: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_SHOVEL: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_PICKAXE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_HOE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  GOLDEN_APPLE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  ENCHANTED_GOLDEN_APPLE: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  LEATHER_BOOTS: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  LEATHER_LEGGINGS: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  LEATHER_CHESTPLATE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  LEATHER_HELMET: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  WOODEN_SWORD: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  WOODEN_AXE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  WOODEN_HOE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  WOODEN_PICKAXE: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  TRIDENT: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  ELYTRA: 17.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  TURTLE_HELMET: 13.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_AXE: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_PICKAXE: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_SHOVEL: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_HOE: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_SWORD: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_HELMET: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_CHESTPLATE: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_LEGGINGS: 18.0
  # Establece el valor de este material para el sistema de moneda de elitemobs.
  NETHERITE_BOOTS: 18.0
  # Establece el valor predeterminado del material para los objetos no definidos específicamente.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contiene las opciones de configuración para los eventos. 

_**Nota: estas son solo las configuraciones globales muy básicas.**_ 

Puedes modificar aún más los eventos específicos en la carpeta `events`.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si los eventos solo se transmitirán en el mundo en el que ocurren los eventos.
Only broadcast event message in event worlds: false
# Establece el tiempo de reutilización mínimo, en minutos, entre eventos cronometrados
actionEventMinimumCooldownMinutes: 240
# Establece si ocurrirán eventos de acción.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Establece si ocurrirán eventos cronometrados.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contiene la configuración global de los objetos de élite.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece los caracteres prefijados a los encantamientos de vainilla en la descripción del objeto.
noItemDurabilityMessage: '&8[EliteMobs] $item &4está roto! ¡No funcionará hasta que se repare!'
# Establece si se soltará algún botín de EliteMobs.
# ¡Incluye monedas de élite, objetos personalizados, objetos generados por procedimientos, todo!
# No se recomienda, hace que la progresión mmorpg sea imposible.
doEliteMobsLoot: true
# Establece si el botín generado por procedimientos tendrá diferentes colores según la calidad del objeto.
doMMORPGColorsForItems: true
# Establece si se evita la colocación de objetos personalizados, como pancartas o bloques.
# Esto se recomienda: ¡los objetos personalizados se rompen cuando se colocan y no se pueden recuperar!
preventCustomItemPlacement: true
# ¡Establece el formato para la descripción de todos los objetos personalizados de EliteMobs!
# Los siguientes son marcadores de posición válidos:
# $itemLevel - muestra el nivel del objeto
# $prestigeLevel - muestra el nivel de prestigio
# $weaponOrArmorStats - muestra las estadísticas de élite de DPS o armadura de élite, según el objeto
# $soulbindInfo - muestra a quién, si es que hay alguien, está ligado al alma el objeto
# $itemSource - muestra de dónde vino el objeto, como un mob o una tienda
# $ifLore - hace que una línea solo aparezca si el objeto tiene una descripción personalizada. Solo se aplica a objetos personalizados
# $customLore - muestra la totalidad de la descripción personalizada. Solo se aplica a objetos personalizados
# $ifEnchantments - hace que una línea solo aparezca si el objeto tiene algún encantamiento
# $enchantments - muestra los encantamientos en el objeto
# $eliteEnchantments - muestra los encantamientos de élite en el objeto
# $ifCustomEnchantments - muestra los encantamientos personalizados en el objeto
# $customEnchantments - muestra los encantamientos personalizados en el objeto
# $ifPotionEffects - solo muestra la línea si el objeto tiene efectos de poción
# $potionEffects - muestra los efectos de poción en el objeto
# $loreResaleValue - muestra el valor del objeto. Puede mostrar el precio de compra o venta según dónde se vea
# Importante: varios de los marcadores de posición se pueden personalizar aún más mediante la configuración de configuración más abajo
itemLoreStructureV2:
- §7§m§l---------§7<§lInformación de equipo§7>§m§l---------
- '§7Nivel del objeto: §f$itemLevel §7Prestigio §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lDescripción§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEncantamientos§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEncantamientos personalizados§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEfectos§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Establece la descripción de la fuente de la tienda para la compra en la tienda
shopSourceItemLores: '&7Comprado en una tienda'
# Establece la descripción de la fuente de la tienda para los objetos saqueados de los jefes
mobSourceItemLores: '&7Saqueado de $mob'
# Establece la descripción del valor del objeto
loreWorths: '&7Valor: $worth $currencyName'
# Establece la descripción del valor de reventa del objeto
loreResaleValues: '&7Se vende por $resale $currencyName'
# Establece la probabilidad base de que cualquier objeto de élite caiga de los mobs de élite
flatDropRateV3: 0.2
# Establece la probabilidad base de que cualquier objeto de élite caiga de los jefes regionales
regionalBossNonUniqueDropRate: 0.05
# Establece si los jefes regionales pueden soltar botín de vainilla
regionalBossesDropVanillaLoot: false
# Establece cuánto aumenta la probabilidad de que caiga un objeto de élite en función del nivel del jefe.
# El nivel del jefe se multiplica por este valor y se suma a la probabilidad base.
# ¡Ya no se recomienda tener esto por encima de 0.0!
levelIncreaseDropRateV2: 0.0
# Establece la probabilidad ponderada de que caiga un objeto generado por procedimientos.
# ¡Este sistema utiliza probabilidades ponderadas! Busca eso en Google si no sabes lo que es.
proceduralItemDropWeight: 90.0
# Establece la probabilidad relativa de que caiga un objeto ponderado.
# Los objetos ponderados son objetos personalizados que no tienen un peso dinámico, como los amuletos.
weighedItemDropWeight: 1.0
# Establece la probabilidad relativa de que caiga un objeto fijo. Estos son objetos personalizados que no escalan.
fixedItemDropWeight: 10.0
# Establece la probabilidad relativa de que caiga un objeto limitado. Estos son objetos personalizados que escalan hasta un nivel específico
limitedItemDropWeight: 3.0
# Establece la probabilidad relativa de que caiga un objeto escalable. Estos son objetos personalizados que pueden escalar a cualquier nivel y son los más comunes en el plugin.
scalableItemDropWeight: 6.0
# Establece el multiplicador para el botín de vainilla del mob, en función del nivel del mob.
defaultLootMultiplier: 0.0
# Establece el nivel máximo para el multiplicador de botín predeterminado.
levelCapForDefaultLootMultiplier: 200
# Establece el multiplicador de experiencia de Minecraft vainilla que se suelta para el jefe, en función del nivel del jefe.
defaultExperienceMultiplier: 1.0
# Establece el nivel del botín máximo que soltará EliteMobs. Se recomienda encarecidamente dejarlo en 200.
maximumItemLevel: 200
# Establece si se utilizarán los encantamientos de élite. 
# Los encantamientos de élite reemplazan a los encantamientos de vainilla cuando los objetos de élite obtienen niveles de encantamiento que van más allá de los límites de vainilla.
# Ejemplo: si se supone que una espada de élite tiene afilado 10, dado que el límite de Minecraft es el nivel 5, tendrá afilado 5 y afilado de élite 5.
# El afilado de élite solo afecta a los mobs generados por EliteMobs. Esto se hace para que el combate PVP y el de vainilla no se desequilibren.
useEliteEnchantments: true
# Establece el nombre para mostrar que se utilizará para los encantamientos de élite en la descripción del objeto.
eliteEnchantmentLoreStrings: Élite
# Establece si EliteMobs verá las azadas como armas válidas para los cálculos de daño.
useHoesAsWeapons: false
# Establece si EliteMobs generará partículas especiales sobre los objetos de alta calidad que se sueltan.
enableRareItemParticleEffects: true
# Establece los símbolos que se utilizarán en la descripción del objeto para mostrar que un efecto de poción se aplica al golpear a la entidad que recibe el golpe.
potionEffectOnHitTargetLore: '&4⚔☠'
# Establece los símbolos que se utilizarán en la descripción del objeto para mostrar que un efecto de poción se aplica al golpear al jugador que realiza el golpe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Establece los símbolos que se utilizarán en la descripción del objeto para mostrar que un efecto de poción se seguirá aplicando mientras el jugador lo empuñe.
potionEffectContinuousLore: '&6⟲'
# Establece los caracteres prefijados a los encantamientos de élite en la descripción del objeto.
eliteEnchantmentLoreColor: '&9◇'
# Establece los caracteres prefijados a los encantamientos de vainilla en la descripción del objeto.
vanillaEnchantmentLoreColor: '&7◇'
# Establece los caracteres prefijados a los encantamientos personalizados en la descripción del objeto.
customEnchantmentColor: '&3◇'
# Establece los caracteres prefijados a los efectos de poción en la descripción del objeto.
potionEffectLoreColor: '&5◇'
# Establece el texto que aparecerá en el objeto si el objeto no está ligado al alma.
noSoulbindLore: '&7¡No ligado al alma!'
# Establece si el objeto de élite se puede encantar por medios de vainilla. ¡Esto no se recomienda ya que EliteMobs tiene su propio sistema de encantamientos personalizados con su propio equilibrio!
preventEliteItemEnchantment: true
# Establece si los objetos de élite se pueden desencantar por medios de vainilla.
preventEliteItemDisenchantment: true
# Establece el mensaje que aparece para los jugadores cuando intentan desencantar un objeto y eso no está permitido.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] ¡No se pueden desencantar objetos de élite!'
# Establece si los objetos de élite se pueden actualizar de diamante a netherite por medios de vainilla. ¡No recomendado!
preventEliteItemDiamondToNetheriteUpgrade: true
# Establece si los objetos de élite solo perderán durabilidad al morir.
# ¡Este es un sistema importante para EliteMobs, y se recomienda encarecidamente ya que las peleas de alto nivel son casi imposibles sin él!
eliteItemsDurabilityLossOnlyOnDeath: true
# Establece el multiplicador de pérdida de durabilidad para los objetos de élite si está configurado para perder durabilidad al morir.
# Los valores entre 0.0 y 1.0 reducen la pérdida de durabilidad y los valores por encima de 1.0 la aumentan.
# Ejemplo: 0.5 inflige el 50% de la pérdida de durabilidad, 2.0 inflige el 200% de la pérdida de durabilidad.
eliteItemsDurabilityLossMultiplier: 1.0
# Establece el mensaje que aparece cuando el desguace de objetos se realiza correctamente.
scrapSucceededMessageV2: '&8[EliteMobs] &2¡El desguace se realizó correctamente $amount veces!'
# Establece el mensaje que aparece cuando falla el desguace de objetos.
scrapFailedMessageV2: '&8[EliteMobs] &c¡El desguace falló $amount veces!'
# Establece si el botín de élite debe colocarse directamente en los inventarios de los jugadores.
putLootDirectlyIntoPlayerInventory: false
# Establece la diferencia de nivel máxima que pueden tener los jugadores antes de que ya no puedan saquear objetos que tengan un nivel demasiado bajo.
# Esto se calcula en función del nivel promedio del botín que lleva el jugador.
# Por ejemplo, si se establece en 10 y un jugador tiene equipo de nivel 50, no podrá farmear jefes de nivel 39.
lootLevelDifferenceLockout: 10
# Establece si EliteMobs evitará que los objetos de élite se rompan cuando se utiliza el sistema de pérdida de durabilidad al morir.
# Los jugadores no podrán usar objetos sin durabilidad de todos modos, esto es simplemente para evitar la pérdida accidental de objetos de alto nivel pero baja durabilidad.
preventEliteItemsFromBreaking: true
# Establece el nivel mínimo, +7, de jefes que pueden generar por procedimientos soltar equipo de diamante en EliteMobs.
# No hay equipo de netherite generado por procedimientos en EliteMobs, solo botín personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Establece el mensaje que se muestra en el chat cuando se tira con éxito para obtener botín a través del comando /em simloot <nivel> <veces>.
simlootMessageSuccess: '&8[EliteMobs] &2¡Tiré para obtener botín y obtuve $itemName &2!'
# Establece el mensaje que se muestra en el chat cuando falla el tiro para obtener botín a través del comando /em simloot <nivel> <veces>.
simlootMessageFailure: '&8[EliteMobs] &c¡Tiré para obtener botín y no obtuve nada!'
# Establece el mensaje que reciben los jugadores cuando el botín de élite se deposita directamente en sus inventarios.
directDropCustomLootMessage: '&8[EliteMobs] &2¡Obtuviste $itemName &2!'
# Establece el mensaje que reciben los jugadores cuando el botín de vainilla se deposita directamente en sus inventarios.
directDropMinecraftLootMessage: '&8[EliteMobs] &a¡Obtuviste $itemName &a!'
# Establece el mensaje que reciben los jugadores cuando las monedas de élite se depositan directamente en sus inventarios.
directDropCoinMessage: '&8[EliteMobs] &a¡Obtuviste &2$amount $currencyName &a!'
# Establece si EliteMobs ocultará los atributos de Minecraft vainilla.
hideItemAttributes: true
# Establece la entrada de descripción específica del arma en un objeto de élite. El marcador de posición $EDPS se reemplaza con el DPS de élite (daño por segundo) del arma.
weaponEntry: '&7DPS de élite: &2$EDPS'
# Establece la entrada de descripción específica de la armadura en un objeto de élite. El marcador de posición $EDEF se reemplaza con la DEF de élite (defensa) del arma.
armorEntry: '&7Armadura de élite: &2$EDEF'
# Establece el mensaje enviado cuando un jugador mata a un jefe pero el nivel del equipo es demasiado diferente del nivel del jefe para obtener monedas
levelRangeTooDifferent: '&8EM] &4¡Tu equipo es de nivel $playerLevel y el jefe es de nivel
  $bossLevel, la diferencia de nivel es demasiado alta para obtener monedas!'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contiene todas las opciones de configuración relacionadas con el sistema de combate personalizado y la mayoría de las opciones de configuración relacionadas en general con el funcionamiento de Elite Mobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si se generarán élites generadas naturalmente. ¡Nota: los mobs de eventos como el rey zombi no son élites generadas naturalmente! Tendrás que deshabilitar los eventos si quieres deshabilitar los jefes de eventos.
doNaturalEliteMobSpawning: true
# Establece si los spawns generados a partir de generadores de mobs se pueden convertir en élites. ¡No recomendado!
doSpawnersSpawnEliteMobs: false
# Establece el porcentaje de mobs generados naturalmente que se convierten en mobs de élite.
eliteMobsSpawnPercentage: 0.05
# Establece el rango de super mob para escanear en busca de apilamiento de super mob
superMobStackRange: 15
# Establece el nivel máximo en el que pueden aparecer las élites.
# Nota: el nivel de mob de élite se basa en la armadura y las armas que usan los jugadores, y la armadura solo escala hasta el nivel 200.
naturalEliteMobsLevelCap: 250
# Establece si las élites usarán armadura en función de su nivel. Esto es solo para fines visuales y no afecta al combate.
doElitesWearArmor: true
# Establece si las élites usarán cascos en función de su nivel. Esto evitará que se quemen fácilmente durante el día.
doElitesWearHelmets: true
# Establece si las élites tendrán rastros visuales a su alrededor advirtiendo a los jugadores sobre qué jugadores tienen.
doNaturalEliteMobVisualEffects: true
# Establece si las élites generadas a partir de generadores harán efectos visuales.
doSpawnerEliteMobVisualEffects: false
# Establece si algunos poderes harán la fase de advertencia del poder. Esto es muy importante ya que las fases de advertencia generalmente significan que se puede esquivar el poder, y la señal visual les permite a los jugadores saber dónde esquivar.
doPowerBuildupVisualEffects: true
# Establece si se utilizarán mensajes de muerte personalizados cuando los jugadores mueran por élites.
doCustomEliteMobsDeathMessages: true
# Establece si EliteMobs mostrará indicadores de salud para las élites.
doDisplayMobHealthOnHit: true
# Establece si EliteMobs mostrará indicadores de daño por daño infligido a las élites.
doDisplayMobDamageOnHit: true
# Establece si el nivel de las élites aumentará en función de la distancia desde el spawn.
# Este es un valor agregado además de su nivel normal, lo que significa que si un jugador usa equipo de nivel 100 cerca del spawn y el jefe tiene +1 nivel debido a la distancia desde el spawn, el jefe aparecerá en el nivel 101.
# Esta opción generalmente no se recomienda, especialmente si tienes un sistema tp aleatorio en tu servidor.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Establece la distancia entre incrementos de nivel para aumentos de nivel basados ​​en la distancia.
distanceBetweenIncrements: 100.0
# Establece cuántos niveles aumentan en cada incremento de distancia para aumentos de nivel basados ​​en la distancia.
levelIncreaseAtIncrements: 1.0
# Establece si los poderes de las élites se ocultarán hasta que entren en combate. Esto se recomienda por razones de rendimiento.
hideEliteMobPowersUntilAggro: true
# Establece el multiplicador para el daño infligido a todos los jefes generados por EliteMobs, excepto aquellos que usan el sistema de daño normalizado (jefes de mazmorras regionales). Los valores más altos aumentan el daño infligido, lo que facilita la muerte de los jefes.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Establece el multiplicador para el daño infligido a los jugadores por las élites. Los valores más altos aumentan la cantidad de daño infligido por los jefes, excepto aquellos que usan el sistema de daño normalizado (jefes de mazmorras regionales), lo que hace que los jefes golpeen más fuerte.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Establece si se pueden rastrear jefes especiales.
showCustomBossLocation: true
# Establece el mensaje enviado a los jugadores para rastrear la ubicación de un jefe.
bossLocationMessage: '&7[EM] &2[¡Haz clic para rastrear!]'
# Establece los comandos que se ejecutan cuando muere una élite. Los marcadores de posición válidos son:
# $level para el nivel del jefe
# $name para el nombre del jefe
# $players hará que el comando se ejecute para cada jugador que participó en la muerte. Por ejemplo, si Bob y Steve mataron a un jefe, 'broadcast $players killed the boss!' ejecutará 'bob killed the boss' y 'steve killed the boss!'
commandsOnEliteMobDeath: []


```

</details>

---


# Establece el mensaje enviado a los jugadores que participan en las muertes de grandes jefes.
bossKillParticipationMessage: '&eTu daño: &2$playerDamage'
# Establece si los jefes regeneran la salud cuando salen del combate. Muy recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Establece el mensaje enviado a los jugadores que intentan rastrear a los jefes que se encuentran actualmente en un mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: ¡En un mundo diferente!'
# Establece el prefijo agregado a los indicadores de daño cuando los jugadores golpean a un jefe con algo a lo que el jefe es débil.
weakTextColor: '&9'
# Establece el prefijo agregado a los indicadores de daño cuando los jugadores golpean a un jefe con algo a lo que el jefe es fuerte.
resistTextColor: '&c'
# Establece el mensaje que aparece cuando los jugadores golpean al jefe con algo a lo que el jefe es débil.
weakText: '&9&l¡Débil!'
# Establece el mensaje que aparece cuando los jugadores golpean al jefe con algo a lo que el jefe es fuerte.
resistText: '&c&l¡Resiste!'
# Establece si se utilizarán imágenes para mostrar que un jefe es débil contra un ataque.
doWeakEffect: true
# Establece si se utilizarán imágenes para mostrar que un jefe es fuerte contra un ataque.
doResistEffect: true
# Establece el multiplicador para el daño infligido a los jefes que utilizan el sistema de daño normalizado (jefes de mazmorras regionales). Los valores más altos aumentan el daño infligido, lo que facilita la muerte de los jefes.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Establece el multiplicador para el daño infligido a los jugadores por los jefes que utilizan el sistema de daño normalizado (jefes de mazmorras regionales). Los valores más altos aumentan la cantidad de daño infligido por los jefes, lo que hace que los jefes golpeen más fuerte.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Establece el daño inicial para los jefes personalizados que utilizan el daño normalizado (generalmente jefes regionales).
normalizedRegionalBossBaselineDamageV2: 3.0
# Establece la salud inicial para los jefes personalizados que utilizan la salud normalizada (generalmente jefes regionales).
normalizedRegionalBossBaselineHealthV3: 4.0
# Establece si los jefes regionales utilizarán el sistema de combate normalizado.
# Esto es muy recomendable, y el contenido prefabricado no se equilibrará correctamente si se modifica.
normalizeRegionalBosses: true
# Establece el mensaje que aparece cuando un jefe se cura al salir del combate.
fullHealMessage: '&2¡CURACIÓN COMPLETA!'
# Establece los multiplicadores aplicados a los ataques contra los que los jefes son fuertes y débiles.
strengthAndWeaknessDamageMultipliers: 2.0
# Establece el multiplicador aplicado a la reducción de daño del efecto de poción de resistencia para los jugadores.
resistanceDamageMultiplier: 1.0
# Establece el multiplicador aplicado a la reducción de daño cuando un jugador sostiene un escudo para ataques cuerpo a cuerpo (se excluyen los poderes).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contiene todas las opciones de configuración para configurar objetos generados por procedimientos.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: Espada
  bowName: Arco
  pickaxe: Pico
  spade: Pala
  hoe: Azada
  axe: Hacha
  helmet: Casco
  chestplate: Coraza
  leggings: Grebas
  boots: Botas
  shears: Tijeras
  fishingRod: Caña de pescar
  shield: Escudo
  trident: Tridente
  crossbow: Ballesta
nameFormats:
- $verb $itemType of the $adjective $noun
- $itemType of the $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Dawn
...
adjectives:
- Adorable
- Beautiful
...
verbs:
- Slashing
- Cutting
...
verb-ers (noun):
- World Breaker
- World Shatterer
...
validMaterials:
  DIAMOND_HELMET: true
  DIAMOND_CHESTPLATE: true
  DIAMOND_LEGGINGS: true
  DIAMOND_BOOTS: true
  DIAMOND_SWORD: true
  DIAMOND_AXE: true
  IRON_HELMET: true
  IRON_CHESTPLATE: true
  IRON_LEGGINGS: true
  IRON_BOOTS: true
  IRON_SWORD: true
  IRON_AXE: true
  GOLDEN_HELMET: true
  GOLDEN_CHESTPLATE: true
  GOLDEN_LEGGINGS: true
  GOLDEN_BOOTS: true
  GOLDEN_SWORD: true
  GOLDEN_AXE: true
  CHAINMAIL_HELMET: true
  CHAINMAIL_CHESTPLATE: true
  CHAINMAIL_LEGGINGS: true
  CHAINMAIL_BOOTS: true
  LEATHER_HELMET: true
  LEATHER_CHESTPLATE: true
  LEATHER_LEGGINGS: true
  LEATHER_BOOTS: true
  STONE_SWORD: true
  STONE_AXE: true
  WOODEN_SWORD: true
  WOODEN_AXE: true
  SHIELD: true
  TURTLE_HELMET: true
  TRIDENT: true
  BOW: true
  CROSSBOW: true
```

</details>

---

## ValidWorlds.yml

`ValidWorlds.yml` contiene la lista de mundos que EliteMobs ha detectado, así como opciones para personalizar las funciones de EliteMobs en ellos.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece la lista de mundos basados ​​en zonas.
# ¡EL MODO DE JUEGO BASADO EN ZONAS ESTÁ DESACTUALIZADO Y PRONTO SE ELIMINARÁ!
zoneBasedWorlds: []
# Establece la lista de mundos en modo pesadilla.
# Los mundos en modo pesadilla son un modo de juego en el que los días son más cortos y los jugadores no pueden dormir.
# Los mundos de pesadilla también tienen mayores cantidades de engendros de élite.
# https://github.com/MagmaGuy/EliteMobs/wiki/%5BGame-Mode%5D-Nightmare-mode
nightmareWorlds: []
Valid worlds:
  world: true
  world_nether: true
  world_the_end: true
```

</details>

---

## Arenas.yml

`Arenas.yml` contiene los mensajes y la configuración predeterminados de las arenas que puedes modificar.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Mensaje que aparece cuando no hay suficientes jugadores presentes para iniciar una arena.
notEnoughPlayersMessage: '&8[EliteMobs] &c¡Necesitas al menos $amount para comenzar la partida!'
# Título que aparece cuando se inicia una arena.
startingMessage: '&2¡Comenzando!'
# Subtítulo que aparece cuando se inicia una arena.
startingSubtitle: '&2en $count...'
# Mensaje que aparece cuando una arena está llena.
arenaFullMessage: '&4[EliteMobs] &c¡La arena está llena! ¡Puedes espectar mientras
  esperas a que termine!'
# Mensaje que aparece cuando un jugador intenta unirse a una arena activa.
arenasOngoingMessage: '&4[EliteMobs] &c¡No puedes unirte a la arena ahora, una partida está actualmente
  en curso! ¡Puedes espectar mientras esperas a que termine!'
# Mensaje que aparece para recordar a los jugadores cómo iniciar una arena después de unirse como jugador.
instanceStartHintMessage: '&2[EliteMobs] &aPuedes iniciar la instancia haciendo &2/em
  start'
# Mensaje que aparece para recordar a los jugadores cómo salir de una arena.
instanceQuitHintMessage: '&4[EliteMobs] &cPuedes salir de la instancia haciendo &4/em
  quit'
# Mensaje que aparece cuando los jugadores se unen a una arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &aPuedes iniciar la arena haciendo &2/em start\
  \ &asi hay al menos &2$count &ajugadores en ella! \nPuedes salir de la arena haciendo
  &c/em quit"
# Mensaje que aparece para recordar a los jugadores cómo salir de una arena después de unirse como espectador.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aPuedes salir de la arena en cualquier momento usando
  &2/em quit'
# Mensaje de título que aparece cuando comienza una oleada.
waveTitle: '&aOleada &2$wave'
# Mensaje de subtítulo que aparece cuando comienza una oleada.
waveSubtitle: ''
# Título que aparece cuando se completa una arena.
victoryTitle: '&2¡Victoria!'
# Subtítulo que aparece cuando se completa una arena.
victorySubtitle: '&a¡Completadas &2$wave &aoleadas!'
# Título que aparece cuando los jugadores fallan en una arena.
defeatTitle: '&4¡Derrota!'
# Subtítulo que aparece cuando los jugadores fallan en una arena.
defeatSubtitle: '&c¡Se alcanzó la oleada &4$wave&c!'
# Mensaje transmitido cuando los jugadores vencen una arena.
victoryBroadcast: ¡La arena $arenaName fue conquistada por $players!
# Título que aparece cuando un jugador se une a una arena.
joinPlayerTitle: '&a¡Comienza con &2/em start &a!'
# Subtítulo que aparece cuando un jugador se une a una arena.
joinPlayerSubtitle: '&c¡Sal con &4/em quit &c!'
# Título que aparece cuando un espectador se une a una arena.
joinSpectatorTitle: '&a¡Ahora espectando!'
# Subtítulo que aparece cuando un espectador se une a una arena.
joinSpectatorSubtitle: '&c¡Sal con &4/em quit &c!'
# Establece el mensaje enviado a los jugadores si no tienen permiso para entrar en una arena.
noArenaPermissionMessage: '[EliteMobs] ¡No tienes permiso para entrar en esta
  arena!'
```

</details>

---

## Database.yml

`Database.yml` Incluye configuraciones para cómo quieres que EM maneje las bases de datos.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si se utilizará MySQL. De forma predeterminada, EliteMobs utiliza SQLite. Si deseas utilizar MySQL, necesitarás una configuración válida de MySQL.
useMySQL: false
# El host de tu base de datos MySQL
mysqlHost: localhost
# El puerto de tu base de datos MySQL
mysqlPort: '3306'
# El nombre de la base de datos
mysqlDatabaseName: elitemobs
# El nombre de usuario para MySQl
mysqlUsername: tu_nombre_de_usuario_mysql_aquí
# La contraseña para tu base de datos MysSQL
mysqlPassword: tu_contraseña_mysql_aquí
# Si se debe usar SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Incluye configuraciones que te permiten ajustar los mensajes que aparecen en las mazmorras y otras configuraciones como multiplicadores de daño para los efectos aplicados.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el multiplicador de daño para el daño por veneno en las mazmorras
# Esto es importante para el equilibrio ya que, de forma predeterminada, el daño es un poco demasiado alto para las mazmorras tal como las diseñamos.
poisonDamageMultiplier: 0.5
# Establece el multiplicador de daño para el daño por fuego en las mazmorras
# Esto es importante para el equilibrio ya que, de forma predeterminada, el daño es un poco demasiado alto para las mazmorras tal como las diseñamos.
fireDamageMultiplier: 0.5
# Establece el multiplicador de daño para el daño por marchitamiento en las mazmorras
# Esto es importante para el equilibrio ya que, de forma predeterminada, el daño es un poco demasiado alto para las mazmorras tal como las diseñamos.
witherDamageMultiplier: 0.5
# Establece si se permitirá PvP en las mazmorras
friendlyFireInDungeons: false
# Establece el texto que aparece sobre las pancartas de resurrección en las mazmorras
dungeonRezInstructions: '&a¡Golpea para revivir!'
# ¡Establece el texto que muestra cuántas vidas les quedan a los jugadores en una mazmorra! Marcadores de posición:
# $amount - la cantidad de vidas restantes
dungeonLivesLeftText: '&c¡Quedan $amount vidas!'
# ¡Establece el texto para unirse a una mazmorra como jugador! Marcadores de posición:
# $dungeonName - el nombre de la mazmorra
joinDungeonAsPlayerText: '&f¡Únete a $dungeonName como jugador!'
# ¡Establece el texto para unirse a una mazmorra como espectador! Marcadores de posición:
# $dungeonName - el nombre de la mazmorra
joinDungeonAsSpectatorText: '&f¡Únete a $dungeonName como espectador!'
# Establece el título que aparecerá en la descripción del objeto de los menús de mazmorras instanciadas
# $difficulty es el marcador de posición para el nombre de dificultad en el archivo de configuración de la mazmorra
instancedDungeonTitle: ¡Iniciar mazmorra de dificultad $difficulty!
# Establece la descripción que aparecerá en la descripción del objeto de los menús de mazmorras instanciadas
# $dungeonName es el marcador de posición para el nombre de la mazmorra en el archivo de configuración de la mazmorra
instancedDungeonDescription:
- '&fCrea una nueva instancia de la mazmorra'
- $dungeonName &fpara ti mismo y tal vez
- '&falgunos amigos!'
# Establece si estará disponible el contenido instanciado espectante.
allowSpectatorsInInstancedContent: true
# Establece el mensaje que aparece cuando se completa una mazmorra instanciada
instancedDungeonCompleteMessage: '[EliteMobs] ¡Mazmorra completada! ¡Se autodestruirá
  en 2 minutos!'
# Establece el mensaje que aparece cuando una mazmorra instanciada se cierra
instancedDungeonClosingInstanceMessage: '[EliteMobs] ¡Cerrando instancia!'
```

</details>

---

## Quests.yml

`Quests.yml` Incluye configuraciones para misiones y qué mensajes se muestran.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si las misiones deben devolverse a los que dan las misiones para completar la misión.
requireQuestTurnIn: true
# Establece el mensaje enviado cuando se acepta una misión.
questJoinMessage: '&a¡Has aceptado la misión $questName &a!'
# Establece el mensaje enviado cuando se abandona una misión.
questLeaveMessage: '&cHas abandonado la misión $questName &c!'
# Establece el mensaje enviado cuando se completa una misión.
questCompleteMessage: '&2¡Completaste la misión $questName &2!'
# Establece el mensaje enviado cuando un jugador intenta abandonar una misión cuando ninguna está activa.
leaveWhenNoActiveQuestsExist: '&c¡Actualmente no tienes una misión activa!'
# Establece el mensaje de confirmación enviado cuando los jugadores intentan abandonar una misión.
questLeaveConfirmationMessage: '&c¿Estás seguro de que quieres abandonar tu misión actual?
  ¡Haz &a/em confirm &c para confirmar tu elección!'
# Establece si algunos de los mensajes relacionados con las misiones utilizarán títulos en lugar de mensajes de chat.
useQuestAcceptTitles: true
# Establece el título enviado cuando un jugador inicia una misión.
questStartTitle: '&a¡Misión aceptada!'
# Establece el subtítulo enviado cuando un jugador inicia una misión.
questStartSubtitle: $questName
# Establece si se enviarán títulos cuando los jugadores completen una misión.
useQuestCompleteTitles: true
# Establece el título enviado cuando un jugador completa una misión.
questCompleteTitle: '&2¡Misión completada!'
# Establece el subtítulo enviado cuando un jugador completa una misión.
questCompleteSubtitle: $questName
# Establece si se envían títulos cuando los jugadores abandonan las misiones.
useQuestLeaveTitles: true
# Establece el título enviado cuando un jugador abandona una misión.
questLeaveTitle: '&c¡Misión abandonada!'
# Establece el subtítulo enviado cuando un jugador abandona una misión.
questLeaveSubtitle: $questName
# Establece si se envían mensajes en el chat informando sobre la progresión del objetivo de la misión.
doQuestChatProgression: true
# Establece los códigos de color para los objetivos completados.
ongoingQuestColorCode: '&2'
# Establece el formato para los mensajes de progresión de las misiones de matar.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Matar $name:$color$current&0/$color$target'
# Establece el formato para los mensajes de progresión de las misiones de buscar.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Obtener $name:$color$current&0/$color$target'
# Establece el formato para los mensajes de progresión de las misiones de diálogo.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Hablar con $name:$color$current&0/$color$target'
# Establece la cantidad máxima de misiones aceptadas que puede tener un jugador.
maximumActiveQuests: 10
# Establece el mensaje enviado a los jugadores cuando intentan aceptar una cantidad de misiones que excede el límite de misiones activas.
questCapMessage: '&8[EliteMobs] &c¡Has alcanzado la cantidad máxima de misiones activas
  (10)! &4Abandona o completa al menos una misión activa si quieres obtener más misiones!'
# Establece si se utilizarán mensajes de marcadores para las misiones.
useQuestScoreboards: true
# Establece el formato para los mensajes de progresión del marcador de las misiones de matar.
killQuestScoreboardProgressionMessage: '&c➤Matar $name:$color$current&0/$color$target'
# Establece el formato para el mensaje de progresión del marcador de las misiones de buscar.
fetchQuestScoreboardProgressionMessage: '&c➤Obtener $name:$color$current&0/$color$target'
# Establece el formato para los mensajes de progresión del marcador de las misiones de diálogo.
dialogQuestScoreboardProgressionMessage: '&c➤Hablar con $name:$color$current&0/$color$target'
questEntityTypes:
- BLAZE
- CAVE_SPIDER
- DROWNED
- ELDER_GUARDIAN
- ENDERMAN
- ENDERMITE
- EVOKER
- GHAST
- GUARDIAN
- HUSK
- ILLUSIONER
- IRON_GOLEM
- PILLAGER
- RAVAGER
- SILVERFISH
- SKELETON
- SPIDER
- STRAY
- VINDICATOR
- WITCH
- WITHER_SKELETON
- WOLF
- ZOMBIE
- HOGLIN
- ZOGLIN
- PIGLIN_BRUTE
- PIGLIN
- ZOMBIFIED_PIGLIN
# Establece el mensaje enviado a los jugadores para activar el seguimiento de misiones.
chatTrackMessage: '&8[EliteMobs]&2 ¡Haz clic aquí para rastrear tu misión!'
# Establece el mensaje flotante del mensaje de seguimiento de misiones.
chatTrackHover: '&2¡Haz clic para rastrear!'
# Establece el comando enviado al hacer clic en el mensaje de seguimiento. Realmente no deberías modificar esto.
chatTrackCommand: /elitemobs quest track $questID
# Establece el mensaje enviado a los jugadores cuando activan el seguimiento de misiones.
chatTrackingMessage: '&8[EliteMobs]&9 ¡Ahora estás rastreando una misión!'
# Establece el mensaje flotante del mensaje de seguimiento de misiones habilitado.
chatTrackingHover: '&2¡Haz clic para dejar de rastrear/rastrear! ¡/em -> Misiones para rastrear una misión diferente!'
# Establece el comando enviado al hacer clic en el mensaje de activación del seguimiento de misiones. Realmente no deberías modificar esto.
chatTrackingCommand: /elitemobs quest track $questID
# Establece si las misiones se rastrean automáticamente cuando se aceptan.
autoTrackQuestsOnAccept: true
# Establece el mensaje que aparece cuando no se pudo encontrar el destino de la misión.
noQuestDestinationFound: '[EM] ¡No se encontró el destino de la misión!'
# Establece el mensaje que aparece cuando el objetivo de la misión está en un mundo diferente.
questDestinationInOtherWorld: '[EM] ¡Ve al mundo $world!'
# Establece el mensaje enviado a los jugadores cuando intentan aceptar una misión que ya han completado.
questAlreadyCompletedMessage: '&8[EliteMobs] &c¡Ya completaste esta misión!'
# Establece el mensaje enviado a los jugadores cuando intentan aceptar una misión para la que no tienen permiso.
questPrerequisitesMissingMessage: '&8[EliteMobs] &c¡Este NPC tiene algunas misiones que tú
  no puedes aceptar todavía!'
# Establece el mensaje enviado a los jugadores que intentan obtener una misión para la que no tienen el rango de gremio correcto activado.
lowRankDynamicQuestWarning: '&8[EliteMobs] &c¡No puedes aceptar estas misiones con tu
  rango de gremio actual! Aumenta tu rango de gremio para aceptar estas misiones.'
# Establece el formato para el mensaje de entrega de la misión.
questTurnInObjective: '&a2Habla con $npcName'
# Establece la cantidad máxima de caracteres que tendrán los menús basados ​​en inventario para misiones antes de romper la línea.
horizontalCharacterLimitBedrockMenu: 30
# Establece la cantidad máxima de caracteres por entrada de objeto en los menús basados ​​en inventario para misiones antes de crear otro objeto para continuar la entrada.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Incluye configuraciones relacionadas con el paquete de recursos de EliteMobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] ¡Se recomienda encarecidamente el uso del paquete de recursos!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Incluye configuraciones que definen qué sonidos se deben reproducir cuando se realizan ciertas interacciones de EliteMobs. Los archivos de sonido se almacenan en el paquete de recursos.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el sonido que se reproducirá cuando se abra un cofre del tesoro.
treasureChestOpenSound: elitemobs:treasure_chest.open
# Establece el sonido que se reproducirá cuando un jugador suba de rango en el gremio.
guildRankUpSound: elitemobs:guild.rankup
# Establece el sonido que se reproducirá cuando un jugador obtenga prestigio en el gremio.
guildPrestigeSound: elitemobs:guild.prestige
# Establece el sonido que se reproducirá cuando un jugador progrese en una misión.
questProgressionSound: elitemobs:quest.progression
# Establece el sonido que se reproducirá cuando un jugador complete una misión.
questCompleteSound: elitemobs:quest.completion
# Establece el sonido que se reproducirá cuando un jugador abandone una misión.
questAbandonSound: elitemobs:quest.abandon
# Establece el sonido que se reproducirá cuando un jugador acepte una misión.
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Incluye configuraciones para los teletransportes de agujeros de gusano de EliteMobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el mensaje que aparece cuando se usa un teletransporte para una mazmorra que no está instalada.
dungeonNotInstalledMessage: '&8[EliteMobs] &c¡La mazmorra $dungeonID &cno está instalada!
  Este teletransporte no funcionará.'
# Establece el mensaje que aparece cuando se usa un agujero de gusano para una mazmorra que no está instalada.
defaultPortalMissingMessage: '&8[EliteMobs] &c¡Este portal no parece llevar a ninguna parte!'
# Establece si se utiliza el modo de partículas reducidas para los agujeros de gusano. Esto se recomienda especialmente si permites la entrada de clientes de Bedrock.
reducedParticlesMode: true
# Establece si los agujeros de gusano no usan partículas en absoluto. No se recomienda, pero puede ser necesario para clientes de Bedrock realmente malos.
noParticlesMode: false
# Establece el mensaje que se envía cuando un jugador intenta usar un agujero de gusano pero no tiene suficiente moneda para usarlo.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &c¡Moneda insuficiente! Tú
  necesitas $amount para usar este agujero de gusano!'
```

</details>


