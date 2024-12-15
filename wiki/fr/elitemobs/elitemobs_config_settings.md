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
# Les enchantements d'élite remplacent les enchantements vanilla lorsque les objets d'élite obtiennent des niveaux d'enchantement qui superent les limites de vanilla.
# Exemple : si une épée d'élite est censée avoir une netteté de 10, étant donné que la limite de Minecraft est le niveau 5, elle aura une netteté de 5 et une netteté d'élite de 5.
# La netteté d'élite n'affecte que les mobs générés par EliteMobs. Ceci est fait pour que le JcJ et le combat vanilla ne soient pas déséquilibrés.
useEliteEnchantments: true
# Définit le nom d'affichage qui sera utilisé pour les enchantements d'élite dans l'histoire de l'objet.
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
# Par exemple, si la valeur est définie sur 10 et qu'un joueur a un équipement de niveau 50, il ne pourra pas cultiver des boss de niveau 39.
lootLevelDifferenceLockout: 10
# Définit si EliteMobs empêchera les objets d'élite de se casser lors de l'utilisation de la perte de durabilité du système en cas de mort.
# Les joueurs ne pourront pas utiliser les objets sans durabilité de toute façon, ceci est simplement pour éviter la perte accidentelle d'objets de haut niveau mais de faible durabilité.
preventEliteItemsFromBreaking: true
# Définit le niveau minimum, +7, des jefes qui peuvent laisser tomber de façon procédurale du matériel de diamant dans EliteMobs.
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

## MobCombatSettings.yml

`MobCombatSettings.yml` contient tous les paramètres de configuration liés au système de combat personnalisé et la plupart des options de configuration généralement liées au fonctionnement des mobs d'élite.

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
# Establece el mensaje enviado a los jugadores que participan en grandes asesinatos de jefes.
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
# Les mondes en mode cauchemar sont un mode de jeu où les jours sont plus courts et les joueurs ne peuvent pas```yml
 # Définit le niveau de l'objet à laisser tomber.  Habituellement utilisé pour les objets personnalisés qui se mettent à l'échelle
   # avec le niveau.
    level: 10
    # Définit la possibilité de laisser tomber cet objet spécifique.
    chance: 1.0
   # Définit l'UUID unique qui sera attribué aux objets à leur génération, de sorte que le même
    # objet peut être utilisé de plusieurs manières différentes (et il sera identifié de la même manière).
    uuid: c2f2549c-4590-4779-9170-f6198e0f4811
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
# Les mondes de cauchemar ont également de plus grandes quantités d'apparitions d'élites.
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

`Arenas.yml` contient les messages et les paramètres par défaut pour les Arènes que vous pouvez modifier.

<details>

<summary><b>Développer le tableau</b></summary>

```yml
# Message qui apparaît lorsqu'il n'y a pas assez de joueurs présents pour démarrer une arène.
notEnoughPlayersMessage: '&8[EliteMobs] &cIl faut au moins $amount pour commencer le match !'
# Titre qui apparaît lorsqu'une arène démarre.
startingMessage: '&2Démarrage !'
# Sous-titre qui apparaît lorsqu'une arène démarre.
startingSubtitle: '&2dans $count...'
# Message qui apparaît lorsqu'une arène est pleine.
arenaFullMessage: '&4[EliteMobs] &cL'arène est pleine ! Vous pouvez regarder en tant que spectateur pendant que vous attendez qu'elle se termine !'
# Message qui apparaît lorsqu'un joueur tente de rejoindre une arène active.
arenasOngoingMessage: '&4[EliteMobs] &cImpossible de rejoindre l'arène maintenant ; une partie est en cours ! Vous pouvez regarder en tant que spectateur pendant que vous attendez qu'elle se termine !'
# Message qui apparaît pour rappeler aux joueurs comment démarrer une arène après avoir rejoint un match en tant que joueur.
instanceStartHintMessage: '&2[EliteMobs] &aVous pouvez démarrer l'instance en faisant &2/em start'
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène.
instanceQuitHintMessage: '&4[EliteMobs] &cVous pouvez quitter l'instance en faisant &4/em quit'
# Message qui apparaît lorsque les joueurs rejoignent une arène.
arenaJoinPlayerMessage: "&2[EliteMobs] &aVous pouvez démarrer l'arène en faisant &2/em start\
  \ &a si au moins &2$count &ajoueures y participent ! \nVous pouvez quitter l'arène en faisant \
  &c/em quit"
# Message qui apparaît pour rappeler aux joueurs comment quitter une arène après avoir rejoint un match en tant que spectateur.
arenaJoinSpectatorMessage: '&2[EliteMobs] &aVous pouvez quitter l'arène à tout moment en utilisant &2/em quit'
# Titre qui apparaît lorsqu'une vague démarre.
waveTitle: '&aVague &2$wave'
# Sous-titre qui apparaît lorsqu'une vague démarre.
waveSubtitle: ''
# Titre qui apparaît lorsqu'une arène est terminée.
victoryTitle: '&2Victoire !'
# Sous-titre qui apparaît lorsqu'une arène est terminée.
victorySubtitle: '&aTerminé &2$wave &avagues !'
# Titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatTitle: '&4Défaite !'
# Sous-titre qui apparaît lorsque les joueurs échouent dans une arène.
defeatSubtitle: '&cA atteint la vague &4$wave&c !'
# Message diffusé lorsque les joueurs battent une arène.
victoryBroadcast: L'arène $arenaName a été conquise par $players !
# Titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerTitle: '&aDémarrer avec &2/em start &a!'
# Sous-titre qui apparaît lorsqu'un joueur rejoint une arène.
joinPlayerSubtitle: '&cQuitter avec &4/em quit &c !'
# Titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorTitle: '&aMaintenant spectateur !'
# Sous-titre qui apparaît lorsqu'un spectateur rejoint une arène.
joinSpectatorSubtitle: '&cQuitter avec &4/em quit &c !'
# Définit le message envoyé aux joueurs s'ils n'ont pas l'autorisation d'entrer dans une arène.
noArenaPermissionMessage: '[EliteMobs] Vous n''avez pas l''autorisation d''entrer dans cette arène !'
```

</details>

---

## Database.yml

`Database.yml` Includes settings for how you want EM to handle databases.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets whether MySQL will be used. By default EliteMobs uses SQLite. If you wish to use MySQL you will need a valid MySQL configuration.
useMySQL: false
# The host of your MySQL database
mysqlHost: localhost
# The port of your MySQL database
mysqlPort: '3306'
# The name of the database
mysqlDatabaseName: elitemobs
# The username for MySQl
mysqlUsername: your_username_mysql_here
# The password for your MysSQL database
mysqlPassword: your_mysql_password_here
# Whether to use SSL
useSSL: true
```

</details>

---

## dungeons.yml

`dungeons.yml` Includes settings that let you adjust messages that appear in dungeons and other settings like damage multipliers for applied effects.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the damage multiplier for poison damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
poisonDamageMultiplier: 0.5
# Sets the damage multiplier for fire damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
fireDamageMultiplier: 0.5
# Sets the damage multiplier for wither damage in dungeons
# This is important for balance as by default the damage is a bit too high for the dungeons as we design them
witherDamageMultiplier: 0.5
# Sets if PvP will be allowed in dungeons
friendlyFireInDungeons: false
# Sets the text that appears over resurrection banners in dungeons
dungeonRezInstructions: '&aPunch to rez!'
# Sets the text that shows how many lives players have left in a dungeon! Placeholders:
# $amount - the amount of lives left
dungeonLivesLeftText: '&c$amount lives left!'
# Sets the text for joining a dungeon as a player! Placeholders:
# $dungeonName - the name of the dungeon
joinDungeonAsPlayerText: '&fJoin $dungeonName as a player!'
# Sets the text for joining a dungeon as a spectator! Placeholders:
# $dungeonName - the name of the dungeon
joinDungeonAsSpectatorText: '&fJoin $dungeonName as a spectator!'
# Sets the title that will show up in the item description of instanced dungeon menus
# $difficulty is the placeholder for the difficulty name in the configuration file of the dungeon
instancedDungeonTitle: Start $difficulty difficulty dungeon!
# Sets the description that will show up in the item description of instanced dungeon menus
# $dungeonName is the placeholder for the dungeon name in the configuration file of the dungeon
instancedDungeonDescription:
- '&fCreate a new instance of the dungeon'
- $dungeonName &ffor yourself and maybe
- '&fsome friends!'
# Sets is spectating instanced content will be available.
allowSpectatorsInInstancedContent: true
# Sets the message that appears when an instanced dungeon is completed
instancedDungeonCompleteMessage: '[EliteMobs] Dungeon completed! It will self-destruct
  in 2 minutes!'
# Sets the message that appears when an instanced dungeon closing
instancedDungeonClosingInstanceMessage: '[EliteMobs] Closing instance!'
```

</details>

---

## Quests.yml

`Quests.yml` Includes settings for quests and what messages are displayed.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets if quests have to be returned to quest givers to complete the quest.
requireQuestTurnIn: true
# Sets the message sent when a quest is accepted.
questJoinMessage: '&aYou have accepted the quest $questName &a!'
# Sets the message sent when a quest is abandoned.
questLeaveMessage: '&cYou have abandoned the quest $questName &c!'
# Sets message sent when a quest is completed.
questCompleteMessage: '&2You completed the quest $questName &2!'
# Sets the message sent when a player tried to abandon a quest when none are active.
leaveWhenNoActiveQuestsExist: '&cYou don''t currently have an active quest!'
# Sets the confirmation message sent when players try to leave a quest.
questLeaveConfirmationMessage: '&cAre you sure you want to abandon your current quest?
  Do &a/em confirm &c to confirm your choice!'
# Sets if some of the messages related to quests will use titles instead of chat messages.
useQuestAcceptTitles: true
# Sets the title sent when a players starts a quest.
questStartTitle: '&aQuest Accepted!'
# Sets the subtitle sent when a players starts a quest.
questStartSubtitle: $questName
# Sets if titles will be sent when players complete a quest.
useQuestCompleteTitles: true
# Sets the title sent when a player completes a quest.
questCompleteTitle: '&2Quest Completed!'
# Sets the subtitle sent when a player completes a quest.
questCompleteSubtitle: $questName
# Sets if titles are sent when players leave quests..
useQuestLeaveTitles: true
# Sets the title sent when a player leaves a quest.
questLeaveTitle: '&cQuest Abandoned!'
# Sets the subtitle sent when a player leaves a quest.
questLeaveSubtitle: $questName
# Sets if messages are sent on chat reporting quest objective progression.
doQuestChatProgression: true
# Sets the color codes for completed objectives.
ongoingQuestColorCode: '&2'
# Sets the formatting for progression messages of kill quests.
killQuestChatProgressionMessage: '&8[EliteMobs]&c➤Kill $name:$color$current&0/$color$target'
# Sets the formatting for progression messages of fetch quests.
fetchQuestChatProgressionMessage: '&8[EliteMobs]&c➤Get $name:$color$current&0/$color$target'
# Sets the formatting for progression messages of dialog quests.
dialogQuestChatProgressionMessage: '&8[EliteMobs]&c➤Talk to $name:$color$current&0/$color$target'
# Sets the maximum amount of accepted quests a player can have.
maximumActiveQuests: 10
# Sets the message sent to players when trying to accept an amount of quests that exceed the active quest cap.
questCapMessage: '&8[EliteMobs] &cYou have reached the maximum amount of active quests
  (10)! &4Abandon or complete at least one active quest if you want to get more quests!'
# Sets if scoreboards messages will be used for quests.
useQuestScoreboards: true
# Sets the formatting for scoreboard progression messages of kill quests.
killQuestScoreboardProgressionMessage: '&c➤Kill $name:$color$current&0/$color$target'
# Sets the formatting for scoreboard progression message of fetch quests.
fetchQuestScoreboardProgressionMessage: '&c➤Get $name:$color$current&0/$color$target'
# Sets the formatting for scoreboard progression messages of dialog quests.
dialogQuestScoreboardProgressionMessage: '&c➤Talk to $name:$color$current&0/$color$target'
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
# Sets the message sent to players to activate quest tracking.
chatTrackMessage: '&8[EliteMobs]&2 Click here to track your quest!'
# Sets the hover message of the quest tracking message.
chatTrackHover: '&2Click to track!'
# Sets the command sent when clicking on the tracking message. You really should not modify this.
chatTrackCommand: /elitemobs quest track $questID
# Sets the message sent to players when activating quest tracking.
chatTrackingMessage: '&8[EliteMobs]&9 You are now tracking a quest!'
# Sets the hover message of the quest tracking enabled message.
chatTrackingHover: '&2Click to untrack/track! /em -> Quests to track a different quest!'
# Sets the command sent when click on the quest tracking activation message. You really should not modify this.
chatTrackingCommand: /elitemobs quest track $questID
# Sets if quests are automatically tracked when accepted.
autoTrackQuestsOnAccept: true
# Sets the message that appears when the destination of the quest could not be found.
noQuestDestinationFound: '[EM] No quest destination found!'
# Sets the message that appears when the quest target is in a different world.
questDestinationInOtherWorld: '[EM] Go to world $world!'
# Sets the message sent to players when trying to accept a quest they have already completed.
questAlreadyCompletedMessage: '&8[EliteMobs] &cYou already completed this quest!'
# Sets the message sent to players when trying to accept a quest they do not have the permission for.
questPrerequisitesMissingMessage: '&8[EliteMobs] &cThis NPC has some quest(s) you
  can''t accept yet!'
# Sets the message sent to players trying to get a quest for which they do not have the correct guild rank activated.
lowRankDynamicQuestWarning: '&8[EliteMobs] &cYou can''t take these quests with your
  current guild rank! Increase your guild rank to accept these quests.'
# Sets the formatting for the quest turn-in message.
questTurnInObjective: '&a2Talk to $npcName'
# Sets the maximum amount of characters inventory-based menus for quests will have before breaking the line.
horizontalCharacterLimitBedrockMenu: 30
# Sets the maximum amount of characters per item entry in inventory-based menus for quests before creating another item to continue the entry.
itemEntryCharacterLimitBedrockMenu: 300
```

</details>

---

## resource_pack_config.yml

`resource_pack_config.yml` Includes settings related to the EliteMobs resource pack.

<details>

<summary><b>Expand Table</b></summary>

```yml
eliteMobsResourcePackEnabled: false
forceResourcePack: false
resourcePackPrompt: '[EliteMobs] The use of the resource pack is highly recommended!'
resourcePackLink: https://www.magmaguy.com/downloads/elitemobs_resource_pack.zip
```

</details>

---

## Sounds.yml

`Sounds.yml` Includes settings that define which sounds should be played when certain EliteMobs interactions are performed. The sound files are stored in the resource pack.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the sound that will play when a treasure chest opens
treasureChestOpenSound: elitemobs:treasure_chest.open
# Sets the sound that will play when a player ranks up at the guild
guildRankUpSound: elitemobs:guild.rankup
# Sets the sound that will play when a player prestiges at the guild
guildPrestigeSound: elitemobs:guild.prestige
# Sets the sound that will play when a player progresses a quest
questProgressionSound: elitemobs:quest.progression
# Sets the sound that will play when a player completes a quest
questCompleteSound: elitemobs:quest.completion
# Sets the sound that will play when a player abandons a quest
questAbandonSound: elitemobs:quest.abandon
# Sets the sound that will play when a player accepts a quest
questAcceptSound: elitemobs:quest.accept
```

</details>

---

## Wormholes.yml

`Wormholes.yml` Includes settings for the EliteMobs wormhole teleports.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets the message that appears when a teleport is used for a dungeon that is not installed.
dungeonNotInstalledMessage: '&8[EliteMobs] &cThis portal doesn''t seem to lead anywhere!'
# Sets the message that appears when a wormhole is used for a dungeon that is not installed.
defaultPortalMissingMessage: '&8[EliteMobs] &cThis portal doesn''t seem to lead anywhere!'
# Sets if the reduced particles mode for wormholes is used. This is especially recommended if you are allowing bedrock clients in.
reducedParticlesMode: true
# Sets if wormholes don't use particles at all. Not recommended, but might be necessary for really bad bedrock clients.
noParticlesMode: false
# Sets the message that is sent when a player tries to use a wormhole but does not have enough currency to use it.
insufficientCurrencyForWormholeMessage: '&8[EliteMobs] &cInsufficient currency! You
  need $amount to use this wormhole!'
```

</details>

---

## Database.yml

`Database.yml` Includes settings for how you want EM to handle databases.

<details>

<summary><b>Expand Table</b></summary>

```yml
# Sets whether MySQL will be used. By default EliteMobs uses SQLite. If you wish to use MySQL you will need a valid MySQL configuration.
useMySQL: false
# The host of your MySQL database
mysqlHost: localhost
# The port of your MySQL database
mysqlPort: '3306'
# The name of the database
mysqlDatabaseName: elitemobs
# The username for MySQl
mysqlUsername: your_username_mysql_here
# The password for your MysSQL database
mysqlPassword: your_mysql_password_here
# Whether to use SSL
useSSL: true
```

</details>
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
# Définit si EliteMobs considérera les houes comme des armes valides pour les calculs de dégâts.
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
# Définit le niveau minimum, +7, des jefes qui peuvent laisser tomber de façon procédurale du matériel de diamant dans EliteMobs.
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
# Les mondes en mode cauchemar sont un mode de jeu où les jours sont plus courts et les joueurs