  FreezeWall2:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        offset: 0,2,0
        track: false
      Target2:
        targetType: SELF
        offset: 6,2,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 10
      times: 20
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
  FreezeWall3:
    Zone:
      shape: ROTATING_RAY
      Target:
        targetType: SELF
        offset: 0,-2,0
        track: false
      Target2:
        targetType: SELF
        offset: 6,-2,0
        track: false
      yawRotation: 360
      animationDuration: 200
      ignoresSolidBlocks: true
    Actions:
    - action: SPAWN_PARTICLE
      particles:
      - particle: SNOWFLAKE
      Target:
        targetType: ZONE_FULL
        track: false
        coverage: 1.0
      repeatEvery: 10
      times: 20
    - action: VISUAL_FREEZE
      duration: 100
      Target:
        targetType: ZONE_FULL
        track: false
      repeatEvery: 1
      times: 200
```

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/power_example_freezewall.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

</div>

</div>

</details>

</div>
```yaml
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

`events.yml` contiene las opciones de configuración globales para la creación de eventos.

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
noItemDurabilityMessage: '&8[EliteMobs] $item &4¡está roto! ¡No funcionará hasta que se repare!'
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
# Establece el multiplicador de experiencia de Minecraft de vainilla que deja caer el jefe, según el nivel del jefe.
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
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] ¡No se pueden desencantar los objetos de élite!'
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
# Los jugadores no podrán usar objetos sin durabilidad de todos modos, esto es simplemente para evitar la pérdida accidental de objetos de alto nivel pero baja durabilidad.
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
# Establece el mensaje enviado cuando un jugador mata a un jefe, pero el nivel del equipo es demasiado diferente del nivel del jefe para obtener monedas
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
# Establece los multiplicadores aplicados a los ataques contra los que los jefes son fuertes y débiles.
strengthAndWeaknessDamageMultipliers: 2.0
# Establece el multiplicador aplicado a la reducción de daño cuando un jugador está levantando un escudo para ataques cuerpo a cuerpo (poderes excluidos).
resistanceDamageMultiplier: 1.0
# Establece el multiplicador aplicado a la reducción de daño cuando un jugador está levantando un escudo para ataques cuerpo a cuerpo (poderes excluidos).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contiene todas las opciones de configuración para configurar los objetos generados por procedimientos.

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

`Arenas.yml` contiene los mensajes predeterminados y la configuración de las Arenas que puede modificar.

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
arenaFullMessage: '&4[EliteMobs] &c¡La arena está llena! ¡Puede verla como espectador mientras espera a que termine!'
# Mensaje que aparece cuando un jugador intenta unirse a una arena activa.
arenasOngoingMessage: '&4[EliteMobs] &c¡No se puede unirse a la arena ahora, un partido está en curso! ¡Puede verla como espectador mientras espera a que termine!'
# Mensaje que aparece para recordar a los jugadores cómo comenzar una arena después de unirse como jugador.
instanceStartHintMessage: '&2[EliteMobs] &a¡Puede iniciar la instancia haciendo &2/em start'
# Mensaje que aparece para recordar a los jugadores cómo salir de una arena.
instanceQuitHintMessage: '&4[EliteMobs] &c¡Puede abandonar la instancia haciendo &4/em quit'
# Mensaje que aparece cuando los jugadores se unen a una arena.
arenaJoinPlayerMessage: "&2[EliteMobs]