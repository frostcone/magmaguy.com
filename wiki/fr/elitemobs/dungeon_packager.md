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

## EliteMobs configuration settings
There are various configuration files that EliteMobs uses.

The following information will help you with modifying those settings.

<div align="center">

### Boolean

Boolean values are simple, they are either true or false. Here are some examples:
```yml
isEnabled: true
```
or
```yml
isEnabled: false
```

***

### Integer

Integer values can be any whole number, including negatives. Here are some examples:

```yml
level: 200
```
or
```yml
level: -100
```

***

### String

String values are a sequence of characters or words. They are set as follows:

```yml
name: hello world
```

or

```yml
message: "hello world, this contains a quotation mark "" "
```
Note: For strings that you write in your config, you do not need to add quotes around strings unless your string has a special character in it, such as a quotation mark or a colon.

***

### Double

Double values are a number that can include a fractional part.

```yml
damageMultiplier: 1.2
```
or
```yml
damageMultiplier: 0.5
```

***

### Color Codes

Color codes are set with a `&`, as an example `&a` for green, `&b` for cyan, `&c` for red, and so on. There are special formatting codes too.

| Code | Result |
| --- | :-: |
| `&0` | Black|
| `&1` | Dark Blue|
| `&2` | Dark Green|
| `&3` | Dark Cyan |
| `&4` | Dark Red|
| `&5` | Dark Purple |
| `&6` | Gold |
| `&7` | Gray |
| `&8` | Dark Gray |
| `&9` | Blue |
| `&a` | Green |
| `&b` | Cyan |
| `&c` | Red |
| `&d` | Pink |
| `&e` | Yellow |
| `&f` | White |
| `&k` | Magic / Obfuscated |
| `&l` | Bold |
| `&m` | Strikethrough |
| `&n` | Underlined |
| `&o` | Italic |
| `&r` | Reset Formatting |

Combine multiple formatting codes. Example:
```yml
name: '&a&lCool boss!'
```
This would render as **Cool boss!** in bright green.

***

### String List

A list of strings is formatted as follows:
```yml
messages:
- hello world!
- my name is $playerName!
```

***

### Map List

A map list is structured like this:

```yml
list:
  map1:
    value1: value
    value2: value
  map2:
    value3: value
    value4: value
```

***

### Material

Material values should be a valid Minecraft material type which can be found [here](https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html).

```yml
material: DIAMOND_SWORD
```
***

### Filename

Filename values should be a yml file that resides inside of EliteMobs plugin folder.

```yml
filename: test_boss.yml
```

***

### Multiplier

A multiplier value is any number that is positive and greater than 0.

```yml
damageMultiplier: 2.0
```

```yml
damageMultiplier: 0.5
```
or even

```yml
damageMultiplier: 3.14159
```

***

### Serialized Location

A serialized location is a text value formatted as follows: `worldName,x,y,z,pitch,yaw`.
Pitch and yaw are the direction players are facing as set by the game.
```yml
location1: my_world,10.5,60,10.5,0,0
```
or, if you only care about the coordinates, you can set the last two values to `0`:
```yml
location1: my_world,10.5,60,10.5,0,0
```
Note:
- Some location fields like in custom boss reinforcement locations only require a relative location, which doesn't need the world name:
```yml
location: 10,10,10
```

***

### Chance

Chance is any value that is set between 0.0 and 1.0

```yml
chance: 0.1
```
or
```yml
chance: 0.8
```

***

### Location

Location is a text value formatted as follows: `worldName,x,y,z,pitch,yaw`.
Pitch and yaw are the direction players are facing as set by the game.
```yml
teleportLocation: my_world,10.5,60,10.5,0,0
```
or, if you only care about the coordinates, you can set the last two values to `0`:
```yml
teleportLocation: my_world,10.5,60,10.5,0,0
```
# Comment créer une carte EternalTD personnalisée

## Création du fichier level.yml pour votre carte

Commencez à créer votre carte en créant un fichier de configuration de niveau en suivant ces étapes simples :

1. Commencez par créer un nouveau document texte et donnez-lui un nom comme *nom_de_votre_niveau.yml* (remplacez "nom_de_votre_niveau" par le nom réel de votre niveau/carte).

2. Ouvrez le fichier dans votre éditeur de texte préféré.

3. Commençons par la partie amusante ! Ajoutez le nom de votre niveau en utilisant ce paramètre :
```yaml
levelName: "&aMon super niveau"
```
N'hésitez pas à l'agrémenter de quelques couleurs Minecraft ou d'autres modificateurs de texte.

4. Maintenant, donnez du caractère à votre niveau avec une description cool :
```yaml
levelDescription:
- "&aMon niveau est plutôt cool."
- "&aJ'espère que vous apprécierez !"
```
Vous pouvez ajouter plus de lignes à la description, mais il est conseillé de la garder brève.

5. Place aux vagues ! Spécifiez quelles vagues d'EternalTD votre niveau doit utiliser :
```yaml
wavesConfigFile: my_waves.yml
```
N'oubliez pas d'utiliser le nom réel de votre fichier de vagues. Une vague par niveau !

6. Définissez le monde (construction) que votre niveau utilisera :
```yaml
worldName: my_world_folder_name
```
Utilisez le nom réel du monde trouvé dans le dossier *worlds* d'EternalTD.

7. Enfin, choisissez l'environnement parfait pour la configuration de votre niveau :
```yaml
environment: NORMAL
```
Vous pouvez choisir entre NORMAL, NETHER ou THE_END. Faites votre choix.

Votre fichier de configuration de niveau est prêt ! Le reste du fichier sera rempli par les commandes EternalTD que nous utiliserons dans les étapes suivantes lors du mappage de la construction.

## Préparation de votre construction
Avant de mapper votre construction pour l'utiliser avec EternalTD, il est essentiel de la configurer de la manière suivante :

- Configurez-la dans un monde vide. Si vous utilisez Multiverse, vous pouvez utiliser la commande :
  ```
  /mvcreate nomdemondevousici NORMAL -g VoidGen:.
  ```
- Ayez une bordure de monde étroite autour de la construction.
- Créez un cylindre de barrière à quelques blocs sous la construction avec une hauteur d'un bloc et un rayon suffisamment grand pour atteindre la bordure du monde (rayon de 200 blocs recommandé). En utilisant WorldEdit, vous pouvez exécuter :
  ```
  //cyl barrier 200 1
  ```
- Définissez le point d'apparition pour qu'il soit au centre de la construction dans un endroit sûr.
- Appliquez les règles suivantes :
    - /gamerule doWeatherCycle false
    - /gamerule doDaylightCycle false
    - /gamerule doMobSpawning false
    - /gamerule doFireTick false
    - /gamerule fireDamage false
    - /gamerule mobGriefing false
    - /gamerule disableRaids true
    - /gamerule announceAdvancements false
- La zone de jeu de la carte doit se trouver au même niveau Y. Tout ce qui est plus haut ou plus bas sera ignoré lorsque nous commencerons le processus de mappage.

## Mappage de la construction pour une utilisation avec EternalTD
Pour mapper la zone de jeu de votre construction pour une utilisation avec EternalTD, suivez ces étapes :

1. Mesurez manuellement la construction, en vous assurant d'inclure uniquement la zone de jeu et rien d'autre. Notez les coordonnées au fur et à mesure que vous mesurez.
<br>La zone de jeu doit inclure les sections de départ (apparition de monstres) et de fin de la carte. Le départ est généralement construit à l'aide de blocs verts et de blocs rouges pour la fin.

2. Commencez par mesurer les axes X, Y et Z de la construction. Tenez-vous à un coin de la zone de jeu de votre carte sur l'axe X et écrivez la coordonnée indiquée (vous pouvez utiliser les coordonnées des blocs pour cela). Déplacez-vous du côté opposé de l'axe X et écrivez cette coordonnée.

3. Pour l'axe Y, tenez-vous sur la **zone de jeu** et écrivez la coordonnée indiquée.

4. Répétez le même processus que celui effectué pour l'axe X pour mesurer l'axe Z. Vous pouvez jeter un coup d'œil à cette image d'exemple pour vous aider à comprendre ce que nous essayons de réaliser ici :
   ![Ejemplo de mapeo](https://i.imgur.com/IZfh2Nt.jpeg)
   Remarquez comment nous ne mesurons que les coordonnées où nous voulons que se trouve notre zone de jeu et en ignorant le reste. Comme dans l'exemple, assurez-vous d'inclure le début et la fin lors de la mesure de la zone de jeu. <br>Si la zone de jeu que vous mesurez est plus large à une extrémité et plus étroite à l'autre, vous devez mesurer la section la plus large.

5. Après avoir terminé les mesures, vous devriez obtenir quelque chose comme ceci :
   ```
   Axe X : -57, 56
   Axe Y : 65
   Axe Z : 34, -34
   ```

6. Réorganisez ces nombres du plus élevé au plus bas pour obtenir deux ensembles complets de coordonnées XYZ :
   ```
   56 65 34 (valeurs XYZ les plus élevées)
   -57 65 -34 (valeurs XYZ les plus basses)
   ```

7. Utilisez la commande suivante pour sélectionner les coordonnées :
   ```
   /etd selectfloorcoordinate Xhaut Y Zhaut Xbas Y Zbas
   Exemple : /etd selectfloorcoordinate 56 65 34 -57 65 -34
   ```

8. Les coordonnées ont maintenant été sélectionnées et sont en mémoire. Si vous obtenez une erreur, c'est que votre mesure était incorrecte ou que la zone de jeu n'a pas été correctement construite. Pour vérifier si nous avons mappé correctement la zone de jeu, exécutez la commande suivante :
   ```
   /etd register votre_nom_de_niveau.yml test
   ```
   Remplacez "votre_nom_de_niveau" par le nom réel du niveau/mapa que vous essayez de créer. Si tout a été fait correctement, vous devriez voir des barrières marquant chaque tuile de votre zone de jeu.

9. Examinez la zone de jeu et assurez-vous que tout ressemble à ce qu'il devrait être, puis exécutez à nouveau la commande, mais cette fois sans le *test* à la fin.
   ````
   /etd register votre_nom_de_niveau.yml
   ````
   Cela enregistrera maintenant la zone de jeu dans votre fichier de niveau et votre fichier de niveau devrait maintenant être prêt à l'emploi.

## Recorte du dossier du monde
Il y a plusieurs fichiers et dossiers situés dans votre dossier de monde que nous pouvons supprimer car EternalTD ne les utilise pas tous. Cela réduira la taille de votre monde et facilitera sa distribution.

Pour un environnement NORMAL :

Pour préparer votre monde, **conservez** les fichiers et dossiers suivants :

1.  dossier **region**

2.  **raids.dat** à partir du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors de la copie)

3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour l'environnement NORMAL.

Pour les environnements NETHER et THE_END :

Pour préparer votre monde, conservez les fichiers et dossiers suivants :

1.  dossier **region** à l'intérieur du dossier **DIM-1** (assurez-vous qu'il se trouve à l'intérieur du dossier **DIM-1** lors de la copie)

2.  **raids.dat** à partir du dossier **data** (assurez-vous qu'il se trouve à l'intérieur du dossier **data** lors de la copie)

3.  fichier **level.dat**

Vous pouvez supprimer en toute sécurité tous les autres fichiers et dossiers situés dans le dossier du monde. Cela configurera correctement votre monde pour les environnements NETHER et THE_END.
