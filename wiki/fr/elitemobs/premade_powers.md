translate to french:
```yml
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
# No hay equipo de netherite generado por procedimientos en EliteMobs, solo botín personalizado.
minimumProcedurallyGeneratedDiamondLootLevelPlusSeven: 10
# Définit le message qui se montre en el chat al conseguir botín con éxito a través del comando /em simloot <level> <times>.
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
# Définit si le niveau des élites augmentera en fonction de la distance de l'apparition.
# Il s'agit d'une valeur ajoutée en plus de leur niveau normal, ce qui signifie que si un joueur porte un équipement de niveau 100 près de l'apparition et que le boss a +1 de niveau en raison de la distance de l'apparition, le boss apparaîtra au niveau 101.
# En général, cette option n'est pas recommandée, en particulier si vous avez un système de tp aléatoire sur votre serveur.
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
# Définit le message envoyé aux joueurs qui participent à de grandes mises à mort de boss.
bossKillParticipationMessage: '&eVos dégâts : &2$playerDamage'
# Définit si les boss régénéreront leur santé lorsqu'ils sortiront du combat. Fortement recommandé.
regenerateCustomBossHealthOnCombatEnd: true
# Définit le message envoyé aux joueurs qui tentent de suivre les boss qui se trouvent actuellement dans un monde différent.
defaultOtherWorldBossLocationMessage: '$name : Dans un autre monde !'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est faible.
weakTextColor: '&9'
# Définit le préfixe ajouté aux indicateurs de dégâts lorsque les joueurs frappent un boss avec quelque chose contre lequel le boss est fort.
resistTextColor: '&c'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est faible.
weakText: '&9&lFaible !'
# Définit le message qui apparaît lorsque les joueurs frappent le boss avec quelque chose contre lequel le boss est fort.
resistText: '&c&lRésistance !'
# Définit si des visuels seront utilisés pour montrer qu'un boss est faible contre une attaque.
doWeakEffect: true
# Définit si des visuels seront utilisés pour montrer qu'un boss est fort contre une attaque.
doResistEffect: true
# Définit le multiplicateur pour les dégâts infligés aux boss utilisant le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent les dégâts infligés, ce qui facilite la mort des boss.
# 2.0 = 200 %, 0.5 = 50 %
damageToEliteMobMultiplier: 1.0
# Définit le multiplicateur pour les dégâts infligés aux joueurs par les boss utilisant le système de dégâts normalisé (boss de donjons régionaux). Des valeurs plus élevées augmentent la quantité de dégâts infligés par les boss, ce qui rend les boss plus difficiles à frapper.
# 2.0 = 200 %, 0.5 = 50 %
damageToPlayerMultiplier: 1.0
# Définit les dégâts de référence pour les boss personnalisés utilisant les dégâts normalisés (généralement les boss régionaux de donjons).
normalizedRegionalBossBaselineDamageV2: 3.0
# Définit la santé de référence pour les boss personnalisés utilisant la santé normalisée (généralement les boss régionaux de donjons).
normalizedRegionalBossBaselineHealthV3: 4.0
# Définit si les boss régionaux utiliseront le système de combat normalisé.
# Ceci est très fortement recommandé et le contenu préfabriqué ne sera pas équilibré correctement s'il est modifié.
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

`ValidWorlds.yml` contient la liste des mondes qu'EliteMobs a détectés, ainsi que les options pour personnaliser les fonctionnalités d'EliteMobs sur ceux-ci.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Définit la liste des mondes basés sur des zones.
# LE MODE DE JEU BASÉ SUR LES ZONES EST DÉPASSÉ ET SERA BIENTÔT SUPPRIMÉ !
zoneBasedWorlds: []
# Définit la liste des mondes en mode cauchemar.
# Les mondes en mode cauchemar sont un mode de jeu où les jours sont plus courts et les joueurs ne peuvent pas
# dormir.
# Les# Liste des pouvoirs prédéfinis

Un boss peut avoir un ou plusieurs pouvoirs. Nous vous recommandons de maintenir la quantité en dessous de 5. Une liste complète des pouvoirs se trouve dans le dossier `~/plugins/EliteMobs/powers`.

La liste suivante n'est pas nécessairement complète [puisque vous pouvez créer des pouvoirs personnalisés]($language$elitemobs/creating_powers.md) et certains donjons sont livrés avec leurs propres pouvoirs.

*Remarque : Cliquez [ici]($language$/elitemobs/creating_bosses.md&section=powers) pour apprendre comment personnaliser les boss avec ces pouvoirs.*

Les GIF de puissance sont uniquement à des fins de démonstration. Veuillez noter que leur animation ne reflète **PAS** la vitesse réelle de l'animation des pouvoirs dans le jeu.

<div align="center">

## Feux d'artifice de flèches

| Nom de fichier | Description |
|----------|-------------|
| `arrow_fireworks.yml`      | Le boss tire des feux d'artifice lorsqu'il est touché. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_arrowfireworks.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Pluie de flèches

| Nom de fichier | Description |
|----------|-------------|
| `arrow_rain.yml`      | Fait pleuvoir des flèches du ciel. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_arrowrain.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Flèche d'attaque

| Nom de fichier | Description                                       |
|----------|---------------------------------------------------|
| `attack_arrow.yml`  | Fait que le boss tire une flèche devant lui. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackarrow.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque aveuglante

| Nom de fichier | Description                                       |
|----------|---------------------------------------------------|
| `attack_blinding.yml`  | Donne au joueur un effet de potion cécité lors d'une attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackblinding.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque perturbatrice

| Nom de fichier | Description                                    |
|----------|------------------------------------------------|
| `attack_confusing.yml`  | Donne au joueur un effet de potion nausée lors d'une attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackconfusing.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque de feu

| Nom de fichier | Description |
|----------|-------------|
| `attack_fire.yml`  | Met le feu aux joueurs lors de l'attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackfire.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Boule de feu d'attaque

| Nom de fichier | Description |
|----------|-------------|
| `attack_fireball.yml`  | Fait que le boss tire des boules de feu. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackfireball.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque de gel

| Nom de fichier | Description |
|----------|-------------|
| `attack_freeze.yml`  | Fait que le boss gèle tous les joueurs qu'il attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackfreeze.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Gravité d'attaque

| Nom de fichier | Description                                          |
|----------|------------------------------------------------------|
| `attack_gravity.yml`  | Donne au joueur un effet de potion de lévitation lors d'une attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackgravity.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Éclair d'attaque

| Nom de fichier | Description |
|----------|-------------|
| `attack_lightning.yml`  | Frappe la foudre sur les joueurs à proximité. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attacklightning.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Poison d'attaque

| Nom de fichier | Description |
|----------|-------------|
| `attack_poison.yml`  | Applique du poison lors des attaques. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackpoison.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque de poussée

| Nom de fichier | Description |
|----------|-------------|
| `attack_push.yml`  | Augmente la répulsion des attaques. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackpush.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque d'aspiration

| Nom de fichier | Description |
|----------|-------------|
| `attack_vacuum.yml`  | Attire les joueurs à proximité vers le boss lors de l'attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackpull.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque de faiblesse

| Nom de fichier | Description |
|----------|-------------|
| `attack_weakness.yml`  | Applique la potion de faiblesse lors de l'attaque. |

***

## Toile d'attaque

| Nom de fichier | Description |
|----------|-------------|
| `attack_web.yml`  | Fait apparaître une toile à l'emplacement du joueur lors de l'attaque. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackweb.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Attaque de Wither

| Nom de fichier | Description |
|----------|-------------|
| `attack_wither.yml`  | Applique le poison de Wither lors des attaques. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_attackwither.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Bonus de pièces

| Nom de fichier | Description |
|----------|-------------|
| `bonus_coins.yml`  | Laisse tomber des pièces supplémentaires. |

***

## Butin bonus

| Nom de fichier | Description |
|----------|-------------|
| `bonus_loot.yml`  | Laisse tomber du butin supplémentaire. |

***

## Enfers de balles

| Nom de fichier | Description |
|----------|-------------|
| `bullet_hell.yml`  | Fait léviter le boss et tirer plusieurs flèches de suivi. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_bullethell.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Guérison canalisée

| Nom de fichier | Description |
|----------|-------------|
| `channel_healing.yml`  | Fait que le boss soigne d'autres boss proches. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_channelhealing.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Cadavre

| Nom de fichier | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `corpse.yml`  | Fait apparaître un bloc d'os à la mort du boss. Le bloc disparaîtra au bout d'un certain temps. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_corpse.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Tranche de la mort

| Nom de fichier | Description |
|----------|-------------|
| `death_slice.yml`  | Crée une zone de dégâts autour du boss. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_deathslice.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Boule de feu ciblée du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_aimed_fireball.yml`  | Fait que le dragon tire des boules de feu. |

***

## Bombardement de flèches du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_arrow_bombardment.yml`  | Fait que le dragon tire des flèches. |

***

## Boules de feu disco du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_disco_fireballs.yml`  | Fait que le dragon fasse tourner des boules de feu autour de lui-même, puis les tire. |

***

## Foudre renforcée du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_empowered_lightning.yml`  | Fait frapper la foudre avec une animation de bloc personnalisé pour la destruction. |

***

## Bombardement de boules d'ender du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_ender_fireball_bombardment.yml`  | Fait que le dragon tire des boules de feu d'ender. |

***

## Bombardement d'endermites du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_endermite_bombardment.yml`  | Fait que le dragon génère des renforts d'endermites. |

***

## Bombardement de boules de feu du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_fireball_bombardment.yml`  | Fait que le dragon tire des boules de feu. |

***

## Bombardement de potion du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_potion_bombardment.yml`  | Fait que le dragon tire des potions. |

***

## Onde de choc du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_shockwave.yml`  | Fait que le dragon détruise l'arène de combat. |

***

## Tornade du dragon

| Nom de fichier | Description |
|----------|-------------|
| `ender_dragon_tornado.yml`  | Fait que le dragon génère une tornade. |

***

## Tempête de feu

| Nom de fichier | Description |
|----------|-------------|
| `firestorm.yml`  | Fait apparaître plusieurs piliers de flammes qui infligent des dégâts. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_firestorm.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Barrage de feux d'artifice

| Nom de fichier | Description |
|----------|-------------|
| `fireworks_barrage.yml`  | Fait que le boss tire plusieurs fusées de feux d'artifice. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_fireworksbarrage.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Bûcher de flammes

| Nom de fichier | Description                                  |
|----------|----------------------------------------------|
| `flame_pyre.yml`  | Fait apparaître un pilier de flammes autour du boss. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_flamepyre.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Lance-flammes

| Nom de fichier | Description |
|----------|-------------|
| `flamethrower.yml`  | Fait que le boss tire un lance-flammes. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_flamethrower.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Cône de givre

| Nom de fichier | Description |
|----------|-------------|
| `frost_cone.yml`  | Fait que le boss tire des boules de neige dans une direction. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_frostcone.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Marcheur de givre

| Nom de fichier | Description |
|----------|-------------|
| `frost_walker.yml`  | Donne au boss des bottes de marche sur la glace pour marcher sur l'eau. Gèlera tous les blocs d'eau qu'il touche. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_frostwalker.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Explosion d'or

| Nom de fichier | Description                                                 |
|----------|-------------------------------------------------------------|
| `gold_explosion.yml`  | Fait apparaître des pépites d'or dommageables provenant du boss. Peut être bloqué. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_goldexplosion.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Fusil de chasse doré

| Nom de fichier | Description                                                  |
|----------|--------------------------------------------------------------|
| `gold_shotgun.yml`  | Fait apparaître des pépites d'or dommageables dans une direction. Peut être bloqué. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_goldshotgun.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Coup au sol

| Nom de fichier | Description                                                                             |
|----------|-----------------------------------------------------------------------------------------|
| `ground_pound.yml`  | Fait que le boss saute, puis tombe au sol avec force. Repoussera les joueurs. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_groundpound.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Butin hyper

| Nom de fichier | Description |
|----------|-------------|
| `hyper_loot.yml`  | Laisse tomber 10x le butin normal. |

***

## Implosion

| Nom de fichier | Description |
|----------|-------------|
| `implosion.yml`  | Attire toutes les entités proches vers le boss lors de sa mort. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_implosion.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invisibilité

| Nom de fichier | Description |
|----------|-------------|
| `invisibility.yml`  | Rend le boss invisible. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invis.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invulnérabilité aux flèches

| Nom de fichier | Description |
|----------|-------------|
| `invulnerability_arrow.yml`  | Rend le boss immunisé aux projectiles. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invularrow.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invulnérabilité aux dégâts de chute

| Nom de fichier | Description |
|----------|-------------|
| `invulnerability_fall_damage.yml`  | Rend le boss immunisé aux dégâts de chute. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invulfall.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invulnérabilité au feu

| Nom de fichier | Description |
|----------|-------------|
| `invulnerability_fire.yml`  | Rend le boss immunisé aux dégâts de feu. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invulfire.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invulnérabilité aux feux d'artifice

| Nom de fichier | Description |
|----------|-------------|
| `invulnerability_fireworks.yml`  | Rend le boss immunisé aux feux d'artifice. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invulfireworks.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invulnérabilité à la projection

| Nom de fichier | Description |
|----------|-------------|
| `invulnerability_knockback.yml`  | Rend le boss immunisé à la projection de dégâts. |

*Remarque : l'activation de ce pouvoir tout en ayant également configuré le boss pour qu'il utilise `ground_pound.yml` entraînera l'absence d'animation de saut pour `ground_pound.yml`.*

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_invulknockback.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Éclairs

| Nom de fichier | Description                                                                                            |
|----------|--------------------------------------------------------------------------------------------------------|
| `lightning_bolts.yml`  | Fait apparaître des éclairs en ligne droite du boss vers l'emplacement où se tenait le joueur. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_lightbolts.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Pluie de météorites

| Nom de fichier | Description                                           |
|----------|-------------------------------------------------------|
| `meteor_shower.yml`  | Fait apparaître plusieurs boules de feu qui tombent du ciel. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_meteorshower.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Marche lunaire

| Nom de fichier | Description                                |
|----------|--------------------------------------------|
| `moonwalk.yml`  | Fait que le boss recule pour éviter les attaques. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_moonwalk.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Tirer

| Nom de fichier | Description                            |
|----------|----------------------------------------|
| `pull.yml`  | Attire les joueurs proches vers le boss. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_pull.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Flèche réfléchissante

| Nom de fichier | Description |
|----------|-------------|
| `reflect_arrow.yml`  | Fait que le boss renvoie les flèches au joueur. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_reflectarrow.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Boule de feu réfléchissante

| Nom de fichier | Description |
|----------|-------------|
| `reflect_fireball.yml`  | Fait que le boss renvoie les boules de feu au joueur. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_reflectfireball.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Téléportation

| Nom de fichier | Description                       |
|----------|-----------------------------------|
| `teleport.yml`  | Téléporte le boss vers le joueur qui l'a endommagé. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_teleport.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Boule de feu de suivi

| Nom de fichier | Description  |
|----------|--------------|
| `tracking_fireball.yml` | Tire une boule de feu de suivi |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_trackingfball.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Flèche de suivi

| Nom de fichier | Description  |
|----------|--------------|
| `tracking_arrow.yml`  | Tire une flèche de suivi. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_trackingarrow.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Nigromicon zombie

| Nom de fichier | Description                                                            |
|----------|------------------------------------------------------------------------|
| `zombie_necronomicon.yml`  | Fait que le boss génère des renforts zombies qui ciblent les joueurs. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_zombienecro.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Invocation de zombie

| Nom de fichier | Description |
|----------|-------------|
| `zombie_summon.yml`  | Fait que le boss invoque des zombies qui sont plus puissants mais ont moins de santé que les zombies par défaut engendrés par le pouvoir du nigromicon. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_zombiespawn.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

## Parents zombies

| Nom de fichier | Description |
|----------|-------------|
| `zombie_parents.yml`  | Fait que le boss invoque des renforts de parents zombies. |

<details>

<summary><b>Exemple visuel</b></summary>

<div align="center">

<video autoplay loop muted>
  <source src="../../../img/wiki/boss_powers_zombieparents.webm" type="video/webm">
  Votre navigateur ne prend pas en charge la balise vidéo.
</video>

</div>

</details>

***

</div>

***

# Format du script d'élite

Notez que certains pouvoirs sont au format [Elite Script]($language$/elitemobs/creating_powers.md) et peuvent être personnalisés.

Voici un exemple du pouvoir *attack_blinding.yml* et de la façon dont il est formaté en utilisant le format [Elite Script]($language$/elitemobs/creating_powers.md) :

<div align="left">

```yml
isEnabled: true
effect: SPELL_MOB
powerType: MISCELLANEOUS
eliteScript:
  BlindPlayer:
    Events:
      - PlayerDamagedByEliteMobEvent
    Actions:
      - potionEffectType: blindness
        amplifier: 0
        action: POTION_EFFECT
        duration: 60
        Target:
          targetType: DIRECT_TARGET
```

Cette fonctionnalité vous permet de personnaliser entièrement le pouvoir *attack_blinding.yml*. Vous pouvez spécifier quel effet de potion doit être appliqué, la durée de l'effet, la cible et l'événement qui déclenche l'utilisation du pouvoir par le boss.

</div>
