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
# Définit le format de l'histoire de tous les objets EliteMobs !
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
# Définit le multiplicateur d'expérience de Minecraft vanilla que laisse tomber le boss, en fonction du niveau du boss.
defaultExperienceMultiplier: 1.0
# Définit le niveau maximum pour le butin qui sera laissé tomber par EliteMobs. Il est fortement recommandé de le laisser à 200.
maximumItemLevel: 200
# Définit si les enchantements d'élite seront utilisés.
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite obtiennent des niveaux d'enchantement qui dépassent les limites de vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté de 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Ceci est fait pour que le JcJ et le combat vanilla ne soient pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans l'histoire des objets.
eliteEnchantmentLoreStrings: Élite
# Définit si EliteMobs considerará las azadas como armas válidas para los cálculos de daño.
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
# Par exemple, si la valeur est définie sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas cultiver des jefes de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêchera les objets d'élite de se casser lors de l'utilisation de la perte de durabilité du système en cas de mort.
# Les joueurs ne pourront pas utiliser les objets sans durabilité de toute façon, ceci est simplement pour éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking: true
# Définit le niveau minimum, +7, des jefes qui pueden dejar caer equipo de diamante generado por procedimientos en EliteMobs.
# Il n'y a pas d'équipement en netherite généré de façon procédurale dans EliteMobs, uniquement du butin personnalisé.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Définit le mensaje que se muestra en el chat al conseguir botín con éxito a través del comando /em simloot <level> <times>.
simlootMessageSuccess: '&8[EliteMobs] &2Rolled for loot and got $itemName &2!'
# Définit le mensaje que se muestra en el chat al no obtener botín a través del comando /em simloot <level> <times>.
simlootMessageFailure: '&8[EliteMobs] &cRolled for loot and got nothing!'
# Définit le mensaje que reciben los jugadores cuando el botín de élite se deposita directamente en sus inventarios.
directDropCustomLootMessage: '&8[EliteMobs] &2Obtained $itemName &2!'
# Définit le mensaje que reciben los jugadores cuando el botín de vainilla se deposita directamente en sus inventarios.
directDropMinecraftLootMessage: '&8[EliteMobs] &aObtained $itemName &a!'
# Définit le mensaje que reciben los jugadores cuando las monedas de élite se depositan directamente en sus inventarios.
directDropCoinMessage: '&8[EliteMobs] &aObtained &2$amount $currencyName &a!'
# Establece si EliteMobs ocultará los atributos de vainilla de Minecraft.
hideItemAttributes: true
# Définit l'entrée de tradition spécifique aux armes sur un objet d'élite. Le marqueur de position $EDPS est remplacé par le DPS d'élite (dégâts par seconde) de l'arme.
weaponEntry: '&7DPS d'élite : &2$EDPS'
# Définit l'entrée de tradition spécifique aux armures sur un objet d'élite. Le marqueur de position $EDEF est remplacé par la DEF (défense) d'élite de l'arme.
armorEntry: '&7Armure d'élite : &2$EDEF'
# Définit le message envoyé lorsqu'un joueur tue un boss, mais que le niveau de l'équipement est trop différent du niveau du boss pour obtenir des pièces.
levelRangeTooDifferent: '&8EM] &4Votre équipement est de niveau $playerLevel et le boss est de niveau
  $bossLevel, la différence de niveau est trop élevée pour obtenir des pièces !'
```

</details>

---

## AntiExploit.yml

`AntiExploit.yml` Allows admins to customize different aspects of the AntiExploit system. The AntiExploit system exists to prevent players from using things such as mob grinders to easily farm for coins and loot, and pushes them to do real fights and minidungeons instead of afk clicking their way to the top of the plugin.

This is a critical system to keep on if you don't want people to just afk grind the entire plugin and want to actually have them interact with minidungeons.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the message that shows up when the antiexploit is triggered.
AntiExploit message: '&c[EM AntiExploit] &7Nearby elite won''t drop special loot.'
# Sets if the darkroom antiexploit 1 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 1: true
# Sets if the darkroom antiexploit 2 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 2: true
# Sets if the darkroom antiexploit 3 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable darkroom antiexploit 3: true
# Sets if the large darkroom antiexploit 1 is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable large darkroom antiexploit 1: true
# Sets if the enderman height antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable enderman height antiexploit: true
# Sets if the mount antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable mount antiexploit: true
# Sets if elite mobs can pick items up
preventItemPickupByMobs: true
# Sets if the ambient damage antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable ambient damage antiexploit: true
# Sets if the honey block antiexploit is enabled.
# Specific antiexploit features are not documented intentionally. Server operators can see what antiexploit type got triggered, but further information as to how it specifically works is not made available.
Enable honey block antiexploit: true
# Sets the threshold for antiexploit activation. Higher values make it more tolerant. Modifying this is not recommended.
antiExploitThreshold: 10
# Sets if the no path antiexploit is enabled
nPathExploit: true
```

</details>

---

## CombatTag.yml

`CombatTag.yml` contient les paramètres de configuration du système de tags de combat. Ce système est encore loin d'être complet, mais il tente de gérer le comportement des joueurs une fois qu'ils entrent dans le combat.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si la balise de combat est activée.
# Lorsqu'elle est activée, les joueurs qui volent et qui s'engagent dans le combat sont obligés d'arrêter de voler.
Enable combat tag: true
# Définit le message envoyé lorsque la balise de combat est activée.
Combat tag message: '&c[EliteMobs] Balise de combat activée !'
# Définit si la commande /ag aura une temporisation avant la téléportation
Enable adventurers guild teleport timer: true
# Définit le message d'action défini en attendant le temporisateur de téléportation.
Teleport time left: '&7[EM] Téléportation dans &a$time &7secondes...'
# Définit le message envoyé lorsque les joueurs se déplacent pendant qu'ils attendent la téléportation.
Teleport cancelled: '&7[EM] &cTéléportation interrompue !'
```

</details>

---

## DiscordSRV.yml

`DiscordSRV.yml` contient les paramètres de configuration pour DiscordSRV. Si vous voulez voir comment configurer cette fonctionnalité, [cliquez ici!]($language$/elitemobs/discordsrv.md)

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# La documentation peut être trouvée ici : https://magmaguy.com/wiki.html#lang=fr&article=elitemobs+discordsrv.md
announcementRoomName: VOUS_DEVEZ_METTRE_LE_NOM_DE_LA_SALLE_DISCORD_DANS_LAQUELLE_VOUS_VOULEZ_QUE_LES_ANNONCES_ELITEMOBS_SOIENT_DIFFUSÉES_TEL_QUE_VOUS_L'AVEZ_DANS_VOTRE_FICHIER_DE_CONFIGURATION_DISCORDSRV_VÉRIFIEZ_LE_WIKI_D'ELITEMOBS_POUR_PLUS_DE_DÉTAILS

```

</details>

---

## EconomySettings.yml

`EconomySettings.yml` contient les paramètres de configuration de l'économie d'EliteMobs.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit si l'économie d'EliteMobs est activée. Cela signifie les pièces d'élite, la possibilité d'acheter et de vendre des équipements et la possibilité d'améliorer les rangs de guilde
# Si elle est désactivée, les joueurs ne pourront pas progresser dans le plugin !
enableEconomy: true
# Définit la valeur de revente des objets, en % du prix d'origine. 5 correspond à 5 %
itemResaleValue: 5.0
# Définit le nom dans le jeu de la devise utilisée.
currencyName: Pièces d'élite
# Définit le plugin pour utiliser Vault. CE N'EST PAS RECOMMANDÉ ! Lisez pourquoi ici : https://github.com/MagmaGuy/EliteMobs/wiki/%5BThird-party-support%5D-Vault
useVault - not recommended: false
# Définit si les élites laisseront tomber des pièces en fonction de leur niveau.
enableCurrencyShower: true
# Définit le multiplicateur pour la devise laissée tomber par les élites.
currencyShowerTierMultiplier: 1.0
# Définit le message envoyé lorsque les joueurs ramassent la monnaie d'élite.
chatCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Définit le message de la barre d'action envoyé lorsque les joueurs ramassent la monnaie d'élite.
actionbarCurrencyShowerMessage: '&7[EM] Vous avez ramassé &a$amount $currency_name !'
# Envoie le message que les joueurs reçoivent après avoir pillé la monnaie. Utile à des fins de tutoriel.
adventurersGuildNotificationMessages: '&7[EM] Argent supplémentaire à dépenser ? Essayez &a/ag !'
# Définit le taux d'imposition pour les transactions entre joueurs.
# Fortement recommandé pour des raisons d'équilibre, car les joueurs de haut niveau peuvent gagner jusqu'à 6 fois plus de devise et essayer d'utiliser d'autres joueurs pour contourner les réinitialisations de devise de prestige.
playerToPlayerPaymentTaxes: 0.2
# Message envoyé lors de l'envoi de devise d'élite à d'autres joueurs.
Economy pay message v2: '&2Vous avez payé &2$amount_sent $currency_name &2à $receiver&2,
  qui a reçu $amount_received après impôts !'
# Message envoyé après que les joueurs envoient de la monnaie.
Economy currency left message: Vous avez maintenant &2$amount_left $currency_name
# Message reçu lors de la réception de la monnaie.
Economy money from payment message: Vous avez reçu &2$amount_received $currency_name
  &ffrom $sender
# Message envoyé lorsque les joueurs tentent d'envoyer une quantité de pièces qu'ils ne possèdent pas.
Economy payment insufficient currency: '&cVous n'avez pas assez de $currency_name pour
  faire ça !'
# Message de la commande /em balance
Wallet command message: Vous avez &2$balance $currency_name
# Message de confirmation envoyé lorsque les joueurs tentent d'envoyer de la monnaie à un autre joueur.
Tax confirmation message: '&cL'envoi d'un paiement coûtera $percentage % de taxes. &aFaire
  &9$command &apoursuivre !'
# Message envoyé lorsqu'un joueur achète dans une boutique.
Shop buy message: '&aVous avez acheté $item_name &a pour $item_value $currency_name !'
# Message envoyé lorsqu'un joueur interagit avec une boutique.
Shop current balance message: '&aVous avez $currency_amount $currency_name.'
# Message envoyé lorsque les joueurs n'ont pas suffisamment de devise pour acheter un objet
Shop insufficient funds message: '&cVous n'avez pas assez de $currency_name !'
# Deuxième partie du message envoyé lorsque les joueurs tentent d'acheter un objet qu'ils ne peuvent pas se permettre.
Shop item cost message: Cet objet coûte &c$item_value $currency_name.
# Message envoyé lors de la vente d'un objet dans une boutique.
Shop sell message: '&aVous avez vendu $item_name &a pour $currency_amount $currency_name !'
# Message envoyé lors de la tentative de vente d'un objet qui n'appartient pas à ce joueur.
Shop sale player items warning: '&cVous ne pouvez pas vendre des objets qui ne sont pas liés à votre âme ! Cela inclut les objets d'autres niveaux de prestige !'
# Message envoyé lors de la tentative de vente d'un objet qui n'est pas d'EliteMobs
Shop sale instructions: '&cVous ne pouvez vendre que du butin EliteMobs ici ! (Armure/armes laissées tomber par les élites affichant une valeur sur leur histoire)'
# Message envoyé lors de la vente d'un lot d'objets d'élite.
shopBatchSellItem: '&aVous avez vendu vos objets &a pour $currency_amount $currency_name !'
lootShowerMaterial:
  # Définit le type de matériau de 1 pièce d'élite laissée tomber.
  '1': GOLD_NUGGET
  '5': GOLD_INGOT
  '10': GOLD_BLOCK
  '20': EMERALD
  '50': EMERALD_BLOCK
  '100': DIAMOND
  '500': DIAMOND_BLOCK
  '1000': NETHER_STAR
lootShowerData:
  # Définit l'ID de modèle personnalisé pour 1 pièce d'élite laissée tomber. Utilisé par le pack de ressources.
  '1': 1
  '5': 1
  '10': 1
  '20': 1
  '50': 1
  '100': 1
  '500': 1
  '1000': 1
materialWorth:
  # Définit la valeur de ce matériau pour le système de devises elitemobs.
  DIAMOND_AXE: 17.0
  # Définit la valeur de ce matériau pour le système de devises elitemobs.
  DIAMOND_BOOTS: 17.0
  # Définit la valeur de ce matériau pour le système de devises elitemobs.
  DIAMOND_CHESTPLATE: 17.0
  # Définit la valeur de ce matériau pour le système de devises elitemobs.
  DIAMOND_LEGGINGS: 17.0
  # Définit la valeur de ce matériau pour le système de devises elitemobs.
  DIAMOND_HELMET: 1