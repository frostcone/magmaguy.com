[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Valores predeterminados de configuración de EliteMobs

**EliteMobs viene con los valores predeterminados recomendados instalados de forma predeterminada. Si cambia las cosas al azar, es probable que empeore la experiencia en general.**

_**EliteMobs se proporciona a todos los usuarios con la configuración predeterminada recomendada. Si cambia las cosas al azar y luego solicita soporte, es muy probable que se le pida que restablezca sus archivos de configuración. Las modificaciones del plugin deben surgir de la prueba del juego y no de solo conjeturas.**_

## Primeros pasos

EliteMobs ofrece actualmente una amplia gama de opciones de configuración debido a la alta demanda de personalización. Para mantener esta página de wiki concisa, solo se mostrarán las configuraciones predeterminadas.

Si desea obtener más información sobre una configuración específica, puede consultar el archivo de configuración y revisar los comentarios.

---

## config.yml

`config.yml` contiene en su mayoría configuraciones aleatorias que no podían encajar cómodamente en otro lugar en el momento de su creación. Es el archivo de configuración con mayor probabilidad de experimentar cambios entre versiones.

<div align="left">

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el archivo de idioma utilizado por EliteMobs
# ¡NO cambie esto manualmente! Está diseñado para ser instalado con el comando '/em language <archivoDeIdioma>'
language: spanish
# Establece si las élites y los jefes generados por elitemobs siempre mostrarán sus etiquetas de nombre.
# ¡No recomendado!
alwaysShowEliteMobNameTags: false
# Establece la cantidad de mobs pasivos que deben estar muy cerca antes de que puedan fusionarse.
# ¡No establezca esto en 0!
superMobStackAmount: 50
# Hace que las élites no dañen a los mobs pasivos con explosiones.
preventEliteCreeperDamageToPassiveMobs: true
# Establece si EliteMobs utilizará títulos para advertir a los jugadores sobre los permisos faltantes
useTitlesForMissingPermissionMessages: true
# Establece si EliteMobs evitará la conversión de mobs con nombre a élites.
# Especialmente importante para la compatibilidad con otros plugins.
preventEliteMobConversionOfNamedMobs: true
# Establece si EliteMobs convertirá mobs con motivos de aparición personalizados.
# La ejecución de ciertos plugins de jefe establecerá automáticamente esto en true, sin importar cuál sea el valor en la configuración.
enableHighCompatibilityMode: false
# Establece la bonificación de generación de élite para el modo de juego pesadilla
nightmareWorldSpawnBonus: 0.5
# Establece si el comando centralizado /em abre la página de estado principal del plugin.
# ¡Muy recomendado!
emLeadsToStatusMenu: true
# Establece si la ejecución de comandos específicos como /em wallet llevará al menú /em donde se centraliza esa información.
otherCommandsLeadToEMStatusMenu: true
# Establece si la configuración está completa.
# No establezca este valor manualmente, está diseñado para ser modificado a través de comandos del juego.
setupDoneV3: true
# Establece si las élites evitarán la generación de refuerzos de vainilla, como para la función de refuerzo de zombis.
preventVanillaReinforcementsForEliteEntities: true
# Establece la ubicación de generación predeterminada del servidor para EliteMobs. /em spawntp conducirá a esta ubicación.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Establece si EliteMobs regenerará los bloques que exploten las élites.
doExplosionRegen: true
# Establece si la regeneración de explosión también regenerará el contenido de los contenedores, como los cofres.
# Establecerlo en false hará que las explosiones de élite no exploten los contenedores.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Establece si el menú /em solo utilizará el estilo de menú basado en el inventario que es compatible con bedrock.
# Como recordatorio, los jugadores pueden usar el comando /em alt para cambiar entre estilos de menú /em
onlyUseBedrockMenus: false
# Establece el límite de caracteres por línea para las páginas del menú del libro.
# Reduzca esta cantidad si el texto se está cortando en menús de libros como para las misiones
characterLimitForBookMenuPagesV2: 170
# Establece si el espacio de menú vacío se rellenará con paneles de vidrio.
# No recomendado si está usando el paquete de recursos de EliteMobs.
useGlassToFillMenuEmptySpace: false
# Establece si se usará unicode para dar formato al paquete de recursos de EliteMobs.
# No establezca esto manualmente, se establece automáticamente al instalar el paquete de recursos.
# Solo configúrelo manualmente si tuvo que fusionar el paquete de recursos de EliteMobs, y espere que el espaciado podría no funcionar si lo hace.
menuUnicodeFormatting: false
# Establece el mensaje enviado a los jugadores si ejecutan '/em confirm' sin ningún comando pendiente.
noPendingCommands: '&c¡Actualmente no tiene ningún comando pendiente!'
# Establece el mensaje de seguimiento para los jefes que envían mensajes de seguimiento.
trackMessage: Rastrear el $name
# Establece el mensaje enviado a los jugadores que abren cofres del tesoro con requisitos de nivel superiores a su rango de gremio.
chestLowRankMessage: '&7[EM] &c¡Tu rango de gremio debe ser al menos $rank &cpara poder abrir este cofre!'
# Establece el mensaje enviado a los jugadores que intentan volver a abrir un cofre del tesoro que ya han abierto.
chestCooldownMessage: '&7[EM] &c¡Ya has abierto este cofre recientemente! ¡Espera $time!'
# Establece el mensaje que aparece recomendando el comando /em alt para los jugadores que tienen problemas con el comando /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f¿el menú no le funciona? ¡Intente &2/elitemobs alt &fpara ver una versión alternativa del menú! &c¿No quieres volver a ver este mensaje? &4/em dismiss'
# Establece el mensaje que aparece cuando los jugadores ejecutan el comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f¡Estilo de menú cambiado! ¡Compruébelo!'
# Establece el mensaje que aparece cuando un jugador abre un cofre del tesoro pero no recibe nada
treasureChestNoDropMessage: '&8[EliteMobs] &c¡No has recibido nada! ¡Más suerte la próxima vez!'
# Establece el mensaje que aparece cuando un jugador intenta rastrear a un jefe que ya no es válido
bossAlreadyGoneMessage: '&c[EliteMobs] Lo siento, ¡este jefe ya no está!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contiene las configuraciones relevantes para el Centro del Gremio de Aventureros (el mundo) y las configuraciones relevantes para el sistema de ascenso de rango del Gremio de Aventureros.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si EliteMobs agregará la salud máxima al desbloquear rangos de gremio como recompensa de prestigio
Add max health when unlocking higher guild ranks: true
# Establece si EliteMobs agregará una posibilidad de golpe crítico al desbloquear rangos de gremio como recompensa de prestigio
Add critical chance when unlocking higher guild ranks: true
# Establece si EliteMobs agregará la posibilidad de esquivar al desbloquear rangos de gremio como recompensa de prestigio
Add dodge chance when unlocking higher guild ranks: true
# Establece si los comandos de usuario se redirigirán al centro del Gremio de Aventureros. Esto es muy recomendable para la inmersión en el juego y fines de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Establece el nombre para mostrar en el juego del gremio de aventureros
adventurersGuildMenuName: '&6&lCentro del Aventurero'
Prestige 0 rank 0: '&8Común - ¡desactiva élites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Establece si el botín del jugador está limitado por su nivel de gremio.
# Esta es una parte increíblemente importante de EliteMobs y muy recomendable.
limitLootBasedOnGuildTier: true
# Establece el mensaje enviado a los jugadores si su botín se ve afectado debido a su bajo nivel de gremio.
lootLimiterMessage: '&7[EM] &c¡Debe desbloquear el siguiente rango de gremio a través de /ag para obtener mejores objetos!'
# Establece los comandos que se ejecutan al subir de rango de gremio. Los marcadores de posición son:
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onRankUpCommand: []
# Establece los comandos que se ejecutan al subir de rango de prestigio.
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onPrestigeUpCommand: []
# Establece el nivel de prestigio para la primera bonificación de esquiva.
dodgePrestige3Bonus: 3.0
# Establece el nivel de prestigio para la segunda bonificación de esquiva.
dodgePrestige6Bonus: 6.0
# Establece el nivel de prestigio para la tercera bonificación de esquiva.
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
# Establece la cantidad base estimada de jefes que deben ser asesinados para poder permitirse un ascenso de rango.
baseKillsForRankUp: 100
# Establece la cantidad adicional estimada de jefes que deben ser asesinados para poder ascender de rango, por nivel.
# La fórmula es esta cantidad x el nivel en el que se encuentra actualmente el jugador.
additionalKillsForRankUpPerTier: 50
# Establece el título enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $player es un marcador de posición que se reemplaza con el nombre para mostrar del jugador.
prestigeUnlockMessageTitle: $player
# Establece el subtítulo enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $tier es un marcador de posición que se reemplaza con el nivel de prestigio del jugador.
prestigeUnlockMessageSubtitle: '&2ha desbloqueado $tier&2!'
# Establece el multiplicador que se aplicará a la posibilidad de generación cuando los jugadores están usando el rango pacífico (común).
peacefulModeEliteChanceDecrease: 0.2
# Establece la lista de mundos a los que no se aplicarán las bonificaciones de rango de gremio
worldsWithoutAGBonuses: []
# Deshabilita la capacidad de los usuarios para cambiar al modo pacífico para EliteMobs. El modo pacífico reduce el nivel y las tasas de generación de mobs alrededor de ese jugador específicamente
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite a los administradores personalizar diferentes aspectos del sistema AntiExploit. El sistema AntiExploit existe para evitar que los jugadores utilicen cosas como las granjas de mobs para cultivar fácilmente monedas y botín, y los empuja a realizar combates reales y minimazmorras en lugar de hacer clic en afk para llegar a la cima del plugin.

Este es un sistema crítico para mantener activado si no quiere que las personas simplemente cultiven afk todo el plugin y quiere que interactúen con las minimazmorras.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el mensaje que aparece cuando se activa el antiexploit.
AntiExploit message: '&c[EM AntiExploit] &7La élite cercana no dejará caer botín especial.'
# Establece si el antiexploit de cuarto oscuro 1 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 1: true
# Establece si el antiexploit de cuarto oscuro 2 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 2: true
# Establece si el antiexploit de cuarto oscuro 3 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 3: true
# Establece si el antiexploit de cuarto oscuro grande 1 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable large darkroom antiexploit 1: true
# Establece si el antiexploit de altura de enderman está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable enderman height antiexploit: true
# Establece si el antiexploit de montura está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable mount antiexploit: true
# Establece si los mobs de élite pueden recoger objetos
preventItemPickupByMobs: true
# Establece si el antiexploit de daño ambiental está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable ambient damage antiexploit: true
# Establece si el antiexploit de bloque de miel está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable honey block antiexploit: true
# Establece el umbral para la activación de antiexploit. Los valores más altos lo hacen más tolerante. No se recomienda modificar esto.
antiExploitThreshold: 10
# Establece si el antiexploit sin ruta está habilitado
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contiene las configuraciones para el sistema de etiquetas de combate. Este sistema aún está lejos de estar completo, pero intenta administrar el comportamiento del jugador una vez que entra en combate.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la etiqueta de combate está habilitada.
# Cuando está habilitado, los jugadores que vuelan que participan en combate dejan de volar.
Enable combat tag: true
# Establece el mensaje enviado cuando se activa la etiqueta de combate.
Combat tag message: '&c[EliteMobs] ¡Etiqueta de combate activada!'
# Establece si el comando /ag tendrá un temporizador antes de la teletransportación
Enable adventurers guild teleport timer: true
# Establece el mensaje de acción establecido mientras se espera el temporizador de teletransportación.
Teleport time left: '&7[EM] Teletransportando en &a$time &7segundos...'
# Establece el mensaje enviado cuando los jugadores se mueven mientras esperan la teletransportación.
Teleport cancelled: '&7[EM] ¡Teletransportación interrumpida!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contiene las configuraciones para DiscordSRV. Si desea ver cómo configurar esta función, [¡haga clic aquí!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# La documentación se puede encontrar aquí: https://magmaguy.com/wiki.html#lang=es&article=elitemobs+discordsrv.md
announcementRoomName: DEBE_COLOCAR_EL_NOMBRE_DE_LA_SALA_DE_DISCORD_EN_LA_QUE_DESEA_QUE_SE_TRANSMITAN_LOS_ANUNCIOS_DE_ELITEMOBS_TAL_COMO_LO_HA_HECHO_EN_SU_ARCHIVO_DE_CONFIGURACIÓN_DE_DISCORDSRV_CONSULTE_LA_WIKI_DE_ELITEMOBS_PARA_OBTENER_MÁS_DETALLES

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contiene las configuraciones para la economía de EliteMobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la economía de EliteMobs está habilitada. Esto significa monedas de élite, la capacidad de comprar y vender equipo y la capacidad de actualizar rangos de gremio
# Si está deshabilitado, los jugadores no podrán progresar en el plugin.
enableEconomy: true
# Establece el valor de reventa de objetos, como un % del precio original. 5 es 5%
itemResaleValue: 5.0
# Establece el nombre en el juego de la moneda utilizada.
currencyName: Monedas de élite
# Establece el plugin para utilizar Vault. ¡ESTO NO SE RECOMIENDA! Lea por qué aquí: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Establece si las élites dejarán caer monedas según su nivel.
enableCurrencyShower: true
# Establece el multiplicador para la moneda que dejan caer las élites.
currencyShowerTierMultiplier: 1.0
# Establece el mensaje enviado cuando los jugadores recogen moneda de élite.
chatCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Establece el mensaje de la barra de acción enviado cuando los jugadores recogen moneda de élite.
actionbarCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Envía el mensaje que reciben los jugadores después de recoger la moneda. Útil para fines de tutorial.
adventurersGuildNotificationMessages: '&7[EM] ¿Dinero extra para gastar? ¡Pruebe &a/ag !'
# Establece la tasa de impuestos para las transacciones entre jugadores.
# Muy recomendado por razones de equilibrio, ya que los jugadores de alto nivel pueden ganar hasta 6 veces más moneda e intentar usar a otros jugadores para evitar los restablecimientos de moneda de prestigio.
playerToPlayerPaymentTaxes: 0.2
# Mensaje enviado al enviar moneda de élite a otros jugadores.
Economy pay message v2: '&2Has pagado &2$amount_sent $currency_name &2a $receiver&2, quien obtuvo $amount_received después de impuestos!'
# Mensaje enviado después de que los jugadores envían moneda.
Economy currency left message: Ahora tienes &2$amount_left $currency_name
# Mensaje recibido al recibir moneda.
Economy money from payment message: Has recibido &2$amount_received $currency_name &ffrom $sender
# Mensaje enviado cuando los jugadores intentan enviar una cantidad de monedas que no tienen.
Economy payment insufficient currency: '&c¡No tienes suficiente $currency_name para hacer eso!'
# Mensaje del comando /em balance
Wallet command message: Tienes &2$balance $currency_name
# Mensaje de confirmación enviado cuando los jugadores intentan enviar moneda a otro jugador.
Tax confirmation message: '&cEl envío de un pago costará $percentage% en impuestos. &a¡Haz &9$command &apara continuar!'
# Mensaje enviado cuando un jugador compra en una tienda.
Shop buy message: '&a¡Has comprado $item_name &a por $item_value $currency_name!'
# Mensaje enviado cuando un jugador interactúa con una tienda.
Shop current balance message: '&aTienes $currency_amount $currency_name.'
# Mensaje enviado cuando los jugadores no tienen suficiente moneda para comprar un objeto
Shop insufficient funds message: '&c¡No tienes suficiente $currency_name!'
# Segunda parte del mensaje enviado cuando los jugadores intentan comprar un objeto que no pueden pagar.
Shop item cost message: Ese objeto cuesta &c$item_value $currency_name.
# Mensaje enviado al vender un objeto a una tienda.
Shop sell message: '&a¡Has vendido $item_name &a por $currency_amount $currency_name!'
# Mensaje enviado al intentar vender un objeto que no pertenece a ese jugador.
Shop sale player items warning: '&c¡No puedes vender objetos que no estén actualmente vinculados a ti! ¡Esto incluye objetos de otros niveles de prestigio!'
# Mensaje enviado al intentar vender un objeto que no es de EliteMobs
Shop sale instructions: '&c¡Solo puedes vender botín de EliteMobs aquí! (Armadura / armas que dejan caer las élites que muestran un valor en su tradición)'
# Mensaje enviado al vender un lote de objetos de élite.
shopBatchSellItem: '&a¡Has vendido tus objetos &a por $currency_amount $currency_name!'
lootShowerMaterial:
  # Establece el tipo de material de 1 moneda de élite dejada caer.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Establece el ID de modelo personalizado para 1 moneda de élite dejada caer. Utilizado por el paquete de recursos.
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
[![webapp_banner.jpg](../../../img/wiki/webapp_banner.jpg)](https://magmaguy.com/webapp/webapp.html)

# Valores predeterminados de configuración de EliteMobs

**EliteMobs viene con los valores predeterminados recomendados instalados de forma predeterminada. Si cambia las cosas al azar, es probable que empeore la experiencia en general.**

_**EliteMobs se proporciona a todos los usuarios con la configuración predeterminada recomendada. Si cambia las cosas al azar y luego solicita soporte, es muy probable que se le pida que restablezca sus archivos de configuración. Las modificaciones del plugin deben surgir de la prueba del juego y no de solo conjeturas.**_

## Primeros pasos

EliteMobs ofrece actualmente una amplia gama de opciones de configuración debido a la alta demanda de personalización. Para mantener esta página de wiki concisa, solo se mostrarán las configuraciones predeterminadas.

Si desea obtener más información sobre una configuración específica, puede consultar el archivo de configuración y revisar los comentarios.

---

## config.yml

`config.yml` contiene en su mayoría configuraciones aleatorias que no podían encajar cómodamente en otro lugar en el momento de su creación. Es el archivo de configuración con mayor probabilidad de experimentar cambios entre versiones.

<div align="left">

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el archivo de idioma utilizado por EliteMobs
# ¡NO cambie esto manualmente! Está diseñado para ser instalado con el comando '/em language <archivoDeIdioma>'
language: spanish
# Establece si las élites y los jefes generados por elitemobs siempre mostrarán sus etiquetas de nombre.
# ¡No recomendado!
alwaysShowEliteMobNameTags: false
# Establece la cantidad de mobs pasivos que deben estar muy cerca antes de que puedan fusionarse.
# ¡No establezca esto en 0!
superMobStackAmount: 50
# Hace que las élites no dañen a los mobs pasivos con explosiones.
preventEliteCreeperDamageToPassiveMobs: true
# Establece si EliteMobs utilizará títulos para advertir a los jugadores sobre los permisos faltantes
useTitlesForMissingPermissionMessages: true
# Establece si EliteMobs evitará la conversión de mobs con nombre a élites.
# Especialmente importante para la compatibilidad con otros plugins.
preventEliteMobConversionOfNamedMobs: true
# Establece si EliteMobs convertirá mobs con motivos de aparición personalizados.
# La ejecución de ciertos plugins de jefe establecerá automáticamente esto en true, sin importar cuál sea el valor en la configuración.
enableHighCompatibilityMode: false
# Establece la bonificación de generación de élite para el modo de juego pesadilla
nightmareWorldSpawnBonus: 0.5
# Establece si el comando centralizado /em abre la página de estado principal del plugin.
# ¡Muy recomendado!
emLeadsToStatusMenu: true
# Establece si la ejecución de comandos específicos como /em wallet llevará al menú /em donde se centraliza esa información.
otherCommandsLeadToEMStatusMenu: true
# Establece si la configuración está completa.
# No establezca este valor manualmente, está diseñado para ser modificado a través de comandos del juego.
setupDoneV3: true
# Establece si las élites evitarán la generación de refuerzos de vainilla, como para la función de refuerzo de zombis.
preventVanillaReinforcementsForEliteEntities: true
# Establece la ubicación de generación predeterminada del servidor para EliteMobs. /em spawntp conducirá a esta ubicación.
defaultSpawnLocation: world,16.0,76.0,80.0,0.0,0.0
# Establece si EliteMobs regenerará los bloques que exploten las élites.
doExplosionRegen: true
# Establece si la regeneración de explosión también regenerará el contenido de los contenedores, como los cofres.
# Establecerlo en false hará que las explosiones de élite no exploten los contenedores.
doRegenerateContainers: true
defaultTransitiveBlockLimiter: 500
# Establece si el menú /em solo utilizará el estilo de menú basado en el inventario que es compatible con bedrock.
# Como recordatorio, los jugadores pueden usar el comando /em alt para cambiar entre estilos de menú /em
onlyUseBedrockMenus: false
# Establece el límite de caracteres por línea para las páginas del menú del libro.
# Reduzca esta cantidad si el texto se está cortando en menús de libros como para las misiones
characterLimitForBookMenuPagesV2: 170
# Establece si el espacio de menú vacío se rellenará con paneles de vidrio.
# No recomendado si está usando el paquete de recursos de EliteMobs.
useGlassToFillMenuEmptySpace: false
# Establece si se usará unicode para dar formato al paquete de recursos de EliteMobs.
# No establezca esto manualmente, se establece automáticamente al instalar el paquete de recursos.
# Solo configúrelo manualmente si tuvo que fusionar el paquete de recursos de EliteMobs, y espere que el espaciado podría no funcionar si lo hace.
menuUnicodeFormatting: false
# Establece el mensaje enviado a los jugadores si ejecutan '/em confirm' sin ningún comando pendiente.
noPendingCommands: '&c¡Actualmente no tiene ningún comando pendiente!'
# Establece el mensaje de seguimiento para los jefes que envían mensajes de seguimiento.
trackMessage: Rastrear el $name
# Establece el mensaje enviado a los jugadores que abren cofres del tesoro con requisitos de nivel superiores a su rango de gremio.
chestLowRankMessage: '&7[EM] &c¡Tu rango de gremio debe ser al menos $rank &cpara poder abrir este cofre!'
# Establece el mensaje enviado a los jugadores que intentan volver a abrir un cofre del tesoro que ya han abierto.
chestCooldownMessage: '&7[EM] &c¡Ya has abierto este cofre recientemente! ¡Espera $time!'
# Establece el mensaje que aparece recomendando el comando /em alt para los jugadores que tienen problemas con el comando /em
dismissEMMessage: '&8[EliteMobs] &2/elitemobs &f¿el menú no le funciona? ¡Intente &2/elitemobs alt &fpara ver una versión alternativa del menú! &c¿No quieres volver a ver este mensaje? &4/em dismiss'
# Establece el mensaje que aparece cuando los jugadores ejecutan el comando /em alt.
switchEMStyleMessage: '&8[EliteMobs] &2/elitemobs &f¡Estilo de menú cambiado! ¡Compruébelo!'
# Establece el mensaje que aparece cuando un jugador abre un cofre del tesoro pero no recibe nada
treasureChestNoDropMessage: '&8[EliteMobs] &c¡No has recibido nada! ¡Más suerte la próxima vez!'
# Establece el mensaje que aparece cuando un jugador intenta rastrear a un jefe que ya no es válido
bossAlreadyGoneMessage: '&c[EliteMobs] Lo siento, ¡este jefe ya no está!'
```

</details>

---

## AdventurersGuild.yml

`AdventurersGuild.yml` contiene las configuraciones relevantes para el Centro del Gremio de Aventureros (el mundo) y las configuraciones relevantes para el sistema de ascenso de rango del Gremio de Aventureros.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si EliteMobs agregará la salud máxima al desbloquear rangos de gremio como recompensa de prestigio
Add max health when unlocking higher guild ranks: true
# Establece si EliteMobs agregará una posibilidad de golpe crítico al desbloquear rangos de gremio como recompensa de prestigio
Add critical chance when unlocking higher guild ranks: true
# Establece si EliteMobs agregará la posibilidad de esquivar al desbloquear rangos de gremio como recompensa de prestigio
Add dodge chance when unlocking higher guild ranks: true
# Establece si los comandos de usuario se redirigirán al centro del Gremio de Aventureros. Esto es muy recomendable para la inmersión en el juego y fines de tutorial.
userCommandsTeleportToAdventurersGuild: true
# Establece el nombre para mostrar en el juego del gremio de aventureros
adventurersGuildMenuName: '&6&lCentro del Aventurero'
Prestige 0 rank 0: '&8Común - ¡desactiva élites!'
Prestige 0 rank 0 short placeholder: '&6&l✧&e0'
...
# Establece si el botín del jugador está limitado por su nivel de gremio.
# Esta es una parte increíblemente importante de EliteMobs y muy recomendable.
limitLootBasedOnGuildTier: true
# Establece el mensaje enviado a los jugadores si su botín se ve afectado debido a su bajo nivel de gremio.
lootLimiterMessage: '&7[EM] &c¡Debe desbloquear el siguiente rango de gremio a través de /ag para obtener mejores objetos!'
# Establece los comandos que se ejecutan al subir de rango de gremio. Los marcadores de posición son:
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onRankUpCommand: []
# Establece los comandos que se ejecutan al subir de rango de prestigio.
# $prestigerank - muestra el rango de prestigio
# $activerank - muestra el rango actualmente activo
# $player - muestra el nombre del jugador
onPrestigeUpCommand: []
# Establece el nivel de prestigio para la primera bonificación de esquiva.
dodgePrestige3Bonus: 3.0
# Establece el nivel de prestigio para la segunda bonificación de esquiva.
dodgePrestige6Bonus: 6.0
# Establece el nivel de prestigio para la tercera bonificación de esquiva.
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
# Establece la cantidad base estimada de jefes que deben ser asesinados para poder permitirse un ascenso de rango.
baseKillsForRankUp: 100
# Establece la cantidad adicional estimada de jefes que deben ser asesinados para poder ascender de rango, por nivel.
# La fórmula es esta cantidad x el nivel en el que se encuentra actualmente el jugador.
additionalKillsForRankUpPerTier: 50
# Establece el título enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $player es un marcador de posición que se reemplaza con el nombre para mostrar del jugador.
prestigeUnlockMessageTitle: $player
# Establece el subtítulo enviado a los jugadores cuando alguien desbloquea un rango de prestigio.
# $tier es un marcador de posición que se reemplaza con el nivel de prestigio del jugador.
prestigeUnlockMessageSubtitle: '&2ha desbloqueado $tier&2!'
# Establece el multiplicador que se aplicará a la posibilidad de generación cuando los jugadores están usando el rango pacífico (común).
peacefulModeEliteChanceDecrease: 0.2
# Establece la lista de mundos a los que no se aplicarán las bonificaciones de rango de gremio
worldsWithoutAGBonuses: []
# Deshabilita la capacidad de los usuarios para cambiar al modo pacífico para EliteMobs. El modo pacífico reduce el nivel y las tasas de generación de mobs alrededor de ese jugador específicamente
disableCommonerRank: false
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` permite a los administradores personalizar diferentes aspectos del sistema AntiExploit. El sistema AntiExploit existe para evitar que los jugadores utilicen cosas como las granjas de mobs para cultivar fácilmente monedas y botín, y los empuja a realizar combates reales y minimazmorras en lugar de hacer clic en afk para llegar a la cima del plugin.

Este es un sistema crítico para mantener activado si no quiere que las personas simplemente cultiven afk todo el plugin y quiere que interactúen con las minimazmorras.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece el mensaje que aparece cuando se activa el antiexploit.
AntiExploit message: '&c[EM AntiExploit] &7La élite cercana no dejará caer botín especial.'
# Establece si el antiexploit de cuarto oscuro 1 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 1: true
# Establece si el antiexploit de cuarto oscuro 2 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 2: true
# Establece si el antiexploit de cuarto oscuro 3 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable darkroom antiexploit 3: true
# Establece si el antiexploit de cuarto oscuro grande 1 está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable large darkroom antiexploit 1: true
# Establece si el antiexploit de altura de enderman está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable enderman height antiexploit: true
# Establece si el antiexploit de montura está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable mount antiexploit: true
# Establece si los mobs de élite pueden recoger objetos
preventItemPickupByMobs: true
# Establece si el antiexploit de daño ambiental está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable ambient damage antiexploit: true
# Establece si el antiexploit de bloque de miel está habilitado.
# Las funciones antiexploit específicas no se documentan intencionalmente. Los operadores del servidor pueden ver qué tipo de antiexploit se activó, pero no se pone a disposición más información sobre cómo funciona específicamente.
Enable honey block antiexploit: true
# Establece el umbral para la activación de antiexploit. Los valores más altos lo hacen más tolerante. No se recomienda modificar esto.
antiExploitThreshold: 10
# Establece si el antiexploit sin ruta está habilitado
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contiene las configuraciones para el sistema de etiquetas de combate. Este sistema aún está lejos de estar completo, pero intenta administrar el comportamiento del jugador una vez que entra en combate.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la etiqueta de combate está habilitada.
# Cuando está habilitado, los jugadores que vuelan que participan en combate dejan de volar.
Enable combat tag: true
# Establece el mensaje enviado cuando se activa la etiqueta de combate.
Combat tag message: '&c[EliteMobs] ¡Etiqueta de combate activada!'
# Establece si el comando /ag tendrá un temporizador antes de la teletransportación
Enable adventurers guild teleport timer: true
# Establece el mensaje de acción establecido mientras se espera el temporizador de teletransportación.
Teleport time left: '&7[EM] Teletransportando en &a$time &7segundos...'
# Establece el mensaje enviado cuando los jugadores se mueven mientras esperan la teletransportación.
Teleport cancelled: '&7[EM] ¡Teletransportación interrumpida!'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contiene las configuraciones para DiscordSRV. Si desea ver cómo configurar esta función, [¡haga clic aquí!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# La documentación se puede encontrar aquí: https://magmaguy.com/wiki.html#lang=es&article=elitemobs+discordsrv.md
announcementRoomName: DEBE_COLOCAR_EL_NOMBRE_DE_LA_SALA_DE_DISCORD_EN_LA_QUE_DESEA_QUE_SE_TRANSMITAN_LOS_ANUNCIOS_DE_ELITEMOBS_TAL_COMO_LO_HA_HECHO_EN_SU_ARCHIVO_DE_CONFIGURACIÓN_DE_DISCORDSRV_CONSULTE_LA_WIKI_DE_ELITEMOBS_PARA_OBTENER_MÁS_DETALLES

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contiene las configuraciones para la economía de EliteMobs.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si la economía de EliteMobs está habilitada. Esto significa monedas de élite, la capacidad de comprar y vender equipo y la capacidad de actualizar rangos de gremio
# Si está deshabilitado, los jugadores no podrán progresar en el plugin.
enableEconomy: true
# Establece el valor de reventa de objetos, como un % del precio original. 5 es 5%
itemResaleValue: 5.0
# Establece el nombre en el juego de la moneda utilizada.
currencyName: Monedas de élite
# Establece el plugin para utilizar Vault. ¡ESTO NO SE RECOMIENDA! Lea por qué aquí: https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Establece si las élites dejarán caer monedas según su nivel.
enableCurrencyShower: true
# Establece el multiplicador para la moneda que dejan caer las élites.
currencyShowerTierMultiplier: 1.0
# Establece el mensaje enviado cuando los jugadores recogen moneda de élite.
chatCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Establece el mensaje de la barra de acción enviado cuando los jugadores recogen moneda de élite.
actionbarCurrencyShowerMessage: '&7[EM] ¡Has recogido &a$amount $currency_name!'
# Envía el mensaje que reciben los jugadores después de recoger la moneda. Útil para fines de tutorial.
adventurersGuildNotificationMessages: '&7[EM] ¿Dinero extra para gastar? ¡Pruebe &a/ag !'
# Establece la tasa de impuestos para las transacciones entre jugadores.
# Muy recomendado por razones de equilibrio, ya que los jugadores de alto nivel pueden ganar hasta 6 veces más moneda e intentar usar a otros jugadores para evitar los restablecimientos de moneda de prestigio.
playerToPlayerPaymentTaxes: 0.2
# Mensaje enviado al enviar moneda de élite a otros jugadores.
Economy pay message v2: '&2Has pagado &2$amount_sent $currency_name &2a $receiver&2, quien obtuvo $amount_received después de impuestos!'
# Mensaje enviado después de que los jugadores envían moneda.
Economy currency left message: Ahora tienes &2$amount_left $currency_name
# Mensaje recibido al recibir moneda.
Economy money from payment message: Has recibido &2$amount_received $currency_name &ffrom $sender
# Mensaje enviado cuando los jugadores intentan enviar una cantidad de monedas que no tienen.
Economy payment insufficient currency: '&c¡No tienes suficiente $currency_name para hacer eso!'
# Mensaje del comando /em balance
Wallet command message: Tienes &2$balance $currency_name
# Mensaje de confirmación enviado cuando los jugadores intentan enviar moneda a otro jugador.
Tax confirmation message: '&cEl envío de un pago costará $percentage% en impuestos. &a¡Haz &9$command &apara continuar!'
# Mensaje enviado cuando un jugador compra en una tienda.
Shop buy message: '&aHas comprado $item_name &a por $item_value $currency_name!'
# Mensaje enviado cuando un jugador interactúa con una tienda.
Shop current balance message: '&aTienes $currency_amount $currency_name.'
# Mensaje enviado cuando los jugadores no tienen suficiente moneda para comprar un objeto
Shop insufficient funds message: '&c¡No tienes suficiente $currency_name!'
# Segunda parte del mensaje enviado cuando los jugadores intentan comprar un objeto que no pueden pagar.
Shop item cost message: Ese objeto cuesta &c$item_value $currency_name.
# Mensaje enviado al vender un objeto a una tienda.
Shop sell message: '&aHas vendido $item_name &a por $currency_amount $currency_name!'
# Mensaje enviado al intentar vender un objeto que no pertenece a ese jugador.
Shop sale player items warning: '&c¡No puedes vender objetos que no estén actualmente vinculados a ti! ¡Esto incluye objetos de otros niveles de prestigio!'
# Mensaje enviado al intentar vender un objeto que no es de EliteMobs
Shop sale instructions: '&c¡Solo puedes vender botín de EliteMobs aquí! (Armadura / armas que dejan caer las élites que muestran un valor en su tradición)'
# Mensaje enviado al vender un lote de objetos de élite.
shopBatchSellItem: '&a¡Has vendido tus objetos &a por $currency_amount $currency_name!'
lootShowerMaterial:
  # Establece el tipo de material de 1 moneda de élite dejada caer.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Establece el ID de modelo personalizado para 1 moneda de élite dejada caer. Utilizado por el paquete de recursos.
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
  # Establece el valor de material predeterminado para objetos no definidos específicamente.
  defaultMaterialWorth: 1.0
```

</details>

---

## events.yml

`events.yml` contiene las opciones de configuración para los eventos.

_**Nota: estas son solo las configuraciones globales muy básicas.**_

Puede modificar aún más eventos específicos en la carpeta `events`.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si los eventos solo se transmitirán en el mundo en el que suceden los eventos.
Only broadcast event message in event worlds: false
# Establece el tiempo de espera mínimo, en minutos, entre eventos temporizados
actionEventMinimumCooldownMinutes: 240
# Establece si ocurrirán eventos de acción.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Establece si ocurrirán eventos temporizados.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contiene todas las opciones de configuración globales para objetos de élite.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece los caracteres con prefijo a los encantamientos de vainilla en la tradición de los objetos.
noItemDurabilityMessage: '&8[EliteMobs] ¡$item &4está roto! ¡No funcionará hasta que se repare!'
# Establece si se obtendrá algún botín de EliteMobs.
# ¡Incluye monedas de élite, objetos personalizados, objetos generados por procedimientos, todo!
# ¡No recomendado, imposibilita la progresión del mmorpg!
doEliteMobsLoot: true
# Establece si el botín generado por procedimientos tendrá diferentes colores según la calidad del objeto.
doMMORPGColorsForItems: true
# Establece si se evitará la colocación de objetos personalizados, como pancartas o bloques.
# ¡Esto se recomienda! ¡Los objetos personalizados se rompen cuando se colocan y no se pueden recuperar!
preventCustomItemPlacement: true
# Establece el formato para la tradición de todos los objetos de EliteMobs personalizados.
# Los siguientes son marcadores de posición válidos:
# $itemLevel - muestra el nivel del objeto
# $prestigeLevel - muestra el nivel de prestigio
# $weaponOrArmorStats - muestra las estadísticas de DPS de élite o armadura de élite, según el objeto
# $soulbindInfo - muestra a quién, si hay alguien, el objeto está vinculado por alma
# $itemSource - muestra de dónde vino el objeto, como un mob o una tienda
# $ifLore - hace que una línea solo aparezca si el objeto tiene una tradición personalizada. Solo se aplica a objetos personalizados
# $customLore - muestra la totalidad de la tradición personalizada. Solo se aplica a objetos personalizados
# $ifEnchantments - hace que una línea solo aparezca si el objeto tiene algún encantamiento
# $enchantments - muestra los encantamientos en el objeto
# $eliteEnchantments - muestra los encantamientos de élite en el objeto
# $ifCustomEnchantments - muestra los encantamientos personalizados en el objeto
# $customEnchantments - muestra los encantamientos personalizados en el objeto
# $ifPotionEffects - solo muestra la línea si el objeto tiene efectos de poción
# $potionEffects - muestra los efectos de poción en el objeto
# $loreResaleValue - muestra el valor del objeto. Puede mostrar el precio de compra o venta según dónde se vea
# Importante: varias de los marcadores de posición pueden personalizarse aún más mediante las configuraciones que se encuentran más abajo
itemLoreStructureV2:
- §7§m§l---------§7<§lInformación de equipo§7>§m§l---------
- '§7Nivel de objeto: §f$itemLevel §7Prestigio §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lTradición§7 >§m§l-----------
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
# Establece la tradición de origen de la tienda para las compras en la tienda
shopSourceItemLores: '&7Comprado en una tienda'
# Establece la tradición de origen del objeto para los objetos obtenidos de jefes
mobSourceItemLores: '&7Botín de $mob'
# Establece la tradición del valor del objeto
loreWorths: '&7Valor de $worth $currencyName'
# Establece la tradición del valor de reventa del objeto
loreResaleValues: '&7Se vende por $resale $currencyName'
# Establece la posibilidad base de que caiga cualquier objeto de élite de mobs de élite
flatDropRateV3: 0.2
# Establece la posibilidad base de que caiga cualquier objeto de élite de jefes regionales
regionalBossNonUniqueDropRate: 0.05
# Establece si los jefes regionales pueden dejar caer botín de vainilla
regionalBossesDropVanillaLoot: false
# Establece cuánto aumenta la posibilidad de que caiga un objeto de élite según el nivel del mob.
# El nivel del mob se multiplica por este valor y se suma a la posibilidad base.
# ¡Ya no se recomienda que esto sea superior a 0.0!
levelIncreaseDropRateV2: 0.0
# Establece la posibilidad ponderada de que caiga un objeto generado por procedimientos.
# ¡Este sistema utiliza probabilidades ponderadas! Busque eso en Google si no sabe qué es.
proceduralItemDropWeight: 90.0
# Establece la posibilidad relativa de que caiga un objeto ponderado.
# Los objetos ponderados son objetos personalizados que no tienen un peso dinámico, como los amuletos.
weighedItemDropWeight: 1.0
# Establece la posibilidad relativa de que caiga un objeto fijo. Estos son objetos personalizados que no se escalan.
fixedItemDropWeight: 10.0
# Establece la posibilidad relativa de que caiga un objeto limitado. Estos son objetos personalizados que se escalan hasta un nivel específico
limitedItemDropWeight: 3.0
# Establece la posibilidad relativa de que caiga un objeto escalable. Estos son objetos personalizados que se pueden escalar a cualquier nivel y son los más comunes en el plugin.
scalableItemDropWeight: 6.0
# Establece el multiplicador para el botín de vainilla del mob, según el nivel del mob.
defaultLootMultiplier: 0.0
# Establece el nivel máximo para el multiplicador de botín predeterminado.
levelCapForDefaultLootMultiplier: 200
# Establece el multiplicador de experiencia predeterminado de Minecraft que dejan caer los jefes, según el nivel del jefe.
defaultExperienceMultiplier: 1.0
# Establece el nivel máximo para el botín que dejarán caer los EliteMobs. Se recomienda encarecidamente dejarlo en 200.
maximumItemLevel: 200
# Establece si se utilizarán encantamientos de élite.
# Los encantamientos de élite reemplazan a los encantamientos de vainilla cuando los objetos de élite obtienen niveles de encantamiento que superan los límites de vainilla.
# Ejemplo: si se supone que una espada de élite tiene nitidez 10, dado que el límite de Minecraft es el nivel 5, tendrá nitidez 5 y nitidez de élite 5.
# La nitidez de élite solo afecta a los mobs generados por EliteMobs. Esto se hace para que el PVP y el combate de vainilla no se desequilibren.
useEliteEnchantments: true
# Establece el nombre para mostrar que se utilizará para los encantamientos de élite en la tradición del objeto.
eliteEnchantmentLoreStrings: Élite
# Establece si EliteMobs considerará a las azadas como armas válidas para los cálculos de daño.
useHoesAsWeapons: false
# Establece si EliteMobs generará partículas especiales sobre los objetos que caigan de alta calidad.
enableRareItemParticleEffects: true
# Establece los símbolos que se utilizarán en la tradición de los objetos para mostrar que un efecto de poción se aplica al golpear a la entidad que recibe el golpe.
potionEffectOnHitTargetLore: '&4⚔☠'
# Establece los símbolos que se utilizarán en la tradición de los objetos para mostrar que un efecto de poción se aplica al golpear al jugador que realiza el golpe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Establece los símbolos que se utilizarán en la tradición de los objetos para mostrar que un efecto de poción se volverá a aplicar siempre que el jugador lo maneje.
potionEffectContinuousLore: '&6⟲'
# Establece los caracteres con prefijo para los encantamientos de élite en la tradición de los objetos.
eliteEnchantmentLoreColor: '&9◇'
# Establece los caracteres con prefijo para los encantamientos de vainilla en la tradición de los objetos.
vanillaEnchantmentLoreColor: '&7◇'
# Establece los caracteres con prefijo para los encantamientos personalizados en la tradición de los objetos.
customEnchantmentColor: '&3◇'
# Establece los caracteres con prefijo para los efectos de poción en la tradición de los objetos.
potionEffectLoreColor: '&5◇'
# Establece el texto que aparecerá en el objeto si el objeto no está vinculado al alma.
noSoulbindLore: '&7¡No está vinculado al alma!'
# Establece si el objeto de élite puede ser encantado por medios de vainilla. ¡Esto no se recomienda ya que EliteMobs tiene su propio sistema de encantamientos personalizados con su propio equilibrio!
preventEliteItemEnchantment: true
# Establece si los objetos de élite pueden ser desencantados por medios de vainilla.
preventEliteItemDisenchantment: true
# Establece el mensaje que aparece para los jugadores cuando intentan desencantar un objeto y eso no está permitido.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] ¡No se pueden desencantar objetos de élite!'
# Establece si los objetos de élite solo perderán durabilidad al morir.
# ¡Este es un sistema importante para EliteMobs, y es muy recomendable, ya que las peleas de alto nivel son casi imposibles sin él!
eliteItemsDurabilityLossOnlyOnDeath: true
# Establece el multiplicador de pérdida de durabilidad para objetos de élite si está configurado para perder durabilidad al morir.
# Los valores entre 0.0 y 1.0 disminuyen la pérdida de durabilidad y los valores superiores a 1.0 la aumentan.
# Ejemplo: 0.5 inflige el 50 % de la pérdida de durabilidad, 2.0 inflige el 200 % de la pérdida de durabilidad.
eliteItemsDurabilityLossMultiplier: 1.0
# Establece el mensaje que aparece cuando el desguace del objeto se realiza correctamente.
scrapSucceededMessageV2: '&8[EliteMobs] &2¡Desguace exitoso $amount veces!'
# Establece el mensaje que aparece cuando falla el desguace del objeto.
scrapFailedMessageV2: '&8[EliteMobs] &c¡El desguace falló $amount veces!'
# Establece si el botín de élite debe colocarse directamente en los inventarios de los jugadores.
putLootDirectlyIntoPlayerInventory: false
# Establece la diferencia de nivel máxima que los jugadores pueden tener antes de que ya no puedan saquear objetos que sean de un nivel demasiado bajo.
# Esto se calcula en función del nivel promedio del botín que lleva el jugador.
# Como ejemplo, si está configurado en 10 y un jugador tiene un equipo de nivel 50, no podrá cultivar jefes de nivel 39.
lootLevelDifferenceLockout: 10
# Establece si EliteMobs evitará que los objetos de élite se rompan al usar el sistema de pérdida de durabilidad al morir.
# Los jugadores no podrán usar objetos sin durabilidad, esto es simplemente para evitar la pérdida accidental de objetos de alto nivel pero baja durabilidad.
preventEliteItemsFromBreaking: true
# Establece el nivel mínimo, +7, de los jefes que pueden dejar caer equipo de diamante generado por procedimientos en EliteMobs.
# No hay equipo de netherite generado por procedimientos en EliteMobs, solo botín personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Establece el mensaje que se muestra en el chat al conseguir botín con éxito a través del comando /em simloot <level> <times>.
simlootMessageSuccess: '&8[EliteMobs] &2¡Obtuvo botín y consiguió $itemName &2!'
# Establece el mensaje que se muestra en el chat al no obtener botín a través del comando /em simloot <level> <times>.
simlootMessageFailure: '&8[EliteMobs] &c¡Intentó obtener botín y no obtuvo nada!'
# Establece el mensaje que reciben los jugadores cuando el botín de élite se deposita directamente en sus inventarios.
directDropCustomLootMessage: '&8[EliteMobs] &2¡Obtuvo $itemName &2!'
# Establece el mensaje que reciben los jugadores cuando el botín de vainilla se deposita directamente en sus inventarios.
directDropMinecraftLootMessage: '&8[EliteMobs] &a¡Obtuvo $itemName &a!'
# Establece el mensaje que reciben los jugadores cuando las monedas de élite se depositan directamente en sus inventarios.
directDropCoinMessage: '&8[EliteMobs] &a¡Obtuvo &2$amount $currencyName &a!'
# Establece si EliteMobs ocultará los atributos de vainilla de Minecraft.
hideItemAttributes: true
# Establece la entrada de tradición específica de armas en un objeto de élite. El marcador de posición $EDPS se reemplaza con el DPS de élite (daño por segundo) del arma.
weaponEntry: '&7DPS de élite: &2$EDPS'
# Establece la entrada de tradición específica de armadura en un objeto de élite. El marcador de posición $EDEF se reemplaza con la DEF (defensa) de élite del arma.
armorEntry: '&7Armadura de élite: &2$EDEF'
# Establece el mensaje enviado cuando un jugador mata a un jefe, pero el nivel del equipo es demasiado diferente del nivel del jefe para obtener monedas.
levelRangeTooDifferent: '&8EM] &4Tu equipo es de nivel $playerLevel y el jefe es de nivel $bossLevel, ¡la diferencia de nivel es demasiado alta para obtener monedas!'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contiene todas las opciones de configuración relacionadas con el sistema de combate personalizado y la mayoría de las opciones de configuración generalmente relacionadas con cómo funcionan los mobs de élite.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece si aparecerán élites generadas naturalmente. Nota: ¡los mobs de eventos como el rey zombi no son élites generadas naturalmente! Tendrá que deshabilitar los eventos si desea deshabilitar los jefes de eventos.
doNaturalEliteMobSpawning: true
# Establece si las generaciones generadas a partir de generadores de mobs se pueden convertir en élites. ¡No recomendado!
doSpawnersSpawnEliteMobs: false
# Establece el porcentaje de mobs generados naturalmente que se convierten en mobs de élite.
eliteMobsSpawnPercentage: 0.05
# Establece el rango de súper mobs para buscar apilamiento de súper mobs
superMobStackRange: 15
# Establece el nivel máximo en el que pueden aparecer las élites.
# Nota: el nivel de mob de élite se basa en qué armadura y armas usan los jugadores, y la armadura solo se escala hasta el nivel 200.
naturalEliteMobsLevelCap: 250
# Establece si las élites usarán armadura según su nivel. Esto es solo para fines visuales y no afecta al combate.
doElitesWearArmor: true
# Establece si las élites usarán cascos según su nivel. Esto evitará que se quemen fácilmente durante el día.
doElitesWearHelmets: true
# Establece si las élites tendrán rastros visuales a su alrededor que adviertan a los jugadores sobre los jugadores que tienen.
doNaturalEliteMobVisualEffects: true
# Establece si las élites generadas a partir de generadores harán efectos visuales.
doSpawnerEliteMobVisualEffects: false
# Establece si algunos poderes harán la fase de advertencia del poder. Esto es muy importante, ya que las fases de advertencia generalmente significan que el poder se puede esquivar, y el elemento visual permite a los jugadores saber dónde esquivar.
doPowerBuildupVisualEffects: true
# Establece si se utilizarán mensajes de muerte personalizados cuando los jugadores mueran por las élites.
doCustomEliteMobsDeathMessages: true
# Establece si EliteMobs mostrará indicadores de salud para las élites.
doDisplayMobHealthOnHit: true
# Establece si EliteMobs mostrará indicadores de daño por el daño infligido a las élites.
doDisplayMobDamageOnHit: true
# Establece si el nivel de las élites aumentará según la distancia desde la generación.
# Este es un valor que se agrega sobre su nivel normal, lo que significa que si un jugador está usando un equipo de nivel 100 cerca de la generación y el jefe tiene +1 de nivel debido a la distancia de la generación, el jefe aparecerá en el nivel 101.
# En general, no se recomienda esta opción, especialmente si tiene un sistema de tp aleatorio en su servidor.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Establece la distancia entre los incrementos de nivel para los aumentos de nivel basados en la distancia.
distanceBetweenIncrements: 100.0
# Establece cuántos niveles aumentan en cada incremento de distancia para los aumentos de nivel basados en la distancia.
levelIncreaseAtIncrements: 1.0
# Establece si los poderes de las élites se ocultarán hasta que entren en combate. Esto se recomienda por razones de rendimiento.
hideEliteMobPowersUntilAggro: true
# Establece el multiplicador para el daño infligido a todos los jefes generados por EliteMobs, excepto aquellos que usan el sistema de daño normalizado (jefes de mazmorras regionales). Los valores más altos aumentan el daño infligido, lo que facilita la eliminación de los jefes.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplierV2: 1.0
# Establece el multiplicador para el daño infligido a los jugadores por las élites. Los valores más altos aumentan la cantidad de daño infligido por los jefes, excepto aquellos que usan el sistema de daño normalizado (jefes de mazmorras regionales), lo que hace que los jefes golpeen con más fuerza.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplierV2: 1.0
# Establece si se pueden rastrear jefes especiales.
showCustomBossLocation: true
# Establece el mensaje enviado a los jugadores para rastrear la ubicación de un jefe.
bossLocationMessage: '&7[EM] &2[¡Haga clic para rastrear!]'
# Establece los comandos que se ejecutan cuando muere una élite. Los marcadores de posición válidos son:
# $level para el nivel del jefe
# $name para el nombre del jefe
# $players hará que el comando se ejecute para cada jugador que participó en la muerte. Como ejemplo, si Bob y Steve mataron a un jefe, 'broadcast $players mató al jefe' ejecutará 'bob mató al jefe' y 'steve mató al jefe'.
commandsOnEliteMobDeath: []
# Establece el mensaje enviado a los jugadores que participan en grandes asesinatos de jefes.
bossKillParticipationMessage: '&eTu daño: &2$playerDamage'
# Establece si los jefes regenerarán salud cuando salgan de combate. Muy recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Establece el mensaje enviado a los jugadores que intentan rastrear a los jefes que actualmente se encuentran en un mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: ¡En un mundo diferente!'
# Establece el prefijo agregado a los indicadores de daño cuando los jugadores golpean a un jefe con algo contra lo que el jefe es débil.
weakTextColor: '&9'
# Establece el prefijo agregado a los indicadores de daño cuando los jugadores golpean a un jefe con algo contra lo que el jefe es fuerte.
resistTextColor: '&c'
# Establece el mensaje que aparece cuando los jugadores golpean al jefe con algo contra lo que el jefe es débil.
weakText: '&9&l¡Débil!'
# Establece el mensaje que aparece cuando los jugadores golpean al jefe con algo contra lo que el jefe es fuerte.
resistText: '&c&l¡Resistencia!'
# Establece si se utilizarán elementos visuales para mostrar que un jefe es débil contra un ataque.
doWeakEffect: true
# Establece si se utilizarán elementos visuales para mostrar que un jefe es fuerte contra un ataque.
doResistEffect: true
# Establece el multiplicador para el daño infligido a los jefes utilizando el sistema de daño normalizado (jefes regionales de mazmorras). Los valores más altos aumentan el daño infligido, lo que facilita la eliminación de los jefes.
# 2.0 = 200%, 0.5 = 50%
damageToEliteMobMultiplier: 1.0
# Establece el multiplicador para el daño infligido a los jugadores por los jefes utilizando el sistema de daño normalizado (jefes regionales de mazmorras). Los valores más altos aumentan la cantidad de daño infligido por los jefes, lo que hace que los jefes golpeen con más fuerza.
# 2.0 = 200%, 0.5 = 50%
damageToPlayerMultiplier: 1.0
# Establece el daño base para los jefes personalizados que utilizan el daño normalizado (generalmente jefes regionales).
normalizedRegionalBossBaselineDamageV2: 3.0
# Establece la salud base para los jefes personalizados que utilizan la salud normalizada (generalmente jefes regionales).
normalizedRegionalBossBaselineHealthV3: 4.0
# Establece si los jefes regionales utilizarán el sistema de combate normalizado.
# Esto es muy recomendable, y el contenido prefabricado no estará equilibrado correctamente si se modifica.
normalizeRegionalBosses: true
# Establece el mensaje que aparece cuando un jefe se cura por salir de combate.
fullHealMessage: '&2¡CURACIÓN COMPLETA!'
# Establece los multiplicadores que se aplican a los ataques contra los que los jefes son fuertes y débiles.
strengthAndWeaknessDamageMultipliers: 2.0
# Establece el multiplicador aplicado a la reducción de daño del efecto de poción de resistencia para los jugadores.
resistanceDamageMultiplier: 1.0
# Establece el multiplicador aplicado a la reducción de daño cuando un jugador está levantando un escudo para ataques cuerpo a cuerpo (poderes excluidos).
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
  chestplate: Peto
  leggings: Grebas
  boots: Botas
  shears: Tijeras
  fishingRod: Caña de pescar
  shield: Escudo
  trident: Tridente
  crossbow: Ballesta
nameFormats:
- $verb $itemType del $adjective $noun
- $itemType del $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Amanecer
...
adjectives:
- Adorable
- Hermoso
...
verbs:
- Cortar
- Cortante
...
verb-ers (noun):
- Rompemundos
- Rompedestruyemundos
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

`ValidWorlds.yml` contiene la lista de mundos que EliteMobs ha detectado, así como opciones para personalizar las características de EliteMobs en ellos.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Establece la lista de mundos basados en zonas.
# ¡EL MODO DE JUEGO BASADO EN ZONAS ESTÁ OBSOLETO Y PRONTO SERÁ ELIMINADO!
zoneBasedWorlds: []
# Establece la lista de mundos en modo pesadilla.
# Los mundos en modo pesadilla son un modo de juego donde los días son más cortos y los jugadores no pueden dormir.
# Los mundos de pesadilla también tienen mayores cantidades de apariciones de élite.
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

`Arenas.yml` contiene los mensajes predeterminados y las configuraciones para las Arenas que puede modificar.

<details>

<summary><b>Expandir tabla</b></summary>

```yml
# Mensaje que aparece cuando no hay suficientes jugadores presentes para comenzar una arena.
notEnoughPlayersMessage: '&8[EliteMobs] &c¡Necesita al menos $amount para comenzar el partido!'
# Título que aparece cuando comienza una arena.
startingMessage: '&2¡Comenzando!'
# Subtítulo que aparece cuando comienza una arena.
startingSubtitle: '&2en $count...'
# Mensaje que aparece cuando una arena está llena.
arenaFullMessage: '&4[EliteMobs] &c¡La arena está llena! ¡Puedes verla como espectador mientras esperas a que termine!'
# Mensaje que aparece cuando un jugador intenta unirse a una arena activa.
arenasOngoingMessage: '&4[EliteMobs] &c¡No se puede unirse a la arena ahora, un partido está en curso! ¡Puede verla como espectador mientras espera a que termine!'
# Mensaje que aparece para recordar a los jugadores cómo comenzar una arena después de unirse como jugador.
instanceStartHintMessage: '&2[EliteMobs] &a¡Puede iniciar la instancia haciendo &2/em start'
# Mensaje que aparece para recordar a los jugadores cómo salir de una arena.
instanceQuitHintMessage: '&4[EliteMobs] &c¡Puede abandonar la instancia haciendo &4/em quit'
# Mensaje que aparece cuando los jugadores se unen a una arena.
arenaJoinPlayerMessage: "&2[EliteMobs] &a¡Puede iniciar la arena haciendo &2/em start