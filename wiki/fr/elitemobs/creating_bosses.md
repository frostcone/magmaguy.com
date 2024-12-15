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
hideItemAttributes:```yaml
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
directDropCoinMessage: '&8[EliteMobs] &aObtuvo &2$amount $currencyName &a!'
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

## events.yml

`events.yml` contient les options de configuration globales pour la création d'événements.

_**Remarque :** ce ne sont que les paramètres globaux de base._

Vous pouvez modifier davantage des événements spécifiques dans le dossier `events`.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les événements ne seront diffusés que dans le monde dans lequel les événements se produisent.
Only broadcast event message in event worlds: false
# Définit le temps de pause minimum, en minutes, entre les événements temporisés
actionEventMinimumCooldownMinutes: 240
# Définit si les événements d'action se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Définit si les événements temporisés se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contient tous les paramètres de configuration globaux pour les objets d'élite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
noItemDurabilityMessage: '&8[EliteMobs] $item &4est cassé ! Il ne fonctionnera pas tant qu'il n'est pas réparé !'
# Définit si un butin EliteMobs sera laissé tomber.
# Comprend les pièces d'élite, les objets personnalisés, les objets générés de façon procédurale - tout !
# Non recommandé ! Rend la progression du MMORPG impossible.
doEliteMobsLoot: true
# Définit si le butin généré de façon procédurale aura des couleurs différentes en fonction de la qualité de l'objet.
doMMORPGColorsForItems: true
# Définit si le placement d'objets personnalisés, comme les bannières ou les blocs, est empêché.
# Ceci est recommandé : les objets personnalisés se cassent lorsqu'ils sont placés et ne peuvent pas être récupérés !
preventCustomItemPlacement: true
# Définit le format de l'histoire des objets EliteMobs !
# Les marqueurs de position suivants sont valides :
# $itemLevel - affiche le niveau de l'objet
# $prestigeLevel - affiche le niveau de prestige
# $weaponOrArmorStats - affiche les statistiques de DPS d'élite ou d'armure d'élite, en fonction de l'objet
# $soulbindInfo - affiche à qui, le cas échéant, l'objet est lié à l'âme
# $itemSource - affiche d'où provient l'objet, comme un mob ou une boutique
# $ifLore - fait apparaître une ligne uniquement si l'objet a une histoire personnalisée. S'applique uniquement aux objets personnalisés
# $customLore - affiche l'ensemble de l'histoire personnalisée. S'applique uniquement aux objets personnalisés
# $ifEnchantments - fait apparaître une ligne uniquement si l'objet possède des enchantements
# $enchantments - affiche les enchantements sur l'objet
# $eliteEnchantments - affiche les enchantements d'élite sur l'objet
# $ifCustomEnchantments - affiche les enchantements personnalisés sur l'objet
# $customEnchantments - affiche les enchantements personnalisés sur l'objet
# $ifPotionEffects - affiche uniquement la ligne si l'objet a des effets de potion
# $potionEffects - affiche les effets de potion sur l'objet
# $loreResaleValue - affiche la valeur de l'objet. Pourrait afficher le prix d'achat ou de vente en fonction de l'endroit où il est visualisé
# Important : plusieurs des marqueurs de position peuvent être davantage personnalisés par les paramètres de configuration ci-dessous
itemLoreStructureV2:
- §7§m§l---------§7<§lInfo. équipement§7>§m§l---------
- '§7Niveau de l'objet : §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lHistoire§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantements§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEnchants persos.§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffets§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Définit la tradition de la source de la boutique pour les achats en magasin
shopSourceItemLores: '&7Acheté dans une boutique'
# Définit la tradition de la source de l'objet pour les objets pillés sur les boss
mobSourceItemLores: '&7Pillé sur $mob'
# Définit la tradition de valeur de l'objet
loreWorths: '&7Vaut $worth $currencyName'
# Définit la tradition de la valeur de revente de l'objet
loreResaleValues: '&7Se vend pour $resale $currencyName'
# Définit la possibilité de base que tout objet d'élite tombe des mobs d'élite
flatDropRateV3: 0.2
# Définit la possibilité de base que tout objet d'élite tombe des boss régionaux
regionalBossNonUniqueDropRate: 0.05
# Définit si les boss régionaux peuvent laisser tomber du butin vanilla
regionalBossesDropVanillaLoot: false
# Définit la quantité dont la possibilité qu'un objet d'élite tombe augmente en fonction du niveau du mob.
# Le niveau du mob est multiplié par cette valeur et ajouté à la possibilité de base.
# Il n'est plus recommandé d'avoir une valeur supérieure à 0.0 !
levelIncreaseDropRateV2: 0.0
# Définit la possibilité pondérée qu'un objet généré de façon procédurale tombe.
# Ce système utilise des probabilités pondérées ! Cherchez cela sur Google si vous ne savez pas ce que c'est.
proceduralItemDropWeight: 90.0
# Définit la possibilité relative qu'un objet pondéré tombe.
# Les objets pondérés sont des objets personnalisés qui n'ont pas de poids dynamique, comme les amulettes.
weighedItemDropWeight: 1.0
# Définit la possibilité relative qu'un objet fixe tombe. Ce sont des objets personnalisés qui ne s'adaptent pas.
fixedItemDropWeight: 10.0
# Définit la possibilité relative qu'un objet limité tombe. Ce sont des objets personnalisés qui s'adaptent jusqu'à un niveau spécifique
limitedItemDropWeight: 3.0
# Définit la possibilité relative qu'un objet évolutif tombe. Ce sont des objets personnalisés qui peuvent s'adapter à n'importe quel niveau et sont les plus courants dans le plugin.
scalableItemDropWeight: 6.0
# Définit le multiplicateur pour le butin vanilla du mob, en fonction du niveau du mob.
defaultLootMultiplier: 0.0
# Définit le niveau maximum pour le multiplicateur de butin par défaut.
levelCapForDefaultLootMultiplier: 200
# Définit le multiplicateur d'expérience de Minecraft vanilla qui est laissé tomber pour le boss, en fonction du niveau du boss.
defaultExperienceMultiplier: 1.0
# Définit le niveau maximum pour le butin qui sera laissé tomber par EliteMobs. Il est fortement recommandé de le laisser à 200.
maximumItemLevel: 200
# Définit si les enchantements d'élite seront utilisés.
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite obtiennent des niveaux d'enchantement qui dépassent les limites vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté de 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Cela est fait pour que le JcJ et le combat vanilla ne soient pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans l'histoire de l'objet.
eliteEnchantmentLoreStrings: Élite
# Définit si EliteMobs considérera les houes comme des armes valides pour les calculs de dégâts.
useHoesAsWeapons: false
# Définit si EliteMobs fera apparaître des particules spéciales sur les objets qui tombent de haute qualité.
enableRareItemParticleEffects: true
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion s'applique en cas de frappe à l'entité qui reçoit le coup.
potionEffectOnHitTargetLore: '&4⚔☠'
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion s'applique en cas de frappe au joueur qui frappe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Définit les symboles qui seront utilisés dans l'histoire de l'objet pour montrer qu'un effet de potion continuera de s'appliquer tant que le joueur le manie.
potionEffectContinuousLore: '&6⟲'
# Définit les caractères précédés d'enchantements d'élite dans l'histoire des objets.
eliteEnchantmentLoreColor: '&9◇'
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
vanillaEnchantmentLoreColor: '&7◇'
# Définit les caractères précédés d'enchantements personnalisés dans l'histoire des objets.
customEnchantmentColor: '&3◇'
# Définit les caractères précédés d'effets de potion dans l'histoire des objets.
potionEffectLoreColor: '&5◇'
# Définit le texte qui apparaîtra sur l'objet si l'objet n'est pas lié à l'âme.
noSoulbindLore: '&7Non lié à l'âme !'
# Définit si un objet d'élite peut être enchanté par des moyens vanilla. Ce n'est pas recommandé car EliteMobs possède son propre système d'enchantements personnalisés avec son propre équilibre !
preventEliteItemEnchantment: true
# Définit si les objets d'élite peuvent être désenchantés par des moyens vanilla.
preventEliteItemDisenchantment: true
# Définit le message qui apparaît pour les joueurs lorsqu'ils tentent de désenchanter un objet et que cela n'est pas autorisé.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Impossible de désenchanter des objets d'élite !'
# Définit si les objets d'élite pourront être améliorés du diamant au netherite par des moyens vanilla. Non recommandé !
preventEliteItemDiamondToNetheriteUpgrade: true
# Définit si les objets d'élite ne perdront de la durabilité qu'en cas de mort.
# Il s'agit d'un système important pour EliteMobs, et il est fortement recommandé car les combats de haut niveau sont presque impossibles sans lui !
eliteItemsDurabilityLossOnlyOnDeath: true
# Définit le multiplicateur de perte de durabilité pour les objets d'élite s'il est configuré pour perdre de la durabilité en cas de mort.
# Les valeurs entre 0,0 et 1,0 diminuent la perte de durabilité et les valeurs supérieures à 1,0 l'augmentent.
# Exemple : 0,5 inflige 50 % de la perte de durabilité, 2,0 inflige 200 % de la perte de durabilité.
eliteItemsDurabilityLossMultiplier: 1.0
# Définit le message qui apparaît lorsque la mise au rebut d'objets réussit.
scrapSucceededMessageV2: '&8[EliteMobs] &2Mise au rebut réussie $amount fois !'
# Définit le message qui apparaît lorsque la mise au rebut d'objets échoue.
scrapFailedMessageV2: '&8[EliteMobs] &cLa mise au rebut a échoué $amount fois !'
# Définit si le butin d'élite doit être placé directement dans l'inventaire des joueurs.
putLootDirectlyIntoPlayerInventory: false
# Définit la différence de niveau maximale que les joueurs peuvent avoir avant qu'ils ne puissent plus piller des objets qui sont d'un niveau trop bas.
# Ceci est calculé en fonction du niveau moyen du butin que porte le joueur.
# Par exemple, si la valeur est définie sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas cultiver des boss de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêchera les objets d'élite de se casser lors de l'utilisation de la perte de durabilité du système en cas de mort.
# Les joueurs ne pourront pas utiliser les objets sans durabilité de toute façon, ceci est simplement pour éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking: true
# Définit le niveau minimum, +7, des boss qui peuvent laisser tomber de façon procédurale du butin de diamant dans EliteMobs.
# Il n'y a pas d'équipement en netherite généré de façon procédurale dans EliteMobs, uniquement du butin personnalisé.```yaml
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

`events.yml` contient les options de configuration globales pour la création d'événements.

_**Remarque :** ce ne sont que les paramètres globaux de base._

Vous pouvez modifier davantage des événements spécifiques dans le dossier `events`.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les événements ne seront diffusés que dans le monde dans lequel les événements se produisent.
Only broadcast event message in event worlds: false
# Définit le temps de pause minimum, en minutes, entre les événements temporisés
actionEventMinimumCooldownMinutes: 240
# Définit si les événements d'action se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#action-events
actionEventsEnabled: true
# Définit si les événements temporisés se produiront.
# https://github.com/MagmaGuy/EliteMobs/wiki/Creating-Custom-Events#timed-events
timedEventsEnabled: true
```

</details>

---

## ItemSettings.yml

`ItemSettings.yml` contient tous les paramètres de configuration globaux pour les objets d'élite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
noItemDurabilityMessage: '&8[EliteMobs] $item &4est cassé ! Il ne fonctionnera pas tant qu'il n'est pas réparé !'
# Définit si un butin EliteMobs sera laissé tomber.
# Comprend les pièces d'élite, les objets personnalisés, les objets générés de façon procédurale - tout !
# Non recommandé ! Rend la progression du MMORPG impossible.
doEliteMobsLoot: true
# Définit si le butin généré de façon procédurale aura des couleurs différentes en fonction de la qualité de l'objet.
doMMORPGColorsForItems: true
# Définit si le placement d'objets personnalisés, comme les bannières ou les blocs, est empêché.
# Ceci est recommandé : les objets personnalisés se cassent lorsqu'ils sont placés et ne peuvent pas être récupérés !
preventCustomItemPlacement: true
# Définit le format de l'histoire des objets EliteMobs !
# Les marqueurs de position suivants sont valides :
# $itemLevel - affiche le niveau de l'objet
# $prestigeLevel - affiche le niveau de prestige
# $weaponOrArmorStats - affiche les statistiques de DPS d'élite ou d'armure d'élite, en fonction de l'objet
# $soulbindInfo - affiche à qui, le cas échéant, l'objet est lié à l'âme
# $itemSource - affiche d'où provient l'objet, comme un mob ou une boutique
# $ifLore - fait apparaître une ligne uniquement si l'objet a une histoire personnalisée. S'applique uniquement aux objets personnalisés
# $customLore - affiche l'ensemble de l'histoire personnalisée. S'applique uniquement aux objets personnalisés
# $ifEnchantments - fait apparaître une ligne uniquement si l'objet possède des enchantements
# $enchantments - affiche les enchantements sur l'objet
# $eliteEnchantments - affiche les enchantements d'élite sur l'objet
# $ifCustomEnchantments - affiche les enchantements personnalisés sur l'objet
# $customEnchantments - affiche les enchantements personnalisés sur l'objet
# $ifPotionEffects - affiche uniquement la ligne si l'objet a des effets de potion
# $potionEffects - affiche les effets de potion sur l'objet
# $loreResaleValue - affiche la valeur de l'objet. Pourrait afficher le prix d'achat ou de vente en fonction de l'endroit où il est visualisé
# Important : plusieurs des marqueurs de position peuvent être davantage personnalisés par les paramètres de configuration ci-dessous
itemLoreStructureV2:
- §7§m§l---------§7<§lInfo. équipement§7>§m§l---------
- '§7Niveau de l'objet : §f$itemLevel §7Prestige §6$prestigeLevel'
- $weaponOrArmorStats
- $soulbindInfo
- $itemSource
- $ifLore§7§m§l-----------§7< §f§lHistoire§7 >§m§l-----------
- $customLore
- $ifEnchantments§7§m§l--------§7<§9§lEnchantements§7>§m§l--------
- $enchantments
- $eliteEnchantments
- $ifCustomEnchantments§7§m§l------§7< §3§lEnchants persos.§7 >§m§l------
- $customEnchantments
- $ifPotionEffects§7§m§l----------§7< §5§lEffets§7 >§m§l----------
- $potionEffect
- §7§l§m-----------------------------
- $loreResaleValue
# Définit la tradition de la source de la boutique pour les achats en magasin
shopSourceItemLores: '&7Acheté dans une boutique'
# Définit la tradition de la source de l'objet pour les objets pillés sur les boss
mobSourceItemLores: '&7Pillé sur $mob'
# Définit la tradition de valeur de l'objet
loreWorths: '&7Vaut $worth $currencyName'
# Définit la tradition de la valeur de revente de l'objet
loreResaleValues: '&7Se vend pour $resale $currencyName'
# Définit la possibilité de base que tout objet d'élite tombe des mobs d'élite
flatDropRateV3: 0.2
# Définit la possibilité de base que tout objet d'élite tombe des boss régionaux
regionalBossNonUniqueDropRate: 0.05
# Définit si les boss régionaux peuvent laisser tomber du butin vanilla
regionalBossesDropVanillaLoot: false
# Définit la quantité dont la possibilité qu'un objet d'élite tombe augmente en fonction du niveau du mob.
# Le niveau du mob est multiplié par cette valeur et est ajouté à la possibilité de base.
# Il n'est plus recommandé d'avoir une valeur supérieure à 0,0 !
levelIncreaseDropRateV2: 0.0
# Définit la possibilité pondérée qu'un objet généré de façon procédurale tombe.
# Ce système utilise des probabilités pondérées ! Cherchez ça sur Google si vous ne savez pas ce que c'est.
proceduralItemDropWeight: 90.0
# Définit la possibilité relative qu'un objet pondéré tombe.
# Les objets pondérés sont des objets personnalisés qui n'ont pas de poids dynamique, comme les amulettes.
weighedItemDropWeight: 1.0
# Définit la possibilité relative qu'un objet fixe tombe. Ce sont des objets personnalisés qui ne s'adaptent pas.
fixedItemDropWeight: 10.0
# Définit la possibilité relative qu'un objet limité tombe. Ce sont des objets personnalisés qui s'adaptent jusqu'à un niveau spécifique
limitedItemDropWeight: 3.0
# Définit la possibilité relative qu'un objet évolutif tombe. Ce sont des objets personnalisés qui peuvent s'adapter à n'importe quel niveau et sont les plus courants dans le plugin.
scalableItemDropWeight: 6.0
# Définit le multiplicateur pour le butin vanilla du mob, en fonction du niveau du mob.
defaultLootMultiplier: 0.0
# Définit le niveau maximum pour le multiplicateur de butin par défaut.
levelCapForDefaultLootMultiplier: 200
# Définit le multiplicateur d'expérience de Minecraft vanilla que laisse tomber le boss, en fonction du niveau du boss.
defaultExperienceMultiplier: 1.0
# Définit le niveau maximum pour le butin qui sera laissé tomber par EliteMobs. Il est fortement recommandé de le laisser à 200.
maximumItemLevel: 200
# Définit si les enchantements d'élite seront utilisés.
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite obtiennent des niveaux d'enchantement qui dépassent les limites de vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté de 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Ceci est fait pour que le JcJ et le combat vanilla ne soient pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans l'histoire de l'objet.
eliteEnchantmentLoreStrings: Élite
# Définit si EliteMobs considèrera les houes comme des armes valides pour les calculs de dégâts.
useHoesAsWeapons: false
# Définit si EliteMobs fera apparaître des particules spéciales sur les objets qui tombent de haute qualité.
enableRareItemParticleEffects: true
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion s'applique en cas de frappe à l'entité qui reçoit le coup.
potionEffectOnHitTargetLore: '&4⚔☠'
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion s'applique en cas de frappe au joueur qui frappe.
potionEffectOnHitSelfLore: '&9⚔🛡'
# Définit les symboles qui seront utilisés dans l'histoire des objets pour montrer qu'un effet de potion continuera de se réappliquer tant que le joueur le manie.
potionEffectContinuousLore: '&6⟲'
# Définit les caractères précédés d'enchantements d'élite dans l'histoire des objets.
eliteEnchantmentLoreColor: '&9◇'
# Définit les caractères précédés d'enchantements de vanilla dans l'histoire des objets.
vanillaEnchantmentLoreColor: '&7◇'
# Définit les caractères précédés d'enchantements personnalisés dans l'histoire des objets.
customEnchantmentColor: '&3◇'
# Définit les caractères précédés d'effets de potion dans l'histoire des objets.
potionEffectLoreColor: '&5◇'
# Définit le texte qui apparaîtra sur l'objet si l'objet n'est pas lié à l'âme.
noSoulbindLore: '&7Non lié à l'âme !'
# Définit si un objet d'élite peut être enchanté par des moyens vanilla. Ce n'est pas recommandé car EliteMobs possède son propre système d'enchantements personnalisés avec son propre équilibre !
preventEliteItemEnchantment: true
# Définit si les objets d'élite peuvent être désenchantés par des moyens vanilla.
preventEliteItemDisenchantment: true
# Définit le message qui apparaît pour les joueurs lorsqu'ils tentent de désenchanter un objet et que cela n'est pas autorisé.
preventEliteItemDisenchantmentMessage: '&c[EliteMobs] Impossible de désenchanter des objets d'élite !'
# Définit si les objets d'élite pourront être améliorés du diamant au netherite par des moyens vanilla. Non recommandé !
preventEliteItemDiamondToNetheriteUpgrade: true
# Définit si les objets d'élite ne perdront de la durabilité qu'en cas de mort.
# Il s'agit d'un système important pour EliteMobs, et il est fortement recommandé car les combats de haut niveau sont presque impossibles sans lui !
eliteItemsDurabilityLossOnlyOnDeath: true
# Définit le multiplicateur de perte de durabilité pour les objets d'élite s'il est configuré pour perdre de la durabilité en cas de mort.
# Les valeurs entre 0,0 et 1,0 diminuent la perte de durabilité et les valeurs supérieures à 1,0 l'augmentent.
# Exemple : 0,5 inflige 50 % de la perte de durabilité, 2,0 inflige 200 % de la perte de durabilité.
eliteItemsDurabilityLossMultiplier: 1.0
# Définit le message qui apparaît lorsque la mise au rebut d'objets réussit.
scrapSucceededMessageV2: '&8[EliteMobs] &2Mise au rebut réussie $amount fois !'
# Définit le message qui apparaît lorsque la mise au rebut d'objets échoue.
scrapFailedMessageV2: '&8[EliteMobs] &cLa mise au rebut a échoué $amount fois !'
# Définit si le butin d'élite doit être placé directement dans les inventaires des joueurs.
putLootDirectlyIntoPlayerInventory: false
# Définit la différence de niveau maximale que les joueurs peuvent avoir avant qu'ils ne puissent plus piller des objets qui sont d'un niveau trop bas.
# Ceci est calculé en fonction du niveau moyen du butin que porte le joueur.
# Par exemple, si la valeur est définie sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas cultiver des boss de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêchera les objets d'élite de se casser lors de l'utilisation de la perte de durabilité du système en cas de mort.
# Les joueurs ne pourront pas utiliser les objets sans durabilité de toute façon, ceci est simplement pour éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking: true
# Définit le niveau minimum, +7, des boss qui peuvent laisser tomber de façon procédurale du butin de diamant dans EliteMobs.
# Il n'y a pas d'équipement en netherite généré de façon procédurale dans EliteMobs, uniquement du butin personnalisé.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Définit le mensaje que se muestra en el chat al conseguir botín con éxito a través del comando /em simloot <level> <times>.
simlootMessageSuccess: '&8[EliteMobs] &2¡Obtuvo botín y consiguió $itemName &2!'
# Définit le mensaje que se muestra en el chat al no obtener botín a través del comando /em simloot <level> <times>.
simlootMessageFailure: '&8[EliteMobs] &c¡Intentó obtener botín y no obtuvo nada!'
# Définit le mensaje que reciben los jugadores cuando el botín de élite se deposita directamente en sus inventarios.
directDropCustomLootMessage: '&8[EliteMobs] &2¡Obtuvo $itemName &2!'
# Définit le mensaje que reciben los jugadores cuando el botín de vainilla se deposita directamente en sus inventarios.
directDropMinecraftLootMessage: '&8[EliteMobs] &a¡Obtuvo $itemName &a!'
# Définit el mensaje que reciben los jugadores cuando las monedas de élite se depositan directamente en sus inventarios.
directDropCoinMessage: '&8[EliteMobs] &aObtuvo &2$amount $currencyName &a!'
# Définit si EliteMobs ocultará los atributos de vainilla de Minecraft.
hideItemAttributes: true
# Définit l'entrée de tradition spécifique aux armes sur un objet d'élite. Le marqueur de position $EDPS est remplacé par le DPS d'élite (dégâts par seconde) de l'arme.
weaponEntry: '&7DPS d'élite : &2$EDPS'
# Définit l'entrée de tradition spécifique aux armures sur un objet d'élite. Le marqueur de position $EDEF est remplacé par la DEF (défense) d'élite de l'arme.
armorEntry: '&7Armure d'élite : &2$EDEF'
# Définit le message envoyé lorsque qu'un joueur tue un boss, mais que le niveau de l'équipement est trop différent du niveau du boss pour obtenir des pièces.
levelRangeTooDifferent: '&8EM] &4Votre équipement est de niveau $playerLevel et le boss est de niveau
  $bossLevel, la différence de niveau est trop élevée pour obtenir des pièces !'
```

</details>

---

## MobCombatSettings.yml

`MobCombatSettings.yml` contient toutes les options de configuration liées au système de combat personnalisé et la plupart des options de configuration généralement liées au fonctionnement des mobs d'élite.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si les élites générées naturellement apparaîtront. Remarque : les mobs d'événement comme le roi zombie ne sont pas des élites générées naturellement ! Vous devrez désactiver les événements si vous voulez désactiver les boss d'événement.
doNaturalEliteMobSpawning: true
# Définit si les apparitions générées à partir des générateurs de mobs peuvent être converties en élites. Non recommandé !
doSpawnersSpawnEliteMobs: false
# Définit le pourcentage de mobs générés naturellement qui sont convertis en mobs d'élite.
eliteMobsSpawnPercentage: 0.05
# Définit la plage des super mobs pour la recherche d'empilement de super mobs
superMobStackRange: 15
# Définit le niveau maximum auquel les élites peuvent apparaître.
# Remarque : le niveau de mob d'élite est basé sur l'armure et les armes que les joueurs portent, et l'armure ne peut être mise à l'échelle que jusqu'au niveau 200.
naturalEliteMobsLevelCap: 250
# Définit si les élites porteront une armure en fonction de leur niveau. Ceci est uniquement à des fins visuelles et n'affecte pas le combat.
doElitesWearArmor: true
# Définit si les élites porteront des casques en fonction de leur niveau. Cela les empêchera de brûler facilement pendant la journée.
doElitesWearHelmets: true
# Définit si les élites auront des traînées visuelles autour d'elles, avertissant les joueurs des joueurs qu'elles possèdent.
doNaturalEliteMobVisualEffects: true
# Définit si les élites générées à partir de générateurs feront des effets visuels.
doSpawnerEliteMobVisualEffects: false
# Définit si certains pouvoirs feront la phase d'avertissement du pouvoir. Ceci est très important car les phases d'avertissement signifient généralement que le pouvoir peut être esquivé et l'élément visuel permet aux joueurs de savoir où esquiver.
doPowerBuildupVisualEffects: true
# Définit si des messages de mort personnalisés seront utilisés lorsque les joueurs meurent à cause des élites.
doCustomEliteMobsDeathMessages: true
# Définit si EliteMobs affichera des indicateurs de santé pour les élites.
doDisplayMobHealthOnHit: true
# Définit si EliteMobs affichera des indicateurs de dégâts pour les dégâts infligés aux élites.
doDisplayMobDamageOnHit: true
# Définit si le niveau des élites sera augmenté en fonction de la distance de l'apparition.
# Il s'agit d'une valeur ajoutée en plus de leur niveau normal, ce qui signifie que si un joueur porte un équipement de niveau 100 près de l'apparition et que le boss a +1 de niveau à cause de la distance de l'apparition, le boss apparaîtra au niveau 101.
# Cette option n'est généralement pas recommandée, en particulier si vous avez un système de tp aléatoire sur votre serveur.
doIncreaseEliteMobLevelBasedOnSpawnDistance: false
# Définit la distance entre les incréments de niveau pour les augmentations de niveau basées sur la distance.
distanceBetweenIncrements: 100.0
# Définit le nombre de niveaux qui augmentent à chaque incrément de distance pour les augmentations de niveau basées sur la distance.
levelIncreaseAtIncrements: 1.0
# Définit si les pouvoirs des élites seront cachés jusqu'à ce qu'elles entrent en combat. Ceci est recommandé pour des raisons de performances.
hideEliteMobPowersUntilAggro: true
# Définit le multiplicateur pour les dégâts infligés à tous les boss générés par EliteMobs, sauf ceux qui utilisent le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui facilite la mort des boss.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplierV2: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les élites. Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, sauf ceux qui utilisent le système de dégâts normalisé (boss de donjons régionaux), ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplierV2: 1.0
# Définit si les boss spéciaux peuvent être suivis.
showCustomBossLocation: true
# Définit le message envoyé aux joueurs pour suivre l'emplacement d'un boss.
bossLocationMessage: '&7[EM] &2[Cliquez pour suivre !]'
# Définit les commandes qui s'exécutent lorsqu'une élite meurt. Les marqueurs de position valides sont :
# $level pour le niveau du boss
# $name pour le nom du boss
# $players fera en sorte que la commande s'exécute pour chaque joueur qui a participé à la mort. Par exemple, si Bob et Steve ont tué un boss, 'broadcast $players a tué le boss !' exécutera 'bob a tué le boss' et 'steve a tué le boss !'
commandsOnEliteMobDeath: []
# Establece el mensaje enviado a los jugadores que participan en grandes asesinatos de jefes.
bossKillParticipationMessage: '&eTu daño: &2$playerDamage'
# Establece si los jefes regenerarán salud cuando salgan de combate. Muy recomendado.
regenerateCustomBossHealthOnCombatEnd: true
# Establece el mensaje enviado a los jugadores que intentan rastrear a los jefes que actualmente se encuentran en un mundo diferente.
defaultOtherWorldBossLocationMessage: '$name: ¡En un mundo diferente!'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakTextColor: '&9'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistTextColor: '&c'
# Définit le message qui apparaît lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakText: '&9&lFaible !'
# Définit le message qui apparaît lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistText: '&c&lRésistance !'
# Définit si des visuels seront utilisés pour montrer qu'un boss est faible contre une attaque.
doWeakEffect: true
# Définit si des visuels seront utilisés pour montrer qu'un boss est fort contre une attaque.
doResistEffect: true
# Définit le multiplicateur pour les dégâts infligés aux boss à l'aide du système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui facilite la mort des boss.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplier: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les boss utilisant le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplier: 1.0
# Définit les dégâts de référence pour les boss personnalisés utilisant les dégâts normalisés (généralement les boss de donjons régionaux).
normalizedRegionalBossBaselineDamageV2: 3.0
# Définit la santé de référence pour les boss personnalisés utilisant la santé normalisée (généralement les boss régionaux).
normalizedRegionalBossBaselineHealthV3: 4.0
# Définit si les boss régionaux utiliseront le système de combat normalisé.
# Ceci est fortement recommandé, et le contenu préfabriqué ne sera pas correctement équilibré s'il est modifié.
normalizeRegionalBosses: true
# Définit le message qui apparaît lorsqu'un boss guérit en sortant du combat.
fullHealMessage: '&2GUÉRISON COMPLÈTE !'
# Définit les multiplicateurs appliqués aux attaques contre lesquelles les boss sont forts et faibles.
strengthAndWeaknessDamageMultipliers: 2.0
# Définit le multiplicateur appliqué à la réduction de dégâts de l'effet de potion de résistance pour les joueurs.
resistanceDamageMultiplier: 1.0
# Définit le multiplicateur appliqué à la réduction de dégâts lorsqu'un joueur tient un bouclier pour les attaques de mêlée (pouvoirs exclus).
blockingDamageReduction: 0.8
```

</details>

---

## ProceduralItemGenerationSettings.yml

`ProceduralItemGenerationSettings.yml` contient toutes les options de configuration pour la configuration des objets générés de façon procédurale.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
dropProcedurallyGeneratedItems: true
customEnchantmentsChance: 0.5
materialNames:
  swordName: Épée
  bowName: Arc
  pickaxe: Pioche
  spade: Pelle
  hoe: Houe
  axe: Hache
  helmet: Casque
  chestplate: Plastron
  leggings: Jambières
  boots: Bottes
  shears: Cisailles
  fishingRod: Canne à pêche
  shield: Bouclier
  trident: Trident
  crossbow: Arbalète
nameFormats:
- $verb $itemType de $adjective $noun
- $itemType de $adjective $noun
- $noun's $adjective $verb $itemType
- $verb $itemType
- $adjective $verb $itemType
- The $verb-er
- The $adjective $verb-er
nouns:
- MagmaGuy
- Aube
...
adjectives:
- Adorable
- Magnifique
...
verbs:
- Tailler
- Couper
...
verb-ers (noun):
- Brise-monde
- Brise-destructeur_de_monde
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

`ValidWorlds.yml` contient la liste des mondes qu'EliteMobs a détectés, ainsi que des options pour personnaliser les fonctionnalités d'EliteMobs sur ceux-ci.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit la liste des mondes basés sur des zones.
# LE MODE DE JEU BASÉ SUR LES ZONES EST DÉPASSÉ ET SERA BIENTÔT SUPPRIMÉ !
zoneBasedWorlds: []
# Définit la liste des mondes en mode cauchemar.
# Les mondes en mode cauchemar sont un mode de jeu où les jours sont plus courts et les joueurs ne peuvent pas dormir.